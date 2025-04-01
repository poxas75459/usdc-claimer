/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "322QdvGeRN4CJUPuwfwpkcVMJmyo78xezBkQcy9FbgnXpwHc65XUZdmVaPGK8BRqcarDcg8FfcmbKtPio6LCgUUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFVfqWNo8Y4TYe3jqxKuMLhqc4ExfzbdACdPpnrhbXytzgw76wu4JzatHtUUQbdK2obbu9AJ1PkufPuZ2yWanB",
  "key1": "4tQHrwEgSFTvAm1UmQeE21H7dSYUcVJjbAutGDZpgGybGteywsjwVWiMDF1LLMEYC9wMNX62KkUsuc2HXS2Fzir2",
  "key2": "2xGVKxPqSifSSzFRqyBr3LgGKiKMM7UwR5zsG1xeQmA5Q4KcRfrBGfbwBueDwiPMX6wpxsYn59PTVA48oJJzDx9P",
  "key3": "2sS31oqnMwwZfh3gaaLvdgd25fnxSY3MV3KeMiiAHmsUeQ9PzcMexvawwXN9nP9sEjDLgJCpLof4Fs8bnHkV4vvx",
  "key4": "3efo1rMd7W1KaXMbDNjHnm1retVu41Fpi7Lm8EV99da25rjQm6NrkvBiVVNuWawMoJJveuuu5SvVZ9ccxe7Q5kYM",
  "key5": "2wtxjLFo3hULzX5v9XaJbUuFxYoRwarVCDyGKb2oUt8n53ToLpxguZ2A3wumTWpvVEkmHqxAY8ddUkFNq2PpadCW",
  "key6": "3Tpbeb5ywyFzTHt3vJ3gB7TZQvQtRMjW2ymdChrzjZ3mB9xFPvvumU3uxHgCya5j4FHDCvYmXrHuPFu1Ybi5KeLu",
  "key7": "4K3uGGrdzpCd4hPFXETynSDGRUC4HXDoNqXJFW63Hfdzf9gCfDmGLiLGLDgKfivDyYkdsUzAwpwMRZES7Gr5JXUc",
  "key8": "aMoi1yVyzrNoHTCr8zKQS1NCwmk3MSAcJHNwCQepX2XZyq6rYMMq9dMetAoy41diqjo3X9f6373zHsKCHJcogvp",
  "key9": "wNiM5wXhS7ufPgtx5yVqV4G97VMEUuDasBLrFAhei3W8mBii2GJ5PwdHLxSNjoy3UP4nYe3J1qeRTXciQWHHEpL",
  "key10": "2KmLbd7Ff5ZD2f9oxFi6z7dMXTvgQMiKcGeJNpVNujdWUjfCyYLhojgsMSiKccCui6Nq8Gzm1cod9vCyeP5yRoyS",
  "key11": "2DQTrNqyac3zW1Kv6Je52U2oyfCtSpsxagSUrWYGWxdLdR6W84YsdjyeipmsLsojJ2Hz3RZoSyeqpbcfet4Rr5MV",
  "key12": "5Wa6hvTim1vmFwKq6p8YCuanPhGF7q2TK8N9n4askNWDmzjWKooCMCoWzaUGAS5PVcfPbyZRN8VJ13BJpuWBKTZW",
  "key13": "4V9PVuyxgztvdiVjXS4HzqNbnt3VUYn4dVx5NBvjDRHyJ669ajbEcViUCJwEPNNuJPtFC5AJXfFnLHnkRSfxmzgK",
  "key14": "3wHBSRwBAB7tWE7GQtcoy5VMECYdWu5H2mh6YXQrnLukX1Q8FeESHTWg7Rg1CbnTZjtotdqvcrARLY7GKA4u8gRD",
  "key15": "5mL6wP66aYD7Foh3JWznitCeQHWrqmMuXxGBiKtsaL9EGSFGzADHvggJ2t2CArbAoZcSs1hvY4KE9fGAYnWMLGgu",
  "key16": "5n48yy24gzBMv9gdTbDqQxpGHvkbt6163yYUKwdoPv7V8qyNxzzBKsTFFE3ZABttk4pXtNmdGmNDMe58rPCg38pB",
  "key17": "EFSU9HnpCrheQURt5apaPpPTReHuhJa9CFvJNmfzGqHbMpGpaqQUztNAWytW9GaQQuc5E59ueJHH1ViSNgz2t4p",
  "key18": "khGLWQbF7VYFmRnqr5eZ2nu4epgzjVmFMbVU1YMTvgmuHXdnSSZpnRHPXPW2iDajfbKdXHbqfDZjCUnWfsKvR34",
  "key19": "3m5tFK1eUVuLMTCu7BVEjb7jxftsDjze4cXqDVir4PhJATdfY1t3pPojVEh6P1bofPZQtGSw6mFFKVnzpjWesSX6",
  "key20": "4T1Vy3rf5Y5inszSApfCGR1MqFLeTmJGBrBKeNHdz6ugKhUoovxdkjMJsUufikiYPh31kGTj4Mzmu5eDAngiusco",
  "key21": "3Jm5UyfsFxPzS9LB2ZdkAKF6TvcRBXJCXJogpxujq3Z7jLquZokUvvn6ve4RVz4RiaoPDSYFrBx2DWcJ2sChmjYz",
  "key22": "33fY8dtz6D4mUV7srsPFRXBXd8tKwk9xpKtUdRzkkDRuHRCNQ1CPTyaVm4eVAKHT6aGFk2Jq1wNvSEWiFWuSx6Lm",
  "key23": "4e4m9LyFVdoofTPzoB658NZUSUZRJXf4Pg6iPJ61dgduJQtANBcuer8Pciy7ydm6a7U7WdYZB7iVCBcaMd7pnVnx",
  "key24": "wSvFLZQhapc2TLfZLHkLn4JgaSj5Z4i76btX93jJL5q3as4AH8966ECGLACH5C247QjQCm8iKpfzJTTAx8LX9XN",
  "key25": "5nFfAKNbbZogd7ZW9pD2AdoG1HG5BqqhEaY83HxDHHJVS2UPXSJ63eSwJeHhPUGvB8kN86rnKzkj7VkogkFNH13F",
  "key26": "13fnY1TKqRvofpLttMTBj6UA3cNAWoFyvAjaNDaYdqZZmQ82cMn3cLEB7HgJ6mQt5SxEZ6fEDoaKoEKb5VUxiqF",
  "key27": "3wcP1kNmJnYT3Cdq9x7XXjvkeLAusxWQQbsjRKBckkpg2bwGPs3BDUVJLJuKdW5mTbgd2fdMzsUVS5sACiLYyyT9",
  "key28": "5yBvNX7Jeuj4ZVdh2RijCxJFY7b6RtEeAkd4SvMjkknL1Wh3f9Fo9uS48R1fH2gewMRmjXWxynrcKhVdjD7HT4p2",
  "key29": "3DAnmMLQqoW91kKSq1RqsJ31tQ8FnTWDyyFKjgkDjQ7D8uReQ9qQHC1YKo5VajsVc6DeELSnKKjCiSemhsW65H2X",
  "key30": "dxhQvhoVxmE9aoEHQws8BvFU6w9e7ih5wAXphcgNYXULPXw55qtKQi5UM9yWSPHA6RuGepicanVx5b229LkQm2T",
  "key31": "2jG1JNURkXK5L9sv61Zh76ecyzUyvDomEsCAFeJuEFQiDGx1Qdy6WpCZZCKcfvLWc5Ms1DkYiqVxpHLmC52KGjcL",
  "key32": "4TWHNJbsR9meu4ZXBjZXUiGtjjAfUDmYPyxgWmPixSKMe9GHVVGLYfpdNdhuDpMs3shJhTvW491D12QH6WE4QoYs",
  "key33": "2FZaXtgjb29JqB5n5nrDoXSeJYWvHjMaz4Stw16rTVggBoeg9i1q4LD7Y8tSWpfoMrukQ8tMpyYr3KReEaeurof4",
  "key34": "3TDzgzbLSVxmAYprSpwkMEmrt5hAnvmHpAHV6Gy45E8YfUedqVQEnEh37aAsWVQNV2G8bY1wqcVD5ES47rFGeNTE",
  "key35": "DF98wy2Xq4veie64HXgJ5e8ptctss26N9q3F8fvk9WtmK8hjKZCMkfyzmBURxh9hXDzQJ5QncTKf5Agpqrw14Lw",
  "key36": "5Md5vb7gYiXLaEfTTMG91Tq4dAU43PZh37JBSftpchg48DgS3tqaFvN7p3UEo4FyXGtyGiYEpjWFq8v76ZEsRjsf",
  "key37": "2YKCrCSyBDVX8KhxaxmYBiySKmJdiQR3xTPnsTeUy5r3YAUzCXDv9STfbNqyV4Gm1gMJ3BwB69jKvX2tTnDpg1dF",
  "key38": "4cA2YrhLCLQJAfZrcLnZ5c7vL28vQYvxuc1TA8zpZEW1nqv9moB3iJmaN2RawEfrwnHemMJ2hZHvU7DA12Hy97eH",
  "key39": "4LZaUPt5WCj6PdxmMYC2WE9UFwxLs9MBHzsae4u1VawNo7pwPg5aoYVKUU4t5YTXsVSETtVb7nF9QqAu7gjshgzm",
  "key40": "3eMaxvZLokBTZG3TqQcFqneA9r5a4uEmYCY5h6pTFBxNMA3q4KF22nGifvhpSCd3k9e3imnjY3wLBdME3gjDsu8Z",
  "key41": "52Y5wGjwaBQZikZsJ7Sz7UfXYfgx8mRt4oRg7qJ5FLp1TFSnbc9C8pjNRUfZh1pvQLrUwm1zpfBRKa2WqvdLjxWB",
  "key42": "5XsvtfSQ8VxVstkhwKocS4G3bd9RQeBQNhDPynqcqWrnNVpaDJUosBHve3M7vDjosYjqPLqcfVDEyiTCUwcx3Lqr",
  "key43": "3j6ZVpXgvzXzUdKjttjyeW9ewQ76SDvsdqp6NdZoLjtFtmi8sBMEySKAYLS7HtukNWJQZ8oA22QV5VNvGFgP5uYX",
  "key44": "fSDwDJcsz9JHYCKyoW9xSG4prtfg8Tae6s7Bzc7jHLWxyhW8o5LiebowV44xv7U9oFCgA5br92AC6WUH5kPMnun",
  "key45": "4gTZ8My5UT3som9rDWQTqW471pjPfxcAgPjfLifbZiYfZPUVXhYQSbNdFar3SvGVhgwsg1gzJCEArQcCiiKSA72i",
  "key46": "XgWKzv8NJvFvU28BsRChWfrPbMyfsmTsNtyZ4VZ6oP3tnjU3hasweGVckV7q5KVvRPKFA2ZRiFDMznHhFUt5p85",
  "key47": "47vrgXrdc7c2JYo2xuAhXorNiANWUHHNmnsv3Xb7BoWf58AbRGYUyXoqhzWtPBb3L2Jmo87MiVJVbf4Kj2Ays6NW",
  "key48": "5P7hMKBGErqnLwAysYQ75os6pDYUWzfEGKvRqGgwPEkncjo8ziFY5hDFk8wBSvovanTkgsyW5G6k1kHKfZqNeN8C",
  "key49": "2pt8rRzCNeUL8tuRWfiZgzogRFQ3tLbWoXDrqZkLcWu5C2pvCHko4STKdASPgLiiuaGjQnwGpL2g38mYgE8sXViW"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

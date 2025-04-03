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
    "2ui1L6XXpuK74hobNvxYob3zVmngD6aWHcHZcNDvCbefMAvVU9i8eKZAPdKtMbYnXtJNADyKkGxxDSTvZZ9rhRfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kesAX7YJCb88S6siigcxiv5hVKsNSGEJparw4BXcyfSKzGVMaSBsAjt6YvyLgtBzz1Q6SCdtatrbniPrvE9woJt",
  "key1": "4nsKd81c6f3siGvxJUgU9xN5R8vMZ1YzBKzrZCoLqz8HUKYchUfkEnyjpCpZ2QHiVKV3zyxJ8tYEK8UKPZaiEfoG",
  "key2": "4z46nQaiwuuEocnVDNzrcVcNcdMw3wpSFy7FUuAUJiA4cvLB58YESG43nKoy4taisWwLwu4adsUmnQz13tKrmAWu",
  "key3": "sSULiy93hAByJRZjiLcUTgAboqwcwL7EAqJdA5C8MP77ZHyPcERpw2BqhxvnhBP8q2D3zWzZgQVJRhe256xBRQa",
  "key4": "vGjV9V4RSQ44M1sV1VHYdCffdrTZ6GPDaaJ1y5sZdSx7tQmnH6SdfHQP5mgroNULakAnXFMr9EQfckhQBXEts4h",
  "key5": "2nVYAppqvWvJdj8f32SNXqbTKCq7fZGTj13B4X7G1PrAvxF3WCvfkSNCyM3BfEUfVw9d4D39q2Pmmf1XNsZCsoMV",
  "key6": "UQ9soqozy6qxoHPQwdDPsNfLXajBMCCQYSpLgG7bomVA69P7GcufnmdVDJpN9gSXdFA1rZLeHsSUYmdD22kyPKN",
  "key7": "459SjisqyWjEZNzxC4yPsYgbdiok4witBWkNPhrJioGT4gb84amuu8iDX7Ay4RApPD4wsByUg5j1FuBAkWDydDb",
  "key8": "4HG2YsELUW4nRMK68tsgJM9UNX4GZqL2rNFLFrMQ42TvsqsozJccyX2GKFCjQwqcKZ43GEVFuBUejhgeZinA341k",
  "key9": "5jAtA8yGTPjR4wqm6xKTVvm8jtBT4kEAFQrxmEKJBTWVHHT7fWoiYkpmchvoJTLrjJsyntJVmD6E9sPW7KTwmJ2k",
  "key10": "5JGFxPeHc4P8XmfcKENAShBTKuzWs2B5eyy89nHSc13b6J3n3pKaFaRVWhzgTU9nbxGign4Wizu7cwj15qnAK61Z",
  "key11": "65RcpaUYq3aVkfvBGoz7rU9AciPqyVSYvDTjJQwTUsb56wsxRjFQJ44v6LtisubVcgq8XzmkMSVfAJhAZnduFRRa",
  "key12": "31h3xATkJ7VME4y3tzNCsCfkBdPqM2mTg49eT5MPqsQW7gsHoqvFsYLCaiwFJiq42evSV64FzRjLKJmjvLDZBsx4",
  "key13": "64RkhU42eXPtwDt598EZmtxqxfzSjiVZRMAn1xotyPEf119RMnemoKWC3VdbXNtL3rhLv8NPny2yjxRwx4rvxxbn",
  "key14": "5AJAZuKZE6cJKkH1SZQrYx8WfUXycdxEK4NDwFNP46faJ6j1s2PgT2bh8ygmXPKTTrGGUiz5pCWXAF11z9RvQpLJ",
  "key15": "3dW78qrmhEqGxJsywcXwYhKLpEz1g6Zs1PmAgippzCqt1r8VGeZL9KrojguEa9dJb9umLkFm4GJtWfPZSjudVhnj",
  "key16": "33jWtCdoCzyCRW8YUAYUZRcUhkXjkdjhZ7fg5F2hUL8ioFY2ZEGe5N9NggUs51fLE527dhu4fwGSh5eyohKwpNgo",
  "key17": "67ECdQSrHCXGDRZXKwEu2zUAYT94ThuopphRb7XByMUgq5faRD1mT4SsxvwchtzqSEYx6VgDvWL7qUypWu2ycKiN",
  "key18": "3gmYy1xXeTrckR832oYrfhozokyRSR24KJm1pP75X8Cyt4P7cARJgSmSL24Ygo2jVYkcuWjgbb7Qh6c29je86pTg",
  "key19": "3MAtz8eaTac2BZnWjTtpxA8BUZBxxKuNN3t4kBnDJJaHjk11HdASxThwoRo9uy42gKcyvJYSrAKXamZHnrSQxKt1",
  "key20": "4tqY8Mrs9KfSgY7LMpo6JWWozTEPDXjcAexrijU7cvLcCvtHSBF7AGWP1J14oMT76JVCopsWonFRpnELNjr4Yc9n",
  "key21": "2NHAZD8A5cBgr7LueHvj8HhC4hBHq3D95wS8ykeB4bS12ji2U7JguGJftaZxHao4ywZopGxDozw5njqbwsDoBF65",
  "key22": "3m3YD72YZRY6SLRKvReVrStaJedj25yqrQPFEUbfVSAfLzqJ5ybiaFHGzYYqWKomA7rbBSgBi9UCK2TnrdnJCMeA",
  "key23": "3DVFVhdoStSbokBjNVQzgz3YVsvwajtRm5uECHk4me2LHaRvEWUUdrN1F4hbrmx1kkHVohpouXgGjEmrC1kavN5i",
  "key24": "AdFdusJiM7SiQCBT1gcTWfdT8wkTM33oCGy1Js6WmwdrnFixyyK1d1yCHkBNphiCqk8nNLmFH5jzo9LBCaokE5y",
  "key25": "5VL5MwyJpqcT85cVBtVZJVTQNK5voGh6T7DAfHUmKN7uXpqnGPPcnD4SfA6RjU4o5CC9kmsuXY7AHGUHrqofwXUD",
  "key26": "3S2Zyb2WPXwcMBCzRefXzUw96jJrc7KH42uNw9Eg6FFq4dyfV76bq6GCMhBUFXZA4x74gMNqC4sanTahTSLiwkTr",
  "key27": "22M5Sb4cDuMDGJtdg5m13GcU87MpYGLe1LunuAhP8tS1fDSgBL98vgTPEhSqT58NAvcpXVGpxYyEvBc2MRaikG9x",
  "key28": "46F6gWnbUKM89SWUDYZMMFERR9vfLmPa1ForzTnp5hJnAQHbi1WPaKKLcq4eP6uY9RoZ1ni5paGM3wkdoMSpGyAs",
  "key29": "2hcAN7bpwso76DHyzT9dRntj9zuXa1AaguqbVjWLattbauDuDTagZC9F6f8k3UgHLnvY1sbpAZfshWGwU6oHFmZm",
  "key30": "4MwTxrW5kUaCGXgDuy4HVP61NYH6EYXKGuTHavSzQ9cph3zs4Dt4wjuEYnhrVzMStkX2iHbz5jmEeqxgvw5F4Ljv",
  "key31": "4BVF8rSEcMuTV9UCZyWKfAeJD2X1bfPJRvyV3E3aU2cLPKfgARRdrxn43nnRvpAPx6ZyFNZ92cqyMVSy2dwHQf7o",
  "key32": "2b72BTGrHtrtsDQLoXkbSYeDCZHr5eVgAuKZ6WcbnmZe7aL9iigMdfiPmfEDZFs8fyU2Bjo2RKbGahrqP7djAf4k",
  "key33": "58bLcmWqm9VGqnuxGCBjU7YN7LhUGLmXKv8o9fR7CJrBivv2osjGyxAKpDb3moz8W6YiEqLLbqFz6ECRgzH2grRi",
  "key34": "2XwxpYZjHAmV7db7LZmP7HsyvZdTMeDbkDja2j7ch21gqnpBs7H2x55XM1DAG83mWftmsjoCzHcpNfoWCL2taYHu",
  "key35": "3yojut9GscyqbpUUQt8nx1wyZaRgtoqGUVY6jkYbGgyGmiWTRdtta7fN99tkbZZyamnhaT5NJv8EJENRjur1ucPE",
  "key36": "5ubhDHT9vcwWzw27PRoB9JUaK2nBSTv6eFT4zy7y4F3fLsBRRVrNU1EPWyeWDs1sBM3aoKZcksPGmSPkQTB3nnbr",
  "key37": "4zdPQp22H2dWpaVBhYzPKJvMbpbAbbfDHdCRMRreBctXSK2crECUZR7VZRYvLFSsg9WGy5q5q1JAj4o8tmJyzzsE",
  "key38": "4zw3dubYc5HwEc63VgEdYTXX3TVMbeFVHhRV3mUcKm7dBWiZaWfeDvXww9SwiDnEng3Lb64nsbyvXdGgsxkJ8TcU",
  "key39": "uUqvCRVBK7zz2am3aCLsDGxXiZorTge7wLMr5KaZw7tDivM5yP5SWfPV7JVjDRf6nKW1AFFxMvdRAkXwkPW8ZUB",
  "key40": "2ZSHhfv7zNitYRV6VZXtqyMrjMAPv1nBGHHy9UtBNuzcpa3xg9PjBajR2iVUcLomWfhUUDBNqgR1N2Ry2D35ZdBy",
  "key41": "3oZFwQA9jRUSZQ5xdf3bTuCKftTzGh4G9dpoE6uLfMsZqWbAZhgR2WPDNTpVtpepWL5G5arPXpH8oPAbuA26mZUe"
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

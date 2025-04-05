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
    "5ZhZVqZty249eHNvXuyyGDh9Dci5wab8JvCvKUxwpWA2vgkeZq1jQLgTj2qqK9QcRc627Nd8ERWBdcuegLdSDGx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VTkzM9QmXN6H42yKvL8SCXzzNDQEKbBDHExsy94btCSZ2JJFM7HtVgTd3v3mYSty333cZuBcbutztindjzXc3Kn",
  "key1": "3HkRajgcUtwfQjZRfnuY89YmSvV74h8gPmXdUzdBnSwBWgwAjUcVw6ByHismjtRJS6jPQLxLnidNnZa8R696gdxG",
  "key2": "2bFM68yQvn3YAc8ceYNh3GWLx2Cj7MNCLSagUfMdfvRvzyq9q3Y2QAbf5nMScuSeQ36TiHXNgF2qr4e9u8ktdcqL",
  "key3": "43Yi5jxwdKa79xzRfrY7E7cRvYYHmL7oyujUbCkUzx8EPDFMSf9M1QQa8PYMx6Y4GHCquHqt7PiQ1ksFCvNV13Rm",
  "key4": "63oVG2oFmqQmo5Jzse3D7UtB44QeoM8EQYHNxsXa6HLLX3VYJ49aKXfgK5EQ3mEzsZxv3HiUZPDZa2pmJhPg6hhH",
  "key5": "4AQR3rfbeUDGHZuY5LsUoYV7jhmQV8BbuFvwuYNVrUVQ2kdsyR7EibVU6L7Zq4XcPhG5Z9yGHTJG9K9TXyhxrbBc",
  "key6": "5roUHkFJtaHojsaxE3KrQiVc91ry8Ru6nBntQpNCvstvnKCoJWfiQ5AckNEhWXkpmUrR8DsJZ6vp4xt4kt5PATQw",
  "key7": "3CEiExGqmDXX1EmYQSgNB6SEKr7BERdyJ1Qn95SkgPmHCaYa5VyTCmRSE5ND5WngPEfST6q2SAjkWMRhiv5L5n8z",
  "key8": "4huJ95y62pZ8VyuYu8abqsE2MhHhdGwEvrqs1Te5gXHiTHrtyuz56Pt8cGxsK533Dac9AhhkQmegWDRBjiUsdsWq",
  "key9": "4oGLQSRbXapxGDdrpF6cQvvKyqjmMZgL2qtSwQnVNUifwaMdXdpm7C6pW7XA9UNqFY3rfXkc4ZJgziPL9mS3nvgw",
  "key10": "3MqvrMNm5gNxsDuVg9WdYA9CeKhL1pnYwN9SjxKMu6iPJdeXHyC2KSnuTDxyqXMsVkwjHCHMyTrLvXxvhFAVnPFn",
  "key11": "3eT8v2msnYK1jwdQBekrpRWQCv68UbN9giuc5C7UXchhwzbH1Y5kXmekjsPUiXVSs9fe9mZ3v2yJvWTth6jPZB6j",
  "key12": "2rHhmtrfv5anrmPpFXsGUqwkEv2JgDZsuK8vmALpbaWsJ2wW4XsWcEVD3dPAmqVeqRpg9QJeD9W9BFERVVHeWom7",
  "key13": "3MR47iA9id7AzdwUUgzJsQjbc9UeY7BHpHfqpwezmxrTX8xeZv6sLxEL1ndQ5NHPPWx4waWU8UcE1EHCktsUJK6f",
  "key14": "5Vx3thTGaCJ77uGyWpGc6365EhLXrL4AK9kEfKGTB9DuQkNXWdiRovCkFDcRocyHk5ACkaP6b1kDWKVfHgPcf1Dv",
  "key15": "n267AdkY4y9ZCdfM7Pc4K64RxAkFt79KjZJK9sqCrJBBps4MHKj1EM1aXnQqqhkud4fnFGyAFamRf1R2sNZrpQ4",
  "key16": "3zZ8VUxidNFDm4goEqoo5EoCFynr48jjrMKXTAj73gAzgougStLFh3T3BxPHAheKtetCVd7SNj5rbXXfQC5A9iZc",
  "key17": "2ue5Nda814SR5F9D3NitCYpHriAPHkLKe6rcZN3QJg9hvrKRTJybvwc7JAqzJwUzjBzbzhBQp7DaPbQxeUifN9gB",
  "key18": "642bgbQtjfWwjmVAQee5nohDydg9gRe3zToBNtUFwqFc1HEBiruaXQ89jmc7tMbueiAH7FcxQu3K6ZMUNzUCf6KH",
  "key19": "5Ja8FzveQCTPyUoPjp1pjdiLcGUK8SakQixuaTcC4rybpqRnMGdKSoN29BZ2qnd6Ps9uiGXAJo7U5xtQZYZU6Rbp",
  "key20": "5QbboQECEF39VSHZe3CetxJtCciXZufpVrPbUQ96XMR65A4HtsXavueZsR2uGakuMPCo6fnJGbbMyat3vw9kGdeT",
  "key21": "3RZwyp5HZqkTYSHkzkPum7GxhejY24RZCW4A6uLErgZBQXX7fjn2tqcpPYPmcTEG5qdcRwtBe6J5Zo3Vy3EuXhS4",
  "key22": "LMFZvx91UyFn6WFiXBVXxPo9rtQukiQekQLkSkPsaDaKsEQ5u37Xu8G7ou8EnZpipgDB6Rtkcd6wSXi2BeNNMks",
  "key23": "nGch3oHi5q55554fiE7KvzoNUTdDkY19J451njeTf3u3MycmEwZ6zUeok1NUjX9QJUEwvDZ7hgNHFLvscQMGLti",
  "key24": "4wEXTggkmECaX2JQjxJuDYVDhtT5dLL4HqQ86sViH1H7dMwrH8eVSmie5nCgAJh5JVFE82wXMVpCqVdVS4tSchCa",
  "key25": "3PKCUF9LMsrW7fQW7dnVzu3WW7UWEbEYdr3kj8sc2Cq84ueU9Q47QooqWuQgH17zAj8v9hFdanMw9w14VafafrhK",
  "key26": "5p8RRmqo4NrnLRZq5pDzec3jMSincrip838mH4rdVBNXHR9CXRXp3mSDVtmkjwRKy11NzdGiGuFHi1SJfjzqJsW7",
  "key27": "29GSQKPBVGzND2HpJ9VErzK64Vfq9y6mNmBRRE2VksjrprntsGdqQaHGs3EwgiX5sLAWct4DNbRGF3ExzHmWSh6B",
  "key28": "Ddp7AFZqwnpQrGjoCZ8UduRRY23m3PxxsquzqVZqCXomHv4AeFucLkPTBJ8VbacQSgKnHTFa9hk7Hm8UtJNVCPb",
  "key29": "5Jj5FQ8sAFFpEeXypnDtKXcRmf3asQaS77BkYb1B78CcnukxZHjvLhxzXDSdYivXEM7uUeX18ZZxxHX6dRiM6GmE",
  "key30": "5RMwmkWmCw4foqoas4VRqDPw4swNGXZik3cNgauoxWR5DEVbGyNpLiar6pWc1cUgHxJC7xawVNLoqB6YEB2JgwVc",
  "key31": "41xbQ23jebneTSCLcz2HEXNE3pQWhUXmYDTk48AePgnhsL7LqVhT4siEbU23Mk3NDn2N98hmw6Kd9WpEh451AWvZ",
  "key32": "34phJWDNHs9SWjpdbuN5gfHeqGR9pFLivoywLMj4LAFh1k2SRaLFVRitzvrLeuyD71QHdcDKmWf6WHWuWTrvBtt9",
  "key33": "3z1whLq3iwfqYmKfoaGDsNZQvX3oDUQBHb58WhHCiooWfswcUAUse5JcLfv2cjB8cavLCLZZtejqUDXhSokgKDmR",
  "key34": "5R5sgFeh3EQLhxQpBifV4tyohyCdeWRCjnkMMpqt8vPT4FLEtJHrPNQ5DtZFyz7ZRqygSt2V9EWK64PK39i3tuDh",
  "key35": "4XQJjaquNZgErje6ZugKAWkpD2ByqaCN8BVu26URbEhHut72MyoxuE9ufn5ZP9WNNqxkeWdF21R9HZRpqmjtt3H3",
  "key36": "5aSFdfrgbk6kRZpjyCgipmGDV337ds2aFrpyUCW6hsuWy6KrnTTguYse53utzoFYSiDTWx7ZvEazcRYPXigSEkNX",
  "key37": "iZYsFrCzRUVxDfKktEtk3aeKt2VRJMAHLbx9Tnn6nVxmwURJtSKWf69bQ3pa7tE6JY4tnc2ZFusJ3ywqmwkToRh",
  "key38": "3wC7SvYXBUJWkgTAzqMXUqGdFRTsQQ5wcenK39L55KauSmooMwm5hMmymzFuamiSDXxMSLf66cwhGdnWH5mpgw37",
  "key39": "2B1dziXDpTZnNiChfhoaMHuDpNh8rXd8aEvxb2fdPp5fQs6zj26QmdyiXX66a2xJArNj9Lu2QaERaHeGQ7YYSYb4"
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

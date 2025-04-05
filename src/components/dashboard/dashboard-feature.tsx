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
    "4LEiw1Si6BGFBrCWkHw5ZcdqhwpYXWZwHiVQTACB46o6XLaGEDFgEuLZhKEkJq43ZzgYJHqtsu9NpRfg6AsYQTzG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3XmBgrn9wpBxLtua97GcYTCHg2VvKrD3UcEhPLG2tkPHJN3KSSD2cf6otX3wfBf6kNLZUVDdX9wozxRreXNfeA",
  "key1": "3SEfANMpaNvJk98HfHS1hcgqZgf8uyJ9tkqyhtyXkbimEkt7M7Sde6dL63n1QLzfqYEvFb4DakoGjNgsFnocKW7C",
  "key2": "2RQuWN4zFVo5zhbpVDyaQKv1tXgEnWU3WBGEfqcCRPKkwd2zFt8r5QuDNofGYwny1HzJwrLm88Ka9mr9sBmeEoQn",
  "key3": "4onkfgkxaisGqkKvWZBGQr7SNXiJ8rHWax4GV2Zw5nC1MhY7mwSrRrDBKDFusVQ8eGAo6NftVhmiJnvAD7851Dxx",
  "key4": "5A87gzsEgVN2W4Y8icsvLmjMLUBpDEtjdJzr5L5iAm8Z6pUo2oszW4WHrtstxX5Q6VHMxTED2Qze239rrdwdA6LJ",
  "key5": "25N2DYDuWLQu3EAH8gTJKRRFvErSc99FL36347p5KfL2fTrKxLtA9fzLsbbYZ3Kj6WNDTpKswRzxTEH9m1H2PHnd",
  "key6": "3zMTHjpaUwacWErosKYwazHXqx8STd1JbQpG4iTnz4bA3ymTbUuZqv4V1KwNUVErDVQFgzCqyYTvpujSfWAKajCU",
  "key7": "4iAqhgQwq3a2nfjXY4mKX4zmcVyjxAnn1zb7QsjFAHaiN8dBTYjT6JdjbqzgJYHomcLG4as2m6Srn79gn8NPwWUd",
  "key8": "3sreF2SNwWLV3rHrTxQkgTbdUT9yejQadDiHLU9StGHMEruQsnzeTVEhrpVF1XTNMiYrrhHWL4mdkcV8byGWzD89",
  "key9": "4ZTMxJPU23PGPWmJwFQcFZYFqTU2rcdU98dku7Fd1qbgR9LNWJAZH2M2iouFGmzeRybdCNPsau4kLf7baZx4eadU",
  "key10": "cZSuR7ocivGREQ4LLG8FVHAfcSHf3dspFtFuNrrWYc33KmagLwXFHto4KJFwTzpDzTemGQKuTwWgTiTp88UskUz",
  "key11": "3iuBnJKUV6nht7kJNEYhZ5J4beqKwSdMLjtLadMpVWQWJEADxNVskdhXxt1s71y2hJGgwrzNK15C1w4yQyrA31eb",
  "key12": "4taWgJj26LgXbvVUenkrzJHRAcnf9m1ieps34dVUkAAubjD47N6nSDfRYU4joYqY1QKzqcgvj9nNbB21Si6Hfhan",
  "key13": "oqYvSkFshPhhkKRYieVCFH2GPkgKnkWMKUywAxDjBkWBRwWM495vo3qCzcHtvQ1QEU5guNQErtChe3aPi8Yp3ze",
  "key14": "4Lw7zpajmKCRg2FWJNoN4B1gFXR67BFR1uhuBeMHf2LfbstdH2WaPyanTAw89JChx4jUk3Ze6L6NKUAGhjd3Q66S",
  "key15": "2v7qaZ2KVA6k26cDke8w5HYS5nZDvsdPCxbno7BMmrRymdCmXN46NaXtuVCLJk5XkFgpxkDzTrsqmreXCEzdcPpR",
  "key16": "215b3YtY1631e8z6j67Kbj6rtkLRtA8DZLHYaHCEdNwDhTnsUto9huWPeESTfuKVovWfdiJUZJUaD9htqMFYPea6",
  "key17": "nGDbEU8d4krUHcuRPxR2ujzCGX5Z1wJYvfG5aPgTiRSSCZ1bVuTGoUDRRgawaNrMceiFinLYjfR7j8tsN4CrgZy",
  "key18": "3NPKgeEzmd2TuKp7h7YbKdhFfZB2eUZh7vLy85CEMxdBd4onMyfrhhgnHhv8nbWpKM9AtjqScknhquQ7TZs3ra2v",
  "key19": "5usEUcL6RjBmaW2vCsidatAam6aonDABKefiMu4ZvPJu2i2dTPTqDAa96ZrEHqdqqbn3EESgpC918bH59iPQZM7x",
  "key20": "4GUXCsDjz4m5ZgjizWLKT5kwU8qF3RtwTRFLvJ2Ase4VhbTkLg5Ms3HFKGxjwf43yjfjbPR8yUG7cSUeGCg9dKLn",
  "key21": "5p3aDHCXS4Dnm6xzCo7nSPCca8puvrqMt5DQ7xWWPSnyiREeXdwct8LxqiZPt5Byuinxy6DQwXCd9niWByyMQHH7",
  "key22": "2gB66a9GdtVKf6tzcqkPXYM7Vif7Jvo4QM6ecveecHydvAP1NeTw7oTz7oj2A9Stx9pC5R2ix8gsjnF1ymFUCmvq",
  "key23": "4YbMwPDVA9qa6yAeD9R9hDbKBoku8NcQ1vuvMvDsJgeTn5TujJzMBtwq16QoRwgq2YMyCpaQvLzcsW3siLxvdjfD",
  "key24": "39Me3xvL8GXxtYCnu2QEykLsZmjdgLjingSFrJgaMPtmGoDsDrA3miRFcxCzmpfUnV6Vk7Sd4TDPeoPs9LA9SFs3",
  "key25": "2yv33Vt7h3X41qyhW91kEwbWYZBxph4tF8kQsEyvgwf1c2KtmyzLDif8cQi85XRCa5jvy1KhAripXdY9bQ8UPVHK",
  "key26": "F5AdqsjjdcmTGjjZjHyQsKY5ToSpeZnWc6FQbn6myG6e8nEvRYbFDgcfuiaHNJG58s3rDTECtt9hunWbEQPhARW",
  "key27": "2NdNNZ5SFpDvWF1kzse5DV1wsurVVFC1TCZ9oGnvQtXGFvtBPMJGyRYWLvfLNcHZni8Sccc76amZLV93tgW6xEoD",
  "key28": "Lbqmx3RRPjj5HeuMxByoSMo5WQfNJGNFJQMWn472XdErBV5TJsMxaE8oAU9b4QofnmTZ3pwFk6CA2JWG6YRXsor",
  "key29": "ZmYAN3wmY8zkTApcssupsd7EYqqcD8tRojVQPzTZWbpUpW846FtDvjJb8DzpRVLcYLamzKXF46KavVg7NBx4LeL",
  "key30": "2CdvmKT6VZUCmSBcFgRe71h3EC5xca21RJPRNZk9rNLhAKe4VWNYLzNtdmKtQSgLYY1MVzXDeZgPxgswbqsYoWLj",
  "key31": "2Db6Gvvjhbv8p4noeL3ohPg3Gvx8gL8mw3YjXjTQsJ3J6VV7RH13LQY5phnT7LvGR4fNcKcXP4Bd5ZHCvHmXgbSg",
  "key32": "3Zd4RrvxZA18ALTqASkkfbXfwmVfWec8NuvAu457DiHnyFeySXAATAwBFVptC6ZEow7PQzo3fZhZULddQNpvSwJq",
  "key33": "4MpRQNwkY5NjG8RV8gYZCQmEVz8CqCd2Zzmu5qLWiYpDzZc6V5R2GzZ1mnFfTRzc6czrx7mgENxmGPjQx7br1hgr",
  "key34": "3Lb1cuxxSsCJdYAwaRsYPGGfFo5YUMkWGEg7sUHDSgix9mpJKtUvHb12kLJujrcsy5R8B1y6krHdxQ9AseYuxqZd",
  "key35": "8C53h7HLM4ggMxcTYSMPF2JF5cCbfXtfrqjPxM2CcanEQU2Vv4KznXyc87SyadYhNjjN7bpT3LPcSvDz5tVi668",
  "key36": "3tYvPQACUVqCPL67FrZHWKnzRVzFfvm3Kx6ZXJEK9D1gu76BqU1u2W9VNDcQiuAEhksrTezX98yqHHcDProkvP9w",
  "key37": "4KcoHjS2frubhD6KQCjwiAGL6U5W7RYwQV2Qo8TsaWUEyRdCz1yZrjbwqvXxDkhakf1C9FZG9FxyBhdNTE9KgHdF",
  "key38": "G8hs7Z8LuRsmgcWzUFMJs6cTV79xrUN7Km3B2YVc9tSAaAegGEKCzPMYxyhdTzc5ESiGBJyntDvvwLWzB5buxUW",
  "key39": "61Cw3FZjhPW5Bx8kQy2CqKxm4Gs88ezPXAjaHheX2y2XB6j9gfUgawN1tdAEZESYKgBRXBJZfbh8fUeuv4hjVour",
  "key40": "3t18hhYRWpU6dJJgZN8MaX4kDkt5PAv3nU2PNqn3TKRnL14y9SnhaR1M2SvPKSaQeudkJHqxXwjn6xU7ipWroGb7",
  "key41": "2RJmhasNaxRKC4YVqv4Fa1nx9tQsdZkHeUsieCvdFxf8bbqjCvvhsxgDN1zGGDQ7UK9SM6zFbWrYsvoFfFwpwg8"
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

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
    "UxQagEKwQevLVnrSQm4nrhcBKP4aNBrSRY7TgQdj3J2DeU8nrgrnXzm871oYmg5R2A86LeAybK4R7Wu9mRoujFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HzrNigsRYVNVuXKJ6ZBfeAfg9DCsS1wttHY2gJMxLF5XtTx7UT1KUUydNrEGtWVXvnyxz8XoddaUDnM5mwsntwd",
  "key1": "2qDnYCE8bLxn4Xtn3LB24zqK9hJr1fLDd8iFZ5ky3K4Zu9HHAbV1JgXSb4wAqC4VyqRW9KuUfikrkB4dt1F94VD",
  "key2": "5RPBJZFKQyouXeLQdHZxHdu9RZu2onmwHCAGsVqxcSXQLFuz8CZBC4LDBkrd5xwVhiADrCcT1zZZr3MM5GwPHxLs",
  "key3": "5gL542m16QYUJ7Ee44WwkXKYQkg74khYjxcCg214XQJbUbFmiA4DmMnHqVgGiT1oAMUPQNN8CnodDnVHRqTr3BXm",
  "key4": "48LK9Se7h5XWV4f5NsczjGP2Q5E8FpcmhyF6Lg4eeuQGsMS4s5WGWzLinP2b7YMXacha6MURTCrdVGm8bsLJkhon",
  "key5": "2ojRFK2RiffzPpztTgocVFuseJvDo7Avz7Gj28ToEJaaLMZBKdCFxkzHWHLRbk2iCRvDtqZWQF9S71Yjc8xAApgj",
  "key6": "3FwcrRjN2h4CjQnYY1xo79BEmVA7oug2UQVYdjWepHe6Hh9ti5FHAEpf5gybe5Cd9kzQ5fVH9JFyNYjDxuymLhdP",
  "key7": "4bdxE4BbywMi99pP6kzo5L5P3tqYFzsGmA4EZj82UeLovMpm4yZK5PgCSB6iiupgw6RGqu41zJ9SX7ZXUXnERcmq",
  "key8": "5gQR12FhicSDQHtbiKPe8usPdv3mLDQj4yuxj6PnMoRW9qf2v8Ri65ozPdkbXU8aUupvmUfoM8ooASvnudrY3rUD",
  "key9": "4p4udCj3FUdDPnxCtk6MCnNeiisrWVfXprtcPGm449FHsk4K5jQYBDX15mGJ2PKbpQNETapccrYvCGLY2sWWQ5eG",
  "key10": "8boh7oiPXw7fZWMygMDyJFoKDZdyHEmyeBWdYdjRfzbUaRNyvy31uJqFstC7DdbnLEher3CPXxHh7vuYwkfDMqd",
  "key11": "2sdgqeuf2rLFiyL64i61YkXhoJ78v2GtRrAastRfckwjDNoavPjpiYSwNMwFHFZfhD8kzY3VREN5J3Tz8tE85wdD",
  "key12": "4qiVSZHSjXbgoqvGuSMfqQq8FGosxiBMNHUnv9EJGwoLYaPUMgYmvUJTQTfSNqxs3z6mZcsx2pPRYddtSaEpQpwH",
  "key13": "5673ajvCMEepXkJTLP3aq4HiRtoUgr7Xd69erm1BXbKbN4H65ewxKhRXLSAdnGRdWBHGrNt2JbpFFgYrUsShStJT",
  "key14": "4qdpk5p66VUCkN9ntC5S7Q2ympDzCd3pBn367GUrky1JCXFwg4xC1ErikWjZdYYQNuU1XKiSGevpdPtrLnTz1F2C",
  "key15": "2ggej6VYu1szvjfm4La8TYH2gKaxmqdeu3XTsxhhToE7WL7PoFtHGPigGpKd7D3F5JjcnY9Cx28nwYTMAkwGHXrx",
  "key16": "4L5VWvqFmSEBNHNJqA7Tfs9Rx1nkcXbzdPAdG9VmPED9EYPZLp1UJGxKDSC8i1JGUxtDPLLq37u9fP1yJacsVUGB",
  "key17": "5T6oQRLwMiCdZXsS8i2HwGhnyovLByAbkTRrkwHqjS6VNFzZMsFfyRbs6sDQaKFf4Fk2oC2kx47PbLueFGKfzTKS",
  "key18": "4SPjoq9BBAoyZWjuGWgFoZgUMJCdQoNsxB4HJGXVNhpdkjRHFSuJjDoa9tbuFxaeUkRdcaNRy2RgUvQ8toVQYx88",
  "key19": "2osWAywQ9h9a78t5LbMY86PMPzfrmAU5uG6ovp8n6u9d5k9kk9XDTYFjzdRgvbCga5Z7Ned1mDaSLnQtCaazaYVy",
  "key20": "7UqQ4rNuF9fbBzZZdKMWqP9JAoxbM4J5gKZJ64j5L8dQhF62GffUbhFYMuEj38QZKkHBkDUMDBS7NVjQH5GS2Ge",
  "key21": "Mmb3kwMqacw3YTBoRc1CGyv3HNVbNrQic8H1QkMAffPnRDx5NREGLpDa7kLQnC9ABpfT2LM5YimAD8rUzLPpUk6",
  "key22": "3BUmqXbVwnqXP84DjqrGRDTNnKk92cY7eLwMmJSdvxtvJc5GRockCMBMokwQoMXj6R8jZPRCUmaY1UW5Tdu8X7mh",
  "key23": "5VAqwn65ieCM8vCX3Zx7U3ZMa6HwF6s24VKH14Qtaz3YgtuHk38ZyiwzmP2dmDn6ziQBiTkYLxArmKGRGed23W8V",
  "key24": "w95u311uotndmS2XQu1tHV7YxKk7o9sbCkYEFL8amzW2735QbDGfA5CY7gBrEAnNtSt7i5MxTsY42yEGVE2gRxS",
  "key25": "5DSoazQegBB7QCFQkPFgyk5gZhrGHbiSbQfgDRDyGK7jDdEBKbtkr39yxQ5qfp57HPkLT1ki3V33WdYeZj9RAQ89",
  "key26": "x5hCZMtoPJcQmU4gzXkgAPraH1pigcjU2HFg63Koc5VALLigngLrSGjVLYCT1MKb9yBNpXhU7EkXQYVBVtzjZoQ",
  "key27": "4GtS3YXDaR44bnJWmZq3zBurcWSh6KEK66yL15fbHDtQcx7rAEP1jEVUNcVBBZSQvKVZQFfcaVWw5kEzaLy8MKni",
  "key28": "4Q1cgCV7zcGN3Nnorcx9UBDNdPyNMCFBvURA6FbRSsoShx52iFTYdPmpVFBQjTg48CLL3EVExF19xytHCn6LBYZw",
  "key29": "3JQKAbtcPrNrzvjFL1ctK9EBEiHK6hN7JtdaHhx3NTZ7JhmmFhzdSSGp6gf5zg3CHCpURwvyw8NZRMpHFwu3bxNS",
  "key30": "7ejQTSCdQF7nkDy7pjaJhh2wa4RSz7Ek9o5Hj2eo3uhZhbwU6Hf9BMSrsAHNECxYAMUP8poRSeXozn8g89cAAAe",
  "key31": "61LUhahLugaNQiiBFv1qkpN3SQZkjukyH4iTF1zzx5o9jenxhdphVYpRRfjrJNAWBQBdWCJ31zAuBXVaBR4mgj3G",
  "key32": "KoQ1S3rz5A6WSpo9CGo97yrdLSATYUxZ964dDscKDVwaZJxAuBFkyWHoj58FvZEdYLoFtbQDrAMQAd2gzU3GhWs",
  "key33": "fhMyar6gpVDv21YyovrHNwFDzjoBCPmPJQAMQ3j8P6gwRHQnrXfV2FE5ZceJLwDnup4QP52ePg8FkRAjVKkWNCZ",
  "key34": "2CD4kkyn2k55QUofEmZGtNG9tk3RPYd72w2qwnSpQss1vpVpHZHVPiN1LXoSZZ6ywjwaytbGwzKw6HLvN9ZrHAVK",
  "key35": "4EFzYAqotrtqr1oCABKr69paYfcskYuv8QFvDHY2TxwCARovnytUbiBkpLP6gyTPUF4m2RrG6UdXuUfWDWwwX9Cu",
  "key36": "5co7KNyUkmyHBrU34jMpPjqNiU2BMJLyau9cmeLVirMx2w1KxN87ovHFedVmnWx5CSbZ6knA8o2EKN7jmmPhEJL3",
  "key37": "AjvmWC2mddwgL8miEJU5u2KwiHjUHLKTRu9F9JTw1oYhJkAQ9B5dozehSAA4QYDNwBcegAvfirB5EC8B2Be5UNV",
  "key38": "3LAK5TKqja9p1uydWtwLDKCw2d9gywU58R6obhAUq5HrjwuZS9hr4zgPAKDVVZzYL8pZ8Qp6CEhem5H3T7QJY1PN",
  "key39": "2GncgEef3p2GctdF5y5nWFMxzVyLCHVabwukA338BkuVEnRUxKMM4L4vaMZgktZptvFGGtqDxZuTPAm3PLYYSe4d",
  "key40": "4LxbSVsoaFZ7wFro7PGuMUTBg2dVE23hgck9ykKZbizyjHHw5mc8NiweXTs9QxtCqLX3zXckG1yQrsKD8cf7g1wt",
  "key41": "2sCUYjCviPcaSv57AVDR5k1zhQt92UC3HNhPwV9p28eYWwMTDq5VcPodFqjeiPYwPBRxYstyXk3WxENLYedPCTpn",
  "key42": "5KpayzwEpT1ohApsS5YEbUDaYhttUDLFcEzc674qqTfUSbVrDot2bdx9VrtKL54qq3WVozWU9J83c5oqTUVYbhTr",
  "key43": "4Es3S29MRSM1NkS7HPkg4VGHhfSJbW7VQCwrtSH1iUV1V2nWHenDoSxwcgyav6Hd8Kpumd5N6SDiBdxbyjP3JnBk",
  "key44": "VrXmLTjfD2ACqTJUE7Wgw58XePHBtfzZeb6iufEKpwPAJdjYwbRJLF8zQ7kqQDtHYyUigS3gJsUE4x9oJYkJ9cf",
  "key45": "3MkbRzVE5NTdGNWFrro9R4fHU6EB3cDeNXQukFvRb7gj6k1Z28rqgBKFQnFM9XuFd9jT1MNHZdz7nDmhhFAFq54q",
  "key46": "2akiE44zDxx9qDHcq7Rm3ysLkN6CjLiemFwTmHW2mw9Tsmnw9fiJYAUy2V8wnY26Ebyt4LEAVCDeDZFPPMRP3PhA",
  "key47": "dLZzSurPBCQGE26zCwad9XpVRqikX9koiQ2Ro8VUwajMSN41CpV9HK75C6vpiFR7n93CopxHNbfjk96ZNLD4H8i",
  "key48": "5TN9njXbDW6NWpGRxPyaVVzWNvjJ386WtSp5wiv36yJb9qN9VyiTg39wc1eAMMZg2c7qKnC5AzkNis5XvbwtRz4g",
  "key49": "2CmVwoFh7RYE294GZhGPe44DwsRZaog1DDwFqNHifd9ct5G6n4g7mLisK28ZhNqb2jBKDCC65wGYFNpdz5U9E7wU"
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

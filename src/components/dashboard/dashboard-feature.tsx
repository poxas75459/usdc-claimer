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
    "2RqD33afPTyvxQsz5txDZqUbc79hhngKknv343NW1Hwvzfcw4DSQvPWx4f3Z6ossxF7zcfKkR4ESUQpLsB1n5N54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfp7EBgYu5LsxUnTCrZ24ZLQGeMD2xN1uziMZHHc7cGMWDLos5U1YbKV4RdALTrKENHjUQ3Wj8UR3rQHuazggeA",
  "key1": "5JFKYCHNb4YRMC7CRfhxY5S78struEBUXHdFJW5jvqKqf7WvmTLYcJL38pb6zXwr1SnSbPsLMa7yzv2Yezn4Qisv",
  "key2": "YFXAB2uHvgotjBhdGxjiFBKvYAPZoUJdbc7EL45iMyBd5ocFcRBFfQJ3goQVoEGzNLjCp5Y6qNcQBjfT3h6ny6T",
  "key3": "uyy56EuverBnh2BGRniHAbB6excj8Ky8BwnkyN94g1VUa6Z4AqTfD63biA8umSF8vVZHYJoBkidUCwc5QQ5J3TS",
  "key4": "3BBUXLEdPBhi8T3zodmsMSng4vF82kzBsxKmV3uwSNiYE7ztdfuHJcbqECQfKXTXMQrxiFqE4zExomYcTpnY2byM",
  "key5": "2oRhw7fYPXxYwRxdW2oZbvN4qTe7c23JGdSzBU3CSk8DUj1aikoh4GUn2Zm3DsCuE9jCiMrjh5r5PGoWL6WbTVeH",
  "key6": "5pCZ7vUZS5Kd9MoGKin9kRqqcENWrifiYXyiyqXkJ1JhnMKd97dDgUvPBE9Q3383SG41SAv5bCLeABt6ScTKvQ15",
  "key7": "5UFipfbPey7p3UEzNTxhDf5CHynKstAnSQf1pQtqR16H4vpcKte5KjdMNb1TkpRV9GNibUCjjLvVn1oE4MsvFWPv",
  "key8": "ikvPsU2VdiK5b8jC5U2EuL8Nkr6PTrkY2xErwmg2Car6eAqJXJSGsBTcPdwpVHgRALSr42piRoxsbyEahaazbvD",
  "key9": "rF2e4y6pPGTk8g8eNdbzT5NvQE8PNzA7eifq92xpHDxX6BJcHf6MEBjSPDhPcuphxyuQ7CEANLHQaC3ubM8VN5K",
  "key10": "4Nae3TKc7CKvqttNZ5gF7SNF119zQ4vpfwgcGKhevomNvhgB9LHQiXgrm5ZkXLNVaXQ284YprNAfKR39UwmXZWgg",
  "key11": "56u9MMtLfzFr8y8U93eWwNM4nBCSa9oKyXJTN7iCptuFPjfaw4dn5cYWKxRQSGUdPJQ7bGGmYkjVv9whFAgS67cR",
  "key12": "3r76npfr7inkkfEVn2dHpBuZjbjgaJaRMv6v8U5wvdpmLwP1cuEYSGJnzucDi61H6hVNZ6Wrms4HaEZDAkjLGUq8",
  "key13": "4SbFLyJ4ytJkfu2DJXnm8Z7UrKJSp2w41umzVWBn5HAYqZVfiE9zERhyKwh5uK25RAjAKBArp7qxC3JAJkcQQJGE",
  "key14": "29vNNi7fUACFVtfNWPiPmLbeKacmA4dNps66uqq3hdKTcmPtibdeuAwDJKSAepuoiFoaroaGuwgoZoZyXHGs59Nf",
  "key15": "22oYFyBX8jCWTE4g8EXzEMKbcwjB2Rgt3UQGjFM2ysHeGh4nZyhb3pwHRZg6E6QBR11GUjTQPHWGdThh883nPrkb",
  "key16": "ANGYhdFJQmqqzWwRjkK6eJm8iKTWcoyBWywhbqdkAeck4XTahEKG18L8drgCk9rDpCbmwQSwc49QamP5oesgV3y",
  "key17": "3TbpSgeUJRfi6C6UPdrQpRxXv6ggxEVeds3YmZAzvDCC8HJCou446iWshvJbs8UmhDHqUkZoBisre5JBgunj9jZa",
  "key18": "CpPk5t1aUqSLXyEM6oUhoJEnqgT7p8zmUguWYuaZqSa27s7Rb1dv2YBmV2dNvx4tK31sjhY7ohBtcKupAWCGQes",
  "key19": "67S2UxXqtBEMyW4CjqpakH5U93Km2U8htSAWTRbZKcBpSGuHvg8VN17CwRhR6dwPpRbhtkEu6qHyXELPbsRMbEaZ",
  "key20": "4SeaA79WmjLJz9rWBi2WkLsrbtwWNwpezQempn11ehouaSvLYee3CohmnNhH43ppii9bFNgXMqyMiRuR944Jv5Lg",
  "key21": "5WHYk4E3GpqCD8Re4yGNUSUWm9AWQXEW8jJuQGTY676FG7LR1rejy82SvJPgWJxDWfjgmhc3QDA8AWgtbt8eA9QD",
  "key22": "2rASnpgtKJrrbFYMJtzbcjkv1N2sDvMTpSn1S2Xv4LdRYvv2knqSS1aYKPkfSvG4VVTTfxMuDmBQsRzTBjyDt73a",
  "key23": "4jb5NDSawUZ5CFHjTUwWKMAEqVCVpDvWiNFYbrSYnGWh74V3yeSUNJxS2x8quoSdiPHQzVmy3CECdAKevRVT2RZH",
  "key24": "4xgMhiVMSwotas4U3Z7Z5L6uNVnqpn2zESvrB8fFrocShkC7tAmMxid2jPv3XqgaH5zaKeWLDS28GhbX8DFGq3wm",
  "key25": "3pmUsTKXu8TdXhq6pTszUvcLDzemHAfZ3eXZ661RHp7REvjYjRtWkU3EvsXcgbBN3wBv4pQfTzP2gKiRDQmzxV4v",
  "key26": "22A29V7UZc4erfGqyH25jA9WtAhw739qP7rY6oyrxHhwydAhQu6ko6cjzxbJwdJHpDdqKG7PhZdZJ3UfMmfmTcQp",
  "key27": "4XnkfwXJocAewo2qKDTc8FqywEVBa9pASrKiwzztKKvNAc79a3dqDapRmCE1xmXawytReM4HS7nqseFYuShB6yn2",
  "key28": "3qthtgF8bfzySQVGoptHq6DZPqfM2Vq1YZNy9AVgudCPyADEJen4Mh7i745hVHUCJq7RDag3yyceuAbrfDJXuFmc",
  "key29": "mH9EJcsccNSjaemK7KTXQ8UdZeSSyL6Jzx554TG92g36FwRYT6zU917WXAJFmVTZtaMtM56bjoTyjsa7c7nCm4B",
  "key30": "4S42dtbpBfQghnCnSFVNzECJAM6bCCAcr3XCMDpa7EGDXY2XwuGyg9QMDUcCsmCTw48mYfW77k5ktLtgUTG4xsuB"
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

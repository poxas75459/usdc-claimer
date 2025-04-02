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
    "3dNWcnqELAiHxPsYAcUyGboS9hoG6TTRszo4BWWoMWio9Whqk879ZXzp88h7MkhqVvavjY1uEbdm7KHGqsje4USM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WVcNQQ3cAVNTYXsk5b8tiH4qTgBRe1rkEsb5ZmFUBXmf7RSPXkp96JZrw4wm4kBpYVtw5tD3JJ66EmZGtYU6xy8",
  "key1": "s4HPY3iMJYbH1Xq7aWTVkq2Awyfxam9jSwpYJ3mbrJhTSPG2xoRzL1T9P1XTwC65cPzz6iTQrESNidsFVdiJ9wx",
  "key2": "5vhLrNViiETGgvMdRuktvza1Q5mdSzoG1rkETNR3wT5QKrqdh9uZh74URG29bJZuBucRyKcfAfaVRWZ7bamaGLT8",
  "key3": "xdW6LGPteWCFBAQLbbM6Tdk64jzFnw2MUsmCUjYdtkLt8Z2fbyesEYbpnXVCnu1wP2T6KqvLEE4DUpuCqP8uqBU",
  "key4": "48bfEPu9izdFQVHtSNaBCEb8TtESBWSMqfy8rdifpToV2TL6oxBma8R4uxabMj5ZQiJvpVNWAgpFZnyVWvEeoY5A",
  "key5": "2QsuByn8CyRUrFLqrMtg99j1JoDxUSXYaaX7ZvCb9RRbixyP3KvQvaAJ5e9eGMKrNREa2X8DdTi5wqDm63TXMDq6",
  "key6": "3WKtxYYLR1yumVZeKTD2A5YyyRxoi9vzwhTxfRWzB2MCEegzx9ZUoNh2D3itKLtfkquTCcfrWyVeWm96X2WkUCW6",
  "key7": "3aG3xTiLdyfEMeY1sJaPbktcegbudMYD3HokzP7TQ6edBnhUtZp4ZGSxknT2C8SJRCoz8Wrnob86wPyrMNKyneYt",
  "key8": "4Sm35A2VebFR8KoGGcGk41mwkTqUEWra88Hm7T1SsapS3koE9C9Hj9XnYsDfDzrzMhfqPuyT8B2tEn6kAbwQESnP",
  "key9": "5difeVfQQ8kMuWg4tmPZBGNP8jsg2NZwn1CWmdc3NiTGw8E7utgSSTv81yATFsZkFMvi1vjQS1SHymBaeGBLec7a",
  "key10": "64bnLkMknGqDaVvvc9fc8PuVzXB55yM2Y9tVRsRxHkgq2m1512rPYgAxtJenX1viq9RYoKRxPRT3eswJzkNYyYac",
  "key11": "2rCjfV6p6GYeJrAi9MkN9JMzmuGKXLiTA4fNZkyJEFyJuuu4aLvryiARhG5bNnfHyL7xzFjVubhyHB3CQ1kubwSz",
  "key12": "5cbHjf7GTiNyjCgnym2qPm9kxjnZDM5Gz4M4qzwP9sVjMotktjcdcAgmBJzB23wyBwzbupMr7FUFRUnGXTSAs5Cp",
  "key13": "42Sm3z5QS6xgndMejJ1fHDoUoCGWc1FDB5jB47aVy639iFKtr4CvDp23wJnh1YJkHijb1hvo1NnPqET2EPZ2sW5Z",
  "key14": "3Z28e9wC7u6gXK56zW9KjJCMD7vYRGXZno8cukSvCmTY1PtNhK3SsHjVYwvHrCXkP1oRynm9vn3VqJbRV4oL5Bow",
  "key15": "4FNEwF3YAponjgRSJ2HdZT3LFz2izE3Q5xa3Tqg28g1iBbAZcCUG23uLuL8WwssQHq4Ytuajst5YaQHvhmnUAZX",
  "key16": "57rhmL4JcTEtgFctutHgc8jKgRWsbTuZpuQ7JqpMRKtzdnzkwkf5DpTnzFdK7jei8gnv4Z3usd6scirH6Rs2wFdE",
  "key17": "59fuMiBQpY1njtt1nsq89wjuE5wzzqmx5G4MFzbtmBsq3C4zgAfFjAAGWh9h8q4zvWytmpKJKeJRsyzavCVPTbbj",
  "key18": "4HrE6kCQ6BetYK8jLMcTmMMyYkYEUqRgFbG66S89RmdsSxE8x432H9HMVZAor2cMsBJfdw8d8WykG3KWhW8WSQnS",
  "key19": "5ejLX2n2WtnsjLbgHfVE84t6Hm2WMLQWCafZRFaKZd8paVfSDvSVcTbG289MJVo1PSWBtu8vW7SwNpzv5hPmZu7Q",
  "key20": "5y3zsyzR9eYsGjJmEkoDzWWHbajp3rWuagQ22rVJAQT1F57grZwwqPWp2hYfnrteMAb2w2y2E3PyM8xQLc6dqg7j",
  "key21": "BfLaALgBrgEvwNJriKT33yibFnWo8ncFURtes4AyXfGffXaz35WriQZixar4WWmHUALqcW8rrsNVHGXJjqFJP6T",
  "key22": "4xECYAHdvwivW5PgLXifqEeXBCkLrJtdxeaz9xcg8zfoMHtiCaUn1SovjEg38Z5tneYP9M58DkoiGxwLto9Mdq2h",
  "key23": "hUb2AdXP4EVVTsUbBXrivrPwA9XEEMZykuuU65y9tWEVLzNStEmCt91FwC5yAqPLeSAfbC2FJ7Rn8C9Nwt8PdtF",
  "key24": "4LbUcC4RFq7gn5r4UrqEto3DU4B8Sb6xqNETsxEBZ1BqFpSLuavJLwPabhzsS84xcPpPf9HAbyNNhMDPdgUvjukC",
  "key25": "26iEZ5XDfK6MNw4cWyVsfbfcaWekWiPB19cNhUzuRJ41JED1LAq8WAHA83wsV3Q1wep5s6ZWo8vepdV1LTiz7J7C",
  "key26": "5KAhiPPeBZBF7paV2CqPah4APJNJUkArcTRCEpABXzUQ8jDASFHyvaJNgXdtjf8KpbocXPAq2XCjSuXMWrGnzTqb",
  "key27": "342XLhpSzdeoWpKAZkzSDiJVnjDuDv7ttX5qPn7Shx33Ai698zfThw7g5hXEE3NBDZjehn6GTjgwFTaASnxChWdv",
  "key28": "SM4a3ipDw8msSJrC9Y3c9kqeW5a4VeRNYgFqL1LDKuY2kKvJmUmhi1gvf2RVFFniHxSnsLPXb784Cy7kHgzFhkv",
  "key29": "2HbMB7UyFUrgcMqtKnLiv4WDF9TMS1CjQCkVwBtjDYv39FYsHzWhqSV7pDFPi8w6hTTKc9hGpwyFVPaT6UATCWZy",
  "key30": "KGP2yeWpZYfQ7vxnDuHTLwi84aJe1jEzYg9ZK5LHeigx6KNNpLzd4QdxvNWrAV2T7oJNzSK3KhwxKANKppUUcxU"
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

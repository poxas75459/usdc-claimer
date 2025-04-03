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
    "iBt9kf4Mvhaathe75tCU7ogNTe32nGjaYdboExF7r5fsWTczgxyANrdhkmXDMM5pAWj7iRfcp4D6EjY7eHfwXLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YkgUnhp4vQDJndaih7BUUXx3GMMQpKoGaps2k9NY3dv9urUNF2i9tp1WzPjboWv1giefX7eDHe4kGPmJCyHksv4",
  "key1": "2XvcCWottTMdcQGKEQ7H4ai2xctwQs2uEARxDTD4cX2GSqBWXNaiS6RCwZhfvYbhYgZh4ntBPhyJ34sTmirwmQFD",
  "key2": "5BDVexWhAgLSfBTQn9PU4U8qW7BF9FimsG1wmfEZszLNG8NpdPbok1WTyE3qjvTL8fVxgyrp9Jq2ET5vc75aZvaq",
  "key3": "5DTV6uLBwU9LwAX29qicCaK5J5jAX9bpj7gFL5yarVJeUTB8bBpYBM99HWdjpYm2bFuvoSbmM5yNSqsiYGsMVTWL",
  "key4": "5bMGFdf3EeAJpazqWn1tzb3FEwnxyfoSMJoCb98tmUq2PbUB2Fr9jdCWgd1dnAupWb7SrYPbNdCWsWq7JR2LFXc5",
  "key5": "3VxK2HXUJf38kmkfSTBcFBNCowERtujquZcTyvxGWuPbZ8ad6DVNLrLG8MugUbXY8ho9rm5fEww8D9txv1jGwtC6",
  "key6": "4T1Wg4F1LsAx7hEatNDB55mvwzDCB84D7TDCQmA4FnaxTbWda1pXhb8ckt6hHr9z3gTnJmqnfo1B9DTMv4K3yPGr",
  "key7": "2GA6bH5hTmAkY5oZMyDEX5m7TmXHsEAmuTKLEw87JE54hXFAJA5oQn6ruGMyya1XzCbhCUYmuvdvEX4Sf6HVLM7U",
  "key8": "fTh5V3B9Lx9QCYNLv1UzGspURgiGrbuRTvH5t4ZyLc7KrHrNwmdozWG1r7vKjMsdzEU4n3NMJB85NApSNfK4DvV",
  "key9": "28mfWjWWJyi95hmkNphskRxMzEotd6WAMXjrEATyFv1mkuGExRmKGKbdTgrRDPor8tTdGofjnodPpddYxHvaAnJ1",
  "key10": "3UkN5Hx7emK7c8t6QTss3eQfF8uC178NU68M8NneYC28zfN11tAD7wBynUYVRk2Tzeg9BGKJCHL3NW7sJHBNCpnx",
  "key11": "Wqc9KpkGyNy8cUEjPeKMdEjw1MC3oNsddZzdgpbSxQGgpdAQnXiTExQMqn5MC3K8imsTXDDsdUhiKyGNfVT6cCo",
  "key12": "b45RZk1zXTZZ8K4zPHXTDPjWRvVbEAT3ynWzUBKCwdbquMMuZFGrLZwDfgd8MMLwoxaH8U6JqnRdLktLMEfp8rU",
  "key13": "5aB1Rrpmbf7PpAYz8JV5CcHQnddCED6q2rWbPXR9EoD69KrDBRYP5mXSVaQmyctrzdVyRZFKfbyG8rNjL3oNxpes",
  "key14": "2ffQojmyQwiYSAxSSk9GRDm3xdLtDQwk8PL3eSVDaksRnm6D6QbxgrDMpZGo8Ay4C1qqvZrxfqjFpuXqXVsWKD5r",
  "key15": "5CDWtg2ioZmApkZ4ZJF6kh6YVLxmg81AZSCGNvZQQ1KJSDEHhes4T9kbcPyqAW5DSC8G3HKj5xTq3wjrr2ELL1Cc",
  "key16": "2nQdbKwAZcdzhgk6ETLWeBW5uERoCmzyV2fgfHp5NohC7AHgNUqqN2GwCGoptbB6MazgyU7oGz27xrjRfDLZynbk",
  "key17": "2VdJpK5ET8JRGAWHCmAQGCpeCoCiBfFgWji9dULuE4aLkP4Kb9jaFFGyjFspUJ9TLGmGEzsrtHxgvSGCqhANPpVx",
  "key18": "2oi4HgL3yK4B8hbwUhYV1vJyNEnAb3ACQgV2RavcGsetXECnufHnacLosSQ71mNrcHcJ4umQzvCNJKiD9qi91HAu",
  "key19": "4KqJWr8qMbCpWFtaSTPMXbQNHXBzBuTRkRq55VfKbWkWPWPznQDpPrLrxshNArmvjXWeHGunhTDJtTBkL5HFknWz",
  "key20": "G81dUf77QADmcu9soNwCUFz3Q5mr2NN7HxaCtCAFR9fLMh9jE1PdqMaDArP2K2Mpz6j11yqyRuBJwzF8mAAVQbj",
  "key21": "4snUn7trDMDcHTXP9AVvS6zF6CAwJXDRS3PmupzY2EKti5ereV58exWBu6neTpZZuHu9L3DfwJRWBfWfqEqMwZDV",
  "key22": "3UpnPTETkKUthEKz6zMsipYEE2UzAzuDpwzVNBnwDGR8APba4Q2ZuZe9khRFVhZwaNw41K6gg3MtszziN4BXUVc4",
  "key23": "56pLGnV9uod8zu5CamULQhj6vYXSFzPDc8YWQkgC1BMsPUtbFwLPZjkz7cRdf5TxZK62nhwgwscb2twq6sCAK7Zu",
  "key24": "3RYiwu5YtKiBS43HXv2mPt9epTwftJ3KxWJZ7wTVJ42wu8FrCFDA1S3tMdyy6shACNMjKKyQrHfLsXx94bzPEC5T",
  "key25": "35CYB1jommd4isqn6BjBQNdUYD9KV6bpYLBMdsPeLDnZVGsfC3UdFcYabiJRc62M3KQ3EZfQ6oN16ZaCShpdkn3Q",
  "key26": "5X2VV36APzEmRAA1gRuiGLwZmZ84rUUzhBtqMiQCciQ2LnKTAVazsPdbqZcPuEF474Ba7jbzcfumBkHnBWxkCGaW",
  "key27": "5RmBgD7UzgjYvyRi7z4Yi22nMh5qPmUYVw896jCuogCMXmWdpigViLNyKmvQZHNbfuMeCUwh1AZLhBP3vYZdDPht",
  "key28": "5FUj9gcosbCLV7jLfd3MALyU4Jt7TQDZwf9v1r3K85X4ZN7sM5qnqPRGKcRPDMuL3V5v2PZ1uvhMTAMXBsVnHU4R"
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

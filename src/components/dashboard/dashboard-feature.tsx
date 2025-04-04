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
    "27V3ATECeP6UiBCxmQhiXfDtnHScA1QwcyYYbHyEtC6KkUqV6GBYHPMPJxx7fufeLmQBkktWUan9sryFsTScYTMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVzAiGexUSz8GuXcmbDuaEnxU2eQWz1BT2LHp1vRvfJQCPEhXgf7KAhQDmtAz9PTX812m9bqPHxCp2v2CxrwpmM",
  "key1": "aCtPjbXEv5n992iHnbYvkxZR3PNNdq1ocCGPHmuvi15oqQZ3NVNiejVMELkECmwFNUVom3oNm9UecYB8roKgTP2",
  "key2": "nL4PZYTfc6SUxvpp9HppaGFzMhibUtYWjMvebihiBR82V3aLV6Q2b259FwLEBETJVq3Du2djf2W13Lx1YhRHLpk",
  "key3": "B2Bk637uXXb5MRtvkYSs31924EnwwprSiQVxGeqFzt79eexyprMJUbYYpZx5iYK9S1VkWLBP4XcHdKnRw3R9G6D",
  "key4": "57CfDxV5sL7GBYQoGkS42t9JasG1wg9aJ9s37bCknteyRrA3WV8yB2EP2ZBmeGoABPivaG9SzRyu4jTb6kAjZu4J",
  "key5": "Djg6k2Zpp79QWD6qdusoMg9a2hcHfU355iSXp2Q3dYayQuDZGUrnuJPNdbCp93AFJkj52WAA4sMVtjLRhWsXyY5",
  "key6": "2ctRFEss1o9FvDj3eRyPN7qHordzwMAFpL5RhvHcREoBeSDy5bajfG99RqdQdmgyyYXCpP4tJgkJ9P5dYUsnrfgA",
  "key7": "3NwidY8DeoyB3o9y6fs2URGxATtMEKowP75FrRAKPSSX3xyMp3v4AhaeEU6Bksa9VGtPnqngoq66j1q8zxxAjRgt",
  "key8": "4XxQCHubL6NvmzhtiNF7aM5bRx5HDcPgr7k2Ax65tXV1dLV532ZCEi3T74XEJBg3fmgq617wqNmXuZmC29UfjLpk",
  "key9": "57zTfrJGsdw5wmZPZyzdBVfVJDPGpWoBWqVzMXZkxhLk7m7EsEabqkNWUF6NM8J5BALYMvxzoqejab7JkyLrEkeW",
  "key10": "3r68VCe5982kQdQ9zoB23BR9Y5uVNDpmKug9v8Q3iHgxTCEdAQj2p9D9kGXcQsjpqw5GsLcfnJHxEqPCTUugMTw",
  "key11": "59yPMbc7zLYgvbqrTwC4MKe8gupDg1pNCspx5C464dAZ4q2QoAinLtaZrV5XUzaJvbvmBGSmvAvNrj6NUY4ufGEX",
  "key12": "4CGyP2zG3puJ8oK6FsjvvdUkWv8QAztMyKduF1vyvAujBcz7s4s3F9EkTYi3RKFU15D37rsip2yDP2f1Y2oyqc1V",
  "key13": "5e422Ss2zgrcPdY6rbscDco4XbuURdwYBqzNxar96qPSwsNsbpYQLmUzEcv2fnY45wL5txTugbU2eRKpXw8m4g84",
  "key14": "HYzU4SSuUXaoT9mq7KYW91RRKUPxxFrXsBdvJZiPtVRxUdk3hpn9a4PuDv2J4bFcxmNLvbuuq7K2huE3gpMb4up",
  "key15": "4vUgHFz23YKXgZnY19cJ1ydiEGPpQDN5MyHeFMucTxa3fTELvNbZMqwPouHpzQdXugJz1ExYypzkbRy9qJR2p7c",
  "key16": "3Fpo4G3ADHTbcgJ2uTq4yFrtWPj3yLKTQgXPjquaQi5Nn9sGtRhktn1LPxJNxhHL3zFY4SJtjiHAWpdnegoZTTF2",
  "key17": "4DAWqYPDham3moaxsis8eVn6CcAPJFQdGfX9VqYgPEarNRH85g7aevanzwK7unVXURGtEnj2TZajDuuRzGXe1FVs",
  "key18": "5hbxv4pJ8WxigvSGSTYKpaduTNjJKsYHpvtzNTy2qDuuozijKFxWcukymg4k6cQ3rEs3vYJY2AjUoRUBgF6BLosm",
  "key19": "64REow2iJQqWxT2LDrCaNRGwWZDwe3KNGc1KZoEzTaZFN3bmnvUfno5QfhCmpH4vK2a4XcQw1i9eeWt4L9FXQ1hz",
  "key20": "5h8PxD5WqKy6RYMeLxV7TM2jbQB8BX89rQsx7kbi6N76wafdy8NZcmTCptGNyKvaah5ikqm9F7QrPacDgndo18fg",
  "key21": "c3dQ6EqnPsJwKCfvzBxPoBsQnNQQ33GbERpu6bdACuynEB3n945YZ4vq368YvEo9qsiMVBQf4nx3JeQyYmk16B6",
  "key22": "4ycGHYK4D1k9gzCRTsF7Viu2B8QwTkhNwT9RaNJH4rBy3bUeEgapzWNVuKeh6g5eip7Yi2VV8Suv9V4P6EBTkMzK",
  "key23": "3rMVfhQYQ3uWduq8vUJqzPKpYuii8Kafkx1yqcNvbmj51QJLpSNbe4aNcsq9f82H1wzKMiBW263f1rAisZfSERh2",
  "key24": "2kqucno4pxZfLEVvuTjSTskDwtar2p3TKqj4p8T3fXiF73b8UNFium9ydmCg3yY6EWY3AxYR9WQBVxHoqDBXKFAb",
  "key25": "VEgeWnqh5edFrPqHMCVny4NxDgpgsJ9UkMb1H6Fwkq2S8NZDab3BUNT6tXceZSBMVAPhCXq59zaNHf1DitrcRj2",
  "key26": "qqkXiRB4A7XLGJLuoVqMbLxgd6soncRcp5BQJta5Y1ZDDN8F9hvJfChqVmuvg6ftpSbHAEgXpgTDHbdnSkq4FRN"
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

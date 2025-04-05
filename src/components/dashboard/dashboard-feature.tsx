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
    "5XaNMfdGd5saCZ3NNKUvVyxoEJCGe3WHyAt2miHAjDRsfcuw4B3N3Njfy1gg2HvBNwAJAbufCfntfUxz8nBDCm3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U15J6LH1PLe1Z3mnyuti1b3Qp33WiXi1P3PKTGdq4CFESZjmcFqK2wNxj9h3XHdM5iACY7eUGtHBDw3D8Daggqo",
  "key1": "5SM4XYdgRLgjcvmjq8PdhfEoE1MKNHLLWwnJcKQ3K6TvDEjAsfomJo4E8PZJWBiUnwCaq9ppjde6fjcrfcg59j4M",
  "key2": "skjzThhVwzcJJaqcUNZ9FseknjKYv5upiHA3yEwLBREBXZsot3ZyG1N4haJcfP5zpLjUA6XypSvyVothu5f6DdF",
  "key3": "444F7Eo7ujRmq5E8P1ARYjcJPtruFNbZ5jZyLzmSUL4V2TxDYbgvBhtsQPibgaC4rGQSUTGpjPSWeFyZdSfqUMbL",
  "key4": "yCQXGpMSYqJmPfUStELf6bH41JjJ4CG7LxJz3gyjCB3c5tLkHoYSG5T6WprDuXQiLevr1kJ8xJLQz2oTxzkFFCc",
  "key5": "MKVVZEy9AYBHKj2irZsqF2tVSW47tDtcyCgygix1SycLgVE6YJarNAWUwJ6f6rXyJHDq6948vEBjo3KBKWGq7Cw",
  "key6": "5Yq9yQQ25e26Aoyep9rHsws8JYQBjQYGpqF7UamMsxFtFbfHhw645iyyMMbUswEDJRmkBXtSU5sh7dYR24zAJ5m1",
  "key7": "3kRoj9zCMUXHb6zSHkbGBxz3goQb2oymJsFT3Sa4ZPAKcbpvXnvZmPNqhiae6B9DMEzbP4P1v6bLRh7PbP2HQef2",
  "key8": "2pSbMvrFe4L6Qp1qKHAyQw5MAsbdphuBtHCjr7bw9x7YXUnh8WJW5X9fiV7aQSGpm2n1wmwYPiCZU4CbN9kvFyRm",
  "key9": "4RQyXXmZTfoK4CVwL2ahde14Nq1QrcTKRToiqESDAd55PYLJe3q1xLvvebSyHBMjizB9PpRdgJuFaZBrJ31da1jH",
  "key10": "48dqeJfS1nGvE3cHLyQMXzkq6REpJVftTKRshUdH62wnkqhYTL99sus5BEMFf7s1MjijNjQpwro9izZocMDnkB4a",
  "key11": "5sBBkjsKQeHV4s7fSPaw8hor1wKMw8GgyZnoKBMtmZ996JdDpsMw2eJBhFuMvJK5nRs1CkmNz9oYLEyrL8EzCtkQ",
  "key12": "4bq9jyCQRfGcjuPfgv8YJTRJs4bfL8UnC5cnwvhyUE4awPojqgB8orYYV7z7PwBobqZg5BnCnRUZ86EQna34vArf",
  "key13": "5723ughTttmMCrcvQrz77rVSbwy4ZYrTGCmJxqANJTMQDV4fJ6rBS5pBGR5ZLLFYBF6qK2jtUCXyXmbhZFT2krjR",
  "key14": "2Ssjrzve26vkNfb6yY93MhMzGwxHpCbMYsrQ4WRp5CNj4e3hZnC6Z4EpuN5dEc2xngXAL8cEEHpmqoc2MnJifq7F",
  "key15": "3RYhHh73qU7DXh7fsNPS9EqKPcFnsQbuZhaWQqdZD4m8PwDZEkP4fiGRXuruATFdzpzsTADymstebPqXigKZUFWF",
  "key16": "5APPRbSAWbwwpvbuXtWM5mdcbcgn8u2Gf9nZoYn5VF2KrE7N2Q7sXmDnp9uSoJoToEQRHbQxSGZDE5gxRXBexqge",
  "key17": "dt7nsJAFMJN6NRBVyKAdtsErbHkRycT3jaDk7kcqQhkmyaaxhtzAUieoS7M5gBm7DTMx5GLe2Y7GbzpB5UpJrWC",
  "key18": "28cdBS3xb2xvRNuKzAqHkKsM4QBfZjCQipSGtUJdeymtJyfJFnvjGc1QQYiSdEaSZgLsFf9XAfCCB8BxRw7w59WV",
  "key19": "LD7Fvu56XMUMgC2ZpvcMbvAT9Ct4sYXyNQdUNSvG1HJVMmPuRDwXv7mioV5oWN8JBM2YTLKcqVc7TjSDP22FfFZ",
  "key20": "zT9o2KvHWaewGGaUSa4kxTzLSRsDSD7Xx4vH526haxRSY8AiXRiEtSUkhYCuUy7kyGn5JZYh3AVmoBCDbacoYKY",
  "key21": "G5P8cQoiDGTWsSoEkj7h5AkfjhdRKrpJMKme9Bs9hGqiBubE3nsMV1XzRb33FYX8WHYCRSBjWVFpzTEiZ4Z3mzh",
  "key22": "38N3np2KHS4Q8RqMXGQWorNfrdHKWZ25nFPV5btk5rLF779SCBZT3ctXc8hcCsbwdBYRMKvgcb4LeMJXdBjmA2XQ",
  "key23": "4EWMK1tYw4VXmLK9E72yUjCtmBSBkjfJKw58q2kC2JgqhTCnMZWdZ1NcwUKSQAtbX7QUx5WGtveWo4eozhC6DkQU",
  "key24": "4HkQcbQpScXi72UMjaJedtJedahTdp2NYkMYXogLfHvsQtc5k9PC2wpNTf5jk3mAuoGBXzzgeHiwWRzgJRSBkFaB",
  "key25": "4ADD8BqUcg9LsVRK2gxdFf5C4GQXRJXKpSWz3StNuX4gKNfEoiKBabVXbZVgRTrbV9Z7AoWBZiyiyjhFi9RYLj6S"
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

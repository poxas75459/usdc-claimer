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
    "av9VSVmKTVT1EMtf9kteZ8j7RzPUP7wRHtPzXQXQrKZ2ui7j3fEa5GYxhLRjQTUH1PdXbv8WfVmajhVqq9NesXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJ9vVcQM4bn4CzmPzDQwjn2b3V6GLnEM4LfLJ2xSAREV97bQ2tGvjsGGVwhMEXATTHNnxtkVW6mtYFEjvyXs7u4",
  "key1": "3TRfo7xLPxHBskDNT2zJ8CgY4oGkQECCunMWYyM3C673xxWSgLQ5oCEHTA9jR9TtWS7VzwrDgQd6FLmwkY8ZGZ8Y",
  "key2": "33igaxu5u4otWVWKtfWyVg4QXghZet9hgbVHhiw1oM3sDpaVFB9YZhCa8LMnPe5arexuNspocWPynF9zTfB3zgc9",
  "key3": "4ogyp2VXsPYdPEBajEbDc678XYtXKTqdgm4MVDrTe8esN1yamo3iS4pgMViDtFyFTta2XHqnNUEYUxxCm752HGfa",
  "key4": "5pG73vZESLPagmtBP3PLBLzK1egohyxCHbPk5Pumjx6GHZfgGcVUMshemKti8oDzDurSs7vckXqRqho2yYAkPK5N",
  "key5": "2fwh9kvA3tpSjPzC6dDvZgV7eEbD69DTLoyy5bDtmPLTVCurwiUC5okv8NTGkYuLgiUhYWxiopDYdFVvWfwYW2Na",
  "key6": "2Yboh9LVYtTKUVmLPjSmaqTgZjqQBVPnEw3PnaW27tvrqnbYy16vppmghr9zEn8awYSVDvte6hqCuc2yvCvEnzq7",
  "key7": "5aSH5vNV5FoxxdP3gwFLx1mwL9fc9pu6n5d3QNcDbdDnLC8vXyGjXoetDmyRV9f5oKL1zmMdLEG59nSDnC8o3oXg",
  "key8": "3Eni7hhuScsjjwqKzdfubvawGmx577wfAr2YszVeAN3nCUB5K5JpBLrgi2VSjrjf9kLioGbyV7sxR1CbQiogLM9j",
  "key9": "tzK4BGGZdAJdxDeYG3PAuPJpXtQFECekJQDuV8FB8pn1e5SocSc5n5c9MSZqAC5CF3gpPPv6SfUJh2b9B2Sq9Hu",
  "key10": "3ekEp4abw7W28uipvcXR6vqhBCDc5PjxSL91qAJcCiTQdrqjQBrdVWa77Uys9VjfP8hixv1CEiivsL8jcsQyeFzN",
  "key11": "3uCW6gMni9HScsbvjdVLo3A3BpzdXmv4Yi3ms2gKyAYD8V5dKiHwq6BhYzwPoCnhTVonAW94vNPkyYmYPc1Xsa9J",
  "key12": "qVjAuRR7Egf5yKsLgNbvJJxc4xVWoadfczQs4PmaCNEjTeRTqvdqxgD8E5ewbzk6PrKrK98FagAcv6x5xzhdH3W",
  "key13": "3ZbF8328StvqJtqGeqFpqhngP7Hgnv79TkRxiDkNdFpccftJ7jwTbwBDv99NNLeQ3YwZinkxRzCPeHY8DRaFH88C",
  "key14": "2MeqU3ZfQG5WPRKcAggUu9zzJ3fycYuRYVCKFZBurLzDHLLyK6eVHrAEyJx85iaHGKpGxgQ2VS3HExhJLeBH3f2r",
  "key15": "2DJJYmzNT8ViqRoJFngHHMPAFZVNPndF8XjHUKzrxhzb44JpVof4iagidDPrqyraiJ5qyD1CrzzVkuUMoGYCWfmg",
  "key16": "5XXWVM8bcFeYEoL8PXzXFeLtCd23Ez7TSx8UHY2CAXDf3kL8dt6LrM4FmHG6g6N9MedJWDSGmopEddTxAnBaDbaa",
  "key17": "5eGTA6fUUEezJzcQmdBuhk6AaD4gvTKFxMg1YthPMp8o9SYbGoQFQexchDgYcJKihiVdENZkcgtGAKnmytDFFTzQ",
  "key18": "4hmTi92rTduAuUYy1A3AnmDvyNJxS6vFVS9JZwFTWAjdy3gEZj7fiVRU6FRF7okhS6VRrk2mx7PsWBhWHTqZqKu7",
  "key19": "5R1sscahs2k2Lebqzv8ywJFAPvA8yhFSmDWkc6uokYdJKR8QFCW7AQPa6BtjY8QeLVp3f35RFCBnocbZpzwbaF4L",
  "key20": "52zyx4GuA2KYcpcjeakFqjPFrqqtRX7Zw5yDSUeM1fRbEhxAa61iaj9NvA9BC8jeHz41LiPqfJHfTx7dax4yFGmo",
  "key21": "2MBQpKXafv9Xza9Bcw5M5NpwGTBFzkW7BQU8RcYK1qVrPQD73FrFTuG3xKCUpL3dATvPWewqTNDCSPkPFH3DeR8B",
  "key22": "wXapTSj5cUH64T8m5VMZQCnigxGxWfU66jUuZ4UuhEvXEhb77SX4DfBEhXDhZ8aTJUQjEHkszymcLtVFFVc2krg",
  "key23": "2V85ZiodjHMoAQjbym2ZELLjYxiox54FFNqjKhQoodjfd6tguycGYHTe3GBdiGXJpAEJF53cKQ4DdWsxXQwX8m3m",
  "key24": "43FFe4wFWDcb6y5XBcjW6rLFq5c4QP4SYdDo879oQbcgkVPTfsHcY98kMy78AYYysb5F1GwyV3esWEGGRznmCYPL",
  "key25": "ovZoE5Dy2ZiYUsGH4CKaTjM5ho2wqugJweGVnf9W3PwYaYtmNRnGMKHpmzfceR2AcoSrnYmHkwMjdyawDM4We7m",
  "key26": "5tfMDEuQSRc6uB4LonEYyRZQBK9LWECNr43CRdbEfSGBGpY2KLSiuh9HrhgqYgFufyRV78A4PhT7WpgXA4gxvKq2"
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

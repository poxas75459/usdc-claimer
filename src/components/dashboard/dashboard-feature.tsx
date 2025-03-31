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
    "5fyBPoB5QosaaT9maNCUd4yFCq7nRv1jeHC8dpgakEsDzZzfBinQ3PEvqBkfcrdYn8Tj52mAin41hYjWL1jXn2x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j1WFgmwTyyxfWh2SHS6oxxDe2PisfZQTLW5674guK8QFjpypEJ4VAw498M1go5aefNoKKzWVTHbExpdrJWmbyyy",
  "key1": "5KZVaz4q1kHH6CxqgRVRZLSVdAY91iFGBBtruG5sKnAqXF4tnGZAW4E18p43muAcRuKnxpPBmYPUAxp9JsJnQSNs",
  "key2": "821srUotAeHE4dihLbcd4F9QHEZfvwmQYV3qtrAvnZS3KymZtEfHxvpp1ECzTCWSJLZ51NBAQEbc61QZdjdRCBS",
  "key3": "2SJ5M4w1RCPraDFWn8UWZkBE46jSNQcrbcizHSsLVFh7jHRRc2kiFC8DRyUZ335DUyypKhDPbYQD5Wxg49pF63Qu",
  "key4": "5t5Huqg9BtbQFbGrkSjEaVLwCrDVB3kZ3u6Bzt8FzL3ajcHd9StJVfUTncjrktwN85zvVZ7Nq689yuwfEt4nE688",
  "key5": "vxNqnev75GQc59yVAUehrkz1WxSyG3gDeceS7L13v8bwHG1HYdxAGZ6LnW3gq4UkNW8d3HhEmozjNn8UWVseHP6",
  "key6": "4brzQsGB2BMRBAqpn2M1NynAiJEnLo3gvGYozwpttcuQYYnD5K6ktB1pnuzL4A4wWsEsotmPYAA2BfHJhCnGorM2",
  "key7": "3xqN64So81j1ZPEeBkiGQBKiRSP3wAF24S3hXPaoS5tcuJcsAy7odDgjtjKyGeWSxFQFhafzGncsPXBZA4EsDWK",
  "key8": "3Q8aCjFB2NaJKoehaM2gtJubpRDrb4aXDQGEVG1hSj5Ry51rGfz2hQPpeiHrTH58BGxxRv6jerNMzgZ7JULKyENd",
  "key9": "4JJv4kJM4z6DMbCBC9Gf3GpAwe71b8BbDUHHmqSwZym1HFYGHJvVnPc1KLYsSa9hENLBmhr1U51xPc5sEZNHjcR5",
  "key10": "3cKZ4i63iBrA6LSvEdstsvvTY7S5HWXKraxS33Kv5jLTndkhNihVpTiVWUmSyLC2TdSU8opjAx2G7KTHovqutrN",
  "key11": "3H5Z4XWXiC5cmCedz9atCGkGzp3SUk9UbuT3CMMjNYu8QWvPqU63RGpzw2Fe6sNadnvpVVpaGP367qQ45ErgAMEm",
  "key12": "UjeuPLVEAtofFD38w5YAo1QyZkSZufonKx854Gtx25h1R87Y95aDnFz8Bwtpors2n1SMP1PPW2gzGYqyZqmWsUJ",
  "key13": "2zAWkP6gsKEYk9ptyA2UtFnNqNM41F437nSipy74cg1VHXYqCZRzeMt6JxzQpxQfEoC5tuZv2gFBUwdeTn9fnWVX",
  "key14": "3w5Tf1a82A4z8zRJeFTBXUEi29KCF1TqRFzpDBuDNnUheNX6oFCtuC98mk6rjxPTrjQ9bDnVExwGLbphcEya3m2K",
  "key15": "5PkttogHVfQ7G24dbrwP5E5Ax9mRGAsJFDL5gZ7QkgjzFpuaRterrZZ6x753UEhTcJpciTA3hySs2Ws6ZCG5v2fx",
  "key16": "9ENH8ZCcBmTNcTLSjudefUs2SdbMpTuL4dubHXkntDA1nMvB26TpMiM1Xrc6fSUeQMenQ3EG3eZYSkeX9a2STma",
  "key17": "4LXYNCqVcQ3GYW3zFD3dgK78o8FPAeFxnc8WgXFgdZFxT8ethzGGwnoFXyw9WDNmuAmBzMdmtk6G4NuvumpnjVNT",
  "key18": "RQUKtgYEfWxRi6PqiyXUe2urynrLrJResRTmFmvRraWSay6H7hoWG7hvcHxN7CyX2MNooyCN6DkSpCDoPycKHdg",
  "key19": "4KgPVdLNG2x8HcUQRnpnXMLnpoBKWxjPWSHc7oqU4K6D5u9Qrk41LReUScSeYQH2qUH6G1FpipMUPwoajj65F69e",
  "key20": "4YoiwpvG2sgZa2BGG7DrqovDD6S1dgBjwShnjBBDQi8KGDzqHaX1EDsZEtnPc6tTk5eq221RKwq6vhjDg39VKSic",
  "key21": "297GWnRxPnDCAHct5pyfogF1te8phefn9RnhVy1AUFbttZYRg7zEo4zzaEL3q1PB4r8yk4GYMFsSemaBqYwyVwJp",
  "key22": "32eapD2UcF6Sthu7WTTXozrioBTATNXqhF6vT7ZKzrFEC9N52NhMJ6EyWsu5XA9HU3gJYSPfmxBLhqD97X4Ht9iE",
  "key23": "3QQ97VFVWbydWkWaWZ4vA5fgU29hWTgqiFaG93YpooU9qt43bGuRntt6EaR1rF6eQeZscuTePp7GSK5RgaRUhbm4",
  "key24": "VaYMWLbKBk4S9nQSGYRM6BRQ7u52fQo3WFSk6rgjQAXoTPphNe8irX6sMe8vUwhwRx23aZHA9JSYaPH9WGUnYsv",
  "key25": "52ojfa7bk6ekfK4zqZiXReaRuUv2zKU8GX8RjqHFk2uJR8avoAoEi4reWfQCCAZSCnHbhpCE9oYYxUpzfHBPeDzM",
  "key26": "95hQqLc2WYPMPNY6hZtgbqJ8UrFR5idZCXfdAm4NxgUJL6UJmSUC5fTE4o2cQ9CoFdHUcToiEkGHFpdh3i96pZ4"
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

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
    "5PxLvJA1Uv9LcyM4aosHFfRhn9zd4yT522WEn8E72KKDnWbcntKLBraH3cotThDjXpCc767M5gmp727oHZ37s6PY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZHZUxNXeVq6wn78m1UHS6BrXKU9XvSP4hWiUFtseFthmnT3hmK9SAt9zKKvDp3cgYwJRcVMpUy789EZEK9NMEN",
  "key1": "3ddCBj6U3K9JLeU5WWHwmbb8vuznuAYdVE3iMsMTeLos5ciWouEir8aaWhHK3ZdjPSSrSVFSCwVnwZnMBKij3xqK",
  "key2": "dxBMXoeMhmQ3G2v3dVhgQwZpVs9SpLkeop2k4xQ86TPSm42twaRyujvwFoGxQmiq4XCP82kTuaMLWN5Z2jb83mc",
  "key3": "3C8y1JvjxtiUTeP7Aonq3zdCgc4f99ocJn3W9rAca3VtU6zZgKADcrn4poDyCmjZCmqTpFMUaykfiVzRsRtUgMRn",
  "key4": "J3mriZ7yBgMR4gE9oXac5ebFwBhxSThGQfmuLun1NfYcfNdLLAL9X6WAonbpW15weeZHfqhWyGAos8Kx2YacXaf",
  "key5": "5qyz971e7KH5mLyGrARNMu5ciobEVgeQgHurD1sA3eYR1apBYtJzYzMjJ4ncsaPA358bbH2HchNtiG3hfSnJorYo",
  "key6": "4Sf4nq8XthguEtiMA6zXPvwrtr8beBiNJ8sWiS3ZugTFDNKZsu8FHRgmkxehogSy63SGLPSnLANjfTxnrCkGbofh",
  "key7": "5iLXpw5ZTwpBSG6on8uhJzYhd91v7rJoseGJvq3wbqMwZW5LuH3vQW7Uz1gsjMNarRpm1witsGvRMLvt5rRPbPkU",
  "key8": "582VHSbz93HzZLaiBx8PL1bGn9Ms7c9M71sBH5ZdrFvHTsXYS8FwKWNZxwANhGsx7cGqNgcmFqynrDzChjkxBtua",
  "key9": "5XB7TbkAYSNeZnvS8K1v5yKX4nuuLHTciSn2tSpnyVCYBi8uZnBxSvL1PHuktAf61aN1Pw6S5nkts1pCat6BLgex",
  "key10": "3PsCMoyN4aLsx4n5t1rvXb3AZ2HRDuaL5jFSjtcUKsGx1saKdwQdMMJTrrTmxZW9GSoLuP7ifspSoVwtE1q5SESw",
  "key11": "2ZrYmsfME1VHQ9DyuaJd5AhzMa9sctSEsnjJSez1QrVKT7ZXnTgLq8Rpc1EVrdJipagMqYZRNbaQRaCFcJC7Chn7",
  "key12": "3BGBPqNLGwWbykQ3F18QVtu3ZqXP6eUjXcVD81ZYFk1xwpreNUdFydre9RhMDwc2iBukKZVnYvwaUDHt1nU963LH",
  "key13": "3MAsKp5SD383hjes2Puo3J7VkgNz7VamF6wV6g29ZxP38eNkMsKEzn1p8yN98gb4V8ZtfAvyn5x58FSv1bjkcX8h",
  "key14": "5Y5RtLR9Y9Adkco271QZjCfqD93uctTQ6DyLsMe3ZCCKzR9E7g7Gh3Dkuo52BGGPa6Qnw7ythEyTnQR47SDxpL7n",
  "key15": "ua3SBkFNd1z4TE6yDqexnw7wURvZZPzMkKzGtz1qVsBkxoKXmktxFKQdWZTqij5UnKxR9RGnHdzimb7jFkXjbi7",
  "key16": "3CNb3a3eGnoz4aDYAKogb5GGQ3fpPWfMuCWqQNjPHs91BpHgnH8Rm9ZejoMxSnJw9cSrWGMTYqopHUewQWfUhGoq",
  "key17": "65kV1SYfk6QxsEZNtRDYVgb1XTkPcWDtNiHURnczUaa2jBwi7sVHwFVDJd78aZfSgKVShpDNH8diDDxdNn7sUjwN",
  "key18": "3NJtspBShAQ3462THFZZWyAoZEjv2JxdjZs5c4tSRuqTRppHtr1Z2sm1eBzwX6ZohJoREV2ZcRD3SqdAQ62M6XyK",
  "key19": "2HL346Cs2VsUvSGgfaMZ6ZmfcRiefs4vGhhTLRoXotod8Z8Qpkm2quaBg2Jgn5kZZtvk78fy5upFgzmX7cQTXNtM",
  "key20": "JcZvF9jNK2qaeRu6N8UTGS8MjE1v6ZDrHJ5pbAo4kJxzyQA3jkgtS8CujTD6wnhBUQFvF5JoYa8n1J1cSuLnWTZ",
  "key21": "25oqxcVNdWbxUXKRUHjsbfhyfDDi37Bg3hragm7izQNS9FqnQKQ7ShbUfS3wBDbtazDVubxTGx3ddXuGS7RQouQE",
  "key22": "2dNgJfiFJtLjFJkLTqQzFv5refCAA6GcL8FSFKLXPo5A4gshaDEekdkP5Pd3XzFSRfVPu9f4svjsv76CQxcdbJNc",
  "key23": "3iaTZAQnx3KVbWK5KCZ3MVqTJiCZgiBrknCJ6AYGJWBKRTBhkHN6Fe81EwRvCdwSmtRG2FzAtDU9SraF5pizrSkR",
  "key24": "51MJqY7dRYSJ9KktyXtSTdG1k5vJpuwCQRjxxx5insNQidWYB2hB4oGfHTi3S3xhdBghTPVDUAMPDDJpsgvTQRh3",
  "key25": "9WqHMKNQjfRjgZ8mCQeFx4jUz13ED3UPiTZNLviXbUKAhFBn1qPiKTfQC6u4TcJEL7QGQQyudEcjqMnUZVpaZNo"
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

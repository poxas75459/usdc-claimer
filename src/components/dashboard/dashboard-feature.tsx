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
    "4P6jxrNatGPue7UH29M258Avd7hRXYqSUVVaoK1JvH4gHhy9168VyBmkd1UVuFY2goc7qoGPJUW4PiP8fsEieBYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMHWh4a3fYgwmifvvMZukkfVjwqzxaZgXKvDu2bRxvnDfoUJGyzDHhEcxGWnCX8SyAuTMHqZkZd2nAdkcUywoPS",
  "key1": "5rPgHT2mDrq5NtfdCULHZvX8Hyp4zXDuPq5nXRSPvMbdJZWFK4tLSuBB1DVXDNHQhvH6F9Sto2UMiPuazBT3M72u",
  "key2": "mCqDF9k8y6XSfitoGobbnntjcsmmFut9xzrGkuKWkFMFN6bmtjx9bHPmWAeaGKxeXqDCGbfpdahzKM7T3Mtc3nm",
  "key3": "5qe96mRDrMtd15JALm3VLVQmzgeqPFKExL9hBkZVyHW59Y3VTvveWPxUWC75t4GUQ7PoLoXE1cpW1E8HbV2Jxnbd",
  "key4": "4zNn5afkeomorYwibSvAyRx3Zj5RaB8YdRgvDkwvLKBybksoycgP4fG1FPij8gZPJxdCBqBLh4FDM6ZzUbHR8LSc",
  "key5": "45T97QmihvczUBhve6pNXzShsXAroyrmzVDD6KJ84V1gFhn6WtoDeZYSN2SewwpoUSrkh4763L2g4pkbFJ7jDy2Z",
  "key6": "2WWa71ti2NZTXmAqxXmuuuxZKF84M5z9AeZeAYSnuzG6KY5ua7Zrx7DH9N6fCLZ8GsqPGyQoYvpEEcBns5PLmihw",
  "key7": "3qiNWVbeSZCv6tngXwrHfduQC59QtgNsDE9FFFb2d4pVGrnuLeV9Z4YYmjK3xkcDSDSnMXm3gBKNpihfirUMtnEQ",
  "key8": "3uTLJetihicCRBu3Ux3JksFGSmv8nXsqZe9zQPKbuxidLhBns1bp89LBCsbHqrB4ipRJeit4mgDAvhxW4pryLSFF",
  "key9": "2Lz3bYsZBEktyZKRzcvjpCpqdnKNgZJsYbrtnMgaFG1sNW6QWDfgmEhmcPEM9pmBmjRoEALAWaFGcR11CETGYkEH",
  "key10": "b5cvhGMtfAzVtqpfdD9zAW8aFEcwCRdQM5dkWmwuA1GvjfvJFxfq1io9oA9JsNNYb71v7RL1NQQEGbUX8gkEBmF",
  "key11": "vwTLuzkvGA6NCcsxbifvhzFT42gFGkmsotkPkdiAC6EJVMndWhUjUWvi3uxrYfPcEGWX1mLLxfn5JNdfjMFagcY",
  "key12": "52cD1NKD1t5EA69GQ9faFiRdqH4JiAS7rVHAhdAqHg1SaGU1NhLxmwwrPMenThyiKi7Md9KhL6NLM3GNuBPr6KfF",
  "key13": "3CxfUTspLKsbswYgB6586Yitaf79uTrjuYTWJJ7fp8BFKLTtvbPfCr9LxSwbGBDwD3cXjwxQBGTkfye9sx8A13hg",
  "key14": "2hYmiTUfgDsqrhiLC2u44DBnAsuuUDb2KNma5GxuFYmvEND7h5cFX349P63kYCK87Q39TaCe3ouRYuMtmn27ZEc",
  "key15": "58xtiZH59GQHssLzHvocay8seCeywrXCDAjHrx7nTM8PRZRGmb8yKCUVNMFZRV2uRay9m4sJit4DJfxX7gdmo7FD",
  "key16": "5mtp8pf4sFq2ikvV2e5NfvnB5PuZXaYLVshHPMX6SU9b9XJBRjYgkiuFwZHhLaA2Wgvd6EfXuibkVMVCjfbLsRbD",
  "key17": "YAgssHg2x7s9nt8vQrXzBKEicwd2hPy9AEUKAFkPZoCxAXqTmeQj2GmvdzUrb95d3FcyoSYMkic4z4hRg6P1kAa",
  "key18": "2iQMqLM2vVo4U8LfjHXPLa9Gr3HKTXen8uXyu6iXrJvG2gsTQTShp4z8sCdbnWeq5xAb3NrmKt1ZUBsXSYHaq71X",
  "key19": "3ZmgUcAH7qej89CRPUZ2ax5PRFSfCjSKbAuzFxfo4XPhG6SmgENmz33BVSvTtVDrbq5qsoVYJopX5U4GfwFHujCS",
  "key20": "33z9xpHc5ANGQutbU7uLFzPs98utk3yCQhWUSyUxiUMKyCmTCKA28TtfMCiNM55x8eccV4CDPKhFoj5vhL4mknst",
  "key21": "3Vd14KvB5AXq9yzZH54BCn64Qmb27pbAyEBGrP9dmS2tNCJVu5XJ2fBMubo6YoBcsd4gbD1TURmRUkSa2vXCTgwH",
  "key22": "Wv4yYXuwcmvUV7nj9tNHU32oP7gJQc3e37p8XzM1rd5AuC9jH231VsFviyFPYMtWfeSQa5USZ3ncsMYUVJGSw1y",
  "key23": "3J86sGxFhLFgmqhzwB7xX8uPe54t1sN4uhX9Z9Ut4U786XEwpXSebVyPNsUvMEBR7WrmGH1gDZPLkpuwkpZhqAN2",
  "key24": "3MXarfjjGK7nvMxLrVmSQLE6s4G5j7ac1Dns8xe3UJ8cGzreYbuYdaeXwjGc6YmNooq8GynKZVRkKKmWqm1bvHPJ",
  "key25": "3UkTzUj8F6YRchBz9ZvffYLrt1Gf1n3KWtCLeEZRFyPYjP2vK9dqpbXYTFFgnjntem7rmwJYhVFmD2aXx5VGJDs1",
  "key26": "2cnxuy28zwRJPBY8NaxVyeoGzGzWquKsz5YwNb1Ad54j4htdrTpPErGBeXjkQ56466yXSKRgPSXW4JaUc7L8zyuH"
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

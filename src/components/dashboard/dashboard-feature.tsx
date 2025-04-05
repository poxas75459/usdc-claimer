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
    "5BvMjBwgA5SghLXWmZ5cPMTVR5FWvznNzASwW2ZYJmnAVJxDGPsf2E5cU7oTbYCqBB2FxsUdhUEvNasay4osSvSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3be9aH9EZSa96fk8Lsa3qLictXk3svfFy4FA62b8rexdL8nAZEspRcG5FGcjbJpnDC13wo1o26fEUGoNvD2sjjy9",
  "key1": "jMBeFjxzG2rhNsGhtwY3H9fX6AEv4h1R6rb25CCwXLzoDQ5RMApZ9kD4qgfTw5kY5EWaj8dTqiGivmh42TkETQ4",
  "key2": "5AuTGSbhz4eJXzH778rrki4hYQsUZyVH8Zusi9P7R5GtpHvw1wNTW7Qa55hEpZSHXAphq3zvHDAtnxKg2dAnbFr1",
  "key3": "4JztxodWTQ7dZ1VKVZFRrsnkBUJKGSKCHmB6qX8sMHbfkQYHfckAKSSw7HtbSGZXnKgFESizotssvL9orMvycehS",
  "key4": "cjgzvgWrcWpqfZbCbaiZvpkknLQ2CWa2aL3aHfrE3u1eMC8Qnmp1yx9PtL2YD41ZvrFUN5h9MoPGbExKpEYiTtG",
  "key5": "4PF8ov2bQS9PDo67UH7nxPm3FgXKYTAMR2pApzChCqoPAPeHghCfh2SRogxdxGAk5aofjzS1PmWm4vAGBFbY22MC",
  "key6": "4uUnKtrx6F8T6aUrZu8Q32tUgJggHAyroE3DKUjh4dz6izh5crUuD8eGvCmz9AQLupXF4Q1mruPdKBTYyv65pFNE",
  "key7": "28DVfPb31JGJHU542oycFgxBLfNxWM1p8qZtpQFjCP9eeZsgAm7yXTbXZMf5VFWU1yUqJEEj2h66amF6HQbEzcD2",
  "key8": "3vNhLjHofLCbTtMB6rd2wCwRnVVgxnX3GhYw2vx64dxShQKgSGyahpBPS6xfJtvyX3eWzGMUKBHkCH4rgq4pjDbS",
  "key9": "3QSKNhiW3f1dg4KBuVw7WvcCkPgms5yZQZp4hcdVbEkYXvun5LEbEh3Z6qqzFwohuWq1L1AaU1iSCpg4D1qYn662",
  "key10": "4hucCPPNkCtncWzHjc8m8rgD4boKN52HPaPBHHYViLmNvUVyK6FCxBp8Smau4fRBKsSBqHeZTfZh15gQknKWDtni",
  "key11": "4ifA6gmwhkob7wAkxhAik9Av7Z4BtEvHkyrtsytuQiJYpW9JNkSJiv64dZXt21LxFiPK17TAciFWAurzNH7UJBTi",
  "key12": "64vmaScKGynAg3HXrJRfcMZbF9B2GmYeaU9DTzQUb8BSXdqLrMBeimQ9VhXaYSoa7HccSBoYDxwiahcFhhpVJ2ns",
  "key13": "WEjxzbczoGvNjehe1bCfP4Xt3TktSh5C7uoUZMDQQnJdYgymusWLtFM4RD9n5dR7DPkkWZR1dxQQUh4bnaFheGT",
  "key14": "k3wMpcaPK5ZS3DhV1jMCFs6BTMMdDTi1GAr1tFMSXAGYFbxLA8FdLKnGnbw3zeF6rLhNSt55AYoxamGt5RAN8kH",
  "key15": "3suFCn4UQq7iRD6ev6vLBh1GQdRCvB79D59r4FonpX4xg7orY2NWPYpRQcUjMaFQhC76nh5rSdigo2CCrpc37Wf9",
  "key16": "DVhD2Cuz2R2AjSpSSd4MjKnVwhUwFpu3MVSt783EiTWaf76fZUT2fG3KU7iMszATRoxaa6DzeedfaRVrdnKB8bg",
  "key17": "4GLCKc63k6Xe53h9Y6AZCn7z85Wmnz8gNnXZfiaP68j1xP8pzCoCfNzp6CvB7xRhCxFTYz9Vrdp8LnkzKJLttMmP",
  "key18": "iRSP3bS25KHRtpQzFUAHKsZx3pgQVWjeToEZ4EQhxf7e45JJxvjdhewoFt2TpBSmzdjFtqkCMwFNfp2feqs5b63",
  "key19": "TeUJW7jwdKYKBYWwjUhfSy4L9eC2LjZxmkiatPQfA9uV4QzhbrQpzuSjnTXvmqxf6FqMecZ5vFdhAGCQZXUv5UJ",
  "key20": "2ASru5XyB79mNCS3PRsnsUkZuMYNG6NN32yCNTE7aHAX1tFETcqgPugCPbsLtU7kcKizJKAFBs3cPzYgfUF4uVZ8",
  "key21": "2X3FN2Mu4mvFvLb41Fr2pu1YUupfeDguMpx4Bg9idYM5jPf2ko2BgKbQwTnaA5C9TFYCmCRJaWDgEJtqmW5xrEPD",
  "key22": "3YcPeSyjJ4zN1RLkdSwwqZsmoFddJR9U5hxgvRySNNV9byXw3iHSwUWkJcxypcZUs2YbxkNRzDh75jfMv7EnCSpX",
  "key23": "Ly7RNBWbBHTV1SZwS9D3T5nW12tQvZC21ZSWBsW9h1dEkR6zRCRhVYV1cFqn7S617Lo9MyzbTNHovGBxXKVNVhX",
  "key24": "3981AcZKB2eUcypp73eUdMBsyRYLXYbz2AnoHU7GWR3ncqTcr8XENdwkAZiL6NgT1rdvhJtSfT5TRCThnn8CW2iB",
  "key25": "5MHohRaNXCWEvfNNaTq24ymXZsAZK4Q1HLfsH63bHdMwKNfVGKYotj47kPpD5E5WKBsfiAc7STXBR26bHq5ESj15",
  "key26": "3XhfEEx7xvjE7BMp8RA7Vp5pUwYbw6dU3QwbyZ2Y7ySiJq2gKQMLEh57Yr6XS1Rt3nQqtXhRRRdkWA4gTUK38RRz",
  "key27": "357Qby1H3rQb9jqqGiCNYAhriVGJXVfbsnVm6X5kg88GUX2tXf8KYxdMuKgyKsLb6FwKCFR9W5yviFrZyMkDkHV",
  "key28": "4WfUWWfiPn3bSn837yeujP4fmwhd3cPbvf43jirvFmWxWMeF1WbDUjtHLihVNfnWtzUCpg6wnR4jaa834iHAjof9",
  "key29": "5ZLWB3VWxDCsdTuiNRxdw4Uf1LNcPjdhcX1nicwBmbz1pZNXURtzDuiycckpkrFvnY2KUPv9Uko1Sc3L9gEoRQTV",
  "key30": "26oAg9ZRQwm7HafeaVyqTuyGzzoteaCcWMAMk51vSMktsSx9sMqETzdrU3wRzXQivTJKoH34gDMmk2HCeK3gvMZr",
  "key31": "56G8Ye75BNeGKSeVTGD8ZQvxbpkYNm9CrySnAVkEpW89HxBT3d3voP4chsDc2fjsU6w11EZJsds7QXMveZYZWJQD",
  "key32": "5HCvZUG8B1QLk1LUwbzpyQvh3QxKSBz5r4AREEcozJkUnS8qMoRHFoLXSoussiXbFH9ACGw97ok74ZBFbNsAiqoN",
  "key33": "4KHqN2HbYb2nedUKH86V5T8iBtTM33hqxS1y6WUHsRGihaYx2zv59is8pnPsTq8nfwVQQdUVVPoTPF1gacnNEEsu",
  "key34": "5aYQCDt4JzLFUB4WJ5hHbcF2JVbyxXEPSyRFp4UWBubc9whuxJsQbECzWwQxdyCUff4joN8x6vEfNNZFRaELAmnv",
  "key35": "goTiZ6iFNPVSMi4vFdFFLZTLMp9dJLoc2dwGokKvxHj3wuyaESYritpnK3oZFAGbyrwaBfAAgnDxc45BraTpEhT",
  "key36": "648bDR3KH9HeqkGkyKZBvRDPtM4P6T8mEkan7nbTRpymNUKvSGVfs1Ue9ba4DLUw56f5ZZP3PdbayULxiG8N56Wh",
  "key37": "5vmBeM3eSFYkiLA3wxQufHcMiXYR9DQjGnoHi5NdHPvqFGtNgiDhNefcW6Y7BCTxJdjYBeSRbtUAWRVacSwZt4jU",
  "key38": "NJ44SNbZkyDTMaKbjpeCdhrc5V7XJrAP438sa3m9ZRk4ndVFqGQrwDf31dgQ9cCWAXW82Bd37ApVtNciMPHZmFM",
  "key39": "5fFRioFq1b7ecaQ4APJV7whEmPsFz7vhKTVT2WF4fAEsAMRMgVuE5JDffkSkHTQk4pQnv1HYWpRAzWLC97ZPQRmH",
  "key40": "559stUj3Yqa1x8nT9VnCf4N8NhYx2hmBCf7spESSJkHmkVtowCGntKXT9r5KVZHXfYV9BHFyFthsrLTpgh8RcJnR",
  "key41": "5RoUna9FPedrNRqsa8m3bWgFq7jtAgABRrBXsUf5EVHpeNpfKHnHpNk7Ch2xhFLDQkJFhHFvEomyZmKFxGG2ZjL2",
  "key42": "2tNpCPu1uAGtd94hX33Dp9fdfW4x6ruD2uGrCCx8RUdAa93aPQ2qmfr8Qn9jZ4BkJWLFAHanHzwQULzCsSjh9GzD"
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

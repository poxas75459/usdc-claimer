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
    "HzGNYAPm1pkMMZPVVkc8GFZ5U1mq8U9Gkuebs9JvJF1NtVvDB4xjZNRELhk2ksJehKM6QsWH8qd4Zyox1MLRTT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AptjeuwGPt3vU5UX3WB8K2Tht3CV4vUNfNqacKHHWJuRJC9neL87dhmuQq3osdEjiSLd3gxxtRVTwaoQ4Qt1GF2",
  "key1": "2tpUSkUvqrV6Mj6cnguHhbx62WWrTRAHhW93XyxneaFpGjsAzT3dMkXuS1Gz19mK2k7qvumYwxt3s8TwjVa9RJNU",
  "key2": "4APiAHPvLTPuGXtG6qtF2y98Hfqreafs3QAkBBvSWTY2giCn9CeM4e5A28sGtVGGD28XR2H3rWbZZrp4icgCxoHV",
  "key3": "5ba5FMBf1658XkMuuvir9xRZNENutikbzDpxswdN6cUDAMdn2Q1GGjBo2rbP7dNVjFm5S7LZufM3HoWWnwg8Pfmn",
  "key4": "3iWC3nXnwMdWA4uLNpJM7ADR1jthifvdCkGfuacfgAnpU7fvg3SmnUGnvTnYXrhoHCcuvz2FWVUNHVZCTqpG8GDb",
  "key5": "2YK5Um9PgnP93DTbZ6Knny2eXfHVivt7CcQozjGqFWUKcdBySMnXHVkjmAznL39jCWhri7nZxcmDweAywCs8SwcF",
  "key6": "3Wsd9YcDtqC2pizBYFmZxsFSL1nF1i4qML3rSVqGiqNYGZV2nQGAAxrJ5AdYFvY8WPT528nQT2MgDsDfGTzQgZm4",
  "key7": "5unXFWejDzfNnPnK4NospdGJ2nYB6gQZfUmHudrc3gqMT8HyfWU9gs7hCnkKEJ5BeLTxHHZER1SrDQkpybEvrQjY",
  "key8": "3r9EFUgfwXHKW1dm2gn4CVZFujgka1V9hXHVWbvsaeT432nzR8sQVke62NxjPZsE4PEnicRgQgmmnkySd2BFxJSy",
  "key9": "2Sz9qLBBht6DBjmPtEyKpkrXYf74mVjd4bmazt4Gd5pdu7kn33unWACZqw4Fe5EcfLxe3RVfrJ31n1qtn8VEB81V",
  "key10": "2AyVLJAobUhPyT1mxomxiNt6XFoSUV9mnDRt56x2PmH8w3NGJK7QuiGPuTCQ8kHsqMWkiEV18toxsxgaoJcXcbCV",
  "key11": "4eJVZHuLBphqzwyzY7umXL1NEXSHHkfwEvsxWoXZpCZdRxkYsFQPJSdcAvjCooTiXCZ61nweGtPaL2LC7wQAxyJ",
  "key12": "LWRtsfrpREQ93H5vk7KWzAuvHetddqBVbLYuHFGsXirn1fpGEv7Qd8LjAPL8Y17WDCho7nJk7MmbxWppobaHPvJ",
  "key13": "5q7Z1uJek8ACG1RAYGYju4SHoBxgrU7bxrzZA6XFqE5uejSfdWF8RZikfD93mnwragQCuVtfbz2mTkwcPDpa9GXY",
  "key14": "5qpCuiiGLYZHopZ8E2VmPVo5hNsBSwpaXkYXSMamyzvCZ6uRDREyPfK1zuJ6BRzsapnyyr8WxbxjV5EQrfYx5nqP",
  "key15": "3NumDzTuzJsEfYLNwtci9wnijca1HH1CEv3EjUh4iTcJMqeoKaTXansUhprnY6hPXCnUiLHn8kH5gXAzcSLgvYfQ",
  "key16": "2Ah3xYNBqvV7YcJZ2tbwPWR5wh7reYoUKcMaQNXNKuuAeegkZAUok6uGZB2xTBKj2d98P7KvXHtEmmtx9jL3dQYQ",
  "key17": "5aYjcDWJShyKodL9e7gc2JHue5daioFakMMJFyTmjmUoJ9WHz3FaBfpZ1UWbRTuiEZKKSkKiWGBSurg7EQqmUjGY",
  "key18": "viBjD9DjgVSg7eicQcnY6nXaF5n8HKsWJXH6ZMceeJLBDZXN343Q3NKU5RFZ3TtXyEevPADRXx14JQ2oa743xdx",
  "key19": "QJFyG5dPSH5KunyTGnQS8MY1uCxwe9HyBzphj796jQX9RHzGeXYqnfNjRpCsEdGLYdUWoxYdmSoHz9DoWRnMFbZ",
  "key20": "4v3ougRMKQacMJkMNLnCHN5f71qm9NWyuJyfZSgoAGBeeWiHK2tr7v1Qz6u4Rf56Qpoa8G89AZD5W3ZNbyLLMj2r",
  "key21": "5xXMFMST3gxa5Xy4M1m1PWvMgukNEBuMgy4Xy8MH7HiGJbmD4rwzyM9aXYzaNZUW3uN8Aqzq4bcJ4HNwiNuxjBMu",
  "key22": "52cc8BGbk87FiKhrMvVdSJZCuTgGhTUn1MqKByPDX3XnXg2rcr75nhPF5jjuCGmAMZyySKAGW6Qfqkz98usSh1HR",
  "key23": "5NgGYzKpiRjwDFkdD53y5HuzfBkittHG1VBcDHmEeP5tXtzhXP72YFkiWi9x9XfDgH7ZM1TBnGbrSnpTM15Csuzs",
  "key24": "4NdFDaTmDpTLtmr4zqmwpBVSTrwzksngB5ScKPEYujZXHYF9Y3NJMR4mRo7viDAUAZ5hp8oNyxNDzYYLt7LLrzMS",
  "key25": "5KvAkBVzbf8FmEPkXW37USpouhCA13aT2FsCJ5WH9ymHW1qictgbevgrrMq3CGUsz2J8dRFwdqHCZmAs3sYr7ZDc",
  "key26": "4CGqjgoQSRwyaKvHKZg5NutK2f3Vr8CH9zUab4TtmuVpzWKf6aVMQpsNRTMDBcUdexAougj13AKNUj6P4z61x3t7",
  "key27": "MxYLd7jQADxJhnqDYPQHbMwrG2pvLFrVSndwMVeEPYL3r8cN3sBJTWwX4rZq9DSeerTRktuAGbnBWqomM5cLANX",
  "key28": "5aGRdJuxZEmdHFZf3ByvH8Hj99j9o6i1wp1wWCR8xvrkHByYkfyJ3nn8Esch2ATFTCiL3Br6HixsCdeMnEexN41R",
  "key29": "3QPn6hD8BgmyQXUrqLCq6vDoGXJ6PuAuct3AaX8i8LdVoBWxnM4CWQ63cHgWCXQDGoaCmByM5mfrTo7L3VWss4x5"
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

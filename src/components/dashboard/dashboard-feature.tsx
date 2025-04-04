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
    "3KeFeRH8TmCVUiY29YNubASAfzV5yCdPmCGzgTjfbqNG2PGucgRJ5zsfsovjxk5pNxeDSsc7NDpXELhEnZbk258i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T6tJdcoE225JFo76Y7gQGwFMBw9mVRPLtbaNffkYNjVEEhRaazsUvjUjqrAiAC4SAEvZKVJWfYgyT8oe6obAjcq",
  "key1": "5bZQAm8HpV9tvs3FoyprTZpYPtKtKhB72BE3of799XCLwkbCGDvC43K75AdYi25mHK3cWWmgt5a4tFaqj2sZuaBk",
  "key2": "GDrNhm3crJkCYHti6PFFmBNdX6Hdg8xXvyxAxJL3Wgf2kKPG9GpSfeYMhRteXaEdZzYnPN52cVSiNioGJiqJRPe",
  "key3": "4u1Z2BzMnh1wn6kowRXDo8PrMxs12Zb1QZWNzqbpqZevYbRjAnGtkQcj8nbJo642XTPKBSguND9eyhFkDFsrPmqv",
  "key4": "44e9kvMdAJ1EBmVzB12aF8n1hjMsD1ukH6HhBGutUmXH2FrgyMD1nLNTcVjYCP9fUU2vaS4J2XKWEhVZ88bF9gDU",
  "key5": "ci5b7dSv8WvUSdwaPLcFxoseJ59gNjQQQToGAA1eUC27uE7jKzCEj3vZKAVCBTzdu1rPpBauijR8mU84xGnTekJ",
  "key6": "4JVFK91cAZA2C1Jq1zggr3CTkwoqydSSc88ih3DND1piDNs5nX6tZDPtw6FPjaG2NqQP9zHUsh6cVgS6HakUJqJN",
  "key7": "yM5YffVw7QuVdkdCBkbZmNjf6dz5tpTxzDjjUPE1buj9PzqiVrQDa2aRiKscuZjLGSn7ZGGo3HJxNsyVeCVdDxP",
  "key8": "3WEUGkcWD8KPKLogDvNX9ebTaYnPNyzuXGgQbCb26eUWs3gaCYgW5ZeLH7nBwU3XAdcGr2xC3AK1m77gpQUhtmEg",
  "key9": "3q4e5jUcFK7PPLFXBASUPJHtptKbdHqJ2NWEBZpjUKdTHFRmGNP9r6aNgqU5qjxYUCa1HLmQA5DGjjZwuBtkgXKL",
  "key10": "3uPqMApcK5nx6m6VZubRZ46FKgjUhY6qfKcYgEn5v4hZkY2PUCYSCZTDNk2zzoefdo86FgeGowH1w9frf7cYWM7h",
  "key11": "ChXgrSYsppbEH286JwQ9QfvyTDdL6wwpW3g1eziF2J6G5QeTGCZtueBneP5dqJrGnEhhBA9VjwdQHkMGGXKSGU9",
  "key12": "EAyPtAXan2kMAB8jv7sPcvZ2LzkvBi6VYRgQt9CVevQVi97bxRArEMiPCr5t9MBhceXt9RpCpZQKWitRgG8kVZp",
  "key13": "28zoW6xx6To4Kq8UD9m1nTJyk6LrsDC9JVW64wc2rSzkvYcwtoEGkuf135LbKAACZ1oNj3G6xpdBkMUhmGXMa6Ga",
  "key14": "4qnrKFVWUKbJoRhbsovmw8YzuSDhuLG4WKv5az1acjE6hrUoF24YDzNbphevkmbs6TXBK72JYjZXE5DTdUvJnQBv",
  "key15": "2toqcucfUCZmp2EAi7Q2C1g5yf2HvaY6wtNydy2tHrPu4Hqvke1PL5n95LUA66nKSQxCeLviyPygma4TjjLqanxE",
  "key16": "4GxUbjpL5PnatciLjutd2B4M64FwwJzcMPorXpvE8VfZBQFoHJiz98GhUNgKLoHJBhdSsmLr3T7DUikFrxcssZi",
  "key17": "2SGi9WVW3ndrDzpCa9sFN2ue72h6nyKgJisYURXv7wQzk8G83p4nLW8GPDDCJp1sK7TDTHCnePM39kXryyejd4me",
  "key18": "2wf4ypsU9VLYkdX7CgZVLtLYKs9MB2RiVAvHdfYPjN5iKiuCBBp5eAtmLgoseSLSBcoXnXWaTGo7iCAakTCLpgdu",
  "key19": "knVAJ6KPm7b3bFV9AgAwJd3dPnbdiurKLieQbokZgmibznH66DQmicG3YFzKNYbh9yEiJcsVBvdmQmPQV7Rfdkr",
  "key20": "5oKEtQSjrBSU1HxXE8S3giGpe85r9oLAUAdMmJrqWxXqTdKHFVwRR1cpSMMxLjC7iH8hB4U74LchjzHTRp9dGcP7",
  "key21": "LhuAaPCvCGWT2NC8saj1ES6rYfwLgX19LsnTuYo4nhTzdnDLXTRq49W5q6E23rV1CfmjsLrDLe3gdriDnmiFBUw",
  "key22": "2KXQvB8f8k9qsCRRr56K3GEieEk5KunfjdWVtVT9niuPHbHB7jGfPBLhxcqHVyHdGVm8ynfraFU9MGP7J53b3Jjw",
  "key23": "2sSxahFXNexRUVngSJY9XvNrQpZQAVaFY6FU3amXjkLRg4CaFqYfb6Hdnitxo8e31PfCZQhzpqT2D2Qp5Q6mxAPq",
  "key24": "44yKV5fh8Kjm1YRQTEBDeKcXciwnrSXBbrrodynxw2XcGCr76GLDxhbtQCer16jw7buF7zWydX4Jy5uKnyRRTJ4t",
  "key25": "2rEGs9zrwe5DUcZRsojGYMnpxT5sGrySibVZ31MVSMHiHpoAQ3J281WsuapN8jinWX7Y6ciBXF6nsJCqVvp5jtcA",
  "key26": "doxc4p6icmySUUvYc6C2B9DojiEhGkogeNTmki3pQES3wTafKzD7g4Xn1SjAp8ftwucJAyys7ihuk1RgFxnWDkj",
  "key27": "5PUif2zLSVw5Paps9ZMTWCfTBN4E2pirkSpvRmMUX1cWNghXT89PXoAXX5BjjACUD4Tm8tYp6UJqMWJNgtNRJ7TX",
  "key28": "J8U1hkHyM3196mCyxxnswjErUDiqv7bUzHmAGQpJeC9ZzEWuJUDXfWtokjMufMqPgfxjYdVoE96QS9eqQjGj6YR",
  "key29": "3VDTj27JHfowDRZkYkxH1pMdymtg1vWvaLK9TZ2PeY6F4ywWbiA9V3EGaBmT83QAqsrEtKaZLxAMJrVejGR5TeRm",
  "key30": "3nThabbHmshN5i6bPgmbro2WrFRvoGPk1ePoHjQd5PVXR7EpbcBn4GYfCC2dDmjsiKio7sDxc1tnmX17obpg6Fi"
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

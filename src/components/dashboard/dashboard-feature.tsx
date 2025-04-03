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
    "3e7wN3c6WAUBwSxfYs7bmdp8LpBtLxCwxYqNvoGjXydDgPuquAf6kaCHGYL4RANFUjhAtFWa4SLtVFntVLmBx4qH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mSsz4hpUWnAefcdMh7knGPaAZXTtdJyB2if4fCNSUkVJmgZjqSfUXYg4b2NXmTptZjzqVUSaBHdHfsqc2h18LoV",
  "key1": "54ZbKCaWHKQMQYCykEmK7wNLrJ98SVQwpmC4AezfGqp9jrZ65bphTezjQhabdcAbmmDzjxHPSdP8czzQmAVndvF1",
  "key2": "2j8h2bYjft9Z5Y2cwBtHh5iHVA3Fdf9mNNQWFnotaCk7VLtXJwKDHweckBi1QYPLU6dunEDzk3QVzTnbqVHmBsee",
  "key3": "QThD2zifWkcM7vSaFLQ6NPyu1y1PTku1hnF4C4QVCLzZUzZipDTjTA28ZiJYQgwm14PUT6SB2Xid62BuZrjyYA6",
  "key4": "HEfSLdPzGcZmADL5i7pPotwyZjJyz5nRFpBHaPPN22S5jmm1MotzTpnbqkCmybQDacoZBd6w6LkujeathZxcnJa",
  "key5": "3Kkjz89Bh5c2YWRWYwh8cQaGCELt6YthV8ZJyM6C8igYos5r3fJo8qcFgNpmQRtiftkEFzKHntd56N9RCi5vj1Mo",
  "key6": "z4dvFCwpywaC89YNNSRgWihXtb5khtPmJnfUvwm3BRj7bwbUPZRSoNswaGcK6TtUQ3g1jBgwx5NcA2EFmhACzMb",
  "key7": "5HicX642ejEyD6iwmCfiCKAXwutfVr23sasJmoYo7FGGaRJbg6qUWuPPZHypFHSKEx2Aa2zDspUjaMmFDPFSj4hz",
  "key8": "3AWUtuLr9Kha6fgRuB3z9Yz4mb2i8xzsWneN4PjvJZm2L33tNC6aNxE5oVkE29LgmmQgyosn2DZ8eMftGUiusuHk",
  "key9": "35zo27MBynvVPBup8uD9FC79uiQR9M5ePzkkBi77wP3Rbhu1UF2yrNhUAFCJJQQZF17GYHegyXbRrB2pmVgGKzi9",
  "key10": "eGXvUzRHgbTsKAJgyUR9taFmWC3VBkrpecMDKooT7FFQzTUr5NJ5mNYcmtrRFZE8vPZXCRRLeeeSJeaie553sVQ",
  "key11": "3hhSc1CWuumajd9FagPaSYVWWLLDjPKgG5HU8CYs9kXLKK7JmZZVd9GDPWpCDe3Gw32ScXVzBJYR4G3Fx3Wb5HiS",
  "key12": "2u5K7osBqoZ6HKffKYQPJiCTktLeQexFYhvi8v9QU1hJsFh15SNbX91b2DtqdLw1bZULqCq2AUkRUc3Ne9qmqfuP",
  "key13": "24odf397dNSQYz3tt5yfNXB7Uvxj3zuENp29fHQMvH7wrqDpQ8rdgHwGdeK6bs6VtXCFjDkw5M4yEMmRAzsBgdse",
  "key14": "4VBY8bp5SPuVcCg1ZYyvTWxMfjv1FjkVBRVToCSsU5pxuFyoUX7CdXy6u6ByFhJrTaupVjddyTCozoWxE8UQRJ7k",
  "key15": "4CeX2JtmGKfsoPWQA8Wtp6bD6BBr5MDSjh53XKQ298fLjmR3S5Tvq9hrGS5hFdq2RfSn3HkDQJLBwqn3AMfASFRM",
  "key16": "4q59CsXXbh56x5v1i5NsENG3LnCd2uLsf7YmUQGYr5myjAX18Q4NdyY1JutghHYGqGVedEb7ZsVCNuD7wV2cX3zA",
  "key17": "4tydU4HC8ReFy4ZhTHh9hdWg5Xx1GetN6t7s9F8L7SrnYBABGgztBsqRvb6rLPSxkg3GbnrZtRUzSrQCZ7HGo1Nz",
  "key18": "uocojjvPvjEJ1yEYfaR7vJCw4cbQcrPzp29hjBjjeFhLEEbgv4iLC5rd8qsLdBBZJH5RqSrpZuADQLyvCiWTQag",
  "key19": "5KbjYFS6HrFxBt1Phd2bg6mGGgRniqHd2HMaNhJN1pMyikRfGGcgJ7EpLZLXGkHoKMw6gefZFwAmEUHoRqspzEaa",
  "key20": "33m8xduh8kxHgEnr5omf2dqZ5r33cmQp1mcer25byLFc7btYM7spGzgR4ZaUXhZzDi5i6VV71MM2rMgtuVGadaCn",
  "key21": "3HcbG9NF6Tr6FNokyfvWtE4yUxwSWiBqa18MU5yx4wzkko8RrsXVTMucFLF4ecgPPbp6d3cuLuCoTG473rm7okBj",
  "key22": "3bfRiSmRTr58FiWSLQUGPxqt7Lds3mcfm18JRGE96xVdvF47FJnSCtpQ8djyTsfJMseXkMryg9eyKr9UoJwRhWGi",
  "key23": "5KPeBPGHYdnK9LN75kpUG231MBRA2PFGCUXS3WNdmYMPqWe9zQPiudoWaSa8Ef4UUahpkUzH9j2TG9v5voM8Byaz",
  "key24": "MDHHrFxSrvPkH4G5xU1NY4qFERQoQDo5LrqmeEVpB1H37F1N831RGU2gmEqU7JZYw5fAXAJ1iNJxwHnhqVxTeX8"
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

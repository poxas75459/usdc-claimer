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
    "2koh35NdbA7o9jbftsS95bjSuHjJigoxhrzttTuCCiKTD83gRAAtfVorX4zGBZrf7Eg7rMqnPny8tsQiVvwXJhSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9gKi8ebQ49Ezj3gDq1kHRm547H5JJkCGXp1nBE6NLQATKRPrQmoZurBznjgKy2c3iV7gxWhgzWvC7o7GX4mNsZ",
  "key1": "5ZoAXT1vxssvfwwQpeHdcatRvWhFLK1gwJNqLsa4JiPXGSkUYXGYiCLywGT2cBxvTJHSgjfvqzs3L5cLjoNUFhwi",
  "key2": "BJf8Z9wjzeHLLEoUPd5pTuUU5YxXi7PvGbrERo6e3ZUqYPi2mahDo5FqoDKQijWSbcx8zjHLY7NjDtYX9mHaFAW",
  "key3": "2WGidKuvVTgQJYDEAdrmwyHuqRLUP2KRatwXKXfMw1fJfLdDb9GaTj2uKAPWKqh9bgKYzTzogN9WTF44CPjWASHm",
  "key4": "396KCKAHuB6CKCbrDAU3yowvLNWjFMotcs4W7RYYWVLGzKV93iCiwjepxXSiUTnHHmMHe4oVY6v3WPt4X3DDhhg8",
  "key5": "tJ4kyXBuQB5cJxrU6wAUGcU8AxfugxYwaQtcBFt7q6b1ndHBuTBzyTe1KQwnHCswuFDoHk7jUBFVTEzM2ZaxpD5",
  "key6": "4N76zQmbtDnrytt2y4KXHMjfMddzRhA7UC46b9R5HnZ5AmyBLQ8PrYfuLNGnApiBdVeUe6tSsfpPd4cD7fqJFuUm",
  "key7": "3LKF2kNeKGokksejjbivMyhohcAUvyNtsKM8bopRocnLeL6CSbnf4oKQV9WujD573sgzvi7e3fQfU1SzRKin3XDT",
  "key8": "9RjWQibmBHZJB2nh49BxycmstMJD3LVBZq3chvSJArGeh85c3gojees6kFGJoBkxv4Hq7h8C21CTbdEhdwG94cX",
  "key9": "4M4cL5J95AvKKAVY6ChbKoz862VAgBbdaHxZ3VugoJ1u2fY7aRM66tcUJudu4dzPaK6DPynZy925tXvyPyDAnneK",
  "key10": "5ErwRNfTKSm4DgBjyiH8chiKJwy8JBe2sJi2S1XH7fcVxQdaiNS71Q2oVy7KwnTuoMUWG9uKKPvdjV66UPNk2d4f",
  "key11": "2ieEQyLdH7cdXPb7zNT5vYiraf8kZn5sADFXKosEAnZsN1nWDAmo4pTJ9pP6gGbRW33Dr64bmjkpsmpvPCY1Ey63",
  "key12": "4a7zsmGttp6T8oV6ToHn3BfBEAm1wwyJJLEkjjTVoS5wgRwL669VmdhrGCJu94e7zEMcgpknaAJytW1ASdeWnZ4r",
  "key13": "zjM7nG2Rkr3rrLrqwtjvg7uenrVTcsRkHHG6tpB4YE2EK5vn1DEhKVyxgNmCYkJxX74mk2YuYzqU58JFj1joB1f",
  "key14": "5aLoKU6ZGUFnMZCJcePyxobbRBqV7aSmVELLYyjLHtcMAyXutweoBJ3JmN49mH4gcSjnqzrKNMY1NubKHCwFP3ez",
  "key15": "2N4YuQAoGWoKD8tyGnvjXsVV1b9DRqKqrdDpBavNCyffnuEiXVQSNzFsZhjByBd8vZ6F9KBW3tCe5QMgQ3uyuN1r",
  "key16": "4dGLxyFMMvregZsqMvpcvMAVsqMpfBxVGqS677WAQ3M3ex9ECyVonE6cUmyVsXLNnV2ApKEWV9WqKnFAEpkcThBq",
  "key17": "41nja8ssX116kM9DvGqFReSGYH1x6jTw9evpE1mcrpaVpyWJX1t6WTwJ11TYB1tggbX41Tz1jMQ2oW6tuFv2ppxv",
  "key18": "4qvkCRwydasP9Vi8jv2SqMrVuHCeaVZ7NcYdK7c6ZfZmwj85wicHAUy1qAYDeW18HmdifcPou2it2AaL2kt3y2D5",
  "key19": "5PDJAhCKNJrt6AjN61hr6ocsqcz94JEMNAUXSX7WvNuetRneAiQGpMPKjtYTTa3pTKJAtPzbqjk7xQkpKRSZ4voW",
  "key20": "4PL8xrWZwTZaXXH2x4eKBqknUZxxTgBsHEs2fiL5UidpTizum2PrPArXezqYgTiRYaWxmQRY1XH6ray3sNYWouzP",
  "key21": "42F73cPPUHt4qecjiXP3L9TitfSAVz38htt2rmwkeoZFChKrjZqdcKPH7gHN2izaVfewCgFw6fXPtWqtrLY8BBMD",
  "key22": "2aN9Eamr2PPNs1Jk1cTVdAVhnQtn8ygreKc4qWKFLLrPDEiKqucwotgeKJKYQL361YfawEd3Z5ADxBQTgn1gx6X",
  "key23": "3gT1L6LHczdMpUdNHLsgLFS3wHbzV56qHwJpgXhVcLUSkoUpxvzPVMYaGpSPPmPxU3oHWbArpzA5R7eHoqhA8GXe",
  "key24": "3ACHBFFEueHNUgD7r82z6e7ZX4X4SYSxkU2sBYpbkNbL4pCYLrdgEfNz8GcF7msaT52qB4o3AisC9FR4XYwjMr5t",
  "key25": "5ehGny9kJMYMANQTC4LfZXnMzj2jzi79GZK3XUhr3f7XRRtbgJGR3pMnaZPrzUmRm9jabLgXZz9BGmeg74c7LJCa",
  "key26": "3tggHcqwyARk1EC2giwu5qmVf3UWo4YfE92kYCbdqGU9p7DkzyybND5iZ6xxkD4kTUQRCHKCh7PXyjhPVaa5bUaq",
  "key27": "5aDnCudQWMP2Lfe6sejr29EC9JnLX5n73CxK81R2tz13WvsNgiZGgdcmjmrQKRw8ruq8zr4NMUawtDqkU47Z1fh1",
  "key28": "LgWHJsT6zD6GHzcmgHF5SuuPJmNdb7s4CBHh98En7dSnbtYFxQxYGfknTq2w8288KvA9vuNSccuva7qqJrNyZBr",
  "key29": "icmYG6U4cw9qScSxxYeyBiSEKx6JvP3UPHZSatrjU6kQPEWiCDdYMTry6CrF7eP2Mr9f18Kg9p97QSohaQutZab",
  "key30": "22mKJnZSoCrQfSBfjkhP7MkP1QEj9viyvyf8jyVb7Nh8T8X5zeyEJrTokzH1A4tM52URPRfgt5CRD8y7ZEMWvLdq",
  "key31": "4h6cHrRCQ9YcqG8KLBtrcaW3YDigSADNdNK7Qym4VWVqHS71NDv1Cx4SYWKULE8yfyERBebLSYuQf9d2rgMuHcLw",
  "key32": "4DHgH3dhTjVHaurnjF9qGRtVXrGKkCEm3EoYNqtmR2SkMgME7eWcmCBzhgnoiL3qgHEfEoJNWmmdy8bF1K1sFbDU",
  "key33": "566ufhW58ktUAatjSyRkfY3UVKKBwU4cp37hmq5UmTyuuytKSsNCNMPg1ZKMU8wNYH5LoNpdVRqXnStgZvXqcYHY"
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

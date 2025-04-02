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
    "4apSZTXPBFCXJa2iZnVMzTM4izpCsnMgvq9NZh2onjsuWj2Cp2kDuWJbhxYyauuuCPxSNWTx9HE7iKFYXVUUsPRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GB6yyajpcdGn1qbCyA18krez4t2ZNfNu7Sau437UynFAjRRNyQ866cnkLoB4WjJuoVydjubXJCg64WysN2fhX7",
  "key1": "V6LvnzwhzGSjbv7H6gMUFGbon5bjRBXonYRdiW4j8cqVZkiVkieWzGPfhaVriZNgAQGorGD5HBkayCCMgLzPmWX",
  "key2": "5jo5eQ9YFC1UdppEaTvJdnt1hi4nVrvoS3BvCLngBrvq4oD8rfTJN3adtpe4qrkwLAQ4DqWPVfJ6YGKjcR8ibxS2",
  "key3": "4z8nwWeSYTWAKgPucEoATaXvdcLguiqPZW5iszD7NhGH16rcp7yhd9XEiyMYsTwkah4CkY3xUxYtDJrtR3PVjT3y",
  "key4": "3FaFB2my99E5XP1jXFbK94JVYWtSqatpaXZCDCo6PCDg4wVM2DJgtDZHYWAD6TTeN3cnJEsa316xy6AX5hBbrEZP",
  "key5": "4xkQ6Xhm4JKfPy65vuUXRpXeAq86BXTsTSVBjxaH7Qhoyi9K2of69bgNCUuZGjQC1f598L3FkJ8HHeJ3fXTofW1W",
  "key6": "57UwEHx8fJijSxWq7HzKbS8Zq3pc8dJu2LGMUCeXz17y1TW3Y5xBxJQGUsnspwKGc2omTeHTiJZpsQr4rnDLj17e",
  "key7": "3UV6eeppuKcvdHPEx2tyDFJmFXT6Yf8M5bidWEAVCW18HDsgTZDwzsk21G49nbzyAL822gj2duYsCCArX4XXVAMQ",
  "key8": "T51PXywzCXnNojUopspvJyyV3jWbaemtErvNzaspvhDzXM9sdQ3YYfdHputwxqLoe6MRccK9Qv3r8sdzdn2QaW1",
  "key9": "25M1Dv89YXgiUMNnMmyZqqgqd2j8Ks9XJaUdxkuMbmPeJtRBtD6ZozfrxASRJp1URo3FHNxXs7JA3T5ou7nP5TZN",
  "key10": "2z7FvemsXmJU7ftSzRBFntVz1HVjERDAwmj7po8jZ3cJpMAFAxPqSEg9EwP3ubSH35LZdsYr6aNwJsnXgkmcUoG4",
  "key11": "5U2p5Mtpz2V9deoxWvUZ84azNrYVtpcv4Hx3qdHKbUxZjbLTngYU9eBMbZarVpGnnkBpAENnsyNrDPwzqSw2N6hn",
  "key12": "5vRXsjUJ5o3DakviRJksoHjhn298CHRvTJu65wjqGnBejp3EpPv8bmRjW2s75zp2nDrKHMi6BKwHbtG8E44jE8rc",
  "key13": "5jraHkfmK3kxT9qB8DayQC8fKqMNKu9BpnsxwJZp2oMqzfWtH2shwFv9DnyzdNeLXMDLhUKEaV272zZ4ruiAvQdJ",
  "key14": "2fRY9pWcaMJz9CVXeHuGtAYpLRCfS1nDMfij1XShKaNEYGRZhNr8yTfuShANu3LPvGi8FfNpnX4D6iDwUkF8qRTK",
  "key15": "5dUJhUtmKFJrwQzpicfPbUp7jZbNPzJ4YoMcm3mh7rRVsfJf9hxFx7uzvgFrRQhGqFJpa1bRyUnzFetm5v1UJ58x",
  "key16": "3d3EeVBL4Ktre9qi5AKvqdv4SPc7ZFfUxYLBhTSVbR6HPENhyNy7BgumzYUs9XyH42tkWF494LTaur6ECEeSjPSB",
  "key17": "vcu7oQgX4yTjZUXU3XGaT1imLUqqzegFwgdL7sAZLr1jSUXp9qr6MBAXaWFVr7VKWoL9cXyQVjuJEHzAjcE6AVB",
  "key18": "5C6mXmuxRztBhmqCHAgCu8STAAt6AGxv6g74buSew5fRrCpqKAEQ7Lw3kQePpywUj2pJdRdXgnmrw36vjjQ4V2Xq",
  "key19": "4DfoDGFEFpjGx5jPb8KKpQGcsSnQgHVzpWuPqMa6wC8pG3AigoZfcPnESMk8Ri76DzJ9QXBpJQHU9L249pe3vgR9",
  "key20": "3VBmJ2iT5JL8gmhXZvwib7TQVCUNTrEsNjhBwgZrx1N3jRxmybEjNnd8Np9NYwz1aRsu5ziS6MgoEv1iuMR65oLZ",
  "key21": "54LhAEzV3XtmyAFXRjhbUpDiNozQxko3huai5gHPGJmSJYe6XwAcjvrqhLpQV3jcse4cM5q3a7DyR1eeLtx5eKsn",
  "key22": "kBgyKfZ29VQEZ3P9Sk29wGCC46LAAcKaTo48XmVF3wVE7bLskiWQJTg4GhivBR2VKswYGMMroyupfrCbZinxQVM",
  "key23": "4pAc4pGcSg5gUgX2TSbC3W7UEi2PWyXWsV7PxDKPw2LEbLoPNcXqew7FxJdVUtpgPfPmHfZsjQ31qNy7WoiSmq9R",
  "key24": "KiWMj9pnXfN3G7XqtZJ7hbZjYy6ysvCevzAbP5FYgbnitVpQBZurfkkbHYwRRtKUdVfFMEymzfkg8kZSvKB4Vgx"
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

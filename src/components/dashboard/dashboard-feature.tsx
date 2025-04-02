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
    "22eWwivAyJmy1bYGkmaUtGsDATp3k9sDZMfZmegWeGWQKty482vKFEGRhY8giFyW9pL1gPT4N8CgVMBtaWcMhV75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yzxrDtyt9h1wX2YbFNyX5gKuQ9GxfYMVsCUjD7oH6yyG699k2oN4QJ8F9dMyW2zrPkQvbiTw4T7Hvq4DZqrpSHU",
  "key1": "45WpzXUZqXBpCdFAjPKqLNrxNDe2hH8FW16g9dNhHvLKe5YkLrc3ufTLsgXHkTEqzZjx9svm1RJGsTx8AUzm2wBm",
  "key2": "oSbaGMWzqJCsvydkc5vYYCnuZ9wLLGSMBA7oCbDjfkQtD2C8sFW7mB7fxN7AJ3WspQdSFCPaznhLUPsrZvbSWNp",
  "key3": "5B4fSMgKEyzFB2iqNMvWLs9bJLHyvajZaUrK3zsJRSd4TwCV6LsqXXscmiktqbEGL5b9VcgyPFXuCVtNKGtkxLJp",
  "key4": "63WGSC319xUqWrct6BtmDaRunCVU3AH7QDuR3BqfBtAJAM8fCHhjj3mMmLNmxi5J9TstkQejSXp18XaXrg8b2AbR",
  "key5": "51MZ8M39vkFZw7riRz3tUo5JbPWbwqEM3KEjHYUFLKHPB4dCQ1gPCCbAPq3xXQFYrfiCtauuThH9KygNNzm42kEy",
  "key6": "5Bg5BW93wgbPNKUqc3eMgsEJbH4tuH3ubwhTygw5cKQqsDQFAmXJbVx2SYJquT36F6Bj3x4whgwdJYWStowtQcs2",
  "key7": "4puB9WMWTaCBY64c97Y6kTp3rTZ7FziWozPjpM8xxEdcbGVzJjd3Tkm5SrGyct5ZTfjurMcnGq75yiKj5JrZcXt3",
  "key8": "nsDSpthcBhcwTVJFhLr5BCxeJW3igjFvs28Bq8pAmXg4hCToWnsRGRCDSdYBtm5vUj4hAgBHMVF7J7meHYPwPEi",
  "key9": "4XaX4NF2AguKXX5AkTbJBDz16fArzbvLZTfWc9ag1S519AEu53qJHmLbGoqggFHBxaoYEErJhYwi53eawvq9XRPr",
  "key10": "2nY7gbnQadtQEPYoGBAHsPnDr1guCYNtpLV7pkoFvQ8kQPs5YUEEbuE72Ejf9vPWng97AkVi7Vg9Xytvw6wR2VW9",
  "key11": "R9rZXiwzTUagbfxyKANYNYDsRcdrxjkS9RUsTFBj6nFykwAwc3R21HnJqSCqRRiaaoSnXbuHgvScWaty4vWcRkE",
  "key12": "5DHcyoSr924NY19Rh3YSMuf7GWejegEB7nx5ewobAEBmybfY6PbcdRqh8TA6FxiWQ2QJRvvAYXd7KmTxADioSFkU",
  "key13": "3qAvUbbQj5qZyM63F7ocisnC3Yp3if5zkjtTjLc9G5giRfbUQGStCGeXf87QgKwPko2DK2L9Az6dWo2SZL5JZL3D",
  "key14": "3cBfiQpmWvQs1jwNgJbrqwXWuR4RryKZM6bz6Ew1MLA77BhyiNci9Mn93SM9SRw52LZ9ADLCn6hyDn9zf3CcRrbD",
  "key15": "2SSF8tQR5tanjUY1N4yz71nL77MxResb3f69hJvruFGzVTaH6D49Yr37unMUFWb3VWKKz2PdSpDXqHYGmLMrHf6j",
  "key16": "3jcvEyGAZmYSpdfsqXnZ15kGe8jSVAfVhjhETbRXPY8eHFcsDrePepiLEDDcMyMTRycyBh7YaJsEb4ChS6xrLsZd",
  "key17": "3DYtpyNM5jPYpNRsseFxYQcDBms2xzGx3jqrQUEBDTZXqbLCUj9p6MUrNYm6pQvwM17hQX6zrjVvK9MyUknwouqf",
  "key18": "rvepm7HiCmY8pCYwCDgXvzSWmpkid1HUHLNhXqWqFMVenRnhfifqYVncua3z6EKevfyRQJ3XK6ACStiFPSLEcBc",
  "key19": "45Q5i6kZnnJ9EX42YN7hHZX25feYs9C7LKKVtu8iHLNK2HnKV2hPGT4jeRe79Eeg3AZo9vzoTbBMLn56Emg5tHoh",
  "key20": "42At6NgCyFjFjSqXdKYdLswY5g651kvzFTMz4SamiDkRwA8psEkegcgN87K5hQhjWDnQZ2d348bzngikAy8653xc",
  "key21": "2KxFM6T2De12bzSo1ThZ2iRe1ohQMzKEEJRNyyjdKJmgs9NshgwYPvj362W9obLdRQRAFpD7z31yucYrqvH1xbV2",
  "key22": "5b6C9f1ycNURzFWmkK81LCqroQLG1UQxWZaH31Jq7PUjEive6HtUppxDfL9sK6CvBh9srhbjVAGDcN477tUCzoLF",
  "key23": "2sthmUF8Jcfke8ZgqVekwfkjdQTs326NmYM9wJpYcAv2jq2uDxUuW1G3oJsTpnkrocmGgoqDq7rwUyhM1jst7w6H",
  "key24": "56SBwUKYQqjjHZYoNivqj1hkiKt2LtqzsgXumdUvTNVAcZ6DAMfd5bJfAJM3sKzxyfEYc3AyVbd6ZUPbhunR9hKj"
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

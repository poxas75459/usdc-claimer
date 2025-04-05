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
    "5XFKDa8LJW5HNgxqotiWspw4pc4VsJjHKZEG9whjsVDfka67wkXfadfxunu3RkXKHv4UD8YPyTWePEhhY1mtKiMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aJmYZqNjKQx7cG76eYA9wsMF87t1xTLZe1Z3ugL7Fu337PJqvV3zUDtUjS2BCjT7Cx2hkdHuwHMPyVgHb9FKJzq",
  "key1": "3djUTzjtLojMHbjHMQwPkCoMLWxLDZuuM714YGEF33puYP6JPhspK1jEGAdKui9Mr4KzxGVhRgsiEkgCzRJvUC8b",
  "key2": "4X41yAM3ubZRgyFYds5bnJUnqLGkaHmwmwWjwGK596J9ZtYizCd8dPXyUA4JSupP7xA2CCLX4mHDReGuveFNdLcA",
  "key3": "26tb9bmwVDGQWa87T8DnQs53QWR4YGB3dQnrdwBYcd2zur8avtR2KUD7MwQiXMioZqjU23H3HdWQRL4aAG4vSDQF",
  "key4": "5uKgbg1VhwpyomnSCjp8HS8KD1Pyc9WQf8cHHZRr9ZtbtqsZqcEPiR7kh8tQF5jCv8ShyX6gq5hdx36PzPtgLWFe",
  "key5": "3dTUo2SHt95kKMeZhtjiVJFiC4GhJ7nX8u1MFcfuq8hw6BCg5Se2tZc95ZhtqAUeDD8wvr7kdys1NGUdGCKtWAgh",
  "key6": "3yBsYY2GobriaMASBG1WUU8xQE1ZQXyTU5GN2iPBiNrXw8tshHUmJRBD4QWMRtQ1Zae4YAHpXS6qByjG4VnPq7Ta",
  "key7": "8Ss19qAYq5aSqN8RF5C4P4HBfV7sPqMkhoNdgh7d6A2UFCzyRkjfP7MtQqVaqgDLcbdyHKgZi53kuB26PbwSgRz",
  "key8": "nY3vZm2o3YZCEobr1RH8KNbtEqQ4f4LmoahuF2Kg9a4PmxuG6n5AdWz2MmAiBGHutDLH5cBaUw5GTC8aFZYRJfV",
  "key9": "4gKz99AySsFidqqeGxZAMuvs9Ga7tuX4jsjz9AxNmwtmWkNfh9CDT6nPMwBTwXKHb26PNUmdAGfJnMmgzvbZ4dPZ",
  "key10": "3pEJacgsUxEmHnkrwTzjQ7KYn5mSsf24ibJPrQGjLcGhy5aeWgwW5JXkFAk1DpNojJkV9HYViW7rYNFkg2eDTDVZ",
  "key11": "65Kxf5S2ae1qqJHsELoiV9eUSbjP7MUTbNBXvWi9XbMLHfWDVbxJW3eC8RvCTxAu2skiCJCim8MZbU1fTz3GiYd6",
  "key12": "2GS4vdKcVZH47qhs8ZTrCXdWYUH7jvJ6ktRs7pcpkeTsty3qQ5YZyPYCrdaU4jCBN21GXqwZvw4iNyWi8vF8UC5J",
  "key13": "4GoVxWN5d4rreDLa8GmRaLa4duV24oLMd2HijbopDMsG7X9xojxiJMtKg5voJxcnhXJeH7dP3XhVM5x2npBfSJU8",
  "key14": "j24vo9Y8HgNm3MrW9WFuP1NTWSx8VnZeKo4fJmrhQ5pRzJrjPfTpMV5MwnxAq58mFv8UgZTarMBindQ5UHsXaws",
  "key15": "4t9dktyvYV5YTHfJZcHEn8H9fzSJJMGqypfErwVcuztGg1fPiAaQ4H2V7Qe8MQxRsKSWm3SWTZbDFvMf9PWYEqa1",
  "key16": "3FVmPqSrbKmC7crVWNMqm8CfzpUcVhUb2tS27p6L8UtVRyozm2U5yNoktDHQdX4AYGPxGKyaZqoXcEP1QnHkqR4w",
  "key17": "fEbVdg36PDZrBkKN74UQifavrhwgEwMVjxpZZGDWw3D1ezH3dsWL5W7bn8QTrQR7C47UmHPjxwT5kXhhWQCh5fQ",
  "key18": "51gz79g8Knh79j2U9EK2qfk3Kz9h9i2fi58x8W8aMyaY1GwXWt2DUbmMJx5JfV4mZjCdURN9YKGs9mp9AkSK7h9b",
  "key19": "YrAaJJDzbaXdTBZW8bg378Nbdc6JeY97GxvQRv8ksB7UXMtXjiLMpsfzV9ATNt3Ug8ZiaHqLKA1JQbAM6D5KYrA",
  "key20": "3ogDAiN3w9Qr95QS2RF35oFWa3wiPwN379KidCWZs9kzCFrtx51rvdJjHJWNm3r34zWdsL6JvanGNgQY1TV4vU2k",
  "key21": "5ca8YzLyKEH5SkCrU8Pp8rHwpTb1JCAGDJWKPVMNagwcsjjne5E7FAxf7fXrLGPtbwk5puieKCCm7N4PE4KyLdhL",
  "key22": "61BAtHEQczY2gNDAJ2xDMMrWSVUeEuyFZT51JXeQbCNUumZQ24MYyhSr4sj3PTYhydDHT5qUNcoDVchZreepveSA",
  "key23": "3VvXRtSrNojKEh2xWT5J54dvvnmYhoKmLkBPen8Phrz5mCFP43Ny6iPZNwkr8HAm7z6oQF9HFhBHgpJbGo5Qt42B",
  "key24": "3yTREQQqfEXFvAuVd4kSkUYMNYrjuGhDZaFbx88KCwsb9DxiCH9npVQnXqXVQ9T73csog3qdEg2vJcHei8TUQwGG",
  "key25": "2LQjjqrSuyssjmiGEgkLiuQ6hP5PzHEdBYMATGmhaKiR14cGF3ZggW2pnYNWXvjqsaMXm6WvVREkyAP2XUPXq7Ws",
  "key26": "Hac3LcrcZ6aSMWvwozWZq15Yht69eUcAogJu3WuxuWWNVSpYPnaT1jKm1QjALY9CnkWDLrdY4u2pqs8YoLpn6BE",
  "key27": "4pggRbauEQsngGExrLNmS8A1sUUfvUsUV9tcEwXDCCQZbmZY59DjQkyUAoCB8j8xogYpTk5frHHponHpCXpvAUXA",
  "key28": "3uEb2eLfVKNWTFJsv1rHJqKxTyoX6LggZcbNjvF85BfA44L3uPGgZSDVciEF3MnDvCymnMZFZr2vfiHqgrWwrzVg",
  "key29": "41Rq7EHZnbdF4WMy2r8bfEHpW5UQgbkh1zqrQ6TyUAc3AZwuFwxKDneGe9yUVdob7Ws8XRCh8wqvNexdzdRs8Q1P",
  "key30": "4L9H64rnUvuh3s4uERzvjgxpwcUwSfswAJCEiF5CMR4csa3gd1kJSYWr5gkzovSskqkozLPhisJM25XJ7AYyEFCZ",
  "key31": "q2fQRpMctQ92VQVwuUdRYZNCdkZjHnVQQzmtkyMVVzxcR9ztWxmRXhhBzm9hhmxETf2dGYBt3MW71KEfL9e3Afs",
  "key32": "CfSaBaP6cKxe4yagmDSBPhpVHv1yPQJPgpbRDQ5ovi6mPFMxRv3wkBmmsyZChbTshmw54XdnivtjKe8KZkF5j71",
  "key33": "2VXsUPwxwNzpiztD8WGWSNJbmUwtTEcFhcCiZbJGDG3KBQzpfoFmTfGE3xKgBh9LwA7k3cZpzd5deiEiXPHqrzfz",
  "key34": "3AyCXDRxP2bZpbhEErhStmPkFVWDdx2EE2Z1DbcjH4cUUMF3uYGZ7zuSy6CgyW49d5fTkbb2XRkyABL6FtfnY6GA",
  "key35": "3vWvDcwBqfrqiGqie1BhyMH5X3fF27y9xiV2RrJsST3JNGLzNadkJ4ugfc5VLcPMYNuph3H55jL93sNL4fZ9XxbV",
  "key36": "5s2ED7GXJzTNdT8iZjaw4iwgfS1RgPi75wPConoqGaDwFee5UcvchQBSdbhLoMPPjUK5J37F1rTMzmSHqtUH77VP"
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

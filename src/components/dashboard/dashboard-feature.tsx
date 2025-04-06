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
    "k3HR3kS3L4G9uoumD7ZnDojrkuPfJmtURhGb2K9DqHgPDB9s9A6nuQAo5NSZ4KE1QSRkeheBhtHfGBRGR1zsWhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yTRJsmLBA2SREuNzgPNswdQsPujuiKFzMRQxqXwn9fBVN9HeKHyoyvxGHki4NS1XHwNi7tcPkrAjy53gvxjGPhR",
  "key1": "6BRCxFsa9c7LD1guqM6AUt4FhTUv2WkT3RY3aWg8ygLaGSxSkLuQKe98ez6MSvErzvtwHHrPRLx1s7hBAVMMujN",
  "key2": "5VGv2pdfPpcXBnoUWUj8rAsysFgaChAWHcpyzQ2nALj3Ek7B3gFJnUkPgAnWMe7fM2eeT4dkj8rbE7jdjGvHCzr",
  "key3": "41oFq1cVDPWJmiJjBCNfcmJaCZpjZLomnVUnx9ADURZrfBym5H9gM3RauYrCJsjkLnh2hmxajSyTVyU7wjJZeVPz",
  "key4": "3d7n9w7MmpqzbTBMU7d9J2b5pvFtzKNojQBkw2WTL772vjPXsE2MWtvYhLrW3jhgVU9QJfKzjFEiZH4jmBbGCHtP",
  "key5": "3pHKpSu2uiUY1B4YPLB6AFJbaTkyUJcDNYGEqQ2PwB4WSnfWufGbtLYyPxFpR7ooAR4KayzEGHFwMqYASWzNuU5z",
  "key6": "vFGmK5QAxhNnLZ4v3dUJ3Qwe11NB1G3AhHDaBdwDGhxtjziTHL5u88sSa1y77E9yQTt1cEr74D6bRSRn72DEopy",
  "key7": "D3hBdEuGEo7FfYvUAccxWoNGyCKQPYjQMGSrZ8c5HT7hckWHrGYSrsJhcdpHhKi7cLSF4QAX8jU2gko7jzh8VSX",
  "key8": "3wrDHVeP6DfkVYXSRUyntGymucB3eRXiKpFy6RevFXPakGbkTcteS437QjGiQaGjHnwN1CGZB3LkrVF4nedFPRVM",
  "key9": "C619A49L32QyZEgrbRgauAaV1e8ZJtMS6PGnUaf2Cn7jGWnHzKgJRqFcSY1tA5pSbuk1MAnmnpyD9HWtgvjwsPF",
  "key10": "567GMP4gqDD455m6Q1iYDd5bp37Km3AVGecSrZsHUJE8chYjmuyXwYeeQGd8hVzqCnQzVXz5TmgyiKuh89N8JNNb",
  "key11": "4nt8rFDRrjrwAMwDs5p5ULK414b9fqhxZBFGEHaf2dnCrNBQVWNC3mQb37eM6HsKLjZtJzmpwgwLinDei8ZBBEaw",
  "key12": "4xJgF42h3DFGEsct8aFryWxPwWArxRTGcvDkiWWt86dLM87YT7bLNtwpd9y6dhHRfJwMvzhtXK1RfLxt6TTFnzM6",
  "key13": "27Gea31q4zD6uzZFPQuSfhMpujG1WuCpJSXaSBJtKWEUrbkzHLnVWL6igTNT2L8YUVrVyJor62bJUd8QbRMpMawb",
  "key14": "5QHx8g5a1diwWEV8VPfMP6guTZKi9SbW43TgTEVES7So5sn7xPYUf6vabU2YVvuNDTN65d7NJqKN4a6KEbbzDHHA",
  "key15": "5Ke7Vnt8xCMXAJeyQNyHXRquMLvDS2ZCyNiLtUv1kCXHFC5mSzzLJ6VViYA2427iLYkDRLPew9Gt8o7PfptU9FZf",
  "key16": "5FGyoi52YP3vs4voV6hULinmCL9xQxYeTJdvppNMYoc6GuZPQzrfXuo4vFyuvsbf2RVEp74M2ZP7PcNKTWUb6nmr",
  "key17": "4sk65K7tAKEvr5uqD1HEXzDXFUy3V8bF8Yz5uyXPwMRkaPMhB4n5ZhEhB2jte2KuYY9TQNyB5iaSoq746kG8ZEZB",
  "key18": "3MCSb5dM9gV7ivSV1G66uTkXXeSP1bAuHRomJD4f8Dv6zHS5paRXCoy2GvWY1AFoYgta8sEbNKAJQ6TERZmd1FqT",
  "key19": "2zxaotPXQ4ymKu9uAHXw4neBdemZ45Jfgvxefy5ZPBSgTYYpZxLfQKe52tTPJAsSB5oAv64LnuSR1x57HBM5v4nc",
  "key20": "w1ponmd7NfXMJmtAj4CJuW7cPCSHnSihfkf6Bk47xGXanZiowkW3CxgMrMXZFmCt5RJGPP6gCYJReJ8RuWY2kkV",
  "key21": "4AkGqpmDPhtL3gnJqVk8Jdnvvo6hxdcTmPN9qNdsn3tVe1xWD8Xb2kLwsvwgVKL1H4AqW1w6bQDKwF9pARrq3uh8",
  "key22": "544vFC8km4VQnqSfyQBhsL7KaWeQ9jzhE1hwcvQUV7B7e4T1HfdWxdQZDGrjPY3XgDtqFhXytgLggMUVN9HMdeVM",
  "key23": "2f2iHZ5jFr7cWfZy4fdA27FGzwxHU9g6dCVuowryAbLyu6MZgmb26sGF8k92ZM3mDig5n6KE7PyXw5AMYwRKC7PR",
  "key24": "5jZWD6skNFNzE74aZvwK6H7N9LrjvUQKdExBqvo5Raw5i5y8CCnHsxQHYhxn6fH58MttUpBsxypjYKPUaS1ZUwYp",
  "key25": "34UoTARgCvUy5AA7J3eeEm8hwHqZvb1m6xHojCytvzKLnnZWbfjQgEbMPkTZUofzZEVXyFUtbRpyXFXtcuHsPZAP"
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

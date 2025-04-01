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
    "3vkZ1Xt1H54SW2Hy5EUYzc3qYYLF3Yd78b4f4252XVwAjeG38Bxs4tzZq5HzS5wPtwX68iCEuQTAKUD4RNcxFiLS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f7rayv48ob7mq8zMMeiASRXWvh9XaJjRdXzbs7Jesf34hPwFvhcMGnbVYxmi2h4FBk3SunsvntjW2hf54dNBgfd",
  "key1": "3JMk9783DxY412pjeSFBbe8AGe4b2u6LjEJgKw5dThgNGfa6ZiC5vuM77mJhJwnkJnNjgdvJXunJs6fjKVyRpEx",
  "key2": "4ed8XpNxXTwcvyhhWMDojhFvVgEv1gz6ejWVhoVhuspNpUoSQA5FCjCy3UvFqRHDZoGKFF6PDmoQFYBkYQMRf3v4",
  "key3": "3by3Kc2f73jb3imJgcAULB1hPFkmzqU5DSbj7n54L4YPYEJvyUbeB4ob65bJChvnoML65GKKzXKJBriuybga2wst",
  "key4": "4pGyWm9xp4KE7oo6FS3WPZFKx8txJqBuhUE6QnQ8CrDj85eZQ75byCXUqqD1Xu5oTEc8mbEJPYT4wQDBHM9XYGPZ",
  "key5": "5BbcTaYmXFMqWXTSKNBGGst2hdfVLvoGVesNs6tMA9mgfDSNMdrEstRCbU1KndzooPArbd52bZoJH7ZNptvnx1X7",
  "key6": "5R1zNk3roCy555fRKfYmfHXu5E45HKvT4GDPn89NCFx9ZekoA5dMdMmXCVGen1eXz5v6X8LQp33Xgh5Hyt7A1x8L",
  "key7": "4rMvahjcYAcaqkVUEMAo27zU781u6NX3udQGp8PoPVHzYADJEF7TZgvW3LDeHhwHCR1Q5AddAQSv6vus1RWQ8gd3",
  "key8": "4nfuiB8LUzZP9WLAXZdpXqgNEt1PH4ZpUpbDs3GihZenX4D21LDTnzyTsn2UisRAndinspLJH9ySStd8B75gwqYa",
  "key9": "53N5ZALdE85MDApG3RwUn34EbCEpBQVasBx54em3WXJM4gmpSkth8vdVSKStCKZykUYQQAnKn7YxVtZ8AVaGnF1o",
  "key10": "23VHfqe1NHD16RLiW25iwjxHQ5zUD9kmm3AoCiyeeMozXKZjcGkQkkM3jYKTPAahjR2kbBz57JVBGf3TJooLqBQd",
  "key11": "2vT7PfJZL1StHhQ68oCmWr5w797ZgrcYLCfkR8jHXQfLQm5A7Jk5cHqtDsw4q4XTuGcs8CrGM7EWvkfXymaAEaVB",
  "key12": "2wWh9bmeEfKc6yozzj7z3QzV8vMCVdDMuUVS4QqKLqXgF6WUaQGL8NjYGgFpCTCSEYgXV1LAv8LNUkCevrXPBhyv",
  "key13": "5rFniMpHDvrYrLwKRswxPHAAgB8uewC3YuD6bwW8x4d4PuR2BW6iDEK2uWYDK2hZFezEunv8sc8TF4BTdtnDuuVP",
  "key14": "4SW8nLdcuB1UZc5jcoY6fxPcyXDfSJVrht8iew4nKiRkSxgeoFEd1zJYCbKdG26FnKEPRwqpX8rcCosxjoeidmkm",
  "key15": "dLugBhrrKBDkhXiVuXp95TeU25m75J3vg8vF6RsHsHQihZjgBMJW7E3XBjArWkDvHjAaB6VoQzs6ZDUXbzVhpzm",
  "key16": "2hu8MmptZ91yjB8gNBzeqgJ12kNhKitJEgpA6t3KMHT6ixDmaGhfzEn8EbCPmopahRXWvRBcUXgXoKk3HuX6dUb4",
  "key17": "2tP84YgYmx1vyDEB8LgZUUheNe8jfPqUyjjAQys3V9DUcNqCD8Zuy9qeuCPxosUujvEwaw9TkYdfUYYxCCytwD8g",
  "key18": "5SmRczcvh4cpRZVghmMoVHKGGqTML7WoZesaHJR6w2YpYFm4sZoYLsJwsfsuNUW53Pc1ZpakiKU7UVcHWzxhv4bA",
  "key19": "3dmLvEwEG8puByb8TPycVx3owNW3JE35R71vyj6L7AdWkj8cisPUxNWXebSyRP348GLks5EtHapz738HeccBJjaZ",
  "key20": "5VVAnPZ3RPmK8mHv9d4mNWyykwLZk9wLkG3GTE9kyn1SLpG51rNYzSSbH1sEw7g56ZDHKYwzxK1jLDBBLGjTR449",
  "key21": "3jvsC2apCp2JRoyrfk8KefWdHQ3bkwMqVUa3TuiaWinBHrfL4rVHQznZ1uuigu7z3sJRgdtZetEojCCx1ngH6Z9i",
  "key22": "26BbnBQ17vMsajfbYvGvQmXmr4oKYzntHnqmUpNBor83jMFwWVy4BJXVLA5WAQNooRtfuhxANyERLpXQdCdZtU8U",
  "key23": "5AinRmihRkWb7i8E2Lk3SbEWxY2ktPM7YJHdoPzC1rpKHN6i8AWZQJm19yP6PE6oanwMmnwtbwnYZo8TBtwKDhiN",
  "key24": "5bKrUWDizjtpw4cgrX7RmXUZoAVSGaMSb4Z1ni9b1wnZZLuiLdCEWBVSgw3wQVoB6D4tDYdgm2QU2ER2m26fKsdW",
  "key25": "2td5qVTxiLkMbbz7V9kukhkxXp17PAxpeACbq9MLa3wNMXNFFapqpa9XnXZK3YGtTVdSoVfbZhNPaBsVBY6omire",
  "key26": "5TyNdKogywFUDMz7fz3EpGgSzvKhigcYf8ByaVyY2Mdtmf7AbRfp9vtJitjNcmKtxRCSqjvseZY3dVG1xPqxJzbv",
  "key27": "3foyTZ3koaXp9so14d4w1XZiTqUEZPB4WQeTo5v4VqMQdg2ppqtZkDfQtupz8vtyDVFHFGDF9mndfgAax4pW1V7q",
  "key28": "5Mv2jcNuJZCwwTAYfDysDBkQYUqCCgYS2TT7MPGwNmHSSZWePfEWXrpu8pN6yLnJ9TScwbDoaMGVpcp62c4FYooi",
  "key29": "5JgmUJY1UEFHWjpTkNhJhLMwSJ1hJQ2NPuWVnYtki4KRDb5JX1F1n86Hr5rV5Rt8Z42yVneYmhoUxKEgjYUKZ9xP",
  "key30": "49sZLFRohQiaLu8WwAiXW41T7B1F9WMzyfmHo5DLJorQz27CewEDjfdAf2LtkRf9pvZdHzDa51BiDAj4r5MVYqTs",
  "key31": "4gT2xDnyrCUb9tQFjyyB3MMC8uQaBfWMqVL42MtnjgUhezsLGbwQLaLFb44sGGTLuKgB98pFVAwK9Q1jLysdwpfP",
  "key32": "5gRSVQC1yZMarppeUBaqzHPhHxTyBpDFPrDP3Wem1ddDK1Nemt9XgCQKepY5Toiw66fakEqxmUZcr2f718Wumgdw",
  "key33": "3qDoABZid2noaMspoSoCd9xwC3SADNDuPqUbGxtxGt4Xut3CeDocFwELw6FKW1uiE2Ah2coRPcy2MgesXQz116aU",
  "key34": "5WUkrXrrPspSiLonrCSXL93REb5AnNi2wQvzNVaJ9YuWfDZcmE6hiSVWCuc3aYVMFK56bdffEfjpxZn47WjMD32K",
  "key35": "4EkhzXoFXWPEtkUdxo5btdetdYHAx6vwifvpkQ1WoybonYmww6nwNkXzZbtTwd6oRW6YxitELirqLXQFq4DjLXrP",
  "key36": "3Eh7D6CTs57NpJ63RzmTTqajfQuT5P6CEvFUEQnUSm7mKjmLy66VLX1nGEWWWmGJT7K4kio8qggJagz5vMKkb34n",
  "key37": "5Ym7PEzTCPhwHuoFAAdpiWfxonEMd5a2X6CxLW61FobBaJ4h4pY7fBDqSYhwii4m2giCWu9Zy8d9oJNLjJg5XBRM",
  "key38": "84tXsYcZS9Qzsfc1x7dLFQEDKpJqSiUWhRVSVGxohZG4wnrneoj1R23rzfpbVJv75HM3wvjaNX4pGfGKY2sfGNr",
  "key39": "2zQmekDN2ue2KDczT2zYm6v6Yu9ECWGKJKUjkE8Ds3XqKCYXMx2Xw971EVkUoesLG2SS6ovMqY7ma7su742KU8mW",
  "key40": "31QHeNxAiGLZ5jf527pymYW7vdJFJ8pUzVLzefP7AYxNTn4pxpDKAbB6wFHY4Z4rsnFzAHW1yn9zhfCwTF6XaFgE",
  "key41": "4HEFaeDcvVcMywtZRdTaQAXvxbpohYrLzsLLFJci4vi2ozabifkN4qycaKLcH4DzMRKHaAFJe5zRZCqrgeDqQtWA",
  "key42": "5qvZgkTNkyYg5GLJ1mU42qDLyGASygxqHyVenENJYGBbnkNht9iGyYHJv4EaQJj6CCYeVUiLNPR5UMy7T5uvr33U",
  "key43": "3Nubro1Tasz4mw92i4gdMN4mTt1aHuH5ccMJ2PQ4GQXKsgdGy6DgpcKTCqcNzH4NgYCVjDEPH4bKBK2q5yxYtRG2",
  "key44": "34nNtTEbyEavApg97n4b8xSyYi1eryPZjTUM4ZPsf8DwFMRyuDsAvszVJSMBttTqdPXZVH1y5zEkALwbfbegJb6y",
  "key45": "3WCszArwyhcZkXyG422nZ23ei1h9dAd2BSJ1W46Fz6pKzTxTrF5GA6t576BefogfNc6DQtxFdeHyPmBnAEtJjpgV",
  "key46": "24rnFfXwAMij3L3GGiKe63JW1iJ2NiEwsrqHXesycaYU9PrbEJ8EKXwAwNciJZP5it6dRH7E6zGjG3stNk86hrYB",
  "key47": "vrcyfS51jffnAqwc5JUiGMCGEE2cfdsWSEQq8nBPb6Cf8gx3448an9ozz5XRod3PtksgURas8dkQqGM6ArKbzhf"
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

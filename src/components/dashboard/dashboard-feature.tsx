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
    "559KUKsVREdC8ztzXizuQq9z534j3nq2ZkmqmBfyKzW2eiLdsYqAPpJJC69tnZuK1piwS3DaxmCWGqyw2Dw41exR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hLwxCWCnZySFVHUB997T8x8ZSKWjEt5tFLCq51KKxNQfKF6XVCimeeCucXp12kSBJZsa6fvsHgLggHQXmgFUEVS",
  "key1": "4cUr65fBaiQRtBrqSXxZz8kAWMi9TGvYnkyBRWg69vtuJZM32gZ6j9iUY5QTk9jQBXu3TNJ8ubREdYk99sqMyizt",
  "key2": "DbZzMXKZN1fRYswS3K8puFaWvxJcNDRRYnNEu28V9TeToPReiXmxjJZYaj9VqdZKBe1K8TPKmsrxZeMaHq9Kmex",
  "key3": "2gcp3PrJ4LALEhdMGg8uvRhxgPEjHp8x1CzbuxDeHAv8MabjbjaN6w3CYBgoXZnyeqvCUv5KorgEn3Uc8KxfA6HY",
  "key4": "44DpnBxhUPKhsJQj5S6k67U25nLoGe4g3QFaFJpoFqLuZKgUzP2y7XEveaVMaHbbCwGsUiyw7P1PWybpsJ4Xubmq",
  "key5": "ckz3Xqp7UendLMcdYFHc29cVykTxxRLM5opCCcEruGekVxQg8ds14FejvcHnpPtGKNC8gwucsQx3cv6EPet3nB1",
  "key6": "5idYKmrPquCGPDhGzWYvJbd9ezYbj6H8jLZwpKRNseGar8HDgjCp6LzQnCPbsVRwCF1MfdHPSvN5DojHHrQSwT9p",
  "key7": "51to1WvjUmyqiGpxkqCXowETX3wSArMxgdFG2XxRuvA4RTMpPQcCfrhNtT4QnPy6i1ApLZMYEhuqfGXUDTPpHMRd",
  "key8": "57tmhK9XTMHQnHFJY7Z45gTs8Pk7SGJkehUuMRzxEFPpWT1nkiJw4evtzDn1ypkUzxs95H1nwNvEnaB9SFdv2dWV",
  "key9": "Sd83E4rHEEwFVAewGmq9RZ1qi9bbMBn6oAPXgkxPv3XkFDcRTHr78F94UnSpR4eXJLvyzLNPn4Rf4Bzga7udCjc",
  "key10": "3aGTzLhxdMja3GZ8GvanX37f5EZrQZiXKq9Z4vm7pyvCMGZKuxmBEpnBijNzaVMDEPTSjCnAGkiXs33KurVBgd3c",
  "key11": "FydjUHgYJHYs78So9frj4PM5qQ5KRm7zxr9sbk7CiCr7pfvaL2JuQJeAkZhkHK87FvFrEcsM1Mc4MJ3c21GcrbQ",
  "key12": "4UKecDJsu7vgS5bEFz8Ce5odwfDAba5spGjVf9Sg6MH97HRb7Z3RhBAcaogTjCGDix9Ak7V2wSGdVR1v7L5USB8N",
  "key13": "ZjZEgEK9odSrECqHUr4BXNqC3qJjtXBiYTeqRpwHmpfQSgWFRsHmSNU7hC7nxHjRQ4X26UUs6EPQ89Qbq4RqtEH",
  "key14": "FwCxaHu1nQ3ADbXANgAsaDbLFRse38RyN6EDJJULr4H2UA1mqUrym26ddPPpvjCRam9xbbVs4dj41Ty2ucG2v4X",
  "key15": "3KX2TM2cPpNHus7Rf5EjY1ZYKgCHFTHeP1BM2QQd5sVJyzTdettCoPUiCghL9aUo4e4eMZkmu6q4KxDuMaeryUM9",
  "key16": "2mpq8Dj2s6nXTK3CGmHTeYipb9PLBZuqCu4QGxrNufuXg9kmAzJfHEmgtbmvYTcdiWLYZQCXmfR9BPJCAAUT3eya",
  "key17": "2BbzbHkt4d28LyGDP1yQPhnnwinyeDXyXjdbBJVwvRPAcqKVoXac1n3mkJUxpSE8cYcsGmTzLEhshFD399rkdkUm",
  "key18": "5pbybpHSGVZ75SqC2GQ46EDE2P6Kpc8HzEYJTTZhH6jrtKqUPPLJy5fDhNYcMQhEA4AevitMocuF6FTUUUpGi3bj",
  "key19": "3dSxPNCPDHBSSoDjceufQgAJ7GTeETozi3L14zi3TntDPHSS2kBHV8qcnbTaf28jpRJZg3Fjrc9dbNRpcJxnqwb4",
  "key20": "2vnWvcjbWgBeg3xEmEBmjptkEWHEYHVSHqxnJumqqu6RzXMfDMVEu6KtS1L7j3fuk5SrYWnQM5B1E25DPqEunufu",
  "key21": "4LYQ4aGDiiLybUAtP9FtB4zVwa117nSDQSYSTZzPzAg3uL7o1NvbnywSJcGMvPscFm7LHSLwKKuJX2qKC3Sk9361",
  "key22": "5xB4HYHWGBCNGnDEWb4pnhMWCudZeqiZk7dSFaLXTazeY6x2hGJXs35kMDUfPQHrsYWSkjPTqktNVqWqinZb5rTj",
  "key23": "kn2DD1jsgA7Z8b5iQ3j26TVMyuMbbfWoUHhxPD453rzeMAwtEnct5mERmo9bbEEg3K2UXgu93A8knXQqx1SjxiB",
  "key24": "3X8buyXD9zQksaeNnMkbgFqo6ZQEA6XF1RVCJAPgBZg4Ryn3Bb38wtUfEGdwtTunsm3Dk3iWwecEQ4rM6pGAKP8s",
  "key25": "Cjr3SpJZBa41qsxcFadfqFdxdtQ1TNTwUUtW7ahdf1XPZMtQiin7fX42RAA7rpLYTRiiEi3E7v8WZktNSLfyu65",
  "key26": "4Hn7whYZHcofqtYyHUd28MUaa1Ywq6na8tGvQ6wTzQFmgemjnNFrsqmvUguUryR7Zv3GFBFPbWJ66mfXJUWDAU3y",
  "key27": "5jaGsFtS8anRsaTCLKYCCmKzypDcjZRanEjSjYcUkPeWTgB4bdaoxKMYTMKRWMkxxSRnAsqwAR4Hw5MbP8x79ui4",
  "key28": "58Ev3w67WhyaHChCkJ6Vvg6guU3qDCneB4BkmwWMNmmnKUQA6wyD9FD6GCLMYjZ9jGvca2tHn7c7dFduT23Weyof",
  "key29": "EtzEhnxettwN7rdsGHPUHPgdPwEDH62QfnKzgG9DVvwwx9YyyvQAG8FXQm3NWG2gHEbMgCagC7zhC7nXN5nMCaN",
  "key30": "5cbNoNtyNMAk54QPCpeTJhjDkw2X9nnEqo7w6hddfD48ALDtZtj4yRXrFW5Gj4fFQ13eGJi5tWTgitXWfHx2VzXC",
  "key31": "2jw9LAHgcYLX63Fqcuog9jEk9JQQq6MxbZKKhHyEc23Pz3UizhssuR8gwCukSaA2tEP2DgBbEumYgAg4dq15KGjb",
  "key32": "2DA5HoJzdzbbGNEWn57xxGmMrZpLA9FGoCiPY3sYWp7prFNStgGUTAp3KE2i9986P54EntY3UHtUZudKQqZfwJVL",
  "key33": "3EMriP4yfUVNdvAudX71Fkdb7YSbHgvT5B5AdqaWmirD8GztE4sxCK66wWdYrqT4qrn6FjnrouHj4XL9e2rcN531",
  "key34": "36b2VecsxeQRfAkQxMhqEdjHCpS2rExcQyNxULLCisopDDxhsJR6A5aNRKdnAu5UXnRToWP6WpHgyMjYKWv3tGwR",
  "key35": "6bvsD2Gz7msz6WYfLopiV5rnxfc6txEmgosRiotrG8Sjnq2NCtmqsbxhCPuR4UreAGMAFwfdieQKHszXNfnfS7w",
  "key36": "5WefxqV2dmHBmEEpmbweaYGjkiZMpKVP57o7SqTqCbJNQcp2p11zzYn5WDFPbn3QMeCiN5UGQcu9eaPwNZo1bCaD",
  "key37": "K65PPFWztr8BQdKjqgk5XYrdr6VwEPHNLjXoEYMGDf15JPeyonouwMyEMgRZwEzSWANLmHaTrJiXcBBc3viLFwi",
  "key38": "4SjQD8pWX8CzQou9P3ZDZN23kcGbWdJ9492t7VuE2n3wQXhUQGnbhPCiMgPmc9YMUbRRbWr71czQyNJdwchtzvQo",
  "key39": "4PHYJMsSf46j17wUrHVZHEJYSKu158PB3AxohjWbhmcmLiFigSRYRMXtbigor7MWv57A1h317hvU1agiwXfbPr5a",
  "key40": "5JzrLDvuaJZYoJmLBgGzreNiaKA6xDVgBFTSANXjx3Eg8pLTiSELqPEHUqUEZgWPm9gPvAcb1tRLBrwb3vrtqmNC",
  "key41": "3gSnu3sJHfDgpVV1Unj3eYwc6mBDsQiycQ3YpH7nvc7isrqfBrAmoXDrKKTwLeyD3pHwUWv8bGQFFNXVmmKW2ZGP",
  "key42": "3dTXSKBXJ5dai1NJ4TdXkjwnVNnKyPbSBSQPnULhcCL7dekd3jTUJF8fPVAwQAyvBzxinA4KFjpK3284CUQULWN6",
  "key43": "2ytf96v7UMA6ryLcr4gHjKpPkiGAcmbjKD4Z6VQtuoDJFEoEJDS3dC3xGKw4ypB9p8ssya7bnCk1HVe8mPjbYSKX",
  "key44": "3NYuQ8pLECqCzBMt8m7vq55GxmRP8rKUShdaZCYCzxMQ7PemEJ9oX5kTkN11PNetgobFxikmM7qYQb3nzziWeG6s",
  "key45": "4h5u8WbCUxoq1Y4ubfCQDbFbwT8btUrnhxygcccvyctcM333vgTtRnNVYcr3k3gx3ww66Bjtp9QAnTr5x2bmTPYi"
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

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
    "aKPWBJeWLK1DtvKjpPE7ur6hYSuTBTXUAoU2cPEoPa6grNfXKqdnizhVBMiceyde34kTBVwYKYaY45n5fiKhRja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vE7LuVPo3rFDcLDB5MBHsECvncdgMVkkcpGVZS7aa9SQQCQmMy2Lzytz2EB48o45ZvVUUEAaiNvMk5MnXsgo5uf",
  "key1": "E6PiG6oTfgqvFWVpwiCghrnyQTzYfqmfDVZF3PyhQvf7iXA1b3PmejBiPKxVHyjGZPPYPbobfUptpzqW2GNCHFB",
  "key2": "KT5BoKr21bQS1D4YAAHo2yJpH6Q3nDBNzi7uzL9oHuJZ2cR9rxTXMtZtXMiCYrYzG1JZXwu4opjBZEBsfXL3k7S",
  "key3": "5b51KNvcZV1K2VRxHQRbXeU8Q7fSmstMFVULANW3oRz9ABdc26oXnaa9khLJDe5bj3bePyqBft1xe7c1PzGPkk5W",
  "key4": "5DvFHAHgqT4MwpEdx3uk7Fg5GTLEgUhxt8fJCG8pCG9NYwDNf6YfrgB22jEA6jxzuoW9J4b4iAmqyspXad6K84Rp",
  "key5": "3UNHecEcHFzuhPAxLjSzx4esCS1ygYG8ASSR1AJmDekDK9RxPWBARP5xRBQNRqcwVmQLi1ZybULtuzbbTnCojDxv",
  "key6": "2B8AhwLYGk735CUAwRXxmMJpsqPCQGK5bk8QWui6VtPfCSkP3bTpqgk2jFBentCRWBKV7gcCyfBmTejWgba1QvjX",
  "key7": "i72fUCrN7J8u77GmLRAg3Y6VZuuevoRMk1B4snjfNpCCZzv581qYCctbtED98dHXHZBeJKf5KRuee6qXyoZUWMz",
  "key8": "62pMnj98MPr4tbbeomfzK26FkzYgC5HEQBdGSE3DoD5Cir3kJGaoqgRDCFxfWoVRvNVgrNPbmqboKe8CW1VdpfRL",
  "key9": "3S7wbLFUKk2CSAnpwfAtQnRi3PhUiEXWPCmjvnkgPxfy2eMTcVdYPbGR6zokMUthpXgPGEZifAThoLHX22TJkN9F",
  "key10": "3foSr9GCFxHQ5YXtXSPBQqBz1dmiG9YEZvnHBBvxB9fBdqxonaAZ5GNgZpPmwAxK5NiepSLXRW92isNkvvzhqNh7",
  "key11": "2cKbb5Fqyn7iYhNGNv8prP8dejYMWnovYpjwYGtfbHPcLtDr9EoQJPxHdiJ91MXUnqy38SRkaNzgv29bbogL5ioV",
  "key12": "3eF5BVCUDt6uaUWp4MXJUBS1Kahn6ewua3EsoUrGHNzpP7zUKu2EqWJ1Ry24tieYa5PZoi7zPGQu4XCa9sqYi2dA",
  "key13": "3QDk4UiFay33DLBN42XuCYawpmo7qQ1YKZ888uCKQAoUFtuuKq5U5E8kwSKaCaYpJKNc1TM2P7pg6pXanwM5rLHS",
  "key14": "5zsz2qWEHGiRP2dSSqXM2zpJcsLmDmsRGyQ9khEeFNS1ieD5scSARRSeWQzga88Q5gYY6Myt8C2y1PvD2c5nhkGW",
  "key15": "4XbqCGBv3cceUE844CDrnoRFQXiUkmoFcoNQ2MrcqyeS7Qr1onsqVjFtJDYtuRs3axSNHRaqh9qvGg37uXHHdhns",
  "key16": "7hXRysP4MvYimgu4VVsNmfvXSkvqFxVEFRsdPNfykQ6sa7pDtPC7mQfk1mFXaQYpB5HHKnumBzqFqoCix9KCJid",
  "key17": "21jg8BVE3ZogNmNU16vEQh31ckqHNsDA9sf9M8pr6uXmVuFXi6gAC4vj8YQGzo1buymEb67ML4n1d4eURQ86e4fr",
  "key18": "3Zx2mmdAyyjJgiFHsxSHxDFP1WXkuZoTeM2iVAWZPM4XbNwHoygNRAg4tvswDsBidgJbWUTZudEhbXjS5qBFLzCp",
  "key19": "23jtHT6CSxwuKjWhZaYSxAicoaHSQvfUws4eQsdxNZEGwBEK2Jw1imCcwcSxLniALZJ43fYUU8vNJr6hzZ7dm2Wr",
  "key20": "5zrevV9NhBSa7JNadgYPetF5crb2zJS4GssX76M2RUPKzRoQmew25TmFwebUygoBXat57oiM6DGZknHwPnKv3pnx",
  "key21": "24QaSTdXbtYcFXzCFEE8PGpRmpFVUVauEkLT5Hk5MXoBqVX3wQBqYAGoc2xYTsYWno6GFG5zqcAf5K5x8HeHM8RN",
  "key22": "1eqGbM6DjggTu3iWAKK15WCEue2aGkxMiMRtXZR6pHuQE5ENGwPdR9XsLTy4b6ontvWXpgzuWbXR68NSzFG1bTD",
  "key23": "5tb3n9TGTmEzHUrW2eivDbxW1S6eFRQSpSYbhtGQPCDRvtfzQWSJthgsHzm6wWw7GXpaMd84T3aYHGbM6Br7RfWf",
  "key24": "5mMW1SeYtYAHD8QsNm1herEhngSdwFyUJLo8Q6RESscUVQVe12ibQG2BYyL3WziVAuJ4zNYARfww7ZXjsntq55gU",
  "key25": "4t1VwsZaPZjzgb4fttzJTDCdFA9UtEG1dho8EyNiv9BZQxj1Uj2apbGvbrZhfvEV5a62AzZh3F4qMosZnL3ky91m",
  "key26": "Xni2263LuLXiUJhfRCXUxJSnUrCR7NaFcoJYJv7AhJQDJPk9R1T9GjW3G8PfwtMXta41AvpaqrR1xvoQUnyav9b",
  "key27": "3WSFQbSrAiRvdspgB4mMrmnDPuvQbMqNZxUcBN2Z1hYKmMG9DFhgwVm5upiJmtNknFd3ZeCob3f38qXinpWwL4Ze",
  "key28": "3Qriomi7gbPkFzL9gu3HDPQyyRywK3tGEUphKKUqztDtrzu8gSQRvUcf5PKs9TToy2DP5yi4ePNDPNKDHZyXRExL",
  "key29": "47asyPuVkn1BoqAzmR3X8cnzb14yCteXr4XPjdkzqqk1JMnKvbLZU6DP9P6H3KpbcHsQZybnJ1DcHs4rskkYWahC",
  "key30": "5eqremWgeaV7Qos97TWNQ6ArG8gQQjhkUaE12RaXKERTvBVWSLPsYBy6MxhSRuS8gGcpmVeSMZzhEdZk8Ttj8Hfc",
  "key31": "5ksxjqi1C5QPEa8NRwuPAwkmqmd7p4Db1dbVw1rNS7PwT32MuKwCHbmZEqTs44YJZ63ZosuFaAm1DC7vneK5A4Lc",
  "key32": "5qP3srRQ1NKHjq3x79rEChMohWB6TAbit1xmE6bLWyWNZxr9AajTMHyDSrtsFZuNz4udztmaLQbfyKFQajfHRrqg",
  "key33": "1yRMbud4Kmu4RtthhVkBf2n3gY8SXEL718vgqymqnnmxGh3Z234R3rjGgXJ7bVZWw7bQwbe1exAE8SQr53T3B3y",
  "key34": "2fzuntK7c7Bhq3bSD5jnBBjgNpd2yGWFmri2maGQwBS2tcjwmmD9XEQVJfPt2qszhSkauBkNVwCUXiqfsDkK1ywc",
  "key35": "4KVxtaduZ2PkCmwtu9Jsw3vbfqDxZH9StkAWXUE76bFptTwHtA9bwbSwbXPaQHiZkaVirS6uKWMGjrX5KyjPEh3Z",
  "key36": "kujAoXTjxK3N8Z7pW1vLFhMpuV7JfsBHpm8mNsKqc2NBk9UvKQaCuDG6xEYPEQtUeHFEEpFZyiqZ8BgBsUWbftA",
  "key37": "4ZYMXb2R8dYcducaTqPUSzLkCDm7ABq5iU4SAMjmzU7sbgoRkCsdBEWZkzF9L1odRUneM9YZ4yZpkWHkHdaah7P5",
  "key38": "u6Vfd4eVUx9FSm4UEFDH8P5W1AfCfFmGgpRgrjwT8vyJaJkN7izGjj5CsPWSa1WYpU5orUgHZGDvCwRnc3Xv1Lr",
  "key39": "krqCKHQ5LRLi1CcEiMKGHXNfSJiy3FNLgcATuj7GBz5MF16TFYrzLWTiap2sWxeXkvuUTfUh9qM992WYBqE3pbe",
  "key40": "51ZN2rH1uaLRWvmQvZsxC2rVQZTLPXLAsRAvx8XH21AHMjTPAQ8z5zuKcJ2vixt1zK3EJRGnTraKYJVviVasThH1",
  "key41": "33gPt1LqsUimgDNR4GttnKv6wdsquu3ZMRSzLYmdYJ2NBhvA8n4nBzfnKaApRt5JWWXmTYuKpRBq2GtnSydsTa1a",
  "key42": "22gXvaGrtr6hmbzD9u4HBwze3F2sto5Eaq2q97DfxHnK7nT3nPQ8jQVDb1n7b4UqJeq4qoK32eiMA54iJjTrWtjV",
  "key43": "iTLymZ3YvQkg8RaoeM34g2ZruHT2Gt5BUQUE3nchfpeTpNjhdTMu8DNgh3FetzWJGfNLKG6KvYrnS8RAG1CH36G",
  "key44": "2WG3WMJsPEXQJhPTBquXqQERVmD9NeGrPqiQgtfMxbyvZoJ73DfWQvoMxvppBmFeKhbR5yMBbmhwf2WvyXnxBfik",
  "key45": "cT3UQfd32xe2QdLG8NZasepw9XW7cMcU9Jv2NyjEoTJ8ty4Wh812AUkNJyvmQKqGiChS6UHXhgJ9uRCEmrsDwo7",
  "key46": "2JETGAZyhQjhVXcvnLANTz9owXaQL6F3BfN27pwgi9VsbZjLaup3kexnu8ikfHHzfZum3i4c7TUiRGo3QnigJiLs"
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

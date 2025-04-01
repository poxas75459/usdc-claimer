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
    "4Qy1NUaGqv42mA4yHiN8yaPRJWojMmWY4whEzUR4gX5xxsuWofgL5u5sYUGcJMcR6V9EJUsFncgJhJsq7sgQCV6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dpA4gsF6jsGhbtnj9BSS3jxpqsRJrVD3asESyf7VGH4UGTT7dMszkXQfesoGNRb7d6wxWtjZxKpatfDfZzFe2ws",
  "key1": "4KjKV2cxFu8gUB8CzvwKwhPJexfrEYrvyJY9ia8hhTJXnEGZYhHFBPktjU23ZnDt7L5T5SkQ5UkS5QSMqEcyn7gV",
  "key2": "4exuBvkCSbeXq8tPzczHrxftv8iMpDWNR36bSDqCme4UvfFtv16UYAgSkGrcohNBPu45WfVagVzhiZzAHtDafiz1",
  "key3": "2KuSo8PHb8k6atvSzYoogVXdK5uBmvEvndNDXudDZq3MCkWwTk6a3CZfu1XuKujLaM59omPH597DMsneEJ9Dm3MV",
  "key4": "47US4tBgefcZ3RT5kyhwb1V2WpKFzsbWrRCj6aW6jJgQNvb31YVYZpuRjfdoA9piaaTB2sZu4kmVUN9Ni6rkekMs",
  "key5": "28xemYnWwVhEZbUwEG5NQC43qgF8D4mwDc6Tn7j16GYuesR5AikSxTPdPQ4yjLRCiinPXFCNaurGLg8WwdmEFTFR",
  "key6": "4187GYaTLfBeBVRbB7UrxUiV1PGLym5ZA3i2DYK1nmfNw9gzGM8wNqdwVXsUA8QE2aqhTFnN4ScdypWcABD1M2bN",
  "key7": "4aY5axbDjf2BjAieKbJxL5tZv1zGYoQfrUG7q3JYgZuAzypn8LYnkgPc4MXbAKPT7NimNUjmabJHfuCosgh4q999",
  "key8": "5GuFe4io8jw4z4V7dcSCJAzSahmNJtfpR95BwGFPz37FbNiLqKLkUUzdLG1bUD3KiNpYMJZj6Tiw4gj2vubVf8tY",
  "key9": "21ABZ2e77rm5RdoMFgVmAd6huX1Zokjnv4iaXL6Z3Fj9EhDKRwFYZaa7M3P25NF3Hu96TvMCmpXL6prmaKh9RAWk",
  "key10": "QuRdezXWPi6a1jrTsJoaBde3BzVMo2YpZb3SYAo4EHSn9U8m7AfQEFXDRFQ4VTJF77gojpSEkLHRmMkRG6LfbwT",
  "key11": "sWFNZwMYxt585DsgWLt8Ng7141g1gxTjv8sF1HUrz2Nfp8RixFdkq8tBfKgsAkurRGCorcAknvTQswNaeey1LVg",
  "key12": "3UZkF2xhdQvaR7gx29Lo9oBdLy4dHGcMrBnvD46vrVi9tpKYzvAy9j44jY742qYtwjV4UzFTg1KA35QHM2MHzgRn",
  "key13": "4ebB1Mrt3dmZodfUhUWGBAZ6JJeiv7DjN9YvwBkqCNCFzj3ahp8AzuLksPtuPEKRBZjXobTfN2fwa5189X6nya7t",
  "key14": "G8nJLqhfjVgWPLbTw6SxFvDRBXjU2pcBdeZaxW3fRBXaNiTp7WgPSdgrFJKZkm4iYpUdpcheHAN9vu2VdAz9epM",
  "key15": "4ae7GP6qHAXv4zPQTMaaXSUy2h317tkYWu9K4TL4qEr5jMUeR4Y22Je8Ed7YSHpFwkkTHZ37W2VZzuEnzXgouaPF",
  "key16": "4NwPs8vqe4H9suP86fE8RV2sgYPS6aeEX1cLkcF8Y3PbSCw8KhFKQqj6qinPXHPcSjMqQbjJdNp3XtwVEGdzTCAj",
  "key17": "3kZvr8H299SPp3cgTRruedbryVFKJgrt5ZQyxWcCNkeREvBvq23H5q5Cb3wQu86uADb91TqpriLcix6dYrmBDbCZ",
  "key18": "5KtpN4ajJutGi8xQVv8sUafgPsvhHseJ2V59mFH9F9WirCE7MoGN4Ru9mKjN9ytKGJRapVF4CMM9pFFA5EE6RfBq",
  "key19": "4jyBVRV1HPg7PYDgp5qHDtzk8gX27XjUfH7Qf8rgx74CAqtDqXsvCojyR22nLoCtRY6CwDSBDvDa8MVYfqwYHVWf",
  "key20": "3t8mpVY6GYa1fTzzF8gAVXFxG5YAaywWgQYeHJoP3LTxMG2Vkn2iWFvq3JK2TTcGpFrup7qZWpD52SHRnARzky3k",
  "key21": "3Li9JHsPHtM21xRZP53ZkJDJeD95qGqEaHopDKBnBDg6UG12wqiDjmVgpVZpiaZE5kXV3wXzbTFEmGH8dofssTSw",
  "key22": "2SnK3vvG8aRzYv2jX8CBkpBaYCHgHpHxbzoDbbnyHjnFL1mcFz7sw2hevoFPS1L1b2o9h9jxECGd9DBy6TYGno2p",
  "key23": "4ciL4ZDWESiCbuQqXu5Wn2d2vNxQ1hFej9GT3iWgm9q3SJNCputYvd7bjzFP9SmhHgR4UdCkP1RTugJKTN1DNYrG",
  "key24": "a63PMGkCD5tBtp79KJ5cvuyiKJ7MEJJHJRgDWmfm6MduVNevvoNGnQCfEK4agR3G1Z7tLwC9TfcnsH6pBZJk83q",
  "key25": "iZBy5DcAa9FRNmg3ph2e5aB3d2ieMH4EqWdRCXEnMuZvc5oL9Wg4qLZGQuHUMivrGTeuovPRzXNoiuuVEnQiAnr",
  "key26": "2jKZK7tjcxrukH2bxZye83AzKzDuRt1569wM7Dn9drHavR4uifP7aanYnUgRx4ZU5CavSYAdiqHS5on1SxGXyyTN",
  "key27": "1htr9oEqPP96AerJBaTNVYD88WVFtv4ApJbCWpHbuhgNoQ1i2e9kzn2FcJJ5RTwWyAGiJ61xBdD2VxwxFG64aze",
  "key28": "5HDgyqEhTY7pUXyu8kwYyy4bVihijFadB8Mznpy474Ldj3szjEKbZGrc5Scu84sKcTCPs8ggf5qS4oi8fxmzBXYa",
  "key29": "JJdEcJBya5pBXvpkTj8gYbCtfKPcwvTTbVmnuekC7sZwP1m362v1yyTrsxjQRJWgjykRdrurnVtgdQMKpGbvPoy",
  "key30": "4NgJvfi66mNMdZqvcW7CPpFs7F8G2MtaMG34VwsUozCQ1Lg2eEKNbx9wx4815cMy7rvC4VG5wvuTwgrN9eyK5upD",
  "key31": "3kQ6hCCZMTK21uJFyXnvQTppNcBGkg48dXvcTxNsmDi6Agz8WFzy9oRCZUs7KDSb1MPXqbnz7MJrhHhniALMtfTj",
  "key32": "D2QmrbuEu5bzNeC6dysAwX2kD94nLRFzsdkE4BA7msXJh2Xc3FejycQV1FMd7mmgmmPADaxkJM7ZtYYdYhrVfaW",
  "key33": "28YcZCCrAiK5Yg3cRTaTbZ8TaD1t8aqWcH9iuBU9r5q5YZGRYEUjA58byuBCJa498VynzDDkuWwZP1zCNd31Mj5A",
  "key34": "217ECxZzBq5b4ZduMVZmo4HZ682WtEkp2EU3zh3qenTreom4u764x9cu3Vfyas226mzTBpvHUWSrRMN45wpp1xbt",
  "key35": "PPx28fjuGfW5YkZ8AmMaFKx91YCLpoo7AbV8yJybrxrpzKf9a6VsYLrAPkNDgTrRKy8NdgiuyzPd6SCj2pHaJ5x",
  "key36": "2VtcMXqkg7vYNyhqxyLvSXnHvMKkQbcAzng2qMEtL9yqKahda8BCdukro8hvzvhhzRe6WpZDtQTgELwSooJCFWQS",
  "key37": "2FnFd38yZZFD8uaoEszCRNwfLEFajcpP6VaQXg4pweiC8Wspz4T21aEJpdj8gu6cSkck35LN2hG7ypmjaQWPDGTG",
  "key38": "3yY8QkeeMjYVkN5oGk7n2AUNWBwWUWrsNmBVMGUjAfQGVmfaoYdaoNoTw3qZzEcg9sC8RUugVPATHNgzfgYKA7bN",
  "key39": "mMtUwXAumadHjTjpeNtziX3rCydRaHRukDurmKYjktv9v5swv8YseG13sTXkVbxbPaTh9iA6uwCHv6ztV7T4ENG",
  "key40": "2ccg7S1gAngCkyyvpFw8eL4w2UAZp4wTYyj8kAmyYiwCCnzQEQUk4NyUzaty3mhLxDMiYyJc2c2D5qprpEbzC9rF",
  "key41": "5uaxbyWgZSkBbhjyDnJa12duzwqkatvgZmS4KcBaWDbLFiP18oq4XGDqxyNtvudXyYMG4MzxfeumuE5JPNw9PW4F"
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

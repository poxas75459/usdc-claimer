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
    "3iaG6j7z3DrSKGCgeGheUGHDxL9QetFxhtjmU5qLHLkGMUJBfWguShLBNSfTKhHBogcNU3VXQoEyerbKBWVNYDvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pkshXypiFNBgSL5qABf6qknocSk7VHWq1jD3jPRtRXX9eu6jk95QjkgUnByxNXdwZ1K3mt4mnmr9VA2DWGJfzuy",
  "key1": "5uY53DtF3ybQJMpHpzn3jEgAPdMpPqTG7rcBYBEnm1vbWqkRctHEepWALNNcbMFqemWrTakiNPog1poMPCuabFMw",
  "key2": "4bfJv1QJwzyXjbmzxLSqxYXvnsJ5mDw5q8aiMG73wvNuFiknjzGFfgNgG8hvqN78E61upaJRgoAYSyiN63drB14Q",
  "key3": "5kmfYgUxtzxRHSjZ1yx97DhcQ6jSBbGAmfvXTpqKAvPUdyS5DSFiDpxwAoHVKCfNMa36JdXpM74QufKKMEQ2fb3K",
  "key4": "5vgysGTRsR262UcoCsv1NE75WLnp5PF8AmSnk1VeQh5vK4raSTzhbfsYULjEuBnfYQfa49TVBqNmTcnS47rSopFm",
  "key5": "62EjDq2xy6wAZ4HpCsvKtHegb26uJAPcEJFsbRN5i8qYMiNMtTQPQBtxN6pmCpLZfLftDYjcYgKV2wGXP6GfhgCJ",
  "key6": "Tzj9mwhBHwn7LPX8txjp3kREHYaP9ErbAPaVK89J6cY9GTXAT4nR42RSa1ARAhyNwN9AhHzzkQ4F5hK8GuMMxps",
  "key7": "5Rhnf77MButzkuX4XEgyCckNtA8kHZWtkkJ6wwjR8oe381dNDEZ7XKagcmcQ1K5dUtAu4iaHuT2LBynbrDCrQPXX",
  "key8": "33A8fooeKJAaamC3P983C5YZVBBUq18BF8WWnvqJvwts9dnH54Qjpq6HvR1jhkxE1DFCg14YeA3h6Tz89Q5njaES",
  "key9": "38pUUs2uP8uXk5ujWacmJ4wEj11fV5Pr8iADKpaNwsHAk3pkjh2kRjxTm2Y7EEtAgCi3BGuNmkkvXmRoJfgpTB6e",
  "key10": "42yWYpVexgrBsNjVxF1kXYbRh5ynZvHudsaDS9w39QpRAG3cJSdypNEkjhWhZjdwT6HXHfnJSB4Qmmtm77BxUYfL",
  "key11": "4o3fnbPpieQHjrUv4gAPRuATAGmNz3uAevSRgHgqo86fq3AcBnACVm13iPyHCE5SGwEVrbPZ9fvchN9eYfkiSa2h",
  "key12": "25P7vp4a3F4XKwURyBkaMh7iW3D7bTZ9dGpnyjxKj1eR1AMkFzGZDXC5exVQUfkXrBASYJxy76GFvpDVt1q6kpTq",
  "key13": "2VNMNVstaUujCgqTuM2FRG9Bsns9vyTTBXcr1JkAgmErjhw2Snf46pdyc9BmeeMWLMpez7qRzkJAZ1xB1UiBakGk",
  "key14": "3Ca3pau71J6cxqUfUBucu2wqk3RU9don61yQXRPrKHHGuiXWQ7TPYf4saSia7xL8o4jBiDFAU5zF8FpxG6anH7Di",
  "key15": "4SkUFKEad6LsJKHWEVoDce8nRempF24DaGG7MMyMjfbBDUFErckfLxDFysHbcp9WxyL8wANA9ZnrfnWSYUc3vkvT",
  "key16": "5wjv9F2XhZp55gD5p4iTcZkvkdCQmFmtQFN2sRgQmuzxLqsLA9y79Zsn2rbqt3DjEEqHrFeUfXE8XbBLt3WP8Qeo",
  "key17": "26r7tEQMhnkEDPL7unLsNEtyKmBpWNkfeUWUMGihjQK7xJ1rGU1G85tLTLkD5o54gtJXGz8jF3CMwEyWkmKNeAFo",
  "key18": "5e7KcsUurfcnsxw65tcBU2qB5AN43kmyor3rk9sSHmsEC15cMjK9cFFnaSHKemPHRZWKnAHUVusaTc5MfHU8gtuV",
  "key19": "4q1YQ6ufRMMDoKweSarc6z9KihXH2LrtQJW981uiuRPZWQmh8hS8k9xqzZVKVE6noHuvi7opgEGJyduXbeWJTZWy",
  "key20": "587towR3Mk1Wr9JHX4F5AXAjs644ZVgRQFw5sFEMaSRTf6a1MDGA7Hv6yNQyZQ4D5yJN79ij8iJbu6yC4fNtWtRi",
  "key21": "YV6mwm2R4bNCZrk5FM1mMpDg1Hu1TpSMSqFR4JQv531sfDETrADotyD1dNAbiLEPaGziiMQhjkutByiqMNWLeSS",
  "key22": "4VwFyDT1T1LJEXuWCy22JrtM5FnZVvfZhXzcgv8EeFVvak5GQdpC76RxeuMSFBPqnVnJWVgGMT3bVHV51G9cxFxX",
  "key23": "5wigWbTnGGsoidfkboSGjP7M65hzZwPYvc4kp19wSYsm8FiDTjHK4Y3uYJBeXt7VrGww3b4izgxw1Ltpo1TMKHjT",
  "key24": "2zX6JinE5MN2nmGeFEjy4FUqfgE3pnHbXijDtGTbYBu4cqQ2wRPEkhF34W9N9CG9JeawYcFZBFVoZhtWnUJM6Wqh",
  "key25": "4jaSV1Q7p56NnSqkTt6Ewoaisfqfq776s2B7cipRD3Ks2hjicXF1wsQ8jNpLE8yFQAeKdECxuUeQEgehTs4KFHiz",
  "key26": "5S6wPvK7X3GWn2aG4kuAwZJruz9L2F8Gy9nFAmAA7hbrCuzhaEAwkMrXtE5oWGNhNXsKGYt5XXcK9bUj7v4tbQmh",
  "key27": "tpQfwMWSQFD9ifwbq8oRNicsg5P1E5McYta7LtzXAEVozLTSrifoobbrJnVnruKaVVpygppJSykMkaLobgGhSfT",
  "key28": "2p4frkaV6HM71m1KT7dhNb1SLBfTe3uW2w1QxyxYavsQsQwDNRSbchBpyneD6ULCdWRK4HCXw59kxa5qkf2LAp25",
  "key29": "tf7YkEYcnBTPQ6LC5gcL9JJ4J13HQoFzBcYDX3c6QBEnCS5jCRkZPqqPXJ5uPwd2bYg4E7yyEXiHPHUcJnB9gWP",
  "key30": "yEgABZEQ2NDq9wbWowEeccrVgY4eQFCmG5t3ydXJT2aQNrsxyhBHbMG4QPTk7a91gaTfiby19dXpmERVzazQyc7",
  "key31": "21E26Mjif7nwAyr4aFhz95wArVyG3ftDRshSdgYXJy3ZNVCF9TdU59S6dtZRyGWX7mDcok2GMqqNQy3Md1XHDprS",
  "key32": "3qi83HApm1oCH9GnnMRNDLmhCMFBVvbzxBhaKBytMkMBMVrGEG8AaMPijtiyv3U8BhDoTZS2oYC9xoyTVJfM5i1Z",
  "key33": "2Ke1wUJLaorZF5jGZtz7Gtnef81HwNHDGsMBpWPX7oidEA5jkf1FB7QhkVdAmN7mjDu5z3s12Sv7GaNJi8PYNNMP",
  "key34": "5v8mqw7MHqrKTUtjVjv9PpaBanNanJk2chowGuunH5ZoD25RE6EN1ft1o95T9x1MjmHDjPnK8d2qcnwqouuUtTug",
  "key35": "3Hb1wFgXi9ar5wed1KEshwHttT8T175KnBQ7KD9wHQNgEkjAeDJwkiwfQFbDGgas9DVsCNsEShys5xVP1FrMRzLK",
  "key36": "KtiQRDRnPyfu92dGEBvUkyevzr3UF91RuGpVCrSyJbomunuTDmzc1gQeZb8qEfKmTpkCL888RLmDcjg28dH9Ku2",
  "key37": "3Sa8rzz9jawdGP4unWH9r5pdNc8ncqDfwMKoHGZvytsijWLURdKJuTqiqEMn1tqcJ8tEWqZwBvKNwpkondxjGu5k",
  "key38": "A3wNLuJUvAyrdpvhZUyf9KPZGyWfJipAXdtSq1VwYp4arVJJf1zfF43AcQudKEWcvTCRGoPDUz1i9R8Ad15tnJC",
  "key39": "44LHs85FK3khidfLn3ZJnG1QYic61LPujWs2BiLKpf6yziiamvejUtY2GpQzrCEESiPSwSj6dBmPABUjX4qkayza",
  "key40": "2teunm1XmhYDmpd8XWVetcJKFGzVWrvVh4ZPqv2UM5Bf8amBuFxvr2wK25bQ6Q7TpYXHU2AEN2vg3SsMGLRywQGN",
  "key41": "38CpZSrC2XiaaFEygbDEiurUYB59wXBV4KqmsSubyvC7kjfGzDTEF4L8dD3tvENwZXYh1qqFwKCDvicfE1XCu3WA",
  "key42": "5swxs91kMbXGHKU5YXpzNroHYgwoZEDk57ZkjkXYhS79jJs8cw1JhXhsexQ4P65zkQT6W6ZU9UewcU4YBmR1R2X5",
  "key43": "3nCLemNJXUbnSit43gUJHhLU3WTeQwam6tZcBHXi3BMqg8peQDwEfk8ncCrja9rGzJ2MBgydWC3JdYCvA6WSy7FS"
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

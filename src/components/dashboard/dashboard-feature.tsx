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
    "56VctriTTx146k5MtJ53LF1CAxiKoDcLnJRprXdivUgSnHpTt7BNYhcTXwMzZXmrrFSN15FnG2mbZuSGejr1RcSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jcHamXMKJdZWZUBn5YsPL5d61tHrCr3cCmJyAT7Eyg6tXUfjhFZ5V7fyGpnxvfVNHUPMhNLxPapeKw2PmMCTmQR",
  "key1": "5a2U9bsCS2Ke78y65ykvSAvuGmZesPi8oScn7BCjsxKTPh4m9VvmxL8TDj1NJq7z6GWJeJBUFj748dMkNoSQFYmU",
  "key2": "67Ug4HSnLJG7yQSi2pp1TD8i3RUC1qgtzzQdhkJcaoY1tYm4RHZiXp6aPcbmHSYRGJnqgELLTXxxjknukXaVUiae",
  "key3": "4y5p3fatCY1bodi8g7hCS1zXTJaPsomKhasCAuw4X29ti5aZDX6weLezq7w97Yz2aB96hakhqTLxkba8vkiEF4xD",
  "key4": "5r9At66yb2vXnFecM48mUtoovwD1jrGRpZaeNBSgiLjqcsVVSxmHxqJoueJ1rUsTuyaiANBPDjjt1qmGSE9zBvdH",
  "key5": "62jRFhK8dZZXZdV1CamVnq2GQijBHBSv15GuDrQsMkx1KE2p4R9kuMnTQHeSPwunCnkx9A82suusQM2eqFr1iDsB",
  "key6": "5enDLGaWHer7FuKw3gny63PKJdym6seVN3XhhafMGt1Ts53EwGsk98ZRDb2zQGR9jjkGLYG2qHGKR867tbvro77F",
  "key7": "jGYm4U7gnfN5bLbeu2W13CpjihA3YAawhwt44dCbQ328Nsm2Z7qAxjL7cG56bw1p11pnJ2RtMV6ZhNQc5Rd1Cik",
  "key8": "4MPL9H6qqEnH5dfGBMx9PTfEyp6tqCsY2Q4zMksCQxQhcKziA3rkiumyjLwm58GLY81SBnkDxKpX8ZHTiEonLGsc",
  "key9": "5L3SiYxBvgL7MxVsVWLpmf6vrPbwqRrqgAmbzwA17uk9cAW9qHHx76TU4MF1ANYBmQUwytYKTZctbLCJSLgAmXmU",
  "key10": "VBfiMeJuNhHRbbuF7XyKTME4SFJ2L2spUoWGSWW7tW7v4FJA7cXczjrqBtGh5xrpUSZw3aSmSNgdnXXvKqw9ceW",
  "key11": "CidiG4HmAhAdjmU9ouj3tLR58ViWoBpzuP5s9brp5opePrx1TNXmtLFgi7D93B7AUG1Eprych4Mim8uTPCykjPD",
  "key12": "4YpcLxpyG14RYV7P6EpgyEBfotV78azhn9sUyw6cxS6qgtL1tSGbJ6fFxGJ4vAYj8x5RxvKBr7EMANp6yU1tCp9r",
  "key13": "3evjt9SWoUHuzWaDECfBscFT92zK3LYSfcrLTd3uyK3HTn5vZDYJmo4Ay3ipW9XqPxHLH8ptEhLieHQgxhe5jyqA",
  "key14": "DzcrvAzpt9wiXJaoedujgDrbzjBmVWHzLv79HsJjiHhs61Jtx9X7hAzzTiR4Lsjxhj1YPMRW6zbmM7V8c6e8Ly3",
  "key15": "2QMZCVyP5vLD1L9jVnMupPATCFVKdWrH4SjUVn6TUQhhLrUhRe3WNA671DBC6Lq3dG656fCzjRYY7ewTbdVCSvrb",
  "key16": "65t7jkqvWbefMT7Sdqf2TJEfwgC6EoTJ3P3BfrwDKdSFZFYv2Dcmm5GiidUoJjyKTFPJ3yuqqjCYUDdY8dQYBgH7",
  "key17": "29FV7DcgucSDMn2fD2ykTe6zgKz4UZgJtgAWtietbiUhsu98Kg2c8wd1gxosoicgq1JvVo7GXxg2nM9mCwwWEegs",
  "key18": "3cXmAVBZi8KCAEvGdkWmJEStiHDB5yVeknZKimpjYdF42nsKE3JHbits4WXJR9etrudLhdDmDRi9SzXaBpXRB4rZ",
  "key19": "4KohDNuVbJju3XRZs8z8ZpBpMm5tM6SgzbhFkefZ3WPeUsdiCviUv3nJwzJ9V5zXL1XaUNHVAqzsNyBHmZQnReU5",
  "key20": "58ev1JUFYQpJni2Q36HAi1nhMUWQzbY2PhXrbKUX5xerZtzwA2iJfZu3VnWpEYhL6hj7ZXnS1EuqSh2Fwz58JYnC",
  "key21": "4i8knjpGnWLjnh1ZY3KzDwwRU4PGxXuqcCbpRAfAY9Q6AEpkoFN3pgWQSEBVudCEfWxKDFuGCrCr2QzK3j2SgMdg",
  "key22": "3egnSmdzYNKkEUcXjGxRwg2vqfnMFbJyw5oTcDuMZWMCQhqmhtewemDUDbmfczuWzeFtBBiye3kxWjh1GqVPDMYE",
  "key23": "32tcbihJNhKZWvANJG4VcAXY9wCziiNcb68AKF8h1mgBGu3GtsDybic8bhm7ZWYkaWEwGeEfQfsSKTQPZaYs4iuT",
  "key24": "2zJjM6KDHPH2HLHWEzoAjyoQquL85tRRiVFVyH38EbbVsP1h8mGoAmiXF6AVMAipfjBQHp4DS93NZhC7Ysw6Cj7Q",
  "key25": "5dUw9GUQQcELn6GWhg6UFQBWVjWugtukAGfvCuRdPBs8WfcBa8UEJmg6R3S2ut6ST4Vo91bS3fXpfhnmp9cmiZao",
  "key26": "CtagDkt9aRr4xZuD5DSAVrVcknAZ51bXMpwHf8fvpjuLvadyPVebcDPscaVLgA3i9ogfkpMBw9aFtTSJocs6Ngz",
  "key27": "5n88V6UAWGbVtdxa2iDoGrY6jFdHJaCCCjByoMzPbaJZPunM9YJFWFtL6GRu7y7hXeumMBzZYWvCEj9K9TNXo3A3",
  "key28": "4uBFfWcAeNwZTsZp9rBa2NCv9a81emJJXSzFPfwHB8bLxwBYc32ChXan1nyRZUuGCVpDSFvFj2wKvMTnMzvbqmxn",
  "key29": "2pREE1aaD6Lcejfas5HC1rU5MW532uEgUQnpNC627LPwts1zJrMB337GiARFbpZzM1oVRPX3UwNLi53gHr6rGVpA",
  "key30": "2sydACGZCzG4BgKFtjGcgS4PsHUrMBW6s6kgjCPNfGSgEAbHtunyppNFvKuUhmDtnSLBARwhE3bpXqWaA2aAyWdV",
  "key31": "4bjFxU1DrQV5V9XFa73Tpf7s2K4ZoJF6zPCiDgSuxbZbZeBSkiuPQcvigXm86shFEMrQeSPwrenT5QLqgAjDBmWy",
  "key32": "4SjJZ8KKrTRPUHzTYerYwRJVLXFLnSnxizRChPFHjyHtX3KXTKUppC9PACVnbGRumjHwSvE3e1Mb5j4gB316cv1u",
  "key33": "4TjRHr1Jrdhv6wsJP8LT4ozC2q5kiFTmvSutN9Ncd3eotxALo2z4FNJC83s2X4igbJhb4Qc4biVYQQh78uAMDrzc",
  "key34": "NiW8RLQRTXfkwXqhTSRWwn6NV7aTzfSFELNwuQ8NY5qwmEJ3hgPhqXWuLubwiA1DTwhnq4p37JWGwskKn1YD9xk",
  "key35": "5GhJXYqWUejMQAG1h3RdAp9yxut7jiNvUoevZnoHjpsXpvwKGxthSdP9mps2qov85J3a9v9ySNB82N9Zenk4aHzS",
  "key36": "5KVwYFb68NMQCzvqRzLMELc9nDaNvsCscwRwftPaGvisQGzVfq3odokciUCgsiAb7MULtKkX7D9UnwtWP63cmKHL",
  "key37": "2w1qsXXfJWxGhXCJV93EX8naXsFSsGXkxjWmGNWW44N7t1ATK5iTdajuR5NDEEhVGHnUa4Dw5R3iaPtPCvuDTQav",
  "key38": "5JxmYAek5WE9iLnQ5dx67822ZtcSPRjK9NrDMDKV2qBgjwWCXgt44rH8fs6oREWmLU1nMukXhWGkKkXGakxM34s5",
  "key39": "2JAKj2J1uwTNHGFMbAhAkSYEc8mLXPC6Gj8HPU2f9BhLtKRC4i1PArXNMpyXfobpSPoupHCyoZ4Sj6VHiYbqjSSe",
  "key40": "5wKbVBpnVtLkk3AF6qP8qQta5LBwU3e4hG31a27gUygBaBTkt9Fnt1hYzRBQxMMMmQEaZ2rakSArkP6BL8bge4Zj"
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

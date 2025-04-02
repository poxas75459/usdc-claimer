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
    "4Stn2WRZnGwZxH2LRvceXL7GGkTowvNCYARKvrafFL34Bv8Qt1nHUCdgKpv1XLA4w6Y7Jvks1csBsk7ngqpgAtuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1bVchTnzm8Y4WozjN9RV4oig3rNJusdmCVszSbbCSNuB44hS64CYCSjv5C1Pkd5qpBR3X2QTrHPd32MDGcqTDVR",
  "key1": "2wDbTjzJDwjRuYvpKJ2iorYdu5DDjRETSKLhrhZMxkURwKFn3Svqyi2NL1UrGR8Mk8muoEYtzEV72NurDDuUxrkz",
  "key2": "31z4p3DUZag77kCndofEq5UBBBh3j8X6Sv42CAk8fLPchh7eUr35c5i8WythztChuXCum4UmRMzrAHiAJH8wCpJ7",
  "key3": "32sjrFcFKaArbaX79gNApbeLAG99Tp3Cm4bf9memMPB6fkUofepi3JJT8MjdzB9WD9eFkNQrpBgEEEdYUUAcD75t",
  "key4": "4UURJmzwYx9UCH2G1LYBWzshbZFe2QurqEp115i8WV7P9frMeLKvXYVwbH1EoH52qnGez6Rfm55Bvub4QCg4axqb",
  "key5": "5LJLeFU5fVMBtX6QKpm1R6jZhkAe5FfVDziWqSgEjaXwsZ1ZHd7Fht5LfNRfhdnB9Z9uTCydgkJEZ7fctLmWvkk8",
  "key6": "27pkoCTWNbporNmUAY3rs9N4tAaFFJWGMCrXJ3Rr1D1x5FuhXVZA7VJQnUpXRqbGtCrRiiEN7JogM63pRhYkybqC",
  "key7": "brjMKznyx2L7jd8qj1PhLsGfqmKyPuzuYPVpGSqnvL8oUZkcdF9BgwvSMZB671izLPshSkPsNNBvPdsJYCB2qhG",
  "key8": "61FGmgtT5w88vU5WgWGuYnnoJzmmHHoXo74TrHRLjUJJpzoc1Qb8sksFCmkqxvQhW7q5onb4v2zV7jHW9HuYhiBH",
  "key9": "49KALi1EPtS7unCxR1ybPnieFYcReY2LbbxVVEXYUHe9qqXZUqWanST9JseB1Eiei313JnopjsxNuZZjGn95Q7pf",
  "key10": "2DPwZWDreNEmj1wseEFjtoootnWEDBdiDqFCnhHiX7XB1GmeUHHg4ftEyZqyCrrJn38jYTmaYgX7hUC34eoPLc87",
  "key11": "2e45hxkn5nnAJ8Sn62xmDfe2M5AdmzEufMjiutZfzCxt1tMxdijMgMifrL3xjQEUfHPUGb968rksp7cwHPBFbEjq",
  "key12": "5g3RuYR57cJn41yAyquNvvaW7TvKAakMsfGXdmYeDswMbYEGMF9p75fWzXc8Qc1wkpJwWaQmTRQ1LKzPkaQ7sEim",
  "key13": "52MDHjnWvS9KimURFtgZJkFHqce5eAE8UpSfYcVpNcbeBNuB6bBJ7Gsf7wJipCkX6888C1NKbhi5RAmkpc7qXMkd",
  "key14": "4o2Q32E5HAmQVjVzfiWqj85BBBvjkgVreQN7dDefQaPxuN7Y3F6mE7KnkwkSPvnXo11eh5AB8UfPGrz1GHvkx7yL",
  "key15": "3Sa46SX7a1G5QYHnGp6z86cTLzrGUDQNCSWQfBKXh7PzkuKwcQMDK66AFzR3vhu6rrmEQx6CvJU9jFVs8uN7o8BL",
  "key16": "38UNSk5XisfHiAsHyTAk789wdgRLSesxMpkZyYw2Evegg4EzZar78ov2E5KAyLnk1FMh3VXMJTbVDKLoRgPXmM1g",
  "key17": "fVNKLMYZv8HXGcsXbQeZiGxdgbZonftRTEAozQwrczVCwmqp45HfR9j1BGawtJAiMrquETjC96oEPE5Pn7oFyJs",
  "key18": "5Q7MDy97zHuiprJMA7iB1FPJmpBmYKUPQBFWtMaHi8hX6Lz6XVmF9yVbGo2Pr4Tikm13ZbPCVvmk2FggUXh4aWSh",
  "key19": "3v5SUATCwr3aLe4QbygQqmHP4tU6HtuZQJTmpjiPUnj9dRZhC7uc1citSks1WxFiKkPnuTokvsa9py8R5iuTaAGj",
  "key20": "4Fw3kkK7sDnP27hmG6XCXXPtM4Kw5UhQUsKmC6HJzDzxfUGqm1W5ddHuLskfLoPSDc8W4hU2shqNv6vgnFYEkwSX",
  "key21": "5VtDKmAyRXvPEJNsHdDXEBtdXBtfab2HBgxm6Htz1YGbpqtyAPNKprU7uyy8hVQzwiJCouVnBzSkarTQ6tngmWCi",
  "key22": "2rdMQaEgdiSDMoo6oUixNNsnqA4uGoEA3E6MXdVPdcn9sFTUmFNYUp4qgenLrqitYmnJy8t5q9XCccmwzLyRmXfo",
  "key23": "qdVPwHSNWtVBzjn8wbJWzFrERS5Wo1ZM2W7bTjXJMD5kW5dLKLeAoCetKy1B4mZbo7JUVHaKjTaWYfsQS2vBFXh",
  "key24": "586B2BnvHmLsFL2MgkgvUdXkJiLyY5aexQ45uqgrFUMij8izhsTqobtLJvKfwnvtKherA7Jww28iPABMcpqTPKLG",
  "key25": "21m7iX26m4PcdjaEksXyt6G2goLg8grQdEiE7LpZaVvunyni25kLUWVXWM7yDdzALZhJdqFR5EW291ZAttJUrzRq",
  "key26": "3GAqHDkFoWL6G8aWhFqB33bEqY25wM3c7nrJvFgU12h541RzJFNZBT2t3HSw8t65SvzAJb9UZohevtH9votjVFKC",
  "key27": "2ojiPmm5FRPxDnH6Wxiy2LsQ1QwbdDG7gqnXucSHTZeUDaB7ZhHeEKqmcneTahWjpzVypqjycNoACMgnxzaoLqB9",
  "key28": "2FAwm9HxsjY5bvZivv8bzZsgPFsxgPYwh9jwgZfeVDXhZ8RpKF8DtCsYBXdbkZc24FEQXtLDbeU6oK8fDrQe8zuK",
  "key29": "4J3nDSxEhk2eKzDhyXfvY3ZoZE5vLEcYVxi7x2CbXBia8cNbdJooE5ZvsVdokarMSrSnH5TKaNrKo3Xa2g8TtdZz",
  "key30": "3HzvhHSt93KmLPGi4SNZN82M2ucTP2WdjZjnuNsAZ4Ybk44MS2i64xg1XHnuB9ppV5dHKErXgFtM72aYvRo3kZdr",
  "key31": "4bP2cx3uQN98gX7DRakToRR1pupVJP3iLkwKxr9b8jYEJveq1AXKGgq9rvpYzqWJ1wmmta4M9b57kkHzrQkXcxT9",
  "key32": "4sgs7CoRN36XwPxUjd46k5PE7VhKTCWJ7f1s7g1YKSYGFsoBoXR2WhCSDym1NvfhXLQxm8nz959rDYAevSrydgLM",
  "key33": "C8pCKme61fhnaNM4G9Dy2UtYJjL2RJcMxGPf4jwRJaic1aR5bw9BNWzxK6757mJmU4BpCXBWLtPrubtvVnVz8Mx",
  "key34": "4K5N1h2w8Ds3oieZeup7PtytgfZ7wujdeLUo5FSVW8u13BGwbSVhk1TC3agqxmx8io874xUyGE5Jz8UT5Q6CShsN",
  "key35": "Jt6ky7uKpjttGSeJCRxy8kyV9eEN7C2Q7JJVm2BZvXUFcP1G8XbA7ac3KJHDqmrBb4x87YVNnYwXhnEXCXU7dPL",
  "key36": "4f3URwvNst5z64RQQLADwn99CLfMjfNwkKMuKQdY62iPn6MPRggaFydLKoMj4eSN1PZW4W46cWrXgsH23P2VjYpK",
  "key37": "4yGoVYz5vhh5NM53StuyaT8TGu5vCnengGceKkgNxTtsXokiXRmkE7AAxaEGVTKLg9q1VE4KncJXNpAg8XhFwrkU",
  "key38": "2fqVeBuWt1Tu8nEfTX79mt31Y14pyxezzCM5vPbVVWhpmxkZjLQzG8w27HTQLFoBxgjvTwiDdp4mTmPHq1JjqHro",
  "key39": "8Q4E2ZuKuQat29Ww654Sfx15ELyfvUo642bWGLuBwGnPBuqGwvG4np7a16DTS26odHwGrTia3xLeFoLqpXVWur9",
  "key40": "4qfnAXPZBPRsq1RMwFpxpFmJ6JsHQWpGGPzVRtDFhWJYnfeKQqXPvPW5tedBRxtA9ADkPT6cVcpMx6ywSqZQgvVU",
  "key41": "zDuC4Ji9deNeCtHZhfsnByc4CueNkuJgt8YaUxYHqUPccqiZ9cEptVevKQ9G5vXaL9GEDQPmux1BycUden3M3BE",
  "key42": "3NTMtoMGbR1MJwWAk1K6MSsLFJRRSE8dtqBQauwRqNcdvCpVADJzsFxFHjkXtfwKHfD6YNR3HbtyYtNNHfRgdysh"
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

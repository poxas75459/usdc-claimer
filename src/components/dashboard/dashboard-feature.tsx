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
    "3PUFG5Ys1hzj7hbngnw1sWNajjVV5ZxAXEAsL2a5Vhg7F7L1CZetm4CxJJLUAFqBLJDNYkQrKrwBqqxGbsyAiJXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGCJmEmGv9RR7JrHxZuBpnK84WeSbnoekni8Eq8TUsJpuY6VkxjHVDFtv2sPzLRBPcgWVKtrw84gAGDkjVLAyYu",
  "key1": "2jzw14sZuhZ2F7X2oA1XZr1RZYZtkngeG51WUDrYfCdYUH8sRRpTDHzHPMJ3G3mgFVGNczYV2827aehQg1GyENmj",
  "key2": "4YHEvYnWqKudB3fKMtUdHJUX13tBqX9jAVC5j9VYcXcVp3dXhnURzUthJY6S57pujmchYWypHxGvA1fj5UegXzoZ",
  "key3": "WxhkCHdaQMipjWHLCnDptrUxR6J5ARneuHWoV7jWrAQ8CY9bRxjQgdduskd5FJMwqgMAEJHkfvTCjU7xPVhU2x8",
  "key4": "4iTLbhzrEJGULo1HgFQK4c85quHgft2T4jedGarZxXKGUATVLgV1Axue6jqBjtoxqU3UjU7GQDoF87N6ZgQ8UGJv",
  "key5": "2KXuGEiC4aSDiYgXKeNVu8EBJPKggi6KSa1RxAbPXPLR9hVEczjQc6uFpDeLDinFqUmbcKeUUMoH16a2zavtfEDn",
  "key6": "2koPRPFAdrp8erzfxrMYQ2PfJZvrT2J2VRy5EMjkueTnVvhqTav8ycyJ4nFZ1zt4Fw2voEjbp74bhbaWmrAzMUr6",
  "key7": "3vAjKSuUjU15CtTLenAD5453xiFzf58Gzrh3gzYb2KajNALf7mC8tuM2H6MvyK4aD81j2EZWpVuyVg7gx3caMknA",
  "key8": "2XjnunssKkLbsMgqGPtraTexZXnmViptMVJ46ycNr7zFPq4u2w5ZSzJSd6PXSQBmWGXt36bSwtmNN8JKp4v2EHjJ",
  "key9": "2PJ8cp7ry4hpJKx8RPwzjYm6v6jwF9j8DYW9CNEr7Tqa7oXG7h9V4Ardvmt2RjjYo26RQ2mHBWUxdhZnH5Y2ZMke",
  "key10": "hTb4wbUxuB8bj4pXBWjeCGEwzpk2UtVA99qvk5uu5SZUdktkd3tiGndwPNytP8jDQX9GSkDWh1YieMNLsvX2o5E",
  "key11": "5FiEcdxTQcRwce9jEHePGja8DDkFMf2kGr3xdZ3oKUic7gHUErvRNkyoXwpFz9HESuBvE7j612qH4mqb4cJwaXW2",
  "key12": "uoyjihiLu4cGSLnKrqUyQPGVmoBuDXD3gWM3bS4AaVX8Kcz6Sfm8McGuwaVYZ51ePCpDFEd6SiPXSKwWGXE866v",
  "key13": "41xuiDQvgByqejSJCUrj7vEKXvsPviAk18UyfuZ7Wcu7dg5AV48H1tjrUpe6K8Q24yEAe5cxBNhx6UoWks2hDBpz",
  "key14": "3X3TiAvZPa4A6QAhEKwNmHc8DJsP3QpGKiLibC9wjhpZkJZzrzsVzBsMhULQAVkhbpPV9fBfQLouujq5qd3hNu6b",
  "key15": "5brRSmsdVZnmsfgVKsTb4EneZcgu9Bm6uP99nnMinKScBV9TNWVtWkG1dKmeQBEoTvXNvnVcXQWoQvE4y9MsDsBt",
  "key16": "5kjpymeTmhEnfSE6dqwLSCVE1gKztBi39RNZjnxyRXCv1o6RScNT3VgqCZTEh6VzK2CCv1oU8CuL4ATPgyhvS3VU",
  "key17": "3Dgu5qhiE8mPpE8484iumzVgepuBTtucqLNQzbntZJqgeLSuzrSLrweBmB11eCn6FNykCPCHzmWpGXQQXSGJhUby",
  "key18": "XbXnAfjkoaYibjaBZUu1DzRjkEjaME7mxLpz6Hp6TeCCBbr7tULasiqmc3QXjcnCTCPs959mUkAL3VWKVja8zX9",
  "key19": "4YfJJMw1vEFvfQMyZTGV9wvQhYLZULzug7r2B1EeM9f721ijtSNzTwMrfCovPvZP1pZJbEeBXZ5kixYwZXHP5r3v",
  "key20": "3G7fq5PxUP15juRsmEF6iaVRyVw1KqLneWidiBqz9ddmFbdDN68yimrEHtLjrtVoTFTqmUcroXFBY5Ug8AgFHEYs",
  "key21": "4zK3z2RGEr4MEfd9mfRdjWs525JuRh8PQF6gagJwgnvF9aMDJ2NLvP9nFSCFUYy66P5T3gg8XUdUQpkpCKkz1Rvn",
  "key22": "2N7FT1L3HgdkR8sKU5nPEvQnfZm2gSeKWCWqzBE4PPA9rLzyqgVYDPFBcV215xNapivD1QAGptKN7x5gvjcQKyFi",
  "key23": "5vmZHryhnwkoVFGndcHRYAn5e3nV8no5tUkcxpvyrkdHUPVEgE5PAJm3hPcTVrsf2LaPyeFqcx7mcNTVeSd8p37",
  "key24": "3UKzayAZuuWCskMdzMj8zRJruj2GA8JBtShDhgVin1mxN5PoGg89HppzAicQMcGumvabMC93KoZKtnMetyxPPWQB",
  "key25": "2M3WaGbtGhJNZBHg6BR31eMp2pjesX4Wy1DW61joAUExREHAbb2aqfVG9BtWAyEVKyGp6PD8sKPbuy7TcQ7jwLCv",
  "key26": "67UyC9ZAvrEBSk2vjju8DdHjNDxatJZ9axpsBwUZgKdDqgjApJkwNb4XgYTBN62zDCjLLegYimStxqb75VioLHDL",
  "key27": "TVq9Hkj5jKWoWsD2zipqtPrBX8jyzYTWYPL3HXwMPi4knjUqjG5LJaYashTnzkEs7Lo2BaGEtHvCrdiorpVo8KN",
  "key28": "2DKhiPJwJAAqxx5p3Nh9Zg7enCJM1EKwF8qH5niN82AXENfo17CUr4gSeSaFNR3wFnKoJAZYdnXq63sN3QLCHBxW",
  "key29": "m6yDbQjg8syqvB8vK6CjPkSuus3HWchvqpqpeNwNugUbPwsbpz1N1V6nfXBi24dcV8EDXU7ymU9c8urLbKV5kgJ",
  "key30": "4MxRYFMLwcjAst5deDPZ6qJfLGxQQeFVVurwQQUKWsaGYjtouiyAm17W38SXQVkdmh146zhrof5K5oADpkfb3UwS",
  "key31": "4BnEbWaJB6HE8fN58bSPG7fNaETBNhZ2RbPx1Ds48Uk8JLngtWTKjR5tyVsimdoUUpFykyU7oC8PMUJYG5tvFYCJ",
  "key32": "GY1znCEXsbb75p75HPNd6CRzYnyxfjUqfpCVXts4v19sBQzPJpPj9AkJkfdmQwZvetHNNr4sVjzBd1wBxqaWAuh",
  "key33": "2rNAcDoamtT2sKVp56dkZGRqQjAo2pTMjsDm2Z6Ru1ezU19tXRwZK5Un3pLaxTF9aT7F2fBcWfuKAHmJPXy5b1pL"
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

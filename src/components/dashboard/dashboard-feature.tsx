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
    "442nogUPRDgcARcfuaunXtw2Hxe6RxoE5ahbGQP3X1NvazUnerFmMeSxVULkZz5pJzW7aKmu5uJkQw8FEcGPWQs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZQPunRCjQ6ckhumxDHXFxomZwxSsSPFUNKi4qudeUja4kgJPgzchfp3ZN1rgkqAm2vArkEBQbE8TnzpaqBiinU",
  "key1": "3ZAkHhUc6stszMiQL3NSozF668Gq8Kcr16pEjACQ2iP7ZcAeXEbsLgZjXSg1Piu9hc1PSsTgHjnLbbKksTUZ1zJZ",
  "key2": "3WeLgMadxyF3NEnEmk7MzLAiZeHA4rdS6m9AeiNzTAHxvmBCWxePs4GXCrn1BgSbFzpE4SYRYW1c6QTiKfCAbbLR",
  "key3": "4Lnxp9aHD8dgU85Lnw6nRkvcCkfCrLMjV6a7T89s679d85rpFbz6eByvXJ6M4AdP9a5QXDBacC8ef2k8RKfwc8cL",
  "key4": "m1Wj5cboNqNsCZsoxqD2PG1CsqupYCCUx7LU3A1nTkip2ZN7r5yW4VUyf1Wb1HCTS2UNsMAtbTarR58idPfnHPN",
  "key5": "3EMW9T8KeKHAdyDLpG8W586aG5QLDTBGg2tnhE67ngpz8grFaU37Z97gpMMwEeQXFd14doGzWV2wiqsBXfgF7Qwp",
  "key6": "5XxDcwccrT1ZEHMThW3bEZGTbZgQZQNEFyXaEKw1JdYfCbzyuSucr5RkyvTMJECMPKkZ4q8kUAH8kZ1n5SoSLB5c",
  "key7": "2eEiC6QsR7VLyC2eVKEYSkKeLAPeMpW8cbJBa3a8A6niA5Rng29tLTQCfSrCXBqw9CCy9xsDUYG8JCBJV4McLPWw",
  "key8": "3maeYZfu75VVFUsJeov3AwTSb8VNpSQcubzf6pU3vVneWYyz1NLcBqqpV7psbDxgNybq5feLKS6U9hrFfoDKQVV",
  "key9": "2yzphUqSYR5CCSQXDfAwaHDv8CSSCNcyHQefRqeaHfRSgPyBjhfHE8GEwKgyfixQXgE97McNtWdeCZApoZ78PN9g",
  "key10": "4xQCA7J5FcJN1zxHQjLfvdzqkp6qafojHDczA9NTirMA35Q21pgZvkhp7NXET4S5ewZ4ZHSYHH6HJkDEsEPywd6d",
  "key11": "3EuUosySZUkmDjXGdY2DWuSVGqSkweEwUqFuBfZFfU821dqeFUWzuEgdkHTXjf7LuQvfUGEtb5MufYgmUPXe3UzV",
  "key12": "GCJhin2HfHmtMDEWzy5kMw3NgJdeYpsHRjyadNAAnj5iBZUfw6BpnCGZg5V4ke1FPsCqQHCo9skoB7znHALx7Uo",
  "key13": "3WrXrtrX8XxPUQUZ5B7T2D5QmAYw1oeir4wVkydevZrTGvDJy7ViUTzVnNPg4crHovob1yecafpXpnEWqrSd3cBo",
  "key14": "8tT3wfMx5Tj59C7NsWBX7bgq8RWtnvLHazDzaGSfUTwZD4XRw7v28BZ7YQervJVHBe6mQXVvV9wk5RmYixxSVfK",
  "key15": "2xhsdiRUWPFY2BUfwSkF67JwENQt413bJxEkQyMVqpmKdo7zofWexT4g5WRpFKm44SEcPrnQUzZs3c6EJh6V7C9w",
  "key16": "5xcBgWmAfqpWuoCHyQbQJFSe5sWQhmR8L1jHhwSyGpdVX2tkb8BsAkHv69yov59ucpWEAMtq6U7FAhdNrXqb2Vaz",
  "key17": "5Yxa4Hd5tgi5eToW88GqWEcG3U8HAksS8KFpjc3iVvU24q5JqjdSiP9WJubL4tpKLeGf4SjQc3mcRt8fm6tKXUaP",
  "key18": "3KrjHjjNEmVKAQjBVDcjoBhoxPn2wnwZYL2shszGgRKRJiEfaG37YR53pQGHVVZamrYRZVHohroZuddKRNj5jgjW",
  "key19": "5MSWDWprZFj9CZWzaoLKkmiebr4Dr89VTuwH6xCs3TMmgjbxKrbit2ivvjF4SUaWAFDf8776WnC8guzR5gQxYKuk",
  "key20": "5s1zHtptkcHzAs2DdjpuZ7Hr3XJmpCcrVBdxKCVCbXJq6ndXLtVBSuMDU55ez4As6EEFsGSkhtaZjAW2hcJrjX3F",
  "key21": "4U6NysKiBYKhzqJpM5ybHJy6NpB44qADaQiR4dBwmEfy5gfdKeDop3bz5dsb6ATKYe1sd7Wy6ZoDYSEmY3xUxTac",
  "key22": "47hFUen2rw2Y1GU1esjJZeYN7XQmSyNhc1sKtnPtekgPmDGFKHS7EU5MidHEof9TuQA84NPtJZDU1hTQJZ4aKuNw",
  "key23": "4kZSg7VYJQ7H3kYL1hky2vk6LVKiA38jmvaMjCQTGHR4AXZXThBLurkL4sXJXgH8YxBrSKg7xr81vWhQBTnEdWNC",
  "key24": "4FrTkNneV5vCsrPkUW88M83s75nuhGZTd32pQfBWM6xJtxdPaFeaYtnDXtnNYD1mLU4kwj2T5v3BMqM9Y2VEmeim",
  "key25": "2dimsdHZHkPpJv3mKAC9QSKvLeMAPa1mvngB29UAgAaLdfvwyH3NLWAnTHQvWve6aiDFmhc2HL1qtUD93Jn7Svc3",
  "key26": "TH1BVYzTqUKrwX9TTcV7Dd6NPusTL2VfSxxE1Dy3sY8RjaDN3cYDzLJ457Dksu9vtUcbu7BEVYieZGLcmFe3oVC",
  "key27": "379BZRp1ToCjXhywPmjiZLUAsM9U2ybJ9svcvNEiYiKhTPUnxFV8rgL11x8VTkBFLPNMEiNSAU9tQ63gBgSsokFb",
  "key28": "2BJmaxhmGH6Um1MRr9XKrxFRATjp6jWXVFR1TsPqxADjZ1mLMbvDL8PyikE96EMGFW5FcyLMeU2jUdVNL6vfsBYs",
  "key29": "2KpJtAUR9J8RJdGABrL9cdiFuvK2C1r1FjuLzCqcYP834tfaRqEToNUias7RZM2m5gLewr8fSazZH2VzpFjQY1gx",
  "key30": "41RuaoZ5AfAU7RiCDnCijbXATgKvrwGeJLLonhuxp7VcbfXNLVXj5pywqunwnJbytAN1VS2XHDgYKcCFMZPEhYya",
  "key31": "zze11q2gH9NdRdZaAQfhiFLG2mnUvFqYtwFQGbfXDhjpP6MPsnbMcCVPxKyY6NH1X8q9TqTgAd8LVkHjknQQRtY",
  "key32": "4qcBqwV4S4uddyS596SsMu2e9XrZah376sJqEsWoS1LArtkxGqW32zjqgEgzofEZY94UnQiHawuUk1UyQcm444cD",
  "key33": "64LXouxbAcb65JyW8ioZoAYcRkdTVh7tAoK6txLV5r8R3gWgzFHBXMLbJBBqepqH2ou3j1s9CLDtGK2CRHiXKc6J",
  "key34": "3EegqqWCz1Ss6ib5hdDFy7vqZJsrLYxiKJAQedAVH5QibtxCjMpfLnQ3vfosx3LCanynbJPAHKVDy5pZwgmvE9cZ",
  "key35": "3xK4KeBTpEbuCwrxq7CyFWW3dyPQEToLL8ccREk7cn28pnLx7Yw9AA6TmbE8cTAD6j1NMSDFVCyFrFMryxGr884V",
  "key36": "2t73iJjnK3XsZnsbVDfwD6dLo7zdhCkNf2Ky33VuCRkDjkboFoqsj3qZLGMXMZzv3mV3tx3MTbqJNuVvyHBo5kUv",
  "key37": "55w4PaDyUiuTvSSxZxzAoRtpKqg8KBAfyySpR7bF1iyHUnBCfn9UCXNvM9voYpuiMHJEQR7tW3PB7APLKAKTKVUD",
  "key38": "2yDHWgXEbubGC1LQvMQVr1gfPi16jBg3LBNWpAJBXQwMaHJVKN1S77Ro7tkDUd7ws1pG3cb98u5hXt7eqkNUKv9C",
  "key39": "5YgCHtsinUckatRsQWkXcEZ17caTH6vPm3DAgx6H6iUL1Bmek5VbxpcZ2dkjZ9tJ5DiuxZpwHiwHAJu2vLaEk57X",
  "key40": "XySEbK3MN5d5V2D9a7REqFheu8bKuGHma4WPrBq8cWwojsrMNd5q6FT88FpgwcjdUDqe41JazkDw7591Yunzkzp",
  "key41": "5JP4545wQGpY1CnXAa9hXBQuBr6ZedtpAR14emAYXw2zLDJeabhLj2pWNbz52SEUh7tNdx9NSC6CJYEwdXv7Txcf",
  "key42": "37vzGFKGpTzCevNi5BGGveoQgLEXEqy8YWaY61zkHD53rxxk2WCPZR8JKYWMSPS39FXHoxMttxmopsXMZyC6USg6",
  "key43": "23jD2USmJJhyA8dwXJ5afB8PzpPKt92g3g9mGyvt5uJqJjstsNKyQJPJcCTL1EsfWVb7nHkPKXmGWeox2SyP5669",
  "key44": "inJvWgc6eP1itKzZXLv4w1MtRHPEWgHQiJUWdei1AfZLTCUGuTbdQBaCFMfWPhMnjT37A9cScT2ZCipYfUX7wtB",
  "key45": "2PFM739JSsUF7hec5D6NTR4eQ8Pha3XNCSasDTfWr6Q3RjunaErq5UYyNqaoJ1DrxokwwZAxhrYHLMR1DyivmHK9",
  "key46": "2opXxm7x6pRMgrzi8BcPdJ8gd4KzdGXP6bN3uJm9ybLz9xvKrCNGZaJwodm86PqL6hLiDRaSsn3TR5sPcTonAmkZ"
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

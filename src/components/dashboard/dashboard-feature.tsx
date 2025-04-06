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
    "2sqN3WDEdKYXg4BGFpY5Mhea1rusHnQ2JWyW15Pi26ZegGMrGM4Jz153f3euzYv6N7MFqNKvsz41Xco6yHbBzitT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cS1ruPr6UvFXJrYxLAjgZs5WYARNSQ8jEwJKjLDLrXDXtGQYG5rY5FE7R2uYHx1pPCHf4S9Dd84ifmjjUJnz57e",
  "key1": "XUzUahQkqfNRuZpnLPEb3Va5QnHVkRFy7bnZGLApwdP2pBbWoW7DCExnsXqrArFJmVcHerGKtArLsMggS3wAiCy",
  "key2": "4esdrhHpFJVBR9LLrjdYFZ9t4Hv8PuBJ5cdxiEMpeeSabXTLmPbd1pZxRkXkFMLmpQZfsEoZvWcGhZYdYFRWQndh",
  "key3": "3N4t92cAdnSgrfHz92pye8Y19FmBUB6wwMtayXG2AKHAFwUzaM9Eg2oSs2uBuhPwn97e6g9wruSFvuq57HPja8eg",
  "key4": "4zf95SKhd1JDiCqCD5RmcCbzE9F5CFKBGoWXToFh9tn1YBoMc84paqiyEi9TxrqWXhpq14SUzRDEqJYriEZQsRLp",
  "key5": "5PySS523fakTPJLwYj84E1zibwZMs8srgMBRna9ZRcbpkQDJ5jpxNWboMJGMp8LvVgMBtB31aRmnYy3JoSqHup4r",
  "key6": "2mZAb3KXDHDdfkaA3st3fw5VkuhETTqerU4dh2YX977cDfFWtTu82cEtJ19s2ck9z3hXxBxDBz8u6QFrTmPRU2pu",
  "key7": "2249ya4CxgoVTHip4TtpjGvm7NVArg4QX6tpnzYpts1PS7ZFtnxkZfwsDRz44aHpxSXZQbWPMVQRrufWmrPeiXMQ",
  "key8": "424fu9GHaGdLZXUmEs7LBaMfw5PvqxdK6na23vPYqeVcyNxmUxpZuhpdvzT5t8rMPmFkbKdSJvymncQNeTQ8L3Fu",
  "key9": "32TifgHCMLfZqWnd474XmgzukvByJ2a9DSnRUeanht6rQPCB5BB2VRFWZvFwHKU1TAXgW4FjV9JaYGec3rw7RHmh",
  "key10": "2AZhr3GceW8jfCquT5Knwkg6JS1W2xyHqbjNH6tg2CUgpvqWCoFG832XLpwBxpjPUiGuv6mKua1gtxUkqAEbDtJd",
  "key11": "3o8CfqxBFqEReZWhu5iDWoLZyAzW7rhWw1MB54mUM6eHUxLdo6ZAUkkHbXcL16A18szeR5Jp2AVd6caxijdgDeNZ",
  "key12": "5fkVFdF94Vpg3D56p5f8L9WAyLBWcAMjuvpwhV4iTTKKbdNSbxgbfXm7RfBi6CkXKamkVVLB9zkJi9DkKnRjx4DG",
  "key13": "4UfLzPYpLptEJghHKHfaiXpSUbL2aAEZkW9AkTLL3YKtA9WLTCaoi8R9keqLHY1B5uRzLvzZqhBRRQ5kEnqdbtQA",
  "key14": "3tNX8QeUahaWPkH2WHvF9fSU5rdQuwyYdx276uVMcNL3cGvCHbY1XKCM7dQaB4Lna7HUCFMsajsm3kJRdJuTZ398",
  "key15": "3uQkTwtaJJwDmHKiNV2cX9omUaTeMezsypgkKJMBTmr9syjNjaRMjUTCC5ZHCPhV1Sj5sMHG1eoLWVMn8wR4LiFw",
  "key16": "4917osM36i6K1LqTxmeGCLRc1oD85VcUcG7y8wS6TrTYc6rP3R6yX2fwbojT6zrFcg1S9nAy6cWjD9BD6AXxx81G",
  "key17": "2t38b3ktLmrzD6PFkNRbtasN146KkE7ye55RGn5UnoDnMZcKQUemduFd8VwrpGqGm9oqr6jtJrd4SwcLKjH7aEQn",
  "key18": "CbzdpiackXAd2PHwmG4nrVBg3e6EBguEWadsWrmE4fQhRQQjanG7DYDNTuqHuxizJySMSx31VdqKTV2fs7z6XRG",
  "key19": "22SbmtPNR3UFp8KDkEmRH1aq4saF1u8vhrFDjkaJdKwJ49QTbTStmfYskrghXh3kVPMiEYXrdee1eB9wxDaEMmyq",
  "key20": "251EjnV6KHN5SSEcNZyDsEVqTqWZpVszR2kziWYXWsYmYpT5KAgNLb2sSx888SzbHL23kbznZ5fbAPR4GFWQBB3v",
  "key21": "2bHJ9VppEyxrnzor12XDtow4Ni6xeeKSmikL5Rrt6FGqBuL2aoYPhstQ3QhoDpWQESdmcB1GuT1e8SuJKtX2fNzS",
  "key22": "2hxaB7xFG3Nci8ZfMxyZRkWEv34yyeVkH13WRvjsmt5Fj44Ds4LJmfJPZTitke8B4oARcKg8wyoqmddgfyy8WdGK",
  "key23": "3zkzcBUvSojG8hEegsc6SF1kUiB17SfxaWgTQSW5wA1kYW22gci86HL3Fmhp7xe2YA5rn7MqBZ6QgBb7jKAgbSae",
  "key24": "5fWndaSdEd5BR7k2ZoiXSdmotL6jB19HqQThi23njfzRQVcwUmjCsLZUV2xXF2SN7fhYf7nsFy4g2F5M29CJjh5V",
  "key25": "eBZVedzKw4CcG8mGPF7sNvPfYAHdnN7xT4rGHnTyh3PAHeTP2gRYCvEU1Ar1Tacse2k3G5sMY5LZxMUrSPVonk8",
  "key26": "5skDwKZ5o25HEZ6zjzW1j54d1AgMkKSASBRCXWeQgjMVfdGSzsnmpekZTRzrHm8WunPPfXiwpekSxwjo5gGu3EFA",
  "key27": "2qREo5zBn29PnbPZaXrqBPzuQicHHBR5jT7bp8rhQWe39RFixJivCPHiRsCQKYUoPVZBPuQZ4PTBJF2QCok6sQRx",
  "key28": "2pK3LuXXpnCLUrLzUwf3jswLTBysankta8P9HnMbbxBc5zVpu3sHD4vH2iywadJc9pPeJ3KAyagsMDvaJBwLKGyJ",
  "key29": "3CXVHXYM5rhXqD89Sz5tsBhg1kNvykf9eENwFXqn66uMbEHFxdL2udGJGKkuFwsvnQjYxXXPNaG3gUtbdnSR2mSr",
  "key30": "KJ8ivMvwYYudukK9JPXZj6HEAfeoRmQRQyJ4fNUVRySs22RK9FMK5PidinFpXfuzZH1VniZ5KMnN2dyFMcpM2oq",
  "key31": "32QkzhJzZoknScak9H99cR56YkGGfJRiD97vkgKtSzN4RceKQZZRfZMRsRUqbAdgEVSYtD1kxApbBxuv4yApXrro",
  "key32": "2QmGJGrQSGbBCLawACTURzbdzuvPzE25uDKnS5ERRRcVvoPbRDqySc8MehGdztWdtUpDqshtxGx1rsuBQx84WL1n",
  "key33": "2ktujKEU9KcDNaCdSohSnbCJwwcHWkDD3WAnEXQPkbaCWKGPVjbuuKLWEFpkVtRDDQRUdcqCK4vK2YDSXP1vgWe8",
  "key34": "2ExrK1APYDBREdEYKPZEAi53k4MaxCq7WsVAgfNViA4zwPr3Qa4FpgVgTXyHwkVPMDGcbNtyx1xj9vtZx4hJo2TR",
  "key35": "3EsczuLUb1pUZp3Pua4SrSW6qT5HfopzBzCiMzctJqVEVn8epKaqEfoHepTcYwRSVT4srNGT1gTgUk3WuyrAgTid",
  "key36": "4BoZ6rrAPC1bk1aZoqj4QxDjeF3azPB1gXjSFSf31YSBke3i3rQJDuBb3DG5A6nsrLDSMbgcpiEG7KEbpSa1oHU2",
  "key37": "43uMLTCdb5ZjKJAgaGkZiKQK4WKHpjgzYahjQ7jv4jjc2Db3DiiSDWgpws7CaLWNvm4bRr1aKMcKMEzJGh6mKnZq",
  "key38": "3sQmUcyf5k5JDvmPP7wjPv1TzEPU4j4mm8zu7V7tF2i3bES4fzNLAfydCTMJQEkqWvtqeQn2is3YSbHg27FjqbHE",
  "key39": "2ksnWT87Um7ZSWixQA388mwM8Nwr4jx4XQgctc6beJYEFtz1ibNY5AKZTLwJKy5FivjC813NyuU8W9kkMGrH3jrc",
  "key40": "3eWbAegn5R2efrs7DWBFHCmVe2YGaQquv4G2zsb8uxHAQKJxMjfo6MnnTY55u7mXgc19A6UGPhim1AwGvBg7JVn1",
  "key41": "5uWhqknCdy5D3cxwojWEFJAoryszRfrKKSQ5QUi4Q3DdvZ6QSc5cYZQSEDNNiCkjvJ5onnrkJBhHJ6raJ7F4atBh",
  "key42": "Tbdmo75qEpRKNCdiJSsaV4mQAXzvmkTFa5ukxBAZuDNWocx61LqD2SA6hjqFBeW6btwob7zN36iMAcYiMj4QTdc",
  "key43": "26sRq4nQFM4XZzqh1ERFVXYbTqHCG5qEL7pyusFKc8SdMiWMrV9CBHWb5zgbK781M6od2v3dQSMsZmJyeW9guzYG"
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

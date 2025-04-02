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
    "BaGrypCCXH4RrppPwzGGzx14eZfiYPyD12bT4maRqbfvRHcjgDYG5dmoY91pU8WV1wgQqhnAre2DHNf8vsXC9yf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRRUwGNND7whHefgXsoTZ8AT39L6MCVKnNsp74ZEeb8pKyXTtRQiDLmch8qKEFcoypcZJ733AZ5XbRfRHNTq7VD",
  "key1": "bdxhpZj2LZMoYRCyZQPnczcESoKMZ8kTLyUucPJ48jhiG7PhbQcPMp3uEgMS65HBqSGeamRsBqc3bxzwn8vUcNQ",
  "key2": "3w7F73HrJwSWk73LbfAZ1XKdD63E5RRsjN97VARCqFQ2r5wHP8WaCzTh4vqtgAxxvXqqBXnwL8Jgi5bGBgyBUaQV",
  "key3": "3oaPP74P4fthftTHrCwKQRsQgPt8hRY3k9zRnvyMxa9Kgm7mxbniiHD6FBUwbsekDoTzcTHeqCHWzpREUyo5Yhj1",
  "key4": "3PdcyCryk6PWNAT25FcyRyy8YskWWXaL2adcf8JtTtkXLEdmV6DbNzC8V1TQNASAua7dKtRGDToksHH2w3BqQ3no",
  "key5": "3AuPYtb7JXLAuZ2J3zZKYbJGfiETVDGb6Gfn8cxxqvfkmGs5nHPQGM33NuN5uKkNq2QUYfA5m9qRiJ9GwAiA8yVM",
  "key6": "JKkCFifwhW4Qkp4KmpA8WCWQfA9KRaoDr6CEB1ANq64TczkdhNH3A8KqUshSTwfnX3mR7JtwaybAUiGypJqgYH6",
  "key7": "2H1Xu7ncNUWNKW3Z2qhiLBvXx9EAyH39vjNaeMEjGJ7MqX67vSRhAVYq3taX3GZHzES6Fuq35PSWDJVYPDoJMx6A",
  "key8": "5yALd4CwRzSF6MHgXe2VBDyLT6RpGVBBZWxYb94c7XwboMKRKth3n1cWYLJdwJZCi1rNisx5GnCVcsuDVCwn3hPr",
  "key9": "5N2EfooU1WW5uYKUjnLM97bLQUoTJFUoWkASrwkwuSF9QPDNP23Jnz6NR1LMY2nfRtHp8XtbHR45vdZc7pkiErTn",
  "key10": "8khhDM2NsaSUrC4hEVXHEcMkRSM2ubUq99zrTXTT1c1QQspgN96KAsXqKa9TWaxEirQ4c3PPB3nrCjse1SRsQZi",
  "key11": "3r8djaPaUhWyXu2SasUjRdokjeutSSzMKWJVctPA6dvdngBhKDKyNR7ExYsDSZPo4Z423NpY7zX6jY8TvzdHwa99",
  "key12": "3mNm1aczYAsAjrf2HTPg68idCVGRjKfTk7gVNMnGPbdCc4CtbzrtVKRQTW6SGgEd2auqPZDTNGJbALMU7MQd8aQA",
  "key13": "4ZTKvzVgasDcpMAeeV69LSYoiYLx2NW5RjykZJUP4jkadD5hgYVaNWPAt1j8SYy9w1nzSs72D7FKKPyHeErxFhWx",
  "key14": "1Ggc7NtbFafLYYj7gz1Dn3wC63cLUvnXkwUapjKuqvcwaT511tHX21xuv7sfN6scWvhpJFiBzCBewRnKWgokJPw",
  "key15": "47Sb4ZHPeUmC9kZTqktjv2buSQser2XWMxGHuA9PWmxpFfQB1j1urmuJEJteM1wFXGVCFYYvZtvyUwEGyu9mMhXG",
  "key16": "2j4Y4a6749CWit24MvsmfABhDHMHsXxTgrcn5WxntxyT9BSLqF44da4X6iYTBTnEgsKKDAgumCJQJuWtGxfk4f25",
  "key17": "5VYSFYmw24KJMTs2pgLqQQmEQCd2waiGPME9VvgU2qAWxxPoZN8PaGyVFGg9Lc3yEKsbH1RnoBo5sw2ccKehRW5f",
  "key18": "4QYumMtHASF67EXTHJvWBt9vq9cQ356FEd2n3khAkUUpS7HXpfLMTaSZtro96ypFQ5yRBsobUmgoUB667iPanMaY",
  "key19": "3iv2VmooPGF4TqbeXTECkgVaUd5FxJDTCoz4c8oRjGVBbceMfHCqxraZ4MoJJpem5ELTjKb9DYJK89MRXxWpLk9z",
  "key20": "mSuEroUTzxoMg2yDidk7pQ8eA2pHPYeWGtxqtAJQSHmDq4CrcV3vkv2r1cGADqmdMRjUfQiEFsBT3KF9RYQRgow",
  "key21": "2Ljmfh1UDpMtU39wi7WGe1JvQP38poAHi6ydw97ix96v91E5X2rrmw2HLutc52CMdaj23aVYLQEaBHaXo8sX9iUs",
  "key22": "zjmsStAfPB6cqD7LRbiU43rSSGpYyySoqHsEvogkPBVK8qcut4onK9b27eqnCArxz8Wrj7y2VHMKB2J8MWJREfo",
  "key23": "FdVRiGE6m8MBXL7jEHmV9fL5cVVQeBKn5FoA22WpdfTmmG79rBtb1kHKc7XbM3Xb9Vp4gS6aySPsBTtnxBf9VUi",
  "key24": "2aQSB3JhF4fuVZsbGZ6fzFx9FmX6nTUCfULb55PsgmqsqgSmRmSmPUENUPeAFxPNT7LuqdTwcxF8Anr6Pb1TJ9Cv",
  "key25": "3io2MM9pNWfCe6SyA1eQZE4cpoVw3C82CyvsRHofw296fo7KMq86GaJ2NmXcidyiypRPFqJtgfqVxcUE7z8o3T28",
  "key26": "4vvPzjEyyExrmPP9wqq879JYVuCAkVLGcXZPDBJrmbPAKD3gz3qMALQVfDGirsuANoYvAZJi7aFrgN9DPLMDaR1H",
  "key27": "3cnuPYBN843BK1CVjcRRLb29phPEJtMLkap8b1sKsg2ZAv9qjJfb4TD1z1LLGMwdVQ2XPtajTfivVPxGHPtfoet1",
  "key28": "4EG5mKCsiFXSBxpgiYzaR3kzxoe33fLFZYX4CghB4UNwbJsTC3dA6frtY29ik6oq9KaG3tiXSg4GUiZfQ5bzKnPH",
  "key29": "39APoPaDWUWAKs516kLUsMPn4fncrpxQhotPUGuDnMhwdadZZyYvrEc7Q7SD5G4oq8dh3BMF6FUFtS63t2ELfd9D",
  "key30": "66qf9V9vtYMSbWwBKPB2sTLDaqBvBmgexovizDKbXqEVQzAenEP11365VhERxAWx5ybiTr3fWF2BQJEgxaCwNPNx",
  "key31": "CjEn8mvFBP8uZc49XPrvnxCSLJESjjWMvQAYvEdQ8zWmSASeVReCkaujyEqXnj5KLDqsvDqnh9aXth3oetnGJEw",
  "key32": "4MnefdYRAEVmgry5XeU9oGLnByBsMk8gY7wtJXCFApAcytCVzeUNBwGewZeVfBBXFF2WvKCGeGTWgN9gp6tUmicC",
  "key33": "spyPTVcraepT2LJRRqm6PhWkLVUamKB4fujVtYK25XzqwEH3E9mjBoXRfytem5UbCK8rC1BFKdDzayRMZ1h6vKT",
  "key34": "mroqgnek5axDF6eLpHhaxbvADwvQmWSJRjATEn1vBKC34zfYFEo43pd7mf13iQ7oyBwhzpP4UU1FziLahuKm2ah",
  "key35": "2ZEC61QZtvp2GtQDgcw6foDF4zjz4dW2j5d4kemmLoYzoWgAUXjuACbM7XWXxrEw7ZSTM1i6dESszrvFL6L3Ejn1",
  "key36": "3gRB4BcMQLh8CSxfkJKjHLsZY1FRmW44UsmZnTdtSvxS85aRqjqH2fZPUa6MwwxENey2J8TGMT9CSC4n4FcyQfJ9",
  "key37": "2uN8emP6J8aie8WVXwqwajksRzVn2JaEBT8jmbpzmWeQdoojSwuu8zRH7SZW3efHFpEf6d3gviKgoHxydKR1Fj7P",
  "key38": "32bL4nWi1k6uWqkVxW2BQsFAvfqTDMNmAx8NBoBeFt84Tzjr5GDiDottvH7UYizjwwpdxAGK871xmjGPmJfaZfQF",
  "key39": "5x869eiiCRChEVu2VEao2dwDTbcM1ptcv3sFWKvowsLj1cZy7VXoA8jteg6FiqpPXxXAfnaCSeoELM99eBAnE8Pv",
  "key40": "2LGAWZTs6MY3DhdkUjGgazATHvjciLtyUnRjh85MF2n1dMvS2LfaDtAtYXtQKPqNsjvVkKmXJrWwDvMxd8976psc",
  "key41": "veHcG68ezG4fjApWP4Bm6BJ11NCUuuXJFdTN9qrTgaFz7j1a81gDgitCsfhww9ZNSkEwQaZ5QjJkLUX791QW58z",
  "key42": "2tGGdE7xeTXH2jN99VEf6uYGP22vwVqQ1QXmxcqNL8aLQ3gLD9NRYx7Ab8MWjXs1cuaJbohaeVosUuLBJZWjwxhf"
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

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
    "3PqqZ6tXBbE22DoFYgs42dfPcA5EGGMp8d4xgerKCNPz4kNsoFHKP98DU78BhZ1UGHBkDqfw37yvhpRCsTHDcXUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAKHMoDJyQRR6QQTntFn73YJXVV4UXZZyKxq9Y4VmSyJ3VJm6Z8uhkQr6VcF24HdM3SkyoFExDyjbHYbZcd5UF3",
  "key1": "3GgapztLA2AbKKhgVCXB1nBoASv4S9DZh7XYaGrHk9ivx13qcJgBRRwySMz7XJWqSu6pTjQn1NSteTXSnnn8Z8PR",
  "key2": "5KQZBKg2PJnNcJuBiS1PpSvsAQbqCQDxdmNMLaRXocVfv7yuYQLgm3MaVx8ypVb3qrUaDP6X3HPxpfoPE5S5vhhY",
  "key3": "4EJrjst6nMPnqfE5qLTApPf8ZGCgvH79WEotNkht19D38ij5Z7zBz77aUZKxzFKNRmBj43C1hnWBqu4yZBFcwZJk",
  "key4": "4a9fkCDMkWVyENnmHLEpiNYx26Lh69iFLx8Pcjuhn2tX7M9gWy39Vk2kKY1drxpwMonsKCD8zsbsJaufRcN6DHUS",
  "key5": "5ti9YboVFPSg5sJN9YpiNvJiR5dC46btBceqPZPWM4thGm7DeZgE5ostG8rpSMF3Hb6ZvCGFHfamdfzVcwC8QXEA",
  "key6": "4wMowvrvCdrAxFtyJCdwEo4GFEDTNMsrAq6Bu3QeBHmYXuoXcTH4ZbCWho9e2EFJ9CAy4gq8e5SVqK7TBWw992na",
  "key7": "4RPBdn6SVEvYqKiAcfzPoHj6U7HVRjHgB4D7CJqLRVzjVrB4SCo5QzNSEmCaW1sn5Vo3BptVfEhi5hfVGd4PM3mN",
  "key8": "4wcvtY88mCFaE1p3Gck7toN7KYty3LsFbQ2QeKVKP2eMm6QemMR8NY8BSN2jVjf2J5CkTPffDmsEQVQbagmgcbhJ",
  "key9": "46uh3kaZN1hVq6DeLzLDwbF7W2nnhqLevurX2XcBneRV6ZKZpiFUi8ZfXsXR6KdFtpRB3EA5YR25BLP3DRdqbGWr",
  "key10": "4qm3217sUkds7VvqEn8y3DTwRckx3mnrUYLyq67spV8oi1uEeEp3Aquyy2q9khdHC53yFDYEU1X5yp15JZSfvocR",
  "key11": "3YwPXzLcgRyCEemDkGsmaKMPj8RHSrtHCoLWDnYzYZN2KHdprZa8rFAh1nRArhC7ccUBDgDHn7b879DPfsyiqJaC",
  "key12": "2gzwwyvGyESvrK8qgUeXZTBzmpkiSP6EYAUU7MRVms8rJbaQnhk1NRvBnE18ycGfrZG1d3revfpVv9PG1H2q6d5T",
  "key13": "4ovHfENLBMsK42ADoCoVexQLjT4Vem2gBuYSLCaMoa1sG9f3pXv3i94AK6FaywmjiLHHypCkw1hfcTfj9oE8Vt9X",
  "key14": "5gccYmtML515nMCyCHkPzirMARsNimbYsauvMBqXomkyRAapGuoaMYCxrSxwRESMKVzfByAEycj91bTAsXA5HNjK",
  "key15": "58dkvRfxxXZ4xXNYJSznTBWsy5yLEeshp1rMS4WvJJJGB1teKKT4ewUcXCN95s4PqJt5SG1GeuHVVUF73UogJiCD",
  "key16": "4BCRu7QMkQo5rxYoTwPxdLXGVhD1mqfRS9jbWESdgTgVzWRkteNzcoVMC6ccbGRE1j16cPkQc1DoGgDF9i3Rrrxc",
  "key17": "Mgyi6Vfg6x44SAQHUZeNiThb4C7bMNvU3cbVU6GBf4Y1oPZhRH9ZTLLucTivV5764r9m4qKF1Ss4L2bRSi1i2si",
  "key18": "5gYg2AcrM1cGuxEoa62TyZ7fGmvkHaEWKyjTu8gKMb514fYDRPhchxuETvsSTbYYBTSRQeE6CV5JPC8CVz3YMCTt",
  "key19": "3Jz3J7WyuJvMVbrLmLMaQanENQAaiic1cNrn7VjGyeGiPxiRfKYoXwq8KtoBnBkYiX8YHLsabHkXxMMPWEBjo2yh",
  "key20": "2JwkB96avbKdqqsqpGyBh2HqzbfzggTYr9YggiDTEuVxfJPLNDLGVpG5SvujZVM7ocM5vbiqeRkPGFiBAJyiRbEK",
  "key21": "2zMWvSeoSHx8CjsRDxQEHAe3K2oyB6Nv7C569RQGnFkCVHZzx2Vuap9JgUBzjDb6tbrjuXTt6L42iyziX44Cyx4L",
  "key22": "smT6gxEi5H8PHoJPsNwuvgrKd6HonEEs4dxtUBatmixJXK9Jd2LsrvHy1AhfD3ksca9QXxyzt66idMACfddct1E",
  "key23": "2B1gZ13hTNuvDA66dSdB272SEhipsYGVoM4Vw1kcQRUKZL5NFkB9Nunghm6iYDe7mWwdGTrCy5Wet4cwQvQCWttx",
  "key24": "2QZPEvNEwRy7KQbTZTEKziL7TZHBij1t7mZGVVzrwc4tNMQyw7g7irE1bLCh8uRCWWXQP4sZQcRXPfsw1yfP861y",
  "key25": "2kn7trDgLPZUzB1vBcYSYeLgw9vfSpKQuzqRt22JkPTReE69GGaU6auHCPJWid7cKUQvv8zUsc7Sakh3HEso3aq2",
  "key26": "WchYsxtGcvVMWy8dfYZKSKouKhf77VwTQUoEfEacsSArKn9kidQiMFEjHK2E9eqdaQ9LoAsS1FoYkzXoYfC5P16",
  "key27": "3ZK6Ksa2Z26pDdu2Mwk8K8Qbg5CJybxuJ9PM2Vp7wmTjkbavruNkEF3pJc5bFCBoqNoCNtwZKJWd9mSaGRCPcQLz",
  "key28": "3aE7TR2EkBASsQtLwvoyMvo6RZD8vGeHjpyt7EQReo5hP2vQb9n26Vnpw8oGMNKhmK5JMfpm8ikut5JDrmzZxrn7",
  "key29": "2PcevkXYMcCZeTBa3gpF87WAv66vt3VBdzUan8AZHW8o3i8rnrupkpWNC9jnvbQ73BYqHSPFgHLm3RrgcBsbzUY1",
  "key30": "21unytUcJxsqcS99fWy7hfUSv5niiDqD5xCotNxVfq8tLJAmQWKCM4CQBBowWKK5NyVATKnwZWabjStNQQy2SARh",
  "key31": "4hFUN4Ns1rebTuuVCTGn4fmSbxqDBfdeiXz1Scq9RjNNTDJQHBkRQkYvKitqaUE1agZtbcWBfPb2MVxz8UH4A7hf",
  "key32": "2N96FzZ62fiHbmz9hnt4mWrMoE1cQ17k7U9GfoNu7e995CWWfKBtPaxoX8PhPE3YXK4Mi1cjvzc4f2gQgQfdi4Q7",
  "key33": "taDSxuHWp4hz1mz7uXGXDfT4bCaZbsv1duroj8ifd9tiFrz513bghA6E2KiT7aAo5GgQi1pdnYJWMEPoYLuTPL8",
  "key34": "2gsF98zwUkVHQKa5TX7Hmk4AddDz2GnLH2ngsSJBu3ECC78pcDR9qVJkfMr2ZaTNSXom2RBZCTxfcTtRCv2fLYpw",
  "key35": "3uaWXFfBa6rav4LNnAAAp35DdKZyuEFhdvxdUkK4y3aawPw4GiJTGsFMYxpJX6yCgFWEd8cJod6e8m7Mn5Sgf1Ax",
  "key36": "ZGR5VxCLsQgBpGBQ6vF8sbdfUcjhMKfzyVNCT3M6KtDPjpJWbDMiky5QYN7UmCRiFtphbze759pjTXm2vWnnkA3",
  "key37": "3Sbxsasm1rbXKuVt8D3R6fvR6bjspJkvu5oUi2pqiXpmi22YNKAvAgJxir6KhfFj5Sr6RxFoWHMtwEXBRnnajUko",
  "key38": "3rny2T4MpVbTEXDf1HCRoTG5cQ1Tx1tpUFVEqzvGoewY5ceamX8bT4m2bgi7GyVdqm8BuxPPvmSTDEFjNbz2Bf2j",
  "key39": "5FgS3Y61mYdSsmatzjkh9Y28wKDUoR4wUgUfg1dwSsHh4hYhdw4CQH5CtzibKnHH58nXR2LhMD2TAMpm31LzJsPG",
  "key40": "4iHxKAihaXibZVdVKRBfiEgQRCUyPPFnnotNjcAZHjjGSxZV8ktmh8HExvSuvxaj9xYiqwdB6jpdox7CLUNGxs1a",
  "key41": "331fv5eT2tpQ3iDvAGRaTcHBpid4oV4nGQeY443n2X6GTVszBWxPetqhwWKquLCtCnJLGxQwrBXG2EnEVEvSVJPc",
  "key42": "5SUdGYKzBj4pmBm54VkPVLV58iGHsj7h2XzfeUUD3C4dccVaVYUK1ia77g9tucrn6mMMCaionLZCqAEreGHLLAag",
  "key43": "4QaSPjWKPpBAQYrGM38K9pmZmXiYXutyrUwMVpLhRaU6W9rVbbdEB9kodLgPgLAmAz63zVmL7wsY98N9N8q7Yx4R"
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

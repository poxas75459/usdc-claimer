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
    "5GTAv8yQRBb3kE1ZnBYpoTNdenfpvSS5p96NjbeHHZVdwsNFLUX6ahhbCmhmA8cXjGDAfNnt3tHkrNVHsmCAPng5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AdB2i7xu5eVUNuqSaczom4xdK5WSaE89xGPTSTUN4CLHP7gZ8eFzHEJBFr38ZoQEr7j6qp8R1bES1WBnkAbba9E",
  "key1": "4531iw79VbCrBa6xiEwytHpcnc6D6YZapvomdHn8h6DTtKnVmDDRRCETPCELcNB38Y6E1ZZ5X9z8RbqNADUeXwLG",
  "key2": "zVmvwcLxDDKTJkougdndTWkVTjw1suqzH8CoK3emnGDswMBNSpXj6M5Ab7oGr25UtZXG9o56hqRLwyKFmNiwqY7",
  "key3": "2bgqMYLddW28rrBu2wqSWqdNvZAkmsRJ5KPX55uYRroUCkryQDjguXsuGWKXvcDpFyWknC8HC2NSKbcmT2drDYBL",
  "key4": "5aaSymSyndZC393vv8Wyk7bfxrtkjgzRxxHNUa8RY4risvDKRAxeSP2yb4uxYZjHxDGQptZMPQkzwhN4CwsPqRCB",
  "key5": "DDBv7AcfSAQd7Dp9ahG8yRUyidfdngqPre2Uc2NbGvPJbnGaz6X826TRfjkpYo5q9YQeqfXpom7p4MfUyx5oEaj",
  "key6": "24GwC2GxSVmva2GPzbCUbTXUfLxg7XkgjwjrEVFsFchXtXTPuukjCmYQxvfRiiuaQt1ngFdk7EgT6g6pvSM17nZK",
  "key7": "5RU82xfRFTVTsbbhGHBVT8yeTDvr1suzmyo7Dm93XX1qUwvTHycPZ755iy8S5aFr22J5DpeR1tPcqDPg2AWeqSP",
  "key8": "44Cgb6CkfEmMga7R8HLYcVnMmQQbf1tsTvsgBf5nLHeXoV2iG6kGHEiaafffb6zNSxKhLpZSXmukuQR1Wf8Y8Apt",
  "key9": "3LX8pRtnyqQ4wS6AByza17o5614m9ysLwFyRvtc2HCBVrE6nLzyCgzqjtYzbxdGFjdWt7MFP7xePn2TEDyNg1nFu",
  "key10": "ny1AgSrAxxqZbNNCGZZZamwS6vBVwLfavCVGPw8SWVGaY9xGik9MXbzPc3D9faBcTf6CihUWaaXgyTJLuNpzABn",
  "key11": "5CWFfSqQbR6jSgi9u43QGTsLiCeDxouzzBh9Rhso3zjoUxSgk1udFUPzhby8uyyHy3VcQZdUWDzj2cTkpthKQvdR",
  "key12": "LTqwt4F9bdZJapbHg1cUYxb4HZgGrsKeHXUwBQkcCizre3wQNxuMjscxx7tNNtWNUPRjDAvNHL8DRfT7mSqVm7H",
  "key13": "FMYKeXvXjcDmSPEc5GHCxNFiaeLo527UvAoy4nPRy6nBmYUyYVzdKAfLKpnEt7koqjgVfAUmdQjVQBnCPccex45",
  "key14": "5EEf8cKyQ7bRocqyeEyf4aLeoWzgAZRpGau6f3AAuiJbHDXVuU7DhhYdYsTnwhBqgvc6zE3WaAuwGBU7msh2JvwF",
  "key15": "4yvmBCecCwjccRe4szEyzBUA9Xie5bGtA2Xmoqx1RM5oW7jrnqQUE28rRoQmQvbkuP8GV8hB79tERR2M7h5sLhyx",
  "key16": "4RA1kjoFaZyeSQoT2hczgDmduqKJ3cD8pSTpusNF6ZJrviUqJeVz4LTcD7ANyZKfgvoZShsV85yju9CMHHk4rS4Q",
  "key17": "2UX5d86v1e8NJgH1BcGBenEiNZvCx8FnbBPdURNvugwKmQfMBUQectUu1jUaywdnqk3u83VRSvFtboyDCpghfioU",
  "key18": "2YM4Wkg1jydnZyiGhiMDnARsrFAv4Mnq2EvwvxB5MX3JfWsQAVxAQTNo6VncxjH22hstKMXKQuCCAErLSbRo5ykD",
  "key19": "4FausLruj8SaoDyGXXoVikY1ZRnsexY43gduq4dCkqQ1BRXMRpfv8yKsmcstNAL3eGPaNGCEu2y9MH24xSxWppBY",
  "key20": "2H4b2jrcnRAJe9w6bgRE8pvfYraBBadRhmzaU8Fp44vvWnT6HJ2HxGdApWqRyCPmRnuYuApSFhgsJdB1DxU3PPUC",
  "key21": "58AGqKhGWS36pHxBQEiGeQigWTJ9jwGV64pfM16H9MCZ1mJ8rgbFzVVnBMFyahCcCWcyRZXzrjkZDC4GL2gHvCCT",
  "key22": "Bc3mzPDTTjq2aY4MMRLyS7AavdXt6Tp1e5CziY1GzuzGvezePTU7MJVBTtPnHfrqm11rE2UiazheTk1kHa4QHnk",
  "key23": "3JxUZ1kahjRnHBfvJkq79MYiwbVZh3Jv8ABadtNszVFZsFGKeM6r1fsCm6sMbETqpQ6vht6r24DvHJTF3F5QSBFt",
  "key24": "5r4YdaPvv5buECBwhJzE5Rx4qVMhAuPsP85SwVTqVYoMLQHNkg7sVtSUod9AQjCWNbTRQEnyzYumwUKQRppf1UAz",
  "key25": "55JsNy6eVezcDSeYrd2ZHKB49ycu2vM8rD6qHciddtxVSYBrCtnU6btNwAe8dgf4kQqgimhABVozPYFJxoQrL8NB",
  "key26": "5QscGdxCmkkv8r6n5bP6ty2PWYHGf8BhqUywivc51xt985A8tNeChckTaBUrLMiBWeoAADvY3w8iwbjF2yK7F9qj",
  "key27": "Pxayd8UrENLhhRgZq91NyZdMxzKYXxE4zwCq2ZxpC1j1X9F8SWh9AJ2L1aJAmwRSSwidqYtDGEwd6bMsBHNb1Qz",
  "key28": "4YGuwF84rCFncWY4CNKZVP1ieptxXW4wadbqN1aaJpEbXDJwrmEz5TukpuzMui15FjRhY1YrbSv8SQVXgHy9PeL4",
  "key29": "2ZisX2PquvH4rBsx69YZEufkSobmE6ZaJnvUwMcz7bFgo9A9dnTuZaqAraXFZr2WBJMSyUnBMg28bCwNkNtrcXMA",
  "key30": "5oWcDeFBPtAimb4U8RZrXvUCKG2z7NeVLHgp7uv9NJUgcHBdDmXfWctYzmvP93DVEjn97TBkxNqMzc23n5exjCYV",
  "key31": "4pYPrYHHXg9HQ3pbYJrpQnzidYaKv3BkY732eswCn5yyMSzkMwo1NucgTuFf4wRWMZ8Ltp8EnMhWFZzDtmurkxG8",
  "key32": "4XhopgbznpgzedghzFaL1AWqYkTPqh9pfAAyv6EM5xVRXbd4rhf2W1trdZAJY5viff89LqY8Q5VRH9WuKjX5zYPj",
  "key33": "5Ei8vqTeBYsW2TC4HqKgoH53U2GHLbE6Z4q4u4hUGPorZnZN4n4P4pQCVqLQRcSFEUV9fKXzcmwfMs71mr1vQ4Ji",
  "key34": "5ELRiWTGM7JddAej36k4R41sqnaHEe7sMT6xmGBxXySszMJ552FVVoKF21Y5pj5Uv7HLZ38iTVKNBQeTwKhBrWfA",
  "key35": "3zk9dBGVop1DGxt1pomB8mHDPEk3DFQ1P8cxxRp7BkSMUhKavGj1L2zifKeRDSNFBqEDjcP3XQkoMATARX3wxuf9",
  "key36": "4Gv53nqvYetsLtxu3M2pYj382hQH2Typ7UxUzPp7p8nadkeXt2RSWWwY9Sa7EXRiHGnZfMw6kanMgza4WSQ4wTbd",
  "key37": "5xqhsyR2dtkjaB9b4wBChpy6qRuvYexeP7jfAhRsXMrbmRnpnpYVcvvsoG7k8c9pZ7tDM8JZpivJbxnw5tuxMNCF",
  "key38": "5hXzkEz5K1K9S5KSkr9YdLcwjNAZtWHSi9sZDRToo69k8Wfm4zxTt6DmgVbTD9moKTxJLp44PPsBD1rxGhDoHKWb",
  "key39": "y8jwovcDhP5gGLJirpB128LceVg58FZ7duP9jMu5B3BvdXGL4RcSMvLSKH4TifYUGtKFDVdqbzVab2K7LJauwJB"
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

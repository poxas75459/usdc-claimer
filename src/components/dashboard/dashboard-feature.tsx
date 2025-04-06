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
    "2mRK2UYkRqeEYTzEGwT47qhtvsDbSA4Asv6vMti9j44FWKFisVFv4HKzmmwB33r4ZPnY8EKLN9an1S49TAXiJeaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "617Bo74kJ4XXGaLg7cbbYo4xKxQPoQpqoJ2THpvuxpbr9NGVEEmrnqqJi5nGZCHoXCyE4trUwC1bQhDcbL8VwudD",
  "key1": "4skjciuU2GnBDpJAoiKyaiq3D6Dd6jSgoyeVdiySMwbZrUArcdLVC9Gxpu5ZiM3mZzTgtDeYxtAiq6F6r9UjGnjw",
  "key2": "4TYEcfDA6KiLzh7HDrPVCNNLy5yyuBRVytH6VDT2yhp1vVCafhjmpAbDjL91VXiufig6KLtXQ6X5zxKMYRQgrLPF",
  "key3": "hSerRbztAFGPuSLggptmb72N1SZ8QCkuixP88sbseZTLReAxBpjLK3KtCXawD7RfzuywdUUYNBFHTQiqmFNLtQn",
  "key4": "667Y1BJNaXwBD5grsX9q2E1Zf5LoXkAe8htPWTY1HCWnphxVn8KwDxkgv1MTFf4yR3QNFTby1ezmALi2C9BXcYD1",
  "key5": "5VQuvp7WBTgHAs5yGUHnr2jzFTPx6KogHBm5eoGiBm5cs5dhBxABrzhgm2nhVxC8qz6SaucwKtrGQ1wizcrDrVD8",
  "key6": "oTbGcTCQxYpjcwALugaLyGfrjWncRawoGcUfwSk7iVZvTDKQpoC9bfuRiPnD8CGVs5W3iCCDh3wDjLuEPLRyk1n",
  "key7": "2gwGfdDaEBfJDqmMKtBgqeXREtLwKrHNodzEAViqZyhKL2dECmhyB9CuadUsrgQbN9uHMVUytS5GJTS2fL5HAU5u",
  "key8": "3DiA1rQoyrTANA1MEjhkqx34a2mobbKUdcPTTKEoBpveRU94XdRmHaxpGK6BkHZF9bk9znr5L9iBLiEdF5jyoXkU",
  "key9": "ysRbQkiipnRhp9LbogbJZMDEwH8pq67nzo1VTheNqLvErrSMkGedmM8mR4xr2DWUkB7nVNPCSGKPLZfkwJiST9R",
  "key10": "4ptxZniLsm8extYrrKgPPQQtKAt9aWJfhgS4FwbXSSrUxLFiBMnvLxA7bRvXGwHZr6towC32nSqz7KwEJucoazyu",
  "key11": "3zZQPeNhx12uPGmeHAkyneRUoSx7Jw37arXmTNNRuvcUqQsxxbpR2LjkTCetap9kQpcpvFxnBsj5ipvvNdHsBUNC",
  "key12": "2KXzUgsMiMRTWQt5ARDBRfJ6AdQDfDgSKDcgZXHNGrjaEx7c3LaDbuhRGfhsygqsTe3aVNMGq81jNcKcWrWN23mr",
  "key13": "3vHqjKup5srv8XWAj2eGd16QtWpAAX3K3CqmZR2YwgKu8E9bV8ASjUocReFkNzsrurn66UYrBBdueV6cZiZguX2a",
  "key14": "3CqKPZXj3WTBxSdvYLqDaXmfU1Yv4AESrqzPnz2vsbweeU3ddYGfkbqqVqQSiVGgmFgMr33f4ET1hc3BE2onDmRG",
  "key15": "397VtaajNqCaruocTu67G8aogdgcyPWsYrDfdKvsYnkoVsNwkfbwXoatghbVoKyc9UUN74bxNQUP11yqz5wWR7kR",
  "key16": "61DmFSUXy6HE1JBrv8ASHfG4pNWWCzoTgr6Ga3pF2PbbTXsqQBDAnb9e5WFGaigvcv7sVeGqq2gcZH4jXam5hxCA",
  "key17": "eoomrgqa49G48Eq982FrS5DTfQJjAn5LVjh1FMNjADJLonfAYdRUFSQFyTXBBEocPoFN86CQGUYu1xSy3HqpqFU",
  "key18": "4T6vspZbxqLc9BzYHKtec7Tta6s6sZD8nJ1qvyVWehNgKBoCyZucaXCEQpgTNUczggPVZaafyyh41w3JvVEYNNkp",
  "key19": "5ZVRry3HqfUPWafAyohioAMpvamHA3Mu7YpgY7hF6QFqs634SfjT2qpGhYo2qXz8ftx58YXpzc9HomWkMZnUe7dZ",
  "key20": "5EiPqNwZEDwy6Bw1xsafVLrxnWNiojhfeFwEhEVn18vFx85yWbFR1cGc9FFmTJ99WqZPyGH9XfJdMRcJ3k95ksSX",
  "key21": "5KTaPvZpJcHcZorL84c5qebCP4EThkDpCez4QUeNEAFC3QG13igKvDvcTFZJVNyQV74XGWR3akf8VVYaoi1ckmgu",
  "key22": "2Eh7WDZb6A4fUhMKygeoiyPUZDseSbtj2rLbb8LUxhaRK4AwhC9XpQThmB2wmWQiWpu4e6TFYkxKYULpjHzYimk",
  "key23": "4NH2qdTNivEyKFuB91ncdoteF6QDU31orY9BAazXKR5bhHsrjFDANnj4sJyjnPwyoHsUu98Unt9H76oYDZfhRLAs",
  "key24": "2jEeXtWtbjoviBpDYVX8HMjg8ZPa37CGtfL3TYvsKCmfDRcaKybRnv74i9jgHUd9S7gNMMhfmsjKgbGKR8uFniMi",
  "key25": "3CL2qA6E4q9dK7hKi49LrVRTVrobs3RZ8qe7poj1LZkou9MDt7Wh64fww1bqk37vQhfjPWHJ8XZpetXBjdvccNyZ",
  "key26": "G4b5DGXBShNuUKEP2LtXGovLg8FzxprVz7hVv6e8pFUzmU8ffAwtnCcrQxHL7GMqYTxXkBQdhQYZJN598NNgGyo",
  "key27": "B1afMDyzuaMj1tfp4BRhy9sen4mmDMmG5DVYyW58B9b8jWcBNZGzMfG512Ak1HmV9PQY54Vt4W1qJ7GueNetijA",
  "key28": "33fLzh1ReWjrvwusdBbKwLFNix1sHja1zNZwqcGkRVGD3R3F5Rp8TCjN9XMjDWQ6psLBhzK29yVbxoYqYaCw5unj",
  "key29": "3xhp8ShRVeLCt7LVAfcTrPKUHQYX3cQLMfpPmSZkjmojT69ZrJNinBhBXegEbN4aq9VzZhADLuaqBhgn2YZVu6jg",
  "key30": "w48h4LqdxjksoL2nGdi1mvNyB8Jr6YagrzHvvm9LeBh8EzrEsre8XWJmsHVPZguQ51i6hJKqrWVxd6VxSJebWP4",
  "key31": "2KWT92VFQa5LBPLTx6CkXQQuT3K6bGfdKf5Mi659gJbyGzZLNdLMvTVRYqR3gWAZrtv3rfHLw7iWm8yFy4hQddvr",
  "key32": "4WfzJqwTfdVXkjAPE9WoAtwJQAhMyz1TrTKBuj2skmUUqL23fuLLkUAT8ZE3fRmPJMcMZwgmXXntQECaM8Btak5u",
  "key33": "2rSsoupmNDifHBGGTnyK23DHH1bq7AEwj62LRXdMqnjt2FuBtMWS1LD1ni95u3HfgrXuk98LgmkhGAGtQzMcmMPH",
  "key34": "5vbMHcatthviKqrQ6te8UAPJwDNKiL6FNcAePMz6ZKvq4sKNgjttqFJaPquZEcpqTU4ATNfb4ERUJgBVt6H2sYPy",
  "key35": "hWHL4aPxXsaRgzYwDbiJt5vW13CDgh3i3QLTnAtEjoNgyaWNCo4FSRWsLKH5TxNVu7vdawyCJna8PqJWkLzGc4z",
  "key36": "54ixLpRi1V95qsx7WVWRXvSNtcCj8P1p2LY11oWZMocEJZTqqch4XJDkorpUV5iBFv6qVzqCjsz3MFwU9GL73PQv",
  "key37": "31NAL4ZCayuRhgdh9kMxDiwwBB1EJXE8uGE4JjhCSRRKi4LJkzj5mx58K4CuqTTfZ8Uzk1hkZWEzuo8EEDMkHGwf",
  "key38": "2p5m1wNFt7SatqLguZMWQbf8U87V285F6Scbzsp7ZhG7byVFctSRR3sFZ4NUbPB8ZozChDHXV7mBY8ketWVvK1aq",
  "key39": "2YJTcfqFgQTadzAAzFJVwxMZHYdk2W6eVqTtb851wYtVeR5ZYttykEFqJzvviZSoPG833UTNp1aEDUnCS3G4c6My",
  "key40": "5K4QMpoFss8YEqU38khXYZmeZuXCwkrQSmvdd5rAnj8arJns77meHLVfpZA2ZepBJQsVPrqdQEJudyivEwcbfWZH",
  "key41": "2J3pMa6wX15MWH7ySfeANNQ1LTfaS4L4uM5vBUWgpAjTasZemrWmRY8Pz31PThdHktDKrG9V9PWjVYhiHGTTLkY1",
  "key42": "5Aq4e7V2BgCQHBsD5DkDPQifAXXEGLLdhj8h6EyuqfaEJhqMt62ivsfsakRT1L5yS1iyNYZXCfhnuAiXGdTPSv3n",
  "key43": "2pXAL5MxKJ6fpavmNy52s2KDKNnKHTsyNHxJ5QDxGKHXwq91sLxfb8tk6j1DUpAhkqvBvcjKhTaoL22UpKqiFNgX",
  "key44": "3wVix9o5MLeyZB7gHcWTkkNLuvM12oiNHLf4yNpepzTdFhogE4WYsrgrhitNp7muynVAdqSuTVX3ZiuM7etLU3rP",
  "key45": "5m5pwwaT9F5d6TfJFg98fK1f13KiykDBHRLbELBvtX5f9DvmqnnJfhjwPXcNBemQ9oUz6nxwuFtmWYD6DBE1mZDT",
  "key46": "25Aapzchz4Tz6uQkh6eJ92GMkfGAXkUrP2xJPKBxhVt49f2XHj88XP3frgAYiiVWpLNPZVucQRtAEqYFnWP5Kjdt"
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

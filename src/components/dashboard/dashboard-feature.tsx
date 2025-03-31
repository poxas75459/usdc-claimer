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
    "5Z8mdbdCYLeq4hBEddWEFHK9zTMyosVSskiJT3yyEX99Zk7yKvpQYHCHagsM2nrg6mp95UQ1oDtZRRu5k5VW3gSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m9aqEyo8uc2pa69ZMmS2ifzNahyLyQ9crKxHJE4KUJk8n6HSXcsJXjJg3FXCQu7baYMtsQ9Uy1UWj3EZBPD36jE",
  "key1": "4v5of54YyBeJg6RVM5VyTdhXSGvpCyWxR39jF5MkWro78RFUZ7twfeUDXRuxJ3giUk96yA5kEzixRMqVo1nzqtcq",
  "key2": "3nrLN7sitd5rg96xvdrQjWemhAPGaWP1joScQpKZsGPLaipPCBfjvR9soW7dBaeNAKnDtkPvKpeVhZfVPZWZRRAR",
  "key3": "5UKCKC896XYEitsZQ9p9Hwj5BfPgHR27CMWFTH8TKAeSnFLqAMXF4hHVdUtHXDiHQuvdM2apnnLfBLp6csXjtu1K",
  "key4": "3K7GfhYPa35HW6k567nBBtS97vav5qvHwnW3WXJW1pR92H7fjLsuxVm7WxVj8HQPpXHPEScuTFzHZagtcw35CU9a",
  "key5": "3WfNoaP1reebdWMT1NtNwr3ruZ2SmMfLiGwzsRn9ZHdK9U9Ts448KZSDRtvx1xanrKZu2sb2XBo5heSiMyhkbxqA",
  "key6": "3SGPRENgCLo6258k2JhkV3yur5TuAXE7pBc8BwYdRyDY5FENqZZExbPuFTZx513mUq7Kvr9keXxLZjboS1UfSw1W",
  "key7": "42c6YV3r8EWq93MHF8YFuXPyS6X1nwKakQvVSoDK5ofDDHApC4VnAjmJWmQgibc83sjjEZ2qcKni1qA7yXQVdYhL",
  "key8": "2MGLi8rJBgj9bEL9aiP6eSW9g8akShWVWQfqnn1pqEjHh8CuayvK3t3Lgwp4Hh9a2mmXeRC5ePhwYuwjVRWJGmE4",
  "key9": "4vTJJGfEz94UhDTbjRXYZVN47CmpwswsWGhbBnhMEvVHYH14mrXGF6SAw1jjn2V17Yk58h3475JqVMjesHzJqJaz",
  "key10": "5hokh1RGFLFHAhAN4tjCDYVDhuSRCjbzQ8poeP3sQQc2NGJRnUDWyfFKdjMuuEXMtp4LVRtMFb2XMMUPyuMJoGnP",
  "key11": "3mccRT2tM3ryBnmTewUcdvmpYj7KWLWfZmmSo1R5GFRcfA69npJ86YCZhq1ayddMzZsM32w6dYHaJpLTHpwVt7Sd",
  "key12": "2mx4CWquE19UAG3YqQjTc6gciAg6TNPJhtM79f3uoa4Kisqn7WeBNNBD8A6o3u86C7Yg19WneEEjMWX931qnH5CU",
  "key13": "5EBFs17VDMAdh3htx9wxLb9LfYSFAFZQZjZ2khightKy7tu2SRP1pP3vBk4NB2TbocB594n5HUjC5WFQjPKqpLqM",
  "key14": "uuprfZG6P7zTd5NbnoaXWs6E7RdTJ2hLGrPjyWhZujzGaDwpXKwaSUgvUTyjgdNADvN49bn2bc8cbhem2w1akpK",
  "key15": "kPGzGLM3CwNk83VLWeumm1ecVeKFpjDL1d3CAxjYMuNDx1rPqmo4RZRoV11sF4VTdvonYXaFB8qdgi64X6eW64F",
  "key16": "5S1NXwMVo7Xwwd5GcQMimNyAeaqzaEBmUpqaPRnEKWWdvjgGGuaj4idcJf8ToMqYJBiggK5YDu9CMW6bGRt6U4SU",
  "key17": "4GoQkR5FQDaKuwXVLACpcqhorK9ad3yqLnsyeyupi3D21y6SzFUtKGSMEyN8quspJqLDSBfQmqjBRYxHXL57U1W",
  "key18": "3gtGXhbYCVayU4objPfJZLNCnrABhGExyPCnJz8fyEJS1MZQ6v5RUKmVo9za8GF8P3WqfqwHS9H55j7nXqYGJ7zd",
  "key19": "4oKsKjyXXDDbxsKbttrnyExBNAhnf2DboyytfQEyCdi1pV9vqFde5BJMXyrUC3C7XLiN3wi7A91j7wZY76tiBG2M",
  "key20": "3BhVfX5A4sf1rofrXJ9b8hcBvqpz6VgfFkJTszKwvmp8UeVnzyprPyZUYxpRoRwin8eRGwMYvn8NPxiV4HhLchAW",
  "key21": "5WetwLEmUmd9tqFk9x4zRxJFQsegeWFbS8JAKvGYMyarpZmeL7XFx6xc3ZbFqFjx6cFEhhASVCDZGfnigbwEPPVh",
  "key22": "2WhJWRWM7pXHyc58ZMvD7jJVdGrqzdB45voC2F4hnJvZwjR8dsBMytyAKQmAHRxnR84vPHvbgYCtGfP3WcZWBMeK",
  "key23": "59LLv73dQq2DmC5BXFUQDgVLz6bGp3XP7ufNNQUUEzoPxHA2wDyPhMX9ovzSd84UVcBAbJtENc8enUrWmyEiTxus",
  "key24": "8DNi62Df1DPYFjr1NFMEpWaN6TrgSnskRu4MWw2eTs1tSVdqaLMFc7iYbDDUDDFh5VmmLwt4tsZZPyei36UcR4U",
  "key25": "39teCByJjnhhiUyEv5BbnD7zVf3unoacYbEAEzKqJE1kDdSFUXLptjXgJuVhm5iBk8gnEBwUUaq25iR9DfcDmVVg",
  "key26": "qi9YtEjzSvpHzcN17uRptyzDxyNYXsn56XE2VbcijW4atiQga1n9qExNdrG5HyGTs8oWmfyWXffY6p7q62xDagt",
  "key27": "33Yzc3PfowePHk89vs79WMTAXs9pL8gDeie3Tg6g2MzoPx4U4WBYVp1owAXkW6T9HJp8GVbPV5NtznQP7RC1VvTD",
  "key28": "2vPG7foZUYmJpsTDgk3SY4ubXcvstM4xFoMzznYKAGNedk9EfMwXmCEUxP6H4TmQzMjZiYAtp6jscuViDhagfuk3",
  "key29": "n1Liw5NLEbWw4pLVQTiuWwSGD6GbZ34hfquthzFfPPUVrhEHhpCf9aQ5hwL6PywcQE3EMHUUb6xj9EzfSHBQcd1",
  "key30": "2MKRyPX9m5VJPmh7944LJYxBUeM5My1pBsKYcqknCtrDXVf7HBPhwFPADEm2viyiTtRvq2r6FjTdtVFhhCgHgkj7",
  "key31": "4zHCka91ppoVnVnsXCvEWZixwEm8D9AgMAts1WekJfRJenvDmYYAjcCiyy7ADxMeCA9uns4w5UQhYEguYK4sqdep",
  "key32": "3vZH2Xbjkj1GYKNTrvuzDS8ynkUkTPyyvxmsycqsJFQnCoZBxQEFKy4uvjN5gS5T3kc2Peoztzu2gGPzbmLaEgR2",
  "key33": "26JeBhdyQ53PVjNGNKYTTPPXpsfrVp3NCKhtH4bax9GSfmmJwchWRXESwrHh5HzurWFw9C5dM99r9pdxq8bSfchT",
  "key34": "31MX8QTYSsm9dfMJK5P3JKPwkHAjzLU16sd1kuQTrXBUtBKm6K5HRhBYc3FJzUZMNw7NzEyudwFUyqs82zxZScaM",
  "key35": "2fsG7GLLNj1cd42bnawZfYPW7LqQJBQRLmjmQLQ5vWiy6CCHpDpMbjSb3owtKmPjUSqASmf3zQHJpMn2v8FVCnhW",
  "key36": "4MAYA9J7JHef4uvNyno3ReMwrZRskzNb2cjbrEMmxWJPpu5CkMx1Df2uVZvc1WJSfsZAid5cBvGtN6Bz8dXP2rdV",
  "key37": "4sGCGGsxHLw9esRDc55m8fMC25gfnZtqs9N6YYe5i4BT6zmy2Ad7YiLsWzdDUtga7CBhCyGiC9VZJMPTFoAczd3T"
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

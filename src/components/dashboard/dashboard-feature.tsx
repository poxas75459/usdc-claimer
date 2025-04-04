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
    "MGjN1deKc1aqtvurpywhTo1ofECyNYUEi2fQdx6dTCPpTzzAYg3Ns1A3QxK735zFd5MdE5yLC78958j6xJjn5RF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMzTv5jd5Cvb1cMqkSyTUuXciZNrz6f22eUJSMu7rTejm3eH8YqjLY4GkJHeeYSWFGrwK5MBSsjjMojnNyyPKje",
  "key1": "3mLMxqT8hbSvv5j6B5womC1DPxh62rZ6TAz4oLjszxxJfBcBDhuCEWjPgTyjatxVHkkkkJ6ZDG7uqW2GginenFPF",
  "key2": "21QdBHQXHgQzT74oNDwwwW4fDbmaQCggHdXAhGYxCMDgEd67ZwQjsW9KZar5fxsBoPLHhTD9J5usDKAerUYns8v4",
  "key3": "qke73Z9xFJDAwXdYzYx5heMVQ58r8puAi3HXLmgapGw5vZ6Zj1ZrCcXpW21VA1Xt3Ltfqr9R4maC2SnAapnF4C7",
  "key4": "3Z7z3NtXtVTKScUjaVpnepPtFZJmyhSkbzE8nQqksoUHQeobmRZkmismEVqGecpxgZ4SRjFM8tfrjVSGUe8y3hwe",
  "key5": "4MpT5LZPWzCrwVbSkeyMHMH73HSzuBzLCBL21QDjhQEqoaDP3qqyncBWtdBqRQVfWZUWqKcqbrLDgd6WMSfp8rNS",
  "key6": "2MDQPA2f26SEphYkkZUwRQmxU2qyCrip6mPPdDkwkCB7Ykr247iX8xVNcjzYJtbECtkpUwA7SB7fb5PjHrd2Z5Jf",
  "key7": "25BATKusERKRW6La8gUJfoGNCqEaPtwtMNvqfBcVKKaGNZmN2c3YhTwyA2oGpxDdDtgf374w3PwSZmGv8fUHuyK8",
  "key8": "2Vx7wk7FbyJLG5aLbVGDYmj2b4Nwopz98DJQHckN4iJAsrc91U2vyTFFPcBcHCVh1yMq6Uir92K1GQVCVM1GYoLu",
  "key9": "NH6FTNwiymFfqpMEPyD4WeZPyY8oBNWsJP5yq3DTxV3PzYP3Ex7WyXhUPSjqNp3jmsCCUr1FDjec6AQApYVaoiA",
  "key10": "51Ux4DWCNconvPTQ4FXkRzVizvWEgxnpCMtdZY4nTLojY96Aw5eqptxTy6yRJo9hf4BqNAxbzaDpfFU3aq2ZE7Tp",
  "key11": "5EutuhMdpxdfjjdk5D77bez6dqLmY29Fu5UVrdT9QCf56BXJqfmwZXmKY6fbhtt26vqZhGgaFhfmQsNtXSUYChw3",
  "key12": "3uUoEvivGENTNRzr2vKsow9nZoG8813Wom4EXek9UNtBFzXkx7eatq6jekA5fA8jjWRuX5kyjRjmMsENJcWmQtXt",
  "key13": "4vgGZDWaaEEi9tR5PHHvvEdNQsQWevFpK67Uvgh3o5XrkzMD6oC8k3wZV9PhwThfzNGwbkqD8YeHGM6WUbXxT2Gc",
  "key14": "2cVY1CyFGMAtfxgQ88u2WiSXT2fefpEFrrVn9PAGPyCXSooiu7UPrDNmDog1eh8WKCyGpz1EGzj496L9GUHEh6GK",
  "key15": "58fCM5TabRX5qu2aegd1S9LGhmodk7c6KgzURD1hj95NDepY3Ls7GB6PfjgYwpDFcfjhMf1AMeD9sdo8gu6TBVyw",
  "key16": "3vkk8q9S354s1pwpWBvJFAWnZdK8u7yvpq3dPDJR7DrBceqxQZUeshd1VA23mEbu5szzHpj7Pxzf7ZB1Y9usT4hi",
  "key17": "3wEZgfZzyLJyEs3mErFzyU9KNghHPpdeJ2SyyuAnfxbnzHPTkc4nEHXHTBgBMkw7XDgr95DmvZ82p4xDhkuTWP1y",
  "key18": "2Egf4X1gXdgNpL5V5CAA9V9HYX8aRWr8PiK7H8rrn5AVLRo4mLs23iQVEJKSD3xdZFN9ebsXWmw4AzKXZAGsGTxE",
  "key19": "2j8ptDQ62RB4ZX4CpR9xS1RKMgqWqa4BUs6qE4EyLscMXzbtthnGVHc2uzNBFV92R5dA8RkwnJMQUCBHR4piq72x",
  "key20": "57CYBDoZWtrUf9dERL42PtquFh9Q4LNCFERgBMmKk6m21VHaevWZSGEChtFw7gEMteHHoTLmsbPugQVtyoFb23nC",
  "key21": "3zuHp7CB4bcnpYH69subGBB3X4tVkNBKWSFGaXsS3CQEw3egpvmpngpa1gbR8ZYGXZgrqNDpVhpVHRYNUcQEqjKd",
  "key22": "5yxBE4czBrRqhdjMWXuUBJUyBbudtZJiWtBaEGef7D7D3Qoib2UtbFfETP1WskENB6nCmrJ9Nue3WyCQWStxkKrA",
  "key23": "m9KZh7psqM6qcp16uGvjeKzFatZNAS8X9HYv5St5tu1jg1R4QcBugMuMVRQggCQepyLV9D9Ftby6MWfsUaMPncD",
  "key24": "2o2hG5wri7sT5QBgj3ybUsiQF2QGoLS8aDDLS8dsy5z4eJTgDd5DJGMRcvdQdHTDGjYPYCgjXYDsGyxCZ1uHtjLh",
  "key25": "5nm5i651FpjSMNFP84dCfQLmGVdDDumbKsZhktTT7CK3Wkcohoe7gc8ZemTKQw5ssjNtRju1wBvcg3KtMLKadxSa",
  "key26": "5UWxjNuiG1kbwMoceznbViVe9KwjJ684DTXttdXWFMyHjt6BhFEzRxUbYQrjyr6RX8ZDEnLU3eBV7mnMNjEphNBZ",
  "key27": "2xttFSAqaSLoLsdVLamj6sZEBjnKYq28xXoz6Zmv9rWuaxb9WVdXuwPGTGEdSdZ6AYBnX494rzYuMVhYHFGvvJJP",
  "key28": "2ncXeR78JrdQDjeByy9veDMNxpEPX5K5WzFC3SPdKCuev1pcqUnuRhFZZfwDFPKkdqPXbJS6Aj2nVgHEgr2JtvTZ",
  "key29": "3NMy7sYWASfNZYV1wry1TrhxfMc86KZN2z43DzCbRki89j4aRyTBSFBqusYJih6AA7v4mP5yc3zAtaC1JZbGPFuX",
  "key30": "5HNgaP9ZaCi1m5TGvSNAKpkGDSpm5B1hAraufsdZGoM8ELEuCHA9U4bgpPKK9TDBEGJcVG2eYdX2PtZ3fztggTwN",
  "key31": "28ZuTxPV3KpxYgmwCwmSKPkz8sNJ6xnjVMkYA2KzRAfKPX7KU7UpAimV35QoxeWuarpMacHeWm3CNrzcZwHP5JmA",
  "key32": "2TscNrTCx7YspLT75u72U2wZjaKHqKoETysHVmwcXVmK1eEKb1UiDnMqADrbQ8jobDKNUCL2nXSfjSERdkpHUjK6",
  "key33": "53gNRyrnnE41sDaBbgXZGPgZocEJafy8EVDgaHKBj3hEyRS2x4sBYjn3SvoUqDwSbJakLo5biQSv8qCU6CfZ9yFQ",
  "key34": "55WRRfhJ1gBxVvAHuWQMCLCD3ytcUe1A4i6YDpSb6QSA4eUF7FqDsqicSGMMzujmXnJmatC33tU8s3hGtWELFkyH",
  "key35": "4iWBRPsv3vrT67v2HpojVB4qWDFbytv8hGTcMaWD3Gx5ZUWSewAJPF3aHNyPQKu2KAcBBk3jqC5NKG2xxxU5Yh1a"
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

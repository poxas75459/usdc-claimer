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
    "4qFHcXxNjgCxvZQYF22XVxeVbQBnSvrrzcbTDoxT3JzaMkYfVMeQQ2BRMqwxV2YUaAopPRaz8pv8LdLXkwmW9YaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsMKvkFGxGDwkm7medxgG58sEcoUYuDyF87FJEzsX6tZwph7C3XbhJVJKTehiD68r2iVq97FAwSdGcECANgVLr1",
  "key1": "dVbWPUuewRsxMz2CLykfVqbyd6Hez8PwF19mRjCvvCUHv5h6Sx1QsbNQfHD83LhSMXGGUh9LSVrQE1UbknHvv39",
  "key2": "3VTNWeo2Ko3V9H9EhXY4Z6GVRcJLNHyuU4vHr9h7EJ7CcnSreu9XXPwFguXSg4AanyC1vxw1WnUX6MYQYHG25Txt",
  "key3": "48QNvnPeaP3VujdHTJqFGxxwkvZv6H9298kCY8cxShXr3Vy8vtRCQ7U3jcUJ2ZkJpqrkLVYNiHX2xDM7tcrfA6G3",
  "key4": "4fCg7HY8P2YzQRQeh9CyXJwpBwtzx9R4XTKseQt6yqJ2QN1xMpvRVmgpdio6dCrGtYGBZ67c1mahDSiKy64gUnLr",
  "key5": "3b6vjZhhfrRM9Y6g5WrupAhnQV3yA9TBmb3BBjCG965BQ6z5nExLwBA5GZ5F7dMwTnHsP8SQRk9HHVEZKqM9jiyV",
  "key6": "wFcZuJzA9EgyW3zpEmtVECXqCXLSg5yKFSqvpwZDczV96wV2wcXdwgpBJN2a3BdEVG1eYx2zpWDR3LsvsSJHN2z",
  "key7": "22s3UShLWrA8s9HzuGRMZKCrJ4zPVFgwcefS9L99FTXeTVXbMEcyQKp9K2UDyEJkBPJyCnS4yfAS9LwJKhphAHv3",
  "key8": "4DMZiWcLwtGNazFUjbTeX4VBHfC61JjitZaALLkMFSqU3NcKuvS8okemCPbVBtqHj2fkj5pGH6QZQVbpWUyRoKxJ",
  "key9": "4ch3JXhayrgKTi31ak9oT4wgjpfUbMA6kxPKp6X1mYZVxfjdtG8vxunjzAQQuLJiTWhVJ5oFuduxospVpaGMJCEQ",
  "key10": "2YymKYwKv2qLZfDUad4D4o7pYwYgpgi3fdWKa1TmjdjGZqez3rniW1NM4eZb75psc8Kj2EyHBVFPZCf6aAWYsKwD",
  "key11": "3a4DdoY5bkfzCmcAM7p28TXVNP1v478nEFg3h3aHTCFiA1fRUcrUv1JB31zADez7AZ25uX5jMS4tpiorhnbcLo5J",
  "key12": "5dDu36Co5WaZCjsQaMuKk5BGsqzi6bT8E2Q5HzqWE8fBgQ9unBUjdFN1NzuiAcgaubnjUvEGmNbhmo8WyxYSUfkq",
  "key13": "3c7w5ap25JZ7jAQQ1KWkGeJMHggrtR59b99XArsk8gNTXvcG1AdMDE2u8JSDP18NUeQ4av35Q5Wwmd4E2py3gZUk",
  "key14": "3UcxrhkFyEHKNfvJ5Rb8PMCMndDXnvmuimPQBqiuE3khhGfEPUYtitE5wX6GVoeyqpGFAbTb8cnQaLCbkDaPeJPc",
  "key15": "4DCZVyArtR6JtRVGuhvtMqnoqqPBhyhm74YVEHi1ain5EETv9RFJ98u4y2PPXEfdBqkCq13pVD84tkDxn7biCZAD",
  "key16": "4kHuFPTnX8bh9MNp7gTBuiV1TDs19G8MLcMkyWvbd7YwM733tY4R2JM17T72nmbJzgVCimj3enQV2VFSQtsFQVov",
  "key17": "guCtqyEQkdz2Ecu9YuxYr8ocr6Q1Sg5rKTD2TxmZEFvubvH7bBLTP7JSX114wKNu5i3cEa5yV8DLSGMYEi3oWMy",
  "key18": "25hiT2npuEorHtpVkTKJr5K3GGgSrixutbFKQFF5GkFwvuyqgjo9eucjSr8cJ4qD2LqjX5vfVYwFxmsiVahaoaVS",
  "key19": "4DMEsZn3qt3irKazrWvbrdeEysqtHK9UeXcMA82qJwAmUGfgjdue9xwoktME8A8QVfSGFwwXi6gEHDERzTrjtwnT",
  "key20": "4X9fK6CLHQEAhfXKCcgpUUBHwnZBTNDtrFVjh85RBfhYxvjqv2sSNRK4sBx8L7SpdQRb4MWYKeNspi31Y9GFA5m2",
  "key21": "5s87E4wJ6EAWv8SK3BUpNn2JQyRU511CtCygnJ5pBBXiGGxJzKf81bzGSkK25s7twATYbaEPcMERsRrQv648HHYy",
  "key22": "3V1bvnT6MfAgrN3DDjdhJQsif5fn6zej8w6LWMuUFpcmPUK2hTGpQABwpopRcx1fJ6t5ZXdpth9Q111oYc6nPyUr",
  "key23": "3stugNMCxcahojA49gR7wMLheJtVEfQh6AaThnTvWm4akJpURQag5DSb84oGcH3cb4dQjnbeoDwVTocVDvgaFfvc",
  "key24": "54T6ijHWCqTwMKakBmSfqJb1R6855nxyaTZjRyJGgvfenRMKfzSR6wcXdjzLk1nHowVxa2Fd4z8TgZP1HgTsXz5x",
  "key25": "ergsTLvsb1S4p51GHkNDm3c8QR8DekdubXv4PJCJ648VHw8cBLeKyKomLzzUrQ7MF797V9CeHSapiCexHRAMaDS",
  "key26": "4D1TJEmWGjaan96sA1VnmgejsEiD8TgENkmGiw4jsR4bpPFRcgdZUahQATmBdxZFbDJHbUsTLy8RsKnAbhkE4akM",
  "key27": "4K5FKtvXy3cFcgTjvGuLAjtaYm4BzaD7EmLS2xHYypGXpMGX5EysxJQJ7LuUr236p1gbWZqwSCnF8GPFNzbhguMr",
  "key28": "5QQHXrDYDCBXye4dFhgv43UnFu2aQPbsVgvdMiT5EHYUdmDW5wnHgMHaNXo7yjew1ramiC5udvkPTSLPXer9WE7q",
  "key29": "6bXQy2Ri1DDtjtKdrKFcyYhMsqtXbJJ52dbVHfTPpqvAKGGKgia4UxBpeqEb63VDrH8Fywqkh9L5YdaZcj39MBU",
  "key30": "3JAjBQjqb1XPxmpXtQP1jWbyAPqS6a1ZmDKAHCFX7j9NRo46dnacx5gPuLdQhYiQyvvBZAuQLYzAm2q7h8qhJEm7",
  "key31": "xg6pE3QCQwYAwB5i2AomG9cBkPLZt1pEAZJTFEFfg35QQBFfDTyjvKi4kft1RdVxzGJN73Mx8tTCjhWDmPZN2bu",
  "key32": "2h5Rhs2UEzhhxYdRxqEj5yoBjBUh9pPG7ySbjkkzLmgQBXrr4zRGaWqmEx8gmNDkcXVHgBK1iKGTn2BGPajWgNEE",
  "key33": "2HnNfWvWpUzgXVNp6SMyqU4cumLebestfpE32jwqV6Gdb2exAgSzM1ka7ny67eGtjbZPDEXMckNwujxJmJmVmuK5",
  "key34": "3jpMY9L3MNs3H4PSiLJ5bkb5auML9J3XuBgEGGMy2S5P7DUvb79vSxdhdwHRD45bjK4572C6MbjFbAMMnG5PLS3x",
  "key35": "2zdinsPovZJAE3k2kJPabqJrvNhor4VyGQTEuoRnGHXmGsAmubHYpV7FaSca3rdDZX2LoHG6vprq9eT3hTU3bpnB",
  "key36": "aV7j67RSoTW4UoVfgGbh6V7pCP4txCtnqkLGvUnQpXTrRC2a242KqS6Mdv767Qf8wAzhdAM49a4rTRENMQjKFcs",
  "key37": "4txcDyqmCb3KfsWFkMjBBZ8QUYKKw4JHXhdt1hcqVTSQqW1cRy9RXbFd9f9xergoNRsb2jZHkwc4ksDQGCPRk32k",
  "key38": "5kydCVGkt84cQAa4ccTigL2qEpcM8h62J5y7Ym7iFqWqrZugEvtBDWN4F5omBrT8fnzLsB9XSSR2UjMYgVuHVBzc",
  "key39": "YA1m63P2LFcis9bmbutQJK8kiYk2jFeFXKpj1p5cX26aWPrSXt67NJU3W2UGFJ8AEPQABwqF3ub12RX3sFWDiqW",
  "key40": "5YeC5sFzaBgewVjY72Wd18fBuPjzV3aSLvotJA2G3k5G4Kurd2C9H4zHy3b4tJLWKCPBvLzmgH8PNpGyHBCfG8YP",
  "key41": "57t64CLKPyMYbPjVC276QxQATPR3W8Lb1MFxZkxF1DXiZKdda4zbKRbJs4rbFbFLjvsYVAb12qQJrsw9wucFF5Y1"
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

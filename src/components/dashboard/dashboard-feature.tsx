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
    "31617zM6jfradtxoGj5NRyHguKyGN17foxap9jw4HZf24TTdhX59oj2VaTNhM94AP8x4e7aVbJPXCUJrVCgPZsFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7jiFXv1kED5vxncYX9SHPeXLS25NjFFYq914Pi76oFMw7EyAVTuC1MhjCbWbnGfh89ECaCzP1MjZKxbkmncEQF",
  "key1": "31mZp6MrMPuNe6bWFYfRbvS2PTzvmF5zFXyFx6rDoVxPHX26PYczPT6nrZrpsVFgyA7z9tWnpYEtyhmGpnBtJT8E",
  "key2": "2WQEa9bMunu9Yiu9ECjVstP4VbDRaYQRxKPkxaDWYwQBc5cfvEG5YWLxGYhnyZxsR4FBHGT7XrrTvhp9tJ2eqPnf",
  "key3": "3aVw55hGqeg4V7AojeqSAeSJaY6AXnVSXJaBRfTf7VL6eBasnB2dfJpRN21BWARzNdAzkrA71q2bFxaoUMGP3jht",
  "key4": "4PNwdEXq6pioikj5XftiN3q6jUi6KPe7AYGr7A9Ftky4QSbzZmZfsi6fCxjqzaaF5CjxwsaMw3HdFTYeg1WcCJoq",
  "key5": "3t46Wk3BHaccs9usKfL3XH5aGuWm6SLowz7nBZyDVfvXRBWacFerTXaiy4thigNP52Z71TsEMQwvvzumFybFXPZD",
  "key6": "5fw7iKZcL4DgKQ3jaYJRon7UzzumDZ3BoboQSZvpKFeuiTbbis1rgMsfymGRqiGYB7riY4BRVfh2ocPFrrb2p9Ac",
  "key7": "4Mkeu1nu8amCLNhb9QC6N4C4dJnyQGJikxgzxiUGNX4ovcyhfBm1AHUwj9FKWrqjbsteYB9Mo6bLDd1T3QbnJLVK",
  "key8": "2yiUQHq67TRkJpVkkDxwZSHJfteS86e2QdPiBHNsnAHp6WMr6piDVUG4VWkVgvp3gcWC7ynWwG9VFCAhDvZcHTYx",
  "key9": "366ukErBh3EWqfVph4oCQbAkvyF7LTFczDSDU2oR1YLkYEcE3BuMnu65Pci8HuPqMHnucrBvdJv5iAwqskLkr3JH",
  "key10": "SaNtWbsnSLGhaafHdqKrDeWMx5mpoH4cCGhmeV1DZ3vwrRhYBs58EByegcxEbeHyQhNZUxo1AXyq9asUnFbkRSR",
  "key11": "3tsEEqVhXCQpVjFQvL5aqcDnBZtroYoRVZdW29VE49Cg8uGHUfp1hf2FQ2YsSsNdk8bz48iFNn4jddCNGwk1nYfC",
  "key12": "3TU1uVHDdCfWQ6j7tofRF4dCQoJZtGH4fA4AjXv5LAEK7YY2hgUZhWKHyPMohiTnHEvPPtystHKDknLUp7w5CgEe",
  "key13": "3mmMqrQj7M8Vs1egV3MDUSqdxivbgnqNZmT3Z7XQozMfh9fUsqjBekqVHEJbHqYTCNXdtFSh99ZQw8sFvt4teGre",
  "key14": "31uZkvGJiJSXpv81PyVHWFY84PxLW7kfF8uyMN7LmWtKWLfH5Hm2FA4oPV7xQLgTnWmogxgAFuiEWkus8hbAZMXC",
  "key15": "2nWcyjjjyCcX6BPpM9BJnopYAJhfwrEn8MHGwbWecqVaJHKrAH1TV2bZu182YiEJ7PXsgW5i3CGCgbM9EQygbLHr",
  "key16": "Mujb15Au3PFk7Jp9bzbWtZVrVJKqujW7Grbdb9f3RouPprFBCWjocVbhhFas2GgSWnJnTRCtVVbRkSkZWDyNtDr",
  "key17": "2jUfdj1cLPLDEkauU7JAUmmFbZkxMJMxW6sVZQcQMLHdrVUD2iJ26pVg3KGfRivduLz5oFcFq81fPYsP7nTCrYx2",
  "key18": "R4ELx2pYVVJd1C8iLmJtX5J56PDbVjEKqVrmxhKDALJrR5zWkzDgzV27zHTDHuWcthRrgmwD9BGhEtGrDyQ4ytp",
  "key19": "2VtxowFmyuQJGBFQf1FhafEh3UuVZzrvrz4EMKH7rK5ZbVsB44MqEyWXG7Av9UbGgExLrQCzJTSNoXrchbdGNBCj",
  "key20": "366ASr77sf4DZSaVfrVrVr8UkAXqB5Ynx4u4KZPgsYrWaz6QRPRpn5k6ckL6XKrsHofdx8bm6YcGpeiy83jD13QM",
  "key21": "5mvAgXaLpxmnyJNzDMHkSbxzEm6qBuQwiactbGFg7g713KtK3q3Gay74Kk4JPAPrKR1HejXsMr2YBmLaAraYu99y",
  "key22": "4UBF4MBtxkFUEtQf71CQQwpHkUMSV5nVXTaVgw7fBGok8BryMsmcxmvXqT9Rc6dp3JdKoUZ8cvnt7aV1e5dxGdfi",
  "key23": "5YrE9cPKSXzyBzSwWYqvSBCRFGVvBD6996M1R6cgrKeFo7U3HnwEmENQjKZtGWtBvhRG3Uc7NAeogxhUL8Gy9J6z",
  "key24": "tGb7JzSBcvjL9Yc6Uhnm5zbjD6riPn77Q4yU1BSTLTJMdak7xNGychVeEi76irtVbPfCRBquDNTMtdKCajVrij5",
  "key25": "mB7bCbujyZKDB16PYoUoHXixn2esf4KfAgHwfZ65DJbi4X7okghTAkSRX3ny17762eakqyTjmDad7tSqxUWZboP"
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

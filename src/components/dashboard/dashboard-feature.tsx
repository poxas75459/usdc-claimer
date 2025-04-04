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
    "5bE9cRf3B7NuvGvzdtCRHJXGVuJYMFrUrJYceDas7Zft9Zg3XwtUsNKzkvUxcBw41R8XxkUgk66MPcafXyKLpW34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1Jqh9ekoaUrpC5J52WbQo6veU85NNYzNfqZKUbU1btP8SMiytkHzty7Q9cNMHygD5ZxiHgQkRfoxqUA3DBQdJr",
  "key1": "2SSwGJEuBRinhK54mrW95LSvoasfvv6QK9scGz2ynvdKQWdsoyztx2QbTeeZbyeD23FRaA2HT9ZzU2pWMZGWSQdt",
  "key2": "4k6oekDJgk5mtFB3fNnBiLZQ4nKgXw4e3wbFwiGanz7B54AGZ3QdjKYYEdTsU2HnovJrCLwNiawLm6LN1EuaqCQ3",
  "key3": "3Puff21GMf7mu4eLefmhPGupp24FXz6fTUwEqeSasi8h5V9B4DHjqxLudi2NB6d1wWHrySBnvLy3qqLqtmH4ipVV",
  "key4": "eS8c7syWQgRnRHjDPQZFttDJhPuq7mgQ82XW6wWhqrPp2zgCgUKaLUhsJMxVjBCDiMpaxZAXDyzmukPnRtsSdYG",
  "key5": "VGFFEJXnREmqhn5jogDGTx47iSRhZzRY14xXbSw3Cqqci6uJJD164ktH9X3BqCfVhT47zPi8NVEbVZsevkQ6Qqo",
  "key6": "5Sy58nxD9BJiYMcxGYpDD4cKt79Qebbg7GEobbKGvFT1Z6rJpcw7yqE1tT19fMhMFiLwgzEVMSPM9qKZjpKwwcBT",
  "key7": "3JW4EAF2ZsPTdN8J5LLSBpokYH5DmBPJzeZYfacY3QP7KPta8T6m3prE6Ee9hmD2WSB9bmFwCzPTkyDPdLD3RCHe",
  "key8": "5RWbqiNjXoT8ykQb1e8p6TJLQs9nnud76nmyW36TNMhPnM8EHw1ZZz7CAkX1SXgssgQWXsQPvmw7tq2ZnkEKxNq8",
  "key9": "4571ovSsG9NTVcFTkw3jxQYYSMfrGExxhttjJMz6fUBqBfyHeMvtUxo4mATYtszhpnEsxJhmCPBhBepa7hKT9vUq",
  "key10": "2vKJSG8CMGQDrgccDvc73Zpwbyo3VKFUUBWLrf5hEXXxAGWV1gA6d3fWMA3B9MiqdfXavQu4ARgMnM29b4YLcADp",
  "key11": "3dbnak9AM5t9DZ6QCFYufFYYKZRghu55MUWrZvSqS9ngd6mfG9H41ZUNUbGFtKWC94JupafrqbmhFQ8RHSP973c4",
  "key12": "3ub681jV28AAueUaZc4Bdr9LksmB5CuGfdyMujiA2eXC2bTAW5ntWfYVhddEE1v291sJ2dKq4TYrmx7R3bLLtGRC",
  "key13": "b2Sx7TqWDVYDn18jpQe2YXZnBFXrdQPgnH32H1myXZnuud1p9uKAx8WEKDaCqAytNnseM6ZdfogdGzadso69FyQ",
  "key14": "cBA93ziFPhWGRuUFDF9rGC4u88RWF82xHdZZsp9s58HpuguumB2nMZ2SXbGXytZVXcbyHJYoHrMpFpWpew2EH4C",
  "key15": "5DZU6Ds9TiMasEK5B7GfvxBVKp2kF3h35ShMhe65BJy3ph2CncyBEYM4M2QWYQ8uoWCLfdc9HXKAF9r4FYKgenXu",
  "key16": "3NmMgDVCw41xW7Ek73vn8piY9Ca8rvUwfC8HygCBCxvnt7G5yExKcwGXkdfM6asw2Yvcbeak4miW2acHS3yKfUaW",
  "key17": "2NoxMU2K9FGQSTQAS9jCEqZZoE34pJXyJ9FKX5hhYZoTTTbe3wit1EHnnFjoCKmZ8fPsg41B86nSjc5GJ4FXsY3h",
  "key18": "4hpT49egX4hBr1U7kYqLciy2mGfa3f5oZVqUDfr24phNF33S9YQRzZdshaNN2zjJ5i7EKYCP4Xbse5gVXu7n23iE",
  "key19": "2arX3249BZbnPtdWqbrMDquih5NuMUKKV6ZqQX3ERbtNt4uu7DRogh52wuX5XuYN3xu5ht9aAPMKFYNtYEzCw5av",
  "key20": "36dgZRsxiCo5YE7nNWmRzxGmCG3bhYxaJxHa36Jgcp3WsEeXeCv11wFCPn36AgVRTHcZ5fZoJHFYPwGK9Ky1bd1k",
  "key21": "4j7H8SBeW5HWzguuJipGFjb196XVNPvJATeG3nPKbJBRkP2YmJGFCDMFQ7m94trVFniznZnuCNzJDnJZENvva4jP",
  "key22": "3CTnqV7ma7DpEjmAr4bYfbN1rbjoGzaXZdoEyFAmevSZJDdvUCBVx3D97G4mbM92rRFXimb4NPwUqqXRJ4pStbSY",
  "key23": "5pSPCy9yvyLe9rdUWUHpfAfcPZBX8ioYJf6abv9tvxdHPPmK6UXBj4Mdg1gGzzVFWrMf65fysU8phR31vAWmzxkD",
  "key24": "3g9gT7TeTU9pzEp5Sr5HW4K1XbBrSD661Gc6gxxFMkEvWzJL5pPSVvfCXrR5qJpDhk9L6tBC8gC1TqdzcFxvvS2j",
  "key25": "3e7pLi5HRtoBsNLqaPcmMxy67HrrPnzKbK81WsLBTQWA9KYYijrnxYVWbpRhW3aEEGW3VsKXPjKNBmEZRpEDma4D",
  "key26": "aekjRuVBdtBe4zs6LAdMXH9qik3arLmUrgYhNT7ZG4rzJp58PnijpRbTxsRbeCeEgufSXauFYMvP3Mt8syc5VT1",
  "key27": "2knEztDmQw6V4QSqoif9sVQMXTUHrSFxDepb3CBn2BXCnrWhD8aN1azcxV7pZvj2jf2fs4xrBJKzJHpnGRLuwUns",
  "key28": "4TX3yx6ce18Dt3ALU8ufjSLxEEPXzjLqiniaUE7c318gHUENXqv3uUkCBeYx7GX4WcJNuKksYHV8HYwLi2ZbCQZM"
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

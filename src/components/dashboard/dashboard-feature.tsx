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
    "4DihbGR4acekFbLMpfEU5SDwVPgKAMexFHeNqAwmuYDwpB63MbWcDBnFzhmhZbSvpRJepbqBUWbigdH7m3mHKs3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvudQVYWrQpMjY7Rg1pcRGwD11fr6omPsFEHFvCJU2jdDGXnZ15SaJztMHSbvCVeMt99nRdLzhRfQc4yxToJLNS",
  "key1": "wBDCx2rUDr2YtiQudwvBDkKMdPstcS1aA1gwpgBMWTMp6fNzPYpPNmfwxQ9T5NPTyiuAfiVd7QiLeb1pKFZk6Tt",
  "key2": "3b4P9wapWcsY4RGpFT4M1q3T7skX2SBeEvhoyudvpBSponLaw8geo7nNFzmdrQYtCswHcZ1uq5AWySA8SN62GpX8",
  "key3": "gWr4HLdZo3Lsp4AL6bN1t2CzEZ3Bp6hTug4qdaWTX88Hgb9F6aGpGFMps8Xqg6v9zdqVteTPgkuvnAwAC4Hwsi9",
  "key4": "2XS5fE8oK2sHD8Nmqz9wgKG8TvhRjHwEYMxC6wuxrnQB19wQwyYwMCjBgrQkWV5ePn6EHUPg1qYmMuortsjHcpA9",
  "key5": "4LTctnToVvHcmgPsGxhvoZT1m7zKQFCUB69vYdBKvGFbz9S8moBSpvnjJGaPpVnoTZcXu6oCphh7BsX2U8Wa3Xuw",
  "key6": "4eGdsMuCMy24ndzrdnS72zdJvxcvj63wZE8QvdRFdVEtzJfGfZpuc4pM8pv3oKKYCW6rqWXTCBGQYKSYZtAtPnpp",
  "key7": "38C7YjeYMJyUq42N2s6SuRfbUufrd3wYscVdTVcdPgR3g9MJqEoipbKq8845QYttFKijZF9vE64Wfnjd6dQgQJcE",
  "key8": "31Ak9VJuXXf8Sf52ijGaZCQE8rVgEaEh68nhbeDvLBvGLtGwRifKR4gxLRcGMp8oagpYKNGhQnaTF5CaY3UQJin",
  "key9": "286kw7EvHDYy4MSY2fJrUMKYhSBojfaxZEiUj9yAanhHydnwnnUxeZXPhdLV8sKw5L8L7e7viKnihLdtiqhx1XTT",
  "key10": "45ct5n4LMG4yrmc3UUYFHqBr5uyoGp9fLoM1x9SkNwyNQb9nhZRUJFg8Ep9Bt2q6GPSWGUwCU9V7AVmqkWEuE2LR",
  "key11": "56dMbZaHkRAu3ugnZQx5tutzLHDwGPX3s698NqV5YEMTZHuDzdS93kSDSpJqyHtUEJad3e3nejxK2Aop5Ua74YzQ",
  "key12": "3nG4U3J5TdbK6q89tuc3XT6EqGMxEG5tcBRP217ZWQFJMjUaWnhRjJ9dTxy6YyinEVfERqLeiLesPs8bWoU1XiWb",
  "key13": "3NzDw3SHUgyMFFZaRMx61UtCsnmNyAcNL16pX6z311TAdtckRPUHBYWuh5XydCVk7zBVFA6R34YZ4zjpheHmBAgi",
  "key14": "5QcQeBMgvorvJLouYtA9Egg67sDWQbZKfigaehDcahPagdTgRzPvvNPj8o1Vqi2EyALZVvpaEfS4gscrwp7zRh4",
  "key15": "5xk2Q7upCo2Rto9Eb5Sx77TRKPLW5XSSPWvvxYCB8eXjSgNoadrZXKsV4RKgdzpUZMsGvrKwsVnWSzdEHWMs1KaL",
  "key16": "4MLehLECGrMgAhYsRC3ifVBKHKzzWJ1HwUhSupk5qJ9N3ytbPSmRnbxWxNf62mtixwmCtYy8x9CpFMBuKT2ezuWE",
  "key17": "2jfmzQr75mwvAYWWqiYduBzgH6fwcuQaJFaMU3f1Nji2MWaBGGb3egJMuYpUK23BySWAU6hKSNAjnLwMoH7kNjzt",
  "key18": "3ZtcWbhK3HFucr5LEKnqahJNZavyVnFjdJBmg1fbTfMr8MQWd5UFzREr2hkgwUR4zACrYXsKVEgv7eLmP7wkSXFh",
  "key19": "4iaUcCdK2kd1fCFX77izvdgkTpjF5tpnbxZnYyseCURJgE43kqxUL4USDcYrZbtAvodRUxtosTukcHsPeiNGnaaF",
  "key20": "VBb8xDN43e7RDiWCZ8XLbZA5LxenZ6PAMhq5fpa9t4SomMiCck5kVBrii6HaSkkgpgmyT5KayTWh3EUmh5whX2C",
  "key21": "2AV77DY9CUta9xCGJaMxQosX76tzANzCGT3NbKLffbc2CwNUvXzewS8W24iha22EHWACsJekkCXbRDWGUw7Jqd4r",
  "key22": "411MVHc5SjPf9h9FGLvcCjit7pfCmJV9kZCb7fgfpdzfWNNQk7dmiMWJepk3uhX6RZwkaRP4uQ2YRGZ3L4E8ft9L",
  "key23": "4E3CxbzDpL1KFoRzmu7aXky1MvXR1pLtYchShoiQKLSS5mF1EjxjsdtdWCq5W4eR4frtP9C9jytK8A1LKk6bD1AA",
  "key24": "5sHfhagxwTFQRBQj4Fw6ijuUTWtzg2MGnQfc7b15Q1qfCpMTKrW9ioSRHEK554S7cBGqApfZ4VnBoodiRHDNSTW1",
  "key25": "4HJE6HFvarstEsWEtdVF8YqH95he7uNLQTXGaG6pxwHAebviRNwNfNyjafSq3xHYxg7aqHVS7XbTQFNh5wZqcXkU"
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

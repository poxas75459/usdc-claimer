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
    "26adSaBgJcVuG79CczzF2PRxWionbmBHaiSe16x8keaJgTPo3t7Xvn5vHqruAS3KfKRPkppUwWrYCmADBmMZvpY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21sofEqfxSmEPtBXMywze2wms1NPtnMiv9zHApgQFeshuCPggUVwieYjfyvmuGHECyzyQfGcePmjr16TCYmbVQfC",
  "key1": "aU9j88BMxRcMmpo8hrKpLpcDzwd3T9Vx9Pv4cVVXUvCv4NnnZMwX1QHNg5y8UdrqB5CodP3ktHPQhrPkgVXYK7h",
  "key2": "wbRwUnUK8Qys6Ebn1BeAuwbxAk3r4aEV39fT4nEWnMn4CsDMw2fqXx84UhmSS6xFnzizKGaje2XmcVQSu3xW5aF",
  "key3": "5Hub96YoU2UWoxYsfJFKez3yMpZUpa9yNGMmrtejxcbBNBH74Hyq34vQWYYZJwYS493tgHbHXXnZhuGQtDucZ5fk",
  "key4": "2wtXAsMYqFGa5XvrU292LHg2MBwhfDqB35jmoBKy4uoeNoXKD9FUmrKYKZM6VA17RugTABNSbyJPq4UyQ2L6KazW",
  "key5": "4EUUnFkR3KDPbX3b4yUL3FTD6Jnw2KS8pGi81jF57waXwQdn4UA7JGHa1g9hrVWBgbYuXRYvt8daJPiaWsWezMxz",
  "key6": "5N5e43iCjfmgtJU5BDkc5nQiwZmu2T2HQ56u75jarudD1CrFBmagnpUZqDAaxcWyTMh44cwRLtrhpGFdwbwTuaCz",
  "key7": "MjDC9DTA4fExSKUffugpzAUa6ysF8XRQwvWUENwjVZk3BuQmmk7EHK7khMMkjkrn1XuypBuwzjdkYPSEMXQ8ckA",
  "key8": "ECXyoyayLy9fRED8LvAczwAe4iV6Utdn93mnPNKFQUGaB8F6AF9ghDbDWNe74BcZAYruxcbVWfyWEYtqgx8RPP4",
  "key9": "4CVgotFtpgWDAWNgkeYXAeGfZxySoTyPeoyZMVYHwqvQjy34hkP4BhFQNuWk9AwFNGgJkPdxKJ23J3uH9CBG8p7p",
  "key10": "4dzPuR5ygq9AfLeGGd78PVyU3x7SJd5MdzpDxNRFKNFtPGDLsTPZeBC535TagL3BMwqQLE4AErGdR2McsUv9msKx",
  "key11": "zJA3xGmTwsRdTuL3P7MQDerCgHu3RdUw72YdDCp9jdmNo2dKsovW2FhHF8mCSagNGw4JaHp3xF4KJ4sLc7EMHwE",
  "key12": "4eEoCfW17U5aMDwsHLjLDJ6L8uuXJrCZgFJL6BuQPHFDqKo4UMhWBHdcDpvVwbiNojnFntK7pitimNhhHd43dm1r",
  "key13": "4fMHWXVykyJ9u8sfEWknzSRRKBrAo5BKw5qLFvsDuZMSz5w4FYbEQmUgXtXvNFCzKi6m2U7GoSwezhqKaqi3apeH",
  "key14": "5tgYy1BS2gGVpwKh3LmpZeHsuqWK9ZntreLYFYf67vEW1hRaPCtFjjeBUoLB6K21oFHvmuczP9zNG8hSG4yFBWNP",
  "key15": "4kfcCtGKjJZZ2S6gXimgHDKpQfeW7DA3kVaE6vAA8S9aV3gfQwV6LEgwLaW3uLP9WAKucE21EGdPogdeFdqsfqyC",
  "key16": "4L2ndfyy1JWmSis4b8EHBQEL5Xd3exC8RkncLG6729PvCw1jqQLQAw3stK2Nf5b43XET6wkpNDi3d6sPmYPrwo33",
  "key17": "3YknSCC73rspLoLExHKZJmUgZYz6Mc1oeZficrp9vZAX5618N2hp59n5avtcZ9pafwJqihBrWvhzeAMoPRN4fgpY",
  "key18": "3xUS8R4vVhzJSevSRTGNpFWpHcW2ZYkexWw8AeFmMH5r5Ve9Jh7yMaqAptqzkaQG1XiLgMqj269JGmitjRbLjs8M",
  "key19": "5b79GvUB3AoYzb14axVNyxmVUg7DgouL8mNSbMJDUkwz7CnEeMcqPvLwmSyAmejN5x3mPYmWCFWaWaDZYRkA8cMk",
  "key20": "5ysFctVjkRKjCpxt3qoJEXGcUDDepytKJs4JASY6xSSrRg9wHBCcDrocaEE2ZnEY3ujnTnG55QfdNjc7zmXU5EM2",
  "key21": "43Cc78wmCbrYEqQ4d3RBU6bydqjkpkvdbQtYywXppZyYRV9Vgj7nRdjYTEGfZABtjg8WodyLZ2W58zzfGBYAp7U3",
  "key22": "27yK33w4eSyug7Y6sw2Wvtguek9f4qt8TqvFbCaFTBSg2X4nhLiUaqwfcC3iLrY95ntdJXiH5xn3kxEkL4GaVY7x",
  "key23": "RGLWgqLtSmadheG54GkfhUvs8ENXR6Jz8HjCwxqHLBHtkmYBVc1WdXr23AExB6pCVA2zGmtCRMCn7cnda5soXok",
  "key24": "52ndA6NYW5tLvA45AQhKECvQzmHe35RxEfcyZp1tbxRepB4YcCUvDhGZUri92MDR6TNJJuzSjLCgsiAieNi1MCe4",
  "key25": "3EUTggnmEEzpRqkMmE3JFPV797tjsuKUbSrwG1Bwop1hmx613iT213yJzRvjiAQyuTAQMbfwFHA3xM9jpPLXYU74",
  "key26": "3QFt4rKSTLx3Rjn62CRWFgiYy5fapNDwPnqJqCMsVMZ3jMwTQ78YQiynxzS4RjtBTKdZDu43Dwuu9LpdEjUUEdBC",
  "key27": "4JxAU6Dys143rGwJAG8aVE1yGq1FSb5h7t6h8mZQwT2NvZxq8J1KVj7FTTaQe1jFLg8iH4bApDLYCQKdBgH7xMp2",
  "key28": "cbNVEdSUXzhN6NzVEJafYmjMRcZCoAJWMwjeF9Zw3YG6H1nZcK3x2mm9BsZBN891cutbP6yGUdTxdVtqj6haeoa",
  "key29": "zQ2e57pZJ4GVicpEZfaZoTSNp1FAsvD2MQJiT3RG1hKRFfXLp8TT5k7aHH83jdEDCm8PejGx9pJTi3QavSxK9oo"
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

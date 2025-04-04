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
    "3Wutt33cDrnXz6sroZyVXPGCrwdZ2eP56NZ3HNyGn4g6oN8ZZeNzPPomsj9ScMRuHyDPuaJP4YiUFLeGYa4TE93L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9kobchnmjRxYm1jp3cit8akCxoNr6QrZbpySFNV1Hy8g2JgbMtVBGGbhHtrvQbpRDhK3GvoJhxMojb95rCpTow",
  "key1": "wbTHxkybgBNyuut4i3xfZ5HqDrKFpLKSHAXR8XyYLt9xtxs5eDJa2uK6AztBTjnyHSRd1HhBPK2oPCz4ZenJBjZ",
  "key2": "4ySybbzYce8dxY7aL7HZyxBiWFJgH87xvu5JHvtW3mp7LMk3YRJmh9eqsMFEkffhEeMxKp3uCUXmRgtpkbwnvQ8H",
  "key3": "3XgtGKevEzSGwG3SN18vnh9nX4FTkFVLvqJWRbUVSsv45WgBKok7bXiZJ2jWt4BZeuVUejZGfUdw77Yhy8Zveb3x",
  "key4": "2zTnvt9vSArDBdP43mC7aYPgvkuKb7eckKTJnhcwdU9DqRryFxPqf6cBTbbQ8CqHaYJMmUKzFhbeTksY9z3VxKrm",
  "key5": "4Wxufbrua5pDuuxJQwz71f1jTYVEaH7gQ32mNmrfLoPFxmjU56GABKUZAqNnnaVRyecMbAmbmrQUdktKM54Fhcnz",
  "key6": "3ZRVJ9Q6MoxQsUwvvQVYys7NJ5xnjGPymWktirbMYyGhq5pAejZxEwgxCwizFe8DpCKhG4n6QqL2jTFdXLJy9h1D",
  "key7": "4Yf1j9Ba6bRg6sBvzCbWz1GuCiQCHkSnxPQ7R7MMJjN9z47h1QNjMXzaVihwFqZ63ofM4erPGcamfrYrL9q3UxRQ",
  "key8": "5tPX6UzELa41v2zZQ5Yx1h1XJ8khh5TDBVQH9rV1K28woV3X252KnAE13aRuPHpNsbzfwgQaY1HGFRv51XnnQgMQ",
  "key9": "5wDb7D4CnXyhDBsiT6FrDQz4TBeihG5vxhS4noqbDq8EqPzSMYvGALdyo83G4tzkD7goFbXrqzFNSxR4HM6UaK5y",
  "key10": "3orM9uTGKoAsKWm4M9KX3W6KssYb1pE3uDQ1mXxHH1SS9eiB3UooKaR2Kx75eAfTfL3bPvHKcPSgfFvT8xZfe21N",
  "key11": "2484n8eBhKASgLYoykypqMqd7MPK7EY8QjtQoTo57vNRQYSGCNvEq5M49tieoPQ761c7TcpJA9iwCUmB18diar2F",
  "key12": "4ZQQ9rsAKcun2DJrXHMFoPVjzCKYqsLFGuvpmtCQhqExrQ6ARRgpC3aiQvNrP2PfUahY75ynkXeJoSgjVrL6xSaL",
  "key13": "23wS2Ri7zhqH7wKRCbtQJPzFFUXUEV88mLhS7q1QhMkoZ8rEK8WPGyR3hutiGEBh3myxuUMf1nukaQv8qeNEsntK",
  "key14": "F1gzegLs42H1tdkTnd5ujjxQxDRC3jaio29xVNwwhNvBGskskWemzKW4PAAr3RLL7bfZitvxqDCat1HPTDkVhRo",
  "key15": "3qkLzhGxdHocRH8GuDLhXmWaHa1MaPnVh1qcwPELVjnVa2DcMBbRiGNGA9wj13ADZEmucBtMuk4xAoHuc3QEYB5H",
  "key16": "67ApgpkKEBCUbZWbmnAodBq8tfgNaUDZegfwf9EDipjfEvVUawwKGgysHYTmUiVANX6DzaTJhMfAduoimixwCT5D",
  "key17": "343D1VVP9ioTgebM36pPPoDaTvQQDBzYxv2ZmgirWxycKcFFGEevpHKrXnAymzvoguENo2voQFZW3eFhK83D2UB3",
  "key18": "5i9hXWYHjJDeXDXuz2feMga8y1vWbpn9W4QBgQ5bYSiX7cMiWWyTjgjTL9ppsXPTo8TbsMiYif9ui2PYqF8wjBqq",
  "key19": "3crXkK5KKCA8KaZhxzW1dv7qq99yvkx1HrQ18nmiGNZ942s4CALRdQxDxwqB8mSGPmLC82PSAzABALezR3LrqNez",
  "key20": "5CJwTzRjymHtnRJabHaLvkiJJLUHv727uyp9CNpTAYB2YkNdRYypEdEwKsVkcKHcp6MFjVyEndr51edJE4uovMVW",
  "key21": "45w2jnscCo8daBuepXHRgU8kdxYKjGAWiuSyqfpfPRdtjgrJFa2e3Ema9SgMm6CSWmY6kYKTFAGfGk6ms2zBqUp3",
  "key22": "pbMfPXq7RMjeFwjEewnpeQHMR2wv1jJ2Rj5DABBaP73NVCUmBSuXUpCGT8WxDpj3DUJywcdq99nXudDstMvUtAy",
  "key23": "2jMAPA6QPjHqqKaanFyYnqpvECmDPjAQmrSsEhBXFrQ8pXuXj61dUdw4EAwrJSQL7N4SAXQSbDS1ei2KALKzhTtr",
  "key24": "FKbvyzAQz7aTBoZM55XpVKhGSXzgF12F37nCisEaoHpRKhmxtDLd4nAzxBw7rHdbrDnWd3f8CziGazbMnCMpXr2",
  "key25": "aRq7ubxrAagMQFf4sDQK6XsdCWC4Dci18Giz7P3sRLpRvwatUAKVy14McbrLXtBtEw9Ljo82bSYTf1mGs8gH4Zd",
  "key26": "4w1esddZeZbxK5FgZksDBs2RPJfjr1J5az6RgqdbER4RsVSADnuFjqnnzXWgPrS4sQEycMMoek2CNTANiZzYigFG"
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

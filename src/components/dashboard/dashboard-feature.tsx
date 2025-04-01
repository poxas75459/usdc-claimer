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
    "2VgwTNGp6Hxzb7so74EjkBWfwfXgLMvx9rvvRTKFU6JBrNpH4cuoquLYdMEWEMgULEhJFE4ianQTRrmej3etnRq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZZs56G3BC8spZ7L8eTFuMbjtCmfkyrWBTpEXJD5qYafePtp9mKKKQt5NM8NNVqtRqWEohmuzM4beHPxcUCUkLp",
  "key1": "4KqV3pkLNKNwgPmw3vAKeNTBC33PxeSa4whkoat4o8JeXDm9EWZF9hZCijko8d2wWecwEAbVt1skkxbR9pJZU8V7",
  "key2": "4AsRZv1hFF4dmX57Zq3ezKjCT4tgBw1ZuRcc4zSvGz5iHjbEreCUD1KKGr4jntrdqztG6qo4n9ZKw9bfmCz1uWsU",
  "key3": "622FAf6xJdGn4LBUJL2v4b2RszzgNV5mX4vwi7yY4B8zcncnMpjDyzstEazmnwka6VRhCoMs1j4Zz7YgAvxGQNbm",
  "key4": "334r1SbjkFGQrWzxQU5jpfUY52y1yso4SxtAPQkd4SUbkdHeTmA7Q5EZdofhvnZtdYCmktHenW6kNKait6GGP8b8",
  "key5": "27EYybgtm8L6kjcx4mW4rDwUWYBuwC24AR5eev6bbkSGMRdjVZeZEexP9KNzhFRMrZXkaxu6nqBnAdY9Q6ZVXm1C",
  "key6": "56sLb4QtB6TsmHRDrEEi2PYHFX5VjBXXm7her245Wnxe5XoxYSNBYd5LXCdBoMthxXnJPboSi3ZRSVY3EhJXQJzm",
  "key7": "4uhLJQhzkWYWRK7CB5LWpSjF1D5P2hV1TfeiLdwS8vt9ZkkvdB53MUv6NxX5cNHC81haYQmgERP5yA6Gvkuitfbn",
  "key8": "9QvwvgN2bRg1hdxBov6DujySnhGQriAPqPZ8rWVzQAvKdM3uSzfYwHojXCbsbGkMuJ2w8mtjEVS9R7S5mtraDrg",
  "key9": "2iEZqDUfBGwattQYtNht6mT6DAidq297soYsnacbFCVnamDXSiAgMvTjgoqcaHhvKWba1R2REFV2X8sKopJduh66",
  "key10": "3YP4RxMBfDLynhB7qD877gc66Fqd6V64NmgzhmSkbTPyMzRiHQbLnbpfaUkXJfivuBQFRLScA8qx6vgM8YivNW5H",
  "key11": "2Uy7Pgo4adhSDLGR3HR8KLJvAv2KhTKJbXAnc4WgtdLurMEtPRpGU1AkaAPSTi3KEdUasvnWeYfUGSzh9yBiNH7k",
  "key12": "4tQccc9c2uSeZLm3oPg7cZcfrhG1LuP1S4fzVmkrR9WiLap1DTm4jxmmakhDbsXqZiHQg47HZrBgtSxhssb9cDoT",
  "key13": "4pPCNTg6yU5maHv4x3dDwT2DayDwutvPLaTjGX9oFmZ4HFGCjpTe8bqf39Fr87Y5gUcngyapFZUCH3WVHnpp8xn7",
  "key14": "5oDVbKQn7ww3vx1bRaX2KThnEuCtefaFDTfDuHmqVz5akeaCAHYajY7Eo7uev7Kf5u3rF1cNH4DYFazKXTeA3vxm",
  "key15": "4b25rp5UWn6VGAhYTzAQwq2oeA9p4AJE7Me8wTmRHJyhGJUmjQrPhLWjo8YhyjB3iGaLpo4ZAur7nhsqRsukHqbT",
  "key16": "rdVXEDc8DPB6sGoKvFdBhTLqqsRhpoYGiLv8PWSpFiRe73ASkpj9tQ2WH8DyRtc32YJUNF3fVHRfF7qv4MTf4G9",
  "key17": "4UcQfsf8RXvYTa9KEdbtWFvV8tg9WSds4WqAT2fHZgFHb5EdiPyiX7VRbt3P6HYGyuXEmpGxvvcn39YkLDAWYijQ",
  "key18": "4g9CM9SM2LgLPFrXd7d8yBbiG8RPGbjAihdMiKXUmaY6rntgCB2jNhVFLNvKf5cXSy8VUxyMYMi8Naq6Syz1shp2",
  "key19": "AYKs1fNGwLk8XpYM3iciA8UrrHfMQRjsXoV7x1bEnhbuMUToJPx6gUtDZKRY2PRAbDgEemK4MGM64RBZbZgGFi5",
  "key20": "5TuSCT3LcG39btsjBFrZKd4r5etMrXX1CNDtZDw8BqRuWvjFzr4yz2zCsTELgKvL5gL5VYfu48DcXLPKVKZdP3ik",
  "key21": "k3x1cXs7iRcx3g8KVncxgjoS3srP8u2JT6wwSPKvq7wuHufsNwANq74VdpDnKidSqV7cMzPqdDFzZS84RbrGhiN",
  "key22": "4bCbGpxymfhr8WxdrijPtJeF11CCiwDNnwGMrQCZmJE7DtqLPoExQwRZZ7Xc4sFjnSwkXeJU6ZcUoDZWVSfSCPd7",
  "key23": "4zFWaYTvnSq7ivA3JM9MMk8mEM36vHPbGyB5EVYZeof3pSxUcr8QEsKgnrh2HN27KWk9J6zeSUZ6tF8rQ92wncB1",
  "key24": "456NCUsJSQT8RWbiQNUwjgnGLMLoxt367tLrGW3usNkwUUqP9vfgEBoJ7ZhYWsLqtFCZVepwo6VQ8qRBAFXAGJ8T",
  "key25": "T8AFBSAUwvv9S6yDwkJWM5HRsWnhFA5dGrVv8tRj268gnLh14LBa8tSW6hG8JEoZRJVJLryaTUf2FqeTQye5oL4",
  "key26": "44PiN4RYZzv9xBDxCKyjVyrs1Kd7Y9BgDcbE5DD3LBZ4BFrnTNG76EkYzxLAVVy2jyGRF4Bg9ntMwFVbPuvPeLdc",
  "key27": "4jayz2TtTUfLLH78u8EXtMG5E2tAQvefAVvShjnqfGB2HGq5kdsoRyB1GL4Tutm9p2SxKJ5nzhNiEJYVyXkZcyN1",
  "key28": "46hyrWNxjKBky1yHxr9dPyxGiPKTXNjTrFcqZyrQFfY7q5pbPm96rXi5bsEKyMpCKJBJvFAWchoVvNvqMwJyJhNm"
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

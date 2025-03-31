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
    "2DCEzyqRDELv1zMS8WcXE1RN24cycuZWujXv22GQYh44Je2TqJdCgjbSt4L7RzKFbSUvDji4fM1jmfz21mWxrvb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDJq1XWDgPxwWvcm2SyuXpBgWdehjTjhneBmuwVz9sjM1WPktWkewNQJigBFPLtMajktEaJaoruw4aYf25eGYhL",
  "key1": "4ZQ4riuTXvisjMqxHtXSySTphR1mhXLuwzAisZj4GmDXKPSgXNqzyxDXkJQ1VqBiE3P5j7FxZtEWhU6iGqGL2bRh",
  "key2": "5FQ9QGUdeymFrBYjVtH73QStURX1CQE3aaSLRjP66zDScC22JMiko9Aisr2fMyC4fhtvEE7DJkagu8FoTHiGm57F",
  "key3": "2noeokEcmDLu3sGPAASud1UM6fkDDxnk6GPgVvqvBJnd1msQLx6aGR5u66NjBw2M7TxQe8AVpz6U1ue4gFipdYL8",
  "key4": "5ibfUuE3yNHBtaYL1uYSbSY8BYzgHQr8E3TawN82GwZcwSdiHQvRVVGPNHcwjY1xsYnXnLyQaEYf1Rpy4zaRMUgd",
  "key5": "ZG25kEh5ayGFcdBRk23Zzq8zEnRt1oDWMhxx2TstT2rhRRhUPzegrrhEp4YEhTGmAc3VZ8S7uNzhi7TdcxjgoJ9",
  "key6": "4v3fxWsfS9LWAhW4zRVVsZT6HHAXgoWfD6tsWPnF9dA2a6Y9nhJsDZr8bJv2mVTnRjxsv9ZvRzHTWfj9aH15QyGD",
  "key7": "62ZMd5ceoh17VEcvNP2y8f1GvhkkZsZFYwnbKWgc68d47GFm7MtXtLMUjm4rFmpEp6boupJAQTKuWXmx1yHA2vqy",
  "key8": "57zbUeVHrWFb4GG17zSHUzwRagWnBca4TsUGK9yR6FXCgzvmPFprYDrMNGx6gYRRewEZ7nRsjcGh69puJx9rkQYW",
  "key9": "yPdom2uKjWDBHemHkKU5WuNuRR91gMjSEBEYw38zqjd3fAvfuCmWyXDeeRjuek32KN64Ar1MLT9qcoPhN2Bo7dx",
  "key10": "2CJmyUSXfMGUKjwkFfstaFr8B6XyK7E7ppVx6mzBL8pQwi4adSbyWhyX2j97rq7i61o9uZre91oQRr5GCznL4iWf",
  "key11": "5BVrnk1MkAnMSDwYbor9mt2wdFF9J5H7iKcf39YvaSnHwyjiY4aFN1aHMEzDVtnmviDT3gGizwhD6SXzANLyX4am",
  "key12": "2Cm8bmwdxbWzdzxQX5gPpqEU4zHMVKu16nyGFj19Nue5WTtDmkapasdbpZhqiiRv7nEf3kXSCpYWWtKaVMtps12r",
  "key13": "2YqU6wn9j9aCiwtDP8g1hun6sJ2HAuSyXsfUYKCiCF6Gcxpi7eaqHA8So5kZN3burejnXi2oetK5FpsQpkLJm6tx",
  "key14": "2Gg961vKGm3wQJS3bHtLi84RViu3REyq1BqLW1TuJRqUEv8wrcfPg497xWADnQFNx3HHCqtTG2xUoh1QfCpgicHB",
  "key15": "5LvbcwYokGodyNEFEmaYqyraDHbJbGTGwcaxLUfcvPBxq8ib59Hs3ZLr4jNcYr2UmUHTuywwiPLsqyisHkbbKDeg",
  "key16": "ziGdn5mfDxGf6irtVV7CtYS1kC2aivQaxHZMtYP7a5Wr42mSLHZw8aB2oVL44H1nZgoUygGpG1zqbWWwbUzsL24",
  "key17": "2wwA7SySYJ6tMno2QZ7oQ57qPKRkatCGB6oooL8CNhL8XwQFtv5BqAwygpzkbM6TEYVcoJSZDc3eZQJ1WeA7NZnQ",
  "key18": "5FQxZA37p4r86AjLURV8bojyJ41JBRur5JoUwXkGbYcR42SBDmoZqWVtx686D6YrK1niBhLLrvzxgVk1khFLMczK",
  "key19": "4nRtxDzaPsLbhw9r6PCnJuS27P8sGtJ8Wk2tHMJrZn9A34oxbaaSy6fDPEhquB4wSNKxTXEKBH26gfz3CwScHdYq",
  "key20": "jWpmJQwLWfNK8w6Z2cZynTTHEnepCysAHWZUtSpHfWH9h6f9n8YcfGVMbupTWDWPJ9wTq7Nw8SfS9z4cAmamFSM",
  "key21": "3GduKQi9Hc8YuEL4Jgp4535pNfyNJxrLTjwWz88zXDSEBbEr4LduKCpo6rRJrGFZ3KX68gHbZMZr5sjkB8MphjA3",
  "key22": "3a4faBH5mBJM8TByJHK2gtQCi739AXFzHxmq89NXn8YUwtijKrswC8mzWXVHDAbbsQe3DK2krrvCyP8v8wjciEDQ",
  "key23": "3NPisNCjpfWxnJE6SEjmkxuSkoGX4UpJXgoWEkr5ntqzgnuM89y4uHdD27puGDD37QpqmTpcXZsm3NSRwsfY3y1g",
  "key24": "5shXGnQK4Cv7L7AoaN4sChLHuDUmDYN8MGLwboVYLpHGex9UfFuUhpQms6tJ4LsL5fqwpFZsW2GSTCP3S5J4c6nC",
  "key25": "3dXoiA7fcFoJNjbbprEjUPxNP6h371hi7uD6z7drpUfKr6dC5PFZ9z8vaAANreqfA5ADEToJ6zPraL36rnuESDZ4",
  "key26": "5UsuSr1oJ9yexYedtuK6vJ6AxgfU36PNssStpeukthVWtpBWnPfy2pohGKA5YzLe3QJXbiMTh6ndsnKEbxR3RrGu",
  "key27": "4Wtz1VCRF8PRq8kU9wufbQeQPAP9787Kc2MzmzGUTmk7MBBRZzukR5AcHRib3TTNcBt8BWwBoMCMUnFUEmB1fBwU",
  "key28": "4ALckToRUpvPA6w2ghRX6YgQxrLEphp7fcPLhYo8PThXCiL9phDQZNVunjtfCP2C1kXALu3LaBiBpGuBzjLDAuVo",
  "key29": "3H9PvuecrQUc2wepJckhtykPhunihmkZbuBKBP6QGoriFe21cqg4QMKgHAkhbrDpekFozd7MNnK6vkX3rScnu6a7",
  "key30": "5wNJhgDAeCgi2tE8pmJNEJLcq4G9UQasUJkoc9V6Z5RHY8AfQxWaBTMgFiansArGoBNxExFEZKJfBejjrhCZxvS1"
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

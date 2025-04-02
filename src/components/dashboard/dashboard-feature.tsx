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
    "2UjwhfexbzuotmG2sgYJJyrkS9nFmbmYE418s2teZhXvNxaP5TeDhnrAUUoeDn4hvZd76KPAQ42qFjDcwKggi41U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zLenQuXYbaJiJobQChvHbpDAxXMKbSjiuWPzKE9ew6KRHP3pQJnyDXe1gF8Q45cjpAzBs8aQPhE6jbZPYu9DCfz",
  "key1": "4b7TMamoXALAcBE1AWBQBesBBjfr9r3hy8xCuyY2jnM9hU6yVs2XHfi2vb88aRTUWhDxYZs7NDQqYPDgpis2bm42",
  "key2": "2PD7GxfaKaTKnDvPTNMQyuotWEawxXi2WB3VjoaMETA649vxtPJpwAjA6D3ja143fgzKiUajtowoHuLQYvkf5ptT",
  "key3": "VckPNeev6h8pXp3FTZA5MJcohUZDuRXKCRXQvq9H4wffZR7sTtM589Juhvr7ABKvGhgfrwYnptKMpwGxWsyrDAu",
  "key4": "55h5Aa5rDNcKj429udWFNuuyawYR3nYwZKG8sHJqKwgjwHcwuk66JerWdeRYFJ4qNo53c3SBnzv1dmEuvFWtUHgm",
  "key5": "2Gkfwa9iFLuxsUvAX46hUWKosgLmYtztQntbzYtbFSjL2JLxT1CTSJCkGJMoVccymiT3KzSZuJ8UmXdfwvzS8CNM",
  "key6": "3VXyYqxh17ggBoLK8djQRMZmiWjDBtfYpziFKCTGtGZkLdJQ7rqxUV5rSewEKnVLpdVQFYx3YcHTzLdXCxGaBf74",
  "key7": "4a3o7uggD9B51c2kh4Bq3LMjN3vFVeQBY2sA34CMxFfRy4ndfweYi4ZLCt7JWCon3LczvyttWPkrCyukTrT3qNpK",
  "key8": "vqsQJUmMwruD6AfH2i3DHYa4hYEsjEM48nMC2aHtnZhoWt9vMbnWeZJ5oqePCGnqMnybQQu2dhLzQN2HKp2atzn",
  "key9": "4CeKAAz7NKjgTq8PnjEUnjepgLXLKNLFKeZEYbiwUn3mhe8dtMcMbFKEQVUgtDVgRiQoXEXgoe8HbhaK1hEiX5u3",
  "key10": "vS6zvNWkZUW9R2yGBBYPS96G3zkxAML9jLj7gw9gd9juYFrXhUCsgeccs41wvku88fRak2HRooevgyVBQ7gaYAL",
  "key11": "62cKR9hF41MdKdJNayiZK8xDdNMqEM7ApCowDDB5WzaerTD2J18dZ9imwEm9MLUtfF5ynq59ViuRDvevijd92DUq",
  "key12": "41gboj7jqTZiu9VRZsPmwc23QA6zHuuTteTfYxna7Upwvx25wGzctqzwZL3cHXRBzdgNT5KmkQJ6kQ8n46frkBat",
  "key13": "3kMrqgTEwSuGwtQnpYggUMAERJxExXiMN8CmCQRBW1shGBSbeeWmBg2CgjaHoxGzzUws88tTY3LRQZKtZvvd24C3",
  "key14": "4BRBdccZutB9bwpb9faqvWr6oVRfDTX57gjMJ1hEpyCMe8k6J3sWuaegGm5dKk6t4TwvGU3SasBYHyqszyY7Yrsv",
  "key15": "fx9xf5KfFCQn5gDzP9rC7Nkr7D4uNZWHa9U1fJEHNtLY2LnuV3V6KS9ydSEb7Dy5tVoqg46xDUrLnepAWxaXsEE",
  "key16": "2tKhitMrRKSYVQmjwCNkqYCZa8JEtZqbKa8QuKVUFkbRZsqrXPaF56gfGSwx6HUNRujxBndhnbd2Xdvd1LsTuLeq",
  "key17": "3w28iFxxnjc93seLegbxijQMirLpvqcDBmniZ7N4MFXM8sWT9wVRm4gJXaxQSqvuhv8jZzM2Z1S1qXeerAu5PCBc",
  "key18": "4DBPsgyeamFQj7n2irJgF3om2bsYpra1XtFScHLHPXWrVdyAoJ8ZD6LqsfrCeBWMKsaX6dqzUpXMCrFtbvGCEXYh",
  "key19": "588HrawGfyQC2J494dhx7CSPotMTbeKcnrKpP9Vfznp5sPPHswoG6TaFpzqjhCMYzqtAunEXtvR4t6C6VovVsiW9",
  "key20": "QeQZTts1hsdVGQWSDkXx8b1aEAxh2iLgLCm3fBpoHmgXs8CvRdKR7GsDxiiyH3BezjRSFZPiugHCXpNA87GsPYY",
  "key21": "26Bb3RhrHvbKbyTTupm7pjPEGmmzAFu1fV5yN1FXfATDHyVnbYX1SEsKoj55c5rTKDuQqAaxT7UvzDJZ6LMrorMP",
  "key22": "2CybUK3Aem91zXSpUP62kUULujXp1v9pDnwxpBM7vFLRXEF24TNRrPcoYSCkiEhTYUWwiFvpF1to6FtPw2ZuA8Xs",
  "key23": "2VwZQuiR2JrEeGRat25dRk3Q7mzKaZMptRTjb6ownN8GrBrdffwsD8EGDzcTZQFcpEH6WtnRBxQbH2dPk1TBRizG",
  "key24": "p1Qtwq3kuV4TQm3hpQcvZrqCYPZgzDc8CDryRXz7KnAaZ2webugQDN9YnHiWx86uguGcGRZH7CHzq4ZjncQph8L",
  "key25": "ZRi3mPd4erzr4Zax79CJSRZWMSmj4noTJZUJ2TeoZGbLtMAxFfoGMcW9rJUckBmKj6FT4sCMDeitggBzj44XWVm"
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

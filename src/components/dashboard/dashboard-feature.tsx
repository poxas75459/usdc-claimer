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
    "54rN7HEbN5LTaFmweTeKpdwcCCNc7GxhLUBVAiZLrbnVcRsgHpsdqLK7m992UahagyiCnPYipB56j5SCK6SJiYpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sdfeLXS5c5q1F4ACgKDvoGySB4RLWtZ5v7orwRnnL5nDVppsEYmVH62ECrmnTSQQCFj3cmgTjuvij9F1Z7wZhPF",
  "key1": "5xJUNjQNGWPquXsxxQjWm2tbhYCXuoXc32eQFkpe83zXRpew1CTHgWQVSQgxxjqcAipWN5wSVB2jpL5k8bEDmAGH",
  "key2": "zncHQBbkGuCLCCtEjFTYEGc86TdqG3RQEzpLN68xooMXc3b2u4acmfX16HBwE46qya2WzjG2ricRSVBWS2XqbQN",
  "key3": "2n3HscsFL6eMgJF1RQQsPSG2UHQQnYfV8XZkxUfkwFzCEgTZFqp9CLLBKALeX3t1dtLW5CbttVCYKSCoFmdwxfvj",
  "key4": "66tBux8aUJsMHEoj8qjZhXs8vxxCWVRkBc1EvZG63U9xd6P5cSj67F7nW5wJhEPkDQFiBzt5PXpiRu7rJ6fKKUPK",
  "key5": "ZKGrAyyhPwFsxYppjxmz9zt1gYVaDeUYLYDMoZWKeCLt6ePPeYxH7Z4Eq4kUpt78MjB62mj1QPmToSXh5ZWqPMz",
  "key6": "3G6FgN6qhbgqtGfqSJjxEsWCaj7A9m7Uehe7JmfSqMHH7bQB5x5zALpFDD5q2En7GnaXNgNUMev4hW1wT7ZAw1TF",
  "key7": "4kyhHzPw9dDenR7nb6tKLAjwVKhuojkbjS9PcSmzaYE6UsHbxoaPvscPPETuKmKDPYKunqPrGTcKXRbpM4FVZrbi",
  "key8": "3p9cn5qZHyPkG92YvsP2sXGzVTJJUrjprkXzWH1QsLjsGeDoe9Wpt5dc8Px1ujFcXoFKkLqqnZuXkncUyd1kmLNo",
  "key9": "2aFwT8tVXGTFWNYAkN4NGuZ744p4VoegH9wNnt9E3ukWZdZY3j7E7zL2wnm9Yf7WZM4jBXLqer9vAQ2RL4J32UKN",
  "key10": "3d1LunpNbkDkeu2AgDYo2xULnySs3j7a1MsLWzdrSDknLUrj7yuSTfTi5r4NREuWyJkFZCapskjuoJw9Ghh1RCsm",
  "key11": "5GVcZxpgMGPTtTUrusTaVptSuSztEcGFbTjvJnGqCqBuqq6nPxY3qGgrfva5ajDhpKFqeLeCbyP7imnJ6uKQCMCb",
  "key12": "5ASNLGw1mofjMkhRaDpHyRoQGdmdHHBPx72ep6DxQsGvsr29T6iM9zSUukcFCUiWgHjrV7d7h1YXhnrvvMunUwHh",
  "key13": "3z7vXZohxHe3BVtK8C6mAXZGhFPTC6rbKnUKda41wVyaymhLHwuJaEniknzUA5jGP2YtQMTegNWMYo6P7xGxdUsV",
  "key14": "4vY9FUxQVeB1XcJTFUGSNfmsmv89qhWH2JS61LT6Sfok5yDD36FRDpemSnWB2qF8VzmDn3NRPtqyKPFPJyXZGj8p",
  "key15": "3hqYNnKFBrAgE63zFtuVxVGiNfaKhtu1SB2Y6CFbAmQ8n7Yv7WAQ2gyExD27gTBY5LocbYkmNqWAehejk4hhbxCE",
  "key16": "4TAcHcez3eS9TVmLFLzKSd8icvERYzppXQBD1Abo5G4gjM3BGDxHSPUZXQfizg2QEWf9uwzukLv8Ps24H2EvqyKS",
  "key17": "5VJG5g62AYFzFUqdGqxXG4jkvTYRv1VoEkVMkGa9RhVrRXF3VfepRSLuMHouDEQwSJeY1X1Rpf5SoffZGSFMXS7T",
  "key18": "cXrj8z4Mzf9TrzKzQaqPfBKtJ3FeN3MnvC76iDmabeh5KgGHySYokaseNuSKnScRFN8QgRR7yGaupKbHABSTjpa",
  "key19": "Z2wFsVZg6CVgXGoHZbJQ3nFq95svfq4ekYLj22QjVBdonCxscYpgGVqmUtrRtRipU9M1oPPYj4sEh8Xa1rzo24v",
  "key20": "3Mx5ZJte9XdRPGHRUia7sLKgyuXwDge9gCjNgQGavZRT4z6f5ojL8hKMFzVskFjHq7VTm8fcMGQabSd77fMUpJMG",
  "key21": "oCwJtSsMWcJBEpbyqeTTkiwo9112qfPn1d52VKfRaKMfr3FCEqdmQojw8bg8DBRnMteuYkU5LfFnDv2LcUBg9go",
  "key22": "4o9QoJfEn3NPUyGmWv9WEVSWW7nNuYT5EDT855G4GCpDvTwb2RU3QzWJHCt7ybpEQnfX74y16HvuDjbLhDKx5Uj4",
  "key23": "4EC9AFMfaGhgDtzHgu74qUpPzrfBXWMhWHEYGSxf8XnyfaKvYKCzG2F7dMETYwStsKu86PFvAvveGhPWZoywgXCm",
  "key24": "45qcVSNTi52fWjhaVwdGhpHZ5WtwVUmkheJeQ1X35vUC4xtqRjqhJ6oLyXhdeFayCR7k5AsBG9a3nQcRu3JzTYEe",
  "key25": "4nxvc3xzezFjnNaDpEJbBSC9567U3CWV3DdQTXSSVnMMeJoM33YtMaxNaPC4iEnvnjfEyqHUPR7KSFbNp3moxpYC",
  "key26": "5J65LgZQmo6YfGTdMDvNasqVAT9rqyJ21UGaCFc7eTipoPQDtuKovo18NwNP5H1k3a12PDp1ZetT2Kcysk6f3Q4K"
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

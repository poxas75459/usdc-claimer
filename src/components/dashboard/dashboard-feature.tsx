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
    "x1ZbHbKBuFdePqjaEUvr776tJapQqDVrK5MocKoP9p36NKYpbJPsBuk3RNcgRSAw3dFeYv6UJw3WkmSXv5RAHxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uTr3vBvpZrhFEZwGkgwwNuuiQb4RpqT8cUoqF2gFowYbFAT4T1of4WEF3SSZeh7JuaJ5pbb2LhoGyNpYtMJFMax",
  "key1": "3F2kuFCij5FiPLNZTheCv6yHm2pWL5EuijywfKVMieubxFuPH7Rm4CRXt358Rbu7hbstoFwzCtBhMPyVoy7xuyVg",
  "key2": "4Sbm4u72Ajm4d32AKFzPMDhQf1oUUf9GEPLWzmcE7Xn8BxzZb9JPzmhQ2PKWtU2gAsrUTHT2o4DDDzZzBut81G5a",
  "key3": "yVBBbei2hf1vR9gMngWEAbntXs5KWopZgu4UjUhnjJw2kZZApjyrC3Azos4sz2otcvHFwR2qwDFXN2dS1q6aAwo",
  "key4": "3jNs1soixzX6YJPLrGR3RR3qS9soaB4yELNE4Rkz2q95cDhqwhUwv1FPZL6Th6rU4oxFM3vTkqqZdwLSdNatZcHP",
  "key5": "3D42dvwSVEnJQJ8ZqYHPWnmmV8y9uaiqsCniiRnCBhkXys3weuePdQLTHKeGn3kouDK78JA6FwrJqjiEcZJCfwdL",
  "key6": "3nmvZ25pjrSjCEDh1DjEXCUueZhLZ9HZ9aDX5SKHt8qAXF8D7buQGvCoLYRnmmHZRyWPstDWCnC87swTnNbUNjrB",
  "key7": "gKEhRX4RKyWarM1TCNpcVkjCUNSSQRMqc3r3jQTwoWDVFZVrfDrySafHmZRhGNRzjQRBCxRvNd2aPRnySDXtszb",
  "key8": "3ECpqWS5C63ta37iVJThJwWsHjmmUi1ya9fpfXqjDgwGD4NPjMo8D86YWqh99aRmbzVYgv5EZe7yNNihsgrm5VbY",
  "key9": "38QYGjq8soaCNTjoCJS9gtsnvqbJx7fpUFCYVcGgcvpfspWdF2mAQf5WcHBM5csnRKyyYCqSf9Kq8TiaKgt58x4q",
  "key10": "3DiVvwHMJRmSA7t2NMeGAxAjiqwejCPWEg8UqNbaZTDTfsckzHjSFeAsrcnYfgZkQELeBQYdQdJAYGPydzVrdj4D",
  "key11": "3FzTydP8fYHEbt99wQhosYUBi8xNEX1vsysS6cX1XDNjYqHwL9EWW3KLpY1CwKVZ6xrGVnYTNWq5e8dwcovyMgkz",
  "key12": "5W64wiKgY1Ha27CYzZK4CrZQGvHv5AfqEZ6ShdyuV5SvN5djQtbzBnDAu9N3Whq4hBbbqZr48sTvanjdfNQePjXC",
  "key13": "4y533Zw8RSmYyAmujagPtJxkU5ZJJodVtWYXYuonyWTMwnUpGWuVJ25GCKjNhddUBu7mS4359PxoEBpVkSbC4BGB",
  "key14": "P9mVGtuMdXiBGvoLeTcQUE7uSDsi9Jfv6MkVHBoW6BtBpbEx8vMs6WxXc5ecqtq3rYniK9m7bv4cpzjqfBgGhJ5",
  "key15": "3CqSTwBCuqqWhexotGZxQsmGMU2HYMBGWYcKeFaKY8uAG9WB9jW1xRx1wiPuWPscd4S6xNDpUwE2KfeATHzsPaJu",
  "key16": "3fveuEYPu69mkCLz8gxvqkKz5eE1sSqBGvfAtiR7i8r7mkHQs5WHcA1zABhpSp14k8fgsZRsvU8kQqAD69MbWau6",
  "key17": "3BtEUTx5wfyrovTDt7aWsyrdhrucbERErVRKcD2ZFkHkGzpQrULG2NKCmJAANh2gbD1zQCgbBmR6JSTqbuKKa48u",
  "key18": "561KZ7U7qKy6y59uY24hxYZ1tNwsYcNTCaoKAQos1Jz4xAkUWpWBwJUJKBmEfkLwNKzsabHswQjGG3QzEq9L7Mc",
  "key19": "3v8iDiCoBZvNjoX3aVe58RoyfxcKym9P2MYQTM8xqzmURuND4S59AZxKSNTDZg73HhkduBomX1SpyZitkTAmkkDh",
  "key20": "5h9KCQhDBadgPTcdz3vZ2cw4Aq5GAske8mGQeUYFr3Qnr8KmmbMrGxzAMhtfWKqXxarTc9hmM5Ngw9KQyL1pjhS5",
  "key21": "4MKu3uoTGFw7pWFa89pdup89h15Tern2YS1arB5kevA4sd3Q43ZpYPFw2pBXUKnFvTf2kxzEW5eAcN5J1TNYPA5F",
  "key22": "5Lxp9HdTEpffmh3sj3d9fWVGMrsWKG1q8N4gYe8usNh8cQH6WT9BPxSqcSiiaATpdL5UtogtVwmW1roMV7mUZTk8",
  "key23": "4mHRLW7Bv7qvyFD5z3vcsYcVKiJF1quY115zEfh4JYcWmde8CMNzGCAEcP55T1UTF1k8J22CojkhBVWQVaXLys7u",
  "key24": "5rs79ZAQ5JnCtVgkYrucZJnV7GeVXnPL9pY3XSmVgCUU5tUQtPhcwPRsAdhrRp7fVBrYx7Pq4qbqES7MrPixZqpe",
  "key25": "2Qnm2q6mDwFtFVAvLbgjeQ1n4fBXFvzxxB5gBFXsHd7kotnM7T4vRf6ZmSmAPeWhHxCsJ7W4UX5eoDTimF2o4dHR"
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

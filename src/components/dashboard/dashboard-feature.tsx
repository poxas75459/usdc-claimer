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
    "FYq1XLotZhruUc9oJbQFVZZ99Ymz1uy5qmD9eq7VCD6CR51fJCQjwJcBqdLphEen6tcRktWqWg58Kh5wLydb8cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ygxoo4V2CE1x2n5LHep5oskt6NyhqNFLhjcmec8pN7nD6DYzDko1JyeLX97w7f9wfQEAPW3yNWbNMcxY65gWJeM",
  "key1": "7bsYkDD8kuKSgsZKqVTKFi8pT2RgQozGmjP9aCTdqXJJi8c3WvPjTiDXRTFjaeyom1JiH9roxahiLsWhJGbYQXC",
  "key2": "2K3hNbozDpGt4w4hUNEuDQuCW6J8b32iar6wprpUEuSFNDDMQt5DVJPXRCpSegCvNqgMQk8AYJjUpWvFm513WsCf",
  "key3": "5szZZSCvUQmyv5fx8PzqMgpUMscc8dtaMUsoHSSmaouwCirYVNaGxC22YvDYN4DuZ7e9Vg6EdWo8C3N7yLHwxwJ5",
  "key4": "NGziknN4nNVZGzqo4ncFaCGUeaCikLTqymWR7XLVaotWeXpAVoP4ADi5mmMHHNUcTkh4zYCGakF98JCxT5YBoSu",
  "key5": "65Aj1aG52t2vZGyUf7afoQdV6469KRrXDHCqe74wbnQuNmEcxZ1jT25JfKCqgRU5S1ExctyZYh675Tif6LCHYg4L",
  "key6": "28y3ktGU4jaVKZPxrtp6u2s4aNkNLayaAx3YfjxPobc7CCokeSZznUPL4GSk7b1Rewwu2ZoXx8XJK6EJsCqYDcmk",
  "key7": "7vR33SGUsv8a5sdFgk3mNNzrophx5dWJ1V24vkQzy5LM64k24tPy2xEjrtopGqF5Yq3hkfwzhUyKCpJLuLE6TBu",
  "key8": "37AfXUvqKDUk4EKYV8762TApAYnxxu4puJVzNbz2dhRPcsZmhB3RgTMDsHkwLYgQiseLuqnv7fwCBNgTAVJSJWdr",
  "key9": "5wULAKZTw6iq251dnTxeD76HDLov1NAYeVcN57DNkYCJXbE2htU9HtLTsvxbuRM5acqqJVYsQjB7rvWJrZuUnuq3",
  "key10": "3AhQtPxbsgX3nfvwNQjsZFxRgcpA8EhzXAM1THXPgRrthdiuNgEw7ZUTCfo9JF3ZZZpcYHGJ8xwC7jgd129er4q4",
  "key11": "efx7v6VrXiwPhkDdkJEuaLts3H4GnmLT592k5Ko1UyaaQjvbXaknLv4KqiNVprZdbTxRBX7LiCr8d6e2YgHP89Q",
  "key12": "3TJxfefZwe2ARmgAsnnUcKKwbRh8mu3r7Kdo7aDthDG8efKXh5se5jkS69NSdrQjL1UdEVj6F6LqJfxLi5jGKnih",
  "key13": "r62jGrCpBoaQZVw5UnsPsMSX1zUfHck58DT6PKJNAsYt24JU1DC7VNfF5MEmPos1FYDqAjC1P6EyNfD4sbDzhMY",
  "key14": "4a5yuQn5b1hHmQiitoP2BoYHNsRpZFaTfc9SABpQa83MszjWv6fjCkm84UuuSRppQitHrqVaSsCGznAyEFBTztYo",
  "key15": "3D8exTueEgd8Wki6qD9KNUiyoPNpYM2Txo3vz42BS41do1o8s2JZqawnZ3U3U3HbZ17HZWabkDB1wzDsyqToqTVN",
  "key16": "3rnLqDecDZ6rJVfLUP4y6uABaonDHF8HsbuCZP2Yr4G1QAFuFGfgcqSijgoZj4gxYh3wfJc8uUXqS42w9NScxQfG",
  "key17": "S4NJpNfdE56ZVUvAx6oG3gp1ZC1pZhYvvegK6UQkSYwFyMHvjoGEm8TZxWqqbq2bogJ15MiJ5b4ntKCtF4WgBZK",
  "key18": "AFDArQ3EYDPVVtMXy4MCDEtrsnGm3cnJstBELMnWZPohnv1HbH5WoPFXN2hUDERtzk2Ev6tZdHgDyhmTrH7xEr1",
  "key19": "66ksmsbNR16LfSjjiA38ASrWW92zChVX1xQ1rL6YcL3FsrkA6uQiPQqCxunVDjTTQyeJGNtc59biHL2x4qiceWEK",
  "key20": "2QD4aKHWvb3BZZPzqarGLpHyA4DWpxZoJRHs2V833W4dWfQhMhgrtFMTtPcZNWSpcS3KdK145F61JY9gUVD1nvAq",
  "key21": "BzZeHzfmNqyWefKQe39XUz7tpud7hTqsdDNVBQR7wtmBffR1prZMV5tgrBSpUY2JqpwcHQLSYby7jdK12oVixyr",
  "key22": "47TwJwKMUwyed4MnJPndSuRoas2fjhQXTq8FobZZ3bVTa6C7Ecvah133d3UmDCQV2QHxE6UGCibHyju93u1TDEwp",
  "key23": "3J1wej96dk9CLL4gEwrsEq6XUoxHo6DoTNXB3vPV9SRUfWyJuXb9WVAfrrViwZNj5QzvLsC3Tsu155A57kNNsUdL",
  "key24": "4TNSbX1gMMtNTo4yUn4ioPQ3UHb9HGPEXUgUvPWnJVb6pyu7RV2ovstNWwJAJy9vkZiWzU7Vq8XVkX2dHK3L9uaS"
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

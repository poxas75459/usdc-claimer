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
    "3ummSfJB9L4YyYMnJepYAXKru944HjWxDFrVXU2xRz95HBzzqY1u1YBfhBwD8UaDowWdEC1v5y2PvQBhTom1zpZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUD3nWv9MnokgAdagqw5ztU1AFgAo3dsopxme4CWFazaVQMi7EQNYsbvzGoiPYWvyGw55KN9PJiTjJC9iwgQmqn",
  "key1": "YSXXBWXZ6RdHPdaJ8tSkYQbG66bypGW6RMsSNr8nQ7tky4ADgJCHGtXrX8x9tVCPnLJnsUcdKQ5yHosDoJMjHC5",
  "key2": "2zMUHDn3urHfszU2yxowzm1bS6rCTyULyW6joRo2kWWA1AZRsDPzMgQA9tZAFEseeVekPA2RJ1nKELXUcEZX9Dr7",
  "key3": "5zyMisXWTnww78RPwG4R8Ktc4j8X8YetNUcCPrcrog5QHsGuKs51UizwFv65umz1aeAfEJ9D5NBbuatpAURNjBfZ",
  "key4": "2ENUyNjRCWrY877eLxDng7LK6bjV1A6e7yRFY5VMVNbVGZKQYGFZmv7Z7eHoxtYx9TEQDzPV7EcQGjr6mwjktnSk",
  "key5": "v4Nuqp7rnL9BfmDLvuPvJ4KjBqo3u5Q5xNYfTUfAKBvGP54XDzooD5awfYpE1H12VY6i6bFbJTRmwYEpdniL8YA",
  "key6": "ZFJJc2bNKaXfxPVjCWNy8quQfzsBNagB82ag6stAbfsPW5suofaev6FJtPeo4s5S6saaEhFub4TuAtUWzQAxh8L",
  "key7": "4CBX8yQoGWmUXwQv4v98Lx3r9NphZaWP9U9nzG1m4qWf4fqnCPHQqL3usLg7xdycHvyhnXyzv6FL7qCiWPBozK2r",
  "key8": "64CwYM6mzkEUCyacSeFrkTv3FbXTuvNivTBGVnNcnBmTTa3gmfxNcuZFUMrF9dx3n6eAEv2YwRhigCY8XfEGgnET",
  "key9": "URFHQe8YB8PdMCViTnu1mC1NPcVsX13wMHVomgJypB9PFS2z8HmuvSuTGVHK7Jpdzq2ScpnMgTGazMp9DG2wQmn",
  "key10": "5DEpbLNUkfaW7f493Rp2fd62Cwdj5RkodDGXHUiCBJpGS5qf8Gh1g6qFYEdPPi174wErTnWyEzdpwWxrifUr9S1h",
  "key11": "DqjYMTPjE5m77iCmGpzEA4sGwKi45eFsEncuSEZkCdKwaTVriniVVV3KKeDq6oHcbY1HG6DGZGFU5p6b2xNZeTK",
  "key12": "owq5FNEgFac8ovPkkoVM8iDfrENVyd8rgHQLieM6Q51num2LrpnZfr5SgYNeoV85FWyX5jXps7cmGCh65nLCqb7",
  "key13": "4d6cj4x7nmr2UxtJm39AoY32MVwNup8928Jq2SLRd9gVQMF1YfkUJDyiiKs7RaKLfnzXiEbEm2or2B1Tj7gRDDig",
  "key14": "3d41RQugLnuvDnLihfQDdLsjmjWKxE2eQjz59eTyyvMT7SKQHG5bcsqZm9MM619V5WrDaTh1PEGLDRNLLk8LqBDB",
  "key15": "3FTgWeYkMaY2k2xVMikL7BotBFQjPCubbUPdWpVfZXzdF5CRNwCLjsBSF1vH9oiy2kfAUryAToWWQDm9xVWx11sN",
  "key16": "ob187323yAdqe1PTcnxZKVwXAkgbwuUWaae4mtv284nnZkmbGgnsWMMvy2UfZ6zDv2LMEudW1anDMkrxgepS7XW",
  "key17": "MspXLWzE2P1uGUPDS3LFe2gN3qbQnC89b1qtF3bq2NSoYhmhzUDtDsh93mDty7Fb9J6MjXtthXeUBE98iKrbNyv",
  "key18": "eajWHaqEFm2ZeHsbVTsYVpBsaWvQetEqFZH5ZrxLhohwvyXhfzpGKzZ1JhKqJHvJdG7KbhAoFiEvJxDRupTPDW1",
  "key19": "2CvVXtd3o6Zhb9UxAnBdr1TRXmsLYvNjbp9XnC23zXHWeGjYfCioj2MSmsxHgfFP3asNXhGe5T47r5tJ2WKbo6m7",
  "key20": "52Q8xDSetLpMB5iYgvEHbZ1jjTv6657NPQthpQfeCUtwyHuWwZFhz2sjyEsZVz1Avtr286tMZ5KBYqENPSacsJkK",
  "key21": "2RPH1aezV6yUab19deSny6zokQzqxTjmERVF81xA4Yx3EJK4vjfGGxSWHoAPJcTgSR6HbcBr4R7eATyUrKJa2MGb",
  "key22": "5fbmLDaf9vjtszTjK9CAd8TZP9k1W71HqPQGp6d4ifUrxAkSSkWrVcZC27XoboYpM4nUxqhwvQvBpH8DGofbQbj8",
  "key23": "3nhk2pLKhqJGLJcu24DSmLEfqnUgpWwcZUQdDGkY2NU8GWhDYyHbR2hsjdbLBmBDBEAo84VA5qY3eQ1wJsN81XFL",
  "key24": "NvFKg3CZuRojBU38fEajh6fXktnJrxR2xWTJxTQgitkHc7tAjzu8SGLSHE7df1YtFS55xa1BVnTCWdfQRVA3G12",
  "key25": "3BhLi4uLie4bzKydKWYC9ryBJLXtQbWovuytnge1dYJJMekpdiewjWT6zdhETJkfVb5X81jpk7CoVzgFBb7sSvvL",
  "key26": "V76Ryr2xcSqvvHKfkgJnU2JmYXiMmxWwP41P66cGqBEouMnXo5dJQ98uTCoeKPR1J1RMjdVDjaFayjX72Vuq9S9"
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

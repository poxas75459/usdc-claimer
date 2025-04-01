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
    "5fWCrQoMsQXxAUUm44bjUZJDEjCDZSz9Upf1Z5o324W8gu9pHbmUGs1psMLoJQc5xvDVroJexLJWF9G5eubTjgcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZenMmEEy6VWD2SSHdKCdoNTNoeXZpCRXDkHhS4MbVNYoDeLRik3pBfrhHm5aZfA36f6TtHoFZcrHZzFBL6eoySb",
  "key1": "4pFvwwRnLi2ojbDB1bVSGVgjwe5Qot5wUhT2R6rcMw7TXx3nqoEMLrSGdKuugmyiJ1NVsJn6MkJjvxybb6ggSRiR",
  "key2": "3DUF7fqxoXS5b6TkmJoMvgWzwAR5LzwpJ7LCL8iZHJpLeFEMFscFJcgqQvoPyhoDXVeD8zYVRLoHv7bVH5Upkbpx",
  "key3": "2wRjo9j3MmyE28yjyvvE3KhELS3FUmDHLs1ur1XiFLEuGj5eGP7hDniBMqtC7wfATywCEhPvMH4S66PeT6tMuhpK",
  "key4": "2SMpWScSDZsYhTPaPg45QrhnfVWELzgQNH9fvDZ8fA6WPP3wQaKoiykAzY6tVUVtHrsHiKBUPXuzhMx6DKzJcFZX",
  "key5": "3nmN1W4sNUPqKmtZuwZLQUYJdxxWSFYiKtvBEAvHvzWxWY1p48h39uU8nxAndzR1gVfr7QXyLa8TqsE1KVacCeu7",
  "key6": "3E1A3kKwFWqu57uMHYxBD5ymeG4wXWiK3VgLS4ponnQ3PFfm9gHUt5gfRYUc1JjpWg7whC8YNrEjPwbgLoASfw9p",
  "key7": "46jVsPZtgeBZXrZYeY7RmumVunHEg4i3ihLdevtAm2U4a96PZ6UD9dne9Zjvawb5qNbj46dmxeuQneCBZT5p6hMU",
  "key8": "ZGL4ecof9QCUZR3EUz5WJfKUShnBwbcUxrXcgWwW2uWLCRv6P6EUoRwn1Kt6kBoxxFmVeTiiLCVf2wS8VWJC55L",
  "key9": "5SYq2cpR1ao2hMFRG3sxp1EioW7vGoZrBJhVD3P9jhw4aiJW7qhN5bxWCE5SsMDKAqeWUmHDpKxxwcs5LQ42SHCj",
  "key10": "4QYVuuJqXShaFKJWhCgjB2VTmavwCLe34PLdkwnsUuow434RqScnQjAokfTw47nMtuwD7JcWzGKP6RxSFSocYGyT",
  "key11": "7GMaEJoWizHTVxj8Y9mLX1iPubSdTtmcvq5e3TsKuHsDa11yghRCfPyrLtBFBCHQmDyUjRk8iYQ23Vcj3UrwhcK",
  "key12": "5XArWvqLcW1XT2uTgzwfmqGn5JVFLjNh2s4jFsWCmkJ7BqDbrJtTkEamgotYGLzyCKLYichq5eQiDjXyzV397C8o",
  "key13": "1PzYrWQ69m4BdCDNFYSLnk6GW83hnhqnjgVUNkpkmejWny6TgkcNzXgdw8iQ3hvvRFRBQYFNAos3FQvpj569jM8",
  "key14": "3aej2e1y2oqwdgoz8uEZHbUNgFKfrKwgkpM16DnibupdkQsjD7JRKp7rvAYV1BKaRqNKahL88F8iY6jpurDeGQcg",
  "key15": "2BuwJnbSmKhU6YgTZjpD6V8nfYRKetgVSG7q4Lr2bn6FyWRr4UW7jM3PBrk3oXvR1LH9x5JvZDvVy8FQe7Smatt8",
  "key16": "5Uwqh54R1FFdLaKFYBpG9wzwQXFikwZb95Qm56CAauUMES5o7zn8o1AGHvqd2Qn9bMkv3WLJcrc46o9rA7hKyhug",
  "key17": "C7ND9VhtfFhakFwhUJLZwEroJuyxfYAdrhuzhmJMVRjGjuAaZ4ajsWefLdxgwQhm9rVNt6GRFkn2uDfwkqrbEEF",
  "key18": "3eLLAi7e1xjp6gf5h5oui8bQYWrXhNDKU3Tn9G6gG5oGFPVGxw1jvNo4BTT8WQUrkYczw99SVFLtNzxcQgoKHPZA",
  "key19": "EA6X9g7Pj6hLwbFeWtmub4Sq6JfWNWDMQAX3o6dBXwsSUMXDMHHGdCdwY72BkRGReqH9D5epcVFUBQyMF6M9XFo",
  "key20": "62oK3BbUHg4izCQTLhcdtxHW8jY5dj9tJwxCayvPtiDMoPWWFKeDG9hom7XP6pLmZ6uPVdSNaqXw4pZad9gky4iz",
  "key21": "2AW1awXru2PxsQL7vEkuUMHBPXLypFqE7nxbP16eDjZyEfwrAfCSxQyiDsdxuL6Bf318CND9cUhoGpADXPhGMWYo",
  "key22": "3eJC3ujEKQW7AH1JB4uosAByLNWo987b5F4FMhyYzvBjJoLSCoYrhVeWFkS8SpJh3xqdrgd6vJcDc5sQ6YpZUSFC",
  "key23": "VxZSw5GHfffKbddzxnwfp2agf4kPSxk1m1DRsVfhLTSbJCSakTz2vUMV775rxpMz17ST1HNBcxsSa2eE2gGqbSo",
  "key24": "5fK1c2HyAfgAu8poPXBdKwUmzs2y6dziDPxNnoKcZXbE9LSda7VH8VdN58YpqiLkcdyTfdu7EDbjqNGpLsYQShnD",
  "key25": "2hCcPAfq4mEmFvQjiazwY6SPBL5PkTGdBrG8SoZjbLY72JCrWjEjthEhrbi6KGfxZSQTxtGgJfkWxTFXfBSifyqJ",
  "key26": "2NQ63iAxpF4wLFCYWurw2pcXXWaV58nfbAc9bwBARpGzJGPTVsjyFWgKp2vu3t8kXob3SdtgaMnwt2ef8MdKW8JE",
  "key27": "5tCLRN1tnfXgzf8uKWPievMjWW6b8n8ayhf7vB9kmjbVw4nXRz6N1FoWQe2LqJyYHXUihDXm5PLe7WNgirmaaiDK",
  "key28": "r6pVE2syRFaWfFWVoKzwpSh1iR7Nnq1NcuffcsiA9JzaUQowEXCU3cPQhhA7SYeFnC5t79RReNnuzReHdKuptnp",
  "key29": "55S2aYvJ4biRTm82nihpKdyPMKhC38i1xnT3ckNHxyFhY83pLZd3ExvRhcPiztV79C7sUDzDKGdxZ5q3gmzTbBNL",
  "key30": "pu7b1TdsSrbWp4dzzep8AkcDg42yzyVsnatw1x6meernG5XsG7VQPEiDrKaq7m3eMMh285suyEYqVTSsPjCHt86",
  "key31": "wtm3po6uzoV9ReZpBpnUWEDWLfbzpk81UFd3cUgKcUJhY5sRP7xxurwzpcfsqH3vJCGsbHw6mX5wr9btKYKFfLQ",
  "key32": "46Tby3CYGvjnmAc4mgbCwYJmm1WtyWGF2kSFPEUJY2civLcj167T5aeAxyuoSVcXshuvR9X3rVfNixGSSyJv8mQq",
  "key33": "3kuJN6xostTzVYNVmgoSZf641qmk5TM6HfQq33asUixyBgF7No9yyRgKcYYv4u2SW6qnWaNfQ4ZVHcJrban5p7Cr"
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

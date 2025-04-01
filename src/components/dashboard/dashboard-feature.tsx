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
    "5f3jesceYoRRucZ4qV6JMvTDNcxSqtCL9sJ3M53ehxuNur91TtwJSAzkeERCRj3x13CT27iinxifRe1acCZUnEYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofmnYgmvJsiJbcQaUEGj8DMT7KqsKdFVTsU9BwnxVq85jJtpocExbBGCQn6Yhk9CPvKzCzddA6XGeosinTuUYcd",
  "key1": "321j6h9XbQyFbnLnrsJad9qyLPnnaZhQarbySpFk8BPFMJdEV2qfm7TjUGYpaaTBE9xA3Q9BQBNiFmMpi3HVY4fN",
  "key2": "59b1xmfVnwopq3dmhCxNDeoZAPNZvutNTHarxDGT3tze7dRehkx2KSv79iP4LtySbc8j76HH5aZRX7hd237t5bGT",
  "key3": "4W6uZBbg719PAhxDNGBckerjvYyrz73PJvU9z776sFpkCc27BUn8TGmmRxLY1CXB2xJNQg4EDS1yUs3nNAJWMzr8",
  "key4": "3qX45XVnMmjcPDNN9B9mkFbApeYQkkubgday35UQnwXP5XZwbR9jyA7NMXaYGFzqDEHa26FHp7shyHTrrXKuHCWf",
  "key5": "3NTKFTuMjNkJzHb2i4wPNuur2qi7puGJKKs2joF9NPmgADXwqynsHFSd7QEY8efbNzf7DnZcuxT6ANBnedYG6bKm",
  "key6": "hyb9MaydtcACSqzLrgq3mGbcJtx5xWUWZZi1PnPfTFR6gQmJedfR2rWn21gdRZz6WXSQPYydr5M37F3KW2DwLMu",
  "key7": "DxALxBzVuCw77YLo8s7JLcKcsaJPbYhG5mMfjUzb9YnxyKyrhZoMgQZngAYDREkxRPDX47zDw5ZPR8nGHonwUQ3",
  "key8": "3XHtzBAa5SxHduXer4cQkWKEnnPBiEp3ovCstSxJk8ARW5vtyg7n8uF314sC4quXEt4bDr9TzXsZNEhbCyjZBzk9",
  "key9": "Ad2D8f6NnRXPYtMcFQaKi9ZnfHHzET1Egt1fRz8uy8v2dB9PCX5gXKniMptcgPXkY1dTVqjtnQwD9vz5VR7vzqL",
  "key10": "4fgBU8kFjdi5pequJWrdcRxjsHMc2r8iaB24sKh8EsmZxaeEU3tcYWPtRkeLhdXtK81BdaFhqhw9jTMaJjEQJWLq",
  "key11": "4jtm71nun4m1fcSb5ckTvNbpcDEhmcrx8r9yp24Dkwj2Z6mYnUbDqocjxCYo1Sy3J5buLAKExJyeRJbfzb2pwpWy",
  "key12": "35pYe3NGKHNAnNYXLyVGMwN497qwCtAux3kzoz4s6iNAURtfsJ9WtGsMSnSZgZVKxvBUrNFLKEk3NYZPDjc3ZJUC",
  "key13": "nPJ93XW2SHEi7ckpkLCjHbbTmv3WFyb3fJP3y9E45Dph3cvkdXsEozDUJBwXmTmV7FBZz2hUNmNorCrNHJisJus",
  "key14": "5FAnyZsGZMGZwXeF42wRvHpwdV2bMwCRsVz8WRPcxqYSgAYzjZQmG6JMsigq9TR2S2TC965YC4tR4JYGizVZC6c7",
  "key15": "2yBBimeM3QscmYidZeUExP4S9LoosucGnAvKsVufHyGrB6T4fvmuU45kLetxqqqdTf4r6GUfoDyEDtfBj6rdud6D",
  "key16": "5gqtfkuYxRu3jKCERzeZnmyq56SyZoQEeyrUVrw3BbB17S4iPEyT39f64DcrUrqNXge73KBtCw5vMSdzdQraQ4dD",
  "key17": "nG8wHMiS7KuhuEtyZmeTXW3wmgzkX2KtcDtfHDJ9bgQzZt3EGXoTC5MjhQvV7Ee31wVRWxcQuavjfsiobTM7YAh",
  "key18": "5s3N5euiVFgNcfa2N7VTPHXDaJjV1opgPXJTNmWW1iPaFmG8CFLJjMMasWgb2XEizohZe9DTPR5obpJg571bs6DW",
  "key19": "3eKgDCtZMV2pAkiY6HC3g2S6YbAS41NQVtywyMa9F6g2TyBfkfufmj3VLAcrJKELAXnVQysd4oeuZ9e4ENiXfuxX",
  "key20": "36iWEaun2zwQyN4cH35ikyD9iNF99gCMisjUu2baYiC1ypTXcRnM8Ei7ijmocuq4JfisvuAJdwMPEw3FiKm9rcUs",
  "key21": "4PZvjGz3NHa1qawHQeZ4c1HHTZWEHGkpCmz9fdBinGWn2qp7dZyFf9En5dLEv4VfH5bVg7L46VHXEszk3TR1gKrG",
  "key22": "678LfF2dYNxgWKXGaUUPx4UcJknXyZhEZq78GTyV8jkVrZ1Wghb6JqeRLbuCEAgJYDfCvuwoUphNEndKgNDDu7f9",
  "key23": "5SRF6etvqRaGgF77V6XzSToANBKQ83wUQwzjDxamfBxA6TWXLsvHPpAMRfNH1Q8Cxnezx4wYhy9HahQPSaJFzAzg",
  "key24": "5UskdsQTgdsh2AndMQbHzrAkQq6GUDSP9c8Djg7jhHdZKeeoqw7cnDHhMgSMU3GrPqJ9V9jmUKSyYe9wsuKYzwuh",
  "key25": "5HH91jRfS66irZFsiJAoVtmxj1VZWxhBR5pon8G1RwhE2qUKmwKpE8D2E5KsXxFcMAPxvy49EDs4vKT1iHzMVv8N",
  "key26": "4Q1xLUBoXCdFEH6yyYorYJKqRmwPhAPVtgGy7bhas7LhzkTMTsNptWCnu77dJZbi8tU3X44L3RmLX92prfN9GQL5",
  "key27": "4RcxDJChQxWCwALFje71Yi8L4AHaTMRgH9ngJFhMLvQiSTcP8c4HJTw2retvZzxgqN1Hzx1kWPokYahGJhzXbMmH",
  "key28": "4rJMmXmvUSaN4Zb5k95Cy6hzZprpL2fM6pvbawXV9hJU3FPdpr7fevqt8eEHLp17puyz3j3YNhbRsH14Q2tZ3NGC"
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

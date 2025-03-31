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
    "5ZbSSvDFdM5ffwmqDFXSzwwuB1JpDjQazw3hUfX4ditVJdHkgCDiXbryDQPyxLTgseXW1Ni7kC8JQZRYeM8y8WoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "678ZqcXMHxT9EpgCwsn3gKH2GoimGuHm3AxYDjxjSMynPFDg9AME4fAQ4aVJF9R4Nmn9XPau1c1xSLcERXtuiUgg",
  "key1": "28zBRCey12mNqWgeLm86UeZdfNvV5554SWck7wMNgDdLoK9o9mkBkTcUSbbUMzt9csLwRDq5A4Hovow7nEW4N1em",
  "key2": "5KLhVcVL5J8GqHBST73n9rtXuTTq7V2fhmLuE1nGX2sfbgcsyiNHuBnYMRP9U5zV4TCAsQvH2LokUDYSLEDukq71",
  "key3": "4x8VyHyrCR58orCE5wP8bcqbBe3NWQDn5tpsEh8KXsofTvKhuu6RRqiAh9efGkaiFjJvng4pub3sK1eVzwTo3qFy",
  "key4": "3Z7S336TfgAmR47wKsbiWpyy9XgGEzfPEZ8HvfmDfcQpfag5nNjCgA9gSkAsigztezyXMfyoWb3yCcbD3N6cm6Mh",
  "key5": "5k1bGDHwfBZ7v2Ap18xNxKzGstziiiasC5f1u1qaY18Hxvj6fmHAgniFMecXUVzjH6j5abp8SSmqS21tkCmPrXhR",
  "key6": "4Q9QBm1LdndcHYzuyJjR76VCEktXMpSFv5FQMnt7rRS1pMutwGMZso1uosGKcuQVNaA5QwZo1Qdm27ZLp7Th66Xh",
  "key7": "4UY6Cywt7LFv6hbjRvcYCqGQjw9LSFmLc1xmwsTrKoBoakGejGj39mGGHwdYUS73p7fgJJVfWPA6zXYiS3X9dtKp",
  "key8": "yUeFkvEpnFUXCwq3YhxJzZGUmAGt5j8sA1cZoYkQzqrmt2N4SGUmHstNTqKzQ3J5Bg4yRzGcNranjg4wmStnVVk",
  "key9": "5eG2gHcENSBKWk8YoheNbBCU98kYHpsLmF7Z9sjB3WxVEY69qhMxXuVcDYGryZyeip4JS9w3XfGSE4UaMkdWreAc",
  "key10": "5WKSXkMDKga4jPG3XRYmXfnZFRR9NqvVhHdCbgj4isKBaQ5PJUGvAoHCuq3Qqagi8ooXSj7rBCMyihfMmSmankww",
  "key11": "xasDUBdP3RFfe7ccKvqHdnohRhfhTZP6expCaCdAbi7kvj3GfmQjkTqQgQuXPKFrFrxz255v3cx3wugZuWjqxR3",
  "key12": "49DW1gJPCShseVXedNMBwzJ77KGaCJwK8XTo293936FxRzLAJRPmNxnv51MaqZEz16i9tcmTQKdjmHAEn1xfRKbf",
  "key13": "2ytEuQdgcCTmpzzV6rGbcsEiZ3zudXoZbi4jAjeUY1XvodUVRjwkpqtQiEYmGf2d3QGEXHT29vREpGad1hf9cQYZ",
  "key14": "fVcKerCT6uMUCw9h9Mo1rR9PpyaF6mrvoTW13Z6ZrieUn1UA9pdTS1DWAhyMRXW8T4kktN6VUDidnVBjgJVih6u",
  "key15": "5XGKiewQNHz9oHQQq7myH8cdWp5SQ8dYmJfpgi15j6fLTLf19mu3TDppecwSoh8cAa5Q8xjYPvEUPK9TR2Pk77BH",
  "key16": "KbJpZrVbrexzPbJoY4a4WbiX1ThpQYcnvq9dfxS9KfAAjv8jdE9Gu2WAqh4W3BunNpHAtmBCsBxDLDTTCRtorFK",
  "key17": "2gmnai3TqhWNcK1W4NHfZdfdsQaZ8tQjdYY2engyxqPzztMwN9oatS8rnYkfXBCY3SGxXQcF98u5JeRTnQ6NruSP",
  "key18": "3gHCNfFpMhosdbZVSjdRVyugdiZikq1AJaCWHFcz7qwiEg9sXbTMd7x8BGH8wyYyVLYzZU4pg1zEu3T6UBcvqPqS",
  "key19": "4aGvngzdXcSBnauZsCNrzdfwgxiPn9QM789YTGdsLXruKvgehdfeMx12yHXoAwDXMjanJnKzuMinFXXW83uSs1kK",
  "key20": "37mAWebH82LAbGMLRv66ZUFnhD1zxyJv5w3oqPo9KucrJHZG1tBsnxkQvzwc8K7Z6FFZL424rM5mB69ftxuJrsYb",
  "key21": "5NTrW5378exdJxNL15fdUUp7tku7nuso3t9V1Re5goVpceYCUmNtzoy4v45ptwfnuW2eJJ33qLv4ePfFZbTwwV5N",
  "key22": "5Jv4T64k4gd29Gdkm5oP6eGTkUueq6n4pA7Ti4SDLLxSKvPWCwg4wSrHDaACu1EG2RDa4VMZn6buJ1FuR5XQ4rfS",
  "key23": "2dnntwqRDpQhoEE2j8SFTvPcbuidWxLx3FQJo1X9t7MiTzxkvJSe4aZgfGPb1CPphiCUQ7QcEwcqPhLCauix29q2",
  "key24": "vVaasryJCpciV79DpszXN46TJsQozEP1jLGnb3osHx4ohpfdtsGPLTwj2Pczood3EWgNWcAZo88P5VFzn6tc72F",
  "key25": "4QxVbFk53HgeYDazcvBJ3XX7BWTznMkjBF2cWx7LZZv5bqykqFZgnLmvdDeUGtR4L7ch2D6SNjBv1oFkXQrb2bzE",
  "key26": "3nv4tA1SJKUJTSC5MTmKZC6NBTD1uBesY5F6p5KdFtTsbEhRvKu1YcJEeWmeTGNbsuXAhDpvKyzKpo5f29rMWcsR",
  "key27": "2fYqheR7JzEyZwz5TzjJu2uw6wqn8A6HrnWVVnaDTuu5e9bXz8wB6XJPqYMZfEfutWcXn5FrswTsgeCeCxoNc97f"
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

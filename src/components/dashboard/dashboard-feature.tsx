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
    "4hHE2wzUWmBrVfwpnKWtUsCYs7K51k5Ty77s3WVSJz5PwprYVWoVxW9A3v1fbYjHWWdh2TNwzNuKbFfpPUSkK1jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chPWRuDTCzuuqxccL7o5q5zJcUdV3XPBonmfzqM2GdHAHWKLLHttsXXZJa6ohLmGKzGnAT6dpdYQyqTtMvsgAvW",
  "key1": "29fdUo5mB285czbDAWZ9baLzr9EjGiHGs8n2Kfwdz7Zx6F32GKkVEaFgNH8TKdKVJLe1VV8vDdNHjjxfXr7TNV3t",
  "key2": "2QoNu9L2sn4iShWihfbAyJYb65GAjoREktR6XMk9b1Rr91sSJgBHWxCdMHuNcMqs6qFyT3c7NmihjSAeovH6X4eF",
  "key3": "2QjZuFR4DgiRzBTA1fnE6s1fAz3C6Ee1GxCC3QLnKG2AujsMEMrEAidgxcWKNfgMiCQKdjaWqrav3uAmZc7mpACW",
  "key4": "4PPM9EbYnr9ocXDvmtJMwZLELz22mVyV7k6ejFXRDtDtap9t6nNJSqzA6G7kSBtcpwEG5Fwdag4cVCQF8xdnjBM3",
  "key5": "5dXqbAHsWjLazeP7Z8MxXXkfKpgXAzBh3oQNBnPM7Y5xvDv9RzzaKPiFKn2PwHZ8haftbPjC7piPAVQcuuZsVGc",
  "key6": "41vpixuFwVxA1otuxagTwgnnscUozfHxa15ViLHYkFYp8YrojmWkjaewqHNbZzxRx3J8oEceACUoxEqLkPpBBMTX",
  "key7": "2eXYDNmxJMkj5cszjc5mxnSUC8eyxv18cVuPF1pA9vpppVm5JzC9Httvg3h2ar8bXBW2wxc3G5X4gXy19P3MN57X",
  "key8": "a28QJKizQRTtmp7ZBwad8Mrmr7D2YExraFQhjGqYSUHEwrTeLUByGECiSc4xoXZ48CXJCsryK5D8LsFar1CPqTH",
  "key9": "3Bz9dDcxRE9kHsUys1yHRvpWNAw3Mh3fnbMyEurFevh8sDScDQkUWtEJowQCjfQv5D2DuSR4Z7o63DJa6NGdBW1X",
  "key10": "4wiXCtYsjVKF9BzVUomzVXfV69Bgmb3m2qNkJRS5ecCuxgYfYxQTuWbwFTCadUktRdmhCy2YZBrBdpWLSRZJZ6v",
  "key11": "27YwYmz91V9L6g3kfqR31uH4xTWQX5ck3zq8uy6HmWYVhzNTpKaWZDqMr5YGXJX8tAjyT9JtAhzVSH7BZNkpdyBV",
  "key12": "4DvKcgwdNGZDBfCuSG5P5vPWn9MCoLQ2vVE8txvEET2KpCo3YMA1FnA3ng94SbpPibaK3aFiwt7qknY5YtX5AL8y",
  "key13": "3WJBTLhpz6f5jUmXQa2A3QBzkXmUgzsRaW5o4PhdFQRGXQaVtWsajTPdmWaMvD5e7sc9WVzLsiEJfA7P5b8se3At",
  "key14": "2JZCAaVsyaVm2Q4DeV7SR7vV2UgE7nsMfFirtuAaZzPriFaZ7UnuuiZ2Jt1CiV7WarnnuAJFamreHFG89VgXs4NZ",
  "key15": "4f93CSj9FdeGUJk242EaLKWxoUXoS4qaRVBrN8cfT3oCr5kwob6GhRpf5A93hAN1Nk6qZN1Uf57CBMkNLnNDc3Vy",
  "key16": "4RabCHJUqRNAgx37voCDRLsw9h4Da2d7BApXbd4P4V8cNMVUhRrLZyTnNST5GFE4d2g8VZf9jn3FSnma85F5EG9p",
  "key17": "2Yh213gfatBzA43WNSavkPWnnXDjmFk69Cf6uQE4ioNKEbC1CsCnd4KwBteLT6Shr9ad4pQFMXKpiSN46UtSXtL8",
  "key18": "2Zypdw52GTC8gZztPPHDKzNrA4k5BGtMPs2nSg6JVDPWJf9hpC6iPtZELKG7Ywik1DH8KkjxwfB618DRvaZJzr7D",
  "key19": "3M9EDtzYeDot2yTtQRHoyxYH2nEneTYvhoWG43bzG5sFz6ptozLcVQpTE5m4RpPAriM5T1ojK8yrDqaK4vdXMcFS",
  "key20": "JsEQKH5hNQJMk3kAonXUUx2Pcr3FhBs1ZPUaxRuAbpiNThEozeJRzUiRPgvgqgBQSXeN72kHiYYp928HkkuLfzc",
  "key21": "4TE1HkyyqMhavKRV15fU2PKKhnRpC4iFUve26VjbAFNLz9rJszDeW8JqXz6UMYjn1xEos1QhXR8gJDRn371sCcXE",
  "key22": "2hczW9q6vJ1HZRtqZK732f7dD8UNYsBzdZXULUwFTvFnP262fxgGJh3RZw2bc7USUm5A742F2Xz2fKtyN7e6hZ34",
  "key23": "28BjBDd2CNgnMxDTV6pVcCxXjALiympY3ghbL7CMQzEyTutoj7gnGNuGLpDyVdaCsPDQ9R3LMpVzpJLfzZ1zgLHp",
  "key24": "4uC8snUXX1GPPeL9GY7dmW4TbPxwBDZeZkZYj6fwKxjZNR9by7vLkfaCwvUZkW3N9jFq5PwoCtwqw7B5jQ4nLtag",
  "key25": "3m2SSyrPnGXmg2vTaTpM6sComL4vb9XwSj7EGZzRkKmkq6j1RzAHqnFVeZnvv49ch7BbwSr8wnmXsmNN5tq9ZdK2",
  "key26": "2CfGKiehb2u9xsMsK9juWwAvuCo3wsf5WnK2Ln8XAs7KYpkh57DrFKLopjtCfQdVnn2faVkfRLNrNVFCs2wYBtpd",
  "key27": "bjY3enk16sBecQnnGn31Jwqwny7fSJZssvb4Kw3CiCPJ6P28LMEqwPq12h5aSj35MNzi9ADJGdZhxiGUbVJwU5Z",
  "key28": "5kcKsu5uudJcaw6GnWJchcnvgKBU11GdTLM48AGVRq4FHbnRik2ASrLoEaC54nE6toPLFcWahXfsAeY5y8ivNL6b",
  "key29": "4hou98A33UQYiJkhHNh1FBduyoKYpZbVuinAcnJNPSD72s2hw13XyiAYnubppx7BwVTNz6RY5hh8bGGcua59twHj",
  "key30": "2ksDRP4oZkZjagAUVmHBmhWis6p1wEvtgdRC8uu8JTp4AAdLFNcgCftPJi1xSjTMhqrKRvRVYrJdBYLDY5nacnmH",
  "key31": "2KyABFHKT4wTaAQAnBrGVuySe8hri15jqN3WahUXa2W5brxN2aX5HbUtvTgL161uGy1zumvRipE4ARHrFxWXfcc2",
  "key32": "5h958vsyHHXQqgXnfbvFb9YTWKtuxevXNhoCKrA3xEfXBdJgh6ATRwM7UFJt2vaJynJS4rvqgEV6YC2aQg9VJVw6",
  "key33": "5k6mH7wvfRrMifJuKJKYd65436bbCGmA9xfNdisx1HEqhSuF29ijKjvEFsH5SYXHSYHeZnXwPZcrqDryae4aPL7S",
  "key34": "5Bugp4VoUgdLUKJN59TsWacnxZmp8HCRLrvzwMyn8Fhg7xRtZB7St6XMuMuFoWoSbvbYeANmwSXSCtQLLJxvvNZf",
  "key35": "2k4fLN3MtMY8k5TfNnRKGpA1ZTB8uCGivEQvZxMuDiv6AiidiJwnaxDgrcuwFAs3uezVc6PJYuaNnNrbwEXmvQdT",
  "key36": "21dhRbH8aJ7rXHYYjtfKQHP351a1wvjpoA1N9fVUb1wTFZrqCDkojJ117gBb4iJyJPcUNu8X4NBTpcJNFvYkuAVm",
  "key37": "2FcEb9dDojNG59NecMpa9AnHgpGZgRssiR2hu72YLu9kfpgqDckJtWF7JCGRF2uqF91J6gdYHPc7Wo11t1sXhiEp",
  "key38": "5wZ5fJgjHCLf2UvUnTZwvyLX4NK31iGjnwTKzij9ksVMZoMX3iCuqdkr2PFqKwfvCNf8evBzGicq2XB5utevKg7k",
  "key39": "29NjEa4o8mUB85Khua2JTZTXHGXuM5ZHyc6pP65weMjHLr5AtNZXP9Ny1JU6FjWcBev7cTFx9rYgyFtfbhyd9G6m",
  "key40": "4eXmPvJjFB7yojhc4YuSzbhnckeWnL78btcc1LZK2rGTXD841ZcQM1vXuZnXTSAx8XesexXTTfkPND9t9WReYR7",
  "key41": "5k4b5uJUXe1yxYLaLpnfdnQ7WW6f6jpWkw7594MmUiTrcGEa2oxH5CBP8EWt9egueiRZn32Lh3gsyP6vQa2pdo2o"
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

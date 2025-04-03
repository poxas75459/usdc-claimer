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
    "3FRVwkPyEYJJi3pcKXUtkEybH3Kfdd4AoUNSj4PuLcnJgkFGBr2RBGXY4Me2sLPKb9HCqz7LEKMrAJraSNEDzifY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tX6Q7pXdbwwmBC9ReKV1QzEDdimy4kRJb95KWQhcKp1PcRRinb2EtDWLepCiAc6QL6esRWSYZ1MjshhYyd4iDj7",
  "key1": "4jzckqA9JLG8p36Rpu3UPpWjNpno2CvSr9ZsMX5JYmzoVeU4WRAwVcwRJoQ1dW29zMNbC15dW7heP9VEiQyW5ptS",
  "key2": "4hbiLKybYQAJrBvTeoeYPzFT2Wieo8Sh3yq3xFwcVNESfTY3d8Uzkge5g4KPvVBNFQbgpV14SnDCVborK8CEJvAY",
  "key3": "A5ddpzCDV9NJSdgqh2i78iDMxYdrTBdrEZKRX6MqtNqMyy3YAcy5eJ9tnS7Yj6kyrFwVhc37w8wxGE48DZQsSN7",
  "key4": "4abiK69zSYfzMTreGWUzAy2rNacMdc8cWfysWPNWsXEtybHNMm5zBYoYMrPA8tjTjFXxfd8cb9J77UEv2b9R5VEt",
  "key5": "388fWXeqXmiH3PuTB9wfvZzmenBMnHPJKxjveyvf8MqCpYozL1vWPHRbQiLhHBCCzHfbxEEdD7Cq5EN3vg9SMe8n",
  "key6": "4eZT4FxGYsk3uSv95HCa7SakxrHYa2uTsc6fRrUaTXsB7LgamTyHQDiRmXkk7XkoYpBiSBL48DdWXJK3iKXT6TrZ",
  "key7": "4r3Qxok3L5DTRHk8FsyoUSbApGQEx4AJKkp5Wa1eULPaV6R7fbdoYYuJEMB55FLA7E8vRHFrru5Q2dcvzd83nFHr",
  "key8": "5epTuz6C1AGn2sZjQ8RJneWUShUKNaQVVRLniSeL4MKczNjxyAk1p6gV9KpBvqN7Ch1KhPHF9wJHiWf9s4koLFyK",
  "key9": "3zrDaU8cXr5oagWw352StMuXajcvH4AByUux8koiP8k7Dw4Qwo2xbMRUYw3LGM5hAvZA41bPd5xAnKw2774HCyB5",
  "key10": "4WrUyuCWh8s8a7DzsMsjkPXzq67n8eTn3sLRDbms863ninVpzvFcVA7T2wFih8TJsgKuK8Nfkq4PhzRbHiwu9ZsL",
  "key11": "5RdvwfEdLrom8HyZ7DYQBM4xRb85R94K6V7SWXEqVLHNcUMEXCDoZWKzr953PRkEdPghmCXptj7fVnQVBCZbQC15",
  "key12": "2KgNjZP6R75AKZgApxmiYAjH2tPVGgsyrt9RNNiSN6BWjJ7tHHyrUJbFof9P9wfbt2DhizoQ84G2yR55swhXn8Ma",
  "key13": "3D4exiTM513QZDCtvgdF8M6QpFRVpwaBizaeDGFnnBiC3WwCkH18Am7UKRmwxZLTZndqAegWihnLEz8gzbEo6PSi",
  "key14": "34kA9amfEtjF4DNhNir76zPf4V4fYQLTuYLMrQS63vWTSupTZbRpyBK9v5Tmdfi7duqbRcr1DNJTthnnPkYGa61g",
  "key15": "2ASnrhAsxxhh8ZUEoCKEfzZK8FjHPQSYrQASx971nqb1QA4Q4HLya1HZVuX5m9vaLG6dFfpBeicF9QzUrK1LgCei",
  "key16": "4Lo23XBDED2QFeFKNq8v5P9QEgGu8fWQ6YAwrLx6DRiCYyzyMf84NW2ASAGoLk7DEgWCT8e4hY1FxVHN9WympjyQ",
  "key17": "2BYB4rWaPP9n9Vh135qsSsVhVHtS5pd8f6MYdaNi2ccsgttBWseUTZNk4SMDHh8Jf5ongPofuF4Z16AK3Dfg6o3G",
  "key18": "5ghKZRqNy9NUvb26ea3RhoikVzUayuJMFxgM57vuYegRkakq57VNeN3yy9C9KKmTbSwRhgNAYF5yUiHwCgEVq2yZ",
  "key19": "3LKzEgHiHqM4agB74LhYTCNsXP8nrhmoW2fDYg7dWyPfE6nZCejHdisj2r6ovQN7WSqKZ17jLtGWeEz8Ad8crsmd",
  "key20": "BVBnRVhj2cGHGwD9j7gM7bYSauouHwWko9ejGeq3XXmpqo8uAy5nRPnCryJsjD4YkxazHRwCtjYdcevXJnxXZoN",
  "key21": "31Pphqtk61wFgQBgYHGRVgUE6Duex9bzykfmXfBycYVRT6BeZu1ir5vo4VjLgv2o4hSpBcJcs35EfgV1XCJZKvnn",
  "key22": "YXHrcnfRk6849WgoPPXqjjQi9WJLEd8tyd5mtDgsFmRo3Cjc9w3qwgtov2tRUaUhUf8G5Wa8peDeSzNaie6erXG",
  "key23": "4YdzgTmedJkcAWKWYEou2vFEZ7hAoPM891Sg37LNh6rn5xDRWqEeaxgfn8EwCCnSKWHbfByrZuhCjiE3p9B6dTkX",
  "key24": "XZ6XhKrrkjkfQS2qnGnUnux5UuyLt9s3YHV6iCUvoQQQZmjSGSpHJMYrm77gov8yRvQYeXresPf6TPRw55QTk5J",
  "key25": "cBPWHirWkGcqYxvx1i5TgvxKhKu15Vnkp6sRgAXou3YzisWPp2Sj2VRaCW7GW2pCSZvRSWQwvFBkc8ASjvqVjf1",
  "key26": "4QZQ2NB51kWwe4uVgvaRzn8HmqEwMGQGYgAjMGVB6K1Y4wgoVqSx3QHWMVBCLsup7ozTYpyEu1ppwTXz1qwkqzyy"
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

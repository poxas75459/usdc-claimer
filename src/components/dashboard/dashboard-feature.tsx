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
    "6g3YGinqG8Dx8WAyWSu1H2zzS71LozSF7UtMuf263cYgu7imz62nF8jdkLJXjTML4DW9eo2BWVmvop5HHvytfaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XZqERbQ372QByZphPTV1tWkKzf5oruKYvJBnciADaniyEE9D2ZRDSmbU4sA7fc8b44g1s7XgR4WStQWmXSgmf5v",
  "key1": "TD4f3WFpVQPv5hRNwtBnTSgNBCAwDFMUArUj6DmjT9unwvyy2CzNi5S2aeUEXZ7DxWR6sGA1ZDKJAJkhWNiQFXq",
  "key2": "4Hch9sCmW6X2x8Y1SaQHM8XGbMdsgqUAQ9amM8RgZ8HnExBDqEiAqHYiAe3CKhnYnVUWPPV7Y25o8LNxH9QQ7ggE",
  "key3": "4R6soKEnWQEbtteYDkAY93SjvfeHCsuNBgQpPfZPJSGJoF7fkBC9aRNstuTiMXeYzPxyjwi8JidyQW5uMFP76Pz9",
  "key4": "aFZJR23AVr5tv6axHmghgQi4nQs7bpeC1iBPnxUd4tTtZYTLQtgvoifPj9PjoKXTM3u2hpgLY8e9cc7GmVxLG8E",
  "key5": "5jgdd6MgmbKKL8krqjWzazzub5FDuQwYsw22NHZZTrFR6b7wEAa4Jgz1PRZmrcvbyHSMEYnyVSwX4JFbDPLyRZa9",
  "key6": "5XuEpu9j2itXsR7VETMZds5uXCyE38CkyDBrmaFYVZwySXdaj6pYaUa9akP2nxuCdJEXrNc1wvQaDPcgwzor3JXP",
  "key7": "ezh2UQ4xz32VMMRKPJNTDNLBaPzzNRP2X3hSt1ZaUb7BS7QWeCutwoDm4WdfFos4HAUg2zTeeUxz65aFGWmVYmy",
  "key8": "642NFA2Aeim84PEVtSHZN5PLQYvxeqmYrzULMuMJhUELUGLXdZHmiHA3juTZgtCs1Mh32YcQpCVogs3QCUbLeEwM",
  "key9": "Sgtp4poLqwfSU88NX9JXoCYmPiubEShUVj67M18b2LjWJwaXKgiVG5ZdWaY38JP59bpQ9bZWhDS8Uh1Wt6evqX4",
  "key10": "RYGA6sKvEkVhj19hqDMkSSP43ZN9yVQC4AeNqGRzaXocZQEBjiAECH3kDe8MdoeXEJujjKCCi1kb3onfeTkAiu4",
  "key11": "5bZ8G3PL4ZrZZ3iLhbpTBhca2cjUwE2cvT88DAPEX1ZWQZUm62nyMRbR5h5abEyQ4ZtwX9pdbyJhaBxoRooEssGc",
  "key12": "21AWyxtuAfMkkZH8qjgDbZ8VSC6LAcD3y7qv75nqTS2YRxfqJupTfQQjw1PCZ4a8Fz9Nvm5XXreiiNs5yVmhCnnF",
  "key13": "3aKqKW4x8YFv1FBJyXaHcT2RL4XdV1gQ7oNCUivoHQQgCQRGPjLk1hG9GTuvrGqXQnDpB2pwe8XG4A92HnZZpemx",
  "key14": "5haPgAiaHXBjiVnvZyNpdP3k59Q1PjF9WNaSvQGc3ehskL4wZYEDBRyuLJMAYMETEJkctUZHcrgh3oZKYA4h9Gi7",
  "key15": "pmnJhWDzZMwrKyNtPbE25mCAcNs44RRaRcrHLn58pe3BUceciiDYfrsm8yrmF1JFhouCwrRiw4sdyY635JvkRnc",
  "key16": "5PHoZCmYCo5XA7Yige3PHxhKVdhNmopjQP4T2j9QWQ1v1SQb7xkRJHAr6WPfs4ms6MApDpbNTw7YAzymxYRhmhsF",
  "key17": "45q7tkSMQQapaZoRE9YBaKjTJvkEBtsoTpNdS4vKZ5tCFxjnqqk3ydrC1JYd4zcH5RHJLUMrPzioKT9UqWR75vcJ",
  "key18": "3TeAstzszmqkWWFaymWtmRsrpDp9gbrAo2vzJaSaPGGLu9W6N7B9NEpf9kjnvgs5wRZFXe6M3rTgVYiU6ZXbrU7n",
  "key19": "PrQ2yjQ6xR8KWBWBxnHyuhiAcDDx9E2RxxgmM725WZTfaRNXEKC66Ne89TcDqyyRtDq33ZucBFwhx4dAYoBU8Ke",
  "key20": "QukP6xoFbse4QgXuhtuotDGb1rU79sTGG4qTKuheV8cvE1kxDQqNAe8p7EJYSDzEUcbEda5ifnmrFbPj7XJbnRL",
  "key21": "f2PQ96B3SGRMXPJukejdmWL8UNKkphKGWPMJXxXxG4e1Jecv5K7WxH7QaiUeFqezf8nhJbeYhS3AGdLKj6CSAGP",
  "key22": "54VuutHU6s7BCygbp8mPYUM7o4Y9GqkB7iu9vJCKf4sbnaSg5sX3hVw6icJX6oJFHGDFPQxzSTPasBBiLW5pq74c",
  "key23": "5LQakExz1KcvPUD8ydRoddBQk3WUhhnH3xagKkWFNpJKh82T2K6bHVundhrCj8MJkMHtXWZ1MqEy7VcWBW91nGFU",
  "key24": "Y2GziL8KEkzTQioXbLWmS54kZZidSFwtfMZqczG4xWie98Bo6so6Ce8uuSwxJmrgGdVQsfrukBbHHWwJzAYiVUP"
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

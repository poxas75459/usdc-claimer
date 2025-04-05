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
    "7MrzFU29iaPZpFeQkjVMcTdJjrFWW4sS3B65p3J2eaX9EX6is1kSfJtLtGJhT76yjky5TTjVcnau6waZ4Ch9ZLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55XzTWu8y9xPMpZkiq1divCwKwp91vW2Pb7QS2eLJMyaXWbqQXbAYwi1sNuDs229zG77p2D6UWLK4iDXNyyiNtnf",
  "key1": "4zX4Z83Spf2ao255FbVh32e5crqEEzbZd3c4FvmSRJmeE7gai2ApMN1DJSSLa2LHyuU3C1GnK6KdmRFip8S8Aw2X",
  "key2": "m2n8vUZSf51rPtpcTkagYExked2dvZJa1ZcutURhfgzeCzERnHkWQXKhe22UH1WRcdBCHuZQgxf74pHTk8km7XA",
  "key3": "2J7FS14B7yUkSXzowU44Hud5worTV8V1AjHVUxow6DihLwML1SmcUTU6Zo12fApse2fARCR4mij6JPaY43gNZFXR",
  "key4": "3WzXHi15jq7FPAxFgZprLJL5pYjNhTEAgiYeHW6khsXVgYaNetnLLMaZfbdX9jiVrZUfuW7NVDEXR6BjffyU3tiY",
  "key5": "5mYzxWNfzwFS5k2sSsJd3Qqxm873U5bKpWF7ZwKdj6yczTPvuF28k64A3UTPZkkKFMYbGafDdrpphfm2U9w4dn87",
  "key6": "pB1T3jtL13Hvkd4eaJ376XBdfqqUbzHxvn1CzEijVsduJmfvWbF8Sq5FuAz1Q6EjwyLYWocrg3h6QnehfWAJ85C",
  "key7": "ifjAnsAJWr7aU6Hsnp2oeQYdVgDWVv7u3qQizUP3258TBShRtbq4o2uuj9vB41GHkQza7SPBupsRFiGuLAGLJ5z",
  "key8": "225w7xnVLcc1PPUKx8Gvi67kDB28dMjeVieM4nQnj9CkmcwXSTFAyXd5x7LtmNkQEdXmCLybQekEKmzThWDC19CH",
  "key9": "9ayo2izLVudtYggZqvkeK7KeBLL9Noa3CVwtUeZ58HsAsEj6SSjHZfvD7MQxxH8e75JPUJQEtD8JPTsgAZGYSwR",
  "key10": "29TftHLawa7bhsXSSrPwEvum6Fu3BQsetbvHSCdzv6wJu6VLa55wsJZcpJxmSQKCXjfqioieisKGqXtYp4ajtFjg",
  "key11": "gHcm4uuJeUSVLWSwekYnStnkbyBhg3mF74ksW6C9vThzo2DXyvCUv1sidY2Dr34vsWnhGRaCmg4JYnfzsdQ9Cjv",
  "key12": "5SeCX8YycBvntmbgziuVi1Q7dMYKHpMWLBdueACbNGDEbpRwC1AMyoQGSjZu8th3CrWbtF728zYisZVinUivfaFs",
  "key13": "29pkRESzMGDF4xQ5XQhnHuSmBzaGmZmBTceNML4o1b7zNEYVvAK2AS5TbEkqwvoVZKLeD2YtBwsBvnFT9NZoRjmz",
  "key14": "5Xu65xGiko8ERbTm1pFXcddYD2hUp8nofYXRuaAbWYv38Lt7bKPP7hQNdWSa76siHSwM4YjR8dGWQyqpg7A2A2C1",
  "key15": "39WpUBSSvoKccemiwBoP2gujv8yFb9qPMaPDoR655eHzFDKC4F3WYU5NWBVqbub4fzBTRNMUtL7Bmup547mMidqj",
  "key16": "2db3AqvLxNuE6iFDqrrBd1EU7o15TGMpdFxm6WCq4auLc2NKUw19yN19UfpWb5Kt1BQ3LqxXbR6PB7xqeFacHjYg",
  "key17": "2qZbW1BKTshgxaceMcmGur9jLKqMBZqsW3FNMrgtnnMCgQCnvuxiVmEV73tZN9SQXdGebmJffyf5UUeRoYGsyBpW",
  "key18": "36i6XR2h56k9CyerLEaEtvYxvBe3jJuccopy7wxAH5ibPPP9tyuThvdC8hpPbaC5zAfBggtXa6HH3KoupR3tCJSG",
  "key19": "4bqAQY8vvASKCAyGuVwstB8siaq9mH87wcAJMZJaaMoPUpfMAe4SNRYA2oAzahpEY2djf8tgRhWdyu3KcomUCLB9",
  "key20": "532WEcAH67gLS1qNMutwxqgWWq6m66WUQ4jHu3ee2P9f21kvLmrii6fd9LiNFKN2JbwWo3PQBpGzoY9zibjNDra9",
  "key21": "5rNoosq3V29zaS9BN64ZKZpyVjWyqKApmZANR1y6AqVPjZExfTiRk2wXdyQ2ZhcUnHt5QKrmE8Qvhzhz6rcHk3AQ",
  "key22": "4WYQDPGj3tGDheTAeKJNjG6ZVzz8EZZZ2UQk4aDkVr5uzqBJDvHQn9uTUMDg2YRqdtUSPyw2UcfKzQnP23MDJgLr",
  "key23": "3giLGnuqw6FxrpYce5EjYUFBNWz9LhJm1vb6TeusdcJwJLQoUv28AAmTN5wMgP4GWu7y9KbrXCSBiWjNfV8zZsPr",
  "key24": "4KZ7Udm8SwCErusvZgHmgZgsrDQhThwfdLYRoLkncXGhsyuH2n5jg7b4x6wEgXBHKpfYHM2doC9sKNcUtDGgnjFh"
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

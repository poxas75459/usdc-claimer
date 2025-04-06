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
    "4WRu2m43VW6jhY7u16ydwJ9g1FxEdzzt46JDbBk2DN1WLu4J4SDNSe8smWK4oW2sEhXvDvLzB2Uoy39bQc74puU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kxfUt1QiT4FB4H4jCtdfDc45jRR5e6hkG7REgWoE73zC5y7ZSXRZP8WvhJvbwDcfHXnak3LfGSCM9YFaSv3bJ7q",
  "key1": "5BUrSyHiv7fT8mNj8SLUC9mXcErPDjpPv8HbED3T2mW3gL8hBy4ek7mPSBweHnzHFESYEsRogYrgQh6JRmYEyGP7",
  "key2": "R7dAVWhm7wdvpCEKPJ6C1a7RaYZujJ5fC4AJQDLfkiAkUMu9takAWncAYr7ynPZ5yTmv2tisv1juG5KsbKBGEb7",
  "key3": "4Vshsre5F8PCdUXEwbbVxhpTEuq9yZtKXXywRVmT3ooX5EBmTMgsi57W6EznmibmT59q9MY16T8hAGyagyXizR5c",
  "key4": "3GFy2UWyGerbXvh7bqmTbXxZqJdzBKitHhvDCCJjrsJRvSdi7Gqpkuw7gJB7xB4u7xJbfUrxgqAxqZD2BdSthP9y",
  "key5": "4qYJehwoPXE19DMTEALYas3ZWVzwxTZkhiewbAwcLpdELM6kWGHKUMUkv2sP2BuPprVoCHz2a3N1ameX5U7E8uiW",
  "key6": "4TagtBTSZEwxhZQ7UDFW7ywLCkT7C4FnbVaKWFxhaKdBPouptik11PnAgWyp46btzio4dcFexqXAN4ptztb7edo4",
  "key7": "5FnswZ2bfLT1bHREj3CoLcyDUTMUiQTSu7P3qm4TMt6AUcUd9Aa9qrYcEE7irPVgiLd9R33BUFhkAxK3vNGEH7wY",
  "key8": "56yTq1CoqwuZU4ybyxM6XyDW7QqkoWfmE3ekpYnfLZGQRoHyRrWpXdKtVJXLkBCLG6KYnWvybZchvVVeeLNKpVDV",
  "key9": "3XzFW23VLom378RDp51PWxiuoTUk2noNt7fMoRaLEjJukwV4bx6XYLi3MdoB8gS5n8fdgWQN6D3F77Zvb7ySTZey",
  "key10": "3NNGHYgdSZSdXKmn1RVT9FogWcvssVgattJNrYxNjzRdiW6fVrT9hwHrWDjKUjsUV67qgSryxjsUx9NmbHRsR8bK",
  "key11": "48VK3VerUQZSQWQZsufiRkZBYJuXdtHuV7h9FcWhHW8ixj2R9q8P3xrgfKERXtYcz8QYsUmThFG7BKdKs5m6WrBd",
  "key12": "3vFZNmTMMV7uNZFhKNVZ2F6fdxZUNZMuoFV78XRj5vmwBSkRkbyypq4LjjYNc4tfBXs7pEzC93QNAGEuW2QzEcfJ",
  "key13": "4wC6QFzkcnrQTWXJtw7CzdEUHqNfu94zhERSe86UtAE8zemdgTtnXjo7Jp9VEqjfEHMWQn2yU7zgvkN7aHAwmYRB",
  "key14": "3cxEiXHqiGXHHQmgj2QVrxq3D6aopd6fYaJY8xswfJe62Cs74qcMuVuGnNB4b6i7zvA52BSYn4HzTET7RUbBPd2x",
  "key15": "3vkoCLDwjct4sM6DMfgJW8ApBGhyecNgCNnZMgoD9rqVH8GvkRGEei1TFoW5VrPYJ8D5mtyAV85xZBZWKiUzqqTY",
  "key16": "3RS1gcfoKzCbPET8dwfaFxeUPaRZK2tgMyWguim7RR3DNP5ruZM8Jabi3WqT3jeLA1M8S1s6r6MUEzwqHDzJPmtV",
  "key17": "5WAeirzwsf5isBbxgspF9QcKLJqR3ZnThivVjyQQDx5c4aAht8TPMh7owh4BrfZygJiCTonFvUTTiFYfvhZwjmVW",
  "key18": "2iTxv5yBYmcjcuDuoS1zUG75P63qHysTAqSMXwQaRmDWKECgu8C2Q2zEBoFjnhcNBPeaZ95J4V9utwMUE2sKiGRA",
  "key19": "3fu6JQC1pKfs722hGmtKt2CPmbBnp6cKD8EYdqUNNP829inunhyJsMa7mqzjJDynzP28nvEBoLKHgG52jLzbcHf1",
  "key20": "2DukujV4wCVhQVnvxPUdurCEKFC1c9CvwPuXRiZTKLAHu5Ar8r7SorLrT2H2K9jSCZ4tbE7rdxDmHZPaV2VrHQ6M",
  "key21": "5r1P4uWQym6uopr8RcUYEezMj5utUyk4BsZPF1AxYTH6Kf7tW85io6QZdgDqCXp6JqX7karSqKHJZXz7udp79Aii",
  "key22": "55ecbRunybnxsA4k4yyEXRhtfQ1pXaMaMawpwBi7Tuv7ysYKPEGKvDphR7cHNERnyA7NZrpUXTW1zWhJJ9R47QT5",
  "key23": "5VjsDu4XiTDZjqpewbcugRKoxMZGESGufZ6B2yPdPvKtMAEV6XGZ7kwM2gcShbmNMjU8X4Ci9i9ysavqSpFuucUd",
  "key24": "3GyNvCoZcvttmYnNEmtJ22j8ocWd3E8WFXr9EhzkgaVYVCPgC148d1w1RUJHtP622Wm6YtWXgk8HsDhBBw568SnF",
  "key25": "2W4swQnGaVZffecJpQMuafP1NroL22JVxwAFBqrPfbB3T21tEa9h6rMVzcYBhTyZWYuy64GZHVYG2Zudvj16ewyJ",
  "key26": "26DL3v4572df5TYzqmNWHaTkVw1zeKzAD6XkFG77GbWC5cBc9wYa2B8gceuNPXA3qvWqBHsGWhSYB2cpwNwhvmT6",
  "key27": "63vvRFVHFjqCuPsB7CWfUGWW24yJuC4czQGnA3g4yxutigTS6BsLCeA3uhVs2VRZPjMP3xXYy4LqXV1u2miYEkYg",
  "key28": "neM6cLXKEai3Z9AnsTX2jEV3c2cLqemMoMHCFjhYGTkA2JTVErSzPp4qo4DSbs9tbH31EsAiEtLArPDzmhod8nD",
  "key29": "fm4CNoXecVjftFN2BvTVmtzejSLTj7iNeAitdecqcnzP21LxtEW3JqaBN58rBfAssbReHuVBcFaXb12yPPjyh2R",
  "key30": "372naHQBMR2pH1HiA8qfBTiErdTYf6BvDSdJEq3Lu8cmnitXZPhfdyaZ5h1as3b3wEZvx1JiU4sotndC7jxqRv28",
  "key31": "2y9HcUdFKxht5uD4CK4HZNvQLgAY1UFd8fMArJPAkETzb56oFRe5MD8W6jomwGiuHyKieJf99soPdjoYXygjEsLJ"
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

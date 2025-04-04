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
    "4uCJfJYGtRqiSCystrchXdTfRbk6ojkvvTe33aNvmhz6BnZKafqnC6QQMyYKAC7P2GbtMDHhoP53k4R334xUdAv5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQkKLVY8PXdJGhQ4TiJXQzpE8JX46bVPKWD1KxvirzPYryE891FRUdp29KDu4ccBjfqu7YUonk4PHsF62ojkWf4",
  "key1": "4VLfRWhY9dq5st2AiJfxk8stNBj3Z9mb7Py9sj7QmtdA4knitDnoFx6pDvLLrrx7nsamr4fqA7tzsaaBgxqfAAje",
  "key2": "5W6Ds6Pibd3Vh7KFoG8GwPLHBYBcQWx756HG6qkJ4SG4BvxNvoFnrtAshXHYPjaBKG6tprsbmue65qCWFtRN5w7j",
  "key3": "4ksUKwyeeBweMV5Wo8c3D7VV2hJSHzLLSGymqkN5vXhmDwaCKQ7H6DJHfUpC48AKcZUsdubuBt2b3MDXyWxr5rvd",
  "key4": "CoBpmYRaeTTbJbJuLbGdBpwoKCHgD6KxmFuidZbQrwiZfVHRdw6pbAy3CzaeZwpXnWAuATDgzURNf6snrcFXvDX",
  "key5": "4WNnGn9BXNZcbhwap2L8wzh9Lmx13Y1SUcmLU9xoGKWknHGQAQqReT2vu8kzpRYA6fijo1zz8YceGjo978LEdfNr",
  "key6": "3SD9ZJmHpEFMqeoZAk4RWNj9FcezNNafXmhVbiVH2QLUjz5AR3QbswUUK9oinMiAXMFwczezWUGKc6AtcrVxMTMH",
  "key7": "3oRstAeTn5PuRjV9Pgy6B6SHU7bdnDrBs3vm6XwnnGnHbYvLAW2FzUBdVGLh64ww5w7QbZUWRZsSvEi2Ep8av3dj",
  "key8": "32KRuQJcwjfZjCoSvy1Schx9eG6Ub594ECJWmGDysaN2VvT7dNJGoCC4GVmBMRukBexkDj5pouP6C4JnBCCyb8TX",
  "key9": "EyWVRLiQBvENPj6YcYhPBcRk4BHydz8BmamF3mQkw3K8hjwwQcDD5dqwssJSRzuNQ1JeNZyce8Yc5MJmbqJV1oA",
  "key10": "2nAzC9rAmcVQQSzkuf9vz3LZcKD7ejAtJGvhLGMyUoreEdQB24a8oxBURNUJWbkPvw98NqfPYSS49zHey3kCevcy",
  "key11": "bUTUFTt2rzR4bReNra9GUX6y1kH3jNdCKtRhSgs8e3dasfkqRiSRLvtadoHse4mcmEiKAKfByEtNEJLFJVz8zN4",
  "key12": "31naTQCaTLagNaF9FB9J1XXr1CfKjggU9nELhLgLoaGijahvQRYmkm6roJkt3uE3xMyYEN6n5ghSCHMweGpFVAG1",
  "key13": "5Kj1othwGozDHZZ1isJqxFnhp2LD6adTCPJG13wjURmi6tYu7EbWnKKjxoVTbnDty3puMcTVGagzmnMvSUx4NoPH",
  "key14": "5rBgAUSZGhztCjWSVUTeDZzuDWs3sBiabvNm1H8Q1nfdPt1mG5k8LLQ5MibhTgbwx2ZbcikCkWe8jQL31heHch3Q",
  "key15": "35wD3CWmpi6HvmZQUUTYHdmPG6FWgWkccAJtTsVQs7poMuQ47nFn9WcwCCmjPHsqCH3SNvSn8W1BZ45d6ShHKLQJ",
  "key16": "4NzBejCXiboULY5cL6AbB9SmwUjDpnKfHkJXRzcXpEfqZEfxZooarJ8ek63dkRUD3s9ghParLanBTs8PXN4yjMFJ",
  "key17": "3pp5apHm4SGpgetW3MJWy641EiDfLKMeCaA3ohJTdXfJdu7cRqCPSrunyRq73eHuqpxDndE5Mx4pnTnvyD1nxtVc",
  "key18": "43ay8mTHpk5Zz2ZC8BQ1sZHA2pGwceVZvu8qQmbyLYCS8TWg2FEJe26n4KS7GB6YTuPUZmeuUzNKx1SSLtaaoovU",
  "key19": "5EWjLFwt7NEQY63Bs92zAmkdQcp2R5JVgDpgdCEpnNDnuoidW3G47tdAwe9krVTT7Sr3mhQp14vNvzBke5YXchn",
  "key20": "52qovkvWQFPQdruZivvwzTfv4F1WmHVAiDqzA6vM4eQu5AoAUauJRhKGUw6VNqFfZewMpVCpBjNNKy4Z1rDiyiXf",
  "key21": "4de8wE677fqjU1MbC49hYkNSXVhzJ4YNpd6AbvqLLJAi789oEGsqNeZG9akiqSjo2CLCQcMDVp27Ru9BdkPGLq4Q",
  "key22": "PkcAX1KzLo3EDoWB9A9no3uo9HrY9Ci6iNYEepe9yURPePHMdyV9J5yk2y87djfYauQ9sQFZN5PuCUZGL2rzaNP",
  "key23": "2UcnfQ1Gh3UKh4VNVqdxQ9tXWCcRjbcA8avcFqurmtB5UMW61TLkbkQ5iu8QYajPmNyFEDJrNPND5b3HrJgFsgj9",
  "key24": "peATjFVNXgqts1dUq8FJW9ogyT3n34kuK7W1d2i63H7pD8zsFxLrErQLqSgEALX4gZ4JCo3fGqbS2n9uCXcvtE9",
  "key25": "2nfkKUexZuS6RiZFxTZt1fvCGuxEvtTRGfRX8jeCrk6XC8LNq73f2oMRDFwvZ7QqU8kBwYFT7gsVuJnz9Jgy3Mpa",
  "key26": "EesB5XmNyQuUgAucJXiUfPEJhRJie3o8ySiid4kdBuNEjZ9ZY4hc9kLVrgR3856aArMdRLeznyyxiG6ji7z1Ajq",
  "key27": "6dB3dwzA6G1zmfwb688bVq5EPdVYpNUqqg9PmWrAqSp5TwvbX7ZSDn3RSgpZ1mzrW7Tg7qdvx8rZ5DD3bZsfroj",
  "key28": "1rmUJismGd6KLYN8FmJhxtaFADuNP249FpNLxP7X9UJFQ6H6xWTdZcnYQnogKGPBvgXMuxhgm2z4eW45hsJencM",
  "key29": "PJCQ3rUhS4SgsZBF19bZicSRDqVnSER7iYMtM5tyH6q8c2UNDTLE1xJ7BoGuomaKfXiuqX64bgpWeuRrJUD3RQy",
  "key30": "3dneg6kQrSsp6gK5LR1CNEPWWpdkj7kZAnxcshkzcM9RTA22Ug8Af6DmFNnzHvPTsPHgCv4qYxi8xZfNq6SqztHN",
  "key31": "87M6u6CSj8W7PKhwc7Bkdvzw8z8GAzkDVDmUa8mjiQwbFadCPTcozWYTR3dfSja5frhDg4uiB85f35dnqnYyMvk"
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

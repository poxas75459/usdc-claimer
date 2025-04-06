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
    "2cvfvAgYQkeBRsYpqRe54DE1gxvD3NwFV752VttuRNg1KzU3mvNPd6Sf62NAez9UPuR8z9MKGdMUGCgUJdwQTiBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wJfM35YeEHW9z33wufA2QJ56u9TX4pC6uNFCgdhCZbjEjgEQbL7LGEn8RSzdGSYVDwuFjRxELcnAT5HBEp27cJJ",
  "key1": "KBtqWRozPE5Pq62WLMdz4EaDSGRFeV9a3kFbdX4qGnyKSAAYWXVzzywL3zxP6qq5aJnV16EZHTRttZ3wf72EYna",
  "key2": "szA7LC4svuKcZFPmcSz7ZJ4AUejLt9r6hZrnpu3tpHMJ86F43d5sdebXvbEL5CXvcF5Dmffhxu8TPtaXc3wCHk4",
  "key3": "51U26Kb3Q6HDNQ9XiS7smAd45RpNHdb8ZZp3Xc6E6dit11sEqczhdS98LN2RcHdQGBVukmTcm3cBCu4bjTo5f5zw",
  "key4": "q8E4dWyetbugkR6zYSWyp8JyAuBUwQTb5SxZmMq1H775HGCFWWNe5fwohXB6R5V8naRHjoHJ9VaGV2F9hLwLEY7",
  "key5": "36q2GZkgRiuhcdvJSy3pEbGzEeiCsFJMsndBMYh2mxug6Y2hHFrUXtKEXa964KNqoR4hJ48zAYnnE525DGu7k8Ga",
  "key6": "T9CcNiaYaEUh8QFE2n3sPLBQ39Sj1ZaYMPNamjjzV4Tes7bNMs3mpvD77mizfHdrRYVE2n6zwehPPLfSxkNvrUe",
  "key7": "2vaDF41ij55eiV42RV6pUTXRiKRVFiKnuMMVS754VQpXCAVLhrCbuwBvUzaTPyoSdQzo8W6Tr2E5ER2kmy3fJdDK",
  "key8": "5v6KPQ7K3aGeizpxfs82DLgBBfH2RT1nfZ3pq2tocJcYzvCBnsz5CXYnFf5Z2gDUbvWSDakvmquwKHgeSkvbY3Rf",
  "key9": "4y51QVp1XWfmmz8VFwk1YPEhYHgvo4e7WrwUucEYjtixR76gRMg6zPbCdRCVR8D2ZisHiXrAqEhXG4546Pd5jj7A",
  "key10": "ng7Ap7Y9q3snkMwDnt3UDCmhsjiSFtP7u9eARbTkJXUBeRneT3xEsdCJm6r4GGQ6bjcmXR6x5vvDApkarbrh45i",
  "key11": "4yfAk74raTQVGvYz8rv7RBJe6AE4HXCAntqEtMbURDuSDa71Q1eJwfsnJG2Ezig4xR4zszCaSMyn8RtCa7EYczWd",
  "key12": "53RRw6MNc1qFeQWG5szrsdwSoSpR2dkTYEMazEYsknjECePeC9EJfRvf9AtY3sVcAqdbRhfpZpXxW1VwETPYmTHA",
  "key13": "4WHb3q49Bg6r7K94QcmG2Af7EDPefW1vfyoaG8agaYyqSaKjBkkuYGMBAkTCWTYPYbnvaiED3Z9yGmE5G17Fv27e",
  "key14": "5hmnvcD19zqvAsbNFG9Umd3GJAfhwPch8KfkZDYHZi1WhoMmPorws2JMHpA9Ezk4YAicx3GigxFcS3ptbQqyW3W9",
  "key15": "67j2ojqpJdPZUQ6RmYUeksPXwo2guGAjHcSUJJcnCDwM6623BxvHq4oHzquhLoiZK4S1tPxJvp5LUvjwWf2xQd9t",
  "key16": "2VjwtRNyLTtwUcMntZ9gonGMRFuHhh98CdktA6LDTkbDPjq5RCuTTdGyHGZ1AAsAFqUGV9Gx9EEeE5w8WTXKHGh8",
  "key17": "jh6bDUrdta8bXTgX35QksCWuRDzYYqYteESLJDn5t8jeEv3wwEbk42mdqLccXnf4fGHg7Bvn3CSi52VDvfBqikF",
  "key18": "Sk2MkYGfgy56nuhQyMfFD33U7ENUztGeZssv6PhARb8mRjgdYnntSqvEYZwMJJtjVRAvGHqc49eeUtfSqwY6npj",
  "key19": "2jP8HsBiQSgR22W8qmJRXxyf43haAiBfWJWWVDk1igvVWbwcyDU2b27Gf7ezjo2gDGiJ9RR2eoVr1ygsEVsdY1aN",
  "key20": "3q7awDvAKe7UxxGABVLHKa2HwNVgR8qT4qVgsP6ue5c2BxLrmPvuphqsMDhor92vmoQPgCLmfT8wnVYrjhW7rAJL",
  "key21": "ez3E3gvSHo6ia1SK5oGu51rvX2CuGyh4jawzJ2FCDj9TNW3H3XjKUbvpjk6czcsxLK56Lt5n8zYyWavdvVuvL1A",
  "key22": "EXmd3J4bsnkPpNsoX5XneQp4WveQUFxnHXF2rVVcZj1UYya4PjWif9C3ZkFk1pszrFQbv5h8wt7uEwxtfK3tXHM",
  "key23": "3ACiEqNRPoF3w5M7Tgc9wFMfBcjZtkrS9q88sAF3npJm5UvmUvDyXw4VAZkoUEPTh5XpeRC1fPUb6dLU4rVKspuC",
  "key24": "3fRtbiDsiDzrDExptsb5P3xu92hQqJP4Bk4BKGb52jsjnzvC1MPVT8qr3ohabqUn1B8Dg5WusKfk9zUKykE6KrNd",
  "key25": "agx3sTfwauCJvcMSXqCcDSqXHytuHdb2hJLpG7M5UhXi3RGhqsKWY2FMumTAuyRfA3qHz6uFotNQNE5FEYXnc8K",
  "key26": "21Cavk9xH9C8CiPz3uUSZKNLPNJgG33EiouAUbGcqRdDN3Mdff4m4s4UEe5nWF9VYXyxw7edF9iuGrEbgxB9Jbu8",
  "key27": "3UJnEtsu8D4UmAG73vnUqxUWa6pcXmBRBFdTEsaq48GHmxgbdGAwDqBZ43hSq8ifRLshvh3Z3VNRMLhK7KmikiqP",
  "key28": "4gShYcmykhs9RnizBCF4ef4UwkqDArsqLNvgmYQCgAsdDMZCjZFYgtJc2AASd3WAYzYyQw7CP9grxJvQ2QFEAsJZ",
  "key29": "4ikY27sZUK8tGyvmLhCpSpbivc6SKeyJ2FPffrwdMrgVGptkxyvtRZ5quB2TCfK9tuFPLWE3QJgR6pW78ZNmg59m",
  "key30": "66nhXs2ALB4cwFTkiPpchyLfvho8wShQVDZW8eqh11XfB5dnGVRQrtmhfXRzYENSyrGkjhVbQgwDEa8BdJqtD4hr",
  "key31": "5EzDQ3v93j5YK2RNCCAgTRykz2kN4HnXcwe56SzeXuoDkdEqTyEcr6aBBqaDHYeaJRMqBYh8GZEa2Awgy3GWU82g",
  "key32": "4VMrjrUjsgYwe6B8Ha4HtbQ4o3osHh49D2jnCLYpn5XLGrkdLhLgp2iY8L61ii8BHnRMuXgJ2xMms96N4U4GWzgX",
  "key33": "2AjgwginHDhPmwCNXUHbgMfZ7AM8rPss6U3x5fX1HnrWQxiC7H7fufjshmk23cegRrPHLpuYniiY7ggnkvRDwQHK",
  "key34": "4FmhqE6exUssyGS4dpnAJHy2jne1b1yamvkAtVMvNdEEFGhEnCiK8kSgucTPV6Dde4UGcmBR6MunxKx7SpjtKmrL",
  "key35": "4ZDJt53e3SYxn7WabY37NWwr4WWCAQS5m84fuUSYJwgrWXvMJBdyGHVodUgZVGWjdNKS3XfUjAJdoXt9H3heKeK4",
  "key36": "2ek83DZdz3dsV3jPXXAdWhDHDAKXbZkD3zkbThoeAFJrE4Veqf4HfF7WCJNYf3mCcug6f8vbqwE9xAc322XNMYfT",
  "key37": "2HPsWnGDCAS8dn5x6NpSdgjWDgPkiyBZDBNbeMboysuKBKPRw9k2tNUkomjjfn6bJiMMSoP9Q9yFiiN7TcYZCgkZ",
  "key38": "5kY9tXETnXmUt91gswHt1KKHcXVtzGWdzCkmrb8h6NzyKHq95KSKz3sPaN9LnwYw1CwQuduJVtStrb46oUjAkWaA",
  "key39": "4SLUN7T8pTpYjBK4WkYP6EdvWjo7t93foJuy1Yg8Ah8i9kDGUk6yCF4oC5TGfKEwDvaVyhaNJLron1gZWv3XB7Lv",
  "key40": "6LagHSE4XPBKSVhfnurEY7FUBuTaTfwrpgu5keNa3pd48BKEc9BTtivmktXUYRMdVSSjERE2DSwQrGay3wsyRBz",
  "key41": "4WWhiWewqqc2BhnjipaCmMhRquLTHmc5XTw2VBDiJuukMiSdgGoB7UQ8PVhc92oDfrTshADvQQbJqqxhorcVBT9U",
  "key42": "5jdVBMDC2RQzPXcF7UxGRkbvvSmUsgtkE13uUMKsRBCKjEYGJf5j2y12H5Y3Tffev7rizhhiDJ3tG6o44VWQfRL1"
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

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
    "4HvDFyNtH1DmzTRJdWMKDvhnsYcikvFBSYAykjLhN6kT3aAAMjHDpzpVL1JBHeSdnpxDJmnMcPptBBCsfyD8pq9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGWp9LymRS7EBEnHyThbUhfvxbduqWpAME8M6Pg5HcyP9g4Din3R9Ho7ekctEyewvvoGyEPch3SA4VkM5Uwfbwc",
  "key1": "5XU4DfhfxiqzFM7ydNJhDJPQrAFH6UjtNSp9Q3UfK25mDo8tg14tHvLM2t5kgKAjTTTniKmPbZygKrt5zh8o4ZNJ",
  "key2": "3ci9PBRpcSXs4DJV1VaFHJGCnV21WhGunD7Mp9asNoys1s8tCRkfW9VYxYx4idhBPyQDB2KrKom5xQuZaFg9KVNC",
  "key3": "5RqbjkYRySf1GyVkEbzfvRduSYFnTtUuQkZKVd5JTUFG4XqqRs4cszdbnVQ5pmo9J6WekzUb9Qpi4vrccjZmh2f8",
  "key4": "4ZP1qvG4UdaUZbjMNgBXx1zEE8FbH2mGwpwFQqCNsHpUb6GQLkSn2bLW9GLa4azFEViExKX8oDLUi3dihn4RXDje",
  "key5": "4jfKT3NkixaszcjuSuNEG1zyowfD5MNoN63fe2Cz5qYt8817WV6szzRYpv9Vwifx2ggKe3n5rrbjJwTUeyYDhQLW",
  "key6": "5PX5vnWWv2Ks1v7xxqG5kMGEpHut94PZ4VdL8KPtkRhqd4EKmwVUVsuXCKVUKYZMwxYdWbKZdzamMoEBvTZR1btj",
  "key7": "43gUvty36cnjUYrcfmwUWyYCnGZ3Bji7MuH8Y94otPbT9HSNY1juXk4L91arGVYthBbY7vAmAkeu5N15otGqFu9w",
  "key8": "5vvxcdcS3rtD17LJoy1tmBUgHhdPiM7tmaXXzAcwRsrgjFJZGtsSSynrz9VYBCEwQN555T9MPUXJK9vvFcZJc8Cn",
  "key9": "5R9pGWwdzBky4qSeC7TvuNpUjmLacr4GM3cDhfqN3NTr9UjoxMhLxMQfiDFcNta6CyxvzX5FAHKMBKfcBNQH8XLP",
  "key10": "2puqRVoZo4kDzNkprw2acozXUCP4SsNgPwcyBEz7jdku1GHzMu5WTFjkYQdBuFk91Fc57aSP5ddTaG9yccFmYWCR",
  "key11": "43pdnrx1i59TzexeGkTJxGc8XQtg1tgisMsSc8QyANrDSieWMprxWi6QAfFc6T8MaYuAZqR2NkNGe2aDSyg1aiAv",
  "key12": "37ySB5EjaEJGffqP7i1BLcpPzu3AMhsqN7Bp7AX5TeyCDgVyAM3W3stgWce5AzLb7ZWbSbd7iHqtfXHNVEZtCqdG",
  "key13": "2a7ANBmAq7T3NWtxtFpUHvQdHGWkyJ9YDQLEHzimo6ESD8AaFVMJhBFYDkht1GqSXqdygme6ggBbU4q7Kg3afc1B",
  "key14": "UEGc5dDi6s6DWcLNeEhZaXsohe64PJMgj7CHiEkCv112uuMKCmq66uu7iDLxtQi2FaktmzbUuKjyAE1wXsFDnUH",
  "key15": "3y42Zddnj9DzWD5BzqiySygkodHEHhzEv8UAqoYMs2skZKdiH3iYDU3jUxH41gYWe2u4uNcfftZ5mMSaXAuK7HU4",
  "key16": "dZyZgRae8wWuXiPddWYQMdUjDP8jNwbW3QU8bvJioThPMhkvbN89oAP6N9nTjkJaoicWEN5M2CfMend1LWdiw76",
  "key17": "4Z6yAATw6c6mCFhivsCMrNzZzq7L7aRyRsPjWbMDnWTgoRVAmTbqCoM2BbfytQNw4n2DL39MR8D2LWGGXEoMMAts",
  "key18": "2GqJfFqcgeKiTaAHkENaJnoz6aDrEp6Ps91yfNe6pdj5LraN4nq2UDxEvsPet3cu1RR8YmfnVShNqgfLJQt7U9Nc",
  "key19": "9nwDaD7MER15UWHyCgA5fvqgHaNZNsg7eRRPUUtz43BcZ3hvepAq9cqd2viy5AEb3oiMN4EbkVXJF6VwChtDssm",
  "key20": "GsrQp5iugaY62QhWqbwk8waX5gjbAMk93PFicbttZQTkmQ6RY2f2anjp7Bn8uQ64Y74Ewd9TtpApzkiyznTiJgq",
  "key21": "3KkJdZwRReuPaXjVc7YFrosFaz4xcFH2jWutVcLKRYvJ4Yc8DfUzxRVXVgi98YgyEExs6cY7Rm8s9C4W1azLbvtK",
  "key22": "2nWQiHdfxo6M87oTbRRqLutQxmzs221cyoXtXHHxSXLuf57wwqKmoQn7Xxi9BVWVxj9avvEA4meU88NNFp2xh7Km",
  "key23": "46dSTUhEbvmYEbk8MRumjKNTeksrDDKbWMVdoUK1yFyheoQYZMs7s7vvVRc628qBdx9PTkFDn1fDxeTDZXSio6Dc",
  "key24": "5Fi3uh1LZDNntdiPrrjBLbzMLTU6qnKREtW1PcNVbVofSbyKj7gKHgXeJFEcUnrJrDynoN5291gP54EadjW51q3v",
  "key25": "4hG6WZeyfVkXXii3E9DVkuuVscYoDnCSo8XuasfTiFDA6uEZpjqSd1zdh9g74KqFxyv6udfWkDbMn4D9HL7SbmPS",
  "key26": "3scYUQD8tWvFmfDGrjYYsspaHLe5ErsAvmfY5tnkGPXc6yqz11c5v9oXqPbZ1JLWvMkmZVRzvMFsHgMNH3ZQFKP4",
  "key27": "7XPb9nSPuJjeow4qbWDFBZxyUtEMU2H8hA6HWXxJ2KLKxGucWjhnwobNJuefMHuNKsgrtPxsDc5pp48svdGET3X",
  "key28": "3xivuM2ExHMB83ZvN8fWH5Roa1aFiYqwZiFs6zJBMNYxDNsTfiWaJq36FcVPX8aJtRjXLPcUY5qna7ntpWwm6SWw",
  "key29": "2rmw19F7rJHbn5q4wdqdRHZg3jo9yjrcgxqvyZXVZrggoYtoQ7s8MVp3xpNZ2NPJTi2vNpSTkAUfRggsX9QS17bV",
  "key30": "2gdxrFFgRNPr5kNVczRmdTA196Dvc6TVHXCPGzYX9PjNk6NuJiZMPWafW7LNhh96G9JUXEJCSRJAqPBygJ7fQHDJ",
  "key31": "bKcshGDCqpNCkL4eUC8vNMbeeJnNq4hPTc3zPNoKMKsbxAbWB7AQ9hvarzKKQypcgWdCE6U4DkvHusgU1E5PgDh",
  "key32": "29E5zfMGabqcUgBwHuSo6BSL8Pfm85P3xHn1xxTxrCCH6pH7BakbwrG4WGHyzbR1xuNy3t53ipDj3qsAgvgAG7Aj",
  "key33": "5xEGJJVYztKSmf5JgBG4aUH1V3cucU3yHfWXKcBjzSbW2iDuUuHMUa31axP5rrezf69fpNtEMweeS2dJhCLyjpGE",
  "key34": "51JNGCQVknTtSNnNdCLLdHQ2yLZKZco4DbfCDKgJSDy3ykrGkT2EGi84KN9zVxLwE48hMSWV3nXtEhoD8SKgw3HK",
  "key35": "46YQ6G5HhoZt61DVxJwcjkbTKpG85gn96qhysB6QHMfXNqk56TNxzbDUcHEm6fEHZaH6zkP4LHHwZgXN7GvYFnhw",
  "key36": "52nunmiYwVmVkknXku7rMrULagFwWSLoX4uNYNypF2HjwVTGUfZ1qdQd7o7cmreo2qUyv6z3ZAZJc6M9ASj9v1EE",
  "key37": "2Xi1ZT9Y7XzM9FrD53FPFB1tKwwMihgwo63ZS6kc5KJrb8gR974P9SepfGYRLjdivoQ8EDhfgu3bTeNSFEnwixnK",
  "key38": "3HbpzhpdYCRr5QGVP77mctUThfQgZpM2baUJkphFVsQMEVdHcZ7JjCNZR5Wtm1jddHevZoH9Cz3PHxNDYRgjHkcs"
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

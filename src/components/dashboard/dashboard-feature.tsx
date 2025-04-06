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
    "319vB5sEbsaifvNvGccdCnXpQHsf3HCqaDjbo4FfWVRgH9FCwEV6gFGkVnm5sMHqt1LgWbP22iyqrhTHfofGexzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LR1r5NZUBTmA7TLu8xjEggJgJ3dxGk7pFqQjEzKAaeNUJCNFUdWEQ1cDVqEy7Y7FrUNByjYbV3Hwsa5aLJeZ2Qf",
  "key1": "Q47hsgBc5xj7NFJzWkn1sdggJ5BqLULMck8LYm5Mgn1QvJa98nCoDH5d99msVaWLk1dDyd5tFSSb3XLgN5ZVknY",
  "key2": "49qc1VbiRnpR1gEdjr7NUQJ8fNBJBmdAmNuVM7atFePE1Yve8RZG2SVVbuGPpNBXL792LCbUXWfWq4gY2rx25h8a",
  "key3": "5eeAMJ8mNtt47JwCvSAptv4VHhefeaWrAjo2x9Z3pr4oDGxqe1Y3TwY1M7tWSvijv9ZovGQ7PS47S6DAwCquoCBD",
  "key4": "4jheSgMq4YpjT3Er96yybjWWEywm8zwhzzMxUR4MpNS9fuieCTqvfbd4DVuB6V3fn53VFarg9PboGRkdgm1CDTWk",
  "key5": "3Fk5UcAwdKjX2Fz2bSuAGAzgjJRbxZDWZWiXnBYdfx5kb2jC7RfH3WsVPjHmsAGWqpegtL8y3oRAyhJaPjvfxjqC",
  "key6": "3za5YnR6yHe37Eij5WxP8t6wkV5fCvkNKqUfNzBRB49MNt8tJmbCpZQoo6X4Mx7XwcYvSzh5FsTvc4y8hGzxpwVj",
  "key7": "3Gw5rxVtqe1P1CivXbAbf7oh5hFSRARCaNM6Wce7yyeKJLJdKYSboNv81fD3A5xJ8UTcpAE8gqngNHGcGGWbeteL",
  "key8": "3hovRKK8Miz9A8pahcEDmwwhcYpfB64XeHtpZJLpzDnfSChXAoDR6bhKt4gLNNykZ4iajqGdG9zVcVgheWNy4mE7",
  "key9": "2YB4JMLoXpBqe3gKsa1KKq7oz23Rczb33yAzpfMhjxYwgvdZ7utYGE6dr84t7pJ9ao8spTFHFaHZkevcXAzEzSpj",
  "key10": "4QooimPT9w5Csc4LyD2Sc8gRSdFrtPDMtMyvTCivPjRZhyTYrvNzJapXM7ipE5jKVKZXnJLxMcHCGorKjNb1aDbJ",
  "key11": "2RoGTFRCivf7L2WrQXKRdBK5HTERYXf6ryuGMpZimDcmvGRHjFigvKVn9N7enMxmQVTXxAC5eYFb8Skp8behANQe",
  "key12": "VjrX37DhDcADwRWWSabo7HKVpT3hMYNCVe4amJvw8zm8k6Nckr36LvDYT61PXTVA6pFjpeJ2E6Qy72Sq34ZhJ6g",
  "key13": "61aKL1XXcBDmW2TYaUpaoaYKpAJGpQjSq9HDiSJmgn6tPpQ3yh3amNyDAUj7P1eGC7D8xoDCGGfMZzy6H9Hb9KSD",
  "key14": "JBAkEw3tgEgeL8fPj1vPdaScsuZ9mnUwYpZ1AVJt5c56qwkGiPb5K4fef2GQofeLnDHug2F7B5ZKVP97SScz4Ej",
  "key15": "4TpjpYWYvTN31LWAeeRYGxFapByNRHurup4dfPKpvbUjpDx7kWX4y42ppprKWwwdKrMZ2qEAzngg15rkF2Lrkxu8",
  "key16": "5m46Da6nKpJ3Jd54NRdAbXJwgctNtybxHacptafexcou6vt7gtSDCyFtExwJiSW4uD1oZnN2hPqvSUPu7DAedpSS",
  "key17": "2o4hD3MtjJks47dfjrpSwiMZqYm4cnQQnvC8DzLiJnLUmkSVGb68mAqsFcdd8aEN8q6fCodnJedsQQ1mSHw2onEJ",
  "key18": "5a391vLErR5YjSeHGLAz3S8E8o64fk8UGrEwzLdQjCEXAdaR2LF4Xp8E5NLWRCYGK7xw3LDHySsHmVEiNuisLZLs",
  "key19": "3UmrHLcZYeaYV8zAsHwoGT5WJ9gAq8hN6dS9LJxTtTSGrZBFg9UEbwc48edFRV1BatM777ZJFWHSAV7Qvv6SzwBr",
  "key20": "4aR58mjVM2gsoC7DYZHZnT9srcSq87oFRzqxgFibH1XhhovkwPHRo8aHggHncy6ZE3HcP8PUEAVQsW1jhoqdpMUD",
  "key21": "5rhXPgE1RFN5XTZkMPhPo27xPMgVscSyfjg2YmxFcG63TSFw69xCh486Eiw6CCuF3vi5qe3FV4BQKKYCeVrodaGG",
  "key22": "5t5rxQMYKprefT7sah9d6n4VHK2fqspPb5LCUk3akBHpp9gt2BSpyyvZdABQckCBVdzsbqTfvfwgdE5ZnUfzRSV3",
  "key23": "LsWLvDDLfsLnQg5SfNuuiXo9TQ5fxKgjgPSFGdPzmUvV9ar9CZsEfVGDKHgcQSKjAo98rUjmk6q65o7AhKVoXox",
  "key24": "25ZK4x1gkDPGrmdJcUGwTKjCxRP7qdY2pRBADssLU7PeAH6shb6N9ZjTMiaBxHsra3dw7sFZyhH26N9m73NNs2Wg",
  "key25": "fWyCFHysWXLARE3KwZdXeMozCpHdCSUnRHwKRZE1mg4n4pivVzNMnp6zYu4n6qV7kw8Qo2EnLCCxvvzVJewBJmA",
  "key26": "3UzbVeLvQzVFvoxpKWxSo3XcSqSvF24eadpbnawjQhzLkArfjzJTTKouwFFRDAw5v9dp4ty9yXWHx1tXKK9UdVQN",
  "key27": "3W6v9Vy4Ztzs1fccrcoVPq4pZVJVPS3gNsh4CXA7Y4aFMRtXV9g9iQecaT31VhiGjavL2LwNT8Q8Sh7w7ieWEU6X",
  "key28": "5f3MQ4xaPmqwqRSD4cfzU3mTMDQ26K7QPs3S5CARDgpeegAnPJUdhTbvcP1JF6FRk5XUyJ72M2zggk1pBpt2FksD",
  "key29": "4n59jwDMx5wR3uMLrQ7395GSnuy3enqAm6w6FETWQ134CSPfhPsDuBrm7UHpuaDx6LjKC28sMVu7MVJqtWiY4kXZ",
  "key30": "4qAGVubLgFk4W6uEqdfPVMCmYKaH2EAnUkNyYWjkDqujLVQ5gTtRqQAZ5dHSrQb8DAt1BtWX9YS3Enrv2cAqBqFB",
  "key31": "1EDYRvmeViHBtoTuxxzricMRsSuvmv4Zo4X1t8o53ccj4tgNdYt6AiFUuHpkd1WkjaHdBiREz8hhxZudXmpnjmX",
  "key32": "3mPDsnuVYyYLNku7mXyzerdhXqinq2xn9qaCquK6bpTsb2hVdJ56SLQb7vHxJ6y63L1YRVWXpUW5JEw7gMrt4Tbv",
  "key33": "4F3Rgo996uMFYUJjfuoTzGMtwW4vJm8ZkEEqGgJWwbLeaMjadvQWiB9B6YnaqwSa3rXZT9jm3A3PV7GVdjfPLMjY",
  "key34": "2AZRtKwWyckXVtvy9TEdgxvVXyYMAhZt3E1mxHUnwG5HsMc4dD2jB76PUxADTX6RTj6CWcvmPUJH5kjcbZErq1Fh",
  "key35": "G4du1R7p4jZAwCiTxEuFC2kCFeVQVDopWiEmdcnoiAx5NzX2KZBE1U9UxrqkvGguMc2aHcirViU7wznU1qQQfvh",
  "key36": "4gp5TFSBqCz1mjSgbxWABD8KE2XEq4QWGfHaGnhUxEFsGYpFVzHJ5Gno3LUs9UQN77vPcAjuKjWuQg5NfZBSm4xo",
  "key37": "2CkBjM16NPaDXvoSHaBaSwhJEhiMLWmfbMDo732Y4BzWsVcknp6nXRjFkf8v6CJVm2qVwBqm1b7tag8EpizhZZGj"
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

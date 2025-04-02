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
    "4Vtg2KakA91CoeM3PkneUBfWy8WXc8WMNQ4tWKbvv8VRGo3wTCwp9KsMmpgDYHYMx1MDEMa31yHsLVv4SiEP8NHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JXeRzcaPgNgucGBXoMhQX5GhEW25d8GhqM38Y7zg2EjyNhtimEvyiyj7A5yKhpwq8p6D7G7jEFkW6EP13q3TFAG",
  "key1": "4XLDNWrzxN3SWZrLDXxim3aow3NbiYoYDpJQFz2P7k3jA51NQuZVSj65rdDASicFGA3cAYtgodBSQNu9awnoxYMi",
  "key2": "5YBRchBcEXZ6SRZaNnnP432m4LbBZY2aebJPwTybNDg16HyMNBVUiqvFiNr6iBKv5fig8YFkVNM7NBBkPwoKpapc",
  "key3": "bDCoBmUnGmfoMhan7u3j5Cjvphv4ECxCQwW6QNSeKMkwpsiwn7VRzoYms451ExXKyiCKcYLb5eiUSm2HiPKGWzA",
  "key4": "2W4sKN2iMUQHHgFKqT82x6uSeyAj1UVjLhZVpwbhQA5DYz7ZUaj2RmHNMDWB1QSc2Zv5WCB7tF4BPjfw4xzM4WkX",
  "key5": "4wg4byf9uPrs4jKu2LZsmaV7Pnzzd4pqiLrPdU78AwXGTzcD3ARaBFXDqdMUsWF8qgFhFjVYYsdNhHBCeXer7sJv",
  "key6": "4eJwUpVzkaR9THxJEYGDhpNKS1aMo6vmRCqrhcvdft7VK9NFrdPk1xaQvDUSdfe9GUGP8owwzKY4pf44GyaZtBUn",
  "key7": "Lmaxu3N4jggBuJzjMdB2H35Mgy66ocw8PfqSeTnm5ZeN23a8wd26otCpEgrj39QNS9riCeD9An8Wmd6Tc9GwLf6",
  "key8": "gupCtVAEWrXJNnBkGH2KRihDQzusmKZh5hWoKMPUdoVCFxoVqZqAqR5Yjcek5hFAvzTsV2KcS1b1yhdys5rjkdP",
  "key9": "5TUTgsh9gTApEzBUWzmwddBLAYw7iaJSUXR9nAQPguFoRpDjZgNPRBZzzXe79W652CcbFsxMuvXjjm1tJTD9S8N2",
  "key10": "3hyexxSVNgxajH4g3vGaZ7SK7nrZA2jt8EXxxDZucfPdwmSxYXRM81zqnbtBHDs7L3S6TcW7KYAkx5Y71zhPHJaN",
  "key11": "4vc6Xrnw1yYTwCHbSq2EtYV4XqryMLg7Szih48s1pHZ1qP9HDWEo2zKFS4pNDJ8k8FT4e5DBBhzRu6rZEFjntYsN",
  "key12": "3apaFodJdBoPueSAXCJgjYvGko3pGPT5W2Ti1CnJj4UoM9ngG1JAaiG115svFZ944NymAtXKao8Gy55vQmC8ENzp",
  "key13": "3FD6ECtfbspFga8uicxY5wDnCXZuGExmRizSUk54znrNvHdvNMLfs53upCq6tjBvPdvY5zam8vkJMhKY6mQh5dFP",
  "key14": "5ZshzVCFDNmLD7E4Se2PMtpu1W7QxxB2XWFRdf49XWq7ZuyaaXZ8VWBmGUPDeaoXNJpZ52LUz9vrzURMjtvTwxHh",
  "key15": "5i7VxZr6ZKHrRUjYNAwUZY4Y8HZcrT9P2H4wa4jhSgAMuNuzMJ5EeEJ8wXtYBc2vWNivMitH3Nir1ZMjPZDaQtbb",
  "key16": "4gDvLNaR7VajmMAvsrPTSWbnLibR8HB9boewMvtvwt1Kct916M9EM34XCNNRYZj7fdkf6o5BPv7BxmLzRpmDKsdG",
  "key17": "h26FAJ3rj9qJugzYxoVU1L6gMYSK6KdHWg8HYPaFcGQgbymjA72nB9PKkYKVXwkpGNYbsaNEoKzdwFpjGwC4v6c",
  "key18": "43rmL5DetLUoeZdH8yymdEy1L2KfEGqDpxe39rVTjSYn7pswHzCuhyg2Ua3sMFxYdHJRvWsAvbMfsasoM8P2TDpR",
  "key19": "23wj8f4HLVeWaWvNpkKrhEXwhQEDHVSqjVGn3UQhAdpWoHU1YKVuc4919b6m6oZG98qwjCZgn9td4JHXsKQNHRNc",
  "key20": "5qrAeJM3sF9KWvmEPPg5Vwf4JGtPqsDMo8ZkV11uZGd2qiJVDhDZsiMKQmbzQfJ52uTBXjWLpPoUxdbwcAMvmMWz",
  "key21": "5yLMGkRo2V4XrJCEBu11VWsPRJg7tnd49Xakn8EHnZ7KzPEYaKzAmtbGDecTbccPpfczcjUx44bWswM8GRg3wgbR",
  "key22": "64LvaTbgdPpNc7LtaLxPn5GV8LWG7gWxVzfovLjGDh5cRqZnm2scpxd7MZJMTgMkVfuQKDuDZfZhNvZY9rVK4uAx",
  "key23": "2tj3B7aZCVFKAasFbTaqYLcrqu3DL8yStA4miR6xdUCNAPVk1wZ4bLNV1RaUmhwim2MxvEcK53221JL8RykqkBKC",
  "key24": "2g9PAPiyB7C722hEyLJcZyxz5X2EtdLsaT3gXhCjw5zYcdaaAmdK91dnZtbsFT54FJaP6HUioPFcoMHXxN6ettjT",
  "key25": "EKFwRg4tqqf2988VyLd26SSdiMjbzwSmqUBeg6Ym3NgB8BzNQmYJXQt427B6JUQarb3NsYtRxB4wyd7PCbqodUx",
  "key26": "5TUwUCxcqXuTYyGPXKQHvZHxcSR83MC3BfvwvJrPVfWpiLH3hE3AhQxc5WUCpjTrbiERDvL7qTPQPzPmb1qERiXg",
  "key27": "X6wYMo2FYhpFRcGkiF6vZKKooS1Z1R5fd8cao68Rvqapyx7JrwQ7SoLo3YKt18PcTiaPtbq49WhfCZdqeyeKa3D",
  "key28": "3sxChKoRrz6RHkvSPS3dfqxzqSq25SxAu7DPLDRdz8w2er6D9HReiH3eAB2gRQCp2nmo9A4kL6Sno5CtYR2P1zh2",
  "key29": "2ao6hJoGpU4xzjMMsjpfmcN97CENJNtPMATRjt5SADMvtciCkQUBfuKyoKZv9Tvks599pLMPazUGqoLNDhAbfWev"
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

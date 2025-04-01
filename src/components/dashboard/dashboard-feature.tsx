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
    "2FiHjTFfQRWNuNiM4MkbbsjBxrjpef5eBU9xLD6S2f1cuPGg8MZykdRKvkc4vqbmFfkRphux6GaFmtQgQyBEFWF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5usqj3YU2ut9YLirzonziB6ckugumGFCAqBpxtjMjrMnbiEg69aWTMjTyURgu8BRDdtPRXBFWHsnU9kakcrFpehm",
  "key1": "5EUba5oKsCquRSrBsBd8tAayEekpeHRoHc7Ys4baLuCRURcKFBc4oYrmk9bNLrrYT4Uujr7bYgVZ95vBYLZv2NNf",
  "key2": "5NPzEvN8zipAfFrnZEwjnuGov73ApAKeLCFPZE9iyaJqqF7TfpmZrA493S6yEzgxmgcN6WPrZgeDbL5ctr6RpiWy",
  "key3": "3p5Ds1hGqTxVxifAXyGSZ3ztaPVYnjfkNWkXSG4VEVGCdjPDPMihjV8sRy8kA3d9HELi3ZrQnxfgQwmyyLwMccJG",
  "key4": "2KmQwnnmrrDkbGPWZxesH1PLwroRK4keh5jRhi5xdjPcxnRaTV8HYpTkB8oxWRHesNaXFKzY5Xn1vhG3upGd198Q",
  "key5": "7p8JmibKZSthHYzu1qrCmCstY3j1KbjaLbHjJoaSNokjTg1GCrqMm612ova3yo8wovFQXW4R99s6V7BvhWLDLPh",
  "key6": "KeV7bZ3Q3MxzwCrR6Nc4zx5JmDHCtrfk5ctzVMt8FR7Yy9cqnhq5Luvo4F3D3Rhiv8grtWJX6qNamQ3PtQZFT61",
  "key7": "3bo68EpVPhFHNcnHmEvVNBwPHYrUdGcMe7NN2kx5GghHmBTC9qgXjcHnsYbA7pQyUEH4CuB56TA6AGmHyVLoKRBQ",
  "key8": "24i6cFBLWAeQAWob8kR6q9RoTtPPtTf36hrEgr5zFD3GD77y65JcFkuNMU5gsY6YkvuE4DLKuXakwRtq2hXAD1jQ",
  "key9": "5pk5jXCM8H2ivFdzKKx6YnWtDZgtb8Ckdxw4vgHAaKTT5srz8LehY1Aammyy6KGG9JmwtF7DqLLyunyxabQvDUaD",
  "key10": "25Ka9J8YwCnNa5QkcJGZdde7mz37HFeKxzjr8f3bX6dt6vgTkfQR6hVxCKfr2ewfPgeGkZx1WdbSuXMbkby1EnvA",
  "key11": "3S8y6AKuHncxGbWrNs18LPMHfksY7uNDQqZzMPzibKdpMNNeNyis29668ew79oCR35bRTGsCpYJZtdFSHpeq1Tm",
  "key12": "3CmLWvWLvaLkkfLuR6KCno4Egdhrpkdq55o9UvEetLZ5Vdxdounz2D8N87E5bjsEoFjiuV9Dy4c2pxydd3YpyD1W",
  "key13": "5cywsTjvLjhixT2rqe8jRDba4PJbBexCy9CkPvFb48QQn8dwar6kTdUoisKByfS2zAGjuBQ4knXqPSwZmXWcuqng",
  "key14": "czAy2JQMVeNdconBQcmTUTSW2vGzu78JQUPsfn1CWrbPmVDg2BdcAosxhKczrBxQzyLPkuxTDj7wPfc3ebxVP18",
  "key15": "5WzrhdD7wzuMCEPXiNpdqqWJgmLhWftCXpt2pNNGKW2b6YCUYX6oqQLd7Ud4YAHzeoauX9KAaWhqGfnud9r29ELX",
  "key16": "57A2pgmm6ksENQTgr8TRYRi21P9WWBxcG2MVZSsTxKqr5EJ3N6zqdgXk1whELSoiNu93af4enPsxF5HEAMgETZKB",
  "key17": "4QVtC36UhudRQ1WDiVvNb7Rhfrx6YrsmBDkaxxyKLn7NyYgReFPEubH7xdFDebXkTKnWazocynJaMG7ZDVYEijLE",
  "key18": "3iMVgpbUTLtg7b8FPvToEQcki1CQNRcdWJNBfxwVjy4eyiMcgPEBZiP2gNmySVM2ebBLqK31fpX53PnXx57TdfD7",
  "key19": "4UKaYY6LKU6CUEjCCHM24Qqw2MhNQZ4Wet5xULyv4Wociy6XU8D9kgm9qh9vNE4aajGoMDjjRUXFWkqztp7qmVd3",
  "key20": "2nZBa4UPBAxcorcCMr2D6TSiQ4d7cD5prM9Lk5r7d8sLFBUS6J3hCduZQ9TX4zM7Rh4w1C8CajTRFc5whawhy7Pe",
  "key21": "ijifoprWUAQinVNva58DYdFicFfRDTCaZ2LyT2jAVU4mgbYqVrZXCaCj2QVpgMUBp6CSPMVUrno1GbJiP2Y4QK5",
  "key22": "24QVdgy5ndMzPJEkPrQk6wXNu578nmaUNwsp84gMBJbeGuTWUDTTxFqYU6FPHxwyWLtJSaiQTMri9CgocbCuzoLQ",
  "key23": "Vk2NcziMHVtNyduVjDmdkbLy5GJUUnztpE96W6HCfsRr8FCBU15hbBJA8xD1osG3NqkMyBMKVajcZC8rWe7RUHv",
  "key24": "67pwEtgsxyEPKQRwSfnYSTqUvZWKcR7ZAQQxxU6P2zWL8VFugafCCrnWHnhZgQ3jNjP1dZXHDJ4W4wwPvRFTw59J",
  "key25": "2R8dDRi8vhdrY2x4Zz2dq8K2imvwm7qEp1Ru4ZDhc55irfaPT8MPoAv87WgEv9pEdLQR47Rmqf5Qp7kog4CKzPWR",
  "key26": "4SYgw8e6SaVouDEWBQHkFhnyUYLBAujsPwerfuK9pyCUgLR7tTEMzyXk1gA4dMaeSo24wnEc1Mqq1nJZzyyk9j2t",
  "key27": "3k65z7AeWYh4XiMQs3pgdaJmmfYpRVGa9rhBqoo2hSwrV4tkbCb6RKJgqghnmbivmheP5GkLUPqnAMZNngYVYxsq",
  "key28": "29wn88yvwu5S4Bzivqe3q47YC7haLSRDDnTNEiXfcAHuXmxsZTR73j43qyG1DkczmcsjutxwFzDtg6txznw8MsB8",
  "key29": "4R17KF2n637Rtw3GYCh2zJuamMsZnsZg4zWA5E3GFpBGTkfUwjZTaS8Ewc9EaUEepVrrVBbpvLbD7xtqSz8PfCCR",
  "key30": "5adaJdsjQzAre3zPJSJSbCBQsvUv4KmDARAmQHukeV7t5Y6VsbuZoSSX4Hyz7N4ypiGdpPACZJXDuzW2s5zKwF89",
  "key31": "2avtenoCUdShUiLaWfAcFPPyxoGbrnqk55VFgVVuaJoDo23JvJCJfcWCQLLERhiBn5H4AseKnvdorjgV42tZGVE3",
  "key32": "4LEuxom2A1D8JEvDwLZzLRfZSXk1u6ZYoUFePRBcmpBwsLTV864CT3JN7qDkrGtdbKuTHDWAm9FAnGwxPafRw4Uz",
  "key33": "34GRdt1tZKWzRvvC7WvLCFcwHopvzUh5RSAvGDZzEefE9QUWfanz3qowM5mNpuTiSb4fkHrkZqwscudwQeMqbGLx",
  "key34": "4uYNXDH8hdrzTJ5WQXahtArTNC78XfXdchKK6qKjQGjwDhQwX5gYLD3L9hDUtA55SzZyb87vZsVbtqN5EmvmeZCb",
  "key35": "4hB6SqoZxd7RTnhKRWiSDpBrRg7pKQoKSA8HceQXv2XeWpQiFPopi5VW49S9sLtyng2q5QmGgDjBKTNYnQKHCixX",
  "key36": "2neUHyHhbbM3m67FYYGz33W9WCaR1hLyCqACu1tUw6LtJv23dNujsHXPGcpXsFB2366TevRUrUBmbQbghzgGnGvS",
  "key37": "2WBZ2ZsgfAjmV1qksKzyLn4fqh4wBAcd18iFS3zixhfNmajFeoKz2igtA48D2xPgE3xjxvPgqxds9GDptiBZmHrc",
  "key38": "5zx9HKjiM7wtUF9Ehao3MfscQoU7HMvXHSKd1vrKhxs8VzG5LYVvojdfMRg5QgKHbtN7L4jLepoG6u7zsVRdBNCW",
  "key39": "2YRkzaAJUmYYGDC3mbJTLqaNcEzpf648ewQfg8kwTEtVaMCuPEtbnhw8yF2Gw3XiiWMMgTNrFDJBz65CYiToJf5F",
  "key40": "3d1S2nddkBBkEgLyyYKsdAjpFsc5vsAiBT7gVGiYQHcxiwAYTDqCqKqEjzcTbCXxU9wNXfqZGYnywzvRjWDEyfNg",
  "key41": "4XZFhvTUZAhmcgNHBujgHzjEQLYVuJwffFRSp9t2jC7h6DdBrx7xzHEJoSpyqeFiSyDAocaoJ4KTKBLFG5yvX1pw",
  "key42": "2hahiRi7Yc81dwR67WRoRszSbxQTXX9YzNhicQaPn1ru4GVh8LoCjCctFdnnJSCxxQK16GCwqMqfUTDaKMpC1vPJ",
  "key43": "64gdLbWkQHrh1KaBUTyNiWbsUHxCakk5zLPWxckwyJt9vig4VZE8YU1gsZbQyVXyFZSMBdTphfs6NsvZnYBh8kKU",
  "key44": "4cmgiir6aVGK2BHzNuzCuhZ61C9he5Mi2zosqH6yfoog4F8Wns9LkurTmuWhoHpm6v4uMuGJKrHAZjLJaZg5ndQr",
  "key45": "5xg8vkyV2tP6pUjxhVcPfH2mtvJufsgVjRUhfPgY34A2yBZNErS5P77hzN9GXK7XZqg87DDPVruBGZm7geesVHGN"
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

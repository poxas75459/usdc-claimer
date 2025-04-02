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
    "3egh4r8S8cLwaC2zx4GiBhzvyqiJD5n4PjyhmzoCfK2wX385DDx2UapAxPSgh7dFGrqWNe6vopcYEgAcbdeZc5YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XGzN7mioYnNSoVNFWqq73bufmPBj9PEqeRnXC3DD1VVghg4DJCk1kF81auALDkye1vqJTFrMcceMeS5djfKzvkc",
  "key1": "QBvJ6xVu8hPZCKBoTpHcVW9nEyMewVE5tEK8yLDVF4KKLm5QHyEwfJXKmZmji3PuzWEUYfbfhSC7vupJvaSCxFP",
  "key2": "593x5WxytHyq7asEaeNoQDSxXSvhCq65xrdoks3s9wxu9qJ49MXfHApTBTiC6cohaEPVRq1dVh6qK8BwaqV47dHY",
  "key3": "ZERgN2RgruXwzJ6PX6UGxfLsETMDNRLJhPkQg8LyGjD6PLUQcUSNnjWgu22FkywMT5LvZn5mhrE4StR7cST9Hy9",
  "key4": "3ofZMmZpVCnvrMJEvNP9eYFRbYse8AyVpDLAC1yXrMB4FHxDemg7f8ehaZGssfiN8bxqUztzkmPcUJRhH5wRDLJA",
  "key5": "3M4eeEPuG1RLGxVDbQLHnK9kfRNy5o98SX1MSYKMuDTkBTBP4agTNqy36Vi7HAJN9Pevf67UgP6fGUWuKsrdCP97",
  "key6": "3pBd12yARWXYuhJJrv8J4jS1gyhMoACLh4Egt5kpYMa9cCYKXh9G6FqyUF19hDUtq6WNGZDQ48WdwVf8p34uG2CD",
  "key7": "8ima4BFXani6TTuL9sDjHi46qLhB81v2fZVrihoUbHjAy8tiNxmMb41L3BvPW9r7jWkESkxBjEjp3fVs6t3c3jj",
  "key8": "5Pg3i1o2qwmW3fg1znU4QzWYjL8k3mhdoGPonudsZxku6Mt5bT9osPhHD9xXZae3F8G8eNd2eeLMnmC5q9RCLYsi",
  "key9": "4t4LPRGKwyFYsPBai6nYGDtLGw7QWZqUwxs7Dhb4fhMGMd2FibS9GE3dJrnRp4XwELJ2Qyr2se7nJTLtjpwaZGBW",
  "key10": "3eKW63z1V6b2cwCWMHSYsBDA57Syh3aMnNRJXEsXH11vxCkHCKNiDwpiehs94iC8cejv9usKQ2o8feQQuJSyuRHb",
  "key11": "3qNimZXGGgnKsQjMEyTcNyztJYP9AwLFNpgyosMQ3weJ4GAc85Ko1aNJAV9FEv8HJ8RrK86koqq2vyA89bz9bmRR",
  "key12": "3NTuFsCR7oYGYRbyr7UztxpxgNAts3fVPpPc1ubRYcURrEM7yXbccqG2gZj34fNysNiCkQKQArDWZJsoqE3pHBtT",
  "key13": "2nMBpfWdyyFtrfJwCYAHmdyroGfcehU8krEManeBDiv41ihviuiAfMV61kCFzTfePtHZWySWefLwVkBhs5ftN6z",
  "key14": "5C7Sez2ieogaPsSM823K5wYp7jaNR7tKa457CpS2Ybiiypfz5VjL5aCyuFqAhCXWm3Bcv1ppn7hBuFpdyyYh1UUx",
  "key15": "64c2MJBqkZBkTFkXjsiVpScgZLHvRzTtrK7jABaTDJvXJMxgUPN38YxJANjgUEJHqHwX3j781a2Hqd8TDT2KGTPj",
  "key16": "5L1cSsgDYfzURSDLovs3NVYT6Cx8tUKmk4VqkXpcPDDRP7utusJ9ZhPzXyJ4HNuRBFZnG5Mo9HpNJ4RLR9nhA9SU",
  "key17": "4LyjGs9ZHx9EDLpavTTSZLAXt7pnGfmcKdJ1819ncjDAc62MtEYYU7E39sev7Uu8PCmvTZAECEPJ8SRqURNh4wN",
  "key18": "4Bxh7aLNrk3he46ZxJ4mMwZszbsHraFjebtWi9xvRXVg3H2fHB7GFSj91VeY7NyDbuS6zE8YWtXYxXDXxm9jMgKm",
  "key19": "574MK5Hn6SW388NZqwRJue2mprkphgwUXxdTKomR42MuzB3qFhqyT954sFNRHiobpG9Kt2cjxhTKM4E4w82jtFvv",
  "key20": "254wL6xhnGGVE2QJx9Nn2GfgvuXirH3Lgqt5UjM4wJKh3EF92qjBSezrvVc8tTMUsYzj3DV8eeoS1ddHnkw82vBV",
  "key21": "3VNHQFUUbba6ibZffv3wx1AJsVKNVN4H6U7V8c5baYY7a9QfwfTrxqWJSTTb78MSFN2HJ5ciTgeBRCfkNSNVcvLB",
  "key22": "V7uvmW3hHSXptqNms36f5BonV29Bxp8dhctPXP6xT1pwr74nHcq6uEpCWQfdxXEtRVx5CysVLRfxNp9cWFmPsTe",
  "key23": "2bF6FxSQTBVzWsUCNcWTrCcKGM4vN9hEg4fhafQ73D5wJhQrkkZG8TyYgeEQm2fxtuxaT68rgtpCfULuPRZnWnTj",
  "key24": "3mnt4djH7rNbJdK8tAWaFdVFQSZdkPZ3a48K5UMysxWoXtRh3Hmi21N1AxKoLTqUd1E5wZ4bJXH8GSyVV5pLx6jW",
  "key25": "5Wgf9ERGiDmzaZjnB81phPNPEfA99HztwQVGxBp3Af9423z7JCJTW14pTzWMBiYeC9iMjFaMZqPzytB7DZTf6122",
  "key26": "43bN2XHPxniirXMBhp2AX18uAixYUSzfNKFjbHvWBo1dQ3bLx9TjL2KTKPnFTNHQbBw5Dh4CfPBNGKJQRLXPxYiS",
  "key27": "3YvHRtEQmKp8vBMXmsg41rVGrupWBofaHgwsBoYfRYrQUasLqjgTTQEYiRwU278Wv6d6aJEKo7ivb9Kq9Yqax44h",
  "key28": "4xaV1mj9fGdFKAVimD1ceG9wRCbctn5iGUMTfBENqiPZX7E3g9EdScuTRg1XEoAa9ckSetEPikf544uM3Edk6KHH",
  "key29": "3SUgQs2L2HtUFwQe6GVfiu3uZhDoSjSe8PDzpiyNz6iXJvaPPfX5EtWZK1gamNbbegmFH8dV5DDeGFchRozMM6aK",
  "key30": "2LEqm8Rz2ad5ZmtiuBur16Hk8Wa7vebR2Sc9hkp8rK5oRL9mbfgNyq35sF9q6sC759tcKcWoAm68k6yNfpvfWsmf",
  "key31": "2dXWNuePdGhRj2Wi43qAzsKpJu1wEMD99CMZMRNUujkRdXzW1ZcQanke46kUNBQAtqLTvmY89FBeKgobdg1KEeBw",
  "key32": "5CfKdsmzWarVA6BVJWfNkR5xzSeb2bDyGikVvczjzKdbdyf1kJsj9qUBAW1sAeWjnqh3NXrqjRGGtUwZhK8aExgr"
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

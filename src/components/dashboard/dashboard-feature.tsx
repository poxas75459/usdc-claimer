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
    "7gCTiV3amyw8bCi6MJu4V9PMxpCZGAG2engiMU2rU1KDbRKdW1hNJ45djoY2heV39JsjtfRUVn8VmKuFqg5BV73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEacMXV9SiHmHAFHSuWfMWsck5NGvRHipqki3kVULazG7yrfCxo9YK3LKmBAEw81JVPk99Qxxf1EFnLHu91bdSc",
  "key1": "3nrmnxaA6mAH79yaBQAS4B37BUESnHUpdLLA7GLt8j3XVnhs9EJJvEpcnU5f1pisWjSC6JV6Xux2CkLRKnBb4cvT",
  "key2": "D88Zkwp1guCcmHP3aCSC2Ef9XmSwQ23usQALwdF5A3mpiNG7GR6AWebEiz2inMXkwm3Zkbbg3mgczHGLk4B79d8",
  "key3": "5cRUfVeGRDBH6Czn6H3yctUg24KqqNTfvFofKntM1QdrQjt1qAGMkW56J3ViTcsnz5aacPzNJuQse8qXw4XRTARK",
  "key4": "DbK2Fjw1ZVuSAFNZEQ1zdqq8mrXfLm9MCLtedKwg3uUXZiUSLisNjenLyuk3R85Xj8q3gZHB66Yeov9yGjVDDRA",
  "key5": "o4FnY9bM8k7Ysn2b9GbyMarqZZ6i7svvJsaSU4XuGP3216zJye5E63wHfQEV1hgMXAxfqSr6k9cGVjrTgbzWwKt",
  "key6": "wRG8VRMwrTKr4mRH7T5hEHhytJS7NyiYPNeT9xfE5omj46Vo4ts2Wvv6oSr7ZoapHu3KAyTVwynwthana938jHD",
  "key7": "4EpNsSJBGupnLNgJoLqwsyuJQuhNFQyGYGnZZ1gURri7Rf5mYQGY3ieDjycNt3Y2vVURGKsCKLXgQxfzpFa295Rx",
  "key8": "JUJZa1KdwyvrSxiprq5JrW4UFvD4c7xYCm3PmnTSRZcFhW7YiXd9Ts2UDUYPLkwSCYfb1P94W1QLnCLytdcJCAi",
  "key9": "41WHfhVJsHwANak27pJBbKaLXrWmhiU4eFkirVpBgnjmoJTJgEVYmgkFdY1C4r43iE1KJzjzJPdo2KwPZ6d5mv3c",
  "key10": "4e5QN5hGfu4UJUuvExhdSSrxAGpxRjz5rym2jiArapm7E7eHhn33WgS4hZfeZxaKGm7MxjRujcs5vd98VxFBhvx6",
  "key11": "5VijmvpfaqzX8Et9EKRjmrGosJSVWy2AEAFkk237GRAK292PBVcVdfkNA2THg3Ma1aYt9cFW1kJsaWjYaYZCuQHJ",
  "key12": "5ybhX2nrYtTNw6etuT7cty5HE7EcMPAbS3v7wzW8AF43QMF7WazaV717m8gULvcHdcPkXFc9zau2ZQjvYmbEbpoF",
  "key13": "2Qfk4ujmmGDh7TiYK5DjHeUoF3pfuD7EDqg4sKxLMZMKAFvw6g4JdjzsE5nyJZeYT43pfTDGEEvLvbKUb2kB4r3S",
  "key14": "248DR8BHAFjF4zggkjVysbNDsdwXdk2eYRBXro9KA4qVfmkWQeBKhqYy6bdrXQdZAkdbQnFt198VzQCKeQPqd6Pc",
  "key15": "2gPz9vWQFZuTbpuMiGzdq639wKCwGS5Ahe3XC85VZTT1KNJSvYyetVSZNjz5xWrF2ccZV94j7Xj4v9jquxpLBrci",
  "key16": "4p3MXj5Zc8FRbdiWZcRwMedvDpdJbafdJQiVKvvqt4TPw1aZ2Lpu5Fg3n76vDv2axvpUL3etgngx3eoobRZkXXuA",
  "key17": "4ep6cbdNCx1zWsJgzyYg1SG2u1MUkCjSgqcSHZTUyUUNzwfKm35GUjUMvNn6LWYdABQcjd1n7fmq4a6FV74JQe94",
  "key18": "5M22Rh4q6zPYmTkrAKudhDVN3hc3w3D2a2zj2YZVtXcy8cGzn4Q5LVRtSpDyXjnt86VQXR6tcK9aKnPVrzUbPRuA",
  "key19": "25YzN8FEMheKHppyXzhJK6fKFkqV1i7pazDCnykGbyRwDFVbyw87vev7tzt3HGPFe6YAswf54wExtSziNPNFk9sm",
  "key20": "5C55xQVYLvWYwnp1su4AuCHCib8EY6cyfYuiFwaj7o2zv9gQnAC84cKNpc1mS8ot19fJy4nuRLHys9it9n7a2qtp",
  "key21": "2fN1UQ8CwaoDEAYHPVTn1CgRhp6ciy9KXDmowNBTUZYeS31EWbKXVgSsM27i7fXVJj1ms7VpV4Ct2CiDc9iK47io",
  "key22": "5TSCAr1jHgQubiJo3gy6GubTHTPcc8LNYRTgdQFe5dsk8ZPzrs8ZVkdzMdUYSgL6nMbLTGbQfrAuXdV6qk8xFD7h",
  "key23": "2svZM5dBEy8NU6Jowzd3L9cwmJrf7hhBmLmJYJmH8i3qyyw35neYHNRVnLgUAqZmovkUhwr9nxdDAjv2p1dZtuN3",
  "key24": "45dA2MS5oLe7rvUDMgPquURHjLSYHiARNYEqJ7aF6w951QTTKwwZ2TAhqDNvNSMPAUfXrNJbipXWadHt8KNsN6hZ",
  "key25": "3HBPSaprmRFo6KQKKR4ABDvDTRu7uoZahK19EE3zKdPzp6omHTTS1Mb7ZNLvwG8PBtECitFMxqZ2PowA9uhHoUKx",
  "key26": "3bVWM1ftkQr4yRB93BGimycdibVJu5wi9Fbf5JqjJ3AMZw4YGdsPEvmJnTGJ4uwjyEwR6e6pNugiQ5fGsD88Gv7z",
  "key27": "3oJMATCN3kSXLoXjFEPE3otsGEpsHnboDrHQuDym7CmVZagDZ6FuhFKbTNw16wCEjkM1hcXaBFFYzVj2i98v2wVt",
  "key28": "2wqh292aSxbQLpfafg4N2X6pner5s2iguycctU4mTWqEBsNWkNaJ5pcb3fjui2K3J1MpqXW3LA6Qcn6jivMneJ57",
  "key29": "5xTm5oGabXskowsgCvngLYSuF6XWbnHn4tbmnK7s358y4acsWqaE3f9VLuxnRqtYzbTH5v1sFypV5evwMfb5wJat",
  "key30": "3GiyeqzA11Zca57W9Xn682NbtXX3TY6TXLSTgPg4DCEizFAUHqwLJcX2NVcU2MKrFUbPdDyZsxKn2RU3xZhxAVfz",
  "key31": "3R7pJKe8Sd6x9MYdtKt9po3oTDDLfHNZNLzYQB8hwZ9P4F3nZYjVwHSMggSmVhmL2jQKRFiZ9bHzwLTdpKH9tQNv"
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

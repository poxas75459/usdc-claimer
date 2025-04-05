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
    "CLQptG5utm4ERs7tgZoyZER28QkXN9k3QEzHvALEjhPQrn8YPjup8huQBZB7UjhLvPVHZS5b33L5gZwCoWcyGax"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ho7geG2ARCNJjQ418g9zZYVJBHWXp6r1xUvyD7mHewudFZ2pi1J9qg1n6C9w2AvpX7GwXw6juLLsyDksmTQmhdb",
  "key1": "45WS3FaMizBjpaStZZ9UD3Krch56L5GNRYNHUcA3HGzFKFNR1jnjJ3m6gfZh66YQ6kDWSr2tLktTFF9mYhkE6CxW",
  "key2": "3EyZ8eWytDtnEzoJZqzhBpkTmMJczUf2iSX7oT2ua9TggZAk7hw29iXcbxuqBr4RJomJYhgQyG7cCaAbEFyBz9rb",
  "key3": "5DLzzhpCC166ZZMpLYYhxNEzUu5GuPGco1Lgv35hFEdj9VEFYW8LTCCrjqAbE7vu5Z4NhnGfs9L11NJutNByHg2S",
  "key4": "2nAh26G28bsJRvQwgqTpALAdW1vDekcFxgLTemkT4HqLS362fhkrXW3YNyty6gpY2h6TkXSVCeLYv3YJ9VnADTLb",
  "key5": "u4qpjq5x7U456LSpvFCH2eo2MC88hPo2veH4Nv32TQTmNGNifZ5eVnkeqpTNgESCLnmq13Wxib8JDwWTRMdZ6fB",
  "key6": "rxzcPk6HWrz8vyDTGhZqVppWZF8EL7G6nG9kdo13MHdAZ3rw6PVpjDQm29zCcoAQ7oKBGdAGNrtYTGtakURcvRq",
  "key7": "5J1VH8QiEkVfvyZdmhTJ5KhxhDBE9TUwQqREqXzeBSUCjDstAaGGCeMVDZuRmfsgsKZ8UgW1HgAMq6kKYB7GQKAW",
  "key8": "5BZVm59mn5TX5RYadRoeMZKPPhyNf4QmUdkSWtPLB9oLMYPdN3Z6MJdoemTLhzr3TYV6JXLsxns1YcJs2fTMeDRW",
  "key9": "4efikN1BwuQbC5YPxeYcGkvXZh3xPMmy3pS43MjdQ1DKHUN1jPUAW9vZnN4RKSPJxobS9oWG3sQLUoi9JeHmSSeC",
  "key10": "ZYkBtaXEf2JSVibPXvwfehKeR1MpjDBS6veNbBHnX1jj1YUhGkqa2CFusC4cmbpP8qhZwZqHJAJE7AK9Ua3N41o",
  "key11": "2BJjKBtRTh8MB4tqF4iT7arxQbP2ePFsEPXnaVzw2VpFJWCDuNDAhxuf4U8LNCzUMZmPi6uvYWhCfuXHR4xyG4kA",
  "key12": "34bUiQBFBES4t3sfrwf8YbVjNVPte7rUa8qoxyjeb8taivUypQHrVzQLgPEcKdgzRDNbAoASCiyytrBLz7wf9wHJ",
  "key13": "3pocXMoLfCBTwQqLtF3uabrkCEq9DmzZherx9yAvDVgS3GGYUq24fYSHd7efHDNqZ1FeHRQcgEYNuSLqJxbySxzZ",
  "key14": "2LMwimK8XzTDwPMHnpjq5zKhxDFhFf7wTzVepcQFWoHJZPDyyqZUwXd6277o2fjwKDRAZ9w7fhBYDY9RBmXFiRYM",
  "key15": "2TTEn67YyisRkEYDRhWqyVAesdDnixFL3ctcfE6MnvFc8sw1VChVS9RuZZwHpZHysoDCxYAz1jEMPzx6ipQP1cif",
  "key16": "3KRzVuw9QrxgfcA2WQiZ7QuM21kV1iFgoCdajXmrFjWbc1VveukefCgx7tmx19BB9buoPn3aqfiRT8bBxkNgGvpB",
  "key17": "5ZnJuyJoZph4EwBXnnJPBFVkEDydMR1VJzsMinJNqGLWUAketoqFT5ASDwTnQVP45H5ghxgLzRQjPPT6sz4XzaVH",
  "key18": "18ahf45btX9p7LywERVkHawstcV6BP5AAiSFRbVhDcCjeSSgq47Jx3VPaX2kNBJUgxTrsfr45aNun24jLfTrvQy",
  "key19": "4UkqEbVfGPEgjxz91wmWZzQ2L9NmUeSWHuPAXNBTLkooGMsRAfPX22v5EaHYqtZfHeNDHkeSbqx16fFE3HFH83H8",
  "key20": "5Bvzv1qa6YFEuRHGGqDXoygdUA5i7esotKKjhgjzTTUxRQg3tFPGLWG1mfFhA6QoWfd9ZuStbwBAfWmakCsxwJyL",
  "key21": "3XNcmoUDneWEwSERqhw4dwhxUGndKALMqwNHcpZLgeXgAre1o8kX6pCTtDaz9dCoUSqdpra1BmpG971Rcv9zG7nv",
  "key22": "4eJKmcvUihW6i86VyiBCcTaZn9k9djBMAXREDKqc4i6Sr7LUeuFZAFCnJ8QgLdthot3WsjGUc7wTh3A8oVmsGrcV",
  "key23": "45QSdbDzpGx6gy1BwiH5Y1DjS4iPvfB1FTAwLSac1cq5xcWcLne4FonrQNadKdxjA9bmtCNVHKmLC9uq3oMMfnRw",
  "key24": "5AitbY2dgxYG65tfEdqCJkQDoLPQeJv4nqFxPvGA3Fpb7mAHhXVoUvQHdNKWr9nD3WevK7TKJyWH3cQsQcBg7uop",
  "key25": "pGMg26tRE2FFi252t1UMufxeEjgNk17HAMvbb8XsbYRvGYwowYzxt5hqjazYxgg4hS9q419CXbYzqcQv34stKrW",
  "key26": "4mEUknoLNno3cZi2rWQgEvqE5bXyjJJyBqJkfurtm8amGZ3v2G7LVxcZmxAr1ziGCfDLpp5pCN7o6hwCcwMQxBuG",
  "key27": "2WDBe9V7CzrLfWb9pFcha53nCaMEWeLCEtrFQtDTUP3ECcSR6gY7mYUVN38r5esxAvJJv3BsRSVu19zzJ7CdUwEv",
  "key28": "2jHst8VesPZiKSwgFMJQEvhgHDaDDkXCJbecBYTmKcy1q2YgM3gmCuiEXqPdJxPPQ3WFPtAUCUskzQ54r23gxPX3",
  "key29": "64AzkJEopvDGGFXePSPdzwZgw6Ayo87kT7MtdNAKgXDdrtwtsUQVS5d51KGtB7ZL5CTGRkomSzYJQTSqnHBMq2m4",
  "key30": "4fj5ZyWcsuNopTWdhSmZWad5fkek9GsjAn16yJrJMhJBDnVBh2MJuqqBNp6tNPqBpJASJXTk4T2p2Ea2devXUQvp",
  "key31": "4YQWUwWrGDETXPiTcoiwJrWLfKs6xvcnRS8YPQ5jtqVDhfHXKTtXRJ4QXXNDn5eJAAXzncn9i3oRZ9moSQo2LUH6",
  "key32": "4nBEkeY2LebhmwVmzqNhxxCuTRRZaZGdXSbY8gRZDWGcNtGp9kgGU8EW66KMUYq8T5kEmKJHu4ne2879dgB7ysni",
  "key33": "4EgwRPBWWHbqPGngsr5FEgyUqAjTjZXe3pX6T3uc83V32CmnmJZzqgPew65TT4oJkfYmCa5uG3nZLRzDzyme78NG",
  "key34": "56YwiwkK8Vm22WZgS3hXssHnMCX9ukwmfaMQjKpsc5MxehYLBCtNfepC6GZv6qX8m1fNUUFqnRfy3jxzFuoYsADD",
  "key35": "3mqYXH9XBV67zHyvXf3n8wR3T25NEQHVr7cudaAzwJopt8Sb6C9TghGgWqSW2xghvPZtEMwUqnFeGvZwxopmw9u5",
  "key36": "5PVyY9PYxkKFdBWV2L9CCYZQt7swTfP4vjsHDsTht9KQA18CywREb8LMiLdgktauyWDvojVpCbLq4VAKosHBoRVU",
  "key37": "63wsiPAErxVUSXjKE2q2NBzS3xPyBenw4zPbHyjFqKBthWKAefqqThucTwkskeprsuRoJYV355eAUC4dTZagk6xJ",
  "key38": "4Uvyq7f4ax66qnhnEJ7bgiCUa114DhgQRGcMTtmqxkcGjHMiMn4E6KNk5ddvrFPKMBRNeQAjwS8CQsAW5HMU2RLZ",
  "key39": "3idnTQku89dzgyrhGo1uEsCMa8GWpcNnmdP13FFg7Z1izouxT1D7uqFoKVXuvRd959gV37uwSGu9Q1KZ5MpcDF2D",
  "key40": "5tZFJ578Q21tuJUAfktXTuzTPnxwC4wAhcY5J5vqanUC9FPSu2FgWQo31FbjKhntH8RxZMN2cxgbxZSVKoSxGvwP",
  "key41": "4dkQESg7EmpxKkCXfkPLu6sXgerfSuKykND7PJriSQnCLv3zCZN5xDuJTxxebF6LCmtaoudPYjUKKzQrsnqKGm66",
  "key42": "3h2ZshA183cgnhNt9XhABZNSzXjaKuXNKYPDhvTJvonwrhchnfT4SbSEB6hxq2SFdmyNvAfKkCRR2WjD2xuyzMdL"
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

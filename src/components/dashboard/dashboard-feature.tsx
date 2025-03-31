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
    "3ydce3minaMu9Uvm7Rb7jaCr3fVJTttLEofXVNsmL2U41ky4NCWdSr5ZVpinyCXSrnmDePt198y7VPLJxTbqWxxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33VY6PAg6ex66vXH7F36fe5MCtLECxxPAVP89VHucB5geq82zqXmK7GBDpZoraRDP3QPGXAKrL3R9iqVmVf95c1T",
  "key1": "4Syv2tHkU4b7A3sNoGJepFw1tyUchxQ8kyZo49ZcZDscWEnuaUmZpUY2imW6343kfPDrMaEdM2oKg8pavL7YGeSj",
  "key2": "NrPSGYa5PaS459fsqEYT4Vhc2oQxMv6DgizZnWLYmqp11S2krXiCTxc4m1j1iF2hofcD9PSJQ211C7suASgyDfo",
  "key3": "5BtoJSqmvfW33qhghhXWi1jeBkjBqyWPPJXnaunRi33aWmymDBANkwJEPrbaboyoaGAE6fG9imMx7EcBUgqPNt5C",
  "key4": "5mmrumEhocunomxuaNbZ5R9QPCqP1uwu6RHDFSces1X5cq2TXVjBxWxKLZXE7B5wcBTZDK9ghddSwa3inv5awQiK",
  "key5": "3CeFE5ZxfYCrFEJzpjjF2G8qGDEv9i8nAudnbd3oHR1qK1mK5d86ocqPRU2nX9diLbL833hnrxQ9EH7hK5GiRiDE",
  "key6": "nHfKEoCYLn1oXEZCxrAxgvT6e2craMjeyKzBFFSX71oP6romtDThuWk839qQpVx1CGP2UxF1VJt3zqP6xGvo6ey",
  "key7": "3S64QZnzvzwzNDmAcCdu6RVd4xviDyYHiX3G5B22EryXSfP6nhAKSh6XMQtvFYN89EQE4mF5MutMXrMXaCpPJeNG",
  "key8": "3WNMRqHGgRfyVixJHrDR6L3H5Px3FyFav9NXeKKTQ3Uz2CodsrRChDAeqCqwPKXakD1HEWziYRYY9sCjLYPL5Pr2",
  "key9": "435nU812QyGB5WRChcjdjxXqCPMdWX4PecDtmyBq3kxvvso6V9D9Rsc1ePECm6bDJ8s6BtkCBKxRwPBSDYP6h54K",
  "key10": "5diNshsPx8dLqyBgRPf4sQbGSMnTu2ZpzVhdg73vCV536LCZvUSNio6TFCmWDqPT6JpkvEwpdbZjFbSYAvVKxoht",
  "key11": "zcDbNAg85NGZPb4YWFzbL1GBDcojh2tn1bWsYtPuJdeVM7bj83su83HnJRttddwQuqYqGq92hRQQTFLEZ9VSpfj",
  "key12": "2ZpHxA9EjPmsSnCX9332jrB8h4B4oAudZG1TyxVpD7wM3Aq23pH48dETZc5HpuaT7eL4hxELN3QfPFSuCmNu3bCZ",
  "key13": "2yeAuc3L6X9627mHp7PuxCsxwMKEkC9a9WffJcDjAUufeTo5WXy3wgR3UwV9LnAGuTh52T84VzZSn8HcUkMHvPcZ",
  "key14": "5xrKHPKNkg8ZABypVK5FgtzYgLqLhQct8qhNir8HRWXEMa2nuNY53WbTFckYsT8VFyDrE2Mowe4m4z1EssFX68fd",
  "key15": "2pzL6YLSY5j8TpyFvsxqe3nRVBpuMQvVESr2hpGPzVRupSMS9g6S8FWe7N9883uqWjHntC79SPvDVVqDvV3ugsc6",
  "key16": "gtgVkn2yfMgTWpwxPwAzaCNyZj6kEzC4oyEwtFAXyVZeAxP2ZuFNbonviCrpA3eWEhuMoVAjtMZsmj8tnQ2ZnuP",
  "key17": "3sGgMUYdNZpPMViFfFYBUuCsKWYaXA12pLCAaJHWvuBXVuUyMwZTU92GBFj9cEMTBTNDjpVH57Q2xGkZxtod8YU2",
  "key18": "36JuQA2bDQoz6z5e5PxBJpK9J9T7fYJVMohyRP3pwVrKYfCWXFXMXsn9KCLJViCL2i3xMJS4UxQ7PMe4mtERSGgK",
  "key19": "w6jBthnbGsGDwjDMyJ5Mc2JsqUVxVH7KBCu5JGuYZcAu75GdJsigbSE2KpEBuSraRAfoW67tq6QDnWoMkninJp9",
  "key20": "4jax3mTcu3ZtJYwvGkVCtfPfM7okVtWtGtkbDvDBrdgAnomcpdVGz94z79xwTsSVp5uS3NXvWrwmdBn3zshsmsKt",
  "key21": "4JGkgVM9r37HKKGPiti5J9YkFzy1EFwBnAQqRJYweNiKTnvkBaEwo15HpVB9pHg3QPeQDikGCwNax62R1NNouCTi",
  "key22": "4jzD13FWqk7DSUE5YtMrx7BnxzH2K8qdmEupZtZ6jbAZsokXPX3QYaR1k8isxFtjhZxeiwB1gskwnwNJto7kN8Gy",
  "key23": "3LL8qm81ACi74dPTnM5igDsR1BHqi3sio46nhPLfijGA2iXv8kv1NVHeyYUCXbhvitKvFHVf5t1nUDp1y4BVjDm5",
  "key24": "2cGBjunN9Yhwg7mutuYQDAEyb1r1NCvUmzro8CYQJdwgUHybrVbpCoEMQ8tzczJHmWkWDjv2bwAywsavTaxMs7jK",
  "key25": "26wNXJ6vJiqHdDYFjRR4pzqqQPKgQEKnGj4SNpDJJ6bpCGdhNXzPLhppPWWz3kAVYhKoaFe5rMoDBh9yj8KLZ1Sk",
  "key26": "2dCEVqCQohQKB5QfvujVaLiUiG93uXoP9mgkiTFqo4HYRyyaJvqXG4FUxbhUrNVEWvQeP2wryWgeEHywBExgku9d",
  "key27": "4XX3jReTgGkd5zkJDBQZXgVLnR1Bs9TRdNdvnmt8snipUhzZ2eLCjZVmnXJFi6fk8kL64Gvtxi6AWQpoPpVMEiSk",
  "key28": "cULkLakAWGFzSJTUWwsdygFytPrHNN1D1r45PKo4fP3iWATsHXT5ahSW5sz6jzmeCCcbWZVoL3mqTkVa8W9RZYu"
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

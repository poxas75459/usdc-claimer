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
    "5syrdgu5VuuywhjRKQ76mAdepwNWBNRnpkzhis5tJMDoeSQzXECsNyZpUgQMQTNTg8od15YkxxGiDiWUNypAoCUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TxzBafba1rMUXKtr2o6KLKadUDRnv844WEJgUZxzyFv8TsuuPg27QHefm66eLu3FASEY1Ljpr8vE87FXWqHHfie",
  "key1": "3Mq6vuJsh4wniSrckHBobumigaCUhmsXRDUoy1RFZs2v9Z8p3t5uGhLAN5U3MxYYm5uzYYC1M5wNCc42PjY4azQJ",
  "key2": "y9h1L8QYaBoPC9F9SvfeLsmjRGWU7ij4aJxwBm7hronHzpN42zEguDbAWw6aFwmYTiNdj9tCFfU6qxUa9iCwrpS",
  "key3": "2RHXBYEJTpfWBLnR56i4Du1YyY9CHMyCG2hPwrnvJbWpArJ3pajWM4Eeh57qcxEmjdiPayZNEcXbyftXdsnBkmsq",
  "key4": "5tc4Hm13X9amFKpMUynCVArbeNYhsF6WXAK2UY9QKDTqoyRCLGbCoh7ZwV3fmFvP46BNM9brmb8QgSpRX67tGbLW",
  "key5": "4rywJ2n6sbTq4oUEyN1cEoPqW9hVJZ2g9oWtB1w99S8fyh3aHfisvgcgPkyKi16j2qCGHfyTWkrgPM7PwyQydi7w",
  "key6": "3jL1fHuEBxKwnebmgXfo5gWtYqvNT3ujizUwxvuCQU1AKCMvPyBV5DEPFeXKCsTjAXMgXyXqxdYTpgwsQ5EEjvSo",
  "key7": "2R2gnDyWv1m1pxdvkXhVykwYwx8DNQEcCmnoZJwjvztDBHALfNwVdvwwwG3UEbtFyK78dLQvbySU8PzowLmaGQZV",
  "key8": "4Dc42TxCxJj4ndRyGDnu1jVmRwqRXaUYxyKMVUi7hsm8Wzs9QXPSs2ZhJSGgEZFt3gnYVuHXqn75jCSdCpi5zrMn",
  "key9": "63A9vD5R31dnoDNAs6HHSLXA8sUZLyGkRyamstwVp1qHj8aqMyd5a4k8XT5UD6jVdHtV6pWs7hRhtu1oUvtzVVbc",
  "key10": "4yhdN8BC7SN9k46138WN3dQS6EaAhgd2Dm2qYLsypUriRXDkfHV5MoUz1g1Bd4SDW9SfoWz2rW1cYg75Yr7DWFTz",
  "key11": "3iKCHQwHvQba5kmrnyT55ooHiy1ECnrsPixuD5wSTSvxrRoo1pddzaaLZtSXVoAAKcejs49YRhMDtfzbRmcb5vek",
  "key12": "4e9q6DDq732uMD7v7fMQwoHRcg1mEVQPqb7jCGJtvVDt2qH4DeAgw62EtGHKPukTeNGhqejPDWGQNsYG4AVjqZQz",
  "key13": "EEdX1S1KSSBdoY9fTp8Ups9UcVNWriNhKbrJbGk4NxZaaUbDFeWSKs9cQ6c4xJR58X8CFsQJN3UF7WRF9vW6oKy",
  "key14": "3AruRciMhQE3qTGgYs9VHNVmEE85qj2rQTYgyW9MNnG7KX5SHzWqzyQJdxwo9TghPGrfvdDfhFpyQshJ5dHumXGo",
  "key15": "2ZEtX9u52zDcBz2fiEPpMUUsGU32WgA4Ww4gT36boFVzyaDB2ASHeZ8XoJMvVxM64NT9QxGhMGCaGFtDj6rb3aLX",
  "key16": "2vEwJRQEpj6sZr2Tauk9dJSNvcGt1T19k16K2G28P4S7aWSFkmH1GHXQPwMqrDoLfzeQz8bD1E1scMWudEQfx5Zo",
  "key17": "5iWwrSKtGojvfS3g9yve7PepHVKt1XdaqcWRCsfDLqKfweRTsDo7QxvpVWrFLKC85w52ktCPLzqeWp2vwGQPr1fV",
  "key18": "33aGHMFJkjy7x287M6oVfmNQQSu5UTjvQ5PMPFWN6mFUPdYqwHez1rSSaXTDZs4sPjcW7xfHKAo9b8GoDinfKZrr",
  "key19": "4dzS2cZ8pEfbytYFPQFvFDWPsQG1ETdyQ2k8hac9FbpePr5ENJjCFHsePBHoWwonRFRpwWD7be84Q7W1SkQaCZvL",
  "key20": "Tad8tet2yh3aMUkHerq82wwCPPSSEdgiTV7NQUvP32RJmqmznuAkEKf9uiyNrddcu8DENgYnH4BagbtG7siPtZ2",
  "key21": "3guPpxNrEDJ3iA85Rs6btLKozPhcvpZSsbz7tZhrUBy3ZiT37QLrvPJDEJBXAXEP6YZ3C46AqyooHWov6x5Z7SnY",
  "key22": "128yKdDZUamDm9iqoxr2uwktKFsQ8wshNyQu3q5wfw9pJY6m4DrTSvCB9bX2g6iMHZLRuvtZtqDHwmQAYgpGySJ3",
  "key23": "2s6ReNJeGqyhcCLFe4Cj3bqXr8zLkfahP1PbiivZH2SyqB8Pz6RvGyzNwV2TCZHYaSdRcmBGszTtPHmL3mmr3QK8",
  "key24": "NmkDP3feKo4K84DxJp4sjEAXUSdbHhKbxm3VtQtRLaHXJZaGWiYyJwvvb7chbWx76ehxWsD4TscyvuXzhHZtZpz",
  "key25": "57bxaKUkinZutCwKt2t42bT2XmK4Bso4TZ6cmwAxeXuZbJoXV1ieAh8FZrQMSdTzY8Ds9ytqEwnSK5gmcbXZg6mg",
  "key26": "5mXhA7LkMJ5raeZaU48RFtGSBNfEAD9bCtvAmHgmgN7Q7fs1tMzwZxVRDsPtZHTC9RYvuzmYxToyhpcLWsurBDzD",
  "key27": "3f4XPAkCA3F1vPHD3zpBDm7AXiyDXkCTcjngtv84985Fq7qYgzGu7HbKydbBDRmmieRo4uh1QKRwreAMFkDgZNDR",
  "key28": "2MqecdpJowFnS1bRXNKb6t2h6fyYuFntmTr8hy6EZQzuwiLeEpKeojj5JVKu9DpxcEaoCNuMyjMaKiMyLqWkMXA9",
  "key29": "5RmqF5sejJ6Ua7Ugtu7tMFNTiToh8VzoHYYzwnqM2SK7YUdVh99yP6So2UGtSjLkVRjp2MkMMQHQxnLbCctNemfV",
  "key30": "3V6DFSsenqZbg8H3wdqUREEZY7SDyu6DsaZEhnd1VZtLYjT2v8EMPuR76j538Edqv6HhU3fDgtH2ZGQ4evQMXmmq",
  "key31": "381xL1x4iuWs5gHfr2jsmPMokUBVvNvBUp1gGAweTKjPxFMTUy7U9qvBT6Y19XTu2DRVvpQNLTW4oKA7jLbg1Tjw",
  "key32": "35PFALjt7rsQYLFwmPtQimi4ApJswTo4UQ5wytVydyq4wxFJHddjHcn8onfyBjiEoRNGtJDjHf16DAMVn5wTRri",
  "key33": "5cpBx6hA4nkJwGHi4uasQHbo6EBn84efniMfQhvwstZ4erUweZRWAgtT46gQoP6ww9MAtFcm5JRZoimp5dww5b6n",
  "key34": "5uJNKHMsycRUy7fgM6uZ87kRDiymQx361eU3jWCBbNKByZXEJ1jNYybh4UB3mEKpgBQCRejk733WJXcvci5rNGc6",
  "key35": "5GvxA3idqtxZAEY3XsBXtuMWNSvXe9kohF55m9MxTAeGqh4JDVFJbcbA7mH5MTjHwbfEQ38nt3QgmHaYePeNezDb",
  "key36": "5MdJ3QeG1G1LQkixrV17nqhW4inzh6QY7iMqkAjYSZZxhbRdNgL2jTVJj8XsHZPoURN8wBAdrRU22tgW11amhwQG",
  "key37": "4q8WoBzrhfR3euucPZRyqTxyKjfKMLLgFSGG491uCVD7XBnKYVbTAdoD8P4eKpBDgWUkCqUPtpKS6af6NeSP5dLf",
  "key38": "3GNnn4VctUmnwtLmzsirkg5D9i3L81FCbJUyZYoZJfh9pGLwz2BuDmzbDM5onQBVAs5TKJNcxHAkasrKyei3SEZ8",
  "key39": "wNk4CELDqe4KLovhzzZy24EJL27R1Qv9aCoZ96djWZ58Sx43iZoXSiuWRxtfnGhgccybMKCdck5DbsBRZ156cV5",
  "key40": "52tkEzG3PGnkzRCWt6QRY4HuKCs4fVUdFSYjJFpmxkZLkUGWtV24JArUNuNreFeC7HgV8tJHxNtzSRQ9eQFYrsbz",
  "key41": "2TuHySDWZwzXdtk3Ps4BwycDDeua11FMJhAsboRF1P3YF8nLq6UkpsQzsmH2bGHNghpqsMCoPMR5aiKzpBfwdzAc",
  "key42": "2ULZYNNkEkMvG2Mjzppzfp35WNH3oANQYUm8Cyh66JM2zVSYGhAXA1eyPghfJTPcSXPCqhW3p8sJwuXGueuyfZCk"
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

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
    "5tCmhXyHENdFJjZfpQvt5UtVjDyKZt6WPkYBrPByLVeaMRjtHn1PF2LRHS2ErtQSn39WD3kmmFFSjcjiLwCvmALg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mGCiK2mXcHmu4o9XPnbgafwrJveKKsGm1s9vQxJdWgqJecG9bCX3z6WGnQkzMwac78oPEseFvBqBoVykhgYcof8",
  "key1": "29s56hxhbVRx8HpqFDSkZLFnTS8S6Lv7etnjPtNbXygKoLNwMFiNx7MgokX5dqzDVwLwhMrgamqCL2Ssx9GcptQa",
  "key2": "MJ8CnWNHYfX79xJyzBaESFUZdKdbEQjb4SQ4YNqEgneGxApEbCCyCkAsmzsJK3L5HofJsjSeV3YdWuVPLJ79ZhF",
  "key3": "cs7zy2FWwj6LdMiwEZpAPfagBaB2GEmHsJrKxtZsHMr47Gabndk8DsRKj79ZXhmbrwe5jR1TpSkpr62EYTbtAQb",
  "key4": "59nK7ZNyJ7nDLNs4vM9xEWqBLc3AXz5mU33fTKvBsjc42Fc45zZWkM2a6TmtJB8zptwaFqzEz2ipTw6Q4RxQY91",
  "key5": "4qQvC8qFXHiwoYcAcxHJADvxmaj6Lf6814EqWCvWNoKesXsyDZpYSD62a7WiQ9Nmtxbmjomu9cK9mtFViDfkycZQ",
  "key6": "4iiBZPbsFcVzyT4sa4JCqjfp37oMYsPRaFHywEdXnKJyzqsRZXj7KMPzAgX6z93q1sYb5yZtSMS7j9CCdz7uTg6F",
  "key7": "5jvk42MgX2vfWbtEFJRv33SBWz5to6StBKBbNeAkEJTGe1vAU1Auiz151CFMpiBJk3YwtSgZrkNcy6zU5it4Dg3C",
  "key8": "dU5gX8SGne3W7Q27X5LJ7AzNZs1fc51pZSP19F2SyBrNfk12AoPtMksvnnejNFw79siJamvKQ26MvSompr1LeFK",
  "key9": "5bCeHepDzH9xA1jNJoi8UcHVPM8fEk5orZaw8A1d7cUXBz6jYxJBXHFvHyXM7foSdBEtAHBVjHXwJ8Q9SBxDkkSk",
  "key10": "cb2xSKLDYnZi9WEbeiNAy2h6z1WdSq47wD743LM4ppYwHkzV5fuXTzR4Tx8gSrHt6TBEciDP2mKxHuUVpQ2yh3p",
  "key11": "5bPxELuSyahHKNjPkUCid33cAKYTFwYL59gWEZMLSFbdRXAZo1QjH3ndd4qjZU5HfCqqBULnwxaxGBrCLv8NbfJ8",
  "key12": "2cM1dng3uD5ziXeH9mpgxZQDmFxjcNqeVB2KfmoFu5jQVmRhgWXQear4ChoCCAjuekz4ZawRT1g6dDRLbAvnTkRF",
  "key13": "41YMZwViJfBQjUbDhydM8iYJ7x4Sq2AyfjunDM2NKb7T9VLVBJ2qPxdYMiknQpn1LXJkr5JaegcDgeQwhfYo1cBk",
  "key14": "4qJCHm5Zrp2PWfwQLqD7dRn6w6KYQmyw14UuC1Rum9TNH1LMtEQVEc4zdBRAcfqKkMKWbFZju6tUwVoCNNkdiX3D",
  "key15": "53MFEVPWpupDNDuQg7D5GkC9jiBfLrDhfE5ngnuGJW5dB6UQgQbTXiH1njAWGwaYQ7uuhhPHd9iWCL5LiSiMewBb",
  "key16": "4eEQcNjaKD7unqnGyvgpCL362bsWSZjawhF6ctNwyyZZzLfbGvg2FkSPjMJekMRpp5FYssLqTWQT3MuNzZrppfP8",
  "key17": "43mL2iW9csgkWbfMAPn3nA2mwLAUBQZvszTQFvyTPa7JYQUGRrNccixAu7FMGZpEYVHd6KhGJVosmuPc8HESTGKb",
  "key18": "3S9K21CDWZbYRRa5kMqnjB3jATWY5Pk9esRzCZpf8CM4ZE4pu8gANYjhpZAx8RLmZYCxsNG77WThc96Jxgnyok8F",
  "key19": "3wQFKzat7YetxLjMEgJaJaH6Tb99EEBdhdFxL13PcPcMqGSWE1STjxP1WXcTvhCbw6iALMUgdgCHpj6zfGAFyNtd",
  "key20": "2YQHqNF6hyVLS1fDaPhg7aFomg4XPasT1WMn7q1TmmLx5hgKyPgejBNfS3kS3NfJ6QURBKdi5L4KR8ecDLLFTuTo",
  "key21": "3Xg9heSSQvf81tKn7NioWFj2KxvCWZwFCUppoTUQ79TnzfdbUTo6uJw5ddwg1SiBpDx1JfXRdWfumY7r5vqGocei",
  "key22": "2DFYWd4BUXjHsoWCzryLMrzdi27iu7ySk8D13HxzrT4H9GZ5gk4g4LrrJAnAnzvXvGFbTCqxTJP62jdoDg8YLkBj",
  "key23": "khyLLnERgxmgkqDpL5fyDXYJ37WNKX249TGXrRjGCCCMWJEgnqezVykuE5DanbxvrZ9QFH42w2xRWAUj3QUxSYR",
  "key24": "tiejoZvKfp7Ys6HVaapWTz6nhbZ4QW5fqNydZk43NufE88YD3W7mW4ST6zwiXuvQEa6Tm6DGfmtpvFv7HNafxha",
  "key25": "2tYt3C5HYPvyqV6ucPvBYSMPnz72bFr6AHMTXQ9cVrVaMtZ7KtARh9VRCpetfxp2iEvUkYAz91ByZUoeQ93qmCqp",
  "key26": "47cbPmT5AbiyrTkZpv22D3mkCty8JtucWD3xJguf1eTqDtTpyWzHDYeBhwZRsr4hnQzConDikhaqwUcUzPq9YAGo",
  "key27": "36FhrrYgUPaeMrGsgN3ocdwy4sRqZmKLTGWxE2i77fwanN9vhYwjAte7fu844muBkqJLb9BgMabafvi1wx2utGNH",
  "key28": "5hAfAZyRw1bud8Y7uhBWo7g9FKRGvqanztXsowuZhHDgXNRaJmCpNYGpuRnZAx2ED9GHBTX8iH9L2auUBMamiRB2",
  "key29": "2sPVTvqbP4LRgyUnYYZtbG3ShmTy3Kfv8qtXa96y7epdkdqUPGfZ42VkbavXtFpqMsg3SUP3HqrvNXMyG8K5MzPx",
  "key30": "33pe7oNiH5CFY9cnLLz2Q4fjZ3y9CRcbBVwMzcjSEr9j3XKu8LFbJcH1ehNAGmJFVkRwPHrioRn7CKdXm3B7rNJr",
  "key31": "3WGLJm4PEoMGEwrcjcQVb8wDBpTmmPwwMKDuZiVceq5mGAxPjyjcmCFJfdN5VpJak54fFqaSsVy8WPwThbiKvx2j",
  "key32": "2ai4Tv2NAKXNoTeNsHbvr97LhPuMrqB5jK3MW1KZ1r8tUX2so38dcUju1JrRDXcHsxKbscePDHEVPoMc6492tYTC",
  "key33": "2zusvkcrmPehrTaF8hohFTAaHx3htXtqyntqd1LgBXAUP1f74J2NFSxCNZJjaijUTNf4qtaksSH1URWgpGYVuZte",
  "key34": "5DKFGW8Sw7WVvYkjme9QH8tiVXjGqkPcnR42YDAyg6efXr4DRiCKpuKZXfM2vWVAXsSiTLcPFrEyHJC2eMiYLLND",
  "key35": "m5PLHPARf9xP79483tuK2XUTTYt5U2RFHBuMrKDA3z1puJ5eqjb3x1eobZiWTRqW5xj24KmQR9EHjXxWQHCQiQq",
  "key36": "642Cz2VDD8UJRWuws2yFXyWivb6BaDQx7TX23gCWGanMVC1aYb78VaM5ZBdhUENWRdJ4YzpfhcU8YNGapuizpnpF",
  "key37": "E9nL59sCRzUT7yNW5rXUDKD2FubDgyVpcqc4NNNUvVLzzz1scfq3kfb6rSSrhniezyz4iWbEYHndnNc1iyTWM8d",
  "key38": "pqbhrNf4LLLNKuv1G4ToHxxbQEEADjizrs1DnJoJwh8Dn2RvsU9igaP82cgK9vocH595bADrXJZjJ4s8wk8pmSh",
  "key39": "FHL5VqTitsG1CUVVqS8oiMqFMywLVYRcHsKxqpE5FcZEL8hibeHgDyouPdgoRShY4q4FU4PquVtom8cduHuVnsv",
  "key40": "4VtA7bH3cYB1gvXt8mJbKaQ8L8gAZL9gyunkJBR1CZGiwJumUQvgLDcu5Z8888iJNv5UEYAUfuKdsfheBHZDzRCo"
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

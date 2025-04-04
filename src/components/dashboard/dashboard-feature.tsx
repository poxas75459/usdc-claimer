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
    "4wpYxJe3fTMw8YTo84iPmRuYFqQBQdMvYaVzBZKZeLALm7BoqatGcbipAzrH4fCcy8162JhKjJ5QHKFpvHmkSkEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qkj7DtaT5YvzN3DJghrFFNp7XwbBmnfHiRu1uwsLeAuGiaYTcmDnp7xUHN7rhkzTMmFzhqXdXfvWUL1CJ2wXaED",
  "key1": "5UK16rHkoKnRH45KNrSerAeud1k6Gf65KmN1T1M2MsYpmS25z6u4BTnqNuKHxAzfy32tJkTnetFX1a6RUsvM3bhn",
  "key2": "3XxqVpdDCNDxdzaTnJ58v56vpm1YQPZXbb2Ds5miWGcTp7BViYnUHSX98qCJNaMMF89KrTUuoKprqpr85s3rC2WT",
  "key3": "4BEAP85VQqEcTgPwiN5WTJqmqRu93z4abYidymsk843z7yhrRzPAR8yFddui7ozTgFNdyF8ZZ9V5tXwTPVYijPkh",
  "key4": "3EtMFuCLqzvc8XYdv2AS9KaPqXCn5Mmjrnb8rGDEMbxkmviXcPuRiUTx6ESPdybecttMcbPVSZRwTJEX1YNMUYKi",
  "key5": "3uMSsnrMArr5c3k7wD4KwuW6m7ZzJHW7vhJBpY7uM5SHZBgS3BNQPcC1bRxAs1WcDQxvs7bH9V1QoNFFw6tndcYr",
  "key6": "GYV873Lyw9E4fzcJvA5vYjDx5QMFGhNy5t4Hs6SzR4HkV8SaSFGx6Z5qBdBGqgGwxHQYNnKZAqrKKrx8YQF7pFt",
  "key7": "2Wc8JYgp4sZGS2q9sfJxv812MFSXzNC579BkzsQd7F6Ew62yQ1HkAp675KvikLEbrZWT9Sgi7E4hNvarV748N3aD",
  "key8": "MZ52kdEcbNKpmZMkaKB159D95vBVM18NEWRwQUVSsPbUMyh7ybrwVzfYDCKFT6XwmZjXjym1DqUF3BwFgCfUYiv",
  "key9": "4WqXyBGjK86quG4k4KYYZArRUtwo6VK47jBxUQP3VxNpLH2u7HtYeHPHubJKRbB6aGPAmmLNaj6ftRtNXyxK8jQA",
  "key10": "4xaovRja6bWuBC9nGwybix5CXRK8yEzoVQ5Yvc5YpBZnNooiSQg4dQhjTjSGCiJ2pdfyLiUQ6zXKLPR7cuqAHjgw",
  "key11": "4GdQwvsgghZYaw29CtcAerfJZZf5TbxupKWwsJSGUdKrUpSmVobDGtGEPZWF4wYoHQpdoD168phaywVX9kUS5SgW",
  "key12": "47764rJsoKUKSZpfu2rKuxsZZ8Du2d1jVKNFMZ9gJHgHczLQhbFhWtH2otUSazfnEhfZtgmX1qoVBrjpjKTH2nav",
  "key13": "2UxpMKEpDJpifiwcrqjZN6KgCcNdyJXLjAnEzKu7qMGN6BeFNM3jtxoGzn2cQuTHuBe1GK7J1shduVE1AxYgFUE9",
  "key14": "48GTrYRU5GS892XRfwsNttq8hMHvfszVnHsuoeuxXns6GwweXRDLdfbYQUsZxZdh7KZvs7ZtTWx8Lyz9Mogp37an",
  "key15": "1aKKtESMqZN4YH7f6fPjgkpWPMEb1dGKXNW36chRV3mpoWoU53GnRtm6BRG1CNUKrNyxQjLUhYJiTKs5JtCt12P",
  "key16": "4bK54kq27ELoMiM9JxZSwjbLYhwgnwgasQmTaBzWK6pkH6kHYVR5L3WUUE5u3Z7bRfo8ZxrqTuWVKRccZNtnUMXJ",
  "key17": "THkG91mXHZHx8DPHp9jaTUYznhVEXaPhn2HV73LgpNFdp8MaH2m1UXXf4bLMTUPxXhLkKgBszjx21bwz6pcPxbx",
  "key18": "XrQ4gSxoJU2A2Jz3P2iM8L86TjhjDE83yXfK1hF9NMdwXW2fNxUAcQNbMbE2Mthft9i2Yv1e26TMJWrFQvRaBvr",
  "key19": "4rtbQp7RRyjVHNYN4UMUfo1iCYohzAAi7TC3mQ7X5R3x4ieQD1YQYGCLQNMz4em5epJnvTvt6wAiHYhUjn32W9fb",
  "key20": "3eHAJPkbTfKdagnbNDMaUNqXzdb6yKLsr56gFUSyH73zzPjcTWC8p1BDmp2h4PYN9avWkFLzZQ2MsvX8U78h7TkZ",
  "key21": "3VYAtTzsuv8hrC6pvcAmEdcgDkRX6nXJSzAkuBj1qUBga2dPskxnkzuiN3RjSsT2ijSugzwagx3xHvFieTPCr1fP",
  "key22": "5PDoZYtt2QLdnAf2n29z5pLh7Nj3AgxGePRVWR5LDp8B7qNtiTXFtPb2DcHpCAhpsY4gYCceCiQY6rejUqpB82yG",
  "key23": "5EXBwxq4NZ4wCiM2h6mUmBGjXXZBhExH6hamPq5rt4mFuMvRijnxkjJFrtwMGXMh6JSgEpeMX8PPu84Sgoa3Se3o",
  "key24": "3DnAqDAzJyAsHsdqdcum9SrbHfT1YQ6CPE5NavLb7rJHj3nC73jYSEdRBxd6rrgKKUatftQUQ16F3zByuEwLUb1v",
  "key25": "2LsFfGa6xqQ9bNRNnANTS1Pcxsf5KjbwBhMt8Y9YDPcLz8xKXSZKCtraz6ebHX1u88hfMx8v3ZJrBRMNUGnyqcRi",
  "key26": "8725QVtoRnqsY2jSGzzjzytsuEoNmEA4SuxpyHq5QuxS1cjNimMNXetGfy2aWe3q7h9T1LLU97JHJLAA51wvvUA",
  "key27": "3gFA22UCk8iG4psAGMjrmufuYAgkM2Ju3cegV7eEtJ4tTHZ1poaiBmWTbbUD4qq5TsimoPG3uvsCQARYZE24QH81",
  "key28": "2gN5orYakkp9yCVHw5kGf1bBfp4rTNECyqi2UnqtheCvdtuoVZJNNFk5tE2T6BFZF1gJmfQnTXynvUqwF3kv1dHs",
  "key29": "45cq4SubEUcRCKrF5YNB2juEF379qJeaa1YyhkwvRfHvhoHHwuzMNDwDzjLVLaKxBQoCH4577F3cFVrBmpD4rEPg",
  "key30": "4wzq4ZNRRym2KG9MXc7nzU6NuCcoduwKpFDZfN8FLdCRCvzGxjnvRQp6x9LJjDFUeogXgY19g9KAkDFEctFzG4N",
  "key31": "3kSgdmDXqE2j6Goo5rF4Ja2wQuFuSaym2RyvoLdCCDss7ECxFzydUBuHoqzjW29n2ozzxY2NpggmV1dKHpWPnZcH",
  "key32": "4Skdk6NesBcyy2Zv2jfRwruGBFY7Uk1mbg2NMXmiMSLMckRU2Y4sNWoKg7vzKFbXiYKufZKguk85SUDdBDzD6HsD",
  "key33": "4AZwvsNmWwfoaGdkqpc1nctzQCSVcfKND17vt1eS1mcxwHo8PQ5xU6gWrNf6CmMetsn4dymr57kEqGtZFBzBi4nv",
  "key34": "3Ypi22qEqupWUZCrZxojiZgCpcHhUTinaQUo2d7dwUo8ceFcje4u78FB4AuZtLvoMgQQarRJ6iXjw8rhRogu2BVn",
  "key35": "3nb2S7UEpaJLEHYFLeALsKi9XYZMGb2hQHxUQMmFTuJiJH2spdoycYTwQHpU6FsmChUtP5RnKSA1DchuAbjd7aou",
  "key36": "z8iKgn3qg9HGqyXX47MXQNhmbBR4zRqPxT89rtobr1vNwFh3ubf7y85N3cRRn3ZoWtKKuC9QaPc8ZpswM1EZeb2",
  "key37": "4eXU9aAcJKx4ktqB865DMyDJpM9sPmaZn2tQpobkYRVts9SjxjspcWa4mpRKrYD3XhC5mtJTGLx3uTZw5ZjgBL5R"
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

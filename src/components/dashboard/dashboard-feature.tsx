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
    "5tEWAjiS7gbJG2HB7C85oCZKemMopBERq9Lqt27PLcGK9UByQcaW4wQFKbQ88Pubapx8C11jEC6Tyvjkz8NPxyJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xx3ZYi7w8huhs196gNmcxABjPN5ksx1UzcudxWREKjACqhjXWtwgHgYgu3gn7d6ULnHg9rMs8F9GFho5SLMBYVi",
  "key1": "5a5GE483DYZT1i4JXgxuwSPhMpYVtMGxQ4s9pAcsrawoq6iUuWBKA1KNtdgJygv7teCkUD7cnMZ88c5oGQAo757t",
  "key2": "3Vxmkqahri42JfQcX4dmLTbnPSPLKzwR8eF8k2v19HzivLhA9xYwsbAXAFD2vJVmNFWYrT8Zc6FZ3X3Bhja1wtAH",
  "key3": "5Yin6MRKcy2H9JewtUD58mCvw2Vpnv2xE8VHGEfQt1zfreNahYMPiCXiumi9TqQtCEjyqaspGQH78oo1dJsJRhWN",
  "key4": "rwbSuGry8hzLPz6JnUS2V7ENsonAySY7KnXRYojVBPU8KjUpzzW1Ew5NQ7UUNddrZ72en4rUpGcU9UKd1kinUAt",
  "key5": "5qYi8DLv63cT45JpvNtQ2chZnhgnEnJTG8zvjxJ4ixBj8YJnSvgJgs6BwhbuK8NVhv4Q7W2pFKMeSUWaCBMhwFXZ",
  "key6": "pXVuy5jFYRj5c4BpZx5T4eA7jWoTBDFFi1qk7x26AmBCcJZ2wKN5aSCYgnUA6eRihsCRQN7GusQKTidV4U1SpQB",
  "key7": "2TXa3LmnHjPyhMqP6txTFMjrhcnWTJTB99aKwshYm1geN9gSida3BjFDMLynpfu81dXqSR5qULzBRBaUybgrkPtK",
  "key8": "LbgdG6TnxGoZkNXDuiRDCQvfHT4B8Cguhf51hJirEnB2qvGQzEL6jx5279cZxNYkjeD3V9hH1YXtWS3huEgdNHq",
  "key9": "bnmY3HhCEcsCY5pZZKNFpai9wE78j254xbm2qoowokK89egdZ9T3226W2zBDQX5XfnnStTYTYVEa5Qubp861NW5",
  "key10": "jA9s1swsBehetHAGxuZpp36rSEauPuBw4cuiwKf6G3BFZsBCNFxNt1ZyAirXCVgjojZUdYTLmtUScdn7MNXrXac",
  "key11": "4XEN6LJNyXWCiEyLSvV5pmm5RDKfCTfzNbJELGeHVqRg2zVa7uoKUnkMB2LtKtFYhvUCU7LurTAxsSEiYVumxiAv",
  "key12": "5eEEQ3xjRaZiP5AeTeKgZZob3aE4EnLoKcS5EDuAtqNZXxFPxpjPAddRL3YuK5QDxeDZ79sFFyYGn7PSRph7MuS4",
  "key13": "4EkVyKJeG5ekvhx8iVi9ooTVXDZzp3gQjfDhLgixeCFaRP63c3fNpAzz64Z7KF3aePZxdMJp7hQVQLfDYZoAHy3Y",
  "key14": "24UNxMtp5wuZdekX4tz2B7DXx3K7vYQVUBpkgcTYoaLmjvbgMDThBKKU3NdczZMRwLuPDCSgyCSAivipqCJ1Eb5y",
  "key15": "4vJCQ2PaC2QqSio1DVDQPWuy4qqmcPbCZEkS5zokJYWorcmnL1ji6FN2N8ysR5ihKw4EN4FTjXniK1uVSWMJuJg8",
  "key16": "2gESQcHPTkAgJMRgr6soZJ4tqaWynKBxHSXxaEKXku2WqADBvgvzVfeT8oMJ7kB7i1QbZZY1E1uB1drFXY5nTcui",
  "key17": "5Jgs82jaLzuNYwNXiAbqaLRubzsoE8vWDaCXXHHk9no7Z9dUsMNrf1Sqicb7jTyjwDVceYg3bYFvAzaMNUq8cz34",
  "key18": "25NWqntC2huwgrqmQ45fDCn3grokxfwXLSFb2QeMi9Ay1LUnJSQL2nUkyezpkZ3ZEpeWJekSnTDeZq8sRaSfN4X7",
  "key19": "2VxDEbVciiJf1uzxpCvrPcLuyvYAHgUyCuUkzTS99CgrSJXHHGwTtmmjUQCVq1enNsLhjjS1ooQkSmB4V6TdNXR3",
  "key20": "Cz3w6xbVKdX6NghpG3NrFkHmLFxog6WVj32o8VmxrTM6ZzGG1GdGNrjdk9aieiRp33uc2B428341YoipKmJw1ei",
  "key21": "2uev8FFmRqqobd2acZkwRn8fUJVw7mt4KyZCodZAvyiKrp1LWj17Q6XVRMmrkMfneGf1UFmcDnhnTBou5dSTYtMk",
  "key22": "4R1mxAJUUcJtckQ8u19cc7MPrKj6npKxsgRb13QDorNBBGVzU9RicnumcLThVPNwrxedS5H3ap7Ypi8RaX6Qa7jk",
  "key23": "5r7f8vChCPJGv8fe5AqCMJCPu2K7meCb4dHsmsfuBd1PbfEj3WNXPxHvwSA2GoVaDitbwJaxGqcRBNiTnHZFopbw",
  "key24": "3otqedq9Y5vQsGfVwbK4EuY9kJhgKYaJzwgQuyFPRW2PeUfUyuiSKSxWaYgzTMTwJef9nyxJmQLZvzqyLEyqFwY1",
  "key25": "5kFEfzfAJTVxUrxsw5kPtuTycrGdQcZKKjvocFxTS9D9s3oU67EBnkFgtBF1gykzoAsnfuGcbzkibWUdsbPsAifc",
  "key26": "29Bdv6TtchVMUb3hgPuZFRwGVj4RkQqoUM5MhpcWtdhtqWJvHa5fVf88PoUVt1FXjMGsF9Tztkr6toAALaoL9JHW",
  "key27": "2bxgb3kAM7kb9msePTARkuEveS4gYtYEpiMQuXA6miqSH9J4qVX3Q4rwtxgTLNGUczyDaFyegpd51rnGBC4sFyoJ",
  "key28": "555WQ7TtYNKM1u4mgEo6ZPBvNAuiJ3jQA3LtxFxVi87qiFebi7yK3WdXtSqSpG8pu3znsvLzpANsuXNiownNJG9v",
  "key29": "5Cqv5qQE3nsNuiBbRouEb6GmX55dgMTfKtnnCAeBddkARdLriFvHAebGKb1wzynPLBfTjUx9vrtKcih6cubnQah9",
  "key30": "5Xh9BiddM3Bnbwavn3GtP8KwYu8swoTB1MH33BZUjNcRavzEgeWbEc1LFLrSfeGnTyadoXs2fjGLyUzAjBH2Q4ZS",
  "key31": "5nZDwtVFLacfVre9kmMqQo2CC98qqCLn9hvEVkfP77uUaiB5CBriVQwNpRwBqAvQsFJng2rZ3qcNL6SQkWezSjpe",
  "key32": "4u7DCK2cX7KkY2zuYY6eKcYCjBEC3vDbMhs3oJRw4M6vucuGPuVrSMtfVFyQfL7BJHULcRqeCRuBnEHjGrvHV9xd",
  "key33": "eYdiVQw2nMZZXQDCdf985xHdm3ANXu7JLsxb5wJGZe4AGhZf1q3EWsaVzzpFBSiMMWPZrpoLnik4ChH83tQcAmy",
  "key34": "3FnzYQcSMukLveX9xigN9zvJHZHUFtTNbQmfRGTttmM8TYSBtgMx5MgBzxDfVPNQLiA4eQ8hjTSqVxzhDHiQCvzp",
  "key35": "2TyFVA4LPnhfpHLmFgkHaHPoghKXgrJHpxKXtMPbmH6nw53BEuDXF8EEBmK4oCyufGYLrE5WeYfh43sBnkNwFQbz",
  "key36": "2ZxhQo9MwQLSX7vSdGbAp2BiPbcmwhKxKvY5BKwTtnbdwZNnDauS1RrMiUjGfHtX2TfwpFHe2rvypzUGXhQwvgqU",
  "key37": "2XBxvYJsrXm5DoBSg5M4HgpVFNYhoArNmPCoM8o6TMXEX5nFQdxEUcMUP5UJVorKKckoUKffP3LeSQrRAiNFMkgg",
  "key38": "2txG4NHgdeZyv9PmMBC4UrtmzDcywNbWe69Wf6nV933NPt6tEsf6vRyAJyaGh8LuZLZKXH5aMs2Q5tS7E29a6hW6",
  "key39": "44M8aKGmSPUs8oEkPM8XAsGZBW8BRYz1shkStzyDBQcRt2zgCkgWriR5JN7tQpy6Lf37Zjmdw8pQq3pC9847ZA3B",
  "key40": "4vxvixfQZ3dpypjmqERyuUmjJr9ZfvmF1eEYHgwt5SLso4WDn2X19SpvvVvsW5UEWKaXMGWHcqAt3sJeybnWnbhJ"
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

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
    "2tLBgB2pFkW2H317ZSRjM9JGNE4JY7Kt7wryupGiy5H1JoBgpodS8hrKvma9A25bjTja6mCxiCDLHBTXdLsAsXtW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vRnV2cB7h487QMtygW3p55EbUB2pq7KEA3H4gy6tq3EoqzNrV23aksn7EG2AuvPZsqQ7uHtLoiw6QhPRpPKCPJ4",
  "key1": "547F1TzKrC6Pr3SoU5BQv9rw2JM8VqsXhMhXakNh4FcbADXYr6D9b7Z5W8XVUMhC3qXih7kdmMvmps3uvsuARNvd",
  "key2": "2hhHFj2JgYwLfgSHcCpiV6B5fMz8mE1jnhdsYhzutjdXzsd5BidEy5nda9hULqiihBfWMeB5Cj3NksTsTTu7f6T1",
  "key3": "4LKkQTmR2cac9ZP6PDu9gwg3et1LsEjMQiGUun9dhXdTQHFvzJdCLrea9T463H5pJ2iht76DU68hJP3dnJp3M45G",
  "key4": "54pe49wumekrwXXpQMJg1L3ud1utiLLvuidJQ7jjTqxTz9vDUb6UUG4pwG5dZsRFfP8vk5sLUcMXrA65JhaLEWAo",
  "key5": "34x38WPhwfCTC2G8TDgucSuuDqmeY1TaAc6Z8fUPWEVBNU7PEvSYC8qA1rf4GimEFR7B4qh95tyS4kJeS1RVWnFK",
  "key6": "2trryJPZuc32DbumiDT35DHsDinXE9MGhwofTDfCsdSkjhjS7tjcyaCoTN7rUTa21qaEMwVosjnbABPWoEgedGWk",
  "key7": "49sZXm9F4EgTX4pbctSHjtoKkxNS9fv3Cw5cmvCNNbaWCAvTwEJukbnWPzwcpgHHNJwihMFB8iHGEuxNLu9c2NYx",
  "key8": "oEm43N4X2Pcx768N23ZbaJVfAxFAgefefmX52P2SFNYRwGn1RaAsM85quLkJsJg5e5Pg29pB2T256m3X6wjdHAk",
  "key9": "2Agdg1VdtzVt8tQK3c14H9APGQahwRu7wZScZGktmA8wnjn2xPMsdyB28Um2G39gnX5rc8kSJotX975etzQKx9pZ",
  "key10": "3uFAC3d4HjeEjUq5V2y4je3HG93dU3W8zHSc7s3uS1GSbHAzHCM7RUso1viw61sjep66jFHMMjNaMhndYug8axRn",
  "key11": "617CZv5dMEHXfSsiwh9JeNFRr1u6vcQLu9R1CaedK4U2AcxAvtpCB69QU5FxfjMoj6WpC2K9hnxyBeMfrYAVsZ2q",
  "key12": "5gnvsBWBGCZEBXp5VcacKJstvTfifSdzy6aPvX8KpX5REUdDVeNztjWDEqzDEYSD32U8YRtBq2rGAif7dd13KcdW",
  "key13": "2FiviWFsw5ntkBNrcFe1gcscprGsbV6wbjsds8VFqEbFc1XUMqf3CeRhdvJXRGMafp55XocXBLmEerm5VFzGJKrR",
  "key14": "4nS8vi3DWNYXsNQw5cG67wk1hvATri11sKooVVzEsyz4fdnSPUrA6Tw2UQHyLSWPvAE1Fp98GndpsSYbVUk6HTT4",
  "key15": "2HuXWYH6AaJzYUcsL8VV899pvUxy5CKeZpU5aZPtYH4e5d7Djt8gdyV3p3V12fET4YnKP6zXTT1Kz546raMm6Ar3",
  "key16": "4bxj6qtxBhj5HWsmia8cJsihosHDgSiy9PTbxCD7QCLBfwnAsoH3LEsBnBsnqnrmZuyVQEaVoSbcbqkqn6hS9jfM",
  "key17": "5CRACX855sAq7WLLdFHi4XDJW7SkkjrDcF1gaBoCAL6gZxJUXxwufsJD9tSm7ab2gcoK9XUMRQXUCpeb4ESYPXUt",
  "key18": "5wLSyZXYAdABpMBMrTaQT1zjBCyqU6M5U9NGvwHC6sHEYee7doP82Am5ZyNwpytDvymUeZfLeDG9PSHb162ehaai",
  "key19": "yuPNxjrGjfZsYMrqCQxvezJnnVhBe4jMgbKB51xLjyyNHN2KND3pQ7zym31zQWAWXndVqrzwDkSn12roRnPPUy4",
  "key20": "3QYiKsunTpghBuiTGnnLHuG7gprZjTQ6NAieAYjzacPGP8GVmrBqNdEkWMX33od4mVhF8p6gX4aPTZcD5kisGK1Y",
  "key21": "426wqPvTr8iVjrc5rkkLQUfjjGQw6HKsGrp1Dx8AcTyqx13gcSWWhwZ7q2ktTSPjQBgbpbwK4eF4RNqEJwKtYt72",
  "key22": "2EqfrrDWP4tC97GdbwmDZfWRhuu8LvKrfKadjgt36Ji6b6o4kWrJcRwyBBrFKnuohPfW3E2cT8duiDD1WjRwM54n",
  "key23": "2Jf4WMxKfBBdP3PHK9T1F6JHmdiCRdrq62E4EFntXMNVMoNv9D2nf3eoZzZNQbhHEd1tNcLNniQtW2jLSa1RtiQb",
  "key24": "4cVUMjYDo2ozmnYpufGrbErpeGx7NMxJ8pNVS9BTkE6mNczHJxqULSmCuJ7vZmTGcDAnQu5HSYhoTNMddHNoDy2j",
  "key25": "5AqiNmvVP7U3An9XrTYQoy4JtKwsTtRG5RBZNNcTv1iuvC8XbKwCPYU8RrXhN95tqn3bZJwYswpShWkcovvMxGpe",
  "key26": "5PkQnNHq4jFkDFWTNbJ1rPWxaobbvdep7BU5JzyP2QMKN6UxPHPJMTiy4qEBXj9kaWGpAoF5GWiPHdKLWRNUU8xF",
  "key27": "3avWnBybhQAkxHhfUdZLMQSE5vBMhH5gPwPmUgxxHi379UKR5NCfhvEKiQuXBGc9xQaDnmqYZw2J98RPT4fDtA6M",
  "key28": "2RRyhkf5eb3pBh9iQ8WTaEgrZcJLb6fJtM35aJVNyb859uEhM1sovYRreKgsqmKpnNSTvyULwextGPqArqKKbJcZ",
  "key29": "2B5zJx3ahAMqUjgW92tFkbP9zSgxzbZfboH2u5p5WmW9qFamXyFH6ZyVfgMP5ebWNmBJzi99RhRSDBYbA3wJrV6T",
  "key30": "63kfyUMFRtwdRvgYp2JptFnw3XY11Fx1cHiK1muPp1ukDKMXZPoMjZNzJR1uwsDPDpuKfezxk6nkoAf3rZaZc7Si",
  "key31": "4YsnaMUtQzXGVufLmjJtfEy1oNAftDGdRq19xvvxynMGgy34YvKmd5oMV4EHa5SZtwa8gCRcHMqcNCqjEgxkrWxb",
  "key32": "3P23GQotZcFk9gDiJomDXqm4byWuRFFC2up2XoCyAAFtTBANBWLe1PhGWkWecyKUgsuGptDcwzSzeujhmfoLqccS",
  "key33": "5LZLEGnBBoDFmLPTwgEr6mZ8vzLLATdiHkimXWYqNoHeWB5R5gwP78dgDojsXHMorfBRbV9y6AoLBb1cUMBm4Lwb",
  "key34": "3pH7LqftE1TPaDggSH95sW1WQyWUSkfD8e9qVeaT5HVLKgXwsVG78iFHciJYrDrvjkjfWypqGnaDbQ8N8B6VN2a8",
  "key35": "4gm622wwx6as63YXNVorqCKjLY6H27KGzG1UcbUpsUxnzURRRiWpJasdwJf3xaxJVnSPf8izMAhduwG8GKrvpijW",
  "key36": "2BjNq3JQjdBnU1ZCJwttesdSwZR2RTMUR7iS1okS9i1iB1vXDAV9zhaDgYNPMfck5LEuVY1FYqHKdTK2ESpZhMrS",
  "key37": "3vyuB4uBSWCTSQjVNeMq82iYEqK35Bj2WN5buM4mnuhGcJcU83DxJzsbPLx8XY6NxhR3Zkh5oqkfxEhoh4sMoQSS",
  "key38": "4qksXjh2UNgQRY53pK4ZapeC468rsp6FuY1YyXfAKtRx6JX9s9aBrmPReswBwKDuUdLVR9NJmF3R5sfzRYZnXtQ7",
  "key39": "35fS98YcmCSJ16XUJKsjtbCdjapvDwMsCMZ2Gm2b1q8nLwFKBhcwzUS7raCviaLm8Gh9WacC9VMzLEkHVYipGmHP",
  "key40": "4xVUREkGhF5xBSj7f6EtSqRFE3Z19jqSN9uXcBxtgmKu8CPHijq7QBfc9qenDyGxPdVTukZAGbpncaHH726dcSaH",
  "key41": "5o3Vw1fhq7VZVzpDwoDe83CMXa9Qjr3m4V39QZGMbswCBQXB8BuzUHRvCSLXeuW3mq4MG41EKMDZ8F2wBLvkNTez",
  "key42": "uzWvc2a7GpRKxiURCF6iesk47wRDEG3oZBdJFdYH55YH6n4QfEUgrQozznsHD9RUxwDyTNB69qsyMEezbUg9WCN",
  "key43": "46CnUgeLCp9FdcdFbrmcGcXWsE7zUtrPyuaaQNqro4rQi5tBQDyoSxKBiEbeESx2rjWuCARqS6NdiDPhuh9sbTQF",
  "key44": "5G4vpGJsAQNCY1m5GxqwDX9b1cP95RMNKvaCkVbTBCTGXzqNidS9PoX91BXJbvJ2pFJV8m7z6eAeZMYMpXuREZse"
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

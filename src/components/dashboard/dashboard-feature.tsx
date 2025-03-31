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
    "37iU8zJNS3gjWpYHpBd5S8k41jR7WcidCHUJfbJXQEPCSksG64KDJQoic9E6bDVKd7xCJsCQTRHvprupoab2YFt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPT4u1rUaxJKY8dhVqDCnhXLXTJcbRNjfTbgxdzXoU7VxwAmKV4hm24n6Fn2iQVbqVWuciW8pUXWq5Ark98WR9B",
  "key1": "52YKxXZtmcQypyiC1VYZp26wJV3dCcUKxqxR9HxFGm42iMbjvaT1TA7q7qQqMayp3NAnFaZwNF6AHWQAUq6SUm12",
  "key2": "5iQXWZaRy1kC67jH6dGTTmXGUjxnkrM9fikAYcQ1ii7y2f2pL39tjYVEFShsa177DnrWsLf961DutrZKkTe4s5VU",
  "key3": "2MzpuGppZs3ewJEFc37scNbhVzy8MzmhFibizz6n81L9TGWRAvtYwyPFd9cXYLJgW6Bvx4eXYGoigGK6CUDokz71",
  "key4": "3yLKQ4vuDLkDNN9PBFXZAn8qrzrtKNahEgsusA2YaFJHdoan9khzrr8iKktyMVaxbCfMaSLJtHUKAjWJwE42xwv4",
  "key5": "3db6N4PoerK8Tom5Ewd8otuxvVhGqkHH15v16czWn9EBYd7VEmi4nwe3gDpf5QmqrEVuWT12R8XreSpnvzfnzZuG",
  "key6": "3N1fvntcjrdrSrZNZtBXUabfFUteQ4BoLoMVL39sAWJZanDnC5S9LubcVKmcfmNWnhKPXLqacQKgzf7b5RDrBcZB",
  "key7": "2RvpsmF8DeSG3drRGsyb5uw7gN1P72D7nTQk5rHjiJUT9YRL1JuZJwVL7ZvB6SDLukbpnBcnih9B5JXDUSfoM7UG",
  "key8": "u6r5h7TNLdV6AKTMcKauemu5cmEMKapDM5AJr3zhRQriZ6zaqsKUiRRokrB9nvzUCCHVNFWTirkTK9qSaCkA51Q",
  "key9": "4xKDBNdDfuJtrQ8WVNLiXMeejSnvytup94Mvr17ryEbHKFePk1Jy4s15vTHYi68qrHqZAoyWVqjenMK8XNeMHwUn",
  "key10": "2kFieF64ckrQKTtBnTPqMQGD6nsPPqBe1iBn7q3kdkXLrwwVFvX2LvRKBYJQaUjMcCkq6UdVf9gLyJoTtWubfkJj",
  "key11": "3kHVanGnzGD6Lxa9HN56FwPVtPEB1fHdLxgPVVtPVzAADGazx6BEvEbmNjaU34K9JEZz7ucQt4fsQsBA2KzDuL2K",
  "key12": "5JBMD6Go2RUEKmg4Q2CRQxQqtTx9YsQWYVa8iBWgRmdxHiRrsXeWkZUg1MGcAixRLZ3dkAxhJQL1xSjv79i5YzZw",
  "key13": "mZuGSmCJadA9nHPKGe8hrFrVTrXh2HEQBxcaZYhRoSoSQL4JdRLcBWZjpnLTZj8Ech6QjEo7W5wtnRYxdGnvmCu",
  "key14": "3qbcvWfPfC3wPHCkNw7wLtbPN1Ue4BuHeWZhqykdPQQbHsEUDMVwp97W4Kf8VQg4qZ7Pw8EgtRtjF1uUSbsY3ZkC",
  "key15": "4ibPHyEGE9BcTcW7a9pPyPUUmbNjhMt4TfDXgKGfNuznf8n1ogBqubNp2ZtZfvkjygShkwZxottAaXDKEVQUS1cM",
  "key16": "2LcHG1mByFyzELGTGxihH2B4ga8GjmHX2cchK111HqCxVayH2bbydKzPoxiXHU7usUpTm9xRRmEzFRd6P31aimBH",
  "key17": "2QYggVF3BHgSUa9SstEaP53EjL9df24Lp2kgCNBeY9H8GBnPQL32RLJUcWYAJur35meU5CW81kVGRWi6iZxL7fGk",
  "key18": "rjnrT74JxHmd5gyi3iBm5FLiSWkXdXUF9NZ96X6dsDtLN7nhbx3H5aRTDgkUSMqFf6PoDLBAv6Y5myvvJhd3wGW",
  "key19": "8vKB8Sa9Q2bQFGnSXV6tnDYGTqvTzxbRx3xehuLcTF6FDLwY35sEsNwHUjHP2ozdMszRTDSL4chZp4XuKNu4QEf",
  "key20": "2pt6NG2z51jFZAk2ev5T24R1FAXepWQceYERABskhcT5yacWiW1ostZ6v8Hm6FjZJ99M4RxX1DcT6gD6JTV3tqf2",
  "key21": "UGS1gF6TX3F9THTe7eFBvuzvq7a5jP4gW8gMAwYjUf4sEfyurn1RtBr52b5nEufwj4iuVVUpxMBYS3knb1FPtvx",
  "key22": "ENWSU4nnZ8RbNf7UUcTnj8MBBeGAcdpufQCwfikehg4K9eouJYLzXZjK3DEdDkJomoYmnfhXEySMMtMTavUzPWC",
  "key23": "2i7oucmf4otGJkaxddhTjc848iz5PX6XnawqZfGiGbtUobVpTTmwfF9iH87FzuBqq4rBgBmmbuoXasfH8z93PHxh",
  "key24": "4X6r6RFKpyWrYTrAckzsYQiXT4smyg57gcAB4jD9FHMAbkjDE2QAZWiHkK9YRgcT8w8Jmc3T8MYoJ5XKUPRGiXqs",
  "key25": "2DrVK2dreyz5xdZAadAQHKsNCeAkGnRUrCLEv4ekxZJ1eMSamYV8RUyWpUkDWS7Bps7siQa3n7Q2ETeGVA8T7Pp9",
  "key26": "3uTqWnTZmJfdqBz6iAip1imTLADk4UQUckgP55nH6wESP6uVVNADKv9KyrbaPrgb1mhdbgG62seMPpppzBVeJdea",
  "key27": "3zru9ZdUCAoTrpefVbHngWyrV15GmC181d5s5GYe5d89V7aQ8QGvVkijwbrbnNVe6NWWfCbAiWrxDGr8sufQe11r",
  "key28": "53kmybKqwrETTwYq7d6f3R1vDFDHBoa3hVsTeW91Mqjzfnu9T7voJ6E8RuR5NtWUxAEbCNgjjGppgAAEzkphGyuq",
  "key29": "SYVNprEthfFipJiXF9mwqLAP6mpaixEHKbgLke2CetQN2Z7QL4tHxR7KaWMUk4eEAAEj5cNcc8JmvfTR3H3gKva",
  "key30": "magCto85GVSzW7oUQnqZdo1GatbZrVGkeUHFmabfqusErShTTwLb1bsnuFnim87LSA28dkFvg7j2LAwUv8DeRR4",
  "key31": "34SydZwPPL4zHsahQGebQ2hCtu7jUw3ok2oVps1qvjNZNUvJ4zhgKXYmH9EeHsDa2jYLtZjCNx6WZqMoSgQK9kkL",
  "key32": "ff6XoLEti8BZejqg7biqNjXwC1VTg4Jg7xZuGjGLj7iUttdNux6yGV28PhS1ogeZvbZ577egcv54M42KWoKUtXj",
  "key33": "5pYFAb2FG9ZEHhyuZ2fApEzwLGBsZuAaSwJe2KL64wHZx4eUBxQW9XPSGmSoze96d9hxdyvsw1ASh6CrkaeN3GS2",
  "key34": "5Mbs64r9MvMkhvA6QF3qY8UGJ6g7ufkr8YharwBBvFFdL8deStSviFGaaDaVcBLmJn2vYbogPdpaNouoRuY6ASVz",
  "key35": "iYHKLWuqC3WVSeBd2VYMFwE5kWhrQ6Wf9VjDFk847eb3N89qszaov95WkuXHxCpLH3rcUgkN6h3xxRsfAQK1ooV",
  "key36": "5f3z5kR7rCauhN63uYf2NAu4PfAFbZnPHmhTBFK7L1rGtwLJWqK4Y7a29TpQrsFsGLmBaLGB7V5pQiL7NYPnArvz",
  "key37": "4yvHcQQthjsVFgv6sbfaBPwHMNDSpDegUAf5s2YjT3BhPakhD14Qti6hEuygZ9BXgKVigELTagXswhTSwd1AVLtt",
  "key38": "61gAXud7iUi9Vfcqd6Pu7s5DCZWKy1XfodvpwRPdH4gAzV1uF5MC7xi7ksTashtoywfJ6BpAZpCwNN2QnbPG24sK",
  "key39": "wzqUpdUJdgjWNFFciFP9HNndtwZVP1ro7VJjJeMwrJYjyRjVBYTijXPvNYfZxBedZBvByDsZR9XqopScfndMJoC",
  "key40": "4y1rJaTv8WY3sXE5jVc6w1JXVoQKVPCzi154JBnvVT6ydJPSQAupjWPRdGATxB9PzmnXsBGCxfcmEjpvP1ZMxoEd",
  "key41": "2J8tt4W3Ztrs3jF1xwYSqCLHLTzP3rVtqnptNiLDBAcqdNJuzoBGD3BcQoFNdu2ehkqBt6VvsVjzZryci3mjWasU",
  "key42": "3UGp5VRNYMTyjAKqd5T4sm6cVa4EfbXRCQpoF41CFB6SbFRVff74aYbqREn2YiuChhPmPnKAjBsU45Y6M6HK6JNx",
  "key43": "2CH6SenAo8NHxnmCK3w5URvYLXd3xWX52u6tcnwfHgitDowt3HwaEQabpMGHVLCMuvzuMFQ6KQrFUcf8bxa3LYR6",
  "key44": "4wCtgjgNe8FFX8wDdKTVHYwb9Ubyf2Uxic45KD9HzBz62B9cQwx2Pd438SAr2Lm353KxR8T5rKwd1ie2Jpr2YPPg",
  "key45": "2RFJ3J9srD6wjawbPHmZDjF3iBEDDLzCrykFJECUmWi1ZMNoZ2NR6DThJaJByikGCcyuoVhGEG2ZGVBjEiX5Z344",
  "key46": "2JQTk4jeDqVFhm7fyawvGg6fHM6rAGL5WFpgAVXQ2Fkotc9iSu92WtuVoq78daS4mbxKzgeeBCUUEo3HNqVzzEib"
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

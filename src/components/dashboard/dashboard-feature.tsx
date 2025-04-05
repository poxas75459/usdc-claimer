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
    "5LfdrTLtaXmcRPTXy1yqUfzUdzr32cLhz2kLBmFQKcLHfiA1nwRc3yKosxGzmbRW5KSYWKgN18RGN5kk6DL4Zm5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RQrukdwavuv9ZJopDzBj99PD6DCQTTybi58SNLBcqf2JK59MjPUr8FqPP1R2XuVbXe6Kd6kbdNfnUyN8UQkk29M",
  "key1": "2wVDskNqKoMQJ42hNdxcUAKzXFTY75Cpni638oKGTxtA7CXL6hGpGGjcPUDSJA3Hcv7NsBz87mfK6CQt6nWeRwQq",
  "key2": "2znjr12SpDcp3XhWcMQMH7hvsZYbJF32BWvwFB7ydZdRrrvP4hMZE8Pr5obfYY5BHZrUwqxsx3BCQ1jBDocmvanc",
  "key3": "5tHWKbeioWXdHCnW4qpzKvzxf9aYvFvpfYYtjZsUy2gS6AAnRor7Gi58shAe129rd25BSLpE8uTL3VXk9qebgNWS",
  "key4": "4hWZh4bXtaDLsN9pKMPhmCCyU4ZNdv23JSewiNdhHngz3dAziz5jJmRwF2XRU12wpwJkz2e9ojaUMDXztA4yswpJ",
  "key5": "Dz6fUcnZVcXVisA3fLupHLJkQro5rumHTHBnNDYst1eECYxJMqrTLcS3YtzvcxHhmrzuf12e8Gx11PBjznD8j25",
  "key6": "2LB15PaVzSnzwSYBH6L13GVJ9tuhDNPfTZxmQWcEyQnry7ocJfTwVprSxwNRdbmbx6ieB6kEWR6xsPHuGT2SCkka",
  "key7": "81TxjeD5H3jPYJ1qpTxW8qdQqyneSXpQrV25ukPztc6AQ7finq365itEnFx7basFdUsuFKpGC4dre6mNZLdLR7a",
  "key8": "5qNJS6UvaeKjFtiHJdpEpXeS1UcHzhP8iyrYbWLSEdubhSbFB8iw5doGZs57MXJTq1qimj5Luq2qDzqQqcGLwDjZ",
  "key9": "3GtEmVBmuCaeZhBFw3jLQ8RRwpkX9oyvQiXLAJnmQqYQKTUUZNir7fxBTw1uD7ooUSvtW8ZU7bWN8MmBSu2y7X7v",
  "key10": "3cfvph8DYx8y7u9CzG1yGt74H16VyXQ4SUYzDxyJEKbKUpXRoUecUYWaHVfVid88XuQKS7YQ3zcfY59shBc8SBcg",
  "key11": "jMXeS4oXqL1Neh2sZdVgwNPGrYfKhmNZhZSEXpmgMW8sdJDbK5XZDrWNffK6inirjYbLh7Rw4XaqaSJULnuj8t5",
  "key12": "2vmByeRS8Ls98aqF6b6ax7LzQPviJCJZAtZeMsErLhtcR1t2d8xuQR7phVRphpSTFi37SPtwx7pqJ6Ck1KFbCe6S",
  "key13": "4HQg9bng4msEefSTZSUCHGjNxctC7J5JYBR64TiodriHZKZc5owXmHrRvNDzCrSAUVbNMPW8dZgaj5LSBLKTPtkM",
  "key14": "3vo1gEYhGhPzhFdpu5d9sdiCvm5qq2Dy9wGnmNsZp4RHS2LGGKS2rg2bpB3LHcjNmemA8vofZqs7uKbkeUwB15v6",
  "key15": "59rTVRLRzVQ8QmXqF5EqwN5M4HKQHcsbNwwZhaY1ChRkAzdgBPHKpKppHBydMJBe1bmdWDB5rJ9dZTM44V8Nsugi",
  "key16": "3h9X4fAyyCm8UzNBcBneF96vo95UTM1dPZh2WwMxydMDT3ZEKCe24BxuuC8Kbr3VhtrsA8qJm6F7qytiwpfakS6D",
  "key17": "4jZKjQ2uDgEJpGu6Dpd8FXEP5iFpnomhteSiJEAjMJDwWUyRiyUZZyQQTHcw3z4QLmGDZeanVXe6PVXFEjRB1Xzv",
  "key18": "s2sriBJq4BhdxhrLXjhYL1PpxWLreE2wco5YymsYoyTjJA4qq9WiJ3QRfQJTqMMMuajZPgStMw3Y1Z1YjMLstJc",
  "key19": "5yPfFYqHzx5L3yb78kVuNLtczSwwMSFcGddaFhdnFYhnwbM7a8h3dwvKppQBjjEbEfDA6thfBHyfBDKUvdewSA7A",
  "key20": "4xG62uRY2SK77he43BefCqSs6Piht6G7pTzg5gTvDEezx7vQPABUUZgym4JjMMxwzFff4R4X6pgWcZP1m8Xd7BMz",
  "key21": "61sWGHYRPqdpDkycP4TA5G47HcGEjR6BaVHSkFHC1KgWqJ44yFgNbHiECPCxEsNMtNE5gnW5NBmtoWx5dhoR39io",
  "key22": "51wJxE4f5jxiYsBEeT76AAvG7ZpxfCukmtrsSWKLcCStqNfmTcnmUFqAjXThWPQcgAwaFXq51VhDzrWFSnqa6PAV",
  "key23": "ZTBP673uak6imBr1vfati2m4TARZaP9BeZkX4GB5AgLhiTme34zerwiZKZhXBJDztzeB94suDQBftqtMAsuJMYz",
  "key24": "2Aqv34E1KGrYPgHf1HfsKsvqC1MPcrRexoJhdMduZn3Uky3NDBah7hihNQ4kvJuRHRY4LjZhVpes1XnYWC63Fqqt",
  "key25": "3W2Q3qJic4FXyHppsdfs8fvkWowbD5afaNH5HeA5SkRd77xMDgnDwmapvsQJpfMBFzoAK7eKRGESyqahUSfkcgVZ",
  "key26": "2hQhYLfxaBuq4pbHFG48mbqDaydZP2cV9gGoA7bvgG4FgRPQxPcxmtQm2qLhR6yjPiJCJK6Z2WokLAQbvgmEPBAb",
  "key27": "3xUWFTLeCEjiqKkugNzJvwPgzKqFrdwd1Ma7EJpJmSkEH1stEGxn6hKov124Wv7Axtkw5obqB2bUd5Mc47ygfHih",
  "key28": "3qJnNo1TRottzBWaVMhfSzGFPnVx7xUSrh9ZGpVDxERvZ5Xw8v2BTTVaBmdagVfx1QdS45mpW7XutUXMBWoP2ccf",
  "key29": "5a6vq9g5E45e2sgYXt9ubCSwiAQ4RCKpEGjPqD56bhHZEZWmQUzvVPVDqy3umd6t9wprSq54nVrCFTJ5GJ2taubb",
  "key30": "3sS2YaKhKoneE936zwB75RfgMf5GdBsQRAiV35AX69wTyFvcNhiBb38zUVDhu8pwoMrNCZoUJLEQ6eFmtSjmug5N",
  "key31": "3iUEJtAVqkMCpsRiSb42ERKQmZERPYz4tWCUutFJTDUhLyHqu5i6npKm16nVgMnJ8ZiQxZGdSeccFhsN3BU6BKdY",
  "key32": "4tY1hTMz4HAhMLN53Cp314z4eBefdDsDhzmUzkVNsHLaUuTswBPKCgMwdZdKmmxkNkqePNWMD8Y1RyCqeYwThUPJ",
  "key33": "wZP2V9ch7jpFYiQ3NCJReTbqqZZLs4n8MLEJ2S3s2K3D3ie4Fc2C5Q72GAnpyTV14FPy823mEGMxzad3At3NAuY",
  "key34": "3kPrr2imtNqSnkM5SB1PP6mC3pPGHFyv7eYJvNHoQCiSY6msU8eZhQZ6C3GjhYGgYoCwqcF969gqop6pRxgTDP8F",
  "key35": "2FGDq5gLU5D2danR1vbTMt89P6XNX4a42L2EBMC3Fu65PtPY8SCgaMnBSLXgTtZUEUqp4z8JVFLze8uJ66MkZuXn",
  "key36": "wxQWGyt6niCyhpTN5QhRU11V7t5sdKkFXCnrAs7nBi9nx8pAUhUdSPyAbYjU59dUTUhvKs61kgnaa1jQxtZzoiY",
  "key37": "5w1Q6wcpAq84UGdsT4tQaigLX8cPvCjjgmBcfdeYuxtGXrwt5dYZJoHe1yNbD1gj8vpYwhadifD4opy9gtn5rm8m",
  "key38": "4aZHEPUH8m8m9xA4sG2kzftJPHJ8xrEXadFd85abbTtgPvQychWbcknHcx6DWawGpcyEDpbRk6P5Di247irxvZpS",
  "key39": "5SoSYGSzQf7v9czexsL9LkDpN1k7GMzCTd45bRPzPwm1zYAEJmsGnXRPt9yBcgCmPVLKctng33YNgFuPKfQaRE96",
  "key40": "5MxybNemrr37nrFgUKqJ76hUbZEVVWJTShk3oK4MdssojbxqvnwWNJd3eKbaPhNc15T43XphUox22ccopD2rdC3H",
  "key41": "3aNhBrfhh4724yQUTsU95JKpWDsH6d3iGV5otjFZyTcVMJonnwxnCr7UmNuQVQMuvHHsaiivJ33WVTtJQWuQaGu2",
  "key42": "4fRLjmAArdT4CzMN4W1Gcus9LN2ji7FJYSBvJvuerdSW8EmZY2nCU9U7S6K15hhNp36X7bWSRoqJVd8Ud582ysdg",
  "key43": "2rhuDGPekDqoNVKSdu7jFfCEtt6ntMpAfXjYAMVyGLn2Ewh5pXFUMUe3UKMWfKs5rTBS3k92fEvNraTbAg7H3pdj"
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

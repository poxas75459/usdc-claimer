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
    "kZsxaZoGj13pMnNWbm3zyCgsHA8xwcU73yp2yc6KkxzDbhBgjLL8dAxvjWiTDQs3cAM3feixNYzxoLxHERmHew2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LPXkFTneTsBvuHZrWhvQFRAeD1ZDnof8hTUc2LeHeyK2fYhS9DKB6KUSrEBuDmupiooxDgeq8yor1EKwaBG6rME",
  "key1": "3kmghzWYD58tnYeYL463am3yndJnbMyV5GGHriE7QwoUjD6nTBQr3Z8SfSMpxJduFGYkTYSnGEGEt3sYdpjWpoJ7",
  "key2": "4LdVrEgnejDqCoRAGZPAMmZYfV8rZgpYKqCRe98Zh4HEuxYHiT8ykLiQephqKpyPxN1DRWj3BbnPAesLibyqmFJy",
  "key3": "4tJRrTkfMntEA1qkQpRYkBchbnzBDEuzRHGw5DmNXrG5REF2hFRWHUZLFiUDWDoj1ygoDfXsBE6i5cnweSuGrxJi",
  "key4": "vseBtK9s2yEMUkCjaTNT3Nwosxy3aCkmAighWnrv7FxvRTSbgJ29ikJLEaP2tN3q84d7ArbqpV5LfJGfBrEQZiU",
  "key5": "41zxoPX4HEmDudrV8FcqdWFAFks5dUjtvXkQS11Rw8hTcszquVcWYMDLvF9yxs6FSU1PsyTf6RdJhEHmoe6zFXrU",
  "key6": "4f3zrL3SLA6wXpAHMMrFh3WyQDwpyRaCxsL6frjsdGHpoR8WaKygwN4p9WKsTyqeHSF3Jdr6hQYcY5oAYUzyKaFp",
  "key7": "8QQvr8VvtERd18xVgudMNZNQcCcywBx9JWDpcWmeSPU8cJicDcByJsQGaihyE4J2xnAZEdjqAigbkXrTy6MdPbw",
  "key8": "3nJuqADVL1StDxVge4YE187ySZZkPqbnrkiGNgJN4y6UVKvwqJXEqS1CFuRT2nmLL3vKTUrkN4Ua6kKm8J1jyq1P",
  "key9": "5ZTucWD81k9YvBb9gyEbZuvRxERY7Yjos3sADn4tnm88bppeDN5z3cGoFAdeJprVa3c6PbaTbzswyGkEcTrMe82c",
  "key10": "2NiZqNVUzMndxzw46vxBX9qY2KAgyLKrZqSbtFQMyM9iQp8A9UwQm8w58Buym9a7A19XhhnRZ96Azkb3iouNTGva",
  "key11": "5shSZwJ5h5YtK8cZFgZbshPDnrpADUd8cKtP6nL7EvNBWCTkEVXzyubDvbbjXdKFZZ97UaghB9EDhY7XisCGiv6V",
  "key12": "3voNKa6DWrYEr7pWu1JrLTfhxozrKKAEXx2rpr5TgkwbQThhExW8sncwbaVYU6iLixqEiqk8M2B6ywvrSmYuhMDW",
  "key13": "4P6RxzuEbMCMS9G6jzu8iXzHq6VsdBjeDGNi3iFuVVrvrLHV8RGrzwnFAU1DcBbGaCxbZnvHmVHS4DyhyNnUzBzj",
  "key14": "4GGWgyUNAwPSzccAmVUTsBMtzY9NWfcXQnS4LPXzrXwKnZ7T4MTmwPsXzcmCyMthtozvi77sPs8oCEjQJXAZVtM8",
  "key15": "3hf1vG3AwNENyQomc2tzoYBThbZr1cxku8caF75L7WYHtXNp1AyZGNzomzJAcHuCHsBWsLAM3XFMroQ4JvdujQsD",
  "key16": "2bkMQfXJTWzaW9uft8d4BPPbZYMPSp6ER7Hw793XZwhuy9vtgg1iVF4WYr9hzhNLxhuLs6PbADmZmKT4nqqp5m8M",
  "key17": "Kf6yEFVyC7vpbQ9Mah5wDqBVBugSwdsa9G5VEDs5d8scFBzLzrcreKYgfBJ4kzdN5w1Gw1Vg4g5JsoF6byXLB2A",
  "key18": "vbxVWEc1W1Qb9CxwSUCGrKidq6sZMZLZwcxTfdPT5uNcXNFuHi8pDEvyaU58f1hX9agwQ9AGvY49tTRZusycYDC",
  "key19": "5ewYgUyhneV38VwDWSDFEmng89bY8ZLYZD9utkjX3ugMEYCSsBduRTrxdmCaC55ZofaPG12Er9LzZaUx43uSvR16",
  "key20": "4p8Jc2qW1guLs26tTHobytXDQum44tSSsHjw8LyQHHdtB8ewTw3ArDB1m8XhHxpxN3R2KCrBgP6wmNH2d7UhpHG1",
  "key21": "RF7v8kyyKyyxqdMZ1aSpmH7ontzsHf3endSWQww5KABQar8aM7AsUVzSViJj84Q8QT7CFEJUhxYBpX9MB2BBYy2",
  "key22": "5pgHMxCazsVFgk3oNEWTSkVpqDn8enCmxRR9fxHPFTWfukUAPRixw1XpkQ1DNM7HWh2j3bZ7KUAPFjw7cqjcsAyD",
  "key23": "3CEBTNAf388sGSyhqvb6tandQsu34iivRF5GDZB8D8nsu7tqRcB7M36eaw14C3SoLvx88qBSiXkzQ6fHT1yH8gfQ",
  "key24": "53UY2k15iEMLQpyYDTt9EwS3ukinW9qdzCrXfjg73yYRy9zZzqqUeSdd2xBspLntk2ipt7XhXaRf1f6Psftm6QQA",
  "key25": "46SrJ4btNXiweDNro2zbLSDJibRvseJVJZFfoMLPh7oRMXYcZmvTSKNNS9yMumYFQuR5U4gnEHnentLWvhE1adZj",
  "key26": "4DRzar9ThdW8XSy4KRVMdwRDfnF2HfJSdQxCXAharcTzRY5CwnaBQ8Fi8nQ8yhPP66ewwpwCjqwGb8PhMG5WJm2i",
  "key27": "TvWuWa8R3Hmv6BSM25mEpUHoYJvvvVgWhvfvmUKNLbPt6WXkhmNfzh7CKYvrwKFDaKBA86QioLj5ZjfXD6Y5JV7",
  "key28": "qapuyHhm3wVVjmmTrB8MyiNKrohUxmVMt8TCN3Gp3ayzvAVMGnU3XqEcqtsLxFW6As1JKEEgnAvVdr4qh1heVtm",
  "key29": "3UYW4ChWVArGeKHMibkPo8ZiT1n2rjivY6Wu1jPkS2SgSUk9meRLzN4P7KC8Y5GGdcrQzF6Jscy2NvCrfqQ3Gvk7",
  "key30": "4UUbfhhnEGW2VmFehpWnA6UEHA531fA5TEmhuXf5NhU3zqKsnN4dxnZBNUF9hvepykhSDQrR1JPPr8s6zdj5T5Q9",
  "key31": "2JLnTtPb2amqEB7yuFR6vo1jE4QTqp74juzwe2HEJgrw3HEZrxkVrJgEbtgwEKbZGvdd2CAFNrXnrAno1sAuzhUv",
  "key32": "aW6dgC4oRPwLzbsYyrZJ46enVDP5LdCMZxPDKfSqrsAiifAi9eKePhJL5tCRq3ft2QzmPtHrY8uYAvsKXKcBxjD",
  "key33": "2mgPvZ1VX42yWWwPgKwYFQVZJ1JM35Djk4N5RfW3BenWSbBeUD2QzgTtFohXM5VDtXQ2ntoneo2q4hvKkwDQFL9i",
  "key34": "4M1oM1dMbwgLRF9NebDzLs4WUz4uydSWabVTm8nRYX3DpSDArASjp9Y5ftSmVwJpVWZshVkkMy4NVwubrYzzvd8M",
  "key35": "pqjEGNrBjRJfue14ZkyeqdP6A6kHUofq9hbc8hEfWJuNT2aPzHeb2szybrzm5Fpq6qsNjvTDd82c1H2aD4aHyNH",
  "key36": "2aPxnseNJkAb4mN5617sk8erVmSpWXguMDmhrfJPjP9WPytrLhAoUYMquTZ1jD6dznNWAcsXzGGnStBmt3vdh7eA"
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

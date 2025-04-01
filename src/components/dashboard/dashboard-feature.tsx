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
    "5xqDE6NHXzVJ2GCfj9GJRP4REvAL9UGuPSi7BRFLQKKvT5uLh8ZiXhR7K9Qy4hfCo4o95b4vpSJxUfYJPrdLFmYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbDG4LhwYyNT5yA7ag2qWsKK2a5S1ktqWL9QNYfMBuohoSgNGwiEqFAK5TqxvMwmz9B4ngFsFMU1X9a4ym3Twww",
  "key1": "4Hyf8snQ8jXiZxfEDDhaS9gncALktRvQaHY2QnafZA1ofJAP9rrfmXPxYT9oyV6fcL3t9KBBZM1pRMSXyi58Qeg4",
  "key2": "12574k6TMnasX8otMW3KJWLj3mWevQ15prcF4K2uF4bK3z94aA6q4Hqmr4M6uEZYhug5TZPf7TQcifNLBvZUNXwy",
  "key3": "2Rud66YGbk9UvnMRCwpHhCQbkrQKuvzFRx4QHSyfN913kSe8sm5sU3xA15dHKHMZ8qB1zBS7VQmGPK4Rco1nGq6g",
  "key4": "5tV4pALYDeLHm5h4k9yZmmtaghjDFjWQYR3K4QnUQcUD8HzHC3qAVatonAyVnnfeG2X6ABbaNqZgbfaSSUzd1nBj",
  "key5": "5LGHk6iUNh9aLgGiwrr4ffDYX7iCfhvbK44exjYhzeVcVR9iEZ9t8nfsEvd5WY7q9aombYks6jn4qBpYkHraaVPs",
  "key6": "2EBcwwUGXyHKQzx3MTBvZqvaaBbqeeLZ5r9L4jkHHEyDboDuZ7cLp3nADxciRwPnWVmmnsSnUHTHkxKVtbcw9GYN",
  "key7": "4wwYhGxWVhJzAG5Yh3adAhZLtCszVuwTG8s5AruRViUVLWc4fUFT7uCNGDQSwi4JDxYkfz59xPsDHN9agcNbKLjE",
  "key8": "4rpjUR19CDarxFXFsn99tBQ9PjzvjEfctKueMz6KFeLzhuXweCbu6PLYkZMiVGdzb6Vjtiy6HAn6wscU2zC6mBoJ",
  "key9": "3jX4Buy1QDZ6so5F4X7aaxk5r4JasKyKvuNw4i4Ne3wmownPHfCnXjAC5V3dcKgkAkaVi1xoCyk1pp1wGEgy3uKU",
  "key10": "3QyH2wBt21dn2q8T1ZgxzjLov2TDS73rHGAHpUs9ha6a4xyEaeFhaGjgBhCTvb2jk77pgrxZUrw43x3HQdJaG1VA",
  "key11": "zHqDhAMHYc8cR4HyFN9nDe798nbG57msT64KokNLcYdu8jxmt7jCHFBW9zFupGfJMX9pAoNs353DT1T3AGELaAt",
  "key12": "3cFmrsA1y1cLDCVE2NDqPbDpXiNTPLrAKrT7r4hrS6yFKo7ZfAqfvR6f1URgAPmzgPULdbuygXK3VmaGAwbKtid4",
  "key13": "3xEfgnoynkY7Sf4sMf1mnDUKtuQygKSxJom2weDHYP2ZN3zzCXCXMhbjKPEQcchv86wcXZ1qDFWrsRBGcKaB7Jcg",
  "key14": "4PZcsM9cwPAEhqjnCbNchF81oCdJjcjEQNFtUo9afWvJ8vNbYQ6mdvSUWfnKj4MjZR9pSHuwtbiZf2e83ToueW1u",
  "key15": "5qUrSo2H6WNLRXt4ogrVHdsKkv9tbqpfBWgNLnAi4nJw2eK1w1fcyVBBFfJjB3ie7mni2hPNe1h3xVXNNn4QWkyd",
  "key16": "ZFFGo2Ne7fRFKxwj5Csb5nfNFkpwycHwN6QttarUHK8VQK4NaUysogimcWXkEC7ox2gvZ6qKVQLCeCcuAsmsw9D",
  "key17": "3M6XH7xsgdRKsKbRSHvDZzpikebvsVKoCqbfJK8asiAXP9bgjFTZGweu31V4f7w5KNbRaar8UHNer16L6dh8XD9j",
  "key18": "5SJ9MmD7h6zEhWxj7pXXj1MrziaYawQ79ut8V9M3yyi4w7o8qSXynowYn4GtDY2yxVdZmroTBJtFo81pN7mMCyWj",
  "key19": "3eqgiJ1cZqaCkme7rK5PnhPPqUaMyKnsvEiKuMKK3DYHL8JAGKNzoZV99MJqMWCCZimr9nft7mzmdXmKkebrcbaA",
  "key20": "2DSUrCkrFyD7CaDd22khEPeyjuCeT34YSvtdytCUE6poVn1QKkHo6c4TSu3RBRAmuMRxqa3aKJQABZxvoirPUuMi",
  "key21": "2UoNj52RQFyFX8E7i8oxHk3rkwX8Q8KD5ERNQ8TRNKvKqUJHwVXieKKo3oVaf1XqK9yZcdRtMFgj9XYga2Tww32y",
  "key22": "4sGrnoBG1royb1GCQbLSFBtfuVk1Az4drUSaAXMaUnA77SKD5CxHUhNeuiNd9pUKsHw22MrGuhhEh2dNkbJ4iesM",
  "key23": "haVKnuwLbhsoFjHWJPoRSTgXvZfzdnzqiVyQwXq1DsfTwPW41QLSQHCV7hpbGtxV5md1MzrG7sX8B5Svi4ewcEm",
  "key24": "62Etv2cMfNJKHLwkHdghbxFnBjr4x45zi6f4PwoE42ZiHHUFGkx7QkYN6YdFfXaKhgncnvYP4zWNpKo4XTP2pwYX",
  "key25": "5pY5JweDWNNu6XUPEM87F5RjeXuwZfvG8jLMBu3ZhsdHWo3LnNfz2xXj6zd8uHX37d2JT6XaS9xrrarkqPf2cvjm",
  "key26": "5f6ZDuJazeVGPobMcnHzbUtatMsDsyUBuqWyh8NwE6znWYffHbrBASzmDHpZQxEr9LFTaaJxZZjhMug7jzEKQNtD",
  "key27": "5esfJZ66CfgFxAB3jYeFkhvuSppP3HnMMs9gCBme97eFfo57Cs4xW1FFi8fjZZjpzA2hkJ1KJ4PUR9CGbaGxykuy",
  "key28": "3YPx5eR2fczAdFRNzC9DccXn1dy5qRkUX7L1wo6HsvSDsJV7Q8nusVXAe7VjVDhXoB8FeASqZv2SZpcUB5C6pW4G",
  "key29": "UqBAQj7CBMFB89MGpXBgHi4AjxSZfLiuJyg4Vr8z5srtXEsHeCNBQ4tZf2pkCRrQUnYTefSeCcZcNJJeWMByey8",
  "key30": "4B9HB2kuH4qAYsLoSD7XfBexcyzae4bzAvPykT8B5m5eBTx8DsSGdEWKxUEZSqUSfsRt8U5mif1Uhtqsz7FAsEnK",
  "key31": "5K1VTGxCwXy6Z1a8HuD9U1gYWQyko9Hp94GNeYfKwiKv9aq51ztTaBkNYTmh6j5xa6sSCbvimoSi1eG8u1aqN1gL",
  "key32": "3GCQrgRayi824kCmcwseaAUb7dcToBBowDN8WPM4s1ovQQVWMGi2maFsKqJhQunZMmhg1LQvs88UsXe4REq7Gxii",
  "key33": "5LaNEwuvuNh5k3xLMAWL1A8UpJoybbqpwiKwdEMeLfkGxSyVdfisP1rEbK1aXa4UD87jJo4JrRWfEmUXpqqA4eXM",
  "key34": "3a8tRnFsCi8CtQpBEzbEhSALKpURaTQMyfcajsViDaRXArJPv27ch5s6rCqsXjtzbUuPg18WMi8Wd4AeS3T7yPzj",
  "key35": "2R7Ru5Mu95ctM3ztGwptJp5Xhyb1VkBSGJhSXkoMKiRU71bHoMFjLGirib9FbVbh3qQLVxcUbs6vhx7GzoYSY2T3",
  "key36": "D48xVmHC2dTfu3pCiLDbiC655oGWL4uS8pw57zpgpwr8R97xTYEVzadRZbyuk1qeTMEG6pF7twGNcXmdBE9VbKH",
  "key37": "2KLY19rWtdqtwn8KrZNRL7SYrdEoqpT798Q3KeFSfhFLKewjnqgGaLoHiNiVchhETsA9pNt1fg2FZeUU1YXhre9W",
  "key38": "2LM64Ex5HnwHzkQG53bSUv9xLW86XjEGN99U2jsEmtXjqTt18hSeZLQuJTN5TR6qQnjufTbzhSfCUpEwaPohDsPg"
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

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
    "4E7xqukfVCDM5T55UScTQEmym8woc8ggwicRCJwoVvJXwvM6kKsbVrmdD3WzF1rNr5K1bqq2XaA8H32Dv3ymazkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZMZkiH52zkTPfBPFQmAYGxZgA8f3BXoNJoBnv5LFWgJ5fuKPJwCz8o8PvkKEApips5eRjqZx9GjcQwcb5UUUN",
  "key1": "SUAy9PSkmYNCPPcn3zY44rjNGD4DTDFgiQb1VkppEqw3G9Wh8MDXvBCmj2pph4443nS863QKZKWQoP9Dqba9oRi",
  "key2": "5rTEoWo2b1u7hvu4mUb6eRJQdQwZRNytmPi59sM5kaqfFZfC1VmuQUJYzhvMBQm9vgruE6iuoGxuSqFnmE6AR4f2",
  "key3": "QxQSAWWWD1mB465ZWexyby2meTLzWinW3GEFxdn2MmQwqDv8BWeECi4Zyg1B6D8JgqdFUHNeioPJJJb7fWHprYy",
  "key4": "2neVudFQgAeniRLQaAHK4dFX8L4TZq6YP2NqMqfN8sYg9HEUcfQPH4PWQXzobQmS5WcGcr3HGPaFWQWt1zUqjUKH",
  "key5": "TnUEmGdLSCDyPYbmaN5axtYmozb1qKcK6kqx7FFeoLK1QrMq3zSHFdYT37ovxz9oYYdoF9NCPAuohJhQxYMcAPZ",
  "key6": "2JZSHsEjZWFzX6QVszmSsgYhB21E4YWV1Qpi4BFPL1UkEH4A7xdAtAp2NVvNvkWnWLf9bTv9doJNGZRKaTnPm89M",
  "key7": "by7pq23B8vGVUqPzERzpCgwodBDoVsgF1M9xLh8WbekTQVaxauDjtHcosa6XK2NAnAU2GNpMHQLaYiks3xhQnS8",
  "key8": "2sfNRGgyAw25CxiG83dDA4YL4wY4P1Pyb1AxNwAK5uwRpiCGEt9DTdAAcSpsnua2hAPzarRagAaQAZ5HjdiWUTrh",
  "key9": "4TbW5SdrFcXWkr1W9vx5bbDpWDqAtDHQv5UWpHDiW7LQiaJjp5mAh7w5HzCTEYpFputSgd2rJ6UVmv2m446g96WW",
  "key10": "G5nQC6x45foSTESE8TFLMp2pmsc4CAGX9YmcrSdMUrYxM8a1EZjskwEq8cMVY8ChGYvWUhN8KoKa1thNrZsgenG",
  "key11": "42zJ6QMsi43NitJLVvjzSKajxX3DUdFRuQ2JuvTEkGPuVjaQH5zCNgvF7FqBEQKZUp8zgsAs3JNtL47ceznZQW16",
  "key12": "5Duxque6Xq3xLey5MrYM7Sxbg8tHs5mWH4kHRsHRFEu4KPBoGJi6KFADrRv51aiuk8bXMhiPMNjt9j9aboTeQTN",
  "key13": "5vva5eugeKfQtCA5SMq7ZPQwfyqrg1noKH9LgyGx84UTUV6iFKV6Ps8QKWvnNRCzNJPwa4maCzQ9nLFX2SK8ARSz",
  "key14": "4p7oq9xn9LRVcfNT1tgZCMervnoZrT3N7peWVKEMWKvdfJ33T4rkgi1VbSHRwrVrVkxp1urcZnMXfTFBDghB6hdi",
  "key15": "LvsKBWkEmNCmKuLhZbKLpRmM9nv7rZK5puxAHWPMHyFKTKzgfhfPcAtr7eUWwYDSdVmebHpBH5PBb1n7YyejGBZ",
  "key16": "2U73rFU74R3ScGkPGLWgUrNhgjafKQ27BbEKpqsSAMhEqLbgY9ECfEafjqFDCqx8nwyGCVDXSzFchTuA2bcYgvCC",
  "key17": "5USw4GvFftwaSRJig2KvWjTMaDhuU242FXusvUZA4ae2zzPC4Mm3vjCUici77XvcysLPzwVPRQvNNZQ5HVm1c9gz",
  "key18": "4oBGZf8MKf2QMRN6sVEW3ejugHk7ELMv95kQ1wtssjiu7CsGGsptBvp3mt6fYa7uwhfZ8xGhoEY4pjaoQxcBETaB",
  "key19": "3kPfhDsk2g85osfEectaDgPTx61jzjoqkmUxPXyfPqcaUYzP4DXE3if9N5c6LZppu1w1uzoCsCP5x73HR9eSAADq",
  "key20": "28sUDnFdL7AeJ7SqoowA7x9UG9kqw5K1B1E6c7pGFC8gRR697uZCzBWwiFnaEmjVQut6cuzkr2EwALM4hS2qdw18",
  "key21": "4SZDFefkcjg482bRtGtzD2dooDvv3jEtYSStXSa4QuXaptEWkjgLeN3SCStyFq6xUZUuABDHa72FFEpsoFfCAaGo",
  "key22": "8r4z28u2LUVQNotwB6fvZ5JAhUp3wFuo1Mwp8MteprT9se9Wrci9VpFfZsNb84TcN7Lb1pQyqeewEVP4oJE7wND",
  "key23": "4yRL6RDM5q5YVBLjreALJ3xVEKV7tPQYgy8riSWmLBHF1Gsao8dteuvdCwrnQ6tE9JNCULRATL8uCWZ3RdaPkiv2",
  "key24": "5HMdaUS7hh4t7Bd52x7FRFEmh9zem5vicun24e7ffRrpxtqkKTotuPfCDVoZz9pXWrwJfdyesJUCotP3HS3soPop",
  "key25": "hbo4GjxZfuNPLaP6Nx7CaPU7qAKhoWmjRb7rWaYx8RkkyiZnhAL3qtnqtPzk7mnxc7umuepsTxgQReUCeRu5vn2",
  "key26": "2eL8kTiSu2s37Uz9eXWBbApMQG7xK5ipzCwA9z6VB4JsmGSajQ1frNpDpNT9eF3fgSJZSTxMTtvhJNEdZNG5k2XH",
  "key27": "38AgUT9tnZsrkFFw1jcu6dZZq8r4Suz3YK4icC7qUjW2hRDUuwf5EpNqAiw3M7SkNTJHjXQ6RnqafEomGK6FZPvj",
  "key28": "3EH9VMSS96YDEnDVcPue5qELKCB8QH2LACwRRw3pwZry2Scz86XnPfrJJ77Uddu5C7kqpbPZDHMKtbzHJ8i4Ac1j",
  "key29": "3wGS6Pji5v6xmTmzXAhhxS9vD4aLGtbmkSUNjSxeBJC921bVuLKkMADRtwWmmoCpnAx8uq1Wb4ovEeShPVbEN7t5",
  "key30": "5rx3MWG4fAXCSHaTjfpsYWytxVRFen1MRGK7pnDMcMipwFpERJizXE69CsY5Q1jfTwq39ptqbi6y8aUhNvrGxKSu",
  "key31": "4qoU48SKjuBNLppe5x7oNdFnpHT9fzesgbc3r48UNUvcX1FqQSyFQfXabkNVNK9wTRrs5wvw3ZgvbihiK2bLiPUD",
  "key32": "4cM8PYqRkBFRnEyniQWmcJ9kobsqQfyUDpyRaACmbuFky5ssiU9sovJy18pxNt9yBW5RkygCYhubCYjYnHLPryJb"
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

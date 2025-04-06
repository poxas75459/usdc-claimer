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
    "59gL6928554nucpkhNrNMccSJS6u9mUbgxnRGVh6UbSB154E1UUTmLqzy5kYD5na4igUXc9ooXKNokftJj7NMfxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5okZPRrQuoDNXNJd8HXGVGnxPyNzmwGDx5Qf4KjQcgXLbSSK1CBH1d4XQa5DnS1rcvXRUw4SK6VBizh2ZsWTA1QL",
  "key1": "4bVbt5RiwYPJhM617LHDBVuDTxKfMMcVmXNBpVCUcTdEgtAqvMuMH9uWxntw2DwQ8H1S8VWLP8TmznL5bGGiCRvQ",
  "key2": "2d4L9DfF1N2pRU361BSThVJoP1UKkNGumCdV9TsBA7JcfgTcmMncCn7vq8ib9PY8eu8E4w9bFbX2q7uHtHBKFELC",
  "key3": "5RG2JUyvjKYKR7vhmhFMfUb44bRviwdWe3xHM2XgKwjQcDgtxTokBxFufdkmBABWgSY3KgvVtGWQfT4ALq5QeooH",
  "key4": "2RybYgKj5pwvEfCJYY5QgZV3q2Fe9GxckfHRHfsZtB6gvbP16FoPfvuRcRxqEQhno5UAhdzQ62GGW6abnwKvB42p",
  "key5": "2X5a7Xqj9waTbUJAadQimrPDhm45hQPfFSwn7NDU3KSNVo4MX8FCoA9NSGCcuGDhFuWEsGRaCM1fvRJFcK4PNMk7",
  "key6": "4tJEBvEvqx3qwCpS9EtvHfE6xNEjetuw7Gmtb7D8BZ8uvE6TYxu7LZY2KjeiMbexf3Dn6ZDRepktDRQzeb9223Nq",
  "key7": "eBZ657jrhH9UGaSHNrbgo2QqSm9F61RGfEmzeFtDdkYA1NzyjqatyxnkP9FjSpiZA6MS6nimXPiEyKBwtGNnWTG",
  "key8": "4pwPsGxcdA5XviGgLhNkYw6pbv2sAcCsGhQi5mRQosz2KVPwoCD4BCggA91vQFtTkErnufhwF89NG5ZZKHE3K3Pb",
  "key9": "4DeSrBbdLNHP43z4u4SRNPsbjkRF6KZZcgyu9sPH4FHMHPowq2LdJEBj8V164VfohFUyn27QrCbnHVGuk1q6BDCq",
  "key10": "2P6KrGZjyFU5EGTJri8gfwcVzS5VwRC8JLVQKY26WYebzYdLUAZ8aESAbwCFy1ajChXUzpBPZVGwS9Q5v3dtpG17",
  "key11": "4LoFkXT9P3Eff5NhHNYe7KhTBCNBwPkLEB4GXzkLagFXTi3Uf3yvCtK8Hs2P1aMpDkAV7dJvSUpNyuuvzarJvWQd",
  "key12": "5du7nikUXvrRLChmSeKYrpH1Smjf6z1VmpxbLmUqYRoYVmKY4jjRTRqGbiwv9JFAZtK2ERDYMnDqWLF61SFy6fBB",
  "key13": "5XHZ4djD4zVnptH9LkqNzLjBXK2AUiTeA6crDpFdBNNpkKzucQxaxWDyo88Lyoex6N6v7gPjFQFPFwii6GpzPh64",
  "key14": "2PYhRrZBrU3d4vQs2gSLik9PVP8QferpwkWRHM91oxgZG1edGc7aNgJw4o6o6nLDBrrZU3v4zrP2WbhiVG9mcGW5",
  "key15": "88Nk1jcokMczGiEsWBoBiHJod2Lk42dpBzBAycJ1NEz9LFn9mqLHgubtuho41EFBYp1PmsX8v2aHrCKGYK4tREm",
  "key16": "54GEksjz7rf9uWMM7HaSYLU5iD3L8gEwRpNwWsftdeiZJzSZf2Pr9fZzg25hywYwvZWUmR97AhXRhh88nHVTsz3G",
  "key17": "5o3iFcUJNBxta3D3vK9nkWY5Yy8KgmcugwFQEmWG8uLU5PXppCxs2c2rekRKW3R6wMN2Fi55HAPUrVqMxojokt8G",
  "key18": "2s11yqzWQ1gRvLcsfh12UuBCCCawTpqmQu3vmUbDiP1weG3SNAmneytN5V4TG4Qbmsa1J6mwVPfKgkU8kq2ffB7K",
  "key19": "3oGZajYx1K38AkRDDcEP3mzoPNKWehnF852SB5a9Z9JHGdMjAxmakP1nfbPGU9zWJUPr4bms69QUMj1E8pe62YJQ",
  "key20": "5jvLSFqeHu8YSCqWt11hcHyDVjcTzqinKea7dnCjYRHFd58iHCjA1DUNaFHX5g9wBF68supZFWcEgjbdZWLB56sH",
  "key21": "2xkVomBZVtrVG9reDSeYdMzk7qL18suw6aXorxbHmVj9HNnK7n5FxeTYVAAZ9pszrL7k1mmjCPEidhbC866m3yUd",
  "key22": "3P5cvUSYX1fxUNzxykNMVxJLg22P6sMxx5etSNsuGJ8waTeVtNNB9w3ni2gkcG6w92hzf8vqCgnYsedbXjUbeAGD",
  "key23": "EpEocKqBA5jhXoMo9cPq2HzAEdm5nWZ9p1Vc9dSKSiLWRV3dx6LYgqZyA6qRM5TRdTNhka4LLtP45Pzm79ZAget",
  "key24": "JkCF8bM9n8a8fKX9cV1jojDqX476H7GtdkLLf29jzn4GaXcpoWDkFQdWkC8Bpb8WgwcNgoAq4XP9dUC6DXCZjJM",
  "key25": "3uziPPcUZGss8pukYaQyJ1RoENfQFYv6ueyFEfERBKp4HdbMzNxLB5aezjcMU7bEhiVaYB1SJpxQEaBdQZg1jzby",
  "key26": "5qFdSM63Fzy96hQtw1GZLRmqJkKKjRce1ZR8UDn79L2tuat3TzXCJ1YTQzNs6uQi8qE8uzMVqVhtGZLEkV4Liy7W",
  "key27": "vzBfi32P95Szn9Qao8Qq7D5AkR83PTqbLhFstvD92aCDNQAk131CkbuxMnWfV3M2D5hUR6jaH8wnuQVsoKdZ2ad",
  "key28": "5oRmMooqEAZvkkPKMFXkyyyZm477gDdMbv36jxo22zdgtNG3NezGpXb5RY9KT8pj9n1iKQ8TDkejMcf7m8vkzpQU",
  "key29": "LLkkM39MJLXUirpPCi5iJkSXJaninR2ddp9sniYinFM2zwujtaH3gsqyHELmQMt4RqJ6XnHxn8jTLDQZDrk5DhA",
  "key30": "5pSqZpKabMxozXJbHRE8Z6Y834Lzx6nSqum6Mnj8LGZPnHtjpAnv4P4aBEqTs8uqcX7E847FiWyn7DTe7gARa4zE",
  "key31": "5AHzZkJ91YGNHyvXE4DyYMDKWxzbgVpwhVEs6BuNY6gZcizBwDnDKjtNhKJnFf5n5nUsV4LSwnh8yEWLcJn7FAEP",
  "key32": "GSXpLDYURG5VoCjnWw7HZKFNmMXNEwN9P6Jx3v67BevAGJm15TH4QtF6ms8jk3QLnEU1YxwEGkRykzD9EWP4xBY",
  "key33": "4t5ywfmKiP11EEU5JcYWrf6Qu9AhdPJGTULHe6yYbDFmpWfqxHuALmGUeYkRBjCpYoHoQYfUwamxQP4YrjtSG4Cx",
  "key34": "2E27SgqFGWbcipy2mEqsgLhX8SPtPyGE2aBc2g3hwzFpQBjuc3WsgEiyQ4DoQsA4n3QShS2aCSAgJ9KgRq4rxDq9"
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

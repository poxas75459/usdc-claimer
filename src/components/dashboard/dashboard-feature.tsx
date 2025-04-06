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
    "1D4jDVvdP5sNtTqq6DoyjTooQXJmKLVXwuhsaX3kGgFpkBvuosFahDCXuygrVxB2MEEUwkvCsBhTAsgqcQdXk3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuDfHcA35iTzaNxEQZ2wU6HcsWmJiUZyWEaFvjzS1QwCJ6jK6uatYGihRswMxEasrs436YvKn2Cb4cjcceJ3fy7",
  "key1": "kGQXGjAiDApSbUpHC5ZS9xgbukJbXPn23EDDDZtBWnXe8gUKj6m1GEtfWLYURZ4knZJ1N5jqrKLhVKwdMupSTWV",
  "key2": "2WHzCjqVQqzRRwKeFCK4GWfMwb7nsrYYYyPnsCy4mxymKsCExWbvbetKeBUesUB8vNMAPnkXRf1LWabszCwPt8zA",
  "key3": "5Sr12ggDn3SKjGJGirmn5ddufNQuSNfSsYKFW2rNoXHFFCsNATY43oeCstFjFqpePpwEb2Z38Lee3WuprteJxH1G",
  "key4": "beFZ5jhdPXFJVCmE9F3GtSwhrS1m1jyw21bj4mf36MeJXghV7DiW1PqtudCbozL3hXqH3RDGD15R4kSHdkSjntm",
  "key5": "2oHeL5Dg41ENjHx23uNKHcm3RvjxV2TAuyAaRpA5sMeXuNJRao5Bhvkf5w7oqSXVZCsEQZ2WuxrA4LyLNWJKvhdp",
  "key6": "2ASkygjhYuZWg5Tz5SuRMEsCUXR21ejkDc7QWGWhgx4YmsVLaC1qomRQyUiEsfQyM55wpn9npiJA3KtB8n2t8bY4",
  "key7": "YARPNg4eSoh8tNMVnWTr93m15jJ22zJTk4uV6ENMR7NC962e3iwEnALGxLtE9xWR4MM5J7q5NRBXULJc3HGKxGp",
  "key8": "21jGK3kgLcRuFjcnVU1VJEGUcZ3ciwU89EXL2Pc6guS2pj8F8qdsRGkwJTPZ2Ycra6WACVgVcqDvtGQ5Kdup8FQs",
  "key9": "51JxgwSDb5UQsawnu5j738NSo6db7YBqzh2SKF1FLRThsJrk4R4yWgUT9pwxkxcNmxVyB1xJwrHftmQn4KMm5FdL",
  "key10": "2d3ag21jqHwyPpymr3VaVFEyM4CaVNjkDfP5x6vJXump7PtBytiHNChjpbUBrotkWtFFoZRvqFiS9g7cRwdd4xnu",
  "key11": "3vPskVtUUWvwLhZqG6XgQJRXCpAopyZ8okQhFwQK2BddqYgv1MkwsC3Y4LFa88K3B142phuPFRAvZ1DwTDbWPfPA",
  "key12": "2M2jUzdWAfvZsWbK4TYwv41o7yUTcULL4GmbVjSBbheFPwTEWxcbzxPjLn4frrVdZTqA2ckRyYtDDfaBJv4njY2P",
  "key13": "21WkBdD1iGKTkESS4Vd2xG7HfRffeTPNNf5esQvQxWFaq2tqQtcYnT6Fa4GcifFmTPDv45UQVUBcQAouAfjXG2Bp",
  "key14": "4AoGPhPhqSKC9W8SBq8m3A2HjYteLXZD23Yt31hMBNkzwUFtxubBwtJLGhdAjn1Mfed9eUdaZeSaEMg5dPp3MULk",
  "key15": "Gej6SDxUKcCPrKBfmuLFjYrpmAmeFns1extKoUguujFrHXxMAffQM3A7Wq3CSfXkNJRaKWyPHvRQFBrB2WBFGYj",
  "key16": "4RDQrAEa9HZFCDnx3sHAUu9x5oPAiisp4xC4pwUyhADbRcfadXhY7DUqrNdcdTaxfF5UDt8tGYHMRjv2tVafJby8",
  "key17": "tpVKZi1fjHUrVFDfeneq2zwppNBhy5sbmAYdkH1qs12NU4sXq87QqCWTasuGPnpCX7prsSfhmLu8XRNt52NZ6fh",
  "key18": "4KtyafJjkKAg5kDo4ozPEDWWuZv8bcsnWBr6hfMZDHTjaCboPwUnqczEBDovS8FD3tP1XykU9ty5bAsBqJVEQ5JH",
  "key19": "2TTM5DLU295MsMeGRbMJhzBbiuGM7SLaBgAMeEGrTWbH2FKTHTH8PLChYmFnHjhXaLTA2EbobMPEXMZ3UYQ3WXnr",
  "key20": "5e42EK2LXnaUebirzf2gCpzpP9uoUTfNShQfJjBKLofAix1A4pRzWvUNA7s47hjrPaSa2rEQYyjYzmh3L61V8ExY",
  "key21": "4bTXRvCNScSQhXwjAgR9gJ7QoA2ZuJ4QrAhCymyszzHuYRMxaPrHokx1zYfWGrvZyUTjBRrGStQyiTek1wiKhHkh",
  "key22": "kh8rsJVudXgnGy7XNaSPG6y7THRXvqStGZe1HJ9PA6W5rAtPgSbQNPpkJp9WMJDMdhLJZn7QyX6QEVrB7LWhMKi",
  "key23": "4yt2tid6ckGA5a4Cy31UojYED3aZ4HtqiPTEF3NhFozE4gKR8PyozXAPRSxmpBAeL5PeKbdx3exavkUxDe8wxYfB",
  "key24": "2FNQfX7WMNoETzurj3PyEARPwvo5efJv6196v8GJKyZBYR5LjzBHymo3u8tEP8nkq3QvniJEsnNuEHPGSdRHCZ6W",
  "key25": "4QBH3B9qEAk5M933QtzYoHZynTnP8KQumq8AnLzCpVXKvYuABcSQzPktQgTRk8NcMYLfR7gHohwjfAnSz9PjrXR8",
  "key26": "2F8e2D2y7Yf8QC8yfBNZj8rAmyq5GszA97cG7qRUaTwYx7yXVT5jGgbwuQ6jLSYjjHjfPaG3jJW2vjyZ1osgZFLz",
  "key27": "6pUwLdPArBxeVsuh7gDz8aXXSMcmcW6asrTAiknfdkn5HArDD6r5pLP8NrKtPYcBDPYjDbxdjMzSdX6A13kuZTK",
  "key28": "43SJ8mTzPdjXJBTub42DaejX5E5gvKB6sovbKyyq7aMbDJZjP3Msx7ahHTmrcyfskAYvGqeNZQR3QghFu8ghYyyJ",
  "key29": "2z4dbokg1kKxEC9ZSvrtTq9bJPiehiXdZLff4oPTkQ3eBQ2aVuoRKGGBkBeLA5AortDuR5rdzFbFi5WsS1mRKbua",
  "key30": "58t5BSj1PKWxDHaKCorSf2AC5NX6Nwq2aqGN33z9oZyERtJnDLzNU5xoXsdp5z3HTsHMAeyC7pajEEn2cXYBE9VW",
  "key31": "2cpPsiHU8jX7XqFbLeRU14F9KqFgkLCNK1kdnyavEsiuQsBi1JXaCMgpy7WNmjn4wKzzt5CHZPQGviZ5xGufmhs2",
  "key32": "3hawXbciWJfT4RZ6B2QaALwdVhLmYBiAY2ogKfGU6ZeLDDcvCKpLajEk7C6HSkaB1jFZFTGZTyr3VLtxb9f25kBr",
  "key33": "62vwSnYnwpgD86MUwpLMzER9oK9QgNBY8VGMaq3vQQkLtqDbW8ZnwVrpTc3K734YpwVtMVozMSvvMeSjDYYvuYG4",
  "key34": "5V4LKLjvnnTjS74GMtatZ3psZEs54ApQjLJHM2E6FkLHHmdourvKCzDjMYbPigzvDMKuamwDPbnNkoXHdbA76uq1",
  "key35": "4xuNcKRmabiGYdC7JgynV1XdbZFAtnUvSq3NZEYk5g8Hhghp2215A41kv6LdmHHrEqxRb4iNBEFfVjEZp4PWf6uT",
  "key36": "5862TA5krfwBXuZ5shQcuJ9eYupSNMmt7w2WSLkb1Y7Fha5mXZ9n9dh9kHCMpKy1uAtGEWr6z6K6RCQPH17UGUge",
  "key37": "4Q6H2y2SkHfj2xHtmjka59EGXkDMPKJZVC9syK5uyU4t5U7XQz294z5PngNwewJfXUFioZaLgFrtVFEsYaTRnFTz"
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

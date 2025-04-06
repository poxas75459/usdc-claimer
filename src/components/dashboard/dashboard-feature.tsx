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
    "2ogK55AWdwz8fmUDLf1ohbfdb81WycGWChYHpMLerhYuH7PpJX2C8AdwqJGih537iQGqFQZop6fVWDUertcJyrD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zSGScYZbNxYfKfhuDWong2vMzYFjsUtFSLjnmvwsKLNUww5xuKEQNnJrVZN6Yj5LiApWsFVbLfbetbuPNtoCLf3",
  "key1": "3dhrGLKZBFLWNZEN4EaTMbF725DCkFpgkyAbbmia9AyRfS46hmER9vD2DjDkGZDVSYh4HVFYf4KBBBgyZiBCe3dn",
  "key2": "czCiyrfhociMJaYVp3PYnrxBqx155Foss6WpGBNq14ZL8nyuYvu2BUz9vRcMt5QuT9Rdr8bSJbyrKKtfjqAxHtP",
  "key3": "61c8Z814LFbZcRaT2phYPAAqiJiGykjd6t78Xx8nZn4XRtAwihQRuBWwosz3G5s2TrBc3ascNZga8DvyTPy5M4KM",
  "key4": "3qQDAtKKL58jWhWbk4DgVemyRM1R3C5iv2hH2L438JHfQC7L5yrEdjtaLMx5iDRg4MpgLJgGvcPMfWt1mzRKpmFD",
  "key5": "1kkamss7bMRAD2hKrdHNTVeCrad47eKgp9Y8o4AgL4Hp789js33bQBwpoEYhhHwyFnCetXBikkCzF5EjWspGja7",
  "key6": "bcdNoRibLWi9kEcusHBMAKUJFoQ3FCEwsDRWMHNQpzfz9RmfqCW8hkTuLJ3SboS673cjUdBzJGuSUYhCdwJt4UY",
  "key7": "4dcLx2u8QXBYiaUzWoz1goc5mRYw87jKYcNgKoeg4oyjoAPj82coSNkShCzzQ4APgaFCkqhBhgXoDXj8p7nYamkt",
  "key8": "3MVqsAxBdRFtyu1qzqq2ksXHfdvzj74Y4mW879fszZMYY5XTHAfURrS7mMRUgKGsKRcj5QeXTgxbWgVt73ZuvisC",
  "key9": "3H8inF2hb8X8AmpaezfyEdz2WGQKTMHm2ZKTBiu3wx9PDmWpKMcXkK1fz4nXdtY3ZHycxtpxVkuSfNp8DZTFw9ka",
  "key10": "Mm15MF17tzid2EjdrKxkj2YZSiYkoTHajj51duMo8LaFAgSuHquh7chFKMJJbs2zxXCCopEH3zjTuTBbvTGpKnW",
  "key11": "5i6Gg6Dzfy7WWRrkEiMvAumqCGJBqgaEyvnUR2fQxPgJjX2DB46wTbStCh5EXUNzH1r5KNtaXkk8DzzKeVVZ6os7",
  "key12": "q7phyW2WtKHKyP5Ww4cei9WXtNFMY2HneXFjG8k3Q5iMFkSZoEHXaEwNqLwBkH3JbNxpjiJxX7MjJR4e1gEhrsm",
  "key13": "5ipMbLzx7UdigCw8da6LmnfAWu9gSN4pjd5p9TqhevSYRuMhCAok4t8yxkkZfhw8sM6icsdV9oRRLvCzTK2ASN2f",
  "key14": "zFjmJMQ39BSsTvNZDPbawDvj1kXoQDpcvAEZLhA77WYKj5CFqdpwGfJamBCh14FqX1632hTDZCQ8x29JSa2fVn7",
  "key15": "476P6RBUajjnwbuPrbfUatYNMd4Q9PMtdXjaaaSGWsiAHzP4qdPXN36T4UgTMQyu2ygdLtvimXPY8nN7W8BLNUrr",
  "key16": "4G4xGgat56STt85nj8wgdWYgTPNsYtK9TvG3t5trdv7dU9GB8DpbKPC1VHz9mz2UKcoYiTD9Jw9cTAcE6KRwL2G4",
  "key17": "5w2tZgcPmPzRqmPv4RUuohdwhAWtqJDehsnjWuadTEDp8xQqhQymdfZsVHRqLJK5qUCKwczSPRrhnMVcVnBoUBYq",
  "key18": "2h6kUqUhcfLYp7onUDC7xgrz6rJ5AkkqtosK1xxuoLfhtzvEXUPdTrnJND3HLcDeWx56SJUuqx4GKN92m1mCcc2",
  "key19": "5qAFbxmMrPP9eQsQtx9C72CHSSQNxPynHD6vxMP2W5NnUE9JcDhiZEd8cs3d1afgtRYGComE9JkmQETDjfLBHLQt",
  "key20": "3Ws2rAuE7oBYYYXqA7XuoSHDYN8VCNhLySEwxCQhWVqg9o3H8BK9u3qrq6AHmXgotpcujsk8xJpoih62Xwy7J8bJ",
  "key21": "39boccEVpHCGxHvnL9XubHjaZZTVt8YRxtXktMtrtWZ8QfHSvGAriPBdtNKJvU3trj2YGWeqmhro64keZLLmz3fR",
  "key22": "4riuyzyg4STbF6rMjd5UfsN7brguEB4qLjSj8KcMEdHStjg9vkCCLcCw6UXzyf6UKTGcVVZN4jKW4WW5kSPvJJm",
  "key23": "51qqZZioN54QXWmZw7Juw1x7xZHsTJsbWwczPup33S1jpVtxcBWSsC5YK1JDGgUu9XXzJJ56t543rnDi1oTJdN5D",
  "key24": "35CDsZTyuqk2a8goAwhAiuLudeadzEs3wss6oyE9YNYQ7vdoEtJTyfatsDduYfGutGCR6a1cVK9yUUThEZmhWJgv",
  "key25": "42A6KLs3WZfviWAkah5oggmGD6Sot37hmUpYL49HBGmeAe4NZxXuunzensgSSXjBmdv2W84tNB8zKUC7zYd3jiiE",
  "key26": "2mMhYgegTsAjmfFj24v3muasH7V8mW4Z3PExtmPAxC7Rwxk9RsJ4Ng9tvHaFKkEnWrVUNoxMjRo9vxdpnuUsC8CK",
  "key27": "TENU3GuaRDQnMkemCybVSnS11iEeRypjcukMciMCaGjsC4YwUKpLzLVatAmoyCegpjgg64KpHgecDqfH4efu8ii",
  "key28": "3bKP3dkBpwcXeH4CWrbuu3CqkkfguAvw9KgWoBuWvrsKDDLF661Q6813uQgqnmWcQ6edWWcj7FkyfDYDmEts8VE9",
  "key29": "4g4BGwfXUKSjJhakAkdLA7wxH7duhXFyu9qaNWy3TPnkquPH5o6887krzQb1N3X15s7wgknvjiGLWNsTxHjQQZFy",
  "key30": "b9UiHgQKrWWPh3rL5aRbmjiTaaEJnJMwmCRm3wrkXHCcrnFD6ei7hUEJwoFbd11tF3uB3tt6DW4yXnzMKwfCkkh",
  "key31": "yr1SBLpDecUdHbFWfMmkzN4Gc1NU6GiBTW2HpajrEqk8egAiBuv7u6StjUegpMcMgioA3QZ2ukHYSYBzsAP1Ezp",
  "key32": "2guGyJrXcZQkAkTFK7bWcgxzm85p5KaGn6VTFRucAG6p2XZYpVsjB6oYsjX2DNmvLVAvrqMKMUXgfM9bDBWpr9hL",
  "key33": "5oV5Fekikh4UHWrh79Ka5aBKoxbS8bLC6KSfGBmh3cz4zWun9PJo88ubbcNk7PtkpCTDpbJG6R6A2L7GbHgM2vxk",
  "key34": "5d39i7yh6Ed8T44WLc3bsf9VYcfKkeqY3ynYVJZ7WdKpSA65EBGMQPUPASQPFAt7jVw9hGAVYN1U6Fy38ugiBBzF",
  "key35": "4JPwVWnWEfwb97WdZ4w7KSAwCymrYh56yodHnNukCUbB9ii6LGip8Nht2pPq5Rg2KSgfRzUJuAbmgruEZXKPvRd6",
  "key36": "31YovSzzidTsFMsUxKBXjHsgC4v6P9tDNRBgDQcAisLiW4J2MrsWofj96siW7gCb3hVzeBx4URreCg5uP3f8kXDg"
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

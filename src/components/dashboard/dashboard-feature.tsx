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
    "Rd1n524DArDgr4prgECT7Q8bGtjYA37F4eJABB4Z78vWyUk7Aa9FunKgTy1MpxJWrBgJmqDDWRHcZxS1NfZsi9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hpVwtYF8b1XQmLfPNPGyE1d7oDTC7j1o9H1pqCApRABzN3JUU7PiQ2BLvqrGsKbEDYn4fSuyUJ7SLmNZ2hi3VXc",
  "key1": "BJtHcWASZio3zy9CDSWzY2vuGiKmokMubi9BNGbXNpqLJ7VEtKinNmG3rikXkRXiccCt1jEmCGMWqzKm9ovmVLT",
  "key2": "3gVuy99cipVpw5FJzfwm9NGq4GaPExdaTvcFBy3gsqmppgDzKKKWLH2tcuYj4iTG7XTjoc34orQq4WaCr7f2n5Ad",
  "key3": "5MAMhUdN1zZv59DXqkeKWFBZapaJ1UTioFB64UXK4v5Au62N93cETpPyJXJLKmpnYGrVZ8KGXb8tKWAvMnm2a9JB",
  "key4": "N2U97tokM97Le6cXTNyEYGoA9jdnCwoiFM2A4mHSyiJNe2Egsy2uocUVzdg5wkCZedCxp9KXSF2vLySEfQpVaq7",
  "key5": "s1FDgtXq9JBGcfZzmctQMpeXivAWJnkJYo9sU5RdKgpxrT9EX2ZEVzzC2TYL2jQRA92FeXQbsVneCPchx3XiRgr",
  "key6": "KteZgTxALFcoLvoUpv2sxXKLMd29P2teFP6Fk9EwkrL4xwAVYXEKoi5hj4TTMFwsHNHYEirLR9xDM3jdFyBbXrS",
  "key7": "52M2dtEEJsvF2pry8tkAF8cqtPq1vXKjc197BuGf7nkSGbnR9DPRhCBvdsLmae6RGYAvDnYSSz5ahmjfMgXqaHTM",
  "key8": "4AgZbw5CBCHWYK5w9zB3R1NA1U5T5GCNPx4V6WAG16H7qeUyePWo1Uv8Ff4nzc6VrGhbEqkUytMthm6d156m4koe",
  "key9": "2tEMnCa2UYvpZoDhx1a8pC9Ci8Xhr4nFRfG2CELuRKvkuX7C19ub6qJ3K6jXkGbA1RjwFhyLJ5TewxgoWJMXqPmF",
  "key10": "5qrPH877oUUvZ4UA9j767TzgQgW13knvkgWeCNYdVn9KhE82jYiCnLu13Jv4aNMQSVdqc52eaNyDeSpqocgfpFxt",
  "key11": "3BX9VqeAzsWnHYMfAemjWqPDVCBdx8aoSdcKqgDCcXU6TacGFkiBPNz6USmqxScCCHpt8ecYJHMm1Q6CCE7dwuQa",
  "key12": "657kwh388YeT4NzhtXEcWX6CbXCnnXNHqVAk7oq2ETnkexQ1XqNgkPe8GAjFCB5XTQTdhZzhuLzvrKCUQhPXcE4N",
  "key13": "4mmr1KNJ8QN1oorGxNCR6f4V8KGQz4zmxR4MqLNdZRQSvosD5VaCJ7zfuG9EHw6aCHSM4DiEbdNpyrLDKNQZB4tq",
  "key14": "U4s5YGWD7XHtDNF1gptqPdw29nMB4tQkJzcrCVJW3i7DWynyFZVfBUM3HHwprVmB2CSasvCKrhp7ff1uBqUGFPg",
  "key15": "4ugbQBG5435wJ7Uhf8dwwW9TaYJfP249z4sYEkbntgcRCXbBJRcrjWPYbrHpYmct56W92vsLa3cit2tYSr14XCYj",
  "key16": "4jMCQQU3kQ778gq7PSZeJJNgRiySgHqMeWMJ8ytRZf7A7kdmGXvfyn4UqGXmaRJ5QB4QYNTbp6MhYi7BHqNu5JrH",
  "key17": "53UAf8JZouM13W28TiUfhvMFmYwmRYXV4M7oYZfBwdeMnvdbU4ddzw1E4HJ87KsoMtj2mmwTyL2y6qFSvFRgRQcx",
  "key18": "51sHftsoXjNdvDTuHjUqF4Cmx2oFygGcodmKxCudDcJE17i1uzsyQyNNquiTCsGqc9yJMTGLikVMvzXoP31oyQpQ",
  "key19": "5PRCfXqmtHvw4b5P5D1jivSsM98smLuY9N9b7T49BqVBUbyvXAWMbenjUbAraC55XFVf4qZmRgNtpHTFQLLxoXBM",
  "key20": "4njbbcT5XjZnyN9xC3efUBQw7yAeF78kU8SKoMTrJ6p8C3HecZwtkEsxtMLBzjBLavtgZYRsqBeFctciXWexnNXt",
  "key21": "57QTXAKs471mdPWCr6j1dMY24JXkkZY6CbiftbRX6nZYATz48ouxyJW75NrjCncqfhSwDMoqYVHpr8z9ELqb6TiU",
  "key22": "5GTUwAZbg4i4uM5YDSreYzvcKtvVx51SGV85QiDyyL6ScxLaqnayGf8ixhY1KkEp2QdoMKM2LQF28qocmE6TxVKw",
  "key23": "5JbtVriPSMZhWhExn9L5NyvRpPpbWY748rcqhUWY285B4byAk8ZiSjGWwFjKVXp78FQrG5uafUMTi35GHmbXDosV",
  "key24": "4V65yhZxUXeJgyvwTEeuexYyiRFhsTEaT2aCRYjYwQqLxUeyjmD1YGcVMuuefkR2YYR5Gu3w2EtTYRDJ8zasJYgC",
  "key25": "3YcHozepg1PsDfy1oNfUUZpRNaG2KGAwRTHMie94vX2iJLJ9ZUmVU4xcRHL2nZQhsXQdiKLoMXWTQYNsLFLYYrAM",
  "key26": "2HWMGQbeXcHoBteBUdFhf5nZHbhzMdqwNhJkLPzNBNDfTrRfMZgFBxqjE5kEdAQuMJUG9diU1Udhb16RQRtSKzqY",
  "key27": "4CertwyQZ1dq3DTKDaM5eud7S1u5bEfZN7VHjb5ChLeTaVd8KKzEcXgwV5vwYGkqvFjQNFxtDNr5CWJAqSdJAW9S",
  "key28": "4nUd89sv8F9jvX2bJWUaFX7XDY5E7BrvfDnxG95atahcms6U56brrjCPMWH3WCWLE7eWCZ3ChkvfJoHLkTLpw1fi",
  "key29": "3pxAtbyXRGjEeCE3NAQv2jKXBniPNKTFNvvNKhqi6Lux9e3H75tGzqHanf6roWB2AXakkpg6NqzcAC3ABamR3rLx",
  "key30": "39awy8LPq8zkPSMXaTVny84q2yytkydDHj7ciD7kzMjru6MahL9QBdWqt5ekXqXPsgAPmpTAYqpHL1a7xuuCzXAn",
  "key31": "3SoDTBiKQNtMnqyFaTY53JthmYhkybNYqxGDBn2MkK661CUd1oh43BA9fNQVzV8ukcEEWLPWHTPfU4CRsszNUJ5A",
  "key32": "3dAjYsWNqVZPMYjqinpGERM1hBaf5xY8wgnkVxbYumKYRVKrWqEW7zkvqCePL9KTfq2JTXcuY2ND5AyxHGHnxt91",
  "key33": "3HzWsN8bSzk49uFYNZvx7TpqCR3cjuFgbNnyaCmfH5ZnSi95eoTWUB6uUzc6CsUC2eVSBawAnJsMmeU24xvpkogA",
  "key34": "2Vg7josdA9Kjb2vz4tRaQhcn66yLYw7pNgeq6LjdNHFTfFvRwi4KMqW3egJciRnZhh3SpfsLsfsu5wrPPVDouGMX",
  "key35": "fuHt7g5XqhZavhxEdrpWuMs6D1ncamRDmzdPS1J27NhtdnhKnKnKEaW5Am5RSDQ5YHPt2at5coT6nKJ88c1Jg9d",
  "key36": "5wqesC7133o3dpNni3SVwZ997dMcrTvmwerjWudjhdqaV5Bjs9XnCrHu4BhdPfHUcUSSU33cPhVRwmNEMMPUKMMq",
  "key37": "3UW2AmtbzPmJGHuR1Xu6ZMQvKmd8ovqFvp2y2bWyYvMR8oTr7beT5Du19Npguhgoz4wWkhnM1k63XRruYBt5b1ia"
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

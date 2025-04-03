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
    "2ScxPqfgVxo38U2uAiNHkpnRfmSGZkvoeKyScp8KwGg9oRfFPDdBAVnchRZQ9hLGzt6ZNP1tiAziYnqaXkSrqTPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8AFyR7p4GcS5ojQEe5LT2iGbLEU7MPobKSLZNQvUAyXcVRzWfwPjN8aaeTa15jcgTrFt13WHnMn1FHnASyT6rG",
  "key1": "5H7ajfUmHLkGyTiVhPNoiUuhXqUr3TfPFxQsEqJNtoHKftHgbxZDR9KSfyxFnGhac4SriQc9q74Mpa1ooHaHwzWc",
  "key2": "4zhJTnCM8XUJkV8eAiEwLq28ZYmtpwctyQyhuzaZ95QtZnb71C4RLKgcAjSC4LhiDx7JAsyJCg4htixfpMinfL8x",
  "key3": "2BA2WMVdWqzEzqRZcaQHn2SFFnD3JTB4USD4v8mQQTgKiPLzcGmJ4XdKcktPUK1dt5kSFhNm8S2Mvmtn9sKa4eut",
  "key4": "Ci77t9qRQtSb5ZFeRDRpoommqvE2FbvZh7H8UFrecCxC5cYnXjpVstAXVvMdt7Fbcj1mUAZbHLokAbkX2KHZDNf",
  "key5": "3EJhiCt5mFPxHU68L8BYRabcAdXVZKSfBZbstCoUZBZi5Htjf1tLEFuppniEBJoXAA5A5MdQDJzCnVHSyTeu9ejb",
  "key6": "LpLfV733XPcK7mYXTtQau3mBTwp1ZUwFHj7UGB7zYriptFuRyhZ9Cu8k3wghv32sfspWfEZQ7Phx8G6dC48CTfQ",
  "key7": "3eii3qLQdMW7dJEa4nB81HACg23N2K8QebqbYirreayMFhhcsFF9mMT83yaPWnARJwNMtDaWKDvGxdDcmAy6E1kd",
  "key8": "3awQEEnNcjDf3rLsp9h3aEpBnw16RWYG2FAW7anmMcBxxGUieq2gGs3tQhX7fmNGrf6wWyd9gQot96LUzt71oAzn",
  "key9": "NHz7Qy4tCCtbtpq3kzRRJbvB4z4p1Acehf8fnAvyh1Y9W3Ekg6dkXKdNRMZ1XgetUCnS8en4yE9K2LVWYwjonmH",
  "key10": "4GEpzk6KEG4PA9YNmbzFLM29i9w4sd8CJ8dszXCc5yKGuAtfGh89cwFgh9Dn5cYE58scgiSp5MLTFVUSosCxLf1a",
  "key11": "4ZJQpAJ7pN5XHtzdRYo2h4if4AL6tEAMacfFkQLxrUWbTT9VNJ7TD9fjQCTf9AcZscTj2oLqzWxM7aropk3pVjBT",
  "key12": "4EB1xHmis4gVRtBTzkvqNuookzUUTob5yyF9MzuoQZtWtmDyq5WX3uvAYvAZJN9QooM6RLkh9LorBt9DRBvBJDmr",
  "key13": "63zrPavSbYGGypoVbqJ7ssyaRyhTpb1h7zAkg2ysr2FVCJPBafq1nnDhxjPbcnjoLHRW7LHRLk2izERHYfVTa2ca",
  "key14": "5jNeHgHg7zNkJU3BYJscf7WZVMRJEdWHn7KjmoWLmjdaZ4KLKLzfSHFGHCGmvBznnojCyJq8eeyVAfv4vQNj14Sn",
  "key15": "5sBKVFhLJcPy1aLd6thxbxTX8F2krLc7kcjfwNMuTiei42pWoTpbaGVKWLKY99xk72auj7ZtyjvBJUFbCvYgaBNx",
  "key16": "5uXjwbvXeVPRd7SMCpEWyinP72SF4b5AJFtFgtaAjneRZUiAk68yxKTtMNBxDGopqDQ5TFkzfjDjKRTCdx3LN6h2",
  "key17": "232pNEhfKZsAiBF8wdF8uqFzm2Cw1aFCmjhWthaiYbxhKrWYwNvN3oMwsgVm3aXEVTpmo5XYqmGRfyGzRSAEawKW",
  "key18": "3iA1vg8dEzvhUXF79nXgqFmrQ27LrfQWMRbUapbwxzWSNjRwNn44EcZLiQdAnVwBXMH1Ji5n6LPqJYmAuHhQgigw",
  "key19": "5LTPMtYtBbuMuuCg3nAQ9H1NNKjxGczXk5ENovKeLs9vTpaLQsVbzQVLBFADBYnGK5AQUvJtbAAsyrcg71Dj5w6d",
  "key20": "XhomTg69JezN1G8PRCMQmhNQFHnBHBLfAJajLxz3E6B4hsRiPYC5M2xhHrAczfHr1KrZycRi1hUndAFAgyt3BFN",
  "key21": "2RRsvQaq65Ekf2KSrcSc1rw3J42cCxuiBPrZkgGvDMNABPFgfqm9Ae6oJ3XCAmoBTRFLyFxYDwjQhPybvW8pCxWK",
  "key22": "4VQQ8g2YDxjy5WLGxijoaoNKYMFh1rP7qxZ2z59mubnsBU3FETgoM1F2QqETJdKoCdGBo1UvPaM9ovsTw9JVz4ja",
  "key23": "5nQ2UaB8QvoVdLc261j8jV47M66KMFU76f21NaSFxodfVnoZwAyjw9J8mJCTHEKYjNZ1TrW8mRvnhZjVKGUawbsE",
  "key24": "4waKVwEiJFqsFKesUU2nXSu61vocLGY2kJhKVuz4jsVRKdpn7vVKK9vd4mVaYSdr6YZaQipwt7yu8Te8vg2HsG21",
  "key25": "2rbxGvuSwatYj3rqwXjkDMJF3KarveDks4QZUbJ7et9VvyCwX7tMKG47xGGePe6ZMbrjekw9hdHK8eiqYPnUdHgE",
  "key26": "5mExuMSWW7TVd2c5W6N42mRKTDHFAPWZ7UJUv67iPs9ao4SetBztFCpLg92XWcTCKDAcdLpFEeuMq7Dzq6E3VsZd",
  "key27": "2x7E9PbLin3FTtAqcbnNxYehkPGRzyRd2jTd7mXLPLippjUMFD1yFMcqMKdHDNbWgykYPzgCVPZhhGp9rCJR3LeS",
  "key28": "5hD9zJdrPYFjJYbXTBW9ewPcfPGQE9to6TFbF7FBTGSvGRpNeUKbP9AyJe1XRnqfoaHdxMxY2CLX2NKqPJ2dP7aC",
  "key29": "AQTtzEXjgwgg3LKiuUzPe7yBmYdoRbBZdFjMuH5wcFJ7HfKuWg7zx7915SC6zgAJyd1NtZ8q7ezk2Auddod9hgN",
  "key30": "2q66YTtsH64pTkvDqF223sYXWWiTzPtqx84ANamxZ9ebRMYaETrkhi3JUfu31dLsXtRKHvFpFyC4czwnxjeZmF8C",
  "key31": "P2UfcjwtWHKrPT2hi4xFdSU6KmA1yJPBRqcNp91YV5B4jNa4rYbHq1jNMERWcdgbb594kwtE3crgzp3aTWP5aab",
  "key32": "SeSoasBwRemDBdSrzLKVMeTXiUg8GdbYtyGejW4mkRhufMwQUdgS5QFuBe8EMn4S8JNo5CrpeCidguVhPZA6L8B",
  "key33": "46fi7cWiKpzJyZou9rrRAX4UeyfNNqFzBQTb8KYVSQLyrU3f282tFt4LYHp2LsK9LnfQKHBTTxBJVpQnLMr21haj",
  "key34": "3h5y6XnS73oSDqiAKRRHYLo5f7hF2SKUiSzfJxHj3pM9XNbmbfoa3ezeMyU1CbpNR7xqmh64GQu1RVZjVuRVS2Ac",
  "key35": "5x3yjJc1jZ1uGQutKDiheMVi8XKt6oZGUXy5FaGXDgNrhdbVphkJJmwVf4YRPvwVACedjtwntB6qKxqpfpjUYQJL",
  "key36": "zgjQeeMAVK4RnRAV8NtrdXuP9m1t5opZdJoeo3cNfmvdcg8hHysEGVJbZ2AXT27DZkJfMTR4j7ZVUAK9hTie4PP",
  "key37": "d41ByZ4oyEWDPBGA2LowtJtGyzTAqFWm956nGiFHEt5HmdmD8CiTa732xboj1VFCKE8iecLADyPcwvpJnfXSiNe",
  "key38": "2NogT6UgAtuHFjCHyEA2YniBMTFVwdtAEzRLRCBVvQtk7rkviPwuTKJSQDnQGmYB9vRBuF4wBqSP1jAUJLGXGm1u",
  "key39": "2d2b1MhAuTzQAM1j1p9nrMzzcSmCDLMH7KrVNN69Z6ghUcQZrz1z3orcFCpVCRx5hDU2EpKXA9iG6auUurxzog2z",
  "key40": "2VANHuEqfh4CqD7qFP16vYeYdwudwRTUdsF3v1sb4JPiXpuWsMmioJXzxVt3D3yvWiwvxrS3jonc3PwDFzoGyb6k",
  "key41": "5eJgTx4xrceZ2F3rZwEG4PLd1t7YprVFP6UGeAYSgLm9TkMia6eHtZqP8TW3494rwPNTN5wUy9caNpe25a252cPa",
  "key42": "KGDPfzohEXRs9V6FPzgKa8eAgHEoMcYkAfDbJTS7aHh2in8YGVbcYafDvAcuvP5UGSXnRC7Lqi1iGdPsSRhm48b",
  "key43": "5NJaZzn7UPf3JEyZLGsRbnJnHc6sPFyNjvYA9H2w1mMFqkR3dAjth9kqbbnguUiq61Q3L2XvS73nryiqiBUrJoqM",
  "key44": "4WWVNPZWB554FdCj3VkJMym2YBFCj7EZAARqCUsFnMRsNasS7wNoaTnFirHE583NAFTq1ggYsPzQhSoxRz4rQyYc",
  "key45": "5o4k2GW59g2TPmDTn82yCNQugHSwk9guqvffrzPPJupNmJ19QqPjSfFz49CPbTsvSTiDvUesDfJ84buxgyzLzMce",
  "key46": "4XxUbxMFf2Kefk7gGU2V9TzXyUUFH5X6gQafZKspSS5TV3x7YcoqW9V2N9WFTuNn3i5F6CmJQuyN9KrJqacxnnEA"
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

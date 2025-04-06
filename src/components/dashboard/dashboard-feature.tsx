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
    "V7f1AdfUwPgpsC6TxGm1fyMciCqtPEqThLQ7JPxgjqpTGV25rwoK4mUMDe5q1qWy6dedxYdfU9gLXhPHqVFyD2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64sMjpSSDJxCnNaNSnt2SQHNy89j1Kmj43hm8mdZWsC6jkaDu83sYASYsHLch4SpkBRy6WZAnfHt7agaemdx5q56",
  "key1": "3dez1VyDfZLGwV8sjvrBYN9ChKjx14XNpLoreUa1Fx8oigN6ccmUTNdtqczDy4MWq1S2n4CoJPjFkAHzcEkQJuJz",
  "key2": "4JYb4k3mBTzd7LFs6YRRLZU9HhektcQ3ThCYio6khzvbERetwqAzsqqjkjpmUgZfSAwCr9j3tiLgxrD2yaek4Han",
  "key3": "62514sA1EfwuwpCWLD1rAYEvcrd8qobrhLQ8SReVNcmRQ7JXW8f6T28Ab2QK7qTsqz3LVeXxP4xktzsw7x6Ch9yJ",
  "key4": "2xKysQTinbBBcgoNoJML7TSVwvfaaFprqQkW4oTq27xjesJvNz7Xrocqp3VW5LNwQEttG1xyiJsixhTvuzYZDqBq",
  "key5": "4i5nvMQ5fVjr3z4a2U2NSJqtyA3YcNYSbRrN8SFUrLDM9PmAKPZzGXpWqKdmp5aG9YTsxNoMycYCgCNGsP2FntyR",
  "key6": "35s8jhY8pktfxveX9XowFDX6XRpDvg1wNu7Kb7ThW2TNFhMcRgFW649S7L3LbbXT8ysCQJgfUgpDugqHdMnkcDJa",
  "key7": "57Aimbt8CgbNpUuULW7DNNnGWS3hA3jM1dhUVdvEqwYy9X8z4joqgP8hvtYRXuopK1bt2NZpTv5PpvsKkaFML7M9",
  "key8": "3muxs2jJzFfZ4ectHMz87vdneQzA2mrMpbteyFBnsQ2YoatbmSt7GCXt9bihMkBoy57Y7QFtudVYJRjFJN9BALTw",
  "key9": "2duen79tqHkpPiSP8aSFC97ckq5TtMUjDLh3XnCXPYWoxGvDXTDmtSZeyGB4RGTHTaMz5A6warp8mf4nzkHvmP2V",
  "key10": "5pGStrrneEWHMtAbyJJc9VHajWSrK7nzCBrznFZAiBCSAfi5USb3eUwHqXMVWX7FJJsh288Q5iGivp73ENpPAERW",
  "key11": "3h7BReYyYVKBNckFKdNB3xTNcHBa6FXBBD23xx5qsNNySWowoPMXiv9xkv5L9GZvnb4xnFSzLxGZWR5uxZcNRP9g",
  "key12": "2MUMF4Vto9e9F8o7tigYjR3j8NkRfvLXjzFpcC3vCbqCBcnp6kbgfN8jHmnSptGkvMVh7iWeeaRFZTFStbRKHPRD",
  "key13": "3vs1xS4TzPBobeAjcUf2LNxAfjpwEtXBAikNPtU82nF2r65mcKZRPMRWQtCNVdugo9Wie3oWnDkcVDc26QmHuqwd",
  "key14": "21pHW8FKSZTHkSgZX2wRo42WWgXbunL1SZfSeyRcQH7dnsouqMkvitsyKx3mRAEZvfH5mWq8JJHs7sX3f6bQnFqk",
  "key15": "R4uNaCjJkPtz7yaoQkTvxGbRuP1UbxLDRqANioKgSZCGdNA7NuRD6ygUHao9BRDrbUd14UmUWFiNRkcKGaseKyq",
  "key16": "DvDEikqZFMek18cSNzi5tjULaaZzTuhMEQCH4sLmPihdWZCQYKnwP8dg8kbYXDviY9Fn7uLdTmwvsvgbCyKzmVD",
  "key17": "pLK8jMVNVP7w5psjkyEKGZzFkvpJQN6CfeJgnVfqE8Q9Dz5iHvV4EbqRAXMZnhVBpa2zdSF6LssYMETRQ7VETCv",
  "key18": "kEoM2DcUxoSaNP52fjhMJytQ8rvBcmPMKdpLhkKKMbdNzk8XBJbnZo9PKXCieXE9oqR6F9d3tKhWrXvzrT7a965",
  "key19": "5DCefqCYF9DQJRvttniBEf9HZFzMb3eYbnifTzDPLpoKW76jXHit9QNSYdTJm8ubVXduMzK5hzGKkPhk8z2SSkJj",
  "key20": "5EvxpZjsm17QTkCunFrUnT231ZECdgsFQGw7n1L8LKtqBEBrjfrroBPhtGGouXvU3mzFcYXD5GPA8j1kW6SdNccG",
  "key21": "5w3SPk1gvRzzx46nW74bAcYNx6yrPyRH6GMYReitCKhJXwm4StdTEXZMxCxcTkGwH2a9eyoVovi76pavk4rYLgmh",
  "key22": "2WxZTkoNfX7tH4tQ8cpry7KgqSUEykPVSd4gPv6FcoUK17AxmBnqcCpPw9xwsAJeC6KzcyZExuBwdGa1StjwFenr",
  "key23": "5Kz4xWwuHQsWYmDiLfNFYxeugebpMPkA8yMYTd36Z8Fsjfc5wgg4RVvf8ovyvtd6U5zxk3mX1R3JWPrFvvpmRzkw",
  "key24": "4JwnmCJ7fbgg9F9J1Pm7WwJcUWXHW8Y4kAa4A1D6h6pC7m4J3ft2KsywEhyDmMSysCkd8QNH7Wp9UGnZSQJ82XZX",
  "key25": "5KhV8i9aoPfZsChWtRStx7Mq5dcyaLR5fGpkphePdBadsWH3zzY2P2cZFnYJwUWse88DBY3Jq56NVTSAqKamjzZC",
  "key26": "5HeMbBL17iwFgwQiLVABckThzD5wYLXvdGpJxt9h9PaFM9a6b6AtSZquUtvfULcS3rULoonNDbLHpGUiy9bwosmY",
  "key27": "2otKpm6rnAV28jgEpbNV3LQdDcRcZ9WUNtq4KmSfEUhg7T9ECNVtasg144EZijK959Jf4dXgRhXEJXDTHKb6xoyy",
  "key28": "fBPYsD67xhB3EhWPpWSUzvXPjNWDA7rw6dFqd8xhQ34W7hML8V7riABUtpnsyvre6HQoz1S2eh89ph1z9UaTXty",
  "key29": "4NYABiuqiKgTf4JVhwPLMHmMFpreaKaatrahpMtWbjEVVcRt4V8CjQGKgDFnDoEV7h1yDKjBs15VhKxv42pTkZ6P",
  "key30": "5RxCaK6MGny3B6kZgkdda1ZduG6DbKVqjDEiV88wk6fgMWdqyeBHZG3TtvnCA8u1Edy7ADMFmtnny6wXLauUAwRV",
  "key31": "4iMYuaT9fy3X3y5J8Ez3REiepViNbssJEahtZQ5AWdaZYbrreCQvp2F2592vZVJ3YP1VgR3gNuQFzgB7nCUcwhRP",
  "key32": "54GtrnBsymNzc9dnVyQamhttEm8b72qfKugMydMHkUCavsX4xzYcAuRT1wtDsf1wJJ3XF3s8yTcHEi5PmLnxpFZ9",
  "key33": "qQHbYNmJRsZn2G6hrXyGo178GYgtUsYQj3jK8MFpqmqbrrTBP7NrpAKeTfvW2KVBBZGknddmLfxAg7J1dUYbvys",
  "key34": "4ysj1zUaGcrTmxggkG99FeEdn8SvtLryCuu6nFkn7h8mmWV3oKgtcmfygCquRsWDmKxZ44BwGDdHhCWGtHAnZsEy"
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

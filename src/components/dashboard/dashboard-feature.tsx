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
    "3J4AK7Msz3XVoVww2eTypD1QBhQYja8GakX65z73wGNAGpv4hxSCjhVVSsYN5k8KoewZazbPSA8ZNraEAAi9na1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kx7CfhzX4vg69bR63AgffmQnkhtVsc2C5MrTGs7q2o45NzMzeaMu1p19pt8PrxjjchynK8YvQkWie2SALfVhXDt",
  "key1": "38CptSrpQwiXnjrA8BQsXbBLBUAtQWRLQuhF76AqpUwN83fwvkhE6yoKaXKKDnFQ4XW52Q7Zw9sfWFJBseuQiqSd",
  "key2": "4QT9CPTJcfg6f8NZGCSfBhBdWefDmLviWjpJFm8Vr5uuWiiVne4pKL96qM3nHZUocM4L4SBqV1xvqGoLvdHBFUPg",
  "key3": "2Bc6TXNJu1XASHmLWTqm3iDTm3kdUpbNyT69jsLjeN3xLGGhXCb4Qz1nqix97puUJBZiBnY3hS3v66pYTHSDkrdW",
  "key4": "2fotE6FH2M5rL7yBockGL6xVWPCAWdTDkNv3jPFfLNawy3j9AXTNRVv9jVasHHN99H691fSqGL51X8HNpjXNTNaq",
  "key5": "nQvaQoUGSos7UaS9rBTexn4peRookHgXB7mwWBYUYHjMNhf8M21xHnvrLrLsE76VgZt228mwv27be9o8BtmdWP9",
  "key6": "5LduSqRdTWEBGHYoQv366zqBLuEZo1XHjqJ8GG9a9R8ctLZGVCXDSKS1w1RHMonGFWQd9M5GiFuVi7xRkD2mJz21",
  "key7": "5QByHWMYWnX4oPitpfyAovFrrBsyBZXsK7sz5bWA1tQoaHJ2MVYe66Yw8wAkqkhBFPK2KmsFYAi8BSUBweDdTcyn",
  "key8": "2KXPfHeEVB3X1t9i1sXJfBjf9Gos9wf9u7HSktEBhtkGJwd7HdTgQSBEuC2EArxYnsJ7VYwkzE4Z8YScFGxrXQqx",
  "key9": "3tTizMhvgeT1E4ynD2NbdRNtzHG9wjWqV9KEAJnjRGYm1spjkmb6Q3LMaswKjTQDrSBo9ruLvapqwaRSt5oW221P",
  "key10": "4jwBD6GAgkFVBMffX5U4qtJc8Bq5GQhYoXopTF26KPCMKsga6WAbum1BtV4VZYNnp3vx2D1ySKw8BLEkiUVFYSA4",
  "key11": "2AhA3vT2HitLspkc4nCFNXyW9GeXagN5uUsksQwLofZf1u78FNirhPyZGvZedm5PRsnbQztP3AxhkeGMLAvh9JE9",
  "key12": "2ojsVJzFJ3yF5MeQnQjs5ceTmHBR3zgs1z3suEKdRo1thWCo3fhzBFybYZs5a9LDGnxqVdwJoLj4ym7CAUYGGRR9",
  "key13": "5wNvKvHncudLzHzumBAXonX3qRnaJQhLDbB7wJTweiqVXoc1mQYsjHwu2oboQRnjKRf4MVKF1H6KnAYaHdH57Zp5",
  "key14": "3WK7MSGRZzJjfe8KfbnGynMx5YWDd6cHcJ4k1Hr7taHfJ4ZvQyMxZYdGukGt4onoMN2tLFVnLfjT2hmDMMrKGbUq",
  "key15": "BwBG9389935w2zXkNPG1AdDybeicoLCBfCH9EprmE6sDDobRDgpzr1qYEuk6buFGEMPcUJktw1zkLYwCcDa15XA",
  "key16": "3RCqKjcSQabhauQiyJhsNvUoqrU8yHBWgMsgq5vdB2KR7SsPLQkFAWukBCymmL19VE7u5i8bc4PwNRvWcP4umvyu",
  "key17": "3bBXsDURM8kDQ62H2xV32j8FRi7Hr98F8upgdyEsstXzhbEExrRvnJzfpAETgXqNKK8H9wcomTMXgh1H7pP42JYN",
  "key18": "5XrrbcF4wHmV2T1SsmsMCxfzLLVM5UFj1hkMLzkKPvxDUTASD8oNJin43H83AL7f3BzFR2KpTSbcX8GdxabxRVpH",
  "key19": "635Lz36v3oB6WnVSyY7U5NYinBmN7j8KUZBEBfh5MqqAiRvZDU97Lm8uhapeYPXa1Pav8fNkdF3ANiJye7SzRi1q",
  "key20": "3wZe7Rw8EcAYpSiy7YGu9oo2QrVCYWt6QPddDQUneri37sNNUpHrJBupgm5NxF4yejqJmfSiPEWEm5G3he4aUTPS",
  "key21": "589G2V5Es59KkviiwWhBmQEmzfLFmjKEiEKFWMLsGYbZDXhZ3DD8ckogDa3oobbtaKunQVo26Lmiwrr86LQAg6nu",
  "key22": "dE75GJbgdvTno7Z8V1cMqKXadMsMYrNcpdWxvAbRna3vwLMzwdjX9h4UtsyWW3K9c7WsCLP4qQBeHy8o3tdsxdR",
  "key23": "4F7ErKNrLGwPRRXR3fKMNWR1QJU47XMGdxuEis1kY8c8GzxENCdzXrCicSDtnteyNtgYGN6K23AgWEm7jFh6KFxZ",
  "key24": "WUqReP9xgbSQHt26yNYXMRGEfk7NKuZtnQj54NWq1RwVMuKJYc7eGjmoqXNJ3P2XUNSiBnWF61MmarMYRM6zVY1",
  "key25": "2UQZC3CQ4MQMV4TF2DCYioNAEEe7cgEjxY86Ray4sormwP4hTa8oPLdVwmbGU42p9frRw9VAyWLMBAqj7zja9vrY",
  "key26": "3WqbRrAx4zznVAtWgcyucjuiezDkZNdzmu8oLVHhYrTKzxCF249VCqU4C5duNNvyoKoZLdZ1gtKTkSmrmrVmvnmE",
  "key27": "45sw8VKSFZbzBxjbfLpDWExt65UzVqNMc9TWu3NWiT9DxtbN63cwVKVzBLmrkaXrbfUE6Dfcc5k18GzhGe32JzW8",
  "key28": "iDECKkgUXZShcUSWj8Vm1EdEs2HF2iCUmZzAdtG2t2tHLwvzP6MdcvrAoHApJh1BQiJSq2fJ7F4h3vuc7RpcVSU",
  "key29": "477Drm6w5A28ShYabw6nRrVYE4BaxLbDcYFQpLjnakbRQJxc1ambEPth3YJDvMnYYTiDTt65eyeuFiDZBnvXGwkA",
  "key30": "21eg7nHQMnuaxM6htLiMr1pioqqP4htYs7pTyTRZD26Xn8XbYuzDipz69RQUBmKDMAaYjpNv6F9sy5x3TpJYSyg5",
  "key31": "xgL3z2KKTbFGfsCNxHZoExyk3HWbC5LcFdvaQq6MvreTGfA1Xt3NgqAk8LMSb4euBrK9oZeJkHBkXA8ajxHRb2c",
  "key32": "3M6QvkkpEwcP3Q8u49mQQQDUqD3Fs5cyMqjhN8D8ipoxoh9QmsNqmEz6GJ3niexD6ogySjgKuQCLQF8U5EgpehPk",
  "key33": "9qeTT5KSpSdaU8NN2ug71NVZ2Rfn8BfJZno3YPPFu8qiBJTFFhwg6Yr9X17vaSK414mftdVn9NaakNQmoRygc5Z",
  "key34": "5R5t4kMHLqEBHmwPTbZ4SkA34VCBy3SS7XbFugiJMXCXzojtGkHogxTkv2R5nSeqsCpeHDjJ9cg9dLRwoGtpJJP8",
  "key35": "UwLBDkHRZ3Mj966g6dGB5hmZLN9RBHKGVZPtAbqRue99SoRYajsiia6qLQ2PcbM5Q38kHYH6J8Ni3aAG36Ti95P"
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

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
    "48GSkHjKraAsEqDbPBRiwQXXZi4NPdq8KCbYwfUtmgy7HGw4wFKz5Soxh9v5EfBEQRvS8qBVak5BoAxgRJBxADo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AwC2rTERJhhJSq6Xn4FFTB31bUHdpD58gw5dZ4zTS2fwYLjMo6z4EeyAPqhKv3J23Yf859mtamPU2AVfmN5LxA1",
  "key1": "5WciU95N79N8UgQqY5QTMj5G7u1RYt8yRZjjDTAtUfyy6pPC9u7ge6bphNkGcv3c8S6Z7ytTX6Eh6mWkXFJnJQiK",
  "key2": "3qr6XXfjwvrFP1eteVDPQUQJ3FH54AZjU8sPAnPuk89Geqoo1XaYUXU5pvxUP4ACkKGj23hGeDJZcncqzGz6bTNy",
  "key3": "59Mk2jSpdjS8Z2R1qrsRinR7vejsyTatJeedim4Fakxyv8RPUru4JLUa96kte1Hsbi35UBWsB5GorQnUZx4jEgav",
  "key4": "5kyx6avDAkaYwUbqAEXr28N86C2kHUCfPDgiFh2Ay8BREeGYChT7Db8G4M78wmfLNww5WjXiziHqpPtaAZDbPgEi",
  "key5": "4BZRLbqzynfUxMymuBDdqojczF3fg8U1yva7kUrdj1prLRyBcmwtfP5NFAhEacBquS6w5MDytaW398rNXX74MXuD",
  "key6": "5t814C8FVKsjtBxxYx8xf55FKbHemnqHwa54ctcoMVPgsW5S6W8SixBtGgkTLxFDRc9C8eJE3fF7RstkyMBmKLiH",
  "key7": "biMHUipvKhtSVJTaVvhp4SBCdtSZdBTSW6dek2TrviMai86ihDyExUMJFbwZ4fAV6mJQhEMQS5dwutaoqo7hoQY",
  "key8": "5LKtcGfNFUSJJMq8sFsFjcfCX9u8zDqe7AedvEFhfWncksbqKG2LKndf2NK3vsZkkcXEFp1HVRbA5SkSUqoMXY6u",
  "key9": "2B5yNoD9L4V2NEXb7ZyQv1nJCZ3vkeC9uCAMexALhwwEtLJBxuav8VT51Jo1AvBVsQuE5HYDrPoUR6RXtZzz4NY9",
  "key10": "267hoqaoAgCsHByHYqfFeBdZAF3troCh8tPZ9PydCXjR42vZgvNxJek7zQU6Sz4LdFDSZ7gCCCuXfxsZ8NPhvSkg",
  "key11": "2MygyBVjKYmptwbFmbwXUvnNDSyWy6ZQ43JdjWMzYiuML34YfvyT6AZMog2jm9mHMi1gTv7Yttt72zq6ovbTWdeG",
  "key12": "3XtqMJfg1FMryTgye3tKpzDD22Y4RQ4bznLxhHvV5fX9ATfCKs56Dj9PVFcZsiZn6mjL8FpnHAkwZ22dABtBf863",
  "key13": "31zGZysDYjnsVgk3nPNMNhzTwUc4rXuuWtCedndLSJDMzK9AD2vsMAN2LmZnVZUoiVQ9YgxubcpLLZrFajsEzSAz",
  "key14": "36EpTiSWbjUPw7d3MLDpKbWgMLjiV2BL4FLvrkjFy6NyvTGTrVdoCDDeH9pxC5e7iA1QZa3rL5Fq9SywKmC1L215",
  "key15": "4hFPQhdq9L3XFYDwJbNvzMnhhcFpxLYiKgFqQvkdWCx7rzZc3xHjzNt5VH9nFJLRgqGyvfobSpV5hUdahDH5rHWD",
  "key16": "4CVfVgTefKS5SvV9XU9tSBVti4EAe6o3uVosxnqaRcmcceUje8opG4orHzEvSno5GK8cNswPT4roaHWPtZcgnG3j",
  "key17": "3AxfPKiLLbMYsq7wFLAUEPXVgDtxxsvKVgf3BkkUuReKDv9ucEDFPqVdvjYd63kAoB2ggzRSbRCpLJ4D3pfLN62M",
  "key18": "3LEywon16bxwTq2MuHzxxe1sYHgr1VwQoG7JiHNxKtjRBsvJ3nP41DXP8SCmUQw6zJ6j1d1J2zF3AaYg7Gb9E7UR",
  "key19": "Wvexsd6K8mwEHvcrsCDvF1Nc3MRLMxxiCQ7w8AHgB2KrEr9zagzMfukaA29v9FRCA1av1xwii163Kq4pj9mvEB1",
  "key20": "52ryFhJVLyzMtCRTqL91PoCEq1jgA9UvmPVzc9oaDNDjsZk6n9uo5a2b4D7tV1bmLyiWaXkDDF5toaVtoBKZj7dQ",
  "key21": "5vS6Rr1WZL7xq9Swqy89TA9hrs182a1kXVUXdja8zCbH3kAq4MJ1KtJ7eydsSzpmreU4aiB49bgBg4gBksizsnfg",
  "key22": "5tjF48gfrJZmX3g6oAPJea2JpmWw1ngTQM8UuCu2TUoaEj1KwNrDZjfkJCFizx3RMA7F2RceTrDFAgg3nQ2fCEHX",
  "key23": "55UdwHP17YkTZjnDNLqnXDjnyoVbWJV8rZWGFmHDteAHgZLHypRTVDuAqpPFGVvKx94nMNbq9NcAah2ZSiPy8PWZ",
  "key24": "XTS6YGyZTTGR9j7rGV2njjw1WLjbpQBnNMf4vkV4eMoSgPsJ2se8q4cwjHoCvtihwXgGFGSrX7KHrqWMhhE2Hqs",
  "key25": "3MshfaUDskE4d9tbLMXZXdU3CCFGfBhEAeyuXiWazrQb4kaixbmzhVX1EDPEcNqaH1NymSK9Jmq7A23BAejJYtvc",
  "key26": "2G13NtDr3AhthQYoiC5xZydJBEBFyRzKjtNvW2HJ3UfivGxHHzc87btPZitnE2CZWw2xW3ABeLbeRpKrMbfB7QNz",
  "key27": "akYSedPghAyUSKjyL4MQwy7Ar9aGUi7DEoCq3itcLSeRBaoPeTFTybdFVbny2z4u93M5VNcaNPeosnXVSTAATdS",
  "key28": "5r5fBBfja2svD7YYoYqD6pDbLbyRNZtDy9t2TebJgxiTEFcAmDpM9REoeukYTeie6E6wp7No45V1sYqwQwBLySgH",
  "key29": "5TBU24gsXUFVbYW5factMaypXrCVdWb8QdCs6dNvBKTGoLCwXn7TnWF8oLAA3wovSHoqVCmsGkd4bhdjm7T3aJyH",
  "key30": "e4Qa6cjgVYrJppiPNm1zkY4iPP61Rz3gcb2HVTTJ9a4z1J3GCFFmzzLAu6FBrfR7SnenansaXT6VAHj4cnn9wJd",
  "key31": "4YoK4myQCzMAF6whzhjUDnZ4Er732GDfRQteoqUSxFR24koSkV5QBY1KkLD5Fs6DaLRGQwZoNMCqjw9t5hQqjtoa",
  "key32": "2YhqQpDJgTmqfNTuYn2oqovLvgiUMa5kqhJ23mpv4GiceaJWiuGJc1DRRWRcNFFzHRh3uaxsZXVrYfReiX95JJby",
  "key33": "2TWfN5N7ZS3Cd5yXTkDG2hUYv6KxZaVvGA8hxdSUTaTjrvh9sWGysTksgq9Q9CdY2bCUKdAHHYdSKTWdAKhRFGwW",
  "key34": "5Kqm1KTLi6qPyXj8HUursRUKVxB76XgSetQvnrWq8ATwVVgmWDWjG632pfAKiVf9hoThpGkjYnaPCjYboEbTV8Ek"
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

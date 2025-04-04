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
    "2kddbevXH2nXTvwqTZvqFRDpBcy6GZE7T7FtKzFpxySXQM1RziYcw1gcecF1YTKX6E9mWrAx8uTXeZxUAmXLANF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WZnNxzhjjRH55A8hZLonUQy3BUcsKQTECEGkx7VHNwxtrbX8MnUWoKeJC2h841QyFTm1HPP3v3zt2AxNhCz7Mni",
  "key1": "2GhybZHmoSyEetLB1LmbkRcj7FASg7t95EUdeHcAQSvFYmLj9pDQdTXKaGckjJJttquKvd1Gt2W7szesp3uQuTSg",
  "key2": "2tUChwg3tT8W4pTdcBjpw9h7HLnvzhJUZLx2TCYqMAyYBbQYyGZAZbKRjxQPQZAM2k8FsoAJBtipmQqoDrmK6csX",
  "key3": "UJdHRwtYk2kZvLJSP4VMnEBxXcjthYn9FjAgqJSvHkoxv8JMYUPiKof9fQNgiacQXEvByxVp2hTiRm5SLdF15Aw",
  "key4": "8M2LT7aNiXxHBX3nhevNujyndmG3VEe4BSY1Wi2TUhSGeMh5u26x2a7dcmKsU1oAZ3svPiDRNUz4Lm9oXKRwTGQ",
  "key5": "DNsLN6UiPuXdvSzP3tWDXseNeZoJiSXsqPqJrEwCGpvMwvJ41mqhjthfzXWzscA8NVPdWKr6R891mq29iK69qz9",
  "key6": "5JjaNTBHm3bcarqDJ4269AAy89XWNrBkG3iGTLV6p76UkUCsn5T3hkMWssRBDYDCdzd2j2qNxUpxp5au5qCx9qA7",
  "key7": "34mFcun2jZYNmTxYZvEYUpKxcDMA3bZTBnymgN6JPodgmNNyDxNfo1eBmMknrAwFuwKXworNcfhoEMJSZWbu9iCx",
  "key8": "4wdN66pBFwTsGdSXcUiJvZ3Dw1vJ5trHrvRBtzwWzpr8R6jbe1EKKHpHMV8yZ3qyvURCK9FcoBpm3TbTKXF3G9JZ",
  "key9": "2S5kt8eKZ5BdJJ6FzwRvF8ASoM4vLZ9hCpwyK3NguoDtyRL8XsgCGseaU2SYXW282CDqL41dBetYY6oACipjkq8n",
  "key10": "461AAFZ5BX5T7WvvfWVooUokx2NTb4XGUZMvvYN9pgYx9zW5XcpGZnkjVVwGaZD6PGYE7ydRTrJB1xSZQwW6bfju",
  "key11": "4bv3sKBKYPgYx3C9dMyj5z39Mqs5N2fTCRarMBjWJBTPN5zN4VgRew2UWEVuoy8Pst9a4jV8S1CeFsGhZUAH4BiS",
  "key12": "NFHLicDQ8TsbGuXvphGpicNENFHr24NAfoEELNLnM5GGddiENb3ne4EYSkdSE3EE5ENx7qL74WF5pCDouYidEbN",
  "key13": "5an1vECkSFTnZNxbZiG4mXPsKpKm9YZnH4hwwnWrkummkKqamSzpixA58wCqqcp6QT3KkspXaoxDb6xn8v4f32Tc",
  "key14": "3XYQRjNm2ETDkngGLBEVcRcLy6Py4BXiMdu9X53J2LN7GH1C148G7tg1QF64ybnpKVGr4NjUu1TQqNzbYKbQcUr2",
  "key15": "2CbR2jGRxutryN1JX54bA4tfXfyE7UZvMYxMeekA2TKtrCeNf1EwLnJifpTArx2mFwzJHgtFtZJynSKAxp6DByyZ",
  "key16": "23mk1w17Xen37feBWFoV8CcekcbAxS1NA5NJNEdUKAXjqmWfxpbjPDvmd4cpumwZkVa9BU2UpDLKdEPj93yhtoDV",
  "key17": "zhJwNoD9BqNyJQ6eBGGqjKFX6xVVFen4QcheMFMmwdFCTjRZZMm738kg1F5GxkssHVb8mnkY9U3PTFs1pLJgXpe",
  "key18": "5XWePHXzTNciPvFvhfJcNzQf27KU5vhCW1WsJxy8L1dBVoDiNoXJZdv27ZCB94RLYk7feSW65aNEB3rfjjwnSzmX",
  "key19": "55pmHRfKg1k1FCpZhH8P87KAbwD1Kis7WtFqxSsz1nATJYyHpnqTwWWsH6PqNtYgVirFjNSgB63StBsFB2X1eijG",
  "key20": "5wgsyusyNt3TMEYdHa6Lbfcx4v6rocHsULbf54yYv16kMQnHPkyszAgNC76yqkGUaiS9FgfbkhL8SaKsYeozLU8u",
  "key21": "45xm1DnxFXgrSZbdx18XnGbZV9iFfKFzE7N8nWM7nLVVdHDPTsuCT5aGxHtR6pqJNRQPxdvr9mt64kgazxWYjv2S",
  "key22": "3c5ZcE64gCetbLhK38GmoZf5q6Mv8gpFAju2vK8gddbiZaGf5y5qYiTXNCGY4ZnBCxfKU4WBFTep4SaQiKHVVV1Y",
  "key23": "2fW8HTULKrHTUzfthFQspaNFLewp6UKinePufpCJrBN9EvT7QHu9az63m8nAK3hSi6VCuXhYhJkbJvVGag8Z969h",
  "key24": "48rzguqZMKW41nG9Tk8d8NU4Z6nEcwsDLuuqvCQxTaxL8EU4HVZpa7H8CVJjSiJh3i2GxmPHCtAGrgFQLkkZ8fWa",
  "key25": "2cmRC1wip4UDFCJK4SB6Zs8XX2nAzdZW4RCdFS6BXicLy4zmrhqcjbzUCrLZJCBKQXNK2aN7L4Jj9JHrPpsMyvTe",
  "key26": "4j8goQK2yXBQpQ4JGpkWLqqsYTz42dn3cZayuCSv86VSpgC8RACLiMm2ZMw5XKvzpVVrBuGVSC2H6YWPHwGH4myJ",
  "key27": "3Yspq141uS2X1z2jMA13Dkg6y49bBsZmMV3j7GtamStoGLYbj1VEf9jKJjzSc3LoyWxcD6iud5PTgB13cxqwrsSP",
  "key28": "3HEqoGpnpksJrn1GUSbZne8HE3KU8QQv8czEGPGbqbg3zkxgTENgPehGJQBchP7gFgs6mFcCTzgJHagT7SGnMKvs",
  "key29": "4sBDb9hg4xwRvHpbKRtVxiL5tgaLRedUA1axJkQA5XTtGePuzW55XosKLUXWkcZahxk8iA8EAuoqJQGTistRwxGr",
  "key30": "5gEbEQrgAE9yNbKANzVNUXohMFfcnTXmhh4TEEBsiWbxrKsPLH53kfzDyHqC69zqb2r8mtryaGL8JZfEudjRRjc",
  "key31": "7YLS5XESknbJhfWtKUYpbZrw2vR4WW6knwxR7yx1d89WzUkVMBWpZ8fgQo9WbrDJA5CTNZDybgn7UPTsyqFP9nH",
  "key32": "57SMzwtyesW7QydUuJGF61cwheWHqzeq6jbPMhn4rJ5eExC37QVHU5X7AUfDqx8KeVWdpGmvczAgc2BEazuQXYzc",
  "key33": "5t1fQxYMn2orsAGPgt49Xv4z1e7HzPQpHrK25r7QiLjrNNUgnJ8greqTdrqF9HcwaUooVWe2BzV1kF6GFVY9NsyE",
  "key34": "3igu75ujKRted9mv7Dne5EzzmpwcNpkgLNn5b1JgwiRQr9oBgyFazmX9Px3dYtAXbgjRxrrK6ouHew5PKoZ2h6o",
  "key35": "4p12pkj6wWZ5FtJqJAcwztHz7Z8bwFhSDuNxb96msEjt2v9DxxHNgY3kCQjU2kvHej4tVjj8PAuDpG1PKMcVhAHk",
  "key36": "2jpL41jqPtFGrxXGGHep6xAkqBCzHEdncMueEZStbDMXUav9TzHMMjhRXoZk5jwtj1xwQkUM35S3tddXZooZDuT9",
  "key37": "5tzBbq3HLSaTFxobc81U8iQWHk9Bq1RatnEeS4Zt3G4yMBiiuYbHv7RxWbxjYkLAihX8D5dJnDWoqn3kVr3JxR9W",
  "key38": "CGVoX5JhKp1qwdeBrkyayFWWV3SttoZ7ga3qpmzRMTaLiiBtGksXjx1u9zYyB6M3qGAXzzjLXtAcJoKBsqipo53",
  "key39": "26DZ97UnPVYN9nfryEzd9TddUrRUdcCi8evD4cyDtfFzKH9S8UT7yRDMAHaVAB86Hyft2nNNnC7yZqGcphg5ajWm",
  "key40": "26tfUQvmStMc9XnwE7JtV7ZbXzuYEkF4cbveiLxmq4XHN1qyovy9y3hEsBPSbTNBQSjj5N8N8FD6eRV2PxzXdDe1",
  "key41": "5MRaZDRkxWzw6NqvQC9Zr3vEN4wc15pgNjsVAGLkb9Wd5czzrUwEEN6vacTY71Nc3VfK66qnLspY41tnXNktHbny",
  "key42": "vZDaVXARZGeLV5Gx9BQxosLJn9tjPXLMuq8pgkj33LrvYLCrmyZ3meh73UJzRGG5aHP8xPJCG1R23Ur5yPDfqqn",
  "key43": "G9RRoNkeSJuy729ngjK95i95Wfm2p8e538wFQBkHRg3qSEsxSNqJG5rw7tzDBjgUiUVzvzjMmdEk9Va6SUQJkkj",
  "key44": "22WzC71cseNvLyMn5wzutYzqvxJTeZigMxLrNUHq6WWWBwuh5RCNwJEG6CqkPoBcQSkyYETvFRpw5FppGsYfDRZw",
  "key45": "4ap514ipkaLuFztcUJhqieSHUioHdCZs4XNxBtHRmRKzTKkym7QpqLjqGc5zt8wSvdkKrutW3m4ZMVPMHmxfi5uL",
  "key46": "2zipeEdwyE5ExhUHgXgd93nntLxWRFCCRiQrCaFBhcuquhfK7ni59uTZT9WwHzBE92ih8f9n3z3DaWQ1reCBb8sc",
  "key47": "KtdCCdg8SChUA2zZFicx1Q75poE4HmnWvsNnaDNJ7NXG2smnAB4SijezrGZkJ9iKQNCoCCU3kM7QXPfBJohGFH4"
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

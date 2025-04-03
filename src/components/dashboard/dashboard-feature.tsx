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
    "AtNgLANTgrEPQu1w2YWFCJAjmgktPLmUZ3Mbu8TQZ92YDhcXZ3nwL96Nnb4nmFKwr8W2Wcb2XuQiu5n2F5sFb7W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vv8YG2rwwiJTdEg6e9T3KiUqXt1MXzNqmMU53hukrCF957aYTj2h21qioLaQpT2NPyYZWKpcvJMZfVxpFTHp3uW",
  "key1": "5AxYkM7WLPJaYrHHFmgXBdJEEmdbLmWA7aEcofSnvsqSpApGuFR58Ruj3brPsEwTbxSn8vacmmL9ZDJUW5JzjBbG",
  "key2": "3FxcV53c1qWsz2u5jqFkE9LdpoGpRHSez6vL1tnX4v3rb5q7245usJVucANVvE1hXD4TDvJVz1wjYVUg3ZmoxxXZ",
  "key3": "2dPZMuU4iYWm91LppeNLaQjUUdRJ7oYJBmHnCweJwqRMsPrEeeZtvBTB9DBZHC1zappYyBvddAyvi1jmaEMW9z3i",
  "key4": "hmpur6nTTMrXBNqj1Ffdn85h3wDNPJX7JvYPRYB1B6wEcouKteqVAz2ct3yHbhf89CEK9mQTuvHDuTnXWSsBXFK",
  "key5": "277MppJL8sioPSkzKpjCc2iMm2ZE73f5vhrV2LizsNR1KaYqBvrHPuqjm1ZMsxSwZkwjryKWceKXphHfF7BZuUZY",
  "key6": "4gbMXJdRoHp1RamSR6JtSwdqxjqqEWEAtjkJLz5j8gnbGmfnyXpxKnG1FCA4i9jr6sFStynMTbM3CcH2CGAXzYdY",
  "key7": "53NmFfY6GNo4ZVtxFurVUD3zQjV7AF2DzwFzFxuSPCqH1XijQdme2QVS1ZZXpBsEMDmKU4KFP3cLUXMBy8QphPbw",
  "key8": "3PvT8miZJztLhbrvPTrpGQuovc8BKhSxiWHNb5hqBDJZbUWhCSGA7D4w9w9XmKvV3c4mM9QJVrDGrbtcRRPhBGKC",
  "key9": "3oVsVmKqN6xfc1dLpRNsvexU1xB7EjLUBxM4mSwPvYXpv5ionG7bc2VRHSgcs235V2eLMGXcCdQknen5b9BAaHcp",
  "key10": "5x393YpEEzZR6Lz4ytnTfJU6iQVH134WZP5XXsKcguHmme5g43uBzSuoZuoMmEbLvfXZmWo5YwRtcyLLwaFhGBtt",
  "key11": "XcfcF1PcrnSCj7gRUCKrxTzwFAjgmP2G3GYjuT2HPNftNPy5VobGM76rCZ46x9V5Z6ftrojJW58S8pzANQYLzmj",
  "key12": "2zyEN2hRP1UDjjgGGotUMDjKWhULhkcoJk7ihzUs5Zg8QcNADKbCFTwiLkZ6KBGtoNajQJJFwibCCBzKmwu1wRew",
  "key13": "5NY4WDzt1oVjZaT3112ReRSUFzuaULsRuFra3Vo6PToHNuAErc8rRgdqJ6AzreVnaFq7PqFp5i33FT474NWMa9pJ",
  "key14": "qCbKqMJ5wJKFPdoFzAk3yRFNXkcuhBjHV3v87rdn2RdN4pTDSaKYBWokgk64LD9F95NnQvFu8P3SYsreJcB5pgt",
  "key15": "2WUYZZXeiqmMVhNAbP8W81TzSatFhqpDKsaFsWu7yQogjQGRgwhkD75KCNvM17PGjdEDiUo9RwN2ydUN7ew7jbTk",
  "key16": "2vkEgkC7LyYwZxxif5qtHS7sEjpDGJQNgGoWURqLXoTAFJ8GPgvEfZTw6eQ1PMqhheTaatRFcfN9zfs2rmkvGj9c",
  "key17": "5Ng3D8HGy8AKrUukcGTqeEzRMimZqD6rsPbnm9Tu2Ypzzf9ab2yQBCKEjzcGeBRqUnQaTTtzcupwBkzNM5BC2r6K",
  "key18": "4R8ijuGq8PuCqiY3WBZ3a4pySKZSQQvmB9PL3mjiopDMi5bbkrxZsArT75Fzj3rgFQL5HJ4PFwj6HCr4zkGwNp1x",
  "key19": "3QY9QV4oXJiLqPjpSKBQVNJ4JoZKzQBbrrGX55vbAMeJtkomycmsoBnUxQhQyzDWVqid6dBTdzGz9V7AdZG12H2X",
  "key20": "ssPJrFr1MmbYcBWP69vyZSjDNHV5R4davdU4Jw3WM2dpJTNTHDWCwvP2X3eZi81DE4H4WCDVf1ZzatuSuXC848q",
  "key21": "4iqbGxMViCMz6k5AkfEK4FH3djBSC1tc3JQ36Rt1ybN3i2uAiMvhe4dBnFi5vu18Kg1PYpUEj7E6rY4unCFja1Li",
  "key22": "4NnUt5HYWA7H2rtxQEPsL2mWDnRcw14P5kKbDqPU4sgA5CpC5gTLKApRiS7waxk1fzu9CpgS7H2BsndRMcQmf8ww",
  "key23": "4e5GGXcxo99pU9zaNMMw44j793CF3dt1EjdNer4MfHHVkhE4dzmLtyTQ8e6MAnH4MpfcnXsBBsbsMgedxgWkYtyo",
  "key24": "42DrdkvqvHy9AiNF8XLv4hodcAWGqax8GkVeJTvHDQaY2x8GALhMXDTXxdxk3LoecS7qfUbz82RZaqizcjeYqi24",
  "key25": "2Q147h172JsxJoqoYn3YAhwnVyt31jB7rAdssQCCZTBwV4wyoddypE4waDYLACzxC7RtA8p9S7zFrdaK1MHYvqR8",
  "key26": "5ncXwxnPsEVyUc9aXgKnUpAfd8WqxTFybYmeBVczq6dbxXoCu6JkT6d7w4yyT6XLyWyeCSZodH8Wzyzyi7Wco82c",
  "key27": "64iw4e9xcMF9ggaaKdqP62uHiqU8RkhEMRoipEfxGAWiutaqm2hMvxW1HeESwRxoU74JQMbRzrQnqWbSmFpfKtDg",
  "key28": "3zvHJTdjLuz7J8hYGANqXpFwxHS6G5s1B9bnrNvd5wovaNZ13TtAbwVvy6SW6g8JZx5H9LUEXw92YMg9tjdJPEzr",
  "key29": "tmUT9XfHnCNvkK99DATRjbNobzRtxNtvJ8rowHxG5apt9WCDG82KnPqKWVxWJBJYBqFgEURynkjJiKYWQYaJEPa",
  "key30": "2BM8svvzSi3HgCamYGCKZEzoQrjMLkCJC5SgPZYALBRbW2DQaQcUhBgVgPUzMi8q2vqruEScd8KNhFwttD22iGmr",
  "key31": "3XVh4QTxkFZEm7ZMn4GBgZvVZrJiY4848dyKtaJLZtNy6yyUhyao3JrwqqzA3i55PEJ6cwJxCMmw4SwL8TDaGhrQ",
  "key32": "3fUsoHQQHvfd6SAbT9fnpGEuB6DcDc8NYbAabSsyxRDSiwHex6xiwEequ2quy9FLuEH6Rmk76Qtj9MiqhN8bCUBF",
  "key33": "3oLj1eDBysiunMgZsX3vCm3z4Bmt7otnW4Xn2DGmLtRyuxKUERP4Uzv8dnqZmLLafT3JUG3EdLjun1BuEvHYEAKs",
  "key34": "3feSyqGz9M9hAGiVBsaWJg6pxxCVNZCHkd2LXbUPJUeQLMJcQcckSzKNrR4vCku51HW6htAmSLhBHzL3N9J1T8LN",
  "key35": "2fqJVfWeeEjnNQ99mUmoFra1gwkTUF1JP2wDjQee1Amr7fGR7vVv2nXszU8KKY4zvFs3KCKBe3LMF7GNEMzVVLwo",
  "key36": "3t6ngkEofcRiFC5ZZYuQUhxHHbdfkZXXnjPMTeYBTbEmBh9BvquxcpexCe4N3EZ7gkyWQLbRM5t96b7cZHW4oq3s",
  "key37": "Msgqthz2uLiVzSNJW2hknQG5MKM8kgxFsxVKwEtisaHu4n6FwSQFMdFoJZS6LWdAUWRVnwv2bsj6RusC6eyz4XE",
  "key38": "5SqQnkKgntSMTMrip2spyoH4E4qyiLeCz9zDQ2mwUiqPu4ceyN5tb9z98X4hxFBdaGb2rDRkFb9VaGLLgsvudYgA",
  "key39": "4RmRsfh4jUkmzd4KfAWrAXmfNRC1BP1iTnr9iNrjgrUKURz1zgsngsX2aT5H6jdszGwjbq5BMdj7XYm6yvGUeGhA",
  "key40": "28ag9EoDDzNwjuJCtxkWvgUh7fTWNnigbWDHFg9vuuRfFGyee1CmCvG3NU5PYHMTiWD3e2EyKpfxufBPsYBXRHbf",
  "key41": "5TjF5VzAyaCbpR86aA4fJ43GKnhe7TXCmjXkZ2DCija7YX98JszccCTHdcBnzAxWVCNETTZwPjnhgPNVas77nCqZ"
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

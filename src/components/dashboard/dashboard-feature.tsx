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
    "5feiMN5SXgqZUnety79fhpqx2NqF3ePnjo3fEiV4SA6hMKKSf1DmynKrg7PwbSLpDqNCW6Jjjvxut4JyLRxvDmCG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CEXWFZVL7ojGDVbRctu65YutV9bohcxpcNkPnsjzD6G5f99mRZ9ThuWp9pWv6sSzH5bjfcjTkZB9ittxBk1F8P5",
  "key1": "5TtPRjtpMGLwyv1JtbwBjNVH6dzTz9jv8FkHKx4oTvsvkJbD9krRBoMLZ9s6TboyNy2zNFkHCGdc9dqzW4R8wip7",
  "key2": "4ZJ5DgdNHH66ZZGXX8Fx2YXwmtjJefo9YEigX3pgzSVgnKrea4hcMKZQWgz1tALVx4xdCeEyzc5g8DGyS5rEeC75",
  "key3": "4GXrHzm4NDFWKMp88M9JFJBaqx5BcxxxKtuEsmz12oVkKFGmsihqA3Ryhw7QxQvCBvvRShEiaQfotoFKct97Auba",
  "key4": "13aKLNbxvmchuHhMpwR8FKSgNiHoWhi7C4sre7McyTY3RWqTFbNxZKDnwDcw2eC7Bg2fLKDsQsPgS5KCCohks2b",
  "key5": "2hPiCsiSPrHamZfL1wjPvonRi6SWAgn4q4jJqfe8ZgAG8LtCcZkn32xpeus1Ujh96JAo18QXgLGeLyDz7UNZ2ziC",
  "key6": "2TARGr27N91hpu7YCPuL5e2HnAADRQxWDjRFLmmT21FeMYYxKvtLAJUkdBqbn2yDXkgqXTCFCcDY1HsvuhcdWxmx",
  "key7": "2CPLZ5AcdXuuqJyDJfbpsjg2y36ZKCVSpiSYrESVercLnvKnEkafecCFFkZ2YfmTwtpsLqNFNSGYxaReZjH4v6xp",
  "key8": "3uLW1QnzqzsJEAXeKPwm5iBQ1M38Z4sBaC4banU1hbjancRnzhRjn4KZJ82VKA82tvtf9ho71bcsctF8xE6KSZDu",
  "key9": "3jEdi7FzafkquCEpUozdhmZ28hDogEaDv6w6h2FUzwVz82yQpc31tJUnAPZJymmKynZZx4c3X8c3c2Wc32y7pKRv",
  "key10": "4CBau2EG9PwCzovuzKphPPN3yBF5jKriGAK8YLdpwtQEFGRULbLePHo815rttF59oZi251FKT9owxALvaqqbzkuR",
  "key11": "87z7Pf6H3yCyuxU7uDRiCK2A7CP1q2CDuXgRBRetFUsAQXvZfib4Qft88xyNWLyZkqJtV4E42HpRnpdnDoHqtJ5",
  "key12": "5pH3R5jndsebj9Vnb5aPAscXSEQJoviVGBGEd5fGxLDTcojCMMFrySLFErCpyQJkEbZyjimcXgeq6g6sMTi9txQY",
  "key13": "3afydq4xqkngtzyZ1YntVAa4qH3v33wEdXYfGCNoLH7wK6r17feSo117UAFyyjaxP9BuZQoRsNsHWgBEKvrxhffS",
  "key14": "5MTgnTLae8iC6vbVc2CUCar5oY9ZQd4Dy3JW7QdYufvGwt71C5EB2PPuFPZvDXEKwkJxJaMe7PfucoZ1Cm5jPtza",
  "key15": "FpkovtWSRJYC9HhoyREVEicHD9mt4PukrnueH2W4sT75XKPfeLpTL2NPxA4ZtuZV8j9tWkbEX3VPgNVwvNYgnTf",
  "key16": "2tR3v5vZNDsP7bs7FfTatm7ZdDWQUmLs5vSMFzVXo5TBi9Z7PaA8fZqNYoH6Zc9KevPmjt92pfj6cR7njQF1Wkwx",
  "key17": "QBRSiwDXgpqYG6JoEGHQH4sMu5XyvzcmQ2HvCFf64h6ye4Abyb6uvT8mfrkhs8c5Bbdvb3LGvsiNZzzf1xS6dRS",
  "key18": "2n7MLkUm9sVAmmNK8drrixKebSmnvdyaMektibuSH7httKD1tiuLeTpy1XrM6hfKaLi94Nsw5s91mAmf73uqSdon",
  "key19": "2Q4rztcq9FjARWUPBB72dqEBCEZ6y4wdeynyvG6RNoTmRdRHvTKydfxEnmHbAgNQsDarhjxNag8cyHAyQzoijk3k",
  "key20": "2JheboqKrZWKB3TfbrF9vDMzJtJmipvVKqkqwfMw17x14gPcuNvWM6FJSeTrgz5VpVfGkqD23vMu7E8kPnR4RgNr",
  "key21": "28vYXAbq3uJdEsP4TrJKbUayTbtbgPJQ8k1JydTp2eJtYGbxA5dzJaxJrTetJesEj3Q89kyB78TcPMZq4mckx1Va",
  "key22": "2AiRGvx6UtHbcQEdaKrbb3FYLcHayq16pqjgaj7sYS2DQTHcrVHjYRdeRPeD6Ef4j7oLd9XMaLMLE5BQKxYprMTZ",
  "key23": "4Zscmd5PvErLL4fJYc6wb7viZj9HmmyNszdAj3V37wXoEJTn5iNTN4zSHHxoWij1cG4KnVeMd5HUbuW9PcF1aLGh",
  "key24": "5QrKAVB1SnpbScierxSwVNkFf74Wumku1Spyic2Q7NaLHmUKa24nB22PeRk8Yp9fvULFgjLoADgwgJKrJpbF5CFd",
  "key25": "1eaVSmYNLeaUrBTiFT4z1o77Ne2qoQKwY138F4p6n3QKBsAkgYLFww2wLzLLbimTuW6YZwT3qQJ9GxiTtfUkHMd",
  "key26": "3dZtFKLUYLNkkB2sYYHtMhCNzG6mzvw1YcVbVUs1k9r7RW5ik8aZnNmiF7uzQYrHoZTA2vXaWxTSg2dGCBZ8mJHm",
  "key27": "2LRqCQ3tjHWTHibWzM5g8WysDt5WZ8sptGH3ehs697YwiXY8nabRnFv8TqrhNyPAaQntd1uWCUj8WPiHZa1UdV2b",
  "key28": "63d5vwKe9yGbREYg35DJe6q9upKb88w2sXnybS3SRADZyL1zjiQMV8PWY9K971ZiRfKB7QhMiv7emCpioh5X4GNK",
  "key29": "2hHLWv6oZZFgNZjohcqsJm5GdHcE6LQWGPyBctcsGezDTVhPHGwkWAhRQuSWZYnp2V2izKwbnjyiNZyhkV1kTHmK",
  "key30": "2A8zvfBVrwE7eviAn9GLfDwHTgUTunxVFcUTToDUeTYsdHxHL28eWMbWJ8h88eHSLGR68TS8UsiSTH556WgHBRYW",
  "key31": "35pFWoAikDB2urcYeNAuDfUnN3Jofmg8q6rGEAzHFgYuiMptv5PhvsHokfvTrGNZ4hdQadbds1vpTKRnHmbE83Yi",
  "key32": "4ggmwPUSHVAjWYYJPHbDvhLzwKBZsrFbjg3fAF62kwSuf3g9Q9F6jYh1ZqBjbWzG2bQi61VBXwaeYwBU8enYpoiZ",
  "key33": "62yc1oQXcDb4THaJLFdCwSZUaNqy8ZFCR2NGsCJR6yMUvz4qzEQ7Wt7cg4TCKSTVAmdEK3GD3UoMF314sZtzdrAC",
  "key34": "3ma5tifC4nbMu5b76ert2BfcVXmtsuLwPAJQiWpoka8e1mCXgJZ9mJaPg2TJ26orDJWa9AwpNcZ15LoXmk8zg74k",
  "key35": "3VD51DdmMzmz5YW9ue1w9Jot7M7jiHobRYHJt3fJNVnuhTSuVNzkVfVLdaS1AiPmR5n7FGoQu4fDriTwDKN1Tg4P",
  "key36": "36JkjC6BthjVXergbCrQgSuskNyfjkccKCg4T82KQQoH9rnpYey3wHsJ1655PgX2tCkM931xVdgZdkQBw1XzZQx4",
  "key37": "3oGcHZxEWAtUrYwdjrxwJt1E51rkUGV7Y6ryCqYAVUkuSR5Rr7pKkv8WBReZezYGnFQ9GKNuyzgdmhJukx8FDWqQ",
  "key38": "2jjj2QYpXro5T8QwdjXETDNwyuM1xMrEnjEf1gVJxs9VsMZ8N5oMk8owKXgDpo5F7uF8E2W51Jy9tSXAaLf8mtVu",
  "key39": "55oP6YWgEPVafrHkXY8HHpTu1YTk31B8Yc14oKFCoVBeTxN45cYHCMUHsrpotkqh71EjCgQLLuk4jy1Wgksv3WYR",
  "key40": "2g8gWngjH4RKb2mPaC9ViRzG8TW9tDQ9ooVYmA8xpjkvA1u6MJhRR7UKDpjXb48oL63AmqDXUeJjPuJN9sgcEQSB",
  "key41": "4GtYcWqGp5kqF6dg8PEm5cqbrcfzWcXEKPP7eMTWsMzzaSdiCGC8Q93a1Bdx3rVUueAWdRSPJw1zErXMYoPWCeaW",
  "key42": "66SE3xKkFg8ZqPXSmCKj6fto88kUXdeFkddvqdFyNZ4eS1bVyVLXu6HNGtas1p4JGWSeBbc7sYLSjxncTDmNYC91",
  "key43": "Eik2np2Ae2Bz3ugtvSynxjAWNk9rCmHrJ1hNZdMspNSakJScQWuuEHBS2KPSM4gLA853zPq49gMrqzoBKci8Kxe",
  "key44": "5w4Pu7jd5Pv5zRbNx32zwZZzZuT961iZs1stpTqFgCYtGLXZ2sp1JJqCR7oEaKET2Rn3GwFKR3xBDPmfVP3Jfn6b",
  "key45": "Awwe4nY7WbCZtMv4PoNTFf1SkucEdtjNwxkkSgqjPsgwhYP2VTnehMJkmcgyeQmaiyiLgTBA23tAAPwDs6ax4F9",
  "key46": "5QENFQSFmJXe8akNEQZJYPj5PL5adarnRh9jNhdfSaEiWCY7XDkEM43iRfkAwWFjxkBc5i6v3VpmaH9iiE7rDrVR"
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

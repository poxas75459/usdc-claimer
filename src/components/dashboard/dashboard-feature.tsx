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
    "59MmG9L5CbeZf6wHqEEZaJU6bPWkGnwSkvPWTss48bYKjX4uNhTAfPoGc9BweirqNAUAGWUxPF1scrLLujmx8i5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3knxTPqnsirqNDDF3ftBUTqXeh16xTaSxi68rfWqAbLMnd1DXBBbKWmNy2miR3Gf2Kb2AuyJm42esBuBpvyra7nE",
  "key1": "2jeX2wFfsMfBXVhUAFmeK4S35TEU2eV6ABNdjnuf8kUH7Ys3r1cnW8Txram346mH292LQgkuwnW6NnvgZkhFgjJs",
  "key2": "3htcUKoW7s6kybRY49ZkeResjwfMTbGd3t4kncj9pf6gw88NFH2jgG9gH2rMsuDjaRbwaGSudJ2WqcwdjHmU9X8e",
  "key3": "3eGn6d8hoBWUCMUGbgjMoMDj7eLy8c3MdtuYPY5R7HoXALE7kepPG2AN6gK6xXg8xQDG3ZAXc3WercaBzyUscMjf",
  "key4": "2dirEnx19wrr2hPx6z1Bt3YA1TjQkSHb29VKHvnH6Sqdes2HXjBrrtXdUmrkpHuewEx2ZLg39z8iXvKJGJgYkDRs",
  "key5": "5jFHV89CvvbCij6q5eXm7KHyujS6mQruRoF1WyhWZU1kgB3CCrMYM14kRBm85bhWNhwxfjPw16YrXqLYfYj751Uh",
  "key6": "44SdQWdSLi3khi6oWs3PGrCLUBC8otv8YYwdZfBHdvg2ogaV61Ym7p9E2ozigQMNf964MdcfseZMXRu53JwULMrd",
  "key7": "3FVArJhZybPffsvaAc8HMKpU4pcRCiyLQHsR2n7FvBg2KRqzmTcCKz6Conh1kqGtSu1Vf36eMmuVWYD8web5P3hP",
  "key8": "4FKizjyx5cJcLhUJG5cCwowyo14Q6uq8xd91hXJjjeqqWfunEaN1g3qYGZuZVyg6zfhdsj4WgcrcaVZwSD8siUFx",
  "key9": "2DV2PEdiduDBjgnGZZ7vJjvBE2aoLGfbycSB7fGm7XgiEJXedQXHxCwim9JugprCn1TtipxzAFJ9sJ8W3SJhQjLQ",
  "key10": "5YTFmwpvVQUpA7MiZ2b4KyDoVwNLq2JFSXHD2bi1tqXTervwgimej1xwLCJ15kCioSoSsvYwN4GHiGHD99baf8DY",
  "key11": "3bA6Gq97jrTfGd7H8js79d8ZLQ6xJdDPSK8qZoZ6TcfaeUFWX6GroE84fZUN31Hp74WPfqith5JLorobJgwHxshE",
  "key12": "2uoqtdBFutWiyqSvLkMm5aAGCnFYWps8vsUAwaoV43jz6DkBQrGytr7ZigJS1rCWwQ8S2gKATjUXpb4PkS3UU8TX",
  "key13": "8coH6Kyf5nfSCg165TKwNg6x2yPdm44UCGeV8HJuAHnjv6H4Qx5eujKEgAvzrviDB3xqudNprwKD7UtqbkHTut1",
  "key14": "qYXoPzmJ1pPMTw56gpUt1Qugthogwy14Xp1Htqo2VUbeaJ4dDENxv45hmv6ciReetN6bnRUvxoxXfCJacwW9fih",
  "key15": "5ZqXLMPDDLYAVyhERDpNonk6LQrTuDxAf9LdQ57KVPw8E2rr2osBz9bA5qqJeJ7yHtZ5Cw5YV8mhCjMNEQnFwAc7",
  "key16": "3njeQZaKB3J3gQDVhQ6ETn9DeD23ngp9eh51pXNoWbmqwA9kyZ6RMTZPDRvDCRmPN88GayA7QSKLVS1Sxrs7SfKC",
  "key17": "2L6LE3yUSa6PK67wFoWE1ejwBd5c3tG8PgNmzN3qXft2WLWMRdkpbyb5XCeoodhJ5qvmsaJFcSKb2oJfG7aipJ24",
  "key18": "3XZesFiF4QJ4NLNw5RZ3DLtAjaxLoRPqhiMARABkm3VPzLe7ZauTbNZhbNBEz4uhkAKFK6xevCvziEg4SyGBwmBr",
  "key19": "48GhCYTXT5XSpx78jMvgN8aCArPtHU8Hnn2CVjq6FUxZ6cYiJmWMJ2b1MpXjZvMSYtMutKW4jsHwrcvvHwywwh5F",
  "key20": "4nc8ZGge2cVQAJcsPwn86jXvi7UbFcLcwqAQh3Y9MnTZtD5JuuxnwuvbfD5bQRxr4bFpr9HZ8bGk9VCYRTdwjRU9",
  "key21": "CpGZG5fBgfLZhjiNhQ7Y97ANFg2XEWCEik4UPwV96TpWGdjypUhqMurQ5NUExL6gyUTpzeJVRdDT9nPQYdi96N1",
  "key22": "oJqAn6mu73V2Za3bFhGcfwf89HvXXy59bfECWkWeAqMWi9C2ujKY2Dko4oQqpyZ4G3Nmi7QPRiNyV943FucjtR3",
  "key23": "bxxEpxfcwo4a1ixb4cdJBoAnaZZWGQ86dLC2PQ9DEPCW9KTZ8ENtshHwteVfd4UnJ6THqS7qkZCPn2WaZK7VWNF",
  "key24": "5cY4j9w1UWAgML7pqrVmHEcmvuqnaC3pThErEXCG89SDTBSg5gKYtPCzgRzQ2zVxmUKUrBqbrbK5hQWUGk7FcTDM",
  "key25": "4JG7j7RdTPxKnVpmE9nuTi49FtMq8H9mjgFQq2YfFLbZubtSugLHY2vsLearjdh3HrrVNJtjQ1Wv22TJA9WhBK5h",
  "key26": "2cMNzpyKL29Fu8L4gn88qV46yk9pjK9JcFKuqNcaWbFk6aVsVLhSaHpVnFWgsdezS1WWNpCKLYvBNzXULtK2vHCh",
  "key27": "3ykCAQwjWptyoH5MTbT4SLsQm9snLAzApNyqzYHB1eYJzJXHmrtYmg2s22ULk67AiRr2kjHrs4xoW1hH6V4XXEkF",
  "key28": "2A8uauxRjLkSiPz6y37tmBzovNyBfq9zBzhRKVWqunExBc8UTpaPih6fX618DDM74SJNntXtSbi2MaGKsAjN5eMX",
  "key29": "2Ax1T8yhLXeTdXmNPhgGoAfDyedAFx11a3rwXjQBLcFZZoUCmnRwJWe9XQea1m22eavW6ub6v5rJiA6tbyLEG913",
  "key30": "5XhbJoiL1La6HJ3CBahMUmWr8KFFp9ShXLgWMcPDasVKxaxciuQxZbN3dpBUraqRGiZ2q7wrE8b93sQqAoyGHX2a",
  "key31": "5spdnB6TyTfSNS16sypmbuttmKrd941fWeuomdMgFaef9WjTX4o4Nts8sfgRxbpSuCSZgs2d1ddN6pYx14f4xoPK",
  "key32": "whR2FTG3Z6rGETw6qbhtRTRuhrw7XcmJwbqtw5BfTg9WJSpBBXAyYkcLR7V9qSa6fzAynX11PTGfKnNr3AZxbSn",
  "key33": "4HZi2AhXB1nouxWXNyeLoTU8ra3DihWGPAJAzmSP82gc4EnndEm1YKREQZtZHs4s6qPJrTYRRkjWcHnV2yB8Rg3b",
  "key34": "36frQ9ogZ7ru7qrGrYU8DoRn6tqkmMbvot7CvKZNERbwqQoDGbcr7FWdB3Xi2jVKdV5XHn4DMHtkErDqWQ7TCiKP",
  "key35": "5pAmc4AuTpCZVTPpEQHeDZUtpQfctao5YXuyBG4oJkC6zqhyeNZ113NFBeu1sjPTxQVm1vC133ppi4Ca7GmvwhoY",
  "key36": "2Z3yXvLiYqv4xfXaWQXvpB42Sijk4Vzo8QYjgQkhbThYX2gGPxjQewu64segovsdcPyqSzVE8xsmimb2FtYveqKe",
  "key37": "2DDUcQK7vAMzcwZ57UMAEzNGShmRQWeC9Ut675oekgzZaFN74cuyzzb5zsuG1FbxcqbGqGStgtnjbN7vVgd8GQKu",
  "key38": "4rtNhc6HjT41bR3HHn35wqHuTCFVwtX4oRyRzgwKWrYk18dsbw1B21NciuVNWYzjJN2KXCD6ZZbGeNPaWZu45LBh",
  "key39": "z1Xwr6DiJbtgsNMCUYUrvF1EdtVq181iKRo6syFamySQLggwkYZMtBw36D5tVYdXfvRV4KoweEcMcc1BMShUwjL",
  "key40": "4nqsfkJuRemv1uzPaV7uNhfHSYgEWF7kFdnSMsV97unLvaCMaMN4r1KPYXE16rCRxqvYsoi9Mn38iFyh9o98BMAs",
  "key41": "5X4LQrbonvYNtujwSbAQSkAfJ979cmBKm2vvpNVVo9Poz278tzDWKzsvNoAc9eBuXunfz4akPgNxuAn26cd5qEyS",
  "key42": "5vD38FbCoUSViuVtFarP1zH8C9bLXvpnPA92HyVDXWr5tRUL9RCEbnWEVGJwXoMTPsdxBd2iZS2vfNdZzAaYSz9A",
  "key43": "476nSgaZVGCL3SaYqk6xDHWs8CSdEHKgZ2z4nep6HQqPffkpP5e4GE9n2YRhWNZzRFXiLu4Q2R2Zg1q1sY5imSt4",
  "key44": "6VKtavycWoPcoLABngBe1BScZC2f8L1Lau5uE6sFGnFboUKs8Too4EWm5TrMR8NfTJ4e1KECq47zs2JE7owEK2G",
  "key45": "9PqSJpE4RXfNdZRupz9gvXTZ93Wiv4ta22aWkSRnwNjY5oUvG5Gvws7YfwCAsahyMTWUNYkPfYGSQMXV2c2eokH"
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

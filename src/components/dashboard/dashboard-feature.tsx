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
    "4PaULhxahZnGH26VCAWxjJst93V58r93kWepdrmC1U6SbCSXm6FdrTp76ZBNmZrcoevJMJkxVJAYN7eEvdwDz83v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vLuyvixJJaNSsxohfvbtTgvWWwKBnAzkkCQepVb3Yugp9irKmVX2cJtzojYv7qV5WBmN8PR78pteCerNiwiiwx9",
  "key1": "3xQBC33N7JwAqntvKrcMgLNWzPcUvFQ5im66h7EW2LfvTt9YW1wTpwsd7vi9sQGxxn3QPFYv2Z8FYHaMLrnuN4i7",
  "key2": "31A89JYtNsr44iMDjt6iUw2CiSsMTYtEMm2CZckuUBkifwNLncLYDHZdAJAwYZBX3mHY78oh9yZKRGPUXiGog5XN",
  "key3": "4qssd2VkiDfKDuu3eYAFkCNSRP2D2TvNENBWPP642rqtM6Yq7mTmemZfWpryywpzYiDecMrQcKAMPeYAvkLqCT5d",
  "key4": "3j8rKAPb1pzz1VZ97ALcw6YAdn8PQWmEB8TEcfajd5afy3KSwymvA8YE9TeHFb2CXPYPbTEQYLE5Pk8Yi5VscVUG",
  "key5": "3fw9ZLaUKHRZ3hH2GS96bZyHnHfeyydAt9vQUyW5BYhAD1Bjt2hstd5VtsMfy89wVSrT3UGD18DDW8mcWQT6wkD2",
  "key6": "2zJjdKCFEHpoKwC2G37WJcHt9LMtfrfAPggTBTjYsuS3BDjy3vjy4Xbw7YJJKQXN7x9zhRKWpPN3rwFhos1RDi4S",
  "key7": "4WBuACJVxDkpLEd4V9k4yXHufiXCw8ktgDwF64zLZ2XKqiwb8dPgbQpPf2VXfZArD73ueixmL7GWkEEkMAm8Wt84",
  "key8": "2uW8LKGDG7qyuzGytpFW1tczPdU2y77GSjkJfaAyNhuzpsGEqmSaGnoTkD1zF5SGceUDkU4qFxEehjcARqUmwMSc",
  "key9": "4oAVavHZ1kBdkcc3WukuR2HphrpV1RtnbwWVVvEjsFJYCD21Z816ZKBacbYbRhpHYWzPFKEUT8CQCbxa8SDwG9pg",
  "key10": "4hUJM7bz6dYR6V8WSXpnaskrsQVVTfjfTboqwnzyR12YunSd9nYe5x89R5hoNbc8wNweurJ8H1iCypZqj87W2h2D",
  "key11": "43K4MNrJStHurQ6wuwEW8g3XbeuKok32qQ2XZhYUzdwEtf256tCtTrKwhwVXBjBfU6KMkQM3Dy8X35nPVaJq2Ztr",
  "key12": "3aVbXvdeXzqJ4pNGzBXWqeVNqt5TDnNqEyCJaDJG7YSw5xJ9ZreCduUsnENF2dbdeapcdQBNiUQEceZiGPU45MUo",
  "key13": "4henzPZKajZ2jSysBsbH3ut7vi6z2YhQCwAWF1NKpXmixU3PfY6kivbxD3F5axNwRVxvkEDyJmwEFk6aMfaqw6tX",
  "key14": "5hUtYkxkSTbidWYKwX4ndK5CAurVapJ9Cd7S1ni9yAAbNkq1z9oG1JmkSyqRESayUVhLb8eGkEhgKmP52TTL7VtG",
  "key15": "V282AnPMZYgbJA33A5pCowCQEgzfBFaQqJhBoqSPycJjH39oNhPF8gVm9Y4jdVpnro6DTE76dhmmh8rS3oAbBEC",
  "key16": "4p88a1oZZKS8xMFJwrZZGENPJnJj8vk4CmU1Ryxcbf2FxxTwZgRuqPE9ADVJd36bEAeZrv6g3vkEm3coHduxyWw8",
  "key17": "5LHKZ6Db3vCBFvFRMtymSJKnJeZdQHcEep3YiaQYXTx16j7EE8GSAM7yoW4aeDyr48oHFHjzfhxo8tbqQWpN1PZV",
  "key18": "2bqSzSGNrCPecsNW1aiSC19KXZrkGVztuvKfWuLdLLLsdfkzeQsL3PkXauvYXu7u9dgXoscovkPpnHPxCRKmAaJE",
  "key19": "4RA2Crfi8wpbPSFxia5NLEw9czC2iJZbxNf5FwbDc7UokULGodf11t3kNCTv8CEojcPVxNVScnXGT3GZxAouLMyZ",
  "key20": "22tftfZFrvJAZ1GSaC3Sbzaw5AmSNAhvagpAVtqDbpTSfZDxYaqio9vUyYAJT1nXKFBdmnsZy3CmhjajzaPhHtEB",
  "key21": "3DqZh4EBWjWxyahXCvz2SFZ5PE9Pkue1H6oNvaqsQR7rSHCouEaBpChJdMijYNhAK2AdA7BzdurADw6BKFAv6FtY",
  "key22": "5bcEEiK18qdVgmxKUJY2kWhnkXU5DcMSJJ5FibDBakxpCrY3GvgTZwjgFYQmVCn3hAPEGpHsbeJetY1wJb4KXgTY",
  "key23": "pkKxiVGHeki3VFncwajLqCvULHKRE5F3nby793nHQmrU3gBJJYZXPaxhGUNGY7ftLTtC8upq2m8MsaomCSpTbd9",
  "key24": "27Xx51YKXN1ZSVJoxYhnpWV1DSKAAMwQqijH9EFoPxva8AmLFiUwitJMsPz1SJtqE6xmJJDuvtnFzc34thcv3J3N",
  "key25": "vxJNK7axhv16XE4W5PGUpG1Pqmg3AGsSPseMu687aypY1BGPjD1x4Q6jJwRPHV3s4j7DzZnZQHsEH4N9J6eL3pU",
  "key26": "3Ct3NvYcXgoXT4H58n8Jxp2DmbzWhY99txQxNTqMaqJf7KDYvie3y5iwFDjaeAnZnUSHKDQdtEE14ddisbn2nNQ9",
  "key27": "3acT49Yku4jN7maLPGPe6wEvYwHZLYV5vVKUMwZtBh1BwQTYRJv4Y7DxSLFJHDViNf6kZW9gtoD95V2s4pVxGCsh",
  "key28": "4PrVErR6mXs7UCd6dqjzu7avEKrwuv72SffEwazM8FyYysV3YC83qKtbWDXV253uLn8uWrbRjremX5VmffYi1XmG",
  "key29": "2xGtEURcDQwACAGXiV2NXVzTnSv33QufepfVarxVLnvo4PGzjdje1oaYFYeAGUpCrQNHvxzfz4gFi1sBQLPsDF7x",
  "key30": "2oTq6kcPdpa8SEDCBgTC1MR3kzT1W4AcYXCw1Mh3NDLTWSjPcdcNmGrDgiw3BSgsHCg3srygCt5KYoa51UDWhsvJ",
  "key31": "5pNprJdGMmzX8HNf7rz9fTdTvQctpnu1SvLiVdY6TBdP6RajEdyFAK261o36YFP6S3qw8GQ6vjjCELczzAv5NLQj",
  "key32": "ZD11qqV44wtaSR74VXjHuAMoAiBp5PKyP8VTMRqAUhjgsGZsJAyuDxMNibT9yj58eH6911HYVNejZHqZh5Nh53i",
  "key33": "94pJf3fkXoMCszVhNNyWNh95fhCs9GcXCt7tWSFSS2KnysuFFkRSf9ca7fAgTgxD2KbGUtmDE4wKYzW6LozjBuJ",
  "key34": "pYZ6EWxqucjxsdQGd7Q44ScyHTLKPvV1MZsecDqbPEpYG2bzPCPF9Cmt2mmyA2sm45ZZZiyeCkmQUkFGTr8Avou",
  "key35": "5RETxvcPcoHGtjL9dgr7LU2S78HzFc4oURxnj3Z1Ac7om25duCr6WsRXYwKG2E9tQekhr6wYEu9cpwG1nuP8J1nM",
  "key36": "8eCFxvoa8mZEr3TLoxBGKfeAue9Z1L7PrBfUmMH8KK3jtxucSh4uZRdabTSiw87MsJMugLQZ6kJSDXQBZm4hCjC",
  "key37": "3rACzMbHgDSctZd36ofyuJ6bhxCwXzMfqFNqa9sP1Yv6Jj5mQQCKKbHrDkZCCMYP2RSQdqJnSeH1JRFcSmbgWu4m",
  "key38": "61479coSkyaAtMzAqJ7BRA9Qji6kzZrcE2MCJK7VKy6vuvVw95Nq8NMEpeLgkW6iTr7GsZLF69DXbRkPhoaKXqMP",
  "key39": "56XqbfAAbhYCAqrtbMgk3QFhxcnqxxDRzVQGW17ujWUnhbry5E2319UHjQ2GHYxY3i5ertDgjcTg6dt7nLVmWgY1",
  "key40": "5nYDxt4dXAYQbthDycUzYrTTjHKA33x9GowGoPMzHJifnkWjbfubMqKPXP7A9jcLCmowkUs6d3zAE9TNRet9aQHp",
  "key41": "4J9o1APidngH3nRCRp5hxgrjAZS6y9sVQ8myZAXEwGQNnctozCQXmLxjB4VByN9HZzJimsSF69A3KgBVpfT4iMMH",
  "key42": "4iJ4pMFmpJLMZBAGzQUDx61iVP1igmw9T2xaQiPpY8g5gxg76RksmGr38QFzkXywRALmz5iXTK1ii4W6XQpDCDfW",
  "key43": "1nGa7EqJCHLUQhsQnTxhdN4Hoz7CB7VdZBKTMWYQkni7wruPrr5ExtVHMhgJEqNXTMgsx53rfoUaXqhyhEkBaBe",
  "key44": "2zUVUDeEAcST6MmGyV7gnPdCwWhVsTReatsATM2GwjPoy8xpvf95TvmzJi9oUhh4aofJWzHs7mqHaq9JBeoHq19L",
  "key45": "2JgqFPj66f4Ys6hXLHAU8p9wm2H4DWs8AWKG6Wz1EKLpCxjyv6fgqC3F8DxvyiQkmY8ohTdgVCAFqMKZuekBaspE"
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

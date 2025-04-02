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
    "4zxoKbg6gwf41K6REqq7hVA7s6hGwHWmLTqpfHiGHPRaW3UxE2dECqDNzT32s7gBn5MJtTV9dWtBRxXoG6BZpN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HePX7Hqj9WTSzc4AUEUjDwszeojdqnA1LZnwRC695MWyLfYxuaL4jPLMouSwYoFWhhQkff1LFjPeseco9aabyRv",
  "key1": "5moy5nAtbBjCMH5jki1GqCPCDEnS64bGLZ9B7H6hyzfVkiHa2PGGrTB7WcqXqgLggMEs2hdyMUTwhSq6c9NMFjEp",
  "key2": "44qJzn5BZ2SWx1DyzT42N6Gc87bf27ptGk5mzLUifXx8XZM585MefpGni2cPwDjkrZoTFu6TgivsuKoTUQgEgyCg",
  "key3": "5QC1it3YxViUz9tbeLhyaPE3NSzjoT1N5qEwh3vu7zG8qFJHLjNVe7ebPkG3DNSzrC3iGiLBaoycdFBHPnahxn54",
  "key4": "3QYXjkVcgB1sRFjT3DMPSKv8BiLxoBjXA1RL16PgWWx9SP8XVQYtHddFrZVFAQotWCMvEWqmaG1MPg34fWB3Yqgb",
  "key5": "2J8y3owW8w5mPqpWCoDGPB7BgCLw8RLh2K1xd51NW6cKkUQEhzDyBGKZLzUMp2EePbCXz2LRRhmH3KRqWMJD2Tt9",
  "key6": "3S8EVyQTXnoTsFmiHqivoKkK53gTAbNEezj8yPnnjHg5e63qyRLbCoxf9F44ifYnfrG96sWJt7Yr3WuFhJYAaXGz",
  "key7": "BbRC1BxDgsF3q1s41W6VhDb7hUNN4VzVsYeocJn2nKVe6qRWZdQVrZZdC9EgqnLfopWNtyQ1LRVNWR2EKP5DcMY",
  "key8": "2JNf3qKpMaD6HeCREUndnEx4sMfeJT1pbbQSN73kdUparhQUuCc49HGePDCJGdCWDgMNBEqz1NFVFnV78f11fW2b",
  "key9": "2W9sBLcE3JNsQ1rzMT37eFiYG6hrzD3cdt3KjhrfCSqd44o7s8wSJ5VYehVAUsE4SVNZJBrir1a4472QF5Pj93Hc",
  "key10": "5HZ2U1HxmnUhpk1TxAbDCwPfa9DP5dD5pskMLRN2p1Ujb1tseBEnFbFHvvZfdPApGb8FP6ZCrm52BrYaj9r5KVAv",
  "key11": "2WcNJGfuTMMPtN7Q7qbpRp8TK2R9gM2J1f9Xj9KmdRvqZz7zBJjoAqwauFjCWHiK3Lpx7GZdSEpTfQvGCnr3mydk",
  "key12": "5PiKcVhejKjvUJGwn1d8f6eodNNh8aN83JEsRAbpiZ5ygHVs8bHY9ipzv9vKst84RrsU3iT7yZ8mKpgZruEFXoXp",
  "key13": "5LZU85yk6rqXFvWyYQgjDPQrUipPMWR5rjzXN9jCPHkm3YNxfNBmaaSjsuZN2w5HfX2qP4RtcE97jk1uqKr5uEGw",
  "key14": "3YUJgRWZow6iFZotHFLfuhA7t445Gxts5uNEhiMZSNcvJB7ngawAiYozUjsi6fGRweVbPahezSQoF57MbQxBZaAa",
  "key15": "5xyQpazbfezm5dNo6XxXVbpw96VyYp5c2cz5JyQKqwA8SYjoYM3em9TRAaMW4Cta4bovvcZYQ3yVjXfVaziFq7FA",
  "key16": "2hU6eCRPTFw9yNenPpKHvDftJBQYE9fcXEihFQsxpbAstXF3ofJQ4XCrdwRvvzVCzoDXGTgAoSo3QhpVUX48hDwq",
  "key17": "3eFhjbhjnVpai1xs4d4FZTw7yrur6aW4AZ4gp3JBs7KRAtLNYqDRs35ZEQ73jxzjhq14wLQBrxmBRb5hk4N6433p",
  "key18": "U98FFcA4Es6xGUuP399ehTfeTdVoaypbmHhcTXQxtjnVqG9yMm6tgLyoXb1xMrJ2S8HP584gXkS14RNBTnvtUbZ",
  "key19": "4K9JYBqsKUm97qy2sXmbKUBBarTpvcAKWCnHvA1ndqbAh5LfGcibvEsTuZ1oqa3cJEhH3opLnobawPJjieRE37KX",
  "key20": "omWokLKGtPWpk9m6Pt4ag52mSBsc7FU6RYjwAzuXLiJeeB4jcnZQHUxavreKgFSFGS59qfKHYL2EhXsuksuWjYa",
  "key21": "5MwL9pFRTuQsPuq5owxtxjan2bzihzj5dzTbNgQyEDJMs5B5hF7k85oRfZVvtqAShkgyDBi5sFESDsmYrLajreN7",
  "key22": "SNH1Mwqyw9p1GDxRTssEhN5AmiEQMfQHvcf1JH4ehMPqjvfSeRpYtv1eJ17HYB6VAZtoikTZD1CgT3pq93JBX7W",
  "key23": "59FksU83SsfW5MDYgKSHCYq6fyioYPuRybFypKDriQ5UBL8U7KnTdeJzozL5zxrfy5N971AT3wrs2GLSF9vVJZPR",
  "key24": "3Z2HW2h6J8nsYfURwJni6ESA3Q1KA2jkcNFXdvpz2nmPiXExNQrwp2u2zsgo1gJqAbR4MWW74PPGWR2TvxZvhtdb",
  "key25": "3gPaCSe6hxf2TVB7PHMVhQniW1kiTyszhXm9ZGWDvBq2N3D4mnrFNMpYzA5vGGESBZUPMHAoDEdmm3azCPHKv7Qm",
  "key26": "5yhqzJZrX55HMLkL9xcvHEh9g6BoazW1cpWAYstvEm8UYn922fzvCZ1ZFwQUZYhLwwKyeDjCrg3hmALJYWTchVo3",
  "key27": "28kozrWK57MB3o6mZ6heq81BfzZWTJv1E8PfHLrpagFc7A8AVzYwJyS9GNNKn33EvzgBNyviREDM2vfTnA7RNZWW",
  "key28": "3ykRhC4LQLeKcYRzLeAXrCZyhPVduCKWkziYfZmRe8ThtL5mttHLQZrAbybTXARofpK8UWDpk2BCSJEqbH3fSEaY",
  "key29": "2Np7akAiYMbouY8UkHNyJQ7P6qEaC1CPUZXUMNYNLUF23wLpJk4ESfmSg4M6GdTiB413fWEg5s8H9BvjsWreCVvj",
  "key30": "3FgoRdA6RzSufrpsPBgAYa3cgq1VnkesauMpLmyk5uLVCTtmNxoi3aednXPj8PCqJ7CY4YVtUuGmRKvLb6CM8gB4",
  "key31": "631Dq5qDGHcj3wvJ7k1kayGuSuNhAgDJUzTkkah2VVSPdwf9RwoK482d1NCwSHhMinGRF1A2gbvGw8ZP4NzHqCbX",
  "key32": "4Zn7n3Pmpyyd5HMpFH6tYm7ygW3oR39qoKpFKpmGSt4sraHW7bb5AKZMxnDWTtqzwVDTWYbjzAKe6eaKASY14d1Y",
  "key33": "4Dg9vkqbFos8esFZpFuZCJZUXYwo85h3NQaAFj1n6B5ixnBmZeyjyLKmAaoLzUnVMmdYenhXKr2tr5Lf4DK9nzCN",
  "key34": "3ywAd3yPg7ixDJmbE5dvMKHT8nwccVXU6BQi5b6ATVivHRVwuBWZeMDAWyxcGhQK5TydVAk2nEdS8sz3wB7nX6iK",
  "key35": "5tErLGATageqfWZqSQ3ccksEy7C3xavK1RJ28URs9H8WEWHrjMm6DUdKNqwfwCs9z8Fe6GyrTbLiHjnpMYiqQkid",
  "key36": "5A9pMtQ7MEE1kJJfC1ToH6Dr7MwEiwAkRHQB4ECyuFUtqExqeERXv2s6w3D67VEXiBT8tjFu3MmTaNYdTcA5YMqz"
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

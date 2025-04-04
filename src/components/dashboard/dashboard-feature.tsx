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
    "Mzsus8RrvmwMCY24sqmEJFj7htNCCpySQ7y8mP66SC963NagrnnoxwMHUJRBkG3Um6SpZbSewvuE43Sk5so64ik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593c7icoGU9mrGAu1fFgZjcGgMVSpA8Hy4jazmWd4c84U1pdC8AdeAdNwNkTk9S21NNTAVqup26bKudoYDtxWcrd",
  "key1": "3JVgL9Gmi3Du6JGf2DTroSNvZiwyrhEtYTV8NVCmGy9pmqGz561tMDae6zrVwK3NYBkZgoAMBFrtC8ghqr4mngDm",
  "key2": "36mBWuctZ4zXmFhFa1wApSfANzeDmnrRH7H9V7QuyBYaNe8UC6C3MKzKuVHufozpmvf8SCbbAvaeFm5iPvRs9GDX",
  "key3": "27vuZjHgtdiMJiWcsnBtmq72buFzzjuiZkQF2tApKacMqJ7p6t6BBCys7zzgyEYJgBj24wjogYT2VYQ7FzKsTzBX",
  "key4": "4fwcJKu8yaE9WsU92ubJZY6w82aR6dMqNtwTLmbgdSBwzCYYTs3kJfskAYN1dw6YccLxFhBzHtfMnBhNNX5iqWNy",
  "key5": "5jizWyF2rJB1c9pYmdKchAn6AByYdJxS2kHdVKzKh6AXnW3D5eYWYv88nuXfKs6dFiRBD8PHDnQ3ePirCDZaHMsg",
  "key6": "KzEn1grnT4g3WvJkdyE7Hb45yD5grKVJvmwJDrfURkufSYTkmhqnV5iBPwPVGuGXY5n2Qc5UfQvpd5f3QbbVffd",
  "key7": "4pbZQ43cZu5PUYcM14stAiYF3wqYyu77C56vfUvAUSCXAZi6tTTRyQm6rSSoVFLeDXxJhczmHpJeE6frSBpXHmoS",
  "key8": "4dyqe9pMYq9FMiR1zk9qWfsViot2K2YeXPUiGMCSdffm9iethFmVwXjyrnLPUVhk4SJofFErsTQDzSuaCPNbMqDX",
  "key9": "juqug6G5nBsUHzPTuU8cxAywnMUXsaCRh1zBjeQp8PHvpz97DQnVAR3GGkd3YyUYSTwWUSXEDWwzoyaa3EpJ7uv",
  "key10": "64AN2jWYGd9hEhLRCofkP3Q9rVj4tD8vQN67zugf31cG3rvrcTFPgXwXc3VKUv8LFsfxZ1t5dNyr8BeiritH5ZSg",
  "key11": "5sughMwyc7vPqTtBNzUk7SDWPbGNHh9R6WEaDMBpvVYHqviSh344hFL3t7X2apevavMYrujAE4gP9wrM2QeCgPCK",
  "key12": "2QNfFXG1KH3bip8tgzzxoTjdQLDHnWc2MQFesjbzpsGyDb2pykK8wzgRdduYku2uSwxS6MJpbSwUWEyRuUCBuUHR",
  "key13": "2sbZi7UzYCnPrb4niXXZ23c2mewEUiBhrZdPYRNoSFv3LMUxavovXJsXP3rsWNALb3r6auxq2WSaC9t8TdwxNrhB",
  "key14": "5imYFgQ3PZaiCsmxdZ3Y9PKN8P9ahZv3WaurDhQZQ6njgNLJgDpdvfuJqrzEpf2zikCc5DBP9ax9EqphcYVoaT8f",
  "key15": "5t3CcGefpys3f6kwWsTjhK4s6A7XMPScm1uUfcy9Luzpe6AEWj5T245MQ9WfA6jbjVB6dkzXwHSbyxv5nA2xmFVr",
  "key16": "4YJnTTkkX5nMEhBkxcyPLUXv94r2yuSk1Aawo5eMNfyvGsL4VdHUNd2uQDrJvS9wVwZ5FgM8MGfd8SS9iEHWvvaj",
  "key17": "2gFP958hTQzF9HKbtSJAdyEFPx2k4QNJdZa8tiHQeTaD3GMqycbkBqoYG3w9wRAUQDkQfmUNfr1fortpxm75X4yM",
  "key18": "fbczyAFCoWmDu55srLDmN5GMU7q5AogLRZoRNe14u6fWJiCiC5KqEW7Rh9Rn3wXeqRxfgWtjCk3dhUNj7eBtDKk",
  "key19": "2Nf6aerT5WAt4bDjNmCh6xu9ufDxdCYz9EHvQtdMRJefr1mHjHJ8BLbqN6SiPotp9e5jF5pb34b9hcTCbxhhRZss",
  "key20": "2pkHcj8st938SRSnkqfG6q638NA6cPW5HxZjJwxqC5oa8duSyqXoh4nvvSoR29D1gx6SzBq2NPGnDPfr4zJW9HMk",
  "key21": "5urkDW9RWH3bDYE2u9GigwwwR1rEBsaqLQZbupDWvUFsnCZGUAU1syi1Fic8fMHbHbyt2k91ExtCqNrBoiCUZhhR",
  "key22": "62BWYfGQeLXf1xbAwmnTKzrR7MzV4CZorY4s1NxPiCpDDsrrCskQddCxQRJE8fguwaHWxjcvR4Hkfwc4rqNqu46b",
  "key23": "58DRWsQah9sjHji2m3vWkHp14JZpwdKRMYT7JY8vcyvUYGMgmbc8nvihV8zetHREP4SThd25kNd9CA7gLTREuXfJ",
  "key24": "31WTSj1igDmMtRbyYeAq4B7VrsZrhqbf4NnB3uf5CmKQRGhhKXieKaomRiXS9XMtMLkeLHuZ2RatiPTSdkC6wnQj",
  "key25": "GCXN4dnKgsnt3ajTwJVSyG9G53HgynK8FoEnphVjH8JLZKjv53dZNdsjuMCRhZjQ5ahC6yBqtiy4nedUeziEbKy",
  "key26": "CbZistgHMMAeVWNfPYY1WhhVrvkRsujCcbzptvufRz8hibV9hmhmD8YvjKpyEABoeYRcvFKhEDq9A5nTHZcpmJw",
  "key27": "5AwpfXwtgo9KvVoDBgvZUB8QEqLPeWpYWHGgMWVWsqzJrmZnFBJCq3uEHuAVfxfsJA2jmS5admVBWJEtkNCqavRu",
  "key28": "4Lt5RdLN7qGrxPRFJHxmwBhq9xE1MYbPiSffP7FERhSBbCRbH5fRCZTQ8WRaMWSEMyKr63gnNxzoYQCffAKsAk2P",
  "key29": "5Pa179jfbS8QRuXSEExtp1pWGdCNSyU1AjdDMqfVTAsz6rijTBf5xXCTynRPPMbBzfF5weRMaeT9hs7xP6rBKhbx",
  "key30": "3Z2HbkoJy948yhzaPYkruNcq7CA2HSHnL9WNdv4BvxumTw73ymhG5kr1HST7cvFtKX7C2XMPqpmEL1CKX8TkhTVz",
  "key31": "5WPvrsQM8Eifdk89A7MMuLCsZTyizJ8V9CanfWomvCeFYDZ4tRKXCXBnzeNdjAmo8HRHn9N4fg7Ag3CaBzwo2ogU",
  "key32": "4My6v9ko2tBopinbBmmU3LLTdp9PyvwnimHmxoGevcwk3CpcNmZFDFi9XvzB377cKqwTDs2iYMHP4W6omZzMrDVa",
  "key33": "4tFLcpJjcQFRErX4t8f6YqKc2JD2b7NRXXSo4hNFztvtDUTAwDnc1j6EhpjoGU1vSdoBFvC8Zmq8yvvqGWs7jRqa",
  "key34": "532T1vJh5h3eN7LCWagDaF1VkWs5RJt2KtyoGW49sRADNMChDYnK8Xxr8QiSDdW9JcY4LxefG1V3qzbwtTxKCZeN",
  "key35": "5oJDQ3Xy1i4UsFwrbeFB9NMGJWE1REwVX7rF9S32UW9JiQeDo1VE21edXPCfhauyX73A9eHWeJ8xsZq4wa3f74oq",
  "key36": "5TRRFcLGPkvWYb35X4rVcCrHkmUW1jidFmXCAT8Yj3E2J1xpjbNfGriQSBVPCdP7ZUvS1YwUufmgkPDTe4JbxPr7",
  "key37": "4pJuThmzwX1hH2YVRemdh8NW8EFXFmbPihamFHvdrce4ZeQy1DUVoMyrVUcmQEpzwfz9NNtP8Jd1DNNd9ix5pkHz",
  "key38": "65QRCoGCtPwoNprR1E3prWyT84EPa2E6qoXbJwScATMh1Mi75rPAFaBaFcLV1gUM79kmPmVSajjV2u3nuaLSiRxZ",
  "key39": "31BnB1ucxaVod8SFsf4SrS4K64cohJ7JyTWgZ9wXo8DKSkVgHjejHTk5xSY5b12bTesxzePrnTPvuYJE8VSn3DgQ",
  "key40": "3qcK2vbmmqCukXyzUS7tEmeYuuGMybHABkNL6qoFpJCuG5M3kix3QoE1zX54XvaYuwreMKzR7bre4DBk4S3KnpGE",
  "key41": "36m3p1um5NzRs9LK3k7KJAkFz4nVdFcmjpDiuu6eHdp24Uhjjq687Qr9qDa9bU6HiDqsjDteEtqgNLhxuDP5CDuV",
  "key42": "5Y4hUN9Qtpof1X96Eu6m3jsouGHfXHuVcgRZQxda8qRHAQj4s9iPsBbpBF9SuNi6iYJfJdr1TuCe9m6BVQmVvgKV",
  "key43": "4YsNJRq9QpbLiirYyPCsjqpQfTYjHVf7qJSRfCk9oY65xFW1Fe2cT5NJvGZJAgvWKXUubPsH3KQ7Ur5pP9mnCYXC",
  "key44": "4ozaSMFdTWo34KoHra6ZojMNqEKKQam1hDWBqKSGtEp1A7xuohrktKuC1PBxAWSkzuP65XZWsV3mBpeNH5xNAyNL",
  "key45": "2QA6m6NGEXPLXPkhk6uugqQ3NzoivrmBxUuDTTAmnBNtvFmaQcreZNGm4e4hTFhTmT238yWoTDPhZLgBSNMjTiDt"
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

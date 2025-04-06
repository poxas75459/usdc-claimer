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
    "5eZeCwwZ71MNgTjQ8vHQKprhDSmoghkeeuGNwHSRvR4HKPPMauPL5ZeU4LZFD6vMrsHLwpDbBnTcWjHEvfuiwt55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65uwsJ85NpTgoWjhZY33t34VKsuWzJByJiBfRV2yi9vbS3qa8a9B63mbkYo4iP9MG573A5eHMvzkj6Snvc9mJBBb",
  "key1": "4G8n66eLzeCpa8GbtwYyv4rTuWtSRvjk7W4FdD5HJDkKzTqBtxS8aUyYcUTkcMKsxA9nEphzgtSfyFZXW5eHEgy3",
  "key2": "4fQ8WtF3E2Sn17nsbaDcg2uBvEJuFktvpi2nfPiNBrVXGALPs6R2KtY7ubAkMjqS7z7HHCN87WCFZw2JJe5zhzw",
  "key3": "4zyad4qqNVfB3tZDE8uJAMUK76hYfVuHdbLGb8GW4GLHN3KXNct3iFHm5odAKQ4fUvSjATo8KkcQibtxUvW6kAvG",
  "key4": "4NoyG2dHe8X6eB285vAMq8yvJqrePdztUoq7c9CKaQ4V3FhaVEf4YQ3eWkWqkPdEEunjwbXGuqGy472YVThMWLt8",
  "key5": "3s1qJsurwgfvAH9L3vzCJqMxafcW9yz3X31D4fBGHK9ECKgqe71BntF1n7zBH51kBgq5t1518M4U8eRM1Yek4Zqu",
  "key6": "41u1zz8nzSDPrW9i4rsTT7XTV4ytVQ41KoPhH39Bmh9cqcKne72Eeu7axNkrVqpW4uHA4r2mgisopSVAPHXMy8xs",
  "key7": "446ULGRFkqEM7eyofpLvCEWKbqL7cVvNuMQqnVtGM9jVtoQ4WFi43HP6aimLwR6krMwgy2NtMfH2ocCL9GJhrSrR",
  "key8": "2tHjGcWXNf73b4prjqFsZvvCWfRth528qGqWnwpjh5zHagsKuAe9iAuKiYmojENE1hw5BTpbtBsWQQdd3env2Yev",
  "key9": "5VDKDYtZcAQavmnRDpGsBU9TAc5Gm3xkFzWpmb2NWnwqfamb3DhMuUvH2vBa74vwvRnzurpJEKkJfUBted4xVSeX",
  "key10": "2KV6fsEWTP4LyoSUqYXrnSnYGTAq8zwMgmvcUd18cS1mcgq5bUFT6Yvg7GVqcGjemvpN7hmz4gH2QEMSivqBGfgR",
  "key11": "XHWwLFgPhrqQvem71hajtssBepU3juo4pH6LLMqemM769vA8N5PQnRmwKnYesQzyh3SJvKEj8rR56DpA3p4Ppqy",
  "key12": "4d3ukJ2J6z1NKrsh2Q7ZgSPz8QVoYBq2ULEszaJXjbvfTzUkGeyQDZbQQcsbgBS9rVi3CAfucUiKeRcZMMwxNTXy",
  "key13": "3zfmw9BjvFteno3rNXv3eimB9h7i2JrAw5T7H1zX1kf7ZshrEjgYK62t9VibRQ3g2Y6r6b1DX2Amipuka76w7q8w",
  "key14": "53uyakAcyc7BnLGHjreRmYJe63C1pp3eXvFndMMnbNDju6i38QyWSWDU4Jvhb86apB7wk5F4Jqvr46gxoP5EdcYz",
  "key15": "3bXtaJkubaKVENUqH4q6eW3ZtiWUt7hGZVw1WfvJU2uDaAVKVzVui8cUziLkS79nzzAfkRvaTPdXhXjL83h7pJgk",
  "key16": "42xhtq3v755A78QNTymFxyZZAVXYFW59UHLfUiwNB1TT8Y3Ppv5JRFyxTZsNuHMmDw3zZKy41c78e2vCsLmcfrr",
  "key17": "52XdU28z5ZD848giDLMjFG8xQsYscveMHEtLiakn4dYUcj18uPdXZ3YUhYoahKRBSgzkS5qf2apc7ERYXa3qJ6TZ",
  "key18": "3499xeQz4bLUe2Jd3YpEs6LQqr6HC5KCocysZss7p3GBoDCQWVqpfb3QQ26BUHt4krrbgQBUL5EE8vWM1W2LYyY3",
  "key19": "29RnynYag6HyZotVwtMkXyHDn9gkR1wn3gQkyPjUkd5gYX5hQ5bcLXrwH5emMg4jsRxAxhdvj3uv9SdNHnSALj79",
  "key20": "2AyHS3P3meToZZDPiSwBanumJCgtgMuDZCryKkiSTfwDsJxjQTdpczyU68zULQLkz8ot5v8XVvLHYuy6stPYQPDP",
  "key21": "5ZhpPvQPgTa2GY5vwvYLNRRdzG2zjBK4o9LbhZaDg8bRYbMfBEMQ2mJPSKKnTLG6GpkikkJLhjQi3hK95DiLWeRh",
  "key22": "5JBg4E69ckePZSFe6kCe5qy37Kqfs8XzxTPM4qU6A7CEufCiususmipr6wcM98WfFK1TfFaR53TBr2fmNACZW9AV",
  "key23": "5Q4QmhpwhAiCofyWeg3CmcbfNxPpB9R8YrQ8JoudWj5xkT8xb3UD6o2J3n5G8cJYJJNs2DYf5Wk8QNmxSnHwR36x",
  "key24": "G3q4d99zuTVDXKRMbEortN5xBMDE6GwuDWiRYJu4invW4HCE1xNXbsTN3gVC1CFxS8thd9DyAzh1ha1H8eETNNk",
  "key25": "2oHe7AunJ25ozeBNSnvtr7FsMFt3UFq2ykPpi8u13qdmgy53BJZeeYRhhACciUBujNA8oPvdap7RARQsQ26FVVMJ",
  "key26": "2JAQ5Kev12UMU4KhiDvjJVwWsecvs7xxU1jDZw2frNdG1QF8RPBjU8dCsdSHCfoLuMqXp7HEF2bqKS393VuKQxLC",
  "key27": "NipGnCT3vwJmZYvTR2RFPdeutAZ43jWkU6uJ3eZ5ZXXYh7zQVWLDfsMV7Uprpij1rHGgREKN5Xf3doDC743qAZx",
  "key28": "2zdKGvZB1xqJwbc6u6PT51Mt7EswPuVDs5ETJDVaCEDHAMhvHwyEe5Uqw2mAyAUk8Chjdc1LLJwPugxdJHiUppFT",
  "key29": "gBUhi5UYYpUiEhNkywcUqXgYxQUzhoyZTfkpnaqAb5FrVdUATyJrsdWTk1bHWu9YdHQmwtcJDB97HHSSjwFVcyt",
  "key30": "3xZG8ttTsRX96ZpUDpfTacQ6sRniEHTqidsSaa97YceV5VLhAiCBzFRqx1MvHzCaRcuhKeYvm7eSjGV9JVF8qwfC",
  "key31": "AEzKCTf7C5EfJXB4n9654h8y4fRr1cTnLJxx46q8WEXxgmRUc5g2fw4v2kx1pSwYpRkfwS9gmamQzu2r6cSWGXV",
  "key32": "3WNU4L9pFncEhj3CyrZCAeo2eVXBZYEmB6dKptZmHNkCoUWz9sr9151yVE4v3BaU4rXHSicNVm8J5soiCevqBUaj",
  "key33": "5jR6vqZN1oTGECyvnoD958cJLakH9CYnDPfDEfdkBwncgCkBjay9hM3W35sy1nw7g6aGn91hrLF6tQhxMWtW2wPK",
  "key34": "LvdRD7ZQbtEjvKvZBsvFiTdSjRGG3RFV9UrowiHNo1RtKN9NATHnsqpz1UQfLCYoZVSBasHhZRCqf3JbQFvcbSE",
  "key35": "cEyAWFj7uw6CJyBYsmhavfRcPkyGiC62PT5tbgLd58LUtgqc3rLyDRSYReUc2m339A2bAUTGab6zPMaQACqiv6h",
  "key36": "HwjVCYBGn9R6tYGMQdfRBe1sqHwQpWRyJH3G3bT5ubLAK4KLihMS75si9PdeYbGZqZxJZLbzG4UuKkBf4p9GKJp",
  "key37": "2AXSrTswjSDziTQHUtU42dRN9m4fVxFVLhP794TFfTYwueMkiYLojSHfsGZUErE3s5qMxgaitjsQtNKVGWADYYJr",
  "key38": "3kMukZBaPHZA5BZ5apj6xQYHcCkC4GHi5aECC9sGcGNezAVX6AZWAnDfGoX6gpztGAXTzeAubAeu3N6sGBwJswxe",
  "key39": "3jiPrsa4YjKgf74wZjnA4azZoZhEbYGCNrVuhQPXVoLQk5C4Em63UofBtSXq8W74PmaLT4LJcBhLQPDGchi6yK59",
  "key40": "421QaB8EkHg4FxKXLMgkbGM3zsndGmFtW6snznMesqhJvXStvmHRAHPqkCe7hGJrLrHy4nL8gm8brLVzBNe3cY2T",
  "key41": "5epcb2cKggoQUp9mraQsAm8tXKEnQUjNPHxc542MzA8Rm4RRpYZG5cDxHaSKLJ6Bh9fZMCFzwkvoGNRj6Uzq3Mdr",
  "key42": "26fjm7HL6GT9f6rXhVVZojMPSGY7Ec4U6FwN69oiZJV7WvCyzbcDV7YX8Z6SXK7bW8umZ6kjppeT98bDQjoMPQaC",
  "key43": "P76ApXB1qmP3iceMbN3zKYFpufXKaJMjchveNxsv9ouEKpsqZ6HXSH4G8ex7AinF7aoyyNQLMEpy39H5iPFjNye",
  "key44": "3q5dvYnC2CuK4pvAa8oo6wXxHBVuthooh5H1fmPz43MTqvLPG5GDB65Zoa4o5zQaNEK7LU6nWxR27gj5vgNevR4b",
  "key45": "32y1mne9zxdqPin4zoyjrwK9W3J4avsNXx4EPw1v76wVFGhhuGUjqHobGqTj1DyCBEJUAi4WX7VvYWzz2vTdhzxv",
  "key46": "5SHEbAata1vjJcK5inWqTfrnwWQ7TvUkAwRjcpXbN3r9JJfAVQnbK1JLLkEW1oiLnQ4KWpeUaApCgQiLc6K3BhZY",
  "key47": "qJdhcJU5iXkLTr4V8w8zUWS9ibJ1iHuCrQ596x1Gm3Ctq5mdHiKmGDU5QcertD4PsFGcEqopm1J7LmnfuMK5jDC",
  "key48": "2LPUNXEgs5WLdGD1ydZXgsakgXosBLQCpi82gj8ENQPTDp1RyKjokPLMzpqK6Pdgro43rCZt3rkLZWb6njXKGveQ",
  "key49": "Jg8t8zwytXkoXZ3J6wRR3oiu3sPhLBf9hBbo9Cq4WL3RQ1F2DWdzz18LNtTqTUqm2R8WiXsUAj3Ythu2Un66m9R"
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

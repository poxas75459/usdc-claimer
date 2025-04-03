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
    "2Nr5E2BPqGVMqcqdGWvLYfFgxivWNWMQ8aTDEhp7LhhoHZPK2JSR7UA5wDYX1x2AXSxZ5A9QgDnyet6zwXTNaTGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z6QwWzRHjYks6X7dijLLGHLwofvDYDryQEEgJdiTd5fgF22Kmo2sjizsqcnZeTw2sKx5uzX86Zh5jfzTTAZaCvR",
  "key1": "BtCYy4dQAetNY4vX624vuwnjDjwGuatE6PkfeFbYQ6kbgrnrD8goAkGpDCsBp5CWMPjbR9UuZrciYSvS6TR8xYp",
  "key2": "H3TXYab1PZ9gPeggtqzu3m9HBygbQck13H4aLUsoRQUxDr9hTdirCXLrzQcvYPzvutoH8WmsuQsFsLckiehxCC4",
  "key3": "6597dvK2sTXjQHtviJDDqThEs2R6urN5iPR5PZT4uxW5WRcmeksmGr9Wdh5QRowT14tYqBbdZn97n24hyU7o1brK",
  "key4": "hUSHzonD7V8Ria76FcoHmEWUfTCCQCm6eDPgPWzK7gjqgimC4urJP3xMUSTtqBhgtgo9ZRh8irfdWfyg1yLsfhw",
  "key5": "61kfywA3Kn56tPrt1j75nAv91cA6ByW9LHuxFod8cjokAmd7DcuX67Xa1XJ9JQ4mUueggAuJxs2Xr7uAbXaSThYa",
  "key6": "3Hwz6inbCfb12Xso2VUswT6eG4UGYDC5nGGLqKw1aqzK5Wht2ndTKZocCGYvLLnjt3Max7ekhZRJtyhdEp6hrpFi",
  "key7": "5B5aFWJ9j3iz12fZHANRAZeV3KoWLcBg9TLfHtkB9NRGpSQkvsF3ta64QjxkAanY9sNT74feUJuBsd7WnYBBU5Mf",
  "key8": "3fXmqj7FHk61uKTKEtnANeAKr9KQRUfjLpmPRvaNXWHZzZ7juD691YvXtFEa1b7JDtgzcfV1LUeEdn3u1XHGoUTZ",
  "key9": "4fs97FuyNDWPMAhYJSinh6zd1ooMX8CjcwDWt8Ko6HAJU8Ww4WCpXVySCjrSwGmjXZTJWtg5gTERnCduaxYJinYX",
  "key10": "2qwEWx7zaejeEcFxBnbJZtUfJ7XP3K1334vzsi61w6CoZnttXi79GatSr4WwAfSRNqHEzd1zdbSp1XqJS8BruMe",
  "key11": "3XnzXazYiCFb66tt7HZXxYYdymjNHbt19CTAqQiQtbPDRK4d8jmqMeWsVn2m8c6svzQZ4qGgU5WWPUE5fKFXDAYu",
  "key12": "5LGKiAHpczsjtbGjx2RqGwj3TiCKHfPJ8hfEEmMbuh6U35arweeuLyRzcQGkHg9art9bBMPHxATjSTcvWq9mFqQB",
  "key13": "5rMGxoJNbxkuH1SVrNjeVSrxgaJR3Nky5iJ74orUbyCXsUciDG5tQutsJTvjcmUvQZRqQhzZLcfdFXogcBGJmgb9",
  "key14": "3YWT5gaSXQ2VUaeqqe6wYUAxbA1shneHuHrfyPyg3wTHkfS6QqFswY915qMwxspaE3wboy47MPpVFiHnJas5uUyS",
  "key15": "NRqoNSCF7saDhpKEHRUmbdHa4HBHkXA6U55EBAS4L3a1KqgBco8rk2WrnC2Djo8nAZ3JyarNbv1ZzfR6aYi5TTs",
  "key16": "51Q4odj3qwUGSKFCAZf5jQWkrxBK7JNgLBoWsS7DTfyPvmZLp72ixn1vcKdEyDvaFSu4nDTEG3Pa41QWjv3bp9jP",
  "key17": "4RibqYRHExHa3NwQFsnnNFHsfyuG2YbWm5LPgTcdNzMRMiAJSCxq56H9xc6YfUTUocJYx95ENtVb4bfo3qVCng74",
  "key18": "rvk62CT28efrTGDuKvsaRw3CcrkivTok1pCG9Tm2LBJ9GSsPp1nip2TwxRBkbgn9KGrvBDRsh9t4yXYV122T72r",
  "key19": "3PCHCmqqWdQQWXEKH6v5wUBfFzaXby43ekVBd1mZ2oJKrKm3qrZeXhGREhkUb9uAjV3Bqt7YEQHFTLqryK9snUyU",
  "key20": "3PrjRQ98P3M2KswdCcntohX3AQWVzHQtTDXSGDnfE3TsFryZHCfz5jMMnoXWePdHPkLB4eQ7i7rtToCE4CGeCLw2",
  "key21": "3nS6SgAi7VNKFafKZ6Jd3Tdi1BL9qTm7btCoksGYgHsMk8Dywr9f87Q72sHqvHqwaMrhFuqkawL9tGKguVk1hJky",
  "key22": "2C7KCAkTo6SdKR2C5tEBrn6spJ5fmamiUuLNgbSWWQVv9RELH96Gi45pRKvQhwxtBodComgutRU6rSgeaJ5MDxCU",
  "key23": "UHkjjr6RCAdzyknT54eDdF88R6ByoJrMmmhJE56Xi1PREqFBfED4ouu5TF4swp8vz6unkdZLa9ghKS6VpgSnG6H",
  "key24": "4bP5w1Zhqb8SAVj2T3kFEiXefcjPfdhxzkgxGaFKzrN3n7QUqxMTm86vLVGYoXWYs6vAnpb8fMxGUxMzcMGHNHKt",
  "key25": "3X7vezp9DB9NxmnrYvw1eA8fYxy8jvzP4pW77NFofg9rJYgDZaWrunNwRcguhqPAMJGsziHMskfcSCJvwQYc2Rwb",
  "key26": "3DdyGuKHRbRtmcSBt3Bn1xrf1M5zpkuipZvKdQkL2Y46uqKASrEhctAx4gmDFHqW847a2gWnZEK1r6H7VzsymuSp",
  "key27": "3Lpwbfgu6XUjQLBeAXLXQrtdYZmHCam8ZKAJT6aCgBPDVGgVZvwFnWv8evsw6Ns5dz5SYk4gPf38CGcF96RmukwL",
  "key28": "4vc1ximQY4EdnWFK2QMxi9ApvTer2FP5hQgFUPUVBmeSKc77FUMMcVphgUzrpWypgR7yiDaZ14QSZj76M7gUrCTL",
  "key29": "2Qm8qe4u4KHzebk8AbSfoQNvKEiEkxQ7GLcvMSNKChp6AyeYkrGszmUjK49fY28GfHRDFZmDdqLhsmFSxCZJGrsH",
  "key30": "5jEXdSwBoUaMdyqCd8zBpE7MwVRKawdL9eBPYgswSFUySaKXxHcUS2cGfRi8q2zY6eZGpZCKM3wGymgfC6e8Zq9y",
  "key31": "5gdwofYqjGjeb9WhSNFvtxSgZ5ooUaB1BsJHxxQEtudFq3kKQaB5ShZQnYqet3KqveKMtjB3Gz9JLwGq6oegnj3s",
  "key32": "4mJmQWgVZ8roARidUf8f3kQvqa43mM61K6gHebckBg6kFWcBrnohAnBL3oksitP8rMuLzsUo31U6nMC2DtiHDckB",
  "key33": "4CmdPezU32R4VpQCic872Wj3N2votDbHqhAfXPmmoG2Lssiemu3vy2K6HFhhKdb6JbqNYK1wpgoUHN1j9iij92tZ",
  "key34": "5mDtKLyBa18NdSdTcKCBShXGVJiy6G8UbSAeUzgFzK6YKNGLuxQhPwcNiBGNT9ybi9u42qCrn6vMPcczFoboSzM1",
  "key35": "3jcjSD5UTswBQcXxSV1h6pVynUK2wu1qvkGwsSgVJfZY6PyuuCLAph6imHZd9KvJNxhDg6qsAXK7kKkLvbgUWUQV",
  "key36": "KCB4EaBYt9mQ5FTxZ6BCVccdDfYLTMekVyNSS84FunduLUXNYubaZbowaxrLaSLgb2BzHpkHu1u3AG6NE8R9SJD",
  "key37": "4MDsH29thGiqdn2AVbFKLJAg6amZyATYYZnFtkXVWgx8n1SicPFQBbKV6HmsZi2RKn3Mtb1eVrQgLbA85yn7RHwY",
  "key38": "3foGZRNYttmvCcYMqKxurJ82nP3rwKd3fYcGzk8Jorpgq3yyd7XXooakJ8HX7sVyCvyjGFjRwaf8c3p3mWoaJMn6",
  "key39": "2he33vgHK9Gzjbc1CDiCngVDS6PdYJSnKVigZ3sWGeNHgNFmGyHq4TUmbuWrbmN9zb21tfPqjaCzKiQq1B87wrno",
  "key40": "53A43gZGbrzKQdww2dBdHFqyhLVEvQyzi4x2UL3Ek3wniJvqqLJdpYmaagJdJBxEei3UTkZ7tCGKeiVn2hXie26F",
  "key41": "S7uLH7CTQKXRmEcA2Tk3XtvHxDD8yVWBghGwiex84738P5b67bJsm8Xt4p1H8iSe5LpSa4g5rvNgjfTMcGDFpYx",
  "key42": "3Wz2FzTXD6fYsfuhE5ZkDhuTPNxoG5nicrwg9JQyjeagAtkv2cjT2M2FRABT4JRLd57w4bVUkMjzhEtYieN83cti",
  "key43": "3SeZ8LwN9SsN6ArQ1LWBTEkK4wNyrokinesXf766tCZDHSyySvzERLEeqiyCgGWEo2RkKAbnFgr81GfqR5BQ84ij",
  "key44": "4j43GdBYQx3gFCzVLSzodWT5dYfrF6tv52zV3HPK6Q5kUMAZjxmKXzUss22zjZfVAUo8xUm1YUeGJM6AxhPdNT7f",
  "key45": "2mLnzTwikhQ2fHRbHzEFtqAdqByYCyjaxPuPyMxfKyTPbKmTcpD4hoCCn73uZb6hyjFQ1gMj9maHxu1knWh4J6Ws",
  "key46": "4C5yPBQsiyG4nHAHqz5sMcpA4yFgK8QVHgccUji45aeovRSgSomQN9ozu2ZgCeoBhPW732FwQCCi2Bi4byeZAy2L",
  "key47": "2s8BB7bcXiGhZWVqrS8CezFgtetTz5qRj39kD4N1oxXSM8TXx4WwZgfdcDf6X792BfGfBXEvRhACcx4FcC98y8Dk",
  "key48": "4PaKcnUhkKJ6YLG48JJ6f7ecdhDJakUb7mY53mccYKUV4jfuPi8b2gJffqgLRhJMXSEioJW9V7oJzNjrFSn5WuDo"
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

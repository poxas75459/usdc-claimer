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
    "4G38Ep7AGU1TLrHEjcBkySsts3mz8T1EMfMmks581ZJwCugdPbY3JZH9xoyTFfU1LgWguFVXxSz1yWZwwgJ91Ynf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rSmmagaSNeDy5rsV8jBUpk7Fm6dve8PRpVh5Keoy4MjGSAu3BfqijA3gttCYGyPnAYTLvXiYwHeJ25S5Pzrf9Ao",
  "key1": "2XJRZxcrDdqfJdRwavZ9xYkfmZEiSEpDWSBivMDBkbfuy95gbGFFFjJjP4c3hEZZfdaZkCNZBNmLSgYCe3fvmHf6",
  "key2": "3jxFQ2ZPqQ8gwtxWYB2bFKiEbfacwyf5NtAjuA8fEA4UViP4AWxqTdRMj78emRkgDDWdT3rLScPESYfaDZnKdTnr",
  "key3": "37Ge3GcDJj9jveh8Ybqt4kAKiFbFzwmAjegCfCU2d5enkNVyTEpfNHQJeCmJFxhAQ4bYUjtfKLa9GNaXeuyL33pi",
  "key4": "UVp3dqqaAxdQm7BKcY7EXX6erBeXLGidFcRwgqCNUjVw94aE7zsmf7kBFkNJi4wR9P4uSC9xYrair29zsrmdRkX",
  "key5": "5BTzMWQ12Lh1ocCCwTsV1Tx9Z8zhcsxa67tFzKR4pcTLsDjqGnXwpjes9Qwk3gr9saDtvNe3rmfSzVtpvZY9KkGg",
  "key6": "FQEZ5QPuSt7ogevbaVMmEpeTChX894erPGTm8K8etL1WNhJnQ3fZ5iCMEokPwXCmNszkeexbqxeZUaZCs7ud72k",
  "key7": "2A9PvdJXvm7AytdFes3yRH7qc9MCeLkdUh6RsqdcpAhKp6tZfe3GQqusc9UwTg9SypLmjx27c7DAz3J1rPidr3rZ",
  "key8": "5sqJ5k1BGeQiBRRscGiqqwYXH48UTeVsVMshiUwCpyUzdKW1NYNgnJgdjSwKwcMcNL3hTcPwbxHrECQwQWgL68tG",
  "key9": "2qCeKSvJ7SztarpseRWBwTQxiDAHEuMvSvY2UmJjbLF4G2GDbGHun5M2f2eLjUnkyd2FDPNFmqNwjusCd5mAwqUH",
  "key10": "HcvdJkeQHjv5wi8rqgNLjmWKgSK8pLVVXVbAh2b1rvykjPqWXQJMn4jbppzDJARyXrptiE2BY9ofhqZzCdgwW4z",
  "key11": "5aKfyoPTMdrM5kJbSDgFC7pU8SEDBs2tdDLVm3WbFZskfgGdSzus7eNt4TkttGkgP1TQ2for6YJEUoDRCoYq64V",
  "key12": "8dmFyaCaRFqjwK8jsq63zUF2EcQnhkqmYFNkDL1L4ZzQpTt3izuzgqFqQEL7tFAPiP7bS3R2fgBe72tEKmZeria",
  "key13": "5nEzuHCDZhvkXvEsGDvPA1CxoQ5oWDTYa8D1WCtDn9VnzAcwQGVSRsKu2YxkHyFz9u8XzRdgq3oC81zjyrLZ1n8S",
  "key14": "4QnFoDJV1Ef5MMSL26obtiyCrJvYKJGQP3udLCjJBpH1uLdwCvemipixPWgigX9H3aSxFxbSMEuaHCUG2gr3j3TE",
  "key15": "1Gy3Gott5TdZ4YiwYsqUkik67qoj37Sni4wz4ZcmpKehKTo7n22mSmhkJ2eKUjN9uhMHEwMdjf4Q6sVVnFNU3wL",
  "key16": "3pXi4TY2RLyxmQNENsG27v2m3bHhcbbRRPARFmMUfpM9WNWscEq3eCN2TVKc44XQabRfg81L4YhJFnVEmW8fckm3",
  "key17": "2t9Zeiiduf7HmRi5hW1c9G62U6czQvm4ugC7rmtnuvu859WpgTcqrZtkEGLmRanTn8JiE8hxXa9HuaRLzfLEuKTe",
  "key18": "4QdShN6f1jxiQsi3CHNnree3dPjtqaLJH5KHjCAtNwbebwwNyyTye8smdnYAHHKhsfpgNDZ88m6An9xxLPKXHXXA",
  "key19": "5Qya5rk8Bu4QkfcmrA1RRiceueMALuDMyKr1XERzdEPJiDt5MN1ximSzVy1eBsuw1Pk1GEY4BQkfbqd1TqrokKSw",
  "key20": "2f2u91hfkQurs25ZMFWucH9wA56QtascJGrcQcew3DoY16e3aAaYs5jbRQfZorzeSgsM7BzvNUVLB71qRRBvV5fw",
  "key21": "5bz5JNFN7av85zM6g39JYwZ4GHNURimZZZ45Wq6p7d4NmCyd3LXQquMqehZS8SaqQ5kXRJxUMhj5nfHZ6xz5VekT",
  "key22": "4qJ4bXZX5SFRfGhu8938vtVPAXe2iVrkpCyyG1vHheydTgfKexURYGet9z3sHZJneeJA19bWZbgxBBLiZj77JUSt",
  "key23": "3fGr97uGVoHcGxiAsfgmSts4QvSDNt1qBPG1T4dTjcARFxV41iDpPUrNRDmxj8LDjfHTZZibveeNUG1nHhaL3iAs",
  "key24": "dV3pxUEFBBmk4ggDY2MeEMrTUe43UAALhoxciAnCzS4odM5vJtnujbdHiBPXzYwtAd24Ydu7EfAU13bmjwjxwTW",
  "key25": "2B9uczWeypB2wv7tEx4HtSTYPyxXzeb7e11FJAefgfsh1yGCPgbg7c9DJNkKmGx9PBqb8jWez74nNATv7hpSBoRb",
  "key26": "2tP4URzYXVSzP2KfwhUqEKd8eNQx874C3zcMwzQTFuuBgA2XuypTMjh68ynBbG9NfkrpumrTJLFTpFRUJqAnNwAH",
  "key27": "4efBS4fqcdbzswowLfBQKSWciktD3cqs6e56gHdrrSQQmHM9FYbdbdwwqeEvv67JA6X5ru6bvT2wS7e2xRt7Cjso",
  "key28": "rPxGgSGQB2Ni8mE7GxPkzjGbwSoERmk6C9pNNH9GpjN9vDAJnzAn4vaHNvgWAKxdZudSP7rkydmJwVYQSitJXor",
  "key29": "2QumV43HCbNJoa3gMvDKy22886V7RGE5F8xw9w2HZuRrch2EjCt7ZyZrgqKRWqGwxaoKaHHK7rwuQ4BGQE31sRFM",
  "key30": "3CdLoz8zg3FVPEMwBoxrWKq4e7ALpL77qpqV2yzTEY7PK3jNkQ5o6HUqEXH5Xz6Kx3VPmwaXFqVNrMHHVBu7nQP8",
  "key31": "2W1GPow9kn8dXt8uGY1XwSB9vQhdosNnYem7wcYGcyvHHwqDkpZYDPmv4nS8nmvHoZYCmjHpa6crAZJEhyKesBur",
  "key32": "25xNEaYFmUzPsn5j25vsAwQvLx2pxTdPs2Y2dLLGrnApA5XM2RN5vYd3Ke5UJnwiE4pTG4zKxSijY4ou26XnRSSV",
  "key33": "3tYbqUrmZVGVZYzzbwtHkQm28w2ZX8oaEp7XJ4R48XQPzCCehQ9PtNcTeiyU5mVgUz6BbgYXG41zaw3nRoNr2CB8",
  "key34": "2pxwbAKgtucmSnRqo2erQUAni6TE6DRtQ878dNQd7mPtQxHY8EsLF2KqC9EMhe55ascaEuMGQsQdas5gWNGmoCG5",
  "key35": "j8nPrrEa7oZJHeZnUPMb9B35c9LweK6es6fSv9vxtNoddtzPH6hb5VnbfLDSp3iUxhAtjVWXiN3eWjYzRgH38nz",
  "key36": "32DaH67wJRW7cJE2aCbonaJJzu1NsYjoETwZgPcik8LAThBbmCzx4w3ue6Xhm4D9AAQsfmjaf7SKAEEqnmhaADen",
  "key37": "Rz6HqsVK2f5bRbAFMDanzxGP1xbcWL1quZnTuoAzGaZRnzZSqJzmMMnXggLPUGfFQ4BrDHaYPkP5vqpVs6iJJ6S",
  "key38": "nasHAGxWQKdsgNsA7gzyKGHyqdknJrjuPjFbiV5cLBZmLQj2fS4Q24iyQwKLrrZFuAJ6EaP9ekaKdwDt6x39Nug",
  "key39": "5S2VpRfdRGoRgkXR3un8vLa7SXdgaEQmxkr1poJwY5FXAR7kHjunSNpHZwsCCiupYvtMcE4Sd1jspaTHEQEiP1o3"
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

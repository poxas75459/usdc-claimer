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
    "4poVFRw68xyD76tD2P7b9rNyKCAEnHCdU4QjPqEZXQ7eDqqBYnCiZLSwuntJdsqkUsUNBvuGRgoswQ8D5gA2oU6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xdBjyudcCJwPjHrZwGNFyc6J1fgGsSHJJegdwJenmfqfkSoBxxgcnHbaDSXLhzKcweCUD3fq5hFzyHqVXaNoaWg",
  "key1": "4Woa4iTDuG5e7yKDYpYtmudKxU8iyHNe8u2M2UgRR6XgU6o7BcqP2LnLpErQ6QiZf48BmP5DcPCFcqGf3b7s5JCM",
  "key2": "jKMmiKt4uyKDSUUGmYBf2FP7ENtv2XNto7AFrj2HHDLthKsYPkfk6mW9qnSWrHDYzKMrSv8wEa3NrvCPFUbN7Jv",
  "key3": "PeMdCdgRHZP76qisrDABmXSVyHTygmYtCyvF4tQyfchcbFG5Y8r3VzVkiExTCo1PWasBHm9UbNPDkRNDZ8nxnqz",
  "key4": "4BFWErKX8UyFngBuYvvJ4YzHHqdyDxqEL7x4ckyuzAYiCc5LjmT2VZAxFV8L4T3crL3tRGvXtB2JHBp5rRKXoJi7",
  "key5": "41pma3HB7PJkwQWiuv3RoCYed7Sy2M5uqtRRFTofn7tBtGgVNE83nJ3EV2hbTCd2tcgDVCsQ5QDdpkiteNV2URC7",
  "key6": "3bdP48SnvwZV4MBGwDJHWKDFqwQa3cc71kGjyXJfYPfKExHL5HzvZvebNCsEXESydZfYepLUaQt1Sxfjwq9Wub2F",
  "key7": "4xWyVzAxrHTKcfwoiAqZAZ56ZRog5pbaZe9z1q6mJNmJ1R91NZSqC8D45LrGrYgzCTgZqK4RQKA8SKjqQ3rtefJA",
  "key8": "2PQccH3iBPae93QUjKmyiRRji59VVeXp1kAYTkjM6T1kgKGYLjfWaM8kGpGTZvw819kBFuz3yk83FV4UZS4fLTXp",
  "key9": "3SFAAW1YBWciFkBKmb6HWBHAN9biT1jwa1WDaJuxyK7ZczniBrRh4a9f6pExvyc4QA5QtdcXiPiyy7DnGC2MWrhQ",
  "key10": "5y7KLSdEsTQ1QEPh7Cm38fdv6691ETTKmtx4hEvXKaCD7gnirnA7sUdMw9YQwPnbyDcTwhRoPXyg2YbVe8E9urys",
  "key11": "gEMx7y41eyZ8LyWV6LqLLiMqe98xKXVS4rFpesy1HagDDJugjuicGj6LVXuB7SjWeEenwCgPBu3GuxRhsTQ9Cr9",
  "key12": "YNGGUz1B9hQcyc2dmkL4pH7HPPjABBa7BqS2BkBUyhkGABBStiA6YWkRjhTdCGq4hncACc1rbwd5iD2oQX7L9om",
  "key13": "4gokgSu3AWFzkzfMtrj646WM3zfk2t1bm9cTvDC5PrkGTtKFERm6sinUti4k2ZYyAX1yh8FBEJQVzXBfKs2EQeNL",
  "key14": "4BKsVanR85ruMiUqCbs1VSftYhyed2wsDJGdHLwYcVzKH8mdrE5wRahDD6AH5QmDiBdj7kmghTqtybRdtKpzyrF2",
  "key15": "2S1HL7RWjckfpxrijew2NHrnMe9Zwguh1u1KBUmHkf9CUKg25GviKztcFZQ3MD8rFEXFMvnv6reLrUE79YKXFhtU",
  "key16": "5eKBGkD651ksidhiotmgcMfXu6ca7Fv8QLJNwRHLC34ftxs4CyPcNBQutaDmyp7qjES1vTR7nofrDUZPT44HTA9v",
  "key17": "4MkhgLbY8gsmS7H9tthse26JiMttDehjgC7xzfSnqzdzG92iR6eZWcTiLV4nyCnbGrZRcbgNShCQUDh43pyCtUXM",
  "key18": "2iQkSf6ZTpC3MLRzXuX23VjQPGDn25VoLSGxCA4rZV1Unrxn1WXV4wJpuVQJCcxXozgHCV9NbkPM75b2hSiNyHXF",
  "key19": "21z3k75Yw8h7c71eXTDN3rBv3HfoLURop6wYtJMqNLyGruUPhR9BQcP63KzEL2hJftgdqV9gvAJVf4W7HjufPmAC",
  "key20": "4iMmfeaxPyoFHLiwkJAPrftfxaQjv3KCG2WbZPyPyVnHPyuAHCjA8AXcGjmrGmshSiFSJJ561KpUErvFbXykDxdQ",
  "key21": "2ey7xY46ByZr7DUqvEmcw5nw49ZvvJz6QXqmTNzFeHio7win1MWW1tkscaMnzKNddYB6k8tKPrQ9kFxA4F27dwjj",
  "key22": "3a3uCbzumbZWDB35jdinzNYXP8tocsSikU897hwH9XHnvqAnPjGc9Ag5DSPNC2mNmhymSHqNMriq2fip21fEvsGJ",
  "key23": "39YQZZbtNNebCs6TrzyCfDbxKBk526AndD8ibchbSarFV1oLpUbeeMNb6tbfAH3rKKkRFxvQejpcL1WtBMAqkCZu",
  "key24": "4hmFe2btW2EvGBy4BsVH6tp3B2ESQeEZN1davLyjuM8ZsVQeEFh6rGHGYeaUSpS9dwpBgQmUc1K8eG89TS2fXvkc",
  "key25": "4GPZiWTRbup2dfmvPzyHwTtxY88r7t4VrhJsuSd2r4ZeoyQzMoA87iRiJyanrgnd3aGoM7KQjMMKCaVeAZ8GhjgG",
  "key26": "2xAhzWkrqnC9mdJZqZuBoay6GAQqpLNgnjfHqr4cBNyZ7qqnvvokMo5HKKzbmVeEnRPP8BHLf4XLgSYUwqKJu2PR",
  "key27": "5hLBCvQDV5T62LfMCuc4932LZxrWUaUGtqx3NNdJqCzsGsomdEDbnayZvVKzo3fqA6dDFS9uaAUSGw1pTkyb2HQx",
  "key28": "TWc9mSDCwXn9s7WzaRkaSs6yJPxqux5gxwaeToCbnGp8HjzDP38HbRkp6bJBJfrzAsbFSrkt2d3d9tvm6XzfsSQ",
  "key29": "58oVtSyJKpL9fxZSxQGfUYixn1FPim4NappYaSQ3n4j7Kv4B4aQ8TJbnXCKxvgjXp8SisMWnPNmdSfTKdrPHwXH1",
  "key30": "64PWhtw6zc3tD2foot7MFN4VNd7Tw7CfiRE16DVHSazpn1NMR2hbUdQceYT2tpLUg3mRehTLC6qUL8UGYtb2AuTj",
  "key31": "3E11A1ssLvB1TjARGrVgYUWC4Mt2sZAuq7jjaQm2qDejsa6kNechHR4b1mUyNmgQCZUTcGVbAG2bovSJhw2N2CGE",
  "key32": "2pEqjwbobkoHryTcoWBkbteQcwvL7oH8YtZznhoq9uBuJXm3yLXLixKgRqzVkaerxEHrE9x5wGkxrVML91pMLCSD",
  "key33": "2is257yCrMLXGsxFTqtJ8tfRphszsW9pi783F9WQaeMGPDSoP2FqgAuLM565UfQMMugNCSt2CueFjbknxtGsBja9",
  "key34": "4QRXXDXGq5qUD2GZUg8HF8GL2whcmYddjfiM6P4W3YVX3VJcVq12NeRSJT2LXDecko7Fd9gSaRH1RG1kYuEL1nhh",
  "key35": "2F7dGwsTpALhbYUk1kNQALzpScrGddhz9aPbbU6dwEKiiHtng5fkLuPDV3gxXXzyJvA6YqWuaE2snb7RSX5vLVs1",
  "key36": "5tovyzhmtkuberwzR6Vt1JfQfPmi8DZax5svT5Cts9aoNxG3KUqj9LCTXRVUQeU415WfySTumkESrJ1eBrfMM8Ls"
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

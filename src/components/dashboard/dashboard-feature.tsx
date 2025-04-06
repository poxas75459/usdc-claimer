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
    "2hjnvGQQyV7FmTf69uSesxqLdzQLKZAh83iUYsRW9M9cZK2FRXnky9xcYtAjuKr4D7Q9NzNHA5C43UuTHkrqG8Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4juRwheRQhz8uUukoDCacohwo8jBGUFkmH7FspNWXkv6RaET8pvkMs11MwJ6HMhwKfJVd9qd6NBDLATQQENLbLqK",
  "key1": "4yWnz3KxHMzCiPWzSAQV6yPHtBfy9oYSHAbTGD5C2LyZcP96ezeTejD9kjz96HH2sD9vs11gDWNRqUPEDFspD1j1",
  "key2": "4vMELTTTva7Njr4wnj97pjzUj5SXH4hPPE4LFSK7SRp84nWGh3DD8eUnuAEXzHXf9xMnoiT6p42bXeMLN7Ya7vJj",
  "key3": "2F11X6ZEP1air44DDX1gbvctZEa2NGJbypW72YKh4q6MPsTKEpYrK16kmqv8QiPqCeZX3W2gkYw7GWk2tqJPZEzJ",
  "key4": "3hjUwwAeCA11YthbMmfMisrtv2HHBph8TLUQzAhbKc5cdfPzWfqMGorQpChsGdLgcUgAPdKpPb5yhaDAiMCeKePY",
  "key5": "4AcAgXFZscTrsuLFfdUPMU7qxmB3sEMHTF7P2H2mtNP7eDHvzJqVJugt6e5cA8dWhTqGpPLHTA1fK3H2FVBY8S2S",
  "key6": "3S8dBXWSyNPwDHSSdaoXuKFLxV8QNyPwQSWx9J8Ss57NQXMkEZ5ZYe5jyeAKcD2gvuEv4szFcDGWFFyqd1kCwo3w",
  "key7": "7kwyGg1ESnLXN9YNp2WzqPwJJjcXsBSHWC6q6WKajYDJ6tiFsuSzRQ3qLsnQwM6CrhA51zg1rbT6cxz7EMJGpZf",
  "key8": "4Wgetfai9PjrVa1WiG5GweTZ4VUfq6X7SP21cFRuYLk2LQpztpzgCKLR8kaHkpij5P5Y4Nt6iRuefSqVqVF41jey",
  "key9": "3vJbF7rRDxuLe1TGMop6cLJYRPXVo8zNwnvWny8trHH4MQjwbHPPMMv8NqKScZYbeC45CGsgSpuVYyuSYVWsFrC5",
  "key10": "3MFnes5ukqtKKpvCXWztz8c6C7ZRAcugo1VkEiXZ369zhEQJKY6coduXtmyDiMGC3tgbC4Rjqcw1Pw4sRiKCARaD",
  "key11": "8VRChg3b6FboQyRoCWqiHchUnXmMKjHaG4hKLKrt42qTMkmmJjfhkcwTpMyTnkgpjoQSbL51pezmZt7tHGriFrA",
  "key12": "4jLRRmAnQ5r1LRBaNcNuptoAjpe6updP4WKmxATQPqK33zGErUYS7qw3x14fqE8CyB5LE5thS2BBcWu3RffBtJvU",
  "key13": "5vLnCvmfa3isowmVvgYMHjM2eqo6sVTQdRjFxuz8RRdMNgq1d3Qut7efEG8Vp6bbV4pGV3K8Q6YWyGNGhA11TGyP",
  "key14": "5Cz217WutkrU9dtVu71pKJyGo4xdgXjMuq14E5dYiEsMFUPF7CFmTQxibi5Gh8mbqjg7Gi2yexQwC3Z9jWUEbQo8",
  "key15": "4RZF7BChi1Rjf3YFRTjPmtuy7SjTrtVhYNqFBqbinbabwVSnpUP8vqtSaimDsSDCVwMJnwZWVY4sPPCmxuVmSH9q",
  "key16": "2WoK13MZuarkY7QzsJ6K2jwZuHh7wox9WBDzKqxCFW395dhs2LDGzLgevimpbyB7sKyie7M36tE3qYw41RAd7ZLw",
  "key17": "2G5ZeAhijhga5tHuusp5dL7jaSgJYQh2fnkxqXH1aLgNh572zcv4nVUQdMXT2Ga6eaJd4JNKNqYWxuoiWrVziA3F",
  "key18": "4mEb9iCbVgDhYhsUV9auPUDBPnVgA2TgxAveVDcCJnM3G76WS8VBwDc3zSXSrkh4cgDJxF9Gg6hqGqxQ3WD9xSoo",
  "key19": "2wp8RWDquXxh3q3GD2wHpHCJixJtaguwj6krtUM4PgqL7XHLKpEuYe3gNKpFvdkWeEZUtaEBNU3ACjCT7Zq7KEtY",
  "key20": "szf8QzReUtxpBzNrHjGf2w1mbPc4xnyZZa6iVtzY15zRUBJeFqNEvBNpBYJXVUqcj3sJ71TZgnbiFJuPmSDz4zi",
  "key21": "G8nA9Vqx1zGH2wUkiFCwb5YehefZ3TE7WFsDMRF5V3b89HhrB7aLZHafiEQSvcnhKQ55M31kNS1PJHerRvq6bgb",
  "key22": "5pjXkJpDB6rhfuqKkAGXtztcwqSbqi2N2czryhwSKtSxzfooSwx9NAQ8P1BLxTd1VKRbxLWrxYEeCZoCHZ1SnpTX",
  "key23": "51h8ANPTf6DbAFyddsbWdiXPK6jJQ8Yz79pqFHVqXtwxaQawG6kMpQtDHVS13avYc8fzHJjMphg1g4BwHDSiDkST",
  "key24": "4U61nM9ydtt64eHctg3JpfkXA2Ya3uiT2dEuumZWawTc96CvUBsnFv9rsVRnMpctyEEM7MxYWVN1es5acUieRx7D",
  "key25": "3nRHpWRtBUf3NwEdt1i26MzWmqZnGaUw1ibsjLWYcCW1UVK4MtAYdHMJ2X6U18qevshbV5fMymPmSFqRQpQa2Swe",
  "key26": "oRPYJH6QiqA76Yibay9mthMhaQGtieoAfQDp7iTE9UHmxbLsfEsxs7mAjzTcgT7odARDPCfkpiCNEjDy8CNPd9i",
  "key27": "2mxTaJrq1o9VDgJN4jbKAmcw9Y4sdtnrCnBNvCti6v3i57r6ob5Y7FRiVUsv6BoVrehMWq8KVmm4RvrtHQUDbWms",
  "key28": "NfWpRFk3ikE5LJ5uL5fb6zf7m6a1By9sBbcAwrFaUPrRcTNzG1e3xkzYPk9mXAsq24SZtbb7u7f4dv7CpHXoTFr",
  "key29": "2QrqPpVsiUTNuUfY1mQCQS8bg1K1gVQM1qGFLVxFihg5qUviv5hEkE7WTtKGPpFsPX7qfKLz7u1yF7HXHXcRwd4e",
  "key30": "2VSMr3CaA1frEx6qnVCpBbFhckGkydr2My1K6fmvMCHXkMKzV8r26fQiZwMCrurfdxrrYBQ7iP6WNkWMfrnQAntt",
  "key31": "21xbGTmpGxTe4xN4fNofgmp4c8sgwf9MPnvniLw1iM8hpkD148n1JTL7ti22uprGhsBH6VsoE8h3y5uAkETssGLL",
  "key32": "5UF23eMPwQ4SxYXdcWLzVhTA3NqJJLtbA73UoPZyaWkH3RyJfKVE1xuHC7G5gFudsxHFCZ1wFYSzj6oQ3EUUJuqb",
  "key33": "4w3sciPrxKF6eqVMdCw8vodS79vxvE9qtkndbBmjwJY7KLqgNvbkxu6CCVhGMWfFYL3BJVbn2CdizBvraWB65ws1",
  "key34": "2xGgKB8CBiAndiREFn1o2pHzkWqb8tNXFKD6U3iw7drLW2hGcdJw8CYHiGVkPbs5jye5uryXEUCApXbWV6JDyuHE",
  "key35": "5S5ZWicd3BJy1PZ2msSfm72DQnK5a8sRLzsc1BJpMPW2HXaf2kaWTHU5vSwnYo1WGUf59E2AJjYAvxtXuaUNDEVu",
  "key36": "4hzUmb9TSyX6RwVaxiKyZCLzG6fKfDNkH1XJiaJxHYfyWcosthdKmjjM1bFaweHAezmXA7zjRZ3VZHmLpWRjgnSA",
  "key37": "3sCkRwXeYnfJNAosujJBao5485iv9NwvyZLueqdpxxC5XkP4XsvCxH47nbQhGdq1YUedrsQ5hxAvQb59nuKQqUJL",
  "key38": "67bKWmH3ZjekkGfH9dctef1kBrGFXmid1UWdJPZbZDevnsJ6NbsMkfCzCJrviQ5p1KhRyXStxqNtvMBvo1DuJY3w",
  "key39": "2HHvi1ZhmDF4CQ7bR9ixTnw7MR6jiVSjxBMMSNS1HNpucJoSboquZMNGsLQwPjobNs6Sumd2VVLhQqLnSPNBjDRS",
  "key40": "37pgQg8ehf5Lbjzrbx4sF9cGdw46nqGFc4q25m74XAUN26m3JgS1Z7pEc1Vr9SzUwdjZyNZ6ZxXiWgyGZPvFKGX8",
  "key41": "44sWHJRCAYia5BkQy5ZiFWjJrNNiZx6eqacSwUdETuJxDzX2y1SPCuKqQh4GQyChbTVsfbhq7qEAVHyKiZceRPTH",
  "key42": "GFrZ3j17VmcYCzx5y6QhG17r4gjLjVfpE5sRSjPCPGCzsLehMHKqVshv2fKDzcGuaP1BSpoBHKXjpZfuNChB8gZ",
  "key43": "3BHTDxLAPaPRdmFowJ4jFFMjCRRQnyQY1ww5VUySgiWLSN3VhzBbF6RGcLvzmSWH5MoaEGH18Pkbqwm55hWWvk2b",
  "key44": "24NM4CsgfuvVvnHust8D5o43GL7RwiU5XiY1E3VZiN9hdYmcY3gEsom38rHd2oqaLXXLmoD2bw3E5YyiG6P3FUNH",
  "key45": "wpmyNKUBuxxu6xrAyDSeAZz3XA7owoJ1Z3HPHhQ2jerPE5zm2rWhD4U31HcCTBX1HZTKQQHyKhRWJVNpJ8ecJ5N",
  "key46": "37bUAUa6dgjgFRuhV8ahi67hYe5GWixVAaY46B1mg8MC6gFKPYPtaGuJKcjgwgfNRrjpDPWsQr4fdGf2i4P7MTU1"
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

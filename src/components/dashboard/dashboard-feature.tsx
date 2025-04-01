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
    "2DEFXVvnUyV8YWM2AWhXYFGj1HGUwvWNYkKfL2tZFVaWdA9KbYMGSrXQwsjcTgRFBGJHNRfRVHJZMVr8xT86uqCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w5BAsb6R3HzJkBtHtLj7kE9MPoL4vdpf8YRhS8t5ruMLWVmqutWREMVtM63Gc8YsXBYYKbUeZPSpuCSsfaRaSZB",
  "key1": "2aXKWPxBDx35VKzHvLZeexpm2jHcxw2tUNZjdL9vRXLKNPjynsjjymE1ydKJbHrraF9tUs6PHrj94xGcemUT33hm",
  "key2": "QTKrGfeWBNyzv1ma7xcKX4sLBgprS9zYwoNYbMSXZaYAEDZMkkdd4rPnnhu4HHRwbHdrcfZjnzsFvoG8ZqCW1jg",
  "key3": "JUUZrWw71ZAUQs7LgmaKma1kjScZuz4pHqCGC2XS1dJHMRFXg5FcPNtJVzRQw3P4XPaxTw1QqP2PGKDVkTWcEcp",
  "key4": "2riKEzmHu9ZG46RryUJzpfN4Jbb1MXB5XUXmWYMF6HtNXjyhrs9Hy42fok343rzQiHN8ngwpe2JJxGAm4VzPfWAB",
  "key5": "49N5hLRgR1wV6UfA1Km7fLZJZzvwmifh4ZaGtKimbGvsLfsByuNbT34b5CZM3GkjwUKtUMWpisewaiK5kRAa7uKK",
  "key6": "26cY4fchCf7r76EoYqEC4wxZfnoaF2h2SQXsBenKxJ1cCQjmrRoK1FQr9Z7ssQdWQVTQgpmA8eTzeuPeRSvBcyeW",
  "key7": "2MVTPYMP51WfSv6TWUYJvi1Fa2nVEeyrMYN6fF9cUHaaqvbpC3ZcN5aLZXVzCcK85FKeJXJUWVueTBEFjziZ6Jy3",
  "key8": "2GrRJBUzCBinHcm6Fgbu7KXbXDQwRVpSkcKp9RAr86HePHUJkEiXKu54iwaumbamfPmPRs6hCgRYBA9nERUPRPEW",
  "key9": "5cdSi7ZqBhgkaNDLKwy4aDMngzweW3AF8Va9HQNubfd5KSfDDUWq55tG23DLzWRg74pajMcxQjb5uz6n9JHXJ3mx",
  "key10": "2tMC2fJqpWgWqyDhbrbg5pd2SKZ68behHwJsCgCaVLUD9sAQXAyMK1xgxreJHULXzjQutNFL5GJcek72Q2zFyQ2o",
  "key11": "4x53BEFNxwGVpfsDPEc22s4GXFnn5PjRXty2QfgFHywfTko7uoKoomknpe7taKCqqgELe9BWSyn6RpxSdjxSDtNK",
  "key12": "2LNPGejSttGSmCiSxwkkG6PFf4pbzuipLHrF1ZmGF4CZd2cRTCAyCUQvRBsDxxzBZv72hiqtFBpij2DiYko4vb4h",
  "key13": "3uEW3V365NGshpZ7i3S6LhGn5c92EotuFD382qeUTQnck13Ez75UmJcbzZMt9SvgtFSTkU1g4kEBohax93LUQzY2",
  "key14": "4xHKjDY16mpibRNkp2cHX8x89qxgJm1b6zVU2F6PG9KwKJ3JwfNrnUmQbw19giJZzr6Quveexn7AFGWv4C1rYXsY",
  "key15": "5MzLwTojde34nYGgGvMe8nEntJ1GAHMc5CSAbLymmoThTtcT4Fg5jnamajbZCSAFRUKNf8jxU9zuy3TyXHeoUWuq",
  "key16": "5x1xgnFcgep12a551BE939ASdQaYaXX36KXS7a9zwhtpDTaspcZJTVS9ADjJVRrgJitbL7idh8jMsCwwSyZX74kZ",
  "key17": "5FKvcoeUqvZieiWPsSVCWqrUZWmM3vwcd6k7JQHXrfMbYBUvNk7Wb4Z8d24n6juMd8whmN8knWupCzw5CLGa3rnL",
  "key18": "2ZqppA5qjpa58xTMeTFZ2SHakC5am6hzfBXAYtVkvfyppgwT4zAXKikj5eZRDF8h1E2qhJLm91WHyPMP75PCexwF",
  "key19": "3ZRma1Qx3oFzUi7gxw2ibwxuCrRSKN9hAdra3xoZCzEDkR8vmy5Rp3yR9seSaHuJaEmEax8g5x7a3RLFqvBbengc",
  "key20": "3AUhNkpvRwGt41YcUwpa3ZxhpajGYEgvQKdjbYEm1x4Pm1g7UGjqSAXJiqNkpikKcLtUgZXrp5C11sthNuFvoTny",
  "key21": "2684XDfd1CR5gtaWAA8X3NHhnMiLWcFqspY9NHANrL6c5hpz8GkSzHTnqgDzJDPAGxrvoHnTs6aQYQZNKhYC8Ur7",
  "key22": "ggg3RRJ5sSX9QfRhJwrB5bSHCemPDMXJJeM55JEPNSNuV1tSxw19Hu3AJU2q2NmM36Byx8NF1ZEE7hx8vdRneRd",
  "key23": "47gfowFKKJdtqPkhb9W3AW6VtENwuWsvkCaGiGwUdERkhshbzPB9WwjqU6siCKwLqi93Div9aMkgCr4Ywvk5Gc8k",
  "key24": "3KqZ39QzNdqMB2RLjnQwY6tTYc7sMA7MUNEwBnxCA5mWgxVSoG6auqRzDabQK2sdsckY1miESCsdEvnTZ2vHiSsw",
  "key25": "2XF9vpFYwzsLThHL7rkTdFUPvmg6xnXU3acrqmNgqJpewfcEFR9Sf7cghYwx391qDCHsaH6FcxayodRS6dzc6kr6",
  "key26": "2bSBGU4FKdoMJrSt58SQVw3CPVoZtq8B26KVPcJFpJrMraWaHgnf85r8Vvhk9i1EMuggTv1mW6fgxLKNxWzKEipj",
  "key27": "3wKLQKq1b8LvpXJoqnWtMunR2cRvZyyrNNJZp6iZWXN6WzySjxsdof4GUZSa4BfSY4frpqcpB9KedTB6ornK7aqq",
  "key28": "3SuCz5RtnpEuyFf5ceJ6QpfB5mTrWpcVpBknfsfxV7uP33p1P2NbN9RWDRz2LLcvnaw6uMfos4qxFwGgDVY5yKLK",
  "key29": "4rJ5CxJgc59fYoLqeiUfcDtKXCtyYAo4K4MLLfYy1xcXiQHvi3nNBi7Q4ik74o8RFUf8QUjQyUZDE4gzrm9cCctw",
  "key30": "joN4DqcFcqoZhQPJQNtXikSWbPNs5xiszZ5UCjpa492XMHYKXvuzcUYY3Mf9eeMEsDS7Z3KEyCyoZgV9rkTU7Bv",
  "key31": "4wuzRPDwqCQ5fKXR57nVfvBj6qp9ngsV9jHvmU3WQ2MwCfLkKATYMxKiVHtHDV7BDzxiPSWZLGXG1da18VhQZCPY",
  "key32": "5xvBScKkLDSPx6HtMGVGfRz4NLzcLxuxaHF3jcHCFh2R9gHPUAKs4Fdp1ziiJtyJhTZgrmDibeqmPvkwy9Ds6tBa",
  "key33": "675nsmCKKskPmBeuLKCN3USz6tkzgCSbjvqxJRdpfuuNR7fVh59bvQZLbE5MFRgYoUHTpD3A3e3FhivkuvrDgmw5",
  "key34": "3BsgSFHsH5kwbLW4tZk5u9anZHSXhUw3SHBEf1D5puzaoz768PbUTbZA1tT7TDEWbvMtkYftd3e7YskoM5MEyX9a",
  "key35": "43V4g8p4Rt3up1oViZbtZqQvPzgKF9oiXSBY5Kw3gLQmApgxdi62VEceEVwpBhyb2kZzFa61LVJfq73TbVEHbXvM",
  "key36": "5UddEgET6vyXEkZDiWa8RM8hWQj3VCe9z5eipegJiJ3eNzzuiRRzuwebykyeerXbuYQo85db1MfU6UthUqQy9LbR",
  "key37": "3vanNYfA8Ke8Z88k1G64tVn41uRuvxs9tBmZ5xsDTRgbfCLkackRurG2aPt5ZTCK4P8aipmiaLg1kjkqfZaxEJdo",
  "key38": "F4LTTmkxXQmr5NPp578WJiYGbunXrNBQA1uoRFq7qQEp9TvWkJzxNLTuqynYKMD6LB2awokTzJYmbeD2vYbD487",
  "key39": "66YjVcyFB2j9Euumjo3k4uuXF6vb4XiejamPUkzWmBS5zEAoRbXrmgq1MHcptfiNrKuGQYtoKRiZbcaEUo58bfXE",
  "key40": "2CkMSz6FjxiQLiZnzYWsrm6QRgUqZro1aqVRzLHNQ5A3SVvQzCRQjqveBaz9rYVQDd6ct716YGmfgQjN79rbAUtd",
  "key41": "4yVia7BP9YdMZZGF3GNsCM6Z1W7Nm4nxdatW3DMDPx3tNvx5g8rP5sozd3dpiDiapNDHsBbnk6vHkUEHdfVGxLEw",
  "key42": "42qYRa7tKqViyrJk6xzwW5CoCQrLpX8sQqCBw1d7XZ2EvCAE3A8mx1Q4Hyadr46v2Ji4nefti6sfJSwpmrdq95ck",
  "key43": "ChqbiCnNKnBbdhFsVuKagbocmLXKWv4dijjkfMXShWfhxEdHXUoPKSMc1pSgS79NZ4upJBDifaxfbeyLf27YdHj",
  "key44": "etiqWFQMwnUUAsFWuq3DEcsWWReg9iur6DtxT5ZLBoEmvxgkqcY94Qrix6Q5nS2QbT1nwTULkaRHZCTcY2nHpuw",
  "key45": "4wu8BgsmzvGTtiMCNa2JCfLtcnEPUdnKQyV8owBN9cK9gjDLUiATRaRTpaqyEzHucsQUNG2rxvUbCYx2YUT457Lv",
  "key46": "4r5GotfNwHZM4GEbn7fDa9W7uSiKa6Ns1ipyiMwXhUJGKPaXu2maPpb2jJyiQ5NZd97QTRZeRNk6igTEnGpkYyQ1",
  "key47": "4QPjeyqEXV47f6Q3L4EXVgXgUZeJvjG7ha3JLU1n75pR5Tr9hT1q4Ybz2VGYpUsbKhi6etfoLF2wrqFwU9dbC6qc"
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

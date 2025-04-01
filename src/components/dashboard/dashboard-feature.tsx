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
    "5bBFd7pYkodK49H4okBgdiDDbv6MZzdGJTuS8n7kW59dNVCusqdXHWD5BZe1xB8Fahc15uFR9CEQyvyNU1ty1h4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4BzhVQvBmrSTiMGshkDFFU16QVMPgNcfHr4HLFBrJC8dUegqJxbDw8EyY6XNxUEoHVoPu32LiMd7CeHbmsKQhV",
  "key1": "36VvNX2KYakFzLyW8jhFrymyah1pzSKGJ1RJVSbX3RFXF8DG1S2UobfuHfTRQXBkreFZF1vUk4xqWxZe146dtuet",
  "key2": "54yhVJX5VensD9krcikQYBUtzjkNodfXRbcV2Pi9FLk7Bk58TTmnWeNf3MVkPPrsAgxsYXZf8Ra7xy6nLiMCbLE4",
  "key3": "346GQdgUcnRk5BDqN9GxrGnFRMdEi61VP2g6TrKz6HvZZCJuxyJwjmq5e8oq1EGaLHSLKytxn7DoZf6d5JtiUf6c",
  "key4": "seQHE3cBBiUJEqwhCsfpWk3h6JrN3tnH3LsTvGULhj6aHhgE9BCYib1rD4VovmaE1vm5E2hgDo73fgGwFWzKRJ5",
  "key5": "65jfsCvH6JBySns2hZLb1mUofSBaVpFoYKkGgTQ3wPZrLN5zkEpTxe4JReX5LfZ2f7RkUn8JyKAHbA8Cb5sVuwe6",
  "key6": "2cMJ3RLcTqL44HJPQnx8LUVBffFswVH1Ck736hBM4PGNntixv3LK5Ba1ax83TAkT9JbCM5cxTuDH43CW9WPmc1DK",
  "key7": "4MqQ6f13QaM8vpgFcVpWtiRAjeHcufNbz87yuzE5ZBLhtFAew6mggrEC7ec5a4iFzDtAiLo1fkon7wKdRQMVKvnU",
  "key8": "2UnYeXJqf9J3YCkJoJe6afLZ6tgN1Hfrjm9ayudadXMF4CmKoLrKWkaa9h6BYb3rAHjVD2Fs9uzHNiXfhB2xds8m",
  "key9": "5NLAo3eMLCL9Ln25RjZwZRijqMtWLqchTK3eXrscUp7rCo3M4cmnWddk4DeffFBqUUkPY2YEgmCCPfiLuHeBFF4x",
  "key10": "4jzcawC9v7xzknFD8QW2svn7WMByJKUKUDNfkC6FCLfd9GJEyrsqvPiy1p5UrKQE1oHEufjpmnRXTF3GzPisepyM",
  "key11": "6S5SHKLrEaxWVRFVz3xi8Q2NAQNbbt9uojfj3GmgaivVBkSKjdorQbsYVdJbiiSHaUEj8A5xXqzTqXCyFjzzM2K",
  "key12": "5v9u471dZNjAY3oQdrVU3nafHCgg2CRLC7eFQ1U6yYtr2YGZfo1N3ZFHumFASG73hoyWtEqVysBYWhRp66AAUAPs",
  "key13": "4zKuMq83NrMWavaVYE3n4BizTFnHhyrdinZ4iuQmYcZ4rtMnD27puo8QTUnExtvZTwhF1QjgDSxZcNnVvgHkLeRz",
  "key14": "5WpiPMtUadfwCYFnsnporGazUdVddHxxGNSVreTKRxR5yPArzNp9antkT7sngXraNknnz9UbNFkaqjZc8i7QVDZQ",
  "key15": "3b2hDfHTwVeLrkZZfkwNFM9rJbsMppMxZcaMxHaw5i2KvjFdYHwjvXkQ3nYZVk5ocoNYMJjtFG6CKHfYTPDCus5Q",
  "key16": "5Q9YT4P6NPjpMSLKx1PVgkBkHKB2dvsosquWTZy6BnDMEWJcguMVGRtAJp55iEGobTKkRqL9TE75zKrTkvPHfmtG",
  "key17": "4VtZwQoszFyeAiik35qvx2oQk2fvg6yTWVo8hPcM75GyRrg6sPz63YUh8nhk4ABMKSeAvrJFcC5KFcCA1bsVT67U",
  "key18": "55YXfCpLxhyn4kVmzMTLtgjNdpkmJR3W48zpPNifBMPSnLFtX2wBmbWTKKVWgdTBVAijUDnGMdfGYniHS7psooZ1",
  "key19": "5dMGNkEBtySYW1CRLKPueSRHcYjfvgxbKEn9zswBfbowN4KUi8fAyycN14HHkG5oReFG3xQbhzgUryLmnJHDM4zd",
  "key20": "65yRw4LMbK7HTk6YtSbJfM7X2esaDcjbui4C34L7Hd8MYeaDSBfWBHMPG51VwwVTAWg5i1NJVWk5N5DFxbA8KKYE",
  "key21": "5qm97LYVe4eUuv9X9MhAL99HgiX6dU5sXgUWV5YbEyuZ3yryT7oXAqXYLXu4dKYmHy8aXcU2GscFJF8oyLB4LRft",
  "key22": "5Jo8jqqFixX322EqHn13cM8N3F54ATCw6hMsDohBY295EgG9Sy3kovnHW5rTJgxF2r91U7Vnz9oeQeLendWEN5oV",
  "key23": "4vJR5ERCJVyPYxj8hQzWKkHSmQCThhYMKBCjNaAgd6vTMPwM5YvPzz8XKAHXgHbqKni3o3bD32ai5d34Bs1heDdw",
  "key24": "2iZttmaUcJbLzpUUX4t9MK8bjUVYF9WT95555mW969Nbpw8EyszbRMTocBfZBPzQ1VP6zvX86zUrrHNMcQSPDDa3",
  "key25": "5ipwhqDPufwYssCYCAbyD66BbaqFShxnn95aXx6w2XH2cEQGfy6AFdEoEqBsuo3McDn2hZVhdwepd39ggWxesYYf",
  "key26": "2mJwsuJNSaAbxL8nh4shGonEWs4GRhfJdeoGvFoLsYxyoNGrUQYt1VqSG1rhKR3tpiWMZhyhu4rLYVXXX7xvGv32",
  "key27": "23d8XTNRvkSTrcKeK9sv2Do2K1uHuwP2YQdofQvEWgkvBpnu2WAYWjkxPurGNcoHHKeURhQm2ABbxYXZmrjuvMEs",
  "key28": "2RywaiB4KH6sW7qn96NSR16UJhc6bQTTGkB4UKwzTxsPzQqwq1p3JYVFs4XyYU13TYKcsA9r41PDVRHLeZDe6QcT",
  "key29": "4aomkNzhUFCwFeEA8tSRCFDvUzBSYgPRoY8BoAjFAL5xYL63fMoRtmrbS7RsSNFXux6H7498FzSKZwSmy5iAJKue",
  "key30": "3xkrWaVkXJcXP1G4EFoeFNoRYFudknen3zN961GkHmPAtt29sPSokwYUpkfPVRaERtUXdGbxGLNKP1SJzmZbGDow",
  "key31": "5g4z8RLukHxwZepdQyyrwptqxN7dr8ZB7wE5NKFn7XLXsvNLiR8BMw1nZ8PM8V5HjfVgVxWzT1anbb2KCMLQTGJg",
  "key32": "3Yo8FpPwXNFeJ8RUBuQ8645qcjhpQA2x3zWVknkEu5yjvwte8DRQ9WsdQoaRqHuLUqkZJjTE7FfzW8Ukf5ghfshF",
  "key33": "JXaTxyEvhCsohpSUAF3draMjT6fwCrkXgEqBgqUPepm2aDhHk745hBV7YY15AdkaRjgw73XMhgRz2temK6zafCY",
  "key34": "5R8Zwy6evARgGgv7o3Ck8X5uGcWtc1VrmmuAre3PQS3t1TPncBWCRjoSxKGyWhorfJgfuz8pePiEzuDvCtdqYweX",
  "key35": "3urduytqiMQoLDRAJQNNVJLLNQABDTSDeMxtwkxdxs3vtfvkdXE1itM7MtPf8eDo1npQDyTwwsBemDy9ZJSPf8wZ",
  "key36": "3JXs1g6LhZ41tqdYkpC6nLxaNMKuESbiR8NC8QNyU3A7YkjSb6uG4drsjaAX8FcXAL4bgh1xwEFmwaSuDjDqndnX",
  "key37": "5r92ZNBTaFDM15PrJEwS58Sk28K1DHydatFNWne7bCCFVnmBQMaysvuVSmizYeM4UGB6PRuqaUJK9UYHMNGMmMZn",
  "key38": "61HyQpvpysPBjSPnkRgCaDRUttHjgiTiy4MbAvxYm7eVNRNVCdhNg3CeDtqWNZeqi9ydzp9VP97SLX3vqh6p4Zep",
  "key39": "5gMUygm3NicijpvMmpAD1FCB97z2v4bmCaBbgyZGsoRCB7c4riNjkc6ViG4E3XA5HRFAtNwd8QM5cwiLBtDyZrr1",
  "key40": "3jUuBAaeCQ7j2rHMXb4BH8Pj3C5fXWMsApqsrkhDNYmypJyWzuFCr83d83VxybyMC5RGg4CQjQeyZY9gAarNSqvN",
  "key41": "3QksZ3BytZQnwYSrZWm8hFQkJ4X99o1fupCTLiasXRTqBpRwf1RHaJSU8aJcP5azyUu3UKTiF9Khy89wFbxxQpcB",
  "key42": "5HNroSSKS8ti26DxdtCBs43i1ht1zgxkeAvPb8DR4Yqe5dxMdF13JgrQqtSu8yKCVSE7GGLpchgswt9aBTNg6RK8",
  "key43": "5N4HgAcdy4K3KiE5964N9pChEgWDeCdCYnJ4hbBSz5Xar8hEsj8kTqkjr4gKT7u1iFp9LoBrTdrXAxPdCAnRRDDJ",
  "key44": "57btjepkXcWWs1Wrd4SMQTGWsytUnd1u5F8X9SD3WYdBuACTotXgaNtsQHUkaZXpVxYKgwrxjdWPa8LwgRbUdJka"
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

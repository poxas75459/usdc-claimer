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
    "5ektU25M9kA6aNGK2bdzTB6sfLV4ZskGfkKTexsVCi7k9rvNXQJdDGsz49tt4bWQhh2fYTXwP4Hd8EZTZGjmDKdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QhPDa6JtAqHvgkSt9xGDPCdRJA22nsfj7pjkENVztxzSV4F6TYCEyXBJ2aayRGrT8gAa5DUGRwu7XewNLth5CHr",
  "key1": "4NgbTL7jLLBTwxcVrf8AFhqXefxbEGX4dP2fCx2Krbminnq1RYn31n2Tg4jut6DZJDD5dXXkeEJyDuUReuHdQsSc",
  "key2": "3GugzRzDRNUjE92aRABBDEqHeYZj4wrSM5fiyC3zisrMeBye7n2k3w1QzqyrSGFoaZWaZSn2ZuHPLPEsWby6Ztgt",
  "key3": "51YwtDg3uom4x7rc83L5qaRSMvA8bUbEGkoSBDqTQDZ3ct2QFKTNKTLyyt4gMoHnD5qZRZPC6cmenx1zr3VDYDeF",
  "key4": "3iWnQ8KWMoGuLt4ieWo4kfXovJ6xtVDisW41CJh3wXwaFCsMVKu3Pf5jsn9g6ehKd7cx7a22gad63e3DCCcj366G",
  "key5": "2krVCK4rti3KTJQvGadct4RQdWydKjPhRssMVRsahEDedwLNGw8jGeqGvvYbsMoijpdFzRcKSRVwLzy8BgRC8jTg",
  "key6": "2HgmKxVHbTCfvqsbas7jE2sVh1Pr7jRhbWebLtkpY33EF4LnfanL5CNaq4EPzyLkQjdarpW3fKWgQz7jBpEG1L4h",
  "key7": "2YZRpxwoZy9L3r7CJJedruW3kLA3fF8KK2Y5YPjigfi9Mo3wALLyjBpYXpffmkQfvbXRX8uFVJxUf2K122spmQMD",
  "key8": "B6QUbLUtEbiC1ibzSPTugLbV7p2MVWBGCnuwibrUgDLzMKENrE6CdzZFAJsggPRKA8nZrt7ysMdZERyg7mpH4mi",
  "key9": "2UXpKcZi6m1Q6hASemQT9vCAYQUgB7qwdwrtocskW8xnVTgZjJwnoXrwCkYJicUjUViXqEGZ5Q4PanM1Z7zzwH4H",
  "key10": "63UPDDyS5EXfCKJwVLmv2Lp6jB3LcyQxUMM4jrFbZ3M1KQg5zA5r4zYi3C9sGzvbdRH9anKSdstpzBXvvzUQvW2s",
  "key11": "tpseNG6tboMVTHyVCb6coW7cSx1BPg48B8Gms2ya4VZ2Lk3NSZCziPkYZnWKmHDdheX5pWoUkWhLa7cnMMMNuy8",
  "key12": "6Vhgi6YF8Yb6HtGZs3XL8YAJ5QkDdnZQsxVisJnAHK3jF4o7SNw3qpnfWUi2LPBcPU4hJhyvTWjCYAGsuebaTQV",
  "key13": "5h8sBjvPQHTRWjXHgD62hoFPiphH4DT9TihTooVnHJcWPxnXD7dLy5nReT2Y4mPp2KEHDPADnZzwdXUgE5p9fccv",
  "key14": "2Hf59YXMfZMicsNNwRcibUVSFSsfZFhvxkBaEZL17Q7zYkTYzZ8SHVAdXVhqqr6RWkkWkd1HnkNapprP6pMa9FE5",
  "key15": "2KLmH9Rx22oLAWSLyCDr7AT5G1q2JCndstS1d2h8GEioRHyXbzqQV9ERJXm9yx85nivfMWcnMk8VQPKd2RL5rNx3",
  "key16": "5Hh2vvNEhTY5ej7mHxVL8thARygGeNf8XeFZApZQbQDCBHSLH65zuyKMsGmQNRVwgDKi7UojieaUJvtTKk4eDXjT",
  "key17": "U27fLeTbS1iBhY4P77c1jhZCcMQC4y3VVoJc4FzbKAwg8HmjzivEnYoFETWLwHNDzoZrya64wadxLbzsYxT37GS",
  "key18": "2Q15UA6RxcwwrsUfdTfwKD9qXTHc4LKgcnskYRYzwpBCpaieMWHCkA4PPkTai7qodjz4q19hhGep9zqpFCyGvtjn",
  "key19": "63jTUSndtFW6HWaYt2xDCNPUJEmpGo4psPqs4qSUN8maKB9o5XtFKLRTDjUqt7wFxp5uXKgVuWbD2w55nDMvYvmC",
  "key20": "Wk7Z7D2pdo2V5thFyyPCYZLQ6TbeiieXaqRtupB3RMZurr6Gm4ovETQJUcSKRxeW4fpBEU1rs7ZJXZYjoGWeg2P",
  "key21": "2exBWJreHYkeJYKnpRtQgGt3bJyYEY5ftXaCMztJzN4zg3o1yuP5thwbqmWErqVhk2tdp6FuK1CZk4AuUewE4UBo",
  "key22": "2jV1qxuqXPXLF96Ygk5wYGHXZc3r7kuLrqDr4g2iJmU6jhmxTvnCeuavxaRZMfaTXcvB7L4sHdqu3ssVpnmMHu8Y",
  "key23": "xRq8Yuz1vhpFJh1rnRioPEaNeFu8rsmeW3MRfEpYXW7XYLuMmvwj1oYEyP2KJ6MenxoHdbEKAMGsMYH6gB9j9gc",
  "key24": "4XzZ6LTmtotRsrke6PnmufQT5rz2sDWxaL4CXUTDhvNvUVwf2CqHtSASvHvXrftrqnBoQM1MpuVnozVtzLYPntBd",
  "key25": "38u8tMSqrXuepAVKUwXhW2jkPEqmCyToJ9Lsdag4dtVjk5xZumTYQU5exKyex9EXtHHCURhiemmtxWgebxxhtvm2",
  "key26": "3DCvowM6nEfpgGJjaEcLej2dw3PFmTNwWuvMwMkRXa7efwgBdFqNr3HX1saJnsCzubDv3Gk1AyhZdqJc6UUDDKeZ",
  "key27": "5LuUW68dQZmmcgzd9gmWh7UtPNfK2WZyKpaUpiECThMHzGYCS88BuUW3dYfMjSJ1MVKB5bZvqTgxNvQi7aEsdaX7",
  "key28": "3xnNLLgFnuRv9eBbUGue7ShyomEU2129YigQE4gECqzXPTxj3UvQ4fnzMKxGkiPmRQqLEakupBaPszeA5e7rzGu9",
  "key29": "VE4sUfyrCGqv85GnBGBCBbvMFSvnkChNBJ8dUNWfDtv28UExA71NXkaHFGBA5HAZaHewTW5Ld7ADTT6UDEvhDmc",
  "key30": "5HcAY15vcC3fLjNdDLPKVCDUkmxdDckyqLL3z8Z6TBNVZGMo8hyrnpHaWnJZvLgdtZA5G6djwc1TMwa3Ae9Tv6CD",
  "key31": "2i95DLLTf7EvPC8xEydjPKMnC7HkSmTtc5pfTKpAXhLmV8SGaBGQCSUDev6BkQCUBGgPLXDiayDbnT3UD27zU3dR",
  "key32": "3MpyXH9j1s59cHCx5EtBek9f3uB8ZTaDdazoZh3G2b6af37eF5aJMbc29YbyJU6j2AHUcGUVjXkx6QG4srZFQUPo",
  "key33": "4spLxA7TtWRkQrxVX2dyrvJieqq6xSvL3FHb3qtUb1Yee5dL7mMDWM16SSm7PbEDAJs2rvC5PVjWnnKmDQoNMoZf",
  "key34": "4Do8tKUNazs58i85sBL7mivK2QpoE4Rg44v4iagbNwBRonEsYEfvqF5GakwTNC8cxS3fKgGCWB4wHr4SM6RnNomu",
  "key35": "5YnEvZdbCGWBSeRagbNChft5GU1YNSCHUyXvZ4c5wFs2riEhfw3FtXvmzujCnpPohhKDhX7qp3Tuk4DsV1xo9pPF",
  "key36": "56SRrgDiTHn6c1cSWSxEau93oqkTZ1BMvaY3kTfdFPfy3X5Bb1zeT4div2RbRFYeF84SSdzzbNmRTnQme1qKSK4d",
  "key37": "2moWweZWFTJgbK5fdT7rw47jcJBEGajjda6CnLQJYADS984WrSQsWNMXkG1JxYQ6FR8qgRvWNZVchMib7vxFUj8G",
  "key38": "5JKLdM8x7qwCkv2WCKGwVLoxJ8rngi2wqbsyaxf93SLoHrX2PQ3yXRuw9JwaVayARGzCptf9oJqEdR7gL2oNPuLR",
  "key39": "51xRi8H2D8bHma9RemtQXPPko4TP1hsjnmXo3hS4UR4pAzLCrQWA8PJUDdbdti5kfoGYijs5cpNVEZ8i38k3yHCc",
  "key40": "5rgY6df7xjJyJY6MUbtKuiFSQbXSu2oKqQ1qUqqjBs9PUFVngWdjPUTx2VPR5wZVfYbDb4mbHt11cFcCyGFdK5MK",
  "key41": "KFbAiagdkG9f9CPia4cyKiLCbmPDh7uXtHgH3GDbm7b3t2gUqJXKeAEJHAWZExo7VtXGeKbMkqGeLVuVmjBhD37",
  "key42": "5naEym1iLUQiEe5eZis4KfB85CFHb7j3BwpXz82cdhXzcRZtSu3j1u7EEbfBtqxFzkfY1QFpPh1SzhFjBENEYUJB",
  "key43": "544j8UxZSEw5W1Y7H2txSz6zGavpdNWSJySCnksUoTDGu5drZRVLxoxoh7smMefXh6BPGitARLTxHy1G7tNRFBew",
  "key44": "56AYuUCX6ojCNnWxtRp4yoM4cJfDkSwSLV633nsmChpyJNoWK1oGkowVtsksaWUH9gowCC9m7etdhaWygk5PgxNA"
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

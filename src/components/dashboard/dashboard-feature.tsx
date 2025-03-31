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
    "238pSccLBsH8Jh1bMPTsFJdK7skc212qzDTTMyjghqWZ2223t4T6GiVH1NDA91B5dsLXhgGNUEekZhju2rFb1Khq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jPZ66b9CMaiRmF1An2hwp3L5oPSG13Li1szXGPrzjm9NwBKPeRz7zAUmuPo4hMnjGmwJgt1XXCLoEVMGej9AREQ",
  "key1": "5e1eJ58W8nZjeg5VWXu9PdiZMbquB3ivphbm7SEJxQ4xTWKSUdkGe5xwmMt2UsPxymKTXHDsyft31GzJuFHyAnHj",
  "key2": "532BFMyasrjeydAY4zTnCQu2pw6kWKqAJ7m2sZ7jKn65sc5NXi5Jw1tsG73WyT3N3LEFnPpmuCdgyKtMeuEW1ZhT",
  "key3": "2QxNc9bGRJeiSkr7L4UwJQNKuYcfuxBoRd5nk2hL4BkGWDcR5yS5CTb8t26V3ydNafGRFjLWEYCPH2WMhdL9aRt8",
  "key4": "4PTvfyFGMTCBpfPCSfANHpVcv2eTs2vWee7mmhsCXoLTMZbByX79Y63tbiJqzJYapfsjKHR8MVYY8Mg4AicBazqN",
  "key5": "5mgTUZ3edMADJWXeF4RHYWkByyrZZNoSTK8G9Bf7dhwiKqMNVKz6bhHhzsfprBiZqDQTXE6dz8aTHgqFK5nCRpvi",
  "key6": "2Wv3b7cNoN4oZRENuCPeXEsQLWeiTrq1EX3iHCSMhbcFVaQNPT8HFsm5QYXKV2ZGxwA2D5ZczNuLs73ZdcDk6QM4",
  "key7": "7hCYq4SoaKvdxWf6QVVzEWqJQzBp5SzRffEysTBu2xFFBb74pR5o2nFiqeuQA2yX2xpBcFMAdWe2HGY25mz8Ais",
  "key8": "5qakhY3Bh1mwHesZz3au4asRxozSBYaoUhmGxuGLV2A6e3Sy8UKg2ghoB5TKRM9sT8QYnxeBvwJx62nSBE6ci8xv",
  "key9": "5Ypfur4aYeoxKukJyBAWBsZqASUzLBehgBDyYhecWGerPKyGGPBs81YboutPVvrvdfdyUAYV2vhDe7M1Vkw1aEdg",
  "key10": "SAZDnFhyU7bVcf7igxHqtaGFEDzPzDmV5GVJpk2W2tP9eW2phCQ89p7nX1k9KqTiV2eRrdrfRGxiWSA3cqDktbu",
  "key11": "5JvzCe1qX45HDFGDsVwZ1VXv9JCLdTVUpVY5CxgsmDipxnmYZFuhB6X8VQdtj9EZfy7n1GYeFPvyXkGXrMpbSUF8",
  "key12": "4FBmeX7L6Z8iF894gwfD8nnkYQU4k7rXrUXjToGhqzgW1bAQRjRfTwNL94cmUCHRiawwKHBZcSNwdERMtzHU6P52",
  "key13": "5wnnLVbippZV1EDd2xHNmBbbZHeFpFHEd6ib2AJbQyy6UL53szWshqYwjn5rD9oDBPU3wdqPKRPCojwF9hULQBdk",
  "key14": "gcsrHcwYhd3Hv6UHPphgb14ErSEMPKav3bDqWreuvcn5XpWLk8bRW6cm57HiQ1h9xdrA3LP3qg6gFm85AmwUBK8",
  "key15": "4ZCqvHhj9jvC9TEpvJ6QDJ23HC7HQRsavwztTWrVRDvMMHMH2yoQWP1PHJSriqCHFeGLuzCqKfR3QZ7YhXcK4A6p",
  "key16": "2owSyN35ZjhvTNVX2ByZV8CVLfPFUdt9giCPGbwqwDP3hGLrK3WmoWgvcMF6R7hvB19v54bTwVeTgECyycpUtQVT",
  "key17": "5UhryjqMJXVnFtDnwTNAoBLrr5GvTi5dQiBW8CXvqseg1mPU8HowUxUBqRapFZNY1ce8rrtXswN362ZY2KE7hQS9",
  "key18": "2xhawTzAnjGZXHiMrY6RDyKSaFkRssPbsK21wFg78RAr4LMrDFz399QnzjyTdU6kTHan96EWVNDZJnaWs6z3Dm4Q",
  "key19": "3ViUhSj647shrMPx164Hwce33C4dpiWvovpx5awHcooX4YCj7gkkoi2NEgRfXgZx4TJM99df22b9MFa8xEpUha75",
  "key20": "5fZshEp7u7At5XgRfGYYHX9B9ZRGpLCDvbenGQkNcs8ther2Bs1W4Qf1ozvR8t2tKGMXxfH6KxWdVC8j3bjgGgUE",
  "key21": "48aC1g8USgRA55uytpvZ5DXxe8Gt4Jt3n2FafDg8BmXTVFm4pK1C5FVF2M7esgBp2qHowhVvdoZExwpaj36osrED",
  "key22": "4HTL5JELtcWkNwULpyoSWhNZPdkq674DqHgtvJ3eMvmHPUkqQtcA8fpf9PQG1Az4Yrze5gavQuRBDpYhPYxfkN4k",
  "key23": "8pDsWi51Bcbs6uzpwkc7eokbbaQNWyoKpn69WH4Fxvbve1zr2FkmLy45uzruQrughWXCpSroX1ECazipcafcGGg",
  "key24": "3ZmbVhgSQssrDc7BTMtq28LfNLEccKs6ELrPbRm2p9oNPpBY8AzecnEMbWGnUAJUnRYM2q6oV8VsVmM1z5gakikZ",
  "key25": "5wrYs8iWWWP1Af9w2ECYEsKkDLWMymzeVyWMJMniJxdrRLLciPVmRsUFzysGgJHToEByXTZMBHjv9wQzvQAUYFYd",
  "key26": "4UYUr2ky6JqgRLF9Lf7WaDZz6ZNsRWLUbWT3tMBZH9pX8yiCS3rzHAPnxnkLgvjKFXmrFKv1KVZAPF4GwZsVAEzj",
  "key27": "51mx5nRJ7ijjZMnBDqKARFHUmcuPmp1M3Mzz55mvpMxsoLqYTTdp8nfrZvLn1c4PFmCyGVaEpAU9FJuhikqtysDn",
  "key28": "3BHNqTj7xRSXDXDt11uAPghHgSfY45taunkSKCj9E5Ep61TKxsVvJueY7NsKujks4qNTjZ8EkrqGQvt9fNSZTTaQ",
  "key29": "2qDCuSmupJzREW8kvGuhzSXsLVq1Ecq1mBKThDgj5sorBjmMSYpQi54hpQ54pKgzG7pgTcGvvxpo1WFTtHaAFPqa",
  "key30": "v3qYvsmznKGThQGXrZb4AgehJqGwst19evEg4otCHNCuEWDNadudrzcN6Sx4rgoEwPe3Wy1r5VNnPouoMw7yEYY",
  "key31": "2MQj5CAL25FVe87u3gyBzL24J9jSwWHck4NHz3eMDjqrro7VtdqKfP3YBHAaxdzeCHp2y4cjwN5Dx1be1RL1de7w",
  "key32": "SDWajTGfniVXsjpR6GAikx8phf4vmi717XPwPkxDAW3H3APrrsTv2WZX67TrDbGYbobtkD2A6zfxPemAyKwqWKW",
  "key33": "aU6TGLAdkCnn6MdN6PNwGHmMyZsYiMEmzqCHq2M5f2pwXswNCz9NpdfNCicTHhob1bqUCayrqkph6rDJuX47VHM",
  "key34": "4LQNznmq2qjYA1Jf26CBSABe355mwCuXyoGhVWBTPy1qgCUKfVq4gs6ou1yV44aBwhu4kkk8kvwHsKbFK1KMPw79",
  "key35": "26WyX7CYBheyMTLAhH9A9Py3TuAsZffg5Eqe9bbmgbz1e4zy8UQ9osw1R5xJCP9J9xyob3mzbpPHD29N37mCJpSD",
  "key36": "4AHseesb8WW1oUDn8GhF1k7XzVMNuqoMx6t8MxCruhF1CwSvbX54Sqe6TiYq1yewYnDsk8j84uwiZncakCpTxRGb",
  "key37": "2B2feSPRXt5quqA2aSxQBrVTst3Mey1zNjou1iDnyxcNBmZiAGKW21iULPDeCWr2vhwp8Ku9wewYpKxCopNcjjxs",
  "key38": "224c5YZwmccZ6KWjaxNhhR8NgKax7Y7Pgm8Sexz9GghxCBFs3LXxPDeBPQwWfjKA2PtZvt4evqvAaMpg3A2aqpfx",
  "key39": "5hxDjk5vTM8pPAQ96RZBDfh5L2wttJ182Q4q84LYc8W8WHot6nTXRarMrAbUpNfompfFmiF8Z9ZsywRern7G8Kk5",
  "key40": "3jndNNHSru3QoMgzfAkkAQF69XgsBzV7PGcteZQH79Y2SgRrrWMAqtXq2emJrTPnQ57T1JgHC512C6Vpa77v5DWi",
  "key41": "4o6VRaugYzVrR96ciu9J7Qdcp5KDsRUMYUeGYF8khSZCbCyRLRK4hgrDdemKSEJoj9mnUzh7b6qMCuMYiGXn58pr",
  "key42": "2GK6UGToVWSy1xweaPn2CxKbgg5Bno1XKdVfJ2urbvpeuG1h3sGUBNX8Qr23LXsnFyZ2MDVpB4eepBjRndDKbbah",
  "key43": "3yKXdzpWZ4bUe7HYFsx51KFxKNjAvpCKh8bT4zGW6o5GhqNg3KXLQGNkct9yZTssL7rX71uJxbRiqG8f6dPoPrfa",
  "key44": "4iom9a8j6SwppTnRLoVNaY31CK1TAMopoTS2htNdFa8sps7E98mF2EzNginiSE9P7ZsJRbyb21NvZi87bneDaGf7",
  "key45": "tmGijLUyQkeZYPgLYhr7MhUghKQgMRqJwTaSDXg1Hczo7cfg7MMWdtMVqDuKHHjJMtEzajoagoV8r9gu5oPnKoG",
  "key46": "4gPPgavXnChYGcqwKQLWwMp9RxjWcsgEVoEZ58tUekK6MAsu1pPXsQh8igZ8wAMmZJmmd4PigYmvy37YmgkKvTBC",
  "key47": "4FbU7Z1CDambZcaTKVPkL1a1LiroXaLxVFmGWKznrNhCpiHvbRUK9NDCJ1dcfqayjsFcSy46Y1AuoJiaEmCn23NV"
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

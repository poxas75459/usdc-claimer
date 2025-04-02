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
    "57BUkfUFHySGo83PA9pXWvpcNjxGoQXEA8w1st1tpmkJavQU2hNhdSqcQFUM455UQ6m7kLQ25EzDxo2spPXAXEjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nPrfAopThb8h35rGAUf4UVxZGTVrRP2RwVfNythLeZJLbX9FQjC35QDkrDz2h95ag8uci7mhSbCM195PbjRmN7Z",
  "key1": "dUA41QtjSMMrzXcAZfLerXSsJLdXhKbZArhzDLvfdYtPEHPXtAUNBEjfLy5FH1Nt478bGQVR7ACfr4fkUTNxHqy",
  "key2": "3xyjW7Sg84FYCLg5Uvr6uxzaefFpUEoGvkdmBdVgRXnYCQMEKKvXJTkcncWtjuM1mcYYnqWSKKw651swNv4aepkS",
  "key3": "4yEqN9u72ZAoPuoswiaprX481raVf6oChdpGnTejNRgQFX1BJwGfzjxuDRK2LYzcUJQDNR2HbRJz5UNmZ8Uz4dM8",
  "key4": "uquvxAL9jRJKBnL84YLRfWD5AYgje1YcbQ7ypfEBXJuP7ENWiZfDTULbhvf4yamqEmwrHn5ujgYCSwtq7SfBKqF",
  "key5": "4mtm1aGc1UfeT9ihNscgB1DuyxRoaYGH5qDkbX2zDn9Dhwyd65ySyukXMEeMTYXnTHmJz58pBmYDN14E5DRVFXd2",
  "key6": "3aJTxh9p7a214tKCB3ejKwQDqztNdodRsvqjK59Y5xyjSiNzGgx7xVHecGCF31a1c4YZmZVXBwfFckFZG81ixy3s",
  "key7": "XrBGovdUY2Hi6K7xfQK54xAVHD67p2CHvvVi1kAHDu4G1rwXwnWLN2BsexQP3jPnD1rW6reN4S3STG9Uu47quGT",
  "key8": "2YdqnsXWuEN4pVkWFYaNPJs53nALPDjC238aSBKQxQ12m8yXmNGFvL4VXETSVT3QruuAaTLknSYVy1HRefqwkyBM",
  "key9": "3FXiBwfSNzMrp9JBWSEbc4kx6qcVZ9KU8q7aAKf6GAY72rgH6fk1WJFgspfKsGfycC4MX7qEHK7u2wqXfYsP9w8J",
  "key10": "5qwcfgVrBN5DtmZbPNMQyJ8yWvD55svVMRtvBKMUuUBQseRdFmZ2mVYUwc18oQTstLCWHdnwGCUTYGcJg1vqmi28",
  "key11": "66YhywetSgEYqrXvu8YyLqSowVpLejgETpKr14MVtufi7LKwx2MB9MwztbrNibnHCS3zKMJomwvZNbqVAjSy6YJr",
  "key12": "3pNCaLL7NXLKbdg5fdoEANsinbDWCe1PNEAcbUJFw2jtJFbGFq628guP3WZ7ANqZvvbvjEG2xQgZMwtfgKQWV68V",
  "key13": "BUmor8EYUMbry4vLQi8MBn37Sh2yuMzah2Stxb3FC2RNj1CS7A4cr1iiWo8KL5xuV7GL1t8ZmEdC7jUh9eNFrAt",
  "key14": "55S8abop7jNTb3Zw4epGM6XoZLkoz8XsvoaSV3NWXt7QePLfFYUifyvzJSwYh5Yog2KVbH9LSebx9SLYEHP87NCv",
  "key15": "2BY3gJ6eJYwHdPSPNEx4X1QPHQZ8wfhgoxqNjSPfdU37m6uqPS4ePAwUV5g9Mrb7RaaQnT4Xzgco6PXdyTJZFsmB",
  "key16": "5JNAdW3q85Z5LhNNg1exLdP37n8udshjtm3oHXMb8GiJ3TZRyzs9f7pXvTgYao9wyLtHfjMK4zw8hsbre6EEDtH2",
  "key17": "4fH3b8pNx2zSkBV96py1SaSxd3SBkMsQKg7UpXsge4ymS3zWJB8QTxS2m3VUahkPGAnz7XyyWqxDm6a5hB7SWEJq",
  "key18": "5Hfb5GFSavGetmv9sg7BfvkrnuFRm92V5FaGGoKHsv5UbpSbw8Vajs4Y7f48rbN17giyzPSaNc879GvTt96iuzsD",
  "key19": "3BGe6B6XxpykxYC4RovrxiKTuM9eZCDYeuwikEznjHTutx4CHpbtZw7miVHCtzgffFjaUTuctP7cEEhU5g1VXMBr",
  "key20": "3mbQFfxiQwkDXFRj1DtvyUbM75FDUgmyY4v8gbPHo9CkyEQwDADtUoPrJJXNZqEvQmTLsCXLNJ7gwn2VupXYrY8y",
  "key21": "2961LzEBUiDsmupqAQNXRShMrGzceXDuhVLV9kgc7VFw1s5DS6DYvB2XVCDBGcPvpXwA4jyNSGhWMavrjaRac4Cn",
  "key22": "4kyAkKyDZhShuZVppiNAktciqQXAg4poZ5v7gv4z8EsMaMmD5SK4Dd7CA2Z9SocC6J8x7nGU5xHMfgi9pSUSykPH",
  "key23": "33tEJHGunoTZ5j6p9FFmycB7oWMTJVxXcVBUedkSiDFZZA2QXJNJCy9swFzoQuCGNsMfTNeaJ6jYZdRvp8pa8Prz",
  "key24": "5ARdpzy9nnHDjsXwMA5ztAe1o393my9tgKSQBBkTrfr31us7KJsvucwubYQmNvU1r9j23gCEMkWfbm1sTTfcgNMR",
  "key25": "3ZgUSTfvzTaGiH33snXYsFZezQrR9HkfUQ1KmAy95VaNzkCFS7JM7wkvsFPRQ9w3MZ9Xsgy5J7soe5qKULxW5tj",
  "key26": "5onZsh8tQ1rr9LiQWW1NomnZbGyDsuHMzpkDnQVaNpRhxdgqB6gPm4sZiB4CVnNCWWRauks5ss6QkRG2JuZtfHwk",
  "key27": "4XXgjvSEWo5bZpeSsfVJpNyyK7DgeaRN2WrydryPEpy87F6ZMEfNEVw5PHRJGhXWqPKtje9U6TgWHZEbWJYWiCxC",
  "key28": "2yZRXgyLLMSwJ21yCPT8zoVyZbzk5UkBZZ6UgrvaoCUULUPT8SLWdF8drXGuXFueCJ53r6SP8GSUzAfA5BRdmNaH",
  "key29": "485rHQQ9z5114KL8Jf6ZkW367vHjqn2YpmyC1iwEjuRPnS1XQtxjU1aF5twMaXTs1kCCmcT82gaZn67gT2xfpBxc",
  "key30": "UXzDNpd49t7txLBn62XkcTFq5zuTg4BjGB1xp5y4wxP5xkhfr1HJKPYGAbHpLTrB5UxASR81Vyk5QSUfr4ywJxC",
  "key31": "2z8fAcuTvnfQe5PEWNB8VGs3QGxvex9B2nzeJkcuPWspamjecaeN6o5oMqpeZSHhQZ8naBRYvZdAWht1HKCmU1hx",
  "key32": "5VeZGbZazaPiYJeuVS1ptQhT7SoBEhwh3RU9FFGMuZgLkK9zpG9AyXJLGMvCaR9xnLkjHmdeMMEF5kJzyacSHqKq",
  "key33": "4tjPLP4y6QA7NFNcif3Tf2JPMZdzzhyUDSfSNpXjUy6xT6KWb9pbeRZFhMxtgvg1oY5BndAZinknWa1rHktMzZbU",
  "key34": "2Tn1PaUKfFUkorUCMgbCvGDijhnbzQMMrUhgC78eqPS2SrzaNXR5ko2F9YRaDvmXY6DXqaajfPz4eme1K8qYzU1J",
  "key35": "4KBz8aGRU9wG1Jw1k8XRWdKi2bZR2V3Hzq2Ma87P2Dd1ShXuCxD6cpuwrEPaB62akvh6gPUMjRR8oJEeXTkTFf9f",
  "key36": "4oKvaEde62XVnX6WNuRPFZsuSKAfdt79CYDJMajSrpYywqcgPbsj1zQBLgyo9zsjWfYSKonfLJv6UJKvy6rXuzTa",
  "key37": "2NRTihB5zQELPay7RsPmQ4utfQNjgKadE2Ko66gbp1qL3i8oWJHWw7vWntJ1BtE3cnZbngmGmeQXYmZEMSeXGTfS",
  "key38": "5xh1riCFTg58UqWhuUjzfD2xWEQww7rNM6px1EVGqkoNtRmC89LnJy3M9Mdr6BtzhzMKGAwXBhhgDWSMfKoZWw3P",
  "key39": "4sZRpHTbKB2AkHsXeowkmbpb2v9LUYcM3EXvHXQNJzWgTsADAdSyS94BChNe7FfwzSAWVp4N2HYPu6FMGvebeP1S",
  "key40": "3ydy3xLZWyohn7qqbVyvnncR6wGHr7dxVqRRJ79pWRGMnaE9GPUobk5A7igKY5Fwve4DtsauBmoAhukeVbisb6Bg",
  "key41": "64au1ZHZPyaRWxFJWj4nsPnFXkpEoLLKuNzGFY2dX9KVF23yWuRJqGKMRFpAchyKKC4RYrAwRYdhCFYH7TP3kAau",
  "key42": "3LLaqm1Efs8QV9BgknTzEhVzBU4x24EPMREeTWEesxVnpziTYmPKah5TaZe8hBoDp9oU3P5CDjAN718aygnVnPiR",
  "key43": "2PQ2Nbcbq5QNYapfuy1Vy89zuj3KwficSq1ENeCLGNeKijz3aNFo59gcg1xXWMVs6ohxxu6gre5a3qbfy8L1U8ou",
  "key44": "5JfS17BgC6p6xT29Y4ufKNGESSpnZQ4SbrDQoWbFTZKkgH57F6VWWKwujqFfbuBacYpGAjTPLzLQXg9ziSNtfcMR",
  "key45": "2ZPx1SeZoMZfh8eWsoBBSTqJh818Yn1HRbp33BRRM3HD1eH4y5SoyFLMfowX4ooVm7J4GpLmiP9u9DwECCUupZL2",
  "key46": "5b1Pk9VL4H9tHkNkPBAtvSf3L9oQac2aqYKX6foSDQC7oR7dcRfZRagzvmcmfTZvHssCSpZcUvJ6gNnj9vuEAW3S",
  "key47": "5vNXfTGhpxZotkZf6SkKfQLupsSU9DTHsqxuNEEVVGnxCnB6jRKZXkbG7i49hkrUWNjZXfwVEjzEZyZF7Au28g7u",
  "key48": "3XCb5G8CT4rvCRTyT5L9AyTDSjU9cro1iqqKrQBZDS24GM3BfYGABr8DKcEs4BjUGUTrJeq3bWnSaNCWbLvPFzTJ"
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

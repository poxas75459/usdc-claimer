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
    "VHtXPzSfV2zFXU2Pm3gHG2ih8scGWNDscULf1ecuWpuzQWfsFCpZ89Kw5h8ix5MRTEUpzH3poQBgn8YzVrDjBvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xoRjKuS9BtbDR1kxYP7PvsfF8R8ubLfnamkyEp3JWZxfVtwYskkErU5ay7wNNXH1838JLRiy3AShRk2LVGCb3j1",
  "key1": "4HAQJJfi4ht7zHKdxyyWR6cEpWdL3DZ9KxDG5HZBXJd52We8s5AyqDFSaVfEZMWyvYHvqYM5X6ihnZjt1upL8u94",
  "key2": "trbRNEbrsAkjT2XUbHXVc82wmxV3u1YdpXWqVeVzTw9qstqBwqnyGYjwGSXR6DJTciDExif8tfnmjuS96v8Lt9v",
  "key3": "46MEZRdKPuGsz14na2w3oL7Qyav9oL2Rqnk5yFnhYTsvYYwSRZtrvEUpbdXaJF5eUY7Tgn4Nw6kZuf3r7ACdEkPm",
  "key4": "2FEJ44X7wXw1DbQ7H8ynD3G5kcccDEiHRx8ztdbS7krTkrqqnF723TChd4jwAsbD6j5zRqHUhm8DMcaYGsA1G4A",
  "key5": "JfUdyYzubwWob1YD4mz81w5ZGHZMvDyicbqH2YCxNFd2XLPLyUgEtqKGXPBMayPgHu14o5jUJt7TBPcYcrmq9Mw",
  "key6": "2Baf5suLW622vitwDBTFtziMxJ1KTAHdANF9PAyaKE42LwMThGsM6FCxVP4fyuTfyvHoxZxQeTyiJygr5vaAq5HH",
  "key7": "5zpa8Aowf5eQdwCgMAKLfEAWMGpuXx95ux1QxygED2fcntELzbd57aNvjUHAEa1YpkrVc4FX6nYqmdU8urkikB8V",
  "key8": "5TgPq8KjPgVWAYj7nQBNpuUDxWRwMN6uryPnzbLfSZDCzm3rqu7htWqRnN4EdGNdZDF1ivitwzPNxq6yxLDTzEzT",
  "key9": "bPe9yD8zVGVP6pFP5KFiaNQFhSdGsTVVwwKjar8EFzZS3irhRHkTvdpwbiXUqZjnSxFVx2Ufb9CMjH6p1us7ivB",
  "key10": "Xg5VssZHd63Qc6iM55VfWpd634ZKisDS42qBx3n2YvJqcHAahQnZgLkJGigQuB6g7iLoK6qnkDs8JS9LGk9xVSL",
  "key11": "TWTcmsfNN1D8t6w7F785uPakUNaP2efUEaU4zYfVZPYDrf2d7Q6xD5uUmW3v6ZVt2EEfohCTtK6SarRT5KDj6Jv",
  "key12": "2r5gLwonyHwmJAMxhGtC4odXr39KJJ5DwxTCuiehrN5kSkdTvS1KxiF13PwwDDMJox9Bd7a1CbiAN9qvuCmWNX8W",
  "key13": "53gqBigAVffwiEYWmAx7tZorZUkjmYqgsZ7T15z6E5FMwMyNw6VvfxuRbQchnQbNPcwPS65NSaSptk8dEHkt7Byv",
  "key14": "4wjMMKXLehKYZDUBNcMdhYxUwhPrgEUK9qTJUTcWV4MYn67nrYeNKai6oGCWRWpKu4ZY2y6jEu42Q9tFCDynCZ35",
  "key15": "KMgpdUCjhWJY3c1r2Yb66gRMWS3YkKUNkV7ngrRkoURzWN51U2EPWsJNW3v2s8Qy1mQ9ox5YkwWEmfZkWkYFSXq",
  "key16": "zuQa74uKZzdrKwaQr4bYhKaYQPoJFyf6mNEbKuDreuZybnFLxZbGdbYRyrpgRmuNkZGsMdzi3aytVxWz6MrLw76",
  "key17": "67NXtvATKJzxthRCHiecJYgjbpxjxERN2W1YF432k5pX4Mht4EKoZsCBBbkPTjxYvC2t5aM8uTndMG5f9EaXzPmg",
  "key18": "3dhEaAkqKVLD4nWwxfASCvXdo8BABZHGPjLRYwFDvwXn4nqtao7nTD8oGxwzjt1zWXWeRebyW44Sa942gX84VYWB",
  "key19": "YF2uYnsntdYaXhcHFDYC5kDaVb17VD1QV2PZsJ2bFdeoji4VzFWWswYEMZuBqiQaD4t93MMQDgru7yv6yVDjn3V",
  "key20": "Jc1NtnLEmhfbVUq6yQVMjbBRbuVPoVEc7cvVQCYuMjfADi8Gr91B3LtT2Fgv5S3kV9yNEMFuTD5XHs7bjGtE1AR",
  "key21": "ZBX9urmidHsFkLK7FcWtqTwd4izpnn35LmtGuscSBAok1FSfK893zNYfm1NXgkhu2HMnm84zt65gBLhFzNQrU7W",
  "key22": "2jevM2tTKuafuJYihpcS41SEdTMsG7mHSzyqTegFf2gEvJ3aDniJxinR4A5Mo37ryBAHgPYk8YPUdahvdiSshWs6",
  "key23": "5LKnPo6XCZuRWHxi7NU2zr6SMg6k5qAi39RpQ8v3yziGUze4fs2zgqs84Hh6FwztF9QgcsnckyeJ394HpjtYkCz1",
  "key24": "5S7zj239RGaFHHtH3Gy1uUJ2B4UD9znj3Wjh68HKdox2ERPqJHTVihpN821h37qjgwEGUyBF6JAne4McH84mmqxv",
  "key25": "gAv9EbUsUJTEnWVGnYmzhMF6ZJ4CzPFMNSYWByQxZtM8CbJJiSgYj3G2u6t28SxEUiQMHcE3vfPtzdQXymibaho",
  "key26": "W7YjpTaFuD4sXBDwzW8iCStQociUpGoPZUkQRvmiemPSPhb32pDA61FDACWxMnKoD4Wt6uiXqydmea7M4mj824U",
  "key27": "5RCebNGk7trfCkxh6S3KpmBkvXUZtLpzU296ouprHXddXrhrUPQntbCCzwv1sTDwigVjkrwWVhkwqReVRDMwKTDo",
  "key28": "JWREtxQ4cgmnCwDGw2rHXB1gqhX86uqJrSsXg7UimW2rgzoUJ1mtUGpGV6jvnZEva13CEjqnSvHUYbXk7igq5m6",
  "key29": "4SWZX5LkSMM1RXo2JSGYFtkHbhmhQSxjc2RpqeMbwEZVpQDhaE5PepAwYEoeCnsFwxj59CHVownv2YzCt5mkSkuH",
  "key30": "3TVpvqRvaJ2mcB7i7JnC3uo2dgM3PTztS5rbXRiqWmyS6XyZrNcvNfk3DQvz3xDuX97PXXHbZVAjPA97K6cGbFsY",
  "key31": "2hZy165WqtVDLZDxKNN6DG2FygoWcohpQgGsaPjLomAvkZmbfkU4vQemqnAmDbtC1G8MxUkWyZ7AFJdmAQ7j6tkB",
  "key32": "2TxknTTmgxM2RxXK9d8FFW1QznRvaDJAMTzLgrXnFDL2y35FKWmTQkjtam8JYz8kgQF9ZtY2fxzLhpdft2xtKPg8",
  "key33": "5Wpq3koA4pPEBvwjiD4UWgH29Qfr8tEc7FXL9fojfi27wT121moHw3Fy37XiX3HeK6ZirAxScwkQSVAe9tALLYxD",
  "key34": "4qhz7KXnQnQJz4FP5hnC5TYKe3e9V6SVEU2aLQxDm6C1SM7ikgXBPCAcw4nG1ry9eV6VLoRYZopDghxUvTkUq8uy",
  "key35": "2oCs4h2YQ7tiQRszbt8ruTLRyLoxVJ7mNztstHx7B8YS2zQUeSNxdieG2Xx5S69CrSXh1HVB8uTLNnZcXD6G1pR6",
  "key36": "4p1Zzn3FNaGhYRX7ekmJptYnKtw2ER3fcNAdkpL4tvymYbxqEsKyHsemiNFJuXez5kvCWs3qrQsp7EfdrFYZtefm",
  "key37": "63wi3GqNEFjThcExn7xDmbP6WCZjFJowJ4VRUFjQ6dBkeDeP63aGd6tp7Bh1KaQEYBvfAdkbHC34B41urA4KNycX",
  "key38": "3p2bThg51Kug6sqQAzN4ZU3szCrHknK49FryrN8VKfb8PeBPak3zXi1PKDBZYAg59GDGnCcfUBfUhstgv2zk8XFK"
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

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
    "adUxkTEr6GCUWcpvBk1e42BS1saGdF2JB4krm8woTkTEKeuWNMZVD2L1ZsNdwh2eYHpjy6W8s72qjenCF7mD4Gg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hk8XvLLa7rMmVU35sHgZL8bWjDBXwiPa9pAy2r6KV7sCbXNMhyasehuYe9EcvCLdXpKFQkYCijcgcPZ7nWRbnzM",
  "key1": "S8Ri3xGmJiprPDrBfH6ujEWHu1nzEb4PMmPuCfR7x8WWKxtGeKpGgamceNJJndWN3CwrjvzrYkfeUmKBGo8YNrq",
  "key2": "5zHk7GVfsYTsEqYPNwQwAmexJnpJ9G6ddzw1HqeLMG2kJ8HEEv3KMY5be8fiVf6LW84QHhYTbNE6qw12daDvjySd",
  "key3": "62es7ELBSDVYG7YJPbQskTTLhYAt6Q653R14PkbPu46vFtwEUh3kd6aM4NE7THiP1cxJNPfpUmr71sqEvJ1XHaTS",
  "key4": "4fvdzJuG3hhr2SDgd4GQVipPJKTUkrkGuVhC7HcZFKToGD2M6Jdv8sB4MYbgRdGgKq7p2wuv65Cw6JbtNPrjD1oQ",
  "key5": "4YtEA8oQajqSJUddknRfEUUp7W96f8Hoo2GwVBxvA52rNdWxkrmHgdjD4QYta9fQ8doqJwvfTahiRKspHEjUo2aE",
  "key6": "5LY3fDQu4vSnSBRYqrkJjT3E7Tfr4vP3Ts59AKUHQjVbTTTcj9GiJeXSVxAbBmGnW2S79zzKmKuK88NdtqAP6sCM",
  "key7": "5nqhHTeXKHGpLUvKhkmHSUU9Z2Wb2jL6EcXbxxk3sqw1dZD6eufb2LTAHu6E7SsXh8rgLBCwCNC7w9ZP1gyhb3R9",
  "key8": "4U2A84fZ8NUbbZ5Qm21QeprZjAeuWjEbhe3wcD1Hi9PKyNXuHdCuwpC4dM6Mx8mvr5nGS15pUFW9sA3JXFw4vLUF",
  "key9": "3DeWZRVbT5Dv1DBSqRRPKxqfhU682VTcdFY8rsAS8V4UjiCEkBv2PKEJkpo2YXRpN7cS8HB5pYmX3fCBAozrrPBL",
  "key10": "qgDtsWNeFpmtfx7MGE6t5BsKrET1gbJEiy1EdMCWs2T98A5j6cY4PdMfo3pYvq9X2x3NsWqFk7CkXLFtYyVy9b8",
  "key11": "5mq9u5kF5zA1fWyA7wPq4XqoNVWcod9JkXmYCytPjkD1QRLPqZTxDzyYHu4WHTaxPhk1qkMqRCHgFPpyUWqb5WCv",
  "key12": "41BkCdUTxyErcUyh1VErFopxWxrDinxfBvFcQav6xk31MkWghNU4HmpXabojA67GNQQimNFBYc8edfJ74xmrTAGn",
  "key13": "2uELSyzE9ufwXkYmrxVGhCZxPpiXH6mwe9dtfcWFgDNLHQ2jBzvFHWJnNTSgqRLxZe2XNfYET159ekabJfZjks9L",
  "key14": "5szAwfVYEP7wDQPqf6rL4LMu8A8Krz8BoZxQc4aKfyVD23yfYF6a4hoBmeyin2HSZQsgtsmgRtej2VrPUhbLreHq",
  "key15": "2sD4J1xZzKURSMHTiYkQE7WgN2ntgDGVuU8mcfnrdiG3J4pHg5Cua6LNKXmH88sfPcGbBTwb1zvJyhU3RJDnerfT",
  "key16": "5HzxLPQWmG55vpgNpVH3QBH2AdrpcxfPzDWDreo4cvx8t7HLK54tWgp7ib6XEo5GfRCP4juawVy1oo15xPbheBei",
  "key17": "4xnERQccn26jyVXWUKUxnqxm8VNsbUyXDfDWC2sDCz5xNuu3s3BCVMKcauUWwxC4ki6hdLU9KDNmrWMzhB5RZZtq",
  "key18": "3Z48m1jpSTc8djaWQn1JuxKgM7p1P4tcR77KgiSgcZZwUJazkfDdf2kBrJwWH8QrgpDNf1BCCSBorMTu2ZUbjHmp",
  "key19": "2VjZYyEcPCHQyo6a7ZKzFjMHbLbxGneccAzUobJFofykvQQqqmVygg3nPqHBxuSVpqrE5gwfH6EmBnGVyk8kCAAd",
  "key20": "2x6ru42uHALVf3g3ZQk574ZtaeqLco3CasE59astq5gXwkxXYUNcmDrES63uFL1FiiXWtt37j787xjU7cgtD5SL4",
  "key21": "27v8qbo7cahKffF8fsAjTBfLgx5nyXmLxvnTV24K9V3yD5xdvKE3PE5Mqrj3xL7QxMrL4uUa3UDhu5Ch2SDRrUhd",
  "key22": "dw4e5m1wUwZG7zrRwN8dkqHuAsoAMdj2seskvpR1u6fNfj7XQ62Qd1iZv7rWpw4oCg2mgGWYCjhzvj5CS936CUA",
  "key23": "CU9gMNGHWg29R5Nt13MBiD3eZuwgyzaRXWct5TuDbpxZPc36JSeFsamQ86Fn6BT7NKTn4XUcjTy9mmb3PXD4WGc",
  "key24": "46i5Tqsy6tgkXax3H5LsXjGov2BYm6khpBF71Hm3DSakQ442Wwbk9yn4aiPfMNbJMDXdLrBVAzicNzZkhKkVWs3q",
  "key25": "4cbxSDAkbJzuqPHjeTD2BLWbrfXAh49HWxxwoRwaVqbePy4UWv9V9zrpvPvPnWxJM5k2JKxTJX9KMdtszvuqbdfW",
  "key26": "Lb268hXQ9whx8sEJzAwLdaKN9f9Bm5zi8Z83hGeNYo43qkw4YZUun63SpGyWhqLjzZQmQFqR5X6aYRFGySEeAAD",
  "key27": "5J4UfkyPGTjvfLd7vps9PUETso8SMBMRB8pNic8ynNZYSMjzV3yGbwx5tFkmzrPZg7cNdwHYG6Z47QLLUcDJgBsu",
  "key28": "4E1an6xsGA2FG8n4EGbpTfdXJoWqvsreGHjT1SVjkjQUSJfDjDJTdomBBgGCzRAQ2GbiXUoF8u7oUGy4VCQvBwrr",
  "key29": "4qYKuKEWQV8H1sRkjNwjaZuk2SRq1M7aZ1Pj7jCqsyJbSwEDmxp6tJv2ByHRbATvtGAYjd67wbWZkb5FPm4myjaH",
  "key30": "DDWWn2eHwnCKnjgUeT618JG4oZFemTf4g3gY6HZZmFZaxpTqAYY9pSZ8FqZzgD1bcbmwkEkCDU8ZmmuAPd5ft7z",
  "key31": "5iUyKQydNt5sKV3VZWGq7cKZAGuW1VTmnZ6yi1jh68bxn1nyCkrMiYDbxncAZYDykajokNwCMPAAhL9Paztbdagw",
  "key32": "9k8RGjyRvdufUsERYTsKprAb4QYQi9rY3NdTxBEjHUsRJk7hEXFVsccq6fyZWUmFTr9jWtVPSQxA362PEFyAB7v",
  "key33": "4XvktGtg923S11su8RSagEJqJA3e9ox3DSQueScfr7RxBc524PYULFnqYDxz8yqLWhFytf5NhF3fkBgCG9a54n9C",
  "key34": "4fnGnxNR2n6TRtcA5saBNA9bGMnzV15YrnL2cW4Ke9hXRd9NtSWcZY1V2xtuXznr2nZUAs18oY2fBgvYsfzMDCWJ"
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

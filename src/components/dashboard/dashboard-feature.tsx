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
    "5NtQCUCm6ZX1B9xTWxjBbYFNZaihNKV7NmAP1yxz6oytYghF4xMsUawJxQ6aab1Rishir8sNKBP7jLuMXDdD9Te7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r2jsP72xftBfMpkcv1ALLpZVF3r86DuEdHG7fmzaeG54x9ihmE1ukvGk211yDXjdgFCXHbF1DxcULTosVHVcpS9",
  "key1": "Dgm3mNRBrtVoFgvipJ3NeBoQsAufx2qneK95ikq8poRtJvBmnSt1F8MDdBcKMue3wX6EbXkkoPtbnSKD3vvCCKX",
  "key2": "3LfPVKtjJ2dKEGTcDAsFCcWf388KxNHU59ZAwGM4VDrFjwt7QtYBJjy34exM13ykb2zcE3etkfftdcdiuoMwv9U9",
  "key3": "24MT32HwfX3jhCLmtNtSmdcqZoz94LoA6vyxpzikmpB95gkAQSZThoxLh6eQF3r4weGhBYSocJLRNSTFCLjWCD2e",
  "key4": "E3raUG3EUPtKodk2zdKc3b6Twa1XztKAKVsMyRC929oHrcJrNpeg41GtVBbwRsPhxbHNYHLX43rmeX5px7Vvg1U",
  "key5": "5zWNMPh1wb7XbP7j1Bvb9W9TjskeLDVRSFgmFxEyRheC9sC4F3PFjhwvtViJWwBrXfTZXwtVHs7nxnwJuUduKDkq",
  "key6": "4wVwXdnzyej4bCrXDwJGdZSYWWmm5hKxmF4khzTt5JqpzzaJUddHdzTHqJA8DuiTozP6MJRqk6wiSobPzgzw9Th6",
  "key7": "4YhqshjADV7ppbL3m2uwxrN5AJmPQzzGQW3KVv8fnzsPPzjwap1oJSxhKjUAkWwpbUtPwN4EwYoCmoTS5dn7pET1",
  "key8": "5QSFvyLJkc32nysTtKqoaF5RDqnAPpaH7eaXiu7RThnQ3MctsjDMU7R4WUsaTx2sekGPariUb7d6q2qGHCYGWNB4",
  "key9": "4vjXWQqDb4hQQqnkw4G7S2vP92Y7VPxeMuYycgZ3UyTSNw6LRNydX1pTYs6cGYGM31TuVxGUreakQs4x1imN9cc",
  "key10": "5G5TXbHgyadXL9YJPPBmLbv3VNR5xt9BzpSmNLQX56zN8fyXRWZ9wWWz6Ktxe2GeUNFJ6C9yEPEXmT7n3rN6qwAm",
  "key11": "4bXGNe2JPcbnFoXQBwex7Awh7Bs4av41394Ch11eGpDgCMy6Y4GHFQ7AEJa7kHi3B8cSTXe9JXSMoBTmG2wiU5FK",
  "key12": "4kwZWPUsvJ2wxKYKaMqQnFCSXjC7m3w7LyJwfsXDok43kAZaCAhRPppvxyniuMqrzDNuDkHBFBBp3v4xUptePu3o",
  "key13": "5HEkxfhEJfAkrySgD6PS8s5wMnzsQNcZQXMn4HxWFd4gWFc1PHq8AM4TCMXJdFEoastNdDDae4tqsPUeidYWr8mt",
  "key14": "2Zv1cEBesJTY1Ww71vd6LwdgbRUthdcf78V8AamkqNE1yLjxfyXg5y7RV5akrjLWHSMD9L4ejeJZtH1GFx1XJqvy",
  "key15": "3uP3vWEDhiSEGGkg6nHVrvVjjUt514geNAFpBSBa3tXqyXAnV6gLDUp18KYg79jg3uEzXhfTjej2Y8zw7E2wDguE",
  "key16": "3cvFzaHdneq1fbCxGF63Kq8fLA5DyMcJqCApinjPxUw4NEJ7je5hQxz6XB8LJjLVufe91Rh4v9uFaTHmRSMrDdZx",
  "key17": "442XjEAs9iG9WZvRPg9sDRmJZC45QN5XR9dpGcvp6JQ2fEHRzQR77wx9f9boqH8edgLeE4S2mEJaCtb4jPLeNCcU",
  "key18": "283hAQEsGHw4x6PVY5LwfeH6JYTWnK49XNGaEXJQvkYumkd72QPZhVGuThya3YPTj1iWYmyztahK56voLgKBAABL",
  "key19": "3NqkMLUtxmJt1hiaB9qwLDU5nNrGagaTU6rCJcj1qSafCr7CpAw9yUhYjR1SythBdDAfFbbFtYfqUavG3EcPUsrn",
  "key20": "4LXxEmjWpxLiz8yEnytwfepfP4L7Rtt4QFBzKhZJrGga4jYjfJFhU2U1H8BHWEWLfSUTxYtFNAMZVLH4cPejGApV",
  "key21": "5gAXHztYt6DAdLq1s9FEAzhp9nShiikEbMMph4yUottSyLcW36C5Kx55ocibFVLuh5itKyiJjUQfTNyHJsuN4SKN",
  "key22": "3MGA5fxVkffgA8JLudX1dwEJUuCJrPVM6hgjDR2foQ2C5KFMqc18BWd2vqCTLd9tM5B2GSwXQFxh7DKbQnoT9arT",
  "key23": "5kiSSeiN5rAHtrDtmVmQfRwdMSftUhe2ATbYX7i9ZFkUaVHEamEVmYqyvsjVZ2B15M2oPZ7gFR6AVtDG6e3iPPzi",
  "key24": "4h7eGZJ7CzKFkGrbU1KkAcZg9AquxWSPs7i2ni5XTHgHWS7kfV5tv89SSiide9wWWrHbAvYG7uxputYEU6fLPDxa",
  "key25": "4vnSz6v5Rf37MXq7S82aZZ11UxXVUt1Vbje82RKaMvACEKsVPysiXy93XspAFjAbSoszi33oPBd77gyTfePDWVXd",
  "key26": "2cQnRHqJt4bzQVhGthD1Xr1Z2VmWXW7NSansnZtctcW6u2AmWCYWbWhedthWtnkJ3msNStrocP4pWnRrWchH8zSh",
  "key27": "55GbcgAhF3B8G5kSdU8LDX9xbogBLZpmnsX4te981i7jRCo72phF3UtE8umktdV7uXFPQcbspRCBUrSvX6QfZyn5",
  "key28": "2uz1s7H4vsehjz49tMMb8vAyiR3r4HKWsnwj1jjc8VNrvSTNiRsBC6TfZSwQxAT56Uk2QQodJkvA1rbL1uCtTiBH",
  "key29": "2McVYYWPXQs95USqaawNQytKirwVwmLD2Wu44jkoP6HKSjBzEB3zgqN6w9wwdrP73i3arKEUFHtBXyL9TUZsUw9e",
  "key30": "5u6d3xFyuMRy6R4UyvMrC8QRQ4AmdNZuSkvDzg8XTr4FwEAYhnBDA8AKvrph53L8crrNDJy1VbkqwJZHzydD1emA",
  "key31": "46hzbt1t3fL7crKnWXAVVa82zq2QmMHWMHvUiXVk3RvX2VgXSGeHWvwpF2TdzqsHBRZnaeSi8sVmt1Z7QmB6vhp3",
  "key32": "4LA12S4p9rmPbVb8HJepGT2FRvQ8QSLa3dSTJAwiHmAzjvvCzfhy8ZsnwG3GLdoiPdJiw6uZQ3RxdxAgDqzRQGTJ"
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

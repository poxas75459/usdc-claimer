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
    "52tmk8PSoAvLjXf8XxL13XQPGZse8FaWbVeXuEKoKzo6rjVg6PRa61TV48rjwzkvztJBCho9JikvDvpMkua6Hxbq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47xYKyqeiSvgUhcD4Xrhva8RykrfKAzgzj6ep3HpPnEZ68a6mVxXXkHSRs2m68ec8BxEE9pvwam651HZSEdRFz9b",
  "key1": "4ond3aG3T8k8BoYJ3zuRhU9iqeBoxDCE3VA93hUowf7FP8Tsmpy6tKEtgg6TkgGkYUAc84TTBHxzDqJWnmQE6qi9",
  "key2": "5w28aZguxcNS8eiUGhLWTuKsyELczJ37hYY98zA5wh54moossdj7YCKcVUta9xGJS3Yz3gayV2NRBQSkjRA6S6wE",
  "key3": "5MtZdZSCYLihFtsJu5ieoip1aNV4xfbq4dZtcSKNpbwRpq4pRtx96xykmanaQJU7MGmWQ5SMcQJtcLpmgeW5nMGB",
  "key4": "3aCXU2DHbzCC4qzRXGJRzYqGCCZyX2nmf5X7S2f6L77d4jra7n6XPfdwQp5psugTphx5qTgTNG2fKHLYN8wQ5EGF",
  "key5": "4UPJeyA6yuXZu8kep2uRnTkGqMrPMAG9tXKdjFUpZT5B7dGCvh1NwZ4KHfCSS4XmE6LX6k2WBXZnKMJ68fDa6HVW",
  "key6": "2NAk5jK7U16vvihorSqKDa8wnD52o2HamvoAC6gYgQj84sn8wVSB6bBBuQirjK9i3t76WqCZ47cDFcvm9JKqJbU6",
  "key7": "5vANanA3TfUaXEoYvjJuJg3hWWfw1kCKopTgXuXrLtdJXUX4X2gbQ2Q54qwKmtiTXXxRdaBvb8R3TQrrsLk7qUnD",
  "key8": "481nXBUnxSZqHZNq4fGEKHvaAWeeumaRrnx3fuqtGESEm6iK6LXxqB8PNojydzxEDyrNZ6GPb7uiE92BkimQE7RJ",
  "key9": "j7xif2twWtpvmtJbxZGdfBaRXqetBqRhXUSSmL1HfRRX48NyebqQf86nA5UPcRJkwkf1vzv4SBDZb1xejAstoCA",
  "key10": "EGs47KofBegBx4eMh1nCWntze49z1mkjLbszYRzqoURiR1Vf1u99bREGZttigKGs6chJ3SsPp9v1Xewbs2Z3nt4",
  "key11": "2MQxzFSnGEW2NQhCmMKNsCYR44F7kdBn2t1bKEP5syrFztMsAwtJ8v37CfnTY4ZTKGJGq3Zx5EipEnTAEfBFv4dA",
  "key12": "65x1JEP4UwAUFiFemTofqW71hLApV2knnCNXHak51icx2mYUVDSev8P5oACGgLFiGNZ7mxFgj96tWwqK5KGYLHsk",
  "key13": "5gfgw4nF5cgSTWqiFKKyf1Xbq5fy8wfUEPvEjro6Wxavbxj3R6KJzn7RgxCtFUvh5a4kSHL37xhZ5XBRgxSNqoMD",
  "key14": "2izw34VvmcwTxRu3fj5ti5x29emeWappSYFwWdQAJVwtRBB7JQ5WQ1GsYLNVEZAASsGLjWHHeb1A4oNDfbGqzJhE",
  "key15": "2fFRHbw26RR3bcfmofsVWcUDycFzFJwj5saHG8EMbUp2CMNg9MwYXQagRiKo9bNVmxmro38mrUaH5FPc9DZ2Psyp",
  "key16": "3kTCLWkCvcNEt7G82qhKUHYfMENsvwpej36bzTeUjoHcEfFrapF9WdBkAxjWjb1SH9ev7G6oCGab1Ac3ycPQwvok",
  "key17": "3tHg8BwKLJVkor1dwXYaLxEJc1i8kC4DSAJRAKdBQphvNmw3K2MxXpVtxTeFiizukybbEAk9oX6M4p5sC85qyxVK",
  "key18": "64y1DPaeGzFUy9SC5rVxTHGhKExGuCQoHcdbP3iZc653KncwfB4W6iK39TxXbK99ezDWFodaBfo62oyqxzoNgYr1",
  "key19": "4oqyGPCeQWUALTRpABGcB4HdNAvmEcwjT3ULzHxKe9RgqnbNqChqDG2SeqDC2Cy3P4yA2VqydYdyTabSTsdwPoNh",
  "key20": "4Wp2AveG9HrWCriLEC1jpW7NqziLcE8W5NfGnzZJMq6nKZ9UDb58P3mnhNq6MbgLHoEUB5E1kXENQxKomqUMSJjy",
  "key21": "4U7e1jgeQ7se3UssQjaAcZ91LUdyFd5SCL3nTRFxCcwgBE5SN21G58j2WMP34Wmy8ftvUWDTqpLrLRGfbNRJHFzm",
  "key22": "4BT7EnnQTYGWuwmkDh2J4j57LtQdjt5ri7zSDVq2xqaLy8APM21YpnyUAfUDtpSd6wNnaQ7CD989aNnZf3tcTGBy",
  "key23": "5ejsFqZmdMudvKyrm2QaXQgguXT6UgftpXNbVF5LSVU2LFYLS99qVFW9iH5S3KspiPQsM27i3HxxTRdwsjmaiCY1",
  "key24": "fo4rsecs32bTYuZcSnJuQdbzbqcqgtCAxNWXVPHcWvjwTZ2rgFnTLmUmi7sLroGVvABTCvtiT6yRCtvfpx2QiF9",
  "key25": "5dCuz3PCwgzEckY7GKqTAQXZZBPmDniDJa97pDdin8hphNNnaEpgL2Erwxz1KR8sb4t5vL5wLs1APypyimFuP886",
  "key26": "4s73y8cF8VCtsbVBJpeyzgfee1nd8PsipKQB8Q79zhBup319BR8z8xNiRN6efVWsU5r29vTST2J2seSS9tVGmJtj"
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

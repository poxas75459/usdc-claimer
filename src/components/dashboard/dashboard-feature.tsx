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
    "NGHDLWv6oVSQ9naKksDoRdT1Nf9GJRDiwaViBapXdV2Ub1fymbY9T9TCcWKct4xnZWVXwU29hudjeK4PbTr52o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Up4mFqXvg3zAxTtrhr37thbYRHvjqy5gmfq1pWvMQvPGcmA7eHNYf9pGsaLMjPtHy8fto61PkjVYm2Cy8RednG",
  "key1": "cS7ZHPuw7iByMFUX8yteoqB5Vgk7wZzpavDZLwqx6LbsyVaeo5hgb3swFPD5iffZuLVnmNtM4X6Soi7bzyV4xfM",
  "key2": "3THA1cnejVsnivymjxtuFjwF7MPNsWsqqa1pCJfpHPJQt2SQSB1DjU52ruXij3U7FJu1wdZqnXbSf8qHE2ahQwCS",
  "key3": "2RrdPfzQ3Yb1h8ubz6CFw2z5eMpUERQTATBcFyQsvZXXy2YQPVw7V92ADCm7v8RQBdeYq7A2cAaoXAQWMtJ9MxDJ",
  "key4": "sL71NrtdhyJ4MmYMroZy8RgQDE9C4EaM3F7zsCt8HhNCL5CSDVR97DwiCEjNJM9wwyjH9Zg5YLccZjPnvR1rRwh",
  "key5": "4pxGCUpLcBA9GvjC3tWjrFpA8d2CbEr7jDm5cveccGSqr7FKKHhnS9ikEaGwHvBFXVmo6Pp5L1VzonnoYhtx413r",
  "key6": "3BycidhG56KCUxFw6si9Lvcd5cznAB4VtcLyg6Q4D24myaTi4XY21i1Mct9ZbeBX1u46hRQChXjmc66DRBnmMFEy",
  "key7": "2tj7oGN6NE5FZLm6Q7dexygqusqzKrpNm9bvnE4Ct2yGGrXg5kxTMgBkYFvu7UkzihkAnHJ8MYzWVrKTZt9LuRKV",
  "key8": "4AD7E1HBbHttoNi7SA9RZDKaSoBJANjCP2WfHQjpgiwf3CJVa4HSZo2F1Sz6nCabBDYjswcHEkLVUZumpZwqBVZT",
  "key9": "2TXVdf4w7cJg6KvdohtpXWUry2P7MYWpeAiFyUbfsEj9XtKFy91VbGkqMPtvpuskJ5sr1WYDDEMTsR6k8rKWJDw5",
  "key10": "4p3cCnCN4Si4Q2QA1DmBPH9BmJU1ADW6tNxnSfCoHgbHc6s3dniVpsCqpMmqsw5xu1qybbbvxD2ZF8ttvHi2N4SZ",
  "key11": "2S3StAFh39XJjDroQvAwigsDdbq6bTCQafUmkbgdm8yofTf79n1MT3VCyiDWUgMopoRFSqW5oqxhfzTKFrcETiKM",
  "key12": "2D4jLuUk3CuY9PRUXs15BJuPANSLtkYHFEhhiSHjXdsHV3a1GbGAE8ToJwQWCp4ejvR6cXtCfoz5o8trs7p99REL",
  "key13": "4LGGBw1G4pJ9a4WWWLQStBCeNthqz2Wyg8mmEour5xqHsH5x8pYkdhs3C8RtFBo68du1qxV4L2WTGxYwFpsU4tVc",
  "key14": "3khG6JvXpBa64noskWAFcWPD3rcXjQZpHmD9mJMqJyTUPoLaCjQWk3PqU2EXKgGWhXsymyFeufbEZudoTVoDCiJr",
  "key15": "2FYQExKUkzMNLEPs9Jb7y1w3TVh7iNc9T7MzTfFtwc1JwTyKiK3MNy9tuwUU7up52uWmqT9uFAobPH3hJVfUgrwG",
  "key16": "4E4DaWYPERjgxAVTu9JzKcR1SskpbXv8bv5eDkJAUBkzz6zC64sBSVNvJKJAZqqXRchac6n3QAjW6HHpy41b8gAH",
  "key17": "5YSATnjtKVuvG2qV1A2P37CaWQNJ2DgdNT8yo94HPTNK59YvUFTK1M4rUNoQfAitWm3ZUtvesUvJLRT3R4YfQSPb",
  "key18": "4QaNwBQHC3KoU8x2Fbrh7CuAYqm4KCLFJQAj7ZVBjQY9PdVUghjts2PYt92RLZjMdnHQuQ1Sb6q2RwQbTSFqPgqT",
  "key19": "5xFufjRQFtoHmgEvcp2NjvJ1HGkQbQvDPLnQdN5WFTCNBHUxHUh3HHCjYx2yiQuphWYgcBtwdffGYsge2abT35uF",
  "key20": "5HmjxVzJBnLfBmGAjDAzPPLYDxBwAQdQU8CshbkPTmcCJS1HPY3QW4BLq9wW2Q2g1QBzWrEiLZDvBvQmwj3VfBDx",
  "key21": "56zkw9L9bpP3LXXQ2ERWzdPkhnTaKtdXzDvth4W4UYhNcDHXVM8HtDMRXxcCosfYBBWP2uJVCu1e4JvMEgkibzeF",
  "key22": "2JayEM46ovCmsMWgJ3RfyunCRt6DHSEH2stxB9d7asHSsCEyR41iT5LMtMtVMJJsW4YtYfJgRRJqe12WhQDTwMsC",
  "key23": "UCjFrm5P2JRbFMcZCVh336AHZ2oxwmBCrE3iWCqSKvsH1ye61SaPB5YJZFMPJXLAhoK7FmMKyhU9TtsWHA3pfNJ",
  "key24": "2ghunGb7iU6GrhER4ERdkhyTKdvjekV63G4rdWVaBjqPAdLbKh6QGQcsxDzhxbHqyeW6B3kTNZQg7F2kCZXL13wn",
  "key25": "5CCcHoP4Di7RoLugUdMedDwwue2A2fdpNmCAQwkrTM1kZKNJmnco5aFagyCJz77CqNdEKXro9A7W3RmVfvLG2XsD",
  "key26": "n6CyVpVaDMyiKfud4xWex8TUhjiihiYxZNT7AFwL81rbuTqMfhJywCmmziwAeR8ZBreJZWD4L2KYC3hhsCMVf4w",
  "key27": "5gH3nqhYB4DFG45KtmKVrU7mCXE8Am3vWnPhNCVXT47MihJdZd3s9Ej7vLadr7mXu8942JVfhKx6C9wHmBKMHr99",
  "key28": "44vqAFmmY6ie6hLxrwFXiJr2SqyP1GaxXU4KRwmSvsj1Ln5F1sPQmaApTeYqvvA5HvYpKmBu7495TRp1TRk153m"
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

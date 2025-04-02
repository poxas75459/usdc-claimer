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
    "ghePs15QPWz9GRyB3FbVdUZ3vtUkXDrX5ax5m1vrSUEM7Ts6oHtf4RQcqzzuuFsaW1SMrrWGp3auaveKF3NyuxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hbvMTiJYr2QY8hsEj2gV343gfWG2meW7S7KUhCfEEBEcmcy7qdY25Mqj8b1Xba3WDXeUfdgCujEiSEbtNAjZRKW",
  "key1": "aDjPkomFDDHNe2t4BZwskREEHRg9HTv78mMK7AMV2UuTu4iFL1tA5o6KPgLwuzwP8mtF9CHed3EDVCNdYGZJ8Gc",
  "key2": "3ero6zNW3SXeEKeSPLECqSF9yAtYVYC8hQsfU3UNkQWFaxqQFY9sZGrkkfbJYp86hDBwtq8uz6xY52GZKNjbMnm3",
  "key3": "5EQfTxf6Kxktxr98y8chQFZrsUBGxqcCDYLR4V4yJZwGfPAMm1VDSTXpKXcjdE34gF9YYAKaboQcUYsw7XGsw9qe",
  "key4": "yXfn41QkjBT4b6yyojEfFbB2mW3eRUfh7ZT1m5VW4krdMqVNW1HV28Lp42Xp9FAE6RzC95dYCGXE6QzcuCDQ9jN",
  "key5": "5idJgK8f8iCHhFkFuLXD5Ee7584jaZBaVJB74uHs39iDp6JxSVgvVfRJqvqdQPuHhn68u82z4Tw4pR4sqME21PUk",
  "key6": "5DoLDrRumJ8WBNHAC4TRrAK2hskdsyBaYhBWL9E6RHw8ZnHFvN6HDSRuSqaEBQxrFfUBcTKwzL6aAFSaa9pNUtQT",
  "key7": "3YupAV9x3hNXdeMEiwcpg16yeWLwY7LqnZyHW7syz12wiwJuutCkDdB7WD1fC3T4K8vYxN99dvZQWWXRrGjGGaM3",
  "key8": "5Pg63XApf1q61tPRT15aXsNhPkuyg8ZGnjPuecu9acAsferAXPV5ZEqCWaNcmPBo8YsrRoSo4w37BJEASADbMbtm",
  "key9": "3c7Cc2TPsyNCwPBrh32syM34xKZND1TbwzjPAVh2r1jNxXV2A1tKhGxhqCFJgYkn5HuynQAfrbmRZcWrrV7t1iJX",
  "key10": "EHLjKx5GEnd2uMjZZ6eZHaMsb7Eihh25NiLQKK4jaUHGpThRzqp4ifP5dtgfFFzZatSx49GWNyYtrCZ4nAqfsET",
  "key11": "3CyqCp1hHqtLqK1Z9tjaD94HRqgut2BFgxnksrQn3rHAMKYPZzkkmv8gJcEoKdvT52ZuotawUS8xLGoGorxv7dKM",
  "key12": "2LYavQHn7GzCkwLy7p1FAzsVNpBJYzqrkNkNkqAHBQz3yvS5dxHkyZss6MvcGMKgrNkcAeWXwESGFqfAS6er5rUd",
  "key13": "3Rhpg5ZdmBqoyhgm3iRUoSFs8PEy5TeZheKRoZnMCF8poAuoA7bN5UaLMhEB93UNk6rfzTnFkd7ZAhJvq6g1cD2a",
  "key14": "27KPKPpFDwEjBneFDPRKZ4Drbr1j8AZcSFE1S7diFLGbra82Xvb3JwmefxASBSBzcpYk4RWiPcxf5PgGQShU7uVb",
  "key15": "5FYiVGLVG7yEJvobQrBRygSDsabY2bnhtK7ynZh7hRSHBzbw96MaYmYQYkwy2gmAsQ63NyWA23h2VxLiciVmNAvE",
  "key16": "4rZjTofn5Q6AkMMtBuvbuwA6kJvzAfettGwu7vWWDaa4DwUyokov7SdFWJZyMhKGXA3xYfeWAuGCcQp7jyQjSzYd",
  "key17": "5z4Y1CX4iWdAyuGAF9QjgSixpS36DeNjzurp2CkcwcdNnNzhAn9SpzmZ17xzbGahKoeJzP3wb7STTpSTkmUefjKW",
  "key18": "X5QrKycGFR94czXa7N2UnuBEzn78yc5Wx8eojEC3tCxG3gc5t7V8GwPfsMKk8U5pHstUea5smstBM3PFthBgyRT",
  "key19": "4QiqGPVpX5ERoKgLedzuoEhgfMCh4uP7kYrJwaRbSS6Y5jE66Ash2gew3jrHWCR9fKNFcjYgHQV53AQ5WfqoD9YP",
  "key20": "4dcS84DL5n2LyxbZiHKeYnvKrMAtfP8GTeshCf4ChUVHL4KDSBMhfjRAH3yL1FE8vuFFhw4foT21sCUYkUQ8aJLi",
  "key21": "5WjtSPBZQTxiQ4TdPbN25NQSm2kE4aWzfUAFjEjAAsFcfoW1gbob2btjBhAWnXtTUVx2Y519Lj4Ei8nfyxPnuAUb",
  "key22": "uSrSBd5x4TipBqN63m7HNgi68GcvYQUWkPfdLMedgEeAwz9EGNYheZ3jPdsb6VnTjbqgHSanwHJcuZxTiCJLDZe",
  "key23": "XxarTt8AkU3T3TLoiGybumgGnuZYtuDLNsQPQJRFTNWCMMe6hBxNvKsg3qJcXRnqqi5gURabEGY4ng2vZzC9DWF",
  "key24": "4oQWT3n5snzu1PEdAczfaCdHsh562cPi9TxeE77nsNnGprCP7SgJkF4s1zaVTTVYPMEqVZvaiBdm5GZCsooW4zyD",
  "key25": "qYwnfiKnr4RC8YxyiW4PdGDNjgcVa6Td52GhLB11FuiZaJet3Mq4NZLkzzAxfQTBqnEoq6qWtZvG1f1QN8wVQfk",
  "key26": "2PrEgNQsBsvJUYJ9vZ8DrYr4e9LPKEQ6qbpbQK6AFAD3a5R6KYceo9yeSzoudLRit8JZmvTZ6N6ZmRov3RQW37HN"
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

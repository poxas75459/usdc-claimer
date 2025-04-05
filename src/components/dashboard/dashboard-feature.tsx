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
    "5no85YZjcqpkUNXCGpzTBtGw2mWEYsEcA5PYpQCtafWzLxEJVRN1phaP95m181M3d7xv7dthqLFHnAV3SqkErCXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qsguF1hGA7QR8mSviLwwsN5mMkZtTXV8c2fvp2KLwzcL8Frcq15z7ECGMVUcatCWwzUFP72fz1gHtxwTirE4Kc7",
  "key1": "w6Yd2D2C1ETtu7sioRDBXUD7zeeH1hMUZGEDrzetJcBHHWmydcLQfsGAtyHeVvrdAAZ3K5k5AVQrbKqhuS8zycH",
  "key2": "67QR2Fdx7ScrJYaMJN1FyqMAEJh51FujsVZUeBevYaSMtE6v9rKMFDUdmbyi1zvgmDT4CDK5MAM9aep44ZRPJzhk",
  "key3": "poxe696MgXtRVgkDvYMJbavWYizAoyTSjzaGU3so4ar9YzWZyBFWq9cL24egWRRKSkfmxPRGQcss3S1mkJWcHuU",
  "key4": "vmXDT3isujnxgdFJv9YC7ndFcdzPEdisNvFhkT72Snk8tccVAFQ5VFgWhNPqGL8kvLxuJfPC5mN1t6N6j833BkV",
  "key5": "3mgmbHawjBGLfS4AYvCWVF1zxobtb5qpSGYK2W3Pvtu6xGmQ5N3UGAVLGBk1m3BVPjdHx1Uti18UvatQ6ACajPXi",
  "key6": "25D5TfRWP34aYmeucEyuA2Z6EcLSVegQF1fji9nEZGSnxT7d1beGyqnK8bumft2M1Yybi1heDQmrAqmmFGdfkJ55",
  "key7": "3c1Z7AzW5q84DAHABhvUSCL6jH2wM19N92NJFs6zisaTQ34fbWYYVhmUiRArv36ij4kQKSwyuJmzRp131ZXU4wWw",
  "key8": "3HGjkCG4jk3AHRs9W595ndPX7YkoTPz6bCYnXzCfR1uASUYgPPy9fS1Jro1yWGaTdu6oxW2bsmKjUWTD3QaVxrKo",
  "key9": "5Av2HHs2WP5stzdsQVXj76KRE4dzpfUijqitzTCjTo9dUsZYqHAMtnR8dBDrDoeKt6PJa7t9WkrNdHvgVizFmSLt",
  "key10": "5ywRp5yoiDNkaZ31Jj6xhmyihm6wxXqMjLBVEP9z5r27zm6AQ1CEQN77gnzAb57nWXt4mjRfaL8RaAZZMWBCNYBA",
  "key11": "3Tai5hR33R1VsPW77Go1u7Cb8NebHFGvMU1bU4itLGfE4zp5qqCtqd7cMLTx6qFPKKVNFTQCWd7Z5gJo7anZ9bM9",
  "key12": "5gdA7cwUvAi9FeF7YER8hXm7Pfdx1jNEN8Mn5PFMTzUizJKnwvas3DHsaaNwpCN9wrxrEPExVhiHYkDnAHEKxh2T",
  "key13": "66R8rTTyyYiepteTbFs8StLufXJRUi36msFAzRrLSsQM4cRLefBtJzrny1pWkRHcEvroqFAgvWEAn4zBqcjBodNs",
  "key14": "BkykvKpLZyo69dT6yH3yFD5ytbo2MCfisyWh46uzji4YzQNJhYQC7TAf8es9MdLZp1DMaB3cv5CLepaG9Huqaq2",
  "key15": "5wsTKqGk53ZMrkQ9WXdBNyLSEvX8GSAQp6i6ybHBzT18LAg6YWiyFtE3GWm4JHdgv5cUWkc9diAYefAM4HLSayN1",
  "key16": "4FC9Zu3aGk2UJbpRQUFUXUyZKJNAK8rbvcMFwhY5WSnCr5wEFt8Xvizep27cN9KAe6JeEhamCbWgQydFF1a78Ngz",
  "key17": "5cy38GcZpKKLxwb7d8MCGfYi4Kg2Zu42dkKC2VSa45rjc7bj91AC3zvDDdyoEQcAdu8g3QyYM1pJXAXChBbYEvb5",
  "key18": "9m59mQuKhzJsocxn2S35eN6n7eHxmYfLrCBy2rQuhTLs86KLcYFPk3n8xwFCVgEVtfdUo5TaoP7Ayx3a79yKDs1",
  "key19": "358FK1jo1rWbLoKcKiZENa67AfRgSGkp3XDoVLmXnHKohJfJHyeNWB6k74HoUWVmy5yFMHqZJ3MJdaVAZ84eeFJR",
  "key20": "2QkZ2p7hCKhvK9QLQvNZtPGo3FN7tNZaJUuddqEGictAbxrspY8SD8np36PuonFXu1rXQvpuKfKmxz76Tvn57Wc6",
  "key21": "2ARcg61BHhoDc2v1iJQCrEzkqnvNuHs8XnkXCdkv5tMC9uiYjtsZmZLUQJZcFFnEYfhnuZswSCtZLf9Xfh8aaqSP",
  "key22": "3gezhQiUMubMoEDfq5aFHiBnBkeHJdkiGWCfNazvShiiGGWvSKCRyu6JzpGsxnmXBzbNuCxxFr6rPVVTXARPXaxz",
  "key23": "5cLBfGZmRLp9dLBvqgEyVVb1SfAF7oXKSZcCPHBv23GsswFSmJP3CxQhuKBoWRJgTm5u2Pyw1Q2id2TGrSi5yDpq",
  "key24": "5utWwkQhW1QZ5BWGhKEFb3efnoJxxh7YEMYFtQm37Mf9gdoPYDmh98YfySJf9AhyJfdv5H4UiFKa1uYQEC2cYLNU",
  "key25": "9mLQWkfKcKKZCJP5bEJGQXjeAQe5aqXVEaAnRbp9t1HkgkB9yNi8vP2JYTjS2oF5KMpsr7TBm25VymzeuGGy8a1",
  "key26": "4XuaAMSw6nhEWvcZHYuztgWoGxfhAoQWgpAUhxPKs7pW4qWMTRzEw8WGFEN2Ky4rMah2gUSYFSj6RaN37xhyAPVR",
  "key27": "2NwrCC3nDSJitFAFtaEcD4ELwNMTy8wEgmmN81jedbTVCv5PJESvRA7AVmYguEeYpuU78mB6XWz1pqGJ8Fay8zCa",
  "key28": "2AZXf1RB9JsKn73J7yLHSQJHMReu2netwgTMJUnpPkRRwFVE1Yn9qx1Wb8a82JZGLNnHb8nQruUAZ74sgNFYrMZp",
  "key29": "46DmzbBCiL7cmvL8LMZAmwR2Fk5m2TD1NaPzKdLhAUbMBxxqxRFo1uJBqq37qdWHuGi2FE5uGCMuHrdYs61sP9Ze",
  "key30": "2nQpW9mPYtEj3yex5hq3nF8Pzr32a6PbDC2Lj2Z68pToMUjXuY3ZY2voEro5VGADxQGnRKhwBhcHDyMJqKk6fs4c",
  "key31": "3h1Sui4FRUAZkQRDcQGtj78xW5N77VorWNdLg49PFFHdyxz5VD1aWxfHyFwjhYxenc9fW2EV74tBd6vPcDu1JWHC",
  "key32": "2vj9N1rwQ7LPRmUBhrcAe8MUSjQVmCoVDth4TKRqHXSEjW1JRBUmT1FP4uiQ8beZkQobK2xa5nchLAuv7UTs6mcQ",
  "key33": "5QHsRsZn3jwqknC8nvQvAhyFoXxEL4bQ1ZYuXDWUSrEbMMrK88FhL1DGUGeCkwRaWLXGig8w6hFmHPLk1Q4GiQt2",
  "key34": "pnddWL3P73GS6uuFidrBU3qYQiwvQ2bXb7VrWNMcyT6HbKgBYrEYpLbCSeZqUtzCGURtMo8nKsv6dqWt2aEskiN",
  "key35": "pgL3BABseWzpgfHSBK91nu8nkiKKUWDXtQjSi5uoBzsmgh1ZvQx5rfM487pNRbAjuMcJEB2zrgz1DtaY6nA5iG5",
  "key36": "VRxz5HvsvBaynLvyZ8iqHVCTAWvJphZBGrn8j5PnRsFqLzwvHBmMAfbkg7Lq3wENU7Dec6DHi2JcW8z2BU7kTpb"
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

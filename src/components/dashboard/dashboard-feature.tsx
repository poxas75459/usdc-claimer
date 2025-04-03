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
    "2PCJuj7MCLVpZTUqsKEZ4NCqE5Cnd9R73AUz7f4YvL6PNTxbucpkRJxDvoeUuHrEWhrWGxG6n2DUPPtYgbSdBk6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6KvmAhiMfHMkvqBqusWvF1jkLmRnbLRqHSooa4Hv2wrbw3ahSSSoJM1sxSSECG3AQrXHq2BAzY72PsVm4782Bb",
  "key1": "481hAtd92nvBrKfB3TCveSMZfkBQ1W7nV5xKJT8UzAmqvVdsbUMBM8Du5M3YAbpg8hkkFnLhRMqGVujh9iVjQeqn",
  "key2": "3fzqQvzMFXvrezbERw1fbJP3ZEehgqvzsxvTB6WjQ1s4k4JT2KNJ6ZDCftX7Ch7zpTQ8ddf32UmDKqBv77sQ4uXH",
  "key3": "uYBvcNFrCXgC5huZe8NhgsJM626en6Mcj7864FV8KBXrvDBASrYqfKRGTDHGcBG3cdoC7wQWFCyPP4TaDL2C3Ft",
  "key4": "62Hxd5KiQxFb8Knk1x3K2tYGVX4p4qHVvKaKzLrnrEgrpHdUaDq3hxQMnv6G1ni1M9eyB2FnHbqzVscLNYAmhjc3",
  "key5": "tJ8w2PBGLFdVt9dSHAjGxSKjRqcHUcjsGfArnWYzuhDdw4azCGW2mdiE7YRnPm4tdQxdBUdVFfQgmNj6MqBJqye",
  "key6": "3wMx6dWo69SuzpTkbzugDEuutKu3fLx53AXi7GXfTQ8NohXBB2GAQ7o33spaDgMSgrgbxqNpW2grTztHNJGU48dU",
  "key7": "4JcKZhHm8wwdo83ny8aiNufix8MByyA5jM2QG6MPvXmSurpjm9kjzexRfxGtfZbAS7PSZss2RuY1UDCCug574xVr",
  "key8": "4K5jDRZHo5cZBw4JrVa9kaFPK6ANCmjFszX8v82Vt7Epr7i6VaRiuNPqH3G3ptQr1hiweJ6EvUmzshCksHu6McPh",
  "key9": "29Ra9dptTs7jigbgS2aHJhbb3kdkkaDjSrawDH4H9eqEcnWVADeFDZ7Vt7JVksJgPypzLpKNk8GDN2Z1iNhNwKEX",
  "key10": "y2kHpeUSuioiApUGfxvnDAwK5gcVPHRhKiVgRkac7a7wmo5d4ixeD2fVJYufsmZ18MzJ8UYsokhXBno3936rBHo",
  "key11": "55kKromRUabWLKSjXfnuX8uNg9hXA4Du4cN1uQHaWjqSw8usMLVnnmxtNu6YoHZj6BPL91QuiCP9KLj7mh2XuuRe",
  "key12": "5bR7Eq1oW53oCQm3idGMLban3P5Pof34ufPtGSSdFVq1zADojHagxkj6Zt1PzsgiWvgUftMXQXjRzmVaGPorXNfn",
  "key13": "5YGrdXKwppdxpCB3zGQxfcXer1tiAGpSXrDomY3hDU616VcwczxzF2BJbM7K9i6NhunBULbpPSkanMNk9ecXyANd",
  "key14": "3gjH8ot4hHTCPoScbExwRYZrXHXZ3keCh2FFia4iNt7j1JAa1HHF4RTyLxReQRTvPSveQqMSRxsz5ZgVthpNrxnR",
  "key15": "57BoAyDSJXEYUhy813AenkkAAfm8FpGuYgBdEy3VJURAyvpy9ecUsXXWDRgxFPV3oWEpU4v5L6eYoucMtvkikzgW",
  "key16": "Z5QCioEEdBavaRNBPxLEuwjS79x93K64qG7MGycA2aj3Max6Utyfvw2UkTXyK351nXYkKuzMvSvwxGbqSK8aBph",
  "key17": "47awux6uXaNQGUKYCcdgoMei1PQvAci8PP8M7VXboRg631hmVsB97hEjXthVjVcWK9bJRyFr5ykDFQJrQmpGhCaU",
  "key18": "2wGu9i7ribkyBuPx521KHT4KhCx1DT4mjjdpPyGjtS8s9L18KFSiMMK9tyy7n92zN43DdU34ZxieWzKJfQMGNyXG",
  "key19": "49Ley4WuRn1jF5oT7WQ6kheX4zwkRwauiURfLcYZ19cY1wL27dJojL8aKhrFqoUzZxmwDDN84wCdXAWmJmidXgLf",
  "key20": "3nZM3b79jqvH8pLN9Uwqqc8Me9AejVu2esHweod3y7aaYwUahxALGdpfgkmvK3WNy5E5MPjTMJuukVsQQi4pYwAe",
  "key21": "32dCrVq7vUrQhNKSZZyZaHX4MVrEgH9uJ2zEA7sgViNxyfgLjtWt1umd3bscYQk1ri5h9pEF5XrZte1NuE5FB2oS",
  "key22": "3ZkN2FM3ZzVFDYE8BiWfrrFJHRcKdqPLwihxrbNhXvvhV9owUTQRBK2hH4PmQyrnFEyoaT75KE4psxf5v2V6xgN5",
  "key23": "5cDpceyje4RofAMkcvjpy1zGsqugn3D1CcN8HPvWBW2Y4ziScu3Cv7wUcw5K1Q2nCLxW1FH3TC5uWksZgE2qsiC1",
  "key24": "3W9NSD8rH3ty7SkeD3oNNfjSXUfiiiuJ1SZikNJqJcCKzT5AJUQ1LKBM5uavyf6rMt3xBh7JZtj1J2aGjmXTCh5T",
  "key25": "a8L8QGMCczKJZM4WJieVcQUycGsYYayta3JbDWghWJyEsdK4vAZrEVeP1p1mCwNKmvshTLcB7fG5gQ1Rc946TLD",
  "key26": "2fvYxaKZYJG2WkR6c58d22fdHb65C64ZmWxMbJEowp76hL5jMwtd5o2nkAMsV7q8fGWgieFR1XbbTZMRKLvcFyMe",
  "key27": "3awJd7MqBXordg9CxEz3f8yiGbWxEFg5gNqExPWNC4W2RvXZXrPKY9wr656G5BnX9s2d1aTiFrWRFyQEC1kwU8ko",
  "key28": "sX7SdJcByHtN9v1kskV9HftTcfjNdnSHAkDq2G6D5CkYf6TmHjcfYfT2DCht1CBKQt3HLYPRKwwXtK3pKkMJZhM",
  "key29": "4RLu2mhHjiSSTs9iPifJUj6k4ypWbHn5qsBf12c3AmLkGw3aD7MDN7KftGRgjy5TSmUysjbb2hHWGhd7SbfHeRSJ"
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

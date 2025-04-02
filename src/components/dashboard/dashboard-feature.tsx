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
    "3nSfd78d9GrW2FPRchv25ZLAYkpT6NnzE7mVEhp2ujx8VDNNzCK3Qz1iJX3kMGzzj2HwxWzK2tbsMCJJT37ySGob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QdNsJjq1kzLcwHSXA2cZWb6XedtZrMJoLASnYkAtyV65UrDWcJSz1C8PLY7VXi8TvUxuMVPt5Nn5z4Sc4BaKHmA",
  "key1": "3rgcoP3tVco8t6Pd8Lk7TMQcWvPXFefMMBd7oqQbZsqLxXAQz4jdiXcFGUKz7sukuyMagcf4F8x2hbtYTVuxgmgR",
  "key2": "38syNvxHzems9zA4zEhxnUwjub5iYfWgukbtMjXthSDMJtLRe4UDqXZr43UxKp4zDzvxa1V4fsE1GyaMoMBqxApL",
  "key3": "4T57fdZPqGNQpAo6643gitpHEJQnn8daC9N7Ctmt1YVxPoqWXVVNuFcKVbJDwxDbvuWC4BJLe4HUUGENsdZKoxha",
  "key4": "2sFLZT8endGbPWtnLxxmSb8Q6EG5GazCvKcyscXP1tqZMi7gv2GkErGdiJgn8uTRGnDUzdRcYP8vK3w1Yf6UujAE",
  "key5": "2aW271xuPrhk9RK4HcmuhTLqYWBYtV2ivP5JAgHEav3NMFytJ4cKW2wnG4FFTVEmRYCqpFiFRZ8t8r1R73pipRau",
  "key6": "5byRoAVXW1bZFiCe7tCUd6RCqxt7YYSNUPhqiY34zKocYPz1DVcAQLRZgPB4fm2DRaN3rNuaYV2sz9xoVDsA6NGd",
  "key7": "D6uEymjXHxjNv5sejzqTcd4KEmtGTsB1yWEqWJSndntiCij2toTkUeK4LYwbQUdivKxWMzfpXuTKntEaEcqKLYi",
  "key8": "4cMCC1g1TCRG3mHk4LxhEqKQu1RRmdNFiD74kwcj2HoR9Ziac4JBvBrp8pip6g8WRW5ogm26ZzGFPLmefqjWvUoP",
  "key9": "4xSZC6FhwzWv9k8jQHyC1AJhMGo99pchdJv9raVzwCmTfCaYVbNEXi7XEPYyyPSyzy4QpfN8N7ony6JQinfRKcJo",
  "key10": "28onRBLxAb8spaf6CVqy3FZbz27GSFkh76woLV3jVaA2nLTZDMjHxA9vPQhHQhtULcVXfwPVingnWPDK188CjLZF",
  "key11": "2CV4qRgRRQVoHG84Ge7ED8zkQ3CguXwhYoStxvc5dv9dNWBaeePaGMMoS3m8uNmY5uHAxmiigzCKXYEM3hrLNVJ9",
  "key12": "5a9phySKMLbGoCRjqdUuCSQUrbyQWcQpeAzWn7XPTncGiNS4wEjkBVZS5DxtMsdi3PZYexN2ps4gbsopZhiq8Ea",
  "key13": "5qjUFGx4emXi2gSiKnvSxaqPcrhhxwJHYE2NoMsMd7XLoANLSV64gSG1NQvQGZfkZLfUv2FiGoCcBdGkBtozojMR",
  "key14": "4LoNYePqtwNL4A7oZN9SoBM2af2PtPgFARXQR12ds4SXbLmuv5YUBaXT1xqLtgokeaVbq7wwxjHpnptLhmNA2wVe",
  "key15": "3HNnaV4PAnvEzdLLHGcyQtP5Nykb6QUJHoyj6Hqc84nNY6WmSb1saY7kbDnXbSfiZXRF26kTKiQPoEFYYbzuEUXu",
  "key16": "5qHAz9cscerjdEW7FGLw3XXqrj27dGVtnXGkkWq9G22GZF2Tyhrx4xYpJPNoVzSzGAUJX3em9XFcHVc8LTQXPvnN",
  "key17": "k275WX1nGevgMB8uBULUdV2N6HU5dUodXGQMGCoM2D78XrGdRyGUfZCPcdZJQx7DgNNPfMgHt2LTLifQmq4NJDg",
  "key18": "3LvjAB7xihc3nSdufPhYASbW13AKSDXnHeBNmRrrhShk79JDt77PWA2xWY7CDtTndXdwpb5rJuQX8Ar4Ce65Bpyp",
  "key19": "5PdXnmKKSax5dZbafHBnMjggcezh3W24JBUsyVUqZXcEz77tdTMnUhVrbshFTEvNJncJnCtt5AYm3a1STMcXUBct",
  "key20": "23zAeH1m8SGj84mvq4qDLGFPvkiein9hXFoCLxDLZciter5PMWLh8DEBrNriGZxu35h1xFQa5z85Vb9sjfWgsaio",
  "key21": "5CAqZ6ybhfq5VEVHFuvWnKMZhHe19VZ6axnaUhraiveymUXVNDgB7zwiJ4M2PohPzqM3keYzFGvebqKUDRqnypaB",
  "key22": "3hN5eZtJZmxDSWWUTToX8duR7qqLChfJ6A1fAhPdMJmGP2prqZQG2QuAGDR8wZsCPQiv1DYVb7PtnyLaGo5KGB1y",
  "key23": "4bxzEDqPDefSKKdZ1tDiRfhvAJmPGMYDzoGxWPCfKSefh5gsR2YTpf8cVWQULmLxsauaM9zNmX2qFHzoRvQp5u53",
  "key24": "3cVdvpNSjAxXPuvxVBtd18gEMyMUMyKjefotFGtPMW4HYm5meXcKHecYTbxY9RhCUrMC3FRwAc94NhoEZB3WXcaX",
  "key25": "t1Rdmc43fw6TEVaGnuCEaRG7K2KKmWohnBhTcgyWYT4ZXxGgFZMzYy5Ykv7QnYoNjGAcVaj3jVPAfK51u2KPr4o",
  "key26": "ebC3QDtPYez1jwA8TPYrr22jhUqQDVkTjZYT7doYdWnZibxSq5thAofdGM5UEgW25cCzpRgwndGVqSDWT7tnq9z",
  "key27": "ShWeqDV3KBi9FDJLGbQvrSPJrCJsfNVkW4sp6MELdMUSTqZaKcEUaTszB7Hwgqujjw8BQXeoB919xxVvMw5vdpY",
  "key28": "4fcLjphzW8V9fBGEYF9EgGg8Qjncd1Et9mvT1hoFvq8Ur8NJ3cAgoP6YRUvcnEY97nyDRDXtaeMg4RUPFwMiDdfw",
  "key29": "5Arw14qVPM9bDNpiNNVigM2q8WD2Mry8v4RUXoWDzMeC1fgvowGrqzb4w545fKuc7QngoXxhNKKATGZf3QKVRHsd",
  "key30": "2dmcB7KvxZbW6xsMYfEUMMuaxryZBpC4qXvGATjzKHtCftdCL1Pw7RrovTQXq5AhmMR48yCC4rpQCyJsdqLSYGFu",
  "key31": "4ysfjRAZNgw3aMhZoN27Uv7jmREErNrxrVcBJLLJXjUY55ayMYrrmPZEze6RScQBQ2nmeZY2dpqrRB3WNuu7zMhp",
  "key32": "5x2xECf9T7mBWo6eyjDCq8cEYavViiSzdKsEQ3PQ33FsGmtGthuEw7yfhi9BH2fKH57ru1GD8KXZPAH7XRdxrt6p",
  "key33": "2Lwq2JSyguqk574NBoL8h3AHpkbD3efjoNWNkDGrgCp4n5ByqoHaLQbUBSKhjbG5QFuJWutEnm7rTUEesfA6Cuju",
  "key34": "2GUpAWNxnBDrnHtnDrTuJ9q6wbkhdidFQ4miZLnmB1zrYoUMvLZ57ZPnZuVwnhYGjrPLCxCMZaVfcXULbr7Ne9X5"
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

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
    "32wuHq2ijgoaSGwX2ekDse151YD81dEP3YeqDJJDRKvfau2uQVrB1FVvkvLusaX9N9QJx3Tr1WQ4b5LpWXbeJVuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wn8Kq6o8evsc7CNVPxuAoa6ogQHxFe44xBurSS5RkkmLrCMFJtBT7HWK7X5v96jqFGqQKrKDkkToBVgabif52vH",
  "key1": "3su12f3ZZd3iGdYraVdtQuYy18jwHv8j62ZkdJy7zgsH93btHHXGk8zNRDz2odUa6rieYALnFzQRjFmxmW3XS3qK",
  "key2": "3mNJKM1G6YQgVfZ9TiALh1B2jXq8vgBmameSf4GUxAMcz2r4ABzEihkVytWkE9CuDiZCGajVuEttieNj23A3qkXG",
  "key3": "27gBSYMtGwzw5M8XwLH7UWk8cTSvbvsNoWjBruFW2o2P4rPgvt97hQeZjQjoMGGrsR4SwUXqjPJd3cePHa61V9q9",
  "key4": "4Vsmzsvp6s4SbtQgLqPYRQdGd61TtASKYTXtPtZmVpByEbceGkeWzFPYF1dZmxDM4R5Bard2tE5MRejDTeYVxNHk",
  "key5": "3PQBQLU5DLKn9bWNuyyqnycAcAF79VjLBCw4FEKH16cTFWitCgM66BR9cWZHnikPLXpYR5nZFNAk3qWULAEi8tP1",
  "key6": "VYFWe8LU3hVjcMWLvi6WPjhD3RNDEzPk83c5AXbAtU1dLPitw31g7iZtLpTTofQLBoBrB41zDKXxezQ8Lpv7U4t",
  "key7": "4oeRA2r6xiURqXHmsB3jgEac1bdzRcTXUVQEoVF7RJggfgYdCSzi26XAfEKKx96cucvDEZBfUeotHrpHYhD6cKNL",
  "key8": "28osepwijv64nikrmzAkTnb1qQvnCmgfdrjs2skm7xQ8mkUku2JJwvh39Kp7YtcpG5d7BCxRif45Kum62QTbukLC",
  "key9": "33bPX2De5AQSARtFF4W4KhWpKaN6ZmzqDc5wV5Tzc66uNBgABxQYyTrTRXSrMZNSjDJ3kKPoHvskbyxNy771zZff",
  "key10": "5FLHZGJ8RyqpBZyZynYSDzY6QftHQpr6FauDWWWrJZmzn2JxsqtkmYKRA7KfS8VRZtUGqdQEBkjTgKUKuXV1oyca",
  "key11": "2pggFTKGcPWskoJkRV6Auof6EEhYnyiiz1zNntXEUnRV7mBYPzTauaR4whxncggVD61k7Qy9N32JiP2RYWeX8q4V",
  "key12": "2NLYDFUDMyqUXwrJPJYusUQGkebYQL5BBUoHa4jfprHJE2MmMDGYYZ22tCDHrYsNEwiWiYwguufo7qub6bMLYU3",
  "key13": "JZV1gcs4VXNpGFn3AcU4gLapcGfw3c7ixFmHjNhfaV3iCPKjMAeqbVgy7ZP3fpTzFjTMqtga2dVr5UE3tTf2MPC",
  "key14": "yrL5SZSjWDTrpuwEHprUMbbiDgcque41WYgU7TMKhsk6bHguQWWkKBMhzS9huZrD7DwXUTXNtAmj58pYBWCoA6k",
  "key15": "3wEtoz59fxrJYQ61JYAarMn3VHNv6Q674TnZiuhH5SDact28h7v5695rcjAATu4JZXed9zxgNbjDQyF77GpbduMT",
  "key16": "3a2ZDy2kLv75V82drfCMK8KEr879dJVZ9QSurSezsDhL4QQkEwdeQEZEhHBBW13Jipf1eLGvqjsFeXBEP4b1apqr",
  "key17": "33JjP4NaqgSrcEd9WBT9Gc3XRBQNJXFcJvFhVmuYAw7kWRu8nBH6H36PdWeCufzWajtrMttGDNxA9Ym7jfV59rtF",
  "key18": "48dT1xKJK4rzvWQSJcpqSC7TXFunEBtLrpKaG1LcauLzMmydYWtHfeRScT66pHf8zSHJcprQJyKHy4uuChzFHvL3",
  "key19": "3UQqAHAKpb1sPe1wxQn17MPx7Ds7WXhpHrSwfygd4cSXD9wB8UTdaTQRUzPDWmg6rg7no3ZqwZ681y9Jsbxjm92U",
  "key20": "5iBNYD859mzd3GLhQZB3Lr5tHhmeKt7ub9QuCuVaNFLUrgMG2LZ5BrFzde3g8Vt6wRXqZg2pGgS71RVUPuTehjc4",
  "key21": "4YRz2cRasguQuHRJn4fJXZtejK1c8v6HpJ9c16dtTwDuL1kGVQYH3DKwacsJYFSVay9UnNL5fdEP14APe95FDwmN",
  "key22": "2LDznQ9PoNxDcGqB8KYyubUd8eznDjPpcjsuwuHsv8Snxrj4z4RVikCMbc3LYnGovq8j2C2q5uMcXXYzJrTSYrVY",
  "key23": "4A37J7nhXS5Rb5xb3VWPyWnj4vMtg7yLQhd8WSpLnNqEU6bvZnTybLHJWq8GGkjJiVKJAXFTQanwUbFScMUKfPeM",
  "key24": "4M4noRse2sZKUenxgNWipMKPZGwLL4p1qvAoXgDRcbZmFA9Jdx6ZkPtsoF7UNGeyWFmFbw5iExWkebh1n4fJLQ6Z",
  "key25": "2UoNGFbadfpffFWhuNZ2bvzPFjDhBt6hvnvbG3Wdw1XdAEbhn34QjZdYe3tPXWZJZsqYrXUFZsrXZYTK4quVVm52",
  "key26": "45gz1vQ1dw5tivaXuKBDF5wK2EGEcdSQ4sqJXJDadNnAGizFvQmhcAHcsPbz2S7xewRNE3RGUTEk8y5ftYa4yysa",
  "key27": "aeeBKRGSBDtPawh7JUh8EcVhEXdTkGK1t45rqNm7wK39ETjUnvT25WmNk6GBYM8EZvA73zNx9hZmYsNZrFjVozt",
  "key28": "Ae41dJP7cm1E3o2EJwT5wFf2EakYTJVT3WMFghrxRVr2VuL84y2jybZGmFapbYQaEvqzBrwJGq2JUxGxSBqRg3d",
  "key29": "2fxVnUftDHHu8MHiqHVm91m6omd3SrXkK79eSGWs5DfpKLzGoPMnwkyYb3Fm7LwDmUMcPR6AaPvgSY6Vya2VwgbX",
  "key30": "2sfw3u892dt4qyQjYfeZMzeCacEBzgPfNxCg7dh2fqPzC9myxfoaeDS7u2ho8G4YJ8mHpw1Qp9F9A2oxWbX2c4Uv",
  "key31": "5H5LEZAq3tzuHYJZXZ1xhdFVrjm63ArJcK6FMCtSLiZQvqDaNYSvX34WrtLiTEUUWn81L7V7Ew8oz4sstN16GSGj",
  "key32": "34WMa3LHq2nLPhLTnGJMWPJ6oYhpkLw4usQ99T7Z1W7rLT1zgBaiCyxen4sH2QEn6Q3xyJyK2gbAymvbiwh8uzVW",
  "key33": "5sXBRD7v8CiZPyW6WAeb5kmmFFtxGgCk8RXDJM434h4AZ8HSuuefPSwqmssqCVMhyG3xugzpBnjadbJsojVS8e8A",
  "key34": "5wYT2mNTvUh2Qbvd7HkcJJiS16ZR1QugBmeWNE8HcMw5mNCcDedBF8q4uSJWh9auEMnzVSEYnjFPZHhKNBnTkRwK",
  "key35": "5t8XAP9NNEPCcAugqMgQAXR1XVwxo6MP22cN84VJCdfFCdYxkHfwBS7ESgkrzcxoFgx87qdL1mKd9YqcNPF9NAmY",
  "key36": "2GcAncBeWzSsjaHSpqMTB4nFAoWb2eZoJMoFjgoeoj7FevzE5n5XXcqBNSbfj6V1dRPTiDtU3tR3dyFF9hyyc2qH",
  "key37": "5wYQrchHNJXYYK4qnwY6s5UkxfHHyHk94nqCPwKJBKrhyjefwa68QLe1h8mAB6Esktuo29mTWw65SDXCcKZdhJFV"
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

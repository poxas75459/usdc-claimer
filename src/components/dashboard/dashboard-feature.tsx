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
    "4eGjyVsYb5Xg4ACpz1bAT9uMxSBb3KwZ82aFqdyrH9fPB1JTrnrUPvDKr4fHXkMXb1UemSMrV1hY1aCq8RscBrEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9Yr4q6YRTZ6sRibdzcKCaNbBhCYryK7udr1GDCsWs8yA5vMSCk6tHF4U7ZDT7mJwDHZMWEtgfz59Ysy3C3hDnv",
  "key1": "5eTr1SG26orZeYqKDmEQbHws71rGQJLnSSduEQDxNKmckuaABo4D59ZY9YSx4uaGWhXKvfiT57yNjt24RS3YewNH",
  "key2": "FF1Za354S2jdoDy3fNRyajqsG2sGn5Bxrswc3h5BGw75kUUhBSajuZ8qLeCUtPU8PPNjPWQzjtcKq89xMkAdK6n",
  "key3": "43wEpdZB3MKFhwuy2GECAGEBCbQL67MPcZR21PWzXunKrAaujeBcNWY6NC1RHMxAFLC8Ud63VP6hHnDPWEsiKKB6",
  "key4": "4M69AXs1TFjFTGmJ7qb2jHdPEbiLyC6VhEYS4mBnomUzRrH6jDz8qiYFhBe3r9ZpAvu1oXZwjufmLauiDAELstAt",
  "key5": "2Mpq1c9ur6wRoLaYaFcUcx8B2tgw2eYZnh3JirxueuUfx4jdENHuxaTJDBpyYBh83jUQn6FG3ZsnDo4dRVWieUDN",
  "key6": "3wkTN1Ate2pHHjT7zu1L6iUHbPjbxZEhqGR3THmuh8HDGQbvHXJiPhJj4c7zuyD5s88VcSNacFcjEXNLKZqkeST2",
  "key7": "3tFBqjSDeX22u4EZbb7QdCxPMzmd16CXXsX6ZaGyQzfr5UxTw85BEKKUtSA3K8wTCMJEFBAA6rfstVDgpiavAamy",
  "key8": "L4gb6V5vRN3opXQfH4zbW39xFstfDcoxToxgvwcm1MDL1JxbSdENFyjGEjXviWHsgZvXauAGautHzFU5agZExqE",
  "key9": "5rF8icXE6BNZa5R4unZLJX4SGu6Eg3WBs9rMVhwpq9mYicGcsGN4AwqpPbsXXmZr1HbUHZGUYpgJbCbJ1iT4BBLK",
  "key10": "5avBhtofCu5ThXjwsYCSHGAj6XxHbY2RTBvoUDUxQNk4mCqLJqg3K78U9M73jPF47VzYhjSgoVWpcSqrDnZ3renq",
  "key11": "54j5svFrEtUjWcpXW4L65qBRXimw3v5QZrhwgd9TnxxZsDEsWECV9JL1S6qBdLQSRN1Kc8xYGLtg7KDKECLR4HBk",
  "key12": "ZLhfZdPJQUAPdfJ3RuRJHBSo6MGsvJeqqug54Nc2eHVbwj7n9FkrknsChGCDXY55dAkfRjVxMY6QupaJAJ6Ey2i",
  "key13": "2eqNLB9Zi4Lx6ovwtahdqnFXdm7Js3snvbxRZdkt4trMymNMRg6WZQdrfGjCvXrD4tPk1DZxbz4Dy4wCSA85iXbR",
  "key14": "DzYkByy64rzzYguf3r4ErP7fXceKAULWbeGdZGmnDSVdTWYojNdfghnvBW2F7bzrN7S8sN1jvUbpxyggRGsUbJh",
  "key15": "26WbxbkS8WdMkE7kBgoVp5ZRzJHu9gqJCS2KsGYnZp1y71ggK4pKGzWxHfJGaKf4yKTXH8NmwTe9suyr11hev5yS",
  "key16": "2TLC1Pq31tkExzEjCyphTzqA3M2W1NAubMTwA2vNm3r2XHGmjWyUMLf5rX69EdtbgFXAkZFymv4eeVvmb651NxbT",
  "key17": "5DB8fh9HZiq2izTL8ng2PRB5P3faQnwr7FBJMe61mbmL7SEq6UPdV2QFch8kaLNE7q6t4zGqf9jzbLUhziBbfUaz",
  "key18": "5zS9hy9FnzqWiKquFvgWzzSxBLDmecD6SXh5r8KfLGb5P4hKeTLjjkkciTfDzN6aADNhbdEkZS2iBZKxHrQvejaP",
  "key19": "i1o17bQgFZ8FSMmZ3MV2PthFHc2AaZdXuu4fdR57zCfaCB4HzVyQYZog9VuNgrU5yLTJpvCQXPsPXySC6g8j2w3",
  "key20": "3ZMV2ntYMp6E9uTwYd5frgGStUqW4SbJYWUBHjujMwZPqqmYFVZs5sE79P7zM2GAMEHUJWTuuiprDfy7e1GA41Rv",
  "key21": "5w7HpzFxBTyUK8LtyXNghrzonV9FnXak83Xakd14pUoFctNNgfvj9r4oXG2n8iA1HbDTJSeaxWuyozAsNLBJYPFH",
  "key22": "2bUcVppvzJh1XnkHG2y63m4whDys8EoHHhVS6AQG2veAtHtHNF2nzfeopd9DfU9C47T1STtn2htnwooqnKcwNVN",
  "key23": "5CPZxXnYJdzD9br1rGHFfyJd6FyiKzCn8cdvLPNRMwUsMqGKBueQXFoTyEPVfYmGscJrGPNaK2FhymXtp5197wjo",
  "key24": "uxZe4ifNym2dewagrgZVA4MWJk4MwcYMGLmpxfYGeVJn1yhRDWUFg65x9g7PatAxFsErjswQtPZYQfgHrSh22mP",
  "key25": "3qTcrZUnwicG63w27tUkoXs1hdYqx7c3iU1qfGdwG6Cbo3MRdiV2EGaBAL2EPgjyVMWCQcNphbTQsAAqr7NZpjWy",
  "key26": "DKVfHHmEFtYEFLFZntEFbcJ6h9CMgyjXreJeSmbBAdvbtH9PeurfDdUEzqQCAHsdkhX6Q7u8AmU4jnT2sPYN5mW",
  "key27": "539ckfugYoidZP7mtebJnyGAKiRXp9eYiRyFu2T7rN7cdNvgRERXXaGQWR9MzCSfKyWXWi8SirmeGzoe8iNLJ6oW",
  "key28": "toypoxoDjmr7g9Cvv6qantHau8dj79oHN4t2BgrFQyNRztc5SzVs3wsnqBZJmYfbxQzStdv2vyiB2tUydgmLKCf",
  "key29": "2Te9VKtEad5mQwe4dnYASEWtucUNAzDH2FSVrTiqnKWDjJBZMmzdthyQHkS4gCd9TJhvcvkr674TDwai5X8ccmQw",
  "key30": "2SfU522aRHMzHH5EhqnLQKWGakZDM2hnDiYpDnfc8bjcmMREkEtH9egbC9KN6wmRdN1cyjzfxU9mtTdEgD8qna5T",
  "key31": "SKHntH4xE35dJXpAzhd74GvtPM7yRpA14EShWzhrwBU3zFfThApFFSeHUUGixjtNxTCb5NNjxojDSvqkgJgkgnJ",
  "key32": "2KdzAyjU61DXuBfnxxadQ3UXUPMZUdaRU3Nmj9yxLx6YfaMCCXgxNnofKJb4d3TDJhF6ekj62QF2WPdVqw2yLvJt",
  "key33": "4VsubvoNSn3m8dQxxbwuNWeUT7WZQJiX9XWfwHZvGhucVGqrXvjNwRvCggbLixFeeqZmHhaDmBXKWK4E2gVcDSGH",
  "key34": "LuwwMt4feLt3Ho91Y4tLm8XrLcFq5ySsAF34SZPUktPTP8V4awbkryrWXLRjdZ4E16AtzpBh9zGYwvJwTFqDsNk",
  "key35": "2zq8cSFanW5Hoy4WjoLiBz73fvJdvemsCewUGBhmYhoVG7vgp16SY5QBJyTi5wTBUEwAhPLJZjoEEdyNBHkCkd8n",
  "key36": "5GkkaSdbXP4FcyUABYUzgduUFvBpRvutThdfJ6bGn8yA9k8kAz4R1SFS4crrvxicLsPNKwCswVshjNUpZByRJAfi",
  "key37": "5F93Sp4w7iztWVwpiyuCbCxGNV65TaSDxbDD5SxvYQsDY9ffqLYbHWuBSd1KFGZtqn2seakE9iKeDbLaNP2QGu6U",
  "key38": "22MPkPt4VgPH7c8R1BVHmJqzHb3rse4QoQ2q98APPEdVqdYv9kc2wbwpfsyyWGnatxL1G31tcBVamSA47QCw1Zqm",
  "key39": "4sBQhSnqSFWcFhx77kW2zuF8ErX5acZr98RKQyvteKQj93FWRaNgMvFzWUwWEkr3nqXyGmhX8Rd2hRcJ1DTVZGD1",
  "key40": "3U8f857fVwrNiCWWVV4tXpTNLn4Hg4k35Da66EzjcUCXHFjHinbPhASnxRS9Sttx2E9JhKpa2GBTaB368w93zYjN",
  "key41": "tTPYjdNxLNTnNzeFJaTQX7wriMTsvafZXazAJVyrmP1ewhBiJKkfu1NTbYWYbKQxHZ1WoUjcR9ku9yg6CtCBsWN",
  "key42": "3Xyxa2CduwhKBn56mW3QhVP2aefeGPLb9cSKe3x523mdVPoQHgTgN4CAN1njWra7D8fLb15UxYmFS7oLYUsXFFoS"
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

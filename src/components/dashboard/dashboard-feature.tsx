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
    "4FKufUaHCohnG1LZ3qjZ6y47t44CmbLHnpoD9oTCP5n1kgPKbXhpzBWuhFYBd47cVQttxkMgyeQGCiYjUpQ2FHo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QCgCh6yWL2K9Fci3Q8p2nPtWSJHZSYWCup5oWLyzibJnxcp8zh6jnXrttUtw8rbDsB7889y46VYsa4ygaW29U94",
  "key1": "sM45SnFmKrHArzwfgvhMFJGV1STtsRZgvT9YYpo3qXHAqXMRHDDYeUKcC3ipnfPkfTJJE1MPjmHZV77cfLZwH6M",
  "key2": "HUrv2AKYtHpoJcoEamYQxPtb9ctHfyeQz6WopyjRZfoEYTYFgDF3ywvnMhqEuUcGh6VW3To6znN6o1iYJFaHaLC",
  "key3": "3CMsbmbzoMGAsb4WWwvr2vgM3yxDt7vCUstSGU9LhHDx2czF877PBYVp7y6oeKetpgt9erkGReqh1jNLqwVVpjy8",
  "key4": "5642cnbfx5uDpDHYpnGpBq4ewdkqJBPQKvrC5PQ1m6NU6eCzCukQwLkQfapc8fKqioUQQvKdC4bhkLw79tEc4Qy6",
  "key5": "333RKb1tM8fQat7S9QoRQuiKha23e827EjxrwNefCeEMnEjf445YXaThCgT57mf3aByEuE6TCPEhQY9jPL9cXXZk",
  "key6": "4P3kURZ8tVqsXAAodstrzT9ysYednDszLNd3qiM7apwwUz5LLPtAvnCRw3vxk1eLj5TMUscELc97JKpmXNSw4HHw",
  "key7": "5iQazJxpAWeZ55kB1y7za99k9PFbMS9uDHnmcC3yeaqg5ziACoFMprfKcQn8qSgBtvdyut1DArazBHCdCJatmLp8",
  "key8": "4SqGGPveZjFdbN4y3Ypuc4A9yd3QJ4dKnftjApvM4EYujVqqGFETwQdNZ15jevM3pFKhjezdLtHzVdG95LEUjM9G",
  "key9": "5GSdD6VZ3RU85yqnPx7RKjP4xTue3HeDSxTNMJsBvghUfJ1566tBbGwo9yRyJ3E8KGonhPx4vubMUmMrJLpuN18n",
  "key10": "4AEot3tYWuMtPs4NdrtAgqWALzfUHpyFT3tfGnXKCzGEyC3KHizahFYBDFxCzGrv37Yqag1dWoASR1TaZ2SoHErR",
  "key11": "2E2asDmn646wHdpHQTFnfDcsMvo1XxvVzzGHNLTQQg9Vcxo9LLbsxjH1s17a3rZMbVEqJirnheTKmxsfU1WyTVBe",
  "key12": "2Pp6PY2DwSBBUgrbcbnPsqvaf5agRhYg5uaBRSBx35fGdugFEX2YzdRbFntoTUh9E9PxbnpL9aHGmZzcDE2PcJU6",
  "key13": "vrMC1gmNahTBeBpcXtZ4K4vfF9vpb5ppckAa6eBMwDK8yTptZi17Trh3M3vbgam55uP5HVoJVUdiq2EcYsq3Txy",
  "key14": "4jdrz5svTw9VT2XctyHuRWKhUBWQQFG4z6NKn7UApYjdijMTYJYPQZLn44SnVgA4LLFzjT94gn5u7wVFLMENZ7tH",
  "key15": "2anGqiwEzmbAWCoDspAsyy7GRjbnonuBS9hRLTrDhzrsQ33PSmJLiC4As8fUYGVASFGq3HBceBjiv96VJvyKWcR7",
  "key16": "4bsquacUeitXDZDuFmHY2aqewkCHdhQujvXvwCiHQ4ZkMcbp6PNzaxPX2RDrDguGr7KGK7ZnPJ7GeKFQ9VqQCarc",
  "key17": "37sDY5QwD5airgUGUDkHy4E4YUNQwDEFjUPS2UeX7QygLJz8UE65k6Tfg9sv2QFb9TEtKQqtrKu2HGg1Y1Vj1v58",
  "key18": "3rSiTQwGAUQeRp5PoRSTuYmKanWmCdPS238VYbavc57FhUz5ddUmBBXsopDPNMMSpZHXepyp3HbXULU6cYJjFDu1",
  "key19": "3Rxtw9D3uDHMobEo1pnQbnN9fAyD8ydEYVsWDhBJKsj7mbuh1ziZXqbJxzW6vAPfSyQ3ijYkdfJakYnp5dqf57ML",
  "key20": "3ikf27FBmY5L1Baz6q5NFqUwVKiDkuznQDgKPnkLiojf3vKpvDAXhne5kMoB5x18WTawmQG7USorMUVyWjnjmse5",
  "key21": "2Sd99BC81VtXkkNnFny6eHB3PsFCCWhLCA8sgsQ9nAiTY1CvUsQjEQhnDkAFarDZ7cY6tktWiBW4LW7KM5XsJZwh",
  "key22": "34jWqHb7iuU9YGisFCeJVbSZTBNqvsRDvmHRFs2wyJtKZhLo7Z4PDmXGcvfAKoLkqPNydgUwFuXKpUnPZFhbpPqf",
  "key23": "3u4c3LyXwa8AyD1VgygR2qtXcMkhCEQ73Qr2ce4hm4AQTJwsvRTokgGVBrozvURvERGcSFE9omSXNs3GJvnhjhXz",
  "key24": "4byvzp2D7X3MmFHh1Hh4phQtMgpuWW4qiHU6CxaSH1UkHvDyKCKWiRdkoUmNvNib4BG29vorUUFSj4qe1U8vB6zE",
  "key25": "2iUjDJVdxAAR3pLSpxETE8bgM4crrwcVzT7A1n5yQezVUMMuXCv2wNEULWriYA1MYwQt5wsY1quShMjGmAB2uUes",
  "key26": "Hgo9RYx2WDuFRuXBW4r3HJQzM43uhQ7PGSaCozmWcMZVz9Jhk5K8EtqMwoAYnDeBomQvrkzcPNxC6Q6YbSJVdYc",
  "key27": "5PoTLoY9JTN2jaywke9HDvvp1bKg9tn54jBEypMNZS25V9i2CsJ18DMVhgzPmcKNBFswKTf32is47vz8A53HWYeM"
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

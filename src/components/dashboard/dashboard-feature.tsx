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
    "29NQct66SDxQkcRzYFoA4YVv8CUdJCyNZ8BNHLY59zytoLdrCnoe9oEWkDMPDNBbZzNQ2yxomTYkTHmBUbY3xCF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qYtiRcinnP35j79cKNkKRzyNnroTBmY6Xk1bUUGsW4rqHQXzE2A97jbCqpiv7h1ijpv1PanLPUeLntUVwK46eiB",
  "key1": "4M36iD4HcySG9Z2xikYweLRF3wQFXjPpAHuzvjBxusA6xJQkEcFXTUc18G3JqDgQajv8Gj6LNj31UNnqBHbS3hti",
  "key2": "5yFvkRiyc16T85ZENqbpT7imaq8XDsMxHohWh6yejwv1pP6TFPKMoaYS345RuQwYhxXv39tYaVgXT21aEsTe6pK7",
  "key3": "2cEva5kHUqJQyMjMuTBYNLKFm2xesMwx4G53xcS4VdZ6PtGsTkn1tVU3rR52L7ct7V6QX2JoFsD8TuDVDy8srb4j",
  "key4": "3YrqAWeq9T5CxADTVSvc2T35KtNPVY7eY7PxCLNfqawG9LB8LvZ83frH4LXy7aS96iLBGb9nchW5AgUkMkHPcwKa",
  "key5": "46BFzEveKEWcfgyiw4uinXZ43Yq3KCcpyGEiixheSED8uh3ptWCp4T59esLq49HSrfJNT6Rx7qdqMBW8LzNgSjGP",
  "key6": "4Ea2DSUtCqqLceRs8mYKiq3oSCnXkbazz1nbTxSEDNDbMCouLGanckfqfnxUn3aGetmtp1wgXjjLN1HyGjRTwhhW",
  "key7": "5TjavcNLtKDwC6WutomFfyhpKuiRvoMQFGwcUKP2YiWVxCZictbSR6oxjuYE9PmVbRMfgc6eyoCxzcYYy8CVbRS",
  "key8": "4rQMbFC2ocWLzFJYUikHVkRcs3GUymErcnsEruj1UiAgX46uqo8UZHCWBSictQuXyo3LF2npWq3SYwhXWc4Cb4A7",
  "key9": "2TG4aSbATyCbCjRny9n7tYJuU6f2uGPJzY7dgJe8RsZEj9DgL1vdJQjj1f5D8KLgNqC2JDzbXuVsR3hvqVZ1sLgF",
  "key10": "5k3CRqM4ky3E9PQT3L8yDkxgsBJD85J17HfBiesKDPWeiG46AQXwnA4ot5dQqG1RSdmGphz9bXiLYommRAejzNye",
  "key11": "5FLreTUnYhKdvscYnAUVsK7BU6kFn2NbbgiGdedVXepUhtd9dgpig6pUxFznnSzT1stjySVdJ4kq3PzYMrdXaYT8",
  "key12": "2HKYEFNA7hau7ZtwJujURtLdqPQ6PddTHwbSYvpAupffwRwGSUNqu2CTxNjBDmhstB4cxujAoJ39zrBxdZF28fU5",
  "key13": "4GUC3RDLGJerU7oH8g38DN4tjihqXNLo9gcAKMLip6YEAZVNhXnDiSEZJ9KRS2n1PibMcwuksamhhYqrYDgra6L1",
  "key14": "4JTFt1sazXzhhTwH7skBghJe3skLVgn4WyuC2jGeaoewoxtSfEpJNUcEQpRMtHeW2hLTp1rdkGnWnTsd7MuNFE1S",
  "key15": "5uiXGTatw558ybpD9e2yvtux76ERTC2QLENzLgWoZkhC9R8Tr4GokiXNn2junsv19naF8CtiwuT9NYXaCx8xztJf",
  "key16": "5dvpoMCrNdmMjUBY9Jp9qR85WPY7hjoiZW4LbTZzXeGKn5usDfD2trhw423GuEHmqdaRnHfuvHSCQtuzHw43VTXn",
  "key17": "2BayscxHLMocVm19VDZd9pLAxTJQEn4EKMtPnvJz9N3BWbT3NVVeML4TFGxh1qjpJQ89tTmbBPQNEWrTm3gvgiQH",
  "key18": "2VU67YETG3ReretDoyAPYS4PvPsfLLbjaJjDeSz8wFJ78dEmX8yRohUttiBAC88EpzPWJFBpjg77WojXQen9JaQQ",
  "key19": "5ijBg7Ts17jbiLQootTpduwH3opPwo3ZiXWKZhHUXE8wNDYsArsYKP6PKrN5fAEKKNK6zTt2axWNREqX3XNV4BWf",
  "key20": "4G1Vc1EpbKr8zmCTNrAaRaXpTarFF3MZZy1LhjJVSnbTx7xYBo3m1Knfz3RsvpHkxj11v5t2SmH4sWtG5JuNfDvk",
  "key21": "47esu3u7whC4sFdaoAdSz1uENEowKWdJtq8HKD16dmLFiFxJMmyy1S1cte9tURJT89oUH6geGbopVRUxLiDc7rxf",
  "key22": "3WCy8gSBvbv2HPahyyhyj5wuafXx5WYnmHwh2betzyz3RZivJsU5xgeAvX4xEMfemj7PauzdEcew58edQ4AW7p9q",
  "key23": "2obhrcGmvU3pzDuC6vMErF6M4hSWrUvbnw4wuJ3skXqVNNHKroTGynK3o5ffAafbforo9pWNP6GWZWnJKawTVTYD",
  "key24": "63Wbn293vPEwNJtDfaosqMXMmafyqQfSn9fuvTccvDy8wPP4VgE54MB1EvTAS8jPZwSHuwkMaXvR7rDF3YCXeUib",
  "key25": "NJ9HsR4gtPUA1NBdxUPGpHdW3qxq9Q4vTzH18wpUaGMjYwATJ2dHNYvazi8svX114ZQSB81Z1gwoP538o2PdEsT",
  "key26": "WtxVoNF9nfsFq1egRxFftgvYkkxRDfqVGkH6VMEy6c7aVVRYbCbrk7CJ3PjhAbwUCoJ4bNuPjKprQT7SnfrkJ6P",
  "key27": "3dd9eoaqD1ec2mKw62d7rftUrNZv8f6pRDiTeXXQfChepUHejxR4CkJ5JYzvngw9zas19n14sCV97Hw9kFgCowb",
  "key28": "uq3SmaEGcJGtQTaCmhpY7ebLN9y5w31KsgA7NSFh6nvbfQSRvmD2xFK3KgmUntcQXKY3P85qY1cqpusJP6ibpxo",
  "key29": "5jyYBGcSqGYYyXLK1nQaQz3g4fiqLNLGWxPpb4ZD9MxnVBDAjnp1G8Lh99odxJb9brezxsRBhFUrR2nWjArfzGG",
  "key30": "X1bcxk7DQZP6ZJmkHDoHVpDJKWjrfR7AgoHy3w77dMQAbuSrqL88TDpjjsotrgkmr7ZNburRsPUyNDkranBFgxw",
  "key31": "2QkVFAqKqQdwyVTpMS85pNTFwLUa1zP7emhgR2iWhufAsCDrifqHYicUk9spUuod9ghMLZETQKzm42iCoisBzb1W",
  "key32": "2CmTKvULGLTrh3STVg6Tu9E6HLvwaddAAUtb7K3eaJJci9uYf9Bn762srUT98NAofDoRXxtFKcU8vEaNuktfTYJe",
  "key33": "2x7T1FPNnMLoU7Z3Ykk14pB2GwUKpJcRMAjDA1sMK4Nmtj7YcYeERApVoYRhoY96CyTg3QDhDnWXsy5DdTkkyBph",
  "key34": "2QKCkRGk3Q2TT8Uf6RsJkZVTCjgEJ6P6DNpQp9nYCopDjZWP6iFY27bvjbSEQnfdfU9bHXbfxTtkJ7WNMU1SodUu",
  "key35": "2hkHR5A7UbgJJ6r3KMRBuBvsxQQCeZWJySybYM3Qpkf65QX3McoY8yVdTM3rvvdombg4aPmBtkujV5eXuM2VBwXY",
  "key36": "4bku96mVkWqNQs5FR93tX8RSJmHMb65Gj1Ktua1p87xEFG63zPhE2MYgBiatY5KKHQEVZMumRw5Eja2bjRrKK3UL",
  "key37": "tewn3ZHgpnqnyDdkErUgzoAdTN23Vy6xJaZE4PJkUBDjHWdgpkxbKzzgd7pmUuV4HQfrx45pFSGUjNYrzoDHFM8"
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

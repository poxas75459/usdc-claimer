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
    "671XhaS7BdkJY2wZ2y4wwpnyJxcDQeqzYGQ3hwiPRKy5AUprM4vr7pC1DcYANKJQLKf79bsSwPU8Dk8QPWnikvKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eikaM985B2peF4rXdUTnhNHt6NmeTRAdNwcoLCKvpKjkN3BCnr1X9BovgU6dajLF4EeccvpZHxmhvLHzNpAtMya",
  "key1": "25LdYvfKbeFtL3e6xYfEYbffqd8Sv6iLtoRWNbSBRnHChxMgAiaZqL2cArYCdy3LpbrPzxhV1pgMJHwdw4pHzfbP",
  "key2": "5fhAajnnpwWB8v9tT4QkNmjbspiC5m2SJaHsuEoDJBidBLnaCXJPieVZ2zdkt5NN46yZNfqiSqqeFDbsjvSUhGuQ",
  "key3": "2PwnU9y95Q4ZheZgjzXT9TZvWV9HnfjundZ9Wv2CWJtFSDwwiNgWeJQiTuThwG8QJcNatwwKpqY2fpnr4CUAvGuy",
  "key4": "3KBidm3jxtAGh7jkxFogzQn3WYLCMVsRd8p4nqFdWuSknzhNmvk2sXH1PwuuHxD86gCeZg5yi66AQNDoNC43RvXt",
  "key5": "Rc9PvDDAP5FhPnNKhJH9Y7xEX4mj22EEQnA9nPUokcGbtoqjCADFMP7MKw46e3TBgESyEcuT3QVoFPPjLUkFo7v",
  "key6": "4CxLXnQLGtQVShPDYbrpXKLyiFfaL6ZPRi5Zogf1dSGnvU6ziEtcRCahgMR6d87wUAhDCfEM91a2NrVtZhuqPZH7",
  "key7": "2jxoH47f3nwNHsD5JEdyuXjjLJzyn3GaU7QCC5cdP9iyiiybMeBE9Hxagx4zy4ndn35cQV7yBJ3aBgiynSkMX8zv",
  "key8": "3a8AaRdEwLLwfKcgyr1dZjHWYyzXCh6gDcg2mW2dBkyEwN6zLP2YpLFoA7Skc7efK6ZGUfkFtpKNvxRdVNWCxoUZ",
  "key9": "DKEzYw62vKoVg5NQ8M3co17mpbVK9e1ejpBJokXCcwRPA9QLVYtLT1PPCMxtqi1fRuJUepKB84nHm6tKWjpzbQG",
  "key10": "3sQtKR2Si33CuT6f9yi7qvEsB6YKiosSDGWKaED1BKfGrMVnyb1t1KqvBKZZW6rQyfZcKW9gy8ghc1VFGq9wzqyH",
  "key11": "5Z3HLGQ1o5NuMHampCnUZrK5HVsvcw8qR2pH9u41LWC1vatS6QUMhWLa2CzffMtZBYoowvo3qCYJyWJhAcbLF5LH",
  "key12": "3Uv9XiobwKztmX8uVqiTaXeskoBJXECAj5DzaNPHff1sSC1KWgZ9k4Lz3h9TZijoV6Cr9y8s5uteUygvyoAZ1dc2",
  "key13": "4RfPhQrapgLc8LSfRonPeUqBediyUqs3svFzf3F2xS2QoMHTsToSva26LV38AkxP63AX9UY8FwUsGEoMc6J6hcyq",
  "key14": "2R4AeH7CFJySeWs3E59kHwdzx1ptyTA6sAvkPtjsDMWgKJtuhxAVdJieuioUFnfpoxYV3RBNsV5GUSufbZ7Td7BH",
  "key15": "4K1ZiJRmQFE1b666Mm1mVqheAoyJBXTZ7Nnckdg31Q6Z1VpKju1FMgbgd2Ja2yQPVHA9mSrQrr8RWDHuMNnFziBc",
  "key16": "2XmLBWN51j1UxLEPVQEBMofSzkKgSL6cjwJ2RZPS8iCozQRMQwjzmhvTY23PjxFwiizWiHTfGmGGuQZprSUgwh2E",
  "key17": "5JiX9JFCJUgmFxzGKNM2yCESgVzPfaYwdmm1rRqAufEcWvq1bL2NQDSFYgcdXRzG4pKPzGQ6MCNmchDwH1iCppds",
  "key18": "2pJya3g96j4eo5p3FL55SVi8HRPSZhfNSB14xde7d5tKTEwy5HHwp6A8aL52G7aRMviiMf4aYaNiQ21xgBCGuiWu",
  "key19": "kGiZ1hY4zGfNM3Ur4JreKm16WyzwinHB1BtBgxLGwoxbZMNnALT7i4FgjMiiFwedTEp6P9xbYRTCP4CY7rf92iZ",
  "key20": "5RRbPeiC9HLW8PvzikVaLbCjf6vc25xBTrDU9PvM6DutuZf7URAAjEB13Mu9HUZnuNVN5LQDWdktb2BobnqSGP1Q",
  "key21": "5aUdZvy5pjrVLiLP35Tb1P7bvHn99D7wUHqbEXNb4hxB1Fi71Sd4yJekFk3riBoBBxiuoKMWnrtAqBaVG3SFX1aH",
  "key22": "kKYNqMhtrfqBVUiyeyqmtj5mK4JcAqHkx212iCDPaUCxuGiQx1kzD2WYdBY88w4YEz93M21CFRVaNuECANmcebU",
  "key23": "31DJR9LvWk9ZE3sN97EhQp2KdSkhutDySyhRZwnp66nh5iQTBRJsHCLFE7cdYaN7vLJcGuXDrtErLwngb7iAiJ7Q",
  "key24": "f5pYD9HRDqjFLYFPV3LBHnGPTEsrz5jkrvAiUrUHSUZmcZdC7tL6wN6x2Rs5o9mwYroejUGeFZQDwJXmguPQypr",
  "key25": "2PqcNGXsFkZEejen8Kgp4DWabBvcSZoxuVpxLvfJpQwM8K3hdcnSCYa4hDhA2tosdoZTTkEEs67uZbfX54XWCgYG",
  "key26": "557iFDRGiWuZDmJwpb7nopqHSwLNbpV6qV3BNEFHQTEEtQcFojmn31yirhgdvMsfWZspfU1P4ZADe3JahJm1jg2Q",
  "key27": "5KZCLsVxdBtuYCcGMetDxMN6mcjjhoAgq5rvmvaqeUjDM3qxgiURcrWn78cVPoPM19kX3xhUdpdNDrLKM2m6KxeE",
  "key28": "5QBFmYEz8LzLuDeLSBdaNAwKhMr7N7Zhgn86fFdyap4SbhEzbp7ip9jyExM75C2yTH3obAMQPYyGMm2QUd7njFV6",
  "key29": "rqiw1E6rMvGuTCvTKoiyf7uDfB5mKiJEwpf7kFH2EgfQnjjLPGxit6yoXK6eNsS4ujAY9zoC6b8MQe1WwxLtxQ9",
  "key30": "2MsLsFQ4qjV8JxaD86wqwEKwWAgVsctmLGrge1nT6UkJvoauHHtndRiYjUZmfTaU1FXisAreEWBcXzs8Fp28Yi8n",
  "key31": "31HKcTxxSVMPtQasoD8HGTokcVDysHEf1gGwTuFBaQxDvMj5G5NzmwafrtDJvyQF4vAKs4HKicKYmuDf1nkiRM9w",
  "key32": "2sDqMnfKVqH3TwQjMhT7Ef9jUVhZkJ2TpnhWom2WSLMjKnguvS2N7YmHt6BcYWa5kM18qWCB77NixPYXJW3nzRrS",
  "key33": "uf3xAJV5TFsGMQ7mVvYbNDKBRS4qM4QRfPdAdfp1o9hEaToRwFQd4cYdZHm6yVbMVBmxzMMPjBRe7LLX5RPnYfU",
  "key34": "2mh8SCcM2aaR59T6HrTDkX5RvhHxyJ2mzNEP4DAVzfj69dtXcCTJy7JvCAKzAsWR9VXN6UzBvddHxHpVCWfy4PZM",
  "key35": "2SuytkmgVLnEDroqejDuYHosFWkQ4rwxvJW7ozMh62RqJYnQ6pCYvYbswHJDdLz12dCrR82kS4zK1jt7Lsj6Hh5C",
  "key36": "4LB7iEHnuQFR8ttU2rfmnKgtiFu7tPJAEeW2G6XEzAGTjQwLC5z2rC112fmSQfWBsN1RVNVyghsDbkH1Ca9MtFjB",
  "key37": "3EGL4SC75YuqDkmRHhhesiXT9cAMR7cncM9WR5hTVDgvyJ4iJZqNsndVMVQut4cEHutXT21nGw9ToLDgvTNAUqVV",
  "key38": "3HW8bZW3Mb7eCZQobF31otEuPJw2JJfkEyy97uXUnaJiBt2oQikW38x6xcH4A1iSuyiGpG2fwqeU8Lq2wpNHe5ZU",
  "key39": "5KJjx1qBaTTqAiZePM8zNRFj6qg3oAUvndcz1ocrdJtybGLCrbhYbQ6bpNc6rk9CH3P3Rif3t73LPhvmiE6pTkm5",
  "key40": "H7Q3HUPzhV5JU8iXGSnzXrWSs5UCNNswwiKaT3PWZgMtKFcQXvzhoX7cCV54V5LvHfVqxie6iHgJCd87mwK9Bt7",
  "key41": "49uNcqBu1sfYx5mvEC5rJNK3m9V568q2rvwYvo785h1zhhJH8nScZLCybBjRbq2jd4tSy85v6xRpY9BaXGtk3jpb",
  "key42": "2c34UkZpvNYcqVDM6LwEFtZvz2FLFQxUx7hCUJJGE5kuhXPmCXGdgAjrqWiLQgwVAPqDbv21m5SUFMp9YQAjga32",
  "key43": "5ts6dBCWhvCU51SkQDSN1VAWCCJZTnMbrJ74doVWaSdP6YSz2WHXqULAZmPnmtYXcKNyFTqdJpb7GkoLSWkXim2L",
  "key44": "2VK73z8KW8BpEzPXhe8HduyiPtUQCRKwmKWbjgpd4WPgpbkrkU24nRTXjp27UJSzFNz4Rip3S7fGxYh5uJdB83dv",
  "key45": "29TSScZQ7BxghXmUhWAbvq4UXFbULCwz93QEUF24TJRWLpSqLxQyunRwfhHzfsgCoset1AmqVJXCi7LoNNk7FUnZ",
  "key46": "39eyBduuj3ffZ4P4ZCsN7LjE3XCakMe8T3b2t2JsABqMN2wWc4rGSUUm7rTvecf3PpqvgDgDrmjc72qiBre5Ureb",
  "key47": "KGia2KyVnbopbboGNXVgcniF3oFijV9egNpjzCbWhgaVjAakfBKBtVTetoPY7sH7dqSGLJNsSf3khmLzWYAHq2G",
  "key48": "23rVnEXjj8XMT8iUGVB757ynpSTLo2ejTJxkudMYPbUbcabD2yAuzFuoK5QW9QzFtFqYMA6UpdzToruw7JprLMrU"
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

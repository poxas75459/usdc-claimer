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
    "3AWv5m9urFdpkofjH26mXhdSDZKc7H5w2MZLHZW2j2VjLqAR5x9bP63GD6JrBUeiRT3nLsVcgrzYdE7t5WXSKe1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8WYKVyCWQth9vMxAVCyvAaHdxohmVmiBHojgAfL8FBuzZUT9qTuZpCEsEgQshzYg3ruQEEE7EsfyDmVaxU8vYc",
  "key1": "5mWKsqrgKKCpCbnYLMGMf2CbVgkw2L7D8NomAzNdTH16yKVAoVYnrr3SDmYBvS2JZV2AEyTdWjfMKiDxPQRCNqaH",
  "key2": "2W8oSMJZzkfPBRpdcE9sjZCsie14dE9sZybSsSHVjTLYGgBGr6MkscUqTRBDuq6FVAqNZ9qkQyjSMG5vCfQCCLdZ",
  "key3": "49psNis1DaVQvaWNN4fBEjQk7VAcNMxCj5BS9pLVEmLVDwUgYP2cvZaiEzE6vhFn96oKhvdXJETJH2StNYnz84Ma",
  "key4": "J9PpfjjDDCxWCsJLED56GtwhhLx1TvdGfdiEXiDS2uWQcjYkxcmuGAgE4aTiHJ3v7Mbci1NVF2voXFWerBJvDmD",
  "key5": "32BvBuPaftXRHdJGC7hXgrx56KY5qxUUUagjjjNvenkaX5ptvd1TsBfm6X3G74U1CiSL5wSM8LEbLmp9QMNmJkVA",
  "key6": "KF5RhdGqY4WpthLC7DDZwdqZjRim9LiMHVFL48mC8djc9xxbcnoxZaZwW5mpWeZSx2ksEeu3WTp3is76mf59F54",
  "key7": "4bFTJB7EJzJDTbvnHLTqk7YsYX8kCDnSGyVfbnJRZP86WW7XZW7hHo7WKwCQJBAWdeoNgd4wXoZ4Se24XJrAE9vV",
  "key8": "3fhrXQJ78xxYvDsQZEkKxa4QJYdREYJ9Uo5Xoyzx2keCjA4JkW1hWRsgVGe1529FLusnY3RrByvdvg8j9zq4nqez",
  "key9": "35QvqUYJy6aJEL6j8pQr9y7WNp4ETR64FqVfsFtnKWYpEMoKe1ufkzd5A4shaSMaGp7c7XgxydHm1bVbwTiSFKie",
  "key10": "5U4piY3QfiTPTnLpoGiLqg7GnvCU8KHhWKumtDwEMS7M6ZN4dvZX3jB9bV277qy6eXrL4T226cASeyZHTxmM4kjc",
  "key11": "axYeMuEJXASd72zKKGezHxygfdiPRE233uGfLfSJsBqff2r22Ybas7mVBuZXvSDeDuzBnnB7MjoALKpswmED5F7",
  "key12": "rrVjKHrvncVJTKfsvTaKJFU9kZCXpTodw4KdBNnSCaYij5z9gCUR1ZbtKr6RG21en5yiotMYFJpFp4CbX3mV7Q2",
  "key13": "4eqgNm6siUoKMZf94B7MpwYXy6y6Ac9X1dctWWcN1anGJMqthfQq4Jktha9vhn4EgmQT16buFbhumCy5BUx2vaKU",
  "key14": "3rAyMuaK5wxcK1L5Bz6V9ZpteY4gQVEMtD3ckYDJ9mqgCzSsemnraQDv1zngYaVAKFEs1PaGrcpNmKxLaMjg78C2",
  "key15": "31PFdSBhzaRQhmqRwNFG6iN5EYpgN6rKenr6LBi6aeL442rCHWmLUwYTVa7h1cKGZsapS63N93AjCEHffoh5dq46",
  "key16": "nrar7LA2yFabRFCeLZNsW7PBrF5s9tKWBEKcnTf8gBDuvWHcco9mzCuptSBGoVRf4tVy766Xtez91QxTN3no1JD",
  "key17": "3YuzuLZNCiVQy15pZDJEH21BEGMZXxhzhAYdvUD11jamF8v2kqPDmXwhGDoNSXhswZVD71cZkkDu8rFHEcDCLq6R",
  "key18": "PA6b7JT2hZ9nRqccPXKPQC5UJavXMQE6a7JhoudP831Gv6QWqbLkHqFBkEL6MPMX7sbPLfTKbuczyd2kwBvv3rq",
  "key19": "7vzsbn55BXWZ26hyhbJYBpBw1BqxvkFJAetffkfNyR4w5ZB8v8TUFZ4vXmwyZZixUdLfRJNgKMKcN4HoGcQtxho",
  "key20": "xGNSsPTibu5WHGNmsbtCtrRy4qsCJWKgZsfMpSeonhBgf2KTDNGPenfaJaKbv3FWCrZxHUeLc7qha9tb5Xnhi5r",
  "key21": "2rMnnsLdBvmXcmvRhNmzhsDH8Xo6TPxTgpDknpHLBphGkqXrP27RW2NbirYGHWffVVghnuntAwLrrMLDTSZGPWLB",
  "key22": "56nRnBCz6xk7thReNXxuYWDDktHopRoog63otDCxCZuUjH1eaQmrR4Zh1MRuwemfZxsSXDbFvzchL8vKBkrzEagT",
  "key23": "4PLwn5k1T6TtZmNUga3FbXE1RipvkbcfxmxzHLJokpaXwpVbUB9mJvdAwdv7DED7PfLe3t1XHCgoMBbbnwRHvfwQ",
  "key24": "3z6BicFXKAMAKjgSWx6kWcNDakZqWXRNUVHiPsATBDg66ogwqVLTaRmbtawxxK1zLHayB3wFYy5u5XjsFP4Nn4UK",
  "key25": "3wn3gZVnMGbzsKbFj86VgbuyonEMx5YRWhSb9ETvt7miHpTD2zTTL6fKf49pza87zq3VbagoXBbdfLxAU8LKPQfV",
  "key26": "2h84igQY8n4gQgvqNjnHrEzHBfPhArircDJ75gJdh8y1k8Gs7sZu4uB5p2sugxVcLJgE2GeiQBY3Ed8LaUD5NjiE",
  "key27": "2B21pD7QnKTSj64vC8AN7fJBDczidAaLHozYwLZAvMSsFxcSKgPnjwW369xDgD84CpN29pGxVCwZyezKz1icEQSp",
  "key28": "57yUBSdYqgSqV6LG9vJQznDHDPAxF83155yX4xmfrnQ7g5a2Pn7QG7d5i2dCyEiEFPTHRcRWtCYTDiKmi8FVde2M",
  "key29": "kFY7YqtZEsxLvs4QPHpp31PEqcXJTkyMWZZZUXW4r1qjcodiTxqGVtwjNjnxsP6QGRwXqSYhKueNtezncH5xRXB",
  "key30": "5nK7mn71mY7UMuRR12S8wX7ULGiJLKUVMmA21yXvNnRHDi7SWkPwsAphEcEWB51d13nTHrtGyNgHZkKNhrZhiUQC",
  "key31": "4N3JZVkiLDF9oDveFMzHXz8QsoCNeVqLwQN4FyxTp2CSDcTd5rz8skfxmZ7hpmU6VYnrzpHp4yp9YyMF76ZcAxR",
  "key32": "3f5n9Z6Z1TJNtaMgbvfhxwKCcKQZveKBQuFLQoqTa73pSjwiyDSfzpWD35A57fbQUiqD8GhXFNXWgdrxs4LDoYNx",
  "key33": "45pGhgWp9v6B3yx2QpFiGSq6e9sBbXN9YB923nrTNz5h1PHVepm41a3pTsnREKGnZVpPSb8KRSJG6oquJrtw8Lz4",
  "key34": "4QzpRHTjNPaAfRtjffumABJ7MBNoGTxar8d9QgB7b7sSKh3t5Aie7ZUbbTtVn6mbb45kCSmDhJZjgX4YXRKr9GQ6",
  "key35": "31KdN5srPUcHXmsmBukusa5oy8uPaqZuuFcbBFb9NrZFXSEWdYeTDZBimNPvU513vh1zs5i3oNAuuVggBYnSVf5S",
  "key36": "4aScy5nAyqgxGLWh9aUY5GZRxoGyLoBgtot61bYQzwBqZhPggE5ssDUtixX18yzUEKLYSzVDaUDoJaagqVApF7Q1",
  "key37": "52ZKjEJ1n9RJpU8PQ74QwWLqNEtYbQqN8yzXfqqMZMuKbfBQAVfx9eUpCFjwEb4NnFnxgsbKwtxaMUuewSx91boC",
  "key38": "55oEZtSgMtbJ72MC6QkXuarUT2NWX5oSxRL2jxfrTGcUtWWD4tiXFaJnzorS6MxMhx7j8joxtTXnYgXUfD2dhC4u",
  "key39": "2WgUDZG9cihyGgxNNHZMQWwxK8SJPD3oskk74ovkVdgJCjuVnees5jjcNbygrVgG3ksTs8AoMvC4cvNzGkqKZyaq",
  "key40": "5mYJHYhzsuakHhqDBaZAp54hkEN9rZN5EUc4pNkrdZYDfrSYdLhyzJK8scX81GXATFF79xWuhMwJp8NrRubGVXEJ",
  "key41": "3JVXHGmNFyJCBUuToqTCHBHfTd91ujqjFLaWK8oM77CTNa4bKkSDZHxLSgrnCtu9NNsYFdfgmxFk7cRzmTAJqrBC",
  "key42": "PV1z22ojSNFSNyHECyrhakozXD3CKAEJByHqfei9rxXjv5CYCnJwbPRVQSH3qTmGt6vgNgks2fQazQ5Ty7CpSMH",
  "key43": "3Cmh2mNKxD5nfm5aHsW9heT45XV13pzjbviNit81u9seFpNJ98A5WvFrBoDQg7YCCtvnfMHXSBLgvPDiH88tBbHY",
  "key44": "4xvA5pFuFExVVKqwuyE4Bre57AUebhCwfXvmDytWUCUfqwJuM8htS2unQnMN8iWXTJp1VFFqhaec8mUpgZaXz4V2"
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

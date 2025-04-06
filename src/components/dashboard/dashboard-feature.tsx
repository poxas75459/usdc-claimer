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
    "1nF7qTnR5JRHHWTwRwJfDtrNCA5dPEsj19BnzQk5DUtQUY8LAXwo9bhxKLD9X2GmEvYe2j5asgoQW4TgGVpoomp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54iS5Lx8KEQfvGHUmntnRPv46ru35xMGJiun67g6mAEZu9qG413Lhdh4DMHLoMdR1YQk1M7ssAH1SdxyGuVJU6qg",
  "key1": "5bW6JK6btSFV7Zz7EPJjUvA6yAx41HPcwiEe1bVNUzqwPT42er5TzjiSqjoCQPbrL5MXSdKMTUwNTnM3vACbEtd4",
  "key2": "3L58UUHZqWdzQDQvcDzaDEKEBdGYq9fbeRRi9CC8H8gpDwfQ1n8j4gyBzxX5EkRv1F2dxf7WpeYKcYpqZ46EVZkU",
  "key3": "3GaskpX45CRtaE4mJyXadBL9XcZoWxgLzxeEy8jUjLWmcQoj5fbcSGEjoKMrW4WBnXgvY34sqjN8uCP2WEz62MMv",
  "key4": "2YUnqTRfi45qpLAg7JR63wwV6e8ZMWu1G3osVa6ysADzPcxS3bdmdFjCEmFEQNGaRNnMc71QnFenbtBMbnX5Aso8",
  "key5": "4xGJGaGd9LdD1gnLJFjTyA6tT5ycp49bjMEMSLfSQnmZdQLscAfZtzREd8Ef3Wq9FH3GoJ2bRHCwCAgnMzS44ZyY",
  "key6": "5wRC1v5zPbB1AQc7QE12oS9ogKBTYiMfcqVTnQKjuDUMk2BEgWpZkK9wFkBL7eSpQYv6m3xio1VTB9LVzqbKMyiV",
  "key7": "i57wSBsrPPprJEQ6CAqNuzvnbed8BZWopCb1aVdheWctJZqr3xMbN27pgsUQ7wsFPtyPrK9YCuh2Lo9X9bmUUoD",
  "key8": "3yoj3j8utHhRkzP9yUkMiZEUkxkbeygddKt75s9usLPp41UaY651E94y1U41NokWse8zdyZzMxtz8XqxWwDuo2JJ",
  "key9": "5KVxDAsvi5KERpszPnfwsc7hbMRUpzuyTHx4acdKnp1pqeF38ixmLCoc79vaSRN8C8yAGtGgMuhnVTaaENe1TEd",
  "key10": "4Q9jAbZquKUr2R6bwR9Sqsy6DpHVzMoisiR2wWiZKoAccvqPYWeRotMYEQP2SGJgLpeyAsRMbQyHW5GaBuyvsAD2",
  "key11": "29sDLNNXBvgysBxUis7ZnPFmYvfbmr4J5trpnE9m7FrFXRTiS9doeu4WMaozrmBWUA4es6R42SSff55cZm1k6kUD",
  "key12": "AswaUUTxcdVSPakZzF6Roj8Vv2JqXwHdSwsJf2iBAKeMs7Q9ZcQU17a69EXsGoZdAGMNhmhN4TwCpCAVGwuFTtF",
  "key13": "5GYgXo1AJBtdHTpDyCWtTUBmnD7FnqJRXkgQc46C7LgzJWCvL3SdqvZuqm7Xjty6begfUxNDFXsQXAQkH2bg69TP",
  "key14": "4k9BswoAmenZh8mNdsgaNg9EQCSnx8DRw6okinsNi5AiAwKBUQigu9u5SiCaEE6hwWSccaUY24R4fj4jPe2ct5Uv",
  "key15": "2bWzX6uWm1jF2KV8M875FdouKyXUnP7hZ4btVZZJgNBgh9Gh7TnDgez55Ff92JyKz6vETFkQEJ8t6SQ8Z74F655w",
  "key16": "Bv5N9dDVictQhN7JiSeh8kSRjVXeEizxf9YV9koS8FhAXyf7P5Q7D2dG2F8gF6dAx9FnZE8w5vUiZVuF7YMqTJU",
  "key17": "2QCqF4bcYsDNBPz7HpzFErmaE8mwgxyzvcT6ofKrLhQYE7KevMK8ZiQb3UNDLPkN7JoDByB5k3EJrgMMDock9N3T",
  "key18": "4qNFiDkqg7KinauqfrRmwbZPzHe2gaWSHBfhBD8zzceQQ44gve5TuUpTuWUc8ooTdeQQPAD57mTB1BKHdDWDugNB",
  "key19": "5j7cvQJzCUXSJFEDAXABxgzWEz3pPHns2VTq7yUhUbukJ5F74GscGEgbefUSH9qNmyM63LxLthyS3p2DXWjkkAJR",
  "key20": "sjqEuY3jAufjKCJVKdQKhhM31vGLRYknM5ogAiqXJTMvD4R7J2rfg6aSnk2RNitZnhCHu1FSgYJ8oc3yRvsLu7a",
  "key21": "42PQSV1tC2S4jrdwePDwFXN6ofuGwvAbXTgiX1vDEetZ1T6rDLGDuLVmPpwrqMDWFWcg4dcFXwjpcVpY3xPeyVjU",
  "key22": "TR6X76UyiqvskAe5J1uAUHu6jyXGpQBWBFHassbTyKUxRXXHNrmVe3ELoCh1qzSuD8bq2mi4UBD3M2MCVN9u53T",
  "key23": "2LfDcMtMiS5qDvm66YWbavDfGuMqnGm7vj84RKE3SU1FqyucwjePTvvuJJArgVyBv4TTHyPZiE5insvkF6xA84HK",
  "key24": "FWQWecbcgYUAmwDxgqWYJF5qmZstJVxXETH3sU4Za1kTkb7qQRLE5Ehz5ZZZQSneaDNZBTTEcbZaKbDtrDjwu6Z",
  "key25": "nSHUzBJuCG8wbVjYk5tqq31rpCbVwbLrLNPyLFruzWa7yjTwCPvuvSLFcmcRKfcdEkmad1nvXd6wPGdDeKvV5ch",
  "key26": "3rYbts5vyFm99QHu47tYVVZB8yHZyyYReUwxdVJ8W5kedVNvxs2m5XTTYa2kRApDvQB5FYeFgYprMWEXx9TszmBy",
  "key27": "2j3JgA1jH5ujAs2hFPnB2tkFD6w7indhzwR13reECt6m6QHz8SwFsUS2fuWhBHepJVM6Q3bDjeRa33ZuD1TPPU4Y",
  "key28": "31wbAtC9WMfeMeodeqvGkrequqXkC5yqL3NT7gMRks1YK4VnZP1MTkERToTQULiK9vgv8Kf4YENihupSijBm84aA",
  "key29": "2dTf7ySpU5PK2R5tKKknVsm3G3S4KWQCqBVYhrCCjkBMbrHxtsLwgUfJBKePtQafxvd5Q8PAw6iLbTeQ1WuqSPJK",
  "key30": "3DWtgEgkYNtH7pLGXW58KaWNBi6nmyWjptVBVXp9sEtyRBjQMPGb4jyE5KdcxwKV5QfsghoeBMcxSbGNm5xzd4h4",
  "key31": "3CSuMM1nu7PzJ7rywVdMh6kCt9GYocvgS1QNaH6HkBG4mt7G6wc7fyoXznupruH6xTBPfYooz48VjD7SHGLqgawk",
  "key32": "2PVn3NoGLfCJKUTVdZDRzXN8kkyAjxxG1ygByWRiaT4cF5sM1cxDJEorAimhuLp93Gva224SAXCyb56AwUNhTyHf"
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

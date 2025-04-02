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
    "3qdWRmv8hWzKCd9t8ez2PUB3uBG15YX1sgkGaMsG4pDx18CkRdKBtzhDumEqBaCF5fdzBDLRiSYmBZjcNSHTfAp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZZ1q4RRQTxuoZETLhnFdgGPvPaQkvPgfoz9QbFtkDM4FrXMc94WK1XJFnkgPT2yGubUoPDs2qvVePvUgGCDf2w",
  "key1": "CesT94m9Hw4na6tueGR3zyGFDy5foXLw6hhVx9Sea31Cpd7uhAwS2r3uphEtmWn4qX2nBzyfUduwoxBCpsAwr2W",
  "key2": "2hyQNQASJhTJNo1XxwdeyDAFrQBbrNdkY6uAvCrm9TGDJU8ksEPQgNz3XnwqpW83f5pnqmFAbXgoDgN76V8j64jt",
  "key3": "KhdZ25Q4cZcoNvrgqG4DyHDVMixiU7xmFgnhJj3wF27aYFwPPtR8VK4a523tCQ5x2yjHjNYHyyuXnrNY7XWupvu",
  "key4": "4hndPLz87BaZe2hb6SsTGJmut3G9ka4PjgqCSMQwSkspUnZQ6nZfiPoQMGzpy7BKvzPmX8Dahio9FwQ5Mb58Tp66",
  "key5": "2MuexmiFWASKmNBn9TiTwjZJAWdfkmHDPpvJCF8esnqtdopJVouK7st5MkNGaHcjrBGouhfyYXtGRbtrAuDSMyCn",
  "key6": "47DVsPpbveYsNUAXurQuN1n4Ti5DJ13MhhcJG7n6WY6t2Hb9qovBfSBF9LV5LnC3SncMPgZvSXqU8RZuFS1LXDjW",
  "key7": "2mzEXbAGQdZippyA1aSb64Jf5bgc1H2pC83Ln8S3gN1QwwUjXxW3oUvDAspcox6wDva25SEsb5fyvZkhhbXk2twj",
  "key8": "3fYSnuF6fnF7bYaMELuLBQgtbuu1RFUxTwL44EgNb4mYZ2qqzyePeoEz5HDXfhjqBEFnZfJkA1m9YT78CgrKfZjU",
  "key9": "447rWC2obZvw3rYRGZ5RAkM8dndLvJ448fK71vfR3EqyXCKfKzKkwLoSyDLDgofS3kHMxqJTBtTuBrJvvG6gVpsa",
  "key10": "397h97vUsQLHhAsADYSdgrfKRbyUf6tWiQG4iMNEWnz7Bggqtnrkmzcd1ZcmshcGpeX5UGy8fpyPk8TFimSBczvq",
  "key11": "3cM4xCx3YQNbxR6uhtqUhB8WvAiatM15bb8orF67dCiKJAEaWJsvD3kx7MQLGPAtYkdFC62VDDafaac4hSpQpPn4",
  "key12": "3yoFUL3XCxUY8EaKR4zThkA2Kk3dkyruEA2foCt7rZzcddBZNEaVDsZPhU6jTXGqwZ949r7cfPJncSNjENwHWLTb",
  "key13": "3YRC1KzSR9C7bzH6EevzHVSWQeU8KuUjkySnh9jj6poVemUdoqeA1ZX47DDvoaG29qZLMhiJsD1Bk8sfmnwYB3Gt",
  "key14": "5KdZLEDrUPyw51ogYFzgCVco2KubTvqajbjEQmeQLUEiR6RhKc5FYw3bJTiZpZCFM7JfVbREEoVEkRMUXjbGsnyx",
  "key15": "iLTWJEmzPSrNLWeouaJgyekTihZXMTf6paSwU1RkdzjFthe19t7sSzJAFjnUh1FnaL8Rtqmh69RLS5DNJeNSPfc",
  "key16": "2EmwukN7eHHEVvt1PibdF1jEps2tLvrfKXFmDyW53DiPBZAYGB3Vgmv1vCPHet4JGE9NMyyXxueVMd6Lzuchdi2E",
  "key17": "4K5BF5m6fJWJNTzNNL7AHmBmHfYHRx6QvGBL1xo3GLvMmPb8o8Q3k16peVG7q7SuceFmcvZ327g31mjM2bndKaAj",
  "key18": "3n3V1sskEVcn7nPUsf57aqdpvVFqQKih7aSiWGQ8wkhNcnTdNiFgdwYfYi58Z5CP6MM2kd5iXzhYAbjs29VbBGo6",
  "key19": "3sSLqA66CDYiMizscyEHhrv55A82EFUQzLTC4KjqJR78ZkuDt35xwTkS7RrhTdS4oxztkKjhvaqKM7L4eWbx5At6",
  "key20": "4C3Nn1Y7UDsJ8ovQyLMzTpR9bNzfpP3LzCnFsStY8tyVggwo3Kt6p8fjfshry6rPZEevmeUNzrtB8iH6LccFsua",
  "key21": "5MqQKuRCUuEX4R8KBqNg3DbvaiuJ9Uuvr86BJPv9eksdKqa6SsQYn1FDyGRSJ4QLE9n7XR2BvoWSjL9iaxqbMbfk",
  "key22": "zzVtKsuJz4xn4rZUWPdLRZDmGWB1yPVtSoT4uHmoq5PH5t1bGnkTAcKf6wy3Q9tkE7AyKs6u1bAw4HprFjFTn9j",
  "key23": "3b3yNEn4jhxrsJJB7GfcAYymkz5uk47ndrcwdnuGf2uPPtufxNtPKdqtfUGNaiaDSsE9eGBNFehtGwqThtrKgwge",
  "key24": "qSSUSuSt3zgMGcmV99Ji5taqtdbWkT7XfWGXAvUXk4VfuPMFBYJK8oobw7dAfyLsTefDzxkzFrqSSDUzUMkkFpT",
  "key25": "2RTEcYSDPj6BpxFKiVpMj75WsCrT3dkWXwcR3iFBVUVXAmDmA1KDpAPBPD3c3dPNGTPrR4tDT4MTakvAKYjynfqV",
  "key26": "2Ssdj8z9T7nRCtwT4gXaT9CRGYqSxTucpg8JAf62SFn8GsGaniJ7RLP3x69jF6wvF2fNKVfYGAicX7xmhcq955tr",
  "key27": "2jWfSDYb3greQWs5SYCZ74sw2p5jPM4CRHDeKAkPWWP3creVRczeaoRtiwpsLE6WaiTdausz6HG4uGP71hTwNg16",
  "key28": "5RL26J4UtWHguVT3uT2zsdw3T1Rm1HeN6VqsvjtTEH3ad9QKaz2PSrMeyKEQvpiGyq11HmwnmBuUuepHPCTiPbPG",
  "key29": "4MNRiFtCEDDMX52rmGif78jpkCxpaVLm6NpdyekJpFDQP8iUFxjcWHERdV6ySL6nJj12qgtrHHWFoJqRsYrozAsD",
  "key30": "51GMeoAyUoHqgcYDMsStu9JDff4j773EAPXx7zZD1gjQvJwSeSKcHJmXThj1dkNugu9ViJ9ac2yVA9AkCFZ7sk7H",
  "key31": "4VwjuRNrbAVXAmxg71G4zaQ8rdD4ukSbmAAw8HhzAq5HQ8ZNwM56GUSBbH5hS7WA8LdCbNgP9jDvXPxnbQSsSs9o",
  "key32": "4piM84MM5FpaadhXsm2sqNvojHM8Bp2tpFTHYcwCdyRUxrr2fPYb4orZwHHFKF2FushpyEU6CayuABuKusodYEQj",
  "key33": "4oKAAwJr915jiNYoztsyMbXjAbMQ8MvR67wBc6JDQ99K2LrRfVjkkVqfYgU3mKQczafKoxmDdtKDzyxBkMEjuZXp",
  "key34": "66ZZAMxF1hmfjJsuhGrRt9CHjRF71zJ7WctjotHu5xY39HTiX376n2mpKMDiNinKZY8KDqX14oBpvmX9e8zh3ipn",
  "key35": "2RPHL4y4WkJmXxTsXkj4Tfp9w7GyUhzpzLYzRFUZKtz2oaXj6Tje52a5DgZL6jEwiEvQVgLNg8majKg3m7qDYSwV",
  "key36": "4e6pvZ9QwZNmNnXBXN3HZ78FW3AJs3N2fLGsYPbiNG8upQ5aHySU838CJcqd9PR2sieMfoLzM3WGp5u4kNskaoav",
  "key37": "2YRpE6quyLfaaFVTbgkwuew1587tx6zEpJQTBggrY8jJ3Qn6bJzXGits5horQsx79DpgmTHKrSxh7nfVWoTowB7R",
  "key38": "49beiMR3DozYLfMaxN8nfZJPoEJMuU187usjZz5vgARfFSVsjVuBbEcnSqM1AxncTWDzQfgyZG76AaVUesCAt5Jv",
  "key39": "4jn7VT6KdhPGQUdE1E14hm7VXabqd8ajdz75dpS6beuLGq7rkpQvRxSUbREvw1PjZGfRLJELJQAuEHQucyh3tJ1p",
  "key40": "cPx1tUMzXNmiaZ57SR55E5VNwfK1xNmvtqe8wcV6FSd953Afawj53gdEsQJijwxoGwTLi35NLimELkoc2xsWxg6",
  "key41": "qavqa2EmKZ8LQG1RN7yhWpBxN6fdKWLiSEWsWND7S8r17hi9mDA3cN5q3X4ypNBBswcrHsfu2J3z32ejEwAqMTF",
  "key42": "3fCZFghKA5QQGDq8HTJk2bZLfqDfL7xref4RTHcp2CcbnQwfkMWjPxrwpXGksbSuwCjT9HR3LfGu3uzbdv1v465h",
  "key43": "2DdXXaFusbrGbE63EWqhV7WRyRbiLcGvbFERUQwwSsVknLCd9tJgRJN5HaX1MREZeTuiMCbTXtLqjqQRWJ1Tx2qW",
  "key44": "5XjFX5ZPDbNvK1UDwjBKZgQSc2m8ASTGYCKaL3M8N7DtdqsBiZZwTLZ9XNJwEmk6pci2XTmXZaGbg3zT3bhp4THZ",
  "key45": "3xPGwwXGqFSPSxfH3BC4M8kpxM73dQ17V7tV2VAFCnTuPAnXGkPP3TT2io9HZp1kTHGEDcTm9YyoJjHJe4v4wfF1",
  "key46": "t482GWRC1kN7BpGfuZ8JtoHKXr2BJaPsoUZNJeGadWbFLfhMDNLfC4e9MorUR6uFF2g6PNqz5PnLHMjvn6FRL73",
  "key47": "2PWidj3yGKkNSkLZFRr5PQngUeAhuX3rcbXgh98WsdVcSH8aos3owBKuHRi8CsM1ULYBCY4cj3TqpW6TB73hmyZj",
  "key48": "2CNcAkDcRjGdkktwjymGnMMZcv1weQeFfz6LT5X6ApLj3riZ85srizD9UD2z7zusTe2PdfrJyqgA5GsQFYJtddtL",
  "key49": "3pT78apsogoU1ZmxKaYCQzYve2XTugp3PcvKtf5ENVEywPkza2hJRiuZsorcHBP7r9H21w6k2enaET9efh19p2xH"
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

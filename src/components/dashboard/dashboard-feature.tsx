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
    "4s6QM9PB9yRdULKfKpqd2WkYLQpMLBaYZdn7YyUBkZTbq4oRMiXyFVRtk7zyBnSXHxNsimaRhFFXxmUJa14FmqEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d8Y3hKQiMUBfdhEkYDjsAVbVZNv16LELccVUSXV7wP8eh3c15eaG3wW4EWFvixXFKSukazDB2UQzb6SUDSGm4Nt",
  "key1": "4ysPN9K2Mb5g3StDXeRa18Yo5k5H4UsfDyBv4Wh81gScGbvBVydkztAbjebXcAG4DJr8hCV4C6zcvvuw3ExCw9fm",
  "key2": "GbnXdx6VYnwMAvL5oLdTW8NKjiS562YNPQhN8KmcdHjKq7hgWJiagCRkhbQzp2qVJz7yds6ZPo5Yx3E8VeD3E7f",
  "key3": "2YwBgxfXUFmUEMuVHBU2k4znPZipQoRsZSPvdWmsBhkVzEvp8BeXaspuREeXBJbxAFtpyXRaM4b9yCuN5wB99LC5",
  "key4": "3SULhJePSUj2KWJddgEdjTf5yubbN9hDg7xTkxWMUv7C7fnvync6NCFk1xZB3jJzWVTQ9nvLq8aSqadfLQjJ41A5",
  "key5": "5RjeAku5ytnipryj8Pfgioi5kXpXtnyhVecrhuZsyV2yoN1TNEy2zXTk8TVVhkeBgVDwYqzLVoR8yzHqUnG82vha",
  "key6": "37Jz5XuXSKQg8WHTjaL1RtKpPzfZRr3DiWMTBdUz61iAgTNLak5URSiwEq3q2BVTijJwgF8AKMEc1xVECc4TiKN9",
  "key7": "4bov7PDLTCVUz31bj1acgbWuB1s6fx5pYD5uLJjtbuyaHbmsjPYvr8gqHbEYgEN8rrZ2si6SvwbMV9ebaamoKpo8",
  "key8": "335mi8QXGvrPeSjWpJxBrqLk63iwLWpPAT2bLBXVETrUryzTRuSjb7gGA9vPNLtoLqqG3qyGcoNKQKNdhKgJt2zb",
  "key9": "29eX7v6jwhLQny8kDgKL4AHpitar5aUjJsn5mhAGiomFjYS1oWAYfgbK6JaCBMr2g2H5TfZNC4d363feYLKYAD8T",
  "key10": "4WKDLFEmLuACzUqjZ2gFLFFyKwnWC7BUSg3RaU9ezFsNN1FeG26mRATRSiKYffbG1ot7SkoLpSFpLm8dzQ1Qnckk",
  "key11": "57QZ6zBEJESfCabAErbzq2qewVL1d4taqXqMnkgwYtsUxoY5CwFxXbyZZx33nCbGPr8wxTXsFDy5GGrkAPBEcEJm",
  "key12": "43mVKpjtzhvgLYxrHCaAnxrUMfXgXcXdetsR4Qixxb7zch3jH5Hsr79337ZVKw7iobTciXQRrwth96xAYpasE1N5",
  "key13": "SKzKrFnL42T2MycwLnuNfdkUmtbCfkMgTpzZAxLdniaDsVEwT47Uq37g5joBYUGYPGe6GtvBxLveADhFxYAK6dH",
  "key14": "37gBd6kJtneNcpza554XPa3ovNTqkS16WtHrRb9eENo285BZqgEJurBySitutH6ZedzUnbUeRSkkQcTELzjvjCof",
  "key15": "2dPiNxDdahtef6HbWnq8euHz6exaBU21jKCQkRfrJ2CFFZGdAGfxj5BEvsBUGY8GwGW44Yq3h8yc4K5JFUUHjDtF",
  "key16": "wcm4Mhfiu2vwkwQNAuMKx6qNCg9PCJANeTktZG22gh16KMf7aE9pFPZYymesrmcp2gETRp7FutXRnvWQvNVfrcZ",
  "key17": "47SMkcMa7aKULKeCrzTyumWi7BJX59Rp6YckX6P1kv7cPAugPb52djstXTzSqr9gfBtQ7pNgYAay3JN5WheGhX5z",
  "key18": "4uuZQ9MpBdduq7qV4TkYkBwo2tfNRZbVNdfnm9giv9fTkQbkDAc5VeSfUj6Ygm4UdJ7iUmQjeDTseindqu3GdGyz",
  "key19": "3ecu6jSwxuzqYcUreXDP4hfu7fn24DKJXfp2vgoXH6wen5deEHREPVfcY8sGrud73pUfY6rTvHji8W4EBCmZftdE",
  "key20": "bnduWxLjaNTi3Shz7HwzeEaEdu4zhAayWTKoJxb1stQ9qVM7m7PaUL87ShFjex4NT9rB3RECSTPxDZwTbUs3S4g",
  "key21": "2wmax91CCNdrVhUMvDXRmA8uDW8TsQrPnQvKQ4yBSB1TWZbd4K2Uc7cT6DrA1T8CmTPcwyVMb4bM2tq5TLVwusMT",
  "key22": "62XkpJyNby7uusBhx9irK2gRDLpBL8nHnmezEfayCBiMCotAxTKKmQgL53gdsPUAjsPAXyDK3FVoqaejVxkLMgnK",
  "key23": "5uP5kwwh93tkReBx3tSvnmKkYCk8apJ334r1kqwgzgDUifqwZVdfwZpNQATq3fcDrVduA9n5wgrnYamEEcr8sYav",
  "key24": "2dLjNPfLuCSwibVQ49UG49fTtEMC3Twwvwvtw8ngo4pX45bAz3PimLstGuK3dfr353HgJVzMKPWst79JhjGGuWf3",
  "key25": "4uxr9huhks8g3FJ1kPm7utbuEegbHx72bLjUquZKNXz7aNsYTbQowEs6P89W86TnM7AoFSFaeB6hbbXQDuBdA7NQ",
  "key26": "2ZKZ9hVYJ233Rs3nMv9f6xSBBBQ41MSPQFw53vDnHWXzAuVUDfb1VPKRUCUG2sNuQo7RFgsCjUmwXkJ8cE5gr4br",
  "key27": "3AJbFC3zDELRZmAVnJ9WgvyDheKQLCWXPUWdi7XgTPfSoLG47CMQJNpPCQftenKA6wZEEKqjmmW5shGn56DM6Lz7",
  "key28": "24BpNpaRaAKQkKr13YruSrmehaEaKmk1dUxmKvHrcxAE6bnojLLizdCPB96ueLRGrCHwsrCFLRu3f2BrDz6rTXs5",
  "key29": "aARUwHyaoUkf2vz68WbTXkCob3d8MrgPL5XSTmkucWjx6NXtwQdkNzwuq1f56jXVTqnnd8awNbpXeVFfE9DMXCh",
  "key30": "3GwWWntCa32JySp6pRZeqLBeLaeeLsX1VeVrBkywwm8JjN1EhVZe767S92hesdZiz7JGNXBWpzTREf1x7iVEY5v7",
  "key31": "43UCzhmrzb4Gg44bxHbtrY1kRkNebFUtrstFENAEPmbXfbqxu5oiLQSnLLdzsuAeN3KaTp6WrbQyqYXu8uPrpLJg",
  "key32": "3BXmy7XrKZzmBYN3RrwLLq7eyTNeAdVnFqTebCebxsLptZMzxVMs86vX1JLB2cXEmCU1hso6fB8jfpftDxhbKYm3",
  "key33": "8WQQQgF71BMbU7L7iRagfNpHrnngFFVfGsvmBuGfQMpyu3Xni19QFHb72LaCGLDCMqofn5gu1DKb7KmABDjww4J",
  "key34": "5YnvGxHM9EeXxcgDnC63zHQTF1L2jcTAVD6PdCzyFGDRcp5nc61sFcUXPrybAKCtMQpT5LahVHd4LGXmmqzwmPbz",
  "key35": "5VJYyHKk5nCgYr45epn5ycnNvhfoLwx93w5qdfB1Ptuw9EPPu43WZKv5UNfiULY396udYuNWLTHn1tsy9D8gBcPC",
  "key36": "3wi2mm46KBaAxuXRteBCV3FQsUycTMDdsLSQEEqYzGW1meC5bXGqF5ssoZQENcugycgX6KsGhv3Hr96oZbaNAQ8k",
  "key37": "4nKEzDX2jx1ZRRi5Pj3WYAn24krL95Qeh6YcrJi6XPqEo7KC63TGEmU4Dtz93fbyvNtPApVSUDczz3qGntWDzaFF",
  "key38": "29vKALY4Djxma1XauWgNViHkRTFt1BjNvwsx2jdAmSqY59hYJpaSvf96cdp4FFdX6HKsB26GkcXwhcXZiGx53e55",
  "key39": "5NfCe4PVLLUFaD9x6MdDdsS5mwcpQohpF4m43Ge3nLG27fZijcVQdmqMhG6ua1SuCfjGnX9dstayqsC7WCwRQd46",
  "key40": "3Li8kP8TqybfBfKLyoJqKSB8khYC6uZooTY5YJYvWtMboxwW9oX7WAfBuZ13wGx1RYXne7PoxWSK7v9p6ThuQv9L",
  "key41": "3TTbTeJRJ1uwHGBVkpBT1LMjqQhhn9rxGfsZvfiCL7svFGF6tKMKVLAY3zeAPaE79QWZb3jc9pAq4B53cM8Qpckx",
  "key42": "49CMCNv1hknsn7tHQRA3jHFRbcFP1gqyfpjpMv8QxMULBR6EA8pbhNdumDrFkCFdmD1ZER2Hs1Bg36nZWyhH4b5P",
  "key43": "wQ7QJSkRbrKgdTFx53qH7T7jZD6JB6xPmkZ3umU3Dh6mP17ifqtinU1wcDxQxMaZtYz3JJBusJttvxJtDFTJxpF",
  "key44": "2bvu9SVgrYxtNub3cKSPjmEcfL4vM1f49X8utwX9YdALdamhoCqF2zkMcpsG9V27zaetDaqdY2spGnQPNGPvbYmt",
  "key45": "5WUo9hgRz6XyvcB3k4bqq7ZsFJhhReSjNm3ChULiM52p4YBWNGzLKcUtK83QYGXYxCtDKghaUtvo8TjRk3r1MU2M",
  "key46": "2stsB1wqsd9TCZFoHGZt5rvAsGEsTmuXZ5aCHpEt9VeS9VQixzPMFwEDiJLAnqqfW5EfLEykFLR7sL5Jbj86JZuX",
  "key47": "5oCnQxTVwE2hFJbmmvGGAhrVF2fXisoy8VUMqjGwg9EsbnPS8YLCfmDNgBdcFvTW6X5X8i1YK88h7TCunRqahxo6",
  "key48": "YqRBRgYcjNE9sztnsBkTnMZCYqWQAGegPMUkC8hnYvjwwVs5zVT6gFqAFTEGFJ4Dq4D9o14PZy3fCCGLK7NfeXF",
  "key49": "4TZ9YAoKnXSVLqW5MsaD4YK5Q7P19j75sZtgoeafE1UWkXMc9bcihGVtWnjqYqTpXgK99o7MwajidqNxMxddvsCg"
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

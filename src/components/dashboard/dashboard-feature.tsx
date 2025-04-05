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
    "3xytoegE5o8dKWA4MBh5DMWVt5fnxRfHzJNKtma9r2wna6agp3P5dEJ2nF7ugpTLqco8pQLtiu4Y989rtWNpqD9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rr82r3CVJkEUk77fipq1Qiutj79ekZT1GcySwx65tNSZsWB9kwqVV2nu1dqtZGcNz5SmznS93SEjsfhoS8ozvSc",
  "key1": "4nxtNa3Cm5LGvv4NMgW6QEFgoEwc7nWFbhN1DCekmUTMqENrYFA7Dc8HCEqaoSanACjxM5D9qxczGDxaZArpHirK",
  "key2": "3oLqNrP8xBq4DLND45bpkZ3bbNxEZgNydejS7WRrAJcfNK6LiqruxTK2z8fWr8Mr7gN9cwaBDNuyzeDGTVaa8FqU",
  "key3": "5BZjRDDrrTcu9BGcWRfEVyPZS6wRz4s4jKTijDfe4NPzUgSgU9kjJMKF4JKWLTVgr7qzZ9ZoZa2Zc7mUA6WsBPy6",
  "key4": "5AVQwx3UKidkYWoBXicyL9TB3Dgpy5jjCrz5Voj6cYHJnzWdBc23xK6UH83C9BuAdUVoAx1nZnSqxUJDRxZ2kxNb",
  "key5": "22KhxZ4wjmC4ngJa4kCvdE8yEoyfByCqDcs7UaNzZuYZXDZ8r97RcToXaPzggxsqHiJ4r1qVruDAMFRL4QFPTdUH",
  "key6": "125QSyoWgEjpJgPgsZCwSz1WWBkbYxaitYV4dVcck8gY7iFeddmA5zkGycPMzg7efgVSqdw9D2D21Q9Ax4FEhTT8",
  "key7": "21AumsbMBUSTFNUv7yAZHkik1s1QLVzpmAvqt89Jz9VL3wFxi2sq27oc9SJHsi2dLzi8m9k6UjNC8ztYXuF534ix",
  "key8": "bVHkVujPyFievLwMU15N3WCFLxj5PrTPd2ShwoiZa7cVoVQHVzmQnzmdVgtb47BA8SDeQrP78kY8L95QP3gY96e",
  "key9": "2ZD2VLfDfeo9rAkPUTfhG9ojLFmbS8iBtXG1eCpnLYs5dXTbFBe5fPSgde5PZRMmeXfayTuu5F3GXc8c3xz5JfHn",
  "key10": "3bPw3gYcuCuaox5NbCQ3e8b9Ak4PWCxPv6aX4TkN5erWq4YH2qm2KyH3EcPo6i5GJBazAEdQjCdea7dN6yaMbfyc",
  "key11": "2JN2j5EbF9CX38pzarPGeZqMoa2TYGTvP8rJ5Q4aJBgQSJ5dYTfngJZu7Huwu7wYtG3MLRfxNLTcEubnTNczr3ez",
  "key12": "2xZHDDxZcG8PSrLLjAUtZeK5VLqcaxYyURPf2QDQPX3KpzaLYya5uuiqBmuqAnndr4ikjNEY2Gwt4mwVCzNuJk4j",
  "key13": "YutQoEkLLREQgsfgYzgt19Pxo9EheUz2ARwLSU2GB6arfqn1cwrXcxBoZ8FhN45vY1jZEx5gGRdMg7M5JsYvf5F",
  "key14": "rQ2Ba7deKN3Z7QjpQPAfEDBftvBADfncp5jKJeSkL6ArtCJsBKt9fxy4qF6eTWSFKGCeEuPr3vvhMKqz5oXpecR",
  "key15": "35PkmNfKSKwB5DK2qFWjacBPwq5u2sZf45oAN1juFCogYMTYi1PLgJzwEzdd4eUxWrFWG6jyrXFfEntDWH9RW8Ji",
  "key16": "124kp2MzuGUoVhAJXpao1rvVbyPchpRcyqN7LrVYPXHqYxaQrectn33ZkZuvDYi53UCCBWJmsjAsdmLzqLbhPg2H",
  "key17": "CvFVUEe6f4kjhcrHm5H1XbmZQEoPVSgCnzUcYb7efSgrXcCeAsJftKcZApw7pdFvwynL5iDN2sFnf1BQtodtxrB",
  "key18": "2ZMe6z1pNUvQgUkkLVtVTTUnkWTmudSVMeZRQMDYgfUAx5xK2RAnQFcjWsEzvGVz68Bz2xvSGwYADVTYKXyFS7G1",
  "key19": "46jdtoh9sSi882wygqpQZAGMP16QPthg4tWvCkrQZZoc4eawsnhaR6UQ8Zj7P8yG5HQr4SyDfzQ61vB7kb5ud4EG",
  "key20": "3yYNV9Y7KZ5t6a8WbHGXnu8XZnji1v9utXSUugSr2f3MoK2fpeSC6XzQVyjw6uHDjjRgC93HAP88VjN9s5QDepKD",
  "key21": "2kZ3nMLJv8AXP1UdG4u3mMV6JLfRuNzNUtatX5LJRCS7QEfCrBxnyHtCPTU5kmZGNMn4vi8Qri1C5Wsg8vUEdGmm",
  "key22": "4VD9rG14n1Xokhf9wwPzfNUe18T5LAmcZoCKbfqu9gHHvqLAeVL6BLrXzspqs5kor7eeEVB51kn4u9r65bKiCcNW",
  "key23": "28sTfQrsPBBvZDahkMPz6s1KntQomuCFvdioazt6oZfw31ArU93ULovCdcoiS9wjYXx9Lna2T2HrCDkE2cXe33fH",
  "key24": "3vnvutxA6e2YHRuBhFVEwdn16Lhbb1gDQWp6r2sso4XrpAkdvE9xGZJYzjUmP7Z54fjHixJiR3YMsakJZNLfdsDf",
  "key25": "9umSquF4nUv1Do6byF3ndTVu72gd6uxmuz6dA1eVE1DuQWmUk3ey7M56qYeMSHzPGTgk11cfVgKrJAJ4dyVjUFk",
  "key26": "iUNQXXnnhGx2T7Kn4Ht9CS5waGGfpeM4wCxPh8HZbeicmznX9MHaSEyCy5uamqxvVZkuQ3Rh7FSasVQnSowWwDx",
  "key27": "5t8p34hcsWoeiBmWPoPjuMZg3PEsUBFtubg73mWwbTj8HTSiWkACcdj3kU3DsGsSwHfZHko2RWjPQzv8FRUxePXu",
  "key28": "5jtjfXjDh96RhtVoZfs7Ax5KvmnPnXKE8MMoyRyv5YLUyzgY3DhkvEnnj95zr8ixPfvJM9rkiZwNYpRFvFtosb7h",
  "key29": "5sH8wwfEfssZNHh8E1NDf4smWbaodpkgqS3FE74Vc7QgtQkFH4QnisPQQmauqNEGYdgn61MjvdntfXEdXDCH9FdD",
  "key30": "2wrwrzGP1D6fdX5hWZTsDgSYMevfM9iV4PfoTq88azLbt3qtog1ZgWtqruJbvfqSs7FLPCxL6DTKap84GgxvUu9y",
  "key31": "3rxULBmYWntyVcfKaSavx57k6kxvXJ56pM2vyU65Cg1kkKz2us3VAHdjZMvPEJ5bctnoBLgVmcacAB2Q16ELoG5D",
  "key32": "Y1PUFKrcV4t69XMjzaJQGVryaWNAgrhQbtFadhiuMhrR6uTqv9ogkFxQUBYkp1gHYEnT3wuU84nwjhuo1RBEzFa",
  "key33": "5U6QjJgDuV9VvtGTWBLPkqYKACnDWViEdryph8y67xbGGtZGpKX6xNAZMzCWXqHyfeCpR3TpBu2Wh3TmwVWeXzCH",
  "key34": "4MyS5mj67QjJVz7HYamfVZydKgj1Bb7XQpf663QaE1uzixALYrUw6hcRpEHwufYV2s9sEuDkwHony1JERq1aGMYS",
  "key35": "3JzvgWCBBHfwHcCFBgd2MRDn72s2kQk9yfesGZ4FZLcVWASHWoD1hJnqUvqqc2EgLAjd8wFeAqrZ4pAdtysTWFn4",
  "key36": "2tRocGwcwKJhgi3rUx1SwWYdjbBJaPDwJim9Bm3GBxcYg7xip8UR44iH24tU631kENbnofmAACvwF779Uvk9Z1FM",
  "key37": "42MW1t2ib3VQsMw6ihSDG71fsBCV2RFRj8i5xtHtQKTZCxerR9Vn3mSf1ekYLRKmsHM1v6iZFDE1J1EwAZJpYDHT",
  "key38": "4hZgBrs8tgPGkq6thZ4jNz4iBVfsCYRC2joM6K5HpixVTjBs5pPiDqmbsterFTMzphL9Sgsh4BnwPfWKwYmUZWQa",
  "key39": "541xtjbVnvqLS3RnGSSSuKMmj1i6R5dTyP3fTXq143RwhfJzVoLUXetpM3UqBrArZmuda3c3JKF5g64F4RH6kPm",
  "key40": "5mLYDXMUu5Ld7eLwwq3kmP2yWK7RbxTwqnm3Boovrt1owAhhxhBkCfTcusBUnPxZDLcPK4eN8TwMDzAtiB1KNTU4",
  "key41": "3UNGXzmYxLx1t3LoD6BYhh4hZ8JZEnVwCy9gcHuax6Ef1Fz42enGptjXPvvnmSVV9L6owSDEfJqYiPdZpBawcx5H",
  "key42": "2hJshTvhqTbCTVPWM8u8V7F9pFEXyxSj88dxjYduAk4ihWbnjS6TiwRDc52K6rcCAaAGGNTToF62M48pkaqGuJK1",
  "key43": "3XckVQf1YEpWYkmWbEyup5ksY1D9Ywp5vhiyKaC9VkFrwXKMApZWrkYRueWJbihjd7Q8uUoZpHrQCwfUXvrMnxJK"
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

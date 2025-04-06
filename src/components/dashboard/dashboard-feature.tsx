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
    "4pXprDwX3YkUasya55NVYGPaLbHH1DfudhqQrSYkfoi8i2aNVZC6tLefQcEr1WQmLdp7JuMzHGpmRLceqw5sPKGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pcXPuAA2uq3jESoJ5DjPgFckgRuKUgAk5rvKEvednwbBubC9rJR4XnijnMLTTULeFvKzoXk5waoSTfvrWwq5uj7",
  "key1": "vXgBPHvVx4GUpM3xyqjj2YLKt4X1BCCxmwyKnMAJXRN48YzZL99zUcf2YNtwPeiN8srGbY16ZBGfAobBe12w7wS",
  "key2": "5Cnt7XNTrzPbdy7h2QHMtqDXhMkfT2JqRiMAQ6ikuRf4w1pQkxePphSquKa8e7UhHjojHj1JJW6vVch5WuWH3qq9",
  "key3": "66Dbn1DRtvVU9bgtmWck7t4EVKfoZQdE758dmiLCEQyBAPaunpE7JRbNVPCxZE2y4XxmdATdSMffnL9NnNyDVfCj",
  "key4": "3ixd9eL6cKh6U18xCvXHZdoFusD1MZBDj1JHSzWfhVVWZGR7cnwXyXPMRS39R585To9f6bCu5CAWeTEgrTzkpXKm",
  "key5": "3DixdixFz2wco6Ept9nA6znPF17eJGpuunXrHy9qgtZ8gSj366hsesETMXGEsznmbi1DeTDtpib2qhU4SsTvGo4V",
  "key6": "5Lw5KyBmjU5hR4MRCCPPurhWUWCew94LQZse2nkwJytj9sFPgt5bDwPzhw6XHWUBhRVQ4L8xWxToBRwH7r1M6KcJ",
  "key7": "26UJs7nGSfiGDZXKCJf9G4N4gR8ENn6uqwgrGiLTer6SAPQtPzwApApqmCmSZfW65nPAVHsTgdr6L8XTs8Jzam8f",
  "key8": "5qMcQWdXviB6UekyYZHhEE1NJz3RTdibNN7kMyVu26D9S3sSPJ7MPWafmTFq9rT7sQEiJxLeWBombZi4KPiJdtVk",
  "key9": "3dEQ4PkbQyv653fkq3RtRjmkG5zf4Q6NuDXxyMjgSP4vLefhJEBP5KdkP6TSENbPfQoYig1fNxkaNtRLY5t5DQ78",
  "key10": "91i9UvLJm26MAPjLxxCdsPATokTmE7gT7tdx8wZ8wBrocaPXNeFAuXUYSzPHjweiw6QuVbvFxZ72NkNGxdvAJZ4",
  "key11": "3H9akrfvYcQquvSiL73jG78PRmcHxu42jpb8VEqy2u6ZsXmxdrGJb6JVVBs2pp1pCKFLMpEPFffiG64PuNum3uFR",
  "key12": "5cKiEn91yPpuqdEHDi6YpWhE3FkK2ZHRJtu4QbHZBYE8qg4TsPEXiu1ErMRuYUFVj6AiGmg3kkuJDLKcsbi5R8Sp",
  "key13": "5nBqMed5KSMYQFscifu7pN3RfJvZF7AwqumSvKxFrMMcrpLxFuYu5NGfr6M4ox12Fb3UPBAcBk8399xnxXopCfAf",
  "key14": "5rmMmKCJi1foQuypHURJPSbUG7di5yb5kDUfKRV5pRSAhjk697NoiXzzoNCWnASttVdQo9UvbtTVLSeyVf1xiyFm",
  "key15": "52G56DKrqfQ31TNggMfZzxSGTVhb1pndbJRGUfQFwjt4cBdhCgH3HJAZ3YYYxfJx7CDrNVR13ZAPZMGfbyGzNSJK",
  "key16": "R4dyZwc1YXeXFCgkDBjEtar6Dgm9DTfHnVsDHfExYXnpvxvJJK6eSV2uW8Jr2BHYaFjuyJxcKHhDJUZYhqUYVaT",
  "key17": "ieHMCL8q5YtWxYTj58o2UsJHkjKoEWgbwakanJbbHWyWsfkKVeF66CUx2zGSSfZPEw2qubUiPAVCNABZJZRdR9U",
  "key18": "216st5nV8xUCqJ6QifqwS8uNPy4eExpbeH43GDBtzxmcTcVKa3BicLQr7DKf2auxdngY2ndDgdDtyCJ6swEyN9PT",
  "key19": "N9WtEWTMjz2qcfjDSEJRKm3Mq6pzgBZy462gkN3CpdS9XwT6cPPiMSWDFppHQT1HWJ3UAKyujjbTPTyjjDwVxnW",
  "key20": "5kGmS9uLcJLQKj7dNeTHBWZWSGG2N2ju7K19dRBUusxTpA3iEq2EXmXhCbLenp1JXF9K4C9YSADKCVN3KcWB9T9U",
  "key21": "vSky4cBJNhPRHo1ATaRS29bHRp7kAMNJ3fYBYhuGTCnK6RP1aBKzkwqibrSuPZrpUCt2Et3Sx45eDRgrmrZZ3DL",
  "key22": "4fbJfJ7Kx3es269r5TJHDxbAzaD9e4iGABT1j2YL5Ebato2Q8WmAsmd9Uy1eVhQHtq8oqxGFzPKRM9FQuDurHS1m",
  "key23": "2Nk1BQhTjxbx5eMTvMRkAEWoQ8JGcsY4C3vdhrNUzFReLDnFj6MmAn2A8JT4qdUNsemqh8LrmcyRtWYRtBNJajrr",
  "key24": "4xoUjxEFZ3n9WJqHVuoR5LmmtQ3dXXb7x2p2viHpQ9q6y6mHC9ARcKHjqPWME2Xv5nGC5Q2d16QczvBkDMGLwMGd",
  "key25": "2PPCDEPg5R38wFj7tMsWBJKwAfPbeyjCfECi5LXKaPL8LZx4zdnTmdu2YS8MMTLsGHJUqVUbyBzJ52TWGLcrwNxm",
  "key26": "3tvxe4ALVP8cXPVogXiFzMNvEtfC9bpKrRoCuKWE8xbZzy1AdQtmVFrbmmaA5C9u7BSKypp2hJxd1CXN3Y7uDhiX",
  "key27": "4fUAQV8Y8jHxT1faLBACSNTeLc3CasuQ4qCMTqiR8wVD2YxjfB2WkfvJppE1Ad4u96gKkVV9h5vw1eFJQvYMsfvg",
  "key28": "X1qsMM5M8J4RXfrypBT26LdSUKsYePctt6qBMuUVyuQ9Gk79k8DwyiGng9k3zCeMYE3s8EmpnFmrwkbnnTcPdA2",
  "key29": "2mnspnRdHXN8ebUgS7VqVYGn5vvxj761KBZ44H5mUQ54BhAaTjYbHw7E2amKezeKUZzC6F3p5J7CZ2S2Kqmy5cXu",
  "key30": "YqtB1876Gb44VVZ7ZuJURk8EQz65ygUyYzfrmMMXcBDoKR4teSGzJU4GwRnSmARnY5FzGANijVRvLWGaFrVCYLp",
  "key31": "3SC6TPeapz5yhUUKDwyH58DnQp4DPnJTBfjsAadjDK9zTWhYMRzikXm5UhxBxkmp6XLHz2TLL3cQUQkyqPrdzgjT",
  "key32": "23Eqj2QSSoaZELntoCtjQUVxVGtXytTd8MfAX9sXjYVCj3pjFESDnY44Uo52cUDXGa9dbX3Y4hzSsqGZrLUi2ceQ",
  "key33": "4XJPDjQ39kLMYr8Uic2Rc67QUhFigqCYwPucf6ahG3HeRgEPzugBeWjP2DDcdUXhr2tdVu9voGk1H9FC9Wmxfb1i",
  "key34": "61oANxACDbDMNn5Ky8LSgGHcmSdjLyH3JoG9qwFuozdJoqsnzXR1jJK73tLZp5Wy2Wnvs1xhUJ37utjgqMxigEnD",
  "key35": "3EJNyRazHoQ3v8gk8Gzwx1ErJDVvGY1sUbWQEWTcDeCEeG5WdApzAcaCmGjkRBPR1mPnJotHJERbj5dMjjHVXL4B",
  "key36": "3o2SRCPM7aKsgoAnMhQnbSRSQD35q132KFsawja7eMdwN2Ee6QkqXfXWxeLC47u9vYke5aAbbfFSD13QHdTojbAG",
  "key37": "3CTVHha69qfsTzSzom42j6X5wystGXu5zfX4iVE4gsuLvnXnmMiG4jk2EkFPFVaXbPY4XpZDX9npepTNqT5RcirZ",
  "key38": "6137VFoefhko8RTxpKwkY7VJ9hKaNhGDYMzPVK1mQccFn89pG5r4LowFvj2xr4KooqUYUCVhUPCf7m9JUUXjQPXc",
  "key39": "maKy6mmdubqfgFDbPHpsSqmTjj9hkbW26KMKnQAgPM97ZVX5ce1bhpk4ppGm4b13viqc5uPELQxAiAdKVnq7HGf"
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

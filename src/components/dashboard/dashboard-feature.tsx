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
    "3mQEe6ydtBGit2cVhYLUgVftp2fned4PSoUJ8zUAHtbJNGVB6Eturkf4Mmhq17X9QoMVZppwrBZJhQQCJ8Mk7wQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RAZooZP8ZxtnYgLZWS7satq4E1NR7pGUKMjXjxTzAtdh2Y53XCKRYZ4Sf4TV19XqaAcpgx4Edq4Nt7a4VPmnoh9",
  "key1": "5WZv8qawxA9jrpvbALCW5EnYi33K16RaEGZmQZPQphDckowXEDcCHZJHCy7QCoYxrFKPxmmkpgGuZ5ovHzJ9AGfK",
  "key2": "2NCh4ScN7AQs6HitKHwYdxFfGCfHCUhLJrFTFmqjT1rV8ZPuiWRFzL6B84osJyESMyU7vEqP7R2JH5nKWTXcCaae",
  "key3": "9QVr5RuZspJg9Q4FWvWktiv7sB2PBgdGfDgAC9347fsLFr9Bb9AcDT24Ckf4mdK9ALReoc3BmqSjCPdZhTmUhoi",
  "key4": "3r6HNnweh5J2HVj6zSCXBhJQWYDwEFWLVxt2LinrgfHWQRboxkL3aXvRT4z5kU1tNHNXYFSrMUQuojdhC3CuPQ9c",
  "key5": "2zQywsdZThuUZVuLsVrPTahNqN7zeMPQjebWRnC8Fk13WmdjaFpzRUV9TCgW12TP8rXAYNgNcFmWNivn2H5rXbbY",
  "key6": "17cT3QdJ4P7DG4h6NWzX7htjvMQsMD184k6qdAAwnqHvp4NwwiGnizCtctZ6SoQSZL67pjpBQbjM2NtFfTRG7nW",
  "key7": "tE3rA8h9DJtwmsYToapfmTDUaCVqVqUtpR5siQEWHVfxDQeAsjUnyUBh1j77g4LgRKggFkkY9hy5L3zJE9MxQaT",
  "key8": "3dHT5f3TUVUgBYNv72dAG4HpnqX1zcwTSS6w8V8x1Wtqt1DusphquGwtm9hE9uhAzaSRPd7bGjLhL4PGEAcFeqPH",
  "key9": "67kjigswmJhqvDuVWgL9hyPgpwiQkNvno6adf5HJALiaT8aSeimnEc9yuqSFArZvP47xi6nYJ6vxGXngWq6QXXhB",
  "key10": "s9JPhEzNqSGVnUW5KCJQ3GZAdWG9RiMTpyu4nnYNNKq42RMK4BsN6MtYE4Ghuhf2PsY2DM1ZmykFzrT4ubZK69Q",
  "key11": "2qkn4XCjqzGiMVsY6x8DnbAd2pBnfdRsjKvx6p6TMmRoWhJjBwBSyPCAJEYT38aL3zbzxZvV61vyYgnaUD5FxKSz",
  "key12": "BvmCDFhn7zLUSYXwfuFUVsgbDkSyYq7Wq6UAYWx5hSLDSEyumw7qSYjWXCmxnjxund6KBViA7c27MuwBZV6fMex",
  "key13": "5tdLeJW4CUB8CxXJejgLKjT8A4QPVx1yGxJ3rRmHUG6WGvrNABzuXgzbmrtp8BaTeadpHKkibu9jnQu6MkW1E4kM",
  "key14": "3u4w26jeyoUJ7WxxbmtYHSWH6YMDAvWKxDGkKCw2nkonbKhCJqcWfYdvJzufjJV2CXqejz5D1Zj784UgCCtxfs4B",
  "key15": "4uyjvmZETWcwQ2niw1VKAUckeN1aXGvb1mbpWJFuxH5BHiUDD5tMnvhGUxsHbvHezkcHZ2hsggAPbXWfkynte9Kw",
  "key16": "4jeAcVmcaGGpDFUAFFY6GsSsfxcmM1ABc8iV6p28BhymyRTiNBsrfpYSTdyagFjsPfbTKzeyWawpQteamoFT5JPA",
  "key17": "Hn53oLN85Z8PjSsCEp29MJozLYCTrG3BZaazsuT9FQTrfVDvjVhVFHBUic1W2ckoqY9Q9Zrs6D7jFfn3gSEYEKE",
  "key18": "4JSHJJsCvpySZtJ8wsat9eSWsn6QDQsrcFANGJoLHEScGZZNMSb3FutivSVMS59SL7gRmhQTom38YKd8zhsMrHVx",
  "key19": "mwTnJLKPKArgLTQ8itnnqL4euofhsx397q21qKo2c59LToLJTQkwJZ8xDU8CWFtEXBoDB5R1cWbgy5RSctcGJAS",
  "key20": "3gwbGDSv74BtjvduPauTo8G4Dj2DtPBvbhsf4mJghkEzYgyUeWTKdmKCJGAcWJJZi5V5LrbVEePaTY15cJBvC9hY",
  "key21": "3qFAXjafxxWQaMJf2tH7yEvyqwn85rbCt2gboRaHmBYEwXvRkkW7HexSx6ZCxYoyhmNDxcZY4fac1TTmg8phumXW",
  "key22": "3fMd8bWzoStB7GWQeDvdBEQEVHZUHWLrihvTy3EQe3msvPDBHTAU1NQwLPtg7QGuP1c7UsLr54Cpnh6YBYmyuZs8",
  "key23": "2iK4iZ19PKFoF2a8dZq1zirUtWWRQjMMFBhzUEP8fmoP8Ya6ZuY8pmFnAWBqbFBqCdS8pAupVtAj94c6rQDsvxyP",
  "key24": "5h6gQfVtycrgEcNhyNbonhEf2JMhBAxhfTWnGL1558ZBPphLmwnnoKhYPm5nud5pMvUvPJ3CC6myLx6UvVGqdrUa",
  "key25": "49YzBD3DoYb1oQprBkkD3PfJLdgtnF1xdWeuWBV3QCpwhUusXfa3rgHyqLrWKN2mjpAZeAeRgAMfWwAfLDmJdCsT",
  "key26": "Bv37hM8vDz5Pt1gDrd65xGjziwTjqeLDhaEdzR5EW3xwRjeh5A4o9d7LjQrbPmGv2FdFHsRcQ8heihaayhBVeH8",
  "key27": "2LhVm83QeddLsQQXc3X8FS7jPEvfNR3mcya51JgAHAaxbKgv9UtwoaJoFW5mdxtmBgM2EQEi6qQeiHgyf3Q4RwsM",
  "key28": "HyfyCYEgjD5xv9M9tUpn961hCzjkJEGpGeZVuGcTvjDwM5iVwWcT2R84QQsXp1GrEbeiHFqpiJWNNpvMs3gDfBa",
  "key29": "4XHh7foTdExnhLQ1QKEd3499gqYU6aRPJWkfyZQksdgHmaN2rnGCUBMP9BDiLosbi9cTNoezJBxJDC5NCtoXaGRj",
  "key30": "mRE47Q8wNHPbiW5hTVLMMrxoPFZoWn1EAKsL8N3Gqn1Kvh4vhNBxwxDseB63HAj8f4akaKY6Vd6Qz59g3XXNR72",
  "key31": "34Fr1T8UUDBtWMuHuBAQMu2yoAS88KsrqHbHEn35Fa1roTdcqeVnGfWgFRpfTqRuzy8YAdrdE3a4U9yUdMpXABWG",
  "key32": "5rxQxkz2e3MvrNEz1MBy1ecTJ1UfPm6E6nTUSpU3HZLt1ChwHt6QR97KefBBWnNDVRBKc9oWxnaVXzuubVDeBJxH",
  "key33": "4QFPXHLX9oQSz16PBNoUWkSKvLHuLtiVQAGySLfa5nAYTWW5a2yjvcvaofEjLQt1Ntbg7RNrc1Xwp6szYNG44miC",
  "key34": "8GyyfsDUJVAuFHKxcR1L9i6DPRA58NpHjNxcrGPEmrmUSsgcrw4P7GhQ12LVqaMLnZYqii8yenbV3MUKmk3D1QT",
  "key35": "3SFP7J9GKQdVvMyLRC5yv5cDmR5TDBXmt2Gik2kHonuN5VYDFz6FUU51pcVxn6FHzhRNk2DRV8XBV1c1XBuhujKM",
  "key36": "3WVjX7EwEt7tW9x1KyrFTnvKvEfrveRfuMLn3Qfz4p8rsgaM8YwdE52u9XEJPAR1A7KLHwzr82waMvCiJ5gkuWsL",
  "key37": "spJm4cN6LCob37Dph3HaD5h7VPh18DYbk8E8QX3bN2bfKRA4wP8V18tvhq5Kht2datGrMFdHyE8eU7pRYWs7uPy",
  "key38": "4zPJso3fXGRWWvkEbbXnpu1FeV9HBvCiGfmNfYje5EnSuRqe2HHqRRcsmfxThvaJ23of5pf99seRF2KfwpCzgzM3",
  "key39": "5GfurHtfq55MkcGPSx8duMNAp8onkCTCdYRCRRLwnUdKAfc74knPn2BEVZPauxS74x5wnNh1xJyMZere2FMC7LgA",
  "key40": "4omyUXk1kxt1nzNcLMMcGxEdNE8U28gCnp2wBFEoAVtfpyYsmuW5KxZrfkZeWpgpkupaFC7eFC44XE4255oW1t5B",
  "key41": "5Gft1zUpEoLgBWGCPPynhYUjJP88EEUPRUqtoFF9r2iG8RKDV6tYNedScrhdY2MVz8Da3QXY45xrvKVjaQ5tpZph",
  "key42": "xbDD2tXynFAh4aNsEo6k3QrQBTQSV2SqXcMrzepq6kZ3FbWhHa8G5hYmXxjycbUVLQmspyKxZq4DPwxpo7TRuAg",
  "key43": "57ho3Qxci8tr5MYykD87mXV9NWpypR5vaoayqdThPNNBJcunUnPBgm73EkBKY8hWn2g5xNPWs4H7dtQF74QW27p6",
  "key44": "R5P83DmCuEtXwFp5g3pUZk3kD5MaFDebPrU9gU5XDbLjBRcFtHXH3b1kEWDFoYS5dMfYjNSRjKuALwek76qEuSN"
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

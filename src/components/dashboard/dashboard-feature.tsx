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
    "5LxgVJs5hKQAx8tEKEitxLGsB3E7rwe5ndpcgpTavpKxNmAGPvWmKGBX1e8aGjey9xA4iDEZiwXyUCmEn5urXMo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FX3ZVrwwtC3yeUjQiHM5uouk726NgtDraU1dkLHr3nUVhbeQxMVJLohAbEpe38qKEugAxnZVZSBQEufUYZKfhWi",
  "key1": "5gWivZXWTecZNPpn8y4garXHXEdUqjiirwx4f6z2arFyvPhBwVkkMm4RHcwuKDJLjKPPQdSXfGH32xiCAFdtcSCA",
  "key2": "FVZHkBqHrz4VtJrUgB2Uu8hThTyg98Fc34fhyXXFk9RMyLZHeEk2fEcpoETUWrUzpU4rf8LLLwgRsVajyVycNkh",
  "key3": "4eVJjhxuir22ZJfwhT386M5LW29xAzowV851ro7v1C1bC5eSJQcCDqUqawRy4WdQmr3VEAjr66qXWN8vtjfsqMhY",
  "key4": "WyRcyC3WjWtYT8YuXpBA6FGDheAQPcBGaWdafkHa4NnC2TdAXMG9CYXeWfdxWiRdi4LdfcCM79GS4j3U3t3T25E",
  "key5": "5ikLJ8S7TYY7btHT1rix3gQWPDhG22sUYRWUKEo4HdV4Kre52CHo6paGAz4UdGcFDefNcFavWyqf7fqLWBXhho9F",
  "key6": "3U6G887NGJsFa9j8qXTEP4dLKmvbZBjqnRqaZtgagNvm5dbqiVSGMiUcvZPfz4WNQ8sSKHefbgduiLpqn2XBWQ5a",
  "key7": "561jZLhs3BDhXedEgKceEH4z1uzkWzU1nmJfZwpZYV72gKKKzuA4Qp6baX5uCVzVeekUn4L2nq6cx7f84WynAZCy",
  "key8": "3aVpgfhgeM8onz2g8ikgWNm1Wu52YijeknVcrdvLKtKRfAW4LrWRo6BU7LsryJeQ6544DurACo4b2123ddwk8aHi",
  "key9": "2h1YAsjRiUykwRNM21Hb578qmMs3h1BLjRkXHC7AK5yuxRfNTaWo78wzFL28wCXxaqtNMboHLkhD4SWYArMe4oqH",
  "key10": "59gxTKW14oi5PPYgbV6a6ixaNKi1q4s1NedtRUxUXRnMi3AuWVeqAvJSn8Syy89E9UJLgJ86uNzrsCG8Ae8XgkAG",
  "key11": "49XHjgmYdfKq1oKnER54h72dZTe2unfBVief3J7fWNbjn5g3J28XrJsjDNvJu9UnWkAKpvuGyD2LQgdMZN9aGZFT",
  "key12": "5QTt2U4Fm8zSZomSJ3fUGfc7Mif9BgVRmmcCC7A3pzNA6KEXHCzzvrQWvBZUBjjvZ2zvbmkS4F6gveN1CxWQwMrk",
  "key13": "4t6TWLUBdPzJTrqP7y4gvQA4YDRdLPWR8Po9nWUzbKu6spn1GKcF1PiX3ypH4ZcK3wkABnUbsGzqiDT1hVQx8VDi",
  "key14": "2wLjrGQ5X3QGdEuB4TnF8figiPg6Ve1NcNoQwiSz2qPDURYNyUVDUXBS1tvzVWa8vGnstdwpuLoZHRYnx6NFvhMQ",
  "key15": "3F7NGvDAVwVGgmYFFmVVMKP6kx1YgSQaXwuGUo8wtsmmuPDtcpb6sL4NHYaJVbxbExJJip5JrmzdrBrJjxrmfHeb",
  "key16": "5msLFp2X2sTmR1NBRUdNVjtppMqsrp5vDZoBsFUVyhkyBLRv727UcqxT5zMVEeKTnhHiu31wQ66QJY18AtTiNqgz",
  "key17": "41EL84qFoZQSnMkHJympHFWkdEirnPkPKmuDbzCHLdLjKmHf9qGNgDK23jYZhy9j8mSFAYMeVcPnSkZCAgSDSVRB",
  "key18": "57qPCwyJpUYasDdnSkRo9un3DRTxLGJoSNhBsB1cvyX5sMpWw4TBnB9sT9GEMTqEojdjnWsJ6Ye13xSKnWQqe4Yq",
  "key19": "35WHdD1bcLv8hHBiyRrvn7WqqDthAjZCGAYuLp2P3UodC6gkDpB3B3Zd6ieH2cR9gqvfNKeBanRmHTA29CEqd5um",
  "key20": "uU1bBSu8xUbZjtA64LCXiJJa2eYgBAwTgdNgmhv6M3tLtzqwFLuQgMZCaouZfxq7U8DRNxfQ6f8kDRiMZmQnu2L",
  "key21": "5BqYLLnQue8RomJkDPM4b1pjMzQp4ZxZybKJhZfLsnVVNmYUo93CZZdpUSdNjMzAgLr9yFtH8QMjtzyk29rCSvK9",
  "key22": "e3wNnERwVUgQ7bSxmkorYLzYfBYywJD9vFNRQJmuEvLovco6nTAEq31gR75iwnKF2Kjw5h4TwmFupQ86QXMt7nv",
  "key23": "4AFCna2wNSPYehhYkykgb4gYEfMjdFW5fp3gDcJCtG6AXeJq5pQ6mdBJwxwUNRsAQNjyDC8QhWw3ztF9dg6KM4Cd",
  "key24": "n4z1aBB3KGyi8MgNhPxLDFdY9YcYnJesQDQMu68JgMydPMtGdqNR8G5Tkx93bwM6p6uq7f5Ke3uhnwVsotmZ9sX",
  "key25": "4abL775i85sDHrGxjUu3sWXusAuUYUEdv8Ny8pHARpYMx5ucQbfVAvmKZz4UAqdcMQr8W1CKEm5QWcfWZFMApvdq",
  "key26": "4JcYdqWaSwCXwDh1wW7LpcRFHHNinoZ3RNGXDU5EyD5D6qqQzUJydAq5b9ST9n2bTL68Tdc1sLCuxGw9LDEUY57a",
  "key27": "4k17FXzhrYbj8zuFXJXPEQrVRx1gYSkzzufizRK5GAaKC1qojFukWiH3N9RCu2RNCqpxrdptmma6iMeJevAewUy5",
  "key28": "3y7zhz9HCuWHEeHEvwVenRHAuFzSkLR5LpJhVqoR1yxqASdHqHCTd7pmeDUTFbnSRGfRTdkWBzD6txY2kLrkQSZz",
  "key29": "2CaDWY8uV3stqcvcWjGb6amVuXVJXnpZqzRfxcLKMDvs5sPuiJh9UrVaFi1kDMzGS4Fdz11NHXbJ2paHT9WQi1yH",
  "key30": "7RnupNb3rTbiwRhUGNxk8zX9AytTWSzFnfGAhKhYcVbNQjYMxGtKmuDUVGKpgABiFV7WrWNFHPkY8tKAfyQLuRj",
  "key31": "2vXsWjcmpVSgBCoYi3BbHJkXEKSBR6js2MJWet9qKb3Vy1wnM1H7jknBgshDPRhui9H4sbatF6uPhvfaV33od5id",
  "key32": "38oF3jTByo3VfwRDsTsMuSteExCU4oUkVYGpg72mTYsjtccNX28CYtSDz1MGU1Ltyk9apkwpxBExbVdFanRcCvRg",
  "key33": "5jUxUJ1wstbPM5AZ65p9sstUFbCbPGxyftsTUJJ8PNTy8UX8QWqwncw6fVE8Akpcbprv5SLx1pr4umd1NkmMoe6v",
  "key34": "2rGXxTPVeWG3fK4ZreZtJ9ZSc6TQW4mdVqBr1CyhyZ4BQUpMopbRNh6MAb7v3QJwn8WEBUrkUvtp7zt1HdvBJDMS",
  "key35": "63vs21UthKXCNnX6RWcpYTSDGHmNXKcH8iX6TEAjLZghG5xe7XSC7my8F9mXixMUmCRDv8pMREqUZC7AA2JvCDb5",
  "key36": "CEM9xvVY2ZuqT4kmh4nWzuNVTcc2KFuVLMcuW4PJ3v2RpwpWG9Hpj8XNC5WTJeqXTDQHSqr1YZuLaoQAtcDp8cd",
  "key37": "4pGsiKfiRaSSKFK5VVbT2WV45SZzWQ6e8ydjaqMBHr7kaji1hLRw4rk9ryKbBpFnfCb4di4Y1KyBubuhZoZSrjHQ",
  "key38": "54tQkL8DccJL2EPFdA4YB8NezyFHZcgAe7BNoU6LYbnXkT8oZ4HZWWivAW8ZwSnMJMxm1BJJHdSZ9QE9bZGqVi5e",
  "key39": "4hMch8m2QnzdTqjvfpnnmLN8zRCdrtJVfRx1jJFJPFr5ydgD8VCMgXSmWeDFG1VymWLZCPXfkT9doX7vEAzRvP5t",
  "key40": "WSLNfrwYiCxtHJY8jktTwghnx6zQGnFYCBwHzTfmZqHvv3uDczXvm4S1PRfGiAtMykZ82uXGy6q8bvjpUuBskTb",
  "key41": "43UUjmp9LvjP7UunYvEZjE9sTTSC3yWAx4dqCgkpc6uunx5oCuS34Eds7Yuv4uFyb1uiGg1iNpuTxmhaohJCZFMa",
  "key42": "QNm95QWAubsjnky7SrgKUNMwoogU7GkxKP7Tt57Ujcreo7e47qKvjJ3tJvSnb6FVAactgqkyD6tFNMyAfwEgjrR",
  "key43": "2YPtmoz9AHGrkcQ4J4A3Gh6bDx5i5iVmBGavC4YXWcm1YNnLMVfuKTTYEJaWtHu5dNa6BZ355L83MP1g1oVvzCvc",
  "key44": "4NmTaFr6JnzqTUcY6H2TKw4t1XKcRFnNJErQSebYETR3aKoqkqyQusk7pWDTRSqPWq9esrvEiosDWAjCBV1hDBtB",
  "key45": "2se4ZTe2ovUaM7XNowbmMircsZDZXf48ZUXukg5xFkRyTqrW59xEzRYyFzgL6krFpWpJJwwyRHKGV3hfHWm6bSrT"
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

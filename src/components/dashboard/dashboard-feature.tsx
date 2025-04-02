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
    "2rxH7ktLAyrhy5iMMYEh8MoVYmKLmdj92bnXfycoa6mpHaQqGbxgU22YFbJHm97usYgPLGmH7yYwGZ7JEsQYgeZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuatuGwtjFC6yHBbYe43s1KXcfdGVTHSngfF171HvLKJVTrJdUtYxsbtvRd1UtRGXbvDMoEfub3i6TopSqXPLhk",
  "key1": "4fUtSxYogQ5QyFtznfFZFvZHCQtdfJZCr3v4DA633frAratxPTqDxhs1Q7QG4EPEALEbNzMuujSXL9st5srPMR3s",
  "key2": "H2g1fJ1kRXgEuoMGXcDmB5SfbvamLQ4ZLhmMGJgfX1Z6p18zfqDZDZ9JVpFSTwd89ZL7TYAoN3LS8rtJUSdMpg4",
  "key3": "3MbyY8yRKLrJ8Y6FjnNxCPAk3fsW8rrNmUzF4btm5vMg6B81bi2Nt5dWXdDxgZsBpewQykdbS6uwXP6Yip92CbMg",
  "key4": "4zTpHSEi3Xmw3NL6KaKXCfQEhzeu9dphDtZcLjnUsfCSru183hkHstZMktzLiJ4mwowx4ZYBG3aqUHujNqueAawv",
  "key5": "3xWGhhjzsbsC9f3WW6THpLK8H4tauzZ3WhZ4k6VsQnxLTGYc4yQYixLPLMMEJcDvRaSedyhwkvSEaXUmHoMKWawo",
  "key6": "42SZx3FZFBJReDAWhibDBJHde7EQZVtDk6KvatJP4w8Z2e3PtWEbwzrUnqPW2oz4KfUEUbbDoYYruXEC5CVXZRzU",
  "key7": "4EdmG5cDFxi62p44Jme1tx5ajmCXAzUbiesXtjThriU77iU4SiTmUDDVp8T1djuQKVUa5HhLXuJnGGLaYvL5PQzF",
  "key8": "36bHbZ7ajPppRrzv9Qk98T4492hPGZ1VbPRoazcSydjwHWYhiYEN17d3sakxS9g5YPkGxzR5qgkzij5WHTJtkQgi",
  "key9": "2kzeo8WAHf8pEmoeTLiUh59aLsnBwgEb8TnDyQEEq6s1LvbpQWiL8RQrLfUHA5ddpd43o4hb1gfCV5VXr9MMK8h1",
  "key10": "3miujvXnk272xTndPUMNpLTtcZtzkndX6tnb8o7fKhhfNyufehKrwwSxnR962JBb43L4xBZbfszYmSCj3aEcKhGr",
  "key11": "9cCcLhB1WeSgPBebk5j3Xqh1PNKvJG77nqowgfdbSCAp1tEd2AAsuqod4C1XyUSEpM7Mh2oXJqETCJA2WpSi6YY",
  "key12": "4ELWUDkJykJPaVTiVHKbJDKW4by8Pds7u6vsLAEoEedQVTWsoULQdSXQ26JYx8EtfYCZWTBbHHPbvqdcjzcRwXCJ",
  "key13": "2H2D8R46EEFpjHDE4MHQ939b9xYXD9ZToNTB3A36bub35C5UPzNVFweVFp61cQEZ6Z6RC1sEGMfKLo4vbTsBPjed",
  "key14": "3n4uQoYdoaNnhfnANhbYCX9tqKbirydcDo9r12ptTeSKmioHkLX3pMMf2bDW7uRsVAYCc4mUxn9zpdmr2X53gW38",
  "key15": "5Y7LrW6fVTkac4gAfsLtoFM2BaNg2bQQkKuSTJqtqhYPk7JtdjteGrQWUAxsf91hAHS2nfSBk5gzYbt2pyVLsKVx",
  "key16": "3XPhbAacWd8eGhbkmsHi7RmJ1SbFL5y63nKxi8765XA5MFYT2oxBZGNpTYRpqcsPhTnphJwypb7C63ywHiJHuMFv",
  "key17": "29iqy1jgurt92WUtR2ZZtzMFgSaifbQdcbKEatNgDzCwMz6bnstNdXzkFBzptdq1TXGS5W9vXk2xSgmauRyuA4Bo",
  "key18": "3VSx37eGXZ4Hojk2r2V9aoVMrM5V4ucG2B2qmtYz8s3mygVyzQ12xca8vK9j3X7Wgo7na4u3ygtM1dz5kkWsyHb6",
  "key19": "4CdGTh6xZTW81pDPjK7hyBoZZ6jgP2CVrKSBe15wMhBQZzQTUoifXE3kVPWW6VwV3fFPGXAWVSrd4hZDonDCcx1c",
  "key20": "46Qx53SUNvfm6MjCAA28HQEqMSsVZqULZg22kPNt5ygFvQTgUbSnKkFw5KiaMSdG9SRXCk1ttB5TKLkk6Piv6JaG",
  "key21": "4XZoSr3jmcb1qv9nC4EregHorAcfS7RZAxVMd5XStXaiJbp4gBVHHBG5h5bdrsZF65umSACrzxvNJsPe7QC65BUY",
  "key22": "2k1PHfcBqKgp1J5VhEL9mCUVZu3pVXSX3e9qTFUU1cPDHTQNX3DEzuv7TpiPnKAS4qCASB4UXBjKPjvKBgkowCD",
  "key23": "4desJjqiXP1n3dks6U4hsMqHs5BM4veZVDg4nHbV8MsiYrt3yBNH8ki6nKKUX8tCSrbjbxae45D7CshbhUaHuXB3",
  "key24": "55qszQwiL4pqsKLEr3vV1BvMSKToMSFcdJJ32eYGiMEPpdrog6AWTHBDQB4SQiMM5T6M9JqPxuGiyLSjKKnKuJ9H",
  "key25": "5cQ4uxHrMW6tw7bvh33ZNxVD6fF3iERxhNdMmn9sBdbbwiyG6GcXgtsDxABvoLoSG2rkPHDXVhrCUX5aR2FjTrtB",
  "key26": "5FyaFL5YPHFc2nRyqwREJEMienKPsMuKKtkD6GcPZaUebWbjgi1tW7ZGS82Kty5oAtTS7EqWZhzvUVk38HkmTFmV",
  "key27": "4jRFKdjJCpqZ5AhGWY9QAEFmPt65hQ7SXcm3qRveWYjeExuX3fbU2bacdaENFyY6FfkmFkacMHsbKzGTB5KZwjZD",
  "key28": "32GLJVuQs8oomqAvWyDoQ1a7pvQrwp8Y3LNSmVYtBhYRx5AzMkWrETn3E47r9WaRS2rA9rRFrQn1KUNzWUX9vZpj",
  "key29": "2fZfzVv8vJGmQ6XLCqiud36ZNoZjd9z75pP8ghHkWNtk3Pvg1JVCBCHLsFiqNKVvhSd8nyruU5FM9RnnFFQWYrfp",
  "key30": "Wy8ZBpoGWeqidUC8mvncRYF4G3iwBK3Nn5UDsbsg3T2eBbWaVCYaE5hcG86p4saDxVi5qmssMEMHWUjwaHMXYqa",
  "key31": "4YtBffviGcGwb3Ty8zW3QS74eajUM5Zdn8TGRiE9KCzTvPwuvs2q4BdS3sARdU2kpHo6Vcxt834Lgu9RDRbMo5Rt",
  "key32": "L8iZY4Ym7f81m9CHCxVjvGGWaRxzUvPWeZDWhr7mS6hihWtpZc2MnsBg38LnJ9vM8PProGLz3enmEXmcGr2NQ11",
  "key33": "5GhgYHBUJLtJUjMZVPEpXRh8zmEsR6DbV4bBFwfv83DrEWx5kcZdLtuBYFg9UcBq2T4xHCsCdnngpEAD8LtUbpzP",
  "key34": "2AB1JKbTz4eVemCFGNVw2syphNMdRyyseZxihewStVUAeJpNBS8X3FdQDSQ1KeH1uBD64xHigCBwj5RZDnRsvfPq",
  "key35": "5k9uXnm4QzkWrgQr4cgnZAuK82X7YQEBGEN8eQ5iDqq2pWnJyw5Uuzajprm6UBHA4xDstJWBUF9U3bwqnuRimoWq",
  "key36": "3oGyxsxAp9TtvfXjXzy3jmiVszwZ4Zx3TnUT8m9nhazWiYbQ8qEcvSyqj2hEusfAzf7Akek3EmwS6Buzmje21MmS",
  "key37": "5CiRKBTmctu4if6XNnX313PVRckriDnEG4RHgP2uZ6MqoFemi6cpQWUjKus12bvAaawXQLEQZX3CxpRys51HdyH1",
  "key38": "4J834ty6pCVhvWp9WyNCTs3FrA1Ws2xgq4SUQVNE9pSj85rnNPhwWVTKLXAhkgc2P89M3wD7CWqq54v68CLvEP6P",
  "key39": "5Y6vy2s9oMJBXkwiZhRj9w4mVwe9rxTuv87Z4xSnmTuEyTBUPG7Gw8zGBPiHkZZptiRtPFdLnYfPWDqJpf8yTgcp",
  "key40": "yjkE3EYu9LR8Za7tgxyCSQHwLovhYyZJhWAvszgga3EC8NEQqLCHD8Cx29jkqzXK2QNadzzS1AHcVM4cPvB9Tut",
  "key41": "3717xktEbL8SCCMWXbZrYCHcAM7GkKqh6T7qzbRtvdTYqwdTQDuKYb4FDAjqzfb3pifATSSja8Nv1dgtUQFiHXnY",
  "key42": "5QtsYU6V3qLyrkwdjVv9SRQpatCzvW61Gifk28HoHKCkR9ZizXCnnR6KvZYLUPoorEZJEt87fkHvg3PMKwNAJw5p",
  "key43": "2WbGciAhXMkzZqoWepGmZUQcK5XNiLjAgHYzpKvamSPAj1r6ep2JTWfFHwkXJhwhBzKXGxoUs3cKo3VJZf76NJCu",
  "key44": "2BQeJg1puRvxygqg4mjrbpuvhjmE9g4n59PMqtA1aQrsUUQmaDpNXupWjdKNHMPsQpacAtKs4WA2ZAuQX8tQa91F",
  "key45": "3sHV5SmjZd3qhmNB1SiRV4s2cLcypCG2T3tATACttNuY9nzJazU5WYgYK7x1YX5Zj5rSgv8YnLGKTXqE1guN5k7G",
  "key46": "5EQu9zEFipZuXDhXEqAs76KM1L6rQ2oC7dMNDM6QLZTBkzTq828ra3sswyxzKMeqZPqvAK7DSepgQdGC4AjyDfAR",
  "key47": "5utcTh34r5ApcKsUc3tiRoojD9cJXNQL2jpdJYc6Q5mNvfCU93YVzErPPsSFnq37ZNTAB2jeQMiT4CJSM1Li23Be",
  "key48": "3mT5ofzr3pqmGAy3meuzUtH3ygyRkWU52qD2aNCpLHDUfTWTyhj2iRCiBz8Q6vY6AYZCftGDmyra32GPGQVzjm7a"
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

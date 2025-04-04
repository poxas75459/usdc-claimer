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
    "2j9X4GCtCC9ySWRfbLtBS4jPBu8vhMx5jGB8obuW3wdfC17CgBcGbDHgyu7RgFp9T5Y6VbS2Zoq1tZGhWTpxYuqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1KMrh8rBAT9Anx3stV6zweE4qs34Y8qrcq9efFQGSqMJ1BqJhQbHWVJEKpPd8kXdnRGqU5iH8b4ee1Y5Y1kM1S",
  "key1": "5hC35aJXsjTf34NYJTjY4A7cgbj5cRznxjgvjfE3XWuuvAkUZs9cp2cVgPUMUbZAJHtpsjV2b4hUWbxrP4pKeagb",
  "key2": "63fUNBLa2KMPvzqFwUXHCcJL9arxsvkP4dxsfdsk3aXi5dtdmMw6sBa1LDRy3uKacbBQzB89Vj9PWhyivYxwCMzp",
  "key3": "2oazGFAXSGgE3jp2j5RVX2kJzMMgFNLstbB7aGvcN8Q7ZdZBfBgpeubJnCwCTZqNM9N17e5M7cmUPvKPRevosaca",
  "key4": "5pN2SPgPAXLBm18tDreUH5MZNcfhUkNQFsgYWVvA9zDNjoPBYbQeFXZvpNZhHc53KB7ifXdpmPDCWDUsPGosucQL",
  "key5": "3KRcMBBFAMebKvCpdyRXfqNJKGhP8vp4SxPqGrmX3DJmoFCWuBnyJZi7nR52E4fKYTm1V4pG7XqEhf1wzdorvHM8",
  "key6": "cn2cRE2m4D4MiwFu4tHYHWpVGVBz6dV7ps4Zouy9Gmx2Zv2RiuE7TY2UrTFncG9kK4WyXAbMa2XcAY3XZ8wQ1YY",
  "key7": "3mcQUnkRsiFguWwPExNrKAHzBzCJLFRqwREknBKgsKoMrAxH8FfLA1Uuk7kP6PJNhGMSexxgjJqRFUSWQqHDv1nD",
  "key8": "GiNHjyjE4tLWwnYoAoDkeUmYvsh3uT3KEWh9qnrvDPpDhsJzcj5s2AB42a61fAhJK2Lvvc3xCAeo17ZnsT74RP5",
  "key9": "A4qXuHB2scb32sPojNvrXYwFFuUQoGiJ9ZZefgAKnT4rJ9ZfqU5xCPMy4T2zfr7sPQsPtGibjjW2BJqVWGME7mr",
  "key10": "PL7S6u2C8R8h3UdwSrZK1K9DWBknyyv78Zd9y2F7uNnzxwCwEVYwDrJBHHvjyF8N46qBQadk5rD4YxN14AL5D13",
  "key11": "GeDhmhpYyCygj2Nqgeo3SLXYzdwX6uuRtZW7esB2mvqWp4f2SBCB9AJEH5Wmn91sewB8LU96QRgeugZyDKFh7ar",
  "key12": "4rNXjFyvwCMyszxCpdUjgM6whTf21293EnfU1eWoizJUfJuqr7VFFb5iXuFmDN7uPaYFJ1FPDPSjvXrijBjZjtVW",
  "key13": "gZHFGcPzeE39ahcuEB6vsfhhN96uCgafsAu1r6aNw4FpzU3KZ8eDzmtjZWeNfCHwAcLL9JN7vohmoz4RMVRg9y5",
  "key14": "bjMKPXhRkqyJ6wtx9FZ33soDvNfByXwZcC41nKdcidsNcgpBdVJgAPXwGvqUnvpzuwmi5FXBFGtSj7SdXhV8v69",
  "key15": "XMnx8d8DL8RGb7spkGyaVZY7EvAHscpEKAwbYPswWEH2Kjnwu9AkLDwgtUXqXFwHttvk63oKw6WgxCT1BsP8QnK",
  "key16": "5Fwp8UGXJaJYhjaTnAyAKVe6gUrP4AHJPNaCQvtgAar71SrCLVX8kRX8ZfECQv2vHEsRKdkYDiLafDSztDeNhqt5",
  "key17": "3NA9U8J4tUod1mkif2kpxh7TYAnbrwXTfMzhrdFVdv3UWHe6A476Yx1Br7KWQfKXEhMiQq4QFMpKe2hoXs4pvD6b",
  "key18": "gMU761K7DdxTb5mPCdckYPuVVQ2w4RscDfS8P5sup8Szdf6upLNdXjMY8KvKcnKfzRRf3AK3oWJFAzQY8gAqmHb",
  "key19": "4kLLVzDVChAZYeQzRwULXmPzanQCGUMHw5k3mEdTG2Kxem3XyB7hsVsLYHeV26ivTwTyVkdd4S3Nb6pNTjVVqdvd",
  "key20": "2pvp8X3CURNqjXajiS7NrqfXuyYgpvaJergHNfTZpTFwwHstVxvQiCmXm5GCntfFTtzsMDAYLuvCHuudiQDnzqZW",
  "key21": "5spRMSvpur8zLbYz7zSiipPHm1A3rkTE1dMrVVqFyeCtCUyBugDJFarfpgDNFu7fYEfJCHbDPif9iMrfj3hsCrUs",
  "key22": "4XESy4pWzrRYrBBBXcdYGLos796tFgYY3DduXr3fKrJrtaC43rN1sX2j9cmVmi3LCbzvHeR6v265nq5beSzSaVkk",
  "key23": "2ercjkxpdVpgXsimSWRg4KuAPBCRk6HX4uMBzLWcLaTqEGpZZViZsazynVnJTTkYHQFiet646Ve9e9hT8zcyqFYn",
  "key24": "5FstCNbBhgVcnRaNFTZf41WgaMiV8r7fZosekLhjmDP2iAqVFg3qTgRm6MvoaspKWSJg43KM5sV3uYyke2GgTfNj",
  "key25": "4y7AMY83aF9fUDaJ5zA62PMbmnmXY43WnGZ5Qjk4JYdRXe7TDvNRFLs3fkNJXvUcFJviKMSLFHNYCSM3CD7iaUUF",
  "key26": "2Qwcnh9XUmBUTozeoe2EvzW6RMPsrwtMo5Hrxpi4in3r8RCvLcNrYbUZagJ4KSPxBBDGEgJACxuHzVzjfwiJ9ZY1",
  "key27": "5J6V9uinYroZxViWor9cN8EtMqCsY74TQEDuJLY9UH8oJBkoEsYhNS88hPWHcSY2nCGQK7jc4t9841AXZSyJe13V",
  "key28": "2d2qomKgw8ae2NtHAR7VDXFd6oPyQ75ofUQtYxkaa5C7AhSACqLqox1iXCFwty41QseTbzRtFKF2ajSYsccYtuju",
  "key29": "4snQcyPNmnwTt99e6PXUvEDiE4MQLZFQSE123DaQ9QfA481p2zH478Wwbrfa3LyXaC5bubip1eiwBvEoX19cMDSE",
  "key30": "5CK1PY8ZZjotmE816MPVkcr7Tfoi7evu35d9pDi8XxX66JCVZHb4rg9RuMcAUDBUgPVNxdGSwUNKvV3earFuNFB1",
  "key31": "txkW9aNiX7eavUXcHWuQjxsXK9BqMt3PGjxZNPv5U8brSsuwY1eVpyUt6UqLDUCZ4Tx3Ae2c9xTJVwYf1ZgDwFk",
  "key32": "2jPsBx8iZctezKkstrvsk4LQXniw6BgsyXSiEStbNhbYaAwQjnRwYVDfmo1Rsjs7axW1StS3oNb3xRLVrRtUThuY",
  "key33": "5zPvKqXuQSESpsjGSQPLaQnUyNemGA1j1GXhxjfwzC5z18HPtye86nK1qSjVi6k8ze2qAngtkCyE39FGKsiZMouh",
  "key34": "mU96kvA78TjzzYgg1Eij4KZ4Yc2vcUyS73ujNjFLiSMUFB9fQ2fKTkivpaMyWPKSTCZBsesLqpbL69xiWyULBnj",
  "key35": "3pp5DBxVguBcneTXJK3wUTevFBpSjA8A8kDTTMXqwiKgT6axKo8LhjAgqhS5iwMjp9v6NhY9NUNudcmApLBsmyvf"
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

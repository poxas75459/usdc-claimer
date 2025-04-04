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
    "65qAYSqekSN8SaLFTdcryaQ858uYjLk3p8yTQTNezoFwVv8caUuhZLQN7bp5q5s1hiEzidDrdTi37kgTmEVBBUuU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fRLGWUUvb5bvS2Qa67FhJsAQdtsXruRt5jXBEKsmwRUpwfQY8tLFnjZn2FdKxHVLoFYub5Fpe3q46YQMesLXG9",
  "key1": "3DByGPbdCef359wHGq8uHNERarKPz6ZihCpRo88YULsXuTd8ZBdaeKwPRARReum5YcnepvNE6rYCdT43LY9sXLH3",
  "key2": "3AX5jC7r7fREkvXkcCr99jXRaCTYG694J2u3WVzZ9FRd5hXSAnCKKzmxFpVJJoVxYRpFeXGYn6tb5UuxHAdTQBvo",
  "key3": "3HRVjnz44x5BVCUoV31bGAdEPUf2Bf9KGjjcNHqKzqPZevqfLVuRNAwUPDA9CtSoigypF7r5xFJf49hAtqhfm8pP",
  "key4": "4UnDDtcLvkvW286E97jM5wWxU7HREMmBRuDq78yMmxcbipHtNSyMPD5uHKCcCdU4sVRdbaaivAUXKw2cZoyvHjYa",
  "key5": "4XT8HLSn3edjR98ndYziohRstvfhuxWvKpWzmHnWMpqSge97cqSJX6PmXE7kd3VSREmhw9rJS2ZquN2pf4cx4XZ5",
  "key6": "5q4kKnP6tASyPB5RGFdix83oYaoBUZmTYK6QGGi6zz39HjBPSm3yW83q6X1js8B1zt1RUHhTBV8nRdCqbMNHw3oo",
  "key7": "2i8EP5EnerQGitVXgqbraJoCfKXdBTd3dVRXamsfREpuA2NwrEihsPXaL6bf1DVvpbv3wESVpgBoGJCJeJdyyWoA",
  "key8": "3RfMHFhYbWpEmzzeJbSeDm4aAS2FKzq5MxUuowPJMHRCKw7WEc99idH2cTu7XSag4W2DaDMsn3e4UfXm1JX1Q6yd",
  "key9": "5QGZ5k5ENFhfR7ez3rPUC7ZNTegFFmhq39HkZQb4SWDVFTjTxFTa6qT7YJGWjUDj4zDScpq8kA3GoAbBgK6rDogL",
  "key10": "5aMSvC66EJcAtof36zr24Egnn7yesVP4SoAuZeHhtu8tFPs6zrSMcdne8vU8aFcaFPgSkS6uJqAfnBazaAr2zwCs",
  "key11": "4n2CHM2XoeD2BuqVVFJogsaYe5RJcasi5ey7HMZf3RYnGNjX5zqzhxdciRaJtcjs2e5KPJi2WNUkiRKCdtbYN1qD",
  "key12": "3ax1eaEsFrt8jsQDHFUmcJj3w1nff811GDeMZdMYkEWJhRjnVmhNTaDWfBsjSzBnoMFfwPRTFh6TqbEBWN6Domad",
  "key13": "19AKRHcgzW9ZGhGLsnnHsreTwnAjqyxDxCnGx4Q6CmStZ3W3e7M4YxtPZhwu4a7vq9ykoRkaBNjyrBQ52JCDp3u",
  "key14": "4iv8hQ7jNo5ZaZcJpxLg2CJ9ke56oMLke9noVuxWFVuQjouqtKSqbto64w6jgMKH57eMAjceqoFza6R4GoCPo6ve",
  "key15": "3QCSyacPmuEYHbsAazr643z1SdBHa8mcJ3dhd8FqY5mV3HUBtPoUs9cRaxqD3TFUtKKdmyt5csWYxN9CayFkvYnZ",
  "key16": "4WF6wUspVUBzLg6AoJHZ3ZL57A2J1NqvvF7QxdnCCdPGXr1AqChn6KYcnc75mao4wKdRvRXHMacx5tHDvW16ACna",
  "key17": "2Vkb61v3F5KPuPAXy3pQAKEu6mEdNxphTCb9iURXEfoNyJfjKSGDx4yTLpczJEzXnm4JuVpLqhHgxTQQtJQTjNoN",
  "key18": "5998uKZTNQJxg7XwrFbL6Dy4DT2hYvhyArZWrUCY8bsiwqwVVbcG2yUndfMwh6fKLpbrER7AtSMqXmEqMQAdLkyX",
  "key19": "3VVgGqdxMXduBtcybQrV2JiqcLaPopeTusugiat7wbhc7VbEe61RKa85BFf6rFmkbGrPMMzcDazLZ2upauG9Mg8o",
  "key20": "5EMJkXGkGSCouJpHfuJ9QrSsnwWyHXcxyXgB6XNCw5H8GcxyeP6sDUjkVAmLu3sgGACJ9bdofJ1vC2fLRrWKGh3K",
  "key21": "2ir8Hyjc5s6rtRQDZWsTPCr2Ep4rwPqvyehiwy3mMdvgqpDDxPEiYw1tbxB5NWHWjWUJonvNJzpFLC3z2NGrM3hz",
  "key22": "3wn1EQW7236iPYVPCwX7R6RficLnfddCd3bFkhcUTCuy47YGoUxn7ggiihuEvz9VzdhtxDvEhF5j8Su8uLBDVbj5",
  "key23": "2LmfGGAehXS5UPXFtXG7nArqZzaakoEayJW97zGwx7Jv88feqwVKDcj6EUW8e2a18vHUcPT2J3U9hQBrnFggX1iM",
  "key24": "5CB9tFDkKC4yHs3G3T54Z8njZFaodYj6Rzd45zPu5xhotEnTMydHTuauDyPmamFeZJYY3ddPereGvsifsrmDaHn5",
  "key25": "2EqTP8kzGF7pJhNhESyyJs9H5UHMpmWgKBsnSJEhq2TmXu1DPxkgVRjGd64hgouf495463vcYd7pDYFh137X4KMm",
  "key26": "7CWHfe9nQ6muL7SBSv9Rutm9iLn7ah9fzkCxyJRXgMoXDx2KL6LGaiyGWc7jmZo3LdKMUceFDgdrpC8TMPYNVpY",
  "key27": "2DVhLbkML29X5XvSx1cESmwvQwhPFS2LG2phu81Nw9FhB12nuhtarscoEhppj848RHdBQ3gnJJsghcAhKSS11MJS",
  "key28": "WKcscecYgMMd3UHxGbRgT7CRDYFqr31gs8YZfvtP7aNiFVumG2JURNPvcGm9AHRpJiQZMbnMN52YfnHd8N3wSjB",
  "key29": "yL73ocLCt9f7zDURcgM12r228yPpq5HWWZxA59xM1aQVCcSd9ewtWZfz6TdPDnzkHDxVy1vnaw9CEddwMCF1ds1",
  "key30": "4noxK8t5aXw8BuH87tTepQxpauadReKrzx1tCSTBWXfru54f7LtWEiaPHipNWDccKWMpdZyYjSRWvbhDSAWdco3s",
  "key31": "5mUpJ92TuJGwxBxCDZbRQteGhhK6CJyNPYbJdX4fFVMVnipdwmEMhqYNPS4UR6kjdPknizGPTqvRp9CEBywTkV59",
  "key32": "d1ct9A1bikgEq3MLKUKobw9JqWv1JfkUQzuvqkLGKm1ZKp2HFMkSPipRimNDFP2yq5L6djqxAwuLmCcJeH75w1s",
  "key33": "8AWszqPd4xdgZEE8UFthu6DQ4EA5PxnLxaGxz319j32bRDbt6Rwk6Zb7j4wwT75yEVPrAAYaU8HMRa9F4kf4Pq3",
  "key34": "2yZqmoYqcTQPJjXcogmaBXdkKf219cfkWx5zPYpzvLx8vCaQvvvSe5wkqLVgDPAjrtEMijSc9q4mFHx39M5KejEf",
  "key35": "5A9XBMaHe5xr5jvJ7tDSFm9PrrVzUhk5h4zZTyrBPzy5coN3Sjz1uRt6uCD4d8n8MpLeyEiyPV6upJW6yK96WDX5",
  "key36": "4MFihbjvGNL2NEnPfUjMhfxaswdmApjTtMJ6c18CBV8HZs1VR61RkgdrZBApw3c1rJcYG57bTyyjxXtEo4k5zKYF",
  "key37": "2tzqzoYf2UiE2HJmz3s5pzpwJbCNiSkyHAZzLXpZ1R4BPXeTisMFQ39xJqrbfPJnDFp9MuCCnJHupqZuimgH7KPf",
  "key38": "5WB98ta8Kfe7msPoDEWpPi745FoW1FzwxLTkpq6259CmtJXTJrb78P9DftBiHFJZSz9aMH23TU8txgLxXEfbS3GF",
  "key39": "5vdTtbyiGapC6vtAQ3oBDjo3Dw5RMzkUcCK4h1ZUaT3i8EjsTWbmDvd9GZQspZDjLxCL3TZDgVKsvmEKoarMiApo",
  "key40": "4WHhnVPchTbZMnEU2tUQdTXG7NU3iPv8xGnrvKAXtcocHzqG3ae7zWDHSvMnFWEULUdAV7pm5Ra3NgJoCFsr1Hrz",
  "key41": "5nyCNHMReZH7opALHrzNBV3SWtzxmk7wrdwUZw7LP6HKcvVWua46UPcXYXytNXHKEjvQKkbPsmD2xt32mqTebgyX",
  "key42": "5UTJ6i5Xok68eFGb5eGDqpQhUYmXGsD3GD9GHQBYE8DS2iMtyNMeyyy3Jz3K8iLJadCBeaDXgi1L2ZFH2LR6v81S",
  "key43": "4kpiJLoDpdhuNsXiecs3gVd3Nfqt4jKj1JrR5vRoRvuMASBUD3Q5ofvv79iJSgrVuxVJFYZi8vyYcAxpSQgtKAyg"
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

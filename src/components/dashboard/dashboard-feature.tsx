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
    "3sRFrvq33TgHvZMsnmXfSGgRoX8nWkgXumKcGdRyWCcfaYcNQbN9mkSoxZVQEX1SCwb3LVXhjWvBNKnzGQPyt5tH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yhy7gW7idK5igWujkLM7z1VWUodCes4xToFqoWMrc595gzGin7PABMUUeRHrZ4fFagbA3y6nc8VGLx2gwvmHoTS",
  "key1": "5UdModb12LPdvWQcEGpsPdBdqtk7F4pouGCCGu9JbyPYrtmTmbVdzFPXQcHNFGK5Feg8qq9j1zzT6fiWDiD17emd",
  "key2": "LZda3DuEGxTQ6pnTw45AUQBFU8tRpZy2NPH6HU1x3QLQDRhZDo1yiQgTME7kZv5LSC2oNfcUDR9PD1CQaPifWxf",
  "key3": "4cBGZiSbTndmnWkG8PG813rCF7k4KtZZDKqEJrEUG8LMkedVpZDwvTSJBseCAUWrj1Y8opJEqWn2VuzVR4GBcvkF",
  "key4": "3PhaLno9mGgASLTWniMKiWhFn7j9RUjk3dEDnbPP6SNpCMNTudTAcuLDEtquZTpb5jf3HxGbLdcLeSqTM944Es7s",
  "key5": "2aErz9ySuTwdozGqwFeiKDgAh9Rt4HUYYpZpqhCc7DM7YGhjr68Q3s6pJnMTC27xTMQiqLc5kaWYDdRvLZm7LTEE",
  "key6": "4GrQM45Bq7bSu3WAUb51Tn1yMVYEJCEa6NuNz5W79qSgurnfhvMCixsofEpJNsepf8oQ92GD9izTp5izRHsfDZHn",
  "key7": "2vKf6YpKrD2SBUszXW2pYAvtbdPu4hSagyf9DdWhhQVmupWo1oygWpwRBKxhZ18AwRsvF2rusSeyETE5hJ2cFb14",
  "key8": "4ccFHrKbMSgCXr9VGgYGVemyJ5jTRY9oQYxgHdeW3pjT9ubJ98DsH4ADPUZsRZuRkHVB9RvdP6wPUBcCFCxYJTvA",
  "key9": "PY4apdKiqCrZpLhAX8g1Mbuxpo7BAQahgE5y6kSCTBickTYdHa5kQMGb1fpUUxrR5xcY5aSRkiiVHMyxGbfN1CD",
  "key10": "39pfHf4FdLfABpH8yrtSLnj4T6Xf9NwV6cyticLf7GXGE8YXWavSy4LKv6qRECmR1GfUS6E7smvoypcqbXtvTaK7",
  "key11": "2yQ2R3K2JJmjSHvu4DuZD9UZ9LY7xEXEqEGvJsEnSwDvpFAP18oZ4paByRaNEJ9BRVZKUUmZ1Wg2U8gwxiz6cPE9",
  "key12": "5AJwXDPr1UixVTM6FqnV9jiDyQ5EqG2iNkAiQ7AHd5ousvULQGvrFNj5bJVy7qszUjGYjsuhdLZXSqFnSepACiJ5",
  "key13": "45Fu1xXd77TxvwAHh2Q6mJk8dYZJQfFcgNSaDer47pT9in12iUxvG3bi8wAUW28nMhFVSzkD7DHcexUibHYf3rcS",
  "key14": "3u8XuE2oZ2p2USEZ8FcqKEuqcqYALEeTaXknJTbVAC9ykE6CeCa24UqGxYDUTBU27tihu4cKAThTemDkv1n5bNP5",
  "key15": "3CA6tYzWKgCmpeELfYWDbntfin2PVNpgmzDRiXoB3wvGEwvAjp2HynvLeYFxBa5ocvPi7ByMv67Pt5k7JnynsqAd",
  "key16": "4ipwbVNpBCuej5AYDeoTt4gN7BJSXssiXGCCbFgFHMR1pydV2JsvkdCyfrP2P4Eckkk7FYeTWRrDqubp6byj7aBq",
  "key17": "2EozNESfVMLRe8KHrzamcQCbMBEHcYUD9nRS7bazCD4zhpp9WkCVGw81e1rUogQApZ351N28mhunT76teZUhYX9j",
  "key18": "67Re7PboS8DRPzUdHPUuef73DyfGQV5vY18PTu2yeGU3sse1iE2GVrSqzrVgaww9g1rCEbMB3LiD2VCDsfWpP4o",
  "key19": "4KL1xfrs4gkHqdMFRpTcsatoRt75ijpYxsG11k8SrQuwhZLvpccMtqeuRaGp9hAhNcbyAEvCZdRHbQV5t7bTbYLb",
  "key20": "2ToUn334LrVntBZEZSX5A8Qp3KCkuquTD1Vo5uEB4u9Reg2zTyDXonDA9AGzRofNeUWrqoMw6VMwmF3btpmSygKW",
  "key21": "5AKzLF4ssBaAvtgrWoVYWcq1hNDBG4zq7n31NeudMjjKFFTwWrkAc9uczeX1rKEPkEETaXpBikKGzr2azccWQFMn",
  "key22": "PE6dMwWBGxok5BqaSfTtnmTQ82qE96vV7eNSEE31v1kM3BdhLWg2BCEKLNxVPFqBMcy2HDSWDrLDL4ghtNhW5iz",
  "key23": "2v6gAGQfKaeCRV3KJXHPQn3tmtro2kYByHjWzTyV6fDcPV1DaM3GVa7cLSJgFyroC2gsb2xafYgxYVQPcQzgpcZ5",
  "key24": "4UeYyxUSF6BNLhbSagr5cZjq2CywKuJSwT6VqWseg5xo7pLwqGA1zZgq5wUh8L1iGQYUa2c5ogfiPFY9ux8orXTc",
  "key25": "bX6huEXQ84bUqMeujoiSpnibhbTWkgMY6LWaLA6efE7DPNgHTvzo8MMtbt7G39a7jfchrjuprMkDn5aC6xEuq6m",
  "key26": "4BqwPrEpmExYL5XndV5zyDwGd7MX3d7knzwMDLuLVMb1tmUn5KdR6c3ndPRfuVuE2XWkAJKonvkPRaKQHCnnwD38",
  "key27": "2v7sfbebUeMtk2CJa7SSjf4V9XsCWETuBALCFeKNaLq9ejPnWwcTchrPVCGqF78Ykkd5fejjNknqqgE7nKwJZWr6",
  "key28": "51aqxa3y96qPjMT26EhtTj9ENTiNQFnjmDKajtqyTALwUqLkb6iGVoF3UttDDRreYmHNZShM33EASxgG4ErXdK3H",
  "key29": "5htPXpF5crSijLdv3sJeX3uqHoNS47sbssfSHjHmxUCkDTWYhsLoGkrqb57pZMeRWMBnDEFgKHbyx4Wg9xH2bzEo",
  "key30": "8zd7zLqsRo5iBBFAy1gHt9vuH4vAnADQZL1TuoubzYMf4FQA7ZN6RHxq2761mLAMw9e7FcWhrMuXR5WENRN2nvd",
  "key31": "2QNhR43B53Vn6ugYDf8Z4oLQvY4iHVAbW9CAL3gbD8NQYo8dTY3UVeKfrPEEGJaz5PBAL4vezwa5hs4z6xZgudL7",
  "key32": "2qyvapLNoTh9iQDPFjF6WB4kGutBJbanjmyonRw1JVASEEP4VYRQogjGnecbyPWXDYm6PPihrJFqbxwppdR8Sp4S",
  "key33": "5XHBgZPEfSvFN9xPdQ5EVs6qZfndnhpzhXpQCnVeFiDsaF1UvV5PHEXsjsrDq8zEgPFNnUkokkXCEqWWQVCmGhbC",
  "key34": "5LXi5ifUZs1VqQw9zzrGgabFUwUGSCeWKXbmqwxeQFYDJoPWk9pECyGYYjdpDZssxqwGScESMvwK9GqMJpTk69Sz",
  "key35": "55FNGePshkxrDQqGJsxRc7PRbYoLsKupiTMisJPgnN5tRPYouRZnUAP33Kma5prHQW7poNumEwQjjuuYTJsRmSrK",
  "key36": "5MAP8fuvaJfDw2CobT29Q7TPJUnMYCqmzW5UMBFt74aNif9F9ZR46qZCweQVo128k6V9RxCPZ9T68PPvdKGT8oL4",
  "key37": "5iaKiEmLhcYhHNLLYKUvjdSkYmfBDYVbgUbbPGMfYULEK3REfCukCL2qYZgXi6RH6JrKP1E7DLzeurPK8uhzDkM8",
  "key38": "5J2KP65bjShAheLgxgWySSg2arYshQ3TcpXSaq4ppsQ72bTNw7Ku4MHNZTca4BjgBKBEtqHTacjWC4CqXoUCLujT",
  "key39": "2WBMqNUJZ2WvoXE4ppsoxJzTWDXbJUie6WDaZ3jtVRCGVGxbwfRE2x6TGAMVcnQPJLYsckiJEMm1Mh3Yfu35rLvJ",
  "key40": "2yuBqPiVMZXHVy781nEnHxygfAR7NNYa32y2Mtvem58zpo4nZRdVyXmGnqSMZwKrDu2q2o4m2vtRGQdTH2ABLxYp",
  "key41": "QVf6dvUig365X3jivqKCiXjLUwzcbbVenL4j86oFTbtqnRKQegdU55UQ8AtTZ8zUEJWohiFpkQn9BTcYh1yTCDb",
  "key42": "5avgCibBpMbPmStWLAUDk9xuoCd9SwqWkzTMrnudEh15FHwPkZVfVCvidiMTwgqG9d2RsDm8gibzHPWToMyGcNw",
  "key43": "5DgC9qrdrd6JifrUeg7XTK1U5ZEEvz7GK3pQLjVCEZFToUL8qx5n14H9dPNSCnvAmX3tTTD9SNhyEQ3ENWJTkeYg",
  "key44": "VCMfZLiJuBPmxgGKThgH59gmSHUGMvLhh5UTe1ud48k4587LBhi6eLg6ieq4X4eDs2r7G8w1piaBsRSmLrQN1qZ",
  "key45": "5bf358b6T6c9uhwnUfQCdVnvPheZA6qimnnCvFJXkEwpQxp4PvBJvPwWsBXEff28eJ2pQevDQB2u1u1jTSnJspRr",
  "key46": "5X8XCC62J5pHxjwc8JU26bAua832uHVDq69D9AVnSpe8J4uLMr7wKbuwgfbPJthKLo9Ry4Fvp5NxkFAdTZkAfHQC",
  "key47": "5GiGJiYrnMkavdTW2Pv9vf6BQZPxqedMFCNgN7yTTDFUKLNGqRAhWg1qwmzrZJkd4uLpwEn6VZLt3tH2dCRLPbKN",
  "key48": "3wpxDomRBc1wBXidPU8jmECFhL5963KD8Q7NxgubS1smDdaPvULptemXmbBUjn6SrnDNPxs2fP4dxSMr1ayCvqGB",
  "key49": "4drqdsRCnY28pdANxdusrMLEjdfXfKVadRQwJmFfGmDpbd7vj9r4GuMSUDCLoVWAqRaRx81jcBtuydpoiJmL5rNZ"
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

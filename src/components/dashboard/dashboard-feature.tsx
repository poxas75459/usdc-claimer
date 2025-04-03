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
    "hsLHtkgrnToZLbhi36jSJPzWHWm7PpnJmp26vwp4WLVSFF5khgeoB2nuhwwfNaYw6gRXLSd96PK68rLf1PtGf2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rby5tSib7mixs5zVGYr7fhQoxu8oJS7R5EpCNXfgwZHMzvkhd749uYsGYbJvsvX3mQRH3acJrfWjJNrERH7XQtC",
  "key1": "3iYonXs4y1LhN12bVLuTeL5VgcRxuVmZtFwbSXHUFBphfY9frMtNQrEArHXJPSW3ySAoXLQjrT6zLWXntszCZ45q",
  "key2": "32tZh9YQr91MtNayofyaA2W4Af7KvkBVkPaCURc9vvX2kZUXuMhUhLnv8NvNcvRHtJRFPoyWcyftncN5ZjhhFKNd",
  "key3": "52JXxFjk6qQVsfesH1coL4FLfBRnnPRq6H25Kx3G4FZjxysGuZCRzXuzwyQR59ansZkQeEsE1BWaoLx9kuuZLtnC",
  "key4": "3PfbnaWh267DpvGLLPvBSNR5JeBZavGu7z8oraZ4eGHAFtqa9vJyvDxA3qLcWoR4Yq85UFoJpSUxo77FP7fPsp5J",
  "key5": "4QXDG4tLnboaY94LPcFCKYByjiTHKm7EkYrKkggX1xgaRU5mSeCsJcxgXf8GfLR5k7MMZHAB4tf3p7Xc5ZHjnUBq",
  "key6": "2mEsQbhuu26sfMAzxqz7A2oKUwj1ovhWTpYDRDkAvzqMoNuNErgPDozM1eCf6D7D7hwaVYGXnxDKQg4PfqSNgCaM",
  "key7": "4M6EGu2vYVcLxdj9mtG1rfbKvLkEykm7cCXHXMEgQ6PyKKioq8oVmGVDt1xVTudSd1Fs9obSYKHqUXxDTgsojRS2",
  "key8": "4x6BMWEArPjYoVJDoSDtxANMCAQsZH7P23AnEtTofHzQMo2fqZL7aQ4xLeuTu94AsGH9uv4V1AgWpQvbWa6Wrq5J",
  "key9": "A2XZ3BdcoHCMfeCPvZfkNYWDu5bj6X9QLHMQgjHrnjhP7TECKU395ypykuhoMqJhQ2XJ5Ui7ChAKeZ3Zq9RaPzd",
  "key10": "73rqweBg3hHCojG3t6fmfMeL95h4PTJDUhKmW5FbuWWUG48ZR9YM5FuZwSNJ2onQYi2hwNwoeSAR4mxj8N7wq2E",
  "key11": "5zngVye87cxQGWH1mqsGQbHDNVZ1kqU3o1gVfmPyVmXDUHfUX9Smp4eMD8W4fuqiUYztARpF24scB47Zwm5H9MMW",
  "key12": "2urSgeHiBRgenBsjSwRYjrvLjXRm3mcsUqbdt3VZcPLKFWoPENxXba7SoUhVxAUevBMGF4qiJdMq1rZybZQNrpF9",
  "key13": "ciBcHapdJp6vCaEHc5TaRTHq3ydv4sV6KtgNFN6Gu3XcvGfyozxFeLvjoMSgoCyzCbgqUtTKaZDvhtXMJDejbjZ",
  "key14": "4ML8Ffv8zt95xYwMMPiGaHzXfrWryCd7u6XUbmi4Lmo1tJG3ZGVWMg3pueKRn3QPsUPse525rrDS74HXwe4vTMXR",
  "key15": "5s5eBfeKoVUBgwbBecoxRpxLsBaQT8GoajiXAT8XA23BqFVqjBh2r9Mtx2RyTBCHP2etpAvbtBXdPoXMWiE1iPy2",
  "key16": "4CPaPfYpHTaBHSAH2W57kACHb81iyCzjhgWYdzuDDy823aaCcqqU8up8tvtE4tgEUQVt4BsxAaRVEM9ovEuQaoRA",
  "key17": "2WJMyyZjnea9h27EGRQurgCtxdbo553BGu29oVYLKBKmdHs5cncW9UF7prXuBj3nj8tszyuSvSBreCiSbW4GMhjs",
  "key18": "2P7yAYiwb8rVUU8548U1inbzRPyuNkZDwh17Zk8H3huWQFPa6GTUg3dz8mR6pbdG3TZ2wM6D9gmRNzk15VUdcK9m",
  "key19": "5wg9SGZjEUsnDnWNH6uuRcsQAVG4zx8LHeDSzPvAQYjBvY1aQRgChtY4ZMFsg5QxdcHFuZuZUTjKdQGDNBRTpfKf",
  "key20": "3huwTiadFbhNmwAXVhR1uCS3BpYdoyGHeMzZ1e9cVhgAa5nqtZBqZkc3ih85hUv4cYCrHE4cygRDNRmm9RFXV5sH",
  "key21": "2XsXt2j5WmSXUfenSnmmcVFHNc7ASgYDjfD55A3Q29SmPjsw3EpmcUgEFwQUovK4XgBmLttfEgZ9MH9gaXTYnwJY",
  "key22": "4gvDCTyGPCG5Sw3uEK6KTfJq7j1P53buxdsCib5m7TCxy5ZPp5waYMJZCp8aTBZPk3aZCmVvBWCbQGRfZNJN2UhB",
  "key23": "3qKN3Sq8CAzMzYFCVQUCw7Ujjc5zXRAx8tFD3BA2uF1i59EtmcUm4yQF62kGWmXe66goR7bWEoLmTuPHcbXxt9B",
  "key24": "3rBUfoifr3VczycxjP6Z7u9hMZc4SYenVHWnAGLiPdj3uoyQ3WzTnj8kqeGtbTeok8vVWwPpzN9RinTxaWMn28SQ",
  "key25": "4wDcDs3oD5yQLRr8j2Cod2RqS8s7a1RPybVGi6re6z1BS6m6RmkZ9W8B2ZQ28Q3eyfQSKy5rXgHjq2z5Y9oWd1Nm",
  "key26": "4XSFiBgmJuyJcsE1THSjm8Eg5MrUBMExazjpo8ogXS4pdNPfHo3gbgTZoUEN2HwLRiEy9EDbAcnVx48N2gjHALZg",
  "key27": "awPcg31WmSRKWmDPiUttpVNvXGxGbwcdJbwSkvFU59mfARz3NYQes8GddqCF3VYzRLPzvRTBV5wxMiSZz8non4e",
  "key28": "4ShZttuM5Keww5dKgy7PA8fMFbTCb3jhrEws3UAq64RuWY1sCJBYzJRSoBwC9uCwHvz1xH9Dp2CfEJ65kqh5K4df",
  "key29": "2MQ7ig7uXCGvdwgKpGTfFpHSqNKKrusMdcyPQUaiBq12bgGjsQ87qFqAsnThQxhuNYhPj27LDzNPaskQnsqg1Q79",
  "key30": "5NMyjDGUbhHtx6yiZYXoqmVYe4D6KT5MSfJFN8t3SiEaMVDrzTQquvES7ihqSDfSVUTgjYgp8cpSdWiWvS13U4h5",
  "key31": "GRw9ZvRAfNVdaBu34dJH9eDkvU7k6BBdMA3kgZ51Vrk1baT2bbCRRuNQbw62TQq4BM83vSEcmfBdzS9G5LP9iVB",
  "key32": "2JZE7wwYPFo4h1Ae2SfW7kFQ2NzqZVYcdB5Mrx5uCY7JidMtdiYbeNGZRdY82KGumMT98kfTgXpBS3a7YD2cZZJV",
  "key33": "4b5HvugNPfdRhh1xD64Xco3CXBXF8cgGNXuFQP1SPxvmcB5ZSBCZdzWFApQCkyWicNKy44mAggxEFcEcyep1DDRj",
  "key34": "4Mkzi8SMeWNN1cKCp8VdhcHvReRwySAFpmmLaBVbhzG27EJ3QiTPUz4QQRGoGsjGts8u2hAtHjFuFvAYKuqHGCkB",
  "key35": "4JWLPN3zTfCihtPfh5Jzv9KRRxfxPoLWH5T5EHa92ZnNC2sWN59aPEkrJvzLeGDL7uAYPd4y4zP2hwiRUt9Jn8FT",
  "key36": "5aU3wsnY8zP4gC65LTk7nx7fGXvXgnYakS2xFPMYtnw7LhWW1cxvtoHTpAkD71RtEVo3Epye2jajZUCh6knH597w",
  "key37": "4XpD3wcrhpKqnY9nPkMv4ML7y1K2u9WHArP6cwJWG5BgkmGKGeHVx4MqVpqPmLoPg9Kx2GoQ3ZqiRduzHrpBSak9"
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

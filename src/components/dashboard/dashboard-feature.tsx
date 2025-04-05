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
    "47FNNN7hjY9HGCEsDP8jKR2iaqwrcXKsHbXWgjebqD9bKKtGcCJXuj9yTEfYsyfrNKaPTGCbpksAk4cjMAwhK6eP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ry2zjD923qFBPzacSxepLw9NDunQYn5zKVcBD7Qv5RD3JnXRv6xt5tTArosJ2hKAeBKxRRsjYUsE5ABRT5vNWdt",
  "key1": "5iM1V2N5DXaM9KqR5aCyWEUKUVJRVae415uWAUigx9kuxHhEDf8a4ZKbbKTTqV5w8WoEvZXHFUK1vfnUfHqP6zM7",
  "key2": "FsoKDsbvMx7hstTWyz2fXLNAj3VYc2roAv1FZjCeoHguxHrGoddNDffmdzAePNta8C4YNp3gnDgSPYHSWW3714c",
  "key3": "2LqyE2z1HaJpwdTgrjuwDMFT8z8B2GHopQWDqGCyMQ5AFK6zdKh34uDCWW1Sg5DmGhy7LQRnvDkfeotqMYJZQCyn",
  "key4": "4LYQ8mWUYQdx9gCLZdrbsp8gpcmDRd8akH6vRdTbqac53YxkyQsRV7YFT4mXhuceJ4uK8GAovv3DQp4bDoxHG3ik",
  "key5": "3yo9urwr2kpsh77nPkRcMQt7JrnF7M4ruqC4DeqskkXCaT38d5yz5ag61ARfD7q8RfhJ4BXKygpiCjpuy5jQnDSZ",
  "key6": "3hTdFZMk4nDiyxMsGM9hBdxEynHWQA397rJSrJAv7w8xftqtUZ29vke6Ei7NnTHZ4tWMAXPEnR6ngTLsVpQ8ZiBc",
  "key7": "4hkR2PKDqDC74FoEkgdP7Cyd2w8LkK33sqr3w72UbPzz3Lohyc9okJto1z7mKKnEMtsiYAj8otKA5i4CJPm5C2ps",
  "key8": "5qkfdgKsvv7JBpJQvUqMnCfEYGciDmxnDujgHnv47hZpfnKBxiGMDBZXEqkcN2CzXTNLQQomAgsJnH51t85Uf81S",
  "key9": "5Zj3giwNkhjBB56N9b2amWyhaoPKSZBCtveSPL3dEgDRC1p9jZ1KrHKkV9qhoFK2MfXEdSYh65WAzRGiB1i42y9Z",
  "key10": "M33pd6Tie9RYY4fTEWkajufzxDmdvVQKHpqEo2gSN3DdApBHvkpFZAw4pcivAcEfdfpzRm5kvDL43bYXgZZchze",
  "key11": "2nVNopbUT6es3zHPNdKT4jw5iBEVnjwCUaSnh1T3sV4nFycXti7b22c96g8NLNPji3wJuEvy1zKnswpVMEj3aV4X",
  "key12": "4xwdhHeN9kxt3CzYvfcocAKww3HDNBRHRZrqthNM6rvTUWr892uRoHX2t3ApdoEMVKXqNKzqguT8kECL5zNHdZ7B",
  "key13": "5ejksoXCHn1VUuxQSjPawZDo3GmfHAaKwyREkWuh3YETjQRTSRLz4p4JWXGGsoqQPY29VjgDJQu8zNyCoYNAgEiR",
  "key14": "2TEkarbAid59E1YBePgE5r4opECrmj4krA75hXuxFtGMuiNCGt2o24Hd8hU4sJibCS8Dkg5vpTh9j5bemRJxgLYj",
  "key15": "3FrX5b8K79gKVccAB746EkmzowuMbmrTNni6oUCompSwEavSZZ2iLVGpKaamj85FU9kFQyxVsdKmwntebujqA4zC",
  "key16": "4EuNZrYhE2jWi5wipE3iMyrx32Hw9JhaUsjVyoHpq4bMY4x5wRp92imxceMKqw9E5brt6MGuZ1GA2unsR9ii7ee7",
  "key17": "pEPphUKEnqGvHDJEXpj29L3zcWQ2XnQiEXuKGtvuNPJ7tJExqU2FPwHEr7WSSBBj6UpqpXvwKbitw3xm9P5v7zc",
  "key18": "5LhkhaVJXs6c8WHgiZb23kNM8RQFtzKXT7utnBdxRcvcTjLVJfy4BrCqHtVb7SxqAD7Vn8AGfgeSsPJV1uc2Dk2Q",
  "key19": "eJqtJdcj2ZwyQX3fBNJwNkpBV8uJWCNizzGNXG6tUSbLovVKvqdRiKph3N1xCN7d53QwKa5CGnWxD9GCee4NNmH",
  "key20": "Vby2iVCuYWMxwcx4puuAtQvEg16uLQK9R5gkXWgrCwLwjTYuoYLMYE8t1xiJBWsh4rgqNQoTkV2Dciz8Gn5JZKt",
  "key21": "L8MQsh7BaKJkANz2uGqGyigH12BPot8MxyC7PBhMwj2rv598Mavj7LD81ckveXURrLHKmFmHVWunTivNAyPTopt",
  "key22": "5FVGSWLWoSHGgMuPGkaLKQjUCNuzAiaefncYk1AmuGDL752Rj45gCAyQDGDWjDYJrvhDDBMJUogipWtHK2fGzsAv",
  "key23": "2YHjGXzWpdDsLACo1T6vxSXAfba9YowhfGSSXUDz7Y8dBHfo6bkj8FzsfF3zhypngMUhEBjnr11n3m5zQJk2ZZpW",
  "key24": "4howYkEwd6kh3Xk4H2ibgN6bb2tRbuWdF8R2vvswyhzDxKxwXFuxyucxRsoSGkxUrTpiuCra9GqETx2nCq1SBvLi",
  "key25": "31q2fRXQ9LsuCZRwYhGHei7VG9umgAintPZoAxTc8ixRhpcvF2qMXK1wsgdVoi6TagHbhKQoCYUdRdmFR7ZuAwwY",
  "key26": "4R68amfZzpM1xdo8HGnstheLXM34e6Y4wJ94v43yXD9D26H1cpWEdnDdowr7nHdAsv5VATJLxeb78FY2ME7qfkU7",
  "key27": "5g2YNoiR757B7rVE4yQ8Lw5jbiW9ddtxKtHHJtfLiskSoUH112omF3PurRyx8GE5mvKrya1V63y64eg77T9aXJ9b",
  "key28": "Tcfd1DTZkPTECaAtUx79GxmyjeQcry6F3hQic2Xk3Kg2SPftkGV2tA6ETrKeHRAy71b98TXB1UFKG7iE13ZbVXr",
  "key29": "2ZU5AtAsgeVNAKFPpt8WQZdi7SqqAnvKR9QDywbxyA3bUhD4Ufp5SUHKSyULXxtaSEs3uefpsxgrHVW88nxNzHBW",
  "key30": "3YLY4QJFy6SzzXKwYEyHrhEPUxr4hbuVUDbW4eE11F6QnKDwPyWcNiyAMCXJt3CbfAYUSwYmzMRBmzbhw7e9Shp3",
  "key31": "3aHH3Sf3GN5W1oy5Y1JisgK7mtiXSDaoZyCtRnKEmddQFWFqNDpLJ8QwKtbnvk4KUwmP3nhPpGq8L1kbKcQDELE7",
  "key32": "2D4NPMMZAGM3oGX9nSLrv5z5TegHfuVwyQdq9JxQZXXDydUqSuLZ3oYi7Zxhs19GP1dKnogCUMvYugBiFV25sgpE",
  "key33": "ZNgydBcqriqxxAxvVXqhuz9fMxyR7MbE9H9Qp3ac5RjqrweebPtikVdNnYHBcXgBTLoFmu2Egp3kj5vbGCQEjqy",
  "key34": "nGMqFchUqZdD8ghbi6T7dx8wmYsaBXYSgZcmewUi9XGzYrZiSQfxes1YRKSkgC4Tx12qAFq2vNfj7bE3ysrev4m",
  "key35": "5pCyXqmLDEuPjfit5VjL8MGMxPSaRmrBwRfxS2EHzChHkFaAsUb8ZJkVrHStcduTXK3rg1Jp3MLy44kYLMUq5ZHy",
  "key36": "MgRg8c4R9n9YyUJ5JddufhQZc32fUcHAKrtUQ4sjgF1oGCrjbgED2FsX6FDZSr3hsKiqkUJZL2U3Wqo4wLc9Ejt",
  "key37": "5CAga45EM7esgunxEea6Nx8Kogtu8QBa4qo5vxx3XREsogt4rwbQiQwmAYVRCZEfceRcan82emWP6GfLGxT1EWvd",
  "key38": "KELVNQSdFJbva81k6SfVMPyo7nN4BQ5LE6ts8uU6m1LpdvKbPHwZTny5wjRmsGJS6tgS7suVM43pG8eYuqW1zeF",
  "key39": "4HFDx8gfsSaT7dGpW9dXEZvDmZWB5oAZ1EZV98GK7rGstV4vhPanCvyZ31wVjknPwzCd7t3JdBQta25QRq3AKR5d",
  "key40": "31aXVw2a6ytFXJzajYtKNdaPHrZ9LiCUjRDKDNx9jK14d9EEkhiDGMogxXyaJvryy47Qwku3DznKcVC86JUnCQGK",
  "key41": "3RkUwRModf2cpn9bbTfmo1mexmJ4WQ9vhbc14agFbeKPw3rjz7Kp2ThYti3vTCKHgKQbdtKEjg1YnXr5obu3pcJ3",
  "key42": "435exf4dVog8rwQky2N6QnvcqMrPds7HKvfpUsUGhvtcYTsg1rScCLbA27BMr4zW2tXekhSmy6Aq6kLAZ6KJeFVR",
  "key43": "VF7ywRZShCP5UnsHguc7CQbuL56X9UT8k6pooKyKgoVo6CHesUh3x7KMWhDa9QHYwNakp5RzEnDTPFnbKrQF4zx",
  "key44": "45yHi19jLkTVc2a6z6Kynjz69a19y4Cd9wwongZEQVAZbvbZUsEtVkvQMkJP2ThxHvBRZm8FsiKH1CPr9LwEuzPX"
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

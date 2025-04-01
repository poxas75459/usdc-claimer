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
    "5AFx3Bgc1TX8ijmhWP9nMY97hP6KV8Vr9zVYvg8jSTnRwFKrDecDKZpdYp9i5KegzkrbRFcUuLjdEvoscnfTc9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m713Q1BQzjhknMUY78D7tuCwW4vg9ZsFy7X1TyPuKSCGBZ2fay7a7NtwV7hCSpbC3PgcM6e2CJkcapny4CvvFcC",
  "key1": "JaMmxTXP7rtS265JHCknNKpLALjeXfXPpt7Jqk1knErdWZj5Jkw6HUnMEUZXj7UkjNMgvvxs12HDAguL4hyth6Q",
  "key2": "5Vtn1xnrVd5UGpa9nh2RfSqnqufJkNP1ZP6NpQMsW7RLo2tqc35Dkc34hb3mQ83ZcP8Zyf6idHXj34mHXd3XzmGD",
  "key3": "DYcwnk8bS6ivyzH3rpJVZH5xrXnAUecfTNndSZNV2o5i3dCH8Hk2E3MZJvWetGbvaX6FdC2ZmgeooCDKPxMAQiu",
  "key4": "MmhXQqB5daiSiQe24NCrvcmYyyLrGwue2SyrVbRSYJuSBg2XhujotUfLRMWsD2XRLbHLAj8gbjF5pqa7V4SCS7S",
  "key5": "3tRfJcCHJLLJZiFzzAqD8LhZ8Aci8UbFaWSCXCcCVj3kuS2ntk9ZZeYccUY2j5iUbeZpGTqu4SQvixM9LqbgUCED",
  "key6": "624Y33u44TPiBJTKa7x3uBxJcb94eNfdsFTBopSqMURBgmz1AebeWkfQjRSSWCFaSQemcs6DyK84MuED7nXLiuM1",
  "key7": "2PdTH95gH7sGST6AEbxed1g7gWwPLeBR9tSE8aeUx6Cq3vT1ik19YcWENdtXr3PnPwwoYPDCF7keRTLRXq4fGoxk",
  "key8": "3g5GiCncxa7rifmwGkEd6TtPLH6vUjANK1jYANaiViaQP8gZLhRQmkQAKV6TuZgQUeuitrUKQCJ7Zn3DAmrdk7Kv",
  "key9": "2tMjq4yaz9DWygV1KoB1Fy7Ly8NpPiDE1geWr8PCDoWTCuAnSr4JwvrGjN6hrDGHSRbmF76jaTWo5GnG8ch6mGg4",
  "key10": "4DtSmUEUuDB8Yvf8BZocPJpZzd3prnU2Sqp3vSJjjvAcXNTyFZTGxciCGXcVAqcEZFnX9YsVznnWFTtRPB2eBBu9",
  "key11": "3EqGYQAAcoKZiJb3XmFGXr9pBx1q9ybw1TeCWSxeunkUdECDrhPiKLJWz81BCvANoLoDxQRZCbysnLCsd3YfPqwc",
  "key12": "3pck5PW767ivcxCntH3FQYidkBGZoeSpwAbkcfp15RPmGFsQ6haEs86PLbdvn6oCuLqYovd6wA1KCGND7FdixTne",
  "key13": "5V5rVjeCbwWaXiTx1Lu8a8cPGAvhfjdUhNHDH6Kqykdb9vjZM9UKfsbKm4GsHMpWS9fW4JKH3p9zQqNHzTZ4vyz5",
  "key14": "dgjoWphUERqtugZZpoDmQH69Fie9qL9czmiGtp7R4rqupYrJxZazreVAznVHcZbwQMM8X56qYGfvh5dwu54aFkt",
  "key15": "2AbTG5pPLhmBVorpy9x6ZvfnPBZN6zRThL2dZREQmnJ6jTZmnb4Czg1cFGwnWfuiyNqMkTK44ESVAoVqGN6LnLKm",
  "key16": "oQPuh3b9Z1B34Pq9LSW37AnNNAo3ebwY2dBSMhKkqCysRysHhmSYU1XKowSgtNLrnH4ynoggARS1Jto95XnG4Ca",
  "key17": "5mAFnugDwSVjrLd8j6fvgAcx7Ww4L2LV7E1b6AJqb8J6SAwnoH1tKc6oXTJBXqSD1P2x3JW5VvW2eUp4hoto2E1J",
  "key18": "3jGjGh8kjP1Vbp8HkVBPJ7aeTMeQTkj9iddtKqWULHNVcHBKSVvKVpMid6rPADDjMmJsw1yJAVpMtWnaYcpTRPiv",
  "key19": "4vDMZS6Kd3Rw8XcUtCr3pBpmWs5JSeFGPovLng2im4tkgmKiJHCvBSQFe4K6sLCysYRiaB3dgjxtxdFotjkTqn4S",
  "key20": "nFh2hg3aABuDz7zygSZj7qVEBCgfiA6CuvqQVyFWdcy4mFrYh7XTGfJZdnegzigTHT7YVyd2UVY8Zj4mYZaotBD",
  "key21": "39tRWULQu7uDyJhWRJPTzSGBQKYtfe18xG3ufKxNoDn7zyFW9kYQsWaecNBQTLz3rAPc2LgC6wSsDYR1CuL5uJzt",
  "key22": "3vHaaEyDVv8bFsy2artTNZ7166qVSNz14PeZ67Uge3cBR9H4MNbsgkPFH448M4gvDW32xCTz17tTYfnVhHKWnv4X",
  "key23": "2T1mea5QdmqifsQrfZLKwq5NkzvfYYY6h5TZMYmDP4augDegUx6fjEkswtQ3VPL8HB5UAPYDdbMiHz7RSv6SBFb",
  "key24": "5BoqmE3semMeqPMJT2fnRM6XeiurnNs1tpdXALSZA3Xqv5yrzG5u5kw2cCmqw2TM1twM1PzizsygA3T99bCqJgRB",
  "key25": "63T4ELPUV66WDHyd72KgAfd3TDq6q2KVS7MhbqZbsC8m7ciVn34d3eyhqK3D5ePXYdqsU3vNUf7WL48jXxVNhhqe",
  "key26": "rZ1D9NhqwhTkqPuWy6f1BnaQeizQLgeexczWJJinAkeQ5D4aJgd8UDgRwtgXPMkiXbvKokhidDUWACoQY8CBzzk",
  "key27": "5M3UoE7eZNKpY2eWuUCH7G3AkaxQv4pWmBZVDND1VeRRHkAcNb3oET8S1NyEw9mQy1u1GWo4yoKxs6wLuDYaciy7",
  "key28": "BgNUgRSkinieg3xqtBL1vbkRP2DtyNwnuid4wc8JKiQ8pZAsPdFVpgi7hEC5uMBW8RLBVn2eUTG1MzfWoDsCdjk",
  "key29": "4VUDECJya33Rgf7vFWV2njY2WMy44Em2Foe6JX8oLEXPkvyJ1skdJZ5PsyBPFq1ARbapkGNVwQutHXr8qmktuyTa",
  "key30": "kUvV7zVuBFXXodHjSB4AXSzu4WQcF8886pxB3XXz3ncrk9bMewHgj5KjtMHsYLYsTejkkf4L76RnFETH96NTDkD",
  "key31": "5nzZssrTGfspQgXhrtDFjPce2k9BzqdEWy4rVHtLY5BN8vupWtPnFhXX6961q5YvACJKKcPhtAQEAeBxXV3nucyB",
  "key32": "2ZYkTgrNAATLMDbHpga3L62Ak71bkr7n1wj33iMGSreBm47rUVV7Qo5DVEDYNoC5o1my94bo5X7zPGba3M3uwVqG",
  "key33": "4WaMbAqKzzo43at2jGSvF49dJeNEiRMUwc2SkeyE1LRZDpt9v1cLumbtS3frFZd3zChBYieUU6Vv8aRFWAbz4f7Q",
  "key34": "XyLPqfqpr4XNtUycfJSG39BzJsmhNhJgRuVuAKmSoKF33XwXEsVXs8VUEccsk8mWD3D5ZuGPwWXRTuUG7YENrKC",
  "key35": "hVVuDKWM5p1wPZ4J8KyV6M8Kv9ih3LxFcaGA1u2drr21eB6oaZzbBRucQZrULFKJcS5iX7JLRbGdNdskVMg78g6",
  "key36": "64vMQv61ZUVbnUFKPXVhEFyw6yVk8YR9B8vFekGsPNWfaayPSoZQExPsqtwzN6NtVegf9V2pz1xg1yUFSdGQFTWi",
  "key37": "JDFTF4FvRAdiJoURipjnVQWmnuHc6E4asTeiCWrR2H6atBXMWdqZjTR5ueqZK64Y7CNnshcVmrhtVdrMWb1cLKP",
  "key38": "27oqDM2mH9oGM1bbz3wVVBF8vTzdaDqxnzKr2951Xpa1kCBVV7ioNKtxapvwvUGdTmVCmAsoJzGpUvgm6WtzXihU",
  "key39": "4uer6PmcqGHxUpGSMXcHdo6sSa3jWsTEu27W6fEDt3rxKYxjt5MG8r29U9CKsyvUwFGLopEescywe2kdV9Qa1TdX",
  "key40": "5to1JkyXCuSEWQVpHVyMMHbNvW7VzdXXfjmz3qZ2ooGcS6h3sZx87MJ1vt5harcXrYVNz7BfCfqMV27kYpcxmP5f",
  "key41": "FS6GrCZpX7NM3hsbesXWx7BfFmprv4VpfN374ff3Hawgb45qfcrdgkQ4LN8SPz141effq2nqXzbQXi8RKCTRGrj",
  "key42": "4rEzEr7q4dtRBYzjxKjffwWBMhZ3w5jBrFzXVd5GARsRf2Yve2osPJNCiMZGA1KNJZw6Ci4hEJ9m7VSETqAySVyW",
  "key43": "3tWN17aQ1gaurMp9jsowzQHf4mc2bSXRQGAARaRRdzkPrhkopM2MBAdH6cUEzxuTaznZ3xi25Tp6zLyu7BLrX81r",
  "key44": "3LPQcSt27S8EDCLdGkzyGSJKiaWKEHTJa7G4XaZpRxuJTNwEZtdr68koiHHKw84jVRsJY3gXrC5QdktBkWZE2vkP",
  "key45": "4yLAdmyQoXSSVoBLMZaVrmZ5Q4QH2igTxNQZkuuUuAxSprr4nReC3E4C8NF9KvEq3Qjsj7pNA18e9129o1JJ1KHH"
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

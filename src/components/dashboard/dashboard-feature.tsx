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
    "4iPnJAFEPDyX8ZUQLZAdPHxu8QwMHjyKUWw23uNdDJuZYZWLJMNLMR2rb86HRgse6cviNhiZJ1QK9MES8ZyAExwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGLDTHUWEJLEpKMUuPUH1Pa1s9mZdMeVMmRUmC7LyfPtCQxr8nymG6w63MT7VWMDGxFN4RMxB7e9eRWRsCVXtYc",
  "key1": "3GWBtj9FtntzHmtShtn44hxd9jXC45sUhmbQXi2DNzXzjbtpyxNWcUEhQVsAnP3QTwvLpGRUzqtcgd9b7R4Lt1H9",
  "key2": "5r8gXw56cHt5pDzouz8vmVGUm4xRyq7ADAnbDTtmFVKirEPaKtUUi92Btv3iiTNhG4Aq8ffGUUAupMSg1n6nxkhd",
  "key3": "5vQVo5QAAfefEQcjqRMvM54Aq3iBxU5Mcj9nV4qfDKDt59LsxVoViycr4AKjeG2ZVqxYgCRho1asLRYw3odZufHK",
  "key4": "YvQzNJvy5C2FYGGjrGohAmh3TFDse6VwGzzbAuJmPn5zXEigDjhUabxbemMFzs7mYG8CmeJX1teeejp5NBWixnX",
  "key5": "5W4bsG6Da1EcT2tdbCW2WRryA326SPKgy5Uyq633RY4SYDEB5SvwTdNJzEq7LfdCs8Yy8DBzisrSEJriHMhbTNXv",
  "key6": "4nYRdDQdErrCzC6mKd7eYyWpAoNc2PiZpRqr5Cr5gpp2gVU8kHDwafRwpxEfCXVrWa6VFyuCbNypDn6GRngY5wjp",
  "key7": "2TDjiENEHpgmTmqRD7rnafZf4HuDiJ6XSUtpAcxaTnDwq2t5ebKNdRuBZzqKGU78Ek3rrgFn3vWFaYpk1fczgZV2",
  "key8": "xMGMda2heRJQvxcZ99WbKw5u59LNFnywPRjHM8WrZAMnTRwqGAzbNx4nCVyscjVKo7JnC6rbvKRbkjie8qBM8y6",
  "key9": "4jaUy6jkJmnheQvPfd4Unfk4WTcHXzSNwYGHSnKd7icoF3RaPhYr95Yfg6x17uzPVsm5y6Vr66oxc3a18DnGnVmm",
  "key10": "3MRPjcTtw2AJzmaPyTZie6RgyvntkkPguqetUFkv7bvdftM8MYBQU9yLUgJzbgxN4shtsFCKdrgjZeiBMYjuNoRh",
  "key11": "28junpg2YEkE3nvJfHzptpnwYaTcXr9HmrrvLheNNv9Gw6ApbWLCoErcjzaRCncEeE6NLRmA3Ae5szJvk8dU8ArL",
  "key12": "64uRxyvUaHAUB5Uak7rAZLX9PAHV7NtuU4XP8hhj1jxQx7QuxqoQvjKwaThVSBoJzsBKrAaKWi9ZvBeAAvTqgo32",
  "key13": "ixMeYpzeBeH1R8vCxvbeJimFdMGk78PLATCy5TiWKcAp47m1YvDst6SYoZ9DGAyqs7utXtFW3h8Wr48e74mjtNw",
  "key14": "2ZsTsQJsPK56WppJBcEktMjhSA79Mt58Vy6h1syxyb7asUjdai6cd3T27R15RigXnpTLQYL95auz7V4fPxpcF1JA",
  "key15": "4ZXW3pUVzcSdR9ia79UujePD3NHvkDdSca921FzyE6NH2SZnpJKphw6HkR2bVT79xGfws4b6aRP9T1kgXWdZMKMB",
  "key16": "4LijKPwkYZGJNgBorqpGVgku26ymUCzXi4ou38PwKFKsZyEjuuqM6cSYmcEXSoxRM4HvKU6HdLquf2eQj5Em3RNb",
  "key17": "sksYwFZwYV27g5FtwMfNzXLQMfCJsuDkyi5KiY1TDSHyPnhrAKHs14xtWHqFEmCGEyBz5R4Y96Sgrf4us4i8tjs",
  "key18": "3dxwRm9daw3FEz9i2k9QmGGqaffuDkp7Qf9rqF56u7o1ShgTSzw3tz7xr4vuEPdfMvyp1ZS4gWPw9DdcrWCeYBQA",
  "key19": "4mSJsUiXntvMhkGyHLVpxkQrA1VGAsvAUhbBgtHv2YCKoH8ibUZ7pxSLj7EamgJpPwd6egj8w6t4NGN9S2e96wVz",
  "key20": "3BTcEMNNTks5UDNV7sAkHLCoug6S86MPmtVaE2AtAwJ5hcrw6zTaa9Q41r3qBSQ1Fib9urVSMRsuHb7xqv45yTcf",
  "key21": "37s9a1YFpTK9LXcw8PZd2BUCH4kDNTA3t2JSxpn2KmnWoy9E7r7EZpQ2oq67i79aUG67NAxSfJhLNi6KridMVjXs",
  "key22": "qgSJtb21VLSFmYwuFJjB4KSTBdAXpzaEFgFvGSUDvrSEsX1dgRsHKgAxeoLBuNWjqUAePUG6NJKD8H5qMXvzmvR",
  "key23": "4d9Qfrcbqz3Y6CuoH9i3K5K3LftJY2g3fNgae97rFXhqEwkgxaYWQcv6QgCgdVN2uGLFcjEJcCpeYuGQJHfAwZ8w",
  "key24": "2CggHbK7tLMe6zpa5Py1wj2jXZRb3BLw93WnNw5X7mxfDySseVo3Apxi89bDA4reRnRR8fsmgXh7rWS15r97hGXi",
  "key25": "3j9iwbziCp6kFFa3UBoCsUagCGGCXYwF2kUtPnd7GjfDigsSFCGM8YZb7pdyJLfTAzciMvxH7KFs8Bpr8S3qSPqG",
  "key26": "2kd91Y87JiPvoFukM39tk8YYAngRCcURk7puscq6mBpZ3qNxCYJMWAkwB5AxnsmuD4XATL79DgnJZPoqMdPZeFXQ",
  "key27": "4zAneqKcgrUpNukvWMg8QpxZgLduNsRhfVQkofSTn6Vo9Dv1fWuZQV9ccbcgG5SRf6hdx4mYr4fgjxRAvgs4M8wm",
  "key28": "4yC2mjJGknNU4HsmFXajUnmg9DKtkVDk9kEm39yh59Bng8shufD9Xi8j6jfMZ2kuCPaZ8RkSfopMHAvEDLkHUJus",
  "key29": "5mT44sJfct4TUXW1aso4AvW6KEW3NnbTgtys9aXw1Vz4n3HqzGhwwNEDf1B8514ckq4yoyiHW47WDxH2BdCuxMgn",
  "key30": "4E22DYWwxdhv1rJNgucpaaxdc4xedkKUBsCaXoEmV8bPquBCX5VciZ7BG1KUNsoeBzhKNx1BrxCX9CeHqQqosKyZ",
  "key31": "XS844QR1oZEMbYmHWG8T4iWuy3z3VxcXRsjPb6PcsvKkAR5XqQyjHDmrKNe3jLW458FcjeUc2DdN2Z5diPgfWRN",
  "key32": "xYawZHAvGFbqUEsWWUoSzN4yYuWvzse8oWqUjDUe2WBL6bWvCvu418bUpii3E67zjrdHxbcrnGGxY7JWx98r6jc",
  "key33": "2FvPTWgZTexUEVCbWZYgVCrxdVWNppXVCg2C2Fgr8cEVBcKb1AiT82jBV3cNczCcnoNGzhF2M6HHXmDwgRc6daBN",
  "key34": "3WVX55oWPLQsca5irhobvsGtM6hE7faTWMwGhsBpbm4TJe5Ds9todN1Qma3gsyEZomENQbhyB3Psn4XUreMhPUFQ",
  "key35": "44io2Vjaz6y47pHpvDMmVsCuFMGzsnjDbZbpzbSke1Bw4Nden9DwrNVPuSr56BAQGnHrPHmPfbfQJ5zBjMA9xSnh",
  "key36": "5Lf6kM9TAfppLeTrrmcWaLqfwUjByK49CoUUTN9fkWnrQBuL5QSqf1C9yM2tDvCsREjtKMZzMzDnkk6Jpe8BR58E",
  "key37": "3HLYfhK1C7sy12vPFaas6j3h5nxp5fajvx7G3vooZbUCUKvhK3NCCt5ChyWsi2fzjZaysK1c7HxVBPQgfMPhNFTz",
  "key38": "5Q8qdtFEZ57f8VPEfuEmRNAfdwZuW4ak6ZshAKeE2KjZm9fRthjhkzuCSSxRnvb6qmkUy6qKtrSsyhHVrsHUzhvC",
  "key39": "PPQMecwFpWZAVZ36Pu1EJKVAmA5eRBmDBdfLCDweRRXwvcAEK2uivxmRgViRRLPqLNSkE8SG2bjmFLCRKJGjc3n",
  "key40": "4gwgUL2JPzWo9m3j853YL9McpHg1N2EVXj2NQyotgiHyBbFZzxkvAUHwtSgTzYvkdrhNVAWVZiUU9vgMKZNDfDJ5",
  "key41": "edeyXVWvwfZqXjPatGANSsxfcDMu1sL4mFHdB7ejV8sSeLyzJsg6ytcu3YMni7sRc6Pq1GnyAJGFY2ZXXzAJNRj",
  "key42": "4DQxX34dqDDKrfGTEY9YCv2sDjFqfn5DkbVoChpWbEV83esEjEDNxfp4WRKz8ZpGpFbq5X4jJLoTyEqBqYt2tyfN",
  "key43": "47iHPTAwkD49sUq7v7V7EKEicPCXUZJ9C8nYLnz4ouE97FfQE5tsSB6dPxPWyYUkRWEfAVEXzX4y1YPMjfMrxwfL",
  "key44": "2akznYWyVo2bKhZPGSESyvUG4JtsW31txrcGHwrMBCnC6Dmw1DiKyb9RVzvm1Zmv7oBpr2py7hTAZcVwAmhk9S3a"
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

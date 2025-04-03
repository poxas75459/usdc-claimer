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
    "3WjaPZqVMLkbefH3NR6gMtZbmNa5AR9SDRrp5G2nnJffxZEuriyQfFHh7HAi8JuSrBwLGSM8arTpQCTsPWJ69PPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nZxw46KCzJ2GdUi8weAHecTfavJvDCr6bG1qu1VvL7KDHskmMJZbugq3qRAnzm7EMKz2ZSeW8VfLodMrhznEpJp",
  "key1": "57Bm9QfnfFCsBJackQmr4kVuKjwJSbLwZpBKMzGCf33pX7hSkahsAS3sivQ8aGjh2otDWmguNwZVKvEiUwGxM6Bw",
  "key2": "65w9Fi5dJR3sG5oiYzKHrhPBvFxwcFSWVymk42Y3YRfd9VaCEWpq2wxdgK9FhFqoyomZ22GaekFstoKcr2vgmY8f",
  "key3": "9qtzEo1GwrwtXbuJwajfhQwAjRAEyred6UTJ9evExgv3azLHTK9uBGwnA2S4Lrg3H1gkCVAwSn5VLLHyQ6u6nqB",
  "key4": "3gdXAAL7ga2LBNc2ote3KMmFextw37Sz97vAGHhBahpr1hCQj4daRxsoicVQbNNYnxBtJccjFS1JtMLXqy5QZAjs",
  "key5": "3SMXQZStTStJhoeQTr7Eqp4gELVSiYs1gin3rGGKBmoEcsM2AbSrQybLrfQPDpoivNDqjcU5DEZ2pUPGK4EeD3Lo",
  "key6": "2jZEBK4CXVRVvAMVqZBfd3Lj5iCYvYfQkwA4XV8Dza77mhHazgnxgKRHQAN8yxHQ3mYQFKeGHe3AgXx2cST8FCCR",
  "key7": "3jEsvYEh4NPMSWoE2xVBLczrXQ1FxMJcmrpKJUR1QdJSBkN1Dg2rKkowBkSXMwvuMESJtyF7GyfhBW27zJ6RNC1F",
  "key8": "4L3YKJVjEq8mhYw6bJmz9b2RRoHB6X8sEV8w4BeVWFqor3tX6asnPirjCzvo4wnq7FAWC6WB9Q7X1K2BK5wPs4Nb",
  "key9": "5HF4oDShNXbVtd9fFicJD3tzfYGguaZyQDhx7aD3oAVLMGm6e2Gdky25uuGoqUG1fHFjPGb9WcmSw4dyRe5JSRCQ",
  "key10": "3ip47BZhYmBrLzpr3BTPB7JLVigzrBwSH8cY6BTJteSX1ueFPXDfacigeFHyM7uaZLYM6kndFstmCwrDbJJ2SdYh",
  "key11": "uiMAX6P5noGkGDdXF3gxLgdPHSceK6tbaCa7RZjWCXCgsvsGusVyu2pBhhWVDc6MLcHFCH64kjTJvnasCFW5tcv",
  "key12": "4PF1hiNbQP4MNcsCkLBvXdQ4wTGguofFaZUVECSFmaEjxHc4cQU3axGQn9xfAMf2YcFMTkQxckSxQPY8TuQwKtDg",
  "key13": "5ropSr8U2ihAZsqZVS7fvHYASBRSPDc86i4pUDXXS8utYxUvQ59Uwnj3xYJVFEwTeBjCh5zjMpJC24KDrJft1Lyk",
  "key14": "3eixpmXpeKXQ1k4ZTyum8bXxJ3tJwJySg8owEY2xEwvhZLdz3yEbMUFxAWLj1hMWhox1WntLYFbqdvjUdaDkaoM8",
  "key15": "3Homdmpn1s4gsWvPyWfNQQCnzrNe56h8wr3KZQhCT5X4tbiMVvQ8QxpzocuhPmPWe194iRoaErJeYz7tdm94Lb6e",
  "key16": "UfmAPeGfgs5iitUrgtafmF4dDttDhwaUnQAG51YiwpPZd9QAPAzCyRa86HiTPEsrRPGt9f81AZdSaba8C2mWJHY",
  "key17": "5yN7Do8hPFKh2Pw51yXqNiGUhL5smxSuZg2xZrsEAqFg3CFXzu5UGQjqMBcp8Rt34fu6YoDLdi39kRiHzhqEoRKS",
  "key18": "5iGHwHsXkdziAsojjk7XPp1rnMVNmeZ1nu8ntW5u3wJxtTSQxzmq5bWBCtTF69FYjWbyFkFN8YPBXft2K8FJAy6x",
  "key19": "xW6LTyBaBbDqXCVSB3FWHn4NXamcmDaSxCyZVSptxN91Di9W9brZ4M8nxYkUBe83btPmqTTmhD8UgPq7ZkHX18v",
  "key20": "2q1btA4cDXBmb3HUkc7Z4XGaNiBoiQDbXavGXPT6NmzAft8WJf7ap4HV9QfRBGYwCakb73H7TRqy4zUpw8htvcTY",
  "key21": "2cNc55tYxysmEb6i4tDsjHgYVEiWiiwQTyMahU5pCDGaYmo3a461rZ39EA2iM4hEZpMTSMLU1m1hQ7zP1dTxhsqs",
  "key22": "2GgZZJ8m2DzmphQq8RT1R5nird3cTu9EMppVv9gEWo3wrsCGbBSt4y3BFFxkiYAuUV3MqUjrLz9HwEPn6kBnvwvU",
  "key23": "U9D9VhHoAwaTjPddjDzTzuur263WqFHBSWec2JuABVNr4FxPxJs1pE5kEUn65npZayFtoigRKLPFfCS58CGRrU4",
  "key24": "4dXWRQEWZSVcqizUNgR8zvYNcC7F2QT5EYw1mE1jCk7rDj1Et8VHQCx3BJmGUhQCYvzPJBEXfGZxGpQBaJPcbzNx",
  "key25": "5NK2EnMG2d1s7KedHnpEDjyAgtP66RPqEqCFKQ9bnpPX68djoTHu8xCA3Sbo51gqo2SFAdixxru3bf6ruwkGbkDA",
  "key26": "3t3fzHa1Y9Y6NHSocAMGhjpriVSGvcckS7s1tonQ3PAaDLB8c11xcSpDhCjKUqMeweCmFXbCGKxWYgpbGW3mK3WD",
  "key27": "2YUTwWqiCXA7nBNjgRo8r3oCMuwuVEjcLTG4si2NPG4AfCCboaHy1gJ9gmoXj87gnqJaZ4nXrWM1kYHYfWvTv8Yf",
  "key28": "5TyCiH4axYSjXeQVZs7LiZAawKX1BGsBmepgq5tikRMC9C47euhBtpspqNZJZwqXuhQ5nbn3AqGct1TACHbX99UF",
  "key29": "5XNZHDMGtnKoUjp2DdMzssg2sBjt5hSQWA8MiJyH1PBG3YeAqNpoeaXcfY5xqjKRDEvGNSLAR5VkNmA32DzvBAMM",
  "key30": "hM8DKK4K6famAqJ355f6Pa6pwwK6w5T8ntvR9mwuwtk666BEK5Yyc2dTtsEpvnYCySwEh3tRYa3cQNMsN6nBPnw",
  "key31": "SE95ojHJU2Dr6vhdrsRDjRvCrnYkGSbMATkCa7G1q5oYMtD6ANMXgZ2LY2gpHMHDkqfBvnas2enp91MgdRY1VDA",
  "key32": "ttuWyAXKP1fAYtCf1cPRfZphg1LTLQQ87dZqWSivYCreF1dotNzDYQaKW2TjJCLmvPvCVbWyM9U1to5omJmj4nx",
  "key33": "47hPdF8hrc7taEpDZEa9VW4EHEdnNmUo92jmMfZosE7Nbd8WFcJAomBoSn2Hmyf7fybe5uwrqrWZgS9suae64RsQ",
  "key34": "57dVXVPW69WUW7LQbW3WCHSuREExHfg4FMACvGXb4ELumSsC6nmUx5Z4fvrhiPJPR5AfiHTHMGzgN6aLsik83k7z",
  "key35": "5naZm1CbS9J5yanZkprBivyfwBJ7bUKtnzrPhD97nn1EMJ4n8rpw1sCddFSDu5kxpJbrYi36Nrbp2DYnMop6VpZ6",
  "key36": "5TpzbLNJhSfC3nEqpHMkcxWYjj8bjkk9kpypREvXdjaLZsYmWx2eCyQGt28WJwbNYuzrMoxBjCSzmn5VufjTALXS",
  "key37": "3R91hiiit8pipjpBDHqNtN21N67QX97hSuQfWDwATYegHYv4ajN3YYkt84wvTMb2cCK7Ks57b7h2Es6Q6JpVg6tp",
  "key38": "427wRwu3LDbEEeEY9q1D6xrfvgEURy5T2pHak6hoKT9HLd9X4Pg7Tv7HsXR5kigJjg61NAainD3KtP8UaLDGwGnC",
  "key39": "dLtCjHRVqEvkWoMx8P3vbmH4hrN7YAbmrxgn9rVkS3MQtiiTev1kSVpegVwruw2LY8LMjWeYgamxqaDBQzGcUvB",
  "key40": "EcmkxFur6RrSok1hVL8r6gambDsWcpaHFEVG7s5iSzRKSha25D7rnsiezqZPbSP3xbr2Pb166pjv2bzySiYunA1",
  "key41": "VxzdqfHSH6Q2wixjbizhkqduXchHqgS969DkDTHTpbb9spGwe9AEHMiMTwwBLrPdiG2GP4MoEHeaT4Pe3i3Qkuu",
  "key42": "4juQaZPBxQPtBVZBHSeQhazJ13hiWmgM3FXSv5VDhXQvXBK4mjHYT7hTb6ddeFHbf7C1ZQnKZjtjoe42wZM3ZXY5",
  "key43": "3iEBuM7HiDBvDRFrbvPM3KZMGuNt78yT4PRkF5X2q3Cc424ttqCY2jutwVCSEYW6BYFwgKysCeMrJaFjj9jpBPB7",
  "key44": "4Mxu3ZUPLBcYaZitiEVzJdY57X9YW1pg2dPGbg9JcJim22vkndDqqAQpjgRoEvRFFSZmedU7FUspoVNukjZeqpgX",
  "key45": "HPQDG8aGMygeWBoC2wsJe7csDePVpzcFR7MyLZjPzJutkCcTCPDZSx8dTJxBbmZyLsTqEed8LHMv7cnHTZcNgeg"
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

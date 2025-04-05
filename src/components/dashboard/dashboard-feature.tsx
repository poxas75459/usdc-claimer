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
    "3yuZQDGdDSFuKwnnyPnN7c41bB91GheGrb8UaVSEKhwy4jAEaTekCk5h31shGcPqbZ4Cph4ini8UqRPzciaUT5nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sABqsRz8bmhTt35UobbYXcdm1e98djBsswHx4wGabd7Bte1Emrs1sE49STw7Q33uNW1q7uaMWUjTob4TQugohq",
  "key1": "4Qke3wQ2mSae7rohiofsoHz58bTkeSTG1Jy9Ec5Wh9PmbZGudt7toCyQuSNJmmWoY7XHa9Dt2yTSuWuHZrV5CZWK",
  "key2": "5LVcE4aK3R4jBG7w7CT4CRshvXYLnE4R6G9rNCuqGX66t1vTpTATeSBDKptnnBLwetrpYKUvEpcT4Wa5RmsrPgEp",
  "key3": "2J5tG2X6YfCGDtfzu9hJe39szMJVuQg15iYfGQXztP53hcdCaJ3XpeqQv829EQXugUy1hRDjRn63xCDCE6e2ftcb",
  "key4": "4cDF6Pb5QMYiKcDFkwTTEotnkCQHMGeFSXzTQg8QejVp76X7xEnWDTXwFTF3239oRx3P2puaQ835FeTimeAxdBLG",
  "key5": "rTBpMHGjpfg5KtgLzJVca1ZnFgK31NW4t1umDqD5kvAANEz5Buc6tdf52nM62uVQCVWAt3SCpDRxCBotBSGuyhu",
  "key6": "4EPoWR5QdFAoS63JEW9ongaDZYJPj8J6aqfkDRXG4pswoYcucz8FEmHPrYmJVfHmsfTXC7BVyWx4YMH5vAo1qNjp",
  "key7": "24YBAX529vJRv4i2bbMyJFN7q7HH6Ttwgd9ZUnBY2qhhNhiqohi5KMrqXNtSpobViiVkXrpKbuSqGEpksEXCzJRB",
  "key8": "2WLPe3RgCCWKQSXwMnAnj3PfTcos3jLMmQc79Bxs4zPwZLuGMPGW5pRuY6mq66Bw9XicxVzSCKto39vUKVRxBqVC",
  "key9": "3Hye9UKMrgFsy5FVAWo94WYmewiopsqkjYn96QhKyqkDXLg2AP6uZFpuDvmRKdEJSSiSJP3YwEBEfDxWNbLg7YKg",
  "key10": "47cSfPP7LTWt1vdMfvLV88MSMoEuNJs8VSiDRrgZ9UiYE7yUS3z7A8ZHYScQZwJyhYhuqiaA6SfBDbYMECZWkC8N",
  "key11": "5E1ZBsbaRMbEZ5XQTNeU48M4krNWxpFAa7DcqtKrfQ2FwZ5GagYnP27LUGRe2B84thPut18Lag1FPbDfMRakrneG",
  "key12": "4eqz7Y3E6azHuip6y5xs1Gp7zYjukwUBGzbwdYKDYuQPgba25bM2DBuqo2HFyZoiRSBBbL3YSmxHPuTGzLav4HVz",
  "key13": "5edJdvaL2nR76LeDV2psSd9Lf8rJZRyXkt9ntJXqfCJ2hzPD5jex9kFnXEnf3zcKCEPeGiTe4c6YsKs1gMEKU4iQ",
  "key14": "64Yyp33gc9eeT3VqaB1dM1MfTxoRQKguB9abU7R3AGoUdem3ovzgYgipgY76LW9n3kTRGpXeh2ZUVBVBQJdfpNje",
  "key15": "27JWRju2sqF84w15Azq7QGDDEpbxmnnn3pjjpP3nK6KbSeRxC6jWwByy6vgR8AiAdYaT7LjfEqdq2rKFpc9ryYqd",
  "key16": "3Y6sUqtCZkC6ixrtHgK4YvPMvSfxhERVw7LkixYoqYXvhSY6YYzQULJcPui2E3TjJgUG1rpBhV3DVm5hHD5CiBGm",
  "key17": "4q8NMdvhGjHBQnLETNsUStZ9WFwH6Nve46mMGGcct1oMGD8jAdEfkuz6zaVyZ778spkRZssGucXukJigv5hKjy5i",
  "key18": "s15sFciyubu3PwWhgCrVLWRruMNkLp9j1vD88fEoYHBQdCNJX2nNPeeXFmXcwEyetWqHp5wWiFktrWXQ1QnqCR7",
  "key19": "2DFWn5rF6EswpTw75CWhgbnDs7MoTwF4Jk4AK5Ew62KKhiNugiT265fe9hHoECnbHW1sf3w9rAUfTe69fyTmW6JX",
  "key20": "22xWXWcE4Nkzhth913uAqLtC9ZmmAwnQGAv4fztB3UzY1idMPT6QnGD4Ht8cTcHGGmbWrFm6UadqXf63REn4BrUe",
  "key21": "3EYiimj1SWxcMG9YSh3XkND88XKmf2bBvvqE7hfk8kQzoumbAVCwDDhTEAoMsyLsgufQ7tGy3qozfBH9RKJGCww8",
  "key22": "59yBXH9N8EW6HRVU6s7kdS9HuBZUfD6JvpHVKjhqRviSZbLEUxLcDiACNai5HqkZEFysobyJqpHxop3zGckvdGsf",
  "key23": "3DvCPWNc1hah82GZ8wkC8JpDYh9ijmQxyfZ2V6aMgnWaBd6meQ6jJUEHWYQNBVJkYd7ZV3kBgWHLmteWW88UbjPQ",
  "key24": "vyW3zAZRihSMX44fDP63xyNEH3cbgSHoNSZyJt2LPLtdzaP98kCbwrEw7vjCQPkut65xia9VKLiuPXsKjDQEVzT",
  "key25": "5RYzYv4zU4onTcApshF21sTA7icTVmEJw6tLKTZEsZ88QHogMiXKd79WAFWKWD1QA4baWJa12SFSxQDuYqHhnLgv",
  "key26": "4socfDJUps1pVn9gktjRpLxni8AcuKgZRL3TmySZmofFxQz8S9Ejjgch6nGhJyEsKnTcNf7DVzxwQvP6QajBozps",
  "key27": "4Y4XDxD4TXrELFeEvuxvmNu6zWgM97XJ3hMSk1rQSajr7Nuq5Zhsbe9PauSWMpn2NGqTfwp6HBidBrW4saRiJyxm",
  "key28": "4TaWo2iUgEWgxzQcK3NXQpfWyBcm44tCXvz1LzgPthoBd6A5aQRPNutDG2yGoGp1GxtpBijQLS822SbuBMa7aGGd",
  "key29": "5MNh1KbdAjhwSyWsU9aD98rALCtJfpDF1URre6GMYF2zLqQHgB6HE6m2U5qqQjVmrXDcFXWDMY29NdHw1qEUsoxT",
  "key30": "4FxpUqPSoVZvnEd4RKhpShQXFLdhegPKYYFKXQKeVsU4uTHdR8h4smUkEwZpLT4VHtZip7wrY6dWDtVcLkuvrXKu",
  "key31": "3wWSBqrmYF8tMzGcpZHDGYJVYQgbvLEwBTBrBPnxJyuDfHJqB6voo1PNrJSxo3rJFDaterd6XeK2Ff8Um91m1rZN",
  "key32": "4p4C477SduRkBma7U1hyvWPHupBJcs7tbZMhpbE9GFwKgxQ23y7rf291YeCvth4ZDhrhmCaCmre2D4g9fAjSzEp8",
  "key33": "58mF3Pg9oL3urCr2rbEsHyCz9oTwTuep5r3fTTNjhYxxTix9ch3Voa1pEkD4GZVsZQbbw7egcT4hFVRYeqiAeoMT",
  "key34": "5Zi93RcgVvwULKtGURFvxTCoaGV1b6PwQvqMX5NTPxhHLwLEgpe3W99bHFSwhisa4c46bpcfaQqjKvTLNv2iNJcG",
  "key35": "51Lbu5KzxLzB3zwxzoBnHgwmpqAtSb7y8qFbSFPv7VUT3RKongdqZxqG594Voo2xHKedxj58QSCBmGLqRiKCTfW9",
  "key36": "2zvPK6RTyFShK46jd1tnMfm1czrfNhGj3WPiC4WHsi2dmHitnrNm4q8gUNAVYo9CZ4fB3K1Ybj2mrqcPoQYJEq7x",
  "key37": "23dEdjUDkjRo2JJbfrxqYi9fLq1FH4qE1uH6YXceWRhWEmNkCRmt15aRM9vSWyBzs6V4A72HK53wYWBWvbWpEoxx",
  "key38": "5pn4oSfUH6HNC45MRR7uHSoTKiSJbBaKYG4cs5pGPu6VeziAszWaS67Mfgx6R95Dk1dyZRgH1DEiJMoNY1X5f4E7",
  "key39": "5RDrnHASNrGfYKwdqQ7HR7kWKd1do2BHni53Lrzt2feteKcNnbnTgCnWyqFajHXR6YVLkB4dhhgjr1gTUkmG9euB",
  "key40": "Doa5DYXie8umZF5DG2LtYEqGwMi5VEpMHzbkf4GzUGshbw9Z3GHJBfafRbLTLmWdM336aG4DUqv66rwyaZhEntZ",
  "key41": "37EPMAL6tTCtQxXe9r29RUFjLzSADDifcomaqkhh9YT79mE5xCKb16bi3AxYNdXGtWkQ8PrC8CQwb4gSFfNPfieX",
  "key42": "2oNpMzDnoe23fmAssAg4R9JKU8Wf64FFebPKJyr8ysouvxeVpuGsh4qRY8za3DvP4pm1YpirRttSVtCfpvfwWdSH",
  "key43": "4cqroUQjSBfpMCrUkydbf1EzqiYf9Twyv4PQcqTNpAHtoXbqSpF5VyGFfs1SiTgAiozHzGkCeZUdiqNYqq5qN914",
  "key44": "5GHjUGuEqLoLiRYxW1MuEre12cvRGw4wnbTUkgmW7hHX4Daw1qjz27vpsykrCagACxz6sVjLV7dyr1NGq1zoUNzo",
  "key45": "3FcsurAk3swDBWC4uhcfEP6jRt8aKGYuURE382a92ePTxufcBLZDdL93LT95fg8bK4SfqwbDMk8FfeM6YFGUucAe",
  "key46": "4LSjYbrmARvXvZw9gwHpENjdsgXpJbzhx8U1NmuQgcqr6Gmp7ph2mN2BgPCJYigCkmxTER5iE3BT73MHtj5PqGYC",
  "key47": "4gFB3v9U4Mh72J7AtZrSZWh52wQGW3QuESzuGkiM2AEgnBJ6oJai49W2eRf9DjAWXRpQ8MF9arywVCEmonq41Aae"
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

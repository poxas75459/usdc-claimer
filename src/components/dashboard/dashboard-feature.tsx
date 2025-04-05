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
    "5e4m6rA6GKmfdACN3auqDM8oCYE6GYxacWJ3rfz8s5XmZht7TNGsUvAQiWYK6q1NXpB6ey6vGCmu2AzGuiB2jrDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4apzCGAZdgkD1EHLPYe8pp8QtwPMQU1cgcthwNyttpnurWX19zL5327RjzSLqPPMCswXMYVAgTA32dEgt6ERJv",
  "key1": "3JwwGKQXWnW5GXZEn8GhTW9e5PfoLgF4JrsCzeTLTxdydBwvAac71z3VphEgMx8ozPnC1Hy53puKZ6CMWgYQ4HMd",
  "key2": "3mjB8atGSoR7UutGRGbeAasM1UAfYFeN8hzjqCtLjrfnWn26yDmDdDFg2N57no9N6HYJuSoWi6z4UvLQbPw8j47g",
  "key3": "2SQS3rGa4K4UG3dn8BhkXDsC9kyKULyMrN695nMMNhonnW2QUpk9wD1sNVuvdejRWsES9mZvvhEv8roMiHVYbT6z",
  "key4": "59PVXCLE8sBpabb2MRksoE5V1iPtKa9SumPcFedTrhLRMuoLzJY1YwSsyJ7zB72HuR1RBAALoR1XNmkzLzSvanf4",
  "key5": "2xqTv84QFar7N7TWGe4Hg2NmmCZLvAWViKXxL2PkbxpCorTGSVPi8d1nVGzy8ZMqo4K8LABbNSrg3LpGTXhd8CdG",
  "key6": "X1z5ypcfFeeLgckrveN8oijn8dHCu3seAWRovErZY615XaeabbovvpTWhiV36ytGgGKdeojzHzGGnHA7Z8xTPL3",
  "key7": "5msrmoLSVXjnShjbvrrcA5jXKCnM8Wf6K1w84hpGxdkbj6WixjBvdia1HqBzXLHy6kLm9CVHxzq1tu7etaSZtpDR",
  "key8": "27YXRskES41fQyhkSMGwKoK2CTFJacCqxSxdxtrkQWSyLPWWzSoMnq61DpTJkP5QoFXFhJkoM32pQR3vW8enHgB3",
  "key9": "53C4K6rb7NfXYT1UJbreNN4hh8sZFpKAyKwzGusm8CM39vFscFyy741iFbbNsH31gaVWt5Dk63Q3qzjeALqdYAd8",
  "key10": "3WxpcWovq7xTA3PQAiGvZ2CitwKpQ279b5wpQC1CnFPwnhXLi21QGCTbw3hJco6ZcmCiJY6XiXAaRbK7LxfbgFDK",
  "key11": "4E9ZK4YZ61hhP9gSsoRwDBAcoBAmbAKx7sQhRBrE1K6Ty3YafwoMPZCvVG5Aht3VbvmAp3MTEdtSpa2nGC35pEhG",
  "key12": "4bTAJkVU3mAUcHkHoU246gzzmcP6sHg7A5fPxHh6iNksMGVPNcgqnKr97gi5j7m4fFQKDtHncTBHqF2ysgypzdrr",
  "key13": "43MMXtKQRiHkSDfYbXwSs9AAoEU7pgykFcMcGTnZ16gPmQwvgFzmbgcNeHPVHr2mBMQZ1ro71GAnpfYxpDFdERzU",
  "key14": "46bbVmnFTMVu4Yhe2e9wVypDuk9toAZCV5UG1XiWJRpZQQSmk42DjCYb7yDDJCej2HMWfwTHYtKwcQxuTVhoFDsX",
  "key15": "35Qsd974BTWjoAiWsQHZ78eUdqcnnJu2mrkJmHuktvRWHCMctMy4KP8w89qC3mvADC7GB7Yct7Pt3vpCAyBqgXdZ",
  "key16": "2tEUBMv23s2qpmvvHo1zGtsrNqVx4uutiBMFjg4jSXBwNckMKDpcCkfEvMxh5L6AFGyFRHzUK216FnNKDF68bYHc",
  "key17": "2EhEk65kEd74erHxYNABsP3uHqj33jiBezQZrzzdggcLRwT4PV6rTD4LBCJNcjV1edBBbeAbjLJg55wpFaesZr34",
  "key18": "5sDWw42dWXE17GPmFNZKgnBb6v4GJYearSxjULHrcNtDqB3vNuCrF38vqgp6VQucdgzantmb4wm5TyPRLspbkSTe",
  "key19": "3ssg6VEPWXXm5XUnufwSxrszhLcaHuFVr6ws7DXxDHodanmba5ELfNUqsbY3cvQoeD2XmGgFE1nuDfJoDmyMg48Q",
  "key20": "fVr2U8t6XCoA8iKsetb9jeUMSGfefDG51A64b2fNXnc4eC1ZMCPXBneubfqCkG7xhsoTyEreXsvdWatQB9j7FxJ",
  "key21": "3whBzHjZTBn7Gv5y2EsshRdAXJQTCr9DivxhxyWJyxHBFcpXo3rRifZJbGHyb1GkF7YqNGswWdVNRjtE4zvTy996",
  "key22": "5JhujC6KxgSy3R8J31XYH8gW788RFLyEHgdwq8UQka7MZpF9hX3CJovQoU5bjUqMyymVsn9DS1anhGZT3o4aHGXS",
  "key23": "3WRL2gQh91Wo64JRCXAVH2RrPZBNJATpgajg5ZSns7moxSJRSJdW83pjXbnV11Lu6YCN5cGvMgU9PPwMJr3tzrTg",
  "key24": "J37UT3C3BnDepqQuqLw4cYaHajdJWFGdtpe6fBvg9cvUsT3g8wMzrBAJmQb3EFLHMPoVksUSA2YpQ8HxzuzwKGL",
  "key25": "4RKcWA71FwDq4fVtD19SxhPN8EoUeYqhrpfJpGAXKk6dvw7vuvT54kwJ21xdRSFSwLcKR2YRtCkXvLptigJgmgxA",
  "key26": "5xgtrr6Ja8n8p1ozSdexqTm1fy8Mp7v2BaxtySvFWuypCDHeHZAXGJ21HYgRfZDh5AzMYUvwDWaXir1DmM3JFKxu",
  "key27": "4B3hja8umfeNxeuiTzH6X3jG3kfFcpxEvQpFAeiAAWtaxayADPCvR4SvmGr3yN81BRsJcDsFKqGZB6k8AqLx5Ba5",
  "key28": "3knMUH5hp5QshZKoLM4BVzA1q8iQZZJQMYgUs5Joyh2qjBJDt7eyiLKKPqdWA7uAnGYtuEXbJNoqdvzsn1GBXLE7",
  "key29": "3CR2MMnkksMyPPh47b6GvhxoMhGvJZcX9165ABUQ5RSAoBfxU1mVzmTyR5Co5EnsszLEmN8tJtJAbAUWx553KP6C",
  "key30": "5GQxkBfn1DiMXsDVTFjLwY3bNnPeu1xM44r2XCVBf3TiDxRaBYY6Lo5wGHwTw4X8wqhzeq7vd4XoPYDNpyFwuSVn",
  "key31": "SZg71bJXwhi9ipEciMZLHJgbbt7dMjbSUt5ozvAVVGiFLQornV6aR9BF5WruT74SwH1q6G79yL424CB1uRyNDVy",
  "key32": "5bPDtLetAXCLnNYWWUe6pvWex7PnAd7r8k4T6tAW1Ee886cEfrH3s4cAPoue5cyznVfU1SiDC5HKc6zYUGRs1PZW",
  "key33": "5kj93m5piQU4H83VuZpTMfCCHfqkEihLgfnECqMVXzUW9Pq1Hv2BkdZMPXYRwwHCRMTp3ej9GF3EtBkPn2oY8LFe",
  "key34": "4fGmWpV8ftTz6VzqEyXaHJf7j41yYNNC8k1DFZYaaQx3hrt9HbUQrFkj2byH8aJC1qnji1njZjG1q57wHreB3xdH",
  "key35": "3iUqs9ikQ42jMSo9TMNX8urYoVdAVbFbyEuB76waxB1uaWwZRvb1QPEZwkGpvtbATyVDQPwuJTMKoJ3Aa5gqqK6x",
  "key36": "WvmLiC47dZVLFMkaRGZSTdFChzEnvEy8QF3PpiQcFCLH4jHjRwNCPdS4HyQpai7gphs5qmiXZvdc4NDBkFBK33Y",
  "key37": "2CgrsKeqyx4xEEaq3dPHmS6hfNYeQr6v53b8JZ8YPS4hhTumUciofVgDQZnCepcqWoSAtnU8mmbeUSo1X7bekrrW",
  "key38": "58jLMEYKVPnheM89szgdumbZHwLfKh1ZCYC1cXhpu1J6wz7FJvikHWZALsAEMN7bmMBorG647SPvZYFPqGdVZVkj",
  "key39": "3y2v3v6A7Nmw6rytUAcV2ABKN9SveDsqPPpbocXBMxU31u1D5Ee4LKiKSfL9XumT9Tpow2KMzkeNTrdZjgM1XVcJ",
  "key40": "38Gehi9mcjiZUoQ5g5rwLa1ZexhYNt72dTETNhjWY6msADbVixeK12KtwUkbSaGpDfq1NMW7gREX83XGXaYbcVit"
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

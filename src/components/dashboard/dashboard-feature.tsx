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
    "2qFrzXkdMyjSpfz4tZcjc3c9VtPL1Mn768SZbXG7HH9bVsii2fNiWF231pQvjr6d1hcoZiUEQrLNYucyvbDMMjTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "522SNxAi3mTHRKNVfpbzqCpTrfJP344GZd8wvSTJVqZDpj6cSeyD2T6jZuqMAtdTifJyGTFf4gzyFTYAWSe9uLpH",
  "key1": "2QHVvErzDZuQD1tmMtkffHvonf5mGenkWtdy57N4tZbthEUYjH2Gm1tAHwyXZ9oXfUUYiMmmqThPci18dUk14C93",
  "key2": "5PQDcV2ZD1cwWFXrMWJHqXpBfCPJ17DsGpkJ2YvATaEJQbzfUPziFtMfC1ApKCQUMbugZWNeejDQxXxu1Jd4Wmky",
  "key3": "36Ba9T9uYUYJjXgzn3GnT5USScAG6hGbN3V4QUBj8aPHEPbY9kVLDBdrF9hbXbYsYMDp4SQsChFYXbwrt6pBV2RX",
  "key4": "51r3PPRarYamBLSF3Q7fa3C9yiwDbXgYTMffsN2mTicBrwhkZPpNqnKtD6Sh7fSA4NhzwGNrdWktwqDr4DoTnR4w",
  "key5": "4xZxwGUR2g1xLRvPxmyo1tWxh6w1PreQrq46YUeAHLpsaco1c5ET9rVdoghQTu768wmESwvBcwv4PBgYmwjmQQnC",
  "key6": "5xhMgCf8NprXudtx4w8Dghj75txV9u8PFbwYKvGShj8MuSxKjnSc8T7t2WTr3xsLYNi2qXPt2ERnVHKGd4L1SeW1",
  "key7": "3tWHpz3MLvfAryoDuEBZuzCj339Xpp89BkL5qzCQVxQ3kK17WsPboKb2CSS3mUYJXRPf9HZD5pZC9CFreCKisuuG",
  "key8": "4vL1UsA84M5m3PfDdGzFpbH86PwzAxn49WT5rbvHtiCkFSg842dYpKQXfC3nbBbU6CHwoqdrbJ1f2h9UZwudMvMG",
  "key9": "2XWJ2zoUBn9XW3psb3pEY3CqKAr6o1m9661EEmq5v4j1D4H2atFyQ9QZNS3r9tktUHrvPbtELxdAEQB8Ff34rnUe",
  "key10": "yCdhjevpuBjx6cywZ6zdGmWCsUghhHYXs6joSq2AobrGDkrJhawTy6yQ2HyRjLcWBUMdQ2vmWkgSWp8TwiLECYB",
  "key11": "5s3mZMvCcmHXAysjvWHToq1g8kxHmocfi1rM2G2jqHCDAFR7o7XDEw7dFPe8RcA5vLfzpirNjhq3HWBKrLz264xZ",
  "key12": "5h3hEQc2xkQgz8rk7izrb8zf8PL78T4XkTFBbbsT8dAawT6WuExrZ9ik5nYeDePQZU4jQpa6tUrTaCBxsHhrCqEK",
  "key13": "2AguewLtDKHHTb6rZ8hGWwpoTUUuRyfgAQosvQ53htRHGbCjZ6x5kqtw7fLdAPhmJE6XRYXn1wKVPQs9Ny33j7N2",
  "key14": "2tyfKwm2gfA86JGyAnHBoEFBpiyWkBQyT26WqTkNbNGbKeHrXdWQwq7LaH13Rk1AbyqiQxQf67tQj1JCFU7AD47z",
  "key15": "3jDrukMLSL3j2SfCPcxmFeAiXzpKygpPejgDs7k5roZPEWMYNaBVWWsYeUDzEBaNAcRc9p2UBpqb1DoSFkionZ2A",
  "key16": "5wkF5DQnnnb8PoBzJy6B3ejuNSGBEsUKrDwcRoSd6PD6PQdveA13L1onabVKkEyf2CVq6jSsPW552RphjCSWPHMZ",
  "key17": "4QDA3paacWcdvyhN4nZrVnoPzyc2sYA5ZyWvqAyjUxxvVKKa3piCnS1QB9xFNe7bvCqAqTjb7iMa1iJx5yD9F1Zi",
  "key18": "GbpffvRejqtSVnsY4AJmDb7BeUkRi4GNeK5bRcKbtDF79YyFhawD7zdNCLZEkk3vhMgDBgbUtfD7cgTgwENXCVT",
  "key19": "3MpHnUEoVFsiDGHkNnia6JKFEd3dHxaGVA5oATpLWMMsFc8MsP9Xf1v1U3neGTboi48L7Mx83k5yagNHb28mhwFZ",
  "key20": "61ALAkk9SA9cG8firAVD1czAhjy5ifLUHz6TfamVbF5FUf8yJJVTRHNyhoyeVcCe9qDBHa6qr4EYcdtVv4dkJPRv",
  "key21": "21n77ph5LhYFfsG5Bgn9vTuK1wCmWAWTtShyRoNhQGnc6dZRtMVRv4roGVYsi2WZ8AYw5xsHqHt2KFHrkyFq92oe",
  "key22": "3FJTtx5iMcUpiKnEn1Mu3YGnUUzAK65oh7QnbH2LDMkB2AhYeukH7wmJSzFuWDSCV5GQf3oUPBAn2PsuydJM5uZw",
  "key23": "5E6TadVc9iKitd5uzCiRLxjDA97ynFAHBhUBuANhEfbDrTwqUuobb3eANciw5ZCvLciwopYhCiLLh9cjfNuhtZst",
  "key24": "E4WYANVDygyNBkhA3dKNGZAzEvuTjLQ36tAQ7cMui59xvzogQWnijXk2gMYnWY3Ve7yaXe6xFkWEeA1C9scWfLW",
  "key25": "27fWsdc5cFwG7mfnmxVGfjh9cN3FqhfzeMqrmeYRZ52Kotzd8cUYbZLotS3VGCpDuSwD74k2tu4s9GADE6vi1aUD",
  "key26": "5p1pFUEncGYp3yxR3cigXSjgiYFBAzssq294AnE7kZYou5NuUBJuUn6gR5qnmPuNQmm4T6muZqfvqGDZ7Btk9KS7",
  "key27": "343Leiwo92H7CFCvbD1feHtcRsJ6YfDaWLFqW8TqkqLJ3NbxnrL2oPkVBDKzTFbrdc5PbNDpNB86CU3ktpSH72LY",
  "key28": "5sSsL15H9GLvVULmKqNAD5LdQiqNNYTwRJhtZ3RWzZ1v9JrAu1oDQsrTMvZohsLDW3bh9iCpSdd4bCPQFRXTmLNU",
  "key29": "451KPpLnvcoC1Dgujbb6J2vP8fofbe6b3sEnAGrYX78Lrcf7EGm5iyCwdkiZ2seDVKY4RWSutij8HKYTdu6nGzA5",
  "key30": "PosA5z9trMfscPCzHzyyaJbgFHad2CCfPUmE4kGfWbHD4vL1E546wRh556FRFmQuLs4FZpMwuTe2nkmKYggw3pq",
  "key31": "pQWsRZurVjp8qPaU9NiFs4Ron3iDcYmJ5TgF4R5pRReJRzm2ZhmWzkE6go3pfjhLNvqWgPToCZnYdeRJSSgm25C",
  "key32": "4ALEb8ez4qS9WKaC9YTwzLS9ZVKdj7VXEiz2BvwHL86w6hycUVLPD9Pi8uYzXHKa3PCtEeraBYim2BAepsiRLmRx",
  "key33": "RavHxX7E9KMpZdRiqHxA87xybmL3wHp9LybmTDchfVzj8T2Hxi5chbnenf64ThV2XikVQrEHAKso7ecm18UjKos",
  "key34": "2dKURNmnYdacehpccQwq3y1EqiHAjKoLxkXMs9Ux9wRov6FsPVjWbRnPGyMDKeWw5Pc29obx5KtpDCoSZwKQYKdf",
  "key35": "Y1zXJutyvaokjqdwxjcjZXJ2txJgTR78Pv6ftWwpk8CPi6phYiJJ39N59svQWrJjFuUgdg7JoVd6puKMPXRUepd",
  "key36": "3go4aS62AGk8HMESK7PMWhqYJUcsxx5EHusGNWWiektr6uCCRrVda2od5rxfxiTqkJtVTwq9T9qAtrunq5NZq4by",
  "key37": "5RMcyNYgYzrezvFHU3CdzSWpZDWSXAiJMAnWqGGLRQfoQFkBqt6hD3x9dCF9NgSjJGuzGtEc4qUb2QgBfHeYkXvb",
  "key38": "2G4JjJ2qx77CPwm3ffUoUBL5Y9XoyBxueHib29nHdV2z5tbPgvY4E41QG3P3JXNPvBTF1ZWPhWBheuvDft933xMX",
  "key39": "4Eo9kxdKuLRe3fFRiMkbV8Ex9i1pZcHPd7pMM6bZUiiLZpXohi27WBV1SSaXWzUQMX3sQytNFY5Cix3sX9gvjTVM",
  "key40": "4VkSk4cXciRBpi22gc2X4Xec6a52b1movk84JuaZK6xDtrZCMuVBDv39TuPK6ZgHYGsQZdkDRVsfLVriihtuE9gJ",
  "key41": "2DD4tPMidNTxQvEUTxa6nk2hRC3zrBAS7CQCddNbfaERtYiDsSmrXeybEnZTZBnW5FXpkDKHKt9a67wa1gTUzA8"
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

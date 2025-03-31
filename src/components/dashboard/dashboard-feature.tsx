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
    "dDU7MidzMwzKikaxecSKuDDwg4zAMa4mQR7UGn3bUgudQoxzUvvQuTLZEDyRvfrcSB7CKFquPDpyQ7UqXw3kogC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjEfDq4kcUNU6EB4ZC8fUuDVLUU1dFpnqh2hGR92K58FmWBr4XsVfz87o8JGzAE6HJB93hCRNQ96rKNDQBp8NB9",
  "key1": "3hYkrtf7htKnm1m5sFJsGdecimyZdQPRSMeKKauLh799Zee4gBr8Nqa9GizRkikdbbHLQQgn8SxFDtBFX3Wd9DMf",
  "key2": "2RP8twHkVS1xKkbKEjezf4HmZtrUAUS1k5tmKqcdYWsVjipAt9e6kvwqHuZjMUrBzwiU6PUJTRx73dAuychV8C1k",
  "key3": "RLWJTkKiZRembhrxCfYhYjVGqP7pw2oEcRnZSZTxQmkbJzdWPrJGbmi1GSabTVZLryGgKTMqDFM2aSPVFZaunDF",
  "key4": "5RHM6Jhn5Gn8kzMZ8q7PR7MefSme4yF3Pv4esFvrWQhcQYavGwfe2tMjrdaQoX8YaNghyEhN9UgqgzHbrSGY56UR",
  "key5": "44GcjoCwXVfC8oNyPWKTJHJwVp9NjXk4uohRsA5jsMXyZw2rV6mkNTgHet1t661hX24LUqzQ3Dn1xWo8wH1ffRLn",
  "key6": "2ZX5P8ckXFF5XtRdeFNnUYbZDwNKHwG8rzXoeYMPvW6UypkbWogZXDbyfbR8d3P4d9qVcyrkx4cnJL2F3AfdXFt8",
  "key7": "2ta6VwrLPjfskgVzpp6otYAcD6K4bnJU88FmC2rEHkWmo2wqHAZkDQHPFGeU3wpYwvHUsrJkC1j6GWdh37kQJSu1",
  "key8": "2wdvsN1q4wu7TN4QJJVNu9c6muE6HSjzrN4j2z4ANmEQZYcNeYp1gti7ZWXgoTSwGY47jNbNpF8tsoFxgHQiUx4A",
  "key9": "2ok9anxPTsTFzitSUDv47aoCWK3JBu53ckt4RdJBzSroiGHtoARMy6sifw7FcPiocqzo3Yi6qYqBABi9QR3s54cT",
  "key10": "v6M2Yb2qr4nU5sA4szScuueUH4CmbdaGRyWoZVSnftaJKYbxMwZb73eRHknAxBJfjZGhJ1SJPmnAuXUkP33cjKu",
  "key11": "5SLBvyfaMnvEtc5GTCcQgrXekTkU2D9xZGEg5xXjNTynVSdNdJkFGuHb3D9GYYbQL4V9pjvZ4FJRc1DU8ivJinMT",
  "key12": "37VenCf6GY6J4ChdFkj7aw46XiFpx8WQ2KF7ZnWMXbWfKJQjVFzKYinv7qFgFdjzoF4HzEbesX6XF3wJWTrmuMGg",
  "key13": "5uSdSW1n7ag1woxwAMVAP1guLqzKbm692YQZGJXW5DS9swQwhs8JboYgdS1DFFyg5xeDQGHjgFHpi6vWCt9QE5B9",
  "key14": "HyysYMr3xaKpbZ1yxpA8RhCyaTs3rgvAjyVWTDKjd5AawYTLcLy1hbn5UYanTkhKEUyWuc3i3srQFZus9XZw1kx",
  "key15": "5cERue1M4Xki1hTSm4FpMcchRKeUoe7bsA4zMTRgPMpXVYJ4NKcF4dFY2jKVt9XQH7UuVyejLhLSgaoMDoMvd8MT",
  "key16": "5KPUfc1XvvsrinYwosh4k5pZmE6JhBdvse99SE7XZFn4CtEncZyWHFQjXVP8oXdec38F1hEaUBqkAvdDtUL15LDy",
  "key17": "54evmYn5C5DGKtAkX2QkRPVtQ51zNSwxFXyd2JMTt7RWodKbgfM4MkTq3fUr2UFqFvZBmTy1as1xyki9WhUMVDss",
  "key18": "QPitUW6tgSP4jvAMJHEt6xT2dLTJWJfK3sq7igFB2eCNeob3JZxVRgHuiPdSpijg9X8cMVCuf6RgXtML8DRp5Nf",
  "key19": "P94i5YtVf6ek1pPwFYQjGWCrjTDZ6UHqL2XPV5bygxQ9MvLopGo4ZkmSbQisEMvoncTeR8aNZpbdmZTdAQecMH5",
  "key20": "52MqL3bKXzShnbc3yiBjrk9BsMk6Q4W8rVrxizMwMUV8Y9aTa7ey4oYPzJb65jj17yvWQS332R6CBXhPRMWqH7Ux",
  "key21": "3Z7uwSREYj7RfS7nG6HD44sWvmEWSaMupDMwScwtuAU4nbwjztNyjXbEqZWpe9CJUGk9uhbxtWs78PyAHzhNnLu4",
  "key22": "5Dn6xBqp7zWvWWb1Hb7RvjetZEKw3rx5Q8qTN2BTUdXrcUkwgT7697bWvxExiGmEQG3qazMpodn7EkLt1he2RTaN",
  "key23": "5xESukynmGwPi9grHs9RVYUVMFQ6VHmTMNwhpFQYmEHP6XN1XLWFqmQAUkTmN1qNCJQbWnutRTrXLR6eVB8YPsSv",
  "key24": "4qmURC6Zmy1214CTv9esTZKTKsuEN57xg7vHZEaDUrEVVj85wvmYWCEg81Zdv99xLsai6uYBSmsLiWJJwySw7Mkw",
  "key25": "5gQTJhyWmiMJnbhptgkHxd6fgTRvWJHje5dReYanCPtoQ321q7oECqk7qG2MjE2YSXLujWNkMJBruw254rn3maMp",
  "key26": "4qv3CgMC3WjcQZRggC5Mht5vvWwYx2pZggdW9onfHdzMfWNs1LZ1ffn2ZaZovgiXaf7VM1KNopmCzJfk3wUei3pS",
  "key27": "B7moBgUyXXv6fn4h6hjF5kh5LuPhYyzuHs2rtFZj7yr9V9vvZUBA5VofnRRvPGXSBTnRDf65R5gEXRsYaDk6FDL",
  "key28": "4G6KvPXMu8fG87xHT9VzjW23K2CsJrz7d9NTh43238tAZmwzqTVoVj5TVKQXStWpYhbpvj1LmHrtZDfSjL1LC6gb",
  "key29": "4JKw3wBVyGojdgkRxBvvKhuU324TEuCEdhvvkKVX7PvdSJf1PbcHGo7gQB3NhCNz3VTNnkErxzdhDHj3hgT6eLJV",
  "key30": "3GghAMyuwGjyswHNnjvpLvWgaKjQAqQUHBxxCqxHocjdAN1mo6KPo92XnhCbkxvJ1Erz3ZHsSzwHxweLRAxfEiNu",
  "key31": "641Q9b3rzSW9BSNY1hNoKRN9cjp2cVmB5Kd8YzrLA5JDmsNphhcVaWg3b3mTJuojABHjdHpASwv14xYE6zac5zvB",
  "key32": "2phzkvRdKDy9hKNsST9ftKxuMGxL7DGLEPARdQE3K76m1oQyvSHGgmoo6AWnohGQEvxA9p9Sbdsy5tVaQbkE3QbK",
  "key33": "3i3MEjqM2XzydaPH9ucVBaDzSwRQPgEy3i9qMUz5pHGTLnWNP8ktXmxNZGfqrd4bjigUrN184AEbA8TnRgqdv3vw",
  "key34": "YrjCzkAkzoVYWNjvuMJrCsgxMmXNHHQnTZ4R4uuWU5ZuTV7iMwAazoXgdf8GHMxhCrUsBPgmc9G3Yi5Tfnb7uXq"
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

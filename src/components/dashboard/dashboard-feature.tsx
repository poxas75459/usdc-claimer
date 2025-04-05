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
    "4Yyxiq6bBJeesvKKmFdXSEc68m9XrnavEsZqYbFSgvp2Sr6GCxYtkCQzdnMwxPgcY2SbsHnLxA9s5PNNzn8xBYQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vH34d5rPdVsxjeRrtjCjVbnxPCpeprxNohyPK6Aa8hXjiCPQ5FjMMzZGTszhA34QtbQ9idRoziWbLD6RGf6g4LR",
  "key1": "48y7viMYkcV5dGX7BpT2vGi4C2da4FQjxFiSEsCHAAyFqrd8fimqm6Co7wvnyzufLx7P3hZMuuM2KFtdfRmu1vxw",
  "key2": "5WSqg24it33Jt8XKRnCUsLPCF43S6vZ4DKFjHnep9XjFZU6ixrPAxU2HZtLTSppECMiLDQPJr1tXNKYtzpCvrexH",
  "key3": "4pSpdn8Co8yFnX7MMzJP24sfhZ41jtrEVAXtbb5sqBzwYfNkTGyYKLXb2xGFCK8durMxL2iQrYeBmgkCs9JirGmG",
  "key4": "3XC47kYS1Pig2iQCpqqjpuLqaa7unUKzyN5vfz9dzzGqaoDeA7xNDcUfitZgwwMHes1zH2fgTSZyGPJiYf3VRR9G",
  "key5": "j4ewe917VedQ1Xv2441ibk4p7RYA7WN6v29B6woqFuRtBVe8x4JDF3fv4vVyXw8dLpTwLzT3rjUhUPJNLk74zGb",
  "key6": "5dj2vWpNccvbsWRWvJAeN1B9Veax3XUdXSdH4M6m42rFekXKgq2uzjWSvbR4VoNU5dtFiPkSuJsJvMCngQQd53gT",
  "key7": "4wnpw2md7SYjpBQLCKFWnpexQbujB81gy3e4y7pTpWmk8k2C4kcNJLfvYms8yVo66xy71DVzqBTZ7jJp1sqcXFit",
  "key8": "3mMr6qSqVq8QSXLiGNjBHUh2cKTqYDAEXiVUiy5PeeK114YK8LFPT1SeQ3wtSm1T9QYoZtF7W4MhkeFJLNv5dEfv",
  "key9": "5giBS6YrM3tWbEvgi6rpHwTjdMFUyXjQNnro5NPPKwQSdQs3jPmNiaMjY5Ay9LrkFpr3z6NXSY8hr6Y5KQDAvMx2",
  "key10": "3F5aHFdNrARqARs7dRBxJoxphPhVUBUDLdG8EieykmX5R2MdNxJxtRQitsS8NtZpFtThgkg9Uw4vx7Svqo73MTMC",
  "key11": "5vSu95FSxWapFWTgbDNqV99Wd2GdVi9Jgdd2FaHgvDQHBYvFp1ktfCumdNqC8wn7xHsBPsAEBEh3jN75PDwpTuBz",
  "key12": "7tSufxLAW9gcPmN1GW4RYDPLacgn6xCe5naghJXFnGmCA4LQ8KaA3pTEXuYgTSGeH5qfaHf2hNhC6e9ycdfehUJ",
  "key13": "2YEuBuPHSk8kmoQm9EfFWMWNp6Ry4sUZ5cFJWrq2VC6BiJPKpnbox45RYpZvix6hMsq9yRWTK6gH3W8hYs9Cr5yG",
  "key14": "4MgDUEWQ2o2dnhGJwPSP2LizoDqCMebR99DRMmUikKS68iB9d9AwLmVjVnrnUWZ9WxjtS8K6ZKDJ52afEedjpXc8",
  "key15": "5uPgvdpPmh35DZgyjtshuibtTWxj8CbXZEXZZgGVVwtwmW1ZM2uhmcs75X11XNdDhZTtncKrtymotJ63YCibWa3N",
  "key16": "5zPvYuyvXNpCyhpGfDtDCZAUCZJvGarveX71bfD8ELr2pJpQc8y4odvqVowpPUEuGBLTKYg8yVR64jcESwhx8MsM",
  "key17": "LuRjtQrfnERcFF9mADezYSKdwwSa5sZCbthjYAtDtQAeo9bsz8BLZms4zb99EGqfzzvSxwxSaVfvLZaoDBKNjn9",
  "key18": "Ata2hHt14JibMtpL5YKMq2mkdhiMCFRzxAUKX28ng971H67jQVNwwcMKLy5Hu9AHDWTxn1F3spoXEcjZYvoQzoZ",
  "key19": "5GVLWm4mBUEZoYjakmBYDysrmSiRPdmb2h2GDKgMKJrcVbgcX5KYoWW26uic57RbfdQgo2Q114Y1LqcHLeKABwmp",
  "key20": "28jL1wy3iRG5mFKUJYAKtajKej46U3Bwrgs1Rg3Spz757hzTJ3xjh8zt979VLZexUVpS9iGdE6oRjwtahnypePDi",
  "key21": "5eeYDZR1TRrQETvpgfFFmjzYKscqa1D3XtY5uxyKY9cPCxCHp6hhivGWCE5UQCnd4Ncvaan1Bt9DjZNVTFRCioMu",
  "key22": "5JEDa9dZUFjXTvoj1Yn9Fuv6xmfLq1afHy1RrbfXYEJNVjmdsc2XmDiA5mCDkZAuUUh4ipt8nb8xcuEZqsZoUwPF",
  "key23": "3TBMFt3o75QNChZThPDAPpok78GMdj54VGKqeiKghCXQvNS8mg3t1km2koYY4ro48HTHvkpDt1zCNxAWsgnE1w4V",
  "key24": "3dx7yfieZhBnhwtRp6VVMyYHJtmaR1UMTt6vxxccoywmxMKuL3Rwz9AhL3D3qCeKqMjjgUNAC4634yG1MSoBNpPS",
  "key25": "2YPKuvoPENDr1WMBhXC2jFXQQ1DwjoF5vtnMNsukRbt4NgveTpdnH64ccLco9nauR4TVhmShjkrP4gw61Z1osNFd",
  "key26": "U6noBue4wLUnn29qJnyRL4UdaDNTjv6Fzr7KCSUxeAMZesM6KTkhYiY2fpeqd5V4nU7ZYsC4TuGu1jtFzrzbRBT",
  "key27": "2o8NhhkU34Wbr2MAHqzkb71C1rfsCWkEM547j5EH5jXwMfhxc3PdYW1g8cP4kDtDoxgEyag8cAXj1dfvq8MUGVgk",
  "key28": "w5NJMEL2weEcWi9ecEgogJhN7Vt9VYqVVU6TjatxFCJDr9WimuiHvgATahs6Aj18xioVdatNEceQon24dLJo1Dg",
  "key29": "342uRpj9Qk946WD3tQ7qd9TgHnrjagU8JDytB9Y449DeemYasfbWrMnREvuVAc2dczJawRrmEv65GsTKvmALAett"
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

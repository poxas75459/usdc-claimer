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
    "Jo38QimJ6dKurRynMpCkVw2qGaAbHRMzdsHk8BMyrNkMXogqKBJHc9NJnksAy4THtS83V1jEEHgBfAd3jVm9kEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DnKFHro37kpGwQ6zwNwzZP8Q38VTAqX6GS4sBd1epeA3Q7ezefZDrN8vzyjhsDWSPNagsA2WgvK8y6sVHiRaj4",
  "key1": "dcz87VdLAJRs2c2qpuHcVAXQuVoTsBnSVDx3WA4xftPoPuzGGkJSUd4AEuinoKQcee9A5vhdQcEo4cPCEKXgi3v",
  "key2": "jS1YdjcfX2n7UFPyKwX41b4vhNeUTTwsBEr9qFgqyAGe1BSWLmYEpNW2NS9Udw66g8EqKu6kwRg6Trxqi6deXrX",
  "key3": "5okHguuxXaFHCBRjeUaZ5kNLLVGv2SmNaT6zffanc71fWQWZyg3xqVWbBLchKKeNyM4SUuNhimsTSnUnFY19NgUi",
  "key4": "5SfdACqyyPhgs8jKCAGKtvhNKdf7Jyi4oiPPLHS46XH2NdHVYw7yMLzrj3dUoQBALSnDSoNUYjJSqLVUS4ghRMMN",
  "key5": "4176GVN929K3X99mwP724PnunHjmKU3QMKECZxoqGT1GDbo5NVyUoEnaLq2QyhBaSuNCF3LR6mMPPUkRgcSZrEoA",
  "key6": "27xERa7rzSYENeD4XRq93oTER7KnFeeMhxFuC4J6oY9spukuXwRq7JsSwtc6uJdbTcSXY1eq9gAQKEiFNqW3xtg8",
  "key7": "5Yk1aEu9nAU8vRECRVj2ycJKFD8hW7QDQY5KHybjPaCfBKrACxrF6S4F1RzARs6GFdzByZumo6nFFL2epyk4s6qj",
  "key8": "4jEmXcHzA2jQeWVkdecgorj5Ks3fwuLwnbA8btdqbsyEnH1Dks5X9YjTcgNtJydu1cZrZLXHS7KKm8cLoFmeNTUp",
  "key9": "WBdZdkkmNV7ZEzQzi5fibgCitFixnq8aNDizmMGS3gmdsMXAabuvPnBGq5yzghGiLWhkd1B1iGvFJswJcE5Ccbu",
  "key10": "4jXrS7jzLhmQydEms4eu6idjGujCG7xdVP3xDy1JqEZnY1EzLhPBDQ3fSPAuptpQgEptbfq53PoTGB139dUVJvrj",
  "key11": "3NA5rXkGenj7nAsUVsWwhP2FgbWEh6JdsGgkdv2oexvXyXtaKvapNx6STsN7XE4ZjfaGn9rw6g4y7cWW64pHBhv1",
  "key12": "4kZj2TFHvRHPHtyJjDKA9diQHsbEc57n8C56KVqb688YJUeEg5bnCVbQjDXVuNGA5Zh7LgYdtZFW5LchDfQJbw1E",
  "key13": "5KXretkc1ZqjJAYJ9LGyC3dVdC4RiiTK4fdSyxtmqHGbVYRfkQyTs4N5aaLb1K8vjf8qsYX8wqZbX5ddrsNcvCK4",
  "key14": "35ceYPuWXiH7urMgyPths5NzAevTCreywcy7jUDDPLZkA14jz9tN6DS8Xvy5QbEfX3UJ9WEbnczr8Sqps5duGBgQ",
  "key15": "CAfQqdG6NZGQFQ7FFJiePS5kVHecSR2VcCMu9kJgYq31QhWCnHKMWvEKmmEvkF2TW5pk9aBvYU3JvzsWXLfPDUN",
  "key16": "2mv6P813SYrSU7LBJ9XemYtstQ3dAMedLbYNudrRWeUaMJ2EBpvr6Zm8Yf7bAxwPjjvwbipXm2A3ugLumTMf4Gjv",
  "key17": "5cYHTT8tByNM5oMd6L3MyGHtmeZCZWrMNw8sw8kXL1joELF1Q1EEn3M5WjiaFGTGQt38Wi3M3rUHdsk76uNxWjyG",
  "key18": "2rG6uGxigTvfCbThJeCBBSnJPWRGhPY564bPuhRkvMyXJ5CcpxKQap763mounTsTKeAn1eT9DmH75qiekrRKkYxX",
  "key19": "26WExAizxU2pg7d5RTb7QRu9jte4rX2E5J4hf6p85u31VwX4q83kCU1a8fptiFRvEyxs66qK5QwW7bfrDwJChtub",
  "key20": "4Y1UsFDVaYiQLboaQULsJAKpbXUekpv1mRutfeb5JBPnyY4Nop5o2SXpBn7ZvqzJdpx4fvEYkscXNeDL6Uv6eBjy",
  "key21": "4fCnSjqDMBFYA2LuAxmDBND8rAPc8WnwTfvhDzAnkmaaWcdMRBKAPtSzQnj1NZNgfGxsvyNbwyxNH4CWeKzVm6pk",
  "key22": "5bW1mt65fxPA79pHbVKM59pz5k5HK1AXmsCmjARQ8pjx2AnpCikhQ5f2hu5t4LXDvpUth5owaBYWdqFVf7F5q5jx",
  "key23": "2E3THWvs8qM7AB1YTurjsw4JPXzRoHzjVcuTLPKqThhxNVNiN88Ffr1G1J2MRWx9co8ctANjz9ARLRMNzqd3yynA",
  "key24": "4EMFjXDnmDLcAUmpWtMxCv67gHv8Kw9MSeJrHHi3msThaztaLbUAU2qPk1Avx4oC2hwBD8BPfyDBYk4hRPgG2pxC",
  "key25": "5ipUvJqoYxKZ2QbH5FbSAMMkowfvUmJwodKfaLQTZFGib3ZjZb6HoHLZUQYrLRAajLb4hfbsCrxzGjfTxzLHug99",
  "key26": "2SFQY9sBkLpZGbgi9voiYDg9zL6gsynorBA2DEgj7iZenWKBzmQ1E9irhNBkDMnLTQcpRqvTQyQKcDCs3hCEVv1o",
  "key27": "Bbu39Lt4rAbdtWEvnh6VHydrPv1XjgUoEi3VhoKijjVZWFu5zaURfLR5uJ9aVyTS8XHNVHaNm8F8xACH9mofW9r",
  "key28": "3QT5eXq8VoN3TwGtbMNcToaAsbJHwvgSxunFhnCD7MWv4cFSLKn5v1g1ve1y25DB7copYiMe85527Y22yRk9CtJF",
  "key29": "3AdVQkSwWkJSQRVKtTWjgL966Mpm4r84pws2tZxKS3E8YG2zYnudvZLiBMwRbhtDizZKrw9cX8E73h8XSCtqPaTY",
  "key30": "4nNsLr6Xb5ZR9DyJifvgtfjRBWea3oiXpVHRJcBmA7ZEtQhSMEY5cvFbR8w73x6CYf7c1QfdEd73MeM7vnKoGKxu",
  "key31": "4KypGcp8jfjqGc6Ai9XiDaqfE42knQUbe2JRGXHbydJEeTeWtERCxKbtmQLh1NNPHQHjtcJtkdQff8Cjoko4NXMd",
  "key32": "nMGmmKqU7JMPX62XbdndFtjnUU6aqnRmyFUWgAJgBqDQMbwuUH1WbJRGEgG5X65gXk4B4ehTfDsoTGSNGdRAiGM",
  "key33": "2ziLLArDiEZEXRj1Wf2f39B94GVxB9KUMkDdJEi7g8MmUG5NoDNT66zobAFAEsBowLeVNPgF3bJPDvncoSFDzjCt",
  "key34": "5GmYc1XCwXmSu9Ntat8odYDCFxkHTcaEJGjdGERFLKYvcWVvr7nbqiDsAo4iLRNEU8kKhuR5kFi1ZcX4HAuWHw1e",
  "key35": "559yJcQJPxKUArYv3UePFeoGtmw9RW7k6BBuaRdgwca4BZtyqdGXGa8zuADoEZnVDD5ax7mzibSYP86YKUt6wgk",
  "key36": "4dwwVxRZHErB6qmTbmjGw1XUpKeUhu7KTz9V5hPYA7qD7rPYwvQaCiZPHz9YVKb8RVkR7F1jjCKNCNQ5xEnS6HQB",
  "key37": "5G6K8A2LBK8N3nHoXxJpU1FBDqb13BNhho4asQmCLMnZhbQHjjFqrQEopmVzEf1fBoaMkUXwTk2izb4g6nG8knsM",
  "key38": "4mzAc1VtmdsxMdThnL8C286H7jKwh1EeKnBXksFoauG8o4d5KBfD76D53H6nSSyevZH6Ku6SS34W99pDDjQmLQR3",
  "key39": "2UJ5sECBssUL6uutcsMifCrrpA3M2sBrAZxXezXFvB5PcpAuTfEo6TX3WWUGAJSSBiDspte9szzFRsxAZYRbf3BK",
  "key40": "qKGk1HDfHzZopJoeHhDHK3U7ALpknQ27P8yXgkchRqiGjk9HRBYXuYfeh1tJHXjDmuexwtBPdhh2qkWNQPTfNCV",
  "key41": "src5dX1vaDgTYM12jjRaBa1n5yJiEVhbFE4Lvm9QqDzSdViyRHVTRdhHMVuWxeF3XsYT65BHLkxib9VeDAXdR6d",
  "key42": "TX6DKCvKBHm4kJx8JqL5rZWYW2pvWxw8DqWGrV4r6YJ2XRnnAqvxeSfQMPHwhcauuh4P3SBEnebNYosjDbDXGzg"
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

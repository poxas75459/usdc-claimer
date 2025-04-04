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
    "3A8c81P1A4DYXy9BuHhChixn856RMTSaQACxzFeFsWTi9zdPRmHyeEUhwFsf5JFCnRqzg1xTjGcxs6sP11Stct6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dR6vGSa2rScgccW6MuW4SML8ySC6LoK7qfjixYuMa6VTadzAfePaYv4nyj95yRENJubcvWAu2L4SibZmNYCDYyD",
  "key1": "3TrzqMkW2yVuqQocu475MuEHGBBHVoCszgmSmGRL4gau5mNvBaB7TUYFfJuLXvQEB5ik63WhNemKQoZwH1e9jpnS",
  "key2": "49mLKu5yLKhQTBnaGw5PBLwX643Y4LdVyPC7DNRupiC1bEz2iyXBR88MtmbRJLXd5dJww9kp95b3rNZxaSKmRFY3",
  "key3": "5FDXxMJ6cbnpnZPmBT431J87sc9hXWgkHahbxiNggX1VqJo8VfAp5djsZmWvENcWTnHmTJFsZwoiiKrr3Qca1C4f",
  "key4": "28Rb7wVHwtJC5i91gXc15MHXwy4196EKCYyoLvoEEFWk1VzefAkx1NZhDAHodDE4sLifzvLEBWDQLUVqKLM5S44y",
  "key5": "5EiP6CHrvxSvfeHmgxbdzB6ysHgbufVy87YLjsQ4aswZTLg6m2YDoEUaPNFoCUy2XN1SCbFjR3SzXLTXatVmDoRv",
  "key6": "3QxFqp7oueesxNNj8GSZqGZetMMynHJz3dXqdmJBHZnUzFi79dXK8H872yJmTa7SiiWpXAezh3E8hCJaU3WNp5CB",
  "key7": "2sMBWfZcs9mWyVXeACPmGpj4jYDmnD395SMUqJzjkaWFA9NUj5t78eJVu19fyDkb72tBYWmhkZmjBRdzTL35FdwQ",
  "key8": "5U4hCqkvre9ftKgYxw7mePJ6J2t6ar4ZSowufCV9eHR2VzyE5F5xC5soqVS719enHKggAPxDCLPNB8q67GRRkosj",
  "key9": "3AkjZWF4XKwyXEuGQGRtidNvPu7XGmuzEcHzSMoEQPiPvPgc7p4JcE7LSjwhSqPaenbM5J6Dpmf9zuqphLirbmcJ",
  "key10": "5uQXrAxHmD93frCmn98urtQKivMmJP3xMTYTnxEfnb2mi5Ler6JkXrmKJt2DghVj4rZmfPxqqczMzvzyGTYfxK4d",
  "key11": "5tyzoPcAsjQSnZZdNnZznDx7xGBsmU9ERSNU6118PtymCnbWuSM5XHM1JhavEeZKtfupSMfKy7m4KERRTaN5HS8R",
  "key12": "37HCgmfXGiSR6C1m9nZ7kvCxVDTtkHx9dzrJpiia3nP9HQur5TH32vGpp7k8x629PVb8WT1zLaFfFRqqs2Gjfu9x",
  "key13": "d5TRy9MJtnnfTaMaEmTsHrmtSGKFBVFmymVbAvXM8FL2Xm6HdAkoi4HXHn6Vd2GG27sgzoEpcgxBq1hemSDNuja",
  "key14": "2ukWMogokkT98qpo4SLNHc8JwBRyTn65RjgUPyckru3eAVLVzjmHCGj1JKYk1LXdkz72tBXkzCKornoCj85CacsB",
  "key15": "2LZsttRFkzacz88oRxi6pihRRLpXBKWZ3ka9wuEdZtyvxXWqMngE1EiP5TrftdUZ5TkaXg2irN7SPryqSf2WWyGf",
  "key16": "AcPJCLwNmKXoz9MCrW7jGMXJ168eRyp5CFViG1azGRPy4tRYknHGExtxPmjATUxh6BxvqyQYJixSM3grYm5aSew",
  "key17": "Kx4zJAYXJZjnY9sGkxrVGmsCPLT5vMDyzsHStnMyPApdz5bWpxui3ish7Kmqzc8BvhPh2gpQQd9szme8ZN1PR6x",
  "key18": "LzEFsZmw9burdewPiypEpYP4vB5rxnkNjGxaprhhHvGUHk2mogWYQACVqwExgxQLJvNkfSZNEX8b4nhWHHj9Vw7",
  "key19": "4ZVyZ3VkKisFkwjB8cnKXfsXwo99eJRdTuaNRGpqTv8heZ3bNhGtPEjWYBJSnTAtfinJfWd1ij6vwGByFidGqVAQ",
  "key20": "4F2Y3G4XeJLAUDiGznY8fbbCne9oT5Vn1MsGzhvjxKrKbuqw6LyPnYKqrsHmcZ3GTxipacmgLGfmSprtC8ekSpbV",
  "key21": "5PXv3QdU3vFswXuwT4sM8RzKoWdW4FetEFAk6m3dp1xGYqLJ7AKGuRoKNW1s6y16GpWf79YMEpPwZNNzUhiLdkZm",
  "key22": "2TgoJyVNUprm5iMexMSYZSD2W5Q5ZwPukktw4FoUeFg9Rsae4vjx1WFZhjPNCgtAg3rwhYpJ9JYyyrSfWtAMDSv4",
  "key23": "5sJKxUrvYiaKp2GWpiYc4We2KEbTqNvUF9mYZw9tZ1UtjSk6dVm5FPEcNzj2dU1xv1xoaFDiRmyVpsKeYhzQ8u7a",
  "key24": "2SfahfxkJwesUErykp7DEFXVHYCzgLtCMqnbvRTzWTRgQHAnqTNo2HoVDCKbM4w4TVAkJ3iShhU8eSfhPwLQDKji",
  "key25": "2D5vASd1PPBJYzFpCHxkEgW8hHikMpuaZfNCifCMChWeXqawanNwzjwE8C6TNdfBQAcCXuKTWqstUmCcj4a2if6h",
  "key26": "5VyPM91YMLruEL9qDMKSgB8uwisgc4q5BVs2q7gq74d14SYBeKTgvDUrbNSm1TJpNYn25AxdgSCCmXTWxi7s72cB",
  "key27": "LX5tjG3FHZY8rB3W9uHwhqfbV71nP8S8usX4jRPCaWNa5hCTgLvjxBcCVkya2MCamsNRzY7s6Rkfpx6ddZuzUZj",
  "key28": "mv26FbXwbTknyBzus4Q76VbwWdVBFFLTkCv2bEzHBW8z5FdZM7YT9PYwtic9x8oibKf3C8LA1wrN1R6DECY1GhB",
  "key29": "3RqWrA44GR4tAqbCvc95JGkrjStw51TUXw6etAWinveFyHgvjGocBPZgTMS9wxdVmUpPXWpJJMmLaH7YSaVKypbg",
  "key30": "y79cdThjJQ56xjw1jMN9kjdYAGQGS6N1ktFBTAq9e93kGRZ5DNcuNmn5L9ffCjc5YKpwSxmEYfteLHBMx3U5bRR",
  "key31": "3GAMuAf44CqKf6AAzFaYTHkmvyA8kLHHeTZxYEzAvsN1AFbzVinGXXnitTwkzWGAp2R221iMbcLwFsFQKpCKF3M",
  "key32": "5UmyQa5bAK4j1c8NYRrBKY4YYuHsgqPo2PJpJkeYYmUmvKLyNn4ARzBtoQg5F7a8H3vpaDxkzAgTyo6ZiBULYtNc",
  "key33": "4EazoLAkacDLeYCEidgbXq1UKapYzHXwnhMuSPCLLur3z3H3w6JcRrmaj2enCG7MrPUagL9Fyv3YsNtDBUtPHLM5",
  "key34": "3r9qK8zKBwJaZm5qGyPQ5sMcJ3QPsMLwHwFNi8GzcES6SagQqhHdMPbvsstqvHmCxBWmTvC1N5SF1hZTogiSUcSX",
  "key35": "2gZVASt6PJQkSatGRWBUNauPVWX6VaRtoG3Pb5iEv4AuiQzYuVRJtcSoKqio1sFhzkynNR8ThxYEyQNjETP1W85p",
  "key36": "3YYsvs5U23dvBNqwBhVbCPmJuGgecUVn71sH3xwKqtZQ764qJaPhZ91537iGxN2T8i4GJ1xApKYyCKxcFvQAFcdB",
  "key37": "5uihA3qx1z2zUxwfYoexKurG1LhQZb9cYTv5t2JV5L9Ey86wz4dvgVm49kbeMsZk1nRBy7YiratTypkgQQ7VQmJ9"
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

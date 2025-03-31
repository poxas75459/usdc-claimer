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
    "4wTrM7MWzsgBWDZMbowrVf2y5dP1xjDs7dBcKicH1Jji8HnPaEXrCWKxwhZaC3ntPXUgPgwVyuy5g1LzToAvTGtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbBuHpFBnERtLZgEkeQ83setW2j7RCg2sZeWysei4JZrPP3S9tYHfFEdJtui8YbyYXB2YkdYJsbJkhv7e1fEk2G",
  "key1": "2LcUaoBzhFDvMG5e8a6Pfdxr4bCShwEqGUeaABNDpTgLSxB3F3weU5MqQZ7V22A9a1dveWtmFoVryhHasWWRiTK",
  "key2": "3yb1KhYnhprJCvC7BiUgK5ppmNSjEJhDj3Zq5jnCcUHxvjS1t1oXJXwrwAicinGcGzGPmYD4YBHmTqsEBA85SKHm",
  "key3": "51Z9mnHrjWEn1eewnrTEZeWQU8bec4cYweKyJ8PhwF6gF1dfooibSHdkumFzuaLDELhFZskXu4GU2CDuRnBrSRr5",
  "key4": "2RgRwixbdGvLrULGzstRVFJoFaXzccr1csJ53R5yZPanrG9BXGcV46KGLoKzY4ssRSqkeYT63Mi7D2Yy97W4soY6",
  "key5": "3XvY1U1Fai49Vj2RV6NdgB3uo4qPfkUAqa3Hx9QMZRC6t68jkVhMyFdCwKwTR6sSNDwuJ378LVa7ZKXcaCU9z5dX",
  "key6": "4e52meaPZQWLSBWSgzFqzqA1rku51fdLq9W5oXkCzQKt7qasusFsYBQy3rPh7PfMeFzKCWxkbPiBFjeqeoqVuKKA",
  "key7": "2FSJRafjLDBq4fBR4ALekU6GEQigNHB5Ghb89JvZGGcienoH9PpXbVbLJ2L2YSu1fw8jiYaqzL5ivGB5uHMaKGGP",
  "key8": "4Da6Gbp98p73mQh3he3DNqFkoYHAcCwjUfU1TkAEUkj98HcF1Wwt8cWwfCAqHnaDLacwQkTSpz1W6Ya7fZR8gVX7",
  "key9": "4zWLbfGGMPJpYZ3RFjJWWsMbb6rPaGkBfA8KLYvosovVJXTYWHbWA3goLt1fwo631pcCCeH4fe9HVDJVbTkyzARH",
  "key10": "ofLrWqWzV246Z6AfsE13KkLgjYKqxSgWv6o6SH1e9jGUpAnbRHNB19Y1Rz8GgQa9Mt9AbJV2iZMXBBQY8SUderP",
  "key11": "63zz9crZLpvQ4i3mtiGfgno4rj1g9GP1AdL1v2kHWhkWjcb11W5Kv4gaw45sX2aLBe8GPukfWB3tqKDiyTk6cdQz",
  "key12": "63GnAhTbvXyq6giSiNs7BvFxjboGseobUqeNk6eWFgjKw9zTM8wyFtJ7m9zVAYdR1J4eXc9wxCADiZ7AL89BtV5u",
  "key13": "64P5yLUgLYEwLf3vfgqt8zNy28qqkrHdPzGaetby2XQDjqooMjxAHeMRDdijLXyD3eic1P52FB4kvdbFZNbFxdY6",
  "key14": "27wUokovRh5Zh44L9RsChepGihKGfJKBuh6aptZvRnPyAPH6qjmdjs9gcxUfYrd23km1Az2aYx1eLVJBxU51Gn9k",
  "key15": "2uomYqQrttPDnnFv975KRC8hq27X9mbXtj7cMgzvjykdFPyZekuJYZ9Lo1SUocP481cdoW9vjqTxoGTThDg55Q8v",
  "key16": "HAyap729QgaNpLBfzd9gwZqfPp9yeWtvn3KFLxHHppbsGV1LoZDco9ChAapqT3CXgDJi3tsLuWBnFq28cUB73Gm",
  "key17": "53tPS4eFYRGywKoGdFeuGeAWLVzM7tGPJmyNtaQE12M38H7baSYrjmVRuF2KtFiCEvZ1iY2uVZ1R8QfZeaw9ifZK",
  "key18": "HVWR8SQuktq7TsiwLPXfduwfqFnRdbzDpuBHVAart754oCyPLVFdjUYRLiNiYFbccrFMTnJD35mP7WSBUdhHwpc",
  "key19": "2Y2tjnudKPaNTKc7y82W7offhLfuhjidTd1kiYfAgTt7JL9Y9MUmWufUAzGGMtQPFPCfJTvQdhyRdCeShZ6bBJ3j",
  "key20": "2PpwwwMtGyiUramoxso97YHCibm9T9i9SXJ9hCkSPccE2ofdcUywBFUv934Ubn2XLFTHvbQVCwRsvhsQv4D2mkWR",
  "key21": "8vnjAYhdsFAU6KMNw15aKWTVVfZptDB4dEPJzQfZ9o3qCgWtxwTr4AgNhdm4Bav4qd3n2p4eedEe2s2WfyeK5YQ",
  "key22": "494LycPdf7FBX9ewhvCcWktYtaVRHyn6vT8gjYRGgNCFdJjZJimx6sBDZ7GdyTzWNGWiy1gQN7NswiDczK4Lmgjq",
  "key23": "5WkNMaCP1b2rxL8sF6bUvj8K3LBQy3BabvkH77mk6mzgzvbNRGkRD2YHpwJqaBmNwAFccnZzbuF1Z8ms3nB2sdbF",
  "key24": "LDBxy8UpQeFRGiivLKBKyeo8qbYDeVcJFXyvFHT28QnfK6fzXUHpCFZmj3kPTh96GRA86Xe4qCkV3LWWuEJvCu7",
  "key25": "2Ewtc5YKHWXtPLu8XwdD27AJuYxhrNax9s5L1Pe3y6tKuANtqiCY9CdzUhjog8Yy6Gw53tbvtN7Y1oiLsLYm6QyK",
  "key26": "5vQYedpnw42t2pJ3u8fXnaFXajHjrzxCQGfeaNYvvLxDtHkJQ8LGQgdwUiMmgGwtWF6RcGGUCBgyExcb7qRn7kMn",
  "key27": "2zxd6WccDfERX4v3bcf1etszoHUxgdLUVRx7uC814JKqpVH6kKwKkPdtGC9WWUbUBpLtmx5bRh3JuDA6K241oZNe",
  "key28": "2kxgF2kDFk8aH3hyuDFfw374jah1Ynakb7SK6ccx114L5m6WuT8fmP8oKRs8LtFLJ3xUdNKm7pGS5oExknqT9vjL",
  "key29": "2xjAyK1vdAx7syg61t1Kp4ECka3rb6e5u3HjkH2oNCyA6wfwQqSix9GMvtQXZjH3X8b3dBQhx36A8akd5CYPLdhf",
  "key30": "5M14tCgV4mEjW54CJVrMpGoetJa4N47XTsa7NmWHwQbuiMBbzw5Su4y6NNxuvHTCdLnKynLVZC9Nh6Dmj8fc7gzW",
  "key31": "3xMpj5gySbSUok3sERvGQLDcMhUxBZNu6yT6mAAsBX4BfS3LADdD1565dZesAh4NftBqzQLo4psv6XZX8uzqjp1f",
  "key32": "ppqczz2ok1zBWWzYAW6fvDuRMG4FVcxCt1xTFN3NFH1MYVyoNWqri7tmqCWmCUyzn36ucesb7u2GaJA5Q9zBxAx",
  "key33": "51Z2JykvC2dcAKSr7usDPUm8TUbE8zCBMkJAmisavC2bT54SdP8RitYKqqDCGy7DbPNSML2ZGV5c8ne5dUqpAUA8",
  "key34": "HR3EU2BepseKkuLHTLAbidu7wTYZKGm8MLc7PBnQAHo7u995Q86W1BpNSkiQ39XuKAmw54Z2ZQKHrKMtRuR1zZr",
  "key35": "ztdMw9a67aYmwNKadDC3HN88omxXBkYYwwT9To8bVjRC3Fy15CqMcHSGjw8y7QcGHLAtS5i6AUKWxcSoFaiDwGD",
  "key36": "41PcnP2t9i5Ay6HEbRxr4L9vrtfRgubgn8YGyoKmS6x9HKRYH8VN6bX83grKVoyNWW8FDvbC7TC1KaNPinvNqxuh",
  "key37": "5D9ktiMNmaVEWVHUZe73k9Mxtha9YukG37VjS767Pwi1R99pU4Wja2YZ4NiyxCYXYbc8Swc43DCXwxHp28cRn2Wj",
  "key38": "3t13RkykgP1rPeP8FPZpD3QfybG5rKCJtR55x6yMR5RcwGx93EMw1WFLnQpw5hyKPfgabaAgUkXFEZyz6yc9NbD1",
  "key39": "3TDAuhj64Qwo8dVnmUbqFThNL1wB3kVh5ieYpg4XhMwMru6MpfJJAisVbKsrQFtUzPJUyAMuTLsGphfFtiyGd9TW",
  "key40": "5GS7j1tT8R9X9UZcQVPvGeF9kJTUnMEK1Fti9tsFRvTQG9JUjUPfBNRbHR4qYnwAfoaqbDMQ1EV89PjfGJ1gb37p",
  "key41": "2ng9dvVKNcGV9u5K3cysPD21igWKT8CirjF9vt3Vxm7zt6FYhp1ss47oknWpSjDnWyZrqezpHT51euXXCyD8kjpV",
  "key42": "442gCnX9w7K3UP1TGfY72bU41i1p8Bvwt5GMm2Cvb1BzqyR6VSY147nsdCyHMnNVMJRYTkiqhjWSkBGkf3ppNUrS",
  "key43": "386JEEMSZan2M22VmEy55DuxVfmpDxzbJgAzB3vNbTYoKDF6JQ9cPRDETjSXVZgc2Jo1nCg4tmn1AM3R2chJxxnL",
  "key44": "3wM1TTHLBTXzn3UD6YEKLyKvHQNcNXAmQ68Tq8efPze1EFmtDT4iFadtyKFixM2pR9MGTieCzNqdnqawnRKmCQ3d",
  "key45": "4rPdp7gKSu5GJAwfqcZrKeGkrFgR1rgF2G7inLNVWTrJvg46tFdo3UriBbkCrni9CMDcofiFAcTxDaTDoeAagFmQ",
  "key46": "3brXPRmjyDRCxigdm7dAo6aJoXGEuGT4ND8o7EWCRxjka5Jk3z8JiwFTiT8b71NHGpv2Uu8tFwFzsv5EmLyZkx1z",
  "key47": "5Vbx5hnArdir1NgepP7YdWP8ZcLEMnjh9QJ9MGKyKHJJ69UwXGAay86h1qBRQGVzgDXzVRr5eNFNaJdn9U7TcnFM",
  "key48": "258KRqwugPmzoP9TQTzQM7kYWFytF3bkfoEVZd4SFakNDYKqErHFuHE8RtrSXPGpi6u79gzCUwuynYtYmLK5Zyij",
  "key49": "syHT8yT2eutQhavPYaPCYPMdwfHWJuZbFr2xvJ1wp1noBMsZdyjfhs6JwzhsyqrYG2YS3A4UawqfCTrRjPKXQwv"
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

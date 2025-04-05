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
    "2G358yKgnT12gif9puvcJJduGG2iXsZfg2miSBF3jn4jNQyNJnbUdReCWJv7QM9tDAooXhJBkWVbGESFAW9jUgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asB8Dvppsa9daUG6trHsiggF9P8zA655VVo717fYzab8934qo9fcn4iThkAEeqpaqhtiSFCFUxu4PJWVQxLuvwe",
  "key1": "4FmE9VMYtQQWEoLkN1imCmbrMZL7CgtxrJ21jsNFRsjwBBk6GL2Q6Z5RBupg3ALhAbR7WymzWvaxK9oRrWr7hnpo",
  "key2": "8cGyr7ncLjqEditCyb8G7qPMcgEi2HhmJY73Pp8kEPRC8KP6Lcgi4xU4qrqnPnJi4zLrCaMKCpHUu8dMx3xxvRp",
  "key3": "MhkVTYcuY42ptDjEDVTuaKrhfsYU82oP7VxNKM6xTf8UWQdBNktBnkqRv49WJrg157KZkPaKoQnreF4jp1HV8iL",
  "key4": "49MeUdK4ww1JkDmwhPFACosJxQ5vfKTnddUvKstm3cPSPgSRqKWzuRCRnMbdqfnN9WELYHmkM2JNNwuE2HvxTBqQ",
  "key5": "3Yek1Go5uzD5YbuwzYdGCiCba9EXiGBSBD9pY3GLGAdghjPvK3K66PuJyLSmtHrQ49z4Xd5GC8VKWqohMLT9RSBg",
  "key6": "3C32jp2ckuNoKif1CtmjyqxjtFHbUprZckSXbbeVYEnvv47T7ZrHrYDdkrX2G8YZyDyTXHAqVx3f3ZBYLndedyhk",
  "key7": "572gjTgbubBBqVJ4eBjY2i6s8qyWFZkLJyNoLGvzY8iS5AiaVRBSysVmx5pKEZRoEfyoZUSeZmby7QE9hS9EYTMZ",
  "key8": "kiv2adrQD6TKANC93kvpJ21SPbhfMqqEvDFCwwZkE2CQ7jGPrPtTqRPVJhS6QDqP9MsZseShzJexxVbJTqyFJ7D",
  "key9": "5qqYzJpSd8CtE33x5pPSszJ1EmEjdzDWHLLGaffGieYhmddjCrRePof6zBjfrVMt7FsaNV32EBUtDWGgAfvCVMLG",
  "key10": "28JY8qi9WdZA2iQhZoYVwyYYWbwdgWwP2keXUiM9p9ubqZbJsPY3N9czzXq9daiBv43VPAWZuuPJ8RdgXYFFSo9f",
  "key11": "2J5KbfUTAsdpHr4cVT9BLu2WFPA7eALNqGfgiXKrdf132p9jMxYRTbgiUQF3Zf4xAmeQtDxw6BYR2bDZHRnzqRsi",
  "key12": "EP5s6urRxwex41GfBLJqSYLi9eMrxJvBUDLpZonmPNSwX8udh2pSh159hpeVPxQcy7Tc6nie979FTivcoKyiScp",
  "key13": "2ZViyUpDDbhacoDyVmkMSZUxX8F6zari49me2vq3v8jPmSuRi9jVb5pvodFXLUvp7pFwqMtJNnS1NeHEm25XyUyH",
  "key14": "YW7WPySzE61NchdE5agBbsHSDpqB2rept4ehPUpjZntGwbvfb7SNM973jrVqqLFiuKfkga2x2vXi7nsLjaYFuah",
  "key15": "4i52pMAuFZ41dx1y8JT2Ko75NoEWGa3o3pbcbA8rQJ7CCFJZJUt9QjhgDwVoGTWs48m3NG2eqaWevkJEbwfx7RoZ",
  "key16": "wTWrGpbfhSK4n6Y5hsPQEf9EvqdbXPzdQiSyA82ZWUraWoEqKvsN7Wrio1F5nvrM65vhFfr4NogAx6PjZb8Y6zt",
  "key17": "4sZzAKpz5ZHDG6BEEFHS7ifE3qtvCuig2Hfm5pGU1Fwzjoyt2QuBvyQXD9Rmo9uzhLiMZuov4mMivzagGy1gHdBY",
  "key18": "5Ss5Y6xLpZvtEJF7tHaGv1hMkhTH6VSYKNKG2qg1U17EgWni4D7c96j3qsRQVsJY2kjt9oARCaoWFtAAx9rdU6fG",
  "key19": "53V81gqH4rAtjhJAz1uGM871xE5D7Csd2gTiPiL2j7a8PSsrCGiMCHY8zuAwN8mDqqfQ4HU3F6rYRskzvrrGYyzV",
  "key20": "2VuRUyBVY5bpQc5MA3MgoYe3qBGKGQS6AUnpAC3PTLuDj7wQ6sks4ZqJd3Lzhu9F8dK8Lx6yiUecBmz4qVZ4XoVq",
  "key21": "5UPZurj2ZnM4qx1AvEsZKCu6PPoBFiYhMkTaMssxX6Tv84q5Y7cRehdVqk3wdEVBxj8yu6xGLUUrugo3Pruz4LkQ",
  "key22": "5fdFHeZpss1awZRcdq5aHAVtwem1E17YFQM6ocJxsC6DSbhPQcAf3onkdm7K7EhXMrxzvvikiRxJo6jtDMsePTiG",
  "key23": "43Mpap5rM6Kq4PupMdQVKDoh1hy8XkzUHPoS2ByFUg7aba7kc6Rbt7avFqnL9iCswxJnAcH8Hm5AukPomm3A8o2Z",
  "key24": "fgWTVivhfkuVdiTAo8QMxzvBzAFZbLeRogW9YJ5AeBGpUsCQXZwtNjEqmHSMoarAmMucyR1raK3LcWaYDJuYRyx",
  "key25": "3zWXJbrzHX6ig96fQ43naCxe29Ur1pmRmQWx3HX5SzaV6zjHUVU9pnkjQyfiMPNofKeytGjT4wuZN7pqinqgT6jC",
  "key26": "4nJtEoZkffka3A2YRmH3ZM8wWVwz9pvfxFT8fVX4nzPDFLFd2eFh551qz5W1YZWEUzyTPLfh4mYbUd9r3p56xk5P",
  "key27": "5ysq8gPWxwyBSsWtL3DVaZ2cUqJqiSSw328NTep1uB7MKqtV7ysqJ3q3tT4sdE7Kbw3sqXCGeWoYTR45TRqzYnHv",
  "key28": "DyXuJjwTuHw3sCFxX6PHLztFhpvUwYaJjQVp9YrimeR4ne1RP6CBjrNoMVdD4PGEkiYqe86v38j3TYFigiKczcC",
  "key29": "5hJD3WBuyszQDoBztyRqejsLSKQbj2Ys72oueLyS1L7nw8oLhnxFY8j2GpcQL1sa7YssMxtGRf19VUvV25Dw9qWt",
  "key30": "2FSFursKCgpRJi7oF557R83RL6cG9X8rpD3SyxVcnoY8sLQRm3DwLeADqiRwjQa98Xw4vzjaqtNrbTFLPCwgbTju",
  "key31": "4UNNVJNLx9JG8caCaG3YXm1gQDdMNMZsEM2FtwXCvTYPm3gwsAWpJADz78vahmoc5RbWBbmPvaHyuNRnzNEpd6u",
  "key32": "54QTKYgE6Dv3eY8TvsXBD46poxkSpbtt81tYrUCCAfUvvvTaREG2QwmYg7YN4mYXMEfRDbsLxwo2XJ6TjCE8KcGf",
  "key33": "5bNL1Yo2cxn876iXQxjT9tEmQ7VRMpmeg36gS9JSFbTQSyCKx8K9dNAEhFbEpZgtKftyYdk3bibPBwHFK8wD71Dr",
  "key34": "2kmjdC5NXGD87C4eunGPEBFAC2rkWfVCs6mFP5BQSqMLEYjcdeRHFjvJJ3rs8QnftVGLVqsW35eYPopitYZm2Uro",
  "key35": "27GpkHMsoSZM3UcA3XmdiwRr7LqG3s3e7ZyaXZNeEYfd5danhWtUwaBi7Kbp5kqJt8Cc3HWCyNkQy37Q8r3JLAy6",
  "key36": "4GPTvxGXaM1RSMtHybZzpmbPPeMjumU2pMWJ8qvhmmE4A55FiREZoe5GSYvzugHEsQnnte5SQQdnaRiuS4smPayU",
  "key37": "3BF243ZCDjiFaiDwsmxzVcKbGcbduKRPmLLveAqdEExw242QvnbQWSc1zjWHiMujS7YuM7jL1NxX7JefRb2gbXF2",
  "key38": "3j2gmVudBExrKGuWc6MRoox95j4cGj4fUTKtWk1X4k2QCPerkb1g15jCJK4Yuet7citxMopBZYZc4eTKEbztyvJt",
  "key39": "2ZKE9MQWJ8KYzaAiVYnjbTro5KY2doW4dVWY3XDoK3QfBpFytsFetjAr9otsvg4DaztSBnwbbzoZuaZ5NzCJPrzM"
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

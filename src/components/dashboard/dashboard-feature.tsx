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
    "41Uw7kjv7mDAMJncQ8KzmF3xKUPhZAzPpmhsYQhcEuo3vcx5T3BgoaBvykjC6DNwRCzoRnaiL8jDWrVzfYdNGs2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M34VS4qxWwa4jdCWPJhP8Hw5jy6og25yktwQorJwZtwTWqVsBtSNdMcGXuutok7KHfSrSykrm5ss1SaZtwuK57R",
  "key1": "2H2UAY1cZDVaUFkKgffj2W9M8ctj9CY9TEN8XMpzrcheQmAXH4jvaMZXipPMy5aQ7odFcDWtX8d8YDvQ9Cg62XPU",
  "key2": "675ZLxrw92tgHAM5hRR3FaJhRrETZyLeMwh6A9pPCKPZzbXyADydE737ZyMyZhaLkcaowu62vSg83oqQFPN5waBs",
  "key3": "DcwNW7dem5ztRgYirMpe312o3KmDTeGm6dY3rDn2uiJEznJ8viMKVLTWnR89kwGYWSLFChokoy6LKg4eXnEHRTG",
  "key4": "4EuqszvTWvvc8SjjYC6TjuayUxKTzxgz3b8q24W4GYF9bbfYFiAExsegSGTaA3C4C36SYFEK27bRL4bu8dcDUknj",
  "key5": "uxPEeUdpKHMGhCeFyxyikmPZiMDkf12Q7URL4b578mtG2KfNDkkqt234MisFtPVnVVni3nJxd8SZjqpLEFrd9sc",
  "key6": "ejoQxmYTbQEreVfxKLn7BUGEYM2fVMs4MD449ts1auPagr1eripNRiQbMXz1tetmqsoeFg1cjbyzw6Vo1aPYaCJ",
  "key7": "5XqiabzbMQoHSk3Z8T44SR7PWvcEpWkXQr8anTcWQHrH1HWdN6CBqLnJxq4Msjn9WhNFqEMoGpCeqMJNsiJph9mk",
  "key8": "X98t8uGX3eSyM4MR2iQMwrvZwxK8rhoTWFCcTs6vvnwuRfth8tR9j2pjtyHxQEFffCvahKcVH5c9iVxmt8Pv9EJ",
  "key9": "5faVgfb7KfVyC3EXg7T44xLzZN5QVc1kY2DRTwRggnf4khWLijtdrNMGRNVS7gCzUJoVziGkemPWuLRRUT33fYfy",
  "key10": "5UuoYBJNaoDDG74vGgbJnLpqii1MA6TwnAbyC1of5PbqhdRfVvZfGG6DfJeLCKjgxiKpXZ9m52XGBkQYjhMf8NQh",
  "key11": "4fobTy1RxCAaHUhTXYK5fW18bmdhBtLVAGFnE5cA3TqXmtt7iFFkrf1goBJ9VSZJVL3M9vRRCR6zJdf1e5ujJdSc",
  "key12": "55HWxRqnuefNWM3evkeKWZmpXffycohNSWnmsqJCtQXtAWceGUavWaMGDnWeAXj21843qsB9o66J2ykcb5pCMbGY",
  "key13": "5oGwrFQZwoAEExdSsisTdfqRZEbN4dXCkYBeoi5qM98uaD8QEoe6TG5theHuYcEaAKWh8fZCyMDb95uuLkNK8yeD",
  "key14": "64bwiU2ocNuhLkZ2s8s6UKdu9iqsyftH5n7dPY6bJg43saAd5XwWw3M6TTKQgfe8goSj5EoNKkYBDd11Ymamytmy",
  "key15": "2vMsUADzqwm61aTbGiMdLw62dbiDPdWNf5u9as7auZPzyk1SptfYsDR7n8X9dsK5Wvotaafo3Em9odEbWV1vcXds",
  "key16": "2xYLwqgHADVajci6NUBquBDtGduz7CB35ApTFfbowqwwLkxVJQoiwiXn1o4r5rYuASD6N8pNniGmdeGdG2gAyi6P",
  "key17": "2j7b6ab97vwETq1eY5kGCBMtK3D2Ve3LzwBtkrWDhkywFLYdgTP2YrD4FVm8FVKPMcXAUKxfdsLbiTY87vfXeBhj",
  "key18": "bbF8vV6Nv8YmJn6UHozx7ARnWhkVPnyz51Bv8cTp8bKRzaD8SzSztgWbyUCAoGhYErNQGEQE9Wvq1LxyZAmLFHP",
  "key19": "2icTcnrAMxMezVrXwNbMAuCqKtYdUov2CzB6LLLvyoxhPo4jG4sM6mNLBZu4MvRWeZLYSkc4qd2PrrjaVEKJ4MJS",
  "key20": "4JvGxm5Xk4AqacYb1PPmGRhAuN92iSETtCRdaiyp8UjFTmWuS7dLzuK83uqXo3ZK1MTR8Z7sBAXiPbJGFHWwwngc",
  "key21": "5wejNyUVGfgMt12D6TLERZW8YZHPz3uLAnxgPebUCmsJojPmMC1J9QNzWsQKb5qVuxaU3LHJZqCJntsJRuMiafQF",
  "key22": "4tWUy2NQxVgjY5Q6pu9LFivnYLVM4iYbnwwCxqMuTApnoxgU1DFix1sB7MNnVr7kg2cUXHQgaSJ8vSgZpLQ5NRmq",
  "key23": "21BzRFDvHr75iPXZiQwDx5eWsQuytRpWfUWmzyMr89LvVkV3zch1RAm8ArKkvz2HCtqAdNEMvVWPJa4Z7YQ7j8X4",
  "key24": "YtvJaDVWFWu9z3foscMR6RtktsX1cGSAXK3ixxjTbCSgDuQ4oVBFhv9YUjnDaikikxekhLYTGGAq38ysLUCot8K",
  "key25": "2jM4qyoVmsanUXFoZ7PigqVnFvx5yeGFdTcoTNTJHJphAYetzoySG6ESQ8GLxBhNKZDDe1qEFsUazHpUkegaS6CN",
  "key26": "PK7TmWeJzSe35PDeeugNsJMztceWFVXc5DaqTgWJ41spq7VxMAGrCJ2sTiqc9SrJaDpBu6cSupf3LNZZUoFY5MA",
  "key27": "3pXMMUxFHVwfswEKHCiABPz8SWRhujxLL8vDNFhdAGVFby1ZhH7nvEeuBfceR3MLUcbWSizwo48rCRM8J76bnVmG",
  "key28": "3Cj4achr55prNWWaStvKbwnsWB7b7vdjYDfMZyp37654HuUxKAqSsdYtXy6YoijaUZNswL8gmtCeUBWXzDfKB5g7",
  "key29": "3yHfUekcwqPthqEZMZBFhanDGQexwYNFYjTdiJQ6XaJofhL6WTsHtfzRzVvuA2DXvz14KvBNKBzA9ko12urnntZy",
  "key30": "QMioL1Ki1R5GkkR5SWkWNuaeKyoQKYPc9ZJjdDN6nzDbX4oobCp3s9Z6D794uWyQ4dKFnyevQS8uiXV7u8jDyLc",
  "key31": "4XdrTunfrcV6s1FYb8xK1Huzc3t7UMfWN111kP33WQ3PQEz744EV7myd3WTG6TSMaF7Wv99b7V4vmTkHu8DGZTEF",
  "key32": "2uVLi2MsNcKf8Vk5JQRdz7z2iw1vRtWWNPC9NfQT2dsUEcHQgwfT1Ja1CtjKvW56AZZBpGVcjicUEsoGkVpqksuu",
  "key33": "2q97WfXgLunX5zkXygcq2T9rVooSMPw3ajAt3EvYzatmRuXYyBupsa8ndkzb9RUspharHFEi7Hs8S9HqEqFaAS9a",
  "key34": "2UfC1DxTF3kWWzWyWMccLpnYfoHRQjP1GHFqVsWX267dfuWyVoe3BUSSbXexPWqZbeGqR9GmnX3mFxp3R4eU5vux",
  "key35": "4wRrGKkL3wkPwAMU6nNb6fAqbcAEbKY43nUBKT45sjTQH1fXTEBK7aDf4W2uQw5SvLt6u8kvg9AhNApMWtQdiLy8",
  "key36": "5nN7zaKpi1HzDiYZ1YX8RixCYPHS5YVAMByg9hZrvxzK7xvRN6e1xFqD1jtn34SoF63gvyTCP7eLHfKjNzCfbb58",
  "key37": "X5RjR9bhePHLYpXktK4xHFThoJgLsdpSEdZUqKcqXV5kgZiMpXPcQrdQtgtnnG7X7pW2BKujj3Cjp9ZYo3sxhfn",
  "key38": "33eXtmQhnCLEo5dj9kSSEzzRxwsSg3oHvSwiZ2QRtFwX87hbSxBevoFaC9FbH7iddpQWvhAmmDeNFkp1VR5BRFmW"
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

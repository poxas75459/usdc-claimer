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
    "4Ywiyi5tAk6MUrE9oS1gBtnzoMU6xJE5435aYmCyr1vyveLbebmXt9Lum2bcETqgoenQEKcUjB5niHfN2H6BiWtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBinsMCrhDjUWnSFnQHMbCAFfwgUQmmq1kZur4x89F1Vq9jLY6FFUDKS7vE6cJ56NBSGW5JmeVnLSW8JQ8SNjAf",
  "key1": "3VzNs7WzfTwfcyjsjvWVau73QZ3eLJW6FkKnpL5juNmK8kxqxjLhetVnhbGEKnKYok6vo9eMBrRsJHG4cWawyHU5",
  "key2": "4KvUE8ZLjfv3nA9YwYSgjDbnQeCeQumdLjwQeJB97619vew1rC9dC9ECZFunwnEMbXbrhDDL58WKaCL3xJBvKsmt",
  "key3": "2QwDBChbQ1esyeWHQfYFpCA3xQ2UmWV8kZxXDGEmXPAVsHmusupJB2UidMSqUjwccuk7oyTK9TqvxLBysKBhn2QB",
  "key4": "2aUDd795Jbgxf5Yk3bdFWpnhkPHbsjdvf7ToV2NoAXu843FPBsY13uEUGkJrmGEsxSpZXajqN6oyijSoRfLhRw3V",
  "key5": "3EiW9grMMT3kajthgYm86wZUr3R94GwCwip8BxodHJzoSm29TwBnyyFxMV1LwB3611A6YrZwhJGfatAKojk1m4Vg",
  "key6": "3kyMNXHhYF9h2hA3M5LcyXaNEALaxGE8S3nLzhV5nSLpzUCiFzNL3Mm1cQivHkhhmeCuxtg5iHF8BkswdP3hQH5B",
  "key7": "9hfsWLbwh1tPB27mFd1rV4HMJPNieEi62F1js8gFLLVGufC5sfkeV3TPXBCke5r4jiZytkpBcT2GiTcVNry3Z3f",
  "key8": "2g51je7GxVgspLbH7yATdRq9wnp7eaP3rd5wyWQ5VA462bjwRWNySQZcr3iUVyZuwALiamHkS476sUMVTaRUBv3k",
  "key9": "ehdddf7FmpKbMHUxEgFFx1bCMbC1anzk64xiimiZGUP4x2o9smqS61d3DmLgaGCd1cySDTfQSzpwvSFC76ecLdn",
  "key10": "3dMfVjJNYY91HupyfzFUsi81t5PFPDWsZJ4Tvh1yPYXcAsTK1w5sDV5ByjZh5wi1F8o58UhgHu1U3eJH6p7wdaqr",
  "key11": "5zv84LFT183bPc991rqcjgoSoiAJ4fK13EEJu5YFj1nVUUhsJ2GYn7tM1G9NxgCtW3fC8i44ojdN1GGg3pXLLYLV",
  "key12": "3eeXZcKT5LKgpBitUjGTwZ33FXZoVphfPPmgNiSJw1PvpSQ6hSoLxU9aBzy7ASWQjddvKcePVrgxa7mLsT8tYuLu",
  "key13": "3RXxHAHJg8rd3fyjX247UkukF5MQ3tBqgi6agVJCA2pV7pJgD8ywJNtHZt8bPpxEYYQecNMHmDBBWxCeUwReBCiY",
  "key14": "2nyWkoA9Z1vfVUBh5cHYxA7DRHnF8A4bFdcbupkgbFNRMDn347NECwR15uKJa97HmdZQQwfsHe1Pzp7kroA5GwJa",
  "key15": "4sqnMeSV7qTgdSXKk8Z1LwvP1v5axn5T35vqe5D8cWTbSDew4i1iXABsqMjGzEZ6NToy9uV4FQaJagW3WNxSSFw",
  "key16": "4QFuWdTeDEt48hxXaSim1oEQCA3XH3CX67sCXfW1kj5Ehne73Sm89WnMU8Q9SWLRfQXUEp7YtaBZHu2hjHW3vmRv",
  "key17": "5FJtQv6chDEgBh5ZHvHePvR665Qjwnc9qKt1u1bgmqjaery1auEreoEYeGVhtRqywxpNEVDwh3rZJpvc6RfVJVUF",
  "key18": "5b7yxvejsTnhXYcURaVpy63JTbEjz9c7ADg6kmaZsirGnrxvxH3JwYpVvZrEgJA9JZH63Nfq8G46k3wEoA3tG7hM",
  "key19": "4Br23Y72os5DM9e9w5dP8gD4HVDUwNckZ4wfjxLUX7zscUYK9CHrPhkPTdN1xidCg573PNSGM6B9M2sqM3MMHbsj",
  "key20": "39Ja9fGXgKNXK9famRNEQ9GvY8wSA7BJpN7wggGbTrbi7CaXJDEgXUn6YycQerFBgjGFeQTqihrV7pqxcs3cog3N",
  "key21": "bGswJjFTBkAoASkRkwBEyw4jsu5RH5VNwgVRE6eRKWSDQCcQnwtZ65Nig3EMN8LUPQ4wcwvMCscQ3xBtAwZPHGb",
  "key22": "3nqhcyC7yBEw3Fk8CVK67SUWo65ZiorpCuz8NwkbX7yxC3mdQdRMZHWtXbxYVkjLeu2FeQG7VjG92StyiqRV2Zrf",
  "key23": "3MNm5Keqr8PGA8QcQdGPFwi8NATZhm4C4fX4kcrMwGgS3ozoBJ2u5NE5zrJnarvRSY2gdgaSqY3tcyVEif4ySf9E",
  "key24": "3TMGUQBt1QUqDAdokzBLAHhrtKqk5o1qDkYcFjXjdEPqsK4Ye4nryi7BAsWy8Y1sPy7YrHyJReDb1HTMadXRmrBT",
  "key25": "3mJuvJNZwGmukjgK4QQrotkxVzc84b17oFZHeutpb2ZFMHGaESjuFGzKQbw2DT7pd7MNbZ6t5Qhqnvp44AxewK1q",
  "key26": "5dpgkFRBYUaduFGJejH9S3bH4arvqoccSeL6anNURSdxjMau5YMQg5uwgVL6LoyZgJFxX6fqf3Tv4kVfoCgbfZzv",
  "key27": "2Hd6xxn6fiGtFH1R6R1EryHkLHuM3A6yEZw9ctErVSL3UgsAjoH2sgPQJ2kGHVsUUrYh2BmV28cGQbtoVhgVCizE",
  "key28": "55KRbUqVXGnL29iiRhV3qAQXU5EFBP5rTrjpE6Meg2w62cVGRi56mEJPHqF32uNat7EohnBtD2YSCSh8zPnaivRJ",
  "key29": "4v6NPt11gRdET8k23izHyB4RPr3wKyBDwvSvrRhPRjNYFTJRVM8KBhmrGfHYEWKGbANRPE3iBRStPbAkS4JAAqET",
  "key30": "55UR27uzZMDEAZm2G6Twhfeky9r2wtgXTMi5M4b9f4QtzfaJgQ2CbjAD3f33poz9pfsGQs59m7jKKdvhrY9iPLW6",
  "key31": "3UvRPVr2vGscDUMXB4SKFzqj3RVXw5jzSXtrEjRft9enTNhrknzFkVcRAwYvUNX7J8Un1qaEC7dYJzTunTF7tT67",
  "key32": "2xJFC4LwmrfAr1dKN9qgYNd5SmRrnDcU4oAhptzWUSAjYnjH19Bwg5miUyhccTu8hw6jqdruEG7VBTbZEceWCLMz",
  "key33": "5cHdXfHqkxWzo2pH5GG5tYgwh79xPNEwLdeXYBrHheAStbLMsaj4yYL5dpHKHDfFpyyjx2phRkrMwjHHiAEy1eE",
  "key34": "2DneAAiQF5bwMuYXLVaa27F2VsEx38ZNVKxaMCJ8uTanTTeuRxrJ9m8WfTwpEBs75vs3bVzvhK8vLPsgDLuUsJMT",
  "key35": "54To1USWZFuBCYiH1QdtCZFJwy7qdPQbzWxuBkfdCpNZGgKFwrfm4HRxBGqdRoujJeLPm4URAfm1VpbdDy4mBkvd",
  "key36": "2atvuvNCNossxDbDb2co4WNVZB26fQXXUg412TxNGcPDu33FUtWF7yKPWUhiLcD6Sr63MbGkdsoju26SnGPB5Uc5",
  "key37": "2Z4VfhUhaFGGpEtE5qTTZvHi2t45iuJiWaqp8n4U4P94Jjk7FoYChMXvhGa4Ahyci5A6qQyzrPuhsNcS9HcuL316",
  "key38": "5tkg3b91pVmAJhcAZgouCMzGXvsnmDEfLgdmyzGt5pKZfuSYqfEZQtKiBi7qPSrkdvaiiVbMAX8R4r5ufutzoPUE",
  "key39": "32uDxD2npqYJ45oY37mTYhePMCkGUYPqAHM9rsuP6qGV5Sckm7jDjVoT2V3SKYDtxVNMdF3frBAYNh5DZmh31jfu",
  "key40": "4pBXKkUxSj3Avs75wHbTStWT45ZxEjbwZff4LHowgtazJgcRbViB5Sofu6AUbVApnYYGWGj824sVNvTZqsajWvKU",
  "key41": "2ahASGrU7FEefjBgyB77taaxC4J1Eb4rb4bEyAcXWieT6zu89AJFXL7fcerfsUob2J4BV4T1pp7ZiRPVkwJPdPYs",
  "key42": "4VYubVms5fBPYutPWYXht7EhjNnqURTN2Sxe8yDb8FD8Zg1mAKSixdv5trG5Cvf3Qp4gdW6qQFUAj6DTH4zadMxJ",
  "key43": "3hamMb2fs3gmFHYz8Fk2p3rwNYndcWHduuJLgqJv5dDdhve45Tp7DbgdTtdsebLSFhHdZVoWNx2P86XQkKdMpMgZ",
  "key44": "3ofvvrqBrB9kd4FkcMwuJbTkbw6pm3CAsuWNU6MGFDcP4hHwBeXiQxGFTkUBme3BgEuWXMxS5pDgULhJ5KZFDPx2",
  "key45": "3WU1TbzHbedg5NAMDk89npfkpE79DFgUcNmpuAycq2Q2gaB49syRCeHGHtpcsYsrgcMBYw8CYtFYr9CjrWc9CzrG"
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

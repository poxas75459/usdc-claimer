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
    "ksfPzVHLRoSsmUnSTQrogPDRf5VTCWbZC78KyYNuNdDvZLZe9dB69MuHjmNTMM8fEzoFXd8uWpuGNfoxM28kS5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzSbs9EWwagVhVVQyiEVsoHStfHtY7UriQn1Jg8KbhskrLSgGETxBMchzjL6X4dNJDdJN51ZeB2BDLLpoKKtLLG",
  "key1": "43ZvsbLkZmUsMztQSnFQpVVxWq3dA18D9p6FLo856jXdb5fqBLPbHof2UbjZqZShLtqPNLYhC5DQovdUAawY9Dtx",
  "key2": "49g4Kn8kejtSmbXmGcuK2nf1bXqRSC2pSqcyv1AFkCUGtJEZjyMDKBxQd6zzRnkuCBTGrPNzsN11KLxHW1hB4gej",
  "key3": "XuyGZNkPSdxsq2UJVyByDi1cmiYVX6L2rb4ZH8o1S93KTKYNXyapup775Q7whXNBJkXTGG1YVJqZBKW4ZzH8Znp",
  "key4": "5y1vrRqdB3i4Grf6enJdEnZAtz8jKkUYgptdBXNMDxKxq3mYpgom3ESLrGHDswpfxWh4cuMnvTDwN98Km4kgTxd2",
  "key5": "NbLiXNhBAFv1ksSsdCRRqS5aScCZToLSbUbiiQxA2VYkDZYWU9iUPZoU5s9GpKgkvAzbYjLN6MPdYTgNYi2T9rT",
  "key6": "K4mY2HpFJJo8iJYfC4jHRaraqNtfjGKe2mRH7bmChZYN9uW9bcmqT6xGT3PvT7wZQtqyDXPdwRC6q33x7V98A6X",
  "key7": "KY4GJDFtXY9m7xFVnXvG1SxMR1yMgvwo36CRApdJjVwLMN4yJRHnvVHioxAX7bw9Sbf9KWRfw4Ct7GrLTTvWsfa",
  "key8": "5DEfpZnU4FvVBCrjCUaYZbBzCtJAuXVC2buyXES8GKWLZQVpfk169Zz2zaLRoaqmG2CTdda2pwpcNCMiteAQyn2T",
  "key9": "5PmYc1xSkJ1uQ6awj8ZxV371sYgobEqUw6WPU8eEbgMLzmKSEb2vd59tij16tYd4y2fkSG21XU4oPzBZHpcGcwVm",
  "key10": "55fCLuE7cdEzjX1wAR194R7fEfAtdLxu6zTMBP8yFchgwz862ctWZBSsmgjCunhLTYuvNBikVZ299CYdWPUHsm1a",
  "key11": "4qNtqRh6h6vYiz7D87xeUzNvHCELGgKjge36L1ZFnez8cWsCB6wxsLzNJLBiDWtBGAuucNz6jUpVvh1GtWjZakVQ",
  "key12": "3uKPw72Jk1h2Y6tnYVHnzDwcfcwFto5Dta9vRqh9yMStoah193jWmUGTFYAu2G41sED7nJykLLAAo1oJvgzGTJJL",
  "key13": "eZ8X9V6a3Sb4Bct2S49af5Tbzmims8rfDcStyT5gSk5ni6krvzbU8U1c1cEmCFNUCeksne8eZcvMBBAAYtrMKjF",
  "key14": "2n6ftR21bYNindx4N3FyxS5y358b9kJS9E2wZue2JSGKjjSLPQyKLNhN1WJFT4kJwi8roB9vczt5HegarvzFRYDZ",
  "key15": "5zpnfDjLE1GcR6kLk1Kb12qXc3NqoDcKk7n3axUARBoXK14tdyvuvZm5ZUVgXBhKGYwpkb1qUUwaBWc9hR62k1oa",
  "key16": "66JFtVdQXqMErRQ63KLNy5wYf5Skbcke55nJWxAAwJH4eCJsjonm6fF8Uxpxg4LywELcK7roqZWRwfpXyZfUrgY5",
  "key17": "4f2MbkdhGBmmSuPowrkw5L21wzoXfZarL8F27QN3qZfJKNW75wt6aXw2VkqDnYjHRgokKJHVCB9mccP89JtBKqpZ",
  "key18": "49MRZxHCveX5unuVrxy3dwAi88tGuTeLbbMzvcPGJJWwUmfcEWpPSPYq9cCrmmwTZ9RR3tKpyxj2nsbJkwkxgmLG",
  "key19": "2qtcq1kjMe7VRS8vsVVSbmnF3dw1TE7XraQnAByajp9nKBYAYTM9ar8y1cosHN2N21WokbZBvR2idBEPZCJaKqh3",
  "key20": "4SLr1pzgaMmUe9c6wzB3xjPyBE3B9w2Ss3JcyfYmFzuLVD9tkHRNGdfmroTR8q9oa9vSzKhpaho3MMy9m8QAK8t3",
  "key21": "57UmvxeDi8bnciVy5o7ERfxsyYnGMve4BEG28cUX5YN5NAg8ohjPtyUQa6jUB1y4SSF6Cu7JjRTgtRpTHYHKyRUv",
  "key22": "3FbASh1pTcR8tahT3CLV8SJHiUkh8F4TWovmt9A3v9J7Pid5kjXhg6wiTE7MSfhNpzGktALzba9MKm9KshfU98fB",
  "key23": "2jDRYj67Uou9Rf8TSr7oFvYBwSyQ3guvA7yQu31dj4tJr1ZkjYHbXbxzuwuzsJ5BXPB2PU1b8ddNMD58NG2ccbdA",
  "key24": "3c5FC2zbfqrE76njsUzbGuqGAp6nuDNV9hmGSJCHKMsZKeULFZYnr5XEJwxChidFZVp36BJoLzpPC46VVf31sxnn",
  "key25": "xRArAwcJWdmkKuN9ukjNLHxQSKsFVTnRwH7A9XcxZq3GyckvdfX3NptSj6Q6sgwEsvfPbJzeCejVgwuyLwBiihp",
  "key26": "443L3aKJdYSBTNkwHehEMmWhtjXdN3vyFHz9hJDFCswQyNUxs6xgF2c6Dt8CTa3d5yk8yY6akFMWWn2ULut7nbHX",
  "key27": "51GjmLx6spTN34BGjXtfmchCddausBArKy2XCerCUkGPB3m6uxHJoijjuFfXnn7RoXbmxxwujiw3p7r5UtaP2mwH",
  "key28": "3h7Gy9ZuoJZSxrCcRbT5Gtc2Wtz3PQ73kCGwu4dcmyCpeWxqxf8mBUGSzCeMUa71LmmCeuCXiEyoeMAPgfPEvKPp",
  "key29": "ifwpvpV6yf9dvcP6jw9LKQ1p8ws2JZteuYN7KbZLRaAFmrHaQmEnZ6Yo8woYdNwopXo1pWYNmg5Ksa92Raeq3SS",
  "key30": "3EvMyJaSxpyLVnnoNLc8rjAzJmhgDvMpe5dXzgjc54bTFfPHszmZUphxdTEqQkPomeJ2qeTsvPpzdr6eHBuEYTw3",
  "key31": "2NzCNX6s2qpzjo3VFzRAogYLXn5fz7biDp4yKBMhCd2GrnyNBY5y4agCL8M2nxh6MzEiXjCzUANaBMrhACPvSsUk",
  "key32": "5aw9qXaomfTBU9kB51EiYZK1qyDWwP5RgwLW7475ciAb4uDXseyaNhwYjUkkhC1DSrrXZd5eQZyKkc2HuZjk8WzS",
  "key33": "2RAEzMFgUQ1zbQMTN5oSdfAY61U1XsGckPBiBjYQsptiPUbAVeg5ZXRgzWavY642WEiZaFch4bFrAft4TEv4QcC8",
  "key34": "qWpskVREYqeADkPPV4F3bDuuAfsGisR5Cft5T5X7qwwaQ43tB3KXttM7Nb6oh1Uh6JmrjTMH6niGE3NZeo5MFCi",
  "key35": "32pxJNJZhHaZBHfCMdmY6BtyjFWNgDutBn1ALpvPYnsPcybwbyYwDvLn7PdVJ7wk2TjuQsGEwE8NsoY25V7JRkHN",
  "key36": "5v1tpioA5Wkxb8PJyFABswary2dKtFPeHgTSN55hyqBGw8AgbLdjmrn3XzNCC9hK2kGgxBBYkeJZjg8Amu24XmLS",
  "key37": "XniRGCQtBNBjZUVRXAqSLf4aMmnkmz7e8aZ17ckgNAvNpAGFmkg4uJnjcaZoVzND7w9vM1CtcuWJLD3MAKP7DDb",
  "key38": "26FW7pWbDJFDL3KvDdrebKwETPHXcY9hLjUHsajtnffaoxXEbZ9C19niuGjEQTUUTqKjkBjwAarwJSwEyRBKif9a",
  "key39": "3gmeNg95iwSa8SoMWiHNxm3EGNQRnrREHVf1qRnehedSaR3DqCwhwMDE1cxPEnjJWiHzjaFu7sjCbCz5tAvLBLBg",
  "key40": "4AUK1kp74XYXYX9t8aKAYfFwGbzXiGVhS4GWu6pA13U8PZWYJBQkHvPb5K2X5W5biQFo7qbdjiyEi4RLYMbkchbF",
  "key41": "rRkg6mnHw4X2QCeqZjXbdzhzb1yEXY4dGY7hRk2Dq62v34u9y7isbK4LjrgToxHDwDVcfpUf8mJMR2i793TShP5",
  "key42": "U6WsQami5P7ncN3P2K52EtZtjPcVCyHUK2WyGywk2WXer4qSgavaXcvM6Wa5oAtaXzpeZKEDqFnsQCoXUkJCgmK",
  "key43": "3rHdLLKmX5KXE9MgRs2ZRSxD9GxKb3SbNCKKKhAAtH2kc1H6o3eHK8FReg7MZdifrCSe9igh8AmBL5MRanma3Bdk"
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

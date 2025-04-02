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
    "2xePjDsk8HjGEu3hishpdAHGLjQ3kSBASep26qfMVPxxMYDT2hTPhCB9UNCfdndUajqgoQrey1YarAYNio5TNHnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kUvbnsoM1oEbnySkDvhDbW8DR9MnaHphjXhDonXtMsmHbPePzVBfYZbGvjjzeAWUXzKMUjXeZMAfxBAfv7pmALo",
  "key1": "5oF3uFgqeazRAJjbKF2kzBaEHjuxXfcWCCtE6Tppju4LVDN56QvqyuP28DGjzCbr6Wubdn4VyCNSFMxMcgDxkseK",
  "key2": "3nJDd8bUBbEobXCDsB8vu25X1znunoETicHKwMWEFrime2tmhVtF3dQaxVgjK1YQcjHu1UG9ehHiUJyVcoFgdHj8",
  "key3": "5Q1pASuWszuaMuBVqs8pQAMKq5a3u3WLNptvaVEqGsTnVNJVqz5vJw9xqBVzwt9MnpiFAtE2RrKM5faGyApKiYFJ",
  "key4": "2fFCxRb8VnE33pdS1J5DLT6AYXMkKYaKaFEyLFoXRTJvYkjYrqn7sGkNyzDSvvgWqDYto74acufXRNPH1xGz2WG1",
  "key5": "2HfyaC3qurDyayQjSaBSuD57HVNFtbVFTQ4xs7sbTcZh8eXXCCayDaW6zRJTAqa6FD9Ls47HHdH4NuXjq2kaSt9X",
  "key6": "5rQ2WLDhRqCraZtC2gmNxRC6CnNzB1AikQMCcSvu3uW5yHLY349V4HfrCCgReHnHVAwxS3KhnvE8JtL9vL1Ndcbw",
  "key7": "oejh47rZj6oNtwMM4qUVvNS221jiVCNQscEFsWqtCXGhczuNQRTzMY2ziKgetdyiuqtq3GjQoqAte4WbBFTuRny",
  "key8": "37UiBwobiir6iXv8EK1cvx28T9mHKgRmJshiozW4Nt2m3x4iAmZABMipWhKGy6gTmUyQo7hVAfPHbebCfDhcoBDc",
  "key9": "46PyGXSmVcp3jwwCbvbUSaoUe2D2e5nCLvaz2goRXD7SePmrtvCHDwwMJM25KAUnJwmYuktWKFGSroH6rD4jvehR",
  "key10": "44no89pTVH12SgRoxUVQQsHr8UauyHVoSLQPHp9BAbo16xZ8XYg7oGUxuB2g9nUxak6YMZjAeiQcoypLovzptw2w",
  "key11": "ZazeJh7crU7Ch3da2WRcHWRGFUXpPZG7P7ddkLktXw37v5KDtbSmxAcqTNPDbGWabdHNhMWeRDEBzYNVhnQfu9H",
  "key12": "4E5xBdHM46Byq1JmkDN29xyNfSBzTuvPsZ2jNZkVS6LGc2mEB1gLWC3sorZgwhQhLAxBJnJ2hNNQE78piQc1obx3",
  "key13": "XDricFq2wUeNBvLfBBqDaiyMSFy2Mnue3GxL6pd9VZTfjschs75GcdXD1hqmLFv6kDivPZK2uoWa7b3dRqcc2NW",
  "key14": "4wyuNEpVoK3HLxWatGp1y5afzKumcFrSdtVtwegWznNnwNifiK5gGk1ycAuTiE5oE6HpgaaVB3QBouSSPm7rWy5v",
  "key15": "2VUqD8RmFUbi4nT8rLFxS7RFS6UbRXaY5Ps2udMnN1hoSdjPhxCFAGzvfmo5oiqP6LAQVeRMhsXb2LB4paexwfsg",
  "key16": "25zjqfkoruABaGFPugt6tMDeND13ef5AsUvFcEtqUVaJwLBwGtxTXhVuAortcCtWytxsLfndAWzEtTxyc5FYGWeW",
  "key17": "2XWnT83gdJcHZDFo4kMnBg7a1CzYtdSNphYQgzyV9HDoDPQTeuQB7SPe5QgdhiGbVq65NA9sWc8YTbyhE969bp7Z",
  "key18": "4yGXTvTUw8MmDWCSSUEhSDnwprbtABePgQeFP1foL5FAjniv9jPiDU3byFXzi78EeoefDb1zjvbNYP7qXu9hxejn",
  "key19": "5W6wQWzfpqy6zajbSsqn4ccf5b3kPU66sePWTbBkK1x2JM6rXiB4nk6Hzt8sDghb92Gw67qpvRTJgbQoeBw9YE1K",
  "key20": "5ffaPK7778SWXNgakWX9SVxufdeY6NonJ3wi6jqiePnkw311Yg8ujB1Xf4kwJvuDS9F1zohxWQxSQTGvP2Edhjfj",
  "key21": "5tLUaEGBKAyZyQ89NYs7NauCQccu2MHxwoho23uiyoUvLKUXre8e5KF77BXsam7LxLsibC79WXe5JTqHN72eRsgz",
  "key22": "3zhzW4WjNipeAXhksNpD97krmZgvspVxGSikXCdkCAAGpEQevXYeU8jzF95xeKUnnAhTJ8gwMK7LTgzgJG2yt8Y1",
  "key23": "2VhuHk6tAWhwHbGvERcZKarPe3uLcT3t3N2Wm8BQs8c5BU4edafBAqctbarq2CGQD2XshJ7cqkrh1DMVANGn1SvJ",
  "key24": "4FVEksoguS2AZFFgmuTMaFQ5fqFBUXKAPRUFjQdmQDqSS4ey81LwbSJXpxGCHM2qPnXxw1XYdYmjqu49q1iV8o98",
  "key25": "2uyLVhFRGHVvgFZ8KdAKwCNBgmqRueTWgZ1QYvFo65cNEQ6r7DU3dWkVcPryT4kSD6xNS3tqkJMxdmGUr9TWY4Ks",
  "key26": "2pUx1rrF4xkJ1a1vCweyadTeEXKQG22cw4iz8p7AuVMQfXieVVencJqNo4WjaU8X6ww5UZUMVVRVNTRCPsKAw4nA",
  "key27": "3rNePbu2J2C49FpVra6qYqSRkkBeaXusV2TMgt5GFEWQoke4o7vpNEVLr29rdcNvLohmjLwrLj7vf2cYoiTxwqQu",
  "key28": "3VzySjaYnC32HDiHj2jyUBydruPLH43J7CPEvViDguP5GeaUAzhq4CUBKpV8PoxZ2UyzY2u4WE1DxQsfWfKWniew",
  "key29": "5F3snGMWCtqxcGa2yZYrA4Q8Dfcm7yYE6aGwqqjq6ZApVvGnWaYAp9BPDKAU4qMimfPGLzYF2oDgBDvr4UAdR6Pn",
  "key30": "4AhYaVyLqagwrcVEznTeUjj29BAeVo51VUUbA86gazmfWPuasDRf4MkAR6kry7ZrCwSuCebfvzcJcSxk2ckviQk1",
  "key31": "45F3DgzoPYMLg66ZJn4StWoFCS4QzDsqLBo7vtuMbcofXFcEkDaA22GYFDGhsJQAh4SV6vWkUKxr51ybRvkUfkGA",
  "key32": "2RNYeBVRUBe9e5VjNN7LXz9ha1ZktfseNr5ZDm4Zd55jCaYDXHGgtrw9WyUwvNatdg1ofkApKn2pu1ZM2Ptm61aR",
  "key33": "2Xg8FCPw8sYP1e9eL1cHeae6b9EyW1yYsUU72ZjUPbnHASNcDobjw2o2ELehtaFdBzMX6Ripj5P3iQmjFfLSw2J1",
  "key34": "bJ2WTzBnSxp9G2iFiPHJ1oeUw3h73UcZxMtBhMTRAxTy9sfwJFM1wPPJkkHWgYumnePCKQR8DaUwMGoG2cxGqLp",
  "key35": "54XPKXeFH1WBzgNyWnFr6C2dSXR234pJKCv59nCjM35viqpk2Xx9WWc61MRuUrAL5V3wUqbPSt4i4nGPrMxV4kKK",
  "key36": "4yag6z64WADzZrPr6UkpCUpMtiXjv3Y5o51Nvuvjei3rbgS3Bq71493WtUxH8DG9b7XXrLoHHHLsa8yfjjHhS5Ym",
  "key37": "2A7tpTp8f5QkuuKNouiXfuU8PcfEd6ZrEP2puudMsQMhUeYhridFb8dMgMfbSLNPBCxVKWtWM4Mo1inHaaxhwp4f",
  "key38": "AaYHVihFtYRLJkSRuWn3hpoHJ2bAFzgu5jkk1QKf5WZr6ZN43yrm7WWYNNyVk5avjFe5U9VtMPzQCZyQWpXvwKm",
  "key39": "5LsoD2YZKxmFVSGRZzZT2ELtsRYJQLKYFWWffjxXQeiFpLnSPHEhRBKhc7UtBfy6Q286oZkNyWdZ4sgqavKygFnt",
  "key40": "4P68wJGmnQ96EKQmXjGhGQuHMX9qo8UXGWv7Nbn9G3D76Q5cQoTV7MQPaXkBoMdjkJMBvpH6KFSUvxu27K8Pi44j",
  "key41": "22KTkrQYFPetmh9JrMeTGxav2QzGWgucrdaybNTop3LHgEH8jzUXWChg7Fd6mgs2EpqLX2m5PqkQSHEwDJA5UgGu",
  "key42": "5V6HMW6SvC5L6NPCd7xpXEzsiUm3sro3WgsZvnz84oQpJJ3U6q24mbvo5S5NB6x49RjjsqgbcP7c4PPrSgsJrNLi",
  "key43": "4N6v6B78asWJdUwx3RviUgAQC8JAF7y1wg2DUWmCuL4AJ9WH43X9RtUPzZiyuT6NrNdBjiDX3VciehBu8uDfXNgj"
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

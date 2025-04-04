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
    "4EB6pnu9x5MpZC6ifycMmZpEePUuVay4ELrj1tBeEwHuoUS2WUgcRWBWNWH1kr1L7UaG529F2dKDoGSLouGbpREF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmVqzSUMhMUhHj8vD1rmCVeodsRs9fi4VexYdrsxiiUbr9hDAiGKegNB49hesrqKPq6kicKJjQpSVZuPCjpzjh7",
  "key1": "5kt6K4YH5bHr3sRahiE9nbBsmYtWFBm5uqasaBivCBFan9YZDSM7HNtWvBegYMXAmeRcTbXBR688nA1gduXKxG7N",
  "key2": "4RgxZ6RnvsKshnag715skfHmNwfJyuuytFf3kFTvn3LkaayQbNmG5TYTt3iYDy8dV1Z7mgWa99crS6W4mbzd8FKL",
  "key3": "9aHVpGDkc4YDSnFUfPGZZPbjkjSntyYrjxcuApzV9CLfwbqu9joSKfVqXic6NiNuvzbEFKeRQtwAjEhjYbapo1D",
  "key4": "hdqPnA7nqjrD8MFbJTLtyuswyqygRLMY2vJpcsaRecFBqvgmK5WdTW4exL1icPX8TFn5TQ7MUmhbrUJb2Pku14r",
  "key5": "4owr59gv2UCF93UFzc1QbKw6WJC3yuzF9585XXTDdxkJa3Fk5GQAYmgZSAbgZjrBjoZoHnrcwcBH6RYoHhmHq3Uf",
  "key6": "39jDFqH3AV4ss8t6WhfinoQXhTwVzadL9iaMDjrN4gP4AWmsZcWMkYZWDsPcvJVNCkqKTKtqFzCpJLbhJNqku6fe",
  "key7": "2qphNyBuFjudSPrreaQdhowqxQeRutgh1QAu8pP7Ro1hgUpQDYPBbeSNXWSPZCCGwdLQid6gZ7HDMrCdneoA98Lr",
  "key8": "4amvRcQsGaNVy1NYDqWhBE5YvKWYp3hCgsFoedQJWvdFVhjdND8kgWFjYKXAarYMgQt6bG7qHEbWGHq6Twb3dMFb",
  "key9": "65fnEKANYS5GLBmv6TGvQwJBbXyXnVnRTvPPuk4ZqAwwhpQKHqwsVxuVqk2N2CyYr8psiDyz3i1V9n176dUo3eVH",
  "key10": "3HmM142jWDXDW3VZPyvSi6q5PJFdFVK1Mj5hrVAXrTGHNifjm553YHhgwUYURdit4TsXL3wb5YkyARSyNVp5dJ7X",
  "key11": "2DVmSqiLPomeeKfpEHvWfsJgDNXaHrEG4DNqxuHSCTx9V4kuCMn9WhWMB7u4mrzS7wJswuAwiig31rkEy9M5BMKh",
  "key12": "4evm2cdabL9vqkyXKz5JMDVngHMqt1G9Z34FHQ1U6NCKwXpu5F3ZALL1ZjaJCAGQqM887A4vk5F2TDXc4ptXuZMw",
  "key13": "43XMn14Map5ppaTTdYB4zC2KK3qjJYtTH5PPGtmKCGhmrRtG3r2xy66seXPSvidwJ9WBB71JUe3zLu8YtJjv3BLq",
  "key14": "37AW1GYEaizFRsZryeGg5zn5wRPbXxjfG2Sxfadz2twKK9We5unaMWWr54JCKvrzU5TP7w59scE1jdjjRd4hFFvz",
  "key15": "36GGsHCegjwc9QPnBqKgDbhC218bADtSDJ6L7c9H74RXCb37hbNswHKFcjKQEbjGEU7H8ksnLZ4y3LgUfEqfRw9J",
  "key16": "3xBRmCKjxrSR9o8Ue66y9fZGrwxuvBL28mmRah4tgfcZoG4vifvZTs2Etw2cqZs38NZCRy8EnjkpHrSJzorWTsWH",
  "key17": "3jw3k9zPqhWRXybNnCSR3DbCfCoHnzXmJMRGpZxqcmM5hbRHCvufuc1sTu3MymNX6UyLj93Hj2yd3UMKiRUZvgSi",
  "key18": "rEdDWKf2qvrjV3D2miw1vGdn1VcX8vfrGi8bqdogxdArJj3AtkUY2bRxmXtMkfUUivf3xBmh9GTtSd1UDjCYZy2",
  "key19": "5CqXyYUs1nEa1Zr93USEkGH3BhTA8vahujemwzb3wennzJVuFT967Li1y9uoG68GgomGcXjgRncpXX4hF5Dc6VhH",
  "key20": "2ANFCVJbheW8t1pyctc8RvhBwqjF76VUArjghn8qf9FBGKxuPWcmyNgWmqfysSRpVY1iwazue4dGAvD7aeSsscUJ",
  "key21": "61aSiVAocbjgy6UqBYFKh1jPY7QxWwSYhEJY1rpvnyVsNQCTuYNbM2zfPn2jvt9yVpz2Lcz2MEAcqDYFi9oWru6b",
  "key22": "2QHBMpsjMHPANFsfaeSJ4btr5x6j5Pou9SjLobn9CXWcKo9sE3Z6vrdiS7rMxXMhMxVip4fKCc8kWPszDZ9cqg9o",
  "key23": "4mYXAuLFDuxQmUpy6TMT89RhWfGe5LqPuUm4HvYbFkM9sda79zZVHEK7VaPSQVKsEp1zbDBgh4ecxorAcpq97vM4",
  "key24": "THBrk3FcGRRHJt9SBMEqha3Rqftp4zEqNexNyDoJ1uSc8X6rsTJs5uTSAAZxkt2WDomLU1to4GGLxkDmfFTYqrw",
  "key25": "4SAzURPS6CUCyW7tWvurGbAzQAZPgQA9Dn7EodDL2hvCvbw4ZLpTAiGQsnSaZC2iP2r3wAPVZkEfXUxGemQpSe3B",
  "key26": "5N3yrw18SwYG6eyNPCQsv6NiDoKhDejQypm7ndqEakMWV4dgT9tP7qm2gZaqPVDb6M85DSFddXmhw5ciZMgcTrUZ",
  "key27": "Cb5Y7azeQoDx56iJvhb69o1ANaR2QHXKxp1VmgR2h8N1znyt3Te1uktH4d5vQ7VxGdahQn5iQsLp53z1V1doW9Q",
  "key28": "g3F7NKJiz4dwaT1A3wXh2FJJ9W38hxmsYGqKkMo556hWLNjyVFrkw5taHVtM7gEDkytiAZUrUxW2KZvbYsqS4xS",
  "key29": "LkfJRzo9KqTeo7th2KJwS1Ja3j8BvjkHQfxD5kdfiD9SsLusbP7GHVo6JfQRZsc4kfUESBRfzgbDsLCPZ15wyVy",
  "key30": "4EX2wZJRZMWiX5RCfgW9ZZVuaGpqWfEWHvhFhxs8jm5kiNNa4qh5fNHExgdegXnwsWivoxa7UnYbEtfEcvzSFTV1",
  "key31": "3nNhbmkbFT2pmsYprnpKR5PU6ZsH7o8smhq9LkQCqjmxfM3RfxH2yTnPoiJdP4QQzKxxn2zGd335MMeiT6DghMqq",
  "key32": "5bDWBBQ86eaj6Xc6NuGdcHagfwc3UPpoMRRv6yzDdn4jwEo2YqrJgn9cCZ2kabtzd1Tf8afdUC4y4U2Zbh611SyU",
  "key33": "KEq1LCovXaf1mQvgXd5zWoUprsJBgar6BuxCxhqf1mTzjWAVsZtRuLh59YLZewJBc6WDocw8TP3rkVxABcTRqeX",
  "key34": "wbwbtPkA9pG44fo7J9sRo8faibzmBpDHW3bm8QyUtZTRSqADVPHiCNsKz787TipX46Aa9UKn79tydxP3tMVLe15",
  "key35": "2ZLa7dTqnWC7gKK9z69auu9LgS13Nwno7TSt2AThyw2iqqjxVdhqqCd4WKMQLhqW5jUMFKGTVjjiknWupC6MzWmY",
  "key36": "ZviMXBsSeYocCpyLfJYqfNG4pg5MA4AEHsDeoBw8ENQ3Xx4YzB2q5EABUyXJwpC4AekYN2jSuUb1ArymLruocum",
  "key37": "2u1vxUXdPdJPk2XmU9ezXe41GL7yCFCRGexm6j6PoFo7sj7nr7GLNaKupJeiDWauQUARRD3KAgeUK4o7ZFDHmGEm",
  "key38": "325TYdx3qk1XJxFViuuvUFJUg8AMzLBKP2eiACy1JrN5eT3P5dT3YdmsqJxxWrVvyDbLrrMWh9j9uBcwQMLD9hVi",
  "key39": "4eN9pPN2mA31KhRK6dWQTHtSujv8LJjw8zTHxirPiBqW8jPT1fiX7sp2qMGUgdvyHfL8kgU2hC812CesRkdkqUcg",
  "key40": "5RtcWJUuBPVXBy64UqgBtGdZucH3jEe8gp3GYCB3PKHYh9KmWS9VwQopsVtUw9uFXHxz79kuyaWsNYUuqcqp8a2A",
  "key41": "t6ktUg3KKQDqPUgy8jdYxWYfYATLocPSj3th4FZ3FoutuuE4VA2RmeasnPVWTpNrDYYhFuuMkfaKzKXPgEA7asf",
  "key42": "2M7DEJtkLcUuFSvSw2wLj2zULfkeZWaeZv9DdTenwZru1LwyAgQ6hfPcHUaqcXzi2WVMT8XqG8kqrgFJP88ZQrNR",
  "key43": "4ojWvyDLg2Ys9mgYdsrjdFKeDLUpTdAsCDzbvgnvRdeFLum8wDwch8TJRTJscMGiDTBob4XF9WGTJQ8jYSBtF1rG",
  "key44": "3ZZBRNPgKgcuUqqUg96xuzLcCXsD7M6Y8ygUhzaF42WaqDxd1XGjC5hAsyTAG2iecAG77EJTLuW5RtDpuqxERmh2",
  "key45": "4iF7eWNLvEuA1e7QDySMgKeUM7dTzNzwe7oUUFGAKfTzo2CGAnECxmU5WqzdySLHSuTSqKkTk6FNrHkn9J7zj437",
  "key46": "35raqxTXKEPpXgUd7rQUTPaHcSp5RJWXqpFD24JoxVvrgd5bvMrSsNGJEZGEdoNQuS1BWK5u4eED68P8pE9JHitD",
  "key47": "cZuWyo8StBJiCv45HftwXSBAEu6cQQjZSpxejG7saKStR6SgCCPr5rYMgBZESZwMP3LSdx6dRtivnqRjUuvediN",
  "key48": "5ngUYuLDao5bdxjoAxSwkQYDmcGApVTYdUHoeUUb32rhyUqre5fMXKkoFM99s3RYxAyE6ScwoVUjyASb2X7y6h5X"
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

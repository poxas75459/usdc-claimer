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
    "5evjtfhamgRkduRfCdzfh6ZVoqWpqMxZCM8a2uHeHd86LLws827kZ22Twtx5Jb2HGE184jwQqCKfxwTHFR6wNWNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "451C3EAXwEeVC3HncxDGZbaRdmwocPyjN6yHH4BWoAK6rvUCZET4Ay2XpEnsBioLFMrJx8KPLZzYumtjwWGNS4jG",
  "key1": "3foLShW8TcxYemG8Scbyr5W15emFuf6NwZc5WakTeXdsDqsRqYYhKWfzvvKSe7Yo4JfeGPo2zV5v21x8TcPRnu8o",
  "key2": "5SCRUhqu3ntivnM2pfGLts9CZgPmX82XQwfgK63mSn6dCVd95nZ9XUQxKkBEQkRLUKY1jKp9gUGVy1Cj893iicUj",
  "key3": "ZWbpbLDnRBF27uQmdz66b3TUKtag2munsspvhXFi83R6mJUTfSYG4KgUYzrWubQPzLUQe9KvyTg2Wu4jYEkJMwz",
  "key4": "4wS9raZFBgAFFomEgQR5Qta7QZArG3QTUsYaJjZsrJJLsgRDJgLXkvgxEccJtdHzDMm5T43UdgaQRXVyg3onq7bn",
  "key5": "4j4knkBb2qiaTiihy48pBwE9NjjHpC1K8SiTuAxdPSUd4UX8bSRz6sz8c83Ftcq5SVoMxAkj5v3h2W4UCSvidZdR",
  "key6": "5GZ9ZttuLvFtG74RaAPDHbMBjwYTzrgJKYfJ1j7Jt38xm31LhMDW9gwUMarXzdHYXiafEUBGq6h3axktg2eTsi2Z",
  "key7": "3UnjU8DfpUPasqvKhQs19DVcesVvvdqQwtytPrQgzP7QQtxULcSBYHBJB4eEvtdPf5WtcTHWvn7ivievBidMxQBo",
  "key8": "5yYosMHNH1vQvvV3KSMZrF4aJe7mm6EypUNdXGUUwe74m3WjkSehH4FZ8GPdDPBm3fzSD5VgMshH2Vy74mGWn6vp",
  "key9": "4sniwuzz2MjU6mW3UnxcipWrq5nBUegENKm8M2UycLNCQzt3f1LatT8azC8nE49U6Gb17Nf6kCRK49ztcbt4RPRV",
  "key10": "5dHrwiXa1iwcseWnnMLKvxnGw63uzz3U6fv3yytu4gMcf1qsHTLpyXvcN62WJTYQALh57AZ657MNvTDg1gJCJgpN",
  "key11": "aWdsUyrgK9jBTCMeE5cNEGBXv7HhmF6mQop3V6ELu7jtkBMsL41azpgXpUuEWJgU812tDvs5AWVoWpSDfyqXRZc",
  "key12": "62u6mGybH3YdhZY7DpdRN1uGo5xGHkPA6YsxydS5g92QgsVKsCvLTxpuEjoqWvi6yWaUV9f1pACArEC3PNYUYovC",
  "key13": "gKa93jv3yQAdYzarA7YJUcxaEfYDDB7jG4CX1edTPJanZdozob6qYnRdqmfFBeqx4pTYNKDq3p9vA9vNBBtQjdx",
  "key14": "2gWbyAhX9Xu76aS73AmX1MgRU94LjGP6GtP5dQth3MP1nvp6cUTqbFd4rd3SNpV9KpZxp12AbHN7WRWu72e9mpN8",
  "key15": "P89N9BXU9XUCzvoJXAG5GL3LXTNenB7ZCKDR48xFZZEU3s9oBQsJc1KDiAbf8vEHQCPxuQsktiPFnZZX7axK52f",
  "key16": "2M7wBUsDdMFjdMe897pzt4kZJk1rQvx5joxT7VavfnyeSuUocrvxtimZKzfXjjP9pGqRpYVFj8mgJkzG2bjmHNHv",
  "key17": "3J1finWip6AbYRHNN62Hp46qnCinzhF8iCZghGpjHZdBnKkLudGaZfrLcsw4McRHD7CuzU6Xp8QV2FwF1YRj2sRd",
  "key18": "5aDzdFqZTtjvhQmmgwLftyEvx5b534hWjRQ66qZSZBQztw55yCN8UXMzMC5EVochL4jAzRLjvF5CioncPECR8VgP",
  "key19": "3j4bhJS9CopiyvVuEmSWNLkA9zPNeyW5gDs9AsbiyoTdgYZXJof2Gz1rUUFJA9GoMsD8FkSETTs4e2A9rDBmP3vM",
  "key20": "5sRzJYgGJuQdMZvnKyoPJFPvfu8f3cKvEMJYWHCsUVmZtoy9MCZhqB2uEQ2Po3TVGgibDxPooyzPxeX3pwE997si",
  "key21": "3Ab8b8kUpbpdgw1mAAdKV3pHowa4S17oGvSmYGDhUZNxGXavMEyF1NyDjeVFxfkedDiDj4sCW91s3UtBfWUCJHDS",
  "key22": "5bmiVAGwy7G3Vx18toDhkVaRVP7F3ixhsBYio1MDqEjJkc6gGXJbubz8k7sTg4N8FMNy1HF2ma9Gcbr5m4TigRXR",
  "key23": "D3Dk2o7WVDHGydHJniZFFr4NTm1Tf65CTY4fJHee6CAAom6atej2nhSLvNLUKyaMhykBrJJwswnwroudb46cagU",
  "key24": "4mvz75Kun486GwY77qqbCvTGs8LmyMcwWQ6ezA8UCJ5wtxgGfDFYv4Vt6pF7gjrVsMp3SFmuBq3WngRXQaYZMiMf",
  "key25": "4P2mWPMmc2P8is2LXhnzsCHA2rP84cgLjpPtp5VnyskSzbAqeBxXm5a13zPK2SUyLN9Mv9ciMGsyHfnvyrA2rTCy",
  "key26": "aB3gLvxLWfHrYdu1MdfEA2KRpgxJeGeyr2k4edWF4zMk3Q8Cdvaz1wRkac9qyutji5PPUKoYyUVJjHcMMLBuHkV",
  "key27": "2LCLnttZQPkvc2AyodoaS5LDbDrra4nnCcjZiKYVccRsxeUdhGgY8D2bjcbFACEpM8TcCs229Sd6aWysDfBBL9qx",
  "key28": "QmsiiD6mDPUy1P7Eq83iCuYP5kqUurBibHmX8YU1Y3wEYbh9UdSDpVPBhgyXrJbsAtbUBK7ju5cuU49mK7hk8LW",
  "key29": "2psGb7ycBF8vWBhpwWkgUD4VMVnvakck5VkdBWDfZixV6LafX7967FAwm21v9s1hpw37KV5d4v6n5VGkbyYMdTPT",
  "key30": "4qFPHjdU2vUiAWC6E7n62TvJDyKuXk4Ldvc8nq7EBWLiC6AkJ8nPv9hCc1f5RhMmEDpeYQdzzadTJoL8TXrXPCnt",
  "key31": "5XhuMjVzTmCymhstU2CW2CL1i7omW9FokKywDAW13bPqrf1BQwZCDATrC2kkpjNxDTJvaBBND7eenL5xmDW9sohy",
  "key32": "CpHUYmhjgqoJsR2HYafu1NybVwC3TayVevJbd4k6XGPakCv3oFs5Mr5KSKFYQdnCBGSATtRBgheGkJy6aT8yZcU",
  "key33": "4s6KS3qCg3eFvEwBQirzzovgSUiRv1p4ALqkR4U7xeQeqdqG1znNEpHRaDjPgWMJiHR3mkXMHgEeRNKrTQKwBuTt",
  "key34": "46pEM3g9J4m8rt671d3uTAxCt5Y3eErBeeBykrKpNWpz4h7ewRgLDet9RJNmuc9YEYJ2osEqNujJKpXBDtZtVNg1",
  "key35": "63UVbVKkkS3wvyyvKQHQPohuNkRB3GbF913biJZop56qrNYL9styN9muETcneR5jGNbJP4SGHcnspM9YTehD8mf5",
  "key36": "4CE9JSLyvXa671oimkBUsFGCHpgGoFetLcTkC2wu2iPnZKAQEgo6PYV8sf2xitdB9V6ZSZsB1QGz9HAUmsqcgNJ3",
  "key37": "3j4jAFgriqhTiZmdL22RyU1M2ctC5et5j41Pxg5Ft3B6PFmuCKfvKpBYk768a1eXXLhuyNvmwsgGQsUnkeZz3zuX",
  "key38": "34TbNLUiPmbpVVkkoq9YiEGqwx8Y4W1HaBrxuvS4FRmViauM9VmyiqMhG2aqqLHxvFnJ5ecFJdcr6gSKuC4oWMRd",
  "key39": "3mpXamSvcLoJBHYG35kbvA6ivKcPhMHeN7TAU3ZWK2jMAbeAgp4gJmidLGPTzoKg7F5sb9nieyGeeHa4CkFPyt1n",
  "key40": "4Kunq6vuM5NTZr9M9AFTqCJ8EXFUryNY7mzoFmPrSmmHphgQpTYFuxVY3FkMxDZ1iFf8QirQmnZTD1LP5zYdZu8w",
  "key41": "49gtTUaj9uP7qsgAenhMaACmbUQQ4AF9LZFZXZcznrHAYb8FcN4sW7kuVVXgoKSEjA958xd2sSeaWxkCPrLWGSEr",
  "key42": "3A8uM9eKNw7yQpu9o6DA2m2vp4MGKtD5L7QVwvnF23rgk5ZD9kuzUf5aGd1PoReg62KNXdToiNicXZz4dqpHLTQs",
  "key43": "62gPamjt988UtoZoXTrPiLwB2JuPW4y55mhbYhQzLz1SQ5ENKKZke4ipyrHm5q643riYPGjw8xnmaiUE6BH8rPfA",
  "key44": "gp3uxcFKTk77CmpQxni1dX4k8FUkEc8GrMk7HFj5C7T6UJgYL5KgjqtxTD6Qv1NaNNRw53dDCn4xLt12wBo6D5q",
  "key45": "5MNWEZSJYFTC53AJ7DCYYjfBzhe299xq92FepmQmqkro47J9Ycwgb7tARPyeb4ijMD3xoJC9A82G32yEXaSnb6KE",
  "key46": "2hHdW5p1t2ZjZNBPP3pSfzypmZ634uKB8HaoDo2tA4GpC8TQtReUrosae5MqnQZbRszEDeBRj9gnkzvfBqE96nXa"
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

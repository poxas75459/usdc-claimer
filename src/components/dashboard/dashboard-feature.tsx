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
    "35sJnxB7nJrw9Erd8QoDHwp6xdqEz8KnkY9ksUbWZ93siv6nW2B2mtW2JjjXudmGXGNLLpK9v89u1eQNFZhLoTke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wTKCxRu419vUN1zY1QTNYEkBtSA21HqmhiuJWCGNSR8pp3mGdohnn8DJ7zRfuzcXotfBr26i5azSafPBUf9mTBU",
  "key1": "nHAhCNLyp5zrQNxwoXMYBnJuXTFoy7fRvuX9pUE27HfqcbUhKCHdYGYx5BBAWWasqGAuSLbcnvrqxixvVkoj7zP",
  "key2": "4yzchzPuLc6hET927Wtbbe4QoAgGnZKXst5VKxZDFqZCT8HaxB1a7sWShLTfvZeLieGFmXh3ZNcJGh1EMbxiCQCs",
  "key3": "56fUxSGE5besLifpDPA2fbrrpNaPwf94qw84TcmBaV6SLJrXqBL8AUto4JvckWgf66w9hB94J2DassAjZrkR2JkF",
  "key4": "2CdiMcv2njs85gjLST513JnGpfFr9vUVPmf636dZjt5zrDwuX6DgkzRS7tGrMnbPn8CVL6CgyPSmzQMHT9dnnxXv",
  "key5": "AyY83pjGGbKcXAv8ryzXwtJ6nJWSypsCHrp6U4dRyNDW8o6NY5zq2QfHTCUe1qrR7S2swhMDaWW95c7TQ32Mi2C",
  "key6": "5zA2yJR4T37g9DAEsTpz8ArR7fE84Sbb58omq9QDuMQ6Yp63F841ReVnsH7zqqVKHFEwDriUNRxnxwdjb9PxTwqq",
  "key7": "4KUT6R2nyVofpsL5nu44e6kWRfVANjY2Cn9MaZXwxEz1ztUs8mpf79YrVkBTyPEtifB7c1gqRESRq1zMAvRiEoju",
  "key8": "2YxqGC6BpiRpQNvybE35KVWodYNiXM2hn8iZuEsEC25Hu3yehbiRPRSp1FRrDEeRsC4CB7YVc7fvX9gMeXUv4Yez",
  "key9": "5XLzCiWCfE3CV8RdVmTPt3Uk5y1xLpKn2tKTqp3AKgHGsHokrNhEjFvdDu9vEDsTowbqnBVnEGryCJ1TbgUpehGw",
  "key10": "65x3zLzo6U5JjGExZMcv8BJosAsuKhBuWYuDETvTJfUASnCCVyQWAHXTBs1pcgTHjJmrJWn1rg1tFUE4LJFM9WL2",
  "key11": "4CCufQVrXYY86zsaKTxfUCojcuAs7hQ8LjYZ1raQ5r6Uvtka6CCdfqUxXCY42DtP9MRkMXS3sMbjmkqAvdrAymrF",
  "key12": "WmtyaC9mGtEtd2NybcogfhjBg14rLzeWMKxUqvZ8AmcjGHp38zqjvfgn39HUR6pgFB1KUbwRBvMSs1kaKCyBb64",
  "key13": "5ZqraNi7MPinLXQ9yFjC7CBFv7YUjBPr5AZohvTCbWyuwAUCctcyHdLgAXDbUVH3Pkm5kbgDsU31cer3ieDbbpof",
  "key14": "3w7qpwqXHmZx7SueWCYrSUoB1Z463R18LQSjt4fc1JwPZbQkW2Ph3qKepuVN7nKsZ43tZKXMaQDLaorBB9XYeukA",
  "key15": "4fVXyWkMXWotewkovH8sQakaz486XgD9shk5kb39ZWE3vLgTWtw17tvj4n8Lhre7CGeUrN7aDt7Km2NzheJK1pwf",
  "key16": "2kCJLjmCV8XS7pEj6aaxxsdtwL8eqeyGQ58Sx6h83HGCbpK6YoPcdQYcK3Q8xsP6PyiTZHgpBe2bMLzpznQDrVbM",
  "key17": "4fk8AvEVfQXEk8z71km6aT9qZKUNwjFfs5FxESLknjogeuNxA6u9CmN4BaqeqNsUksioTvgfj237NG2eECv1zmtN",
  "key18": "zU3DFEoCfPnmgQdbmBLoDvEkqmQwRFPr1h1bZcmUAJ7usV2Xf11r2cW6qd4G3KZb5Uds3YJFAXYpegECkDjs8zz",
  "key19": "2uty7UrHxbsD7uaThjYCFY1drixt9rvAwtxdkq1kS98Xdu8AxiCksMAMbkNoEdx3fvuz1K6Q1GiVA6v3pef2LZCd",
  "key20": "2ahKhx5xvnnTedDskZCWckjUf7bcudr5s52uqvpHmkRYg91GsboFaChYRsKwCEkQBgfRLhtcm59riLA1vCC7apGS",
  "key21": "2Z5N1NVXZsNLvV7WxkvT48YHmcGGouGSmVbiXjkEc2oBoy51kuuw72TQxfeL7wvGx3Ly1EQWWYRcCyrxGPA68no5",
  "key22": "26BDVYJui4yiymDTvAvzuag9uA1KQ8ewry16SrH2hpPbyXUY3qzkNjZY19UckpbUumLoFRsW8wCgrE1wFFWM6yaB",
  "key23": "255M6UCqqwXXMBw7HbgJpczYu2BhD291LMHYsBx7NiPKChtnWGBFaURaRyjgAiwKRMgTPYj5cdy1rNXcJkpwVcnK",
  "key24": "5mycYzvnQzyWnae8i4NMu7XUjgBW6C1QqgkX3B4tJTctZ7QzqvKsAjs9Xz6fVEKi1UviLxsDRzyk6yuCnduW5zui",
  "key25": "2yC8U3tbfRhrCCtiwXaXwZYWEvCt4Cqv2x3mRScJmkMX2qH1uQ27YJvhkRqDZitw6wt4VrtPCep7SqLqDsditTgR",
  "key26": "5bHysTbsNEvkHLfQXfq4aj4wi5RoEAQr2LgHVSAUnHbEeejAZ67Wyop5SEnQGFykN7MGCRwRKonoNE3NvCA15tW2",
  "key27": "2KjAs99ZTzX1bmPjwCe8m8zmsHVLxftZnAXzAhZvhJZ43XRyM12H9JHA4UBQnF3bvSofs6MMkFyui82iKZr7ztDu",
  "key28": "4fSYVc5XvY87xn281sxDcPn2eANLyiZ2kvtKo6fZV5dqUHySBoZT9xLeEn1HNfHdFpw9Lv9YNphkYWwMCqJSAboL",
  "key29": "3zRF2UdjUd36jv89MJhr462QRPR9nY2HdgKv1QVdwoq7JieicVyPhKFFFo6LRKTGDTGcCDKDDmY13pDjkjMZ4j8Q",
  "key30": "ETGZrbFWRLd8tfKJ2ejRVB8j4orqAAsdtTYGUhnrRkexHxU8G2458Frgi2P6reoa9pnQBB8u2xrGySSNfVfyLwF",
  "key31": "3iNv7SVmJBLfWwfuvoAk5ZmNbcoZ2CBP3v9cmWzHZSmdX6FNzfie9iXBGVK28aPxPbmfLRRbZ4k8E9WK22zdT6ba",
  "key32": "26377wXhYbpqKriCKpr282SsRgAoDixj6wcyysNf3Wg7G69wFKss121eui54iEqnrxQi4XRZW4iq3oEGPUz8Kq5g",
  "key33": "5Pj5X6XtmvLkSKAwU3qwkQQKSoSEpKd6vQwQErY9LAfYyv8msZQQkyC1equEZ8eg9YhSaEGWaLEaRKJ3KTbhuRLP",
  "key34": "4P4qeeRPsFW3p7HCXpkyp8b2sRZA79m8QnfFNgFBNxgXBbMGZ8hxh4yZXbmKKtZQ6s1o3CCjfrZz4JcqST2QeAXU",
  "key35": "ePPBrNVVoDGDcoadX2RCojhJmBZhed9TpzRJvULygow627LXFALzDKxx9Xxv8FsdXXFFTkHDdeijqHs1XxE5KSf",
  "key36": "5oQ8LTe4KMNmKHeEj8QmtEHAvqRACbYrfohVywBZ93tWqtkoWiYqGUAFD82v1zLZBjXQENhi5jmkn6ftKQFMuhTW",
  "key37": "M27srqnzDfDk1YJ32ZNyynFETsMjdRgjxtSH8rp6saffCxsXWuYjjkf8nB1Kud16UAxQ1eBvgkCngh5gYK6Y3kf",
  "key38": "4pyx94x78r91SVh5ERxZUTaDBtfN8AG9nhJQdfCzapPJWGPjRAfEfmCp47dgabQxspMdFYiecM2NRw5SVfawqtHR",
  "key39": "5A3hkqpkQikaVM2MxFQDDMVJADKaqQD2PwnHk9sk6pT8WwgYtbUprUwLhzJxcWS1AoPFdUmvm8SMyL8E2b6khynF",
  "key40": "5qDxiNaE97bZnNBjKQQDnBNSnzaGxVmanBrZ5F2AZnrSpurwmj5DqxiyJ2mdGpwEuDM5xGMPiKL6J5Gesyd14Qz8",
  "key41": "3H61wvVg1o3Tek2y6TxKeZbdQbtmTchsa2m49c7DBYYoZuVhUURJk7FU8CczRnTmLzf4qRTcTjQKKN6yf738S7jQ",
  "key42": "4ZkrVxa1aKif5HaL9XA5di1bgLYE2Sam1Cb3Skuvph5SNhjVE9w4BGwhkpUxern6qCgTdjirgicgwqH8faYNC192",
  "key43": "dExcfQPCY3oFfxpjYGE2GFDhx9w3vaSwseYkMS6HpzZ8YgrTKyDw54BBLVvZoPwihC3HoLq9paupJSn3yvDQHDn",
  "key44": "2hXAsrRDuaMRdH2sMRvtJLBy4VgVACcaVqgUuphHVqqiVbMi7qe4NRi2XmML33GMuFuDaFvqHxVWNrDePWka7dez",
  "key45": "5oSsV4eBVSK95pzmqUzDZSFZWY17XwQqSNV3igDfqGb7NFJ9GeTx4Ph8b68JjeB5QuEBBu5qaPV3MQwfinagYyef",
  "key46": "5rohDm478KqrFLkGLriYacYLTzKdyvAZptECUGmrsZ37P2Lmk2qKVfpfxCZ5V1SA8SgRKyWK8R9bTpxgFmgjYnkC"
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

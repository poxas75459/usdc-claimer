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
    "5jiSN2SPeWKLHCMz3z9u1vn3LZbwectbu4qwyHtfNqgLhQ3QcnYjLgQPUA1VSfQ2ELR15x6TRQDh9ZqShcLQALNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4neVB2j3CNNbY1rb6zb9atbAh6qe3tqVe3FJ64R3GtPjJwxYhqzzKSx3d91mnWN8SPfkC5FtFHtabmLAb6j2Rfbn",
  "key1": "Yf2NfSBTgJkcp34NcBkh7oqrbP1vo3JCzFTDZhR5Y6q1G5JiT32Kjxeu4ybob5kZ31VPuNRdBDHbEoPGd7ML8sL",
  "key2": "4oKU5DtK4y3fheaW3nxVDC9x7ANLzmvcM2XUAg8Ftw91jeuACpgEk6jkCSd3ZW2PAZQjEGYcxmbhhMvtVjdw35gY",
  "key3": "28SA74ruExp3uYmVhvyd3FrmQguzj8CYDkyyySu8pVSwdMs9cZ3FktapCexu9DgjqbbRuAYatGKQni5jFx6Qs6QM",
  "key4": "RzpXkDxBgMBAz2km49AZL6Rno9nQccQigbrGDF6Vm3qvEWXP9yjsAs74uo8dsZDTLjvWWkT24tfU4qVfWqWHiqR",
  "key5": "2LXCZY95cbd1RVFzUmiwYr6RuVypd9DRgDapWMEyFpauGWjgPjViDapxV1chr5nMD6aDgeYm7XYbNPsYwRDsUGJJ",
  "key6": "3HZ3rtxJqX2vpXP3UPAD8XkhFTf1cQmuS2hAvUf4PaTr6UiTGJLyZZgDD4RsYnhA5r3NM9Rdt3iw8tnPpf2Drjd6",
  "key7": "43qrb5wvhok7Zs3VQFL1uLd3D3XxrVZwyB94gmStcrzupxdDdrbGQX5AxtpQmp7hvz42HCVatjq9SMYiza3ef72y",
  "key8": "gS5jvizzPoiF4RTTzzTLA7p1a2ViTGz5K1N9DyCoQsjt1tnsq4pKc8ij2uTzKWgAopoj9SKVRHKiTSCe2twnSWW",
  "key9": "3KrZK8p9LytKKdBPzPuRsh7QukKfkGcQxYZyXH3Y86WxFKfe8oqLotQdj1CNuVHm5e3wWFZmWorBetKZNJpxFgDe",
  "key10": "5k6QkHJg2ESzRfJhaKyQnxEdSVWFEbizTmLGht4ooMDfjSnWnxBu2aeQK7yj8nZ6oRMhN5gKXDvmWRnHfieSFb2V",
  "key11": "2Bzri3dCfcNYYUPoDnNQ6wa4R4VPkNPstX5NwRrZirDDgLT91f15BKVunZwm7RxSxRcS2ea664Mkht1FwFcwiFfT",
  "key12": "51m7WTNvCbt7yZiva8snNqkSLLALj3sb4Y1qczL8ifHKdezrKRM8mXWoZNBA5Q5ajf6kQcwezdpE7tc3xhZFZQFp",
  "key13": "4vDnBNXE5tvsf8YZQW3xgon8kktfZY3NR5frgRXEvGqJL8Ki6bLfvxZynA42rBGG6RuYan9cQwBCffbK2nhDnP1H",
  "key14": "9H7yP46qPvDH2PxErUKmSqQmoce5YW4Z86D3U2hefJBLaWe4r4WThsCzoHDUxWjXihvsJR4czU42Hu89nAZarhh",
  "key15": "4npURdACuSLZE3jRxpkqaYnDBWetngJ8u6BWkhKna5JQCFQZNU7GdbopM3Xo71vvzC9spwqb2j13izPnexbUtTGB",
  "key16": "3RPjMyEipAaV8RZ8a1XByvqYPxU6Q1uSzvg7zSVTd22AtKPedh4hfXNPhEFG7pum14hKWvjUBedBENeVSmdn8vku",
  "key17": "4fW3nmqDsumN1gbtYEVpusJDFtDzyX9TvsVYSsQsqQJhoT6EiigoZ8bTamx6yHGDm3uMUUGEPsLFzpwRg7EassXW",
  "key18": "4BZuMF5HSsWJM5t14bCaPU7eFFzeZHR56fy9iAdmfJ9hBAyQttAseBU9UHFTocAMAtjFNmRhtUB5QAE7usExz94c",
  "key19": "5Hufxi5hRX3NZwHKaid3Yeo2uNK48Ua4UiT1aiyMjUZMJGSMPN6Gabq3pS7ynLot5EX9mRGcqrtDWdkz6VzfHum8",
  "key20": "2V5MQuySyBQCpQHiQFsjfiQ34urJ4rk6NgXCF2ZzbbUVrDjAZrSxbHAxzm9UxHKReuQzKZ8tqjHG32tx2bQpgCsR",
  "key21": "5mF69x2eVj8XxcxusnmyyVwJthMn5ajd4i5oXhKYUaWVCdKn7YJzV5NeDhaXFZ18UwAWjpNZS7wnacyQy3888RqK",
  "key22": "YKdkj1F4ST7VLiq8Z1iMhU43BwgoHFTf28mGt5GUChCjH7TViwh3u66Ca1259kcGbTp78QkKoB4gkuUm94jYDDp",
  "key23": "2FZhmSztPWSZZahyGooZ9V5vTeS96DQw48X15PpgtpyqouGrWoJc38wUuaoyAPbKYLiRsFeRSxzH3BU4bCXaYdPi",
  "key24": "2suBkMgmWJ7wK2684j4Kd9DEAyGzjaHZyNxu6WM9BhP1TTWqz6P5uAqWUdoqVVWW8ybJNCVz7z4kPsrc19krigkt",
  "key25": "5prErKexm7w91ZB7Qeax9nc3PaHkMNyrpSkbv1GVkjxc81SVZs8gyRxWrFJP7yYxpAZ2iHEeFmGmuakyAt8E1YT5",
  "key26": "8xjUxHSPPXoafxw51krJ2xp9XV2BD4XNDmRQjNJjrLzwjTXCxjxeK6wabKxv9hXL4pqxh2AVe3jkdr28Ykqjp5r",
  "key27": "2QHeU83mbKXWdw39BLjsnKA6CvmhZUAnkCZrMJxmhoCJor9DTZhyG2DRobfiNmrwFLpSCEpDgfFeUfP8MgSrTKbr",
  "key28": "2cyQ9u1D62fp8F2rUg1Bngq82arzLJeLQQVEPi7WftCNo2vkz9ec1MmFfetAcJYqznVpm3FR2Zgz174aTmvsr5YC",
  "key29": "3efKmXVGDJSGp9Pw2Q1JLfgWrycynNQNUkyshLyigYcxccs2HmkUWRxN3iC2XMRMgED1NXnpXN78JVsSwGWyb6QC",
  "key30": "5Et3DKnePQWuArfC6s7b4skJ3iUoAQ8mxgpqeahmTDtmNZiByWrEDsrRQx9tpMWg6vQ6XchCcYnbDgMAcN4GK5bx",
  "key31": "3CjhP6gbppHWSTG3qwEi7oPQFfmpvXUvbEBenPwRPx2Qx5iX8RLQFYTZCk9tkDzFCwMsL1bvy7yZPRpvtxwLv9ZR",
  "key32": "5uv4b379DJAp1oyhXTJNa5ECyXHka1mASKonEr49YRtHiDr3fHYAxfAwESAVuMw9YXKR67r1GWUFVm6HZw9Q4tr4",
  "key33": "5gojwut9PKHeHdW8Tozs1JwSnaNLirxvKNCDP3XRqnsFT86CJE2WBcwX8LWENRwKS8VRfd4eKmhHXYYBbFzci6ea",
  "key34": "245JpLmdmXj8y99mrDvNyP3JFRtHrWzwCsePL8caQEYT8kUV5iyEK7xJhBpBw5ypFKvYsy5kJZbNGXT7VCWSXK4t",
  "key35": "4betPXXPKpibPxnhhGBfdaDPMeqj7WVwtQnUKHV3XopNteJ8GAQstbWaQWcMkwPkborWzAMPztqEGNJwJAwMQK3B",
  "key36": "5NWP8xsr2uyhmNZ1aSei9ywL47sUG92MeU17JCP55U1KHQB2eoCN3Cnt1w5L7g2ESFHu3tMNbzdPNHY7dUsFCwJm",
  "key37": "5MWsSeNPBfLBYNQG7f7PgaFZHLcX4YKVfEt4BJKhfNJt69T9twfgq9JiR59wJtvq1G6PgJaL48stHmym2mg5P83Q",
  "key38": "2VQHBYzhwU79tDhghyNSBzqRu9xkTENTc9bQWCzmbjAXjkBxpNsewjzZsAPSAaarkCrSRoguYyRh44EHFLYZBK4h",
  "key39": "4KUYxG4XcsTpTpTByvMe7LKgPW4mTvs3fBtm22NjzZgvB3xMVBxDuxp1oBm63kAmnCrym8bH676Y6jxMSwpTRgM6",
  "key40": "275u88SVJesSrvoboWgNPjXvgHi8DFQUgsj27PhJgDbPSZxoN1PZF6XXRUSio31hySXsJc1R4cL8mmo2Y5TsAzKm"
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

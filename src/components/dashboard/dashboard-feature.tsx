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
    "dZfF8cr4rpHqHPV2KpEZDXR3SZEBJzjnYePyTzJ7ubG6TXXjGQua11mZwcuzTH3qkSTucoHidZsvnzpePDswWj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56U4SY8AQxAN3rV8isZL6EzYwVGu5HtRkSWAxMjPR9RtnCBPaFD1HinYCRPDTjGcEARC1StAoHNHnPDzrZ9d5gPj",
  "key1": "51X3C4N8KsxPgwQm34dyWCWcrGHCX8RksyPPeuKRYuUnWy3AYRsYu5F5ZJawzrukk9hBWAqhNx2cbgVWNU7gDy2Y",
  "key2": "WvbgKFEUakEVznn9QjRmxoByr6Ls36Woku2GkJVM6VGu2GgTqBbBtTtrprxdwYcrEj6AYBaobZaJEwe5G2ubX9q",
  "key3": "5GvGBstyUYd4KJJo4DjcWiLuvbyFnbCVz52GsEBDCnr2VxU3oVWyZA3mMDP3zEthwTKEzbpvPZEQPndUT5dTqhHo",
  "key4": "sjbyoGvqnVi5NtCEZZ4RKtmaDGAELDbnDrUQZWj9FW5Tab1V8DxAZRG16WnJFXFG15rJxNC7nwC9Wbof2DqUVrJ",
  "key5": "5qeAW6iFn71eTMNdFTNFm9PjZ9rNDhf714TG9REEoV5fGrcxbaJGTcW3oVYjeaLeCAkwngrYnsbRwtRFXLx8ya63",
  "key6": "5fUVsM9dKheR7doRLVcCuwe68j64zt9eAZbKb6VSsUWSwq9dyb9nddH9yYj2LretT1Pz3MTb7CU6K7xNwXUX1B8i",
  "key7": "3Px5Xw6YceBjZqZhZa6TPfSbt9tVJv4RqTRXHXts9NbDgQscNN7o9eJRJ3hCGgM93TyefJK398F6KnkpedhAH7aL",
  "key8": "576i7ftz9cL2PspSyFfVsJqRb159C22mL6AswFXAig748Rx6y66Lh8PNCndjYeXPbVGb41AkidEWP7nUBLo79ZS5",
  "key9": "2L6JZVMqCyVrfAB9f8rpj6ioJeXafueL6idgES7KD2VtarMxiyEGKHD1kgN2jxC6FxGbZ7NSik64UFpXUqb9C2Kx",
  "key10": "2DXJsozJXccpvW7oRY8xmTQRHwAvTwZyGqNG8FRgk6HDSbYbsFtk2F4G5pkiT5tD68Fm14eDU9KTw2EHATgFE5zM",
  "key11": "5gPf6xWKdJ9VRVYRidjMu8oRQcxNoBwPCunqQKJkndwiTgPfM7f4ETCn4YfxzxefnxMyqv55K4Tv8hbammcoDXFS",
  "key12": "64HGDfNUHDmzhPdjYFLv5BBuJ1X3XU2QQ64JxLZjzdgbVs1jdB95zdqrUzdYCKrEu3VeewrJ1RTeNq6yQpvWXuaZ",
  "key13": "4S9tE7C57ng34CsC359h3rG8zh7CiULZgmUDANm7HBca8PZoD2Y9nMq2ccsUeaxfM5FxqjjjjQuirJtC2PrfFnAZ",
  "key14": "3u2ov7zYL8HBg9CfYzDawfKq3jwUWdCvAFbMtZyQUPwL87bDyFNTdFpiSj99STvbi8PXqK3jFSJ9xGn88NDH2gTY",
  "key15": "564CwAyAWBmTVyBq9AJSWKKHeRuqUXf5pbZBWrZN3dSwBfDYA4Z7BKzCqGjN8Bta4szcMzbBhNsekKZvdcBazmSF",
  "key16": "yQ1kUvSLAzzanFivBCCMZtdMFjAwkMmQg79LVeD1vyEScoStbJ53kVsgUSeX7K65Z8G1SRuH919d4TRgxqtvwWU",
  "key17": "46VipvobqdQFmFaxLWNTiTwuqwqAmymevtaFLqH9Va2Kh4sqHsQVLhatmS3R4HRmo4m53SaCqN6jq1U4522VVrip",
  "key18": "382KmmMYHvS1vZ4AbSa6qdzRYjh2WYg4AYWkybPbTkeSp8iADksPhaH9dYUczbc3xNPQ24RKYY2H4KpYSYYwiKRC",
  "key19": "rUBBeEzGMauwbTUmaVZdsPawHf5jxqDuxDs6vAKfSuv3GwLfvPzmV6bZb5g6fiY7KN6RcYS1mLAgRe2GDtNCYmS",
  "key20": "5pCU1xVSE5w6Zc8ihzisprQiWy1xEBRk5dfwVyDqXo6zt4NiWSYY6YqMKPYQ5StGk1BLJZdpMWWteoFxSALRFFS1",
  "key21": "5knh7SeCeM3CkUbyhxmCJBW7BvDAt51RKsgAfiwkDv2A4w13jSAKxNoPcHP7dafPUX331AVkSx4PCCRX3TT424m2",
  "key22": "5gaxJ8o3XdAUR5R8tzzxer6Zs6kF8LqoYCXQKKEBXgfQbFNixupEHqMcsHeYKT9ifHu57dh9JTiNDyMoY6tXanw6",
  "key23": "4ZvJtXxdEfuPWdbrckzQFWH2p7v7oaXrApz9Ex1fPjGKAr78sdtTahJ593LbU91yNBMma8W7hy7NuftbvE6gz8GB",
  "key24": "5yCofQ4fitpE79YauU1fFNvdyvHmxFdzMFSAmhgNcrFNR2RVMykisYDorwvGLFqgfTydYt8x381zg1ftZXS64xdX",
  "key25": "4SjS2hZrY7rp95vsnS1m5o3WY8kEvproHrp73jNecNfYG4BjBNkdpeU6cuTvNy8huRguSACNwGVcraGaTzQwBoXx",
  "key26": "5atqW79oN96XwMEt1eVWyT5afgnF8z3s1NLn3rnX4p2pX4oRw18UfKVar7nJJjoBXRymbgYoEMAAXzrvdMzypuut",
  "key27": "Zc7pedpi27HxDC76CGZta9EWtrMm7njrvJzVtJCvUT1WeNtLv8gThfMzr8FoqgdaMdKk5yhawwS99GyyhoN5emC",
  "key28": "5QYGJsfSwioEvKHs2nFkAqvy1EXm9NQS4fBN9Ci2jQHD3hwUrR9xdJGQsKbq7Z2gRXHFej5w1iUW64vtpN7Qcucb",
  "key29": "35k8SLqjzfhpWqLy4bWYvMBMJdJcCBqbVExmJoQJ4JdWC2rDR4QV2gFCXoS38VfQY6rJYt9rvi52r8YTWiY5atDf",
  "key30": "3BzsGXcTDedQYeYFL7EZ4kYNeSjsXFuEUP6hV9E1Pi8Rsf7iyADeWoPCDRTyEd4wRLPd13ABu5Pq9icyR8cTcttW",
  "key31": "2ydNdrKSEERQ8gzm8by1U5LR39a9J919cVDvMEtBi3heHXLJ891fFt4NSZnbM4jPDoRMq8EAs66mamMN8yYabceU",
  "key32": "yeV7z398RA7RH22cpJ2sxRpeHFEVdPxuWhZLfe3HkkAE37Jdqh3FpGY934nYS7qXhWwtc88jUvNYuWAMvi1rbxS",
  "key33": "HBiKM9epvink2uhHRJn668a2FUD2A5XDu6ipmn8esFQDgkKKJwhTf6ZwTEPkmQPbYmU5TfW5BR9zdYNkqiEcGdA",
  "key34": "611Q7qTymezGkweYj1t2137JwtfXPpK8cbi8skXskRZ2YP8u13gUgs5r6PJrR2GauF9WgdMzncvmYCsnt411psMm",
  "key35": "5HhAVgubGvp8NC5gJ4b9v6VyDk3sRHX9Nhxuj4Smy6z9LiXoxpAyczERuz64jH4V3sPyGvPwXCegeSGUiRENKEnR",
  "key36": "5TLjGV1yrBMSpQXVrJ8ubob16pp548z6LP95gGs7o9gEyN7dW5uXAuJGDKmbDpbgj9u2ACPkp4k4iogaV4xXXdFj",
  "key37": "5UtgHUbiq6VZBiVvRbHERJsigJNDz675egbdLfZGBktstmy3Xuzparq32otcnQw6hN8n1nHAJC5z3JgFDMDQieYL",
  "key38": "3FgouNkq89wVUGXa4dU9LDB4DXQh2kCWR7viKv6ujsFMsAV6qmVxDG17DhPvkvZdMi3qzdFqWiV1z3pjAz2wsSkK",
  "key39": "43QVbxF7gEoPfrEjvDf958V8Cik1PcCuNBztDxYPA3w8ywekbwam4Q4abDNaqh4o8f3Q1hock8udSmhLP1bJHLJJ",
  "key40": "myLXjfPPF34pQoDE9SWYiqNxvqz1H9zVDSrHtFZUqi5irUG4ZQhWNby4AJRG1b8XPyz9CuzS6EY1ybTj69tPprf",
  "key41": "1kYnhjPVT2pHwnPBQySqYCE6T3uu8MxmtEhhr9qeN6yDpW9MEphw3PxzMUg66nc5KKw3HTFHxh3hFLxCAgHBcSn",
  "key42": "4zWaFk4TYUfWdyPYB1Hk2WCAQJodVWUEHFmYSA92oNmAt6Ud4j6hkMyyzrptmkxC8CHbZx77WWYHzYEEkQv3PDnQ",
  "key43": "4jtu6T9tKFyLGfkhQ4j8gfEFD35yPgzdMzjVmmmfwsNd88siWo1gHRmkjuQZV9MR8gLr1rmW8w4fBFvnZzQTfnc1",
  "key44": "38eDQDjfekYMrTzD4xnppmDf6LJZ4bbByU9CeKThXhB9PLTEvVi5xNuxFj452PbhhbzbPs9g5DwFVnDwRKNSevK9",
  "key45": "U8ahEkqPTG4Mc2W9hesjeEG5tPu8fApNTLN1FZhwtD4LaBr7wBw5CoB69VWDJ4TrVuTM2kp87SpRBLHbonDdKYL"
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

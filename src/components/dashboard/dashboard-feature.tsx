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
    "3DJurJDWe4wAW73FczzBhuwsmyYVtBH9f3yHBxg9wfGP2abwtx89u6QPxS8qQrcQEXbeYK7kVP46y2gDz5bNpShK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YdWh8QeoWkJqfryxzgi8WsXWoP2iRqmmR1hVuZ9UP6PmKbFQPxu3CELuHtMKtoamcEMDZPvsZnoTS2nUXgBaEt3",
  "key1": "4z2rnpo9fK4kn8JN2eykR8QTmKFRGUauMyehXhUcXWH2KEUAkezvsBMjvustu5dCH7s1Gika6eXzSvYmx9FdEmeb",
  "key2": "tB1yTdD3CcXPYNkrgzFbXDzQ2WxVaKLwYpkZ6PyxnJpkgPXZTcoCKHR1xRfuza4UxuNoGFViy529ztHHcNL8xbt",
  "key3": "64rmEujNBtz7JdY6bRYogmd5BLF5BB2r3SJBimj7kyG5FEKkc7hJBSGQzxdwXRyDHddgEz6jTVi19L6r5kX5bT7W",
  "key4": "461ekpt34AxSwfodP6mqub3L12wSALcSUafRQA3CTaDAqveBhNb8G5iZzFwP1WPCSVvYa6yfY6Uok6FMBuAaGbtY",
  "key5": "3mRiyEp98UHXtYiKTBNGVn1xugxXv4stM8epuP6K36jE8zdV7kEceAqznDSnTTqzhXMzLx3nuoTcghwtFnG6PcFF",
  "key6": "EqLYRoGCQouH5b99TR4XK7vd8kg6GAnBCm8H2XKgeo2wdufaw4TDQBgzmT6zHChKLcaFyR34P6Muc3tckqQLrie",
  "key7": "54oppPXHheajyjXiBSbUT68pWWG1xGZ72N6pFcF9DXEpdSyjvHHVmo7hwvZsCkqGbN9JAEPqpdUfTs4SLnuYsdTs",
  "key8": "29GYMW8bCaHdokg9cWF4uxvZXvkmYUbr9gLmvSueREzdar5DZJkPaVANwq2t1iK7Y5Wt4m52QV88r5THKNaAvZmW",
  "key9": "5vCARor7cPRPMRKvwkV9JGekw9a47d9rCSMN9Zao7Ha3ggmmarZHi67xnN29pZbJTABEhtVANBAm8P6mQfvN821H",
  "key10": "2iX7Fi2TtFJqWqpXyrDA4DFVcEiSDiSN7au1JkAwUGDM4w9QGgKs73cq6eeXsRgV25btsWUUUogULT2ZX4A5PdCu",
  "key11": "4xBXaGnAjFEJY1K4rBx7H5MFwKKg2JshMzcNoHVGBB2NYAZQrv6gxw6m8eoDSoiqYaLKZqJFhHpQyV7ixM2MvoCr",
  "key12": "ACueyfecgHaLmRfyMJwbZ4jXP4oij8fQ2GMveG2HXzR98xRMMVWq5H19HUhooenmo9g8nvKnhDgiTDt1p45zb3o",
  "key13": "2K1LggG3RAcgkKbHu36HLwmFTGU8CgH9oKwCgCCbBSe4c77oWYuay2eBTF6irFTRPvQ5kv1FHThyGcKPYFKxi9zG",
  "key14": "7DGmmjcgr11nLrAxGCc8Z3PKmGWWgPEekMrMNwCxMr2bkb6vSb38d1ecLjzeenox9GsHg13qfcssNBwV8tWquzP",
  "key15": "44s4NePE3Ekn5RdgKYnv5gwArP6mPKtBYzJbZENmiKWombmwUwJfJAHxqz5qy99ph4G2rWfBDhdUNBY383GsnqTk",
  "key16": "2nahWde3Mm8Yo851VQymvQf3rWhNJRwLt76iruGoAQ51a8uqAjPureA7TaButTQZ1bTnQNrT4jAVzyaJENs5eDJH",
  "key17": "2k1Th2cozfTqaY5F2mRsJtnqSEgsKbs2gKQ8kSGpSk78c7c9f3jbDCizMFJXE6jRw8ucak8qemW4aRQ5n1jE8iDZ",
  "key18": "3Hrwbh2jEW8jcPRDJ3xPaFdW5qh1tuATouyS7KR9Mba8P2hmXn33wWbcPJ5ycK3i4ftrh3kSCKawaPubmPu4hLQF",
  "key19": "WJwmxvkJvybWVKDjPQuK4rBD8YBadki5CN8PpBcdYNuWDKjHkwwVTvSkyCBZNwGcC6k1nwmBUcvDG71kCNQYdeS",
  "key20": "2sVx3vJrv3zbGpPq2HsqHneAAzyY37i6P8mVgKBu8XBRf6ivFBvST6ULMS67T8WmyAc2VK9cT4ZtqAsWaqhnvp3Q",
  "key21": "3UjQ5VPVgcCXgoeoUMkJwW5nCUk7RgmXXwYLQWD9szMPuRWLNb7FrWk5PA61FpCMceEftyhCGesPsKCaxfSxk8pU",
  "key22": "5EFBw1ReYYac7mYV9455i4ZH2iPfcGDHa4HEvU9JAYcyb5ixDsJsnDUVNwB7y3jhVu4nNQK8QDm9wnGbTn2PVpDQ",
  "key23": "ox3EX75WWSGhg49N2w6QiNx9iy23AP6B9yuwP42HdwA8nv2aexLY4XB6QwBpndJB19QAcrHA8inrJzVxaonnF7W",
  "key24": "4i9NjmcY7bLwTwWpkwcHsRF2U3cAtmJR7vCCVKBZf2TumCXKkUys5LtjmoQGvyFnq1aXZVFg4wcqarV9irzXSTpk",
  "key25": "naTxDywbXAE7Nif1tRbvzrFNAXcBjyZE5gRCDXQXxhdQWAMnqqfRVFMBqiLwcysJmVqoZtgNMLLtgA8HZB5HqNm",
  "key26": "2gjsoJNXK11xYtyt9Jf4Xvbt1rv5TstsNxdu8guSCbq5fYYUCPv3cj1inQ5rmXTSg4dkYVrZXyastBjsNHsqNPif",
  "key27": "3QcXccoceKbdT7K2m26LBh8Q3c9fuV3LhTb2xNCkwQfAU7FJk2HiVxKq459Ds8YPBsKweSGjGMHN1WFQhaS2c1sH",
  "key28": "45Wcc4hFZLAkq4XR2hAF4vjna2qESpCzhnDwVYEQjS9gHBxBGf6DB6tzuub1FWsfrJNeHssDGmQma1XShtcA4PoH",
  "key29": "2kS1K4mvW3mJbiFrV4gt9sdxjJewTQJ6DbrB23JRQCtUQa8efVXRTfuC5ReyP6q22MpBD9putpfUyoSeN3Tahujw",
  "key30": "2o5pavVt1ZAmzNfgJewPEgLWSF9ZonRRCj1Q9bquEQjq5BjDtNTVhYMwNnaUT9Kf6DbnmmN3k6mQpqAruEHjTW4q",
  "key31": "5L8UXfGcC6oUBox11LmywnfaQp49EbQbJu3GgG1ngiejiJbboL5EtfYtZb7G3V45aSpjBfxUjQTE8wRQyxX3gPu3",
  "key32": "3gPCijuDqoC3vdBNAdvfkHshT49KM8mSh5AQptuioGpCpv9E4PUuN9B4fNRu9jh3LWVFitjjaPPh3oshgNNRFub6",
  "key33": "5k6H8S6j2MXm6vG1qYtVr48UqpCzJAGDJ3z7r5z5kR87NW21afoFBdFeUovz7pqv44RMn8S7ycaSxWwzXTHzj7KB",
  "key34": "2P2NuAoatHFeg7z54xfKRBkNSSc2cR3ZWP17q1rzrbuHGaYUQFdmqdHH3BgXykdcYfWXc6EbHmXJ6AdVihBoR5mt",
  "key35": "2i9uB6gBXJYiNMC3qyWS29JHej79Q2Bon4nZDTV8BSnuQMmFCiEMneCS2XTqP1MtCBXbSxjSwSqewLhjiZDLwm5G",
  "key36": "2A8Nj89eNXBz9QMBDf2PznUTqGsSSVMLAKERgqfvT3jmFysrCwSLpoHLubvwwGfc7CiwRMSxcJ8d88AVKJjL7EWQ",
  "key37": "LdxgtYTPZdAPhsLB9XnfueN34PN1h7pLhdxpEa8ZHUf1B3Adxjr2S8fBqUnvKDLwf4SsDEjmk7jeZH6Jzz9Mqvi",
  "key38": "5wZXefpJQ5uGuiny3zh85MWqwyvqgTgfQM2wwdSYRTyizn5kPqU8BmMnrFEcDnDhdntcpHNXEYGseeyZdNUm6evF",
  "key39": "54niphiripFkfYBDQnjy72GV6cR8iCWepoGTwG9UVfMcdHFLd1oD2o1FXr4mBNNEVA7VUB9xzQeMindZUzPXvB3G",
  "key40": "5XLYoxz8iWmstUfC5fKn3A9bHBVJKw2Z4SXzTwQuc3sr8XMkvApEyAQUW7nhNg6C8eMv5Ei5R36iCXdrVtzKmKqP",
  "key41": "571GExkQpufcugp4z5HX7ye5FvnmzkHFuissvKz75NNRRMvcXpN1hHZ8LXXGWDM9iQQwpqoUvWiKTiPw5zbAB7vy",
  "key42": "2KHYgqec98qiKrobSVQXY4rpw1L3CvphTCbDwwwa2dmbx4CDaCC3xMNYJuY4QFNQcDC9pkgfdf8F51mNguwT2A6L",
  "key43": "51WnCefWAa3GMPGf4ex7AmWWbKj7GvJNscmH1jeYCvJGAJANPYF8qH1Vu7pdPMSewwbKjhQJ95Uy4WojK52hNGGV",
  "key44": "3PqiRxQ2YgvoRL9kALLdjCwgK7RnnUMdXRkDrhNBgiPUACNcz3TnD8Q49cN41asYf8c8JP7sCBmSRBEa4uhDeurn",
  "key45": "4UmRD6rVHfk5TNTRK4GSyFWKziWx5c3P8jVz8oHsR69rkCSxdWALMtNrqbdXBW9fKuEbUq3ASPwUTY5GbuVrUTkc",
  "key46": "qHuXpB2zKeG3biqxEcLcC59FLUNwoSbopzpLp2eVT8MHExBBFBvVtgtLtcmLF3CQGhEMXX1DvC2AzMeRb6BCg1P"
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

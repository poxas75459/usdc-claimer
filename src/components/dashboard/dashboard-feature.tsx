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
    "58oDgxy4FFoY2GttSrrGT7ueKdmFirVEusCpLReyNZT7LGzJqXgRybpJQS6ThBDv4vzJHYzhpKb3VMstXc5KmBpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jn11QmCm6DgdsPGvffCkZ5D7dPTkPpFjN38mbeG6fxPjERAfGxc6F7ZFWPcQx1CzoKrudxZ6V7RD3jFTeynWUx4",
  "key1": "5PYaq1487EwyPWn5y51gFc64bvN738L1ej7jqSUAGcFBP7X7UdwwDkHqrxjai94Uph7tE19G8tynbuifpp5EPZEn",
  "key2": "513Dds4RePyGbaLWD2FBkTzbuRgme9yTqjRYU6uQz2FiHrNqkNJfkcspHPyukBRJ3H1pJmMWZaPJcZbqyKQk6w7P",
  "key3": "3WGiLgtHS8au5WxLrNJMnVWPnWYzn1sXz9GjKGuirJuDgvdNWyQqFbSMgMiNjGA99qdU92VJZvRGL9ypHrTUGiMg",
  "key4": "4uxo4hgDyHNfiu2GxVteLsvigGEPQbvbSC73jYRnkLr12zV3Dp8tvMdrEyLkJNxrUpdsDDY2DGw2HJVBabtRTTeB",
  "key5": "4UjNeCPWTYCvCzRupGdeg67h6reE6tyZRYVvpkVfnnhVEat9cw94HJ2bfBFEyvnxmWfSGzqrbZPrRzcjTqWAYZyK",
  "key6": "2Ct9jvzm5HfjnWb3qx8HVwFwJEGu3eQ9pAUDB8zoqsXiMXrriihUcU36meWLVy1vSk4WyJxu6AKHRxKBhd35ePpC",
  "key7": "5ZxeXH4wqW9xhvYFTvyeB9TGe1WoRyG3dnU4JqyzdiEvipuQfgeFn5d283L9SpXUbyRmov8hKLYqBRTv5JK32HTt",
  "key8": "2qKD8PAv25K1Me3VwzeMgcTpWizv4mJBob6CDVDAjTTxA9EXFzX2TRP5TENhziyqS9VnmWDLJ1KzBPZNhLP1mEo8",
  "key9": "3LW4kHBrxBovVehMBr6ePSH6F2rBUs5L9Lbm8gb1jQDu6wbjicc9n2xCK2GYFEMqoXoR8TPDZqSrWoY223343emP",
  "key10": "47WgYwaX9eeNRNgKQjm4xZymBthH7dtFz7qSk6eq9zsBMm1ydaHLYGuafAxHnLJmVPGS1N8ih2cpvkzDJysRYktK",
  "key11": "3XX87v1Z7SxHfc4P5xXmBd1trPT2SgpqZbi1peakPzUDk92jTv36EeqvPuW6pcD1WWtLGhnXpxPKh6ZPKQW9cCGu",
  "key12": "rGteJkcLtJNw5S8UwNUH3MEz6Pkra8k3qftS68i5EN8RaYtyQvPi2gRbcoxBQprfJudzqi5jsAQznBzhVnGKZnL",
  "key13": "4ZeF1EvKa4GtASVd772sAgzcqCdRkNZMWPBYdHB7zwTmsR8ViiiwJ8kG7y5Dmhn3p49tG34cCMVyDa4gkARFQV4h",
  "key14": "4q4k6C2NJGARaZbSfMRAvG3gTzEdxwbmFXNFC2wx2hbNzbxh5B38LZiFoB5Sne3eW3kaQ1qFgSiZcVDYJgutFjo",
  "key15": "3Liw2qWbd9X8hv4MKjQfHXUcsRRhZsCz3ejXQhRGj3Yvb9zzVVvoZKsdHAwbwZ2FgvQDVxx33V3Svn5mAjk5Pk5T",
  "key16": "4VpH4S8GehLfXVnbJzDk5QJXxDc4hjucDmybjo5gKwLwWALvReALznVsX5SEL6AwbUegQkQV7BiXt9txjCSe2ETr",
  "key17": "5aVnahyvvFCH3kw7pMV8W6hsFwt8p2wzYBRShcMJECXdAj8uHmsSkveQzya11bwLv52pw3T9pWC8k4oRgKDawvgr",
  "key18": "2XKCLTQSx6RYq1MpPLL58ZezhoxrXGw4dA1rAVPfZJXdePXaZP8B6Bw5hudzGoK13TZefgGC1ouhyokTFNnkF2di",
  "key19": "4tnHsD1rbwpxxGdgMLHdxbXJJThVj2o4kTYJZwjP81D2esSDCBp2xR51RmhrEauNkdfy38DAVCK5z85XkajR2Q4p",
  "key20": "J8UASaHHdLMsei7PnsWBTdE2wYWvLYVoDtxMg1jZo2AAFUkev8omeyAMsipfawo1weck25WCL9Q9gUa4CgxoDJa",
  "key21": "4pE6GhJwbGh2hJycPM1hykhYfao6NAcX7u8EatNwFXs5kBSdRVc7Nsn14s65UrNyDQW7T4fFJ2N5oPKQFGtsdc9s",
  "key22": "4WkzgJef3LS3GaAJLoSmPcKZr2gU2fYQ2ZB4F1ykCC7HVUcRz39XbYaoXJVrrYhtrcriuHhf1EoPmxZAyj4GB7RS",
  "key23": "66rm8XMnVVq3ZiSXum4GY2WGTe1ivZteuk1CR7wV6CWT7fUMriHzCLBod99eEwca9RADaY8C19QRzEJKpTmBLNQu",
  "key24": "4Wc25RGGhQGNiApixjRgThZ9jd3d2YZhYzyfQZioRD3UZAnMfgry1cKy2nd7VEnzbY7MMt5XsLRTw8wqUbnSMPC9",
  "key25": "3SmyxCh7TtM2kabP1sSukkKh1JVUSQYdrkFCm9Xi9pmsNuuT5zmiT9nYyQCMbVT3gFjTfXPgECYyTyZawBESrsdu",
  "key26": "3xVPe9CRuz2bmx1DisMVQxumqYt89J9SpBCLdY3JXco6GoZ794h1bjThrQQHJV142iacGGnamhR9WwoKhBaACfuk",
  "key27": "3Vkzjf1isXCChoiam2iRYcrZGw5tUDFw3fNzvGotsG7QM8z2h1R9Lg3tfeVHqagu3kJAjkscG2DgQEyn5PkHn7T8",
  "key28": "24aowJ6WVn7GCicWk5GziHdZyJE7syP7hkkxw1uZaC3NEaQzHVRYPEsj8jvSph3cbumCaHVjPtH4TgEHixwLPUAj",
  "key29": "6sjj7Q2rmEhWN83VeAbNqaNL8foWv3p61dT9hWn3qJXzQEiPC13CJoLxVPZ3hByrJzJYmKusuTu7YGZTDpMMDTe",
  "key30": "4ERzKqVHJnP2egAXYdJorCmR69RKXNxUEJK2X9ZzPahy4T9SGKEmYXCjj6fEzT8DDpditiF1dVPtZXScjHjc36UJ",
  "key31": "jxZYCRCtw7AdqnhyKqUtxoiAK7BCExQwB7EbV624muA2CST9QNVyRq7yss3x2AnJXuekjjdKMujyRP78UNvwSvx",
  "key32": "2LnvjzrBny1HUizHwffNUzrRsEh8pjHUmu36BnvrtUvtLvSQsF2iCMmmY2A97hk3uEmFQoENR9h6aExqoTRMPBT9",
  "key33": "3P38ESWtTbxNwQmTgDWqZ6doeY6FrxQ3Tyd1EK8giaW3tFgYTUGWwDMTCSJJjU9YkXdQwkdjKA7h5MKxwtQXNiJX",
  "key34": "3bcrdh9crBFEweqsKDk8k2P2FGUBX1gV6BDFmKNWZu4mFoyuvqRxvsEmvMVfxvAfL2pCipyF7CveQKBk6HvAiCDW",
  "key35": "2ujktF8UuaQhXb11E6RoTwqjJSi3sHHdPf7UDmJE8AdKVoyeb8BwnhLeqhNwnDTEPauwL5t58RxUkbqCTi7Pgufg",
  "key36": "3YYwE9HHpJvfxSeu31zbVRtgHBV5rrZzbwgCxvVuKbAeVp9na8tRMGuZ8eihkspktc4SSdqWaDgiExqYJgtkoSC4",
  "key37": "2PstsYga56BXa8yYpZ7L6ubTkpAkzz3u9Hhmr6PLnv7NJg4AfimqgoxS8nVcWYWntP4Bxmjz6gMNCHiPJZ1WS24c",
  "key38": "5fFxKo2usDMxyCYaRFKN12mn5TssF2vNcpXUDQG9PNHwLi7kyFdxnuBRvkp9kzwnsJgnj4TVr5WnYF8xw19DfNB4",
  "key39": "2RPH9WCw3DTmEdwsuXZaJhc2YoQrwP34aotkEbqPnWUuALCjvwx7tbyADakzbVytE6DDbQxtmvKLgeoUzWeK2m8J",
  "key40": "4cn55zwtwqKi9vRrrDhnpLPtriwAUHrMMYQQch2ssoCJgeS7jwrjbJDieMwG2eYKzesGEjbxa43y6YA4R8WJaNu4",
  "key41": "3tA4VXxiApnyxDbNsheF9NNAopuM8RzEFV4mjGqWRo55kKjooTLkRwi6udqopd3AuvLKDRRs51Km78zfLx6TmfsS",
  "key42": "2pySLiztoKs9x8LY8SuRrFqcWBkAxLxjkyEG4pm79fbtyYywHkbeJ6uZD83BQQX22JAqDkyzpA4cb3uHnSfTbyko"
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

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
    "2aCTGY1oHMFMjxtAm3yAzgiJ8Faw9rynyeh4CTTjXNyhYwJsZ7wwGtYJ5uAx35Yin8K4X157My3JNsW4WPssAGbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VAWEH2drrfsC93ExxUxceyNZ6eSt2M9zBSLYHXUTNmk2aq6fnGTdZubaT5B8vKmtX6H5pHbWjCvKTeQT2PfnjmR",
  "key1": "4YuVjBNEbqSGE8JPFxLfZpRwoKu9T53V7dqx5RjL84wHpZUrLStdVMjbcQhCRsCvqHzL4JMJycEY8JLUuPq2s35N",
  "key2": "5Bg3btgRTMRqq9Ka7SxhbifC6PjSVaja751GWckPnSvJvGgKV2jVHrjsDKg48HLdCqwMxHkLzc4yrAyNHGwKVUT7",
  "key3": "4HPgu9kxqkfpbiEf9WoLLYRDsJCd3KrVerEBvXyoZZ22eTzCahYPhknAkJRCpFzs9joi9ohbeETG23Kxrw2bayFT",
  "key4": "XkreZ2WFkiBkh2McmZWVfrEAq1A6qusibcST2zmQkG1vcYxEWjCT7Tdr32stPcP7iAHcHEJ9QdVcyB55ubgwvnn",
  "key5": "2D7iwheVRwyTaZTW3VJbe34gQY2ZhXmPWNM4mqW8CQd52mcc23b68zd5yu8qzDW3vtQqQcn5vtfePBM83sj3V53X",
  "key6": "4oJZKEPupY4cSQ7rVPeW8f2kZZ66N3Rr5mHCRBNLD1pwZXCq3gsnmSmLxpuF728C7HdBjfXai823fDtViFNNkV3P",
  "key7": "3NkASqsnf8oaMKMhytmuqjv8i9Xe4MHfdfFkQkkN3HGmrMCZKc1uBosaC7J7AURLqZx1VpAVAyHQR6MpJ6FdBTzH",
  "key8": "7VsgbBLEXB8zCeJdtp6RPM2eVip5Ac1hdoLHVg4bvzR9roaQvKWZFfX1HjH6EhvdZtnSfWorUof32RfSX5NFKZg",
  "key9": "5q6WYrSc5jBuUkF25uUqcM3FqMZqqmyTBXTztQbhJSBH5djPdUCgmMQLnuXfRkEftGHSEQ2Y8S4BJeNeA68mDqfS",
  "key10": "Zmi7BUJ5HZojUAtpLsjADfQ3daZwzTrWHZEKNB6GZN3RvNtR7zgDzHNoVGQXro8Xdpb4GfQruwPJZh2F1JiVPfr",
  "key11": "3Rug4AjDNSbWqiat6uEJXd9qBvFooneLs2mCSSuhdhbz3zHfe31YNzAA6osCriWCcebDmWfzNtfaBQM8H4BGmJxC",
  "key12": "4xnBxJ8XnHYveMQ3DeG4PzoWTtmiVtWuFaXG4cL4AZ1uA51EkbGvjCMDJNiaiu3sn3yA2Y63jh2BoXjHNP3nFhvs",
  "key13": "3k3B4Kw3jpPYoTNxdXy7AmuYWKzpDKcyonhNwEpPcvaQ9AzMoPAekMENHLM4U6GjvFtQUMagiyXiQak8bteDtxmF",
  "key14": "c676U1uk9Uuxxm3f3Ds7pqVwe5zCnigkddLC7gjq6bwBuGeDZkyuScz75fpbowJgdHdA5AE9xnKHXvxUPVkn6rN",
  "key15": "41EUBv8wzGKBBVmyeJTmJ8CptgWs2oaDCWV2R2ieyPikPdpSQxVzTjrbPxLKWtNtVzLit76aNKE8kGx17G87sKLa",
  "key16": "5SAzWnWgXPKU1VtJ5PZAd1etuRZKtEz4Q54p2HUQSgPW6otFWRe5NESaius92zEifySEnvpkZ7yVCqdfLfKCfZyt",
  "key17": "2tqm64xPZHwVQbiMVaEbfLAXFuoHuwviAN5SEHjUaBKUvBz31TM7jUDmivqivjyhB9S1Cc5nU527jRHuRGSnkNLG",
  "key18": "3wLFT9AaiTbAhc7nTkdt2C2Sh63BeMWUtifSK9vUrPJ3ivfXKWZBKGjSXAMiwwEGtBZBbS1uvqJUFKRE1rkKsnbw",
  "key19": "5m8RJ3fCWzrvYE2yYwYpCLejhhizZ4bsBABCFz7DkKrzb9PbTJ4rCZsg7NjDXub2dF2EEmuWfcBGoEdvMe5NJL2Y",
  "key20": "56Cx9484fzjctuChyJom1ntudyApLof8cZcVDuKDrHrv8fzAaSv5uxfwRsy9eDsQmpngCie7vyqnjeSP1p5AdjyP",
  "key21": "2RDsJMZgUBGf3nmhTwunLhroVGifLR4yTfLZCs2HhpzRVFFn5teeQL1dcFd2K27YYSaWq5qhaiQoLH9mH8n5SdDE",
  "key22": "4fHffttCLARfRJr4TTCeBFMLCcNC8Ja4FfwhkykTGp9UCwyugi3ZZFKa5ysQBFps3mQrwkZxQqpnczp36eDzK2rg",
  "key23": "2UPzEMRiSwocUnGJytpRHbz5z2TE75DcSQQvGS91svyrzjmAXWVuVkANz2Ex92zfEWdXYjKHMP1U4rbmx7VT2XR",
  "key24": "2TDkDHKfQHKRKhZq7YHMRhubPXvTon4oREoSKqziSmThJCDk46sob2LRWtLydxVL58iEXx992Mc2BDvf4rtAyxdK",
  "key25": "2qXBeF4VcwttN8aiNcTjmvnKhgEJCJA1RT3kjWD9fjmfvdehRLxCHN9tapa3j19JAvFcaTuHQu2sbH1K4Zgvq5ya",
  "key26": "55C7S91Hyx9nWSZt6UzXvpozZaL2ftvZ5rDo6dTGh64azJ8NXUfBhLA6mg4q8uTUrFqdqyj8h7aexw3RuJzLWLAY",
  "key27": "5gES1pRJ4bwC5D53jYx5YP49nznBgd3krCTLQ4JYLRmoykUow6Pb9d6XSe3VQ6QvB3XMQt3qPTMWsddmqAGPcmZW",
  "key28": "4zmCGDbcYpFyhatDoRCSCozaT9RZscZxzY1Jm6iDJCVVNst5Goqq3c7w8JRPYngYmVGjQiR8xR5X4H6tYsTkqHxn",
  "key29": "3fLg1Cz2LQtpErDSs6eVpctARSDKoJU3jFAVPwktY7YcR4StowMnPvAJh6V6hCycBK4XybhBc6XcXwiqGBQVnCfX",
  "key30": "2mSbCaJFTqtZkGVSKfAVEAmbD3uZqFczmXN4V2QbXwWSF4btndy46avoLwFJtjk6vCFUZKcUUciStVSwHwJPEb2c",
  "key31": "Kiy2LdEnefhpy2swUUkT6JP1AHrChjGuSVYT2drPMsDQ1bwT6qLjNFGSQW7k33gP4gPzoGB7YGNJF1uUkErJKqW",
  "key32": "64MSbWwnauFANEm1PSjvtFNVqp1ydQtfjFa2xxZPyqaTmnhTbwBWTusU8uEvEAsy3ZpYNE9EFqRTqvWZWpSPrfmJ",
  "key33": "2f1esB9zLGvEaWGHydisHz3kfSHUmD8cnAJTr1vXLzWteN23P8HrUE6CF5aSYHQpT1qa3EQXYDniAKHcWhSdNhjY",
  "key34": "4fC3TTV6ZKvV674WwVd6PCotZjNGoirUZZw3ez7RLm852ybBJcb9YErnACKJQ1AGfpY3oxfAmTw1b1KWfGhBF3Hk",
  "key35": "YrEeEhn6QZbRxo7rgDGVgdj2q4ZFBunYopK6S2UhiWYEhmnDGYs58kxV5BvPv1fzjR813fCUsmmX4GQ22TbMkGg",
  "key36": "5s3KFpduqNawUufQ6y2wLfXWCa21NWxSN9apGYLsSJEw53pDa8DMt9UF8MQBdGfJETTfgrhEEGQZpVdaxeTHEvrQ",
  "key37": "5eyGpjVUpsGqcUXL44PntESB7T59sykYpUwREU2eWumZZyRazQRNStk8MhNuaSSN3Dg4pmW1ozgfDqS2MsH3PQ8W",
  "key38": "58EaQkHCkRNSFqvLojEiUJN394P5WyfCi9eaFbdq9rcHc35V9ZY4cfZZ5T9j7SeowfLxLT4sYdzxytaUdkQCLZy",
  "key39": "5QBFUDiSNdHNZRBWM6m7pizRZESvwcZ1Ft8Y2qEYaofyxAyrQyDUWETrpa9AF5rFzSoCyJn1j1okJjbAbJqgwtLU",
  "key40": "5cSQdXGeWWH9kXCiiWP2qK1RDfxhFpTHhp4mBW7PQDhq2EA9P2PqSeodov6ujEZpMQwcvdMeRtk3wRc5H3EYq7Pf",
  "key41": "3sm6AwpaEJgEz2yEuqPXPDMB1dWeEc5JNg2GVru3Mtg6d4zP2CVKkpJLyqY3Fmr8az5TwfdVMERz1AeFs4fHSEoo"
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

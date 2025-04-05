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
    "37prDTpjbA9vbHf9STD1Hr56hyKMZy7UAaQpRKYb1iViRxnzFZKX8XSFT3pXDZauX2f4oK5D8d8yi5DvFKcahcib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jzcgkcxk2KESfYSPDUnJdPFjC8TWKihHaTafxRQqF6TTHufUVgDVUxF5zE629xNAMEPRTRoh6EejirnSn8VyD5Z",
  "key1": "34PuD4aMrNaWhRi71EAjiXRHXjMTnAF7Jw2qZDGJpWgJbrQc36jXYX5cD9QKpcKHiYsnKAPjU3XRXVDaHJpQZxkS",
  "key2": "4PmRY3yeMXFRWUdGA3vvbekMSgze33V6DD8xxR7K4C2i2BgVNubjNTjU21gRWHnYw3xT3yQsHyYSMLnLgv5AvNtN",
  "key3": "2V81E4bGr1xEptDdqNkRLezEtK2FcMbC54JFv9XpyxBirAHwKWX2imXHAZ8EHN29Sy4u8a4sZLMs4FZZSZMhju2r",
  "key4": "3JimLEChHkU1aqwkWExuQgQLNkbH2xLoNgBGAcFrZsgokLyCnLVkPFkRTL8inFbWBEYnrqFboWAVaP2Y53vDZB9B",
  "key5": "yBmfKXTzn4K4XmZA6wsBipbQaGSzHEHwAdgb4aTVKuqo2uPxm33z5yPd9oh2dxZpNXSeke2bEUTYxyTpeuLXZqd",
  "key6": "5g9apX4vSXSiupGYgVRFHy7cqi767mp3Hf6kM2zGsEopBdnBJ3UpXoeN8AvEifywagxwuVxP2gaNiqfgJyHAiqBD",
  "key7": "4JyCKrkujD1E8AkSzecxCfD2oFeekPPT866prB9RswGG8MgHf1HjBSZETZSoZezZ2Eoip2VYKFcBuTcg3xBU9HMW",
  "key8": "25Qxu4mPJ143QqSZNaycKvn3UPHGtfTjeHiPZbTvNSQgAV1CUeYQSUnwX3Dxd4L1TvU82FGrvuk3feSs58pNV1TX",
  "key9": "5mDmn9erRE5da5Tpx9BFYHMz6kdouhta91cgGetZsz3vfAd7H6DQomzLJSgndE8ZvsVFAHtZHXU2YCkNDoBZahfC",
  "key10": "65twKs8MzFDhKT8vda7UT2g4AnwYKhXJpnK3m9t86esL4xBrpEN7TYsaN9qeEENYHRgEycprJCXMSY2cixSJ78GB",
  "key11": "28tNj1x73s9uGXKhJQMujzGnfgSdEV9fMgxpqnKwjK1iy7kmxCeAUSxr5avDT1omRWScWvgqE9FpdCrdYZQCu2hk",
  "key12": "5DDWPmTMZNVNizEpqrci5v34E33jjwVp8MFcPTabLKvshpvEbmTMgzmsKsMhGyqrJCogupkuarFHFBc5KRwtRD68",
  "key13": "4o3Z9gqLgUe7aGKFs2EQK5HM1DEkKUfQFk5BFETDPeaDEvtVyPKk6iLHXTgh2x7521Nd15RKiSbS3GyKkGqj1Xca",
  "key14": "NRy23Z4jjTCjyTaTFhA495h1aib7KqnNjCaNynpEP3JZTLskS9CjwUKX8XbNQ4rztFGzMvrGoYhm41zuAfVsQiR",
  "key15": "61q8hethdYZ8scRSruiN9LeQ2xcnMxinCzjUUDt7XGPnxUDiuhxLGkNfsRRPMEKPxmn1rDeQdKmFBM3Eff9Wj6Gx",
  "key16": "4UhRWbMCJ8JoDAa7W2gsWkQ5PPMipeLssL1ufG1NaXGkqSAMeW3WuMcn9UYV8yHkEQgaccTo3rVwhbhyy9CtTYZU",
  "key17": "2XYSr3gdFP4aUoS5sZC9jS53kx4oMnmSgxFHM6mMQqxowQsVTQBfJZCGUbS8coiY1cxrn7TAdWqZU8ysRQxGTjKG",
  "key18": "2gaZ1TBVbWeyXNh7GDbGAL82cuWEqYjRe2gVHjfMMQvwetVoicyUSRdY1HzXRs4ABxRbHNQq3BW1gAYpAa9ft2DX",
  "key19": "5ra52a4r97KnE5URj1HAFJfya9ABY4JjnwbxYid4TBqFFJw9QF42YLhFGykSnLEVFdZFKpF7x3Kox769pGqVgPjh",
  "key20": "3bCZ3VnzhKZrP8VuwNvnUGY3cTm3s6kEJE8G8HZ48MiFyhQbw6c8ZgBaSurCpm3SkCn6oJaHyRhJUuuJjEnsLdV6",
  "key21": "6KaNMQ8icYkxmtGwTE1J1ywvKdE3KgQWoT14tkTUpB9gF63t3JRr9issjFVaCKmn9UxBmQTHP96sD1H3RMBsbLx",
  "key22": "HZPQcRYfpoxpVZJXAqxuMsWMTdE75GVGhgnojPWjw4ePJZigQi4QqnqFi5mhyx39htX1JcnaYeCQXvA2FD3XQQb",
  "key23": "4YvGMmWHk5621LiLVsBM5ehT89oFsZr3ZZbnCjfkaKYfC5z2UYkBdB9biU9MMQ6xG4g4LhX4HgHSLPZyEVimgbgK",
  "key24": "5TkvxwefF1VFLKfhLpgpNmmWUCJN6q193nNjeRgixuJMJBiSu4C8ocfehnbLN9a1FyMuaeRzEGsMKcytL6KpgMTi",
  "key25": "47cHPXd1YMaY9puFXcCYY3CLtcUShE1Uw4S3GnomPgRXFnY5Me4SdNfyQXBmobbSioqWJRSTpmCqGRQshruu4pec",
  "key26": "4AdTUJ8N5dCZcrLDhZe4Winbg6B7ds4mfn3GCJNQedqmbMRk3LL5QqtvPhMMmXnvgq51wP5oWLu9AKYJmxktuTM",
  "key27": "2esnqaFqaX6Jcdp8gzFnax3QBtTcKLwNwNwLEmGCLqFf7ZvEP5BjWBPvDu2X2ErU2nWBAdRCarFbGvSaE4YTECwc",
  "key28": "3oMc148G6EoTKEsXigJfQnGDWanMncyTpYnYUBa1ucDcAanadXW4DPVK2So2BRhK5DcmPn3B2JknZS1cQCRQYavj",
  "key29": "5Pkzgz5bxpSzy6Zsiwyo5iuMnryHrxCsUiZvJ2DoNsra1wQhwJVTLTcjN7n8dApmKMjVUWaCi58NvJBrXjXXX8gm",
  "key30": "3HcaoUSuoeVg6KrQweTy5wcJq9QjiTfERct1zQ7Cm4rekwWyFBiZnpzd4sXkjLoCgMUNnnacRWjXqKgGjjkDvYU2",
  "key31": "5LnGDNwqWwV55udsPSt8kZ5De7dUeGhMEPhtEgifxMYCDyn1rMQBpTraxPwNWTmXHZgR1RCf5LSM2YMHEyuTBuUr",
  "key32": "2dakVPiJVAGuUB17YTNX9yBwdKSpRZv1S1B35i9EzKjec6v5s72SM886je5FwsN4b7RN71Eicmirwye9aiwFxQ7z",
  "key33": "2tCnntVxkXyKUkMwZb246T7SCuGkgGiahZ38bc7kMwrXPCVDaxUiqcoY6NhWC3iM74s7SFMK1DKToWNtmK9VKbi6",
  "key34": "2kW14UKBoxgcYmdgLANdg94JRkGxg8UbXcSPuxofcTanyhWYP1xRotnb75QgWHBpbTSRa3mMnCQibqdDUV4oSvGN",
  "key35": "ruW5WvnySSuA4AQd8FVTEp6THz8cqTLeLmEb4CFncP5GabB6KrGt6oBW6XuTAr8p2RLdm4SK3d9vwNZRRvezRwk",
  "key36": "2813suZ1f8UY9xJ5YJFm5mJCrwktYfSNXsDaXzzxLqXM6YpRaK5gXEpsYFFzMw61g3D68eVrmRrqGBZU5CeD8Dbx",
  "key37": "2cAyXnAoL8kyiBTkAvLRW3obFZkyw58TwHphkxJq5atMighgAk1gngVzFUaBNYUwYjZSYhjcRwE2MW5ouEbwYc6m",
  "key38": "33Ljde7WCCcQ7BLwLqUWj23tfyDfHgkuQp4GRGebpHXHqztL5hsnqHyFtzJ64Cohv9WmLnv9dKrWDyCVUoEqE2uc",
  "key39": "5Q6RiKt7Mi7iaygsmimB9pQ6qXXGRKM7hPTERAQKohMqktmi5rwmqfsSVEbCbnVeVukxb6MS1geDNq3YDVL5DmED",
  "key40": "2MqKzcyb9dkM1Up4MTkNDb1AKKdFGmqSwLHe4BCwMSXPKZrapFZZ9mt6sUe4jB9z1fL2TreZwyRKH3pWQtKFTEUU",
  "key41": "2C47YKhiwivGkreW4T6BvVBnfjCVKYSWiiBKJdgbBRjp6USPPYzAHXzUEZgYcAPvGgAVjDQ6Vy3QQPfvDzyPKqzm",
  "key42": "2d4U6Eehs5S7mCrbV2BX6GVJknN1UY5i6oY2ugbXPGNT9VL5Wxxxyy2UHw4JnVaprwoNnFWtPPzD2HDv37YxJUSV"
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

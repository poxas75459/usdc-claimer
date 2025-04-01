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
    "YQv2SgGCj13S6hJfEmrn7h3Qy4SKciSirRWRB7uaW1nbVvVyj9BKaDcMAzDWKqQQq5JuPox8AKrT1k9yVg6Ek3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFBGwXF6SmVfnwt9HwEmiK1q318TrQc9BYpKa6Xz1Lh9z4wRfsKUahn6s7svsntiTuGPakuuCHSg6S6kffVWKdV",
  "key1": "4PXxd4UYhp7AJKZ7Wo6caC9gXqcTZoLFLywRVpJNbi8T36yQ4pEbp4p5oR3GnHyWs5K1ih43yv7g7PFbqAoDZ3pW",
  "key2": "59CF9c5VxZWcR5SxANbLpzmCgXjpvudFMnvgkAL2BAcMupYkKPexyPHrz6g6j1YsdJeq3W4rbZTsUFpHXFfYbkDz",
  "key3": "HSozw54vCMbvW5XABAsFRF5181WWfmqX7P9eSKTfcTQma4Tyi2kUrKKN2Q6BnUCLnDkjUPM9dr275unQ5VpNYio",
  "key4": "3zzdvP5wMd9sTBhdorr7VU2snRYQ2QvGWTHNpB1GxRQCvBFTtoaeWaU2a2LKsoKqP5TPQY5WqSqjkayPvgxCphSX",
  "key5": "HXEKCGaVNj5yzHz3qAkfrbPEdgPZqaUDf1SzKwxrhcbdRUR5TN7sUs9NKc2dEx6e4Q8vm55nfcb9xg1LDZfkAML",
  "key6": "2BQDZTTzj5M8NYDfMpnws7XMjZag7DZNKYJfg8DGuX5onb356F5uTEML9qffK1BGtyAPyWnZgo6fmRrFnJandHEG",
  "key7": "5VpGDkM3ZBqR2GHBAPf432H9v2RiePXjLeztDLNJpoqirP7ZQnJ3HyiaU3HmRuttkBf3tD9pHX2Xr7gTUfCWgw8x",
  "key8": "5PK5Sccw3hmzuvzNMxRviTf41YT8WRcfWB5LgBJek7unLJCY4uHVDvzu4D95weQVctSssC4atet9D227fuNkdGBZ",
  "key9": "3TKEYb8akNd3KzJSwK1GMTj9PULBAvLdWJe475s9bYxRwhewzvwcQCXBKnH8svjAH9DxN8QPpU2sFmcpLxrv6Us1",
  "key10": "2DL55iLWxcGLw1Yv8xUT3QBEj31iDRKTseRRLBRJGwXyrPVDaWqreDU9Wc9VzvbnGqEbAaRYSjBh5k9fu9N7AASJ",
  "key11": "39z1HgvaGnn36pSTTUPZmtbofPbgzYPAnPbuF7S2uP2RtR7cqfUTYgRZEeHCjXLb7JuvMKooTrMBvLkVjd9wGeUN",
  "key12": "2aKZkEUJ5v6zpmtyYPdceDNo5NkfkJFEvQMZDCv6AFaRRseeHNqGwLf9yRPLyJzMuMsqEtFMu7SseoUQKxMjonPv",
  "key13": "4G9WevDuua98mPPZNoNCztpK2FDwFGh8Lgp31Cqv7HNMLs4ANCgo2fBA5193VRuCazuM8j6XLMjnggv9NEYeWyM9",
  "key14": "49HSbJ7BBVSY58a7PBoQ5GrVma88664eYr44pyvw8pG9xcnZjXCVsF6gVvwh6RKFBmAj5ebNDTmH5abYNoLCTsXn",
  "key15": "2Z9cyQ3AYMUqTnz8Ar9xK5ihfapEYQKDUUKcqBxYtARPa9DxBxN9wof1ZmmnTZFD6s97hQivw1Rmow2Vfps77BHG",
  "key16": "2pTtaoMhEWxzqybRqd8aNfED5cpaSqQysyB7d6CEWu69nC2rgY9ufjZhhgJRAiA2jBtbtPcvEwzkkvnBDCCECrFE",
  "key17": "5G7DzaNSL6bhWbSsUzDKQCEwyKVwdXFyTPidzrbuf6heZLxreNE1DJUdomg7rKboXgWaTNNiDkCg8jjFW5H284SN",
  "key18": "5yw1TEuBVofmpAxf3dss1vRY32yHbgRqrrhxcdCkYLNKdwsCNM4RG1yEsxBy3FiH9c2xYNZPVYwjnGokJ5gdcVv2",
  "key19": "2DcfjREBBXaxDCyJGEHKyRZS6gjUUc5iCNGmsaauZXVQojyhbGvG2A4SdqfQKXurr9c3sja2ptt8fN7vSnkbgMpv",
  "key20": "3V6E8V4YKBKqDJK1bJEFqDEv96889qjL9bVhwwfaVE8ohEKZu5W7WnEv2T2K86D14ujF4NDs6hVt52dsZJAaxtVh",
  "key21": "4EzzHmE45BvnZffysM41Z6yNQdCVKbWEuP9xui1BHg3MovZSYGdv93BeV3dAdcWHF7KYAGf7cBuiXNS8ye9rokgT",
  "key22": "59aHwuzAnkyanv4U6VDyXXzhpbBqGnBMqXBr8F1RTzsmQH3nZafSMBdNAPT2D2NuLmgLv7aur4kQKoTxFvp8G6B2",
  "key23": "3ou67D5qR6y71PLFj67DhF19oJqfbuHEEuToXHYMt2KGPwCV5jG2EBgV2DDA8rft3qJnpwo4dGcccSZVbvrwak5D",
  "key24": "2k2SczDqXsaY2vFt5WMHPDdn5UyRHYbxqGhLCDPdAxfZrB7HZPH2jEv5LsPNL27S5fMph3dbLMoxAiJCDrZ8Qhbk",
  "key25": "2fggTNt9WnHAZdoc9wMFFVsjnVvSaNho2uhLHPvaz4figE3ptux1XnTqqmgVHNi9ixXXpC8K9foqkSiuK4YEBt8v",
  "key26": "5KwXeTQNbe7pn3mP4VgQiqLJDJCgVVHbF2sJ5NramQVdgCgPmMiW4c2vbekGP8iJwZ9XjGUoWYJ8WP27X9swhnad",
  "key27": "3t1pUwdWc5fMQwbESj6Bh7xVq29viwtuy3RFz9Eotfxm74mFVkk4xbqBYcMcYFutMTPMcfSjV3NkVFQzCg4rJiD2",
  "key28": "5d99yj6gogpnwb7PU8L9TsfLn947ggpzaGegSyo1au4K5egVb9fgydtUFpmcUfjp4bE5N6zbe1HTid7L6s6VBfqr",
  "key29": "P4PsWdKTWNTSKSq9TjiVxKuyNp9mmz7c1TQ1csvJwvCZAgPqJSNFkW2CGDryYADtt5Qx3RDJPCMRi7jRkmhAZkX",
  "key30": "4K4JzXaZgupEFe7BndF67yekj9HzRiNjZoXK6Ze3F7ixP2crkkHZAZJisK1M4Hse9DHaenoP6air287bjxETD8ak",
  "key31": "5sQMBxKwy2EGF824RUCQb9xSs5EAsP6WAJMq8iPVyExik8LgDb8Xafujrk7sHKr8A8oHu892vypK4yRmcL1NWPAC",
  "key32": "3L7f7EKMq1y4n6YVZMk44t2LiNaV3XuawnjY9ZbLo1VahnEmFe4evP5Z2S5CcUmYUi2RB4LuUxvF6jqhrz3Emcpm",
  "key33": "uJr1iDwtEUNyo1Mz7oBr1wR1nRPkkPuk5eKm8qgsUE9No6CCoYMGuhpfYi3QH34QJkjx5SiUdjNoxM2KN476KU4",
  "key34": "2ZYgnSA478DjTPXFsALXpNdUaKoazsRtELyQYLRYgdtaxNJwycYZs7XPugfmrNV2TAMJdyDKyvHJ4wyVLPxKAyJX",
  "key35": "bvGE9qD2qqdusAXKMt8eHigTvAJHM5oCm8LhB1bbFKPekZP9Sw73wbnpzaJheik9hYDQrTjQq9CeZCAN8PN2n3G",
  "key36": "KEeVc7ttMxzHKf2J3u7NYh56JXwDU7P5xLYbfs9nNEfQ23CrAtu36BtuZvtxf6628mrEpqiJGey1D9yPUPaoHui",
  "key37": "43SYMrBdw71AxNbMDuE1WkYCU8jrmQNbpp67Q8MH1maEpuqyHygsD5n6Hrm5fAWS4dVWE26TbTeYEbtTrEUfqAWr",
  "key38": "5NYu1m4sN4pkgENpobSU85V4ZSdp57cFVFJ5igpXhdCS1eLkWUMtgtHhToQ8x1HbbuLeEf1uZdvxTy4P3VT8qVZZ",
  "key39": "UaN7PDQCDwxZWuowFi6hv665NrYevZRuUaiTsRfMjBT8gEMEZEmSZmDWJFPN488gA1Tp1FXXCEJAfog72PYEnBT",
  "key40": "eUjznAKSdvojM3vbMW8vTrX6eBw9Ys6GY9NhnuPDZawQee8ncTqmgDAvV9CgDAHfG1DN6XiGG7Nz8ujYErbH4n8",
  "key41": "ptKdatwWExVzx4QVcwt5v1JTUVtsA2o3AubLY2jXc6f5gWpB522S1AEfB28W5sGxwvSSEheQyY1HhnYas4bq3vJ",
  "key42": "2U7qUsphW9ezQ3CAGQGgBd6PSK17hEL1eWBgrUYa65i8YqKbPj9jS5b3tJAipxZzhzqDEP2Ebg37rhnrVwXq5WDG",
  "key43": "5fbuF7Q8jkSMzjiHNShguNrZWkLw8e2ComJVcBd169f8zpbvqYT6Gvpr7rWKrGt5jwsRqrhTFKNuUwJhZWURfPnd",
  "key44": "52p4sgy5y7s3hq3ouDfdcBrUjjPYnYULF8sMZAFMtvYE8zqrpYi4EKhMvjGq94mEQDt6FnVvfVqaRjb9vC8PXM6X",
  "key45": "4tsC6PtpT6qYh3AXDkF4fpnjC5RM6wYBV8NR8shaqgZvxSxeBRVisEg8NTXQEEkZcTvRkwbr1NCGi64tL5Qh5dSX",
  "key46": "3MuFJ13GC3UUvhtDWctYewZfhB5kPpJXHrePALRyQRcD2eyJ9SVhGMnF3sKqpsw1oCcdnx399V3vVJmyTVPWjv3j",
  "key47": "3xvDjJN1WpPXysTj7ZJVAfKz4fTWH9AJ1Y3i9wz3stiq6obfuuGvpa9xeUcrQJa2xVyjEayC1d4XdDCU86dKx49Z",
  "key48": "3D1iRevY1JFmtFaLJTCFdZPdtUEiumQytx5vdhQjjjqErZ2YoNzvehUygL4L4chbHmFAJ25zvNZ9CL8qJjx1x23m"
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

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
    "37ka7LDDr75EZM7wxM36EwAe1oSRJM4Hb2pfEoZPen44F6JsEQzmafSWTdPbNZbxPgfK62ndYeB2pKxysvjsi3gR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SRVjUMF3wsSJaRx1AGfrHduf7Edmo8qxhcSi2xNxng5A2ySuFkT6B4oaGUukworuGXDAF7pu4khFpeibt6pn2JG",
  "key1": "4g4ZciviDZr11p3cVWFf6VL5LhMC5v1VqEsV2UuTZZVov129XKSyHty6SKLuvd3SrgZi97V7CQh5FwJsscHwxCVa",
  "key2": "4L3vLPYTonmX61moCGYvw9F1v51F1i191ebwv4DvQL3hx8BxcKz65PCQ6Bn9ZsRvJkX8ftDitjeq6oEhVVGjJxGR",
  "key3": "2F1dNGKBFUVm6zxFrnsn3oH6yPymHmSyghuH6JwiKDvSQkiAcDF9uFqCpiNJUT6U5dzVPFdcPeUPr4Zaris7RXBG",
  "key4": "62JSkvvjDFBZMhRuMkyrsakZoMttHdTAeMUK4M1u2z1gYARFTorf6S5uSwpxjZ2f2vjyWocWgGGyGrrstdE3aFvm",
  "key5": "4XGpcgRtAApTmPE77khyhwbUgLjCYKnX7PLfz4sZUGJcun3tq69kRpywDjh1FTN8TTB9RqcEyE1YeAPKgbrTtsPf",
  "key6": "3iy35syRua5ng75xGnj8kPG1WK3vqs5TeMMuKorC2p4i9U4wak9wQDSqUqjXSf4sqM9XJgGyJjmfhR5GHYnwhRY6",
  "key7": "47FJ4cAfc8MiCKQk8fJExcyXzqyPGt2umn18G3tZRdBZyPMC4QuL3WhBjcyNoVLK4WGHeuDEcTgS7NDEQHbJqdbc",
  "key8": "4nXEVdkhKnacpuHTF7A1S6PSAV9A6dmSAAW1f2pLsSx4PVuvCRaokubv7wiGzxijkbKU7n2sujcYj2G4GmeBAcDx",
  "key9": "4fSkufKna51WhkXkf4ftqYYPVC35YZfJrFa4cLkw8nh27PW6eyytV9c5KY7DNivpU7iEcbtNjMn4uHuaqtVjrLqN",
  "key10": "fE83K9EGZXARJRMVwSAuiPFVnGpCcoioT8FbGWHFahcc4enEAT9hQJbX14XguVC3FJ1oKtQULxs5VQhF78KBv5p",
  "key11": "3YGmJT9Uue6F4jMYR2HnjjWKpTePs2GFqM6Vboc8uSSP8bfAjkvn2jwLTJYaPEr6YTdLEpo3AYDsERtsKjKY7E1L",
  "key12": "5wgYV4g2jUmjzStkDg86suwwPmh8pjEc5B4E4YdTH8re2eHdwxFjNApiBsLW5uMTvhe6p1vyK39Awm5H7QYwk9vH",
  "key13": "28acTBvhkxJ59nRvtnPeiCAcwdBX4hxYxatnDk23Ux4h7VWjkQg3u9NDjXFVqHc5BMxJ5Df1EGyJJMuNLHZ133Az",
  "key14": "3Zrgaj97ahvdzRNFN28csnB2mKTTgV7NjFFY41tJh1N8jwDCEfZbJoe3ejynxVHGCiUZuSRsUY48UsjyCywxovU6",
  "key15": "4FjTiNRK97S7RvVno6yuSzq739LTyiMeJB1bvtPCHExgg4qqKHE3CLQ1x86pQ5LTmCpzd11f38oWapJGH6fiWS6U",
  "key16": "3hYHfycBtyiPcGZ4vCRJ2eGwZpn1DJYnGBGqssf55LGMmZYyfmNh1sXgGpbHfXacuT24VTDbvhveQSjvUrYaeWQB",
  "key17": "67FNSneUVSCEkYZ5PzrmeWDaXq5Po6m4tqYq3cBsnUeW19UqyeK3XeAc3JbZ2QP9wyArG5a6U37H82eFqzpWF2uo",
  "key18": "2n55kXFP52BWjpzmkidTECrH2LGkzhbiznn4Q6d1A1yUYzzDrX1WAgSSiZgPnrhtTVQ7vtdwCFXJz4TATReFv9tR",
  "key19": "3TQCQ1nxNoDHbEoiALXUFSCiAWt2jCx3rgCwEzCU63AxNiBhz745Px4Moan2i1mSGFCVumwLcb4rveuRNwXPT2vT",
  "key20": "XEJWUgsds9XP47EQpKyYM5P2QDrbRWmG63pVMxr6H4uU7eVLRSYqWWBrj5YoHfJx25E7oAUmQ1t2afdrcUPd6xQ",
  "key21": "5aqKFQrm1S5h62RZMzzuQXFe7B2aZYS9FsmDfYisv2L3UZHdVFakNNaXXCeauopAfNnBXSKdAstP3G8mkwoZHuNn",
  "key22": "hFF2XAX3sn4JhYknRG7dnA7ovY4faCx35MSNqPgs88AxEKgB4RSGdjjiVNpVpgxvZ45CKXbMCv8Sg5TL5CDUgur",
  "key23": "366LH4Yis54yjGNK4KerTZdcCv7tEenLMixTeSBXe3YEPnwYU2tUqwsbdAV2BdZpW6mvtas1yZ1M2LoWwJUBGBhf",
  "key24": "22Hy7aavYUCYZeiHr3UvGvVKPmCXQaHTAR6PPd2NGvehzSSFLR77GhWFQzxfmZraBTL1X7682PJpLtRENSnPzwt5",
  "key25": "5SJrCbfKrovZonENASdZb16cz5EhEuTU9H314pNE2hFFYK5v3BmK4YQyDxQQgM55fTFRspsdTCUtgSM7P6a856gc",
  "key26": "3gm9KBMyygcs4Ax1KxMTGAczW5tyuXCuqbfEM1wARTzUBKqDadE5opEqD8JGuJ3PQKDy3pPE5BPTjoQ2ctDBaBw2",
  "key27": "WX7m6AYVnKoSub7J1M8esAYBvuC2aPpJFnHpbrtK3eGwZiT5vhwxPXGoGUF2SjPaKbTFZhfFs826BQ8Nimpvn14",
  "key28": "517PVNZtcfQStrmgiyqbBTLAfWh9mmdYw4J2goUvCQUh6nuxfD1j8LAMtNWn5hcsh256J3WPh2wzHRkTZaKczeZJ",
  "key29": "5EH8iAukBkex3c5PGKW3wQNnHnZ5GsxTBPEKWQgZY1aiwMhtvAmk5k9pqXFdo9LrsaaEadL8KWbzqMsSSff3JYaS",
  "key30": "3LaHtxztSVA5XpRbLGjG4MxnvZLH1rtUhuYC5XMtaghUXXSegmhtSnPV1ST9eao8xDpeC7hftsWo3A6AwUajxbE9",
  "key31": "3F6HJG3QYVj2zx6rXPBqy4nLDk7YDkH5PSdRqdDxueYo1Fzq4RfptU1x4jVhFrq2u7LZ1utY2vEyV7jSjbkxw6Dz",
  "key32": "47FkdQnGrze63kmVcuQWnRAsDv2XoLCUiZKk55FKNaj54mEtvMp9F9s7zDkpSy54QVwf5DnsSFYmCjVjCbyJvTnb",
  "key33": "2see2osCeZ7PHyV2HJC6onBgNV9YQDuueo2kDKiAMFTquZuKDRGFMa9SBteHofoz74kaRru4xcDX5Ki4u4AKDkxN",
  "key34": "38RR5PunhMSq8zVrDrcs9CoyJWPnGPxFEa6TpTp1tARpfTssyYzFMUDkvzDUj8QKrGVJdXh64YowWbD6zFVn6vUV",
  "key35": "2JNs5R3F6YXTH1NjFJ2YuF18JpZCfH2TxooWPyT7xhCA8koRUKATaXTPGd1tKjDYfv9x8fy4HNC32edBkec8zbWZ",
  "key36": "5DusRcmtJSEZUENg94qZw7Smjee2ic9mCYgiBvFxkcbHTagZfFgDX8r5Mncm7UmA6ipJgkMh42o4L8ZmcRaGDmqF",
  "key37": "4t8jsWGhhhxtf25tL9n9mp8py2iZrnwGJSsq9LbqaGct6zFySb8aMX583HdcKWFRMRD7GFJL8csRq9ex3A4JV1Tg",
  "key38": "66VEXhVCRedTrdwHzgDMCnTaBstgbEvZAVXZy33nazXsUFNVkmZ2ZC377k53emtiu2HxzPLqvvwweEKKVCk8Xfph",
  "key39": "4W9bDYxnvoWDiGRJLwVsrLgFxN5FghGCZd5mGogoyykDK2SewWHUUr7K6ndxKnSCkKsWH4qddUPef79KNqxhhboS",
  "key40": "2ZJ4R5zL9yV25dSgoJd8UBWwNt8xgEzZVvPXNtCVJew7qkqrwwe2mh5t3B9veanTu5P15u6UHAktteA3SVmah2Bs",
  "key41": "mtTMSZQhHS84EFPdF5JSTRDYTnUkXeCejsV614zH3w4sbwbQXP9TPeHpGKkvFoVAYYzGVpit3rZ8q5hSGMghvhj",
  "key42": "4LMxhyLyQ2qisrCSiqK8V61neFbtCZzvAqjLAd8HbavGW4kUXTJEBa1sZ9BmPYudLDbxqMNkcJTs4YLdqsr5D5nC",
  "key43": "5apyZDaTiQURqSUGPm7gaUx24aZdW4xiwuUGkev3jZ28chkwYyKdnCZuVYHHVtoAdVr8M9yfyo9gSiapqgGCT4NQ",
  "key44": "2CfvSJ7xL1FuNdSjwRDvNWcCTfheqy3maJjkFPeptGnRheyhLtLA1fUCJy97yPhojUMLSc3WjuvuHJ4hXtQA2qBZ",
  "key45": "4oDGh9cYut3n8MqZURuo2w5EWQhS3AZywttkxaJsVPNpBpZc5BekDRkCCgSAEKxqJXbDgETAxii4RE3nZv8Kkeqi",
  "key46": "2Dtg28yBttrgawn995bF7fLAohQXfQU8TkD1Pu55CihNuGEGPiRX1CAcpSWvei8T2U1zQ18KrqEGkjG6SM4xKzf7",
  "key47": "3ica8PQvyaoJETw8B7RZcekevhTbKdFyAePysaFx1hhDFJi2UkJkZdgnJrbdLrSHZUwz5eUUwEek1tANoGTd67Nt"
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

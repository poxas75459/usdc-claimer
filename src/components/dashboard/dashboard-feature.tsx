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
    "52HjpD4zKB4NKepeaUc6E1DbGek43gKmPDAu8UzXtQVowkUdqPCdiZdKwQpNYhqrE4nAe9erpJLheLHWTpPtcLgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kLYAojB3FJNTjwjonje3PyoXQZ83YPRe49VNr4zPfA1RoQqeiXHyD7bREY7Jj5uoh7HhUHRwHwVadPLfwKNPfTg",
  "key1": "3Y8MVboJA1PD2RNE5HK5fcQKXUFXDifTfn1XPqGBuTeFfPcC55mnWNcbtpnBRa7PEyEASFLnh3R7qdFacfk297wP",
  "key2": "3hpcQkY2rwdsXTE1qzyxfYKv8NqRHnqTS1DPpJthx3364ZEvdekA1BGDz83AtZ74j8EUT6UAAVazYPF2CK9E4Q5v",
  "key3": "2SwqnMwygBx8ueBA5fg1raoHE32dcw5xBpMAi3BtwjaZUirQ8f2BnQr2ko6X24UomuQG3KGTVgr2J2t2HmajDF7d",
  "key4": "ELb5J25ywKPwtRg4TBEaY56pJsgLbR91b1gakRjtwSAtta57xqW8RTSCCWJjmqvBuy1gHfCbJn8pVkPJz9MgF7n",
  "key5": "2oG56obEnbC4zi7SGCiUDQm233vBPJtnysXJXJpTK6aXQESbVsPxBNEZnvz3RwGE8q54Wm4XmcsxvDFCYgGovPzZ",
  "key6": "5xtovQf4Cu7wboAA4WRsC8qhiriVgwutHnWVgDZJcDq8j64GK79KeoJcPxx1d4U4AfvKiiRA7r7gwcFrmDvq7eRG",
  "key7": "3mmyk4svgBbSsuRs2vSTwBs3YRcfTCYvnFqhW1G5HSVvvBCyzvMqkDMFtHzawcKecg7RfiCP6aS5SnHEHbWM4pn5",
  "key8": "JfHFetggk9kyZZFcgWrEtz3Roj5C4VPyYPBkJnR5nGXWKPs3wG6PhGGf34MceVzzYEoZtpCV8bb823Q2vs6QJH3",
  "key9": "3VZPnx41JshxYpdSkwzycorfJfS9VQ5pgEkQZ5a7h6NgEinFtFautwFWurUnCXYvpcnJkVJouBPousSXfBwyVGum",
  "key10": "bVnFem8UYtzf58fE4SvpcpSogGpddsXj9672kZaN9QLN9Vz9LwuM95CduR8ddHCKE3zbXgd6YZees1pE4VS9WUL",
  "key11": "44yW94VisJRCAS73WZ5ygTTgHSJL3mb5tDxC1VcLFPSppapMWvx31kzxXCqeEBzPWtwkEvgN9UPRBZFhDNDfCjYR",
  "key12": "5kNfFECmh4QzYwMn8A9gJueYRktQcDxG2Rqb1BiqgpccEtxwAujBFSRQVxoHeqzubogSVcCZ8XTUWiPB27Kpe6DW",
  "key13": "2HMaMctH15Hi2dCZ8JACNafbWwq6ck3MrMVnzx61h7NUmKXZndYE1PUHm3NZtnBrsMpFf6koPmecgVZDJsEwH8dP",
  "key14": "3pNpqua7h28bD4awuZ88i25ak1FronXsGbKftETD9ymG3MtEmmPYZZuD5KcUaKVYVgF9pK5js1e3nXDRo9mWsFDX",
  "key15": "3CEe8Yt6oGsQagmEs3giZHbGwp31XwDHgFt9jChGE8oS9rza4VjukU32z9URwgUmKKCpGJKVgn29MA132HvdGf3G",
  "key16": "2GUjNmxpZBT5L7AQsMikcUg3SjoXtm1AyLdVPLhmxabTp4UrheJYWLXJnWUZHYdwDpdHTa27j69SGRNrPcCun8GB",
  "key17": "EKASuy7gSiU8WBgWCEJVRxb9GLnvvkwCmsYccxFMfVzTVz5k1Z1GBY65jPf66uZXZ5voF86e5v7yeRya2CCvE8X",
  "key18": "PJDzxew6yWg7JWaafX3f6hSNTX67mgnuxASoyiekyDsDChXn4DaYKGozabZjy1NNUXc7dki7N7fs2deRMvjH9Cx",
  "key19": "FeoVuHS3PYxCFd8BUYkvN7Fe89bYJEqAXPfsWFu862VMZrVoakRD1p7Pnsi5YA1rHohnQruMbpSTJ2aJUVCjSmP",
  "key20": "DWu5kLEAm2XgBwyM4LoLoyDurMsHYiFHHi1tXD8uHi3yVo8wHPxJQouT1HWY15944JLjkwDudJj8HWP19gbz1n1",
  "key21": "2ArwpMQzq4NLA9S1daZHgMg41B2qAcJFAsyr74JhHaPYRJcSTcoeuiehT3vNNx7jv77dY6kUW314XszVJxDDn2zs",
  "key22": "52tzN9Mw6MUEw4ESyoueMCMuLfx4pjqxak5q2vMMJFLTyLowEw5dRU8VqFpBG8XNXj9Vk7zSnoPknwssNFxQnLk7",
  "key23": "3apk68cBnNzwohRVfZ9wjqDuWgGe6YrGwJz3LZtD8a7TVWNT69arbzpjgon2Hd22MjnhoEPFjc5vKSH71ypEeUFF",
  "key24": "3dMvhuXQziKmFkGf5QYo62dwbdZnnBy75uDP9LBDSrmydvJ35MVkHbQC2DJxotRSvCg6eCUpPtEc8FKc2DHJ6C8g",
  "key25": "51gkkEg28WYyNhc79Y5MNy1dqBNgCZEpdYvowNbgk8XKdkdLCfD31uWF9WfsrCxHP8GYrwype2SorSQA5tyA4FVF",
  "key26": "731FXmp647S325NK9S9EJepYwn7G9dCQsaCXyQBp6WnSxaQK68v5aKddJPNtr26UpfjhQ9rJN8zNiDXYKmRyxsY",
  "key27": "4GdfDcBaMv1SK8iNRHK1W1MCkz6Ko1Cc6FQA5su6CQn6QMGZcXuweAvvHe24L3makXPuiUPkVH4mEEBg5ZeiR3Cz",
  "key28": "5z89msibphEHRqP4LKBxEhRD5BmKcsGrvacXZ16uc3MA3usAQ7zGgUwYGe38QxUP2Ui5CUtQWMWwbfPXkN5nUctv",
  "key29": "3dsmxJXTJbfZCKdc4VTSXSiENkrT4Bkbyh4hSDfRHBR4nq9iAbNamCKwHh7SAhB8TDWvhZTohnBgkDcJ8zN5WuZd",
  "key30": "3PfjuwLVUZpSGNXcGeTL5SxaSTFAhMr3hcJkRn6zBvfSUQ1qu8FM2wdfy9G48JwcJmxbetbhoLGVy8SdKpfjm5Z2",
  "key31": "4oHeyCuqdK89verrvhW3e9bNSUDd9sN2SZVY9tEkZXoYAgNoT2tVTRxkyzJ7rQFBMh8NVNANA4RUzKsWZR3Uj3gU",
  "key32": "3tbY4jsofM7LKDJVoniDmQwJnughxHkNyJN6URtAsDBChVR5jmYxqZxSAN69FR58Vwo9MCmHW5mCgiBpDAh7H6gi",
  "key33": "56X56p4M1XuSq6FvM5CdmorgEWMpsfA8qD29eTUhL7qqXSqmMcieH9cTj3NHHKQikdW7J5zdspKRoBvZq99DZHVw",
  "key34": "5ioojCNCQUvVbBarTEXpwaxJMFhfoQTNKi6f6PuxEdEsxaRov4sQu1QR7D5ioAqeiqyBY6h6Yt3mfQiVmoHTahuB",
  "key35": "4r5kgCzzXRyYXhnvnAbEV1N4aVv94LkJHvvGekmzmZB8jjB89z97rFHyBpSwZEt2HFcTLXZQrBs7yx1gxnjcVoTJ",
  "key36": "34xSWRua3huq38dyzFndSX44zdMZRFYDbPyXXuMERWs3yav957kEutnKECm2C19sTMuJZvgm1xx41vyzFNxMt64x",
  "key37": "3YkUdgaoBtYMaSUjnUhWJiSmQQHfeLjT8indYeCjmFG63uVGGomZGtqaQzfNbmvdioMRbXhhCpzbjKGdz6AEsM4r",
  "key38": "3uCe61j1tWFkwkDZsCJRQWvKZq65x22miXzECoAWn2JTu4LFAAangv7i6ZNJmRvNnEXcnXHcp4J9BRaxGaVqbBcC",
  "key39": "5DGVLVGkauE2enuB3qAfMRGz483bN4xogMoWSMzZqMqR2vkMXNi8iDgWjYRYwzoMH8TFScSmd4xcAC4tjUpgj6px",
  "key40": "5rs5c4iJSk1TvUpxzBfiyENwyDu3KMTPh7jALX8ziS4sn1P51mhMMjSNBkJHTyZFto7grDgmWTSqCuPYbbmZy9os",
  "key41": "4hafYkyvPKBVu2vY8MQLzDJS9Buqb3vKg2uLGrGLAurM9XMuiKwHYUMjT5GPmYfYjDvMqd78TaUkx9nfkisRGkuf",
  "key42": "2A64kn3LtR77EUV3rhVDv6zBPV9bh42Ewmiab9qFHNTX8SqrzjveVnLTtSBjdxZVsjuLcpyaY2zJ7MFJuL51VEpk",
  "key43": "43Q93NiEB2qJ3FN4U9iXvNQ3R6zREPdw4y6rvkqqkZFPrjYLKBdFMXZbpzgqdznK4armorxNk3Qvv41UAP1ii8e6",
  "key44": "21W3Et8DRSNNJT9qkGfCQTBgr7nKunUGMJC9kwAeWzTo3qzGQQwVFZUvyRXabsYS1mGFAmSLmYK72fLPSaDA7XS2",
  "key45": "Cx8Vfdz9WMSnBGeNPGC9c87pv16FUbedFFftRSv7Wdkcyq8Qgya5SE8eHBroCE1phau53gxYRtAM3mipepa7fNf",
  "key46": "5vB1n6Rg6AwNnTrHcDEFhut9TEs6SeEGhVx9fkga3k96AJZ2vLSbJEfBeviKMGkPTr5o5pBXofxjRaxBupUb64ri",
  "key47": "2jHg3VtNTH5LQ375D6UL6pgLbT8NkipNEc97JvGcToKn45ZTiDsbLij4qt1w9DdXVUvJDqTfAxvc2XZM8gz2Fhas",
  "key48": "3qMRuddNUkPox6XUS5xSj5tPYWZC1dpiBcBNVUAfSsM6G9ULxc93mQPJzXbzwx6HjRFNRFH5g3XetyCoPzttrk9s",
  "key49": "4TSgwaoBTvLNkRZiyUozeM9LKzKuwUDettiwqyzRDZ4jYpW7QidjN4rpdricuBtcWxzKTATcfz1B2HLREgBKbeeV"
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

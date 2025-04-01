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
    "4Lg8rURTNgs6t1a5rah2EjwMJsUKdo7Ct4hHizvNNESTh7PayVzk29muPR4woVAXuCFGWX1fTVm8qUPFJtFoQuTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sWHAcQrQskWvJBNi85oMTiDhVdvyvP3gSPpiGGMrgmyxWbyhkzQXZkd9RDpHeR3Hdz71LGdXfacDZnt5CrYVZJv",
  "key1": "2vpFKY4UHgMQTaH8qsqUpUKAgS65beg2nrCe4GrDkPPEUr9Xk1gExMrw1q243CxJh3Puh6aT7CAEZFhNi4PxUNtY",
  "key2": "4biNXDdgffngLcRUyPbetzZtw6Ahd3xJMhsrbEaQsxSAEXYF6g9Wx6HMvDgHBfiQCrNMvFYesTxPF3d8i4JrY5AS",
  "key3": "k62gJ46kQfE3aFbe317Xx23b8kwv22RxQV24Zi5cjchmFtUyW858PxjXEeaArhg5XGcQw2rwY1m82dJwptkSnPr",
  "key4": "4PKURotQjahVWNMiBNWgYBToJDxge7tpsmbdgb3wtvXRSaMEhEMxrz5CKCFN44wU6BRNZ8Nte7bszquok5GVnVaB",
  "key5": "5QvEfKXsyrWVXVdTC2AZyPqq9Y3mEbZN47f7qLWgmrcxYy4EUJqT3wbF6kqkDfA8XrY2SHnJD2vk8MwZVbRfcR3T",
  "key6": "4KDDuJS9HwyPWFaSfJFDV6TEtVkdNbMPFjF17VCKZTSkQJDuDASirUxKjZvNyNhcsQ1KVjHWJEigYNhfWP477uPN",
  "key7": "5qfrJK14cNK4yYNDkDq5u8pq3tmAo3U5G8334xqUqMpRhwfbTsAMSSsBdBMPe6j4Kxb8VWzdww3AnwVFeCPGaf5e",
  "key8": "k9GtgSmZhxch1GHB6zYnmWNfwSfqXPjiRFyGkxvMMNiTjF8ScN55A1u7CzfAnumsqiyyWrzbqx7781Bq9fXYEjx",
  "key9": "3YcQkMCc99kgkFhW4p6xtnydRPcVfFrm4DkMGQe4uy69gZDdfEJSWTgXRAmjrDvAW3omSbprtyxgkfQNgc5Vsmi2",
  "key10": "P4YMAvnQSN8vBajqAScUy59myC14FxiSYzx5M9MuZJRVTQUV1NB1xfyzzrJy7acswpjHcc6yquPdVX9eVQp6jDe",
  "key11": "PFegKgXHeCsXLQiDHSZKXsWeXkGyZfMv36u1h3unTdDqx66Bbfknu9CjfHPN2FXNd6XM2YVVsyEAM2ALgrawuYi",
  "key12": "2Nqsyrs4Dj4YbNDeWA7PFTk7JKY3SfVgsUJ4rCo6QC3fUtSTgn6gCbupaxDQVt7e4TB8mvXUCt2JdUbeY1oXbkjt",
  "key13": "3uydzisBEqqzzo6NgC6YBiMx4NYgAYoTbDX7Sh1LYmAEdwg1DwvvbeRHg1usi4EYVX8XprwFezEt3i23Yp3fuXp1",
  "key14": "Dhqfr1GXET82paT3dVZpgfyAPNpVZfMqu9YoSxR7PA2iLA6y4ao2WYJiTSCB43s8CtDg2jJjJFXcgfKWZusq59J",
  "key15": "7EzXooGAWQr2FJ5ZbCaQoGi8wTbDm8fJGwoR27oNSRUL2sbbPxrw5thvUg35wHAtVTQ7EFSmKdmBoT5MMwD37uS",
  "key16": "2P92AFozzSpZzsv8czNkZs7QyaWPNQuLbKu55AtGFzUdd1cSVC24ro6J1rdGMmx94W2JWnr51sXoMCwj6PvoB6yr",
  "key17": "4Yt8hy27GuXo5tcsoJNCYJBY81ztvfc8keouszGBsY2DvrRFTzHT6Rg48gecBiadR3zbWPxsnQQLdvBJ9yTwrgB9",
  "key18": "2p5u7nV13KcxkLQiyTfcVcLyiLH1i3n3cwb6VfqexbF7XwVoLRFggTPU7AqFEXrZJwsEjsnCq8se4NDUcbTwq5tY",
  "key19": "4bmZoivhcAE1jwMLf963J1FVVBmbF1TvLPiEBCYGmibhXBAUmc6xEBmq2Bdf2NLtaUqf7unHWvT6zmiqSMa5mcw",
  "key20": "5pD5fkFbMUVyrbJ7erRgjiSnT2WVHy3RoUzBAtczwHnxcnTRFVNScoL5rhHfkgQVRUxPzB1qLMfgivbR2mQnaVAc",
  "key21": "5jCgmLivaEsNFJr8m2P1E2eubw9XoSKhSEPhqP982MjEiB7VRzQNCDUDQEAXrs5eieTXmX6S1FtdTcXBj6jiLjM9",
  "key22": "4xHQDHNGnHJq3GiXLJe4achnGQdZww7ph7qd1xqyAC8m6ijpptN8PTSLzUSxoT9DfNWCqDfEGH7hyfq51dBdf7TK",
  "key23": "5KWEuZ16WPqsybzYWFm932fHk2AF3vkptsdBZjdcnAbSRLxrqxegGwern4NtENrt9428CZYueym8oKgugG8V31rR",
  "key24": "2LtAHaCQdBZp13zENn9Jvvx9cGzDcQTzY9WpM6UgFpxWfbmPHHxbrwEj5mWQbr7CmL52W2Sep21LfA3Zi1bd3WFs",
  "key25": "LyQRD222AUp1wpceWx5pkfjrSQYyq3h7GFKsQwqwyrCoBR8vz8X1Ms4WYghVvUL34MJc4PN8DdfvmiuAxN3HJSN",
  "key26": "3ifhHWK2wARwD4eTVypNyk5BijbVAfyRgcq4jim8vMrG1ccM6pzaPPCf9fqp2pF81E5k4zMeRJmnuuhPxZNXWQ5V",
  "key27": "2Ez2x44pV2waVffhym1mnxBpTqGsoK155CtSfrnK3nw7XGVUWrKEr1W2aniLbNscZgNyukekr1sLErTpEhcGbmfr",
  "key28": "5PH4BhBs2q3DdhqiYPQmMrkaSDvv5GEhQLRbBqcQfvJMozHmu7azAejCycJRUachXTveRVGGvL6exDtnKkMFffaw",
  "key29": "V2SoxCBiF34s7ebvWwhREoVvi66Z9T8vrZtgrZ61rE78SLveeFP8NbX52igWsPjCk47AGGH5SQ7NxhfpViYcvtC",
  "key30": "661z5MHAv6UpFZiUSCt5gGB3ERhxtDPqDCMpoBDe9AEyR2826KT3TjLojv41XdXtyWQwhnXc3K6dDHZqWH9XCAMx",
  "key31": "5PPYXQXEBiupgYNjJgpmbkvVSDruywpNu6pcRwGo9nKmJTq4JHZjRuhbbTNbmJYhZ5VWUsoF5mqTTXA3qAJYWwMT",
  "key32": "5GtqKGLJEPWoWDHAR9VvVjnHezxpG1ym6JzPFG5K6TdqweGKrrcZW4hirqPzPJ57RpH8zGpi8Ag4LJaj2SLdRpNg",
  "key33": "61mZGJoV6VawVERCpi7BojM8BCnjA8GCkHfZZmQABmKXWxcn38WbXq3jEG6iThpBuhVTLvRaraJLgBgt9FSt1RWB",
  "key34": "2d1iJWmf7KfszThNN9xT7ubHJTEAwfQJA91zX9r92qSrVZ8wKWossKnD3yBbhUvDR87MFnmuyWqP1KcS6oEYCDQE",
  "key35": "4RSooH22KhUD1cztNcLn7fUJ6GGLewH1SStaTRze69ym6DoN4nXLS7CN7XzwrsER5MvHPxMruosvUC6WQtRaSeYb",
  "key36": "4DP4EgcLCPQUaZL8y6VkngFTVwgMdUffxWaFuKMMX4vJBMfcBzh4wXCcZPyzCr1ipkFDWumv65taRrZfXiPXV6Y9",
  "key37": "s9SsjhwcgwXcCt2TQkkFGXJeWcu76pd7qGbNxheaXGAcsLMGcCzhMKpYBNEvDE9h58cjNRtqfUqP7DC7QQLnEzE",
  "key38": "zeHFbupEFZKzfXbd8HqPJLhJ7KhxKJk9G9MoPw1cuifN2dVKf2Na8Ht5wiErGpCs82yrAXKP7HN7eWSunrRCkpP",
  "key39": "4uAnsuA5tGvFSDhMZYMwPhkDFx4bStK7XCBFvruGaDm8VvPZhj4EKUn8tTpMhw15vE2xMmtwwsvTuNnWbDs1vuRi",
  "key40": "3dgzudfoXeKhW9GgR9rpa2APQMgEikQkjmuc36whgvnyxtXea3AUmxfQzNNxezNXYV8ZZGZ2beEmr7XRZ6uyE9Up",
  "key41": "44xpUW1Noct7KtBBz1cVTKBmJNi6pyaxEjPzLvSm8JcfdWkdJfyUuGM7NdBkngXS6H19SHgJW1zaboN7J8afhfru",
  "key42": "3QnFg8xWGAStVeFNDY3w5KeX6AERgKd9otZcJkckTUoD3dFGnoCF9JMQongGfaiD4La8NHR89HZHmM8MfkcXiUWV",
  "key43": "5iB2MPu2FkPybqZu8pKPmdcp1zDPnUS2XkYc4AZkYefHDf4pXqpaZa8BQXom9gPToEJPicHhhd72QH13R9VW6CYb"
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

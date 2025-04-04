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
    "61S3jPAazZDoHBJcznpbQYwCrkVgqpuRq9GWf3utj7KHDiBzwLGNXRNtPn7PnZbbxjSLTa4JhERJL5EjSchnvk9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KiDr19K8g8cJ46wyVEhKJoYHSdQY35FchkkUgS7NVjyPMHHKcoPHXUnPfF4oJqcK4DYt7zLWxVcm2RPv4FiaGeq",
  "key1": "3AJioDCGNtMdDqUsME3EsVaGYSoWM8x8X9U5vn5FHAkdtCQBz4Wu8uv5K6ugkZRizNL4wVoa6jstcUVVqBTrhfLb",
  "key2": "5Mogu2ZAHqU1f7cfFR1n7LRL74SB4w9jJCDH7Leu6hbARNn1HvMR3imRWBMWcJ4qR6hnCizCVpY9N2aJ3vpe9oUv",
  "key3": "5aLKzAJyyfnxndzA8svD8Y94HNQQZuTMGGbbb4dCp5hxv6BxMoBsmiRqWefjPbWrkkZQ6K5VDvYG3ay6LJymTSHf",
  "key4": "5PfB7SQChXR4hrpKunRapDEkE2356ghcy5KJ2tCJTwL9uLEaQ7wduHkLVzrvEkjeHdtdFSUiyVcdCmQKTzNgMhDS",
  "key5": "2cpj2xXfXCCvhvtvNob56ooKeKAoU7KTjF3BU74Xcf35fJS3U8QTNF6vBBeiBBiHzN1QT8jSUpvZNSZ2RRgzHg7t",
  "key6": "5KWmJ84Zu9bafjG2PoCr6T2yg4y6GGcHbnL7PYKzTQpRjgiFt6QzdFGFeRqsqUYBEd3dzHcbjE8XD2DZcuuYmqvb",
  "key7": "3m1zjgcLuDgxpJ6ENJhbWzjZjwyYpQkHY6koepUZLx47wDgueirznwyxhwgspcPWefKWKqKaGcMW65Koq7ToQBPy",
  "key8": "65UktXeJZmwn9RfXfsaveCwpEQxExD8cncFADfHuHvJ3NABMLiduLgKVJJkKFZR17BhH3jwTRB1KbHKATfQMSvw4",
  "key9": "5fwsbQMJLEJq4pNBScMcjBqNGVXv8czECBbfezoQe8K877Dcr3jYVfATkcWAVxmcQ39bBPtvEdMg3dQSZPo8knXd",
  "key10": "Xtx3D5H2tvvTp4Gf1XN79tX5TBxDaSJTwo82HXGVfG9KgULU24Qd6mpciwTo588R4H71vTo4gAwqeHehHrt4vGY",
  "key11": "2jRUbZ9FoNRYKpeXhzDJyArsP1WzsfiG3WNrVPszgSDU6keGV7HAsKMYc9kF6rJPyVDVDgMLM4SnwFbokPBFwczK",
  "key12": "5ACan8LtXTqsQuPQoNfyYtUy5JQhf7ekvkGTXh2aVZndVMGTp5Q3YdaVGzZJSbNVw9nMEKySdVjmLuHwyxx2hp81",
  "key13": "3PTyv6phsrr7jQVKq9jaPReCU1EkuNJ8ebVXUAoQV7BQFvuBsCQJ2Mocz1CCv3wEtbdkcxqnEBtkBD5D4RSQBK1y",
  "key14": "59GU9kraD9nefgeMCo4nr1kGKUPQ9QVcPZ9UumHEpvKiRBzdnvnDqZR8ejhHhCy76r1TKbtYasmExi93EgPzLiFB",
  "key15": "2a2BwawSRMKXbn4Adkf1cPmADn5jjKhjMGQRQRPGuUZWmraBxDVwpX9dPaAyMj5zMiTTbG4mkn98sf5oTyhUmMrp",
  "key16": "57kzVgA6qQMGUe7F5RRoLKsTJffqKRaZtD6DJ27Vawz4dmn1HSnL2pwWTkzKAschff5nM1U58XS3hefbVRKNrM9x",
  "key17": "5fji8ecxbsSCim8HSotGTU7CbUu42vNTK13JeihzY59HUJC464yMFitsokQi8Bw9mzcei9PGZoB81BsmqGF8Jphx",
  "key18": "489vUsvTZEiGcjDKEHtbt9435mbG3vZXoVogRNpfvHKV1XdNEDJEiokrTL1AeZmKgLKEqqLzFCCasgjSzhQQg42b",
  "key19": "241hQw3vjw1E7aUNwzTMiiatE642TpSJ43basJQ479EdzBi5HXaeGBN2E4xbfeDSm7bLukimFyvprGksiuHgdpDv",
  "key20": "5pY7SWPZLF5sbm83cyUu3RWDCRAJVziVSMSG5zKBL12Z2G2faQZCepUtz8WzDbShqBCo5kDsXm1BwAgbRPHFzXu4",
  "key21": "2xBWki7f5xk8B2MWkJSirzvsty59jaFHTEZGTad5RKpbrNWiYgfFez9vSfwcVmCD9faQfXxrPjGgZQS2VovEYhrM",
  "key22": "3XwLn8aQn93SonjBreaCZjAN2mRdtGumrzbkcffCxvh9ZpBQ9vEdNk7Pq84kzAR4baaL3ALsHKvhqjLuGt2MeY5q",
  "key23": "5aRNg4yFQvE1X5fkV9HzMwjX1Wn5fSHNPw7ripHyjVpLnu1qXpWNiaihPfh1cggGzsEXo5AYBRHM14jeuiPs6ynU",
  "key24": "uHKjTmvK1WpGfjEtCQHmNkDkLHAaAsKraGqzLTJgi7EZF8L5GKbpeqZ5CLn3fnHT3joZa7AxGQipGmfoUkJEZnq",
  "key25": "mP5cuYKeJwLhfCoMGe837gpkLi5ZH8JumTFrwsU1VhkCdC6oPd7tfuNxyWhyyRgHi89QMRBKqdL29E2MJzpazix",
  "key26": "mv1XEWjT19B3EDMnyEJ2CnqVr5bWQCTiqaDauFW8Ja7c3psN1thGmkuVztQtdwDq1CbYJAeV3Q7tfMZMwDUpufa",
  "key27": "5LjyN557B6YKsgvUfjwPxFn1H8JkoT4QXk9EY37cr9KEFR6zz71eJUPLX5gANtvtoHojp2ydYNM8p8ZLB73JgU1J",
  "key28": "5FrtPBHziucpKF7MFvAUxs3xDqXt5oA18EfyMcn9ckoo5hY9BMmu2xXmdkJZCqdSuXxfHTD4Jp6CaM9ru2jr3iS7",
  "key29": "616RsnBRqQdT91fTvfbhLjBpdGeV34psSSkjnNb9t3UmSE1z44G8QzyHu4fx9wWceSyLk5hZzwr48D4mqWBGZAaY",
  "key30": "4VoXn5D4pvnTZQ66y6KX6AwvBz5cXgwBLWCMWmkhDYN4KnBFtmRRRW1HqhhRQUSvCr6rVoB6KFpj3pPoHF9iLssy",
  "key31": "2eBfR1CUAUJ9ja2Ld64quXmURe9K1pK7pp9e4puxK7rKhaWoEn93hXnWmvpMP9FB56PB9nvBBiQhkRe19Pjk4vrV",
  "key32": "5kRrARZESNmiWXcv5FVHk3fC5Q9cCsJeu9gy5wH9bo6TaJCMKP5w6kqGGpiWyFtvUHSrzqLDhNoruDhm5UQXqe3X",
  "key33": "5wkMkmk864rSofW87iPJZNEyjALhYbk6DC2ZDbqGYefXPFRijgpNc117eMdu9QzgTeRDoRapYLLKaafZ6Su3ZWki",
  "key34": "2xQvKKqK9LLsF8wXtPtteiAPgNfwy7Xdn75Dd4CYeJf3do2cM3p5QHifvDjp9QH8t4vK1znhWM1puGQoXGfhh7zi",
  "key35": "jsuztASxsXvQvy2Fy55EqUKm2kTGM1584cAMJa78Jsq6taF7LMoTJsoaE3gqv9ZcTCB1iz9cMGjspRVyXy8CQ5V",
  "key36": "5zgXhz3wVEVTYY9SEr2Xux9qEWbKAJhNCUovKNMQFB1Hg7RB4GVTp5jJPyjkARsJvZHnaZtV5x2f6rCGDeCWsai",
  "key37": "4EGq35hoMh5ZrPvCxh1YZMXkFmVk7TAq19AdLi5u2QMwabPRdZ5QJ8R4X28s1qunRgRoiCXSogMj1ZbWQD2RP5Bq",
  "key38": "4uEfR85XyLv2iKhGrGQJNW7tutg1tZDKzAfSSZzcE2nYUrmKVw83hFkWgYh6NvPbsJKvJSizTER6FFmWJwVdi5u2",
  "key39": "5bsbDUQNQipwDe4Lg97LAuhaXETitu82vD9hisBfLXq48vE3UChBK7qcfmjBSrbRYxcsXkThDoDTygn3KvsDCkdq",
  "key40": "3X4krKmKxZpmUcwZTTmH5N5siCR2hgLwgEhiHt6v7CXrwgPRQmBQWeNjRk8j9SRocwhvNhfantmZuDUrCmnSE2xU",
  "key41": "56ntrfb6CiAsxFj9JqwzAUzNd5jMjRRpwcdrzgVt6Q96nTgBsEPqzCQaPhb8NkxAeSDAKCajrSUfam8mSaWRBgEq",
  "key42": "299iYQFn7nh27QmWUjCHYPwkPfeyqcGh1rHsCmNssSS5PPpqci3vnZHuVtbjZAwPxa6JRF8Dp4si4AzthfxUgXVr",
  "key43": "2YD1N31Y8mR91XYReP5kimzmvt5agMJmWCZegWpEjJL69p1BDyBH7q1U3D61z3c6LAKo3VS8ndRF2vM8go5v1deG",
  "key44": "65NcNSvwP6cKWQxt1dgP2b523hRJcE814bHsi5X3ssxi3D4Ychc26DdH88hvBZU6CfzGVDJrcep4H9KGzQnVCF2a",
  "key45": "39U4kDnd1jTm6BHxVpghirdkHwWPNBkLDTtL83RN6EHY1bcgLJHBZZqopG2r8n9ESGWUyJoDEoLE79MojZGaSVtX",
  "key46": "54Nm7DAobVYti9E95eMhNdZniAFdpysS9SqmSC76D3fLoJmhM6dwSbtpNKGxwXHbBLV29A7VxFRxXVAHKtMLyEoN",
  "key47": "3c7UC2BTKjZLSAA2w79CKzgG8Y3fuTDSu3dyEuFHadTgKF2qFTRKwjtJvEpiANpjdevpFbiHeobCvka6aTLC9k2U",
  "key48": "2pFXqVqDWhFLoZyPQsTB92yRtArSaUZMqyGx5EHwUhskr9igzTHZ9qVGw5eNMaFBf8Q16JQHp7WYWyxSHAt7aybx"
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

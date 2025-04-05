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
    "4nkT58T11t5kSiN6Pizv8rNfiKxoUyFToRZEXWU9ZMaxwxgaGdcVxvrzdygDMRJhrDEzZEQeyTr8zWt6arrHryaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yX66H5TJJKcjmLEz9XZssKRY5BhmFgGwzataQ3nUg9HrtXBp1q1umzzraafjAnw3KUXqY7nFnv1X46vP6prZftG",
  "key1": "5DKEiVByVJxqHCUXpzBcSgREp8nGvvKECimknvTr7qqLQBJXBRP65eXhFQiVxX3b94TdXVqX4HXMgcwTAvirfePc",
  "key2": "4KxJVsCmzBQvcE3UkZePC2AaQggWWeKSiQNz1GXdSpr2aMaCUKiK6Ko8MwAdasLJHgs7V1bSppiLmswr2BwW9p1W",
  "key3": "paFAMz2iuxyp5vdRm1ikynQwYEz5BcNZQACEfuiK24F7MuQx47K5dWnxTZPKwJp81YCrjNypNjNM2fPNCBhU7vM",
  "key4": "3rrVNeChJcMh3k7VSHmbqb8h7axm5TYbaa7m1DAY7JmUhfvTt4t9qDpaCEszS64fcwkZtLLi7bFqJuu3uNnnXDMN",
  "key5": "41FnCq1zHbSauCUgyivXgc99Pypuw78kXE9WNoKMc4f92iQa8zhUW6RnTBkhhtEy4YcpgAmTmZY6qegYM7hS1Wau",
  "key6": "2ft4M6wzG5SVitRtwqWTG3QqywgMpzMghaX2EMeCXnE9VUUCgwiKv2ikUjUub7J2wLbf67RvzA1ZD87xw9hYbWCF",
  "key7": "628eaYnYxzRmMoQEKkPsHo7NCCvUJifjLq9apLoNRX4A6JwPySZwkRdpaHceHrFdqieNgSGAM2oFTfi9A49iKfaU",
  "key8": "3NUDhh7KVzXznSdJVo8iEsYVEgrsJZT423jPM1N1d4B2v8iBLUSuEGjyYjZPbn9kQzSwtEYonweit6QMGGhMSpWj",
  "key9": "2bhuygH173XXzcy2u8eFrqKRnvrdMXKBjx1yxffYKN5qyFdkTvkGB6P62Upxa7HHwUzLhgFdAYEKNEj8j9JaFWBz",
  "key10": "3DyoPKTCT3mTnaX6WAzqFFvp3hzPeX3CCUCCS49xGCiiPP8bBZQf27qDFM68MYc9rDJhDkb1Vx8q2mNvsx51yCMM",
  "key11": "36yTobm2kPdeuohqEgnapsP4wXGYFbSnnqXXCNjxcck5E9sxGGydXdTsq2Wn8kP5yZEDAocK99rzJdy7T5ivJ5PA",
  "key12": "62ujY897fkTSYEvqNW2TiA2LkDAhGSfC5WTJQutVDMusavMbweUKbhB83Hbv8WY2TsLxcHDVeoKdPzpLcHJMQth3",
  "key13": "5DTphoP1dYmYPbrSt3uWj4LE1QnifFGuNvcZjanaCtHPievo5rd5Jc1Tgn26kPdMfocpUXhUB9bXULpjRBQcZgyr",
  "key14": "5BSbgqYykVz8AB6HQZ7fyGuKeRusM61JaCvddQcyhYb6a9DHJAYj9JSZKku3bQpu99DHgkZ6vHormhWDrHCiQTh5",
  "key15": "3kYr3ouAunFbofaNoBkwaKuz2PHKor8HohiotwCG9gHxrpY89JxsiMc2oEiA3TG8JrLBS5axKFB3UyJEFpbBkBUi",
  "key16": "ToV7B6NCsDssuMYZUhsPkt1uFqLPpnapiwXE5wFE6653fDuvcXqrZBefv644DuSSUEaAwMQx4SK31L8ieRTUygm",
  "key17": "4ZEK5CiaD33QZkJ3sV79GTQeBAPL4Tg9y9QhKavYxgjcBaCMUd4Qt74qSq7Fvvgw8nvAEWHPSAnYKzK9gWu4srXe",
  "key18": "xQJngnSpJB5xUN7wPvC53VDtqM5vKTX4vosSfoEQLG9rWxBAw6EKSD1hF664bQobpsSDuprFPm2LnoxF8te7UAc",
  "key19": "4yfSeCydvFTqchFSDdmuPFMZaQqgidTJXMN7sawf1yJF4fa9cc95mnhuy8hotbbxkWei2ReexnmGBosoDYaMM3B6",
  "key20": "4MPDTcRKqSGR1ZD9VQar8j6Ce2aeUQteaXSRdLC84rzxJgt4VNumZNTABfirTo4GRNUVDxQoP6EKHeqCA8sq7LmM",
  "key21": "YEArxam7HZTk7eaUHKFufkm6e8UxJoT4jonZrPGcsfqND5z76GQatUcmzVSf3j6pRPTz4xCMRxwQA9vd1Fc9161",
  "key22": "4qVhL5jhBXUEkQZqesy7EmGPqsbjKytbNdYhSHRoHQx12PXwT9JP6CeTVfS6eRMaq9M46Hku9eQDRi9J8xjNFAqT",
  "key23": "G8HmfZFnSy3h2jLW5TxjLaWN871poGPRB6PGF8UMpWM2hDwUxL9ACfYgfUQSNkEcjV57e61k44LzrJXGxX4MbBC",
  "key24": "A5rVB24n5xPf4xkC1a7cuXD9Z9CTVYbsSKhmGPci6Zg4AZBVYiuNo5LKrikdT2Sg7fkP3az5TTLhZXrbgS81gsc",
  "key25": "5nZWTGunyrYeQdfaia4J1fxd5eHXA76kRunGEHD3Ky9bjEBjcNean1Ue9Bq5zCd3ux5rUtdWgN8oJ6mZ1WHgs9vH",
  "key26": "7qVo7uETu8LNgePJKmgqSmSr1LGbwNMTqN4AkL8kZaki7CcbyCHSWuNo6WCk4hxS7KBukFhYqQ72rGXZ8qBrMQ8",
  "key27": "25cvC3TmDubJq2zdgbX1RoBFNNcBckTA9A9ARAZ7LxFKNPonrfL46SXi9aZHsYqPxecrvbkmHK4pX5iGqTUSKLac",
  "key28": "2j6cwB93Z5dqtL98Migv65FigL9xUmttuUn6nEttmbvfz4BSQXr9AZf3yqT2Lsh9hAhQMje2tf4XjBs3XBtSFGP3",
  "key29": "3BPu3KT8V8EMDRAhAaih6BJFwCFvWoH6SR5SuKwMQtJcm4hfKBUKDbAVJbue8BHtUA4szWdn4GGwtZqpVNQQLz5f",
  "key30": "5zqh4j22XQY2sipent7AsTcMfUPh53u5Lc4dLsWRsGJNnSjjrLVaCzGZYRDFARNopcNECDk2zRux9Pfrn9jVgqhs",
  "key31": "3tFBUWy56irCdbkbyDNskApcEHvMR8QRuong8GXzSPuNPS14Lkfbk2LX3zC4auQjn1Bn4FcXajYXLVrs8rzgsHr5",
  "key32": "5rKyTAPgc3FiLg2uCdmBTDS3VwW4KBQsAScyxr18WtjPKoHpDnWG4rwTFh5duKMFP8Z2PQpCkbiRCYVKGevh9Fou",
  "key33": "35oYk7NJEzqJTU9Hi9tdjyzbs8d6Ui6qhX2VCTCg16ugvfQAq7pJg4MqjvT15uhETUBa9KmNgFzbb5M1HvD78Quc",
  "key34": "4rPKgpGfeJBoB8jBeDAYPEgPdA5Hb38otaM7BexSjPNaVg26RCxkhz7BHnxk8oAsuvuVruKUa59En9rEuCSdnKov",
  "key35": "2t6qSiQvCYjyHHu7bJQ3CD2DB8huVBcrChtMCpRNp1Jf832QFMUViBzU8U2GQnNCm28waghkbZrUZnAdCTsaQdey",
  "key36": "3gwqNVpJKaRKRd3k1hLdBLYEohZwKRrTefc1vkjEQqq7LjUVx3PNNRkZ8jpm9RMjQRsYdwbWohsCSmu69MurPSC6",
  "key37": "4h2huv2uSVgdmbpPbP8KkBVsJiKupoax4pDAsBYcCApeVusDSq5ivBpJJ916RYxGUAEmHnsTGFuZocj3h2UfQvLX",
  "key38": "sqB6G5pXuEWEpZ2ZMeyGAmLoHQiwwAxWgydQAvo9HfuL8pLSVF2xYzKLQjmVaJWUNZp3LQS1JKnN2u52cdRBTwd",
  "key39": "4FHgVSqAh7ZNosmtT27KXqTC1nnDTMUYAPhDnfmTS2XcnAF27B49CQfAmXogzVn3sWQXaQJZNtXkNU6vvpR2aBDo",
  "key40": "4EGHPWtHqkrciBXuynbqQ22rEbLEYbSCFifubpxLEPfk7jG45wZFn6MiFGXNi3XsecuAie4Ywc3a82QDEDBySkxg",
  "key41": "3xFzLk9i3H7ZKuQ7fpKRDNMabe6hFB4K4aV5VzPo1PKeNzxYHudqxjbmD2CRzzxfZhuHmuPeyb3F9zNx1R1bN5NM",
  "key42": "4kxruNBYaHXUb6rTB48ZrNmvu5jzkxAxY4ss9ueQ8r2c63jk3RUM1LqeamYqz5WNccCEau3Wz6hT3Yb2EZZbqEQf",
  "key43": "4FFoqqRw9PDNbU2oAzRc9k6wtR4G8tbCCgeMEJnPJGmNyuYr1U1X424QoReVZSES6f9Jas39XTwyZfWGuhjXrWkP",
  "key44": "5YAB3BFU7ioN2EFcBuNRaxhnWmPUd1awAFDFosMbPPfn8GCHnjtQUAEiMCW7UKiLinBJztigyKi7BknCLHYtxfiY",
  "key45": "3Nxp6exNeXqizzkXo8dEDHVH8Kj63a4t36LahC3MqRe2dfCNWfiCGiYDdikmu1sZ9Wb21tFFcMQgdYh3D1vPaC9D"
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

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
    "4zamouSF5hAZcRbnoPEi58vKkafL43oLD8gLWXB4cdVhtXsbTKu7NHP2UYv2C2qLvLcMFcMiH6kHpzhe54KJYBEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Qwafe5DvAWL22JRaT6xZbxAHNYHg8RJinL4azsvBJ7qNdKtW9DpJf7Djk29MoCyjWLTZiTTmrJeRszvUvgNP8Z",
  "key1": "3Axk7pw3TeJR6xmW47xUZdS9xeMuifGnmd8ttfKvGDpV3NMZ1jJGuNAAxh767sNxgozHSfXBsEHRQoHhiGTaNDZf",
  "key2": "JodmVrGaUGEHiPx43ahTfJr1BT5xcJ74PPnXSvndRHkKn2WH2Csevk4kKhppLtScakPeEEcZqRNK4CG7zgSJber",
  "key3": "q7JBwu1sdRtkoVBGaRwYivoawyisnjTAArrybQmUYRPqtT79zFhf1cRYvp68WEjahJQSX3DBpMyqzWTRb2cNgDK",
  "key4": "84QQ1y9EGQP7VRDYgHXh2HPZrrxdBckJk7XVNfTWNbhTtQp9Yh9Ag2G7LRS4kkCmf9nCJrfTrK9DEYjVDgsocHg",
  "key5": "5RRaoWv7zfsw2jUiPhJLhHJ2vWXtngsapVdgiiVy7dMdYufYkEZjiubCiDXSaScq9VTWxSBiffZrb8E45QsTYN7R",
  "key6": "57638GggntKsNznTsyg4zpgfXVM4Z7koEpP9K6c618z45YHdh1rUD2tBAxEktYskZRFJps9XQY1THLpHF5F9y4gc",
  "key7": "4jHbB94RJQ7Yevoa7NxJTRw42SDT6dEA8cWDmE4bQ7SciZdakft858HtNjDNTcGe2dyH3nyaePMrDuLLNNXX3K4n",
  "key8": "3HzvfZz7XUvxs6BPXb7cEWcX2iwQeSDYXhKCsTCzMMhkaavSdXosDoyBg95uREZDfPGmom55wAPEdKXcA81ij5Wz",
  "key9": "2Neo851PCK78wZxhZNTFxrZBJaA3pBeWwJDiX3dc5sUJ9XNKYd9KzQqbgBWWds7CGjRAT6BwuyTDudfJDU73kcRZ",
  "key10": "44kHpNVr2NPm3rH5cS3TMsEGtW62B6YA24mBB7b4Lfi6KaNTSe1EdHeTFMHDqfCmpbSwwaLd2Eo4yFs4hxg8r94Z",
  "key11": "Vbzx7zo3mWKL2s5i1sSKQiSbA7D94SHuaMDzr2jnDQkbe6fYGiuThkt8tSuPjT1oNTBo8Xqb2g6LVVDAK48T1cm",
  "key12": "3M1Ckxj34Z2VUfDfqL7LnEeax1PuEvhtcKaR9nNH69M3Kbn3CdhfjhmKrVne4CuXUCByqk8Mfkd9XiCanpGNAYS",
  "key13": "22ePrekzGV73R1qt1Zx8fUKJq58aRuq7azwY1CBtTifLkgQnnEbvvRCxDjDpN8KFpoCzaLVqEuPf15CqQHMKhBGD",
  "key14": "TL4bVTVjSLWhaRrBPpi9wLp6asducUCYUJwhEE8voDn5fpzdSYQxyMUf2Rj5fMKQ52nWJUNEYyFRVv1JSeUisXh",
  "key15": "5YnqTPv6vXzvASpNydnejwLMUYYA5VotjvfW6Dfr61rdxAezFDLSdmKj7zKc6UKz3QPktCsyWDuNQR1iBsdpQZJy",
  "key16": "4fcuJASBVB3mrndh8EY5A7LH8E8agsj2NqMiwo289JrvX6iVxV8AuEJff4Rkuc2qmjnACYw3fBG5kWJg3vjRfMxH",
  "key17": "5CnRAyqRpJiSnkFmKtbKHWv5bU6Tv5oXn5juGmHGvpCGqiUS9TMpKYCefxSw75bwD6eYDKaTePfvGtEF8UNfR9tg",
  "key18": "fDhCe2DEFRjoPznUwPDxKdKHCyMwJPXJpMo1JLKSw2aexsAhxyFkyYRkLxEwC65fd7do7NmMRdgvd4rRUZzoX6i",
  "key19": "2RGzwVq5e5pUY15uZ3UoTtdsEfq28DKEyXWnCiJpcpXpCT7hGBLBdKbSVcdVWHzfpzSndvyXU7gWoWVFqDXpXt3T",
  "key20": "2AEpCXets43nPr9UJxuSy27xrk6M5z5NfNrdvwqtakxVBJRqAfRthwDT36FzpEsMaS6QofKJfxPvEnfrBUWT5zqt",
  "key21": "5QGfDbZTwuMh3Vo4yE2fsrtyRjb6ScZ5DCQ77M5Juc3ZXDhy1zDa6ydXQH9Xut2eknmiy7NUemaaimokyKTivqmY",
  "key22": "3xZXfANLMU3n8Z8EDr4zV2ZqYuKBytPpq3zTEJ4WnDFDVHL5W848Lv2ctLxHRvqUsmyhny4Vt8ju1cXR7uqQ9toT",
  "key23": "aoXJs5er2dC4VNj2qgLp3RGBoG99Tkc6f5VPvkahV4TrDBKuzYx7tc8q7HgPPcKj4MR33qpg7DGwcF4vzQL4n26",
  "key24": "5KwHKtXyVcxonPvviN598DPyiw5n216g77FwigVAUsUKpFFJHTbfdFCeh7K461LaU2sJ4y3Ghxk9qACxHDfECJzC",
  "key25": "2H3RQXEbEbozYKeaz1G2iCHUc2rymGXXL2Hvyb5WvX23VpVpyDh2jCH7sWyWVBUxzdHTKy5WUrtFPWLypbNL47YJ",
  "key26": "4e1L4LJ8pCoyaUa2Ws8oo7ry1aVV9DgjBYAyLZNDaCKtK9mjVGYghW8tD8RFDiuDDWqiHrK9xE3wjhHPbBczxEre",
  "key27": "PfXwA3zJDmqeuozSASGRouApSWDZKmRw9uB1yAeVM7yCFVSAqF17AZiuUtjnNu2RnizRyasoKarH1daxrUBD254",
  "key28": "yiQkfQURWSnvUJybTPpGcLJHVnqysi3eoaJ4vbVaqZK31ihh8AspaZSjGDv26UpKkHjpWGdrxQGN8khgjuvYs1Z",
  "key29": "4HhQocd42qKyWWUJnmy8bStV6DzczNy6AC49vJVGMu6eNRSchx6HYD84knF4cGqhEhE9bgrh7GfRu29WcZSv8J7Z",
  "key30": "2ahnmKpttu3iHw7AzjvRcoBYaLUkddYQsktHPwkEENPf8S6NDHGnWke7ShVvJ5cDeue5pFNTdz8qkkDsD1vTt3kG",
  "key31": "2EZhZTYaofK5RirGF8iFT5U2u6PrCzxrjHwS9c1HXFc9hVF1LKXPuTe7jRduMFs21qBEivZfXn7hurDmA2kVMkoh",
  "key32": "4F98JDyeVP8p9bXBP24WwPnkSVEdELL9SbtWby71k4gxpTepyJvowP2HnYE4hkXeJ7gzM1vT1BSBNiSsS3MviE7R",
  "key33": "i6FWkumKiypi692cF58YnZEuuVmpfE7KeMhCt1LeAjLLBt92Xmy6hoVpujMd8P7qdA9P3qjbXd6e5BAtpyTxVLL",
  "key34": "eH859rahsiq2BjtFnhAZpLruh7JBQqT3D1DazZPdeWXMHW1CmX3mpgngXXWnTVkmfSZv6qwmyCBHpzzBxE7hsv6",
  "key35": "52NJJpt9kkib2ecFdFVM8mnTK6VqCUdrbmXtUFrHsbftkRz5ZiLPCiYYmmitGYMVwRNZdsSZ2X54PoNWHGpx31AD",
  "key36": "5W8toFJM1Tau87ZPC44CMHLKYAbso6ggDw7pdru4eAH8v7auyKyvhTNGefnDhrVXsBgXT5VuuKVr4HH3DZVazgMA",
  "key37": "2G8a78HEsrR3dCfMg1uMgfraGpHvNK6EY1BxbDL7HFmDxNJXYguizCQY3zRykmGDDD2tJHoAWQW3foyaNzKcwGK3",
  "key38": "28KCYkSHcR2hHy1WDs1TMpu127X7TbTvRAeXPqf5XeZdoXAMU8A1mEcCkFXnVyjLVvKUhzT1xQvEGniw2nVzJJUJ",
  "key39": "2VU3KeWYEyf2ABxW3GYxVBp4u7jLLzS9bzGaTcdsa1jxaMgSofp1wrc9mfAA87ZeGaiBrrR44r1Wcbe2ZcDcQw7B",
  "key40": "5hxtcBi1eNJEJCL31xxuxYdSGNrSbaTY4YikDWJEkWPaErmgH3WqpuzjBmc7QoSAWh8HhD1CeheA6LPkgnMMK4Q7",
  "key41": "25H6jiJFM1MdS6B5pG3PqUhM8HaJisoB2rVPPzpGRvqKWVUqmUiNj2LYKizxTVAfUkZrMr2ABFm15L4y2EDe1vdH",
  "key42": "3gvjXG2kwS2rKcrdaMman7KDsshhEu9v6RKGpFpzTc3i3xRmwTGjHhb24S8Tr99TwCr4Zd7AvriQ5kZyse1CRZh1",
  "key43": "2goyNkGr2HAZG8yzoy6zqZytRAT5GHQEnPxbcoHw4anPHJdhU2R6AJ4XPMMfmxVd9hqYwoJbzD9nkGrWW4NMxc5E",
  "key44": "4h8yApHiAtwwCjKn9BH7b2xjhDEEw8CeJDvwfoJ237VzQoEp2zs77eYkBxy4ScpoasPrVvUYtBxmeWR4WRgrx37c",
  "key45": "59YQLy5gTe85r53qgXGqRfMQNTgqvwRcvSx5oR3UMkb14nYcDhjqCkZd4iEZhHgDLv3Fa6hUxvS8ypZcNhyRMWA9"
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

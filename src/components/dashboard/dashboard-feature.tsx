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
    "3bEritvNiaqaFAqQj1GFcwG6Y1tmcXwZKzdB3gzghUKjYDdnk1P8gbhQYMDerqi5uRNrL5j5hC3zCR8RSiiNU37V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wEPJrvgQJu1VnkAv9D43rFBeKCieVaT37E4NXXim68izQFywjaKA3F1Rksvee72p7uGGHXNJv3FaG9JLEoxqMw7",
  "key1": "2uV6h3gYGXhjQ3zoAELpRuay9dAt2NrqmFa2s2vcuD5Uyape4qsUtfhetFa1ysGqBKdbN8HuqdXwCEbogfXbcegR",
  "key2": "2N4sVrQauseLCTQ6zawX1FFPnrsmbsVcZaCwwGibZ3ioc2WkREbGq5Kx1LJAyAfdofWw5Fj1qqxzmxbbMBJ7WTmL",
  "key3": "3g6x8HVQ3z8zvwoQgNLpmeLgC26WVnf7HLLjk7ycsq9pdr52cFh1vHfgKY3ENPNzPm2LdWQyAe7Cs1gZN3qKp4VS",
  "key4": "2dXYjEKLktE9fWUjQ8BJGN3ZS7dZPdx934Pk8pmL9UZZrBA5SCiZR38NfLhmQfn212PGXiqKkA276uev79gZoCa2",
  "key5": "fPcvFLR64TGo6XWmkCCMbxNiu4KAD1DTFQgFqLEbNBKLkN5GkW9rKtQ7HptZCGaK5FXZpfkH5BPiRik4D6mR3Lj",
  "key6": "5TGLKqphx7BbPPMTa3DhLuTVcwrxGkAiLwY6a8p1aNY4yth6Hn5koEfzZgRStYW6KdXtqn6UC9pezTZLye7Suako",
  "key7": "4oN7TEVR4w5pmqXGPTcuGR1p8aWPnr1UkguSuzARXoYdb8Ker5HDUdcFj2qfkmpDJoideJfuwf6DrJ6zDZ6eME2D",
  "key8": "2267Q1cT17cRvrXFnpFEYaq91U5rop3LQCWgup4RzZiEjry7WUYCFXj37AvcBUaJEQwuAKF8RjZHwuUHFMtrWPq3",
  "key9": "HvdA1ysScn9Q6VicCfyPo6JoEi4hPXLeggo1JrR7tn7t1gYF4mV2tcNaX1DCzVaWxRCb6FfuzJCB6xjcvpK8FCG",
  "key10": "2QQpqCe9cMXbYgeabsTC2AqJJwii3r87kL2zZJm4L89g2SV6HJeXL6jvH1cngU6PPYsZh79txLomMj48JmQmg4SY",
  "key11": "jLzRxHQJQgqByWaETv83rVvKne4UXfLvGFbMvwu38hP1xDMQNkno7KmUz5E6Gg3y7sman7czRbmsWfXmNMpG92t",
  "key12": "2sZiHo2xNgUH72ufiGaaxyWezv5YNvwJ8ApGrXULpx7iif89R12rGSvyQnhH1Hj2WvVCrqSbczycv7pztxD5asTn",
  "key13": "3VUMxkS2Fy3uk24wb5DSKN5oA4tFRgdqwyidFJ6q9drZuNgfvtYgtrv4K5Hm8FKe4ucidkQiDncT8Aiz9p1osrBB",
  "key14": "3u5JfiaxVbe9vFUb9NCdB7sKQ2QAyvev1u1HF6FeHJ1FdR6kppG9sFtjxQZwskh8EC7H4fXHvaLNkQQdxNQe3uza",
  "key15": "3iUjnBhmXciSjR7ctcwvudCxUNNtVpxNETEzdGVwkvhUDphDsa9X5jKygeEpEgQnrPDnUVpjyZqfBdqZztGTUB1S",
  "key16": "51tdFQRnHvyY6V9f4tvChfVcxTJRMChw2CrDz3DbnYntFpUVne9tmdbZAVuMQdo2vWeZtXM7ae1q6cGuX1ftHuAw",
  "key17": "5hSNY1LHuifv3dssWhUBsAGqrwpu8J14VtnXMp6mL3BVhzu2DwPdbaF3vpemFuNPoXcsK2o3deeVbecy9zMh8Guj",
  "key18": "31Bkyj7D1TenGSt7ezjP7ZgPhfHXggnKc9aGBefbxTaJmKqriUrZbqSEhKwCCLFZVHuDEJLNxeiFhSjA2fEitTE9",
  "key19": "2DruNC25L6BfTQeGiFwjjzesxLuagqDvMuNjmFG77PUjRLFLyxwWoYfjtKDAkjLGYgX7EDFQ8gD2SqGRPSnetsok",
  "key20": "h5KkJwjQBtg9Rf5MaAvSdU3xkY8wzqrvD7669BYxoPQbYyNp1bhu9Bw6RGRqszMVEoFC9TRtCy2VmfUViJqFX5g",
  "key21": "KJDKcT7bNLfdB4unbJezjpZra7yLwfkpJMUtkpCiKCFMpbsU8rJ7nT2oLpgmq5jF1xhhSQ8nkBxu2yziTvfv22W",
  "key22": "5ajvg3rY6BdQsrvf7esyKKjZt4bR9YepWLWbbktHaosXdAPLS9UwMUCkrZ1eNbZQW3cTW3xSSPRfTPRChffM6irG",
  "key23": "4FEgtGjUTxBxPGJQ44zzHLa2kxXqZXhKugePGGTHZ3gY941AKMdqfmRK8EwLucdBmpBRzWpVCQGFddCSCWYLi41K",
  "key24": "hcWBm7WLByHSJacEwv86jxeDB1zDx8tzgSNWmww8MCGfoUb6S2WFe43dLhQXuXrGsE1qP1mDu6m7UZ9VrWkJ2Zv",
  "key25": "2DHKtSQqMLZKrwtteEgWi3g7CQhcbq8HhrCw88SNJivTcDPGrVEe2erM4Ffn9JG2NjmxHqhGHR9E2dV79fgr147",
  "key26": "2cCooD6Y8H61DeK9QXgiZvwjva5Rwzu2zYDqGaEyNm92GaJDyYAGCUiqLHYUtzTiYoa5JadbQBCLhsPrFtKtP92G",
  "key27": "3Giz3tfURcLvRtsiC5Q5ExqNngLouXGhRdbXq1YoRuWomixpNJkcVrJWC2KaUqipdqVagxdpVXssbTpeadBYbkWn",
  "key28": "4htqJ7UTNMZCpFqd3Z2PRKX4JwUYgH2f7XCJ9ydxGw1uCbFu52JTd5nLSMJFuo212YCfN4sQ9PW3Rp7nRFKP4knU",
  "key29": "2BHKXnYNZoR8aCipZKKvWQF28iG8wFThk1vzRfMzWh9dAYjFvfjDvVJe12DL7fyCwhBXxbjfZ1LS68QPfoTLYuRo",
  "key30": "4jwG7MrY8YyMnD5WNDAh53tALw34Kb1Lzdvqo2BPc33YopZy8MsdcbqrV52yLoN1nSg3ZNeNnkxDR28JA1thrSct",
  "key31": "3KJSYHjwxA4RrpJGMBxdUHWKedJeWFPV2Qd8jG2cZpJL8jKKee88cKPVhUkEPBpEG99yBMCvw3yPcRZ3pWDmiS4o",
  "key32": "5KAU4H3VxbHLWa3ZDiGcGwPQUSx7hrLWhmwNk2ubLMweq87AUbB61mJys4vWkLuiTSJqDktCaL3Apwnr5rnnmN9D",
  "key33": "47w2PiJzWeyXoqtFg6nLvUK4h9zNHtrBTdjgMyjiVDjj3VM8LiSRh7vw49aRtEtTNnUYeeeK3VVvtFM9ke36a8oD",
  "key34": "2vintJZxEPLLivn6Ykk8QbyyrxdgjifMR1XrajXXvhfHbAUhq3KRfrAdcNHNBdVx6w6jvNPve9RY7iYRmU8VLxku",
  "key35": "5dUS92RRsNPMh8E2tCiKE3XqNgHSxtPkM7pvtkNaQwbvw9rWRmmFiejAkpDsg4zXU2eEf2JMjHA215bYGcTdGHo4",
  "key36": "5CYueR3acjD9wKPrf2RaE9bJ2dPE16xEoSDp4HhrT3Yv4y7GXSkXFsNfTyMzuN3U381VXQy9snYEAfaG41xCZJp9",
  "key37": "5gzqiN8GyGkJwwbLeniuz5rWucDbJbULE3bBjY8LeGUEAZsLRptgsoHvA2GqJguBadTQ9UhXsRJGVk9H2zBg7wow",
  "key38": "4UZ66cofBf86LSjH7Vh7ZEyLER9hUU4hn6q9N76rxKibKPLQTCB8agfB86hkUj4H9i4xnyhDJBVW9Nn11KPAjfUC",
  "key39": "4dWSBvrb48oocBaDa5KYJCvwdkp7rYQFvGGCj2Lbx4e5GyyWa1QzednLkSEZ3cK9YsvgqnNHU9NwhrZhVqJw83d8",
  "key40": "2dAmpZEmvQSNhadPRicqn3TwL6BGUZPyz6DKYtMLwLQnm7tcxtQ1TFud6biiLGDPQgo1gp8Y1JpmEacD6gKzYasj",
  "key41": "2rTBSLSkrdbR4qDVW5WcJjWtBGRHuNpsue6ZCBkVuvkF4KT63LJqM1vMpbWrgarNuPXurDvHYwgqFSXhXbh6jzDz",
  "key42": "3hMK8MU3JX75yY21kwkRcjJoFEuJEJTmyu8z4KhqWjAH5XYvNyNJxGVMnMeXGn1B16nuC82R6pHx7NiK4VuC1GU4",
  "key43": "2kTf5GizmncpMr6vvDH7HETtLBEAr4wnzZfMzX7V3FXicciQk8QfBWPeUKBD8rxExdem6d8GGkvUYWVifZEMfKk9",
  "key44": "5yyhX5YzKZE3i2niBmEJp45jMxYXNWvhiu6nRYye7cWVsmH59XwGtVSaEg9a3mLgGKKofqxPv2h6wYxMKJXHjTXS",
  "key45": "2pt11xoDYszNHH4hP1QCnJUnere1QVjeDVpaA9MtwSR4kPVkrUy2QWjkoeaHpf7qac92nrGir5KjhZe4ekLhK6hP",
  "key46": "hRvD4GzE22HRWn6JiSbh9bTLV6r4kK6KouTsTHKT6fWWGV6tHBR4kDS9vnEYEgYoa3oLuv4LY8g44HRMbL6zkqT",
  "key47": "5iCvPxTKRitdX5gy7UhtU6CR3e8TYWkFMiWNMNfjXNVG6gFQ6KkZsNrbmMzQQmwBqZhMRoKv891PKHiQQqGuo1eo",
  "key48": "5F1qyQzHikzNGV4C6GRty1mabxCUQFt6ZvDHSDZJDXXBaVAbmizbaXRhzpmtBr276XTCQdLctpU6gykkEB6y3xBW"
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

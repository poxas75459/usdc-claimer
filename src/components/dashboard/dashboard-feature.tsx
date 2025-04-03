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
    "hy57jMN83E9y1vFiJP8s2rRbM8o86w6YjTy3WuoKuVMPM8JbP8EzRUQ1k6BEnHD1BPN2KLQeNosLAd2N1Rfsae4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iwyUFfd9eiartghpaWQXAyc7E44DhY5iym8oSUgjuGZYSYUxqJ8V783misRKs4uKDkpDdSpEKqYKEjDDjdnUbR7",
  "key1": "yduuaszVYtjh9FPWfbDkiXs11aQPpKTTtzVViciWNYk4kCgMZArfDgwoWDYAGEVjVwgFpY5LZj1DfsSKmSW5TzH",
  "key2": "3Km81br5YJed2NFAVhWVR4E4wqgkr72iVGjsf8qVwiEstqL8GSvcp59owXHttLzs5BEqtssjAbbjxnp1qCTJ3fRa",
  "key3": "yAuPMz7wsd6J8Ya9HCooWSfc4GkrPSCuTMb96hvtdFQ8EG2JXxUarbu1Nnqkra42qsur6WPNdtjrqZH5XUBXJWM",
  "key4": "62X1wsPiAhpiqFW6DaK6cx7MG8wtPpbwHYMGbPh1fXNyjy4vgiUnkKhhZngzZcXucD1r77QJFA6e8PyiLcD81DhQ",
  "key5": "3g7tCvvd28PBAvZLQSX3rBk8EjozAYpah1vRsvy8nfensSUhamZtfUVD3N5Rp7gtzgtcX4euqpYVGGR9Vpu16m14",
  "key6": "397hVYUE6C59GtXoJWrQGe6MXo6QLU55cstrhT2tEJ7p11SqqAPfW1fq4z6mtf5FWngUpyRqAaUyMzY2vZTo3wA8",
  "key7": "3Uu88XNYYc9tJEqwCUH2qHiUQqKZRfvGygHu3TusNjSwxdDYzRggdqVpkC1eipmncjBDngjjbLPHuJF3V1nvYpGX",
  "key8": "5ZembfutufEiu1Yq6VtgBm9PjTYJjkz4aDHRfzC8Wf5ZTLhEzNUbwDukJ4DkXaUvCuJvh5pwVv6MvofcXYs6oyhq",
  "key9": "tnZghemZfKTGtwmhsZ3QWdBBFW6SgHZDssTcfofuLpgTscGJoAFdKSN4yEiokRycv6RLSVgcbWCRZegi2bJT2cJ",
  "key10": "5S4hL4wTAqA7NWcoQu7xfh1p3yyNh2nm4mR16nJcPFQVNqqgmX42EniC8vUpMNjvBgS4iEgWbzm2pBHp6Mz6gjxj",
  "key11": "2th6ogVUcNHdTKtwmpBELpNRcCPvGyDMFysbdbP7gBAJgL2bbguyDMsSXTKF3hEpjY3QxzSBnJASUa4mkUcfUM1y",
  "key12": "zbFphbV4qXzoaa91GbbkPnRcXfepcZwhYXCBwAjunRasyjauGvBGasfoLYFr2XoEyTHbAY4xPfzFgwczE5kyzzi",
  "key13": "5hEUutv6br6AVcQCL5pSjTonZWKD6jvkfqxRqY7YBQmLGUAjNZQ5u1jsxR47iGKaEBLpFRS4H8i8WH6v4gXBKJQo",
  "key14": "22tCXpJVf4FoUjCB75VSUgTtNRWYdDrpBTQTd2NHHgN4JU8WF6f4Rd9ZxNFT9QhQWevL7jTdWiQ5ye1K13B4SCvE",
  "key15": "tWTMR12FEaZZYhxGrkpDomDMovYiY9GN7JLTvbsKdbsB1bS3cvfCwH5BetrpWV27JTnYoHYqZrwnhd4F3WyRQoa",
  "key16": "soSNUp179Gbf2ZFABtGBGSLkyBvpzPcyTAZRh73vUMK5uNzWS3RKmqrhEVMj1WQ2ygnr5WyRCQbygxepRpN4KH8",
  "key17": "55VajdTNF2h7kwDMqM3bhpQM7ZkAs1mXpMSLmxYT52yQRPsZ87pFBykDSRVwH52dDdvuuMGHKrEwHY7ecC68u5rj",
  "key18": "4xHnkXq1eyxujGs1fAwzV6QHsxUv9pmDd57Vxdv48F8dXyoLWBLgg7sCJoqcUJ11WAEywYsLt83ZbkocfwmHKvDL",
  "key19": "3RxhQzeSjWrKmRinzjyyYZU6kRYeKTYjYkgREnWs5ZY39wwFChpyGmpM9fnzqjN2u7ZuskFEfszNUAyqVtytKYjs",
  "key20": "t1RpL2mgKuEQFHoSumhACo8W5JUoZ8acWaWwYXjUf7XgySYLi22jf7U6Ms1rMKxZeh3tYXZkochM74RbDbzFaQZ",
  "key21": "4Ex1UmduJTnuDhzA8azfJeTWcXpoXdNKNmk3tQUCTiXYrPHCLQMu6zCuFZpHES8AtWCya5v8vQDFhabieyy5vjPD",
  "key22": "4PGVgaBxUPALhrN7EEZsqtt72tWZ4yBt9gxyWwNV8H5zSUh6Uaxzt7XF7pFJ4euWkUqaevcL2KVB5RNpUq6iYGJq",
  "key23": "4hgvGBiHVybnnuAsvJ66XR94CJSD9hFnw2BSE5ueepX1UytVEXXo6Ap4NoL3PyKpUE1WdLC2iv1ye3co5MUZCx8j",
  "key24": "464hrrjPPMH1TCLarPitkd3XxWzi14C6hXWAUA8e5NYuf3Nqv4nWfPJvnTckByzAo86t57QhpYGFgMkWhkDhb1G3",
  "key25": "3vyGxHNtpx8RCMjyUUQt8RA1y8XPf1aEX6Zqt2Lhc1gt6v8hX7NmaxAuxaBZ3ZunXD6QfMS58e4gUXU5Tss8Kt38",
  "key26": "3c5gkehFHRebyhzDfU8cqujYinKzJYLuWruzuC8TWMxRYHDZuNaQwzrYcXvguYMTAXG3m6NvqumwpJMQnQTg75MU",
  "key27": "4pm6yoHSrWxemk56MmNquk8628Tcj69dSqP8azBo96BqNuQBjtw6kRQeaNW4KFkjM4cCDzNt65uS58Ash2yw7Yz7",
  "key28": "3mG7XLe2faRyogJPGDkdmJhXd4ArsuNQ6zBsUMjdmA22BwET7kAQYsvS7Z3b15ZZ8fLQQPfeDeYrfy8VFXgWT1pK",
  "key29": "4FnqiSZYZrWHtjnbLYnSQRkNnkdTdv3rzQLKk2skeheX1zk3MeTJyHg9cSXvUiSnoYVuofX7jW8zhoUGuqgUq6xW",
  "key30": "52216AgD13dEMSfnLWZmdT6iSyBbL2DpnNy4QnqxwLLMZc2MefYYFhApUvWhSW67UiYqazr5FQNSeYe6k4Km8cW1",
  "key31": "5VPKzbRTQpCYVW8gcwcVqQGH9117MWsb6M36y5hWm1sjJwVRtvGHLpj1qhaM2SqXnUdNUexVd5L6QFzEChByR86Z",
  "key32": "3WmVVHryWJPqSRLkSQuGaL6Taojsmfon789M3RqVvEeNHw4gzMa7FdB3KXoqseeHv6moKdeNzDwaGmBePEiyUwE5",
  "key33": "3q5m919cjK3NPZHsXgEgBh7re7hEvQQ4xwrmmKTW7MDWXjCZdmn5DkkGzr9EZPgy1P3yB4fcnLvjgQRh5Vcy84ch",
  "key34": "5YMDbujuYQqNGu31QBCE8H6XXePCvm9JAh6PASwspGQJPjcFHKAK2JifmQ1tagK3dyj6xZehmbYZorNnXHAFjK11",
  "key35": "2Xy9jJXW1ZCPw6w1TddJsWWHbNd7ZUXDLui86pYxSuJjHUgbkacz5kFrCSkFCUoYcP1LVmgw4DBhBR8wJKinVv58",
  "key36": "369FemEUs8SgpsahYpEzuzPxh46VcRKCyTzxThc5HvXqtBSYYcbiDH8EHmunuEQu9ZwCth2Cydx2d7h9Wy6JGrd4",
  "key37": "4wgi9ZuMfQdGpRp31v98ZKzNCmfDknxTA4vhwbXvZHjZNJE7dU8hneqjwdHrZ8T7HYLhMXWN2vj8UtfR6SodPw1H",
  "key38": "PojFe5dtnfR1Jpxw2FKrjSehNUn9RDKwrLhgbwrKMDGUUpiDESqUVumNM7rgSY5WNuaZADhwjts85szrZaNNrYm",
  "key39": "nELNSgAu9pvxNh16Tu5fTa2hbeqGmT5JxX4YQZvf8CLTFPYesn8mZq7x48nPwr4ZLHqzuDq8jqxkzHzeq1KEUGq",
  "key40": "3nWuk5jh7kX6uYtTdrPTwDeX9P8B7q4Hpz22Zq2apX8CtzVEDNU1MRgWdJefUqu6q5FZ7EpLzaZYrRygZtBAG3rA",
  "key41": "5U1drXUNoiYrag4jC11ajcpSga8NQbmNtjDjLT6SW4bJgHFwo7Mu74VUjFqUcZGq4xpQa8WkcmH7FnJ7S6RVF8SH",
  "key42": "5w4wzUkGr1hyn4d9Jm6jVBcbV3m2UdweXAPdE5G3EpCw3x36ZVQBDjzBdsYD74Dcn9h1tCmd5sp7CqcFPJRWmReu",
  "key43": "33uLJ99dPiyE5jq2dewsJBGGvhbyDMxP2o7qadBrBfQNdLURBUmyPZtR2bYCxCoQ9vtBkPk4cb1YcbcSptNC5bGN",
  "key44": "43sooaub6GhbGaFozboHPycD6fp7dCgVVRTB4qXAmCAZhW5sNXVEyZZCCqKFhU57Tak5kraMRCj3m7m6FB2NQ43U"
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

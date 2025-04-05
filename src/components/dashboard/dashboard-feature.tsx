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
    "3cQShiqncQG5nZWw6p7DvF3T8oFtFZ3ATRUX1KEai9JGawkumaHQz2WY7QCmyLbZS8eB9WxagRDdUhEHwuUAQdiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U1nPyAhSq5C9Fc1wTPe6RALJ2i7wbu9pax8TWVch6xLgjkd3WSm4qaSkNKeXPCvQ6BQ2FipdnLSUexB5FdoN4Gs",
  "key1": "3ZPS8XBeJqZce92hZuDzMhBjRGorMyxbSCuEKxUSvfwiee6ULBbLzfJoWPpyMGud4LhTvBFi74u91SrKaLRdAZ6o",
  "key2": "2Kk8TmUZEvu6B5KySE2reBHjx7mbjCmPkTpYY9DuoH4Ws5yYJQpGhYcB2ZNXcBTCjoxa7Axy3TomsJfmTsj1LB26",
  "key3": "3ny96c7hbeuT57M1Sw8Tca2NpzpozAMyZgGn2wszxxpN3sGLSA51XuBDMVxcimuFuVVjhAruc4MkxpmBhqeQgQin",
  "key4": "256eYjVJh7ZME8wVZbodFW41chzrPf1YV6HCmzWz8nZhuHehgbfUMaJPkF4kZyNyZbgNPMsQjgQMQBWDvBkZqRdy",
  "key5": "55eVxdS5CfbA1PQ2ofhEnwg2ohBgqaNgxdHDmbFHswP2WXMadhKydUPzmSDPQcbhMALQD8HZuEmxGkJ72T7uYGFK",
  "key6": "4Zhj6nNELu3JsdPavk8f8kpy22YgCs7PBfrmMiri5yTHZEAyqCmi7YR1Dopru5PRZPAoatgduGr66KaYRtdtNSK1",
  "key7": "4jS9y78QBsxsdPRHjun3YQVJinvGdRRdEZR1mB6qxvyLZeGaExFbUhNmaHQvjnf43Dhm3qDgghbm9VjKDHmRcEA1",
  "key8": "RTYmhLpASXdv2rRtGegrxJug9njrUbwB5WmhSRFUZQeKFTtY28cPo5LfzaTqxBoCYzhSezKoYmxQgtwLmL7K24J",
  "key9": "4CZQmJVU5WexkGyLdvoLG8bVgqzzBjuMB7ErhYn5psgxjcQSMWVRwsyZE1JXNonMPeWRqpCdKXGFr31m8Ytvbq5U",
  "key10": "vnuXGE2jVvxafL8X6MkNZN51BR4RjFR1P7wmE1na7jnTjkoLsEM55PeFSyd2dCfi8KCgwZpcmJRnLNtG8LBgn1H",
  "key11": "4LX4fbUotJvKzGppznrei8Jv8ewZak3qMFdHRyftjpRf9rhzwfGFjsESFALruUDGRWuSQPMg4pLfN7N5ho4zRq61",
  "key12": "5F5F839HjZQKBKkNhWQM3LjbbV4WkSPZc3eE4wnb4Z1nsfRA3LtfjktBiZYG5GoVLWR3RjPEbYdf7Mwrq2rtyfpk",
  "key13": "5mzYJscA5WJD2NbyNnxf7hQ77G5EycuLotEJ4oGR25kQ6joUK9Ac4KZnAFxD3zkqwqd1H87DQo1oonmpsPE2adCZ",
  "key14": "6Lrnb6KP1k62nwYkZNTojKvfs5jNMoqQ6Y6T7PCxAYqsr49UEJn31pEeRQXwR1Eiy5AF6FtuDJUxr2V1rWvWNRf",
  "key15": "BnJJPRdzZYtL7X4JJdMCmNsYphLh7entaYJnLnaV2w9SBfSaNKgRmfQQaWD16FfPGFt9XD88JwHCtorVGxARhDq",
  "key16": "5exV3uettWczypRwpxgi33csA53DW2RrLifpwVAYbuNZzT4dZsvawusRyQWYuJzDqqdB8wc2vd3d8oduYomtmJcs",
  "key17": "5oX2bccux5TueYzMMDgZEsmu6PyCekePoLikRPAeR2ciA2SWUiP2t97UYRV5SC4xRVcS9go8S5uvU1Ug1cd2gm1s",
  "key18": "5JksXDsSBPBx1eBvjhyLvgwMEKt8aWaPgJuUG7tqBMwPc4VDV3aTqah5Qzvu4mXhgFN7XHf4nwqJQjxPqbSfuJPv",
  "key19": "4Gf2xYFK6zRs8SrnHDkdUYs5PPcCHVQwdRo7Kjvmbm4iZDgvKztkWaASmVwUYT6KnuM4xLpdeJADV4LQDZudHn51",
  "key20": "2un5RztWA697KvvQ94DXkbJ3W6xX9R5CrJopQ9juQhy6twwB1PnoswrENvvC5aB5mK7oS8BtYpCVu3fCkMELSKnZ",
  "key21": "3tnLbn36P4Q8UJPni2widXo1XRJhW14tYKkVm38e1T6E4WEfydp4QFH91b1jGerZX54BWhvrHqQduQiiXgHdQMEM",
  "key22": "2gLy5kd3ZEHjpFZtUfngPjncZTwALpr88z9vDjtgEaokUtWCnhA4JLwMFfCrX7BL9Ww8aGKX5GM1i8vW4bPpg1AZ",
  "key23": "3SAuwedbadFR6UBrDVjSWsbx5zmPoxS73ZJhmVm5ozidFv3hcz4nJdLUNSFVeyuhDx9xPNQKoc12MvXJzaXFyGwK",
  "key24": "4WKHXa6EAdS7DYGnttfk9BzqgdimmmpDGc4CkH67BJc6rhcyWoL973RytB1pEhm2c3yt7Z3t873tEKkNT8L7v1Y7",
  "key25": "61YLD3xNfWt2rMiBEaCAvoP1RDwwttu6JZLoSkyCnSrrT8y3cz2d1vpQ6sfJ1vgKu2MHy4bioCAfvDZzx7sHV1Bq",
  "key26": "67jvyX9Aj6CDUH2E7UULHaxgcgzqQ7Crxd88rctAEnz7Pcc8QgSjTLQonWNDWYK9AX9ztWCfT9Qsse5oiCPL8514",
  "key27": "N6aRRnMT6wDZc4qUU2V5nvb9X1ZhE8cnrGxpzZBsBbGNBtHR7suQibX2GbkFUFd1iavPDjtEbkv61BjszVxu38A",
  "key28": "39XMpDNvL3VvFbVAq2CSW59HJq19ThH17Z1wLoN6J1CFrxGYBqvEsqqfRgkzaDAj3JLa94YMhwVHsFAr121WiJEG",
  "key29": "2jMLS4mAjwp6uD6mBc696U87J6dwHAeiqdH6WXBXRMve2nuMhMfx5tvULGi11P7khKXgzENtMTyidSVF4wsGtheS",
  "key30": "2ps62YNSGBCbM1WVcAvFVkbqdfCwpB4CSyCuCACZ4Ck2QQ7yW8xK3oqMw3B5ATRBoTdnvgHTERx3rZnQp8MaxUUw",
  "key31": "46W1Vy9C1tAugE7YJzR1QBy5uQPt87A8MZsAhmCDaTHMHgNY9QUfL1YnE5SNvXXmGNoMQxkiFH1ZmTb8AJn52pMu",
  "key32": "3TjP2ku7HKizSsGeKr3z53sBtdiJKdQm1aGN3W9w4GAJRy4PxeSS1h2VkdyQj6ZpNg7qKxnsHfUnP8sgEdVATbRB",
  "key33": "2aEzqQPpnEdfHYYGXa8rjNd1iLKZeuthbGd2TfxDSN5mF3pY8qMzSXbz5c1JwW5AqA5aLdkHoksG6FUht4wRkTiA",
  "key34": "3bicnS496xWv25E4gdyYZdax97z7nHDqsz8bmXQSAwbPSjmuUio25BWUco166mMsEKoLZtap3oCMTfhZeZcWoZxb",
  "key35": "2c1a3MriJob2JFr77uWYoSnUBj6jWov6JiUGRG1EXNWEyPzh1rR3Vnt4YFFbxpcLbLxaGbnDRcCXrjFt7ieFTjPd",
  "key36": "5AfySPMnz8vFZtadZiN1VuH9fQy6C61feazW3Kd2b8gr5vHVGE3jsmP8TYs3p1ALcbRrbJDwaP3pLFc2EkqP87XC"
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

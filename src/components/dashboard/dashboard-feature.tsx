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
    "3TrGvpJYMz4eYKaYizZSen1wR1Qgq9jvHFDShU7ZcdF5yJ4HNHEnVczNaMc8aPQSFMZurWr6RVyMYWeHMAuNAbNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLuyAA4qhwPfSWw2nDJ55oZ5gDTXfsKS7ishvkfVT5uvDzsdPqpGYGBvg189cTP91rzcmumhLC5fPQCLSsaVnDt",
  "key1": "22xWvunE5HeLpg4b4Rj6ZfZbVT6xHu2vkvbz65qK1ytRs6ZHc1ShqtS9Ecj6S7Y2i67Sp28GL2Nw1h41F9NGqNvL",
  "key2": "48SoAFCnVuMUhbYBE3DF4vpMRfSdhhRCYFvhHx62PH6RbuV7U6HDvymqX7u4c1efhKEhN9podfcvV2SLUGNoUv5a",
  "key3": "2PokFbZFok2ms4EeoNR5fZ4PFKvrUBxhF4T2XufgZWDisUnRmaPGtwuppLddr4NB3A8N5nZQMVsVE61WY6Kii3tf",
  "key4": "3npAgjm2zA9XGWAMSTuL8Zw9DV3QjBuXNAKWrVSpzVVHQhQcpptPd7G6JB7dTsdxM43JjTnXSVq6HHirmGJx7QTh",
  "key5": "5Y6odA6iBUjrATYndnLuBjwLNdkXboNxZoPtq9X3ETmc6tk9gpy9187ZV1oYvbc8NM1f8ntJSA8xcoTMetnu2Cri",
  "key6": "2dUqBiT657QwNvWUpEQ8xJZfUHhcbeysZSwKV8f72fuxU68Am3NYKZmtuZ6Bc3JgCqyQCNgGP79xn83u4EbJhws5",
  "key7": "4yoz2jv8L6FgPSDNhmuAWQ3pqs2GHmAdUHogwt8RTuZ8AN5hoFroYx2H29mSD7N62inYxKWE53YwvwvG77wriygC",
  "key8": "4uzzeqp9scrUscMZb46eV9Zt2PFLHDom5rDfjd4wYv5wmhBHoFAFUE8i9sBsbGRAVJLsrLEd4M7QpGkvgifhGcBx",
  "key9": "5YK8v39ULTSbtaEXpuWeVXE9rAyP4bXDjWgbk8GxXhXXwxnEqbmbELDuYG54phuDfSSQD1B37QXQCXvCUA13P2sp",
  "key10": "5Gj7cuZucjahwCDg3ZScFqipwD3FbTggf4JCDtEJ8Qo7CNyyoYEPwdLepz9PwDs72WJbpS58EbNKSjsE5Y4G58Xy",
  "key11": "58KrKxdaTtgzLGkzv9gPNow2cBi9bSnrWCJoyzKSHdg5TMbC7P7U5SFz94gwWBghBTjiC5TuJjBsUs3ggQUKuGqR",
  "key12": "2WChbcaq68Rit9GtvZMj7wqK5ZVJfALhTQeAUhstzzCj6exk3KTKdfTod9zzv4FhdNGV8WzDkJwc554Mvh5ni5yZ",
  "key13": "4AkpdavHaoRKfaMVeZn1snrwo5eS9KcE3CVDnZMSpKpZoLim1r9LUUJzGcFQk8NQEZf5GTRm3xUhnmi93ftMfZSa",
  "key14": "oXht19eZm92ML9VSX1GbjbohBNHAVbsS3CS1wYThqoUEhCJTaNXexqy6qPxkD3JjeBFwsaWaVmaRUDSksEirXEh",
  "key15": "4DatMFaDdago2XTZWLRTyXDrEzrF2VdKyb8P7wNsAU2iwMtwdgnBnbgH2sb3w4Wtzgmdpkbj1wvyGUbzYUY7QJL2",
  "key16": "32UNgsQShqgUCokxfw9in5tvPtvzPQ7mt7tmcJVuGQVW82XieTRAZjfPEh79PUTZFpXjib5wYovxRMKdjzg1Ydp2",
  "key17": "Kj5yUWKdBhXcHmEZTM75QMY9Wm4NLkSQTgkQu9Ckw3UovFcKzVQZa6tqWahuvVWznkBh5DUC1tdnyMTo33hqoiR",
  "key18": "318RViLoWtRg69AtYn8spwfK1eu7gXFwkQSAn58tVsDDigLu4rauFwAJohfUC6MxDQ5DkPL3MWmJMbbuHrt8pQLY",
  "key19": "2xwHTb3VmnZsXgn5fWs8m62ut1jTJZdC17WU72KqwRcKKtYQz22siksXaZQ4fBPzvKGhKqJwmVhBy7utmbzohJQW",
  "key20": "SAnNW8MqBBg8r9q2GAZKasUUbfTSNhrSFSCvqmhi72K3WPVXUreFwDqmyK4V9sputYatmZTrKocDq9HgaCHFvrz",
  "key21": "5u9WT3pVj2Ffzsviq2CuTM554D485Tim48rJuG3oRJUBugNHwR7vroEK7A4H3Jva3kbUYvVV5oE9B9ZRFMctF7Go",
  "key22": "3ZGcgwn5nJLNgR66YkGJZDANpCCmugPFszjbxAtS4HhbjyNkccpaBhZfPHR6BLThV5wT4cuCMHuyrHGbMtgB5cZM",
  "key23": "gBKH9jHbsB4g7DTLedm5Hdf6Fc22Lm39Ve8Vk93zrwucyPn7AZHrh3qsYqMQDsqeVoW42JSANKRajcKfnUNHp6t",
  "key24": "5dAkhfhpoSDSTBAL8ACjbRfJ9j29tWAVfZSb1sE3ohZhaNnQTSYpFd6qRdvpRXMLN9zePG7y8W7qdtZJeDWqteoG",
  "key25": "36BN29HMvzXesjGk8vubYYKczH6d87TvASq3mfymRZGmUtJeVU3ezzTrN8eN4iY4yVXq1QQP8XuEnS1Kbd1y77nb",
  "key26": "F1bmqCMkssftXWEhTfJ9eaTbb7aYsc5oEvg9pLgK6ZLviFLR5jGg2XEKSCV5PcXNzix9YSJUR5oNceWhwa4EKoG",
  "key27": "2epho1JsChUC3MSwHnw62ve7sT8RnMKqiNA4EYbpF5GDCA8phEgr7GPLvQjbLixpEFyJ183RWHRpD9V714sUGhCZ",
  "key28": "4KGBS1zkX7dc94WWF9dswyzmF58ZLA6vbbr3d9aCbg49Rn4EqYGx5nxQXeTXT58UcfVppm5x1kTHeUbaJuYEeob7",
  "key29": "3KhfQs8Ssjv1LfLXEbkrutZijoHUStfmwEgmfYBQsm6TX9Azb5tZnJmEsouSkhStwQWx4wxKGHaibGG5ReutXCQW",
  "key30": "2h37RpjW3fJCTgQCk6mZnzGX89PvqkmGBKTM9zQaLvD6JqHwJ1f7oxWKSRDu5eEVBFbfB8JxSSWys4XT1oyj4ykt",
  "key31": "3GbYLHwKnVtx5ENvFWjedZ6Sn1pYTbdZQGTo3EjKYiZgGVMrr6Mtx6AkziauajuzGKEQuZWgTdVV2jq6mVgekesx",
  "key32": "3KVT1vWP1SB5BJrpHwooKowDFipwpcs3PXeq2gNyuECeKC5zTNfhexEZ2bsYR9FwtJJoc81Gu8rbJc2QDZmJ9Y9y",
  "key33": "5zJXKNgh3u65Q16m3rPPZ9g5NCTytnxVr44hSpBVFaTeHucibfWJ3NpeeYfiy8ibrVWFoUTnVpyZk3pxksLj4Mkp",
  "key34": "F9vQvES7U6E3cXUMM7JEd2YmTDU6sSWFpJTuFehQM3qbN6og4pAfSSuCyuukQ8Xo44KmfHKy8fZEdPvjxvQzoDw",
  "key35": "3xFbnbFTwFYosnH2rnqxNxb4shgmDKFsjfthSQ6rNbT21AXaDpETVqUfyiRphYGtDeaYoGBPtXfCGHGD2EUof1ou",
  "key36": "4mbVW4MgqpDkpSBZLFv4bHfy1QcutZ98r4c1knLi57zLRxekdpjwixfDptTTMexVJf4bTM2NKoSJLufuojegxxog",
  "key37": "2mYqyF9gLR9UptbJPb5BXuXLVFEsxyAy4576rFr5ezEEcfuJ3gWiJJqhMgyKGF7Ruv7oGHPoCKUbURnk48nZ25km",
  "key38": "43ttzXRWAzLs27L8VTACk5QGtNyjLPudzmWfEBHv1N8jAr5dfkwRcUg8o4vcLoMLuVEapBM7SsYNnrMxxjgXkPWo",
  "key39": "vVGG4A151HvJidC9FksSmvXmkPvWqqRGuQgq6tKfRT9fuJw8jXrUBTvfMytnrZ4tr4uuJeAJen8Zi7ibJKBv7nf",
  "key40": "5bdDceiGfWTKrWucK8JDXEkkBFkE4xwZSdBhDnSTvcSzfzYiXAidctmk4WcVPbf6cAcrkTVnRHkVXehapLXbifMa",
  "key41": "5HbJAp5MwZtsyGhjpgk6R7z7FjXqAXX5VrYWSDwzByxD1UwARxuAf3LpMgbRnCH7pRgGMkN8abVPkxG2d2UUwfg9",
  "key42": "2jaepNwf4ahbFFSdZLH8LSViUY9d2hQhKAUDsGzh6dVCryAABcBjW4KR5YN6kmeqdUMYbniU8ooZdW8gU4HbZFnJ",
  "key43": "4djgVjNMytMxG7yNBuch9aL2uX2qQWmaHXvPQmh5q7r7r3cFFUUxeuPZm3wyvTec2MRmCHoR9fUHFgrGpZBTajty",
  "key44": "5G6FLwtTop4v9nfP4TpMQKoMucFwnYRd1Fox46KUfxe4zBpP24mM8FYuRYWPCCAzEE9Mt1WcKv3s5DaiJHmzX6UD",
  "key45": "zXVuvUQnMW3AGQpp4hpBNiz8U6tJnzArWkySuqUcJBd3panCrJ7b6Tcaseok3R55VAViFEvgaPT36ZRDuHtE17G",
  "key46": "wpCrBrsbFm8M2j47mkJMb1bCf3ubjpAndcgwN83sVRrgLcuxBj4f4QBPjsxznyS1tJMsWvkkkoHJR1ipiywd8zy"
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

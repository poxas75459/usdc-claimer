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
    "3NJeuUgtmMidNB4JkVsh2M3XAX43QAVamCEkqL8XJDH7dSx929KfNFbU86uJJWo3NStx4Bf1sACsk6ZudGD8Ka14"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KU93EayZZQb9gnfy5u7eX3qJXZTyUGUsSPjD92cim2mw4apqw6Q1e33EebvngNaK4USpwCrJNJHrwFLnXqnVd7m",
  "key1": "4pJoEB4AcvWabFMoz33k2hMtmvqKzM1mVJtXFkctghwa2ZeQhdAvP3A25WpVtFAKfcy6rBbiDA7x8tLtKCNy2Pw1",
  "key2": "2X8zNXUbvzRjGHCbo9Njq8rhfcJEgFnURP57fUef9TfyhzY3D4CShx1W6fxkw5xPgGHHxPYRTp2X8JYRHGmDbSK9",
  "key3": "62SWyzsbB6BCuUpwohLNVaX1GaF3Pr9vEmDmkcWnES4iat4BXGxBevuYNUipXohX6MXFRjhWM1qzAP3rph6bdPwk",
  "key4": "5Bus5JHJFUqi9KUY9hJAeqfUKFVZfud8xPJoKzzbrbNfSvqPLCSb45JmHVBmmWtm8uFKMyXHuRJJ4LrJqKj8FcZ3",
  "key5": "2cpaRQESff8bkWZVxNXPaPzD2HNqbMNU6CP9Ht2C4Do2YtQEt6E4yYVC71ucKSnEhhQCVKCVzoy8NHwMvH8dzdFs",
  "key6": "BSZtSavmguiZJR1ekrsGrMG9qB3qUVAJesDywdmVw1zhNqt7hwzd2VHwmYHbpHMfUR1cSfCsMsYVkU5F4umW92h",
  "key7": "4Lw1KCcqSL1cLsumThNMdYryXHxJ7kvMQJtYYTRZpLDCEABqrD1aRpBZHNrqZnxPsBrvMiuq9wmTqZZ8w5fyST97",
  "key8": "3sdCt23NDYaBsWsLqKvxFU8AXZdHXWDnEabcmPLuH35RCRBKXWXYfdYgRgLZzeWkDA3qZXSLpM6DKF5cgFE7Yt72",
  "key9": "vNuqcEu7dvVEfk7JCtepU3gbcY2LgzLrjtUASi3D2rhTXw7J25L5MnDLozGPTWxDRqncSMVoahFpoEk9SyDsn2a",
  "key10": "5DqP1sukjfF7kzGu6UdpNEv8sECtAL9gjCU2qyWSCkiDegBpwqa3vmKWzFGRKiVkub4BxEchbAr1tYgvhdim55aY",
  "key11": "ULqABeZ3vhnH36JvBiDo3ZHjgvjXaRax3YZ5zaFQfXXxqi8tdYcgktMBRqJFr362jssxM6EfhdZrF9yPwqWWCwa",
  "key12": "S9A7Hd4xVZrRjCUyT7nCShM9xVyMwLqdMewuWRnErZDQ2LHAdrmowi4iLn5CT4w4LqfsPubdxpBumK268E3qKLx",
  "key13": "MECNgmW7xceAepfEGp21FX6qmTW1QA9LC7n9pAp8JVtZuVrcqL25bSrmzXqWtCdfi2KpAupcZm74CJkbzLpAdd8",
  "key14": "4uAKd34xgrbhWer59KARoF7c5RNm3kuN66pbR1z6iXX6PBcRXxauM4g12QeitWFDvp5ud8gyQy8BdmJsFLxme1WB",
  "key15": "5ct246x2WyNZ1R8SLebKraLXXUpuDwftwweYYGHLHfqBDyg9vTx9GeDD5inAH713Zcv4jHWJBt6XgqcR7r9NwihJ",
  "key16": "EUzWqK3f36q5DJj7V5J42PqbFGMYC6VLAVfBXfZw41uHNrvVjwu3q9zP8BQT7JQE14Kx3tpL3XauDcCD8QdiPEw",
  "key17": "5oLYZrYu9hH9epj2VNXYaYxQ3mNF9Tp7VQcbAgR8jKqdc16YHkD6NCuNX73XVL9F5RxqnsZ3hTvwSpkMxhcW3npq",
  "key18": "2s6zBACiiang8jzchhyrhxMDA9D1NU8VupVYBfV27F5WtaWfttmXbnCJ9iXhMuNZGe2gdPUL7edS2jR7gAqEmHUe",
  "key19": "3jB7CkX4f1cCePGzuz8LFSmidEkzZNaGUG6H3ZJfmw4jneCLRGZpCXUX9z3vtXM9kf4G4szbxpR9HwwrfwusBjEj",
  "key20": "27uoLNHzCPXtTA4fE1yq6ZoYanC1seo6qEDpueachkeEJonzqdHUdkbkshgT6HfKcwcNTjpmrxT14xTQHJHX4mFB",
  "key21": "6243cfsSQMuSqy3o4jP5ik7m1ZiM1FFYTZHpnFNL1o2ubntUPa4n3ZGJGER7UXhEU9uK9qNtBeDaQxE4QYPCoR9u",
  "key22": "539aJPshF5cj9BeLVTAg7t56YkpFQMXK2x8Y3VjS3AkLX5HAHWPDyd7Mwnx97x7N5Uk5xJCn5Mxamq1GFarLqJGm",
  "key23": "5A2d9Deagq6GVaSXeHzQ5Y1AXwWinnPpqptLxGv3rUy4rUxWzhYk31yd1fG4q3wHgCsvmi8Kqoa96CEeD68VVCto",
  "key24": "24VRyv8GM9aqaAExLTg4GKkTRSAjeKfp37mkv7fq8camJCJciu2UywqTpA9nkeYxkPYkgiNGcF6ThHwUKx3gX1AC",
  "key25": "dHUHnLiprBK4W65BUayaav8AehCXizs3WLFEU6AgJ686XzgMR1YtPrUdYYE9Q9SanfjKu2rGfSURq8wsK7feyW2",
  "key26": "zUMrmUz9f4G33AY5cnAGew6STQLp1EfmGKtbXC1sYk5GTkdWndtzMcXZRx65Ztr5VyZt9Y86Jz5GTghrkc1iPQW",
  "key27": "5FhDBLE4MkzPibBVkpgJDwoNXAo6kYNpZXobiY6rX43tEiEcxyWnhCJFt91cKkRjkpTuzFTksVmX5er1Aup9k11e",
  "key28": "5pWJkKGt92Y3pLyjY543XXHjNQK9sbReRwhaBFfSaESiEjrjVDyrvUUTAVxX3rpWGieeJAkcjCEra8YzS5bMjYrZ",
  "key29": "3uwwoeePRgho5vkS5ysKqpmMZGiV36SbYnuxducBtjox4fTSbMdBtzJ5sDiVh7zEibyN8e7eoRDhnkho2ExN8Uz2",
  "key30": "2P8DzFgnhv5dUn6G5CXwYpZ3HxpA3fRSsCDB5rzjhCJuFRxNayMmhQeo1GThkELQ8BL1NJWLAPJvzh1u2fDpceUQ",
  "key31": "3KRTgmoqNimaHHbvnQJFyFEJBQhykBNL7vy3QyFC4gWJZHtWFhUN9C1fWFomLnAs6ovWw3gczf2m2n8F57Z6KJQv",
  "key32": "3K3qshi7nPYgueJcs49F3Cmk3uj4WMMECdH9NJgjgp1UVMvwwT4NXRGaa1LSmCPMp21gma3eJLKsgBpseLaWA8Ks",
  "key33": "2uk5BodrqVR7RGiKjPTyJAwgNLrykZE5HSn1r8aRNNPfdhYqNHZ3tAizfmGG3GyVYQKboPx1HZZsbkFvTwhBo7Je",
  "key34": "5d4XTUJcZ9fTthBKUBeGESWFmRTKg6Qhg4TkKh6jD42zZQJsicSW3ZYLaVLg1bBCKMKNewMkHsvYbPNFcwVXeBAt",
  "key35": "5Pse5DLmga6b9A3mRCQz9LAqQARCt1gc86cNzrbML6Zo5EwEyDPvr1bHCo5M6aTdG4exT8g7zfz4vL5ZtE19T8mU",
  "key36": "2fMifhzAUJvn1ghUVwvNQhNZyJUaonwoDJxhjNcJLM59QqE18wpZcdhroSkcFBWcYjfiRX55xKHL8chPjPb56hes",
  "key37": "FezFHFNMMSV5QM5jJsPprHKPqkkkxVCZ2xB4NLv5js7PNjP7aQkCqUtPo9dVLRG3bUxHxsYUdptyq7uMu1nUA72",
  "key38": "4oDfgpbmiteUpNuuJM7AJgadwtWSuXBVNuJ5ihK64Sycm15PrY2BC9EVQMN7toGip9MTkE1ucYh7oXZAGa3XSnz3",
  "key39": "4BP3azJWKFVFa67GgxpmotZx6CSTZFq1nspTKn16LwuKy4LxzXi5teRkHyco1BQyk2FHcbLfdJWuZjGmW5TRpCKP",
  "key40": "5CrZm8MkDRwQJ7ifgZj8cbtzACWyHk9j5YpXv4YJHPoJ3WK8hQjEPHnC6GLUKZZSKmFYt22pT9db7dpfZzRagamj",
  "key41": "2fWv3V1JuF52QAJh4WMS5CXySoohF9sGCmT8e4K3jEBwpTSWoQrSP72UHfToSSdbAB7ay2jdUugzS4GibwdjiHFK",
  "key42": "dKc9ZL1vn6trhfia5N858D798EdBg2hSJ94a9DZ5TVN1gh7qPu5GhM5HpwDWiaA8BMt7ENe4cZgpPGuPKwavd7n",
  "key43": "5tjTaGMMW5T9HksGbPreFbqTxQWHgVkvGPxvrMLAdEuHmYnNYLWj5sMVTEUsL7Mfy58nxX2zXLXirJaYphEBQoFD",
  "key44": "2YVDDPqr2hor2nG79ynXX1JDux1Bc1VvRsr2JMkyPKMQjCXmP1Cvu4VUChwmUaHmD2Chgs2RoT3RaZGcsa2k2dKp",
  "key45": "s6fLA2a8rALjvqnP1H4ppWWW53qFSNWigmpASP8KfhvsrKeKy4EeKZXUte7FqYueGcX3BVUYi4Bu4t8ncZYY2th",
  "key46": "4KfgnKUNNDCX3kS5C7ZMCM2w8KP5BJotQs6kbi2Qq22Sn2dYMYGysmWgsicWy4uZ8UYf5miZawTVQ6zzY7ZRKTXZ",
  "key47": "4HEyd6ZrnRwyqWNQZtGhpXDrMYr38h8YvHbyh2tE6kR9BAniLtfRkiREaLEdcX7PxdVgp38skP74Msvbg1u9AC8k",
  "key48": "p5Em8xyZutgEFav3EMphzr4HqFxAPWGXC9BnMqxvFHfyUNUp26Nqc2BtPko4ZJGjDRcfsPTKi5vt1KpibtjKoQf"
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

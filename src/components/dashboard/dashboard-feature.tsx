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
    "2AsHyCguo19n3DXaN8BhqBd3eVQYr8oNRKriZgg82irNeF2Rt1pg6iGEwGG5LrhnJGzBonco4RSsN6tZLVj7TKs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uj7tUnVTrvqcVeFsrrbyqdFKsF8T1EboT9u7DqvP8AoMXMSWcyy5jhXH2zCy58aURUFGbsL9RQx26ArHh6EoATX",
  "key1": "5cysVy7pq9bAGwyr7Eip8rnnPTdhVPQdFNMLKLhruGaN4yAJvBrAhrh3aQizUepEGmHYXSVhAbXwEZQWSUJYs3ua",
  "key2": "5uUw2gmpJDCL8TFt88PVYnWcM1S1t33Huu9T23RY3satTBTLUzwpGb3C67DZYqHhnLqfA7mFLt9Bs7txsLYhW1jq",
  "key3": "5UkEGHeaQCB5rQAKKKEw1VBsmmbjGqrfkWgopWdoebBSysnriboXWXVqDX7ZUpSUwzDWA4CfH9Xodx74uqfxaR9D",
  "key4": "88Rk9LeBqHCjQJ5NwyF6GCyM8ydDYJwq3Cxc5RNcUWjw3bYp555sGf8UJkPnYVzMfwVaDKVwmc7WAm4XPBBmVQG",
  "key5": "4p4odkK6tAVKCAfMiBbcacBmE2jHNf4QmXt1W4cuHpJUgmW1isEXmgvMBKCf8cGaNpc42aJDydiCW8ikLB7NP4b3",
  "key6": "5BbTSTPivvuNgt7EJ2hhakDf1AGPsNjW2iS6CfymUCquEVJUX4YEomSgWRPBGPwbyJQfBaCh1UVtkEgFwoS9KRzX",
  "key7": "5x8KzECq1aqvA9xCKVHtAiqowQMSmg1AP9cZNyptoPnQhT9eSGyaHB4nzabVoVYN9UJJi5JkWx6sLW51oYmUhXuC",
  "key8": "25296NC6cgxybU1r8uFAiwU9dirfzGd7ybXGGY1PCmBJJrBAftx9u7h6WMvTW9pk7hSsy8gWBZkLBstfYaQrMqm1",
  "key9": "4Z1S9QVksFH1hiDMZB8qyy5YZcHk6zn6aNrevLvcoVkogrWepfNcvCUmGVdupcegxBGi5EiUWXWYkZ4RhgnDioGQ",
  "key10": "3ZEPqSbbSrfmaAWYo7HTB7jpeviy4mX1MBDxSP5KVYAajN1YTvWAgJRbkqHueshU3jVg6jNwmNyiVbBkmxjjdfVz",
  "key11": "5WrkjqwWBLzcBFFh1TsV5TfiKXMHdhiZ8eRnLH8pq32SXv9aE7iErPwUZ675U2fqijftvhkoL3Nt7aUewxuQiA8E",
  "key12": "p92xnTsQpwVXKgWPQDhtDhEHzaXNYu4bJ5cZe8ZUhGCT3g8hmKcTQY1yDx6WuhUDZ9s6tqCXcLfhR91N14mSU9E",
  "key13": "2WCtJ77nV7G1Lk5MFAiHjdtXVBzuZeHNbfb2zhjoivxyQfhTxe2kLuMpBe8U2x1CAJk5gcGxifM7weqER8QYE8cf",
  "key14": "575osh7p3ehTS2VEMPfuPFDSTiJxmLdkkHzWpDL89kydCVUZMgbQGYzofWQws5KzMj5xrorEWfhBag2i2JsioGeB",
  "key15": "D1CxMZmarzxdmdQx8HskCtzW3dTd7yj8isy2RkYtdiVJpAZNCQYvdHZy5ynRzDQ7x2UUcFYYuEAzv2jemWfdinX",
  "key16": "4boqgm2Pvzi4FYARFA9GKZzBoVuQi9F63JRBmvz5uCWq651bCuzUqc8WUa15YpyCUz7Mk1fcd1pwf2b6ESMXLfuq",
  "key17": "2wBnwTRSU6PYEyoHuK8a8vnxq7Rev37mwipFHZxfKQGW2hgHxqiy1JKN4VabFsF2RkEgXRsDGvYFrzqP8Efmep7Z",
  "key18": "dnRY4CkVqaF7YznRzHs9x3Sr2YhQu2XYjsANjyQLCxWSU1djRZo1wYiNgZnksJzdszMMvw841oPrtwWp6eAWCEG",
  "key19": "4ymD5LmppBEKaYijtpEsJxDXpFRqXR6yB85tmQ7E8aoNd48qNXJrg2rCi9wXjBhUEd4eEtxgdPF41Pn16h4xTL89",
  "key20": "6HvLENVbFZPDKBJDyYiQ4rMpmX5EBAyWfwsqZDiBJiEJLaL7y7hyHqhQJpgv8CHreK2fnAtoXnJhW2pWgDBwCBC",
  "key21": "2uhKtpiUrayETxMsv9YLuKWMBm3RqgFMi7WjY5sbq1CmGpw7b1STwNka51LiEuZPjG8rEBkN5ng5bbAiZDRbERR",
  "key22": "59UfgAtuUr8BLKcghzXQ6hGHmemVP8L4J4Sax49pFzjHYu7srVoouDtUFjtDzF9KaGDPq5zCq99QJUgr7Q6iqM9d",
  "key23": "4FeUBXHhSU2aAhsjHGmbsWWiPJ4YyiXUYX3FJrfiH9bWaXFPn4EyqtTJDKB1j1sWE6qpSHwNHHEdE9WdYiqPiaAF",
  "key24": "EVHsXd5VgKUT3vXUR187mvuwTrPMoQY2chsHJHLRDAjvrTNyogxEe6G4ppaDbJX7CSRQ9jqVp2eCuvCQ2FtDGgN",
  "key25": "iV3i1MhK5ZNYz4BYwJ8GrPAJFEASFHkUBZugzkZKnhTR5yBd1QUL9FyhksMLhEoeMrdDgrtNwmL1LfNTqKtUjVn",
  "key26": "5VXjkoXk4yJBDQwr9244SjHCQaoyv5eCB4Zu9mfDRDuaBFaFfhnxY6caiV5xDjuhx8qRpottr9e9WNToHfyMJMJV",
  "key27": "2krDxw7uVDm3k1L3iavv5N2S6uozdqiSZe5dPF9UKJjnUs8Gu19hn3rmsSm57erGvTYUqZ2Nxx5g9V7BMjiPKKAH",
  "key28": "4iybN6c5MdXGsjVL2oNEePtWkjinbXBpd73PJJo6x5Lr5SCi4yM3THtWQmn3RTtkCmunSXvftisx7dTdm8jFACRH",
  "key29": "5rWf6aASgCFP5GZe6Y96phh9RVjwKkc8jWGYYaRgkghBdnQv8kEWEoQbuEQgiJZuRRSHjfWneaxrVX7yv9mFwfWN",
  "key30": "49XPwdWaK335o9t2ovCdgexEruXg5ggDdu6YmJNB2HueD3BHXr328vF3ZhWzLSfNSUtyHMpncUaVwe77fhJUMawJ",
  "key31": "3vWCKyyE9jKJ1AWPwNuf2yzmV9drL9ouDTayFytzti8dv9VPmFJ6YvEsyt5M3dY5ECd9vq9MqNeEqGLRXZ5hNc1m",
  "key32": "4PA4LM8W2hHqWWSqkpoMocS1HouJmgC5s9eC5mwxH4z9bJ4n1aEu4PesMySup4WRgzqF91RVnUFanEyRW6qeGvqo",
  "key33": "2WKo2S1tviQ9uaDeZbngFATKqNGKiJSwvcZm9TxBC2DV5RFLaRYgFqga9wmJVkyHukcoJQNWVhLudYxNTuBYyN5E",
  "key34": "bVFcoChrjfUJAQkf4wzkMzdgXQPZ81Wdw8EhioXzoFZyVaonSyUhZoatgL3wGBkKLC6W1SKe1eZWpZzUnhdiTkU",
  "key35": "3YK4eVyCiDfw4waHD9ZXXd2v8YM5Kjv5Cb3xuhp8xoCyosRqUgbkEBpWLyGnehDdGRCoCbsJWN5jc994x6m8a1Rh",
  "key36": "3USAaT8iwrHaJq4dTmQmYZoVKn7MbicXr8t7QDKFLaE4u4k34PRJpxxqxk4LnFr9UjwztdadMCBd4apYZ15n7ecP",
  "key37": "2YVfxspZV6eRi57ZPhLjYVR9frD13bG3PyUQmtHmG9H2HY9EmTqLiZgjwcWmsFLfri4Y2LuP88SVkPb82vMttC4Q",
  "key38": "3jEN9JB5JdF1kjER6reaGWQecZsZnAPrwRgMwPkJJVzDJKE1Ux7PikkVsU1mX62qETZY8seFgTpYpBHSyekcoJyT",
  "key39": "2a7uckCKRxcRA4exL6cgvScTG8GAPnPcLhnpu4JgoeNBXuPrMWwpi35AtpUZf6y2MTXfWXkgfmMekVmwY4565RwF",
  "key40": "5q1KVfZTgtoyvVsXJMptKadFBMc9gEMyUnJt7JAGBLc1otLTLtjMd29F9cKD3q14JXdVvUM9xVScApVf2fD174pn",
  "key41": "3jMc7vVtYEvPKSuR6UYvvLah1axqHGNdJhadeoumeAiuP3CgcGi97t4Nvpwn8YU4BTM58m3YhnGgNzgjUJ9AwtUN",
  "key42": "2DCqMX6Qyk1vqDRQfEk2jPVqPh1mHvqYfF3JY42bHfmHpn9aSWcnxUiaenZCFriqjj1aYAaHecCvhwadxhajHeBV",
  "key43": "5CJ2NKF15rw87x4vN9hQHwS7fSUVjekBZv1AsWNaPPVoMDxMbZvhDqFeALYLsWpWPvhPZN689Ze7r3EsR8aW4MpJ",
  "key44": "5JNTx1t1VTiG9dtr6LSruh5ZsD7HDdoLqUgfB7Xn8acCxU4F43hzyTqVXKd6PHNMQhkbJUrsb8bVfn4MrCaLKRdw"
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

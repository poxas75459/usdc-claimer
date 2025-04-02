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
    "2MHBrnZQmo7CGwkLAyhiiuY8BgB4UcFCc8dSprwD8gYida5oiwvUcTxhmuAzSk5mbBe2KfAxz6ppCeDCpxY9pWtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TkeshmXQe9s18YrYsDHnW4Sm67PgouWBkHzmqFoQDqzVZUaHKyATpHrpVVo9rww5mDAmx31Jc5NUKwyQRbmsmpo",
  "key1": "33JUYiAKTZDRmJPYtAycW3uP4xqqP3VZ3pX6pAWseUUSExgwPHJfUKaUzcRdaBBshA8aeoddDhSaqWfYsMgaZqx4",
  "key2": "AgQ9QUDHv7QHWiG9UfQYwPhN6Dn1TBB3NySbsHqNBnuewAdgHA4oWpNyQiy6MbYENwRhAKCJmdyHgYXqFkrhtdi",
  "key3": "5qYps9GEbUwvq3uzrVwxTEWn2o27GH6kuuAxJnJDQqJyroQvNxiYJubVuatEfR5YpgSYCoafF4rc9X6A4Y1AGnnZ",
  "key4": "5MH7MEhLbZx45vs3WXdRHdS242qKxb8MfhPgDUTLsfMMpDrQb248zuJsiTzxd7KPm4LSfJL1nRCdBca3ZCoga1f1",
  "key5": "83ywn7LaRQYzcPh72YpYcj1GEVDiHXSBs7cPPNeSfwrUcoxhisSGQk294yVUKrv42s2xjmvMZr6EgqUNQCbnqBH",
  "key6": "4FqncNcsVa7FhaXpxU3GeN79ZZUmgpKML3orDw42fKmCTSbfaTScmozo5airzK4yavCmKRCL3sqpsRd9po8HeeHg",
  "key7": "3gvSujwDKPvHwrD1xRGcGMMKztH1udSEGQpo5DVDcTac9VZTsGfn9HDWbGo5xiRJkq5bdUDyCewFjZgSG9nMisut",
  "key8": "2nL6cGQqV6awKpUEMrrcG3Xk9EsyfEZdBizLVpVvzN8fja7MC9KXDBQUWjaVsFRqqCMDuYNaCNarPPzFvmE8BVn3",
  "key9": "26DCGZsvVU1Y372RBznjLFiEzF4U3BA7nUSpLwRrQuwrhYA18NVuMjmgpUWznpNrwN2v1xS4kqiiR5yzQDtLXb9u",
  "key10": "4CXEQW3VhWxg59Luq5R2ckj2raJ3qQKgjr4SeGkGwMFM9rz5kXZuemkxybPbrFVjaizD8kJQhYtCXdcxeobmJBTP",
  "key11": "4J1SqHUyH2ctbVVFaSgHpQN3CzMUuy54QsaqCvjk8vxnZH7tbjb1DbFrM7E8SbSPy54Pz7a5csV7rqGeA3mDXfc2",
  "key12": "Z68ViV46x3eKqfcWtHvA2aGrRyujwvnQJi8RQPVKoGbmCZyo2txSFmoeN9vQavfgzgQriUe4LMDPdEpGnJs4XQZ",
  "key13": "33EFiuuk7oSWAvKbRW6oxFppr8dMQd96XKbtW9e8rA3UsPQkAKonqLa6YbXGVuuwFL4msgZMteVXm9m1VqzHufyf",
  "key14": "ruNcZoxxMjcZeV2kc8aGHgjs36EhF5BvteMX38cQ2kJN9JC7NDR5ucWFQNmabsoZPvekEggdHKBFE21vWQAvks5",
  "key15": "24Ztdei7hPw1gxgx9P7MXw61fRrgd1pebJZYRkzJC2fFKWCoUZrvsaSFN2jkRP8cpSSRFfWawZb4KPfM8jvnZ22p",
  "key16": "a6VEZL9V4umH29TuobkRb4yNvtjs6Ge6PC2bpwxsys3DPuFFLMaMtoWHQPPWdNwSpcwtPfpxcq2Ud52DmF3vExY",
  "key17": "4jyQCSdKxgJM9azx7bUv21Qwf39VaFmLfLwjHdF9aKYKMznF7z4aeLeSNp5GsQkKrNWWxLNEuLadPLxACcBpGh7t",
  "key18": "5FGGew5PfBqQVa6K7Z2uCVpDHzVU9g2R6qj3UfuizR2RpUAXgP122iUAvHJPKQoX8CTCMkQrkXQFG3qMEKp3jYMA",
  "key19": "5Y8kP7hPzFurRksbuf6EJiruiE2DE3tLgsbWBHD9d5eddcdzmyBVmrbTKZQKgg16d5Nvzn4bXQ8FzwKx4135BYTE",
  "key20": "3QkWNAafseQv9KBGgcEy34AoFpqHFp577QmKaLo7fZNJcpBPVbceAnioJ8S7AtJsY4rmiFBy9yfGpdPVxBmDdQNB",
  "key21": "5pdXj4WtiBABpw2asZsewCYH94urK1ajtq795u9ziVgiw9nyiwCJXpBAbUGtTKLUnYP3PhozbUJAkwXT5JJ3QYEQ",
  "key22": "4634QNdaBReahjJdjHNtaMHsyErddKtQawgSrStbs8NUYabnNw5hvVhTFXufH4Aec6keCf13Wq49UkdUzKBRKNi9",
  "key23": "r3RqDMQAHNMRcGi1HAFKV4EWVKSos3sefQbgg6poiHuAVShf6EJ7tTsT5YULPVtWXRwUHACQ77wHpqLa1wTVufE",
  "key24": "53X9eZy7VRBKixhrHzeKaDT3mdnaS3w14cB5zNRWCKkrEwHgFQ8V1nnWi7p8hjSfsD6twkKogqb4XUZvc8M4MDkF",
  "key25": "5awYuPSS2LAkdxjhQ369QmK3VMQGZ8FUVmBrgFfNGKPFrHJYk1kcjf4q4t2ehQTeDRJSsHYYrQZ654MXKbuwebwv",
  "key26": "5mcTEctVcdrw6yVj2mSYpMMB3AncZ7XP9XXZPJkERpwFKRyMxsHpmuQCeRHtqF4AdBvKwPGjRFx3y4ENmS44EEtP",
  "key27": "5eWbCzR25zeQ9Y4zMXe3M2BxT7bi2wRYueMwY1GnYJqEzwFD8jaNaJFsaQ4x4vpt9SXNcoM6AFNQ4JJhMj5qSxyG",
  "key28": "2Q2YKjE5uj3vYCwAzvuw7fqoQ6cfBWTFUELMYQ9K57xjC8Eym6BcCrjihoKScsNzdFhwQ8PXSDxg9oMVwBdWybKJ",
  "key29": "5LYFeHTZ2vuHXLkY3YuFvJickSt2HouCJrncpoCu4Uvh25TGgCY6cMtCmJG9Sr82X5UtDT6V9dTR7mah1JMAP1cT",
  "key30": "3APNGuY1d6CcsfaLkC9dgSo8pDHbTjbYu2a4ybwByKL3GhVNkXXVsxTa9oV8zKQemw4mJV5CdXAZksLpyqABXGTD",
  "key31": "5VXDKkso8cYp2WigDTt9F9f6HANx9buvLihBSaBHLYc5pnE2fXiHNrNd8abbeVWisdhCHhPBkcgcSTptFFAkd84s",
  "key32": "2eKxu9DMdUDY3yRUZb5KvNnokUp5BneZ8QXLmS85eKzZF7Cm9vsMakG3VMjnvFiUsZDK3vsFEP37BcuTSUfB5FWQ",
  "key33": "31gCopFKF6C3DuJPHncjMTuUubgyTvk3nXwHxi3PNXjkTuKQvw1mthuhwyaAnb5LaoDQa9gGgzysdUw4TigEui1J",
  "key34": "4x4fmBRJpoUcyZahx8iTZxAAnmTWk87wEVMJymqDDHD1n9Hut9fRNVrkm3kmcTHTGhTjYCwpcFrafBcfbHp4Lbu9",
  "key35": "5mrZu3yfJko9RsA7QSJy2aitSoiKVfvhuSzFWMcpfNGnWQdu5XHGY2bkfBzKBbCthvJVP1gTXeQnx6j6ZNsP1Qr7",
  "key36": "126oZvYqmzvPtzNQeUVSN63SkGzDBvtJFewistj6xfwqZ5e4vh7eYaXR6QZiyDgG7pfHBbZhZRd3hzoLMhBPUjkf",
  "key37": "5XifYpcZDDCDMtFz9vXJf3bHroeSYUCkDDqdupzbpzedjZfkAQSPKpWe7Bp48Qtg6qkX4ZdTS2ntUmhGmJ3s87t5",
  "key38": "5GsQXqPgW4EoojLDHHjxhYGx4hTDwkyfKhK6cxQaygfLjadcfRW2Qdt8NAYE5dtRKBK1jtbLHXfH2E5fYCbe7KAj",
  "key39": "ydiUpBttQ1fxUMtS1cRLs7xLfbYvUZ4GY2bGqUAJUEs7YFuwvNiWkSxXfXKtZRZmu1evYBYfhyco9gNBiVA2aAD",
  "key40": "3V5QYrx3kkZbg8CPLGUcY9CuXWrDKjFyGGrR3wKyXfadqw99m5kZz6kbF5o7WDghqQq5on4MjsEjVsBziXxgz9Mm",
  "key41": "4qoNRVnQKAkouGLJKK3WR7twbrNkV5zNHa6RscipY8CEggpeczhRX2goPGTgVFGMLFdvGcgM5HHGmt5e55rRTrU9",
  "key42": "55e13Ur3tzaLN9twCt1SjGt3LFdtZuh3ZMb7FtCguKSWrkgewRwonXg4apbSnorp5RtE3J3xreRmFwAuCoSPNc6h",
  "key43": "3C7mZ41L98Vp9Jmzg9d5kZxrAV2hMLyUbwn5F6sv86hBUu5ni67tbGS3pih6sY6zirFTJer7wQEfJvBdeaURNzUK",
  "key44": "5icqSZvXirGqXAFYnj54rE8GnsTC36Y7CbZhpgvfDQ8CjCzQqBGtyht7JBa59FeEj4M4NGFjrCpy4xtxbujsfQPN",
  "key45": "25UGXuvrbf58r4EfHW3DRxbNEjN5NhMQ1pisfT8fwzQzJ7jpBA7i43zx1wTegVMcupQj7oMzG5inWrEprzGKXXuP",
  "key46": "2KFmgmPzVu82vRzEHypDrJw5u332r7SXxmxVsc59WYrV2MkDZBGacCTNMtm8fz4faxmVzKJ1gAsd54UWDR42ErBn"
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

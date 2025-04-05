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
    "5UmY7afrFTzJTUGwmTSvvRrm5DBVebYHDaKjGZ55yA6J1ArBt1p7iU4pmuX6YLGAaTQb3R2z4GM4YHDaS7ghA7XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TmfZ8yzonb4C94AE7yHLJKjJ8AXADrNB3cUZatHX4WhK2noEUHkB8gwwdUKt29YjbqPvNfT48fBF7sHZHEpHPfT",
  "key1": "5iVuH16tcM5znedQNXdkyVSaMGB82pYjwYqydgG65Jb9jUaGNuaciLUSQ5abor5Vjc1yBnyDo1DxhWqD6Tx6q1Cn",
  "key2": "49fkTktXnXXW9pj8VF9gy7HnJBS2BRTDjWkXfAyvV8oUZ8HKzwNFq7faZ3JbEGdCt6uE9GVu3232QERHK7yuVqhu",
  "key3": "2jUkYo8ocPKyWuCdib9M9TxcCLaLAzpRy6D2zkzXS8fMhKwwQNGySjKWwZ575fnJCT6XF5Nv1BjjmA9fLq6JJjaz",
  "key4": "3eHcf1R6awnxHqyxpcsT4giTBWsREe1ps7L6zy4E3ycSzxJv5YYXnvokNvQEtW1zesVvCF5aoWG6SqmXA2HyWNp2",
  "key5": "X8gw9YoGsPCY1Tichsz3w2DhYFAaUuBMvkjQvXznUzhsz3Qmya3FtsnaA2iewFk5vp6kNzDQfrUwVFAeWLTFk5n",
  "key6": "5T75rptDhjpuenueVKYPCHDdMK2SzmfJ7FLojF4zfy1ada5HycUBfcDQXbSfxEiTH4bBxVrif9h3U2M8dbRJfsge",
  "key7": "2NxosXxWEgjPeCiYTvvs7dFAzzDdp2oAPtQQHbsx7dxmaCi3ymjrKEgACmq2xrZQ5f9gSkDBk9ZrtY6XM2dPmmAC",
  "key8": "4Zm9X75PZ4jrJ4YWN6YgsM4LJSgKaaNx9uFtgHbffa7txXoxX3pEDyXqbV7G1e25DcfERBnvdb3AKk9vMd8mR21h",
  "key9": "2PnVxxfZhojunYAumGqKU6NZsV237MfpM8ChYqkMBUDr1Cw2APoscmBbcfCneeFtfC6emHEvxPQHpBAfbJ6PsGSf",
  "key10": "3au14iu6f2PLobXKMXfoYncDHuYoLytWBcbsALXyuyNBA3SmszbWjhcSeVWv8EVZG158jPuStthAsV285zk1N8FN",
  "key11": "634ztRGYNVv7e98G2MvkmdbjeUw74f47U4mnTy6ozcxRigg78aScafG7s9pV6gmodLvNqQQkvPciLuBiMePz1Km6",
  "key12": "2NH5H6fBFASwnTzLQafp6FbD3md7SDMYShbCwSZnM9DRmUse16xvBUVAn7j8nkSvsgM7Eg269A9Eiqq3kB93sp7g",
  "key13": "3EM8mfQuP14foAA97xPjDUWtRbph5THgVkmdsLVLHFgLxhdKrBZPdtCzMhnCZ9ggJ7yvYSYtYdQ5TzfVSDrBMrch",
  "key14": "584E7PHqbMgG953qUC1ASM3Z5BM2D5jvcaMmZEMmWXDxJxDcuZ1HwwQwc6kfmTM5qpH82zHVb3dLmfcm6XuWrgSQ",
  "key15": "41M3wDXGXNVVwHQcR8amSqzoCNzzTx2AQwEzn7YXE9WDtdZFyyRQRdsrs8VkjzPCfwQwC7JUrtvkZrGbiqC1CRfA",
  "key16": "4jmuiAJU7vZoLgr6fY8LbmGH4miHXyY6e2dNbgeCmssNJEZHqCG26ch43haJcnbMVjRQRFpafaWshR3LpMeSTzpc",
  "key17": "3W56vCakpB22n5pjw695HdVngMpXXRh3MzozVUpeAQ6MyYXktYaLGzChX9DMoziKN4VSTWDR6v4bmrxUyujmNarc",
  "key18": "5c4txYMV9RArQu8Er4urPfzkkCGoqMRisfqFSDyHHXRvLtMw5TSBJsbG85kbzTMP4HiuJvSp3m36F1UwZHwm4K5a",
  "key19": "V9QRpSxsbnt2ECpiAr63Yj5dx77JAvePR3keujfHxmfoCBAZkm6NJRtmeuKXqq9NZEARrHSY47ByzNMdBUggtAL",
  "key20": "2WiQ9ASoJuBqU2NvtcwBEQG3jzyuVtFggLAXYp5Qqp2H7NgNbug6Kx8nj9LTnxsQjxFoAKbYK4eeTVkuWrn3Sqo",
  "key21": "5vmRWnkiac4E4PFKGzKPZB9wASXCj2TEgXXPShUscnhXJtoJsm3QSgFJm9tSQ5iKR6GejYKCu3vaHffA5GL6d1C3",
  "key22": "7eLndmhJHa6sKnDHnaKE1xQwcaSVXFo6TWuk5PoBLHuu9D8V85zWc5zCD43W3y7JeECA43QF7hto2dPsETPS9fG",
  "key23": "Zt6Ttugr9Cd24RFoMDMAX732kdspVq1cujGDphGt6vrhLuqohLsQ2FJZTbeZCiVzC9mtaLBNxYEeoEgxaywKEWT",
  "key24": "3wcNRUh2bsgbkTDEQrPy7T2YH4UjZS5d3LnSdGpzCeXU51bfC5MnyazzvkcjJXuiNKPLSaNXEzYQQcxjBUXmfEHm",
  "key25": "4kwbGE8dLvVSfNVmfVNQNFHXqFyWVgU7bABWpMto7xq8wBipHFj7GF1aiBHfsWR1ET93xPD2x5b26kWKagirdYnP",
  "key26": "2fn3AUhdij9wQgjBJB7LKDKpv9ctHNze9kbTVxioXdDymHr5uGbB5zZvMp4ec77CULJYq6js3JJsdZWRAUz2QL6w",
  "key27": "3PC1ZDCTzv3XyPTMZeADUrduBjcqg3uGjtT3Qt4KXNzohuYBEXkX4yJKQnXikKvb9437LsM46MgKZi5ZQHrY5ufw",
  "key28": "5wj6GmuTj5ibFcoWgALq5RVbqLSDWBRrkbkCzTco1ci3qxS7G495G3zoGogKonwioY4K9gx4RQ7dVc56fu25A4sn",
  "key29": "2kMdrvy7Ksg6RFYStfhHvNbYh1zkU9dKybQNCDsEykzc1B3p5Q7C2M4LjNnuL4z8yPv2GUHUQktoAr8CAKiRaDy6",
  "key30": "FW4R39Z9CyMfY4mzCKHXYNfgZHsNfQzWR8XDWprQeLaJKS7GHVcbbTEctetJtRuHC9fmAktK3DUY1guQtQxm4Kd",
  "key31": "5Z588Qg5e6qSTTtqHzYWScMdFTYKGAn3CQsxADd9smu2duTLywEArizBc279r5nqsfkd6ZJdZYSTPXdHK1b2VrW5",
  "key32": "3iq2Q7SmSRvc3JP2oHptM1zAG9ksa1SMo9Pex6fP2rmGBT2QPjcVF4aWRxHquZ3hTGE7Tan6Lw2RfhAFEPPg9Sh3",
  "key33": "4Ac8KMSBiXP8MGgUnZocDF3K3kSnLy7dAZ9kuvLsjFLY2Pi944RCb9ood1cF1sFK4ZWxmdiyg5NGAXr7tnJQkQAP",
  "key34": "33uNFRY9xx26BJnKLiKHuRZTvJbLH1XiujMrxMKknZGz54NyhxL4iDhiWkpMxgBReAscTx82gw1kJ7kMLv62GKU6",
  "key35": "3LzDAjPqBxen5RM8GPrSs9ozeWaah1xVmtChfiaMnkzrcUFAQmqMKr2jeTkNBXh21jYn81tWMT94hnUF5qZw73nu",
  "key36": "5dPjHQpsaPGd53yKpi4EWCLFX6HyyXtACibfbUTj4kWSTgNpd42j5TZw2kRxekctS1qC2kDwbmYFC9rJjKvcizcE",
  "key37": "52FSrQdZmdRmE6Vb9jjmvjCKriSyyDr3LRnMk7ghzQAumWEJupzqupgAXhBN8YToDHTNBsRC2an6g7PDVrTHdBsg",
  "key38": "4DBZG7VFofAops4xhqpoqmCns9yM6rGH8vVA9GgnvLFN3NqyjF1mdFSDPy18Zb28UFiGo18oZQbgkhf8j5wQzFCP",
  "key39": "4ip4CYuiX7HshDk8EvMvCDwg2VnceAgsX6wBtc6iaxtJPfqG3H8kGFubfrvuPBG8AtXhanDs295Mqgx18EUzJoiB",
  "key40": "4w4x37gdvJwFdR91ezBnWUhu9SvrLwof25s5e7P77nz9NehM8MiktQDdKsio1HzshKFt7NKFbX9i4k1DLZRGys8S",
  "key41": "4xcmGkHxRxQxoHVbVpF2rDCYta5C1LfRqhEGpvf6Kd9UKPw7Z8yLev2LTKrXNyBXEQgvdGRBDBQJMomBct3R2C8y",
  "key42": "HoYFt4cXuSMse86z66Q3Pc4Uqgc6EK53enGxhqugeYYZ8bsQqhErwZi848LoYxg5CkWKjWSwsBk564LtzpxJQKS",
  "key43": "2QWHCWYswBo7yVoFwvETfBHB7Mk7pLkb5usqTYQj8Ai8zKPJnmBLnjoYHN88x1P3zQax1n9Mb1fFpwhVpxhqF9RX",
  "key44": "mbGzVj4wwnLPBNZxi2MZfbGYnyuf1SzMEZquBtskNQPMUNj2ug7mDTW3hSUB3vGYj4eszZcKW9U5YkCVHQ7R2ri",
  "key45": "4hhcQNvLQJLm3jxNeaE44d9kGWkmkTCGkTES95z2aLoYuBbPgTPZXhoCrzAQ7vFL4Gf9cYThCp8g95C2outznHZZ",
  "key46": "2CoowhntWeUjwbsnngv57mqaygWviWQnV7LV4Ad383GzLtFYoKfZ3WjzB3uH78uu5eUDXAotrufn7Dxo5yH14jYs",
  "key47": "2GoXHeuLui1Jh2KCepibZWvtASBwb4qm78AiywF2An7414QfDyT8nP1io59szMrDxL9JvLRWjVfV44Am14TyJCFc",
  "key48": "43E8VbEgfKM1GjHpQs5MSeGMwSBBrK3LA8ZTJh79y5SWdijj2TScPa5ffUG1QchCocvgvzSDaYGSFKoiMgateDPz",
  "key49": "48unHMJ8MJehFqKSZ9E6sDTpBMnrYBstcqK4KKoJwbPXcz5YeL9QCdA5RGUHDdAZMfnbggH5x9f2nz7xBNC3TaCp"
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

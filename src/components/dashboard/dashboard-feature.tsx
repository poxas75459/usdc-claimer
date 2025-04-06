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
    "3bgrcUjHstpVH7cVzK6b1jgESAKMTYP4RCrrQPpREPYygGiXXRS8PHpKzyHy747ZSA9zmtNE5kfLfgrMRXmus6Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FTYk7VMYHx2mRUNBRyJUzYKfs9zHWbF4k4AwXhn5tDL5yUJTE5E7siXPhMDEukPrT5ja3P89LMBTjrQGvrHvSg7",
  "key1": "26h2Grey5YhQqUmS9vWKzwmiXqW2UeVMNhsFqYE339MjE5ioWf5ey9DSmoNpiNnrURPb4ccY2rfBDnJpbTjJCk6o",
  "key2": "5q3EhRhtVsmwYscjgGgpkZebatnZ7KTmyaGmxKM5WVSSD25foPUT314BGeJEczWAEzXSoTKFZj4Tc6v89qo87dwT",
  "key3": "5c81DHpLCwkTWhHWyUBfDtnrzaNHHe1CQ9qZMhH87gKa1HqvXuBtFeFaBeRq1kkhBtYMtm7rzZqu7rhmA36EFNZS",
  "key4": "3m9V3UCvXXXnhta5ppoG3PBK3PydcpcqnXFz1dWW1211dZM63thE4wfdZcLVm1CExDMCwFuhw6ci8Tdh5gAF6j5X",
  "key5": "d7sFz9hY1Z7CWTUxAXQi3HhYtM7wnP9fWhuAfhBs7AarykGRQWJ2QnNggo2xpk5GMG8gPZVC7c6SuCEVKUQeHaL",
  "key6": "28nKFv9q71tCgPnnZPtYU3HDR5fLSw71K2iswc9fb6Nb59h2AvL2etqd85apDk22stzW1YFMzGHWdoXxdYe89Jjg",
  "key7": "2t9Pzuw1THfE9X1qfasN1gKBxxiqsKqbKsm6fr7AGGVRdwUYwY96wJqp41xnZt4ZvoVaUSUZJ6R9JxWHyw9AFCTU",
  "key8": "5rWCctFsibM7GHndBF5N7hzntsfHJmLbDMRf9gf3hWDwH4B7rC4eo2PcQ6CMbeNfgjvFtpe2qmqPY1yEWFdg3JVj",
  "key9": "TPEHtz41vKaezKe5mNxp9p7Jg58Ud94CCjZmYJ92ZV8SERoBpaqz9aGtmtr92akLLt3t1Qa2JEv1i2jL9nRQBwq",
  "key10": "4EBrU4NcfpnkogPB3c88SHLH6BugKsexY8dZjfNcQeJbDjH3UKgue1aSjjonaccZtvoSrhhZXwQLRbuSoAWbhT3L",
  "key11": "4Vb9zyAYRzuzpi75UvbzPGKvuL8NqPj5AoeBNaZiQssAxU23V7ypwo1Xj6vRiKKUF8ZfpJho9pjnHycHaA3DJHTz",
  "key12": "52iK3kLiWhi7YXjJpGJdP1LiN1JEVTmEVAugLNmyJqEN283GoxZBwigWMySjzFXwtAHc3E5AWoUgWUPe7PcP9GZe",
  "key13": "mgPJ5tZzNP4ciQByAMMA4qvvHCzBWyUg6bzzbKTcUaX7J5NhmuneWgwDeyrEPRWnGYA5DS25iusLtRzLBS1c2nq",
  "key14": "5YPtfVYDHFY89GVTn1YY6D8MoW87au2rSWNvZTqe5fRKzQ7ULzSjuGzQTS4EQuqowqLod3UZVJPU5X9Gg2tHsgA8",
  "key15": "5NvYCe77Q5hTqMLLyGZT5FmYJyMMVMuXA9zCaxWBayDH2Qpie34KNazRh6zM2tecT122CPBrdNshDEEVeyQeq7cV",
  "key16": "q4vtnFeWpaJxCy8zVxy1qV7fHpEQwyN9jHGFpsFbS9kzs5hp6zwodTTYyi2xVSPuGfTAuWnnv9yiWD6KTb1vS6q",
  "key17": "2DVWRkQu4G2oLQM74pur7BGJiAwiPxZde99bzuvRSAXCi6Q4XpLV3rxid42FUqYBDtNb8A3WMc9m4nx5iEADQMw9",
  "key18": "624AK1c4FAEteQcqyRwk6JCSBPr2iHY6KVXq5xrauckFv3woLeTan6Jok25gasX4peXuxKjS7t2VZLH1Tgt2rEoS",
  "key19": "5esSUdhwrzhecBj9gSLMahNRFcw9qgUnZQYZ9K5VabBfAge3b5NmBJE9qxAPPKEE59CebjVRhjXG5YKVPfyrNRAV",
  "key20": "jkCyhrJyrojomkEb9v56gszVVHbyfdcxG4y78JdWNmxLcKdzvUkM3jgZNzgsCUL27eB6jeTgRJivhb9ojyE2Hii",
  "key21": "TKWZuoAQ43pNfAVUtoinbaFUdjNcTSVFCocQuudH69Nn9bhe4bqTW2tDhNEc4TZ8Ej7VH6ZkxbDCAcwJiRxtVPX",
  "key22": "3WXubNQicqsugQirbCf1um9a63nn7Axcom7Sa6pzwx5WWsHqbiYbMVATLu8kVWYEiUPWW86wdbDDQTcuuuDNm7Qb",
  "key23": "2nDmhM5p2TZBaPt9TqCAzPNmjF6WvUCZC4nWzxVZRfML5PeLra9VaP13bbWyGfc7dmWA4r4uDj5TC9nUpb1hpQDf",
  "key24": "jiQSyUjXFECQyArhj9XSbMmnaDc5MxZ1vvgozeBhn5G8SnWwbsDHjKbe4W6PYKyuqgYvq2sKoFhNY73steA8Lgd",
  "key25": "eGmG2Ei4ED2aqwSy1sWdHCLwf4Vp6XepLepXTimLKhBc5W74uyb54wUDcDQkML7dknfNuvGmvqMtNSxF1bb786M",
  "key26": "3z95k2BhsDiohiRjXsgnBCL7iKuCzeZkGub8PT7FfKZUyJt7KPQrb3dsetEfQfVQDdxVAMnVCvR6xc8ga8qbtbG9",
  "key27": "3bprW89AyKwnLnChfVKq5bWTv3uQLZ1oV6DWnaAQhHMvYQG1cmAcGmNBBcnEE7VfY2SaZdR27VSWGbU743a9x56Q",
  "key28": "5uoErJEoM55gQgtuDd7AgmVRQWSRABBEPeeeeBgVNKnDqZcLJQwHrECxXk1EmVZiNh7hDrZXxazineTJVh3G3M9T",
  "key29": "yRXTxUKEt4dM7yLpXCB8ZpvTxMiTthSGULiv4dPLQ98J4mXTvuJvjVSGQkZ6tw1ouhJFLySe3LhzwEHJXQBSytj",
  "key30": "3T2iv1CBxPaoi9rxuvcn66vKzEoXuTai4RP7v5w2o1DweQ9MzC1uyv3RwvqjCsur2edWJKxPv3yum4S7kwqsFkjB",
  "key31": "2Z3P2ykyArnqJDG2vFwr8s5oXfhnVD26wdSaPqwzvbqZh6JpJHuyvrCEucqVpwz1cDa3cVKN6ZahSLwArPXTeSiA",
  "key32": "2iSHr2KVdVsBSjpf4b1SSbWNwtYvKFvQ7FKwGGPkwkMVoSiayE3eCxvYN57syYQLWNYbPZ9nhP9tebhYd1Kg3znX",
  "key33": "5UrnAuzMQmbLG4F9kHcauigacHKSjMBRWmKDrrMykcXokoCU9WKuyGeaHVqvPjoFwWiRrCkFUuWfNp56MtEV1BYF",
  "key34": "29Gxt2Tehh18yuKPZbbBwfNjYnurz58qCKPNq4DwLR8trRDWEH8Bd263f5yEZDbRfRyEm9u7mmA4wddmRym6kdPV",
  "key35": "hjxseL9eubxdt5tDpCE3LyYBzkLvj36XsjKGMSzt2xUAFZeToTtAkUjzS9EFyabz3wY4vprBSpfAjmrzFH2spwy",
  "key36": "5d3DWpJnvGq1vEy8a6XuaPCE7Zm77rKsMJ2avPujc17Jono9Qi5q7kieCgbrRpcMCMMbwMQhmaShS3g6BLEGMZ1r",
  "key37": "2YMiHBqy6mAjAgSUj2Jh8nXUnKeLn2mjhgdufD9yxCXSjYqtBUrKD1RbBqaaxBZuSfxymDPSMyRVFVJAVFhiffqp",
  "key38": "4SJM6UzrhG8ii3EWBeHSU7aqXjFksMuMzyhWM4PZpRigkdjnejCGJ4cCn4t644w6RtpfzWePcVVFYbpgvra7icAW",
  "key39": "2kxVs3SXJDrpk62cvcM2YabdobQdZqF12ddMr9H6K1faRB3g4rGppzSoUj6rMjWP2onnMaYa81M1yi7HHT9LintN",
  "key40": "2fznh66Qj2xx4MPb5GXqgkaJxNmNFtCkzYD1UuzQmrXfEAZiSumPpR6ija7jN3ecTD5j4dPGyuBfYQuzn1FWzgut",
  "key41": "KSZ6svDkzFDhNiZVcxhzvrtn15G9HtQvTP5LRak9UJrT9TDcvTFdis5Z1rs2KAoa4yqnT2sCfrg9xsEhCtFWMtR",
  "key42": "5xKfpjmXcRUhM6umLZGvgnf9QZ9T3j4VYtdD6EiHUcd7TMLUFyv85NvWpMgB2DeTNNtjQVXRXT8Ky8iSZW9nT5Fo",
  "key43": "4z3Fe4EvVJ174fdu7Aq6Qpywi5xkPtzJ1yUACZm5FPfs9wK4boDYEmjtdWAZWncvqY6TEHjvtVkrTepN1BtRwcMq",
  "key44": "T1qZWLtYmxvB4d8cu457jnsvK2aMhMNn4GQPv7pDF1oY5JBhzqkFbcYrSGuRw5CfWcGSpQ4BoyytExNaKKWJru8"
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

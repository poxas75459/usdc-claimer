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
    "4qwJcqqbGNM3wGKKayS525VGrDx2wQFScsDBAZv1AKb819T9XUu7c3HNPXVGYxZG4PsCZh1wXLrhcmpVjQNhd7X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dd6X9b2dpzLPpfs9owZecQkSqkZFhKcXfvUUArQSuqqJa6F8CPbpmTCJemiWsdxzrNC9Q6VwjWfkZKnzxMetdfH",
  "key1": "2gGXtWQPVFQUcov8BjywckCb5XC9gjfcoziqo8P8SwaSA1hpk2u2SK2BEUxXTk2hYHazhZ3grWusQxcJQ7koER3X",
  "key2": "5FkFtzJNAffvonQAPDgY92Kvvk3kLgNSueEFcofnTvqa24ntttunt4Lko6NGnpcwenrbBYnJ2sdb5RhKTSkPHpy2",
  "key3": "4vkC8D439pg4LDihfEanRJNyM3ucShSEpRWac5ojzb4CWgcBmgjAAdPSqNXNrudvZYoerLUEBVypR2yqXJm4RA7R",
  "key4": "2ohve2YqY22PMyujKhPmuoBCNYoGqip3rwgPXNLQ5cuVsz6ChjmMGNBzgBkXgdSYJP45hS3sEYoKkvL68hnzYEpD",
  "key5": "34byMJWFiLhJrUqtoGMEY9Fsmh5BMwxBBbtum9edeAkPf4P9Hbp27xQbHqoUonpuJMEjjR36DCSKE23aSwrN3xvd",
  "key6": "2VSALzoHzRq3wPynQFdaXx9kNUXn46r7kqSKHa4H8ccLktfXfjE5CUcUkEwDZrU4Ft3UL2xGZAYSF27rYQuiE7MV",
  "key7": "2MuF5oz3GLCDzmEhz5ajX5dKuknZT12XGDkKLKJAZPLLZ9tAzdyHHEaCNeGQzAdDBVio2W8j6uGQ9a5mADPUZNMV",
  "key8": "PS9D7JKWK55gv4jeQweJVdBCEHXEm1nYGh48UGiJkY1VjvgHLkFu5dwvvqgETXHxfM2MPtM7mGuwKLrqUeySGg3",
  "key9": "m4v68gXP7NLaqECHX8R4kVYCD9iSgtEGNFKcSehPz45cGd1hkaFYKTdrWNtisy786GJW8V7rJoX9gcYthr3BCwb",
  "key10": "NijmmuCMRPgqpDPEPMLmz5QtEyLg2RnCFmHt8uSFGxokn5dMS2YonxQQgyUCFDEdEWSPaynzVRAYnArXyu1L2eS",
  "key11": "29NzNEvDUwjQM7RugvH9K7dFut6AUsLjYeCniVJNXxeeoC2FhWpT7FU6kqpUaj5qhiqxQuVwxbUZAbdPZqfWv6hE",
  "key12": "23gggpHCN7CGbLp7DAmSsg288nxkdBteGcN75w7KbMhDQ6p4Fgf7V3szKbMmVwt1KHULrkvA1ze58iDkb9PNsQEj",
  "key13": "4QQCDoniwUHiGdyCxD1CBoNN45hcvbLadWAUcYDe1QNFMBL7CiVzcAv5vaPmLzK2CAyxwxjyjFXuJpXgU1Eq5DDR",
  "key14": "5ogrxCndvPpV3SAJJXvQTZVAmihURqFK39v8yQ5W2sNiNEcrTU2tsmdaa5UW2dcFXQtMJUHdihhUD6UxeH9L125j",
  "key15": "2sf8Xbe86b7kPSJAntCLCgZVKW2VDnBf1YgkzgJumLA4g8RetPf5G5zCdNitVhVRCj3RMxenvMHXmEAeeZSf6vzj",
  "key16": "5ryg1cPfRLpRgx15vAvs5kmFmigupcG2tkhs6gfLXFPrfYj4aVj8B87zUwzYtvCWFCbSDvze7chGzG5UZWdTPkA",
  "key17": "3cPec7aFZ7nEy44bXqm1vpYMvJGfbXnX6yyagDu3ozEjVtzyDzeU6zRtCF642Dv2sjMcFPxFxk6dtzd3yLdSZcdA",
  "key18": "3KSGNK563FLFcr7RABHEkEe6dMn563eb7Rt7Acj8eu7Eaggn8ozyWcxSxAu1TwvoEg7m1QWhR2BrtXGqqUUGMjcv",
  "key19": "2LPFeRtgtSWCmpzjMkcXLE8EnfFoEsmoq2H6MrvALWR7dyUGB1hd6kmUiGvTJ1BK3qMw2rzsUjXFbFEATzMh7qL4",
  "key20": "shKmkzm8kYyYy5WWiUWGU8RHNyEKdKePNEW2A2d5jK9WGdmwTCBSG3YWiVGBM8vZJkrPwMCVsVWAC7fYuCDkcEF",
  "key21": "2oGWCSSCHx7oBuQFLe5Fxp1HsG2Nt5q4cU9vgQqWA3bHSqSGz2HrJxtJMSx2HndEAvpseseY5GjRHqZJjYiDeRms",
  "key22": "62Nt4zH5HdSAZRmmTpjJvY82aXV9KAuqvHwrUL6wv5csmADrStLqK2exF6agKrC4Yq58ujiDtyAWevXMn1QGxC1Y",
  "key23": "8TpWiqafCwS5VJHJZb3S2EToBahLnszFJrBkxpQi3pzN5TqW2pTGqJqUyPCEdiXTP1s2cZno61SrAEj1NwsbASA",
  "key24": "zwkhU1dvfyqcPxsZgLwjzHpcR6yPrB3nKjQGXdYpJ7jmnShPS6AwyS9uskzKUNRTY2g5x6EQTkzQnARMfMjD8E9",
  "key25": "5YxJdxbMxhx9r9rfDf45GRP8EpYMbq1r9UJFEhFFYYQ6TyixrraJnxwhR6nhcDXKYd3c14EfmWYeid1UbF4LMh4L",
  "key26": "4FpvM4SCqmGvfNPubU1FuY57Fbpj2So8ANAuUujLShGV2dVxZ6jt2s87FWBE8i4BA8yqmESmPfCCbWf8YapzzTNy",
  "key27": "4wXQP95WdPaz7hHRVjjCaNwtbESEAPaqHUWkUCrNXovm15DGy4Eq2C3jHTFFsoxZ7yEKxwuxZf1iohjavrEbon6",
  "key28": "EBWehCAnefwDMs4ugSQgMdT4ofCGcRJ9Af96BZBg5UvxhrU4y44k7zePbyXePzCsMQj47oQTNyKS3uVzaDCDsvt",
  "key29": "4oKbBASx6tPywfNPF9oSuJqUoSnyJwFqyNHKHpfcP9pQMybAz1es7U1fsP9xUkNSHBoJBQoCDPz6XWECHDWP1tjv",
  "key30": "5dXZ5vL4BYbKZiHhAmDYrhkZZDyt1Wxcq8wS4PZ4YqqKBZoFDTfpAJg5Q3sWPSAQWhvMeZdYYLWFz5GkZ7gG3MUJ",
  "key31": "52NDi9uFR3JpRyTBbDBBcw8vSFZf5uQNbD7n19i6p3SJddSVPrGDrKso45T95ZDQ4xGVqy1dsMi17EiGhSevggbp",
  "key32": "42sPJNH43aMsdWb12RocYcYhqVpdN4QpGNGH3uykVWWN65iWztngL8TyFPWrQQHpeSbRgMw5e3LYEuweuhqGiBTu",
  "key33": "37QRR84iryXVRvkAFBLeoZBkkkVLHeWszUtPV6UBwF7t5UXbqb1nBw3uURQCh8NTs1gxoEkjHXqTdDJE4RufQBu5",
  "key34": "59di4MeHSmvN3yqEcWEsot5ZHzWKfvkSCjDqdwgnJr2QcPxTKXT5i9iFBVdQdeWRL9Wzq7wyNP8YL6tn4GjxaWSL",
  "key35": "ueHy6ofm4yF7YWz3xEVbCYvog3iNpVAZSF5NrhN9FaPeaGxTcoNig8uUyqkbU13FJzcEX9sQXfbLApPAzUM666K",
  "key36": "nchDvkT7rrttWBsgi9KBYH4a1WQBKqZuZs6c5PJKnSUcYQgWP83CtB2BJH5v8Dq4A3QbBanDmdjsz6Wh3k7j2gR",
  "key37": "2JkKcgqPdX8xBonpAiYuzc1ux35sbfCsdQLLFA8ahRb2REqSrHiCuHsCvpPhHxWu6vHDECCYhY4PriBweJ2c6ZQo",
  "key38": "dzwWynf3zceYYzVhUnSMuZ2STFUMYSXjV12tBnVGA2nH1tDmSkQ4nqZJEhYKqh5aozAf1hEwdEAHW1wTKnbrp4v",
  "key39": "3ELmmdSxdiCqBWaKwJiWopJ7zJBtBMwEADpt4FTRPBerhokXRF25fGtaUo9meKvZHXcdNejCoJNYCnYEDxrYWecJ",
  "key40": "5tfkdTs7jTKFiNQn1p79bjqKyLSvth4UFXA17NTSbmrm5Ti1fWB8Ldn4xcRW3LW9Q42s3njQHxxdwJnrc5grTGCT",
  "key41": "PbAvprLDQD1qDxwAjtkxCt6BUdTnMMF4EKTi3aoWPgR88ATYugpiq7fCiSwq4KveUTFRzKcJ661sHdgueveM9g4",
  "key42": "649Ex7CEL2rkPCT9y2vCxKEKiAQvQdm9SJac6fvABJaCwChkKZPBtdLPk2Gqr15u5k5rM1zp26BmjbSc3ypDN8xM",
  "key43": "3gqHmBpmUMzsyEshuXxbf7RRyR9zXNUyQbktBu1Am6pAUwi2sKaQfmvPurPVcbeoFziNarz5NS9skjcmCVsWwHxN",
  "key44": "3kYshK6VETCVMGrdh1JUad2kLq3gKB4vzWDawvkwtcXz9GCuNKXosyhCd6CcXEu18jYYQwE59t3ebNMU8omnXtxL"
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

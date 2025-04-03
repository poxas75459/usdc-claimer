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
    "5XmXeBZjX95vaYbxJkX2wftAMP5bNLanxUEtegTyqiD2bHxzbAsqxbpQ9wKCg4owhZvAdeptDAbhZTZX2rXFBa1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yBGqTybyac5H53geBt2xoZ8QR5fcz65opcC2hyRTMwPLEHDMRUxphSiyiMWo3LCibCdEyABzFLusJdfbA66vqxQ",
  "key1": "3oFimvh9h9NiTF6zhjeevVDEtDzrco6vwn8dJTnETz6f2jNxiH7uS5hKv8HU3oS2yZFrjyUCeSGfNTy3EfgmGSAr",
  "key2": "5YVCzGX8jVZAgJ4hJXy7JNYSpZ9ky6qRqh9TVbJGmtC5m1vhwCLmKoNG65NhDvp6cN1Q8SDJmtPa3gPFgZBqxRgY",
  "key3": "4hNN6peu4XstpG5GqnPoe9oAbxrhXASvYU3VwpGU6GyFpwRdwJhqSdnfM5iZ6pRm8MP9mzRLxvJyKRVzfAYWkU2i",
  "key4": "67rk6FU9EoHqDaCVvzLvKFKXvCzCxqxgsfkC9JieyQLx9AKGPBujqoRrKEpeaSSiBspbG68N9px3R66k5L5tbnxc",
  "key5": "3a7hdTbdjqToSDMi8fhf3TCSXakDxMUQM8NxEj1adBiwiPG1BQrXCTKRqd56Aeb46pKVZWR1FkBNpAjredMGa3yV",
  "key6": "2SVB5WStm74zKGY2cDJy5ZrWqUta26zkrrWBJyG711WvViJ3kfumKKn9e4NDcuDBEwBprhwyAkSowQHnPJHKpHxy",
  "key7": "fQi97Qssm9uQWMJUNFDvu5RXxMRvKzYUGG72fbrRxM3cJdvukq96mbU76HUgJLiY8Q6f7nomqedS2QaTQrqi8wm",
  "key8": "3wJ8XQX1TVQH2Em3sE6Dqw1HWmd9Bz6LXytm4qVUz6xJkMFYs35qS7ULPdPnaPgXJQMnjfVy2gL4sFTzck7TFvHk",
  "key9": "3qSaxexYY4GhWxnkAEMnBFMaK3EUcSUDDy15QLteUSNmgiJ2M1eyHLn2aM4StxsDeSFehM5eJNuW1zx2e9igZRKW",
  "key10": "P3YBGRnnBLaKTjLXVaTjv5jgugLXnGb8RQM5bev4jBZD1Bd8CaK2bscygmXMSR5zhUnLgLUhZpjsvHNCKXjH2jd",
  "key11": "2acZQdovMRnaWKHKANK6zoLboDerXFxfzmkHP6eLF53PyejQaLQBF6PcrLqBCwgHka6QLEWzLBzpffeiRNDwff7F",
  "key12": "3kDVzmCz1doM4giS68KKA9wCSCrWABTenCrksoEgVmvgrb3ETyZZsVwRP3vCVyfu18kpYaXfs17PBiStXdsCyZQT",
  "key13": "3VuXVpfgznbwsWqinReCFiuUwbAWFpUhtwig92DdCkw3VgJ7B59ChvLUw8WP1sVZZ2QzvYVLQu7hxQkQdRfH7QVN",
  "key14": "5Nzveoo4SS2x6umn424s2We3oC1NBmBhxJi1WyUELi4h4tRuJKvNthhjyDmPAyJabLE2yyQrQVKXqqWGB6q5tTKS",
  "key15": "2qRhb8qeidMt2ea9M6ydNDqokUjcLAomcqN6UrSiAX9kxc2sVZA7GiRzX4vPvPvSsM5ZHGtTEwKyYQWPpdokue5d",
  "key16": "2YJEEHyZABuSvaHykjjV5S3Kht1SXzD7gFtMSGDFjeSzqyqV3Fk8suwQ5vZNutobMCz4hiZUretFHYRVVoNvcYCG",
  "key17": "4DCVHfFzEYi2ReXFKNjqbPtUxxCAmmCTDsh8ASZSFWCuPBt78hLTxXbgQh1noawsV7W1E39ssPYihrkHWbCHxwNJ",
  "key18": "2Bk6e7tUne9drNMHxtSihY9LqJEzFZhXDuRqxzkr24CmndQrGMnCdd9FosZbCrP99TG1EFumVEXsppmnJpD9NbWs",
  "key19": "2N17Bvh8fwpkDK5TWXc8jTkUmWQ2Tpv7pE6tBMwnr77boxgtoZMk1Fd4aUqd7jiVgKwT5E7tu5vPgq2V2sUy48EJ",
  "key20": "4yJS1YCsNA6o7UX8ANeCf92xGJPXyU1LtdqvAFkJW565fd9rhUzpoHbzpEu5SAQjKd2kRCS2q3Fz3aPDaJUJXeLL",
  "key21": "4UEnYaCnevr1sYKfZRWNgPK8xTCS7VM3SgztACdeLhbUXrh4Ym7RH9Na7qcG27cryvksDY1EXAFdzkHeDk8DMxFC",
  "key22": "5RdYU1dMsNvJvFvt7jdAxD76fJqyJJFq7mTu27byNiNbHo9JaaAVabY634zunzwAUukXRjLY3YKvsJUaGMY2FQk7",
  "key23": "2jvj8E7MGdu7iQZPhUwV7242mVGXiyV3mdhLvutp5jb3mpomXECc5nWZyUiSwn1ZxviKAajUx7F9jpK5ruJWJq1L",
  "key24": "4o5wqEQCWcJW7S7yg6MdaPvUd9xAjrmQKDy4DciNwwMEmHALTRSXDQ3D9YhCJRg3NEKxq5ufA4GSe4wj7H2HGSzh",
  "key25": "3GLKEFxzyQNkMVQqpkoGXVcwaYzaVd35EhG6uZnsFYFnA9yBpK7ATsWBnPZwcbNiW6ZUjGx2w4AdVQonZQYjcE9i",
  "key26": "3TS6rwc2LwojLUdv4CZoArBH8cZTUihHNGCgQeS5Vtg6ayFZkwuWysPGLveKpZCCMFHzmps5nQHQA8FsGN7eLtKV",
  "key27": "5kYVNRqjxbNBkZ7vUbn3qT7BMjy1ipzz3dQGV9Hxuz5cYh5eCiQyp7ovv8sS8qSzHqGQF9Wd5ADjpX2235aN8yyV",
  "key28": "3BdLNRRutn6dU4PMtPsijuDbLtizSZLtRiEko4VHYeCqMe8J8FyvAChv6GBFZ1vpwepKywiwYr7jGGu5q8ZJxedA",
  "key29": "34FkabeNt96CWfdnbYKR73MVuQbD8oQN3kXNJzrE8RYtFUzKuBcWo5P371PVVUewSrB9rjKook7ZFo99RwMWCrJ6",
  "key30": "3u2Takie766QnkPYmeEpThCKGDJh6D3U8XNxL8SkmMnMxXnPbeyL7mzTMqezkGzmGpuAqCT4wXZtSx9uL3RMtqW9",
  "key31": "3mq1syVCAvCxjKVfD7bkPpsFvwsnq4YTuU2Su9v6t1PydUBsegzzDxbghKuXTuWMQ9X7eFqFDAadmpRryNZwowtg",
  "key32": "3ef6ax2SA9MkYfFqmG187jntUqUKw9cotkkQV1tCd4VgUzy2enzKYmLMVN3N4C7P8VD9DRQNWZFutmtBqxzGNpRg",
  "key33": "3yWG3Fmu9jzZaaTtXErovrASJtYtXZwfYhcFxsdXYnDGnbPrvvceNywjKgrqt3f5AHpdoboEHh4FFxQZaiRJriJT",
  "key34": "3WoscLjsgN7ZzcgvW8HByZXdd2HDoimTviT86sUYx7CitCKzjGQhgLeqnE7PT4Xv9RLedYCTNLECANdkemJrcLxu",
  "key35": "fabLWjicgNaEeXbA9txKY9mBpGtDD8DuUs7kvapydLkXbvWEfBeSMsDyhWzSbjhuABTTTKibot1rEqXNjHS77u3",
  "key36": "5LfWTH8y5zp6R99YcgVQFri9pfoRCDxGNufRRAsmE1CEEM8AKHFmunt5Y6ij1UEJrbMeUVrxQxeijvrq6uSJTaZW",
  "key37": "s1bDZGbu71KdL4XSQRurYGKZF24AVQxddnmMwJUeX2NDFscL2HdbKKs3kK8EKkYG6H4sEXmKbeHGTQ4FifQNkyq",
  "key38": "5BMihzCDBnjS8vsrbvKrFCKzsfgnrKfWYsgRnfdF3zEGjRwM4uxY6beuM9Fsk2LmmwTLRJjfWW6EHB9WaqkX4RP",
  "key39": "MJsd5yCEK41EjKkewgxo8EeFMdgaqy3Td7ckovk5dhPwtf2KCCRcEXA45sF9tAJ8BtYV5JsLC4bjLZQfR5Big5H",
  "key40": "4tdjdWPDuvW8AjQP21xb2pMQTvQbrLGaNLAFtYrbvcvzSmBCTMHVnydRPqpcLkBKwocjiBzYH8B9muSPVfXSmxDF",
  "key41": "5FEFAt5WxuWxCrFgqupZgeZbv1dE8BWLEL3NZt9FQVoToRTxDC4UwvMwK57m9tn6YeELAg6Vn1J1R3fsDQiXaeCC",
  "key42": "5tJtjvfhmzXRJv6oF7XqwjxymEx7Qb4Hh9vJEnco12puARTyniTnoghdwFsyHd1RUZkBmuMDXFsPckCS3h8kxvVd",
  "key43": "2LCg4pZ1GkjEgTtD6xHNHiNnV4acBbNnQ4S1m7a9Hz8MYT9B1xkWEtuLMF7tMe6ffwzghJr1GD1UReAxBLreqxMJ",
  "key44": "3N6hhuEBq2eeGjrWTDUMUVoAz3C3LqCbRQU24qgWY8WAC4uci4Y7vPrTAD6iFhK4AKyTLSB2PdzJj3NcqpMZ1wd2",
  "key45": "3jPf1rvqYRYHDfZzdnLrT2tfdheH3N4YWtUuHqCEWT6MRdxTd2tUAyKgprsTr7i5KA68XmRe6GCdLdoyimB8a5Nd",
  "key46": "4H9eXqUQkVFE3znV1gHh3KNijL53W88v2i3rVQFyza8Xz9QXdUm7MbNJVEHazhWvYx9Xb6GoZuCDA73MVydiyP8B",
  "key47": "qH4QNyc2KgQsCHNpfUUC7nPHSL3FAfQwQAkXZbwbiUZaHwaqRG5j2Tq8Xqs66ucr6BcoGRrpszrL3b7JmaxsgkA",
  "key48": "2w6CEupr6bDHzqfdiG1krFhhXYhtBoZhYz5vo69GPxnqKVq5vFUXTDX4uzCQeeH5TitWa1QJrm9qYA7m1pb1MHPS",
  "key49": "29M8yWoZuWY5fYofvoJXGsX7BVf5RdhvSRXMTXLryJLQjjBBiGayXA1n41EYNft7DUzgfnND8m7vSgvsH79Z21yS"
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

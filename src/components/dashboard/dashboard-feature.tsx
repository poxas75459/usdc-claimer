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
    "SwjUgx7fUpnx9ep1r4CWVbVXeDodYZMUbEFF4zFLUQiYxXnZoYtWhhn6ixLue4tnd4ds3ULDHbYHENnTJFT7HWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HgbEYMLQAdqM6jfPtFsoNi1Dd9q7bn2wVSqkxzX5ATidjoFkQMV781uQ7Ln9zxhaUeB8SLK68A5EULNtm9KWyvV",
  "key1": "4aD2Sw2HsFZM96AyKUXJ9vPY8EAhHHvzumzo61Hbj6mEZ6L2H4whGqJTg9ERDp3dk213BkTuxiSPi81oYSRdCiJm",
  "key2": "DZmPw2u8d9qqPU44t6LdsXfPGnzAZc6LH9NSppLq4dLTvgPA7q8VhVUf6sCMp8cN6VRCGNohG3JEfCbFDUdD9wx",
  "key3": "3FVpKqqssqau2qmH384zfS3NmLLFES437k54w6ismARebsbmFooZA6WPgata36pTaDVcatT1Wm8q3RF2Mydd3PP5",
  "key4": "35jJ3HHjCuRuxyfogkLiupmLcSUdNdw6b67AB8fPdQiGPAmHxZospEg9F8W3KB4Zg677ojHgV7TFD4GJVN5f6ro9",
  "key5": "62ewTrcfekMZSGJS1TemVeJVWhS7sBf6VwsYdY56861ci4aJ6rktQ7uLx3H3T8TvWrsz8axDzYSLVrNh9bp2aMwm",
  "key6": "2BygWU3KWc98cNABYdtzqEvQos7Nsedps1Wn2pU4VtdCWsybB8g9Pn2nVDX3cn27Mc7Ap3XcDBVj49Yzh192g4VC",
  "key7": "UMmP7UUiRDc3Ey9y7b3ZXvWj6wRzWHzj3PcixeVGL74ZoR1vQM46YMXShSd8JowydNWVSisTNp2hMbFbTBf3Jvg",
  "key8": "xBC2gFWU3jDFtzYc4uBZaBp8cEP6EiyhreRyrcrRdgHd2AJiEQ2HA5XD9jCMEumdGqNshvoQbhyH8YfhAV6MWBU",
  "key9": "5SC8H8exL5wLddatMo6GioQGbwzkfFsRV9TK7rEg7523QX1LbizwRPQpFAJCUiRtu6SZXTiXJP78Mn1Z5xipsuFD",
  "key10": "5aqLngN8bD6xgqqAzUUJhDHXexMarcM52Y7RFUbikszdszh5dBPS9sKXuwTzY1ci1idUNDTKk4w12R2kgzpfNJFC",
  "key11": "KuhEaf3ub3U73V7p3Cxev1RRjdG73wHscKx8Vt4YGRH22aMa7AnVbPQMpVXwaRtb3YcPADHX4LiciTFSYNwcWbA",
  "key12": "52HnbggZ9b1ng9JJAaQh45x6eTNtSAZdnMsBmWWGAoSZ6pHSDcd1DpXNFXtNKN4WzJrxaPfYdiCxyjgZzEL2VJhN",
  "key13": "3xYWPY2x7vBXeLu5am7DVyX9BMAyB3sroqhw7BK5WrgctoLyKq9BrTsy916q9BVHm3sNCVPxEwab1xtf2Vncy9tN",
  "key14": "46zcnYDhVK8KdEJFnCeWtNstozuhhFR9e6USBfkKWGMMmZhYfk6U9ysaj4jH6aSgEH4byhNsQzVE2TB75HZ7pSP3",
  "key15": "2Yh1UUxFx82zUk9Ep3nmQrpgbyxXsGtgv31wgP1xCquVnzQtT62TrP7821TQu9RJFJieqLwuJZfrA7Ywva6w9gyp",
  "key16": "4pPKHR5WSrfzEi2xKaryBXsTRTsk8QYu43XarwAfPsBfMhQroK2RFmZRbuBSe9sPu4UeeSZzU7iFz4yc3TZNzMuL",
  "key17": "2YJ6s9aRfSD84D5rpH4ToeE8XbWrKMXR8J2X1QuowdsdYqE2p39q3g3QNotPFMCtx55RVYmHKWF9Gs6Y4EWFui21",
  "key18": "a4PFcJJ6eax7xdWwb6QHxNMQveJJ9MW4MBuXjcuSMP6LuFBfpygYA9b61ZA99i7QJAi6RngahG8TTnJBpgKNWRe",
  "key19": "26q4yuoivJECGBmiCoZVjboxFnkyyAk6YViXh95HKjfA29zkcB3iom1aF2uH1XJf2LGRr1KVgSjasuD7rRHq5fND",
  "key20": "673RbaeJBGSV62q5yMbpvh1EZMZQHdgP6CfC9jKmXnxrwrXdvcsbyPSz37CTGqaBhsVjBdSJQXRzzBuuFPxNQAxn",
  "key21": "4uM9jKD6WnHm1gabHkEUKh6sQnkdUiqnMWrAMnxcPgW27Jyt6qJe5Af8BGi24fppNcab8wpMdo7M33Yy1Y4jmbdz",
  "key22": "W8zWwRrNLZ6ubgtiZAAz4PWpjbpDyRTbYSCgfdxVDZMdojrwXWMcBiqu9GkAxC1e3V44JMFz5ACwvPpJTfHdaec",
  "key23": "2VTQAAu1EMkYNZ6tLELvWoXtFeZM7C4gjD6rrw6BEva6f1zCA3YkexxDEbsavHUBS4CtrUGpAWWm4VNDoMc1eXqq",
  "key24": "3xYKN4T6fQrURppU3vViXH2NbwMZ5LafVf6Bw3EF5f2EKycPiJsrtpvkWiHJ1hZ4vvzGnjaeBsMWQGC2LdwUzo9H",
  "key25": "a3BXVvQtu1CGEjGULNTgrrhvZ8a2j7cpkp6f5kBB7EEELRd5dbAfNxZzQh6N1B2TnGTen8FH9u5wZ4ZFZL14NUi",
  "key26": "2wRiqaSwLtggaLJCYe472fD1EUWDuQveoSGD4rZ3Y6yhitPryygfE7ueCJWcYe2iLgNmvJj7KEairFkLLSmcE7sS",
  "key27": "3AoCA429eCF96qxv1APK7ETXLwG9FibFQGiZ8FKowGXLYEHyyVVJw28UPTLC9c8zo7ubPQc5tmjifP933eAkkpHt",
  "key28": "5nogarA6GC1wwdDm9vQ5uWCfkyZf9Wgj5fCrWtPyXXA7rYpAfWUWcZR9kQTi1upHbtkL87fu58V4o8jJ6xHpZkUn",
  "key29": "5MjX7eKuobtGqqG5YVt3hHi8Yj8btcSYK2cHTzGrk1pUtxGBsws4DabJrHHPh6EY8Yrc5ZTK9UuB2D15WmNAe5SU",
  "key30": "4Jg5FmrRdvVSss47NhTXNfym6aoQ8oH8yRbwbrbdHBynyjVSXfRhCeMhxrXQPxp5kV83fPeg9HJ2LUbsdH3s19s6",
  "key31": "im1RC76fsuUK3r44dDfJhtjeqBpjpxv8GamnHGuc4qpBpywDzwHpevzgn7Lmp3o35PrYLZKvAsdLgFPzw2KLsLN",
  "key32": "4TcY3nUuGRt7Ju7fS4JFAj8DyyNgb239UnumZf5C4RKWxYW7VQMqksFDjLA6QT6y4jvKtzeHddryQPNoGvjTeWdN",
  "key33": "5UviqG67dFTugeYGf1jbK7QMjC2Yhd8fGQ84bRJqDTMqjbtJX4PGNMhdfzHmKidpHaRn8PCdBUSQD4rMJuc2pbSr",
  "key34": "2fLHSLNrKKxYiWt5s7irQiGWGyNaHwYtQhMhQHfJXkydwwkhayykoGr7PMFn8ZaGeT1oGvVYzmSYdp7AVu8WfqLo",
  "key35": "5HvAu2BXhYuCmo6G8xrv2k2YYz7rG5HbRo9hns9F52yDfe6Go8Wwu5Noan91GoDAqUwB5zzLp2tvG3Wpp24ypkPZ",
  "key36": "5CfU1bmKRrwJHGXdgxoGtpy5gW9RTuo9AKQf6RtMDR2cDtf1AgbVqtLSNoDWKrvjtqUpQY1NUekfcGVcf8gSyY4y",
  "key37": "GaN7zddgvy7YH9DExdMjsLA8wWEyN9aLyHrXyATaQu9DseA9BUG9ixbhn96Pubv1qS2nWJiBLgz58VNJADCrBJp",
  "key38": "Ht972HabzosQX2LaXm5nv4GpXKC2M6DNBBxo3R6YuwJguvP6JMUwAb1i3jqYYFF3G3SLrirG4XWgC22FfgLfJqk",
  "key39": "3itnGfgxtHwDgnBA47fr6aNVMHFAPkwsBivyVbKNvsUPd8SkrfxYEsQViiXWqYy51ktmd87odRLTnHTNxedK5kry",
  "key40": "3GcymMsvGhoARVajm9iAXZ2Aoy8aPDX4MQSpgkAnVGVqM7CdPVbnHxz4r1FUQ91o2FiHRPYG8uvjTE7xAfurcYfL",
  "key41": "3kdycBMVrfdEcC2Eva4S4VRRjdVW37pEq95AEHmfvRaJQDSkZTwDkvf7Vh3AoEh2H7khrNK4Q4q9aBH8z9m5P7ZT",
  "key42": "Nj3goCPebCWAT3BvuE8q4sneSgU7mepuCcPmpGq41QQwp8aexCKZz35ibjmJ6pj4eo8e5EgJQTCcu3BSgskpxTG",
  "key43": "Y6hbfhdB4wY68aB94sY9t1mMsTHBqiLykh2JP1Lx7ME8XFXfWJ6LD3HYjbdbwRBDtqboVjAmUqDKPfhE2Tvcwaw",
  "key44": "5Ne6oeAARjxcjbB1dUcFLhVJuU8XwZkUchQdG346SQh6sB727TTdq8hKjbqzvuDrBuNaUE8BpwBGgSTxjz3oBeFA"
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

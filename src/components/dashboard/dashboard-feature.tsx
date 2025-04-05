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
    "2MkX2S8CebjkV5koZ6DR9pTiEn7X2az65XqJ2PfiCP5m5UyDmpC7JXfb1sC1UiBXXZGH5oJ7rGktmQ4CTQJBvk96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdeuaBACZsBYRGofy6q2fMfGxYDjTnB2HeBR96ZTwc3sJmzxu8zyHo8noGMUhHwPAgi1TdXEv6tajpnztx5EVc5",
  "key1": "2PsfptWAvPihsfG4JAgUXLumw3jJujSZLe81YWBZQodZNFD384LhHucaDABsxb1oMFx79bVMpoihUfWgiv5AW4iW",
  "key2": "55b4bs2STL5q5jyoEB2NdQmhB87X94bpM9sVUQTKc1ubMXxHKxQsj5BdQ7b7pftJiQhd9MJLCVZja1erSqd1UoJu",
  "key3": "5CkSY5VNhRdPcEKfhFMkktdFRSzM8zrNRCGMus9V25N8nB8MGZjdrLiKvss9GfPmS8rQNMhHcb7QgY8D2HUJRWYh",
  "key4": "BTZmoKmkjSG6gzWdnUJnPjzY1UoLmC6dYXoirtsFGcwAPBjH3xrG2eirCrrdETLkPQvTo3mbJpxkKo5NRaKa3TH",
  "key5": "4hpSkEWyCqMahFGWysvxUeGujzZYtS7imHHAfNR52ZYV61YK3apGKRMF9NoQZFPjH6niQDGZJxvs1ZFnFkKdWKMo",
  "key6": "wvS6wo5r6WNgumixNmXa7GEwZWu9svYeg3Cdjv3LRABazpKRMxyvCSgZ6TA1KHqwgoeLmqBRm2745ULLcXVhDX1",
  "key7": "5Fw37KpprxkhMiKnDoTPQH9wcxVkBPKkaHVEa2mJXQQ1YWTThUio4JTnMP6qmnpUWcnu8e16AFNjWDTtjD1vDwBZ",
  "key8": "3vVf8NKj59wQaKR8Ujcj3TjMZm9iydKAiwnL85Vn27Hi6a6Xy6Nb6UpRXeWNjZUwjGVaPqd7qbNux8Gh7jMCJdLc",
  "key9": "DNsHmD6M8VM8qtP7tuvrP6cb2x4VVQLVXZbECBqC3MoYj7jEcRfbtg6mU5Zw8dnqJyudAWmHBaBWApFUHx5Zy5v",
  "key10": "3D9Muh7bDqxQj6AqJPQ3ueaacVYMjQAWtooSGg3C4dJwLjv9cVSo6bMmdscDFZKnKxDRS6qtNwiiBTpV8VFiLxCv",
  "key11": "3DJmoETwpZ5orX9bnsAvz1LJML5aMKTSS8UfcEvvy23MMgxqZzUQ6rs8wTm1f15mJLsKhu1dDLabWBUYjZ3PcSYq",
  "key12": "2Cax6Yii1JuZ8JXuudYdAwi1UToreWJpiTaKxFFcoYwoL9s5RMDDxVdESw84VDDm4BqgSxjhuP8rZdB2bwBpPvzQ",
  "key13": "532S2Q6EMJPAEgh7dACnnZf6gHHasSkmyhWf5MiKDWFhoqeBhXHqmuQ8zL3sVsjwaM8DdWNU2vpxhtMEZubHyRTZ",
  "key14": "NT3fWmAWuTCmDZftKB1mr3QdKnNgRTfTE1kaJjEkKumCZikuq91QLDoCi4hsXqRZkDDnSu9ztY8hQaFAXZZgRT7",
  "key15": "3AR3EiFhXD5MBgkWRLx2LhGBRASu7vfZYLEXwZ5ZyrbTPZcA36gab2neWd2zXPwgJCCGjCWXvPrNGeNGoEBEuntr",
  "key16": "54w1ruSKjcPRMzEMocUE7tokTDKQwESkozWPCAz9syCpZieY5VT5e141HjPoU8NojjsePmdbPtW6UAXQf6svJkU9",
  "key17": "jQrB2oQxC2FMowUGZsijXJgoz56SBuu3Vk4ANqusSMMcbtcS3u9DACGm4ENwCMupJXmCchxtyrXaUNKQRLFPYdq",
  "key18": "4EcKungYiM7hFvqgN1cito3TU6bKu4X2R4tcgLvtd1oHfDGVV1fS6vQKSguGwLsZAxeopDk6mzBXtBMRoCaSDZna",
  "key19": "8T3CDaD8ckR9ZPFJ7CA4SnuMqpXzV3yXn5KJX2cMaTmjVLvbWKqo6BDakLLHkt8iN2DrjACzGzJoJyPBo1Jc1we",
  "key20": "61LeNsuHf57QsEAqyzzMb3CxHaRQWeRcoo2DgMxSvraC74u9y7j8xbzT6MxczNdiz58YBM34x5rvjkXyLWvJbDxH",
  "key21": "5bWvEvEkeLry8oMjS8pLoK1wuPBAffgHoJ9UwAVZ8pDLEaEGaFeWr6ZhANKwyDz4bN9g4LtXYdVj6hqeoxpscK9W",
  "key22": "qSFLPBWGjcC7JwhqaWdJ51LWMZGuyFTY3TNK4uHaDXsLfVcbe7R5adQQc47MVbym55XVXejLaHCNDkv9e88NuCy",
  "key23": "5YqixYLYnvJSVgXCKh7NVssZNwqFzZKjgHb4dfMwqvTHR7YecrbtHrDSKDoxS8nrTFPa2EiDfaUuLeFFb7bLykjU",
  "key24": "4PNS8q4ubMG17psz3VFoiPA4rLWFrGFd8SVGyqRa6VJLps29YSg9KBiviy1iFMhaRFBmURUGspnoK8iqNwnafKWo",
  "key25": "34WzWDFS2Dbq13frWqy917cYFUuBwftYMt4JRzUNbQqzNWSRwDsL9HkbGxbqcsE5kh4UkmDfLuZjVMBae2x2hoXH",
  "key26": "2nuiophc7NHmW5Gj3FLAeRhF6FiRjesjX3qzPX6TJ2uZj9PC2u6nLKzP6uj6B7pcxzHxJm6ABL5qT39rF6s9UqT3",
  "key27": "3uk1wy1NBEfNJgVESj24GqEyk2zTjoXFHPLzymidVHGC13XbH1LUqy5bMuqfkBgpnpe2w5UFNhN5Lq27hnumNpEW",
  "key28": "4FAP4VZcqUKD9uEn987y8HRgTcsMr9ax4pMZqbpitk4LmsACwnx5hND2PBXtkvB8av6PyQShnkzX6ikKFror1aad",
  "key29": "5eKd8SFcxxzLCk1dRspB314L6nFwm4G6coQStqgyzgzLxPkEnSVV6CRA9kvDKNtgs1Cupk4RzKKZv9wvhpUyUNyi",
  "key30": "QBWpfzEGDeTS1K2wunhL8k7QyMFsNGTAMS5kPFbwBdCaWXU1LNYAcwjHvxJwPonix8MRTQNVBwzqCdWNtRjVUsX",
  "key31": "5eMvEhDJYL61z1CFCssUcPhbEtC2DqLYNQy5Q7FfNSEWiyyV4GLhkc1L3T33HyfXxammkbGJf4wu4DuRL7TAHEVU",
  "key32": "4khuCyPSdsrunqxc5zN8P5CP2rogUp4xLJ4Da1b9feLZws1scphZsEMHnfesgGpDZpuop4ojv1rMafC3Z9G7FHTk",
  "key33": "3ZUav9TM7FcCC1652GeJ1dCSfCRZ6hxVtW6nGUKB6BnTAdYm1bWjXUqxjvFZaFvtPSrwt8EtGhkWQ3XrxbptKXtU",
  "key34": "3EG8LXdL87uNEC6TvaAs7xsCemy9KdXTX3esV2fdmjVkoxbVtENop2qJebcWguGAnocFx5GELm5jfaPU7N8pEcu2",
  "key35": "2PSEX4RY54Tv1PYQvtuJ6vUpRwK9SBwQjAfpXV8FycpSGQ8HQ2CrGE2GxAFb281FobADCpigQoF9vHjC2npxCTG1",
  "key36": "5UzPTX9f1i5KuVmBKBqtoVtoWGwQfcnsk7JbhjZXRjYeSjLQv5DV5J5qBgFkCyAB2kZA1oooWD7JSJTKAMZEEx76",
  "key37": "25ZirYdQ2pjBhdEzhbBzFk4FoHjx2DYMmr2GeCtVKPTQ8N2L8mdyCKiPcB7SJUas5i3e5evjErHMx5TUanpRn5mn",
  "key38": "2x1tVVNgyRoogHwYjRBDtij1m4SVjYW7JpGQw91gCcvyWAkJc5bqN1tXaRMEvEasxU4SnRny77jpT5SM1HQa57w4",
  "key39": "3t6TDvyeRKCx31WW3cBhWBUSvuSHGb4k1QdmXWBLSqs38Eg2LqAMA7jYmb5QoBCHWq34bFvxU27965aSP1cBvrhc",
  "key40": "5rHU7DbLkujixBYNT2N79TtASM5Ypy4XarW97uYGG4NJkATSCeXunHxGk8dSZofh8Mpc4j22Q27yjwMRjHwgsdmi",
  "key41": "2KSKwsxr3hoempPMwppiCdwNXs3pvgJTPvg5JTEp7n3wrDNEWPiJjs63mh2LJWCkJ1a8VLeUvsBTSneQvEpxuCzP",
  "key42": "3NsZsoRkbokQr4bxZW11vq9ymt1iihx4wGNzNqg9zNJsPdjHSdMEAz8KhzBHKHBs8h5xgyxY683KmzCYQxN27xGH",
  "key43": "4Rw9Emk7FpMxjVu16FeWrURvJgEtFuv4Bi3HrePQmbmhPpVmZQCpenxmVb2KA4SvQwj4CzsJ3LttmgeZkkhjqAgD",
  "key44": "5MrQRz4dPv84WW1y8TTFXuExxLkrvmwRV41wuZzQ21yBDpP6QV144FBEfwvxuYcK6TRKChM4zMpSr2WeeD9DXG15",
  "key45": "5GnFZqCtVuw8UsPUuc7j2HMyvFDUHn6VhcDsi3cdbrawA9o7AW8nXG2NN5qdb5fWMv7c2BwCTt7ae7yoFvX3QC6s",
  "key46": "38s3GHSBUK89pcQSDLhCdGb7UEmzyKraGzAzh2Q18WBum7iK5NUWWQm55fQF7KG5Gv4m2F46UmQA4ZHRV9t2bBsf"
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

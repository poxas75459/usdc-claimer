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
    "56r8u6jLXDqQ3FuDGVNvEuLXBgmoT5BRdQorCFbNNxZJZDw2hgMP9fWSjonbParkMVDasos8CqkFZnVhejRstzgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uP6U2CWAhgEg41EsRLCS3Hr7sHBdE1bBGs3rXXizzkaHPgJVUbkJvSBZ4vNmfFKnNHdtPmvUytGVRshcMFKM9Dr",
  "key1": "4a1uML5xJefZttH4VyP4N6THheDa35QYRvsiq6UCNVFiDbzTQVhzVjNcH1ZzPfxcru6vpyq8gfb2KFjj9NM8hrFF",
  "key2": "xUnMZMcDsEVucnypHSvGHXppcdsst3xjXPCUhBRHUDif78LPMTfsdAf1N7m7S6rQdYHBGA381wqrowSrUaAndQW",
  "key3": "2GHZGdbMEKuYsfRRSoNmzjEpckcG7dLM4UDtTLiYtCJEq4yJJVap4gPwDPDsTYG6oYX1zEns3gxVpbuNztWKzWQx",
  "key4": "2bPL7sEEDmPPAHaSFxeDLAFdwJQRqD1CJpJ4X6WKV53tTetNsQJ18QkRDRnHf3zwurv22PPMHDLXmE9Cb22juZJs",
  "key5": "rt4mquB3xiCoh7NVkUGF1K93RvrURSz5zj7Ku9DPhiqBD4yT3qaCpNEK9wDjaGjRsjtpGiPAd8TMm3HsXZtpUW1",
  "key6": "2cor1jbB75g4JRgw8EsCWxaJBGdmhuLJcaVjSBRTQw5YTWKTJU7ViggCXHP7BndH1wTgkeMzovWWpvMUcLZSZQtA",
  "key7": "5Kt7J8nDdDeHuWHFBDbZscVYV5YaZyC1AyL3SA1ri9s3Tn56UaWYLqfBDXdQqCuDhmDufrstPMLrCAiCfM9yH27u",
  "key8": "2xg8gTiFWCY51KErVJf4KvDo36Q4Rjve1vBAzfAVd8AHAcbRboZvwSWQDPMUA6H8Ux2Tp2LhWNzmhLQ4ZECi3vBd",
  "key9": "44jas1u6WRDgbU9VuFCdomdistydmECyAoCtqULvErJuo94WYLQJTngxtHn1hTfc5an46b5g5x2zG4UCo3GeH4Sq",
  "key10": "3SYEkMk16PxPk779E5oNMYbzbgqPPMXXcnr4BWqbkYJXMn6HEWog6YA2AT1MBgyzwHLQq5N2fq6GhFEWWdHy9Yu6",
  "key11": "2nUg2bnrt2cde7fbrg5f1GG6DdQkRYe2RKrqAENo817R57w4hkCvnnommfmscfFbuEMtfpTcMVvX7KqJ9kY7Hvre",
  "key12": "2ML44XZrw7HseYz91KQWnjoPz649QZ1nyyCYsDT93iypTvRQMPpDEgTvXaRwPE7HNWofdsq8TENecNiDMtpQHeid",
  "key13": "5855gyVULateRUS9nHiPCTZPsp6RZ4CDzRAkNuHkZXQek6inkLgnQjya3eFku7CRe85Fvyi4UKGvv9Vm3B6zRP51",
  "key14": "2a3Z6us1J5xq3SkDHsGN5vTATqPbQcW7yMPequEyT6TSwYy7EN1nvVZpd2QmiQm1DJ4orkJkW8QHeLBBTHT2S4QK",
  "key15": "4iKa3oBz3ZyHcjDE5p8itadnV3TJoVHkThQZYjhbLuUv5CFxZ47bSasDyVXeELp1vpk3EhZFJVBU7q5BL42X9uJS",
  "key16": "5Z2vNSbtwGjdFUSssqXSnLYAPgztUWCtv75EUXKjA3uLhYVfee3Eg4PAZYNwPzuj1Ckfvwp15REtbt94RRjvtYBB",
  "key17": "4YbELa67ZNJoowu3AyW3v99nEhvrFSmWo8SY5DyUbs2JAdv81515V8HDso1PuFYGwAAE9myBroC84TTVxYrW72m1",
  "key18": "4ZB1SMZn5p6pt3fEciUT7VXJRBvoigBrszSpB7AwtCdycFyGCcbZyduEWXpFyncR6D92drK7yQoASAqsgn8szSmo",
  "key19": "3TzuatAQ9MyD4KQNEQjJgSzcwmiSFN8Pgd9sg9quy4PZ98dfRgMm7LAvSYtuyFMSM4RZ3562eKV8N1bA3JJfvvpS",
  "key20": "4zKo6RaSXUZj6DkSNqy49BMQQA5bGa3UqtsU6V8faQ7GN6Hp2EcggKjk3Pq9rzb61uqiJc7WnvbLyw8kZe4MJLYp",
  "key21": "4tuzmm5MwtYyBEfBiYwfNj7SqmDYx9oFa6PUb535gZhyGP67xKcgekC5FHu3vrcDGXPgvJ8ZJ8pzyyhp3TwtNmC1",
  "key22": "3p2VkrhFdgLzzhbpRHqAPRQm8ZoxS3JX6Cuo6ZR1eevMRUksRnoh8CeifeTAfFb9sL1KexE9iCV7cYNYb6HUz8AT",
  "key23": "2uDNHPMcp9UQzaCSZg5vikMiG5WNf7rKmbsiMTAxEd2cDbbG4n93GuZkqCNbPniKx4dwBKPHAJyxT2TkQXuazHG7",
  "key24": "3mV1ijdCfukHJU7eGJFtxCUcnHh9tqetxU87vTzY3WksWjpgzyg72CuyMw7cEjA9LYh5hAkEehwLmjyR3gter1mJ",
  "key25": "2CFTMZPS49adpu9jvkL6oFh4HJjqEmqvyzpDRLMEkXM4JoD2ioE6NjAEvKRSJD9g9Fy9vPjSap646Phj3BtzASiQ",
  "key26": "fjW8g7vE6h5eGNZ5HyWgYsPF44CsCwDz1QYUQ7muTq7zmj4WrLwdwaFH7oWcff2ThW4eqrxBFASGUFGDuCmwdLa",
  "key27": "25THDPieUqpvecmknM5hSvv2kzTCW2AGJuGfXwBH9cWg6yVbA5DF3vUTycv5BnMpguMM1LyHZh7nQUo9GBMUTJjn",
  "key28": "65dFFipVdj3pS5nn2acKHBzD5PRswbbUG1omd7v5nmuZHPSi1jXViRtfRYWVg1K59EdyY7JBpbi45Dz1cH9Ten8N",
  "key29": "tCP5gc6FkdfHBeDymMoa7t9i1baDsyADFHvJPxxU77HDW8wzvEmXVf8p14v3cmw4T6TJvttGCMf8izPV2KtFJUz",
  "key30": "5q4MnEguCfRv9gUL9EzKZn8XTMTPFHfe6q33pgudbyPY8kJdPz7AgmjkS9GU8qp3geH1zTTmRodvdcWAGqHpW7ch",
  "key31": "4dBNFnPsErScxJtgq6xo94efQUPY2y9sHBDrcAFjJz4gh4Duiay8jW9EZ64Tor9Rq6xwJFGGzA7atWAfKNnERZLC",
  "key32": "D5688KJSpqW8EdvmY8jZ2xStubVsktTFh1CJftdSiPLS46PfRCZaBoQ1HZT2yifw8zJKenMVM7HdEonS81fPQvA",
  "key33": "3dSthRSdFdBY6mfwQrGkN9MLGFsn7XXpaS69TTS2tVzz6AH85NgbMmgG4yhV2irye5dSgRJ6gLDitSH2x8qbg5oj",
  "key34": "4de45bdpsJxRs7EHmi5rvKSbEKm8dYTSaKXCBmq92J6nSzNhrSqLxFZRSe78JSYyxAaAbGJZ3wgx1Vw7vJPx1Spb",
  "key35": "2bwJuKhpgHwYycXcezQQau18YF7hgspCTcoJGNqJJUcQ95tYGJVqP2Qb7v42NwsuJyHiknBpJ2uduAinusanM4Tk",
  "key36": "4ggSLhhyDkCmsTH7Va6rexS8DsuUzFia8oPdjifPU145VsMHJ7AiwakBHuJ3mCWpGFun2KBop6oqvmTY21mBbfL2",
  "key37": "3ftynXKATqctjkoqXxmBy8Nb82Ca7rFQqTwq2odCWVXPoJKWhoSEh4yyhpZX9cDiNL84B3mPm4Egm4jvYYjksy8a",
  "key38": "61Wd7wyypkwTa6ofYaXHqr5jk87B7X5R7B8pzaoeyfyPAHQM3A9cH4UuegRUCvFeLmXE5rBtirA5rKQPYCBorcEg",
  "key39": "2KEMAqd4uYavS8Sypcm1freHvSotNXEbsFMZGN62Jg9cNrmvEsvKJWSP7k6STWz5GSvWx9FpMeGSWLHdJEKwNCKa",
  "key40": "4ttfRNE2EhwKRtvJRmk9dofgrq6LjtYTHGmcBJ6BBWUfh9a9y4Cy43WLBsym5bhrLLSwJENC5qrSTejsxvdr9LEy",
  "key41": "2X82K4tZUwAMYmR8FefFdHbvkjjG1bM852gezJoJL9PupVSwGQA64MnYYn2kDLvfXzMJbVzps19KoPEp1jnPVB2M",
  "key42": "481DAMkGMECScKvAmBmKpMYov6SFc4an38sqRqP4SxYXgkcEiZPAth2FdrjGB4JctYn9Uhrpfig54sLnZGQzZwpk",
  "key43": "4zKhFLf23YsYjqn9Sww7apYMkrWYhkNJdyohxZCUwParFj951TRR5N5CMs9rP3KgdYpUfUx6WP4HxxP5fbYFcC1H",
  "key44": "4Tmbg2AxDiZs9Hvv215KZr7fFTKcsqefUgVc6LiAn44kD8FfEsW3pH7GYou68S29641MYkqwxP5gQt7j8mND5Fy2"
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

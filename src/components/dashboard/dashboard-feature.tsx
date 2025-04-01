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
    "3SJCrdEbDJLtMoHz5qY4bveNngftT4UXoj6ydaHY2LuykUu7ssUhEgHCtTtsrxVKr2RBDrzKaTEk4hupBK1ZCb32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41JbhE3yCsgaVCEktnzJTgVsoNLW236ZCTvzvgAS7YmdM4tvHWcg2fmCTXz6S8KznpbtdLDD53uSW6SvZ4vGwy1S",
  "key1": "3gSZBWuzkpK27pkF7LugwnNCkVAwvJBxoQEztFA2M4A8GbFvLofb2Sj3y3PVa34MdRby6dXzvsAjPSVCTRfXUZzM",
  "key2": "3MqzhLzzFWdUhoRFyDCZWQy5yNFT7jjrhGeibrdwQpU74QYy5vUZi7MtFDNWPJZg5zJnzVvzpUQa1Q9H6cKyqJsf",
  "key3": "2ofMmz3dCwvFumhU5Pe6rqmhK9CLtX8LVXzUJgPaTHV3BGqUAWKQGptQhYKeLR6qbisgP4nxxfaHD86NN3UrcpFg",
  "key4": "43GdujUarqH9bQzB96GvQda7giuzpWvCifXccTh3jL4RhAUBpQ343H8ZwudDScQcF4Q3PpyAzgaPhTQCDKFzNG4x",
  "key5": "4TSQAWkb4o9DF2VWyanxHE21pJqFe64rXvWtEU73V6pbkAvNK96CKuoUtHZdNtgFpbQKw7i8gVB5r9CR5GjBpYVq",
  "key6": "536j3JaNaRUgmHQdipB6rD54dtdGahkNGGj6vCwCsaqK3kFr59WzeWMegRPQazapiq5Jqhrf9gAMcp2dju5h86m5",
  "key7": "5bokq9496fKVL1FfryjdYbGzGjXQxqpT8VC9G5nQuXRGoFYkGFCbxy6aFHt2oPkKutBhJXVC7kPNmgF7CLEhUxWn",
  "key8": "5mEJZz9C3sxC9XmA2K1mFf37SUX2DvQT3WRHKkYsehgjmZK4b73RE2vbFXvmC93V2NprLA3tuWPXxgpSm24bjdCB",
  "key9": "45dqZFdDgzgCMBRr5nykcy5rttcxd1hoBQL5FqjBwgX9uVnBdDKJJxGaTDfRF8umV5NiYF5yGv1Lds4tXcUdYJ7",
  "key10": "UzrE1gyMH94tSdabi24g6x5BDcrBXTVFFCLpz4C3BQUqkFK4xWv9aj1Sy1q6YSFfwrAcbkGhcd9bhABbBTNyccS",
  "key11": "2MzGosTPRhNgrCuFrHaehPxKgkcacKebi3gxSPs9UsoAchia4kiUNTt6LTUi92TdCChMHsyaMit5XgZfn3UgPD9A",
  "key12": "2vSRtdJWe7U91pJpsRPBuQLbF53V6U8MvnmibPNy7kB53ugqMDamCRtBYBNeCfwXNbnGCJaSQPdDCoKd8hnBwqCC",
  "key13": "3Dy4voi3DdZ7D8aVR4fBxJqrgozj929pk16TE39SobPWvJJmJomS8kuGn8tYGP3g6zqwq3cCXnMRijDaT9dP2gyX",
  "key14": "2iKLuGSsfp94QEGhnYCaz77rumLaSwEzvPyTmPYacWw2WP84YQFC11GPEnLSTnXMvCcKKW9rNtshcyVr8cJgnG41",
  "key15": "43pPiuEWjc7qn6ZtvZisdyVFJfY4EhLUwWG3uCUW81H3P1KJUtYNRwkkf1dyYicg9EDacmTm7qdDzMWzzwAMZ2V2",
  "key16": "2fiGTKMKNPu5yvFwZ47s5WPzBTYgn2nfDQ3yvLrzN8R1zUuzV895kHqxS73krLfULe22W7yu58zBWUKaLTL9sosW",
  "key17": "5zwZ1iksBtkrMF1ZVTwkECikqcTs2mJ5YoNt8gqyxFgkBDy9jjgj7HYEvx3V869wHqi9hMok2ZQ74iCNm3CNXoFU",
  "key18": "3ME3esWiSeMUsV43173hMA4E8qnUJuiu2SiYLUh2h8L687Mv2dx2zTLADu4SR7FwTDw3ncmXTHgZfX4ZJzByoihs",
  "key19": "2J2vmCaYoNmxfqwNcHdVgREMxB7GDJJSaX7X3QtDEhakDZNv9fbMVgfxeYLeeKYeG4G944bFuSAif6Wz1Nn1au3H",
  "key20": "5x3pch5Tz4uPwev2mHtzo1dMQeZ39jYs9Rb4CoPyFAFx2CQsRzwvDpJnKmX12tr7Ym8kLD9oh5guhsq4ZKNGZ1An",
  "key21": "4Y7KzqfKSeZBw4TWURqds3pyPYc8qTndghAAC7M5stD4mHaQW7oxcivtZ2xPFwPGMA28E4sraZDyjBNPmde9URjc",
  "key22": "4YFd6fgbaceeynUyb6T7BfAyaytxFhaFyDTRZiDc9xH3AGa3yvMPQLaeSkiuFFEdyGTD1aa8evhDc4pfYAnob4qN",
  "key23": "5w7fq3E9wfJmZty2Yad4P4kkFJ1HLXop5VCoVd7zwS4QvooPwbJBf1KArimW1fGHsVwCkkChEVL74eykWCzEdjND",
  "key24": "3aD7xe2yUtPxL4mCW54RfjzLVMzXS5u56Rn6fJ857CiLmWETipHurtGFn74VvMQzwY5YrHUeuvHyMQ7DWNeYQu7F",
  "key25": "3AuNowN98Mbq2tVd7bdvvohsigEKruEbgpxL3rZy66p5wiy26n31QXhiZ3E6VRzVWdoU35FHyA2Y2aaEhH7hpion",
  "key26": "47vX1jyUVtcQE766kKGDmjX6oqk13AYV1sDisC9BMwhcw4QSEnm9qwq1UVB7AE9dXAfK43Lw1QuMfgqhgqqX1MRf",
  "key27": "4uqpQy1jPJpLsqy1W812iop5odbk1Rm6MKthTaDSMZcGyaYAFgbpXtjLwQz9HH58nAmB7fmrnacAsq4neFrPTPYB",
  "key28": "323ak1dpJDqerUJZdatsKq3ZtUwS2pH3HR61P83Cmb37xay5UJ9LG8h9hCbNWTMbZCzR931G8GEnsjjCeUQyH7T8",
  "key29": "2BcnvVK4DTs38JXd6MjULF5jENSGfgXxmxj73NaPoj7TB16BphZuoXESEPnsWNnpxNidKaZNf1uL2r3CxqrPmAyJ",
  "key30": "5Q6SyKdrPMnbdgxHMmFEP7r3BVWdtvehuHr2PUVmp4vGG5ffs5Yg1ZAqnrkrxQVp6qQwEveJpuoNsXyx2uJnSKTU",
  "key31": "28ctie54YYqEGG5hoWyxCi7VafrV9Z3YCprKRp611PKeBPx8rDijLSDcGq7sVYutDZuaANChzmeouy5SsB4ySCSc",
  "key32": "3UFDY5d4aWE1sqPvKDbzi56L5VtTGwMhuHQC773kgo2ctUm8m9Y2ivE13SSoxWhn5VTANE6TuC2zd2gsxUjrepRX",
  "key33": "5q62sXXHDeVRLXoT5ATwzNn24teznKZzWhpm95qZZYkb9EqiaAhARu7d9tUaruivFB3fXd4PDAuP6HZUyfXhGzT7",
  "key34": "2LDjH886RSaYkQq9HqSsXcRYG62KoaC9fDEqdYHr92ydAHm5Ns7HUJx6JitRyxSPFuAjg6dRyfZKwkkDwwAAt7uK",
  "key35": "3imn7PzVwyWZvweyyk1JvLw7aAV7GH3GL6dVWJd4Surj8kmQu8iVKWUHh5nZNAWjDTnjCo3m1UF4imEqBDmuvq1g",
  "key36": "4Mm3ihFZqksyGBx5kTDjjqxXkb6qRUigPCp18dUmcG9cECdSdEwZCPYsJxHi3NK8h77CLdvpBeaXH1tBwhTDhaRd",
  "key37": "5Q8JPX5gpto8CGmq1WYrLhKsiSW64X4E3N8XK5ErhM4Uz3iNteTLBA6T8rtPpF6yTVYGJHv9KnZFLXrEg4dDaDXq",
  "key38": "3AWNkxmPgA3r4HnpigdxkbRYYg9JSk3Dj2hwCrQTHooHS1ZKo1k86UWTVsANX3SHJE6zV19kUoR7NDqtcgQ2a7Ps",
  "key39": "2giJCVLmKu7J7kq91X9SQuMteRqNo6nVoFQKTYRwVG5HL9niCYhAHgMAAfQu7c2f7ENNHfB6QJCmmD3Xd515h5VR",
  "key40": "zLMMj8orBENvf51ZSesm1ioc1xCQNQitUWtUk5oT1MNwdbWZYarcqjJ9px8wm9MtN3mnTCh5LxLfpfb9CQdxibd",
  "key41": "g8hXf5bZnjQtUdxV6aECsXXiupLWKs4w1ZvRneb31SfXcmFAEhPqb2MS2ssdUjrnE53kmqH1WiNgJrmANvjGsGz"
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

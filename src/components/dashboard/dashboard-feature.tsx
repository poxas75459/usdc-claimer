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
    "2gYF8tscNRwSiVGZTtZuC93prWG58pHeJgnkE5LYDf5ufEQvHfrqRsUmPvXMGyMEBBqPR4ByoZXrA1KsknctAJ9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTQM7nHLBLeNjq2fAXWuMhnwygF4j6PY2umeZR9HW37DM2oCg9kQh18otP4hv4ovbTQngVTxJaTBXMrRM3ueyW2",
  "key1": "3vFrsZThKwkBw14h2nbAbomJseyKMzBHzTFHQjcWNu3tv2bEZKtdUTBKmiMiA7rfPt5ZbhsbqAEapuQKFgvQ6BPc",
  "key2": "Yr1tmyghD8qyzTRwmVtdckPcxZU8HVrYZAKkb7d9J1aNeHm3NZ3qBVHpUF7Xway6hScQfFddcd2br6ygJf7ViKN",
  "key3": "BcUQdsfEvWx3zxRBCkQUqbfDR9WoSGRxrYSTbrKj5GocZGbWbVUSK3K3bp6QYy9y6krGUvCTsKFcCob5yiUbFeE",
  "key4": "2HE9ZDvZqULsssGvay1pe3FQKNH9LK6PSECWK157zn7osoPnUs5shWK9PgCZnX16uYS9LZL8APngwGDSyGkVJbdC",
  "key5": "4Rrv8e1nV1PcKSLwTRGWo4vYZn5eX5kr8SHuEmmgTRoiJMBEhpNvD9AqgfBXmPVUU2dY81vUNUnEYL16epb3Rwy3",
  "key6": "4zaos7RWm6MWJbTB8KsWh3igmcF8QXnViJ2FCxvKXpEEti9cjJwNMSHoXx5SMFJwY99qvmrNTu9Dfaq5vdZedpWj",
  "key7": "2AWBeH45hVmmJnHNQ57cGPPYvZkG51YcDqJg4TEWQK9wmduBRWEk6AC1MJjA78UmectNVyo2TKnSD3Mf3L6cLaCr",
  "key8": "3Fyrqk9Nhkq8nzfc1amVZiiCGY6p78tsrde4KqF7BLGoDfQHopdqV16kRvXyPbJNtkKv28q3TUCCF1RUZ4NknYhE",
  "key9": "3UEwT3ieVuT72eDMQJR9JNYkgUUyTFi9rhqz13mMUmaWXjx5zZPTRoJFfKAQ7o7AA8MmbRJ4WL1gpW8ZmGfiLZrB",
  "key10": "oNXTeGangfmb8UTTHcmaRBLVB3UPz9qboRPDTAp4vY8FVUzhPoEifbZeAYoM826WxpmTf35KTLBGtTojttTPL5A",
  "key11": "5CQZYUy35zdcEmhKhSfDkt542LwsZCwiigg5PuTNXmp152RAma6m21W5mqejyNeuTNvXhb4a8CQFrCSYvLtQRVWJ",
  "key12": "3AAMZs9onD4aWebcZSuk6RtqY5dRTy1rCtYDxGem68AZMtoq6G3746ch2KFTzZbSSW3VomB3QrW7W7svupEvJYvA",
  "key13": "4WGVFZLghRPGKb35AUeQ8Q4z9kpMm78gkSwgJ7VDfQHJmsXGaSJEGWxqqVAhAi3LauQwiaUjLX9qLvwFT1fVGwKA",
  "key14": "3AyvKnr4voKwCjfcFFb7atHUsJxKB139RuLStAWawBUjfVgpudGEqRNyMoka8RdnJpnWKLkQSXUXWR7KdzMYJA1W",
  "key15": "kqGpMQ8WCFGC7RpqC7hkBdhezXjXipj12NrFrYnyrEE267wvGez7ZG9a5ue6cTGEwHgFkAniDPSJY6WPankzycV",
  "key16": "2iHr6vnfYrZLZPKJrUXQwXKLDnDRdJLwMFmF6JLSLPB8mnGY2VL3QyykcjTkdSub641kg846Q9dAwPWng8sMzfDW",
  "key17": "5PUR26TUTqT9EsLGbFmwGpFtnsdhe9hCqnxmbC5PR7WSfU2JdfkTuDp1Ki93uAnGUqChrPmZVKbjN8yUGZvSDXtt",
  "key18": "4UwcHD98PpgiCbJTch77ryUNQwqCMgdMk1d93yfYAkAaqwRwKLxdMjZjPwCdn3cwqhJgWEQ3Yo6ALxaXT4tdy935",
  "key19": "3YUttuZoHpwHws7PqSBQBAN8VKSFM5RJkHDF3TAR7bY1PFiiBmkE99za2yvuG3g5Fy5hRVecRg1jUaiQPe3gAXii",
  "key20": "2oKVRtzURkuHuyLWox8LWw7YSXy1BBaiPSWouxjL2BYhK2FyMJcScHmc8dUC1eXN6bLLATnCNp2yV2jDYoBH8kaf",
  "key21": "5FcdBG14qKXGGmUgxWhKAuYHfin2BQi2jQYELKJe66Qagtcaj3KZU48HthgVt1b8pocs9EPFzqMDyUHww9LEx6tE",
  "key22": "4aadvhE4o1EEx6ZANvsy4H5UsrdnoUCbiR48ntXfQHfUGq2w7oPuZGvvUsBdEvYZutGSfPwLGgESqniq9q1Xk4Vq",
  "key23": "iFRaRiX6Q4mDTbWoveZER8hCwdkwMvTeXWcNwvByomXvQSSAc1Nv7URUyQZ1VFVgsi6j4ShdUeyvdTSAJtsnKa8",
  "key24": "3mKwT3w6mN7yC6VK3BPwR3iSjUATRRENoEAjqRxC2Sj7yg2QgF5LRmqxtvwNNoKZftm85WKUvJd1jUAemATGZfcT",
  "key25": "BE8VDh79txVWtAMJQuje1e3BDTMnA1FrFEsPWjkcra1f64GqrZCEZ16Fj5qksWwnt31TBkQiAHSYfStw1a6QEd4",
  "key26": "5Fzw31y3ehLMtRzxEbMp1c2bfECFHapjXJQszJXm76Qgx4SzUw3fNEcHCXhpCZk4DanM2N1JtdcLWLq38PGRw999",
  "key27": "Eo5HHiFBc9SNk1FyUzNUhAZsoanZ94QTbXf2RMRykagrn4YtcGwaVhq9FbXYq6y6qncqbATK7sBTGUbAjVmgULn",
  "key28": "5SXarWyVbS2kHBKVuc1XF7nvVSkrCN9EkyP1KxX96QjxEgCrbMwMjPJEbinu7THZBAwA5tVm1q3z9knriC4vFRLt",
  "key29": "2xFdev3VRRdoucWxtEQR5ecGu67QtZKkPoLEsJPuzVUq8AjYdyw5uN9BZG5ppmRKTv7CVjk1Tf7681kUsbmXXxWV",
  "key30": "5QeeadnnteCt9oBYt47QPjAfXYwpX71PSb4unCAHhn6U6QCWVr5quouG1zSU5nApTMUUw1SRZqHNbw7v55rqaWKU",
  "key31": "3CzjkY5nfsPu8HExE3RNCj4tJDjjKXWT3cxY4M5EcXF6Fxqeak6xYsEh4rY7stgcvr2NUstPWxzSnW6vFio8gcbR",
  "key32": "54PQP39aRVffheaJZJ9DnS15q8AFGYrp3WKuNYumSnSHtJ5Hot4rPi6Geq96Rmve19riaH9uF6ZNJTZHpmb66i7n",
  "key33": "2G7SNv7Hcr9nSnjYnVnjGcK9UtjAyxFZ1Ky1rWYrukwboaMSzE2sMogpAzj91CyytbBJJqdorg2ZKEjEgSXrgwxe",
  "key34": "2S3SVzoKFb5RPdYMr9jhVdenVS4QVs2Ku64KenVjNN3y28wvbK1ytdNbuXfjUeFT2pK6Gap67FMC7Z7tzoW9jvvJ",
  "key35": "3Ru9npKgXgg6PdMF21h2o1ALEJApZgJz2bqyrCNwBehuXgBVjtFLUxBGFjZkkAwzKtcnKtBve4zbcrcg8gfFvA64",
  "key36": "5x9T9s7hiM9RuP9xBvnVSQBKa2uuzfh2hHhBc8Cok242eMnf65pAuipqJdWawXoLciXrTqj1LTAk44ed3Qbevsr",
  "key37": "5VgCCzdG5peCQURcopdAbhY3ubGLPNB38MogXu2KzeLdZ89HCTs7dBUJXCFv6FnWX7KL4P5Swo2MUBjMAmgKfEwM",
  "key38": "5WZN25RdCp8noP4sWvx37dX3xpwwSKHiZmKRSSBRFDyhYoy7oKYHMi416T33TgjxTV8Lqs6f24LXaej768ExQSKe",
  "key39": "nYNYLkrHY9ooHZkCmcU28N9NzUyT4H6gXGDvDD65QZTrsjaoESMgYFocL7iYNYnTr3nqxB63zhsSQwqKbas3tyS",
  "key40": "2meLFexBfpDabLbQatoHjh6G9tT8i35Nbu7xio6NjXPHX8jY98KDoMZ4SEAL96qHjNB1tvH9VFf97QtFcUbQ4VJi",
  "key41": "5oNwkYrWKAvhrRmTQSG3eyrAtxuiqiK8qo4jV8BeDzCLV4NqLLYCrnazfzUf3UtboNFvLB8o1NKKRh3mJDoXYJ5c",
  "key42": "YyVafAzf4Haw9NH2GSJ5TqtbDdBxyAwkhTcfLvAATiW1SF4eGh97AmQ6t9zon8zr3g2forsg4PJ3r2pmCXr652N"
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

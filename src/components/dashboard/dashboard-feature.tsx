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
    "3X9kbvwWyxNUY3rL9YuKtDuBayJM3xURrWvmZNJiRAqXju3LyedsJi3Zb9Y9n2FCbKSD4eQDenBmbpK61iLfFj2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hsTkSocCH3hh9yujKPK52mcCixpyEJnDKfRcatJkEvhFV7hhcCe6jkEX2Sa3eQkyxwWAMFQJVDpL8aQxjJuK7J1",
  "key1": "dKLD1ivzAg2YjW8qPpnP4KRwXo6NYxpJPHs7PmTYDZjqTrk8qdoHtmGfxJYkYAYji7MZXu9f84H53NbDDTjYdre",
  "key2": "44F4YtLRU4FLZGfhjhcdNz3hM78jUtpNbbm3aiyQ5QbE4pybkaUyQvNtpAwToR2mjj6PkjtPhb9kY2BZdy1gxDHH",
  "key3": "4zNvgwZfRnBLBKD9aeYyX4MxFZEsg7KuaNFswTGpJGgB7fvhzC5UrLaiU7a6FgfWj7rjNibWr5dq9qqvd8VZBjA7",
  "key4": "4jEMULuv97KHwz88rhaoJ5QKRcwknr58duDbFMxDcXGjAGpFYJe3MZtZyRLH8ZqCvXsEyMNXhRvLa46TZR72mdUB",
  "key5": "4gNn7V5aM4bMdiAXDxntaskc3z9aBeEKvsqt1vfntZRL1SmnPJYXira5mTxwkvYSxfjgTzBkG8xs8UwiaukiPMSv",
  "key6": "2BqkMZJKd5XviJGNdiH5krpapEg577Rau17dFg5RHuB4rPtX3T3WAfdB1BQNHy6ZYULzAb5pkpLA1xmNhwoyV9Uh",
  "key7": "cwcdSgN6xCr2mtt53LZeKLazMaidN66g22YSdE15T4fkZTBbhsP8PhFjDThphVegie5RfHLgqKa23TQUBmKyRDD",
  "key8": "432JrcG1obAf8cLdNRYzpHasGQJWWDbdDVzLktFZHgJtGQkAYTs6fZ7FmLbPmN8nibCha9cUJ62ssZsnh8KNjg1a",
  "key9": "47JttN7LJmusivVHxhrRAkoDPM6ah38pUVottng29RaRZG1SVYGvkiJg2chuGtpgyjCE4e213vbgTcNBhVj6AKZf",
  "key10": "483Bj9rSzfBJyai15PCgsV2uKZUUZ6ne4ao87j1xVjBrJQtX6dnCZLz9JdZYTwXQbtXZg3bzszsFgocSVPxvxUgd",
  "key11": "5J5yNxVDp76LGrJbZ9N7o3A5zs3eGwZuMQEiPboatqssDvwv996mLE2acBo9q7hGZFiXtw98nxRJkM7Ak4YPdF2Z",
  "key12": "5xxUkWP7CWFWuNwJ9nN6e7Lzk5DPb4X6pSxaBDK9NUZVngK1vmuuEJZrwDxrEsNgL4NDxFFXSK63qc4QS8mWa32m",
  "key13": "2QQe2jJ1ZqG7U8h23BeyifEqZzd5SmvHjq2w7C9nuKynYtR1ehevGJHavii5iduE4xmAfxdzwrUwNddLVGbuqjch",
  "key14": "EmpA9vRrtuz4ApuerzhABtN1FtmZZcUQpUR4B2rnA8AFf6fq1XbYor8HAYjxQqXuqa4WW4UUnW3TqM6mp9GF7uu",
  "key15": "47DErb61or9BDFr82caVyRJenkyQaoULon994K7wZEeqvp3UP7rkVUmo7TRcyqi8zGBeeHy6nFuXEmmpGgummqvf",
  "key16": "5yZkZhmuDAuq1ow71fUNHor4mjSm4jtVS1ZPfnPpRk3dR3PE6fUmnEQCtc7v5N6xx3guqowQttYegPZezRa3NWpm",
  "key17": "5WM5YeTeAKX3H2W47JQP945qSnAzCwVSABqAPWzPCStFBQ6rB9CB2rE3BvABCP2XTrsuuHVipYg6MwdfzimpyzZs",
  "key18": "67D7owvjVp2kxs5LZox3ukDTzf8Gh768LBAgLuqjoBErAx9S4x4XB84DLXPzUwD851jhk5PuAbiET6ttcW62qShU",
  "key19": "272Ukdo6iv65TwoXKBzPZbGhCn83KpW3HYijwtjFF363rxVZLp2U33EtPaQy9LM7shLJ32hU22R6dyG2xNH2UjLs",
  "key20": "Y11FFqsYJTr7BM5vWiqk6ULKu7UXhZgavFREixZNNhZt6YhBQdCQt4pKGf1WsRfoFh1FYbcohPkHk9ohsGgRG9c",
  "key21": "5JhRnf6TNZ49Q5zrwh7HkJvVjsAULeG5XaSxVawNiyqLh2c7zR2iQugn8H7PhfGwVXynWZwwnkuWeRWKikKzPbSs",
  "key22": "3YUdSeuTUWCK9RnsRFuucSgHAdGecrrkVpgB2VdsrcY543HECETnmAoBSsmU6QEPrAcepes8AsNeY57WeC4A8U3i",
  "key23": "61icoJ3DySxcZCGvt63z3DBYxjzhT3X47NY2Htr9AYHjqnTbSh8FswZUWesYYrSeG5tEKBGZ5pDknP6AxfinAuvx",
  "key24": "2hiZBsdFFTEodTQoogyDQ7ZBVruihpo1MtVXzHo1RyYC2mFqcUAuhhwX7j5PqLSkQSqxn6bdsFHWRJQ7Y3qNZRym",
  "key25": "55GFTG9HN6wetSnxzna2nDCZVfDwtC8Prot7jw13xQG271rNGwcVqKZZrXYq4NMQCKXSepE2rVjyuqiYrPKc7brZ",
  "key26": "4CSzx1LUCpm4StFtRodDnyzMuqjsvrJvXwgakMVGzZPTPVt5u5uYi58QT37Ri3q28P47ueYKhmrSYRmt9ugRhWJW",
  "key27": "NgJgcESsyGTojh1LtRWSCmqkma8aHP7BwESmK3nkTw6BA61UvX8SpTQEgu8jUd5Xf6hirH5k3j9fYN5ZonbvEQG",
  "key28": "4sz3pykZEm3YEtqBP5s1jVtoZnmpNpWrjEbsoeyGaM1jp3h5tEUCSyC1Aa6AucZ8LZk8yFjKov9qYcijjbPqgTMs",
  "key29": "3WTPsWRN3T369VhiEwMstyvSD29uFg1x8iCmAaHQKSwHNvAm5dcxdgdiJkeMzAogxJXTACkxpkNdFT5pv2ryfDig",
  "key30": "Xw8u5aeXynrf67b9iX64YP4ruUabjcuohX3aenoKUx5Ci7at3WKZMSA3DJfL9vcZZ5YZKZQmBGc27dn352X4zPk",
  "key31": "5Mi8v9zKtp2c9jjL8z6AQR2MwJy27yoWJUqEkaLUtGmsZcxqRugzdSkiLBpZvqYvM3SuBB1RGsbthpAux4BsXUeK",
  "key32": "5fDh7DQpyEaCGndG1ZwXwR3xCSPfwCs5r1rAaX5TNuqjEE2xNfw5jY66n928gd78HWz7bVCjeEqsKvJViBV4Qy5d",
  "key33": "2FKSu7tVPCEuL8Fc5VonebpofGnEf8ahxCTi8JLW3fbGfBYJ99Sy2KdAKy9izJEE7BbQ5BYt1dwNVXmPebXM5quW",
  "key34": "9UVP64Ad2RQZ4SdgyypNCZ3NpVKdNuEYADb7H6pdPEnmVi5rYGDbdURk2faLb9zenzzyQDCYTSVYn1VQ4vFbeag",
  "key35": "2N9s64w65XkgyTbY4W6yBHJrfS9fv6BBFnPzbz3WmmtsotjyNaAqLRnfuvDGkvJB3P9bywNv5jdGYw5kuz6rZqf4",
  "key36": "2FQFu7Kj2gtJr3bXmJ3dZUJJqVAxqB13YZVZexDaEW1xaVoA776ftt4CxUD8aj9AHyvV89iCUYLeML6RAGnYpdKF",
  "key37": "3aociP5S7Mr5kg2XLX2Y5zBYK6iEtGeYUKSeghoiwc2MadTgLinkhjkLfcCXN2xTgbvnpUpF1sEZEGZZJJeAnUXk",
  "key38": "4xcNLns8sjggLG6Libq5EUx3hQZrb5Ht6AAeeZBjgYau2qEy1VNZyrB5yMTugB4Z4915peH9Ty43aRYrJqkom3qe",
  "key39": "2NEcFsASTjqJiyXNNbLqmcAv8V1rC9LvbXT1Z9RR6sMzKVrmPpwzaawAWHfmhCisScfyPS5qjuSnJ4jP8bHjFPfc",
  "key40": "4Zd7eLYn7xoN56GbhvDbR4yCXjFNpidZ3J57cpCKFa7XUn3eHPvcdnW4TfZGvwPuWH1HYAPMhSNEui8HXJCJ4Xy7",
  "key41": "5ruciSCWZtetUESn1z4uDdbCutn3tDNHn6YVBkDxTeANMcfrfhtYPLeb5dogYHULgupe6hxeHhU99hsDdvzX1pwN",
  "key42": "22UefmY5TSqgtxwMcP5v67NLWAPt7tN9Wy9dNe1mGbGbdzQo674s5FydbjknHUJ6wE4XnhrPdzTqr7eVEyLTpnDv",
  "key43": "1aAXYuzLXQ9unVqfAWs7nge99hRkohSpGdcq5y6GiHKjA2nu9nn5Ar8CNVUGHL8av4pjTKeS95Em3Hur48PpCxQ",
  "key44": "2RHxDi8NXZ1niBAcreAZy39zBAqXrawTp7N53qDhrqqjEuiR9mbwmDx5znoqNh52VBfK5cg9sS6k722TcvD7WHg5",
  "key45": "5g8h2x7PDxWBMkRpZV9w6V8aRg4odsAgVsSdHkgTY59kiKLyEv9aCJfA4acXaNsmfBjsU67hupWwDLaYk4rMgGeh",
  "key46": "3X448mUmum77U42XjQ62ew8B1e6A5yzNXuhVJkwEr7o1divHerh5MB9o4EGWMSWibTGjs3zK9EDVBp8VCrrXoDKY",
  "key47": "4cqFVLjqmkg8jNhaHefMXywiizaYpK89o8oJXzudHAQb1S1PaiZDkMPHcERnSrnTp6rRR3n2g4mSHaiAxfpaVoNz"
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

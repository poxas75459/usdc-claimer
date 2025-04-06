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
    "2oEXTmZk5o6RxefhFgAzvaMqbjnD9RzdKJ8Efn2ja9PpsVAZyCuGDBSK1LysHZKcjDqejnB9fAnG2LEzTAziyQmk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QnUSM9cGdKE1bRK2jm2tv3dLSxTxpbCnDYmxAoVDmxUfDNqt4Y4qEpKFadQHZoKtpRsr77u9ERV28iEDUV9p9B5",
  "key1": "4dUNpaN7dE4CaJWjMhcde8rQQomet4thyy3thCAbmAWjxXaAokaEM16WQKBCDJqmh9Xu8VmJ5ob2ZsdPVidZLuFk",
  "key2": "41aU99EaECNLKTk5AEL1YACNn6PbVBXKNh3YVj9e4TPWLs77J2b9rvuRDSEf3FfGqbYAeBNJ7WAd7NVRx5L6UUPN",
  "key3": "558FNCByx3hiTnjDWFVLUe923TzsQQnEGMs9pXDtPXJJZm5bnwidWPkcFFDpeuKsbLb6UbnqyGNMYSyBEUwuR8gm",
  "key4": "3cy1czf789RX4JWjj9JRJgsqWWv9bDcCZ2vxtQKGDRx5AfssMvsqd3X9jHnBjW6bFiUpm6LN11tcY19SE85gAXB5",
  "key5": "32dq7rm3xApoNdw5g3aLWjn7W9uovgpXuuJcnaHf3sE1pB9k28474F8dkUdy5VoKbvA95WPT3Sa1yKUqTvHkBxAu",
  "key6": "BDkfjuc6BMQFE6uFwCjHHXnwTj5K7bXJSyxYN15D9krfrFfYr2jc7XjenCNw8HSkW797K4cNiyjLzzkFLDNmMJG",
  "key7": "3nJFu3p8hV5CpRFDm5dZHD1p319rxrab6BWjePe6KUeCbMjat9QXSoc9BU58K5oxNuvhSsfCj71V3SCyGSaLxhmq",
  "key8": "25uq9QDTnz9oomnSvUhYQia1SKHyS37VzcSiqJ2n9LxhJ4CGASq9qDhxVKhmP7VKpYrzKEyQwRJk98b5opbDD3Lz",
  "key9": "3D7wMfVFLakcdbKBj3AhzvUWgMgZZsZ6uNuxNUv4hpp7Pva92aRTEVAxaetMrv778Q3CKGk4RP5RptE3Lsj9ZLku",
  "key10": "3CFzFe9Hd1oQrUUZhvQtuN52jU6LSBNpWMqivQrMchvGLy8wHgigzeFLoQgVqxQG7H68qER3XjSerWkppod8YCFU",
  "key11": "4nbkVm5geuCByuig8u7Y27Hwuq5M7axKmRRFyNcHvSNnJWA6YbURF9WVVWKQ1DnCt3TNe671x33y2mcMExrBX7Fb",
  "key12": "5LKJJPwmy5NEPiPsGZALSNXfw47yEMm78TSXtjhvfATzJ3JQ7fZh6YHMsaf51pwhhkhGMfZWhyUVfpyL6mpNSCQ2",
  "key13": "5xcbAqsk3SaBTGymCPHNS5hwUsUoxhNKJXacrpLxYVDqUeFPgM1Q78KFPJkT4vKhkQJV4cnGgA5A6A4TQs8X13Cz",
  "key14": "KFicCEw2kQLBmEjFnG4UrFELnjc4xjsiKbpuSwUJV9bt1gSLzxyG1hsQ3K1KfA7ZKwC5z2agPB2sEdEkotXxRLv",
  "key15": "33Pj6GZMUQMiEHZogghTPdwZ863VdF7vcWkBR1gyW2DZKCzPDHpY1zx3ym9bDGPo4c3pKQnXsv4Sw6R9xea3uBUU",
  "key16": "3G5ig9fhgaF9ZpV9qVajJGKKJEtD9DG1Zti3Ev4pFzvNwoRBLgRnrMSZrqpxJvhWLbofpd2p7R9yiJVMQJ3GgqUt",
  "key17": "43tdmGL1ieEFnfkiSU7riHjGfck4MM2mKWBsdSrGBZSHkQwa23kqSmHEmdaUzytxvPFffZSa2Vd5a2EZsbJz7ooj",
  "key18": "3umzJ3jZxAVfhaE6hePro7cvjnJdmD2bSYGpbJerbUWVeV23J3yx77ZtWpgi8SXg1osmnLD5HNFVXsMP5qTy3BjF",
  "key19": "2PWXaxtLXutpLVHn5KCF1WKCtA4jrUa3yPXyPZgfn8zfo4QEaT5VNWsK9BsySVGacP1cQPsQuyYdHM6v9P1LtVJV",
  "key20": "5sDC3UKA7Gd18ftUHASLiJMDupNm4Ct5ZJ9KqyYkgSmky1rShX3xmtPo6muEBHrFLrtvM7QTfxftRQgv74s8vYNr",
  "key21": "u4KRiXyJUKMqmTKoeiFmZMZDGuV61gmd2F8AsztndgxQfwuSiKyXzu9428edJ4kQPRq5rps9QPJT83sfLbDZxXS",
  "key22": "3wEu7xzV3YYPA7qRw3gMfHVrKnN8S67w7BuFKhYxJUn4EHP6hTMxn2VjKW7wzSAjsD36mbZqmEcsaTm3F8mrFPFT",
  "key23": "5MFv5ZLiiuu5fYPG6LqxDj4KXtCWQrqWZTY3zdu2sXkZTUakQ2RHh3kFXwdajbBzrdkPG2EwD6XN4rfYwgJX6qEj",
  "key24": "5dTn4sGkQvxF3SCVuzoQnFoxZc5XopKfo2GZyhjDBpp6P1ugm1JhZzLi1JTUrJ1m45JJVDsx5VCjFG2CP9aBCfTc",
  "key25": "28RuxPEywo9dDubg1C8wfWY9dwh9sw3CSfiad3bYXchkMV86J8Wxj4Pk3KCrZj8kozSpgqoY3hEgrmMURPJuh56S",
  "key26": "3fPjfyJAk7qpoze5LG2ZdxUgyvG2X4pyRBsC1vfszkeeKSGQmTJtH5ipW8vfnadANGimGWPZkyZdCLBViAJbgMsG",
  "key27": "5HvBsqp4kYdCviFL7hcLqFjKbZRBHcEZ64GKjVC1QoS27RHWaXabyFeD4gTgES3GssoM6Xz9iqLuwjsq2qJMfta7",
  "key28": "3g5HgT5kqTbywtpGq9pGCGyTtNeP2VsqyGND7ydQKQ8KwfFLgvrsEy47nzjkyWaa1G1nJrQmPpSbsGr4VKgJNmWF",
  "key29": "25VMGzVxynWbDRtJam9myKAessL5DzErbbHAuXq2SaM8YpfRSzrR1pk8FzohymtWXcoXCB2VVhzcJF3UkHdqSqyU",
  "key30": "4EMf2HZLei2Ffx6GbnS2QnFg4gXN2w4cuRr265KgkFpUJdiUxRGvifQ6TGN39Kb7Gh5VZt4hqiUvX4j1s3LzaYve",
  "key31": "4DPmgg8g2xDWWEjdUp3fTBtVyQrMNabQtnz2nww1adJtDFiyWRot9RbZcjwzkV7Dc9r787Ri9L6Ue6vmGkJLbUtP",
  "key32": "4D2Y47KeeieGMUXqFJC8ux83meo2emxR7oWpXzyG68vKHj7maEc3JeuhHJm7a4VN1t4GN8TjHz1sYnGg4eYG9KPW",
  "key33": "5bcRSeGmbpFRDapFCc5ENZKcq4yBQgRMViAyQSNQ2z2C72sHaKT1Wt83kXgWJ9DSfmeptAi4LDA6K95c4NJQpMi2",
  "key34": "K9cGZcyRkweXeUcKERmUjKGkX9kKMLoau3doVy6rmtiBUoCPNQ77kTQJ3cDSdU5UjiW6ZNqis1mPfRuFM94Eyct",
  "key35": "3CuZUAz2x7G13CLAptYbQ9SCXZDhMK5GSVfCneaV2BF2eb8gqKYTfVDtMrsxqmfmHbnmaLxNEtAKW6bRwaWnQKDr",
  "key36": "64Fa9rCPS2oKjUdwpc5FyhnKKJzJG8SkswHgW1YhiNtHRQn1idXKuUKvJHGDRhbQtQ8YtTKWdxLAMXaGrJ1VEJ3Q",
  "key37": "8DRHpzPDPb9VLNgenb7uhirawy6nAgbPr3Dim6QiwmH3vmzg155ZE4cFSXS7tAfz76M8pFGqUSAN7o1LcwJ17yS",
  "key38": "4gMcfNN3qiBpgQ85rp4izc85JV7nu3CjPhNofwjFP4nJHN1KKq4coZFVggzfAbdwSbvxNQtNLRVoxCi3MiHX6kCY",
  "key39": "i3w7QTQXniuuUGEm9gKJmYWtePHHuyhK3QChLNzfTmKmXkNnkGB4KPkyYkae5MwUhQkFSLTdTpg6vVgPMbfH5HX",
  "key40": "jKi7EZrZttmrzuFLjphDLhvC9aqz9EUmsdjjWEgy1e9ABU4YF9SBwGnDJ5skmu1tSdn7EYxf9mojFbqFXsC5LYd",
  "key41": "rkN9yecmrSaVyFfUb8idBbkqjTxb6Xb5MatoxhhSsSSvDZFnLkp3CN4jCzB34W6TDQhBA2gBP6MSvaDxutPi2nt",
  "key42": "5HQLCi3J2LuZkqyb8txPivZ5jasSideut8gvkyiNbzFLoL6mgACVStgHChob63bcKyjnBQV24td8FSv6y3qJWTF8",
  "key43": "3dJZa4fGgYCuL1PAyEjEwJxkS4EpZxZkBKHcP3gaZksaKpdNdNGephswF8bRjkSY9RQwHxnbhEcEfJizDm1Q11DC",
  "key44": "29sVmi1aWCyWWSqxS3BiLx6wtr3kreBd1yw1zQEW2ohWH5yVK8xGUWi3DpxE6rGxt3nkvHqkGrpi1v5qrUDYJ3q7",
  "key45": "56b5P6A8Fe27ezRNhvYBTHMkFj8wdNahamTsY3hdMtn1L1vVioB8Ui9eXomwnnZLaq8Mr1UbcK8WAyvqeEzGqZ4o",
  "key46": "66WPRCkcbVryGT7nFA4yhLmyi4zLuVP9tp2rW71vS6qqgxm7hgPsqKJEYvm5Rz9dWu2w3YFi2GkCWUpB4Jvf5G8U",
  "key47": "9dL3aV2F1rbzSHbiMGTumTbQxpM8HHYhD7P6VF4523bit8V8Au9XrkZU6wpqzc4pNcqeibSmzxwom5bjhmW8QaA",
  "key48": "2FYBBXvTSQoPtC9ATFbhwPPvdyBvZBTwdkFGKQNV2UbQaFuQTRAPP3qhyHHUfYZr76DwmUP2Wnf34QQZ3msHdruS",
  "key49": "4No9quMGWTC5XwKBYPpGiYzjjcN4xe6xKA2wXFDQziM7qXjmwsAuY2he5wopFBzJNPMwEAcu76NjjkMrcrLJj1KD"
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

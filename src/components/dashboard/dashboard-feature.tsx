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
    "4ixHPQoYbvQSJQZfNEV1RhTzdCJ8dk73o35Qrgc6eAGAaem15W1q5Hnk2MgBjgmjf9qSNyeCwAfM9RHSZ5TeNY6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rkmgZUATSfJ53TEn3J9bxn4QZKTcv54PsoiMW5YBz46MCvyeHUQvZiGqnGqTrfidwvmPc9LoG8YNrvrd7dDigiX",
  "key1": "3oAhUTFLAR9rjmCG1FwQauqdRuMT8R53e8CyvQSmosALHqbeQ8gdQGh84haNHfGoz2fiTmEF4U3VkCfXXzan3dnZ",
  "key2": "5LW6fUAnnvhcc3Fwc5SFo9pST5tf8pvckNimyBsWq6Yvvj4iVx9Y6QLx8REXERXbfSyk7Gn6Uo745oeJukUCm5yF",
  "key3": "5mwFaa5p6yZZkVnBuExyZxmDzXkMsznML4XdsxDfCEehzqiXTrXL4r4T1B27ixZpJdNP61bdPufbZS9E1pShKyQ7",
  "key4": "L8BsjPSp5KFComac7MwFyUyrt63d2p4NXa4wt6voGdtyaTzXjzxBqZbqkhyHDeA5SNcMFfWbK3CoJLiw4GStZJf",
  "key5": "WmS7wjbHER9MmtyB7b2jAy36WapT1S7p3XsznqAfWVDkKjzz1az8PHDRjckzyEtf4f66Wc6nZAjzrX9qZ3TEkPb",
  "key6": "4eEEcEyn9Fb9A5GMp2QWSQ6ZkKwF7MEyvvuNGNa6kejYAxfuF48vEenQf71yQWCRNksvcCuKEddPLHsyscn7o8vH",
  "key7": "2MXV1CUEdKkgsWaHc1HoGD5G61QL3HCZSBoVgk3vzRHJ17dtmJZVn5XDb9CeddVtoKaqpP5TdjmrWjVobr3uSWBJ",
  "key8": "27FeaSjtaxvKG4wCiHrAN2vEtXN4HiAwHnnsMcUEqSDi1bFHS4es1BnD6eHhBprDYpppCTrFvuaMGe1i9ULm2tbR",
  "key9": "xTAthLmhZFmtQ9iHNGEt1suAVW9NpCLsSpDWoxzdrA4kKgWPCLzMcyxPdzYxQpHsM1KC4nHc8g9Tj9euG15c1Bw",
  "key10": "3YTwqSF8H3p7FCwp98zNVX7s8mJ1U5Ns6ZmTZHxnPKdNVE3LHaGvZZ33NW2mWQzrkgX29eF8M3TrcD2LYfG7doyr",
  "key11": "4AyZCuir58XsEw87to8ZqsbrBFHp8oQbaCmEeNCRrEmKzKgitC4ErehLYyL3Kekw33Sp2NkeLNCmPm2idZpUPMTH",
  "key12": "4mz7UQZnHKZewApwH571XYhiwNwBr4ZDncBtHiNzZzde4TJMXWCUh9GXwEjQwpASdq3YC1Ek9tESHMFZ8wSbbcWe",
  "key13": "2ZbrBw7Hw3rjKVcHYm1mhNYR5hqQY45cBLy56eDjv9nnbZeJWWKUhgJWAMLeCgAeY1hjetnUHp65L5umJM1NK6RH",
  "key14": "2iFPrrpnzdzL4ehVfcsEXjsG4PWyHG2sT9GVgDh3c84RZhz5i3Kv7V7YLD95DUoX5LhdZ3HUdS2zN7vDjA7iDV37",
  "key15": "44qmphTV5cHSrYhm4JciCQU6VciG4uaUG3633TiS4njE4JjB8oG72ajZygA9o5Gajxto371Kt2nhaSZf4CWJAiTA",
  "key16": "8icNoqdA6YuyzhMxJhyGYfeizQ6TRzGyrvxq3f9gp5zWWbEMBUTYV9hGVfHTMmxxGqyi8Y8mWAHU1sFTsJNcdDG",
  "key17": "4KTKTd2fHupstqAfRckSoxB6EaTqyL3eMEUbwtw9Zaf5F7K66VJJ1AMk1jgwj78gfS25BvLkD1qHiU8xLvdTmgj9",
  "key18": "5jDTjdqRuQojWzFo3LazurRnx1osF61W4ZHd3FiEXRwWFYPfFQPmtKMcPnjL7weTJMeGQ6kqQsrq3bYQiTH9yGL6",
  "key19": "5AdjgSx6hf5waV4k5P94V6TFMRYxNFzFhiFTX937TjPtFosLS4BPAjFJduptKon2jdugKEU1eykALnJ4N2B6gSep",
  "key20": "CfhBiUoZoHQtQSWkZnFyrZwb9jxCm2uBiqt33yhT9vhuFsCA9koaGSs26Wdrtrhp3GvAEqGG4T3Us2NuZQSNFoG",
  "key21": "5apoigGpjwNSFmarfdaoqXw2yYLy2vBHc6eBCRD5yCW66uu5s4WDEmwvWdLcrd6Zb2xsxLe1M9iqkQ6aWxfTEorR",
  "key22": "4v1T9CQSGrrq4gYLJKCciVD67MP3EvHDBKEmREshsLb62n3YnVzaAXiWNFc4fKTmcL39nKzf4xEBU3MZy2prSQYA",
  "key23": "5tdp5M9E4PEAQvCbiCStM9NYaBVRkFkhUrHCffcfL7SquBQi6jLA69Rw3wrYjfEYH2F5Jbsyvxm8NQ8LdANY9vcK",
  "key24": "hqNfv8kuzEw3LDFtwVpPDx747K3mC31Sv9oJQcK4PoudPPqoGJdZa1M3DYqWTZGRug7nD9QWyBvHZCH8RqpDpCN",
  "key25": "61xed3Qw2spd8Vt2nZRZF8zdDLTGKBmXHXbtanhpUAPyMrzo1cnpJ23vJmaeuQ6w8Xoz8PuTXYvC5xUV5Ybb4qm9",
  "key26": "2b3DiW2jBpNvCEpqRusdGMC8kmjoCUJw3dKyA21MaV5ajdrQzt7xQ2BioqMvxg7fCDMhwwxdGqYGYS2KPF9NLXp9",
  "key27": "5fGwqDQBWP9digZnuNKCqMYFvJkPkbBvDHm9DsEamgXygpjzBe89PnnhYUnvTNBemCHFPPxxsku6PUuVxYAs3p63",
  "key28": "4Qb2wGWc4rxkZXia2Pfb1FTcU1EZtoBza9mVyG5tjcbczKKC2ucqSTDr2t8J4h7w7DgvwmWqQpHrzjwP4kTtj6bm",
  "key29": "gf7mxFARHRxdXsfqiWeShN6WXD9hG6pxUD8mZnSjVY3wVCaz5bWGTfntjtimZc59DJHxRU8aicsVxg5XsnFPEmn",
  "key30": "4KZzSXSFWMoyB6BbB7NNDNrVQodozbekhopo5S5bXWCUCHcSfiR1tYaTS33qgzavaFhupU5HmGdcqeeYChE45nMe",
  "key31": "3kZwNVk77h4EYEVphUSPZmBnA6P3Y73wbmRCh5jJpFfCn8zwEuu94YHhEGu3wmTd3ZKDpK6yWrXkinpAXd3e9jZY",
  "key32": "4WouYnq9GoQvnQTbsWmHrisz85VqqYowJYtRN12haBgDXcugpYD5PvEvRm6UibV57How1T24R2yxr2JGkni1Rr6d",
  "key33": "4jpkxyiu3v5ddybdLQN2Qtn1mQsgrSKPTWBCMnsfNDCi5AHTDi3q8y9NJq46RcXnNtVXra1tyNPL1BFvVCNefiSB",
  "key34": "PSd6M4kXfPeFkeRerJaYxMNdpgHzVrzqV3zRNvoGtt96XraqG7DGqBZuvzK6y9wyh9YpAuibjD1pLnbnUDVbsDd",
  "key35": "4eCQaotJ7B9utt81jgFqoUy49oJ5h5fRDQADxoZVsQzdGtzEzY8GGApGMUuvJiRaSrJgQ2YRa94Fah4ke9p31GVz",
  "key36": "3PX5X4uDYjFgVjyKLEa34ZuSi4HtgAbpWUJb3jyCLagbAjzCbUM9GfBxNSZEJzABRNr2oRsDW9KsygLSDBvmy7oV",
  "key37": "63Ym9WesPTWgXApKMNc2TX1zhVHjC5GQKz9rZqFrjU3CN7iyt6mFeCkGDRmeeQqpjYY57hsYdvhipuaKFrJP2BTb",
  "key38": "2ybqWjFjGHz6JeUPntvRJKs9yjHkbJL9MVZMYcUq5RWzqmpnZFeBD8Z4ovHXy1bsHgD2dB572rV1ZHtaiZ9Tw7Sp",
  "key39": "346KYmA8EKcMY6YWaftJ1zGmr6g2pYBYmMfYFeYWmGnMh5QWwpLUvHjQdDL6FdGY12EH63AgrCKgfA3KNkpz4zK2",
  "key40": "2UJJToxkYsQSYi6xEz9U9Bk7w7CLxsyjEgkPzxHxiNPKaL3hY54oDcc5xnCW7P4YqdB9ZXkoxba6pZTLXDvM7r5w",
  "key41": "3j64WKj8LvbdBVmkK9WgT43tHZWPjetP4zjDBhznQqCQvo4hEBBm523sNLWBvbGyLo1CRXN3DRh5FpTKQjKbZjCH",
  "key42": "4V4bW8KzymooAZs9wZHDuSPsPUzSbZuG9FzE8jbDXeYbq4CaGPuBwv1xPwqmkffE9RfoynVpD38SDXqwWmAqCBAF"
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

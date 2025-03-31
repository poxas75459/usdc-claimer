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
    "cS6AJAELbmGrLrfRUJGUcrqBMFjYoHkCojPTbuDe4B2SVH1i8FoAXBWBAKXHVSZiCBjhiWVZznrtYQNcTewbFvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33iSTtjmNkP92K5BQKXSJFjTQUBnm5wgpseFBrunbkjZ18BMTHFBPU3wHJVxLua2idTBN5cyHBJDbndvKovguMA8",
  "key1": "53E8BSoRu8msZfLDbyCFpLwVxpnJ4MRGTXEbQvByWaAiAr9uiwGbg1QHrFR99Wat8p4t7UnV5nXGVrXUu86E38KK",
  "key2": "5kXUxqx3FP2VoApbg4yJRyegHSgNSR3foM7Ufdt9u12R7DwQzLH4N5Fo5MyAaTXcMhPPqFhYHp8zbf8qRxMUeegA",
  "key3": "4HJETW3nj1TotztvEQFD2yCT8bHCNMsxcazV3PsEaCtvbYLiAf8iLabRD4sdmHYpzHBDEFPPEwB4TP66D6DPwXmv",
  "key4": "2QbQgfbSUDDdrQvdVLbakzEjLWPPUvQC1tr58RH7kzGRoX6MkJgpiLEzveFpJnTHRdARjhKywPprcDAChRxqy97e",
  "key5": "2YsPd8Qvjakfi89Hp7ZzixHvvCtL7Ftph8cfcapx46sBQ2RKaL24QJCroevk2zSD9t6S7AbLFGgopy87jve8LGk",
  "key6": "YK49gqYRsJjpG3FBznGrAkgwSxxGugYtgcFC3oK9LcGokyu3b1emFPYyj2gofw7fSqGPdPQVhNdp34WbaMZg4R7",
  "key7": "2WNo5rp4qe2w8r9MpjyTf4BNUZLXyeZComdKCYro5d4g5YDzhniWxLougXtawYtKSSzk9VqPTHRo24bgCjTy7H8u",
  "key8": "3oRGarCpXKkG8yhz5WcVNbJtHxBgAuq5CC88s7ZJ9HUYQ5Lhox1K4wUwSYxY4UPPiukbCD2KqNvWqkE557SyG3yg",
  "key9": "55aACsA5trtaU8vng6mieXQXhH4H6wnKyjouzunCziT2QNjPA28CK3rvn3rffiX9ZnwDddLpWSvPXVwdAx9dyxVF",
  "key10": "AtNMTKN2eL1ZHmGY6pMrUobS6caQ4HJyCcMTBK3c24Qi6uNXoz5pvCBvMqHp9KgP9ExvwZcyrtsu541f1ieL3tm",
  "key11": "2JsGayYQtbNmrd3x9bPLPCTVtc1aHRyYpbnu5Pqc286NVthxm8VoAMFvZQZVeDqa2rEVby98JVoLgTcrQjWaGs3E",
  "key12": "2YASvh8gKcDddNXaopSdNeWML8t8pXUyRsbANboqbS6VhuR7LeXxTPEktjTREne5VPvyso1FLi2MysoJdRdynXSw",
  "key13": "41qZAtDJ75HiJk512AsfZEMrZSn4gwA7Jh1omWjExzNoDBLom1rsHhkzJNSfxe63NhJnkTibtJWE66ieunwezKXK",
  "key14": "51UM5ZSNd3VBcAdTBkr1YKtPjAHKBupWwaMB9wTxgLumB46QgDhZRiMiCj3MVHLffWvmqUnj2HBz42JLkG2Ncy7F",
  "key15": "4UMhMTg5XV79FRgRNXsQM8Z1SuwQVmwfUtT3m3XLzwX6ijZVwMYSSnE39UWTfvVprun18ExycWG53Z1A8fLDrVaf",
  "key16": "5KCrZcw4ffbFxKsv38sRsYxCBzzvDyXeu5sZutnmJbwNQRiAC5WXrJPsxbkZbe9osZjbQRxGEnRmvBiFMd69sKWH",
  "key17": "5oALaxeVF98FeRwkq9by66sLHNx48ZPrcVX8uCmpqkiH9CyUGfDSJfEsAVWvXjdDsboskRWymDKxF9PXmJLoPAbh",
  "key18": "2oCYS3HUX8X9qnnwc8supDafEhpiSEVporR3b2cAvUoqCcfGF83mJYuQU2WdRGNNRDP6ZntWF7YUPMMVF6TmezUk",
  "key19": "aMwiqkjyb8zDUK1La5RrHaX3QdaEc6tuTnPFbRPzvdbzRUjkTZcLLjbNskHKjuQ2yqCycekjM5QpsaBWnmQ9xnv",
  "key20": "24apq5fcViYfNT3D7rRyW684qBgSWwaDRMiRdLoX3TKmKkZGabmEiX9ErVrEoN6WpKZUribd6V1FEvNVFrrDzucc",
  "key21": "xkzsUiXzadQGzaU2sEUmgriKeWH5i27VoCyQNgiDtXhpTMn2pRhj5SftE1ieeGQJ9XRTjbvKMFA3A4wc3W2899F",
  "key22": "4bSnfb5xuzH1SPKSriNDmacEqPezTV6xkCTejggV57RRNmfmDd2mCT13b7paV4wDtHfLm8cgugfNiEvk1YYfPmMn",
  "key23": "2eDVeS27wM6GsYsAaKpYJoKHEq5htaB8f611DSsYoyX5m3W2bdxpL48CfJoeQgAao4cxYd3hQpnuF4mSUvBD4WNY",
  "key24": "X1bTuDmN7nJdC45R4TWvaToyVvVsQofG8H3TFmwYFzEXxN3aTJ2p6Ahc6b6FNUyux6zempaSWJAKjNvM9sJbojs",
  "key25": "2tXpYiMmonABTHb4tFSsbyNXLEzFbAtck1vqSHw3DH2tA81JBJmPbrCVUxj2RsUWuGarQQ6BCfQqTMWTC3ckh6eB",
  "key26": "5yt4S8XGMmdAjEPm6K6Q9BPFEYpVKGjMVAk884U5yewp7zqagQwgkaVSrxS5NJ7HTyKpQcXwaazX4ymL8dRoKvBe",
  "key27": "2C9AL1DZU2pWATq3i2crsFG7vzUrfXGJgxaKFoLhkFx4A2PJon15qsfv4pvG4U7u9kC2CgEBBhR7sX7N4pK7B42e",
  "key28": "3VUryJpXPYtAjH6SDD3UsmcU1vAq7aTDwpzRJgkKvLYu9PZccmNVoC8hDGTEvWtBKzDr33AHGWRcMZjdZE22wMkN",
  "key29": "3cqKH8TWZtyL5VcswSqNhRjnnyMtGyBfnhyekSPGu4XrXzJ6XiZ2fe1rNJb2eMvKY8UuenS6Z8ULqPW32bjWQzCG",
  "key30": "3voFZUJqfDHLg6nLnNcKrmJeiy7zWFyBf6w41oVpVoYmgxwSAvRrZar82fVvq98EEsivSs4fyBTvNswjWXPzYjra",
  "key31": "5zSLHKjzS2VYCbnJG4mqQjG3J9UqomZckSqSTaFWy3oa2SkDvnTqXYdakw3kYvbzCmJMksLLRWVrCdbppCdHwUQc",
  "key32": "3wYhw1jacrwNAjyUjNPCiMJoy6bv3gPL9q3aNCrXto51M9Sa2VVeTzQd62ECd168W4p4qXy6NokZCut3EHJmqbtq",
  "key33": "3NRo53n2YHEgUTZUoyq7njLp5iE8eQtJ2EnufBR4hjaJqHPWVypnRZq5WfLcukTzGR937Jbkm8uVptPtbxnLD6EA",
  "key34": "2pfxobKK68iktzQ84Vgy5TDkkqqrwax4Qs154XF2x7fxpNvqC6rLRw6wR5p2F1XbLzjRQTqPg6cGjZm6U6255FQe",
  "key35": "3MEpEQJWs3ccLWWWSXS7GVa9JwrTh5DpVRT5eq4siefAUf2bbER7kcjHagi9W6uDZ3R2ZyrGH4UoWWPpxfxzxJWE",
  "key36": "4eKK5Q6GRFBqqw8cHM7GAsJntwSUymCBAUA9yQSwrkaV6LhnMXvETCbQZpYrXyMEzuQYedLHz9NrrU7GdEGBYTQB"
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

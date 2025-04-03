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
    "5ipqh9aCpoeZVpr9SnkyahbsihPL9XFwEz1cLKHDyMMSLoDT4fWL9hzRT4pseWfQnZTuUADa95aLcjEMLWqKXs2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rQbqJDkPukxNBKemCbVgX2gnwzT1oq5BiNHq1HsXKawbeoHASKSvRnAsuELRpuJYwcQyv2VQK1tCvmTMsfBc374",
  "key1": "5EfZ1eLC739rxtPwqqniZ4aBQc9jJHisPjFjQ12stippkzBGmunrVQdkEFXHn4uRPzA5sAm6Sjb3SmqVsxKoxXmZ",
  "key2": "2BY9Y5o1iKgMjsNn4oPjueRggaXuFzneppTxuxzcK8PkuPWmUuXwgkEgexjmEXagBTkjaBRNHiA6iNye6fA7UnjC",
  "key3": "cd8tKZJgK4NaBVNAkGpiuAxdcqQwdQppUf36FZcoqMrSV977pycHkzWaiWHks4bz2xmStcvNENB78FCQMYRVqJU",
  "key4": "2YhPxzBV5x3pfFMJ6JxQ5ndURc5Xx3ZBWmEGsjormzKJ1CsSAaNBmjDYHysdDYr9CaBnZE5ixqcQdEujCb9iaXju",
  "key5": "24AM862nwqTERcQQpMsNnpcMHqfcwUt2VnMuPNpfpSYAMTGYXCooLsFXiQZM2qFV8kPY4MfWgYG3Pp79YCrJxDQG",
  "key6": "2YKynG7iUgVZCbCfBJRqPbR9SB3N7EQiPvEUDbRoYNA6yJJi2shrnRic2hB51ARZihV8zdiCQLkht1tKR2ky6BYX",
  "key7": "3UuQEQB2ipHJPshAFWLryd8DRKzyHvaCRYK3jZb3ad8xDCFmt5Bfr8XEZXcRtikQTgkARs3ZySx1QpnAWk1MhgMB",
  "key8": "3HZSwgdtn8emjNjEuGLPbCm1sKRrkquisCZwtRAxvvnVpzYvKmeoMDbjwD5xHfcE85snF4EP28dqqXueoM4wHUJ3",
  "key9": "LYu5ukvd3Ki9xS7k8dStP8yvN5RGKkVfn7f49Rm33XwPAVeF1CdyNDSL3eESVqjpVKoR7d5THxyB67ePgDJ9HAb",
  "key10": "4v8c4HZrD867Ni9pjmmkxb5RvTdcsU2SRicrnQCRUaG5noLFPLaErPriSJAnTsjakjUCdkc175V62GiNPHvrFuxv",
  "key11": "jvySgaz9B6U2Rh9tXNjr3L593ep9mKYJPmU6uzrztB6pnzjNh4S3y6tnqfpvLNNgUEHbFKFkupAYDGY2JxqikeX",
  "key12": "46cizmgexuGWfi5t6n6Kp1zHu2AmbN1iUXfL9459mZFHzBVWcJYFgrL2HnnzWFM2niwqefAPMoeKcWo5cRtBXZVG",
  "key13": "4rc81pigpGgkPuF6Qsnskt4mcdzypQAA4EMjtz77FYXynTfzyRsAZgv5ykgCFcXYWHYNXDwDc16fccG9uhDb3Xpf",
  "key14": "4iZgdwmvWjgUYwE4unWxk1N6BpEzVKCDaaDUfdoHCMMhXXsBc7af4fKuppBoVBXtJtQnhyUNM6UHRuK11po3tjhF",
  "key15": "5bDWoFPvfmJqGgSsA2kcaeRZs1hrdx15t8hkMGdKJaPsLyLTgYG45Npoioo3Hc6aUNzUmDJYv64JjrN6sgtP18Ns",
  "key16": "389yhVzNPb5YWsCPKdqa2EYNwj6TE8AKT3eHqJmnk46NDPVDH5Mz3qNt1ztp92NKaZqxd7z3k2ZJHy4jsRjz5zF7",
  "key17": "2gBgjsqXDxauHo19mRtHzRfCL7SUH2CRzVuYCU8FmUxkX9t95hV6HjSFngxHTpXcESPQGTTNKChBfcDQBUb6yrEQ",
  "key18": "3aGzzQhJxdmvT6mdzsCBqbd5AYbmRBgoHvRigFb759VuW9QENh2vbHTaYzLfaKQRrFZGDnibdFTTAMzS5VW4HsRk",
  "key19": "2aQ5KzxgpPLK6j7ASixg3YLuYMBouLPzHrUcxwjy2NRZYPTAv84HCs1VmBu9kkGyBuQm7x4hANTCYC5rT86A6UjR",
  "key20": "3JicSzqNCK4fkDbDxdkcMkyMFTGGphwte4gwaqw4znyBuym13wKxLotARQYSW4bQS2GKrba3Tnx6pc4fSiyn7nZr",
  "key21": "5UK4Fq8kScF8zHCavgJSiz3SA626v6QqZHEWaVSrgZmHMHyGC23zP2JHfKcqFCAX8Yse6WjqjQgv92rxwEZ8JJmJ",
  "key22": "55VRQkutqNXVcwtr6mJVTX5nAYBWdPt4GAPCKzMivzHZSugsxYnL9p3Q4tkBmnNJcjWd4gqUDFJn1mBXmn7cAfat",
  "key23": "zewbmtnKYNnjEFwXuUrPcN2NNtgJcLmhLqGwaff6oMA1y4dvFHiqgrb7fGKHusZPMqYMZTUbDGPATUCFSbkCZjG",
  "key24": "gWFwV8a8qQhcZaH9RqvB2CxQw7VhvKuN6EU6gxRCbVgsMPzcaPdgRRaYfTFskydWHGuXihyp8KK7654gyaASUbs",
  "key25": "5uM9btPQyPmNJn7j4m6c3PnwAdaJgdrdK3zjA29zTA2Kmr1jXyWTTJU3mzTYNxk679GevAATTfss8kUhWa6ZWbFk",
  "key26": "jmkooHXPpW8UuL3YmjVjppCUBFKXDcQBRmnfryfPxA3pSL4cW91j9VR2FjD45gmtyejjkTMQyZ6zTzqhZjFUTPS",
  "key27": "3rgDbKyUdfNX4Dv23q6hYhVwXQ5qKYqXmDMyw5v8pFmE1YKqZh6eHy4nQxaV9sTHJUhZWfkhAveabZdX9hABeUsH",
  "key28": "4JzhD3bgG9GzUFkCnmY4Jn5FFPDvBMMMd4JQ83daNMCpJ1MdbqdHP9zNYmBxbd2VmHFqcLbSGcwizTfgtwhZD8bU",
  "key29": "3qg5nPdWJaAK7qfWtGsBMULUtuT93RmpzGUxZ2771GGqwVduJXSbkhAS9ZzbnubYYV3Wkn9qaVLYjyFa7qQNaMFS",
  "key30": "546pezP9vhGakkBxkLSqBnswAvbRcVJXULRrSkrG4uJLjz5uwk1Q1D4wLnUtxwhjSrGw1x716dQVcxHDeXi6VjhX",
  "key31": "43TVjYppDYryMyFBXn6XVqWVnGNZHMgEtn5J2SsPF8nQjNCRHgT3GsHphxTWDdW2pwrxmdfpkh4CKM4MvvhxJFR",
  "key32": "61gUu6bc5n9dyp3vzJY21jqtp1K3G3xssAUtdfhJjaw55LchQ3ncds3wFGNNkStzesAxqPQuPGuWHovdtcwXu7FW",
  "key33": "stvx7cMF53Hoyo7x1mpiUKu5bk475B3wMLnajrhwHPZWCmXkBoiK891dU4Qvd57ZMPmvS3yn3PruzXcWMDEMV2Q",
  "key34": "4AWb2XhPaTqwEnSxnv89RSNCLRrjr3DusPk1nZyX5gThDexk6RPiSFGJSXhQesHpdu9aRdEmaDAyQ3TM4M5uryPz",
  "key35": "5yorCy7FoGtL7TuJJrHqDE8fSk6N5N83c6JpvziLbhk8wKJpY56d5cx25BQf8H8xfYxH1mnM9t1jjVH4ot5TJyep",
  "key36": "23AVPDekCtERqJMvpzE9Rcfd7CsZBUeoaUJMH9fihbeSdzDSa6ifnboBUP6NDEZLAdqZRSfSpvSdXtQ5b6ynAZRR",
  "key37": "5ZaGbir1oUDAEFncqFNKWVQ8b2zPNyAapBioMi5gUT7DbAUihr7nA7PU6a9syffTwrRRaVoWzTkaALUNziwACxr8",
  "key38": "3ECy2caxLZ98PLSY53ZAjvJx54MD1DAzf6drETuvjgFcLgojapvjEMWZfXzx56pyKi18tjoTV35wijRz1S8113Xa",
  "key39": "5c6wxu1SrTDu5CLfhjADnHBVYG6aH35VWQQwGJfP4YZRP6bXpUVD2dXarVqBgGnUgQy76B6mfQaxq5F9MDvWPPsY",
  "key40": "4wBpLcrQADDKXp28jG7kqQmPS18vdvcKkPAfY2rA9j5qv9PdZy8iydDdbnpfdCpmfEupBDoYGEhAf7unPrN3Eoob",
  "key41": "25jBXHARMRNVv9vSb4jaWMrQV6cQgSnS9678tqRsNs55jnJVyJBXzgCmzCtTQ1HzdBHU3BDLTDyVS1UvPJbdszpN",
  "key42": "66cgugZySKsJhJk5piWGUEQkHQs54hg493nYK33J8h2Xihi2rvXup21BufC9iquYTftrpiNR6vnVRK79SwjidyHq",
  "key43": "64tCXJ3ZFJbkLXKXpXXgfxGDEAfwMguYLawptyVgas3Wyt4iRTGFYMbifQ2RsXA7ZYd2THetH5RHYj2h3XXSze8t",
  "key44": "5a14mTCrg7MdVpxZqkbUBEDaw2t8yz99ANsV9S7aYyErNKBPy9CTy83xx7r249BwkLgTbZUwoiW4NZHAAsnTuczZ",
  "key45": "57u8QqMxRRKsw7K2DY2PaZFwYKmmsNwZBniHr25GY2xt82ZFbpcJdhVNVdqRhdgs4CWeJ4TtuZFRGjykDtzx4Mnt",
  "key46": "4v9bjQBohTbu8BvZvr3D5PKapukjJV3MxLddePWAf2ppMff9jB2v2M5XUd4cLyWunfwwwmLHo3ppzYE23WaW7y3r",
  "key47": "v6nrnAid1my36kEHQnJMcuhiTgsJ7s568vvTpB2F8VGMWR1ZBVtBJbSw7HdNi1ZiqPmrZnv3zHDnm34iCGu5MDW"
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

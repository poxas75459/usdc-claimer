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
    "3U6byiw6yKnnhYfhNA4HQi7ZGspf3JJSScAQ2dtKmhc5aaR13h1RKi72u9wFsPtugbkpbRsZiadGEAtRmshrC4mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bL9RkHaUQcaTNWVCwzU5xL6F8euD1WvBaPz9BQybqXVn4zSejDFm9ioPgXxTnhsdPcPLS9cxHTyKWmocw9LELtb",
  "key1": "3GC2WR55LnMzY7fWT35TT6rHh6E2Ni4x1aWDCbA8DPQfh39STrHQiT8eVoF4RNkq3Uquowix7KXwR1ZpnzBSgAsp",
  "key2": "2Y2RZDb9NPwrC7YVvVouqWfBNbUbss4XsacvDJZJrU1eAzR9RHUnyGErGFqe51hfQfFKEyXUDrovAtWptbiSVLVh",
  "key3": "4nMuFZuPz4CK7vgCUmwntxmKnv2VT1ji9ohCVhmk2Mb9ZLdnnPHY1S3GS3XX9h3WH6YeoAP175cp6sEcTE4HZ7Gq",
  "key4": "3Xisuc1kF811gPMVz2c3GoX49JzMkhdfi4PTthj9TwvdNUeYUDnXXyT9R1wGQqDLbTMjAVsWQxGmsrSWxk3byUPE",
  "key5": "2WWNKWNpXs71fHE6ZDxSLUWknEXkmJzrVu2eHdU5zzp7HW9DvJK6cwJUnrz8jEYmmYEgHXc8fpriv7d1QpxoxGKr",
  "key6": "Au7zPHv2raCA7g7TsszUx4oWgrtPFz7XApe6oHzYUEaaV1bCxyp6C4JhHBQxX3Pu5Bj7jZyzPmmtqKU884nwfsc",
  "key7": "XMbUNbW1rWbvuyT1seM9xbUhBf8Hyv96HbSG7WbVYXogG9w8MGkYYHdLTE2fvFBQVsGPDq1LNUELZGYgZDDNftk",
  "key8": "2vq2JXJeMf9phZeQq2hHNh34bsZb8AK8E1xpxSiyidJn4uYpbn2GvRanLLrwVhvyGzBUTwmYuSj6yT35FhQo1pXx",
  "key9": "55p4JZfUmxrYAZW6QpWZ73aiXarvvid1e87PdLz1yFYU1X75afhRXhPY1HCw346hdjCpn4SEkztuy4VX7dSKpu84",
  "key10": "2t1xAVw2j6RLgR8WZVN6SW6KyX27RNGYiwSMGkeWXiGwJS3aPEnCCbzgueakNmWEBnSZ7b7HP3Aq41vCe8rA3xds",
  "key11": "4WuJWqLqjKLJD4EdD4vBg3A8xEwCaXjbMDPTA3fw3JjyYG2wiz4hPmG7aeJmcLdKJ3PCWbX7Ag6QiCCdgyrCMSy1",
  "key12": "4FjZEBH4DceqAeGBWmgi26DKon73d51BH89Nm8cQii1UWQPRur9hyv1H1ExChyBEVY7LjSX3iqiH6hp8t6FLUD26",
  "key13": "qqrvTGmM9SuNzoBLye22gMcNQQRexukDGzwsZSFoPz5hmrQMA5SYrkNTYBkK8VxEYEnSm5bN7bxXENZSR2C9Wve",
  "key14": "4StDu1bhomryHYJgwqNXdLeNmppqZFaRs6TFFFSzNkkG9E5fgmeuTKwtHGw22eVNuXMx5ygWsdbLVWB5J1Kqobn2",
  "key15": "3ekpFh3hxhpzjqWLAHWVpxmdgUiH4QKqokZ4SM6BmaqTFMe8GbF32JEWrb6X2C3H6jJyANAMCi5uUqtyPHJqQ4Vt",
  "key16": "3NsBCSygCZQBQSWVnuv5uk9BAn9P3SBvtMLfXsEXMEwNDuixGsnTEGR6GYnu9mWtoKFvPgF8FoYsP1zG26W1Bqvp",
  "key17": "hPVPH2jtX97mbxacvxoSyk8zbq3qNn9SZxrU3y9b1pqwxLFYzKWe6TAXqkpWrnSe7jZtUtWB8nvRiUEu11N7h1F",
  "key18": "5eQSJRRu2R57ZoHxMQLxqGhpYU21txzso9fM9bCHgpHsHG3ideh3EH4pA9SpnGWB4SiedC8dRAqbSwqsFacYinch",
  "key19": "5DUuTuHuohgXdBkCsmTvbxoJ4p3NSy64gszrTjU3ydq8mFroFU5mB4U9DhsBoQ1YCr9djoxMPXBvAfscmBFdAUP3",
  "key20": "347zXTN2wxSF7P6rHvfQ8Pxwkp2oosxXr5EY3CjjmXr5x8hjwJLC4G1o5SdAhe1FH5Zbxxe6Yt92MnXGuakX9aAV",
  "key21": "YdWu7hkYQqDTB5RrMDY13r1w1ED3n4PGw6euKhPEoEqLi2gbbezZfKVNGBdYYDQrm2594XjTRdvdeG4msoRHndv",
  "key22": "3mszwGa7dMXHu68skcMtoTNYuntnpR5pSmkmTCSxo3kKypXtveENiaUGLN2qpjM6nznaxj1nvLhYYvp11g5Psy9V",
  "key23": "4fBYpQjQKQrJ3CPzixybgPb7CLLhqDXPEZEqQaQhqeckDWwfNsrauK9grKNUyJb4nusjBEqFNUf7eX5GwFFpD2Uq",
  "key24": "5SvPMBZS8rZSrkzcCJUhBH98bBLEdADNhuTkJqmrHMGRExzanZuSD9EKmquJ6az9GfHM3Qb1YJ2JkWaMjjPRyKrW",
  "key25": "4Cdx5B94Uh2YE9Y36j6ycSXvRQfqsdQFfbkqKp3nvmh5Yg2B9CNvEjdqUn8HyegwU3gwhkXhsR193yDBkWKnikSr",
  "key26": "21SA1RLRduV6jR3z5xy1RUPaMyc88SK3E4CfdeAbaivR97ooWMwfRSoJSnwyDzbReVNTJZYevMw9n5XmJA13n3Xo",
  "key27": "56X1rJPGAVCWXrmKqZUo9wj7TSzCFcEM6PDnBzDwcKNU5pP9iG6FVcPjHfBpxFijCsi7sg9rZKoimRtRKiTCr1PV",
  "key28": "4nFY7hVvGvTsCxxtet1YsLhbrsH76GJAVbhMq9Dp3kVs1inUWZBGpezDASCiZLfufCxCNrqHrEHfUpa9Va5NhDkJ",
  "key29": "89HEt4AubuvjTHTYrFKV56ao23x6aee4DrfyHzWTTDDHWjzem7mVZ9znDri5LzawsCF8Q2S7vHJGes9pqy3kAeH",
  "key30": "2JwjwmwzaWSxB6SRGAFP3aSGEqzQ8xH2BveUR968bqDerUWNKSJii4sgf9AZGCQjP8NY3gR5TPupqyrc1pXno6aE",
  "key31": "3DMe9RJWQs8JqGXKQ9hGhuC9Sn3vZqAq5oTCsUZuhioUNYE3b3tnkBcVA1nDyVefJzPB36kzvLQKFFxnb6piZia3",
  "key32": "267RVfh7irfPgGAuSjH78nR7xHAeTDyaPHH7rYUio2jRhJhjjjTZb6XimovY7RBcWAi35GZjDvVAxn6fXYtyU1tv",
  "key33": "5WRnvtqVgjMPfxMon69LyvYyTDnt1y4TvbX5hCLeyajZYQHDqEXfPkVoQ7HHY1P3snHDtMmSGpExbbpSons3kpzF",
  "key34": "JzRUVH1mKe5e5zTHgMYd5W1bd8vPHmqbKYrJBufw2vzuZawXPYseevGYfTsUzbHV1UCz3s6DnpHcfzsmLxAaC2o",
  "key35": "U76SzKwJ5M8hJpEj2EHLeheUiJAcjrfD38HqUhqtpfhjLo6BC9t12JdfXhtcbMfHLoJHBfR3Q9dfCcoMoHSCrS9",
  "key36": "4Mf8F3ZuM9eWcjStWStu81yGip2Z4uXEan8YYXx4wBbBsTT2qUmptWy9kpNPe4QcVZuMvFA7ZgiokrREejfAhuqx",
  "key37": "3rKGfxDy6gbEgGiQAkfSaZXboYaGQJuSPe3gxPNcCYTaxneEwFN28DMxZtY3617GWZJwXhBr6f1Da79UqcnQmkmZ",
  "key38": "5ARUEmCS1WEzchF7HmqwRg9jk6Q5KAXLMqEBXvMjaVEPoFdNZ2HGCWdqeVhCUBJeZu7KZUaNkrFNA388gGJAL42S",
  "key39": "2mRogagEaBCS5baXBxVYqVcgnDgmcEcTHR8hBWgnsm5iVZqA2J4sESUSecQNY66SY2WTB1BU6eYpDaKVJEhDTisB",
  "key40": "2DeiQw3UCTrEs66s5TqqGEz7VRQW4jtNz9jsfPWp3U9puvc9QaY1ViuTNcPCpYppkKs36wt6EGv4eh3iF4LpS4up",
  "key41": "jqCUjtWjVqTNHZtTThct4ZdrmwZDgc91i2nJ3XusTrXtCcYp7Dw6FojHpqPj4FUcwymBmxmhW8xzbhWLvqi3B78",
  "key42": "2YTnuws6tc1EzGZjfxNyxySbo1QsAd4DuvigqtcRE4GWSkFKbtsrGUpPgwPX8T162jjxXVacZN83bbnUuoS3X5g9",
  "key43": "5ZWoM2ShrHNWDzR7L99y9uWaDQThvRMMus8JUNbK2F9q2tSz15gDrfWyo3VtrPw4HUW6RHds5TV91SvhdqcbHonT",
  "key44": "2FB6SYvMffPKDoaUJDZ4F68o9V2xaHSuDYBA5mTDaGnyzykNY4uxV8SJWXaR43HxKG2YdjPcWrwf3guS1v5Xm3xL",
  "key45": "3yqtcMdRemdsujRZbLYM8CDVmwbbTzft59LbfrVsqucbB19Jbrpjr1f37dAged1r6atcTHR8KuYZwGwPTwHjFxPL",
  "key46": "ZE1AT4WymSNzhVbvtrsZbD1RmQNdv3YwvoiCSjJzMEbUMEJ1ixmoLDYJbkVV6DKeTpyozjC3MbaPUcWf1ngNi9n",
  "key47": "61pxXD9pbWs44NZ1jTtEEYf56sGAb2DF69N7bdbcRt8PnauWhgHd6cfCSt1YGe3sqhKHpsb27JKbdeNLg9HuJVPN",
  "key48": "3aqwAuPX8uV9CTKtdBVdpgnS6Z5oejZ47zgRpJxrEwdvfrx2aKVn1WWJ9HuYe9EYtW9cqa4auUcSCsxLrP3jGtAX",
  "key49": "3SzYyKBfcXuTSXAHhMzLbbqf3fi9e8M9fPsRfsxBVUeB5URXEVetwgvJBnJYN7qZuZi6YsEfnG1usyyaE7RbTXm4"
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

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
    "4WEvM37NVcYc9HX3dLiKXJJ444gZNVWUfT4yuCZdEsY912idEDJHXJSdeNs9mv2py5ogCyfVBNAhP6FssgTfQpYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21TKux58exjpyeVYugy6vkpLiLWheBVPXi1xozqo5v5vXkSqan3Qe2yctmyo1A6V2pzQrgVvRiD6NGjZN5czFF8y",
  "key1": "LwhnwswM6YD4cHV89WurUuY8jvfhDwiLDKoLoKhSfvMnSJM6veD2tD88Qp31KDW8ncSiUDKtBgvX5nw6kH3aAFb",
  "key2": "3wD5fcC3z53pPA5BJZD2Qxnpbhk7pgMxH4HJBe5pDKMxu7L8mAeiW136NkNdCsK1wZWWNyy8VvV8MQuy38CKE2Dg",
  "key3": "2wAjoiLzhoQMXLHGQLFZbtWc7HEToApcnVQ9U27gFHAdarG3qKFbdhtBty2BQWA6Q7GEjHKsdeGrKCcd23e18ThD",
  "key4": "3KcZKziyGMbtvYwxv318qj6sxo3dn4myE9FeBFjhKAn1kMHNAmA7JTe31patXJkqTmjierCz9ixxX2qEFGdeiC6W",
  "key5": "51BZZucwygnAxAXkS2omstez6yH7gKCAGiNKreBNL8GnECP9mKbU6KcCccPqtNfG3fqi7F6qT5akMfHmQdVnxjrf",
  "key6": "672CwrnsnkN8GSVQDDyxo8A1BUxY19rvoqCuTZ4Pn16y3jUhDLxPwiEopDZbymFPaWZ3rNZBWt3187WQFGVZQLBY",
  "key7": "2CRJeKtocti2fpKA6PerjmFfMUe4UT7P56JZYK5L35yT8Lg5i3m2WfrJHNye2WqGsLnBS4pahYHHwVebrEP8m8TQ",
  "key8": "3dnnYegs3kLTjWiyrV9AhcaZQSKxw98hCvr8w7LyfTzYZBeYDqGm4BVSMouCvdizfFTmpGshfGYdnCEhFcr2nMoy",
  "key9": "4UnbvSYoso7hm2myTwCiP8rnzUiStK3Sdna8LrXoGRuA1o1Zk4UNPT3wp3wFytcpq3MYrzeV4sNHkxmFCwXZ9wTR",
  "key10": "3eJx8iaEw5BDtvmf6pFuMVhHNgvV5Fkbx5KhrNisSr3n2cUEWe27hoCxNjWimNJFeJxZye4ZQ4JcXNaAyiFLGpLz",
  "key11": "2JzNFtofiMQcEnVirttsasJmdLMZTgdVFC43etVeBGPAWJggVHfTuJYh6WH3rLNr997p1chdSKZnzuVdvAHaREpx",
  "key12": "3DJkrXVKvprHW2nTb875wC9pPmC5W83JqZAmaDahC75auYxV7MXZTTZFQUfubqcRAJAF8cCvUXTcBDw96GbMp6vD",
  "key13": "2VNjVVfcg6Pw1RPxmpBME1uhYZoyxTjNvVzGQzwpWtMQ5DmBscbNpjf7sRqEYTf239LwbGhDKyhtk9kAP9oYop4Z",
  "key14": "3xb8dtaNWk16w1REWdkKffxhLM8jvkNj855zg6TVKLPRq28Pomi8UFJQvRxVvQF2kx6SyDmarxj7oVPpeqCKZ8QU",
  "key15": "31HtQotFgJw9Ke9FWJgpAJMrnhjrZT8W4GNRUAuDCXRy1fQrUPv2QbiH9fWpS4z8hXFZoBAU3BtSk27Awe2CqRYM",
  "key16": "3vaXJpzbE8sKj8tfWJvTMFW1MLMvFx2xa5Pxbo4pV75xXzyW29cYmaRE4Uy4NyNPFT51rLUnz9b6cyGBPCwaqaw",
  "key17": "3peDfX9GrSQMdPTpYLKNQ2pncnoYAQvZmtQ8JcFJpGkjzH9dxJhkhmAHmfuFF1tgjeQNdbc6Z8PhJAvGb7BWqUjR",
  "key18": "3n15r8HpKCmdH4pKJmobvqtCRQS3nJfkRz4Fz71WAUEWvJJ46FYKoAHuEaWgRQLiuRVUafzMvM7FJwJzkZogpAcd",
  "key19": "4teEDcwoCiGYnkGyoDpEw4K4RZgqSsP3BsJQTwbhb4gSfQRoov6tahKM3XtTGewNSeHKidVoM2qpFqSgPQmpiz9y",
  "key20": "4eA56o1rtdzRLcWvfj1h5FNVkpJCTVxbtg9zAVJxUdZaaKjWLyf14boyqKpNikTtaqLXKE7NSBcUc7ZoZA4t9bPj",
  "key21": "2wPSrz5DuZGavMwvXfWWiBLSSK92ZuvmE9N6RTk34n6siEeiuXhTAEbjBFbZYgqSHtuUhGPicUZCchMEvNo528iD",
  "key22": "2jcSVsJmQbw9Tj3b6b53fWyp4HiDZpQmCSL6rJk5F5ieAfphmHUVPqaYwfZbgX3FFK35hzad3xLg5CRk31mwSS7c",
  "key23": "3kTAmeMuWrzkHNzqwUrnpiLdF9QB47od7R72kLNRzX12y5ySMovNHAxvUCaUrwvkNgE2819jxxq7am3ssaMzueX",
  "key24": "2tV46VuQzi6Xwfxc1rkLHu4BuYhys8frVECzqaf3PyEHaYkD6oiU2zmtJPD6i89pxGbNT95ppaiPN6JE1NXp5rko",
  "key25": "3BTLHsyt5zwFYgFaJewW8skLFztZwZLsHLNG91P9RqiyY5gu3dsRffbLompuAgR7D7h6CoCteS2m9fsoHpd8QAZA",
  "key26": "3eQqMGymPA8fjgPxe38hb8RZsArC1UhUuZgJP1pnF5Y3vCDDZsEQCWYDwVjdSon6XFwfK4t6KaX3hsoAm4hY2UG9",
  "key27": "F1z3vrV9P8shgpzMneQ7j1bqsbt2zckeiic972aaVjxsGF8E55M8QMfYa7jwod16m9a9qd2UAQXFvk2RAWVdo3Z",
  "key28": "3oZuFT33VrtnEVogdnqsLD5JDWpUbnx5Q3fYeK3yewmu1bT4uqstP9WQfCraCzWvKEAAYdKNGuGtNi8RNvjK4o9X",
  "key29": "2Y6dhPB8AupwSaywLCqBxKujuv78T6UZe3TpGvQ17vYhN2M3mL469j9i883n5HSotzeWBuan4qKPnvwtLMzUVZ1p",
  "key30": "5bcmDBudfd81WxsREdTKc9CbZyanvBYvW3TQA6Yb34zZSo366C2xiKkTknCSHhD1YWdeepNTv8TNL6msnQzCDVYf",
  "key31": "3DhZbXEZs9yD3GEZnPPTPFhBMvMVC83zgentdE8s6iNG1FsDkr3QQ4Pr7fuXcd7icVrdHdayK7YuAB6oQDyeqskJ",
  "key32": "KLpM7bsFQTa4JmdDxsoBanULChw1h7q8ossZtfowmoaSBFq2ncnVhyHkDza3uXwKiLiVU17bPEfPRpUSjNDA3VT",
  "key33": "2EwcdxwTPWnAXGz8QoAkJRkJiq72Eo71AniMHesBu3ZBz7fnGNSgsqAgezyNoTrSWEUSgGDqqq5r8oRox6ExCSYX",
  "key34": "4N75y9boMGZPqXEkewAWmvwXy246udk9JQgGn9ZTknWxr5eVw51hySiLuAYPkyEXAwGLaqGeU4r4WTWGP1yQ8G5P",
  "key35": "2Be2uHo9tHDDMgiNvP9xpGMPzE4J3NoNTU7ddriAeYYEn5cZYmr2QS9MkrsFtPizCyD2q9spFMMeSRpNTJGsCc7N",
  "key36": "5EQwmnB2wqvJwg5fVH7JKTSKjybJ2gWvoKMbc2rWDeuuDuv9oBsvKWm4vs7skohi9iMdHdTB6TqSQYtsy9bTm8Ct",
  "key37": "4yLAqQQPZxdq9zMMviVqhhFCN3H8Ro67EB5n3fWxafD2arsZmYnhky7CJHBhWzoGBNDTnUeF6okJ5VSHsXKniKCC",
  "key38": "5YvrsohFRVvkAiYMVcZeLqcMmWWc1etKfY81SfEbZShVPTvzU152WZVmB5QK6HDuwTNzRT7qokaxkNCYjCJt9o8f"
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

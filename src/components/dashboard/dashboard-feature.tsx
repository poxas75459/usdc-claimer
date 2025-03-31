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
    "2vuSUx4tfUD4wJxipkZoexSsKYTwswNTSzgncYU2kuC21ZBGWyfK2ku5rqonw98euE2QtFJPV4avzMXUuiG9Co6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Dfjexrok2Pjdku4QKvxU7EFntktPBKZxjBtEXkxNncnujqxqgE4HsubtkAkzyLMxLxrYjUk6QgipkBmUGeVGYZ",
  "key1": "c9Vrqtto5KY8yQfk8DhoAVFSMsMmmRd6TvLVSLbfF14NM7QU11c1ZFFcpoiM9j4mL3CKP5sPVqobujoymNMHnaG",
  "key2": "2ZAYneUkTAVrDBQae5bQVJkSbA89ebLiHkFT7CZNPHnvTcWYHEJWxHUBVL8mUZCH5TRP8FiGJ1miwLdBo5Jc4g6Z",
  "key3": "5k6kiEgrDXvg2Cc1owh1AddDphiP4JMbERUjd46rigXeYRqaeifizfVxGPwE8RYKsEzyFdqGNWGsx7GtEootrzE",
  "key4": "5jiyrxFoHF3QhLjgnmXTpnrZEeT5i1D5AC8zr7CyMvQieviwJf4DKzmbLzBCXxi3eczmsREQMBkhSJMbQQqY2xk",
  "key5": "17CjTKJoQ5ixsuBKvqKu1YwxGU49Fra3xdywFHNA6TaCsQURJahNTNsFqjN85v8eMyhPSxPA8v5ru2njFjToQgp",
  "key6": "fXd2YpgnB1N4q9SoKyTn7FpfHyswESfZwkQpkw4xDE2JKJau46NaWYWg2kHs7MtcBVEuqqwwTUfTinwuF85dLSy",
  "key7": "2yq6cpzYdMoZuJ5JrawiQAwcV9o7AbmkWGBcA1gnDVtvhthZp5fbMEHd7ntZ15g2X5ww7GsBxV2WQFxGtoW3JmLZ",
  "key8": "5w6tQCgRZPVg7P4Muz81q6jTM2TvLKHgritkzkwUR952D43k8tHHw1kgs6WUew7WHwzgSRB4WzMte4KZSro4cjsc",
  "key9": "3pHrXAqv3oYL3H8sdKhARFcKThdjqyXSec73JNL21wq9W9g194yQdoE88Ma6RcAXt24hiX4rpk4c2xaj563cHirt",
  "key10": "46S7xj2w35V8XbP6Hp8kTnJ8Zg9hvBLBs3sBoSjbyQY6YG88FMqLjTrZG5yvksedizByvwp8kr5YdVZ1MAXpfwy3",
  "key11": "2F9MA39bBbRcMeHpzAvHuZDaL1EM5BHEeAJjdHC4rWUMfx85ubmuiLDbDWvmPVREhH6Dm1fgBuAE5acYaEo6usj9",
  "key12": "SR4qVh73M1eAk3ovwUwMAzwW164SsL3H74oTCio6DQmJFR3UP98QBsvvpeHeJmBiikbA9XbrqneV1vYxQqKgbRo",
  "key13": "2uxY5PNxSAUGRHMmQTqEedwBGymGh6dN3ZFfdDdciuRoJRPY1728EherE1NZ7AyXFdyZhFapzdJFmkpwHQoHa6qA",
  "key14": "kJJw3TXEMkrZwSGXhKrtH2gsamGrBrJcyCT4DGBo6zkuBKwqQg7LaTjV7ixWUvbFBdCVcURdTjKQqHcZ8KPCLBY",
  "key15": "4Vy5vyHKVJGxegS2bvYjtPX6Lk74AvyhGjcUTNAsPufveJM89aab9hsEHY4V1jEjVPcaPubYoQn8TuED4YqhtTKY",
  "key16": "8tQZSvNaEPZgvc9WMWRj65f5e73wgZWq4bWQpU8jSQE5EgchbgAdqpeL6usqkFa3KFjnBmzc3hYhNuEgqCoc7W3",
  "key17": "33gHJUYvcXLUW5ieiP27TQRMqvetGi4dunANHe5QwetL5EiRCuv7VW3R9S28BgY5x2zjsBAMjHfVDQfzzKGgjEA1",
  "key18": "2LwYn5nW8T53pTiPiKE39jswTPTes2HFgAc3fQhUiaNEmvEz1Pnp3Ak3xCmipTKfyFHd4rsgg9Zd6pstfspfvrDu",
  "key19": "2TTBZ3K16SxRzHzibFF5Lfjo7BRFcXXTygSkpUGEe11uZ3kdEtsbkXtxdn75MqAGTeQzo87RdtAG3EN2RpdG47ab",
  "key20": "5SsjyUarJ9tLf2nJGvZVY7h3p5xRTUFaapGjdJbCo1aR5pxQUHvWgDWn7JfDHAApCTGVWGFxPZksCj48cS3sFd1x",
  "key21": "2nQvWNUEHujzt9joRd1TDNfnNUqEHQSguH5n9dYBu432DNDrdo931SSm8LJzXBYo73jJvxLRUeEuFsvFxFsHDt5o",
  "key22": "4XDn7XBBk7TKrMfe2LqRLeyNAWd4S9Vwjqsa4QjnmJh443yRDadKNQAdGD5AUkxe1vizeBEnYTrr8QfNxZB655T1",
  "key23": "RXdnU51KZaLYVJ8NtNVM7BeW5vhgW12HyZWMXhw3dszPTDWvcnM5xpFyPasU4q1aexfoXpcAsJBFpFoYqdYHFSK",
  "key24": "3mtBfctFXubmwMHVYgFwuQqjTgCoweMii8prrheaVXEFvsK43DixXykXoL4ZdpREei6e28DkjiJwiv5TthTajF5G",
  "key25": "5oW1U1EDEwtis5SaXfZEuYxN9wumvMhsd3KpxfgQ4aAHRd2grrBWhDmbCzgs7y7JB9ogheBgu7vyrXrUranuBMKE",
  "key26": "5ehF4FmEnJHtDFzhRaRyvgcMCRip9EFXRAcvst2VqnUPv65DXWR9QqU5whtrqd8Dg1kWWePAGpvdVEytXp7zvcFL",
  "key27": "4gDgpuqEzQYAXefvzgF6XdH3ZeEH4YPejj3AhNVn4cbuaG5pcvuVsDXBZHgeCJqGnzYtUmjZgQ4hjHZ5yNBQ2vKe",
  "key28": "2iZA4QDr1GHaAdqBpxezUVRUatEJnq9sqztaFShoA7xhjmFmdGT97rqfKZEL5uMfqsn5XXX91Z9o6c5LdZYHLCRj",
  "key29": "21kcthrcMrWvYCsZ1PH1GW2T5jNpwE8frdX8Ru7DVEZZUUe4iz2j7pWsE1ERkeXnWJfC9txA1bSwFEpVFZKSwraB",
  "key30": "2oR17zyfAbsBNCuPn3sTwu5EHJP2qX3atP2o6J8uY7eQYQs7h5GAuhNa2DVQg5MDnVVUNxcNLWrFpfHCGbZdnYwZ",
  "key31": "3XtPSWukHuYpnMtMb3HaLbZ3b67z3QPahETBiLHvScPuyueSoN7MGzYwcgwPTfKBwSMW9Hb1D7FK8Wpyfa2zNS2Y",
  "key32": "24hbzS4VDACEfkqXP8yNM69gBuy3rMvApgnqENGQpBwpx6XwgtZyzwm8tiRGEym6SdXNZFwM1bnzMcjUe8NtrWPg",
  "key33": "5TqUz9V3AyzQe6bm9T5oqpCfYFc4v21vpsNdS4S12Uzpe7G1YZyrecwMfNoz2D18V6kX4C4xdo4x2jweebod7vrZ",
  "key34": "2GAZzFF2TM1H2oDsC7A5zLvbZyttLUFBpqHJdVmZxFdf824DpMDxPiS6cqRfQmwKed47bNYhR6KtWkFaNzywNp6W",
  "key35": "3a2BkkA75UnBLmUVx6Arrn2244QBCk8LD1Qxc8rLxzhcRsXZaoHqkW9SxH9zTSDSB5nHu93fsVbZLJG3Gwq1wvPT",
  "key36": "2V8eP7aJP18giUbi62m8sbdS6eNhDTaReRXawfnFKhTFzQkWWdpqDdKB1FB9rd3ZxreL4rZJY4c2BzPKXmnxuKqo",
  "key37": "3twV4ro33htUrPkXriqziLehDdp7CAZYqHiGAAZ23SzeR8JZuUWqV54ywvvJhP2efGMitjtvAZ565WN12o5iJxFM",
  "key38": "4n2nAoP6DE5o4uyugFths64DQMuU4aeUSneZRgCknVnpps5UXbi1gjRgRE7DVcoYDULWFHxfjQtFCaYnfQo116hd",
  "key39": "28rwz7X4pcg1HENtets6UPj97zLE4xDdtxEHtmCKqA7p65rWybbUDggcbFoQtpNeaizLK3BUhVg2B3r4my176QVL",
  "key40": "5rqRTzVVPZvJqJmvWcgicDxEzKSmoM8BQpqKeuZFtchs8Jx7sfDsoVfqQwNh4tuBkat2R6v88oHBhX6CeqbubgHN",
  "key41": "4XFAuL23DLfavoMsY157Vd74oWth7sA22DtLvYUKw1Amf9J2AUhvYgjjq1whnmhV7wmrksNxRnidcvWu24dEPutn",
  "key42": "DTE3jjMF33cc5SR5fgMJWenAMZAwGxNXWzorEjZmpbRCKW6QZgRU11dGLckb1jxEYYWEwqU24ZyySxXMLjwd26D",
  "key43": "31YXzyAT2UHqEmKa3qBnBc8FYnKkeUB3776AVU4DW6q5uYqwazRrE3WZLcfqSxiqEbY8aGyQrdXyFBFr92yUjfox",
  "key44": "2weEuGZckrMWj6raNHtpdP7nphBVwECe7Kce4Qp8NdAJpZgqkRWr9Y1KHTnB4kMhmJwZmt2XSxJwTH9S5AxfNECZ",
  "key45": "3Jk8VDH3xiHJCzG27vDh3hT7gwQenfTbGzsxS1LWAcwMNGAJwwTkYo6Kai37HFG3DrSDvavaZDBYMRmv1t8exrNY",
  "key46": "3T1gssHkfBzF27VCfYwTvKfiZAbGEndYNsLtU3jtMmck7jTAHqfKoxBwDnQRBL87jnX8RigQPxiHHyg884n7bFPP",
  "key47": "3tpMNYETjgs1qxwRLLrxrKVyyGDw3myZw5KxEWx7te4kQSJ4eVzwgRxyQSbAx4ptZRzxJn9unS9XgMyvd9DKas96"
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

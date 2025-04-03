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
    "4JgCQB2DoQ6ccSk6X7nu1LTBs9Dm8ovaUyXJGnGmBSqaAvJvp1knpPV7MRQQBNfs7ZMYm5VWcXyr56rCd6UKALsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHDU6WDUvUcP9L3LVRoKbNi3cUhXf36GzfvzXCPrbh6jZqngdNjoHwaGkfaaka2yJephtKdhBry5d1iAf4U7Zpw",
  "key1": "tFBdZk8com6GRuQFkXtfQq2jNMuuLyUaurtiy8d5xKpZgPu8WY5uwaWaG8j8JWMfduBxgruHZmuvEU5hAAqfYYr",
  "key2": "3n5fS3fFuY7uhB8APG5RdSv12ihfnEkpF5QRJaS7JrD6rAwzvdfFbUGStA3YtGSgd9aQM6vfUEMVUCtYZuJLkzhx",
  "key3": "5Z6x4P3LSZDZ9dcHAsvCGMWP15ghVtSobwt2DrKZJqpkr8rEU2peJfSUSxoZKGJeJiWUqp3mGDP7kYGcPxniHDT9",
  "key4": "5LvwAyrvKTXgY2eDaWKqiJTabAtheEcoBFC7nRankMrUyUUPnaaQQhTTffgcKg1c7EQyxFM7UDQVmmA7pPStCqiZ",
  "key5": "ibUfJhWp7PMPdXpZzMb4RrtZCdF8hQwZVPWY3ivAohffNB2oZCxe42FK5yRmXBW81kGS18FG48d1QCAf7qs1ceL",
  "key6": "T89cfwjv5DEQeJzKbP3sVVsGPnHAxvU7k6SZjFWmnm2z23ycefGC3xSB8aHfugrzHVWRMPhGNeBznrXPpc5Au2b",
  "key7": "2zvVBhxJuuXHXF4it69r1E922oLDFrYpYoLVR3taYE8KXPWeKuFCJe1kU6Vi5jutqaPYUTN2MUmTFXNMmFTZ5Ur7",
  "key8": "3fLAzXT7UHvtFx15o75mV5hB2GXhCuf9FdcXeDVVYHSatm2gFaDLAN15Kuwa5NL15p7uN7n1VwQdEW5P7NisEDi1",
  "key9": "2XZoZNkkZwMoGXitftxjttQs2ARgdVCWZGuBfNXEaAL6jPVoUHXUT5WfVp9QhDVNDJkPrnm2SN4w1Db16sh1trpp",
  "key10": "gfLt7VLWTFfsCo4SLFTNjTzVjdKF4qTCDGM9eS2pgFxHW8tNLCaQgpUS4Ugn7Rbn5e9c4GVV8ad9muM57UVn2sB",
  "key11": "3aHuyaQKjdgrQARFCEtQTYUwxaBtRUJyEwj7Uv3s1k3frn1bmjvyY34sJmQe6D4eW6YYbhbMkJNFPppmY16qK2PL",
  "key12": "5ucTXxBKyigsrNViCtjPVR9rYXdKP5QBBFpEA758dfGyPsjiXFLr8H7ErVz3PoTSTYj6SNbftP56CApq75LVuCiu",
  "key13": "H76tik8Wj8ez4RMr1HdYwXsTdtai5jUhYxfftBV41gwPqwDcwRuRxnqnvPNd5usGZN1GGRsSX8rkLS2TrjSjoWc",
  "key14": "4ZHg8iU9NGGsbrtfhxmm6BgYtEPFemkYW97niG3mQXjJQSoW9BaRSLuSDJJyTYwKvTpYK7H1Yk6Xxxyf6h5A86a6",
  "key15": "23hGx2fqegH6wU6N1Cax71vGSbto7YTX53fohw2K3a32KHVVa1sky92u9xwhYKpTE4jxF8F1673oqdPs7zsSjM83",
  "key16": "2onX4RR97CmsQP4UPm4kVWwkT3eL7H8x5e8wzMdPRxM8oLi65hmYYGNqmU9bvwpy9eX7atDRkcXEGp7m2hkNS4Tt",
  "key17": "2t6v7HCtECNkxxP7WrsyzwzDA8EdtHaSeryngbsYqySKergKzm1SHgBQt9HWk4V7Fg9J3uitNoyTWcSLonu8x3Q4",
  "key18": "38SHoQ7prDFysyTnSfp4YSBUHXL1dr163z7GDmehCaQBg1gUbLse4hxAhwGtyHn5DrLA36BaVotW4BD8k7z3Fij2",
  "key19": "4QGdQFvCCdt1m5GZKFcRnErFnAxwkRcbkiFEXa9cA7FMyLZ79d9rQnERWbuu8ddGdKsEM5LSwstQwJziUUQwgCSd",
  "key20": "5wkkw7Q4YHcesR149XMyXUZfWfRBrNXuBQLSszSHK7pUvaaFvNWCFtbDBk6FstHEL2XNqjfaY1fBCetTMqaN1A97",
  "key21": "Lew5PkQo5F6Msutenyo9RaJbYfpW9wtLhbgFV98iEHMg3itZtC4ZYQCdmiytanJkiPZYxQtarLNx8pU8YxkeUc3",
  "key22": "3ESmRxNiPcJgduL3p2nWQt9G8FPcNJKJV97LtQx7LL8HRyYuQoPLiav4nVNMkQD2sDh9LWdgeGfBb1AV9fUUANMf",
  "key23": "4pMfMJRoFevUc4iyAP7wemkeYvuU3wvA5F382jqMLVJr1CYY2YWfLEKDgDGgDVeMLn5ogqueWQmw7SvW2i9DSCB8",
  "key24": "2T33Z2L5rBan7RgGUqFsdHbYgYHSDsokceFDwLduRDtRQchvVtTP9H7JDe623gLkFXFfEWu75YWQuWXv8LNh9f5f",
  "key25": "JmLWpnd4esAgVNHFRxxB1Uy84eEWe9kJiHVwRuftWu1LEM9kufjNZga1hLaGFLa9SsV7pQ88QENgJhipdmmqSgr",
  "key26": "v4ChYZ3nsqkQ8pkTy7QBxeLqGkJ4M8kUxevseW97MwmwoJ7L6WtTuskSxtw6d1MWnwAYudArXjdvkWJuqxfFUNn",
  "key27": "2TghkabhgVi7pBoTVtoER66J8EmKzu6RSzZV4uEwcoddN2RPdbeWCiHVrAUJ8D3Ef44c1YQRTiNvy9ZWHgStL6D2",
  "key28": "367ZxsaHYBP8MFZ2jBNURKtRTVvaGndNKZEs48DmyKh1RPdhF6ozYgHnNsZSCQugbfk1Qvg6bqpJqpw83LpzSNcS",
  "key29": "38raiyg78WeWXFSpu18ADewHzxKLBWsU2JSdjTypyL4wHPb9ios8zd4yxg5Styabn7YXi2fg7eVP1LuR6eHgg4wC",
  "key30": "5hAMYC37R5yoSX3paD1bo3RsfC1E68KBi5XCUeoA6LkT4c6UZV2bmAt1Ckz3CG96tu6DG185wNkdXkoUnuCnxHWS",
  "key31": "5PHMdbKMgwRexfpQuDnzXWbnGgguWevtaW1oBGmefWtC7zu3FD6MzeQH4Whip8jphBpK2tX1B75W6dcLAh5PsVa4",
  "key32": "53Cmg9nZm7zw4Yv4zwMeGgePzJd1NVS4bNCmL7GK19T4m1VaRVVnye6uKaNeNFSzCqtWArtnRFdkPwMmAmC8yTmW",
  "key33": "6mnYPJyt3WcoKKcBA2iM6CsaXsK5RRpHPkDuaS8KFrZHBcpiLwzY8er58gehov1yjc734erDHWDTTwJ8VNvBWmg",
  "key34": "TXF7dQRgCxc6oUnqKFW5Ezsx763otbKfdib1rktCG7UtwrkGbssGj9Xe9ouK3LS74z46DJor6uNc2yhY5VTMxBP",
  "key35": "4b8YoixLmfaZ58aXtvyTzkyvt5vYX8rmxGJvrSckDjzyB4QuhntL13WwqGbLwu2YiEzwWzdD7fLcFLBZQ5v5PLHf",
  "key36": "2qBavoAMwaMdcc2u3BBzTiGmDY4oNrjW7Yryb7YGoHfdm2o7V9acq7akocJ6KCYBTopziyGq47cRSB6v8yyKDHMw",
  "key37": "3kxfSn7192P4UULWGhUqdfhacuZndDgQuncrJYqXoYAER9KbaThh7Twc4PCDakJatTyXFWrUST5CfsPpyXAkbjU4",
  "key38": "nU2MEQxPUMgafPrAGDW1tVTokVgWnKtgTdJgadve8YXj9upFZG8y7sPGQGkgkadUpqcJ2UqPWkMqcTGjdSc2HRf",
  "key39": "3FV5MPDAgPzTG84AXsa7tTPLiWSrYA7kkQG2QJt4sPNWnN6fNvydfcW6VZ8AyiQzEcTqRq4irwqP7v4zMp9SQZcG",
  "key40": "2n3VbheWSviKAJzX4QeEwH6cZfSgHuvmGLFMXMPzCjNVUmcaci5iZtG2Uyg8kvLbzbKo3xGrPynKqc9TYLP1aeuB",
  "key41": "3fopqDJsrGTkMPf5cQWYT8QqbYet54Uo3hiqTo1eQtduBgy7X19r7pgiWSy3rBPdd6VmJcWHa5T6j6oa4Gfi7uwU",
  "key42": "8et33gG5KzNbPkxWYtN2sE2oXDMA1ADMfDXRBpHhbKqVXpBKHyS3PjXqHbVtN1JpFFXVPqwzBfbCvejjaV2ZZih",
  "key43": "4fjKnSP3rXbXpDNgBAPFX5QA1ym3qUCi7k1YJhVxpXRNKc2k5JoZ7nVy1CpG2hEXRm3Awby52CsKwo4eHT8d7XyR",
  "key44": "49W8Kx999Z2UYPw6w6j3VScL4qQM9u4XuSud2d1Jg4mFypPQaKEmSYbh6eG1dRuu2ruZGkBueitymb98DU5ghbW1",
  "key45": "23dBYzNyPvEMe9BWzLudBWeS7Krcr8vvHVnDMSSXr3yFri3F5ZPBsKpEeo17W19EozG3o3oBrFQJZ1PxhjmLw7o9",
  "key46": "2Mw1aBHkp1mFJiptq2Z4fKZj45E8CDziX6Y5JibLYzgE23GfuHbBNTYxjwa684JMWW8XRpW2SbYGwP7aKHL81M2T",
  "key47": "3E7xrpyPH8wqtnt2PvDHAQx73dcLK4AEEgQJsnSsnCzGud2SsL58tuWjB5ABvA1h5wY9d1Jx1XhiCtvQQXz8cCLv",
  "key48": "252PhYoHZrmiuU8GdmxP6qmmnBrjDLxB9UzcAi14jdtRQjtoQLoWDWQXWP6ZxhFtmxs9ZSaG7KU6AdgFQZ2dXifu"
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

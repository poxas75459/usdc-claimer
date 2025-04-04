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
    "3njLEtfVec7bw7HZa9hr4zabPnGBD8sQ7ttx3oAyM1rynP8DaWnKG362KNgN1CuZGNLn6Kcmz3BBTyKZMYtYVoRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56so5iFJ24jzDdYo659h8wtRMGeAwSDqYcCTu327yuCzWjLqGFnhPMNovqZ8DSErxAU1ZQiqDDe83dpi3vUjzDts",
  "key1": "23YERRDStnY3VpmMDcrfqFqw5YHkS8tuGn5xi5tDor4mLoykyZxCeUF93RFFJPssw1UgzdoRwEFs9wZsXN6rPfzN",
  "key2": "3uJRTupqLHTynZkCRgbCKpVTM3T4hxBphqozuM2brUkyo8JHPMihJRS4An1t52yabtbqEjv2JfqQt2BqHadWqdTA",
  "key3": "5m8zG4qxvXxrkNMUmqR7coBC2xNdoVLbQKAYrmwexudjcR9EJZqxDEVtphhV5gFSQgiF4qz1dWtxGj2Lcj6w9K3g",
  "key4": "5bKUDKLUNoCshBFFD93yJsWYoucJ7rhcVvi98MxGUB5bzn6E16GCbLcdTgZyQd74yFvP78cZV9i3Un5t2qcPjuVM",
  "key5": "5Kfz1rxfPBM7UAAPUXp2AtYNFZJguSKz9ccnhvwmxGSQN4gQ623ikfozWqhW4PwzgZZDbsLERkbHZyKZXsV9pa7b",
  "key6": "3rw4mMj9NtFGY9VgG4Xn6ZxNHdSJDMbkLwnHnRe6PCVWzPx2dHWTUqA19VKTArvLPcZdnofsUhszQ7RFuisHcTE1",
  "key7": "624pyXhH79N4y6YE1Nmd9hmrCKtpPNNsm1rTrcHQH7enmy4i4ctnKKb3uQ99QwqqyzcTjxBqG1QtKkqYWVXPbKXw",
  "key8": "5jwR5mMug5XAaLt5YQUnpo1M6TNUE5qk3NBiEgHCyaDfnvWq5n9ch7zJ94sE2EeFTD1Qaxrh4v9yLwbzPLMndDnV",
  "key9": "5YUJLhcjSZyDMT1JHDo8tp6QdFP3QBSHHdonPeA6T9qRGnrkqmgXi2nTFCtQrZoV73k6xpseGDbTbm4HJUhDZT21",
  "key10": "XpLQcZGNgo3xZpzWCDkeD5dx4H8HWwb8WVNA18QDEN7HEd863qabWmw7sKnN8btfPaboEMtVPbmdNVHWpcBufKy",
  "key11": "3q7TuqLLaZD7jMzaUKpy2JrVnxJZViMegceZKDcZHGJy7vVG55ZHfqGL9HHdTDmxPQD73nTo9p7Wgwmuwd5S4j9b",
  "key12": "4qxdSS2HhgD8f5d2ZNHf2Uj4wKxfZ3qUbH7zpAy3NyvqaSd2py5fWKg5pATuYambHKc1fWZw7FUAj63XCUEo68LN",
  "key13": "NG2GhiKHi2yCqn4eEpuAerTbFCM56AULtgXgULUBFkyMxbrnaySRLjnK5XCNZBgFWBBJqpQsktrsKYFrLCSme36",
  "key14": "4MVhRzvGqhTRGgPeck92vFyrrprPVSYt4Rcx1V9CF3KsE8LwLiF3Ai9zumXvXhpDzfDcwBdtt4etYFRNfsVvtExm",
  "key15": "h14nepRD9D16zfrKLrPwyZvZYUiVHJv5JE6EXKKGX7tCdtfync4zPGb22XwyqpjzMGUFsC89acDbAWUwSBFNn3a",
  "key16": "2WDNA9bVdHENQygvbw3SwCiDCJf39geKNqwTbhUMLAHXSwmgruEE3Pt4EWAd82JfnrfskiB4VQX5wuGrzJcof31x",
  "key17": "5AYdfqZsWoUNq7wHBSfMFxaHYvS7zHX2VocPV9NwpRPa3eTrxmCKbCh2DWWWyCxtiXLG9jkUHxDtA5J1ssq4WQcZ",
  "key18": "2iKgSZeSGrahyFqq4dz3gWhPDa2QES35NuEZ85MrWtQ2ZbRQymb28RPVWtiTjjDHpF3L7fE3z1qtS9SpcaHbaudL",
  "key19": "5EgC2uDkquPFo1vpEV2aUKhQRdA97iMmTgwtb62p1nA7ajzx8RmnGX82EpJg7339sdZBX5fNicsPBjgyCQTZQci2",
  "key20": "62cSL6gvrbNfzn1kcMAwUa22FfnDdxVtPwBXgXuMPzewX95nfFqfqNsbn8Y1kNPiTwCn9rMrVvXSU5SXqtsuC1xa",
  "key21": "3uEiUS661sbmsszf9RbFmFcBQ3gXc4SKk9FkCYYXehUgYYyaa1EzwN8qUxDXhGYZBnSP5TKHrxvQ5WGNTLV4XBdX",
  "key22": "3bDxU75gdBTXVHWi3kfz3PXvnQpQmN3LUZTRVn5dzyuuSGW8ciTGDuGzUyUKHsmRefa9FrQVbuN3yxoW6KsmyadY",
  "key23": "3zketxutty5zRrBEEYgYYj6tvboBwazEfdicUp5y1vhF41xVmCrGqnS9svMvo1eaq1EzJi7tr1jaqLE7w821Ybqm",
  "key24": "4TVrce9eAYqisik2FcSHxfRRZu5i3hnLH6x6adwvjsHuUQfJtMbFBrDBcDjpbJ7q8L9zJntGjSNSVC843UeKw7Q5",
  "key25": "2RSmRd5KLZpFYa2PEiFMoJdYiwTqLpxujW1yWRjV7Jfw8qAD7EJ8NHi4d3yhamHeSzz4r4PoHYBPuqWxcRXV2q5C",
  "key26": "5m9y4coWtA3H2CoE71r9mgfp81rYYu2fXVEDGXtqfKSAoUZ889FYYuJzFJziMNEjMMHPkHcWCMEiAbGH3gSLv5Ns",
  "key27": "2U71xzCDwjQtS8XSds4V5jijzv4WZ31e5BxydVadWQhmUuhSZKTYJLZtVweaXtmAtd8RQSBrV9rnZDKXGwvhN3r3",
  "key28": "KVEV2vCYVk9iXdovgusefJJHe9PQSzdjC1WBoydKYKmWyYNrE33nhoU1Wwgd19yVEJTxu3xDorA3iWkhi3EEFob",
  "key29": "37gR1mJsbkEaewvjA11qMHxqidksb3mZwCp6wpPpfCmpNnvfjSZW7S9WoNxv45SbVjdpW87vto4LAUYzjLuxwCHr",
  "key30": "wj3Q13RhhwjLXwrbvx7mATka9jqMv1e5iDTj8itBTGK5YxBqryD6kfpBh4NiwfNFnkDFLeLvM4YktbubiCzuokC",
  "key31": "25RE2pHCb28P88tLXyKhz35tnQ1wAkyYScLZnwCtkoQxsF1kkTcCaNFQcgkCWoLMmFKHj9DNLSKfAkaDHgeyMQgq",
  "key32": "4TGx4EHwbdMpaaFdFTMP1rZmqdFuX2H6P28jKaVDJKZG4NWBXueHAQ49Yy3ZE9wdhANV7zr5KNxNxH64QB7mMFGU",
  "key33": "2hMhTXmxc4p2Q2sShT8xWWo7GFwDvUkiwi35huG8rgYCai836BFeiX4jipEGm7Ke1UsyMWYG8emdqBPwpSZJaWVA",
  "key34": "3BUaXFAxjSMmzdwMF6ezi1X96qQvfA55LXA6Q9GH9Y8DgPF4EAA5KUQHp7BxFZA7HbuLTNQYiuHJ8NEvydBHES3u",
  "key35": "4spxBWYE95E5dkQMGNqFs251oHHmBv9QMn7WB5QiQgCXFQcscffozoiCybKLnUoGS82zdg67k8fKgjTJDK3PjKGE",
  "key36": "oHd7vCLu6KVTVHkWxo8YYdspSJiK1vqYKWuDSFrqEHQXcztNoQWu56cfX7xD4L4cSXUdBi36rRMuau7ceED2sJh",
  "key37": "3Hc2JXAcSAmkoYxUgQMJZvrQcrAPdzto9gspAmFi7eUo7cDBW8ciDUt8k1wMSJjWw4wY8qwgwwnwgcDmEFPuVN9u",
  "key38": "57RMgGyMUX9KvPyCLv1YoDUUUQpd5MPPMvnu3fVyN2A6rHikoV9A68WWTVER5GwyJQ9FoSFxN9QsFEQJYsEsymVm",
  "key39": "3JkSsnseBXmAAR1ieHm7Hbcbx4TNGmaSEnUjsa4fhBJRraioECGpQVz5nhwFdqhxDDXQxQVFczk7dUCL9wN1pv1Q",
  "key40": "2Pah1CRkHNJubYdPd57XhwhW4frEFo945vMtSMP5RtUdFrC3wPvev57GYVbkN8aeMQsgfDCz7fv6BPyQK4N3gGpc",
  "key41": "QhBGYXabvPeoB42mRfxMUJaeXbUtdWTxNwdA8zcf1MksAR4rPz8Ge3GKjMRYNGCkY2w8JQXRzmRcoN1rHvL7TXp",
  "key42": "46iD5ion8FSdLsSEtb6qWk83hYzBjiKVGJHpirjy6jq3ubE4UoU7dtijgPhXjPGrXvCWspfmaPcCn55QjcC7qgLf",
  "key43": "2YRfVTxRW8NczET7UGHwRkLth5gUHiRzuGXDpQdRisHFs4aBUZKEU2XuaCAwADx2rbqYhjim3uVzk3AuZv7rfGqD"
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

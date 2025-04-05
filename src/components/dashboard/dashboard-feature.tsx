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
    "48mfk5yxoksaDtWH3aquLtj4JGF71WStYfGC5dSpxHPw734sM9hCGanMZDzZhnRuejX5xCxvpkyR2rWA83GxscZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KXgpCvoVC2YXU1odUPz3sSf93jeTQL4zqKmS1g7qHa4LkEmN9V3mFw9MdUCMqqzTNSYniF35ppCCkxFVjgdsgYs",
  "key1": "V6oKGuXrXcT16bYnYCuVbU5t3T99D1xaBGt9nefAkZ4zsgCcjE3YoRnLzcz8Pz1L69Bv3QPfhoePzJ3PBXsKZd5",
  "key2": "4y5TsdM31Rq4UCdiTKhDKVHZBt3gZptX16mVJ5sAJ5f5iVFkEVsrVV3gxWs6geqfXZcesDaamhrnbsrdhHwXRxHm",
  "key3": "4seypS9ek5JRTLUbMMhYLRA32pcnNWi659HtLiJzsmSuojBP2T4Gc9hTHHTfE6qddb8HWjeUKr7zi4fYWd31VcT5",
  "key4": "a5pnDnrnCmRFSLXzgeiq1dvLqQXwj5vrfhK1LTAvwseVKZi4y9MQZHArPk28gJrFQ1FVEYzWNvpBWSHbenPoAxj",
  "key5": "3zN6Au5ZNMYrPsA8G53WooKSCEa8EpwsHf5d8G9NS3u9YUHQV8UbeLeAKPfbxnbfYM1dzdXafGTdC8gqS948jYBq",
  "key6": "31FUqYGLEae9y1JZVPavXgMwegvR6aX8qTwvmVcDosQc38fVME4W2o6RDe9o4Uqrb6VV1eid1nFKarPm6fo7A3xY",
  "key7": "3jNQ8Zrzxfs2XQZvwhZ6YKEcHARFHP9uPSR7gJ3XoW24eX9r2APNST7z1X41wdWwyokByxccxXMEkUvgx22BDsgV",
  "key8": "4Y4oPVj4pK7dYCEDgAeM2urRRthS2mn8cpHkp9NbDTGnpJm4HRCDRvvav4xwwESxzPEZ63KC4SAwb9vrMywVz2iq",
  "key9": "54B7RHkvb5tqE3mLVjjeSTs1mZSohTbuo4RQFxZJc8UeJRFqJ2125wpHdTotAbstr1EZCaQkcXpxviz5UNaUcSsi",
  "key10": "4y3vAZMT9Rn51goaXXBycBE4wQDpFLyhJxY8WjVqYcD6fB8DikQ9hDVE1sLw1eXFn8abfWdBo2T299UaDhK8G8rY",
  "key11": "5xZLvfCQfXiUZBHreXwPFa5cuCswRvA1UAwfPA1K32Zvit4qaCq6UJXKirgTfkD5AE76JtpJ7kbSWSeiWgHg51P",
  "key12": "5sxT2ts4oLADetzHLu2poSJhrkFsLuUW4uTAdUZLMrkQbRBQdn7upgivBYA9jvv5TZK7R1Dh7Jjg5jVsKcj3iwZB",
  "key13": "2nKcBiMri5RNcKtLR3feSW93SYp8AXVQ6yjZpXRC5sZvv14RPR2VdxbrtktzH13RADv7e3ryWB66SMErKoJuDHJq",
  "key14": "2MoSLcVgDZbgtYg1T4UZheuqbLYPGAm4osgVtq18qjCL4ZubyatryuEjBRT1uvd4gfZkAagZ7yQtreoBLyDgWYVq",
  "key15": "4xBy1wA13FPzaewoJ364EzYaY4ma1QHFiFP1h4GtNofsG8hPczGgCwYDR3vnA5RYwTod2agRJ6o79FhwxvsMWBf6",
  "key16": "3MehnbWjiSP5YBxmt6X3rQ94iEUAThbCeq5tkcfx81zsW4UudUeCTkA1Wt4fR3q7hZ98ND2Mm6n9mC4u6yh4JrDs",
  "key17": "Dgewiw5R2xQNRfeYcmB9TCTB23bqE3Q6BUREzLAANcPVgCBMiCp1r9ArztaaxJs72yamy6n2LhPkUsNBmJLKE8F",
  "key18": "5yprnq1QS6QV41J6gEsiMMTymxs976pfG1DkfTzjFV4YR7HyiKRetbuhnbT11rtWMnCSbium5ZRzjZnrwQn88tgW",
  "key19": "4uEtSurHUhyjM4vWwwqFdnP72DHAynAKG8aBpVALG1HQiZ5oyZ2n5qrwBJE3hgc6TCaH4FMunmQzF6R1FitWxoNy",
  "key20": "42wynHwzhS7ZTLhxa5TbvZNYrVKaunwNhNTW37Kq4E2Vtyre8ipKFXh87g1bCAaxiJwoWEgptkHfu1rrERAKokB9",
  "key21": "3nh89uC7hm6EVVPPxcEJH3qcfj5ja1iEY4bWkqQEoR3pAxzoY7Y2sad1XWYqYGH14g9KZQitfVgCEaCZzBved7XS",
  "key22": "37YdqRr2BjvgphXSSEpV2gcDLx7vtdvGjmZGzfaz9easVLAhEshQdu24cMLCbycTneGFXTfHkqizUESNSQ8X4hww",
  "key23": "2Uwaxmhbyo9XKfGqwiCFRd9SHYRqA8iiHn7NxawndSp9vdgDC2CqesSaehB532WnmLDBxmsttum7qS2Q27gDp9yq",
  "key24": "2kAwCt8UjTv5LUYTt2aLT5j288ZufuMbS3BA35k8vTeVTuCZj31Z8Fm4UrbmaZjERGDv8Dw5zY95DnxcLPbdp1XL",
  "key25": "5V6whBHfmYLyAdNw8G1CPfKHyhMG8yUB3tqTYFGSxqcgRVWwngVW7YtXRMVWgAd56YK813bJWrUGV76Q9bvQcmck",
  "key26": "4TmUJppzgGZt8GTLQxaL4Lb9LuPJpKRrPeVqq7uAobWGC8PSa8mF9DNcH6N7gMjCgNayMgm8ESVzzpKbcHvTsigV",
  "key27": "5S2KbkKptQkxqzvWiSzvQzrK23sKTHYWdjP9oqWBPJRa8NoWvtDDZhNHeet6yBAbYnrT7yPqJkV6EFbdohznBde3",
  "key28": "62541ptzAw5CNc9jrLREVa6C74cKF9UtTwG7aKjw6RRRfL41dvrxNixCUJBr82R9HdWqnNcHijAtWe6Tv8kpT8sn",
  "key29": "61eXg58iNNpvkQMUFh2oMjAnM3MFKx1Bn9Gv6KsRHCu1LR9CT654QqhG7BELq1VNEkgDS8T5tFE99c35Z1QgaGnF",
  "key30": "32L4uC1jiy5dk1CFXgeg1TTwWBkcvqHi8UTzvg77hG8RmmUk2C7xJssRuw4SU8WXYJWVfJAfZGKwoN3SxtDMUDWe",
  "key31": "2YPJPgyvEjofRcXoE2EBiVzWcEdpzz4zZjmXknZhZWNGwL6V2Uh4zto8AUnN2Xwt7KBe8hYnuN4oaBqyqGHekxBK",
  "key32": "3H1rgcHqRRkwBz7ZKZcWJg6u3aJyn1eXrSh5FjMMB6ugx22TUj8TMC2QimfB924fwYVQmiARt3jAot1jDgp2wjxw",
  "key33": "3WxYZ5vtfTEpAFqWiqbsm1qdJNDfxUxcJS4dk4N1h5N3B5ermbSEGSSeWDqHfGZWqrMnYz3G7NcteXyN6yE8Wywg",
  "key34": "5cmMgjkbviXN9Amtf6o38uctfcS2QKpNjA7LEJcsLNttKSqbbK39eoRxiNPJX6L2ve7qBfYod6MLtZZ8pgCNitmo",
  "key35": "4iHVbJ55Gey6JmwYUaATL3QDrqrPdYKTpR5NKvJzFVRCxp1tFp9muGxjemLLbmXu51Qr44vj49jxkhExSpZfaC5n",
  "key36": "2MtwCzmVe9RqZKCz8xGqKQwzyKvimEpLDscNN7scuPuacyGTw9MsXb9LZjRJ4De1P2yHvrCH2notQRsVzf3TATZh",
  "key37": "2m4dEo5UtGGvTYQpiJWDnEdKym2P3LbUGrRoiuUmWN1GRW2Rum3eGsEtAL98Br2nUHR5UYcqvBZBXd7aRoJjBsa9",
  "key38": "59vA77jXTzGtPniQCyJhU9VSCzS8MGG7aKtX2kpbosJEwaHMMrVaoncpfuUgoV1ShZqgxUWRq5gKV4EKf78RUhE5",
  "key39": "4C9QSxHj1pEN3uiWTA7Wkjf3wP1izdAmoTn967CaLYscxbUkei5WfXox3zK7Lt9ViZr9QYVA3fv8j3RQv7jU8g53",
  "key40": "59NaXi2u8CpPNkSbpMcE9SNBuR6rYKMJX7DVZpcaG4GDyTySkk88yToFuCuh4kAcPpJtcUs1dg6y9Xfx9gysMaGU",
  "key41": "3eB5F64MhkxkL6pPR5oa4QZ7mzLshiFEjMpsvbHrvSeppWeCdaiooXJeZDx9BA8ugeewcB1zhrKRWhJLSusfjuHt",
  "key42": "4y6q1YvpNXwSjffQsQ78SdNQGHxm5DipeWnrKpsCidaSKQPaNw51EUGiccwVzv1dZte9CZ4fNtyntSyyE2C2vJDN",
  "key43": "61fWM9sZEvRMmv3HAf5WCJZ7b7X35eWtKxozjMVtf9hDoLragoEBHyV7FSyha6NivpKXR8coJBU88RNPAnCXdoE4",
  "key44": "4G6LieZJJ1U29dxmE48sYM1XKWCA9TgZb3UkfqtzTqLjB6PDKe4KfGzo19dD5FAogmauTgJnnfs8M7oLvudaaXat"
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

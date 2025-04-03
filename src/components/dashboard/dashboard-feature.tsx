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
    "jzWcmF6YsB7qjtN4tpxJWZt2YXPGUcgAqaztbPfQgHokJUHU5A2uaiuti8eDxhprLqPZ8xEFNRFf3i1ckPob2fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SPRu6Q4bnP17p6P5UtMyeNTMWZ9uqcHxZerfpCyG6k9BGT7o7sSsxxsU3UDN2ecHTH4pHTqT7j6XhjqjLMGAf6m",
  "key1": "4q1zBC3nQnMnRBso165qDhcKHWRF9893xgbCu9ZdewhKfSjuBHH6xCSM1qTCFAMmV2ND8CWouLa9z6SfFEbpqjyf",
  "key2": "BexBM81ppMTRRg3Myq2JWDNHukf2W8kJr7iv1xEaghywYGtHyUp3oMFprZH9VWXaapbyJtyt4jv7En5RTgNwb6q",
  "key3": "4wQ9ebCZvgVx9RUXKE8khW3Nf2q69HAphcvpJwkyhtrxwqEp9S7TCaPufiekDyfVcCrsPD7sxvuMoV7tRecNDj9A",
  "key4": "4WN412T3SPXTYQZbYdNLPDkciJ86UdLaVBfiAFK4JRRPBgjV2hZdhUeXQrauwvsr2LHaNWNWDo49xRMdD4Xwg7ib",
  "key5": "4zjtHWCPDXEbgu6ugo1Q4Z73ywjRuykhCTDsTSuqSuSv5t44cknzEo4XevDEsu8EETFQSH6v2AjM6LoufsGCfGkX",
  "key6": "4MvNdC3SQjLLvR3nb1HyUo9oXVArWgqoXfrWQ9dQb899jcb4vGaHJ7cVPc7V7mW56dbeGR5N9oQYGS5e5TFcrHac",
  "key7": "2CBiiFb4mApwdZrSKzPMgrqCnfdUwSDHEfbFfi8BtyXDpfa3sWnmCpQNExUj95L76oz8fpCuNHuv5BcYCHnCQgx9",
  "key8": "2hPGmbv3hF4c6GqTxdVfZ6e7WHwtZMc5oYK1d8j1JYWuyhoxBqXPy1dBrW9C1FdN7dBAyhBdpNMXKBSKXo1GsPgE",
  "key9": "5ugNLoJjoif5MEYum6wEfAYYUuCUQfuqXCD6JW3PRWCEpbnDyHGb1QpH8sDwq8u4yyZP9ucJFG5fFZ2t2D39darX",
  "key10": "5WUmvBiFYdqFf49aGZj8AMwTiwZjn6jpKS4hvNChNdKKyi2SJp131P1PU3zL1dtqVmo29PJVLTCgTsEux8dsfzFw",
  "key11": "4tEfQqbPoiC7zpFAA8Sr8HE6xMabr3Rj5F9x7eCdGXVtbmWKqHjMAEjt9iWcsG6Ao8UNMDhhR2VDinXDnC9BvjX",
  "key12": "birBMqBmHpFUGJmyxDWe3n56gBq1B1HKZ1BrJWtFYgwMTnCCb1dcVFYpXGRxVUjNKeMBrWKXmFFNVUBLSJQd1Mo",
  "key13": "4QeKecWCz6STpbQpGE1jKK8NrQJ9yZxpbBwDPJrh1aKE6Gd4YkufPZwRiGUzwzSpGzonYz8Ws7e57q8BHJv3ZS3",
  "key14": "wj9V2zL7qeBkMJf57Xdee5y1GHwsk2thPtL9kcjm39BR43zJTFyfNEaiy1MtYVb2mJdafKoKRhKRzQinP3jchBG",
  "key15": "5xdadf4VGVXHjoRtdonjquKtJmRPk9V5acjfiBvru7M7oBoEGN9jrzSCrWSwJbr6bwSmDSZ5Pi7w4XZCuC7z5eDE",
  "key16": "2YjSpfVf2gKowDLnykLfdyqrnutxWypEsienrYMuKK99Z6iCwwYhpWDvFWDVAT6QYHMUxVYLuDnhQaFdoSiQgRfU",
  "key17": "xDVHGsR9NKKfQj6NQFtqDDZb393TNQqAFuRgTX7DuBbY7YocRreKBXY4HdV8zwBvnRbDnULsRXAV7iAeNJakX9p",
  "key18": "Gu7XP93fntW3gNLLwjBJQYHtzqJYtNoHJtb3xVVgsv3ZAtvxL8FjkDyw2zcFYY5dwhWFViyNdfq2sYyzZm1PzMp",
  "key19": "2JnuEcuo1cX94oFyvDVUVHySJAVYnNxEfeN9FnRJtEsUWxk88w7UT9u7XVnDDiqvaF7QJsE7srmnbHxAq9jMoj63",
  "key20": "53aunU7Dq1NXWt7X2vwJooWJ4DhXv8EMu2KqtdHUnmK9gPvSn2quGxV9gzZUBPhRa46kdZsj7xzoToMfy3qtpDCg",
  "key21": "cNj3ndkSsC4Vgraeditfn7rrgYH16J6j2yX4wsb4NFuSwvXxKhjKKHRGN18jnJQiEtQ4qS8L6naLZxgzbTuAsJa",
  "key22": "2ihqEDb7NQqNSjbDRRCaiE2VBPBEs2MWbZpQmxdM5XLft8cEX7qvKRtqvBs2q7st4132nsjeX22aZafqaeKVkkJq",
  "key23": "54spXDVcsAtR4rGdRNEo5fTHVFZUyccVGvr9QXNMLZuaPcYoEwpMU3y2epKTZ77kTu2XPRHejfVmjGERH2AdMtgL",
  "key24": "ubVp9wRH3oT4cQ7HLeAn1FLhJLrpkdXQvsxR6B1MCjyZLYGvTUgz1JbMGU96SPwPnHPr7CTpvZ86XumnF8yrVmz",
  "key25": "5xZ3Y7kt5i2Nh52J8aCB7qfpbYS3ss68bztL4jYwTF7AJS4sYM69QYkDbWej8ZSckr5NQfPawtvmTVwQQtQKuD6e",
  "key26": "32N1CiZcmQChbnRC6Av9zZoLnMqKYmyXYwTaEMEdqXD94gWc1rexHyQGrvnn42fQMY5qiQ1kbx9ADMtBmkufsKgN",
  "key27": "35AfF4CjBN7py3rRFkXfqGYVCsrzpy6h2SpCz8SQKRF3vQ7D4HqDvsK2QSHJH3CcrLMZCT2ZPY4BbpTBQosXay7L",
  "key28": "5p5iU8vhv2qkZzJru8EH3LwqRM5DXZRveF23wPRaMzAAYe7HNKmEqNGZgke64vThmre7BXsSRvBddrQZ6HLVzkDy",
  "key29": "1AMGTzt42umYbPWEvBE8bN61jun9cNVXSBeQ8ZMRMvSp99EFUnufr2GnbVD4bU151sHqJ5pVceUXhUCw7QXZXA3",
  "key30": "mosJ1qGxR548sSpyQDsMcMhjefT1YbHKPrqG4C9bTtxHJDcaFQTrZKHtKJF4XQMcXeEKEfwg2fzdc9RjtJK18Hj",
  "key31": "4cMbRj2QyNFd3sMJpMTMPGAY2VasZjtuXa2HG99WvdYnbsfob7Kb9xZiA69iBXdu5qDrXJQdjfCSxkph586Qbwbq",
  "key32": "4XZedgyKqv7jc1PQzwRd5ENMPEEH4MNQBqGaGZW6isrcV9Sq3CAJ2vq8r2GiDW2jcZzjSM8fM1Brd4td8jQgo8bf",
  "key33": "2WguEWjqytG5NiqH5imjRsu7ZEKur1mtqw5UuCrqpdJwGXMkF7cZVQixgiwmyu8QppyA8HZbaV3VgY99HkRD1Ejh",
  "key34": "vqwLZua8VXmbwKJYYXBWxRF3A8TpseonJppdpkr5YFsuLVzVrm4nyNFBEYvisRKcMrRtjR6unLPuq8ibYktPK58",
  "key35": "2qU2qLjwakdutXUnCQ1VQTvCQ3Hz8WWxe77awMSyrLzs3y4NsJeUh29h48gMbhGtbT23HkCYJuMnhLQjru9SVnYW",
  "key36": "3fyyHJVRV3c372Hde3SVCYjDdKUBUU2BcUKiRTPzznbf1d2d7bCQTRFcW77p2MYMmNwBiJMYszcd3o2tE827jC3K",
  "key37": "2P4jyghsXux5aLSuVwsPi4bvUWefDR9zpgtekNq278pZK7TY5JUCYmCXw17RWzCbr57gimVCfu12cEAjkno3Pz29",
  "key38": "3ihFDHnh8NXCGL7ad81j4HchfPbqdX48fynoMMBmexkyAdZuap5KtTvN1Vd5dFsg1gT5j8mgeL18NjknvVxAyd9G",
  "key39": "3tqYC1ZczjNm8u8hZudNxsLf629AsoX4rPF6HwniNvaLoZA4BZAtWpnWEjzhexZHfv41UXCgwG4ftwbqsbHWcv11",
  "key40": "5Afqyy52oErSuamb3EeUxcRgN5VAsNUWjgKdumqxAXx5rqoNphgUWX4Wnyukub52gTT97zr8DSwgRUjcQmU4wDqH",
  "key41": "4viduQvdbTnwcLGvX2eaBEkohCZXRtWJEWQ9YZCsxFNstpGDyooDWLf93EiLtbb5ysKwrKJkzAQy8YKaZMk4uBtW",
  "key42": "44RbDPMzXx2qH7Lo8KEVRE3QB3VbutjZuZnxneNCuLRJbRWVZUvLNwhtGwqRWyUxSYyuj2CLprUHNMLAxJjUmpva"
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

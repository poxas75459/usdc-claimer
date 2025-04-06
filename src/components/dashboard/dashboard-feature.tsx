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
    "3NGSK94ydyEzUpo6okoUxYCPZ5rgd2MZRAH7WQgn1MwKEmHqp46EwtwpKtkwf15oSW2QeLpJJxpqXUiAdTDyDcgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HDGWkkzYtnjSvbv37YXCQY8BvzN19q7H2V4oVdaBkP9Agc32QJ1c16FjCTiuMC91i4LeSoc7U2i4ZSCmdNvBEEA",
  "key1": "4ovXDZXtJZGYjYcbULBY8S8vZ2bdLvAh8EzKx28nTQjhpwEMoKnLoXMKpCX1pXMATEBwTFCaoQkzcgv6GrgTfdEf",
  "key2": "5pvgn2pNgj1m97W3QrLT8PBreUAV9QEjHvgjfvNCcwkufmN3caQwn5Z4taJGsMVfU7fuKwMukBAS4eZxRktqudqP",
  "key3": "5QTE3rrW7RooPfuGeLobfUzWqdkwd6xGVGXEyiCHUsWL2jniXKWqXzCgKADcFMSVqsHjgzkBYeBmQTz6GDzA2o62",
  "key4": "66Pos3RNYwVfNBmSmfBGgXB6nVTfqtwaDsmiBwr9oqcrJPT9ieeXfKpVXvPtKVeb1RZVRGuG9HhCsSxjEEsViPWR",
  "key5": "2rXqm6dzitdKQUA476tNRDuk6Dcd4BVhf9HDcw9oodayVGeLdGVBhjKb7b1AMVZqFNfHEJEK82oFfUavPjK45YyY",
  "key6": "2Sysb2JxfYnvovx5RLmDMbqopdqXvAAhHHiceqyxo33KE1RhgxWkw18C7dtdKqzt8zfXfV3ope4hN5atKczF6Nuy",
  "key7": "42iEfyrAzjqAYqJ5nPUZ9ybEFNTZCarRsb67QLDPquzXsU2qLKhNVSAmdrt5vGLXRni5Loj1Pqi7LM8aWd6mbC8e",
  "key8": "5BwnxqAKWxdEqy2GUcrGV61xGNU1ARJp9DRBKMVgchzahpzrERWWbDsQVf3ZLhDfZRawjB3zi3VZ3u4U6vvGyzQE",
  "key9": "66o8v8pCDmEqXvpnjehWoHrcLs7yAV2oDSkY3dsAtPC1KRxVQG2otXmVLEF1gXcNVfrNUttoTZPPqb1Dye1raenD",
  "key10": "5rFwS4LDpKkG3tHYv38rz124LLc8VfgXoW8xi5nHxuZ6X7cUcXUdh5k1ZYWqMwLTDyBF9AXHxKpVqhu1FXQEverm",
  "key11": "4uTabKjFEVRufncL8eTzGRwqTyisiWQ6iCMMXQx5UvQDr6uFbaRTA7X8oSb68UJ637ytToA4yEPZMMvJURDm8pxS",
  "key12": "231eDafcnuUkgCcv7HAGSVRQdDaGppFu5Y6pLiza6EJYskeN9ZTy9DwrRkrNpeFoeCJ6VYzYxeqsa41ZVQ78wVv4",
  "key13": "bE5xee2ygiQxd3riinqCxDCm35eM3RLN7vaFvjFN3bu3V86qtKRSnZeAGQGGFDffdaZy6QiaK2mZ1wwCLJWfzWT",
  "key14": "4aXto8qi3rm6Zk8qabLjhPFbW3YBM5VH6x348nCG4XC6z7AqGrEvgAjqRgaqsCgDCdwBt4ky52B6XzDb7wCVgqib",
  "key15": "2ZUUuX2iEy3tNphC2hvReCDMWeHvx7coLUeeaheqY6GcrewadKC1E9cc7SiDBsEzyruPeCz2HucLhVjSBvWV5Yhm",
  "key16": "2c32srcXnZ56WFzazPfE1wCSpBSjnQEs5vN9n5Tpo2CZspC5xBApseonBx9kFxN32RDFzQztpocyg43JP2FFgcRm",
  "key17": "2yPcVthq1e9PPLgJzo1KutDzE8xAXNV9a81LnDaairidifAmgnfu4PdDqzz1PBk1wGJMqpThkjW7BvNdqRPgdBzX",
  "key18": "5SFDJZweUiMMwXRfg7tBnRtayUchG2VMof9jJCrnRC4pENkKAbhM87Ljux5VEZbHSZqbfogKvuHbF4ibuPYuWXBT",
  "key19": "4MeQM9aR5s2Wjn4B5ouD9sRrE5DvLP9L5UzTfDnA15bB1v8T4nD6Di415bWu99GMUq72CCx1YZdCqvYWzyfnx524",
  "key20": "5rZrJuDUK7YPfDtodD5oY8QcGRAzKbRvMLC9RKEEdYJHjbJkqaerDetqfCGvxzFu5M4mJf8bojPSttkn1gjeQuCj",
  "key21": "5X79VCSNtjUCtHMcHgK9qr22Hm1cw1nautFtEWzFGD52KWqUn6SHUkbe1Jq4S35XNufgVRSNzsHM59YGWdMqprau",
  "key22": "TeuDpr4CGQtAtNGd5NLm9Z1fLDAYn7CHcvan6F8MkPJLLEXhv1KFyXRuncnJg59Hg2We4HSQsnV2Nrbd2ZEaSmB",
  "key23": "4vZkW2owEbeq86C65pgRZtY4soh9KMz2dKFQETtqye4gr8pn76DCK3iUx5P9dpfvcEf178tDb554dW1tdpPEkVM6",
  "key24": "5jQch3TPUVW8ZhTzstUFAc2yCQekTx3w1ZKz4R2YsWHiQF59j6LiD5YmhPmaz1f8fn95rcRQCBFRxg3TMKPnHV9t",
  "key25": "2ZFsodPMHhauRvt7w6LBK1gCoH1kMKq5d6Eso7yhznmzyR58iMy33sGiKt54uxDvZDvPN6kDmhUQNmWKhenNvRBv",
  "key26": "2DPtSpkspv97epxif5DTsCeMsHuWRytcgzGhXvtHmNb2d3vhtjRYeGQxFLwmjeBwBrzZMTVX6pkBcqxMEDzubmuD",
  "key27": "2Y1RXgwCcESHwRHh8A7EdXDCoDAAVfYafswrXQsUga72sX8bLzo1ECwhFenpn6Km1WrsmwxR1pqMxShC1gQo6QLX",
  "key28": "3J8uELHrtjEfv2QHXcM7Doh3kmhoWV9EMxs2Z7NRoNDPde5PSRWuGyzFM3aopwmG2NSoLk629qem7jHXMcr6h71F",
  "key29": "2149V2MzQDCu3XgfVwStJL3gY9Pho4UECn9ohSLbtZ6bBMgHgzgsBDnowKPhLmN7g7KHtt9cAaTAzrD3QxyerGGx",
  "key30": "3EWraeMem2Tt3VWTnUf4KSGAgWHzJXG4sw8yc8ZYhWLfPmsWJPVYepXzyU7aLLBM3zh52VC4kg2cRXEZqdJeCutg",
  "key31": "2cnfvbxJT941rzcK8GeZxJyKoxfpv674zPmpataQ7tu4vmt9z9TwYvP66995nz3tja8CESn5U1vuJYuJQ1tXzcSf",
  "key32": "3ky68K8Bn15KCPWAeZENvYJSW4EgTAS4jvUHLPx5jb39Y1Hf5dhAU5tocyJsWMVBodP7yZnEXUnSPohU2KTWSKH9",
  "key33": "67VmPvPyFhNGynzspb6KnVwJRnhinAGkF4VshUXtttkaihVBYd8cP4CCkaNXm5qn9uK3ejYf6ktrQxiBDpiSkbjW",
  "key34": "jfSvfzQ6HsajmoXXW7AJqRe6bT4HVtp62pePXsUY1ccPCwUFTwS19nt2ye9umUc5ZgKDWEFkD31ZbCVu8SPGpSy",
  "key35": "5XHr4UtZrvecNZjUBANJ7JWnLZE6wSm6Sjd5iHC2kphCdnYBMQyXn5U9k4PcBxpECEWJq2cfBMSVkNXLhKPhyDx3",
  "key36": "5BDVHRicMSc1Z8rT5wpJNR6y7B1KxTV3sMgiotD9Ysg7KVXeWjghiXigk34K1x37mqe57xdsk1CVXm4X7oxo7EtC",
  "key37": "BrXNjHrEsDHXhfMxaUGXFwkDYfM8MEdzkg8g3Pik6VYAe2UPiC9QqL4WUq1zZEgThBkH9KTadz7CmbZ555MfmMU",
  "key38": "2kLSH699zB8QD438QnofktQ9U7TVzqhyrRtd3LHtdgeUVXeHnJP5QUfHVMdce8ee9CtaWHFVjdmS5AMHSSyM7KWo",
  "key39": "TTt7hMuTfWxX1wwaLGhNz45CuuT7Eykn9UCLtUrrix1EGypr1fT9SDKpGPAZLaCbcUkTEQQaQfmB7ywqc8gVRBg"
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

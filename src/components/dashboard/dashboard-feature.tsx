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
    "5EvNmVBtABA9jqtqC6Q9W3vy9VxJc6cfhvrD3wXma5sDank2L1Nm82cEMFgSBrCEXxFLo1qZZRbmZ9tPDa8xLjH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52v7YF7MdZyc9o8q9FXMNYNJvim8hhbks5y7sFz3jKub39dmzux8sJozJCCTtCpVwMoFYXYFj4ANz7CqU3ruAkgM",
  "key1": "5eakMX2EvkZnn81gSD36KGnL6k8ETxgpmGf3UMNYBZwTPsfiMU6jzX5RA2q8874ZcXUpRFUfh1eagKE1BDZkWJf7",
  "key2": "3TUovpNhiEF38ghaCvqCrnRkXccKtRp9JR3vH2dWU3TrB53KTLcL1jn5PsUyti9mVqiDUAHcq64Xh5w29BeLLvma",
  "key3": "ha27A5egXpyTmHURLvUHYrucUmuU1LY7i6My3kCC9nArxFAujAnKpBpNWvhFdXe8HbEy4Z5zABfK2bjJ5nnZYcE",
  "key4": "65ZvAPii3CboZNijytXBcoRjMXjbmdupDSuSM6TWMUCdUtet7YBvfbCJ8iMs6wAJ4CPkC4xP61rYeiJPqNERuxG8",
  "key5": "4QSx1TZrKrWnAoQNdz3NV8Tu1jSJ3JjN1hptoxwYnNt8UHCFw6JSNwpPLD4x3qod4JpL6hYTLKwt3DnrfL8kF8YD",
  "key6": "2nFc1DtkrmEozfY9LAhUzxaHFar4PVkdkGUFyu8qcnanztQGzXMYCewtoCGt3TwCcdWRF4YxprLeXXJpg6i3Xyg5",
  "key7": "552nkh7JYWn1BdV1eUEsWvsD6Sfu6ipAcTX6LWEcoSYeS5WisRYzpeBBNQGVVwgWrheuSFpq7wcFkwTvgPCXvjnz",
  "key8": "Ag9TT3VYqV88zNVz7hzNoh2nFbnkNjeRLniQmydTGHsG9Zawv3C7Y9X4QwtCjv8CMRb5DgEuFSeAfcnrhEvVknL",
  "key9": "5AmSyyTtKyTJwDPz87egce6jTB3zbaQRsSxPG6EzMB8PnxaSYkRjU41SuBWHsK3RSxPXdryKTsvdxn1X9TLp8GW3",
  "key10": "2absSasF5Me2ExPmDjuiGroboVNg1V3BT39RpU57qsiXfUfPoTkbK2rCu9Nz2XT7LV6D7mb4rGQWrxB6bTXcmuXX",
  "key11": "2Muw6wZMethfCWmMCdUYTR91zjcurbpTMGNHFJrBCbNjZZtp4e9V6GMXwrZCyCQnpVGSvUo2pF7RkgmN4BsKBfR8",
  "key12": "2ZpkixEvBdABDSTroaPDpkLdTBmMcVoBXRgebMGCpeKGpPQLf3eUm3CUnDRUo2mb9wWsBmXHFy1dKWgZUUQYohhu",
  "key13": "2jAXMD3g3w9bXc6xLzoJ8jKr5LsGLUsmnxRcJAUGa1ia6Gd4zPx28jia3YjP6LCXJ6herchsMpTeeu7xQ3rAHGzw",
  "key14": "3Ysg2qL1ent964jN3UpdeURH6Qc7z8ue4SyvhVZDYByyWkU33NCsUiio5zASemKp3jWpG2RpPTk6Md5RhY4T8Rcn",
  "key15": "2tdeemkRCgMTG3uvvcc22Gm9NkBQZdFXZDMLCJpzk8CuQ3UFFM9Ty3yiK51N8D8xduvAtQrk66ZUrGNAT94iC568",
  "key16": "xWDrthuN89MvpHJPVEifepC8T5qS61Krg9D7G3PNoGMnv6RoG6WvDpiV82qu9isP2n4hZkpQ3sWgCtmu2wDPLKQ",
  "key17": "5mSRQJRwc36M5Py8DFoSrnBBS5JqXV8n2UvGCtkLERWfjDU69bZHRU7ZW4iYUioWAvD7zcZn7Bb3PQ64UYQQoecy",
  "key18": "mDsCEz4o71uvRocg1CsiR7piZ5K2nWGNTVnBSUdmT6hZNZHeP3jjLtv2sW2VEMEgQvYAS3f5p5soudXi3dkQpEv",
  "key19": "4F6ESozTYB4UVe529zReppqZrkGfY5497mZdrMmzvFsMnF8VBkdx6LKDphpM2FF4wo8RBuLu6dtKHysmj4mnJtFa",
  "key20": "3zNDWEW3bjGtLKbGYNDaa4u6YGw4XdTKDpiGNVunNRPYeCsVCH5iwkRdsF9e7noL8iP3y2ycaABhtiXdkXbYGZgz",
  "key21": "3TjcKzhWGBDgCvRPKA5EqM7pS3GwRByg8vq4znaeduBDdCFgSbuvuQBjr5uaRoy4y2dSF6cqpfnWvHnDpyci4afH",
  "key22": "gwTztGRqMVBfQdyrbfjiZRbhSfrLUSB2G2MxpVWqurVZJccD5MPjvgxjbmKbnC5QpoJZCTKx9Yh7rqiqPFNyHBX",
  "key23": "5zMGPS1eUV4GzVMv3vHrsuyYGpQNejZztLKSLrcUyNmnHvz5FUeY8w4ZT1713QdKAXT496NAn1h43DR76p6pGPnt",
  "key24": "52y1uM7eUP68GfWJpcbYWCxYKRgLfXobdDVf8zaLpjUku1f5RvWtf5kgqekbVREWHHnV1QoUrUN4mNar2YCTu9s1",
  "key25": "2CHP5GHnKZV1tvKCSsmkaeqQC3qwTw7SbXujWGHB2t1xLBbVXfMMBJhK5JtQHnmSuHu38w2GJfjswJCLfbEt6RMV",
  "key26": "3DVb4QJi7GFxcoEB9jachmj6ZmAvxMB4A7zfDRQvH1ufpWcyGJr97pCCsHN9AS3CRJfqsiqAqwuxmQq3jHfCTibM",
  "key27": "2jRd3ah5vrqvaBCRbxUZJszPVKiCnvRwG4WwE8NPkG6dDfYnfv7UefE98Hh66mM7TdiGDLKtuCqiYqXVT4FX4WMM",
  "key28": "4Hd6MfkrZUrBb4F91zK6Q94jy2yVsyn3wFtBAU2yD9tn7tTKAEMBdR9Vxn2zQXF5KmPQ1sj8ohQRbUXzZxQLcSVK",
  "key29": "5EaLMsDq3ckRafWsPRUdyec4Exiq2A9fSir8DVHcay1ige2zWcCRZUM6PdvFpwZSwm2rfApW1zkguV8BLiNDmLnr",
  "key30": "3ebPdm4o61ZAhadpoTj7QjM18W13SXdjoYVkimfqYvVrmeaUPADVAT7wQFYDcjaRs8CKvLVRNgXN372hT4C5vPDK",
  "key31": "64ALGYnqYGdLrm2MA5pse5Ga8mWUfBieSAvpAArPJ6sPzctBdjar2r2fc9aXzrWLmTxpN8VEXuTaEqymbAUTWX5h",
  "key32": "5ZMc2J9dwJTKKr231My5tGCijXAWpbKdbVswStuHqMQpr2wET7veMVLUniKrVCtEWYFF5pTaStoXpwci8eEUfrGa",
  "key33": "63ksF5Rfm22cGAtKZ1k7XDebje8HNDNP7q65JumrkwurhgsmAbfBkGSCobeXfERjya8DD7K2fDCsqWUzbn2DVi2U",
  "key34": "f67Y53VgJELjmYY4RGr3rMH3zCS7ZezqTVLDmh7BycffKsL1CiLcUQXb6TBhiuAuai3FibhB73UpkdT78Pfzzr6",
  "key35": "5t6TrL2NccwT82Tb5oJgo4bCNggUpVvmKmXyW3umWZHWXEFAptksyRAQsbtJqYEjk5TyiJScRR2gh9aSQJbDM7c",
  "key36": "3LXTws6zSH59ytxZGYbGdWQJoLc7quWE1QVPji6xn81meJh5GM2BDzuyzVyVpgnqfrQ3oWqk3V7S3niAGDVkh6re",
  "key37": "562qoVyuq8NebHxMdaRFQNzkwJrMJxUwQHCDPzFF2AC9xd6kbnFWFDmm54NWm2w6Vk18d21tfFWarXKwjvrYMdgz",
  "key38": "2k9QYaQtYWy9dDENRzhiPLX4E3NBtrQP2NqZFZuFTUP8ipQVme3hrtM659Sp1y2XRyThqfHTdttyYiPoVmB7Kwp3",
  "key39": "22xHYiaLow2q5uNENcsGGwHDYBc5BFXKXrRFWouCvb9szApRrKG4oLxJnxsqz7JscAq4u6JMm2WbKUBRRnda4VzY",
  "key40": "2nQfvUQ7S71R1de4DCuFrkAJedPrtXtPopGDbBXNkKMynnd9JQ8VxXC4bvVJVhPTNQ7Cf2qyhpxz9FDCskFBcoSK",
  "key41": "3hK6VBAfdT1z7jooL1wFNKkQ9FWAzTxkj4kB7STwi4N61o6YXZPp6UFS1vNAJJxdS8LRrtAEECC28oSmJMRzKFNu",
  "key42": "3tH6TwZiGigHaJvP6JvmagrrmtfDErLbKpqvrTQ4WM6qEWoTCPvJeTvaK1ppyhRtm75HqMmnpEygBFafX1EBzmCk",
  "key43": "9tv4YPKX26chxw9qs9NxLGJyuwk7RThrtneBChksLHcTAYNJ5z5NGFHG347rWJej7LMUTthhYTWyvrmPRTaFXzt"
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

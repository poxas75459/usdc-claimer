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
    "2MhyDBZi8avhUqu32ncEf5LL6ETX27DKY3gGWwtQgJ4NbVFDc3iiYGJuypPR1b3oJiDVmasqdY9HVopGRysJFWiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jky4pQU3GzBK2AkdXsTG7p3niQYVa9QEJkWtjuNupiJeNZLrjGuU5hQN3ywCWVhFHi3ug2JBXhTmQLLu8VXVJGU",
  "key1": "2PsbngeqrYsM8A36WsX3r99YmRHRySr3mkLZn2JRwnvA5poX5dSZkAn2GryjqobcBVrYvCmMD2tWbDxC3hUnc3wu",
  "key2": "2CnH4gvBJrGWdNr79DnwnwSwPgby8tuKty1XtGdYuJAxKayncXJQyXLiv6BTDRBfseKwCXqwbVFVs46XJdg6HTe6",
  "key3": "3fefhZhPxV8KjpC5iqHiJ21XodvyVuDFgy44Jgtrju2u4zHEKZmyzVuTdtjFzSej3UA4iFA1xZSMwjEX5QdYnDxD",
  "key4": "5LuUahiFURsXATzimWXLKMTrRzcKhXYPjcyHkv1iimFAN8d4mNvCsSnRRM62w9uw3a35FfphsMPsy1ijyRVssc7Y",
  "key5": "2hwcNbyVeKoPvTjxvootZ6811zeEUAjNUcXh4VAJYNnhF6J1NKnMsyJ5WLaDfBwXXRMXA5db474reSd169shWDKY",
  "key6": "4NCdAQJGBUGVR9Uy9H7ERWJywpZ3SfUr3btNc3c2YYRrzPS4knajCMNQzqpbcuCrLapkCpGwG46Yay1LWHXuADfS",
  "key7": "2FoJa1t5cpfG2RbwHwmiwniREK4mZJgjfXKTCxwur9vmvReLyTW9o4bTxi5nWdvmxxXZdAkANMcCcS8fvMnbYw6Z",
  "key8": "29mq9dwAk6skbWp8se7HQEnm9rzXL9e2JdinFpaLjTC9rWNNLmvhG5heuJ8yNKba1nahTPtmXy6c7RPgcY6bZBJR",
  "key9": "3CfLBDKPWqB5vMwqWoupogvixDjbiucv1aJaWFN9k87mSQpsKF1s9zX93CWgyMGtuMhfrMFSYi2Az7dCxzpjLM2m",
  "key10": "2hhT4DqJqiVDYts8mALtV4uNRDdTkusv5yMsapW92HgnLtHSqag4rs8PJkehQwfdeA5LXps7sCniAya5fpjUE86n",
  "key11": "4i1u2kECnY7eqdQ92vJUBxZ6UBqQPwuVQdFmcVWPW9p7UVnb9DPSjtBXPArV429wFHsieyYA7n3qgZXFftq7JYLf",
  "key12": "4bDC4c9GLdD8AvnXR8ma92SXVYgSD1mZsYPKNadLQhrv1JqATjeRiQpgtHbrsTuAMkYxT91nAjaoZxAE74jixAP6",
  "key13": "5CBDYRFgDBYUCM63b6Poao8BVFLGZ77mKGC7saWUNsvMiK7bAttWRXymMkUoXaNSc1BXyp7iSsspEfnc8KfG2b3",
  "key14": "5hPqUR2MH3W23uE32bbcDrcFf1sHBge23r5mzFiEzhQRyF8gthQ74cFafXybXakKAkPmu4cXUcexiYmBh6Lj5nR8",
  "key15": "3UHKJy7UopJjSqKhPwr1dRPrJfVMEdVeoWkT3jfmN97CDeEdv5u9j67JpMfHvHigkbichV3R77MarGFpNgt2f51S",
  "key16": "5Ew8exneN6cQFUEM59mzDALQshiVyUnvk8ytjZih5BHTTphYmnXR7r6TxqH7QBCQDn89vNGEfJVfPLzT1fh8G3LU",
  "key17": "2ksibhRVPdLP5EHCyPHUzavSx8jYU429PF8pdhdWCthdoa7aNtQ3ynAPCvbNQ4SfBmqarnkqoyEozdrWv1yCUWsm",
  "key18": "3LLnH6GVoV78SgrkV75pW6BfvXKiNRLCLcKMA3bt3RtmJgSLqPYfJCvJLTnkNfRjq6RJCVzE3efZPCCtsfVPVNC4",
  "key19": "63sRYoBAj5AcijFER4GqVS5ytdqwpBdSTVTKN3P8CFLRGA1V7QTqRpjmAGG9XfgBmvB5VtmnSTnChRw6Du7E85M2",
  "key20": "43i2Km9ostD2Wc9wYP8PxNTLYQ1e1Stv2DVbiiKxhWhwvtUiHCRdRmCMxSDyfaWAxYnpoC1dLH2jZcUUNAd6Qh7F",
  "key21": "2KDz7ce8D1hVh1kZN9spHDoEKWRch15DD8sg1zmfUa21AFxYcV5HmaNjQpwEXJBP2as2JJvWAqBjnZfbG6dPaqME",
  "key22": "4Rp6UDdvwoB3b8PWv2snY4GjgAtC564zUwSZLnBBnF4KK1mcSGbhwzfCBj4LUKsCgCFVbMb9iY2Znu5cdHZKNVZQ",
  "key23": "55mou7Hukacu5GKZYcf5NZMQ2D7exWxSJCA91v5NWmGDVaHvQQTX1sKQeq6X5qNzmiQ2eEZXUrxijwWrSDttjTpE",
  "key24": "64ppMVLDp6SPz1DJZMqmFshaMFnPNaLLSJLQZ3KdQaeHv13iYpKHS6n6mx6EZr6hxmYzBfjhepSf41jNG9XzEuCW",
  "key25": "4Vh7Wvo8XT2mfpD6BePAfyHu7GmGrHnGEFeAzLtE1LJykUivmgfPThDwTYMy8FPcn1oTKYXRozzzFNed14e2vgS2",
  "key26": "28zxSaM1jC6A5qv8DMvaabK1nizjLwXCpzFLsAnEL1wm9gx1Vwg7LZh51ch3eeFry5RotirDGHFmi4yu7wWMpNk2",
  "key27": "5FozV94wBFPvwm4Y6tC18v3E4JWFmrdEVCzCgtD1Nwu5hC6fgcTrgP8ab73iBJBgi64zRP5WpmYddUq6V2wmouEH",
  "key28": "3AnMT1Djz9ad18T6j6eW6q3iguXBfszobjWsWa4xTwMDgHKaxxN48k77LRcpHyU6cnxWnom52ivgLN2Ls6f14Cvj",
  "key29": "4LrSHW2spnZSKHVwXf47GSxq4p4RgeD7nHmz1Eft1PQc7scy7vzTatGEmeP4f9HRYFB8favMXUyT2shnFaDER7eW",
  "key30": "4QMFBxc2Y9W7zR8rdbomcxnf3jTPzA8kKmpQ9oRnh8NQdmnRAv9kKNea87koyzngWG41V7WuL5tWTXp6fwBCBokS",
  "key31": "4NyTdzcKBmiuxRtspMxMWVNEiPnHTq74DmAW6cY6QNn2zZFfQZn8RPbanaczbwK5pRkUXpmVTqcvcc32eUodcN58",
  "key32": "3nhJwSkEvEo5CM7XGXkmaVyh8kVzvrnVgJJEzP8YPLMpyfZM8BBTohdZaqn4Zb2cAxEK6N2QUMzXv5PpfbHHt5AJ",
  "key33": "5DCX5kFFCmFeyMnnhsZFWAgrq7RrigfD5QgG9iwP1gnFcD5hpEwM5Dz6aU81jVKwByKDqMcehQCaabDx84afPQNV",
  "key34": "3ps1sWcP56jmfLuR6ZAhSr3e9UhqQU7TmpdTVak4jsvHUKbpACiZ9eQqpWrg1P3w85yZbRFGnJqB53tzDjajktcF",
  "key35": "2pcnBigS7tPT894ueemTdDSiSqseLNh168pRWBS7icpdKLw7cUX8bBZ3SteB8unsQa7sy1fonqjhcUQCCYsBMGa1",
  "key36": "N7QFgduTjzBwdW6E6EyMhep2bctg1fp3PYrQaLhw79RFezcgMnG4J7e6PSDArg94Z8QjNZsXMvfWKZxsVW2bob4",
  "key37": "3x8zVE8LsaMzWwREYq3BihhByssneDMHrSSiS8sqHgLoQEWUbgpWSDU7g8mUH6qWne4rLEYF4JNt89MkVnnNiGEg",
  "key38": "4YuvMjBJbwMGqSgjyREzr2XXPZooupJXhjLp1KMcspmHJ6a9bKLz6c82FmUG6U6kLpmacLqm25FdWdqeLr9Wyvi",
  "key39": "4RLEMyFGiKigrojP2RanC5apMSg2EFfaKPBY15hoxGQf7iz2tGK8jJuKRDfpmWYAAS1CyABH7KPxQeVh11HS7wgq",
  "key40": "EAESuzXeX9Mmw4La9zLpJZMpK8sjdQQBBy2vDfYUev9ZkCzGm4XTb2wcAR9dVegwL6Nwp4HEEDYgzLqaiAFrzyS",
  "key41": "3pCU6KR4BXfyVnXYi8DMH4rJQ9S2vNC6FiW8CYUrZAoAHowoF81xg7qf65VqWkLqL3azspoPJB2scPRW9vgEFgyd",
  "key42": "52AZRhTkQgYJ5RQDiC7RFr9nsnAPuHy8ATTKYbbN13yKQF3RBkTccyh3qfW8ujkvy7vZBaNEQJAFi1jE4CdhEJPm",
  "key43": "4rovYD2voehKPLK7tF31Fen2jajiMkWnyaWfFrFKXa48NnitkJSjekuSjNX6wEgN6sDtzNYFdcGcgD99PzuNhPqu",
  "key44": "4xzy7vbxodqUfuscMAKbkJRAoe9JPoS6qSRZ2pUdaaDWuSxT11a975eqvP4imxbn4Qn6saRMMiEvFEjgmAoWPxGh",
  "key45": "3BKarfmzBFLhBduFBeH5gRgrtizYVLdbu3LuPDJcjGz18ztJnp5Zx8xn16NrPyfZvmxjcUdef1uMkgkZBNK3yjqG",
  "key46": "5RQ3LWMh6ZTepSMHN5JgZAvisG332WcAFaaMB8p8txYHdukeJoMN7du1sG8c7DbRf8JvSSoKy3gNpqthd4sgJA7S",
  "key47": "4yrvEAkXG5FbaXtPMBZFjaXrLNZ97mrYkibu4iBc7Me71JMWdUHxGZGLMNj3aHeqjf5Qwh89dVjsU2RrL77h53AG",
  "key48": "3pV9BhU94sA8LjwNa7Tsoa85GB1H3AW1fGu4fJN2TAXbdKBmQxh735XSqSypjJ7RSRX5yg7Js1qaUa56kuiZnozC"
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

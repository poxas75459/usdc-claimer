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
    "R6TEdspSjN8N5R3qJQeYWvdYhTBKtYXG286iNvFznUQEVrSme7y485BsfPQEM6LDTeC9ui4ufReVJt8cDwyBNBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FvDHGQmgDXkxkRWuwRbNNQ8G8jCy9qpmpAjvr5bnWHu5jBydThxjzzVtPV5x7bWArjADU4CqLpcVrBzdPGyWyn",
  "key1": "8hcZXD23pXbCaxKkRuY7mz8wN8gwijwTebrjjPEdEM6qy6Dk7F4wwV666565MPp13vefUQqEeNhbF4vcB5cCNF5",
  "key2": "2uYuCpW4yWJJiZwc346FJgcAfFCSRwLpwSSzvZ2bPyyvG3rv77dwCWSfLfQrH4bRE6MDNLfXuHYmagxrzgXqr3R",
  "key3": "4KhtJLEiwLbUD7FXWJawoWNznFiYdi1prE3CCCnZFuQduF4rQ11cS8dHUSD4iV6QerHJVhc8n3J3833HRxzggb6q",
  "key4": "HdAjb4HxQBepcpGXySwdSTiM9VysugGYapN6Qzwy4dgygY3393FPkcBjuahKWfPEnJ5bxjWiGesNJoND7Ukqiw4",
  "key5": "4G8cpxPmgiGqSpSau8xD7Zgqijrh4iiKbzmdXZir12bkUa3TrPem2UKwTXDDao1zAz4bTQxZRxFNjCu5vXBvuzgU",
  "key6": "wFVxsucGQ1iVRpJzzfjV1QiHwgaZssSAZrYMGDuYpHqCZcpHYixZSgiY2XHW7vBKz7uHsfBXBS9j3kPpRnr6UCz",
  "key7": "64sDx78kCh9Ts85d8qdVTL5uUSXgWFXcz6wpY1UiXkWwKeMBKtrrPNytRLjPUUL2YhcyFguugdNZ3XoZaA7U1Nxx",
  "key8": "33N5Z8VPfhSMYDQYzs38zCVMUtvxArGSGHDDf9WgcFavUFR2tAoP47fSCaM1AHc4DrbKAx8pcYk3PtC5T6YtgCPt",
  "key9": "4vhGy8jtuA9BWkc7vhqHqsRkewNJCAsBjWh5KNMdGzfyUWXLnS8kQnaKvuegRjbgbs8UZdviL7mXE15zPoBMtfWy",
  "key10": "36n183q3D8eZTT3dbP7WJMAXK1swcnGZJM9imcuim8y97R8zzTJ8LnFGSNptgAv3iF76QpMbCcG3NnsFgQuesSzv",
  "key11": "66CobhQEpYDumkZVtREZ8pcj9ta7irZiSSeiJhmiEQ14K7wks7iMSZSMw9nB44jYSnhobu6kFmcj1MxvWt3d5jAA",
  "key12": "5NYbvzui4SyDNnTk9ee9u3N9y7dzkSzfNhV1BZAunL4khe7jEN3ybGJmsw7gV6QxXKxKrBpWewUQPEzHSSCDwB9U",
  "key13": "4kqNehH5TLPAXx5YC8NEdtkvNUvFRMJFSPibzASYa6EbyVHe4z14tUjSDArk7BFcbmEE3zudtATDRuNxzJRR5DKZ",
  "key14": "4zUQifX2jwfeTmzfd2CMTeFar8ivTwhgCHVmAisQX9EzR2WASCHX3fbXN4fcMHsqFeWbGM6AgJv57Jgbt1Vm4w1x",
  "key15": "4f6bsrcwwYrRAn4fu982x5WdqTQkbdWiQM5T3HyydSDBJEG4vFguEBc6GTheHvKgtiddALPwSFAKMMBx27ST2Vdp",
  "key16": "28rPDtNJCWenejzXwgbrzYQResq7KK3tX4FMLSx9SDodt6NRLSxYrfFRTLm43upSbyEtBsqoy8uw2wJ4T3CBetJT",
  "key17": "mPpjXwXJdpzmfMKZEo8RZSZTKsWimskZqvGjCRn2zjxTkgZ4oKBsftH5KW8ZKW3rtUyVfHaAEikcJpkDWFRCoHu",
  "key18": "4fLLR612pnDZ4KDcGwCaDY2zSsnASxACEATP29mW5aDWGxWzVR3A1vrPsVvRUrZsHvvwE7JHvzLkxgdw18wMiVwk",
  "key19": "Dvbtd2JviGM7cgaEzsfzV32se3ACopUgZFfwEsb5M7cYsLGSkrnyd2vbXYHzNH9RLicNAQSiFwChnSEkszu8tFT",
  "key20": "2xrVXj2nMirVbTveLjZ1KfUnaf6BhhQQyKtwAgsHMuNpE7xpQhKKxv6nKUQNVuuarQYD7rmJJtieNXTX4FWaNpLK",
  "key21": "3N6LifSrJRGRucVBp3GAPdJTe9yXF7oRBSd6ijr1rKyQ6iwt6BzNMfk1HEmANZ2kXiUtX9swr8iKzTWTTGjU8C89",
  "key22": "226YqNiNHLzmsd43YjwqgbWgLHYisaAX9oMH5szm8oSvRuGVdWbB7CKw9hy4WLh775dN9ThCu3rw33cja2S4zatH",
  "key23": "4J1MmgeurrK5t4JLtXaphhn4XgJkPu8L8xZZQTPAaWFxGEsVetY2UBApYzjHooefX7myQRLd8qW5gUWexrBxyWom",
  "key24": "26yyWLSgb7tDtNgW3mjkD7TiqynRsS2NWmtipG2fxmSSr4SgrFF1bKkmmfdDUcUnfQB4QAwPpnirJ5yY248LZG6M",
  "key25": "4pYKyzyaKRoj3iBdwVfnUNTEZyVK3uRZMYRxGAR9DSBz53tE7XvuQj3STVKsVEhBCVJPdoHKc7FG5p9vVbYZcoZh",
  "key26": "5u8rwAdpdQ4FwHZsdhLDyAhUSMCkBMUHGi5b432Dbn49KCVaxtWGVAgV7XPwxDmm7FoRNbBnzqG8iPGbfp37WUMf",
  "key27": "4iJs7Q8RSabXfHddtF9kRZjMZTaFeJmwXwJy5D8QEsyAovmKxyhAjQq28pXCoKA6mArQPjwTgpH2eZSS2mxWgYL5",
  "key28": "21cDam8EtfKkZkMKNrupzkZ6ZfpbrX7B4XYE92MGePvgh3WEThwr4gn9DzTMzimnrUm8M9qnRLU34tKF6exu8MsV",
  "key29": "3RyXJwtEu989i43Pk9qKfhspYLHr88BLXMj61cFBTwYR5RUHqgjKWxoZ5uHRUMdBoE7s2vmae3HNGAPp5TSbeFca",
  "key30": "TeUz1vxbG2znLacjXVeXCBUSfiwQNkHQbw4Z6QpRYNRi1uH5XYoUHf9yfvhqooPtrXXNuCV49gw5J2R2CfBNhHj",
  "key31": "Mr8W3Yo6FebN3EiBTfSKZRcsAijANGoWnWE7e8EqUv29nm6UF5jgphBgZW1ARi1AraSTDC8P33Xe6NxN7V4d5a5",
  "key32": "2MBJ4Yxa1RWzc5F5CGorbBSnTv2VotHsUX51E5Dke3j6sCMbzHed4CUSbB8pEWB2u4k8x5YwKNNAiJGiJZhy8Gca",
  "key33": "299eSy9fy7HUwrAfS4zCrxgy8pgczYdTAP4Bfa3Ccf4e7aezPSGTBDjj86E84StxpmcvPMT8EJzSrpyZ9n8x3Krq",
  "key34": "3ioH5AoMAjyEouJE8ZPBxHZPghobNWnwPn3RfPfvLwdyNNFdCj5rGjxrXqgwRtrrp3p71RbsmpPzgiF98Jo5srG4",
  "key35": "5gBEQnmzaoEXToQnLe2h91iBrfwqPjEjUhJZd83jNxbgc2fTih3diCjKAaiarf73WsQUqhMUpowJtWmUjXhskiz6",
  "key36": "2pQEXdqd7SLX5tz6UTNLfm7EmUPGzxYMGczkoQCJ1BvkkMoivT31FCjVqBLbv4fNVwKm8LwyCVhhDxDnshwi4LhE",
  "key37": "57821GbVEwqb17zFZ5fX64beX5SMaosiRfX2Yix75zxPq3KWgJTMnAATBzxohSnoBX76xXerPRLiJ5oSsTA8RpKH",
  "key38": "3fispLbLUFcPfYEXVoepsxUqpXnjje6gCAMnwjZrrMc4BeuF4BQNMkDHtQh53215rn941dzJpMGRsVGjg9h5ZLM6",
  "key39": "2LDvkSCLTsWuFYoU2qgZsXGYW5Rgw9o3gQEXYLZ2S2yXtfz849RH9Dw1mpzwkp6UWLbcPmCydz9htMTRR4U23Csm",
  "key40": "6ChFv5mhmJRBRU21t43iFDZxeC1m9g5kUc2kXAAouTKF33iXAPVKduVMQ1xd8y2hb9hJMELauR8CNyjboSNHaJq",
  "key41": "2wxmLWR3tSExYaf54VDbpfQggbrECRYaE6yXYLXJRuaoK6ig4DAnUj2nK71QsumCCfCpRowHDsj1pBxVghAqhWrx",
  "key42": "jBHoRuxxwp9ADHCRqVRx1HHgMRTSPafENDJZzhLjW7JnL6E8PLCgUy3786YtWHSu37ZHLoRSzQ9X8GAnDirno51",
  "key43": "2a7pA4HVQoYof6C8vCozRWqcEXzctz7PtLJhapABkAZHrHBf4w3oycDWp2jGAsRVEbSQewStA4yWWKi72qvNEn1L"
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

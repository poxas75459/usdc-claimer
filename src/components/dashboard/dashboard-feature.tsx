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
    "3WsWrepUQYUap9EP3UR9bZfZ7vS8YKHkFFaYks7CevuHhZNNZmZFNQbpStyLRAvGpaTuLML3dzHPemp5TtaZdenz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jhEin7PyJk725ssa1icCyBKAdpJ7UkK8i7NxypSwu73fif4FE6b3iUBG4oq88Z22c94gWrqSwQo9RYvk8j9zbB3",
  "key1": "2LDv2Nkh5Bttgcj7LVqWFioKWb7zgV3fzUKVhfW4yTH84UB9j4A2cCR1oVU4pHqoEeAV755fi3jtjC7UTuyT7792",
  "key2": "2KykcatgQ8cPa6vXgzfrXheaxHNfKGg89nHZ3Jt3YBcf4mjDC65QwWWfs8katHM5TRzkWCCNdge32zfN9Gmpgpxk",
  "key3": "4q8zcwyE5bXzpyeWN9yMBynzDjmDqkjA6ASR3xZkoZrwzD9ar1UT7Pq7f5cNgw86Crp9oHrjuTzhrAZhdWKHHssT",
  "key4": "5yjs4CsnfjBfK6QC5ExrMnpJEVWGibrYPBrCZv2UHS3r6HwFSS36X9SKp287ERXt9BWLHBEJVb9uNVgA3kk8vLRh",
  "key5": "3ssQqcRLzoJSVQscCKPS4i1BAsejGGGpFZyfXcumeMo2fdDndGEfRnUPomgLxoBs998xTA9StJe52yTb2JQK28ga",
  "key6": "3kzoZZozQrKV1CK4XDabyLU6DY39hCzSKnz3DCJp7b4F2DFT53mZkdmzBRcdTPdTormWnMnt31R81gBAGriqMJMN",
  "key7": "21i1c7ixjAMvCYEDt5vfohuXaruNRhd3zJivHsRVYuxTNzPCA1oniRECxkRRfMvQT2nYMkvmQQNebbJMxe9meep9",
  "key8": "3aepGYwgd9qzP2n9gyp761nYz7pXMSHPNwh5ooVpqVj4yKg4MBmwXhxkJpxZuwscbvMNfRm4GhwgsVc4v3x1jUFp",
  "key9": "5Hb9CXJWC92Nc6NQwVJ6LGNW7rBnq7W1Axg5tqrbHRqh5ey7msSZg479iAmq1TLb41vTSNj89hqU9K4AENXNnPX2",
  "key10": "2mCkP36dgTUeRtqerHUpibZeSdWjZ2fK2Puvn9Ahw4fxjJvNExnAo5cpjKfiLTb3LrASyzxmeBfdiBRRjd5T4uzD",
  "key11": "tNe4dWcZ4RDGuArT4LWTC2a41kNVuyGg1qKk1WJUURZx2vNszNv6SJqK7kNmXs6Qp1ThF6HmD5jbPahRYiyazQL",
  "key12": "3pg23ucGwiVhitMuwYZEBinyGUpH6bsG4x5BFQ6p9cxU1TAhaZYNHDum72nv8VTgVPxv4YEG3cZmzi9LkTRdV4c7",
  "key13": "3qRU4e4jMyNWAyGJz1cDr8sM7AUpCecDmjyMecZWeSe9CDSfVKKRxRXKd2JsXWjeN1mU7WbU5ECadzz2GJNAJLoB",
  "key14": "3ZwAN1AVcUtU5YHDrjeYDEWziZJ5D4SwVw3dji5ZH3jYwUdwYWTYgzSxdyGQApMZ9dgAZQY5NquDedF1pWQoUHdT",
  "key15": "k1ZqLYKDJeNAayvz7nc8z6MvTfJYTSH4KAeu1vzDx8QPyHzioJUef8FKoBYMKjwz33ySUbXK5VAvYjEVzPZ15Wx",
  "key16": "572iE5Hhnuq17Dtu9V4GHgciQyxzFekBL6gvdTCHPUx3jKi1MsDzbsTDb6FBd28YMQXWAixWpu9RCFYpqH6tn1jU",
  "key17": "2sX32HVvZv5mnyr16Py99dSb6KJRY7i5e124KkWbUFRvPt7dhoLcd1jDY3abYx3X6dwqjVdTGfqvZgh9etMp12A6",
  "key18": "2mJW5CiZbcU3nvLwDhmoWaSG2rWTzyqp7BZVxLt9raD43USvMJKCsuEvTX17cHYMpEXphLJcsqZNUXQY5bjbTjgN",
  "key19": "4xoTQjoqHVrnsFNQn2p3E6XvAQcWr4ffx5f9GC5XXDBRiaPwLF2yiz1XDgidrbmEnxaExjeQogK6tkibyy9axcH2",
  "key20": "5f4RhCxPbbKegWyqteHZSLFk2HJG35bTeztcaVYtk9wtYoRVWh2HpsuQoBU4cgyBc3BTgyYHEjx4er77FAzgBnMh",
  "key21": "2YKAv9czsB84oCA1EjhJDUeds9pAgJNLsnTtpTwNxR8vHJkC1qVoBKi5DoMDhwGvBhAkyQn9ANtSpPAQaka4MNh7",
  "key22": "JiMZYNpX3fze2R5oNTcULmuyC95Wpy3oRq2iL3H3WQRBGfPUzEnpCS3PBcK6LPeeACjHacjVSMDF4eJY1nRKdFC",
  "key23": "2pRKK22qifEDUBH6WvBP4tfPKG88TeuLGjfobTmmBYzRHxNeWDpAunmbzc8edRkw2QbyiH1EWpw9zBeNHd9B7wgD",
  "key24": "5rK11nRAAyJtdL3SXzfwamKVDcSGMF6tiKa6UFUgHBhxRx6aPwPL77TqGG3ARcmbzBzDa9nsFmSDtu9meGNCWZyX",
  "key25": "3DTrsbtrSxAT1ezxrJmD2brMcFtnHAPGPm1VC3WoNcE92C18tGFZECEP4WVZn2MQyfECGtCvTsMfi8EJ887sRSWQ",
  "key26": "4C4usfX81hEtSCT6onoUtRTDhWkWzCzMQ5BNNbKRRWxfsyCzMNA764Tk9agxM12mnvNxEdZBT4eLiFRrUyQAKaW6",
  "key27": "3QkyaMLgE3zHCj5tfg1cf5zzw6P4vA4ocRUf6z4GhNjsbdCTNZXtwUJ98LeLX67NZSiWUAsiZ6MokEzze1Gw4qiP",
  "key28": "UUz9rrq21ZmDPVD7SGqWqZ9qKXp6JU7qBiVgtCkcHxBfax8zhEbimEqFa496bSf4ACdvWZvotwMWnR7QteeRph4",
  "key29": "4nXuiKvrDKomVb93mupvKdmdoDwhWiBoUW1WobFCyf9mZ1Xmrbca3ZXY6ngXgUzyzHdZ6b8xjbmtjSiAFCimW2Bm",
  "key30": "3EkMFVdqwKNfn78zXz1VaTPTT44tvLFYMnMWqQQa3z72t6taLB4J6XZgAnhkbjszRDmKUG4u79piKH1kCBH5ZWLM",
  "key31": "4mYdzhUpC9Y2iHFqai1rhz1yF6xLcZfDRj3wbqZjQaeYnxprCZuKtsoBsXQS6wrBkmfnvzULS4daDmqCTTYAGCpx",
  "key32": "47DXpKLuNHGUzZM6MBFot1RV5L9RfU48bPRnBrGkDc7aojnTixD4YPS4Z1cQk1yuTZ1mKujuRjfTv9pU8GKvVNnN",
  "key33": "fSVTDBkEnoh2pzkHAfibWZtx25jFohvZTfGegodURBQnigpst82NUZPvqx8PVTUKYWNcFsfsiJgGhbHez9b9yzW",
  "key34": "2x9BkPGZRC2JgykkcsJcbuA1UPTuKmZ6e3aq8r8VPRf1dCDVtFygGcRYv9HCKkhvAp6GxdejAKY85caZZcCerRC7",
  "key35": "4PUB3Ra1P1MdijYpXxXzHiAVCgjDKuDPiV74WwPdo9VDfMYnLtg88PmtQaWV53FZNzoRUUQswTHF6XcZ7LVJxeM8",
  "key36": "4ptfwFkYsVwCEBefxxFJjV2RwicVutbT7Vak7Zm4JoqMYPLcHiZA9ABZrqE5MdbtqzM5MPpmLbWRJGEJH6HWwDPc",
  "key37": "38YBdTTcsce7LLD6T16HRc6KmhMudb9RGR49x7jrTWxi2CZ5aunPWefLXuEwf356ccf8xZWG3WXZpaTJnHij87By",
  "key38": "5hqngzn2BQbH19uvXQkC5m9Xmt4QGUrLDiTTFUFHt79cWrH5Jeqirv1TsGfmeeYJLD5SYrtgfFdkMbpVz6DaHw2z",
  "key39": "3f4TE5P35dLxPr4rq5NBGqWjXC5WjfYXcB6wXKB19Jb54TTB5eWijeGecocdyhsVn4SjuzaKA1yqiwVMQEe7LZqE",
  "key40": "27KNwgmSUeyWDJ2rHo4WJC7ZhncGBLXTVWC3S4GMwVUJTnTDqFP8zZCeoFwRpDH2kiR7X75UwmAp3Csjza5Nc2SB",
  "key41": "5ekQ26TDnXGkGrUSK89P3Qg3U9Kb5StiRpZaJQG1C59m5Tu2FQhxtcQgVqhKRM8sme3oXD4DAZ6BF6L8z8krs4yr",
  "key42": "4oGfkmrYQ3AX4N1CZytsuzWKB8WdpeNZXHb7NpVXKYUNarJS2f7hg5XRr71hziDmWrcRaRfyJuzBhR6BW4ZRr2YG",
  "key43": "JjRSqUBkLo1TrmJWKFfkfUJcHVnRNwQ6283Laxgf8YjU1fqmRoueLK5BkKqASkH2LdJaLF2GYACDgXognujowt9",
  "key44": "4c1us8hDQeaw4eLxVFttBs6ZTfbJg3VageCgiTU2DUaRz3tyj4vpvU6u4nmAoSLga5MB9NkEWShTzdHSPqnycnMH",
  "key45": "4TZesJHbgQWkksbPRKB1gFrAuckyNrGvdhrg8SKamy23WaQpbVovtenxpNZmegLqEzU2SyjWMANAQ3fr4ZZQ4Khk"
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

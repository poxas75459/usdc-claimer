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
    "3ABHXEGecALaQqLVMciHEYBXWdjoykCjLRx2dR4CKFUMCpGZ3tPBoj7crPWwu7TQHBgFuP9brvMvGtsmCNHVqKWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPVF7y1Em3QUty6E9B7hwHtrL16FC9rPXUpSTu21crp1iNpmb1risD4bSLgZZ3YRqM8q6faYk7yPdE3nXSjZ7cJ",
  "key1": "5nCxzyFoxrhCBgu8RBnDuu3PgbYV8YSeyDpMhKDJqxWjDTJQBEw6wzrnNcp6Fs8ny49n6JEs9NVupQ9HFLyMXbWi",
  "key2": "2NoTjCjwVagp5aGP5Zrui6pfREKguQX5MY4rkGKbxdMZuKmDE69CbTrSQwcGfJdgfDakFYWoLyvnrNVtvZan91Xr",
  "key3": "4sahFD18Ai4bXv68Qtey9iSjnc4Nzfjb5G9V1Lw3yFnyFqaBDFdL2hBnhdMeVZh6bBSBmQs9hzSBFZYDgZYMt61m",
  "key4": "EXaDFLwgK5ZQ2urGo7ZoLYRXz6rFATddzh4JKKwyyTjkMkhUeFfvNDYEFVmFKLc3twve6nL5neJjuUCU2gspYcm",
  "key5": "h7yP6v4WoRqqVJs9mF8rrtcN7WKEe9BaeMAKvMsGWm7mRv1z2StC4HCVxSkH2hDDmoYkZQQMXdLAKgkS7Aw7EcJ",
  "key6": "5r1YBmSU4jDveAo9i8MKMgDom7bTrziBiBGADyBYH6rRkR7n6e4kT2aye2M7YqAbpvZLWPhwAqreHQgpor9sNdcT",
  "key7": "5wUZzACQQNL9qcuUdeH33zeC9FcAZqYkvKQBJYmYkZNHpw1EdfGxwbzQgVcoAYF4vQhGCSV84ofGdPnM9WvXnGZ",
  "key8": "2CPqNsx5yELzSXE4ATHjCg7sUG7jrQ8gsnjkfYDa5uDhCJQWaKZ9f7Q9gXEDosNyjSDZncFrZCkHNCe2wkFeH5E5",
  "key9": "4rwHMhnqgowkEccUzagAmYqxw7GektxRUbsE9x44Mz6RG2JLQpn2p5qaZsAeuV8S8y9L6qVqqSkucc156hqTV6f9",
  "key10": "5nHMPfBMQKJ1HMVWQdWhPYLv2SDzoMfFT5SDXt7F32s8LocETDCFqm7rSboqinrCQr7UdgJJbmjcETvwz4GPbUsU",
  "key11": "4Kv8n6tUYazQj7fwufVGegRdj1VjYmnH7PaqRHQAmY9xThcwp2XT92GGcG4w4SHwzPMw9aWDbEQnvqs48FKhhyYE",
  "key12": "4N9QMdqQybPM7KY61E1JmdNTe2aCbmxZJ4d3PTSG9r5WKLLrvxGcaFyXox6bUFG9rW3BwPkji3wv9e1Lhug9LMZD",
  "key13": "4jyYKAkWjHfh6n4bVDt1GTRXGD2TZA1DjFLvWrWNzVbL2U3oAvv2x7MNTCHRSMfrRbMMfwWuK7zCcnxK2EHf7rqk",
  "key14": "3bPTfA5bZ9e3AJv8ZMM7qNd775mxC6BYBRXsTo1uvz92bnfWBNqbvs7g9n3F4zHKGdFKSeFPZqKCYXATttFCTsoS",
  "key15": "5i8NH5TXuTMNfxSR7Sm1gSbd4XQitLeiYtc2Lb3xHpk6qH98hvJ5hh1LD5o9B9vegCL1c9P58FiJBr3s4Rg3GNmL",
  "key16": "3jn4ZdppB81WMkoARVnZzdd7N6nNsf212oJMip71XdeUNYnHxrYsE2kMybztCTqNbg3WAtBxau6MLu4AvRbuc3ze",
  "key17": "3C6cKVVbR9uNyVR7ig9E8q4qiLVSYCU5vb3JGdkwyie9bQ5q1GHaEi2sUa5U2KdU7WpXjtLRfEd1CAsk3xd4UuSd",
  "key18": "d8vnKfHQF72uXZYh8uTyP4eL5cWt39rSyzDWQw1wU9YqTuBozHRQjzx8BfDrhjffDT9zE64Ria4aTjS9covSVGk",
  "key19": "4nGJESd47mv5SiQTBzBYpfZaLrUgexD4ZDPPwmxUC5Uuzn63qCpQxFd9PjVU1EZ4Yf5DtzRzWh9p3ZdwU8GQ5fXx",
  "key20": "5N22FBLxirSLrCZFpT6KeWqz7RgdaZcYQhv6iuQtyvNvHom9w26ZDWFGhwDRQ7YQtSsxLtthSaumv39VKy5yBhEV",
  "key21": "5buMc9eHMKPGjKRWpVnFTYvoWZRBjThdNJC7b1sVcr67KwUshDdN5U9QBW4FCzrrQCpTm5yiauHica1B627wHrag",
  "key22": "5Jx88mRgTFqU6Z1zGJhsxkLefXGCXBJ5cnANmJSVxq58dvGuLmyn9vRCZtz5Vhz2AAJ1UMFyFoBHtiHo9n594EtE",
  "key23": "2HWCSWnAWa9nuRHt8P6cko8aZWpFwEUaRz3FZiKwqgmjPFp1CyHC34zgRqnKvdTQDc6yiQWZmwEa6GaHKPBVgXmH",
  "key24": "2bYGm1bGMKNehfnrCefUcjmycYL8pbhDqZWriWnfj1na6AXESksmCYqxzVrZtvQHSeLS1ZGs3aEKz2pFGYJbWetb",
  "key25": "aMczcZACPKPven8uZcWbAhg83jbbkLtPc3ZQ8khdH4nhtfqvJ11xSBL3kMcoKBpNjfwb5NvtYXHjFjqTwTmQU7L",
  "key26": "Km73fGvJNNmgbacvEtWjjEdXwiCiWG7gpTypzbyhrZhG4qpNrt3B5PH1rfWE1YYxeSZZyh1s9h4DG4xcACMWSEP",
  "key27": "4mPU3eQqtUQ8kZvLrsyZt1HH9JcMPqcH7sPDkdQfianNgDseAcVhwYuB63wkteogdz2aFq9kP875KwzVbtZuVrXk",
  "key28": "3WCa3kuUDktyKUZpg8Em27xSdDdZVfW5YDPiJsnCXNK58VqekBTYUYZJf3EBECXaQwBhxhwaKuuTuzeS8BYSW21b",
  "key29": "3zgErERg8tWrbsRwvpjaPvrPW1XN3C1Anzdxqfv5jaiJuKoujheKuCH4uC7Py847ha99mtVJ7GchJFqj32JqYeMA",
  "key30": "2ierziQwhLTtVoBfW2tvSU1ACKspgFaBnpR7PCiMXXRxo3kcArsK2hRg9PQdSjMBYenr23sm37XVEbxWfhdnTB2i",
  "key31": "43KNPyswTDFq9N849aobznnVbHX1wfzswvMXkJVc2WppWYj6DEoYCH4bBFerMzw7GGYFwvA7nbmk6yR9u36EuGiT",
  "key32": "4SUNDoKaSAChwDpjgcJXRtrRGK8SpDvKYCfR9aUdzU56j8yrNicbnrFPXriTk9J3MtgL5PXt671sAgHyCYQ1Rd18",
  "key33": "5dE6aEF4nrCV1HR1FFKtZ3tLyCVsUKjL1sUWDa5eUSFE2xMsLCNpJDQG2dKYsXWua4d6H9zUSHV3ENw4E8jMmuo8",
  "key34": "34kahHDFPaEdHtWdDGBiexbdASRhGBqav253ywC8WTr7DPDHdcGWXh5dwazjBkaWdRurNXE4mfZNoUQcQLxH8Dip",
  "key35": "4hMrJDZfSF4WZq2Jt97z8MhJyJf3Sr5PTnsVyRNgqFitsWS7LYSZjvTr5E911gA3defi13X1oxw6HuUwepCQyuoT",
  "key36": "2nCtRG4DuWRZcjPVC4tHWsHshUuWUkw1VrWUU42rjHU8BZyasdnxCQ95o6RJ4aaBUKvqKwvomgmfov82K9z6vtme",
  "key37": "48xXpubdjzMaGgr4tXujhpjJaidpEwQoKycqiRs56HhJ9eQ3jk79GYL8cjs4Lis64Cxf3nJrGb67keQRCxwBp4Mk",
  "key38": "59YKWiNy9GAtDWiMvazjaorr5x6xfeBDb2Pf3wYZwjSRFRUmuSpgdFRsaAGtNNysFUVJ8Uw3roAkGaSUzrvch2st",
  "key39": "R5o2wN12F8nifpXwLnyfYFeqgk49TW3QTTWGSi94xi8hHSuB2ZgSNcPdUuK8oZPUJWicJHtV3T1s9Qa6w6VLxrM",
  "key40": "43egr8c1XX8fimATNCZqjsiCTLYZwZgpC4Cgzj1Xrm2qJk21YY49CHFhEVrPQfVRUgz85yEkL7orSV2RbxpMjfY9",
  "key41": "22AATQWgSrhoV7BrtdRaFNPq7rj6iedvBHEX9xGMvFUr2e2B5jEr5UpDnwqF2nd3CajVgfmuRtQ47prWanqsU3FG",
  "key42": "2sdu73Mhukvt1do1okBQEkHGNBNyZ1NcBRcqMa3ZmzBMD9LgB8ftnmStTdjHmXMbwBSmWCUdX5vBo32GotHYzEFv"
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

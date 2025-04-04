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
    "51co89GeGhFnKLqe4RLcbPNhu2yUGVDmuXQ8wMbYfevi3JfBbHutrZAgAMsz82oCiXEBnPk7xmadhZLmdFqDgZgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5RKvtBW2DLuMqciawPvzTGCMEPXu4X2NQn7MSQriKoJV3XaKHGt3wMvzSitULQY1dVxH62PMonoJfwngg8iLhH",
  "key1": "2rzDWUwP4mz7td8Xw8A5Cqzf5DQXzky6tv5KygbN4r8UuBWEXpCACsQcb3LocHBcvyJchj9Gb51SE2tLK3Wsqzw5",
  "key2": "3GAzuRbBXi8Xj4DgVFcydkHFPpKyy2dtjuPSkji2BZYwUY9Ey5dn48t4v8ESuQbzt55f2wYWgEEdXGeKFAiHXBrY",
  "key3": "2MfyVuPtEd5Mk3P2irWyE8CsqJgq8Cz28iQWSz6dh8J3tibDLeTa18YiuLmpD5cWN6UB4Gf6VtZ4A6uKTH5NPtTf",
  "key4": "3rx9QBmopeg3uWamqfXbkZ8wk3DEJkL1QpgqGuukkQEBZXHpCwB5UvwzLV7XrWxy1xuM46uLiy1wZ2imdz8UoyB5",
  "key5": "7cGtZU1AzYL1GY4MZ1CvuF3Tj8oLJuvajNnmewBjA8ZGHxTrzVX7jcYLsaK9BSSZAJZ4JzHXLS2A3UJUR2Hzc8S",
  "key6": "3EKofvNe5EaQpbhs3qvv1dAy3ztxzV2xZDbqhMDuufDcUM49wnoWbiecz1B5Byv1XQPdgKGDTM6sJ4G2HYW2ovqX",
  "key7": "d32VpSbRPDkMAPZK4kwCAwE8N8hbmGj68qEyBwLkvoXdGSzz5NpMtLw1kBDC7zBvnWyr8y6GxichgsD66ZhxUK8",
  "key8": "4Edpkwx4CMTWHRwWqmKN6aFzRMRDKrjrfjoFdKSthsCq7Qt2ksMWTFvW7ys5QKMwoGx5bDWX6pcMNJdkfzY17Rwq",
  "key9": "5CVZrNuFcwkHHNoykTP6vdpVoe736MpZcHRFP3eSL6ZrvX2cSfwvd4MGsGDzdGb911QiiFHR726LxHKz5aodrdZP",
  "key10": "4tmkxrNn5jk5wpRSmcpXSWwjrwPEbwb2q4edHr5XXPiQ3rSeCToh7HVN68uR42HYs2mGqmisWUqm7Qbjkqv861tm",
  "key11": "3PQgpDboTaj6orsK38uCSTHYekqGwRmFfZDKTn2PB56Zzh8MbqMvX4uwAqKF89Tqy82RgBSEXUQuYnN1Z4dpiEj2",
  "key12": "2h4ygMMwPK5Efq1zp9cLGCSzhgr27R4KC6pfdHrBUiNgBN4aUNxQ1oyidAcqdc2VhxG4x956rvXBDpxeYhVCZYof",
  "key13": "2TgtMWVRgtNLVi8XQGm8gjhwDVgsqzSa4F4BMtFP54L83gvFYhoKr5YNAnfT1wf9rZGZfGZVwYg27mups26oc81z",
  "key14": "44kcqYKviQoq1ukCruqR3drGZznTzKAUJEBmocqhmdQpd6ep6kKpLbyH3jP5dUgsXoN7o1kWxfLkrGaa6fXUEAhp",
  "key15": "2HCqJRmr9wGWrr5xKmeakZU7d9di1axA6SEibodDisSXpLUjyC8iyBzNdDAZPd1wx2xySiKAgvV8npk1eJakTXVa",
  "key16": "5sVnW77R7G4JvAmuouL26rykFH3g7Ko32pFuz5PG8A4sjn2JeRPiQ3MiGY37p5NifjbyHX46DXhgUzd28Qiqs5cL",
  "key17": "2j8WFMQcUiRYZiDDs9VBSJmY88aBFUAjDWT6RmcPyc6pb3QTSoDM8ZxSBebMMdLacTS2MMngzMQHTeNZ7CZugcYo",
  "key18": "3bFmBkDGGX7g3Wh9PUMnQyiXbHjgxSAAVuBNzG1pKi1CcvBUQZhrejcfVxB21FcPW6cqYuvpbygnrsc7arEE6ABx",
  "key19": "5rzmk8fPKz9irRJLupq2RQRePm1tLGcQvfVjsfdxmefPamnH59QcCHVPdBSx522LQRMbtgvtxggVRRWWbDVcRMeS",
  "key20": "496R8QVhFzg4SxKfE1ykCppESdgJHEmatvumsFLwaYhdPML4BbG5Y2JPjNEePDXT55uN92wXTj7584oLbJT54P8b",
  "key21": "3Tiutigd4GsvTJ7D7ZbB9wcZ1AHcC2ATR7yVWFpsrVe7HRVif9s2HFLrSWBDyg87yj9t48S53KsVvvUyTkNMWXVA",
  "key22": "3bNgxubQRZkXccujzxUEQhey3VqksgFxeY4L9EMbADajvzPHrtU569ssnX9nfsGKc2RQigzgwgvEymCo8JMvPwgU",
  "key23": "2vXDbz5RGwccbMX2yyNyZXKQz4gCrkUbTthJhCwaDs5NEEoZ6Rhx3Sd8msaQXntJm9NkSzJo1RX8Mp7xgsa5fdwx",
  "key24": "5FQfyzKgAY2W3hPfGpSoDX4iqKyZxrn11s5sE8ebKiExaz26GX6LCSd7fsqnmoAzjPnD8gX49bhXpcepMhFq6TC4",
  "key25": "56LsByF5U7LdqauQKCawiMMGvVxfRkFYQ4mED423F2DCiCW59yXHxdWDa5n1HNw3SczxPX3LfUb5fc6SxGygzqSz",
  "key26": "4MVw9CKBnXoryTjsuY1e61NiAMDdKKm7X1QWgCvR991qp6PbVFU2PtKzxf1RFKx3daqDGZ2MJJmSpo3ndbkEJKfF",
  "key27": "2eGm641QZh2XfRC13QAtdYAPHypnXECbjp73DJMZoeF8Qbihsfbu8hwJvsb7jteY5cZZuqU6bJb9JJ1q9P8M1LXE",
  "key28": "4w3wvvH1TdVKZtGn4dqCY9LZutZ3Y9e5Jbss759aidFvFLa6uWGumV4S1wA8UnkBbMZfRewtqkYQAdM44TFccFw2",
  "key29": "613wo9tmN9hdffumoM1uh2HsT1Y5yprt6hj7F14wRZgYdTDzPeFQSQ3c5qcANdHFib5FLpkgaonXACRZurYuymYG",
  "key30": "5Pf1asEMhYRsZKzEE9eKwqJgJk8bFSgm7r88g4KumMgsztFfkkHQpfSeUwLTGH83GELAh5u7QhxvCGa5zu1V3Wc7",
  "key31": "5Yn58yA1LSQsbYw5gznjB1jeoz4PnvFRTnwfadLdWzYxHPU7p965bCMZU4ZWHBZy1j9TEmtYmkxfzMahxgJcnhpA",
  "key32": "5JxqjyrJc4Zgs6Le562La4e2kZSSqFmrm7tJNWacMCpUpyqZPe2Re7WihTbBFfdxySXCAYd36w8UXs7rFJ7kKnZ5",
  "key33": "4NZRFLbC5KBC1VA88PpWAzDpYjsRy5sQBSZsoXkstDkV2xc6ZDUp89m58V4jSdBHY48KSm5YdpGCK49qLLvvx72u",
  "key34": "31k4iw3eYGVUvyzQ1ucopuRQTWnX5dGhmMejZyohEECA5XsxW5nkf32DVZF9BrhsXJuEKQCbPzWQuCBr7ChSzteZ",
  "key35": "5cGAVsxMRD2YHHvoVLXjxHRRewQnuqxwqZzjSpUgtddgkyGi8XMxT1zHtdvV6FtPsJGy6pM6ohh5jnThzjaH7GmY",
  "key36": "18ZxhhBEvhYg9YFApLv4Gs1s4r44oLsX2oL5UqbgUfrmotkXdKHWqVrXbUDnatc2f322ojCeCcsDfzYSVqMonWx",
  "key37": "27dz62PjdcakKrPMgaSeCVVkEjkBdStWv1oQ3y2CmPYuFEwiprDpaphms41ZwTHQ28M3PdarWcUiEmZfT9gvwUh3",
  "key38": "Fnjup2dTngFL3YYRjav4rDiefv3XCcNzWu76ejfw5F4vJGwrzTrBV5z8KXwi3GzqZRZnRBqZQGHxShFTx4m4HkT",
  "key39": "4hWYL9cut9wDF9Ah2JKGfgB9MjwBTRf3cBz34cLRnhmFapoGUCeQdCod1pC5qBpx9nxg6kAGmBAmNHATtMLkDM9u",
  "key40": "4V5e52KA7DcanA1yuveqDcMoas8aR2sLJ76TE5h1hsWtHyD8MHjfYPRR91vDdUa4E9AXK5WuAVaJ4A2oXeybsehU",
  "key41": "VTGQJ6hdw4wEo4DMcBW4DqZBzndsBLdexYsGwD9AZw7UoWWV2qUET9PUxkCbnSmXmYAEHBxtGJf3ncLcK7NQ6SF",
  "key42": "5DzfFPD5J5D9jViw4AvzaigmZsaVC9Ts6nSjQraq8tEK1toWQBBs6YYDyy91RwMjha1kyiTatKjNVnbsXPBduEFo",
  "key43": "2GSaTGMah6rUbsTxT1tf45CQLNETYTV8wkgwn4LnPe4djwRdHppJQPf9u3oBkGdSEkC4eX8z8sAx7fT3zZ7KJgcu",
  "key44": "2fvshRTpuWvo1ZsCvL4HnQAuyopKinYPKDfzBAY2oQ7hWYLU74fwWgfH8VufMEPsiQU1wF4Dsk1Gyz5ooGXc2eq4",
  "key45": "3KeaK8WuxWRA6Y5C3qfuVuMSoG1aZ76qDChPWkVHjnNb4Bdv3QLqVAsepAQpuTG2KBT6wGAWHYgab83SjmrU4AYx",
  "key46": "36Gkpi5EnagVDzxY7acWGBKbWUAmrLR3yyDboEnkxcB2yPsbTBK9TrgTYWiU9yZ74uk3Qc29U2HB8zcWwiTa6uEq"
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

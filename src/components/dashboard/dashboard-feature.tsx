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
    "3Z7S2PjCgwhYunoC1VuA13i5Uy35kmModWjveFH52Mn9vZnprxpvEXihGX6yoojjjFButfMGYe6rKNfj9Ns1QsHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VKnW5kWbbEXwzZTaKeGx9wuVj4ELTCnJZRkUmrqk15mww89QNSX2aWiUaVdEXScN789s3qiEUo8PhkMkgGXziFV",
  "key1": "3MR9N8nJ7dhe1VN1PvcMiSgWRhLUqJ2JdCVFxeNVrGyyBDV81MsTYdecn3NnTSv6vZ9N3NxUzvR7Aa8zdj9mTWt6",
  "key2": "1263ghVkktnHCn6tNQbnaLYUpzvWzcQuDPpZnXMsYxZot6Ziq88Xq1H1w7c9NYnPVD4AfEaEoybQLnwrhqA2p2WM",
  "key3": "4Hzu1VRcaAbtBBUa9o9dhndxhN2HxSDwZCATZSzy8C6khE8kTDmPk6qAfmSUqVbjwACt9KB3D365iDv1U1Q211Wg",
  "key4": "61y8y64N533xAFSL5uUNxh7NthJMgofgEG6UinYKVz7BiSva7GkoQY7FCKkJQNvY7HuChk5fjSB3SpJ6TB2GSDmM",
  "key5": "23H9fqDqC9UKwvxAJZGSNaynvdTYtAsPGCe17rjJ4ZNUKrthbBCppRbriqUaEpp7LAL35Mcuhca9yWUmFz9yRPSZ",
  "key6": "35yjxRGxGSTi2WfGa3mF8BFCsZjAxZPCf27mG68Mnne7tABHYWLjyFQJx5okM3vsd4HKvE9HFTBiEoACPwgo4nL8",
  "key7": "2epjWAvQtqK6iDzyXkiSxKi3ejAztdK15cvBUHsds5r7YhrujG7tnbu7TfJmLgGErXAnrgLqHHGJTju6rAApc1j8",
  "key8": "2qXRpr1Fp7UjVrMFcDDEbpmwonGvYfxjvD4at7uCSgHoCHU1cUhcFpYfz8UYnsqc2WZRMmqZKdCmMUDgv4V8Vq5e",
  "key9": "2qBcBs3Ruwg5GewBrCQrA95gYp3VivnDra6dkg5pucGqLPgpYSDkZoqdXcWWWGVY74tcpVbb8ZnwKowkpjZMicmb",
  "key10": "2pv5K6EodbgiCHJ2iZgJoEAZVp37qAChaThk5JaxjNbZM2Dg8njw1ZhVK9AFajBi1irgLjfVGZb2Ju51AAjB69ci",
  "key11": "5EGcGPCBEUdfr1mSz1D5664aYgn6R3H2mLZVqqFw7qULmDyJaXxqdUB9t17mjZ9YVhMsifx8HeZHFsu2hQRF8SaJ",
  "key12": "2x7NLaatMGa6tsQg5mEb2X3hUwJjJifLMsqKsyGCLT2TmwtsjFJgSS2Kr7SsbssSSeGgxWXJ19689TU8KkKh5YaW",
  "key13": "3GCfwTweJPYiMjq7kibC1eW9tuABG3Y9TXUwTWc94bJWwdnxHzPjgNDgB9CF3PGPBnFk18UQcTqZWQN3Nx5yMaTz",
  "key14": "4hug4EXzYdCFdbND96vonbnqmpjpmm8GfNmFDsNH7B2ggaSZaKQ3R5o6SSHsKZUTJdWTaiNa9qYfmbv6cWw2aMSN",
  "key15": "5P2wbSTKQDarpB4c1p8h1NzrsM4zX4To7kAGzbiPLZrp12TGRqeAHtw6qRtjPLUC73GgC7xjJeJ7iptQ15MGm6mY",
  "key16": "3cP9FnBBkbnp12B3ZSt5F5sGqcFYdKThxeVd5oVevpmXjXMMmCsKJjJ1uEPnyu2ja2gtpaWMBEDgM1XUvBxcAeve",
  "key17": "2GBVKT7qBibNsznQGvG4E71nrcBsj5akyRxWpqbv1a4tCKmPsAivQsvHKZ1K8tVzr4LZ2m81ihxCqoh4NzrdQJE6",
  "key18": "4jVfi4zjfXLJ99QgN2QymaiaaPZ2E4abTiZ1BdV4VG3DoVP4P7LsTdU8DdagY8sCFoMW96k3Szez9A38gF8ukDBs",
  "key19": "3ok6cXr1MzJXFc1srcMkDzvC1TRpisWjm1zab6GUWJWZbtZFsqMhZjTymc6vPFTVSbH1ygAnxJkjhuZndkNNtmu8",
  "key20": "4jBJ99ZgvgK7xV8KDkv22DfnxtgNpKs8QW94pALL5gFpZcJr3NRkfotSwyMiE4s1tzuW8CxTtH5bZXK9GmWANY4U",
  "key21": "8coW6az6ED8b7aU9L8BuT2vgxeyNTbecvg4S2Txp8UrwhHyy3pJRb9kYyUWsN6ffUUrVqW79hxtV6fw9itTZtHU",
  "key22": "5nBuehymQcS2vw48pevQhm6feNqWUVmukPkkkrtw1pjd1rmwBZRjZWwpqH8EuHjnC2JFT8A71Naij3kbit8XwsyN",
  "key23": "U1iSwZ6cAYC28opdQRMQBiahozuH716dvLYokryJGwQTzx6J8dLNhG8aUX5AdMLAk5v65GHnURQq3gL7Fx3CghW",
  "key24": "38dopEt5SZN9X8KNZmtiaU612r9R41ba6nSGiP1K8JcTMkj9LfdwN9VUTMDWfKB5sKPijyLxjUiSuz9opHHpAz1z",
  "key25": "4d59GSPFLALFdfyiNgTV2rtEijjRP6dp1xpEYyTUHKYhkqcD8Gk9M5w6eQ1hwb4EnYJHR2RY9ctAxGotGez1EAHq",
  "key26": "4oGxWWbrpv6PqSE8YogoKGVAT2UX8JESxQBMiqGsNpq8LbMSB1oicjwPhLxqmAmsdNnuXW9Lf6LjPEESqKtsGs97",
  "key27": "3E3Z55UHDPLHwNc2b7cUiqbvhr9uR6Ag9j77yGRSYCHPug5KMw79URVz2X36LGx5ZG7Tv5rEL3tYRRRMNHqcWvFp",
  "key28": "3xievvTiUxPofo5XZbrEdaZx3m6ADzw4V6sv5D9L4CjZuGq5nHjXyW35veA4Fh3983rjomVA14HPhShMgWz825Bk",
  "key29": "493Aqnm5wv49difcaxW6rN3QxnJarmED3JWHJWpPvCu3ChJHtJqXu6R8XHELAEujhnLos2gc3Bhvop3imVutPMjr",
  "key30": "5weh357quVY1DxTdTQwFDoYegGHsdg9ZeymHTz3MibF8u4u3qSs9kd6WDKvAjW8YCX2Yb7TjjQM9RLSYupqnMsUE",
  "key31": "3BBKefFY5yBSTC8pByabAMuhyDp3GATkfJ3ZQsKVREE9YmqEQzFRQBtQiPCvbTq1RZwKCDhnibAjuTbDEkfV5dXq",
  "key32": "34xswqXXAcr8ue9cyDWA3B7r7b4TY924KTgPq3yikYtMCvJ9CE1XB3aHiq99xzP7VDbPgTcB7JNAdnSo5fARnwcE",
  "key33": "31LmEvG1anQVmgo8b1roidJrxyE3unhdWBZpbGDCVvg1KdyUEp6sdnA4foBfD3R5yPMAbwdxqAWSkQjBwzySZ7R1",
  "key34": "v6KXVZawSUbazaKjGgFPL5cmBEn2kaSRyJopPubJ9GSGci6pmWW6LuRqNAQUCvXR7JCR627dAfw8CNDcMo84FSb",
  "key35": "4pjobm9Rwnywunxkn57VciyMquoZd2akmpPE8hdiyDfGi8k1BtnJ8i4j6LavMN2Wim4tQQtfGTZ5Nj5SaE3TnWmg",
  "key36": "4AcSBiLysbwN7hS6rKdbzHfWNEKrwMWoFSPD9u6EJdunLC64CDz4gPp4LzhHyymfcnErBojA7y2wRwbjmoKaQ2Ag",
  "key37": "4ZQmLF6Ufi4hxtW788ZGkXbEedDXgb33HuMAtXqKFkcHdDrz4hdVnho64gQJKStatiEJs8hP6X5bGA2JvjwBjCni",
  "key38": "3iJrmcn7qohG2V1LWvhC9Jy6h2HnJMoRFvovswp9KzgjfdCcBLvKThKUvKvRztK4ExLWo65qE1BkhdroAVre8fac",
  "key39": "5gqimw8QrzqB79GwWDY5gu6tw4jocdW6JptiFr5quQ7cxN1xctyMwo4Hhp52oTsqDKXY5y59ZCuhTaNHfJGnVqny",
  "key40": "515MiPafT4ZN5eFFvXKqdbPyP1H7G1B3kQsP33wxhVSTX8PX9BPmx4SSPjFT8GR5NDCqMGc7jmg4NuzSgt7QyFSo",
  "key41": "5Q9k4LapjNYNYdry9kjnWQMY9aEZqb73ACQMY9yd2259ZeRtH5APMZzsNP7UMR4AuRRnKvBe196fXKSRUCfVRNbp",
  "key42": "2aNydCGirPv2Ufn7V61pJidTKw9B8iwj4osCbYHBJ3nBZxa4NQfRszgrF2jQweJsTqP7jycTcgLavpQMMVt6HFZa",
  "key43": "4xyU51Na1rN22KhXSGdvSShRfD73FJoswQSdfB2vfmfA6zzAeax6kB1jzqiPBw1XwbS8TNc27aRdXV4JnhZH3b6h",
  "key44": "2PJaAT9DkBJaqSYaYi3eKHM1wChdUDB8mZRrevAigrsiqDcNnPhAj7yZKQTYcQxdLikRMxc3gdfXvHneuDsvUcw4",
  "key45": "57Qozy8RsHDUeyKHSYtuy5nJd8emBzBTj1a2g9ERUxTC47i4qH43p4ipjnvSDD39w7p6WtQbhXyz7xxtEfSQFPwL"
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

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
    "i3XVvRGJgkP9Kk2VHtd2g9qDwV4HxkroJ6aZBgtU7WqLfeXZdBLupNReoqUn8hEEPsczRodo5Gb2HnNQ1VUqsYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BWXVEGzxdxMNBykM996NznM4SrUE18TKw4duu8qYKa92rsWUwLttZbLzvCuNc5R82PKY31rC13DrWgjn3WtDXFF",
  "key1": "52THtZh3sKvGuyDDuaov5Y7ueCRZEGfmDvbfXxXndbpbCt5rqr9VsUoTyjXv1s5GCoKGVh83gDVhMPyEqtHTCXNr",
  "key2": "5n5p9zUXae6KQktjQe746SXuSUZgmXHVrmJu4XVkz8rq9ZwHxZbVyy33U8YVyqWVXbrKanQUZQk8nYTa9u7Fzn5X",
  "key3": "4LLsM5ifebstNgNydGzhsBqyu43vQpSQ7jFcbkBUDwmf1LgQWbP67v1ADvZqnTfJwxFHxYZWfi6AhgcghxSHaN2i",
  "key4": "2nNqzA648NsXg1h7U68K4r5gdebY6g9bYGJZjqeVAQtnLeefMJ5unPugVo6F5pTf5boZmRHkh9aPXFZBkZJkaHDw",
  "key5": "5rDDmTnHQMRp55bJoEuGWKgAy7L6VGbdKzeMHbHtgnc54onSeyCAiM3PQ1GCGopNWdgWpUhKUGx6zoYazqpCRYgz",
  "key6": "2gynqkvpe4KuBnCM2Arqf9uwSuQeXrJxdjHBCqJXJ88Qx3fD4CzELfWsNQWevhqjUA1i1tuEefbX3Gs7dUPfxwmU",
  "key7": "36yG3YGE1oX9rMu9hLUFP3GVWJvxoqk1hBododdUV19c8txXxB3CFjHae3pQhykymBGuDStf5ndaGnZpgaiedwug",
  "key8": "5TNPJiuKq2iEAkau85srx6pqGAaPofX5uh4cuCwmAZkvnLjntmymJy2qsr9iW9A8b4M9t6osKrtbYza4Ca3MLSWw",
  "key9": "2sszaUBWeatmE5AjEEgB3pNafE9FbRyEcziHGgSZwa4Vxo8vEqjz3iW8deeu9uDr5ZuSyoh8nmPHRZQ354B9U1CC",
  "key10": "4esiJZXQqL3Pv2XcPFXxywVNYhXK8NuS5PeXkqWHNFKGKnxy5CyrXrvxGPx1AxE6cDzk1R8tX7uF9of2Knk7BmtL",
  "key11": "4h3GGks7nBk1ByQkERpgrWbLKZZwxcQAMwTfCg5VXK2FKb3x18iEJMLsYhfrqP5oAdyYJZm9VafoQtoyxwZ15YGW",
  "key12": "2m2zN7yBcbRqW7cbW9gZXrocZUr2TGtCp6boCzfwA1Ua2grBAkufJoZdNGBtGgshceu4TxGAkWKyuKLjRezCaoaA",
  "key13": "39WVK9WpAUzoCfocMZMRoQQioReLCRfhBkku6FvuHGp4s2c92uHuRN8GDFKMKQp8J7669cWsAUCpTYhZJXwLwLtx",
  "key14": "5eM6a4BgYcfRebveokSmU3MjHh8CiiSa98tMVV8X9JuJ5PajaXy36aZrERFuEJoVQTAZv2jU5Ckao1s1qrTDFXDt",
  "key15": "3aA45UGC3UaSC8qPZXCEjtzVJRtvrHHAGWc5jkkKWLBSvEMnxT8yvgp38mULUvFcfcNJgEs96nLnqM5U8Zfif5Ch",
  "key16": "4deYYpatx7SaRJyWvv6MvquaPjrNmq43n7oTBK7Juxf95Jc7yDjJW9PJbN6hs1wfrU99hGWRTdRk2Pj2zHdhbJyj",
  "key17": "4DspfqfMn8mXGTeuNT6Egv9A21GLnf57F6SDpfUQhjkPZ3x2KYprbp32PLzbbTVBJMFiKfcm3JWqLrkw63nyG8Vf",
  "key18": "bv3CwbN4pPPFPM7uK5WU4umgZZ46uqbuTTYVoqgN3StLum5kR92FsTYiAE9JVdGqR5q7hrKu6JGnEGsggZzLmMe",
  "key19": "5dvQHbPZSKLW8oMqfKsvvs73p1d2NmsN4WzGJveE3X3SoFaFinbymPrm3VWgcupRYXWBFRyqKPZA9zsf6XrWpGt1",
  "key20": "yfhsV8rEBbWR2xr6fB7TqTXJPRgPqV1AgmffRoKkP3LsKTBvfWVWrjDq6bUmp6cZuNsZStBiu6iX4h1QEEciZXu",
  "key21": "37sHnKwDQGszfDiTywJ3tuH7WaECt63a5JppoL3KfzYDPgswSEDwgM1MkCmFs6BDHdbU4G8bWmyqmeEvkefMmmXF",
  "key22": "2L3Y4ELJGfBJzqiBAfcfmetCiyt1JDik3PAoPT8MvRok1vJMEYVaQBRjGhHaopHbpjZD2Hdt5PqU97SHayzhL8NQ",
  "key23": "4hvUCmkmAcs7JDdgVNSN8a4w4nBRqbNoVa13uPxNMLXKqE2H7ptpYUAB9oUZREX7FsLmo13iLqnehRqXqLfE2nCq",
  "key24": "2qsC2tu6oXkP52o5eooXyfRY2aYiNzoFpfuQqALo5hXXZo1G443bGtyLoXZ5pWnjSsquWbzKzJtr2mpJ1cqfnZau",
  "key25": "35EMFEpPRZRtQimzCmva9nAcEPLhFUEnK23SVMXZc3BXPUbBspuVTfsjHDD66MSUiaGyeWtp3VTQKiuCvFaLpR3X",
  "key26": "4uBGrF8v29cnDtqNtRaabvVvomAsuamn5RxNVCkB985oJ9n9robwiTXC14Xoipts2UqXVwWuSUuJSc9HWUFYbkPc",
  "key27": "2iPWstjru6jFR77VgiJRhrooxfT7MCNuq69DzW3R9e2X9ASLfk9D1xkFiSbVVgf5Zf4n2N4DiNnAC9DSYhM2EjL5",
  "key28": "3WMjm2qGMETvj2xREgHzfmzBZzKbSYiUEwuZVsBDGrAULQvYxaWUvRm4afQQ5D9xJ1QwPW8JmdwHwfzuqg25UEdf",
  "key29": "2nDknk7z8ivG6Y8knCQfThBp3ic8WZjErLzfg8Evhthh5PBvjqUT2medebnLXsYeTrd9XQQtFVNYiV9mCu36ixFB",
  "key30": "5J66LZctFSc3KhK8rHAd45kmrE3pwdyDikHb8Q5Gg3gJmmDW3nrGsvtdvEe62HnEpbyp23rH2RqwzhWpX9ApUNRQ",
  "key31": "5L47f7tuLq8TzpJuV6LpBvJbyY1cu7nDNtrTkN4xc76RuKzQYLTbJkwjkg4X2SQZ5YLbEkL2hEaMtspVEPU9Ayqu",
  "key32": "LrNLGC3bmacHJ6s7gKYU97S2Jo67Y1uHQH9VAr5kV8Ag9urd8W4LLZz1QPp4GSdSPYRD8X8DZrDDrk7b2Lmne5D",
  "key33": "3EzDY75wMuTmL1sgtg8vQMjLSoLPdRA5VwdxL5HxkxhaUbCGZVdjvDUAXg2pfivefL6GE6v4D5psc27oSMbSz3bt",
  "key34": "geTd3Q42WGSditZ6JEfFi3MKzNX8oS1yt1jcW4deNdwC9x1bfJYi1a8HkXe4FrYdYEfzDLyzQgbtA4WcXUs41Py",
  "key35": "5nAPSE5Eu9d1PCkAHStpaPVm5RpyQHkBzBUeY5D4VcsrBo2vTPbvxWmZBAKPFiFYs4utAT3AHEbJpZmg4mh1T4HQ",
  "key36": "5GUDf7WuGoTEvTcQaDUixrXTpLxcG6whRR3whrBQqb9f5buGVpLTnkVgTZmPvw7g1fYuLft8SyqGxWzLrUggHJWN",
  "key37": "5SmAqQ7fywNw6A8PpaZCkjGCRViHCWEmCb4RhKXi47RCzBXC5Ls9v84Ua3Cz8cb8eMH8kpts8Je3cnQGi1WpUrsn",
  "key38": "3KXFvk2cEdFHRNe5MXQseH2QwHYXBS5sSfQMBA3y12H8WoenreUmFCV3yC37FHm75y6xvHM4MbGWKgjZLywEaQi8"
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

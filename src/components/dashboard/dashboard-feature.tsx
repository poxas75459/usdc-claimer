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
    "43z4PTC9mH6qQdQyHjj1UyfLUBQd1Yr3P4AjgW2JhZwB1dFmm1dNs4cpHbUpmeNovJARFQheBGN5gr84GLWyrojM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1V2wTSxdEizrTiAj4rNMeQBzXpyEspT9XmBQg4gwUnSJpDVd8YNapA616SpQBtTTNRhjKmxABvYavHNhEWfmJEN",
  "key1": "3VfY6JtPne5YaGgtmC9Vz5uBzbfyrdYN3T5eDsbCoS95ZdLS5U1DDis6zUTfJuzkWB8EFWAkcnLPv53bxj59Fk94",
  "key2": "2qBa5ptR4TeuARr9zStnRQ2AC5n2gHyCjyKQLgcFa7kynNdnj5H6h8FE51JyvUztpvQhA12HxotYcnoNWhNqjoVF",
  "key3": "4gENej5B8ymBLWrtSDQLpk2KKNxgi7nuaget6zhUH7mwXneqyZfrAroYDAD27b5bn3Ztnf5E8xSdDnzHCZdvJeDV",
  "key4": "MGyU8Y4RUj6tRTJTBRRqYKYFqB1ewSLdFDAV9FKymJYsZqBBxc99pp4ZamUaqyyWXh2cPYyw2oUy8ZsWCPBXQZF",
  "key5": "5ZRb5X98guGMwZmUv9seih69wvoMC58re2sgBkzW6JTwwBBmDNUm1FC2RMBZqmQn7hFTpufYRrbe8DDvcx3f9eQ1",
  "key6": "5sx1eTbxeiyVRGGHPophdSuh5zriKw9t83ihgGDwK7r1xEmH6DJ2M8Y9WWgAt4izJWSJsZYhqQFaCuXTieSY57sh",
  "key7": "jfz4N7ztUzzDmvKsa8BV8Q9m6PfPkfGZTLf14cCbn4wbBYMVEAEtBpWyhxuD1npujw7KdNViBxCginm6LqSMVAK",
  "key8": "3wuVnWqBStsducm6JhEbqQQLkBs2p4oTwpgKCokkPKcUYjzwQDj7SxqdjrdNUdBLefUCsZkhy3QjrpXYXhJ9JsT4",
  "key9": "2HB4y856Ks12mpiNtbTPhDyh1XbXspuykd5711nX2qc9h4WkLtCotbjrFjKKcYrQ6BFsY6A9VVFjf3LUDuRQ496b",
  "key10": "26GGxzS8HbNSjvDF3CDyMaQJAtKNNkPN5w5mDwXneEJzhTZxta3xW99qTDexg8u15gotSMC8nCXUYWdCX3dd5Pjs",
  "key11": "2e6BTaSgaHTpvqxhhu4WoU6yt13kGE1C3c3ChRwaqK1gD98W2daVfxNBcwf6SYjkxsX23XB7L8RpSUJQFcccr2zd",
  "key12": "4oKc5cCheDMfCfUtaSq7Sd84A81H136hDutWYT5d9fMVwXqKXQ1Ss8GFazvfWGRTSCnh51PbR93dUM8aWNd7hV7t",
  "key13": "2qDSsCE1F7orecd2oNTprqXvs9v8yfu3Xm2FnjD241PDGdkmxTuPjsafhYJSz8BibBWdE8dQ7vUmtoXeAPnfHnRw",
  "key14": "4YNo7iatnpLz92scLbV1RgFbnas62aDMSfYFtrsrnCHo41DmQAFjAkA6pmLioq3bpqd96GWYURLPcymNAQyQ6fJP",
  "key15": "27qjMrKe3VQviuTWM3UfEvwKG7LCVsdqKAhTY1b7BdKHpAWWGpnuDg8oqkz1GD7NAASFmpEy9yXyLDwNpWH3dCTZ",
  "key16": "4PfzfbcYYchiw5SonxHn3LKFjCy3JtF3pg8as7N5GsH5xGovHrP7muDiCren3UXoLy33FJ2ab4jw67khK6sS8FDo",
  "key17": "yNkN2Kis9F2cJDazXQpQZmeeb4ymjbJF4a1depgXdK4degM2TuDtPmmhsDnjbDRLTKbPbvzgNZS1Lm3iLBrkg39",
  "key18": "4EExpofrxQgFHZn4hSwtJqeHb6RGPavkCfdkPLmWsV7tQW2YiyxbvX4NWvhenEqnC8x1s5LJfjHnYvS9cbL3yuqZ",
  "key19": "LVCuAbTx7R1NgLtVEp97wheYi6xkc39cEkb3NMX5pGr31A7PFBQC2wNrXcNvnPgBQfvucbyUyuqvE9XkKqtPKjQ",
  "key20": "wBrGW3BGCL3yA37kqkjdkXVSZZpfyqYdXKqrXwhBc467c93rKNbkV6mXhCDFnxh4DdPiUBwxZfhb8dVKC6b8HFm",
  "key21": "256G3ZPMv6VMU7oRRTLo4wujozhKDtKV3VyMCc83uskFSAD4Qr1HxUBLBZMP8Na6t62BT5Vteue5VKbnBZcM5fvD",
  "key22": "3TY4kX4hRkJEMg3qurs8Hif3mvF1VYFt3xfL89AxnpwEHYf2ncVqoKoFPT3v6SK8o5JqRMXjRcJzucCrMUA4WAtw",
  "key23": "61Q2kbPxtNa48CwVcmZGQZaAzKTNDHnLwsFcuZYAURzoLyMJmf6U8zspHVPXNAnXuo22J8AGoaPYsojuFpkFx59U",
  "key24": "3pgcU7E2PwpfTihj1a7uQNpLL4FZBzMEPRZdunJMgz2QZeM4B1ScovYXYXLuyucmnFAQxyZhWfX6Cb6ZPHb776Rs",
  "key25": "5sir2YGR4d8d1FDvYReud8S1i1AkMsuLZqdujpia3NapgwHCyhrZS6XF682Gh9fFss8tBEsxQQQuYbqpoeVbLsMD",
  "key26": "3TUTEVe7uxLxvtNXSZhvWdMenp3v1DpEz6RU9dmuFpxmJ56RTsYHazq8PDuhwXxijvWDKFStUu5SyLGYbc9rcRTj",
  "key27": "2uDhJDHKrwEQZDnkbhuaqCksqSTyRrdB9EEjnh1cFG1ocRMRgrTi8PvQ4LFEZgTwQaSGBPwsQvCtKbq86fUvi2Z8",
  "key28": "2LnJbkA5VNbXjDMUQzAesshiniqbcMT6VooqaykHu3SELUbkBcKZmfjsJK3y17PQ95cUGNmVx1VXjcbAon5FWtwu",
  "key29": "1JTprELJruXQAohVbaHdVkZjwFTQTFg7CgTeroZbWcStYtLkgmc6YWFvfJ4KwZx9GZzFB9NCJpSuWLs2m4ZUdjk",
  "key30": "3bxE7HJhVDpzaPqVVyfVBJFGykmyY2Tj3GsKMSSfgpxwAAQMwcNPJcFUoXNjN8WYACBgzmQZSz2HdBcQCaDuPgt7",
  "key31": "5n3crz4ew5N9xvRhwBxckG46j2DJGkABbsVoyghVEkMF2q4SMWBFKKXZVA1724VvS7CrCAMQdV2sJ3E43T8htMBi",
  "key32": "5L2yTXrev8s45payH389WQazu4SpfFXzMXEMWPCbU3mwsJ2hZjfvhohLq1pAW4SsWBUmUiiL5ebbt9jVZ8bHtpsX",
  "key33": "2Uzo382YLe1WYPv5LSZ74ZkuzWHAvVucemRDncxXTt6BkFaDTxT2BNgKhtGsUQA2Qmy4WMCz8vcPLnG2fLkVr72Z",
  "key34": "4Tm5VC9J3qwr7M1nfbQ1UWm8buWhYRLCwWH6ugCc47i2BfsqiWkGy16fNqRYygo2YFRmsLqzUdLVfCFPBRo2hzKf",
  "key35": "4pbRbAwkmaDsnoiU9x9CN4j5W5YG4GmT5qtQguXVTJFcbdXmDZ8ECygNQwZcdPyTcRdy7F13KsWxD5ftzPx7ZDPK",
  "key36": "2TbwSd9wutrQvE8KzBGxUkpEWYNRiF8R4DTefuBb9wzXwLyHrhatAFT2nL71RoXUVrD4vwCjWTmA2gWPnvfWmrjb",
  "key37": "5f8C4C4XNyGqDaZMb5cmdwbx2zrGDEZqNhmUtoshRtRfDrJutVSXGbwfkdvppMBTg76T8Y2qm5cJzfAFGgx6WNzQ",
  "key38": "cbMzXeN4cMLLuzur2d92mPgUxQy8jHjVrBzhPVamNEjQsA8dfkzkH4bxBw46CwDzumWomdcnRVeUs4938W9YX43",
  "key39": "2yM7TcA8zggHRRZ6ig4EScfHckXnLckzNbVcHYSkg64jzZq22Kx8LCGcPuFDf4WgN17zSxz76uiM2rDbf39gE7mn",
  "key40": "32kJEDrs2PH61U5s5Y4DDtmxbgzqAHMcbq5U2Pb6Ahj9PikR1P7waAcY7njpGt87dGT2ewQeohXksB5u8hcE9tRU",
  "key41": "3z1ic6C8Ma3VoJ1wA38mTByUeLSsevk4CXewhyGq7qBByDHC7AH5bznm1BVCzXkzL8fmcKWD3r2zjc5PTaCaEKaj",
  "key42": "3vSEvsrY6nFLdBRn5Jz3EvwLCKDJegNXDF9R1rHAUhLzTsqT5xKsD8wmWJH2DpMi81KvSzP69iXHXwzftSvosrXU",
  "key43": "5z4DtnTEsgZodFU9wpv4VDHvbEnxXs6325pbLQ2K2kpqQhd3bR1CAMmLVsgmY2trGTXZTEP695LYFiUzogMERoe6",
  "key44": "3D6FmNS5perp1pF7Qs7YssNB2zypRLyHnM2gmaK6V2koAzCSYygneM4NWm3sntWPa9LCEthtFYc3HxDuXC3xKmW1",
  "key45": "3Vr8V5AggthHFVufY4PX3BrX8uDWQpDrBqZhX8zB8UzLP1Bj7Ci5q1haSPHYA7NFd6arBoz5GG6sKrXcz5udcYbL",
  "key46": "62Qf2mr99wrqDbe1WdybiHjku5vGsg35VB7abTKU7pgLhVZ9pYkW3cfynvfZrTbZzDuK6PM3i35jAeAWMqC1FHzQ",
  "key47": "5BS9YjrfDGwkmGpKaKA6AuqevR3FX76BExkKriAZZYf6Hm5NyRyj3soirJrvhMdWKM5njhgS9TYL3GVXcqxzZi6f",
  "key48": "4HDAnCsJh6sja5fNncCztA9ofCM819uUxjSuSBdQw7ivBX6hRZMrb9a9Jb7n91qKHL68AKKhGUVqXJiRjoif2mky"
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

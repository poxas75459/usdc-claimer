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
    "3SpwXik3JQopw4uG92DUj8BFs3R2M39Vy6Jox8tyqnG33ChvhLvnuJG8zizmZgpcDtUJ8h4RbyKpueCTaATMmB6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QzDijNYsXeTrU4CnebopYNWMdfcrA2SgqYwoaCjgpVdzYwL4qiZju8hRmro9ugCnWktgXbyCRMJgQ4EunhZdHjs",
  "key1": "5cQGkfcxJjWDZduN7M8Jk8hEERdyPhV71LwriE2bACqTU3xnTjiM9kQCdSSGPWcJN8orjYFGLSJw8jC2vD67Y5ym",
  "key2": "3UWSDkhJ1Qwtq36BUEGndc5RVMgpkmZtNpqxh3YLucKkvAtMBuLTGGxA7JJpLTUS3mCMjRug8XNtwVyAU3SJYb2p",
  "key3": "4z6HrPLoxvARxz9bn8p4uicaNoagFxFZaDMXeEXhFvKvCFHAgAK15YCPxk5QsF9XRBo4DBnGKw7rh48sU86wtHyf",
  "key4": "5e4hH2DCyWnPzWcP6KdEG5jdWXgXXQYPuw5CFTFApP39XqdPWSHjqJowuX7nqgsKUyKZgpnVHVe25ML1evh4oY2o",
  "key5": "3wt39qhz6U4jjy7xQW6QnbSi5BMxpqGhady7ZhRaFK87vVwooNHBgDdg4TgqCH9JAzWr8tpvgMbyX417M73nsnRk",
  "key6": "4aGiWvk8TLrB5uFf9nH8R52C3UUx2vYx8bpLP43UJwVAN72aQrxi3RLYALX2nTbWdgGntiLb9pZ8Q53jnfd54GnE",
  "key7": "4Pt177CNro7CCpDWV2Uyb5Z3RkWR6cefWB7f8J1BP1RQm4ftHVxsdKd62NVZqgZtxiksdgerYsLQqE5knSgQCV6z",
  "key8": "2shcvFiGZAZRxgUUv4QBbmUUoxfS5v31YEURQxaHDWfkAYqp3fQHT12QhKH3WQDVBrt6cfS9U7WKkPHX4Qpotefx",
  "key9": "51MXgqvsu2p9WVRcXLj1n7zJYAPpSVhuQiZFjEMvz28fUsghRgqA2eAsZdYG6BfxdgeNspHCChfdytZLwE7sn3Yy",
  "key10": "51V6zGgLeJmVGqePLhTbCrwmmGxiwQ3nndKELUjU6kJnKBVsQjeJvqveGS9e7H3efeuQx44qfN2aAesh3MfVsr96",
  "key11": "5PqxjppWPfQLZ6vFVGaskd3GYKidJvw2LJrM642Q7bth7zKuSV9spf4M5G2LupksEjrDBXCyMcibZ1cjuPcCPbYm",
  "key12": "62b6meXNdMFvPNpYojwRN4Q3PZ4jWvuKDfvHF4REscKqqScXqMbjPG2ibE89QcPkpKJtymihdpX4Sm3XHNyQnMYU",
  "key13": "ppgyUMETjsm6A9N6UJsV1JkDK5KEgovaUr36Tn7EgYMUaX3WS51j4zKZzQHwgkq3woyWsuA83WFKZsDM8ciihaY",
  "key14": "5bEqKqxCsvN1WdGLK61MmrMtAYGBPaWxddx3HMp6CbbiSQxwdfXcrizCfUVacnEsWpFwQS9xeDZ5Vb4RnsSh3Zuk",
  "key15": "oMgKJ4yRXMtw3VmcK5P9Qc2PfgdWLYVpmTU5MEgaDxi4wiBz6h8GJw6dENPticaKMUYu8XnDg87hZy7UE9AzTB7",
  "key16": "6DzMTHgfqsxrdYeUaqqSAXu78qE7LEtqnDZt5ef5NV6uyocMqX3p3jVWCve8YYZRnKadwRLQRQ3wX8JngDeG7pg",
  "key17": "3poCLu87194H95ntxbxDHTMN7FfHvArzKLjfhh5gsaFo6n48QLcFVb6euiX8SELJxY3SGd84QoFLPRVwtVTw1Ddg",
  "key18": "45k9qN1muztuuaY3yRd6MpM7Wkvpysgvs6bQyK2qxE6CWkxi5winr17AQYR4QPtRYTE9oB6qudx2H6MjNz1gaUBU",
  "key19": "2fz2N9EFLV5Ax3do1CYQCCo1rn62tf5ZDw44Kki6LEC1NESiGwanM4E3ruaEc9TyyppMPVL9icu3CaVvCYBWL8Dm",
  "key20": "4fe5MpLWUGZ7P42Qvf4fUr6MXfYfJkUAvShCqrQXyW6WSbTwKvV7csEKEu1BZjjXQyM7zSSUCHryKauixSvUPGmj",
  "key21": "64DrfBoV4vHgwhcmDS2e571mPdMkczy852fEiToi4pBXBRRAgxHxJrYmDS4xqFmr6aARoHVRkyq7ZD6pgHAN6xzx",
  "key22": "4SxHCrj7bw2t6eLuzy11Njzdd4194Gp5z7DgNLqoHFb6M1iikDeDMgizMEZnrJqdaGVUohcSNbnAiw6spRiRsk2K",
  "key23": "oSKCMmhTmuo8hZ81nyza6rnQ5KWT8dtHCv3UFPYYeeXvhH441J7Mr64uDQkHwt8xshdyCSsocDAJCaT4jqePSch",
  "key24": "5Zs7Fjx4FcTqFkiMNgRkJyHV1prfDF2M3FuxLGNStpC4rRRzT1vNBQQXniurczEL8QXEmHjpjoVRgaGqzmfVxhdn",
  "key25": "2HSgyQYFHBsmYhPYC4mMzxznSsuCu8ind8rafgUw1m4hV4Z6Eo8MwTCFaJp1weNNHWnemHk98EQxjcVsC6WP2Yu4",
  "key26": "5C5w4yRE4PzHULqGDzjiCNeTgJAZqfBwdri8iV799ZC1DXu9U2N5GRZQUYnSbwoNs59SkPAgeaxw7EHwMvRg8nzS",
  "key27": "YogpAYyQoAXgeGVqhCCKF52NP2B6ccU3WxStcntuEx9icbjMRErZQwbBhd3Rb24BKL4jzFNrDfRhcavKjM7Z8AG",
  "key28": "4KCr58YAFTFE3NckGXeyAUv8sYHQjbWUYX7PGvCy4GUMUEffeMxCHXC7CK8XeZoG8ctCBaLwJmGmaSTi5ZgDvDwb",
  "key29": "3BmLjZeBLS6gtEiYtneYSo8gFNs1WFwx1vwWPHgCoPykBrtuF1bjGUxMD3dEfmXZprDerfrhRTMv9sRV6n7brNN3",
  "key30": "3s58aBtXFdNUmuqu6GFvurLDaDp5U3SVoKye2tnvBVmsHX2ZJoZ4VgUuamaQ82tqaVSieFzmMfhK5t9xmHfXvSiG",
  "key31": "4ZvXus4DtoUGpFE2k1bGtZhzwv3aRjMtxz2hBELseHNJydVm5GXkMj63vk2f6mCfgRx1vFByXpiiEZUXXEFgQuEc",
  "key32": "oQbsf1sFvf1eePmQJH5QXq5aV1jmUKuiD76HiMKq2DHoeaLqDgGZ9vXY6bwJxTqNHs584b5bJ9hVX39dZiGbwjC",
  "key33": "2TAeSXr5QCwFUTvMTZV85fSXHU3cQgp8F2WVidqVBsHYPhmNs6vaeDPJF9wfkaSPTnTRe5TCggDnaFp8p1JUHgME",
  "key34": "21huDSLGLVidiqdR16jroEExiXnGU9DRh3owkGuvrGX7wrNGcgSWxN2VCpC9kzqwYBHJo9L2bbax4RJLEwrd8m1k",
  "key35": "22mYpi2FuizEcSx6ypMSBz3CPmWZmbgAHzznKBD1z2HqAB23vMzFkicmVDXFUeBK3YSU5Aw51t6nUofyssM61Qyd",
  "key36": "2vGUB4aD8TtyFBWnFP6aADWmwmVj7iymLANqCZXA8QAc5AbHVnwGwL87Nj81dQo2jTHerqsBf2z46XA7nzrRrCzZ",
  "key37": "4EDfSnTeh5Wa6CmpMM15o9471xPoYJDeuawkaVEMh5kjbC1bAa6F2foZSFDNEj6P9ezWZoBQdeFNuYnioyW7qviB",
  "key38": "3TM3pHy5yWBrKGuxFE2ZHEy1FqeJUzmetK6vUsD6QjWqbVopHw3QPXvkNdtgFPNtZAEh7m8PKyxQLWxy6zASdwuj"
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

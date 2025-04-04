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
    "2SNTtn9Ln6sd3n6HsoGtFz6LKkCyx9nzhJmmkGNKt9trfJheTNZMfShcquD6DVVMwAMGxrphPRMo4QFJc6ZfHcV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pDBCJkqn7edWeyq2hMjUPMhhCZwbAMANUN4xrSBirPUisp6WUaqYSUaaNMWemEUCeaqsZguEChJ6t9DuPc2VsRj",
  "key1": "58W3Jyvg4hH9zCrHySaBq7mDNxjkp897t67BX5p4JX8MprbUxF6ZvuTdtH3zENMbsuVVstYGsiN6y8zjzEtiXRjA",
  "key2": "sE3MwBWmib6oeMqqmCA7NPAqUMK96YD94fjMz1sEn9wfH7JVzerpZ4pGeD8rR671pbRrhvwyzb2ja5UpGVGadZB",
  "key3": "3zHwjhoBR7fqPCUTyKn8nUeScD6dQPfoxC9rRtiQEBot6e1FdwFJHbgzQdfKvQ7cREnQ2kXJbUvpFXgz7xGq7F2C",
  "key4": "3TyyAZmQc2efSzf3WbTtunu3qTvdGP1xrf2JJt59ETMMhgqRqynT4EK8DkLpTKm5A94NadybgVQrLqH7KMDZjmrw",
  "key5": "49FKkKfAnPpnxUnN9APfjQe3wKqKY3duvrNVSEQcm9RepxQUymVAkXqDSKHNxwpWRNb5dgWLwXx5D6rLabVPbjTf",
  "key6": "4yti24KMfo97KVNxkTyc4ZBnJmZJLVouYk29Tn1rpSTpqFWr1rj6Q6SGvP31xtBAyCyE1cBQhQEhj7coDaY1pmFG",
  "key7": "2DbQJhZruR9uVJXeM2sG4rfBp3ckPpBJTRxq7wkrMRUXetpdXGHnKBxByvFTaCmyx1ukTJ6mWb7d4ZVVfaEhJNa4",
  "key8": "2Lxu1skaQtvHD1M88VDKYhtHu84HAsBAvfKArinG9DWsmEJRzroLRwFmmKXWfFN7g8Tpw2tyDmf77i1ydjUqz2N1",
  "key9": "2vX46DPd5krG2D2fFV59Wysz1QVfytZzcsfidRMcwX3yg4DN5y8DVMSDfKe1sA9U6Pa3GtNBj9kBzPHUjzJ43FEw",
  "key10": "5vNYz6SDpRqrSLSdfcb3kfXG9x43e5nySqeCun1VtWSagELus8gnPGrKGzurTbGZBJvsEPe2xuntwJZiivZiTUbr",
  "key11": "4cX73dWv8nREo74UVJBbRbMUuM85MmakbsWM2DZ72ErWcM49a2m6UjY27VpgdefkbPYKHzu9kN8mVSQbo6qUHXPH",
  "key12": "2Bb4tdHjnNzegdGm51gZ6X4GxcAjAwhm5YSxHKGcydhrdzSZfjzy2usA5bxZFPAboCoxPYvj14tZz18VD6bbEY7S",
  "key13": "VK1eWpbmagqD3b8gDjJPCuuCp9Sq1ycUEUrkGoyFbYWDNcPJomJ6DaGio4g3cPEAyoZ6FiiyftJPU9NKuDFsSB6",
  "key14": "3NPmDdg5TtTrDmrLyfzK11E5GhB7ypGBE9dMLYXMS35Z6qqiuJ79m7oHegJoBS8LZbRbnEiaB6aHx1oBZbiUvz6r",
  "key15": "3apRspAzkwiqUc4jmFUgSew4FZuuDigAGTjda99WjGftufKMqDENEpLYhxnP3cvFWX2bckBtZ7kxjje4STDLyY1r",
  "key16": "28KdQfQyAgDBXTEpkCBRMEy94CLijpqE73Qn4y14aWiziZVG5BDeR4FXnd3g5vjgVvx9dqJk1F8FZgexL2txav1X",
  "key17": "3GtATj5VfaxVQGaV2e42AbD3Ahhwa2i5YfAxSodB8S11yscMne6H19vrU1t1ij9Up8u8338uK2xaYZHhp7x1DjSK",
  "key18": "2LNo35P2Mh4ndsu5SxhBcHFZEmBjTFxLBQzrCWWHDLzub5X5nteDushaSTsqXdbhLwbwuQDGbCvVo7oHFJ6KBEs1",
  "key19": "2zJCEYAGmh5CtgeZ4XHJSBnYqitzvi5K1xXGG7T2bk8m7squ4qe5KMKaB3BvxZUoFX5E4LjnMyJMXDnTtfPEiLfe",
  "key20": "2RAQd51DWvwyjRFUqxZvhcBn8v2U7s9HWMtUGcitifj56MzsmQnroyMVrYZC8Db2APqp7pE9vn3E9s4JYcpxYzKL",
  "key21": "4nuJStPLGaKqt7fo8ZAuGgjTbLjH5TcarJPJ17boP35rNuocK4GhwBHa33vrYbU4uKJswKXoxNbSbELhG6yoLsL2",
  "key22": "4CReCNtqxj5ZQHwgLXrh8EzsqL3wZNzkd4v3wgCmBZmDtrzN3qq7wvuFUNqDkdpDjhaP8obf6h5fBRsHiKmhqJDv",
  "key23": "5pat9hbV16ztFH9QdQup7BqRL9kzSTmpHamdTMJ5TqH47TsdVrf1bjdAF5vXSL3HpWn1AteRUmwXZkUVmRhMsWiw",
  "key24": "2BqxPVoVxWiqUkAaWiBMYz66birYRjJTk5EX87pQCT8sKSiUrQD8eacYgYBP8SqqfUkZSJL6NApzDg3btfhWWbmp",
  "key25": "TBAu9vqXCfAEWzKVc7kR1EBekTcgtpSZXGXmYmZDayHwpiTLD8MxrxEos6RjecB9N8zbxA5oSiRFwthfMknQ1wP",
  "key26": "yN98TLb3nNBVvJzNh6cEMeHsctXRm5QhprY8WfBG4CDyqZ7vWwwFcc9vcgXZw24LHMiVPwKc7Wvfhxr7FE5JUdQ",
  "key27": "2MbFe177QSnaFAaGouErQPHXJFfpFfxi6PuzckXCdc3J28sPowxKqdKnz5FtNp8MDxcR8q6ZphmXCqz34c92D475",
  "key28": "2jzoxgbnPD2gUzaBY6woEsT4SWCaUFgx7HkE2rBdCUvJP53M2bD6qXaNnJRbe3RdeRCVdGpxmQYHEnQnLL6AETAr",
  "key29": "3NKTyG52DeJGCan4nEbCEGUsFpsB947ofHgpsuTZkQb6B6ZxKbeCBsKLcm5Xb3LK32buN7VyVsNexPoioa7REoZQ",
  "key30": "5yofmdMyqLxzAcDuc8aky5d4U7xN4hCCCHzmfFPKDsK3MZAo4PNC5SiSPgnzxgkgBDzvHPEKrKne32FTvVTXJcse",
  "key31": "poULbgQX87wugMws2geJ2zte9KcB3dFyoihcefwvwQ3jwZMFnSUNhKV5M25LVAknr5Y1odaLmboLxQdRjPFwefp",
  "key32": "4gDVT168zzyBUVhiQfEb5Gd8FBzu5ZcB5TkfXm2AAydpR2XszK92PzaPW2f3xjFyJXWnGdmovfBpAatoMaRhNQda",
  "key33": "5epCJ4sscLUqDteDxCUeW9muneqFq18Cz2JLgcdFHRGRYBAn8vCsvYuavMgkyjZLpCGhDAace6VWyVi6NfLb9aPX",
  "key34": "2Fc1pJoiKmepPAtVDAdUsvkiGsWfGGNbz8FwFKYMdFmZpwCmJXNK8WtcuYzBXUcwpUty9RoKroMAzW7D2UrhF5iv",
  "key35": "4px6vZE3V5SQySEiHyDeRddz72xsjPqp9ZszLKhyCTAbf72TUsPNZtmAvaowqBw2dEC18WevCVSPLJ8fifaFn6FJ",
  "key36": "RMErCrZUaVrMSvDn3CrVtyc7uQAqJGZti95AUHTPd98X2AzbMMSc93Dn6qgDxxKP5sjGJLgvbvQL7UyMFyCSykx",
  "key37": "5H9RsqyZ1Nf3K3ozRzPiH9ZRzFqSEqu2CKwA4JemfB2jvJzXe4aqewgThgzfc1pkC4YQJzQkjUxcp1T8UU6ZvyMu",
  "key38": "278tqDPkoKzo1Jc7Ldt4ocstW6noXAZA3Bvx2aJdnqnsnEVmQfUUBQkF5NPHJPkS4HboGExfxWU48ByBrh9DPt7k",
  "key39": "2rsSyuy9ycWWF1es2sZewxMTq2BQ9APeYn4jJmiAWqaWiWiQFNmczg8oSeGfwGYfkru9PZcmofTpAi7sSjEpX8ix",
  "key40": "5zDbsoLZMUWqQajfe3GXS1rPH6i4J1Chdxdmh4tbgADREY9HpjD7wP1gnjDjfNNDN97vYWNNvvGd3ZDYbbencFLA",
  "key41": "3XziXKQBJ4TdBzYEwCnDThWSUoj5ktMiA5aHcNJvqSkqWcE1tQuGrVMRTj6T85JqFgY591zJvVU72kYnNCPLkWtg"
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

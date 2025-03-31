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
    "37MEQSCkAJPKx9tghMMxb8ugEuAXFPL4JMQJigKkLon9xC31ok5Nas66fMHiM6Mhok9c7fkd5i5rfAsb4H79ggE5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RMBT85MGF6i3d3UhY1TwkfNamDHtXan8A1uuqQT3C7smFvdz2pxxKtuVUcejKatuiRcAkLE5viLdt2KPzT1urCz",
  "key1": "64zzqR1odpHZqAY9pafBPunjuTmLgDKT5PY1ckVaq2yqfeqR14g7LbSLaohke74UbbL64ySUUX3QovAAsGj3woLY",
  "key2": "28HVnemGHadX4mZjdsuxk5CFmguiWJESNY1tbwwS23mDRmSKxU8V1mPmNkVfCnyqcte4Li6WDxbThuVtSuspz19P",
  "key3": "442F67SwD6pVTxBDD1zNXnqFZcxS8oKq5xPq8KDgZ1xMVn4ZxUKs8qhRPGDxHRmcxAXfBPtAqhpy9xeGYdgckcwq",
  "key4": "2XxGHqcHtT4jWvLD2HfFdSnUdvdpjR7WnRFhckmsmPpH32zTQRs9xnwPjRJu53NmdzFTScZwgXQ1SZCG7qXKHz1M",
  "key5": "58Z834isTa71D7xY4bLnvh9fR7LfTbw7o41JFeMmXCEnZ3PiU1f3jKBbwhvBqoYjGfF3ezdRWLnQQMZZLuxD8V1Z",
  "key6": "4kLdeLoaMoogX2a61RXv342ZzPLbGN2VNAj8Z1zvKUbqwgaR1eyMBPMRQfwv7h4NYPuUU6ULNYzxnrMeGpu521gW",
  "key7": "4txMupaK2hBhw1yLAKqpm9zW282BzeTNqEpeeM2QUYr96WPcgYiKWPX8L1WZ3CUjcwRERXjv2jGmRZ8vTCTpnVQC",
  "key8": "5oWXgsaRJAzPUJGthZuUbSVkKpkQDEviR1D1SHDRhWr5nv4GWESn5Qtj1zf8GW8WT7Dr2aeFAAxgwTMrLScKSxTd",
  "key9": "5eyaMCLvuDFm7hEeJ178SbVbN7qLUtUAPrRHiqPF7PzySeRmvq2dnkthad78eykYEsrbTCSBmQouXtGWvMU7R8x7",
  "key10": "3cr9cGnRYJYUjE6GZ7ciATEcN1Qwk4DQcpZChFfLs7KGagpjzuzdKdJ9uRun8w59ZK7PyE3iCyEgGpuSkg6KLy3U",
  "key11": "5bcwGyUtDRCA8W1j97uGCuQpezbyS2Txny3SWcNU1d7mi1cehSfSPaByqBeW75SAj4PZ5xxWfPxNCyunL7JrGTzQ",
  "key12": "2YRwVQfWpEahCMadb992uS2qrmUkTFGyACV6eC91iNuxNtgjMG148TLoD21qekLaxYArypcSSgg1zZgD91JvEgj3",
  "key13": "2CDNiTmvWEHcMhoX5czGD7E5VFrUwDANFYRBCq7xNaKoWYkQymvtH4yrWGfy1STVAGqjVrgjNWX8QBe9QPY21BiP",
  "key14": "4ypcc73XJgAtAcR1uCfrj3h1BLieHmcoTnrQry7WsYGdcL9bNZyGiT6BPBWu8kksprqLXzadkbxhVDUMSmdSjEt5",
  "key15": "iSmc1YLtsyMgHDpkWUSxKz5c3u1jsYVpAnnfMgRDnGVZn24SsrncfzxPZvt6zfZ63kHu47LZQDbjUg4T6f7uUX3",
  "key16": "24mXf6MNAM9YUc8Q6NYuXbBVirxKxznTvwYaZCnJYk4KBXcvXcBhgHSMgMmR41QVEz7Cm5Uctn7P92t2SnKYCudo",
  "key17": "5mDuG3FLAnpftxwse7a3qtytpYfvyD2aVm5BnFTUedUwPxSJByyqRktNeG5HyDT5Fp7bfB4HchMVzM4ULaS7KjmV",
  "key18": "WS2o2XycL7JQqc92zbb9xKSMG26gy9giVr8csq7oiTQW6iHRYr5rrdnKXLhp1nYEcqiZF1jBiHaaxjiEQGHQ3Ju",
  "key19": "y6WbAAb9i7yC4BDhgShkZwA1raLu8FsUTry7AaQNqbpLN5MXagt61LawiskCyV2wpjqWdZGbR1vqunsAF2VKkcK",
  "key20": "4GBGnDVQMAC33Gbny3Qdz1WvP86qQj9cSU2fEawcMGGTQZ2RuMch9hfqzAWWaWhiKa3wEnxi8Ef3hGLBubVo8YQs",
  "key21": "61V2UvAdygPCkvVbLN5tcevcdXQe3rhGgfpwFcusfC2KwaD7HXMj7vhrsCCSHsMafsv5o57VGK5BcC7Eh32oteKK",
  "key22": "4RTagm3wQQhyiFZfsJnainf9GPKQSMBpka941xjMnGKUQcVbkjik2x3mijobJWPcsxL55aBBmWdivoEoDCb2478u",
  "key23": "3AerNnLsmxpcDuTUuYGDSrGimWiCB1CP6b7xgqjWHL9aMr1tCBD8s2wJUaGsyugMrEmwkykiTrFZRisnNjMuXyLt",
  "key24": "VH8fsDt2x15cQAQWoTu1X8ysxsnZieb6D5FxJiEXKuKgBxWdjvtdxsk8AT7g5KxheXfFWNu5tLDsXdxF1fkAUPY",
  "key25": "2GGX62ihMBF3B61zDS6B3Wf48omBKBT3zwo9mgG6A4HNFxziJ9ZXwcwxZ1fjywBqKr8dsjhFrunrmrBuvZnKtnCX",
  "key26": "2oAfSxxywMDXMbTaeXsczDCrTT5Fdfm29ZkC43BxKB4z2FJhuTH44YmTNpb47R6bCp8UrPpgv45qAt3GQRnPwtBk",
  "key27": "4SJgciVSrVuwSkLjZYhmnGsd7DRiBU3F3H5CKY4M1trswFcpscTysuADo3CHCr8agPfpNdsiQXTs6P7eLKW6UPEL",
  "key28": "2T5wFEL7Wt9kEhFdYE2trb6wo1Pp5VgiazcarJ8Sk7M4jdJwpG8QJFTPGycLj9ZFSuVoLyaVk9vEHFcHKYpgGi35",
  "key29": "45JsEkpQrcnAPEkYGovHD8ebiCEHQZ62EG9tWB5uaLYpF7hNkazuBhT3N89J5HCRnBrgppRkopKJ5K1273dM5NAa",
  "key30": "4EyPMRBAqLDfi5AVdHUhwaDXosnE6ioMD7gFxiRSw5RYTC6ZbHGe5CUvQAffx3osiDrrFiVzFxMdQiYsXTXGurwJ",
  "key31": "5Ck92ApCBV5vv8pDbx8tPtiXb3Fm3fUiCyZPcH8PZDSztR1Rct7GeLCZDw9QcLteiCRDngbLkHX3pF4hkDjHv3fv",
  "key32": "4Zc7aKvVtiYwm1jkLiPVSq3RFHMygQukRAa4VxSQrzcr3DUB4wQW7FBuTomjoKabWQFWNuZ2axjchBjbChgxr5AH",
  "key33": "5HacWvJcf2zpUndQLfrNg4aQjkAdvdKPqFamG6RqRP58siZcmkLCb8g8AFZFeuBR3Xwmz6sNYaEJdydjmAvSq87g",
  "key34": "62Shg7TVcEt3ZBc7BZ5GjA6zA6aEYGVhjFcYK3W28VHtcTsq2Q6TwcBxWQoShkiYc5aFM132CYm1i4PfWbph6Q6p",
  "key35": "E1aFzgMYSRCXasdewd63hfLsdXSPnn3rioQJWLXWkKwvy1sFxZ27EqMti56GNUJCBJz1fuBg2pX4yjyuPKBue95",
  "key36": "2Rt2E7R1aFwBvXnRwELfMo6fRTMTZzn7qF1BUabjCwZbzoAjVqp8v1Jk3s2pC6bC45QmVRFyryzDYs7KDcLqgUM7",
  "key37": "3JEozrK8YocAGnxjbuLXRYmgLBDC94A16BTaHYKRTdU6UVCzHC5MiopHCU6rB9sUWdQkenu2iU9WGbrFWU3ATvHN"
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

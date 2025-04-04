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
    "5gJVc3wksynaNFpMoCTgm9Qw5Wasm8jsV6XkhUQEF94dcXiYAQzEf6UsyYUFvXhccPZEuhgwHhmai2xsazG5wEWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AG7dkGg4xioDSSx2nb87dgVbmVhvKbNcTMgockhpzz8AAUGeaDsBHJNUFruxjL1Pf35iN2wR1CJA9PdrBUidRUM",
  "key1": "5aAVRGMBMzp2vDy7eSJ8GuJwZhZophFvNVBhiLtxQzMuwYWxYBREW4p1BWQ5sh8ezbp6nQNvASmyxffSHAwcWhaz",
  "key2": "5idbJdK3uhNUVvY7jue4jGZSGtJtHCxZkYaShGoLnT5mqBNtKn79doxgQjnaJp25RMXtmifjmCRi4fVFAjTaRZFE",
  "key3": "2njNJBZQjMzqVZ9tTSDdiZjaXvGL8KYTikSDyPVPR7CtYAPCrQRatKZmfjYqBxvt3V9A8JYgqyN8JFaeVtMSNiXw",
  "key4": "73r1tH7izzwD662hA3HAfShG7ECvuGQnY3FaCzxoiokDXrdRaLiAjmpTYZNNHUdYx9YHuvPVopfemYDT4TFnvCn",
  "key5": "qUhKznyc1QPGJJoz4UfRujTbhfgwboU2rGdjvKLooxpgpCgA5LaDp8LVeTA3VdZWEFLGKCEb2q34L3sF1kkvDUD",
  "key6": "33WTqfsw2EzUE7QjowjapcCGBF8oDcfywu6htd6oheAs2JHKtMQcGWzXBeuTqvxzHp9YeirU2WXt6N5ma4kjbFzA",
  "key7": "5h7UHqfRBmLqjy42kAY5s8TS6W6oVGVYL43mJ8FdNMVsN5jBbYk8kk5xmWeMwn6LU2ncm7cSMKRR3q7BjAZC6Ey7",
  "key8": "3Wck1VNPxZUU7VuQa2zUXpKDdapTGN2i36tXUiJvacveeRdBydetMgKiS4XJ7AgYMNb6BCSeHxVG3wAyUCCUJM6o",
  "key9": "yG75EAASrE5asVfTFCQp5Y5kEwP1iHD5prTQU9rnnn9WNrPDsH6aHAmnzgRcgUUTdtJyzYe7nmkMFth6cykwzbh",
  "key10": "5SQSKsRjUD8oqXWXzH78rmBnL7vyymny5x7jEZ5gfjRNbd4YUEz7ZktYykMVtGPM8igkGvmjY9jq2hsrFMCN6KFn",
  "key11": "4kLiYnJxghUPLAicEMinjhyPChBuPshUKR1coChjzTmMdtM3yy4fcNZ4TpNC4KxwiWue8BadWpqtnSWF6rDBHtH4",
  "key12": "SNJNgoiJHNzuYKcbHMcHbT3G4odDsPrgoLhnErZYdeg6G7uFmt7M1FvU63eJnyMfzndPYq9KaaYaTvfSmdzqy2c",
  "key13": "5WT2b7VvLSh7QQN3MCCSTohkDVtutqtxrSTX6tPsntEuBwRdSqpX4bCNkDUjZC9ordQgXq6wdxbjfLqqLRuipMHW",
  "key14": "aqnC2w2uEp9P5DbqBsCnUuptAV3EkBoer2Vzxs7oZNiZwq2iXfhpTmM1ZB6ynw5sRqoRzFoz2wQar3reQMcBoKh",
  "key15": "abYeoAyiezLFB5PNkT3L5TrJxyTtRsGva6UGngt4tBMiZTdRFy6ZF32wRtLRg6QVb4Hu1oFtPJo9KjM7yW7nbN9",
  "key16": "5kyPVcHutoLXNLASmNdXKwor4fDwbmzYhdZcTX793Dw51aLDxg35zvHKGXkLZXcYDaJirnswbv6sPk9iDLm8ht3c",
  "key17": "5vngL2x3Y6G8Kof7swKRmo43FNT6dbgFKqejEKi8cecLyGVhfgcG3AY27PpT56EdN6vFqqgAt3HjaXkbJWPxBRGt",
  "key18": "2k33dfEREaNgAwLezPUTzcX7yPfpY622Umywjv5a5krTKn28RrCaPKa4dP9rSAFyBnS8vBny1twqK2XsjTB2SLGd",
  "key19": "2HG1Nxs81VpmZDeTscbWbgx1FF6HvghPk6rdmbw7ujdeee5LgbxSEbV1tkc7eWjXsL3K34rYSCT4KibK1gzVcLzc",
  "key20": "44MyK8KHh3YZQhqCfChysWrrK5Tfz9ZFjV4nZiaPDdoeKAVy9FJcr9nU9V5jqRW15YFGAz2KNwZRJqKCBZE6Mmzq",
  "key21": "2VZFJ3nfYtS9cWppeS9LPKusur9NfmWJ2587dym4v71CGCpN6vvLMpYzJxpuoXGCvtMAwV1oGzfdtdpGa2EH2gE3",
  "key22": "5UNeut6DkB5dopwgvGJdkxSoVLKXfofpBC4FNx4Pi4ajoYP5WMKhLLKZcbhc8QaHNL7vkLx8P6aLY1whdzGkXjfP",
  "key23": "3NaedicyMUKDhpK7PK2i8ykN73YY6dUXdqc4fE3qdcTNHnXe4hvKJEG645tKxc5Mf8aPmG43EqACXkMJhFkt4b4S",
  "key24": "4vSQ1K6d8VXMX5igGABx8NyMGZXcam2qnYgqryj1LgP72ERerFj86zN6NgyUxWrw82BuVtCFE4yzhnmwdCk4pW26",
  "key25": "PJpiCgVHhSEUwJbYyKK9eyFnL7wheEz7XCTXrZKkWsLRBsPjwjxYyBDvF6X17B8EeBztjsWsuHocgrEknTr1MZL",
  "key26": "mdm7ejQSu8kFCUv9NLyDQEKKaKinCRrALy1vrus8YjL9bWbruAvdn7suBQP8ZQfJ89fngYQHtAJ8jvf6qhnWNwq",
  "key27": "4gwJwFggMQ55J9xwjUiX6oisvVTRb64SvrR9hwGAxYtLUSK6n54skVTTVBkJEFMmW2ZcXvKokKfKGR4hmh1cYobb",
  "key28": "siXzP3DbmwdxyBFcK5gvMgwttGgbkWMMkxQmk6AWk8gSRJtxL4eBAzCy4e72VHKdWM1E8eXbaqeChAnoobaXbpv",
  "key29": "429sgaf3aQH3kitP8WPWvEghaUfw4Gu4WJ8Nhi4oCCWCkfz9MGmd4ybAoFQm2vFGAMgSdaKWwKQKcfR3r2enayyu",
  "key30": "5M4TTyp3QjsJd7PyJF65g3yUPtrQnrwhPD4K4zRb5yAtW3sZctyPenr47f19v2MDDHriQoZZfbx5EyEpEQZUJWna",
  "key31": "4b913VvnukFGu8XvKjqVGg7hJrKWaDNwbRcr6JXM1y4F6dK1rAx8awCsu5LCUHxUNg4gAgnpTSBGjmPL1KZLxoNn",
  "key32": "4poyyBJMgbELg4VhKi93mLQTaiAdBGvNcQKgbvCnGFxfCdVrWrmKFBtBLRRZirpggY9nntSk5SvNAkB2ZBKt5CfZ",
  "key33": "ReS2mYUnrGs8Xq7p8pShGL5XxsQXpv4NrBtXpWD122Sfy9AXaSFMt2icMPEcNZnNSJhCq998aykdeJ2U47v1AG5",
  "key34": "2hQZDZSbUfE1NLMuR3t1LXWKDXpJAEchNqf2Vckj9CzeayGdMZsG5w8zceUHZWtPxypyxDHkydtcyG6iF76jzbeh",
  "key35": "YDa6jr7k1Ssmbh6tiNGg9iWhjKS2GZpKcCQYLDhoibF2pPyoisqruo4pwBjasaPUTjL696ck6kggw2uJGTzVUyg",
  "key36": "65jrfLLCcQNuJFBB1GS276dPTDBxMtZHw2oeuzqT1jXyFUUe2MxJ6yDg3sNuGk56jDiTiGVvCL8XosbENY94QL8s",
  "key37": "2QN9K3mNTmVpdBtzaoVxWbPzVjXTpibuhMTZ6oDaKf1C1cdmnR7xzvvJszYQhe9hFyJsqjJomYiCefqr2JY3h6qL",
  "key38": "5hGceycpbdsv51DwsS7eTgphEp1jq6tpGUjnJrnvy2V6HZmuUWPzyGi2JqZxws6vR4P7ecmFnAJcAJypkS6DxYvU",
  "key39": "3p7Pm5b5Vzs5UiSQAj2dgs3cfaPuhEyh7sea34Mvy1mHfmCQ73nsBn42L5oaRjrtAjQzwkA48AHS3dRZL7cPAWRv",
  "key40": "YVzSCCLogqoNV3NqgqLLquc5phYWmjL1MDxDdovh8PJB67gqdBXD3uuroisCd2YGoBSyRDrdMfP6qiQMQUZPYkd",
  "key41": "aqVsms7oWaJRFKYS2MGWUEJqHfbSXtsUe9BA9p6EvjsFxJ9dz5u7uwKoFH97vg7Vuf6Z2PRHnVokReE6Bohu7C1",
  "key42": "52sso6R2C1DxrZDwhAuELub8FvwYorvCFQDVsmwHJh34MFRdwk9dkh1tGS3MiZwaf5hmRiykSwFQwVwTpdKXHQv8",
  "key43": "253iB51f8jQqFG5V6UnFRgx6oeSwkw32LxEfKXaBCh5diGcUYwpt1vWcjTSpWTqAou3pS7rfPrRsFvqeuDdjCD8P",
  "key44": "4aH1jBLDZJ92XzMqU4HCo7EvytAnevqkAXL1BMee6c9C4dFEsUj8onAdwshaLA2t8dRXz3FQrEFG7HwUx77Q1mni",
  "key45": "33JzFjGSYSqkVSFQY1L88285bXAhGVL3NS2PcYthRt75hYyoXUSWaioSRfenZviBkZiFKt2p7vPnNhexoDtRM2aM"
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

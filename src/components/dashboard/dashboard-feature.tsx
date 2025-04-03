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
    "2UyGrw4c4L1AabrAr16AL8dgiV6YjSQ4m5zL2zKM5Y7QtzhDPD3H49ZMRs376Hr7UT4ADDDe2aa655C4XdncV57Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wAJMsPnNauMyMpfxPgR2Enve2ciPSRCUBgBQ1aiYirzUiSKv5Zv6kpyBUZP6myqUbQfzQbMNQNA9Fdj9P8AtKDW",
  "key1": "2irKVbcwxUhryaHMwpKxSEM62pAsEntbNFeEJ9CpsfPmu1JjJxZwJu99KBDAcEG23TPGe48V3tSY8Vnsh2aAXqVC",
  "key2": "3qLaBwn8eY4RAc9623ZvUb5pMAdZQ6UvFb5a9Ffyna3F8gUtT64muib8u85Wx4XY6jeAWfih92jP7bGfWmWrXnSw",
  "key3": "Z5Wjx5FPPGx744wxmfaCcCJjh64szgeWctiigFbgPUMLYXPTjQKNzD2hHDHagyXPZQGBd7tRYLY5vtFsDioBKxi",
  "key4": "5n2fTzTQtk5yZpa6vLRusYj8iMsmZ2ui4U7AirC9LSjs3xvVfZgXRxv6ytG1hJZ6uFYF5vHfF3Sw9rBCn7Y2HSdt",
  "key5": "ppAdeRUKSkm99DoeM7FSEFKBhfmqWotzMKJ6TRG2QTy4DAQMG5Kjrtmu2nonSp1gSXxKjDcSrEFdtncf1M5Zb15",
  "key6": "3c2dGNAwjkiEoUxDxJ5BpuwZUoYBbWgnq6veVwCFqrjAhgJvZrp96gZgA5KSp1isQWGCJeRZ6fD4SsCotK7G4yFn",
  "key7": "4c6KS66n1tgV6iv7HrWMrFSVSfdMps8W8T4YrtnPUpSPh8vHoqbGwbeCshoMmpt89sUigjLVwPzqU3JyqPrZKD3v",
  "key8": "4F1x3uJPwJ6Ri39SwTc5oCkYxQBw15CEPTTYcp2L4cg3PzyzL7DV3pw14ecFkTcsSZUFqAkasSfVdFS8eajEqJpC",
  "key9": "5p1mZjFJsc2YKGJqQAMMFcakXhjfg2R2TYb9ZAV3EmHtPa41fjqXkGqEmrjfue3SZQa39NoTFUU6RrWgzQWQjBtJ",
  "key10": "5GehXMQBc5FXs7n78q22U557qeGpDPv4nuPwHwc8krtfcs3PZvRV93b9MZqaK7Ycc7cYVxGMvFKRd8w6Qq1ar2tp",
  "key11": "4UaSSYw5WWCcertiM5ontqqct567Mz8kWp6iGc5ufgKf2wAqhoHdP4mtScgw2xXc2HTaoTXVexLRgyJmFvWxnRM7",
  "key12": "jcMDX7iGFBKSY5rv97WbHKNzdKjTG5n4MjZWJwZGwGXLebrxswF8AbKWJG3NbP7t4dSnS2ZrqYXxcrHiLRoebh9",
  "key13": "S63PWkmbSPLxWJcPrVaw5au6K4VZK6BqESRBhEGuvXZ391LLxJ3wvgRPVLo2YQSGUwfdfNQ88h7faFrJ1iPmop6",
  "key14": "3WM75SVttpkUoeToXAqdZxpDuVWcAJwaUGr5hymMs6bPYMbJCQQZv6RP2ocoaZg1F8jqHkBFFnRjGvxFvcrjRh1o",
  "key15": "41SF384yM1urxTGW16gux5XZ5jJ9a3vuGCncSJ26ZseE931BNm6FNFMGQVGUSroL8CZRXVyp1ZZPXwaGL456eBD7",
  "key16": "5CVviE1ejEf4Eb2arZNVvQtmEMDpCh71f8BUoDSc6HEibXaHpQL5KYwuowZJgKet39Eo1s57YJkqgqRPzfUfXdkB",
  "key17": "37azP45XgaZ1ip7p9ffuN6pkQH7T55ciE6nYYgZUUN1QeiYahVU1BwAGVkR1KqjwvixdhLey9VyoTz5FvfaMjhBp",
  "key18": "hZ4weXov6QD7GUvV33EhsQqrsUUCAe3oCCVrYzJd3XY69wtT3VFnJiBxnTsZedVNUsM9mS33WiZ2bFjHFAu5Utj",
  "key19": "4jUKfocP7Yyt98aNrKfJhWjira5eXg8mRCRuP4HwPtFst1ToD3GUmuvEZDkYGZ9kwocqT5CgRmncGMPzvHQCa2PX",
  "key20": "4mLKgRb2vCHMWow2iwokSkqNBN8QvRmE5MAE3JHfnEmvxV3RJJzZQ8XhgGm1ksGgjDUYxok3mrKDFmhXwAU5a74t",
  "key21": "5VqeY9sJwkYtZ8C3foupNheXdTcDnWBStbYPuusjESShDRWRE62BgzP8aqQA1f3UrNjuubhEMMVSotA2BtJuFLoE",
  "key22": "6wJqfqT35AoCjEYfAbeeuTzghH64tXC4hQHE4oxFmhTi9f1UGKmHysoP6LuhknQhi6G8VAyMLi1b6BsZsbVQhgT",
  "key23": "5CGaHAFaNhGN7jo3ZWvbkoY5SRXgPhFkB9wfwjzjUHTzjcP9vHu8gHo1UrtMuwYyVrUD6frmkNAcPWnjZ5BUfv8N",
  "key24": "3pF1Dw1Sius95fmm8BoMo6KvZT9UQD9TuSWjLmsQBU8zqptZBe9TnMu8xcLJ9ivU8FNSyW7LqPwrS6Gz6tnx5oDc",
  "key25": "zmxEBkudiTTcf4aBqCEQui3mshZ7o3AVaJFNDnsd5xWpT4Jj3vmCMVhLf9qtpGheDgk7p2r8ULcTYu9wGq82BUK",
  "key26": "4C3FxiQXNFBtz42JhbAp3T34W5waearxvQmaHSNDGwELdz2A4bp9KhguLDNGUDeGneyWupg4xAQtsCpuyr8D1FrQ",
  "key27": "5rgv2zfGjoyxXzF2s4KnfkXRmgr1ixQuf8MvrMnhgJqrfYdzxUroMsoNEcEL3HmMiD9Vv3wkbbirww4rX1V8bNfr",
  "key28": "97RHxHxSTTCGbHgNa2AtbLTTXvXepeqyWhtRKVvd3aEQU29P1A8CFUWu8utzxMZqLGi1jicQFNmbdBbkSbS2hN2",
  "key29": "37qL6BMLYrkuhe9WYQvy9TMWRvUPuCghFBs83a4FpBWdnocy2zh8gRtWLy73ZwNa6LBvgbmarPcQFDW6eNmNpSRc",
  "key30": "4hw5zJzzDGWEWvJf8A3aMVFdUc3LbnSa9nSLN4gRTXH9QP6rK2peBfwjVDPBxag1uM95nBaBC6MP2gAvaXnzFhgv",
  "key31": "5vMb7uV8vmDetvz5WcgrehF5xfPyuc5wpT9MGZMAouVZH7N8CpCs7nmc56gi65m6tUWhoee7CdHmdZTDMcRGxY6Z",
  "key32": "kh6zWNDkk96DC4CXd9hdpy13QbFYkg5o57Ei2vwGEiZYCv1pzpBPfEWK9mn5xyKWoxFxq2VtnUCncVMutdThrR1",
  "key33": "47Y44EhJe5z7YjAQs2aWXPXoVyHzN1qcAayjZZ962h3uj22z1weutH3bVnF2FzuCy1pWDFSRvkSJxYvS1vNfYnyT",
  "key34": "3XopHGcWdroYo4A1Pu8UsmDngfc8r5sS3EKYS3PDFkMyD3vwH9hA2WnpnEd2zBsGX6UzrZjCzk98tJsYsZjQTFiu",
  "key35": "cXPrRybuXAQg95s9NPpg11qnZabs71dFr3XpBPLMeM3y9MPQhb881k1HFv2ZLvZA42BUqyW78kyVH2ho39B2GFX",
  "key36": "3Me1nfLjKVG7tefc831hQ2Lhm4i5ZH5iXf6kctcWtbXqqYBvdGJETyEQeDysEHm7iq4btpkVjGe9gMULYaorGkRH",
  "key37": "2FVAQ9AQmt1WHh1g5AUEMsSk838jZfCxWnjmXdqXHFeho8nnbcJrAh8D5SnGFT2tVoGispPGJN5vXmc1tkBsqmr2",
  "key38": "5oVPkH9ftCANf3wCvkf1c97S7RCgnLUzrQfoW2fp7YBesZzigJVDWYkDXzrqRRbB3iyDWqjm4PuSHSkRe6HsPXzy",
  "key39": "36tMW1aBixUhRDNErgyy1p4GyvMDV9qycqdtP3ksdjQuSNg6iAtZWS4izk1wCjrAB4XBesTx559vjbAA4NmJvcgH",
  "key40": "2ujMo9Hq47Pf1qRbs1ELMt5iMG2dYAmjneY6XBvYXbdg224Lsz7hdVRJqP37vckj3uhgdLGmxHNtM18bTfZtzu3W",
  "key41": "5Sv7iVEHjP6GH4Bb4Rw9pCxPbjzcv1Aq2BG3xdCgxCFQT7xybVvPvN1Bm82ie9awC1RZuX8BvzQKKSkh5PLGsf31",
  "key42": "33zcQ4wPJheXRb9qegsKhiNUyVVomkizaBN5LbPQok9C2HiK9y6jnjSTtT2qg3FtA61g1PKU9MQUNtUGcs4pd5ca",
  "key43": "4EmL3fy3mySuvdmva8hzUw7agtxWe61YHiaioVbysX1X2JbeEqxPRHWqUpcN5Er2U8UcrsNsbpMY1fnyWkPuXrCc",
  "key44": "4yNHUbkVD5eKVr3fCevpnttGFo47TGFcABUygp6moj9qdhipgHNruNRzvrx9bGFCuWgbMC6kSBkp6wRWhAsSQS2",
  "key45": "47Ug7zs7SH3zyegbGfEgW6MXJDNk5cnGCDoBtwiCYyqW1bheZjiCF8FxzJTuwNxqFHkU7jFAJWQrfhnE18EupGYG"
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

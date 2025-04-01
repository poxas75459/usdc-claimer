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
    "3trCtrD88Tej6vTneqiBKXyJTi7QsMPGECXVsoM99RoDZEPrWpXQYvDGBqbouqbVJ1BTrXVQ2i2oH9sRJDWjMmQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P8MBug6CfVhYppLFdKn4DFedYgjrUYCu6Ax3RrtQb6SShZYmXksKAL9zi389EURBJ1JyW6nfL6XEhThtNda8jYy",
  "key1": "4PmLWdVg5KV9ca7XDz3eRAVEya6X5zyq1QGus8gd9ZgEBbuvfAbizEbsGi56bK3qfzzFa7sXxf5vxqcoHPiLreJo",
  "key2": "3jpE4AMJ8gPR97Ez8dPJMJ93qEeeL3hX9rsvu6cwKTCiMH2qKCHaNqbusGEQcwG6gPYJdHsCmAxhUrQGcBPoeUuV",
  "key3": "4LMYainQmb7xeH6FLi6HusvFrVRPnuDDowRgnSuS3boVmP7iJuz71Wrfof6aN8qd4pLKcu5gpHcTh69anu8s5AU9",
  "key4": "59cNH9kr4pwku6oZAC3ckeLPJGRFYJJTkGNeQY12kpKEQiiqdEZMsawqH8pLrxAkyheH2KaGJaUhamgULcfvXMnC",
  "key5": "3jAGz88dqrraRKELhid6RAfVUyMJxuceXLoYcxpmPLRmQ32xwZEEzeKV2i43YXFWVkFpYbvVgheaE5ErUKBcu3fL",
  "key6": "4EQJXKM6QBeHkBgTeFnusFks3ugZdXFah21aB5iUMKfsz49xyS5YeN84Ub6bkbMSXotiVmcHnZbr2SneE19Qvb73",
  "key7": "4HKk1NppANvLHJCyLNgxkSAYZAQ331gkgS9eHRMgZWb6Sv4rzVbgcEVngW4nM5cLUpPQnsU6dVmecNWsnaaSE1zz",
  "key8": "opT4xSkkumVkgaAqtELBt2M24wvDV6KwxqVzNnjmevtXfKcj1gHJ9dynQ1hsYRh6KKQGn5ySpdfKu9oJXBXe3HV",
  "key9": "44KvEpd9cPKuRAvywc28VtEaXTaBmL1eoY9jg5aeA7NxFU7boa6REPVQzSU81dFJkxLXP2cwViGhApCcimYAjqLp",
  "key10": "3GqNaFKx9ECdUL15yCKaErNm2QX8UwrPRXmoigus3uJwiMBp513s6VY63oPmFSrVyAepNzJggcoy7pLQJh8hri6a",
  "key11": "4whUbL6MhHdECfmfsy4u4xSqi7np3Hw134fgVspb6nPeLcAzKvHCPpjf4HqVKQesTiN3cVeKSKTJSP5UhKp7QBZZ",
  "key12": "RUtznCNq75qFyPWnW69qSe8acac4N6FLpaJgeiA1Z26TGhZhqHTeYTJDj9snFLXGyxvzDNa3tAu9bWYTCywpmzQ",
  "key13": "5Gr9hFE2TySz66KzajR6RA2b8pmCrnNWWspQLTYU1D81EvSLt1HgTLB4K6J9qNSM45ruQSN2j6qpsSD7Es7FfF5T",
  "key14": "4cGzAo5n2F3eERwBUb6y1jNE6stzx6DVX1ShHomyDdco7SMtp1HWniQYi9pR3BmjUSY1ZUz9ta9si7ESnrpYEQcQ",
  "key15": "WzVFFRCW8wUCXtd71C37zwTsxXGvR8x3PwWGTdHZ8zzjA4owVSniiXVHZ5TUaHhpf5g7iBj3iJQQR96gGJyqMy3",
  "key16": "cJjVfeSrqvXqpHR2rcMW4CADDyABpxiunsFqTeoX5Mdkrsqcq3di2L5A4VVRQP5C9bmFsiYJfebVbKhgyXaqw5c",
  "key17": "44pXDHS1paBeKmDBh9tJbfqCusx7gLy3swkwAA6ZBQQSaxbk3PDSVX9FZZ6ihzxQALYiB98TqXmBj5m5CkJ39CHw",
  "key18": "361JMo1vfbjH7FCo5tctpDR2gWHcxVS6RK9BCgRNkfsYZGKVfVa46dqMfKfS6BnD3qj7yzQkWAgApmCgwzBaaEet",
  "key19": "3VynvcLEREddu3nVWz4Bbw5FBY616ieEtYjFiJGmHoQRfVEsCQuUiY7b2HdLWi77M4SQSbbAKFs7f61Xv2gZWyJC",
  "key20": "3tbHA7hLFSNqkMorhv6qL3Zsu9gMKCDwuNpNLaVmQXbVpx5HNpaeeFBKfqG8vTRMrRSfpRftSasrVb9vwAH2DxnC",
  "key21": "5GVDyL9W1DekPQBT2SycgmW9AXycvyDncVQw55AQ9qznBgiRDCJUrhUq73Xx463jVEibcgoU1UYXvSJbQwC8AJKt",
  "key22": "3qHxA4S6EH1hZcLDyDy5vwUhL8StbanxkJXdQo9vXCdTgz8KeWbSBjvaMYSw9VCHi36gNhBpAkkghF7B3JaNTqFx",
  "key23": "2KpmQiZp9KyXsmoviMHnUHNd3e4Rg3hyGpjiAfGiByXnRvb8u8KfDih9UVuh2WW5ASuXiLvpyUg2UNdkDWjUCioX",
  "key24": "51rNnougDTYqooe56xpPG14t6QyLUYzYEKqMjoxqeN4cY7Z3AXBqdHFdudmBCj7um9VNV1r4FeRpMDd679XwrAxS",
  "key25": "5JFz13qGSzNJFZ5jQbxjqhYifTnuedih8ACeuLJ7MJxiuDCPFxsRfWsXEwtCpR6a3MKB1TKL3Cv2h8rbcfYLxk8C",
  "key26": "4cWTFUFedwq6PHCH2L5NCuWxPdeexpE7C8pCKHgcSHVPM54cna8aWZeAyUwEFzHTsTaj7xa4LaSVzo3UNwCKpuGJ",
  "key27": "2yHzqGiQbJVuUzoJkXSanZn8PLjrAQtdf1cnsrpMV6WDbyvivfA8qJuTqDPEwNPgNNaixFFUyuZpUmrTWB1PHzCK",
  "key28": "65yJByvD1qyMANJjNWLQrp2RWfVGyWyjL2gpL6i27vHTLy6SMc8tMyawVFeQhznGNjsTpA9aMwTPjtjuAeZRXLz7",
  "key29": "5FxY3zQkP4KF8wq4uspvtjQDJkMHeuootvTgasJdXYWZXR6qiCyckRxPyBcmqa7rUjj4ZSQWuywHDUxxZFnnPpNv",
  "key30": "3ctbPPCemQY4dH5mSWmenzBYKh5wiWFLegR2WE54v9MpMuwfPC24HGEomw6u4G3qDUFy87V1j4cUoCJbv4gzUiZq",
  "key31": "3UGshpp2ZZNecQ8GeZnFkW33CM3T4qKKXGsAx6Ye5A7HM92W6YBpFfr7dmWriSCz6Sc52RvusrnXDdC2HhvhT2AU",
  "key32": "HeZmwa1xtMAxKi6yxzyZZYBoQd2nrdBghNh7EW31BzzGdmuRymkVhMPSL3GeWw3xnonXqN3taJeLeTWuRzRxtjx",
  "key33": "WQMFqgfcnsxp88visANx7jCCc3X14aQF13z4BaUGyejD3eFsyu232sZDDDqUPwHn7GfwXHrt7WaAAK2A1bJYT71",
  "key34": "JkfsJhPWwHPnRcfmyktEKm5Ytaf4Xe68CcDuQMH8bHaiLYrqxofJ5EGvrfxLfDiEFpbWgfGyZt9Sv7w7WRrCQna",
  "key35": "4pTfY24Fv4x9rG8XwRqToUxVCymFZzkznLSGNaMAa1eCFus1ugTLbMbj6VboH3qzncRVkpKUD5dfvcZZUGVLVxqY",
  "key36": "5AYeuTQtjQEZr1K6kJbdZB7K5k9Z5WmJq7daYv51kuXMiKmATWTSiNFwCmZ4vDVFTf9e2hc6wPdyyFwrQ7EWE2kS",
  "key37": "5vzPzyum9TGEc9BKNbfNx6Cn3oGbc3pWPpT17XgWezghr1YmBEEqgVpWm6HvPNfytxNugALCD8X4X999UAu3vs4k"
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

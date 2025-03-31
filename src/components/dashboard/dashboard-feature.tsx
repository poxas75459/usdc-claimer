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
    "4LohZjkNKVE8V5PDqf5NiLtUvmCuvnFLJgw2mtAn7cR85xvqgGU91HssPhr6L1oz4ojSGCwHibsKxSWApQ2DKWn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C4ej8TYMmGQ28qWqoFCbYbMRhUyE5FT8GhYoE18gmcHjHhxNpqmNisUtZQoSK22mbsto5sHjQqEFa3bX9fzVD6s",
  "key1": "gN9CsakDHJtLjLEsmpCzWaweK82Lt2w9M314H2AzVwWEByJbocDaJAY2CWjpJrYWQBuwxoyxM22BRjfGsEoZ3q4",
  "key2": "2WNZm14WXoQeYBcUcE4dhjeX8SQLQvwb4RKB3ipJfjTNa1CLTS4S5kURkWGqU1SNgna9RHm6P7GQGFH6T5Zc7R9a",
  "key3": "3KCzzwnQPM3YWXfsYpDQvxCAbhxBoodY9mWK84kS9GR8UEfqEdGwLEzSQmb7LN85aDLjbg21N3drSRV8djiBMaXq",
  "key4": "5M1GgxqxygvvsbjncpX1EGYi5j7oc1sQbsKAsDSCbD9yN5Y4WjB6VpMY8aWvYBeeHdQuCzi3e7XzGaLKA1VRfXcc",
  "key5": "2uDxV77AkfSqQDN7BZfjx3yxQvkaTuK91bHe2esFVY3gCZwB8vNQTWJiavWR6QQ11aUGWS1thKzXim86vZtzeaV2",
  "key6": "2cx2oAyigHVCPEBpfdMJsXVXF7bDEMW21BeHxZuw2UjNzG8haAbpuYAUtxAq6i5V5u9vDLsLMhxbCfvCnzoJDepB",
  "key7": "37fwc5QYHcJHWsDgw6XWLzP23dCXP74Ax3tyuuU9AspH2J6rTnkb891aPoDSZYyFJGGxGVq3v8WW7zH7rMD5LVPq",
  "key8": "pFw9Lh6ysnWXbYyMqJ7rLvTTEhADXrhrcoWJ1QJSoDyzcuH6xr4Ko9TzCZ88CkkckbHGCK6LKzEYzWPHfkcLeci",
  "key9": "3226kmYSFguwas55y6vR3EoCYggrC7jmc6AQbDyEavbJY7a2DW6sAyxDzbN5Q3FmVy9qztLAEQPgqezUR77cZrBd",
  "key10": "5bThagMd6kqJ3hxF6VpncDtrxD4rFjN6mJZsKK9noWFtu3J5Yi4CbeSRBdm6TNzTYhnrpHDD5ZY4zMfnAe9ZGE7J",
  "key11": "5K2pgqwTyc33dCVVSDFhrGiGEz2kmEAfRLHHdX89PBn7j4F67f1RmkTcwfGaJAHhFQJK83oUL5YmBxNYr1F3F495",
  "key12": "hwegpqaAVNJLGU2M21NgKCWAJsNKyf1WozDLRtVm1SYkPUnEBKNtjfJtBRCUHof2v6EAP545wn1vKTHhkzESDi3",
  "key13": "4w4aPjUwRJ8fLsYdcqUSkCB9x3gbDpxQAYbLWieVwswA6TVBoPgWmbnX6EoBmLuPp22iYShUyPLnZdVFZmDCeCwt",
  "key14": "63n8z1QNqFQRdSPxX5sUa2BJXtt7sEwCdXkDdCWmsDoZZN3GVerYY1G5PBNJp679tMrgoP3K3XfmJX8LP7UqykqW",
  "key15": "23wg9YDuXUa9D5989wQLzgFxNdvqfij5mL4p8upvk7mfmSLTPqiK31SsDa1nTWqCWbfqojoGgnKHw89zJ9bvWEYe",
  "key16": "3M267U45VNpZjbedKutxE2HEiiKxFkXPpwVSH2gph9fiEBD86X7Edx4GjhpxDdaUGZ6Y38KcQZr9yj4umVpfbnJr",
  "key17": "2UyHtQrMejQarwRffJgLaCK5GL4DQ5MNrW3RR2o36ycYGay6FycdwFE1HKioLWV3eHAVPcji8YfnZt6aLHQZoF77",
  "key18": "2CUaDPEKnwLPLMDuDxuX9fR6iYzii5VcZyAptCjxAohM1NqMvpoX2k9aQRcTkvJUeyCooBQ2ixYbS7DnFcATWRvH",
  "key19": "4yJdog6GxQgjJv68gBzoFYKAw3QPBBNM7Jcdz5coGMgCcsmKBWpqqKgjypmrCztxKL12NVLDoide2vKVBsAAKqS7",
  "key20": "3xup8GSBRa6BrporwKTSMgn48UxVyF4KUh9HafnwhCxFzH9toLoAd4NxB2hG92q72HPACHwjtnNrEhfsANTRPjSY",
  "key21": "2mciLpfxwyjmmnex8ifnGrmCot1SMFGPyCXUHXPNXBYboUCCzkG784AoXmq7yqzSiLoL1Vf4HSKor7LdG6fAY52J",
  "key22": "5233Zod3y6K48HLSXFhBWoGachNv7Yqbm44aTz42uWwizqwwuDFRZXrEEc5hzmNA3EbRRGtKqrsVd5sk8dcJ2okM",
  "key23": "Se6vkepYwcwNbxfiVxb6pgenJkocw5Eo1RRBoP4Wf4hpHpECXWYKziVTUzh719yJA26YWobkgknUrtuD4cfYnyb",
  "key24": "eNoEMhgyZzTZ57NHeBbvDjsGdbxGna6MkMVdo7Y9LHHrNs51bnAszXqQzTn3w5CudMHM9u8uwRX8sz8S7LQWCWh",
  "key25": "yxnGZRa1EbRpYTNPVhp2Te7bnBqYszDjFXE2ZYcrHefPWB4cd5P93UN2jkXLbDGzsyGC23Ff1tyxFyuxhPdfmNn",
  "key26": "2TTGgZkn7SNvNkPB1PLrA94nY8EEJHbsDQ3xnbWVNjL42mt1n1nHKyV1ZjY6ZnN7bpmWHDwXKXDTC4HQLvHNB7Pb",
  "key27": "5gmfjPSVTzoZTZWkHNus4oz9NyETzUbC9pKtkPDkKmVSTYKiYTq7REAUeJo29CegWSkdsLJjifUYPLEW12Sb2KPC",
  "key28": "4iBKo1u1Qe3DRkSVv8rsduuv9RN2uSVq4XEg8kQe1eJCouudHd25oSpXPNcuCej17nebikVPgEop4vuE5oDgaZGA",
  "key29": "5y55BJj4xuMFGTVMXy3YWnNjyfH95gAKxGcJ55fiBrVyY28s1brTKC9BUsM6VZ5MFmpmATtfJETrZwSDTnGfLjbC",
  "key30": "36gKT7ntih2jsyviFsj2MqmknLg9Xx5TYvYespDKyDTvC7Rn8qDcCytmdrU3d7WTdVYjaz93dwfrgLTLvyKk84aY",
  "key31": "Xg6N3xrEJ4CwXiC9NHnpyP2utxhJpW6stk91qwWeCKxDWEfsUdAyFvF1eUPTU3FUX3dpHuEppyjbCKn12rzMmAA",
  "key32": "5G4MhVL5Q48uE1WShTEwwb3A8ZiN8Q1AkKuSpko5ek3Tqwm8u9yiZVtbpGMBLTbWSbg9YsczATMjVTxdJ3MLp73W",
  "key33": "3BLZGr2Gkmoi75e6zuEobnW8T6RkrzFT6EnFj58whyUYozUhD1MxkVRYQgb4xgpwH1eTPmkSn1uQCb1yPm4uThCq",
  "key34": "2h1gt1V1rfMgyZCDtecnK64MxZjkDCaMH8Q5ssyw9H2tWNrS7985gJkL8WtCjSrjnDX8NNqXugMySMVWvvJnhhSW",
  "key35": "65itDuWZCmA9wyRrWjMYa6ZZQfDUACZ8oLLFBHsbygh77o842YJx2KNvThi9G8SmtaSBKHe3548Rh3TATDiwTNyK",
  "key36": "BNPxpz8hjYStghkuNNHwxWR1gt5bZCqVDq4Q5FBDPnxsCz52DfcrBabuUCPsnm1QoJ84RAcqqGdJiGvkYUqHPuX",
  "key37": "2mM81ve4AwXgXGvz4Vq8x4XCUnVXdEDR9oAsHqo8C9uXJSEUfjZXT85Vq5aLpBwWVDLnNtFTuPDKPbDC6Qyes5xf",
  "key38": "FtjFbTcQ34fPwrB7LXKhMdZwH26Jp1SaquBoZrexB1tTLaPV6ubK2YDioKe1mTQ3Aw2Z4AXCZMqq3EpUa1jGtf6",
  "key39": "jeLVdLeiooFRxuMRK8Ccga597yVVhJ92RF6qZjQUUWGVoN5UWPK28ntTsSdueRrx7GxseMvW7rdAyntksZW4R4X",
  "key40": "36WFk6rMJn7rfUDSbUSLpDBb6Na4ir7UEoBj2jmgU2MCjCpHzN9Trg9T4KcoYXvxFwRLgorS57kPqD9u6ZSnEfhY",
  "key41": "46JeTjhnMKWqd8a77FGYUT6CFn6LhxbdhJXPLibijktDkgYTjfFdgxcgvbiJ8YCn36dQZV2FQoQWY4knxD9d5NkH",
  "key42": "44uMxB6jT9HWiSAoJ7rTL4afU4vKxABuxFdAycZFWFRSkfrf7khM1BdsG9ehZFj6BKbpKhc29enLhdXBNwuHzFYY",
  "key43": "4RyNqbisXaKjezswARKmCBGASwJzjcWNGjUbdHzaZQHbPKw7XQdFCSqoK2ga7G8xXsa9rsYcU2ycTna37QukVovj"
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

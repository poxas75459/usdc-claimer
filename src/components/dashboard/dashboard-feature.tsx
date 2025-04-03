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
    "4eUEcoy8JzSmtV4w9i7MPyudjfuGTbwWenerB32sdFqhTqo1eXTgisdJyCg9TrwtuTJsfJMHcXEqyheKL5jZXoFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TsKpcWf9u737d4APoRaBKjfHGpgEVMPFHdA2vFCWcif7Nh3tGsGHEW2g8bkGkLpgevmu6ChZSzFSzeiz6kjDe1P",
  "key1": "3pWzSzJLZ68zVqsJ5b116gDbgbGjdjQA6zpaKigJgc8dpMBbuRgbz3dAWgMcJdp73jVbQuqVJLZtAS1WAm86vpMa",
  "key2": "4j3MKDMmJ8kNHVCkDSLdkgqAPsuYPL6GPLvLhcfygQpKdB5A9cnRdgfLVpiHJaSUcS7k95yUQouJRDNYvL1BN1v8",
  "key3": "4FdGRVDJd5TAiLzHVWfxmtawvivT36Cqhx3ba1Dkw9i1wUiCRpMAoZvFk4anoxD8bvkHpv7wMihQDhfbm7wtoLG7",
  "key4": "2SNGK8ZwKJ2J3EKQ3wz6yb6ukYEyCmPVKhxJYaiacuNcZciVFbGh5d9Gufcj5AJqigZ1z6aJAFr5mSjTngTRrtsX",
  "key5": "Wf4vHu1hCbUxq8iqpXHENKCLGVbC3RPLup1BGyJbPUr664a74SW9Pqpd2uNqeBsqcSS72hvNribEUzKkvYbwuXj",
  "key6": "2ufqvTrwwwJSYWDLeouGHujfA86KMEvScJ5x9fNGCGE7xoiGsmdWA2qQY2Gp2WznXYtS5DTZMH5VMgCGaPEwANUo",
  "key7": "3P6SKuANyrq7o3nsvx1ESXFqQCr84mdN8if72aGT7zKHqRBFnJhbk3wSMkUgvcL4waVnUzH4Q2o2sTZenhun1jnL",
  "key8": "2qxW4vtbgwxs7kyLeE152by1ZVv26i42aa4X7YjqvSA5RoWVH7tR7txcRKeKkbSKoyzH7pwTY8LFUSueJCLT4w6T",
  "key9": "4p76WwHmZYJ66ML8XfBgrpk6PfpP3QCcBbR9Gf7CPCh1amq5eGBoKBmoxRqk3E8j7L3GYmuzK14sGYBwmPtQZsd",
  "key10": "22akQMZYyirLiBCVexj2tnmLaa1xRseuiJBtx9ntf26vd6cC48a8FTyktSmimdJzn7BCU9LRYmcyfkmYcdpXs2cb",
  "key11": "2LWVDdaL1Dv8fQsxi3PmPSd5WL5ssUfjoCmV7hriN1jMBdSFjhrFz1m9jSGe277L5TeHH388N6ZoGvBFZBkYHFzv",
  "key12": "3TWKuLJuj18ZeSu1py1yjDSKsujcGsTqg1kv4Ek9PqkQ7HCHMQhHuJrx4jKyNEXM2LAg8q2nbpzSvj81qcEcKzsU",
  "key13": "3MHbMWE7Dtfxxgr3fChP5LatzTGcXvjK8hL3EnwH5KgrDgdxdNJ9VHYs229V2reCaAEv6rNJom29N24NEjYz2WwG",
  "key14": "2gVFq1e6FKKo7uQnC1sXBbi2L6vZ5AtiKoR4x17jQXZoscfny7HwtsnXWS42k18eJTw36QNJTCo55Fjz7CoLUHGr",
  "key15": "3WN58CgRhGG3dTyvvxMMY87xLSTfJNvkWhaGS3E5QvrX1R1PyouPh3NiJPviGg7DMXHorzrGr3XcATPZQ16yJ2VG",
  "key16": "4vqCYxLzBkcTiqdkc1QdjG6rp1gvupRc3GpxjAPGk92xYzEyFKjzBvb8wF1Bsy3ovNxofwnqub8mAvs4hqnBbE77",
  "key17": "4kpyMoyKBfec8wstwpWMXvVsu75XX8DPQWkaudvZcyaFWvrBrdRJCkw84rYn7ZvggUdfRie8KjimA6St5PMqqqUJ",
  "key18": "22T6XHTcHjdJfGPEzYpfrX9PvY1gRuzi6SYGogaxY6KsWcyZV7ofC1CANuZguTVwVyQ2hdMEbVbQHdo7WtQsVWAs",
  "key19": "2hPxmSZ6MB6oSAK5sETb9RCXNcNwpxtaS7etAqtKL57PXQrHwGcn7US8mZDXydPkAovzzsATixrf2aLWvb5oYquw",
  "key20": "2MDYHgMbpgi9xbhBu7ckGoLDm97Sy45VwWVoT57YajvdCJictn1SBVUTZ4YERX97wQ5NzUHs5PFdafDj8SQA5LNk",
  "key21": "5YbaGrApy9QvD9QP9P34c7sa6AHNzUPM2hE4BzxcpEu2yf67UHJ9M7PyP2HZf1JJ3EQnnXnakXyVU39rMAQMcxGR",
  "key22": "2iNZxCCwQ4mUFDvZPAi3t5ZyRXVdcrvUD7ieD2FcUSxrxoaTaUzSB7YQZaaNEdqLWbiLsESKRB6EUr41Zid72Vz7",
  "key23": "3D78TFcF1rBgtCXhcqt1zMM9DPWr1Cetd3pvTVVgzLTjxGjZcAVF7VT9CXRuycrTBhDBp1xSrookhQ44y9t86TAV",
  "key24": "5xPoSDg66xJQy86FjDaZC2LQRMVWEABYzc2H2q8zuVH5kD6SRojAYRK6UCTFtoZNUy2hgorq37zQb15wKy7i8f7e",
  "key25": "2Cs2itcjaDugcxY42YzJH3ppcwoqLmywpk5hSbi2mosXo2HqdxRa4wrJqHBwGC8Z6d4VWCHBjUe3aMSpMiTwA3ju",
  "key26": "67oXtQuVy7M6A9K4CvwrihMQ2Y3CfSfQkoGauVbaan1WkZ98YEnxCMUR6nSHRuF4Uf7JiGjzK7efz4YntH42HZTE",
  "key27": "2MRE8RRkUenCf1A6MabEyguboJXuGN69Vz9eJnzPDfjcv8LUatSgPs3FDcjSAYHfjBu92wKHJGDxqwCDxq99RAG2",
  "key28": "32YR2TwowAQJDSTtG8N42wzrJ9zYMdFd3q3prpnD6AyHhEwDmrLTG4gQmzksSZZ2B9hYnq1L4P9drUGw9Ts68Vv1",
  "key29": "5EePZUE5DDib5ya2XY2Cf2ziqBvqu2eEEmu2uzqtiyuSbizCkuwYNtEy8Gwz7BgYeqBefyqLP1w14tj7XJa7ZG5T",
  "key30": "sFq63LnWDdynvxz9fwtLX9msnsJDMR6eCbSoETeg9sZtPXAEdod8tv2LzJyYLP7MnU6y9H3xUXERWwPTqBt2fJe",
  "key31": "3NhWiCZ1q3sT1ikip8cvV5BP4mc6vfggkvEMFdezw2YY9S8WbrX5YCrYbX2A2eV67CRsFQoKDTwqxonPosbeZtYP",
  "key32": "5f73YHGbeTZFJXkEFWeAqB4wPnWLL3Xyzobj3HkNQRUy5sC5yi5gRYk3eQaS6Gtv84RRoV8zgS6tWM4p6wdnptCz",
  "key33": "BWQjkYqpUEgwAnZVFKFmwFy5PXZYhKzRtN9fJap2pJ4jtD3vQCcDnDub7QEDhiXKnpCNEA6cbnGAWVukXFtK5Z3",
  "key34": "5VJVzWSDgXUo4zfify6nAGLQtHxXYe5p7M1YR2LFwjG22rEmQ2GYoZiXtWKDdfRZezNgC6XTFBtU5DS3ZmpC5NWz",
  "key35": "4G83ewiZj5cHz7AAZ7sjZk7UsRGGBaCobH8vNsH5L281WsoQSZZ54v7gEFWkvF9BXZe9zbhNcH3jVx2WVWDjy48R",
  "key36": "4oThcsVqZ2X1BU4FFL7y4vGiVrSbih9AiTybmR8X1wh8DQAGby8aTWRFveXyrWz52xFP1a6Zo61LbjyxLFzRh5rX",
  "key37": "mmz5FHfEMoLycnM9HFw1d333JKrtEVAhsbQcqKuKraTXDDvN4UgavpjXvhnUQqtPCrsTuw5KH48254EABFDuYjj",
  "key38": "2kVzK67aVvTfst2bTuKK44uLQTDGd8v2ZukGBDcB2syEua5kwRXNuNj7xvBH7i5fiKQz6Af9nwx9gn91S1RMEHXe",
  "key39": "3t7Hrhtgn3Yt2LZR5MhNRz2xxgogvPpjeMeBQcj1xfjPzFwz6a98ShsLzMJLJgRuDKiWwcSin3F7eN58sXNtJf1n",
  "key40": "65y98Cd9ztUwPoMdELjQzjuoE3MBhdTwPxm1Gm2bdTysu7tkp7sJd62wwJbsUm9wWmo64c4BfKM3qWD6xoq4jCXo",
  "key41": "41Lv4h6Fe3KJqjywTaDDjLo72N7sFheyWncbUY8xbTxDkAYB2y84fzLfkWcj4GFtguMhLj2JzYC4RxFtEAZ4sVFf"
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

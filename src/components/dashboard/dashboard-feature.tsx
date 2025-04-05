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
    "c8XA8LpKpVwFdEQRD4CA4uNGCK9iKvKQihze7KNmY2rZ96NFMtNRLDTDiAW8HbBm4WXaBK8YhoEafkh5vWJs5fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzXcr1mtukUGNVwyFBjhDZ9UPU382TX1sMDj6QEgcLW9hX6LETKZhcV9HqaE7PKjS8xMnFWUd2iy7mQCXcEqQYj",
  "key1": "2W6Br4bGbVMNNnzvSP2DvhvQg12Upaf6W89ZhMDa1jebvKR6S8Y4i4obUYy3oEtZtHRaPYrVrgydo7RWr9RwX3Lp",
  "key2": "EHfoVEZoYVwmLVQrGn9z8pqGpnJ1oeNETzT44adpZ64SiFczXYy7C3YuNQEYaJvX4YwbRHXkta9ovzY6PAQ29r6",
  "key3": "66Vj4MyrxLApJphriJYtTCY7YWqvVzMeuz8uXXjkSXbKnn98rGLdivXHc7fZnGdkkVtuhhaFdWEjX9kdTKQJgctv",
  "key4": "47qTRD2se6aCmpHrJPgmdCMEqiWUrJFficsDQqSbk4EVjV6Vj4cbz6yLXQr2RKwXfNPHEXnRqSU1yo5pbSmBjk2V",
  "key5": "2gBeLgGqGe5ikfyREJiHjrFYSi8ZbxruXFHVX5b8i27guPxVJSDwVG5fcsibxLsJjszu64dHiwwxpwzoWaU9sMFn",
  "key6": "5MtqCW6pcu584pz8gAPbo1zxzunjDsVbLM4FnMFMAzLoACLN1hpYczBicrGMonZSVGCvtmW83hRFLCtbGR2hbMxR",
  "key7": "4PD4VysXf4sagiWzWGPgZApCvZwrYGACuqXAEq5LpMCX8v1acWetauthms6A8BusDicEEmvMdypYrb3smWw849su",
  "key8": "2CUoEm1aXWwBamJvYtb8XgZ8qskMW6Y3uJvfiNkXBGSFA4viesH5sQayVhNqSKXbpq3d9ETGneMEvn4wATZE7war",
  "key9": "GMHZJtrrgt24eXnqrWUVLEmNZnbk8MDNWyu6C4Zej8cJKF4jRNhAJz9J7x5oAUBNRVYkNaAz7drGdHm86TZZBLu",
  "key10": "nvCvAtdkvomjr5SKLBYuHAngoBAp51dChiuBGQ51z3xGdPZA3oRT5dEiXxhouy6n8Fvpk2mFR8uuC3d5VPYUkud",
  "key11": "4t2vzyGPVpkHFHD5pDsrCJhWGyvzBDjadJB5EP9M1y2VQGYCovrTwSUwNowBxamVtBMthnooxWHHrFsq8PCMnnRh",
  "key12": "3tSBNWxv5Lnnpq3xi8Ka49zwCxVd2pkJKbsjtvw6aJifWD5LaVvMvy3HbEg9N9kWYegguSeyS2Aax5UxnEe6cj69",
  "key13": "R1rbL3hC9RzLRDkm7RcJxLuPoFVfKBWetuKhmW6dc8vVe664cGbG7Qm8XeYrSeq5FeYVBmNceFRhsUn2AjiahUD",
  "key14": "4Fegd1FBh83KiiEdEcCA24pMxwjzcFXUooPVod5Mn8Csst9rv5jU5PrLQeJbdN2ZGDkVupZdAQsGb8VMsbRQPmGj",
  "key15": "4sXTJ4SYWBuBwoDKFuqkHvNetTisce59Bkmph1GzHKeR2AwBjCPRjYRQzT2PWSzSxCTr2hJnN3ikPYCET1m35zc",
  "key16": "tBGLYR7be2oLrD7Bi4TWWPMdRoR2PLZp4csaJgN57S1xqY6pKH897EFVyRt91Hjz63V9FwhFYrfhmyarxRh4NDS",
  "key17": "3GHQ26yiWqfr7RCUtzXGnX8sXSRXh1EWQb2LLF7rwzy93ayFgM3bGb6PHqo9nRMf3xSv1V92g34vqw1BNbVg5nZW",
  "key18": "3WzsNkzL9cLyu78ZVHarR2mMi8SjWpQyShrEDemWMpTzzz1GsfrA24yF7XSSc8nEJM8GMkBkMMUHShDVGDRuwZYd",
  "key19": "3ceWojYxRbyyKQZkFwcZ65koxP6VUqCUfAReSVcBDb9Q1if4gcrxzCrFEdJ25m79hRyqNSbovFR5k1uiwzG3idQD",
  "key20": "3fTyqWsNvF71oFNgR599f3FS7oqvYJ6vwEjNAMXZywwypzwYYEDAniBkBAW9i9v7VYNyDt4uLT6nc27NecsJ2QQ",
  "key21": "4UVXEoLkeo9JpYxBCL5s3MnbNacNNN9edTKCCpeGWFhEhyT5uHcCuHEHcMnYqajYXwZBWa74v3MdsgsUsAeRNW4k",
  "key22": "4E6EUySaBSU3H36W6EbaTDtNq6UMKiYLQqi2aAFCb9QZ2xZdFD66XvkSTp2JW6aRryAifazYibmCmLeKuNuooyGm",
  "key23": "2G1yCNiE32HQppLumZCxHAhQtoSJHvUeU7LZTaLP5UcojtARU1bFGp7YFA1ujY2XgRxru12zuYEkiqFJFWNBCekM",
  "key24": "4YiF1AxcYFGB853r3dWWAy6dN6MbfqgeHen3ibuaQKq3DWtiTKo2RWjsQVg5uXkdKwD9Sp8jLK45DEbiJCbKYvn7",
  "key25": "5izEncBW1pGvTMibvhap8Wwrk4FKKp3AxjKrSCQxrE5pbxP56Qd9dLChwogYRrZaVc67foeYYot22WJy2hefgMfG",
  "key26": "4rvRqhQfzhH5ARWqiSZ5SXuk18UmzSTxnZuYnifYZhS1eGyzEDSNdQBBMA5WHqrjAG3GPQnw3BonmtBWPyuScaAC",
  "key27": "2x4vjSvo1fdyvPcTRkzmqEjDtiKErkP1Q75sQYmjGzxkiVFEJkdPjjxwdRX89BGcM2haACdzvVRhjW2rKF5kwuwx",
  "key28": "2NjfMRfS93x2S5e25yfkvTLMydfFDJQ1wjgdTfAfqbgyfkubnJAJ1caEqoRtPrkT1JtyX8vGnfJwjKnZjXtyAxB9",
  "key29": "2hpx8Pz9ytrJA4T1GEP5kqF8LKM2bzLR3BNeWvtWQYrxfk2Lep5awG32ipoHq2UdY9rgV91GwmxMEq7s7nAqtUHQ",
  "key30": "4rKemnWXbHgjEFWe2M4yJaAtt5VSuerNXrSGUaWWNAQW6Y4qERhva3GByX866zQrfPbpXYy5AkAeHwBdwxgz9Uzu",
  "key31": "87LAJHjru6NEV49teNT794DcC1ubpFuhbd5VvbqbPoBNk6yZYcFSD8z11fQEVLZrVNJwZpy2xiA9QkgcZfktA1t",
  "key32": "34rJT4RF4T47pPNbHUhYkkgW2W9M7mZYXU6jT6sNGe1R4Bu1PUz9YWt713Y6LW4tdcJ38GX6PAERdWJh5hS5cvLF",
  "key33": "pcBTW7VPmawjhDEqkxorWQHGw1szSJ6C76Nqk1Tawbkecb56NoTrh3fPWorz5ACd7xPmzPT9eLHf8AhwtPk42dD",
  "key34": "Z3U5difZ2KmhSjswd37Biu1rvNqrZ9HimJqyn8mr8Xj9HJXzNnvv8A73FCpzumtjiBWHwC2UWuoPKC9dtgHzYTi",
  "key35": "5DaKK8hMzqMcoRkESM2tL1EnjLLm5RQoJhZZartpAQfihCV6bTtYbfXp2oJKdYJbyaPPejedfdaXGjKh3gDt1jyt",
  "key36": "2fxYSPVi8cngA9sJVnb3CK3evVdmkNCKTdxTYxXrnUz7fV81q91tuqfLvYibcfnBcCjGYMJXHAAXRpgjAtDzXUdL",
  "key37": "3hYfEHJycdNeTe4pZ4ceojaeDUyMgbj9ZmmC7Pfe1DGijaUGzKDiy2ePPAcbFgdoAyiELsfC1yqXUPVBRJVCUuvi",
  "key38": "3BsHAE7zhkQDb8stxKeDA89G6aNHeRYuNn8jJQvhC5dW5NezR7mpHrucT4MaPJ2kCoA8ynTF5yw6X4rhk3qhLEmg",
  "key39": "3BU7me7oBci8AvyxKDe7CA2PGFS1rr3bmpgrgPBVgvEkokhiBMKyCXMGb5UcqhVz9LBkakphVbUbjm29dZPNUgZg",
  "key40": "3RaoKvMKdFxYMQKK6xU9K4iaHTY2EEERR7S98pTE1c2xMpwFu7yWrvSXJ5V3UqmXyNTLTKu8GX2s1Vvt2h67TFyR",
  "key41": "AsQ7ot7Y4Fa7YVhU3ZDyEgZC2jkiyVMMMuSKuxcnxEwHxcRbeJBYXVZg8B7Fri2uobs73xLRJK6WPw6h4GnF4CA",
  "key42": "5kzjTR8sRFH2pyxGXYkTvTZ6D7J2KTPob6ZVMjApkfpMVvPzZSgoSkdkAKvtDKvdPEoLNdVx3REtVyAvzPuPj7Ah",
  "key43": "4t2XQj2DEmBGRDcSDtQPN31ViEN8eceVodRkYNrYmmqLFttZ8EW7LTiqu3ipHu1mezPCpgd7D8RTqFJk8uWcb3eH"
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

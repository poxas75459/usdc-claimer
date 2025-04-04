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
    "ntSpCcxtDUqBSkyHSLk7wtzSWyHVCu8Xf2pg8yNNswTyUc9tJ26bnLQhek2aGyeK2UW7HrsJ1ofu9TKQZkqRebi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Hjb5s1SQ2GBz9e5bnkieiAXvLsqBYagCaam4MqeaYbPYjTULyvGs5drW4G6dqYMzBQ5Ht7eEgViToMJCfmY2ja",
  "key1": "L6TP6UPPUVdcmy5UL3H88JJyfiXV6azesZkwLx2uwPmywgKWCULmvLHwWbTFHhshSwBNMM5DYxCUy8yapdLt164",
  "key2": "3JEKVnrCgiY9saGfLKcLtB5nx27rvx7sWy7gFyEkEtWUSzBhJNCvBVQapUxZpJasC3c6TutMgMJYH8w6pNM5ehxR",
  "key3": "355rsxjfPxgXe8HkzVhBiPwAqyS5anZbBN75E6sALkbZkWcP2XQFpm3kG6RGtJxtX2Nzp7AdUXUtk1bQ1A5yhFf4",
  "key4": "2XcGKfXwxzjYrDTkprWQB8kUE6NjWkrFkyvpi7m2vaUzS3rYcHvNWwaCukjDLMKAsS3Gd7XGq67wzZYtHoyVC5gJ",
  "key5": "4kUAcCe1t8qEw3yvJdw1hSdELji8AJRrWUWN39VVgW9QY9NVWyEsRfs5zZXu2PqVZjbRrj3UMdN2L4py4hnJQxdx",
  "key6": "4v8rWP6ruyDo9CVBUVMuCVgguGD6Z2t1rg27QGHAyA518cmrBUmtDnEyN4DctcLAQzxpRoNLA7yu9dZ8974HgVeK",
  "key7": "5VpJ17KnG52uE1T94VHarKZwqMHfQRq4uBEvv2SwWSVtKfFNCb6YJ35hFBsaaSm2gTkLbcwa1AqvdiQoiLojPMtv",
  "key8": "21DJKoDVzo1jsYaEpLZVb7hYBbkyS2rXbDX68QuJARXGmsmQVn7FXEJsf9RvPN8JGn4QuzqPzZQd3x7nN9fYCnZp",
  "key9": "4fkZvHEQTR6GtumsMheNAxjzaZCJkWYSQb9XwmLViMjeTrVKVd7sTBpJkSUgC5bhhDZpASNDA7a5NuVUgzQamrFq",
  "key10": "68j6YwK8kQJtRBskDd19E9i3GsrbikDv42YAodZpdTMoDCg5heyck3H99AxFcQsvLAEzDRMXw3ftxJBJyxtWHi5",
  "key11": "2WgcC1QaVmPMefC6mDNapMHZ1JYyxvWkcrSZyFDCqQPY1FBAvzBNevqz6EuxcDu3NHkmq3QxUy6Vr2cJ6ADMuzSp",
  "key12": "59TBvHVR4Qj1EhZm8gAL2b3mZ6e44PDsSgsWG6dvhYve462ERxuYPzDMtrnK4jteBKrqve82bMuGLeua79j61pi",
  "key13": "2RvJaozQnGMSjPgnMa7NKdDCqHpbe5pyj28supwdTDff6iZC7GoFL5EGLnUP1RFx6vt4Jzj1ke1TTEoMfqQ7gvuF",
  "key14": "2CLetmVd6vSuAKCjZXvBwsSGuETzxVwdpMA9Z7GniQwVbwMj8sEVEnc6WsRJPKYtdBGWaCGBUmC4UTkBiLvyepi3",
  "key15": "2bQL14g3XNhEiHVgHGxJs1nRDdjJzv8hitaW2UNKKUVnFBP9g2oZsT3Ha5CkAa6pJHMk9eEjfzgomUe6tHwK6REt",
  "key16": "6gHdUQ42hSsPCeqAcpjvFuH5ajshErAcWFR2aJjrPLbZvcQt1vdMzkvrLjR3mu4vtZENS3uXHGQcqzEKWBFw8U3",
  "key17": "5d6jsUZCTsnhaQEMi5c5K1PjK9g97joWht1YrgPbAPFeTuabrXRmGYuZrZcJYAVCr1fcnfx57GscYUokXW3Xvn71",
  "key18": "2DTF5jjZrjtXQvrmv3Sqk4zUcsYfe1ztAK491bUfdgfbvp9BMMMfxt2msHmXV5FCaCbPnnqokp5L1HQBTShHoeVx",
  "key19": "21urs9sCkcAH3ivwsQ3unzXovgQpLaNWCo4ifmMm2CiRHk5cJgmMVjJYMVuF1WCcnRok1AckxCijuccAzPzkTT1f",
  "key20": "3JBufn9A7ZRniE5nmXRoRpdVoerxc4sW6TJdSSNYzXv72WAPLVb4nAGYrTKQTTidouee4tzancqywMRJoZLxmoj2",
  "key21": "5x2PaeETdmQLegyYBRAQoGbW38iDbfppCDrg5KyvZjCybxCthj3kEAQ3vUCA1xgzX5CheuMahoEQ9RczGKSasVG3",
  "key22": "54RZHF7peZWYwRw6RwxyGCun7Eq9PqSLYSE9z18rMw27FR5g3J2iGA8gsLU7dSEjNjrvyskPbRY2qV3yWZA221Vz",
  "key23": "3Ufummw7SpuMYz3vQwhm9GU4hj3C1N6ZeFL3baBXZH47KiapuAtApBkJ9HKeHBdTUQv9byoaqvyBBaA8Ysu9qcH",
  "key24": "VVmDGAZFHsEKmzcDgqxVvC1eM6Yy6sA5gguhAfXrCYueLpayi6gyoGZCm6jTpMo8PRtU76uZc539EEGSF3Sx4kh",
  "key25": "2x1RkTVbgpr61d6LfFTDbowzRnQhHEgvCz9uwKkJucT4Jov1TPjuzM4QqLpgc7573bH5w2hzwADiiKMEzwARzFEy",
  "key26": "5uw3yVb7v5r18V23ub6TrW7bVrDYjdyPTJr7JDjncxaUNqirQhNRqHECeQPMtcC5HbLqff1EcQz11CotLwVApapD",
  "key27": "2HYp6SusHKRYP7vEFuYCANZr2Zn6rHZmYuap7gap7x9Wfc4unUCjLpejcCK2t8EZS9v1TngbDQ7kzSamBDF5WGjq",
  "key28": "3tk8AGAMDZ4MwpSnqng5DNntAHoemwtNbo8VwwEiuLtKMpNiwssEoJ3Pmkc7SJ7RGSnaRCEYx7TW66ogjQmdjM4D",
  "key29": "2R64pYuJsVa3jUC6CubCgkWaxpM3p42sVvkFbQ2nnYyCVJdjb5XW24hBLidnCEb6e5JvyYXCftwBmMgaWDhoYPxs",
  "key30": "2gM4XUhXwiZdTjMCAFRjPfcFxyustXpDcexCZtMpXvx7xCT3EHZxPT75ArQUjWcJQphdaqWCpKL3FPUajwJN8rKN",
  "key31": "4D65nk9wgFYqDvtqB3Sw6CJopdmUfv3fochoRWs4dgn8Y5w6eFGty2UwJCVAPtT9tvrugbgdLiKnmChwAzsPs2Wa",
  "key32": "4919YbsWmnCncvrVWpeHv8iod8r7zLNhzeUR9K12x6FPsU49bi1F1wSzE7yyJfTmgEhp7sbvFhBSseXNWiR3fsVm",
  "key33": "KBfGovd3V3K1EfsHtjfSANFEDm2jcfE1tMSzkU3PsR72yr9oWPkdAe8nUY5TDHRTK5nnBEGsaVvAQiTTfj4hp8n",
  "key34": "4SPryX1hzcF93jX8ZaDtv7Y1HD7YRVD3WTbo1nTtdwa3uCuauGztoKfwm7fyDooAiGwojAaVpwYzUnoaNjDAyyws",
  "key35": "2e8A6U1ASjyufNxZXXmYcKRUpb9LNzwp5sf7JgZTwsJHYHqc74ueYeXabs1Lw2y92TGr8haCPrNxL92cyye5ojRM",
  "key36": "5SiQtX7gG3v1SN7GQnNg6msnyeunw7phap74coW99Sy4VTqSdteRFKw9naem9cqFM4x7KZVpZEQ4nZbSsz5QXpVv",
  "key37": "5WF5Mt5bPLLyPStYn8DeXT2L5ctAAbtqfCqoa1p8ty49dgMDbFZcHJwGx6wVnWp8sgnmgUAvWA5K5VhK622N4hwa"
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

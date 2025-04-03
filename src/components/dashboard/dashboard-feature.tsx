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
    "3MCJov6ygE5PAcKZ2nQj1yha5pEmqMmSwrg6qFA4KPXrAQxpeEeAetEpCcmo1pStNa71FsgHSoPQZDWHRSbJEqHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JsWyphv4z13AyoNDWjRBt79j9GcxA5hCCjweL2cu5AHtcyGKr9j4SWgZVJUJHmPPGBRXix7VU5CkSnmGBcTyb3p",
  "key1": "3gJhqRW7BLW2KMiKoztFcXRL9zcKjNAnAL6LzDFMBQXQGKe31PDg2PmdtomXGrED5BMc2guu4EgLxGXv1QNGcYmS",
  "key2": "51hf4HYRHmBXB573B9VyzAKLhdopvJ1emtuzTfvxAWTrQXyuR1NqgVR18weKFPYsXog6xcfixfYXhuYReSakFKEV",
  "key3": "3Pj488wqnTUGhjhG12p167FhH8SxQeoj5DobTrVsgxPw3ePqszc5ynqAyy47wq2nKbGq9GQtDMD7JLqzPvw43qWB",
  "key4": "4d37qXeCgymbJthzq6dHgS1H1vyZ2rb6JppsTLeVT135Zfn2zsEiPxbVzxp5JKmajB7oZLXGpU8ExSjyCM3vxuxR",
  "key5": "58rPeqUtYMAb2HPXfcWmT5wKSFzH8Xs9peDPVsk5uPFzpPSY7fo3DkfLENSGN29yCFWYhmsFQk2sRHcUmmKKGd6N",
  "key6": "N5ETZRArpo1DBFkMkySoN17NtNejrWEe6W3wMhKSFJArBEHEX92wurGhy2cze4dMc3cjt2GFdm1CjJfAFPY5szo",
  "key7": "T85yWoXXe92neYvkaNVnmiKspSToNYctUBneRpWdKMCNmNEhKSXJeh1ChcCxfWv3dTjbLKrYv38nCAZaKn5ioWR",
  "key8": "3rfKZ3Zg8B8PUhnZGJsg2mikv42i69JSTQrKw1sfLLdZkmjQQaJPPHNLBqrVW5qCfMGWEbGp5DDqT6eVtXJsoTbT",
  "key9": "f7S6WDvNuBuodrWoL3wW7ZRpScaQ4bdkvQUQgTaTtovwxzSKCvLpvhqze559wA7xjYEyNzCKb9QoCWSXeLrZh4y",
  "key10": "5i7VB2VrwmPdPJXci8TS4vCaCfXbZo9x9qV9hsTJ12ZS9UmikEwfekhMWvQEnCvkVGKV1ym6KMEpUzyuv9nPAtCC",
  "key11": "3GMKToaE6VbbPJLyqgFjNK3CT5WkYPUgZes2SkFZjMwjqyC2QUUuZo4ztRLcWK4HCwSgG7sxhSooaRtYJu29wcxg",
  "key12": "3pTU8BnU9Egksn3yJRxiA45LuZ876sMjWSRfov7vaJMd3CZtkCLe6b7pFyBt8kHRTxTmEo3YKJsFhz5NnPXWLxC6",
  "key13": "WnDFp6BDqPBrxTv1G4PB5RaSmGtgrk3TsBKujhNcwvbp2bDAksziP6HRrqaBC8FEtKjLwuUsHPsbfXjMa4htMXj",
  "key14": "3whcqGPXgJoajLEhunNG5pe22PqYLaBCoZYuNLXrggbdyhRwy2zM6c5d9xKp63eJDFG8aabz4XA4HEVct4DjLGWd",
  "key15": "Qg5mGZvRZzeWr97sPnmmfjHsHxbJF7fZF9sNH6xXGjLzBxmniUxUxHUNNU29eFyFHSnrisbHo92ue53UxjphTf6",
  "key16": "46kxwPKyGy9ooorfaC9tURHxEFafRhcQJTZcYjc741JRmtViTW4asdyRpbDFsxYrQKn6beg83CR9xKMi13gGavm1",
  "key17": "4AJE21TSMrNVSbZJZQFiAUgMxEXVjhLtPdkSnEZ1q4DieUhJ5YygWi19zugkovUSzfYPLxfFQzUTk8KHdhG2hv9G",
  "key18": "21sCdeQBFSX7YxHykf7ycMVh6jB9MS67z4ijAMJL1kay9wMGtTmgAnpMuvFu4aup3daLVAye8etREegcDkz7Gvqe",
  "key19": "b8Xje9x522kiUm6igcZDxEVkyhYrwks5xgUqek2FpFnfH3xqChKHYBjkDkWxdPuQS3bDp9BogiFyjRfmFWRbjD2",
  "key20": "BS8BPu5gkcKgQgSMcQF4CSrNjmthcaM4rv8gbnrzH6D6DXqGSMxfeeroGFh7fzvhjutxPfdLcGihxtbyHwvg6WL",
  "key21": "5Yb8jbfp28zXvHsANdTskkzjLtMneex4KRCmpiYgKsGL2oo8vywymKtk2d3GAvE5zK48wGCq53j5S4bkF6r6LR7S",
  "key22": "4ZgQ7mbJ3CBP9dhcW78hvVaWs1hcCxEbNYEPNU1mPFL2DqkbG1eyFWfPSLJeuUWtCbbKEWBTH6PgJBu1tQCWJhWs",
  "key23": "xhburPjAnVcnZB1gz2WHPxc2NsWSk6KtCaCdLvseqnUcfYcpYPFPyLaWHMDAxYGujLxzCCRF98cYUyh5PnMiZmG",
  "key24": "3kX2zj3TFuBm8hakNSaZ8noPcgFMDfTGTATmk7WrQ76ssavxnFP3kMFYryKXYG3FaqLjstpK1omBCJGUPy4MQ6k4",
  "key25": "2aCh56kvQuYhR6ZJrw3qxif4F3b98kHyNbkPGhjnZqTPiBwTToogVACthNjGVaKmMgMZNzxqoHXANHgfAGX5WBTB",
  "key26": "37NiHavJizZ8UJkTLT8Lsyj5XBdNbwDZZPXe1D1ddTgxLCr8EvkXsWXsPj3Tpxv51gG9UjJidb8KC57nbp8kgkVg",
  "key27": "dt3uEa1Xzzqju6vmpG4Zj16eK1DSrvVi8WMFRCqRmzVfutE2zmPZGxtuVpeMrbeDjBDz7g1rtqxJekwGo4e28RQ",
  "key28": "2CA4nrLA9f5id7RyiJNjm96YN1pbV1JbpxznVq9j7ZYhmbqA2VvbPqGtEDARfzAVDZFYkRff2kahBnLL5nGncojQ",
  "key29": "7G13RDvM9tCQuKvwDoRQumBbsEAZiGojaDG8NMPSJBk9S4SbT5GsgB7Y9m7bU7EU2FWGW3UXuByp4jUZPS9vLwo",
  "key30": "5u16YMkEDs1saUBufGNZx3G14BqaRvSA7ZgqvyupnA6hninrc6HUbV8R8sTAvXFt2rhfEiQN4m3K3nv1k6GND5pt",
  "key31": "32aw5FLuVgh9WzF96kN3n3PpfmGpqCJdeZX8L7DRiCWtZtqSC36yWRUDb4kXQtNbUjEvu9ZX1N14oBw2THsR5rAk",
  "key32": "4s1WnvJ7WUkHF5ZQvcGdGp8N6tfnKTzDeAEZ3jqbL2xhfJskXphn4RH9ksNX92S7qRZQMyyNcnT1VZSSkSrYvRim",
  "key33": "5yCi2NycNRStbngspBMcguGUxY5qtWPTswk4sYK4SceinQyY36RH4Gg2DjveWEEFAg7qH494Gv7BirSMcYKhgYg9",
  "key34": "4mZ24kvnCT9UL4D9XT7vaMcmWXYfjRkuFJLErrY99ps1ppejN6bp3eef5drEcfG1m1EHpf4CCgxrsfSSbo2EuVg1",
  "key35": "4r9ngPAUAy2SjfCeUnuqs7Nykthm42uWQE7YJw5ZdjxAhZrTVqYZSqyj7b9Dst7MHr9V4AddDE5VcAWsk9qUrDQk",
  "key36": "5ezL5wZ81ustz5dgAaSZdcAKp8KHAMptzrExQK6QFHrnqCEHfzGtdJqAkMfwK5MYW1qSH4fV57NJZ3h24QuY2xeY",
  "key37": "3eMV1zE8rpgjbDEu9CTgYQUm55xk9BsJsMZKpmiWC5G6AwidDH1ccyaaeAMt1ALYZbF5RuV9qxyMX9EpUfcsfNq7",
  "key38": "2NdPwFtjajAjeQikvmR7HWSzb7HcgJZoc13Yp8ZriXzTUv3VrfebuF3SCLck1Xa6csHJeD5xwtYymhHaWmK8osoc"
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

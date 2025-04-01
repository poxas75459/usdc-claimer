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
    "qurnm8DafNLq2AX8f7YMDcrBpPpHSGzjXecpH2ertVPyCiQw7sUH55hwjgVRdSHU2VjJr5F3WDkwuNHKN3v7TBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eRiSDfPjvpyLguPhQaj3Af6Eu2zwWGcVWjPN78FJErjwnPegHfZaofKLFeVRjBThfBUEoSPthjYxTDT12YGnVKH",
  "key1": "aM6aeUoubWh9BrPghFQtDjXZYKGdnqbXZzA7FWfHgMRY9vNXFSzzUPWjTzvkQZJNFYF7amJiMa9jY4Gk81ohy3K",
  "key2": "2AE1KdtCUpHXzLCaNwMb91eXhz1fnTAokQAzbJTBqjbjsmHRm5XViFeLJ34aXcq9zHcAb6RPFnw3j1rczX5wu2wF",
  "key3": "2rCRiaBiH6BWhQYe4o3zRtQ3DPiN1jWeqWNAiiJfwhgak1535jryJ4ToAb5pvs7AhJEGGVwSR5ZfPgDn6nFq2XFr",
  "key4": "2ya22KhRb8tKxkhZNTyncDUwhAuyNSkUTg1e4CzZ7cVb5xhD3ighDQj4VYmFayyXBN2JuNMcLQjeULY38r3RfK2q",
  "key5": "5VGT4sfKPaXMHtTrT77ZEGtCg7ax44vQjyPFvud1sw3sw1wGMdnNEDkTqy5x3GhbYDacpWsVophVEWsrQGx2umR1",
  "key6": "5xVKbcZf6NMgMqP8mfsxfgNtitra4RTMLGiAa8zsYmGBfFZpJN9e3WmJT9EBHUkaLiajofSbJM1BExGrLF4iQNfd",
  "key7": "4A6rhCkrndExC92ahMWhTd9D1orCBMJFmvKDpJ4nuaJ8YxGPcK2o3QXcDSx4nNSdBBgouenmCirZBRm3P6iWzpwZ",
  "key8": "swfP4hBY95xPajnkB5mDfjbtgq2kxmBPi4cUEEkdzVuuQZJpkkzL1cCY684bmjQ2qGoCQmqHVBTLSFVv1cJETFo",
  "key9": "2Lap3bUfRWCCcUUjqLmhj6L538xHXsArqfRL3Mf9m1GhgNGx8bT6ngTtaDKd45mxSBFKLfZRACqG1CsEDaVSdNBj",
  "key10": "2c9R2emwHGkDEet7AVVQpXy1TXhs4a5qTvb8abP3ZhCZV2BtzAkhpHNouAW6ne84uEiWF4vZb9ThpvecJvcmYC2Y",
  "key11": "TnazqvzeWSN7gT7sjyJLwvSaPDs8ZERFbisDZFxYfYp6QYFtmGhh7D4F6QeKZ4dZPuofanpEB2V6MkgtVQzuX7a",
  "key12": "3u6fkiLyKwetpEKBih7577uV4gjZvUiznZrLuNo4GAK1j8EKbUSMjt18ndHsqxPGPUiLXQbCjxZkRZee7mkb9Vua",
  "key13": "3x2ymSmg5kgs2cigbRKpB1s7z1WZ3dJ4SrBrqad5R77fdmLBRMqWF2V2knmDqAreshkHxyUgqfRQ9QRj31Cf5Fxy",
  "key14": "DkhshUXHFpRNUx3DS8VSjD3T9chYWnf3DiLd5uCPPDAYWsYPVmGpWBCpEw5JD3fNjSNfvHCb1jswYzq5gS1HqXf",
  "key15": "2oArGh97t3pFkXbhqbbSo5gtMVGSJS5PuoKQBMd1fP5Z9JV67pmphdvTDCoYoTTy6k2u1bDpXKwc873H76gLs2WS",
  "key16": "2GgYda56Yjsyg54HqGooESi5kgc4k34b2fWckNw6kf7mRZ2kGH7ukoiRHA1YeeKvC18657yD7oKVSWwM58dnvTeZ",
  "key17": "2cVvWz34QKiFRpLf7sYTQSugXcq7ZsDsbdgeiiorXNwFxzpvMea4a4Hei285R1c9QfaSky8rnfEqiu9UroJhqYnS",
  "key18": "21VFoLVz566qTSyJijKQVen9JjUKffD2nvoUBgJMtt2RwTaE9Tgo6C8EqWjGDFGV2medoHeuX1CU2GWfVRB3ashA",
  "key19": "4ovZkkmewLYSDqkRyHwPXCqJ6VrDFoBZcFdcxkvg3ZgauJDGK5MtfzFMrnYdhvQPW1EoGye5aQo7iWXevXZNL1pZ",
  "key20": "iTQ1DGNUEmFZHq8tcjppAt4GRQmuTKdTZDdTh6mk9R6xqp4sJVxdGJtW4zsz5Wr9oR89NuPNEnZbrpbi6y8MxPZ",
  "key21": "2tzmyVbyQP1Mk6WBuezCqujeEFRwZXAWrrJTp66NpQMwDoajaUxD9i2ywhwcWxiAAQDHrmUpYXUvxT5k9M3cDNYo",
  "key22": "216efDfEdtzYwHhJLBugsssDx6iDaTAyjfFTh4GCsQHB86D74Ltofnx2f8Y9JL8h8BLao8n9JLHpncCwDXsoZy8S",
  "key23": "5rf6ABMNdAzvJA6igdfi2Xrsgn73oEtRzEJuKNwzHZQvEza1kX9wHiSS6jNZgvt9JDwbesPYXxQCNGaWUkG4XrLR",
  "key24": "3eH73nnjpFFBi6FQdPqjbTeSLzpXDZCQ2JE6h2VmwcLaJzM5s6LSFUeqD48gNWp7A4viEi2RYg8BQE9yE3YQSbsG",
  "key25": "5MGndrgCqs2cL8AQw32ZMDfymqaGfCrVb6repndXTBPBboMgzdoZgUMkjmaaKnGEfScKWKaWmfD2Qx3rZebg8MGh",
  "key26": "gtZyTQcyaLvsvdDU3eiWSkP3gkemBTQmPzTReETnZPEYyxSyT98wFfXkyyVTSicUaJDM6bGXamLTH8yFs6QQ5PX",
  "key27": "4a8rZhGj47TeWyuYvnjwWMergJpjvECURGoMjRGhh85kUEfBMZabkVgvpqhpaRzHQB4Smg2uzPLUy2PfJnj7Gto5",
  "key28": "5vrLbDGpNZJGW11RywEbxpHcYHPRPr7C8RD6wxwgrpiDhLdftTSX7J8hCduAtvz6uS4TpesmjRaEFDBnU6fXUzLN",
  "key29": "296vqmNyS1TcfmdUcBMkz2ipisSkGJFUaXz6yr9iCPSx3K5nggDpCdknDTFi9ZRokG5S83AiXQ8LRSxVJWhtR4AA",
  "key30": "2rwKhHRedrWaXBuU79FCt4NXRoQpToxs4b7i4MnndzMkmMTu212sfztN5kdt4xo1ooSi5BESDyPZyeMgqkVH7CHF",
  "key31": "33jpGjiLPM7pqgkgyhFGKaMV5MksqPcYYMh1AyKjZEMM5pyrpENRFDgz9KfJkmWPWj3iT4r2zKpJcXptPNik1QAb",
  "key32": "2YdktN1EfaX15BvUgZzPnmSNJozrJ9r4Ls9VTdQrY8oQWk12HuFU2HKRR6RPTDWbjD7SieSzWbQ2aAEpNLThEsE",
  "key33": "5D25GTyN85EW7uq8uVojLdnehCsdYGGMg4AQDyCn7XpCkFC51fAAmr8P7wFapdkr2TQC1kkcSWTsdMPnkTeSUqeF",
  "key34": "51NHRT28vFU8y4GzuZ1mudyZQyUdDBW9itgALXPwUP5QgUGb8Tz7EwjGZ9RM2mMKgAJQkyS3H8JCqPAE6qn7SvR8",
  "key35": "4naCGh2WodVQ4UFPUAYP6HzvMSCEfHcrcjuNYB4ohadQAcShhacRm96UD5xWTg6B2J7ddRUb69cL433Js5p7bg4H",
  "key36": "4jBpbhfF3ZHJq98jwppj5V5NRcSMXErtviKW54TFZFcHpp6BXbEHF2U8E82rXYSwsfWYW774gYmvkr4YyuQrSW4r",
  "key37": "5wyyrJK53KSRKKtHUt6yhYdmVGo5fh4DNGpCFw3S8HYb6QXVBwvS8JyZpnZcSMgjQrn117LgVWG4yUFme64mBSZc",
  "key38": "2fxcdWxDpWc17AKPrbj4UTLj5KX8s76bq2kRjRcYKCSK2JJuxxrBh2zykAAGFuuzBPdc4FXgGE1xM9PLUcPehTcf",
  "key39": "433HSiXacND9SCyiofqikQyXp4PPYe3x2WVF8MGkEvEYwJPgBZr5rDmBvc2Ud9mYtWHyiWR1snCzJLK6CeDV5ZgJ",
  "key40": "4QCrsqagmkjTwovySFVfgvvgGef9kzsi9g54SBEv25K1e4c7F2oaC8Ro7rsPUCHVFdNvi6Zdwuw7rhaJhcFkZouV"
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

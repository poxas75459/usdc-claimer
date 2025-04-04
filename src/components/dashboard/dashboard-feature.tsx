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
    "2CVUJeaXJMUijFim6gYyB6szxJ2QWSSgMZ2ao2u7RY1xdBXZCVVStFdgR4SMBus7XMDTC733grhoCcyi8NYoTbZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24PHpN9Q5WN5k76MzrKHbPyiFk3LavMHYyP8eBeyEYdxJqRWjBLk2rUAAfTqChHwQv4arYmJonmAPJGp5ytr7Q3g",
  "key1": "4wiJyiDXoAj9ugWUTuz3WR28NFmpUCAG67E78nYGDxDLwGXdt9EjRqe1Xuk3oueVUAAVFNAu147Wrsc9R6F2k4fd",
  "key2": "5dS8ATRDrrHAkCbqxmXVWwmz3oAXbnhNT7oTewEEXh18w1wU29E3EjS6ESDP2vBKTKmLpS1U7fqdzuSzRvSVyYoo",
  "key3": "3Z5keWZtpzEAUyFFdcUKMMUq5JckJv2seBf2YZfvhR8DXbQqTJtdskkzL52R9mVybo4waawDfoxqgc1p66GWGX2m",
  "key4": "5PkT9jLzAuxoxyLT3XveWzEfsUic1KmYnBpL8amYjRN9GAUi8ZETdHqhAqKGCejJBWKTcVwET4psfXNfZWJEqXoE",
  "key5": "3BKgmQxXVJDJsu1CXJdzsdPpettqPN2RagMyUMBugNCEErXh2rBAobMQAm7JG7jwccCGiAMv9tbpucb7YnLcshu8",
  "key6": "zNgGMYnSzKYhtYFRQH7T6Y3WQBj4CramoXQepstAP3QeGh3JZhKsUL4TvR41mMBVgKDfpAhqayYbzaRgXETRA3E",
  "key7": "4cEp3DpuFEupnqLBuHfGs2XN7hxtYyxa1Jn7FcCqL7sZrqJ74PVP2zTJ9AZfnN9AhoaHCzFbX5q3CY9WQTHu3nU6",
  "key8": "25eQr2gNmqhMdMJVzdopzM81reogiWpxkfBFYNrzD92aCZGvH9msdGattBJ9zqwWuNWZEvP3AESGH1wxbBcBkpJh",
  "key9": "5MmvbH31Eu9CLLTSEnNKutPSns7Ty1HxeV26MvGLF9UdUd4Z7wwErRoyZVNiMZsn3pYptFo1NavMCPpM3RLsP5VB",
  "key10": "9giAiYmDAr5WcwSpmD8epuZ1QVari4C3gKTkGDK6q2W96dfzmamppkA38yMCvSdENkH4gBH5bpX7tj5A287VBBU",
  "key11": "2q2atbHj7kQLaZkn7yntbbCHomUosPpP4g2RBAuf8qzZjJskREG79NrieCoWZ8PP3Tr1Q9yPJvXzUNPiPya2Xmza",
  "key12": "2NyKErduW4mfyaLEU5Thc7FFtdF1XX9oQ8hTEqWCUukLQBmGN26VEFAN6E9FNydPXEqTPK6uAZic5VEFrVbQ7GBa",
  "key13": "2xsbugLzXRriWW9v5gYq8M4LVFy6dq8SGsSWShjF4zRPCQ9C2q1jE5Q2dpXQu1shEZYQfRufPAQWYGbcPnj7ZxCm",
  "key14": "57bBDcmyubUaiqyUFcynF6giyVLwGkcnQHeiejBCnyzLp3jKAEfBYTskKS1fjWneDofc4pq94xoaTkhC8gYMg7V5",
  "key15": "G9Rj4brn9mXmKw6hULBbkqUa54VgJ9BvQHMJ7P2ofum1vsHvoh6A6Uejo5fSYbytvf2i4AUj1eEQinzEE6WGgu2",
  "key16": "jLbsFDGjZXLQtHdDgLYfeNRgMR8CBRAsZf7Nd934QJmVsn8zBJZtckdHnHWZ9LZqidSzFSDcU2ebRV8sWvBjhUQ",
  "key17": "B1MvJNQqVFianUjHCWu7nWfVjiVUW6gSf92LCwpAxj12YvjASnSw1cSFJHNcL5tpo9D8fFcWCgcMgcQysGB8Q8q",
  "key18": "6hNqwDERm56XXJPF6o2NChnummQkhkMv6YxAtZWds6eWLp3QxSSu9RmbrbehiDTtpnUzHP8wSevjk8ocRPhRYuK",
  "key19": "3xUaFEQQKh1Yjaxmu5uGGdZcUvek6ZLpmKkdfL9Bo8nGeRYz2yWfyqrNp3NEXfPCCEwYW5reu3bpcm3XiaNdovKn",
  "key20": "3QaMysiEbQaFFZCjJc6ZFY48m4ZoUYEDBzrz7CkQREVEWUNwgnx357TtkCadeECPa1omLgUsw5UjTpfBbvfKSTne",
  "key21": "3CC377DVphiUSB5LeAK7wHTKp1zWFHyj73vcdoiSBt8PzTMWkJNh6om2eMj5TEbqsqNgaC47myjJ67CcW9KgMZUt",
  "key22": "5Co2JuKn3Fp1j49WDGNehjZZhomckHW4gTX1zeYPWfQvfqEBzSFunh7TY26ibnhof6xSMsArGStkfJZtoWwQT6e4",
  "key23": "3Pqc9XvHuEGXrDghH2h21WqeJfyHnssktVU94QDLpFTBWEH2cHe4h7ryQQSaWHqPAR6zGbnoH6zknR2ttBvu4UwB",
  "key24": "4V4a7J99hzr1pjggen7j1UbH76NuZbQnv6cWxmjony9HQQNoa28rnKGNmXyW4wRPc6zzYCPnWwuVFMKM8r74tShc",
  "key25": "GysVUdMv9t9qhG5G4gcfaTK66Aec6yYfsWftrVwCCiuLGwe4fxEDd74Pei7Dmd7vC8cbruxajm42v19ahrYVKNH",
  "key26": "2W3a73Pjm9WF9cAGCHDtCq982vcvP9Zgq1XtEc9hfua38gUAnEvBgoJY6WFv1ZGfc3Yuy942z8EQu59dPCb7uoym",
  "key27": "3FbRjaHN9n7bcG6MMJ5BYFcrXjs2HzYsbr7K6zMXTKkhHKWi2bjJbSLArVAQ7yzUHbt9gjBcvcUmeKQpRcS8EmZ1",
  "key28": "3uEjoXVWdNGRM9UEeEC4vJhDrFc3fgQ84HpJuHbuaDU9wPfLZcqGH56YgiojEesftpafp3iLPG8sZ4LBXirVkpbb",
  "key29": "3zLdcpi1r8eHkqYgqdEUFBJCXhtZr3kwyB8rsJ9hsUFppG1yFgKZVbgwfgFQvqAA6Gogme1wCfGuG5aWSRiKfCa7",
  "key30": "51yd6GTdod3Lag3NjJvPBynKToDiFsZFCHGrFbrbKePPzsPp1uB8V8Bsq8jWTSM5Dcb44YhXUsahkjDGAcgxCZvb",
  "key31": "3hHwv53TGatn2VA1qQ2KgPEmfqkfHp6PE52GKWuskPuhDCkwCk1yzNUWfXVr5pUiWJL7uSYEB4qNVP6FRzRPg5tR",
  "key32": "AUGkhhPUUWBzTvs997wM63i84kEi6hzyWdmU23Y9P3tTjuyH1CrmXnByT548hkF1SWTA74QgSpWYjd7fKMMDvuP",
  "key33": "3ywyN9x4EpjX5bZ66jWpfEUJT4V5JRvYBsxPLABGY21hTKkDijpgRhqH1HQziB5NncGqtHfHqWEguQ23DC3EQB4H",
  "key34": "4kFjkwzS5yQNk6xWiL1iY8KoaLJw5AbUXv2tKioUDmKqNcbt2CUzZ9pdLurnpzHTNrYKf6RSpEkRnzXMdBYuWs2C",
  "key35": "5RJE6LLvfFeCkrcKHN7gUFFEMUpvF25CxVixgkvRifeQuxsAAWrSAXKRexFa2DRSh1oxusovdgYbZ8UuCgLS4rWT",
  "key36": "4b1cSg5zgqozPxhdQd14PLjbvkkmdv64TatgW9vhNyksqpzf8QS7KXRAkuYL7P6fANQ6ES61TLRni2Syz8bmZq9s",
  "key37": "eAPuhjUkhCvtjUxZx3ouLc2AqXT84hegjanwNdudmkU1ns1wcnp4R2RrpffeRWjGpkd9eCXdjxjZCftr5DtHBRD",
  "key38": "3qF6qSU4vb3tz7SxpHe5BDp9wpiWwd4kBZqkA1abm86ihWWDhVRzkDENgJrfrBVDC9qevPd5AJhowtcWb1We7ofR",
  "key39": "3CW4M8Gh1HHR6vBQ7Dst2ckyknUXB7HuBzK9Yh1cyrJKTuBKeA5ZQru6A4WACc7rxNUr28j7L7aKF8xA3EViVjFn",
  "key40": "5KQ9nmiDxFRLJBMKuZXJwDcgyXXq8CHMdMoKnhRPyt1PzhZQNcW7zU1Vj6q7F1ERDe9pNhYpzEYREpwK5ayt2saM"
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

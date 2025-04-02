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
    "aruc8VsXwsM2QadHT92zfUChAXNEiE85jCNMDp6MVSBxcmXwyh7EKAPAXWgo5WqsF5BrnbAevqs63mMCNvg2oa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSZsALzLvmaKtQZuSjLUAJ6ETAsbmEunystB3Rhn2QUmiB67H6R3Fj5BFXtsZPo4gKCnH91HwbkAqcp7C11mC8c",
  "key1": "2zKc8nuxT78L3DvVukERkhkAu1nNKriR6XsqXsVpeBLPZFYNYoZEzGQjcKX4sdDmhXwzD7PCzckbmCmhXTwb89P3",
  "key2": "5UNRkBRWoUbxBkzxVMTiGckfE7iqXcniqh2sLRSdwdh8ujLo3rqzbTzdpDo4CPwM9gnraxobLKLLhg69RYFRRS5m",
  "key3": "5sCnwydbRVwWqxXEQpwBmh8zgJyeYPt1H6VPskp3enRcRKhxxH6tUbk2LNaE8GcD9NYfhBS2SJaHGqmapBpasvm6",
  "key4": "2sL3xkbrjTyhTurkfDap4md9uyNT4hoTiMm7LURyjmXnHFbRSAtmHBuCvuonsnmfLaW79zKT3Uuwv8qjCFtPbaJh",
  "key5": "2xq2gfjQszQ9tdaezbMsQ6VrnHDFHtAe5BPyAEshUEtcbYzAeRtzBeECSPgBz29HQLvHANCVQ9vcvyKSvAbA133s",
  "key6": "nEnvku6vkqQMZXpu9MDTTiRqNvtDGm8dv7ENPnzK5HFPwGqaF1FApq1jP6Ys7uVk9S8BTLwEGq4JAB8SQvRDE5g",
  "key7": "5d3XyugLDePFaHJbxHdZoGCUn3QxXrwwJAEzA3pRoFyA9wY5QsQSb4daUHGMxndNeTGhnqBTuFws1xRtfpQcweTA",
  "key8": "uCNuAxm7SqJGDmCgpXMEtz8pJMDhqXL8maMtZrT6FGdP31dzy7dKCw1oLdDnEJGs7ZyQA2p4Vrvu92UzW8Mu4sE",
  "key9": "4rYDyVmt5ERHzNZq7N7cZoGnFviBH1cupyNCJtALVSU116vASULazZEbw6PGmFvcgKte7gFgVSkZfA7yjGS4y2oy",
  "key10": "4yTAMp3buADLJAdCKdBgQkkT9Sp2kDBYMzCGMrG4NqQXooqQDMUR3gYTNgiZXVJbqU4S7SxhtgLu2Yamgq3qJAPx",
  "key11": "3v1n475KKSYGxeyBJhBU1yVdg2gxBpr5nigLjnqAX1DgMokCnyqjVVYFdnjToyAUYL79RNXnqQRd1EkeTFWSoNpR",
  "key12": "3fS3YzwnDFKSbEXrPHUrXZX87FKHFqWxPsYyRRs3Ng5FJ9AjFdHkyHGsLkGuP4UHB7k5vWFZ8QFXJHGwUcmd5DCc",
  "key13": "8qiC56kmKeGAv2y1toXsBiMUPcwS3cjLbjLydE68oTZN7Dn21jrJ46EvyVokEzA9drFb9mF439EG26S5RpnJvvG",
  "key14": "3fXqt9WBPDD8cfjcmZpXCe7U9n24cdjKpoJt3x9hNw1opynfejdSNa9G4uGLwdXPdD4JisCQRJLa65c6BRAHps5n",
  "key15": "2jih9GfdcED3Fx4ZMbc7Kx7sWgAnpEZULvs7CZUhk4UedQmjnzswp6gZBxThjQG4WyY2g8BkKCW2oHvudeMC68VD",
  "key16": "5e5Hcsk79C2bXgKFB2vgS5rn1fjr59mGMSv1rha3Fot96c9EN3Qxqsykd35jJhsvDNAPhqpSRNRemZWw8Rv5YpSJ",
  "key17": "4aMRReQBkwHRrUaXz6DX3t6Zx55kSxdUywzxTH4HtEPn6yaDjD3unHE7KBPQsUXWMSYiPpdnNzBBJmC7FhTk3xE",
  "key18": "398sJg2qPbVZimB16JQqeczFw95nHYKzWrbcnVEtkjsrQtYDTVCCCVCZ7yzPLanp6VPMtrCy5TLbiyPc9K61NA1J",
  "key19": "5sSri6fhaxs7wUCCC7J38VFnjtHEk7ABpPKbDp1bGka6BaYrLvHVAxAeUTLGv8MCAgWPkDsALMRzrE2zEFciSAif",
  "key20": "5mRZMF9bVMVKqyjQC5LYaD2izSdH3rftqRqNwkyGfiF6dHv9F9TyidgpPpqvZFWorUzJC6yD26v8FbnCxdqDc19z",
  "key21": "3mbfYy3UXKpoLdUh4NTaS8u8pnUV1o9X5MTr1atoww2Pcoh6VXzTq5iiSL3QSUMApgQvs9BXdpF9EbyBTuyUoAjY",
  "key22": "41Mz97Rj478CpCb6Ld1LYQTAnoJCJXN8LHzbFWzX7Mr5SdFAJgEpY5WJbdsspqA2mNrRBh3MutNTjnZpLcxLVnSY",
  "key23": "FbALEeZCqE88RmqxRBhfNXJzhe329Q1A9m7eJToSoXyKTuGAV9TabfcGfAaYrkWkrkg7tRvC5xr5NV65ckdMb6S",
  "key24": "3QS3HfNeo4ssJQQs13oVo1sp95g1Vco49Lji2o48R1BVjf8gDAravkcoLiJu8oufFwd76Dy4MhmDtM3pjSChSBGh",
  "key25": "5CdWbNNFxVFRT9EBo2QgdiLiMVUfoiwnhoXP2d24Bab7HPDSdDbTKK4VL9BAF2xziL7Few3g6JBQ2oV11iEnTbdV",
  "key26": "4ohbSec3hVuAZJbH3ostoXSrY62sjn7zb5RXZAWv9GigkjGq4LUFsWRJJiUk4ohZDr6uiGcbPdjMEXnzNdC5HekQ",
  "key27": "3QK2CuFSR5o87732NNY9jqxmcZjGfEZaQcxyz61XJa5WyoRKmxF1jgS2NB9v5NQeq8TAa5uidJZYghrhzaQdk2gU",
  "key28": "x1PTHWpXmrthBRLNvBTL2yq4WdfQt291W7dJwdtrnAgnFj48W8Qnz7GLsUy1XNUJAi9Cbe313kbJZTEg8arsMEF",
  "key29": "3CNJZdtdEUuQSWjvAKrmwBcMuQPGoMzQRHdhBetZywXF5Kq1z8mE7zT5zh5q8Xbywwmv1JmXUy4xxXZeYk8PimKE",
  "key30": "4mHXcWyJ9RBzi8P7dWLLrj91QtRXYmupx2cceRiWbjAGCn7KeC5TYUE9BiY5Cykff5qAP4tpqfXK9pvsWA3xwKBm",
  "key31": "4XQRxakd45s66EbzcfkEaXvdgwPbt8JGMQiSMqKR4N1MNTBz7zxQig4ESw7kofbPbL4NswxEBPjBuBJ7R6BXcpZq",
  "key32": "26xi7c7ywa6jAC9C8WnBkEicmKUmD3HAi6jp7GxTcgBfV5GjR2JS5Y3XM5NTRrru1Hy1qe7pKCXLVg7UmedyU7JE",
  "key33": "5YpiRp8Lv5iQaXuXRjdL37WQBbeP7HaPFWmZA5f3Jkhr3EN9ei2q1yc3YZ3yHWBrVggN24qu6hd243q1SEP7f2Ab",
  "key34": "4JPAjya56ABvtXvC3XjAEnSYJVFm6qtmduin1njxT4TrZdJ6GkTRBMMpyWaJt62Tu2xK5izrKMVKvMRyPPZBp8vx",
  "key35": "4Y4sfaGwQz36B6qW7zcqjhKmzdJSKDzj5kpP5ksnFqMha5bozV27req2ecgLzB7o8g4S9rJJTGG4rG9Vv1UzZxtC",
  "key36": "3WYWh2ik94d7ZecqWTPYauawxZVtM7vzyn3bKSt6judQ6D78EkrnmehiWb2cspsP2fx33UtF28keruj46pXBbEtz",
  "key37": "2r2crJBc81t7a17EgzuPFsAJwoihRzaePxB59zrzXQzGCrm5gymB2ecwdHFvtN7zGZP1cux3kgcVsns3BYyNaaqV",
  "key38": "5Vpxvt4H6Natx4rnV6zUiECHjT2rHL8noFwBBEAeRp7vRQ1eGARG8zgkyN1kfqzZn7q7QgBQNfuyCqvL9gKQVUiQ"
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

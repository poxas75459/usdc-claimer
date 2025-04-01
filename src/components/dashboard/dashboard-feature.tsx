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
    "2QCs81egVdssJu9wV55dPKoR8SPB6jubeWcL358sUfEAEXXNrfBxdTS6XwB47Kx7eyhLAycBrNNTZfjK1MVxWYkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ttTjYPgMaZRKzefa6FRbt3kVSZnPiNN7YhcKkymvjFvqTpxqdg5fZcszSxjdbYDr4tcZudueYn438pjoaCNP2ji",
  "key1": "45TP17sCokS9ySbjUozzrcnkr8w1jPtRx3tR4Uv14PXXBeby2E3kNDoLfZMQYV4K3LqGqMgSRpQid1cicvmTomPn",
  "key2": "3qShkcqhFb7QZxNdKUswvcdVmHFNzg7gcM4LousmH5YCszz9ypDmfSDJhrLT2Lfz1zgHyKmqAepKpUP2cG8fMWVb",
  "key3": "5PD974L9NoyBhNSuR91Emdd9kF71KBoLizY522aZo1uKKMzDrggh64Eh9jGmcRCXDj7SoHsPNhTEXgH6hNB6gJER",
  "key4": "2HRuVCbM365kLEAoGNYdcmM5PBjYJJAGPcgFeqfc4EMVBs9qTxNNNoqmTBC5W4jkJ5sn8mpcdPqy3pEvK64GEmzF",
  "key5": "4nUgQ6j7czyJjrpm6cH8CGZW24MEeP3yMEQaZouDzJUddvvMz4zuJsVnWwRoEDDofkDiohoMYyx3cRfi8DjftBTs",
  "key6": "L8jbLzofodJQfNVQhKc4zBWBXBqGwUjMdxeqH4kwBetteFSCzUu6LXCtVScp4G2u5JGzJJ4mAyfonAoQDT3oRWo",
  "key7": "4sSxvZTJeebjrSRg6EDoP2gJdPY7Aohr7AzcAtXxkoXbYup4P9JeTxSr2c1jMV1e99byXpxRPa7cfGccsnASFcG3",
  "key8": "4wFXEysjSzRXxg3C3UUTkdz4tenCPgrQxh4XWFyuCsdvWL7uK1jM23E2qDnqgykBrEqQj3DNgSjtzzS99jaCDBdf",
  "key9": "361cyXVTpqPwUkT6AiYAbPM3A4X79Pzr9kWUqoJ5iaAVfWYbdh7U7JbqLZr18yWkbd1jFu41XbVfawPPH1m61SqG",
  "key10": "GvtnyL2TCW4Refns3TYaqoecJ5kvmjotzNodDfu1o4rTLj36oyA6rETHG1uU22oyM5q6pUZGmmnaLLHfgmMR5mf",
  "key11": "5A5XvYuRqaf4VofzzdViD11pTRWWGw8VTMgMw1RHtvdPk5wFdK5NjZDxjzyM983XAeqDwsc5qca3Rg8hSiLfRWWz",
  "key12": "2YgQLztvG6FP5WDeVuZ3yYHfS6cjLYUU77KvvdZpJnWAeYHThLmRd9xpMprub1QKzA3PtBLVMqRHcZC17oiVWCri",
  "key13": "3zF5xSxSx44gNcsWgQBefywB6xvs3iyNWdYJCgECEtUAeuGaBHAT1YFpF4vaanM9nfV37M8FD81pWCSAZeQtrnbt",
  "key14": "5kkWvVNZouyWGRfRR3x8EksctPVdPSoYYzRmFqUXeVa7a32iCHzswKvu6hXNbjW9adEHcDQ8M5bqc1E12kfwfzKe",
  "key15": "25uMgqZeG3ismYwZAb5pTcnDmLvRv9DqAPnisY3hx9VsFD4v5sHvN2kvenSw63rtmhZMaBVWp5kgH34Lb6dEXNgA",
  "key16": "2YWfMWJ42QxQb67QFMtg65bGCQj1PrA9NPmyJ6dCn9C7cW42XbpdqTjKc21jKhPfedHcVWhGwqF6iJ9CYbWWo2Z9",
  "key17": "PThyYTJ7gqrbKaH2eyLTc94qrvPi6rG3VZgQ6L6bDVvuP8HG8nKzFPEB2FfYCoQJgkg9oxBnvuYCdbjT4zPadfw",
  "key18": "3FWQKEkHvoyqUFec34RvVtzPq3YDZrAvJ8C55tydMh7F855AoB2UHhTjwNTk7Fnqeq9D9ZFmACW95u5s4wP1WNoU",
  "key19": "66E7UqGrCFFPeg5rxsM5jCMiqt9NnrR5r8AkA6saZi8vBzrzsWvysPVHatM5J9aMxWFxn6EsdV2dx1taENhYeeaf",
  "key20": "24zzS85J2qb2Sqd2isAWMaWEn3zBc6aemWRfWtRHWzVTSVFS9ExeDEhG8xAynQU7b6doSgKZuheDqgiFi9yy371h",
  "key21": "2wwVia9hnnyiiXguJza1uhiFckEP2xgqWZyUVX379q3FdbgZu5yCrSQnHpx8bTivQjhJUq7FNFZ2V32QexMh3Ygb",
  "key22": "3JCmXZWeknWRgt1aebv4fBm38MTLcxr21CXKkFtnYWRKvFKR5T7aXQoNwZVmFkYAAuzhjLs9H3cFEM9VbJGhXSD7",
  "key23": "6mQURykWetW4Dsy9XtmZyXuYF4KdDaUj9rUYya2wDpvirfeMxh7avazMSQc8CChSGSArdmjh5BjLNjuLrpYoKTn",
  "key24": "U3KKruw6955AK5qYnuV1ZDVE7bKXgxRs7KZF1tzvoSisFEs91QwWsYtdxAcKvLeaTLN8B661yPFY52A6jTrrUWb",
  "key25": "ZSPvgcugH548XPDtjywc43UN2j58JqCYZYAkY5MCWpgUAFkLbs91Xu8WvPPhZGgHYjafJsy5dfU31VZjFx2DEr1",
  "key26": "2gz47m78DWMsj9zqaXg3dv4n4o8Q2oHmx2vFAWLejDS4K96FBysFUUQqqUkzVsJtMokVNMUk9SiY8ehGkEzKvtEs",
  "key27": "3ozT1gDZtXL6uz5kyxaSnmqDWqkC5XBniCUuGqzJ6riySAAo4fg6Fxsp2P18UU2iAbDsFR4Vy2UGwzkqvS3xu8Ma",
  "key28": "ysyJPHR9dzGrczgvF4X4oZ1cvwHgKt2Q4TgytbqaomBgYTEtSf3aMWtPLBrveoyV9oXBH1ERT35maHG4NywbgxL",
  "key29": "3zKFFFj2zM94bkciKAmPWDngUrQUAv9kno8nWj7XUNBekVQNgfRWtpvNskZCcxkWAYWDPaPxXd9Wh9LCts1322oh",
  "key30": "3b9bUiEKBNUMWLfqPD5kbPpNw3Xy2AavKFXnFcBntnkzQkowMoo8pyvRwsYDoSfU4m9RN6VGrRJWZfEKq6KzmrUA",
  "key31": "3DfHAxPJV9cxW2EiqCwsp76qofGQrM7Dh1ZRyTT7c3CzTwPury6B6RBUAgZ7pmsrrszm4H9jJkYs91cv93269DzB",
  "key32": "3D8fHEz3mTtMrB87H7iPrRtRbHhxdCVgT7cF1sgNpDr2HHLHfJAzkxWvbD7GvGZ7QMbVVu1YM6biMTcdNGFix5ar",
  "key33": "5VumqWsiQrg586cwVoVMbHvfU6VuRNYTEUJHGG1HZDsQTMEXZUpXwSxSaF9pA9dVeNJG2GWiXnjvHpGqREv2T2Dm",
  "key34": "eGQnfELeD6ymzANZKZD3SmVwYnfXCtD4shm7cR2xGvpQ5LtrBmLXLeAX299JxqDFJh15NUDoEsLq9TkMACpcVhH",
  "key35": "2BXFxeyYHZpiUAeLRdaazDyqNEBmHLXFaMiC77FpXqpauJBHukUsze1nBuGooNeU15eMSPDBrSPe7s5FWXXuY6wZ"
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

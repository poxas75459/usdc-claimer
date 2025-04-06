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
    "aNfCahuctdmDW82UhtwiMr9ZUsj6FGQ3Nd3qGkNfrTUcHLWUaKQmoqUdQyNVzaJKqGSNLxuS8dfHx82W6zwBDtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFYzi1NoabGB3igU8M8rMTxoMNxcnNUrsZjkLttSjbxAze1QBN9edb9yYtW1ehvtMb1ebnwVQve6JyyajwbczM8",
  "key1": "26Ekjsex2Vbu9X2pLcHfxRgudQKwGx5ojvk6k8M8mKmVNDhHdL5C6TCVhpEiM1gaTtVtkgQB1Zshsxm9Ssca6wD8",
  "key2": "4c8odTHj9HSrVca4gGBQ9KVD5zeVApHmVGVAELuiaA7ehsXdqpEU7WPmzdtm8VSJNLafPfc9BzXK7989A8Abixwu",
  "key3": "4BzhXaSeq77vjcQQndkdtz3YwmGy3mAczcEGpE5yZVUcJtwSx8ihYdJ3eYR6ufsFz73ubAUADLgzopamvZM2V899",
  "key4": "28o9gNaosuPmrPnXwyvSpx2iuojj623MwJP4QbaBaiA7Tg29pWkRvFdbMELrevfhJRUBqGADTvja6s2XMC4hXgRZ",
  "key5": "128ckGnQevFVUAytpB6WFwUkznmKmLR1QgdpGJp4vXUf54DHe1CCY2MnjHx8cGgME61shzodH7QDRj6LsUdhh52m",
  "key6": "4pqFXWGAUZ618jLu14rqgw88bzuN5CFpuHeUfnR2vyvuFmyhJuMpPS7VBAZ8tKP8cMsY6myyKjuJHZYxfZ14tQLF",
  "key7": "54r5D8fhrjhN7xW6H3hxTEaoaevSUpNSGh4MCvpXP8HaV9hFjpLUgGn8yXDMnSZohYFYireSug8nGJzZGnJCD3ST",
  "key8": "2uMq1bptsjt34mt9BUgVyPfwezkNJqYLwLDtboBJZzy4Luavpy37ubgRj2KaXZAcrYiVa8k9V2S9HuzmwBL57Fv8",
  "key9": "3jVqK8JtxQfqP8wnQcH7L7GUUWvuPWnUFtmSRAthECx4T8xkwdiYRkbrnfqx6xymxKukjC1ZDmGf5ZXaBFzhduu4",
  "key10": "2CCRghsHn9KQv927ABFzK4yrRYPfKvnd9vNUmPTuati5i7omJbNLjU2KXEpe74ZS7AbYDZ3Li7yw5qJ4T3JmCVyd",
  "key11": "iNyUBmtrWWQ2uuwa1QP2AyYaetxcqL8vMj6p68BNqMCUxTjDyw7sACceWDyTr2Djh1XECsyczyXVhugFtC7pLFv",
  "key12": "3NNc39HxqKdJFBh618Hgb8BG338PiXiw3nyfa5J1Mz3bWKQA8hWHD6VyECMVsaXLN7dWdZkAZnDAFXGFhQG7LWZt",
  "key13": "u2wh8k62N9WTWLbiD7oLgUGM3ydaehBHkMicqXS17AxSTh7HqGPu1mnAYdYnkPRZEMrzYY9K6rf69nq5fKUDo6t",
  "key14": "wcXRmLNRqKqjBnTNAn7fw5CAbc7LV31uLyDLfoh2FTXmdvaBrLcNLQWbRyW6xG84pzy4bNmgKTPEdspf7B6f2md",
  "key15": "3zmN7Ky3JaCR2wzJBFUZMUKzNJgFkti7tUiNb2AX8sfachFEDP1wLiqxYS25YioDTiC8EQMmG1DEdb19MoUUoNE6",
  "key16": "4uLcyxNDXXLPpVWEs5w32uRCa4yyJYhS1KZ1JXa5i3zCj4tJPDoiN8zmyhi6KPqhz4DJE7oLqK5UnoRPy1mbPTmW",
  "key17": "3ni5BELyTYNXn12md3iKC883qfUHP4hCBojbo3Z41Fs8FbaAGcdQxawXWnE8T5iAq2YRkRewV8bhBTg8gYrWNqYh",
  "key18": "3t53Z1qgH3J1m7LA79FR664zA5SpM26nNwNCktwCnWSfJT7PG4QbQuXucXcjhhNdpKSLZX2Xd4D9kqKkg8XxXSX4",
  "key19": "V19ztS4f4iZPuX82k4sgHoFaW3vYp8DvP58ZkXZ9LSbKcChYVBQ3gam4PNmDxeU1GJXeDwnv6FNoC28MWevtxgg",
  "key20": "5vKmmYFKBADxcfmCuRk4DNmc4hEeXUJ18d9i9t2Y3Qjo5xfRux7WASaBoxBU8DrqZyoQfqzk9tteZ58L8tBnBNmh",
  "key21": "j7d2QuWjWeih27y35bveM1p8ZVEmFSadv3WntsBMnvbxMXJJtKQsWSa97VukEusEC6aAj2gX37UiABTL5uMb6zZ",
  "key22": "5DGpfXQRHHEMXmWtG4Cf523ERuu8W1Hv3KgC5s8ZdZCJeWfyEJPjH3BridcAuFsiBhkuHzAdRyqXZZbQpeRmn6X3",
  "key23": "2Hdtde7VGtPK2yz8CNZYpujQFtDbtrUYhkffvBvv8s31CDZ7LWUo2QS8wNsnvfux9XWnrDx7iJWAkKPUzEyL7kV7",
  "key24": "7WLzmqgFmkm23Mgi7LtYW4T72bSu8ijtkLYZV36L7HLfUsRMbqb17EepCkKZkm2k4BtgLfHsn7SBAkZnTzfLHrw",
  "key25": "CjXZdHPs9GLar9swhUn1pqTWG8N31VBUzzUSrXZCm1uBGztpZ8r2ZxBV78ePLNuAKD1HFzXY7fiimGqUYRgnLyr",
  "key26": "djnPQPkeUoGwLjKYU6YxxggsTGb4AZ5b8t9URsHhnXooVHUuGA3NRrtuXMsCtmvwSwWeUstavMaYaN9WMJ4DiUh",
  "key27": "5nd1Xfy4Y6iRjQ8x2pAYw5WJ6wTQuwqmVBraCKtYmZF2s2vZ1Rw2jz8W6wYqDrPipio6H4qYQHyDmVgJ6MCYFzzj",
  "key28": "miMf8wTEBiqAgyrWE5BMV1VEFtcvdfViMSMx29p7uE6Ghb4SooLmkqRTdC94pkbJNhgwGP9434Bs7wVuqDxcV3A",
  "key29": "63Wi27gMvox3s5LQFtQoTtYLfjvvY4AZAyrZr3sNsnRyKYRPh3FNbai2pb5dcDaag5WHebUngSrcFCgyXza49Ap9",
  "key30": "3XMahqHg3VyYyLytVzq9FEX2Sk1Sj66zdof11PuAeRNJtciEquqnxAMH8gmnhr18mnHmQ5yC77vr8F28BuCacfdm",
  "key31": "2mJe4XPxg8L368WNUMQ5MPGyQp4PAhVvcM4XUw5DjU93a1FcMLqop1aeUqzEAxA6rNW3sKhnDHEeV5V1t4ormdGy",
  "key32": "2HAaKeuqgVbKWn1hJNacnqvvDjBUBsXgWxCNqfR1GmnHxubewodmLQwVxmRKuu9aMYKd7wUxzDDc5oq1Aszf3waw",
  "key33": "48stnuBbTZF4X79xJUzvAvYRind3uKwo69PjuJCEBSiEttmdVyADUMQkuoHjsfjUUt6vtJwWgYVnPrqrxQHW4iKi",
  "key34": "2R4eqMrzu83WgGsq2bCbJgzCk1PRRaK7Yx75KVthQsqecxozB1esJy2tsgCCzEU8TW6y3qdEF6exNrTDDQ8gkq6x",
  "key35": "28tzCoimepSjSb39RnfcXDHzSwKTcaXkNuMiXRpwofpJFJao6Q7gnbjTn7zUgFMBtCnBtSfb8uV7dp64gV46xYor"
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

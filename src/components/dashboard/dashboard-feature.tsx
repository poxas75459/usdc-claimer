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
    "5W5stcCq9MCFCf5dPqKqkKYamcQsDRP5QAai7b9UgbCpdBvyV1xjDRTkvQKukANAYFRteiwYX6G8YjQCLAiAhtPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TdHqsE51QxSHrEFgRn8StauM6HbNrsKRX9FzS7HUqC9T1pfEuA2xQSSe8FEoFQEAhpHpRjyjpZJ6nGssoMEB6fq",
  "key1": "5dGmhpAbFkB8P6aACAiSExdm8oVEySDBK94RJRgg1XexX1QFM5ygMape22ehbqaPtBQW5k5PDF6LT118xq6W8ncu",
  "key2": "3Pkdr4bFuvojgFMi7bPMUu7cJZ8cTPuFKrbBdt2fyJQLQCf9cCfaotzMdP4LudVGhF2ftk1TzpAW6ttnzpTurhNF",
  "key3": "4122FZ1Kg8qfeNGn87au5iBjMRvvvj6RUokKdZiCG4k6F27qJa748WdcF5NxQ5xAmF2RWExQgZ3ZXwxpdb2mEZQN",
  "key4": "4KvrZtWM9An3pTH9n1YfyzXdaYcF317zUsQENLDtB66hvE3JHqLCdJ3r7v7L6cgCHtbdbyCqwBUbBmGs9H9sqMMn",
  "key5": "2hCgR9faCYRY1g79dnq9MUAuXJ4mpHm3yCT6cTgSoZYXHwzjFPtxeL2NK3fnj139MPLeSdcs6WK4FL5NWsbmvZNx",
  "key6": "4SitQHpn2jcKVKqNiyVpFTgaYrhx9K1dXdewyh1xaiy2ieP96rEAsUXfMxkokUCXgr133Dv2C2a8MAysmtgvyrXL",
  "key7": "4fDFvseDGtyehiBUQgDLLQCAA9YX2QxhvXiFWyJ3xTDQsDQh47Af8HG4C5smDBBzvfAvRN2MA8uvGWFty1aS8EBa",
  "key8": "3tJe8JLodVxs8iBw4iT5TLDBYZQSWjoGuRA65CqHctRTnArWjCMB31irfh2pRjmeYHYP7xNc6VoSUcy2jiiA4kAi",
  "key9": "4PbcFtqhmajH5LAhLGVhvdpCYgD4MmQoUtU3zyPeFJGXaxvpJiYJVQQnbLmVdDxpVsDXBbFHh3pjmuA9TS8f5bHv",
  "key10": "2E53KbSdTfeqUFgUXeTjGo8f193AxPXP7wMiMRPegpSQZwaEui1AJXymubzCwZUhNy9QhU26BLwjPba99n9p15Ms",
  "key11": "PDjKEKCuD2QgbUMtpEsg5NqpYP4tf7LfJMzgwLYxsrnkjAUnVDMgMmApun3mxR2ZSYiWhk85udJJQjMT2f1RJTB",
  "key12": "4GTceSXbwL1uEtCmPXszpGqCxoDeG1ouq2sdLnttTj1LzaEhBwnvRkB7toESua9Ueicp9oZiHMKAWdApEuCgfsTN",
  "key13": "bZZEURag87EiNQGvEovk1egZ9rvFWynXn2NDPv9E1QTs6X2cT2NjtFpzVuYKGJ8oXiQ5mMrwj4HfZDjCHC6QVRZ",
  "key14": "4EHTdofXcyME52uzLJqnSUVegvkHVgiRdjLvLkEtcJ6RbR2jmrTdEQc7hA8rGebCTaQnZJbhyFwkhzwwo2GnAB5L",
  "key15": "3pgtW5tVq5NHyGrn7KkJ555mn88JERMHFhCtJJBwUPvb92eLozWT5jcm9f7yCSUeGu6Y5f1Gtc3WaV2hwXT5BbmL",
  "key16": "56y7cLWX44xUeZXYZfEa43u1iwvbc2gz6kvNWLDLdWX22FU5hgKbGkLh6yuPTdUnRk3V6Boo79nvgYvZzXEgLKMM",
  "key17": "3rddEYKWGaXsnDUnGvjFCoM6PUqZp6pBVAaPJkAkwPNw3KYdXHPTe1KvUtdfsDiDxmuz4DoJXrFmZb113aywUDPu",
  "key18": "UQyQRdJuJ6q9m1ZvcbEgPhA2HkFcd4DL64X9ndr9Zm2ggJ1oDmW1cLJCGxyQmqsnkRL2d8ewUxn7LJgCYsMCA7T",
  "key19": "5tmAcK7PHJusEuzp8rEL4zP7qKJGLLZMD8QXEkQMPpRFzXJmLxsViLMp9gQ5NG1WNXgxLBD5ScsQr1UDGQnjozLT",
  "key20": "22vy1H4rjoDakNo9ayTet19TeReUnSks6vQQWAfGxpkk8QDiiXD3NEdiksvKvJaaSrN37eLERhu87zqyn7HGd1sq",
  "key21": "2E2KwhBKubNbHutty6nsgKqB7Mi2VRMzSosx3AZuM5MpUz6Qekjhf4zEifBd1h5RGtoAc8hCmmkXzmCqYH2NP9tz",
  "key22": "5Wsyk9PUzzMzJu3D8eC5imrJ4867nYZqNiqh2GefsFDhWNUkDpiNef4EkSijxVTPckoe3oCMBWSJk8nCXb967iqc",
  "key23": "17eBPtXmMFSKonJyEKnjGUwqotUxPZzVcE2aY7QACPbDG88BfLP9LE5erA1CGBYbMW8WL9XDXgom2aSHcyANNRi",
  "key24": "2RyecLCoZ7mcosje84dJXevqQYbkHymN3hviEJ2oPAHxipdiAAY8R8kddiCiU5xJTPC3FTtYaiXNUACsp8nXHNcs",
  "key25": "2AHFZt7YUgoyAAaUdW31QDyXdyTt99NURUBSHueLMBg8V9hYS8vkY2iHYUAjR7QKxj9park2LDhnCLYYb6obwG7M",
  "key26": "5WbkMqry3pn89Sozfena5EagU6oV3QEBXu5DbEzB2bzYLsYB51MqkN3jRsyhaC4Qj1egaVVQpkzEHD2miLy7A5Ww",
  "key27": "4iGoTUogFTt5Z5QtKbn1ptVdD9NmgqaJXiSv6dyqXXzPcbKceLivCSX7ND8BPNXw7AvZSo1UYvZMKHeAGVpHQiuX",
  "key28": "5tAZ6NPTEji1SKgX7rGJixmeKyjexHo6EDHgK85x91SBNwfwnjFSxnVeMstcCN3g6ezswcieRHFviV96pRttnPY3",
  "key29": "5sT4AG4Q8xxTNeJxYb5PGVp6X219qzQhcth8LhUpBJCcGmKsKHDPYUdR5aH88RzDX2ZfvSydQvuFtriS4oVhcU61",
  "key30": "3a74xhJb4M7MbHxR2WCapiaXmxR5U6YbjqGwZrx5ZSg9b1AyrJqYeccCxh9LCyPojgy4G2c6UVVh2xZ5P8cMhMW2",
  "key31": "PjSvc2gY7P57PG6q8GQbtqwhpqWxVprYBenitZxXJZ8XW1TgsQSNYaaUHbry4F7P7ovfdfbsukJqL6jZ7kix93H",
  "key32": "5YQmoieE5aE674CYFGZXx3s8nRAsoTnGjos7v554s1iFoXptZQwmDeba5UEcMbqcWajWmVDQKU67C3TSYLtiPx74",
  "key33": "5fWWq3yUHQeHj8VZowVjB5PNyaVZ8EYCNC9kbE6hZ3VfKvDPiSoo6RmmznqF1hyzfEnJwWLG3RurcBfFUybxLx7C",
  "key34": "3iDwj2kLBj4qG1Wk8ouQrpvRZknqNSUXYeixp9Kwviy9nVGxv1R6mYM3HQJrb55sn2XKZAbagR6RSEf92MKxfNA6",
  "key35": "2bEY3hTs2voRmqxNyZ1zeG5t7CD6nKJHivNWD6mW551U71RVvziMbn3r1Xy7rt8Ks4BhDZ53uJTs3Ucmg3dmrAwq",
  "key36": "5AfFduxnvRTCwvhZjjxdjaAbaRvKSJF7m4WC7YejrResEvpud1rdvCbAPS1MauVy8EYoZoqDMKQj5M9V8tBQjniP",
  "key37": "4a6F8u5ZgHuFcfRFpjjeZ6xMU5uboQQJtmegjUbtBFKAziXUi7eVXqBeLM2rS1hVe3X16e22AiumnQoRDhcfjCe2",
  "key38": "4Gobf6wF3wnzGZvmxys1eXX47P5ASys9bxhA9AKk3aCMxkUtYU7H2SYjPPBvYxC2N5dAeUzSwaPb1JgGxEdcup1Q",
  "key39": "5VnRVQNSZCA5dxNF6Am3qshMZAcQr8AYsLGM1HpDYQhefU8V56ohuNLBtVHnzRQbjaVVQisQWDwPoTNqm9gcGAn6",
  "key40": "4fvoKYGRT8iRdFwxssD3iJXGd3gEjUAoBCCBeCoHBHX5oH83V1w9MumZKf673U89wyvebx2jKpvKs6XVewVKNB1s",
  "key41": "2rTs6RcSzpeuA4yco3mXBvuKUBTFTCmCXRrmdUt2ytjC89yrPU8qWBTYuB98tQpWQdVxZgrnYHrsVTBpLKdAhzFZ",
  "key42": "2ourZ3WiRZboNMXpJZEF95jLfWkivnEWrJNZRVdC5T2z8QTKZEhWugnMA8okBiGAWRT3WhoemaK6zyX7MNL5NaqE",
  "key43": "3VpxwYKV3iwVFz4aMCBi2LmLSQ3Mk6oXYZubvtfvrrXvCNGVpwSwv2m5teG3PmsXzjrksG9wZGv147LCoPKeMZLV",
  "key44": "2bSqPE9oW8uCBvAiUdPgLqUv7WABwHyaB7WQDfCaNBUKTdR5Ap1VS7YVGNy5JgqX9HL4atU2ZFH8fAeGabMcrjdM",
  "key45": "3GyLZDumyZ2mZDRWVrMKcrLmKxhkDvEBoBGP6Cd1rNrNvjXAEETEQMxQMbcpoiUYV6gvSAj1rnXXYqi41mYThpHH",
  "key46": "UAPdEmUSUTdisPvi9fhVUKqo8sVuwvK1SCkskW4X85XVdReGbyhdLjfizBaSYe7dfAnijAUVdsq5kdawFukcQiS",
  "key47": "vMooLLTDFG3a83J8QVbZwMyN36mGpZ6JEtBMvCtjhvj7dXa4PFH5sBtzGaiw729z5MCw52iaSMumM78thd9pHEH"
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

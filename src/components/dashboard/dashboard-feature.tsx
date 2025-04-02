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
    "52aABWVq2Pu7tpUnAhZabU9etE2HmnyJszjmSDzS8F7hQbxQ7zbxLfjc4KA8LoP5dGFc56k2H9PK5aZeqkFZ8Eui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s653g13sewaefeEtGijzTYNtQbPces5u69zpyGPG8ReeirHAKUEztkEmvs6wVaZ7Sdt5R5jHgE9nRMf5YtYQ3zV",
  "key1": "32pijrmy9usxCk9VHyN9A2eo8nZQxUZTiyuA561DwPzZu8R45sdjKnXDYsY5q9PRjkeLxCDFSRWMmPRVEprqHKoy",
  "key2": "5wzH1kxekmBppTU9hsQ9YjFY8j9BgCHPxNi6NmPmkkX83gYsGtp7wkvfTPv663TdUkhRT9qbSrUgkaAL5CirmfuT",
  "key3": "2h5kjAKs64SNDhzSeiWMus2HMHKKxFZBBsZCnbvep5yVzJKnvJr6a4fToAdzU87FBNLEqNT3vFz6VQxxNZHt6TuC",
  "key4": "XJtsdG5U7BceYpfA6YrzkZFwZnREfEPxKQjcF7X6QjcRzb4aTLZRzJRQ3pL42quRrzBj7z9uxMC3NV3R3guUR57",
  "key5": "Aiiu8CCchjHSdEXfUQ2mtxREewhNm3to1dgPdycKM93P17QWcrMeZqV1axFABgc5PUNcDzeerMXq8UwUn75THG4",
  "key6": "3qrvBbvCVX5J597i9HbMzrFFgyV5AcfJwQcebojjdLBbnxTWytxGsZetFuksLRMTfUArUBXLnNKpDFFESTeNBmqr",
  "key7": "3Jwi85yPCrdkUNt8gBNYF1yptyaXTcFLMtxbSA8QQGR1gzuZ1imuiKJQ8P3TP6wVe7qNQD2rCLKrvpK9kpimKMqd",
  "key8": "4AnykEcDmFgYya5ng3rCURbQWkcPsHAa6im2iGyNrREVDrmXmXPJF5HepuhLFxJ6Pa1eSyf7nEiavxi9MhFGSkDq",
  "key9": "34DN9dHh2NWzrktVdJatKhH9x4w8d5Pai265uoXNtAPY2LascDm5Gshra5SAQyZYvg1D6c96hBcbq3MyE5NkZHse",
  "key10": "2gxegwdvyyKHUgY6Y1JC1s3Y3u1jjiB3oMTaAnmsovavWDBncvwhXGgz8Y2pL5tNebmxVDTiUUKXxNE8u8HwaFGp",
  "key11": "4pWH4yXc4eo2VccoAqRs4mrLqfQN2bocrerV9zcS3uTy6Ddcq5zTjW5JaVqy1PnhUS2hHBfkh5RMZkuJfiMHW1Zq",
  "key12": "5esuM2yKLGLyZA3mpga7Rm6jiGFYYv1NpFKW5YNWtWriKkNonquki74aESDt9g8Tf3h4izr9srEyFYGrB15hLr7i",
  "key13": "rCmwvTVRrKfdwe6LPGoKCj9rzCqpQJ9vwrpnXM8GA58yTynRvwBoY9Arxy1tdkfnQGsGe5yQK8bkE1oixcZPm2c",
  "key14": "5jdapf6FpMuZivqWfvUZX5EfXUboFcCjrTXtRq2S7gkm4MGkT6vxNe7A7PpjCGu8BCGRidPANQcLLU1r6TYTQc7T",
  "key15": "5ozqZd91nwuzfTQMK5QT9jSznzTw4XdpA2kGsYrw2XDpEvjJvdkwaPFbS2PCwy7h7B3XW3kNm6Hfdf6rzKLRL85c",
  "key16": "4UX6Kig6R2DPckoXmaeZDom1rFMCnGa3f71NJztvNX1oTt1zYeKb2jcgzHS6U8FjBLaznp5cWaaLu55AtFkD5CK3",
  "key17": "ewvi8iYWXvrnxHNWvB6uEea8nL4hrU73RmoF6VxpWEg3PQppWHsDK91JXi9ssGNLhkWU68hS6bvHAKPLhwErLX3",
  "key18": "4buukkC3tnzCoWNo1dChjfK6sYLA8xDkxkA29WP12ArpGpz5NmKf1omL5LTuJJ4gTXoLvXnst1DzNAmatBuV9FzL",
  "key19": "2zk8QwmjX3ruR1Lecty9hu1GZFRbH7Cw2VZ5fc21VuEVCpnKseRmbJtodLUBePgMiAEMR1LUZHvUH6cfmF1rWq3r",
  "key20": "EFxXVhVQ3WCGTm9htfZtRQ9tK66suTuFf2JvuyE8FLhKHfodEmSKRWKKLB5KoLKwXXpnhwxexhpKBgrXENqYcs1",
  "key21": "3ppHdsNZD8aPcapXxWFsRhXavrDS5J5bwNt4LmGb5Nd39HZhgp2DeEnqqnteT7R8nRD5Qp4LhwCwtdo11LVBzYxK",
  "key22": "43h6U6kgHX3oyZgLYqnd9TjffxDHG6SiZg1JDXuVkrodZKJahQYLbcz1m6wJwGSeGpTxT8aDZZtB4KAHwSkJ1fkr",
  "key23": "4jz7sdrTjcyjKW9wqHcogUWrUqZKvbeQLNLVxp6RjcNmBbXXt5m7Mt2pf5jr3KBwZbUBenpWs4FD27R8seMRJYMC",
  "key24": "dS5VCzZh6ziiwBseVPBXQyPmgsXrNwqVxbdUQ5BFWY487o1xfC7B89c4xNL4ujvBTq997tfVcbrfQyAow1g6HTj",
  "key25": "3zYmpy8yoJszihbgeMmFJ2sYYZc1Dz1CDrL9P5Yo4XsmaYngAMiNJkDJp5U2xWt1KFHRnmFdX6E1bPHBLfLX83sR",
  "key26": "koLuHn3jHpy24Up2emYTbLHEXGwy8Efg6zhwAD7bfFfnSB3pa74br4D3hwyJjfnqrC5DGdP3rkJueffAiKG9waE",
  "key27": "5qgZNo3vXSkHx6zNG2BSd4hxgWDGZQKuRg4AUWtPM93sFPh9a3cJPKZY6bztyjSFgt7zrREzb1tV26ECUycDw7GW",
  "key28": "oxUhc3JCgnAQTa9zRTci3SVJBi3TEZWZsgQFaP3BgNco4YXtny8dNdLa4orTkXLp54zpJeBebZgmvhY8wdrmxbk",
  "key29": "2MpndtK1xHKLTs7oKW5Prxn4KFaKXRsxd7ca686ryJsSk9rVz3PctdRNdKbnxgyqy1H9U4ixkKjz1DPTDa2AHQYE",
  "key30": "F4QBpEn2xWA1Ho2WWyGpJfeKqm2hngwQQK6nEvQq21Q378phF5hbuaMCktJUEG5KKrkq1hjn8y5qF2tHSTsRaC9",
  "key31": "2nGLSHHaBASnnxY1whUnc5pFL8hw9uaRrHXoMLp3MHTGpnGFmPKS3MSqyiZPbnPx3xpT6g9WuNTT2X8W3L8vNj3v",
  "key32": "1q1qHexGWk2kpwtV3DZcHd8swk2pf6SHn95zaDyhcPhvncVvwGoZnocLt4CUSh9pssq98Ymnfmfz3RLPxvmkRPK",
  "key33": "21VcfuDTjY7ygmVgS4o1xxsFRdTewrRFvjB5L6KqYy8Hjo7oEj2AoKzfmrPU9xnzgNX9onLbqwKQV1L75jUz4rzK",
  "key34": "3A91CBtxGkGrGW6rwWGED8SuVt6NNx2VxxPS83CXjezNhkkkQ7bnaGV14h4acjcgu9AZu3yop8p3zJnXStuBkiJR",
  "key35": "98RKtqM2invGY5PVrE16accSTurAQh5SLEaKnN2xDWd8vS6uAREk7TJfbTwSLXD8KMvMjLjLR37HrMy9MQg9RaF",
  "key36": "j4RKz3Qra9XVueNJgbaxUKYvakrg9uGiQWsqSan2cbgcevZDpXkMZAyL8jPJUuShHYWeYv4nR8PDmgS37fLsucV",
  "key37": "4xGQQaVfvGfUFEfkHTt5VJXvVPX8cj9eKVTNQ8qxvmzbnSyk56mjf6JYmkqQHBsZPP63u93TtTEQxm2aNKxKLHBN",
  "key38": "57ZeuCYBPctv8RgwtvRxnRwwYPZRvt5rk1iTH11MWxJqWtRBhmBK2WhUmMxGF3enF7oQWYNpo2f7ftfZnxVU6aSH",
  "key39": "3UN5iS3CWgQmwerEeLoaMPChUebwypNqngKGKgq2cAww4bf18jZ1j3RpyfujrsaicvJ74zkr3rBu5AAbEgbR4CiP",
  "key40": "2zgYKWTkuVtyuboaE9gV9HGRVJU3TcLmD5VWALWHwSQn4X5f4jZjkhM4pmCLLaPCsHcc8y6f3hQMEgXgHmAqcTWa",
  "key41": "3nG58josrvN1Z6ZrNek9ysFExwVtW9WR5nh25AP7KE2ZsnLCJ6QgTku4UZHZfF8NRFQhGM5W5abbxkrYu13tg7K",
  "key42": "4rhwdqcdcutmwsQniPSBinxv7qft2VtAiHhSj1MaRz1kz1TxWFXq5ecWt1F1tExsZFstPVab7ZhZZTgBDUtWBZ8A",
  "key43": "4Cqr3Qwt9RVfFagkwwC6KAeT99k8ZvwMfkrj9u1vx6Z93aiVaUEMV3fauLzJgv3sG6Jpsh56CfaKXr6Tud5qbwyy",
  "key44": "25XpgyeG36SqBdzzuNDdtHyQWa4P66VwkLKTUuEVejqybncq9JwtFvxmdf2pRr6AMme6iiQssSaAfwjNEpVsnogS",
  "key45": "3EEnRfDWNapB95rnG4STEdqBtNqwhRdo2JBXFHzKDh9YYumGTrvRF12dVZQfmE9MgryrdTo8gFDurNuXCyf2Syk"
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

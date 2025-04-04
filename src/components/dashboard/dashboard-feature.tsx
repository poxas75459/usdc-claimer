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
    "jo94GCLhVPnZu5uH1P5JZJAEYSaD3PKvB7FF4XSZsEc5VemAwCod4wF8eN5Kqb8nmETow2rw6LvqZm8hrd3RNwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vBpGU4s2D7uRyeCZNXWgss8yiwtC7MccT1qAvXjFtzZsQBia1avb5Jffwknt54KbCeiFsWEnBPetYrUJxvu7YgF",
  "key1": "62oNjN4KLSuXbXZxCGcf6buHq6kMvQN1SKZYvzeXSMTPodJZb39QJZEYxLVxZmSnEcz6DAi4s6Q8GUTy5DRRga6q",
  "key2": "27C8ssu1j8kiPSBXEKFjctALjoPTKkEWnfXYf4xvpBaj9c7K9w1veJe39Xoa6RX9YXNd6SirT4pgHP53Yw88TfhL",
  "key3": "4G22JYEbi6zz4xrch84WGbqUuHoA1YqGc13RrXFora1q8UrkPU6pziTgLsrxbckPcjj6JN9R9QDBtXihMWJDzfr1",
  "key4": "5j32Hbh55mqmUDswxynwD5JAwn1dKC5NxCdyiRqobWUkWiPXpP6gVY9anscxZVntAM6y5jhaP6nxmvVQx6vHxGzM",
  "key5": "39AgLJPGXogfyNdLkVdh5NL7u6tAcnD13JZPNU7bBNqU4bWV9KN6B76xkeej19yHtZYDsTiRxgjiv16NsrtuGwtg",
  "key6": "4cGWpPAVTJfrDb8YLGKRtcmczsT5QtrQVJprjoqyg35X4FXZCgyFNqb96Ch1wBKMzzoz773cCuUtEhJx3N9P4YE8",
  "key7": "zns1uzCjSrZ1Pp3PEGvhuAsU1e8NZyd5a9MWPWEFgHYYZGiEutGa7aJbP3sTyMtX2WRFnJmVXpGk3BwxkCu2k3k",
  "key8": "4PKzfX2fyVXEhHFF4JqsJqBXvnWozjedR6BYPVX8jzoRGGcee4Kn6swQScJ5xui5jcBiJxE4rRMCmxDZxQkjcv4a",
  "key9": "5tHKsZCPR9XA4o5ioJTJRCtsWKJGwi21nJwi78KiaU2uy3yZ6kg1jTZobi4ccCgL54hxVWRfYwsw4MKuqupJmufo",
  "key10": "1DVCfXbyfJAT8K3TWAeCaN6JmvpMHL4wTdrA9Mn58eCpXadYWnJr8Hjrcco21uQ67EJ3wUccF9bYq6n1xMv5gbE",
  "key11": "4LNiVugMa3Vm8J9w1VzRdafMN7HjZbGtjtJ5jUGr5pBJsqJRC2FoSequJk2Y3uazp4xZPUXQtymNN5jv4TgC3eBi",
  "key12": "5cfaU2t9uAnAWgbw3kBqGqwt3tr1B2Q5d9Lq4Ez7aGvnke2hcqA2WZSMawRuuxJZXtmBunwoq5fiVuF2d1mTkQJ9",
  "key13": "59pMsHGV3Rmwz4aLtMQ6JbmrVtL5BQi4tLszJPio5GvqrSdxjGcZp9pHc21ojVPZigrBfhMS4s3TScjepFjURVLU",
  "key14": "5XjEGwZZBCMsX55otT7TPS8RKXbifSdjXafCXnCP5J551Zno5K7iQHwxid31JAhygXHSzeD6stpQu23rFP4WA142",
  "key15": "5vyXGhZHcdhfMNB9pEvqYBeuM8qVkLAmxmjzVELmetjErmAPSiSTiEoQ5bcB2kP7rLQkGvKKaAuziJx1rfVzrq4c",
  "key16": "3ZMVzovNxTEc66Sk2qv7V69iJ839v4bz3TVC6Ji28BGwsEo1uRUj1MNCzfdEqPuGosC9nsq4tMzPumHMXxeQdw7s",
  "key17": "45g64yhSnN3k8mQ82CokXJvRkF8zU2eutH2dDBt47Ge2DCZomE4qmDREa3orReYRo4mL57KhibhRBS8r1pKBmgp4",
  "key18": "4eDeUNUjeRxHggtkjwNqm1qibSXn2nC4StiGL6VbUT8g512BZG3ZiHXkeBkw8EWoQ5yddNms3cEk2cWh4iwmf4Pk",
  "key19": "221PjWrfdHUsCRgw38tCCfkUP1hRZcdxNpybNxppbMdV6bVBBo1GYAXemBZs6kyiaYJtMPBW1TYHtJXzjwr5BZnG",
  "key20": "8XNYo9XPPgEPkGHLwts4aaBoJtTVQkzJwwVj9FCgaj8UuovxZgLWUbGwd2uo7kXJDsc97NnK47iVGAU3Bi9WG1L",
  "key21": "2z6WvkN8UTg5YEWSJUUgtwW2Fzndg2NmjZN1Z6LjU9J9iM9ni9WGdDQhEsaa6gGZsp8shMTXHzbAvGg1WMVeXhne",
  "key22": "2fVUEtsR5UctztAZMNPqveGsv5zKwZFVZVHEJH8y6akcmWLN8ML8EaNASaGbRzrykG8xUmtuR2daa9FiWQaqMYYB",
  "key23": "CZFySV9bAgKmm8gY6RsB4Z94uGm1UUDiVaeq861Y6aLnEucAayP31iqaviJN5wqNep639WftCEG2CuYsi9S8RSW",
  "key24": "25HdWnAtVVCmKbnMecB94gJRbbVtMF8k6spoTq7zbKb5mRRpcxR9zVkv3JCLgBnoRyeGfCmJFjfBEtifghJZstst",
  "key25": "393Fr422ajZiRLgKkej3jwHXeWXrJXhAGFPgRYRLZ6nFMyxZKjnvgn8Xe2jvL1WeU2KSu1Sat1gPwytCgKTJAKYX",
  "key26": "2stQ6fHf9suS9RHEhNfyGpzW9XUWtAHAbNkEh2sJ9zpYoreA5GCvu7kZ1QVdnNC8L4szR9MuQ3wuohkabpg2NJx6",
  "key27": "3ByX37ySfRUocCsdPVg4frHYxucq9pobDLKuMzbH2bxib2BcBr5msTrz22cRRPAjkm8iJ92yjJ9QGCH8uzV73W6Z",
  "key28": "1PBMtPwSgwrth3yJV8f4kitAXG5Yid9Vt6wW5uqHMhV9kkXQCaeTxFRU4YFLjPjfUKnu828U7K5GZ5BxgGFbCH1",
  "key29": "4rLQcRPizwAgwuxrKiWN6EoD7Yng8CbWGL4S25z6Ch7zNHMS6YPbhbqo8M2msd65e4G45c7AJTodqGNvJrwk4CQq",
  "key30": "YeLxEydKtdxqejLTcPUfBw999Cv9YfHdTaDuXY74A8T9XSxM3H7tYbYnU14v7gfJrcSt7GkoHWnz8gLFPbzMwVD",
  "key31": "26VAi4QJXAvRddjdNiVwSoU7PQQnZJtYxeS4pNWrPgJ4ZhBDi4rgNyuGD8PQE3jPFJrqvEB6ueBWdZJ5Vdt8qVdq"
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

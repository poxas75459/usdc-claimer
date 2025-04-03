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
    "4BPpqsFtu4AzwbBxKophSK1Uyv9sS7Stfe8jGW7eYrwKPzJ1ab2PXMSCKzesYQHWHR5kabuzALoXWRykUdt76JPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjLEC5SQjdvtbaykbzHS2GTNSGB92oBFMxwT7BfAZiLuqXxqnwXD8PpZUJqJiab6iDUMEVft2mCjqPCh6gaxje5",
  "key1": "5art5Lx8A8VDE9e3WvQVF1XjaaFhVLpRZ4YH8ix19etDkk3A7f1kNZYXU1K6FyRxYcZm3aep5jq3S1UeKJ3R8aTd",
  "key2": "243LtvhML5ZAJfi4cjC68N6YdBboheW6fm2fGEtsrGwBYwDzBUZZ1nwCMapMmUtTpUpmNKuBM2ZoWE1Vdor23xyg",
  "key3": "4HuC2xeRQLcMrknkyQWEZA8gHHJfTKzkXEyLniLDJMxDnhpALf21LjHkK81YCLJSPF2kccwN7GUJajHJPfauDZkV",
  "key4": "wu7tM7AVLZs4rrvMxCuETNWFN3aideJrVSNd4cY7bB4XWgzc8tyZiZ8gSmkkWA8LWXtS3bdMnWArMiq4vBTTaEk",
  "key5": "3Torg32gfbqJAUTL1PTo33pApgYEAPQpob2SiWDcs5ucbq1b6vffGkd6FXVqJ8cJPcNQujGhJSN1BUD6CHoE9CW",
  "key6": "3UMwKFtj2M4rjmFz6k5RNhRQAnUpg223JmMTCPGtTNt299KZ2P8zScWqBaBmpa59KEyq5W6hZ5Vod7WcbUPdywWR",
  "key7": "4hFLbn1eNdQrdXNoJ6izHQVLiqf17F8MPmU7w9bmdmPLs1Lw9GcdS4gzZEy6dgYmXtxjv1pTkFck4w43iCFJG4QY",
  "key8": "48MkHrrdNCgnu481HFpzSaqJzEg3wefBJbDhJpSD7YdbrY4cyATHLQsECa9ibCCrvLsb8jVg5ZCiHGZazTSp7AJG",
  "key9": "4AraEHwKxd5QitVABSN6pNgrwu1EuGfujwt6UXvQ4BfcohBCWzcomEnwEwqPFqrLffUKSErAw7V4UV829ZxFpYyV",
  "key10": "2pN9nSTtdkw1SzxEr29dWzsbmi59yi9a3V3t46GVEXtKiywhbgSC4E2c4mPi5DGjb3EbVSdDRe1EYEaFTcYCpomT",
  "key11": "4QAFsYWSfJxFBJ5ZSLAkd5tEVGtU9SorFKWRc3ZS7KNjqFiUuVdWRbKRWac1Z7EgG2fGyGeehRX7kuy6UBkZjgRd",
  "key12": "2sZJ8cwktsrgZnxxpboRzbpPB81dthDowQWyczPb42swgNuw3Y4amqLo9yX4yLGvUj8oEWpu6AzcvxjRoxpxdjdZ",
  "key13": "35Xc3HFRL7t7xdFYQ2owWXWmnrgG2uJgoemY95vJHEq4bh3ZywMhrRzB3PSa3y2nj92hpbgf658aBvuoWDGqUMsu",
  "key14": "4ZNTJr56JbZxxzD11jaqivfYb4W1D4o7g87TbZBZuGhg1ah4gNVTs7q828H8vS88rm9XYB3g69KPXV49jvKUqG9d",
  "key15": "4zFv1kXa8cQayunji8o4QcWvmaAFxA242pCA4Zx36ZQrdt46gMkn3mYzyNDYjXXyrnBCA2WzduKk87Y96NMo7dCd",
  "key16": "3gtehq77U6K3Q6vTX8SZTEFvDZ9tw3D38Z4eAr3a2wZSq986PN6XswRKenhHkseRYxhmu6nz4VgrmLibySFVULfC",
  "key17": "4gYEahUUMyPmE422ikP1o5TT34CTpHg9dGfSSAiBtRZkULegC3ZSCiFaCt8yVXEW6rN93ryDFAkQPrC6aUzxCXDZ",
  "key18": "3mSM34U5xMsUfH4skUcjnH2faaTLzfNUtdUbJ5oDVHDqBKk1sYNokfE3xKDDMAC2mgjeyA9KyiPGXemk2FdeSege",
  "key19": "5AvXR1HkqaeyNrC7GXnFc8Y4Wfe5oXLFp9qtTz1A1to9r3VE77Bi6amxBQMndBgPkdPvFHpxQFnqsiDSAyDspvhR",
  "key20": "VGKknE8bAUh6659XtSsNhyXAW9rAS9BYQigmU2FY7n1Y4drfWF1LSFywkAHp2hpqSujpCBpyZ43SyCUngM5adkZ",
  "key21": "4QoVJ6du4ZAugAkNNjdTtcnV1Ti4mXXxWvCPWqBqe1CQugxrFr1x4eArB4Bpo9bYC2jrkv7cUhzHCWTMNBohq5Gb",
  "key22": "2PLDu2EWFFqQ46w5icfFnxrPaUGRrJxZBdfMDPVtpsQ6Xr8cgh5jobG3NhCq1XjtLbVWEuuHmsqzbkLHRapgF6jF",
  "key23": "3k4zHRK1yySmjSQryWZcc53rD1Ez3zYFFyHQLzhH77CCR2ZfQkqi66DN8w32Qc6ukCoyAcNx6GSV4meEoofvVwxo",
  "key24": "5TrcAGYGrDjjaeaN3TKBhmw8aXh8AWbUJqRRomDZ3wvXr8sFKQ6d7geDEFpvnbGUc21fcAMfcm1umKvrAkkngLXr",
  "key25": "z8NuczK5BMsqrkFakzgxEhj11UuBVAKQqoFhxvyXvRAVHaGKWR6q5aJsYPQhq6TF4iWuHnXTXRJ3Q5fZ9GCVv8e",
  "key26": "aja2PaqbKD28K7A1HrPtZArDxQ8KJQoso6RjrAaPskVYp6wMWiE8uKvYcrvE6ZY5Vyp8B2i8bBeLefmj8B38t4L",
  "key27": "2JSa57qhUaQ5XCY5bJw6by1FQ4we2QBHhg8mNYx88xrrK3Qxasn9L2iH3iKrGsmDJvMQzsYbQPosQyaegf6yyjnw",
  "key28": "3N7mBAb7XM9wx99b3JYMUeH1o4NqbcDKMRjZiEtcg5sHnTbBcskAovjF5kEjY4qoxww8m7fMrjmAz93pETXtcW1o",
  "key29": "5fTa5DQNhFvcf6TqACpoLiR4b1SpoS2Dt8dXfvDRPQ7g4U9C1ruQz5WYqL74utYbSSCia9dXVjVffyUJJEJo29GF",
  "key30": "38Kyhj75s7o85BCyrgW5TPm1a5eY6vtPRJpFdpvWP98B6fdDP3uuHRSnFPPmUU9DkN7JW2XMgGk7b8S8nQvPwbHv",
  "key31": "21VAH9ZUzRD7tP4uyjTtna9m6a4AJmbwV3S91h9L6w1Za2iVsa3Jvafipeix8LmAkeA93bFwFWLhHNwkAefv3TVp",
  "key32": "3nLvgTrbgXWeA7De787toZ2TedjBweaXtNBFAuDze2xryUhQ96rvp8PjAdAiLpEQL8XZxyTi8bquHDHuxgp4vNa",
  "key33": "2971hZ6zQ1njpUcZ4ch9dbG3FkTHAwfPUuSe5KdJfzMKqKTH7rRAL2y6pCahMPo2GbDMNdh1XY4yYd21VwGVnxmB",
  "key34": "3CxBKtpubB6VQxP7deRDNGEWRgtCbES9GkaUiQDCY4Ec2fFhc1Uk5qAVLy5E83iwpYpFWDaMbsTQsfZAoJRKLLmx",
  "key35": "35cELUvjigJqnSxWCkLXYzdjLTmMfodEKufry66TjJrdfJbvqCth82KXzJKMDALgPj7YVRyG8GstJ7y63CjYNmk8",
  "key36": "2RSCEXc5xLLer6yKHMAh5XUNSyawxv1kLvnhcmwRGpYfpCY7EU5T7HdsAWyuBoyctPKx95Vb5XAJqb7wdbR7xbwW",
  "key37": "4e1RJXMkeVHWCQTXx1hi4iRK99hUcfNa3PUyUEgKz49FwDBuvfxSkExzmRWuWzrBM8FtCW9TSNiF7AwNwSuD65fq",
  "key38": "2ZitrYLTCrA7nxNYQNEdQ57orEUrDFhsYA7udNpXdfj3cmnNyZi9FExL7D5o8BrECm4VtgEKKSGu8c92i1zdiu4E"
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

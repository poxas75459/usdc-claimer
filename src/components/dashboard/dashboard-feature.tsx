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
    "27mN6jjywGw9wPLnNNnmWbgajDiJ4n45FSkYz8aV57rdXwfbWpQifxgZ65r4o4o3kNp7LmGDx7P1ZTDo6dNbF34T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W5LWJx26NSDM9iAwwYhqvc1zbAG5dFVL2CA3BmUyYYi1TdHDn26hWZyP7q7HKY6uDTtnixWMXDxwzLGjQ7tSvDn",
  "key1": "4oz4TYXRhDQovNzNL6bycb1N6MgAD16Nx2eqbE31oUfK9NazAVkphNzhkVVv6kmz5vEAjjYnTV6KdPW1ZYuGi6BE",
  "key2": "5UYQx1b1UN5qtvLtJjWHDhoJCPtX7ozv2uyipuFswYfDWcNmvm2oDgUsQNWYfLYS635YoNscSgJhgkhPAkv1ewQd",
  "key3": "57UY5fchvav724uRA5pgiFam7LLpbTr4aB4QNFitTE9yu54rYfZuqKpqLLHWVSHQAKN1YYNB6CzAqB8gHPsecyn2",
  "key4": "3eqPQs54d89oLNhFoS87bJ54xSkfzrD4yxcxDbGc4goi3GahT6qf6XyAtkoVye1YhspErHLmgz17U5hJWdRGPqQn",
  "key5": "2UtNKB45T9h1n2Wqniane5LJDpJc8DsdGQp6DqTr5MWtcHj9LG3TvsfDfmuoW92RhCkM3oLLgiG4XHregtCtAEtb",
  "key6": "4bk66k38nJBLKjezsCAfjnLTZbCQEneeCuT4788nDcnaCHqAjSXRPMH2T2xw8hsEcssTVihg3oiZH9F19ZcpKZDn",
  "key7": "369ULUqstARJ2WBeePPLTaQ98Np4NNR8sCrJaHtGmqDbnCqLsgaotsKghFh8bmFmjRsWkRt8T24V47ZDF8S3m97g",
  "key8": "TCzYmEee6hpL7bYx9qThxth5Pr2gMLQnLEdaBJdyZeZkg5SxXK8dkYdR6nSVM9aGTuwWxPoY1mAY4J521Q6FuTt",
  "key9": "3YkMGbkdVnZzS9U4XrquJfAxEghHkvSHMf3t9z2bKqkvUMbBqPknLpGjEcYxrERumfREESTs9qfz1w4DtUsLieVL",
  "key10": "5XCx7rFZT8HwPdJp61ZPcKf4sGTd7RvH7XDzc7jZbaWBn4BuLZFabdBAuwxWpT6MNhe88K5NGGe3LiUFPmhBE6Bf",
  "key11": "4aS5PThmPCZoagUSZgQpw5bdzVbtGcRzEeAKdgmqwZvvJGsn2nAmw6sfVqfTCDi6a1igzEct7KuF9qScgcx9njnJ",
  "key12": "A33CHa77vsVSpmApE7rop6ENtqFRSsE5zWEBvT7jPRg36xuX1H3Uz9cwTXnK6jephXYrC3iPSVtkFsjESfMW1us",
  "key13": "5rbutG1ZraxDKSTwNMQXCvk3hCMxamtwb4VjfZMNefGiRwQoL3x6DFV7EQddxP16em9P748DJJjBPQkuGwXp389B",
  "key14": "4awmt4qivDTxwhkUMPckPf7y4udThtcaXupDP3axqSQw916HKydKqosrLr6DArSh7ABM2oEmapNycp7oKWxWkrT4",
  "key15": "w6CkQwBmB4cifqzPPqiKrS7WmX3rG5DzK1XYwMsDomD3nUcZf6NMnZfePQKMnekBwQBgqQ8bsDrL3K6gkjar5Wc",
  "key16": "36LAtVjayZ6Nm1aa5sEzAbT6Lqv48m7eV4Uhjsd46SVfU9rvJQVBM8oaAevc9UHuRbqdunGxfA1kSN8M7YSCWz5G",
  "key17": "29XiK1Yq21G2UUrWrW2q7JNeSawwsSbfgo5aSaziAKmskrcMzXwwYKKEdYF19r1fpYsZrYQCVyFGqyB4KirMXF6D",
  "key18": "2fJVsJZfndrtTo8fZZjkanAvx1wAy3tYvgAEXdJ2HuTdMtTqbHFcD6KLUz3R4531iPXCvGCBAzF87CGzqvPmPwVH",
  "key19": "4f2AquHDaT1aeeCgsgdr2LoDoN8KpS6nNnZJxBLaS7Sv2b2fv9QLfsQMetZhCQnPxVNG55nRAqBU3HQuSb9p8uVU",
  "key20": "bHv3sqbzZCeYhFixicyBH8dKdqfXqzzL61fbJxRAVRGKevrUaW1gC3MnQSfsge3dFHmVDe81bTPKemcdkpEx3r9",
  "key21": "WkgSbJa3vuHEpwRVCU5tYazLmJNncBSpnkJvC2e89c6RaxEEebZS49rD19q7R7um7rKrCibH49RHjbj14J1K19r",
  "key22": "25foiJXPf2qH1wsZUB4GpaP9U6hwWXFHPxXMEAeWXXD4ms2BbYuvffvBqbGoQ2M18RMQFmSuuCLxPMVtaozPbTfL",
  "key23": "HdoSBf31GNmrTYgjuH4SoCH8usdtcKdtZ3fd2P53sy8facoJR68bWHhX9qUbjb9mSukKxHqyoHs6ahzEGRYwod2",
  "key24": "5LXUGsPSUEJDqJHWAoBAjEekFxiRC1qamyCkqWcj6pUja2ky4SzmtnnJvjoe2hPq8ZK6x87qCUk2tSTLj4Em8796",
  "key25": "4Ni9nKY6sCu9JNxamK8Emua7iDJzKswXhVtvMBmqnwXG3r7ZF8tyX1QPtqWpW8wezfSPfkxSFN1ysxkgpzLL6bN2",
  "key26": "5k1H5Seum6i4o87aXPSCmHm9Wxk1MUJe7U2PSziHmfTkY6jMp3jt4MsEnm98HT2fPYstGxqFgBGdzxv8ujkGKfmc",
  "key27": "4BnDbWXDibrKvNgJMZJ1Cb2zQiKhDnUG8Tdj9UbMpqya9Jw3maxSDEtYFAH2a26Zto6yfCakZZFd2MxXtANS9bKj",
  "key28": "2mTsyX8AkD1T22orzJ3PxtHGbM7qp8WYYG977jpupRvnBC8k5u2Nv61sYPLrGadPdvYuku5vYkcPiY6MzCsv3tyQ",
  "key29": "5wrTdsNBWvo5Mm5XS8f4VDWDTJfUTtPn9Gj4UPSE5YbVKYfVVmqRNL9bDieYNrHfi65crEQy6jtcqivJSxCA7c3Z",
  "key30": "5NAXBAoDyWqwioVSBqEnt2LfNtrxoPPXon6myuquGtUv7HmzsnqViqN6rKi1FpgcJ7j8QDh7ir1Y62NXAmDimq7a",
  "key31": "DjmCrynKTLKENk2hyM13abCFBh2JZs47NZ5vDHW1qGi4gJqxCyY8F4y5HpJDR4KHxe236nmjEpNATwgGbs3HEE1",
  "key32": "4XtYqStXfY7fiLNEBweiMY7Kt8BJfXF9MPYCw4cFFugnkZfQdAwRVXMZaTCuxp2tokckzdfqHkBBeg5dWhBHupjh",
  "key33": "38sHo4WYJgUe2LGKgssoFt1b3ZPX1zY8NJcnNiYN2JTrX4KFdFfeFb6voVkHXrYF4aMThGfsgUDarPKsYAFtLmaL",
  "key34": "2evrwni7oNdBkApzX9NJBY4Z79UYbG2sNSSaBDqvmB9i2cz6fLa3FgCWQbNSZL1zRdgpDKgpEqPxea91mXn4XeD9",
  "key35": "5oPGPhYYzTtRkwXyKWUVjwTz7YyMKDeZJGyHnsaLBAF87D7tj5oUER2AoN7NKXfhk1WjgijjgUBphEQkymHqZUyr",
  "key36": "3UYgTsCo6QoQLMaGFor7DBuQ4uTnmyugVNS9VouCZC7nxpmxEsdK94KwdQpB85Z3GZAEJBAfmqReHQ3gUv1o7c5M",
  "key37": "MzN9H2ihEHeebToMvT82p1NN97XLdX3gT3rrarjXgS2cvjRPAqV1CnecadHwTm7E8JKwnie2gJhEVhj3Dj8yatP",
  "key38": "2fXhk2EuQ4i3yphJ29tsPx6MK2gUwy2D5xgZrWMLUdxzdVHqyZeYfJ7bEvnbrNbXZRyvLFP5yXMWosCmap5ZDXKV",
  "key39": "45wRtsT7DeyS8VyLrZdny3rgBvm5VHvThnaxVtvikLsJT2GRSkmwGHxaiBniEsLSJijYv8oLKKdTVgPqy14zYFJb",
  "key40": "3YcLZgqe7sSsQMH3CvztKkzf6Z4WzcmS4A7c6hBPgtqwE4rEN6gFANnD7jjkw5Bt1wSC3hH8S5DFeHp7fKSPFQwK",
  "key41": "4GWYX6Ei29XynufR82J78z8dxmS1wXLT6LRpwBJNavoDwy1rtDoDGkW4mxt3MrCFoGUnb8NArFVzuCZUdDLtFBLS"
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

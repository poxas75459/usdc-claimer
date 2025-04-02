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
    "zZA3zn7nYP8HUrXE2aV3JBcNyiNnFGekK8WSv67m5muGUcy9rXPiEvaSccS8uDWVugomrycxfJc2xNYtJ7B5sZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bU8ar7wuXeAhdYFQRmL8qEHn8hMenxwTCs6AQ5PmqDxVk4Sf6XQtM32hkW9oqggYs32ySM6WbvYyXCo8VLDegoD",
  "key1": "3AuREEUUaaqpqTcxY2bi2fLfTYM9uh7pdZmzgW9BoivXkAKt9BJXVhqfWUS5PZCGH5f4BUxWushPdKaLVBtcuFAt",
  "key2": "2YY75LgCq2HUPRdQG2GM8Vime7LVHapCB898VJUsZWreasArdHXM2AotCc4zDzyEaZkMqa25xjpuW3SRjM9xq7yY",
  "key3": "4tin9HW4j47ETRr7osUsixiy5SiQhuMgmuiXmCGUJTJxSFGKn1E6MESeuDTNGS64mXDDxvXkckgFz82bFdDWv9Ty",
  "key4": "oLFFPU1pmHkCVmiuB4A6bXi7s3RiJCQYCY63ndcAZnzM3f3mWhPoquDZdRL5ny8ArCvacuHi2z8zVmS7x1VRQCu",
  "key5": "3c7VVXKrw2juQ69kZnwzMcmvuYrdkLGh5vikF5SUZGbnMTZQhjxsRMhwSWDrWpWj63bZbRzU4P2rC5vAxYs5vib4",
  "key6": "2CY7GnEnJR3AZiLVuuZydcq6ZjouA2qDtCeR4g7gJq9DdjvjYDNXsArfFXCcECRpMspyiapNnLhquzTPdUbyd3zJ",
  "key7": "5qwZxYR9iYHXsetzgL83o8DHgaGAaRHFGkHjY119tJqREc2BYj8hzSEehLTn9NaU8yJ6eqe5LkQxFeXXCoRmsLUq",
  "key8": "3bHbrkCXn5hFTn3wm9dGUPu9rkBk3oxYvUwcUBWzsKkwjzM86eabpQnZvPG5TK3V7giAX9ZoUQyfwmRfQ95r9XSD",
  "key9": "2Qj6NSr1xxpGvg4HzAgS26TXqFfNrXE75nQowYeeEwfp9wWCv1bnokiwGU5udpDmssSuUeu1MsANbdEgTUQ8xC2S",
  "key10": "4E1A7JhKKesFWqATkeLKsuGEKYRTCigM7UDGc8SZcjc7PJprajk1CiAdaNPvefY7JPgksBD2kGZJ3D2FsbZBR2yD",
  "key11": "2Ra37isvQjEGresKzMkFet2CwjDkGQpqwFQBYcG8HRAAdkAXjMJa5JMcQsLCpUdHmcvPMJD4z17zyeXvvznaKidB",
  "key12": "3StMsuZiXA3fZp3hTqMvow5qGeae2Ngue5xxLty9jNEL9jnGRKWHN3WVSVXyRbETwpmcZERh76a8mA2MX7kH3h4g",
  "key13": "5Ye59DCXz4ixWvnCPJNQRbFMgdCoNLbKrepysdEwhZXWUgYufBcGCY7CUQc934jiXXMKT32L5BfBNhmaH9nWCPfR",
  "key14": "zLY1cS5pSEsuB7RSvcoJbPoWUEhRJzurpbfXJzSYCo3L8Pxe3YN9kLWbsRx1UqwJ5nkdyiUN9rq7kmZphy8qbgo",
  "key15": "zK1thi4cGgPyctraqixvUhBxVyzUpF5iosUamdhA8ewkhVMpYwXzfWnaKLTcUXjwJNrrHwytSVTHvnCSDEGBXke",
  "key16": "3U4171VeeRZeiX9TZgEdqymjs1gk4b5yubM7USrGXzdf6xbmUxkaxYHnAMTFSEZhfKnRW1EWYPgZuWUzv1Vj8g2s",
  "key17": "5qPi1dAcaHfvQkYHFCEqRmeXv5Rn1ZrJWDYcKU5AceadRCAqj8RAtpAAgUNjvBuAPvsNJPBdFrn8d8dphnyMoTR4",
  "key18": "4NT1Jb6uMKH3b56upKyMvgykCMMsmk3ku1gJU5b5PQF9c6gv1XnEH1JMfJH3Za7NgZfPKeDrWu8HJvT3qiQ3DAnH",
  "key19": "33uPuP7WMxYQGZsRBxp989yhbiFfTAj6QdfZ4EYxyFhFMKWivUnVU7oM3AMEjyq87LiiVFxETwMWtCc3M1as6pcF",
  "key20": "EKo2Q9zD8uMPsx3ksTHuTq1auxwp7V8xHQMDvCAKd1WqzSYr5DXAMma51XJmh1Z1j6RBssBndUr6Mha6YZ5AorM",
  "key21": "2DadD1Zwe3UPzyQns4GaoezW1Rw317oyTnJZAmKSHr6XBhqS9t4j3tVE9wGwshdxsGFcD1VrRqGYk9NPCsMiT8Yg",
  "key22": "56Pdg77aRUkzLgZqbBEDZU2M1a49Lx1BXoEKTo3RYw2hEBAT5bjTuywYeBH5zoK9A6gsDY3AVrYNjZaSjdRSA2RU",
  "key23": "ZEL3vVNcaCuXhNPoTNnm9EQYx5z9FzNs9E33WWmkjfiqYizLL9VyPVCfjyEV6kfuNjmQBB855x8iS7kwxqb2uYE",
  "key24": "2dw2NfiHVSnxw2k2wcYzKbGJhRCs2gN6yEAzeKu9QQXUSTqtBFUY5TGyg2CygWCRmPfzW5jx1WjNuEcTuWTHKocG",
  "key25": "TgfBM95gggtrqsNDXyzQpdDWyTriorwt2pk891BJqBJTFAGUViZzyp9FQzHBRKrbu8FY3tEyogtSWWXirnBYuyC",
  "key26": "2ZWg48j6GQKsNtQrB4WMDUiJAtQp3kVFFUmUgtYMzPzR19Uy9aJGm2aZiyYK1chV3YmjcVhSLyzRNNQiw5D4CHAk",
  "key27": "3XUq5tfGyBJBt5ZNTU5eKzrgAdaWKkqGR9KQuHUjkGgTURAL64hrpFYU2wjeHCAfMx5D2gqJXUsc4i93pyp5Dh6q",
  "key28": "4rE4Xy57bVM3F8iHzgx3ys1bDxHiFxNU9QbScBCEZ56guAnaiFiJetYc6j7tDxXqYwvqkoFVjUGTKYQYLy7GCL1L",
  "key29": "5aLRCYPhQKyrMU1LfR7HLnX6jV96ph3uVXGQZpgCHLfrxgM98qW2VK3dhjxcz9p2wWqxqQDATddWbeoqTqoybtDc",
  "key30": "4bEQxQgqESsVW1xC8DWgbGgHiYMg2epXfqnsXXFqMs4aq3xCZgpRG5WFvji3ACtnXmkLxbSnD8ALU2FsJ5BzVeKA",
  "key31": "2vuB12Z1K8NN1BBNBfyF3pdenLR5eAHePLig4ZkiF8PhhRu98vW4KCiBMHA7WH5yswuAZnyKMuFSycUcuM9zkzfW",
  "key32": "2FKrJE6TLbwg3zM7Q7UsCd1mmmZenbc3S2axtaSCbNfEo3fUtN4ZFy94VyvRt32WLnxaKmmzPEZC2w61bjdQy4bE",
  "key33": "3JMbD7Hb1wvorm1zAgMb9a6fsdRf1tKySsFShRkrnSQVTUiYtTzwjzhBpvUMdSgzNKFCKkzjTX3drE3GCpGosodu",
  "key34": "3aKLB62vViAhqFJKnMQ6toZfdY2JnU3RyhfYNnKYqyAKrMrBgzJhbNe4ayZzULJKZzTewXrHWz6ofH8f3YyABM7B",
  "key35": "5D3p31vCVYqBhWGJtoCig3pcNxDfbTJ9B7u1gDFjjUQeq1SxbibE14WhyCME8aHW2zXAjmpyeBh7kQzqKpm5cWxe",
  "key36": "2VYsTHoK8haPRgcidCS1E6bjSNsWgw4MTfDBEDWwjF4mKYscp1UMdxwwYvxqyrK9hZjnkUCtoY2wtyM2XyFP7ACp",
  "key37": "5zA6doogeEK7NdqHbSR9A94PLBKLF4jox5xaSCm7tfBBD4TTSDYHY9bjHvTAv4Jg9TFu9RagJ6EG7pXJhuh1MQ66",
  "key38": "uUmtXXh8GiqmKCLJiLxJVfwoxrsBFeAYsYg2TuWxRa3YhgHK3ndXiwxotheEfab8QoJwx7yrheivSt59uXk1RWx",
  "key39": "2JDFb3eQDBQzVSKWCGHqVDhF3R9w8EGDqqtW8DqgteMUFK1upkCwgiddnEmuHKvmRP6KoWi7VKwRCfRZBaMzZazq"
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

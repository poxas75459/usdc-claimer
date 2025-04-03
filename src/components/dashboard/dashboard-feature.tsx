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
    "5RexwWouHvNpcjEiXL8HJ7jJMqoWtWPQEHMH8aXEEdTWtQEyhRrBD3TzGrQbvn1zrrCk9rp3jZDN3iaT7SiFjtwi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EwriCgEvkCy8D1ViKFip96Vm4jQnzzxJDPTcfYAnBfTz6pAHUxEbtLnBVwHGVkrrXfeehcqrKK9rXHwK4rKG8Kk",
  "key1": "33k6iLwuymhCh4kchKGiK8MjVRjx5gRVoc5J5zV1kJHfRp17U4ezMqkZX5CGtLw2uhrZYQc4tHc8kpWJeDBxQ2DG",
  "key2": "5CBAgBY6QN4zxMLUkmYzqCoZBn5XdNbWqELGtStbyoH9pBqo151Kcg95RYCLSDHaguzEPQembHXey5ypx1q33tuH",
  "key3": "481XK4eEEN5aGyFcauHxPXFXavYtGMSciYyZgyNpf2uMX4CoWTyvoJhNxE84MucEcA3aAsVS6nbCxq7qzBo7w1yK",
  "key4": "kW59XZPH5pZ91vG6JTmS1Zb5B8oXJxM9q6Zims28tcHWBosjXAtcT6jAAkvsgYe728Ncz1WUG5FrbxKVfJXCLeR",
  "key5": "42v4A5CkfjNB7aJB4omWuGAdvB1U4pik9tyZunB1fNsFSav4QaFnKd7UgvBdaT7eA8WPbP8mda9Q4qkVxN8mJVoP",
  "key6": "WCQtBJvzSEGsvReHZXi1s9nXWU5vpQXYZwZjVtz4q7cai26KhXvCBV7p3g3fFz4T4z2NSjo4P4BPMcjYLpTPHQQ",
  "key7": "8tpUFW9TpG9offMQHxpSfpKvmRemRh96s6v3yckHJx7YxWkqRXdzp86TrzCZvaNCdWtKSYnjeXh5Vemn2vrEHSj",
  "key8": "3bHjmwviskJFTL2g8BTYB9offn8TcSvUSXhTcuVA5DTMogbivaTVaLimEh1KUtXwjk9w7TiR3ewcaKaCe7nYc23",
  "key9": "DudSmDk16yLwcvVZp8uxGALuh8VaxThPEBpyTxfG7D6jum3kasnzRF9ftwWZqESYqV1HY3vw8kwyjzshvkzKHsj",
  "key10": "5bL1e4E1tUXJTN8GHMzYcAdoFKF8jNNGPET3u1VrBZk9rm1qhGMgN9mLJBmADpAzGqeHFsuyQJuRor8MK51jCkoo",
  "key11": "2vreec7JqmF4w2FzVdHbitW9B67vi1Qoq79jf8JWqzEZCk4CtMj4WAL3fQtoCJZbD36gBvMTBwwTxmvVtsaPxdQQ",
  "key12": "QucEVXen2iQqzKRr1LjXiZADg8CTcsZHboWjKEcdacE7WpHyxeTD1sjkB58ccqdfxXjmaXzvKtGQUrT6jwfVCGL",
  "key13": "2LrrA421iHsptCfmW2xkFSExwkVZJMioFU4QuhifsxMRxbrWZzUz6ymNRPYLj1H2XVvhuZnKpCPVsYVjVHRqS47m",
  "key14": "4NTUrJ9h2CLojd7JjyV3T5iyH62x9AcA9w6N4XHz8Z1CV5EdibLL7JMnHPLrqDwH5ctAdeWXfdfETa4W1mDyXiBc",
  "key15": "32YBhs68TKkoFAAEbTbPH6wPDFLoXAeSZPSSvPxbDvpf5vZKDDAxUYXzzkNFiLEpdqCzQhEYP7DUogwX3WdcwBX1",
  "key16": "4qXoEwvAnPw2j2UqpGuuM2cYLJSvc9vEMLL1wsiWeTQBQyYSF415jQPdTFwEGUNHora6XSWxRZsjpzxEuCARqHdV",
  "key17": "3unast2SZmU1QyEXdaDNd7T4wGpBvTxZxcQ59TZVAtA79ryqkENSvvQ9J2mnDCSpihgeYzN81jn4tWDKvbwKLuvg",
  "key18": "4YVbw58jfwmk8uFBMAaoLq5ikv9ytpmFoJX8zJxf8CjTs9ySJTpAuRZYQSuTuhVUXPS7hW3jsxy3pGzP7SUicTS6",
  "key19": "xswVdhh6EVkRsk796HGKnP2YECoyqJX9CcsJWwoEHyaTxkCgjgSe6RL6cMQ6mGteVorwoMWLUorqqC9xZUzXQXD",
  "key20": "4N3R5FjZUN8x1ABX8mw5ALr6yKxZ7Qtf5dEALkMBsSixYTFz9MPcfq3rAf6i2TFKECJ1fJufMdzBCpzrYHCUZJG",
  "key21": "crmFXpY858aX7djRkV9c7xS5BVamPv5avsD7htLmKiHUJBWtzT8ypp3j5wQtULFGWL6DUGKWgSYMQqPYpj3PowJ",
  "key22": "TzayD51uSPCa7JYAsSjYAo3jF31b9wzTqcYrdbxkAS6G3QSu7qruWbm6baqhAqkqKpSBFruqzu5AK4CNdnfks6P",
  "key23": "591NeLgvnawpcdwZqoBNJtPiNN9FDkG1TWYWkY6JEcisFhXyjQp1NzPsw1iSc3Y5fnsUiUQ5rb47XmSfG1rDcNEe",
  "key24": "ttiHUTjGhuwjZChLu9aHWH5Kaa1c95DZCSPmALwFiUiG3KhHRkMX1Wp8CFJYup5YWqVsBKe6uHfEJo1bu83zUtM",
  "key25": "5Lgw2tKb7Kx7pG6Qa7Q9uZukciPhbzaK6YR3eQ8hVwXSfWneVSxWqiKLuhURGyeJKKXroHYeWGQ96SVofu3K8FC1",
  "key26": "2Fuui4tfNgYrDfWTYJJHCfYFFKBGiT6x49QJrKmZ1wzuvp1Wmddfnxv4YXTMShBSJK1QAmuiPLztEbidjdB4SMEi",
  "key27": "39dFEnXZ8Zgud4kA6N16FTUNJFc1KFdJVaW3a7TAWrgNEh2MhyexVGBeKXuGpdknagN459LUicNeYypfgfKpDBp",
  "key28": "3mgzFGZc5ezAMCAcKVAqdHDh2qthdRwK4e4eszJBrFyhHyuuBrEowYXbLEjYiGsB9u8Ebk3r1K57Ky1y57utT3S7",
  "key29": "4vND8UDjHAJY4LXHcXcUJBuSMDAKzvdfuJ11bxv2Mb5TYeFvUkLBWbEZYt6hnRGqY9JWwGp6DPr2xYCAs5sCrni1",
  "key30": "3AC1b2otQieMuqpWk9JovHVJCWvy3cGL39MReNh11PA34LsX2FCnkTLWWHFVopo2o2HHFdqsTMTtUHsMgkFgQAaZ",
  "key31": "4vjfXqUoefkjKa2wUeoLJiUzvhe7Bj5CPjA3TsvP3WDzZ3zmWUSexJP4c82HgQ8J7i3xA4LyVwt8aF1d2mQm9aQj",
  "key32": "2GGLCDuxhCDhb44gfSauiQEyRsLzu5CoUPAUWAYt4heYhevppZNxgpWSVbLLF75tZws2ThWh2N5WhNCZ2cLy39Zd",
  "key33": "3CuY2t79CgSAy84LFH1iZRaqYQqXq8J6zx8rqTwX78rCBq2eDHmsySzzHLD6ZP2RKoNSFP8TjJw39VKrB35EZN6g",
  "key34": "55ZRooNy6D1CTPYNjNDc8PvVA7MmWqKMgzYZSZAWhXtokvu2j1jHrmLEfPY7ZX8WZ2sW66QqRJMGKGASYfeZ1Eyc",
  "key35": "21CMt6VetG3t9fEma8Db8jgffa1TpxpAadEHxSFZMnpmndpsvpm9ekTpR9UP72iJbncrRZdBqA3wE1kFRQyksQvM",
  "key36": "2n4AtDnEsjXy2C9aHXkKhmNREF85aw4NtumG3FDzVock8yZQDE7N7CrQvKu6BiBcSURHjJEt6ZWF9cBMadanF1wr"
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

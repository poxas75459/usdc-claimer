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
    "ggNoS7vLjU31iwvtY9uGKr1CotLpb9c6j2ubSTWeMG9kvQc4dnYJJ4go3v3gdxpVtiBdy9XC2tYX25cfLf7wPkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yPtoH8gC8CKep3xQ1rQDoR7U4ozqxFWqbyNo8FZ15b2rwR6VeTPaagE7E5amAEawqLcKpK93426Ldbkkrxp52FU",
  "key1": "5xQnmhTfhu9neYaFPMwJC4mq2NhFyYWaNbVUvFbNVthBSSWjrH1acXAwpo4TrdcL6fBskK4ZmgswyZNiVnvRFdwE",
  "key2": "5jVMFK3XSkFCZwCv7HyMAxVBjuLuaUhxh1Gf8ahPEWdVmXqqC7L4tSGcemX6PWxkUQd4fW878bmKCkfwRnnuPYM2",
  "key3": "3sJeEBUB3e9kUKmuNpqSPwU1eaGAo3FBNbuYWNmqUM34TVKiGHK1kooVNWXDySzpMMTo9V2qe64BouNPeEgjkhkE",
  "key4": "5RafV7tfLR7ScrEiinQbYhykvfj7C3v2TAcwSHBsbrBMuNyxSdsw2o2BRNf1sSwgjS8NvZR24Hztx6oQr8c5AeXH",
  "key5": "519SbYLee2eNnzGumXhWjHfoZ6qUij17Q5VSCzj5dMWLpytTdNpWYT9CCJnrBmazkkVRJMtKw4ffKc1Jx4879sHr",
  "key6": "3GkuTCq89DCnyidj7BeS1ZGuLeNHZw8hxc8rEBqtCRHAW9We8DLyZtJtp6UPaPHYoaT2ZKQ3V4BajvQe4BYADf1b",
  "key7": "aaUnuSCqLkxVpcZdvGesseCgzCACBEGyYHDU6AEM1wErkEah7s8fXZVmQ8wWSW6vADbYp2WoQhEanqLph3EoGVj",
  "key8": "24gB7wysfrHtQRQX1nVZbyLoEAiafvsqM3dwhTHDvkBZK2YgK7tHbZjexk99ZieLn2HVhVZLUzuQ72yy5nSCSeKo",
  "key9": "5Afdhomb3WMm35UmVwbTFwch1EUTda3vYAPvGDu6uMhkYMd9z9KRhAmMpVosfcPFVqy46wM7w6FdF5Likh5AjCXw",
  "key10": "5b7Ykonx6Aa4wNKn6X6767jo4vpshvhu5dHkAsbURNgVJDyJmUUVa6sn2foJB1sbZbCEoS5utpHCVzBb1JBC96zH",
  "key11": "yaqYhDN2fmxDfwFqo9XicVc9eEZYeQeozvrkB3qfbhqKyFVQpyanzSLeaVVS6s2QxyascYY1NetBFE9DJAXBQpf",
  "key12": "3qipeeyaJ2pF1DYqPNgtfSUppDWHPRecG4g7Xype2uVyhMvA4j5Ajut6dJcNjhYsfU2Jk36xh7Fkkodb339hyF9Z",
  "key13": "5hyKMNV7oi23oyGmq5jEuXixgEMKoSti9k7CBLUd4ySqDXmrSdZt9GwFAzBh9rKrURqqpMUW8ko5oA6tkX3Vkfmt",
  "key14": "56sxbBv7AmU1fmwEX3vL5JgTnxwyLtUJmvNLoZxu8HvBnwu3hpzbp3yiXd6LcNW8wHRBUW92YWVzXFpNXKa7wD9G",
  "key15": "5PTKuLdCqnRnodAYk9FpojJiYSGkYiDqJ4R1cPGpjJSn2fYE7z5xsNE3FtbnWt2QMpRwUwK52jZFB6UpoC8efPsW",
  "key16": "4WbbBf7N9cbvs1XjU61XieZbLoQmpZiCXK9NKyU7ejBrsfof5X1zjpGKAq3cTte2JzwdZLz17N57z3ELTwUtg5p1",
  "key17": "3jHkA8fpykyNd3ZS5BnWngE3vb3Te4Xmwwt4nDmEekb5x4n7WyEVHx6gv98y6M51w34HuSdovwWueNBmTX2gcVqK",
  "key18": "KTuKMbv42q2uoNsbV4RJASYoxtU5g515LemcdUMGXPfk4B1kePqhf18LQmaYytaeBawTAUptVpFQz6uUxdk3Ntb",
  "key19": "29VwHwz5p39Zgc5CtkULVawy1oQ2o1VoDdpyRCfjt7ygVLvz6cNAvcD88qSWiWpaaRjkbC7ST8vfgnVadpcwY7zN",
  "key20": "xAWkhABMuTt9uXxjXqAiKSAL4Egq76WjvS9pbDxGZhSfj3BEWzPzgDR72RqKEWi6mDhm17EvmTHYncbL8ZhSn3U",
  "key21": "3yLPcW6Hv9szvywDnxwjSPSx88VRz7AWSVoAyHmNQEqEbhkQdUSNtnVacxCdJLNXCkMZKr1jCdgsZZjcpRbARxbm",
  "key22": "5A6UB4U5rB49FsHf5GqyVCKaySteZmyaxKFra5CLFdhg7F7YZWmueqdApoN1qsmGAKerex8rsgKCzMCDs6o98biP",
  "key23": "5bQKY66EoRbJBM7MGeFZfwjf3jJQqLnMu6iQo9Zu4cU7dfL2S1Wr6oa32og1iW6tyDCe7DDhBqGwK7UybYLiZzaC",
  "key24": "2CHChjnAkLLfGhyScv9EU8epybwAHeoqAVXH3j78wynvG7cR4yQaGgwfPyAkz8nTzBdJbgGLqxPTNaP8pffenhqW",
  "key25": "Dvdky8kuDAwHhAe2DSpbBs95xdJQjN5ZAKYYgiFQT5bW5qoAuakbjqBY55THYmrN2y8kTTS2Ck6offkqPxJGHrw",
  "key26": "5ECpyYJ5WuvDyNpRKP1cFrUcHmLmecPDWFD7AR7whaeR5awDR5Y5ibNdNQ7Ym87kMAYgBLE4oZx3yA3V9gdDaoZy",
  "key27": "sF4U58iYxSADQZVYVaCabuFzh9bNqsFw53kU2QarQi7Rx5zS9nwdgF6VGcwvsD9y6SE7R6ioYxwBAVWJkcnCS82",
  "key28": "56bYXnBnrpD8RBJdKZWcEj59fQDKRnUweuYWm4f3R7uzMuuT5wKcFvmnvD2aUUb6FnfdwBtH7eB6AmARnxrVYnaf",
  "key29": "5neNBi3v8DQg5gnBGxrvM9smBrq3QGFj9BBXbyde25JsLgj4bNGKfTf1khdvFjJzkztU617w1USTAXtrdWhS7WMr",
  "key30": "5zo3b4hETKXqaPNo9U9xjksvZMDAyWFFNmyknfVaoarT3WYsdN7MDx1nBN3GBzXJdLrPD3heo6siY2q9EZc9z6kM",
  "key31": "2DKzd4k7L2SLXbj7zMs5gwGQv8nGJyeMjw9pgVh13ifYc4b3sSymErZ2SQsUiEnJSiSt7GNYtLyqKzs57euL7usn",
  "key32": "3BNs4xzBbTryZUFj91ugGCBejfs6kcghEJDG65WW16ApqyP9ZUSQkrKKkSRqUe5F3Derqg4E4RxrGT24ZfkPWBp9",
  "key33": "3Hdd3cbutnKbcYZAUjBptmMdLbUFvuP8BqBAAEBq1x2zRHhbdXgjDdcw6KA7oAymzfc31imT4gdJ5F9Q11nHctxM",
  "key34": "SdGSNXJJ98e5LSpArw4xuTMssSQjJeKcNLSTRj56KJboiYqjNmKdEfuuuP4dWBEJqFTUXKn8xFysTqM5MYmJBmh"
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

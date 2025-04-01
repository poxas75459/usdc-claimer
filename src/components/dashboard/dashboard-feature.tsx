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
    "5r5BzPqkXZK8fVpM1kh7KViXRHcD2bm9C9zecEecb3w6jWTmYrXDYxXwa389iijsLNPr4szWA9EZpWuAb5E1aNZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cDUc7fr6pZa6JNiHvfpEPqkq7JByHTyft4kbpPLjgbjNqxCEXFHRYxDuBeaTHCvA74JMfDvnZrupNef4jQKr5Kc",
  "key1": "3PyWvo4MPmqUMydeS68eMQvRbkgCccCG8Riic4eWkx6oDjDyJ6GP2WcCzzZgPQAAkY8V3iUfSh5bSnUF3MEva7Fw",
  "key2": "38wN9Q45YbD5NrZejuXnZigLCLSUMqPYEWAJFR3XpMCHEinWuPJ7MFz73SYMj9AZiG5xJ8bPqSdZLepNWJj4eh5f",
  "key3": "5a9UHxL2nusJQF7u6a8d7z8Fdx5nFNdU2JdV9kLBG4fEHJbSit7GiipgjqYukPfXEwWHxcvSt7oUXErr5XaqXfHj",
  "key4": "2iRF419A7QetnK4GquVrWoYNimmr59t4uoGWVAigxSPKGwbx1b4XRwEPdRbWnUfxMkNvz5D1uY87mA9L8EDMF99b",
  "key5": "5mVgfbJ1KWRPSCog1angxBDP8djHwPzErgoTjWZWLE7BaJKugWsGKVyX7hXaJGjsiqYTHAfdj9kKsfoFSfZxKRV6",
  "key6": "3vpqiy4cfnbiaPgsdFAXJgR7ngFvGcJnQKY2yR49nxfMqkAPmXn8tqjHG4PziD9npRJgDkQgq51eeeCn4Ap7VDx",
  "key7": "4WeCHC9rJfAABxjbYe1h1qQNHsuKrojZvwBnsGYwN1JyegysFZpnZtQszt2PCys7FB4cCaCgUchXxyqKC9Fvwr6Z",
  "key8": "5MN3x5j6p7oJ65W4SKXEEMRN6ptoQD5iDj3ehdzZjWiMUTfXs3ayiHzjqEJTcaViAfVQuepXzfZyTVAYnsx73Ues",
  "key9": "27jMvYZJEt7mAsLG1dYjny2bj5uGvM2dE95QskRTdiCuaz9zfFWXfFPyKeWqzrqafKJdFUsCj1JnEdtVdqWjeJYi",
  "key10": "2e5ncbdUeWW3gyD4HEWAWZDuSdkBJN2MHxGYtaY3Z2QJZSiVqJv9jbJv87V5wxLeh7LZVwkY7fGAWfMSnEWRV9Wg",
  "key11": "27pRmBxZciUZt19qzZfXxBeJ9iKsHSWaFmRq87DGuskihZipmBzr3iWtXRrKy9bJrJfjKzWvVrcndyHvT6Md4Uun",
  "key12": "4BP8CGiYxpP8z9aE8GaGZ5EByw5AkrZLTs6prJsonJQAhpEJ1kguJ8XVKfWTju3npEEYvJrGWVmDF9qm5Vfw7im9",
  "key13": "JmAYnkwk5h8gdcerXWbDTMQLBET4QDTF5k4QXbvDxVgtCstYsaUcZyU9PvdiatDRmfoPF2ModTMvnX5QBxp2n6Q",
  "key14": "2hXEqdGtKAjnbLndawZvt8KdG5yJ2hUiXpiXE76E92MmrUpGGKx7MPmR1h3ARcxme8hhjUv1U5Ca46BpqravgT3K",
  "key15": "3fkjd2qMYzSasRAdRP3rDQEupCEjrXeQV2sqKbUJjsHjhkFRDqhnbNJodKSRhXKU5GUqv2kXTpbntbwNEnTqFnbR",
  "key16": "59ZS9L5bSqDCdBdTQgDNrVnN3nWsNApja4tnpWRko3ST2bBdRX9tr5GWVQ7UF3cq6A4ZEPAXeSBUu11jFFvzdkM5",
  "key17": "5dZFNz4k75JdwdSjs1UaFhEhJnxB8Ayts1z1unxBB7D9tM751KYFVJF5vWjoX6A9rNQMrVoPEm77sJy2K8x27men",
  "key18": "2YxMbyqfms3QiYWhq7od2jZrhasLR6Dub9XMJhkZLtM6itXxtUyUf3r45tq8tcUW24d5tNvvh7qHeKeVpwXNLuFC",
  "key19": "58mZAMTRFPn5Zob98oE1gRX7CGnphZnoH3VAjmfdpKgPErWott5Ep1noYMCnFUj4MdFbNkXpoXTp1t7U6No8q23y",
  "key20": "63xbkW2o2FwnjzgxLFjJXtXk4EATQ8UvjyzAPHi8kCyodQmfrCthEUe75k2g2caMeMhjYy8XBDHEeJUzASKDoGsT",
  "key21": "5G1tshtpWaBKUeeC7Jf9xNPAVUkZoY5iy1PZLJHr6nfHrqLVymMyutTKBSAHvytHocb5GkBYLfVZEQVY8tuKtQ6u",
  "key22": "2ymzBvS2BZyYjpU4tLW5KiPAB7RbHY2yHNaNtR44ooLsRvd2PDH7fxeuBvQK9GapK52ex55igaHiod8YKkNW3joz",
  "key23": "2Tk7XwNW4yAkrSxqn88rofmxZJdZQs3g1ccjpNFtbvPpPkw6Du3m1B5Yg1WvG6AXmpaBzxtY7Hdy6LAmkPomVrC9",
  "key24": "Wj9J3uP5byVBcYX5tZje5Qg22XeyEx1Kq7ZMt2K1Xo3PS1H2yMcHXHKtgVTKMLu3wHbaYbajGbbtfSU9zL8oxiF",
  "key25": "2ptdsskxd1hMY9HCoX4XKJ1WY5ajHNuZatN4MbTyszHCXyMhWTeHLQBTTEdXTWpXXoUdVQXNT9uLKg2PFQsAASZV",
  "key26": "4BZEdcwY7uB2up6HsKa6Lttja86iPK1JQz6RJ3P8js6nx5N5avKHy6TCpUzdJsMhPEbNm6KeQj7wNkL5ogekZt6g",
  "key27": "34gYUuTcHosNiBxYtHwoSYLEhKAXe5GBi1jg4RJPW3Bm1i114EVt1Mck4sBRkdqsvEsgUL4JJuZWMCv8Qmn42Rud",
  "key28": "4Qc4WdawRfHWmQDzLbmRHfubV71yYTY4o6zyv7EFU8JiUDKdTj84q6SRt38R4FUXT4YQuanx6qoQhQ6ZkbTPP1e2",
  "key29": "cEEHPxCZFnDhJMs1gjAZxnz3LgBwVNHQfpQ5ZbCnavc1xzSkjHnAfqfvxy3ccTF4Y4itKG8TEFz94JhmhAu6NBe",
  "key30": "62i4girexSxhncnrZjMeYXkmrocjDAcy7xkFAokumApxhYsxeJQxTnMRCN4zKwosYFkNkDS1aeD5sTabYhiHESpV",
  "key31": "3RrWhwTrt685V9ry9nt1AbpAkJA1THnPYUsBjDA3gkEcWxdVeJ8jFD2ztoBmdNvUTah8TCp8pDhEPViunetdQYLU",
  "key32": "45dY3jsuCmeRqV8wx7RJvbewNM2PWYEheu1gepsGVjbSpL86yur2ydDWkNfYdU44ziKDCzcKUguG7uNAsNt4bzNt",
  "key33": "3xRajrqwrJkZcnLUZzTFFTJ8NwEhd3TqpZTT6QX5w4uY1EaR48sCYTdAztGk89ceEwXCJoUMikhwpmgJ43CRB3Yh",
  "key34": "5WcTXHYkfREgcygcjfxG6fRYQSiYf8dQGEYSNAoBCEMzP99D5D1kvP4cpSfc3hZU7yVvrqTpiU4iZkiyAss73947",
  "key35": "3bfE6bFErvhQm3AsrVqfJsKkPgVZDjLF6QeUo19eMgTCymMdimjTfCq18nvET4a2jwvHug3WxFuh7J7a3cfQZaYa",
  "key36": "4CiTb4gbtxb5afLN3Vsy9pkTBD53pofUqtv1Bf9njsPvMhEtbXjwkJUYxeCTzWoePJJHrodhGysFBUZxbbhRBNjZ",
  "key37": "3MLw3FfsfkmMdE57FwgLr9wNCBU9TrLm86eAdP2zLSun1CDEnWrAAdKWDZyj3CRyQgG1r7gujAvYgwybya5pKnk1",
  "key38": "4gRDX4zDbMK1oioiCkdgg5uJLAhRiqZ25pvvD574GiycPH4VUsWa952syRZLQrkVjkCXbU8WM7jxhCWJc1b3Jkf6",
  "key39": "2dRS3SxrSXaZ9jZFYaKtkGHMf4XqFYn9frtK4UGQ4VDf2v8TP3hQZyT8QNS8KRAnjPXwC1jNYWe3aJ6fm5YSETuH",
  "key40": "436oisN6uqQ6m39YytJsBm1J35RviF5tCVDVoLn5SvmUWwjcRdpyEPmXqb6NBj2Jc6NU2oyozH39NWhooUQGPXr5",
  "key41": "2T9ywvnkdhoZbuohRBLwDuvKftfmuKkYjPaXxBQqhyZzkWyEbZexTMqMQnevdTPdcuyxo8zfP8vVFwhZeoBNERUy",
  "key42": "2c9GLiovDj8VAs4oMXeoZpjJqu42uksabu2Dv4wyAnEsdGPoLAaTt5BEMwcE2AfX8K9tBK2eWeJiQJrPPzhfiMuj"
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

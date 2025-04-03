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
    "2exWVSLfVbzf2eBjNokbJ2R9MjV8HUSBf9ocTCDvLSNWC18oCuGnKFnqTPPkJvs6qVSPL8mDEQiCysidd7E8stx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTTNnQ3b1c7xSfnFwKnnodxqCEDm99cSWjLCSy4UvkujhnWfqJomkQrq8xEnYH9u1CdVPa8JeHFA3gAcpY9saF5",
  "key1": "39SyEgsGn8tp7UtMWoREuxRCuCQhDNx7M5LZYxrJ1ts8P2vX3xdGoGbAFZkNi4B8tWJXWzYM4d6GFNyWasFrYo51",
  "key2": "4ENfaoU5DVEQTNz3TZupNT5WdvQ3qovWF6KnSy7EqWUpUQsiYFKjjsD8BTRtm6oKKfeJDyPMtxe1PX6zZeoYVjTK",
  "key3": "B4ZsQ65PDZeYcMLhvfr5sk9hqTxw1WLZRsPgFY33Sj3HNvJeD1LwBbFktafPYrNN9Tt8Nu9Tgpfp25PNZZFCxV1",
  "key4": "4tfHSw7U8gSGhrVFsD4CvZcNsADfn2ou39KSB2BSvWQyvUcJTUzxmFqUBdD8ztxFrVBZi8gMFzc7FvMj7bXQ36pp",
  "key5": "59udJMDj3xHczK5L9pGAyvchU5ncnoFY7ZtLofeAWRAPGboZ4QUJV3EbUeFpaVFkNFkvtjvcvfiZpnF3pc7fzTuX",
  "key6": "26UZbThsQNTbdTEfY5Ben3GVYVQwW28Y3fQNmawU7DebshajtoMFyupyrBZaMz3rBnekQPbbzo3YhqCRU4T5cWR3",
  "key7": "5fuLcXcSBiogAb9kU5MftZKShV8JmD2N8b9AfMspMeiFHtqhFJX2oDXjB2AJFFMG5WDykcHyzJ8dDDbeUNQoeRYF",
  "key8": "sxSRfbH3Hebeid4gdK7NgrsXse9SKptw1LPXjNaYiXpn5FcmkacFxrKfFvTtjsUYFZ2BYRD3T4QoL5E155R8qeN",
  "key9": "3MjR4eWFn4B8LvrGsQE3L7DsQYb898T5cdK4hnywER4kRZTF8NKH1NKjvdW9mboXYd2uWBY2T7gM3wYhkTMJMBmG",
  "key10": "2eXK26ysxuVSGAwk2W7EExCnbSFVqvJbhtoQB1Njyvt8H5VK4KixGpeoZyhTHcd7yKeug2kEv82d9taRtgAGbKTS",
  "key11": "33ETsxPHDgFnaB7wzGdgB8c3TLD3c14YaduhxgcTrNBXFG8GonqVimepK1AbvCeuZMxZUi2dd19TmhkaAWwCBadP",
  "key12": "5q51urL9kdUXKiXKat51sA4o1e4qp4ymCLvAeQK6STmQ6sptBv93qLcqRwUYSwUSosVo6Z9KvjJWCyBZm8s1TJUA",
  "key13": "2mtixPGV9kqeq67bSvzjzznSRU6KrLrcw8bzBvYdwRFa19CaKHJa7D1x84Y6Abaxbt4KxFee5xW88qnXy7JhB2ym",
  "key14": "4nZBfLYYB3FsXXnoH94ZRMHMnz6KmW8ecDa46ePg54m2FJd2pp3mXuAXJVmsbZyWMG7Wb4QPLh4Ho61PzTPuT5wP",
  "key15": "4y1QUkWrRWjKwWMKDNKjRbUT4LWgyrtvD7F1GJYcJZvfJnawBdk1J2env4HtQPwywrpNgyqDWfetGEvRgVdFgZL2",
  "key16": "GLsxeb5WkXgNWYVZ8mBkUUKkNsk7tV4iWTrHfoEite82sA519q3oaKrBcgGeEAugNSZSHhEKbViS1UHbNJGdpvJ",
  "key17": "2KmwPJDUzaz8DfCqUF5xAsZHnmqf9dKsvk4GBDBfvjhCPG5czTnymp9qVnbrK1cQw9Bwq1eLcnaULsjCeCyLVevA",
  "key18": "Rx9QpqD7SARSG3UXu5McftDy2p1Tgb5zcNHBdJzvX5M8pyKL6efVHKfhxUKrjbbUT2SjvLmF4tAmXqsNJ3A9RYz",
  "key19": "64CkAUy95ZMSQ2JtDiJWfn2JD58fR8C9zgBm1wXWeY9k3igs1mCLkEGFhxzPYrDpgbhznHZPH1HGkFGmixoMNW3b",
  "key20": "4GtZBFvWzGLgz2YXeqjzYx7B16zBLVq5S5i5yoYu1xmctG1iZ73fHnHLSSDjwqVoYDhdGJZkKQvczb3XJMiYTd7j",
  "key21": "3ymKsycBWzGfHRFovVeGP3MqCcZb52mnNGkaqWaBSQofuYJqdW7XrpM8pudanfdr1L8qWnZHS7BsKx2Lp4WxLHo",
  "key22": "5QCfkCgwA1Zfx5w5ASTFgepTixzNzwddDueyKb4Lkp4L6AqRnJSeUVK59LLXP3NwVD6dMqn2mKFsPCLv8UqHNwiP",
  "key23": "3382ePheEe5oGdmeWGepUuMMzAgeKmFtDRc6LfYwnHoyByXWjBf4LsPoYpW4W5HkadjLbHE1NirJRU42yJibS3b5",
  "key24": "5zzRP7FL6js91sj77kC6VABX5YGJUMb2x1eLomb7VjYWEsR6DUbMXhKrn6vKx1XwKdryMLTABW1yhia42njPfyQh",
  "key25": "2jFdZu9mBrEh8aKXzfy7kovw55H7qRoMJcS831P3Sg4cxgarrQFyHEKV1y3DPRvdEKq9KVTMchgYzTtH4NJgss4G",
  "key26": "4Vc5gHk4aBhUPDW8oJWtFXGrkR3686QArXKryFbDzQcNNbbjWLABuvU3rPL6M7MGssDvCtKEMLNZBf7xAJeDPoKV",
  "key27": "4LEaC356euXi9Zr3GjQLvVnsDwAqRGG7bVFhWWHVV861EP7SvhNuuVixGedh3brHAicGuhhBgUUpGQM38ySp7tAH",
  "key28": "3Yzkrmqx26ojBkv2BS88J8XLV25bgZY9cTwSFAkUckwMWUfZCp4fgAdhNe8Sm1fv9sAgqJSMtiwgMFhPuWs7Hz16",
  "key29": "67ZhmyjqdwpgS25ottvsQehJQ311o3v75uzvWQrNsFPf8WEJAqk2qd6k62rQRh4ha6wMy6XyRK7ENHsAAmTUnBBr"
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

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
    "3Zj5KJFq7R6kNeTMUEnKWAgAZXWTBzr6h1B79kQrWmF8b1VB6CQM9zam9iRymKY2kKAaLiD6ejqVUdfafRcU6bJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "69Q9r3ySTPpFgMXkgRRAq3SZiPe6uS5armthbStsMGyXjacrpYfW6yDHN4poV9Amq7k3XhuVao6LdM78ohgkZDo",
  "key1": "25NECmR4AcDE1U2LYQaAUzgvdtvfbHgDLDVNXws881ev4rrHsfnHm21yJt6qmsKquQarNa5WuPmoqujGuayTtVXS",
  "key2": "wbyET7oDSCnVFTVHifdbSz729jxSNzkVJkhBSuydwnYvgxXkJxFesqNPQGaNmvPM53Q5X6aLg8sXC74zFgGsdwg",
  "key3": "5iAcSYiCbiueJpzsKTiCv6xMa3NsAzCqZzNJsJftMkMCAEkRyGyCHdE1e73jxg5otpeSLrHyTqQpMT65wx8EjroV",
  "key4": "2EK12neYdtgL33XspeU3733psSwcCPhTyjKU5f54SpN88rE31VQHnxU7twX4ymwPypVX4aUdMZh2WrY4kqgC53XM",
  "key5": "2eo8XbWjZ1YcJpiLBQAPBohgsXU6nMmPHaHQJfFwx4cMhhD6uXePW3wmHqfAqf99c8gKGv8uP6oYvoBwCdHduSnm",
  "key6": "4r7ymnopLfjKc1nqkDq4nqy5RtShFKPTLDekbyZhBAdEwb9WZF9wTrTSUGe64X8M9CQuMHSUnQBMz9uT81N42PpJ",
  "key7": "31LahnZXfTQPZro5KK35XzBgqrhxZK7SwhBvcCxN6egEkWcquGuB41hAGGbUpmTuxu1EoAS2wcJDs1iZC4dzcrZN",
  "key8": "45ddXmVnk1Caau5SGKSpVsjVXx9wsukz7gHNsFWxN99jPVjvzzNv1PDaJB6bPfkx5LXn2QtXg9sLKJk4wjC7FDAD",
  "key9": "4EwrMKphT8mFWw45XvycwntyTTWt5yeMcAvnZVwpJNPVk6uVdZSe9snHcbtkgWYi7HwPuCagQSQc6ku6whQ91tCN",
  "key10": "LsEYhRdD7r6UBz4EeMZBtSzQT3SEx9n1RpMxu6y9sv4mcp9nWKecYF6qNptcgBG5W8WZG7Y4rCmgcKLrdSKivXa",
  "key11": "628KEou1S39aCvGM3JrFxw3wDuWmMRKrcJ9AwS2vnsXMLb8TvY2hSiGfXvZMYyLfv7x3PMRsaeinVAA4wFQuEgXh",
  "key12": "3GMmGQvKzoqP9up7zfqhDPFUFrZSNcJfNG5r8TCTVwz7gHF98258bTA1T6cxmtc73UHgvhoEN3pMkWzpUZz96TZf",
  "key13": "GXAJU7ix6HRJ2CSYRNJZhqanmfEd9mqd6YXu7EpJyoY8U1n5zVnb6QoJaDvMkQP4Mk6PxWJy4jWYJ91YEqxYwpS",
  "key14": "4UnMFaqayqMPmYp9G97tqjXNWdNYZ7WjUbttuFN1vsQLWgHBdQFiFhPDL7QgZST9xLyyCQ6a5rW3zxZnr94k2zVG",
  "key15": "2NXawDKkHVpmyxQPDZKY5dALasAtqfbtc2guodq8N6cwTZh45NYhQJiuGxNT4Wjm5M7RseNK7ar4c6jJWMxZeCsw",
  "key16": "2ZHGnV9uBQY3ZDnGCyfqXGFDwQc1Y9oGrXxUb5RbDoxgsrYTex3QCdqZyrMbQsdbyiLk5YUQuun9BPVa5MN3jGMU",
  "key17": "3sMGEip1kZkHAydePCQ2zwUvbPrtt7R1ujj7RKMtUDQhYysy5jtRPP9uTqySdxCYVfY6sEk11AwBYkcBztnJ7h8U",
  "key18": "67WfFyJ1jWRtYnZDCpJXLMuPxRrxSzgqD64SiTUSmEpZ8amNgJZAdn6JqM9L8KKCrqAzgpWXpB9aW4LV24sfEG62",
  "key19": "b1g6BnP61ntqgGdYDTjjDB5jzCFvmG164NmSKbDioRq8dg9aHc1wmYBtvrMJkuUjiQx63s6XCT3DmfDtt2YD1d4",
  "key20": "3Lrjh4V99F4Gcf9r9uHGUvakCYD6TikNpXhsPmzALwHMRVLiNPbZz6MGfLPYm9nyETQYtug2FsCFRqZ8PL5CCvHN",
  "key21": "2EbimwPC6CXg8zCFTPeZzAWVw3YttUMZRsg9FFcgyPHjfqJBU1Mr19cvKRWdzK9e363arD6j2cXmdUf29vZje3RP",
  "key22": "3TzuWrzCGQrUzvJ8Jbow4xqcxVEY7pJsMQZyEBbUnLczxaF29vx3NRrYDbTgpeLFfExLuvEvnipGkFyUnwapr5BV",
  "key23": "5FfsXeqBgNkMHUCmyY3Z6HYVFcojW7nZDQ6t1SRqoUUcZF7TLaQau5wC4uRuZfAk1ZMhYTdFgMxgPGAfK5oKw19R",
  "key24": "5WfTN89muGUYmsANW4CXVjbJKMst51ntDyos691mVyMqUvALFQrPYo66ugZ9VEsCJWeYpD46CEGq316xbruXCFZ8",
  "key25": "4yp5sYTMxVNTLF1pHxQoDcxh7LVVSmD981n6iH65nYFEP1QyNcHbyYHr7pJknvkafo6eeLmmJ7Sq44DcFVRGWCnF",
  "key26": "3svKTDkqSmbUoXjoNCxcvfwFGFmmZMqG9Dxgue1QvYt1qhuR8caHimmooL19Aos8qXoc2YhWSvYzGnPh5jymJDJM",
  "key27": "4bKAgWA2TAGWMJZvMB3dKfbrBxUYGTUs6Ev2xUBBcvSb7yAmt6CsEmU6MwEwMQUaxyj82oqJNASqGTmhHYrzQJdd",
  "key28": "5KoBZkzM6EtMbf9196TbyS58ro14z2174AfUNATrwvZCyafmQuBttyAqoxeQy9DzmenzVPHgiiEkceT7dYwrFX7n",
  "key29": "3zZdm617znZBHbEbx4AB49f78eRRSPrR9s1ZwQ54TubEYdB7CUvJbP2fHtHHLx2SCc8xtCEZgRuZ8WuDd2pcNHev",
  "key30": "4hU59PDMeGLU9MpXmPr1ukCuFBfSEjv31YScSV685p9be8MYZ1ki655cfTk6bmLm6R3HWFRyjfxuKMZb3SMXs2qJ",
  "key31": "5s2CTHDLhTZ7CQ9mEwo8D9kHjHoCFE2wq5LMwtVURsibALKL7WLp32ccAq6gXuGXdfzZLnXZG9Lz7hCDQfZA7mCa",
  "key32": "3DKi62PhGPYspscm53SN3cQBTZe5GvZfKZrQcBMtD46zUDgaXwB4YZMWoHEikGgdeTYy6QxVGgwAUniD8rjYaA4Q"
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

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
    "4eCPUqgsCvXwnoV4pNAD9Tzko9fmTd1fYUGvh8pkvJ8dsq85b2fCYWrLuDSp2NPafCSHQp6jQSjW7WDJsRXHjRh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56fSXKKj83PndujnPy6e3bhAxqu1bc9diMdc3Pg7Vk9CdhKjNAAGAEn4BpYWytP3H1p9rRHodCu6CEzL6iWr4Dad",
  "key1": "5iS8jnDMtQFdj7pudivyVVu17XncKcS9Qa2UZzydvwg5rQViQifAFCK8euaEGFFbevHq9YBY6Lu2sXnWERizhhEP",
  "key2": "3GXJz9XupHmMnHrHtpXe3gC34JbZ4hWBkMfuxwbJZgEWBdszw3qYLd6CtNCqShT88jdaMeSiGsKXxvHg62bgnPuC",
  "key3": "2gZRRygWUFFRA1rDZa2yURiXB3YML123BZf6vRkg3XBLc7d9iZimnJMC7oyFegunwk9oxrt71CmBsTE96Zhcw8d2",
  "key4": "3n6xiT9eJuh637WkZbhpYcz4e9SSgwh293bKapNVTppGahFwk5ntNcqUnqK8e6wM6nNdRiKNx5AWPFiaF7pfpJZv",
  "key5": "3EYBmVimRjLgLhoKUxQhNFDEDZjRoVKw9Q1wqLgwURQhXbY1kffyBqrVmsjVzaK2F9BYSPBbUz2rDs6bvqwjDMVd",
  "key6": "2TmWBy3oDweEAFsoZPDruDtJpXMNDhPdGeJuKkAUNLbPMvLHaDT61sG1whGbZDkSRTJEet68Ehra9L5uqKER5cqs",
  "key7": "54pr2z16J2Ajmd6wsieedsvxV7MnT44WqMQcroT5MtP2C32o6Mu7X5SC7tWH5dknCHw8ykwYDVkMkgaL1r6PLdLi",
  "key8": "4j7w4Z7eW4pq9283MDLk23ympraPKcWf1oHo5YyGU6AwsHgfUizoVtikJxYvFDAqEwtpWJTLADMbph24eHkTrzB",
  "key9": "5JQB1Uc2zht5d1sqA4mJZdmeS9d2dT3K2W8Levia4N47cdveLZc891yPsP3RbEdGSRxpCktV2rSmZZTMSU5Vm8ju",
  "key10": "3unaivgoEdJh2ef1NyeTDEbZkz4D4Bmu6P5cS2bnZRwm93VtRr7vBtdtm7omf9TxSjzui9oCbmUjoGVRpUgAKN9X",
  "key11": "3k92E8vdZWJUU2EmyiaC2WSAzvDhCMJK7tUuAkRc9p4bBhiosaPW8f9RNQQx2fvCtxD96WZircFtfpXp9XLHthfz",
  "key12": "5rY4NXsU3KJttbrguRpSdhKYLeJ8LNuSLvN4U2WW9EcB7uRHreQe63kgLZsKGv4qfC8tehHxWiLAWf6YyxThsDsL",
  "key13": "2P1onze1XHJYN2Xhne2zveBEXodgXSkTvEfUjGbVADFGxdgz3WniXjiLtt8H2PJQo7AC3ExhpR3h1rqXv7bm4Txa",
  "key14": "4TcTQp4fuh3iz7BVBhBkiB7tKMDFrPGg3Rhfjx2ELtJDDj6r1bc5hFT5EPLzCJVoyAbEM9dTQXNEwpUbrD6yKx6S",
  "key15": "vDhboHeG6NawYUZPsEYhyCde59JJ3xNho6ENznZSDd8seZM7mpkQmD4BGtZeWdRoc1amJttXh9BfyNxy4UkPYH3",
  "key16": "25SiPWWzyfz8Vy4TC1yboiXat45X4jJ2jW3kFCakAii72pPUQxFWDPFhX9jydudAzRdiXiQ4UquBhxbDfb7haU7c",
  "key17": "431XgFraz5ri2DC1KGrcPRto6jQuaSpH5yGe3sgPihsHtGLFPUEp4vBaGDbYJEGVbjrcPVzaspZEi7qFsNopvkNL",
  "key18": "3n34mArVJ59NaiP4WfhVqk6P4SV5r4nYwvMUgbTg3EAPtQNU7gPXA7od92mfAcxxTGT5136eKVTikw9v9pWWs5Aq",
  "key19": "2hVoYjfaBCacQVgKB6EW5NyRv4Gs54M6DYv428Z2DGGzxBahV5p5coW8u3m1pLUCwTeScm9myKWGVtq56uFuSQpB",
  "key20": "8qscHzzGgQ2hzpbYGDkEp2vXwyWq5Hv9mHhg4M66CGQKutajFH3RCKzRTSE4XYXcuFcyzj3P1rzqaJT7eudMbc3",
  "key21": "3kQ65v8aVhrDCeU3yAnQcY9LoGLZS2BX4knJT8xB7wDWDATz9wcaPiztydzSnR5Jc3sS1qzWNUPxSu3tqXjqxYrM",
  "key22": "uAHxFcookKn7183copPpWT8DkLtuQDzMLQRpsqVcGhqz3gF4F52TkrtRvR9KRV6siYXKScsExSHBYdLWNWhchsY",
  "key23": "4dr9WfwvMteasAvdx6wP2fcCv32EbNqG86UR9DEKEp9uGJvPbK9sHR67RvMx72XZar9GNVLHhTvndcKqrt5dhtWy",
  "key24": "nm9U9vxXWDtTnev1VXfKwxCvhoj3z3QnWQ5pn1rN8AgxGki9Q58wbaSFtW2UEfyk7LZmZ8GrEUo5Pv5sKKYaGXh",
  "key25": "hKpysnPz6bRCnhk9AGHnWUb9CG6pebpv7CU6iGQRvp9BM2JPCssjXhZbcB6hUPpAD2dBvmSyaJHo6bYBySEY2wz",
  "key26": "5AB3wTvuByJkU6HVZNkpxb7wjZbHz8wey5wLXTX9dLKcoTEmcxQJRhFfJd9AWtWxgvKUhgKUWyZ5Sey3x2NCyvd5",
  "key27": "4vKHdxdqHMs8Se6EpaAsogkVsjh8VB1og6MWrWhRJF9FZWdR6qBj425YuTMSk9VvrPB3gjM5yJm9WoRRfmWdQyLj",
  "key28": "J2zf7uAjNEwMB2wuUZs6fF7o2FqVGpRQ49ZyA9dCpJ4SKfybwzMd8ycqPPCkbXkxANRE2LbisE3WzZC9mPDKcrg",
  "key29": "4n2hgchnAxK8rkmvn696faSbAh6MLFHxka7UcRvPv8GjtKaSKPRxPZMEJEZBbPSntA9dn6zB9ioiqdsdqUWonUfG",
  "key30": "32Gb44DgZDCyPWX4RYDibb6J14dcoG6t5P2LQZuKYEvmRuqSZbFCYEzWAvXxtU9y61RnZ4WC8heVigDFvqFL4gdy",
  "key31": "5Dp9Npj8WzVhZzh7KWZR8rEFjUVVCBCAVHuFhChvHUXeZaEeNbu5NS4Rh9kfEg8eYL5uLuoN1gPGWyYouYcDa9mJ",
  "key32": "63U61EuSkKC6K5oFV6QqNg5KQyU5Fi3yybojq3hryVNBg3jne97ksNTCZchiCeug6eFu6kUT1JQfkyy4uEHS4B6x",
  "key33": "2qWJSkrBk8Hj2SMaTrADHvqP6RjTw3bNTUHH4uZTN1vgTDV1EjQ6MoJNSvQLzF16i1HEo3JN3K34EoBLqV2ZbHRK",
  "key34": "5ZHUfym8h6HqYLXXoLZjoWmc2GgjdDjJ7v6KbS58H5VYeGvuPRyQKstXeg4hLnWWD9Vz5Vfrij6BKtWC3HXgk2mb",
  "key35": "2qeDtt35aybeDysRKSPiGCtbJ1zTLW2mjZXJhKfpCYmYB4HzXVSB9r4uia4gmXm1Jp1Uaej8Tqwdun3uSSkC2tm3",
  "key36": "3LjFVNAeuZZeLErFgen5fvPMox4y2aXsd9GsjqmhHHL1j754La3ST9bbtz4r317R1H6FrfYZ8xthTQ1ttC2wkcf7",
  "key37": "5Q1jnHn1WKW1NX16gwQBfhQk8nGHBthtqgZiLPGroqwaGuVXZL7UzbEByjKLBdP4CzqmVNVmX2vUvicD59acYqvg",
  "key38": "2LxuPFyH5fSMdTLhVkdSspDCF8rotppNYNzqgSZsCv6iVsK8tNw2mNguGKHwiPXGhW2iwtv9SJbFuKP8rbNSdH1V",
  "key39": "2FCqa2C9JWXquEfg6DWSMWFu1x1rjMxVZYth1VBpc8BZyn93z9TJcZCURk9ighH3e7zvUzpYMpYx1k2H89yAJteM",
  "key40": "kb6v8bGbN9dQzEy4AXkfoyu1rtkjcj1rLP2apr8rztx4kxuPPmWeu1prgnpc1J3wKWBBUoeeHXFpmAgGooy39L8",
  "key41": "3o8Qu8b7htZRydbwhR5atoK6wpBG21gzLNfMHmrHej6KvUkenFeunGn5H5pV3EFNE7f1tsYVYaaPvbUUL82Gqwd7"
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

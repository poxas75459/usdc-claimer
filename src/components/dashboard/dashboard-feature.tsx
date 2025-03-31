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
    "22t5Be8vC8nZvtzsTXV4EWcYz4LEgnnPvNz36ZMwUymgQjkNN2v7kzD9vW1uELa68TbtxLhjKUeG35FjDnKGXmS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNqqWTD82cNe7cmyVJk3pYs6ntNjkhSbEmPtnfPnxDsaE7nyc4zUscXtz4XizoMAo7D4gttraNGc3dQURXcryjP",
  "key1": "57yQBtqMQJNRqCnY6RoEMLsZsFCVWFYPAY91sC25tVnuzwKcqjJGJd4w7tdv9zS9QUpCAkjJ4RGMPTBKQQTB3q8t",
  "key2": "5qDt2xiotNFPXaYkBX9coWx6gjBajDCYwVjBRS2zL5diPYgZdxg9ssVGR3rrXL8jSuEnNLmwNZrzdwqxkMTKUqYE",
  "key3": "3kN9KSWVo9ozoz86Pw5KreFy8uHLd5MdsEtv7oCHoDqAtW9FX1HkdQj9p6AyoJsnFNBUhdNp9VAbXfXzfMYXBTKz",
  "key4": "5Js64Uuy5KxioX42rFSW9LMkEUqzpeVowpJFvVZ3bVbLATqyTa8j8gLW1iTCkkUnEMAEtMPwospbuxKBEj3zJu7v",
  "key5": "34Pi6MeR1K5yCbPdcRJk2pVGGTqzxe7Wg4ScwMKCzm3WijyQAt1ojo2M9xZuGyXv91AUtopS19uZ7jZfr1AoR4iM",
  "key6": "4dWaHZRQDo3jiSeuNByQN2Av5r4ppK2PpeNBUX7AC212PGJZfa9iGJRYgQEcnq9z5ukxu3MKmD6c3ALrKGm7pLPq",
  "key7": "3iGFvndnKMY2RapiTXCWZHw7scfWveGb6UwfKLtvnnhizb2MWnfKhp5SEvwE1pV2EAEisWtUAdB7cPcLwXrKUTLg",
  "key8": "5diCKrGXNC4wx9N262mPVjkuLGHzvexnkybpEtPmkp2XXpNqnhcN4JtzYpaj4meDGAmkTejDPyPyk1mrGYq2c2TY",
  "key9": "4s3F2pioCvjrWN4M6ZcaTrjbEdTdAcuUzmpU6pKzUFgCD1kB7LxgvzhzWnKqoTMRVTMsw7Qp7EyYN754AHsPXLiC",
  "key10": "2damQhbLALTaRFBFDN4dVQtjNL5fJVdX9P2XSAedcc1RYarVm8Zx8Bm8NkQ9w3t74HMBKbew8UDgbgNb7oUywrQF",
  "key11": "3JJtiBrXuovbpSunpqr9U7jvmHRXMUkFGwXGEUzvrtWdzkDFhXtv5znt7YK1pwapLZPFW45pUgdi3MMCHJQz9oR4",
  "key12": "ibwTTwcfLWZetpwkjrGdz4adUXgeR8vnvzLS8EswJ11LEnxLGSAxh5V2womHTLkmmK75hQquNTaiUzmYptgnHnr",
  "key13": "4j8w7oqcCCbEjvpuMVdHCqbsJQECgUwfR9yqG4mkCWyuqogiyjfLtsYqzaDeUwbdnxvSR5aYsYjvmz219zwaQJ41",
  "key14": "5VD7JFTmtZ83ABpLKyEKpQfAeaySqwSdfvVacqfMGbA5RRGL5EsUDz4u7XSRvacVEYGZNm3KaBdRideQzqWTYXNs",
  "key15": "3RtsTaicMwr5zvu68oscR2JX84z9i863K1x9CiqpvAnSRG8KgmXLAwr5FnVh5aS1Pz4ULZtad93KFyVPRCiq19vq",
  "key16": "qAZpCwEeru2ionucYYS8pYTeB3m9bf8nE4hvvUa7mxqBWHqVDkxBR8QBY6mf79f8HrxkY2uTqn7txHrYe87AiRS",
  "key17": "22VjM9L6taytb94HZbcxKjFPjf35zqnXBXuDhZPkb9Qpp5L5DkqyXtth5Lvcn9VQks38witqeZyaFoFVHCNPSViK",
  "key18": "2X8xaPXEjZLdU9ATVZDZvX3kXJCrKUuYjvnKL39M21D1re37u3F9zFtFHxy1MiCw1p73ZW7C51NsL29ULSGXe27E",
  "key19": "4NNsjc6Uqg5s3JPynuha4v4CjhL2getAG5CaaS6DeGs3Ec6aeqc548MXq7sZLxGxb7heVg2jYve5UZsGXhmSqcFb",
  "key20": "3JrwPACGR4VdFZ3F8yvPYsNooYyxQ7yYimV2LX11Cci65H9LKK6PNm8RgySQhw1hhQE6J6bH9sP8ai4z7HiC2RHD",
  "key21": "5soPTR37CzvCWKWpvi47Vr8d4FLmKrNfwdX4QQAYgJo3jYu3PsDCvjoL4bLK5jVvXYcxa95Z2LDxmDT591STW1tW",
  "key22": "5Zv9KZJYKGvgCBiRFxf6oxsbc2pv3Gz5MkXoijxmCvHPDd9cFAavHj7HsQFQ6ipU8HTMvrKSgC2xn1HcNkdCR3hd",
  "key23": "LQey1fcG395kwWMC5CzwQT4e9V5xzstkxWUykJHoz195A89C5SYh9se3TxkizVQ2ZnvkRjkJK6RhrHKi6jc9gwB",
  "key24": "dBDZkK4AaSWM118cUmFFotuHK5zRbHKJ3Rjtfy3ZpTCiinJWEiqov1U8ASrQyw9SXbHZMTuWMiwJMJLJFG3D3gj",
  "key25": "2fQL9GzSqqeYv3tcgrspLU7ARY6XHPhC5RzEgunrLSRtrd75rXPEfvxNRR2CUhs46dwn2StQkcBG4wU7nGWLfe8b",
  "key26": "5oNh3HWhDdcjdR4r1EAqmTn5JT55r8sBaRXPqYnAKy2wFFzGt3g6s6Cow1up7BX3WN9544Pbb84sYGAQdugMyBVx",
  "key27": "bX46YwSRsYK9iNCgFMD4sgkQsBRQoYPXndfi713fXReGEP8hZtppzGFY1RqNWK3BTfKWsWquiv8NZmeMDXNHM3u",
  "key28": "5J51bDAvVvw2DyJXuVG33CiEF4dYE7NcLgFMpkvxsENsrXvsB2Mh4k9oxo4fr2N7Nxd83JAhJq2U8MfAsDpp4225",
  "key29": "5jBSed9sjiFRVPS21chbasdsS7Co8KREWSERR2K2tfMXvkjbnmo7kuudhooQJWjZnrq4uF16mRtPY4Jzk6bFQkJM",
  "key30": "2SK4AncNjZfQYN2HVKDPJDHeZedBuCg2dFPZdymxCDuA4bwG6thu856B2gnragZLCLuRrYC1ooB1ntZfvaUevUNG",
  "key31": "3DiqhpMKugRUBKPX8kB1iznc22jY73SNqqJN6D8JSCGsutXUQKLtAEixR42GX39KozfVaZSxBVYwg24sarubbmLs",
  "key32": "481dvNBxcFrchyPg6WqA1gU1RumYVSMAYNXsTymTV2yk8BYW7FV9Db5xQN1bYE7JAJ6MQfERAZFVkxJQYMpJ34Lw",
  "key33": "3vfNFcjx8P1dob8XTVj4spDxv3DNPWwykkGbkeNSnw4kGeGttGcrgh5UqsTzcLFpV4tmhhYgoksSUNnrzi27aPYp",
  "key34": "4LaoGjVupGjQ4T6ZoPEz4hSSSNKtUEQG2opDQA7p63sVm91Pz7N86e2fPmdH262ewDDnnVyhTXTRziC7Jd3gbURg",
  "key35": "4cJN4mgNTFKAohTRT4tCHMWZZJbJUXvwcuCgUyEV5EA9F98tvuRpYrF2dw1XWuZGmjj9keppYKoKeuYoS2wE1ire",
  "key36": "3f5egWzxe8RnMpviwMdbT2VXHDf5MWwqYWXuuKFj1TQiEoxb153p6Gr42bzAKPWyUUSD3yijrkGuaXruz1mjFQ1L",
  "key37": "2RJKzsbkQoxA9qsHhBu8VTqNjecv6Yjtfd7DLN2qWPhXxXGpd9oZyDKk9ynwjnJJGdy6EQoWvPyyNATuoqHWn9q8",
  "key38": "4k7Z2PdGbatJqpSzqjkKTJRjSiQanbk8JJmwx3VD4mmtHDfJj6vAnowm3oMebmSP3WGDHo7P7pMj7qznFVmdQfDo",
  "key39": "2pA8A5sSct275vxwrQwbPWJsHxxq2jUTKJeGBACS9WYKKzYNxaX4uVzALJSAYgb33LNFY5E8fDfkt9dS8L7bXaad",
  "key40": "2XxUjMbRsZtNC2SYdV2rogUcLxYSksEde7fNvm6TB6UmAShj5gLBSKQ3oNhpL6nVrc6aae4gGSUpWgS5sPXG4Qid",
  "key41": "5tUsAn9MhpnbeLWLtSa65zTFE2pwJRQcuXR7Pci9oYJAaQx65aKmuLGFZQuVrH9ZCpZSZco1NBgLinTiS38jDkbi",
  "key42": "5GieifFgjWobmQCgLodNfFLarpwpPvYheyPLW5NiCtrau4iaHqutELMgjHvxn5mvQ5QVCEb3nDbURZnCq92VQfNX"
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

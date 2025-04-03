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
    "3aBvkP5R8EWrx9apExLWbJzwY2UJsSvjYsvQyh6UzAneCikHZZJjLgbfbMg8pPcnJJsN7bPD5CoQMuvGgJM7qPXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vmywAVbDkAAEcY6QeyPJG7QRiiquHtqWQusafSjz8uCrNWH54hcPN3tiTf7yH5XSu6bDcXUuynGxwwdqcRcFgin",
  "key1": "36KoL8ZVf59B4o3k8vahenZU5sgrtK6fhxkCW4f8ov6W6nDAtsY2cTPJJBe8FTyqWKVegnq2VkzFWosejTZH6YGK",
  "key2": "28cgP3SVYAnNDLAajPJjsacFSpzzUzvi2iJ3KL7syJpt3Nvf9QsvQUJyDvh3o7tpcXwB5BeDYgFefvyM5FgvQbu6",
  "key3": "3w9BVYbcrZeFBg4HpS5nYrCrfVug1XteqbU4yveDBPaVz2k4UoLx7qnQWwktGekJS3TdjvHJNXyZfzdzWPffbgA7",
  "key4": "5tmiPtPFTz43WxiV1NAE2R7ao6SicJv4YFZqKf3gzUWZ6tTgvE2Jh9en7wdUTrKHgyCRtaRZnu4QfSQGUuqG9PEK",
  "key5": "2YeZPDLJJSdXwvvcdECZUoJicJocmRo3U8gS6fBVrPiQYaUTDeQbs4H33cSqG8KAPL9mWy99FLu4rhKAKeUxztT7",
  "key6": "26rpRu7Qpo6aXgJo6Mq7eKmNRE2kgLeBiuBBRqGp1a8EcmCj6fPySqAtWNTcwxvh5AJKppTF3qzePUBkc7qrBTxR",
  "key7": "4i2WcyufPk22R7AeAYyXCHrdWufucHDxjVKh6vvVLBi2HnZrxPNxRamdP8gnafCcFyak5uHdewgnZJjoShvcqVgG",
  "key8": "3ZNQUxBasJnqt9tzmKMuXJsH3ktA1D7MDnn9ScKhfeaKU82C8epyVLnLbqtNxBpwmAz8SpHUFepYQFGYer3Q1HkH",
  "key9": "LgwRFqdEgVTd1F1FF1z3RHnjHmB6b5FvUAS3jJpLzPCrQ4a5zqUqhm19BjnGW9S8XcffTpNa1A2SkVEXcj3VuAk",
  "key10": "4rq4EPY3QMBp9AWZiqfhDzHsr5Ti3VVpC3iKuYfM9rQ7Dg5uWEskiiGap6tAa28o4qaWMah4WGMp9JYszfpDcyMw",
  "key11": "2bwsdA6i98dFoncLweX2NSBtD3g7v47QNyNDVrj6WM9ogNCMFDBqKpYfgEoPAkRszjP1u8R5YXAz6wkPyLAdMpJp",
  "key12": "5pSehJEZZUY8Z2eUydannX987ou9bME7MsCWSiZPDQA8S8dzqpYAvPGqDX8MCqDYaa6smaY2oMjD8Ce1YBnJRJ9g",
  "key13": "2XmZdKzvpkz4Mr8Hiexi8YD6c68xM451z2DJJF5naK9phgC3LMCgEPUU9CBTfudxdbpr2ii3G37rdZ5VtmU3EvPi",
  "key14": "4NaYPvfo6UJSi9RsNsKQCnMb29Wrg6fS9DsV7UBL6g6ExAyuZeM9K32JUCb8QwWyaGXJZe2MWtn9CAZv46QAEdkN",
  "key15": "25BP4y6bPKsCTJ8UNS9NvxQn6LEyNb9j17phQ9b33NpLxTnkRJsQYAi2TU1vs6K9TjD3nPKxmMe5CCVHHJNJD1EX",
  "key16": "5D3f54dETnBWbbMH1WjpknZySSdiDtvFczjCuE2Q5mzxKksk7Pt37nfu4XUzeYYczxfaEKZHpEtvWyab1orFNY39",
  "key17": "5tFDdAFntjFeWxc2ArEh4y3wUh99hw64kaCNJyq7sG4p8QpcnShFqR4i8vDqZNdymbstEEetX9Y6Vo5TWswQa4oB",
  "key18": "XKf2HJouQTQP7SkiXJCh52QNWBfT9FMSC13THR8awLUTHZDGetHnVFoqtStUdxMRFVzfx7ehzzuCwiEaWpzL1GU",
  "key19": "5Rd9dgk4qvivwez7SkjGpybthUQtYEpjHBS3YAKiSe9HCaz8ZXnAtTJR9u519cEgeBREDpkhD8EgWAcidxfa56UU",
  "key20": "kGQek75LiZEWYwYsK2vhf3zsD9n5dMxVCdwyE3bbJkyeULdZ5ybmdZB2Xvnt8YZDFr4fTqijYYVmJ6H2KzpfkTH",
  "key21": "USYNdvum7oo3T7tMEsEcL7V126kvf9RyLtkiCzLv8EJwxkViJ2NYpU5gf2AtjsBGd5hUSbN4wEGpm8dGrfeG6s6",
  "key22": "2JEy4MaQeDfE3ntBsNiYZVMaYZzSBuYbW7TsyziZQ9i4jGLW6fhtpeEmkYeoLPVii3KRQU4D9mtDiYQW2XHrK9L5",
  "key23": "2BtCWwiqu6q6JB2cEFcm7kVDMjm4uSHxLLEXH1yMhEA47gf8LmEhsRdjp9w6jEEwxSLnv2uZ6gx1zj9yngKNCibu",
  "key24": "4EKcYuDA8nskD2BCKEmXgAZHNXi8fAC7ZMi1GknkKBqdndQSTAfVQktVDbq4f1h6dPd4KimgFhN71TNfkSLDaMeu",
  "key25": "5H3pvV425SuRpacTYcN4D5f9Bh5K1QyXhuiED2wwmJdp6PoVyXCe2catsqayTMVJTiWwT6c8tNuoo49i2AywTnaJ",
  "key26": "4LXoaFDCsxipkucqryBwVqRH3dEgKbGvBcyq3nn8aPZQbLCxigFGzz6QivPcUmQbTvgv3HEp2vRGL5xc5h9VXdzG",
  "key27": "2AM1gPTbLDQDUJSnpkjs8cQqopJTpNWfSBWkyNVG9sSo28JYGU5Ls9Xgvh6UBUdu7uPeURah1AGgyjbDVPBPiBam",
  "key28": "3bfLcWGnxhCvvFmovQaLGNMQ4naXViZVSpHVzJdH5SR6fc1p5eiaf7dftFsiefZW1J3unBTxTPm8zvb555hHcxYK",
  "key29": "3ibuPUaTxosa2zgjZW9UFnpvpFnc6QPqowZ5et6wZM1kVmSTfSdTDK9MALCJXZ1uXdCwMoRVP5ebLwQmj7Q9rEKn",
  "key30": "51WGMynqsox2HrgRFruq9JaAJBP2py88Fh6ahw87Utu2iAe16WRNYENePe55qyXL6WxC6ZL9ZiPNVUKkk7txPNYL",
  "key31": "4J9RhkXWufuqthR7qm3BAzGGWVkJecVvczFXcDeLSCz9BtKF5sGkRmdQ36cUpLjc2m1F7n4KV4p9T2BWRQHTedEg",
  "key32": "5FW71aSUdwJUqjP5qmpT9fnSxkkaAQehrnJXmf9Zft4HjgTX5FYcwjs4LqMhqDJV2DXwBTRZKffbRPU3QogJGTah",
  "key33": "2WLS7wVZYnSu4fgtRyH7Moj1PCwsZ26hPGWmUDxbHM7wJkGGhEB6iNqRmSfcNYqShUuPjznFSipDV8wdecQUhDfn",
  "key34": "5MGoK4gSTWPrCBX3gqZkDeGBDfDLJFzMJatxG6av7hU484ha2Rri6pN3U454GLdCb6BRTFHK5ie8aJ8zDM2EvUcs",
  "key35": "Wt8bEFSBhPhuVCvQsWa3wcRrC31DdE1MbadQsLG3m1DfxHU8MXVYffK1dc9Ftr6wYzCW6BqrKkgLFEReeVy9XE7",
  "key36": "3EuFFWyCukmSfc1Fe73f7sMoSPpH6AquPBGTpsERFNz9LneJnjtPQnMGT2b99eNfShodEWGZPUumGSo7bFfym34a",
  "key37": "5s93Fx5LMED2xmsoH3GHBYdaRHQZqr7X98JjDBgXqbyh2W41vLCjVzPrTTmqyFfhPoo3Tx8q6tH5H21QL6ABs3nu",
  "key38": "52JTduMhPmSwHiFAzVnKmWeLfhpahVgfo71u1CUTT9eRaxhqd1FTx3dPbZucqDKA1rVvo9NdB6KuYThKiR6Q7SDf",
  "key39": "5xBjfAxRMgxeD5r6SNFSQsZUicUvM4mvFYZZL8vHapBDSZ9BU16BB8H6mSdD5WwgMNpjHz2rRoxvnoU24kCWhkaw",
  "key40": "5NTb7Gtwxm6bZkXLwqiAdwdukX5qt1k4Ydsf9zoT7UYsmsHGpyzCW11Qq5UqF6zjwNKNbqHXaUmgzZ799uUVvHcN"
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

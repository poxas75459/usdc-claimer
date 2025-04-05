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
    "mn1SfpwFYeNdae7YBPWdRs5uL6cp1MEKFXdKurcjnchfpdVnBBXhHpiEMN9KgeVVok6ht93g79JjaEBtNRJbPhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CT4sBaYn3GZfd5PAspwkVcHAwTfPmFwpMwpufqNWUKwawRAmJPGZmqxKD58pzsnt6SS3igPXXFCKHLVvcwQrfuu",
  "key1": "355BLXwiucGhxa5ZoNxZB8MmMvzeNGDt9tcviCWNC7SHwQPTveonpsbsMXArkBM7GZdUQTmKSzjFg35r2PXbsA7a",
  "key2": "2rxaQAKFs4ZJHPBq6tcF4wNMS1eR8sNiZ4bSapXgBNuzaq7K665ytbFhF5Q6rN6LXnk9Yx5iCf6uWyRXbrSwY1kV",
  "key3": "pHHDDmdwRa3BQDKnfM6aeyyBDGTi3GHNChYcpmQt3xnq92fseotwBSra7zh1h2mQwYXX8cHQPdBsBFvwxkGgJ7k",
  "key4": "5n52to4vXSftJmjYPgvFxBSGXjgm6i2KsX9m4yBe8DNH2L4naCDFLyLjYnRcNzpZPxfnyo4bpAvkRmaCqvEKRefG",
  "key5": "F5m4WQwp4zkLBpMAg2zr8MVVSYRVosw8zbgpyVre1q3JG1KQYXhKkVhto2CJjVzxqiU3wTtWmDE8uA46Np3iPCK",
  "key6": "VXABbGLn9L2r85Pzac7GCSoPQaRw28e56xnsmdJMBB6wvuERKkLKmMqdwzt3sGjz5LyvSW8Cn9rPZpCYTQYSZxV",
  "key7": "4dnE4qyhQRC88xJmrN4yanwirWu43UCPPHayeVNwk4a2KwmFcNEaG8DhyiBYN5Eo6HXMjq8EPg9L9oXFLf22w4h8",
  "key8": "3mPdey58KpDMroR4jzCRSDeQctQbb4bd997sifUGcYYKvGH22dPtx9wxBZ9bu7FCH2Xtup8Eg4cfx1SPngzBNXoo",
  "key9": "4rCUNa13uQGtjqsyk5LiMWzwkYTDC59tzb3aqJX6qgLhs3cHD9Vkbiu9J8ZEERvWUujVUo7xqkgAons1oBdFZNqr",
  "key10": "KBJsDDStiE2xoubNuKoZXnyCeyiASJ4S1c56ceXBGMjNXJwcuaVxpS5TV9RehN4MGWKyuqjQvCoFu3CTtqFoUwB",
  "key11": "4LCZEUJ38kMkbqgBkXT4XEMJEVnzY3Xro5oVkJJDD2dDbKRUbxwz6DJy9V9Fxn52rBykpeH798D8cqQVSQMFZRLy",
  "key12": "5Cj6vfLpSq7iymdrBbMbeBaKCC9j3jtgt97xJgJauW7ahAfaaSwL74WnYzLJykT1UbAXen9V7uNLPfygyQy8PLXr",
  "key13": "3C3tadweH6NzwbD7mj1qnJ6YEfSbzqXwDEb5SRh1PJJbtYSsVCTiHB1hkLp3rR1XSrF193X5geR3PB5eNLUmFjPb",
  "key14": "5C1tN8DHYof7NyKUsDYUkxea9XH4fGFGBhUhgJfST2NYsKwYLjqg6xaG32anr6HjnYBK3zX6Mf9QbCkF9M48Y12L",
  "key15": "3o2Vz6biDwytSoca58NZfmJ2vWNxYLW42PzVvw5FhxaZ5HB69VZW2FU4Tu9RHwUY5raTQDaFpe3WNNa7Q9hnvdWU",
  "key16": "4dqRxpsojg2J1jsiaFjv2hmiDApgYS55UYqCPSnjxpPnZpEmZGyybQ9swQU5RJCkPVjbgS2t1Su4S3eT84twjFyK",
  "key17": "5iUeVvY6iL7wEs9B2BgWmQyWtnCXXSBPGgjK68Qr5qRkxk6u8MBjqzpRcwmezuYUfGh8dpLbi1o2DWWz6ow1caXb",
  "key18": "5jiEWJsAEfXYwgTpFAtrHTwhFTZCnyBVTnJGQtwGype6jYXdscRCoLjv8QMmKfwaAdNvjD5bPt1Sg1uKzSs5F3BA",
  "key19": "5hSXjWedureFsAZ9kDEQLkaA5tezbmu73NWtte8Layy3fAWjxDG9Mg16uokXuwf5x7S1D2mWcQUKwcysTokejTqc",
  "key20": "2sfPWtK2owGejeW3AsZjp1C94TN1oiKpP8e9zJt3MZqgK7UPgA8DDrmrHGGMQWKxKzskUCuiSNrPUmXV7wXqJKp5",
  "key21": "4v8UpXE9F2cdUf8ejHy15LanGxEtsnxs1c3jRPMNb8DcAtR7yZNvEYjHDDHasgEvsGF4sDBbPPe6rZVb4Y2XWoaV",
  "key22": "2kE2q4EjDvcJYJwYuXDxWuDcLnHDJDWqtsoBih9wd1JVyjnDLALLL4We9294bqi1KBffqt6A4514BroKwjwrQU6G",
  "key23": "4iPTAo3xGgaAvGTFAUijhoxLPihZBmDXHrFezpJZjerSGF8Tuo9kVsLZj3ioMZuvyVhB5cSK16yhbpUxWDQA8AbK",
  "key24": "2EScDe2gykHAv9PHRjjVUxVnwQ5249uhhubasDGjtYN3RMnGyZac1ycNbGYYBPXYRKMw8PYdttqEguMnd5MMiamk",
  "key25": "3jFbNitF7pbNxi7nfDwDiMCYTaV7jUSdVAGRTFsABch3SpTXFMThiUMQ78jguZmb7RSM4VyMkTRvN6iarvMRwLw4",
  "key26": "5WMk3jnHJ18CrBEvSm9naVxejB4eLFBCvkdNsuob1qBK3FjfRkLkZD4UyRXY7mG1eJnbkacqyBPnrQ1hPraLBWUB",
  "key27": "3iHvJqF5z3cWWmK5Mb5crai4oBJajMoqcPQYNqSwp8shXDYDVBcUvjTgxjnqPWQzDMRcGTq5aysA6Sv5tkhqVrFM",
  "key28": "5EGdGCPCZTZBcFU1PockPENgRqnLjNofovbYTBbFiamiYKt5w8npxqicFt2aLzNWsVZEtMNLQCne3CLcZfMHAiRb",
  "key29": "3UmsRjQAL9FPoJ1nzZ4MDnQqeSuLFAjU5uSBcFGLzULkkEYx9USh2F2BiuahgyUEbheJ29JXSihWjDxYRhsxLuYp",
  "key30": "2s8XpP1qff3UsmZdH3CK2zfRyGVhNxrFsnq2ZvoUVunYf3GeXUDvzsXmBZurgGCp9DYoXAgmEx9UqJrytntL1Avb",
  "key31": "3aNjd5Kw6oC9JXL8PTieq1FEpX89Pe7N8bzdUmQYYBNE3En1bhByNjrxtyG1udWWZnFd3sDVJULPYxEj8gikh7Av",
  "key32": "4oivq8zSMupgKpQ9qHHgu69sH8j1GB5uTQVWVrSxvVrFtMF42aAhaEB3P1asD5bshcWvMQFCA4UUhvYwncbzE1gk",
  "key33": "2qqVcnXyiGqj6oFeA6apAMgQwxqvy4qEugqQA9TgyQCewKNTHwERfDew9pJi4VhVJwYr5JVDbipNF1VDfLXSga2W",
  "key34": "5iULECQaJv7xxRpJhhSWmWemBMASpKw7fFk1qNucg8wpn4EmoQryprnE6szreKZt2vPrXBC1gykQDg3rufy4nTFh",
  "key35": "3EQw8WRFFaxbeRPCygBhYBZJLo8cCfyb3f43FUHVG3bnXEdbTd1w7ftEb8ZzpUVB6PLqd9VMmpftiChNZ7S9eDS6",
  "key36": "2u2WJenqjodaA8p3Dmw5y5skekYpWh4oPXMMPsXHguTPsUxZLhpsQFh3XtFmbYE57f6mrivRbzppqUTVqKcye7hF",
  "key37": "58m6xh8kcjXSupZZXVL3RinLikdpaJhyJV973NvTRcT2vVeyp9SVMtHPi9GAn9zJ9nrNxaVy8MtQauByRK2H2Ti9",
  "key38": "3yfQveLYPatUBkt8cK2L2Y2uoTYin1ZpwtTTMYRKMwyMG5Rvoet4uCz8r6CcUe5PND16kMDXBwvmjmLrny33AFyH",
  "key39": "5kLeXZLSNuAUit2S4BzMitHL8tMkZDogmpf1WLicMeURKc6BMeuwgdgaNJF7xNJdHj48CTmTWowQSJBxDEvzEzPE",
  "key40": "4BeNuGCwzNsWa7sBAeJAtQP7xR5g2HWquAVKcXde6aFXn5GSC4NP4GLeGTW5NCpPBJUFiuQ7mtdaBwqFRQ1d5EvL",
  "key41": "4BJPNpaRQVt87A3sz2W1ByCCZp3FiejJ9M7H8VHXxt7Sy3Z3roiWE2YeRcZqBLEZ2Xfz4j5hymkZfyD3Hjok2Jpo",
  "key42": "3V1YLbQnJUmW57zSNr8hGWCDKHdfnHcDMVvEP7fh3QbUCUmeaUC4mA42GA8hYjXfpFFSQuvcQBeb8udw6RHDdPdU",
  "key43": "3z4GtcrbRoYrHwLrHgJgUef1sMK2x7oQ8DwkRfTp4z1XHUnGqnZwaxbFW3s7i8zqm1XLnPTnhuwNRsgwG4hsJHjv"
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

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
    "2E11wCaPftPSgrJdM2CEkQjz5vrfNtLdCMLcMeF9uU1Ajwj2G8h3yv7i5PLyRzSYCgtYPmiKK2n66caMLjua5HWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyFfBX32uAuhjdqiiaQ6XEjm8MuMNhz7udaQFLtrym32XkN8ZjBcXA1L11Us5HN6w9BRfRt4Xw237sqNs8N54r4",
  "key1": "gfFcRttDim18ox7B4z6ZrHHhgX4wmSpdcYRC89db1N3fSwbnTr7gHfxADyWsT6M6T71hfE9VrpQ4Yhx91ESyrf5",
  "key2": "3UYtFGRZBuG8CWXFzhjuyhid3T665wzj9KrHZDf8omH9Qv8e6CKnNPsn7SaPHVtasPCPysUes2fXtuyr9gPbWwNx",
  "key3": "3bBZUFXJo6cQh2KSMHJfTapLPoL77We4RWajiTdc2xD7oMAsHj8vQwqR7eYZg8jbH7K6UtQFUPNjxddGd4gHd36u",
  "key4": "Z4pWNP5KWULmHmB8bw3993W2CGuN2ULANZfXXeFzeqcaraBQWMxJMjSLAG4Acu1syksNoEQnxobVoCCEpq4Yd1D",
  "key5": "5jGJrFqzRqGTFV13MwoHVmpVn24fD1keTGpUnn32DhqZPM1d6Xit4p5sSjkYBqXMjAg2u2PguVkSb7xAM6sQaWro",
  "key6": "4M1nRroFMYELt7PnGgbvNH4prhQw3tjroRTqPoiHyr2irDnWMNH11QGQox5qKcvkAALHbcBxMM34YQoCu2WGX2Jj",
  "key7": "2P3n1Wv9w68qi9ubXWifBGYr7QeP85KpjCXwJvVhzhzHdHaoopy9K6epqD6TQmH9QfHemm9WzBRCtQQNnwpZ3zBZ",
  "key8": "kAFwap6ShHvFGn7pbJxbeXx8PjSggP5PimGQGm4iRuh6omR2cMukSmT949odqqEiVEo8vafoEv8hKJ8yzE6CeUj",
  "key9": "4fraTqdQLMMCPo1vqq4d4q1oitJJTc8eeZpaK4m9qPR7vQVXcwpcuZvVqJiV4xaRsHEcmfwXSuqiaR17HTuSXLpN",
  "key10": "qjZTNXXRSV66Bqtzo4W1z9uJ8DjXGurno1HzGPRym8ZZZ2RvDxGv1S7XSnjiPg6HqWYnsxjWSzgFmPAWmVMeY8F",
  "key11": "2k84SwKZHqKK5vvmosShefdEMD5e3fbAip1ExvATxxHSH8goa8rBq3f3ENAxFgEidE4UUnsR9tsULL2Moq1Kv3Ay",
  "key12": "22XGQv5px6QeyZAephhcmTXzbRr3udYYfCA9PH6DCbXgSSkem6LATZ6gKmipjb4gCi4dCEAwFQYQKE42gZLe3y6s",
  "key13": "Uasjii8QB97qyUTTZRBmQtirGHGdDeB7mpkAJ1tA9yP5tFYyUSdFhFiYpb4NkhdLV7hfLmetmrFfTvE6zFMzJRf",
  "key14": "Cpt1Gz4hyzkq4NCbHd1wfrdWQv6krfZvrd2aNHNWjtghRJYMsTsbzD6cw2v3Si3hR4DaMtxk9B3UQgC4rdxiXJf",
  "key15": "3yyWhToPkjTm95VSXTPy9ZB2DUk54Me2Rie86AcskRKwfMyC6zZWUoYri1eckHhRH9kFWX7LeBK23WFnyZWDyu5B",
  "key16": "4UJk7WrKv4Z2m6RguZXgAx9RtYRmfW7gWG3Yjc6NfRZiRzG79aLgjp2qQoh71sSoMU5h3gHzQ6uYRonqwURMJvx1",
  "key17": "967mfM5hL54guJscb1jwrKncJpo334yiij9wtJhiBJJgf3bMCSDw2aoJy6bcKwbf2t6p7biY66BtSFemhaGwKwb",
  "key18": "3UZR3w2B7awJWijuqUuZeFcqGUd1vJnxQoba5LcV7eDG9yQs1DbuMy8E18tUWWMyxxfrazzzwDG25ZUKvRDMBuy9",
  "key19": "676aqGPskW2tkdUSNza15Tpah49KtSRkKs9JUAqhtSXsSaYxPHMTdYVkL29AKg8dgVkF6MQpzJoiJMzR3sK6VxS8",
  "key20": "3x9pARw6eoTXAXHbSVswc1HCrknU6HTzNzSRwYi3muTdRe1nnYDGhAfh2ZRmqoTcpYRVau3uobxfQtjYFgn7U7j8",
  "key21": "4Ac5dYygkyAXPLd6wUB2AY5puQPS9GQNtbKXzuV3jorejRFnjiHeH5ZP1HULZy2BuoUCq9ZxWXWrYDeN6Hj4y7JK",
  "key22": "3HmXCEUApKbxQsRgmS1edoKEizVfxmXSLxppqHdNphwUxQQtzR5o34pHDuSDj2KjHhV8hui3RrfLKeCymDA4oxNo",
  "key23": "4cB6s94EWZ4STA3tpXYpFY6Eqc3faSsmf7p2euGPBws13hxn8mUmC9UqpXnSdfGzbwNFieikodDu6eD84kYGQBxx",
  "key24": "sJPvQEWC1PP8E5fD7zFLwwAxoe5ZYsFp9ufkbx4FpZSWcSEypHwgZ4GWrfvnkFu4DPr3jhb4ihNnkCXx53MTsQR",
  "key25": "2kG9gRXphd3kDS3TrkKXbh8NnZs4TymHBtJ38dfDcXqkKd8DreTrja148AoygnKnFuaVX3NK592328tE8xrKWuEJ",
  "key26": "2kKbm7kHkCC1PHkmnfzZC19LEE6U7nceH6DC8HF7PRSd4njKEuHPHW5SuRx8LTTXzzYbwhMPTdLnFfYqvuD5NUKk",
  "key27": "JsL3yBRVKVABEbWtKyACqBGC71SxonGBtCmhRwduYeEBAWXKNLnnyocLRE3jgN8Qx8JmjTT2TYztJcLYwBzGDAG",
  "key28": "3fQmPtyr2wYwUJaz7i5U1XPA87bgYkj9DumZg4hDzKSdD32zVaZV9RbK2i1LzaPQs1cZzAe4a28pV5YvQZAzMqHm",
  "key29": "64HFetcVyUzBn6JYTWoJUTg45Y2AJAFtRzEA6HFQShJaKfZ6TAo3968Y9bkXAapW5fdHRQVgAXvkGVQ8oKxHfjVz",
  "key30": "ehLSCyC46zYEyhwYVu8YJ3VXQJJ8Z5vsAvELCYBTWTRRYeHXm3jgaqx338jYpTcJiaWdsZRCmWAFEJpdWpmHNfL",
  "key31": "3jthBgEvtC5i2wzhhMfBsvAEm6dAWbFVZ6H96yJRUwvq6gm5XMW6ujGBW4Cj3bZtbnJ8uCmWwozmtM6LZQNFMVTV",
  "key32": "44iSPpVQfavhsMyFWaWPmv38AZECGue1Bb93TLX2k3nv6vKjaHvJitry3fAon7QjxpkrTKBaEC5xsTQ21upvTMpD",
  "key33": "5396unoSeJQ1NK1sNi6j9KaPesSJmdd9RUBDvNHT85kdjwqfqnzX1M4PWQcVbREnSaVC7eP2aFPiyMZR9YDDGVj8",
  "key34": "2nTF7XXejCN7eaDBCG8LFLLHczXVigmvg7Wz9EfdAfn7GWpYFtrnZhMQZr7CrAvRuY2LSDdqh8HJMgqWE2eovq5U",
  "key35": "4oECKEAAZz3yTYefcdFrBuW9fzJJPKebQyH8ww6mWNPA4uajxCXQfqxoDRUPrfKuEk2TpqKqvXnnMYwvfV4GSpmr",
  "key36": "2VzbTVzxBKsKHKLNExkKWDhXaR4Y83s9F7PURq1j2jpJM4QuZyWuvNZBvd4PpNJZMS4KKtuQ9p16jetSFAq6pVEg",
  "key37": "EDCoNPR6SDaCMLyt8D5iADwAPsNRZeNXDj5xKiokUzxtPgW4HB35uqKyL39jRPUwWZK3yRhWAb5u3kkPcShuP7W",
  "key38": "2C4RLH21zpe7tv1zv4ERbbX163FLyTHBND4TUt8q7hrvyef4Z8rrZFhre1TrLmNHUEbzAtEwvBL6qDJws425Z79v",
  "key39": "yvMa6YCTDvFYe4A8SKVeCxmuLFayYw4i7ragQXpoZkkPue9MabwDvTpySoyG8wWcQbVDygeR3mJSGcbMkzhUnxu",
  "key40": "5TtbqbY9bW1JiJ3NwAbbMZCoxDo16JpmF2Z7e3hi4vdQgLHPhs8UGdR9Vxnt4RjT577a3uBbgNNrzuGxRe1WQyC8",
  "key41": "T9RfHirmygrRCnWf2JkE4SZG7ny5cx9Qep3PHxpHoKjZQyds3YvsX4i62FutedmhFun44oXBCNHkPNKvPTNWGpD",
  "key42": "r62zmgPAe5KBsc8gq96s4uqUmSW84nXNHrDKm5YWsXaVrdwdBVoY1BAPFE76FCqCQZsK7RQYFnLRLYEFpGsoVXk",
  "key43": "51zbFbZAT3fhHeZLV3Cu3TzXejXSxGsDoJx3ZXfXYEAjLJwKyi9ujJEKaqoWhGiA8GK7u4YujYq8JbxHfqdA6ZEi",
  "key44": "2av1GfRiCRV44wifEpL12dEHhuCCbMbWsuR2xRXsY9YmENU4gW4LxxnqwdZjqmzV4pUAEhqE8iD3LLTzK9TYiBGo"
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

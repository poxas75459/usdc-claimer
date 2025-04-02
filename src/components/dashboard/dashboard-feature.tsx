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
    "2W4igrAuvMvrYezSE9ZNUbhtrfycu7N2V6nx1qMcqZH4V8w1kvPxX5A46bdWe8qAHtasjbjLzKv2LFLnXHirZ3re"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C657uRdQYXoZUfKEpo6BuUJAa7X1gsjvdwt87pFsRpmmXoQXGWg7F3Dj1z17esdsaJv3YS8JG77QGr4nByoAwau",
  "key1": "2gEGNUi5rKQzuut9NJ5AvjehfKufWuQY7ZyhUQ8fTF8PzZWexGujVyidaCzWFsLwoade723rrrmZxApryMC827nM",
  "key2": "2f9wDPX9YYHv63TRUtLE8RYcFyEo2ZekRi9UE9gN3nj6uA7t1fMRxyZpDHoXwpJmFH85HDJ2AfeEZ7wSPdNKTPGz",
  "key3": "4guJ6hWsDg6i1SZvu97xXotPYeVfcRiLDuvXSqq32X9Rq1a1ybeVyKgnNJQaLA7BgvZin7SC8GTurJSk4TS9Abnk",
  "key4": "2y9Qv3FtEPfaZSA8BvicHsUagWW33X6fLpRWhcb6LUBtdW7DXN68jppMxRkWvT8SAoNHGo3iA5k4VxU2yoFE4sDE",
  "key5": "4V5JLJKG57cbVBYUBRaUE3PKcPsgitscDha5YsUHRvtszxuerKmMprSoMNyfXVoNZMTKWZUCjKCncVDBbi3urhyT",
  "key6": "SWFmeYdiYFEx1xc3K6GAKbFPT4h85xH1uG2c9yNGkQwH9Z9HesJ7jvE4mkD99JLknGmi3u6nKJ8qo3rLMiGnApN",
  "key7": "gnwdAgV2iUBq84s6muZzFVJzX86VfQ8gfYxC6SxnZK7jHXbVbGUjjiiTSsZhmBvc7mYbar4AhffCujk1G7YTXJ2",
  "key8": "2LwDDU5gfCxPXkDaxx2cpRJ75d93p8esvLyQaHmMD3mctKvNT6jgczhA9Y6DjbpihLvJ2AUaf9C2Pjz3ZGVgi5HP",
  "key9": "4ayrwrmcWbFukHRxUsEn9oKQHjV2nwai3WHNjuZzwYocdUo1xW14s5p8LnwtAX2CKhHZ8kFte5sZguqv9gFk2ZMr",
  "key10": "32vuZoQzGXdFuN4Gnw3s3SWMyNKnfovsER1MHz8i5X87csEcNEyXDtom38jJtMG5fezau7r1jiRmayHQfYyW1GCr",
  "key11": "rM8fKTRt8RoRt1TJKdJAbJDCJhdeBBC5rxaL7xiZAtHvXx9XpSzbM5yQJiCFdsBWpQzhVzeGWW21cSYZ94GSXEs",
  "key12": "3QvzJnZoJK4FRmjFrDxeAQk5SQGj1DJGL18NYMkHgap7o83Q1CaZhiVHf1Up4aKfMgx2RcmgGyZivi7FoNdZxdGZ",
  "key13": "5v8oWDYRXcHxzZR4FuQJcmNcF7AaPVTNRfeJmaRcFw6Y2GWEqvLDaS8SJcwxh5i8J9xp82M1xP6EmTgbaH55eBcT",
  "key14": "3EcZDauQyH2cw4KJh4c48mq3Wqgkm7wBcZMqQVNKvDJpKpbiMr3db4pdQgLoZQHHM6NLzpVRDYeKc2bCSYEq3zn4",
  "key15": "4q4zczk7gcfLzTsJzXa3bDJxNZxjqemueBzoENSDCyhH2cucFk3MUe42gyPwpkX53t1aGK7vGqayrfLcg2imeNjk",
  "key16": "31T7V3dzc6nXBop1Co3ZWTVGYS2NsBQpDsWE44kKLU9PHzLFDxN7A2ocYQtsvn9VpiBo4esBMs7QScAP1WfbopPR",
  "key17": "5ncRwh2v6ENtbnfYpLwPo1Cg2XHedv41hznXr8tHyGwWxSXFAJoRL6kHPiTvoym1HdirhxmCF4Nk7BfxFjyY5QzG",
  "key18": "65QhBhfaTfX7EuZTphG6kian5FE1bJuD111tbuaHnVeq7sacLBbfoAmSefVDRLpmf4snnic5xsDvRYf5NX3nQZq1",
  "key19": "4Jy1SkpY1iQuuiobeC55aszQYAsJVkr4DD8VGxwVBzpVRetb2TJRtnsC7sLSEumMAV1E6j2U6g2QaN5WhJeRmgNe",
  "key20": "5rjPmxbmLFGbRzvnejHg28M34J2j1RMfJ9p5uPLimen2EPpwnKvb9DsmYgTBVNHRFBYqAz4ankDoGB1EWKne2gCx",
  "key21": "3vMDLSd3oERjZG3boWiA8TwcbdTqRK6nvUXrGZfBhseTfPASeU5uGEirfeFeEcK3jfmwxw19umt14VtSBBP6k1C7",
  "key22": "BuryWpuDmBbnakLKB8nU83SAhRNQETm4xcfbNhDG1TbMa9gGomJWtp6GZar7tuF1XkGHs7RYfv3vaq8BKemf8iL",
  "key23": "4eWo1Xr1d7HgWTiREec3GzSn8H29eussSBrdRwqTQ683jGK5doCb2pVAniBdFX6LGWZ45LjPiXZctjDgQ9pKoQCy",
  "key24": "45SfaanroBczuRxKC2W6THVmB2JmeeM89WbRhJJWQy4VSdbWZk8HSpsjb8K88xpYJjuuTDiTwryQbZwbKA1XZUVw",
  "key25": "5vnLoP2Yh5pHVMQqxZC6K5oLmWsYife1aRVARh6i2ZYnxTD9Hb5esfdeiCKq4EXZno6wpufazm7ihpNTMPAXcCvh",
  "key26": "4TUheGGUjKBoMZTGZKwuFDyBNXcCXyZDC5ywkRcCdeuthy44udYgV1xQjP6R7DSaNrXmVRhBKpBiKsgYqYHvxARt",
  "key27": "Wp2BdK885w6xuah7JDM188ZUznqu5U9RpSdXUJHYyEr1z3tCneJRRF44KyadtGKasWb7omK7YPXBPAk1YKHcjz4",
  "key28": "aRtXDRR2qkKACJSxC8SmyFQQhTFEordf8zzxJW4RPTSxKDmRpZKL5wriE8ykqo3fgVRk3Apk6zfqA5pSH3Rqer2",
  "key29": "5j7Q5nvCLwCdpzBq6vCByGX8Krbs7qQz43TLM67F6DVSXLgQug3qzhUQuwrG3mhq7qpb1rUzEJvV4DypBvnGeHvg",
  "key30": "2VeyeQDpukwvG3Yuttxrq2uqz9AMY7UuiLUkCesYhMKHEQfiJghZ4vjciWXr1LKXQnUNKMEiVP6Np2wTa8YVhtXH",
  "key31": "2GUwZv6ZsJsvf4UqsyfjVfMMz8SzHnbxF77ULhZRjCzEkS84yvveU7zT6uQAtuC8qisNEDRVnSiEqAHZBjTVdYek",
  "key32": "3qPJAvFCc5dYEsheM2xdgrU9pfukosbgvsvWC4AcZ3V4TMEUmBZVBMqaQYntAgGsRodR7Wyd3GAU9bbT1K7X8Vch",
  "key33": "4E3znpRXFLLx11GbwjDQhmKFNFhyr1upeCMZihxxBszGvP75qbsGv2KEgghNKVgiUf4gK5ENguCRxejdt6NFAAH7",
  "key34": "5oHjEsHAq1F94PDMvg9gxq6ADpVZSEzJzyJNtBz5MaKD8Tr7x6akFWmpcyBzX1LUQqYVZjWhkXtZU76WirFTcRBU",
  "key35": "5NdpKGb9ByRyjCmaRRvQ7njL6s3igF13XP4BJJAKFL7YL6ZNXf4GF8ymmGtZFUjwZR2dAxdWhzvGAbET6sBmDbZK",
  "key36": "6eENMmtoL7bCmGd1jxdVE4ZuWzGHW7rVaRoyd4YiwgSwv8gBYrKL3fH4MxzLZoHa7u8uS8Y87erVhmp3DEA3z6d",
  "key37": "Eo1iEj2DgkKXjFjdLhTQKeTij9TgiRMsXxe1V8EU86vpX5fK1CteLbpab7LE6TzUDLr4jzzLfJFF5sHWfZAx6Ze",
  "key38": "3tGFLVCTZ3LgqkSSnzZ6ndLuYYYaFYTCQkqsmzPw2aaCjn3ro81qahqzReHMpaG11pWJy3d1B9PGZapwYUjv7ofu",
  "key39": "29ibsiZKEzUbhEdUvcqjEpCzHfT37cBJ2ayAYNVCabMQ2biM5dxxZweq5Ry3BqL11dHaxLMZqGzkdv2yuVJtfeFh",
  "key40": "25gEMTqf8wArVZBp5nuQ5Y5SgbsxtZm6qxXeP8eXv9X5EbUQShA3XiFJcm6xfTdYD6eWpYuA7GLa5rxPqgfhqRwq",
  "key41": "31q39PNJQ6tTV5BgXncvcUkdRpRHTwA3WsPeFEHN85xHXaQCwL8MbQqDYuXVQGWfRZpMKH4xUCw8HgVNKsULKvSo",
  "key42": "5yXPsPYfwz3aVa2UYPuCxvZSzF7GtxdigURTTechMbZbSbFZqTBEWW2C5NwKxSdjNXt1rLXUAAA5tezTjeZtyKNK",
  "key43": "4PEWZQQ3sJLiFZZe57zSkygig8eBeVE2VYyXCW3YumERD4gb7LEdxDQauLPkXrBpBoFT1UDtZuzqDuxhbpts7Uhj"
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

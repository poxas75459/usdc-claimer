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
    "2QQw9FtqKz49SVvTWKerKwKTQBzR5ua6t5P5px2as1SfWrYJMbuqtpoaL5MJZT4JA2gacmdVQKg5dYqMbJTCdGRz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuVcGxVU7kFNagwzEwUBHW9VcLrkRGcTRbo9jtx3m2TZCtA1ANwmL3TaNDYDev1RGsLiQ66UqDUeuddEaxWjAiF",
  "key1": "5TKd3AMcwU1uBAZuEMTU7H48ph7Q9nZDZ6c7hgvD9nQpNFGZ9kAStoUF5TnfHeR6MaxGeyDmp7qMKjxp9aeT9acK",
  "key2": "TiDMuA9Yxtg1XdbkEefkLzLmowopz3WpeENPhKyAee3SN5V2UFGLCeTuTAAmS4dg4uVu8YjXstYfDtGsHArzPWh",
  "key3": "3Fddv4BjYeHmr5oi2dYqPyYZEZYASPsmyG73Q8V3tjtKk8Q67xJBZdhpqNTzM4UteuSrCd8VN1AxPPWuoMPZqX67",
  "key4": "5z5PgzvURviLcASiRTvcxHii3uzsWg5eHvniGHx8GP5MDj5dsHVu23FfE9hfqQMKZK81QkXXKWmSJVArh1333C2t",
  "key5": "3XvN1eHP37Wx9t1NqbB6GhJC1RkVggoeQGowwNmAy8ozVscHaoZ3aqWwubS8j2knCkDhjVWf5Y8Zoz662XAgk7aa",
  "key6": "4jU5NVXds1iRapD8LEaP17zuiqfcYY96jLLDoJHcjyum8gfkLYGcQW6Xdvmq8Py1Dc94UbRYHHGUb3BEoMoezK7S",
  "key7": "4zvsiBVKWqBnnLP7VyxmckcMWw9iVj3kFgpYUpFdXEu3H6qL1SgkbWBRNubK78uevaeY6DgHBYDKfFVp18fowzM4",
  "key8": "2nWRusoWHGFogE852EZs5PwYCCrF9sT985ZwzS3fgpDn9R4LhAAZyPqksY4dJihdMsU8d7LJ6FZbEpZ6QAKT2pSH",
  "key9": "476wwLS1aW8Nb3YNMR2md6wiL8k9huphUNgRSKJbeA6Me12ZvG8noqj6Rc7ETgFUDCu3UZ1HNDxkAzXTPRYcTyTU",
  "key10": "46GxAEtBq5igZFFBXboVjytbcxVse52PXuH5JBioSytQgZyHqChggUL7yRN4nWcjqPpN3QiRyRAMgTyPdL9kBB3g",
  "key11": "2q1G62afSEQ1SiTTDm687MtF7fqw3zdcHc9Hr9mAjLk3DTsoPTW9d5LBPdrZvDQaLuxBTE2tpibvQZKdWXTQyriQ",
  "key12": "6CVQPpJPXto395vk77QBggqXTa7sm3NJbHXyZ6U3dnLVpQreCC1Q2vB7rFby99PUvUCEawcLJu1VyGXYmCz2NPp",
  "key13": "2YFbkBEueFoPDFfsvMdgaaL8N438h4SeUM5DZAaM2ZCK5kmNgC7PHDguuZk4iWMH5YEMHZAz5W6J7kNwgEXo2Xwg",
  "key14": "4FrYrzapEX4BaRPYKbe9o8jvgSP4DKAgauRaLL1iMeGfZwsZjuB1mwKP7X84B5M3W6TiCVQdxhe4ZBHcCp9yfzVs",
  "key15": "kYtT7EfwCFvenTHJSXzPiRdaxWwA5uPTzXEzs68wshRsFoedVKbPAPSErGp1tKnHGzWTGLkrjpUqQBQebgksSxH",
  "key16": "4xUhw4jCRT8wn8dZK4iyBoHqb2XXnVELg96Cobbwjxxb3BTyvn1rmyoWWWgKEgjZ1FXVoATukYtADi1pKUbYcXj4",
  "key17": "4DwLU3yLHydACwdx3X4b1LQjyP3cYL3sQMzeS6mQeciD3TTdXFUZTFTt6qMwYmYSuaccnHBJhNHcjQ3qU9CwmULu",
  "key18": "8Z2cjUKTWZn8aCKKPcEbRzCYitQZYz9BQYkZWXhHiJjkrN5q4gYs388kNVTdhcQKQL4og1eRsDZ9yTfEg6pEzJR",
  "key19": "48sisgJA4NpVrnbKW4NYkxKdtfDZ4KgtscyEKEkagNrMzctDJbQVAfqJsDhdXbcuXoTNgQcibyHBasEz2Tqczk92",
  "key20": "56EfvXatt3z9kJLXQoLwZ2JiesbqschRNBAsCngBxowccMqRSjVBKQdDKM5nECNkarVkY6ScECi2y1MpPJvKGNnL",
  "key21": "5SBbZa1jmaqwfHSVmZo2D7mSuSP9tgqAm3q3ZHg3wiunwNvg48YGTfU13ErxjvK15ko3M5AyMaFoYusnUvjUT7cE",
  "key22": "c9DWJpekuUDJbAUbEJmqx618Ln3NxZiFkt1Aet1ZD6mLGdkaKtTkED5SrHT7Swa4y3kxVhWWfqceFhj1XEwgDyr",
  "key23": "HN6eSBQYLxCwn9VpFd2J7jP88XDWh1hQKtoFzfiHhomAnA4KUQn57d7r2MH8GbXk3zgtsS7CjUvPPRy1nHFATEo",
  "key24": "5bF24Rz8gq7bKPuz6qujKc5xeMxbZrzPZmuMvKj47p9QsyVGs29Q1vkNccmiyDQRxM1nydeQcqUUNdfc9fPbdYMP",
  "key25": "4cfMLBXJgTgZwKR8eoudHtRpkzrLkF3RQcC3mxvQZuvQyxu73g9rTCir2w6MwdQVucC7t1UZcVpxrZpjwZc9cLb6",
  "key26": "5PBZSGT8T5Rz1rYgut2fGtZE4Q99ec2swtGdwrJFyLjjSXA1n8JghYaLNkniE1gDdvcCF212iZ2Q3xSX38EUSPLm",
  "key27": "28k2Wob9aNd3GsFq3zzwDqdcBecwEqKmjHohAthVBxpKw9dBhQn9WMeTPftiAaAEk1iLFwwDB7jVgw3URNh6eLx9",
  "key28": "rcci6t2WWz46jqU4RfAqWTR5gpTKfujFkBnwwThXDzrRdTsqJV9wvPziuM2i7ENdGSCCw62raU2cmfJBUq8zuMV",
  "key29": "5jVfRSYdhRdyHAE5s8fbRn9dLWJ9fjcY5YDvJWL8NxnRHFZXPSznUERs62iX6SLo6K28RsvcXWG9u4ZQFQQANe1P",
  "key30": "4HdBAfYJosHsfzGVFdwpEuKLDQfr7HC4r4AY6Rwm9MN3MyVAyVQQZiHkSipmvLKX27DgKmLQePQmvJi8ttiCJ5o3",
  "key31": "WfktFLkTHB2DdwSSJVTpsPfqNQ8E9XzUPRQCcJcBNMhEFTwKn5NaBjUyoUPH85zfghETse8gpznKz6eEnk1zeJ2"
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

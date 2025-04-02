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
    "4DKQ55aTZZ3iQmc5R8PXNENwzGeXEQfacGZ5uKGSfQb9W4KTxSAfDxEmZtfNPsGHMt5afLWRwGhH3RAvbvs8garS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65JWcCMxjLU7oRbisAz1tD145W74Z6wx2NARPARBT7yEgHL9ek3osmCSXr6xpCrFKiHqWwp47xSTEZDvT44N9M1f",
  "key1": "4winKzsvwHdBuekFAgWwri1R5mionDw43Q9HsoVAK1xCee5gnXwu8KNZyo5Pc6KdkvSh1NyDsqxvhiH9D3KbgygQ",
  "key2": "2SX88NyBu2kPFx4SVAu2cW4FsicE7fbEVSAeYkTdc9uV4hVRcrM6G2J43n6BBC4REP4AkotEF96mfvsBboaT2DTU",
  "key3": "2uPBWFpKgyeSvPboc7KziKh148t9CsS8sjvFLFBKgxuHrmur7mQt56bpgYmTDVh91kHmBo4jSU2J9Pc8voGgmoR4",
  "key4": "5bJUwUXBBcdEkqByVrJDQFZWMFutar5KRXwGGopgWANckV81VRKZA3wELPQAiLMBxXpFfvWLFBdjicP1UvwsFtPV",
  "key5": "rHoHWy15gVqfJAbJPoLobGijv5QrAivve9Gd3gujtPFNEEHF1GxvGR1WLVmMEsvrMxV5KgQpYBQKPcx3uUpHfZL",
  "key6": "4zu6bkdoPxqpyW8orPjDAFPouAzhnzGXziy3stiTQNdAZZKoaesJAPdGfbp9ztRPRyFE4uncQo9wk3Nqpk4EajSW",
  "key7": "4ovzgEQzmQGUnLkpVrJehZevg6QQQCej1iT47QjFsGc3XastXZFuzZ89mcz9K28uunc6EWks7jvMfX8556EUpHUd",
  "key8": "2XUVSYj9fcJVqcxypUjA8HRqsi95HSkpqcDD1mHVZfRi3igZedKQrgkMxa22vtqfByr9LgqCWm4shsE7Za5o9WeU",
  "key9": "NLf9TB18yHpVxoG6wnBcV7ymzimmVGScx8mH84dT8aBpoBXfHCfyQJLPTY8k1UQ3jYp8WzvZkNejFdAcfz4pzzD",
  "key10": "2tgoNnL6RUbMhf93qG1t544hgmxKqbygwDjD1WAoGYH6LGf6JtuH1KRGwpqXZP9F8mPWQmZoLYQkuZ1Ze5TCjYMn",
  "key11": "2JhHo2cqXE17FGDJ5HkPAxE9BigTJJrX5MiQ7UHF2opyWgGMYNahMGFCWS1wJCPPBRPn1cscUVP4e7o2kvUrFTFe",
  "key12": "ugzSjJTjwbZGd2EGUippFXhJiumqHsaEdtGUkT1E3N6taBENgAmsBDEkVMHbihgpa2NfKFNtPYE7jijJrGq59E6",
  "key13": "iBqjqoWibT4S7mmXSdCiFnyjn2T3RmLnGoSB5DoCBoAm1KkcpNc46pAV6Wk14qfhVHqKNDU3moapcpw2D5Ha9mx",
  "key14": "2XBwQLRkBjmgXXML8XU1nNoG8Kowgk4ksVWesrLgwa2iFFr8yL6vkgz6Jh5pn66KxyupZrhVoWzfpfvmaaCa3LWZ",
  "key15": "2KVUxQL4GQp8XPDr5ggBmBugvAGLADLHUcQLxvh9TRH1Was7qmEzdH1v4Pu6Yy3G1tLtRQmayoqjWJg4kWr2pnAL",
  "key16": "3uqgp5sMwgCZiyDhFzpPijYu3m9VTzFWfMd8rbg2RcUwGBMbMnKiA8Fd2Y8A2szeJdPbrEfsXj638DLaj6Q3MKgS",
  "key17": "3puo4XF5h6LPZgxReRVtSgUup197xRrozECar1fmaXHSAFHmz245pN637JXXLp3gF1J5TUtNiC4YB55dpZtmUpP9",
  "key18": "4FjwAk1zUKK3Lw4BAbS7A5ZcCUd3iboek4uGjYY9uNAn6K41ewJGAiFfv9ufDr9oZ27XFighoyUn4iy5KRFvKWeF",
  "key19": "2uuhy487YKkCcxM3GfTsrg2EDqMFcgKQ6oLgBxDNBu4RuitcYy9JrBpEbJSowN9FmA9zu2PVnbXrEFc5YcRZXJb8",
  "key20": "5z1M9unpm68cvoZWiGfjfLzoasb9UQsHN2QKtE8xxfJLS6b6Uv3nq1SdSv8TsgkwXRqSqG5qoQkQySopwnub5JyS",
  "key21": "5HsDzUTpJZk9oXjGAhekD69Dxn1TnogjPAc4ieAZBAfPZ9d9fGUifYK364AW44E32Kd9wcSVXmNtG6A9ctFxtztp",
  "key22": "4fgH1ZT6vyquWQLrGdutAvWAa1oLWVK7bid5wDKxoqjP12vb1EzEKjwcEp2R8DGNnpK2mSzk1GBdA9a6gmTWspHC",
  "key23": "33tKcN9m9HfohFCyyxyDsrFfkvu6vM2eg9S9oKqMSDjNPGf2EUA3YMxcA3c2mGEBUd3tH2ZNgzH7E3rgpZTizDn7",
  "key24": "5XmxNh7nWK5Hupp3PdHrTr63N7i2YqRqAne5QdrBYguSy8J1oKDNAXqLPw45ieH5QbdAHia28ZaX8YL1p7ppRypg",
  "key25": "5wYrnzZBW1nJqA55aEmSbJyFPaKtYYvW7QGtZ3GvHjDWfuKh1oZazB14VXaF1Rrr8WXocXUZoRPgdA83pjY16Ygs",
  "key26": "5EbtcYvMLa8pRaWmw7A2bBR6qoZP2NagYaFXLWpgEct1tWocTZpJ3cXfP9r2BYJRPUMqC17ReMPXm7XhpSk9hiNL",
  "key27": "53Ly6YBS3rnmobzbzZdXovnwswbVAEUNNzrX3M67WsWyvVz466hJnsyhft1nM1qwjCS6MkTkWu5CSvi2JP8MoxFG",
  "key28": "2ZGc1DLeiEDhWACybcbHtACNpu6w2XDKdgUrsDFrzT1q8TkhQPaW4Zm7ofTmzFYMVdRSDgXVfwKvT9fBqdKM5PYZ",
  "key29": "eKLg19mrtqYZn9tjpY8YefDKQsqHXET47NqYcfVGLA5HueaA5SAKyiJWJgESHKnfJLvcTJRmoFhsYheBWn8tNGz",
  "key30": "582umDYNonqRkzSYVE8MWhRytAHrccD749FWT935PeKzUdJt6n6ydy2QLeoNfsHp11FhvUtVozg7ojL3XeW8eSeN",
  "key31": "315rX8tMQrRty1EKrJQbbXzSBFBdmyuU7zS5dpBUBZjcB5hyQCBA2y3WJJtp7W5YYE44JsqPTkCbTvG9grXH8mVP",
  "key32": "XEQ8PnS69CXxRjagxRDXDfXxZESACp1r7iBxKFnWFgrhvR7v4bPaojXsoXGMdck2TQXiX6FLqqu8P8og4cora9f",
  "key33": "3TtCqSe7qbDus7XKaikZNEHC66LMuy4nViE1KwXVQuR5az93tBURbgJo15g27wdSmZmYMm4QBJgpmqMTPjVtEK1X",
  "key34": "5bSEA44YEF6XYVg7zLcnwX2rK4HawxN3DiSTgijCFhkYpZbiqSAxUacutuYgUwBkUBBdfsSyvozca48DgutUwuv3",
  "key35": "5pzymxrki1zs1BqgKJiZ7JZbhr79P8AwZGwUt3ua8PgGUdxzgEkz5jMb1FXrhx5WYPYBEPYwn49yjhd5UjVKVZ8Q",
  "key36": "4VoXbeiPJHcoS2TEy13pUEaN2mwsxSmq5jDEQ2mAehuCpH4zemQR6Q5Dah8YGiFMtVeXu7qSmQJZBEwLnQKumD37",
  "key37": "54zizZY8FA9tEJTPWmSwRNyja14wjZmZyx6TcEgXmuwTJKH94fBckGDzEVEALUi6pb1cpDcT2o22odkdaEK6BKp",
  "key38": "VnJHYz6SodbRy31Q31L7sgpd9rzt1NxJbHxMWjbMm3uNxsJFHEX9eXZE7Z83zU9zAGzi1pCRRiQ3CUBGJnkuNZu",
  "key39": "3uQLsn7Rc2BKEUzN9EdMqBHFPxN1Jk7QfVv9X8S4VwJuXc9ZuLZTXyg3AwcrUxY9XcNp1H1EJx791fydiuc7gqpC",
  "key40": "2H1Q9Ky5oUt8CaU4HRLswGbwbHZqe9kaJHzj2Y9heXBRLE3wcH6gJfUraMSuWVfNrzFaSyboKHEMHKdRcQLaGvT4",
  "key41": "mbQv646TovER746MdFPp3Fwfqp7CiCeDdF4JhDskfkiUreUA8Xi8wNftg1BxVt4iJBjw4qCEfVte2uyQqkwky7u",
  "key42": "3B1kHAkHRguui6fCHNDyba9GPF3QABz7bvsAWugWNMMP7ty5j2EY9djKdDjc5J4TeVizwL1mbXKbxbNnENwvLgVu",
  "key43": "62B2nHZUCYZHY6q21DhFBHmMsMHbUSdJVbEcYDpEzzND5mbGsrmq4ahZzjLTUUqzqV3g4dckY26rVbRDjgDpVXk7",
  "key44": "515KQhi3peUUwiZRtHDy2kP7TZS5EYJRZHcdnZAFYApBynPd8y7PFc7vb7N8eFwAepk4nrGFLhG9vjRM7qCzxxy1",
  "key45": "3gHJJZuR95oKabgZwwG979mCvDB9M6XoLMT2EYXB21UxxhYva1vNLni5FH6xprR8ZQEPsX7q88nPf3dBP6hNS9BH",
  "key46": "2F6BSSeAMzajibLNqC9fnESXcnC9SG7qhTTP8kyympALAqa6d4AVMuPm3NWqJGH15NfjHkNb4ouKMKgQDg4d5swh",
  "key47": "4pFR4CsRuoWLPkBpmoJcbVJMnDuaxTEB3jFqr3Br6AnvL9k4uiTDHb8n8QxjkPtG3LTyUtJkV1Hg1tB8NCqYS6YH"
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

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
    "2y5chfr4AMRU2qDbb9XhHEEMKDSvurXoDV9yUq1SQ7vXgWAPysigq1VhoaTVy7GqcdB459ZDnnc8kwoGLWgst7Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEXpVgzoLwiVbBFgxrKzK86YSmA62Au9KYwzTJKGqCa82cjEk8wMwKdgEn1d6PbACoQymbZcXruAUPucVXwp7kA",
  "key1": "5barN3LcAxxnqMfp2qqGFQMc7xjrfEnteMkeNQUzov5TUrDBEucneK3XUjaA1TvEnXTQF4aLPUrY5VDs9TQvMSCH",
  "key2": "3x6FDfoA5cUYELnyghtchXVpH3VNJwTuxLX1eZTfDJFT48JF18jGsnd2gHoJQZ2zBS61cd7hu5TgP4cdidYv7UwS",
  "key3": "3ctUpNT387dMeRbbdBJTkGhCSPxemRsNxzQETWTPjw273fHw67hEU77mtAsQt9smhdhpBTEpd4RazkK11rwvqXtb",
  "key4": "219i8buedvQ4YiT8KBPvv5yWFTkZo2zi7CeNDUWYeZkBnNAHVxYRiXchQg6ipM8k1wfeLa4qnZmXfFYSok9p6MKs",
  "key5": "JdarGnRWpwehWoTzNJRPVovFJdgxP4JaJXNF7XXTWNcM3qiyTmGNPXEYFyftWdRCb4hpSjdyALWvApBWvKAhDME",
  "key6": "4kHHiZek2DrBBNSwKfH3RSs4o7PnRTMYyCqZvHS8pftZiWKMqGaeJmvXutdoxNAJcMmNJ64dHdip9pGDeMcZvXUo",
  "key7": "33L5AryTggwp2nX5cUuYdqemqTxe1GsPs13ch21fbwVyWJYyFMr2dgZgMbgSYV67GEvofGypZUko3NRnNxVqWQd7",
  "key8": "65YQ6LRvXm21J1rbTJY8HtCPi42yCSmpfThenvvAPZwSAr26LjW7aoawZZGCnphmfHW1QPteUrdWYHv7aDAvwKnd",
  "key9": "2unmKFKpF98wuqrw8UBBNJESgPqPbB8HAAoJdpehrJFi4U23nJvQMaYGQLyZbQyGXZcSm5WVQrHjEkzEh3XFzn1U",
  "key10": "CiP4DLd5cGhtySH4DELn6NYzVsqH7jDVaqztAyq6Pj8Wa9AiGw27oTHWandpbQLY2r1QdxDF8rZnvAoSumFg1rE",
  "key11": "5v2M3bB4Qy3s32t93wwJuiXeSKyUzaASw7bb1MPuwC9UNacnwdroBx2EVaj241yLHZ6wpLmjVniBd6gC5iNrvcos",
  "key12": "5xd2hdtVnZjnheoBGhGgyNbD5QBYxckRm7GCoZt8MmEZ4qxf5y7Rj6Aqcbj1co8LVVg3rGCgraMfuB9QPoJbsDew",
  "key13": "KwGbYDNokMvaJXzd55Qox1CjbrUGsL6DqsfJyvQgbLGb3FNp7K3V1AFj8rMePrDx8rbkcnUyf1voHmmVhPqUCm3",
  "key14": "eZDoN7Ap5CU2gc3xufiRhNLxsBgoEjDkpDyEsN1FnAvDzuAmCdAi2bq1RCVEmCZ3AvZZEWexK28yi14yntxhpPU",
  "key15": "2mkcc3bts2cGnTL6EdXAqVBpWTh2ypTrSsbbmQxNw9NijMuqTFA1RHHTdtqL8wbDgD86JVwfgGvpc5kgSwx6HEse",
  "key16": "2e4grXpp6CGzYiYWMthxxs3JuyNV1on82YmFrAkjUtk8xrFUh1tJtmXvrrLXASbPFEF4xkhiT7pDyTUq3QVqWyNe",
  "key17": "3iBmpsr6rNAkkyjFCZ3CbgEDvPFBtoC93JLK615fpkn2YVUX1nJqog3qmJpaHg8dty8rATHoxHfR96HAtT8oKnTz",
  "key18": "2g45BkVCkApvc9wAoLqrHBREbAjfewW6v3qZSs15sc4sSjv3MqcVcfaBzeLJ6rX8hXBx3tSo1erBDzJrycPjkJYB",
  "key19": "43g48HnzmY5cdSH6nraVn5sMZ6Ncpr8KKjJUrdKNMGJkE3FhYEvXSxYSiBFao7VgT9jUsXhLD85UxEpKp6akX5qB",
  "key20": "2t4vM9WwhxdGULHvJuu5Ht1HLKccvBu2g8HCnXRK6Xjf2LyUtLREj7WorDBF927vRBQKnW4aeaneppAhok7z6X6h",
  "key21": "64f9YH9JqUZ6JEwtieQB2CoAbnY7izK6h7UpQSLrYw5X884zM6RLNZCuLkixzDbgho8JUgFcXhztKJrcAZRbLJwx",
  "key22": "5kfYC7y3ez6XfM8DNJ3TE2bBNSDCFvPeWV2QgT5nJozk5i1vpmQMaWsqgjuHGo2QjPvCck1nePPnS627Kmb7wkMY",
  "key23": "Tzi2Qqv1XY6g2FNgUrS1xkFYpUwcKqvCFRf7gB1j4EJXKAGS6C2cXSQj29N7f2iahRkK4nqQNp3nbH32H9cSMoc",
  "key24": "2XVyRh4JVvcVArf73Yji7anWiWVSnjSUaXXq4SuomK5CFBHm2c871foqTboMXsPzkfLV8mt9JyV6VofenMDVqfpX",
  "key25": "4b1AEZcnryyfG1M1CEmffCmXTkxAv2fiZGGKchZnBTjyXkiK4FJxe9ioVrPpGt5FruEzCmMhFLjsL4nDGt64H5Md",
  "key26": "2AbeEiH9V3ns1DPfMNRB6PjfzMCjwwXNphwBHm4ta3e1wJ5gUm5EeMUHckzJrczaq9ydEAHKfR9AVBDU8ZDSK4Mh",
  "key27": "2DrfWiGWsJS4mubjPFojNoZZ3auWcMJdHf4rtrNC2jUSH7tj1BxhQMNG97n1g6F1wbLo4ZsqApK2JEmaR8iztyDP",
  "key28": "3F1yfTiyeCrLx72qr1Feg94V42YCGByEcizTeydNi87bUyVeTtdpA14YUgNyCqL1ogMuswTQZoWXUDecsSu7TbNP",
  "key29": "5dp8LTgKk7TJnKAxqAFyZ8P7ddyBhrQZqeoWEGiuKR2HPRrZR5hmLNL3iYTZAaztPee24tUq8VF7cfwW1Z2eaSsJ",
  "key30": "3YrteoE4eE7mjnY9cUgprLKB9eFRhXWiuqL3QccwEQ7yRv3rHg5Pcg61WYDQPuKFWQrFxMj6ui7FtqzwRxuwRVfc",
  "key31": "47zGdmiYD8pJTPpM5jL8EBub1iRfFgfYj45db5LqUD2DHoggqsgvxjdCy5PtVFMriEvLxUWur3ubfEbmagYTZvZM",
  "key32": "5fQBYZccuXux5q9XqKxLDhp4itqdAwnq7bcVPpT8e2R8BusAJkUU43oZGmxJtqnSShnNLQcU4HwumNpDWmrhhF1g",
  "key33": "3JgWE7sQ44rrCZCsEVx8UxoZEoNz5zcRq1KndJzNopHHY11Crw21yftRRArs4WQ1K1RfmjYZZzp1nCQAyKYb9x61",
  "key34": "3x9nb8873Jo5t57LwpoB3SYkoT6VJcwyfihk8tR7f6BYtZzeFWg2Bi9PpxAQRCMDNQxUsppmdtSsc35Wfmmx4tgU",
  "key35": "3dypjozNzrV8YCHC6eZN7cB55NoW5yvrFNbRw9fMTeq4xHhHDWFxHbj8UdijGxoJ7DntX5NY2rYiFkqncLtJTrgt",
  "key36": "233rMYpDLUcuUmPqAWCDNTBZDRbyEtxMNwVGPKVJmZJuQfJpLWXPvHW93nmraQq1DBVt63PoAkFTBKzeLqFkewbg",
  "key37": "3UX8MVjFRA665vz7b3bf9BzKw91SgLggk9jSZNyDDPB3cq93d9w3yTBzRVvV62ccusbFoo5fcr7FhYFRXZdCRJkn",
  "key38": "5kxatyZ9hTy3J55VwnPUzoeH8KZBcjQy9xwPDW4apCNsRN5NEggytGosbRXARyDgszkZZXVzRnHacu1hfXvj66Dr",
  "key39": "4otgsJco8TttjxZhpsrt8qWE1zRwdmvr2JW6CtqjykWFMoVqE5GjPorp9zEghbrG1HbNqBZtu7rC6novfPrRJD8d",
  "key40": "67qFzkszy6BKGDmL25UALQ16Mh6JnpkoBsSwRik4dXErfeHRRCGBxjd7W6uBNjjAAEHPpkVzq3pTDpN6wHQeJ3qK",
  "key41": "2wSpXdP97xitwDoWHi35pD5LVaApPDDh6FoYhPe5idKeZknzLZ7FQTfvDPhcoJHf8iiryRa442qwS173iTQFzkXh",
  "key42": "2qyCrMhHyYpQHsDexFHPUAadTMK2cLzGJ7CYWKpJsMmZ1UFdekTyJYoNZvgw91bfQgYPeUNnUV8Cd3Jg4tGjfEdZ",
  "key43": "4qrT1zXLZr2yjtZrcrRRpSq1jFCQ9H5Tjbyk5MibRyoqBpCCmczutJcDYmvLFAP5H9vYCXuQWViHcVmrdKmTEHtp",
  "key44": "5ptWWRS7fMLCRcad81NB83KLCy7FNRARijbZJ5kgW8KXtXkfSMnB9zBzjCEYPqJdfptEKGjqFMiwb4YiwJUagtjP"
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

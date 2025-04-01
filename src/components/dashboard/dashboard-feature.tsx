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
    "2dUuSBYoHDJuHGGVaEE43XqVrMumk3gSXVLbeNAbnt2PApHdYW2197DFtw96BsRTdijHHRdsnu1gDJ5uXWwpmT3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wGWcffgKAVuGMmSFa1ferbJe4bmvNVeck6KQMtGXPmiaMKJsNVy7orUTNetniaiyRu8g3Xfc8kWjMfF655BEjFN",
  "key1": "21W3rSygSTqQqMLyRhF41zpYre4NLCnKWoy2QAkvLuGKPYyukRkhcsjTWePD4QQKjbVxM2i82T7d4UUJ6EFugNan",
  "key2": "sMTW3v3eVtgxppmaqLsq2Q6HhsWDHJtMxSgwLfDsAd8DGJbotvaWKkkh5FHY6s7Tyfr38evSkpRA7Ezc8UkTGEQ",
  "key3": "5Ecju3hccaKDmfysZeveFp4777GzMPQBEQVAFq8eCvR9G1q127TUXM5xWatgEsDtaU2dmfdWZMSKQ5AwtmDaN2om",
  "key4": "3qbziS6dFgjA62jsLRYwGU3mv3Rn6uWqtjiho5FwHD5MGZiAwRVFNSPbZD31marqxi7NXVqtv1C1UBLCwuXaXvQx",
  "key5": "5yHH9WRoLggX13wH83qRA8KpKGeGpAEEycXfvpzB4N7PXLBXM5tLyTEpWX1dXoBqgYgUw8mB7fRARNcXySnAKx85",
  "key6": "iL1twQ4u9TuHz52ewich4oEsJpLDhdrkQqkfvNL5WGxYuVV5F5SJ74dqmbDBpiUNeAu5oJGZjCde31coqNYWJoY",
  "key7": "2t2FVXQHukKEyh2tmgjkBsBFVAYmTea8pz2cforLtqkcP81vf1xtqf6m5MewY7o4Vv6xswruJmAQQhWdxBRzqeA8",
  "key8": "2fjZVDKfc7aQaS86V7vTrRgqwRzBF8Haaf7mQwd2H9X2ERVK7gBv33kH6UAGgC84QPkdrQkteDfS19bPj9NRhsVb",
  "key9": "48gnLfphydc4uH7boXummQ3F6cVgAcJJabD4tkWmKYm9Tc7uN6uqG6g8csCw2tXr1Usvtkk1aQx1aZC6FBpBSpvF",
  "key10": "4DwQ37kCBofRuWZhknbfUYyWQBPmH3B4d3LmCjDbLgogKXr55pbQe6BeY9QrhhuPykvfbcTUA9igGjN4TR1ovQnK",
  "key11": "W3gMTY7vPEaowBC9uv6PidC7DRg9V4pGBX9wgR34nN3Ft5v25gfSCzJipqz4E9H3UVnAx16tW1T3fYaCdd5BpKz",
  "key12": "4L7sYhXZg4DHrhFuvL4HRRPASUQANixJpsFewTrcZVG3M27XaaoduBf9Z7BtyA5S2BTAy4ZY8M1LHjNgddpUJcVC",
  "key13": "3h7LAwoCotrbdmV3cd7EsUsHA1EBZKgxx1abqHS6tFHSLqTYZyp73EkqMFwKdmo4xzKjvdK9HiV2XfBp8fdsdbbC",
  "key14": "2uBfpk4QRYKkeU2qBTbkT8jYo8XKHGVyBREdDK34sGJRbQjZQqGZ5TSqzQWo8fzEZ7K3KRawgBMPioJm6SJypkNM",
  "key15": "d1EvAsRiYJXDJjzkGP2585Yphndh64SJLZVQsSQaHF7GWwZaogcc54RsTR58P6FJc25zpRSr3ZTtQsiQgRL8PaK",
  "key16": "5G9Lv6KWfsXWk2XDca1oXnn6uENsVJ4KNqyVg7X8T122SvUCa4WfsynbeTTSw31exrd9QJgyEE6eCEhQVseMjbV8",
  "key17": "2KrPzBc2cg4DS4aq5HGWhuqKTFMsKcMmNPgcDsZYffeUoth3WkSHMLmmGZVwtDAAgirycFY9zTaFWiM9JWe5bjAw",
  "key18": "4y7jPk1evDVcrKimR1P5mVeywUHRvgx1gb9wkQWL2f77QGnKrdM8MzPEY53NNbtXWHnFDGrJyeQHFKWdUVFUTt2t",
  "key19": "4ZWo9kW4jPj877onRtxz18Abcz7GZyKuReHSpYrReH123TojBUtgcXQSVd7YoniXRyG3nqL2N8Mcb74zJeu4rdTB",
  "key20": "bNyaneyN7r96JaRM3DBnXRAWEctGycWo9QjjxKSLmr5nz3zdj375XXEBQn43RmpyGWYtBbX1y4X4nB7Ld2xK3uM",
  "key21": "DTurejENBCozuC2qH1VR88ewSLYkj49E21j1Z7ki3gfAd2av1YLHSnQd9ftWKJNUW5A3szvE9BvjU3xdGb1QLh1",
  "key22": "4TiPpvzqw5nXtrqXaNWQpH9aEQ54xDEhvwx5SuyyHdmwphoej3fPxnsin6cpJujP1gQYr28SFFZxmjnsSGnurxBc",
  "key23": "uUnC66oAfNpiSoYBShtw8KUHbXXBdMeNMSa8PDEdTV96VowWAnvh4mNn8pEvSp8MnDegjjBYNZpvqNxYHHR88tB",
  "key24": "3MGi4epQ6Wze2BGu4uU9C6bBFpNs31P5VkdYzXmJGk2PcMY1Ygzj3BxDfjW8tWMy1T9trJMRJJjTg1pXd7iQw6o",
  "key25": "4RfrKmo76TnZe2kkBdwixJ3ZK3Et6je6Q77KXp8YUADLPZ3D88oBUjDGejdByCSY8akKuUtBivhnaewHk15eWQeK",
  "key26": "4Kv43M7eYjSLM6PT89Zay2CC34uncRGdfBauJwHTabbURG1hXWQgGAK52V7sRMsKRqJaa8go4wqZLSrseRWX3asQ",
  "key27": "c8xs9nHNqcp4isGLvTjFhaT69cTHcYuWGL9BM353JTUhtxPJWRzJD96tYbT6E9CTeGiuUFKXzkPsu3jqhjCR5EF",
  "key28": "3etrqMU3yELtQ716LqRar696gK64tc11UdSfd3ACCSheZ24mAyN9dGsnjcEfBMm4f2bAR5WTLv24kyV2oAZL9MWt",
  "key29": "3NBwUGhsE1a6ohCxeeNuAM3L6t4ryvip8d21JhTiEM6qQkTevq8D37QGWFRLL1z6sV8Q7moEAgAADQE9UeFe4VrW",
  "key30": "2zvkjHJQqPUjQBe12PYG9o9FV12cG6ktAuJdeTUN381khnFwqTVJTPmpwDkYZdMdUpp7AXaWrnac49yG1T1a4SfS",
  "key31": "326PYAvWGaeREgmfJSQfBY4aBMasKZPf45bnRqDzauafmdtKk81RtHN6cHY6cdSYxp7zVFZ76XN32cyskPXGmbgd",
  "key32": "611NHvPFuoecTvURZX9yvvRX9VBiWDZ9hRinXzamy3YafBZuMSCZpETwsWJvDDr5XhdDyLVs2GFR1Z9uAPjyJgPd",
  "key33": "4u8r4kBqKXuKpRdQa2GyvLtTba4Cdt8EnwiirdYnmsdeGjwDnwXXHom9XBNqf6aqgfNPH2g1jaZNwFohhFoPM3D",
  "key34": "3tufziJYutgcPw3wFWd1EqCjPF7HsxSk5qAhtyCSSpgGZ7nvKJCc24229CvJ51R4yq1tH7uuDhifUDe1Q4EvPJ2m",
  "key35": "Fc28kQa9L3u6vGqLAd9Q5eanjRQxiLkGKaWqzzpeDAjwzYp74pXgx3oxwvv2TzZFcF3pW6LRe75Uqge1bvorMVJ",
  "key36": "4AHLPHQ8J4JQAbWYHZbBJzosJVSATdQBC3A1pvkp6T4fJcR6ohYGYG6ndkPsABhyDL7BU6K7uDg3k5NcjpxymfPn"
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

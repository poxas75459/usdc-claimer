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
    "5hVaFNodkSakMq6uxVL4pBsAucKbkZNfG53T95e8C7HTBJy6K8kL9g5Gvz6gdcmBnQB1b3su2RkQyhvoyGGMtLpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51cPuNhncNTpNTF33DqNGdHK5KDuQvdcYqNvSEPNmg8FiruZqT5pqnmFY3jobAGTFMdGqbcFKjxxt18qKiG3iS69",
  "key1": "4uG56VgrHFTGC4UQxJQ7yUq6abgsEKUaRbN4vCcB9esjXuffzAGdzzwnrcRCRnwha1ojjYjyPLKRZoexQp7itdM7",
  "key2": "2EtQypQ1WGrTFDs1Kfe43jutviwCU2eQGo3vGsD1fZkFHUpiJqtZLPSHfG9LysyfsD3LEaZLrAG659i4rwqgGrK8",
  "key3": "4YcpT3KDzoJV8thEHc2fjjQinvwkmLHyF4zbEpXQ2hPN3H5oa1Tbzap45PHmE8yMsp3XCsLrqHuh9D64g2DSNTXx",
  "key4": "BLN7mzJF43bq3zj5A2wHHdoL5rAwFiPNpYJaoiQc3U6zUCkXYJo6MM5SRUpdH4Bo7FEN3rQNstiSWv2muJtUTJz",
  "key5": "64Hc3QFr77veumDPXGXZfwCiTR3FsCRMUJnMo9faZg7KD7m1a2jkPNC8JsXx1Y9FnXhuionomb6T9dCypHtqgEcL",
  "key6": "3ULFRoZygJ4dzyX5VrvCUtVEVZbkixTDeUEnjTuWEDgrLJfxUUgXBiyRdgqBCmF4J8RD6UPYZhvBBJPHQYnCq6j8",
  "key7": "Bs3nka8KmrcyDizSKppHfnXtixRnuvDwPHodMrfMXTPLFM4UF2oxVx3nGT9AvdaUsXoSttHwW77Pq4j3bpnRooc",
  "key8": "2N8JpyPLJ3zZmZrcD7fem6epgMMFVXeRNitzSFopdn49w75KiX9j8zA7LCbbKRwmMnt5psh4QmQaaEAaoJV8omTm",
  "key9": "26g2PzwUTPxsV8PgGhcYkembq7zfm1uU6MWVSM2bKK6bHExQFBuq3MAQHTQC8N2yjqeDs5aZKHdg5vDZjTHNGMYS",
  "key10": "5m6pgaQUeaA8MMoKos5dwL4NpZEkvobDV7xt1NCuKWF8yZu38F2d5u6sJdE3oqQFPPjmwWTsjuNYre9mmDTAm9fU",
  "key11": "63vbnkpCd5pSFM5tfQunGv5B2ruXFJMqvcbweUEFtXt5wccZE3YabdqFbm7uHbQc6hYbYmpmZ1CCQ4HKU4dwBnrt",
  "key12": "4vwHXQeGiQnGWQLU7reXBPhqqYZL3sfGfuUP2SNbj13UUBLHJfQgWmCo3FukECCQxakWSKXSGvGK28Esg7AGUbHK",
  "key13": "3P3e6SajxUfUbKgrB3YcJ1RN6g3k2k7XozubYZs9dHADjYmUB6SvZznv766qbwxYJHev4jnasiUrVhyMmfetW2hT",
  "key14": "57ugwo1gi5nSbZ3gjdBQQhhFn1uYAqyehZDPh6ijSb4j52MWmUUDVsrKmjwrtLtA9Q79Xtin4YyCAbSbf3YbnRHB",
  "key15": "4dnJt6mzz8bxpDkVEKf2weUBx7XSWDLfRWRnjwrNozbwtJgQJ5zbCNkBSinbYofD64643sa6hAFpUy8ajMENKwfr",
  "key16": "oUnq9imCBPwU2ui1YEk6mobu4WEoZAtzHmREUwLyrNriBMQFnq4xBxTSWvAzumi1bGACsJtM5anaCq7rQK7s6gn",
  "key17": "34EFamxQ2ZtikteaZBz7odF7P2uCLEzVqwXDJiJ1v3EhNyJNFmFttJJT2i5PQ68aAFoU2jGmnyjhv1osDaXf7uak",
  "key18": "3ezkXoQtEdnf2Xufd69C3dkGguzMP14WTzskCtQCMeawRaATn98QLVqn82xSwyEUfxepoCkDqJLEmtxbS58VdxgG",
  "key19": "5pWvnXTiqdAAvjYebRRXeFirVicsb8ZVUjP1opeaDSPkDskye85aF1kFVFLyrnccoYv49Pk2uqfWQtVHZc35qqY8",
  "key20": "33TGxUuXMJ47vSp2Qye78Z44YyBWFapfuKQborthNTjgdB8ZJnnBS9a7qsavvEpRRM6FcpG6hn1zpYFEPus75aGV",
  "key21": "43e4H8FMMRNR7nsyA7NnUSH6x1nqjLyb3JViwQfoGgsFHrWEgQBYxLP552eo1ku9kLMY2sosdoWvXUcXYcew3F3K",
  "key22": "3ZyeLUkWK7zCHEcCtgyDCstxmbi6dqakWNotRNUkiExJvN7ujzxgvfreAbSGPL3vsqe2GRDHF6WFBiDoe6MYX3ih",
  "key23": "4w1fm3RryyvByDo2mUevrZAC6SLXqQiyCgmH9dvhVaWZPjXycBUMwjfyo3T7rGU7ZpozaWCxHokLSdYtfp6mCMPX",
  "key24": "5AbLfebpLNBbRwB92pBKXSWX5maP9hMhg5r88kKZzCiAaZYghBeg8225jbiCs5fc1w94ZjKfzbDEmnrRSJ6dudCS",
  "key25": "2WKLxcQhR5q26GiDc8LmSZDxw5AYmvm59xz1WSdk21zTh8L3LzvtN6vjLDo5TkefT6JLKsgNqpQk14tcJgTTrEnX",
  "key26": "3d3koC9pFL4yJgNE8FPsaa1fTGRSH4GkYccjnzoAqbbcTSPWM8tKoARZJWtVfesFqJpEEWVz58undeHqdpvK2mP7",
  "key27": "myUCFmJbo6X8DHmSfqbK6avgY7Qx2Wyb7PpThQhkbC6kP3LuxBqANsm3R7WzF7oafz8TTH3URJbWuBxiJHdCA3B",
  "key28": "5JkYUss3A4dqcS6wE3352pSUuJ2sxhcY1i16CrcmjgmtX72JPVstTSSqPBgoDqkHNLqfac6cZdTDeJ4BWzHjLGzL",
  "key29": "551zZJhRFHt1gA8fubah13QxaJbBqiN7c3fx2daYrL4Wf8Ry5gZU6LfG4cDwg6Uj46YHdVKQLrDs5Gei1arMDddf",
  "key30": "U1Lii62CS72BxXUjDfQm4AFzWvWuj6bbGcWuAubSJgp2gRZKi3CdEUoQ4BtcEECze8CgmBGRUFa9tkkg6bzxn3C",
  "key31": "2bQAxGHSiGxoCGuAGXtBEryTG8uiMwQeYfvhQsDEHFTGuCCwj7FmsVszFcQ5ayUGpa7xbHVve3xMsB4FMDQVmDJd",
  "key32": "r1TRb9WwNMZ1CqxhyQ3c7B9zTTVJEPKwjxiCPcYvun6nF88np93yovBKrFMyb2bxfJ4US9y8wjtazsomeGkCxPN",
  "key33": "4UHCKaLFoa2XLHzCYyAziuWqN6eHnVaQ71KJZkVZ3zvtoiLhL3spF1jZVUoCGxjq7RKfkKf1A1hpZfYTRtYa87wD",
  "key34": "4vUP4mnkG597qnzFL7UxDoYzbtYhSihQhY9XredzuRJQFEkEuzYdxFZNQh9es1VsS1acZaTxdBC5bZcfZT4xPW3Q",
  "key35": "2ZTLp54y5JeTu1YQQrJF9YgxTE9wJeEnqu17zTLziPg8xaK4hvLL44jq3YwVDT9JJSsYvd7pv5i2UGuGcmjraf4j",
  "key36": "3Bks9N5qJghbCPuZ6DZHacsz1H1dXZ4ZrBDgdT1GPGP9Ys8MLbCbUCMKuMnQvH59Aow9crzVfK5qQXMLWj7ypcnx",
  "key37": "3Fb7Vf3b8WTZWcPpwSMQAaHGWjXqiuxZVri7NdcaMes9MBewLn2dc6Vs2tcLdtAgFMcEjJTwck8iyMeGd3VfWe1m",
  "key38": "47iAs4KEFvE4F2Qk1LTPcg5xK7sehG2iGGJfbkUfYy44cJqo8zCBBgTiUhYws6rmGevc9TcvvwEqXyBY3t8Ldmu",
  "key39": "5FjUNCCWooQzNULUvyKUVtXqPPgwqvRNcnXiBkYqEdehaWYjg1CGZBGBiLBC126vyVneujgQGNtpM1EhSNPzsFcN",
  "key40": "5cwB1YoeF3oZbJ27sjUkgEMxbhAUoGR1Q4id2oswubqnf1EM1GuKEpbjxFrrpj5854SMMBSfB6tZU466mWNi2jYb",
  "key41": "oFgeApFdbj9Kiw34rvLzKBjpXejbABuNs7LqeJoRJdEhdd1fz4sa3Zqq2LdReZ81wrZedBrsUu444mECuugjMEU"
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

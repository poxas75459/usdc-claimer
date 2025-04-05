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
    "43Hgfz1REEPQJsjA53MF54fAaHvE4jW49Xz3jY4RdGCECKTYTDaTsaFUJshYQwyGAitwLFMoYMEHiZNxCLqywuyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDhBZi3rJKWRdZh6Y58sEMGNwcR6xgQL1PwAdRD8vPwc1q4BkhYhYCFYgG9pzUcgFEHFyaqhqgexatWeywWEt1K",
  "key1": "rhiFCXUJCEP7fs5SrEtwrpiPvtRshK6TW1xo9omD1ZPpwPDJY9bDTwBZgsCSHcvBvK4XopteUL5BfDuCsfy84y5",
  "key2": "5WbRVN2TSJor8geRmxAa9NhrnR2XERN2UBqpPDEEJHG7DKwxtJvJizNvwLipjJVdxaBk1WuCpU34KGF5yKbvCCMi",
  "key3": "5d2y3gvH7hbrCjTgbxjpqNFA52Jrs7c4MxCLooC6f4LWceWbyAFmacqfxcRiqqiYpj36nVnUFQB41p3nE9VkujpM",
  "key4": "2KwRrPbM6gyMJnVq8cVDpeq13tRKYnQyvW6xUj7PqFEqZ4sDpvavNZggCvrT6GWaZWNLRKFZpBo8N6dYnMY5tNKk",
  "key5": "3oVuYxZorF4uttaXt9N79KJEJ42ZJ8KDcPbLH6NZBAdanb6TdpFkEXBrvMQUnBhNNGSYUjFwf1uM4ZtvNBPfp9kw",
  "key6": "iA1MQxLeriTELe2iBtpKLgruCBKVYeuUsbe1KBREeeNmfTqBzL3uYfoqR3VnNXn4f7YgdcEr2s8fHXXZ3ZzDUxg",
  "key7": "nLjde9rXZxi7JLwzcSp6Z6sUnpffVLDK51NeXjLdzyKREe2Sbsdbgy5a2rYNj6ssxVETaE9w3s9fN76oxX4MbJe",
  "key8": "3eP37M3769ctr56HaxjkE4BgfmxnihGNCMqQWoWSDCXzcx5s1fNarLTdzScNtVWihiCwr9UQYVwAKmFyWTG6o9pM",
  "key9": "3yRWbSHSW9y7uE1xLcTqqhuYpAouKrGxPDaZ2sSLsEdsAKj8FJ4CiV8RzPHeK4K3KRHDTtpQnK6Mj1713zi3jv28",
  "key10": "2rJK519NF26FTkKYwKySkSDNg6BvqgechhzHD9vrX1hbtEvbdZfDZSfcny1qRDC5C6txpFJwqse4LoPxmHohFiwB",
  "key11": "3hUhWBVf8xogsHjXxK43JwLFvLi68JkSgGLDMtFZL9nGiYgvgHsUaWupidvBspgyHpJsTENShTNNMZJ9jZfMSWKf",
  "key12": "qDcsLn2D6XL371djx9sMGi4iWMKz7GUis4AdKtaYUVp6x8kjnFNNwYfRmyn315V8pUtFXfTgaEsHtvYbqCEXEPa",
  "key13": "2ytFEmLS7XpGUZ28ZEA5Sipuz54sQ13VDg24PWE1dhBhNLjPKumiHR4889XDfZ5aAXTLfKQZoq7UFkD1M7zjJbMz",
  "key14": "3fWtRwXYQ966EeR2nAwAJq4avDejqC8JVrjwZ7PgyeGcxkxuD144HbgvHsDexYKCYkivixtBik6CpKMeLLA5J2CD",
  "key15": "2wwSN3wf5xjMEixRw86zFaSfs2YvBnw1YryVteBmVMUtBVJvJUAfFoNdNzyKtYPbThJ2KLdDcfHiBD4wcFHJ8Tpx",
  "key16": "3i3waJjDDyWASJRAvGa1XNHmw1UA1csVvsNr5AnhPkngU4bccrKSHt7WRF938TQu4TTcrDnCb3FrDe89vmxapCRn",
  "key17": "3nvdbFRtAQb4MDYTYPGNu9S6VGzePfG1pRtnpYJ31fKdJvJMHN5FHxZ4LyGRhhoUEf2RJvYma5jVjEntr63uPKVc",
  "key18": "3Ki9i7Hecnge5uDbQFW7yayGis4NCEQdY4yK3UWy6eY52ybxwRvwxUPhzreQwanEvSCE9UZuZTgGMMvL5cxnkUNa",
  "key19": "4hY8rBbKp8RZAYZL2P2b5XxYi3t2EqwmgNoiZBUN4dr8Zkxdn2ZwzhZK6tHDCYtrJeaZ68uwnojaqMW3khEy6KsG",
  "key20": "5iofYmZK1VgN6j8jJ3x3qTEif8a5Hcyc3vpxrcHQuyB7osGn5cwhW9vVErzbFgLNvMH6qYSLskR8156mSSvjHeTa",
  "key21": "sXWRGRESbPBmgALKj3JjYA57kF2MJctARgJa4cwtBga1q4a9frKpcTU8J1qtjT1qQ1ui4uJum1ssH2JrD1AUcto",
  "key22": "4wetZo1boVyJAamEnPJ6Vkxi8YtaurR8gFisCk8j7cWxHuVBnkj1s6GJph5KcefrxzxnUBwCKnmwkitND2jgtJ2Z",
  "key23": "3PrwagjbGczUzFihTPbCvTZBRGeEFxbpVHZ47djjfZac5Q8jfBtEVyGRjschiLxZGVuZ9tdoYi9JmmmaUVjxpAD6",
  "key24": "453JF3k7dhrK1AnxHNn4wGyLkiZzXmFXkTfm6k1RM2zbzdNhu6LrD5HQ62yx5oFHPZGw4B3X3ddWKmHJfjC4hSaz",
  "key25": "4tQY3ooUdhprTjMXdjRGBUseQ9oQyCt82VEUE5V4JzVTQ65XoakjBmDHcHGyHdwJbCn4C45bWiXrpheKyZQFmTrN",
  "key26": "2RPRkABJTEfa4PcRPKzUUBLuH9We4ZoLk2q9vsxW5D7fruR6Grz4fvvC26tj1NE3cfzgboagFCtXPC2ADph148ZL",
  "key27": "4GWh1eTUuq4enEZyvLfJ16VSGha4v6yx7qX34bZeg4wWLEtyRoVAaRvE9fAbmZu7gRt2vdvNrxx6qws7QpyoRUTr",
  "key28": "3qgxnrbT7YFtwmgzk1ifNNxwAZ76su9L3tk4PQgGoxFFn7tEQMSF5sZrWnemrNfwd2KFet1WykQudkFy9wV8Hzwt",
  "key29": "duh86YfxJQpYqNQi5275dG7vQ3i12QGZ6F5w5PK4tJqDtEci5kqN3JM18aRiAp8cq3YPwYqX8qmfBsbyZ9U4amf",
  "key30": "ELDvMEFNsLwc3UtnnCtJQcTaog5M5sMxhU17qiPfoWpTdud3rNEtjpG8mVW4UCjVVgroyzVSxVZWHtYXG9cVo59",
  "key31": "3nEvuPGkj5HVmBZ9C1WBaYBVxF1TR4bat1wxkz9msBEAz45B4q1ggmuzwRxAm5eQjU8eUX5fmQ5sWzv8vK6pDXjR",
  "key32": "xq7mK3jKjkaUPUnpMLs433dmw7XojosLsb5UJUsDZdiupRFJHQFdboBCrf7dJdeaNasnyxMguEjYLf18PeFuTqZ",
  "key33": "fM26wqGsmvZucnZFg4iLq8mcuHMktv87zqmGxBAohKNYYJgG8K2XxFbrgzBBKxs4xM12nHnrRggVxswngZzp9pd",
  "key34": "3fdyiMe8QmsPCtA3GaPfJsyZriBhUHk2hKfMe3CFdiB7TtTBtp9tyKSKaNQpqcfmjTio5paptG6bHE335FcNCrZh",
  "key35": "ovkh4Koa4TZJoYufUDZ6s4r9AdSMsB2p1Gx1xsNrxMTzkmA4qFvjxNUzHVavWgsXLmDqY413sRMqLQCesCvMEyY",
  "key36": "2nvoDSSHBw5SWBEKMa48ZYqiGgtUTbpz3FMrcJmPsYujFocGAghkyG5igdK7YxX2nUEUoavELAMcD4HzavKN5zA5",
  "key37": "2b5rLSiy9Z3yuKhAtAwb9MsA9wUTXY6zhedFiTwxc7HfNv7g1sU77R36qmM3aLQok5PgqJ3JRiiuUhCTfiNhdnuR",
  "key38": "3QGjrDYwikTd7MBf5qutFsXk1cfMHgUyVNXXVKUqLLUGeRgVxwSDbNQGSAJyxMFm9y7FeM1p8HQaJMBv2x6uk922",
  "key39": "4NrPTeHJk1cXvKmYeFQYCRs7RqTSWV7zRiqkDYz71yARNXGvtMZsDnNXvAJSEoSMPx8W2bhL5uPLhqnVivrqree9",
  "key40": "5MGVAtMGnTe6WcQTWtGeErsj7X1ZimthK4fRGJsAin5XA1W2v1GqVCyL1ZV3Ta3FTUVEfMvFj91SS12QMiJ2MNQ2",
  "key41": "5hinXGaZyLXAUQF1GXA2Wy2tJspf4eK36NoDJiy1M1SmPttrgssC7XQmyLiYJL28ToQWWEDEViEmdfgJA3mtc5Ti",
  "key42": "3NR2oB7NUyX8vCLgRtzmX2MjxEB7fBqdp2mudeqKN5dXMAc7vSTG2HZyxphuTcHfQqeiZrFXuEnFyLYKv3xDyLAT",
  "key43": "ZATApheGaP5G65gbi4Q3TBHfYZMTDkfCdqsheotyd8w7WJGjRxtvsePGB2B5tS4XDY2Yufas3RavK2A9hqKcZvk"
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

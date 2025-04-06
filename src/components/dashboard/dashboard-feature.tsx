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
    "221JZD37yHMTY6LH7tfHEDuz2zUTy1ShRpUwrioh7YwfHmeitRWDofXLTDtT6cN7RGDWvUoCk4yQGs28h4huwyjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbGcUJrmbfqKRhLLuEFU9yW3f5tiKMBdb4qYaUwZn6vtMTo5jLESorAoUkrY9a6i6fZekzRY1qZ7or9weeFQZfW",
  "key1": "Zq3KNJfkJS37rQmC9fP6L4j11xBxuyrSeQESQevaf72Tdgy1K5i6Bu4hj3JaBJhqKyd43bMDAqtC4HGGiqyhqGH",
  "key2": "2p8ynjN34XTm8Jw7xWSgbDUzwfrYmxNuaBCZdPz53hv9G7hjaWaYjMJSKfNp2GLGYkRjaUoCbdRCjBtTeHKcAcwb",
  "key3": "3e1xYvAqDEnFMtRhksmah5osRpvJGkfF6WzunsGeNCg7WH68biWBRXUpk4wKZQEJKEo1NjyS6koPRafWbvKCggmW",
  "key4": "4kWzVKM7xQc4jv46gBaGnVJ3SdFQ7x6LJKz9kXZVCAeGRhjnxoiZKaChfoqHtWzZJQ1Vy3g2gxoen76o879j48oB",
  "key5": "mZ1cDY8rVFuDkE7PpTN4MxuBEXoVnhJPjjbnd2bwcvmWZtMaZmCByieE5GtoSvxNjCFDUGUtne7sFQnDVvRauTT",
  "key6": "WCQeWGHc4PVnqxaQg6TJSFqoq1La6Tvrr9d3RgT4c6Zgr8PkwV1amvJFyDXeoqhu7jfkB6chJpmbVXYrj4XHqPL",
  "key7": "47MPzeAnfekbSAVLvGp53QS1m1CtpqcYX3aLaKxyNNxufMDgdsCgf7uK6po9dMYibqnjmTNFnqCmypAgGENE9BFE",
  "key8": "825vp7WbHWwcwq8GvGXkFesXq6aE6ZFpoeSQ418scd8CAnrEc4mLBZknygzzkJUZeWKYzppUmkM5qexSZcu36zw",
  "key9": "KH43B8arquWjd1fCp7BLFp3rJa4qjQ7XqwkCiJsVYS3jrLv5PY12mxSK3pa9T4t8zYafRpKQaT5HS6DEntcF7kc",
  "key10": "3f38smdNRAnyJw1eakJRZgZNXTiuCRL8TJ3ZfNbySe1x3bdSYix7XGxSSwHn8SKGtMEFJFR6L5vTzQe2DYuJombY",
  "key11": "3bZd1PWAaZ1QwRYic1VSakNVyfw4jgR2xBS1KSdXFhdwjQk7L8b71HwjrHtHFUavhyjPSqGvjYZAzRSBzd7AwvET",
  "key12": "4s8aa6pJuh6wP1weAX6Dki2dbMesvjz65Rg3Ftpi4aEKPz6NUkKBdiQyUQ1bJWDDP2dnp2mxKEEbXc8m4cCcYnx1",
  "key13": "45WvAE9wE2LMsr4AGzADXC5K1WVT441EANqpcQtXc2dfXd8j8GJrkBRG5PZNP9crzm5CLzHoVjoZQpVYAUZGf85N",
  "key14": "3S6MSjDNGFqDNto6NcfsomTtyhXJmppBhAQoZsozmWTBjMGiTFd7biG1ruvDgvQrfVJkS3eqGJpaXezTjqvxCShR",
  "key15": "3DaR175hdEHZbTieASC8cza3BQHGNTccetrcqhDMJxpw8UcNNaMUvQdZknzTVwZMLTTndG6G3yEtWt3SYTd9Hwog",
  "key16": "5eDGQjUqedao72Den8sQ6fdoY7MQ1UuoUf2jCTgm1VLNc6Ct4cTq1HU8ynaNqXgfxdeNEPBRHmnZ2jD8zQZ3FEHA",
  "key17": "5m55Z5RhaUw3SPPBMi5hP22Rswsj12TkFop9Cct33fSLa3gSiPg8WwPm11mjidxBSfZEuhmBV6d7Y67e8rA69JV7",
  "key18": "3jM41XuA9NzMmVThfjC6MWK5GAPF46EgFB6wTEpSSFMNfc7LvbBCadnR3n5eVTMBtQ5VwpcWhTLPyJTGrH1z3r27",
  "key19": "3sCFE8NHTEvtzDxVMUjrf4doYbvkQ8MWx4oqzi7r6991S2HF2SWHWM28tTRanz3zTzNVJ6ufZ6bTDEB2TYhXmMN8",
  "key20": "4SsvRFRTnJ9dMoRqKzcdNYu1zMp2DjdsvQg2Pqrvf8PEMjf2HqTJpcf7JeJcyPmc3iPifREAmAe3W6EpsMKmXukm",
  "key21": "2zHbWtHyngvbKHdvbrYZqafWkBYr4QRrv7ZbwMcoiqoJkM7HEHvd73s1Je7PGZx9qo1HLYUnkRSZtXiaEbEgUEAG",
  "key22": "27T5jexi9nEu1tf1EA7EWmTYKuS6ospjGYeECQv3f5bFpofxbcA9giZ4ZsP28VRvYCiG1GnKVwJ32g7MNo6YwKvU",
  "key23": "2R9e9EDD9w5nNQ9JQyNpQUhnH44W27fjq7QEGQ3zwbTnuDe3khFGASaydHSzhRKSunECFyHVcdM2sjwqtf3zUCy5",
  "key24": "4WXbpYkNWAnogy5DvD3hZ9jfg9p23ZCX8sMfYij1LfTE7dYb3ZRtCjD8tfNKkBpiBhkgL3jGNTJ5MrSZM4ahSPf",
  "key25": "5hvV2efVuYH9zMnMkgesohMhxofiipJpy1pVv3HvTdoRvUkrkwUWc4X69jJ55pEX8dCKupTfBgkzb6Z2wb5QhAEd",
  "key26": "5HQ4iBdmuz818cU8mFDkoeqX3qa4geDVsL7SYLZvSFuB6fWBCS4CH9G9mnJM3MhhxWRJtgrjDidJXPs13WngDEn2",
  "key27": "5VHoFrbYzYQw38Dk3GNs7vrP889nwKC5Cww6UHtUziyQnAXrQCNwrtvGHyVDmz5nMYSwP4wCEqpRxiVZaRjX4iGb",
  "key28": "FWdhSunqVDKjsPwkxZMcGqnq2rqvQVbumRfDhAeBQjdSEazr89TLYymafxAXskqCf6jG7wwggnX6Y4iFZ32egDU",
  "key29": "3spA8d2Fa4t5yA7NeEmf186hTgNcPtM4fWtoHQyEwYhFJuNsswkFfFaBTqipWexrho2RNMqSUKs15mWr9RdkaopZ",
  "key30": "2jwmfyUNBhH7jcgHk3h34dhoQUaDsP6kJnMsMr3nwtSuvxHZNByvbLRMnSa1mTdY6ZWomHYM5KWoNw4uK4SFHUCo",
  "key31": "5vR339wJtnXnJSTJ7ZantCYv9oVNQ1VRZuUgSAheuzK1A3mX36xaEzHSGFxbWx3TKJhsTGMDYPJY5TMsg7Cj2ffY",
  "key32": "21na7mfTj3b1yTCjVMTnEmdthccHS3VHXbovpKfzhW1kvbYs76cfMYVPLZfG9yUHka87bYJSVb4TC6pE5Vjp9qMd",
  "key33": "5z9e7FV1GCX2Gp89SfRvdEY8WwhxVHnUckTptF2x3ehARLN4k1w3c6MuSd3dGYtC66DdtPSbEPfVU9mZ5QUq34ac",
  "key34": "of36kqeVLLhFeAjrDyvWj2Rk1YDWthmFG2fUH1duENPfQc8rNhq8unGpQBgmPNiEtGE5jxD3r64tkWzwm32bX9t",
  "key35": "4oHAN4WAt8wG7wz22QiVqqzfkHrpV6nQNKQdv1ANt7nKzWbkLuic5oJ4zb9ppJpPevrfocm4L8GazeNPHzMVvduw"
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

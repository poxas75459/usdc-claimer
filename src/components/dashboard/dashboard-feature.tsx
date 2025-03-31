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
    "3bEctLANCnvJVSzCNVU2f4b3Zrb2693ABYDUEwYjKkJsLwc8GTegFxm4pzkFaL6hWvCYabpyc28dUPk3GzhxXRGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bb2G2gPdecxo5mR1H3jZE6J9Xrpgx7qTbp9CtPnze7nfcHYbSQqapZ68dGvUAJmYxLd1gidrZkiy41xjX6CHQU6",
  "key1": "46SuC2SKNrfTfZPvPB7TKV5XcejHMwar7291eQMEbSG6FgdoDM7yJmRqU9BEi9Ja1ggMJHXXYdWYLZqneWmeRLnH",
  "key2": "25Kpz14tLvqdhFEDJYAQNCvDod5ney5H7H9CxREW7DviDqS6MDuuXQ5m3sdeAu73QsaeMobM6yPhmCj2xUPxPqH8",
  "key3": "cX9sFPZ9DEhBVg5ar2JLxYbUsQakkYqMhue6HtRyhQLknJyFZYkBnV824ZKvBY4GydHCF2xKFE4o8e3PTppwxkt",
  "key4": "5cwapCMNGDfo459vzacnyV23VJdj7NdDngCRorBj1ruXf5AGcBmwrLnfM7Xd7rPoSsx2p3RRunu5wGhyYrZ3QX6F",
  "key5": "f25zM3gEYgRH6R16tK9mbUZj2ZBf5umVB7EMy17WzHb6uxvqiWPe1EACvma4EiXr91L6uFxA2DMKBofPNRNS5Lv",
  "key6": "3VM8vPdoDWs9wsN9SxZ8tBcAvD2mWeRHto3f2kJZ5p3Hwez9WxD7WZMcRptLzLuPmfpNpkBhd9GziYbH3kYoTXq5",
  "key7": "u7T2yvk77pcC7dQmgMMGtUjWAKbugG59z8Hg3AwrHA5GX7Hy5VgqddaL9mHeW3JJ7TVyq3C9WXWrSvUkSnrnU2e",
  "key8": "3nYMTkMtaJDstpcgxyeB4bSnhSn93LBDqBCeSiJf5g48Djg2yNzmADpvfNGGjWtv9P9wFCQwstBA7oVBckdn4D3S",
  "key9": "3w9RtDvyF9dqTBUkca95EkpstvijUJ9iHdWP9E2UTGwvHXvUuV5TQP1uVnNDnBuvERAmkACuR3CXYoUrMemEhWzL",
  "key10": "3b7g89zLP6LSv64y9qEAaCgSamqAByLuLEy4tyxxfhtxgmoj3Ajs25gcy7ZTbQeBpYzumtrLCxqxkMktHndNnNEv",
  "key11": "cMxqaFTkRScmZBeSAZXPGD8UgDTkL6yNmBvBBpoENyRFUh6sfkwLmuz7wrh6AMD1dFUk4hXHtrfQy7ZnFHSWg1T",
  "key12": "qcGoTfkrBQTEtmSxz6aM7JLaTLEqPRdDP9usc2S9LwoFnEYaDjfKDVXtDgaZUaUWQJ71rZL6GXsodKKgkh7LP5k",
  "key13": "4VuMDKiY1W6mgjjLneyxkGPD2BhgQP1DuKs82EqKLQ6xupg98rnDuu4yWmicVELhAdWkufJtqJWMCd7shCRfSHWK",
  "key14": "65ZdQRk6vy6xHcHt152sCCmtrnGHQYrbLDbWYQVpqysoSQaimKE8HVzkGYYRwYUk1g8iS4L4jfEZLzqNyNL5duMN",
  "key15": "2VtRR7RaMVRkAY4VW2LL2KiB74dVdA1axbAGNkDzT3UzBVd7pfiLUNhg6XoemjRXtEYxzaky9CdXEyhMeqB4vxkD",
  "key16": "RTgSuERyCKR3p8Rv25J2DNmkyPue7HGy4qqfQm5TVNFwUumJsEUXERbY9gxJ8XeuXbDFKCay6hp2SDLrFE65XBz",
  "key17": "3qjUGsNeg7Cmgr8zoozaZjYThPmmg1oiHyWkb4dkaag61ZN5RQyXq5fU4Ue2nY7SFo2G3esZT2Si1UX6zkkVwSYJ",
  "key18": "SrEn1UHX65E4RrhwG5vGXr1mcmt63Ztc7xKevzpUPmXay29JUJ2NFk93D83JwfUTvzgj6q7GEwYfpoes7g94GWb",
  "key19": "4rqJXjqxWgFYNSDCrV6HVg6Tshk1a9DrQgErGiTgSAQJETxyorbHbWWfYkkR5xBqawmRggYv9Q2yp4uLQdaQXvfF",
  "key20": "depjd6qYnG2rBbCt7s2iixN3UVDGcATJZjJew3s8QqQ3uvkzDgWX5qv5EKk9RUgwbZGD8rmd1hKjNjUSR1oimeL",
  "key21": "TDAfZVaJ6NnMiCGsbpmP3YomEqPrxnusn2CDeDaP1evftK7zFxaJ5iZ8dqJRosKEnrAg6WZ5QjHX54qfvgQzNUK",
  "key22": "BdDdnu6S7bZz1h1MMZdpXyY6an9Nz4nsacS8cUB2a3xkJN5pcsKa2mkURbKbBaM6qCrFFJdC7qQnqyAC8xozphv",
  "key23": "3jkktVBtsyNhod2JcXQm1dUzuZGHZ4dNqCxYL62A2YTbT8vP1nKmiAtDa9xREvkquDMdoc4AvjvervkGcgf3ph3o",
  "key24": "3KLqhKhjVdNFhDHM8Jysicx16yE3DbtQYw6SBgw2Kj8PMwT6i2TRQQUzG2AiABXe8dhSdVgPtqLf1uGU7aNmmcn",
  "key25": "2EukLYfXTrk1oda6aSnZPcRqdQLgPy9WekQJVJadQrLaCz5vnXUiwboEqp6JH1Xs8DniXnF1TvhtPyxjpEU7DguY",
  "key26": "2b541hPPEgsUS5Gjhhe8N4zi57bWpXUb6oU2oTXJ7Nv7TKGBAVvsBSLa2kV7ye54XEFYa2CARZhs1HuqnFJSzahY",
  "key27": "3XEhbK36PWTkre3tMu94TPV1Bt7fZgfVgxdPxNMCXrL6UHePrNqD7sL8vexP7Wx4UmWJX8is9nSb2sYkuUSAUotK",
  "key28": "4T6NFSrBwYeHFJ2eeJQbEYKcured6jiP3QhueWb99Puq5TJcr8yiHaj8fHTZSCnXyomfDY2cgzXBKGhbwY1zvbeL",
  "key29": "49abH8K7ZHDiEqB4CPzKDk1JETMw7U44wkpgSTB3iWHzKtjMoyPVHK7ct5HsuuayQnyVsBgXAJz2Gri8D6cBJMn7",
  "key30": "33fxLEgxjrmhpPS2skRBUdh4c3wRijm3hBkYVrBw3KjRvZZ6tMEm3imDbMmtFxVPM3tvCYM9rQFhwheERYXq32UE",
  "key31": "2eJGWKoFZ4JVm7mdYusgBRMmbVGnnXtb8pH7w1rimhAvvabsD8r1W8Jq9y972fCbeDCP6shUNoQAkfpXj8LseYAc",
  "key32": "62jgUK1sjFiDmf18KePV87cwuWrQQeRc8X7vgaq18ijQ4bdxGSyY3qtbGehE6SjXg51WrDopvxVsWWd6ivoFWkxU",
  "key33": "jmWcFGGmvhdK1CYo1eaHbfbgbFEh55ta4q7WXgKvGBSFY76JLQhKjTynsjTsGJG6wBa9bKMkRAhj3H4hp8kfuHk",
  "key34": "4htJSdMCcNcaQrEEWWJfQyLba5a4LLhiSfiMp8zdYDzTVxov5PN7xhNmHN7ShaQwjgAGpFsNNzY8c9PwQM4WUdxk",
  "key35": "54HD21pAt52cLQGfVkB4EnKKSVkU3rZ3Y7G2xeJTtgkRDH94dpmLw6DJfHWDX2xYVceeibRri4RjxBv6A4N7CDob",
  "key36": "3VzHsrXvgC7uBn9JzTEbLgSUi8bQTr8HoRgF19hAwKvxZGnHEkc8xWG3VkJpejtEKQ71yeUvuYo1rMrJZi5swJAL",
  "key37": "4oN85phF9DEpbarNF8PqsV7Jh2VtTRiXeJGynMKRAFPC89VL7SUiF1rcaiwJR6kjt5xS5s5kCaR9KSq7DUHWiKsJ",
  "key38": "578d9MjQVWSnwWLWM1P2nAcCVR5M7G6hZMJxGbvwhNNSUymAvzCaC5n3BCR5w4UBXnGK5v6mXcj7v7FmLLGNzX23",
  "key39": "5zxQMvGzfGFLAs4S4iigub3ozJFgfCxo9LgmArmpSaDJAz8hvR2jpWwV5J83vXgRy6wWZxF9mfw3KuD9LkZwajWr",
  "key40": "2y18SBRVoDNBMwYkwQySEVxrEWg9TBsJqYVJqAD8QzXMZtdz1s3XSdQ13mnceLDAzUVE4BvMXBEQM4vfa5oQ38EA",
  "key41": "ziD4qugEFQXr9TiNeUnrbA191U8zrtjFMFZcH33TERf215rNM5vNeVUAgyFb4zKJjQvpS9MFwfji1Kgisuc58iw",
  "key42": "2BczdsCTL5U1oGJxj8bHt3yD3EkkfKFdXoPT7ZG6WFUqNqqPUHZCvdWmRu8piQw4cJummm6JQz7XfACUdkqUCEp1",
  "key43": "5iuLwRT9nen35czxdeSoG1DBWku5TNfh3ng7oe2njmfF565REMeH6TPkLKuokMftZEMNKFg8QpYPUCKbcj1NJmz1",
  "key44": "2xbm1Lt6VwenQEoyKSKUNyr8Vabye7A7ZGabpzUponx7xLwprPLGsfWWT478GuXNaYBGg9rtWqgsrZKwBnrKauvW",
  "key45": "4ggQqBWczc2eTCdxMr1yVnWFJHAFSfpXQVBG7iYG5uNcWsuRPX8u7GVwPYhF59uBwvPCwQHEmepCcgNsYuwHDE3o",
  "key46": "51GxKTgeDu5WwuGA2c2qtvNKRbuqgYZ3g8zJJRbs4hvDJsTDUZcs6f4cq4TTxaDpMLNApnJ2mQFMJ4K11a7ZqARS"
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

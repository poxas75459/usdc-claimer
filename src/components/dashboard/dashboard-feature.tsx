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
    "5inG58UKV9pJe6EzF2JSmSm6cocWK9z9iLbPoZ1TrKiFQCH9HAK6zTuoi2jyVr9UJCBdAVeKiEGJgGTJMS6FFoQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TJQmHskggquFbrQFXZee344cQDztSwQdnZSKmApktBQ7gA8tcE4U7PHWca9NPum7YiapNjrUUKmJZ3izLx3cA1U",
  "key1": "bWNUVgL6SxFCWLbkcUrbbB1DqdumaG4YDcHZC1tLRE8V3EPaZHX4Uf3yDb1iw2HygVZaTFdk9p16ezmS29rwDA6",
  "key2": "2t5BQcTRPGyTCtwtygwFsUR51b5kZip59boMUiYViKgf51tJAMpQhecJ9juFyEjg2xcaKMhSyStcDbMmpzk11C8q",
  "key3": "44xyij1SgdWaq3STfHtwWRWZhMEoUiTDvjgJHv8rzeQnmz4tNKgmvTo8eDWGaVZhgae4GHCuanFCzBWc8j5tyzbT",
  "key4": "GERPj6eWAph7gnJFsAZsfg2GYudDeGWgVt46YRgJyfcwfWz1GWuFiyyfRk67BFmFes52zbLWFhtVV9oyYi9Va2B",
  "key5": "2j7d3XMtPP4MPWND78eVJLj8vDW3uUWi2iVcCnu3PB5pyqcJkHrMLAnXxwSB18LQuZDm84er9ErUWMZCqgViDQUq",
  "key6": "mYfCZ2CvXb222dac3YxYvyNNigcSDJ48aEJBqr4RP5u4V9oBKCGT6Cv9BDWrbF34rkMiDZVjPZKbEyLs83EiStJ",
  "key7": "xJNmjZgG1bWPywZrXDXCqSd7nSfEtQVF8rAQh2cYQ7Ro4X54MsyevprvnNWFjQsCAa7DHo3juTEd6KUvy8fKdDD",
  "key8": "3SgwuhcpfojE8fxNzQPCc5UwpjSbxBQQFjqUr3QREhFTg9bAAsqkAkC9GTiHnPxQ5DLmaRQmvzP9LjtimSypmBoN",
  "key9": "5pXEokUeZQ9U2beM3XbV1vXASEnW6B14NZCrmRfDMTnx52hrFJgs5T8bjuS2Vimcr4DC4HUXrFT5rDKCZupYNsG9",
  "key10": "U69F4kLJCA3MhpUsCJDKnpeir1hYqvdduoV2s6L4VLLgWSVEBBnmLh6dbt2S7F2jBCWjVWrnd8KgMmWvQBCGgZN",
  "key11": "3oH5saJpdbwPwVCBcXd8oJmjefcU8sqxda9vX5EXUvX7gNH6KoZkP1NcqqLi6C6GBjcQhVW8xxqSH9pepDUjgQp5",
  "key12": "62jfSNXFQ2fmRiEuzTHdDDxdurtnH4sW3btJXPrRSLfivde5YMgmLjqB3V7fRiqfcyHyBiAtz3jZv4GXuVS3gwaW",
  "key13": "5TMZZo7nieMvTLrF4npCFpsDAu9eBXbXSjEz4qznUsQSbAYG9mX6qzZanf6659fwcxd24VXyHT9xuGjkb2azHsLD",
  "key14": "22uXfmoWks9tq9FsaZzKxD7PrPBJBLDxzqkZyGEVQWjk9de1wUd66Bjt6dCSsT3yYHKG8m4uv6axbLt1rUAXX2TD",
  "key15": "2iTt6Xh5BU9iLD6UzxtVHi2is2vNfzh6JyJ6S7vMvqNGQJR3J839XUNYuMFRScrhZQEb1TKzZ1fX1bNmAbEBagc3",
  "key16": "2JoSpVy7rZJrRA8ngV9tb5h7ehbw1WgYqEZZ7CrNwzLqLwUVQ7a5RjEvrH8Mnm5Ku5JEPMz5Nv4LBM3n64L8jUGA",
  "key17": "5AKDnTvHq2XHnHetC1kuWrmkvhT9QqH1Zx1kEDk3m1n5axx4SXuBG8XruVeAWVb2hHmb7NC3ffNSkQ1CRJ8wzedy",
  "key18": "2HnR48K4sMFpuL9KEaZA3gBmRZyN9pjLhaLdEKxpL8zV7jUqqMVYTF7n8vGvDTjnKDZFDRLDHeKoFxfWNyghaDn1",
  "key19": "3aWVs1iDy8sZFxrENGPZ5EHyodPJwuAvbsirp5x8nqDnXGnB11QwXuvnAtsYKGaEFuWzvqSLXE4oEcEswAmtwiLG",
  "key20": "2r4746fFk1wSoYDkW4cXDdjcJyJzv8xVWBknEUtn68GiyjAA9iNPaFQbv7TwSERF4UqwpzT1skbHKYnBZt1zUFWG",
  "key21": "3kCxULVRomryoRYSnSQqVLCMtRiz9rUydxuw6AETB1WsDzmcP9NrHTMWzeLW2xrX5Mhe5i72EdXKvkm8yes8hXhc",
  "key22": "3prYMSZn6XdSvoBmoujjh9Mynw4xQPm48yng5g8qLTQtrLYXw3QctWFxWEaHcgZpVqvpZBJ5ZLXK8iPjEeeGAbpB",
  "key23": "4K1G7PfFGJua5inq3CQJtms8acF598i6ws6LrNzfTrpxHfxKQmySEXEHV7ymbCAunajMLevAHZv3trUXDqd2inpP",
  "key24": "2m9Dh5nUe41HtRHSC1VzkbEuieEAHnGdTARw2hNdkwgv9vHURcqJZVhHtwXZqQkGjVp41s8EuegjxK9iFX46TzNq",
  "key25": "3zvuNUid4vf9AUYd8Ep2zJtx4SG79gX6wAsm3fR7CMHRLFhewQzQTdcdnD67F45PiNL8vSKLvwpQBeD5za3coqKM",
  "key26": "5dQNuLHWqpzQ3hgRpjXSNS8qQAKQX6JjCSKpeshpRt4Wxxj3Zu2itPMZiefyMBkzKt7w7NdVV4NoT9KpZxz9u9kD",
  "key27": "2FNN1L7RWyEG8qGQPki7kk6HXRJ3YgCPuNThM3Tq6QVDf1n2wwzufVAux3H52rbxv2Dhw5RhuEWvuEjrRu7y48Ks",
  "key28": "5SKpiLmXP9CvLixs9tcv2pBsD3XggLVMME6RxWNKMfNPJtst3zkn9gMe3tkVEm7RAyJDJNhVV4s4goN8LyRvqN4k",
  "key29": "5gLTfzqT7Aac7CimpvJfZZqaAVNMuqC8ivTbjueYzD3Uir9tL8xwQQo8uock4Q2vuKDtsQKqbJzxUgk9zKiurNo8",
  "key30": "343F9uzSinfs6iqmcjWgqspmnBN8bTKK51JLmfMU4LqgRz5fL6AnB1NrXffSogiZP9QJtCQfvL5gxWXne7Du88UZ",
  "key31": "23szwpQ3WBBWm4KdQGZaDe2zFpvTMBiZdV3GXAxesVhwawdyZWdw58h4TJofrG6TwfLuraU9NRawXCQ4AbvU18di",
  "key32": "4zYKM5csQgGafJcnvWonecYtH8R65Bf2YKfTV6HJ4suZ7nANjxZuJvdYVFUYTEemurbZ8MPrFueNbf2kqyemjwS8",
  "key33": "5ghuhSb1EZVSQTtYuW5t2T6LwECEyjCXbCeWWASU1kvF1p3XydQcdfKQ1aUkHv5d1923mDzKFQFHsPFgYxnXD41x",
  "key34": "5aCvDR4CMCTSrtsG7UXJE1LEX3pRS1bNV9zGrqw5bG79eo13tsREYCYTWZoxMesrAeMwXCWrx3G5T7GUQtyA4oSc"
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

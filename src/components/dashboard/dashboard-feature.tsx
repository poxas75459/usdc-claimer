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
    "bAsCDLchTpNCPSr2VZ6QL1VGAEaXn3YXeEtGNbMFTgWgRhxadFJup8fQMM52SJYayv3CPzWtTqsBuJqUqY6EAuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDdGX63m9LxMaPqZ5AWvytMktuwidsvJziZNziRr7eyppVRoQiNUWGQFZCh7M6uS8pBiqVgvo6um4CDnBMZWVhD",
  "key1": "5yPSk9aBYRhKW4tNPKiWvooJfqLDXyNA9wW5F84kTc2gVZNZhpg7LTigYF7CqhrCd2NCJ1kPd22UmmSNeUvemPd4",
  "key2": "56e61mUAqXX3w3bcHY3FtfmQDe6JehNmAHeVQF9GXNXD5QzfqvnB3tcdifRKntEAg1nLvbW3YQHy7Ustq82bUiXs",
  "key3": "4HaDRcZYh4MgkPjyRUt9NNjb1RUABSZBzaRMz13eDzfqzVyBqQ8JuP3UBp4cLtkYvkwxeyYqKEDnNg93m1Kanb28",
  "key4": "NmTzZwUbdXmS4AWoKsCBZV4xK9t11q13gduXbHN7p2RZ9ZdwnfX2EfR6wgfZMNM2hYgmzayCqKjnYPTKH2pwfST",
  "key5": "4d4MgQo2YW9gtxkXb7HhDyb5uqGNQ4huqRnzAF5orefg2wPdbarp8x5ADpmS7ejzEAQLNdRmLxegzFTbLQ83QcKr",
  "key6": "2T1f2ERdkmYAsvoip8iFDDrtozS9o1bgqq29nEi3oFMfFsUYUkJvLzZ7xdFSfBP81DPLUvBx4PM3tffmhi7L3Rnh",
  "key7": "5iGprXVP1QXTrovrKM9k2hUahdcKYJ8fHEir7RymJFoDd6pbHMvj6r4dwMxzsKoz4SGCCaJSuLVjiMETmKwfSLXm",
  "key8": "36CAM7v2cNDESr12aZjovuXZYkWBECT8x1qrjxrSRsBohtt4SbZVQRownwXrGTgTDoJRA3cCQ8vNGwXyGQsJq9o2",
  "key9": "5U3qnGivPw1pgg77RFGXeo4w74HC2cabuHbZ5wbBxvA89qgu6PzeKMZB2UoP5536q41E4P2apXZfHsUFsX9vVDAA",
  "key10": "2srbr7eSm1gRpjkSERfCBLrNuzf72zhdZD4VZoeGsMQVxAYPMxygF6jynZbW2AaWko3riGgk2ERiB9v9U91Qecyu",
  "key11": "4NCx1yQgSVxxnYb5CZNPBRRs9s66meLWc9jB5Qr8jw96jnA47mjNXEiTNxQnJZJWbxAPZyryn7sR8b98sbsYo7uc",
  "key12": "3WSDW7NbtTEmWN2z7k4UAbsuzZbSCxfWCtXhXSissA6YAtEmKdCApwWFzvyrufD2NokEEWNb8qscBVk6zxdm7aVc",
  "key13": "3dpfkxKVi8xjuEKnMvWtBNYYdDSRvc1Z5C1UNGjenAtjwVM1DWKLzxr2r3t6gbTygtZP6ZuT6aVE4y2manD7t7qM",
  "key14": "VgHh1Z13jgWmjFF8i2RNhfshejTwaekHRo95vrmcHNG4bhGhD49xojHj3EkGenm3An6J9toF5MJoepoGstXT7tu",
  "key15": "2qY2THhB4qQ2yKkT3EUYXzurTHmQVzZD6iThp22MLfhAmiABqy85qqDfLJY3wAqPyEkK64sWUjZybuJXSyohv1rK",
  "key16": "4Xt7wYkcG91Wy8egPJENpukKux31dzci325qkiSznYxzR8EgWGKZXu9c6CQzzv3uvzWRKR2XDofWUGKTsvVEizKP",
  "key17": "44K6HWHR6ri2v1NfGW1EhSUiEQfc271wgBZAU1S49kepQqheY8yy1k4F9vTAX8yn3jbfZE1gVExh6ejPxgS3MPah",
  "key18": "5JSJABaFHHUrF4kfHob1cQGjP12TN9gVJdJhmMVZytJCyam3zPZN4ZDarv1mYLJxagvyotXcfG66XFGAdR2Ugh8P",
  "key19": "2arfy8MNEYjp8YGmapDv3VCh2RbuXQYfZNVcrUodTkrDWP5bYVPPz32yMriU3mgFmAkX1ZKNGxV4B45ZxH5wZ3ry",
  "key20": "2XNrZfDt4JPpwCS1Yrz5dQqLGnmvrTu1DDxQBCpEdqDFx8WLzSug3h94VccMTnrzhrPM3jXhSw3S1XQvogRCB6jA",
  "key21": "7ML5U9WtdvFppg71JwA6Hk6HG8HKBnckXaBw2Tn2JDMwpP9rGGq863YGjmNEmwSyfFjw3xjbGBc1pKim9HsbRYP",
  "key22": "52cvNz26S9ALzF16JZ9GosNua7e3W1SR8W8hAcratTnqebKS3mMQnzMXFTt5Vi6UpYpJ8HVX4FYQyw4PQJyvF6po",
  "key23": "iQteZDSg79AaKB2fCVjE6QmAEqUuEkADnN29CHRu6V46byrdRLrT1UN8rpjDaP3qETwXBz1WRmikDU4vxaGFLKq",
  "key24": "4yjGqcAjMvjpePtpWzTPapEZv5P561r147ABjqkPTyv1eQVAFrFwrUb4VTtuPFpwMYkec7LxVhy774iLMyTJMAZB"
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

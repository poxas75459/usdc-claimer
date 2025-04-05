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
    "Yg36XCMJuUrkjbsGm7dhZqGibuyyF8GxHV8tVVSHgXAAjHBkmJ5tu2fjXXm5yiJXs6sWZ6g57FVf29sfmKTqtVZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3EDiKQsbjrWpkT8b155YzvEi7HMscFbbuz2e2xJfXhXQ7EJVD2896sFxQUbUeYRHhqvhf7XNpeE2XwruG1MPiX",
  "key1": "4L2oZwQvpQZt3yonMWfyFF4Z5zdkmjNaNgR5vPUhvwcU1HUV9tm1jGmFoNkfbFZSr2xgBbtmFWcmf2Tnfx2zTpYP",
  "key2": "5wrZdR2FNp31BXcrYRtTGfr4BEfQ1bEqL7fB61ydhujum85qhWEKPmfPX6rDHoCqny3Q6yumiVoPYsHzi89LFMco",
  "key3": "5WoAYDPGJ7FgWerxMegPtKmKq3JxFssUPqefzTpqEQnmtVf6oTbUPt1PvvT7yGGDAHAn28woRRLgYJkeA96Ef5Ge",
  "key4": "3tU6HS4RGt9UvNJ9hxoYGRKsPxNnZuqSwcWY6H44GXA3W5w4zHjYGgWvThtrnsoJSwfHAVgwh4a7xb9USHGTxP7F",
  "key5": "2D9BvTxPnoKacTiVmtykXTGAF3ybDKEFPiw6MWrWXdm2n9DMRHo683kEUcEQ1fD5gqgx9sKSdHTAfAqyukiyovrh",
  "key6": "4eijScrTJ78Y5yLthaprFLVs5yQdTBVaxz9dVBscpg3u6JJzQ2diWpxGr3DYuD71bnH8M5BSaa77WhQRg718Sqf7",
  "key7": "5L3r3QBfZpciixHxfdUcBiogtVAU1zRaQuraZjVEVsuqbtS19jNku5QHE4jV2z8wznrpkddb2Kr6Jh57xzg1TxM1",
  "key8": "2rL6yFyzZUrE196LEDkgsFSDKQh8xvSXdwknPZpV1qCpVFVMTi6nKdZ3sefan3uD1MWGo5iiARVaAXJDRMwdHvrr",
  "key9": "3Cyj3zMdo91VALBZWrXjvTjPjaWKWowBNBodaF1mtWEMq5wWgKa6TcT5trWP67sUetfTUHRphdJth62VWkr5fB7y",
  "key10": "5wK6BvVzytMoGJurye8V7mET4FzwaQ8sfdnKKZyNF3bJsEcBSg9d85rftCd1senfwEim4yZn8LGC52e9GfP2fyvm",
  "key11": "4HVKbvQLRSa9ihcjLSDvee41WAEGLS4pFCEkfvPTqvmrUBN5Ebxb6pQmqBVbF18TZHe33YWuFii4558BTJ3NNLvj",
  "key12": "4FF1SJD5vEW19mPEQcC9SWtTzDYTPxMepUSeFwAceXGTTQ1hAKnx1CGJnxPr79d43UAMJM4BQYJ8xjmSMndbxFnR",
  "key13": "3TQdbq5wj6R5fKfobN1q3PiBNr4ZLgfQpBeUQAYQbekmeZztHSEQQLyRccDzuw6kfn4argcvQRsoD3U1wEQaR71m",
  "key14": "2rPLcwuZ1tCWjfnw9wC6MChofyiqpZ7RDL6SgzGQZsPWREtCV2YGPdgX7a7SZGm4MJNdAa8X5ABS5cX2Ue2sZT6t",
  "key15": "2NYK3nUtGfP8xCCK1A7KmEHmTPZQRNKC2bcwUt7xewV9cJB65XuhHY4McEkLFZ4FwFPAmSAUq7sAkr9snRsQEB8e",
  "key16": "TDsigqmcdmHX1kSovnL9yx43npcLv66YfJ9x1kXgMEdZuMsJs1X9KAa2vhZD3aGze8vZasoKudXdh7ZQ4LuLM8r",
  "key17": "3SQDrHFJay6P6XA3SdM6C89xatFzMv9yr8tyt4hdw1sovifqnGjM453gRcG4Hc7Ruh41MqjbvY5uFNHm3ZmREnda",
  "key18": "4f8Hb8ku7fNygjkCGeVV3SKkeGBAAVpJxUzoND5tekszLLyiufr59x5G498vrn2jS3SdfLvTh38fAaGejYRPb1hn",
  "key19": "4qnC4PWPHauN955xEo9qwWUAUnCjmXFRqqW4HWwEHC5nc3Yx2em2dWbUFwo5GWTVB5zcyjRoGks8FRMiQTuQmhGD",
  "key20": "3Z7WK6sQFLkcRr8nb7b7vx6r9zKNJwTqLbnM1ffNQFPSchSjVBzHLLwSLdUSkmowMQoCv6n6Xqayuh1xEobeSK1a",
  "key21": "3yyMnownrZBpacL54qS8TWJB7rCj2eGmBcp7m8bUtWQ9oJnD6k7Go82s2CjMtytWJvAnJUg9PSCWoTLZyGtDNzRB",
  "key22": "2RqqqiUJ1MA1UTeo5JKomZgpAnTRpAXSNG9BDZa7f5kcNUEYmwAZePVFGW9nTkykAenLpkBdAssvLo8na34vjnUS",
  "key23": "641otG2NhqPCEH9dwTPLx7z5suzEFAt41PXggBUGdsDZzuxAMqfUFfF6bqnwNjF6fPbyVEzX9EVV5ZAssmFprUHh",
  "key24": "3R5Yf4FxCfdHhtDcAU14pErQESrCNFADQBRDQ8xkRbFdoee2HazMGmQYJVCzctWwduE17CjtShZDhaR4JnQ7VDKy"
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

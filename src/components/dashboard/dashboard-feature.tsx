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
    "3G7yGWjQKDDi5tifNrECN5MTiEjh7nupSpnuoo4TCTkBcnQWjX2UdUyyUrdHisYBedUqhAABXJ7GZnKAr2expjX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61HKVYsf73NsuTkCbiVWF4xkQzrPvfed1NJ4r2VHDZHPSLAg4564QRcFybmwxg3AnPTA5NaEmpLZ439gJmFHtDTi",
  "key1": "24tJJaZCfcskxjPCaZooXj6azK3FKcjM6Td1Nyr8DXaNsVwY1gznu51E1W2rHy1G4DtjwsSGq8D1PQWoxqA7qwt7",
  "key2": "63MK4zXZ6tjNfzvHBNna3MMo2zJY9eKLDeqb1hiobBuwrKmCnuW3KBrss1KqaSnaKTRunAWYQ2djue3GCnmyKYe3",
  "key3": "2bDGgKyKNoTNRT5tF1WZcjp5GmQ7zEA1DuefdDV2QkCa9D8BP9Qh4TZJEXUB83QvxF8BFHkJ4NaL3ri7fAVsHaHF",
  "key4": "5MLuFLNQ4ehsZv5PqRe9ipkVHRCvyr6uambUD2FwymQx9iXRHR3EwfF85JsxiuGmGVKUZHZ4djEvu2FzYpf8LykF",
  "key5": "2dxXrs8eQ35hnZ8xUrEJjbdbszeJT1DuRCqeZnih22KfKTGnSmJTuUrt2phjUcUo63RmY7kfePb3FPKJKGDvrTVv",
  "key6": "3dw3ALgHLU8RDSGEDstLWDRJVx3UXXGVCGWh9aysxDWSgBCEmepn15yAjadsM1PwJ3Pkg5QqwExagdttzjCRXLYi",
  "key7": "351S8c5FFQerwjDgs3N7AiAfTijLKTJZJGwmthwhMXsKcEMi6aBCen68Ms7gCUQ9LqdQf9TR5WEP7jGAg2s81YtV",
  "key8": "4z5EohGDLmhMSv3LNDncuCgXYCcdM39SGRjKD7sMWzj8bEvoe9hHGnNGCdKCxhqUjeBZ57tYcVy5u2w8pN7cd9G3",
  "key9": "5vJRLkzRAcVCpKntnsHX4JUnARoX2GfjiLnMBwhx3sVg7ANL42fJEBuAgYyxW1b6AVbXKRaEVetCecjRWvXDkmGK",
  "key10": "5iGBwVJaiTkp6P3hqfFhTkhKFeLxaZsX3xxKPnrf6KeTJQKjC9Q4EJMAAmp6sNGuax61Z1yHqxBxMJ7HPmUWDJC7",
  "key11": "5P31A5NkJYHj1rddjYUEFLFDcyeisX8V8dBWkvbp7YBqqaTozVrExDL9H2LPT8C1pxrnu1wpiV1G4x8tFYji3KY2",
  "key12": "2zKFYG5i4zReHB3ogrBFvpEQaDJunk3b1A8XVFcqZZ4c6U3QMB89QcMiTh4kYHmuRp9pmprkDy6v42bnMgyTCcuR",
  "key13": "6336Xw3wbQG8cURL6Wnopyu4gqrYcxC2EymTTHC8ZH4bQJsTG6xqL4LuhNR3rhZZ5jX6kWvBYaysJj8d6Uozm5sh",
  "key14": "41g4QEvJBNmTUcv3HYSMKKWcmwQdWQqAgrvQgAEvLUrPyLUJ3tvUiCEh5Bd4rPQcYE2DC2QcBe2FCgQdxKZ6yaVF",
  "key15": "4MvGa4KFYRN59zXsQugmW2yQodkv1Q9rgjvbPyfhgox5EiqR77nQHS85iJdDJ8fQpKYAtmMjNCtRLc5ZUo4WEnXk",
  "key16": "2ghCVEr4QEFovzn2c9vofZjWARc3nDCoQy3sJA7cnCLygnrLnBNPfAB4TgMeSP5kMkzSqHEbMByDRVaGXZ9rtu3J",
  "key17": "4A1ntQgr6QgtPXofGVcTMnbRjHzyPgYMb9Bv8KDbMUhxxNZnJjb2SWjH9tNy1qDvRZ4oyB5x4Rc4nCkW9ozEdKsz",
  "key18": "5X2nJxkK1dMJBRDbwpewd35FMbVWvNtmuuge9XHocNHojJyNTJ94zymPymN9WLW7Bj1YSnsmhy6h3RQG5Y3HeBce",
  "key19": "5daZar59FV8pZ3rT9yKak4z81ppCEzc46G1JePsYR8Lo3TyFcJV19cFTsG7WSsb6zZbEDuSBGVPXq8R5YxeYezT5",
  "key20": "28diNmKBY9XXF2sZN5U76vAgv1KAqoyp4hKP1mL932oDLuNQ6wA8VkkDNr97cU4HEzYi4UQLsjDFM7gxegoXyDeC",
  "key21": "31vm4ceizhpSpguKbd6mG2WkSndtgnpjsNgemigSBadJp7AwEhrxUcGZfWZV93o9S9Fjydtv4A8Y1cQsRSkPgzrY",
  "key22": "54EKh1iXHVQu5GMnxV4rwXw67akuB3uaPdVTWtP1SpaFzz26x89u2MjXwTcszubGhfTsZDbsL7FSRtNU2SN1hkg4",
  "key23": "1sd42SpASBq6R3Aq2QMYBdzHV7vaF4kxotwHacw1kJw7eacAfiqvX6PvUJUonueqR3FECgvSugGHZFPGkgiB4w7",
  "key24": "5rXShAncNHsacQH6oSSFfumdwpWuTqvhZcbQEmsZUtaNCJp7Ds9SENmborRyfXaP2YaTdwJTHaJSqHqnTMUdaEnk",
  "key25": "3coANR5n2GPjg4HCraXMK9mir7LQvorCdz2juoeJyVzSukaQjdp2B1n7ahm3WLquRkKePBmDaqfP4VTooe8Xjw3L",
  "key26": "2HgwpmwK1gHD5R3ibQbjwpCm7cWnXzNsrWs9gnvfUMzwXfD44LHkCup1We72p1KtSNuQgqjgZgS8HZtdnGrEWW4M",
  "key27": "4jSDxoPbShws1VsamMnji6ct2o3f8UNVuWMMK394VKd8CVu1DC8ZyyWB8tLJWqyR4hDisbsigVCSLdcomzK2fCvF"
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

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
    "5jG5W3eY9mMZDqBMK61rmirbCWEkXtqPfYz3Z6kQGRA7SkAB6jMCXvniPG1Xf2jVboEmULfxs5zcF3EYdSs15Dm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D2y6Ek3jbsYXyPo1rSWvZN6jDvDsbjtbaBsDq7wwWnmuQgC78ezUahsUbWAWXseMVavp61cukZPPspXDeZmz8aA",
  "key1": "2Hy7j68Bhd4CzCCCaUFB5QN86rPkvvLGbf8xSbCWs2NoKEJXwSaMSt6p7WrbxPFNn7E5hsZUUvEPky8FxJnu83hH",
  "key2": "4vEwmtVG4GX8PaLbP5LDZVnCBzMkkxqAPa85tFZDFCN1tfoZWaBYU5fFVqNqymshXzXiNtdNzDSRj6HA4VE7cG5v",
  "key3": "5m1ht8qxgvcCpVUjtCxuj4f2TRQEiJ4kdprbx8A2A3ZVjba6iGgnqCiQLgLoz1RooC3wCPEVxCoV2NjCjBCtmPgr",
  "key4": "V1q46mZUAbMKLqPp7FBnfvFP3Cu2Yaf9kg1ZZazmV9UDf4xQu1J6cakY27LRGs2DtR7kjFTJ1Ez55pzeMo8Uofm",
  "key5": "4YSFLnVa7FYGgN5xs5MPMc2gHqGcNTq9wQXNdf49gsvsrFpJHpC5ry3EdvytSW4atdBbNgaktDi25s2fnsBAwpHm",
  "key6": "2FsNRhQ4AWB56L3vZN85iFUFY36SeBRmoNN5eB8QuuyaFSWLvKMMUj3R4iL3j6nXPgbNsLaBCAieD9iCvcdUwZcw",
  "key7": "2FkTh1HN6Q4WCRe6KsxKsf4jGmhouy7FR9EMhUBfji6Xe8QCW1qGS2P59wnnJsGa1Kk6SjDySXC92XLJ6a4AKHEz",
  "key8": "5db9sRgmEaH5C8phMsWguoQbxs5zgqG7GG4KM6cSyjzsUKVKwByiQLNixNnT63cR9rmJPKAwGYUfAvYxiALA61Pp",
  "key9": "yoxNjSpjG2YmgikozznCpfpFqxCJaHztyAmpN7vFGtoY498cx9KfDr1fFgKWe4Yhbf5jHQdq6Hn1RPX74xQMLkf",
  "key10": "2Uq8jdnXHNrfdNQPSo8fB2nMrAw1itMX4hU2qBc5KwxhgEL4hApfF6rK4pUowDUs8pNrcKmfrK3RkiWKEqNggMaT",
  "key11": "Rgcy1K5qJcTH5gNL5hKbRdTdMdDKB4BSjHJ2avyjYQUx17nfds75cp7LC4BMC69pxfVMDUQ2nojr6hXwUj9SGW8",
  "key12": "4LxiQFmRhb5exhg6aAr78GgA31m2juifWCtCpnXv4zZ5T2vDLk4MCcRC4MkXvZMM3yu8V4kj28da86tB1kH1kGBR",
  "key13": "2PiY4vZiaBHvKv44hmtbX8KbVA7yu5zviYyjfhsrx6N63eSdh37cVwg2jKpZ4pxsvxQ3345qhv6WTNQiDnD4jpsg",
  "key14": "WShFAZ3T8sdF8LC756dsBogtDHKzoyPssaFRrfXfLd3pbbewmDX2tcq4oxm3HAbrgAUieGVJUFLz3LEUdX7q6gL",
  "key15": "3VmPLD2CLtW6D25SKzMwDqGSaJ8ZbWbYXtx2BmJSV281xuCfLp26qUPzmUAHgkJCzJ3AtDa29u28P695EYAphmUS",
  "key16": "4YN1XJ71xBj2CpidRzCkw7dEcZC61NnFy8KLEjJesj98c2BUZNfXLbB2x6gigXJWmy4vxp27AosAF9cS3UDrWFKQ",
  "key17": "4BNigrDb2JCuHnawQMefkckJiGvSG9Ascpm6B3WnGbyq3miTx7MpRxxsFGSYF4MfUkLEdK4dgByxkTBbEpBMvgEh",
  "key18": "2H3YFZJXpthHuUEQZYeB1KWSJYmCEajQdh5gjB7UkvcicNdfiJorGMAntH6cskfpY6SkU4eo4J9hiUcUURQ4nZrf",
  "key19": "ZJcSTFvVtyUhZg2qkAn3VmnTrQCz8BmFpVv6BNdPSrsM1MvkDGUtyrWAueGfR2eS6RMkARdiE46JWYznxXPqatx",
  "key20": "2X7FcsFUDzw2JLGQgcQEFAbEKq8caajTjZCKDbFFqoq4JevbJk8g5VfQwnHmGgoUzRQ69G11yxJQFmv6rQVxBoHV",
  "key21": "2t6mB3kEVQVg6JtYustsabVwM2LzVdeGsR8NPC9D9aG3PavNRrMtRxhZ9fDLd3LaftRNj7pPTgSe5oEXUbSaM7Vo",
  "key22": "KkVfayEdxqKGGpmorTNFcBKobzd9dcDxivYV5JgnrfNqd5VZ9rxvZuypcUXJtiSAkjVoLZbtPA6UHGGeAkttdub",
  "key23": "3xThDUpkDJ8CHhyPBEEYkqTU57aG44ndRAfktnv5BAYsY6z28EfESYDWD22VBSctpzUGFvE77VZY9CrhwLcKxRKu",
  "key24": "28VLGuAJoP1CfZ5Po6GFJSo3asNdAZtkBLeFkNrUKshfPkVjaFbmAhAeiYoLm92wDGcFkUSEkdZXixeTAW3JpJLG",
  "key25": "4tti6gaeSVQjeciqgnZiv7vwoHD1qQhHscbXQAcHd7KQnxfcioaxcGkBEpxhMezVLsSQ6nSGocEqTx4CGBmxugf2",
  "key26": "SKsmHCMDLGbGVwiHvC81zWHymGMFjimkDPhnEdtA1ChZr5jCijKTazPhX6t1SMRaFXXUWvoHorXcdD3KKUPKW8Y",
  "key27": "osEheksdmYvWwEgzRAuhny4oq2mTbRWJYsHEXf4ZRcvqx6nY3tqSQnihcithJ8j3ddrfZiq9GqoBtoSA7a7eqqy",
  "key28": "3RvCVy3acXQTmF1bJawkeNpmekWeCYkW81s2p5ZVXgMmuEnay5eHUHRUccTpYEfWFt6aPU8wXCsYqF2dXm5PWTjf",
  "key29": "51HYaapYVXbgQ79XkQ7jsvq37g6RMbgiTt1qWpUu48nJav5D7zKDK7N8NAzvrvAynjWTMJRZN83soaHT47tLTFiw",
  "key30": "EuTp6pBVeugva1qNuMh14g3193ToC2FNcFJCNCcJ8y6dtmWQ7jTHwvaZiyJRLiyUhAy2Fn6CrHJ43TBGZVzEVWA"
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

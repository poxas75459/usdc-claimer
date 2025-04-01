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
    "2jGoWfmUMh4yJ3nsP8THRwTxANh1AuuNu4Zs5mgJ9Bt7zxnv9KjGYVwZSmuf85X6Hh6C4VHJYYcrom4Tj4ZYhnUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8puGQR68VW2mGLAdgEsWPrcNcbumPiRHMsmjZBwmoASCoZG8scpe1enoP2bNsxuoa7TJisuRZqVgG6CfPgQv94",
  "key1": "4HYcwBebd1vVbZAVMANn33n9scoMEfKXS3qZBDdz4XqppXpEE9xSbX7F1SHCZn8G8EkDyLeokwGXcUrK6v58P1ZY",
  "key2": "361xubNfmSgjqWVTZRXS4wxy2g1CYUKo7532jYyg2LPj5kNMCrnV2nggws7rkjqM7BUfmWgsKXgBH4jV1xCjxYgg",
  "key3": "5vy79HhQoWfTm5Ym7FgRxvEFHB8MHGCH6oqqiRVoQqLVtBbnWREUCngxMrrhSx75LKjF1uJwghbFp4xPHtiosFnu",
  "key4": "4kZar2kuykyTv3VkP8GbiixjUhaqmZ4sbXFKLbEnmddShG2DqFk1RhQe8inZV4DjfWHBzeNqvPPQTELoVQfKR4FC",
  "key5": "5yBznkTsSCoSNfnFFa1GRQy1roJL5issVno8vyM2MGtRFx4JYRzV1bDH8VdrrkrH2q9zZFc9d9QVTfDxGsV84LeR",
  "key6": "49UaLQroU9CoSwsmgBQ3p7xDM2tc8xJnbjNBdFsA4NUxoktCWJN7XVNqUvonDjYhoG7GPyHsDCmR74TWjcEh9FSL",
  "key7": "iW1akepRkwPXYWNWbBQwkCU6zNHNHgzCYzBABgrLw3QwiL2B4Y6tey29nyEJF13qo8umM3fuTzK4XNxJdhzGffe",
  "key8": "5u4N8mXFNv6YCrqNiTDT1HgDnzJfCNqFLTaijQU4AoUedBpAMjK54xvxuzn3BZmdNz462D4KitLyEvdSBHGmE6jk",
  "key9": "45r6QiACVzGBaqj18CRpsf17iVFafvLCdnwvXRPT9mtEMcQMpB7A83iD9AwRAtrAe91pTTdLe1S9EZgH4NdfhYN7",
  "key10": "ZqiTuLq29dkJSDHHTbYd7mX4ij2Nq6EGXsf5GgKAZNvESKjYHErS32v5yF5SEg1asH4yk7tVWy2gGmTo4Jmk7wx",
  "key11": "31fe86AZyMU18N6Spbp5ZGK5biqGLCabzthCZ747drvQAVs4tcfAjA5tVvottsENrJkvKJWwfYr8RvLn58whFPdp",
  "key12": "2MVVwn1JQ7w76dQ54X29Hbm7xb2q6yQAtga8LswP1ZQ2YGDk4rB6mj397SGH9eaM4ksqZLLCukvwCLkyfn6E6WUx",
  "key13": "3Fixw83G5MWB9qRCNLPpZesJmirduo97SfKbYxB5rSdU2QT7cnHhGmSb9Tni2iQi3SHFxxu9okARKjGCpCReC7wZ",
  "key14": "43BAbiZ5kXZNikyrCu6rjSbA9nU78PUv8zr9cr9ht1hSRr42U9vSTFHEm8azuj1cUEs3fRqvFuKXnB8DY1A41Di7",
  "key15": "3v914yAGSaZWjdpErsKzWSqpdsWz5K7o487vUhdRajaW7YpomtVDfgLG9fHCgyGuTjCF9ziThnytEHfWHg8PN9Ww",
  "key16": "5ZoRrM9pvX1yocJYDFB1MNzhNaGmsLperk739mGjJZksQsNAPpJbnXa2QdRQ8opjT1fFKiJEsdbykmHAkHsZiJWg",
  "key17": "nWuTKp2DRmSRDJnvbFxqxFT3UcCe1mxBu7QBpgjn4fxUUHGQvScQoXh6A9F89LvWEPQ5wqauNXiG6SMSvJuPfMS",
  "key18": "YjuRD9xbc3smK8JgwKv1WC6nWF3iHKj75GeEgVygHx2UeRXrajdrWZFv4f8PeccZ4Be5PBpqNMxmDz79bLGxw4G",
  "key19": "5iDQnYUGwUuHCCKQrpt8og7PHr9VDzTqWxwPH4cSEsJDcMrLAWXXJS6DcAWmeCayKnXYekBG89ofw4TWAAETEwHU",
  "key20": "231mB5msMgBv1gKoGoY9crfC8uQEFjmvTTRfxNc6DRyv4wGiuqfa7bF45pSznnDvne4nbwMxdMzjaBVSwaUnGEML",
  "key21": "5WwNq53o7HDnaQvKanzNV7cnbG6Dc1onJxYC3sajGuGsqtr2RMuePVxzGksapXt79M1Z275ZfkffDBiLxL7w5Jeo",
  "key22": "2bbECZTQ7S4BeWzwEcm79QZkPsuxvH4h6zvezJcHZS7UeAGHtSkUbomzKeMpyesNXBepE5UHVqtnSLuzgv5sbVy8",
  "key23": "g8LoVGMVasztSw5TbvkoGxM3AHHTgWcaCBDbUrHPpcQcsC9id5GtpGkcKRejbFmCW2DHq4aMqFyi5fZt8NYQgTk",
  "key24": "61ct3bqiz9NhgK6Em13pSJqg3oYSqEUHSjxte19h9eRDQEZtzcgpCRkQueUgPny8zpXCRB9smeprDNtg218RaTYw",
  "key25": "e6VxJNoTCYSZjUUr4CrUJDKE1aGZRe2i7txZnhEQUW4Njw8eRtyXHhojNKViqhgiam2dpiPy7Y6mfNtHMB3134Q"
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

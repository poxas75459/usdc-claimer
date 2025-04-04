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
    "3MzegEFBeWrxswRNLkvPeuGyesGbzRAYV6CyGP3PrZ2Sjo4Mfh1pYEXwwFHcDVRxX9q3gRQNrLWZMy4t3u4V1g3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sPeSVNfbui47SEfZjdANFF3S5Cgsv48Vp6SEdEzgD8UDXLCc8oD8bsaTX8gP3q5Q87N5CDKuzk18aEnnxpp48g1",
  "key1": "5VsTugEgoqNxt3Up1opL4czn2KRhc8pLYk3DTgRAr5p7YUfpXfFeuFwaEGKxmTKzCj2eeaShenjh8pwecjA1SrF9",
  "key2": "DWjPkGpjxSZebFQ6z2FdiBAgfY14ZtraRhMwBPUDveMP886Vqudu4z4YbQvJgisTVNzm8m5T8y5yrZebdyUHu8E",
  "key3": "355feiKDQxRAGnvPoWjG5gRXKCmAPx4WbGk2UNTs7NjjG9dRrSqomoETugKEKwy1EijqZHaCnv8SXTnzNFSq14mi",
  "key4": "3mvgwW4oe6Kp5narpAFec4biC6EyXG5MUavfXfWWLiqWKPJUqEgAnvhY5bx3t6FMsEye5TerqLZfUJdUtvjRXLuF",
  "key5": "2jutyGv6KwWsgwHXXJWJK7CKLT7T6uJKb6XCcAG5W6HMkJ9UsLmnERFCC1HPmYrGJ8cuoZMYB33mCA9EBZsqNsin",
  "key6": "cBVPnH87E1JdUXjHrrKE3r5JpBM313gJadkRe5D3L4raGZcmQzfeg62VvoA4uC2jVz34R1YYoc8saP9xcQBDQk5",
  "key7": "2HTCRuUcufMxZUZcTWxYamFpL4aASFG3vfn7VdhMJRimUoyHVLMqurhi1Hn8kyPBgiQDiQD9TWbgnvUKtPJZX6Zb",
  "key8": "44pWhpCHmUJW582negwv3fZb17yHohMcNT2QFSJSSJga6KgdmjDi1VoM3BqWT7qWueZo6VfLSeQiYvpD6gu6DgGo",
  "key9": "53xBiQ4mNh7AbHiburqaWGCaAMG1QrTRJ6P4acXGnmJw3W7tLM4PBKrdDfTsybjt3P5uDyxVzfj6do79JC6nURVi",
  "key10": "5vLVoVH5UNGyhzjBurJJBnT9rdrjrWXQyCN7QRD238u4RorBLzmtibs8yHDMyj9bTj1UxwdzCxRfQuga9eQqvfew",
  "key11": "5ncT88kwbTVbeBwQUyuYAJDCSt5tQqc2NNAgF2rcUF2Qov2e7uRPRVf1YaMy8E8BENKgroP3dvrMPA5FQPBh3hqT",
  "key12": "5kddihtham73xsG9jyFutva46mofpk7hQzEQfSsF6umro2wHY5yTUDTQiqURVS9Gk6h87ZFEMJ3FkSK7b9Uf75Me",
  "key13": "55X8mJ9auuCPDt9XgqDrQd9i67hU9av8rTEkZ6Dcr9QFTWGSUoDJTy9ivvYQRqpa27ruuB8TBEjE9iYb9QopVuNt",
  "key14": "5Ckr13oXLfdGT1CaRaHpq8TRntFJeSb65wiTsnF2bj7xj4vyPY5R3as6PdVGkPoZwB9BgCj5Hsaqcch2ktJ7LFbh",
  "key15": "3dtsgr9faq4p8H2QhDx8SS3jaParp79cbdunpSfhu22dAqihqo2vXFz9s7X25MpmiTjz1zruqw7iGF2uXNWRQQsE",
  "key16": "QbRffL5VrZy3LkM9tftAnCkcPLQxL44cwkFE2dMi1tksLcT1w9YR7opts48P5LoBV4U64Yy7x5PuQiJ2WzWqZic",
  "key17": "2xxam3sPwoxLT4TvevuJEp4WeemBWUxM79a2HKPbB4iSvPp5cT3iFxNxo4kjK2t2KJpTpzbS3wts6HKZpcWHDTuD",
  "key18": "51SLs1xfv25hY8dJt8k7ToUV4N5XR2bnJF57ViaeGEW2HKoseWQTCZqeKdzVN2g3pXGNkWzEdP5caoDX6vFz23uF",
  "key19": "5h8WLmwnv3S3yCxvY7gHuawfaPZWtsLcPZg8mjDuVzKcxmNpbYkY1jZMaogrGVyUEsDtguaW3Jvk4DgWHFctA3xc",
  "key20": "4kdNTqnLQRhecRukuFaMNrtfFmxbSpy7Z3VoQ95WQ2X2FrsZyxyqysJGQmKYHNPtFQhPLZDe5xb4BEqsBnHcW2DA",
  "key21": "325xcrGiwrCgXZpBsbEAA4hHdPtbTzVR769Goy9hWtNJEUW7PXbGFcMr5qWrVRBwtn3eZ7HormJWiXbwn264c4GF",
  "key22": "3vMjYxMmdpWsHq94e9MTABzf5Li2LiTwfFbU4DTGVwikEg3yu1TuCHk91n85QGZjTMACUfjubAaNJhjsiFgBRzDq",
  "key23": "2jiWFcCMrZnZx74csF8yeMr92gSu1EYpEG4uzdHUZRrGzSmHZ2zDsS8fjDwt8ygifqmLSMuZEmZck89h3E3Af1nx",
  "key24": "4iQ3pqVESBxYRUUXQwDB7Cgn3iNsJgJe91Haw8HB5EsffpWFLMHK4nUgrY3hYJvkKtTz2KJb5i9vU7Uj1rdd68TY",
  "key25": "3V3FNgs4u6dLASVme2XfgaaKc7j7jDmpuPuFZq4dEZGxTaGmRZUZffmFgMUg3etJyz8b7mc6wY4TR3jDtuNXiHe6",
  "key26": "2vB4qMyG5P49R7L3zfy4urRkQDtfDwHWJCE3NjXk6Q6y3uzy7HSvuaBod7YhuEUbgqbeMguvFJMkCTnV6SHgZeM8",
  "key27": "3cs7mgpEAs7QeT826PHSMQdbwhQ4XBdCB85AGAxJB97Rf6Jn5EyBpW75osMS3ZH6Xe3DdByoDw6mZvo234hiqjAh",
  "key28": "2mwfiefJ17DQ6M3c5nLVz1JWGKVHgBfkqbxrCjJzpayVFUDvYpk94BBLjBuc9L234bK6cC62DuGZks3rWZxocdao",
  "key29": "3TuRmzfHqzgKSUDbJTgULzFHor8GXZPwWGA8PGGFJ1oXrYAM4uePs6EtbvG1DtXbi4R8bCxb2qr8HoPaYKQ8rFpU"
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

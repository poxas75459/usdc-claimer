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
    "292gemkcjcB2Vcs5SStGeu4UDaejAGDDgTc93StJSeSKV7UbZevC2VCpYW8TRw3qRUGZFXiaMkRXpSPVejjoUCx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ziw5pjUj8y1ywnu6ji2CTNj3wXUV8b5gRLFiQ4wsfzTmQh91cLgp1YTnyysfsqNcbRwmu7zzZs9X23BP3jHtiJv",
  "key1": "46kc28BWVVw6D8pynkr6eogFwwUxH3LvqX4LH9x7kLgE84rnBD7WUjBAWGFNKEwYxtbEyaTxRtwqoiGzkjz5pYR8",
  "key2": "21HvVe1sZtiJdXVifAae55uNBnfUwEyYwtSEFk5SaK2vJjoEx9TqLVi7gDAe2WNdJJsXmZKgx8zMXqQpJrL8yTn9",
  "key3": "5iZVCuSQxY5X2b7e4vaVgjT3ZJPaix3scuTFE6FGocbQU95jGCvYUoqwrHR3cmJBLRJWYMWgwiEnjCHXyRPDHZ66",
  "key4": "2KnQ4iyCTZoLcXNiReVfF8uqMNA9fXWhR3PPHo8KgAUV4GTMgHHMu7j6y6ZPZuSZRjF9u6MvvnbG7QhNsmSmo1oP",
  "key5": "4SWzNdNeN2hk8V6rQm2Hr5DU9DqkrrWCV41URJLrKMZ3poAba9hJme988snZrj1PaT6oCcx4iy1He9Gd9yYjL534",
  "key6": "2kjAjvfkWjpvexPYHfW23f7GZ24FhS84HKGn5LWr28y13iuxduu9UZRigWMuyCzyDtqiG7wKTRk2C1YRG8MWfay6",
  "key7": "2rbK5GceeHefoxpg9qByPuZATU442bMxffztkJsvxX4gPm8TBuQzf8JX55jLsT74XENUd1RvkeuJzgPLnqZQUyLy",
  "key8": "5FVZP1o3icy376i2CE22urWKL46XPBTzctsbKRxVi9z17aPpeVeERJaB9SQS21LMn3UKX8gkJTxoD5KSj6TZwz3a",
  "key9": "2ZwWNqJR2PruHKv7DKipVPoFcKwo3fBmv6tAgF1nkR3URH6UCsquJNFQpqYL2SDYCahLdYDZnrLpHsyePguwMSit",
  "key10": "5NQSshJV7YdCKUS6N6CvsgQ6M5HJHeZMD4tPUTGsg4vATk6pdbzXzxUYdE3CYk9aNixqf63LyEfohwxANuiWVvrf",
  "key11": "tiU3iWRZF61eQ8M2mBdd3gNjbhAd61onTECPhqxGNkDm4Gqqt8nfPmXgfycuefeP66PBzwLgXkJAwnVAJiPWiEC",
  "key12": "2jjbVwetRhFqK1jvxjKZuVGMnDCu1kZgYcAzH94P6JK2VtUhB39wmGUP743QtfGBgLtFapsBjC725xXYTPxtMXdL",
  "key13": "67rLQnq5ZN8Pw7B7CbbdLZ4dL4Vwpj8b9WyzaSZhPtVjTyoWcByi5t94i1UcBsYLsge1oUSq43jZJqtPpm2nrUYB",
  "key14": "2sC2zSZboMDnAjxtMfpHs2h7ugZ46sB5HBQroJJndTM8mePFXBNu9u1pKcGc92JysWzWLd1Rv2o4B5guKx2UVXxe",
  "key15": "4JsPCWCz7eRFkxDoYzdw5C1xkHzZgLTseyNW3ZNnqVdrmBRHAZnHFXhqyEq32ZKE2hLt7wwzQCgQ7qzUoA4anfeG",
  "key16": "44o8cqvCrnCdSSny5YVUantLwwejdyGmU5UxoMLoSossabf1uSitDEbFrGxAszHHFEJqhbFpX12ipukLACZxXE41",
  "key17": "66Ggah4iFtYQLwM7FHwggB4eYR4C7R1ukytjpoBiyQy9EVfCv5Zsgkz1zCW62YUjKT2hiebofpae5JGfNNU3sNVR",
  "key18": "UZMvEDDB8KMHxzKsHRy8CqjY7YCcEzuAPcYLLhHj5w9nRz6Z3Q5su3B4Y35P1BXm8ePSscQRF34DeTKoPwvexMH",
  "key19": "tFJumjsnVDKvjUHEVXx3tQ6CvLGbg8gfCRkLz128jWZKn8t4hvT3BzQgjhBywSwrkT1M99LQTAWhgfgn5Mt6sH8",
  "key20": "2i49L2kcwpNdVS1L1JS9w7p18CWFXqSxSvEeyv9BRYxWxcRXudJRzY1H4DCwn1cAwS6npTMBk7KHouYQWE3kkArz",
  "key21": "42vT24RCfjdCv4uGe91f5rnfUbtuNHN1jcVojRqzQMvFTHf3vJ9S1nxinQyqCWBuk9Tde6ezFwiLMnB63KwzUiKg",
  "key22": "2ctq1b3Fk5MDsPsZMgxqdJkJG4VbeQczN6viConGMYgeeQuniYg9g8Eb7GtU457SzkoaayorhDit76BRXR4Lp4z5",
  "key23": "4yVazFXZDdLBZbeenrPShMjToVQuFsZeo3Zp7EDfhipoLDweqKwR6Q4uHRVkoXrqjDWtFwjQwDPZSrVkxmaVv2w1",
  "key24": "tr1jGa9hCy5L9Zmhwa6cV4M6XhpQ9s7jRhXYF9yLA6XrJwyPFpvPUQ6UcNcFtcJ8fRqtvFwpbFKdJnznkJ8j5yu",
  "key25": "4wy4Wqih2PVt5YJ8j4hh4XVWF1bDpycFsttwGvC7o5yixhQGRKoo7BmZKUQQgsZHjoD77VpcpWtynBoHEZL3ExFP",
  "key26": "5tvuibcfDWQxHwk6ata8Zpf6NnL8E1DsHnPV3GmSFHsyLWJsdWBnfY8oAJn4rux2Ex7hf5wjyTjdgiNfQT2bGWvY",
  "key27": "3goBFf9m3x8edELrR6r4GfUtgCtDA37LNfUXfTJiReZMRgWQjXbjbvmz5kLkpqC7mA22CDPtK2GJb9XTGhqcWG1F",
  "key28": "rv2zbJjEpLHisyWtDxkKjBDnJZmQWsE2vNGHTTsaG6EHx2Zs2rD9h4UU3V1S6MKKw45kZf9GEwfoeqaAfAFBJ5g",
  "key29": "5VcXpZ68UuHWDh8g7zVt7Sb8B7Yg9d6MYJfHQ5EJopJEuNcLEj8VghAiMb97z8HYxaFduo1xvRrBZBVoWLabEqfC",
  "key30": "458C4BNTgXzRgHnighxuuykXRqEBjCVxxxmfSxS2ewe6nEM2HQsymJWoEUVnjKZGSPUoMkVjEP44v65wrjJroxbi",
  "key31": "59BnfmsKYCeMHFcptH45tNWXSYrt6HHfaLUNr7pzZAziNe4T75EPq5aPEY1w4WrCtSD2TR3xBwnPAdV3BWui142j",
  "key32": "3ZLy5Pt6dDxFHE8vJWLymZaAKdSPawMWE8K7pJ8zDUS2PDf3qAGBCZd3PxNK9Yj6GPHfKUVQpxT2MMAV4ixqVkqB",
  "key33": "3yagt8UbiPocAzSg26MkCPb7nmva2LFj7X1nTLRZs81Lp2FsNsRkj7VVNEz3M2rW4RdQgsQnmaBxRJkK39KcRxdT",
  "key34": "4ogUKarcaZxUhJHVa2wovtnNjPKGfeNCdBzkxoEuJiEExaTAcDuUKDzBwm7bDXMLuUx89sdJMZJTGDDHBiZRYRJz",
  "key35": "8gvYKtwQNe7APfzpHQ9NiEtoTUGMMWEUCNvpRkkXnSZgZULe68nUpjgnH7nUzAXDeDgQiVxcfR7fCv97Q9FTjqU",
  "key36": "ttLd5Dcqg6GmigdJC3KTMedmctNZGwEyroXQ9JDDHMryQGQ5zf52dSP6MKbDYr9BimZwA7ZhDwnPBERyto657Lu"
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

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
    "4Bv4fUKgYnueiZTziuawiMbzfrXmSQQW3v7QqfQvd7Ecmk4Ft6Y9BWFdizc2kEeLCWpgse42H9g79ZC6kHtCLUFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uUFbT5dP5XhpMqyADHgMcwyfbevPnf6HCaDW8F53LREhET46HApup8gvb4eP8MsF4DJwGpvFtV2dD74y5mZ1TAs",
  "key1": "39xxSLqRyYiNzMEgMUd6ekq8YzZi2y1sdp1dvknSxXKtSncSRLYEaXtzr6FRyrU898Fg1tHEL9gXcPa6wzRfzx8F",
  "key2": "4g89snfrwnWXrMvmG6AkSQsnZT3KmebvhLrKzFDy28dhE5MQeVAHvoyrL12tgt5Du6ZiAW9QHRn7ghHhecsrgMyY",
  "key3": "5gJH8jW4SoMfqykYikmoQzNQLtxoCFbsbAZAj9p2qDuxjqH4KyBJW3o47e8ufwZKNKA5BGz75DRfdUq97MHix9aA",
  "key4": "5UPJNLs4Qrn8oTXB4EMpy8dhiRdSs5S97V7os3WCTTrV4MfmJLNx2dtQnpqLp8QrVDw8zJaGqhFgnaQeyvPf4ppc",
  "key5": "5zgNuNNPKfYQrzcFnR12K4Ci9XEmZQdy7PZEMWVv9jJQegNFddPwHTGtatceMakB3MoLqq1UUpjP55rt2rvV9n9d",
  "key6": "28qWid6EksUyvvBQhSeCVLej2hpByNw7NG33ogodhkt8CKTQkvf2z5uuJXGWsUU6kg7ux7aUyKKcq3yP6tr9Lms4",
  "key7": "ZE1fnyJoMuPw6Cz9gixBvE1obsW8obfZ8LY4cb8QR2zGWMTDYH8QJGWHPqza7z2u8F4jcDczKqxjknC68eXtcfm",
  "key8": "3TUkcHkHFkTtyQqk7iXsWbLDrrTTxZEX4pTDfo6VmX6PyK3zgaZFSsYx1PECjXNG8frE4ERPBTJmh4UgyfqY3zoN",
  "key9": "4StofUQdcsGPgEXzHNN32UvkEPhrJxtb4b5WvbTWSB1WvuUo2vr5BsiMaZW7hphBYRhpvdGYFWzobWrNft7WPkGd",
  "key10": "4FRJrAHEpn9eEGNiHeztHAEz45crnK5UxDfivrA4yXQSYvvwmQze8K8gzJoeMKTjZwkYT5ib1sdDJ4g5ECdkVqwy",
  "key11": "5QhxKR8EvFV1HjEocRV8EN2M44vmEMHPnScdHGhsq4gDFJWeNggEBaAv6w1TGB2rotX36XoMBZntuwmEhtbcrvss",
  "key12": "5bHXJjZhS7W9wA11yAdJdFJTq8jBavf1kwh9LFoqUyhtLNHMnREtv3v7Jc3RtHdgCHo4CzzC9WkSUufHKAHwQKvx",
  "key13": "3CdYaFD3Tta1gSdEQkWRwWmY6tuooicZx8ubu2pARohdfALEXHWxNZfrVX4wPMJwATAnnZouptAUUGmNzxCHosii",
  "key14": "56Lkc4gCMh6ZLeUUykiFx6KKG6LYphYtRAQjd4JfUY4B6Ru8gKUn1c938BBHXTHsDSwKMQXJCtP7mFXVfDtd92BR",
  "key15": "3XeWyKQY1hBP6LjnG8iAEhifZ9tajN8BupG1aWgHpjNj5zRbzsocv4CsQU2bJDdjzuLjpRrJgevVz83Ax9iGoU7L",
  "key16": "3HnBhSfdaE1TcDGswCwasCgxwyXKyYyFHNvRt7uHQEfXkeSjRAqx1ChTXoBmdn3gSXxhzsz2EDuB5FW48FPgZgJs",
  "key17": "4Azag7uDFwb1z7K981cbcArpx284EFJV4LJeW8gx4K573TieDXmeiEtQgjZQqdiyvWw9BbcKV9R8HKs9r1KBDhTR",
  "key18": "wetuSjwUQRZjBLSnSBdoumnPujeeuKxEDmV1kKJuz8jTncZFJvUAUA6oWxB5P44VLUz3GrgkAWNx1Rjs5ssT6PZ",
  "key19": "4FNt6ZKBKmgTSWSS3KKHrJ15GcNhvEKXn3jq8NUttb5fP3kuURzU7d9dLpKGEVA6LsZqyS1QCbbp2RvKeV6zyaYe",
  "key20": "5zJBnVaqnNV28L9WAsy2z7T1ioXAiXopG4fe44EQQz7GmExrLUYh1oF6GHoPsbLgzPjuQr6PGPGGiiqemL4uGpVX",
  "key21": "4xVU1qWpW19EWfiCeNnK2oPqu2ix8SeHZLyP9e5o4VHXRr1anVdXUnwXPXNi8SCNF6DMSombXxsTMtXnXMDnoyre",
  "key22": "4mZ36XiFR7yvuJFC6CZnTP4xg8XZRiSpgB7md5GygfqpePRkk9xcHhG6to594wfeGvM5CEdPjoCJkocEu7MRekKG",
  "key23": "2azzReEdkQWhQBWTVB5ZyxgAQzafakKwSt6kYvbAAF4LBfYtYteUdVEt8uw3GMczrWMnWjGPRRAZsdJ1A4mMBmDb",
  "key24": "5z6sD4iAy5vrRn7oX6qrDWz26hkF7c3LixqJd6YN7hGswhaiu38yuNe52ZS8mbqt5oYNQGq49pNHc8u1YLRAJ8ZH",
  "key25": "z39LEVDTSVfoDRVR595AbUWMghUtq1jd6Sm4SZvudjo8aHsAMKtHZsqFBEkvAyyqpjScNf6wcZDrNpcCSWG1yCn",
  "key26": "bhES9DYX8a1RCWBniLquQUZzoA3AjqXPEyCS7Xo6H8jjJ8UvUa93Dncw99ZSkCpvX4ZoGGWUQYwMaLrzcYtQEYF",
  "key27": "hHWYrjtR5V7ry1XjigxgfPZcXhKn9T8GvvniQTAtzoa84Kb385V2PsAVzhatkyWkwr67z4HAB5Y9KeQVvFFsq85",
  "key28": "2o2qSgbrDeJnrDWM1zAi3dmX5Ya3nXx46A4L99Qt454Chsm25gNbxuWZJ9P41kLQRGtRcFCgdvmoo5buG5Z1kvcx",
  "key29": "56n4VN35Zp54mTwyG5U5JuBvUCukowL1T1R4x1S898FvYqA6it4PVEKdCdbji4X3dXyW9dSNV8w3Su9Yf2gRwGLn",
  "key30": "BMNnES1AJT5mvwA9nmTfkLCUKmwbZhkPpL3Vyv6jZiQiwaqReVPf8PZ5yqhGxa5hGERkewQUfzNoH8kyamfu3tW",
  "key31": "4nZtusKDLCFFihHZ3zkdGYTqMyE5x7ALrgGKACxCaxu8ccEk2t3T5LE5UDdPrPL4RbMWKkkJN7bPHk7pt28dgabG",
  "key32": "37TFyufpnvYFhw24K7Sd6tR8wxhe69PbqDa7ETUMzqUm7UK3ZtPiuKfc6uZpUrkgMu3haSNjqNDS573c7PStmmVF",
  "key33": "BwwUXu9YfJ4iivqka2khcveCh3eA5mZi9fnCbtV4ZkTxEo2KHTJPsmSgeYyqG4MveK5vsmMWeye7EeQQTAP966A"
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

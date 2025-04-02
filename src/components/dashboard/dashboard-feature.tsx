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
    "5f5YZKmnoinqvfU8AW328nmDi2D92TP2cXWzqZRerf6nSXBA2tvHKZS6zmMbXbZYNHDHNoxo4BdEreA5XyK78ZPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uZELXWhKqFWnpyx6VY5rs3JptfaN19ezWm5JwRvqdQQcSauXKAsSB1BQMU8pQVJLUPw68sLH44mYXtknpKYmX4",
  "key1": "5t8mQKDSB74Qh2UC5iwHtNv9F7GP8mw52vWRCGjZ5Y3MahZghAbzEBgnuVjuvqNihmRPPomNueHfMXQU7yrrPZZR",
  "key2": "3Vdo6d9kcrLniCf47nHEkbppk6eZxLSW1aLQ7T8h2i2vcNvWC2YRpaASaLbyeeE5cZPRwEjZPLPrmLCv37zCgJzz",
  "key3": "2VxpqrupMmVFEz55gGSpYFcA6dEHnMx2YukEsEhkf2PmW5BLJV7pnjNww17asHPCvFddqwGBKGEoJgJtk8jV1dsH",
  "key4": "5SdTQgkU2pS2oajKjcZxSMK3oz1Z9nq4i38p8gE8VgPCmVYNA71qUD3BhPy6LNyshS8F2oYKw8yng6K1DA5pHZ7M",
  "key5": "3ZXAufKnobdvrkiQopRdfkYdBMrVtCGvfbGmNRFQstbVTSTrNiZLREkXhpAxW5fGBhUt9iHAqz8QJ3rYb6NGaRU5",
  "key6": "4KDm42HnBjgJcBPuuDgdq2UfcqNGgoKMCXKcyC6SMBUbF595n1dMQusbxqiZQFjSViyBisuyrzW3hLQcDUndJoHo",
  "key7": "4cVNQtH12VRDrRNBKA1BufXDyfha26CvrvRT3p2fLZVZMoggKTEKGK34BB5T6Vz3Fvs9xXh2CGBhiB63akG9s3QQ",
  "key8": "34fPMEFWuoTwZHGV3UG8DbUJiBfgHk6S3C32aUqnquwvNtk3zTSMSUM2g2yCY2rGk6cfdjqFtrFaEtxHywC3ypyw",
  "key9": "17b5SUJjvsZdL9hfoeX1wcC8Pjrz95RbZQW2TSGbRUJ4GBHBjK6RzBPg2fu1DwxeCyqHVZcYUpdhVU6iK6eLYcZ",
  "key10": "2aFCD1mjAYvadobpC9KYTDK6CLuHgxseQvEWNgxZaHXwr39bWRmZDYwJ1x9zZiMY1cKo3Nxps5w8eDpyyWHkNRa3",
  "key11": "m5FDDL8iSfU2f8YVYHLKrN7tYMjwfRDoRkDqMTYq3ToemTZd8TPEcdPnH697CvPVDnVhBiJMRfbVoXsdx9RVQNw",
  "key12": "2YRdLZn1ED3fNzSWx6sSbGcZWTZPfJ9noZHsuuJRoL2sN34ztR3tTYeM5YZtbx9UYpwkNWGQFrL95Rze9NLvQqTx",
  "key13": "3hpTyXW6JQdx1puGagahHLNcAD9zHDZv6APCFD9QDHSP6sSFNEp4A7nG9LaqPkFiBFGiaZCc5eDo77sjByQFVBWp",
  "key14": "MmBM5379YVQ3XKZencGwFcZF4bwdMiBkrGC79BpmbEUus82wowiKXsMXCQYsa5VGeJApqW1L17opNvtWRDfZ3Bc",
  "key15": "sRbuJFHWHZhnnSwmFwqBF4qC8jmZXvhUgF3xGUNnyCgr7tgF1T62N5WrGAHFeNgyA5sSh8nA7jn5rBHBzofAH57",
  "key16": "qdZfsLStSpsppMLzQ5fjvJJWY7fZHhUJ8M3SjqSk2x1Hb5SFFqqzdeZbWQSmjs9p3vG2Be3G7zcTEdhjhCfkbEJ",
  "key17": "5oDz3iQ4QSYj5K7LEJprWNJUXyDUjm3SRn7MKkujjgVXijfpi3zTb9Hh3N5ezCMuN9FqvRkzEFdg8AfqJmnJf2p9",
  "key18": "37os43CGtkopFUHcCjXaUVKeAPwVVz6Uhi4WQTn9Jz1kYFoZy7YM5qEJ3oyyvY8vYgKcDYEeZfeDi34q9P1rdjNe",
  "key19": "5YcMsrB4Pek28kAcfrAGpkXbv77eyRJ5ajjAwEhkGVQjmbsXgQafH9uGk6bHcm1rfNJwV2MoiaQ6bUPiXXM1Nsi9",
  "key20": "2HRFWnHfpCEUzTmw5X5DfoVPTQMDSL7rVZD7xEvT4jZEDd9k4pxDJb3NmNMFJJgfqop7Q7ibUVoBbaEfyknVkxUC",
  "key21": "2dfo1SmETT95dYQN7QbmcRDYv4a3ATJRiaNf1D3FNL4zcimmX8ZhxsUFpBDARVYWBqgKhb5KT34n7rsDhPxs1dKS",
  "key22": "2MoqTcJqFpgdCmVjdTQcqoCM7aSUP4vqR3iBJ9XL8xYJx4d5ZcxLaCsirtqX2W1QVTHUKR9vsErgCuTKSjjX4aFC",
  "key23": "38Q2VK6Q1aVqkmozLB7XrsR6XN2AHYsnX2DJAFJQMVZiwEUNVmbBFKURaKzHN1AxcXt4KS5yQ48d6Htm496ACDDo",
  "key24": "3eYQaSRtpFjrfeTyiRLHY35bRXiMkrJWTx7KfGAGqKjtgCBz94UpYQhVnusS5yxUiHUWraPcsaMxxvs3npw7JWqs",
  "key25": "PmLQuskkvh9gnwP4p7fYUcn1omC5x5W4ZVz3KM99uviH78Xvu3EugwiYZtWNqF7kpmQjxPHvV45gJWHvckNTMcB",
  "key26": "23xZrWVJBhVRdV2gdG4srrXbQsbW58y27zy18VMYR3PjVFRLJ4rEU6FkcsWGJff7vE4uVMopdWVBcx2Tgk7cmXsi",
  "key27": "KqEXjTKPHgrNixhZkto3VRFZ7qWWy4xZL8MjUV5a73oahLMWnmTSNqgCNGbDFGdDFYE4a2YwjEGXhea6dQU33v3"
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

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
    "3ivn3gQFeWp4Xa8UybR75E4BjeudCmSvpufJcXUew25T4368CncagigbJzkpjzEPVo5jFnnzqUHUv5gSKknZ8izM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAci4oBgumLvkPT8RLodg2q9yJqydgsW3dTePGExSeZ6Nf5DfpUuyGG1dDqLnAZsdpT9b2ki7eZdyrRm8bnG1iZ",
  "key1": "3nS7c8E9e8jSiJSgXBfeVnTQAKF3cNz8a5hWmB34MDq6AntkMN3RAvxhqmuXnewiZmvQKkxroVXbimPnCwpGS9Gm",
  "key2": "HpchjbvabK7wwxh9PLDM6JZvcu1d3koTy54NwQgpLdQgzKjkqrK5ANrM9C1N1rhJ5Lepr7bGpsdU7Rn7DNK57bp",
  "key3": "3i6yoDo3cC6DHY8H4DWN7cgUwbSjuBoNThL2Ms4iLtCu5SXmFaf6JV9u53b1ENijezXo7GojSyaxLHxs2GtpsugP",
  "key4": "4U8VrG34UrD2okNgqvSELGxvPwzyykS43WiCbQK9dfkParfFspMN344wMN2gHcxg8Mcjqanjtb7SfgSoWWCu9bXf",
  "key5": "2JZ5bxsFN1eJRftZgB3oxCu7rxBoiXXNwWbgz6PqnRLTwnQ8WiBx1cuoAbdfqtX34Sei1TtyZX3X6eQPyM1nUZZz",
  "key6": "2fMnDExywK1U9ayfsvGusKa7wwKLwDJociXZS7ysShag9VdA7XrpAWtNeWtT9H8sLRcCGVdBgsx8SKYpWsSyCVAc",
  "key7": "37C3cHTCD75EezWSAe3vvruAJVW6nRJhxuNXfQV3QE99UagyURDg44c5rhZERee8jGECPu1VN6hr5bznWD47iDnK",
  "key8": "5XrW76XVECehCoJBTYtm5F4JvozZfP8fumZmY7ypbhTUmX71ro4wYdpHuJT9JVesZdVgf8w57S5LrxnvH11Trkas",
  "key9": "5UUEAWogUAvmSiN8J7cbLwFpyYjq8YrHdFYrPpGhMXE82d6z8VsYt4S5oopcN9ycQwV4UskaG1fD2kG74UBPWZ3V",
  "key10": "KMZrxKL3XtPxnYpJLL9iLwZ3cf13V3kmtVxz4Arre9LwUP1XbQcDFP9ewpJGfdv9ZmtztBFNafVQZJ6K3u5uhAf",
  "key11": "3RNyCBEjyPD5q4cSsLu24aYoKYkpmbfE76DiN3dfhMfjoPywy6YuSo8qX8Q4J7Fhteks1whbbifwjH8ZtHXoLdPG",
  "key12": "5c8gdBgiaxFodwHAATcgB3X3FePm6RQv6ZqvitZ4Lu8McTLe7XQianq6Cs3y8AMyCk5w9pXX1woBx8qV4SdFLEK4",
  "key13": "49Ke4ajNQvtZMfLSUTQjhMVi6TchN9EMBju27SkYnUeyacs9rmZU6gzFpEAoaRscnZSKXGjy62DmMRM5158rSSpk",
  "key14": "4kw6GHNXBcnZw7UxjNwH7JCENx7ffUQEPjmo4rvXxsHGRZeooUEcA6SREjUxiRfQHBMak6Eca36HMzF92hMmcvDk",
  "key15": "4cHXtnLjuYgPVYfRuQgDrcTxPoRwKwKUEdGAhSG4HDFbvZKt1GMWrE4GgdhdJNXqJQjULkLR8ZziEaeDtF3Emd7J",
  "key16": "3McYDRrhK4Txr4fLkX7U1stJogV11zPRqAerwMGd3aFymdZxoJbd1UpB8bNpxtHoHRmygK9nACxf1qCuzV9RrnZA",
  "key17": "2E6Pzm2HaFQnRqq29LmYaCGGhZBWheYuBPPESxntmKibzhQDTdmsEfCdTb4qLapmi9pUjjSyvhxhrSXpyvFGRvJz",
  "key18": "2oXwiB5cbSXza7StY3x4vRmfqs3XYgFNh8EHnH4fLYpuYefwBemVZd8q8TRtzXXZyKXMiZfxK1kFH5J2ou4KJbHQ",
  "key19": "4bKxsQYgczrPzpvfqGdrfRyZjZrk3ZdG5NsEAaSzDhr8YjuEULoVVUbcYEtgLqn584pccSpcFSPpAx2urUvsW9zN",
  "key20": "2SURGRWNeYw5oCB3n6q2oW3BEzrjF9NYzw6irPKqBeSyfW9ZG8bBwuGn6BsQ2DaWtRyr6W2fAMJwJRuip34R4nmT",
  "key21": "3gwGUfaPv491h6TuBLJQGCxbwFW9QawvZsQQZfemrZpJ4YEFRMaH83YdcLKb25pTvsaD3SL5Ai3Ao1Baz4nVPnaK",
  "key22": "2f4tFdkAaxxPhqR5eWs4qDckiHYyGGFEV3isaS31V6tvmuJfhrzURDvCsSReGBZdL7qubJokDbAf2zKm7ABSN5E5",
  "key23": "2WuHZgiJKGnGcAetEGDEUpFLxHT3HfTwAgmAKKixgbkLJYTuHm5EUzCWWBXC87JUAemhxnR2Cvsyn2yKGAPj5UUd",
  "key24": "43RZS71zbZMk2TCzPBzVTHXGShqiDULVdkoZ2crko5KpGtDYhbym5Dq5E4eVoT7GT8qrAKufEpob3HaHtYJ6Mxmz",
  "key25": "2EdfcnvpDZzVueh45xyEkdx1wnsBTmD8StGUMuWsPWJZmWraHxpXDyxr59vXptR6g92ShDv918ahzZDdJQqKZotu",
  "key26": "2iUfafbFTqbzSxFQWYRyghqYXp4RvWi1tpkQhNzPja5DRbzodbefehjYELJoWBtfLJZSkcmHc9iSLT5eUy3sDN9c",
  "key27": "129bdfBgiHJVtqQJDkBgX6QAN4Mu6Y8YmcptRKsGu1KFEpvANGzUomwFYtF8LXbLGVQxULGMEBsUZvQwxMWfRVXR",
  "key28": "2cY2NeYifsYo3rafff6S31GRcDh31Xty1CuUXpzMLUJbjmRsHGbsSPtScmFYZSTfCa3HMWUDwrPz7spzLYcERax"
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

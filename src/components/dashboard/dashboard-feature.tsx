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
    "2LhvV5oUAj9iyhjMTWoVRrVZhoQFr9PrLT3uK9gYabNAaDmGJs45WJ7ybaV1pXRGBJA8kabogwc6C8PgsnWBV1ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQKvxgWTTUwWV8ic9UJGwRB9aKmF6ssf5gyL5n7qc1sJ1NzzUFKeANFiAsgZ7Z88rA2sXz9jT2qGWnjzYUzNrgE",
  "key1": "3oSV1Np17QjH2whKtqVVynL1ZajQnpqpvjDWw3nGsdYpABa1mYNdQMYyjHLiioY1MJtctXLMqCa5m4wvjrfWa4BK",
  "key2": "3KHETyvnFPPyt1qfFE6C9pXUYSyoUFKvpBF8tEgzGoNkpquK23Nr4k5wHQSkCHPnJAnmdrribtMY28sDXNYJ3UvY",
  "key3": "3Jipz3yb4dXpWKHbFu8GkqBe6BjHWQ1VcdWkgpQQD1MFr8S81HZDXNzRvbTXER4585Fc1JS2MpM1uc9q83iVnSqN",
  "key4": "33V16GBnSo91g439hn2GMe9QRjRbzFC8qt6mGyYfN3PxUxNPmrN62DnTAsWBRxQuoci7AHhwjndXnvvhBED1utHq",
  "key5": "2R19DMmYUmL5jWiSEfW7TvF96WJoEXpcDiGSWWBb9fvq6P42BdXkVvx3Bt16FZTBWvzCDZ56ZvgcmZF1J23tfBkq",
  "key6": "4x2jSTLBpk6WBc8z9PkhzB2wJ2pVgJfppRQMzYfk8esvgQs7V9jrNXBiRUST9fhNpUYh23WanhyS4YMXo6yy4L1",
  "key7": "5XXEBXdmHyBDEidiHKydiRNsEUnfiSCFZuZL7mLsX2qA3ocFwd5t9rPXzhk1vdS7UDBshv9ixdARZJHvZY4xSbmi",
  "key8": "WWA37X3ejMQvcXbT4zNiSMRzTnirt5jnoVmUWcpYhPrMw5zEqCtMqmruRSiTw99DCkxH9b4rFoYwBx4XZinDYzK",
  "key9": "2EVVt7PtDf8se9agVVyLmSGnGWWe6cKAkeBbPwubMUFuG9yfxiGgqa4tUaUkoXK2BLDxrPAvxGeSDuryXoASjrgd",
  "key10": "v4NrPNtwjYWn6yTcc4xokxvK92TRhNQNVTzn7R3p7bY95kEi2S9o7svH29DwCPPR1yY9UGfTSbdV24bYVR1pwcz",
  "key11": "j3rCiQmVxx98e71X2SVjXwDT1TiQbEFbABQHRnjvJgTs88uyK5ihK1hmT2S4EYwBmsu9Q5MVoacxNKt9ovYBqJ5",
  "key12": "74eQoWLtqoFHQZSEaqcYqiDszVvUzpzqiBTE23SFdkXQ9P7XNuChAj9hPyhaBYTZg8T7uVKBfi1BEgnLDCRQeix",
  "key13": "yZ4u69fVYDo9CZfd66yCueNTHGi1waRr7VjWf2zFFQQfKYBi8H3qDGAfc6wSMg3JvGgcRt7V4XFrXX7y6ULoZer",
  "key14": "577g7iSC7z6i6eK6A5vZwM3WPq4Eoio4Z1Gr25TKceDtagqvGyK7M9WtqQVf7cMzWric6HTS1qNjcmwnT2sPzPUu",
  "key15": "4RWaZnNb1drwkXJ11H3SQmpsb6SuPoupXsNNZPAG7gFAcGWPynkCxu5csQrrSyZDrcgEHSwcGoFaDQkx3bvrRYaQ",
  "key16": "2Nv7v8tHmjSh8NFqANoimwEssQsozsf5jcRwXjSTeJfDWi7AjBd16jMbM7hCjanrYBotLF73uqR1e4Hqj3CtsrrE",
  "key17": "3ACCT8H5Yz6B3zFvYe4J9eYKxQZ143kgDpUfSqgLWPJuv7cTzyUQxFVTZ6MihfxdBHh4foB1KZyTrGxZv62NM49v",
  "key18": "5Q3FdyihXdXJ5nUdyFyYuAGWt4sesCG5gRTha3xvNZb5BtN734Pa6ibXe9aGf8iDRVVRm1GV7dz9aeLjnBe5pQkp",
  "key19": "3DevmxtGs11uczU1pjCnDoL1rVBnF9m63MTSuTQr78uKhqxxtGFDSBi9kSLYQJ4MdcYHkJpAbiJZwdBg9t7UyMp6",
  "key20": "3QzDYkwkcJzSXXVRPoRePUKCvfGfRR6sUGoYjmrAHMLRVtWfrrK9go77GsYFUsapdmScSpA5rqVbTNfvqrXnFDrw",
  "key21": "oyoGe8TgPL7wJpnXHStYq89xRSsdMh74sKmJhnrRrXzbeZpUvSCqbz2GNmscuJqWz6q3yBZxjjzcu4kQTnLEY5n",
  "key22": "5WhmmSh5JCDktFUJ4KRUuZz9So7mNYcptcEvJzRczFnWgrRDY1HE9hyScyfWNrVtZDv4QBmkJLkiu4YvKqPzG5ap",
  "key23": "4LErgcR2653B9Zuw8uW7z9b5a6E68pQHM6W1gseSEvo8C62z2AW2fDdXb4JsYn6wyvbPNEfPjp8RM4avn3vq5yoN",
  "key24": "DPhXiye8smWF2dsK3dBvBtp7HbYVSVJBddjpH24wZCmXBoVKfMBLuexya5qdeibNjADhDECJSf4hrdCtuWUK7Dk",
  "key25": "5EYYVmso2ZAKTTJqDak7bdHyQ7m6jwzR9Fon4ACGSp9Jakaaa6DxMk2bSSvJqRiJStLedy85en4fgjnrUy7CkVjm",
  "key26": "4hpFqxPmtXJKb9NbCj2SWtN78sdH5c9dcSXsf5GTxJHuMZ15XZ4fusWEuynSpJi41evbYxRxGLEp5dVyQyT8ivWN",
  "key27": "5sxWsmxjAV1QCug6xjSDREEdN5uGgmf4fezszbzg3vzjqLwo8KwK1Dt1nS6jscYNjSzKeDgwryi743pVoPXRvDTC"
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

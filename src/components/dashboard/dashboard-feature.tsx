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
    "25SacwpNaAk8ottLdeCY6HRXvxAAKjxbZGYptMPXeSrDrDbZeaap9XU8uEeuyDVARvH4Moh7mySCmo3kehzTxQnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x1bXV7ELeqXBPxbxy8AXUzs7yJMaGxLuwVk64e5tgH2EtBGpw8oGoTQNd1kKidRtugnjp9TGynPyKKZMWhBXcj6",
  "key1": "4pmZFbwsE6qW8HsgtRvRB6TgMP6MR8BzTbpcF6ZzNSd2cEqomwA5CrVxDvD6hdkiQJ3Ppht7emxo9RQr5LhJyZ3F",
  "key2": "2yZ22hd1sunDKnTdqgFiCWcBPs5X6HgYb5kCmYFogy6HEd8fWdqr2s9BaSPoGojrKsBpavu4EvkqqoibQ1kyVJFY",
  "key3": "5hAzhh4pku1dKc9PmnxUG2q7dUnTPwphEFLCVHfYCeTh7Y8H4uSUNcrf19mViAdqM4TQAfphg6FVua2bRbeAVt8n",
  "key4": "5tNwDfxntCg5NpZbUJxGvULm45oWRFfS7yH2JJhgSVjkEANAAgirS8vJFRpYmncnEShBR1uvzeT4KUvZSntjCNvM",
  "key5": "5NXRGckL2v4KePvaG2EoXdgfgrVW42Sj6KUdCTHrAvxHxVXbZan5zxgpgFfnhyvr6uo3rggpUHxZ4G3TT6WCCBUg",
  "key6": "2Kc1fA4tFQ79q5Fw6RLuTPXRjP7XqwBGfaPY7hj4zb2LFBSAzx8dZ583JhhrcfMzRhM5rreRFj2xm3V6Z7uxLKAc",
  "key7": "597J2oAKY4vFYop2UoHL3NTv4Zp2B2xkCCqWNGDoywMjtGU38usudXSNDbome6ZLedzbPyXvpFy7bVAkbfVto4Fc",
  "key8": "5dwYEfs5ACWJDdfYgEKp6iJ3sfSbytAecN8BhVv1JU8KmiRYQdyG2ZRbtFc6PwgZdEwQAC2WDaaVyUeksbhevMay",
  "key9": "55p3J1PyPE25ZruaxTtJmPBVH8rrRfQ17FT9rD5XLtxmVCQP4aLhPazfPAAgTaWP3iK847g6AiP3oTuLB66ioDZt",
  "key10": "4k5BFsTgYfoHAKTr749uzPeqnPjdnR5yNF5vmafFyApuWQ9wTV3dMhyFjCy72yncRKELsYmrFH7pXS4UR4LC84y9",
  "key11": "3bFXZcVoZyGvGiLLEtcUUY1pcMzaDZTVT15PJgK9iVy7MM1wS7rHoZAEh5aPwgHsnHuBzhKSHM33dtBLPXDTJYXA",
  "key12": "2eCrvic7mFHexRW2QrsPhupay6XGtMzhYYFYydUgaDiQAvrP4Qz1exj5i1fKsWsPU2DAD9qByg7UNyzsehVuhE7s",
  "key13": "4YtEwnoedBeBgD4Axt6V39xq6A1HmH1n9FHAKkMNzY36jeHagdru4fY9ubkbhXhwnvsMT2Pxs9Wh6fTUZgtdW9QF",
  "key14": "4eL5YBLKS8SaXmZDHsgq7Wox6mjfwqMNyGycFA6AdNNis3PwAG8vE7z9hcHMjBVceNFyAvVWcbSD6zrGSn9JA9UN",
  "key15": "4d5x8nyPduAsghTZLm8gZKNzxG7fkTVf4MDAop2BBj8dxWYvzSDGrcEYYUXeqH5jt4Vtq75jyuH97CPvCFZH7Qme",
  "key16": "2htaGYc9bmsrg7FmAEMvP7b3JWP1kqXG6LkCqv5AEG5eqavprSHJVDKQF4QgwjfcnoQRFn8Fph9ndWd5KMZjoNG1",
  "key17": "5LHENdQs2cybHKwV3yeykQ9cUhDoSd43BoAH3fPVfkLDJqybDxw2kTptuiu36bXcuhM2hbRdt6jTzqfYCifM7d9f",
  "key18": "3XNJB3u1xyG7m6pAUTtVEoTPTuzgsqjGkSyqLEqvTLcZwq2Y15PoKJnRU66SRFXBGkAdjmC34CDSjijno8T8MVt",
  "key19": "2a17itd2A9HMhDLrWb5ZUYVbp1aCmgMpZP9WWgQahxHLJ7hkG9VBGJQCZLvjT7tYFrvJy8VQGFR8VBP7uA8MTH43",
  "key20": "2i8CXYamqCh366E17JQGJCrhAR6XPQvXDM8tNi9FzA2wyn8y4cNpfsB16dC3H6MumBHN8CLZpS3eLrp9zB42tHCV",
  "key21": "4JaXdXrLE1JfZFGZ4J74gjZ4DcGByHiiuevvfrTWwzPsSMJ7qtz3hmdxr7y8ogFQRVBnQH6hCaw5PewvnngdmzZY",
  "key22": "4s8b8QhqYzYspHjNdE51X5DB4JBY4RDsx67i6XSgTxxW66osDUX7RDRfA1HzAC9fVVA4dHAwUmYKrgSaBjnw3Szo",
  "key23": "2C2dXoZfhf9LL1H3548wFHTPYdGjkNACpP3EtsgweMHV94Bdgq9EyRjfLB7EmcokdWA3Cr4K8PzgzJgAfVEqbpJc",
  "key24": "2puJBCj2xwP3LUTofQ6TN4m5EBVkU7jnCir7Xw2zGxQv8zCeEZzpkSzaMgvpZhwTLGZBDmXyd4upN2KeUPom18Hi",
  "key25": "4Y6R9Y555ug7rkwrgQVd5YiYQ7nsU75J6dqLn8GYbQ5cS9vUTfWsnnJ5v2iGov5WLqP1Tb8wVZq3RzVreQxngKVF",
  "key26": "61RTAPPg7LNZo1iPm2fD8fZZUq9iVPvY4DuJsHVQpEwaK5iJFUr14r3cueq8J83CWSMcegjZVDP8KrqE7ttuHcsy",
  "key27": "53tauSzxGBjRsdaC5cx6neJ2AVooMCq6H7FrncgYT6uztUAzVBvVZS6eUGtyB5kerCWQvjhpgy72UQ9E3nz6BHbQ"
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

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
    "3thwfvXphNJgxY2aC6VrbTV4cebsKSQrjmirfAeruo3ppgk3QJa1onxqu56LZotkPX8MEbPKF2qEGyCUkVa6J7H8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yhd9w3tDhFWFJ53jsRpsi7nNW85h4TZDmqXLS5EX6Uasjeu6ccSNFQ74WjsrjFkKbtVdSwnSwcvbWq3LwGHmBfA",
  "key1": "5RckiTHCvwVuQMsANBik98w5d6KGcYuay86kGjtGZPB45pJWHQLwbEruQCULzTcnwSteeqdQLH1VvYnvG8zSvJ3z",
  "key2": "4Qmq2uoQu1P3fYHYmMPrQkj3j4p95pR3ucirrKFckE5hvWnU3zWRJjbyrQXYLVMAAgqxoqzjvW4rGPp6xZ2Df4Hw",
  "key3": "4pwV4eN147UtWixwYLx33b3uZjHjgYYxW1MfjFkcYbXTf9EqwbYXWZWLwZ2u6zaqKrJ1AAsda5v56VWpWUEgNy36",
  "key4": "2uEvfLtxyZsiNnRy4F1mWagi21dvtkPPAnCzJW5ACTTdHqapsakJb3q5d81woK3qQEZRJEhFBRpX8bj5V59xkhzi",
  "key5": "NTTEogUXpv48zpFFmGqYpKURJzJnfipPW49hPgWK3VUyzqxfBA1oBPpcWRVC72tLFPqJY9Y9zEKacN5Cs4jrxBR",
  "key6": "65Ck88ij6BupmtD3WaT4sPnqhFE5NxybTqbPzz5tnVHnfYSFWHeT6S88uZyS6YgY5L9qcJYRXbshMe4FgR9Sdr5f",
  "key7": "2tca5E7rfTzuiDjowiAKhUyg2Dez1cChN7byBJBamuQE6hpeBUEbKunE3ZrGGcdBnQME822xNC3WBLkzPi6KYRuW",
  "key8": "4mBrfyuyLUH8DmT4Nuyya9mQxaLrFVz9tAKzvJh5KUZZefMR9EdjAUJg3X7SpRu8cBZyJwkAHX545DTKUUkEgw2S",
  "key9": "LBj3VgDejhy9JcTLQJW4FAZsrGXhkc17BrW5FVtpNDc3ypW5XnAbEyUGpTubinLh5hD87D4RPL3X6dyVYeGd8k5",
  "key10": "4sqcKLKtEy2KbXHNLB6Q24tFTHkGM3JR5xDEQuctA38TphTz3YJXS1MkW2CLHrXuJxsD8vv9bcixuDuqTvwff4sg",
  "key11": "2Qa15x54fhEGSAPDpTBE3c6N6DTmuy4X7febu6kp8R3F899nofAuR91kxjjKEKAjCRLnZ67NZFUN2itH3gZ1RGZ8",
  "key12": "2izKveDGQyk7CzRUXvybiYMbWjGHmJoqgo5yxoHGe4JXWNMHtJksnfi8FHv9hM8rYyV5eejhdTVcf3RqNcyRhXvU",
  "key13": "5pjLkAMdJeeAXNZJQEEZNac9ArU6yGG5hoRESvw3BvaVpoPjdxURWqHJtqfEAiCtU3RXnNtGwtrLnNNmox4rMLed",
  "key14": "5zQ5ewqXJw2Dg2eSoDiDoqunBaSZNc4wyDhVZTpw6BiaHZs1W9xFUKR6vrgSjMzoQ4Cf1vrcKMS19UYDG2n1DxXJ",
  "key15": "4i8gJthgtqK35YaFMN67E5NcvX8giLrJwt84HjNwuYFTDDqtuoH5tXqsTDPmoXVyFo4bTNDDie5Z9hcumQVThfzF",
  "key16": "Poipp2NHWWiY1yqkywxMzEiz7MrABwyQw4KZSnBiwoPyas2UuEsdjXMzfUKbAka4c1ysvdyKEQtVGkH3hsrhrxv",
  "key17": "5xwEM6H6EdcCePkw5oB9GvCLxsca91sVbC3DoAEXp3fmWqK1soFZUuqQMxQSScs3kLpHaBSEB5BteCjsVrkKT6HF",
  "key18": "3T9FQmX1xMMq2zvC84Vp6oBmGrj2XG6izq24Tw4jbuN48R69vX8z7L8eP3k5bHnuUkk2jkibwLSqpP66hGL2NjT1",
  "key19": "5CTxXwxJ99ckih5e5yxfa7uqjVPP5m1JAjw4ptBAQxG49hoWrdmdXTaXMYwPpQjTL92rgQVd1NW9kSdoqvDUhzMg",
  "key20": "568m1m9ibqjVLGbEy4bcpaarW4vPpz2iVkLFMsfEUKgfZceAfNkBP4sde4rMRFELwVHmTyvwphX5KDqXdNFBR2Xm",
  "key21": "5gGYCPJRybMhfE4entB2gzGnVrFYX1qiRjpooYkeNVMsdLSBdHu3CyFNotWuCag2yMekW6UdsbWECnrU8RtCuamR",
  "key22": "2Fxbu7R4JoX2F2d6N1BZK69yEC1JyHmxAJR2D7Mu82xm7KN4iNkKGb1WbHCj1aZt3i9LcXM2sLqWjEcMeZEbbhid",
  "key23": "3q6JcudTGqfxYN4NPpEqYS5RsXxYmPErYV4mhuGynd4BDPzBk5H1eW5ZxjT2h4iNyLL1bd2G6kYQJ5SVCSYSSC4v",
  "key24": "8C4zgkHW6gqFEMJMt7WeyywPFPktsSZQa3XzZJr68pjKAmDD6VadzDu7UGGi1iZSB3UpTBJPyLpgU94NzTWJwyb"
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

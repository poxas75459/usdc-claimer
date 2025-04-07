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
    "27KDjcNCgM9Dc1Z4NzhvEocUABsX3EyYyZvqZ5jTVisSFC85W7iooAgLSye6u5aSBUpadTMVFue3TG4xeajcWaVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UXWU4CKGKHzHHataEpdTzNArHfvANjn45ETJmWfTjd4iwxg6Evzn4ubm4FA4AqDDfwEWTcRjXFyPoBz1s8KktJH",
  "key1": "57L5xEkWETR5SnAoqYJCQntA4Pq6gNJKKf87JL6Z9b78EFfCcfJtnUjjUPUpoUQ6JD9mK12rJidM51pAGdYiHBVa",
  "key2": "5m65PLg5zavVwHwUXM7eUBMimexkh2sw62ysdRscCU8uNnzharM7TjDa8y9dbF5iK6u8uyFiAwJpXJV5NR53GQQK",
  "key3": "2DZymr3UtnV7hM2LQ1M2GZJ6nNBrWkCCk4LGFpBcf8UYtirDMVXUUHvJ66FyPtbndjZvQBv8VdBDtSjdDsUw5FrU",
  "key4": "5x8p6anQ89F1arNN6AMZVuzbz9sNoceCnnWvhjQfPHJH4RH96Qfi8W4r9HCuPpvjyFUNytSzsAWJSkFWXfquBrpK",
  "key5": "4kma5doqey2TkWJq5xGS32A7bemL2VzqLChqn2bXpSeqTyNBb6k6v54Gx2DRKvCehVwDHia71Ke7nMzoCixAmjgp",
  "key6": "58AyHeapkU4jS5B6q3jLoZuh871s1NJTtuou8PzptxbQWTvAGVh9TeZQBE5bGPTFKviW2TPcmzU2XfnU5Xuiw7y4",
  "key7": "2uqZRvKQHFdcoyp5qBKj4XJSLYaGA2DZQJN57o6ap9oZsVaN2scZM1cWDyYA3xWTJD4BvfcSbzb84p2HCwWaG5cS",
  "key8": "2mygd2WAVCZuJpfeascsxP1RMWLtcEyxoW7mdGGQ5BJx4na2cf8DYXNVBdmBjcae5y618EW273jj4Df7AtM2KZSP",
  "key9": "4NnbASQ9NWVLJUQWd7QyhfxabWpBk6MBZNvZf1UWMMFskBmL4WshR6uPRmQCju8DDE45AhyEEeV627hVReVTWoPv",
  "key10": "BYP6vJm238TqAXrcaZ9mzaZzf1xeeBqveJuCCJhYuux9VHBE6ez1Fw4nC3UweHegvUWM2Sugm2LzRzJ391wvNHB",
  "key11": "4LcRxZjHQfccUXdKGfmg9d26Nd78HSK6SGZrmNz6FayVDgWwmiu7KTqeQDnuLkxgdMrFKVrRBiunmHVuq8yV7fwQ",
  "key12": "4ZzrfrM288JUj3yQzdXFwvaFUXdWo3iCNsXYdRNPjvd8fi2Ziwb6t6AHhxQvccUm6XHooFzJkGcehkmSAEwD7pvb",
  "key13": "nxdxXBGfLhZysG8thoDxTP9N7jgCKu4xjwJAby38rGuG1gfkb4n1HSMXjdUHSMgJpFjLXacCBhv3Mz9oeh2ZmDg",
  "key14": "2CatrQhpNPoC2Bs7PFXKqUTnSju9Q9yPoqDadsh2pgpunfSPooaH92YZZKkJ33Tj9dXENWrEGchuuXAe6YxUur4R",
  "key15": "3mzpEZgmo3FpjEbKmFQn3yspq1JSJQDXGK2WhS4t4CtyGCmubDE79UkycyFwJLboyHN85W2PGczvF462bLLzjRbU",
  "key16": "3PV8FrS3TBXSRHzwuY7WcnWfWbKRDcq68zbN64VmDfyLa3ew7mEZM9enZbi11cvH2bgwLUCSJrQcKfjBeegfWnxv",
  "key17": "39dNj9ofLu8gGjN4ZVRSaUBrPmGbmNSWKcU3Uhce4MCVBKDz7945w3jb6yEb2fTuRbc3vh2yi2gjDLfCjADVcNk3",
  "key18": "Gk22G9EFSDjWzicv8Whr9RvDbwPQyGmGep921xaUFxBA31W6Zc1mdaqe24wu1jD7Sdn7XC3piQjY4ZcN8RFwq8k",
  "key19": "2LksvpXKzwwFryvZUa1EZwbQDY2bwNcqV6ceErqYDwCc2okXvCFoQWaXjy9ifo8QHSmeCUuMREPWz34DKktjAcL9",
  "key20": "3W3RgWMTSZJ3gm1hzjHUBfY7byYNUFvUzrSq7BoWvNe5CwovgKQNgU7oAvz8hByZVihN5WMzp5s4ZMx7Sk5BGLjn",
  "key21": "k65s6AGKgqVQTM5Lc5f8tTd9NJAUunEpE5bTKy8nXxwVWDuA6RpKNXRDgxPGZRnzxh2Vp95FDvWMLzqKcJ3LmZh",
  "key22": "36q8CbUYxoia6TjgBr5CpufnTdDwLBT1sPoLsiicyZCSnmHV8m5efAqs33Yuxu8QrcoEpnqwuNsMhDoToF2BQbMH",
  "key23": "ZL2VDZpGJwF3T7buNTwjn3vwY2tKhBG46gAQQMZMtHctnFXYFDYoSH1aZg3rUq75rwtAP3mju8fnFEwVUa8CUWx",
  "key24": "njzGXwE8ognzXvrPdpmL8rdcrF8j2Aat4urWKrkvABW95hfQVswC6TuJ22XgsfTPjgrZSmErfxWHfDUAKKmhobJ",
  "key25": "icQq2N4Po1dWHVaAgZQJm6cBjn2e8Ftg4arhYkY3KdU8hpqMNFd7SsBvnUuFi71qo56aVHzXCS33Gyv2i76jdFY",
  "key26": "5gAaM6eQqL99tx5VgiE4EGBqfMq4pzFKvhH4vkb2V9ZoUDYwBm7vT1dXWTa6o9yR2JoosqVVEJcfvXMGUB9ZPpaj",
  "key27": "dvZcwhsh9QazKU5RFShxo6nQgsmK4LNYuRfXR1vnnFaCi7g6GmLPJ9X1duKtiQ5xWCvDAEJgEJt3WCudeKjwd1d"
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

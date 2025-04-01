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
    "4pD4NvCZJMVTV5UeZ9pjTTEcKRueb2y86BzEYV36Rszp2w7TXQji1k85voERZmSCAuj3r7XySacUF9ahskKnsNSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tUHmg2znvffHu4tsNeFekGR87M6gzb9ytBi91yYsuRSwXxJD6XQz4k5NHUSQ8GvvsaRrYPBvTgcwkPjyqoMRQaY",
  "key1": "4EuMuGuRkFhgsmKZPGBvyqsYy2PnL2YVTwqjotmbFe9a34HwxiQPQ6A36yGbm43xPqQdc5gxcNEVJqaSJgceCnWH",
  "key2": "2w6tHPxEuXPnQS2Tsb647JHYpgQwAEWNK98Z9weGsUPKb9KRuEVMF5RRL3NBSVzssU2PzBL1ni3kMakjtUcyhZjG",
  "key3": "he6rdtpYVgjJPpRx48dphkh2bkuo5AnQvJU5eKtgYimfCMmDGeov1Raj5NUpz1KLmWGQPeTKGqfu25b8Tusmjcu",
  "key4": "2EYDm9uqLPQC85SNxqVVfkT7AjxiSnhUg4duy4t7PGxrqUq2Py1RaZXNDeoiqqPszM5tbLQm7NWKFh2gvav66EDb",
  "key5": "2gJ5zairKki4v1rHognmWooEJg6uu5abeBiUpm9n6VpxtqMTLg96D2AXJpkJHY4ruKmcgLBBkTJkV9S8wY3A4Rm3",
  "key6": "2CfPuVfUx5JftCLAzEKPgdwbT2WT7asr5pBHCnCMDs3jeqsioQJJbaBPWrfrSphiPPGhNdoPXp4vG5iaScog1ZWr",
  "key7": "3nZrguJCiAxv8cUZRFshC1AzgDvywtNrXj8WUBsina2BXoGgF4oU4F6hXBNc4s4xvn57H2yR62GddrPjrmi9LFsm",
  "key8": "5JVaeHfUG11NBQGSKrFtyruLQdiJwD78pJiB5ruYzDNpzK5nXnmWjUi5UhZUkQKooF8NQrAs8sNfSDDr4SpXNpsE",
  "key9": "3ii13aATm3H3nqKPs6yvqtTzqs8kPXcPKjPPoV9BFCoNPt8e2DS7dACUHP3KBuXT9sg3FLqgAusriUvvKFPs3nzL",
  "key10": "37oqY3K9T7SKhqh9W1UvmpzZ67S2NNC2fM8zuGv3tKzRuMiq7s6eHLYXntxJQAKVFac6zMJ6uLNGiYT71g5jGoU1",
  "key11": "4fmEDL6HFMaBj5ZZv8R4o8wrQ6QMfa37sWnfSeJnfBHoEbwGyD3dPemGnStY9UGPN8KKF4SkF3BL43gJihbHvccj",
  "key12": "3a3rL1AHS6PgHh7PH9JV4bacCRwKLVaqCLJxAT5chSyBgoZdM85MyKHsvcmByHKzU1sH9tTtwgeFXAgCaro2L82b",
  "key13": "VwTjXq7d5qYH6wU3udqFsFXwy7ZH8CU5PTqPn3sshyy5ZCgU7vhpDBBCAkfhurNks5NY8e8kgwMqCnxoY4jGWAB",
  "key14": "4ceyHXWnwghKsxfQVzX5k5oQMgyiVD1NHggov87EvVHgceHXNJMQddKYBSjDUFTTDuRp1ydxFqt7bCuA9SmRdzhW",
  "key15": "4z5SW329DKABJfSpcQTCNoSZfSRBBepHKVxU8MFTp14D8k52MCzkUtrFMkH6CLDGTk172qZ5i62RHE8r7J399jQh",
  "key16": "47nuHfNXeKH7tr6BoTZ61u9aydtWhuLFDCr4zjgNokC4NTufsp42y93rV8UiLCGnJ5zPpiXjdDsQPzDEo8vWXiQa",
  "key17": "2T7715TsF7r8VwrJLn42TutagiSK8KAawGrQu3zD9CcaCKbEKPidezf4E8roxFPy5EMx1cvRLNUJYgVtoBiQipEr",
  "key18": "j1ig1ZNwwJsMHpkrKfyH4xCeqtYbgVg8bavUD1zNRCurYKX5nobEWR3KFRk2iagYpN5iE9RDWRAZZcXiJNk29Sp",
  "key19": "54yu3xrxyVbykmYWzzvreibQ8VfFMKqHuauYZ6FBiQJHV3gWe5gwso4oL3tVpUkxm4qrgnqUKgGuJbCdotZsphB7",
  "key20": "5RKoAKgyJucTbf34pZxR4TZknMPsX4DExcACErkZt7ghtpngKt1xYorHgSXgYL84ecowrMPZfksEcfK5kGp3ShoZ",
  "key21": "4HgiPSBV5Mbw35an9H6VK9BPuW6xWxyH3UtLyRbpNmKR3wnMpTTLdrNRv4VBS89igpgesKSyaLdKjYK8j9HJAEUw",
  "key22": "3qbsUvF6sQqHgnTgszFMzZ9Kbkrn1ppmhDs8q4c43s8CXKsdAoCfXrZ6naLPNE3mRUtrZCpZwnZWHuegzeh1GZDn",
  "key23": "xTZzKDDQm5HLrdRPJkeEifttbm2PYArb9XjoToExcae9sqW8wGPXJ2dbHzfKxvebEJtV9E4TH6oNtEw8zNDW8Xe",
  "key24": "5pqVwrUhfMUxsbyZjxPm394nwAfT9y8AW6QJw72ctBHjx9sx12dnCcA7ULJQ96C76sKthWZ6LkbhNWKoKqwqHGQp",
  "key25": "4MJan26X76gfsVXqk2gjN8axLaMFGypky81KD7UTwHXLxNhqFT5AUXwnaN5cMyPKK6V91Gvp2Zbg5kcV3Eh2Etpi",
  "key26": "4Y4Rt8BmLu1PkKPTXx9t74bkouFxbetiuBovtYHyAA5ueRS6ik8Hj2MrkWaefH9YGKvXMSSNSNo5jgW5n5ftBJg4",
  "key27": "3UTFw1C992J9k7W9ZaLwP2QrKEa5WYwhk3oQqaiuW6JJE9M2fctJ47ow96S93cBFkEXteQHJEaWevUiQqTvQ3yLu"
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

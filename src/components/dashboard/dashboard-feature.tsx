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
    "3xBwAFNSapBCcgYyffK7mnbHfKtsnG9a9CTx3YK2siiYpK71hTdzuezyUeVizCbSVyegyE4zqhHXR9eYZSbSA9CR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rUW7SveYP9iFjEJcWcSUjkzF6eD8vDZJxzSk9Je8rWTq3EG4k5r3aPTuNtJzW7BJteC6jVSs8dtqRmpfjNuyzxb",
  "key1": "nNPVqEVKpgo2nR6R6u5zZ8WHJdoNq59wiA5KqMSPtt8BE4FeF63L7JnkiuwoBEBcbrxzarQu8LDX15uFMvJY4B4",
  "key2": "41D1CfGXtoPRsQcY33C27bp7tpd3Pm9wp5n7gW8pUFdz6pKyuWbXUximm93Ue3vjtaVwWyGkACLdZyzgjyzbxUwn",
  "key3": "WAqSNVD9jkG2HWyvPdYyCSGdtGpttAWkLJ1Ms66VBzFFXChmpw1Kt7ZhXy4Qyczwsb2gYGbxc2DukwuivNctew4",
  "key4": "2C3jUVBByPJgpApaW4s9zVzqeEYqKWGbsCLjdrZBAS9v8XqNLk172wTt5dpHZsS8Lm2hPsZQmqjzc47bdqCYwzM2",
  "key5": "54DjgxYh4p4N6Bj3pGNswYSotVHADNUCx7f5BLSxxSCgMYNtqrM4nFYr5xejDpaXpq4QWA6FmMm6NoArX7VmDwET",
  "key6": "5hdXGEmLLsxeVPUhrLSrZyQnXocCJZcxvnNhJ7PHU1yqJaKRjHd3FuwSZo6s9pFsqVvjZ2KJk2Cx65JPz9UmVr6t",
  "key7": "38eXdJiTVWcuMH6JnxUbqwTeMEmjHmY8jmANYjEnfyFvRpYQ2AriFt2gjVXSyYQ8FYms4RWC1cVLGaRkkcY6iVXu",
  "key8": "7EFQqDJRgdVTF4JMYmZVBbes1NgY4gMTFiXKaU4cNFgfh2ohUs78cTZy1zp7R4qD87vomuB4YsF49hL9sXXT7Kf",
  "key9": "3f5Lk17dT7x1GdharLewgyFDQ92sWa5iSdLeMUGXWwu54dTLSwioeyRna4uNG41yiMYPUzs41madaKbvRq4nqfZi",
  "key10": "RZACRkKZrMdsFVeQ74DmvKGnYHH2raag3r8SiyV46wJJcKMSCx4WSZATD6AVuv17NtQg9CtjZVvFHVJ5vQW3yuu",
  "key11": "5oCGf8QC4VhX6nhENwpZEZYjjEncCdsfEvWWxh6hatSmFBUNY8eVhXBb47NQtf9iEZroyW7vMrq9eqNCFDjCtKGj",
  "key12": "2Km4hSLitRUAnEchcrRaS93Z99tnq2hFu493UZ5udfegL85kRYSjWFFZtgzpnp2yekDegd28ze6MbavbzAsW4DYW",
  "key13": "eceVzHxovKqyC5mdByNnEN7TJpsEe5vTCo1t8xrf3tYbvq6uuGXFAnX79pcpCHKoFp5vGoQtYGAKGuoPS51CVHc",
  "key14": "5ZLfvGhTnY3eJirdtT2rofpZX8tD9n2N2Lh4z1LU5SXovRL5C34DFMAjAh33an2VJwKyMtxdc5khp5HJSZcLhfzS",
  "key15": "4dqSWEb6D4jUooBDZmL9x6he8MMb8saVUY6mtNKTrA6SDmzooLU9AbYBrPta3b4xfCwihjfEumChDhHSM4eGbdui",
  "key16": "RcneEohv8e3pnT9oCFETYF1dvZ34Q6wPAXTtskGpMh2tLFFfzsu6bNPzFEiQ1yYAaCFE63u2KzdgVpn3XYAZJJk",
  "key17": "4YqibF1gjj4oDBUvt17SU9Unu2WXFBtShcQ6DExUjsctNaFpdvetgptGfkNSm73C6hFdJKejEsTjPMog3AutJFJh",
  "key18": "5tsN7mDCdkKm3RzYfYvkgxWEF3u1wRmavENHk3YmbgiYqxVQREt2skdsR7GLiSbpXrDEWMDBpgs8UvpgYEVwt3He",
  "key19": "5N67nXuPeY2UJx6jhBG1EM8zDgvp3aKdoRfbKtRcajJfZVQGoWgEoVVxn7kwFgTJ5dX47kLf7RajXZ8junRpZ8zV",
  "key20": "5GvG59WQKT1sF6oxXU3a5zPGGcKjqbsfCmtY4oAd6CfpznkTmcoUy6MTQ3KvzP4F9pamhCABH9SCJQ22BfZB7oG8",
  "key21": "3qfF3Fj9fHCSaduTnRZ5McYk3NVdf2DmwPyRPiKnLx11aGUpmfBBujBLHgTwT7WqH1jKCmrdxiSkCsNbUiLJsnxB",
  "key22": "4P1hBdeB8Jbju4pCS6tBUhXY7HvZ1tSFyicBMZftJLFvr4CRBDNkxxJJGHFp8rSbyX99ofy29VQecsajn8nSmXKg",
  "key23": "5mdQ6hR5iG5CbREdW9XGPrA8Wy6DHuh8hzQ3GKXys11BXDs8d7hdzK2FoNDz6i3s24TqgGeW2tguMDm634AHsu9T",
  "key24": "2HRMG9WaitFq4ni68ZLDX1HM7iADwWZ71NDPdkfzJ924T4fvbaBUeZkNCHPgYc9KuwPdSkgrCaZjXY8GApq5gq6N",
  "key25": "28ANasp65ueUFrXKkwXVEqqkrADT9nkX5jLax3yHJCAkuYHVdtsAQKvvzipfkD9ZnEX4WFn6QsAm66Q4xiYZ1xWY"
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

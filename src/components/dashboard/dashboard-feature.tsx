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
    "57zbdj3s2su9cmaJxUDLRruhPLjTgHMwys77eSHZzgX9WmwKcrtk9jRft4byPwLFhn9bj6H9fAXbBERuNvDixY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ATBrnhqX8curmSww9AwmqK5GURaSCyeeEgL9qjbxv361NQ1RUe7xiHphXBxhJVn9ymzd2AbUPgoAzRwAAQ7uzpM",
  "key1": "VKLxuvm1exatFeWLsgBb2tiQwr64ME9N3sHEgySaEqYfMfiKvzEbjDtZmcQTH6L4kjX8g9ALwuLofCNhoTpFRN2",
  "key2": "5RaJopyShxUEHQHDz7hjj4cYcq4oHREmfb3QzumGLjR86D6NP9BcDwepZAdixiXuD5Ri2CNpSufqnUoGGtPd1eGU",
  "key3": "4GF955B77WmBcpT4ntSkjRMKZnKycG1WmkD9tyCdKAtUJLhnPWAZ6LCkT1UasM6Y7yJBdjTvbULSsg6tExLvNq6E",
  "key4": "5ZPwpeRpshTbnswe2v5yP9HJbfjCXLB5rRdEvNP8mtm7xFP6KJd54XuzvN752KJgp8CSTJc7wfUhgWgpfk7pyVK8",
  "key5": "5XR1R5bMJh4uDzLe2JMM4fntKc6fBjdCNiDuraYuSJwE1SDjojvUQre8W7AN6VeAtDwZdNvUH3yR88tqfwM5z73V",
  "key6": "5dLmsrzDR8z1BhbVRfN18ZHBEVLPeB5ujuFQvSbjtDXbdyFZLd8BC2Hu96YG9HK5JJ2BZZfr5C1HPLE1Gvpj75Te",
  "key7": "2pySH4vrmFxZyaRdtyv4BfRGqbdbGue2Pc1kpgERB8shXCk2XPK7s9k6ktjQmNqVzvyoJjbXxQNTzjxNpRFGpCry",
  "key8": "4DyY3L1Ai4ZMGqQtfyUqBbj14ZdtmdjgRG8KYMNGM5fCGQG4Jv2bwHyKfirwrvQFwv6GSqV8NZnRbzFDg66ZQGV7",
  "key9": "5Tjv6HEVvM6SVGcFb5aDKLT7usGRjmfQkZuk9jWTsM2LGytiTmvjQidCRHazdxKjeREhk1JFegK4ejo6irrbLonR",
  "key10": "23Mcq71hPjpzeiqDcwnTyDcgrKppa1aPM5XFRBPmofB74kpMhk8qCNepUNmBa3RswcqY7HYWveL56mLDq2B6RZYP",
  "key11": "4dunsTZqYKfLsPhzFZuGLjEervyrVWDdTdnNLPUXXRCGibn5SsBnGrLiGSxoCJPYrM9Tfz7jkxMGKMRH9wqi9vvR",
  "key12": "4ubrQziLQukv5DLVbTzQfuFsaRsNkV91hx3MKU3yKRHCEoJAeBRjzxeCvTrRiw22bi9kkumixwFvcG3ptyUQBUge",
  "key13": "R48dH3wyau3DbobF6MygaSoeVyexSeUdbDj2P1ah6chY4i82Wt49YSaVVKmi2en9xo7mWKiUJMWcrL3WWAEYnhe",
  "key14": "3TpamUS7txyJYNsmtBoNHHCShHhsWZfLvDg6PPPR58jQcPeZw7omn8mBDXWRqBVShQTA7TueYthQHd7Tsm5uue7q",
  "key15": "3i1Cc6oy8ArjewDipBdMHiyUo5wv5RX5DGs2rjdtxB5hSVKx1XYsSUngyXPRSfP2w7b5zW83Y3UPfafLdYweFjTM",
  "key16": "j3pxoWfLnZy9KsfseXYiYSDiZUh1ywFkYmZUrXxVZtSG6Ggis7ZKHwRG6jVeMzRAiFFWVQSB88q9WwCmxX87kea",
  "key17": "5sa5SWB5P8BSLj9ewGbDvWiq9T9JxQGjPeAbqs4oU9TN6yTkiTLHpHzBnXoN632yUswgCpnfVoKLcovVB7cKeC47",
  "key18": "3SavuRPhrQGMhE47EVxAFy2qn7kN4kxUjekaJ6abKTzpAuwxSdxNGbsMYFJRvKi1uDakWoDroXdo4dhjckoQGRTU",
  "key19": "52ESQxPfh3mQkU94UtpBDmxYVTVypivudtRVvJbDo4qWhRrhRpsdLAfd3jbnU8NuxCd7uNs6brs38wVcjB35TUdi",
  "key20": "TngZief6V36X2zwMwc3ynYJs8GCejmwk1GRi4f57vFqPkaCoZus9UKNJgAeoHpQLDhZ5TCcnDVF9grTFJbWWxjr",
  "key21": "3CzhsR3y8PTm4BL6kTR4v8fcxWUFeSq5PibtXfnJG4hvC1DMVJboMNj4rov7YVaVrHhMGuafqoDvpZQ8yCjV1GvV",
  "key22": "4wMYS7JnP64VeiD7mcVtvcvBkPQ5w1Gak5MjLzR22vBX8JToDkcwLcpxzHZCy7v1k9dygcFm5aFBa6C8cybouaMM",
  "key23": "2JD5BmJckg4xcZ8ZBWtG3txaeQpVt4QegKpP4y7daM9sg8fZYJxLjSTxsqNtZrsCKyHYoYXFVAEV4wBBVPAkopgK",
  "key24": "vrAVsJzPysVHjDdwCkQbMxRW7hNtsP6aADLfpxQG86pfAx1mcNNCZUUeDgAsVoC4GtUqdCuSweRm7g5Xzzy1aME",
  "key25": "4BXpppCnt2VNUML1PEUQiiM3rrzycdqwowxcSVe4RmCspaqUWuguGxu1fbczuRXY1ETBrnDm6cUdvXhwqLQWArUC",
  "key26": "aXvZCMEGajufxh56zx9JQ8ghVE3PTweijpmkMEyBejVZ5QfXq5YNTNyKFohLDg3xKdLFjH4JPKx6FpehEXqjHRP",
  "key27": "5VL76rw4uAXGsZ75H1Ww4gxHRwA4xdnGbcVkqSAjyGGZoRvgr4QjF9m3rzEBFxC7DEDHQFWRXuPFPgfi1y9yfVS7",
  "key28": "5vh4hpLfDgDWoFUgmX3KgnsntAstE1DQPLxQL4iKjtMLyNQmRqqtavoZW53hDyhSynTV7XktL9Vmonv5ACjjXakv",
  "key29": "4FBVssFWAEc9WdGtrvZd6EC3Zuq8vnz8BFXGHX4Rzx5dKqSp7HAkawzg8eEBBpd4WgzSxJvKc4n1ZEETSvC8zvSv",
  "key30": "36Cn7Zx3V23wVA1hRjx9b5d9KgHZHHTDgY86goprjjG9X9AvBRTjxHRaBJhWo2i1CB24ECphqrp9vzMbJeAuwizQ",
  "key31": "5eKqsxGMS4FTddK8VLEWEwrbyPTvPmYbCJtBBhCgXSQe2dBiZKrGb2JCKekc1NHbtcwtLqCYtmMaRcvqisMKWphb",
  "key32": "3jtspY5Trrpr7YtkA9jXzLafLzysA8cpQe6sUL97j6goXDHbrg1khNGF75TPrYhWsPyMqVG1rACL4AssjkEdKSh5",
  "key33": "4cU9KNsAWm7Se9JWpcvrc55XTMC7Bcrw1uHMcjnVaHqTr4uDLcDiQ5272vZBha3EvZd72ckWHjmCFhKM7X3rRKJG",
  "key34": "3r8RsidjFGx9cdVfqT4vWSQmDJovritAUDpJPmvyKoxzui8bTK33jF7NJTJ9jRsXvFyYs6iR7CGkBu8j9opX1es",
  "key35": "45M21KUV94NVJyEGWzLwuwsfhJ5d96MkBTJMcDed1fTytXRZg9DxHSZ7eMm4tXTkQt16MB9GzNiBaG1TYVtXCAL7",
  "key36": "3qWvys8haZk6oGFfnS5XQVYc6LCjDuH5HandcAKSRHhBYctSYXEdMJVBF3s6iYDkhdyLkfUVkNA5svjYx27s61R4"
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

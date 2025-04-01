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
    "2AMEXFhB9fYnUAa6Hq2zJvigsJyW6wNSZS4S9WJ2hAGpXm7yy4g4pTAUnZkMsCEPhCzHXuQcyUT6DPin3KqTKZkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PWTP7ovSNRwgWZXNxtro7SrWf8fS2DcS8Pu44YAX4rYc7minfT7VbCGrsSX4x5JKnFERVp38nioLAfBgyk1vUjY",
  "key1": "5FUrLuxRrwNgSSjMrXyLkV7EJXVVEM8BMX8ECgFJqNC3VGfYVcRvF1T25XoCLTtePLtSWgzQE6aebKwFVuC2DBkM",
  "key2": "2Pd1hUA7bWpV4cih4hi7U4Pmy4fLeAQu3daQnZgrkokqQ2jAemjJT9cgHmVxkCeyLZrYB3UbxgkDsxDuebtJ6UeF",
  "key3": "fVKdXxYcXYYf4Pxncx28EtwgQifypv6JdWwgJxtxd2J42xLhdmzx1VsPCozPTZX6b2FNdZBhh3nmhMehRv54rAq",
  "key4": "2bTs2YyXzDj24BzbnuFyExMwEeZUeS5e3wxbjy7fn3Wh3axN2wcXUK9s6WRguuNoNtxd9wzRqcoSuUecw6xAa1SS",
  "key5": "41V5ferVk6r56aadzVbnPYddDBqUXt4ogA7AjBPSdyN9JgrFVH6RzStpreyyqrvWYCcXwwxNFJ63urZKqZBXAoAo",
  "key6": "2BLU5iZnP33NKk1hjHnEvg3vHF6xK2Jbjx2JizciuC34cTvG5Ezh9H26wXXpWK6eQvfsAraBExpVXn7Ls7MFH6QX",
  "key7": "2FNseoLvqgoVrmjhkzuJ1eeqqNXJPHMEBSQPcz2QDU7U7doRRGzj9ufJG9162R5C4ma1qWhZx8gAbppoKihdSHJK",
  "key8": "62e2hLANqkCKpUCFty6eb3pBzgvjDwhfahr2bBGh2FeHZJ79SthiVbVU5drFsoNbt7zR9MhJLangi3nFRz54FG3c",
  "key9": "2xEwNqQSFoGdhqkhzrYpBGmvTmySW1dWWwav6vLXVyUrQoM1CEybL35AaAQ1EbCguBzBZ2UBYaASFfY5uf8f6XwK",
  "key10": "5emo5aFXE5vXCavVHLtuw1uJw48KwPCAEoEjFYWF4hJgD9XZiBn63LHCon19tbd4rJYYionTZeeMcF1ZqnjLCRPP",
  "key11": "zoXoRXwDSGspZqgyXoVkNA5SDjAnSC6Fts461de4Ky3dWuoB5ePrg7Us8GgTtm5c8E7Nvui9tzNama7WpJejEpS",
  "key12": "3WdbSC2Z1zBD6Uri5CFpYXLLZVQjhxSKTuwJxrN6Egmd11pzUybWju3jdWJXrv7q4YT6vxhHYYiB1VF7eaxgbYpF",
  "key13": "4n4SVEpFPKkYoVfMcPx5rghdfCabaRaaSQ7SnapkW47wN4ssa7Qdv9k8w9LDZCyuMiCgAQLvWFYxj9XK5hqLMFCT",
  "key14": "2jNLgvgc2PwE2Bt7rpL1vAE52XeZ7RCXB4hDVTqNLSPWAhrsxwMnbAXmcQS4jAYy52RgYzQFSsg1dCPcEjKne6WK",
  "key15": "5dyKXqsof3b2LbiEUswmoZfmYWSngqtUsq3GLv2Cuxykv8ZW7mzCZGpjNFppyZWv14GcwLxRKs759iJAtvMRJdk4",
  "key16": "4qev9nxomFUNgdFXrVuAXGuqzpc6MtvdADbMyJaAqi1zbBfCm5jgBGauHAPhB8D8FyYR7L69UwbTXBYehudCmCYY",
  "key17": "55UjMhYpuqizSjLcyCkhkzETf3PNKE4s72Wxy25aXJNLHVJ8eGeoi6a37Fv3S2bG8PaiZFSUUPKGdNzRo3owk54m",
  "key18": "4hBFjZ5jWSmUs5RXkrpGQpWgypJkVFq6JaDDDkR9jWaZ9a4PhcnxAduXmj5ejG6kYjnomANzKZkHneHTEe9ikGg2",
  "key19": "65fXUK19nCXYd7C1SWeGeZCo6q3oRPKx4PEeYsVZsNmGrMftYHoFjVPzFkfn9ejiFYJetiqqVhYbyFBeTHvPmdzL",
  "key20": "Qjx7YwZrRWRViDva6KjJ2ywUbYKJv6mdivFjyKCf5EwYPvQGpQT3pxb7HAc2VZUGCkvkiQVsVgxWtPWJPqapiLY",
  "key21": "5twoGGdxaEUJH7fKtKyjzW7tv4B4aJwVN9rVG9bJen1BekEAbW6dYeccaLebxvPf5zcSfV4MHeKQVUJ11UfjWCKy",
  "key22": "2MRDxJdVpkbmZXkyBYQofkKvNqDPrH6wHiBhJKX4Ni3fnwkMhcxCKhfHE9ZEH62JDKAQqY1wK53VLShgBrUFXWDZ",
  "key23": "3YhK2XGZyGmu8mE1c6tBN1voN2Ec8VabxjbFFx7KiYqb2m81JaehbhJmBWErLV2Uwi4ACu3FEfH1yDWf3bAhqx97",
  "key24": "5fZBS4JakHyEzt3o1dd2QuMNkXianq9N3iLPR7uzdC21anrJrWMjdC9YYNiEikZKK2e6UFp5kHsAadzXVy9whqd5",
  "key25": "3Fvz7TMWvJZRqMC5UKrLDT4C1zDP2y5yi7TMLkegzWJ5YMZoQ9tq7RpTdeFPXoeEd93ScTS1p4zzUa3PUXMa9N5W",
  "key26": "2LXD2xxe2FPbA95h4VpvjP1yXQ5xyCUVQPBQ1f8DPjq85kvsjc8orY9F1RMF7Ajt91GHiZys89C8VqmcsBTmy8av",
  "key27": "4xnL3tg5stn1YdGZpTnxhCaBEsWHyYtSqRC2dvxBM76kWrqX6CVYJoyj92o9GKmhnuyATANtWk9XoaMuyPAYjd1t",
  "key28": "Y4mfe7jSRpdF4HqEGwFGrcmYL3P1feXxaWeKBhYtHN7ECW1RpUGfYCZPFSzvsmE7GeFaTVNJBEfk1debDxUyMs3",
  "key29": "4yGijrjeUjMAFirhgvufUVUy9ZYLCMVaFxesdKWoHfu57efbnERBvpjULcZe2XLgYxYDHCx8uqiNoVULwyVbQKUS",
  "key30": "463e9JbfBgbrPi1vFuQMc8GUuJj2868zTK46gFTPSNkcwHo7wBp9cSUa4yeFZdL7EbReZZfUkzuJDtdR1F97KfkC",
  "key31": "36FqznQFzLuiqfvvmwF4ijbwXjGSJcWVDBVhZU1VgBfXiMXua4UEG9jbzyfhZc9af7EMxFE1337i41F5V9HuwCQ2",
  "key32": "2NT9P3TabJfbnVVkJCR2GRzw8CSS2RUxxqqMcoT19FsEGoYr9dqS5WvFSRAAWrPitAtx8gzDv3npdd25AmvoV9T9",
  "key33": "hQs44eJjFcYkf1zeM6fYDZXxKQS9eEfmTTMQJprnXYwfn4FVKu1FVqEPAueaweRFP6yn1rHHHE9Y83YeyUJBEsP",
  "key34": "2dBAkjDoG3FpkHhVX3gC23vZCcRVXzebzZhK82AMoe2K7SQ7Zq1Tw8KwQrvRVJYVSqQ7ZAdBdLHWQ9CVmbaF9TCv",
  "key35": "3436WLbrajKfcwcUCDqp2WfZK9wX6VnvFyCtcVQhDkGTS147vC4kULdKn3YnNMh1qR9K5fvzGEHc2bzxDdVZeH39",
  "key36": "5445hJXswNrtHZAS8343NxafcWADNQ3LPCrCFgrYu2kTBYZmQDwFKFCenFbtUKbHsbQDsAy9vxk1nStVxdKe7Cwc",
  "key37": "28wiVKxiLSFcqbRAun81oxJ7s4QxCSzVLPbTdpiJrtfvjnKRZwACMA7G4CJaMoXii7mCpmiha4kEcEykFoG1KMjf"
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

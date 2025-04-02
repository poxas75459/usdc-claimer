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
    "5YXo68qQFhkrSRJeoVbY1pRq64xnfx3HjW63JUPvRLhPQRYgHWnrEsfFZdrUYauh68rMrQLUbG9RWjqMkZWEDWG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FHrbytp9WWPSRFKzfJBDbtBRPcXF9YjQ4mV1uYVJUxJQTt6VbERsSPC5twBc6cUveNouARqpacPgqSZtz9iRbjb",
  "key1": "4zRD3ZbSscwhqyNeGX15xSW1t7TYjpJMxwng4TdvfbPLfpMiuMZLttKBqatRXff14fbDZbUUGJ8svXeFjHbqwByq",
  "key2": "52o5VzrBeG6RKJc4jjnGgsUo54RChDv44d1XtGeAPW4Vhv6snZJ1udzBhNqbQ6QXJyBrERpKSHu4TGRzpw1NhQ2U",
  "key3": "5XiTA7X9ABJ8SMuG3phKgeu1LKmViFU6PhC6gRjVUp5J72cCjaw4gPCGcyP13Jy494FwDjVyS592Dd5iW9L1SccS",
  "key4": "4LsUeuJmkqZGjPmXqwpoFYG1PGKgSDsRGNBi6xenoJBjEF8szw5zpPmTajcyLqnZ2cHUZvpy3ShZSFiR17AFKkyk",
  "key5": "3D2WuDSqNBTcrz8xiCZwgWgYdZeSeV57n3PsUongs9WFPuLmEvTqp2o7FfxgmLzpfo3eVnheQjahe8SfWcxCSaWx",
  "key6": "HPCB7PukV3ZKhQz4A1nmSKFydCGC9gtFigoMqhvGXwytQ9QSjEUvcyxa2RbNjSB3LAEHuBxFGzMoZiiqDPRJjzp",
  "key7": "28Uw7tG2KMhewWbbUftemeWLrVRuN5GQZBCcXovHFqqxjpo3o4UL5cQbu3kqKGHJ5kkMvo27hF1hVBhBffcKWSqE",
  "key8": "3gzvmXNnREmSPjosFJ6MUkivjg9h5393wmuHYcLMCXDu3Tp7ymgJXyQg5dQWdhXnzRtyFa9TZmnUdWiYgZJzGkTo",
  "key9": "Qs5F8UjE4SQp4ZvxU22yVL5gvJr9aPgjhCJ2fwHAHLXEimJWccfvfcCdd6VUcsqq9GriXi4CcMP52Xwd6J8WKC7",
  "key10": "5Gk6H9LXBHXrswztWQo35UT1xLaK7awxHXc1dVP9RhnN9H4pgdUFQZwTu4B4FrGhXWr3FDi5BDPTt6reBwC4qora",
  "key11": "5rahQVc6x3k3zQAk3hDCVm9dUfdzN5AktxVx6RNUuy5AKKaTqE6mNATsUqKfwA4NkX9oSNVsWxagXSJrXRepESCT",
  "key12": "5dSUve8tYVqUQYmY485L888YPNra22xw6Tx14wNtjrcuxeehGjiqC3UJcePPFrNq3oBBUPZaTM9uZbFfe1whNY8M",
  "key13": "4WYkc8LcU1V2LkgCVX8ZdxQDxrd8SGkSMFQUGrfckx1mh4ppJnVk6PFhDhuxcYJR6VvLVWk5qyyu3ntESJPjP1Pp",
  "key14": "4dHdUj9ikCECA1FbS9RboRAVj6GmrZSK7AXvj3q6yzzw3wXRvB5scnCcAAev52FKqAzt7ufL924qcnPfHS2TYTH4",
  "key15": "C9WwpTCxETDRS5XTnjrBd7fmrSGHqZYVT3BMgYdtKLehWL9W8cQf6XrLfFnhn3UCFAzhmhuvrxkpamyaCqaQTTm",
  "key16": "8m5Xhjs1r99qLHbZHZvKhZSeKbAHaLwg6GzjPk9sKEuk4dV9CMrqetVhPT9fgjNidgFdBCwQHUrSitt8PqpX1JE",
  "key17": "Bx6THDNi9hcfkYNEoBeP2mitmMFEhkwDKzewGeeHXuAp3bFKMpwJmb1J1pdV6YS6rGKhhhxwcZa7XPCJJ2Za195",
  "key18": "29bRqumHXjcnvhPwL2BUomkpmpo77cbuzU9tbLNuNpMg9jr3nFgdqR5Kq7o41xLJ1WqhH3syUq4NVnE1rMmtv3XD",
  "key19": "3ek3tgWwSb8VLxmLKyJPqjEwzxwEeqYtHdjABndMWWNiGyGLdrVr2ADYtCcwusDkJERpjYRTkJY1uJynCm7Bmxrp",
  "key20": "zaVL4F3apgF4umBpRfHiqX3NxUP4EbcDEJkpvMkyfPw6CBvcRMHVp3WsFB9NuUEpT7DMrNwf9evGKRVnTMRWzBk",
  "key21": "NWdRkCT9TmpFzxZ1YQ2XQpSCnE9JXFGWWuzxGdj4hMKM7xUHwz3YEnpEcpY8pDr6WgPNWzekCjM4n2kHKmp3Hhb",
  "key22": "4VGUkVRGNCvaSySaoDfEBgV9tpDHEaQ2KFYSByeFiYAry2xBaLZDtEeGiLBwqrhH2UpG2shf4x3sUdgs9hEq4FM8",
  "key23": "3uT6gZznvE6qWeT83RKg8xdWkdKHEC8K7CufSG1BuZbFYGdNTJSGmfYu5ZoBbkfcRjACCHXZrCZQEHLfkdwfwHqe",
  "key24": "5j1Eugshpwok54woycdf2mBotvRz6Rx8XitrrP69smfxLhmBZTDMzE86eupB6UBewBG6i1UcXqbAtR2x8dYqqyYs",
  "key25": "Huo38Ge5h1KJFox4JN3C4Mv7qxMm46zrUbGN1zeozX5pxCK2dF5f9FR95wa93JbJt6Ly1ySM3APxxL6VTJiFY6J",
  "key26": "5KViDjo4j7HuPZqqej1DJ1JsrACtMUUogiTsXquDJe53iyidN9UdsWn5n6sPXfqyefWAS2QtFUsHSGuue9HJ4PnY",
  "key27": "iaEvVuUaPjLNaKasYTppMugiCrtHRGjS4fd6gzWAyAa9iQHYjhAeWc9MjxsVVdWVsoAkdJDEmXXPdULPq6Ftv9i",
  "key28": "8mWoBBiSqdwiT4gCQ2U7mbTwPkpkgtCjUTm3wnDQ1thNbomwCrRWScvP6HQvocdV42iJeM99xzzaNexSeCt56ew",
  "key29": "3CtJG6UoiPPqp6Tp47Hfhao5HLCqwfhyvVXxa5rcqUr5T3Usbb3bZA4KPg4sdKMewMqoXSFd92opy1wDkaummVdH",
  "key30": "61Au4iDnK7iGfHkzkkyv48iszFQrfdWPYfEVY14HKy5qeSuJhLPnF5dXoDmvMXCQuxmG4v7fa9jyi7DQDVPc6N4H",
  "key31": "4J8U1qr9juEf5MQGrD4H8u3F3HcFqzsbSQGM9kTpg7LWavxy9rxdTDKnsTmx7y33ojmE1cZXhu3QvnK43a7wmrX2",
  "key32": "35bgLBeemhmXReCwWXEPgn2bFNwa4GCBKSJ57mrxuaiSDRGZQxLYGMoBCqpUX2wpQgA8rdLXvMwdUegsV8PSyzcV",
  "key33": "3tUJGfZP6EL6S5iz9NgjYqbJs282ACzLdVvErw5YQ9hCpNyDCF8RWMbci7kPdQEexL2kkUKgYhPDEXTAWNBTSiA4",
  "key34": "2Ug3T4SLunirF3b2NqHZUhs56TeMvpv4xQwERzDRS9AqW5JsrKBW7BpQnRzwPSwgt5xXdg6fzuT3gHdSyw9obn1c",
  "key35": "38je9ePz59jXdEktUWs6PAmnhbMBWfLiSwTdJARW9uui4qHDG5qmah7FAwn7TCUanKqQv2Eg7Mfgu4Sf7G8a995",
  "key36": "3rBcGGNxMCBZ1ZmrR5xHrPQPv9cv6KXU4VdABU9d8NEXszYWGG8Tcx6niuzsMBtMooQaFomPxudivnrTkDHpE3zS",
  "key37": "4dKu6gVVXWCSfsncRuyVc1tUXaLUaK7S7SWAhbd7NWrtZFfwUVh5X47gJmDfJf1uGfEAWPWv3fhosCn2jujX5qHN",
  "key38": "2ik1GeZQfNcGNfM3sM4SQhVYPL6xx64XTFzs5AGdJwGJkkZWNEVZiioUu6jHYShgr1LKr26RBCqvBqrvMK5oVZoB",
  "key39": "5CRBMH8hpykdvsYV6E2LKLBYSu2AnomTCbkdm259B79cYUD91qyNsJ9doGXteo3u9wYbj9zYZkQbTtF8ibbCtJib",
  "key40": "pbK6ijJnT7YUeytNSDCjXq3Ze9sRgQobu9nSWB4ec89GkVZDFAgjys7JEDoLaY3oNLugbajvHYWSqMLxLKVoQHP",
  "key41": "2ZiRUzD5SPVTCmymDWwsjUUz1WFx3HkKAUUojdokFGB8DwuRotVyAZRaEquNLSPSfEGTjxHwzLjnYQvbazcgaLx8",
  "key42": "4uRqDKfRwrojj5GtccXQWh4PseBapmUffKLmkrcgRsUQpyFbfFocqGaKysTE2YyLTq3ipYQJW8uBc8nZ65KwZ9CE",
  "key43": "5pPPD54KGYfsaiNuBXg1Mh1BYvuPRe2fzA53yE9QRZgjPyHMjiVSgPnh6P6qBfc8eKtkyVvAEAeYsD4GiDjSq6vJ",
  "key44": "35FDrJ6ECX57hpFAy1HhFH67fT4ivL7mXcpZ32fCfKzJwihNYU1TzVxWmMrKFexp5ks78JgnBJUscBzdXztL8cig"
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

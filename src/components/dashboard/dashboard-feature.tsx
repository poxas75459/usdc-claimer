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
    "4JomJaXUdvkU3GRKm57AqaZwfh5Yk1AzzqouDFtHkjGuKSXFZNo4QEAxzeSMkXVx61asQ8L8118DtMyzk2yQ4hek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxWn26DSb6kf8NbFcC6uAaQTmLB12p2KqvyR3McDrGf6qf5iAPKffqGsyzxwJvoLsUTJnvKXjRyCcLmNh6nr9ZX",
  "key1": "4Gixxq8nWCVZXq6e5gSohpCE2YipLqmkinuHfVpJ6CzUzSPQmUvz3aLJFHyi9eo8XbSjHJQGsRcuskxHWybkY3ga",
  "key2": "4XTQWvpJg8NvZjfazQ3PbMtg2tqYdWDM5Kb8QEvpRhYbmt9sCwtXc97HMw9yNLo1Bz1fY3NMRZLMLiLBfHuhWv5k",
  "key3": "5zhP8ug4LUSxFUnXZphXXRCZjVFDxHkxUcyAuZGjrHZrY3ZPQNn6PGaHguYgwieNHeisU86yuiMgGsnMngFHXabt",
  "key4": "65JCJZtoznAiTck5LVKoYV9ZgcpupSgb5C43zCGGujwmcw2pP4MBi7yizXAAFVFA8GrSZPVw2D9F1MJcgUsHenMc",
  "key5": "nx5tcMWWEs7qxCSxcmuhX8WvWerDS7ApWZTPggqf6iKWeHrg1Vs1LJhuc5TLxrssce535zfLEX6uv6DBdSp1uDi",
  "key6": "d3v4aJkZua7qAnZoFKndTwq5mMCDs6uzv5UfGgiHMrADYwpPrKa2PedB8KR4SQVrHgHQvoz3zwVYoxmREbgetMo",
  "key7": "4SiYH6uyZZ4uduBNsNj44P1VML9HTQW9qBYGCQZM3yUoVy8JHLEPBEJsu1NWTr6zwek3fA8nxTtAbz7x1RU1QyAH",
  "key8": "3WRzyJmrWmDNnvysqDeAq7srvouEN3YRCW9evHEkqdt6YiYGZBSziELpKjZ6yp2wEF7ngpSo4RkHBco4dr7vTFQk",
  "key9": "5VTw9M6MDGZYGxNY1uW2z81wQUGCH3Q3mfS676pKRvLkBnYtXg8LNyAbT7n74PFef695FTXRccQjukfXveyqnYmG",
  "key10": "yENA3bmRW4Uq7gCs9VUD48ebvtf5KxhbA92MwuYisdoeHZAGDU4EMhckBWqa7bWB5fHcnMp91bVoYrQfuHynEzZ",
  "key11": "4RegCUBhwRi6uexWHwGdrifytpxoHPr8o8FPUcmP6gUyPojsnGfvPftcTWbB3uaWfKsbMxaRepkhPrc9GnDVLk8u",
  "key12": "41vVivnUDsbLvaav6L12gYG9vpcsU7f32XZGCShTDEDkqSP82WwW3wzVZ5EcCB1yjhbCCaknGiyYvxwpzRhoiSwt",
  "key13": "2gcp2bkLeaqjE6RgH5nCiBJvAftTSGn3Lgw3wq579DfUawzrgvJZRrCYCMAuMpd7ezdQd8dcvTyUpwCiwkhdNz83",
  "key14": "xDGbWFqEv8mfGLB8EboBgVBETXECcHfjQ9NJFXz7dQ9TnA15H3DKZi2TvegXrXupxySsAVfuUWi8jwQeBN8ReEY",
  "key15": "6FYfD8bggqakQr5m7Jayp4Rnkv1pwQytDrfzKFQm2H1g9AP3gRUFwyDryXbdCxsyqE6t5y6LDLws7dBQSdbPJaC",
  "key16": "4VFpZsVPXRDMpq3RsmMXMD5UpmWZ1arx9itqy8SNmzjzHKXXgDdeVymEq2trJfDKRj5PEyzmW8Jru5P7qtJymDdh",
  "key17": "5bvzGyqPcgFCrv7iLELCGaSXvRi3FrndcqDXXpU6PY1eoggT7Pe3p66P4AwEo3vCTZEXdQy5ory7HtGnG5o8KoGG",
  "key18": "2GNK1qt8Kfmo3KGh3Q9TYArh9HJkhx6oqXLo1PeYcSc9yT9fuBKGBcVRncd21SJQAHTTL96jTR2yDio7KpdRyepw",
  "key19": "51DM1wEeKqe71FnrdpLwa2tZN3CuaTGo1pcU3jDTTxtG7RxgZQig2f4eVhwEZmdbkrk6mcKrMK7KHN8RNghSTDbi",
  "key20": "2Ayoa9r4zrpupt9tXv2SzUQA98LtVVEuSVvMfE8ygdzUu7gVTbHtnmCcZXvK15CNUDDMYys9ymAugogzSZzjgsW3",
  "key21": "5ixi1XkUJSoF5Zztx2MPS1G2oWH7MUe1SCXaiaW75mH8ufd5GpwnFvEST46HKcFamvcQKnvLYXnVNfPUNhxwv8eS",
  "key22": "474PiPR93sqqMzwxsHaXpS92XG42np26DAiJ9R6BzX9CsXtyxZr2a7yC7tRjp7MnZ1k3aK65VwiQ8QVbZ4N7YjP4",
  "key23": "5hhACSiYrejjrxzpJPD2iNDe5MXydvvtYM2gmnjgt2EtVQJjgegsGEo4KrZGoRDJGNTrjrrbE2cM7aKbq5MxM8yW",
  "key24": "4yzxTa3k4kR7D9P2gNxaYrntLDNtdLCSa6BQi557WrRKsWG7gVqeTypqZc4QdjJ38XVG4nnVVhbuwfzcLYwk4FXg",
  "key25": "3tHmLU4fTE6473zrECVm6nbq6SAcQ1xBr6esvNX9D7k7k8o6dLLLr9uGHrUjqL9Nnos2axTAX1b3Lv9K2Fyc1vjg",
  "key26": "3WY5z7SFTnw8tkZrx6ErGXuLMm9X16WFbfYfCSQgVdskAAZCWEKrfE5LFX9G7Q6M2UfyH9WgG8dB1sdsiEFEZ2Gj",
  "key27": "eT87J6mNwF5fdU2BatiQn93iXvMFKjJygJwrNpZgbPiDDCDWPszTfuZH9rqRtMNaDCQGd8LvpMdN1kKsxqY3qwd",
  "key28": "5GoA3PcUdaV4NZozM6mKy9PF6yia8xrFW8VqbL55HNqFLxb81iwUbwkt8HQGtvtuTSq8UkJkfUTXWdEtei2HfY3f",
  "key29": "pNCnbUHx5Rs3Q83cVjj8PTV7RGS1uwGCnEvCqzXbrh7yeD7Yo3A85xzTia6WhdoMW9dgQuLdbu2zTNQ4t7fr5dX",
  "key30": "3FdjFfX91yfayVubJoiWALWW5yvzDHPERvYAvwzgGEC1c5kiuSqQnWo8XJdGxD2iVbXEUgr8G7LGQ8B7RCm9osPf",
  "key31": "623Hfu7jpqG5JkPHPmQau4ihgvPuUrv9aFEAXscnzqdgznLyp95Ggi16nRMy7otP7YaNXD7gV4u74kzqcLWrAQJM",
  "key32": "3VRhRHh9BVeeDUsnDwt8iCGL9Bog5hW9KnVr5Lji72rrUQf29HgQmjrCZRDCwuwKKwn1qzPvLB6oCSZrSVZjgYXu",
  "key33": "3suvB5gELqFqWqAvrQyZD6VG1CmBW2Somg9tdP1KF1YXaWjeQmezT14wnZ9J9rFxKwSZXfG1cQ3mFnUDpk5RxyUb",
  "key34": "DPkDfYnrWTjyktGnvfbKFbFjr2mirB7ygqixBB3gVA1rwTbMxv6X1aAhttrzG8LUZFQRzvKBBb1EYYcNSygPqiA",
  "key35": "54XPcfPicc4DHDkiSDT77QCXTrQnbEzsPada7pxJ5aXpCp8BFFYfy24Q9QtrnH6C9DpxRCgRvFmJ7RmzX9of8DH6",
  "key36": "AMf4tWgWQMkPQm3QgFSBKnLJSxnNnZrwRHKLAv32HK9LpzGYXduLDVDMRGpA4BqTRnFt4PNvM8cbqnisMUvsBQF",
  "key37": "3REjFioC7P5u2mJoTYSNWL9q5dyFt5pSJebwnxijUqVSUaA4LstWbHYAVqqpi9CAUphRGDT9LaMCWUg94S7viiuH",
  "key38": "5vYXN415q2Xmr26NYygkaR3PG7gPJtYQQxwQJj8myNDpNsHAAvMUwJEU6a1hszWRMr6QgEYkjVS957kzHcmA1rdc",
  "key39": "5heLpL4W2dF8q7UsbyRtUJJq5jUMe9yebbeU9HQdCh1k3gyewWFa4dgpUgEbHNnQZ95K7syVFD4J4QXcmBs3GFyK",
  "key40": "HCvYDRZ2uyEAM2Etm4a4Vkf1YMg2FrWWrS1r8WQpGFGKSM75QRCBXdKjnMpinguptF9Sv8Q25Y3gxXJpmff3tnM",
  "key41": "3iLAeK5G5reeWvdZtBV9E35BsjjUbkvUtioCD2eSuSEUfMCiXJ4tw26dZEaQcXL91TNjNQ1m69HuuQ51SCTgqF74",
  "key42": "5vxsKC4FisNrm6GMkkj1YeoFkfXWrDZpDtYPtZUMayvqsMwNogDf3n7LjMx5VfkLcrLXGujhP7DhwhXv7eYs2wH3",
  "key43": "5tgiirMgYuvwomDBVz4EMBjmW6ygSbmyKHHVLbgrpuxuAQh49t6nbdfcDgWehLgdU1tLVP4FyukHKAhZZGSgfgKS",
  "key44": "2PGr6quk9m6xYJ2QajiwugkiXbVtYjzMt57UHqVL4eN9vsAmMwqgXVfCP37vjGRAjiF5ww9GswsVv671Rd7vSYJp",
  "key45": "9RxH5gYRPP1j5F1hyU2TgjiAd9HYQg8GwSGiVE2KhLKfSRTUawbQNMAA4nGC8KGpdgWJeUXRzQJG9Fe2mwBM18i",
  "key46": "5xL1ApBcChKSJ4nUVBEZ2RcZvNUwcWKoCyQXkBVgv99kBjUuVofEUApz4qMpyetLtay3hVkYnEsuHjPmk6HgwHkz"
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

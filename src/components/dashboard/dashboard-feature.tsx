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
    "4WTpVnijSHWx15ZREe5aMj5THsSSupaHJqjgExGVpTaCP9pJKWQaiQPRYfeZsQzaTkBvNV6jEoHXQNqhWNR4Q4Jp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YuBRS1hHCdW1T5vB5U4krvYexLmMWpEqUSA2h6unQCY4EUxntjrgEqF5tGCCv6qheuFwypmGrSZqkhF2DiT8Lmc",
  "key1": "3Yg2sYMQPKJY2gFDFfmHUG3iNDH63N39MsrPtHW34ZKJ6Z3ogh4EHcfsf33rq9zb1Pa3KorauFtmZsy3qLbS7J8H",
  "key2": "5sL3buRvMCzhbs7mwKgW3DshdGpFhMKsVLeV8iXDXND45oTtCw1ruVMYv5XexS8kKwRXGyFQ7hVUzWTAqCHWNEKb",
  "key3": "mgHR9Z6nsBMvC9GuBYUUN2EwnVZUw6Lc6DL4sZ75vvuaFDM7ZskFUzvgAHy3dY1AnHUYrpDBArLRh6eSzBZFVvA",
  "key4": "2ejaWaD6na1Ke8yQvHbwMwKX1BaWR3PRahNmvFtMSETWRGKVy5kLYxc1SbDFfzEPBqwwdZVFhhgofSoXzE23L9sr",
  "key5": "5MFDufRnYEhNGJUNE4MY2eS8s7kk9NiYbJJpP5P7CjAfPMmuJRaxwgxqCnUsJUEt8rYriAD1Sbhj84rQQq3idix4",
  "key6": "5Y4rs2GiAKtYvkQph8rbGGNyinUPDs7HiqoYU1RsbEX8oafDvktZyK3FqpDoL7BsfgaakobDSqAJhab52Xhp4B5u",
  "key7": "215TZsXznoD5xcZECdJ4n9KuzWgkw8cjfAGSNqZuqC11J9FZFunT1eR9bVihrG29kb1svnzFk4J75ajvAAVQsWnG",
  "key8": "2FZWx9L5B4aoFmQeGBAurEDowpRLyYeLM9w5hHBykpUqoCx1vq6XEqy6Sw7yCGfDM7q2LPokXJSKsqM2BwY6tqKL",
  "key9": "4SyzJ5PNTBoMWpRSZ8hYLQLZoqYcqh4ipAitPhacX7DiWkSdgcxDoixaTa654VVe8wRPMY5Yo9FtZBtjoyazuNL6",
  "key10": "4g1ZcmLCt1BeCoVTXztYrcs2AQuVcCi5SnUqBAdvL3RTUYNxKnG9wDchQXwvssY66XXpJ7RkuY1SpyDyxuZY9rdz",
  "key11": "2MRN25q1vEbiTwuYGCXd5hqBdvsumLCNf5tz9nTArAB1MbLRUjciuwoo5NRbYMhTmdhrpSzxEQxurzHYNkcGbU5v",
  "key12": "3awdmuFewGY6tAkfX4FmJozZFVkpgD2ThRgzTVRHb3vHB7drPr8bpuXtmcGoZPArEPAj7gnNKGMM7nmue7vXRUzB",
  "key13": "6VLoNXtcsYwPbnpmgJtUcb5bL7rHyLhEuTRejndUpxtPUH24QWvP4q7KaDnequPeRHW6CJBJon1yH78y18hbAsA",
  "key14": "3UzRabmXav2r7mbs8PmAWEKB15BVgYnhEmyeeyXKq22UzcCq4dM3vLdax9GD4FCd1SjJ2PMUkTgXxnXLMY35xxyf",
  "key15": "fzqfRvTHzhFMsHnW5SF3gFYQTRfWkajWfSWX7BrY7GNGGEeFsar8nkw4QpruehWSsv1GiCcX49PiuwVGZcKHWbV",
  "key16": "2GDQPoSAyRHHXCrRbESoJGDijk6pcFzvcZ2oPZPyudS5rhcVjPLvp1TJsDPZFAjGpGLWdhyC87FUjFs8SEoUmMUA",
  "key17": "4GwPw4FZiwrY2PYHGfScqmyHzzyzjdhVWbmegf9PmzDQb8JgdUNXndijnKSQMBzkNNXQKY9JhE18j5tkazZHunch",
  "key18": "3EqP9541Z9vwsB4ngX3k3c3dws4JpUQjwmWJLKBp58g51RxFDqTrJ9fZJBsXcGD6GNGGrJBJysx8wf9jYy8w9vr",
  "key19": "nN4L6qQx9ncnUhs4U1bGarHNusn1WchYLthaDa6H4YmEgWqttguqqA7PUiZEFgs9RXsqnu7noPACEDR5PRTEQEb",
  "key20": "Bq7MmxApHeKUnwBNHcaZFRgfA9wQTCxCT348UgdPhwgCkrAzLVzf7eT2GhszfxhRPuMKwfKnMvXtQ6gNNcJnbou",
  "key21": "bpB629bvzkTtApF3PpMoQqywbPbwbzCmvSSmKd95DYhbWQTafjXr9HE86ruE59cuf7KLHkQCXATiyUJodnUBaxK",
  "key22": "PLtUuqrzd7KdWbf3kArpXeTGZUqCxR5WPg61JHWAj5GnUficbqGsmhej9FSUk1kaC8YA1mpyHYeBPSkYEHksg1Z",
  "key23": "iDH7zm73enQqBB52DfL5UJSbRCSjAJxG19SnFBWE1VxqXmUABELTHcCqKZ6uvs79FpwHJ9zjsdmMZuFVozt5pWe",
  "key24": "2UsaongkTFCYqYe3RTJgYPN1H54xyZF4N7z5tA3fwYU7hdwdJ8MBFGsWGTj8Kz3HyinSnuFgdwgzWKbVZs2QpPxi",
  "key25": "2tsS7pVkUVX93MGqyXiCYuhUTQ4PQqbP25Hx323xaELfWmeqKi4EmhQXkB6ZzEaV1FjC6u5xWSAqMWLNRbxXDSKb",
  "key26": "7NCVHUTwBa3m8hZyC58dHt6NBRALi5wpix31U2VS147t5vfceviWDNPbVU73g7UpFzV2w2GPreKFhijrHRRNtwH",
  "key27": "aSCTTgaesH9LgjuU4JCzNwd9z8eXyHmKaF5LZhNNmJyqxxUEhWiqk6NrAuVDX1G61pc1J6YiwJTZcrdb7r6TtJu",
  "key28": "61HQrQLFYDg2aLX7UQ9gRQAngdVuxxWjZumKLRAwjayPB8LJyqXLf3ANKLsjLiGsBuW9gx3XaQbh59hjjtDN5sqV",
  "key29": "4bRUKDq2TB5JJB1dXWqqbEcqf3YZarSmDb87PGrNSAcC9nsN3qrf3255Z1EuZo1cJZxrQhovokScm6Z6NVYQGf6K",
  "key30": "vynxRnMqnbCmxdZR7BQ6DRCNTX1SuGXzjKUBZdvw7MWFat4NhpLJEEapQxjUZpakAwq1pHFDd5CxuzXLoeQvKWX",
  "key31": "2JXH6NssUwmzvdYu6XivKKNtH6JXQv1Kzbm9KZ8ks8QVhkgLHe6MfAZWGGmDLAmekoN6uo1jh6f5LScY9U5hzSa8"
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

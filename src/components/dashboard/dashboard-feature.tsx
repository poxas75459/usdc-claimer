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
    "52brB2NiDQvvZLkmfybKXgaPR5WYy17H8GRYGvvoJJdHGAL1dgBd7QmN8oJJLgnCMKDsZPk4sWoD7zKposRAiquH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFCM9KUpnKPnDffA7uBGZ13getZqjuWeR8wMku2mhK7dQUk2uzTs9J3XRHgwiMzxnRuTzkooayp12GryGRzK7tt",
  "key1": "527Ai37bNyGtM47poRRYXnzuHtLWDTzD2NEKRqKnhoF6KKBtzErzFuyHWULdZRFyvXqRgnvifs7naXbA4abqHvJD",
  "key2": "DtBYA6vbGfHMzZusPGPaYkbicQyFVxdU7D8ewgBkQwBdMoR2iWyM1BoBYbXwn5erAPRqDqtdjssAr4mYAa4szXN",
  "key3": "5aH2R2YP1E3W8T7Ekq4xM3MkFrqkzHZXrWBHhDSwcYErWGGAS2BhqCfZo2VMaPAKj2nrfNgcEtij3CJQApVUeTH5",
  "key4": "38wjrWeHMQ6GpAg551swY5iqx7Sy3uF5WmrKAM6kVPvPT6NkoPf4j34GzpcmXAz5uPyGr1GzZuQ4ivG8VqWUiNK9",
  "key5": "2L6hXqHrgWJ41iAMVaQbseMCDVJSEEyUeUdWcXfPjUQsgqTWkSsE4qCGawGNA8pt5Hrv5Vyd6W4gR9wJpyyB35b6",
  "key6": "xdMSkDphzkDmg7HSv17dQu64bGsuwoib1M48bov8y7tXMpszeHBpxbZQ6zJGdrVD8NUxGWinqc9uYCJVua6jiiY",
  "key7": "4zdjzJwZ4Kseb4JEuDNnANvbNaY1Lsrb7R5YfkFN9dBgzKArtW4KMFsCifjuHXB9MBgxendMJnVNUU24mfNLxeJn",
  "key8": "3RJ39n31J1jDZfXJajwrJ5Pxw7fgEEfLfYU25w7jd2wiWGEpAEiGK55wR6xm2hKxmcfG9ScoMLmMVJ8mm3Jr1edE",
  "key9": "dabtEp6dq9zGhNGFLjcNcRbkeaTjLFgUFnmAyHVvDw46zVMNodCMAUDDCazwAWSrHGpZf8krVs2HAW87ffiS6Qc",
  "key10": "3bJWPhUYC4PqzUSB5278doFpBBHH1n5cd8K4UMcHJhtpqKPi56zzJZBQpUPu2mMnDepixmQiRC5wdeFtk2bGc5cX",
  "key11": "AjXTEWSYq6iwiTNcRLLWXjPFkBaX98hEp2ZqPrvjBTbj7aM25XGcFUjueSfKfvC4tKfuxgyqhzzPgfUyEVPat3r",
  "key12": "35F2XbBdxMmsbxBeYBdJMWbhkJdsvBo7mtZbMZzY8vASyt6McP5fuyQczMHYCn84RXUPHwqoCSi8GdbGHQA6N7Mx",
  "key13": "39RMwzbKQjoNxG4mU6JNM6YtUkBLk6AfdnNpA4uCAYGKi2ETmrZqAuAaFikJLVMqrNR3UuB6TnXTyWvPgQ2QUL1C",
  "key14": "5Aw3KHxSDDpesvgwyWgiC4dACdtBUizhY2qR5UeV7M864nKCoB3G9XhUYvhZijqH4y7VE7GN8SimdSd48y3PVp7r",
  "key15": "3S5rHk4zTvLMjAePrEU4NKk7jAgY2oBTeTFf4wFaXNFLaQA1h1GbZfHFMFcPDizEoU5ANZdyYWNFzFs7CTcGZVM6",
  "key16": "73go3QZH17gpUxaadSxVApU5ujCLN9ACQD5GS7qQsixrCAKh1X3dxra8Xt2fMDwsNHEs8Tp1kUzJFDbcV99rYmb",
  "key17": "3AubwKzkM4gKxRz12bNzbvkM9xb4LcmeJb77rL6ZRCRvKYSssnA2QnZhd4rjWwV7RRcdXSQQwp7N2VhP67g3v5Gp",
  "key18": "3qNNRt9RvWvYyRbHbQJ5B5hBN4rq73esAVJDp1YssxvEjpdpRvu9xgD9Krjdpf38nwFoTU7F46gwkiXscZuVjxA6",
  "key19": "3jWQGGKXp6GFsTg6YpdV7nGYYzbV9WdDpjVejfEzGfVv9EvEzJgCxE24MWF7CJJaEhZrMfGJQ1wf9k2eEp61B4Ey",
  "key20": "61X2ncNePhWHQQYyqGWVbCBuQunYPjSEBkg8QBojtgQtvQM8JUzSG4kdfJNMu7MVxX2VujBFhAUieHmeyLv5rJHW",
  "key21": "fdw2DEUNaAkwYHsvbabZ94DVQvfVmjsuovFytaszcgocjju4jX2KLEkvaW4pitXFDPssaXrhSKMVuer2RL2cAaA",
  "key22": "s7k1sj8KVFam6vQg2QLwywsTBoFHptr8YbDgg1BvnqtzPmorAcWtoyjq5TAnzVUoE4N4EiC4d9pyh7uQakX9rxJ",
  "key23": "32JkoUpuf9QBehWEwRyCG7DQexpzkTY7dNXAq9RgceYUncE42nyg1Lw5ctNDey21NWuk5sbrwfzsEwKCRvrBdQYF",
  "key24": "4WnywmbXCK1Z5eKgN5tSxC5ZVaMcySufUyQ25WYiTdC4QtrnafZAssNZZ8X6aDcHzLeBTfJ1MvyJQhvH8oGcu2x6",
  "key25": "3KxMywpZTTZdEv46gkTKNqCgYE5HpAdNZrr3hrPDxKE9tBRcSykxhxSuGv4fSdFg9vXMwriJCSm8EEqbr3F39TMc",
  "key26": "3Ly5UjU9QJx6oaf46PGzFagRmgwg243QCmMYYC2eKijvVvSNxd2atbJSZ5dWxDnnXYCfQJdzDtQ7jyMCJVTRBSnt",
  "key27": "3C9xFmoJTqT82yygLXZa4gYD75MD3sgmkDU8wswFq72CpASoHkQGgHt3gPFpg7U3Fc3q8HVFVS6akP4aKxKddA1t",
  "key28": "2JvHyUh5FsCMCTRQAHRM5vAAgA3QyBPPBj79VqvPQyvBJsf5VisXT9jeCCxsGy3Z4i5gUr3SSJxhooosER55tnC3",
  "key29": "yk5Ps9HAogFvch2xXk6hAkEFo382ZU5VbQ8WEK83muFzNJZPPEDjzRUoHyx1aPpg7jv4w9PFqU7fTLhMwSVQed2",
  "key30": "4rcyzASZ7mgseAfkmSs3Q2Z8rvSamF5rcAfc47g4fdcFN5HR9ydo1HTbtYvEhQwYcpDzBCBNgNC9gcEpHEWxXrwR",
  "key31": "55HTvGNJaM1VEihTcDWqxCGXEKhX11nTyYseTRAdkEuw8w7Bcug6ce7qDnskkFSbwfbTqhFnUJ3HdrMXt9kbqjcT",
  "key32": "2pvDLkYGkzjs6S28sfNgK17SWniQFPzVFrKXcbqgzdybWdsu3RRJyNftT9eFq5J8XhmBiL7xNY5uEzxfBMfBUYzp",
  "key33": "2eeBadEUrHTw7SrtakMmBjeJCQ2jJBaLRCcpvck3ntiYx1KBxZdfqpjnDE1jJncdbejhfiBVHdpHuWKhStpzgFKe",
  "key34": "3LS6neKMzuMmpE9KuTtUAQSBBcQ7kG7LEvvAWF8fuvqoDMptrXVoSSZuuvbhTJe1RnuNjoUFv5MsXaWpmPyymAME",
  "key35": "2z9r9iC93e3C9Nd91p3EQugJCJa7fH2tKoodQgvCgP2kCNURQzuwJwQh6sjdLCYC4Pv7tv7Xmhh2gQiZsFcUWg2k",
  "key36": "46ae4Aaw3oJ7PwRYqLxuY4Bfdg8d9SCRdkQJfrUFand1hvy44yXPqZ55bNa8iJMhV7aZQK1uBp9ZmrnoY9qEbhDd",
  "key37": "2W9Qs6V4tYfVuWr3ndTyJwvhPMKEUfvCm5VvnfwzPBbELpKa6M22NGpsxD2DZP8CtVT2qnB5NWWdWAYUJpb1nwvT"
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

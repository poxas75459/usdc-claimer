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
    "gMogJ6vS4ensKnba2Ejtwm82d2uFnsyu2HkyNAsFGNesgVEFQ74R5Qe8RH6ttkeLvwnuxYNCVHpi9eUVWTEye6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iiieguaMthmu5buotajbkKxhz1TyQuVxuMEmcg5wa1C73ZZiJo9HLau7mEH8TEpdMnxQjf8Ga6VacBviC1xpcWY",
  "key1": "4QxGjFDwK4ZwhoGC1akKy8ssEJszJaycUUsD7Z8CQ2gcybgDYgcL1xryARyxBmr1ieLVzYSVqmWXXxm6rvDH7hXZ",
  "key2": "LHozrFMeMpsRhD5pGnoYZBBbcHQYorzcNtH2BnENpp2uq6k5qirHzoxrQJtGWG33e3kLyQUGWBrcLkzwHpmEt2f",
  "key3": "2gk1QsJ3Gikww2ugUqwzBLgshZ1W3tp2RtzrJW6NrUAWTQf78856BrQeXF9qYyucsshPX8LYPRXAZwNmS74QJdfB",
  "key4": "4asQugNTmBBmTgjg99ASrnq55b4TKRFN81LzGmbWnf9B3NERJcBz9Z6N4WwaqMyVf2VkBnsoN5vhczrzQPhZ8bf7",
  "key5": "5WFRGDbNcR1aNvUYtVuFGFZQ7JcXMnhAyu1DnuCUoJ6Z8DJEUoJ7Zs6U6KrRURNQL1wzcfWXtCVet5RzGQh4aXm4",
  "key6": "4th8oJTHuQFN7SQHz4oNJf4JTcNAApEATb3MdpGPSKznGxGQWD7GjFUC5fqmFwRho2ufYe4rt1BASYdxaunH7A6f",
  "key7": "eK5kVxeu9EvoAuz5dNHpAGfUzw5fnK6S77UEhCCoHgAPFpDBdvvZKtRq2oWinhTZcyVxVAFM15ZxKunNiKgzxSb",
  "key8": "5yPjwQ6PFJt7bC4BCkzwWV4QunnGsWfiCMVX6yg5Q41GryDC7BJ6KojsagrGK3BoV42idAzSN4PYN9GJrdSZpeZp",
  "key9": "3ujmfx24MtTjSb5fk1b2Z8DnHRYQRamsGs99ZpXscBAfwhQa7Twp8xQSz8FmbzX8BqKSkEjd8uzDj9rxTyTv6Wps",
  "key10": "5AQfxiKqVJahJPdSJYVhcxSWBk8gMPmeA27Ac5mqfEoiuwnD1ogJaQEH7YbixDv9v71EwfUo5YddDLZaKijVdYJL",
  "key11": "3Fqv3iVV9tTchVhWyeG2rLwD5HSbsDUkQwsNaFQoMF348zM89aur4JBFLSUeMp8SWXjHxo2JsKbkiDB1ub4cZvqX",
  "key12": "2KKkkZa4fetmgGvuJcmwE9JMqo5CJSWF3cnp9wQjf4XQ8NpYexpSTttuuds6pTpCyJSU2PSePgUryRTjsPrtbLu6",
  "key13": "2TnieXsRuNFKeySyQtojDQj7DUZiYLdzi6a5AEYLa31MJFbTtFhsWVfwySpznCQ32NRqxX2CffTSJF7co6MCtoDK",
  "key14": "4DRx3hbS4nSc3zTd2D7ZNeUA2GF8pTPrhBKSR1tqV2iGBQWTnUwvfMHvk6dXyFr8ApLH7Ku8REaW4L9LVmGCgKWH",
  "key15": "2gvCnaydimwU9rfmSq7rM7Jnafm46ibturDPZC7vbQcniq8v7DHd1vKoedqtBEP55KVjwQftqiCXdJxezgVzY4XR",
  "key16": "4z5YBa7rnaPb2NEYvP85mEwkrgbjJVBgvaGHZb6YMfAK41r1PzBQFxecNbmFnyDwm1k1mhDFSrtGDbaTa9ypJD5z",
  "key17": "t9q3BKc7vEQycYNH4FmJM5GGyWtNLwC1SvSxN5SRw8PYKcfzioaozgy8Di4rXNq4mQPkbUa5eCjrDWiusPnR3Mg",
  "key18": "33mrAcVMxqLvCMu7yPtrHgPf7LyE2Kypd8bUfVfdhTqqM4xiKVCPNH6S1EnXvVRetZGAgnNrhghUE2aFqv6D7Ry9",
  "key19": "4tFW749XMa5U9NuAgU4zvG9FDowHzF5X71Neu6tFsPq6od2a1BFNqiFW4QoMmrBDZ7yaXAYoRUD6NpWQDmo8GY5e",
  "key20": "5g2Brc6998HSCgQYWZCV2YUMZnH1AHihWpaMt3vpCtTvwhPpXaFbGxEc5THP13LygSvWk6ByHEFA649LsswRFgPg",
  "key21": "o2jzTBrUxqFG8HtMbR6PAhWVHCcCxjrnJdbuATbrTBrCxF1tGeArYM8ww7MR38ddBYYBykyoKTDYfb5TDu3Ya9S",
  "key22": "k58jjhP9M2JzV92UfUmn1qiyvA6jxDgFw5UX5o67uaP6i7cxXu2FvY8gr3CAaJiEFHZ8KHioUQeKnxETS4JETeV",
  "key23": "wD5bWKcxWPdjj3x1jTpVJNjHvBvLiLdmZNVfxg1HRn4VTLTbP95HiiSewP4q4FQmpi4DEf4abYsZxbLFSTWJM94",
  "key24": "52hPfygwcjXqdbBgjorMxHJpJLpbUFS52qLF6wFfVmm9qNGX9jjXQd5rMxDnWMBH7hKppLec4JySKfuzfBJGoG8g",
  "key25": "3qCHkQnfpNq5jZrYqMXvm16VRnvTBfN3V8mDpWBHhLPZhAD2Bp1nTE39fZ2zuyfGm495M1PMrQZ8goyHsZcWNKNA",
  "key26": "3tRDURatSzTPcHJTQaJ1ogadixTWiB3Y6AmtKRhKPMdmuFcchLeNxwUVQxwThELjUNMQnAsGHMSBCxna1CATwqt4",
  "key27": "5GwZLPAzwmcyR152GFbRtpYdhiW1mfJmgkLmJEEfWvTA4ps6T3sTCKbxPS2FneKpMX1pRuZowfJKwHN9Z6gcwUDG",
  "key28": "65wQet2C1d5624jGZ4iuPh5PsyyQYzfm9BUudBabSAes1sdYtsShRUDUXT2NaQHi1nNX9hyoRJ9pbP54Kjf9kTZg",
  "key29": "4uZ5sWfdaRZdWFzj5EzbZAt1SLxG1s2q1SQnLbWAqFGXht9iZoC6LA8REDnJPiH2QaPyDh2wVckkaAeJPTDmP1xA",
  "key30": "qiz4EoCMf5jyFLyku5Hv9VbS3NPu9us9pDc9kEvir4QLPbLT2tBCYyMj9LpxW1KJgKmR5GNRgh5Y7yckZp8Z4i1",
  "key31": "5GRDNBvA4kB1VWwP3kTdzyRXrZGVoQB8LspM1M3XJckJNuwic7hy8js2NtH1A5ReqyK9P3Afz6CydUtYPyC5va9r",
  "key32": "4u7hipt6iAbBTw8pJk48WE2tciTfKUpgqkiJAVZFGRXVM4eKa41v9rtRBMqAM5r4R9ru5pmVgT7D5A2PCRwivvci",
  "key33": "2HRG1G2guytZiLQe2phAvrE3JrLfz7CuvG5DuqFHd1NM4FhTSLfG7JeoVdP6fz3FVD9Z8GADKsPETikyD2R1KKTi",
  "key34": "39kEovGAxjbJi9EWLXP2nsz2g2cNSw6znNWFCKn4EpgcYhBxFZGsmNX1k5cur3QVYXqzhupCLTGg8B7yxqocqVYF",
  "key35": "8N2Mkfau9BNwqevGnJLUDoRnquqQb487S72JYcwwzanTwPKWhphrayMruKjZtZoWfwQ6sC4LPGBLe5wtib78SB9",
  "key36": "2ZFrqSAwwFXZv6uPAM24kgP9M9vYex5FgND8pKbGCsAZoCGsC6Lek3EFNWvem7CTSBGbUbu2otxyEHmU7gHPSBSK",
  "key37": "FQqsX5MgfK4mQv5PkpanYMjJSYxRQJxoYyhZqXDTjEEHrNnCNqdgZkmxPEAAZ9RB7x37Z2DX4wWSf9cJu7Y2MRa",
  "key38": "3nyDiY7ZVcULv7Hrvctjzib4c5GumH6XnBmjiE2MhSxHjaZ4dpj1hPbS9vXmap9Px6cqjhCqQjQ8hpRPLfx28Se7",
  "key39": "3dbbr1TQwdSiiyr6fLjjyFVDXgEeKfgKMJtQX2cfcestHbUFBAFz9jjPX8KSmZzyTKsxVY61DMD3NLEKFU6UEDhD"
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

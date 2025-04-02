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
    "3RJtoHMAe6PXhE2HnDiqQYqnyMA8gHfexarvWSiLyDoMW2SCCxFy8zDyEtEzJNNWNUrS5hCZCiHgHRL4LSGBHud3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BXPJxy2Qa57vBiQZLnJoZkYA5o4eekSbrjceufzM95qw5W4T7atC3iryFkGxkKHJxrm1QShWfwjdQdwhdpLGy8s",
  "key1": "3GNwPzbbBtRFgnJ1nc77rSXuZnDiyNDtUE97XdqS3wbJhf4q7fCq8sC71KWQRJYndAtgahoVT5NrqKaa3czhFyjw",
  "key2": "Fn6PW5ckgy8rrCpyzv27QJLdXy9kDZku8ZGcR8UhKsW572vKCahfQM3uPJghLctmTadpoQeQ3pTnGK6S5evEuFF",
  "key3": "4Cn6SM4h2jcMkGx6hL9XmXLVKJikU9wEYNYTs7Wo4kxHMwp8cfpeNVjo4LgS3eJib1red72HEg5iuxUJ52xNzQkM",
  "key4": "2CXxeyWu32gz4ddnH1Gef79A4dSVwKZrx17ijDsm3BRcAZSWAcYRZwPQKNXBcjrQFwoEymRPJ4yBt51ZwAMQzckv",
  "key5": "4QpxyDnv7on4mAEXAQkC93x2K5TDC8Qn9Lx44XcmKqaGNmvrQJeYNTJHStczyfB9Vc8vo2SMmVF4qkQxCx8z6RJN",
  "key6": "5HYWGzyJaWGYW3V5H1v2PW9Tb7KxRoNXKe1Fyym2UEbXo315t9njE7m3ZxV5XYpJZbWc5cc6AsUVa9suXEvrsL6h",
  "key7": "4xnTFSKzBhJzdcvxBoZeukrSvCy3AUp3rhRd75JyLNGidShHxo6sUgsk2wHK68ntrY3eoqNjoKpvxcF9hqWsMsqw",
  "key8": "5BaD9pf3ZimNBC581bZoREzxK3afmJKcTwJD2wrUYMkq1CyzNUMh3hzfdDfyLAcWQCV39YEZrN6nEUEvngF7Rznd",
  "key9": "5Kk49JaGsroDME4gmA84doU24XcaTppDhPDRMQntn6n1iPPvxBvNuujDd6MrH3p7nYQkkyM6hoUsxn7jUBvuFsoD",
  "key10": "2ZTAfb3u4NRHNfKixioX6Nvd8GcVnrfsjosaTmJrxSXYyNZNuwZbGsJtWrMuaCfNBgFCeHmKafR57cgjDdCBNiiE",
  "key11": "25F15hdfezSJ32ohne3Yu3e92RitDTEo2oarXMFQ9WkjL89P8fAX6b6bEmX4XzqLFEXGvGdYYxF5tso1y3rMUJGM",
  "key12": "3nEm5sjY4wDYesDJYPXeVQ6eFVfwTGSkyXN5hPQZM1Qu7nCtTu9jNBC8rQE1rHb6Mwy3jAtsNw7rZHuGdth77Wa7",
  "key13": "5DRS9gq5HeDM7b56h8fMYt76eqng92nQuxcQfpaz2cFW9yTkc7QXLxNTxS19UjMNMCaM9dhZtYC9vw2e7yTbTeKa",
  "key14": "4rdh1Wt5cvc5S6kVqNbskCPrD9QBEZdMLJRPzhUVY6JjS7iaGNqCpwM2AMb3mETaHragkkrRaevJVde6L2jzjznS",
  "key15": "EUMZyxafsMX5xuCFmrVygxgAuR9R61BVgFi1aZRThJfCAGKTWmoA6SCivAAMg7H8zZWkxtsa65jb7JsF18jgC6h",
  "key16": "kEpQ2TpRkD2GNzpoai9UBhXqn23huuSZSuhCnRXts9Ffh1PJ4szNcnifxt98DVNm2SPxNH5QZkfrqNFZhkmefxq",
  "key17": "58zu9Qq1C2V94eP4VrRkckHFq75ZC4jn3KKKXqTSfoQapH15jE6g9yhLjAjSbYipTqTLLPnYtxiSboq6XqmGNnAM",
  "key18": "2SwQTt1sYL6VBx8dEDweCCmDcabN1H6PQGUPJB13pxTpmzxFnYbYe9xi3kEnpVHyQpbbhbVpt9sWpbpkZi8uVAGm",
  "key19": "3qbMWkcxGxEPQasCr768vjojXRMhMJA8C7eEmmT9YhaLMGwSGDTF1ScCLeKkbnD2RqRy5C1RVZjHy1PjJkyB2f4F",
  "key20": "2kmoRR5eZCDnEcq9EkLeeRDvf5sZerdiNE8zu8LXwDe87D6QM5CvLoo5ZT2kpcghsrihzdNk1HV4BUXiDR5ryRuU",
  "key21": "5tnVeXKWExiRqjcZdarh4zfqKGDkKyY3hDu3E68uzCBy6MhaJgKHqrt7d9NWCfnXsPMqKmrqXcMQbbZi7rhDtBXH",
  "key22": "2bG1PqfiuCR7t8c6AQ8RV8u5QR95GV6UvfAcL3VhLcqjS6s98nAgCdMehPacKR1bCoXMbGq7dyYr3SjgrFfSuAq6",
  "key23": "5eUYeL8aMeXf5F2R3ikjyafZJWnwtjTj89AVbr78TPePJCzAf7sDfXzN8Qf18LB18LkqiU3PUVocKF5sARWMhyFD",
  "key24": "5oD3JSozDvoVyX8Yiqcc1cNbC48mMTc1kE7KGKKDob4FDiTMkDk3HnVz1TWZsfiKxaSnwYRd7KdgkTpco6jq8TTf",
  "key25": "31i7eyhN9XWksAvZPBoZMpAujw7VRin1zVPLyxZpTf5DJCLKDvyXcJugkfQQZDhKyKMDY3b1WQWvBvuteuoHvk9p",
  "key26": "5tsaqR9N4Dvvntb5V7n8kSw11vjs8FHfYFsLUfHRyCKKVPny3qLRcbqMZcE1SSsTWAXLj6iHBmjxLbcZqoFMkzTc",
  "key27": "2XRkhHXEbis6mSAXxZHoFo8z5RjSqXJxkA4vZt1MHhtRQQy12MRJbQY4PpZjc5CDdtU969R3fvDovVza1JrAypo4",
  "key28": "5QaB2UT21UKx4VJgUFCn6cGr1QfsXEoEwmnDwmLxvPmE2eU2MJhiJuCVWs6K42sgKr4QgsuxBAMBtYcxXFT4ua2t",
  "key29": "pTtRetAGpvg1sjBVAqR4N2ef2tdwHUh5vC96BzypVcZ3jCBsriBkoitX2jqpexqp1b79ao8WgVkBaJQZ5jErNvh",
  "key30": "3rpXoQiJw4xZwzPYbtzRe3zoWLZ8gxsjPzRbLqEaCXyqQ8VLhuEtTuworxK9En5hPxUt5wegr5gnu6KHLdphjRw7",
  "key31": "dD6b1R1FPfT2tZBE3RyuBgJx7QCZVFVpDC8dd31vBJ24i68fnx1T7yaY2FeXC5yk6XEyjNrbayvdCPvCuGyRznD",
  "key32": "5ckNeDwQnPBQxLFdmjP163rhhrTJsvGWzkxu66iUNdbPdRn81XYcvzkx7rV8emvRitNPHmvS9yxsw3pYMaogvPLq",
  "key33": "2Ez9Sqs1FaaMSYAAKMCXCdmVJGo1mtqKm3WypE5FJpe7jgQujLubSJEhbDef71DWap6s4fa9PK5bLfpUVjw8NveZ",
  "key34": "3yvpg25NMfjEQ6MTA38fKbCB1MJWhMh361NtGvo9WUqAzazTDFDj3hbbVmTQ7Yf1sF5D7j2G6qf6ohjBduu8CiHa",
  "key35": "4iJvypEsZyH8DPhf1XHUJWhrd6g8RwJkn1vYuAjUQEzFzgkKyoUHhqd4vMYRqsd7kcf1KVUFEZgBN9kwwZ3Td67n"
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

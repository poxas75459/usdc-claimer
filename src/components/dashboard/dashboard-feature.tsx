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
    "3BCHGxtnF3LejvoP3LMoMU1RTwGYc6hNJmSjYuLZq99PjsoxKQChRGkbKwN28u1zWvscYBCVPZm6C2Qw3zkcuynK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WYxQNreHvkmcM6UVXLuXxfU9UZk6ZYrZu2ewHdVcM9SnVfTJf6GtwehctY529CAXnwLnkLKgZdD4j6Hyqbf9k7j",
  "key1": "5s918iqHzz7zDDfcUoV1qQYgLParo2XRCqHagE98DLsxiQoPM64GYeQcvxF487aX6iS6g4KJ2DU58JM5SnhBVqVa",
  "key2": "4StV37bHZpm3iU8nbxWnyHShBJLF2LtwrYFhvkdpUbYsjimedmuVpUtGi7ZuwGHpYudHEtgS3BJGPdL2GHhYUYnb",
  "key3": "4iJPWgTSPqdRp4p538jrLiRAwZD9TBinMjhEH8ptksqTEjL9ntQ2hnr3skfBVS7DkKhfTJnsSgVU1t8RjQfmF68v",
  "key4": "5xSHdpCw5yrSUQZXeNN9bqptQSivaPgnSnRY2dRqbsR3GekisXZMV3UyFfEMivk2EcmrpTtrrS4jmWpLPKEZk6Bk",
  "key5": "2mxbuWkw59txh5798AafdT5PqFTt5CkhRUt4sew8tf6gSAovUvrm84EH6GeMNe2a5uUhFNe2xCBHv9vnUPk4WytT",
  "key6": "2UbVAGz49RJMjsoiQL6npQ4hUXfwUFYZPJDmJfeGPstzhnN4F22645xBZq28AiHAZ1QACHQYUBamxN2w7CKYLsgA",
  "key7": "5zNuRoAsXXcpixXsv4sGyrAE3AMb5FtnFvzMm74ZW5ADtDvE6hZEFrEJFKC1Ssy81FTmuduLuZQmTgNrRWq6M3gE",
  "key8": "3jyYFXii3SzBjCr5jEpBr8sDPQvxX3LmxWV1z9HKZSNLs7SbisVQfVYPJeFGEjH4XRLUGTDTYRHA2CJ5q2PXWMsK",
  "key9": "3VZpt2Rz2jEXzgx1myXeQsF1v5QHdfnAMTxGbiwnVsDLqvLteg3MxL1rAFyjfXcMr5Cru8RWZp9e6rhXB7uKvyex",
  "key10": "2a5XSTabitz4qcuYuiCnZ6SjF7nbwbPSNHoQ2mFA8ne1wampB22NbQWY7N3LMfYA8w5nXBQc3sg465vjVjKS5cWH",
  "key11": "5rURtEidqJRExUFEs7NpP39uM6rL6CXGPdVrCvZrfUJm1HEi4wPX3v3skNxvZbwE2FfUb3RJ9FUueTzJSkqqVdS4",
  "key12": "46kqJfa3epsbYkFk1UH68YUESGb9sPjw7cbXJSZ2y5EA1rrxTJRzGFr9PG6Xof2WoDk9t8RCAv2xGCvX4JAsNk6D",
  "key13": "vbs6f6ccYXqejyn2JKs2gwLpVhjswvyoTEG1UftBgMCNccYuwBYyKRA8x8zKp5RGHem56QW2EZ1EMigVcgCB4Tu",
  "key14": "3uXUYDTTsZq73WoeZERErEwfRatth48XhQgq3yLTDqLZN14hinGcjtkjqvSLWQcqEzQFCWpqARvdB4SzLg7VwNPz",
  "key15": "5FFzkx229BorvnvwRKherhX1GcWgj42vDv2vL9ADnWznpBtFCPvYCqVEDeWADMHXc6nPZLySLSy4Autt5tB8Da2q",
  "key16": "2jhtFPhXjaaNwP4mN3XcB2S5mEiSxxgieiaZzdo6P7nqViF5wmrMaqafTCXrQyP2K1uMd5SP1RUD55p1Fq6hLuSQ",
  "key17": "36Er1H41BQSz9sijveiSJaxEs4DK7zWwu8nb6vErbwgXDumyvWBDd6ua7jfwVPjgJRSn91VUKPjzjJeL772YJMsL",
  "key18": "3GUKMHhT9uqdso4m9p5q6UPBn3LtRW9RDg6UjgxYmye1UECerF7VoPJQ3dcd7VXoXkSm5y2fx55HWQLCjDJ9dZkw",
  "key19": "3gLnkGfqzwADSDDY84MfHHEnmbVDAiknSmsrCoNbRHyVVx9qDUG38DitD3rvSrjVBUvh7YahpAQa3WSvDpFxEg3t",
  "key20": "3RvmkdeGu4m8virxEqAU8TaH3nB891rCgSHwoRPRYN2qosd5wiAbbn4ZsK6dE4cWj5F4rJnNvvo4KAHV8WHPsH26",
  "key21": "34PCdiQzoJDQ7pJG1StGE3kVfG8s4xpSsEmG3UdMm1BNyeCvFN9d8uF3Gy5yyJ1koAjQJB5oe3SVLYX2wMfTf3vH",
  "key22": "5BiT42mCwYRhDCsReV3MkczdNLbj7SQGTMvwwTfSUDaPcszgNtTT5bPinYtP1hkwKnTLgCC4hLB7EuN3umUT2FUm",
  "key23": "3JVFn71bQGtHVyMXp1BxQQBL38SrKmqZhxbsJrxtSTv3mpuLEARvsj36aRY2QXBNv936T9jmWF3LUjZEGnN1GinL",
  "key24": "5mvRdby7bNQoGU4W1TmchB4dTdF9a327gHjpG1CA4ExdKhtf6piTRfGi5YYaDmQhi4wCwaFVqKdGAC55CaR4mKHs",
  "key25": "651FiSZ18YNWoVBEi3Qf8XLpjjMmK1VDJ49xBZdAPYg6jc69Mqmnn8C5kfELJEHVjzwptq8LozBrYeH568J2EDSx",
  "key26": "4Tvd8LpFNJYav8XtDWDM9dUgrnL9QMsiRFHoxJecB5sYQ9H6mSgauXhkK2r48yJHLD2Ny4GUDDiKcMtJsibuLEkL",
  "key27": "5GLy8q33ARQAGzo7Kk2uyG5GrxrnCXSmnhfbCYFUih6ewuZw9iJG375A1ZqUbFREzPFD4L5YGWzhSFdTfzhXPYxa",
  "key28": "29ZfpG2qvTw6FwkW91ebF2xXmvScwv5yiGH6dcTY6fAB7kuHRnK8XPEwJmpYTQ3KmoiP5PUN7y9eJBngk6mpqLNq",
  "key29": "2W8QXt7qLkYmwpZ7414gPaPATTLzbMJttTisZfKhHoMFySiKCnDk7LfNgoEMG7tWQ64AS4KfemEELRmemMKiB33Z",
  "key30": "3xpL9EauFL3TFkd3sgPvr7YjA3NT4ExBrvybyc7XSWeuTjjwtWPXzKVMtiHpwbvzkciY85Wnj8fjhdTvRLwTv6u",
  "key31": "4npeYJLQyr65uQJ2RxPt3DqdJ3eFfuQDfDUQPUW24NxdG4e2HksxHtbCtjXM5VG6kPEV8Qf3GdDvHby6avSphsBJ",
  "key32": "34LSjoNjNC2T4L1E63aKPj2YhVSw5tsyRsUwMW2jNFe6SZK1gCdjvpciTmW1HTZKRZx3bsoWUztZ5TAUPUDh12fm",
  "key33": "4V8SWhpAQyTjzaiogBfDgML8VmpqWNTRsxeSEKkuwLRzMC6pPViFP1k7MHB9pJVPb1aH3CjaHNVzRmbtD8bX42DV",
  "key34": "5tZeeErkn4TddKc5oapLeGFLn3wwcji9XVWa4HU1NHb4yJuqRooa5AkGqkeX1Ui6PtriL7NRPo1rB3nbFTLeuvRh",
  "key35": "kqyYxoHgcFmRAjRm4K4rgj9H4ktnFtVHuzX7yKsqUFoXX6U1DHWvjbe7Ra4Nrfu9Hiv9qXspimfb8dCE1unRq4u",
  "key36": "5AKFPc8vWZgx1Hbi4SEo7ReWQkDsromGbnzgc7pTkd9Ksk7Tzx4GD5nhFdcCbqufkS4aVDVDKJfkKobUf8yMgZ7H",
  "key37": "4kaQPcbssRh4Po1rJ3AzKSxmdShUCkG4BiM4w5KbgojyFWN66VeFkvYXBzm2YHtejak9TVZWG6XLcNHuraVNEV2q",
  "key38": "CNvWK3QJtghbotBMzDJpJYfb1q7kPxkFFFZGQU8FzH7VtJCW1gAzmtwzo61uLuPpCJ6gApwhzTGQ5KevCNdMmEx"
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

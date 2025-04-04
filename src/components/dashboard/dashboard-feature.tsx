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
    "3W4kN8FsVepgoqHY7r9ZvY1yFXG7dXTsNDCkSTr4u4rLfKPfziXCidvHZcGF3WcmfDM6CfhHWyH7nke7jVeG2PQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dUb9LPWPCjJLSVqq8bmwShUgPk5hqUq3NDjbB9QrJkyKyT3cL6FUG8KYA3mdcqWAuR3WcraCULT1FHbDZFiczMW",
  "key1": "3SD1EoC9fMEjihmVYZGxuBGtT8B6bsNLeFK6bf3Ftwm5789Z5pcwG24NdnvTLQ2ZxFqNFFmuYjgb1KH6XQAssjfi",
  "key2": "4dgDEntuf5YAi8mPEuKRsRYLyLq7c695DpHMeDPrvX7zhaSrc5uWdZYdZZfyc7KBD7xftCkXzgkpMpv1auxdsuQw",
  "key3": "4pK4uMJEkyFPpiMSR9kZ2WPB7Smi5voERSdSWD3nFqJvWqgJScPxonAhDcyMELYyi18EiZxdDDbaC47tjf7vRoK2",
  "key4": "5zDJtZhUPZdsm2KBVwtVBmGZDkCFt88GqhejQb5mt9imM1SkW1BRvB1b4G3n2JUZPykgpfCyS4vLkNh6tZkeC9CZ",
  "key5": "56PwJDf7KApcuRcbjvTfMUPUT6uKNjq6dcmmUBxuNMcYJ4DKJ2BVgJiLHXSZ5zVsvVP85Y4uAW9vju441bL4RAr2",
  "key6": "2rVu5EpV9nFH3LrEySamVExvkrkWzSkfczNriNsgkRb47kBKmEPqrXy7ffcSxRiwJ6kGpoyPTifuQS5BuLyo5udW",
  "key7": "i4bQBfMxx6wkgMB12W3B41PEb6rPwUBmiredbjQPcUSv3YViVzeJ9ay78uhU2Y2B7QEmxqnNzUrgb2BxkCUZdJi",
  "key8": "2E86pKf6AgRvgZtLnGuD9ieovfofCevxEtYF3nJhvXDnN53xkMpCX29MAWomNHqTRDAozohwTLXVTiW5ieyp4t6S",
  "key9": "581txPDkBYVxTxSvpUoUgft6cPbGsRFoQyThw7c3Srnaov9HpuZQ5LDf2d3KdiNYye1VXyEXy15vui8bLXHfm71e",
  "key10": "5Ssby7xMkLiuYWTJKigJoVeFuNivXFYJRZgw7YiBhDGo1zNZPv2s9sZoyehKr5Lu2Mjp9awcFRCttZh7L3Adj7Wx",
  "key11": "v9zZSQt6PUmpEKb5C4aM71CJVcwgCFo3tVcrFyFRXCgZLUF68cK1zUVCavyPnN5qWZ3AZcj8oSK5iCgRwSUnjuz",
  "key12": "2SC3kUG2MSTr5oZfMKjSzuYsh6dcaJcSwxVMXqUEjnpCYZxe5qABnrw3F5X9d36f4y819Fu1hKDSgf8TRJaWRcXj",
  "key13": "54PMC8gaJKKfQnr3mi3LHnu8tCjfaZ329RN8w81BSBynfx7q1iK63wNGZPxZmuyHVysz2PHA85GkybGyVEWS5i1j",
  "key14": "5pBbYiQMZYsGCbqeApMbrgH9vikPTKencHVC6MBhyz4fY7mkZfYfabJZoQthKG9jxCh2rweqhUdD6DMuiAPQSzve",
  "key15": "5C2r7gWoiByvDSziRgpzspz2g7bHAzRqY3j6GqVvDdrktuTZvuKeXwU54YELakM8XNr8e66Dt3sTKx5qKRhh8aLb",
  "key16": "24eJtjQ22ZQQ9JR6a6fc4bSvsoymwVpGfEaqQkbveKkURijrDDnLQURGeyLQPYTntUD8tCY5SCWJvD7Fd24xeN8U",
  "key17": "5yE4bum6gntsX78nNJ5eJVYnaZ5mTzNo47UPsk2gLfBBWt7gczi6f52x5jZW72pxEmTwsGtWmo1ZafiAH5hCRsfG",
  "key18": "3f4c6gYYEndUrwZqEiRaRuekDYCf6WDbw8QN2rqPhUsQAxAB3gJoNSTvmFhPh3PZdwK5z2mKeBWNqgpWeGw2d4mZ",
  "key19": "w8pQfe53mz28t9EpfwK1TRFVMW6vCvitUCLRa1UWe86CquFiXNn7sEzWEXCDZTmC44Utaoh7YJRA421WasdWtQX",
  "key20": "3dpLEvNkAyyuBZSCnMwDVYJuBXRf6341jkE2nTCrH4XXUd1QCkNWHniTCW2wRhMXe9CxuFYvrY5bWm1bssWFvEq2",
  "key21": "5wHPpx4wKkbsCrrZWU7oQw3YqnCmUrTqRjH4BemYA7WiSb4jDGBHxVN8SZnK7XuKKjJHQDXf6UEWox9jcAVfPvaP",
  "key22": "5vzj2EsAqbCjGsf2ULYKKSvJenuT9yWQyjBxB22vBgHLZvevi3fsNuw6W6PdYtHFygek1VTpuwsWvoMfSMFsi6R",
  "key23": "5tAEXWB1xEbc37GQk1TVEULLvL8XcVp5C6kdLousZsuEQZQzjMZs9BDiCEv9NFQPC9PHSLkxaEXaYbe9XJwJHLee",
  "key24": "5AecpqvvcWYPzEcka4D55VjcZEAohoEWCDZcpFivJRYfFKfL1B19gYizy9czYyoy9UEiir6zVfsqmm4N7df4Ay7s",
  "key25": "dxDttYFpxEqzEjYmnQugCeYFSiJWL2bRYSNZH1neB9A5KMxj1HiDnM96siKyuL5dw7yqX8Rn8x6cnCzr4BcJy88",
  "key26": "pU6hkLvAYVjfnmTGPbKV6td416369RCjA4oDPYQBpbXZ5RBfmicAANnsbAzd9VLf2NDoe7EB4Ubz41KkQAKa3GW",
  "key27": "7yKLNxwkS8KWRfngAMrBRfoA2XVM6jYrWNYxnsCwdpZbQNPwcLeLmQW7SgKYxP3GBGR3ZkZ3rf5rCbqhYDMVcTd",
  "key28": "4Q2DE3tUeTToekb3sVqA6eZdgyk9UhZrXGe5w4gYtbWuV1cxWvYFYoVGY6DWPQQV6xdf9pL8JKQKorobs33UDs6X",
  "key29": "fuYAQC529e7sKfT3ryS66Gtx3yz88beJK6psi3y1do25FkCUCmhK4CaCfMneW5Z7CoZt811enL5nkqP5jFNai4E",
  "key30": "52C6vZixRygQAzUxzSbJGuMoEwgNwZxcN9sYqPAr4vqqfabFSyedgc68WLMuqfJgn188f1PqUzH4D6Svqmscrmi9",
  "key31": "5xUAfy4eciiFCBNyb9hsGF2BpBVdeNCVsi2kLzhw3EC3osPJQBETFjAWJFgGaNymFBiFp8DUJTU1DsUZgMquet5U",
  "key32": "ha9J2u6SEh3sjb6ro9wqtxyVErgoToNo4DAi6AkRuG722ko5dAFMwLZYS8aAquWNqoL2jU7jgTFVZNXRRU4cLEV",
  "key33": "3Xn4Mn38WCi6XogJwpQZvQFfbPLmUw9izdGhQWutgxyKyxmjhvKX1vYX9FNnTB3FWNukxpeyoVevdqfMZzFPvg9o",
  "key34": "5GrbrMAtiw5fv4UPwZMLdEsUrYYLGBGRnGZD4eoSndL2usQ7swbedD8t2TXnu93YneSBf8Wmgb4RbvdhTs2QJM7k",
  "key35": "auDGhP6BfWGt6Qjce83C6bVCzfwugyxAYNNCoKoo87ggdu542tVVAGy6oeGg63bUqNN3kzxiWeyTLKMj5JkTz9M",
  "key36": "3wdw6V6bfHxEhQ1VWR4bHbeiYwSSftZStzSLT3hA2mAcLscuJL3XC3uJ3apqavehVgxh8QUFDsqciBrLS6dNqV2",
  "key37": "EDzkanjDD96L8SY3Wmnx6LaG3WMBbou8FBwuNiFk6qNnwXYjBTDwz77QH4K8eDDBWALZ4f3KM4DHQpSrDtnu4G5",
  "key38": "8uN91Th21XPj15AjvsFGyNmjoeDXmnWMwsWQqPb1PP1AuutQyaUtKJkU3x4L7UNAmpuJ4LjubtXG8uxAbDy7p4X",
  "key39": "3xP5KD6HzwmBS8R2XTGQAZmnyuVRVJDyEt9kg7CzwbtVNioYrdxg7poM4Eax6wyzPzmXUfv9RqM3wpfhVGGSiSW5",
  "key40": "v6LGb1aSWAnF3KH4Tqh9Awz4RZ9aPQZ7a9BmVjbkAJfRvDN8VLaW1nuMVR1DKsdYrFY28ce5CmmiBVafndPQjBW",
  "key41": "3RfAVKwkzr7kTMufm2UzDbR6PZ5X2RnjJ5gnRiEBNor3LhCR51BWvf3RWRznPWDGKKvh56u9NNGJEnnV3LuDEZGu",
  "key42": "3r6xjbeGHLZMVgJKUPJV5uS6H77ef1tnmu6kDqN429s4vTv2StRVcwGi7u1PP7r64LYDtRRTEfV33iK4cYrQSeHG",
  "key43": "2etDJGdZUjRaUwSUnj3TjNwbtNYNUhhuigF3Bh7z8wgsxVFF5jQXNaPFmC1JH18VwPmW2cXMUD3c8ak8E2rxZh8Q",
  "key44": "5V3R3M1PPS9onZVTU21tKeu3b6K8NmECknSAmc79w8bQLfxnoFYCGuH8yHngNu6wyz4fG56R4DMQfSusePB1iNnT"
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

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
    "unuRfhV8zFV6VZrDXJPAtVXMTSL6cKrkxTxqtFVFwNofjCLnAN3xfqzjpjtwmjJSxRt24gtMzkJuNjCvz2UezYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8D4685uFPk8kZLQX4rTN7R4s5zJqMHM2WmapnjW3ujrbTyVrSS8vavBNvca2JzdKDvvyj8yv2uzw5N1a2pPzLf",
  "key1": "2maYTAYWDY3P88HN2SrSWzEGAbxTUwDPNUg2spYhkrosnbLA5qgX9etMAab7JBqp4JJ4DYLmmBkgLiRnN1BuBVWa",
  "key2": "57fPZ6ddkaoUXhRKEggCkkRcefG8Ksrnu39zCqkTrB7XjRjUWxX1q6nQUiysovyx3HXFVnNEmRryP9JpVkDk3kQB",
  "key3": "2bh1ihp7VPpxK6TdJRuZbMyVLLRDoFvKL3AyQuPdxxpT2kAev71XcdvjBq99EEuErFxsjcZKYMFQKAbszq7UBMwQ",
  "key4": "56pYCbhXgvzL9snEnChWtuSpXsA1wB3KsDm8YjEpXLfdWP8V1RtcARAPej3dMwS9VuPni882GExh46qec9AZ62JB",
  "key5": "4KtrAFjQfRirXU8B278TVk23oMMUtTnav47KAZxXZrXGFRL6aKESeeSAFYpyg4LaBBsJ6RhrhKUtrYJURrKo5SVW",
  "key6": "4BKGLsoXcccqSRrdrZTvzDMMb5Wd93GphTL7c9CqTKirCL3SS9738rfEHoDiFZMtKu1sSoitML4YECufHNFugfQ8",
  "key7": "3G6tAQg8pv8dkaSDDw43rbXrX9EGoj9NghmHbuFzHMXAMjbrvYxq7yhaTe9HNvYZHC3uusEkuAJLnFrXvUepq8xB",
  "key8": "QxPfk1FpRx1tQqzfSnhYZHEe5WQYUk3AR58bnoKaZdyP1mcV6euSS4d92L7AsU7NcKarEi2dBMqiXUty6P94mkp",
  "key9": "5LANefzNeo7DCHAcSDBxdEFwhVZnmrH2mDrxsaL8KtiaXoA1ZZPcBogxrD6649M9D1FJCmFBYkacGzonYxFak1NK",
  "key10": "41mvQkk4DhgS5vn6HTPTSKSeS8oNy5shztZPcFfPStSvLaSQavpYhux1ajWUcv4RjY2uxWWbfKfNJbsGS8U7NTQ3",
  "key11": "3ifgdYpsNYXnAEHFVaRgqJ9kDXJset8WPr4XUctFFveBoS3VmSWamusLA36Sd8PE9G2pzKvje7UqQ7gujM2zbZPT",
  "key12": "k19MPZZH3KbS29XoNvUZ8AmQ4dwgCCiZurXSVQV7awEDqYqUyABp7TEKusojwqZVxMHLf4FpDihHmYhXY7ubUcM",
  "key13": "5bqcZTwJDwAZ7c6J5P65a1Mgodss8fUP7kuWJCUJPywARpv1i5QMunTENMa6BVveT5k5NQTcVPCgYo7VG6uAf6Mo",
  "key14": "4EWGnA5REDGZfKP1nNWq9EQYydHYYknwcztmADniRy6sgbwbw92nCWc6UH1T3doTpZLShzY7rXQDUHaERPP2hvbU",
  "key15": "4uuCBEroszu5og8acLzdJvybRbZNjWD3ExU3kKRKHj9Axegq7y7jimm6rfE5wYsK9Ncb43qGf1JUvT7zBioxpbSS",
  "key16": "3XTcm6xSPmXXspeTWKP2CW4urFDdQRY2diryGwmJHe5WAQxz3LKqwFGr1v9Lh2YcGzFjrXyVf6NoYtgQwK7HAdJN",
  "key17": "5xgKLFLUBHrTnAyEm82fPGym2KHWYAVMurhUgrk8iy4TRL4sYpQsEX63YhdW3aXpPuNuwZgJVkcxNNufFonbM6X5",
  "key18": "5Pz8KaGUUA9usZBXLhDyBWHBeLpGe84NMnUQXBn9c3fdKmFCmEo4VYXdeFJmVCFQZkTFL7SC28vNMzkCiikieyMZ",
  "key19": "wLz7sxefoDHjaMHbyjAKt7zeCrC7CsHNwry2qn59o2YFZAKKUueGHB5isxkbBzkDiekDuuMySTEAuRtdNNUABbw",
  "key20": "5FVS8zjotY2hy1G6qxP68fj2zyCZfZMUCigotrBbLkowRPtr17ULmmEXNJg1yRXJXUKwyW151sHD9L2tRPmAh22x",
  "key21": "4zWurnrTBmSubU5EcPWcDxo7DAoaT8oULnVocdh2VrEtwqhB27jyZeodzeY5NYBHbG5PsZ8RJzbvUmNcNk7FPDuz",
  "key22": "3w52y4SXFB7tcXKVBBBvV52AFV8gvai12gdAk4ro599XFFaDeMuAyLRbDyQuweuc1HmDomywiRzZ6k55UCm8Ck63",
  "key23": "48xt9hYdYLZDkev1fWNGceoSzggd3YJVjHQf9fCDPUHK8JaTpvLyvPMboKa7yAWgWN6TSmovPxyeGVKoQAcNEQB7",
  "key24": "5KbWepXdd7Gejkom7TLBbrPokGsxgGgAqoC29F9beFHAukJGc1eE9sz2bXfGH626tmNeTdP9HjKsQD4VH7nm1q3h",
  "key25": "2yyQHFXTkmwJNwxMCUumpVmdH8mhMZdtRrrzpTk7aVtew3b6kt14vHShSDfnApF3yX9N5yEzGux58AVodJ2JnfFe",
  "key26": "5K7nUGb1zYf4jCd9fVD2PRZjmH3J4tTRgycbSSdY4U2Smjnf35uYJM8xTATYqFEP2h9tJ3yVCmg51PKd4ECNEUN1",
  "key27": "2pYrMiYVxFdMGFnJhUYHHaii2BvrY4dQh7GCBjwasxXuhbtD7tibuPkdmzADau6M28RNzFm2xmux7UDvpfrRnesx",
  "key28": "5TYqJwrdKYYoYSz78nnMCSive9EuWxE96ZwNXxLakbYKeQYFKYKqMtE5mQg4wG5xZCqGpzvf7rtiqUGPg6KK9mSF",
  "key29": "55bJyhKE24JEPrQzeLkinAEkESz5rg98Kd835ruQk52i5XFJCoWCPAUvh3te5JSaHAtGDUtAzhmwwZXUbi5M5bh8",
  "key30": "5tEDayDePAbf8ANctdc3MZ3CDXHaNcPNxjmzdYrsBz7gkVGQSd9StQY8ktzVtcBNbThNZ4kpUv1NTFehqaTGt1hW",
  "key31": "3PSUep1PHEJY2NrRrvxAi1RDQe3WJXapmsXoL1KvXr6AjLTRpEY5wsrUcXS3dh8tbqUQsah7yXPbX8H9LkmkxUYs",
  "key32": "5B3mf9Bj9JZJRXRDBvjZLNfTLatz1625TKGfmTPMdAPU2RncaHShfCSfE3M7vbeZL4BCW4KWXa6JnvQcUeHm5xEf",
  "key33": "4bAKDAPxTw7mQHV5We67rVRwcyQY85LJC4gZFMXBTo7WBENC4MMWpNLB71k6bnAUuEVZ64sqm2qVAPF6MvZn66zB",
  "key34": "Q6AWsN63bMVhaqknYvXTAMK93SjLRq9uxY8w7LC9WQs75FgGAzEMS1SxHxENaxvKfCyBMfkWqUTyax1ED6SjyY9",
  "key35": "3Y9i9kYfVdeft12DSy7oMPfVCLWeDg1NcavCHdJfWhZx2QkQjiwqXN1UhnKdHNVF3RYDCShiUxcifgixHx6uMRE8",
  "key36": "g4qRNdTXbeukkSPPXxNQoa2LUqnzbhbGHCEeEZSx6Ahx2puVx6ZaYEe7reNWVUE1UhELQsvjUqh3NyiuHv82wtG",
  "key37": "3cbumggRSyJCvnQU7GTzcgYFEQkFUZDwMHnVPzJtr3spitHv3MyhehrQ94i2eGUsyrFEXNgfTM1MMyTXTMmf5ijH",
  "key38": "47dReu6zEJY8i6n9KB469ykrrpf1uHVnxdKaYdHjqBEFhv1QDhcEmChoM3VMKM9ucrRpyPw4QPLru16XpbisXKun"
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

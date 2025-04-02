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
    "2GBBQPstKs1evmdXEnocZ6aGC7ejLpoPyPcNtNHEn1rbiYwRSoodM4Vfs9NcPK6xhhwkxcfJ1gXJsuuSSCbf1YEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "264rdMxKQ3E7EiWnxjg7boXSarrJ9vRcCGLgpR4wGVRdbXdU9BRHwFgiBs9maFgku46VkwX8ZtkCj3SdzJib27nB",
  "key1": "32Doz2VzMaGouP9hrW2uCser4NvWc4ZgdR2UGWdt66bfHprSt7EnFQwnFHSnnJtEPnKSwbAbcMXhchsar5ZG8ptm",
  "key2": "3PXWQ1mKhiKo3vNXMiKKSkpHSJjSNcMu2fFQ6AQMtvFq8YMrq8CDnS69axT2rVKHgaUE5XyHPTiTEvYz4VWkf5F3",
  "key3": "2MjxABXpxR8KmkGuYzprhijgnvhzUXEpDmTKwpP6jW2fanxNTPyThWaZATp5ftGXFnspnePHSf35s1EmQSfkUZQq",
  "key4": "3ig3F53yycdH1q1BW2PYz9fkUdEaq6NAQETWVcb8FGm7VM1k4zypDLgP9EoCpND8FimUbmdv4sRJqXXX8NhGNEF9",
  "key5": "2AEdk9YoapB3YQu7dgRqfv14SGmy19RkHXGJrBLepbyEoYMd4rhnnZXje1qwdmoGHUTrrqQ3cKxmJ2HzBCKpdWSD",
  "key6": "4AiJ49H77uUaS9vAYcsrXTGAN92wk2YcFnMA7UUT4MbfoKUd2Ag4XPWe6c9F4YMUXtrNCyTcJFqGGviRwPH7jHtZ",
  "key7": "2Rbi6sRDRTWkPapiYaLiSsLCG8xRd6nV7LWRNXJVD9rVoNwcZEE4A4xUg1uysKZnCnv6pyUHvS8sy8zFSxyk7sK9",
  "key8": "3M4UveSaLfVA79oHxuydfWStcyQS8tFPp6juxyStFAq5igbjqruYTYVdqALnVDGbYzhSCQ7ruhj4DwMP1eGjLJvG",
  "key9": "5bvLF6JqkiP11NFFUCnvLWrtRwLpMtv4BnymTe4LMhhuLCnJRmN4A36hgh7W9zMRFzyVq2B6suBn2PUhezmXMMuq",
  "key10": "4bTSzyAtUju6AeZv96RDXkWtAquDoNi7Fye77756T8MNTNH6yA3HCN3hGGKcS332jZe8suLqsUz6GiAovsezL3U",
  "key11": "bBdziBndrZnNJ4Rp9TTD3U9EFrm5v6Ru43VoVam39qaWntGx7Sgqd5dNhJAr56X34XK7Gf4Bih1PwLxk2SPaYmp",
  "key12": "4TFkqUtN3QhPVvV42CvmY5iWM6JRV3RVsyAF14qvfpuEzm6LopkQnSRd2qA6CxqZGtxmKBw5UWGSGZePNknrNiC3",
  "key13": "4kcfZmnXfYnHH8M1BVvoXpwAuhaHe42kNzZqF8NvUhtRTDSbfJvnVWNbWQ64TBXZcY6GKc9YgLV7izExAbVj2hZR",
  "key14": "49pdNupDFnPGTnn9pQaSf5KfDkV8XBVj5AZdbkdX69uHQjpdz6eSYUQsUcuFcj2ifUEFuV2XvJHr5ZSf7yT1EKmH",
  "key15": "5uAFyfjpDAR7szPkRtyxBvkJyLZrJE4AgT6QmLHuuWrhd3QihMLLHdNbNETXiZQCGBzEeUeU1hAss67zWh68JRVR",
  "key16": "5NzSwteA2g3stUAt2aLeCMCM7jDXxmBSsYVXcVudYNg5Vw5xUggLw9MZw8VJsWYsdSgNxYu864kQ1cpmFk8ic9rT",
  "key17": "RVH258LpmWwdKgr2i2FwURMwzMQJHoUS6x41aYFXeDnThepmMUn8ViPzzjGDetA27VW4T1qqDbni1csGQrZqafY",
  "key18": "3zzB4pun4Yg28ZksGR7hXGGGTzQZQ1wg42zre8CjtVohqTCzwKnqMda4zEpUDrH5yFSXQNaxHetZDJPRnupNEPKz",
  "key19": "43oWFJYn1QKWSr2rprDweYiLXMGR93jUSYRNFSVTy5WQLzgdZVDdX3FcKHbXRDQqCr7UUyu4fZS3owScbgJtLNpR",
  "key20": "3RxJYRsZfT1WNqoH32g8XzpRsrQYAenpRNiNdHmE919FFoHjknESwnE2nLLqru2c9fbNwH4r1nrr4Fvj2CBt72sf",
  "key21": "29afE95o4EAG4FFoUVJctv7qjBgs6Ukbaqhp2gq6uCPssVYho1ACbbJVNnaWFythHY6PaBDSZ2nSeZm3KNb1R8MJ",
  "key22": "34vurMWRFDFkxVrYmPLYS72zEKghmu1NTJ4p23eRKcRVKCoJ4z1QdyYmXRp7eDFnDyNDHjoR7SWF4fGw8xbhA4gQ",
  "key23": "5xeohcVoLttrx5rZgfWJX8ecJc5osZJyvDcGDXJAirs8Svx97FefomKKSUF5WpFUfSnhRaH5Gq3pEMhj8VmgGMgq",
  "key24": "TCtmdVi78CUkZCTnUSnNJSE4oRx43hJAY7Fp3GEYqcnczq3en3jobpnLm69Ka4wp7Xv7MeBdtJa52NKGF9KVE7D",
  "key25": "5DFxQ5C559nHwhKfJxobnymCPpyZirSyWakX9Fn22CAJnBYK5PQCWsWfgSpznTfp7vLBKqPM85M477gVkhPApGSf",
  "key26": "5ZsW75DEW8dT3pBr5i7hCNTAdX2Dv4a2zuPa5WCQ8cHG8B34L4v8BefHGXG1zYz4PLo6iVLWVK8W8K8Kw7XrcFzn",
  "key27": "2R2zBe9wSBjSN6TgrWzeHpvh29r9kktCpv9rP7ic6EDbaX8Tc2Myx1KJXF5UYJJMVDeNgQCdz2tM7xHTGVUu4UY9",
  "key28": "31qhBQSYKx312Q6MXcSuPE96nv44UZ786q6dAzhEDywpsbrGxmh9quTAQKetHCc45QTvgNZitn8LHmnHdj63hmBa",
  "key29": "3VCsvrhyk3DBMZokD68d8hZryRzH5bEQnRBpZuFHD4QtfPmaxBauC1pRV26YU6MVj2YTSmWoGErJ9ZHrpJSjgThV",
  "key30": "57VQ8RSoQ9EiU1wN2LuDmkybNohi1rMZi2VXZ4tFuEY7RDith45y8iDNQLS79EF3a7Lk5KYgvvjWwBjeJxVwkHNJ",
  "key31": "32vxgi7dFXCiANgP9huWM4WKwoDKXmbgmtQk9eRgDPKuwTTSXqhJ6DUdBXgQMpttrZfAV5BEQBkSWnrC6t2gTD6Y"
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

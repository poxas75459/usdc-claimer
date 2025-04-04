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
    "38xP7ZXhZdG2CjhRirDmRh8tmhyHej5HRuq9wHEyVo11GsRFLK3HeWzASgkGrVVhdnSS7BmBPsZdM9eGEEp7dRJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LrSY1kBMWQvsJgR9KxacK7Bjbo5GtGSk28m7Hzmy2ekrMMw4qgTgwNoT1xUzQReZ3XxP8RBXGUfzhQ1xxcEHm5u",
  "key1": "5M71eNwCpx3Ksf61qttysVzir5Az9eJzYiqB7u5wKVYp16zzFTRzuvqaQvY4MJGrQak38tcADfcpTGvB7Cs5TkV6",
  "key2": "4sD4nR9obmnfX5gT7WVfti2oAhq5p7D3QmimZYdkLyiztDcWJvqACQfGSFxFLMmHAxxb1zWkLkUk7gFvuM3x7ycd",
  "key3": "4LvmeSCJ7Ead692sMv9sfvXfGCk8bRzXjb3UetuRnw1gRYG8DmmFXhUAUZHdA5wqLjWXqBRpkpWQosDYwKFSJsec",
  "key4": "33dxuDhxLSf7LcTdb7nZA7LgwETrXyY5dNVsnLeyFJGHZbpEaf6XV2vXdarjYCfYdfgi4nc9biUPGjVgtRpbyeeX",
  "key5": "4a7nLdBkSMLHcXEZbdiGoC5We23oBuuXp3VfbAUsM7GGFj4PJydRypyxurRhjSPn183DKEdTr9pAqdMAdQws9Riy",
  "key6": "BaDsH2jE9EuvrbDByNkw76B493FrW27GQL3Tf8boWKk53viPMPU7GEMrfXxshHKKFZ42hhKJ4XehQdPCyM8eZ7u",
  "key7": "5mmu5sf9NvLgXPfkGzZGJi6B6NRVNFXCEjuVX9bBBYQ4KzhaCTixw5WYERhU9vusrAuo7A8ihTBqqSBKRanrCMmY",
  "key8": "3GGMAEeXpsdgKoFsbD9Hcu2JzFMfwbC4ByDC59FrkP4tXXCBGfn42RWejtSb4UfWZUG38tUKGsVPohCj1mHoTeyH",
  "key9": "2E21wopeAGDR2eYNFB3phHcwR7sfLiUcQ5v7VbtYzqxvkvZSnsYTNMqM59NPFo1tqg38dXs1KN3nCoi46hCNkbBp",
  "key10": "4rzNHkYd1iR9xBzwPuuoaFkaL1NJiLNedyyoR5YohfVKnUuNx3vxYkqQcsMMcB8UqAYWimQtDimtkWPfyK2ZAqQo",
  "key11": "61bu5bwAr25ik7dzEJ4HkYcGZkTHvNi6W7EHJpeGrr1VsTsS4Xj34rAeQh5a8JxMCjd8qK95NdH3PMkrFMAVo5mL",
  "key12": "4a546HArwgDCBv6dRgsvST5SHytsq1DDowKZpghgqrUi2TpaojoMuRzShCgfwa28Fy74VpF1r2xeUzg6iWYTimeR",
  "key13": "SC5mdhb3qeKkHM7HifxhAPSRHcSX5M3neBrB1XKmeVsUmg5wgRzU9yuDN1PukS1R69kY7R9GkoW3jv28odJqHpK",
  "key14": "5kVWjiwhrgYMtkjkMA11gDveDkY9VsZJHieBSHSV1CzSp717wdNByBe944RTBygqTjxM9zXmBzYkUMh3oc2w8huT",
  "key15": "66FzdaQkLxGmGMNnZPgxzQ494ZWNoewAspApvtWKS2WwUk5ntiw4R58gnjzkKpayP94d8nS4FtuPB5qqW53E2TKR",
  "key16": "3pbewHXprUjmnyuF6dw5eHWDvvhLeEaY6gmVRSvworjJ7n4Ji6X6iqomqzvuK46B9QAH1VKuPDtsXDPJ62afCwyu",
  "key17": "5EZEFyhR6APtLNLEqa1Kn87ub76JRqUhs4y25DctmNBEyjTv3LChNdZZ7D6URBff4S2exbz1NXh93Wj2c3R1eHG4",
  "key18": "4qJELBXECphHDRgXi1QRZ8RFnUMS9ydWvBcYeN28wJUVPFN5thARo8caYJKHBBfaQozg8e9NH3yCY1Lhk64Te2MP",
  "key19": "3VeZ6TvQo8Fd7mibt9i4xaxNAhbrxdx6pgDmRjWKDjMGvQ2LF4tasbRBmXJZni7ww2nFniUecZ4HVZs3NbnmKy75",
  "key20": "3AMjZKHyMCoDHwGnVjAeeUxgcDGCt17Va8SXAmJshELbtAYMrM8yEBE6dERgfDsLoviVV3HthUVJ97gMjS7yFow",
  "key21": "4aA8s4Veiw4BC9THcNM9FHCpq34ShWDLL2qwoCp46Myyp1mF4RBbhp5nDgaqd3yNoFsEvsYTcoUQpcP4aXUT9ess",
  "key22": "4mLspFtryAN1mTcjkgWZ79pQ1nwtS1U2NYqAAUy6rbYmohpJ7jy7q1bK8kV9J9C5QperexMnsiDdyCHqoWER89Eq",
  "key23": "3MnTa94qVgBgjhrtjdSFR9oSp8t2iNyooTXXS4r7vMzeNyrJHdTXdkgzDeJYD7enJRarttmTMV4QaMvUFU6HrUTv",
  "key24": "33g5TdMQxLxGsssEQnXW5rcCXRiKFQPDbwJpfnU5t3EZYW2mxvFgrzkfKwbKo9oB17EAQZAte9PnBMdAAYH7MtxH",
  "key25": "7DoUG8jpfsBazyzKw4GnGeRrswitdk6pVg8XyVp93cBBSVGbohHteo13tNjcEBU9MB4xDyJznuPvWtU6VGrEQNJ",
  "key26": "62TNbPLbeWD3jN42ynE2kq6gSu4RvDhxxMs62iFL7DQ4WsC3u5mcb9ScsrT1HigD7oALwiw78dVTQjMMhx3LAAGH",
  "key27": "58ARCqDrgXdiPhxCzuYFoPYVGXzixbvfhueUyAvZvjRUjzkZQtPTcgdaXHckpiaQJsNVRDqi7qCFBPyk3aYVoPcH",
  "key28": "24wBP9M77xfNs1tsQ7oCZ9ERFjW6T9MB61tbFuvB7LSpp83FAtV6htW4xZz9qGN3riBuE4aipJAdYwK3QunpJTbi",
  "key29": "64R3NYV4g7CWEgWrtVNsY1KJkWH1yHZGMWBYUa6Akj4aUXve3cEunrtkka1vm5Suc4NNXWbnQwsT8CZSQR6gn1n4",
  "key30": "3FyKfXKCzWiowC32Jj38jQoAP8NKJbVtcSSh6Bk6s8ZvijB6HSNXQK9oTbKFM7QGfGYSxAhKEkbTQmJansNy4HnU",
  "key31": "4Spb1K4H7D72CREmmreGKowdTZ6p9nGX4eUedhsKts6U6hPyTbYxeDz3AHFaf7gUwW2tK6MSgJd8jfBSowUYvCb6",
  "key32": "nazGbjmJytey6sFnd9GeVgNi2mWAWBAZA3Zz996m8qfqoYb2Wu7EgxMu1c7qc4zpzcQo7t5BdzhwicAkfHSmX84",
  "key33": "3GT9tjD2buHdAKWfXpGfvMm49SZ4LULBorZK8ATP6AdHg9aNJBJgzgucrqpD6XuqMYWaeBfu23wphjQy7Md5QTrv",
  "key34": "3zByfSYMM3UGX7WqNkJYYjSLoKFiQcSmaBDpCNL9f9hz6cqfycjXG8u8EFngLgBBqdzU7d22CWLWbgDduHhA8GCW",
  "key35": "5MCEFTg5ChvGmS9SK6kNp2fefXuwLmSVA9dNHvWzWd1MMo8rTHXXQfbujEsDoVT5TnhnVdTLJsjBv3azWFjTWcKY",
  "key36": "jt4JpYtKMnB4gcYyjRvpN4RL1tLRdw8yJPJjFYnUMJHZvhjHuBeFLNCjWSe2ULpVR7sr5PBXo78Vxr6ND99nmM7",
  "key37": "2BHS8inzhtTFPFgowZfg7Ywtm5p1D258MSRBj5N54aJvfHKjNQV9rzwA97ba6NRKuWqp6XgQ9KYqDj7xmvg2xMXn",
  "key38": "5tjLPscVotCgWdeoibNejZ5pPshUoddKPY9MjKym3k29hT2dseaAACWAUnMoyBGu7iYcNBNLSjPbGUGnWrkxzNCH",
  "key39": "3ELturxkhnz4Teue2n9nzXeQQVjPDZL5k3s9BG4V6qh5pNbNxwZHYbA2xrL6h97Mtw9LmwgQNkL3Rr9fs1NqGx1q",
  "key40": "3bfX1pzUjyVbJ3GfC89a6hufcNYK5b5BHQwoFxUxbSQzc3RgJQybk3Xkg7d1tfAzpPniVAHjVYi2jwbaU2i4Sg9i",
  "key41": "4i1mz9Z8TzFvvdofA6aLyRVrxZqmcXtve3vUchr79te2Yjytv9AEAtbgrKjMZNYcF1Ehjy73YjSkqG44T2ruwzCj",
  "key42": "2s6hysVav1NeHCEMiaR46dAHC9CJJxXdduyYLdDwo5U7PMZ6WSPBeJtaKQDKUM44EtXeiEfX8Wev7grbz3m56Qpn",
  "key43": "2MpMzPxoL7dmMoENoYCbweucxbwJLMpXSCZ746ninGLyMhSJJcvoDopz8hRwsqFxNk6Z1EVWFkkegQx84Q5kXWcX",
  "key44": "435CxB7d8ZPQjtNfgKdz8FXqrfZHMZM8p42qHCmgGfmx7tjcqGMyyVTiofZpX6dvXRMCDbRU88XT9zSCNBZZq8V4",
  "key45": "4fxs7u1cjFPBUdkZW6SuMnBetfDnsKyMHe2yLw3HvJyyfU6Y7Ec4cDajouthR4tcrQKJxSBGAqiKvcLnxwNN6DQ",
  "key46": "61cE1bgwqqV9QAgPYUJF85h9iyWj4ytyEN6tb8c4iFCcFVdUXUCrdM5jB66VE7Xfft6WDJgUJJQfiDPt1r92PMjE",
  "key47": "3eRbPriM8gDX4Hmi7HNBv5HeqavzVyLa6wSSKCvNfiP8JKBGsuVq7zh5SUvSZFdVhbmU2MX16jwzyJxMkQh3W6yD",
  "key48": "Vb1oRmrmcqJecjASj8PGQERWApyEh9QXw1TKpae4SU5uehxfjxrvYrr6YgoRotqa2avronPpPxKzJ9Pm3CXKQmg"
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

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
    "4Gceoh9FkRatAWBuaB9HXrhvSigRUTwW7RyenyUYmv5ZGpixwA4ntFoX5yXmwMPNQUvdBHEHHyA9AMgnRF9K3C3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Voxr2182PqZNtuA6VWg2nhiN5ez7xP9VZToxDUdvFdEU5K9fAS7JggbAAyAmx6eYVgPBkTtZyqShhGoD1XTxCUe",
  "key1": "4FhLFiGToPn2WWEhWyKnNU6BE5XEemYhcyx1cF1Gt727d2JJWGm8QTYdd9BAUM4KvJoGyd7G3DD6qhnhNFJ6npAN",
  "key2": "46YiyDtNjeKwVSLtfSy7dft9sMstk4G2Jq55tBZDE4dMiJVE2FnuZomSayW2ySoeHFvmYZNUULd4LWB2HDo5v8Wo",
  "key3": "3R9iPuwF4ztsSxEom3FRrsTjisvTptyrzryC6k6BKXF2stQCZhDzBpm16m8p1hz5WNWQK6fXaiH9QAkhzrvc6EQ3",
  "key4": "MgdLnzTMR4xtLaup7hxDGyUcSMjJVL3cSW9ytHpmQMsjZDAu6MVo6bf1NN9gYP9LgfUWDCY2K6EPStdyX46paA8",
  "key5": "2oPcZMPjQ1z2ck3we3SCmP83ANfL4hU282KyavVxY7y3y2beX3Fv6RkgoBq5RNzZXZyqJYi2WWu8qeb7Cn4KLuVP",
  "key6": "2VeYSbSGu9WgFUMEUKvgo14xMPVXByyTQqSF5EvepFEcmbUGk8BSh25krxtusEYdQAH5fASE5mdHEeFK757JG2T6",
  "key7": "2bDpQLZcxSAs3y9fAEHY6jSuQwzJp9Lf225kLWSxgNwCckZWwyubnXQCSq1KhuJkQ5FM2MTaAHnj7mX6DXVz2f6U",
  "key8": "2MmA2bsVRNS24bzLbQEXDxe1oiz2idhorCEejXHjt6R9n4Cck84wJcyvyGKVox2xwVm7UvsqtH6JckeD68JS5qLh",
  "key9": "pDkh929YtHTbyJ1T3gVgPDLzvdVXLk3FXtV4QdvJx92jynnPBVgByoyizFsXaLNjHFRMNFmphsgq6wLGKyoEoz9",
  "key10": "4sAMR6SJXasrVuVtUPYc3xs8KHGaiDR6yy1Ko5SCWBGSxycvvkPmmss6aEPxgQBHsVpwGNw9TdpMNmzGgirq3ScD",
  "key11": "5Wt5nNwxqATb4AgoDbvhH4ur8FyV7JHccqqraiVJTa6MjjuBTtT7xgRs69s19FDy3yzE4sHndWgrrma7Jc9VEDbY",
  "key12": "2Gx2GGyv8P66nrTC1j854KcmXuVjCMcfjpr4RtGLuN3hgWTfG9i4MP8mxpoLRfCz96KFSW6nvESjbNxE7eBxSc9w",
  "key13": "4gsnrx96mUYm427mtXEJ18CzQJtezWKJiQaaKv4Es5P1FaKn9BJ9di6RAGQRevyHpUA9c5Q7y1L81c18MSi5MMwt",
  "key14": "4UrKHRYvg12dYzvQXP5aDDmUjTYmLYFyHKgWoVw1wLrMtZNAzEKzfg6Suwqj8rP88NjgWtMysbGeZrWVA6XCLQzL",
  "key15": "Anu1ihhwku5SQwiGDzyd6ZqgpEX1FEvH5UzS1AxhgcNpwwebys59U8k1QFpMrAVV4ncct96MMuL6dxtQ86gJctd",
  "key16": "33gX3VXEZPoCuDVbhRrw4yY1FJy2rhWrAdbd21MEtQCZAYodgsdYoUxn5o8aCe3suKHRz4BR7futZVzp1TnSTC12",
  "key17": "HSStCu3FKjoBrdyHGG8auBn3EjrNviQajBXFUkNJQKTHfkXRTDAaMvSPovKsS3nzAHouuApPXPU4ZVC5oUfzkUS",
  "key18": "QSUR422NjhvPtsV9DAdL21TYRHiCTkEPBm6Li2giEjTegjJ3pbjSML5SHnw1UYGtjssfj9mLTUn2YZYyxMEpstX",
  "key19": "5KyzysDEd9aRhoTdEQsdu8TppKjaxvDeXAx1jE6L64wjnoaGjhcfruSidtK3Ji92XvJwr6MG7utjPYaUakRZYNm",
  "key20": "nveFMm8opiir3AbkeNT6VRCY8Evf6X7iw8f33pSa7cLzhHoexLBAUPXhyEa3Dewq2tkFgzWQPcoaPpJxDyxEb9E",
  "key21": "5iRuxEdpgdaYq58Wug96YbFUV6SjiicBWYEGddRFCfQYmRc8wwTLxQTQ5bnVDhnZQYQhWhd2qfNHwC4HogBzPce3",
  "key22": "4RicRK11oYrNZRW4R7EEC6XbdVcKmyVS8yfuDcTS7eRu7H2HQ932UkeMoDe364Nnb6VPPnCwHXvfzkqpkfgAqeV5",
  "key23": "4oze6KbhR7Httu2nu3Y8AB6a6TwrRGCZayb1aLU6ZS5CVZppcauaMbRmBfAwCXZn1dXRKEk3aTUS5ENGnyYcLRR1",
  "key24": "2H6UZ3tsEmAbgkYsorzEMv3CziCMcMQWrSrgDrJ2triVcketATASyxT2sM1PLyDdywgSAqF5ePb6zzkY7YX4FMCZ",
  "key25": "KomwNxdh2BTUTZvBmzpKURAg5dus9CFVu5kfWaQbBpRuSAwBeTjcRV4CmCAzsA2B2yMkbdCwegLGcX1CLUcjTyp",
  "key26": "5Tv5PQy4QjitbancmEgL5dZtZSM3bZyZU1dW8JzvQNHB9unKH9Dgycp7sEPqt92soPzjxRXRnWjSMXV4xbghqCMu",
  "key27": "3Vm1HwfwfEYcLBL9avsXjaLq1PHDDJ88ENrCLoRwCB3hmoUvVNj5o3QAbmdajJ7sMj3ELwYyEfLd7e6gCpbG6ugR",
  "key28": "4bdKnPnTLumwvwj3v5fqq3mcFt6B289mkx6sH3j5R89VtxD69GCjSqh7wuzq9frofAJgSbYZghSmjjNHpTeo4ixr",
  "key29": "3j2j1fsNHsZNSZTp4rmJ8nFsHBKYDPW1sdajapjXWmqC9fFcLJdyKGi9NH3aGrGsoJ643Bo6HT9EP41cxym9t1VJ",
  "key30": "63JcTbDLFNKxHBMxt6ivBGq95MUkcAEuqzF3p1Co8qetwoqkcvos5NbLRVK3S1ghiWBBPmaxtHs7C2qc3nv8GJKj",
  "key31": "3K9eeTHKkAfEoUoT3MoyyhiwE3P835sqJMj3Q1tEncSCpb5Sc67jkagEfnNjtLsEnVXBpegLCHnvewwbS3ek9Ahv",
  "key32": "4F1ZYjX8JDYZ1TqAauSKvhs4jPspzCNsAP7f4dV9gPvyRp82TT56QNB4wL9KAkCPSXBXrUN9QfVXxypQMUXP3Hxj",
  "key33": "4Kfj5aiS6qiUcmmzN2CXqRsPwmxf73saEw19TftDs8QZy8ted18UJYNVeFkwGMuQmXajVHpTffxeZKfR1y7TB3Hq",
  "key34": "4qn5spPB14pr5fREfXWzuEQWn2MHSQnLNvGfvGjHSrxB4d2HBThTvQiRvtPSTsWjZckudx9fckW6eVrvDinWCdE1",
  "key35": "346rmzy9cotSW5f7uUihMsaa2XCUbMkwGfECgeQPtGFpXZzMiZ8uZtCjB2r8ixhMGrLL1C2CLdDpiYLzjw7HXaki",
  "key36": "617hTrnhEDRPkTTgzqzoBsnDmvghfrH4GHdvZWojsWiushddFpJsyaFygEjzLFFpUG9QhRFmtieVtV5rPBS8qVAJ",
  "key37": "4w9sSvGLi7NKggc6adK3fCbR61XE2MHSzc7jt2G5zpXd5GTo8fgQZxz8YZzw1WKFef4dR8UeAkuKx4tWm6NU8oyT",
  "key38": "WDMHjUdrXMDnEu8emEU94UJTRM6zM9ufLCujYMRdiNQHSVZMMHgpWsa2PNH5rCM5pCtKxYCT3E8jaQ484LdjM2R",
  "key39": "3v8uZqsvHSqVqv5Spg8Xy2EzgtGcUQMySQ6hzLpHyXaXUMCQFjrpVosfcW5GA9eDNAYV5r4YDQi8MV3BQkT331ar",
  "key40": "31Ma91cvDipTsyk5oogtuLVPwzHNAMZfX85hy4EdN4mF6sZ8KiNx4UNySxTpFZaoSdftU8MMtS3A3F7cTZWUEYL2"
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

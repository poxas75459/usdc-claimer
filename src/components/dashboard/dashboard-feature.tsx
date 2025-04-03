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
    "5m3T6CFARRG4k5ioUpzbdHRagPBPYTXGUWfdRCxfjXnyZLEb4THRBfVdqnXDPDMXfCFs448f79N3UGtQNosYJSra"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PjwxzTtc1ve5Q5GZB8t5UttcBKfMNQop5AxYEpa3CBEjbVrF8KcSb1a4uYSbmeEpYQ5MgGgd3ZMkRaSPzk2MYT9",
  "key1": "Mn7howihU4g6C31dY6VApPKGMxcarDiuRDC5ff1QE2aaFF4CHCbZyTyzJ2hZckzxogQFz1SoJYv2dnZFu29z9cA",
  "key2": "4HeZN7zDujgudLEF899U2gKsuxzD4Pbo9Z4QfTjhc9mSu3xK22U8mSPkodkMAeMKsBeLDzjC3gMd94XttkhYxzLd",
  "key3": "63pKvdPqW9s8KHz9wdk6CKDmwHm7ran3seEjNhUaUWUaLxDoCZ9AcN1En8KkuH2XJ9FhoDmqSGeSjLKwbyrY1h2k",
  "key4": "2bAvUguNxupAeCQvRrJQsAsRNAgRWxyyd1xy3x9DHuHNUicu9fJwuqha2oKmfm8QRindUVt5c3f4D8noe3YZ9Je8",
  "key5": "3KFJNwAPZyE8bw3iyNitw9A6YAhUXzAtSSiKfoJPq5h9xhWxzDG4atcjsqhvAbdvvgvLRhf4oFQJqhXmiLYLUUVD",
  "key6": "322V9czKya1JFHTcZVWaYbjicsAHKUMMUpVALxBXZxnLRAzVXnEkZsNm7GRBCW5A5KtxhMpKSMFdGcir2N9afJkd",
  "key7": "zCSH2eAA96sL96YqWe4RRGTeSx5J2K3bEfk9NwmgYBWZquCRcqT19EcwNt2c9LKHrqi2TfERg57U82k9ksmzrNg",
  "key8": "36iBbf4Zt6YudqvwWPc9tAU15ZWdkugkLrQsagBA7JpzhWwtBizCfGpUBTQWgEgUgg1cpzwPxKcaLnQqGMWgZn76",
  "key9": "3X3TsrVc8Ngs8uc1cuCMLmb5KHyiveTx2gfA8B7i56CtdXtgo2SJrkyzvCwsBhdQDd5P44rrM8sto1qhYdJcBeVH",
  "key10": "5CtjBCXMivfwLs2Gg6YqWLp9QdpCXRwi8hpQ5AxyGBaBntkCmaWECRgS1g66C3vP9aQhiqzmDAM5KZtuAMnXAkpG",
  "key11": "2PjdZc4JH8cLuhdTBcYNyskFMuCrGBo2oZHT5QT1CPTHGPhXYzkfL1qx4hz6U4EuDdGLXSJPZ8Srfij6GF5BqYJL",
  "key12": "2zrA1ki6HPXGsy3vxhhxDNi5QRHrm7wZBYJQGJSqgU9oYmSNWx2ZNDFq8ZRZ5QfzaPMwH5bm9r7hwJUPSVXKbUPb",
  "key13": "59NVqVqAVj3AQYTFAhuhZwpoZDskncHwKz2vGUeXxEBAuZ3XMd3CdG4w9AhWmkqWfijyZLw68ykc3XazPJRV6PKz",
  "key14": "mQPwrZxgpPtXDUZpF3FyeyL7Ymhc1zPG8FjkhPdVTofgvLgPTyj41BAGWMzPgDJNVRNdaxHeRQQ3iths6q3BZiq",
  "key15": "U1wuS7ZNeSpEPZ3NKJkGn2jw5814HM3erbT1jj33Dbf27z5yHNuRurhMD5nCTqhM5KkWkz1wGDcC9ekubvUCWnz",
  "key16": "3AT5t1dGTQBA9qa6NNydXmvu99SZnV6M9kvtL6vXqiY6f68NVjZau3n7nRCev59VQbd2EnC79N93KjB8QuGzkv26",
  "key17": "5TpksFvt5xCUhCcgxroXrCXntxuaJjkRS6UWgphihdhEzdyjmdhbytwPaB9WxkU2Ye7X7mRASc6vgWMsFEZfeoYJ",
  "key18": "5EjV3GRUQybWi6BQgs63r4uPVGwDeJP8wxKqBL713M4txk3y8dDXgwdQbhc8YWAKSN17XnhoZqTayXKJ34YTW3rc",
  "key19": "2j1bCSiffdqkrXjcxoC3DQyZAd3VsCpvwmngGFbkKKhwTSVRs5upK5zdSJiHNhbs5DnEzGz17wB7fogST9jytj1c",
  "key20": "2nWH4hydS6M5kyxfFvZW67VGTvKHKyDXVD4mfV34QZgHff4Ws2oQgaSUzPaawHVBn3LJMWJXcCK3psY9eBZcWy79",
  "key21": "4wdAZmTP6WrMFReFmkJNUxPiyUZGgHvTokfxcEY9nAz6KqrxVQZuZUXKHCChM8exTfgjtCioqUomxNi5Syj7wtcc",
  "key22": "3DEo8gtPtbFJs8Zmd7CB9YTTCCXs1KtHpU6b6EXVJbFpD43x6tRuUrPSaG2WfQ4ezkYr7KcnaL2MiaFd2i8Dim7q",
  "key23": "3aqT9pYAb29K5M3Ny1eczs7i6wgQJX6Tp7dScwVrYGYL3DCTe1LhxuaLSuxPKQHqMCY3LJqZXooGjmhphjbMKdCm",
  "key24": "3HoaXo4vStPPut3ghRyUaVaXmAzyvNhzLiyEuET4DNrd37U2D166h3bMfZHL3vjZyDDgnDjqqTqR4dtqZwYvtNsT",
  "key25": "5xjydF3BnngVJ6AxxJhjZstPJRwpH86xxAPrYab8UBZAox94Eatze3KdCrfEuzv8VdMZmHZE5Tfv5EWtD92YJBFA",
  "key26": "5mijp9eHfuyvxxC1sWG6ShJX24JnjSMrDxjjKDVxxYbQDUvK2qe79Rtyo7JRHWVJo6tHmG1pR62qF7Czbku2fDYo",
  "key27": "2KbATqZ1nQYbQMtJNrg8ztk2CAiwkxpTsGszotdVtykWVU1NU3TjHbT1ey4jyNQUm7aucq8KykKqFPBbR3UJreiP",
  "key28": "3ZDmKvhNdHsjJ5Rqr5LMNarvh1CvQFxyYKBWV5GbPq36mp2yfDXHY5aTFaFzMtUP8qc4WKsTfk1fgqvoz9HZ2KrL",
  "key29": "kKCLWVe3J3keCSDEDB8w3DKuikVZa3HsXwM7qqC8neZZfWF2rfdfSKk9EQzxa92zqobP6nZrpnwAQMiJqi2eiCf",
  "key30": "2hSq2xiE7otT3FqFQ2Cph1Squ8CbKCzWtQhB3TYgpnzvgfpT1G4NQ3Ap322NdW1oQXYweqkYJ4gsc5BC43cdU6k1",
  "key31": "4HqEYRowMJW8DAb8tH1BVgM5YQi1UNE7bRxHS81ZofdM7dZaY9PLwGnTakUqPJJRTH5BUoaKPLm4PEcLwGwS2utY",
  "key32": "43rSh3EDSw773pxVXCShx579GkbMPLNW6BT8dyaB1LdcQbmYzDYt4cX1KE39rgeCAEkStUHeicmkaScj73iGLoAr",
  "key33": "4iyAXP75qqvH1c36Fi6VLKFq3bCSJHRmfAcisauhzCCeHMs6UhismGJ3D5H7TDmVx5mCwtJqTgdkYEJon5hNrehv",
  "key34": "3wGE4Zv71K3wg4x19bz1bCwx2r8nKJWu1XQyZVCV8Y1yEQSvtSipKQQSMAV69MiZFQJvcyZD5FPBzaShPn3mXG6E",
  "key35": "4dXPc1AMG969riWbzjQcBFRKRWkPQ1yXXJdf3vRHMLNacKxjGnqXmbjDsX3Efw2TpaqtMpyAos2LZHNYvPXTCTUg",
  "key36": "35oKJNG6SBc8vB1poVhrb6FDry2mcu2MkXDhQdMJicPB63rrs1aMNvN9oN3QuMdDGuNXTMAkPZnEgk3y5S5paWKo",
  "key37": "67mo1YTvhABSNWeUHuJH7T1qVFfHTVbvJVMrAjEkuAfK3f1kRG3Q6BHbNpCz2RyeB9ejT3wLZuqCQvnQZw4KZmwo",
  "key38": "mUQAZJhixYNKwxgfxJtyACYHGELbrmz7ehmDwYb8CA6X7DbWsiRZU4ZYstTGUC3airrTwS1KS1bWXwWQvqTYqgQ",
  "key39": "2FXQhW4GqS1DWUPPJLh5m77Nc2dEjrvKxx8ofPEXbHUKrRzkThKD7KGZfeaXgpFyFg6VRFqzDJVKR98bcjpReoJq",
  "key40": "39FTKa55eAA5HyuwiNxDqbVXE8nwvniMhHRvsyhZTPSf4c7v36tmoUHokvKfvSbkLKqBr5zti9gTWh9vVXp9TAt",
  "key41": "4ZeKn6uiJG5aPt3txr45ZvCmQRHxFXpgK2Z8tKJSoWshB5SV6WjsuGfwycRueM4iV8FbBjnf4Ndeb2rAeZ3GnZRd",
  "key42": "5LmAj48AMx8pTWC3Uj4QrM4z67uEXp66J8txULT3Wg7xS4erdCY9xwSpSXNdqkxSBE5Lh61ha3ykcHZ7Um4LAvxz",
  "key43": "uat1xCX3AmEiTLEm3frp73krehdMbzu1mV3KHYcbitUpFJEq5JTWumMFsAZxhkpyzz1gh7pEdtxYKnFLCHN2k2h",
  "key44": "2YyJwLy5yBoKb9FNV1bb99a91yqj6vMTTvMqTskZt8B7AMVPs4HPqP8ZVdVxKctaZ515zy1bFiGWAvgXjLjzkPw6",
  "key45": "4uDxhtc3n12aAtq8btnxSfYNcJjiTUBZHw44f4bVfa5PBws6xiYPSQgZNfup55eyqqaeYaEo4VzUFDBT6TBzVwMJ",
  "key46": "hod1Yrd96hhCi3tqREzqZtiF2ZEDSTA9nekLujEiV6g9tQqu1h9N7yyVCZ4aibarjqyqduCe4r5ARN1xn6w1nLk",
  "key47": "4QL85R6LNzvz5jNztX5Rf9fUd1bdPnLujJyn5vnoaKku73LNf9viMsZeaqAe92nbXvxCL7bw7ToSoHr9rV6rvxZ7",
  "key48": "yJVTPyEy2E2GYcZXQ8vLRNwfumhxdA1zxerzMXvagU2j7PAUKMNDWd6siT7SWr6roAm1P4NZDVX6pCJgu5fvxWZ"
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

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
    "3FWWFy9V4foo3aiUEubvfBTXznZWHfsLNjR9Zy1VA3JRAMv4Z21k2pcEhECx5HDGG2JqadKVgWmXQ1zX82a6T6wZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ad6gym8f7YC71zhtBApHWaRnrfFiswVZskHovTA2Mbsi9pqTApjFU2dnGZHMUJ9UdA3SdgRFUvLawJkwM24XiB",
  "key1": "3bFYQ5hPcgWxefu9rXj6GzGsK5agwKazUDbbEtGxPwMmVfCfYNb5pjHiZGj9dQ7WoGhbAJa6Nmud2iHqaAjU1LFr",
  "key2": "2gu1v377K1virLAYEXpqBN3T5gttQuLhxiBF4XmcjD7Q24VAwQWZRYUkiMM5fEFwHTLvQEFGp6oic8DmjCaXtcnY",
  "key3": "33httw2UmFEmnXcHDp2D4WkJukw3vG6vc4uJdpkaR5LNzpnsPx9tSDw258PsGBYY9915UMo4cKhJjLuNk38Xyamz",
  "key4": "2dRg33nViQBsZQE81BNaJtbCqSkK2NAiDT8MEu7NfxkQTJc5Ex8UsWzXabKPBdKU9zVhY24uxuXLzN1bjcwtnEhg",
  "key5": "BzagGZ3JgHvQwjsTm1UvacXt1buWo6cJyoY93VzMnCgqoTTRryXyADadDkwM5U48pS464T7oE44uhxUdCbHRD9v",
  "key6": "541wtSFXnaj3LRiTDWXPaa3TYn95byzxHNsinUJvqe2JTFQxmiX1TQcxwLgWbuhmMrMtpGnamnQJAoHzDGX49yzb",
  "key7": "3qsLvzbqB6i4yjvqLPD9hGpUWescAwEXWgLGk7iuMNxGUv8Ldba9AkuzNnzCAXrVqFDSTL2ASdQLByuNwkSz5vpk",
  "key8": "3uayVZp7i2LM3A4unLsqZCdinr1QFfqhnVwHSRkpyA96qPLQAcusTMz7k6S4UMerqVxmZr6S5Uo7oK11QqCFsw7Z",
  "key9": "4jt3Ss1MhfwAxnAJwsa15vSQHJAPyjBRjQ1NSUvqBWSCLK7rxCKdZXvKXbADHdJ4xFrMpaB14tbDX9txmffoS42L",
  "key10": "55j83fAEhL2PhpSUq9KuMRkEP24RSfuU1No7z1Te1o5Afuw97zSeNSZNsZtToSUHsPjfg1MZ2SDgDZ2C1UW8kpoZ",
  "key11": "513dHUnAg9knZELSVTs9rDJH9aHbwSkgLL3dTc8FW1UswpxN13KmRzHmgReZ1jnp3u2Tc8VUYs9zfHXpxetA8VEM",
  "key12": "3YRrVMz992Yv9gvbGjPybLxebbG8mqCFV2b5BCHtbF82PQDQyfbcGEopeJNSeczECdHBtvY3CbZiUvumNn4tBkK7",
  "key13": "szLcAs1DY13aTGs23cxRqCWn37bzrLswURxm5HDc54vvGHPk9CpW2EKoJTGhgfVc2BLx7Fm8z9WVMG6gsYZL3b5",
  "key14": "29ZgPrBrEMVkGzCqkkVdzTGeY3i9D2KUCfJUEetpdefQGPefeNwqjWWiQXhhfJGMwgwi25byFWBGYgmkaLovoQEa",
  "key15": "3RJycPbPDqufySugFG3V4LRWjnRtzZVNMDZAxDqYS8PwRD5cHM3c5i7NGG4T68B8vjVgJSXtgeSWf6anD6JXtXes",
  "key16": "5GRositc33VoKeKH9854NCpJ3d95D4qP9ZxQaGNKsYMWMQgi1gguJnMU28gs3EvYtRMDxfFgZr4m2C43SQo3r46o",
  "key17": "5J3NXKbXzajKfARybU17kBvtkrfATe37Rr2ypWHm2Rjtxsud5vmqj8LJUsD6FTDw4DbeXB8xqZPibMLNoSJjPuMz",
  "key18": "5jkYvNEjNSuKfVFWWgn3YtwuuUsz6rprLiKSgpMHFrFEdKXjnBCS5KaQHewMJWULYtwm8TtsEWWaP8GWjtZ24PLe",
  "key19": "5YjGQCbbE5Lw2A1cxAj6erFnmc5CFpSTFSLJDaBDcQG96jrMzJp19S1tcNM2ecRBJ12iwVKv84e1bsBTgkaSRLQY",
  "key20": "3WpfBaj7KGaHNXzwGuTxM2dU5a5hmo1u4ySb8bdSQTcWya25jxxANuJBdPfAUpjwgwRhD8x7d79iAt1aqL1DkR2w",
  "key21": "4ov5adx3h8KX3nUfMAk75zugn1dgHLsA1xfii1CkYvmNLKUtBAHkWGQx6F2oC2LrJn4XWdmBRoJ1C2cMdVoyLQZM",
  "key22": "5XxY6F6VXnAxsXYStzz4NRWaw8UQUBzBx3RgEGYtdB7YD5TZZiJvetRZU9V1spprQSW8KQYAGJdps3anccBek3Vc",
  "key23": "53d1L4u7a5qRHwP6GGis6bxVxt9KUrJmKcGzfkKneMw8TfTZt9Bew1PDwW7a4sGkP8yQMeWVqJxQHn59Zme2wZdq",
  "key24": "5NW7orecYYSeYbxkv2uqaKTBHnFZaW3yQtaxCCBrCDW75KnSrcBrYtgTCBGsr13wKwAFBjcNmBrKUmWkVBVquaHX",
  "key25": "3eMgdC2wdVvGk4tEdo96oFzxSiVQwRmKmWEVhjU8m5qfmQkH76ndmuLY9ypuVFF4rg1YB3pk6qwDKQzUYVHEu84T",
  "key26": "Nfc93BwMS9waXiNsQ66W4TiUV5iUgZjoE3cmWR5CjkWjzJnEM46ShBsBefU4nCB7jR3CNoP4WLeRbpNFSAEYp2v",
  "key27": "357iMYxW5JitmrK2SxEDTGvtSLW3w8D8zYEgRFjuThuAAA6nGxZxHXKusALUn1VBjNzZbCyt4G8RqXmf62WmWhg8",
  "key28": "5hr5B6PU2Pa81NBtGiZxWyQFPsvFyGdion2JWwGJHM1Bif1BEWjCT6k4ho1auDRTeRp8ka647GtkT3kHHy22jW5e",
  "key29": "WSfzS4RrmWvjTcty2mZ9V2M3hFdNBajrA7jAPkDGjsynDi4ca8MPxsmhKvwStWdDm9xzY8TPLcrsamG59f9V3mA",
  "key30": "5FYsqqTQTrCUqVXQA6C5vw83aSPFpbq9VfyLKgbPjRGQbUyxSGKjesiXTk52kUwWsSqBdYYwtFmS4Rffz9XcnpKK",
  "key31": "4FGG2jwrLh34V1639QfPrp6UzgEooHdgqoWWPzfYfk8VkAAQ9qgu8fpwa9SZMMiicBKmXSWksye9UgvW1WX4t8Tq",
  "key32": "2mEbVisFZ7tLuf5xuMepagfdGoNBkhtK3pMyHvkBZaKGwC3AveUJB5TM9k4JQqtshSFycFZ4gjBv6BHpHKBfVcdS",
  "key33": "27oZ48jun6CtcERgtz7uT2toGpe9a49pvjzk4g2tPCiFfdsyZ1skWMNBpeDQMCgYUwcuVakcMziybt5mwBWHyNbG",
  "key34": "2zmEn85AiJNicWYjqaNrVHW4sKFvfkbeNq5Y8vWExaHp3kDHeMuhAawjQy1ZqRhNyfTAkhvZkbz7NahKNfAC92EZ",
  "key35": "2T2Q1bExwFfBpiqaxRdntm1TtiCJPxgMptnEsxEqsYAxi868aUgAhsspVSSj8Dn6aiKkWbwHwW1Txk12kcgRFkiC",
  "key36": "wF2GvejJyVSChUSDu62KS6UDCmkMDcCvSqtaXDnkk2C74A3uhGuJLQSuJbtYhkZ5GQJChA93QNm554jZ6niPVs4",
  "key37": "4ZXrdiCtHq5GomCQvhouMzETqLksKJX1dS4EdJPo7nnQTdKt8kc1fnrp1zEKFJAYadh2d8CNsSw9TjDHJFMrKuuJ",
  "key38": "5HW8gCNpxAgLXaAyEmMaFLYnaGGHbeGciXX2xr3swueGqvSHA5CSmwcvFCqzbkCAXXbRS2pqGpubGNv5My8vgVRK",
  "key39": "3uhHwsbYDLjgwYfXFuCZnsmHkLcWRgsMFignko7atbwffbR3r1B3VZNTjVrN3YMEFDXQxJJCygYWVTaHX5bNcXgJ",
  "key40": "4peKi8dSGRERAwRFAGRGnGCjn2wegEQS7XBN6hNREmtEd2zmFJRE4zA5cHSUo5WQ11fz88bZ2oC5LXjHaCvYGp5Q",
  "key41": "Vtonvi7PbWKN6EFBYRsRQCdS7EbztWYSGXkcJGMqX3otVHY8imMF6vC9LCL3NE8TrdQTWxBjKbi1ribDhCvFZCi",
  "key42": "2aTBs1Nypex6Y1SDhSNFKJriCAMQkGVgBQUtb7eXBe1yvwuXH6asPDbyTMx3tiYQf96bjk9tcBprMKbymx15jeBH",
  "key43": "4SBUK6SrGP5d3UM2aJbZHFQiLcYHPdxFk6Mef1Ud9RSzyqhHNCFSh88VjnxFPfATyCkz7MhF3tCU83wfRfqQfb5L",
  "key44": "3he7u1z6H1xLvKwz8sGuKPo4uwUJNf9f4zkB84DfZiASK4FQc31BeroWnbRgZBZk6FZCwwDtcQFDG7dy4be1uh8f",
  "key45": "29Li5wtdV4dCTx1fM9JpbB1UuxdU81jRD9kZGnN1zPDBpuR5mtAEFP3HMP9Sy2ZrKG2cbrd9fVzjD5Bh77y42Cb8",
  "key46": "28E4ue31ZQ6LdMJCFt4UDnjHLs61AxR6Mc4pmJBV1zVF6UirccVXHg8Fnjyfe5NhY1nF4ntn6M9Wtz5mJs49xiDB",
  "key47": "53zDFke97dKv3zosrasq2zPRUN6qgqdJb7eLTpZqFsThn8e5WEikdMfH7e6JsetNmkK6NNUTSpx6Fmf4FRR6dQET"
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

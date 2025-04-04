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
    "MgvszuWjhpgkxxAQYUUN4Gmcb2zDnX6f5UR3QDhg1hY3EAP2zn7D5w9oBkR4PzCVEtNkHbrzsDSriHdJaTmibLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41KbsGyRS4MqsKdToWBegPzmbBMg8FcfY44NciFSbLKwzDFdrPN5Csmhq1mTWSuRA8axfHswtCLQSh2RHAKM9tei",
  "key1": "4NM8kHVzDGBsnpTWJtLmxCHZBArAQFvFS26NL2TVV6CpfKaHng3PJxPGWwXMwiCSnYpN4m5XwWUfbgZ4HpyuBVH7",
  "key2": "5PsiwyBFStjo9fo5Y9Q9GdeU4FQLnvYbtehGwixJfCuhGi4nnsyT1R4beJUafvDYTkCy8Ug54Re7jgeZe91U6nHZ",
  "key3": "4KLSxX8cvCEeYUfuhzb5f5UcUXknq8722A1fPUSCgznjK27Ku61TXxYDm4kgoZcpCj7N5U4cSrfoEmJrxLJgckXi",
  "key4": "247H7TYNpoyiTYq78xLujNMRSe9EnZG3iAuGrtFzoD8vzJ47MAvBuzbDZTLFvJQtACRfQsWZDYhLsoFqf37hn1WC",
  "key5": "471rncGwxnpKBZzmkt9ckZmfNiQaY4aV82NLnAWrdqzPQdngqJxpcKzr3pPgue8HPpKBgQXCZ4jjsEgSy8WqQt27",
  "key6": "4zdd1XYJdJWNffNYhSWUMCUpQaT3EejgZUza57edJyXcbPuAG7MEVzWGVhghgABvVox5QLUBevXqMw7s75okKcjs",
  "key7": "4xgdJGbXnceYfWeBgyKxns1Xexz5HPeNSr8jZbuoNWeg2bhRtX46bBh3WuhbDxFWuN4MMGhKSUvUvJVdCdKbHtCa",
  "key8": "duBZpM9mehbz4NuioCxPzDrbj4USWnSfjK7Wgk4FtcXcuGjswTgFr2fLssu35ypRhAKiEjFpgYSrvtKZTiZG8HN",
  "key9": "4bmPDaMABVDFoiMc5ncrnwf5VAQreCu7A1UGdWMe8XgTW3zmZ1sSYhBUbUATAdtffMjghiWyjscm1fChQF3qMGNF",
  "key10": "4dEb831qi8iaPnuGXAaQRxrMs2tgjo1GKUDC97rpChk8ZbASSSMuFUFynkZwHB4hz17czW8aojvtVd2Nm2UjHtLr",
  "key11": "3oYPGnBh6TmAz7MCz3k5fBLvB32tdcke2pttULSxLmTUXXcb7cmkRqQ74A8GYYpKGobCCj6gdDXJJxg8P9GoAyzh",
  "key12": "2GNGMZRxC154NRuEg2g4tK6pRdWrudaGAYr21NbNf4uWMCZdFj5kN5cLfvUPhAAE2U1jN48uKL2CHviYCrxshiKQ",
  "key13": "yfnu8g3tRLf6T2R93ij2Ezs3HwFqF2dsSJMtzx5K2NqCHc6x1a6Tz8Fe7y3gQ8DxhD31xFw6L6mkNzfuzFDsekW",
  "key14": "52HRV64gfMcLSg9wdjYWtw4DgE2wXQUeCTJRtmfYNRZLfA1gWocqTChsYBCFhsH1fjJM7598XuTF1hPaUM6TB5HN",
  "key15": "3iGd9zmob2xndJyGojjqjRvhDD7hTReT7A7RKzT5jmbCQYopBwuwqYtidWHVo2HuSnpnjxW6Vu41MUu9VGdvTcTG",
  "key16": "33wQHfUDGX8WmJLvNbGUUvMBugAi8msro1WrjaxWKTYzqqH2687Jb4KHPLkL9gMyaBxeVkgVqENq9rgjA6PyDsRx",
  "key17": "3GbSJL26FJ7oWDTjeKMLLbFZ4MmHUKp15atTxsDTzDUzPzdiHYbfpF1PPuTRQoFCU5Rhpu1ck3VZpriaqbriNDR7",
  "key18": "2GA9K6Jwn42FP4dadgeWiTrwTyQrNqZixJRa1Mmm2HyhuZW1e1aybvFK4AT5511bwgG2ZbbVEQY7bvgRq6v25yq2",
  "key19": "4HqzEjVhscP4iEQpYrQ1hwqJNDTj9wLbAH6THFB6r3K6tFf7ExQNWVGU8dK9CAT8DciefpJWniUbqCJJNXDx89k7",
  "key20": "61bjrBq1E1z5N5iKFH1JY4GEtp15FZx7nwCZaL8NiMLm1Xdr9qbgeyGJwWBXf3wdKXzxPP6KE45rB4wPGsmiraCM",
  "key21": "UHepYTy8q5eY3KCZmMMGCZbx84KHTCirvzv5AD19Pbxo6Yny94hqNXEWgZkcvswzr14jWceBViTN36GT41CJeSW",
  "key22": "8yecz5Cf7i7BVeJPseWgCxNoPJH2X5ZdFPPBNh3bKu35wkyLTbMJF7esChExkVmXBRC2pSCE8WuiFUGjack7AsZ",
  "key23": "2YCfX9711eFvu5gqAEEMjw6zZoc2W8Krwn1AP5DbyCHxcZ2zEesPN1Z6AoJ2Bez4Gdbm9p7viP1XDya1iTvwG2WZ",
  "key24": "5Lz3gJPCQDgbxrLHkuCpr3YPSmCZrQnSCGkVmXXreRA6xQikCaBHqHEPQpWsXCxrEfuKj8cpzUu8FUmH4AQCLDjS",
  "key25": "5pneNaexMDkhWhp4vcQkH9KLrMUiZvwBheGbZfEiADdngcwPvZi5kTri1Tyh522RiFipNkCAVYwEg9dKdJWTA6xB",
  "key26": "4ErHT8aHtunvfpjfDLKf9q1gfiLGGWQsAtTVDE5p8gotyzPtL6wq32sX8TvAzRgFBTZ6XJfMuTddAEMBeJNe3VvD",
  "key27": "2279cEfAwU5BdsHhnhMk9XdieuDYGdcC3kp8m3qLN391nH8wKL7r1N16cwDWHh65MmMRwT2DVKiGLZrrPy6DwzjW",
  "key28": "4GbSQHpwPbpdvAHyK48BVTBHdUwhMBCyveDYqvBrksRbiXPX8GRi5mDzYquBw8Rq9Ccecowmfy1cNL3zuWE8RaiM",
  "key29": "2w281rH7vpY88WqSUdRTYLk7q1dAJ8Wry5Pm8RQqXPRxCtXCVGmweunsVpdWfUD4CFEYfcv52CPPM6bDGaR6XhZ2",
  "key30": "63Z9NFT1RXwNtguzTf1Xm6PEXVx9ePRdK9U2r2FLhQvrEWFJ1PneG7nGj4ZcxpDZH1XARxeUmfkKYHj3CavfDuGV",
  "key31": "2LEoZWQ4UBFx75a7aA7wGPoDbEVLtXhteAfoWNUKSFRVrdwxV43JswwadZ5PsqYmPVZfovN1Q6tCVD1eTUetyTCo",
  "key32": "J9t72naTfDi3cqvomZq8SSRK5LZzjJjx48Ywbo4o5zrq2Ym76X9TzT18JJ538parDkYzGFhTVAhzMTXLogz4Fhw",
  "key33": "2KRw8bACJF2JKfyPXgapXkwf4zpob8aQoPCE6PeVLYx4SGBBTs6Z6UzYN5ac4JQfZbuMv1GX2g8kjBDKLvMAFRca",
  "key34": "VmMhFZxS9zW2gK4ids9jQwxtTVb6Qryf3165RZ8anFXwMDFBYwH695oCrtP7qfWY1qhf5Vb47XqRJAbXAsyWpoV",
  "key35": "2G3kritR1dKgiXeAxhspotsubhHiFjSy8MNNhhcPhH5Nya8KPfXvcM2tCjog2R2hfpuVqyAhDNrMKXjXKGfeDpga",
  "key36": "3bYy8oB2CVQucRMdJ33QpAQouXFL3xYYjJ4E7YYeo7mWHrYJaL1koVPY13tAhuWCwVay1jbmCibkzbUBZh6YjUtf",
  "key37": "4KQhcPrZZweDvLmpA861oAVvfFj8zdfXT5rvwoTb4T9uBW6FdVj9b5HnSZKuH2RcNPGEjNoWVTuVaRYiGcEY12yA",
  "key38": "3ABf4A9cVJXyTVZmRsNJWSRDFEyD2jMwFxbXtqcAFQGR55KcDS2ShvgZFV7ZAY8gAFiegAGJ62kYr3Q9hbfpjmSH",
  "key39": "5JajKHVVnJfDRPmpkEG9CR14XExYvnXggpwttLrcf1vxqHHy1K2ihaokp8Ze6iqUwQegBHsx4X2uXCMRgHTRYP18"
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

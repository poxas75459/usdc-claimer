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
    "3ByEug5Fn7cDZRHHPLGqn7YPc3zasx15wZDhdCQomEBNLrBB8GEfRA9C4An6oY9EbCaSZEuKRtnud2tfufLJ93fb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RJ7ahpUETkAmY4kmzcMpJMi3LDrJJpyezjsPFeV4ENtaYvScj8U5aS32dgNoJhcPuZxa4f9sDvDGKak5mXekJSn",
  "key1": "4RxjbdLjMwnX1XuB7FGrLruGHj5tb6UeRKRQTxkj4zCMt7ZpFXeuEeaTzREtgaT9Yf1rQY3QXUfq6yWHhA3mfaFE",
  "key2": "5yUsQbJD4Epp2LceGZCz4SQaRirh6t3pX9QutaJ41So1Aww75QmSmKUuiQiLAACZVic92uVcZ1X4F63pzcXCcQEx",
  "key3": "5Rv5ZwYn2Y7jSLnWSjwCkZUfV2KAFrbsEo2fUVe1h25C78H5NMjEiL8RaAzDVLK7FotQW1jCrvi8g3EMZ3D2zXsz",
  "key4": "kQWz6MWmKsdkM8rFcyqyAGk9dSE7Zckgg6RuYoH3WB3pM5a1mpm8BsDBmJ6X27rPpkvYSeWK8ssmXZb6pqZRCZo",
  "key5": "5FoUgaVNFjyGAAcuGYBb2BWQJPoRPjwS8Q6bx3ncdAXaaCHuLTk4Efea1PJWTdTvuj4o5zsVoDd2CFq64esFPXJF",
  "key6": "2RWVX92Qcyo4CkbJxK7cDSRfPf35eb8kBfBYh7JDhLeYRmvAX1NmoRcAv3d7bm3vstZomni6dsyEmiqgA6ALoZzD",
  "key7": "2VFxv1udAcJtCZwpGRNRpniW14CvarRr8yG4YmZ3CZBSVTZnNocLD56WafkEKRU47i2YvLuBTtDobR5GUrB6FRUo",
  "key8": "5PYDSvWWKEMJ45uu4jFF6WzjjkJFChFKc8dFxDPLW7QUoFZSw8h1kEQB5h7rLBRgTaAfA91YqNkZcNFXfuXSNoRG",
  "key9": "4T3gZivD1VjB6Tq23BpntbBaG9FyMfpGaewXDgKPDZXETpBbLdfPdRUKqt4U973NksLVPmHFbnCpai8XsEuxpG4y",
  "key10": "2SoP9jdfNuTS2vMgYp1aih17ME2kxAmCtmGKBBwBmDekHfN3KkUAWdZeqjdA3Ueuz5AkQxUmvWY56aNb6UYu6aKG",
  "key11": "uwp2FhZWKVPmKJXTGSA6psq1M7ozLJUKksrpPc11TFwnYwUA2pJETXCejcJuJCSZuNdY7fHyddAJyjbZLanp8g8",
  "key12": "ajHiG9EWD7ZojavSYXiji5iP5xUZqhSFsgLWnKgLYsbUtRxK3poXKz2dPUSscuqnpXBR5zCSx1MyB4Q6Hbyw8tR",
  "key13": "XgbXehEnXgmaWdRCZfoKVzZpYWNH38k1eBa179KuVdwvv2js98vHjRVTeKHvFtBMWijR82ofovPymD14fWqrmho",
  "key14": "5z2wWNVGNhtf1BPx23mnwm1uHztmMrGVDasCfnKouGoyPGs6Regikft4VALs6jLxkwZPvSQw5vWGnoTNekTFoR8g",
  "key15": "2S2t9JgLf7xBXSVdCCdSUcMtcxTb8chCfinCdqHzjz5w8V1CKKRuu8PMxJVFmfS5oixkgc9RgCpsf9XNBf6Vsv49",
  "key16": "5CbEFTJDLYgdWHZomKT1L6iDtWQea4K3T29wDQ4yTrsfpr4VE3kszEF1WNEKLHomgsJb9sxpS3DyCoDNoQBSU4tq",
  "key17": "3bWfLFNiLaAVXzr6cudF2n7bpEexjE3CMFYndnAnoZg7zSJ6EmZbqbaKcmkFfi6KKzoJTT2h9Z9HDpCajWyeXmqV",
  "key18": "42v7UrprJN6MwW7gsqKX9qS7mDSY9N5NoqHZz1NgJir87ZbEkcT9CLXkt6YQviLVUsXZMCNHoZMZxRNL1f2MJdEM",
  "key19": "2nXyYTTPa4AcVWZExoF9doJMtEhgeeizdpbt66QUxRx4ndMmmC9twKp4apRb9pabZVqrsG1VWLhuDCjDZxHH6H3E",
  "key20": "tjZtugVDDhBQqNXpER8JEFyWpaC9FuVmiC4v2yaVcDvXoAPSseDBHHPzKgx4j1uwE4xVnvZTjh3rSyQk2XHLEWq",
  "key21": "5QPyB75kEXBe1tq1qFBaQH8x8TUWmeFsZk3SByghM26uiDbGCqVGFV8PEW1LGxoNgBQG3VM71eTP2ApxU39W6vgp",
  "key22": "4yTwE6nnwj4YNkdHLBt2kvjYmgP2S3dbXszHYLEXXcsUEuUftrjQs7Ct2E4Pp4CnSktDuiRFcJ73p7GYb9vX5st1",
  "key23": "3g7yRU7bpddVyr5Ss97eNpFXPSXCxX9sDUaXj5g1iAWUTYRzLsZ2pM2MhTDjQB4HAYrXez2PnCpBdsfJRj9KKKzK",
  "key24": "52KT1ztzSQGfAhCYBHQmGWpdBM5mQBEUyLW1bLL48r8CCQ5GXdtg9R6u5tqxfLJ7ei1YbTviTB9ex67MirWgTC9t",
  "key25": "3EJw4y9GjGC6PXQUUxZ9EPghLjHHaKyP4og4DoPxmUcPC7kechDvjUHFRTuvdF6MpR44p2M9vasXhhPpPMhhtwkh",
  "key26": "AuYMMt5cF91iGE7dAmaVKFZaDoHs1TQ5zZUVWkA5mabnCrxWrWSonsyJn6iqjHxBoVu3Gv8RNXMnpnj8DX9gnq8",
  "key27": "BNmtrEU14Xp2CJ6tEiZLpXGEKAMRCY9tcFqkePXoWBV2VUXpUgZsnKsNnEZVYXaUR1yZKbQaXfZHiFdWw6u2WMY",
  "key28": "4re1Ri9HeQ6SgrJdRGEBSLGupzJrfckru8VyhSUiQgYC1DSKM1bvi1TbTQ7iMcUspKjXyVVwqy25Y5iW1CcXfuy1",
  "key29": "2RfwSiotxGEYy1twYBuy5gf7nv92HtqMJN2DcxYUv3KgNkdfC6zZwRF66oFduqfFQcEXordu57pMw38Q2x559xSF",
  "key30": "QiMpc6cZZazVQD84ZK2d6dgkWefF51NbE5KUbHnbv5LYbqUwJVjZjBERNn4kUGpLK4JoL3nuGyAFaiRsqWKve6w",
  "key31": "5kYrUQBuwPViWHe5XmLcyi86YDUZUGLYkL2dniqDbTogSar5uUe1TaYU5DWdJRcfVanANfXvZyS8H5pqLb56dk5p",
  "key32": "DAAd4yiHJkLCLvGNizEstrKHJqqzWTJuoXoZs9Wa7jGCPj4m3JVyE3nke7vs7RHBGjQ2LLttLMpQjrQ8kKtcggq",
  "key33": "5VCL4cNL7LKJyd5ofSNKean5kKCWaqZ5cXysAj4ogCjrjEz7vzDPMYbvqqG7SJg2RUUviDSjk2hhZgJmCDWQHPpt",
  "key34": "5e6C7BBeM3fFMz19EJPqepWkHzU29dQATkCGXYdRPXPVoJKiKP1vEY1oWFMJ7nrgXZpMrquqQ6VActZJUev7zmxM",
  "key35": "5ENjPFA11gWFXRvHxf4jtf31j5Lk3p8WHg1WerEueV7dhZwnxMFpHDVhqBMBVXLgVwafzU8VXwpkquTwMBTEknx",
  "key36": "2Jh3ZfJ9692H1SWsUaenCecBh9R4MRs38WgfFTaMsW9mJwePuy6ugKEyRmydTSuUSmMB8eNoGKqrgtSeW7PfeW8T",
  "key37": "57TRrFCXyPBkc274gGCmcXGFyKdiBxrWfoARnrvnWGvUF5AgypxQQVi9enLTLxKk6qFsqe4gQL8gva9bTB6GyzAj",
  "key38": "3VndwEo51rfGfVnxZjr7FHacMKobVwjHY9agTj5gbYYeUYpbHLDupZMemivxJCpc1dvwsBL1mwNw7AcYA3FHKtZk",
  "key39": "5rcsSXFgVxSTQUp2H2QLrJ96JGdMnTGmw1WkjUbFHZ8ThS1yVodwPRxKYmWCPM5CTF1k8to4ehY5N1fMBZoY1K5P",
  "key40": "FDGK7trCCjaeWCXD4GgimFfFgYgoFZXcLnsRKNZnXJWEpVhuEaXhsTrXULqZYTXjaUT7jJ2Vwa21Uu7pS77QFxS",
  "key41": "4uiwmJGUEXRVfUgTUVoKSe6BdD2wKM8i7pcDHTFn6xuYM1KggXcKmnrBEpnTmN4SH6Avw1jyd6xJ5mHaMCPqNyk4",
  "key42": "4qgBW21WRBkx4n7MkUVLyJ7mMyn85y4cC8gzRcFbE2d67HWJfS5ooV5WLSuNbYYCYgnBgR982YWrh8gjmH6oqXuU",
  "key43": "5eZHovNsw7qC2fNBoPGTPGN5XKFVFSbzaikbRnzf2FpU1GSw25bFFCNDUrnU2cbGjSN1BaL1rNU7z73fzWeDAo6W",
  "key44": "c31q416FNs2uWJZhBfkNWytTWp4cLCaPKL4xro8VdK8fzUjebRCrYYkxA3jdDzxfbKZ1H2jRKm8gJoB7Rg83S5b",
  "key45": "58YyqaAdtKdLwCE3HR7HvRfW7TPYvwmbkVmhGQUbUjr483cnDsosTSYyiRMcgSjHKudDRyWc3YfidnhKUZKWxwPi",
  "key46": "3vNoFUWVk3YJms56W7PgpkuYwjjLHjzDV5jVorqvts5gWC3KuP2W5k9x8v1phZzoj2uJzRZCj1nnjTt9ET1NWkkE",
  "key47": "26KYY1hBzbk4piVPAPXx2eKKamgKjGvKcy6GS17onFZqJqRbtkamgwUAYcVYwCA4d5Xoemyx6X7TGjrunTRkWNgH"
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

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
    "jGbSQ1svF9Bjmv2ToUmxiCFLXf4xMDSBsKBWYnXwzvQcS9dnPDN2NBZeFH8ud2qU2UDk4JUVHntTnxW6VKZhfCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gVKQVtT5J92HzZCwBsirAk7VoJo2XLpsys54fRQhsfXf1P7bRCvsyCdie31jMzLgXdtbXnv1N28GG5uDvEsC3E9",
  "key1": "4y9k1LepytPJ2oSqatpUtFgQeryhzKs26R8mhGN7gN5ecL66YmrYtonMtDdJnKVNn6aymDbgtW9FD76nLMEgDERG",
  "key2": "2sRsnfmEK6AcGaMsGwNqTtw3HfoKtxAwQ2aiSMyQiLMvBB2e2pEfwKziJ1h7ww7opieDNaUeGUJgxav1HZrzqa35",
  "key3": "4oDRwbCaNoFnyQVEH4abqqn9ufC3qtDnZNJ96pEA3CGdCezzYEh5Hgyq52VhVPNVJkCRZdLhm5fzqTUwFbTjR6XA",
  "key4": "kYquMSBCLtbiebBA7Spv5DksB3CeVhHYj9Nfp4KaHH1c9nSPmG8Ueskqoj7jjnfDwVaDB8V1W7BZ1CBgZa1ZxaB",
  "key5": "m5xsJgHmVkwMcZ4vxC5SvjLgtpbfbVnLTM2ZtVtaLZG2VPRa2QnCJeyXtRZoAkhfRbPfFecX1VP2fWAgvqx2nGs",
  "key6": "57F2GrsMfJNxUoyji5Lz4F3UCkn5tNCfTxZ7b57Uskb1UDQMRYdNPokeQwaxHZQkKBkLYWwSJUqgdMhFnbRQSnoh",
  "key7": "62eZ29FBazvMWFxPFXpiwY8w97crXnDrgxN9WBHS3QmoxK34wdt5rpbarFu4wuRMqaHnnWES9sJp8h6jVMsEQzDC",
  "key8": "3iXCQzeWPYVfYy65nMcEwCRHpBGdU8BuTgimtoqoMtac5A4uKfQhRtnknn6C2WarkUR1osfMMdYuPsmJ5uBsHkCP",
  "key9": "3732cJEvhDCGKbDmx1Q66frYVp8BjzwdoPb1uLEYwqisuohNVC95GzTrWt1zPTZxeefHPtzBmquKzJSWwpcaKjb3",
  "key10": "4CUzkc7eTNSZMeKnBpQ8agztebDg41Vz9tz7SyPvznmFLtqmLmSLxUd8GTDWvgtTq2BqWv9GrHW9S5bDkxwjHB4F",
  "key11": "3LHu26jM8ecnEJhrygsQnTuUb2HqzfErE8kF3VYea5jJZCN6Sh5LgoxWA2kDF2xZEmHF2MjWmg65cXrK7WinLCy9",
  "key12": "4QqS9BysVirDfhCadPcf2ooFRNSsFLu7CimHDs9aUQLpGxrcMokwwBbKebVcySAsBd7XHyRaSS3SxUEUvfu21AnX",
  "key13": "59hAyntkYvZpVGrjBcMm4EUdyGQmg7NEwfUFs4dmNoXkB5X8YPuvf2KVC2PBBeoUiVhqLjw1KDC8HedWMfRFYzyD",
  "key14": "57rD9PjYMqXjPjukW7Z8vnKdamVRMbFRaRDtX6iVonyYtm2aajkSP4G78vPABoXpVwkSfodsddSo87DZ29eSnimm",
  "key15": "5HPCR7eJvboCCVdT5RbsNSDBrb4kCbaLs1PjWjzfz6Eaxow9wpwEyzuCiMchRzwDHW8R1f7YRDRsDdmisBgMNMvi",
  "key16": "5mD7JLoVw54kB17xVgGj7Vt5E3wVq1WA9PBumphVhNmfD5gzZu38h3Y735WARGaE7LT5wE8NVGBooPcoEfssg1qQ",
  "key17": "3pSxjB11ufPFLPCAGV9E4azaxxHP3GoKaYUjA5asG7o7gNSew8vs2DfwFe8mY3eGBvsrXdZiLuQmhPb8VLr2L8Xj",
  "key18": "4Z1zWcKvvqimSuQXQWuckBwRPFiH45q3zkp4jwU4DCGitD5PVWvU9CTtAg41uto8SVyZfncxXkn4CRd6HFr7Q9Uz",
  "key19": "52AocLfMYjx2yGh2Qs3Fikm2pFTxHEGxiAZT2pMDSpHf6Hp6ww7Y9FT6F5edqq8rvYC5nSQEtD6XyRGnVhChgAHt",
  "key20": "26HR35HYtLZ1jJrzNWhGhGY1cAofxQ9rVs1sPgNGkfCmmtiSA7nmrKiw1VNtJqpbHLYLNZZGsDxVCAT7pqxuLHy4",
  "key21": "4mQgzLwWXJvrYPAmaiizGy1QH678rWBHipcX8sjAELdLpNyCJMUwPbphbCX3e9vLuAhD38WhSDxC6Xd4SbjGuVd2",
  "key22": "3EZD2qmqfiZuSZM1w3kboFJRS1nWiqpzpSLYCbGeXGN7XfHLVsun5W1JYSS734WL8N4Pn2vq1XVWTR3o8a94Dykf",
  "key23": "zenf14yySwn3SJq7xPgMCPo6RVCm114vTyPebc2NT2PwjnF23rQAPGFBkwp4LiZsKXhuNuSVQ98kSTk7H4yVJAj",
  "key24": "2oie1wi77Pr5uBNS53SQsksdhgjvE6wcmaGuNPpeqfP7KXhBTAB4973Bsxge5f8rcBqYq1XkbYWW1DS73uoMcbW2",
  "key25": "4Nubexf3EXv1faHDRBrNCeXaLnCp8Er9NWLDkdzdq8nqwk5HJpYUh5iQs7RskY5HZH5Fm3TzLqr9RZK6ie2j3ERV",
  "key26": "7kQStwZ7Xra5HZ1LAiGkdZfDZbWzgK7UL4xEFS535it1w86ontNv9hLWuHzz7JAjE3YjJpcgq8pHWGCmdag83yG",
  "key27": "2DMU94rSvg8LyrEPFQAhwjt3Mo9Us8tZr1xppMUZPR26ZoJXw4f7eT41fvP2euggrpqzwpTG5eHBmwsjncvgeBF2",
  "key28": "51LPhTL2oaxHwqjVYqqxyXShTdjL4YRNxsoXsbTVbBgoevz4A6izshxfTT8GwxxL8qoPKq9jUDU9ewQVXs6nk83T",
  "key29": "5TM4i6SQ8XV1muJegrZkMV23DsBZJEWLhNjVSTLdTySsp63vMxqxZh7ZHKwBrPERJR7KcW8jmeWzug5xXxxLFK9p",
  "key30": "5MVvdYb6bJzqpecV2S7af4WfX3Am8vwKofdAM13sBmTEXzZYcydokz4ErJrCoEd8smxvaUWY9jmt6pwTthNtni7x",
  "key31": "ggKbqgYC49R5izTJUNSEnsruh4fjrgsjcy6JYopCpJ23pxwzLZSRm5BUumHbTfd8GT9ah9G7o3an6sSpgR6jXsm",
  "key32": "61py7bsGN1qDFHh1N2ahrDdCMrVoZCVC1pQh25AKe8hoaDBt9zfZEWDfMTnwrzWfRfjQwHpHwHgETKnArtH5LNgP",
  "key33": "GBA3TaQVDynhgD7Sbwuz2UTkbW1TTpLuT1oT9oE4Ed6WLEczBKLpmYfzH6mR5X1yrfJWsVGXKi23cwMxHFP2bwb",
  "key34": "3hpx8bYgfrXmQ1eVDaYpVv2mDSvE6sCTaUJMmg4ynCPPSG2ov1jAuJ7FMWVfTPoJvdPJ2KsV5tDCFPjfs2gQfeks",
  "key35": "5j1JNAq46ojAhHvxm6jCQ9uopf3ECBEWc4Cgf6DLwVvdgoUEq6XmnUQZk5mXkiZci4qJPZXYgrihCziUArJJXTWA",
  "key36": "4bPhVRW1LiCkYdZwQPBu8ncAf13ik16irWFTitYUJfUBmaiaxsZhC2n6amFySgeVskKg9Wqmcf9Azhb2ezAMfwAf",
  "key37": "3mExfKfjHz3SEeABwb1PLdUXP3E6jb8jwkjFtHNwvsd4ruZqZo3syxrgwtvBfg85Mvei2yUe8rdafPnc8KjnXnAV",
  "key38": "5Mi8n4FfWzH7rG7YyogbEFSCaMUDN87cWF3B7cPuAWRf8JudHhzm4zXqvXv3rKhgC2d3F69gm6pEctySwrhSYg6G",
  "key39": "3ytanE2ztu3AhCALvVtjbaqpKjLbhEZV7HisBHSwGFwWRaS212oRkHMGnYFMQEAkk8sHBH7sdwu3D1nc6xZWQxE9",
  "key40": "8SP5vhgou6URYkaF8wHreVGM1NSDMv8ZKq8QYA2SRP7e5bSti56pfKKcFpjq9kSM3dp3SmPpxGnhnut3WVJSyKU",
  "key41": "5icqxLNgJCqmL64S6Fdxo7An7KPmpxs5uQQLUGRNMec5zCorYJvhqtGpcwxgs5WZyAeuDitAVTMUH93udfK9nHkj",
  "key42": "4iwZv8sEcrzyd3GnomDWStoQuHxYz7gjs2qyCCAJAmTM8Hpn9DJLpxrHu3MYM8mHJyt3K2TJposLW6bGVQrcoiGc",
  "key43": "5rUwWcJwHunUtHV2YJscsrxd6yDkubkjVmg4hwfNvyUk94doUsyuFQd1B9E33WPGnx6LRiMBEiJfyq9YRJHdBDwg",
  "key44": "2Jd1yes9TBdSXKt6rfWs4qG6Evf5cLpcTkvmcdLwVCLrNGDwEVTE9umSoMtntAkuNb5sp8p2Q8e4kTQpdADqZXVc",
  "key45": "2VyVGKQTSvk5UhxTRYHFNaYSun2F5bbjvre2gduDzzD6ChvA1zDJCx6Rouz28VePuxCm5zxXAyDmGBghfZgNPoo",
  "key46": "2CsU2UcK6DNkRCjDnBRAvgV5prfBTerKRWLoQQS9Ep9rWRVMaihEPYh3CsogFqxFQwavWab2xy4Yn71TyzsLmfz1"
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

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
    "2EVZVQxnvtaZiQzKNDtcHtGq1BdBPctSxsaTfzbNaGdyRUXTjoc1eHMZ1AU8Mi6AtBJGXjcsffwfVdZBNzJH5JmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmcPTu17FhtJDtGoJu3kpvyZoj4vj6YWhFGnnRGX8cJEFsJZCEN3TR6vP4yEt7CMAyxfYgwu8heGZxp3eoBQMzZ",
  "key1": "8Fx5989UjZvJ4JBsPiyTqK8PpVs4VkLTvJmFYpAURmZnqC3uGCcefGWm8pT9XEwQ91NnztfZVwbGp86uj1h88zQ",
  "key2": "GtLfvKcAKwo1AtHbq8J8TBCzYdcpDJo6XQiosJ4USFoeVa56r8FvPGg7XivNehdnX4AEWLXAyLjhkjeW4XDZ7gc",
  "key3": "55ucEhkwz6sUfgcbeGbUDevwdNBR8uy4Yijb1222p9v2VTQ7hrDKKzBKtSpyxA61uRuo5Ag1g51hGmxEtiRQPAJV",
  "key4": "3ChLjSsr5aG2mUAVTURu7DmvQHGDzQUPkRFg2VtWomMnaaQrA9ZkqmkfdSLTJ2G9JUNpevNBQhyCfPEZP6nwRrHV",
  "key5": "5g4M2h6bGhnmKmgVf53C4j1o7tHMJ1LtSFKZa21s96VKGqGsjna5BByhzNy2VhXnXeC4SbGvpnEKehrzMHZGaJVJ",
  "key6": "3ZWPsLPuLuT1En31xx2rLfCux1ZbZoURwzvU4c3Ss69KLXP1GixRRvL8yaDRcUwJiBfwim56Ec6f6Y58UiHqfjBR",
  "key7": "5bqgeYqTB59Vw8LVwsZkUAyAN6akjaBzDtHwitsqjEXCgaSaHP5tahUVukFFCdeJkVsp8ZcZLqSbjoocuVrhf7Uc",
  "key8": "yDo7x34TWCVf63aeifE5eavoNjmBZQ2sY7vr7LYesPJGf3q6s5PyYjnZk8TFXno4mLtJ2RJTR9JpatxYWUNX2Bz",
  "key9": "4qEFbc1SDuJwp9CYEU6ZksmQqSe9PyTKqM1SjSt1qENMSzJyPF39FtzLtdz2BNKTAyMwfSpeddjqapnh9Sbn4A8T",
  "key10": "4mu66PbhdFKBY11ToGYhE3k1oFTwHGbzrZFMP7QxVwhY8SeWiu6vPhTY5UiQqcqF8N7CqLenU7kDEanEBEPrThWS",
  "key11": "5b2AhCcNvtCCTUaxcpbY4SHDjJqwn9uk5C9R9Td1eeMJoFQG1pYwQ5CrnYbKrXAfLjhmnkQGtDE9eLA3a5HxY67v",
  "key12": "2HrrpEyRXHUq9TAZCtwqq5rffMp5EhxwUs87fp7tvLpgGXpjuoDkGKZDAjtfiufWnTKUwXLyLeQ3NxgStSbELY8Y",
  "key13": "41UFHH1g56gkmdhpuv89ZCwbuAV7Mnmi5W9hMwCv9sVwKYatFEtxnEbcaHSXNUsXNHisdi5SWVCciifQzD3Ez2Ph",
  "key14": "3yGPsZib9UE1cY914AM8XhohDcRhcuccGZTfsUxi3oYkNbs2PXrJKgT4jkUo9U7N8yTtMEKi61DunmkHSCMJnwH",
  "key15": "4N3zbjvRi5E3gmJGnprPEwxJELa2eYb14vBPHnGdgwizqpDDLjW2DvFQ6dv33yrRMRZEXQSdWAA3R23e2sqdiG1G",
  "key16": "KGpx2uucv9RMrFUi6g9cSUMn4yXuAbJzHJaqM4c2Zgy8irrJqPBJx94VoBFfXFpynUtbDE8PzVbi7PCPZ3SgAi9",
  "key17": "4ks5nHN9e9De698hnGPKBQL2EVV3kBhcLvndL8PgXDrNgjFTGzfq5KVnkwdFw23SZmoM4QMeQcTB8U3AcDRnAwDu",
  "key18": "3emHnokmzj6PgtVJXXKccPKkyfYiyxpMpxL9J1j7jQoq1bp8KEXWFMRpCQzDcuYgS7mdtk4KA8FeLmcWTZHxU9ax",
  "key19": "4fNasjtnpiNdQs8ddMYmZrBPdv2vrvh7k3fGpLY8rdPt26c9hLJoktfksTp2h9yfioTVFfoKeXgao3Fp3U33WSxD",
  "key20": "3wcQResFVbwqzGGjMFprmWwAK9reFV4yKd46NNPwduJ139GEozfBtSt3ndqPv2itijJicgZiQALhhJ9N4ESPsuzr",
  "key21": "394va3j9B7dZmLayJ6GuQz7FjR46oXZWNjb3cxRrWoXH1p9AL7FzRbFTKYickEkvV5wbn6yFfRQShqY9o589ykaq",
  "key22": "kLErwZK9GFEMTBjyxvE5RmRipmWCbFcY4v2yVGvSqhPJaXcfBG7mfzF8zRoeHyMfeVA7T2mQuF2tbGCJDJuK37d",
  "key23": "5HCTcNg8ZQboVLUNVcQucPhzsr7AtTrm96w7bfUJhZqZKqsQbTvejRimuXJrhKeaRiFNkymP9RqyDb9kHfqUho5L",
  "key24": "3gqAwcdfrL5UVPdzcUMxjjJRfiyRUcisbaeVjZ4o6iasypTBaKCeLi2SZdW1ihKuLZ83jsxdNmXiZVNhT7SC45Z7",
  "key25": "4yfkGUPKCyNHyVuMUXMXCzmNsKiMU6zip2iyznpbAE48pXTHD2FTSqW5xSS9YtAFs3wqPPijvR62UEAFLXBVpuom",
  "key26": "34JspPvhDu9kAuQes7nEvvcjA5SEFRcbqcqiGBhTm2Uaf8zkutoq7yK2sPfYpDaz2pEQpBMiptMuaqyvhMPh7mCi",
  "key27": "3mRxgsLVMs8cV7t2GuZAKLfigyWAu6FHXnsFYWTeBJf7GiKMze5jjNPtRTz8Xwia9b6Vk47w2dZw6QfyEPKGz1L9",
  "key28": "4o7bD94vyu23pbDWG55YXBpC8WnHem2Xrwve5aVkj3aZsmDRsGPf9tepWkaaMWDrjYknk25Q8fjiV3iQiBx7A7Qh",
  "key29": "3kCFFqZV8LBTxWA4o8UorfRePdLWcigPYkyw9XZEDozZD36ax4SS5RRQN7pLdiiGYU3WJ1aZyNg5bKkBFuttVfg8",
  "key30": "4k1PT1j1YexUwCKLyR7vfZkb4ZNsSsw8eZ8nFTug9NqWtxCtLgE4SJxGBdHW4XriKB4W4DtQZG3sDVvpnAWX3LZz",
  "key31": "ZguQX3oRPU9aiXkU7KfjjTfpv7xDVaeQJUWUfbi5koAWZ29opB7u6wcT6exJWkgSDqBMgGCbPEbp9gh3CSYn1TU",
  "key32": "1jw6YUbpoc4LtAtkgEkRwjhHMAmJJnJSdEVtDhTPUXy8wr1tETJxm2BcCgsTpD2Rzp27Cjjodw6Aiu1qirQFABC",
  "key33": "3rGZ6QaJrB9Znr8Fg41x1xw9xTES3m7qgmi5VQoYnaVaWuLZfxwYSLNmx7kaNTsmEDjnQ829Hf2R4te1Einsb2Tg",
  "key34": "nojDBZWQBbUbEPVdh9VCRh1J4maADgh92RuC98Ww1m2qzk1ekatHExAaxZ63w9TTD7Ro1wBZS8VbC5qshHmFYF3",
  "key35": "4r9osdxTZNA46QpVop9Vw97YvK3P6LzpHGDzSWfyUJnbwU24DYjL1sTU6pq6HM2pT7nqjYdeD5fcsuZSdFnJJ5Qo",
  "key36": "5B6H5iXuc4V3sY76mWLpkMwTJM2DQYWHQrCsCgBSEByMgj3Lc3Jy4s7j5gYVWh9kLPT3kvgiyVEheXC9oPP8t87d",
  "key37": "korLNg7TVnFSuorixfC3UfCXF7TNsHkxm8RRsbU2oRo4vHVKPyCeHCLebMETBDnCpzEN2Me8mTiHbe7LXrd1jDs",
  "key38": "59eK31ktH1cuaqiHTh8mABTnxBGxMSnCpFqKpJ7JispEgviMaqtsfvMWwmBVmm6JdyAXV5ZPjoeafyspkmBPpvZ4",
  "key39": "2KaeXqSMXyUiAqeXTfSWfrg3enyin87xpBWqAHjnQfjoQj8JWDWNxZTjBykc4WUb3pgzLRJ6qkVkiucaap4rEDwK",
  "key40": "djjsiGdESsHuw9bbPCT8zVVYaqk8UCTpE3sN56VYfms8NXdRenaPFUY6QxqAbStb2ufViUeU6j4BuuKN2kro6f9",
  "key41": "3ZL9q3dAEpxQfZLhJae2XDamtS1Weqz1XEAGqQb2Gkxw5ChPoR3hP52xToTuyu6AVnnxpf7aQyjayiQpSLNd1xMG"
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

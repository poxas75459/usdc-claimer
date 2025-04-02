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
    "3EuSeUt3hHMTLf17fkmQ8JwKMa688iNsuLrkgt5VrMcc2sDwDQWpWpar5GJ2n6VkYwuNk51Q3pFVuFmVjNu1omDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPZSGtuiQXMobN6pbrxWbg2FNtR5E6XN9w9933SKPQDgLy3iWeQmY6xXmKXvDVuQYm6M5Uz4UH98PKmLi1SFjzJ",
  "key1": "3BjgDx1p7yCZpGJhCPJxhfNbYxJMDGHbYTvKXAVaos61pmWQkHKXuT15rCw3WSn37PsAezaaUmJDUALykJfKPCsQ",
  "key2": "4vU7SufTLkjPV8TEikao4uXD8WaVU7rBbKiyHxCLE8RkAZ46swagR6unkdFmGTK7zMM4wwC1j8WPissMysJCwD1P",
  "key3": "5fWes3Rx4tVXj5TgzXZkYPnR9KKqLmg1eztwHbSazceiMMQMvSokzvPVhyF1HFSFa4dNaJLNyPJPy7AG6SkKP9Tc",
  "key4": "76kvPYcdwSuqWCLmYgQhcX43tioCsHK61kLjAxfEiitxVb5ZC5NZ1faKUa7FDdJbUthNd8HGQcrXZF7ozdBipN4",
  "key5": "245tdGjmg7SEatEYFHofGDNkCbyzkGX9vf2AuL9ZJDXXDrDguLU3ks4DC4Qcrs7PXJohz3HHi6ABoa5k7ruiBVB3",
  "key6": "2HkGCxyAZCRUAXWNXNGAT9tQpYTR1HgysGeuGM64mMdi1kdyDkPwZwLKLDP9UftvcgQytbp7wyRZr2oGGBbT6UBz",
  "key7": "4oJ7VgZvqSKYDTnPF36CN9tB26SfHyBsKaWgKE9SY5dqUyrk5b8HWd4CHksFVxVMGtBRvzq7h8eEbK6MTaeAGAma",
  "key8": "5E4FJsR9WNpEVCqWzmbmX4QH2U48U55gG6aQ3N8q4gJxqyLbJ6NNeadkZUHFb9NRA3GTJ5kZVwZPeWRGVvMXKhE7",
  "key9": "5N2B2jY37XMdLjoE5m3WfoNDL1K766ALGrv1QjhRTrSrz4gWrnBPgEdGUy4MaC4WWMfWNnmHGT4kenBi2FYynVbw",
  "key10": "LtjwYrCY5YWrCoPknY2BbGzon1bYfeV2K57q51UcSAe4NaFXGExEYgJFaYE9AiUQTWDGuz8h9ZasnnsQ56NFi2q",
  "key11": "2zTLt3xN8z5MTErUL7PEY4sHGyeaWg9H9BJgi5GyVjW238m65noAuGFmYag6Q4L549R7mbvTaZ7A7qNsay8E7zb9",
  "key12": "53RNSCbN19T7tpzQNc2hSqmykPrSJ91VW8RQQCUkQ7i1aW4TPg7YwWQnR9YJbDHKQ9E7iw3swdLyAToiNAHEVa9b",
  "key13": "5ouwGK5hYVKxW72RJ9jauBBb6JcQqSpqWba3g2heQhmzZYofQkEocghzKeyrHxbLaeqZJyMev7aN14nHLWV5wpY7",
  "key14": "3dYnjjo7CVqzL79mutxj5JhznVrgioQRk1qpuPKgV2Ff6S6rN4xywxxnszHN8qiBwh7rYLsd2Nando4RrU2NaAa2",
  "key15": "5UTkEbkveNrfiRtyZs541uSjCcaWNi8vLY4HyLP1LA1dCaDKWEkAhZGTEgp1mCCfCAWGaAcV9k5UsjbHnVR3KYnm",
  "key16": "3BCwDbkpqrkVggCF9JGRgetyxEGHkHmXQHWVdQ8VyKa8yJTzPhWsQ3gjcxzWpwLaXyZDH2Y43v18oE8Y7n13CJrb",
  "key17": "iVksv6473HH4UmGt9rRXuUj53tRSmmcJbdYZosuVhBoWUunVsdxPZKVDw2WWM9TsTdjdpbowuhJgbSJ8NWX6N5w",
  "key18": "5XGsXpRZuS7VK48Rx6o93nPy1cjE7oKvAYNxeiqQDAkMTmehQoKLeYa8dnDYzQdiKHYtTY8C7z8nfxi36BWBHRBY",
  "key19": "3gXKDziATTjNUHL9AhG5kEKoUE1Dddqe6xUgaMmf7vf2a3C6kCM4uV7H8hzU4cAGQ3uELVrYZAatEUL7DJJjdPo1",
  "key20": "JjpMjRjYKAPaCXhn24ruAPiTa9J1ktJAkBkuF2Hnib3T3pqoH7FTqj84C5qoCnJ7SzG5gAduH3tpFRySy4gVuJX",
  "key21": "3dYCWuX5C6rNT1aGfP6YGe8dCTC9jsVDbYQX44Maew9agBu8Wu1Da7agktrmRDuRsGPvtcV7Hhn7PYLDrFQZXzpD",
  "key22": "3UebVga8BVeCcJN44vrctSBxBbyszcuFPnHAtmz4amDCeshFsr4FxuCRjWTBDQppvXURsBpiMNX1wXXJ11Km1kPx",
  "key23": "3hcHD5LdLx7YR1kZcf5D7RLSrnQdms6TxhsY6TueBz5gPGExXAzSqTSCC3J9D6F3z3QjgHzL9e7o74Qz4PmCE54E",
  "key24": "4pjET5utEWUQf4CceV253aNvCNTjJzbuxHTiQZacakhgnwes1FNUX7GnYacdAhXH1q2HVcxFjZ5gY11WzG8MKu9H",
  "key25": "3Yk3FpoWWH2sJrfynXCxZnqVNBGpiaFonmr1AHuaXZm5Z8WJyqyDH6teEHAh9GNC6x4XcY844F8h3JjWC4qX76Dv",
  "key26": "2UDGWX7KpvGjH3P24znrKwnvDqAyYPv3i7A2phAQRhBJmLLaumhecQSSz9Uuu12YE8dwkoQCuMbsVJPRdJEMZnhY",
  "key27": "XmUxv6paduyY2AV4CVwXbmchfUeZMajhVfWNrwTpTTqFxeHCKRXpfpYDUGNyY8FRbei6AEQrHfXH65hcseSjLqG",
  "key28": "5MLTqTyRh5eSEB7PG3sjLQfG13v1nmWKvn1oj4aM7qZP8UL5F1kapN5CmtzG4yeyJQA5dMqGdW3sM6K6KLMEfDsA",
  "key29": "hmSmETUwakD4GnmUwoBXTXoTEgfxvxcfvkTDjJS3hPf3fMs2n976H2PQJG7y2Fcr6JVgPb7veKwk9diKfshZ3mM",
  "key30": "4HzRHPGwTkXx9zneP6dG5zBxzmL2kr2bRgNyq5J13UJGuGsvB6RBaDbp8ozBN1K67HFBhGVJLFCfwKxLeNwf7u8c",
  "key31": "3vcqNWmzo1hCVqbbbeKyWJzv8nviuzngYpMwxn4nLhpwM3U6kWCkyifofkiTYfeGGPGRUQiVWx1PqrtSnUHB8rQE",
  "key32": "2yD74Csh5Z22zK5dbGZZDumRGLE7QyjcBbfLGzxjCR4BkzkHnR4FwNGbEeyWeYAWeTuhbNd5KhThLGzAn4MUfxLL",
  "key33": "27612cpk7JFhBwV7HxVsXW37FBbJxgSMQ6Yx6Lhqdg2wygB6SnH6Fyyb5PqbV4wSJjGQmVguRfcWupz7awENVWxm",
  "key34": "2mUpwHAzTDfCWPTKpkErQJd8L6aZ83LdSSqb5HxA2A5BGbM9Sdryyd7jxYAZE5m1bee53Xhp1p7KxB3d31T4UwhT",
  "key35": "4XU7fT8GLFgNoZRusrdu69f9ia8eUcDiSiShGrF6nZPYErgZjeyzdDbYUgFcJG25fkokKGhhWabY7hECAKHqjYZ3",
  "key36": "4gqCVoAyM3t9a8Yfq2hSbLsduZufga3zjSiZGvoZhZb3VxDDC9fgnkp1xC324V7Rg57C7M2CZjScb9VuQ3k1AHUc",
  "key37": "5db6UgK4hkPKPhghweceffrSGWS47KQvWZXmoJFKyxQ4ZcF2hDD8Ym6ggyehunAeUc4UAZkTTnpZH7VaKJUKddyT",
  "key38": "3pkDtiLxAXpDToMvcfWATUA77ohi6pGB6wZdwEDEQ3YrgmtxVo6gSKCX9FbPRjVTyhwJEXYGUyFMHZ9bw2cGz12x",
  "key39": "3Fu6dCtNSfRk4vmiLYUHa1AqVhBRdotJhVfZ5nNBYVWiQmQNV3mN5ySwEBXwuJ3uiSU2PipGYCreWzJJWu541Uv9",
  "key40": "23GdcX3Bae982kkQ57etAWePK2MvakDBpBoamFbW9o7yB3pvRXVdCD5tngVBSsFBeAf2WXWzGekPNv9wKcPAX697",
  "key41": "3DEUKzFwmTEBdYpKRy7piXYfHNso4GFgp4xieg9FAnCmq82drjeiFwuMDa5nuLLbgJFrQCgFSDM3JsHUoxQsgrdt",
  "key42": "3kY2vid3paKQXrgRDBZ6kv8kjUXzJquq8gpfefczB48F8WizuKN4ijXm7jWBUkmGaXj2FKFcaNzbgf7P43vyCGDU",
  "key43": "63fj4uN9bzHviwPq3X3KPymYTnaSb3sTftrDbPjqGtxFkoAKYRT3vV1cnwvy7yq2b1BLRfDyQcbghhMZhEFsck5p",
  "key44": "2XxE4AbpS52dA2VfobZg2bzpekrbAdyBrPvsjs2PwGDkmqT2QJkErWgGVontULSJMA4ePbUAU8bM5vHm9Bsd6qLT",
  "key45": "4w2BwURveAGzc6QGVTJPX4TZCiyGSZ3KXFRni3jJrEuvnYBByEJ6BtQwAuny7vimQNzkAHbNtgaSPEv4rcYbA8QJ",
  "key46": "2GsYEGv7tVpEU8oSmNCqj51K9iAtiXxTQBXpRLjXdp8WW8oqh9poxopfpr1Ut5ybU2gzAWEGpKUHpvnkLv7h3cFU",
  "key47": "46auc8av5G3zTZ5QyLZUWtAwkeu3w9Ltjh7DrgqUrcN3Yvnruorr3fMiShLfKPGFHbbMEwPTENTSCg8XqDNjLPmV",
  "key48": "5i9ZJvCeub73r14V6SSXyWRsqvadKx3DUYPKQmAUzgT7jMfszyeUinbkPT73YtRwitHZgXJ5ucGUoiW49tf3bi5D"
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

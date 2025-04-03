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
    "5XUqgKsxRvC3uJSE1T3eNLPH1DFYgA8bVovvcSJHt2d2xakwTRNkSK6aExKQWJ6ixd3D6ni1FxCqYBv9DNfRP8MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnmLdPuGLNj6qzLvVc3PjZnmRhtKXoFdfQwpNju2Um5h8GQjahenDTfTtALoL9SAyPc68XenETkk98fck1m7xhm",
  "key1": "yzz68crkLY8XpvoLZ4txz1Kdrj2CnSGSXCGY16Waa2m8pjax9CMwHL7F7WasJv78kUnAK8SDJsLzxAsCgdKZHow",
  "key2": "4Cci4z9i9mGFozGFepRQUr9dfXKceG4ETDMficmSwmBEPGJcffB4hsBJuWhjxY5HQwNWCMkLwamBryABvaTSRgyV",
  "key3": "47nzE4We3tjT1NrQmgaKap2xDsk5sqoJJoBVZxZWK2t64RZcWmmwexVy9Uh31Vu7Q3GHgKDazDtRuwvWrxKXqJ36",
  "key4": "4VbzbZjTuP9R4Ty4RTAoahLDaW1KTcne4ZeA5aB22H972HgkEnfSPvRA2J9Z4YQH9PgXTXJ3LL6kLNQzK43mJD66",
  "key5": "2eSVVxBVeHY6G1v7SB9HeHUCKZ7a5PAKgeaJrfBrCAsi3RMsMk32HQve7iwDcd6HCZg6c6qBtsRdqmXTFTNShnj7",
  "key6": "3MMGWCGAbnwkJ829f4egjmsnQDp6uTSo5wvJ9bhzu9YJBMHLGgx5aRikjyYsTHMB1pQXRzTZC3KGhPdGE3rWhx1B",
  "key7": "2GHFsckACUvL318srjDGR1Rh65LyG1BeDUQGEKMTu7fWXiQGCeTmiL7zg8SYLpfVAhz5DRFB7G7hhGSdhDKUjMuw",
  "key8": "3rXm8obu7LqWbGw1cAr6Fm7VNUYDEcKwJKzvKRphBfsGWHeU3MZRir6bJeFfY3knkobhD5iSzrZP9JzhU4A6Z9VV",
  "key9": "5QcFssShcBqSsc8YUB9NiHL2nmQda5eofL5CpKuiCo7e1AUdTzCeZ2iyuDgUTsnvLL6zXesTJg5dPvLhXikH9vvi",
  "key10": "5LiuSGZBTHXmVszeuxGdhtTLVumdagenFSCvdEHBAHez3cdZ5LGtLvK4deZ1aujFEHnmPA7RFT2zJQJgNHRNm7eY",
  "key11": "Y5RKCJm8nKNh5tfGgPUjt6Y11RjTzDTsUaQAQvK4qdRMq7M96xheJCnsxA4bzmZh5YrWityxXxyLVripo5nQbVu",
  "key12": "52ekZuwBS4sMNEAvR9z5Q3qmvG8AQjHuzdzbzJ8poobXoc4opXTrCAbRW7WAnjqTUCdnPiXob4JQPpqM7hwXRTnd",
  "key13": "2GvXQF8FwXnXoafKb81CLsaJH7xgeXp9ZNoWZVMnP9Yk1mvBidgfzrtjPXLnu27eG49FrUqHQh8gf3wETpvkVjTH",
  "key14": "4YgkCoYHWKPq83tXXxU4nEEHxe2YZ86x5fjYBQFdfLY1Jw15LP8P7TqKV8h1M5p6aktDKMkCMEcVUwxy3PP4hvjY",
  "key15": "4voQnxYnqG679goKvWJo38yW3DV2T4AcTcGG7FnNfRA5q9CpBBaRag8oqzfEZzYPTjdNpSzT9t4vVE1YoqPfyB7p",
  "key16": "GMNVTwtcAweK6uvF6M7WSGCkz3LpJd1t9NiosCEwkKkxfatjgkGKuYWttnKEtRvYTu3GksXsc8s8kVACW9CjiWC",
  "key17": "3u4mx7EWXzRbuKAk2gVCa7Mricg91ZrfVi5jCwjfJUHnsWaHeztriiNeWE6JGQ8LNe8ATmK5mqVYKhFLYkVfFyMd",
  "key18": "4pvUZvYkBoKo9owRfrVwpCK8q7PFb9K5f8nU24CjcYyCqyUFPqtagUboWMA5ZTFjBzB2THSDva6HTLkti6neu6o7",
  "key19": "2ki81RQjiSe3oaw76iNKi5sLejUA4Mv3AsM6oeNAJzzuuhfRjdsZneGz1BZWG44H6HhXqoXXHs7epFGMxf6AmoCd",
  "key20": "4grQk526t7ijPJe5pjC1HCi7VMMtHfwQm9HfWPASxfxvSA3yDRkrU43bvkHr98UQgiU3RinUigTY2zRDG6iMUAEP",
  "key21": "NjVzkbwC8njihaFneQZrKKoW2ngHNFtk43pGcfFtqoM8T6K1UQpgVAfCcZDnVBXhAxkyA4rWuDJafoPrWTTzFqD",
  "key22": "5ZEPEqoqPXXeQEHw5CWfuBTrVqWYmS92JwAGX7RBCTC3q2oBVyaJWxcv2gCtaSwv8HsqYdwgGowoiWAXudN1DmxN",
  "key23": "eHt6EaoLjLtmHCTWC6wRM4eEJQu7ehus1RGJyFoFWwgwTtVXiuD8hcRxnwXPXQSKP16426ojwFViYGsPy7Yr32Y",
  "key24": "5sn2mAqboyvk45qnh9NkUXWbijKDwqmRWZBSFCRc8G5cahWTFGkFn5gti273eCCUGfrNVoXXWMEKnyB51RACb4t3",
  "key25": "2Dx2QALVpp8F5pgWWA9vKu7xYCk94U8fPjvY9cyNburs7qtsnfDCnqFGhL8i752HcLrEP17z8AR7XiS94VfxWsfT",
  "key26": "2CZLjGqy3EanMcQJBez2Vm2YH2Sok3oK4BwmwiK7D6EdUAr1XSr835MYcFt5ZEuCuvJnzVMotAzbTzM6sa9Gc6Ww",
  "key27": "kEF88qP5GZtcLffEWccyePXPhQjrFLbftzzxFFP12PzwST1PHM9bFAMT8Gfc3bUkyXsYrNE7CsNYGaKMB55MjZZ",
  "key28": "8NjYm5J5K5jUs3CwMnteosz9zAHn5rdyYH8Q4qY4DAxizyfE7jHUAfL3DkM3CBT3LSvXf7c6X7Gi8vATxUYNYvm",
  "key29": "557z4wzFFMw3WF4ASBKgXP19niPbxS7dT4rJpE8VEEc7jU4Kd5TQgBebBfZvxeh3eRrVkwN1UPN6EWkAKAJW2KE2",
  "key30": "3vpDa2P6xqAykX9tuYgSzy33SA7etd8WEHCds2a1ZNcXEhMUAw5BZkji5gKdeyED3dwxN9Mv7KECdmr8FCJTFYih",
  "key31": "x23wcisP8JpDPiL5D4okGADCUQsq433t7xFv4XLX5D47YsBpBadkgAy48JCQyQEwycoK1xAw8ecsbxs19Gs4bBg",
  "key32": "m64UGy8jy6o48cuN95gxQeuyLCCwwvDeYQTntHhGnCtfF7rf7tm3wL8MGEeSmP7eKg5RTsDsm2U1V4roEUqK4jY",
  "key33": "5Y1G9jhAn9xvrk3v2YrfmQPxmjthT252ZtC3z55XH4vGHgWfHYM1V54gxLSbaEj13UDe6hgseEomsis9p9Dc9da1",
  "key34": "4C8wuKnvLpeWTGSxQbHAhKrgTLsJXvK2CG5tpoS8bcECherUg6DVqYg5CRMXJSKzq7PkZ71LK7vQBSw57firZH71",
  "key35": "5oHtwqHmpjnALn3dLM7fJPZ9n6cywSdM3hb711w5T5dYtA9wN7U699Fg8q83UCfNdCdFysvHmEHd5oxPForqgSsR",
  "key36": "5845PK48nB4nL43Lpd5PzXoJ1seKChGvhVJ4StDXeRm9Tb5dbZmcxqeUQp8vJVBwGstPxgraYzK8xYd5nTZvWMjC",
  "key37": "4VaKb8wNKdMqVvpw5QRu2PkuyPcfBpKjFKZSaapZ16ZoY56fUj848NTWsYxs2F8tb5faQSibgCziBv11TMALKWnK",
  "key38": "3Bt5viF3C27iDpbUtAojkQD8y6CZKwRKgovKVu2qhZqJRRHSpKDpeYvp8qggvspF6Z1ahJ1CLewCsuWWa6TsxUC9",
  "key39": "yRDaNQnDySJD1zgmGdENjFG8Qx8biCNcAq2MtYmLSFA2Qf7gwEnrfnDfdf2RzUb69AGwxPFkwVX51JNLx2qWT9n",
  "key40": "5urp482PeiMC9p9Z5cKTkXwRECL6rx6DtG3eKw9CQa4FKmVpRhSk67f3yNacyHrggUhwc76V4rNmYF8y2ktHgvWp",
  "key41": "3rMubXACQ2JEJb7AdCNR67Jgj4enSKyzUQhyek8mtWECipu2xYsXYCJay8BBNiii8gYqU8tWexdUuVEpb5KRWbJ9",
  "key42": "3e2B3aCzmmve2bHDxAai6DpgfgyTnuLQgnm4sfdfU69CXNduorJ2hrnrEqCDnLBi6mEKoVvq8j87uGjQdqj9QbUy",
  "key43": "5F7wZHGcNerMrBurCymwbehV6HNhbGkJaUDMPpg9uHg8d6wR8iRcvRZowBQr18zS4My8V9ir6Mt9cjin2imCf7uZ",
  "key44": "3LgSnaJ2qUyVzeq73KvsaSxdcSDnEDrzBrE9Rp2BqY1w5or27T7HENLZhfHSkJmEfuL8zsLJuz2gjpU5XMKmM2bq",
  "key45": "vxAsNS11ajR49p31PSeawtQybYAzW7RSpSw92VcPLnM5enikVnzUM4FfeDqZEqmbGAdyMC2o8SuaTMvgQhKC3eo"
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

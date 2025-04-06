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
    "4ThSd4NHSbNKMRPpPXE6vcJ7188bPJ1RRfFX6oLWWjj7Q6ZqVi3R49qKCh8jHR8omE5pXfsnrUWdCBnycADSvLhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cXdAiRrwPv93FFDQLDYPxGLx2JzzghjS1mKzLfFu89y2zHggDabZZY1Sck21GJpYqML3VCdCEZfKttDMAf1far",
  "key1": "2DumkLLs1Fff8JSZpY94zVfUNBcFY4Gz7wkDRGDp4kRd2H6eJgfUqidzdtJeqHgkt6HKvPxLSXFapiCTXUxFGNgs",
  "key2": "5BEdiGKZKYxriEegt3Vw8u6FHoqC57m8ySiTPwij3HMU6uK3DXNNfZMsZdW4GtrZx2UEMcEbYCmNZd56hEnZW2Sp",
  "key3": "3DdKtNcUQUGEvtoCsnt8nSv87kFJNsmbFcgh8MAQBEQJjmkXp8xMzma7fknJLfqzukVS2jGwHbjti3EhxxnJCNwo",
  "key4": "8PXMt92vjFYqtxwWt6TY3Bvynz87An2LmSdgH2goAr5kLkno28M6FaVKKAwjNR2yQTi4vy2zXqzWQSXTq38MGas",
  "key5": "4i3fyCVRNsjL3UXE71Mg6LnZUruSA4UUVpyBxExbQY9HhYBtdeMEz5F14CxSmvQ9daSuzotWmgqNrsbTnEkNpoRq",
  "key6": "4x4sypDzDBquVrnMo2HpGFW4WutcE6AvheN8N99V2AVrswBP9N5f2ZQ9X1rVoczLFEeWt6YsYJXtuNzdKqP3aFGf",
  "key7": "3UoWbt6T2kt5Sn63PL2HgBjRJ6ZJKsmtH2dzQMF36NvENJFSsLY64HpcMTSiYXB68BMj7BRxX6zxnpMm2b1Nnwoh",
  "key8": "24W7MCEr4EPth8796gG9hDmWuLkDpjfUm3byGcaJ8mDfiXEZyW1b8wmahyVQLB59gqWxgKV87fo6oRwqozbkDZ4h",
  "key9": "2wsyEEmt7UA5y6t8kDY3tQcG3MickUX1LQjgcpViKniG7mbrrsPiKQfHkWi2AUXAM4VQvbrNKE98oAU6QVaadfJb",
  "key10": "3nXrpHgxovtQFUgPBAR5PnyWDTfx5betqJoEuCesT46kXpzRw9G38pbHjmPdwpZZfDTMSBBrBXA75qcCjMPmPpoo",
  "key11": "4F99LMFydEHGenGF2anK4ZWRLpdNtRy7KQYkwuHFjPasTWUYhb2VDYCWVUqYgqs5DijzA3JyCaPKhvvtcjv2RYig",
  "key12": "2SoN3jYwq1A5FqRLZm9SWRMgYDWxz9mdQhhc26n8fSGvgyJgNtbT7JrpdWub7pVdwrh7EYVwzzeU3NWtFiKfNz7j",
  "key13": "38juzZBVzLAqLC96tZF9DEo1zdeRQvcmfE1rd58tDaiMeeHB8MGBXmzqT3dhM9GcpDQe45TEaD41ZpX5Cb2GnhZx",
  "key14": "3gezzfdXQELQxbmP5zBMsBno7Ke4UwHFKzh1Np28cA2tsRVgfSscJZPWpaaw28knJHmk62b78yZ8AERRvYqkDV1",
  "key15": "6zWCSudBht92DCafx71v2S7a9o9hyzaJXBGBAjiJ1QUXc6FKsEcsQW1yjMo9cJ2X9wZ98voqxJGRxhHj1bx4J23",
  "key16": "3XQoCdM7bo2jwTijH3DWSMdfG6P3bQ4hbvfEDRMcmuZ839bgfFm1S47DHvnzR9LhyTUtbGDfnErm99PV3EiYThmC",
  "key17": "YUFuoG5um6BXaqGXck5oDcVXGDuN1x5aGgsWEtwNNYpWU3erKx57UUo9fdCVouKJmT4tKbxJpZjXTHMuHiAELPU",
  "key18": "4aqeETC3vLSZQWGrN3kNC6wTDKAZ6quDEPgjL5kWBKuFr6gUfeJxmVHAcDQYn4aBj44cZzpW5CLCMBY5DLcxjKCE",
  "key19": "3wdGAeTaFsKcDQV6kjUdknKPdz5AK3zFWtq58w9XxN49rWatmyNTN5t839SLEVwLpeQWQHKvHMfxjiQtdm2N3XBX",
  "key20": "2qkcihgzqAaE2utXzAeC53qkYATNaJNgqDemCJwD1FK9PDypVNqHfccoGsjxcydccWXqyDhurMGc6R2tv8yX2XXc",
  "key21": "2bRAJP6ihK1GJAcLRpMoGKf8sB6rm7kK2C5wygidBrCiP6Su8YnbgTSMN2JgUSJEeHJpincEEttYV64WoVpxmGHT",
  "key22": "3HuLEb7HB5LsMbxjSsMPxMHYWeNe3fSRY2gqydG5AZTKB9xxzTuUKubnoVfW7WPdo1HeRg7HZGBSFzCw5aHhkj4c",
  "key23": "44Gm9oFvHYfieV86d9aHD6dC7tibnebPJf5ia3oMdKePJ6qDEYydcBMvytfAKqWzVKK8FKtmQz1fUuRECcxwi6Mp",
  "key24": "4f5fm7V95A8Jo5zALhnZBdPqcL1QVthHqh2TYzn8MwxgYncQXgpzvAfsgq8b2CMh2UcNQ1c9U1mUdSN9uhxrfqEZ",
  "key25": "5m4zUP5EAG84EGZm7VcKvdLMzvsxe45vRJmibfciQEk92LuhacoLGhAvXxU9mmJhfYAHf9ZT2jTwTqpPGs3D5XYZ",
  "key26": "2zxmeMfXG9zkas82oViTNu1VCP9opF6vopr66C5qyN5KdGQ2za4DWfbM9egW5Yxjppxn9i4quTmndXdJEneqdj1n",
  "key27": "3ZX2NLe8tadvV71EFJPjC5zyHixzPYt6NRkbTQiXTZEVwQx4s5bHZNvyhrXsPzp2HcYbYkXD5NwGzWV1SUQGgJ6G",
  "key28": "33HvcoACC5bf5jJAMX8wUvPLZDQycY1e9GfhbkkVUfzLQx6KZt4ZVdwmACri3Bqz8ruVsp49JWQUPGBo2wFJ1oDX",
  "key29": "J4AhxUa2UgfKTFPd11TvxC63GHwa8iANUhGjcDBbi7XBTirUwQRU7easZsuRcEGysFdwAYJqfPWjkfFbBjXZznf",
  "key30": "wH6epst5bznQCi2WkstXEQsujV2kwNZbthscAJoMFT9fwWXbju1MfSGLpNH8sdaVXPtpP6yDVpfzHgbQ4LGDKYb",
  "key31": "4wiXuF9dYVnSj1NMRADuhFqJRdvb7QtjTyhvJuBJr9rWB6wTyJ8EiPhi9WytUdYoeTaMNfShjHDD4jdodnjJtXV5",
  "key32": "5ex9wrQMtvpmXxkC2DzHzFDuj5pAMa2BHFDzcUryXTne5QtYik2fCavX1S1CunP3tkajraCJJ13Nwfc5U8vp5dCp",
  "key33": "qwiy4iHSN4K8YrHFgtKPPV8TDdHLU9mFyqbVHsueezHX66EGJGbuqMZ5eUfUjDYJhq5Q75jnEj2mwUp7gSUegMw",
  "key34": "3uNcsPg181NqZRVzhmWcpqCDyPYkjvM9hrUZvjNnJ6VrcP63PqpQMB6A4SmtWwmUMwoJiTKQcAAgVgrbCtPJkVd1",
  "key35": "5YtrCvPJHZFbJmcLJw6NhPjmQY9nV4zZbs8GYLF8bjEDzjYewLr3NFbaRC34kDW52Q3g4GG9nqJoW3Xm5G1gKBn2",
  "key36": "4nwMKZptY8WMscY6DhS2XzXbABnnogsh2Efv61ba27DPCrzycgwSfhewhRYToEq2xqFmAEGSCzpCau4WpzwHdTyZ",
  "key37": "49kgp6HPNZNbhBMp5tfbtgd8JT5pkQexdb5t7S5yWr6VBfk6ir33RNKwoezgZEZT9ydu93Y2g9mLP6QxRyu3LgBE",
  "key38": "3VuivbLLwKZcpHScZgmeb8ZKRsoMDKE8wCYFY3BEfHvHcZHCT1y3yoDT1n4z6Nwu2Ma81gNEPTK4qzuJak1uF1t4",
  "key39": "FjPvvDJgRZ2pbMc89mejKw7bfn5q5qmT6ZYpKS7gzvc8CmnGUWYErgDSa4yRumhWAAPeKAEniynqL5t27JQ4cLy",
  "key40": "5U7tMBmCKjk4xMLVeEKsP2hQVzLTVs97H6p95VnEKtvPcBccp72irp1dcUZeoFtiDKTefFCcfJEwyFkt2vvPCZar",
  "key41": "4NeDrw6gW5oTVGcttXb9iAXuHw5o4PaQf5sqgvtG8iT7mfxdsQjkXYsvzfrRnD8Vx8uQavK9pgTGZ6EsRTMZK2Vk",
  "key42": "2TnQ3PHXLbtoKHjGB5E7CDpUCZvYodUxFfCe8yWfPkyzJyRy1Xm5QQNcjRBsskqK112HAv9naGTML8w7joDXsrmC",
  "key43": "YQr524qb9Ki96rFmACPBAtzqSp73EgCsMCpGrQ7bwXkZHccbAYxwcRHbmrXuEuZSTcN8VGJZ6657bhFAteTHKL4",
  "key44": "2a7Ayt2ovArU2YshyuBhcgKwhefLECodqESvoNVemvBf1J8WDjroAZN7s1w9WzPTwAhfo4z1edq89T5U6NqP14JU",
  "key45": "1KzzwCzGbhMi3gQyqpDUiCyeKGUMVWug1s5MRf5La1SJt43bCzAnTmPvzmRe4CQJcmtAjgK3LfSYYCPgn4pSPBo"
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

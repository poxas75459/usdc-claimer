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
    "2bdtPgj6xcyyEzt2eyKVKe7vaRxize7y1MFCHRBoEkTDvgGxPdbiY8LVUn12nDhD11HfjPZBPdy17VaaMFSheShv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VhfLmQBBupic9cfMwbHviHKAfSzgnwa4WZWfa8WQUGUczwWd9Efk6AR4QDBmjaraKTeKg31oqar3ERFX4aVeLN1",
  "key1": "5U7skzrRegmnHwc6bn53Pu92RQ6FSC2peLgz21Ed8TEpCCJav9rwjpupfDZpmavjqNybQCGVDdJjXkm7jJaC5AXq",
  "key2": "yJUTSmCnLm9Guuc9qzUAnhZ67csKgKsBvPZUrtEaTWTibHgZtYT7XM6MqJWYn1bktUcH5qWkwCUoCuSXkN2SUJW",
  "key3": "2gFJCHvZmbmQTWpaVPyBoFJNX4H5Zk7h7tNQQz953shnxfYmob9c6AtKWxyhCUwaJk7uKvoP7DXbfmWBFpHwo7UK",
  "key4": "5FZx8NMt5Fhic3jgnX4ubTdzo7AFzegMhuoZZgMYnsNX3JToCe2PZhLYSEj1GqJC94rwvRWk8kC6wA6A36DwgEEd",
  "key5": "3HfB6aVEn7RcCM62f9sx9Y9mKKP3eM5BmJaayNhguy47ZgQbzufPKNMb67qmKNzGoFGSBBWWJqe3jdfRsuex4SeM",
  "key6": "4id33cr7kibPc5uLAZV2GSognbQdKP988wGC7jVXvbXynyipxJyz1G9ZvxewdGRQB9HaK4xBwnMSHWMcUk3XWnUa",
  "key7": "43Z73HXUBJBx18hSdXBbgHny1jLTvkAGweVn5i2nRLiMYv113kXK52ShpQxa3bczEPYCDEotMuCC7aWbCgUDCzFr",
  "key8": "2xWRpA84SmW8gmMSFwK7zuqrkiZAcPB9BfFH64EmJ6PZDBBvnZZqCAqeB2MAoPzDM1ey2uSaoKWmBz3XUCSWbSK1",
  "key9": "4uhfSYLkN1bCUTHXC746fJpiLhJN7x2JHAZwxqAxNgif99kG27vESiFyU5rDMkG1FWPdLFt84VSELFzpQvZAnBbu",
  "key10": "2ZoRw6yeDLVzjk92Syyn3QK9QuLoJknxMajjoqcu2xtd6M9QqmB1PhE3h5MpgesBC7H2gBAAFKp2cirPGYuYY6aJ",
  "key11": "3qPWDm7rMMGpar3XArB153vLDWY1Ngn3TKE27bVHxnTwaMxRj9yRsbxYH2ed8WpsAytHTd6BQduLx34Ji28sMK8b",
  "key12": "61aondQNeMGNd1s5vctZ8YqzTHgu43TiguP8YKzMAKPpKK1f5XaznXfXwXDdvgEiW9BHjQX74sZtpvMiezf4gsjr",
  "key13": "Gn4WFfgzWoG5yQH6zWn2BwH5XchH4qZj9FtLTs4GLSAgJ1KueKm9NnPUc7RkPPLkbbSYMVd7Xi6MY3Pnc9KjtLg",
  "key14": "2hDKmkkznXoD8ssoSN9ka2D8jRW8MRKQA5iZTCwG2mE4dJNnzj2hDCzUBZ5Yv5yJxwidu3qQaEfJTCveiGKkWyG2",
  "key15": "3tr4D3QBvT8YGJ6NSxN8KjrgjMBJDBf6idvmdfZa1cNum9a9dcLEbvQP3w1DF9WrojA29iHXnRYxTEt1vicxyf8G",
  "key16": "R6iwpEDonk6x8qYyGPW4eELm8RAtUAC3faGydZBJ91DqRvMijK5wkP7swDX9P2ATV9gyvV7gTXJpj4LMc2oPthT",
  "key17": "2ZZkZG1E1PfLpXdY7qxS7pBnpXvLWzC5qs8sYa5gRopZQgUMZW9UeLMjs731qJGZSGjMwcP4kgyN6FKYeAtPSkaa",
  "key18": "aAE7LxxtdbRy4WtaRQoFYiRkHsCsUxEL4jSkEXjVb8WT7BvBG8qMBrKkf3rTELoPjvfPpCKoAHdPp1E1gjib7t4",
  "key19": "Q8Tb4v1NY7qQPaysxGi8UjTt4CNfDcG8DhLjF7mBGqes83Zu3QPhFoib98aiR7Hadv2VFkiArCwq74qyEN38nDm",
  "key20": "45GXNK1RR31n8XwusKbvuQUWJVBrhVZDqvhnK7TRrhQbvgQzviBuHL71rhZbXWL8UqsTMpvVETpC7WMErqYBb7Xj",
  "key21": "NdFVLgrrFqchNQRiwV5Fj3iKqf6jZeg1v6UMqPaD2xzPNhfZyNsSx3UDsowpAVMe8HyoSuufxhxzYQrJ2AG2Wyk",
  "key22": "2aU3hAK6GQ7aGSnEPrF7W9BqBzgg8tpJau2dXMd9L5DwheaaCHYNwNdBnG76DGrjupNPQmEQ35669VH7sqpvtfkd",
  "key23": "4qSuqzpBmAnDUiM6XLeBfLpCCKM2XCywNYy5m95UR94RCrDkqtRCuPZgjugM5QejEDbk2i1FAmJm5hy4RbdPJkUu",
  "key24": "4sEbnKnS1iKVB4gmW2KuYE3MeDiVCQF952UoVwyB2T55hrtytfLuAsRxcFozbXnQA3ay2jXzrP6kYPHdm2af1YAb",
  "key25": "CDMBEw3mTg3DFc2ZZemVMA4ME2ytB3f8mMMvhXHcaxnjwG4EUJJoc2LpfMPDuTA65q1hSKmaqugme8rbrBxKHS9",
  "key26": "2eUXharcmn7UXmPhYYp5ZGQvdSsQqeQYLHhiX4H459dJ5hmg7bv6EQB5EVjsmDoz6NGd3K8hgS6A2qdnbiDBoeXp",
  "key27": "2wiKD2nR28GPpkysSnT3Vyx2J4txiAQx5WBYgjiGocZxVEZmkNGcGc4wHjX4qMkWhXppAsu1JofiHhxhC5RWRxkv",
  "key28": "4GeM4Vtd3RWFAEjLZd5sYPiHwuzwJByCe4yVTm6ezyCQgFZXyZQZ41jfmnn2AVnKZkWC64eN2WsDK5BZkaKbfpgQ",
  "key29": "B81GkvgbdBTCGjq4aFqirhm4CDSpCg2D4obPnYXM8bWBJsG7N2i6dSsXPQxGomAqMZQg9kRVC41Y6x3WrQYPWVg",
  "key30": "aamZ5F5rabwXnvAnPT7Qz9aZr3sCcReJALM7cHZBosXQcHKsE4e1tNRXGnVhgzwFcVMq4BaBxDYtZ1pTyoHuWug",
  "key31": "5itcscYBJP7iNf6tKUsZHTsbwz9E65JqCE9Jhs4bvfwEHefJeqXN4keSd8Q1phP58GJomxnLyZCLkLxS6cfeY9Xm",
  "key32": "2WRHcbPm5QZceWHaKCZ2iwATXkvU6AQQhPEfvAntRw7LEK4nPesR9ckarGnKxE7XEpFaZCmtjmx2nKwZd8gsFqzJ",
  "key33": "2W4Hb2NXtfkf2Z8THYCDuASJxaYP4AV2ZMfLLkb5ToAHeXPTp78B8xPCBZwcMmFxQ9ieUdFm4EeHpQi6WD37QUah",
  "key34": "27oCEhqxAXW294FTNtZP6jq5a5ZzYG5RfqL83YLpLNT9vvXiYae4hg8DMmLDsPi2drYmddhdi2xK4Y8oq8yruGTt",
  "key35": "2XUQBqcoyzUtQoyLKkve2jn5jFpjbmu7Q2Fpb38kobq98XJMpwuoQrNYpURC1MmqFq5QJdtofeWi5Giuhf6mmQ1x",
  "key36": "2L4ASkeZ4BAcnVEuAYmh2EkVsoX68UUgMrZpEpCYZ8HhoBCkQynAipcumdq2Nzos6XnnXjAiyekJXy85Yw9VoU7u",
  "key37": "2sjpWULYYZViVB2nxNZk1vjTxg4xiVdruwH25y3ginbWiudQTieDNrFS5QAHqofev4iHRUk8o9LkXFfbNYqw9dsb",
  "key38": "4oUYjXd7iGAPRqrNtGbGNSyXtMuCPFLiURsp3HhNd27mbtdFBywmkhMRVp1FGrgUEzeniqB3DFNWG1acf18fAr9M",
  "key39": "37VvZnbo8PJdRU9H4abWFE89ugWMdRpSpocbf88Zk7uTeXnwdZCWU8D3FRwRxKoTV2xT6jFPVkgUxCxioB45Tnaz",
  "key40": "Xp1k4wa9JsbnNRv1BerXwPJKQL4RDDViZjFqsF2sQKPQHTQ3pa1dZcThpLbfCqttcewYxCtSFFG53vtWZ65jGRj",
  "key41": "3MrUiMtUwZthujbDvvCgNbMTJVmXc4tzafbUNquD3MeHGDiiwQsy9fKEREZeMSfxMuZrbxqhhyWA8Jyt5Fm8vgh1",
  "key42": "5ZwdGJm5bgEp2b8R1sqwWCeqnxKaRmRL7a22i8MoEg3y1oijhbX7wkGvHpHNVzKNvjtAEUDQGXpX9wJpDCgz6q1Q",
  "key43": "2s1Tmn9hQVeJzjoBgbpobx59JHUkFJeqgHGDdfqqQE8m9t9MiPWAbcojenaR2iUED1AHA31zsTps3xN9mGxoGemp"
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

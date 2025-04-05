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
    "2iNqQgQtxo1ZBw4t5no1P45rE6wECFwoLEXJfK2PHrv2EwL9wa4PsaDkesSvtb1ePn6MCYe7hrD7iRg598L2f844"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jMsEZrWHqu6cAQFeLyDYo7ZcTvZGsxcviLaYSnsvwhTm51jtjU37yquzxK1a1g9CaiJFZf6axkQwVbjNy4oiYFJ",
  "key1": "2yiZnEvELJpEYER2zqkzokXFgxpKp9eeqbP3XWrKsRcFv8vJ7ELroJiJn9Spi3zZyd71QBKTPZjLmFw1hZZbnzGZ",
  "key2": "4k4XAdwYBWieAF4WrWfguGn1qwY3b8Xm45tVmvQkNN5hTGBnb2Uezmfb8KdY9cF17jtPnZzqRXQ5dKvGSK83nmiu",
  "key3": "5ZLyCr9tak3Y6WhYZCTSPx5mJ5vU1adFaXe2CSvaAKeUffo558DzySBVFVPwhm8vFr68ghEj9SNfWAv8Pess4VpB",
  "key4": "43UAZJfiSN9fSXcUQqamRVA3TnpkmXsCCbK2Kgeqdri4tE1XCzVuWrjnLTEkse5rVuSNk6ZpV3dRvZSqjZmN8ymX",
  "key5": "3qMYMfzTYDFdgNughHMNssZVrU3UpvoYGmkHnwvkYynuCDZPr9bpJRwePK92L1orJ9nZUrJbgLAyVQkhe7BJCDdc",
  "key6": "3AEZJSyQtuat2JQR9nmtDgrDCP2k9DdfmJRr3yFGANgyr7zwkMmC9cv4kbEFQV6GizkVpuE2PEN7uYT2mcLUpDt9",
  "key7": "519C7riBNmPEN3KG6KEfTxS9BqPkdXmVdjsgRgtztqpCBUb1HtA7jBuCjpE3kNTQLr2eVin4fU7zaRb2Wawfv1zR",
  "key8": "4GPd8zQDxx7fxwtk9qcTEEy2fWVd3RvYKUoKy7S2J89RY6DF2ZUYJT6X1PsTvwfFdCF92kcoY9khFxx5pon82tmE",
  "key9": "4HnaGVcwzrB37ygWT2oEWFdpmNd9WKL2FaBpoZARBWnDZajosYUvnZwz5DyMFaeuyunvmWbvykb5NFWPmdEhJTdc",
  "key10": "46yGPegL77RmioUSMXJKbr1ic257h4wqR6WdNEbZL2etc4jF3VBuc18WwQjRFz9TNwBkJNsYUt3Jb4GyGBt9ZkED",
  "key11": "3aG6JkmXaDdVgdorC6vrPt2BB2iFn4wBCrLDa8GC4pJjXDEXVQ1tmNWneg2YZibjxMj3LkRKCPgRP5mo1xMB6Uhb",
  "key12": "2ZUS4nz141krdqXV2hsPguET99EeT9LQgwonzx9XghYup51tbogY4sDZqQJNf2TC7RNtfvLH1y2RbaVPgrQ6rAYN",
  "key13": "3kuniejJLiBYQT7mmxTVHjfzBAS5rTsnuLeAFKEza4ZxFRXPmmLdzpQHMH4eUGgXCcNPaUyV87EhXArtQ5ihawty",
  "key14": "5v2J23QDQx1aNnkfDSyFJY32qE5PYXWQfx9tgGHsvjTZJjHigEBQE62KcVmuviNCA7VJk9dTzRwLWhKGVoXyXwmk",
  "key15": "4JpnJtjSqafUwMsqSM8ZmPdEetjz9jFWUcngWqsep2wGFjWoeYKVpvf2YH4ZHscjLfLZus6oQuGSCGyuvNTmtP63",
  "key16": "4QDWm11qpFDNcpLrhjzpeLFwEzdDjYU7vYn6CaegkhkqKa95gaD4e7rPU74rHqFjYyPdju8xHnjKwtyzT3HiT5RX",
  "key17": "6vAvLixp5UsP9qfQ5E9x6C6WrE682Yq1s7V43esyr2Da1dv7ubdkBX3B79Fab3wdmhzMTVp2SoToAtvVpebUzvQ",
  "key18": "3iCVhXKVjuBzjMirELc3L1B5JqTfdxz9P2jwuQ5rgXnvijuT4vm2eT6BWzZnWkC3GuniQGVajG1NhdGxQdnvRK22",
  "key19": "5saiyF97s8nkCWyDsy9b3YbqB2E7oHbxXL2FHiF8ZaVExEP43LEtrvvU1z7Nt4DApHb4NzqdHfvthz5iUGsP1Xfy",
  "key20": "4PnKpcmaXapb3ByTKbB8KhG6523Jypa1v3Pej5uhbgJ6mN3M7S29MWeh6SW1VEYtLxH87mEkC2UyWBguMUsTFWHz",
  "key21": "3qfyC9V4bPc1FeVB6fK82ZN6k7iS5wwH8mspBvY9vRCatB8NHZj5sR6BMvCxeoGpYVq6z2FAQp3QmCA4RQzxNLQ6",
  "key22": "V7FLmtDLZdqaXHS5sSjh7oLLbaYw9y64kkfaYkia7th3GYJC1dxQDT2tec8ZpPFfRWxKk8VTDvaUQSZhnHQFMGG",
  "key23": "5gfop7FUwp49syMFWy8ondzwX2Brr6eMLZ7XwynGC2DZyoUhpgXQJyzfjoF1Wigck4TsC4xd7P8rLzCm5eojrV2v",
  "key24": "4EZubJvHQP9ewdtG72iuNA6zMdfCeT7omAYZcw11Dgkz5mi9CaKfJAEEwVF8SD6esSkgMnMNjnW6Jhvj8WjoibC7",
  "key25": "S9Bf2GHZURbg8DX9QaQwz8pTavt4WxMiytAUSy1vYdse1bNXgqDUR6rxahWLMAsJw2ALEn6mJJqoYQ3tpCqxBaf",
  "key26": "eaXMKUoppacywiUgKR6mEQqKZGAAs6xLPSW5ZeBxrCL8Ccxpeqj272RLLFFXne97jNSoQwBx6SUNb7XPqVw8j5x",
  "key27": "5Q1B73DxXwvapMXsCvvUuFrbj4tP7d7SSopWY68jATfnmYF7DjVk4chzb4RY9cJm1sKD71TmDbouZPuSQF3r84v9",
  "key28": "3RKeQYaAibpsiJivvQ7GHQGi2Aao2okoJ2oqioit9x1AATeA9dv5vKc1bXfV9e7RBwt1bADKt1szVyqHDRwePFkX",
  "key29": "3wx3jgTusZYNFmZY1TbzuKdPU2LcdhH4rZqAbg9FzuZkNZM93U52eptBpcWAkfmh7T8Lw8CLnjF7hE6HdkJhecYZ",
  "key30": "2aAAkPFKE65Ur8LG7Qy6vwXJNH1D1dBkNp8UhPhYKGcQyjcMx5gcPDKREvexWDsTAYhi6Drpf8Q52Jk7xxuPK88x",
  "key31": "4qAvvAktb3ztdW7qB5P55oWgfvcMD6uvhnFnbSgqP2ioJQKNuMjAzHuEboQiiDHmfc5q2Z9TN7gfEkYE7jqQuAnw",
  "key32": "3uqCnHYips1fUPYNkoxv9yLju8tbh5uovGNkX2LgiTUZEpCCRBxKHETbwBe9M3euUmY8LzdmBMZqNXeutdjiangB",
  "key33": "2eKmikcn3VduQkkw9zEBayts8yXdNSH67vAaUFJcvegpqFX95jKQyEH6aTTY1qAnKeu7gR9D6sXHjAX7zCSWNJ88",
  "key34": "4BMsi8g9tb4dk7ZF78pr5RRarZLStfFUoV6qDZdk522GfSi4UJfst17DgcB9jLBKDJ3M8dhBFSzhwXd2T4yc1fkj",
  "key35": "gTsdRzTTFs4DQiq84c9aiQTqCGmNAdHm3JRGUyBgNQN7ri618mUKq2HNshbMR57uaxzMvw1xgzKUFSvWi1PDg8E",
  "key36": "3YAN3peui3hNGGQDpqsTA8EPVw3d3t2t1mGbpHCSxrDgxT94Mw68K4MbvLebZg39DuUYMQ8LbNh7QEL4UUaRUSpP",
  "key37": "4GCNm3bpWRkSFp2HCrpGSfWD7u8yhQhG4QDVbp5WpLiPWUG5VkrcbH1Ctk5SjkiBCsNpmQB8Vdsi2oKcap21st7h",
  "key38": "5dgH54gwKWfdhqp56w1Cq1rVGW8REaYzgNT86DpA4KHgyrLhpYZkFf4w6QjnvVX1m5iVALK5Fnq99DB2H2Gh8mBr",
  "key39": "8yAs8dTMptk37bYWEFVHCd5bJsUMaFasbTNRbtdqMW6yEcHHQ6Cw6G8GcxqbPMCXBEwk2VfKqRcNWTqTkck96Xc",
  "key40": "2Ud7eeNCeS8eDBkQpTqQivqHqwg8eGs3trRNbMgd8uCytBET3GVZH5bQRaBpiijbh8NvMMvgASMRYhQCdFNwzNW7",
  "key41": "5Daryhkcg9ZCShXHu3P4HzHqHhfVQaK2iDm1LTvqaobGhJf41Ng88wzn6fPt2RHYCT7uFS8aFbhVULgxnZpJnccG",
  "key42": "27RMqF21de4939gfD8g8wcbvRRNWn9k5bLs89us5zutT1DFRo9oREUJ2okqyjVJDfBuYx75oYK2kwkH1TXLwUHeW",
  "key43": "4bPUHYFo3y1UAEV4NmYonrVjs9p7fknAmddsWa6bpTcB4VVHQs3EMNmWeGC9Pn5u8zqTM7xGWfjvA79YUnKHt3Sb",
  "key44": "2N88e1ZkAD1rz5SiCCNVka3dhcVh3waNyN4rXPqAbQiHgDhpHew3dCX5SdHQT9bc9amGyvdXfnxEutrqKuMxLZ5D"
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

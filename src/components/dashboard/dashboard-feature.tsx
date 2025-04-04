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
    "3AU9XQtTRk7pVwgqoFqxmsF9sxWnykeKhj6bShQzcwhn5PHXtHHbs9WNQm3TsnE6BPZmS7QgxYCWNiUNi86Fc3YB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SY6pu93RANDTjENH8SxkCwg4MpU2oavVb2VSrf1GTa9tuijuqRf1SQRgiR4ehepChqec5CpiQ4AiUd8UXwjD9zL",
  "key1": "2qjTXJvAJcy4bB3qnj1Zy32WeUtBsNko1AN7VaQJuYssimtJ1xC7ZkdY9J6q6dBYUan4CzMDhYhXgsVJcYT1GpVk",
  "key2": "3EQgPJ64cFybGtaFJLHsgZJRiiL8FR356dtbH21pikrdgMTJU8TFEY1ZT9XUqMSGsBYBc56Sd3vRwgWusMnbJ4cU",
  "key3": "3rJCrKRd715YBmkS7n2VWYBMcMRudYgwxXzfRj62XUKfGwsRrKtv2VEuNVqLhBSzq8oMV7jNmCXPx4QHgpqJNq9e",
  "key4": "5sAobcwS7wJLSvkDS4CnnTSEh8N1J6aMPcaR3rriJczsyF3vszSc4bwBy2ZnfCFbBDRqbb5gvNsZDNk2Moo8icoL",
  "key5": "2CpuCzDZrXZdSbzL5kHVSofkBH1ABtrcrKoJNV4qWTuozbwEgcX9PADXHXb2afuBYwXEUNfTVurwbq2g1UGpA7ng",
  "key6": "4G17m5NDwLDQQbSzSDRSqZuTFaAtwZCzrBsc7N8vh3TTRwfKZ6YJJE55TGyT3K4FczMkVaVsPLmQdNfCLpjd7uZu",
  "key7": "3gmJvUzCCnH6xrCAjkFBBqNM7TgUReShfp7b6qCTv8XyVHig3riiqMXkcANrHggwa9dcgtgdxbNRqY7W6SL3WFJs",
  "key8": "4ZBkopzUUpkonYRHxR2pubKu1hk5KdgMcqqK7pdd2ULNCVm3SAXNSg7gyLVAtQJsDDoHfahfa8KUeP2qLbe9tiz2",
  "key9": "UB8EWcthH2aX7pr61bNjyZXGoWDpTWWtqQ9KWQ8iQR69HyMrUF4M1TAiWyBEX5CQGYuFDsNG78ovL3TnzUCC6HL",
  "key10": "2L3wbeTZE8QbhwkGXm88L3nQvYbEUSGcAHCVHTVJ6FuVsKF58kyUE6D7E6PEbj4WveoRNLnKJ9miJc1AAdqCifJF",
  "key11": "3okmp6aisJFCeqRKpA3HBmd4St88uFh7oxozGqQuuDvacPx3WJvoVUPvBLLS2riaNbTcrMzeC6E5SnAN18T5apxD",
  "key12": "4PumGDCL7tE6rB7kAF3WzeyEqmqsTqWiFAD8jypx8RvH9xJgnG8yGDwTqcVi9ZKikPFjS5m6xFCog2Afvdnm1Xzk",
  "key13": "5QHFHucqVfVhWGJaHADesM5B6Nn5VPviqpoUqSiTWmPZWv5MdwwqGkP7Eos8gdgGLu2zCcNYAHBFTLuhVZ9Zr2F3",
  "key14": "5NNVG4cdZPww4MxMtYppXTC5jPxcwbg6mvSstz7puaXvqjYKNz4SGaC5BhdppygTNV1uP4mg37BMYkuyp7VftbNn",
  "key15": "4JYfBchRRfpJn2YCt77oNNhvStBBC7ZBE5KznuPxS5JGNQxFjFPh8AvQWwSVi1sSkhVwwtgJLXrTvHkxNFy3a43a",
  "key16": "378GyaJ98WVUrggXdAG5skBSgQHChajiuJYSw4R6jNLTe8E6mGtt8NxvgsC6QxXMmfcQ7n8XJEwCNFyt4f9RsuEf",
  "key17": "3DGdHqE9wZuhD4wT4WvM5Y7sDQALVbaVE4kasYFYJ8bZ8TxeY5iWjB5VzH4estdChveqrEw5difkhU131RA3dtbn",
  "key18": "2H6FmKfdvErNRK6MswAoobYMWMrtM2ciLZYqtLqNPjSUditgJ4Ge166CgtnktJRn74aBdwv7rz8KdXDzKnUdPZe6",
  "key19": "26VpFg9DoQNrUakv9mjhTiB1Hk6JerLRJTRDxJbw1Wo1PvinjsK7WChe56bzxkePhvtWyKM3KfbPTe22sD8JHbhp",
  "key20": "2xsebsqUHSMcEYqh2YB1yPYwtzzvZiz9Na3LKKmFjsqPChdsVmxU29KfqixGUWvpLX1ZkMDMfccorh6pDQYifbDh",
  "key21": "CDE65YMoGoYJpLhegxTqmqu28RizcUtF43FGvGHmZDEQaysCdnLrsPNt8XXxJ3z37KcjuYZYq3zXS33AvUGjTuP",
  "key22": "bP3jK7ARgkrkNzVtA3147mhksjFWFGxgiCjkem38EPQYSLgbftaG8QzQ82Mj3i4rFyiUgRucoh9Lci8rvqkDfFj",
  "key23": "667BBW1GFu8tZMMnU6GPVXvk57LEEU1dr3enfKpnQPoCMkcCkTFaEsWtTPk91dWwTSY5obK1pCQuPccq7oLkM8Lm",
  "key24": "338JnUC894x6PWdqXYiB268oJQCV616aNUZSUmUQejFUAxkNNANbtcSY9mnaTTetnaEgAhYBUPbake8TT6n3bVYD",
  "key25": "5A46xfUuZATnSHqQZ9Z1dbP7JtaqJD1uJkxNArzyJSKMgBcYnvw6ghTN7WPmmmkee3WDAfRQQ9v2qrimNpVE4LkV",
  "key26": "92B9BBH2RLKduuJxrpthkYbA6K6jvSUAWnf6XGkDZYiGZfVs4fUGQGrefYE2WoME1sKV8EPWh1hG7uZuSKEJKMZ",
  "key27": "ubK2Vmy1Hg3ijhSL7DG7fpHJXm3aKmz8hVyxYohfVBSMvkmWRJhPX21dpEPHB4veAHf28ZfVuChKAhzmDf1dWh1",
  "key28": "46TUtu4RQBjJYLqM5EvKxouDukDrqJ5agppiVAUY5eWaFd1Fr7GqFM2mz9xULUkV1h71D5UvJi4m6DhC3Z3p6grL",
  "key29": "63inSbL3T7QhaQAiDwmHRtFy4zrSmPwsteoeuaG7S6dv8YZXNjRYZqrtCpe1jfPaGfXi3a3jvGzXGNtfW1yPFC7B",
  "key30": "5Vtw9ei4FudwBWWRAESDG7dejJXWKBaajUTaJVRjEuo92FvTQoJk8qJyQnuqta1NB8Yo8VjHoGmz7wxG7hoQddjD",
  "key31": "3DH5iiNtY9VFS3dbP4EqiKfuB6DoPgQvRYekNUGDRo3hhckaREVs6FxqBLkJqKemWh8MTtAgrmTQZ7BG3C9YR4m4",
  "key32": "5Epijdi4xt4Du77KM59VkEwA5Gfs3XqBxPi5XzUC552ugEURCetmat4dcMYUYbfm52bueKXWtQgEbeMV6NU8e4yo",
  "key33": "4vnEVtzgxVKTGcVgnrgGXpmw2iXeYCNCYNRSgSpYBFHXeFQJX3exeDA7yXvJuktpRUMYmgu3o9GbV3w9tH9NhhF",
  "key34": "2bTPBdycX8YaSQXyYbvnvNDawqxF4QGFzgPb2G9DYLwiEVjgR7KK7sHsYeabN4PpA7cgKpj7CkLLmPnkwpzyh3y8",
  "key35": "48DJFmZAPVXTmDWU1T7M68RszriKdZoSmRk3e9WXaGU18SZsVZWu9RQQ9uAZTtTJALCRWgyYntuWZr6HHP91bsYo",
  "key36": "3QN7L1AKk56vkXV2ytb9cPoLqUK352LsMbS1nqGSEhcMk4F2pC3A6kksbWFEmsvRWH5YuuQTP4gTXqBLjdUwKMYB",
  "key37": "4PdQQGT6QTJnWYYSKZYcv2F2h49DVT454H2vmcCgMg9uVJRYUmt7fiVu5ScgPynMWTeL7tzXoo4cH3hYbTQuv7nB",
  "key38": "5TPynuJAaVwj2DAZA6T86Rz1KY2nuUfcdQxkxrg9zPQGjdUXjHbcbH5pEXYehurk6KNdmqAskijGR2XaK5o9aW1r",
  "key39": "4mC5tK3fCVqygrYM8zuLdpxJjVBuNYu4cjQN7uxRvjeSkJgnvAHq1GgnM3pzDBZcFgZ3jgAWhjYveyHMyVwTZ56Y"
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

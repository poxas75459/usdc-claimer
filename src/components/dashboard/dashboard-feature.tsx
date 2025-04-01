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
    "3wU5dJhSnxRA3aXcQbZAftzgjernWxh2jpfHkQxdhu4nntQt97fzB3AKfSeymrpxGtVisGCyForcW6Qc8MzNggtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Js1J3wo3qe59LADsHzYxiyoQ9aP361VSQdyWBUHRmJibLCFs3pgFxk5iZew6iHxDV7iZHyTc6UnfHL7wk6sGq9i",
  "key1": "2BqHFmo41eZE39z6LUyZZfb4hmB66x2GJdV7nHZEKkpCSedv4E3ctQJHaWziN8LxXitJHFSsxj8iGkB1Yqmigpws",
  "key2": "3GWvkzzehpmzZ8ut2tLR59vzmhbpQ18DShEt84ebvzvavJxJfoA5dfWWBF9Y99Lkgb7m53Ghdpgsvb18etXco8j3",
  "key3": "3mhhDp24xxu3o3BBj2dnhNxvR7VdDdP3LevimApNqZL9sX361LSfzvQf7J2868Ltoj6ysBjYN8ijSW75JURZ2zV8",
  "key4": "34Tj4xtdg4vdiSEaCbxwJgzBtwdsbkRQ1UF7TKQKh1T9kKk45pUzRjF56JxEQ8866euEkaJmgcCbdhHaWNoFzQeW",
  "key5": "3xGnM6FGkQsS8Us75P7AEbuQ5R2dtbMURSbycZ6sVJ4Ti2WL9wdgq4Wk3w7yTD1drxeKU65TnJjVcbSas3Z72hdJ",
  "key6": "23PBVy3qW6wGjZjPv3TSfKZa9PWjJMXV3vuu6xh2tvhJGU8bfoVv6mXsRJY8w2hxJAuPEYzzthcMKHh9M3QCUVES",
  "key7": "4VCbgtDM1eB2nRJDMqym7kjUh37UbwYi9g5yTnEHntbhPUu1GsMe3VsuYrtKqc2ULxrnvUD4FH3nxgmS2YLVGQY1",
  "key8": "3beMywKFLhravWK92AAAA4Zy4Vysk1ZjRVjedsMyHaJwBh5uM6YsBZui2orFRWS7HAdPTADNMD9qTfTxVoG5JKn2",
  "key9": "2wpwZJEWxgrJv3b6pLQyytfQqS6jYHiq7H9frwHU6zbGNunQ5cFz4uF2AiRsFFgmzTksJQAxFidVy4qFYEDDXpWv",
  "key10": "CyZEpP1GW242jWD5BQCKMEDSEWu3L7ZM8Ed5zujuVs1B3dKU2qSvNManKYNs2b41WKhwRWyfNiPrWEhzw3fpGun",
  "key11": "4t78ivr9pZRkA9ZAEnV9M282wabvE7ZZjGdPGq1ScVThZLnUGzaKfzeyqk5TJ2RdB483suuVRGghpTGb3Yd7XGux",
  "key12": "2Jtu2kYbzBLf9J2DKAQxfnANvZsWNMWbqprt49QQbKUmVRK5MkBWYdfQEpcdwKKwxLWQPbmFj5Feuvq261oxL2Nv",
  "key13": "3XSiEUnM7RY3agMpBaef2WAB53WEowmjVoTWcESyzDz2MQSBoPjY1yCJ7L7r58gCsD4Dh9kLACrFboR22Dr3BfPC",
  "key14": "p4sWdLq1CncqK2zxojY1xJNr8DHY6NQa97ZY3bie6Diy8XNCNCwbm6kF4EPHty8Bs6MTu3gBtYooVuqK4D8LD3d",
  "key15": "47BBXP7H4UYCp9xS5izFMFP6TdbWhuTjhCuEKwjpCrPbNXMST8EcT5YpPVvU5qmRgSvL4dfdAk9m5xXsuuy9ekax",
  "key16": "btoGBTK6HYNpmRkQCq9392Xw6aP23Q8bH9E6pYZh5tG3RSa7H3B9gRmsh5vDbzPwCgmne1n4chQZiyYidwZafKB",
  "key17": "3GNAAKQnjw8uzQvmJJm3pPYwavc1mfWMZTZcknsWX4hdUWCkGGjgot236n1G8RCCjPbf1Rf6R8ZLGAyC3bgAwJcZ",
  "key18": "5PLcQnjzrL5p9xE2KLzm7kQ7YQjUhQ89Qu2KTr591pUoJHgrqTsypdk3CMV6qmEm1TCkBQZQWQcbTKajkgrbpUFS",
  "key19": "33KUeeviMyPpZ9WFAaqKFk9TQz9tgUiLpJxHhjJ9E3PgKEcjFmMfQk1Ln55si7YHfvsM3bwRnAaLYy6gKr3yvXke",
  "key20": "3URU5Adi2zgUSpqFtBkifsC7gh7JbK1ogbSTbPxqobQGdP9jWccaz34X8ddTp9xJBM34Mp7D4bUqz9kGw7GSkzDB",
  "key21": "fsr4KJK6r61cdcHpH7Ld5hs2NSYdtDHwsskWuxgseYPyx11tbdxEYzVj3cZr9GkTwtmzNvUeEp4V2jYBvv7ML2d",
  "key22": "3syCuSsNamqcoRJcmJkCXqN5rYZ3vkXACiH9KNxpMHemjedCnKiSQ8zzjpCts4qWbjYctZihFTTfoPLjH3Fbb2zw",
  "key23": "61EC3KYfvfqRQsAZeaDoVmHCzuoBZtLY6EQZWuFWHjCyxc1ZsuHLXesB4X9TRpNHxQCV5pK7J4TXDZjNr6mtuhVD",
  "key24": "2LpK6nFYEP3kHVgo58VkpS1pbq349zs5qnDpn1Y8RgVkV7rHVGHvtvnf9zAFfCBPi2i3tBGpwWgtcmJALjKPVvTL",
  "key25": "2gfka3iVHy4EGRGS7oKmXPZx6Krt8seCQyfVuH3nyrrDUVCtqQebJ2YQJdCL8JAX9kCUZVt24m1kCYX3DFAzXTGx",
  "key26": "48rJyZPZDb1yZTgmaqoFHGJKCUBCYCEbnur8GWCizra1EgnkRErbw7cSQWwDsskvmckd4A5KSiSkSWb4EPsSy3iq",
  "key27": "27rA6NRKKSnQD6AiDG5dK4fu3C1ENwpruYMz9R6b1bZwxV69GAh21JHKgfE68LJ6cXU7ZsQt3UsQL7iECVrU7tk3",
  "key28": "5tt6dxRPBKi1YPmbjrWKFUuQQBtkW9tb4QSbtBrPGAhXj4RSvyfTq3YFE6RuYjGkFz3WtoaqgPEMvuoeyDccijNk",
  "key29": "5BCStnpdsR9JKoZAYNdWB5hHbUJKMY6gVpo5NobPq4QytYTwd9SuZ5ijYuNw557zTKGs7PFvwKg99cfsCF4712mx",
  "key30": "3SZGnHkRLVMNZ4weoGGs7kH7t9ENpxdE6TVqqXsp7JefFCtX7VkWHLJWTNMKg9fdf5hmXm2PfAbzVwhrTJvJT9cN",
  "key31": "123qmXy8v8fCKjoDMqqUiKovwr1B7YopXhTUjFngrEvRTeQRuGQczFcSRUgTdH6eLuJKSnGXDEC4j8NQFRvSSzsi",
  "key32": "3v3FgA8WLLq28BodKLMkWkHwPyjDBPGKm6xMddYaheYu6EFUtQsq2LZopTHthPkR81KT24NiSXpwZ67VQ6DyyLT2",
  "key33": "514PfLpjuGExVZxWtSM9SKY5FLj3DBFQyyvGzBSC39Atur6kf5VGEtHNpwKGKtd8GZF1rf2pyYhAQBC2baom59wd",
  "key34": "GYWKSYGumjMZpUdGSH5sxPj6y7b8idQA816D7VA7mMQHh1He5xPzuBxUBeWa121wZcu74AFpMoAzyDtjQJg6ptn",
  "key35": "42kk8R5NKPN44Q3gwM1pqchdC4JmXkZmcCNyVhidHS6ewHXKHQWPqka6gPDjYSVjUEkyQvjQhqJhpXAip45yq1HN",
  "key36": "2sKq7vNzAisuv2akKHRT8QgVhDocHqYvC4htaWUYJbYkweb2i4WvfujMbECtfY5ezehPGnWRPnjipLsbzeHGQgwo",
  "key37": "KRFW1TbpRJmH21djF7aRuV5fbeTLvBHeagQkvN7mvK21fCNTbqDEmNHJsEqs7Xgj9HofUz2Pu2oH7aF1FvPZU8J"
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

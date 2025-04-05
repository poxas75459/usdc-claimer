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
    "5uTYc3ZKJB9q65oJfEpgLXCX8TRP3nq2oir6MfPmXDZYYEXR2B7c2hVML3iti9nJhyTWY7FhJotSGfFJe86DaDq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RomTMWV8TzBmonX39BdsDEukjVHxNJFDiPf3yJvMFVRsQpqxnUPFondZ2FhxmwHCCNDKJRuHuhHAnHqt9Z5rJyi",
  "key1": "2qe7zii2tVL1oYKZk2rHmtaFXJyvPdnsU8VEJd8XX4E2jgszifjs2yQpDbt2xhmiSer2pxQxbypj83EAXJE5EFy7",
  "key2": "4CXuYdfH3zNGxLctFwRFWVPXjN3JUbSxdqtFpVWn55r32C1sbiiczScJEAuKz4BdXUBGL5fskZp5sutmMfxFyfBt",
  "key3": "3bZtkSAwB6uk2ZBR2UvcChq6ZGMJkC98ojreDn4f3Dy2NkazMHBrQPfwMUq9fCEhwkmPAaWx15dKQFgHmGvj16XD",
  "key4": "yeupqjsmJG92Tgd2ZzThnSvSaBiUo6wcTDUdjem6Nn79icebVSJoo69aNMKVGWxxa4Kzme6DvRDczCrU4nQEJdM",
  "key5": "3yLADCtTR7AVrLE5q5gXrwVyHXxfBMzHtDMtyebFuTSa3UE6UcAiT6J6qjKQZQcsMa5zz3xfNzeocG8krfmhvbuY",
  "key6": "5NujoVeBLL7DMQJUtwf52pvvtb1Z2LpDGWq4amU8JboTKcy7rE9kxnMkaxQX6SDmQNcmRQ5NaU9HB8MBm9EqyrU8",
  "key7": "e5bjNnwuK6HSn3wiyzGiS656viqrrUrw5zUgUeLribfjcbB51DGgE6ZYYJsnsAyZXoPfYrnFYdpp4U1wP6PRt4x",
  "key8": "459UtUdDASk66bVC74hbaERDRJUK673rikKXaPgD2hk23HfdejG4UpqHzoCXPo9dnuyVHRmQu298BAkZx2c5p9kG",
  "key9": "45qY9FwES9FKUPS8ojJd5jtMECmxGwoQrugvaPqouJQQoLsCTnRUSeNSLZXKiCp6UsELv7JC8Rk9prHjah5AEbAR",
  "key10": "3TeKWFQYfaqezXRcRkc74sHvuvXSnzyQwjnN6K7G8sEmv2oPLZxzEgD1uVeH3QRAjPhLyNVcWBsKW8vpCwabfis6",
  "key11": "67ceRqGEYV2wFhuuP1EouZUB34nNQffiaHG6VKzjiERUTKbdqjMdBkPyLgyNBmvMajTRGt8kdGFi9KgaoP5PQXbS",
  "key12": "4cgisj7RVnKvGkgMMq6mwJG2PHrCa9kpTNA5oDaTs8q5dtMPbNdcCgxgnbaaCYzMgL82YyWSd1HLTdrbHtNRB173",
  "key13": "5LTF4ubRuwhASrU64z7Yw52vYNeXHz7TZMKy2e6WBXvarYruAWu3MSjavYbJBbdvnYAjZPBeMxW2qJKz31ubJZuj",
  "key14": "2ztSU8vnBgwF6ehf9VgvwD5FGFwH4d7eTBkUncvyaXk9grSoy8b6RA8Ke5qVHtggbZT6QvM3oorao1bErt1dCjxj",
  "key15": "3HJLHyb2ABMUhPF4cyXigZC1hf2HpDV8eAem9bpoc2Jp1CsvH1bgm6Kz49S5txjNy8upeNR4EX6oCLMTavMgbopN",
  "key16": "4VKtPYA77resvec8H15d8qgyCDLYLuco2HYe8b58u8UD2J6WZ1AQNQxYLraFvkVA8QLNQgGpoUzVmjcDyYbPpM13",
  "key17": "3C2uKuCrZDN7fCPKJoDKuxuYPFhQcZtUQdxP4HjszCziSVdwwbmjmBqFmuHTbckR6BSATuezdLS6tYT37fYm81M7",
  "key18": "7eC52cCFReBNKvxXwWj1NmiqKCwrEyKAZhtoSiQBw9Kx3ArBmyyQVXfnTkkTozN3yAKX1MEQrD5aEbMRrvGtV94",
  "key19": "3gww9USEt8re6teSN3sbjWSZeuvsRQRehaqicNkutH3RN9suQtRdvhjp8SKdq9FEUFdXpV3iteRFoGQ9qU4CVvHi",
  "key20": "2JdSgbzWSTY8B5YVZfS6Lr45wnR2AfcB7piz8FvCXhwaTYnX9EaQqE6eciTLs1fyXeBfPiKeqp1bfUT3uDVXVY3i",
  "key21": "4P81tTh35F42N5hCN1UudmnaxeBfTxvxsyn88XMva8yZN8CdnxDveYZYM9cGdZy3xSvzX7jn15RCP2xJ4dsBimjy",
  "key22": "5ZghqGWPa7fDjehRe24KESxzVcX19Up9NY932FCXS8FcUqmNm7DcLvcKgyKjy5A6NgNk7G46XhPJ5uXQXibiip2X",
  "key23": "5tFgGdqkKXGtpqsrf9oEQjY8Je9srrv3NfJnzUd1o5jDKJAr3oyTVAHDb6fSYqkJsc6B83vxVdQM38KTA6LeVYfq",
  "key24": "3rmDEZjtTvKVUxWzThjmATt8AYzYfHFRfe6DPzrBCKWAK1tSNLzdDzb1qqMisCpfowzRKtBAt4W25GTERuHDuxKo",
  "key25": "3aVS4ReZnqN8f6es7AyniyYZNCEM5W1G3SzCMtaXsLBcoTPhz1ndPmQBMUeZXBkCbY1VdAG9CDRy6AgfNjX6cQx1",
  "key26": "2wU4KL9wj7HCYH1zvHt7ctTzjr2gUN9sXjiYnw3RfCiHNDBHmE1BgA2FtrBRKPCqD1qtqY27GEnVUoefpeWcFJQV",
  "key27": "HtDsbooJhgWwS1b4ei1zKPTT9vxp5mm6Wg4PGngW1nvhvMqbvQ2PGH6p9SDEzcJofpRPUi9DbAxqW9iyjhvS7EB",
  "key28": "55VG4FRjZbJtgR85QDRcdGi29DDbeCtF2ZTy1LFXU1LQjZnDK7BdDhxWfrbauPfBqbfvxEfBRwfbAVQTuYetuuBy",
  "key29": "5MdiV8Z4LKGvfwgCiQK9yxmS94RowWK3xJdPppSUKQDsGhnsEeCyGTy8WgrBogF69Lweu8QJozyPYgChBvpFLeKY",
  "key30": "332w1gziAxEau4GvDz6MM6EDB3FoCKm6AukwWCeEwSutgRN8vmKWy99t1CCb3na2XiEB62NqwuFgVAq3PTH3M1Mw",
  "key31": "5cxNxu6q4NWXgjieg1ka9UPtwhFi4cNssQtuG6m3Yea1iJHx18pyfeum5okMvuq61DfD9WAt1V7o4zPBwL75Y6r",
  "key32": "3niqSLD7TnbTQXe8A1dv2arWC8pfwhVLUitmFYH8ARSEw9ewoCEbbx9mseoxqdaxkNxqj7nH53gnMehTjcMYBvXK",
  "key33": "tGVj6xApTScg2KsycKgduYpHim31GBPuwciYrzExKYamE5mYS1iznTNaqaEimQ7KQqeXLqhZYdrfdsMaxzWKfnM",
  "key34": "5Y4avoLcW6YGXK2UhZPCjEig9LpbkUrLqbseSc2ZU2BgTuBU1QpoghrmprrsEW2BLojXek1sPX3uFuRbef1iE8z8"
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

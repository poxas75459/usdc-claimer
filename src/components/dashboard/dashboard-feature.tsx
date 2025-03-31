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
    "4BH7Z5Rzd3eK2DC8vHFvnq33rZsowCLDcuM9YXXHezAkFpUikMRZ7GWdxF171uS3tfsZYZtjUQiCqUCAFfYA2emh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25WoLmkyrQMRgGAZfoJn8CzBYqc3igWAPCMmrsMV2hPyS2J1wT8S2mUfXq1WrqTMYvjjH7Vdb3A9GR4m7JEJaHk6",
  "key1": "3AmGYuVz9SGQjtvqW7P4e6nrPf3a4Ube6pswjKJaUDa8TyHk1TbUCa5zKFedzN7rcqCxfuj7U2xnrSjTkZ6idjD",
  "key2": "2piN9TpnDwzinpNS22vKcxzHnCKZzbjzXB2gLeLancPeug8QJzC5rLBBY8h4u74BUh6UkLNQJfDz5aSBEJZLzQdH",
  "key3": "JbfytGWgWVXd5HTxmRx7XAH7pBzeBtkFPE8UUfdNu278SDgFAujcMENjcs9aw8GsXDf2umXPza31v8FgHpEQqDt",
  "key4": "4KQWN7nyC4jrVGPk9jbJgjFgxAnzKaB58DvXM8wsAqzNMZ1CfNt9gRdAqSWkmgCLoCedbAtffdfJkv71bGURsosq",
  "key5": "3hT95ZjZaFeJv9FC24gU2ToGDXibfYsZH5jMjeHxEHA2FTbo3NBZwaog8gi2qD7JVAhmei4FqpLtuXJwc2arBjdr",
  "key6": "2uu3twhzxjHdVx1JxdW56SDTkcQdNybLMSC3xoaWFv4VKvXMcNkTKqqsqpevPSpDZgyvXiczDJySmLa2irhv5tQz",
  "key7": "4Uw42nXjSqpzXF7e67HAR6TF4cKAPQSW4ckQDRTTwULSNqkziM9XLrWm7oafUMHVjudp1Zwiw5SgZzJH9fPTWh7T",
  "key8": "45ACgDtvaCVzWr2sudVXMmyq8nKGQ7TMugsFrehAUezj2QyySsDxdcHRi2Kj84HN9fyd2So9muEdyX7YwDoasRAL",
  "key9": "5xN94Dugv9PCzMtDEja5yCbWz96QxqXp9U3SgkWdf5Hno8zonTGqwTbhjuv2gCC4Bvt8WMvzYZZ6hafyqMyETh49",
  "key10": "6Fb4tvBKYrh2LoNcz1FaBZCSuQsRzFeXpV8oBWv72ELFCbXXkzFvgevQQR9oJZB4C6KCPHfKK3WExK1oSNxPV8Y",
  "key11": "62UykMDZ4r1JXqWjDT7NzhrEpopjD9LmTU4SQxW6pQBh3pgaqQ4RUdycjqUc5NaxZ7Z6nk6wuULmyP5jW8oPH5d9",
  "key12": "DJqnekuwxUfoKHUgNgMnknQCPykuNiAMcJRbxcVeaD3ZxC2CBxPhu6ua4DwyjcsGBFt2zbawJt9p6deb5wzsSyF",
  "key13": "Npi54NmzrFYJpYzRjuEkrqjKYbRvN6AXG6oMtQfsGAWXdxjRG5F9AccDQfHY25G6pb9GwJB8To3nsvXnjQM9DaT",
  "key14": "5WnVLYwcHtzxagkJuQ7a4hw7ZF73U2B6kX74aLVhgSPqkewRJBHRvyZ81njiEvwg1Bq16Gz4muQxEgaAqBAkabmR",
  "key15": "HhCkta2ZKwJMmYoda9okfMk7waxtfMFAGKbgwmRuaZurnFGmaGqAwpRVAY3uhB3tNG4j9tuhHTizMyyk7E4gweY",
  "key16": "5XKp9M8uKJwZcBwkZAw3DUD2U53dtU5nzh8xQGdj64mnfdNgZ5bDRLMiRNvszY8JgNLxMsKvJTt3ivxxXywGKYgb",
  "key17": "55DE4QRcUpzfboHg7RMEQyWBkyMkPHQAQ1jiRDaqJ6pEgWbwadfEMqDyJYpH1aJ2kFeiARjKJoVzRvf8jUuouttK",
  "key18": "5QXYuoUkDb6cKkB9uU3X3vVaABeFRDXFjU4A61SYWBvw2TX3SAyA35z5wy5tEf3GaHnYs5QHzEK5yYNaJu4cBB9e",
  "key19": "5SYBgJrm8zgJTMVev9AvKwMpuUffyTAWgSLULWeGn7r88hqNopPsDkNirfdBe1ovUWdUaxNx8EPkX7sg4SWwPdsE",
  "key20": "4sbHyxaayWzDm8QgvLB4RAMfc4X7Tcy7UqZXNguwHkmpYLXEjVVqmJ9PmG9AwFEC36HFGnqma7Avmq9gudodCFgr",
  "key21": "4r4hnCGmcbNDFq2Nvx6GSRq9K1o7tDhgXhMLWgudRaryXmvKZjjMZJLxCE7NjtB86sFoRuSv3f9hPfZ2wjq8x3QC",
  "key22": "4V1owVvurXa5hdodadRZr5ervBNWtyj8tYqKh4Fs4gqeDjg6LNVFAfCYxPTvwCB9R6yok8umSZTTmstXyrenMHAh",
  "key23": "3WK8m6FAfmtBnHAsUfbioq7kamm77JKoaFGfyWUd4NDYAEppXSuADHFSo7bmLxMByVeuT6u7beiLh6Mw8B5AFnVV",
  "key24": "2sg533r3yDZTLbQJiKFC3cAwCQSv8C244Sx5kZCciRxV5exxW7fqf8nKA3YnGxHMPqPUh2U9vZgrcDLq1oS3Yw7Y",
  "key25": "5xwWfvweVZzLy2LSqUbo2NBfaLb43TMbqwajG3WdzthAFHeJwHTEPshyiTX5cztUq2Vp5tNE5DceU2kCv8qpZe3H",
  "key26": "5RVaUiBDZjfk3iknmxpLYKThi8pJCHgUuwe2n3n8wmPKtGniKC9zHhzcQvBUUTHqxSZJ3GkGjqTuj7KzMWzDo7aP",
  "key27": "4Tw6NFS7en9ZkGhPmV4jdi8xi9x7XLWpqRPRsPnxFGW599imtuFxxHqziMw8kwuqaxujKnwf8HoCWVWWhMBMCo1Y",
  "key28": "XTcnEjPFFSNVqY9Fk1MtTP93w8do7p1ptVFYFrgtC4qFEHYSjLguZPXZnp4Mm6jHffWwTcFLhjrQ9D81r18ENgq",
  "key29": "4BACsbA8ZyoMdvyQe1ELUi67sTJrWk9MUmnAusdJh41fuj3YqLG6o6TRBvGi1sbh8e6EEEhD11XoJoT1j8Ltg3hT",
  "key30": "41xXduxtD8MbXpa85tWr79p9fdUtkxxHxKf87QuVL5Jsv6xCpA4VsV8w4pnqzBeQvy1ezQoAmTdfvjzdFunZd93c",
  "key31": "3igaVXeo9gJwpJexpn4ndkHxGPG9R8Uzhmih4VQUdg23TSpZifGLcjJBDXkWjuiuna7gPBYU5KAa7H59c9nHYTks",
  "key32": "3YdVBkoGbH5h3RrqnqZbd3SxeRVKrnfE6VWitdiQwQW9pDQFjoFN4JsjwYLKSMopxY7UeZ2YgthuSVwXPKUiSLHg",
  "key33": "4EaM4fXfyitHZ5Ky7kWbkZoJxbFTkbgNFqzjcmtXVNwZ6gkcz1r97USBpUmg1X3NrQT4VauontF4ESbn7SuDsAdq",
  "key34": "569Cw4vNocSadZv3XkCvTyaoptMKMGv4bhDR9qUQqAsbkhRWAePM4KfpbXLZSR5DXLV27zTEt3tfyVT49zn4xv9p",
  "key35": "4CVgoAZbAh7x7WWG5Z4BQQR3zMy3REkvWnKnmbJzg1NpqmWczRZhchTLhZL29brEJND4pcXaJCAxzQrQpRqt2cn8",
  "key36": "3dYycWi4qi2eNKVXzU5wei5NUWxb3BByRL6o6h7Khw5h7MFsfddfU59xmqmjmx9HjeTAvyfQeSHJf1k4qSqg3XR4",
  "key37": "3o7WMGWaAa8iUZuihuo1TAQBtR4u99B3mtwct13FCPF7mWQNHUPvdE3fZPMoUHUwrRc3zaMcaUr7cwdJeaEKDAbs",
  "key38": "3qfEUCCCLbkyWDWYSenpmbq1TJ7gtebtxh2T2s5K6ZZrWF5xTYxLdR6LQVBcW2xgZpeHE5PLrPfcpHA42N36HKcn",
  "key39": "62VcEvS36WtXq8dxCHPUMuKD4Ad5K5nqgh7rxkoE1ZytUpxvzcbEMdHWEhBfJsaXz3X2z9NjAwpvdNy3Hy2fcBhy",
  "key40": "5YaUHuDP1QaT8Z6AQjon1HmiPB1NhuBU14hXMiNDQGgw6aGJuBiCTTV57MQeZAbAXUvuEP7sJZg1DnezRJH89qwu",
  "key41": "2tpKdb66wiwerr3pf4QbpzvdREarx3sqXhZg5Hc6Fv8yrAG637scZ113SgP8WbeVoNKu9xuBcJAtQe798KZGJn6B",
  "key42": "5yxE4o2LBBU3CMtRxaPkGAz8UkfcBniGgrPusvDpKe1r1Q5HPLeDfzw8QsqMsSvsKjEcABnigDkWHabSKvVV8izQ",
  "key43": "YRuJrkB7VjJ2o1bwDzjDR4ZF9eroobjWMHFAKEqEx7zzrXME7MJvDSPws8o7aBvSxWFwJRSAiag62CDcBG472Df",
  "key44": "5sXckNbnYo744k8qmU6fqR4skFWjVAbH2Lv9g1mFCeo1sDnBMsfjQrCfBWHEbLR8Gr4hbWXjXrJs3kCatgvp98dt",
  "key45": "4TMUUSj6PbUrs6bhsgd82JD8C8AFuDi1J9HxQcuE3rsx3GAiMrKBNYxk8EhGJMwXrfjd5Xppzim4w8szjAvzxsUS"
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

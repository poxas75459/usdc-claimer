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
    "46psNNEeiRyu2zLXhbrXywCjBz5LDGUjzr19B2GbU1zXoESLDCmAvat28mUSeq2UAxK4vDMLUPPnJzYqP57XtU1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vs3KB8oRSNrkzD762hZG4ixk6y74vmWRhUv4JP5WVPCLHq7rEns6Pzfuw2AHA2pncregSDsULWW7GA1FRDnqupK",
  "key1": "4y6JRP5fZtmxxqtuBHGkpi1db9fugBo2xbZ8YBfwzjG21s21jdCaoQVri1tpFiRFXtZdZe7eb7FUC76KTDWxXsGG",
  "key2": "YuMeXDLuYorw4MwSDqQ4HX9JFWTj3mLcDUWG1uccmT8xsSL13Mt4WLcpp11QCe2fkscSUqCytQDhhsktzwLCKSf",
  "key3": "DP5ZoyYPL8FjTrPHwobiYwNUjhAi3wfG9CWNJKSZddCyn1BYirypKVdThU34K8xQ8XU2tNRqficSjbVUCoVwwej",
  "key4": "2C7HTvj7Ut96E1WiRBHzWzddi8Bk8h7VDGicZgKzoJ3c1fGwhpBorPvcRcLhRrVJuMxziAbpiGWVeNWA738qgPEg",
  "key5": "29kn9nRDVgPX6RntGPnEsGvGQUEo42vXMBrvxQmvdiNsc6Bvm8cN3MCaucsA7FRUR3qs66FR5Ed2AW7Ln6r4FQVP",
  "key6": "3fmUSrq2DrfKZS9RyUB48Bd17CQTetX3jNFypFuYLUtnd25tv6wETaBjAj2mbEPkXyDNFoyfmyscCUbU2Nv7YEHa",
  "key7": "8WsiAxN9QkUkEvb4XnCPozvYTTyCr82b42BbKVBRU4EuFF1PV6RizVqkD4fZx4m78qWjHAuZu3BCD1SHnx1DsYX",
  "key8": "3QqqbFYKxcMHeNb1SuzefU3o3xE7MCqbMA2GXa5SoqVpZth777A27rkpCHnBCGpYf9gYg4vb3WaijVM7Q3dWmBK4",
  "key9": "TTqaruVFQeKQk6QmmQVjaTrZXmWN8MZ3uZGq8ja9DHA2e4VAGfe1aNwFbyD91w447qSySEE9jGHv85bihBairgB",
  "key10": "3ZjWgZVULbSyfZxWA7nAu9RKWWmSJs33SUwCSgRfpEn12wHmeDkwjhLoTX7UYNbrQfz3RpRGZeFGQQVEaz5a1fuu",
  "key11": "3SRP1eQcZbvUNM1CmoiCAjiWo98rWCEnmnd2cvYS9hcTcvScBhjcGasYYRkYDCSPZQqCF67SvyhaKTrubL4uizmd",
  "key12": "5gsnNuac3t7DYByk63ecUfNkJAUehGuC45DiMfi9ZYdS9muAKm64maLFEbafPuS4aMDCxyBJpzTqQ5WUfk5ZQjHm",
  "key13": "MJu192MYTS1xpRag7uhwSqgja42bwXuzNVHxaFeePYduQLMzsCRyHV61VT5GBSDHDcVf6eVQtJd8VFP126UUcAH",
  "key14": "3LmTJ9h8cKVww4v761aByB6ad7mvLy1zg2buLqnrTQEVcB9P1fCTS4kF9bVGVPKqQq84UpL3mf9w3docT5U7RaLV",
  "key15": "LVWYgCurYbqz8hMxtyauf6LwFE34qPWT5LSJXFeTfpdgSdALqP32W5P1DDQvrUeaR4jQ9fsCUyaaTDV58rWnxJV",
  "key16": "3nknqEvdj1BrZct1K2ZwgKSoab1xZndTMwDvxSNVkfdtWC72vNcswYB2zqUuxy8gi9PbsUmfqnN5n1y2KG3ejHYS",
  "key17": "2kMgx5UCb9N2deUaU5fakFAq92C1BKSz4Vox8qiF2cttohj3R7Hr85tCfARGm2ejXfuMqdeMCcubh6gwW7uGCwS4",
  "key18": "2qHg8xovFLJubSHZm6s3KMc7SAng62med5L4WSonHijJ7QmEVALzeWJsiPozgb4qLgCRT7TJTdN6wFGZSpUN5MN2",
  "key19": "3S7tF3sehviPiNZ3h3NaEKTRWNMoaTj4pwiYwfbtgrg1sGQbE4TppPY38ja2FXv2yEcoeCf6LgYhVuff6dgi18Ph",
  "key20": "4rCtRZwHiPfSoYFzE2roQCT3PhQihFrvanNRRcuE5d2gSBsXH12YdSrG8rE83VDaQSqEgnbiADGYoBZ8EuhDRjSg",
  "key21": "5jPmN6tgv8yzaiY24y45yzio2GvePnrU4bXWsQnCUCdzEMctJbYnp1mmFmVUwMiV2Xx3CodhDTgskWX87p6CF1p2",
  "key22": "63fq8U2FzbhLpb9WFeieKYdDJbZiecGxGikBifKHVUg9Juj5hvyYyJkyzgAzyo6AXwHkpkgoQ3km5zSJfFR6tLSV",
  "key23": "4z3Grg7ZEPG9Qvza6pHHyEyoWj6DiE58v6evRskdBrCQECNztqgsoBh4UiQviNE2a1sAVwB9sVaA5LwtkUCkzwNw",
  "key24": "dcCDT1xQGPR6jBgyVokUi9SBJkH3869gerar524uWA5n8MxRNpy9xDBPH6TUZzk9J2yEWut1umGt5vRJJuJh9Xy",
  "key25": "36g5oLL6THCXNzCmzCWKw7q737yQiGQTdEjKmE1pNqJgJvib5A7wrJqG4muGg2TMKoC9o9xmqTWuHGfmGD7bpb21",
  "key26": "5F4yjPnr5qpftxNknn9Yc457JZx58RNw6pRdJmkACX8XZp9TpS2utD3xpodJ9EuH1DnxnhUmqNjcsnE3JWbe1UDt",
  "key27": "4UzyUWEPgsM596kxkUbfddzkaf67HCZ9G7xk4DCEbSKw7VWbLzfpMYbMuCdyPYPAQogXQUMhugwMVafskgHZJvZS",
  "key28": "4GKEmutNRvjq7D8TCk2bM3pJuzyZ4nWs32Qk7ju7nkbDi5A81FCK6WmT8VqVgFiKQxP94S7GMe7QhrkqYjMHupgX",
  "key29": "4kYyp5pAen364ZupktSDv4FqG9ffJiUzJooQa4ymdzreqDvhSXSzoAZ4FBh7PeVSnh7tYrzjcp9CxqLW9vXfMczj",
  "key30": "2yXkTxui85oFXNokDsGDDxg8AhjmsVttVXPTM3rAgRWKRGnV2GVxjXBDV3ZQ6y9Zuo8ZLjfaH4Yfy2TkkWmGw31H",
  "key31": "63Et4byy6W6XJgZK5sr4B9sGajWorFmXFMu5P14tq6uUQ2gQsXvhgX1bCeyJPGi8cekj3w3X1uyTc3xk2dTs857k",
  "key32": "3T9MZv1ZV6R7AkFnFkTY6kE2J7b5c1EjmEdtjKV28wi76kGDVQajbFbfuCNAkRtsSie9bedd2TX2sKCkY6eeGUVF",
  "key33": "4PYLWYnoXPihg29HvZ4Pq7AzBXVveEsjktjxSNSvQ4VmsFuqujJadJsdubUZCMVtfS7JSPVPKT8AcFUVf5HSUw5T",
  "key34": "5PUJp1R3ZpDVctaGtkhC8d2axGPsoA4u1Bvt8g41zzhmS1i3AL323gz7X2ESweg7UVwHF9sXZaPCck2FPVW93bui",
  "key35": "27gQTf1f8eV469QdMcXJ2tGRJNMzLydEJ36Kbif9WBzSSafKZ98qzJ3BP1d8CGoASTqykArinKvhzdDqG5k42doc",
  "key36": "4zLM9Lt67pYHPxyj6PSE3qju2RW4RZFjmbDYum4nXXXfZpBcBFnbosVneUL33qdjWaWVWcBb1Bx727rYJFbRsmuB",
  "key37": "5Hu2WKHjxS6K5ycoLtLksjny11GD3ZzyNLXfMPFF2H9GJFd6jwcapkUiWszqzMDFQxw9hEVrZ1r7ENrr7SzPq83v",
  "key38": "2aBFsPMxz2sQ3TEkCtNF9JJFM8NCwmXeYBXw5kgqvDpa9AUTzTkRCeYC8Pd5u9KAJBQmrpQoF148KzSEw5ZobA9K",
  "key39": "4iTuSHiieaJGeo4Jszq82zMeW1XA5RErPqVX98Grbds5zJyuAExZyLUj2rFAiYsmtkmxgoEwmBdkmsGieYFLBY1j",
  "key40": "22iDcNZPiSxW8nP3b7nJqomjNdABgDRtgFNj3qW5Ge3yej6sg8MF8BxtEfd2HJgwA7TFUY7VaugWzqw67g7poShi",
  "key41": "37g3oPCSNhkBRYG1ZrBrhWErBpRJqKFtXbxdiZziFmruPb6W6cJkBraXnZKTbJAN49fwRnXCvf7WmQWJJRYaZkp7",
  "key42": "61zxaHdosStVH75Qw8eLzKiTpZepkrgMd8rtRnWU4cK2aePmrdd5fuqiCZf9BZfdsc3vFaWVZ8p36KhdHtMyoRP6",
  "key43": "3mXLFyChCUgtPcmd9LjYykcP3F84a1az1oHX2PtLjpCJYAZ8MV3bcRPJ28X9iJ5hvCiSAN4ypJsfJNt8Z7ZoC3Z3",
  "key44": "239s4npH7JAv3zJJfdCqAUfACC75imuuPnHYabnCNMLsWY1LiRj14EW1kRWn7HNtrgxWqHxUjiNACPZdmDcj3fqm",
  "key45": "32RxtpopttwiXPFFgeG7AQ89RhT6g3UzjRj2rQpHw8RL88cabC1xUxK2jCwZecesi1ajCo41GLeuPjxPiQt4iC87",
  "key46": "3Tj61mGt8uuPUueayEWVvrqajhyhtDZo9k4FPPZ82nsLZvMQcHYDnqkQwCGsDLjvjrnaUyrZzXEeyiCuaDwF3i2o",
  "key47": "5EAUjNCd2fMzPQMLFgSk28pmaGEXVxxQzdbnr8uLhvmvTZBmxfmxf33r43bhzB8rsPgw4NcvYjChUhbM7Rx8kEG",
  "key48": "5Rjx4sFR4fRqXFdPZj7gFV2CLzuXQnFPtUVL8Ti9AMdKxehWomJCVG5ukCWwJixCuZPJ3HbHPZ4N4Pkct7n7gPGd"
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

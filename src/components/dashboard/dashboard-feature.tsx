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
    "3PYkJh2kGUDEANzTGaWceMYzjafxeWmmHAMq8e5p6F8Yh8VybKmY9CoRHAXncFTLymRGEwtuq3FisdKQ2kd8pPh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8PszCSmM7vnvQYYbbPgkgyt49yHbPra45bzcxCbVdA2nYjRfuqPQxBJMT97KC44wisZUfttyumNeHM7r4fC9nh",
  "key1": "3wGuP95rEEgM8DRBW3z5Y57tNQMuqthsnv3nP7opNrZNK9CFYZL6wmPjocroQbHUCMkSZHG5YhqcX5BA2xXrpX6u",
  "key2": "368nXwstFPJ8LzmTRRXpS1k8JtFYMmZobKRaNHiwjCEbussw3ZWokjc4KqY6YrRjcJx8m2owyWxmT4kpHdY5smAN",
  "key3": "2x8YUvCVP8Bgg3hZWfasVL2ofKeJt3bjSfQA84mz7ts3kAfPsK92yrZgZFnCQQL5U6sB7ZtEzS945FRPq38aPJpN",
  "key4": "4rPJBU72cukGa5gXojqGJJvbTdcS1HpbirFenyDXb4m8cN1FCozEVU2esK3jGV4mE9KitX7bN5M84A4PipTNDQ4R",
  "key5": "wnoscv4VtD7wzc8kFgQmF641YtG33YbJct4NoLWwQ3V8guKWkFagmyePiZnacbvBZAncfx6znNbsuxMKSUkraHP",
  "key6": "4DjkbxHQEeYKTosk3vGERE1s9xtxmgBRBmwkNE7kiZd1wBsoJjiVoKNhjRqvR5o4V2XxDk6jBkzKvjG1CRPRNVSG",
  "key7": "4C2i39wNexUwimWCN2f1goFsmNDTJvTX7ZgoQQ9XmmyUwkVCMyrapWKjsJ8WWqW1D7R9ySbuEX4uKCjpCvgz5CYA",
  "key8": "2niXrYvsWMz8aKV5z7ows1wJGrDXwC5z7vB5U4ht671DvAF55yMotjZVnjzeyhBV9MmVE3pdqudvgJdnvkYFjKEG",
  "key9": "41p1azT3CaH6pEEhXSTJw6FyvyRiyetrqcyLMCjR6RNaKMMY8e6qbZAoiTZz7QsKbfpRWQcPMHs2t6Rg4yNQiKF1",
  "key10": "5uXYsHamoAu9Yrh9bsoUiHUhcLtpiHTFipNjHpt8nJJrFy3Zpbzww8KoaQsQ4ynwjm4duYwSxWbhbSAXU5ZTXfjm",
  "key11": "2sz5zXDhymRoyjhbyXfbmdcDgzWZAxoDMF38qkRmBcWMDq4ewBGdoi4UChKBe64MfgWhBiVVEUpKgEgQyzmX3rt5",
  "key12": "2GyrLPJLBjvB1CCCseP4Q3Rg4UACMh12Ew7A8ELh4xTU2a7EUnitrtzinA7f12HLKGqT7hSvYg8kmBwFPC2W7R4K",
  "key13": "2LukdiahY6b2nHcAgUhzckY527baNTGMN7kE6YoEZSt1KS9ghKpxsDCS9WHEa37NSNxHsf38ovirWqdrEDRftx4p",
  "key14": "4xEb6Vdw4VedFTd9SrzzmcwjFfsLNVkbTDoraqdMq2zB2BWUarmoWJwE1BHE5HzUL7MT4NgYeKkTmLF5oEQieAEp",
  "key15": "4FCvmUHPE7LrVy9cwG9QJPFVDBDZxYyqRScrmxaVAvVTBd8sfTqWpBU9vDoqvHNhabxHT4wSekpMDqQchCLEv6vd",
  "key16": "3XgotYZ6D7h3pbj2YY6HJhwb5p9Ykiv9hEKmWHzWKQk3MVEo7M2JyyA1Evx4JfgfKga54qVULGt71K13BZSmk5bt",
  "key17": "3JhKdeHxvPfxcjqaTSh2YepcfXZyDeszdXxUcZqXCXqFFgDk73FC4RnAxMM2ddHJTnuVu1YxjRM7UVmESGtz1epE",
  "key18": "3A9HYTsjunsmpb86dGZsv39WJZhxCpFK9oKszV6NeFNu6MLBvPRZqgjbZ8WJRyjnaAigideLdPzhTX6fffWJMq2y",
  "key19": "4b3qjAMFDDVFxCwdZk4nnwgGuZDqUyk7oGoLWeQ8vUoDAwqmt7UDoW9y6KuNRqbqHsR9rriv3LDx9QaQrHXXBX6U",
  "key20": "3PPVvAa3mv6mzesKsnqFp4Gh4Zk8HLD7XcAV5CNoJoo4MRk1nw8iVMNf9hcXi98wk9ZfXAZRZS358V3UhU3UfSAC",
  "key21": "2r9c8qDcUhS4M5p3HY8N4hYmSfrUKzdYrHZsfwg9DB7kz1M4PpL4Au8WreCVmf97jrjwKqbbKm2zviXyz2RwS7so",
  "key22": "569HG3Amk4WCvB4qNjZaKRmpCVNV3DY22JEMdhHfx4Yws9epLRV9mvtB8TS5Q1cGivxAobqg4U7uGW3HGAXnBkat",
  "key23": "5rykeu45Vobnyz7axGphMuF5fyEMnJ41ETwzs5t9LL3VAz7SCieoYCky3oEZ45AkzyqngnSF44pmZBxKjLhTGrd",
  "key24": "44Mh5XE9iFwrUPACKUSATSTHKsGagV7o4Hg3kNcoJw7r4jiNFvHqQHhusqwdvW5zVZPNfEgaMWEYXjK7RBV2Xqkh",
  "key25": "yrnLDxZ3G6YuSph7bBAy8iJGa5gsDT5CDjQ7nzvHbjrGBriFqSwHQrZWbr52Ncwa5muw4L7EhNnAQPLjhL31Evh",
  "key26": "33ovtekRS9N3TF2TbYNYZyngK64JCjYbDamkggozmDzE3EXQWktykyAjKjF27RzfW8iWkSdztTEqhiEv36YFXSi4",
  "key27": "5aSJU8mmJgafUnTmufC4ehmiaLrqeEJnjSqh8SYijPVSUrfLi2a3XKosqfyVvH3vby5pSExhJ4oEASmWZLB9AENT",
  "key28": "37tVJaDJdMSCmBqGbrWKGdUZGNGhXsdPnd15mkfdJKyoALbzG7zW5bSh33qWo76io8X3fXxt32sXFwdu3D2sZtda",
  "key29": "2DKvQ2dDoUTSmZTXmCFew5pgpzrWCEXUVeRVZR3rXQt4xzukUYrEgL6Dngz4sV3qqKojhsNu6RA9xGMKhT4XNk3f",
  "key30": "7zAeBvBnkL48FFMtNzCCH6VCoExUdf4G6XoffFLTQvcgxva179KffVj1u9NeMKs1DkpjC2DHCu495MzDmePuFSf",
  "key31": "3GPBHfcoU7YBF7Nud5ZC9CNRCchjzVnUyvuKK2C7K3sLuLzNGQ5F37xhVdb5S6K1B3p6Q3eDyPCBpJgcntAGBdDo",
  "key32": "ighoC8ULSuciLVUj9RASai88AWS6yhsJG31VC99qh1Un4y8Lmr7KcMe2E44zddqNXq6L4WXd9fVSkYApesbaRXz",
  "key33": "4wpBTUZHW25znTZbtJJFoQ6ekay5d7Rq9VyeLCesAovSFSVG47i5mosZLcwvUcUwRaJ3qa5uHeBY9JPHBMCg5Gop",
  "key34": "5N5xWxUbX6p3zXeMhmbQ7MWnp1rB7oqDxjP5n2e9Qxu6rgNyDoPYX9GQbHnbx6rRv8PEzR4RCoqm1oitwoGLMRy2",
  "key35": "5qQmSA9AKpusDdvngKRRSb1k7zF2AEsPyUFGs8gkZXVWSycDAYpc9Fz6jqJ7uu4btkVCfeXQS74GKQpdaNFZmvGY",
  "key36": "2DukLxiXAt45CWcWNf2eoruGc4hvoRTpvsGcgnzbfT4cZJ2U18AZNEUkzPKZre7dDTcepDWpn39ueJZ2J1PqiGPE",
  "key37": "2d9m1H3r84oCUCDH2NXEb91sBpRZPTZGxJsUMYQoJ2tg7Vg4CR2ugJYjxEm71H5Qxd1T3mVn3AWT5eHrzJ2oxiHM",
  "key38": "s6KmxMfjCL5ThoQyyYERMJgCZxXy1dwP8f5Wg3hQWB7zWWvzgnEeNWwb9GfABV7B7HJw8CzJnYidu5dcEKcZLGK",
  "key39": "5JrBuEAmeD7NHsEjujSXDmv48fMdmm3fqKEpKfUDBQaVDkkj5fdk1JHevMDdMftGoZ7TqsNr7pDuayLz7NS1ayhh",
  "key40": "3gDR2GZoWxJcQZUfrpZAQeVeK27kCYYwXiAjBbeKiXbWWSfneSCuMJCvmtrZUmqWzUgXBf8Syy5Au7eh5iAAqv9d",
  "key41": "4sUc5Gy6pBpvJM8FzaYLvanEXNwQrydfRfVnHEHyqBCDN7AyBdfHN8ENLjAS8b54w9ckUcsNMuzGXypEzmK3tcys"
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

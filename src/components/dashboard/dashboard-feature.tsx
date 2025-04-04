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
    "2A8ynF8Uyg1NqGX6ohSnfUbKEf42umHQjVrwBhy1diKoY4JyqoQTFcw8bVprt2Ndd2BR7C1GVmnSFbk76hDGMGSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JyjccGSkr4BnzDtpaYTDcvsm3pkkoeibbYTUY7dsPoket9SjPcY8xEitW6GGfD88QDYp6GbZPzHdey3XYySx5xi",
  "key1": "5BcErx7eV96nCno9T2xxNeeE63r3jB4v8zkSjgJhqyKeUBZc926JWzM1rSHZhZK9QwsbkkDRs6DMgRonbkHano81",
  "key2": "4F2jh1DR68zraKXmorgUBe3Uv15gxajen6w1LgTkMt9DhoX8mEEZXCkRzV6e4ReA9AG4R4Q87MhcJQqnquGYBRxj",
  "key3": "499KcJPPYHbhGmUXeHNJEg61UKY54ER4VKz5RYMcoHyjaKUtiZzhYcuwhVM4EVn2JH8eyp59DMtZQ1YcMbLoVvQJ",
  "key4": "5KANY3yRLGYyGGTQQ4Tu9qNpghQAiwS4mY527SzTYdFJvhaSaSRnsub1ZenrwUJYSoJptZz1oiWhUsbQumv5K7VP",
  "key5": "2ndCfkrcKC7vjBgzwUb6nsbgBnnm7P7FYPUV28qPYLZD1Z8dvT1u9kYTxeSCviiBYaaRywuK4NrhdpoGEJs4Qbtk",
  "key6": "5uGpWoBupxHtWuXL7Xvv2hffDLZw1CbiKJHmKoPizCkPs2BtMiwv1VwZ8N77T3YTVrdK23YAufKysKVK116tTjhg",
  "key7": "tWjzdKiS7PQZEVkZyRgdfP5N717pibhUamrDWjGGj1rQV8tq5bt441MZSBuuvz2yvHXaKDciHiyXY6xHPWiLh7W",
  "key8": "Vm8E9Wt6eo8jv5ehrcUPFp9VCDS7pbw8gR6X3ih1k96L6NpyctcoJTuJba1gF69jN7HUuznY9GyBrzjcWLGJ7e3",
  "key9": "eVpxHgpHY2RDUKWFkSzuSLe9eNCHN2vzPAXnnMBj19Bxoz6cNL7eSn8ihttKpyi8Hx5gvpyNMmEXYbZdUmNoqBo",
  "key10": "2MMr4kvbNvGpytg15M9HXwDbue8NtgjeaMuAVANebv7UwrNZKtmM7bpbQMSxvTifcG91kjhtkJ2zvYeNfv4nkAfY",
  "key11": "5EDDn1FREDz6X8yh1q5zgDk5A61TmNNyYUmXHX4pE6Z7eKZpXn7Xr6KaUHM6t7uYewBiDzWffcyoZnaU6Ck8swdY",
  "key12": "3MaJBiQ1fY7t3EgcAqGY6jdMw2DSMnw9YG5KUM4NgwPJHDqiy2pE1nBL6hAP8Ah6rQLa6c61H9xf5ikW9XiomAfe",
  "key13": "3Gf9hAvB3ZdNT26bDkVJTUBawQC2KxXZtVK1u49syuFsYH7RKxsz37ffgSRoqU9qsRh5JNZcEXoZoKjHvXtBYFwK",
  "key14": "2Mkt76AW6TWTQh5aPzK6BN6MDe2nJxKYa2PMxVQ3nVRAqRc7JdbdCfQr1TgFCSquRSeM71HhSZg2Jbu7fBPXz9hy",
  "key15": "4GfAfdRbXsrW9McRNbiJrCpBkMXLZ3VS9Vjv6wRqVUwfEiuDDVASu5cyqJhv4inLRBACesyMzf1EPkZdtbzVQvij",
  "key16": "2WqdCLdtEZkT6fmHBFvLJKL5s3bY8euYuLdKYgpq7C1fFBEJj7NFw5tF6yahg78ZQ6GvcEmkTFxHkQj1rmqefdZP",
  "key17": "39VCn5w6tu2a3Z56UNuL2KgmiFwW9MfYKHfJGqGvhmkBRAEWmqSRzmKHANTP4eewEqso4FfetPcTUjyvfvNbxqPU",
  "key18": "28ixJaykAUiyXCwHQSZLUfMTfXQnsSpAK8KfivyazB9gMKeFHWL1AohSKsTUQmSQRZK4KA1yeZ928ncjqgm2Fx7R",
  "key19": "2uCePy2XR27YPHGjuvBXGZH5BUGPoty8fjFf4f82fMUCBxUTnkvbEUueJNW72WKUFiRzPTbmQ39ihqvrNB4reTmU",
  "key20": "VMLbWU8BaH9REeVSravk8xJJokVFEYj6NfhBnpshVskur3xkXDEvnLYjqzR696URdbveyawo3mxoL1pZAb88k5Q",
  "key21": "5szXyWRzQj6cp6u55UyQJyftQtSxdnwc8KQLgNAzEw3vj5wocXcJomL88Mn8YqQgAQ8jVLhpGYpcvqgnMvPZheis",
  "key22": "4zH7K7KotsGrvuLKFssbkAo2YT7oyPbfWCBganksRDYe1QvgtzjcKn9C3nsuRhJVfszBBPsonHe7ErcrVRy7qU4J",
  "key23": "E4M5QCAEUiVrbFQf1NPavdDDu3gGB7ZzW6g7sNy7XvSWysJBtcdTbQorQ7YTR2fS6kS3W3j6kJqYtWEdUQYzq1e",
  "key24": "2PeokSyMvwngdva4yqvcXSL3k4PNYHcQEya9xkTrhtdcHpUQnqLHcrQp5WWfzRcmBmMEm9CHNVqZs8Vv93HF5crM",
  "key25": "3rrQfe8z5D2M5FWYNeTvRkpBA4VsgddJnCSwApES3XsFM1TT2ty9HMnobdSLZ9hmsjhiXKrRog6rrgBzVWQMvR5k",
  "key26": "54FcYndfCfyRBMwAaKmz11585dw95M74A8Gy7eVeGkRxwuhdCZvub82G9UovSvLNU42Y2MsF1PSddvNAgjnxD9Uq",
  "key27": "4cKxYD3kKadVjWu6C6HG8bAYq5EzsTGutoUdvjHYqXDJKsYh23ZiH1RE6bKy4sCQ7pNZJpyjmwdQUxEQt8nXgwku",
  "key28": "qN9cWjf9Ne4rBBDsxfDo63ZXdWLvZds5TXKvXH5ZhEyUAs7QXEZizm81KrwEdt4JC6nLX9TebbsVUce9GAif7QL",
  "key29": "2JUHVpgyPt6JpMRqTjGjxUQhNuGQKU1Gk2r37fHLzriEy5fNGn1fZmRx8NBq7urP33JK7g9hMA3wHvBihn2L7vtD",
  "key30": "24PFKR4z1EJsiUZMFnLPbvx28VDSoDg91Qrv9YANfrbP7ENEiC7zmNAukkZFXaZM1x75MaRMHr2HeJ4k7iRcfBQE",
  "key31": "45eX89sHMzd4XTX2UspVJ8cu6NgMJ1oWG7GFyyHt9AVzsbYhKwnFuBwRMMUFGvuJU4zbN2DDnhfXZRQAuRmqrcuz",
  "key32": "2okHuMzbQHeQdwLconi65u6AHB4fj61V3i1gjmSHFAJuzFNtx6bge8CzhWavAyd8AgUncHcQZ9mUMFYkCuaZwNDY",
  "key33": "ExSk1X3kgvb9mvQ17gp6mdfbZTVNTM1GdQNHktqJFemfq8uVc2dHWj6CMCS9HYf7Bixhe9pz977fLaDuJ92B9xG",
  "key34": "2FFHHrgGQufDGJ7CGxR4Lzvq37H6UzTKNNvwMFXVPsJKkXReoi6dGfFuJdtFiaHh8q4wTWNK452EMtThVMf2S2sU",
  "key35": "2RgKNp2caBh9sZW6PZjtSY7YB5JURp3j2c7F5GbrW1oeZfD4d4Fm8HAFZpJFs5YEcaTg8yTvPmaAHeZT3t4gpNL8",
  "key36": "hxggeGLyYmrqDQWTpHStXobFMgky3sfgQYU6LQtkAsgRETow8oiNjXXDzsSFrF2TA5KxBpUDinUbstTG4XEzs42",
  "key37": "2MBNB6qJGUWNZh2TK33xnXGY2WLiuXR3kagRfWpumqa1rTL4qqiTfMcy6a23ZDjGvEZgXw7exWGa7AD3vHGcMKXJ",
  "key38": "3Jdk3ZsfyjWCZssW842GwBrcPS6KLzjNdudVVhCuPnWLZmbC5ih3ys8EBfEpGxvkX8KRaLTZVNLm4kx6VVxJAtZy",
  "key39": "2y2ywJhTNs2n7upXpXUGWHA6g5jjLdKpf3ixSX7XYsQoGmdUuzWMRN256sF6s1eGbW2zAycopTnikPdCz2JymxK9"
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

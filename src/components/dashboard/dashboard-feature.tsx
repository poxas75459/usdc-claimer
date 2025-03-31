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
    "3LrzQgzSLCGpUJn38twkJkeY1GQjsS3aVoivCcJ8L6KuXWSR3mhZgngu6DdGUvQoXUdqDhZagGVcLpUQKJa6bhon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23fJeTMLpvZrZVPvUx1UvnsU2LiBQuETq3suJyNx8qgo8n1uJkeQBTFr8JqzGxrhjGEbZriJTuHr3qsmTS7XTzTC",
  "key1": "5dqxkstMkJ3Bu9neDn3quXp8yVacS1buhsDoPYGSUkcR2XDADN4oKWXoYKyzPJAyi2v9evowGg5UY79HwCcoqJp2",
  "key2": "26inpDNiTzmdP6TLcxCGw2C7EYo8quRkVn8Pr2JvHwQn7B7CiPCgKsqXU7QJsC8iamKkEXvpBd3s9makGJYFifdJ",
  "key3": "67FHd6MDsrSu4rRKuH8njMPW7LoKN69ifQPv3etXZjBHYqVikXgU4QtL3BxFNqndHiQ6kQsv73krznvC8Kn8VBPF",
  "key4": "2KKVniAuVxoL2cDgBf5VAESjBiZ4ojxTnjMEzhzKB4qWC3zT84KnuBPh4g916PvKqzqNfaeeRNxLMVS9BTEiECR4",
  "key5": "jdYpMVJid3HUMsU1x3M5LLy2f1cvjU5d1Bs27mDUqbRFZPhFLfMx3xFdDjiy8nRCrZrtHYrkrTxPFCNSgyLEWPA",
  "key6": "2aFqKc1shaHAGA2XgU9YR5X984ZCqjAMkxGsgunWL7ckaGXwZM7KZEi4xrcXYSLPYXB3TSJTKQaFxVY5BEuBxbk",
  "key7": "38BzHtMKMVEAYyhD7oh5M3jWJ91iq8d2d3rWjoKD6wxXrzn6VvkXi7jk3SvU6Gus8qiExNR45qkx3eUYcEXGnn1P",
  "key8": "mjWCWihGYaoeejj9BH7Nnzv8kUyxRk69VA59D2rxYLNWMUrjVFL1Kqb1rfApD3RA99Wjq3a3FEhrGhw94HeJr5r",
  "key9": "2723Yueb1zrV7ssnY3cix9gcBFHUxxUsaZP4Ucgm5a5NYxiW12W5JjhHnpASbb93yik5Lqfcibcz44giNTXz5REi",
  "key10": "9srtzCnCpzh7DYrLdxsaDBK1EeBbTMZSGGZ1mm8Dy3bDWxKa4MHfgXVvVbCDT2dWYbwSNGMLoqs1jav3BKuLw3S",
  "key11": "4GioiZL1TZeZf2ddodVWV9UknFAewFa9qTKrmgx6GaD9HXX2rmvurGfp85csoCbhCa1H3CLYGJywnSMQUMvAUt3s",
  "key12": "4bwKiuskwQX4twMfgpWjNd37CkBeoMQESfVmdRabMrSamyUFxxiuj5fcn8p4xP4eJ6qe9w7UBB7J1kD7FTLgd3EP",
  "key13": "5dmy7yjY5q84BiRdETJvnzLB6bo9DhmSb4snHeqBGzDeuDHYzEpdZKByw5W9gSeJEEZstGyaVUWzn8FK6571yd7Y",
  "key14": "ktGh1oNykBLhiREWAsqZbdBvbetcuKVy8QFJu5397MnFebcUC7a7DGFtsoYkjYaXJkZbJmB9C22XAhTo4YTcf2u",
  "key15": "SreWY37d7J1eaH2XfTt5Hdo1dxRDHaGQQbVgbHozU18pthvjG1YY24J11UPwk41z1xYrTZSHwivhXZYMs5XFJBF",
  "key16": "5DQAYdioPpkJ1DxMdcwCLdd5WyqwusdpfLnhpDffEpqUX5GVNRNHZzguiANy9Z74CrD2yn3fgDYFprCvknp7M2Da",
  "key17": "2NJNs3xgxZMp7jtuGN6dZk9NXGfjEu84m2H1tundodrPpTshSFgSoUYbiN61wnyaGEMZW4uZ1uaBJfrHXFbRBjQp",
  "key18": "42CpkdgDNomiMPQmn8K9kYZNkhyeMez2WKnqsVJ1LHazLhi3P4NSP77f8KV2wWuxbX6Z1PEx3kZgwnu88e4gwCpQ",
  "key19": "2Qgbb15Woe1qZV9CXN1sXoaCA9yXv76Jad5hksw2J5goWg74vEHL5F7jWBjzogHqGwQS6Lc2pvLnMneyS4dCWRte",
  "key20": "4qCcsm7YkWMLXwSrWitZq216aGVyUjYsSigGZCLSaZPYVbCz3ZhQ5DwzFPN8B6eH8q9tVr54Lf2JWjcwjqqeYdLn",
  "key21": "6624Zf36SJA8qEuXwuMBjCrUozfaUNL9xpPTyt1SXkvjQJJLSttgFKFXaQGNtknTJoB6UUv7kGy8qkkCcrbwTb97",
  "key22": "22GcZHHteDDK6LPEkAphW68US9tTpuP7csaER72pKeTF63sSfzVKnGpHf2EcjdTDGhhnp5miAXwWyV3aRWvc9A6Q",
  "key23": "WfXyeQNbZq2527kmQpCWV41cqUeNe3qmVupnR7G93KscUcyYcjEFuu8bjhdDxtd9pQs8rHLLqHbtNh25MjrrXgy",
  "key24": "5py9ozDcmpXEbHQ1KSWDFA3CPkE2Ye89U41ZoaiSRsyNuPEbJ1W4RsRbEw3KGHDHQB1QU5EHuJH5p89UTAout7VK",
  "key25": "2ayvQ4H8ypM3ysJdgz65uCJTkAQb3Jg3vfFmbqG1cDSZYdadfYXhc9nYa7yFWmSdT3K2J9tQHqQCsMHbVFYJm9UD",
  "key26": "3Jh23S9C62nbSzLJSRJpbbCxKkfvS9PTXVbex4fd419jbkFKkGdV8cmMDvCkjD142rSFtrywfVWMX9huX8vpdt6e",
  "key27": "5L1NPuWKEGQbaD3cShJ3oXmZ9hWX77mH1Lo9foSgWc8LLkhLDVWPv2g7D2eYoampeTBQu18wkJ22Z4a818iEGgz9",
  "key28": "5PMv3ScsGMudL4HaLXnAgHRHQgh6shUspbruybk22T2219o39fqt8oJMpEKeaXmBFu3EivPpq6nmYtBXrMZy18cs",
  "key29": "5BQ8RT6KtFvdxWHbzKgewZqbZjuxAUr1QK3RP7bX8n95PnLzhssKp8ZRDxL59LJyWigvjU7L2bZDYTHy6Wc3GoVi",
  "key30": "4BrQpq7pSn9Ra63ptJShNYJ1gQKutxAesLKUvcNMgEJi5ixCgNpB51bAr2P4U6vqTidfEMHHcK54auPyHS1zS6mr",
  "key31": "23ZvAHNQzmXQ18swbkujGs5FEKLWzy8Tn737kCAtFC1DhxgjECMuBPYuRPkg6qSBoFyVYAc76nYb6Gpw4ztC8XLZ",
  "key32": "5eBsCuqYDS7bk11r7iSbjWhUY82fHrtwQpNUPrAkBgHahMAQCBEZcDSxVv3nfWc5p6gxek9BpU2y8kWrUizQ4qd5"
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

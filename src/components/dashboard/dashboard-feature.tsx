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
    "WURhmqkCiD5XYhiuRxmijvTYUoTSYjBHz6qeaYjTLxRYxyURmiFGGyRjQ2wxgABzrst2puAa14vhAFZkUbYd38U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FjvuC1sxK2G7NYZV9p5vZFnitKRrXWkoJg7AAJqw1EeZXpDCm55ot1rAT2CwE6XMm4sAvV7ozV5pyEnuBfNMzg",
  "key1": "2bKQvsoYcg7nPxhHc93Gg1kzjbCoWwVB11RqD581PysBDfbppZCoqLyV9woZPtZed1WXFMst9DPQmgyH8F9KJWbw",
  "key2": "4vRJdtTMgDSs2rjhakywEHmCvG6eGXXN2tTDEx5NaPFkhJGyRSqWweS4Hy1Vzq8xgEBHDV3ueFuvT6jUL64w6xyS",
  "key3": "5xgdu6hNHNaqVDwuG8WXYzaUebQv7s7PwaWE3UC7S7p3fthNNt5Yq4SMwr1TwUebvQVfZuKeEuCpyuFNFGUVZupF",
  "key4": "32EWmmBGYut36SoLFoKGDTvgvuyJyPDFSoDYNWVmuBDxTLZRXnmfqARGJpmFPPtkQoyCDAjK2DoBVrHFTFjAo9WX",
  "key5": "fEQycWaQoPi45ai8ncQ5c21WkWqrmj5htDgHVFZ58oCJYQ4rniQmiEGP3HXuqLygJWXdrkMiizSDBnrAPDnpUEA",
  "key6": "5PMPmKeM8rZBKFEHBHkorwA2BkwofUaB4QZapF9qfxUCQuSaMiwcax77ccY4KhmVeCatCaxsz37sNeffvXDUqJp8",
  "key7": "aaM3jk9Qn91qFF6x9ZS6CVihce8UCngdw4U53q7oLQRfSwmcfKWBmgvEyeMDWyuxALwEzDruZgZQyH9GQRMNrY9",
  "key8": "3Zknw7ty7VuDvjWCz4pMsa4bkjBAY91YgmowA6X1rSCv2HLWRJ96ZUpzKEwMJBNTKgzp4GJx2Xz1fPWcBuBuQNVh",
  "key9": "4EUY16r85pgxXGnU7N78rCQgb5bijdwTmdpYeZhi5vbeGAn7gTYKVhgiapBnNuqj8yu3SnXNF7SDnix78VjfnKAC",
  "key10": "3WgeEg4qdafJ6epMLbUrbaLdRipK6K5qGvfFQG1F3bwHarYxF9iAvuUMXbgYDkMLGh76H1QNgKzZrcQjFE4MGtdz",
  "key11": "jmsnM4GXFVmYBTdAYjzZ6g9rPXJvbdioZErgGhTd94hLRajHC157116HuPF3MtUx5xTysGxToGuHJMDdjCk4VMP",
  "key12": "VmBDNabfQGxAKomx5SCySigieWoKtU3W9bGRHS8r2QHiBGePhDNZhugwPAeYciUMQKDcMmGgSDhkExnWwrnx7S1",
  "key13": "35bJCSCV4FZt9hsTBJk9N34137XeM5AjWGb1zeqC6wcphY45MyUexYSsR5jUPoSfznU4JQCtRZUcggDz2PCjJgBv",
  "key14": "4kavtyCqVqB4DapxrsusVxtj9BJQLDbAfqGAbsnUP9NcxJaxmpVzJKrBLMfLsChmG5jT2uHT8Du4aqzjUzWuxHVy",
  "key15": "3K7FQ4VqXLr6t8wDTZ8LG925ijyBxfrqWHo3f53Ffdb3a3ebMTsPZ7VDXfwjeR2KJMAtRzeRwzPELx2qzgJvsAv8",
  "key16": "5Xadd38oZHqYz7xL7S8YmNYemnS1ke5WBH2wPX9KiFh8KosfW9LKTSDk5FWWBNiMijeZhWX5Zm1bc3r2PG4E2g46",
  "key17": "5gvhJ5n5K8qSqxdy7Nh2PekfGsLHtJMVqjXGSrMVEU9dTunzcKPm3wN1sYAuobnMmzTvqWbwgcvhNKwTzP4ErJgq",
  "key18": "3XKSkr7ahZZuXMsXhCNLkdY58Shg5DrEcxo6GERwJLg3WdZXLDzHTZicPcnRY26YM9GYjwucYReSo46hgNS5St2t",
  "key19": "4syM4WbKrpHNuhmaJwmrZrmcgurQoN6U1T1XuqcKEJ9eWQdHdZ1iKKN9xn9kQfihV4ChQkmMDQjzqngnhvQ3nLWF",
  "key20": "21SHFeZsx4sNzhG9J6Dbtsp14AyF3ivsoNVbkcTVK4DvFYTf9jpdmkRGp3WipSfP4ZiCaBJQCKVAqHLeCf999gzB",
  "key21": "3NmVCJbjWZXdGL5BdicajknkLntwmpVDVoqaRhi1ifPsQkb4zKTB2NsqhzSr3YYtugnGQqkWFjoeGc8nSg6Eqrs9",
  "key22": "3jUUo6GXFTZ7KqCzGJwjNuAF9BbBLY4EKEUmfZbtvxQpwL2tfy7tdSrztiSMCGBBoG6rFzt7ZZWqDgHTCfLgfXiV",
  "key23": "4a6ee3v7ZWaXXF8Eo8H8G7bksLoc7avJCA89ByEHrPBYhiknZ5bipePJM9UVTjcgYshKreewHsmUHyjC1LAKbiTN",
  "key24": "5K8JQW7m8SSpgQqj6roB5TEPP8QYLfEjZsNK8tT9pXFK3yS3T6bgZugdCHj2ts5ZTyjqyETBaAKzo4S8HFj2kbKh",
  "key25": "3kf17B4PMTKDdAH7z6BNSY9s5YKncgNdtf2kuhzu8disvmGDLkB2o1iVJRFohoDqbrvpUbr5dejjCQPVJ6cKy3Fc",
  "key26": "kgZ1Q1VsfnwessWiSCp4ymJUPapphj2g4K2MXbJgRvG2z3b4bQ9rr3LwgwXe9BdsdqByWuptrxVwPTeAgb13YsM",
  "key27": "4jhVxkJRjkq8FwaNwCTjrUY7L1vjM1bjTnByovpjZX8vYR9XUPBxArwJJqbtESbg6D9ZKYBV4whRBRdSfy27UMpP",
  "key28": "4kvp4gP5bjWqLiJH9JPZPKyTK1HppAUuku8pzBqeHXkQxXRHySioikQfuaY9ZzBCppxjTzuBKusbP3hKG9QgvpdY",
  "key29": "KXnX4V9ozHUawmvAYD7eWZE5ajGFQEBWAooCEiyUrfwAq2ZFakaaFL1cpgjVaU8Ha59HwyTgWurAoKwsNb7yfEB",
  "key30": "1iYGozbEJptCiuchroxGMm2zLd5mcQEtx5dkXDp6WuKE2NScEJrmjXaP84SmCpNYgHBf2h2txoHFdvr33iWmXn8",
  "key31": "3QgiT3ToVDL2iM4QqPdvig9Ytr4zXExtVjEyfXA19X7iGKTEWsHcaKQdgTmH8pjyAUMgcj94QfPtnNEncS1JAiLU",
  "key32": "G6utSGsXq8QShkVETu1AGUK4tokx6UXzTfHoqn7vxVPkcozQK4fqQDn5Q9LqPcs9ehgn8phH8ycxVjtsK86uUGt",
  "key33": "5gWBwWMGMyWxhoxzGeqXn11pbMUyQ3xxhyXeZGMyxHX7sy9KxPJNA67i48MDYTum1Swp4fWPsrZzFHy5Eo2kfaTH",
  "key34": "2z5cWtPzCf7cFCAjV3448U6whX7FkrKo6eLh6c6KxHMQy3313epkztaaj6jNY6x5W1DK9meaywxK9tanvqvPoPQc",
  "key35": "VYwhBmRVdqz3V6YVBiTv2ijZjsJtdxtwfW4yxUhzXKiBMNDaHpwfPFJpceoySQhegJ2tzJZ4UJ2nBWXTpjYhUgR",
  "key36": "ZMnoPrMDvYPQRMEUFFBTA5uQy8g4HrWFYth8RXqiqyKcNmYvUtKgEtNok3sV2JYoWdJraSNX4fXn2cFL82KYgWd",
  "key37": "3nFhJ7hKRee4t7Sr4Z4S2hLwLmHBQtxJeFDJprgPsPTqaMX3BX6TXLwmGwPxPweTbiMr3EuDjELSfvZPAtyRQsbh",
  "key38": "3yk7zfS9exoTvZyXbpDkE5PEErvxZzT9gNAxovgQS3bepxa3ygvvuELhcMy75qHDmMz3STJ7CYtt5iywgN9aiuv4",
  "key39": "4PBQKH798NUnXgmAG68vnH7Xmn5VUi5zW9rwELsT5RP9bg3Tkh43KcVNJ8N4B3BATo2i8jsmqnmQCQr3xGYXanD",
  "key40": "ZBgfNYaiF6To4cBvrrguxGThvt9u1CPtcwZWNVgfS7kCC1m6tZx6tC6JWqLRoyCTV8JnCukx3E6r1he24DYbBJq",
  "key41": "2H69FDduPkMKhCgHtEW49o3ysfjPtHB1zB9krMEpUBY4KsMEm9UkW6pNyDeDTmk9zvp2ri9ZT63bkUL51mXGpZZn"
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

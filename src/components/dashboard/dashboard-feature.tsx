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
    "2vDiYYLBXs71baFNSLfQWGEZzB7oXtqdsuDjr7hJqR6vdH7qeijcWGHpx1dgATQhA8VK3AZGi5ozYZ6xhnpkAgqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pSAYbjuzQ57xgGiHzutsX4889aoGTNzFcdiLmvokiH8ymWMgD5tc7bLdDSTaUCj67Ype74Az9mPRuL8Yd5z9C13",
  "key1": "2iELvV7WEscXJnZfJguVEwnyyv4d3qV4A2LJsWFGeDd35nPb5731Yfn9DLy5Cq9v6M5tSjY4YuYTQjy4yeaZSeak",
  "key2": "4EBzt4Z4oXouDgw8ChCqfRzM9hUsfhGg4GD5NQJMqzSk5Q4X85WdZiee8dbLbUymX2KWGV3PVBUy72Yp2KLFyz6P",
  "key3": "2Dt1443McPzNiJrUtHRoqzAoPNCjQW3pcVkZLhfLbEgpBYEZt19fSixfPFpzbf7eTwMsRKmJsMHLcNmCAhwrU4h7",
  "key4": "3CdGBiGnmwX9kNq1UryNkXkSRLHXqqbBtFQz3vnnHZsno4uJ1Mrt79tm33w7THW3cAyXKcPb3zygGFTgX5M2iri2",
  "key5": "4EW3bgcfZeivs727BXcZb4V2VCFXcS57vUbjcvZedMchEr3y1h8UZ67nryeYSupryJuKNYSYRSdJwQ7TNVda1E9S",
  "key6": "29n9t3h15L5q3pRg8knwQsaZybHmCoZxfb5YpXUwmrxfqeyAwHGmq5kr2UWbmVHVGBfyCKKAm8u7jzGCj7Z9teCV",
  "key7": "2L9eoHwyfmfCFpsiabQ1uHpPaoK6txSaR1ZpQ9LHAXFtmKiy7cejnijtwJRztUPk5JA6fgLYor89RA5YpAFjXa21",
  "key8": "4BLVkFaLCvuvcszpRjoso4GeHEuRGFjbaRbW3ScG3atsuhUMvswQfRi2fKYj2U4BTJYtEwKnQGtdaA9Zgx7yTW1",
  "key9": "4hQeDUkX1gydLCSmhHYojSqSJKNz7CbTSouzEQEABc94B71w8UeocfRUjmAi46kisAduQVSu3PegqNbFs4QgrXg7",
  "key10": "24FVMX2xtz83mSUKZgjwBatZBibXSA1iL55Gsfbq47KA8wGhBw8YM43ZGuw4AYcFK76h9Uue1HN5EtJ7hAxDX766",
  "key11": "67oHVoFrH1yKQgJR4DZ6N4C5yEL6VjsqyNdyx6xMs2Rec4XkzMDbXrfgSynvPdBe2XF7D5vgBDHEpmJouxQ8AY1n",
  "key12": "2STRvLTohf1jtGM6RBMUhvCi4CypV8GYaCBGvBy7pYfbukByYWryE4rbdEQiu9CPAXfMUELh829XoFwCZmCtGGpL",
  "key13": "V6RGYCYLMPdCn9aKnuWkrNo5idjLAyCgc8AZXKkW5bfUpTudyCSpmgygBAd9QGjDg92BLmfRS7qCZbfhRGsJ7mF",
  "key14": "24oFLNposzGUvj9SV821PDJZqW69vAR3oxgTgMvYefX5LDHn8msVmUXmZHWrcCyA7hTDYCqQWgYpiGqv77qPfSjY",
  "key15": "WwiJaXgPznLui4tj7UqzLTa28jNxthuZLZsQwpzrutVuzFURmHD9yprAdgUnrQCX9QBKwe6XT5Ec77zTRqetZaQ",
  "key16": "2ziNprMvs7K7PH6hUv3MQn822MxmUgRu9yAnreu1iBEkmJtKcMpfzqdRRmJWDrrCRSEjXtUKCwq5bbnpHZBxjR3d",
  "key17": "3TGT4y27G1vK8BUHyW2A7UnMP7RD8JRssLjndyCfF3qBwQhUvmoLZMRQgKmKr3GvxcnaJMZJWuLixVx8ZNcC516u",
  "key18": "2tcCoWSRxUyTmNq325VsmwocHBLRC595S5nuvSGN7RQLKpXeVcr3FA2hnTvjvXunvJPtAt2R1wicCeP6KrqtDyvK",
  "key19": "5YyUshEvxZEnTkPb7zLvNgcDeyPz3eei9fkf5uAmdkgipB5ujNDdycZUGjiXKaVC35Lp6nGcuqNFyVkSxEt28pj3",
  "key20": "3rSn8XnsEsUhtHuYPLohcyd5ncYYynZzPBBjPjgFxZ87wq1eUTYNL46zFSRpwu1BFZEyVhF6Asi2CDraANv84FiP",
  "key21": "5FNj4SA4kMaupep9rN5hHeuY6a5TEpsNSQKMnFEvsAi2pUvsHaKfgN1zxxdtTz94M7FWDs9MKJUv22hpxXbdbQ62",
  "key22": "43AjgEKdJ7CaJmGDiMYifBdMzEhDCPMWR2Lm2ZDrUWRptZmU5ZeYfHKygCPC48FVvaaqJ45UaMw24y4HZfsdBuJE",
  "key23": "5PxVtmyrCnqjpfKRZi3fLRTSF2E3ZykFfLfwqTaGNMi3pGmH8HUqoZ8y8WEXPbiyuDsxDJcjzQ8n3q4QA5a2LUV6",
  "key24": "zdXoSSLvbHcgJERSpngo4msc8myPYemwsGV2uQP8TqVzNkeKbtHaJTf334xJCYe2UiwfzGYXwzTkaVv7Wgj2VLM",
  "key25": "4VQZf35GxuPCCv8wX6WtaPo9Hsm5k7YRR79HrzNtsouPgPmMnGCFNPRZj75RBSZK95wo1eWv12XDzYTaaUS3iQqt",
  "key26": "4riJuzN1dfK79KsdCZzJHgBy9zJWjw4Vey8YTFjGY1F8LszguMchZukLYK21uAaqVriSeamNUZNTQgJKm4fUwoSF",
  "key27": "2Yip7JGf11E5FuddmW3cJBbEEahuZbUWtfyYfVgxyEzQ8Un372vxdntpSAiPZSmNy3fqRyhq2Sfp7ae23DibsrDm",
  "key28": "328BbqpwPPPTAuCL1iLKf1mcnL4VeS94YdFra9rjTgCAJthnKVhDRPvQjvH4QRYH8qNNTKCgyoJEBK9dNCxLP5ss",
  "key29": "5wjWg7gxHWZgTy3FgfaQyc15dWobKw1y4tDA13MpPprMmgfR9fwqt59jsnSg7XesyV6hkrZXXmS6ApRivdL7yQ2",
  "key30": "4odtmgsTB1et4pzTKMHz4VLhDL3r2doQ4NE3aQMcRXnWGvv5pyDZzzKV86ZMwPcDwiekkMSFPXyAFkzQr8gmK3Sk",
  "key31": "76E86MLw3ZskbdpgUQPAcamBQPbQweYHhwXNqEhfjwsTdSng4Lv62YADS2nwPZs63Dx2RqvVZodWzeTX4gj8XDP",
  "key32": "2bWdFaqoAMVV6aRMq1Bzxy7k5HVzZ9kgMysjrKi1C6qxZ5zvKKonjgMk4riSvdzZnahLjfSJAnwhA8KYDKTwzEdM",
  "key33": "2F4PfPfHoUpdq4kBZLX92h5cnegCtmQxmXPrejVUUXnyqrdot3uR7VHGAdh8yBnWE5YF51hBAhHQ3Kp3a6hmKgCD",
  "key34": "3piepH3YgNUmpwAw69MCpNCiBrJFDtQa5WCkx8bdfXLEUWB8eKqdCLuiB5EjgvHz2j4emHWE3yimmhPQtGhTaFFd",
  "key35": "4oZcpfBxkvgTzChxGhcDkzaNyUFtjCxLJ3Tah7BczwPnwyF3rHg6J21RiQ16d77yk7tmyh8PoY4M1tAAezNHHy2E",
  "key36": "5y6sfe1XVJrUyM429RsPCZijG4XxqSXaXUwetuYkSLpSQsZi7kwjFuFw9FXBNaAiPwihUWHLYkrSxh9RGsg71vSt",
  "key37": "3gmVdZRw5Sh3bjqtmZ5oSJup3qerWsK4RXiWBup7WePM8oqRKnzzgXAt2g5jEeXM5VPuXsXcEMRcbYLMehzqp19s",
  "key38": "5QkW2cVHRMrWFNRjNt9WAhNbZLKsDAxfR9F8gQgwgGgyVRKNf1riCDNXb5K25eFhyAumcVk7eQkMYartGQGXdbBd",
  "key39": "4kf9Qe8UHjaKc2eJ6bTYyTjJaFVwk6sAfm3V1LZx7g3Kwb7JrxqNgYYbborbFxFDkt5XZaDjPJaRAe3fNJYdxL2",
  "key40": "62Xa15KqhLdoFwgzqk3BjUgNqHz47Y6F75yVQMzBuKbh9TG9ET1ZZ5qDvS1L6eUCLaR794YEogCSYDdPewpN7LAx",
  "key41": "3PyKy3yQ7Fn39zjrFMKvidjCczPLoqpU23X7gEsRgK2KiQDNoCvd7LbuKuhEqYzoTGDihxLGsbAsKGYR43E3sonu",
  "key42": "54YW2yvPbmFbkE4T3yNBLz9ZJkkY9w3TAX79f72zcNeecEanrTwUtD38QoJWUNNH6BygDuptwLi1DPhCoxjkuTqb",
  "key43": "TuvBh6NmrYBvgPpu4q7MFDAYY9c42KpUhPvBN7FFySKZgiMt1G2ns75XHNB9tdSYfoHWx2QdGASpoFFsB2fkvCP",
  "key44": "AaJdJDcru86BcNNF2QL1fgd8whBesr5tgcw7i8mS3Y11snCg3Dt8gEVpzZES7p1fryzby1mKScnx1fUdsoJ8dr9",
  "key45": "2FKNaHkJ3rksooqQY5o38FXURDbsoBxG7oEMG6eWuirkVmwGNatppd3NXq7gbhfFvHQYct6a56kSjLnpsQkDxUq5"
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

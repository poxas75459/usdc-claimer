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
    "4tEpDSGtEpX1U56tZq2JYuWANbkASbLfx9wgmk7qUaRx197gXUi1Zmi5rpJYWmrxB3VPNRBuRmeRPa89da6vHoN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m6RdPDjAHZQePmjyaejHYZE4kP7rMsB7gmQyqcvRB1yfYeGxfcjNwvMZdqMA3Kehup6aimYCjjrvDdvjtQwbFUz",
  "key1": "46SiqVqGC9emhUpcroXMgBwEiFUPvrWnfLQAEBeZBKbV8kaTkw14Rxax5NECPaT8s9qM2ieABky4gKCBCbdjpeTu",
  "key2": "2BKp2YCAHaFp24URmncwN8CPTMMTEDuPYCKLNH8jkWJKQJgopPwM9owqs2g7TxDnkAL6469wgd6teWJKFbnBDyeR",
  "key3": "53opgoya9HvQtHJQn7aXkHZzsa1CCScQc6yXrc5rRBQsoD9d2tMjEDZ9gLLR95KDFE9ft3jPRKFeDGh5MejDDbeL",
  "key4": "3m74U99oCnEoJieQaqTjQBmaa8x8k1tiM5HjvH5ek5XipocRnLKhpNyjkVQXFNZXVHJjoDNpP2AAxKrs6QFVXGeB",
  "key5": "5mvNsuA6ndcpjS97tMpU6UZQEZ32JRrPMb4HAdt1ZPCkd8pUVkkZAwCD3xqZujajUGisKbXpfh1f9oaPVWURS8uT",
  "key6": "2ncrEWmkiimuaF5nk5AtJKBvgtCJMqFzSzRCYzSgJkgYen2kunBPR4kqpnWroJ5qCCCX6L7NPdJi3UAwupo4UEd7",
  "key7": "LGe8xrrZ2WMDXDkd7xgNAR3WH4oEXXMV3joGcLDnxSNvb8yrUri7ajSupfmTEXCqNced742oZLW7X7avqcLfKb5",
  "key8": "3txEo7rzx2LpeUsMjyvt61MeHaZFmgtJwnkfGmj89S2G6TMTYMV8Hd8ADmhTkzmJ2uQZKnbJSgFS68pyoVwW9R2T",
  "key9": "wj6s5APF8SgFofKrnhQpvMC5P161Aa2JR9JaGXFsAbPstujQDZSLW57ueyBaFb1xuq6SrhM38eArRJmBPtGnsc3",
  "key10": "zu7oGfyB6SPzt7zWeHZqtTMS9RcTCE3S1Rgw5mVnJXi5QJNsAbkNoaECW2YfzfzLrCSXHc7Wpmpe7CCtvuqzvqP",
  "key11": "DGaG9uE8NyBeTwWfPDwXGejLYU56FC5y3m7ZyTywsiTDgBRc9KKcC1SaChxNyhGW1vFCqQvqrnZa6Z6osRgbfEg",
  "key12": "2gHx3fg2LFWbjCxH2HtoGMitSLLuJGYf1WEiCZK1MssrAsME67ibzZGFqpctjTAcXSpP8uTWfCgNJaLw4b1crgPR",
  "key13": "62dj5GqtP2CaxjwN44rkHffhzQrSQTqSCQuLYQKDWfgD5dg2eqWt5T29uwho42PSEzxtEXcGL7rThKL89ueFc1ML",
  "key14": "3C7UqozDgjnRuf1kW8g269P6gZd4K3bU74VCBUvbx258hfRJFXaXmrTbKwT8TE7Qi3R2ezgqpkfDN522FkT44Dg7",
  "key15": "5bwybEybBZB5x6wb9UHyz7Ps2dukEshvto38qKKBs37NndpuLMfSKxnCueofwXVS99bxY6B3Gm7qMN8oHwmPGL6",
  "key16": "31f5X4ppqZnMbg43GFCPgSZdNwNvhF2C9wTyqyrBhmdCteRYK393yBGtfsu2kGf8iy6c8UpT6KwmLRpbxeHUrQXg",
  "key17": "4pC8veJiccv1sU2zHKtkNko3tPtUC5tkc79AigfhtSR62H3NuTcRvi54R6s6vqssMsHETz4qZ6oHkze3rDV7Bj8X",
  "key18": "3yPqAAvyLJid1GqZh4pWeyihK62HKi7r5oYb4G25s15ZhPWi1t8KLxFmxp9hWu4yf9DMkEPhNfdpXnxef5mftuuJ",
  "key19": "3BSj9QN8TDjhML49Bg5cggJLbWNWeYA9C8YQxbmPT3jhuZTkDv5g5Ed3LpbWKKqvfjSQKyNTZe4reZPETAasmNGK",
  "key20": "2sZVzpEHyRoEXCXkyQa5Kxj24RvChuNJ7ztsKDQ5rbpcM2WYLYe9UoTKze3cF98fCNiZsZq6GAHrsSBrhEsx8LS9",
  "key21": "3sHPGBYAJXryW1JdB6p4AAQJFKrRvMPJqnE5Q9RCtts5Ew2RRFM3hjR1ZhTbfw3jgGH9XYvNe3AhDEhzFkHd8HqD",
  "key22": "EzDXbdZDwuHDTwATWbarzHiUMSbQDUNWaB2J5y9AcnqmcLwPhbSYyVRHiAL8NomCiiaR4JtuDKd2m69Ftqc3Et1",
  "key23": "4DrKHTLjvtC1DDUUiNv7Pmr6djntobwAyUqZik3QCBHPyADip6uw92z3hrnhAKdaEKmUWQbqDjXSmiADNmH2zAuo",
  "key24": "4qmuvLUz6jQQLhiQuzYVmSyXtNuAwHRMni33UgtRQwHi25AW8p3YeMxuS5Xf7e31t38zEKVxPr84QzkfN9to1Vw8",
  "key25": "25Byv3e1CKGW5Xj1kY1kPR6ZstP3vnnw5ZsNYyUTGH5gWgPxgut18pSc1kPnqgqUvYWiiwtjUD5aH7ki4J4BdtXG",
  "key26": "3936KLxkebUNfiDz7hawG8aExQ6eawVPPYvq1fKGMPc5viDCGJUtPehgkN64zJzf6XbBWc9Q2GaC3TuxMBJ5bNHC",
  "key27": "5xxTPy1eEtNBtWj2cPqiWeTCwpW2csmyjq9A1FbL97mb6hJDw6K8SM4M5vdpcwRJAnBrRCB663rFuev3rs625GLP",
  "key28": "5eaM4Dib9rAbsvpBjfjD21uY11xsHTLajBn3YEVurQgDszXhFnfry7Fp4dKmGzENUdBjtDg4ofr7ZdZnrqTxXXA",
  "key29": "2pYFWViC5gqJpbMfWGjfLhW5Q5tTbdE8CqW3NAdrf1Em7ZAu6jsXcAoZsTAEiXRpLkLhAZoNTy5rFMq1RNq5pdBo",
  "key30": "4U18grxFf1wKGBBfBopRGybokrBSDVyAtH9QWwEKXzp9VxSxXRLKkzeG5RoEurqveYXWi9cTb1BhDcNovf5pjXgu",
  "key31": "GgtJmRrFS7ed7HADD3aanyMdf7uWNML27gXwHVbxwVmiC5iL8kCSwAMKgqN4gWsXwTJRA1jNaVK9itdBHSRW17A",
  "key32": "4Eg7xWrGJY9zHSrW1XDdNBfedRZwMa9KUb5AC7yJe4wBcYUYSW8sP4eyZAff2xJ6nJCP4GCdnr2vYddAiLiyKF1J",
  "key33": "5AePDQ4FNBqPkfvKLKah4bM1i6HZ7yfyNSvy4jfDAkSnbQBTsC7BfgDmvJh97a3yNmur5FH83JKsV4i1keQfUEK2",
  "key34": "2TqH8TL5DqfPHcrBnfG3ZsCZtWVvyWKips7Lp8HEWeYDfYMvfEigCgLnEhVfZTPKw7wek5hWb4k8pujnDu5BZdEN",
  "key35": "iLMVtnx63aq2xbkG3gQd8Q6YQJ6NDcnr6NFb9npQdhdD8kfmBRjNXZfvUZmJmxwWJ3xxAW28dhduYvc63Q4sUgZ",
  "key36": "2vpyd9dw1zeVhebmc5Uu5qAeuzViTgxJGiSvbpWAWXj4BFSENB4QnhtkmCdYHCXQAYR2ZrtZR4UcrnJe8t3a2Sf7",
  "key37": "5y7ieP9V12D5DRpvRFTymTPi8mzEcWcHuzikq9pCeY7Di4DdwNrz8FDMUes6mmmdL62CxHvWAKwDBGJPRNKxQZBh",
  "key38": "4FweGjt3TM1JRY43bYsptD78ponoSaGGcKdK5nws1DE2bi543QzoHrXXLV2Kqt6KDGN1KF9v2jPDfwuP2g3x9EH4",
  "key39": "2aDBmw5NDa7QRQjtEPnDyhBR5rkk1fkBXugCHJaRv1stWqUbF5qwshrggnivoi6WZrKnMc2AAXPpQSjfU6edW4y9",
  "key40": "2775nW9L3HdcthpjFzw4GLXPgaAB8aPNDcF483vBVsrtPwhc2UXXyFHTgQM2MZVaugQn18f8Nk6gghujJR19Whxu",
  "key41": "FJ4X9P8xDwpd772Fng9nWygWzCi6m2PWm4k9RYQxBDaBDn1JccFLpwWSB5vvp4nQG5th6m7r18UCtYmPHsF5h6d",
  "key42": "55pS9schPF2gu8SY2YvNXrmq3pB1ZnHa7FSsUVYYWFRFpxmdVf8haTNthn8rrv8uirrDMxLkEXkN9iJtvHT9isv3",
  "key43": "3moJFHCE14BaRR5PxppF9E2MJFrqfFRmNAFBAvmhM5mbg9GZKh5AHt1VLqVmQHk6fDMpvxrKxRJiekJnTeZd5XxB",
  "key44": "3zWyWjXnPnTESgNfAyFLv1tBqUUC1YLFAtdNGpu18iCvJZdNsf9FUXEvV5ayk8Run5X8FkPiYNg1PAa449f9EyCQ",
  "key45": "3RBA37kD4i1YmDmiHpg9DinGD3BuaUDjqZBPLbpCsj48QuCB1LxrF3xUapMPoeEvg4bMDc1514RF3JBcC56bpu2r"
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

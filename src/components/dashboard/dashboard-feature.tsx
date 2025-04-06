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
    "3HS8iwwkt4nMzqp3qAax7eZFRLSDzfNEtymDMDqPmigGHLxJW9TpkTp21s8ZcEJRd6rMMfyA5a7QmjNifnCiSdwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vaoHubKEhnA9T8pStv9szon7xZ3FubFurUHabn3dGFRbHxmxYFcjrDn7wpUTBPZDmU4XSgagGNEnGGeiGsXSkrG",
  "key1": "2wVEowoMfNwFxsgo6EChcNQBhGj1m11YMsqMZ9ja1jLdvamygN5472G25mr44q5ea5XFaUnhCSU2m55u8MYQ1jow",
  "key2": "2DXZDPMV6pQBj6DHTEQozUbRFDKXNLo24yCmDJPVWHAJ72Vvd4VkmCcnN33ZpvWP4bqFy3K6pyLLkDSqrpEdpj2b",
  "key3": "4RkDpN661GuZU5Vvkkkm17wCvcXYDPCBk9UsyjyxXPhAV3u3FpazEyyrcnxjTkk5d9SjpXTNGAJw7h4Af63TjUDQ",
  "key4": "4skPsJMpFvBVqE4qReD61pH5trnz47a5AjH6eLQqt9NGQgHHo7UbyTWUMWNpmWbBsVM4LtdfZcDn87SCKirc4Em9",
  "key5": "2geBroHz2fFu2Vku34zuwmpaBQC9nE1LFug2d1Xmi9zf3XeLNJH8dWpQJ82NkfR8KkFiExPXnfTon7ZEfsVMWM42",
  "key6": "3bGCKiZ9EGqkvvCvd6FwZavq3e7anh38KnuajDA8sWxNcmutGQmosR8vDMnjWtyttad2JNjh389cfkxC5VAzKDjY",
  "key7": "421tkTSsf7Zwb88HHFUr3bZf9u9vnaWA3XSAViEQ4aUY87LYrZ6XtmEoAyLDNix6txaEsvqBNUEMqn2SWkfYb8dY",
  "key8": "4ZZD9hoBDZTYm5S8Uc8MUxn3re87oojdqfakHQzhwaRsk4cz3nsnqWGV8n6f3wu72Ye7tMCRQaX7czDbj9eiNyhL",
  "key9": "3mAaigvNdNEw1p3aL5wwMcPwzbTLXnEermM9YEjFkjKqqr2fQ66dgXPjysKE6KvPHBXT75yzPRFjaXQdcvSw2bfK",
  "key10": "48i9KiVVu7os41ezrn7UWZsoSp7uPWPAnqckg3t3mrbS4zfVV8LyZCuiQwCvyddaRnVMbu6ULFeSiwqJLLohJHTR",
  "key11": "3qTt54Gsjj8nQmQF5HMs1wkMsE9fsCU1sX1SdEkABZb7NELzmAzZ6zSJKvefUbRxERMbMM6DjeRq27AUWaK1APdF",
  "key12": "2uWKNzGg3idvcaRgjWBW6pWj9TmyMGhJnf5w5RqMAtuEMRZjhYsXPHvsvYCMThoGFqTmMaF7X1xs8JfUevsBVsWZ",
  "key13": "47APyyk3o24K6ZUz76SKLuiApZ5KZouNQtyJbTvZyUC28hzfBecLXsUDQScX5opFsekdpD5HnD8h2FtbPXxd73v7",
  "key14": "2UAfvvUwBkVHLjSGBSRwMCBYkGkZTLmAGwf1AJSKyAQrThme2iakRsWS7eWbAv1AubsMHGQdEMvsJwbP497HchKo",
  "key15": "5sw6QiTMWoG7HbDhyE11TFPsNYToca7mQqupmxH1UD6xyq2hmQdyCEPiiYCdBAxbyxgx6C2Tyy7pMB1cxCL9aUab",
  "key16": "VqQwWLDqZ7gu5ANKEUGrZjaYuKhsrqVHdSJxcTFFSFJmXZiimZc7VjK4FAT4tUdZACRDmEWHS9m1AxFYP7mY7Nr",
  "key17": "5BUvfgYZJk5YkCBCn8kfHahyibA9AkDZJpttXeXnjo6K9B3HF6T8UUDMVp539jaQEe6vVmvWaSoGcwvvDbQW3Wqu",
  "key18": "23VL2cVYkLaHz7uSEbTGAPwxVBUoqezHLxLu85mEZS12AJKMbE8xP3o5KU4akod1N1fUu5VttYxpmoqYysgCsGSy",
  "key19": "513ybkudi59boh7xdKnQswDBN79oHVrnNTWLZ11PF4hDgAMt9g7a4w6fskA6UB4eA7RD8JcdxqBgpAArkfpAQAPU",
  "key20": "3ABp8adzGMGHHmjhvwutxWpASmpqDLkTyRguzzLWfYbfX3b2GAyLVztpnSP6RiV571tVRPrBuotZPps7aaKPKsx8",
  "key21": "125HsnSFu3RYJ6cC7mH729Y7b8Eio3geWWxuumQUpMiRaJnHUwshKH4Zw8Dn56ZZpQJ4YXLmw2NwcQGS8c3SxK31",
  "key22": "2cXzneoFVmPZtHq3HeRALcy4QWqKPW59m28GpKg2GtFYsEDbgzuqCsgQt2Yfti4erAUAD1vQq35AmwfNQNpPeoWp",
  "key23": "5AwshL5pyWSQmHooZvfxA4Scm5CbgPcm7AA8h3Vng6kBVV39WTWa32HnekWwvpkWm1xMxLjPbo7EeEe75WCHmbsD",
  "key24": "48kpb8yvqghw6ekG5GwLRh4EKdHaNK8XxNg5QiqS6Z5s8mo24CJcaCBUwfWNE5AicsVGecSoY39JBv7jtaKvupMV",
  "key25": "36rJUK97VvCuCtvHfumWG3B3zEpDMN8EQtQNxpYMNFEZM3jErv56mLSHuxNNRJCkQ8qRm3quPJ59pVukqAZuWQmx",
  "key26": "3PuNBKf8hCevXgWF7zeuX3WJgq9onctKQufRmTyjjannP9wSQVGkjTny2E8kasoMHLQyHXyu7Cnoyp2hpPfzY6EW",
  "key27": "48w4BySALvTxqQK9Ey1dJPq15qDybQGJ74P8BMiji1apj9gRyosuyWnLftbUAZt3b6MaxKEFDzz7zhnv6QH6Ttat",
  "key28": "58bA1e3yJ3BPqFjrk5uqgAEvb6Py8Au2ZzhQtZeQjuXzKCZ2wssFCvQz3Wp2qcccnY4fiK64bSi4Xw4AptMUWhA7",
  "key29": "67NVuZ6dHCVsmSc3tkDhYrwmzAbrvN8pmmfuk8XnPCxRDnHBLkHdKyYkG8RuPraBbkxbeQQyZRb7DckqykLZATgn",
  "key30": "3k1kQ1Vqi3AzzNN8NHX2EPDd5fmSX9YwaKGCykw7k9V7sQD9RePjL81j7fK7GCFCzRfA1tZooq5WVQiiPTLVnESj",
  "key31": "2RYJKAeyPUZY896Hz8a72VYmmdSeaN4fzaGqSWmcN8xUcmP9L8Q7QTY5jeTC5KqJuRSFkDuFosd9T15WGHsK5WDg",
  "key32": "6nvZgu5j9eW25BUFDWS49wNeFZBpSsmBYEj8C1yXZ8ZWKLP53fMCRybr7pZ4ZBMTBCFphaf53FB4kgUKdb3rZ3h",
  "key33": "5sDCakzCeJgQdhf8NehJGg1pH76odRrdAPsC1gFvwZwdZRMAVemrze31QVfytHR53zyzBhbGVuaq7UFLxNLHZgJM",
  "key34": "5zaRtthKQzjWunxgQ7nSN3nA3MiGmgMzUBWR5GtzcLQyzjCaGNhVH6s6tBe3s7WGKtSuzq2BcSMn12zBehFepTdM",
  "key35": "4X1UBn8R9XcALjmynkS7kKVy75cA1PE2mC2kSWzz9uTzJKcu365VCV57r9H4qu5XVgCgqaCjv92uHejLTvzeXkH2",
  "key36": "4WqxWuTJnmKQWhtTgCSW87X69SxEbZBRFeSQtC83afeoZz5VDEx4GhurrUoSDyp2c2YG2WoXhfgNjcSm15D5EFVy",
  "key37": "5MYRFUg6dYixkHjhf31tistm889XZZLxN4szeritykgy9kYfEpWAaqnfyeyjXHzQFviagVgHbw7E1cNnDijLvGW1",
  "key38": "2QfTcM3PmsEhk6Xwey1P8fMyPZijQhfooRJhb4rhYwSskG1QT3FmTDEoDvMyHPUTcGXj6F56yDGa5bxoCsgb9BZY",
  "key39": "rFJDP2ndTTmNuLjCCoBvoauk4DiJBb3b81sLa4vZstWvK516uwcpy4moLbikYuRu5MXDYSEzjqe9vmUsTq9dJsg",
  "key40": "2YfUJNSzhSRUbQq8snA1EdFoLqENni6tPGqT4KRqTSxiiPhvGjk26Ze4zeQ8XB5Gu93BzmQ9SpjyKQ35rDoHFJk8",
  "key41": "5uHPMegfuqfAKaJ5WZve7hZwsyzuRVN31jx2C5BAJbP4edypmf78WdwnzDFhYr8Aqrug7n9xT3yLqHhHDosbiBvs"
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

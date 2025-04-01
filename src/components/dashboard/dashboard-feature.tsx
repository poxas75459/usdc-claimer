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
    "a1DV7EFDPVhfsbqmLae6q1gpTkyanqqFNpS8SwCaLW5HBwAZgYSSi51Wr7VZRj6tp6wkjgDYY58NTm3vBxJWH5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYG883BF3bmXKoEwTRKnSFqgBsCcjeE3SiNbHFZcMafx2azxac29475PgJzVukyuf1mjqfVJLE5sS4qVWeZrYnQ",
  "key1": "2Q8reR6SDq74Lsor6PinoDoqA1JE3zZR2xcBEjkzE62i4bWa8qd6umb1WdixwZ7abTr2XZxcRJC1LBgR2xYiqszP",
  "key2": "3fWPja5BwCsHfbGir97xbwnmipHebEumn1UU2w3kq27DeY71k9ipsTMobX9EFsX83NaAcUo5L3BFRqok1mFuBQLE",
  "key3": "2Fg4bkUkJty18cLcmied7R1U8E4Ub5UidDBc75K9KmxeBz5shEd87C4ZGuBMAtFTNWSTL3Sz2u1RddM19MvrzWx2",
  "key4": "2keTn33ypdnRprAQVgzBBHTop4uf9ntGbd12m7kAxySWwjBfDaoutk8Rts9b3Ebhzyu7w39hqz9jRRbLUeo1eqYT",
  "key5": "3cS8tZbiURKaQcBopAxHTmwKN2hvQ3EuQ15qDQACq7sJE1my8uYdQ7GsHEXmQFWFGEUF6FReJXUAsMELCs2Z4Jg",
  "key6": "hMqgMiR6TAUBmi5nCN5rdXq1xrRtwfidFZw36Y9dLhNEjCRXzcPX2ZXQrQCTwyKbgUg7CiSxxjSLipRpJLUunSi",
  "key7": "4PX6JkTS9fRAwXD7aqdCnDX68bnWTSGGzgDoz12t6UnrtXXQDxVUkdnhmbzLHRZeDR44JbUmTEjBZ1Qnw2SbtgpL",
  "key8": "gLhCKk2VAhEgAJbqiQy4kR89c1BQ4h4pnHPbsbLKDSN5porZqEJC5HXb17Auji3zpS3sSWAYLoLF3bZYLSYpg6K",
  "key9": "49ofL5kVBjaMHe2WuhASWxfwE5AS4LoqocBDwnNnQJbwhNgcFrLFkrx2YjS8iC1ufwFMgqJJZz1JgVDo6fxPEEG",
  "key10": "5p7N3j8255mHtYKiBmoGCYrnZhsBd1HkzVxbpSZJqXNyCaLuAvVqJQyaz7N5a8EE9iR6pFu5STN2eDKCfn1idsWo",
  "key11": "2Etk5FTqAnBovc4FjhV8g22gZhi7BbHj4tcNAQ52SowXs2YTuAHZr8mJQon2nfb6QH4RKPFQCeHcE95sKa4SrptA",
  "key12": "zQxiicwtikMWjkihZRftqPETRH5QkwAEqCz4MXKsdQUYnoip8ifuqi5Wz7gDdnoT2PViKcsbGS9YbZGLk9DHh9h",
  "key13": "5jbHeMZAFkA9yDhx6Yv3kJMHZXApAY6e8W5wBt23qYGUX8ft8TpB1wzWouv3XsAjkUtqWVFNAuv5573XVxBRSGxL",
  "key14": "2ucZd31bWk1qhEwTy5xAYYcQQuvghSpMiNUtHeFbkiZZBCGTiRo6SoCPrFSUXmwmXjUC8byyboizG9Sqs3vko19g",
  "key15": "2HM3PyVNd5dv5Rd4vaMAz4APia42KVt7iT1tphEdrAxCxhbcwVQePhfpEBMdJ4iu6QYgqi6Piz4GhbGJpGgSUg84",
  "key16": "4zdUgtRBcDWntucqZ1WeTx6ZDf3BFnDBCk33ePa2Y8wCTWVidjcfdi3Z9BtW2hfx9izexib7s89ugfvjuxY37LBz",
  "key17": "5vsc3ncfuG8gV3fUsvmaaRpgHfwAi3n3sUPtos6JpHJEoG2GJNXmGaVwb6uz1SrjhRG4njmgWHaocE7FV1jh3YgL",
  "key18": "4uzShuyWxMDJxrx9S9BuevyY2VYAQA9jbLLXxuzvAG7GEaTiJtghf3F8rLcvXTRrgs52LtRhQrPVqRMKuDhwuMvD",
  "key19": "JwGseJoxF4nzaE3gZjurx7TLk3ydDEbkFxML8tQ8DACVyDuet85nT852FqBjuBUVJvu1YbTyeWKaFJUPnVVAPtt",
  "key20": "EB78E5tHx3jA1Nqr6TG38nEnBzAvzebVQW8aeEtAcygJJzgZjtsRaDG7Csf8K6ikTY2M3xMMpFerh1q2jgedhn2",
  "key21": "53nJ3TTRuvwzCho43HLBw7S7JX2fDVeGZWEuULrm33HQHs7TNkgJwAXT9J2FkLUJPb687qb3Xwksk6SeFrPzCgi2",
  "key22": "2ARZk9z8oVxJARA4U8y4dvjfaaJFJBbeWxcJdvg3fwep6ver3ChvAchoBotZXxsp8zVSc2Qrt6jW9KiaANW36iZ2",
  "key23": "5D3hsT4XeEA47G5xf2G21B5s3QxsUN5Bx4bD15v5AgTVtB1w8wSuTrkHcE7eVjECH5YnpQS4EkGvsEqkouAT3qY2",
  "key24": "2EPq72mApg6KcDTHkMwBugVmBgoWFdVJYYgUaNn2mzfoWP1M9rBRvMMd5k2rkG1kYnfYNeSP9oYa9M1bGdwVfS9U",
  "key25": "4qrY6y1iT91BU49soDE5bmXsYfgTcbzSyntHCEjSA65c7v73XPZDxKnpY7iEuqsC2Ce4FBDMyhDCVoCDx8L2DAU",
  "key26": "4DX82bYrSfhNMLefNyjjezxwerMFAQ6KFwwX7vyL3puqNLhommGPpA75TohjHopMfNKCYRj8Ezqf6tuTCxK7SicW",
  "key27": "rEsGAnhRCjbGUmLRQDY6MPSRHhF7TPYHYwhhGcdBs2udBuLEQk61nZPCxSZQFZMiCFnAcggKnNfS14VaeygS2b7",
  "key28": "ks7dEjfF3nrK3aRwMcAygm9rXjQ9iqUHCMs28yi4Tfh6nbNMPRzjWdBBHDad2b4wZpHE9YuyBfsnhC4wK1BJGDQ",
  "key29": "5AKectniSUMyw9y6UHKDYfj47s7CzfgNLrAxH1dTucjGFnz3LE2B8GZedsbUad1YnFJkpx7nhvDWYsJuafeTPYck",
  "key30": "3FTXjY4Z5mjzcFEkWQKUoizNmNmd2uE2A2GrvERBx88RRSd9HGKhnkghyh5PQMJrodozjoUgKcJkxkXdGwapP7go",
  "key31": "5kMduffEU6tAEJ7T1gSPSym8BhQJyZ226N6Mhy8ijGg28peXienLF7CbHFnQEWysZ1DFsThmg15rcJ96vuA1TUDr",
  "key32": "3KixKKSRWMErNQ5BD41dfGy451stz5numdpwxJKT17wUgk2KmPDr6T1XkrZPLcNassx6AYLPN4xAqXR4tTkfBbj6",
  "key33": "5yxqgX12p5Dw1WYAfGtGzxys7MvmEFNaz32f7tnB5EwknHfB2UvyhT3V6TJVAoTqRdyhKLEegAdgeEFFycn1WYLX"
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

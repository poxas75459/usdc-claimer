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
    "LrtTbtg5wpH3MWGA8nnz8J5SxnXWYFBFTZqhCY8Tjy6kjQVyL9oUAk1yCL94h7qTi2yNMKGTwVkxAiS2YDKYfh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T187t7fmtX61YkSdHUmZeg6yP9ed22zkgHPo4foKw2GHFJioEDzLzZymJi8b5PGHjug4QHjCXEr4ayibEStoGub",
  "key1": "2uVNncPmJASrFxtyS2eWo1GuZWC55Ra7W2w9e3XSRmx2GJz6dYLmAAebD3kPEM5s7Tw8zRJretAKUyBAfAHFRB4B",
  "key2": "2t2mm4PQzgEipvrvpjTC55y18K2ybigA8VkkHDaceZwcAKAG4D2efTjwh7SWSHpRGv1pu9SeT4TP8xA4z6yjNVSL",
  "key3": "4E2cB6grQhEM9MJXvPKgJpG8KAvgJWXyUVKCxKxPYPmHXNTb2btnux5htau1mLFQpFi8JvdrY9wTKjsqTMhQXxaS",
  "key4": "3XsCWMqQwRWsfpTJ6tZR5myWajn3bLrpuuzTDfaxdNAPAbGVsyHqKYiWKAt22LY9eK56m8MGfGmA1c7dzGHoYhb4",
  "key5": "4uotTaSH1qbXm5jggBh5GfFyLTTgw9f18UJuNmyoyQvdukRxEmfgeFzV6gFKAWYKEvSkiQ7YDrojsZav59id7pxw",
  "key6": "2u87mibzN4qXfBA72dgFKub3n3U4HHEJ4AShii4S2oyeqsCpHDgjUtsUzvREHhiGHczetPrsymZreX113FzzQEVs",
  "key7": "48gJxCHBmRpzeYhidmRzwCLqKJYeXaGt9g4gWQPopNCXoFVmCqgrsySukbGcZyK5NNqYq2Pyb7x6J2R8DwYpEJvj",
  "key8": "2U48cuDpipeCQVYe249y7aizAL7pKUtq4w5u2eEchaTgDMbjUhtEAbz9hJjuDsnC1T7th9cymua6ZUcb3hhoEQWa",
  "key9": "4GwFmV7t3zeCZdyvsTJi9nLD3miEXfc5VGyVcvksNAVWWQLktX9Cekc3aPgeHJMVDB6z4Xzuz8Hcn85if99jHFEr",
  "key10": "6FQpyMYkPGJzLwsxLKjnwiabznhdzeYwdk3wSArzPfnkG4BHZaf9GqmzgumEDLGnRGzGnEkkWQfUhtcimTL5toU",
  "key11": "B5yYoVuU1vP4fFc77haomqazTTgD9epFp9iWrCt2Xmjf9m94LKT5jge9LYzYrkNasBis7Xtx9h36H67enHNYcwH",
  "key12": "4EyAJg2LpdPdkD2aSrvj59YyigaBs2De4M6BgLgEnpVrMaUNcHajeFtW3QiBDbdcYodgXLcYMk8aM5d4XBrbiY3y",
  "key13": "46Rf71iJpQkob9n32gj2moUa2q9UUvByarm1fcBNF87X852CzyvXpV9S33AfAd6RN48A5QVa9NAgvicphJLKbahg",
  "key14": "65yeda8NAfUrMqngziht3te9rGWojkzs9jX13Bsk8NkH28MErcBouhRSxnywMsTbaYwVKp4ji2AHKEZCFiwGYpRE",
  "key15": "63R3wFmwuWfCq7cdG5K98EiZbXYVKhNQCZMVGQ9uVEfs8Lgo8rc61fWsXndeaNWDVEAip66hqMjg1qKZbWjkpnSs",
  "key16": "53YRLVhDWUQRwwCCpdMgUnQ6WQJSSVQe8s4WWUaRgvCCxb8oUA94ZE2EGzRtNrqnCAGgazHXKsLpXjgrMXtXc5Fg",
  "key17": "4HX1MDQnAhia1BP4jxotm7LYiF9t1H6h3SjA297wzErj5T6DAECdKfmRRSzpNKnABcUhs9oJ4NVzDRx2bhydYzdN",
  "key18": "5wjF4jHRU3poTMQ3G3QyEm6M2ZXX3DX1qZiwgw57gXEN4dd1wWVY4H5tT3N9FAQG8w2o1C8JzRJLjxa4jCJDPNYG",
  "key19": "tRRFVKfo2CbLf9eN2t7AsEQ66TVpvVpJoUW8JwLDguwP8oZYQ1CisYXorSTCiGzhcVc4fU5Rb3uumeR9YACnj7Q",
  "key20": "2RmL66xfxzPd6W1hJMTLr166qHbWA8k39GYuygP9tbijfyMtMrCvThTz25fvQdoxczMtRoz5b1SPinWCF1hon2ri",
  "key21": "5RXYUVNUKPRrknNKX18MFaPJQdL3f1U6mFsVedztLjDakmhiRUBXZiaFVU4vQtSEdj6vnQC6xA3VzgSHbhT8KE6k",
  "key22": "qoa1B8dnFwdhiAff3YUtWr23kiVfJyaqFPuMm12Pby4GCUiTSBk2CXv1u8z5Bb4jNQ617R8R4bRpcdez3BwiPzX",
  "key23": "5QdYa1yzxBWBYDbbGJR15sbPRca1iJA1RBH7UG1eWrtd1q1Yrw9yf8ZrjQ67CCbNavs7f44aNXpP3vz3E4VpqKNd",
  "key24": "3jB7kuwvzxvYW5Kftobi74WqYkgM9egoaFPf4JjAv4XwNHDpMgXeZwmo3KchKfMAP7XfS3WXm7NdEsgZkXD1quuP",
  "key25": "82KquhqQBRrJM7v6fEAZqufhK6VsvJZ8A3UsAufgoWiCXSi8ktH3X78nr6FFYHWw3y927ZRnhUiyLLHnaMbhQu7",
  "key26": "gxHBS3PDbm15i8WHEYEHCGnBb3Asc3RvvKmZBte1dWPBXKKoFLgZ2mLsbP63tu1YQYM5Q5UV1tr9gHZDfT6YkRd",
  "key27": "5edeo7N1JXWm8Wtntioq3Z8yLjxWVDU2E3DpHh8vor8VCbUG2Fk4AraG3MFsKRafUgFGhBofVYjmBm28aPd6gfwV"
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

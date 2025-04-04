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
    "4gwtZ3ExQtFcEHhGku22YMTC7p4bbgSr63s6SUcAZrxwXWJii7Gto3Boo24NYJfw6a5Lu17mdC8RX56QTvXw5hG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xwv1X8jkdkkjtpf2ftzvd7nMyLqiCYSvNm4JAK8nzUywHWcfyox8UNi64ALrpdJ8rfiCZUfGiWG2yWKPzjWYUyj",
  "key1": "2UN2VVYazrvKAXJhqXuTJuFKuJ9tUCyp6Mxqg4h9wbxY9PFkGyZLFrDyWx9ZHAAZMBsmYkTtfpGNBiGxvQzv3WxM",
  "key2": "SoPNUeaJ2aq7uZeAdpYQ3Lh3fyia1JGywS6qmHx65iAS7thDnDTFxZxXQfvrG539v4wY9euVT99RQMzADoup2Qw",
  "key3": "4MrWmMkxczbAn7MKeGAJAKgubQwwnX9vbvPRqdQZYYZ4fsZDvZ2ACq7GDPnrWvPXYac5fX6QSjzLWyKhyTDWi5QH",
  "key4": "T8AYzm7rJLexgx8ihKFjvd46pCiXEQ832Y7vzPuq1ZgSuVQ5eMcCSvqBaZ96qGN3j6jfXHB3gPfSWENhrzho6oR",
  "key5": "2igRemCwHcRyXE9iTM9QRxdkoYABWkT1P4rq9xXKynfb4vvMTDTjhJuET21orhjTyVMCTfWDbtd7yACoWvAnhaNg",
  "key6": "67LdRNomnsZfo8fTeaMtenaWUmSHFcqSmCxtivKfEGfWtpuex3tkeqLj5YzebUbNvyLydA5xy7mMNCoYqSSdF3pf",
  "key7": "5d7uChV5Zgq1tsoxPctFtM8qu3jTucnYV9FqyZTcdX4xMbq6SECSJR3UMgE53x7gC2JqRHETDp4jc2oX2mjEbwHv",
  "key8": "eKVc4iwDBK7yxBmFz3pS8k95WBLvSiWUAmxaz2Hhru9r9aGjHkmfsWhHsga17qE3GocxKapuQeJ14huL4QENbzj",
  "key9": "3YG3yDryMvPcAhRBtGY7qoTMXgEkDHqQdjc1qsy6Cuj4p8qgnX8W4XsQQK4iE1nPgu8dtW1Qc8kVzZ135XuTDkN9",
  "key10": "2Z5VU9cenk9bwKu5tDmc2dxwdzmSzTmzTq86onbJkTxcoxRNGUAZSHosAhzix44cLSTowNRP2RYgo3XotwKxURQe",
  "key11": "48Q1Yd49rCCtFKhtcDVzf3JTFYHGMmJMSTt3mQoVC1LHvvwjgqVxZNH4DFfsYuunyqRpX9S2tRg27R4E7gGococC",
  "key12": "5pZCpxcXoJGZLMZ9Rof9AJmozHKo28B4PKVYUZEPU84LmTGsJjuyL1duZyJ9xeLKEW5pQZbosjfRNpWcoCenQPgK",
  "key13": "33cRSuTqJJxKRBnh7XmMVnvL2LmGbq6MNQ4pCuJParPjZbBFme16q9jgiFenyHPDdorDoJL3gy56uu13ofqfGKmX",
  "key14": "45hMZ43KqRLWmRLmojwKhVESPqMjYuPbEetXDxbVfCukpqXXDiAWktc19wJXvdHtXJVN4xyYznL7ra89TvjwgJ3s",
  "key15": "4YjaSNBXGhs8d3wMeCmpaYj65xiytqLhU3Y7gQb33TeGiEnxVp8Aibhgvcm3MUHCV6hBGzHFktoztTvjnZUshjJs",
  "key16": "NY16WwD7Vd4u7Zmvb7BaHJsKnhYW967ihe6D6hwftWkPqmafRFXADMCWmJXhQ8AcgxvRcjguqk5oaQhXrf4saHX",
  "key17": "3bLB74AiiETDeTvdbwgrQqfoN9ZKsEfgfGyqAGM8j4VELy8qoNgbPctv3B7M4Wpr7MAzsqCN6VmWAKtdzoGE4DE3",
  "key18": "65DtYNsivnyq5JeeE1zWFcWkxZYTZzYDwbGJn6Hze7dAZq5wzHshCMryrF5Z7zKNgQoQdrhJt2eRuiTbFDak4XAf",
  "key19": "5LwvuR8VDqrjjSnHNxJT8iNNft9S98gdKaszBZGwq9JDSkpNAMZJp4cnsKszY2nyUJ5ZV8TqT3krA5k6m3rKGAFh",
  "key20": "4wCf5TZW4hZAUnd3LnnioHanZpKy23WMtHT4uAPnABsTLDRkhwxP7cg2cu92KQrVwsQSaxJZbDtsU9R8sJtSFxFe",
  "key21": "219kX6mAvHqo7TTRVxCzTpbCkEkoYXuy8U8FesCJmhfq5CTowkCBEjMPNwEYU6WHrsdXPHCeKdKxdA1EBKLiQ6QM",
  "key22": "2PVDNpnrgRuHP8un3P9m43bff8K4dsbUiciuFqAkjUeDCukx6WAHUVahdXAHuu6j8R4LGZni21eFPf4aVsnYimGB",
  "key23": "Rhgco5XGjZnduLVVTZsxKoHMRauytmu13puipHpkCxz4Jn2eze1tgL2S5oZ9JQ6i2eaNHUCcVL9EfrTDWzapaXZ",
  "key24": "31kCXUovwBuPrYodZVFiCeDXbijrXpqys2uD87phSYG8R5gyuRLcVrtzro9JP4F4s7ZmwrLfFAz9eM3VF133nSGB",
  "key25": "4mxyvABxv3cVDtPKHgHDnHztPdYWpYQcXZFzbzd9MKb92eMtYm3iS9gEo2LsyjSFZGxmkzJDretE35yzgtMaFrnW",
  "key26": "21Tz5sqiSJ6HYW27vFkQJFpE5UdDKbQUJYLvfgnuAFPE9KXqQZBCPAiEZoBUdR7P74ZbjTSoJNwk5z9SmNwjWdJB",
  "key27": "3SrybKpgXprK4rFDUEyideUf19L49juNC3LvREaAiC3tju3kQunFnfVmSe8ZS6vLcKpXhKTuoEhWkKs1bh3XcpN",
  "key28": "32p9BrF88VfxnKMZjTGUT7Eo3qNdPPaAHDWdcu9C5yc9CavA8UmJNAf9Jj4qx4T41tssWW77mRpCgsX14cyiVg4y",
  "key29": "2mprmc4fpJBP66r61kG8DNqxdPF6vzAHU5DEhRToQJWyJ9ZuD8uZAkXaBEmj2BmTgYQMiPdGgyzj8V44nQRS5xAX",
  "key30": "z9SmEpmB32zyG8jZg4dcMdNw971fZBwwuZpGPLxDg8Q2W1mt6VgGB3WVQFEc3hjdMB5E3nEYELJRAMiVE2fSrtn",
  "key31": "xufkLdgRSj3cSAd6ZsmPzuFMcdJQBQweigTuHHsfUsYxvNLuYXoe61qtzCL6frkcseVUZuWeobRks3P4ZgFd1wP",
  "key32": "4UbYPsjEuQfAtsrQ5614wwbP2hN7YGYr2scXP21FWWHB5fekZZgccynSpnFENnQwppQb2Ex44quHFG5brfjhETkY",
  "key33": "35hH2qWh3PgbVqcLCWmJ7mF2nHHFf5fe1B7owXdXQHXtDmHRabQ4irdxKZuTm9eBR4grfYGvGcwYNSFZnknu7sz4"
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

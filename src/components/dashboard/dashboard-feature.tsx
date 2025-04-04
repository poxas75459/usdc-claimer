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
    "RLqkx6DLivZqekySFvjM9DQcnBYSyvc8gSp8D9d5YEKThoRsgBjjgcBtPYQs6MSKENbvRZ8Af1R3hPhWvaBFvoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyXpr4N51GgUHZUgqQYppWT28Cxejwxgnpinx7VukdXZf1pbY88iJ9GHrUdG4hmXHVgZur19Uu4gsNVGmuon19o",
  "key1": "5Yp2zgjFjX5yVDewUn7STJAtpdTSpVSu6NEPfptr5AmCwwJdcmWYuYT4asr7ufgGNWJsgXJeV8owDsCNJLNZGfYk",
  "key2": "59aU3jovn9tgoAqugCUJvoeVfofZZcZfFwjRH9QFnqmusmxKepNVL4NmRozSHGFp8Dv2H4y6h9H99kEgvqr7Nr2J",
  "key3": "461ma8Ed8gzrUtv4aaf8GyajV5g17UofArBxiWZp7snBY24EvdmuUWPx6VygL6bJ3U8ugeqVALMeZaYBixXQMoEa",
  "key4": "4tyrDymSTQPZs3RzgTZfEm8EmeccEDN1Hoe4iLgVLToZ6oaSE8D1ic7NLtegv5EjktvRaJjGbp8ojsE223TzdQUp",
  "key5": "4bfqxX66xRR2n1LKqrRpmhEVM3Fp3wWeRmDEjtAY9wJ96hVanPvFKo5KvgD26SM7a68FYFTsT4q5CSWFN5NGwFdz",
  "key6": "ToMSrReAPWVWXaEgd7VjKy4rC55DzDCwEkSPS6fi3X2p8XLfw8ULsxcTL5JvC1qfawpxYT41p2wpVZqBxfpZ3Et",
  "key7": "5QBsS5tXm8ggoBb7UVS5h48mdq8pzzZ58mfPGFshq6yxBLe1Dn7HHkX2SicAzMQ6Yuxhe3JDadhfJauhUemWLjYM",
  "key8": "5LApvZbGc2wGaSCTm7MQoYAjnxy54GvQEWdmiNX63xuoCK4rZRp7yWsLoPMD1RDgVq3jsxZSHxuaBakNwgMaGvvi",
  "key9": "2ZmPoAQ1PQ1YrJ3oRFqaHBKzWExt5uvQbeDLzhhmccgUX88rr4fevm8ZAqn7xyhHEnH71i2C8Jd8CRp2WqnrSFrd",
  "key10": "43Ft66aNCQRm273ukZftS5KMys6cbR1TBreEZXBgDi9jK8aqRGJmp6dmhxPQAZcX6VUDdvhtu7dpn4nZfVr4yzzC",
  "key11": "3gkzbPt5YTsVNSC1qmLX81zEMpegJLhYAAeKLcugTtKGFHvxdoBWjW4sp5wB7EaJWAqDvkJ1PLTs1R6jYVUtyYy7",
  "key12": "u4UTA9nSghBQkGFRfXGu4ACaBin9apgm3QvMPycAK1z1sPwC2pQ6FsCUVV4mHXE5qY53PP4qWVS3V8vkz5rkR4V",
  "key13": "63MKuv4pim57gwsWuwFF85h9jsbYPgfB5cJ3fYLG5W1uLtqzvAKkMJDovwfQhrz9r6wDz6BKc3imiqjGcwHzwTgX",
  "key14": "vqYZw7azZnwSi1nVuDoe3pfb8hccxoXdbvzY8mXpshc8REYvxNCRcx4Rvhp3Yg4H3oM3J2foCcej4wadyhB3Z75",
  "key15": "62Apb8zTNaEyfBg9gLJTBWaemi8EgdCiX8Ws1PAQo8U6HSuzmpwKB9Mj2xutHuhfyzt1q4rXVwYwtWXxSQtrYbhk",
  "key16": "62qPZdEShCTh1udWRwfkEJkYGVhMyP5i2Wc4ivEncoVcUheuFJcK9rrokkmB4MJvvpJvwwjA5FKYDhSTGaUa5jg4",
  "key17": "3FsQEjRFPsKBe2SDG5qCHAbhSJpHeGB3tMHdFvUQ7jxHTJstpjzL4aHuxhLrQjSgeLqJBHnzPsqZbdnrgEESzDtd",
  "key18": "5H9wdPpgq7BYCNfTURfs5wyWSKg3yx3Sm4QHHCMDcGYzijajwAnatg2iZj5PcFwEARk766u6TaaoY3wF1qm29qj6",
  "key19": "oF5giui36pTWxb8JnZczcNL178grHEa7eDLQpHtvZ1as8PKTcZyPsPDFqggySi95G9fp2fxchcaZNpSTpdofQhA",
  "key20": "4WSQDYVDdXuxYYua47rCiAXyxTeWY24jUHi5xwnxbAc4cNv3FgxMLfZbg8QX76H7zSVpnWg61vt5YWDnZ3fpRUL8",
  "key21": "4DvAbpc4c4SatbW4TV1h3Az43PfGY53rdNCgiJf8dqix7J1t9qzzVkV1EfAhvdot6MnyNYazWaXoFLvKu9Ci1mcH",
  "key22": "2pfJf4vugoyWoYdV3qGBBTnwMYo56QQQtDRdAsEa8qLcSoKJqRSSDVQ2iTnEMimVtewB5SLn8EbsuwwNBPiAtVG3",
  "key23": "wemVXMaK14SXK8G3odDv49M5cixE6sYCCUnqafUvWkPJmcVLakXDrdekTj31sAxWMzMBfNosiJ6KiBrpqgfXDwT",
  "key24": "2yHsQTpGR3hszYSkgFsDrZKsspJQnsuadQErcjyr4C6LERE7oZ1tipqzX8QG84qjHUW25d4bEpb9qp5dhngryjcN",
  "key25": "4MMn3Mydvk44TjYffBxzgf5jLqt6Zj1rrCTEgH7scRq7zPoQLjBYp9UiJJpGPdNRUsD6NxtN1WPMuuhi5dtcJTnv",
  "key26": "3skJfS8UDNaedW3VkAy5T1cp4cQvqnn1UrLHDTegxkedDgk1v7Q8ahkWcoZ74PMthAfsPFS1nREfxT5miY71Lxdf",
  "key27": "GCsdYk17bVcoxqbERr6V1LA6HwmTLg641hpLqENkt9AcmF4VGiw4GNtmiPd3CecE6ukSx5e3ecSCEVkmRG6L2m9",
  "key28": "386ySbA1BmAib4GvJJ1d5dQ7aS7BuhPDWFpEMfEQzv42Tr6HsQjy67dtWVcHtRxyANZ9ytaFERXsTKRjx6waoLZN",
  "key29": "3y7z4LC8wrKgFqLPRTPiz6cqr134S6sAFV4d8JS9SSEWrLHtpj3sGmt4DMhFGEBQ4v9HyTtKHxLXAJVK3Dn3Pv8D",
  "key30": "4UXCBURQAbmScPKHfftDwH4G9WDn8rrib5EndfuVWhyCVxwYXbNs98BjfQZLcdxeBAdBA4L1XNqEZEYtTstxWWVJ",
  "key31": "5onZMChChh8EwNAsFGNFmXvVE2PNaFCnv7HjGgUYQN5k591rvidK9XK46SAsVFBKauxwY8jKtEYVJHcWKzyQWcf3",
  "key32": "24o7a8B6qTAgqx7eEbFcKMnr2wBd4jvEgMehSiMvAnemP3vkhvFQFeHyK61bHwqjhsFRd5BZEgi1S9HoJZy6oHCx",
  "key33": "43mWVPkuWxvpXqAWmdztJ5mD2svUECETE673DreV9oPgowxST9hsNrkH5pfvSxFi2BGSXVBk6r9WQKYz9fssVEVk",
  "key34": "7PVQtgZaPdKeCn9xoXAign9Dw7y9cTfQjz41PFnfZEyBTvdfcvrAA4SAuHu9iZV3cQqQJWprj4HZ8iKCnDYH4E2",
  "key35": "3BvqWL7nK2nFR1oMH5GLZF3ENzs7uzVY7gMuYuhFnMena3BdSaNu4jVrpVmoJrwpHQQkDNQgjntHR3poZiD98yre",
  "key36": "3JBdHCFuMK376nGnw7RT3dQC8oFNWL4VrJS7dhBeunTrJxYc2CHUG5j8EXutkVYhgQD2tmuD4eP5UohYd3WYMfS3"
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

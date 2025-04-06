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
    "49eZbPkDWUPBbdxEEF84PuasTUuPj6J2T6gAu7Zu1rEE1Pi5M9vYAfK5nTkkMaCQkxVdedyAUuDvj1KnLkT6NqyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KACA5JreRGooFJpUhgBuSssG6NmuCNkUre16TMAiJoRQdFuM6v6U3vKNfxx1xEuN3BVJNLfTdJb4i4W773prbos",
  "key1": "2cZCACmLrPXBLaLqgbLa14it3My1A1wTu9j5xqt41AQvPstrKsQmRxXnczj5ZGqfAt6BCBovpgmgU5gMztQMAW8f",
  "key2": "2T6XWQgJrVAyvDpu2E3dK91FPFt8EKzYSN3iSWV2B1sBH83oief4kE1n1ZMknvi35dfSiTyvVMNjZvyGr38fRqJB",
  "key3": "3oggKTRTxZbSGZp5rwW73qikLb6sFuWf96gdYxpkdrhHAFBKQbvt5DeyvkSujuR3ktFwizX2DjWoCw4dAaU9EL9L",
  "key4": "4CJk7cnWLC36iH4wEdtBr1MkVqBYfMBnHihmzefjxD7YBRqep5E6ERrvqRkLeVKba4EEadMPMGQjLgcecSkr1eEx",
  "key5": "VKkJy5GoH1Fu2cnQo6q1cSFuKKXcjHib7s7yJVptf9wX2tg5JKZ8EU2aqSKAaxQufb7ogBWGbw7cKg6AJqjtfTy",
  "key6": "4pyxYGDHPNCywMpnk2J4qSPipv9fFmpqGmQh4bFaELndah4UaMUAqPtYi1bE6VY7U5pTVwXgAFu7pUeSJwbqgUTE",
  "key7": "55dFjbZw5nCKVbPxaMZL9S6KQjhGLNCptzC69QkYpECUx8C8YT5DNr8As3JCDhU4aP4Jy8aV2ofWGpKpcWaJro9V",
  "key8": "41up9bBmNqT4bTg1711GSU6jmu7c6ppuEtJSV4dqdWx582USgXBWDT8VQMa39xPrekas5pFP7Qbadq4umRpxBocC",
  "key9": "3T4J3u2xZAMihFkkXtHNSyfh5GvTfm9hDNXPTsw4aSL2oDG7LgctG4C1bqnmeS1bbtsZi6PsAyAzWghq7KG9dFLQ",
  "key10": "BSLGhHNRSV4hdFN3USNf2V9P1yzAny6DwEznpgPR5SYhvUqG3QJz1MG7KbTKDhhfTyBuESVyXSfgYySQe6gWPFV",
  "key11": "4HLnNxQD2bcUoxP19AaZ2ZR8FTZRKmtvpa4mGEdwwFskwaACmkxA5XTchXGpZ271ZVgacyZQYuA5PtWmC8WrMov6",
  "key12": "2EQUMU7TaNumb5ExsRZaqZ9bZg3qBCPi1ckuTxJ1c8D6vyiBmeT6TCecaXvqxr4imJbVhCiRCkcG753fTtMH66h3",
  "key13": "3poRmci1epQZNjvpLUBediQ9QFcAF2iScpmtk81knc1EMjVRkT9z4jHByUa74P4m2uJGYQQj5YdWu57zSxmEHsJw",
  "key14": "3EPQHABMALJ8kYsettFA9mxrNNt5AH52mzjU796eNpbXd18yKFdKDRm8bzvTXKB4UePcMrSxUb85YjyaoWLGVdp8",
  "key15": "3pi1q4XHu9yD6m1p9o92dqbzcbb1FKNUyNnpqJDvtCL95snGMe7YXUnAUYv3MoXq6kkptai2G7kWDNA2xDJNyqMw",
  "key16": "4pH8E1uWDjCyn4NYtZgWrub281V1aNQy4uS5jZJ6qyMTtk6r1yb38wQhZ6MPxMM7Hwf2bJ3iALVtLqbCQy3tg8rZ",
  "key17": "Fid6gcdrPWvXandw9SHBAzWTiKdmDSpRsUaZDH7KxqHGiNEBXME72jWypvXhXDDorZtTfcsdyXXD9Nz3mJ4UEkU",
  "key18": "QxEATGiVQY14qhKn6ciaam12oyFTydnV3bHCM8CYwysYpUEi9GALeAjDXJPQtMuiQieCcV8nCqqbwL8hwJZTwu2",
  "key19": "4h97bQgbHSkzQYxDBMJDrnJTQCopn69T7kLRG2STRheZwrZApfUhKDNUX7ouv7sfQyFj9gjhPpGUvkpk7LEzbVc4",
  "key20": "2sftY9J62LXHLs9L5eeEg9QC7Z5dFSNtUdabziyTMyKS92rkXPCR29VDRG2p5kcQEdhKxfeRfQoYm8LsKGx8TYXz",
  "key21": "amZmKcDtnDG2QMufCXw9gb2d4pfJ3haeYmXfd5wNg9Pj5Z8Wnj7Jydrd6NsrwHJb9946orPJgguHYd5yepD97dm",
  "key22": "2T36k3zruk1Mq7sULLyxNiPxju8tnacPuU89HzG2zvdPRoRV5BBGkV4ci3mYWAXsCN3c8hvgoJ9EwK6aE7R2FiEK",
  "key23": "5nPLgjqT5w3nwuJAKzQpD6z287wsYQpVwotPiubraoUFMKnrXZCuHDknZ4vCm1UV1u8QZ6PfMxtuZQHNWwG8c7RN",
  "key24": "5U9ej26K6j1LZJ1S82ogwyvoppTEJfRsk1hg9Yk3oFj4vzeSbtC8RmwRWBQULxmYYXB1Sz2kwnbFcn88fqUpDSto",
  "key25": "2M6JtKA4wSZppwan6EQJJ2VmmDy7NmPXTSrscbU3TW1YcVKY3FoBdiHLmk5BPoNBqQfJy9Pycvv6tZCcy5CJjT42",
  "key26": "Tew7tqfywpwbYtQfJvXFAnwaYj7tqSTyV6XBJpD7zHvbq4KzVGjPTVctLNu8xh17cxFaQHzKTzFRy96K5try3Be",
  "key27": "Fv224H4VUqh5SDj8S8GznhxwmSkDHNU7sHULQoXhAqxH5ZGCxSgB1TmdfnPhrtPBc3R8hdTQAs3GZk1Xk5KT5Yy",
  "key28": "3SWhqmhBoKue1etysK873nJoYPewFPv2LSuYbLK8UxnfHgt8nNGDiecMfJ8hqQBPCuPuoMo65ySXicE4j3EoxxdL",
  "key29": "3fii3gdWW9X6uqmyUWMnftTN4kBRYjJTNbnFgabpFBVUM7JtTWWPDhJf8F3b41hvoSKtFpR7A572Fxhsm3KEGxrV",
  "key30": "3KTeLLFKh6JhCepVuYrSAj3fJRfkiqFWDXTNC3esoz8T8MBRm9FCcMscfseJgKqzXt4pSomwN4cN5KTpu5J7gXq8",
  "key31": "4u5UQW6QVG4nZGjFdkmhCxuoQysy7c1fTBP36PKQLcDgdDZb1WfKDTnkjXNrq2xNnYGL9qt4UmhJK8NMByeyC75a",
  "key32": "hhbocir1i19DqodGpRVm99BddB97ncDri5c72sZShKH9WMN1NTi5xBvdFoZMo2e53VUMUQ91q2p9pQaiAo7FZXT",
  "key33": "2DSaEunWxYmiMhjzbBqkrhNKN5wqH3yiwY7iaYEGbS8giNrto9WJpZPNbgtjBtZK6baVSVe8GmPpwcSHNwCaRgfA",
  "key34": "2uiVk1xhY8z7KWpN6gaoTaZCcCWf1NrkTgG8wAwHLr1ePFsarGAdV69JQtyiXrWNoLQ1NDxt8WRzQspn2hGkKYJw",
  "key35": "3Qtti5KsRftMBRvsm7jNNdRDiXTTcSkc31A47iJpaHnNzNCDukb9Hn4itTQAvFF6qfCZJEvVazWeAhLF8RpH1s95",
  "key36": "3YMgC8NcWxRwFBRBTFTMRDjm9rmA7FXkFzwBPgBHyH1gSPkp1vn7hBEJu7945eXvbPV13qpjG8g3u36Ds1PrY9UJ",
  "key37": "4Tm24rB65LcpHp2DSNzcbngxLvHuhE4Pb4Pub3vPGj8k2CCeXPCHSmBqoCyfD43HfndY7zTYwSjm6XbG1L8yVupC",
  "key38": "3ZHNH8C6BEmUtPkwsTYFnnQusnnd8pvpcBUs21WmxEX3UjpDfxz6dDfLrbKgGupPHBHRduWxWf6BWQJHhXfocoFH",
  "key39": "2JqFFWuchz1jy1h99VijzeCdec2kgGR1VbsmnZjVKsRW4idoaCLd3Uo5pSDk5CnFSpT9vDT2zHC97WRga5edtkbS",
  "key40": "4nXBT5cwxhmq3jVdDga7kyFsL8LboqNew7ei2gyDAH2V2Aw1jrXwCCLLc4SZhbqCXh1Thxk8Es1T7RkxGxGZdkow",
  "key41": "8PX1zd65XKAPPJhsbDs3X9kS6Rzq7VnNoPtNGLUjsfLWJdr1pKd5CbiFLAqjANY5yWmSvQafjJVsUtMRRGHdgeb",
  "key42": "4iUBSFaiUYw2sshKU3LbhMr6JRfxUDzCCHFjMLoPryVnn2yHJHJ6fmJRiDtXyZXM7sGEvjqnWtQSPg1M1KDL5yog",
  "key43": "44JbPcsZwgtGZtBCbhXeh7fHKdro9Kyjz7JL1Q9xCA9D2RJy4oe8r7QYRpTyoA6LdwH5fkbkk8hRpxAw6hqrFcf6",
  "key44": "2RR2LGrhTph4WXyKsG5S7XyupNo6dncMjSfwAQm1Fp5bYvnVFtuJsJwdi6pJcinSjaYgB4pZHz3a8G2mHMHWAFpH",
  "key45": "5F3sneLf3YPjM73LW7oMW5ALGs83P3yDbHJyLTwjfwa1FTELcScqwAqUQce4Hz9dVo8ZEsqwY58MJFM1w52tM7eL",
  "key46": "29q4ema167WtLSw41622ykiqLaSqhpVRx3jktAu7wFncWwYoBnCeHaghRAhK4HWXK7qE4K1Xc8RpuPdLoeB5wXWN",
  "key47": "471JZvaBhqujoRjyd8T85dvhEWEBHZ4mbYWgoWPaF4CuBj85GEU3AHdBF7ZByXt8Dm1yux4ifcfPYyF97mhqNPDi"
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

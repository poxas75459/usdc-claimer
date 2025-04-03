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
    "SpK15maN7DKpAGiA3Rj7kUpXFbNodDUQ8v1dvnD97CtJXLaQfD8KA3C6Yu6FRQF623MFRWaUUqBE92635fYwT1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCFfrHGcqVyiRKS59i19mejw4wScMunS5GCEkojqnGoikfW7vVBzaMeC2Z41zjzRwDvzz6ZFBpt5qNxugAFZBJj",
  "key1": "4QD1pBvY2sP1wNqW2AnNKMbckYkKNN9fKgqMcyq1QrdGNqGAh7jhhJCcuqtFQ9dsGB9L8agssV7jh9UJZTg99SLc",
  "key2": "4h5FQaZFskDhdU2bgMjfZUEa3ixpwbRjuTHmrDgVudRLxUFhqE5Ne83Uohi5fEeBVKdab8EADiUaH9yX8Hf5Asqz",
  "key3": "4yHVTgd1dYj5LVywe8HG5qMaLHapQKm2vLLz8ndkHrst7tjQazdhxWuWqZUxAfQQzfj63vvB2P4ZgMYgVqd8nsE7",
  "key4": "HLswDZ3bo2FkuAH6PZfTCbih7nXnBiHaszTciGAUYuatYQAKwwhy7muZ7bsicHVDxG32j6tH7iacQJP1Kxwx9Ao",
  "key5": "3qvVnQM3AFDwVXLKfK8FsoefM6aWjdZZciohqvjvM4vSi8fewdydm9mvBB3AhQMfpnHNnXsf1EEExFBKpLugcWFu",
  "key6": "2x8kKS1mdRqTcM7MUAe1PPdduYei67ZWXAvW4eDmeGkMtDzdpskHhTRyFjRBjV8cyhdDg9XR5AbZ6Mqh7njagT8X",
  "key7": "E1W75kQcEWeLUAqXwQjC8FfjUeG7qPqxterWCbQTXLkZ7iSh5y1BGKkYg8koaMBZmw3mRgTGrFEFfCpztVcq8vr",
  "key8": "5c8kU5haBGMv9Kt7PDtKhTP7xScnWVAEM8ZmR5B5BzTaSXVxxAUaf1cHj16s8J5bKx3uaU33S5CjuQRSHfuB1cTF",
  "key9": "5fw7gVjcHtUAtUYvcocditX2wt43i2LvEs99t1dsGvHcSRM3MXJhirnBEtXSvaST3AonbpaxeZAY2Y8nsYWtfFrV",
  "key10": "NPPVDvXciZV2mgdMtkrhynCTj24G5z8iox9jYjXhYSK1wAtFZQZUpRqhZBJznrmZc3f1BqxSxjsPJEmMyw6pY13",
  "key11": "2xFdKea11P82XU1FkAygeXdj1Zg8eDHBYqQcnUgA5ChYq8j57iTJpTmTBADTyNNPg6CW8muPydBhd7fPzge63JgZ",
  "key12": "4s5WJRxKcGAvvpyBDzCFHhNYkhWEMDzfGqMBMimxd7BQfTxZE2yqTCyTeF9atJ6r12Bnc5fqDxNQLaogoZNAAZpB",
  "key13": "5LkFMDqo35GRVZe8nkYeviRmW4hp6XfdVGb8NdhAiampiDdt3S7RQxfbM57hDyiLAmffypF28e9Ea3ofdKXbbqKB",
  "key14": "42NcdQ2VgCw4Uum1ConULUJonk51535eDTAVE6S5Wz3f9NHU1zE6nzTiQDc22ro9ug2MzGDsjRG19vEMbrNX5YPg",
  "key15": "5ALKbGHKauzqJtzA3wCHbQtQmQCdcWkfoGGN4mhbBtyvJVPvtEcmqBzaMiu7s2HkpYjJ5UYtpJv5rLsPkCJpfFCL",
  "key16": "3QPmWzKrgUne8G9Pg9S2Fibueen5FsQ56ePjoMNFeg9vZhDeRsFHdtKrCTQRfSmao8ipkcmU8zANL9JLBPe9ivsW",
  "key17": "3DixY71KqicXoXzK5rjfWKz4rKG36Hk2LeEy8kDk9afuNp7jypp6vmS86FsSZ7RGEwVEhe36zqdAbb75q2PmkeNi",
  "key18": "8jofT3boTmxH47WkSXLxoW1kh1JGPG48SsRZykdqtyRX1f1XNfLWTiMVDgbxTFXkgHQdxZbD2A9dhpiGAWYCfAh",
  "key19": "tHsaKjVNdrAo3KfnBQUgh1Yy28XMqupAsJR4zZxuTo85dkncMaeCjiss7eH8Ld888QaEDTcsGyYqdxH8hPfryzm",
  "key20": "5XHa8mZeos6V35YbqRakcVJcSEzDkBDauBH7vt6CcXKhiQUWQibfoiUFsNtkfEsVic6ax74PLG5R6P6rdAJZJMah",
  "key21": "5KCsLUXvQUCZsbkjrzBVMvxnTXELBjKGnQ2mfhqwbRt2mtPh6NzUyBMgLq2Cbv7ka9ULSmRFTBfYjdJu2b3uJDeG",
  "key22": "KnPUv4o7K4tgUJRDHxkb8bWukiJWKDY6ZHFWku7sFuiEsC8t3n7fQuyjWcD7BxFxGHLR83yJUL4dWLRbQrdYwL4",
  "key23": "5yEcoyaFvz9spsHZo1D5Bfdg5dUuogLKpmgSNoFswS5pwoFMjDm9Uwjsaa4jiyrkV8S6kdsLCDRVqTHUt9zgR54D",
  "key24": "2XJZSGaSS1nYHykDr5RUywcwHjjJqRxNiJibqZitJzDt6p7DNvXrBrSEq66DLkEiYfXxb235DL9MjCPsDfC7Jv4D",
  "key25": "spxcC9MLi3kQya49RDu9F3fzhyudFLLxbAsss3RQLiQuwprPUmdZigHWXSQ3BpmkcvLcssmV5DdaXi2TWva3YBs",
  "key26": "LoHLBJYrdTH65FnreBzH1CcgpibdH5buHj4q3sVnmWbNXMCaV4BZrn1La9UW32eaCKyfDfoej7qxJp7FZwf2eqe",
  "key27": "52pPrbGppBQ3mv8PEX18yPqhGnGg8B5roZ5hqUMdKUNVdzAipygRFqHJZaq4zBRoar2DaPQXtnUXC9EFhmkuHMBa",
  "key28": "3br36XSsotAhWeTny2Pmmuw6koAHzKTaSYqxp8ES5V2jPGEPuJXn5pzBCZRfrTzmJdtyngYz9f8UFyyhfocEMywT",
  "key29": "47QWxkTLm3aPidvtpnKMai9yyE3H1uSswdA47dMyDKrbvGBbYynJSRXVLzdTpsHEVKn9b5yDNVPf78D6DiXULfe4",
  "key30": "5CyNRSLMEyxZC7wy6CFJaQ7BZxF3usVskuUDhXzp7W5aeBptpfUGWV6yJ9JdJzc1gYwGeF5DeoqYrtEv2xkT7GVf",
  "key31": "61GXDWJXrifp1qtQyd1CiiJr7umS7UkYPskztWA4R4Fi4obMBRi6tZ44J3Rd8CdaeLyeX1iSQwuBogSQMnUp2Fci",
  "key32": "4BmuZ3gpEx7XyApqzdwxtLYV2EHWe9WLis4nb9YhZR5Cg4WfmX8QzzUFzuAGM8Vk2e9VqodpxMheessPxzxDi5DL",
  "key33": "FfdbHfGxL3LkGTvECnnapuigxjiVTcrrKYQnWuo164sQGYJVk8bFAFs9brnBk4nzdodeSv3hggfrosxuTUhCb4Q",
  "key34": "KkHzuh4NTBXSSKnURqv7KhwqysFqbDw248DbqQjNvW95jEMTps9LgAKkeo5L91X4fm5mWFLueqqLLirsxyGLLox",
  "key35": "29XksSDdkPjAhuToHArbQfAoGWct2J33XMoh1Cihbmi2CrfYVeTXtgAh92hE8baXPveSexnQyEsbPDzM5ep1gcx2",
  "key36": "5wFGkMyM6p7PaCu2V5edTCuCNYDpPXYoRmAzXhcTKE4ZSDwKsNTBjYfpKq9rc9Z6wQaDrjrFyKbd1rQwn81YR59C",
  "key37": "v6YTy61pVWsavKG29VdbV5ceYpVysKpoSg9cfvZ8vk5YcZNftXgDbUZMyX6QSzjhMAXgxHAtk7VYiSkoGeG7o2q",
  "key38": "zPzErdttKXcuX3R4rauUdwzNjvKck2ynuybPjTATysQRpX5xCqhkEfaWbfGEKhRwN1DNm9re64EMKLqWvURRytA",
  "key39": "44vXTuDw99MyDUZxeTMT3FwQJSMHCumUYYegoJPUMcHxcUaSmy14Lnmkd2Nf14ohLtonLCcJksRB1TSqkVW94LGa"
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

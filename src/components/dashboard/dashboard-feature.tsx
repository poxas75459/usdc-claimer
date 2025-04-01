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
    "5TRSrKZxWsQRZ8ZirWsfp5wMM22Wuq3ruih8xTxq87mXoo78MM4sYRViGLbXvsLo1BWvGBzVZ8R2udGacfh91u7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xvV7q5uAniFzTtHgV3MN2zoe2JzrBKxpwndMhEM2fxHwLVE6XrZ6eciSy9RYGXXz4sPiGj5BKVKBxhDMfxfmdPs",
  "key1": "46JEfwVVP8qCMynUfWGrw2uYW672pc3TWZL3cPNErvRA8RWqe63ECdMX9qfk5yoGfLgjk43xUFQChDihY5MCohPs",
  "key2": "3r7hKNjBCmh8p7AMhLFy8gNtDnVR7Q4wrzh3am3FNrgXqrdBsS7Q9jkGgXAnLr3Pzthm1RQhBhextDkxe87pSpwx",
  "key3": "2UmbKPNy12RodU2cC5KRSPMZoECzuY229tmAPpuspXd3PX6gffNMbMfGUtF4FKJitif1dHE9q4VwF3r5vhd9MH9L",
  "key4": "zSMXXNjE4rEbGUpy6gEZv4vC1bNsDTphfH1ArzhCpfwCTLUvEhbPPVZ76QCHU1CpxfLoVcfEUPt1UMgtq8dm3Y5",
  "key5": "4Ka7jDKqivBDdhzzCewoVfuavh4FPm6dy6rrK1N2CS1dVnhDo7HaRDaRoBi9iEcxsCPAjYhtniGnUwDAXULcbyfd",
  "key6": "4MfUufw5NXKhfsnaVEFXnBEyQqHXJrtdBCHQsBmoimKyEyZTXQyARwSay8YDaMgFZm6ZVszm9MtRaiK7MFeijbzM",
  "key7": "3a6VHFfLQ2yxEFqbjdhxQWUX64FX59SHnyEv155k1vNgTzo5GogfgXHcHKJivD5jmqJ32Rw1kLTiAzB68X9P2qqh",
  "key8": "4uKvVia1kepHDxQLP67NVowFccFZZmvr1dGRkDUHJTZ1hNzkFkk6k3BRsEbNYmWxWB9sve7HYdAiqFTR7mfVf9CS",
  "key9": "2in89kJUuYSx9dRUQ8oavFGZvZiFnW2SiwAzooCo1hfpf1BxRa7Ko8tbBTcP8ptTcukaVJtBJDWYWTiZZSy5p17u",
  "key10": "2tj6j86xVpPqJpYU2GU5s79YeqT8z95vGytjDU8NSSL7CCTx4v3ELxgWHMCzQXMAG6FhHz8fUjRE2Zbm8Pa6vWq5",
  "key11": "3yRWRB6mBEG79AXsrE2sjXo2nUAXXKiHhRwvihbA3MzMkiMRQRAJqhhkkkX9ADCnUL1Ug3NjFyiFrCzzCgwTQ2JX",
  "key12": "UJxiPeFGH1nhrMdYYxG4TCuprPDAKEh87QbqvahMLeMzSy2tqLuPSDx5ewPbyA5AYEoQB2WJV6UnVPcupxaVa74",
  "key13": "7aDhqfD6zzhu8N7FMHHK6MKYDkNELgRiP2tTDLsh48dY5dwJQ5XrJd6QXEroiejgBFq7uqHgg4vsnMBGjfHze8u",
  "key14": "4SUMWsG1mM8oxssYMC1nPpFECujm5wVxbM2HsjoLqV5vznbPoGe4W7HtRbfmnbZdqgWQFYfUJf16U9JZywXBb3b",
  "key15": "2oCsNnJKuZ5cVsUiLf7hD3KEo6EVGAJ5pQEqsE1qmdvinoSegS63ZGgvhKVJSsfpaTqAwmbaqbK2fhVEaqPZ8nFn",
  "key16": "25YTqDpXLWUpttRSLndPyfsq4n3YNRuV7zgqQogvDSu6Ha6oNyy2LtWTe6TgSYUeMbXjBb2ETTLeMgwbq6454d1o",
  "key17": "5W3pvrtrvwniGS1vREGvte1imQTXyXb62FFbjxjxKg1ib7zbrFE3rm3L94L4K4CRmX5YgX16XSoF2Q3fchBzUDcc",
  "key18": "5QnuxDJahrsFhUvy5cesyBt2y3y3xhk8Hcn7zNjVcuLWvqQcHzgdDFvcnLKYeeMHCMVBSioQdPD9qTjg1JgosWwN",
  "key19": "5jetY8jaK76Zy9eo5Rmrf7euSL6z41yFpGjXEjuoiTHspGZFZc4tsUdL1HTXUu6zD1SB5XezkcDvPfj7Ni8GsEbh",
  "key20": "XpXXucHCGg3NtDv4NGAYMBZaDYy2zWHaj4PBzHuZsyyQnermcVxvPFVVZd9ykjaSpVuJAeFTw5ty1WHWrHoT3bf",
  "key21": "zvBUYcypE1BUWdq9ubSDe8cLPDR77AXRqNFte3GA3Gz5aVVRUeRYR8iHwfmTReQfZ769nmMSeBNhkGusjbsem3x",
  "key22": "53avNNmu1mqqHBPUeb1xszBotDur4M1sDtDYH3YCamtf6NkPcu1HfxrxxXGcmp3BUZebnM5ZdWXW1hAbPVGxmDGh",
  "key23": "3gNctLw5KTeUtkoJ3xnbCodf2dRGwtKx7iG6enq7pDTWyVmnsYeTXvkszFLAZigECEQPL5sDpnf7nQbeDMjhufMV",
  "key24": "jbJmaZZxWvdCVg8ydr7bkLJJh6Tod87ourpxQiR1aDY7MbT9KF15GXRjbmv5Vx8EuvgY6uRCzGCSzUb7PpqZfcH",
  "key25": "4nVd5v9U3qKFCppxQkwWV7xU6sUZqcr8ryU4nXkF1rQrYRG2oFqQoiDP6SR6po31X3Lv6nXen6ZAFjnmHMT3mb7r",
  "key26": "56Fw7Cd3t783Pn4MPieXhQDBS4eJRTDM23HKa5NdAWsEvjM3cmQMMGmBXLepdNdm1whwbbA4JMn8xhbktEzGdYo1",
  "key27": "MemP59X1jScFFPn2kW5cVKRUKUcJZRqWqY6LUsxd7vFVxcNhaW9N191MG7qkaD8TXm46KZ9uEkYK1AqZgDGWkCm",
  "key28": "2HFy1mXDV6QvCtCbD3cmY4ih9NELsjdfteak9wcR6hrT1gJEwPDpAPAd8UCKbLpDHGySZ5wYRaSHdemzooc4qaZ4",
  "key29": "37LFdfJNEVXYqMmpKTyZtGnMypziGiJGvyySBFBED8BedQj3eWQu9vAc8MeCVYGTbeSsGNddUnG4Ngbq1MmqKo4H",
  "key30": "4UyXR11mXtCDB68tsiBW6roRZAA3ufTjwJpD8pwuZgSQtDy6Ut6rJ1NK82ctpK5isNNQkEcsUYQmnhDia4YRKXiN",
  "key31": "63dRQJdaW4CPUY2mJdjfdioydREC4TXtFUyMbmqSRiTA4w5bMwYeKKpFSpdN1LosM2R6MZ9qEJRS6kPe1Msoq9iQ",
  "key32": "3kJV6zK3VF1VPrdnsSx4RdjCVMW1HYtUz3ty3t5UWzQ7duktK8LAWXJC4KVK13ddcSbjg3Th8PBM1h8gqahehWFJ"
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

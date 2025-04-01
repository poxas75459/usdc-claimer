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
    "5ZYuyumtSQJNrHbNMPG8XJA5s3eG7MDu375HX4E9pwURo9QEBnyu9oc7eakoqDEG6MX6Chopg5gNoZyQcd7ZNmov"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xaUHmGbnunk4UBLnVeBiasZvNnCLdkgDVwz8hieAp6vMv4e2MCTqgrQVYP7TKVSSMWNiJWGQJmVMFFB43AaaQkF",
  "key1": "3mizy4ihd4aSUf9gi2t8ohQFWPcwundwg7wyUkp59zjkSWUEtcnmx2aASHgW13b1GxdHeBiH5NkLAPEcqMf6Mz5S",
  "key2": "DUppFa3NSuiFwZD3LKNCJoQSRwq5PruMsYy3XAC76gotFMmNEigpznSAn12QmvFQQKczHSVANzgUYdRS2b7175F",
  "key3": "4wvmG1y1it3eWT7xgP7gx9Th8wBvwHd5TLBezDTm3Uvinhv4gqU7zPQy6VAhsM62C5K5viTVgSt3e8setQ6CiUCs",
  "key4": "64fG1gWNWda3e6FD65CmvjdxtnzVoqcKteVVpHEcBcoD4Ybu2spfhanSqUw6TcwdFsJHXL5RoJre8ofzh9Q9YCXC",
  "key5": "2ChXp2dcRiEL48xZjfuucU8fdicJCxJZKP5V5AbkRyRG9L2GFYPXyvDy9xfwcYPuKBG4GjzHdyC3BZniE5htHiEg",
  "key6": "3Xn33kreGdyFtSGhRcS8rFpwUjqzPouyTDw1ywfdUBQjLEHDH2SibY9K9LjNH1j4J7BF4yvcAx99MWN5gQyxCbc4",
  "key7": "2YusGAMB9y94gXQQhqhQcwcSPvN8WfkYnBKw8G6o4u6TAswFYEazzgyucqVpuJZR8C1k8TSrWx5PcTeXFJUL12sL",
  "key8": "44bRYy75a1i7jozd9JexfsvnKwTexKYe3Jq6omcHWfxS1YrcG7Cxquk4K7vfvZ9RJZgpUk8kRsLLhCVw28t7PETN",
  "key9": "4qKQY2D13c8T9Lz9wzVFuwwk8XZ5Gjtht3PkxtjLqHZWnfogyLqUjkBsG2WMAkBRAcBjjY1QTMrefJLtTSwxF2Pv",
  "key10": "2YRMyaCeaNiWBvMorWwEvfUUZ8A5MfkFy1Jy6Gs14yfPbgS4PojHPzeQUaBnQXP2igXU3WdfTwdgkiZCaHUciLgm",
  "key11": "2QEAvPf8WuhwZHFwCzLSNTuAvSstShwUYmu7AtatvNwMBjqhLv91sjGLRTuVD14awW1g5WQw5qHMe6dEvZU93QS1",
  "key12": "2Bq28EV74s7qzuhJBzJgMCuVQwgn2AQhcx5Xa3LF58AbCUBpQdbsaGiYCSkPzCi9A8P867xMLSo6DzUyDp31nFsm",
  "key13": "57p69Y2Jiqu3go9psbumjYgKMyQDJSpZ71ALd49dELxzGsxw8SNpTAXwmUTmuK1xCyxSKEkRGTqJnHgxeTjjcKBr",
  "key14": "34m8PS8nukvQDgXvyvky8wps5RKXdavZb7tJucXmTP9g4GmiEZeHMFtFQJ6DmjCMTGLnbu1ftXiDVBbBCtiKCEQg",
  "key15": "2EM9gk23MkVd2JjUhMr6LVT1csaHBUULev4WiT3egaG9tUFxfuESGPCT5zMAkzRcYdPNNWv8rVtvzdyLmtyZhxFR",
  "key16": "2f3EksNcZn71hrzPazz2hAhaNENPtjwe6QTx3DYRufmpNz73ivF1Q9EZwtA4aDfPTDEMvMQKZNA6X3FY8FprXQvM",
  "key17": "eWVt6j4nf8qGHcz3wcQu27S24iuoZjTVF6p5sppYPnzgiZyVmB9QFsagoQxiMmaq58ZC6K7eWc5WNr8tQVYE4E1",
  "key18": "46xjr8bkjcDiX7RznY1QD8keut2AREgwTMrwwRoCmocMFTzYaoVcAKc4zK5SQWvgb6Tq6C7EzAzz4YWZWeeQmmT1",
  "key19": "4b3zywLddyw8wRoUuZzBqgV57mVqKXxHbjqLS5Tm3hNq5EkBpfH1AXK9mUvpdtJJQPvAasysCVPADHJfTnokp7zw",
  "key20": "4b3jUckanzJK8UX2uD2jP4WUB7KdsthD88Fh64xByx57rvoQRGLznPT7MbeixGGgFS7xFhxBzYkY5k11o9kmSDjK",
  "key21": "2tmoxJuWkz4uHkxtuGbCi5fx12FhJ1rzE6NBtUxbApo3FBzEe3346kEBZ1oHGJrx5wTBQmfU2Sf4ErMT8ZXtqpXu",
  "key22": "dXjvwrNGRHajr9doC7skjVvr61XUgctng5LzVvUzhuJtAxmZ9uuVHAFGwj4KcgNRGdbFqCyMNogVMhsibrQT37F",
  "key23": "3ZoPMcHDRGqmdHXmNmXD3nXuKRiCSbeq1i5QGWo78SoUG6ec6Ct4VQ5xTWVS4DhnmNjMbwuCxGbW7yUqgPBPSpBG",
  "key24": "49WUgx6F61iAzV7MExGnMsgXa7anPp2fZcXhuz4A6qTXMZamgNysMPh2SgEXUKpShZiNcjgJYBjBxrSErvvTxkAh",
  "key25": "23hxXc6ZJoMUq9HyXRsXcqCgLzjEZQn7ynk2vR9s4qFsfiZMEiF6LxFxBP5PU9aRhuj51hbFtQp2fEehjYmsqU9V",
  "key26": "3GssYuxDHtSVVzB4spxqfSrZvdtoRPQmNoTxX1Nca8eyHZRJWDXUv9scaEQJWuFEPMtMAVLLU6zoaEGSM2oo7iok",
  "key27": "4KNxwkFpUwb8m2YxLiYGKo9nGEX1g6sUksPXkCYLCz6aEqRkcaR2WDmPHX6k3PBBHJXR2ZsGHahCyE4CwsnbzDkZ",
  "key28": "cHuq7zYJAamEbBpVf3Gotn2n2shnAXXMdJfuifSFREoTYPHu4Ng9FapEJmvpNYaPvscQJs3eFW3xTHKtb515fBK",
  "key29": "66Hrkr6uqoxHvKhpF1qJVmq922TZnjJay72SCDw3TwC29bJ9tQYuz4n1xYuRU3EVoeNudmjhq4hw4DifC7rpFWd3",
  "key30": "2CiZUnShZuLgfHH11R5cMsEQcdESYJeJZpBV4FbQNDZ8rAvTidn8UKkjgZWG9X8YWkM9vs48pwYB83pZhQvduwtP",
  "key31": "2ChfZqakDP4baVMcNFXLF2id6SRDNymxWCCXw4T7uAgpRd5LmLkABWLanh5hkrXceFmD8NtmxV4akCAF92pQxAL1",
  "key32": "5kpkkoU9Naoy2fLt1YVFEKrv2cNciSNJqscB9BvNFdQujtX6yXTCo7yoXNwp3iujkTE9jwQ4rRv6PXTpK9bB4qc6",
  "key33": "2Ce2uWiM3ZKut5L9Cwk41Erz5Hz548VX56La53cs4VRY1fBAf33eV73wVe9UMGgiEdSK5T8Wi2LTvapQUTSH5FCu",
  "key34": "3FpUwhjRpfhZmkgpYYGLJiAMCAc5xYDBr8D3A4A7SRpUs3FoUxDuG2yH9fqz9GzKKeGB8x8qL7HgqDzosV1CzZwU",
  "key35": "cduRYYawPrGLX2au2r2tY25QiML2RSzsLit2cWVwbLD3NSabhwXj4TfqtjvVhJhhBcAjkNynRn11hdFHhuoTB5W",
  "key36": "2rctvfmRkH74ADHdAWxigSasZqHU6HcZVKfLFiosg6JoFLnipUudp8vu41dxS582kpkqQDsa4atLW5eajC5NfF8y"
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

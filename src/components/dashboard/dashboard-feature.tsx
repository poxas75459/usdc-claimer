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
    "4dZMaiYBhNQ95tu6Pqjmfx5549EbqigricWZvD5aGRmGzZBbHcYs4poW7zucBmhHhPnyZkfqwMpDnUeJpssBaaG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThsKqby7QDwT36y5CbHBiLQqZpNepLBkoCY6GVvR6e1v6yjnzNReRHPsD2zDBQe1eWeXkwT1pWCDK1EcguuHynQ",
  "key1": "2ofyHizHtwnA5fJxN1X2mwM9WZU52q8mfQ5pgRUxd2EJN94YVHj2hrA2tCkhXoDZET7wd6u1967LKCxFdevMqvY9",
  "key2": "3g4Kc6rL99JgZr4PNgtFCq9H71Y5e2g5g9fsZ8ih3D9Hy3ZDUsf2wjWoVa9ZieTPDcPcs3uZZux4jyxb9s5ULcXd",
  "key3": "2xYJQ5S6ZpLwPbHnAdKvvtLuCnpHZk5mMMi3no5UwxN7K2FMquRUyPweHddR9DkmwRQd6SCKfkfS2UQYBVYq1ANE",
  "key4": "3uydefjCGmrxvx4QWZbq3xmpuAgirQyGa3evYC9WsP6C3D9th8mnAHYMnAnWg9qokrwVjkFYEaboNPCbuN9E3rsN",
  "key5": "4sfrUMskGGLzJqjwT39U43NQutM8UNL5K1Tk3i8q6wxCBNaSorPWiskyqMsYZMgqzASM5jyA5tTFHBLLpd17NMmh",
  "key6": "9snwZDcBGsRtFTZmopADULn7XYfeFhntdhkxi9CukAsVRALvHx1YSrjZeKfpvtqYv1w9dLyfLSDUUTRDasWbyYs",
  "key7": "5JAow4vf23px9bem9MFfLyobzWqTn9fYttQbXXh45tYh3P12qGtsgWEToMn7x6YtEHGD5aXtzVgiVhRCPFBBQ9MF",
  "key8": "3DYYVGAKAzrr1hjRBTk9XjVgXiPajVUZBzokvsCWqmMXcY2h7TJPVu2rcxzLWKLSh1jPcpPCJZA1uhKPqg9wDcXQ",
  "key9": "5UTbdVPNHNGG6BTQjCuTHtP7KbtBmx36bkrHdF3jyVsWGyZ89PHNvdqJRDticPBHSvErPLyL68iMPjpKNJ2JCWCj",
  "key10": "348Zah4mzMeMth94AeaFBCwmTSoxd6dYsHFn3mcrEeCxi2zGNEqyC7a9Ay2FLbJUnYqN92RsVdFUjBYRWV6Pi7kC",
  "key11": "3kVuEhuxEqP8D3dux1xydiCw4CFKSEDV5KGe36jvuT574KDMEqtbXuWEsSsJ7TwvcRbeE8UPGJmcYLwhEsofFwgw",
  "key12": "VpE5bpjrnAEswTyGJX7Moa9WYBZQRXiZPC4HfiHBBA41GMYC37ytbKtN6WffTznBUMxVxoSFZ2gsPAJT5oPaBkV",
  "key13": "3ckMDvCs4cfKX1wVnTLg89ExBdEHrD7gNdtJxjWdaNcvhJFZf3g9X473CzEDgS2sYYXYeia2uoNzqEqci3Uxg5sR",
  "key14": "2F2mLb5Zm9shZ9L77dwnFDRPEwENNU7Ge4TMzansmqaYVhLFVcaFk4kdUemFfD3tRuqqnbp4STqhYw4Y1XfWqr1Q",
  "key15": "3CywMGu6YN2tu625UbziszBAP9txeEDXn4irUVVtWn8JvhUiccpAyM1fEiY7bcojFAqzwYpYCkEdPrwsP8wD99Th",
  "key16": "2MUUgRxRhKszVgNHWVmKQVx1ckwyMq4aJcXyuS98rcVkFBNKcv4pcPdWHvLsxYhUZkRcgWxrm89VX7e9BdM9hoJs",
  "key17": "2bRrEWNa6qMuBfC4fh6x7Z6cPpb3KqgZXsRuWP34onKAwv3qQk19HdcGjdfxzSjzqHZ1fStgFBUXUpQ173pig4rc",
  "key18": "3fyejNYRvcdCefZonCPdZE7jBvrFGu1QiKjz4rwkih7r4ituvq1R7GURREubje11hndpbVFi1HqZgaDYTyDGraQN",
  "key19": "3rLA6KhHtyE7fwyhuZ8S7GGLeiv4EVKY1RTFWcBucAqDTZCJQkyMHuENKDGGfUayaWVcEUigJH2MuwiLC4SSPPq8",
  "key20": "2TS1xEyrPVux1dQfavB8AETUiPDh4Y7rLU5qNViiiJe11t9ggCfaPM149GHNi6tUC7Kpf6ZFRc75iU593moEqGs8",
  "key21": "5yyexXjJPyihE99qP9QPqiE6VUiSyNTxY54pRA3FTzBpft9dF3uvsCdk8KRAqeb9bQuDGWwgxB7R2737LKyvzWB5",
  "key22": "5QCK7JYq7s7FJ22AjgDi8saacdNwWzSZmriWa3TxS127ckdcnaojgrNm1TPYH1S8EcT5MQyA6McbJ3e2i7onjA2L",
  "key23": "5Jvtai58CzyGE9HcXGU4uFhHn2CbLJFtsTLEtSGFSBpqWxVG4UCg2kYxX77xzGq8qzUYG5xxdjhxKp1KtxRohpEj",
  "key24": "2MbN2GqQRWZTAxAUAx5JkifzoX9cda7J6DEZwV7HaSvoTLUQQzPAx857YwCwhyix7LFATvT9idPqFuSHK3iDA9YP",
  "key25": "aZbRW7Fr9QgGJDn3pXhj4rHwNkXB1oEMR66LcsN7TEeG1wXCfspMXWMoMNZktWZZS9AHjBgXMZVZ9B51TXuD4ob",
  "key26": "3YJzYeBEXgrWWgLNXLjyb3ggay3d42XUEXsHvi6HbMPTed21f5NbXZJ6aC7xBitDmrAPn3CMGC3g4YEgrUb6LNtw",
  "key27": "35wzQJWztrSog4pV5JYHvrcxuq88tZqq4MyNQw2JZiddt1DM4r2F9eVwcotf8rPwZZMtSALJyRiBvqDgvZJg17DV",
  "key28": "AZrWhahHA9BkBu6PMaFcBbHCLJWWPo9RnPZQckdUKZAqTHEmmHH4GiuMDbq6smrHwbhCw7bme8WJCDUc31ehahP",
  "key29": "3R1mpAZ4eRy5PzsZ9bBLZLX8rRQwEFtdFZxmH7pBzFE6DSnKxqWkyDGSQgj4tGjQhaUGHx1P4boCTxUAQwJP4ttC",
  "key30": "5KqUGbisuzkyxXzgXj2nD2a1yjyDuQ4sW3g6c5hPebXmi3d8QjMaPshEMrroE49uKKn3Vjnzzw5uvdUXG1MhtuyF",
  "key31": "nsAE1rFsJ9yZkXg1igjHwcHTdrdBdMx1PtPeqHKXEDCwk5BXErFzZAkzYXnS4JsBcSN545kEcoopDYM4cG1zCXh",
  "key32": "5knzMwn3QRTaBEkRz7k92vdSibPnWV6o7cGjKFRK7RW6sXEE8KPUJwin2whcFHGpbm7epoucBPUJAqHHhihaegZX",
  "key33": "5m3v4Q8a6dFNZKWKqf1usA3hWp9VjziP5TsSEvyuWKRomst7R8bMdHWrJjKLptdH1nJJdHm2fLcvbFXUzhPCKWWk",
  "key34": "2GDkP6qvToxuce5Uy3sjjRCSpCXwBTmSB5uwAMhHPUatWrGGaNSMbSrtd9cSgEPwWiaqidbSejcNU2xEpASvgHr9"
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

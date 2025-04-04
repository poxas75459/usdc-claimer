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
    "4irBEAhfBZrANZs2bQjq7Kn8ygL3SxRswiRz3jhycUTK7EDKMdW8Vnz9614cttNTHYEmxavE2PEi4sGYKapagSAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ffXQ8xH4G1LgsVP9SSB64cdsoGxubMGhrKKMobybq1ztt1LJi14oMwhhkC4TYbYjrfF9hJ3eDZ3rFd5zPzm2BN",
  "key1": "ARTaHAuhMbs4vDakYTKxNac13NYvzzYTUbgcD8q4T5m5YqJJWxZx8pjV2cjvz7igDXiTCfk1mRnsKbZW9N1QCq2",
  "key2": "VRd2DhBu5RDVZUMUXNy383edfCwdzSrPjzE94LSJEshz6jthrmXNwrJU7kKk2Zs8FfY9fXvogNimSwC1kzjvqLo",
  "key3": "2iousdrFpKkyjW1Gg7NBmm8ZSbgZQUSWZvpQ121gPpbzE7xFDbauPFd8w4esyuLsXpWaSyT2uwyij4Q8uMcURRYz",
  "key4": "sk22sGs4bjv5kyUeUK9oE4fJYwYwpfzvfZt5EUcZvkHkVFaz2VGANxYMRVZXkZ4YhPsLFg5NjmRmnCsYF54oQDi",
  "key5": "3CXD5Zv4NmLVgcr2dqBmMnzMphmRcR5BAPK3ciHdF8xtuMykuGo4bbzuek6sJq2pzbUsqMiax9F5CjKkwYquMJ8r",
  "key6": "5NxTvLzLFQrHbt4frTcVAkaWwUoKTUJoKTBPypPrCqAZzj8rQNLLVpRopC8Y7EHAfAzxJpvsrWv8UuxB1BwuLHqz",
  "key7": "65R42KeDwmosV1aYw5CKMtST7A4BrbWmfCuX2R1Hhhp6bwm1h3fyYwVHvX4U2VhqwvWHVg79owMUFWn9Lsi4zT9B",
  "key8": "3GdHU4yCMEHdqoC76zu3w6zQZgf1QJvTzKGaWtYxZMz3jAZqi79M5kasgqosgqzCbSJKJ1L1dxkCaVCU5DAgKtK2",
  "key9": "2DiYqby5XJQU8285n7rJasUiGypHK7D9zqouK3zyxBvXTRZGihamB1j1WGt9zP6CwAVh5LLTUdxVjP3MfGCyRy89",
  "key10": "3P9SCpaHESf4dqYmkkdeomnWHd3cDdXev3qspaudUJxU1HAdwYtfGXrVQyHbVtXXEcHsCcfHrGsQzgFDJzVFtreT",
  "key11": "5E1aM5GpEhbvbRaKDgx7ZYsdbta3hJy56NEKJKyM25Lh3QYHDS1wZs7oKwgCFQZVju5aqde9deRvUQFHboX7ktFT",
  "key12": "5jScBewiPM4xG6LK8Yqs9btTtp9b5cz4pdmseLF9RxxkntJGoQM6ufM4aPKse7SP1mWoiEHYp9ioUMSfKXfUCAPy",
  "key13": "5v8JFxfSn2xoixwaNhhERefyykAdQWa5uFKsV8jMYjTqzXYZwcmq5kN74V6fTcAmULC4DJCPv6aayRU4VJnn37Hi",
  "key14": "54Pp1T2XtUT24GFSKejegzyopohic2h3C4W5XrA5Yenb9SwVJD3MyrLo7YS7AkgQ8Tq5YgvjuDxroCAfHaLQ8Ljd",
  "key15": "hps1C4bGq9iaYAfn4uy3B3JtyURTouudpSwit89ymMqeRrRwoqg5dpWxpqD7B3161s4aCQ5XsP17GSUyJfae3fk",
  "key16": "5kKJXR4h4GBJoTJ1kwduEf9XxMQk5Jyn9bHcqH1ZDNcAszikinYvQsW7Gm9oSy87S4uHan1dSkUg3AnXQ3jcXjtF",
  "key17": "24WNLgjBuBG4m3bhpMpMHSDiZpdnxCv7FRWo2Cy4NSY9wBTbbfPMjmZ7VNnYo8hf1rMxTSrHSecUhCVSENkZx6MZ",
  "key18": "4YHVkB4E3FMMgwVoAquLjiGew7WRr6iWUmeaHo3xRvidxNSLRKEprj6TKvT7cCkj1PwtoTGFXd8EFWMkx3CEszHY",
  "key19": "5EGB7VBHMZHfERLciBpR47n8eF7hfENYaZh5qog7ZyxZ6H7848FHrrskaVLEzt4hg2a3ndU4rq91YjoY96euCahS",
  "key20": "2UeRrL12CAUDxs6bvyH41RxTXkKMzL9Wko2FNak2bJy4mv6o61LoL2ajt74KzCU3NWKEfZWtaLxDfxBzwheZvWUP",
  "key21": "2iHB3qNKLz9w9msmHkGbtPCzztYaePqN1p7y8b38i8aNBDvtKZ9gEt6Zr3GPPoTENARj1ZGpM7c4KFeGVA3RL8XZ",
  "key22": "86Tc8GMguhMxS1ds3aXEv6TxNP8BXA3Mb5nxfjneDhzsuuGHKHeQJdadNs2Z3iuDu2AfoU1pLCpTpZ4NHRL6ERn",
  "key23": "4LHbrTSaNr8nhxmqirxb9ZB5EwPZmfWEE1taKrTttWMEmkSzpiG31RHV5ofAjWUSr6TY6iBe2s7JZomo43xGwiqF",
  "key24": "59fYBozvPhozHoYMRmi8xVEkqX9titrivR7n5mre5yxz2cQe2nFjU9HoJocBScshSTKYempQbDSC7Hhjk9ceEWUe",
  "key25": "5EkjfZncRcUtSbVLbyBxqPAQFbyrBBLsZpoEKdA1m8KNgPrTGGccz9d4w5NtiS3aCM3iPZL5krVXjHdK6ekoYWw4",
  "key26": "4de3V8auwBDETm3jn4mDpGn922dN1Gep2cWnwuPessMmmLu6NxTeSw5KiwaoFMdDhesUoxQaFzUPVnJmg8HYPinL",
  "key27": "ApNW2GsiXHG9iBy9iNx9Tzi2vDfrH923NeueD1gD7RQfgtARmFDoC6LVasZFaYafsYsf46zzrD6hv5BpmQLkzvB",
  "key28": "43pu3kwVJ93jmHFbzVdxyX6ggMu8BmveBQ9B4a786ETaACgpe8MnDW34qGPAz8uG1QoFTCeuDao3xT8LGkSNYapj",
  "key29": "3SxMvtYqdVGKrsEbDKmeHE1GMu3mgUBbR93nG4eSqnkceWu98NPXScYe5TmFbaQ6NVpNRbzaaNPNqKvf3yy4dRHt",
  "key30": "4dnH4Lnr3fb91EZeiuQK9LEL4dLxzFJJGYynjd2B4VnN2mwNy5jg18JTxNHeh37MwZ1fa5nEvS2DBNtrb6URcxf6",
  "key31": "2fRSXjstkowgP8Y38yzDmwio6afv7UfsFcXCNCKKmpHB5eVYzVzTpvsyvUv6FKvnqxPqHUNXAmKGZUVF6zK1L5nV",
  "key32": "n4uBQG5rZywyHwZiWvutCgk7KsRzRcF1Jp7GtfxjZiELgcN9qUi4UpWv4rXoLr13dciJWpiWbto9MYNhwGR8CPc",
  "key33": "355cX7KK3vbbuG3hAWJ1pSBFEWDZ1DiSRDTgVjdK5CpDbMRddYWiS4Dp1DHwxsgtPJhUpBZCSELHqkUvzgqnsNEj",
  "key34": "64AwoTuK83nkbP53dmPLUNUyTdzS6nGiDad9skeiZV1WzaxgcGeaavn3Ts8MJMBHfXefQZ9mZzTPufYRaRXEU9FM",
  "key35": "2sT7Lu2yR18HSNK4Bffg4V9J3AYiCaWTiesAFED3E1rXYAXbC8C8xWojQzuJ7tKjSUfYLBJSbBcwDSaMVZFoBgoe",
  "key36": "BmRp73pDeQ5oGSwpggy4MH6hLtmufsm3PqxmHvwUmPQ9t8XoRkZv7WxqV7SgNpCyBN7APnmbaFCAAa1NcwekG5u"
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

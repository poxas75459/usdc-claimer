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
    "5BPyWbkyrVh1eJxXym7mkCkUnuv3K3W7VUnpySW3EwFfSD69A8S1jxTZ22j9S7CtLnTbqMQraSDcoqQY2Y4bktLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44GCbaeqzkUt1dpb2NMD9b1HdwyTN1ecn4VZcqkkw2snNUmr35btm7XpciiuKoqgnWXB6qoWmRK9ZRVdgs2192er",
  "key1": "56XztRQJeFKyrYkvia9oaxbpkJ65cM4VjboFae4CvPjGBHASP7xNSEwyiqEVn5xV5brBsP5uEsN7yVYRm6JFBUqs",
  "key2": "2yiDoyS1W4YdhvBj8yLn9qK7J9zwA6C98HXEHRftHRvvVmya4y5C2uNkveuyyqPK8n3iFCYeZn84JSeVmmBA2dss",
  "key3": "zuM5ZBYQS44vnk5XdJyx9uxW5pys3tYC9DX54GcofZH81UWkbeNHbNmvATvXXqTusqmhQM9PQ7x5A1AokMJZWDM",
  "key4": "5R6veViXkuwsz67Uh1RiwNrLqnnDZm2xZDY4oCTQFuQJ8d6Xq8paPbeehDymSesbsHNw3zUTuRLamf9BZzqrBtVB",
  "key5": "2SmEPr45PdHjTLAcdSSLM6BnXKhwM5MSQxZo3kE4Y3py5C1VmmUKgwijXVR8RhGiTtwJm4UuSaR5CruVBiDksxgT",
  "key6": "5vteApWeKcxm4wM225i3f4mtVgkhWxwaduUefVgjQiuss3KqMXju19rTcqtfrEWWQEdVhxtonfyJbbTDaVVaS5oQ",
  "key7": "5JVXYkyBr5gpjQ6tDEqMHvwmk8j3C8fpjoaYQ5EyUBXehp7QeH35xrdrDVhXbkUjC2Smp3Ymif4q852GwvNJnpsP",
  "key8": "4BKbmQVjb7BzpJCNtDdjcj9hpagL1h9ivtSVFssz7A2r2gRQQgeeuWv9ejp3ugC3KjPX4KVvSmLGRzDpehZULt4p",
  "key9": "LPeCdTiKSwTRfwBfmAoEJt72qJgBC96Ch6VQN3tj239VagdH4ttqZkxqm8Xv4Nn1NBAzhcadNLUEcRK2uToemcv",
  "key10": "3MFwrzwaygGEyMQSyHTn4sedcBvdLi7NNKYB9J89d6TntEdCv8dAUv6FbJBWHo45SgZPzeqS2REVYnS6EqJeQfSA",
  "key11": "NWzqbomZkmKkSigyP8QFbV49mdQRXcv6mQzJ43te1m7xe7KfSBcBkNkJzeqjW99ehCM6jZ6aKo7DPKw2x9u9CKg",
  "key12": "3MXi9PhefAJeXwtWPG8fd1XqQ41gxG35NbJd69sfZ9yCPoF6ASfrH6Kk8pQTkSTDKhUdy27tPv9iuvFoDdMNGKgt",
  "key13": "2NJkhDsPc7V2KxUhrWgcrnmzmcu2TWsKwNt7Jty4vUbxH2bfbwVxG73h86FdQVzLeKJHV21X9HJYqrs8vGhRooVf",
  "key14": "3rqWuZ4SSXkFDAKCxGdcS13DbZymcUwGerBfvCfUMAkge9FeGxsj3gc4jSSoAByRVHsV9kDkFNdzmTbpk5yjuvSX",
  "key15": "5HUR44WH2Hf2eCfYqUucY7yoM89tNAHteUAozWbfrqkfKrxdzZXd3SRPRdiv1RBUFQvRZ8533NL8c8Sc1AXAiwCz",
  "key16": "5ptpXMeixyWUP7UNxkZCX5Bmkfc3zaubgYN8iJFeK3SruFJCSjz8Z1HPAtiAnHf1PxFV9vx1bdCzuBysiJSYLm3Q",
  "key17": "2kyxw9rvHqiLkXrtUfM96tvGTAnqTeg58ses5v4kPa3m8zBto4NcqMHzLFcUDAyrk6PXxh2sftAd2z7hfA6FVCpm",
  "key18": "4F7aJ1BEz4ihEqTscvXqKX41LSoWVHzAVEU5vmLRDTH3iZMm1HA4pmS8PNSHujkTDqFo4NqWxfyQzRovnGKhggbQ",
  "key19": "2dkyhREiNxRmB52hLxeVu9ZwWddwdNRkFs7BvMuYaZ9aegNu1BNdK2jnM8E9oZKyYFDBKFhJVJBQQZj2aitdxq6q",
  "key20": "2NyDeK6hxxsQh6rkrEdP5oLrbFBTqsDvQsP7MaB1BLW4biiMYm2drAmVzp9pqpgoJMR3UoGnwsQhPcJ7yJjsQunZ",
  "key21": "2GQ9hiBStBcDzUmKhis2dGMcJkiFf41cXBi1EVsVuEqoh5isHcRHhuKCCgwfEgKQKbAJfvKLLLxmUryQ5mBffGqD",
  "key22": "2Quj5VJ5gmo9ZCNWzzstPXwokCZwv6e4TKWmbNTkE5zmbXNzgxWpx2PpK6tJsvruo3ayYxaKcZU48y2r9uzSQa2e",
  "key23": "5eBbTaZuxLZySPnLjad5jeJ2tqaU9S5r5ZbuZUBXv9goLp6z4mjVvAGq7Lkbe2BZGywCtVrMpJCZabd3w63AECMH",
  "key24": "4gHDmwjKPDNVuVWaJ35U1w4MCjg3KHLjKkBxuZkD7Gc27nAvbgEHsKNewbNKJn2E97EeCi8yr1Gn6U53g895QrQv",
  "key25": "3R8Pn487KT1gQjcbQW5qroqiVZTrrvnGo9GuJCPESv7AkWu5hLjZjqxLwXHQQduds8TWCi2pHxR88kqTXJh5JJEw",
  "key26": "2yzTmGPho4TKkHUJEQjXQEHTX4R1dzMzhrb6X6qX4eF4VHXwqRYF2p86rJsUnUC4X6KnYGkYcd94ZQyiN3UPNENK",
  "key27": "42HSy57hs8yjVHLPKLj5kKL2grpTL8hEHG4TszATpT3Z61vBrqcGnU5L9vb7RUaEzd6xZHQDa7SezSJM547PbyjR",
  "key28": "52dNgpETqwokmZUZkpLcAdm4ouEgyNtWpSpRs3beZGH2YqeD2MEPumVvoAUnBCiRqgXmDFANte2RLYNvtkJt1hgr",
  "key29": "2xpdfMHRYc6QVa3hkxMtTuqbngorAxF2TcAnjfsEV9wVCDcuEzbez7dC1WWgsFVpLqKhmHMo6Y9KxZG8YzMiQTfU",
  "key30": "7rhtTVohpRc9Qeoa5EBrPdhXeNUeAFUaNMPnXpDV15eoGtCPhxKKEU3pnq7AAawhc3N2Z2pbXRz6uaHVzpS11wA",
  "key31": "CrVzKqB7L3D3iqya2kYZfGgR8imkQ9fNL7j1Szx2wnR4jfwKRSyFz4jVGARAmgnx9RHCGtn7CD9g9fCxa9SawK5",
  "key32": "66dPf7iyAzUJXEqANAuwb3FaB6DPiCQEVktocMnYHjwXmhyhEkiVvMNGqacqqccARxBgUX35nYTKPWCL6XrZjUfs",
  "key33": "5ceM9GKf5YbrAbPJkqU3QZMjV8reoqdY5NRno7JssV5EZc6fdyLX8EECgLbKQUrAwTq7zJj5bWQjLcWegE7XKGgZ",
  "key34": "5ErwgQ8YFE268tpdTBJNXLjUZECcLy5FYyMogJsnKXoUmebGEBmaukyo54YAvieVsrfRE4uEtFTSEeq5XM4bgsaD",
  "key35": "2JpCMynajpiS8ukKoiTbRUTJjgPp6AdqLSahZ5icnitoZPyGgS9a9r4gKEfLGxmdmrf4NyAk3GXtfhiGHKcbYQxT",
  "key36": "3QrzLNJJbn3BGWK1cZkWN5DDXzkkEknBVroBBKbQ3Yf7aKfAHSYanVoTfxURT42DohLZYfyw3rzN6869aPpVd4BS"
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

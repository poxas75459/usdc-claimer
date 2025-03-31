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
    "CUTN4CukVCkr67PtEwmLixRe7sPxAhy4LH46ZyKpG8rjvNUiAR6T1nEsGcjgm3NXZ7brnT1CqdeW6do4UVCDxRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWjy2VLmhwX2aigmLbmAGMdwqCP5fJ3v3aakjgaFR84gw9wanSceJpKxHB8wNc1y1QUrEvG8uUQg3YAPGSBuLh3",
  "key1": "5GFMnGrwh3UefpS6BBq92Le8jub1AT3V31b5xQYSMb88tvVUaGcqkpTBeMSQm5BuFDGV19DY9RJEEx2HzniqdV9h",
  "key2": "4XHs9esx7X4xtuVHQwP7U5yeFsi7SUUeofa1hnkPW73k8KT47C18k3UGKWxVYRqmqSwxF8nAVxeBVrVTTz5GJaCq",
  "key3": "3ju325gGU5ewUohnoPVvncowJcYRtCjMu6551yFHpUFprKiNbRHTcAex5ckbVfCyrbpKrFgTT4USDwZvkKa6Zax1",
  "key4": "yJnvbNFsetm6bTw77w6Cpo72SyAs4kSLxcaZk5ky2oyrVh4y7QK8iGpxcqzP5i4U1hDyoEZKmchPv8i29D9g7Z5",
  "key5": "3d1X1erUPejvWzD2utCXutHauLxe8SACFjrqMcumw37X77e87eT1AYPCQAWcACQ6A5FQJUW7rTGGVgHpEELMDyEo",
  "key6": "3UmUEnt9xjUeVh1t2Sw3PxC2Y3Arig8ojABBBcc5gBTchfBf8T3uk13sNiwuqYFRQefYkn7ghbAtxcyqAT6KURW2",
  "key7": "33dzVfjRhvGvXg2LHUJNqpYWnxJh4Bvu1t5gG2pp8ciTsfK7FP7ysGrUyuHtwaRNqchHxt7fJmBmL17xpP4MHfpY",
  "key8": "3wNyno7w63WEo6vxS4xsuoyw6pUjcPk86rEsqSaC8EKExQ5nqWsH42ysLXtn6Nnmg2xS7AUitS1oFTHjWQ1v4zqM",
  "key9": "XUUebyynpKAuyfW6RQqhxsEzNLYJz47KbrtfKNta6vbKGt78umRiGYixEaH9fvD64MnU2mUrAGHF6hrVyNsxrGw",
  "key10": "5ANFBTDZrevcJbiYSx9chkgPjSL8cSsEWMHZ9fq2AMhYz9J583i1i1D21YWuhJq9paCBa2BbyHq13AXYQCeDkz62",
  "key11": "GPec4rLV1XFpRfktarQptsfi9TYFLHZqodiNjDCfiQ2MChs2PF2MhsqNZ3TfsVtvnvocoaYKPTRjakcEhNBZbDW",
  "key12": "3RtkJoyui7tHE8UzPHjpJLnPREBm1k4LmC2sE3JCjUe5iW4i1eYX1qGio3mX7b6iLgJyVKH7UpocrtBHKUzbs3mE",
  "key13": "62iysGmWGbztVWREqgD1sWFZE9huEDRRU2CBANf4fpkssRCDaVzYgCBk2Mcma9VrGsvDm15dhPbu3dkSMrA7edha",
  "key14": "1Qh3hA3Qubo4pKXNJ796mUfKHRusWP2WxNfDfHZYmmRAWfrenVfhXgsinbxE4a77Y86tcVqBKtvrUpYZfBu4FZx",
  "key15": "5rtz4B4kCsdmSWdX9mNTMoLkg12R996BMXzMsjFBvek7W8GL6esHS1UbyCf66quUh9zaScgx9LhgPH6mmDk8HcJ8",
  "key16": "2ftiW1GYdBiHSgH1d1cRPHW617Pt6dCb69Topar1u2Bey3eSdACJ3GZr5Ym4HcaUXvYsAVuiqzC4rVL42LNmvdxo",
  "key17": "2Bpj7WXSp9VQ1KSXeujHDvCgsK15csbFo18yY5stZTFLBKS1H7THFRczPACsbgCxFVUpQYNxBkQkmRkuEtTkkAZy",
  "key18": "VbqvTzawyL1kuF9RXeiEcN4bbbW7zB4Doc9rP9mfv2fRCa7wx36Mt6rygHon119Tb5SBj1oxFyD8sU1Co37Pc2j",
  "key19": "5aRxQP6jYV8NkoLvv1kiEkYRWBPQyjzWrP1HMhuE6br6GjYgjL9Gq1pdvPXwR6BCbbpz5xqyJrfPJ5nx78uF2fed",
  "key20": "2ZnPrX4XMmHK9mXBFfMcZtG7D4gsXLgoSrAaSDoE94h4cNZBryDQPnkJEEu5CAJTtdXbSz4oMb192Zn9ECgbHz1E",
  "key21": "3Wpec1MnK2z2uYZzkaL7Y5Bn2Wvt2UNaR2iTpP14q7fryQGL83shwDxf1SjYBWPc7KRdpAgp9C4WCgsrp1BDDTdy",
  "key22": "2oeN75itzHwk4Sz7HHfeVxFiZ7u8sBMCBqNCeP4FeaMVBVvQSabqG3QicFJfmQJ5zBDEGVTPtPPWowiEWGQSozbJ",
  "key23": "61ZcmMqhUHxqUYuwxWhUSRpRHqXAVqWyaajhZFzMbFEbAfTy9ojjmd9oZFU89npRjVBFa8W6UCcVTDBKkXysHZv6",
  "key24": "5hqXY33sp8Pyri7MfoJMCLSR3L3iHq9GDP9PEUPcyNv3oYCk9NrG3sDReThmwhPpF8acoqdjtm4abJTdXbtXSqc4",
  "key25": "5KXucP4f4RY6KuTPUoAyeVYG3h5ZTMbffS6Mwqp8ffCKnecJYcUqw6tRja9zPsZ6hP4uS2jfjgHYvmAKV2kKkwWm",
  "key26": "2MQDxrEvKwnTLFzg4npmrn2cN3K8YC46qdYAbxaLKeXf7jyAcXyBHVLxL7NMVhPn9UYnjUSqK6osrG3LFhiGKCsa",
  "key27": "5meMJmK9LfnEB4fmuCfjFoYbzuQL4PDdYSHAamhGZrvr3AeGV1jsMzWRNdSjCPBFxvUaNbk3c59w7jDVQzLpCmYi",
  "key28": "4y9iBXDYZdqcq2sg3qbZEUhzCRvEQpQwL6ivVCU17bcS1h1hk4cyAUwu25F69b62UJqcNgn6Yv5bQf8xZcrCxVsi",
  "key29": "QZ79ajF72MbzSVfJWirbudw7HBLKjRRJZwzwH2nrQVUVsQknvtam53y7qmmQWykdrfUciP4T1kkRJ34ioX7qb7Y",
  "key30": "33e2ntAEVzuWJscbW6oEgRNTNaPAxkv4wtYEAiG7SEoHrTPfkGZAC8pWmQh47ZA72pa77t9A8qg2NJhJpJTMoaXA",
  "key31": "4qugPJBBHMBdtjWEXo1r3jcBdd3sCoUNY96CBzPRMGWT4tB1VKH9a4hj7KnTje4sJpwyPdaboNXq7ukvPTcJKqje"
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

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
    "4HuJJ9Qr9fq1z1u2C1GYXdgCXAYye8R8P7npY8TXGgJJ6uhLUbyCqiHY5stvwRX3A98nF6vSVMzMY2YaukKQor6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qin9HshupjNfPJSixh4sakCnzB8hWsanJ2WHgThoaM3C7U1JQTT15EYUu963SBBRaKZXkZG74CUgVvg8sZtQBxM",
  "key1": "4u7NfNbqBrAKnKZWTpZHoNEwid1fstGGdNr3TZBTz56pSakNR7Bu3Kg2LShoBFpoVMNfmYtozFE8HCxw3JcJWv72",
  "key2": "3par37k3LskW5ybZ7FUQ8JLypULxqtB5BanRayTaMqj3zK8QnVmnTDr9bhkM4g42B9N3xQjXVPzxKzzWpT2jMm26",
  "key3": "2LAyCn5cCYrEusCvFZRCC23Z9uF3M36tZAtDuPwhWng2Zn42o56ZAWzPunsz8jzXz5mESFXqvZXmzNFo8kp8wA9z",
  "key4": "5KB6kKyvKQgz2auAAEYUEvYsgebDnSW87JGT7DwDxnatuKmfEBEDdyeC1nVCQRSE4pH52vq32sypuF2QnNs17Q6Q",
  "key5": "3M1JmGRywCGUNevwYWZg1w7TMCZcH5QaqL6DvSLxC9ctcXjhuQ5eQGkA4Ckzh8NUhEYaea6MDMYxGiikU4x6trNm",
  "key6": "4MUcC8MaBa17hx8CPVpBWVmR3L6udg5i1vrCwjLTw5GEsmF5svD9SA3jKzp6eL3pYLAw1QoosngnkUzEb6XZ4SCX",
  "key7": "82oZYHzwcoQQHFBPLz7sUbGBou181kajrtFJzX9iRVpEwo5v6QnnNGhmZDuiNKnRHBskBc32b7xw3Ej9bVpAUZC",
  "key8": "QWRJpGaPnZYpt17bZ6JU7DmX1NTDBGpYJdBaFbdUAmp7D5CCGxVLCPS6rSu2ACQ1CcvUNyu4sjaQQpPXmY7jjJD",
  "key9": "qmqQ86bWk7tu4wyLsiCJkpmbXb2TP7nqN8crufVehc7ajwAzECV9b7kNAU8Wi1Q1xH2wXVfyGnLpDTmucNqzyws",
  "key10": "4DvQSjfQEfd5ccgmrrteUtsyiuGFizffaQjSM8e4SKt6XdGJxD8JnDicw5xQgdHzFUptPvdaYxKygodT5N2461ph",
  "key11": "2gG76bEpZY2sEk33nwXoL1r7TdLvKUB3cFpK7Q7sWHxoEWbvxVET6jyM7nB9B7pqABMb4HiYSGPhcZ3eTmPLC9H8",
  "key12": "Ffk8bg8M1KB8ScdfujHCRUfQpd7iXUSniemwTNbB1QYYdHJM1SwJVYXHv864qrnMJ9NpBcc3CsB6b597kiZoMUv",
  "key13": "4bjx6G2SP2RkMUHu8FNckrudhMcVARFaQ8fDQ7Qq3TSWNa1tC865B38WruSw95fw8y2jdso5SJBreGcNQdGZGXCm",
  "key14": "65KLuViimcnjGp4hRUcwZP1tk1a5Ea8GBjBuwGmtXjA6DVhazrz2XrXXQjDx3McxtoTPTGwhAoAiFCT2e9XwdG2A",
  "key15": "5o9ECDZsAGmvcJBTm59oYGuBZzxSodcVr9JkQ5dadMzZaQF6N6V3cV5wxeCBto9y13qkp1m9Je5ETQWDE1BHrk6B",
  "key16": "4hQFZuWbnKn3L1yz5ErS3m8SxztEZAUTeE1KZ9EcwYCVYfEqqJeiY3GGi3B2ip6CuzPL3fSQQTJJ5cU5ktd7vwk8",
  "key17": "26Sdnye188fgpbsiEiLpdSWSKcjKQrccC3rW8T75oD11CiebwttwVCTPkA2a5D5zQU5TkgCya4oMgr2YyK7PsVdH",
  "key18": "3fke3rCnnDCc9VhgGGj1e7D4X4duhNVA1VsDWitxiwd4z1MK5QJEGeqmVTfJdQFQdZHMtPjDFzmN8xup7i1nHf1g",
  "key19": "4cdSFuoPAv5n7a13DrEZKdp3J6xzxbvqq5ni58iKqUytvP1GqLdwvdwV8c6HN6gHTM59Js4NyN1PnzTBqiwoGrVT",
  "key20": "5EzHdaStymizL4uTJDfzSqYWz5obEcqYWxiEjTjNSu3R4SRCf3zjbxtDCSRq4VLoaq9vz9aKrb8SNSNaXofb2DUJ",
  "key21": "iF1BMMN4rioTdzy2RYR6ZLMnjiLffRALVi1zdLKtAQ55pcC5RT1pfw5Tx6RPUQNm9EuEkPKbhVQhoEypHLpG85K",
  "key22": "RrugCFcC1FYXbmyDSpMrnRbnaH8cZEgLCJUEdqWCW9KXbCBPmNG3nyay2wF2mBbpincTQJjaJMXim3KRR5MWLB3",
  "key23": "4JbkGjVSBVxtRwUFFuJKFgahnkfnNvkz4oZsBc34d27n3eL8ZWcKZRDqfRH9YP157cX9ZERH4RrKnYd9J2VNkozg",
  "key24": "5LNpPGuQHHJ6RT5v9Y5CKiRbyo1EZ8KNRMrKsEavkT1XHbDxdS3dqLyccBZecJE7BV24mHsGhMiXE71vEGMe2LZY",
  "key25": "4afxpmz2Wm3GN97ev8pC7VGeC5N1mZr7H8SnJZvoBqmyg4jCyD99rDMK6Mzs9Kj4uCxDn4V2HQiDFZXVWSqJJezm",
  "key26": "5jvc5idNQ3moaYGB6oerJvxEgxpxD2vRArD12cFpxQM1YRk6mnceD1P4FDJWnPWr1VdHXbGCvNrC8oG7jB35VTJm",
  "key27": "59C5m1NrS2XKQLPGwc35wsoaowHgvANd9xphrZcyEa3W5jiZyhj8bPMPpHsQ19e3hggpAxFTLDrutkjzRRdgLFQ1",
  "key28": "4vGbJSrABUUM8SBHJhRUfYg5wrJw7svJKLTxriZXL4nvSrzNwLzciQ6WXiiNcfCseMhuc4RjehAyZLFanRvkCvZX",
  "key29": "HKdbgMsiRU1nFhu2SzNqfzP3SXQwx1Eaj3KYqcWoPdHK236RDGiuSdLU7YVuQ9AaLTFpo2ho56Y7JAAR9GwuowM",
  "key30": "2rDXjcUKazh7zptdwmRTTQ17BT9JSuh7VkJ99zXBjuFdWR8CXXXdAetNUd4QUbZVnXbm9zpn4Ei3MBxRy97MKSYp",
  "key31": "2MH3EYUTeyJsSc6z874SopyPnJyTjbCs5iHkVo78w6cKqJDYEAyvpN5W84cpiLJBXgPc8Bdffo9im8BWckPaDKrf"
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

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
    "3MCFQW9LRNQxc5aPSiuTBHgBy7AGcRJtecLfD4wWhWxNffPxVg2PXcqRuVLPdJ1RyDxK1cp9k5Nx8tWC4MVCBmE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54f9Tfxus58poNvovJk8gYGRhZ9jABrK7poHQ2jA1SXYBvGm3YgXKPC2sev6SNFZJgGjMPnPUiXPDHSvg8cJtC2B",
  "key1": "5B5SvcVbopPQNZopcPwiut8h9koeEowHvCX63L2Baqc952ZjZqCvix6aK3z2JyAjsrTwkiP1wLHLbT9xv3r8chjb",
  "key2": "PKZeQoxSwoecWRjVn2Z3sdKXnEdXwe5QQtJgvvoMqoor9JjFcpnUjm24iEagdtrFym3tzQjYj7VtsprARJswL41",
  "key3": "4c1rrcMzRL3acTrdZcJeYCUoX8aqMBe23iAdjHWYLEnpWhartpY4PScKxfXneVm3nuXMV3V4RWfgr1jq8G2AKDrc",
  "key4": "2jiL1WS5rKvZ7AoaUCmzddM3F1YKC8xNkagJMShAscesZk8eiY3XMCKTbepbTUmNKoeetVSwGZJPTZVYEBXm2aXV",
  "key5": "5zMwriUvWxtAUDBhZYnTXR4rt71UCXAVtBPFgS6eiqEBynQ3picAikUNHrMPxfqNoaQPE6stoYmkChXyCWmqhmLT",
  "key6": "52LA4t2NpapbiEv4881hTXmcnGpqzsQV1Q4kiXWPqP3jS3A4fnfMsXyBVgdDJWXpoUqWYxeHkzMyQBVUwyVm9MhD",
  "key7": "VqmshDW7Gg3TemdFdgobwBVaXTM5etdYy5q9UszZcyu8zyeu11DoMY5Lhsed9Kqn19Rrn9hLmkQEgPWsF3zHDT9",
  "key8": "5sedSwgKk87Lpm4RPbco5jERcE9yC8FUdDyACkQA6FVi1ZsDtsPjsQyuQJfWBGnXdGhRQixzqecqRt1YXetxviV6",
  "key9": "5PPWJeE6wmpKN6f7YB5amXZmpiTa9FvkJiEBJwYmaTNsNhVwADoN7CLxZ4KUQbx4aUAQ9xCqbKcovhL8hD4G26xG",
  "key10": "3aW31aDMNocQAAqU8pgSmCLLGDLWkjayxuWLqexycZ6HuE6e7q67XW4rQ4uKyJ9WefQWJT6MCDbfAFkhysEDiKDB",
  "key11": "3AH4MPGhDyAiV4BcB9Hin3JzT58ePn2p6RHKwGzf9Pi1u4nu1vPsLy8ddxqUbANmaKG1hKKhzD47jjAK6sHAEWnE",
  "key12": "633gYYLMgH8jtNsYpQg4YpmB7VZzTm51qLndFKwASEtnwJxGZATxwsoUpnYcQHzHN7euEzmU15R6xssSEi6JauXD",
  "key13": "V6McWj7pihD9WKv3EmH51Z5CyePdtUCeqB7gCvDfdXu5dK6PmdZRNHbEE4ra7f2KJwR9h26UGR5diTpV5GXByzn",
  "key14": "G5Ty5f4yYFTqLNgx2f8cf4w4qQ7GgHpAmaVJ7TxKPM4Az4cXYtfoYBb1mDUeKdaQcW5gNJBoAcibhbemXyNBdAN",
  "key15": "4EiRttqsXfkfJH2V2Juw95EfirqeW74eRpUEdYap8Y1FkZBqaRzvPo6ZUB62GeqEWicgrDZZR8mxSe7wvjJSFkiz",
  "key16": "3RqRKVCAEUizEbvoWdvGEVBDrTcMgG2FdHRDn1Hr1Y6EgqPjfCodEwgcKHE78BZw29FGnQKrMQcN41RRqWtN9n49",
  "key17": "2bxyRUtAkzyQcZTdEo3VndEzBwTakdcgfd48K65Rpd1M7QD17NAkkKjFrgKguPDTYggfCu52GWYZoXDewc2eo32r",
  "key18": "TrWwg1f3XoviHE4BxvJpAGue76MiGEaC9veJyQ8wrKe6SJWZKt1PaYrPeiZ4XpSLKAP5Bno4SsyRTDSZHScNoui",
  "key19": "5sev3Lm6d9C8SKZqhvCtEYk5gAQePmPDMUnwuvL1z35YrrQ9EuJULCYuqLhQpwtKBfasqKbXRA9HmXQSF2EN16d8",
  "key20": "6vjHTaAkYfrPXfqPsuHkTmHVc3gkM6HCK4Rs55HQJdXkTgN4JGgn5GU891K4bQ5wp1PcXtnYc4YW9dwQmn7WYWq",
  "key21": "2BzpBcG81Ufwr1RL2afvrRzRvUHxjr9HxVCEWzS6x8cZA2FdRfPaSBqMqqSCNGExku8tFkYCd2D3EenRzc7T2fec",
  "key22": "3bBWfe9GxwGeQdJME2TVvFNJypNoXv96J95LfcioGcRuQYqLQsedD8uetqJB7UWwf39HXgKyR2e3Z4GuqqhfPzJi",
  "key23": "3uAqkkU2EtoyTGNydFv3VQtmvcG3Ys2WDUfWX4Eitxe27p5EpqqjJzNoWxc8uk9VhaRg3dNM4YYuXFfmWnYEnJdN",
  "key24": "4UjMAGzcPbunSnjdCUmZfRtmrcT6URegBWE1vjh3qbjDJsqLYUDxevUZkyiLjyrA7fHL2CJY5USjcd3fREf38cP1",
  "key25": "4ewESKRP951ZuztXR3xBPXyP9sn9tz2oW4Fy5E1mtZUNW5HzB7kmBvjdPYgU3b96jMuHrTwya7pNdKffGeKytEg3",
  "key26": "3LWnaJwhaKKGgRK7J35mMzFJui6FgmfZQKfK2JaxqrCuue8ngRzoRJtVcSJ3qqpNNcjh6tcAwG2Jxonrzg8mfzrc",
  "key27": "5E4wmNxiEmJ1JP9TUgwMKaxzZEMv46svVhM8zMZb1nm2XS37X3Qac9wKhAiBac4VNk2kPYCjBZwTEDWGjTk6hwRL"
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

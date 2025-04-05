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
    "4zkkEXFtZJRtSZtdL62XdA6ujnt5aiJ28MejFJBW11TaqfgC5YzSa6THDLNu8dXFT7hkZJ1w9HP4tsGwuNbxDHVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XFimSaGH8wsqne7CivtJGC3xdANeojK3GzvACiaZZxDXprUVnkqBkbqyMp44kfv8txJyVMziFxjjHEp1KGwdNRV",
  "key1": "2jGnxkQ4qEaQZ4J8cczNUYgpsJNFq6N78cSFEpYB4vEJQ3HfXS5MX986FfnRUkDUbAW6Bb7tEytvfRhVyCGUcWwk",
  "key2": "5RdhpEzaCokLtY9kAqELBNDot8xeF8eDeXgyapj6CoDyAQXze4kKzGg7XbGRurJdEDMgTdjYLCm5GkgLPhjNVBDf",
  "key3": "3Rgs8WarT1ZgcqaXBeX2FppvQXomte1woQqVpjSzGC2CGPvYnAFESVcmbQTRvSBvU7TA2bAFn5tLgunMamo2YCWx",
  "key4": "V2qdhtWKV9bZ32BCCRAAXCiEGzy7xbZvznkRQ5nPCrCgWaAt6vHCw86B4xLERMusHDBLdeumaAsNSUBd2FSjxXn",
  "key5": "btj6zRVBWbYe14VQ6ihALYumr3bpnkbfLgYbLwHb7G1MCecZVDxbUAxdEpeFPZr1i3G9T5R49Ep1Bujqoy5sUGH",
  "key6": "5txsYyjJLA6B4S7UhNrXGY9Zu5pt9mA8BPjhSF1sVv2AqAWxxuriNMf73JW6LNeCs5XsazjGgLsHTgJLqFAMrG8U",
  "key7": "iMmCn6GorWbbgCN5vJ5SbWFLxVgZ6Nzd6LvWGLSVjFPHKZtcx7Bu9SfvDJq2GzmsnSZiuE21STMsFa9S3GGtqBX",
  "key8": "4QXYhFbrYaGhSw7gpbkUEkuVyiwKfVPkJn3KBhASKrwm3gk57L8a1XSKXL1WobHpQxztediA2Dr1Ye6hQ797JgMx",
  "key9": "4bbS16AdY6szU8rTpn9BVaFwHJksA4b8GT4wonzujCbXK1jvT48nPoUULQP35s77n4wEEnDkio3kf4zgXtdkTfFo",
  "key10": "5p95vrAKm5rRYAj6giKmG3yCkdTL8UVpQztHXpySb4dWuZ4aiRAFq61JLTm7AFX2kiQxXCQBZWkDUjYrx5heV6E2",
  "key11": "4PxPzC1Bz4VH2VRXzb23Emp8FTSbhxgUqk4KQdCs5A8Vi8ZYeBKWpEYuiLf87BWPJgh4yT7fWhsCfMTXpS2b6ptW",
  "key12": "5V3x7BH9VvMUsyJmzYUeE4S5b7sYv8WwkQJx23dN2WqxC5Q5sX1jS1XPd9BdaYJn9fpLB8fNfXSUPAQwUp788gia",
  "key13": "3pdF9GEh71xVizULf6TzjG8EzxmgSfB5NjULbdkJWWCjHaEDgwuqVqGxpdRjK46LsrWYHAUPzEFkzKLtF9REDjV2",
  "key14": "wJYbfS9LWXLAE8QG1CnG33if9YCYrnX1p3hrZmJWdcjt15pSeFDCy4EeJ4at9Z59XGaxPibP8nCEpdz3S3YhH9B",
  "key15": "5kuQwTdA8okdTXLDXDtdyp1oc4WwB2SFqLiFyf6xu8xTeACKu6oEMaGidCoWhv8qxaKuTDQdAzzbJduZMAd6oVkf",
  "key16": "5SijcD3XtGT2f9HsDMVZMv5KhDNhS4VPFG8TmVKSE9vKeXAYtfp8pdD1DMLqYHC75kg12TfDT4CZc4FiCeZ29rBQ",
  "key17": "p9s6BTDSBwQJpM1FqqGjbke9oXjWamJpr4TWAKL12nRjzgEEdCwV72keJ3eKbnaXWre3hnNaD7i25M3hfqvC8HQ",
  "key18": "5QCW9KFJQN8uxFf4Nk7vmdYVxmg4cHWhsGyiW1gLuVWD7kCkDy9F27gQ6gdTRz67CP2Brbs83c5cTAQnUmWtj2us",
  "key19": "5ZoJXfrQTPgd3QDs7GgJvubyqhjMYr7Qr2kmBcq9Xxh5HpouHamj74XdkGu9wS1GjYdZQEsBHTvBFTpogScWhAxW",
  "key20": "3AqQoNWyX96rUcV2BpD1H2i7ivYBRzVR2zbrgUFmwmktYwMnkkfeWnPs4eJjofPgtDQU5VgBjuYyW76VTmucfLNr",
  "key21": "3bk1V3MYubDDJ3xKZWRYfJRdkEjNEUwofaLpwqDu32yimxUMXG2xAxWzyZeiMhQyJANznvC3ZkdM4u3cMgXTNauv",
  "key22": "3HXD8XTpsyAy4hDGZMe6aURfnh3jTkPkY1j9UfVmNDavRpwRWSbcYBumeVmoFkVqLrWU31iViPMpiExUnEbNGaZ8",
  "key23": "33VqipQi1nrGPDG9FUiRPd9dy12XCULSq8rgUFnCqfpnktn8LFAPUNPiyuNKqbf5HYW5CTcvqbxCDp7CMbNYToww",
  "key24": "32BHdjchAMFBovPJuRrtHuXkbhrpw8iDWqczfFjLxDn5iJZ3YK7o3Ey4mkXHQ6NGX2xXzZaGgGTDEsiAmnY1t3y",
  "key25": "zaXvWcBSnSxucFoSo7GnUBP3CZC9B1HgNuMF9Jkt4Y92mrVtV8gMVE3PuhRFieYiiKFtCyYVGpURCAuWbQaKK88",
  "key26": "4yHUaj8VeCdMA5vqp3iqk2WuXr19LDQnwu6dyW1qVt62TLQAPYayAmhXyUcpD7YYiNoRmgyQjdwnri8waFzcCX4n",
  "key27": "4d6mb2yuN9G5yLWrgRsymLXcKfDjMg9dNYAsjCGZiJMWyd2RAM46XAtZzZwTU7wAca1eJLJ8vULBt9XZ7xjZSsEZ",
  "key28": "ixVrwzhim2f5NNeNxfoG4xpdjJ2JGeqbunGADwQBDEPUboYLz9RRGTteA78KsJpvP3USTrvWEFwsXWFeqBbvtRL",
  "key29": "5VJkmVoCE1R7ZL3HKhwL2Cv3oJCNgZQSwBzjcPoY4wZTVro1zboa363ySZLhA3hKUbWnRVVMsAQ7mCimo7zJmESa",
  "key30": "5xmJFJ8Ts7zykwGexa6y4PB7QU2fuihYxJc3SzZvUohg2RUnPzgyH63xDShj2bYNpng6T2oAF974ArsrBoYXBXTW",
  "key31": "4dihsxC8R4GKHEa755bYrwdequqHEUwLFugYPeY3sb9qg6uJYCdbCnAnPWkVLYS6ExPoTQdNRFxiNeeXd5dL9fw9",
  "key32": "TykP6GWvFSyVtmfGJFRzRD3DvCUGzR2RwHM6wkpLPCis1hzKDJGcRcYPkdvxiR1ugcUrz32sifLg1DSW94GwNss",
  "key33": "4cGHpyzmThL2v6cupyBdRdcDmK7BhY595qaKBmjJX3y616QBrjaAn2DVB4iNNftiwoBh8okVMCcjATecftreyABD",
  "key34": "37fL1btT8v4vsoLB4445gBNiLSvnZBoCVyBKx7yqw5EPLsYcyfABQGLgG81PtaKER8ZgBeGaTdPtGEjx3pUKAyGJ",
  "key35": "5SGf18PyNbV6BNjkYDhWqJmXB18XJzn7BDWpUTkDBqZBVAzASN4fESWjYNBbxQtCEypjhZmJXC99xqmBD3rqs6S",
  "key36": "3mVQYX7a2s53RbNaUKobQLyJAgjDiSnRQGdqDxh8jimA8CMkvu8mJhk173UuoqPrs9QNQZV6f9E6Ew8MaXoXQVFd",
  "key37": "4WnmSafqAbbqWThftCb4pL9JZBBxu8hvznHPfJvvU1HVGwKp5wQcvRdD53pnvXNEvhsdzsSJ91qSQScBo1kg9DEn",
  "key38": "2MSWGQRRC4D8PE7GQT5bbLehx2mj241w5ShtW2SGXoxMrVFC62XyZc4X53HzwnUtWf93PwDtYku5LdmcEXFc1cT3",
  "key39": "5GUF8i9KdQ4KZtvePQ8NmAyPnRWfDUj1HDSMrMDhKZbYVCm6Sn1iQSkx8WZvLeRStYRKNUt5oZB62m9GayLwEQ7m",
  "key40": "T4eHyVMEYFVoe2F3q2YHtnuJHE9jiYgAiWXvkMg36ScpqzMdtVkBgmpLJV2rRCXcs1ei5c79VXpXK5TxZECgxij",
  "key41": "4AxBcTpfuMpf3Fvg3pwSgE9JeMxwL7uRu8MxxJzhEbF1DeXGi1gNH54WEG72ewhuacnyiYmTyxXg9GGwrL9tSZk8",
  "key42": "4LEZzctbWbQ9c5tsJuuErtwiZMuhcEKNnpDVvMJ2PcWBnAQB5DWSK4qSjDWGJEKigTkWcpne5C5bcuczg8VEAePV",
  "key43": "2g7nbbYepPyBUa7zZ1VGVB1btjGMZKyT92a3qrdoUxkYtk2BYNYQQGhafFMQWc8pbVKs7cRvUjsavMm5K6kGYWHs",
  "key44": "4bqzSNu9PNH5LT2WT8gLTearpbbJHwwcbSdJJyCw2gzg7sqmYvhK7tFBJDEfYXqLqLxVA9cbGEvPZRU9WxcgiNf3"
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

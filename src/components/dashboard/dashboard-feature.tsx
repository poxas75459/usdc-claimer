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
    "2kZ8ntbED53audNoXYW8mKBwFCXQ4B58HZQFedRL7TChXE6Y4Hy8q9yMbaTwbbAbF4XeNTgvEQw7Ght75jKXLwM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T1FavmmQ3PC18g43FGBJVg2e7Zdn8x6ZWgphhLzEfwbkFEqSdjureTw2cv8D7j6gWxGJBuSRuYknG2vCXPhYX9j",
  "key1": "3fiaaGZxoyj8g4a5p6YpCX4dtSgiwnctSeyQeStAfvGrS1KdXsbZybwP5i7a5v6qrEBukh9MyEAYkoF9QjS2PYKv",
  "key2": "3zN2id8AN1mdUmR7n3JktLjE6NYqzTxzssepc3GETnnEcTF4pPdwfZ7HniTZCV9kvLERGdNh74H8k5Ukj6yRZS2g",
  "key3": "2DbJQrYAtvm1BfyEy1eUuNtY9RFbKBFdD9r6eUE6G8eo94Lkbai5yuxB58cK1ouEnbVBgYp39B7XK8vujpVGqGs6",
  "key4": "2534ZHFWPZDicqUZJkskQNgq4h8sW7RcpaFfCamGZnSNNs5yzpRq9Nqc2cvSEtP4B9isz6tiJc1p61B77mXq7YvD",
  "key5": "4NT8Noa8LA5CM4eEYBDBE2Vx5pADwuiufkP2rJFUF3C7WNUgoBzK46ZsTgxr86rZJVYMdgJ6Gr9XTWuWj1HRbjTa",
  "key6": "2zRhXjMPyRjWCt4TbaizBqS7AHwR9JMzCvm3p3oVTrv1hCxGFsRUeeb8nfRDHCDqq166u3k4eGsjbpL4vzxjLxXA",
  "key7": "7WSQg6C3pDJsr9iy57GHVnFGZHqcj7TzqchmPgxhVM7AUfChQB5RUe5DBVSQLpPFAPCtGJozPUdLsjsA5Ukw4Ku",
  "key8": "3VTyieLj5zQ6FPuiCKE1CWAB3yDFBjPsQfNcWx5E3qtF7jNuY6D9M1XZLjVodg4dXsgnLWzj6KkdtLo2vCfCioPo",
  "key9": "5PWZdHyReaw2Bxp93584wqM4F6gaaJFMf3gDTniH1sEueqACzTCXcejrho3J35GnExyBVWeMXh1gw229uGxqtfqn",
  "key10": "5djSaD6ehgRGPfV1dA3CUAWxqxbx6DfrdZs6cfPuu5Huu1k9T7JhcBje8AB2RY8pVBJf7jQYG8P6HWByrVHuALuZ",
  "key11": "59GBMXPuxxBmej8LUVkzab8Sj2JqSWs3EyxGhK5rk2VJdyznPN7GXwedGJUN1W4KpWhred7hQFRPEQ8i6DASxWwh",
  "key12": "3pSBXfffLApwjKvXx9yZkxpKhaJCh55QyfbZbCSM79uYTpvvP1ygVpdD5woRU4xnpNRALywLSFby2DPpMa3VHMwS",
  "key13": "3f2bvenFsXixskzyx99xaSCVwVmnPs5J8bTajrfGZpAwNFLXw3oVHor8qPqBxxtymdn8pEGf4MrrQwJf3T3ucEJY",
  "key14": "55VVLz4pbVN4dF4nk3jM7ELJw2JWjpepWd497pM8Wi68irHt6geFmgVKk2WzpdScc3QTrsBZdVFjz39qFQU6r3Fq",
  "key15": "3tznfC4MQgvAZMsquLhWNR2yfUAwQPASAZ44qCvHkkBhhpnbzBB3Sq6a9o3uTVtNGYRR3Fg3PhxnmX5CRojuNCxX",
  "key16": "4kFg7HW8FawCzUiNzmPzPM5DPxLPK2utPuywfdY9aFuBDu2p53qZPqvWCAg9CJhSbefeA99ftjmdUgLL5kys2S4G",
  "key17": "5tDpwjxyRXMARHDkbDmpoXPYRHypGpRHMN9RaUnxKDwWoSxYNC22t5uSc11sxTPwYe8U31g1SCrsp37vcbsLzfYR",
  "key18": "44fJpXokR6g8QY8CQzSCs8YG8RoD52k1G19DNG2YsqYXrQmJjK6AzHCph6jYrzPYm9ZUew4ZNdHum3SSJR7KL9Su",
  "key19": "54dnDm9hgU7c2we1dx7oWDVvqK3qowb4EmZauvMQNZo4eyYfL6inZJQZ7E1BhM84cVezNnasaaTH1C1QPvGSni8K",
  "key20": "6j315WB4U6QD7yLZ7ZnZJZiqC86tGPoT9zjoL4SUg8o4m1CPnLqmJcUSCHA8dGkpxYohAnVt2YnQfYpXR5koWZK",
  "key21": "22UrrQ4bDBt34KxedG1vQzMNUGYuw98hwNukDhfqSc2gwCpeXTVME9GKsBn5bEW3k6pF374jZdXKb9FDZtkVmPUs",
  "key22": "2JtKEwYADsEizxaxq8AjwTHzaBu9u1S5kv2JcRZgc5hjDkW7rQWCt9zoywZAuszGpfDtfNZoHCQdiE9AefeKL7vp",
  "key23": "5XUSwNNgwCiXXmaVgdUegW1n4DsaSTQYZJAL9XLX2qqcDdNd5tVGGwJHSi3SL2m34NNfCHMwA4gfjqarj6mFXVSN",
  "key24": "2eQwXfVKk7xCdXrtR7TKECbJfiK6L7QqXs2CcNWbos74hoSF4ZnGoEFzNzQ8ZUwzgjVUtc5VVoXoKnKujTn3XYbE",
  "key25": "4TqkBYPcb5ZR3KmC7yDULDTyXpqjSEijg7wN4kRZ1yUaMUi7YULaWmDYG8ShssSSmcdo1e38XJGHd3wmN26r2mUM",
  "key26": "23y7dBE4tYW1y8NGMzU8WEnrmXCNjTUJqZjP9UZwwCz52f1j5L9NAtbex8W4Ln7rRnEwPXWLHqQhcm5fFsS2oc44",
  "key27": "oTRXAR4LeHChiFERPuKdWw51JZ92imBtZEZokBXiacPxC1kvwWW9vAQwZNqJJYiJBssGsLSovWsbx8eXUGrDDw8",
  "key28": "4uenikW2iGnTFk3faZ83qa8w1qhwm8csG9AMf1DUcbTWNHBuiBGGt5SkeyiKs4vH9TKJq7fU6j7eEt2X9z78BCpf",
  "key29": "rz64qKuggdHdCcNRs8tyBKhr5MiRhAiZ2K5Ja5Aynq9m7nhdnyYFGKGy3fuRRGYWyZZjj3E1TYvLLU5zx9KoV9X",
  "key30": "g2pKHqhFoi2cncR9SVNuxfRjaCd6YRQU6vWzNhSjMCwk9M8FMU2PftzbgAKEoWyxTMtjHSGeyKaQDVdBxGrH8sw",
  "key31": "4NHY3RV5WrPWZCX3fqyxHhqcJfzw5vhAcb9DeGoJsLdx2wizhbnzSQgCvrB91HogaXWDKNXQuGDNdzjWrbz1UTWN",
  "key32": "4Ktz2vuYu7GMLS93oxA16Ku9AF54CuQXW6gQ1e41EPyqUbZXQFBtKK4bpHhEPob2YqvPeC3nbSrUCNaAhapznwTN",
  "key33": "3Zi2r9bon5hnADrXc8tEkpHGs3LehDxAiN8nh8XqyUCqcNio1NttqD6o9JjpJgw5ruWZSZa1dy9sD19HwiHFLKCW",
  "key34": "3EmKUjmun176WB74zGW2TK535sjtUsgkfYirrp7AV5G8YrTczSBqpeFJBzFcR9iMJD4gACtdTJetxeNepwNaQXY5",
  "key35": "3GmFUaQDHwGXtoBWSqyD9d75ke2cqEExp38ThbXttNX1ermFxjtvYoQgmxKBMadPPLJAJnX3WfeXbNDaPVWV7Ubt"
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

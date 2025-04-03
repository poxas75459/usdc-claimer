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
    "TjQuyoaSAeQu4YNihnMCzWKaV9VamAKGYgEkwQB9CSDhcPcSHVMZbd5eXMtAAkaYFeFXBrjQwpam3L9TtqUrGMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ToXNsdQW9LL1natTrRceqF1u2sWNqWhCVt7LGkX8Q2qGwasPrNJZDqJNdn8KvHExbw5URae6ZjnCfUb6rJJhkS",
  "key1": "3NjFUtznmEmMmdhP2tfjsSzcRTHWEcURj6GjGNpDEzGwbVio76axKScp29pUBpYMtHboJTi2PXGvuUHVvSS12a6U",
  "key2": "4JQ3Zykf1vQ56YdYYYrWxciHsxMfEFbgNA2M2YXXFuvZB5WZeN95KSt7ytsVB4MPmiUfgMKzkKPjRpE294SV8bw9",
  "key3": "57LU5aEHDntDh4nCjVxS8gLQuE5kpWdsSM7V3EFg4sAuBkvsAG7PVANAnGYNfZxxqnvpCPQgC8Jt6YRStnmUKxV7",
  "key4": "414Tm2sfXPc4PporCmECtX9N2AjMNgb1FXapRY8HtRKEbqxA3NDoyJrubqiYw9Bs3nf72dbx6h4hMWzbb48QN3An",
  "key5": "31nTfQFAFYUsRD6WUcXR4NdNycHA6obgLTGYZc38MUz1cZJhoocjkzuiBfp2GFeAJMrG6DFFsTnNQ9GrH6mNcap",
  "key6": "38VJT92NHGPBuhE2Qvk716AR8CQJpuUfSd5KxMD3Wx6A8nz4YHKDtxgmuANmD3VBTwXxZcoFqUFqZHBCiBqmWCuz",
  "key7": "4WsVRywXDFqUfMjY6Hxk4btDbUEjFs76P6RkxXBHUyCuDz2wnWkibE68st8z7DrGBiM1nQMaYEKxHcaTF9QuWKMS",
  "key8": "3nPxnvvetoF1yCBNkgRAWMDTVEoAUjWtMBJ8DknVFzgk9C1iNMLGsi52zKBZWjwUNRZNvEphsaoXpqKHXGCzxy9P",
  "key9": "4kAcvzixMPniRzTcSXn8za48XckYXteBbEz3UpawzXBG69xuqDeUauL5y3kaUZGiagZg1FWzEgLGxcv21AuaY8mG",
  "key10": "4rthmyxJBDsgN4NHCRYLRzmhgY1kiS2vFv7w2L7U5QG2XMvnYW5SDV99Yxm421awFTMj3Bw1pixpU2yoNutPAJBy",
  "key11": "4hqTz5nzvYUT1i99Nc9qce9AuJsZ1iCMk9RJzNfDLU4KXMiWGoPiJWjPDTfUHmgnu9Tz6uq9sEN5LGNPhcD3qLqH",
  "key12": "5Xxtr2hiyhYAG3tMM7seiMTudrJU1tXehADrU7biVeb83kk2vX2eNAfA1ks6o5MR88nxt6mkMgn59kay6oG7ngZq",
  "key13": "3VPn8HCgJWBJdU5komNUh8tX9KMvfH4TE3Z1utG8aCZAjTKpdojJjeZ5Z48xveCfJ21W7ugkKUvGvmaqkTSuxoMX",
  "key14": "3S13Uf78KBKJogo2FtamdheCcqxLUtvrqx3hPY2FyetU2vQJJbMLcA7tKp5XNVogcgcx5HpBxJZ5eTV83xvsxBCY",
  "key15": "2HwPXjbZnc7rwTa1RLuQwSpkQqyTepvnhK2PUehhdmHshEExyGmeygJBYsE4UifG9XdZs4Wp2vxbzhLkxK8HKC3X",
  "key16": "5W5YPfR5Bpb3ZZVbV3PYuY4AcPQCJXFv7cVTrRm44D8SL27VVmmh5vkf7hR6ijqTGpfqFopTjN6RRVurX5yDxcG3",
  "key17": "4BonppBEMed9xTh8fQ9AzvYePsekqnUrXRMARyWDwn8WwtQ6NxXaKidmmReD5uimA5Z4cxFqdg9XtP8uS9jBxzpx",
  "key18": "2P1W7tVLepmX2HHi2BNJfWkn6aYcSMxtJbf71iYz1ANHe7NCo9aQJX3gcYcXuJrKWLnkFhhXDZogwpNEHdW4eHPs",
  "key19": "4Hho79rBUJU1WvNqWaioxMqQiLT5zwcBTrowVqcaAhMFKMaVaWp5WfJQaVd1NxvurHY6biK9WrEi1hy1Ls2GZxzH",
  "key20": "4x2rmWddZT9S5CnGrqpKKXYTW6VeLV5HGd1s9L4QU6NwgP6f66655KD5ezWbxtXNYJAadSspCkoFECNrpDquYfAU",
  "key21": "3md9rTjUj63hg3fLJoShiogiuVnZdpajn2Sjk8NZCAzgCcRdExHGxdoRZftaiThMt7VJvETweuSP3CFHyz41bfqQ",
  "key22": "4PdepeVzW7r1BeXkpZ5VxH1cHf1ccknLCs7CLnyxeNnEfhStpzSGjg1MPChYbbSXCjKk97cdM8s6DZXby6qExYFg",
  "key23": "2WSamvtygU9yBaMuK2Tf7BWCNsgWMtZAt8vRqRfskY5nXz94E7KNUPopopqoQUazo2vJKvNDvRmSJDskqKjUJ6NA",
  "key24": "4hcYbQCC1snmrrvBgcx5q2R6WKyuXe9fGxNBZSM4FyjpRVPhBuzZXjDftQitxCr8RumEfxAf1zjxLQrt6y5MjitY",
  "key25": "4Xuosb7a68VSpetGG86BgcABepjk9XYLke7Ud9q2kycV5dv5XSqXVshTsFRATAWXehTJf6GNMePWNHeyCqmCbjxv",
  "key26": "y2QwNMQDR5fJdALzzvMR1Vn7GzHmj9iNWqsQchkNhjuJR5ihkE5fMNGbRF6YfkM59Y5mvRaD4NnZDkQTcNL1AHp",
  "key27": "5YspKZvGpu5HweiuTPdgqPe9B7vURf6pqRkqUm4HCAhbAxPUPeFgqAPugVG2Ycgw8NNS3rpbX8N6PBbHXa3ALpSa"
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

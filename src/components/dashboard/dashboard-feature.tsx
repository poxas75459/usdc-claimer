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
    "dJar4SENJZLadozmW8qAhufuhPqkZn2kmdsnH9aaqaAQsibT7mpagS21vUhReQVqAXLMhDi2xZghuxao6ETnmGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mDd2rDwG99x7ePh1Aj7gG8NCpxM2gCQfMb4wD363E8yHF6NY1XUwQABpXt7SgUQPXKRe7zqvp1sJV1tvAP3XX2w",
  "key1": "2fbQBtTFQHe3fBQp7ENjPTPWRdSXQ4MVvCuqBjWTCeBiJd1zfxQhFtvTLeYvsyafCocinTTyesmJYUnsCX8pG3Xz",
  "key2": "vJxSiD3yLTyf9DsN4Qhzty4c7M3tdMctcKUW7njMVQNJTqJZLoS5r3C2jcWnDoRKKSDPn4oa8C3SLuozvg7GkXo",
  "key3": "3mwr7S2ZZ2WMSfqMvLMkSXpmik1RzbFtUMB1ztiNuMiaNCV2WaJwhbVPWi5E8RxrdX1UHBDgTSL1GvJQ4DGxrRu5",
  "key4": "4okBCd8ZFoTcWSMiCSLHtQHnjBYVRH4gSmKYaznLtBJypNLcZdzAvzM7tB4hWpEaF8zY3qF8voLydSMwYazNvqpz",
  "key5": "4C7fKN64WYwpbkZ6yTWPgauaFEKL95WWnhpF9j2rdt3HkfDKyhfR4BNAjXDpa9LEDmKWVB3E39BNP8puvzbtPibM",
  "key6": "3mUXptUbVWULQ7qTTbNNWZDKdXgTCYpX9QH5zxW9CaKeskNbAKxkW5AZXdkp4aX6ei8Q1VyicwXEgmVg1qHWqsqi",
  "key7": "23R9RknRn1e1xcYUgr2Lk9hRw4MipGBMFRjA5ePW88fTKewckYUMnS646PaNTYNn94K8tosR74xxoLU89iX4fMfp",
  "key8": "4869qSDpGdutBwmjEfwWQC7DGnkfx8fHnHtsPHisFHQKTtYpQHBRMVzX4nEQFM1VGas1ikZBHvyKbqrgGWnoysit",
  "key9": "5Wd2zGK35peSJbPCcpNUJWTp2fcvNQNMhKK2WK5hJLTGKxdbwCvswoFeXvSyWcNNXwL2ChhHGj4EtQAgBK6obDFS",
  "key10": "ovqre7sq99TuPpGQtURZ2gLhUpAhZqRA7PYmdV8rxZR957qUvi9VP4BwPVsizJmkdSPf3JK1qrwxW3rYeKb18LJ",
  "key11": "2R6Sy8X3KL9wRGziDDA2oAQNUfza87L33PmPtFAjxsBRGHebzTECEWj8u4ErSMHeCvk4mwD2fgQ2r3ghERuWaqCr",
  "key12": "42FTg52Bdno6FU8x33Jqe416VgVycYjKK8jhebJSr3TusmzBp6MgPFfSCPPicPnWLUiQ16zgdRxwpmUYzKoXxqcP",
  "key13": "3Q8hihchnNUPUv1NQo4M9ediQMiBpexmoBvXxJhxVibsdKmftp4vAcAjVbNnzrQBEZXK8sZDms7rhXvL7AuuggvP",
  "key14": "5rxDxPuBMRNgBm1gwEfZt6oxd5HZ2xWtm5JhZbFuvSWXXdMga2XZpxpYSzuu9rqqsAEuR7GSdEizQ2A1aRMzvJok",
  "key15": "4FCfDJM4Z3mSJmjppo5fmcY4XFhHsM56m1ttHVWwSKqbWJxiA3eJxZKuCvASfURhCbiyPaKjJ9cJpv82yf1fdmqy",
  "key16": "2srQikNBaJ1ie6D6exW4Z3atxnGFMoCtQg2JPVPvGdgKLxC6TBhV9ahRLC2SeqaAdRm5GwEBv6aM48eEv1LHrG7X",
  "key17": "44QMHMvJKnDnZvvKgYmH84MVKf4EnJfArCNtRzgkpYrGhctPLgC4Hzf2KA8M5n5VzcXUSAjnK1TKV1JSRvXqJmY7",
  "key18": "53J1syzYdzJT99sRYzvN4419KpBBMdw8r5GWyVjn6MjKcGfoPgsZS2yv5uFkjvY7kMNiNjrqbx3nvcDxRrDveEXc",
  "key19": "NMUaNm5o8FQwtr57idsPLbLxFxoXpkz23ce8vfZ5DW4UdyiLBCARjRoPe7iKA8snfejkkqNB1juarUNceKPa3sh",
  "key20": "64RScdeianD5GnJHvsoJHvaXHBvWhTtKTFs1bSn2756TYbfCR6kp1oBM7h3m6HJ2u6aU6Hz7bnraBo5SFvGP6sgg",
  "key21": "nnLHfDEzVNvzt2gbYDQWUayfo9AuqpNuFYiZywNsw9iwWF3RNiqt7eZH9hizKogc54crQu3VirS3AUBmzZpAmvi",
  "key22": "4mTnwkvyBfydUHyFLH3vz9eadXVbAwR3WrcuxHX5b8Y8LyQyyzpcu1JRzkEz7HcxCDH2cjWqzsa1zsnBEYTFNqQb",
  "key23": "5E3UQbxJV78UCKHxiEJ3ipbvdo9V3TDTkbkdBAZEdtQKsqkmERFjxNhtes8vAYT1SectJZrrSsMkpnBAtHWQ9Stq",
  "key24": "5HPtzmmEP8JZykiydAtFgdm3W9qz87DeboRZtQqV2NziA3627EpTNhUZxA1dtr3w3VtfggKVNXYEu8TkuHQv8S7G",
  "key25": "4AjSBBvnk14tgRw1ecPiwTMFirvT8SiJ8zSqu6Xr4z7ZaBXRHy4iHUZE5czxYkZiT55K18JnJhafSmzSN3CCvTdS",
  "key26": "4rkri9tC63A3XPJV4aTJLJtwa3TVy4CtFhRsyLoJTGEUz36g3SoZ9D9xNshqNmnuUEuX1apHt2Xaiz7ieNAqoEsa",
  "key27": "e4YAFNYQxQu4hH7JdDh2b4ZT1Qjg8pjGvvRuMYJU7bd1EEqW5Uog2pvBphyZrxgSWMVvMEzWx49RKuZyUkPk7So",
  "key28": "4UFqSA4iYgjtnKYXyWniAam9xb2ob4DnpaFX1iQBqQbgMSUHyLupSuA9uQxzBGGh6Cvatoug2jRJHCs9s5haR3b9",
  "key29": "5ND5iFSsb4QoptBwwVMs3ke2M2f4nxki7PVRZyEWUGN1q332wHCwVaJRbUf1vwEp9bpJDNeQ9G39DvpPUMvZWVcF",
  "key30": "u97QrVvCimUNJ6f6kQ7bsuBoaA87UboE4uwsw2T4583xKMQYEYcgVDxwYeUSLZYaz6mTgSAu7YNqrL12UBLoQbW",
  "key31": "4oAYmyVLof5hjSLgmhaH7KeT5iPSgjFBxQep4AepuLwKB7gfBQbB91eTESi4zEqTX9MMVvdpzoZpA7mpZ74r39Wn",
  "key32": "5d7j9krzAuz5rWP5nvjZjtzfWgTw18xACQdoUK84K4XcEYbUmZcWgL76UzzDfXBeoyXTSajhQjtZcdVaUkTG8rDi",
  "key33": "5TdkrAXBrdbCJHJZFJo4UxXwwhqYPz3ePC1N7cF2vcrWt7h9hPBJSTB8k222CZCtPv6uEPr4Ft4NTTxddUkYsdQR",
  "key34": "3Y84YHRgfmrNsRpTNKcMZhmdUitdnVxKBKocpkx1uXv5eC2vT3ZWLX3hyxaAsht9skRUR35QTBUXFY3NJf6jzhA9",
  "key35": "56nqUqf2P8daKdPnUxPAMpyRmpwgfGX4Md6wkyT1jLcSRoVyxhs6P8otds8iubLhnAYQnpjs68cKuMc14BhkN1Zm",
  "key36": "58jBes3EGSqoqfcoVrV4U45AbJCzj6FoTFmvAtXzHAPg4zaemGk5zULrUeHghwPnBP1A9yFRUTVFcaH8JQdGNZ5E",
  "key37": "55rQCsdGD1ptpjXZiVskofS7Q1gQX5FiJLx4dcLFVd7m1YQ7JxJzToD1iuwpuimZiU2hxDsMMvTBdX7nUTNjrGWp",
  "key38": "3X2cy3NvpxEQJSrDB9jjjPFWHey9QRPXCA4jo8VVH1bSiL3xWLWzuy7xEa8EwEUDkscdq7LqxrGGXYAuhuqi5KQ",
  "key39": "3mHQSdKSLKP3xtghRMB1L52azEwyqrhs4dw5DBsVU6PeQDXcCC27Mq8yaNfx1an1TduyN6v8p4m1rVma5nZHqDWH",
  "key40": "4DWHErLdPzpcK1Eub7s9peBwGpa7c2A3cXmpwdmCpitY8CBBDkJxa5rHNWwZZz9LE2NQ8F7BgpEtBW6hP75SNt8b",
  "key41": "39huMRwCpqpJkzCzkgXwAz5uRgVx4G47oh4z4tsfQWWmzS1998BgQcFg3uamJMpfxFhfCCBpGVarxHrsncLjqe1A",
  "key42": "2oAxtArRiJHisKgw15bFrwqAEgC2nsBKBvk1rxQwQ7UqNzFsioPWpkgV712yiyV486iSeXBXDTn6Rjfoex3jQwWo",
  "key43": "4usDWErLAPFMqp37CMkzxsJXCweeuYnPDFGQ7yoXyP6Y6rHDGksw42cpz9zsLmDq8s2XwaUUBaZy6cqUpnqBxicH",
  "key44": "4Q5gKXiDUJbjnsMHurXHDhm2JVjdXovFf5MBqwGtPY6iBktA5jANb4P7UdRszKFovtKjgoeTP6bcDsQprtk6NxQ"
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

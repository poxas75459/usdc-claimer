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
    "3m2JpszWp3BGZA6T4VA7pzSWzJswPDFq58Kas3fDCgn5zAX2inCZ1NJfSjdPd42goqHwYPJzGCugpFkvVFr1cb9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hq43LRZu6hXtBqkQL5b1miZyg8sycxquFyNefW72RAq9QhoVRSuA8AxqPs6ogyLcGnz33jkKxwHvJzj4g4H8RoL",
  "key1": "2VMSrBdpK8JYdBASkUfu5diGTkfAqfPjvVUFcVgsEyfYH4tkkAJ5bHVzM1VB5idMZqpjnyKmS1Gvrst2ZXjeaXRA",
  "key2": "2KCeahnxo6XZsgsmjVP1VbYG4DzQmmaYrm3Y9QNxLRA1fBHUURvd6xnggmyXRCvgyPz2AsSHRmCUjdXPh6Fv3b2d",
  "key3": "Yr5ofRcvdowCE9jA7AE45YhpVYsktYwewVxT1qDmaoUqaLFVogRtRBfWmqfUQKtE8eHdXxdgqzuaQBo1S2A9hUK",
  "key4": "4tP7EXxoJdy8zU4sW2dsdFtaYbrKTzYazWPDBAy81CK2mVqaoua2e9e6nqedRPXgLje21gfjss9FLsFV3knJ2MEM",
  "key5": "5C6UJUbKJJqgw9VCSA5CAGV29Sx689zjRC24QTYrKprh4t6xtXSnTzQv26QbqnRHseLofNemUCHwjsauTESYdwj8",
  "key6": "V7BpGhFTvBUFYCThAtv5a6FfQaRKFuftdbbqL8JnL59az4SnZ7xjiaetsckhK41RM15b66Qf4ApMbHyuhHRgkzk",
  "key7": "D4WyakBweK9uuWWSVHA6jzH5emKYH3mM98KLReAfTzFoiyNZWxXzNXUdGkiiDiTxDZmRCWG84kR1HGiEigmyRdL",
  "key8": "bmXBywksaofbFCzE39ZJ2cYdo83S9dXnxLdKWCcYAXmswk71NpU1X9AecNveR7YB968yXzpvvFc3sgCdgKXtsek",
  "key9": "4jb8tki4MMSB7BoHX4NdpDMSURHFVWSTRipJivtnx6WuZb6u13ytP9GULzPpptxFmbWvD3tY8JGNVhnjdgb5E7Rm",
  "key10": "4ZtmvHuboddEwupzaMXTGnxyvD67133652vGWLTBW1rKJZ6vM5mU7vP738c4NxUxsHkX3VsLWFX5FXCapX5wsoob",
  "key11": "43QSLJarRs9pV58YtXGM9YfH3bV3VgHX6Ynoivot9SDASAQmBn3CoJXPGtBoyb55qD4qRtftK3Zws1iXqPDqDRuD",
  "key12": "4GPdruTsN4ZZcLCUaSRdu9tgSTMi489EKC4wSwYQrYwtbZz2mgRaXvF6zGCQhfNmnpQnV1cqtk53nKh8ypk5QyjV",
  "key13": "1KnUfAmf6hkkVSz2GTztEMCTfQsSsz88R462X7pTyjTAwHtUd4YP46ZkCcwWFtWYvnAydr4VFPBYN1VKMb8pSat",
  "key14": "AwdeSwn16h6QPciHhY9BZyPoraTrtWDSgNQ8ACDkqThv5Zu844C2YyydDCHYERZjPiYQbZfuycD5QV54HYXyp1z",
  "key15": "3Ur2xg7E6SfmQNpoSmTLF2zo4WkP5PaJnuqSMHztriKiEDsHGCQiNeNj5VUYEQpe8QpeGmsyxvkpmtszRVh7QzwN",
  "key16": "5WVhdsRWFUPAVESU3MMvNWN4Smb9K2Dntho3kKXASEgv9KaidJCH9FphRWgGvXCSdbyFPNRRUhF2GJQtn1mBGNrT",
  "key17": "3Jt8pKZkukA1KKCzuWXHmE9wtQaqJ5iyMBLB6eHzLpuJB39Vz3v3FMfGsvJJMjdUf69cBP5z827rKfCgzkj8R2cU",
  "key18": "3hgh4e7yBxhWnsAY3bvPHmsx7YnfMngcCdt7YWbbFvwCutCst94eeVSN8yuNkiudp4GmWRvDE6JoJ5RVwJfDCgpf",
  "key19": "3caX2yERpjYnWqQAsxdFQtL2taU3qMkithVbNCHssWSuMfDzoqjHb4dAAFSREWLhCqvfgH5Pa9LQ2gAcuasoxTtm",
  "key20": "5zAnebMY1tG2paT3cWU1kzMQLLQBeRaCP9CFCpBubTqXiXVoMYwqXNZyX3T2D6HyhEAytx2NeKK8A57wzgt1Zx8K",
  "key21": "5oTyHRdsXPT8z3RNHuPe5Ts5HKxvBBDacod5s7bVb5scEgwCih6DLTQDoJq2UueQK8kfxofCH6vGK5RuSpYzAazv",
  "key22": "2h7T9NrMjD8wDdFsrj9GXHd3zp7huyqpNPnHswiNBMTCW2Au1CfPFEDyrTmFBK7aLLMeNuHo7LGb3ZBLXtWXGYR",
  "key23": "acZTBnHRLVqwD7Zmc467XMcK7NrqcJVQtpzuw54dCBEWv8dnXKPFFNtR5MwgXorByNYmUSG79vC9igZ5axbUJ1p",
  "key24": "1PyTTmfaZBc7aHvmGzetdTLooKUKhA8PGdxsg91hPjKtciEkkJFb5FGBDdBcKinCw8rKvVokJjvWbZo6nSfQ4zV",
  "key25": "2roGYBWnVe3y4a2cw8XJHU3PXE2GJwyjN2NqU3u4hravbTUaifoqtruoZfQ5sNbxW3nWmwZGvZTz4zZXrXN22QZw",
  "key26": "42HFJ4aECz77uRKnmPEZPZRoaXZreSXxbavYCU4KxK7MU78bKbBGiDsk8JfXxpiXD1u6chLSpLdDVLwL8DWJ9Sby",
  "key27": "pz9nXnNZw2piYgsjiyZE8PdqLnrDP317grXJXcZtLEgDBQSBRquEMYKvFS5Rs7pwqRHYAmKEaGqHKgrAnP6thgL",
  "key28": "3UrPJq9LBA8f9buR7ryg2Hrs2LxGd7AgJhXDaYoKCaPnHe7V9x6y48hwmQzZxozDVXgRXi3p6PbAHthWtQxdVENK",
  "key29": "4JPSwq3qiSSFV8bXL5dZre481YcCDbhu2qqx6AQhEmg4yX73BRRURnaehBiWN76BcV1wjjXDxqRpRwffveohnju6",
  "key30": "61AQWCUYdiGoxQLbZHgbH3E7m2WHBtYbSHyjbpp39KBQaPdqoHyyAUctmbxXFU1CNF7NyPGPZcj5e4ej9TxEfUPE",
  "key31": "4bcFrRDThpnpLT2feVD1htrLKao79gYJBSmc4ERuVxppPTvPvGGEPMjgQYi57barmeyvvYFCWsYtnY75cofY9xYq",
  "key32": "4JcJJ2kChFbfoDyXPEP64nSys1RRsmmb1mZFP69k31h6mXEH22qLmC6tMEqz8eWb4DU8mbVRMrryNaHjKPYYjbeK",
  "key33": "4LfHynFuEChSCmUZmCzxiBdmwjPPMFYGKHThwSisuxFuKeKsaBqbB2WkABY5H9tyNZu8qc8Q2b1SHZYFWe2oQsg",
  "key34": "FB3JrDCWfL451faNg7aVV5CQJ7z27GSXh4rCwWvfQBSBVtNWoGXfkVAXZ6BDVXQVjgZ8fpbFZXJm1D84CFiALSU",
  "key35": "2S2Chg2HYE3VvtBPbK6sfaCSfVsgGphy8os8sZAUBokiar2YaeppErGvttYcdoYkTPqnZy2wpevdy4vPndZJi798"
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

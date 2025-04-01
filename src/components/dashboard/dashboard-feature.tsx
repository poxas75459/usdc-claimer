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
    "5p1LULGFeVYvKSU9S6noxfhnDcSbTCd9V2aHPzMYhvWwkymQPqkb9XFqyxuTmt1JHfGG6X73unBbqANNR1A5diwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tkzz4EirEXQBNDnWet3v3EpLx7Scf9KLnqUQBWisUq9p4e7AH1UapDUahd4rSMwTp8WSbCD8V5ezEvhzC9e8AES",
  "key1": "4paD3r61Mev2TQanUM5v4czvCQCNfxnbci9NjBs4UkZpHhGFSXu8iWkmGfGqM1Z8Antxq5Kcyb8ex4sVioqg1oJ8",
  "key2": "dXJn7mxz7HgArDanNcDypb4CmNE2wzRHPZun3vvkv8crS1Mf4nhA6bcpYTW5zwxMWNC6wECKku1jcZwG5XpmwVb",
  "key3": "3xzfFzTbPWkpca5VerX31n3atAnQ3X5pFcYv2nzKgEDR2NbDLYvzTdVY2Ps6jYEz2a8uYrw8k5CKcDcaYzEBNbym",
  "key4": "2LqVMDexrTgFkHWDUs8sUBVm6X7bLzgPcmKx3poVDMgaX2dXdrj68HoCQ2QJttVnXmxJvjJKSLxpGhbEDa7oyeov",
  "key5": "3mL4hnguHqPzxovmC8YupSVg2QqPipSpcQbummQBk7oKKioH2r4SGfcyGSKgx2eggDuT9Q4zo52au5ch7RZWveBP",
  "key6": "3RPDSt9xcp4eFtCSDLm2DnDfaDrTCC9g7F6fScq1WYSx3FP9boSAHNBkE73v7ZSr4akeYvMtqrS1ZFe5N8ZR7Agr",
  "key7": "RnJrQk67bXcbjTmaujtEXmo1F7g5f7JHLZDDG3hPM6AxxJv2i9NM3tVtNAwpBvPxoW5U87Kew8AfNsAuQXm8pG7",
  "key8": "iEZQTQQAS7vAsqysEXmVrPfVj7az3isRipsCTyjRY11LdHt7R4G6e4aUsU4HyQ2NFLgYdnRXGjopPSJ5Ui22Vz3",
  "key9": "5FXSJwD8XrUHUt9FDC2vdtKFoPmdkzzTdGBsUq1fsNSyadSPSUb55UZBqYzzusRSMBuLidkk2kHgkeAdLS8rL5vN",
  "key10": "31ebJ3v4ZWTVQY6BsquTbpsfTDBh2LerRfkpkdkz5aHoqHySqGEKUHGzj6R8pUTJtu2GJDBLmBni7PTkVBHMr8q",
  "key11": "3DSSGpmo24QUjqYgbbDV8nDyUrLs34Bnh3EDniQr2rrTwZzReZLk8vz2LkW1Ns7ZwGewwSFt8B5TZapywVd5srMc",
  "key12": "WfWGvLfLeSuiU5dnuwNcR8ZvhkxuUEyQjES15BGHysdsGGcRaCzK1wqUAfeD3e6wJwPnknWaAwx2unTpwsEM75h",
  "key13": "23WAAExeQGZ1HDF4NUxv1mGP7Xu87VWqxuQPystqc7a4CQiKFuYWSwYWQpGtfPW7ZNbAJESB9wrFFx7LMaFxnzwN",
  "key14": "4utexjZWs6QY9KNLHQHj9WFax9GNqyckcVzE9DPNHMNwDFAVAUnNTeiuLbyGQ4rWPqJj3j1GGCvVSsiEiBiL9wgv",
  "key15": "5A4UPZ67Ntewwjj5h1mhNAzX9JfissaYEvRxDcotM1unnvP78dK6SbMqszph7Zp2ddyWWVBxb4hR25zQgaX8Dyag",
  "key16": "2CEurJVgqzSD4MgA9yb6GGiLvYnGhcXp9cuiJFSkq3TKVTuYbxuQzJ3htVyV6V333VxnraqtoxJ5SHJQqdnv89jM",
  "key17": "3BtbyLGZ9g2UaC2T5HQRSFxdjRV9XNCo6BSvUofxRg1fNhmAC6BoXuSZZAgEkxYxcMBfMiVcUc7Fp8bym6he6m2K",
  "key18": "2MSC33mgiQtvw8nAvvmz6ALizwyEBoSxXEuJdZLqcMtYokUJ7e6PwRnmkexGFyGnwDbXEcEAtP3cXRmRNf9xEmUu",
  "key19": "3b7qGewCg4yCLN79vJ7MTWkq4Byb6yJUfeNjuba48K9iKCyC1sKX7u5gF3gfHcf8GGqUgKDn9JEKkWdC1a4QM68m",
  "key20": "4RzLHVqspeguF2fdJ6ZYwTievJzunuRrpNCgFZvDN2ikYBeB1r7bq6HExvqHFKtjutQQEWmxzQ3B9NC6ZmYhtLm8",
  "key21": "4gRrRTan7oEPM9khPv4ab4HydsUh8LHLn1iQ5sDLY43hxxDTMHa9383Q6A49v3dfugfxaa6XWhavQcAnbBh9KR6H",
  "key22": "4JtN3zuQUWqoXM9Di1vuPXoRNAYu4W1G6vbe9xMotV1c5sbYsT9EYLcaVNiXNr5SvtCmAAWzfzLMJEoMKPiPZyqc",
  "key23": "2UqCpzHGFsjHJ1Jj1wyTiavaR87ZaFzWySj46hSaWbDtnaXS7GCScX3PK2nr8TfdjYDQcC2zaV1kxZ8uUYjyLWwr",
  "key24": "5eLB8jViNxLFbqaA2M7gDk9ywRzeVwgYZeLiwPw7AapZbVCHSibTLKVfi1nSU6V2GEb6QWhFryFqyVDYNS7vdWT9",
  "key25": "furHuW1KUtyMxJRxuQ1QGBYWndPgfz6e4AjQDE7Jwn842cu6bQHr5X8iTn4gX3ftKWZkwvA3ZMEoDertpq94bcR",
  "key26": "ipHCbKVEgtCQfk9AQVL291Ecb2jcheVPER3XXDvM71P9QtdZTDaeqDXEiTEYkf8bXGvTKb3Jz3q1YjiNWuhNqWn",
  "key27": "8ZvxuQ2C6kD2MmKsu58pU8Ajnv3RaeDxA2Vd54McJpvXFjuP418UH2tiMe7dQuMJDqXzaQUnz4m6wTvXKrMbgrb",
  "key28": "2VCpiL3Zh5jwn4bQFR1uSY1a9fY41ARvyW1zr8JzJpHL3DP8Hxa2JQ4gjhFGZukpmq5fVoY575XaPZ5jH8DQcrEN",
  "key29": "UPsHn9ykvTjgEbFM5h4cTUVnqnRWmbuuGGvqQJabwJKBeWFsfrLgjNa7oyqVNZBSWtLQUhodZVC6fXvbxQwW2Y3",
  "key30": "2nZs4AL9S7Z7xm7S1ik6bNZQd3DHjpygftbfX5Ag436SxbqHGthtVmLiESVFBY3MDT1YpR4aANRgrGxX9F8nzqZV",
  "key31": "4UQwWHEriMTGc4cnQugEvkc8SvywMdVEY3RJfAgNuY7yrmDZxxyYg19GtYzcb28eD6vcnXoc8qtgaH5YTeLndAgi",
  "key32": "FWsd3WB7i83gfrKfAprjFQZe8UKYq4MJF2eKway3bx4ngFBd74ZZKEjkKxZzKw8q5foiPSh6x63b1ciFR2MaeZW",
  "key33": "5SzbXfXRLv6xD8CyNn7avDByef1LKV3K7r4giR2LwrYqHt2GnsvZAYRnHVZm65e3JdAWpp2M4QwNrY3bC5YYqLFM",
  "key34": "mJkTS3WbqTuHsbD5XNsEfFmm8zF2HX6i98GrLKKpyhrntM94LnCK87vv54yWY2CwfWTTLicFtUWikFae566Gkkn",
  "key35": "2BJ4z9dL6oEkyuy4oqHcuUj1Lk1tbvLjTTwWh5KWbreVEZcueQqwicCmUrQ7aMaWvxAZ86JZ88uhub1yUQKswbq5",
  "key36": "5dt9d6ozs6sUGxW1V9d6a9cgjuzyXDFuA7YLPgptR2kkK739SQTUHGYvsxiQS5Gfg2eZ9uEpM6HAG7APnWNGZ5Pb",
  "key37": "5fXvEG5mCYnLqX6S3yJbfc11txctsWQ9eksGqyF6bJ8PM3MFjB3nNa2vHXyShSTi8vSN8ZZ6nny7aZKSe1zE32xG",
  "key38": "36P1tET2kHdQeHd8SeKmoPWTxj7qyXfPdNXCzkc8ReUd9jqf4wwKLAd65H3VWNmTm2UPAXZ2bai7mmRKXxDB6DsA",
  "key39": "4M8icN7bVqqML8xFQ5excskH5jxjN3FqkaPWgj876VjZd8ecHz6A5EQTaEfenUhNBmHp3RfaG7ZjpbTSK8otr1Rg",
  "key40": "3FzhJ3g6bf9zFiycGJ2PpABnPydfmgFhU9Y3J8VXYVYhZXqJXc52ySDQhRshvx9xdaDa4ciDKFdBfxzGB14VUCQr",
  "key41": "xfBwfQ1oivgC3W5hhX97evmYFvgrfmMjQ28ubnoJRhrwuKD5GFbJ8QiMV8xjstPijAjYgXuc8Qc6sZTsNBdiaEY"
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

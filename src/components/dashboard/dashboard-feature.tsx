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
    "4SB2Ks6ywWxD8zLRjqFZmLcDy43deegBGFaT9H68Nd8qShk6qtmKCgAfxfHLo2w8ageMniimS2HEXqDzsCboQPbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxN5xvNLjW5m6rD6ERp4Bn8dzMb29iYxXfkxNDQ38yrqGW7F76Do9px4DHs7D9ZFPyD7XYdFw9QWvArLwC5bhsX",
  "key1": "39T5Jq6WG7hjCZhp32nTkkC5UW5gZ6pBUwuDcbAt5evERoz8JA2FUEWZ8gtvZt3DUWvVaX3Fi59uYFoFEMJebSRG",
  "key2": "2XoHx4Litau8igoQjk1tthG8sowyyLQ3mc6hTZvu8MC9eaxMd6LpBEo4AzJaR9RjK8Bp3iGTgNah7VMi2YUEhgFQ",
  "key3": "4osirGbamC7jD6gZ8PEcAnifrWZsSYnTse2wde495hMoR4sHhoDeRusMPASmeeM7uYbjCsWC59CAq9x8VLEEpdYr",
  "key4": "61ZzYskuhrJrru6uTeqt12HacqygSrdZPkqff2GNHPd568r3bBkG947PLmFdSiUtAERCfoQY7g4crLFHgaofiREy",
  "key5": "2NwJMjPiz4EU8tV1qKmpATjf75uv1Z3yJ4gzipKsWR1bTJM6vpRMyNNZASPaGQ398FmAe7hUuCbvQLsiWWDsX6bY",
  "key6": "4EPTWwkguJMebMCZGM1kEhG5WswAq1u8NwQpFQuKZdq7j7jUwW4R1hi9umAxtKhULoM9PMdDaN6g7sWU667hpvWi",
  "key7": "3fwto1JnrkzvVma2cHZ5EcoY4mU6mp7NV2RdyGHBjQoA3e5ZeLPSvtWevn29sYubcH91JSGtv5SRnv1Lkxjkq2T1",
  "key8": "2byYKtP26z5VLvEDj8EGh2xAT15pAnfQ8dZujBi746RVbkMfKCZCPqDDQjVTh15srRpSVxFakomptKeB8TAnep3M",
  "key9": "5dAQRQafgSo5DXNfJcdVhe8edZTqxVs47qa5uV2zhY6rT3a7Ykt35LTWCRg1WhKt7sYRc7Csju1ihW4WUqujN9Af",
  "key10": "3wjntja6Hy1B7GQkkpLeoNK3eYp6xSYM8TyXFfVs7vba4yrv2YBCQ7t9b4e2wtB4gBJ9QAdva9mtGd1Jhp1omf13",
  "key11": "3BscHxqzyoXFHcsoTJPtU1K7q6G8U6WtifPL6UvWHVQioQ8Y2LJm9a3WwAtEgkACzW7XawZ7g2XtJQQmWjWK9AYP",
  "key12": "2ekK6dEcojcRU6abicFEQ2hMSMXrZMeVrMHPYEBRsm9vj7bLqx5NqofcAmcucSSJZMX1fuefUUkuXe82S8jjJeGK",
  "key13": "NNa9eGjJdbYQm2EVohWpmGY7JZt7XAU2VztuxfF5jJqH2BEyC3hMKeRknKFFrczxZgyzVQmAsRBMzE58JdKEByv",
  "key14": "49pg6ckQoL5UVwTV9t8JggRvwQauvoHntSgsvFoStmJHSiHMpqhpsek9d6p247eEfXHyxi2ayJAR1j1BXJdptgZE",
  "key15": "ixMhpEzFiSVdMGMBBEMUNYqtBvQbwN1VAz4ALSxG81Wo7zMiWas69DZQqtD1kEFuyvyR9JdY3s9jEdrzggoXE9e",
  "key16": "4pTDFuxJpLVd5abyDFSMsP4pW7vuPzReizWpBJW2gmCRSX6oakneEFvdiSxUSQkNVoZXAh6N97aLToi5msT8JpKS",
  "key17": "3VaTTpyjTmL8WUyxTYx7FpngQEwGxRy85rTzLLqSbYA7PLNCGe1MEVawNoK6fZo76jjx8T2h8n5iuYM1jaNf46U",
  "key18": "4PKpdHKKRmTRxVt1CBNP9hdEtkoQWxDGPejuoWaixA3F2qBnE2BEoSz39gxjVeMsQ4tDK9ULVpLRH6yR9Auwwbzq",
  "key19": "2uSR7Lu84sVuHvADEuU7TrVpyjBSiVJsH2AeCqn8nha4XEC9rG89b8CHR1eCs4opM4kexfTt1pyrDxs1Ud5Qu4u",
  "key20": "26UW5kAj79RbCyFrqCEMeSMZzqCCDvkmiKJgjXRgKkzBrgY81QQbAHCtS15yjXUzAGv7nN1xBefsQJZSeWoncRMo",
  "key21": "3HqhnUCo9W4fQ1jq1tZCjF12fnPheh32UtcpSzV5n4bY5i9k97ESN6agNuAkLs6sTPA49Ej9qWYL9Sue1R4wYSNV",
  "key22": "4TP1Un8LjBU3ELhDWQb1iYBR56S8ojTGQXomqBbjswrmtHAXCczCsnQqYzmUx6WT9bxu9PLgRfCJTGL1oodo1WGd",
  "key23": "5jHqjYj629nSy9Xxp3UrHSLmiRRmGNfxKAqW4zeJmrBnevM4mGSrbPfZpkAAcdYoq4BeiZFjaNuFjRYtCcwjwvAP",
  "key24": "3XpmHYe3nfbYyQ7WKHTkzxXyg2dyhXjZorYTxZKrpbugZDm53hfYEYFhfGnMWaBnbzfhY9XasAsqMorDZvZZFLVw",
  "key25": "4dp4ucTqj7roJRwts3VP2xjjCyRbs5bW9H9uRqLpxsqtZn19qqR6mL4hh16QNjbbMW3mQMaCvmyic3fiqikfQTco",
  "key26": "5DkTv7Ag6dCXgjjq1eSnigqy1DNitUYjXkrArQnkHYXJJkzcYJQB2Z9BaocawxZ2RBY1uj6FMMTGc8JMRREF3LpK",
  "key27": "3nFkwzHj76ZXkVmHY58ZCWXtCcmmyPJLxQ2G5kviiMYsPvah1qfvYfPSPUoP93Ek6N7zLV5AZrJmDuSsd3Z61Mr4",
  "key28": "2mUcJB26Jsc4XSFkvse6zqtKyjwpAZLKS6F8V33iUhJD9qptBPXGjR3QRufCK71wopwub6HWNuLDHFmrUzD5ddkx",
  "key29": "2WhxNPGmqUzYYttFstDtiHxRWnbEnug3KHppaJyNcuk71CEafNfSBZhiX1Dq4rdkNhpLmozgXYpE4HKgdeps1ETw",
  "key30": "3SHw29s2LACXg2PFisctaKGzUeAXzoZXhQLBkYJFYiuKFPJS4fgLY63BcRTPBNqnyNzdVnTVkCXLWqRwYZWoKK3x",
  "key31": "GrLFotZRAE5DB8Eytjcb2nyP6s1DqySu2j5JDgGKayeLS87pifyC8rrChHpo7MTVpVvhpBxUzgh2dzhZqLAUZ9W",
  "key32": "5UTcZQJJ2xzGRmrgh2njXeit2547VruPvHV1L9XEERLoYTMRJqNKgZELmKwnmTJQr5FsGT5tXtyD4tPbYWpqxXrr",
  "key33": "4CMBsp3JJt26BWL18UtbggSNennpmSFHisD9kDgPrpPKP7un1s25cN1pbsQ63m8Lc6eu5GqcNm63DjE26YgRRVvA",
  "key34": "iiDwRXEfYV12qAs8Fz1Rofr9gHvA3YA9TSsydQqJ9GNAWzZT4CnXzLLJdyLURBAUCYtjTMtZR3sUEXFCkjU7ugS",
  "key35": "3rtT7HCRsnvQrn6qa5LGqVF94DN98qdghrkzVB4eUktUBKX4DB7Zv9Kbx3Krtjt3PuLZUBzzFViT4rFctp1hu2Vz",
  "key36": "5xL9vVAQ4QMnjqrzg6o9BsKQYMDDTgT5Kgnsw9q6Bmq986Mff3wp7DAZoHRFRmKwsDgBnQh7kvGhBNmV74qDFr5k",
  "key37": "5LJJfajDChX99aKnhngSBnFWJxWH1HZX7xiRE1TY6NGzDJ8WvhQ2GR9xm3EZd1gmn2V1KFUprj9SXVJ6V3bfe3CE",
  "key38": "2enZj31oK6BwThcKyJ53aFmnyQPNomyLaUUSCPzrzH2HfmcZSTfJN9SmNFhXCtweC8QBkoVnpjfAApSmU497ZTJo",
  "key39": "4fAwEE8kjcFbkEopoDxohb6ApjtbERwtpRE995m3ybgeHZ3ifYXPZFrfvNjapdPEhtfgF24mQbckPmNM1jmYpvxo",
  "key40": "eATpa6Ma8vVH985vSQWb1PbaDahKnzkSLLB7d9MkNTsCmGAYum7yGj7Gthi6jqNYkrxWYYhc2dJHgVcSCDjariN",
  "key41": "JMQq7SWvkub7ByFc8C2HMdFDHNQnURdTUgGpdUFrRiA7e3undw2EWkEUPpJrrYr1T6q9TeZEaRmS3vLHCAmYRG2",
  "key42": "5kCqNwwfxLgEBhGoRLkbTmGY1YxMfGys8khN9DLKv6b8rGb2aDjmMbeaNZRrQBi8krykpVE9KJ9ZuwwbKWKVirUt",
  "key43": "3hFXCbcgJneYMJjTQ3cLE4vsdvFe3qZQpfGyG9zux9RXUH7WhR9m4nWmDGg1SVPKLbLhGACqTV38wL2YpxP7Hfxd",
  "key44": "622CWYz1MuNoNQZJZtbDWjbPsUrsLjpNFHuzTtCu7wt9jaErZMxX6DtWnZdAXC5ArsyznRw5zxBUP1fCAey3XXvY",
  "key45": "2k5K9RVzJTJMDiwaKuwYaV2QRyAb2LeuPVpEqjsj3pirmoti7emvVv5DTmYzGHHmPEDfbFYcRkfmFdGHogjyKXYX"
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

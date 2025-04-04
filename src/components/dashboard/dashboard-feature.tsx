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
    "DuCAY8QRA5xHnnSjtTS8ERCsp1uNnGHGJS8DFHqSZb7y84vj6FkEbEh9KBJoXbAoPrwJCED2mgUbm87Z4WzMJBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfYcuddStNkybAHhCTRpyVNGXiTCVMm7jccKLSnCYLrB4gkmcG6ZcptZaeZexhkrsXkcG5LgfsijFusTtDSurmX",
  "key1": "43DCz9spLW4PiH9ZkAb2hRQoktrW5nCtxXXeX4CX19LvxD4mpFiqvWrvY3HDAT7X9umZtCiNENWe5KiEBvFxJ8v3",
  "key2": "ng6MGZ4WiJ9Eq6CCi4XpdnY9euuwd12a7oweCtumKXNpuh7ePhCejbQkNDJmMp1bWRtNzjENQUA6xhkWTwqZwmy",
  "key3": "4rkG6rQwjJEu6E6SxqBScPvoid9FLy4iQHqcz2cADWNdCbNn1cpCtuKuQGVGNc5eyiwa9pYYFptEckBZgUFvynaV",
  "key4": "2EhJgxEJJ4QyeU3ajpabB8kE31LkyXKkE1ngm83Athbj6AuQoJPkv5xRqo31YCdm64vyi5niLBJxGwUj3wSjEG21",
  "key5": "3JjniFz8M8NfFBPqtYiWWpewMyMTPVTWvsUsnY3tJkKhPUgaWDKx7RvGewHexEeYRksV8iFrixJyFAdgex3ZeAqS",
  "key6": "QYV26n7jS9BKCtzvzWUNiicWWEkjw34LLNVwjRAb8hJPDMnJKn5CiRNGoGFD7xQUFvRBWX8erGBDwfE1oP7R23F",
  "key7": "NXN5Br6HE4fiscs4cri3kMHx3UitCtRR6uKjJheQZH5LBXmAVThwmbwC8trmBdE7kEqUkWVZ4uifF8X77Vf8kPP",
  "key8": "1KUG4BmaCVLJztg492euiSNcxfwFBbebjrgKVDc4C2Nz3xjLKRf19tV7YJVvPMHjQj8g42NYAkvqmBAfr3dDZNf",
  "key9": "4yjtMDRifemf6fv9xqcvyo2P2VhxqHhFvZKTms3fPXHKLEQt5xBkzA9GXHA5dLUAYoQkW9Rohmb3TRRg7tivefFs",
  "key10": "3rPrrZ5P18J23REnKCvLt8pCzm8xRyhoGfWH8Kp6NXzhiNPEG2giEdTRnBu9QgaCUwdM3kB1Jx4w6oibaM7MRmga",
  "key11": "3HKh23aQSgwq6yHrAmqdU2KzYKajLPEQDDp8UjudGdkwMDVsTWvS5AusTNvvehtEcFjqakrwU7GYs2jadTFAvegn",
  "key12": "3wcwNkiGsPUYYBZMpCUeTErSo6VrXj8cyhq1cokCec3hEXftJ7kKYqJByxFZpxg3xmDiCUNaimGXzbF4YSCtbNXm",
  "key13": "6ArayHvWwjsyvuFQQhBJTVu3YMP5Ni4wE8Umpuug5uF4qG5FuZWQa8aANtaGqAaPpsvb2QE5skY8uiUkgbAcGzE",
  "key14": "yzrSfDzAdGCLRnzEgZG4MDmNx7VvKL4T8H4UvgSySmAswWtvv6bbWHMWyoSo75P9EBs481quyYuztZBHvf55D7B",
  "key15": "2KLPKNxnLvNHhzQPrzd7NR9rXzqqDGaxm3jxxNvhwTGkQAr8WBdBVfhjCRhAcUDPQF9rLQkco15zVtBfc7AvdEDW",
  "key16": "2S74BU5jju8XgdWvemfiTvfXwedHhu1UiQtWdAertEAKirKmfLSCAZ4BQXuJk4Ri2XXoX8VSoVGkFcwNunNYCR7j",
  "key17": "4BhwciD4NYBr3zpmi8QMVvtjqALJdLQrSSs6V1yh1YzZPbs8sDXJhVpLdM1GvV3tgxKQB9syi9VPshYrqjrbyCFH",
  "key18": "3Mk7rSsBc7KwDX5YBpjg9WrNEpiJbe6w7yBEAdogH9q3brn8bzYnki5RqLVHgf6BNrBxotwaMdkKrVVGRN6KCAox",
  "key19": "64YXiY8HHSynnwtnCJQTrh14SY2AauWwCJ1hZUqp1tBbHQbtj6J6kQGSJGib7cUsDgpsSzPYYKYqSPCamtCrdtAn",
  "key20": "4AvjvJoweW8tbLn5L9RisUAan8qBjXwAHFC3ioBP58cCKWfifTsKWMp4Qo7qmgwHwzkSnAVabuePeEy5mBciS8CS",
  "key21": "5amjKsx2Jo9vfdPN79bRSadYmV6SUdrShMoCbBBUFYmM8jHweZ6LvSAk2jyjj8pMiXCeXc1gKiZgMomredSTjeM6",
  "key22": "3tdg17hX3RUp8eraCdxxhrf7JFXBg9xpih9Gn2h1YvdHDuwinEq9bN6DSQBEfkMU6dSzHk932aJiDEs3ZoahHgSR",
  "key23": "2a9G98inYNfJbBvrkEi9zA8GUnG59tneHsv73HHko2eiQQDwMrPcxtNuLThUqRwsyghZkCdVG7gd3QcgnhW1wx2Y",
  "key24": "3fxiQR1rZaJvJfXWXJwuJipTKP9T21eVssigNZ4DFfUs7Tm2pt4woWa3YToH8SrgbzxmSokE2MPN5dYqCeqHB7FF",
  "key25": "2k1UVSeVyZrwNsiSeUFRuHoNMXkHuHTehfBTnBfM5FVErLvYKEDBDA3ycmuUCwQ3uDydnawQHGTJycnwqwgTpa4m",
  "key26": "4MhtSu99q5wwmfkcHjg1VmgKXgTcLKLJPz6F5WM6HqSMdqWwYNk7KCbxiMmB6p4B4ZMzFwffo4qCkTYVURXmrktW",
  "key27": "2hJx5dvPykydmnb3nsSukoSChQZuPpBeTgJw31vdyBd36nRtyVUvTPuoMaJ3Cg5oEJVw7ErnbECX5Qn4BxcbwEYx",
  "key28": "ZR5dk81NeZbQh5KCLdGXja4hMxYBLXkwQ6HNW8KMcDfUCKNgTDGyAWSrHx6M3BHTHnhdTXq19TfynEMpHaXjD8H",
  "key29": "TAEmZkNathX7YW3Zp2eaixQLLDTWLsTHve3gQL9BBSYsCp5axxzMj6FFE4rGem4aaYCivmf16ooGTP6qF28Atur",
  "key30": "5KpVXHV7AG3tnNnFDDui1ZgW97DCsY2Xohh5mG5ttXNLahrQWW6m4EcaFQi3FgC9Fpm6fME99grWnewkGxbsdNpE",
  "key31": "2VYgushUgifGLeahLzc69U9ZUTepGMnKBYm365pQyNR1SxdeZTfRiZ8bX1DG5scYfBenZnXWc5KJ8tyzAL7pBsNr",
  "key32": "96HFrgqrNLRmP5A9YDs3DEJ24cQYXBkhiKFpibFJ96A7ZvjraHCX5J3BhYAjmmszjkznKoDd6xGHoyDUHb5bc7k",
  "key33": "4XhKUKZwVcZB4ey81t1fb58SJHvFSAxqGDMcMy3sFu27c6PTVMJejD8pfwiq3tdHsMQDLxECA9iTsoNUNHLSDPaS",
  "key34": "4zSydvaV5hkQovExUAnc9LfiyXm143MTAHN8WCWqErrBtigfdqjwEPLfRJDegHMygu3AcKakRsoDudKSM5mgqMcy",
  "key35": "5ScuSfxqGLMSnjvXRnGZhkX41jfXJUfPSKJRDCva6C5RbQA7j7ywZAS4S1ccvoPracfzyQ1Qj7C6fLv5qyjmis7y",
  "key36": "5BxQyNPTA1Hj94pHTMiZkJw2J8mts6X1JBrHD5JV2byJndjgELUvqX174AJBXisqD322T7mkEvXdqEryzrEVRHDr",
  "key37": "636iq8JMiwCR6GZZKsWT1JqhzRHeoDpWRQP4BLjVURthYCptwjWQ1YZxY7xWTvvoD6BmY2YWbnk4eTPTyhaAjBxX",
  "key38": "3Gc2nkQdN6sw1YsbHv4oFrmdNMPBDWQ6F53n3UJ3hU9QdGeBi7X8B3sjNhjj8BkubBmACtWAYEW89KQtybTVALki",
  "key39": "34i6Xd5WyMtVvbgJTLnhL1AxizqG6KtkZzVZjjudyqgLzmaFyo3ox5QJyuGhNcEHJ8jrao4QbusHEAnHKUvsAsSE",
  "key40": "2hzbGfzqNsmNEtEGLg6TfUgDuZqmJBk5xDurh9W6LjsBcxdJky1bnrAcgrWckX3MxcNjYf9Bk64JLaLHHqmTnvvK",
  "key41": "2mg5r2y49xg8hvHJWCvevaBn6ra2bx7yNSb15ExxRTfCcXiNwzFkQ2bYokovByzsXWbUDUPVjmYS5PvUqJkuBEvF",
  "key42": "4Zn6jtXANs59dYa6v2sdnSXJ4sBuGxW5zHdx3CFXMYTJK9mFEFxT3aZG596uM7BQVLasBv9p6bwsxe7jUjiqVCxB",
  "key43": "4Z6kmq2p957VVwC27y1cc3RzcBxfCZJsqw8BKWLFwo2NMmf6KqJM3r5AyVQ7qexmZQJvGKhwPLHGyx6HadVo1hLv",
  "key44": "4H4RmzAB29ej2grKa6h3RqNEmUBh5nYER77otSw8AuU8n1s42aFpgQmY9sUFvhTrdv7ezydW5K3rWPAF7K5oWq4U"
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

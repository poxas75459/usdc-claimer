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
    "2AZiJniXDdkid1x63fWiXYFATmQWyiHbezZbM4oio7c4pFsXa4nmzA485jTdJdiWQg1gY1xVHu3FxbmQSQYkVaNc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UDnVmufMQTj5DWD8inoRg1NHufkdZNmREFFHqxwzDdA3weaurAZh3mPJyweLg1Xzdbs9msMQVD8GpEDoQt8e3xp",
  "key1": "5qdmUuVTbxp5rHpcb5rr8KjshpVvyp1BYB3uxq6KSVq2WPUgPaNprn8QUmwyPTPD8C2xutFPTdWitxewsTUFR18i",
  "key2": "2xuFC2Umd88abDoZwQ61AjNm98nF2gKv1eoHueYAS9difJ6pXQbo8hF3igqZJA2p3mHajcjaUu9Ej2f11kcBoKE1",
  "key3": "cmQgDkQT7kJ9UkhJjXnfoN6X4wrTuzVooUCtXb3oS6Pe13yc575zEnQDoYXPv64ndbjXvfsywbhBGAoi1HMuV9y",
  "key4": "5dDmc8mDaGN5dE9Z2uJGMfCDhQ8vQVc5DPSD81xDmAzDCU8ZsuXnxEmE8jMXg8DygUHjqpDRKQwnr5KySocpzX9m",
  "key5": "vzGdnpSv9GY6RpQsRjBZXSgutZRWLCsVrC6bsmpdS6B8sKJx2gGe1RHHbNrpj1MmmBTrS9zE8oHhHaYjMAPkE3P",
  "key6": "5ziL8YesQs18SMz7p6DeG2s5KPfcyAR6pbgSrp8TrHrm5QfN5FbmicqKsh7y61jsA74rMDPadG2nnDa4uRDjuest",
  "key7": "t7e9nGsATkugT29AWDsGEpLosx2cMTr5zWKCSZm16fVgaLCYLZ1YndWn9HZczJbVzLJvCUtt1YjAMoKSUGLj1ZB",
  "key8": "U3cRXPny5ShjgZsK2gckyCxx2oms6mnHE3fNMXHwuZY1qjnGFvxmYGM11JhEethWB8qA92wXitHGb8MLJihkWpq",
  "key9": "4xYNVV2RH5L6sLQxNbyxWYGS8B2WbGXASYQtg5TjSdGb7CfcPNeJFBLHFi5opSfrQTwT9gsgLmYUAyTYDhSNUhHY",
  "key10": "4QxZeua6xhJSr3512T9M8NFUZxb3Cgkgkpp9HMFfqVp97FvfagU48odH1FqpuJ3Qg7XMEE5oeSKauLBNL8Pi35uq",
  "key11": "5Esa8ChhFacFdtHknpMLFMtLprH9PfbZY8t9qnGk9zR7Ndmq7im9heinEYBgoygFW3jgfZvjC7yGdePrd7V1ZsR4",
  "key12": "2D8DYFVfSZnstNiFfttqkvwkB7q2PjudaeP9FuuDm3ym99HXbv2xQDZnYY9bxNA6nSpUZQh1JhQ2SgWdz5S84BTn",
  "key13": "66oQaTCbe2eZY5WYkcJo8KMEUzawfPvqn2ehLNtUPnmRf7JcgB37bV52H3h8c6HSKJFKYwb2dzLPuxV2DgVKxkXh",
  "key14": "5vLSK7DNB4dJH1iUg9eSqaYfrqghYMJkTC9u2bwRsx74FuFE6dxoTNzBLcP6y7QDhqG8ergyzjVz2ake9Gjj1B68",
  "key15": "pznQ1Kry5Jyqr9bdkVmPSAvPgwCcoySPvVHVqcsyDqSFX53eXTrb6CBU4zdAWn9DuYTurHtk7d4tEnV7chsNev1",
  "key16": "2oSsduLvboYFana6GtFZoaKad7gaMuJt1cKSgXnB4zuJHMpED7AiRvHSwiNBERE5p5Gu4fRwzvf58Lgn9Rb8Aa8k",
  "key17": "6drrVs4RGhnKQM7ypDfFYuvRdepAcnzocbpfRr9oYeVWxLDdbNvJpqW6Tk9LM9CNcrPcuGTXP1Secx82rK8LK69",
  "key18": "5HXUYBes13UokRs6VqtchFye1HWLAoPvPn5znjDwFhELZ2J6F9VMYhKUyfpj4c5afaYettbQ8duNGdohZsBnWWn1",
  "key19": "pZ5fitXEL6hBBauQbsj3gnnp1xsnBP9HmKkPd5R8NtMf6bPQCaAPANFjQCqsfdM5SDivX8zFnvQhfixUPRF4gU6",
  "key20": "fE13hP7k8GXRfYRp5ZDF6D3NFjTuWZf2HgDrZmAyyfkMjPDSZiGNsPaz3NP6wNy1FN2Yak3Zcwq1ycA3U56PQdW",
  "key21": "65eapWG8vTcSFLPLumSQbzsrVPZDhNoHF11xq1hBJ1g3F7uQGMWosp8V4NxpCzGLm2iMA5fi5XYNcC3Rk8Ap234k",
  "key22": "51T9ko8TXUXW5uzUm8h5SSgiDf6991ha9GAmUDXPQtUme6KfMRdL9hoJRp2Da4U5VszRSJDhFBBN7N5sW7F8CKoa",
  "key23": "5TwvKqMoR5TPLRpWBaav3fpfpTxT6Lze9LudQXk6MCa37vA9gjh6yHwxk9BN6tGnAqELLMdcyZD7eacNzDNyG7WD",
  "key24": "3MivHi5PecQAWd962k47wLUeiF99o6r5MKzeTs93zQuswRJAbde7sRRKX1ydvLxKGudMygkRUVSvzCRzXS2JGY2h",
  "key25": "4NCJ8aHcr35khQ7kU16KCuFjRZ3uPFSKa22rAEkBMniXYFdNbBm71Ep232c9kPheGiBP5n6PdzPtSyUX2GpuKSnG",
  "key26": "5wjk3zr7uQhFsAueiBrYyKymUtYSyWa4urSWqgJK7NdVgd4jabU4xXGcTgQUhenHJ8E1THcig1PEQQGhU3U3S2k8",
  "key27": "83X3VSb9V8D3UxBU9CeE8QfwpgpZrxERSS3UqvenNQaSSVi996ctyHS173GwCb7F1on9kWavPEZZDjYrxenNzXG",
  "key28": "3F7xtah9h9WUsfWkzR4HL47Z1LCptm84VnmNpNHeehztVsosTEWA8dwsf8NDPby8yuKL7w41T5Sx8mwgKC6C7HDo",
  "key29": "4c6yijHP2YQN6Rk9Cs5gKrY6YKWG9mBW1GbhK1Dr4Z32BNTrB4ALULd6Qoeq4RfhEX5Z74UqGxstDJ95Uhd2TB5w",
  "key30": "5NPjqeo9Z5SPywYq9mZP6brw5FQf8C8eqvNyxSCpSoL8jaoCFTRUwCjCJN4J45BLpBfW9ZdLJ14cDjT5w39iFPFT",
  "key31": "5d2nXChffthsxjchPZCpSv1KFop3EbQnggxRej6haLF3pz2x7FvqKKeCxU4CrEixrahRZc9hD8AYsj1ajWnchyNE",
  "key32": "dndmyHuAmDbNcNt8A1sQzXs9mhB4A3ndJ1z2jZ9msm6sXuj6umBbCvS9ZBkn9RBpvGn5yS9kUJU4y9XUmEFq1xo",
  "key33": "nZDkE9zhTwW483dRmt8cWwArVJLvRLE2bSc9TBP6e2Kxy6G4Fzf95hzuz9zaVQHkgkjM91t5SpfzPuTFpgPN7fc",
  "key34": "3bSZkhYGg6rAB4Ntw6iBSdxLHmp6WFcNfckTkhvkdsKKrzyoMU3sYHAAQ249jphQFUop5VD3SX952HXfuWcufYMf",
  "key35": "3rMapLdAqVFsUjUUH3y5BPxwEfTXRQHtZYZXR5VtenEoQPUKLL8jopmwv1WXgu4n7Fy1jw6P2CeE8KY4wuZbSgAY",
  "key36": "3wv2nCk5yTmDXmCeReMrJQZcCj2qTXbjSmejcDcvR5AFo9SqtvFXD3scXppYxHqD85mZyucg9tRbCH8MW7qrHWZj",
  "key37": "61C4UxJjw1Lqdvcrk2PcCqfG8dgkieuXxAqBM8xw9d9H3rD53nGHP7CiXrxLhzkwqr3YUqfCHDxwD52TTmR3LQKH",
  "key38": "4S9WWbGqKMzP4zCX5h1uSUapfrQ5oWGzdzqg1FYvVsraAXVYCheQ7MqaJeia7vaQyRrFxFjW84MEFG8BSUJ9KqZH",
  "key39": "qd1WaXnCZhhPQ5pNjwXVHBJDiXGArLpjgYpVVUG1BeeGcccsXRQsW8eTKcmw937jxdPaMyfEviR8pW2Yzoy7s41",
  "key40": "4VUWBksVmmxahcZcSuJtCXL6N5LcakJYJ5vjn54SCXNTezKum3R5oQMnTh6X6Q1ujRMsxHbvKRMzeAs4LUEVT2rT",
  "key41": "5JSd6tJBzhtLuLKNWr7aAM6CwBogsaaj3mguAy88VDwpdaPvohM5233A1up89UGshoc2Tg9qFpekv4RDo7ERvBL5"
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

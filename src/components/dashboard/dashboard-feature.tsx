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
    "Edz796DL517f8E5BPg5DmcyWZm5uoRABE9MfP3tGQ9soe9T4Bnr9bpqp3VFTZ1bENdhbKubQjooS4LEqff7DNp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4gLjvGvWB3aRJVKAty4NwEbBjonT9i466Lbg7i8KXm4QZWqXrbQwTo18JsCC5BSgYqDuVsdEAkN9ujUDJLvFgg",
  "key1": "2gnnPhkqqwq5XNVAZqjnVwZWPwngsuMpQY4kkgVKEuw8wQPomiptyN5sAEgSyWAyxYvLResYSxkyKNuSFintCKZC",
  "key2": "4SoLtbcTShhiRKn528TosyDNYvSg4dGkNizeehrF4qBVbrzSJZ8iQm1wKwi8b1hbRoUfhr1sztdNv24mSpKWcXSs",
  "key3": "58Yi5nJ8gYQ7RHBkM3CUabhifMViCyoEtAp4n7DDw3x599D3Zmg9fu1WMRGsWiPEbM2mM7kFmkvYRgZatHXMtnWS",
  "key4": "62Z3Kk2X5xX4jNjXneaDHqURioqZQ6wf9mTbhanzyb2fMHwpzXMPNqF9RqtX5mHr1LStQjeYiXpQCnwyQbbTGhUZ",
  "key5": "5Gqx3p8sXytCJ53erWPByb8XQ2sa13HPfRVt2PcsANhFRwT7i9ivWqVZq9PR9TuArtWrbkVsMZi4KB5YiEy3uerp",
  "key6": "DzeNByCdkguA9XMK4PPPvRj8gJmQV4dbnoobfgcLoab5hAk4e7V8Us95z3YC8xU6gkrME7apwgzrR3ZcxkPNV9A",
  "key7": "ywBAmLZHtFcyXRkJ1f9mqdjnkMjCnufsi26n6kQHbv7X5Lx1zwnEHPUaNaQGsJ8VN7BjpmuchVZKYEKqXJdGcuB",
  "key8": "3AJZPTYBSLxwApYmgA1t9ZkCBTu1PSZWPAMoZLaUdyL57XM7esSuypgNFjkSGbaDqCUTpVUyr69iioycZc8jF2Lb",
  "key9": "431GzLbgz3xoGnwTqTQFiscDDqStgY2WQPaLXuFsdJGCLy59sHivsdNpuGb8nXUhPBNBZPechAWJT7EfbDvLekpZ",
  "key10": "3bbmRDk8MhnvYq63TZG3AxLg2njaSNqdAW6iCUodjYkKs85CW94xK99NcjBu9ePDr2Y9MEdFeHdXZs4cCbZskrKD",
  "key11": "5kHYKnrvzEvBi1r6eg4stxtrNLFnggVkmHfnyo5RDbDEgcuYWR8K6rJEc89pF6xeXPKcBn5pPDgSPCLitCP5CvDr",
  "key12": "4XD1WxLWLi3sTFsKtzsqLD8yjCQUbm8GaAdF43QFMu1hHkbsfffxYBYdeA1tu9JimNdan5nsJtpLVfHQJRpHwf3P",
  "key13": "M3D4XLtNHeMDntoxwAKmfn9KHwEFBWKDVD9nQZBe5UbUuxGnvk2hKCSomxNpFr9UunVCsq5kXVJxzZNaM68s46H",
  "key14": "63WrKpgTkwks3C9GvbdgTQ25N9teE5BvfbRVDRpwo3cmsPu7Dvkx6E8CwpCbvVMLUn6Ygqh9rQffusr97QQPUoS6",
  "key15": "5cXqp8uoZoavKENR2u4eMopzU5pdYv2b3kZ7iiqi7ksJ4XDr6c7ZLyXThC5a4KoKo2ZaL6UxEpsbkdVjCedpLnD9",
  "key16": "2icSnGfcQqvx5agDeQqKWhnviDRCCSq152Nt2myUisPD54JihKz9TtqktgfeD4CAjftwLpFnc34TkLdavHkq8zTg",
  "key17": "59bUkiWJEQkut8te5tenmNMJvXPz4CgNLqHbzSY67KuXmueFacKY1gZzmzhV5x5PasvS9bs4qQXVszXYME36tHMp",
  "key18": "4rYSbKTFP1o6K4zzMQPPRdrqSK8NLMgLi9wCB8RqaLW6SMk2J6CBSVDEQNeq976GtWXwHA7LtozX3r8fukc9RgfR",
  "key19": "2gaHUvYGjB9WyGnkrEt9YLNyzxNFd5bWPSqbysrWtKJtULHTmmheAWhjUnUu2K2sDjiP8cJP3gEyqULL8wQSqbPg",
  "key20": "5zozyQ15Pctoz6rwK3VrX47ZcKJTwRVUtXVe6tguha6sbbp4DiWA5SzYsLJUSHQ3CgUVe8z9jRw8xn4dk5r3B8Pb",
  "key21": "4NDfzn8nC7afTcL8vRGXVzjZFuYUBKhLbr3XQFpgkPzexvqSeQDsVwPLy587kwEsDhLg9QzJS5xUhrUbQYYLLyVS",
  "key22": "2LxbxmjL6pa1gxAXNWvLAGwuNja8xi6b9BPUpiLx9iUnvdpcuR3gq2e4at63MrRDgymvQ6hwsVugiesryAGtQpqq",
  "key23": "S6NfprECBWYXZTiFqF9wBscPzkRagjrMPgGoMcqK7H53XxYuoKU7qxPueRwXAMvRx3NjhW3P2xJXsBUCUpUawH2",
  "key24": "3XzwuZ8g9uspxTg95vnDNLSS4unZZqbak9BHbVMQuPXnQKg16fPW9D6tPHJFhRNLenwMxKJFBko2CRVwtqnwbPEL",
  "key25": "5V69YcVCviUvGZJa51vshyRUTtzZTQt5dC1coe86tcyb8aciATgQLhd6mYgLaMQcn6A3nac7D959WmDxrMuc9JhK",
  "key26": "5dMuKn8RrduJfXD8XnxauF2LRx8TPfaYwcjTB4SwhUjtuYzSjd8JVbAjWEmnTEcUvxADSjZUqvuzMuTDCJ3g6onE",
  "key27": "2CMqUdhLVCpPtwqeqWMxEwRfS4huZiqJxhXPp86iyrSv4zs6paqgpj3LmVWSxG5wUndjmzjbR616AczQhtyAKoxQ",
  "key28": "MfbtQKRdM9i1vm5JKzBZkMsHqFyxRPdGNo4BmtksJWFfYFFuk2BiWFLuKA5VMdVTDU37EJnVGB1RoFKNhHxYptM",
  "key29": "4VhFySpvWgff7eLXqtqgG8k8hhwC79rpqRFE4QUE9v3GWpjjBL9KkNwtJ482sCxJo8RC1YtkP1WzquRb5P4TU7Z2",
  "key30": "q7jLQdJHh8w244CemTUFEExsAmmvaNn71ePuxYCUTs277aSyT4ijMjmovN92eTfMahHH9pjZdvXWNzGohFthLAy",
  "key31": "2GvxmMYEnK8LbeM7Pa7X7uP5WbpR4zSPJax95YCSPuXJ3YWENhUKXuP8wbtXGZ8p2fwuV34R87kjg9vqMeb3dK2z",
  "key32": "4QEkC54ejf1oJhyZ2cEWjF6tJ1ETfyy1YUi32QSHiwgipCg2pnEJjK1ZVGjb8wnC17AbFdUe1GEQ4oavyWPnGLi2",
  "key33": "5FbKvvBL7K5xvLVEgSaFLr49oXubRAGhGkhrvfBTCk1e3VWQaeE9635SPijkwNsKghusdWiAwA3UNZujJvp1Z56L",
  "key34": "9vjhUhd1aM51xBUXiC6yKFXGpkrHCm8beXxKB4u3wveMSYw9DWZULNXKpk4Yvd9QnyoHY9ZkL2ubVRK8oM3icTp",
  "key35": "2pMk3W93FPdE7shrMWLwEo9LtqQi5Nq7Ax2UjnGHZ3PHfAtkjBgwGvEXpaAvJ3jZJHv1Xo4xs41RBPCXAzhdt1mk",
  "key36": "5xSGsDyNGPXWLHsQT7aSSXzSarRNpj49zYQJchBraKpL7JREG1yurxY7HHwoLQkkFrqRtkP6K8DL2Xf2bjzr8YCq",
  "key37": "2Gm8hAivehLT75YB2CpJjpvRaGZhRikmtSe3HLamtheZR2GcifeKvrzP1eE1JwSrpSeaXePLgRYmgfBRNLyND3wG",
  "key38": "4es88Bx27LvmNNue5KxkcwesTSbUymrSwGJYnimXrr7omPkH7tqYeJUkUKf9UhCZVdrSsQKST8zH9hj6Tesur5iL",
  "key39": "4cMBWWyWXuT1qgukTLyE7DPTK9yEHqH6U79akkQNNbio48JUjSQRu3GZf5fomaJYDFkzhrBkgLvow9CPURHSNXRA",
  "key40": "5ZaNqTCvd7uUHUDYzwhAp9Mr37m3muXN335YJh5L2sEAUeo2poHwLfEgSLPTsnFUMr2WGzPZYK57gAPCDPVsMj3Y",
  "key41": "4RfN4qwXAYTc3cn8VXGLTz3QzmNL9oEWZdfWfeAR2jT6NVwNv5ShYipYPfFcaJb9fapKYVwBYrLcjZ5oC7Pso486",
  "key42": "4dsqyHVtFGqgsNaE9ACz6DtyYyF66wKgoC6XQwTPtm7VkG1QX1mwWs5UrwKwGyMoFtu4i8F7FjVQariAnadsmJ7y",
  "key43": "5w4b6zED1jCQZwjxyPDvCT7MNfsoBBy6vU8LcAX7SczFpoMBZ3keAAGigbcYjy5Pg1V7AZSnQtQeVkdoMFdQqxed",
  "key44": "3SfdZP4VmJQnD6np6hLnxqAnQy8wu5DvSGE48HQCRUAriZMex1xL5QyLeEs6JiqFv1zCfvbd7ARYNzNLCWesr2nW",
  "key45": "29wZk8oSq4YNUmMZBmdzL8cXdCXPZabpTeBQTFKEpvEBYqmUmTFq86xm7ja9sRe2zVdeBad49WbRH4KxpHJ83u5E",
  "key46": "yXLeF5wfWp6v6b7Qs8HGRZUVLpMpcA34S3SkbTg8CMw8btBncD1Ye8h42dzfLGXA4ssXAkU4ZA36Neu963t7d72",
  "key47": "2ZU8W8gkxTSJFJNa8TzJeKJKGsdLLejK6ygaD5C4pyoNQDwi3H7cCsm5AdHWRVF7utkyDpTTocRQetc7d9HwLZA9",
  "key48": "45DWFpEY1FxQYd41Q3yyn2cibTb6nYKVhbDhtYofiZjPCipWDEcd8JcMjtbxsbSDVVAkTAggci5X14BcR41GZ5dK",
  "key49": "4Dr9RodeFYDPTX85o8NeKo2d3UDn97yXBufTY3paaY7x4WfJMGmYSRaVS5tVMxxNaMVwbYkHaXYBtpPf5jWaJiuZ"
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

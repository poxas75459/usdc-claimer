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
    "V5ZPYcXHi6MKtTe2MvP5KrycnzFScSbDNp1EzYGX8wSVHM542t5YHpgdkcuUkUnJpipp9fAFwQxE3hqA34cpgg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7tn5UtugraSUAD357DZHkWYgHsHgwu66DnCDvFbjRo6ZyJorNFWQjS7LFaPHxvKqaMKX9gnJ54MZHoX4TwKxmo",
  "key1": "mowDqocQUgRwpoD7rkMcauUzMmsKPeZqdxPHAe9GuoG7kLDhUBmPTfpHp5MLQ3DomKtjQW9BgxQKe2xyqAn87L8",
  "key2": "2tshBfebBHRSVb1RATuZmU6618Dqc4R9nTKYAHqVjp55yLdyLWBfXiRJE7mcuxNnUWVZ1RRR8xo5jEuW5RsrW6Fp",
  "key3": "5SqCsLHM1ebmLpS6SFa5J8NYZCh9FBz8BAkv3HBCDLspEp1U57ptXfrFiWwkvfhSY32E3TCECiTUhH8EJpE52g83",
  "key4": "3xANR9rMJ5yxGkTV8mG9SUu37sSpUU3TZkXhLUB5mpxRAsyHKJsbaS4pArz3QUoGznhPMsvyHwotXoYqGb27CJex",
  "key5": "aDvb9HnLrpsCRpNUYsbHsMX7N6Khr3GZNMkHh2ffEMF8hFVzsQt5vRTwW8GwX8SvphzqbX5QcnKFjG7yLLtY5G1",
  "key6": "3tYiFvKEdw3zg9dD9wXpz5SazDovYHMmdMhzDuB68hhr7Kr4U5unxTzt5MUs2FUnVePH2pzUCYp8q9CuoA6YCrAc",
  "key7": "zpJDVfCosMndZapBP4ELmAr3JASrPNcVNMoRwUY4c3yx3nwJogb1UQMp4KteGs27bQV45uKnJscqJvHjRUvG9qc",
  "key8": "2hy894KLTHuov1Mwuqxa12LyBgTQiS77VJQCbbegjMc3LgofouSM28XAwELWktfNK4hxfadbs7HGs44vAh9dMRZE",
  "key9": "4tKUPCnGqs7jKpS18T7dnsakdFBsPTwiLavdvmeRJ7nZEdMAHqLgM7nu9QLZW1nhBeWizhwVXga5Uc2tWuJ2Vyo6",
  "key10": "21gBjU8TEp5naLnipTesBCx1RtgZEEf819n76XStv1NhTbvdngkoD3to42qH5pGLS3fgn2JxnVe7AXY3HeE7xJjp",
  "key11": "2P46eUzmH6JpSLLWcSAd5E4zUY22X71YcJ9nDpXE5vLMYYi64DTrttK1xsEhPBcqRgRRC9wzzedFqxFuj8uayhyB",
  "key12": "v3e2CzZiY1BYKnkNG67cYrV5rd3PUQPQf4rdtyEQGDesd6nRNYJR3DdUKZtc66VXtKvruQQB47fyGUh1aMNgztS",
  "key13": "4cfEZj3xReyNXuKXy1DtdstBXyTZ3RbQqU5U39Dh5Mve3QL9WnqR6kLqkvbnxNxqdcrDBZmY6Uoms7hpVkQsexhj",
  "key14": "4ttHFVuyNTFqeunY33jt4FdX4zwNAjzzub3k5hLqNSJQdZQ48zntW3LVwi4GbVkwwCkroUi7QnPUi7R6LwJEzJ6J",
  "key15": "N4dWh6VUYBpQNCC7iSsQhZaA5zMhyfsENKawp5DS7qxNLk7HKunUXzRdYX5NdTTknURzATCeAUq34wpNWzhJfXd",
  "key16": "5dKAffsUimkxqV7vHgNdm4KaRoQ3zNm8WmrNawQuCUd8eWNVaZhggfJqu4A49eC6ECm4t1kLefG8koPTwGb58gg",
  "key17": "4mJu1Ercif9qs4sKzGdteUQsdR1ZvWgEv9FVn6NXaPTgfiAiDeW9bALv8wWqgZMEqHSSjj9TspyQVz4GM7Pmkzqw",
  "key18": "3n4z6MatcDkMmjKgzhGxU68qLQSrZGQdbKd4kJJCD59yrBfd8be3a8y4zbCaq3pf3yyuPJ6D5vV1H9xiE7anj2aD",
  "key19": "4Vr73ZaAKfw8NvTUrearHGtsWdAmUm9JpQ8tZffUCBc6kmKyDbzdXM5EYe5DvxpSc2yuzvPNfp8Jnru8FUR5r6XX",
  "key20": "4v2Rw3nAr1eZ1RmBVfFkgsvYi7CGmQ37FWzmU2o9U9uizJuoEab3xrKBLwGonWSUjSFxiv7r5rtXRiEaoJzmnzeE",
  "key21": "5faify8fWFfd4f81nmVsPD62deMkac346fUwpkXygetPbq66RtYEJJVVgiZk92cXMBvbT8SemLbfSEvNLC8FNHWd",
  "key22": "oow2NryZYmSMg6xu49bNyvxdNpTBacbdwhCAWyqVJrX7i6VQbwqB16PktTsvuLzX1xpzrFxqPrhN1N9LuMNJAdq",
  "key23": "41k3hFfoSHdzRrBULdCrEHEo8exMrfDe7LzzEScpAqqnUyPWwSPWCkbe92vtXSESGDenHmnZhREjT4MTZQNdPur9",
  "key24": "QxRbnfSVyWidKrsifp577qqKL6hY52efVQU73voAeS3Rt47oGHaEYc9C5vgKSPHP4G1zwHRq5T9UXiLtGnhBvyY",
  "key25": "jFx9CdDRYKmNuPvJHWTuZftJFMyW8Jqe2q8bUjSKrW4vqxkEq5ehD8SF4vSFJRzSo9VGqBuhhmHx9G2FGz28n96",
  "key26": "2sStFcJjjQkPJGPfi227KHjYJnS7u6Sq9DxLDeAUBe4kuo1HyDRhMQCUeyiourqjkfTk49ruh2xanaQF1hz49Auu",
  "key27": "3c2SLRXPhnYfCfks8G1SHFcMuBfzk5APwLLcxyM82U4cKHCfMxQBoG2TszQJQtJRhNzuKBD9uE2xnxfBcQgiB3CQ",
  "key28": "25ph1aNMAbSHkwJRs1UhaLzHizseFbmEJfvFxirkMCcHE4NzNfw6X9m5Rs4W2dzprUMsUFFJfE3NaD9v6MnARqcS",
  "key29": "53LfWdG62Teq6hy1a4sb7EKjMCEaeynKXGMugUxUrj5bZw96x1U6FPskCdzqtAVaq7KT4xi9MZXaxkgGj3wiRaNd",
  "key30": "3Mr31nofBTh4dcrjbs5p6jriz9ebDMYK3wkghp4uD8TVLyWQESmUGun3MvhRb4643WYSS2vpDGqn1PcHij5muZp5",
  "key31": "5eYrgFNar8qpw1ki5HCcPiSqhXcMjYfEUvV7hBXk8BPpWwto5YKn3CSZTJHFH37KnyMMiiDcpvkzkAQZDFc4wAMz",
  "key32": "2AFKx12AGLnVNt9devNdUMi2Gsb8krsZd4CHWNCnLAoF7UCzYVoGfd8FjX7KvC1Ui1U2XSJnozb5ZpJGf5aXsCdP",
  "key33": "4k5o9Fq6ZHhwtEJ1Kmjt5uXkGjGDSTXuLHLMaW3jZUuhM6RFxfYKufE8MxDNkBB3TncBFzbkT9UqCTVdMDneSanx",
  "key34": "67dVoyY6Zmnkr7QpaEFkMBDEmB13HKELHJqBPwS7krEamD5MVe4Gi8mkFCYh1b8Td5pSXCxuXcRCjC26Sgt2mz2",
  "key35": "5NTmYDPv96VbmEv9iZw7KS18LM9hgVFFcFAWbCAQFHBS8qCR77D3n9HtX1bG7getVktB5tY88xFi3mJqrcmte4My",
  "key36": "41czCwQ4Nix8FVnTenQkryYmugmc9bsPLyiW8K14BQV5xYiXMrBkJu7Jvkuv9rEzpY636GXfjCGdrVByP7WGe93Z",
  "key37": "5TRpUWfXrCFxekfUWU8Zf4CFPcAqNx62E7Gnsiya5gRtDoQKr8BXiaivkxsYVbLcHw2RGy317vZBdLLRTBdWPVig",
  "key38": "mn3kxskAN8wysvHKYrgViDx5j6c3TnD1WVX6zxXgf9xSPgfMrH9cdAqDBdRcaq5Njch5FS7UivQfYSzbkcaxkQE",
  "key39": "4ZcGYvYFZ9UpRUb4dcVgvt4TPND4RMY1AAyZHpenUEj4dNzvaQzPDDTWmn7gn3kB9SYJQxrvv5HoYp3jWNWx6ZgA",
  "key40": "382Rj47SuzsTxTAT12zL44NveowB5nQRrk3wngSQufxUzU5t3nDtJWZbz1e3nmjCSdwHbRkEFsCBr6aAaBYtBR4n",
  "key41": "21gAbcHRHwZwN3tU96vhBoqVSSXPydp1cv2Eko7oUWLgCs72bW52hhfWjg37iN2c2Djd2cmH5aU9g7Ag1j7wWS43",
  "key42": "2ehwRys5AuUE5whRuWgBoq69ckVkBKegYc8UPEr1PnEZ89DXJ4benpoodvRLCbA1wXHbdi8dmk5NheQd4fL2k8M",
  "key43": "2XRcDaP8azd1VUX2AFRXR9mYxBHhTQXDVeJo2twoJXgHVVYopTQ2Uxgb8x2HAg6YbkJBNfRobBdtGuNNbTbSMNqd",
  "key44": "46UnuWay4LSxzBzAUaDK5dmNGxGw5jzedG67MRHJjthvyUgtAhD3ASFD3wRHhtSy7JngPiRyywzr7hnSLoA1XgKZ",
  "key45": "4D1kgCN8cKGf661jJRefcvR6S6ADkGHv5ximD1PxnKQnbzsGFjnJUANQUUhJKYNF6aYNdaWkXUeEzByMya8PF2XJ",
  "key46": "4WpSbK2VpNXfAGMLN1FoSVLKH78Y7eDG6x4Y4JV3eNTMEawXBB1zHgtfF3LxYbzJrD4bTLimCV6VQotiqGd4Mtps",
  "key47": "CJZWt1q6o37oGxdNUXRsE7tN5c2xXB7raY63siuh5jVhUu8v4c52LRxVkyEmHTzCqGtsMpfAQrTodkC4gRnTUDY",
  "key48": "3avtxLpLnZ5oRGcKi7HFbKjLyMxRHNop86XkUSv4r9ySVPEWi4SdfdipiufsBCHA7huXDa6X4EiTeDTfufZHg6Qg",
  "key49": "2ob4J7Sye86HqSw4iG21JinAmr8x3a4HYxjt8UEXn3eKHSxrZchuEKnK38KM5UhMrHtvzweha2cYqbzdAyiaBYQs"
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

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
    "63BehPgrgVqSFAsEo5irkojN8tRHBFaLHpFNUW5kLBp9HAVyAXH9fFcxnYzSWYdNKWv57ZW1Pvf3n2u4Xv48Axie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZSsuVY5uf4cFNtk56FxVYmksY4MzyceiPF4aeKJrLzK5BKo6JYzpdhXHZReHR6Ntd5dkrg2piY7uGp3cNLMgwt",
  "key1": "3YEX8Svh52eRuabqTL1EquN97CnfhAme9KNVJHDVMxT93w2o2ZhCdw8LLfRLk7CAdqkyG34bvC6rMDtmqhasFd4J",
  "key2": "3ntAaKKVHLL9MXVoVLdr72a1sB4tvgFrwV3wzeAES7RoJD9ELki4m67Ur6uzBbwmZ7upNxz5mPodYenypuNgK5W9",
  "key3": "FWVMBbTRSy6xiJEpCpvvAjUw22Z4KeDMors1MsJ3QjiEPUQECJFSEMMfyNLMZVZwgP55ipkqPWmG92sCMedV95j",
  "key4": "RaTUR2VNcxHrnMfy6emtfXryFgPS2ta372tEPHZ5PEWXUTT2QQQVWokhXhQ74UsAX14PHryEEMs3QXNX9NfgCKH",
  "key5": "35awW7sFHK9uebAyVGSDxPxPo8xQ1tsM3FcV3qkFVnvkA6GBGA88PDwPSwz4SmkXAtPVZCHwa2AFV56mBfr7UGzz",
  "key6": "3tzZGZ7PfV3zwgZiDhU6bjtS2B5yCRejY7h2N2KiumUcg7dd8AoPL9qCtZA1vtYVt5UxS8JUWNYXcP7WjdbsNLEB",
  "key7": "38jFnaqBV6uz3Kvy9LGwAeraRD8TxmHrVvcGBkfFaTvsiADodicwZxrYMXZjqEaGPxikXVd1fySU9RyzBshqSWM2",
  "key8": "3aadb9ZVyxFFtRSvHKFSNEivboUBu4LXaLV6rdvAn5Q6ntfQSgTufh82cufFCgkJXHUGAU45RGggaYU8MT5Nfsds",
  "key9": "6252vQQrxeWwQNX5pxwGnUzPYuy9t7KLZTHSC5Qm4Kr4jHGdKpYfsvFQg1XmGoLvZDW3Xt2iAcmGEMi1KAsht54M",
  "key10": "2DwgeNBknwf25ttAf6ijX7G2ieimF2mriFG5BuQ7E7aLMrpDmMEHULmNheuGZr2zCow9TJoPCRgrFYqCedgkzvcY",
  "key11": "4jPVaM63oc8MUn96rKjHckE39khP6qjNjEd2NhbtD6X2HeAjGaoBQD6N58e8ioLJxR6LUK2k5TSjpXPRsr1Ha8Pv",
  "key12": "2NqBaYkyuaGZWP7ppNJiDzFhgd8iHxTBQdsPZKAM2NTa3rRwB5mq526rnGgEqGKcZJLX9svebbybXJzJGr4or52c",
  "key13": "2wUXtQ7L7GYjmt2k998YfRir43UbfG8Ts4UeWCcqCKLbp4m5tatvum1FniLnCjfynFPf55gpj4YeBeEw9t5nrGWD",
  "key14": "3vU88Vmid5ryVa2CUsz3B6ZJJf3ekMCDcNcwRuBWbDXTbV2EoonnCxxBsHb7QWuKAcNQZxt821UYU17kMJa5prKh",
  "key15": "4qXUgBLQE2AEf98PDJzaqfNnen7AALVtSsFaP2n6pSEWx96vWd42mZxxirxpyWecMrZiyySktG8LbWC7WFrPaaqf",
  "key16": "5wRmsHHqus4PsiyJgsZivHPpG7pPt1mgEHRmUJXixMWSBEGBCWxjVHFUn8RPBKyXmSMZdRjj1wdSzWYWhs5WXyRG",
  "key17": "5NBv5ncHEiPSdDqfpUKWGepkuA4oddkzgNcTjR7S1Uj62gf2EdLPPWJt3vgn2CZGwpc9iBhdahTbEFdtZzqyoSUV",
  "key18": "4Us9FVDC7SWXBk9LQ2N8HTDcrHnbpUHjXzsSd6aPHZjqFGMPuzg5kiB427RmWKX2NGva2UGKePXxFtXaFfkbNDrL",
  "key19": "2W6CzM4VuapX8yEtqaNVu2hqSoLbcJGSnRMk4gyhYDH74WwBADsfv6fg3mrTMVZYci6mpvgyqD6ZqxRKMjrzRQv5",
  "key20": "54FbTTPTUpDmAhbtJen5DDTBBQ6z8zdZLBwYChaz9mwMeUsc6oJzaVdgGxaZJxN8nfZfkFbNu9x8E5UhQrDPwbtm",
  "key21": "4yKuQj9mRTrLzNHD7AezCe8eBbheyqSYk94ZLG7uVVKUfQcA2h9EGW9gbpbGR7JjFjx1GZWmjuBYogyip4Vb5Kx5",
  "key22": "3wamb9WAr1edRPAaXm6bz6t3mxATbWAnhGSkbL89xRxARZFC3Ehv1nmP5qR2cMjVaum9z6VES8GBhJceA4cu57yK",
  "key23": "59fhjX4yWaa5tiD1Bnd754yVwhCwacFuCwazPT5Js1Dk6VRk6m6AbSd5XbmGK3zYa3m1YaXfBsubrL3CQ9WLCyjV",
  "key24": "41ET8Q9ma3fKbYkLWipQHh7fzn3AdUK8BezJg1nGpu8rsgWeG9Qb3xPrK5cxoUU4YKfqTso7a247Yw4MwFuNc23v",
  "key25": "dfANArot2S1Edu4L7JE97Pch43tJpYWcgeA8pAnwJMkKcVJjgm5JWr1A4mGYzhqsFogUE1rQVfa3zRW8woaJSQr",
  "key26": "4WgnKdowrey7acYy2jB6eQfzsfR8DTRSg31vuzihap7JDv4A9AkoQpi1PNVPaSJAm99b3HVoFBnFgYGToAHD1Pr6",
  "key27": "3KZYTqZBBELQrvcybqCCKWtjC9CPBwjTcgcrdotwJgj4VXfSZoBQzBaNseFYHg88jkCvxiq6vj7ik8MrFmgDF7Ui",
  "key28": "53enzmb8gopWLMLaUsCNJLc2a1M1bbpNW7FVkpSigBEpyjebyrcZ1cfrm9WgJKBLMe2KNnRctnkxzjfYt3EBSTc",
  "key29": "2KRpjRsxyTypqobjSQ2X8RqicCiU9XSZZ1WZPpPDFn1ApCfkokLAy1Rsfp3Fao5hjwT59HyG7C6Q7TC94TbCNrWw",
  "key30": "VcKaCA8DimH5T4qAdPp12JUK9qhCZK1w5AChtDCPPkYnVfk8ipXUf8qruUNB2C5Dy7LwT13eAhSkYgYGUgcmCUa",
  "key31": "4bUUP51fqwMEptoNzwHR6m8VkuKFMmF1egGcvt4aCuDGnad4bafxs8UqEieNkvjURG4YEE2rAhFqu6NSrpeiirnu",
  "key32": "KBmCQWprnhgNPNvcc3fPCK33KfcGSJE95v3uVVq8eUBdj3dycTBeW8jzjcBM2EC9ZPy7hMB9ZtSptXXkLaKt43W",
  "key33": "caVuCVJ4qbg8MLknWuPfoUpFvB3pXqgy8Q3VNn8XiwJEZSKoAjMkUFDvRmSw3n6xeiz9hJsKGH9ArLcyAjRAsKu"
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

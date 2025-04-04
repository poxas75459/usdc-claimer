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
    "3Drmdtehw5qyGu6fTETqg5zci5MHqU1qHLQNDtrwL3GWEoSM2WU5vYfC8gQwtcpmwLKdWR2aSffvs9xYYXa5wnds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fU2JoqxPfsQugqaJuwhEfzwzuRzq9Zs2FMpsWhys4jmLrre1vm8Vat8M8vNHc52JyR7Hf2TYK7RFmmZKN1UChYq",
  "key1": "2JQpU6yakbmEH9MPA3kcNnyDR6w4XVFMFiKkXJXSEqoDHwTrzdJRkyMvcjeCTs9fZpC5XaNbZBbgvXQAPkoSxfzY",
  "key2": "U4Enz887j1MEB2ckh6aRPbAktQTLwbDDPagpnqmvy2Uws3h5QUFFvLKR6shy3sh3GFNJhqkX3SVbzTdaGeU89h1",
  "key3": "nbLyCuFE6NtxYokjErKWUd83onpxw97ETgAn27RuNuahzPpN2JmKLJyHBR8W4ur4EZoUMiW9X5ekCJhu34PGbnB",
  "key4": "2iaQ7xjuiqftBQ8fsKCv7XhCfZNywhQLhJBDMso4eWkcozcW6e9EPcF542jBFXmT1GVHzb9hDyJzFLx7KWhhjNjg",
  "key5": "3KQ6icJUEL33brncCHQKqWfKAacXXA7gDfsDDZ2MpLuihiMFGYzDBxLjTQEcuCPUBWY8TzseWRAokaFHddA9Ao1F",
  "key6": "4Rc81gg9fGnTFFjrdT9FJngrV263ywdh8kD19drVV3tM2ZeXSbj2Qm6GUmXXX3FRDCXnWBjyDFNgonxqR1pFcbPQ",
  "key7": "4Tem6E7tSTqKqVsmhafsucMjUwUeZQeg3wsdrTADNYG8N4tRQYqs27frikYfWyrszeSUGFt4JR8CfX2tT34oNodL",
  "key8": "5shjJtAsdkf5ht4kCE9QSLrPnZeipv51CCGKym1TVCfvC79GbpYQ5M9shQTg9hgq6rfPSWThEGsFj3Lej9HixJGs",
  "key9": "2TDykAC4J3SmjowQdp5wXaFimaL8YFjKcft727cbcWYpWgt5seyUbRYrLtaSLu8MBvbTrtxv2nf7jwiCmVJ463e",
  "key10": "GzQtzv2uHvbPyeDBTS3sXCXxH4ode1Yn4MRovjV16KgpgPvmz8Frd7QcSYGe6QKnKpfVaYh49EjV5MYzkz4URyi",
  "key11": "43cSauFgc6gaQfBxs5b6K6zYk8XFpeuyHh8Rhuf328p3mV79Ay8Vbukv3MHZ8jyvaTF7BFuvhPmMMUTmYymgkptk",
  "key12": "2ULNFuiYcE5fKGtkzDqhGnFj8Vw8a15frsd9pRe4rE5XjEWJzaeL7nbNDJ5AcThdV4EW8JrrnnZCNGUQo33VJy3E",
  "key13": "5Xt1pAn3aLQJfZYoFhC6dt4M1WT16NKhCKSeRdphkKbScEbYbPuYeDfLtqfjh7txZh3cPucTqJgRVSXxg9Xv99Vm",
  "key14": "2ADu4J9TnUn7N2tCDc1XHK6GdaUYfccScxYdihWWU5bVj8XGhEK6kkbs31vPaxSFVzAvkZoQ99Nv77CsY1pzazWg",
  "key15": "25wof7M79AtCgkZ3wjsSjygzjQ9WcBFuAG3qzxW17yk8MuZgfgjaRjTdGuF2nnPpjwMKwDwAS27HxbJJ5B1cSDWh",
  "key16": "3zbxkrjBEs5M133sGtAL1gaBKgtRAiCaoCNSGkBqKVCPkiSqLbzwXV9SN1FLiuoCRMMdxsfQC7eKLdLnzfMSwC45",
  "key17": "5SH92Aw8AeG8xupxPBEV9hpz8fAM1YbEozNq943rSkMWkq1EfgJUn1cVAgV4v3Egy2bvmUprkXRBS4cZ1yQac8GL",
  "key18": "32aWqLui2JULdBuKXjD2K5ZKq8b7pgaseyJgceiJAyBcpi7juTe4WfS5MsSMJ8QzzZPiaeGDAdtpCw26cYBVBNDT",
  "key19": "3nMi3oCruSita3HmoP976BDNCNQKKjLyJmZQuXyF7kT5xPrAdcwY5uD1EA17UzkuitzgHbGmcxhknfHC7EuLF5up",
  "key20": "2RpHPeuhiE5ZvTDNQKMpJGABwTr3MFySG5TMLbjp3yo76P1PbMuL7vtWCrcRWcmo4QMEB9rWVbnGLZ522uTwiEyn",
  "key21": "36iXGVW22FMAxbp9PxD18i5k2HqD9TMaq7aKxL6th5923QPVHUuGFNaBkyVgTQnfMVeTqkWjY4rJs7JLuUK9uXWd",
  "key22": "5EKwfjYWkb6xEf17B8cBvagqEnK5c8BC2iqP8LKcCaamynRcsfgXBPGMHqwEsi5xRP9js2kQ6Db4sUpWVkbRF4CD",
  "key23": "669iix2uXDeLNM4CN3bFUHewtHd1a1DwqLpwoowbrNpqcK3Az7mKsjUZjpsHjGQG2uBGGGN8dqXRuUU8rv3FbcG",
  "key24": "4w19SJX2XLTrM3HRG7ATcethBWduLxQAf94Cm8eE87o4Zn23e55ihdFJwZtfwnP622PFYYhQMGzBoJUHNJBBoh4d",
  "key25": "3c1G5Z7suBTdjrSy4Qy36FbKSWXhMFn54pEuhC5v4QEZw2Wf4kceErHvuRPdnLxT3imaU68ANnUocC8VZ4uUdoJk",
  "key26": "4tgG85CxYZGFxZVCQExYj5w3XWgfM3CdAsbCpJQQnwLoUZG96Qs6M4VfGWzGqaDiCEHn1ppxh9jSNjuaqZnnUn2t",
  "key27": "5S3Vew9HgNTZM1FfbU7apBAUncU2LAyTWB7PZpz3m1inAzY2KiCAw4tDMixFKvUCd6YdSiPUe6fq1gUCDVxNTnCn",
  "key28": "S492LZoWQhMyvJmxVELEmdSNk9t5Ybw6BkGqcjiiw583ws2zMPKsPMDxZoHYqVPUTAFDVk2ccKvo88uiTmygsQm",
  "key29": "CYUZvGSfKVq7WGr2HeVnSTrqWKkugWc8137mBEM6JbcyfYEUvEyMAXzHDFByK8murS3ZR6TvwQD2rzjmtwZEk3Q",
  "key30": "3f7K8Q8tttAAuP9ev6B9eou5QC42iCiA8WLjo99AGnViqL7xLjVeX2cnf5BXchsUDiY2GLesR1jxu3QXJnVUNAws",
  "key31": "5XdRp3YQhau1xPhrCbrFT6c6hVyuAYhD8rjxY1b5NNP98cMFLpRHKBgfRg9FbdDwoQ3RamokqSK8uYmmLJFcJgTV",
  "key32": "4dSotEmK9C6tsPM5pLnJBJkcgbNNv2DUgS4UGWSKr2qcqniRX2Gxh6r7RRcyX3miuoRUWqF2jiCuogGH28Fro2Wm",
  "key33": "473QsNHa9Hevz8FCbZGLbch48xDpGhDcyvEnbfTVUqApruu6VRp61k2XxXbaJL1PtDSN478nPemjQ4x53TKcrZZf",
  "key34": "5PcatDnLhffVHtmum6nu3xtWrsuu1qN7go9uasZNB1xLDr6hvDw2EPeDwWLQrzUJcbkNnW8j9w6xZSJpjJ5x1cEn",
  "key35": "4aDF4wJUuhyTQBVFHoDV5Kin3jKwF9dEtMDvsBoAamuBxWaJFrhJJmZGcrgJTqDyCsCgAw3qsS72WLs3pd7fsbg6"
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

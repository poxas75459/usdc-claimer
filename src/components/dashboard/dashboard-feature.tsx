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
    "3UAyTocSiyviM2RGtTihG8pvHtyJvfoDPEmu5xgUh2Bjd8hfSMuuZfwfqjg8EQ8CMjsk9ikXdAzGUGYjb2mSh2mv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SxtawMvw16Seog91xBUutKtnittTVUPsTfgaT9GE7ekme74ZWEKBskUQzcJLPmM4Li8yijvULtG8oBAzidZPRf",
  "key1": "3aU2zXE9kX4b2Q1vxwqe3wQspJ2CJ8goL94tbjYAhTcSExgiGXg3YmFfEUXKLQVtSzD4H6eJNHgR7vmo12W6aDWR",
  "key2": "5JwobUZPF7x3kv9o5UutHtWnsEMXBuYMcGfR9nupRjkDjm49fWbnpJZDFQGjZSEMT1YDrcLmEcmg7TqksNJXVzKA",
  "key3": "2XcznRh1cBtf13KWtBDLnff8U4G6a7oQdf2DXu1HnWFiN5DPeXkEy7SPAWdR8quvz2e58WwAwF8cDfPjiUCUbp7Q",
  "key4": "5G1vpvcZLpYwtMD4cqkgBG1P9N8ZR2T7SuNmENewx2VGMzkUQPjrUoys6AdRn92AZ1Aax5qBXnoyyiKKwM1UMAoc",
  "key5": "39Ef27iC3pAEb4weCDeg7GazkVfHrzgLp3K3xogevVDBLpHmGv6ycEvF13gQ5dPsbcUdr4rk7LYfGPoQVNn6MN8M",
  "key6": "5DiGuq62QFSWDRsuKrpN2tN7fS2vEZHS3BbzsjK82rRHrX3aNTNzZ95rPQYESERvonKxpCTEYCWwWmh9LddGV2mH",
  "key7": "45pcxZFEqZjUibH854h1v4KPFQtQDE97aGiqiZhhJsDynMfDp4H6JXtzkLD4vZ5JA8S3igiKLqRWbZvBK7dsbPam",
  "key8": "4D8fnkvB3MDUN2i7ripUjmkHavpmD17zi9tCzfDTu8tQp5JkrremaKej5J9phrUpCmZWa53xEy1NhJLip4ZY6Anm",
  "key9": "3dAuaQ59isKBxhsM3p9jCh6WvGpXkWNkX1GRrJ8XmZaSx9iQRQVdLiYtHko4bTDboS1zuGvoSfd2URU2jpng2rRa",
  "key10": "z8HSTnPFRfSTA8G2m7JYwCVZfLHzjNoPn27bbe2FTSZe4mcfhjZFcrNN6rFmMKokpkBH3hDNA8R4mvjERiRMxdZ",
  "key11": "3eGGa9Pikwfd5iDKSPwP7C7bedztzTgTM9QfrnYeSP8ip7DyK5PsHfC9i5LBhL81oqn7kQdHDMd2htnHpWKscmRA",
  "key12": "3zCWmRqJYPVihwZYqYN8ZVna7RdehsiZkvtVyVytxh9XSy1uXncVDgnoNWevNQrnRvQUgAs3fYY4vn75fTNitpGu",
  "key13": "34MNVM2bKe56KhYFxtWvqdKbM19trC3cPVBXfDAuDc3SEAoQ7pduLRpWA7nY1NBSvPHBQidCUkMGfDVViVa5DXBp",
  "key14": "5pVZCj8MkJRe4CAWbRN6HVFBJWAyPkk4adoA4dc227WyvconHjLjaNF8fM8r2SvFnKpoV4u2xwMYgQMCz4j8zocS",
  "key15": "sDhkSSpAaWnKsuq78QiS2tJN3y3GRMVT6jZcXTUPa2qpQkyDr1zXsU3H32s7k41QRbJcBYdNW1KW4WX5H5fLAS2",
  "key16": "3EsK6j9PF8rsfWvhqq21D2rG2MQHmeXkWynfv7xNmwQvCe4NkXWDUjdLAXZuC2WdLkZjnrqcdnDiBpUNn9b5LReD",
  "key17": "3rMpnPZfUgz5dh5tqY7uRppvSa15nQz6wSfiFyo3v5EQgpQf3yq96DcaaaccDhe6iDErXnxyXaAkS158A1wGK7ue",
  "key18": "32E4SfPhd9rYAELS3Vfrgo57ou8RBVNQv1qq28BYNh578SHi2ZMpzv1yxCf6mi5QNbaf7o4gZwWPD5U7HE8ZDW5",
  "key19": "YL7xUpkZ9VfpuU8op2Ti9mwwWvnFj1qJ86TJ5RsyAQBU2r54TQ4Y6mR3jvXQ5F1iZGiSPUbHvTvjTpcymwKwyLB",
  "key20": "wroH8e2raytmne1QQcWbCwuwt4FJs8EenGUn8Gd6rcgXguGmDb9dg4v7RAYz1KD175cQJgVn16QDSHiWY3HSen1",
  "key21": "3RemPoy8Mq1ggGcjtQc9J1zXS2wsbb5q49Vn9UfWjTkeYUUu8Mi7V56ymTvnJ1k1xStqude4RNJpSKtrdiuRwFZb",
  "key22": "5T7VjFEonV56mBqBhYso3YN9yMatZm2AQD2XruMkKyGFC1o61gJYfxFv1VjAN4b98WCBsX9v87qysfpiH2hXaVn6",
  "key23": "4uLi8JKQieP2hNVwzGTgZHX1E7H4KNtBA1sak4vZox7GeGKR39myvTVD1iR4JgMcK8KnzUodXjKiv6NgxB5Ac2qL",
  "key24": "2vEnGzMDtpMSzH2bYcqJLv8kd81t9SzTzFCtovXBUnFsKnBN9aJkVdPe3dBi15w7psUky41M5zZsHMMJnp1SrZE2",
  "key25": "4hvTqqzgDo36TxoWqTDjU8reLxNfFbsU98h6Uu7MxfPMQMDM8BN2bmjvarM2xH7exacMBZK17yKS9XJoMpThWrmq",
  "key26": "3Ue4KCrLjCUjfFDBwGioHXkWSUTmGY4tMscgkA8XCczv5EBA4jf91DxNbfghXRsMaM7nF3vXHRfuYQn5jb7gPgUr",
  "key27": "4QNe4kXijk9KKbhGFbX2TXiK2wrCae3YuR2izGcLPWYnuyiMDitPHyUNHhab2e4h8MU9RAjpgGuDC8yuWB2ZBPiy",
  "key28": "4tVjnicBTwu9nrZRE5MzepJeKz7rxCxp5kcJfb3it3oZtxZEsczVZqk6z4CJpHgdHpS55ppFxcNMYeyzS1884E16",
  "key29": "PWURJnEHUorc4FYhrNNpYXJ9fdPBmDMFUmqPp6KtPWb1P64VkHq37YJ5ick4JzmWb8XzGyqbJM9an3ih8X1CSYR",
  "key30": "2y26Qwk7P5Uv8XR3cDpT5agzvJw3FCLNfGiYExLEVH7TxQzm9xwUVi3XLJfLCKi1NRzmVZBh2SWNcQtLSXQTy5T4",
  "key31": "5VmCsnXa29HeMvPejVJD7kSfjvZuao7kzDDmDQrJtRNGdsNR1dhnwM3HGMJKiszrArw3DYYNAuqXj2rqfdY7V5AW",
  "key32": "twrCBhviyFvTdfHUV9VtsmtBUA7rBvikA8f6yabQAEatgK1qeLXTpfNZeF6MrLF1pqweFXe7PciUetHd5mSsqHY",
  "key33": "583FfFdpvw1f9qvxNyBR5qRezPzWkx4xy3HnD8MvpY9tS4tkggcakoPifzTzPdSg53LdD3VS7bJ9aTYGxniGo7fM",
  "key34": "3KkGtGpJ9xHPhDC7iYJyTeMUSLabVzBzukc3dZUxDecCSDsSf245wQXRPFJjUt5vKQ4ZSDvZeQkeUaGgko3zmF6T",
  "key35": "2CGuutNrET2VtXkAr44fcttkVhjzSHH9VuxaxQieZDErswzX41bJSKzZeQxfmoaZ1fyTdrCKTwZahjhdsvo7fnjG",
  "key36": "2C8XUTy9crCvNxfS2WW5quQofpxkq5WaNz2DTz1UKJs7FjcqDLuv1YW3EvGoretHA841fsSexjUA9AVbXC1wtMrW",
  "key37": "1vUtHVSQQ29mWU365F8UYRtgxX5Sb9Xe24NGVbxX5Jr6P9e9HcZFLSJ3qsV65FhDayxDRhaQJjLkKkvLcEGow9D",
  "key38": "4yFNK46kwxrHKiXdzGyxtLcPSLimvMCJvtiaAUkfyzeH5uz7RbpHKWPfu4KVQSsAMLbhmxVyLhzUFiSqPznZVkqa",
  "key39": "3JWRyqHa8U7pT758DhbrVR7oYNLYqqyx9SDbKfRpANhmrxiNJjsw85z7obaZop8EckkoNLwqs6d72vQnZ3k5gkCv",
  "key40": "3a1qeYkStDz77Kk1TQN6snZBbc9m5TxBrvzUjBNStECR8pcxipT7mi1RF3U57HG6RyuTXn1odf6vMHKtaJ3DEtx7",
  "key41": "SmgXnitTLgGx4C77sByYje4s8ihrVE6ARiJkv9NJ3Xiiw95vEQ4LTKzC2RGKghzgJdSV5HnAJAnuPDUzscLZBcN",
  "key42": "5KjkFq7yk9g5MBMMrD1xVRNbnWB34UJPqSKXkAN37Q8zM5WdpiD8QnncUk8Ute6ZPZFnN4empKHKpWxFpdCbtDfo",
  "key43": "3jrvJxquEWGPdAHVoFsqZaN5pY14FEuq4E2MyWpfcLKQQ3CQFeqjWbgWNKpR68Q2THppgeo3pdp5QnYzW5rBNHu3"
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

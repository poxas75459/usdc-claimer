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
    "3dRQejbodumDKCDUdc92sUCjeadV1UAPgHWBALqeTTiAEGnsoEZ1cce5WtgiSbPCUcG7CpRE7knWFi5dyxULoHSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FobM2mV5f3vAup1FEduWzdhZifEyu43CmZgEVguvbybzrmVNSpifikhjBdg7AxDBkpDnTs6mUyzimdFybXLV3st",
  "key1": "28G1xdTDCjjAgwteMHKj4D442Y9G7w7k1jNmNsu6NewSajR6AH5ad6WbCwVQ32Rgw3MrFxPJiu62XZRLPZBwXnWE",
  "key2": "26TZ13ZNiicBFqXgMvs6BRqJyFTd5oAFKa92BcMXQMH4Chvpu49BD8Y21Wa1gqAskWPY8SBX7oH9JMV3JvLnTJU2",
  "key3": "2fVd5N3me9CzTMxohSnB89WMjRmi7JEmaiQ2VwLZNreCXNX2VbvanGA6jisV6fXcxAKKSPcscGqFdpfMb8PfHxrs",
  "key4": "4ydqEwvz6uPSPMAV27ZkTu38mwMjBtnRGYoPmg92LRsMeketAhNXf6bMYy98jecysNkHJRL6si7th16kDNDy6ck9",
  "key5": "De2beSY1x63a4TuLPbqHJdWBgt8dx5PTxQ9WsBhwo1Rqs1ZHSuxCq15nVerAwLPYPbRgM2US8pLSvAh5UwPuUMT",
  "key6": "4nswpwHQGQTP2X3uAVxP8DATf9z8V5kk1jhZFYUfSTziQWt8BMRvCrb8RcHuhrXGYT3TM2YPYVKncWbyx6Zq6Rsf",
  "key7": "67SbriBkWuaJhco8VBnj7f1cUvXuKypra8QLhNjAfZ2UJNCwQBvPGvb2xvssAHoTC4cfU5hmZM1rsWYKNd9tX3av",
  "key8": "Cw9bdWS6p2m7AEapYyiTrhDx6JLCwe4ZkeeLsSmFftF8qXfk7e8TruTXNU25z8oSykewQNY4pcTdEhuSPfy7RSz",
  "key9": "zKsjJV9tCe1o7A9dqQMztoimWxhopY8TkDLCYWUC54LkAzosEMpnHTcBXMrssLsZemfsNztENLjxvvDTPspK6x3",
  "key10": "3HwoQgm8LdtFWHD9b7zP1xus7YwzG9KtDnMHL5Rp2Uneqc2MdyoaV3foQXN73yvJ9HrnXbMgiiRofRJave3iQrtt",
  "key11": "ymKftAQtxP5hNRcP9R1QZ9qVZXKFm77v6YtBVzMCKMte3JvzsVY7Cied1rVYuoUYGqCooBcukcmsjYGyANxKmiK",
  "key12": "2FFxuPsfBnyvaiKHLPy5KvdRKjQizb7dY8ZRDTbgvd6RwPEXGk3xFn2aZyXp5Qs5nSiPLFxbY81NR2ct49KXCHGh",
  "key13": "4WjD6475jwa8pQNtc7opcwHVfktekyqUtxiYERaMNz3dfpshPbqU9EBVDJ7fJwrjaKZYti9vcJcUf4nBzN2wkhcb",
  "key14": "47hFajGvLRFeDiH9qrSETNJ71uwQQFJpWfYpc82jxyPcQDvoEbMtE4SwG98rrrjXyiwphbFpCBreHVdd2Xajrtow",
  "key15": "4CUpNG6ifN5gYoYLs4z8TvWPSDZbrPbwfWKgyWC5MVUaeJ5M7enPXqhtgorvBoS5Bj4X1tmH9e3b2MbL3EBKLCm6",
  "key16": "eP8Abh3PFR4jhoiAeiA8cxFGzVbsd37z2t6dgobNtTCvwgY9i4Zg7YB9SXD6bX2v2yh51tSS2rXbNbToCdQbyuC",
  "key17": "43M8n3k5GNvg8nWXVALGcajKY7RjUkKhnUiRpXX8oq4vp5wrMuEypxbyA1ZmnvviCXtJUuAWsDUKS5Kd1u1djXUa",
  "key18": "Kz4FapLSPaeid56PUKHiPsLxtKQw4wFXp5dMjQcCrogz9fQ2pPEFtabqiUotkFVE4hkK9R3QgjuDvhzQyD8MYUd",
  "key19": "64JFxsL1kigZqRZQ81oC7t9MM6cMFMZJGcDo5jz1sL4DWSSfroo442pMih3H77vZLPG6fYYYHCFqSyiNchG5GoHD",
  "key20": "S4aXZ3qJn64BtvVS72cz1SHQAsG9ngaN64D35i4K6s6jh5BtK8wbEVfeMFtMq2i7JTcAsrtDm36LKkoaRxiWqLM",
  "key21": "2nFHMPmw7QJeZhU5vPr97iftYCRXwqerTLHYZ8CqVosBYF9qN4GzeFGHn6EH53S8DgyWkiAmD6vs6xVT9w5SRuqB",
  "key22": "EYGtKwHSXSSyRHote5rm1JnHadHzaZrHTP5P89Dco5DjZUnHyLqYaFNrvm3P2goW2ZLbq4NNy6GyWTWRikEM3ht",
  "key23": "4XkWT283862p8zxZyPiVYxVv95RJwD2hsXzvJv99J7QWrpzC7Sr7HygdPC1NCGJp6KD6QzgRRLLR3vd3Amup3Pmz",
  "key24": "3aMFuWJmPfjdzx1GDFUUxmKX2HxYpErw8xYhqcd2Sa8LyH5he5n6vRUy8b3QHutYRti7tNQGhMZYV5mtd5PjQBgH",
  "key25": "gpYweYKBsUQv6MaJZ1uowCEJZHmmg4418QksbZ6hhgUMbXZj2XJFGER9JwMomAd8tvrrt4UVPqMnWXpfWBobsme",
  "key26": "3n5nadFiAgtiLjW1L1FVaUZnEEewxfPVTFSfKF2qFYhj5GmDRwDZ93fsXmsV8NzPYqKw4wMFPJMp29MBqS1cHEWW",
  "key27": "2sBH4g7kLUEjbdsU9d53kudWK8gxKqsQgmPewyPvksyusZzWWD1nyG8EZpHmhuYyakNkmy7mU6YMoQFZgmVT5XDY",
  "key28": "2g5THCg1XU3xVd8n43jumEDYq8XHb8v2mgfYj1vR8Tot1j4ikcbC5BcHTnPX4vwyZComxwjPMN5ZF2xKGbLyA1r3",
  "key29": "3v1881kjAahaGSoL83iDHTXPPoaVxHR3rj5VauLZzECD6J62Bgke9h1mum2YT6x96qqaWuMYkH6B62vMywKsJ4Ps",
  "key30": "31RGLmur8qdQL353RDuLyd5pWmRJgDzcwvZ5mazj6YbVVEbmqPsRXTMohu5TRw7rz86QmE4D5sXnzjqDVbwCz9Bs",
  "key31": "3uK2zmUMH4orSj9efH76gmNxGxd3JLrLztnX4n6GpYVE33oy4poSTZrwUEXHGs1tyfiZuzWB3uyJM5A1WmfTVmAr",
  "key32": "3MgkSaZpirSuNRNV3UFp4JodktjJvW9iSdiJvGpTSbJUEdRBysLSauyg1rdeFfAKDkGi3yjY1YRXYXJ87GTUWFvP",
  "key33": "3Udu9ZxeMhHGEZavreSHJtMcTgpan8wHZeCCewjipA2U86TbGJxDVjzvbe1xSZVWdZZFU7Y3UfDiojk1VnAUKi8R",
  "key34": "22eMHEmvdxspCeW5WngQUcETRLKM8QduLLWccRDibLTw1p6yskLC9zJPdf61TwNSpFAGbrvTg5ksT4XfoZb2KRvS",
  "key35": "AcbJw5ktavksc6aT6uaHfzeiUqoeD91FbqdFJudJwJhgUM1ULwBxTVdbcES1sei7n4MKqScXhqV4brWu9JTpSBi",
  "key36": "32r12yCJpYFGXohYVXTrufeXcSxgdMj4YAno6ys9frv8CELbXTWsu7HJp6uTfg573WrUXCCTyrHQuQ4tB3irenwE",
  "key37": "4uxFg5h3T7aARARBpsRE3kD8XryAhwFG9ksNfZJahdLnanxZQMx96d6mCRgg4cvDDQqxNGbZoJtzm21S5tGLuUhq",
  "key38": "vNfjJhsypn9LPyANa13Jg7rmZ3tvHJGaSqsZ7V5SJDraDbzwZGfhTHLFTZAtQQsUvnsN3Ci1ZvZUntHtkvGWVgp",
  "key39": "2pY93wxrWQXH6LjmzWV3U1xai6iYC9HKmobrUU2WXNWEHRMHEyedNNtHm74GTmdei6fiHbBkh4tAAr3UE8hbuCbt",
  "key40": "QrodvyiuELUQvynSf1hfhhWxpZVbFezCUeRB7iJDbX7ERoS4Zmz8NCH1q2sqNLH3bDyksuAD1EYda2eMY4ZtpY9",
  "key41": "4kk2PFVvkycZ1EUAmpenXXFZ3vJxWeAy6KciXgW68DkXj8umBXqSFEAFfR3i9xTBp9x6DnMBHnibnVNPUr97Yngw",
  "key42": "53USKeGgdq9oZDJKy9wm9FChxHMQiHqVJLoH6F47QnQtj2NPGrJSqF2oJt4D41ZcKeieLbGignccfwyDtkwSGRPy",
  "key43": "5xsbRnbKEJ4aR1BU1UG4UR7tFY5S5Gs92gcnteCqwrgBtLZhAbYmZjGb4NGwdvmDfVHPEG6ssm28MUvSQcqaLLZ4",
  "key44": "5d3vYMY1MD4TKsQYByJtyqvMUAAvKvjoJJHvsvHZDPCn5X6Mm12Hy3E7DuNgTsvazeViQsHkYztYSBdzheuY4vHd",
  "key45": "XeZKxFL5ghSMYhKyCW6ubuQGjN4uj6ni84gaXwykA5kAfdxSUhGCtBnWzhykGrAZ2o7VbwGbxo4SFJm9Xwe96rP"
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

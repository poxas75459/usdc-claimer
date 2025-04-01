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
    "Zqswiarvb8qSJNDWU1JpnzF32z1rHdVstuvB4aRrDj11oaxrnKNrwzfUuhYykgipT5TPK2q1yiK7TMTcVz26hkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4Z5o77ZXKRrZLfnVBVYd6JfmErTQaEcy4TLAUXaqAojW44GDmTtkVhJ4PVGJJb3qvTvxAzQRmAfucH4ph5bWpt",
  "key1": "336WTw4YPvNh2vkKu7X23U4wTNa3bG6evHtGcxfuZj5D1VExYtjuK2JbXMoVfUADrHYxfZr9x9YEcqLAZu2vHzUR",
  "key2": "4gh7oCdABcteiME4FvP2zd3tnbmPT6r9mW7oimi1FZa7SavN9D6iZTe8F8dZEk6WMgCEF9B4A577SjCE6U5Cqni9",
  "key3": "ZSoewnxBDecHipgj8AGBEkj1UZwJWjY7C1pGvw3sEasSPMbNjakp6L2Je4zWsREqxrfuF8EbhPEm7Z24Tio3gGL",
  "key4": "2k1NvXNtS8JN9DwB3Pub7h3VVucYEYb7PazwomsUZoUnaECSvCUpnjdgPCiewYccUPkiobuoEEDidmnKXCGXYsrj",
  "key5": "8k97ky4NSXRaeBkct7q3fiU3WkyXURxdzjCcbFE89VTn3mPWducwwiYv6RY1XB8GSaSnSYnPsBU6WxRm4CQbFag",
  "key6": "5zoJ7Qpiu8f9HGDWoW9SgBng463PZJNATUYYfAhXtv1EWGy1aGjcgHVGuj9bZedheCXnXt5BjTaTyhwRKKnDLVvN",
  "key7": "2mzKUPxJv8tFCVLX9CLJ3VtpsLCCGushPbvMp6bnzYuwhR4fTDX11BXNXSzm6rwCyvyyubyNK2E14RdH5qRGdTi4",
  "key8": "Fjz55Ks3AKSwqcUju53s5xhWqYnMQtgi8zLLC8VTbiEWj59E6L1m7Jh9xwXrJheqNsq7B4MD6E9GrzruF4g2gug",
  "key9": "4kymYMM9E6NPhYosgiSnFGmkej2TqVWdocaXE5t29Xx4oswMKWenhJRFpU4o9wGW7k9h4etawFaZX2YpY1Es27FV",
  "key10": "2pMVSVToiDHheXenUqVhTtamwzoYWMXjunyqGeBXMYEXnvda2geMfUFTfSuLqZQUDp7ksRwQ87JGcgb9xmhiLQvj",
  "key11": "3mDJJMBs2ttwU1vDypN2S6um7X8di85zaHUSmzVahcxhSZVUXmogymosr9dDwr3d2nDJ45eFXaFMNTSJYhNaQjy4",
  "key12": "4hvKwQmK7shbFZ4sJmhvPevXJzootF2uGbnFSZdjUmW5ZAuK5oj8yhyLVtTmBkVGmqUJgWxtXL3iVPZ6tJUvQExQ",
  "key13": "4nDy7E4kQ1pTjvWNsQWQjJJ2mWBMmtiYsokQd2VqzLCkd4g5mWSLkcuK3Bb3SaB8hMT3vxZP7vKh9XZcDnRoqy3P",
  "key14": "2smx1YrPBnBDU3WUoT2CWLPASYD4r2qHFtmJReXhfawYChZ1ZUuCHDmnjePSUZQ8NkKj8HNNLP7JmQkXVcSwuX3i",
  "key15": "4z5qi3RnBYJmuHkDA53tTpBWkvodix9ntj6i7ghkhuivBWFBeg9JwMRJvzgmjmM6UDmQdcDppfBQfsp9U1w9Y4Mq",
  "key16": "JfPXGYitU1PXzRkMQJmDUyRrzaEGbs3QT11vhMKdKSoTAEhvZ8kXFH6oVyYq1brMJEYLW2QBzhAyVCQnnFSTN88",
  "key17": "uyJ2yxYjSaj5Gqf7cJc6oygVtZ5AzuLrp1qXjUogJ4SV2rHwTcEURazZTVvzsCM2foBPPLnLWpVWMCALp5qX8ST",
  "key18": "55mNxPZhopgoUKAK8X7NSeyJA8ExLc7peRrQjTZXzdBJ6xLNQyZrNNojtFeYhHXLGnXhj7aB4ifXL71FVZzLCRXt",
  "key19": "4qCywitmxjYLa8chvLJhLg754WjrmS8efd9wHAjZywzb9JxpuLQaBeVrK14WH4LSMn4oKkQZdEWu9k8jukCuv7CP",
  "key20": "3ejngrngxsfcwWYkYsg2kGkaXwHCiK9T9YT6w3bhu3ELhSKXwGuafFZKtM1uBqhpkSG81mti21UPx3BEqTYqDPuQ",
  "key21": "4FGYKEnqbo9HjdZJMsVkjVYGHX5meBoBWsbjjHRAQGKJHX4pDmG4Ajx4Jv35DRCjs2CTCf1WrV5chWBmAA6tSdj4",
  "key22": "4sjSzTwsNktDxdCNnsrSPJ4cAsV9cNABYdnx5zWLWR2WSHwcgeteF6bnBjX24Sk5RAemSb12VJfhnbVRdPUGjUB1",
  "key23": "2V6JiZpz1Hu1UQq3Ztq3ih6cfkpD1tDNM73WLMFEfMWpBqG9Hbwhin6sjB37eGozBcfFAvoRtDowT1z16p1a5KTf",
  "key24": "5fBAbE4zocPRWbGK6V2RLf2zXtviY5y7jz64bUyBqBUmYqBF78LGBtmXLTKNcCRSwDZP4bCBkgzzKwGkv39MzYSR",
  "key25": "FmKRDXTeEjXi59bHz8znmFLA1u5Vkr86Cux7jcRtRhJL4PPDxP8ECpFcMCXDieE4CZKP1TMd9An9rGYv5fizEsU",
  "key26": "2cLhEUwAMRQNv3QCKM2rhdMGXkGiRZMwG6mWFFMDpUi95GgRDBxPZtczMuzwoqQRNBmMtR4fHYKRtALYsqQEhXKn",
  "key27": "3Qztmuz4qqgpSvzN8ykz3eDpW36Vd9UUakV7fdw1FkaDkTZmsmkzGDGjhFMvm1swrKSYZkmhgXrvVJqkMcTpDbMv",
  "key28": "3eKygyh19AA6SMdAtA5vQWQiHNLnrD5VfhdPEccMd9JEtmnmz5KF7LLhomUutpCiYZMv7iSog8veJLCa6wNq3oWm",
  "key29": "9ricrbNJ87HhMEAfbxgVvH53pAFvto6py8s9XvmurwWBu7qgfZwqPH7xh6sU4bTYFLNrG8FQB5vaWhxqGP3kTkQ",
  "key30": "5mbkJNBYMtYZjZSUx3gfXLVKUtbEgjMwbm6exuwHy764efG5qD6TeFm6kPDmNuvHK5BoFqd4Y1tQnwDCsnUCxjbR",
  "key31": "CiJnN7kqiXQL5wpXNs6qHpJMassFusKV6HSVdoEg9PwScNFcayCv46MENmXdxjhambPSXUxMBE7ggF8do6HweTe",
  "key32": "3KKGA3Hj4zkWUADiNRXbX5yapoUqkCKmgaLK4JgjyhUFir2Wktw3Svxh7MLvw6zf9D4aHcUyBsHTYbKJgKpm5ARX",
  "key33": "2PcyUrBEnhhGHgRpCreS3ZSVZ4goyKPe6LfRTkfNjesWqhfu3tKDkWMqcrfR7jPi8bEikDdgXEezXSzfUXeNh5bs",
  "key34": "4QCRQuFP2YRXHpyouhftvQv5xCGxYP4FGz3gGBBBdr6KHKc84K1kYHG8AAv3fYyuo1qcudTyQkCTtq59uJTLXQQq",
  "key35": "62xEyDYof47qdmEHYrkb7XFGFkC7Z77Gc5yBSJJiF3TVJY2NieZ6YRGZQzJj49GUgCAhZ5swxzeqm144adKKW2Jt",
  "key36": "3V9K94jzUt57unQVcPWBGrGKLWpGz7MsohpuJyCscMgyQT8m95FkWmLhxS6YTfcpFMmKJaTbnUxxUiA3oRzv1g7f"
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

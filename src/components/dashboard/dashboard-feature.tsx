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
    "5o3ezFNhwBunPUPPc85XRJ26uiSU4Fq4vFdSRUuKvd6rXCiuN5q54bbRzpkbew11tmRXLo3hPJhaaE5UqiByodWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBf2A85Fce4i4WRcsWaUic5tP9GF8zMhpSyudZLx4KZJrYUdz9SubmbNbGRKE2EEWT4xVK67nEwXJwU3MAgF7fH",
  "key1": "4YYgH3TeDHWp38nqwnRiXZJTBdbe6WP6p3PHRKxduNg2ZRhiCc2kQatPoxiZz4PhcfJxYiCr1H8Qr1MJ8n2eRq6u",
  "key2": "4t3FtykpuhSbt49yorwirSvHeSbYwj2EheUQPdrguuGMKKfsTykHHa9FiwRa6PzuUAe6GiBqVuhp1iSxHng9hj8u",
  "key3": "5yj2JYUFU3aSKPCJVNmCTcZHzkmH3J392LRzLdjf3Yd4HR4hRBHEWmihHRMrhjFNefx8gkACT9g1K6WmFso2SpkR",
  "key4": "2kQ9fyoAdBBrEXhQToVY96aJskk7EXqFiPD1GDLyYNoFsvDzqNZexuBjb4vTLcfWjL3cS7FBwuzcJgss49QaGcD7",
  "key5": "3XLGQ6ks3ePJbKH1Yzj9SabtjhnpThSJqgQygBbhxN5NP9LbPqq2urpWp2DuSeimjpihJYKayuMsJJQkFfk3yaBn",
  "key6": "437YtpKZ78dGmMYCAzGQtxZSsxxAjP3ASTHeZNA3ibaF6Dya5aEhJbmw3AWyWU3SuM7qfjREE3XLoitowYK232Po",
  "key7": "4NqQZQrQ81TxTY9Yoikc1BYbLQRL1vAyU1UEx78wkuvjFUd43v4BFaSNBZaiWowjUz9tkxMj18WfCkecCCK7cUB8",
  "key8": "4QvCxJhgTSFFqjwMx9XpyjXreJqKZA5L4k2p69wmny4CKSJnuJMCA5LhQ5Hd7GNp3fr28zZwgTMkp1aPw5JSescd",
  "key9": "Wt9bfoZRGA41Sm2VPnsCjAchwy5omETRVQddYH23R8rbC9oZQZNS5BmJKVX1gTgu3rYXbu4LL6qhZsVHw1DFLNV",
  "key10": "3QpncLWwRBD21W2KXjNgNKXE8eb9jEd9qr2SnhHWiYwh6S5Hebn6H1Una7t1rACtrwXGCjuQdLJtJn9QfccKCKvS",
  "key11": "5PAVbcaoRqQkmCn73ZACQkHtiKZfWt8b3bfuuZmd5MBfTm2ZT6KskAUaKExEQFjSpdWLFd1p8yzBAGuKCjjdm3Nj",
  "key12": "2jjrwy1qdmRCk68DMtLnE1xU2qgr7qsHoej9UHVxUouTnZoDD5XCKsroiCWcU4VTV3Q5xxpa1zrk32LVnAbVoPP9",
  "key13": "3DT4nUoE4ShB1e7ierSNhdj5TV2NFk8en81uaNtDNzo8tdZbyUCxoQoJyEAQr1gTSCdAJ15FTgFzcujphuba7TqQ",
  "key14": "7u4zWECorzkfcQjmyHAusy1Uek8iJ2kF3yshyUkeYpnmfqAi6173FPKptfm3DPQYXJ463XhFZvHCEQVyPqvWqy8",
  "key15": "3MJUuP8VV8cP2aqckRwrXij88zkyrDem3fMnWudt5ssAxHMV9V7JEQ355ouMM3Auq7eXYEpCkgyv9E8KPUmhHW75",
  "key16": "5UBFFotPsrMQ16VdiokdWULAL8E4Jzd9z7ohGgrk6fzvL9wb6DJH7SrYmCEUhQRSXsa8SL4EdLrCp4nK217sp2oY",
  "key17": "627vKmGZeRey8fcJXeAJDFvk3B5iF6Gf6REpJgwHYWEGHShGyKUMeRJm7tcukMauukZiHbnH7VaaBPxHmRid6Asv",
  "key18": "3iXram6Y9X4sHvALzDsWzTACoav3aEBdkuwkCAbLCrzFEhpyH1RhHaT3ZRggugcR1jQQMWvJ3oXxG5niyPAEVRnD",
  "key19": "3aRLhfb3fDCbLUFgMQWCHMmXXWE4amjRoskaC9BEiZbXJKmU4ht9bfZoDUhPcZiuxia7y7ZfKNsy4xZU7rTbMpay",
  "key20": "4k2KwJo68iEqhCjKUJuWrSMiftvyn45PVza3XcuFuzQQcGvbhYPHJJUj6fr66Vur9iDVY76dsComyyU7tzbG2bZP",
  "key21": "4BRWNkk6ifSLdL8FAMCSjQhEFrFuuc6FGHUM6w85buPHg9SBFCKYGvHMUrhq98DJjGaXpsVGceypcR3zKCSysQ1U",
  "key22": "38147QBePusCdCrFTGbL39YxYqtJh66KwxqUaF3v8YtVpmt6Vw6NgM2YFCHvu9ZCcMr3i3KWYgV1qa7wEQUJXWWF",
  "key23": "4ZPFLHhB1H9hSctX5LiE8gjtuuyR31jYAgzMFeJh2obVQbK5dagGwAAXwwFzmDCHHhQSdsbhnyqb3LHB1EbvrUrU",
  "key24": "3D7xF1vQyQqe64hD8zxXGYnrrSG4BXsf1DJKXNxU6FJRaRJnpYCby5gZ2Y6PbPprzGX33mEc6f2ugUcsLmPUeYfe",
  "key25": "2HDC4uEY3C9dvWoviMRKSnVCzQNseySx2Sna65tgDm6SMyBU1c9NhkEw2zTQBHDKvfDLEMCSFstuyV2yP6KrB7yL",
  "key26": "567GdNbg3uL4i4VHXjkuqyNDvFyPvuGs9C8mxxfYuzsNFmgaxY6rLq7PEp1LorTvJETajhJRbYPSxaaNEmpuHWuq",
  "key27": "LtfBNZg9Mi3KJVPReENAjCRuK7NPsZN3aS7MPAtUpEnGAgFeGCCu5NRzEbCF62yN5UEfd99myfiEVvh1FbM9Fvc",
  "key28": "3eW1GS2nMFzipZnUMaHJErcKuDsSfQnXvN8CmPMjmQesQGeADaqosyiTdW4Cum4xdUa83VcHkJCBsCcuywHkdka5",
  "key29": "4D1DCjDkKsWUFtN5aCBYdUatRybWUWVBzJV6PpL2r4czjzNdakTto8hPRqmFkhxgq78FQyQzhR4m5RYoMfEjVd2d",
  "key30": "2SZbQqfGWEFrBpn9B55DH8Dstgg9xEzt1mevskkfkC3weEczRSFtHD4PXv1J49FW8PGr6uTJRtgf3uHg6ucZAKtc",
  "key31": "3cyoSEjffXPqjN5QFSyezxMjmLyy9oHCs2bU4Ybipp9z2QbS6ypkYnDumFSTkCV25UT6VT82tzjqgvGSwCVKATiT"
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

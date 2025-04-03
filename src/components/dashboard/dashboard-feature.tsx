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
    "63zDoJVHKRjQrWwrDemqXZJByBYTyZJzME56rwNjPofPan73r8t41QzyRCKUhyqwyUYo9HVbEHppzgQreNUTtWSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DyVqzAVpCGdTxEfYW5KYvVt3VmDL54Wg7rQG3WPRbM1Tkkm7wvb6pRxjn5ecSc4dxj59Xd2hyK4pWiFSgARAyyC",
  "key1": "2cM2HoZguPcrsM2SPCenDGsvhzFqqxArcRDSQ7ikcq2WnGRKv4LWBxhGFUZtT4asaZvaYKKu2mgtfy9jffNmkSmh",
  "key2": "573iGTbLWaZRFCzY7da7uyCe5uQbKfu3VHB4CfhejJAkrVvxtFxVfHTW4ywYbDaAF38j6aEoCKyNMvGhPYo9se8i",
  "key3": "5PZ1wJSE8b9nHoWF7fsgLQCc7dwn1t1wons2QEYYR39cxsRpGarfiKBi5vk2FnG9VtxRuND6aJACGjKy8ohykBdK",
  "key4": "XS3xfsp4eyPCq3LwNpXHv1ubVnNsXHQqpmanQgiDSMmDy1Q5tVWmmUeH7F6XQuwr2411h5Y3BYoHfjxdasSmC9b",
  "key5": "4op1SXAMaxRKWMiKve95kEwbVYRJPUJiuGLaHKeFnHfnu1NKWJmP3gJ1FSAi2enbx38PX5F1GMH4MyfaSraGjU7z",
  "key6": "3kuEakEtCV6AaZexZqCwF7y4mddxD3Ut6cL7RcnxPuDDzSsTgHSzdB5qsREdPyT2AgEwdQfzGFdWQ1jEuSgKT468",
  "key7": "3XjvURPbjKoQaAusgEXktsexPB5Pm7J6Ec4Gee1abK4XgJ8AEyiL5KPx4uSCPxQiupPk4iLrt1TRC1sWPzoAGGYb",
  "key8": "5PbcZMaq6BopeNUMx7kCxkJikNL71hf1SYNHz9fknirjgYV1wAbkjSGfJm1QQjm8DDgexc6m9T4MnoWom61FKxLf",
  "key9": "5gMsfkwv9xw9acRHbjBPEPwXcPxfN8Sn2vCbkNHQgMyQx1c4HdU68tKHCPTe7HfGih1vnNSAMMZXQ2VYnhLjYN91",
  "key10": "27FkYbKMPJju35Duv2btvQfFRFvxCBqEw1gFLKUetGe13kSVY5c1jjSAAhVMJn46DG4tk2FmPqFdc9xwRH9Mc9DP",
  "key11": "5WFuAZSM4N3o5AKwnb5bKtM7EwYfMUQ55CVAC6XwMctiLS2MuZJhn46H6rCR1eWQvy6cb9ykz3iJf7qyJwk4c7J9",
  "key12": "2g5V8456fWFp746R2YQZsonecUq8e4AU9ujZMqq9ACv5bdSy4WL4Dapo3hajF78gTS4gzuPDipK7vvRzSWvyUDgt",
  "key13": "24BN2eAfiLxTr2yrwmXarGMxuyQZqDzTgu24F19GT22LQgbC9rqfwyhHG9oTQ7kwv7FrJMTry3JZgNqdQzRp72cH",
  "key14": "N3ra4PvQg3ZFHRwvo6Pxbz1wZizCHiPUvH9kV8F7ShhjziG8LF6cgtr8rXciMjJveH3A6MtVYHLg8RMACUhwWfp",
  "key15": "5nx4KAg1kXZXDn83Urndch2jhRt9uMqjAP68kjzvmdTZ62Ydn2Y2VrP4nBbAGQiYJjEA4ALwyfGCNakJiJWL5rYs",
  "key16": "5dF8jj4yWsV7KNFiR9GAT2BDjP1TAUYEY24fKbrcTCRR5drcFBDeeBPRjJCorydqhW8NYfRu9jfSTSdh5mcJWFD7",
  "key17": "5Ww3sqKnHnseoUsHrys9e8Zvo96FokQRk1S4d4hw8anL9bTd7gHmgQxsZYEx83QjCeZcVSb5aomCmYdpX7HxtVLN",
  "key18": "5Q6nxC2N3yTwQKz659pQUftmy6fHmCvdQ3KTiyL3mCc2hbg4kee32bLBxeQ6TbsvnMNbr3Gceygi81QZqwmeKkqP",
  "key19": "2yB38BHLvtjoD15BoLBaLAyADchhb4xVxb9LK9ZpF3vHy3voVV6iNnXLsNMV9wzniRoiTbFDHpbjWKZVatWS5C6t",
  "key20": "5qknh1w6XyECY2ncruV3CKmEieUqEPhwV2FPEMzbhLCwJ5noVcNxnY3S4Y8pu8W5wkpHyJqYkSVa9VQHMZAbTpsT",
  "key21": "3c3jBm6HBETp8PWtyRx5LQEfhD4aCCuqHXsRg18miif9QLbcmJgqSsRbwaANFBLKBfjCqAWsDKsGN35e5JwyXAr",
  "key22": "3bxS96tCYF9tPTKzCRZdAVDcTsqQHyfgt1ohyNWEutuDVG5EWfoKvBbJmpe7kD92WoF2GoWThpFiYmxBed8RjSiZ",
  "key23": "5p32k5D1XwoVrc3KDqDr9W4X7g1ME53jjEjxoJk1v1FtmffnyWi3g6RA7YTSnPcDLJ9SFUf4azbJTBXWGwZmZeW3",
  "key24": "4gbEEqc7FmXbL4x23mrU5rXqQg4J9LMphoK39epko8v2v59646zNBPg1paF7dNwSGNexgGsBgcFTERJxDJJgZpg",
  "key25": "3NnQwZqV2GH5r9wvETgzTGJMJdm5Vfs3kksAjbaCZscKH8H9jLwmk2ZdNDozLcEPs8sPPwE9KaN57gm3AsRLQKjQ",
  "key26": "3sGRX8WhpcmsBwKHt1WRVie6vZ761rUo5uBZR43HHcp6zYjNkpD7qcXFebXZEkScGaCtTkLCo7b8isS2HaQaQms6",
  "key27": "23rczGhDKx13X37LZgVqnZThuCgt45og84FjtjwYwA9buN4s7M5gU1v7mHmeGLdezJ4MtaFj8FUfLFrVq99zZCyi",
  "key28": "2DZfzmc2XiyZGy9gZcQtQ7pGStYQXCcQfjNkQjRkM9kmcQwivNToYF3oTvvJ9ZLphZjd7iccEVJsqDifyMBCzFBA",
  "key29": "2MvuvtTaJ8EZCrQgPs9E9C8wkQQ3UiAhmCxrL1gsNCMP32n96jemG4arDCdY1FDm9eU7yKZ67kegi3Wv39V58833",
  "key30": "22AvWb4wLGZtZFd2uVJJHwE6sBzsWftfFV567s4wy1otrwpHfEuguXW2ua3WWPF7kQ5TXh6hn6ht6jQyv85tSGQk",
  "key31": "2xKRZsyKcwmCYwBCDz5UkknhVD9U9V1bMYrRzCvjaox8WXESHRnYesv59EAqMV4M2cKZ6ti5fkzw9gxfEB24rrXy",
  "key32": "5HoEKGRxhdFnTewdwBEAZTR2pKhmYmTvJVRvAnYWznBSCeN6r3fypACyRoQvjeKUEWp91qpzPAkrYMazqEoPGvVR"
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

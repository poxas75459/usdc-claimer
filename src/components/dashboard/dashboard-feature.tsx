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
    "d6c17Vp2oAHJd1wBZZ2ZTyqy7NhMRgBdYHhg2yFqapYbmYBWDX4y4CVyjNc8GRTU8pQMqnJR7rWP2jx1CjxHsKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szuScBaStz7aj5bSmDDAmS1hfnetPLm1gw9wVyBYoSLiozcxMELezwVizDtZ8nhXCaWLSYg2G1SzsoiBcgjYAyb",
  "key1": "25ydcn1BVNBYFLjjGrxGUbJ1kKfhZWar4w6dcjKruzM3oFGLoJwepjVZSFYXtzahFqcmJ5wABPH7BsyGuN8CkN6i",
  "key2": "5UxF8TnsegpEuAJFLbfTXAedTpL7PkuCXxB7mhHJVgaWxwA1iBJ2GB9wvm5C6tdXcZwqwokdnE7WTxKAJ6kJaEyK",
  "key3": "4uyL8qBqp7ZiFtMTr2ykFNUuxBKkui8DNigudUKomeGUwGvwpYBgXsKJDTp7yEiwVTqUBbDDkYasTdq4hUqEPsAv",
  "key4": "4QmVZ3N4TNbLLtZQ4eytFa2S7tKS6WZ6oao67RicZHxjpbDpf72eyFDRjHpTXbMcE6oUA7vr2PVWb8dYd4QKe3Yq",
  "key5": "2SvMXuTzKVVdtrwYyxYVjrbXYu56mBh2axA32mwhvSwz1v3k8F76nN4FRd8xxuMJP3aeUt4AMmhHB6kYRfksSmML",
  "key6": "3ZE9gc1cMJy3hHU32oCtdkX8GUnKSzFpf5zbFGmiuBAYvkv1Gema4FvSYGNDwdAqtEE5cJsnqoi3mc1hejrWjaZp",
  "key7": "2aH4szPqHQjURZr5zc6zx6LRcTBgBk8Ezqnzh1tfEKKFcxNac6uextdY94Hiraf6952MQ6DNCJtpnxhYSRkm3UyE",
  "key8": "eY6CX28HiS5ak6j8cF7eprTXJMJVLJopjiPjNEkVfbjJLg81gxzguqcMqYWbKAwKmZkr9XPjUcnosJqgWobSRdT",
  "key9": "3QHAufDVhuzmLqXtLDxqap3S3CLbtnhAknCHi3C47nrHendXNY7mNANSp5GgDjhwGF5aKAaHK1hhA1KLvieoSBei",
  "key10": "4JVR47TYyVK1afSNQZf1FeoRosjKJHNppqWzrzNaxyqppuqAjGVTkfBJ1yamncyRLpy7QRKCqQJEU521UMb3Qcss",
  "key11": "5cG4DG34yoWvFQdzm5P139TmFqr4wFd9QfkGzUJPhUNrJNUTZPDd1a7wWvL1UYE8koDAymnYTMTxTtXqH5612NiQ",
  "key12": "5XS4waKcW9MKeBqGU8m2UvjQDugv5dGStXzJpDnCCjFBy57iPX5RnJvfdwwb55k8FfMDrot34bqJvyMuaeXVpFTt",
  "key13": "gHV1WTkFojKiJJwfF3EKjXzNCUzsXP63wwwP7GoZB2kSSkUheNB2gPj7udQXKjPJjspcwJLxTDiFqBkMVy36gjd",
  "key14": "56jAB5Y34iTYNdwGCy8XrpckwvTG91f8SEbnFAHkbKQGLzHKGbfw5Vfrff4KyRQjEQeXEfGLGnvgpQAaoYu2hhvs",
  "key15": "nGAPuReDtQxi7VoXGMCd3pyJzrLoxezJytJbu7ntKMaxN7xhwp8ppPVrUDmG5m5s7DcEVr1EH2zeUN21RU6enUr",
  "key16": "do7WVxckPF49NEaAhweNzXa9UgwwA2B6dLNY8hn8k7dAJQBgmH1SdaaFRmtHZT2wX4YNnEFHy8pffi9wEQj5U2K",
  "key17": "2MBFVG5GxYQjTaxi7mejx7VBg6nPSAVCF4BfBVmn5qU7EL9Vm1REjJfaCELezt2pT3mZZV69T4y3n9MrwptCB5Kb",
  "key18": "2a6H4sWpwqx2UHQia3JgKEme6CVX7yN2hmV5TNA5zmiaziZRTzCHQqbnVMi2PscPMyhtjsBJud7TbVqxKUXmheRd",
  "key19": "4DnrySMQjbkPSLVXyCCxbNyfsU4HmrRuLjcgD7ktVwF3499CZtsjFRUTtvrffUX2SgdD9PwpKyTUANydo9KHjq2Z",
  "key20": "2knH43rwe8bbvKbxZWom6334he39XqwMkGrFCqW85UZyNTWmp1zDcsJyxebVDXtrtQJcQYfgeNYjxVMjyx7JQF6v",
  "key21": "3zm6M9Ad8YBbhiusURsw19b3Yzmd3g7TmG3xTEKtjTtRyFvhHNUfe3BWhK6jE7ZfwgMVzq9ig5zUC8T4kEZptXCh",
  "key22": "5f4WmcGVpMsQguoomoLEGL53RScV7eSAHEqDxeJaVNJJBWqVcFfRMGs4RuJzxE4j2JJMTXJjrKeTkw1sF11MrbBz",
  "key23": "81UHTGqMBc2Z8auzbhmZ9EHvPsX4S96iCqNWNK8fbkHh97wRh6uDvXKu8P34it8VKcfE8AV9zkUmhEcc6Tq3359",
  "key24": "2JxuvXkyb8rmKGuAVmM4F5oipawgvrjSf4xw9yrD8qLeWkiTqMsxGo9x5iUmi7UEwwQ9gFgdxsDGSBmFL8msEXQr",
  "key25": "5VumzG6JsRVkZNznpL6zjx6mmTn7CsKGE3jDLuLnUNeA2LRgGAtHCBx99P13e8Bcf7EKjGzxn6vbgMWye4k1kJm",
  "key26": "29nKqT832HZg6fDJsxAB2btAmT9khJdymSFGAH3oqHmw1YPHuF5JmsfvnyoAKq7Gwk6qh1GtRiXjQKkhHZ6ZkFe9",
  "key27": "Y4w3acDJddmBxMRwW7Z6T5BctKZCJbmw3cPoCfmeduUxx8vKeWWNtzEUVV4umPNSZDcSTbFqTQ31AazPdRjn8j6",
  "key28": "gFuwv1ACkpvvB4ipTbKufSozanMeWXCWBDqmAVkowyrGBRVYcD97VpHmEuhyaXyyCj3knMNZjjsmU2BfgbDwMd9",
  "key29": "nEbm7c9pjsqgpp7SteTzsnP1bE41KNLkYSM2hn4YUj2pVxnd6isxe3ymRwbEyXzsCGkwmBuS1y4q4TeX1HBQgKf",
  "key30": "4jUTCjoshwVxfhrxa7SvzztoiMzi75SDmqiDB8xZUP49W6CUKeexjnjwYVkLAgVMnVm4tKkzqNgQ8KpuUxRbgf8v",
  "key31": "33mFfL6jtsbtQ3pXRkNS6Stjqv3uunhHBv3Z9uhQzNYoNGjm2pRhM1C7NXENGApjSrt9FuojUtoaQNQQuL3YxzmD",
  "key32": "2dzqwaXbH5PWTp41gVEnnZWauyD1xQH4tAPP158as68y7oZbTgE9VddiH7GyffLejAogJWXJYCYuA6oAs3hP2U4z",
  "key33": "5s9Ns3e1N85yMPFUQndXVbmDNDs9P2bBdYGcZUCvMNtYtQYwFtZNVKdU2JovDaPd13c5jeebdQ9cBsXsFxoSc4WJ"
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

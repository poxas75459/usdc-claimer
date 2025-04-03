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
    "54CZR5iQ7qKhkssT5NajKCNkonkWDYXBMGz7G7pvrQypSQ5mrkB5pRxqPFTSCgvR5FKETnnhMo36oMwRyn6Eo3yo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5Uowf8X12B5sVCNkFP8eYWPuka5cKWpaaFg8N6hKYNA9FD3LRGgMzWZSxB69TfjkMqVqfVYDXNuS7SSX2q1o5a",
  "key1": "3sbqDpfkZkK2kESemGC1qLNi5V2La8DBEtDJ8s65SVBxJwu9u9PvVALWb5DCTVLQMRRZ5tZsxVwyG8z4P71zQoLt",
  "key2": "3aP9nAq8VxMYZZTcccVYLLdXWvpNTGpsrgHoupcMAabTNznDBomV67HqJ5cMMEqUKYzHRr5ioaBudW52cZRxNorZ",
  "key3": "2RFCH5jnTTzLSY521HPJWkMrUnU754wkoN2F6dYsu3yBKPXeq47tc7N298MMiy5Wm3yHGs2Hq14cNsGvvtMNeKue",
  "key4": "3eGM2UHtzQospk16Z7vAZ6PMaQRkpdfb5RyTXD6CJRRL3S1fe442srFFpbhRKC4s2Ld58VA7zofSDDkjx3Ha6m3E",
  "key5": "3W7uydaTxCqRMn5hxgscnmUcP3ujMy5GY9QMb4cTU7ySQvnbe2r46EF32Mgksab2GGmYGnZwfmZ2fDs2nhk7wQam",
  "key6": "57BTYRCoLbzzMeRogJBE6UJmPSWygTqott9QDfNRctJsy7eAhsdLdL9Tn863frV6CziJ66x78cCdSa2XJA3a6548",
  "key7": "PbTVN1HKao82RYYXZnyXAfqKjXDhrSYMHN4qu1TavY2i851bJCa1eYWAsoDJs2KQyKSCKWfABsxLKcCCPHBNdb7",
  "key8": "vdwykwjFB8eXgnzAX7ZxPEtY7FGnA4D4StFSeZdVbpERv2JtWvswN7fA6rcJndmVPCDDa38D93w6GFPa3GBLdFK",
  "key9": "2z4pyCAQm54QuKC3Qzwd1PDMEzVNwuQrEEkYuVgUestg2qpWtwTvM5y23R7rXNwymkmEh6ksHUAVAApr2K8sVASK",
  "key10": "5oP196Pof25VP1apHochB33ph1UCDtjpGSfrsBQoiQgPyAYUDsvxGBnStL2ot8WxvAhF82DfGtbt56jS6F8hsHYC",
  "key11": "4YBwiPLFE6RZwTZSfKYmv9T6hGjAN7PeJbjpHJ52GJpsLAPQP9h1PYGM2U7RsjrwAvzysDVfpmU4P2cgpcdVSF1N",
  "key12": "DPFgDkpMAy7oTZ4Kx5HPcehCRs312XNWbEiespdMCFhaTHF3Z1aZc6pw65Z7hUVTMszoF4KwHgjXfKrouUysZbu",
  "key13": "4B9bk7cddkfyCvLt1JdpaG6kTeNJRrEn6B9hUCHH9e41h9bbJYnU4r14FSpz7F5AbKy4r65yC8eD61JkX2X8p5M5",
  "key14": "2tbSP2krWLJbHbtRUQoHBbFLy58uLAzVAqYSs8MB3y2xdsEZs9WD6VtVH5ySMGuow65e1UwW4YHqAUjjbGC7Z3xc",
  "key15": "9BEQWH2LyL4RRkAu59FAQ36xFHCVs5GdYUgcFARM6hTS1qjUSsLBui4mYNBrBEFbjU3vZUVFEdujnznp28jqHs4",
  "key16": "4RAjaTGC14qT6sfwYaPuL8A9dw6rQb6UVaLCGZgVfKWmXDUZHTu9THE4ZyBZhbkntodoPJevfNbTpL81eX72v1jL",
  "key17": "4JiB8mdo98Jp14y2Hrd5b5UM2GuLSUQLijHz7dRwcXtWVdLm4RYb9tCpEJhadnB5nivqjs9B6sQJTbZQTqQrmcXT",
  "key18": "4K8Ncj5UwtbQojWc9omWd2wrMSLqb9Pgm4V3tpvRTRdf7UGCoyJZYYBP5SMHPQijbSic116eiWP7NNKR1gu38Xh7",
  "key19": "3zhpN5STFx1iEa5zmc8tSdutobr1np11seqd7kwoMasj4VrXhwp9v2PdQFiuXB4jumuKLR2Q3YBpX5sRqp8JCosR",
  "key20": "5HHDitgUX5eoKDAk251CERt8yAXgsrMvETQybMctfegBPqw1t8Ma3uaaTfapPNQoF3Pchr9fgsfDP9KF99BnMAzT",
  "key21": "5bNbS5a3gSGGKVZkBY6FcqbzdCnkGcsZzRXekoE5SkNYB5RPJCEsyyWw3g2p1cM31ERsNUsiPWogBrRUeYLK5Xsa",
  "key22": "wYQXxKLrrvzJHrN33ozxMeKX2DrxqAdDFc7A8V3PDCBHzNvtoiKXAfypg8xY7JAmxbM9yirtBEaJoczYpfsHXc8",
  "key23": "3FtSqgoJyZbhVDAS4QVjekBFLapk1SMPxMAhqqRfsJ6wHs2UEc1ACwN4jKvx5ZEiSRVp44P6HybYrPypAjcoqXmE",
  "key24": "S8sw15daeEJp7cQRPYj6pTADh1HwPAU2qr8TQDFQpiSw1j6ndd7SSErPMuzMkRc3hJ115KAGZHa9CyXZApuFfCp",
  "key25": "2mELd26rewdY6bY3NAYdKfHzEqrweHJKgPWjGL3kghAUfPHPd5QpLusZZ9eGVGpMwZwXSeb9hunobMNnpzMyKzeF",
  "key26": "3oXLRC7NKnQg5sBGv7NxtAsFUNUNcKTocxSmaeboupM46kDe4oM9sn7rH7FZd18Sv6ugjM4HjB2NKN2cNLaoYtuR",
  "key27": "Ey5T9U2yScb7XBgcBy64nbS65pZsfwikspXpdTEdcDqoixc9nwyPF6Rkka2X29o19hpoynNAt1zTQs6ZC21bzjv",
  "key28": "wsp9R1dNAPY7bnxj1j47gE1a3865ixRv4fzKda1YddKQkyfJk25PzrAfsf5H5VLXBnHHueLYEcswrnuMbq4orEq",
  "key29": "3VBnr9ZRzTHZkAP1xTpM3MoRWa5CVnDUhNVQoZ3MGDxHNJ4z841wdx3ZTGfFZSCMBb9VU6KovWJ8CiyraJvt4uzR",
  "key30": "5t8BTRPkrkKAEyXYiVsKVQnUi4CEVdyTGw9wZwTDJoZQyLptKakmG1x9QKQBgQK2j6PR2e2ua8RP4m9jQraU5A2e",
  "key31": "3gk9hFEVX1ELCuhJZdwdn6MhvDsLHfiJZJ3wJJqT5AMxucfErKC12z9dUASmG6BzwqdASBRhbZxKKdEySc2PuAR5",
  "key32": "5DrDqhYBRiFHPYAbPbmVP2dpYwminytSHGmqJYzEwDmHqVrZ2TfwG78dPpGCBXLPretnya7xK46jSxG8uDRzkRCN",
  "key33": "5dST8rhgfEtVckPtu6YWzCB1hXUx6ZGVbE6CTyQQH8nWZJ77taWRqg7HntfoNtk8iNqazeBTSckc5wbonmDVUyrj",
  "key34": "4XdfGxnT48hzV41wqB2m7qZnNyc9F5Zx82PAmsePKTAANVxYdwWfUShAdW9W3xGVf5E9qYp8vjrUDEbkrNEkXTxg",
  "key35": "TXYLJvqQ1BGyVG132eNk22xM5WyzBBvP7cYnkq22RnAaHx2jbSFaVcgC5SuCBVpsPSyXB6BGmTRGZgFJNWMfRAT",
  "key36": "73N1ui9AcWvKZWMkyYqxQotyr3KXewCVKmzPaoQsnprMWKodnvNsnA66sC33G3HkcaUCGaXtt22rvBcLzzMZxGV",
  "key37": "3GJ5CP2m5srueb6vp3uYvqFaba3cKRczRh7K2YRdmg3jApnT3zc6zjJiyY3D8xUHNtPCpYBGBkX9jz7oRi2P94wv",
  "key38": "QvV1mCN3Lu7wmz9bguMkFWKpx7DpXRU9QAnDeoHqkseoj7vk24R8RdCkwKgJ9niHvGpA54HgpahnpUpzyrvVo5o",
  "key39": "373rpudNv9xYsVuQG5wS7for96sPKdECZUA7Pv87JjqiQ6xjnM1rZAjkAJP7u3S7JAFqm2LKjG4Rr6si54ND6YWu",
  "key40": "33G2vqf53GQHTx6WWM8n6ppma11GsYKtutsoZKKZooWGKjaGxxRHwNUVo7e7VvEaaJsmtCwg35s2qihnZcRokrV1",
  "key41": "3QXuLGbGucsLfkSeaMK1nFdha88AoA31iKJvEVDNyyzue1CFac6Cowbx6rzCpjPMoGKMpaP7zKq92JyXcLpzmDq1",
  "key42": "6732kpEYpcA5efc2RHdSfirisRyAxstCf9hPytR2TdGJnVFaDDFhVz95oLxcW6iBe5F1zDRMcVryWknNq1qvwSb4",
  "key43": "2fGFfWNSyoE6nUzpdjBrrbMYaATUmN7kJrDycxTLGmwGpPQC4VfrY53AmnzVfu5y3Jpdynb13fk7RRbS1Nruops7"
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

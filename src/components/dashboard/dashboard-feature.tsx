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
    "47e2NpHZR8YRJPQSUFysjNbbX7wqBnwa93Cf7Z9LedxSirVzorqeVzfVj4t2tBWMbankRp3mDUoNMjEbNdjSkWNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoApMnwDKJ5QafsNmST46hys2GVNRD9qb5nTeoJFoPnopTfSHu8ZKxH5pYdH9BDUmKU9dK7fpWLLAkdubHAcjna",
  "key1": "5c2HoGHofdnQVWW2Bg6ZXeVLKiKmijVNaWUF8gJLCzQHPnbJtBJ2e5tMfN18HYRKfU8Ci7k44P9PAn6Zd4GVUEfj",
  "key2": "44Ef2EU8arpG8Gr3oXy1ijWytoYd12yrAQ6SNZxRL7dpLDKsybNnLKN5CA42SMHp9xPvpNLhQC4DBNimoSR9DYcx",
  "key3": "4s9DUxnXmHKrcfvDP3agzwkQYbxBZJyfXNdmRGFjX3aPy6QCWw3CPqDzyw3484eGmm6mx2zzHrH9qHDQfNZcrCRD",
  "key4": "31W3zwQvddp6n3AfXacqCfqsDGvkLdEDzUHJDwZGaDgFRQbdzgUiutjv1obp7qYzQ2gNVNYYQdmMUv6EcUm8QzFn",
  "key5": "U8kHZfPcrDvZfZD8HV8Tr3Hy9PfQzoGhWgMGNnNjD3XqVfnQ8tjwTzQiUUCqcHmrw2rLAJq28V3j1X3UJPHR8Uh",
  "key6": "3c3CvR4viNXirw2HCYaQcBN45W5qPcp966URHPAKkQLvZkJtmUeTG7duWQsA2SLsd5CNypSFxX6nt8Ys9vhjGwZU",
  "key7": "5JZNZWonvgotZyxw7gzoaXzBRHJXDwxWnMoYMgCU9d8kEkVxaAfGVQZAghmkSSt3kScJM3XcqnKjJ7NgEA2UUf14",
  "key8": "2Nd6ZkgqyrtBQ6cxK3KfVMvhqWntLAhME8AZmsLtUAPAqVT5G2AhonQAkenJaLxW92gZCmBdWm38h7KLH3nvtPPr",
  "key9": "3avQsfLCmvbJh1KFLRHWwR5LWWY1FrwyJbsRSFg71pPb7rRxrSAoVpKJAKP6bqF8PVyMA9mvmsLsNKtjxcrDjdcb",
  "key10": "BHAMggZ2mzTEYggk5w5dSoyDBvJb81NEMnipd6UQV4iY68oB1K2bzso1pWzCZ6jY1mSZL5EKz4kYm5hUqtosMEN",
  "key11": "3iJBmERhEzA9mXfyZeAgt6DWML3GU19h7EdMuRvHy5ZzFxsKhX4hMthpRbWiWpDRTA276xkT8Qdrs4AfDSwwzbdX",
  "key12": "5eiTQsNgomfRDtxcatdmj2Ea4BJreJw7NCPcbukZ23L9w81cpbZJF7AX1mB7XR353jRvodNgujbCTEQCL78HfDW3",
  "key13": "4JyWwYJ6V3iM9G1AV2APNGPSZ59PBzshdYaYTGqzjjUWC3HsJcQRjXzYtfzXKG7UkKRVbPTM16zfTfDtm5QpDBED",
  "key14": "5beJH5dKcu7LVx3JRLBDu1vPLQ8zr3TxUv2udXfhbEs2c9HoopofLkMkyfJCmXJabtiUCGePiRvRq4d1hwqMAWHr",
  "key15": "2rj3fQsxKU7jo8rXWWjtBmbjXx3bMim6mwcMW2cJrvbi7ctY3J2wMdWhs71a9QrHvpFoj9gBnyWfgB6wrxHM3H4i",
  "key16": "5eQskTL4QRfRh3SjX4QoM3zFgzFC2Mium5BbcvQ9JJsRwPBbMdHbwGzjeaDp3nHAEp8rYrcg6K3MCAENAWjVtZmJ",
  "key17": "3iXUcMidJabnenbxKcYywJ6yVgLQPwTcJGeZtiT57zTzuaTg91ymQpiCGeigfkM754CgPp7Ve2RKymgsNc21hX8i",
  "key18": "2HumXL95idvKcNped7hRCXd2TuNUjPHTckxPDQPCvMJZVnbf46MjXxib6q2LoTbn7s3V6qRLvwCTqZ3LwdMFLeGk",
  "key19": "4FHxGf92WoePuCgdiKJL7SP1XGUiC3zSdkhqw2vC7Hu9anKaKcQjN4bgqxiWLuBwXcpcBQwpxa2C826hdKSEK4yy",
  "key20": "5MexjRyxx2P1aMy8rZyCnxb4evvHMF11dkojCBTRACJuiYVixRWRdAcgbYkNBsGLfkzVYfNmWJ65YFXTaAzXwDVt",
  "key21": "3vqSMpB9byNCCgpU5Q2hpfw1jnnZCF4L3VGNCF7mbvqfb5WncFninkR55YF2jtxNN1NgT4ULfT3V5FUeq8xNgwrX",
  "key22": "4AADqzcXTcuja46uNdYNYmENXLwWzYXggiXZsth1T2bzE4UZnSXhsHJwiaHK28E8bPPpuVWhrL4xgT3TvorxxdUR",
  "key23": "3dNt9bBavHuFSBjn1K1tsaSnRvWa1fHss7uc5fSkXPuRKHiAHSwKJcwzsystMdTbkEJzEX7fyzcZY7baRpKBYjS7",
  "key24": "Fq2vBsFWzLuer8BBUMmNN5ePjUjwKXwHsd3QuX1Dpu5cNqo9BsR8eC48Ax32gTEAhtdVZesQa7RF13bGNjjP3Q3",
  "key25": "2JNBVhw5WdRcpeLF258kyCMM2CrJ9JC3D21QuGLifcfKK5chGz56YgCRHXgwafC5aZoS1cjsX5nJHZf8tcQkv83y",
  "key26": "5TDDFc5qTLFv4DYVqdYTrVMUA5r4GScfGTAnyHMA23pmxNBDNhcxG9QhCo2Q3LazPQcARzPCzftMaYpYNKHyqBjW",
  "key27": "4RLU4Z6ArQ1iuY5ewxTt4FmnxjVqMZJVRq2SWT1eg6yYrXTcGJwzSX5wEV7ZEjx1eiqpCLHiJwwRe62GSdDaspER",
  "key28": "z6cQsnQD4cU2LDhiK66vGMXrZVBMPo7ek2mrbvppbMd2iksjSBSqwTCcW46q2Jgk1hrvkb4ikftNcxHtPxCzBpe",
  "key29": "4skEPw2bYeXxj5a2v134EqqbPDGKE6TaNdchwDp6ZjbCyXq7jJTSLqBPHVjp9vga7Lh5ajFSwk9JFXATethn3Tyd",
  "key30": "2kCVpCoxPBkUuYkwJzZinxcDw8rkKYGWUSuM3rnjx1yZBuB4JiC9L64otA8cMQexMdbaVnTZwZqo49Bo1CmWDKy3",
  "key31": "2HEW97sXV4JWiQp4UK5C7cS53yWrA6Eqmu3kBkbPMXKXKrgs56upLG79RvxmYZXR1j1uzgy6pEG6cMhPJQRWcEbi",
  "key32": "5rPkztMkryrpHXWCn8nEWRyJSbyzPBw2LrzyErndHkJjPR9nkwuNPFnVx9Y9hbHU4YUMPNkwQPeqmVU6fmUYAXVK",
  "key33": "5GVefw98fazdQ3DrfMxH6isC8qbMYX1Q8YJA1huYJ7EEYEFeUcoozv4CLgtAv9PDPo6ooqu5Ziy8oLPRsfKEQSMp",
  "key34": "5C9pttP5q73zVecquv7m8aV3kbuDRQUAXKZm1XrT4AdmWEtqCMsRYtfNK4nJZ5rmYQEDsSTWHo7k9NBZnawqLZWh",
  "key35": "3QWMkYtaJ3hgyK8gnAxkRLmfJARMiGA6Q4mUGmwn4K2VpxP8qi7v2TDyUTSoCTy43QA1o9CQYz1L3bjXrXZnJQ3C",
  "key36": "4Stbp884GjnKrSfTM7HLrwbXv6ZrvisPtVqtKJx6nq1LoWXWRPrBnutMAiRyah1PmtYnd6RUeVuEw1GKTo8ZZJTy",
  "key37": "5qrwQCUvr5ZE7u2FA8nX7JTMZuLbftUHxRrpevXBMjnXKH3D5PZrPUmgRp7Neh1KUe8pURzbQQCwhYMNkvVcyaQh",
  "key38": "4PJSL2zC8CN7p5doyjTYaHht2S4NFbmZc3s4GDcfmtC9xwrrfnHsYeNqnbqhoKrmE1PSu5cHiyqE7GfhwoWdsB2P",
  "key39": "4uWN5i18rNZWdLru8yJz2VMGmwkaGo5i3F6A2r7ieiz9Wb4cuN5VckeEuVEHTsMWUNxDWk5xQSwvzAyotyVCkbC6",
  "key40": "4PN9Sdda8ugKTwoQLBmZWFsYEAGqsmoF9VYXfyUCqSzbHxKriRCphuDefVRoNWUo7KLYk9Ux8bokkwKn19HnZtFt",
  "key41": "4arvkf87RnPgNfP7bXK8XE1P6fkGRHufvsNyUHL3jimxg4kVTnPzwbdmRWL3cFpiw4QzdHkjq1LQtwK7t4fV4w3j"
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

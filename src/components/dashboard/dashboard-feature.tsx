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
    "hN8kNKSF6ZX2Z6xCn7mzwXX8btjMSdw6nyVif9rD2G6T1EBRQCkprnpukZZS8E8J4m37p8H1iueuEFiYB9uSSLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WpVQPbdqKkKtQVPdVZcyrg4xpG3AJaJqWR53KAfMXz7HYVdjTjQ3myUtHWXRhV251bBk7VYW4kpkWezEeCR5J5b",
  "key1": "2A5aqJoEXKjnGxQS3Co4PNQNSgtPR72rKvf25ehXVuxTSAoKXk8pFyHb8w5fr1weYvTgyVdRUoaPSEga9Tg2p57a",
  "key2": "VTFjaeXBdGuC5hCqudhEzYKcJCYB7Tj3YUFjBqUgTGKwGBNrVDd9QfWHD7KsUKGLgikUNYSkMC5yniw8KcYjDn6",
  "key3": "2BeVnmo9GCMir2oKmKBHb12L7epFaFQeSKeiPwwdmHHzxWzbSuAYDQxhYqEB8AoxgUoP9AHBeAQzYiyJuPYXdZx3",
  "key4": "YHwg2sh4RbqBgtjE2vhQSc5A2KGrG91AyofJzYMKGVvMWzcpvCpYe6k75FCMCETtFUuhE6mbs1muxLXufNFYT1W",
  "key5": "XqVohMaNvmBD9iEPH8g6HEiryZJVKKkJk9sRsPmMdiApqq74YtxtKCmEprqoqZVrT1GHZJQKPCHuUmTejsxwcHa",
  "key6": "3dN4HyUHfuhnGQDZMYJJH9mqF98FyTMinE6UEdyba4p2hxRzTizRRdqNPhLGhF7FRLdZ2vHY3XGEV4q4rnuzgB9A",
  "key7": "5pyAU6QY5XmBgGD3vjRWwahfbtWxrNyfnXeVQpcqeQKiPWjn78GPJK3d4kjYqkyQtqB7TauFPJcKyMsTaJEruL1z",
  "key8": "26E44fsrVCN3QmXnj2segyGqsWPtCkxA3v7Rr2g42LcUKDjC4oTULZw7dhJWpVkRq1YteFBKLmWtfNau4xskrATq",
  "key9": "tvYuARq23wfn4xiBkBGcL1myXnCJNJj3Q2rEPHbKh9KSxfpA3FS4xN8kLs7FdeHdnvBiCt8sC3kRQv6WSS26c4k",
  "key10": "ENLcArnt4rbNGmimDdWcBAf9gDctS3KXw2kLfu9BfYjuRJd9p4t696VPxE5mucGkguq3131Dwt1xMkfQHDnB73d",
  "key11": "4eQmk26FGRcBukwo3xvCmDMDqXmeskx2GLC25zFsWLbBGsdhmLTuYQc3FDKkgifJBcA5gMk3XqVDgjAbNdLFvQg",
  "key12": "4KkqBC4UT1Sp1uwVtT5Zspwai4x4ZKhXE4MGRMLKFYkQEn1qdsA2cEZgXQUtB1zjgE9pCsmZfjm68KWxqMLrf2WS",
  "key13": "328d3eBH7bFZqAQSHW6oJ17k2yewCKxJvP2JuFKxB1rEz2B1ds2Eqsby52QvR8kyVU8sT9N4Stb83pDucjfKtQy8",
  "key14": "3oRmKAZKi6o84peABnr2egzQHaWufRdCwXZiJ4D43c95q52bsPhG8hUyRx45zasrkeHnvp2LL7Zo2aKfD5g3nkQn",
  "key15": "25kxSigRgmNMgXVFfjRveHjphUxh6aKzNb5oXLi3gEi4kadMfVVqgV11FZZYHYmRsb7NwoL9g58gD79C1538vJcP",
  "key16": "3Us7FytN7f5Cy2Eqh7ZgtjFf7kSJQXJyaSSiMXRD65dcswZFbTqZfcJRdEue5SxU4nWjegPyCckPjmq45HAQnKLs",
  "key17": "M2NgNVdnvhkCTK8sbGs6iQuhcVvJDWrB8BbRJjVqx432rJxZRio3LFDnKN3xXNeDaxUNx1vyEkK7AYXuTzxcNW7",
  "key18": "5edzAhmd9wVWg6uJmBymuu4SJYbmtD2J6RZUgH7RpHV7NG75prBPJLchHFw6RVC9RuvyzajJUfTmBsrqCez4HNe2",
  "key19": "3RSgir93Biz2TtkbTcfri524FKrGU5UuFqiXgadEFVCJ2ZkrJJ9XFFXwnnya3jhqpRLAjzfLZuP4T6RjJB347GSs",
  "key20": "5TAGzSXy2MNJns7SHTJHtQZp9bULXgnzuwJethXSMFy3cD9yuUAzjQ7jGKWir7dDNPAMG7HQX9tnpUNo811nvMLz",
  "key21": "435TJTyBNm8mb2oNRuAhnZQ9C1xtrtuU5eVRVnpVLWFKeDoeMrTgb1YmujAZH483W2zkwEF14R5Let1cBWbJxFGf",
  "key22": "bxnGSVGHDToNwacXEAiCoUfbdgnfVaVTxJKX6gR5TwXMPPpnSKURUqxoQVfAqJRi1raWgArXGv5LQU1eh26L1Rm",
  "key23": "4isf7GNzeM2LGNnihZtzbLTHsB8S8JcyDr4BB9j7D79aBzasEWhXuFRELTuhaJw3YQgMnKBBZ7VyyE78GRX1LYG8",
  "key24": "42TMpJCHscnkgxat7bQmuYvW9UepPvoqQZaUaxANpPKfLRziRCMj6wEB5ttQR6ttdhbejUXmxkcdBsmUd2EiNn9U",
  "key25": "4narbNYzN9Hz97dsYcv94BxpAvkLCeNzXFxVy7NbYy8N9EjyosH4J3NLepVXJni7LCqYeNuJ95fNkZ7zpEEqazTp",
  "key26": "25oxUjiqaVh55MgNyYAU7yxBDzKoYB68wrLpnnTadnBQWkAC21bxtmm1eo7wU2K8dva3uAJ1wvxF8GPMRSATVBxW",
  "key27": "4rdUS6wfwDpp2Uqadd7AMgDhXcKSxxe2sysEwes5YfRrS64pt1msjzJDFnWvuGhy2Q3ZYAEGojwwPkhrw9gw7isx",
  "key28": "4xr5DCcyp8zTfjhmAyUtM9sZHdGp8SthK8GubHVG7sNYPrVhEYZGin8KBoJRoq62CXFq2XrTMhrB56Vm2cYBCHAT",
  "key29": "2rtzjR3sxZ1eQv5DLvtZRyJHBNCfvAcNuokhGinmS8W5VJbrVLEg4cpXM4PH3e8WBbrCWAE6t755WB8ue5EUvvCk",
  "key30": "3UD8KqxWZEU6ha8Rv6ukPAn52EM9Yb2s9nSGaVWQ5iTyT1RyJFm4BWAL88avigJ3mdUGchh6UgwjAT2bBQBu8wFS",
  "key31": "4zkWVKsUxUnCsTVeXhtkpWRWBsj7d744BUD158AmYbdf7eN14EeuQKoZeysjjBzf8xNRAYAXZgAAdcs5qLKgSkdb",
  "key32": "WbFUWZp7n4zxKpCDEkXMxRfR1pnUyPCDDsx34Hyyw7AH9SbnzEUgF86PfJcuuWMbaWDsZ4pQHVoBdbDg9jYdx6H",
  "key33": "knPCU9vfkG2yCk3gSm1PWuu6XKskhaBAM8ZDFuyXBzEuD5XwbhUWvhivAs57cCcpaTBdppgxdJe14UQGvTWFRSF",
  "key34": "VX9XRk82WACa4SPJ8hu5e29XRQcrjmXiAPhD2FixGZNHCTtVVR9FiBpz2kPpiCM5u15nMDc2i5pbRAUiHXdu9gx",
  "key35": "4CBNm816mk7jUHUEhd3KmZkpLx9qkHXwyXSHgQhnmrFNcPF2X1QsvyGhFyVEmoraPm57vDeqtSxKYXwHwvaCKKgf",
  "key36": "1tn7wj8rV6t1CdHq6GvaVRdkYHVkr5mgdCY8rPxtTdfCu4L4q2DbnQsFowDWkvFfQUBtvkx2GXyDSq9TpFPfijt",
  "key37": "5mPB7EFA9tHvRDR3jZeRkoXwxBXqJAKMcTs8zpPsxJyjSwh1sPWXoJXhEjNYKgtKFjE3qDUxq7bJytZ8QHn2LFsQ",
  "key38": "4TrbsyBsRu6beSmiLJpVaQrNBHdHXxv5NXhHMh2BRbBybREbJz4ao3PjyF6TqNgfXpCWQECDZ8zLxPEGHqBtHWVe",
  "key39": "5fXRRZDN5wJEMisiTpiqVUjGqDRJtBubHPVdHUfUtzrFZw7YLS7Jz5FRah5nMLCxL3wP6WxD7y5Fp1Avqscb51Fq",
  "key40": "2VJgtKWNL6BTanuRFNsB31hcJKfPJQAiGLvTdvSPF5JYLyS9fTbERnfJSox5692Aw2z7dSP642whVX6Riwasf8n9",
  "key41": "66VdoLVdsWbeeB3ZgP3xzr1gBoM3ibyQ7KeWNb9wGca48tFvzxw5cTSbW23HxdJhaMrL4UypBiJ6tuEh63knQKN6",
  "key42": "2Mmy7ATnywcANRJGg7apYeyJSfbF6g2DANzgYWKjxpYjz881G1fcDJqjg4LwdS7BDGEoYYNMCGspcZrE4JSoHSP4",
  "key43": "fUs52pepDV5QDT7EH2A4JG7fJSUHZBvS1KSpQQNP2JgcdiuFG6d5SXyQC4dAj5wMeYSPVKMB5AhcH6SBpjsaPV5",
  "key44": "2ptNbH8t5JxaT9Q1PeZQqCwq9q2vsAX8eLfcbpk89nN7gQweBAq7yCVqHKcc71o2vUEVfHNTyuMbx3PQPsPJJtu4",
  "key45": "44PCHEP8KVMYMZQotcJH75MxUWC3jABW9FwSvXv8bgqjuB2ndMbVSqxqKXycYpe4LdGFtbxZDpAi7XuPMuK7UQiK",
  "key46": "WcLWWF9KEdhyqY3HtRaYHeo3gDtNqvh4xqW2BntZzUrTvGzrdN93mAmQEfPWu7WgVqU9B9PbZtiC8DLTgAnhPR7",
  "key47": "5uF8LBbxW7DXkvUTW8iEHPzW5JYrgAivbiYmjakXQEby8W8vBNW7CU7PNkYFzTigtuBxL5xyLrSS87HhMyeV22ML",
  "key48": "CuYUWVaFNdJPscYQTpAE9bFkaYrHeMNG4xQEsb24WE17wvWos42yxJrc5fBnsahT7usgw4KWtBDFzSvcDzM4RuS"
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

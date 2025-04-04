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
    "EX5AzGqfLySWA5Cm1t1CyPofar36DzrsKxLmMeANmNK8K8VBQdsPXGChatu6E9FdLGA4xafkhrwsZt5Bhh54vEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPZmThra4JasEVJ47tqHv4BnGXZ6QDzsUpTRtDCUqA8dc551j1wjEuv6GTGRiYPyaQiGJuuoutaop3LMw35TTgM",
  "key1": "4WkxrGUtbjxJ9dYhtR2Q3ZHucPTQ3FV4SsnX2Zh4Ae4vLWmgQ71pwwnRujUbW1VREkyXsZWKWnBG9MXXc6ZiYTuz",
  "key2": "3X7w9Y8UNMHbPmRM1bfwVw8TKiUMALpZ8gyvMxJF79EjS19z9XsAzPYx9zVgbsED2gWwc67RdKNmsa5EcJ2fnaUe",
  "key3": "5ANLM1eVK4KJarqLaEMfSA1fBzPyMbzLgWwv4nBK5YwE5EQ5LDUHLb3o9P7ziSTwxbHeKjvHDDX5voX3pGccV1FB",
  "key4": "5YSPuTe7DfdvBNNDMnnbEeu4q7nTT45vbCMcPoNtJKckHEP43zpxq4JEdcvAZs3oUyJHwbLqcJEJUv9fNYAA9a3n",
  "key5": "3UBpTr9EG87jiYSxhNKegnJLLA3mX95ARpuqJTBiybuCN3iMfByUXNUe4Q6DXTTjiXPdcp3U29wkDMcUU1PSMYi9",
  "key6": "45KMqqi4mqG4csLWm8R2TbiaQrbCzSxmwBcUZAKPCxULmKmYSgutkTcJrPZBL1LwuC6RFjdRTWVQjAdNpxsF5ZQy",
  "key7": "27q57KNTFFTaoNwUksJedvWMHtbH7eMniPLmtjFbsqugExHXM4FhjjAPZ9kmZe4GoZs4BnZ85h8iGCWqrDz93ZRK",
  "key8": "3pwB3qfSJmxbhWLHA3smvzqy2Jy8g1ey4JSGfm1MAUYn5tzm5FHJof935pHaoLescKCLSaArEJ8eUZTBjdESGGTL",
  "key9": "5LF4CNSwKMKMABbnaSc5dwXcUaKPfyeRdZc9iW8q9bdh5JE4DqmcaHkhwvM4LyYSVTDGyUHdjprKEBHgjnnRnrPJ",
  "key10": "qtqbYL2GBSNRLFRpppqXAWqFUBxWqpBnsAfYmyMe1VusdDYVcUErUw545k4hRxpb2cNraKvT4SLDHmtSpBxdkQj",
  "key11": "2kpp59qzDpBEEVZUKamQNfJQXwHY8BsEc3kHpEEDfJhTCZU12mVDwceFW1pLzU2vAk4ir72V3PGNEqkhsmNpptGz",
  "key12": "348FEPxCkiNi6Hk8ojkpUAVW3bqpfHvSPhCKHw2LZRGs4S6pFkhmnNfawtx68Fb2ygP3qg8xYAxRC8FzDKc5rh8o",
  "key13": "46AhnAmJ7Zj7HG1xUEktRMNRaQfV5Yb2LnPidsT99nJfZ8Ct1fmaS1kLCavUqvYAptWiqy4MKwpTaftLhJiC96a",
  "key14": "4iAVk1vvPJtpmsu3pytgPjcBD5i9AwEb5mW4oMQXuaNF6W5Fdob82R9S651pJwA91J9PzGJNw2nRvYC8etuf5Fmq",
  "key15": "nv5R7Rc4vXpMNc2E3Nk8Wsv5St3dNdZnEvVESxMQhQMCeY7wsaNizpTfdPZ8jxUFGmvQgqPD7ZJfsde5C4sSBGq",
  "key16": "3XYwaCjLKQk9T2G9iLjDsZ21TzASGuEoYZKa6orQk87SMoetaLDDctbE9tY75mbi9sn3k59ZzzWvPW3bn3sGfUjJ",
  "key17": "2tsZYFtytJnavFFMYG7ixG9p2XmS5V9kG8YnxCC3QCUu8yxhEsYccbgfp2RGRcedaM2i8jDEP2ExAbZcLFtTBgho",
  "key18": "3xUfD7G7vwKVTmjXX76FptSAVct33UwybjY9ywu8NY8aZ9UQuRXV4nwKMB4xgAZLndpAxRbwtiSzaLb2QB9dsyFM",
  "key19": "5XoNosgPMYXrSageKvtY2295GSXQjuGR9ZxxFb8hRu7qFXL4ERmUsoLdPPyyK5JTVFxTWNzrnb5uMoyeFSUpia1c",
  "key20": "3njvJQLtMZXU4jmJgFRU1Ch4iVWePx99CJSbsVF2QMZWXufRELfj6zgHW8CbwCkNuoRJwW3KgycmKuW6m3pRg3pP",
  "key21": "5UozyhYee5bn1JuuVzRkfWUYrNAHucn6MS2MtfMsjhnrGWNhNb9qKLDqkFeAjqCTp9pKyiQJbwhCBWAVoN6GgCZ8",
  "key22": "3VGVWPTTkj2VhRp2xocaRVAx1a8bt1nyFsp1REJGprJvSBHY73CcCZjjD6qywVfdtu6nn9nCf49h8zCwEedNyvDP",
  "key23": "1PfV185QzJuWZnVpDiLdWMi28WEhZjNYyAi7ajGGTNZwYX79JJSCFmnBkThZuHQQj2NmNdERJpnAQmVPGyPzZJt",
  "key24": "5QHvYyCnxudQi8jn47cYtMCHBWepwe1wsPTnA6H1xou7sesT34ci1igBTbB8nS8QzKSH19VnTreaqedxB74S9oFD",
  "key25": "373W7JwHhbPPfkD1EUdqL5j8y3UkJNPEqEQADgY87Nyc8zfh9Xk8zmyPFAesDPYmU1FVknt2rWNb9peBU46L8LK9",
  "key26": "5eQxGm8AGZrWHCVzACgFUy3iyYJEPsCo5mL1xWxaHRjRcmwp9cCd2EUQqVRtvHtwkYXZhBzUnHZ7wVjukdq3JfPH",
  "key27": "3a7BKG7RLrZTfRWntUoWw7ZM6qjQzyvK4whwoUfEjddTqD7azF6Z4SHGp1tfBQEBGSGksQjXDyduCTNgtbJ7jQCL",
  "key28": "5tNxS4sbn5NpqCm8m8n3N9VVSUSoWySAUe2cexRxEsRNubwEgpopujZJT9oPdwbU8uC9RhBKtMdUChByqJgXmyzg",
  "key29": "5hTeXLWyuD4GFdEgboJe733mKrBuEn5daijDqtvU6K61x41ZAfAdTikcVtJsEhYRWHfik3n1bxJupBdgoL2ekPWJ",
  "key30": "5zvWbj9gAWRgmfdHGttFP2yj1g98WhSfQEDGEcy2QjDfgP2Je3EKBiqzRXECT5nPVtfcTY31qsVf23FDYBvG7byL",
  "key31": "4evTA6qEK4w4BH2CdFh6fqnidhVxAtgpXTctqxm33HHCSVNv7rUPsGNtfPGm632CiVS9DPpZL5MQzWffBWydNKNZ",
  "key32": "2VhXrAC7otYhb6W2KjhVeF8T7m7ckPayN65CniPpecmKTJ43oSGbB3ECGukrBt5evcqdHugR9bdJHKcks75whfkL",
  "key33": "5VXKmVeo54SiCu54ndKohxxTYGcHGjsKigEGoZjdpCaEogXJfKJa43TPL2jjNN8e7y59sUd1PmLT2TJme5jspSgY",
  "key34": "4DYW4jgYf47tHomGHrEuQBrjQX4tin9awVymyPp6N5RkLNYDHop4Q2nEMEiiYjVJTCRag4vMgSgm4qzC247PX9Te",
  "key35": "2dnMoBwMeLSJCYcpHfMfzABQ9X7KiJdBpfHM1MwW1MvLzmdyFSA5qU3FQnWWC5WwCnuZft1eXZyDUpCviVU97Kak",
  "key36": "4NGZxgJ3zEJvfmUQZthJUoSWzMyJpzRKTni45ChmpzHRmZJyQ1ycBdGc5EbCAE2LHGdbUZCvmJwTMcLzdo3KMtqe",
  "key37": "3RPHSsgQ6YePTXD31qh99kdzdUehRbP6H3jcPY6uuWB6DEpZ1tRTEQRbprhHJa2UbtgdSkEUJccDBKgcjtBc9PsX",
  "key38": "2DW9z7qUoqiwE1xkeupD6WatGcea944y4zFYpATZkQz9UZKL5ymRncnMuccv3MmVA24KCFWMvuwhwdijfzqd2Jv9",
  "key39": "2GNrtTKWeJpoVWkFANxzaYazk33Sr2ZYenqX4sebD1jqKSfZo6R4PV8gaPSqUWcUUuVVaFcpbvBbNQy4VXpjtuFS",
  "key40": "5GtAMUqkAMP6viWvgb5Ku877DPXsT4129SQMaLCVbHnu45ctYBsC6Cdxk43vz8xPErAEw9wvBoP9A4csogfu6TwZ",
  "key41": "3u4KrPZs5KJgasdRuLhBg9rwU3wKwuK2Qm8NUdPzdUGP2BEeJ2Mbz4H3XtttZKYBpckzwZdgrXk4UseANdaCtx3k",
  "key42": "2a7iW95UKK7n1bbnfx8ZnfSvHTjk9MdGWYvmuoty6Me7yXM1xbAQKWvu5zu5irYxJSVYrGV35oxLBZCn9yUY6bpW",
  "key43": "ptX1xdjMD76tcC8K4qqxMfN75FkXuYRWV1GJ1LS9MSfrt83TKhYcYgSBRe8MvvcD2KD1ArP66envPJCRzjcqByh",
  "key44": "2rnRSJiCKr7eRTWHM9F7LhBZAGTwcNGj7hwjoYKCsX5KqYytGjv1piBQmxQ19yT8BSzyA7zJaeVfgP9bdycXpGby",
  "key45": "b5A69u8sQQH5oUmFVhBiBWH9o6obHGdNZ6RGXJ7AaCPnDVLKmegqCsYeXsE5n8Ubj9nXJzvsJAsUD51qQRBkuSt",
  "key46": "o5ryD8iGcTe4oHnk7iy1aUd7bRzQwZAWM3cmSdzLoQQKaoQw845pjsxNj9uLRwu9H1x5Qu519W8k4P9wNDN2VwW"
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

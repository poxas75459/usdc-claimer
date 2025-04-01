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
    "5TKk4jaXfkaussewU5XrzwqanMsTay47cgsMSYPPs1yfu3HJHCr59oUakdXtChgTbSkTeroGrfNxiYHnNDSGfWmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wz7oujaZ8QjuiLYiSU3xPnszbbHBG889TB7PizduippvgySFxUHfxTtEZz2MjeJLwrXHY39m4UzfnMGdS7UkC6K",
  "key1": "cjqaNX8uircGpqotnbBVkY6bYdBPXtCWD9vxGoVdgkyc9yrVMm8gJaC9p4b5pr91wh9qCYgmMVhQToVsZXgDaCF",
  "key2": "522W8hWEwTNG37Xv9dZJcVf5dBvZAhnFe4qjefi7L63FZsCTwVXnVVosrkRgvsCMr8y3A8Mq477qh3c8Ut481yNP",
  "key3": "2hAGbDeg3hn8xVJ4fMUgDTQtaTvSGdCZUKmHAWEoxZD7KqJy4EdaF6vAUccN9P8Hau1kDboWMEcYcSzJm64EzUCG",
  "key4": "Xpavq7j259D4VekfWWx9pA32Mtv1uqAgwnyDTypMrmAkrhTeddR3Df2kWef9hf73TYxGmcqTqAXCFRr4AmjdkET",
  "key5": "5TfRYsgKQ3jUmprAooU6b3dMnnfKxniNaqx1FPN94ZPoCw5fNy8YExTFC6nRzwmC1KGA2QFAncrMkxLJmBQTwBmc",
  "key6": "2Erc71BCuQEUrdacdpsGLHHGYZ2qM4Fpa7ppfD5ASxc9yReZHjXjJPcMrZZDaemdCGVF1J4cLqG8Foj5fRo8xE6L",
  "key7": "2kgDQHx8nd8BsBYuyzwBLtkHUu7Xa9NK9xAmYBWb4Zez1TCr4CyhGkVcoZEMfVu2SrmfNdjRebzKw2tywFGWCfx5",
  "key8": "34soZgppfbQTxFxxkUqib5H9MqUkvhH79m8TEw5nv8e7bRz8MrerewKrtE8fBAc8zAXtWurDVjVH1nS5dA6Hz11Z",
  "key9": "2pSMHwKSwnVwHoiEcpJMr1gLj48dFUke5Y3RNuz7YPCCADkcRNSQKh8QtAgcH9XHPpy8F9tj6HKNxnHrKi58WSYo",
  "key10": "mwepGjFX294128MHp7hm5YKemWZiKKDxRqA7XpDDz79MhbGzDn45TBcVj6TXtfADgLyL1cQcqdFVxaxboCb9YMQ",
  "key11": "4t6DW8m1uod5VMm6cwdckMvyNkVkvLwLnEixyNJebW4h9N3MGsEmGPMYQfTJKBVAGVekXmuYXVV35DbZXxdrRytG",
  "key12": "4kCj6xkYikD5fqwejMw4fHzCBDTSab5wVWaFgs1o3HHE1d86x2s4oyM441GYmha4e9Lt48XqY5iL2hP95pnwgoiD",
  "key13": "5BQ5zFn1FYCktcL5pqN7d8WAFvyyiEuPmry2rsSP7J3LsLqmS4DEWeyQftoYkxEik8x6D6DGWHqW2XemhXcWXwYq",
  "key14": "414HkcrGuVhYNgZoms9K62nogqi1rxcUU1zAjxzJatW7MTkYrMimYGxwwjDBwzBE8wevVCVdCmiqZ25LeY4NEaf2",
  "key15": "23SqLqn2QEkwutT3vUXsLAZym8Exhj2ajVko66nkzFSZdKu4tNgo4ehDG2biRW56eXn7FSDSncHQRFDAq2jyUQ8G",
  "key16": "5armRxx2x5urKGo1fJbdeJzZvsL8xDKfTyyYAs2uqeVjMoVX8bnPLgmc4UkjUqxDgH18GLFzpju2aDiBZp8ehjmJ",
  "key17": "3oF5yHS5xBZd4SUwLmLSaQWeHeK91JXXHNRPGuHCzYFftPRiWasMP5YSaYFYV4GSjbbTfKhdc12hUgcAPc23YRjW",
  "key18": "rfJkt3BzyXG5fFdRSmabzBy65y3h4xTdaRhCCtbTGP8zxPpqeDiMWhYEPhsS238YKD4mN88Yn9fmhw4WqPFLrin",
  "key19": "4rDtGR5dTuc8as6WMnHd94LP7GwQBKs9PacZ9SS4RzgKpjYtnDQNZ5sCGTH5nEik4iZjDcf3isAJVvXe3pzzCHDV",
  "key20": "4Mn2JLbLpQVjc5ZGFmbwLiyStRmTnsvw3wp8hp2AXRnt1m95heqn4BPxcQqcZJmeKVg8M7GuYuc9wFXwh6vk6pCn",
  "key21": "3gDTyGyDccQWgY7SrdJ4yxRNisS7T6Q3fsLTmdNTomTNcAm12SSeGPzzmNhHaz6RPC1Spf84mDrCh8HE3FboQiFv",
  "key22": "573spQWqhSgD3XK6fYrtFHyqVLLp7r8jeSJsnKpFRgZ1EeXNZTCG7W9dC4paXVece2cZnUakxdVPWs16rE93oCgT",
  "key23": "2DzCef7RDXUMwmNJ2ssYXL6g1C4og4TTZ8uzzCN9yhFAf3qPG8JtdghcGE6Td9buatvoYx3yw1mvQdT63yjEF3N3",
  "key24": "4PvuHGAHbT1242JYkeJHed3umKNW7Pc4D6FziKdNXxAJSTy2MpukkKJfNVsc4fxXqgdpAVQVNtf2Y1Zm3RWxjWot",
  "key25": "2qgvGCdHXRJkVdVWBaCZghdpiZwJrG4urzLXwpfhDcy1sx51mxXiRNkzjnLvsR5wJD7fhvvinXruNzGHnpi6Ay34",
  "key26": "HbUuUiQXT4KGa6cys3wi8mcX3epDpS2QeP6h3svYRiaU3agfpSCi7X6jhsYptCCn7Zw7QFmCMANkXqg3awebcV1",
  "key27": "4NkPTDhcF7NzSBwaSxR4aWXP9FE9ffPV1Gg2Ez3ZJM1UusfQtnmg7g986pYX7TdFnshWJj7FyEqinazbL91kgNEY",
  "key28": "2GBG8yQHGiDp6eNhpWC3yi155vYZMUxKoaK1txzf7PV1LXFuv1cL7HcSJaMr9i36mcczx3bb2HyAkhDE8PjE2i9z",
  "key29": "5jHizFRLiSLGa9fHCeZaEyU9ia58R1n4w5EJNbAbHNS9npzRyvcXEFGRt8NyCrARCSgcHBmLr9yfwDuQNAjCjMni",
  "key30": "4R5G7suLR41ZcjhDGZH6r9nE8PRqDhKmir5CFj3Ai68qHfqsy6akHv2nCvPhw9Unx41sB1jfsazteXAPq1u5onKT",
  "key31": "2sySwBnWurM83HDTEwwdWCvfAHSnvM3DioixeYLSVmxxrRXynz3qzSBQ4NMHLafViJFDBospoagmn1FEd4NxtGDj",
  "key32": "47TkWAdyMe8bbxDGS1ruT9pRv45D6rRjqUwhjuie1DoQHs8F8nvYmo5et8Cs1NRiV8agepLdipcEsj42BYpCPgqg",
  "key33": "4Kemm22wWcrGiVfPrnFefksQdKNrBce1zGTdjTiFxsaBdfVGaNvJsRKRwVnCynZ8cGxQznSM4p3tMjxaY4G49GLg",
  "key34": "5kEhhwAxJiTPR4XinkqWdNVgJDxtWk69Bh9SPFRcBg2HChxY4pLCqAUFvj2XPtEXqTTASEkapT1pWtXcyggt6gaU",
  "key35": "4X9ez81VbrD6cwVMvcREdeDWcrxnNH3YXPQbcvbaKfF9WCNgR635gXGnFVqdh7t1VeUizmgRGuZyiqyZG7wHKd93",
  "key36": "2hYkqBjUKdxwW2UAKE7f9rZGAs82kLQFHZ1mo6zu84Ec8KTukN2XfVb2cJxMgYdPXVPWXsNFhaaN9Y1XXuYTmHUm",
  "key37": "sykTJvhyZqJLzjUyCKGcDNYW3XwtaPTxcsrfUG5M8fExtUVVAa86jPxRcfhSWYmaXSQ4ELvoYGNFsoCHDapMvrN",
  "key38": "63cPXBuR5X1XnMX6tYPpuNNx8MYjTUSPVi5L3eeVMM5z4biQQWmqDkAzz7fG2D9w6v84qEtEht8Ukx39VrWaXBJP",
  "key39": "3UGKH3MUpgEKhCvcv2RWkJ5QCSUaEWmvpP6kgZbg18sxWneRw5fAt8kSxpyjFGdfJeuwfK9oWnUmxfvfDgPG3Fnc",
  "key40": "5EKJm5AAbZyuS6XNr5XrSFdz67bNqz1jhYcgtGAg76WpSZeLtEwdVBBQ4UTVAfM2k41kYcC3btXhPE6trMqSCrMh",
  "key41": "3wu7L7NCw8BUP1tt14csPsUyvTikpPynKB7S1SF8Yt1drUXqoCarBCPtd2hpt5FSdMkG5aTAewRk2wJYppVjxxw8",
  "key42": "5fpRJcv7jiV9BbtUERr5MZJyx3hKVvJGJjFLAYfQspJegepUwKPFJroPBHr1FfZwmzhT9Ya5Qa3J3sh1ZZzShZTB",
  "key43": "5V2iZQ3yWgkFtLSdT3opKLYG7Ua6zK78xeQVqu2LyLFd6z76YyxCpfBucmsp8wvj58vohBFJCPKz71a2xVy7Gn2j",
  "key44": "4SiAsEjJuzavdaYN2CEN1aMerxvk8imykxgkru7SRjRLvKxEoXv8YmxtuPjmRJ5rm3bf2R7BqekdJ32adDZLoWCz"
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

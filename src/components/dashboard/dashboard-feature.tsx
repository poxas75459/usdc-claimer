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
    "2qUDnaffhKs1rvERgacR1JkL41KdEfQq3iZt3hLTomgLW8Eje8p9H6Ssj784SeREa8Uv38R5bgzvEQrf81NHAP85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57SLCtwrVDFXzeFmBe6WgwAaxRA2pB5aJ6fPhZVSXEY8YiAVpHAnRubjBhSbu88u5zXxDAoLH2ySX7FkqHYKsEGC",
  "key1": "2EGpboKZFvm2PY26hwE3u2ACgEMCMMmXonzSNWmW4bBXcW81Hr79D9y5VhXPR7DqBx2vu1MsN2kWHmYx8WmXQDU9",
  "key2": "5R64sHC4pL7NALypr6rCcZvwe71XzvsqJqqdFUNoJ9T4YpGpszhK67fWZs7dKQ1wmfCi8jya3RiBrgsMKx7BXtDD",
  "key3": "5xKeDThUEiQgvHXByNbf2EdepDLu6ZLyFFWrcnwLjspVnmbvjzyx3omjPPAKzhDqBbMPpWGeRTsFVPjJdEq2ghpp",
  "key4": "58u9CLU2owa5rgvNgLxZuqsVY8axLVJpmiignctyRBH8iWsJYoRRsHY59ckvk3ED5bbxuXdaRmxkKBS75imworXt",
  "key5": "4QfxnZtFXCpDauhjZMk3a8c9pxzvq3CEuVKvnQyZB5RgDNBE3iVbgLJ8GPTG5L2z7sMQwfVKu5WCohhFQtynFLre",
  "key6": "2ksfK87XspKVgYLJks2JbKdz4tDdRLE7meBKF3WRRYeeECZ6w6DPwjepyMeaKFxcxzmxd8gEjcnXGsszZmxkUiUm",
  "key7": "4XfXC5DZ4S618sF4vmzruxCaDdbYZiczHtZCMMUtwB3UBzzj2Z3EAVtNmMgRymPnbHMQK4enAX7wFYdDtBKusPP2",
  "key8": "5zEwZzpfX4QebBVsFEN6cttQAcG1kyZyRXf56xBTgJa6CgGchsRMjSU5auuKqKcV95ZWwcoJUjZPEvpyEacW5AUR",
  "key9": "3cZgk8QWkJiEkzm2kURwJxXsb9QQoo631zFP3tETpLFo1ptPKqRvefG5kvKfz3YKmKZBkty3oHC3kGcooCpDZcNE",
  "key10": "9vVUvCLiCkNRCja8aJnL1eqdzxc2fCRXkrtM5ECTNz7p9Hw149JEu7mbdmeFVe635WhJL8qR9Tkxv5Y74E3pRAj",
  "key11": "655wxWAqd9YfkWB8XET299dxEPzFFXrFgz3LXWscJcDZ2MVWUn8VqDa4WmRFcZmsizkGMaxFpDAvNKkTDDQNUedM",
  "key12": "2aQQDCNUe8MvcwAJM9SvNQgcesr11wEpr1YRGhSUZn1nwABRex3uWdawRhv6V5komiReZFPBQqfrVjsoJ2Y3HRPx",
  "key13": "52i33xoXUUbM18EYbrX9YiRgmjwjWPTFzmhQf8rZT3PaErC31KpdxCvqPmWEmpHjL18CGWnv6CYR4RCeiZDNc7bF",
  "key14": "4HAJXepmNqUJakVSThrica7YtXkSZDL8ytSd9g3spiSuBKCZQa9EeznrpKaoPw3dSPv5a5qYmmVwbDnDqC623M19",
  "key15": "52pFvYWARr8cVSgB6YxNbqwMa6yZ4MjeKfYidr3NNvbMbjiNfpxZfq72stMa4WfyS5x2NcPrfpKy48DRg7hhiziz",
  "key16": "26g2Xq3BEo56BVsWYfHdmjB4FinANr3A4YjgK6to9jY2d3zTjNViDh4t7nFhwqzJY13iFKW5P7J3fnXeLRUuSsxH",
  "key17": "62monLSDAZ8w3AbCdpqGWKGMDvkp3un9NAURXQ8AZYmfakefsmw5iiw3YsYAv6ADR9nkKJS1jKQL46PJYLknp5hf",
  "key18": "3eo31mEoxrgYSr4vrXCmmszf1jJk7sevD1kuJg9sL4cuPY8Ha2z5RRg14T4Wdx9c6hUXkrybgqfRANbT4CuNsevU",
  "key19": "63yxe7dcKwHw15Pn4xAfuWe4WJpuvfAx71QouFSqsnNqrpfdbHWmgpxMSHvMiFGGYLqVricMCL9q3Ay3BzW9mDRx",
  "key20": "4ovcpkRDM2Y9PkNHEU9ejSAh78opwWdnecXwyQna6tH6ppcoBwgbUq5P4ZvZ6onDKQUSRD5CqwKTUMR8gz5eBGAn",
  "key21": "21xEdmtsntDdpxQgkyadQLZvwQsNtvgwDvJ9fucdNAURAenPsi54Syv9KxL474t1tSMTr3katEFM4cjbrRy3qzGB",
  "key22": "2mL6nVRNiqY1CcuH2YL1zrUhUriR1hL6ecQL5aTUD1jmBx9GuvZTm4VZEzxYXyJSzgV8S2RwYaRSPL2ubKC2rffv",
  "key23": "5tXziqf99fHeuPDsvmA8o9HYLrKifNS8ks8DGaQ6je7uXjkk1zF6cBjke8xpMcUdgddgRoC1XYeUkE5m2KZu5CsR",
  "key24": "5jkMY7rEbvoJMruv9Q9cp3PccTtTHza4op8nvdpgj29xufL2wq2G8sBWn1CsRQSoq7uXeuKkffkJKZCu7SXfguKL",
  "key25": "YYkaL2mbLEmP38e8cAsC5Tpo9P8SqwVbPgwGaf24SuDe5Gp1xQGaA6uYdiRPBh4JiFMxKy8sScfRKAHQSFtafuf",
  "key26": "38Yq5e6cweBaJu5D4xDUk6k6qFNSakQTEXmT6NhDENGfLfigKJVKmoyMexPNajT1cHmNtp57jCbsZuKoHPB7qXVL",
  "key27": "5HAZsQkAcTp2bCiQaqr2k45QHUh2DURhxKxvJopzfnZqvQhNZqGcsGHK6vRXThAhWSAfsVtWhtAhUGvEaKFcyGSV",
  "key28": "5g4nfK6iSktexQ67ohQ2F7ddfR9pWHWcZaNpTx2rFhSemfvwbWxfyqnEYQ1CXTyykiizHnUaeBGGD648aBwQXKfQ",
  "key29": "5JQHukwmTdbwSQNdsuiZR4zSQeqG7RJyVkqaWRoPHA4q19tZH5W7pmFtSSosBs24m9f1nZfZ6LwiTa7EHtQ8FRHw",
  "key30": "57WSYjtPJ1TFnpiPudqzbW8hWSubHrPJQc2qbM2fFEJm3T4eQBUnih3H6BfaXgywxgAc6XvzNBYgS2HkY4fVUkFk",
  "key31": "4ywoCTq5fzARbs1UDujh9EdzFYBC4Emyc8w4f64JkZJMKbnsjsgNufBgGPw34TG7iF63TF3JXpge1DQyWdtwRmnb",
  "key32": "AjASEch3ACawBV2T4n89th4tFNsssK74hffcVSoeqDpogfBtdCLFriW5G4FmANu5riGTZqxLws2uYWKLCVm86SK",
  "key33": "CP4M22oif8BYASxRVYZNpQdZzv4aygLLhMmBis92sQN1DsiYNvByraxDenpt53Un9rQs1sQV7h5Bai1rQEkFyUe",
  "key34": "42urornyvbZwB3qRtyxnqF6cy82XzNhwassQaBsTxY8hLLXsNzVEyXnGkwVebUk1wNLfqVfywRQgockgAxBsaam",
  "key35": "4uCNsUMwAcdnTxoBSfe9jFu4za8VVXSK2uaHABVyhMPJiHC8a8QFCHNt2gpWgak9uUd9HdH2f1nq7un5D2Ju2twM",
  "key36": "3WdeJgfXbEcB4chN3bzjwTBSNQZh56ikbq5L4pKPQdMGQerWqkTjRsx3i9cyfoyi2HGi8w3afPjNWk4JDfRhdKLB",
  "key37": "4ho8F6gF1fYjnko7vQMSPAbZnzrgn9hG6kqqEHXmRwmVeXFAaubRbwmUThD69xP18rR2E9pBFUtPn3ksFZWCdjEh",
  "key38": "2RN8JcSSu1iTTshGkV3KQtzkRDVEWpKikxbC7kRzboxQvSzbzN5r4s1aGZvzfF9AvRA11swpr8i24XSxr47b1cAm",
  "key39": "61afFDz7XxLeaje1kXM9g1cexgoeZ5tyoUzy29ytgiDaLhuXw7AxdPX6GjkNb3V94rnfCPfGy4QUHnuHjkjAnDUh",
  "key40": "553NnTtCa2EjpWdbX4wMUa5yYHk7peqnuCFmpZvsnALicEuviXaQNPuPxukBzaS3ZCxtUyFNFVkz2x76BYqF914t",
  "key41": "52JkWcNjmAb7SZ2oBui8chUQtKw7WNDABHrdDwDuoMfXAh3C8Y7tScAanJUaAJMeYaF9nEUxnYtw5fQDSfgFaPsp",
  "key42": "3BPoX7AxULbdC8sLpnWhA1vU1azijik3XTeHUgAkFWEjvWnXjS231S6biNewtwRxvanKtuhDAUcMU49JroRj7SKe"
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

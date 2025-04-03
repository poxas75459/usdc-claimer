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
    "VAze2YWfgYPKyzwbD5WPC1piTfPm5Ye9Ed7Ny7dZrGoHRZwK6fDSGNNmcJb8HaPFp17XA1ZEPr76dv42r8Y9ccg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kj3tUxKNEBgJzdkoqDZdSCoqNkRcS98jRZU4ruxDoFKCprLNJUkeDDFaYmiyXywtYVrENcGYwS8G6r5Wzd63Fkd",
  "key1": "5WhiuTzfaky3GjyQrQV1kL8m5e7trDu3wa5cVi6MEwLcAP8GJTGm99e89qADZpd9e8QyPeStnWKqAmUuYgdwY9Um",
  "key2": "4onH2G36Xj9YYWFzHMxJ9Ho6PcXtpUqdPcen5i9dxYFWvFKgPGVNTmPiKSVSMCQXHYNan1v1tsZvuss7H5MPPhPj",
  "key3": "3XYbMABxbJUua3sCNRbgAj6bXBZQ67WxrdinFgg9UfppopHXhv4rX3UnsFFbVExyeP4f9ausGnPcSMZFw2GicuJT",
  "key4": "3twqGEWNWQn4f6uX5mrmacm1LcbpQGFVk7ZhpM8jeZAvxhfPV4Bw6c5JyjRhaho2a4ukpFkoV19qu4RJfadefL1t",
  "key5": "2mTRXsbgxUyj885MxEjMaGrfq9j6L3cjG63Dh9BheXD8uyx7e6hjyCt9bpXYwD9duz88bNitFz2yATpRtH7JMv4Z",
  "key6": "2EjLbvBhGvAiy4TdYNZT5fxyKmS5PYCfyQyy4zquAntjXJAZTuJfbux4u2z7BGmmUzP6bW1YPenZCTcBULrRjBbZ",
  "key7": "2xjSkkQ8Cag3xUFg4RM6HEeB1NqW4cH4NeDL7st1E2KRVpFBtgApgepjPBSpmT5LjpT3L5pTszKrMFjbM1jhGy1z",
  "key8": "5UjYicGjZKEekChs3RmkZRoPLwU9CWepKnf11FiCsjiPb1NGRVZ4BvdqamX6GnP5aKrTSqQCfBHBd4Q8UP4Yryu",
  "key9": "458ZUW34mreUrAXNq1JghjAUkcsxFeX4pNn5A6zNweTocbxBEEancTE4Y2qSazecgn7qy7Pti9YwfCHsZmHAnhqa",
  "key10": "2MNRgBazwJzdLNVAFq8tNFCYKvgm6CU3NsndA3c1gjfz7CAyXyVrP796MsVGadfSoCkgyp8QgujoTPRFHFjL5XjW",
  "key11": "5SS5muSYgis6BaKnSznYdHiTeFA5Pw4754vnNFRRj9Vws8o1ho5jE36a591sPXNKBmyNajDdPe5eHoLhXNqiwxYR",
  "key12": "4bY3e67yH1ZtpL2MqpfE29vCzgHoSZC2YqmdLiHB7YTzMdaky23iqHdsv2TeW24YLMKgiwbWvbREBToZ9ivdzZ1a",
  "key13": "yGybLTQ2cWWbvQBNe36ywDDwiG4EdwDUoEzoPH9sjyJ7W6bonXoBjEACpx4gisgm2WodTWVtCQvztP3p5mQNuxu",
  "key14": "4ZbbCS9UEr8ivciBcygANYCt3bswBe1nYYtKzySDwXVf6UWQs64a9drTRcG24NSEuvnGZfRmKFQgbqZiVZX3YrnJ",
  "key15": "BkCV5nYheH8S72bLff66mE1uRGG18i44JYJhrencDAQmiBYkjrCJaoijkN11p1kJ19iLwU71eBmG5dy12rLwFeR",
  "key16": "4uUAYETPB5tqtWf8xbKgn4vUxaGVwF9dUvdaK6JWbXXYAJ1QjY9b4pmUf7j1N2B1jCMQnPZ1E5CFFVxDmNbWBZfj",
  "key17": "4DmBbLi8FzZgjFSBy4MurtXK1fWx2hBGF1rmFkceSdPmxbXHUXXhYnibeBavrePzhC6LGZw8SENeKuHANAsqtN66",
  "key18": "2mzj5SBKeV8aPcaLu363fWtECkoLTgMzcb9wre9QnCDjDYMsCT7VnzMrkrFfEear8NMMW6uY2TsiSDHmvRHJ5wCR",
  "key19": "5q4rCyus4sTJm3KSzvHrSwpWFgJr82Q4K1PkhFFrarWZyVj3zWk6Mh69mkhFT2CshSZPomp44iHzU467yZDG612S",
  "key20": "4sTcyZHqWsP5XtVZmrwRtFBg6cxZCHhJaueaJeyLbKMo3z82CVcjwKxf4q5KnQpDMf2CPFqVDVdkW8bGURTAxKTy",
  "key21": "615ikFucZU2DMhsjttWKfmfobf11Nsena4ntPqpYAsKR6jSfu1n7oWxew8XYPjG2t7yQGwHXL1B1djdXvrqqdYtB",
  "key22": "5tCMDFB3EZV5QrfZMMCno8BanEWJd78dGrYBRbf3Y2rSZg1S6q3gm6Cm5U9kthXcmmmbmqvdqcpTCYQHu2a5wXsK",
  "key23": "2dFqjQd1kED5nNKWFoGc8hntA5dDXoLoBH85YPiWy5BfjjnCEi7Qf69yD15bdbaww4ax52VPq9SywvvjiChkNyGh",
  "key24": "HAXL52Rh2JGDrNWjvtyDaoEYsNzHoSmavLWbR7b8NfugWiRs49w9MMwtifVpZojVHZggNgHTFAaARFqsaWw7PPp",
  "key25": "3iCe575x9pKHfhEWnMsx9jEgi6exRc7qp1h8gdpFKTmufKQBRquir1PSut2GvHvELFjKJ3Em3Lcb81CFqj6vEqYE",
  "key26": "3uvZkgghtJRcMbpPzYRhAuaEUReB9brBifwAJ69n2K1dCVNyaKEuqdzBboVhvUXVLWvUnDPVMAoU3pXWBAKTWrZ1",
  "key27": "2fqtu6nxTyCppLCyNmbXZyFtN9p4TTFT84WBXpLSSqo3aD4RVxhMzvLevWf1XidtgBBdEE3tdGpXHH97rt9swCug",
  "key28": "3UbXCa8NroULGdhTTKv3DA7qYwsuRq5D3Yg9kRMReMWcfLY9a5NR89GJvUDBYPN6Eq4PMY3tdxQhuKAe3axxVR98",
  "key29": "4REb6T8vYuJ3geCks5VKbXz4bTZKigdMd4Ka3zqWEhpRwae3FzWtEZT5jJtuVaS5EcEXwdTkG6NKuw9XLdMcvF7o",
  "key30": "LLuU9q4HAA6L3xmWEfBnujrNkHDf51wDbdnjHqZ2nBziJDeM618FHVKB88L5HSirDAeqa546yRec2Znmdqc1BK2",
  "key31": "3vYqTkrbf9cHZppU5w5jhNgmC1XQRwSveg3asyFsVAUbSHFshDKFZSFqr5BFgoggApJ3MmhYrn71sGaXsUtYC5su",
  "key32": "3o81WNgqk4sWUJdcC3Zkwauh5n2249Paf9c1CwWvbpgrQBFKCxR8EtxF3MsmyfnnLgeCDhgPPjYZCpRd4mx6VQus",
  "key33": "2pn4PqVUcT6vpPwXQLud8SbjGUHHdY8qfYCh9GJGax26fKBNDFGFCsULcmAhb43ZsZsKpswPsc3F2y5E6zW6xoSe",
  "key34": "U3CgYzZSN7urUwciTaD2AccmRAuafTiRCnG9Qi1UtKhsZmKdFHiDNEahxDoyhvxiKvtPTD8sRTxFtC7nhvA7qm7",
  "key35": "61NJLhEJQ32ubHoxPH5oui16w89jNPotXX7Wc1pek3W4qcdq8FwNLuKK1yA7gnCxfikyM6xpk7ZngRP3TortcKns",
  "key36": "5c5LCfVH64jYd7yjnSEcJAtwNK3RuEMMrdgLnJMdQkiryC1ehMKb7nVHLRq4LkKGQnPSNUud6uqSwhpHuM583dwW",
  "key37": "5takyk8bwxajnq2LRhmmUkQp3eB6n8gbNMUWtnj4rfTUn2266EULdirF4tYtkRAN2LkyrMtrT9ReZGA7bH8uVQ39",
  "key38": "3KmhiLfPC2VJYskAuxtvHWNAqeVB6Ev4kLT5mGQaH55pkMigAiz6kfPcSk2hoV5VN9aHZrpa5cXRKEew9d7cj5s5",
  "key39": "4fnsbfEwfWsupgD1g44KhipKQVVeQpywoic2r1Dxx4crn6e4EGjjTuWVAn47cQNmv5ongeDwxju4i4qNqTYaLZDt",
  "key40": "4VyTKfG6GLEkbPnp32XmJzjb5SJddcB8i8PPR8w7hkCwFtvDCH8dVKshv45fXB924LeLToup9rt3A1k14KDuqkGJ",
  "key41": "5LjjEs39FPmMRz5jb2PAwAHCGGNcomgihvzAzr2vGgjSX11xiDgJAQgk3fr9WFHjX7yNKGF9PisCiKH4xFn2MXkG",
  "key42": "5gVbYS6QjAg1Mdo6uWcYBaqVFZejZKYAtbvbAfeZQoHL7oGECycaV75Q1M5s1KtfwgB7AvtfAXCB6meKwcZ892Yi",
  "key43": "4ZLLujEvj93LwwdpJkPumNGecnFXYH5Xa2tMjkp8orhmKS5wfsm1aUqq8AcdWm2gqetKvfWicbMsdPeTqRfgN3sB",
  "key44": "2ybSQBaLxCwgu6spS8uxjQhioEuKRispeU6nifSwkp8YtHZdtoh1jVLX4VP4pgHEaP2naM9CqeK35r9hGtykjkfM"
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

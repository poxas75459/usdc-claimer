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
    "dVcngBywoGQ9wqQNsP91df84RAUP4by9La9WrHKZCzK1RJ3dKbHLdxAoGsAy5TeBktBQfzBkad8EfRxCMB6XnzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ioA2WKyLjb2JRWuk3GeBQkjWMqJ9cYvv6VjYBnccpzjzzE2qwayiqxugnaoego8mKVWpFVC7uj89uGkysghQfru",
  "key1": "4pQtjxgF6Y2oz1nvqcuasV8fNuL6KpzfcmBFzj1EKjYz6fsnHuhRtmryeJ5T4CH7CdGFupMejJ6jjcYPSKHR35Ux",
  "key2": "57TY1bNvAgtTGzNJuBhY3u5AaWero7WrF4DXmUGE7DngwkaC1dHovay5nNwikPNtVtkvLXHQcCTLSUv56j5t9mk9",
  "key3": "4VxvryN5wUdTUtaQD7UxRowabAgVnA7nMDtHN7Hs6TAtPKUhnPKHfKcj3poTCmEieGVH4CXHUifih1QbcdSQMMzs",
  "key4": "4uLdsQBruDT9Q2cLq6pXWZqxdfDvNNgBDLbD3qn5e3STG1ew5AczbUTxYPENahqPWeHnvUHn5vsG46qCtGDK4yc3",
  "key5": "NdxEg4hM6AL6VZP4LPSjZoKed3Mn8ceSXLfVAEaHUumqCEvedfVR47TTJKrrH2u3aoxWfnqw3AkKEqYBpnFKjFU",
  "key6": "5KphtSSqZJwbNt1LUPAkiYXy5MipSCam4oZyzrjukSd45iyjT7U9oDdrzny7puFewAa8kkG58kjPM1SMwiFpwxgB",
  "key7": "5NNNcjYanMfGdPRpJT22nuLyNBxSotnwdTq3CDSF5GZGvGm5j7hwDmP3BUQy5VJK6wbd41tQdPRde2yYkDS1Jhzd",
  "key8": "23AtMnmzsZKjSD9owApRxguVw8to8GjTYmLyQHetUmgvUeioWjiqxBexvLyjxdXEoFtFHvTek2aFvE4u9Vno1eAp",
  "key9": "2dn64G5Sapj5tuc9wNoTC286D4zzq28Vyset5umy5xFg7DxJN5ZiiekQAm3pmXQGZStAqgPwiSgU1eLkSkJaqLuU",
  "key10": "2EXnBGG6PQUCNJ4LdstcHAdHnwRa7NbzjLUC7BPQGrFyXdojDzrZeboMm2qiBXmTEHUVuxLdRoNZ7tRpNiQ5Z6ct",
  "key11": "36VQYrEBNAJ3q9hPXHnmpug2HB85ZQYyg88iCnQtGsgzTZMjV13vX6gSqbqAdoa94HSDDu4tFuotrERVtpGwq6La",
  "key12": "5A5ByQdcq3dq5cxhags38A1RpB3HSi3x7uVGBL8cUzzj35BgU7ocu451JsxhCLG3DFz9a5ozX8ScEQUvW9QKygYb",
  "key13": "632ar596UPzm7gZrw9JyrTnr5dsur9S8QYmrtGSS5tPM4LxFujebhsDeKu3WrqJ1We98kXwjbLArgwQxMjNwPzKU",
  "key14": "4W2ESkW3vQqkzcheEJAkN1ycyBhWUPGPQczHcHg6v4Q1HoXBkDQdimbjNLDXaJWskuqQiD8AH7ePzW7UeNUEn82U",
  "key15": "5Y2vZAzCpKJ1ww19rkGWZHaE8dVkzpZEU39WNvjeqBxtCL8FdNdfGdXchwVJZEf8wriwR22aCAaEeDKbBA6vreiw",
  "key16": "3WeRkLcoM9yB6dv7fDnmCG1LzdnhPcNUFzYGP4oqPkw6wyCrLYcHuhM5c1hoHB5prcEUTf2qV8vXfjNXCCQzaTpt",
  "key17": "2RUYKLGozafWWCMN1HnysyptLGjChu2J6fDxbEKanc31nYLNmdesPZYFdJ93DnDDzeJnkvvVQPUSAQBrHpECjMx6",
  "key18": "rvcRnJzga5oAuhmusGGwm3Hp2js4ZFp37izvuX2ecrGuAVVxoN6LEhe7qH8M7KpbYZM1WkAesW28YdPDQQWshs4",
  "key19": "55doa7d2quV6Ru3E19qL1DC9WtYnE7jMW7PoeXdM52oRMqPop7NwvotqhHdNkwYphoDzz6oUjdHnZKJyb2RjzFbv",
  "key20": "5cR7kYGymKDdGx9LUoBam4xc9aEkmtGeLNPT67xpa2fBwqkcfbpN24ajyz8b8aBVkstu2ukVkgQYG4ESTisBSqJj",
  "key21": "2tYAmXkWqRw1PMGqJtQy5wBaoodZHzUG2n8yzd8gQwqEvNXxP5hhz8BA5i1G1PkPTYEKVWEraqLyxFswhDFEE1XF",
  "key22": "5UwjiN5UKiuLJsLjgxN9x4ceoH2bWS3ufZjvthMMyiKVavdDxRgz9eGZX7L7VnwwyqvnGBRcXWCG6ciW5A9J15dx",
  "key23": "3wxBndUDnVRoYCx4sQfakMVGAdcVwa7uYYJyBBBBRKoFu81Hod1b76jMRHStpP7ZBAPTBvqoGPV7GHzJJ2n42D9K",
  "key24": "2TFg37NGR2P8A4aYKDYpiJ1yWkJzEvkdRsFM86w2WESxRmDAxSSTqdKcqFMDZT3rex53suQyRpMDeXJQ1NEpMwc5",
  "key25": "5XxAdwrvt295zfmZNmDuMkUHnVSfDcsardCWapaQdQj5s5rbaWyc5tSDhLn96wpkURchPY6KxgdUS9SUuWo34Jm4",
  "key26": "57SXgE8XTtUQd6JXByWrtWbW3m2y8LvL4rkTLdQDLhYmEw2ZWxa5b9p4GcjXaqKiuf2Cr2fL8RCToEL3Ttg7w9Fa",
  "key27": "c2RaqXizQKT5oHJw1yAcJAW79HFD7d5Ts5oWh33HLZe16GaSbvXCxaZB718uaCetiSdXncgCJmjqfWyZc2ropTm",
  "key28": "3VaVfFMPFE2tNbnGemeqVos4yXbagFAqSjYpEddpJ6q59tGKYnZeiPJzctyDv3kFqUiFeT4C3YjzaTLnaTJJuVhh",
  "key29": "JZQQNBexhpX9AVFhfdf1nxE8HHFo4SEq3pCrVpAjAQ1Ly7dDZxYryVffKEoiXWFXZZbzreDqTJdxKwdYuKqkeNY",
  "key30": "QpLyfQXKqsomVGy11AxaZy8YdVyPEUuQniRMQDcSDpK2PUzf7gfpEvzR4peaie6qKBTCA1uH1YupeyaAbPxE3A4",
  "key31": "3E22oJ8PrWTynS9J7RtuYVmsBfgmVf8kBXRW3knMi4Pb6i3E4W4Sej48tEt9263oDwPM9jqcqNScncQtsnrGZTUA",
  "key32": "24cV5v7VRmtZ6yiJmL7BRKQkXz2wSpu8tQLUHR4HMnPVB7n534mDbSVpDfxirPQmGzGtvNCEJPR324sDLsKcpvFr",
  "key33": "2YDmukg8YnTVs6r3G3QHSZ3uL3WbeKDFs6732fw6dTSkL91sDTF2wNxKKWnLpbHX4Xv4n5EPiRo6T1t5yrvkg66t",
  "key34": "QX7F1gLAa9zqFZFC2ogHYTF9CfiN1MRS2CNrYzEiXP3hGvUYyyTv3zFtV6SxVPNTZmBhgV6E3vYf1oiXbpB7t8T",
  "key35": "2iM1gdXSQVRDrPv8PBD9n5q7oEvJXgGLmGgnGHFfjgiEHuC8UhNzmgpdX53aUA8gRWovHY3vdAkv9T7ARz1he39u",
  "key36": "64H7yURbRiUuj5D4MHh9CY2bZZ5sUNmMcLkSwYqcnPMvzU4ZGnFTfjjfUcoS3Y3BihT1ET7e6ZkX4kWCzGGZ7vwW",
  "key37": "4ufAbFVoiaE98LGWZmHjAa3sjfkoDxrzLV4T14NehbDVZXEPZFNwxvDuczZCwddDeBLF1UYng4EMFQHswDtQWgAh",
  "key38": "QjxxBqYVKHw12dehF5kBPLF5bCXhBYEYhpMpSDRTNd3PS3NMdh6T48zmyqTTxshkzvNt18pW169jeMGYEcGZqZu",
  "key39": "2GrdKcX25DKXFSh3fyKyXfXTHKgwhk4YsGRKM3byno1Qk9KzZx7cK5H7eCiNuKz3JaTwpT7uAo6QBB8kc6gamdKw",
  "key40": "2KE5zY3Jsxk9imTjfzPZxmnEikgfXXZSob7Z7YwvAJh3tyPw4oidi9bXT1wHAQqvjRMjdPZCFeQMGCNbmHCHsVRR"
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

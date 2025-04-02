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
    "3QLeLCCu94eaM2r1M8vraWpwkDjDKdsQqamDiEc1qqnoc5vtUN4dPYBKFpMYwrVnLUFkaYAArcd38P74pZJbTybz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "12w57RFbVqvm12KUbb5PdP4zZQyi1NjiRC7uYy1a7v9i4bVNf3kmpqSkxJc1MyZwinVAgDeU5JppSMnKbt5Uj3d",
  "key1": "66BRVF8QrxkF53PQCjk2FfQCJfZY1NkiPqCfBwgTe1fXULBknGmH4kg9KzL13ADvs8os8xiexVU5gZA6LeCWibw5",
  "key2": "Mky6wL6tcYT4p2pyFqwrXxr1f82fRf4Kj6UbewW4D198TiSAUQ3QuWMYmvvDubvQwK8mkhgGUy5uVDQHS6J8EGm",
  "key3": "3xMD1RrN8svRY1BjdLSfoM8pPyCsYbaMRqstP5PoZfRbSTegHkF1Wk49ZSoxoy4rotiZeT4UkXzSrLUkLvMTeTMh",
  "key4": "46VUdYjWvRzRUAs9hDjZBogpbKV2dxUa8jh9azVQMjoFKXump6oBa21iZVcH5p4jz4CXkcKpzrRenycgroxBLUL4",
  "key5": "2nuJAtCuNCjf1JZaERDJAfbztqHkxXJ8VWNpkohre18brZTpBvMpUnGppNKJPqUxFMCecJ2fLh2M5FQiBZzLLRUn",
  "key6": "2JUPwzzKttZKmnMdW3tR3vQTszFWhsCR52d87dRXVBoDitgDdrUmM5hMUHwGrg3NaZBYe5ny8cLS9LqY3ShuRyVM",
  "key7": "p4wNRcmNHZtNsnRHv5p2FKLMZDVKe15durGMcxiob3JNA1JSsGFy6zUwMvzbX4rvM6YCAbCJHL56gdfWNA426Ce",
  "key8": "5QPpGM6JF8a1ggyRpBBai3odCXht6LCf5nfB6W5vNfPweSGRKBL1jghmBZ3gcVGfgmkyEnbEMAmVtmTeahnK5pue",
  "key9": "67Lr9jdbv8drZPELVo2gYpeqy89NNsAD1T9Fw5ejZWXsjn8Q7MqkncULKweDWgL6iK9H8BCqK9riEoRNHhL1F38V",
  "key10": "3Unm7aQukLLrF9v6PRNzjdmvkBBfCY2SPoAGrp5TiP9StcRUqiH1csWFQSJcnkDVuRPaACuVN4VFkrej3Ugh6xMr",
  "key11": "4JNh4N88yJDKcCRFYg9XwQ7FhZrqKXXDkvPYkuVeStECW7d54VdhEbxkP84fzKZiGC8F8LYy6HjzyJQGW27GrTa7",
  "key12": "2ehgzeEoVse7vNfwn4JqztHFPr6hEv2yzVShAudjFMFeLoiBRd7dSYthWXBXkGeux9tAJbyZ7N2BjyNsZPzL6uo9",
  "key13": "3Dh9fVfF314kW68oE5BuKztrDCBw38jWUsjEX6medAs9fzVfhTsZnuw85LvTdmHhAKbdu8kVVbKYRbLidttz9Hyn",
  "key14": "ectVEEMUDv3ifWoRw6uD1uLcEbqGYqDTSmm9QiVjFG13Aeu7oKzAm8fiKso5YtF7BRE4JyNzD3uTcsisNVTMmRq",
  "key15": "5mJtAW7adZTwK8PLkrSPzHvg7eusuJMs8gbbXTcgNKiF5cvyZTqXeGL63PKSvxmYrHynm9aCYWj2fHmephvn5aAw",
  "key16": "muahXTPzWb4MygNPmW3dg1CxMvaRTxJYhaqNxEhiUEuEwzRXi56ExvfYugCxbjGt6NPpfBh5Sfi9AeMsh18XETi",
  "key17": "21FnRRrthvcWbgJYwpiMx4V66ZJMBBiWAxxwZXtjCNHuvcp69AF7suSgm7P9fxThh26JNDm6ajX3Z5eG7sff9zY4",
  "key18": "4ePHAJQDVYHv83Up95ZWTYogzgouiCmUfpuud7GyqzMrzumUHqkphczJWNrUHmmDzcnDicAnpJenfoaAryvybk6E",
  "key19": "bKR4845JcnTMT5fCKUhrN8BY6oaDrKhfuN8DpVfS1ewQ5PjrPQqKneMX838y9zrgrtSXL7wMHKLj5T6tYvuht2Q",
  "key20": "rY1KriQwdbDHxJivBQzG81dsMxp2mP4QST9uT54DLisZEX9H94LmXAEj8fWtX4E8uC6EAQ9f3tuD57V5eyxzfZb",
  "key21": "2Dp13tk3WNZtc96JNawXvND6kJvuTkNBREZejp6taeeWWwff7UzCiKYAEug8jPZsTP3WxU5tBSaypqm7Lgpn8Y89",
  "key22": "46dmJKrjN3rYZ9YTksuej2so26dorhxKdEht1TMHGGWXRCfRT8AfYiA9XVz2fUGBjzF8LCBQkaBZtixxw2UNBzde",
  "key23": "2AydUjDPqsNqSWa3v1uxE1pXShew5moQRLb4UP87VnueFownDk8EaCZDofkWyCwDtXzTk4BmyXCNmviYKE5imNVe",
  "key24": "4kssBCAhdmte9bjMo1jNvpFoknDkFpcNdc1yWwBNjw3T5FWXYQPns1bfvN81J8o9bPnokrGcKpQauVRK6uVk7uK5",
  "key25": "44KTiuM4uBwsX8Xkrx5pbwMip2iXrkFwdQ9ZUKPg3PsRRvUZoAGRLQpbPvMBNsnJe7geMt4f7ixSwfamkQ7bTFpY",
  "key26": "3ZgkZcZ74A2ZUh6tNpBEyispzmoefRcGDDRyHwwTu3yad1AYYMWfjpbn1Huv75AzhFzs1VDsFyVyRCUGipue27Ze",
  "key27": "5VUsSf6oGHndZmwbBdLqZzbVDkDVaTLZeAafYstsyRpR7KfqtEV2HfBXbybViop7r5N8pmg51U8dPtzUv9DsNHnX",
  "key28": "5HsqBrAiPDH7rCwDijqQCtN8y3rSLucxZJFBo6Az39zwWKPJBuwTKCkd67wUfHmps1yaNyP9qEQ1Hxvf482p5wU5",
  "key29": "4Bfr713mB23JC19L7cZ6pZRP7B8SaxpB3LdEVPwp2BaJfYeeyLwUdvquVJZqGbSNSSPngehHCRo5C9mzmkwyAErj",
  "key30": "X4R38FGGeZH1zSHerfgxi5p5hnjMhRPFEvs99r4wwWDmgHkgeke5S2WFa9GebGSdK2WmdyFVKdt5BEmTvKQEusD",
  "key31": "3w34G7jXmM7BAfo47Nq66AP5DhiPxcmXVGZDGPMuSHzm1Cf6ex9pAZq22Hx46Jfrzwua72VgU9sVixghptCCwqwi",
  "key32": "4Lv71gv9DzCfLSBeHx921JRJsrtS75FNipwFpYA22cR7zxUvFcJSaixjWj5ASMmPRHnaPY3i8qbbdhFtbeTfa1Zc",
  "key33": "aUiHQ3n84TzpG62DMFMYJTWAende7hFJyn6ojEzsn2KRzoZiM7Gv3czrTBGzrQgU24RK8g35DGXZsvd9GfRXXnr",
  "key34": "2VgzrCxdqATnxn4sJdmWTnutRkw4VgTUXtbMnrSmqxWYv39WK98AX5QDneCnDthxYk1QodXFsueQqTyKJyU6n6bs",
  "key35": "3jmq5mFQT57bTVt8bvuoAUostts1sqAY11rxrUfck9zQetEijU4625Z1C9usfmfDcgNnY6E9uqGU5y2WboNraHPX",
  "key36": "w8ArMSbiLpi7W78zC7jwNttSZX3pBJM2nAh3F8cbZCPf2ACHw3mkgjSTZsoUK4XuvrBx3tApd4tEZKYaXLXYKBm",
  "key37": "2hRrvMbxLT8bcgVrYPWnR6XHMHNyR8bCQqHMB4sorVESfgzaXhNAJHSp5cc8JxcZmZq3ykuNcT6AkSMgwvD9J1GT",
  "key38": "439Pd863b3GUJTsWLLJZiaj5756Na7fDpSMJHTQ3ajYBfoya7z39rt9tfPPKTH9uy5DZhhhMML6r9EUZ5jVEZZFj",
  "key39": "2kjwGGPvc6KN4nXbGqHATHEBHxy98rkkpo3MiM3xDfo9shMvYzSAcsXcJFNwo9BdkYkwdZsYTkebq4ZwHSPaFRA1",
  "key40": "2gbqEGVPU2c2TFMP8xLJuBpnwSTCTuj3CGvrz175229VQdx4rLZogdfVkQG9xcDLiTWUst3kHyCmTrDVNbhaMUaM",
  "key41": "2yiojZwVtYyAEkNQbXNp3qUCXtnTfNSu3wr6iyVYTxLvQSektXjs8NgTKPi7Tjums18FCAdvZNHvsrajUjSBWfMX",
  "key42": "4P6KBVDJjs9CgreqGFEU2udefNDjJWfbe4CcY2SJFcqaXaqkziRFYXA4FCojm14yvAdieVsx3huUnYkhHqBYKtpV",
  "key43": "24ESnspV4nDfDUnEY7xGciTrbbmYvjTQs986EZS8RTDienJbFCC9DqraAfSf21QoMHkaghNEYtHHrdN8h9sxKP2P",
  "key44": "3QEgf8wr5fYZJj4uZSU3e6R6EvSaRtdMrXKxEH5t8DRR7jDF28rAyRAu16rxYk1ibc7o9jjAKRLBNoT1dGXPW76b",
  "key45": "33B9dyGfqfJ1pZsKJFriJPgLBoe54iYjF8ZQbuMoDyW82S2RZEuks4VQGaGWQKAtZJf1XSMeRFXcNXYdDXLMby3h",
  "key46": "3CCmWuzVvfz5hdt2X5jAERXN4sjPRTZRYa2GtvyHwYmB8MqRRDi3iyrEd8BmtLjLdu9H7oWDoEjZaxFz6txFCQZt"
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

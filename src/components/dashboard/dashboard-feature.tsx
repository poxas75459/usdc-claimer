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
    "4CWyXyGn5MCzA2p8MG3W4UmAWLZWyDfpWU6DGQ7okxzHPNRqJkar7P1G8FDGgv2tDitiDTcry4WgTi3gnJQSEAkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxAMkQPX2z2riPLwaTAaMDgPvfSY4kbxrRzwYk1A2y8UDU8WEDbigkmCVsK5LuFAzXD64CvtLabq769kZMvEA3T",
  "key1": "4BJ84ZXY1KbshR9V8g8s5Km41o1SHdDXrshyWRrMRLbwhiw9FiiPXzKZ9vJBkAZ8Bt53G7uo4o2HDEj5AbUBW1eV",
  "key2": "2K1DohpjnuTwavcBJyvEtBHNTrUc3jrsYvj7Xh4ySAhTTfNpVXtL3nRmpSxq6BGk6VfvVjGCxbhDah9Eazm1dHZK",
  "key3": "uZQYom3Z88Ah6tWJHucrVCqsPqs73nzWGeKHGevbvw3pJicLDo8YRvWPD8943Xs8LyD8P4cDSjv7uwu7RB79DZZ",
  "key4": "4sxPq3XbbAscPFCq6t9GZQ7WuSyoXV6BD9ZYFxrfvRZCNsjCLt5ipvBLHez989sZchgG9EuKHut95yVgioRa6dva",
  "key5": "5m4VZ2QH3TrFANrakwkmKdSuRL865WHhymFS68mVhEjEaUTGqptuT5eL8LyzDuZME1vbhUKDJJtWa21xmdLdYesr",
  "key6": "3La4dDUQTuLGfLoWuyDodPZfXUQQpTjG24XmHyMgsMZekE23fq2Qv3V9eiTATaBZHg8bJFhNNVkSzfPmr9oQoW17",
  "key7": "4CwqNAFAgvogtEeULSP8NqcS5HsDYDan9twHQ83KU9XR3RYNDFgmuHcPC6e7zfqiquPaD6ah1eBiy4Nccm4dVFtn",
  "key8": "53FfCgnwU9ecTtBdn1Tb7LjaydfooqZxs3F1uCiwkuMz1ENNBzSsPXTVTN3HjzgLS6oW5u2tHLMUVf4F1f5ndpXv",
  "key9": "3AHvZwTmEKuFsw5usSAuTdbbdTNYcUvroUNUihxJQGp7jigXrnDSG8sYwbp19cGheVTgZ469igJJ9KYDvDAPpzJg",
  "key10": "4N1NiyP8n9L7t7RZKVsy7io18Ps9ddFzN91YEoJPbohBthXURuf6VVSJ53TjqWUWFyjVvcsoonjZA2rEUwu3XY4a",
  "key11": "2znMRswpCM7C1xxwg3PRoCJah9QDu7kfdHmYPpRqF7dRcnAnYuHWAQBHraYox8QHRvPu4zzCShXaEtE4YhtPGThK",
  "key12": "iJfWmYmPKctnczKbDbroFG4HPtSgtehcgZZksdCtetsHiEhWT69EKsjQkt9qfsNiFtJ5pkqfPctUBk4apcxSNTm",
  "key13": "238PA8oQ3hQHAYCEeCVai8nujeM2fRDMvnheznQowDAVSv7bzhdTehd4WSz7RokXxRuKYp9HPPkjPqjbNZhtdQxu",
  "key14": "5FCU8EAzmGnDiwkNbpzFJDtXieeKzybDxAsHDJGFBugQv9upUnFxVu4E8yRhYn6rC1qjHFHxeTnjzYc8oFQsFCWQ",
  "key15": "4E814hdjzmGb6vpmqiEkr51THAQ4KoxLxYu2c8KcschR7TARXQw6d5YiZb7zWpmgsZU2hDcmVCMqhwSNvw81r473",
  "key16": "3Qy31jkjLvVKsRbPWdobLKx6WyFBgytkKcQaeuZg1JTbWdhnSRvBRKdk5rueDG2Q7p31fR1MZHupy74X67zop632",
  "key17": "2ioDQHPA2V3rJkKXAiQ6zU1EtYaACFBt5vDpxVzMv6n7xDEaQmxt3WCvH8KPyw3RAfTncZYvo85Wms3Ui7LSMGC9",
  "key18": "3W1aS6cVfzMx1FmZPjfNuQQ1ZrFZeA2Q4rs6NFjdmNw6sG848JsYRVL2bXy1hQsbgvL2degdDetJphQfaCP3nnXY",
  "key19": "AkS56Y5zrgQp5jv3ZLHyTYbwutth1MJtNjg3PvtntbZkUbqKRseLHvfZG25pcHDae97CkcvWZ97qNetdUWhxhZx",
  "key20": "DnVAtq4Bqd1JfL64LhPtK9hBbYjusZuXAGXsdFNP42zm3fuGaNGPGPeor1pGfktwsZkPeaJDfuiXJ3ssezFVGGQ",
  "key21": "Rg7c86GPgpwshyayTTqjWYdmsizrtpnzFbp6ozxYwW73uCFcA8e68Wz45N2d5WoRMqDt3jvVEsKrBLD3B1bUoeG",
  "key22": "w7FbobLHXPB9KXDCxJ4bNrMQxLMp6JRbP1YiXvbnJSULmbxibQ2Nh127ZGpGLeegbcYLasdgj7eVnXUZqNf4mQw",
  "key23": "54jGW2faQpu6BhwtNFZSABeYARUo3K3txG1VEkwPxGtUn5wGsDCCfyAJzHBzXihak3ABC4cVAN7zxaNqb7zZ5Ki6",
  "key24": "2xTVwWexP3enWXCBQAhiFVK4NNdM2NKNAUGEtvcv1BFUFE7LTHTJeZeJ2KnzGv7yhZ5DuMJx54u1GfaNAFHxNJPR",
  "key25": "roUkyZ9pYqs5vqCarywgg4rmc96PYkF9jBrxvJLX2gihNRNPFSuw1hEThBnbFP65Ufegaao1BnU8wm2Vchb23ZT",
  "key26": "1nZgi9Czh1a9yjo2Y5AMuJDafzFt6DxmZ3D6T95bDYc2rhxDx3Sg8Tr1QMnnJ7FzMq8my9EZFzFmYz4WPFjuiJe",
  "key27": "4sTPqrc7d3xQFGLTpZSdGuxoHzts2zAjwFAD4SDqJrSCDZnjzrMxu5KmzpFkGDP8M5U1ahS9spsGfWnRLjdEjcNr",
  "key28": "4CxEDKNHV1Lm9q4VYcgonEusCR6vkaXp89XDefJDJdyBK5qZHmrZuWnkCn4XiBt5DZ9ogYXTFWBkfygqaihMaiZi",
  "key29": "QsRmrX88bnDHwykZKfUGCKLwhkqwcLTydYyEXBJ2ockgb3JanbVrmybMPr4UrK4iYbJgXXxr4TkgrTxr2F8pH2L",
  "key30": "4kSQTwzhpVRHD5T4waN7HkMaumdwQQL96wU4BcsL2FYKkwNDwNRgrGyS11Q4UgeSCvh5xr8qXSE7LDjTKxYZVFLe",
  "key31": "3XoN4jGLKzu1fGG4F5aEm59R48FYzQ1TuziyVZsehhdBNTYPhAr3uEBJUeE3gC64oW9kT2yeNRQprg4UYiAhCdYZ",
  "key32": "36nVU5864KJj69JKAqT2UqXqX2ZaqF9Zz3G8tMpgYneUTxRPLfVwpb2EakwF65Cm7odTvmbLrV1FRr4C1krc3wz",
  "key33": "2yyK55P59a5UBAw9iR2d5SHS3QEHzoH1Bqsy1Mh2YYBEUoecTbsNeEYZj67v5vGEtoJ1H5sxg8yLDf59jkU8sEV5",
  "key34": "3Rv5EBdVmwT6BXThkEAWFPzVrPghm1SM9ozb3J2PD25YFnDd1kKxG1umupa17acEC6yZKW5MYdJEGs16DBLeiwmm",
  "key35": "5PhgQQnKoT4sehHYNRxHvA1ns5x43wUsiJ9ZPezdr5zAsVgpS1pxc57WfgtD4xorVdziZS4kiZ6r18P96hkN4z6a",
  "key36": "Hrw54Qsb6wuMJZH7i2V2is1ZcqowfrzNkqvFHY7odJRujUECtwy1fcxnXFqhcSt9XbrVTq7D2g8v6WnrbSfpyP9",
  "key37": "5HZtaoETNXv9rem4BGqNEjiQ6p2pP5LSkgG4nrDU8nEKqj55oSUSCm174xJmAzEicPNUcBJnFHf2VcEzdt2jYygu",
  "key38": "kwALVbubb4M9vPSVSNBYPjXcMW29j7bSXZp7Q9frHyB9yKkEPopnCQ5hG3NJvApYdHdHgAA4EMWrRGNQF3iow4h",
  "key39": "3LRtd2ExwxdVXoyQfgqj1h1d7vZGhLvvFdHZAyyd1sf9jGQetHeCNKkBTmRtB62XSopCUSt6xTMBJuxvcLcoKbNE",
  "key40": "4zBXF6fJJWVtwnhKnWjwibTTMr5Lg75NduassfN3xyKYJG4CQPd1pZ1gEbZQa2Lwpxz2PzWvKdMRbm8hHTcJAonk",
  "key41": "b43g2uJXV4SgrRV715hHCJoUvLvQvEgtiTQuXkspJbRcneiq2bWdwH2nu9XmfkPLHqyRgvP87jp4YbrvcLybEaG",
  "key42": "2gSFrXdTfX7rtVNxnbjq99L2C4QCxB3YQgtCC2ug8PWcTu3ycnhxuM7h19P32Ed4t6CuFjh7qeXwg53WHjkzsUaS",
  "key43": "3aHwHRQQMemy8cromTQdpNyNAQiw1yjKRRJjMg1C2xtZ66Az9iLs8YvMVmKMou2KMJ37ycAEPpQfVQ3sK8opPpWe",
  "key44": "5dUhGZ8qsVBsXbmCjhVsxWYFshhRXSDv1qN6QyHwfLU5Jh57aTJNYjQJTBaUCVd55mNZ9hR4GftRhcKvJkRWj7nL",
  "key45": "fWRZ4QR5fRynrnKEVdmz9oZh7jPVHBjktVSiuB9uAWpcAJa2KhriNjoiWt9iiTP3eytuboXtcF2mS2MhwJBBqoH",
  "key46": "xwyqdswyj97hovjJ8u6bvYxNaCMmp9PoFwQymwBf5Vkg9YZgU51QiyhqVCU7nL37BQV3nTehUv1rQi4nm9hdQo9",
  "key47": "p5aHRUQQJERo5QjgX5CjDXnszR1yGapNFKuRYsLmce2cPkcBR2YNzA3eERKH2iXDcyt4SGRE2U3DQw9rR8zUH8G",
  "key48": "49xz5VbqXWv5vErxSPiYxbPwgJViPbPkvtSZkZuUc2NG3WKPkKY3HbyAdtg37kEWuvvBCPKvgcdzWK257XTvU5aJ"
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

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
    "5Avem8L53YNyp46EhkibvtK4mUaaFPuXYhYBiBK7BC8GyEQ1w6BWNGrwx2jtnbGH3D1EfJEecnhEco6jetQVwfxw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BQfRtZXjigAtUUNs26mw1j7GqjafKzqUcSAU2rrpguH9CYokfdHdLuHfPFngu54wojkGdFC9fietHvJpWBVDpU5",
  "key1": "2E59AqkrK35uih6vnz6N9n4ZinzLBCJRESrsBnoRvH6186re4JDCULSjvYYXgDTrJj21tGdU1rd4FF7s9iDL9LZy",
  "key2": "3nanHJ6V2KfTVtnTnat8chxVyckE1zsShHcn6Gf5SyvnQQDSJBaMMFs7qKjm3usZ6gfxGhrVbJXCSchYVxtjFhnv",
  "key3": "34tviUedQyFqjnEUCmffUpnpzBLAJb5uhBfLJsuC8r7qaP6h4om5qLnqUsnPwxQGrQAYL7kTth1g9ME1an8ePTLj",
  "key4": "yYaMHqPHtwkJvmbWY2FQR4QMwvPfudK8GoCyRJBFDBTYg65Cc5ejVkQcpwqctSRoUhPbrKL4nmvffLxDEAuDepN",
  "key5": "2JZdQuqrZGzCdN5r86Ty2VUCRQcLhLApgH5rYJmNmx6V8XbF2vXT5MsUQqKUGA1sStNVD3ibYZEwGrzCqj9BVUNS",
  "key6": "2CxTxBGu8RggzQqRUtt1Tvxt7S1BcAxc5yij53TYPiYQTGj6WMqsnbKrh2GC2vbit7Njj9tYdWQNXCaR4qozsvha",
  "key7": "3v9S6UsJ99FWr43s3eZwYJdPN9o32KLGWT2tHxVnTNh6GF5YQHAjN9VPvjb11G8eZicQ4xXvM2U1ZNTzYYLvmaXQ",
  "key8": "mMPU9eiSXp74141gGhzBsKGyNg9Qivz6dws57X1hs7RrW7MYf82sgqZJr79swmptBf8BDToBPVC88jVyvv4PLJu",
  "key9": "4X3SsUrxZHdi8xnW5sPpErezkRYoJhUbjxM4azpP1fHmyWUiWY2csjCWLpwBbg8KXpqvcgqQjyn6jnWQNt5fPS3E",
  "key10": "5LL95afnHpBAChPYeaJTHk8DjnCksVXtbHEp8f2ikqUBajqiSmfqmtSkfq4henXDdavFauEy7mWTKrueRJzgKmGF",
  "key11": "5qtKV2bLSPR2ucs9RYxcKWR3LsY5pbTJXcrPrb4VsTErU9x7BUGEgrMJ6FsQeiXfp1ELN1cFP53seNwvfCdshkWQ",
  "key12": "ZfeRt4aDxwv1kUGMada9UwrNYKE29TH67tmVCC9N3uMpQAgMV1AiKU1GqNnjoj9UH1LGqVcdVJvjgLabZGLQnZf",
  "key13": "3W1my9G5YjPcwgh1Ew5D9E5EiAjQQ8VUzQGq27HXNJta5EDQtygeqd2Z5mtKbR4fC5g5xKbQGcRqDJZ1qF91x1np",
  "key14": "2TKD1CeyA7EqLN1K5V4nS9SSDNcWuj7VhjZ1pzNpxLaudbWfYdDj3iGUCYYST1Baxf6XN9GMhtgtQXmv2LGu4dHd",
  "key15": "5VF57Eq6HaFQPBXJTbRFG3pFm98bnJaDJjV5DoV2Q4g2Yqbi4TqFS82U221TRMmthqkQjJ2PoRufRhu1U4YWmuas",
  "key16": "38sQsHFxRLzfYdeachj4i2iUnGzUQCWzhsD6VNkJ7769tSLZ2MN226pmpVRX4FaDX57E86XeLM81uTz9z4Mvfzxh",
  "key17": "4qpGCpRYkkRHQmUZB3U4BhLqJNMPWizkxR4A2MFGMrT1tgPUHFFV6fzy4mpteKUJRhtz9LEzNDUqbfuAhHksrAwR",
  "key18": "3vbuRp8AHBW8tUFhUs1CHi2WXo89k4qo3JjUf1XHYF79d49JwsoMTJehixt2Dvoa7BvE71ax5CCs8MfoAQeWUhgS",
  "key19": "39r5tNcEDMwWsWWwadsNecCG4ZL2VuTjQ3AceGTyWBjsVfdWqdypnkoFQEtcNM5CCBHx4jJNAhnCXdzMK5iYR1ps",
  "key20": "33VGghHQSNtsmY8P7KAGjUy5JKYrDhe9F6GGubyiUn1VWoE2oejLzsKmtiP23zVXL8WFRRUkzdmiLf5zRoaiTEUz",
  "key21": "3rFG2LW6z3dQBFWFo8sMJCsNZyqMLEQuUKtrCevpEkaFQRiYFfkfVSau5etUTeLpgKnigD3K4zJ4C5Cuqvs3Qc7A",
  "key22": "4mYfNU4nzLBdXktAnXHJihRmwjkAAyE1e8S5kX9pi4hziWYXhgpzR66ZxGYvfNKhE1DFniHJDhbTWuSGt3khNyzF",
  "key23": "3CSg8Pss9QMr9ZJJoQL3hvd2u8srpKEupF2KPntUqDcZ3Sd4cMD581PyDJRBPUynxpMpghNCKu574ykMRtWH1dU7",
  "key24": "76vo8PWiwVVrj7wb52JsKzmEEFZSp6E85FNYefEAZnn1FfixT943afVXK7gdKQGfXNzWh8QP65PyHPmbrMj7cJe",
  "key25": "3Ds4Rk5ffVhYCY7vmuzGwy99RvBwyDovktRTfbC6mC5kwHmaTHPNnkanGWuzJ3DDaGGd3ajJTVsdnV2kXrJW9833",
  "key26": "4ypU6HWVrnmmdgprDUx6d9fAjhYTi7tGtH4E3iF7vf2CkNrRLoBKLskBn5wWbpVCaSqNWnfaFrjMyp3CNfxiTZHe",
  "key27": "4DdjR9JFGLuTrsZz1w532nY1fwxoBWQYBU6F6pSzmtpzhFt9d8ZG342m69BhjQNvPcCmbsDZxSDFBh1HPSq7ttYi",
  "key28": "3a333kZeBJQeqrRz3mdCKBcKZXQThR3G3PCp7pieWcp5ywigMkqeGFjz6VWBkScBAbcmDUaR5k7sShfRkt3qUJ7Q",
  "key29": "539i5mUvkeZ5mAfixLtSLHtEHWVL1jkqUDTJfoakPeFQfCzPvXyWpdUUyk5tEpzgLntQeBkFH5n7J9U93gtLGGW7",
  "key30": "2Sdci1YXf9iMFvAuA7AuaZrMoEFUqy79mRbvURvrj42n8vtXtnKGMnVc2vXBxxWBSX1cU3jRYE4Q44VXfYwBRw9W",
  "key31": "5VLqFkJW5KhtkXMBQ6S4QaRjP7FjaDLaBohGavXy7Wk94jmw5atMiLhr2Lg5rddA2WfscjNkGYJm5JHn8mFxN7C3",
  "key32": "55iH8yoaB3SKUp15bUyHvdmQ7pvGd8sC25SfvV7pKjaRXy39rnuxSFVVLT9ZzPZVGpcMxK6tCANLEqhpsGPn9GsL",
  "key33": "3pef4ivMX66H3TaB4syL34Znoe74Yjdk2eswM9Vh1ZtsZZDMoqw34MrPp9hrsq7kLmo5McKc2QZkwHczsh43P8vH",
  "key34": "4nyjg7KGw9MzabRkiRhzrPGGfJRSQY4vYiKdxQtWYD1RLutkE4iRCSR8vmynVUGWAXxoyShsU6mHTwxyKj4nFifW",
  "key35": "3F5kbfRgGs2YdeQXoKqZ9Psf1DWuD55N7CNp66H35s5UyYccA5pBVRnLLphR5xDCvxUrjET4u7emEDNMdtiFz3JV",
  "key36": "31WKznF6hRvVJJpSUM1gQ7aSJoP7be2WWzGUXyH6pAECYpzvNrFx3U8fMK6b8L18aKLohTiiTWt5ixGtCsdZc7BG",
  "key37": "48PWKhsLqCcuh9pHx1eKi88sZbM3mza1XKseJp3uETuvDfiEHYpP6fogas7jkQSmfcJhDhGh3U4mfMPMioLWA8Eu"
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

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
    "BRFBRHrjbP7JLHkSWj49dqPa3izH3RVRYvujhjQM6CKoSKGyvUWitNNW6EmHqVxhHtE8fJNexyNS4TX1L4uM1jE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hjJbUvBzGTHGj1LeqebZripPXjzExof9DFHVMRCE4JrrtvVnqZKayvYBB68jxftJPGnxvZEYCNm8UYFqLTaLCQ1",
  "key1": "5JUKg1Y4aFebkinjf7L4paW2ACaGVg6QzvW39D3NiVYd3xBGg3mLiPFViUJyLLSN81oAqyNwiMY339vV6cchTu92",
  "key2": "3MLAzUbxk9QUCeoa3sSKM4NPwtVsc1VZJQG7r8wth3rTK2NgE98nKTWAgn92VobNc9UUFtxcFP1CpfJTnXB7vb4p",
  "key3": "5Ntq4ueXeFCqUtzuicb7rq1f2GpXAgDXLfKa3YtxxWNuULwe6GfQ6P8GsmRRZW1B6pkkUdAM48qcrfhW6hnkDr8B",
  "key4": "4wMsnShEKkYGHrAeGiC67oxSXJBzvnsF9xgEf45cHoGRcMrhbwT4i41CRRNUg6y9yEyZFbJF6G5TtsCLuGETRw7h",
  "key5": "p3vzwTEheEiZpCTRNgcRAZdtV9WgRRzZ42JXtRDuDNH9kKQChKwjvi5CbQvMKnQv5Q4FywAXtLLuVMGBCudCS9j",
  "key6": "2DZXkZL92cSqsM7Pg9JaVB4acVZ2L4wDZu6LQSyKUn9UPsKoSREfycLCN24V9TKb9BW4FP8KX9jQ7nykUQpWJRVm",
  "key7": "sujHhvZcCqyEgX3rv4mtBRfotJ443Ync8vi2J89n8ZFaUYbax6BZ3Ncy7fnxa75mHYWqp2n4PVXvseap6tPfmAR",
  "key8": "osbYFYZLg8RubHSSyGj4uky557Pe1vCvCXv6ZTdF8SLcxeki9RLroGAof1sJvFLcY2YwGwphxJg7g2bh351sDKh",
  "key9": "3NxamSM3N8Bs9gTAVEoQ3Zim8QZiJMSzu5gVbiNc5CATC8Rqsv9m4BG4Jf2Mer6tYCqynzGkcKKufsRkwx7T8XHP",
  "key10": "3u1hytsQTkLR5v8ucmmrABgKR4Hh5aMH9XBCTUzvcwNiDgSb2htC1yw45yNuLi8zGeNk76eBNTRGRNB3DWdqYfxn",
  "key11": "eRuSV6yPmpjFsrCv1SNQ65iGLNXfrQNeQonVHz6DfpYBDsRszdhax5ZMTSMf9LBCiDZtN2Pbt666TyKEWa3cN47",
  "key12": "yaGw14uZMCcGjNKBWVtVc3pEWbJyqrNHfXNwwrVM41DNrPRMnsm4gqD489A6gECkpsFrLKjrUzrJJFR86LWD7tQ",
  "key13": "5JZnKUWFArNrZnufRXygKdKNKbH39nK4BE42duKibkXXQUU1cUzj2S1GhvH6pAVrKgMNKxRw2LDYS9nhBoWgf3zx",
  "key14": "4UDJ5gux6WPtimgwNCjPVwtFmepnuZYyApevGox62vkdq4qmVTiP7s5VT3NFQVfGoavj5odVZVPhJTzkTofaySk1",
  "key15": "2rceZTchU4bYHw5zUCvVSXAHJ3uFGLmTkTzH77a41xVUfA5XUdU79FGMarMeeLXsmVtvHKRmm5ZF1onADFe9637i",
  "key16": "5fATtqvwFMjT9eNTyFrU3NdAzAgpkS417EZVgbth6hTsXSNxRSD9menF28mqP28PwD9RD5GJPVRAC53Cjmxeqa2A",
  "key17": "2Vx994mpMCfiE9u5HqxnmECgQGKjWEorVxnmyit4Nkvhrmj7RFb2KjnA21a1HJRYyZTdGqfobnqzKXBJLMdb7kgG",
  "key18": "46yfnJYBLu99reiG7GqRjrurTZqyhDS7vKJfTfbRPepckdp55TSdtAT6mQZP4EaYpd7wZS4Nm33NTh59GnBYQGv5",
  "key19": "eGrzjVxCUKKNU4WEhXBZEcHjrVA9aMKRCMXc2uKxrmsunDZUB26jxzbC1bqEBn6695616PdSJkx3N9VUmYWijsB",
  "key20": "4A168PBoiCMgjmqmyzm3EQTbfc9VH6wcZytJoEh7URKf6GawqgupnqnEVqPBKSbyvzYqUEMq1DfJRVKi6DMAfkoB",
  "key21": "4cBHj1MaQBv69bFPESvLSSVUa9z3Gjj1AfsfbPG3t8qoReLKd499ifNL82D67EiENNuSDVckjwBDQDpRhJQUvTWu",
  "key22": "5tmvuP9EHTw79NqWcxYH8zSLRCR4P7tNrLDY3eD8Y2YXL2hdNE8iMYHmxJJCQwkBsdk4BH8XZ5W7m4aUgDC3yefw",
  "key23": "2ukyiuP2uwZzxVhrePQ3aJ86Q4xu4xjRCvRb4LtKR8e8ciX4J4ybrGovYnknMArK8Z1fBRpdmkYxnYwK7diHcBKQ",
  "key24": "53i8uJJJ8DALMzdzKT7VLqTa1ojz2TJo3euYLRkzqUdBrurreCQBGNJb28UrJqfHvKjkkvRBs9YCKCtmc4MUZ1xd",
  "key25": "2UGU3z19Lc47VRbdECrELw55Be9JjXZVLMbX9ShnekVG3NsrrZH3jJMG36oM1JXSqnH3QYGsgaQkzPxyQ5VgwNHh",
  "key26": "yuVsG8dojP77gXW4WjvXtXB71w44YDHeApZcamtyFGwkR3cieG54CU1M2YYbf4gnyQJeEJWVmzNPkq5XJBkyUAD",
  "key27": "2mMu89SsWtiySRgj6GzTLw6ZNEr59mR5x3YDJuLuByajSbLFLT2PDFsUND49pQcMADFwL3CG7fkZTVjVA6jz1Crc",
  "key28": "4Wfm9i3JHmJPqAS6VuYoK9C3PwpM48UgP4RxWV5DMjBy3DcMsKvokiFXUXWJjZBAhoS3gh5RAUtYvgWFAextdZLJ",
  "key29": "39eGD91Bjmo7GMVMdS3r59Ux4dABjVXxDEWJFkzB3L8wfSDjxN9nZwouD5EWs7zYLxU9MCChdQwYCGXpimacKAQT",
  "key30": "4BvpVdRDbAAQqGWBvnkbbJefvsuZ8oQFpoZjGTjiHmAk6DdeoBPJQWTVN5LxDJ7S3X1SkEaVR4gq1ckzFzD1e28V",
  "key31": "5sMcwJUBhbQD2NKbqeBA48YsbypdnuADrnxBv8MVUrzQFu1haC14D3XuxNRykErs488ajYNpMjLJjSHTMwgFtBXC",
  "key32": "3LGjKt6L2Rs6oZJmgrR1y19JfbYHs7suMZC4g89zmMUJjEb3egkRoByq6Zmye4W7eEjHYzNrGRqKrCkpqBwvD28g",
  "key33": "4UJAdkFAj5BPwoUmfsgi2h1twmAint5TbWZuHeE9oBkoNeqhDqZVftxfNAoi8YxBmFo8d6SgwE6sshciS63yCWDS",
  "key34": "2a8o2taRxZ7VBciqjrhPkko9bY2xtShihTvsDR1RoqpFeZj9gZSfxtCemdA11dpucGHAqWbERHyaWgLTGxAoN7cB",
  "key35": "E4YJEB3pRa7oUcjGVNZcwNaasUqdjWYMQy2viRsqmdirGW58kHUfxYApdojN2ShzEn8ogj4oqkxos2LG29ERB9Q",
  "key36": "5qT9b2gyuYfiM1W9pEQQNW8imfjSMCftTMmtzC6JfMQz5PHWgLbsCTijbRfrfX2xfUXYR8rwNhek2S7duq6DNQ5h",
  "key37": "2ued94imuRv1wvAWQqQFUdYEjFois33kKecVfAPzR4FtJ5CrrxFzw1SYx4nS7KTs7RgHoV3x7yj7mviuKVPjqY17",
  "key38": "39phjpdGWEqtetCztmqmftqJb7LoBGfc9w2PbM5PPMo7c5gKHVW9cqUqBX8wt5oKJ41J7s96UNRCvB5ZpR1kpU88",
  "key39": "4SRCUV5h4TVbtKBoeJsWxNnk5beZFpzsse1496pMy5Gi6QdcAGKr1FXazcGnh7x3KEF9EawhcGKkXzs4tLZ6zGxg",
  "key40": "5XMaauAD1MLrqxy1Kya2xTncSNpgin6BT2ThJYirKiYg21QuRhPqxG4TJEhsYtFDPSM9swWDz2ZXqStAaiqp8RvQ",
  "key41": "61rCWfwUGBW41GXLafXWhhUj8JdtVaCQ6ZwYQ51usJSfCwbCwk4ZJU5iQFkFR6eA6VBRJnLXnG67yC34v5i89bTK",
  "key42": "2h3pjGoTFzfF2RMsautEYgMgcjatjvmJG95xSCcQ7FDmRQADm33bMDPwahzApvdTr49q89qj2C4bLpfrkSG5ETV7",
  "key43": "5qj38s9qD1ZgwgGbKC7fZnNBCkqu6K9ja6CJiMfTKnYMLxiPuSieuU9h92vonqtGUyifskiBLwW1iyfxkMvviESx",
  "key44": "3hUbQoEd5c1KRTKgSN8UNc3ea8xQeezDebidBUY9w8YxL3fDFhqUkKoNLNfCzYvmw5D3PLsxy5jx2CXSF2ULN5TU",
  "key45": "5U3yBLZr3zC6Vadq7rakyiCxBG7ankSg87NSFDE6J3BSFun6sX7wzDiGxcBbQ2AggXpCosmvcVhZ783u2KmnbSin"
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

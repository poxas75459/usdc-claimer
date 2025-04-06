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
    "5i1ViL1VvzUnXqc9uLKFtCfMxsGWA5Y7t6spVxkKbFKxyCzfn1mY9e3HQDYsN5viTU1pkzkVFjNLNcg8VD9d3KTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "trcqDhDUD8f6nszSXnpeT9F8HpCexs9MGErvTC2QJFySdqD8RQ5MiQVfBvgHKu57Lf1AXXrAUz58Nam3rm9a4uk",
  "key1": "Bt1SrUPvjEGsqJMBBC7JYM6kyXqWxP34XoEesDVDBx3PqLMskvZJw81mod6MtTKVDdfk1bBGqgJVEkU17ENKDk8",
  "key2": "zwLLz87oKDgpUEUZkbd1aYvTZHkQPKfcSYJiKgQExinAJwAhoFiTwSbbyzUwGC3Q6HHkGE6dYWVCrEzy9eumN4z",
  "key3": "aPGbKy5XA9XCFeAFNTkDubkCpa3jUSwPwDGh6mx1B94J53NTHeWZNWHPn8ijp5guWjmwT7LbYRsJBhC52YHMgBK",
  "key4": "5ahrpqdewfsor8DkUuHRvANevBjAgSFCkqgGVjHERucriFncKaHgpWzwpqyjzmYgc6cYR6EyGGpZFp86oXgbepzv",
  "key5": "8xQfpzDWY7rZ1PpGUAhF8KzTqdEujrxBshhN868pViSEg5y7r3P29eQB9K15A3999SRCtAbsoejiyojKFwidAqV",
  "key6": "2CWeMg1axrLm2UAn8tFaG4zghiGqDQHnYUwC91C9v81tNKLGar2y7hCEmwNcPPcSp6n9vUAXnDWSUZx9a76UAJc6",
  "key7": "2VpaMYv7UPKfgmQFSJ6HNtkDFmFMsTtaY4TsihC224g2tAAoDora7x1w2KofNK2wj3nFnwoqSvjwJHNzjKDVt6or",
  "key8": "4h4ifDzPtiLCTzR97wo3N1Nw6cyH7921VtGbNgpucP8Nd8wpDxvAQLer5wge5Adto7xBh8bB6SUNkAC8CzXWDYZz",
  "key9": "3RUSmgA89FxYhG1BhZqZf6mfkLauYLfzoaoZ87J3o5EtyjD1v9xcJMAM8BpZj5xjPuVdfpmZtvQWxVg5FDZYehQm",
  "key10": "3ancjpaAXay8fYTydn3NB8KZM3bFEDm6mpRaKwCVf7G1ph44yw8jqi8RbzLtpNjgLPPK6DcyXtyvZT7uZq5kcADq",
  "key11": "4Un9DFKhckR3KSG6YDZZsSmiFUmqpJ62zsriz2vjxRMts8KRnqcd1eHLQaHppwrM845XbiNaYWH1Ld7uyFs9fPaP",
  "key12": "4YyCwYTie8g13PAP7YCczUiue9ZQeWtn6XtoeVzxMzhVX1BKNLyRXpozu9vAkSUHHomXsv3nonZx5ZVJmqkEyCvm",
  "key13": "d2cPnjkW7qCeQRdVWnmr3FD5CYpujtG1Q6PUNSmWY41DnoxYvosVuHQNG8rF3Qi7na9XqvPLBiQ98hXHKsXrbuc",
  "key14": "5K4VT1WoYzSTj3XcQz4qHuoCoqobPr51jxmGmTAbKgSQbdW6Q6FvQ91KwY88ainJoJdWo4Z8CVrHRJv4MTohLv8H",
  "key15": "4YnXafNHyZ2DZLxN3xPN373VsWxLTp4SkmMw3yWZq8D3oZT7k4nCjj7xiXU5zv8zvoUBvX3YEf8UZxa3xUAhTqn",
  "key16": "2g9CifjUy3QvfDMXStjzMP19gmJXJKj9Z3pDxNVSmgkstATy8kFTEmYZvdVQ1z7sFqCgd8pynRDZuV1GDD4v61Pr",
  "key17": "4kYoah8RQJ2nJXiVMq8Mnm1nj4jFEfgzvUujW7YjrSR5wo4wTjiciz6gG4maUKftg1oj7WDf6YCSAStom4pXREP3",
  "key18": "pU9Z1vNP1cydEKRNU6KRSJuFhgzL1pVcajWkYSGuacwfAQdHyhYsWKRf3mdSmsUH5rdZuQX33S7VwGToomHWsaj",
  "key19": "5AQeGyjQLeHDzaKFutTfF5BrDMLirqFz16JAFJYFtTx2Unu1RDocPC6K5g8AGiBxTV26npTpiXX44zNHmqHqRPs7",
  "key20": "2VErrZ2HTQp3pGsrHGU2QEm8TixhZs3PACmN9u3AMVLfeeAWJBLshgYD9tpzctF1EyBgLXhrhncaSXnR1CMyD66S",
  "key21": "61aK5A96ERYCHUzUpobhJPd8TnEkd66by6FddxkN4fd4WKVozCPnaQorzBHdnZA4uABTcStxmVGgQziXGeQdJPJg",
  "key22": "3FH69kq2jrkLs8fDmdELKD7oZUzuitZe9i2ktiS9sqCm1ED6dFkTUR1ibHqZMsknANym8bh5hxKPn9XEPKgr86Pe",
  "key23": "45YNo8RPg8uCuWPwvrY9TPzBzyovthGopvRVomBjWy2SaQfPw5zVRoTALkktNsy698S3bnU8r3UfreQsbh34kpu6",
  "key24": "3ax1ctmDKLAiaVJ4Axz4vFtwjEc5fYkVEzKs5DL1B1XmzmRJE7jkt5XKdnrXS2CHKC3E9V13jUZzsanHVV1xnywc",
  "key25": "4Sv5uKBRizHteDrWF8Ro2mqEC8F6JBUMxQAhe1LNGPKKmDDD7iDVVzDqtj7xsc4ibuavcKe9dV2P9K8sAGtHYLWb",
  "key26": "7SNKjVVwEyhxFMVjEDhgPEuJH9M8vcoz8Qc9jLLG8VXGanWenxjWcTivrAsTdSUfMhZfBeEuRPSxWoWzCkfzWPV",
  "key27": "3iwypcN73Apr3HZwPVc1jxh6YHskM9HJF9TPUgQa4zmpjZgVXAbSuuR42CXL3GNFwSdvmzmB5q5QJFnbHyrTDge1",
  "key28": "FxDG5vULi89Aidcyf9hVMfVXDoBZjQHVxHQWTTpc9fju538HHUgYwJUyb3Nt8gyTGiF6W8w7hfN74SGuCR7WEDg",
  "key29": "41cymRqLbM8dGjKUoSwUjBEuyoCrS6NYy9Y4r3cwq64wvj7nYd4RmMmFTWuSvT6FkgB3mK625eBV7FHfp2Zaef8C",
  "key30": "2sm5QVceWVMJzyra6biCgveZGHP7uWB4drPNkWQ2N54Z86Y3RRwtgrXtF1iNTBgkgGbNuXhQKQ1GZfyo9vNsh4RV",
  "key31": "4zNnXUaPNJsSb5f2BsCpmv8qUoUMj8SNKZuMaSaoicUPmYBM9azGks7Dwq24bFeTDTJaGZ1sqUhFZ9Jqke6YAHvv",
  "key32": "5YeWKCXDZoFhzupwTAVfeEx4WzYnMVjBBNWwm6Qp1NDCJ1LxLw66fLp3Wahoku9X3SRFs2QZbhBV3fyx44eKWZFs",
  "key33": "2NkZVMc6HD93vBR2WsaHzytGLjSbkxjEMaHFsc1sRUZwYKEzDfdVGNNVdXnngA1xgR6LYF7wr5JKXzFxr56Sbfmc",
  "key34": "4A5MUgQRKMiLBNaVRcqdGzJU8WAYmJ6bL6Z1yPamVJNxKfL1AfkM5tcR14x544qVJAeQjNU4L7B5Nn5n4bh48dME",
  "key35": "43ULBc2SvKKzBLvd2stsgfhwuinhF97KQnwkcogqDN6yBE3p4ZMaxNiofBxVBdzQvD59T92XULfTNBifbJsfHEeV",
  "key36": "3xvMsQ76xDoW5TQ6WTAMk8oHmxBBSFbXD39NkQU1kGghdD6wsuGgXWDHitudsKGLSqWx8dsMeb4frURkXxfr6NRq",
  "key37": "588Ep1vzLr7HUvozwRaykj7RsQTXf24AvUriSiyirHRJMEdiu9p2xu5bCpQ2VQA8hPiARksqANV5wxadDmjsEzhF"
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

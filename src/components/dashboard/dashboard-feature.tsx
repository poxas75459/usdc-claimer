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
    "ZBDH8WMDbmbNXYi3qwsGyuqwKExLwGLYm8YhV9TTuB72skFahyTx78BUPUzkc4nVSMYvy6GAtB5sjjwCPkxRih7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zBiE3LW3acFjTtoPzijJLoJUaQgnN2Bge6aFHnxtGgGW9NyqfnpVxZGbUoyYr3iKvh9U51Um5Pt9YEJN6JD2P6b",
  "key1": "5iBGdWCXNwL15uow8DK2H8njkuwytVX7A3Dv7fY9j269SaPEZorGGTVhj5ZzpYjGw8FD2MgmkwxUigvbEQV6NwnE",
  "key2": "NrQDmWfcruAjL1BJ8AtAghBReqsN5TB7gQcFgJyvUrZp3abcQ5Kx2NBvzCcFKCnaeAYir4wupfserzcmxJoMeJ8",
  "key3": "5Y9Vwf4NE6w7297uAvzEpeVzcBCkDZXMuT8VeV2imVDZzyS5oRweSyufTkxZZRsYs5RHy99Gyyxd3QYb1SDVWebC",
  "key4": "5xBYQ4DQvmunmeXCUCbsjqZctrDJxJujX4J4WnEMjMB4JYx6V69WVfHhauhvTUQRW5naLaDdYiKnWp3UWbJWfRcd",
  "key5": "34WdJSfd7p2i1TpzyZz9jwQdGZt7uSobjfLBNHj1PwnstcjCgEGNY3HCuLBaVEyHJvF1rHKZ4EkYqf5fjxBfoqck",
  "key6": "5x8e1s3jmLJvhdSynVCx5j3Mk57gASQecQ8QeUUGooMYP1AiyyDTLiqShB6MEEXaknv3vDNfD1hR3aSw27z5wrmo",
  "key7": "2yA41B8HWyhUCa282xXJMMiHoonEY7bmntxzFuxn5YJtUGE16afVgCWKFFgsS7HE66Ug4tUGHGrNyPXgrAP2Xw6f",
  "key8": "5WZnFTF8EQ5UFoYSwq9JpoazQ9BFH2boBSCVYjBciB7XA2v4vt35DipEnPNmNEpvYgDHqRBQMbVY2MhpG5EesSbN",
  "key9": "4LrJ7XMvHHb2rVzDmvLeaaTx4CEiZWfxaWMPStWTK33J7cATa1kjTafBbXy8KXASKsQEsCThUWm38gDHKZmvGtZy",
  "key10": "5kyMPTFHazDHxL1H3P5YisCVSjrsB4YHiDgE7JLBN2ut7Sg8VghYj6wZqigYRb7KyqCjZrbVcZTrTCGNqQ2dM73A",
  "key11": "2bK4W9kpTVw4YHdPDwTH45AvAWR3iwNFFHmdV1ZLsn1QPCmZLTuCjGAetp5axWBK8DdbBzJFMchc6PZ9bAjRU78R",
  "key12": "2115S4zvovYYGJ56FrD92Kn5iLUdZqMMcjAcQsTBH55nFFAsCczJUTADt1iVy7SGdRqXANNuxEDnHcMMmFTPvy1v",
  "key13": "5FvdpV36aefRUjuGiPMJSfgEpYC1JUZbVmcpnQ4tA1MhboFmyHf6gnM1VsZzkrK2vjJoRoT7XGuuSap49yjydcQ4",
  "key14": "2Z7bUnNnkj7EC7aUFBQGVvEVr7tL1211Ks8KECqtAcrj9kvJn92mKUemJosBVbEWxSJLrMCcEE3FueELWC1n5iQA",
  "key15": "5UdUPwvRRr2kWcpghaMGXomXphgUvudfF6Fk1sYbzDGLByGtPH6nEKERctQ4GwFFTkFNbYUNm5PQNwiDDZwu2HYZ",
  "key16": "2rHzGmZmLgJed3wPtKLNRSmbojYaLyoqjKSW73JU8DXoQJKeyLDbHzYg5mzi34xLm5Qtq8sG1StorKrWVcsDFw6c",
  "key17": "3A7aj9V137LhkQJRayaYDvSdXG9wNAHspmkfCtAG2f4H3fmLJkoQ8JCP1eaeKszZVhDnz8Z8Yy7meEVZN4MbGuFZ",
  "key18": "4gGUpysLP17GjKj7YdVqSWKojChu76bXh1WDpM9Y1Kh8R9jCczeFNKwHwj6owWBvEvLskzRjZjV74HqKX2ndUCxQ",
  "key19": "5yoVFeCBmTadffoXFGvGp3sS9YDAp2Jeqz7441Ze8yE87Pn2BsrsSFz4RU5JFEnd2cSwWAgpFRyBGEB9r7S4DX7Y",
  "key20": "2JEpQKBGdTBBG36zu3duhFtYK9EXpjnAQy6b6ab6p8tpJ7SBsTGtvGzCGCTapPPDGi4Vm9r1ERwqZdoF968FuoXe",
  "key21": "63YbmooJw4A7p5XYTWBGq5EsBSxFQhgjGUh5N8VAkEvVpW274QGEB6zHig62frPYnni49eP7cu4pc65EMkW2bq6F",
  "key22": "4yQTMqLKL73wA7fuXj3HkPacFQGkM5ArhG98MERiEXz48J31yMPesfTtJ7Qq8ASzuTkjiV1Aa4Ck1jW5GiVqw2QS",
  "key23": "2wNPPSLeSnd4qrsXnaQxcUFP8fe7UHQejge1dUPKD1C1TewpVmfdRy8rCkiVidhBnpN5WyqhAKHeuEt7YAoSFGo7",
  "key24": "4RMq5jCHWziUSsSPAaXPy4zg6r8MWiFppPYL36uCpJDGZUGgtcfTPgY3jPsHtBWL7mX8W1NMqSjKMqASYCN9awuQ",
  "key25": "5uymCh4FQAGzWp8VGskpHH4AjEB9w5Rz5m7Q6MSYLoYANouhJgv8s3zDya8D31iNi9bzEXrN12P7jKCqEtzTbTX7",
  "key26": "68kG4NQZg8mDZqBkxEciYasgq5NytpERT9YsnvpRXEiRoJ9UnuzrJMEussvmLwZpfDKU1x8WxPdCfetsP7AqyWa",
  "key27": "2whBrd7dmmbhVzK4pSQBWzc58pvqdyetD6F63ioE5tkbTvAJgTWbGaQ2jeo2XECzgPYkKn3FoXJ94vdgpc3n8iVi",
  "key28": "46cPmUyDeNzuawfzn4kobcDyf5WgQnT4Jh8qpDi4CvL55As4egy38q3jjfK17Jq6dhfDFdzVAcYuGEqGu53xdwuU",
  "key29": "2FLaX33Sp527QQ3HttUhCbXac6P43kcuCBm9hGzoFYfUYtFzvt5vuyH89bmTYTKmTFmsFdSQjewqV4jDx691XyFN",
  "key30": "4iPqV7y2fKdXvuLtcfMh8i1xRFcLVmneN8AGdHB77MrKXbhFzRe8SscUGbyrJvMBpPQhL9wDP2TDmyx8Hpr91hZJ",
  "key31": "3WSyBtpU59JppmaeDZ1YyaNRczzSU3N8ApkuREGJDvstkCFqGdHD9PjtrcNiL6wjqSqzVzdUJ5MAmL16xe9peFdE",
  "key32": "5jtezMGC4WM8KE27WmYxLytFd4EXiT7921y3pQRySx8Jq9uAuTSkJ7Aq8pWyHv1RpxKxJfMMaXE8swYd8VRpZ4iT",
  "key33": "5mpd7crbGtxM24hrVrTV8Z5PQhJEJpSMptsYgoks7Pki46465Cb7A45yvefi2v9vfghoCWnWo4C6V99tbEKAfZMf",
  "key34": "5uXhWN2g1MsaZ6X8C3dtuNbj3QLWLMiVms4rQF3719wMGzVMKmyRty2sjrjDf6axPQ14ZbiULUaCrTFsNkFvDbbv",
  "key35": "5XuEMZVxwJyiYXiBhKEpmuhCjhcQpZEswoahN7i6q9UvQDLnJ7iy9Y8HGWYsk19jFPLzBW4gX52DwMyMPozyoMuc",
  "key36": "33gWmqZXxgjp3pTvakZCkmd9cG9v72pjmjEgeNBMPLqqSwq4xZEK1cLCpfXq2uMyoe9F6cGeKonBL31nJNUK2c9V",
  "key37": "3J3tzBAmSz2ibwB7fX7RvLMLT7EhLuF64ypNDCq5JZKyivqPq1HmPh3vRrxmJ2MZioMUnhbFfmjrG5NKDQNxqzic",
  "key38": "3xUhSKzppCzMqeH2vq4uU5Me9hFQyrWBT3CmZ1vZMKnSRAmThxr8UcPDrKUoaMHEzyzgG5C3mfdZ58JCN8t1tqzV",
  "key39": "5oN15P8ErbUqyJaykB6JMFjfFVmo1YiLPEQ26tc461R8b7p4qGyFgWtEDzGwWkFhbdZYzNU6LJAuX2hxjyHkuxBW",
  "key40": "5PFeaBnzCKMeRWwi4rVSYkFZ75JvscMd7h6mUkhrEAVH4oN2bWmVowWcLkzor5LJvcNYpWogoXRCS4bjUTc9BgRD",
  "key41": "4t9DWF4fgk1rxZf5vpfDdS2CFWApcVzBTchSNRwyFJM4hZrWeSZcLxLfhgQ7T2mbwXUh6MFznJq9tW1f2Finzk8"
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

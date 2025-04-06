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
    "2FcTf8VTYjpKtSG9HhNamNqgw6WLEXsHjVPazd9sZqvMXWTtagm52VK1t5shD9eFP3hhsSyhbs5EGpqYzJZDLpGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YbCUK9Rb6KcjzTbZBtpVFivJLZKJeXwu6cykssn17Y9saEECfHHNfVtNSJuEHtMn94nty8D1pFoWnQj8oc5EJc1",
  "key1": "2WC3DDjBiZUwT2jA2nb1XbjqvB4zR6T5kru2gJr5QA86f8QM552nxmAGjWsjDPaAAAkwY1mzryyFTKRsN23sLQqf",
  "key2": "65QV9RhL478sRQPj1hdjhwdPTigPsqqCxgArukr8FGYhpq2a1AoacZWLgafkzWkqo4qgduRQWkYewYhzqAYCxzsL",
  "key3": "4eBVUqkaLrq3zzfptV6pecmf83MJC573mubhakgnYVSqCk269ZWuXUgAXMzqUvykZF6QzVbTJe6CkhoPHXXFpvbH",
  "key4": "B5MnSi5PLrMyyvPRtQUj9ZdajUWtewEY724qCJ5bE3K62vCuFAmX2CuzGwxZEaRF51so74qFvpUcgjb8Q7WRbcn",
  "key5": "3BU42HoqtwM1G9isTczAo3DDaZWVfirg9yZZ2KiUnY9hsr8yhQ1X59Um3tB6qu35WGHyK5Jar8dAfnXTNuZZFT4h",
  "key6": "3fdACWUdiULkPXE1jRKc3pTpFgAcbXjAQ94DtnZJ1BY2CJ4Z7ULdmcmjvPoXcBnVHDhPZc6fxCCSHueaVpC6qs51",
  "key7": "4sVWYqPDW6Lxs7RvbK3jAgmszw2sgdxyqSHa7EB5ojvWVTBQcgQgsP7NLzz36nA8Y7J6Jo5A699i2RoXZZXzgHNK",
  "key8": "3Ep3K5emGhMziUVUPGFUKKeTcRDBWwe9W1naju7CRK8SxR53JMXSsKBLRsyTXS7arLsMcnBZ56SZEK33z16TqMNe",
  "key9": "57cMATf5NK5rAYM5MztTPKu1syvsNu9745iFJSxntvPaBwa9DkwjrengbrgDL6FxBrAk6L3eRNPFxR3QbYC75hKa",
  "key10": "4iRUHpLdRCmfhMtRCGPKnGJ9x8uW76sKhFKF9syxFiaYSoiaUMaJnAExr33223NNrgHE465B7fJMEmDwiAPCoqbC",
  "key11": "3GYEtd3XNAcx8qZa5cCxycRQQLVkCVtbBtXUuiSSz8DURr8U4v652hQ1uKxt2W96r34PJyDs2oPA6XzAqYjhm2Cp",
  "key12": "47UoeSERxDfoNS9ybDn2kEupzPwSwq7nLC6vUPmPdqV6B1vqs9dSk981n8tuzaPPiwBezAsBT8XR2CURvGBn7oxh",
  "key13": "o174cq7efok1yCV1USVfMJGZQ9Hv3sEU17ZsdgfdNuehCXiSL6RcEjQ1GinNJfeyceXXG92FJGwP53pMaM7RXxY",
  "key14": "62BB2aVZiMrc4RpXuzxsT4G45scqHAB6riEzAtRHbWExvP5foYt2tC3Ry8evbZNVYvWCXm73oQfrugm2gykDmgoX",
  "key15": "KkpAsrdGLtMg167Ask8rwAPc9cmYtjE484mQCNRyv8ZXecK9d3b13VsiK4ZvuqRaQavdcGN1GZnMuuSkzN89H7k",
  "key16": "6myFNLMbQ2HcScMscwBDcvtxvDf34nPpJwzbeVVAKAdfNdDrTGdhDbzgYtApRgZYCcNbezi1ahxgUGCD5PSCAX5",
  "key17": "nSaD55qpKccggWGixuu1AXkpXr4L46UraDi8SWMah7JVWYK1jbU7pYfqtPkDuPD1P3iqxaDqYVXHvofUukurZo9",
  "key18": "36aAt7YmtYDXui649NSYee1Reh7VmPCyqvUeeV4EKmLRxiSowKbgwp88LYR23x4mUwPLX6WFpkkC71DCNsojeLDU",
  "key19": "4jMnj6SM6sCeL3BMZz9vvVCEAcWEgBDWgX5t2PB41QWBHqSh8bMfcmCXBRDNjY5yMpHywaKtLH448zkUg2XLw8Qz",
  "key20": "fbwNwcJrmuCsq2r5ejtVavdM5LhHdKToX4cFatWb48ksNX9n2HUGwygHNT6Ue9RLdYvEjB5LTMX9mE8cRsQPbYM",
  "key21": "61nCM2QN5DdCnY1x2RzM6Cquc1zPqPPfg5iANG347rJa9LCBVqpUULetRTp47VaHZAjeQyVzTKDWrspNM5vsGwJb",
  "key22": "67NTu5vUbfa7VeK3CW4SEeEUd3FaALocLiiY63GNHfXvxEdGL1q9ngZMU5h7HFcrYrWtd4iNVi5JKULWW3J8vwno",
  "key23": "3F54AveN16UvrGvDffgLfdyaMz5g7bZyntq5G55r6sh4bn64HY4kKUEm9pPEhfmo4LJfnfeSaMZDhVQgwPH7DGNv",
  "key24": "7mShe3w39wnQdVaEAsinGwMs1eprinsFe5FB7WK3TpG8awp5XZfQa6e7ZCpiPFpXwwMnaFXB9Vr8rwo2KEC9RJH",
  "key25": "4A72snspMXcdcoNZeryZiMnmJTa5bZCamrVpKpeL88Cpmq66UNxGrRguF6fLYDdzkS5nGh5dXp4ZkdqFt8PqMimL",
  "key26": "2fjnfJsyURfZvobZCu4pmTZN6zugMkjMTa8C2gyrU18KpN47YGvPvmEjAU7bS4291HM9MX4vckHVy2fttsDJhpTo",
  "key27": "2Pm767i4aUmGQRyEQvGDzsriMa2HSAupK53AoF9QcdXsX5ALQsW3MQQqrncnCwSuP4AXJf8sKGrvt3Gkt3kXnEze",
  "key28": "5nCgkTD8GDupa8sfciwhWZFAWJzwmU25utwYeaExVfKZ6W1QkPWTEigzK8gQXheuddNTMXQaiwJ77KSjG6nKb3nZ",
  "key29": "33sLLKJpJcb2k8bz9spYUKYGW74357aWcp6nRQ9W21nYezJmGAoYztvVGYwTrVaGMUYoVFud5SdxxLzhAmiUsNrF",
  "key30": "3UDhxLa7JzVSH8YKYr3WCyBXLEkQKRPMFokZ182vtSexJXxR5fkWqYpYFk2QrJCudXgpE1zpviKm5MFiRXgvyNKY",
  "key31": "5p6xH8DAGqtfXNjsQZRopaz8NFTPDaKihTGAAFX6ojPKBFbUtsmpSGLvRMEZEnGAAXLxGhQsKvs4o5Puxi9p6jU3",
  "key32": "3vHBh7tQ1BScm97PuswaKzbMZatLBss43aEdhGmBAiRE1AivbKMZj61wx4JQeXwEbnMhi8QwG14Gk9jDnkYyGnao",
  "key33": "5EqUUgReAsF3iZLWqCZWCsQusQswXgGBkaKQKbPyYzS9LJk3BE2kBc3c5cRbA5xVM9isE3dgXFg2fVJm2BpUGnoq",
  "key34": "2MPRiHsxjDMm4EjPQTEaLobd2vnAYigxDYq1y11Qn5fdaynKxsQc63XJ3tiZminLY7mSfKCQQ9CreGpQ53uJU7qV",
  "key35": "3htAJEWoaQCSidqTTQqH1j1TbB9ECA58rJ42m7xU2n4oQo9jjFynsAdpXSBxptFW7vbpSfU2zziuAmZW3N9QvCfa",
  "key36": "4uBNbfreRsermy3BvfjLBYqqnAjjrUm6G22GRyMMgwoCQwxjaZrWUHbnhtRhzdxsqMUrsgyfMVeKSX6eExCzaHZT",
  "key37": "2GRzjRU852RB91gKhnSUpXUhGLrzPYSTfuY92yRgrkvYEx3pb5HnUudwPzVzWbGvN8xMoTcTbJLZgknC5rts61xB",
  "key38": "2fUcB8ceCJsaF2bXMLDyE7u5APhUoEjzQpcdtQSxRq4zzjtPHAzrLsxhiYgZSiHDMgBBSa8WgSZY1XXYBDG96Z6m",
  "key39": "4v9pvrnconuTo2dywdg9mnUWayWh9BzV45PuT4L3Gj6orr2uhDXsBApx7cfTW2t3SP9cSJwExk7qkWPZmoGeePHk",
  "key40": "3etknYzxsEASVTvfvfxf7JDaXzoR8TmnLTJJR2uUoNKY2xhHKVFMY5HzjhxQEwjEHxWCa4GwCCosxWEWa9Tb8qwa",
  "key41": "2ZCBmqum1Ke8GvGMyYu88nJaYEG7D75yk9goMJE8XFV7nKvA6VNRVhpazN9n87noZGiCPDRnsJZvvFbb64DvSCf2",
  "key42": "4yiZLnvyxJ8ZzdxGA1K2CUmRuvxAtrypz2RQtuhLBPibaiLnT8KekfFA7AFkrUxxi9iNm6w9a23hqEKuXe9xwXQ4",
  "key43": "4pjojuuRgzNJyPAKfiT2fZPGAXXfHvrpQiCTcRA6kJbp6Nk6pMoqVArn9jpJbvqVKHbWxYFd5k4DsR8ANqkuTMjJ"
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

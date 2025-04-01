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
    "3eaR7LT8aF1u3qoBj6Pthh3yyJogHDrAejpPP886fMwesVDLfpuucRpQKJSz9NWn5XKZ3bSUqiWbvcYD9WCJYg3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9ynAw6vsYR3VXVzwCmtWWMgraPJbDsPLGqmv7tG3vWhuEs3Yjn2ucbQ7m231FY38Msc1Y7ot8SWd4JA8BBkqr",
  "key1": "5FS6TNnBohoUrUz69XCy1oxvQurSjEq4bHyECLUZrd3ae6zFSdub2ucq2yhtdLanu59XEvr4izvvvwWGKFqmuvUY",
  "key2": "38exBrD8zK7tLE3jS2rovjA5xCSSg3eyXevK54HefJT2tTQsEqQkdsNj5cLjhZ6TyHXAzH4oWxDn4CJfw1v9kL8A",
  "key3": "ag5qyrQoQPWLUdK4HjVAA28116y2oLcPrTTBzv4DBckfkDhWLnUtSXxWc1Y9qpNDqNjnfxTvZ7xzDbZ5GAu7k7g",
  "key4": "4MdQA9AfbuFizbM935dgUGdUUBTtFn8infJWgTXZKNENDue5nSKULHRgoPrfboDuCjcQsKp9Bfup5cWKMudo3jEr",
  "key5": "3ibU99G32Q2aWDjujYTWBZvvB7B8aTqN9d1szZwqGfdGwuskBzdKE4Qm7rv1K9oAfqmpxk71MjP62jsxadC4Y1vv",
  "key6": "2MkC2it6EC4o3KeqCjkfgbrrCQSTJWvwZMv2peXXBNiUnLnfcgNnB3StUqMzyXbdchScSMHHLCj7hMCgx5oX748b",
  "key7": "4TooNNXtHK5TbkybMf2GmmWy9Eev5N8LrxdTwFw2RJkGXypGTzkreUKzmxMqZe8aHrcNkU8dNwnJR85vqARGY3jt",
  "key8": "2BcJwSCobJgNnW4zd3UM4X2P7S9KB6buYAYoTVyd3wDTqtnNFjdQHnY2qPfHbveUyhFZjiQ3UjCQXnRnC4pCBtQ1",
  "key9": "mGgtYd7Wni7puT9KtP25oth6uaw9cWJFoxuaBgsz3mAn5TUY8uuJbuK669TJ5PJt7muvcr7Ff7UQ3XJVsotXMCn",
  "key10": "2Zv49sAnosZnU6HUtd5YTFPbzKXT7JgVB1LSaArq2ANhGAc2KtEM7bGmiFC61pQTnRjVmUj6F98NZorBFoDnK458",
  "key11": "2XXBzyry2tPsRSep1zsqGFsbttuutdEqRq8UW1i8SfsbovMktCuv8n5y3UXyB35XXxZTjymWXiKmPMzf3QCKBPph",
  "key12": "uVPdgviMvvnpa4gsRVz5C14AKJyZ9d7pzP3wG5hw6bLfM4HxrYAHHY37xeHznHRKSvbuEFxwNbkotxLDvQQQT6C",
  "key13": "5p3BkLt7skwxTBGtKc8joF81C4M9cPu58HGK8HRWKUeXFmAVxpETKgKxdtcAhk5S2VhDCR23RAdJgFj4sGbMJ1YF",
  "key14": "3scV2aHaN8WKZbZ9rArmb6pEmWuXvVFtRrRV3sPJv4Y7Q864Gedt9B1LYDArQ48ASHrq9cuNSNycfC1cZkHaJXXT",
  "key15": "5wkenPJKNgabtefNaBX4vP549Sy4Q5CoVuEDtxqgQ3KEniB7W6uaBxGhEuTtSEuc8xMz2qp7ryKsR8febGnAQL3C",
  "key16": "5HPENsT3wvBfSvT8MfeAGcd5RVgbTXKzN7K1W42kmu2hEBDeEgcf6idcvrfZCP4fNGNQkWkzDDx5fouEFTnKmUKX",
  "key17": "4e47qkXVGbTGPY3SAMyPmNRTgzvAG5a8KzgFESkwo4aCKNwe8PAbBNqioHB2aPGFdgiUXiiuEyaZHQ5NUVnDL3eB",
  "key18": "5NoxTUQShPA7nMsb3Fbn4N9g69Dbx1Q9brmJ84hrUg1hvjoXA2r8sYLzJMnFox4XCoapVhhVvnjpjhqeynhLwD3q",
  "key19": "4MUiSByYqmzkyyMQLGmHVGJUXmsaMSCwSeJ3KRR21zinUAv8qRmaiQn8MQhC5Q3NzQ3DcnpnZZMxHGob1qQD2hW6",
  "key20": "473D2PifDTKusKCMzqiukjAscTL6TJPgVx2TETZujXVyFqvwB8ztCF2MHUiwMngRyaJC8621M394aBivLRWco8Dt",
  "key21": "3oLiHUzyamHTT7f91JAz7ZYvZGJdvX2JMeoZtGmdbbhWXfh9udfFX22FosRZELKkNTTtnazry54z3K9n8YmwQcAr",
  "key22": "uvDb4XxiaoXE1Jve2DCuWzzGJAxhBCGFb58qhsiZ7TYfaSYkUqQ9MCQedzapPF8A9UZZqoAp2xocnQJnxdWYY4w",
  "key23": "3DUooPpqPSNFkkug2EzioLBvyqywGh5rZhzdm9xEfjnZh8ejRdwTePhrsD9Le8ZFG2d4QtCj4c4LibwXXwiF5bBd",
  "key24": "wRnkHCXMni5wrWy6J1FMARH3YEpwrfaRGX5RP47wVZWKQugyRGPyxiU1YymHzM4RqVs8hUd6rrCqgqxNwaMqjsH",
  "key25": "3u5C72meFFBkEFJYHD2SrqMmcJBLAzb6fDn3jH3Xhzyf13FiQjCdk7BTugnaDpM4MXwsYY6rR1ZH8LigVaXRyDqh",
  "key26": "3AGFbcgV6JTJajPdU7VbZtJYA4nbx6oDwsg7K9yAtWoCCSYyMYDw5rtRJvRt1MpDfJmJvEPg6rpV3N6rJaAf75kc",
  "key27": "2Fhk2GsmJ8qhTnT8hCPYpgxfobYPEdhx2nvkoos1fvKY5mMcMgzpvUiokMbheX87ThtwJVxgDcarxk5Zf3ripgVR",
  "key28": "5DkrPpvSn9b4A2ePvbzZAQvjyLzRdg4yU4pucdpa7FJkbWUrxGjv1YfUnorgbTRQjWknMzHUTmdsYhUAVwftxAPE",
  "key29": "2tMn9k6mU1hUiwxk8mPux5KK46GgsFaB9MF76vGk2Vr9gTENFPePYfxTaUXmxNyUPpgC6ezq7iy3pGH94Q23d1Ac",
  "key30": "3TNLLn1jLviGsPhtb2tf4ZL3rxAZX2jxn6oWsXQHJdq6gTzSnLHXfXBVpWyFwpuZ5hZeKfHGkVv31yoagKFD9zFQ",
  "key31": "3dBU6WCSs5VRA1tnXZYWKxvGqsso49WZoY9zgpnUdwuSRH1tMLeWuaJdEHPn5vFU16hsyZHUuxZPks7ZNe7FHu2m",
  "key32": "otmbnijmDf5sXoMssYshdthV8oQL5cT8HAhWpbH3nkmSpzfHuqSBxUJYrckebYqPwjDUL6cdRVZZZMVT1d1TE56",
  "key33": "4Kvz1FUypbEpukWP7EAUdFwRYkz1t1g4D9hAhPqjWCh5RMG5raBes9tfY5zZv8KZUggKZaMui2prjsSRUMDn7nwF"
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

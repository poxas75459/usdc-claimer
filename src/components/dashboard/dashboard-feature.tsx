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
    "5jh2Szcq7D44Ywe5PQ9wWFUbXZX8xxftZQpSwuKGG6Yci44Z31acv567Mm62KmRNF8zbLBhZkdLcnuCnxacVMvju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BrifKoRinm5CvvtkFdJR9CFjR4BTNL2c3g5T2HoiEnxfPphiZ9XnoBXodQ27AFBrmGatB9rR8gD5T2AgK1igw2o",
  "key1": "5YTbRzr1vrSrebc6ch1G2QbuSGMvzDajy7XbGC93zyB3Q6JP5Hqv1EW4xwejBRZRJc9HWutmbNE4bkFf1HKPaYby",
  "key2": "4fiomaB5Pn2WfSTUTgecmgUPEx264MjivhtMbc74euQXwkiZb2WJMH2B2MoABS9P4cDSUKSmik4yiuWMAPddN3oU",
  "key3": "5fLfwngxCG8NG6DpcYFkQ1hPkcUcd79QS6jCfzQWkRDyRs7JUfq6hc8ZBsZ4QMT2C5vp3hkSRm42w3B5AWBVRJbM",
  "key4": "4dNGcuVk5hvfsn9BAmdfgtj1HvyaY7HdjRqFnixoXJQci9hapVAA8uLLdvsoTZ5zwURW9X17cgmXBZVV6JBFPE4n",
  "key5": "4dSUyTKYE6AD3xNb6zYmYhBBANCA4atwQdtGxYoxaD64dcnUerdkiNt9oVs7y2cChLXa3Q5pytEtAqt4SyCUx1BZ",
  "key6": "5cuKTPXLZmqJqp22sivAfVb5xACqMM4nLDVwkrDWoAngymb9QQmjANjb7pgKMjvbo41BtjJBWxsqULQMbRbiNFBs",
  "key7": "2ow82sHe61rwxcFJkVJk6obj6UrvRhVtVoHr4PZ7Aw1cfK7R1JQ1aBNQKnssTWCW9oSyTMvX9Yn1C6Ukq46Rnyvn",
  "key8": "eeavhyVGBMqiNBp9ea4RzZT5ZdjXQTCpAfXv3yfSjmdT8RrjANmszjUreUwJT4fkokJtA8S5K9frpn4RmNKJ9RH",
  "key9": "4P55p2hkr6UeiRfXm4hSG8wiXQAjweko8XjfvFmJS6AumcZ1pG82YJBtWbipgAaLhvP8spB1BnTGycGmKEVq9Stn",
  "key10": "62h4Heurt8AJPkwaae6Ph1fpd3c5qivRce3Hco3MVmFn8jbKR9Y1CzAGh2ZStZTXoFmRcfFLJXhfMkkPfB2jCiXj",
  "key11": "4ikeBqdchfeTRV5FpHQefzET3TZTBzBNtagaw9ttYRWBE7Ln89cua8ruKwoNVcD5ss6iErg3Dm8LuiYHmSfTFoAM",
  "key12": "4VRkGXAC7JT4GSVpNP1f6Qt4vw5ayZAEB8h6ZFGFaLL42ZGK4ey9aEtrr5vrs8xjFD6kaENvTZLqbeGsJu5TKP6W",
  "key13": "5Tchz4uzFmrf4k4UosQtinzPjmnAuPtPzJpWZmC9fGGkofJcxjCeA1sHKqkxbqMpTxozYAmBVXNz43eWvjhWpMdJ",
  "key14": "4isH2GKK8t4cPwEVRLtBrC9jmzGg4GYSbBjkFqaKsMrDqF22HtJwL85u5b1u1GdpdVL4J3ZbuC8UYgNKW5DhdHqv",
  "key15": "5VYYSuQtLGmFjz9KTkTR7zYpk7Kwc31KH43rHa9xjxqvckxvVNu86ciHpG2HW5YmoCCbiXj5pwxy1wddwPcQAM3h",
  "key16": "H8SdhYyoaL1JjdBHHBJwKYBbWTYV2YwtXPxxCutC66QgQGYJGo2DQdmEueLWEkFSRwocs23LyvaoBdVe3hGzRgb",
  "key17": "3CGBSRwg5zKk6XjbzdWzvPFbA2cGaZyi36cod2XMMYtxQqcRuXyonVsH9QpWTaJH8FhxjpSeD3VRXyhQWqk4Ts4V",
  "key18": "2NdtZPWejqntKMxA5YUyoaK8wfk47zo32G7tqHmDJyJNo6nPceguw6KMyLCVFF3Tx9KCtyGKzkjNab58sVTHUVTq",
  "key19": "34HdEbteAoek2dqSbgpzY71XCDJpR8hk3Vho9MvEivk6NHV8SKJFaKTys3Nb1V96No14oZdi3ri5AJCpi1gGKJ95",
  "key20": "5imYAoJevpLgyJNQpkj6CsTPd6qMKYcJXwSTWB2BDMvEb8uJSF5dqhcnusdxU5sHuK6AKwBDKLsBao275hLpadq2",
  "key21": "2Sbx5BmtLrUHPMZgPaTtSg4crsq6GAJZn3BswugNrswLeEgLDHrATbDFNRLDXMtxchSGmbeG8Whr9SUHMgYvJiTT",
  "key22": "3srwGe5PHLMKSbbhU4ZBaKgdL8pZ6FauiUxsfqhrzxd86G6rtua3JxxUUBfCasnWoh7E3edzm3WYVLM3NGYQRwgK",
  "key23": "5s6wX1TzRgX9rsyJsDkAfdgYG4PHqi49SuXravk6G2RPVE7xGJ4Xm4nQcg88cq2H6g1P4KXg1WtrdbPoq6ckqtfd",
  "key24": "519FFVa1RjtcfJwJ6F7abjLPvtYXMMgnmDqiF3AuiC5Z9rS71xm62bgKPoMmwNBDhVcRcThKicRkRkYw7J3oCikC",
  "key25": "KTQRJNd6fA26oKNH8qdE5uLtBemu6rxCAC5Yfx6iukbyrMNm99qgMW6zEjTDT4bjYuQxmKWvVHzyhNKaPojMSzU",
  "key26": "5KLBbNH8HsbdzeKWdynYguR1DpK2VjXfxdHinVNqs5TqJzyXmiiuV2ei3vULFtB685e7sGRFLVkfypyd9XS8cUcB",
  "key27": "3xxjTwRhZc1mGusYoV251zmF2hZXUzfLibVa8henc4UpJ552KJ86hZe1sxgrECeQDWwBC2QTMj4QNSjhFYGPUoBd",
  "key28": "2JLz98MGnRkC9gc3s3XUgWk3hPg9bMd3V7Dj2hwTmYzDHYdNbav8woiNqStWErJCqLt8VjJt64Ni2P9fGt1USBDV",
  "key29": "39RoTXdqAcwme1kc4HYS4DEG2HQHc6UGjyTxjXuXvf6syP1N51e7u3yyKFr5Z5xpmCgouhAh6jequSMdVmRSS6XM",
  "key30": "5ypGX4itewkkj4bnnUxDMQ9p5KQJ4CnxLBEnbW1Xm3peqAaGfN736zCnz6KKNnYJFV3JYdUTkvZaQ2kLqZUaBaJ7",
  "key31": "5EU4XomjiZZsQybsS91VD95jAMGEuMorA2fBPgphxxEgTxRctRZHaXWhkBmU6pWcqq79M77e3ReNtbnsA3grC3W",
  "key32": "2aRAaeUHz9JKfKpg9N52EXNuPmf8ML9232oi8skfNMBed1SMZkF8imSnLYir51Qn9GjGzE11TXUxmkDhQdvW2BqB",
  "key33": "3hxbTTZZWQUobtABECR72B8ory7YvEi6PcQ9uPcinaYMoT9JNM2MWrCWdjb7Aa553NMtGmoCbq635CXNX3mD63Y3"
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

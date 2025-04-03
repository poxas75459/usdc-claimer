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
    "TJTZiPbkXuaGUXTW2SZU86R8sCrUrXr6nRXVrvpQgHmvHzY9vSHQHUZTfNT7WFhcpAG1xfg2hM6x6VQhYGCGXf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KMuQYvj8msccyYR2zXAWHDaq6M5deKw95P2NN9MYz6EJjpveAk4JFU3gyr13ZsQRkYjXj3Qw6W71Rvzret5GS7",
  "key1": "pZXpQ1Yfh2ynWYQfzHmTaRAaQmXwrHjdCYMQVVzKJaB4VFheTxiRig9hDDc4vcAkQZ3RYQZQ9ysyHdatZfuR8uu",
  "key2": "51YMDFCaif8rEpkiHM3pAyoAHwBY3yjRfGX3NLEzUbvoRtCNSeTi5L7XW9ptS6Czusqj94EUjzvuxYqyDySSET6f",
  "key3": "248wMRgJqih95Hju2nKnzwkuBvG3Syis52rVvW2hZRNDCbMvZiVmXf7gmE7m87dgLAN3HgrqDSJ2JfeS9xu3GufC",
  "key4": "bYQ7JiuLxQZ8Z4SQoMHjUwhBCjKuDLNUHAFPp2eq55Ki5weFQLLESEZyTpJ9xxV9PCk2JG1AFoW4aH41ru2YVB5",
  "key5": "4sJmJzBzJfz3TwpaWy2Dzi1dvDW6YFb9wztnMnW6nKwqz5LN1tWBYaiXiUfopXzr7TcqnfkifEqDH67zkFtu57C5",
  "key6": "34R6vA1TqeDBHg59CzpLB2uzajaTha3CFGnXUDQTj6WUYomZEhatHkvsKgoAmKiPqEDB2ae6eNMYZkwQ83wXMdn4",
  "key7": "5dastHB3Nw7fWDzBgwyy76gcQaVftZuUm82TXaeGFJyR1ZZPFVFEb5uxHGuE4R7Xw2cZKLds4fHUMBTUZuBc4Cjh",
  "key8": "5oxNBUaKkyKinaSpAcR1DCTzTxzuuaAqWGJvbnLZyk6sVYpbedHmNDyQgfVG5L8YEYfrXGAMmNZV8U4pgYaMi1wc",
  "key9": "4geaLfzHCg3beLMMHmkg9rPQzMTUWdumd9DQKKU868TYD9YCEQNUELAv7ztSTbgxaC9fBFt5XFoVnQPonXopJshK",
  "key10": "2EYVEw4Pvzhnp4xeVosLZtSeP916ZYCpc81EsAEubJN9wnxJawi9RkFxXAicNSyyt4yBNLzdmEwvQE8PsZTCoRvX",
  "key11": "34dnXEtCYkEu7Ft4TUWm5HVGpBkR4AvAG5teAonqkMcJX7Mfg6CVMoFA2SWNH7sb1ibGYCFBuvHNhXwPHwMTm9RQ",
  "key12": "2yCREDChF9bmMjkofHMSNdEqjUqMS9pUhFoxdrUe2z5Up9Y51CiC8hgiNm3XDo9oJNg2syNxY7HXJ4rGiBc7dD5H",
  "key13": "5reZYtjsozwyXgcFg8z6oXCaaNJ4gMFMcWnz3aMiiooduvZNxYstktFW4BJFSzhUna9PhNrgJymziVkz3XW68NSJ",
  "key14": "4AH5T6V4QdF8ZJ4fKpqZGmmpKsCnaS24JDzQmXXA7NpUACY25Pg6emCPkYEw1HSJwFp28DHdxe3Qw52JpaTSnHHq",
  "key15": "4nSHyB6yeqGHU4Vnui4PdJ1PcMpFzrRqCMrsDXQ2jkmYbJdeZgwpHTtzJdSeyQLzYktpjET6Q7dXDvUqC8sGcSfS",
  "key16": "5hJ4pmYGJpHCdQsAyiZ4jXFhUKsn4XSBrVtDWCpecnxx5z1uzjXpQ25VNYufa1ETFw6oZRVWiudEMHFiS3D9Pnvr",
  "key17": "Na1XgwaDK4fuj9hWpbfoHFHeF3YwTWzKsRXkYyL6NLoU7ikwxJzTz7rtVakikQETabhJws5Yi9TfH2w1S43FmrG",
  "key18": "46odrrRQdeYeSxzTKQeDKm5ZHkV18kGygfXDWYuf25Dmdc7pwW38Z53UbyTySNj2eEn13rnTRFkExEQqiXsB1j8x",
  "key19": "2oY3xRonvDdvKFVw3Z3y4GxLEpwWJtcTsTUALuay2nZf9emYaho9f6oYUtsNonVyTj85mppT81fLCeFrTtTsQyD",
  "key20": "2daP4MYkGp1wRxymRuEzSquML92Rji4NjZdVY6gsGi9BcxSYCK3j6s8EHU7UGydwxLBvr9XucWvCB12beqpCF6CV",
  "key21": "L3Y75yei496vm2vmtpUEc7Se691muyC5YbLWo4pE4MNd6Aju85L6w739mPFiU8Bf6j9R4zSiq6qrqaJt3DjKphb",
  "key22": "4vcM8rT4dxkYRUxvQcRYaRQdXpHrMenYazBeGpN9nnLvDLSuEt1wjnH5twGp91noRzw3khgN4ptWiCNUqCtHfcFu",
  "key23": "bdctuom973hbNUXnMKmir7H2oAqVnYVUt96jemrkcToFaJo6WtvffygAzDHkrAK5njZGT9Q6hUTENzZNYinNvHh",
  "key24": "2C8T3zcTXWVzxEMfaDC8r2mkxCN7vKKr4hJ8zPm4y9iw6vSBAg5Pmo85nteUtacLCKA2NQqnZjz4Zh15oXDG9sUB",
  "key25": "rAA4fXVy5u7pcerCidVMudRMjNzNysAfMmvhzG25vk3e6ZTaVWdm45Yh4mmXZ5UKtJoSRywkXAs8HS4sa9Tn8BM",
  "key26": "5vasGSQNdnnWrQAWd2tGdkHUMTeDU1y4ppa2KpwJg6BfB3SPA62upoeoShU9NVPY3WksdGrYUf7fNNtNSiDqnfsC",
  "key27": "2ePRwMNps3Hc39xqJ5S1wbyTB8KTRCt7pTMMU4cMMRmWbRLGSr7G42pQrcKiXwTSiu64LgYrdYEpaZrrzrh1aP2R",
  "key28": "G2xi5SHqtzT2YyuG45qVGd2j7w3YcmASYvbvgwfVejcbHFPYZDLm1QUQjGab8K3bcRDVqz4ow1KuCYhDMcZ2jUJ",
  "key29": "pqAijVg6vfv7wge9jNp7iovurQEHMtQs5DKpDnGuPYiBwXKFQb3ysMErXFQvigGyoFSJqkyDasiBSJdkvXj1GoC",
  "key30": "3AWCW66GTMcuqbtq1ZQBs5DAm8RSgNrX2Zk4Jh65dRD1GAiQQZEK1xYecu5zm2EtAXSXPUS9X2CPf1CK9k67fYDJ",
  "key31": "4BVsFECaEv5cJiBRAfgNTkEYqb2PoZwC6YxLeZ1dB2qGkU94P5Dq5JJQAj1Cj4s2QhMYYymRgnobzi9XNPXstenZ",
  "key32": "2iPHPthkrbw2a867K8Z3oJNKsQoTpow7pcErUfJaaFs5VtDLtzGsPYaZMEszJF6ic2fXHht3Kosrqsfk52htoxUT",
  "key33": "2USUZB2QDRnxQTyHfzwz2q2wskDqiRUMNgPypb7JG8UaufyQESk8SJN3PMPXY4qFijM2Axz2SA3yTH6q1ULeXuLm",
  "key34": "3ZMukv7ZKTQM6oCSJGpoS2ruHAszjT2xqTUZL17tBW4E4WWdGYpTP9ezadFXDKRktnKbYVPKwfqUec1DmyDFpBR6",
  "key35": "4ifLmDZ3mdFZBwt2uJ9ntqSFRQf9mVyb3txNJo3hvXoPWD9o9CUokwXRAR2w1LYiSZkcXsYgk581ephoXVw7hDE8",
  "key36": "26YDFQMmopfLeFi5cWaVGYjrSyJTbsCyMWpMP2qboYZ2XLdtGXsua7Az4vWdf9MqJ81EA3swaNFFSqreriP59Jr7",
  "key37": "aiWVu9hB2erSPZK8bpriecgkU1KjqHvFJYEUSam6kTy7xZVLed3nEz73DHzeZjtZNqvYSiSZ3zdJqGRPEwnkaf4",
  "key38": "5WV8qmfNVkLJ3dsjhfoy41CwoAw37arq5NcU6zGfNiB3zxKtuEh75SPmY84VGtfLQwtJ8LVfGiLSU6bRZHKoRshz",
  "key39": "4uQ5pKTbTspHnMkwSC8YTgNKG4dZiWHaxgWHS1ufyaQ3AibuwhjGjes3FxGhXja5TmmvCMqGka44oKkn225svYb4",
  "key40": "5eUkGzQgaG8EvoBNM2ByVkNLymgvNTupGA6daPv8xqVxFZEhCpsE3aanNE8EqZMA13Kdru5AbbX7r8qhsCbXRFF3"
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

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
    "3UmWNCxnMRTDBaPc1wpsZx1mtn7WASpZwyknYGynzyFRYJVjNeBp2sFfhbKJfy89qgeMAAcj1Y8L6XwYEfVzPAwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6643YktuZw5foGJSMXChjebPZPtPMaQyYBGKVZ7uJPhcXJaS7AuGQZn98cH4PDMj7QEsWfLiVCeGw2YzMyKdx5",
  "key1": "44f7HkrYUi66dfXBwEVR6iAeGgaBtWrXUwWxng3vfTGohwPvRbe3BDwwWpKA8B5zbY22fdhha6rTsDdLi2ZTXNdZ",
  "key2": "TRja94NVGkwc53tYMreVa579J25HmnQPcEeaKMKnbPVpSZGDzjAsaTVwSUA13xMfDZ2nZFtkhbmCFNBehVoxaCm",
  "key3": "3dRbctP4q4ZEQzpTJVUZoYC5zC5HX51NBZM8XXiXxjsCc4LMX1HF6WmiSm4vhuxqmpBqVSJSF49f1TN9dYB48YUW",
  "key4": "waGRhkUqdnkZPEg4hxoNgq7PpjdPAyr6a9CarH1ZGBBVBZW2E8CrkfMfgtBFkMozKWq3XNwMnUujSc6m369L2Zv",
  "key5": "2iDVpCj5e1qqvGsBKkUCdmNiJMF3S3gPHhg8MzvZAQWopDjDs6ZvUgiPQ8wKJkvSZzCJRakYqYr96npANfjXASjW",
  "key6": "wmpqN378W53bHD7j4tYvTQkQwFvcBCVzhW6ppXJ7BYUnwTTQ9VP8Uq3U115WFe82hRtR3jHmKKviVjSKquyHoaZ",
  "key7": "3yP8ejKWmXQmVLDv6Bup52NbmffnQcqXv9XmcWB4MT6rThKKWEnhxfLfgJkyZ1sYUwPqtnvL7DCjT9Wd16Gg3sSN",
  "key8": "2b3fmw2TmYECVe65wBhYWiELzUuQ2Cdz7GRVGAg1P8CNyHadrMamQQUvvyQcpB5AAENUJLoHc3MnmpZt4a7KcVSf",
  "key9": "2Yd6hAH1osFWJ9VuEwegbynCBF6qWwrKJizYUYHTmEWDGnHEWykWCXkHyFeTtSkSwJ68CgHNQ16aBFnDAkb3kWvt",
  "key10": "445L9YjtXsMUgrA7obef9cDo9ttjf8ntWommV4uSg1PLfq48hTcrTr1FjFvdGnSgAp7mR13zcJMEBD1jKVB5L57z",
  "key11": "58hPefTU3DwxfrqXtNJG3VPRUiCa6DT475QWDCpPdumUQw3GyvW6CByvm2JKEtsNGjfrCgf3j7c8PdCM5CSBAkYZ",
  "key12": "5DMJ2vb1aqZJfw69MSHkQE9wVMo3wZxEcht8PDDpvqxQq1e6qPF5NCYKE55dukPxnGYzuCcY2kxSL8F5rWPZGBSj",
  "key13": "3kfaUQ1BF9Jkxpv1gZzxcYsndbevAwT3tw5qMcXbdg3toroMSSteVwSGLXdPHLT68WzDS7CtSCM4sVaUPg2rBQyu",
  "key14": "4Bpw2ZzjMjHV9kBoHGoyjN7jqNYRLxvUFcCR1fJrxqo9rdwDNn7Dwh5r5DE9FfubfXPZUQ6w6ijHaNWLQhLjnhxd",
  "key15": "5jubYZ4nUEdKPtdJVWJzekNG9oXthaxrDGQrENrKh4mZzbhM8LPZCWxmZa4jKj9jCUzbrmozAkqb6wtVumhRrVYb",
  "key16": "411vNFTXeRRhkqy53MVUFVdYcmTQ6FL1ZsCcwk4E71bNzFajWXTRV94L6kEukfN6E3D5oWvrKZo5E3X5kSkDDBe6",
  "key17": "HMtVg9Fm3qAdop9sDEEjGbTW5rcBKCQo1BWQdXAdUgzJFp5vN1MfrSckF9Nc684itS1buym7yftDMbqJxJzBgkf",
  "key18": "38zThRLMaiBng314LpGv4JTtfisMXJfomoX1u6juFRUV14UVLy2Vq9sRgYo5bpS1BiDN2sbrpXnc9MvMyqj6WKSZ",
  "key19": "2sbuVXuJEnn7eKjyt7m4xd9dXKBB5LQKsWy5ft71WWtaZbFCzdGfAo9pSvSaW4pE5vrGkMQkjYb4LMEPCPRaiBQs",
  "key20": "KaTK66ZoD8QoBjxg8YBNZXKRYYoeKtLUfXmFwryAqZZLdvG3TeVAynN3Hv8AwomLFvprW5b1XQhaanBxitXiW8t",
  "key21": "3c92Eg9tev1Twg5nak7Mvk3nunNWKPbrc45UXjnJkptSBn6NLH92MSdTY43Zn1E9dsUQiyMkYSeFMMwMGw5TyRpE",
  "key22": "4BdALr7xmH5tp8yyF5SUTuS3Bv3B6og81fuq7sJyti8ysKHAEX2kgabWUt8ufgPxKtaok4tGXEHv9ePQSexMHZuG",
  "key23": "5xGCc531KeEsWDaxcowDmG8VQ16LKu1aJHLoyf2gL9wTJRDVbDFeqJFxceT9GPjhoMVMYBx9AMLrHq4yRzG5V5nQ",
  "key24": "4aKmP8TQeRqUuNawTV5xSMhJMzPoWD4cib8AQh9FJ4UDg6ccoG1Xy9J7x2THPxzGrSvUC5C4oKe3AbWpq8epN5Qb",
  "key25": "2mVFYzkgHsw4CVrnRsoQAU2f2rrrJGTg7GpYGSPTbDhMG2kfYSGBTswrWftWyzkbBsUSykqGTgvqPEW1N34gNfkG",
  "key26": "3TgZiRBUZ27mbGHMGuWWa3H4Wp1nvUsKjukWdghSmG2P6gSYXSUfQQrotzXeWdyEfWEtz5Rsj8Z6KpZrNssKS1un",
  "key27": "3o93GmZ5qsU4SNVwESinVBjThWuEQoPX4dTUq2uhPHAgjfWq12gEBjuZFgd67pHjU6zR1LmTj4QPDvnFXSfFUR55",
  "key28": "2t7B898wVpwKKUR1U4JNFdhLp6xDnF8KhijwFGiV5H1YaF3sbuXxFfkq18HmdzNQ1z9Ht1yfqu2cP7Ku17ii1ZVL",
  "key29": "2zPrxW66Ae5bapcgd1aHFdygjq26eZRdRfs1rZ4u2xJEdvgUC2wqfz2kUxMrnCgG5AZkbVLf8VWZn1ADfuEbF6J",
  "key30": "32QtrZizm3yL2WGAHjSXxKiHanYtq8ZqUMhpazekbPHid2neBuU8SMTekcwq2gWLQHPCU3qcT364kArzKhpTSmME"
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

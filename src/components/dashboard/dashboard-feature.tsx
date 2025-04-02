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
    "4TsahuRZDY4hJAKmso73EMtjkkpxsZPXy6F2coGu3kHCf8QdGpAuH16dkcQKzkc7ucAr4FE6zy9qd1L7AfAa578B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ZtEcMsBxkUHMC8c8LpcXNnQ1TmNwF8g431Q3xDhbdc2ftESE2c91TELMg15EM1pCF3heudQ9nDAMSPeFEFw5CW",
  "key1": "LtscqoHy1DVm4RNp3Lo44qqhpyx2SzdowkSq1wFwpcnV2moWoSqvCzHvxymQFhHZtXKjDZ2EAi2qKWw1mosqomy",
  "key2": "2xngKGgKWdQoqawUygbL4YvJCngZkSGSAq63m98JziihEdiy44xqoEJ5P1xpXdEQc4GtAPjQwCx6zFe55MMycHWw",
  "key3": "5sKW8S1SfZUQ4VQCNKUiJCeRS1bZn6u7pdBHpLb2nahK75vVdhg7LS1QJ6bbnnodSpmc7d6h3DcTznGXYmYSc4cC",
  "key4": "2jTJWqeGxMxeDBiVu5A6U14kwREkY6TnTEbNMPFkMVfrvAgHFcU2C7evc5xp5X5hzQKmq7D69xQQdWPhMnVFGUPf",
  "key5": "4KpkDUThV8K36y2QPc4V7rMKSj4napxRtHBgRYtLekWTzumPkUz9yQYQBMRzEiraMWDr6jBurQjyYL1U3B95fycM",
  "key6": "5gDwgrM6eS4c77DPPtZWwZLNGPfPdQDhzKPkSiwoX3cBn33S9pffwvtKBufQ3h1hVzGjLroipgYJyn4m8XgbajQM",
  "key7": "ngZF1G8XxfSugrQeZf38wms7qNi7jZBY5cji72MbiT76NTUrnAocDvBw61hErdt7qAgWfR1AhHwQzp8tb7YS4KP",
  "key8": "5BwhVMsAnm4VFHijnfGpZoPTPmJZaXFb1BM9q75AmJjq8DsAZ64auUeJC3CSChE5J3tohqoGURwtnhqivVSYyDdG",
  "key9": "3SgysnLH2viiYExEYCYx23GmUiV3tt3x7552sg1mnQRpBDDd7wxsrWTRVSfiWaPoRfdnQQLyhyyxd3Bp8Y4m9nWF",
  "key10": "wxivnCGgTA9mo9zC5c7cDxmnD3DUJBx9X6GoT43C2jyLNv3DsGrTf47bqZYTQMVJPgueGmhiSVkCXCrtXDGC9r2",
  "key11": "4sRnHFNgH5CpucULLpN6WjmXADenaPzGErnvTSP4urZ7EmFWU9d5PnpDFzoC6U5hbHoQVPb8varjRyRMR8P1nNbo",
  "key12": "pfYF7jidjxMiqyFVsz582Gut8YWAnETfDVHrmn2iV1ksPS9vKBijNwjufksNcpiiKJBQLkFAMgYf7pi2dMJ4kuy",
  "key13": "58q1UwK137BR3U91ae7gDGj3owwDc5xRw5Rq8q3QZtV8khimPZyjvYms5mfKTH9iSDNUqoAVLAdX7dM46jVumHG1",
  "key14": "3pRo7PqTCDp7fXiKqqJr2pGteTeBStRGKXv5v3QJ7rFx9Jc2XGmay1xSBPzYHQucVHv9Einw7RWSysuPD5VKL7R5",
  "key15": "aA5hecTKjjQ9VYoVDyGAbcbb5BwW5qBihA7YN4zTi3CPQ7ap6StJEBRTStbFSwJjKFCnndmSrFtSd9gNZLCaU54",
  "key16": "4ZHsvcwkigma7Ks8V8bqYBhuPZEVQbsDLaAajTxSf6m4zMQGrvprx2pNeAh9EhX1UrT3fntv9EQGJPhcTEatn9dy",
  "key17": "ktY38qABqWmm7pxecKx8pRsoHj3CBP1m7d5pxoK4YQ6zabxLuZX364FCaUz5VSYa2zsf3DmXT82zyeRLK4RhM4X",
  "key18": "2BkMyvD6BBLha1zrk6RT8oAQf1K3C6WdJP5JgDcjv5dVER1qKyBxUf5cnSbqGTTg9JxmLya7cY9tbycLW3KssVBu",
  "key19": "3azK26J1oeGrVWyY2WWufEjFpZw4a1HgBbGQ2JePAurRGkRcnqRVPtwKCtb9RVdX3iaufx6h4auu5CiGvA9CE2Vm",
  "key20": "39LuFgpcEDJ8ax5kuhnBPRofWMTBpfwqdQn1w6fhy3SxrF8FadPhGCaDcVoXosAtjMm5Hb7XbdhxHHEQnJJCAbpd",
  "key21": "2o9XXwhE8g1grbgzmnXhB55enTMbAyeEkkx6YTugx9rRX8farZxeTBpc5iWkTip1iQAN76guJg41uk8MQW78g29j",
  "key22": "4RZYz3gCTeBcEBXYnrguQnz831yBDhwEZ72oXwuePwsyL5ZTP4jyEQ1KabSLXGSy5Sg5pgnteEKYBwTZgTievPTg",
  "key23": "5eq1keTXLJiH4PRm8Usx9F9nzkSRiBJxPBmptXjvhKMsxTitS1bymUB4RES78V149Rp2XrxMExQaZUeZkqqgFf44",
  "key24": "5p4Z8fg9osEZ3H8r2EW3g4MJJ6TK95oGzbX6pUumN4HhUNHkV27VAVmX3j7B8dB7fBvMNYAmafF9R23VvFZwe5Fv",
  "key25": "566w7kqfQ6Js538eQTNXPYytwXWgqor5bipKzBkHGQntNpAuSxPgoHRE6pa3pWJzeNAxNysZk5Mp5E6pRVvvn177",
  "key26": "Amr1LJrrLhzxWoXGCbSXqTm2nSRev8HWYiVfzLbF4SHv6aiJjeKDdJQkC4cisJu8pXEn4BMpmvgTwhXgLu9Hwzf",
  "key27": "2xfF4ZqjiETJ96m2pKogFEs5tK4YfEyfEzDXWXbiVjzX1Sxg1uv3kDzmRcitAq2btuwTF3r3KDhMPLRemoZ3uSL",
  "key28": "4HQuNgKS4oKShxjomnUbGSyUAXy7FzhCUTfopH4i251c9u6ZiVFqq9hYNXmbw7BeoC5TPNSY49LawADFbynTJw6S",
  "key29": "2ZK5uiNdBqUrbtx3YUtRw1RdwhYfE49w9arM3HjdHNBoB4urxDgbrBH4cTtr794JA4WtLwomnGFb2qXueJxs3N43",
  "key30": "2g5maZk6iCKaK7Xp1TgJc7nSKyCp7a7zsXoipwdzvFN2qtYzGmzj15uW6J8Cg2wrQxmLXcMt9BZkB9ZdGoD7bZMu"
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

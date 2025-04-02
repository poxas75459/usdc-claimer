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
    "4JxVpcEqj5akXZEs1PSxodyksMtRMGRyiV8KwZnczTAYCw7KKXVHJ11HC145RBWcexVNpQ2dHieK5sx3mJMEKwLp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zasyGvCjCXG6GtDxt1qsTJWbUAMitvmofihojvkaB677HeWKSBewqg31GwUyh9VHLUgkN8fmgcZyoi73shWytGX",
  "key1": "66QH1GnfAYEuLo4XLYcrM2biGBf9UZBVkjJCVCtpXCdo6tpwxV4fkZnXy171vUWttNZQbzUZgqi3u3S9WLNUX3mX",
  "key2": "4zg6NfBpASymjnd9N1v5AccErFaPCwfkSg38izADeT7uVfj5C1vddkbYD8NiPeMx2yYUhVTDi9u7X9a5d54MeLCe",
  "key3": "4ZsvmZNTG2eVS49eqCcEsfQSQ2hdFzGdm17L57ePKd8WpcxzYbuC8MMuDpAguJPQ4zQ8aat4MxT78fjrYzY6w4uJ",
  "key4": "3pnfwXQnZ5FtbBVuvD7FFtzwwYXAbzdT3EXvrKPNqBTsnYXRAsyfMvs4nT4qyMHHXVzXNWX4HjxNrb4aRz25TXiA",
  "key5": "2VFMm8Mhtc6JNCW3GpvwuQCsqU6C8uNG19qP1kbNV5cBLFn51uRLjpEmeSHVg4UTHyBtuA6qkXAaR9v67Np9dFNL",
  "key6": "wTFw3vfbBhwcnPinwxvZL9V8wp3gDHwjbZcHH1M7x4WEYbZ3nvM3VZBktnRs6USXYQfZjgqH1vK6hxp9GTyCECv",
  "key7": "4R93XbfUajbwtKE1G7JhdymfNUFd3CBbNnsbSfhci7hhDHiazxdDzBLkRkbSSjDyD5znsW2Ca172kRR7xmswkQDB",
  "key8": "38SxasYteACAGarkG2oRTVuUUyg72LERW8VrcUSJSvzMNotD3iufJCns44zJZvSvQoP2JeMsLFuvxWEhvTR6v8iA",
  "key9": "2huKUiK1LqRJ6Z3Am3aYCToPnxtLHQ8yQnrmwwqXN3WjWS6KrwL4K3aYkwZt2sP9nvasCrz9WWXteK63xNvr29Cc",
  "key10": "FDeRiymMaxyxGdZTkENyxqf9tS8uxhMoCuo37g5NiTe2sKesj4gJPjV17HWfF4vANpRjq4zex6Magjx5bLt39ED",
  "key11": "dB7qSC3pDXahQtFq3janAyPVL5o2crw2v4zk4x9BpZAdwyPPaYeTSHfg13sdZRzYMGaYCeeimzvGeiCkTnX5zq6",
  "key12": "2FVgvrxqH7BFYTbjxB4LwKn85tDTnZv5a1wjLA3PctiYQY3Ng93RRxcN5KwL5CfrXEva7icePsWBFWptBqrgiaJK",
  "key13": "4iCQk2agus81bgxNaApsoVakuzxNoG4QGoiopmDGBNXsD8N8aHsNTQKMqrAyR5Y9B1vEiDSPu3tgSU2u6W88en7z",
  "key14": "5xXRf431EXzQZvNgv5XgHxJQncDrtYT2dwx9by7oWUq61t6PDXJnFgsnt8mmr7kx7wcodZiV5uNGa7wgHkticAy5",
  "key15": "2n2tpKtfTiB6aNKSn9rBYfCqjGRH5idRWT6PyMJFe5tRLFPDDoAsjW3M5vGyaPqk3UrS45BHp76YreMGRcvmGB8U",
  "key16": "4gH3tXXpUvqMSwQ6oVvYvfKEJRMXahgQfgGPJKx1JYnJVdf694kXCXhpHExDTPjmRCEiRjfJTCoTx5ky1o9wAEBu",
  "key17": "FjaJtotXHw2Ree7YRek6kefBmRXNrNRnXbH6KQbFKAuFWf7aVP2M2vtPkb1uuUMCmBf9QyEShgFnDeG9VrxraUK",
  "key18": "24GySwkf83gKBqQnsL3EFQpv1n29XW31js5w3ZMiBp3CPqHcwMuU9RTWHicnWyjpkwa8tgeh77N7yTvKfLStqM8A",
  "key19": "ddrdCf21yVWLrdzy71ScerpopDoKCJvWqDF3GNCrH1PH43k6KKKBWt3mo34sbPLtcMqi3ZhLkPcVLA3Km11fam6",
  "key20": "64NfgwyVoQrBYyGPfA2MNndJLp4dspct59XVsyREwnANb87RLNGQMyLH59cHRncPqLeULoEv8CLpHr8w41fAtKuo",
  "key21": "36vqKM9KFiet23p3cpH7PExZmEaw81fKmeai13XXYADMhxWg1GkvnD2TEWUDUS68ThGn9QLVvvgVdmD14ZLX6E96",
  "key22": "54Jjtt7UpSQBaTs2sbaHTs5yjJr4UdHDwEJ5u6UwDuMQCxHQ9W4BhQ2TPjEEXRQnv2uuyP6A7PjN2vnksxrBzGsL",
  "key23": "4nH7RW7UCTgy3UQLVAahwH9cw7p7g3RRoVaUnX6jr8tRB3wZrm1Y6Lcm1VtRiYe8CzaKGtgzc7n2RmAWq5w2FEXF",
  "key24": "VskfnpY7txgQagzH8kF3fn4bJjibkbks9xDYEv4HpF39bBKFMxX4S5NWtmH1fFZwZ7644r2SMyi55v319pXML5D",
  "key25": "4BfEvCEbCH8FFrotTA8djQ71P6zZYoJRZbe3UiYkiawVVuyitA1KUMadhGxWXaQFtaP1yNbbiKDyhTZo9GTB5Bxg",
  "key26": "3TAvzeBycVJSsxvAiqRGXRfi9D6QVRcSZLzm67PBbvvBhneJ2Ggmxbne3e6yE6ZXUKjwxb4t1yXCm6wYcLxAJoJ6",
  "key27": "3sWFtHGSVVtvmXuGTEnjqbNNFZmaZhK455QSoxGfa6SkyUe4fkyww3KDMUE6Wiif5YiBoX2MPfKBNTFTY32XTSgW",
  "key28": "36zZhD5Ep8XftykCTWCYP57tDbRjtmVbeEdaJPmLn1Gyqx18ogXNYjgCfiDpJvpMwWkVm5g6sScP75WujKJ2Nwoc",
  "key29": "3ziknw1iL1eyBN1uwt29PZ7PdXT7SfqAzKhD6p12UeBDbTytqMBF61NikBhkHvuDCxHmM7HBajJDSniVYSqcqYEW",
  "key30": "32C6X5N3H7sp7EqwHPCU8kR6Entzf48SZqQp88rh2TPHcNxFSvsWywi57cVN1k6RJDxBpdWmQVs79brrd7oEMP1Y",
  "key31": "57N8p2fTqkbBwrqEaqTvEnzmGgyzojHeeTrs1FdkjA6QYYMrsuVu17kwt6RxYCBnku5TZ2a4goPFZNzFj144kJCi",
  "key32": "baUS3ZwUzEjEBNproicfHt4UPMN4nbLXNAR6Y1sfErZidnwGanHKLX5Jk745TDmMsEKRdHQMpSLJZWwe9CSjKdt",
  "key33": "4n8iMsxvX3RbkgiqBFEh2jSD7jNVNhUNSfSwXPUfXEadeKbA1mrwrrMuKFn34vwF1cagbQGkpUWRY2BS8Tvv63wG",
  "key34": "5JPkoDWJg7yggNmArvNT7QQ1Pe1rEfwpyRNa2PHCP77yWxkZGxTCXjxmWuLjM6bvogpKyQJWKsGcjokG4jG8Rref",
  "key35": "4kJgQJdKvX3nV4XZmLeByr4y96TVWJFzaBqJ5PLzTYWnMCN4PQs2cfGGJh9NY32eWwvpPSc7JL2yfmG5KWhtyavt",
  "key36": "4mNpRMEFAH4wAwTPPe7KTSGLEcMpFcfeEePDpferjwraHRFJMhjDApaKTs5EBfoiKbXM1HzoheZDprYBoPwtRbWs",
  "key37": "MLVfu76Gn5Aipek3V6jjGNB1tLCt4gEsq4uqrL7zo8j4M7bjQEgwZ1WWR6kXQotojRRrh4QfbYay2KrxWKVHxUq",
  "key38": "VomdUmKnvKiRT6CmEFCNhvaPCC7fLqvxbPZgyMBdS53ZNbsAd5fYTJUiLmKW2vf3F1kt9Qhzs7CGUL7wVw5TMCp",
  "key39": "6169W3igy9sgTJPCrLVq6nL6Jqn82R95NP4qKXx7Rg1Gne6R4Xos5fCb2tV6KmxHbMXUXdWrTnFohFVuaeUuBqst",
  "key40": "3LNM8LxhdjHbx943LgAZmjgowXoEMBccu7DAb3vmwiyFMcDy4ZXeGxMAZUr6DLndq1Qhc9X3kmEP9Ve5enSxL4zP",
  "key41": "5pCYA2154ERuGVG7mHi7G5YTMzCZ8oEWFQfuoC86jxvB37LYr6Rm5xYN551784RddA3s5PMrD2EmtUXHC6xNNB17",
  "key42": "2uJ9DDuPArhqBjaKwertS5A298GcwAEatNBYrsXp6LeSZxCZ1zHa3nhxfzuLj4m7DRfV4KWLN6iGzvyXAuGEp9Tx",
  "key43": "5ipwMt1VC4jEdEnVsDXfTkaA5FHeTTw58enBEr9j1pzUJ9Q4BKdrW5kzSfZD1Xr7oXXuWSoke3tHu7PFgMunsUxX",
  "key44": "4Kzy3R5L7SJuy2cgTN9hqRtLxGNpGND9C3Yst6ZRxytmZgLWsoTnJFTsP7ZpYZ9U1gbmet7kdjpXQPbuVtvRcvpF",
  "key45": "FvF2PfPyoYszAjJui1Y9MCZoofjxKostNEJeHXDAMd6jBS6QWQ6wxXyGDDcerPaTD7PSJEwiRqwk9537q7NrcrS",
  "key46": "4ZxeYBUJNBEjVTcHmGhAifk1z2oN8fvhAyqad8dWHfuR6SNLXNH2vVBMwQbsCNu4oX6g68C5xcfQhuPrYHSJ5ADZ"
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

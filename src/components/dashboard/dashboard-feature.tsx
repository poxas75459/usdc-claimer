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
    "2phf2hjCfkuD5mHkTcdQnGX8Af8bqPryhjTjwErS6yijqvGXtZXoEVVTEmgP9fKSiaSMMjiPuLa9hHV55mccybQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xnY3PmTwVmqTtRbHj4nGyjdfbYGnHYD1hWzp8spWFbtsdiPJDhDxTmv7CV3XAzP7P94vicb1LnoUwFpPy5CMauw",
  "key1": "2BQJDzd5vgpho6FdagfV55batNkoM3bTjC53h3SsTMW8eHZUdsYyPnkbZW3siMbjDry6Q35mAdiaxhxYp2YMC3wR",
  "key2": "21iuHw6RpgcVu6AvpRAjpsUAK56G8htsSvtyXdvGThGD8fqgszoMKF8yzHPvWFsDXHLfc5vapEKkyQuuqyBcQVe8",
  "key3": "fdzYYTpdhh2BuvprXNGXsdjt5Ut2g5cT2qEToQVnpJdaXhwcJ8ASWLM5bC59LL4vzPSdH67AQsmFi4C25htUT5i",
  "key4": "53erukLeSwaYgStozheSY97zwhX6fpcssafj1ALxa7R6UzD12My7UzCXa4ntUiZMdK4prmdmWPzPEWzCM2HApfro",
  "key5": "4o74rNAWdMUoJ4dPFq9CJUTBL3wdayzuVh4Wyc5jK9dw37YCkTy66bp8asu4qDttSYLR8wjgkRBFaMwM1BDUjBfd",
  "key6": "FaH9u6hiH644cWi3BKKn1mmKbnwmgtjTbBk98Kdexb9niA4Xhuj2GehKjacTfgTCbyHRDRQCxwpzyxVkRaDEpYd",
  "key7": "4tq6RFdnhrbkDQa2tJGzNCKTxUVeJnNduw1ynaa5Z1yQ3EuCK9mkuWNidGbQBHDCGMBjmSyUE9G9BCrCMjV3S57U",
  "key8": "47DxZMWrSAWu4cnRQqoUfdmfVNSAb5LzP7iPgHegeT6tedcadBU1tSZUyVM3cRL4gcB45XiFnFoho9Ez3UjQD5WZ",
  "key9": "5c6SosonJxkcZuqUvicbk58wyVkRcTnGHTr89E2wHcWvUe1KkFRkoxMy1V8HKj6bV3WhdgF5nwpmfhmgwuF5ZvMR",
  "key10": "47e2ZxbNE4j2yNqS6BzvJmCtrPELNDeSbuccJqiodRnQKe7mmnX6bC8VGHH6zjMFgFDQuhtzm2swWbhQVexkMgdV",
  "key11": "5CZYN2ZQDAs4Bwo3p54BuL5WCuEA2ADhUGJd16z2CXpufSUECxWLiuyHBqEsnwXcfFDnMnpKvPE8VXeps4uv1k7Y",
  "key12": "4uiU6U9faWZy4ZLwkuxE334We9HButXPFWAvmghJoHaigCRbePSe1bDS2Tgm1oWLKXTVakpLR2gdRwXchXDGvs64",
  "key13": "xYjfEdAVDf7LXiHbQZdqpKcj4WP8KUT92ecHe2yMwxBnxUNx7xhhVmptcspwU91k4gkgHq8UBPDcKZy9bhk49jq",
  "key14": "2NDBaPZEVT5Shux6aEeaPc3aR2wEP7knUUBftRmVe2wBEvob6XM2zy4y1cx8ruPmGa9sfxgESGtecqtdyxCGhxd6",
  "key15": "27PqoEKEru3PkkZFHxrVgJQG8ALYAYLUSYUNwvDfcGatJ6YQoiywv77mW7PPGkhNrNgAx6du2gms8rCm2R2xVxpn",
  "key16": "59anKBKpqDeKN6K3XGUf2Xvwu9prKzf55VBsUa2kdT93F5Cf6xtuR4F3bJyHnLRivHLQsW4oePyv4AwFRHEdT5cc",
  "key17": "3Bb1hX1bchs3g42yUktq9aVp1gXM8eBtVWFVqHpTCZWC63zqK7wirZjnaZYTcCcrqKVLTru68KkNCmCR55rzPALT",
  "key18": "bJATwLsxL2oLzER2z54RPBf1jzJS7VZJ6asCvRuLMh6VUzw89LtUjiEaBeUJYcGDjY27mCQxFABLcMF89uqf9n9",
  "key19": "4LZmwcnWokpn1UdWVYpGLk58u7LibbPmRpV2wkvt2xc5xLmbWwELgKm8tHtuvQbAmBNoUvw9DSZtZaS86cMUDBTL",
  "key20": "4j9nqnJJtDLsaffFJpfS5xktGZdGjPfbG9sWSBziAEuQsJePMQzZxRDVashppU8Cf3zQ8TPNSoG5aS1Nhxpw7TQU",
  "key21": "4fEQVftcLQ3qdyD6U9LCzyDnpdTMu4vKvVBpebBFLtaGTyNq8yW2mEP8RjFH3LLibqVCJx9fdeRi9KwGs8joCden",
  "key22": "BoPGVfMN3MLA3qRb6vrysd2EfM9iaRqArUSkEZrgkXLeJgM4mJ3LxsNDMiUWLsfV2RTzxumo3bgK5S53eqpEAGN",
  "key23": "5qxUCUm2BETnwPGMWQA7PyYSu5mndd4ZSw3UrNxmdFT3SXcsskeJYCmf3ZrSQCDoB9h4rNUk4U1P18ao7uWJuHmC",
  "key24": "ACAYy6qgZtM9P468zYddkeJyDkJ4HrLVYnE6BCf82PA8YKgJrgKHQ3EjG3mGRmCgghtnv43eg3eHJ91t4gKtGjZ",
  "key25": "5ZZneoqQHtpn7Swd11vpFVkCds95hpCV4uGgMwoNWrpDME9nsptd8hxkpTW1GGKqoWWhyqUqVa5TR6shT76FY5oP",
  "key26": "iKwNueqt51yo7xzaYaVANcxuufvksQfCXcgxbxjQUZm8TZcKZyzxozMUv5cCixdWdmB9ir9c2agUbGvnNuuujrE",
  "key27": "2Xk4tRaSwBaDsuoUaKa2sjkWyAw9cemMSkE2wQDDnLfJK1gXUkc9BYxUi1RYaykUaEiLsgRWcjg9UhnaUL1oDnXt",
  "key28": "4pJiTxhRxcBkknUz1aF43c6H7YLfj1yZ2ovCn8FnYDUYCDzNHWMBpizvFM9oJ9Hq8dW6y76oc1Yx46KMnzXkaxea",
  "key29": "3UmDfSixcaGLBSGp5umeqvNmv9T3Be7YKALGiYqKp7B8MWmUceoFebxrNGRiMwSHx8ciHGg4P5R82qmWT1v6YtTd",
  "key30": "3jPnZGryFTYcTu6DipezWcZDoKLK4ZtjAgF91P9BurPHtdMG6STXLnxgiFSXbg2t8GkWpumY2h5pEZ8jMeKBJT2Y",
  "key31": "4FgtbWQqBdvpTDEGsx6KbL64stCkqWxdWEvV197mta718zcMH48KFgYcZtsUxABkGoAWtiFUhNcMo7d4s7owf76Z",
  "key32": "53TExNvCDhdFkMPYoieEjShkvQZhtZd1MsBWRErPfHL927zZP42j2bQgNFnHCLpiu6dJXcyyvRdFLt2HoknKSor5",
  "key33": "ao6ST7vUsjTk45onYFdkukU7GfUwVdfTKADFbLqF4LVCLjo3jggamXs44FVdmWWnXRfTKLnbQx24wSWKazNqWpj",
  "key34": "2NJh1Br5AP3qnnCSKsf5xFdo7V1ZWWC7Cv4m1vK9So78bvGxm5kDHbkQ7uTTtUoDkbn2FDYVJUZbMMUsXmuU1dB5",
  "key35": "4h5ARZeCEpghWE7bZj6ZD5gY2ea5jMwWQLywFpxbpVowCax7qbEivoQ1t1eoYf8575UeeJ452VMco7hau7c3Hewt",
  "key36": "stfvCoiLEvVHiQoQrwxpMwf2DBSr7C8TDe97K3iBDS9Vsd5f3ThKqE91Qhr5Er2uwiSKCcArwadimixA29U1Phd",
  "key37": "2tMSQYWsb9xBkBCTGK7WzSybG1SMMkFkVZw874Y2YCFvhbwtpdEJvkWRE6s2VorQrRcNv19pNuvH4Dj6X85byuLP",
  "key38": "2D9sipUS2y8xPx1UuNmKJVeKuhwZQG1Svb4Dvog5pTkz5pi5Fb6gi9ZfwG7X2CTA6FgcZBHY73qkTGQZV7189E2z",
  "key39": "5mFBmLJirW4YqqXWsfWgusaj7GEAkWVCvKe2iUxXtA7w3cMwy98geJH5Hob8SxyDfgfhxuZGXNRHvABiCvPy5uCp",
  "key40": "32aawrR8EtMYx7ZwNUjGjDfJSxeMd3DkEd1N5mp88GuddhSu263XW3jKMhoHY17yD6HGouZ6YmF4wERuWXxf7NB3",
  "key41": "5TsNgCgc2KAay2Fd5cMePbLAzNbV2AE1W8DTbhgGpvG6AJsuK471FqzyK3uur42PeW1DstWnQ6UY9qy4vtFxpcy",
  "key42": "5PhqPY1Pduitwkw1QqNgvCkVrufw2x6FHLAaDUHcrxt725jUfGezoe1eB4t8qNfu8vGMerVgoLrr4Fmnk4kRdnuS",
  "key43": "5jvtVpWocm7fHWZWiKBVsrCWYMMPyHHvtf7odVHStu3H8vxAwcnAr6VsbKceUSPwbsRZ4kWZE1wy4b3Q4EPffptA"
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

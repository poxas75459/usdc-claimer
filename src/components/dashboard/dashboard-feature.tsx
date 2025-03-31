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
    "ftak3xsekcx4CE2UxmaY1HGNN9yAGn2F5wEXmNU9dbcdGQ7uTRLs5C5G2zk5pCJ3rswdtP13sTkkJ8V73R1s2if"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gK6YTgQDkCEMt75w89zDz4yBCm7upNHWLoTf54YjKvaM1pDLgWEU4xVGp47UoQNLABUnMhgHNgU9STLkP1SQdbN",
  "key1": "4yuX7nQyYmi8LwHZCNqFLUcmaR6rc3QHYdoLjvcBs8Ayp9k2kGF5H7CG7WEbLs9GNazodrsQGyUfqfCcCCKwyycE",
  "key2": "2KCosc2RRgRUr9Afdo3DUcB2aeo8fmirxTFHVQDLxV3gWk6e98BRLWbWsd4SGfX85SU899kzi5dneP32p4EqsJuB",
  "key3": "2Wy6BzqdoycQXS3z1PVRgowpczpTdgnwpPN7rZ6gZXbTrfNYEZhh83FKmWt48p1VaRinpFY8A4tGisKqQvGHHEop",
  "key4": "3df9QSVmHZm746SBUo9Nc6sc3cRsyMviiJDNUSLmvKMXrswhDRxU21XXgQxvKnyoUGCdDocY3Xz2aQwoE8LVa68C",
  "key5": "2krrEcYdBLLidv91UgwQa3gF7H8jp73EZDUx2snXkEewo1ttVKoKaWLHR82ku461oBxyX5RxvR4vmvgEqQjQmAJa",
  "key6": "39fZzZCeeX8TYu8xvkQVLysGkeUBH7Rq7Y8ABUr9iiFqWEHGNQKM2V4t6vh3e183DPaQe9wR57Zn1taiqhB6vzy",
  "key7": "Lpc7Lv8ZQ7PuZiyZn7k8o3jtdCYpL8YRHd5RqtZ1Ai5XJSxL7YpXki1jEM4VSaZQoCa2nvgj2eaeNJrN984P7ic",
  "key8": "i5FWaBP7UbQMdsEfvxKNWq3PqAsjrQHFkAftQcTesQfpamjn6R5mzxTRKNNeCwMyPhrAs2yNLPKnvn5pPvkiAgD",
  "key9": "4jX5DUFzKoCs2Ro7p7GrkEeJ6Pjyp9JXC2ybZguPCnVRMKpniWQJihiPvt1atBQUfwuCdfuwvUK2B8Yvyw8hAsKo",
  "key10": "2LGvanZ8WmJnEftBL2vWx2VnYQVcGKgWf58Ac2HYKfT8zNk3kR3UqiikwXmPubFcf9P3pG2GFM7dNayBrJH5R9uq",
  "key11": "2kEDcmzjQHUHhJhkXn6bsfq9hMWSiheKGfN5V4tFVNmwY4LcZrYTukCF4DMt376j4k6LEXExnzMHWqTd6HZcdBmC",
  "key12": "3ix7p2zrNfUfdZYFh7i2UywPgXPfFkDC7hitmSRQ3y1wJNbihXqfHJ8ERUtd3bNXRSyWfoMw38Gtehc9ix5GterK",
  "key13": "53NfnPg6JV8kZLE4ztAoskatwcjuEzHH9npjexufat3wwweyKV7vPp39P7bh937GwZiumfVmNiwQQrq9FUgePjs6",
  "key14": "3k51HMYA2KW9EEm8Hkdr72zhSqiVtpBrpnFEYknHWL1mnX6tsazcpb4ppsPW8fmoxdkTNM3MPkLEHSPtnYd2aAbm",
  "key15": "5BsDrX83Nmg6kdpSFayMZCBd3ghcd9YpNNuPn4fcVdoURTX1BPwTGDWvdSpwEknnxQFLnMzp9LHesoB2yFqfcSJP",
  "key16": "5fxsSjHD1zsrPzhHyCdDgttj4CvK7E9onkemBG2BCEQYJ5eK3gn9t2HRc8mJmVVa2KGb6smSm47nUDJcWkjG2va7",
  "key17": "3ds8ep1srtUAZD7kLcAA4Z9JYRueoZkeGhEZ2VxYaW9iTmd93TRgqbWTnxMntn6vHUjxGs2gmLGLZvXzYohYjbFZ",
  "key18": "5um598NiZEdCVm3MBDd5tyBHcVMQm41cxfbTaDV8aJSXmqaB7jjSKBnVRTB9oHcnavLQMrbPqxCqeEysg8pD8VBS",
  "key19": "5iCVHXA3NA5rdbzrXjhxh3MBzorn3c6rnKLDJUPexz3jx4m6pk2x2EkaKn5vopaUK6kLA9ReqNUE2yG37oMbcpRK",
  "key20": "4xmMPPJcieRzM6gv8qPF4Tba8hD9QQ9BpJBjnCRpTmn1qrDGdUxg72d4wbhbcQbv9hBXddGcMzmViuvUgReXwXu2",
  "key21": "uDTrsg6X5NA67QLExuSBEtuXsoCpwRKEvjqFniwvanJsk32cbsEQNYceipHCxJGUoZHvZ7UAiZRq3huUoSj2zVU",
  "key22": "icbhYq7Px6h9DLVtwGmwQVLerwTfUSMhppMz9H4STAjiZYQsi8WpFV7E976P9txoW9FRcTQ5hdaQvxvMewpdfcE",
  "key23": "46XPLE2T8NMV51xsi9F9XygjVggBhGixzLeCEvx7qaZBgcEC1S1ZSD16bzBUmWueiP1NM5omUiKbkNxqTD3VELMP",
  "key24": "4xctjHwRvH8wvzrUtgdx9ZQhDuqsaj4CTLswbzi2PMQ2cmzGZS1PZ7Pj44cTemJJuV64gnn2UrB5E3LT42QipBFT",
  "key25": "4Q7fkJKafafe5Q1tF55R76PeiD85y1SQ2HRz5bPwn63y77MWzfGto8Wxvmp7sH76kEnvMtFWBGsv1938MZH67V6e",
  "key26": "5TQkgn5SYkA7x7tFYTM8MnahqsZWUhRXeBsJ5usZRGMs87HGzhaAJUD8Yub3dpyJ47vRxWkbXLXWVELe2V9cg1FU",
  "key27": "2rkFJWXoct9JG9qDvkFjzuVacBJBWYwGGcu7wguv6tNiyJfwKcRVfRg2n9y5vGbKMkgLRHJG2AqpNzw8DEPr5jgg",
  "key28": "645B6QtzhiFDpGDLqZP72yS1t58X6cJhxPjb6UW1sgcAwwDngfKrjMRMnnCLAVaw4ZC1aR5edZUYCg47zTpdu1nw",
  "key29": "5wrigU8khhEbYf9u5kyeojYpXEzjd1kTHT6LnJDtdmmwLTe5pn8ATEkBUzqphEMnbnZG2gc4E6NWVNixdr3SKkuL",
  "key30": "24owqN8bYP2448xQsGyTUGFwH12b2cmJDbwAsapcvUf538YQM59EYxrdD5cTgWuasovKrg2AU8LeqfDxtBjHFQN2",
  "key31": "5JvurEoiGWiLPeq12NVyMUQrPEuxs3moX9yXB5C5eJUGBVKhMMkoSyGk2QCtMbRGeQf3kAWfH72H1BzF78acD1HH",
  "key32": "3jLUoMrqKodwo4veQ8ooT1CTivmjeKqax9wsNtpWykfCXbRdjo2N6vPtoYUPvrZVweA8nut5qX4ZDVi18haifLt5",
  "key33": "3eucHUHKVVJssfcR9zRq9Z6TVhyWRkqFyiVxo5xzCV1MF9nqm3AGu7RokDYqkQNXtszDkvVtt6rBzhmFWFhS6rbG",
  "key34": "5MzPc8CDoZ1c5MbVNVszJzozuMcsUSNwE8A65tAqteANyByw2EXFDE5S1CzLrxCDj7G94pCyGswgb3x3JLkhz2XH",
  "key35": "3TscSDUnmHEydBUp1WVKX4wFYTHmTbGzTCBGe1A3qGyCPJuparW2Ve7muyqYKm25pA2sQsqXNLZEA4Vi4aZM8QGy",
  "key36": "26i3E1p6Sr8C6iKqmx35GMcUKYDnwuXcF7NnaTdVC6cJUcZVmuacKp6DXL7zpZxDwPUWzzPkWaGV9QPV6dbaDLTc",
  "key37": "53oqVpoZ1Da63ddZXo8yF9G6CfxFY4UmvNLkhDTajXeX3ZHKKCDXzDgVnGT9pXvFS71pV4nDhadWEJtaQXNpBEkJ"
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

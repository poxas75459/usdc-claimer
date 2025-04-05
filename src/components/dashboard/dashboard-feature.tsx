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
    "mhd69UFYAg78m9dwvBWwpP8aJCW39uxeGfrpehFxwgLVdiVBf2pbT3dYjpTs5qAYxLwW7snwxviBdpbTV8w5YjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afXBgqSv6DyMXL6W1BmAinvpwL3MbCY4e2LQ4x4VLkzNPfZxMZbi3Kux3snBFu4eS3EvgckdWKCfpproCSe69Kt",
  "key1": "SPueX9fEG8RWU2eSLRBadMEmimmCUcRuYfAGv9cbrrNMWkBcE37GinRESABna4aDtNJm1EgqJc8wNfMP915aQQA",
  "key2": "2oKGpeJxLYyCgpn72H5nz6oksv1Sf82BuCRnNhx1QaZYhppqAhqVucG1Y8Kn3YC7jZ1sQAZRLHn451j9pNofYUUY",
  "key3": "4Bm5TfaWv2yyNyj5qLt9Nj7Bhi1QYiRWQUK2TWVxpitf7T6KKEz1ogwPydWH4cPdoMmbmXtLnkzxVLpkY6ZuVWZR",
  "key4": "2dZCD7EXLfLs5d7sz3Et1wvcUNcQDVzQ3V6rYVhrMuA88hHTQkGUGMviZbyMcY9qvYULe9kKQKoostHPFgHcD9HU",
  "key5": "2yV2MnZVTbt2QRr3hxunTVJ8cv7cqicr7pnUeXvNU5yeuUuYcyKYiLhb8dMm8W8p2gL2VY7q7GkH8B3bgiVxM1cy",
  "key6": "41qSS6vEhvb3Ddg8MUHRCX5Ca2FHutGbHmh1zW26H9Y4nQHmUeDY8dngpX6kHHTMzEkpR4hEPaXCbsEG4v5oGSPz",
  "key7": "5FEVhyHjyQ5o4AJMtZAJPufdYUjJoQUUnH2eg6xKjv7VDdbZ7A3CrnX7MQvwURLfWo71PicuGy5YpxXm4WfwYi6V",
  "key8": "5aavYMKbNNr6sa9qkpdrPjBbXg488gjhkskQ7CeSJTAGxH2f15R9tL5mX68RFUP8w4PuxU4HHKgWQ4s3bKPkhsDB",
  "key9": "543eVCp4McvyEVdAaAxTAF8CNpPMyb5rPLDs8RkhM7K7yRUEfpdLJbkHF5KrrpMK1uNG3qk7eUY7AgLND19Fe6jF",
  "key10": "guNR2A52WsEm29mG13oDcaa1CxkMWA5uMEx2bExSKA5DfXaLf5YwTCBNWBAbVZKArvLECPopnoYGG9DehvxnPfU",
  "key11": "2ZqEW3n7iWMbUPVencKohuWH6WMzRhG5usNwcXfdm5eLSgkHtYWnAx2TAkNf4Ta2opV1ySx2ErDG37hvjVjNrC1H",
  "key12": "38dYa9fgm5rJa6YX5PFGwX5PHxy1eFbVqFs4U7pYqkggD4S6ySdkTq1Hg9djfqB5mpYLn855FVbNa9jAiwzft52n",
  "key13": "4ofwBJEg3ynhYrSgQfNN2DnMkvN8gyK9g1zu8eGqoLx6Ldrai4YJEZNs5xPQGFkF1U1dUUmhzdt863gTWnytV69G",
  "key14": "2uithxeoPjbVmSFYA2HriD1Fs2cx7Kfpn1pmZyaiZm4FwU2mZJKyt3MnC4gvVUxpxZjxQ5W4dj8kjJT6xHpLSPja",
  "key15": "5TbxUxwZcscGLBjGAW6SsuGikSSy5YBUtP3XBYcDrSWr261NpQR9qZSKWwmCJRRrpMvPnhR1U3NBkjGdqWTBpKrg",
  "key16": "27497HYNvxipCvqMUq9PsmuFStU5crmnCgVM96QCNJ2GZzUQ7nzvq9mtNJ9chUVrq4DBB72yooBdFUK8dr5mNX8t",
  "key17": "4ZL9mXbr6DP5KFtjEuz288bjPbY1scnUwxEJEZDj4MD1bF7jEDjLNd2Cm3nSCx7aXejNKTL9ERaeC7NUFrdqXwSA",
  "key18": "3KLZfafqkuWpRbfmBQnhYo6oMtZfbyXM1DJqTPiX4giTgBQYCWpRnrYLW5XQAKVgCFmBoD6VRoH8hkKqFw47F85M",
  "key19": "3nxtpngb9rN6ot8CnUuFASiEFrEuuBwmsmiyWufLq3DNTkynpgTw4bJDNUvTpHvQfKhscjVv1yKSkXLCGtFv4nos",
  "key20": "2G6EKBqJwCcQkUmdXtYA9wQ3tD55TxYnUTJuNiGvR2iDnJFArGgiDtuApWMX3Vc2pM5u1yhL4ssrP44dCafFfYBZ",
  "key21": "5PwA8pnxjp3eYShponwGDybjqbDoKDqwqgMK1ZPtFrDP21q6vrv6TpDLbZdQ73ftxWdxKDp8utBGySn6yYGQ8fNd",
  "key22": "5nwvr8HyWKf59BJ5xAXPHUUzMa33dBhAst1NUp7W4efdcD7Hy9NZ2Endb8Z4LAPvvLiNe4jpMyA194QfDv9ucti3",
  "key23": "4fFpu5QLGgYmKNmyGHBauumWgjyscJjTGTVCWWxigWn1yDvizqHPMZGQS15exAKFjy9nUWXb9TymwPtRLbxAwmtw",
  "key24": "tT1NN8tRSC5PVoSxCJbw7ZPhH9ffAPo5QSwAJWUjGsuY6iDX5g5cFkUDVtcT4JjtmS6cg9dm3NxrPZ1986ohCeu",
  "key25": "3s8mtYp5bpv5GyD5nXcrTmzFRyFALJ5G6eoHecqpqQYn5g1P46SREiTpSLiHjq3VC5AseadXodtsQ335c8iD2UEo",
  "key26": "4zpQ3kw5GMmeh8QJu7cfvYg6DmrP388waf1K5JVWz7QD3byYACP3Rq3YygTNAQ6zMtgwT7k2x84U5VvQTFRP6AAr",
  "key27": "66b4RzNdG5nZQgS6drRjPJBkeMJFNsLY6hfkWW5Cb3oeBmWLgoPakanX4j21Ro39pB9wSNnS5muWdK1afiJFoDcZ",
  "key28": "2ovxwQBpWnRw4CHFqs3uk1C2NCxLhkzf9jAWsUEBzfuh8U5oRDRWpoPTCSMwQX9FbEKjrYbrz5zvbvMWepNmjPWF",
  "key29": "VLjg37hDkdbZp2g4FTkRhaw8hr6SjNJrjuotzC3Fuk9vV2TwuEsWV2M4tgd4fcLpTJQ3wxfSQJHqYifcBFPmw2E",
  "key30": "3z6FCmAQ2eyvAw7ZU4oFVttmSjHnb3znhuEmboA1nvoePm3Q1vT8okT5MZwdyeiYH1KTQ81o2HuGPkeGYCiUXz9f",
  "key31": "4ChzMXQAgytgBcfbwNyRTrXM8F2LCxub2eaBANJUkv4LBEHbQSg9iE3fKEoT2bbeySVMvKM1skVEEqkUeU4hpX7X",
  "key32": "5d4gDaHUN1V7XrBn1CDEF9SPiB59jwY1yiiEKVaUrc6EwjuMcdNuq3T9oWdptJkPHgz4Uq7NSRKQoFQWPBzNvDZX",
  "key33": "3x6FiA4vgP2MwCfr8J4VF4Y9VnCaiec6WYqBRHWNtjHBTEBg3y4yuvXGRZXR8Scg5Vmv6wQxAcj3wQ2cdQq1swKf",
  "key34": "5YgqZMJoYuGQ5DJUDRZm7bdpshumdo8eKHYYvuhbhMua3iU74MMixbBBAcdSnfJdU8rewQL94uSCPZdShk8dQKT2",
  "key35": "31MvRaMwDJmHVD8eZf7mPUPiQBzRrbyZ319iy5eFZs4NdC1hJgcEL4m83xhaLrdCMm2UorLZVEoiT7qSDDBwRUSn",
  "key36": "QvDuAhVYaQsFme168vCwaRgNjQmt86QrUKVzjKPHJgcywGNx8CUHuVkpPDqpBVWafgE6iTkgDUiGZjBzNo73MbG",
  "key37": "4kZpoKXiXWQ2jK82ZwijWnYq1WiJriDUHvXjBaB88GS5a9nmRGpmKeyK1djVeC3iVBwHtgSFCM1iykjqPtjYnuMT",
  "key38": "ShsYPjXEK7cvBNvwYZ36sgmz3M7BZVvKeuJEKGTJ1WbwxeJeo4q433ptHeWgJv37kWFTkqgnhvUpC1ckdPQhGub",
  "key39": "4WJz5ebwavsLYEXMm2fPkz2uWVS2q7g9GU6GyRF5ZRuGraPVN1FbUFTV9oCsn4M6dXwyz31ubJxW27Wvto2krPGr",
  "key40": "5tUk6g3Vb78eFnULziXRKckAUhQDf2yrkUKrgEE1fG1qaVzwcRbshf8i7KnRTCBbGChpYJCTzA6zLG1gxc8Xt6Gj",
  "key41": "wmj4CpKpcvUNYtCuvDw4u3mqsCdbz4aPWHP9wP2WJneb9JmVV4MfgiVcH2GJX7CfAKJ5NEmCuuwrDETAd7wLDP2",
  "key42": "C3DvvSEDdce3vQb2taYGSYoX156nLRCCCsQ9Kfk9rNeqH5X74yqEv75KKHRmtC9qDNkNmjGxHzbka7KJSw8VWTk"
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

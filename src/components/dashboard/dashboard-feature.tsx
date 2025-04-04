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
    "2CU5xVWGoUvMmD6bsdQz9VXjYy7fZv4idWh6Kw3M7SMZK6UXPE6jXBysF8SpsGo7zvAJLVYd9qx6my6co4eo6hZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddQ1wYj2idr3orRVwPF8wVj6CixjbprkufQKAzfpG4ZTLs68Fkr5fTM9hm4592Rw1yxtd3qhpYCQkU5YhtxEyhe",
  "key1": "2P2vR5hMRRLisVqbd7wsoEWYMGZT2GZTDz1dtpfBSFA8NVWhAmy8P7rBiU8AgxbSXHyBVHqwPjymhDRd42W9tT7r",
  "key2": "2uHH2daEnKwkMFbxWFTihe4jtQSLyGNNVnvvwR6DBUS5mxHpQTeZD5WriC2vgPPBXzXFuvRHFHfjt4gyabkZZ9Gi",
  "key3": "3LEnBo3Co9pwNxFAhG21BqyDFBtSeqjSPHVncJe5Mi8XQBd96rQLEgcfwh7rFQTCWYXveeUChoiqdxRaMd8cXs59",
  "key4": "5LFZ7fFNpQMNKSgNvKSdEgW4T1LCH97qai43z3zVquYETTtRxepi36A3ZvQhen4eHgetVaSZiEGBVkh98Y64Bu6z",
  "key5": "5jSP2MesTvgCVzoDfoPxgMHHaLiEc4quTfqrJedKg38YkZYCzKkweyKTZD5GqgiHzm9LcSep5RZoeRPfGWev2Z8M",
  "key6": "32U55w1FX96xzhUheFh8jiPZsEcsh8tBAJ7n1Dyxdu3wTLNDYD18eDfrL5PPygrELz6r7JsSjYMnYtugmYBRENHB",
  "key7": "2Xc2qXegPhaAENE42PF5Jk1bgNVDc2BaZ9ySX1EqutF44J2XrXs6Y4M3C5RLxr9b9yo6WPuUVtigy5FNu1up7yCv",
  "key8": "4En1kW3dnfKk44coRmoDXoVrHkcECzK3imCFLkd3ggGGTbDSbG5XatTpwTLMy1L4wwkG6uF6LjbGkmtCo5VgKrgg",
  "key9": "2voyRVqegw4eGi5j4LCy1t3TMePyytrWyeh69sTM49dxCnMBtAmT7ixmoEKrXaoaPNCuwLaiM9vaFtKws7XsNGhb",
  "key10": "2jJiSiV4giFCKXnF59VuWWSNT9E9rpjkShJsTV2rRdYFBNCExietms5nHBxUi6MAhRGZEa8qSxchwtDohQS2r5fa",
  "key11": "22yfTtHFA58uvz87hDoff697HU6xwgckA7dgSKLUQp3jJUVot9J2FGuPTLYhK6UJvDuL5Pdpjbqbfwt9fSJkowis",
  "key12": "3cR6vAiVuniQEgRE162npaATBhKEoHkf6sCYFqnkqpBs5kZNfXPi4meFwZttPmqjY1RERXtkBT7BbotGuHt46HVu",
  "key13": "44i3QD6uc3w5zX821qguxVh5iTUycEcV1mRxm2R3k8V8iLRAHjUYSERewakZc65PbjXR5FsLzv9PEwJt3hAY4tf5",
  "key14": "2vDc2FJhTVJnHyVZXaVHsmfjLouNHbwBUoLL5J6HfrGnjzgvSAJzuh1bujCx3KyV42ZKPvuupX8TZcv4gRTZ6MfM",
  "key15": "5iW4gwpAstZivserexd1mEAJPNKeE6U98WLqX4MfR6KEpeALXRETHa1vVGZY2eX1ioMw8z3tfUggZAdeyo3w1KmU",
  "key16": "4jezGi7Ujws5LaJczijDEjajmPgjg96uwGXiT2Bu9Xo1htbep7hnKPYwBLe8svuiR7URMFJYxaSAyUx87h5U9jYP",
  "key17": "2pntedmXJ4mVw2psyvHS8VXXJmiZRAbevwpfcKFM3B9WZTfdNqnEM8Sht7CbEDpdhibphDP2WgKuHxy7xsZhtZEm",
  "key18": "6kt2mJuyBo3pxy5VRk2kD5R4hjrrUVv4PshJDX9QSAafUPye6hjAN2XnDJV33Ym1dT7S9oDwytc3K4tHxm2FBo6",
  "key19": "5jytmbpD6MsCAazgBjYLoiVXPX3mSvpaezfgRxywSPmcjzvJ26JAPTto2k4HT35bShoB4bbjh3j2zRoW7p5zL3gm",
  "key20": "KUZCR4D8ZTpZ4HGv8wx65W9CpNksbHmTD9FFcMiDenCJ3DN5Bmv88ZNZ9KaxxePrhuiNqGUy3rQVesSpdp2SPVE",
  "key21": "2FNFDRrXrM28Jho2E3Sp1pYe3cJTEaXrHBnq9oCHceyeAfTX8EvBGcxo56naGqBpWszXraJbvpV9Cs2SdfeWg8pi",
  "key22": "cgryssaCxuk1qV5RuennVAaJgCAvBAyS5eC3HJjkGw1KspoUmgvdT5MsSt8ZjCUsMtEaH2f6Mg3fmdT4Q5Fmqqe",
  "key23": "3VhZs3cJfEedcvp1vycB2YRZzstVQ67zvnp4YDVxWzvyTXH2EEq96RhQVZXXoww1De69AK2RWFyWoL4CjybFDVZP",
  "key24": "kYchXxCz3Qkumz1pKd1hNVGMj57yTVPzfkALZFHw3UMYTgvSXqGcj6LpknscoYLKMeWJm6M2yyxWQHhuvzGrZtz",
  "key25": "8ViJLeQdw9Doc4t67n794hFfFXqWvhq8caMhbHdqXVox31FgSUqSUCAeKbVUvYGJNZ35aX5Z7dzMa8uvgoGuabU",
  "key26": "RXuVvMW66AA4WzqA7VRWcxUhMr6mzMWNU3wvRpfyqHMaNufW141tDJXXJ4wGE9HKa6L73qRyohTYe8Bu7Ga8QL3",
  "key27": "2ABki6X6Jriu2LsmwERjSUUoMEUz4K7corPoJj6vZkiaSG1DAhhCVigvg4ygrSiVCTTgMCFHh8bXXUhi5ST9Eqsw",
  "key28": "222TDjtX3HXyEHrQL9wkgeeCFAh9rnpkDSA4qZCp74aesF4gXoDCDWkL4NY4nfgAGi4KcDdUA2XCZigE2b2FzFoD",
  "key29": "2yVmW5Jv28wdG3p514egQVfoJ2TQNNBs3wBt27kXZCfbGbucwqZgKaJJGCgDfD5x3xvYBQzRLApNYF3KjTnbvsnD",
  "key30": "5BEXtAaXtKtAug5K9hnViyUxwpNmVzPgEL86wisgt4mFAndPpXzUfMRRfLqg9CaMTj5w4qcL8UMe2eMjLSe6dcDR",
  "key31": "zPgWtBuG8QF6cVdMsaAMQi9g7aEWUDezTKvvkqaJTHtgcyLhPTcUPP3BpB3ERaf6zCiBzT2xm3Z7DYywhJCymmq",
  "key32": "3SK17Tbd8tvYpTeoJ3NNE11X29SfwVtEGbEfMSQHBDHE5RuY8Jzy4wQFSXxk5ScP4ULQ1uCNodgt4W7g6GNoEiCN",
  "key33": "9JuWVtBqxes37m5omU8o1QccpXbYfTARPRnDUEE47emjsCKBpufC2EvNxLykk5p3YPeepJ6qrfvbKXo6RVm8K1F",
  "key34": "5VeEMjDgw99pWAybXTJzo7PeNcZko53hVTvzHMwRrvx3fZp3ZsZ5MEL9SswhzY52tnpbVFx9jo5BKYNnsESpvaXc"
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

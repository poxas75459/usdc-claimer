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
    "3qNhDmwo3KLBshsR5cDx5KWtLrfj1K9E6Fv58TMQJ4dGoEpsjuCYh4N2y6uQGhhQscDMxuqf7PwzFmWs8FCbjoAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "baaXbhza5rVC1EKYiqWSaRekUQcAGG6QiJ1gojySj21hDtakQsN4YPhKeSkXdDhMNBLuBoXbkMRVgiQnxJzkGd1",
  "key1": "3n9hhCS96vvU2ukgzwv76WTY77toe7K4hgg1qAQkZjg8iDg8JFyvA7tNpWSk2vnWLiJQBqH2AcYNP4Y6P1qD2DwG",
  "key2": "3RNnDUNnfHhZMikLMqtu9hZYDfF5dnhYhVZdxJNCdmjnqtHuD1dPUuKg9sFWk8WDgD5paYtQR4aqCiZeZ2MTdG39",
  "key3": "swJnczoQpAcfGNgkh2m8BDj6VcyN8weaKbLtdCcDX6axu22yVgG11PNwsBBnGnaX8DY3pu232seYB6FsH9GAWfP",
  "key4": "2ZZYPVRAccJcTyHsY8pC9bdxawnNQfeCWALDPr6yPARxnDcGppa7pbbwCRaHE6DHs34PbmTxBsPooGX8gWtJJ5Az",
  "key5": "hXH6stoVkzBLyTXGjD98HEF2Aft5JzE4ftDVdMDtThQpYmrBFnrHA9jK12BtV5P5e9ijMHxRXh27XNMwdn5s4Dk",
  "key6": "5wPVSyBB797CAJAN48LM1EAEZ42qtD49Kcx789FBcUAJzb8eeGfunoryJDsejDqnjd1PokXQvytp2xmCdftyf7qN",
  "key7": "f8saoVWTyaA8jUm7TJSntgM7Da9G8r29ySQVyMEZSRWtZ4oxtQ86739sziHqSZXn4FvJq58DNjnhct4UEetPFaK",
  "key8": "5MqZaQcJLSkFXNR5wRgtxFYeqYTRTjxpYRxaT7YSMLrEbhv6FSYV4HUZgfcWPLDLqQoVa8RYXNVTYkBQ4v4rmQLf",
  "key9": "3S8dSaVX3Nm3dHqnG7mFgAC3EFYMAimReGK7wcCxFBFygthiaqFTNQhoBPRYDQCSX7RdU54nZo5CGTMy6CyxBFbq",
  "key10": "5nnLxa1M4mqbp3WHU365vtzZhqVtixGDAYbgdUmiaeWTg86tQFKCtzrsZd3LGrwhe6G7uHzbQctrnumedQ5CWDGg",
  "key11": "2ThUBmQf9mFyVAi9giYt6yEL2z5t7cq1smUcLRTLjqB4p7KH2kgPNPRnRueomYZHzXxfQeWhgbMcJwW5fvinmciT",
  "key12": "AzLarVJiUCZiikqT94fkAYvJJZyTcHpmQQZnH971n3gFZV8uyPMdVeVH7Kc3p7P6iGh9Ttsg262wpa5Vt8YPLRc",
  "key13": "9yG4SgwXb5XQ3f3wX9iMA4awyxbEeLBFpdzBsc53ZqENg2zRMUcnrxWYcUa5NoPuAvpTco6qrRqYFQ1FRU2cGrU",
  "key14": "4N2kAKJ6a4hiFgX2qNAGpDiU4WPMfwM4bjQdgcS1DNuSQWrUP7GEA3dnoxusVXpdvMH7go8UjEEYskDRBJr8DFwB",
  "key15": "3uFsifSLCBZk6K4xbmMVpgg3NPC3StNJNcokgdpmht7YPxE5TFSnZK763cSfyv7aKyDVpXN2uTm4GEAThTNEfpMK",
  "key16": "2YnV2HCQfzPRSpk4t3oQmgtVr6z8SrnNcPcNCEVa51LswJ2LtwwbkvR97oQuyEw7XXGyhHJQVSJs9NQYpJRR4Yw6",
  "key17": "4BTxsV3jJtASz6MP1C2Y8J7CD5WzPvxVLff8KHMvjbZZbhqLopEunfEWeQvvHUoND25BKEHK8P44P3iZpzcEBnmu",
  "key18": "49qX56hs5uFJDpxLoN56nYrbzDDyMdfuxnH7VFDWUs3fpLGNVrCHzz4j1jvcAqkJvSUFjawSB2LtQ3io3Kw8aYjZ",
  "key19": "4mt1KkKUV39A3tGAwPPBvhdLfMVGpToSf2PTiZwqPi2pRYggEayrHmRdExPCTvTXobeJWLaWkpgjMehPR4WU4Tbe",
  "key20": "62FfwrAyJuQYXxe7gsBUWGj1FLcbzWQBrL5WK4WpDvunpVYeemp3vnhoF3JwKNWfzY24K7fKEffi7Z9EftrHFfqB",
  "key21": "wLnf6sLKJ8jUcXep7cuqf8Cm17yzsdFgi2zwqSShqZ4WoAdyrGHeQPwEEt2qYboafKEME5t5XXiR16E67yrQoYq",
  "key22": "54JtD9eu3v2EVqTRiydNNWgAUMrtXUPj2f8L1sHSJnzsBmqvdzafGZypEkWhyUe5JiEnfQeCKG6H69Geanq7wFaX",
  "key23": "4XwDKuSaJZsjEs4qkzdcgBUkA87uCfcps7AaD922qbn41ockVKuEmMWBirQwfTAqxna4Byr6GknBJkaVbzJCNcu7",
  "key24": "5CwVvXsT7Fw4XH69YgkaeGBCdX5SWnsfrF2eG7G28JCKTgXMcuGMVn4LUUWXKsg4djSE695Y7YUmdgn7Asy895J",
  "key25": "4Qyq41VnQtkoGWrpEkaFwYLkFuBt23rxuRMPf3oubhEQSgsDZz4pRkTziKaCqQFd3uwkpxodZxtMQF7Kq4sB1PV9",
  "key26": "PuXCKi5xrCc6nxqAWYKFbweS2SWKBd8LRtWgpzURq7N26o7tE3wh8HMCHWF5Hjq7wq4VsKTmtajKmcmQVmawemN",
  "key27": "4fuis6PhxMJ5kDPdVoYg1z2hLWZ7NNdijSAZb8PMUanqfpEmxEJK4Uebq8GeXyDK1mmtcjX8d2Zof6uMZdR3dH7n",
  "key28": "2WEDR2p36jWJJ2oqijjXPnR7TFBtCVaMgoPfxHS9oSxZxk41J5RALuZ1mpX7ob1vfXSqYBzbbWkrWFXjSRRMi8SA",
  "key29": "5njP7SyzYzUJDR6FdGSputw5UeX393FX3Fj9iuhWQWWhDUDj2iWVyHwjHrGVS9BZGjFDCayTKde9DNyUc4ACevML",
  "key30": "26eat5u2fcm4GVCaxmg6kBLJowokbXaNeZKLad1P8JsWVbvgadSvdu6kEr8eWFMViCue3aCzFQY1WB1rpPjUUxkJ",
  "key31": "3CgTbt9avawuZdZZrpyCHYyf5J5QTfDoTsaPXk6wbkJowwKA5z72gT91WhK5NkSueugX4LVNf8nBt1NSYKJ8TVk3",
  "key32": "4Qez9JDfHyBrQ957eqnFwGt197DmBavghmtE1UxpQHm2ybrThjEedB5hKnUU5semNDhuAr98cfFjRanBeBWGZdZi",
  "key33": "3rcbeXrmVvfiFBgioqio1e4tdAmiC7gjGo27q7jKREvfpU6W6AmgKmtioi5Lmo2QxVgHJcpFCfB1vaqSRbtorCqc"
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

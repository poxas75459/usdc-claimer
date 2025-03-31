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
    "DY4bv5zFdhLX6gKiSabCiNbztcwda6untwT4fMiuPCY27JgHbt17JhcYVV4yiTAgDtYJTmPnaHseCWNJkCuMrTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jadTz6M9U6399B11Ui1gEMjfAkU7DrGisy17beqLfCZBSrwedtcWsgcpC4aH93GYEuwXTU6DrLTYUPXLVup9hA",
  "key1": "3sPTraFdUik5AfjtbH1dR7eZBdWVzZbKmBHeJnaJMaC8gv1SNrcT1uUC8Eriz3i3hA9bNcFCeb9oTxQquLvYpq4U",
  "key2": "5k5wamh9jMrjpdWwCcAmRgfBM2iSS6LgfqF1G3C9VA1w9XxpbnMYue3DciaeA3rhVvc8W5d9xUaMuJxrBXGJysfB",
  "key3": "cP8BBf2aLkspbJ9AmMsmuBtc9xczYJwMAxUqj6YUa43zBzn5ukzgbcsJRh1t6WN5d2UUB6v4PbnNh7gp6oNDh3v",
  "key4": "2p7E9ZL54Jfj5ZLpoVmaxT9djqwWee77xCCq9LVvKbNxeBYomYoKPWEHjZxKk9yf6ZktPuisphuNWXw8LQewwDxS",
  "key5": "29qdMQeoMWnAm4XhZhrZ2o2yfxbWYCsekVU1K3PcP4gWzePWvKrd2qgrSWfWWRdKJQZFBJfBzf7R9JKd3zqt6kBF",
  "key6": "2z8n7tPyiRdDuH2g1j6VZcmzMCgYBDoavUyyRSGhci9aGLzyHn5f8QnEEGP12NriuwEFdJnK1d3dmNCYfEZe68jB",
  "key7": "2gTUarftSw5pC87hVYYaemDA9JpL9TdkbQdsvbfWJh3gjnJCT1GaCifmkKbq3gshTs3c5SLAnsWE7vfRxD72rL7h",
  "key8": "2z8PVFngVn5vDNRGj2k5Ax4iMPf4Tp2vn584fi9Pxww9VrNwo8sGfuVpcCTiKMjyrprtjDqzPH2H47Ex8XA6hhFb",
  "key9": "3AknssWXN56tP3tDXrFQfdjdPABH1AAVLsoqoWyrGFxfifzf41hyqTXdwg7wF531ngWeYFYVG8QsNQRtAS33PYzJ",
  "key10": "4YekQRKrrQxSG5r2cWoRz9wVUF3RRXqkPtdWozpkRcEYBBRyRPuYcbZaxqrmEaTSq4CyJJEYaCT6hocgT8oX3upg",
  "key11": "4hv5oGWubcKETffXEFxSmHv19ccUdoMjNrxP934Kcf5SjUFK5YtEsbiyu4Q13cME5EGBhQAngwsGihZBfg8k5bmc",
  "key12": "2G4FKy2m5UE3RXg1QpszvwcwmKsCcHNEbiauAaYQ17p22CdFbvqkR2fgoiuT884BCk6gvmWj4RXLYfLTFfSKkvdQ",
  "key13": "668ffCEAurDDpCAgpKEWrLTg8DmRAr1RiZoSdKd1Eq48BN9pKmFokzsm5NpnnL9D1Gu4e7Qeie488niy3Grq5dD5",
  "key14": "47e13k91EbjAp1ZXWRv4cUGxtFgozySdrZzjA9NYFCcVU2EV95DLRz4YXYGjU6ib1niUJyh4HVoikqVt9tS9i8U8",
  "key15": "2rzdR3XLCmtLNmLUvyV2dcHfJYiJKhyJ9ghTmEECNn4Ub8kx6h8eRJM9557wXMX78qEZDegNAK9BNx5SNGkxtrdw",
  "key16": "4ufP77TxzuVeB5KVJuLV98WPU7rbhfyDrCsbxoWMw2nWAXeHQc26LKau4ZV94bAbZkro87N8czgE7Sb7TBULUeY8",
  "key17": "g81kjaGxhwecdmTwXf4UPw6jQucUVd9fdxZPEPV4RjgRtgHwhKJmo1MErzJ9BqcLrBMh6mVUZyf5hHk45LpyKVU",
  "key18": "2EMCRq1nnJ6PPSp5J9svAAgTpAWhCoEkZPxXSFJvJLQps3zAF72afkTJRwEN2XXb4nffu7emMDYCy1FxmjWLJSpe",
  "key19": "61F2LEumHZVeFw2hiB1VxZMNinTQdFRBg8pHdMdM4acq9pN6VRWbDzNi9LxCAdy9yvTNJLEUjkRSm8NXj29egHGd",
  "key20": "54fj5dkvKUkzTpEAn6xkzoXTp1H2fNibT7yKnkfXQrsfXRCYVCCfBK6ziskxK64QG51q7hRFDcL8ymDHXRwwBe63",
  "key21": "fcUagVLfgvRjEvBvarFKx7QmASNNmoHTnPznSJ2uLsGW6UWjryiVXLks8ooL8h7u8fyysQ4kdkzoZ291ne3McG8",
  "key22": "379PRbrNQ6vSkB67SBymu9buPDfrBWV95Eicg2vHKJiajinzm1ZSvnGLNAm2gBbXt5s2vqmm8ee9Y7Z62g5e9ebN",
  "key23": "QbpggtpHaGPpH5zv9e15YXQza5n3kNLVC8W5pZuE6BiMEBoHe7HLaToKHNiGksbZdxhVJtShsW5LJ2xgKSX4Yy2",
  "key24": "6AueVsTGNcPyqhrxwQjLUQbFn34Q52XG7YmWp5ASqX2wfQqs35xQXdftyp2ZHaw5qi95GrKjBSKbp6vM7Lfvmo5",
  "key25": "5cRGqZP3bWhHPHfAdSSs9PhzAALNqx4C9F9mjWHzgywsxvzhnCVMy8n9TjmyrzL1QrmJrJ7LhFi9cMug45pY9Q34",
  "key26": "5gTXTZba9o1N8mpipQ2Wud7DJRFTM8mpJhp5XC5Fr5BgeeHRfb9y8k9FxwNqQZ6kwWRneeHczqTGwa9F2jiZ262d",
  "key27": "jsZwwa4gsEpnZZLyEdT2HBbdMP2qZQiiDJiGGF7N3CBigBvGxTaafPxzhAWbtAnABaopCck3FMXuNrBCNTbG8B6",
  "key28": "3e5YdUNDfBqUv3dQpSCqgyFmS6CWa7ggdzxW6jP9xsjfhv6xDBpF2ouBQAronShYR4UcdFAZUbPoVy4Z7M6GdfRG",
  "key29": "foFbeUa26vc7RCy9zeEipq4W7LyDiLVXFXfmHqMGXFkCfj5wtRiNiJQ9DsRSZPXFJtWi4cXmtnvcifazomqAb4k",
  "key30": "3SNGcwi9WHiYYJDJBmSywhUNpNV6QvF6VDDuvXD6vv53a8CQfMqecpZZYNT9Um8V8opphsULT1qAVENeYJX8WZWa",
  "key31": "2x9RUzPqTxYRRgxVYEjTLKhQxmcWTrLQRUZwpCuuQGPfr7xPJTcLYh8Gf8g8NmUEfAE5D2Rr5msAz4brU53mYef6",
  "key32": "zN2BkvybZWHBccU9DfW9jyAq5BeE64d3HChfkEEVsE1rNnFdPhhPvUuA3zW2KP9WEbE2fpyNA6zR9WRtLXNvdnx",
  "key33": "5gQj8CMRnWeeGqwk7rRsB6AsQtW3J1ms3BKE1KHg8yJaS71qGAsRmDk7k6VdyxZhfS4vZtNgBH1brvz9mL4sfVcv",
  "key34": "3ansthuv4PaB4TnorVsVJHLJYPuwZX2PjFa4EhYawMo7MbqtaLYbvZA7v6R9SG9wAu7E7XApk33AHXJfunGAXPCR",
  "key35": "4TsmGVhBgTyfrLauCAfA2Etgnn6JiBnTThSWcuopnjxtwbotoCcosSpoDzYXcquf7cZ8mvMohgbb12WsZxqGbr9z",
  "key36": "KMGLNJdepiw8YHDTS4wkbRcAUrat9ttKupTuuqeP3HwGxD9qmvGEpWpzSgBZaR6GZQkWyE49W7Pr7Yx7tZ8mN2J",
  "key37": "2RZ8mvaUpG2M7aneBtKgNSnd8Pe2pJjfg8X25BJSYuHzJqzmgsEvsLmADk3LRNr81unedSmYqjnCLe4BuuYkaycr",
  "key38": "5iRQiGY5rr6hc9QGENvoojThgDvkxhsv5CZco6wJXTQuT9sgKVant7y6KiBnxQCNgezz4TQTZXiY2uZdVNA8SDdK"
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

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
    "4tttydjpTQcXgRaMc8rahxocis6jsrZSjEmyKsFeeuenZEpjoSTAdpovRfp2SHDiuHztHAGXP5vXddyNPotkJVEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFWddh7FCJzBhp3fNqzAsgjwidmExdHyXzHo9WHb9zcmfxop2Fi81ms6VrvhRxdnj9kmF84qCkoVaMpcASfteNf",
  "key1": "25oJUopM73HajmsMmRX4gVCGkFrgxdEjranrc16XqAMTnSNegLuDVvpmP4Cz9q3Yr8wKMe9Z7asPofSLR5X4Dr8z",
  "key2": "3A3ENWAv9hL7FuoFMjZ8WVw2HvS83cDcVUU3zRSgSonHqdm6pAKPqu618F5oMafRLTJQ41CbxBu32tLv52enUUvg",
  "key3": "28PrZkFcqXhtv526Eu1r8WKKq6rvo14dKXACDMJLo9ytVPa1xoQdBLnCfSuAxuxruTDZsjMN5fUKNh2D9Eh7nxcn",
  "key4": "2vWWfviwdRLWau8SRfzg5AhizVCngRdgnezjUxWyyvgJF3SuALNEKL7nr4EhUeL9H4vNVqSefwHwzHjs6J1xtM8x",
  "key5": "4EcWvcdxiC5qChrEezAUQ46VyjpVZPnXUDJt8DF1yQZ1RnF8Rx3QCJfULSkMPQpuwVkBywxttwBoxSfzUnjFtZXM",
  "key6": "4hP3QQQ7fRLPd42mQ8pW1L3yxZKUaHYtUeNfDkJPQHuvgs3aFFoBs1iNzJw9V4bDsQHLgPM19JNE6x9Xm8oCVMbg",
  "key7": "3BgVyMEHxL9CoBVd8zMBuN8p6Q8se6NrkhKTdTDpgDDDjyWzseoQEsKUtD7cnBTyNbqdkeFnunprCysw53h3WuPz",
  "key8": "ehkTGbrwNYtkKFbSE37b66ibdUxxS5ZZHLF5hakZLF5SBckmzupziwYn1b7ZUmSrm71FtbNPvRdYtE8BvJTSXBb",
  "key9": "63k1v6u9BJWhskQXQNLgjgQ2f27RHCneqnDpfqwovPGs3qH35F9NPXZ1v56uQqVsVCiwyroaNCWa2MBmjkuXbgdu",
  "key10": "2HnWSDbXbZ4MbSdswqXGq5Rec3fA5Hm6tMTtTYbNReZkXk9AtQjDUFLTdM2iPVT79BBGQMQQfA84m1fwVSqC5c6Q",
  "key11": "5NattKki9PkJ6A363zJNHzBiAn1bfkuAqVRJoZ3ehHmxH1LdR5HENeS5YpupnUoBLyaMqQfE9zmg5NbRYYj8snqg",
  "key12": "41EaAxTWNquf9UZkgpUP1Rsuo5zcjLDzpYVSpboWWAZCYZdXDUnma7PD55V4xuzhyCEuQ5WwKzFLe7AkqCNwzks4",
  "key13": "UytUw7NvV8fpsRJPEVmCdtjr4nfuprzxwqJFXyRVS8oaMzfvC3V23ChSPmZAKRQmZsmRJ2UkjTatpqX9uWBvhn8",
  "key14": "4rCpye8V8KsV8sC6DvwFqkaZFPXfyYyYvUeiqAeDYpZEU7cd5TQAPGYDAaFkUDfmpL6j1EcJFS1GE1bosEU2Wj41",
  "key15": "3C6GZKYgPaqF3KkBk2H7Dy6J5foSMZDgkTNbzr5Hne9UnEqAGTa1sTjJ7spB69s5T2nemQEQK3DGtXg5tkjARQ3D",
  "key16": "DBhg6bF3xL9MwJovMSFps46RAqRUwqaRUfYAgiNzuZ6idy6jGb5iZxphvmyxKa72wjYHtF5DgF2kUztFaxV7PQv",
  "key17": "3m4pPAEy7Weh5VX9kUCdzdfKskkN2k2kVGbtSw3XYCYiMdu9hW54XXMY2ZWZ2nx44SnPs5sVv33HEoUt4RWfDtK8",
  "key18": "2mEb6E9kQxGmemMecuB4rA3ZF5Ks1kqoJUBje7T5ucmbNhNz3D1oHYWd8aktwUQRWHGQkTHTgXbGZ234psaXbQBV",
  "key19": "XJu5QT9LQ1QwVYmhRiQ96dD5Nk7FMyppVGDQo98ELDfbStQTEeFZhr3sshbMXCs9nmMvuy59Qyr27MmwVNy7dv2",
  "key20": "PW65YtYDjqvv7YCvy23YQkhESVe55GXSYxc5tyueYCdkCwsji1eCFM79ZHWKCXfrpmcwntpG7sGkwYPnAWt4qBc",
  "key21": "Vmx3GDA1yFJerUnjazU3cs1gFvNoSxRJfFQZRVcGd6WUokaSgULJ11xQvSFE9Lzo3DATtuSBxgVwirgttvobvWz",
  "key22": "4hnaY7C5iucDANVBooLJkoLwoAEv784EFVHersP6MPRydHzLXAG9Tvv2MeAzVeqPrUTvFcuQkJLJ5nNuv8rmBbzd",
  "key23": "4M7iKNDVWXYLx9cnKeod74oz2gT4Xsk46SoTH8TtUVkoegiCH1MMxYnxbrDXQKezYYkMt5xkSdmopAjTw4nSe8kc",
  "key24": "4wjxKiMWPKVTwZXUDi5ysm6L6FAWJcvB9hBRMvkenxr69M6bXLyRmQgc5YguLgP4oNL7Z9kCxCMV54BTjHchNc4y",
  "key25": "2eyPeYGxwH9X1tNNy7rQupiEhK94aprNUAavAgC3Pk57HKgUZGnWPrsyuxN3vcG4x4LP7gwUi3sLr53LHqe6H327",
  "key26": "NqekbF2KTyxPHtjdFYUXRxvo9XVq4wUA7iZ5nvajWF2iZYPxMLhUoi9SSPd1bf7Wr7RE2PkCa9kjYo2ayQS6pSh",
  "key27": "53izyCHBcZqAn2oVbKXCCbS2pmopApNcQ21VzKStg5qCpJo2caCAtQHQinHDBdT2e6urP1J2fsYSnYyD72RTD914",
  "key28": "3jZg6meNdNLUNoGPsXAwRrpVggBMmunebkFAoLtWkine1yTTaHQje3vkGJ3KqNg6bFHNinU3ku4jJYL2VMtFN5WW",
  "key29": "iC3TmxJMzr1jdZ1PkojQkUcbkRLtUg95WvXNErpdyV1Fw7L7FsreEbNGvEow7aLAUUUmvCND8RR8uG9szMrFp8R",
  "key30": "5MxjSVSErVPSA86z4y19ReannPnsFKfbJoU3FBAabRi9zJyUJt2ajqtkMcf5Q8Q5CZ8qfXWREQVk1FTv85R2UbwQ",
  "key31": "2yZEuchSRkq6jEFZ9aT4uXHp5i98KK5mYdH5x9kXquas1zBiSCfM8b4vJeRz22ETsj5EFFejMgm6JUb5vzgCjM3M",
  "key32": "3ZsXaWoGAHYiMcYSoKnGQ7Vp5VBggMBHqjQ8EyJGYfvGSxB7MVNBX8Yxeiqksu3PZnVPMm969bkHZNL9Ws4ngxjp",
  "key33": "WDxL4dBcnuFRXv8npSpcxHS4SqNfvzMqRiTTbufkKzkHyCT8oop6WRyPbXD1Atim2NUegAtVRyC3EqEPsxCCw7E",
  "key34": "4HFxYbJbAeFNLtkZAvQkTSkNPjtH7w3EeSgNzEeRXvjtCuFZqBJ3y9ouEHkkE5j338x6jJpABBpMTLVuxqdvSsTc",
  "key35": "2cx21kTaoRLys2kTKLEtiffPKtjabmthsKwQPuYBUtqq9BSVBbN9UijuFdfw9LMHdoczR1FZbckVdCpERQ78Gzmp",
  "key36": "3Kh44b26dL91fgTXJdhsU34E1FSdZ354jMa22Lf3c8CyDU5pLvRbaJ2eLmBYVEXVGr9wkG15Jd5tw3FKngNTFCtb"
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

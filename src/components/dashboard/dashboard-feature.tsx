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
    "p2wFijWk56Z8H5HRMYt7JFfzv99e5CGRei3HeBt8wigEGj719YcFUwUbcrWEvg1kTZxGSkCCj5Qak1mvYij6dQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dhh4puCMgWhnFVgwDzosJgYw7u9uUaXG6Cgw76jhgZMSbvR9CavHBRNt9DLY6wKTGj2ffANP5nSer6jR6Y79vYY",
  "key1": "2qvMaH4cDVAvBDAQERRTzwgs6Hu9S9KgCsk6UqAkjkiMkt2RLiGuWKssBmKCEhMrGsPwgK9gt5hkkmTLezsShqB4",
  "key2": "3UhNa21VkMfLNzkCedH3sYvGmHo3fXo3rCvmUSf4jVkjdcaXqQCJ5CBg7fhEEgD7AmXt3qdjbpf7Piyu3PWk26NV",
  "key3": "2zT3rGCa4KGKLXnfBVetgoQsNzWM7r8VLcKyjhK6W23nhMNQfK6LzVFnocSCG4nHwx1zCX1DpK3RcNrkV4ocgjNy",
  "key4": "5ZNSsVWTGhjoKJM4gSmbgBBJDqhXtZbn5FPk9wfrpwLd3WJVCkowESTfUs3nSmFhBjkVRGWHtsL3uLxXsV2GRk8S",
  "key5": "54JKUWw69DbCQybquhFpJSeqko1bB5D5RiUuAFbNpiDQCM4pFRFVdp3uZ79g2o8hZVcwRP2gPZWRsPxjk7F1KWcy",
  "key6": "2Wn8cMvWsgzFyp3w3Pasx3NHaHfqATSvwrxjmsSF6APgTB9r4dFzEoRQcnE44RUJWLWzitdT11Ls3KKHitbevMFf",
  "key7": "63W6wU2ZbfrWC3EPeyufyx2FLSH77WeCMK6XtmdjeDRovJ3vZ9QBpEFmGHXrfsRodujCpzCNAQycQ5AZRbzhuVqU",
  "key8": "voEmqzJzho2Lvv81kHAVFeFrfFvdxMtvuaKQ9fo67tT9DFYEwkkKVoLGJ5PMmvFpuYmcUfMmX6v6zoPDFoFucNn",
  "key9": "5ChyQGBi1bvinhUJ9thcb9tB2Q6xPjoYq4MRZLGMVQzMUVhubmefSWrTmfjKRh5mbRZPxe7Tx6V4D5R6xo8rYUzc",
  "key10": "321pakH8K56YymAzDryMKw9NiTNFqRBMphmyetGMvyvz2okH2h6bkpoyRm7a8xEFQmj8AjgrKwPXmxDPPqZXBqL1",
  "key11": "UtW4firDehCe6Gx295vmJa6SDzTxaZBAkhSJGULA5N9eXMqgPpo8vfCPUFAgKZ7fmtFWdqdgkw54pVkVjoe7ZaD",
  "key12": "37r8FF7Tn7rbmfhuuZCDN5TcZEwEggLA7HGV7MKDgeLXWJxYiUHUatiYCX8nqhoJKTQ4uNHoQcCW6tcUSmmzQ99k",
  "key13": "537vxRZqf6uaeuCvBC2weGLQfsCrieoCDGRHdXV9MAu6TJrFvq7HFG1Ku7ddb6wi3g6WUtgNVkKgYise1Rfar1c7",
  "key14": "36so4VijbXchgxt5M3Mydk4rEjmRBPu1NP2X8qRexNv83dRkD48jGToMaJMDDUzswapYNc17VLSfv2dNGshQTzrN",
  "key15": "4cKGLcMsYSeXwTNEbjGmFZUfHk6WtTjuyZpZyQT8wSt6BC4vruSNvRS76Gk6Ee3wWRub8P6cbz8Hmtu374yoMJtt",
  "key16": "yas6i314hx1uvdrx2BdaAdzGY87rzg4wXRrCZUunh8wUHTYm2w79P5vQ2xAi64KEAcgDFgevMoPKAJXZQWgezHS",
  "key17": "5jRuRNGpm51NmyGBdgB5pTnaESpG35c9wCiyJTJkUE9xoR9rFgCCtxNCgUJDxCzRpemWfmZK51ewPTvKMMc3hpEY",
  "key18": "4E3W5V4U69qDCmTdkFZRLkxMy6BNhTfMq31HTV3Jmh5pCSt9Q9YCxGATzGPcDKAkz4p61vXdeHG8WcZbUG2ZWUfG",
  "key19": "31WGGEhqnUH4RANTPksSb8GZHL86FsdaBh3TwPrAej2jJVNT2MUUHNxcus9zuu44m8V57eohh6tPKhGRydgP2ora",
  "key20": "2yfkxpzHByarDmMhiSSbKVR5F56LCPQinYxpH4MLQu8gw4VUs33Q3tGWV3LcPpAHBiqzM8cLe91Syr3tAnALUY9P",
  "key21": "2iupETCA2RYVg8NMcqg6Q6ctg4UhQavgriJBifnzsQtGeTRdLffkrrXcyMNrhknFJx4wRiyrL3sk9WuVzHBMtLYH",
  "key22": "26cQrSRHbWcuiV6DMnvezftHdvzWffZsPXCCn5y1pxc98DAT3UikDRrzPf65uMCNNrEvcNi2DUBrQ6iZtSXmSjUM",
  "key23": "3652j3ddRe6M8uNxadFyft3xxyaG6oPHq2BekjF21ovZLnBgse2TxQVuuc4qX27j3uHK4nDKhXh9EAngx8wxp7tq",
  "key24": "5QmH69iLGjguSumu2FZ6MhGCt5wGRAsVdBWNUCdVPcwtLi6TbumhRbFxWwhdRC828ALDRSj2fMDA3retJfpEmz47",
  "key25": "5VHBwYAj1jZf7uk9TPAZGuSnXDUV3M1pg1cB1bQZWxRQKDUg4wNDosWYvoQUJrAGZAP224FG7NVvfv9AJqG22vhT"
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

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
    "2ifoT8LnyiMeVxBXbTAm9obTk1ViGu3jeCeYWNBteugSD5XvGbuBUX9z595VD9MQWqCC9QnjZDEvjAqokqn3g6ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SGKtd4GibzUMJr5SJdjo1dJU18DwVV9HJPL6HN5XVWuXRd4jSGEijntPtT7JzEVtD5v8AzeyZVPeHQL93NVhEBk",
  "key1": "59shswsSc9zM6r6PetfDx9pDRF8hJ8bntzAxPh4WCz3HHeGUCvMTqcf7VfxfrpnX2oLYQ3JDfM2yqZAkhSgeuGfo",
  "key2": "4MmkeL4YdPaqPe7Za8mXRSo2kyJGbNdJwCvxWawokjHnUc3dbd5PpKx7M4V2yw5CtFBCx9ujKARjZu3Qd2yGzHz2",
  "key3": "4mHhumwjMgjotPpX1tMwCVvgvtFozgqjwDVb5iA5RxWnPZUuZUfUUq5y8hfT5zCmm1FsbTiKb2mTGETuDN7VBh91",
  "key4": "21bmfhMQe1jMqyJqka1PLKr1nWoPKQCtNsuMYMTXb4ib7s7yem54xTRvcXAieDRBQQTZkjiQuzwAoVrKpkndKHFY",
  "key5": "5XnnGkffdTc6MVwHSKK1LMBFBget5xYQYAThQzms9xfYxX9epyRFHVQU8e4CH45NPPLggQAe1CWkeX82gAmBkGiM",
  "key6": "3FthTyZ7UKTSr47kcq3i7YAqANyd5RCw1RDDRSJwRF2chpQwTJguzmQhBrocT6Lqv1SoR6T7wtx9K3atGwQ2XvZN",
  "key7": "3UMrKV68U1sr4kXskMYFkohYvmYQt87S5mvSaWc3YqFMpzAShUSSLnJ8mfG635GH1R5GU67LZvmLAPKjrnV9pMPM",
  "key8": "3ZHMiLE2noS3dk5KyvKcMFxym1xpf64ntZ1No5vpoXum7o7ZYXhL2WJjW1ZpwRTMn7M31CNXMu8a185hv4aKueuS",
  "key9": "2ufJPt6Nz7fFqJEcRwXRzqd3s7M3ZKWVk6CEY11RMy5Sw6wF7EcRSSh5dSjcD2yCNoh8f2nCybgRsS87cTyjb2FY",
  "key10": "2g3vZ9ECcC69CsMMWL2y3cwCWnU7sNku2Xr27ywZsRLH89EpSBKvRvXSVisqwb3AjdWUpAk5eApZBPBnDrbZMeio",
  "key11": "3M6hU3gMiTiQFQiZUK1FWgDR4ZsWqiAJQbpaGUDUoUbRkprEubguf8BX23J3jJZB6hQBTiFVAE8PrGG84zD6KvQJ",
  "key12": "dwrnWuDePrmx58vbRzJ86SioR23DXrxSx9yTLkdbqF8n24u9gWcj5fUWs2jGUV1Am61sE6kD9o7hBE7Lxzamct8",
  "key13": "4mezH9kmBJoajkzXaeNtewdG9rSmqHxdiCs9RGz41Jzp4MQEf4zG17LEvZaRmATmqLmEd6wBcxXfkPuK9grC5Xyt",
  "key14": "4s7dENimEAKqFmLFzdwjBZoe1qCeLNnwvUJqSzrZ8WrkzBHqk9pPeLe2ZT4RLMMcmM92ZfKKh37qMSfwhvXezN2c",
  "key15": "3KmkKYkNqNiaMEz6hm1HFZAb8tMNbTngo8Hq3KuJf1j3wnppD9PyXaW3AcFh5L8TF79Ns9E5PAzAT52xy3LodU9m",
  "key16": "5F8YEnwCex1epYxaH7KAejFyemTntSqr5ZGu5drv57ZNbvTBgHZVTwjVhupo7qvpdRaUFooimpo7w7MXJ6kuAfQ5",
  "key17": "5mopqG9igsvof4d7sg5X5Avi7VLS86v232ydUfz4gU4FmCPyGTbPkh2bCzSY4HZu4gqgSbNBbEmAqReBJFFjSK5J",
  "key18": "2BGcgaoSeHpN5sVaGCKK96f6ijfkqeU2HC1KMU6o2AtVUoSdXpNm71WVeLG5zHz58HJkA1nE7EMPizkzGQWsFdKr",
  "key19": "5eA88J7JCfNRtU6mqXfSqWMVz6nfESPkAKxa2ATTkMFftsNXGfqS2VsMozz4GeW7bbQbLKsPbLbDC1gjQLSrSjyL",
  "key20": "5qRaU3EnC5HPsKp5oq1N4kZCZPK4sVPVmcbrMP6vnpkLRB3n83q2EhQodCDMR8jHmF1ShpbVqwefUCXUYH3gzVEa",
  "key21": "2t25HkvcdSiv2qE1Gu7APKLPt2KHxTJpgwV77S5GpcDsiKBsaDjSZLPe6BB9fBRyW2iWvhFtR5kmCDzzw6mA1xaW",
  "key22": "4znTowAfdMPrZCB5WswTrD2cfjvCEUbxgPTWEqKm75NhZQh2VGERs5W3yK8rWChVXR373iUVcCJmiQfuixxjioEq",
  "key23": "5vRjt4VmHaXaB4TFmdfRXCC4mTDs3FW2CrEZcNPkh2th4cY4dW2autzZYSc8fdrdE8YJpCpcfZxGz7t6FcHDT4wh",
  "key24": "2wUdRjbsUquxQtaEH1sznhe3AdHbj5v2pJqZhVefqtmJgBZCkCQsgTCJihrHwxpodnWUmkYHsYTCfQHnYig6kWBJ",
  "key25": "CLxZRjbNmHaSUP5twzD4DrNxLn1DgrjwbrRofdYbj94deb59LoLQ1TfiyauMgxYF5CQ8x43USj6RKaGjFCAtN3i",
  "key26": "2hixTvDeaYtunpisVfK9mTo4fcZpjsVfeJVX4jHengkRSZvjiTYpg9w9dDwbTLw1BFUwiqjkz6Sqtrfo6JgVECyd",
  "key27": "3ogDgNzsyrxzL91TAxSVQsRj29npvpnByzoJjkBeWw6p76GXpDvUt4moA2gBRFq4yAXSK3s2usfKw5sp59VSQaht",
  "key28": "9nehusGdtLM6btB9iYTxmnQYAFk32DvdKvV9J8QTThzTnMogHfwwSfoS4NmVxyYnfBzhkn6J62FwKPMPYCz9LPL",
  "key29": "3c1cbQX962jyFNh725KMrW43Uui5JajiqLmeg7543oLwtiDvNRZTyEFM1P6jCm1Tg9VSHBGECPEkSrcKfF1fuYRt",
  "key30": "PvpEGG9TsLRBjS1JWycbabcp2GwvtvtG7DroEs97XKLeLBFAt8cmUqBrUpy9XMEHQFZ9s4XcMacTGMBRzqxdnam",
  "key31": "56C7hNGQ2aud53XUfes9vUHjuEGnH8aeKv4HYmtQaVDrwsmNhyJCMfuiSYJVXPUbEE4GnzahLiz68tUg7i9dDW4D",
  "key32": "58ZMiafe9r26hK5kyBbUmuk3w71Y1S3ZgVtymcFRyPdt5rdZuovn3n8t7crDzaFSLxEnyrQC8zcFPqWh8Xn2ubW8",
  "key33": "cSVDdowQvC7QAWGuYeHa39Ezce6gqrEyNSR9y59vbWzha1Y3zz3cppsSUskatxTBkLNtQckGty9qqhPUWjKSkpW",
  "key34": "5t9EPdztEkcZvHo5fHyTMFJxgCj3gP8m2kqBqCadSWahtizh4EWG1yEdvD3dp6GrNNHKt8b5AAFTfETumVwB7EbW",
  "key35": "2MswVcAEEgfFSDe9r4nDmbnCUCh2sArkCJiUU2EvzhZqsiahKVqH86cFDu2rnJ9SzeQtsrKnQxFYyQaML9rqjxUD",
  "key36": "QEA9cERhZHPh1YekWfG3e8nA7R5PjuGLrNAJd9vpi77XfUnq8rumd6EqEnmGYwn5ho9vEsUcd1mPNsrvU3MGH1g"
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

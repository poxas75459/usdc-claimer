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
    "2rz46g9E35UsBvJfwicSQG95juKcuV5LmAyheWdfErG8KstzaQgNUx7t7ued5uJnDxb3esRAEkJ4GQ3MCKMGp16P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYoWotN2mFbSmZtvXbACjLRSKu2nkmzREKcHWBiNYcCS64jGtbtSUDSpAGBaH7NXmRJznasxNYSZbfcQrGFJ3gE",
  "key1": "3oLCGXR5NUJKZ5ZqMJenKJnkGQEQQB3YJgN6YSUyR7yMDDugWRErPdv8BMktKabG4DPWrdUR2idMvq6hERhb22Zv",
  "key2": "5DPftixS61W4WTr4G6GXiXe1WUMn5FsU2pmemz7BYjCpMupecibL8zxvEe86mQC68dKMnvSnnTxz4dzQCZXZFm6M",
  "key3": "2rXwf92XiEVQzXofKpT27MJa8rw1J3FwrReYJpbEKxtAAYsMssXkVaoMbpTBAbXwe4eHMPQzgzwiTVL7eZcvmx5T",
  "key4": "2farPRXtEmGegWLDmVAKh2W6CgmdKTb4f2jg46qSNQJR7BJDCPKFTwWNuV8ETFN9BdZEvQuoyPJ2jve8ouKgkUdi",
  "key5": "5qRBEeK6uSXiUudXHZ9sJTeCNgZxWhkXUBnxNhsudD9kqWCf5YD9doF75WuLB8NbxKyxAG6MLkUccCHkP9Sj8aZz",
  "key6": "N1Qrw11PenMMFyhEDco16znpSF2srvY1pfxcFur9wdrcBCpAABvSHsBXXsT6mnwu7Mu1wVEZrs1gd258YPLwZ75",
  "key7": "4dEAP3NBFJoiT6BbstbTy2YixjoQLUTyLHPtpv55o8Y9A4WBbFTK3WmCRt57Se4RGBPM2arChxBcMsTSoVz8vQDX",
  "key8": "A5sSmiFYGkvLWhNgfHWAPSQemdoQhyUUd87DXyvUzzzZhoNjyyXHeXFkD5X99MN6Sk8PUBDUbWAzAdHpvduGSbe",
  "key9": "5KC1mSpcWUuQm5kv9y2Xzq9tA9WYE3eFeMJfeze5qcwrYfh66fyAzX8APV1qop1KmY1KDFvUC7HG7zVhawAHzYWu",
  "key10": "67cJqU9xmkhFxaAsWibNqDSL4AsMrqTMp3qVrnFEnATDmXcpSWPSLaTKn4fgTrPykj2doHsxJ7EXFGdj74Fa7dWe",
  "key11": "2KHDc2FXbaypBEgcG6k8RFM29pFJ9UcA6j1dqFwTbCR6ZBZ3CeFpomxzUqny35ffqqyysYTCTCqQXjg1RMBaFF2q",
  "key12": "4cUWNP3Gn4T2vGd2JjXKc99DkEsD58m23Y1zmaaZq6E5WBNQMbyJBctVnHvjxK58WuPVtypbUpTCV5CaqCRb56Nz",
  "key13": "3txgQWkYTL6D46EYGBe2E6LpQYkcfr1neyQbzf9JsoBSUdie6okBX1EhWagp3zasZfASujhnuYes9yMbm2kRDwXy",
  "key14": "hogoERV4iA6h45WgoVrqK9hv7GmDUH7hEC4LskzFCixXBXQDDteSSNKaiaFEbfmJ1kBJCFZ2ZWFrHzgM9fQE4GT",
  "key15": "LvLgyLNpB4MKbz3bpdK5Nh4BE8tQpw4Jgh9EYJBHu1BLtA6bZUEVHqyrvYEMZLM2yNuPyYwVAWh6b8fZ7dAuohK",
  "key16": "esAhd6eMtLmkzoZng38mXe8mAHDk6dKPSZZNmnNxkvKitptKvADiXs2aH7jagNLcR2Vsv5RvrokABaFFm2pGNcS",
  "key17": "467ZWDyEEtA4LKKXcaixfA7SVvPnPSh3hVCn53S8FFzmB2EGpyWRrxrCwz7aPG3piPgHmeF8R9HkRNbUz33f8NuC",
  "key18": "3cBUNwaS5pQeZBPLXUMoyEJ8iTjAqG8Aqn7r356rn3Y5EjsP1XX9NFDrt9UKAfLT6rVZijVt7H1ji4jusiwBHt7M",
  "key19": "3JtU7MtafkYJwFHXgrxzBELFjramPmNxWnGA2Vf1icNeeqADAnSS4CgZsWHZky63mS119poBp5s5rWxyXor9X6FB",
  "key20": "61rgqQnfL8YXvz8i2Sm6Stqf6hpgotWr8TfGWucQTHtzd5qL6fmLxLDjNsQGXAnRAV2wfeCRUCYnkdWHeoeNxkzq",
  "key21": "55xrfa6Y1BKVst6xEpe9RhVsox2mQQfJKxfnS13YxmZTFXBvLjFy6ygmthDvfK2HzxxNcpqxRmUjM4MwgsDWFsV9",
  "key22": "5rVh8Wq6wLnb5JMM1xUmhNFdezkhMJrSc9fjDD3zFn62xHnyGYztop2M4dM9a9Ut5KqHfT9prNJjXs6dXkbQCHVA",
  "key23": "ftFk7VyVwQRwqLza23jbohD89uA53LCFaPUADDy8a6upoHw4G8uRp5jxNwnJq5oMbqog6mNjCkgYJoSXcRdWfdq",
  "key24": "2uSarmpgfTPzTc568sY7W9PEmSEUSBuAPpSWCCP8cpFW5pS3KamMtKb3f1VDYVqdeN9848KXyfrEQrrzVxo1pzLd",
  "key25": "2V2niD2Cvhc6MUK4XTGrvgFaZtwL2Q6idrjozUNXRi82Ucsy5bJrqro63gHmzEGgYcnunobEnPV9XvtjuHnQJYrD",
  "key26": "5SXQpDCnqa9PPtqN7gRhSuZgZS3bKP63qjxca33wgSsC3NKugMezQchNDB8WdBnvYhX2h6DKTP7AzP4CpsvcVPJY",
  "key27": "3CNyGFqgktbq6G9YBLzUYZg4Q8dYLRXs4eMkW8WC6z7BvhcFeA14HThfuxP1B18B239Ua2NDGKqnwg1fCgBxFAf6"
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

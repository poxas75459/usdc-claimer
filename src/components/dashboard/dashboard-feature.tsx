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
    "5qzJtxPfTxip3TL8yJbCpb8MuWZt2ag2LFB6sgZ3xwmQx8JfrFWRoVAQeDj49E2ja5PAr3RnX3MvRgkpm6mkAxi1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wteDALz3sAExnPKL2iSrBULDbAHCyWKph5uuqpFWVF7ETxM6ddnebjW6bxaqccu1giapFftZ5SDBRFb2R7SjpVm",
  "key1": "dKcDtS6BNLqE8kzgy62XMEj9fyEwV9EPXj71S6b2dkpqv99nhZAbVYfzwhCFKnGCKhYkghk6YLGdhogSJoNCbzH",
  "key2": "4UKbgpHJwkWgc6cNsPr5gdNJ7Cep4yNpBQGNXrV3c4Df95qxoCxbgYUd85VvwwSZttnWHzUm5v967Zr9BwqtGaw9",
  "key3": "3GtCy6QzuU549w2ZfBJAuXGB8975bprCDAmv6rriBnSGG8qCwrLHaU9KxDpFNn4wdqWEJyN1v1YtuQ7qcnHjHj4a",
  "key4": "4MDANHW46ACbHNYFRkxfLNVRLvUqwNUckyta7onrN66Ms3MtA686d1u81etVsdQQeRBHfeZdyrCKkVXBewsxgVxK",
  "key5": "24ymx3G2Zg3E7J12DwbUkkCepoBA3P1j3J6a4fk6ExKPFUTjed7ksUCcXT9MBbpTJDCZrKSSwD1PZZGNX7tcbGNQ",
  "key6": "sKt2KPkVUGJLpckuJXZyYxZViB9ryWSViJZeFktvVDt8U92HF5XGjH2arM5ujB6ByooPkyiHR8fZgU6X2Ggs6qJ",
  "key7": "2XByLc2q8gx5Gexz8gErey9SH4qPW3WgF1JjC6VbQ8n4Fmh64NzxccKii8btZtmf5Sgjo5Nb6EPVv5BBWeGKDc1B",
  "key8": "3EV6EFvULPGSKcYTbUVU4ZrcRYqu5Yg7eqKkeKrrhZRudjgSg7Nzwq1KWzEMh5Rbpw6w3Z1Dvf5bqqQ7FD7Rqm4z",
  "key9": "3Xveb47Yj6EKqXiTUrQQVjYDGUcUxXz45XyqVY6nJqPcEvumtzFytGNkDdv7eeyix9QRF6jbqJVbeQKvo9dTZSSG",
  "key10": "MLjT7QC5QkT46Kd5njpoh16tzneka7TZZSNhKvqPbsHuaTRkZ5KXdXQsVaS5Zptgm7h1bJoma3msydso3A2ByUn",
  "key11": "4mo5s19VyTPwum9PjQTCiMTVWuTXAqCHVAR1iVNrQnn8x3Sbr6MzHvZAMSTjBRgRJvmcb8Hvx4JsjCMfGRv2LU7H",
  "key12": "4You7zGyqnb6YKHdDWesta9m9qZiFU9XHsc7W7UBJLsQnDbVVdMUyTy1ECgszqzF23zDjPb9dULqf8CNZVKSgen5",
  "key13": "2kZr3NASLt7LcdbfMgwAry3ptoCL6hVuAGq8M8cDkoLhS8H4y46uM2Xdz5cV6xPEC5gD6P4tm6Y2UMGL65M8avfk",
  "key14": "3weVYTj6yuCWt1nmw9KPJHggJFsndxZr66KYLrjTQTBm6aBGuKCoCoAxTVZHt2uaYH5Ek29sZiczsTeCGtHsF9qe",
  "key15": "5A3HQNaqWJE9cSxaPhVARupqSPnJf74vadKoSxiWx8436ccaTr8n97R9QFTiYoaoCq75qx8XLJCrHjDKs4YgMsUS",
  "key16": "cL7d9aabBWdmqUuQka9dEYataSwsXpExmXJKy8cMqHNUFbVYAjmr8yHj4LxTgN9probyxB58MFT1pvmqFRoevz4",
  "key17": "525iXcRNNtncyWq7NL5LUiFeomJ9UFvVTFcSBCU9NZs8q98EqYwhADW9ab91x6R96gmR9mZQSC77uQ4qCjRdK7hd",
  "key18": "Gb3kwscgP3uCAUCTX6DrZcMrVSFixjmVVBMXvxLaP1LUMbJftzCMoELqpmFujUpEddc1X2apzRXCzPn3cDWXkSS",
  "key19": "3cncjRrokhM1UmVkD6N214AnjPkWhdXLEM6e5jVhWhA434AZfuwrpdGtmWN8dWZPfff3tnMWYnaxxKbipDk5aTDN",
  "key20": "5hMcdfXLUFZaNWaf6HkJZBesbMmcx8BQDpRCRuLuW3a5caDCk4U18VDQyWWNByEUF4hPQvmgyBnkDMrBxBxr7F1M",
  "key21": "2vDfvB3bYdioB8oem7hSzwyrnvG2At8yvoBjuFosLem8rkkikEzU3ykMawXRWLeddiZ8i9YxLB638MujR6MGxdsk",
  "key22": "5FFE4MLnCesKcKFM1XgfCArjgVmqECmFEmLKuSUUkxGwHMfoV8Mgg5QST59eqK5JHzFkiZdetuTXsQmd4SS7HGHN",
  "key23": "55TGaJ7nPgPQoUnrttvuhB1Xn1TmdZbQfkGGofE42s2ei3mdv6r66TQuHLhovy5J8PzGcnrdBV4e2C5KLpRhwXiv",
  "key24": "VTrKboriHSSPcc1hQmcxkXNS3YTCSZBnLAHCDcXTGdoZnscxyywbox7yraMzbuzxrXfeUZKNE9gQ83Ny5aqJk6Z",
  "key25": "4H5WtZsmvWrmBTdWN5oYnWEsTkuoS2NM1qCWpHeqekhoLthnSwEehVgFJ7n877cBvSfGZAPZBedK6FsAsfQUCV2o",
  "key26": "49C53uWjax6bXruJsbJkPz8sHQcwhv57ZGw1Ykm148Tq9KksZXGEiSsSWpqYXSw4wVgw858DLijapLHgck2MiUCN",
  "key27": "33F9b1P1JxTGqPYAazjGK1cK8SiSUVVZDRpzPfyCrPJUZJE8ZLt2Z7ADKRELj3ejeRmWB85untSFsRPyGpvZoNyv",
  "key28": "9DLW4gPmvPDkGQCfsufKvMhst8QF98BCerevrMa4AwGKfZpLiCxPcCfcMjvUSYDdLE6JChY7TzimPM31y3RsbgX"
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

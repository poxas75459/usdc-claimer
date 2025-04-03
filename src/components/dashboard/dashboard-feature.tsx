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
    "2zoWJrnDxQg9hx5nRxucAN2yVmwJRHfvv8iMEEJBZmzLQsg24YBCaAkBJb1EJZBs3hkzdozoKkiZMJJVPLqvJ1iS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dUbGfVK8QD4F97qqmEN3Pjgkhp3dGE4RZAkbfTbEwGRYY8xsNVVYrZk9uwzXg55eCzHspf8bPDCR7NCgbwEUmYV",
  "key1": "4e8jJssvcT86nruzZK8qAVzXoFpy5rBa5vGX6GMBXd1fBoK9ddkJpAYZHgZGT7WWvEXuQfuenu4UxTmg131djSGs",
  "key2": "4vXSyUbNjMsSy1tzAZoGEdJ3GLshb5YS46ZzZJkgoYg9QSLhHKNaEWqXUVmPzw2vxD6cQD2fZ3qZD8MPLNNPN1YT",
  "key3": "KvAeArJjWArB9sZc4Jyx8i9wevRPSncAKYo4NwPQn51o5vDA6EV45tWcFGZa52VasBscqDpQMFNsJYPoBFsw3p6",
  "key4": "3RdRY61sWwJ2RJAdLzXtvEJNrtkkAUXKTPWFjZS2wrzawGmsLgtsxPiWwK6Y7xzT5TCRRakMHv2Gn2aEcYqGgdZd",
  "key5": "5yDFzkkhvQHbxDyeDsqrLenJxjofyz8zF4Z7DyQcu1CcDf3cSZNifUGToxntMXu4aPG3bam9Cwu7CcAsVHEqQ4NX",
  "key6": "TQqewqrvC4Jw72UBjtHuHEqtJtkq9zsbPczVrcSmB86UxjzjcikhNTdi8s5wnGEuexY16scRFFWHRtnhnK1xXuR",
  "key7": "MS8uewPT33mU2ZLJUkw29hCi4TWEskxhZf6tVaSMAfi3Myb6w6dNERLiJ6EAiKi4ozGHPy7qLwSfoFMf367KioT",
  "key8": "54ti5x7ZbDgidtfc5kGAyqgZ39LoSAbdPZfcZrBhs9Z7X1tr8c6GhhP7pNBu8QuLqgjLXCkjnNkQTRmcRW1kqztt",
  "key9": "5d7fJb928WpyqkHdMAcphUwBmw2Urqc6DaQaZHTGVrfAWcZbLWhciqGmpGmBFbJayZujjU96qaKor85eXGNtZseG",
  "key10": "3raJFnNevfRFVNCiYaZ81SD2XD5C1mpRXhZeEP3BL76VaFbk17SGSJgeQbaqUTTRmZ1QVjo2onnUzcv8zqb5qfZU",
  "key11": "5JwveJsN1Sh6cwS73sz33sk6ZKiSEmqN9g6UTNg5wi3MH3TJvWDme6qcMHVqZmmT5kUjXY8gY7CmGULFjJMFfZsR",
  "key12": "5SBx18jBNeTrus4k7iU1Neu263yW4y8D6mpSF3UnkPJHkfSN7y3mJ9YAZq2J9kNWXZfmRKED59rzrqzjRAFXZVKd",
  "key13": "41gSrs6wjiFHRZpzcAYy9CyHehiHKRah8FAM7vk3BV3Z7wxyr4wF3BeK9h9Lv9yxhg26RyjWdfLTs72Dh6jdqeiN",
  "key14": "4hRs6jmULDqAFqpA4QeygrT5hQmWBcEsqhhtDJJc8aqRfv1yMrPDFwaKzbpRLXoomX9TXxGmkg4Xmj725KTpN1LX",
  "key15": "3VfA2tjBqJFPDhS6M93ohTGCQmcmdULbmLRcAq3UjjJNUDwxGJyKNSDizhcz8guB2bzj6coxKxci7hZMAer9WqTN",
  "key16": "2mrxk6qDN5pzhc7fUoyJLuPjw3db3ydeuQoMEFnEiY1Tg6xsna6Vxndc4AtmP6bMhVkNh23ACmGrQkHxKVGJNGNx",
  "key17": "4Fc784tEXEfucUv34s1zHJaVew3Z6gtdqxV7EwsgJCpyjnoZm3x6TXPknAwrJ8xDpq9ZawckcEsktUQK7uhLeEXm",
  "key18": "5QR2okAfa1eMgaxfNS1dZ9VGnnTniAN84Shk4iHcnWAEa5WLpDRFe4yJSrSFhSW5FC7eooBG37S31AVgs5QKSBXb",
  "key19": "5TJWhFTYfjV3j1RCvra55QMhqdUCwwVUNgkAvUQgJYvMzopDtEe4QcNsFhE9FhHbcfqngc5J27enZtGZbYWvjhdg",
  "key20": "2yne6UT8DXsxrCN5UccryihhKzWxRnYLWqXKiFWTfsSsDqB5vvsJAWjCdEoREcktUfvQxsuyXgQ22ZFBkddYL3LR",
  "key21": "Atm5szq3s2S7Vas6AmVQffTcinnpJaDSb4CyLkmFSyQTs78qTZvz3PsBNELqNLY6T9FqA6jrvpEbA3GFVjRxTCT",
  "key22": "34xRRjpf5Hx8N5JTCjLELkgAfcqoyRQL8UcG3LEKgnhxTuJGyiZtxwpaDvai5ZQYPPqv2qc8mNa2qTuxkTCZ9nUB",
  "key23": "2448AbL1zi198BJo2fpFDBgk8eX7HZaXXeCcbJJrVE7QBzntWqXccErLrZVTx7F5WU2RStc8f38wjG4GPXjXtF1f",
  "key24": "3hKDuwTMUzrRPUg3ML2XTgXCw5N9evX5wMtoFwiV9p561Y1TAKi7boeeSfQ1NYJHfgH3a8aPQbq6ZzY9gqyhzJPY",
  "key25": "DrFASkXceMoYPshwAmKruSYi9jKYEfgAomAd3gxLMU7Mcmt423e9rrHgzPxg3o291WqJHDZKJVewCW4aKZJQY46",
  "key26": "HpnhbmBN6BdEryKE436zMNkMtUt9ACjRMGFBBkUgshvCmQJJSWABuiEtaBushqjguD7itxxhwXs7LUveKkuxoo2",
  "key27": "4SX16xfNjhjUzYLqCfuz9TAbUcev2MNSambgT9nChU5PAebf9BR6gSjmyNSKCEuF1tQguX9ffysrw7nmM3RyRi8d",
  "key28": "33MZnQto25MHVaLWsSR5JUrNnDJD8JPzLC211h2vigdnSwdsMWB1BBH7LyEqYdvg8pQhKzpRY9btjzGuXb9n9cvD",
  "key29": "4js39ZoM63rtg7wT4BPSRCS8pWC1VRqLANCQucwBPhsZFRerBFZ6gNGj1LPrudoDR2KpPHvWemDQzg6fnN9upV8n",
  "key30": "3J9kY5xsz36x5V7J6LqcZaZEdVshw5JZ3sEccXXq9TZzZWfvuheHoUECp9xFXNcjM7Wv4qN4GewB6D7erQAvP4Hm",
  "key31": "667Qenk424V7aiJdVwaE2CFryW5qy8vpnptmP5ks5zrm1jYaUo3HbTSDHc2u28dUV1YLcAib34heBwVekSrtQ3Et",
  "key32": "2kSMuvZccoKU7yfp6PS9kJh57efg3tBdWTfv5uwHiT1MLKqtDhrSCTix8yUaZSn6tRNG94aSNYqZGnUV7eThcSJc",
  "key33": "m1CnRxrLYdrzS2shM1JkqvShDT7bEaJVJm4nYEwC3onZCSwgVyF9nxxMyoMpfVRz5spuA65MjHm75RcCDQtbJzo",
  "key34": "2bw3ektCikEvndxmSkytJpYdgmXhDWf58cNzrRG24t8fHpDeREgNuL7PCeJQYwLmAJQ2BU6jfiSZQW3R3J3J2n1u",
  "key35": "5qH1A7dDLQsLtzSGKRLnoroNaA1qgoNTKSdroF8attptW4gARBfEXEL6HSF5UM6m2DLT1tWKUSRbXDHf6tz8b1V1"
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

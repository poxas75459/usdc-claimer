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
    "3HjgJZNZKsLxX1yrW3gnoKd5UG5spE6wSnF1gABudbXd6d7FKCXQErudSaEVoLoTDQDhBVTSJnG83sUMk9oek5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w5H6ESNMVAa3hndX4QWCxwiMFX9fQi3XALS2NtukYBrRmPi56kdPv27pkdjZbkCby8yr969GuhgGu9sgvgjDBGs",
  "key1": "2jXFoigs8AZu5AdJfwfrvraGfSJZEVy5Y1te5YkjKRCwQGkE3B7h7ao9GEpwtNopVRyGGwjknV5sSag7R7FaAX87",
  "key2": "3WEmbGvtPPdvBCkVVgJP8PaHqtSDKXrXjxinBH1sn7nqUtRpAHgZVbcPBntxTvpizxrw5Lnrx1Stx9MrVsQVz7U3",
  "key3": "5yXWLfPb5VruymWH7jzXLaUy7fPXa8jcon8aCB1ZQWDai7GskeYhCZoMPTB7Rc8nyYCBkoTCGB7dw1Qok5tMAi9r",
  "key4": "5YRfzZueRW6LBQAHxAewkZqdtPbuGctyqxamRSRdRwEoNJ5DiFBrRezRBko5Tk1CVgnuhQktrUGMjvt7WZeFf1Ds",
  "key5": "Df13YmCU4HUQqSLW4XQGWXxoRxzMLQBv49hN9Env5UxZ1AJ5NF49PSuDbU9QzHCSV11pg94rGjRfEnhMoBGeBEM",
  "key6": "2N932SGA7fmbAcwAWkWcpGTD1mfFiJJjUfWBzxDoh5VGYgTWR88rE9yZVjfsD3EXCR7SYZMVUhtRRR6d5inx2N6s",
  "key7": "2UE5UTkj1sM8BnYP8aPovvHcZH8GDQSZQgcSSUYMZpfNe5wQ1izqzCuBb6JhG3qT6ZQ4jf6sr4S2jpSuxF9A7Pu1",
  "key8": "jbmNghMsPxUPHrNKAj25hidBX9EAqryrU4wuCwyx1coWoPKmAwk3WK5iE42JbwjUriMSZngDqbe4phBssJfkEj8",
  "key9": "531zGYAmPdSWoNRsWXWzA1DPQpNrK6sqPm9y5pLPuupaR611zCL7NsxVWCgAVZojMgsyAp2VmG7q1GDBhawAc1c1",
  "key10": "e7VzEJ8MDDHUrQGhXPfBiRcqfFBoz39jCaMNkg4xB866Fu7kymGZ3Esk6ZYXMeMXnhLsi8EQ2MLp1kXXz9t5N1t",
  "key11": "3K1pFRyW7Rb6nNRcNDAhYpyykvB9yrj8RDZK7gZaNYhXAdouH9MCPWtBU1mmj16Nh2p6g46nzhupXH6YvcrZ4fsQ",
  "key12": "yxfcQW3oS7esCEYmGUJemDeeCKuQJxAvRAzjpBkC28EbKmEdm9vpEBSpinFvfiKyJ3teePBN1usktvCjb4FNAjh",
  "key13": "4y5qpm21BDZA1VuUFxrzA6Eg1ozUeouYQej2FUVmeWWF7eNg4sT8HzwYEbdCiJdqh2J6GxbSUu64caqMqTUaDimk",
  "key14": "5bnsn3RZAnBtkXviHpdaCAQn9YVXqFdX7esjdmxmNPGJRettm5ySs2F3msGjRf3sbLEj4G1C3CmLLDtayuwUzSUZ",
  "key15": "5tWU2cXcd3VnZii6HivJjMnaMyEgPMGGxRKPQvbxZK96YdainJYHaFYm9xBRtmREmW53DiCN41DiBShyTadPRUeu",
  "key16": "39dLekt5dejEQN3qnLjfCp7Fbu6qPrQ6t7b99SsLia7PT6edjDDzUT8kJuTmvWcjk5HUB6yLkRPX1A1AiGvh6qTu",
  "key17": "359CZWkss3T9FQsKSr8f8Nh85bxapNMUjR9Jc3zutLG2Uwb9daAZw8Y1C69d5som8LARs1fP6HM924jgxHLWd8u",
  "key18": "36Y3Xe7cf9FSHBfK6iQUbmKtPStBkJYpNq4NAzSS9TNSLQZj6pzKH2s6cZ4c1enEo99qXhipVBbicbzDjRrMYCLk",
  "key19": "3aA8icDHBie2tC8LnrkyPSBkHuSAtD77dh12VN73qeLGxKgr6bs5Lmx3jDcuzf2BSgMoKC3sjtCBoRqdkhPvfpGb",
  "key20": "46GpRNi4jpDH4bQbCnW7G2UBmXvUKExwyptvC2ayHgSQuwW6Vdmx4RoLUS1XbZH7RXSDUEEyKgg36TQ23dFeiP9s",
  "key21": "4ia6S6q6u5pCuWYtckWCc7d7QbMYrve2uwUT1Kd7oHGrLn1qVZ2TXjN2c5y8VwS85wUQi5CHNDD2rh28mB56gvEp",
  "key22": "5xzJVjJcmnhCtEwHdr4in55GYgsq2GjZKsTyCow4DsD516212GC2WJRNu1AVyjGxH8AvNseh9S2KttzfDACMcunr",
  "key23": "2qF1D5sNLMWbKwi4SofT6NYPEvsphdMAjuyU8uBLyWScRevGntn9kTFViJhw754xw8ZSodHNtquwYXJMq3bxa9sA",
  "key24": "27geDQbcMCVkDABVDDwsdYByGFqopEB7N43BqZLhCyE8g9V9P3JczcuZNGJGBEphqMmvyczvxyWNYjNmfe1i8W6C",
  "key25": "3pfUrzqv9R8Z9P35L5EfuRGzQHrCPuHmqvXpQ4vQQe18s5nG7qtX5T5bpGVdVhLkHDvzhvhhXrknHmmrvutFCDq3",
  "key26": "TfVv181HXBdp1KsbV8n96fPyXxJ3o53LRoamUJkXeU83Dpq1acd5LPVvk1tNrLykZNmUVxCGFDSSdbEkcAf6ySc",
  "key27": "E8zvf52z8E2iXSMJkcVnAbpQWmCUjeBNwrGwheHwVetgZhQDHxG8NQzR2WnAD8TnLC3PYxeSb4A9G17wMpcYcP2",
  "key28": "3SRmJTxoUYmvag4fVC7J3JELoRNbFcFhbQwE5Yziw6DtZhSpJmbTWQgsQ9jaDkri13heZKguSiMoDk4TwsfeNAz",
  "key29": "3M72nF7jxdthyKUhdbz4F9k492MhBMPZwDFxoPNb7ToeGc3YGLDiAYSiwemNM6EmhHuDw3Woumgd7aT41BF5T4Db",
  "key30": "4CYSCfw2rd8n7XStbUuLS9U4hGyyo7tL8gpePurYqHJHEkReT9z8qLVtDwSDoyXqHjU2tJKbaiRBKQGjQ6insRbV"
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

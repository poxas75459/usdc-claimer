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
    "5FUarN2U9J1gPfUF3p659YzoVrrb7MPj2JhJ677HThGcUYftWUmbcWLVTKLeF7gunYFUAGs6K9W9vhSMP6RWoSG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7tciXeYA7UXB2B5xessmwpabYYRXH1mSX1xk9Lhi7zoP1okMSKv589V8jw1LKX6kan9SAN3nfP5QMVDjj9Zjv6i",
  "key1": "vG1ETvcFSbqBxku8HpB3roBe1m2wEbnKKgj9kV6huB7yM32PfNjmyMwMuYtwrMXgkBf2ZYaeEs8AoD8Q4cUoDw8",
  "key2": "2pu28EjmjxZn8MWgHgh1xGrj6iBLXpT3pTQ3MFhmSHQ9gEQKWjF8kmhG4x6DwN9zaibzb1bwGHyqYecEUKumqx5p",
  "key3": "27YTuBJwsK4MKN5wqwxXNJTHWMrjo31YawsgyRzXqPxyvNmAmfphgVtG1bjrmYBYZ283omRXJSvSb8G7fC88vgQU",
  "key4": "4M2GF6p1R5DqHLsYG5go8HTVo19kSFA7kgkBMdk2r3pRrvvmHA3LvZ18mYmqax2VA5FWEWXjk88opcRdgKw4yVM",
  "key5": "3x5C9jhEispx8iU98ftx3g7i7ybFfuPkNAWS1YvBV29JE7FH2LmAcn9FnuZe8NyZHzsnvJuM6648nFVpjY18Ajpo",
  "key6": "5jSLoxSJussoeffGjohQbAV1uLFX78b1kNNczWfF574KirdtJ3zZ57ZbXhMovyTvmpAF3c2HB4EKTrx1tBP66sdd",
  "key7": "2MJ2gkgXK4MENDTbxqyFjBPRNGB5PhjqdPB4DjUiYPtg1RAq9T5QX9Y51g7nN46gGF629AQJKfD6xbjkCD3Tjf6J",
  "key8": "3NWUuG8AJsMxj85Xx8uLkmZVLWaMXSL2DNx5cUHzJykXzQLrrVpC13nnxhLC1Bru7xcrhwfDbVFXJnFRFhEEAfvV",
  "key9": "4YEwVFgxg3GeuL1chsvbeoVhBoydzeQ6fccPqVCM4TRYxhSmFXx1BJfkJoA6vSNfDxQQsVb7uQUJVJjx4wLBDtnA",
  "key10": "546JFiUtSkDRGELjBcpKb8yikvS69HAvAq1fsVsNWmPHF55FBL4uFr47rLqaxo6pEWKU7Nk8zHdtGRbQavH35anB",
  "key11": "o4pBysjLtQNAHqZoZUsVodjF25JcKMW5ieAVSBeE6pNPpCwUbktqS1v6SnD9Rk2rYi6S7HT7iDf3vGV99KSTndP",
  "key12": "4Xnb5M2FUHyohw3BYKGND2pbi8L2omHfbywCEXffENM2pRWLcJXQMxnm3SdoSWaB5SpHDVyX4h6Ng2eZyow18LEd",
  "key13": "2FZkJrx1B46rCBXAHyvMvbN72iSkBj5yw9c7C4uFnHJ71tHrDYRvAwbkPtMqh2ipz5Nv1FzSrFFi1wggYXTjmGBg",
  "key14": "uSVu7M8sD4Xvae45w9PD7hwrEw9XTAwe6fnknQgLME9yLwGpfvUjoTs33MovtjAqK8sVbqTGRPaxguLB5drrTd3",
  "key15": "4LfCWzzFhVWU1XBdZmwDgA96pdbVUhgn4mJH88wBb4vxxmP8mX1rmoUVZymZUjGqW5uTxLyb1yY2hTqqU7trnVph",
  "key16": "4H17HDN73j2sZbH6U1dgJzqbfHxStiAqPaCLJC3ngYY5wqrgpRReWV3UwcKLQB2qikkyyrFL4at9T6XqF7h46GEg",
  "key17": "2wnTnJu5jg4psGDTk47LwH6ifY5h9fEUb6CabjSRmexLbrvmhpokoaZL4ARpSnJaNDr5ca42tkwnG62BndVAjVni",
  "key18": "GdRRBreW39cR2f4mKmGpmMTsbWVNvBcTMQ6RK2Pgsr16QkoS9WqAvLNVm1R1inxcBB6rLp22b53uMyMWjDVUFCL",
  "key19": "4o5wqXRfWvb8NgBk3VmhkBcrJ3QfCWYU2XuyC49kTN4FPwNAHqVb8xRuTQKrD4M85wKAyvPcRK2VwT9GG5hprhMM",
  "key20": "39HdBevVR6NJZL3XTUs6Mrx9JL6nx6bGesMzrwoPte3CGrkPrHiowhT37gqeQ84CvqcuFnKE6BqAMwsFnpvv51Un",
  "key21": "5G7cNqxUGeoY5182ZoAEdNNLDnCkF3JNtpHC6ybdKuq4nAAWKdCCWSgDQa7HMvaVBupz4dr9pJiFYkYC1ubx1GxF",
  "key22": "uxEMw6V1Hx9eEKdd1wVctvLto7jrjPWe7NsktKfqtrLdoiYGGpeJxSfgtqdFBTXyvFsiD1jKckfZz4z8T7pcHAm",
  "key23": "eMVW9wLQcXaR6J4TGptDPqqP1UUNuCCqF3TGLoZEF6YYEgUzBb2ETQKTQD6iyBj9bfKyyvyvAwewheg5vc12PPy",
  "key24": "5AEMe4gtAQee1hZL3WD8Ssz1gw1jUSp6RK3BbXqU42z5WNBQSEjzUqwi7Sa2yeqaYoCz52K5zUB2XRgWQLJZQ7gw"
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

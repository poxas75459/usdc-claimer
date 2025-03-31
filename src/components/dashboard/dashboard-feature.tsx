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
    "3jHUBSu8zxfdoqRj9ysrP3B1BhpscL6RsQbAh8int9ZBaM16FyVeE1tjXpHDqtNVEorLGpAo3E3bxNGYu9gX1GB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GzySdKALVsodoKA6jUeLVRe9Hn8nzBnPMCpGVbSE1zdNYTavqbE61LK7uJd5VmnqNT4UNJB7o1G6stJPHnEUFsX",
  "key1": "24MyMQp7WMTHGvNc7bGKwMJruiqskpnRSySXUsgdjz1nrM6zdXgq4tJtTW4LE2TzttuFRnvTqBiJzT3cT1QguoGN",
  "key2": "YkSaXEbd31HPsGU2ksEtbTYPLE4kSLZoXJYHY3c1ofzguHsrFdM5CTqKwSzTtHFgYqtEnmsGS1Shd6FyhhAdjRd",
  "key3": "gTxrbm6C4Gab36Kejg6VsLTNpaJ8ir3B78GriXNL8RTzySvJpZMvbs4FRM785RfsFnRrfBb9XEu7hWaJDdSpzsc",
  "key4": "5M3yHMT34jvVzkbZKwoZBnyRKYXsmzvH6xW5Q59EyReZezYzDGygdpfDm6UP2V83BEmmaLJiEsjDh3uQmYamLw1x",
  "key5": "kWNNBadLSzya8JFv4tE86PjSLwBcY82EjN2H1UciQX39EAGrVGXdnAhghv5DP17X5G24vRcG4NCkAMujkcvg3wB",
  "key6": "XbzyueCx1QLDLaceuJahAC5NkNT5bPuvDuqLZQqcgyKnzCszUAaiqHoeQW31kB4xGszoeDs7AZyKu2YcA6pyyPE",
  "key7": "SEvJkBZSiiF1Y8N1AEp3xUx9UhmZgF2kMEWFZdALeUT1sXTSxC1CiM8ckyUWfyuxYdsCsCt1DzDTJmvKBoSv4Gs",
  "key8": "3zX9pEwnJe9hhmoQ5bABNLa3va5ChjX4MikomuEKtTr3tCv1Ge9sPSNDfrwjoaZKtzjZ3zVgkTSj2eqZ3ewKq5AS",
  "key9": "Xy6qz94Xb8FvzCuooV1heckHvmPmoo46F1p6V6ATaPJhVcnjeFmd9gKhuuiwdwQ8QAMT7ic7MhNFBwKEivuFipW",
  "key10": "3wMdcr6B7sTEGUPHEQASbaQcMqX7EbBDFGeLqQHg5SAWWSaaGjJoHSWFdgA62eoF6PqWTzdRMmeK56DKdNoUtuXb",
  "key11": "2gBaTYyE5g1rzTzWsGwpkBkD78btzed16FpDzdfof4S8iEFy36vyigdupGZyARbVbp9NivbjhitwNfjEPzbME4XZ",
  "key12": "5avrEMthvovbS8FByU1M3FpxEPXDGU7X7tggBokM1qnXfPhFndEUQ1oHAVhSZbrD1k3hzx8HuQy46qNq33RcsMPu",
  "key13": "6DdMJaW62EcvfTK9BVNgQntZxHzC2R3Ghh5qz5kmtr4fnBRi7KKP34ecvDvzpTwnYZsQQVBF7qgTDe6v7Yjft9N",
  "key14": "5EUdwU7Yd2LFc9SGGLq6viMRbxGPdg92F3PZxxn6NhMAZSs6216mXv5h1MEdecgFYVTAeu3sk9YCtsqLgqKcusJb",
  "key15": "KjQT6eBRfSAiWg1fSVVTkgd3WHtAd6dckTMaz5LSLyg7KZ9dHLsuMQ9dhpCGd66RqXTMNHvch8xrhDtz17vSrRh",
  "key16": "4BWMJ9pf13rApihoEVUADyt8oEnJiVHejoferRMgouHHLHiMdi1WFUJNVS3XvP1D3wRY4cCtapiiffpaEynadxJS",
  "key17": "2UUPm54U5zw4bUEveRjRStqzgqn8DPCnAbTASUudCeTKTEH8uR6nCkzh3poiPrmwytNtbAUGWPU3eHtLCbE7JZBk",
  "key18": "6qL5iTjBqMtZUrkbs4yNUYzkx6RQTUFxmCbU1bn3i7VneGAFYBwaTFFDyP1hFmJ8Nj8tL3VdP4AnMb48on9Capr",
  "key19": "5SL78VVNmamhM3qiJmGVhoykhSdWeUQUUJFjkFEEP9H3QtGbY4fqDXVijTiwi5Lchf2e4fAQWCpwMd955sTsBhMP",
  "key20": "3STGQLPTmjS764VeVNUbcHYhiZBJDGp3JBq4XvvpcpDP3uNWePJbFnm2Sdx3RB8a69LPHzftgcarpYfvigd89ccR",
  "key21": "H8Hg765nVme8d7FYC6Ewfqepd1xUbMbczKTRVe8jUcg7T7Bwy6FG7GtWxGHoQ8Kbfx11XE3hFJMRdQ9MZPtGGRL",
  "key22": "4D9MiddmBUBG6tQsCVZTRd3D7uWc14CTv7ZDSUzfvHqCuM5VZorchj8qJ5XYWVFy1j8pDNZ35UZ9ZYDKxbDR6gH4",
  "key23": "575ugt4UNi8o7A7gktgWy5U4PNikU5DcYvvUHUjKjrijYM1s7MU56isSsSzRSFTk1uA72MNVxiCRs2FnWr8mAHnW",
  "key24": "2CtEEBnzzP9uWZoRnLYwatibF8iBSHinjbyPi1m1BcwHj96gM85meFykASmfsYqu4jF1d4qsUTc9Uf738E9hMmPM"
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

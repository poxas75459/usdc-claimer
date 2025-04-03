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
    "4bhEVWk8eohDbvEq7hdCBgviSN1EUA3rWbKfgFLjNeVraBjvvKuxxWZ8UnauFNLv5jrWo7pJtVSgR2MyYSonjBFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2whAeZCZDfVtLLEX79HiE7gVwqNbDbet4pmFmxMAgRVvLeXDXkTN37kfADvkjaNj3ySgo2p4EYr2AVXHKhY462fM",
  "key1": "562Sj4k3HUQ6goKdBFmpFgNun1FSs2cpbWSzxtnPm49JHSNN4raZi2ZJEkhRcmMccFpzFhMjRignNr8Lx6q3KZvH",
  "key2": "2qgHoZMkANmmXxfsMnB5Ez1dDPFUjmeRwCRDzZC7ngYFzMUoxHw4m58veHRwTLA6AgqAzMAABB5qBPsfqT6cHXkn",
  "key3": "2tfBUEPmyVqzSiaLbEy1SsvG6jmKwwWu78E7FLQq3pFRHB9PGFApiiqVWofxUnj7jWqjtYo37KorMHh64bJq1g7s",
  "key4": "ae6PzUz3NRXmxUb8pNWMMkjTTMPRMQDFK3sFACpZxugPJRcex5Zg9NMjyLNQQD9bL2SG81kydU9x651nFsDonNM",
  "key5": "48Bq6bC3A6TxJjmR1Zxv3bgdJuNV8tcUey2ATv9rVt4qAMbruzY9BHEvehXk1Ti88gXZr73ejFGjdLzBdYe4FVtr",
  "key6": "3AcJ94fydKLnjH18MHuYWMwXia9UF2yWfS8tCVPb9Shrx2tXykKsvvUnLC3wwrMeEseRzyQVwT2vWcBU4HfSiWFD",
  "key7": "7TywQ2GGaZco3hfXcKGj3Xhp7HE1ey1WfkGocU7LXmKydS1qVteh9oD9j7yVgbJETh2hYa8iJ56jN8Xj72THgKd",
  "key8": "54zD3HFcGNG4Lk76WPtFnqoFzc2kG5BiZckfbozJ5TKLGcb1RFkTZZyCLrMtEnoMjKzbpXSQWqSVRFpELrmLVm1T",
  "key9": "47GjiGpQMd8snptfaPRnmu5MEyPsET9qpo3UUb53foDuVpfqfSEcNTcVYwzkvbHEMtCJfnicgTJYq7EMprvU5TTU",
  "key10": "5BgaFkviTkcSvY42oVovT5fZ8G1kFoeZWCpfkWyzT77UEJvDLbU67sjUpmY1rQ86UfVcVNksfJzNW2VDFHEBii1i",
  "key11": "2N5D5TkDkjkfmvL594ZSteDdxcJyp9Xm4Ga85i3bnSUg7L7FcdVsbi8LCLnqMbMSKAnKfYaxm5C8ogmCGKubdD5h",
  "key12": "46DzSf8gdUuzoqCGTZ9CMz3njBeKaeT2dd6Es1pUqBy32KQG9vhvjrLUdTubtg76hDKwgXhPo2NWcB5p7W6oBXHr",
  "key13": "pAB8nhKLy6bTFCMGd1kQDfSahdqwyRyGtpYXTpibrh9WrrU9npxxypfTg6XJ5fFQCxKMMJUgkFFqdhWGUodVuZv",
  "key14": "4dTtnLhnRf9YRRWQ4mARoxnT25K6n9XJDXZj6ghSGfDt3zmjxM9okBhsMdwFSNauPMDkXFQALcmdy7sYYR4HhWTk",
  "key15": "5UDTK1Zr4HC2SaVqzQ4mZEtUPRY4s2boWroaipX8xdHavabaVqWggAJ747nScTwAM4yiwDFCpYFmBzbhLL2R5iuu",
  "key16": "3uZoXzomSHfWgknQmdFZoGVBJS9RZFsnVLJZT4xw6mGGqdHDw8ivPuoMez5Uv7dwqP6yUubNuA46nRQxzK9tPsY5",
  "key17": "218j4QpqqgAATM4PQQ29rQPY4AC9hUjFmuBAFbbfk4gBtPwrHfEHb6vHcJ2jHsTCTVDcpTqyrsK2xQBYjG3LCU4L",
  "key18": "5QNy1xwt7agkpckdutH4GLB8KdPbaDVwuADhyCEAZjCBos6sMqN8fb74AtAiRN3rmCkqopqsmAcLS6yZq3Wh2bZW",
  "key19": "3CvBYa927yaFjBrwhNAG4rtLkBgc4AagYmCik5kF2XHgVj13XxtyppZb46WcZDwmzBy8zPABG5fDxk48hBxCnU4F",
  "key20": "xvLtxhkwR78S27MN3eRf7tDomo1jyLjb4HXy48zvESRbaEbGj9CKVDmqdgPRrSphwPMtSssEKir1h3XhTTteESB",
  "key21": "3XuSCzh1zrKP9xiuZ68Ln4UpVDQ7Qmsmr6fgeiRSChKe2oGuSoFw1AtHcLxX9M4P23p1ANyJupBCSEgxSU2BeAkE",
  "key22": "SbxMZ3TEDyJ99CgCr35VWPfuXH1EK8qGVBZHfdKgeVotW96t6fyQnj3byaF9reXD5ju4SRe7rAWd8bseSU1KuZo",
  "key23": "2ZNVgsYhESV2tGsMQf5sLj1wT5A3bKBDBhCsag6rNLiE1y5PFqEhrGYFM3YCU2dZTTdnqcsC7hzT9mVr8GBN6Rb8",
  "key24": "63UeCdtCRBjAZjK5N133kgkgdmVjQDSrXuM5Eyf6fEGgm1HE7KMdwmpY96Afj2Tt2pkQTv5j4jFH9m9W6f7Lbyw4",
  "key25": "62Ar8eQJ7z8W5GgRDt5d8LxUeTH3dGJozs3fqsmapxRF32UVUKVTU5Jq3o1HsNd8LtdfZZEuGc9T3um33QkqUziF"
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

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
    "gL4WEpSrDsDeRrLUnaZ4zLkYtyqjRSnPLptumnJriN1yTpY9xmpwjPEQrt21fxU69A9sK6x2vDkh2RAgTrSbzae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rkMdg4j7S74Ytt2Y6sBZa2QpsmHVKuTRRfMRDD746cjzNgZWNCX5wBmW6upx7epyxej3UyVxdhy2NTmeMpipLhP",
  "key1": "3cAnmWWR1DuSNby83uJGFRBuyvr11Xxb54Snjo5gaAHE5KZCqb6WEM1LDqyasdExiq2bEq7Db7JT28eaPTDTPKW",
  "key2": "3ukS9V7XMgRYmp7JP9gmTBDPgBp7sW7BQnzeEzKk6P4sZLuGt7oYtcRzj6mgCr1U4uNmzmcYdrwAf1waL8BYu9Qm",
  "key3": "n1fKxXqoPrqgWv8gNMUyPeScX1SYvxgQBEBvK42g8WM5wWGyoGSDzUTsBwPrYk9dtRE37cGzizS3fedP6cS83Kx",
  "key4": "661WgECCpMUVDZgSAvMY5CF3eReLgpsxmMcUETmeB9o6yfGfouabUYH7kAouEJQqszag5VA2Fr1kmjp4EYh3ppmB",
  "key5": "5CBiAJm8FGxipk1V3YwXrtNPPP1CmE68cNNn2UHZ6HVdBfAjwMFzrhixH8VP5pqejc6XpqyeZdG2UqWc54wR1Rne",
  "key6": "5rsfjuabqqkjSdJ1e5qpCYW9aqdVzcSxvZRVTA3jMusAL5h8u9YjkT7inv1JiQ2ciNVBCUD3H4KtRGesauvGWMe7",
  "key7": "HspBCEJXiU4xBW4h8bZQATB6NMEic6oPRqBsHoZDHhoKUEGrbVs8LqyoAYb7hnfVVjYmJAdhELNiYsxcFHAFoAn",
  "key8": "5YGzjvsby4a3BqGRi4hNmEXFuMEJt8KRsRqrVXrTpSpsHuenk8k4aoRppWcfjA9agnoeQN4viW2G3VHAUqDoxVuy",
  "key9": "55AA3a8b87fvjgBJcHushuUGnXX61rHaYT7gBALu91ny5Gxctofu1sCQXA3iauNJLHYcschQB58y5tJX48eoq3Ar",
  "key10": "2MV14u34SzWx7zUCSajGX5fsEVwHt3FjzumLLWiVaAxXJ4M1CgvDiyriUCzwfuW7M1mkCVF5P4xTY46kuAr1fNBd",
  "key11": "5M5CEqDxKnZUvJfiCF3hHmav7h4WUvB74nA6FAL8xbKRxYgqQtsZQZ7rZFpxby3jKjtUocLuXo164aFJQjd3dbvk",
  "key12": "64rcftxxHkJX3iu1hihp2FrfAy9bLZBmmaD2rUJQ41tkJoYHpt6E87B3RgZx2gYDjBenpENQe1aBNfiJzV9vytKU",
  "key13": "aTW3wji9UymcUg1oTbESWPYXp7qNSg1XH5g38TdYviSQ31WPhbq3EwKPEVmK2YBvu3U9PDYcK445Z7GtoM8PhrQ",
  "key14": "KE74zYvsTnu4mTm7K9Gsk8r3tcFYwFMidzDn27Zv3umP6odcVHKenSWzrzX57DYxH4JL3mGgEEjfi7APPKttc3x",
  "key15": "653F69YQvf47rpXmtbfzb3XaY6Se9JAKAWrFk2HHEyUyGwV2BpdiYwXksmCBFGq7vnzsBu6MJBAFGRdSGDJ5ez9Z",
  "key16": "SFCJTCaeRXpkRwNiJRkBFFqRtbrCrDA7Qtcd9BKMKBamAGnYBePnG4qQE6Wwrq96Akea7t4LALyd31XwESpRWHh",
  "key17": "37ZS6PbMQUqxYPe6BpmdtDQiAcCintiXvj8G7ujJT6UCXi4vTpSHcHtUHyZKDehUkcMzLQ6GSdUKvDZpBYTwDQKE",
  "key18": "3GUx9MYb8gm8jswnv8EcyGPKmymXzwmQx9oxcn8HfbQtEYaz2jvfRmfMqMqsHSxvoAzsvJBV7ieTwqDJJHMCLmfw",
  "key19": "4qaVeL8ufqCoPiNEcbc8yxJDmV3kKCMvidA2r1s9KD3WkCcHCQFTTaEHVssx8jYdSQqPQQB4aVzP1BimnpLugJaF",
  "key20": "445ub193nJ8ZqAVPe1KvpEzA8vYYZihhuMr5AaqNWjwr6DvVfFvNtMEqzhMUNKk2R7Y1ZBHnbJno7GE6BMEB8pc1",
  "key21": "3H1qnTFWAzdB4SPQ79iBhNPKdQekzFzHAzYiZCr4DDPUyrNKgvQsHC79nm1JJmLdx4Nrj3GEi2jGoRDH1qFZXpCF",
  "key22": "5x3ss9zVomYm8Qwn5ZJokDLXRDTVDp8A4py6eo9CGSDDQupsEFLGLTXGezvN2VSoD93tLzRCFs9DdCwk4Brh7E6d",
  "key23": "58yXMXhM7hAhpfoCp9ZpYAWxeCxHc73CEr8tY9X1c7PJ98VMDFX7NChaqEY6B6VdE85Aq9MBUFf3xbJBop4pAXgT",
  "key24": "4XNZoJ8iqgEyrHRJeYaLoEvNeRu4cBBzvDPo7m5EexMmrcD2AsXHF2JZF6i1s3ETHury24xPSYTxHxKBbU7bhV7k",
  "key25": "3cdxX6deAAZLS5ygSs49dEzvAVvNKpF8eYX5k5bTYsiw2QSJau2Vxrtpei8iDaTkJcPZ3n49mmRdbPwhqcC8ufN7",
  "key26": "4nYjZZpTaBEUqD6cCP23vj3sy8ZrsrGbA6DpHPjpqTXGXK1AgdW3soJEtNPRgT26JrsxWiKiJAfACawXHXFk2e4N"
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

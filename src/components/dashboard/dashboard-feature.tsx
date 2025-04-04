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
    "3RQqK16ApFiCgD5YXCqyDsUJyzpWyGt6ds6L2Rn77gmPrGwcd5SqV8JaypS8gU2rYiB5ZhzvJH8NYHPGvV1DWL7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66ygJUEaypLkbdfDqGeus3WB4mqPV7KrVAo1eQk8rbA6jA94xJG7MqRHsNwbvVoTECSDb6QHDrTwPUKkzcFjbTDF",
  "key1": "2RnQvUXu1CZCHQ9mEyx61cuBjdW5U4vz5cZBMKGMvzYf5PZufEAJZUeGK5viF7oTGAG1dsg4fDNbi9h9YR3mLuiq",
  "key2": "4ziozjTcpfWFiMxmrEPSKkwi5HXaeSN6XkYraMUBWdiwNFcrXdb1SveUB7jNyx7rySY9RYoybbUqxRv8p9no2ghq",
  "key3": "3Wfb3faUkCNdRCdxSoUPd5JnHyvyp6kbF5f8BfXXqSHKGXqDhdMMbRCL8YbuRfR2c39cnGK1uQNmDyBjAdVqxF1y",
  "key4": "4VV74LwXeiPRk3hYRoXrFzKnwbijw2jGq2tzYrLTWKVtd4Npy6Qs2r36nRWHkA8QQdCwBRd7y1qvvCSRjC6mWcvf",
  "key5": "58zYU8xXmxLEzHh1JJkD4Pa8MZMhgTydcB7YMaWXbzxLb7fof2o6oY332tFDru1g4UUgAapgtpnmR2PP5VKzH7Hy",
  "key6": "2ZiRwKWdsd5wVW9EnJpsgPoTKukZMjnGYhzdQM3fjGAygGmFKbrgGedEkxzwMd6NWkDSmvN3HjGUF6JbqSQdxgyV",
  "key7": "3fr9SN8rK2FYX6pLSD8RpwSPwq1SA68ZToP9sd83xaUHvcWDZdqY5NvyfALoeVZ79ahrhBd3iGj1bLhSC22HUiNy",
  "key8": "67V463NNzKh3rZWpPmccP4MYepyPPkFHK9dVubmaPj8P3j1TLNtb3WVsbEAEU7xRWksMwraqGpMPayS1ZaYYwKCq",
  "key9": "6FcwgzKRL7pMsdj89XWjZRiRT1msfrTBwhCB2BzKrFFU3DPwzPsUyAQY9VpUnSrQcFY6D5Kd8UuW6H21c6eV5Up",
  "key10": "2TJUCNWd8H3bKbCuiV5wzJpmaorkV7KJEJkoDJdau7D7GdKhoE3A8o3m5ro2wkxJMopHnaFpWoxZWPjSYZ9YLCB5",
  "key11": "4aHw9SGFWEgjrXhJRGa9LKJi32MfmBATsS7mGvaxMjK1NEzaYDKadPBcx3v7QbDN1ze9ibg7LM3sdLnGtEgDJpKe",
  "key12": "3c4V28Exwn17F9fSTF9vLj8r79yYvSkU4R7pQZPifr9EwNXRnXqidHu7q8Yf5AqXVPnj1qBpCksahQuKKg5pcWqB",
  "key13": "8Vb8KrsVZbTAfbbBSp6Zpw9Tp74LH6SpKFDusJxTo4Qqbt9GetAEy9XAz87gVn6rujmSCHF856V23GQeHtdoNo7",
  "key14": "3Jon1MQDLCQ3txbLusiKKjzWcAhbjY6RrANcVYUHhYmbrLY2CxmDW4kn3o9mo2u8y5dGoB64AubggnEbAZEjKaEA",
  "key15": "5FvUEHuk561y5qqEgoxsm7ykJRDvah36n5kZ4JqV74pTr2Qnuotqt4z16HFtdP2d3a7nTQbsuAwgbn2hhCrGn2B7",
  "key16": "35tVhA4F3di8FVjewTnSwmRp5Hhe4QEUDnzJRPiukJqSG9muSNi1HxnF5Ba3hbGaLKNBTSgmzFhQiJQQrPGknQJA",
  "key17": "2CNWcMCUc5RrDfWU4XAzvVMGUUKJeoGAbW1FEniRvtS4xzyLPxUTgw8WtWbg9joHiszjZg2evuh1Be1EpBewHr5g",
  "key18": "5rCdNtABdj7CC1drj65vXZh8t9J4p1tQP38WPcJugP8QGTaWp9LqxQZjPY5X8suHM8SQSAGJ4trv3GAt3fyDHfV2",
  "key19": "5sWY82CFdkRELSHRxaHsptgJZymCL16NSUXpUpvp7XX15YePWHXjbBbqjTmU5VimaC9qJMjKem9VC1hiGZ4UGGNq",
  "key20": "4nLHehdJpkpULviX11i3TbCEHMNDfr8cfnv2H2wmXcvftYcxt84m7xG6gRZJADbaLum84Sfh9UiWyzEd1rETMFsh",
  "key21": "4NS4yNa6wu3iiDbUfuKHTZ9bwbu7jeNwudXSLYMk7vDCWye45oPX6Cx133smY1eGAyd7WLW5KngXTGFZddkuJY4M",
  "key22": "5ocmSAGjUqmWSsQVKjgCS9MxFwzCvGNTZRpvxAkWGFytMZFnNWDNhTUfFbV2YzCs6t6A5id2rDysa1Zpww9B5QC6",
  "key23": "45unzDFCfpQziQpqmNBij5qRAtigpasH9GRv16nHzZrY6hdKqMwLp3xXhtp5VMmQzWDR8MrjbHqwswVAPTriMevV",
  "key24": "5ANvEW1e8h2Chuyk6sLXzzCEowFQsUZrirJnx2Rvhw4rfNgcUETerXac4dLj9XHmLREWm2T6WkFLJT97HF3z1f8Z",
  "key25": "3wQTnZH8m4RV8gCHGBwVDp5yh2iCLx93wcB3jnh2zXHToas1R5u1GiNNRCUSo4HzsLc4xSG3xq7SzTU5oFx73fC3",
  "key26": "2USMucdpVwQsFsFM6D2QUm2s4hAb5xf5APzMCAgoshGArSf5yLBCYYyJJg9L6ifvoynsxc9AhgSvRe7pv1mj3aUL",
  "key27": "4WDSaiut2UnKUNdAUt7jHBuE2qNYcNjPzTcWh7cFkBmTTr3WUVMnqjoufzocC9G9LvvcQQYMvgQmKUdDvMFsX5VV",
  "key28": "4afdwboZcH9RER3smmYLWnhV4a6GbYRnujTNMDfE8kAJpxFCmDxTgd6BPc3RW2WVKcYBuGgScbqm16KJKEFBidEE",
  "key29": "2PXEHhEVNwBRxistNzYFSXdkenFSBPUrd7zPiEM6V23kHhJiwD39XWC232EGChii9j7o67RZemPKwvFKHZRyNQJW",
  "key30": "55yHtKHXQ5XhAK1QvU98RrfVgYzQSzkenLUGpKMchc4ZLsxFkhodLr9DGsPFX1hriEv9sF7up82WxNCZ5Mv8Rpp1"
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

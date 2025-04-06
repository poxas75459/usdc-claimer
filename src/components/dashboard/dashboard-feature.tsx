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
    "YPsL8MzSFw4JNM6LyV28VCYphfN7vJ2YgcgwjzL4ESv1W4oAwaacTvRed8sYeGpMeg13uKrtUPUsMttQsB1CoA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n1Pbj1976F9kA23HhSA7dXQsfs5Z4Hr2NURqvgxf8Lia6UssS3NFuVWGG3YY6hkk3vhsKjLb469KS3hHuAnSUk4",
  "key1": "3njJZ8Ws12QCbREn9uqMjJgfUUgV6nszA8Y2vfbbhyUyFrFti98DW83L2tLF284qxPkVbDWAyyNPjNb9wwYXken8",
  "key2": "4ANEdvT2DrDAUCf9gwqjtooRwSru16gkYnmJPCFsy2yVSHBF4LftLaDi3FsvYhkgDjb8Hz98PsHHdXpFHAT48H2j",
  "key3": "4ZgPFrsG6NpSVkDsLb5uHmT6ZC9xcpVrRgEq6mkR8s8AdjmWyyhzWzJqtzDyKckrwgrrKvZXuGdo8ykPW8osnEie",
  "key4": "4HG3tQfUqCgE4GcwuF7i7u6RQBwjDs6uVSJ4BAVMQfBMfWWzrNHvDB2CvWzarPc6p8ja27KixinWn8kCjGrpxtWJ",
  "key5": "4XcFAaEcu73KjQSVg7Mbs6CpAw8AEva3fMBaLcp8ta7yCFWkJG1GtyQNUfLZHE36jCEAKLNciu5SMMRy9WjhQV4q",
  "key6": "2equrpYVeNGKwqASeEfDPxo2s92r1coMSQa43a4a77F5xL4trikGMcLz77xxHuWgshwKMvEoWHu1ozV6gQmv8FYr",
  "key7": "5BjHAEh1zN5FurPRyLGg2C9LyMvu8Xx4RwuLBEDsi1k99G33ZXPZRBgBaZQ4PZ8cgLMgFaribDkjhqmwjqG8z4Lo",
  "key8": "5JwvHuaoCE1qTXjbf7tQRoQCroJVt1Lm3YADq35ym56e6DfDdGKB1eNMsy39AEiZ1m3GDQcRWmA99tmPrapB4vNe",
  "key9": "4n7rtDTYbu4UHQWiAgHtxQ9mWJupNFPsPdP39DKJu1nCBPUSquDrdKihdQUvGFMNT1NMCR44FEpY9HDz9oG5frci",
  "key10": "65CZGmDypGFR1HPvv5doMzvMuH8sPFX6AzMbmQq5AAhiCfLcqerZ9X4JrixZL2xTGXPCuayiq6BbchHxaNuZyY3y",
  "key11": "45B5opkD3hr5fLZaWH4oJnmxN767xj6ftDWC23RZi8vtTqpmi28tnpQfrouzbWm8qfiBSESq9ZHmV7M5Mh4KruLa",
  "key12": "3WC9APnckH7h595jV9W6zANzjiiQQJovvhzV4iTQSzPTmN4S3MrtGrkmpZaKffPAy7kQHnSzCiM1ie47cujTUM6p",
  "key13": "5xRZjHuW4x1sYkwjdQJFhAY68av3bk8PwTKJCTNtCSwZ3i1tFLzQE3PVCLdoytrkkjwVv44cwkkNwF5uAUPst1hJ",
  "key14": "58SmKcPhiwEQsxx8rXUdj3wvWyJBdibkjtK7nxcWZRqwAb1rm8AJxaXgcEhCPSX98THrwX86cb82Hmo6WSJ11zWF",
  "key15": "FFXacxWBkewJmN2WCPPX6AbJaxAwobwBGUHb7fhxnaLYtCqXGyTN74zrfdz4EgzoHviTrb2xt72vdNzZue9ujDC",
  "key16": "4dAGaQzveYhrmYGveczBRa5ifH4g1GiViBPXZHQxehcYc66ihgJhAccUbpZ6tbAPfmERQHiU9SWornJb8CbLWnq4",
  "key17": "4DK2qTNhk9SXESs2DGsJQ6T5RoiPAU4FXxGJqRQWXirjn3opFDF9DErVCTmn4Cxgyh5erNNR3YJyXXygWRcBs2Vi",
  "key18": "VYcBV5Nviyuc9eXRb2o75cWZ9muSwrJoYBDSupZBwtL76dbHraBZEYfUwJs7RPtgBAsxyjf5k6yroZ2hNUhjWF6",
  "key19": "4cGTxm37RWtccymB7AJbpm82tRNAB9FNwUSs73RDPj9Dpcfhmv92JiJ1RuWSDBqAsMwoVuBLRASJQkcvgLEZYkNA",
  "key20": "3sBbjXASATKk5LB3GCbotukDwEaqHhLAJubFohjtvVeTwEn1h4QJh4AxgTK9gAU11oQrRiVCVDEZpwQ4gNZWWAmu",
  "key21": "3EmLFpF8n2nHdtf3q1YtJZg76DsjRBfJcDwdTaA1cq3KzA7Gwg8yJkAn3NfJbpXSPzH1HsQorfuoJvv2iRrcwFYf",
  "key22": "41NPVQgdG2mjhGBbreTWfqFF3fkxHs69RtqjwzpzutMRLwXXKc3CcVuaQLvjUZeGwCmF2VrRhS5DiNzAh9HSfr2v",
  "key23": "3UNuwJKWN5yF9nCbwKDdA8EPgzsrBLu5GzddLBiAgStYLc1tMZSNER1VkxJGP1s72tmzxmBqnd9XWnycAgoXG3x5",
  "key24": "2HW9TiCnK4h9sfZXqUGZgHJjdjqwacpA12LAbNNjtkxgfa9FrV2zGYEva9xCpY4BgBLPRLHJLkMQp331CtgDDYBo",
  "key25": "4NYwTtwDHjXmSN3TkS437YTJviKeNftGzAUJzwDkHMroneh7hqpbh4UjHAcnf7wLAkK2FSjTddn21wzS7hRa4ZnY",
  "key26": "4SYunpobxRyZuZUSRB6KajPZBCrECq6aKaX5Hr393m7zf4HeXvwsS3CBixrtxkQpVKsuF9xoKwE5doDv16uFsVmG",
  "key27": "63VxsDh4nmiXxZTFPDFgwHiT6zJ2yqLGRiXJhvBQeuTwey39JXb2ayBvrKH4mqsCUwLJFMP6Ap37F4r2cYKS5Qoa"
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

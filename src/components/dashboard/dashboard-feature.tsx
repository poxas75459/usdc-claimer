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
    "XXEUDQeLqLfBkikBqfsAc74wFewH4CJNuY1uVTuk1riyytNFzY54hjB9bQD8oPc4qnt7yNHSBmPjfqz2iYFHwvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KW2o52vnN2ZAztVGwkBYKiJNPrnZqsjUWfaAcLvT6EteV5Grc4FBQJLMcZ6nMXQDogihfQRZLpqcgdPbZ9hzJQF",
  "key1": "3JcPUZ4m7da4jMuSTk8bScVTkq3yNushGmbXNs7eWt3SwD7QHbnQ4GZkWm9rkTsFV7GFZ3qjKvjyq6tTVmwAmMUR",
  "key2": "4kvtThH97CfVrojN9PH5muZgerdqd5ZqQqYHNSSHk5WfV3uQyeedHpxv1eroru77zLAjitjXp9xZ1G2QvRmFiDid",
  "key3": "4SEpq2ubL6jUmsHkD6GH8M5TFKnXoat2tk2VgSK8WkUyEeSpbChq719cLBMQeuNr9km5mFNnjqoagF3aC89GXkq3",
  "key4": "2bsVe78Vp2BUY26XbQg7hyj9U3Cg3GN7dxyjTKmJPHq1LYSWEH8k4Tghd7DN4Y6eu7kmUvzp1NK5z173PbpFnz5",
  "key5": "3cWJKWWogLtprw8AU2qTPmYB19qRHG4XVXAgy3HWNoXkEKk8FHCmwxW35mxRv69PverQoffuaQVHSEwegedakog7",
  "key6": "56t6nav8UgQhgVCtGEDufsL1S2YQPpLVW9oVqLcfxNicJ3bNKtgcZfyoPJQe4eFkWz5eH5diYF4G38VUZJxHiHTm",
  "key7": "5AEBTqeqyUu3NrAf5irjxAr1hVVXrUPrL1zqvBFtkNZiAGkUBxxetxxRVKXY2CV44V4jjtW76qWEoW1TUyz5VV8t",
  "key8": "2FuJ4vokAdNYG32rv2U3kW5x3gsNYWFSQ7RB9441LTubvDBxNZ38NpXvVuEsFt1WxHXFViecfwjbp5hd6ixirarT",
  "key9": "5UsRyXdMW7raQxKdXKAfTN2o1SuRy93WCPEqgCGpsFh83XGfCrsz5nz2oEYoL3LpB5pBNZs8zYFtVPjW5uUUmr1X",
  "key10": "CYK2Dym1iboJT77KGcTF7VeXSTUGefuVhwbmwuaDN5x3QbEoR3bkD2jvLMx5faH6LaDJZrJKACXd3H1UDk7MPCj",
  "key11": "2Vmvf1otLcEeaWUzSqfcgqZJkEjBwNbMYFQznTeGxfqQbAe6rnyKDx28akRfbDcKAFUpxr3HcfUz4VvBBbcFfjwq",
  "key12": "5o1K1fMe8Xk4ZJEgqjzj5NfeN2ure2z8edJokg3nH7hEJ1dKfErDMr3zzztMqUDAcovxQ3ffpTJTSYAvgBzpNuvH",
  "key13": "23DJmNwiaspVUp5Xx4PwoNEAoX1kiENpn3pGa9HshMG5MLxKF3KRgYy4oFqt57hVTQVXfgANMuB9VoKtz7WwNAda",
  "key14": "4NVNGALoDH4RsFi7f9WnPufDqC1NyLK6Az8Pnn4osvaWfkoSKp2pUS8gidg219bbTCG3wpFAp1h5fKd5PB6rZuyt",
  "key15": "5V7wvpDKFmEeu7ix4RLXV5nmMZRypbnE8UCChSu2mMWJh4US5VLHJZ2wvYT6xV2HiUq4taG4rvFgK4eUxZC75ahn",
  "key16": "2bx31hQUERfE4SnUTiQWhLj4hyU1GUq2QdKA8oHdpWSznWFGW6TFHYcxtUvkbcRHsBwRLPBnQn4WfGzZMzK14wrX",
  "key17": "56rBhzzevjQWTkfBjGCEMHtgxoYHfmXeJ3rAxpS2xeVx5UHzUdkWEcAz4DQSkyaVDjPoHXBsax27Bndu6Yum4SNa",
  "key18": "5pKEbtJLYCZ4dnw7z6DgrtioZkzxUX8wRM1cPTFUY3Fdk4SSZmkPmHjLgwfH7r5K1Hn7yuZNv3RNhGue1fMD8mbs",
  "key19": "2wVZ1arVbeX74h893kCnKbENvazA4v3rGPgZKtZ4yem555QU1xotz62yQ8y136uHXMTTZ9uN56PZn7kbZzgwYp7g",
  "key20": "5MxXG7dCoWsGZmdxJKCkJtPtFhPPfUSsUPFCerhutCvf2jJo1LfLtaZM7wwd3zfoWDHEzuY5cBmDtuvMAAz8qAo",
  "key21": "tnyprR5mujDvdBWpTisTMZ79dT8yRrfUk3nJfxvMseV5gW3uW1YqwhHbSndc5ecq5ithWJScTm1hrky7WiwPANx",
  "key22": "4xJDDfcCV7xEjsuQgy5mjRdzctaoLktYEa2AW8vQgV8QamxFvhDe1avPvZ9sQJipmT5X4gXj6VvCU1ZNebo79FUg",
  "key23": "4ggnudXsegHV4uaGKCEpZCVxp57UNYrkzf5HbeJPrWqG2L7FRZ1nNR4UmBZRdWBep6qwgjMc6jdBi8QC7oxLKBzJ",
  "key24": "4Sk3vVj6LMSbZRwx1GRU1qRFiTLL8jG8GuebhEmxrqALdVZx1AjoVzCwniXPgtQZBRfhdDvxKUYrzCjNWGutTUFC",
  "key25": "52zPE5zrq8X4qGDgajQPjpyhsoC61BdziVLAdRonhJrWHt6or3wX5xwvq79shQUgfboxNGi32xcyTPx8QqCwRBav",
  "key26": "4TJ9NBjp2La9NL75g19tSxYe3Pj2dpkoY2tNrrk92abJKpikatVU58njFUrrcyVGD7k4gSzLyz5wmYk75XpB5kUm",
  "key27": "3UB9K2SYbsJ2GqkysZkCkWvb3zPBSjSU4sw1pkdPyZ6uJAjVHV4Tzs86FnzAMC1r6mWfC1jsTDDoTKYitoMn3iaa"
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

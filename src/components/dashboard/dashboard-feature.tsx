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
    "4aMkvPBZMTB13cCRUQhNvBvCif5dUKrxjq4R1KcMBzkW6ivbGkdA5McJqbDxaqAnt6QyhY25bg3W8nAgf4NuwaG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qMjFrBre8dRFHkenERoeSZTSQp3iU88G7pfiHakoWGNKn5sN9AoKLsEFpnpN8otwoqXyMCe34FTi6FVGCvU1NV",
  "key1": "4iu1aqCBtzDcPbUqHbpEfwsp96T2aGhoSK8qsipEyjgyLAU3DZeNdy9fJnHvWkH6DAVd8XywUKbm5wjRMgZvtmqF",
  "key2": "5mkRhGM6L7vLQPVgijHadtUQmxxBHVCU9ftpZMUA1hNqNmAf9iQVkHacJmrJ4sCrRATgc23fvo8vajz5t5eJ9wha",
  "key3": "5snMM49Sn5Nxw3aVzAGGgDP9YQLiumM3CtDqH5dgcb5YbRc9zTCeC5X3ySdAr4bEUzycuwaGewLRmwDECDhhn1hp",
  "key4": "xsGFFxVU5H4Co5c5P2CuQkHgifjtHQpPMdDUbsvtLLAFJF128W76UFxvnWHGWhdrwtxd9F8uP4Jj9bSFTKjSjJX",
  "key5": "hJhiG6NuvZTGxVM3hjiqJXxykWMAqsLocAqxRU9oEQE83dnvXJt4GxUhwbLn82DoX4QU2DaBjtv29vfDcTtgLtG",
  "key6": "3PixTKizfYt979QTzTEbHAW7Ntgwdqb1wXnFdhbcTjWrm4eUQoc2ujUg6JY25gNb361T7gBJNNzmRzdn2fQ2xjbH",
  "key7": "2EHkxpfPwQMvM9fZf2cRvt49UPhZtfzguDwhGHspT4yQ3Pi8mYFpkBwXyHDuRnNkxiPUQXpgnczKUfagcCQk7Fag",
  "key8": "49qTDUdNvZpV3JAWcu9Ep4cBZQoZJLVBK44sWzxwuwumxRcXShddRxD1KHCrWoWCbfQBBVgMkZX546G2TMdYB3r7",
  "key9": "5wmFLj9AcvBCB7FS6chUgzHsrRNFrHsKx366bvsFvsKXBUST9otCwSYkUXTYfMgSbLgfifsvHDhogNGEkMKaFZPK",
  "key10": "2i9ZVTmtd2gb3vPN1ZRr5wxG6nYsEddCnvsNihgRFSZ4ozF234JmjR7sh3KyEtPk1PtWaYCkfArPpztNMe6D6uYS",
  "key11": "4KyXrMfTePNez1QVF2stHVJ8TkB7E4DKLNv2U5BJNjWffbxcuQ2qHKAx9rjh9XbevfsHRauuDPkPVg5mpgoDXpoX",
  "key12": "3Q6bvJY4Qa4aHpTbZY3PdmVbbkHib4WUnHthTtJLUAppbAGHKRDF1f3pGWKYtD9MbUeFe32JdKaj4z7vNESbu8Zz",
  "key13": "368emKYDHRenNZEsWn7qCGKudzisXPtcjbFABWnjj12UkTaJLh73NjHgehD4KCC1v7L8rz6ed28h3QHsFe2eDzcy",
  "key14": "2YtQsxuQnxSEMGJsT6LB6QAquUY9asJKQEtqcEecY2GBX81E5mKKdYADmiXn2Gg48c6hJCfKzbG4vJ8kN8YL3aAW",
  "key15": "39RLS27KojYCdcRHRgcTHxPBTyKFDoLvav5ffn5hvWeecHqz7C1rA1B1XSDVRa33NaJhsp6LmnLV1uwFRJQYcW7b",
  "key16": "3jmHEkmnSeNLbML6tWLQkBcvTZPvZ6Kk7mrwmiZU3oYtjiH34hfxysNQRbUSHt9Tci61CJUZthEdcaQS5SpRGKZa",
  "key17": "4Cyzevc5TU6fZmzWm32f66RsGQW88W7vpd43hakzSgeGtMm3i8TVEB4JhosJE4oLVcwpm628R2y7oqEDtm4DZMAb",
  "key18": "XqY969pZXoGLfE7uHx6kKcMHYcf4FMShFmBXB1QZs6uJQsUHcJibbaxfpR37gMeQ7TjU6iqfd9rfDcDBX7PR7mo",
  "key19": "4LiKkyBQzX5kdZgsNFvu8ScKPo7924hN1PEj795DmspzXGA9otJFNeCHBRCoqoABqrtoos7wKGCsLXSkXSk3t21M",
  "key20": "7Dnc9vXEM1KMW5F9oZAE2nuBUkg4BaenNKnpbuweyDkTnw4hPUKp6PLa7WobHwrzWNa2T9x2tsfFyXUgXZgqyBx",
  "key21": "WZvuyirPtNYQnTQet9SRnfhncRMoM8nzxqEAcNozb1zYuwrPryWFL9mPRN3iNi26a8zuXbqBqpM346fZ2dp3pZf",
  "key22": "tfnCZYuzYqAk8BgZuZNpPnXhepwnXo71rx2xmNQWE5jk6Vgsx44LtaKSdmXG5m466nBBTvP6K728VtZFgVBv9Yc",
  "key23": "tepNdNwZD5irkg9X6TsDhdsWo1imBRR3soRSKuNBrMkrsyti4w5XQo9wCmpyTXb1zqSKjGJeuyFsZvL52CSpZhf",
  "key24": "36KybQtXgEwnu1QhKRJk7itFDmtLAof7YGNQfxj2ghfhrgx6QQDYkHDpJirVGwaQ5undbr8bb4t4TicmawrvfJKt",
  "key25": "37tZ1Pea5zA5rDsDu7FKsVWmdauT26DXPLfYrQa4YU6sT2LBfZCQVbcZhZxLntuHAmXNMxvXso8t9S3ergeFMdWZ",
  "key26": "4KKN1E4T494SJJDV2FHKXtxF2oY6Vf3fhUZnYji1Yz8bvNXKsjabFF5kpydTzTaNmACCTKv5o63Ra6oypxZkLDZv",
  "key27": "5v2JcBadC9ySw5ow2sfh5fASL8Niuo5WPUvz7sowaBZuXn5Z53CARS8N6WN6da5tdQdjE6gR8QnykoFLGbLobYpQ",
  "key28": "3oi5L7nEjm4iBCLnftWYq2mWWA3dtq7uyNtxT4PFzAwNdyL7ktwqgwP2E12Q8tjDkeFrdRmeHKSxXjZWiupbReso",
  "key29": "3Wd9Vc2qYffnay82ua7ZbTRAUdLZZa3j3y9jBSuZKJpxaA5j3QRzMD1UJihxmmdo1pw3JxnMUUFvwm2cMQGVLEus",
  "key30": "2gnbCDRPNbE7YbyRHaKPjHzTizxQeCk7r8yvvzJEdrp9NBcpUp3mY5DiDjNk5j8JfYNW8AFRiCygaNk9cYLRoB1U"
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

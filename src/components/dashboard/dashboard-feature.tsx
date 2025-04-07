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
    "2oMSCtXgZUVnLoALQzoUEmftcuFCksCAsSWRSudFRb52vgV4BF9vRpF1f8CKGRYgocskjCW4FDt5zrSZSBaVpyow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lotg1RK8DKX71gudo2nvNwQiEpQwCojvbQ6PYFJFxk7Gz1hoMsjNi5x2Zu8SZAHANNF3jizK8cAvmGLE5wbmYED",
  "key1": "2RuYXnwMUbf98qrk6CggoUJBbbtvnTyLQUYKyr74oTSsimjtdACuMZATWN2zffdWsYqcLAxaiukyWXTcioaEmcD7",
  "key2": "4t8AqAL2WYeqEJDNqrqRfyJU31RwnH8q3xmfVypjTNjimC3zTShRPh3pb8A1eMvqMDr7rPFWMmGGi64fufjGHbqG",
  "key3": "3ivXbt4vhByuHrWqS3SEbJLM9rqs2tjgNdxvE9m1Zb3kVZfdxfitmpHN4FHazuNbVWWc2aene9yGHVNokS2Q59nW",
  "key4": "5h7BVN4ZcYAAfu9oewCSiE395UTwM9K1Q9kKPNW4vxFMXngbL2ApGFP6oLE5g1uJGi5QEd813cupcWEs4LgUepdv",
  "key5": "4ASsSThb2UkkZaTjKNfCRfvKFTEWaiD3brVQ6MzHv3AwGtD25edzKKVSpbaMsrjCMdpHWkeYpg12DifHhLzCrRD",
  "key6": "5CT61tfrZ9LB3MP9oJF75iE1k7qAdvMJut9b46pphBFGfLhbVSixak2T3JrK83Kp98oAo3Mbuvyz46aKtx5rmyi2",
  "key7": "8taQVeWJmpfrrho7sVM5wtm8LiHHZeTtZb5j2s9LiZnsLU6xRR75gURrMjSjwmC5yffHWRsMaKR21PmUZvz8wNK",
  "key8": "RMABJp6AP6otrbuSmxu1GEsM9B2wLYk2Ym8jrmL9qkKQMa4SDibSTLvVTQavvPp7SdhU53Zqk4Cfv4ubZAKRRyd",
  "key9": "4fLPvMM3aMeu1KxY7TN1ApSVF2sbzragRq2qmvyz9uwZaR9CtH3eB6WGEHLR3NA1A1J4m8JAwFnyJcykBX1rw2gW",
  "key10": "tuBdcbTi3gc65hHuAV24kQ4gfctRbGz9Z4nbWQUSHCAiYTTe5N53zdGRHDpgpsEbnUN5XzorgMC4iYX6QSo3nJU",
  "key11": "3d1hHZynQa67GMKdQpKCDgFLndrmt69qJPdysuQ7gWAEZznDtiufSkZ2iGhSFSbSYfRJ7o7cXbEw4YpmwUab2NqG",
  "key12": "2BrMoqBQC2P35Fd1Xy5pPVGpuY74fJAY2V6HkA6fi4bXoxX5osgWEHpnMaBsQNJ4gRwuNcCi1QZE5DdJNdfKKnVT",
  "key13": "2gaNNjk37LAnbEeTATez43cLHpQC7BqyQDJ6DuAkAHdd7DQwj1hx7abA9SSeSMCcMZ98Bmeu1brkwkLp8Z6aDqYD",
  "key14": "e6cdbm5FvDhkvhFQ5VxhvCw5xmCySpRKgtcS4guwpvtG2jaa1KW2UFRgDkkxW4ApUZnTuNHHx7VuehCC5RyvM8Z",
  "key15": "3uCUPa7S9jKh7vJr4Sw5iPsBPLaxpBv2DyuUUqwbEqGw7NdxoEweYLECC16GEQTFjm8oQ2bnLBxaJARQoJf3pwFW",
  "key16": "5xeidZnMS8Q1Gckopc33HR79V1XxqB15cqTfKbrta3TrwH8osUsknZ4y6WV8KyM3ZaweSxeATdde7fcET5o9qWKt",
  "key17": "c2phB7NfFLWMnqYLT98iHL46TMdYz2E99y25dSf1xswpUPGNgeZc14r6YePGDYtd7Jhr5HztceMP21QxF9DJPhG",
  "key18": "4fxsiXczzQBCfsBjncUyTanG9GH8MCA2FBj162PPcH2JbHvG8NgzVL7tCH89FxrDVVjNz44TsPr2dHb4PAmNYKY8",
  "key19": "5jv37eNrHLQE4MdRZNS5VwXY8sGunqXn84u9UdFu4aUtEHPrAi2gFgoXqn4EQvCmRXtub9S4MMS6jzj4B7WrnWov",
  "key20": "2JtMLJkbFMt59ZG6br8wF8U9HQV8izhz4iu8Tq5ceinVXAJEcsEqU9iU2oeZGmKfNBG6jXwTg2dejWiW7HYSEsrk",
  "key21": "gpG9GvEFgSiJCECFrBK4v8vXPBtDVuJTHxVYMt5S99fzJTLcJcNCGwGews7orDTNxYwyqw4y4Mxn6C1XYnh6FJp",
  "key22": "35nXyHyKPdye5VzUd6DkNMJTVhJnqrnHibaQpNQwaT8RLTsCAdKdaXCDpSBuUCULxKTAu3toPnJ9V4FaFzZAy8i8",
  "key23": "5BbZo44osDVwT2hGJtjiA6r2oZT66kzmU1XMspV9Qxx7BexaDG6eSztykfQ3YjKDKZpHUGqsoYt7pVHs9RjfL5yR",
  "key24": "A5F1gB6nW2VsKRERp4sbQf1HeoVMiT9dr7TqXqD5uP3PNwkx7jVb951Du4BGJznqKXTAbphzcZFehyvHvYBtzvb",
  "key25": "eJDJraJDxQRuwe4Pq7Ph3KxKxgDxJ3PB8fFrKRA1vsqBx2286b6TvtqMcFGjLXkUZoxU9snyHgW7aJ5HHzFTJdx",
  "key26": "2HoFGvt8MPeL2Qppsa889TMw8h5vMHtc6GQYwMJobSAKyHricBwVHhcYX4pDJxCQxySVfoNuTagTiCUdD3aq58fK",
  "key27": "5xXmGnepxU9ZA7Sdug4TFHwWGp1ntjzrdXjfZumeq7NppQvGfWUGT2PugqE3y2kL8aefRyiUdeS5tVkurZt6czvH",
  "key28": "3CHPACdKEDEfNVxteyuH2VC7N9cizxGkTPV874pxWAzke4nChj6Y9j9eAHYAJhXJdeQ7VATRzENUBLyF5SUf8L2o",
  "key29": "3BG74PRTJ8h7Y9sonFKYsNJMnfiv5GCUnRvWtx2yqeZp4MBK8TqCByP9BBaTgwPdu7uiVgMKPm6AgG3Miv7eBPCp",
  "key30": "3d2L52Pha7kkBovLiXXRuN9d5ZeFuP3M8ZQWsaXGXJSdA9D3GvavxHsJFs1dGW8Cy6hcr7ZPH6EDPAG7cABiAdTF",
  "key31": "3WePresvZknoG4pVFxaaC9dEuUjNwSUcNpZe2iKdRQatoqTKu2QnyM1H1nP69EbiLr2g7cwmqNUrSM4LW357db1x"
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

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
    "272MWBJZJ7PUZLXkyf4NJ1NTKo6BWqPYRFmZfNVzjiVFW5fms5PFeMWwXDX4FbzKe8YhjWX95Mpv8UVN7BuvjZkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "shj1STWfXEHkTms4Bfff51beBmKJuxC3fHhMvoR8w9ppV3HsAcnusERDRiDiMKB677dhumFEL5WzoZPBQfSVTkG",
  "key1": "4sjfEVANc83hV3PrJRxZmgjr4RBpAQvPdzc5nAWe2RSQXdUqP7zp6AgSYFctK4pMFJFrHNJtKnDm6s5eJs9a4hNj",
  "key2": "2Q2BD5g4YB2soyv1yG7R7ssjkujphPEDs1zwLCTL3rXwHM3iKnHarbzRyvg7yhHDrDfh27HNXDEZ2wYNprv7eHXQ",
  "key3": "58u3KKj8tibjYFTGYsTMCkqRTYSqCytvWtpA6EekWHcnR85WL2j77C5jQDCoQ6mZSV4hJWDttKm3vNdu6QoxJcUK",
  "key4": "xxKiBq8YCoQggfnDxawPgsW5oYawaiR8smyWhvhAbNFRA2beLQJ7spAgMpjfgr6VPZ3nLELghpxHCny765FiKdP",
  "key5": "4XHBybtpQoE96vWf1tjQPr1CKPGr9QUBWW9yomBrwY4Xza3pH5C3iwCEFqZwByYdqvNqQd1hHJNJgKjhiDG4MeZd",
  "key6": "3UfSZXgwUCHYZ5bVcRzMADZNXLohK1Yc6hqg4jF7BxzF9beCyLst5AbaQL9gvn52oMdMCKidCLp3s6bLR92MTPkw",
  "key7": "niT3d4BarjQRhwbhNYUpudFhzCgWEbSnrjqKydvRntYDQraZBJbT57y3Z2gx7mHyc9mihHW7hyiqcokPPU3rn9Q",
  "key8": "4D3dCypLQ8xAyLivQ1oG3x24jWmN3R5a5aUqzPGErcgemutJHrGASyEin5hBoSXyWVMoiRTQdzEUZXPDfYiuoYkY",
  "key9": "2bKLv9mATsCSz1tZQ4hSmg2G9uM1Q1H6B4idWou6idUQuCxYeWcmzw9yG5rgqXfcw4LqSMfbZhRqcDCfB2Ejs3vg",
  "key10": "3PjKmBf1Vwb7MkmcTX9R2ypjZ8hPpazP3SKMbSXwyTYhBT9kHen4fDrGJNmKP6fydy3hT5wKdFwFb6nk1fpYCxCq",
  "key11": "nqKCpbXer4mnZ3yYtY6BKczKVVFYJxkeircBKLd53cNv8wXRC2bkoJaSyJkE4ZrskS32XVpgfKU9QyQRbNKf136",
  "key12": "22UFLiREWTPjFkt7zZBYihPbUhBTKwBXm7MAdnXQ6oriiUK4AVLsrLc3AYLmaBoJgnEjMR8JJcU8Ejqsy7b9kZiY",
  "key13": "4eLciQ8bk8zezshX4GaZ7ZA5z4QBBv975jQd83a48AcZ2KZWm3gCPhVYZt2zZk3GE8Hy6cgoA1TjSHkP4msg4w4t",
  "key14": "4CCUSPX6XnPmaxFE2kRQfhddNuEd7hSUWo2DDCixTbxVvPnZckaF8uKzRPUJoz8E9ZiYLybm3LevSPwUtjE5KAuS",
  "key15": "7w4MfGbMWFwKthcJroinrBAqSGwBAiyBQGP2YmPJcwDZoxPZSVBz4cwF3z8orVVzUZBDfNBv3bkK4YSgcPVEgJS",
  "key16": "5ukFZ8LEamKP8zJewFCegDyq9Cqn9m3d1L1BeaRD4WTCVswJejeNfenX8PbbNKws7yt6vX24xxWwPjPPJA1GGK6B",
  "key17": "3HGFwD1Bp4AKCVv4UgUNcWa9KLhh4LJJSHeqqRHid6H1Lx7v9B4CZC7HDtTk5Lct8eumLTyurfd5QrExE5e243uc",
  "key18": "4YDs1jKvU4GqD64cAUsa8oxhcXHXycNZQ1RaKQf6VqEH1ePv7dtd6ipDWN5Wu6XrTa45AugZkShNNxBGXGGxmv5L",
  "key19": "3AMBwgqdfVhYQurP4gCSUeWPpPojKrs3U7uGyQBWrUXaApdiMrmivM88EWJkqnoRw2toYqtsHZZNhQZQgonrBZAX",
  "key20": "2ZoHum54p69qyuJRLjxBf1MFU1k5LGXXoxGsHnLSpKTCYrTuuRxor8xzwToPWFaR7mynioK8gGDrh7o7pHncKbkE",
  "key21": "zjY31g2omrbq7GsaLzDqqVev8Vvc3zpkbzatVi8aK9DRUrGpH7vSWTbRsGQNxcmfcEuda4vMYM8zmrD7SrrDpwa",
  "key22": "5yp2YfEPa4D5zpDL2pL64UujU4En6RczPp5tu9kRqS83CrHtm2T6PetbKSJCZz1Wb6nBeExFF1LkSQkoz6aSMAR5",
  "key23": "bsBSc8YYb1eimyPgFSeQvKYr1MJxkP8SGjm55YLXN7BSEY7eJzAs5QUDDHYrYZxweK5NzNBDPkC8Mjd75bajqR3",
  "key24": "55o2S33zKpT9MdsTZVzLnjH3yszLyrpthtCZ3geGLr1WSh2JHZjMNsy2vgEB1UWJDgKzvR4QjXWmsyYWBnyjkZhf",
  "key25": "3rMjT61fyJbKPE46K3rjo7yC84MycZzQ8pwQnu3sCZ9nGVALLTFYKyj2JbWwrui6vp8CDcKne6omPDGq47HE9kd8",
  "key26": "3mUTSzZDv9SqGTerZ1CYFr9AY6i9yhTzX2yVhPWTwJDiKgNb3w4yCj195PhtbhKMT84bFYaDzdp9yWQDmQAgPzBA",
  "key27": "3maAx52aXAG3fioXRZhnKRR6jXozXVrwfuL2KdqogT68cxfgZfHFSwr6pKHaQNQdDaTCuZLotKnoCQVJLbUii6zd",
  "key28": "28jvQg159oenFZabSZopUFfN55Rir6WYBarZKE48LvBtsZsJn6SzfYQPfSXJowx3bpBEJnSGoDmP7mUrbX3sDai6"
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

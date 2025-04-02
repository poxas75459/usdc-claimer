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
    "2c1MPMBEdtK8DHsPBFq6UShX1yipuoRZwjjztmoHJpMGhtxaCXCsd1wNgcFhm9iaqpXtRpWFb7g7rBLG6UhmWiR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7BBz25iDfvd6JwAn5Tof3UwjrYzd85NSuLihHwA65Kd4eXi1NaXLRK3LC84uf1oeXxjTyCPzTnKivtMygWQrb4",
  "key1": "2BVGT3XF5hEuw5EP7vyPWeKNPqqwckVWjFf5rUu5Xek7srHNzwFbBjwjRtYBaQYRSEZZohWjNzoJ5Tdm9sPWUBCM",
  "key2": "4enF3suzwMmvq4ZNeH77eWtARMCTGZRECjqMK7M6MaXK8m5HAaVtVYgQSrKqPQH8BeHzbVJD1HJQin6kbzV7MJZA",
  "key3": "2xtZRNe9FC5o9NvmfvHgiSa9mKz6H7v3q5TVbnh93gQqU6Qow5zfGNHp3UPs1RYibd43EzMMLb1Dmpwz7eV1vCyB",
  "key4": "2dAJREcCRAoW4cJdqVxeACaXbmyevUibKsHZXULv7GuqambRMXW6Z4HVoS5fYVskmGHUcnzkC7v5S81DxZYRiufb",
  "key5": "PBDQRBHhqQo6VGqJRya1PXmeJo3uAA5vctU2HHS7QT8bLFj94LaV2NQgvJcTCRNh3x7JvSu2jsaBQ5Z9zy4WNbE",
  "key6": "4ysf1kBJG5JUbz5C2FYf6pgzQrVrGLdQbVuu7kv5aZcXkB7cc4q7r7GFBxTAV18Sc3tDZwqp2uQcbRKbWqFnpPKK",
  "key7": "2FgzYA8971dbbJvMfNsbH7rM12eQdd7VTysDQPzcucsm7tv7TXX7nxGo2GApQtgLxHUVd1pvNqgxdhDsGcLkyVvD",
  "key8": "3zGhFivKMtMbzh7DZkDuB86Ex4X4HQqwBSPkcPNi8A1ZBx5p4d3ktP5A5LadDugCaGXzkgx17NgbSf6p8HSfeyTE",
  "key9": "4JFSNeQfiNvpGJV7JGKPe3fqJ4bwr2essZ6S84rFzosa8GhS25CwFfS3RShGDB4yRWdnaQdUkTST4akHLr1hkq2r",
  "key10": "dgdTKL4mxuZsNsHyDGrRcS2pGtjw5DeTCJ28oThd1QL6WbeasMxVocuZTRXnd7hcTwpuJgPZ8wDHp6q3M9QQwdG",
  "key11": "5bi8EpCxC3YmjFxspBasJNkbfPfScfgRG6rPmQ148cdECuqzqkUEvFJht5n7ycq7scfDqEY1uTuumKXi5UTBdw5Z",
  "key12": "2n6JjwsR8HvbdcsfEVLfY5xgWGqKuGgUtFrEXCxf5nfdFwExqrC3YNkJMWdgJ6X3CLRkq6k4HqHKnF1ayHe7qWy7",
  "key13": "5RdE15w6jyuWYoSoydkz3qMEJLSA1dYHWbZAGN84xk4STQZcH2FfBK463Bnsng6NTtDeSSp25ehjpgSURKbdzCdP",
  "key14": "59gsKkBB6LACNeg3vngFP8QHHPLBp8tYSxRhvhERCBLQ3p8DHY9WktTRak48necmTtd7FXEVn5HhzAcSkBug8obj",
  "key15": "4De1HtFebCSV1BtvDHNvFtXKpnUdNSmHA2esZt3eR3SAk4kKZwxwh5wE53cBgxiT6pny65wyuoqMFJFBSXBtxKik",
  "key16": "5fKupBd8rrWYsnBxk5ccJfqtAy2FKRVAReCtDagUUpJGBnyGe6HP4jVKJoqjE2uHsawhL5aRszoR7HF47d9U4nS7",
  "key17": "3mRjmWUsgkP2vs7maNCmKXYLmVAFM6FDDJsqAdyhurGQFUWEadNPAPWdVMryBCtPi57WYbQ5Rd3mRifeMCRrYhhw",
  "key18": "673udv7zGTnTeyQXt7FjCBXwd6KXc8WiVmtWTLvcaYdkdzCycLBgFz67ZpHcCznKz4rzgroCVEWg7ZKeuJ8FTyNp",
  "key19": "3FfRmcvYYjTpj2fEouxv9d9tHGcaGQT9auwYD6TdFBDZeDNyPaNWVxniVQa2AvGufjR54fDQciLJpfn5Wu22ywC",
  "key20": "2eWWwpg2VbopP7MbtHxeStaujGv5tqGe45se225ao82x9M88G8ma4VzpiCUVCKgwegaVLgApgsHPjz5rPc76TkhF",
  "key21": "24XNKDyH32uhg4jP691Y3vxZRxSNYetAs3S5ArQZacF6eNDTf4eqMSDrd5Wgy6GteLFjyPtuhvnmLPMVifJtADsH",
  "key22": "4y4HzF6Fbt78cY5UMgUySFNg8z996JQ3K1BvEhcds2L7Kt2LWwF5ttaDakAYWNEg5RHMwL9etrd9CAyxc3Acs11s",
  "key23": "5nTMVasg5V5XdaGaXgSMxpbbueMzqBopxhyPWGbXdHyKGaK6n4NS3uV7PfJk74tjxLhaNftw4YGy9CnudjWyLFSt",
  "key24": "5S7xbKMQ7qT2yCbjcKouVGMok1L9XcED47B4mK4awPQeJfPzJccFKXu7yFryg9eS4v9ScWVvpukGzCcnbgXtcgYy",
  "key25": "2QC877Jt4DB3FKhHpF6HxhTFVtjpwVVF2khDHCiaa2jF4rYK6BUrZKgWnKTC5U4QYMRVYzNxtRaRJdcLF82cq2PS",
  "key26": "rgUy46zuHFiqLVNcsMYQb8JVE8q2S7aKeAo8WJ9ercmPZCxfQEvqKmBKpRWhyoPZE2Ft86JNXMWGhGTWafbD9je",
  "key27": "5QthYH9pnHLf67GdLs5av9KLtsDA6NQYTjvz5NCFGr5sFihZvN96m6k7PyDEYrAsd6eKWjS8wq5DR8HQGLpZMUL6",
  "key28": "3PexxXEZbYGQzSsvnQpkkhFm3GkZ59cH3JGH3LRmifjPCjPkLKQgeEAEC2uDSPPV3jeRdHXogqciwa7Tfib6jRbe",
  "key29": "4gN5zVKpj6GKPowzTfxUaGDnV3LmrXB1bLvnhuzPF6rmWd86kEQguJVtZutDgD1WL7yWyvmsfirERRMKPYfN6syK"
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

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
    "z8NowUjPkugPeBisNXbbterNEWKPj3gG2Sh4q1aPrcatHSHyGwj6cwjsHbG32QBFbEcApsVRsHbKvGNUeKpDvoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eHzAtgtyRehajjy6nVtoFGchTSzuSdaLoEwPgAHDuhSizsKw7yAXWXo3bsZJS3Ri8Ws9hx66Z711WfB2A8nzH4D",
  "key1": "3iSvEkHtrhsujHGLywr2GWfPx7Lw9fnVw8CifdC6YRJuEAqvzye6r2pyyvYr92wzBmrAtAAXR2NdvqrrNk5TXJMq",
  "key2": "33dzunCqGrVsnDdDaCuJcTLHpkKF64nV6tJDZZQZxdVCN46WTbUMcPNYTXnu3wa6GLszhYsUAM2x5eqZnvEPJj2H",
  "key3": "2NgvdyKrNxTG3RzoEP8zATHc3e9WreH1XfbAazmzA9WejGDvtX5teX7saQJNPbJAB7wbEwhJC8JD1qLCuHNtRFXQ",
  "key4": "xyvnnmfvcfW1iMRLaNzMKodgDNoW47wE6uiVsc9EQpvJwC4i8AwGQhCxK2eh5BYxFBoWjQStKEag5izCQAjwrth",
  "key5": "23gv4d4mjM9QQUvUcG1L6ZJnPveJj1hDxCzzwMUX4FaE1yu372C87bgG4MTVx5cy9ELutwmTDK23ejGj66c2pjxT",
  "key6": "3FLbksDXQigci3X1ioywcvME11BYA7M31Z5LAYez4ASyo2woWwJPGCma8YxyDqZ5w89kCTEhahRKYp3DDUrqoWs9",
  "key7": "F2EBJPLLD9k254gQsFLKmKPoy9jrkCr8xGcBwcuYddrNHAfdxg4YPWkLk4Fp3S4SGCcqpmLndKxrVDBdi8jffMt",
  "key8": "2mgaCMJBWAavkPs4dcnFo7ZdmcDF9XDbNCLNN3QdboKKDNDwAGNEBxRcB2tM8KT92EcS9Jq5rijXNpcJYHeD33WF",
  "key9": "4Sy9b8BpBioLyc3zsTPwGeEZ88EYqo7nZjNq8hNrroxo9mXWK76z2CxdpLndN27Qu12V22Xk4rPtiBnFPuu7ATyP",
  "key10": "5ka9KEWv17PFYho3gyuTXAViw5tfaYc3erLHmjbaRWVgcYN1edaZBDQBJNWZpuv58BM5gtYsfsH5Qcgc1UJ15ybS",
  "key11": "5QZ7xBzS1syk9RLwbrAfofgfbvn2dC6x8AUXvMugoYVXDngpw8DB7S7B1H4ge8jpJeVN7CYRdM4joPFRLrZGfJLS",
  "key12": "4RkKtmet5Tn5HqPCsxuusDHa1uiSeGw7yp5BdzCFcRCL2EQSFKkCpiLDXLjXaQYFFYsZ96EmkzvELGcYJhyC8ZsW",
  "key13": "3Ar7xQ7oqYdNYRADtJgeGfkXEzCHHs96WDzjxirVFPDxUMzfi26uwe32U7h5Gna2e8BT25tXT7pqPoADn5a47FHH",
  "key14": "c6aur6kGUPfU9dHftCCTD1TMVCKEfMW8f8Rwb6YMt2nJBE6oSBGKskZTjGZ6VLUTRz8D8WvzprZd9dAEABeLWic",
  "key15": "4EaUtoJ69SZXPoQNQtAdrKcrvjbY7ZKFZA97qJPvH7hvaFmXNdPSGrxwdxBzE9Kv2eXnfQbyuXCq1wJ95gwkSppb",
  "key16": "3ULVHhRbH9Ej81g4nzrYAs7QXnjk6LtUzvF27NqKZfahfUnw3zF3BsbAQy5HQSWLSGrJYomvt9GMFz1s2pA89pCx",
  "key17": "3uuYtCnxw5pZteworfwDMC3Uua7BxCz3Eu3AiUyxbfo4vgkdEyqtJSteu93czk4tSeAYpmXS8kHSwQ8idvAn5Tnj",
  "key18": "26wuNBs6NvwiDEMfyeFzHinodBtXeJfa8dzqxVdEQVG6z5YLn6JVa1avYgk2Lu6a4Dze4xdTTiXCAkM4v2cx2bCP",
  "key19": "4mvmGuHzxHXmAFnxqmkqRKEzLZ8oq8eedNSQmwAxSra8jxDRNLbJVxRxLnRZFt3iouZJzPC3sjaGusVnCjcsWE8Y",
  "key20": "5sJJjf95yMXVZKuGWcpKYyEt8BNbWSWWWBga4JSv4Ep4VkXyebrzWKwMaqTTEVR6VHsuEEaxJWULE31qK9o3R8mw",
  "key21": "22rE8aCGMfoXq1GCNfJ6MzzbXmCZUpyfiVYcDuwpxub7DQspeJP7Qpo5kJrzBZUEviQdHPRRRKVRorKcFYco4Pit",
  "key22": "4jYL6C7y8zVzZ7ZJJh36k9aq1oxrt4wmkfYDYA158t4UdbeAE9TmMnCb5G7T4o6nd3D2pfHAUV3c96WcHcx8xsae",
  "key23": "2NM58bCm5c6cExKD336kyY32gUvSm9BqxeT9zvdBnPSNoJMBSjNfG4u4LyG4v4wyNMPtkHb5K3BVksqdWnN4Uu3d",
  "key24": "4ZZ1PtpQcwK44YvWgHJNtKVdQyEArExZTptKCp4kmqJUQDBQhouc4M3fHsMQB2tUwYhtcGDTx4gqm4hxQmmiAo61",
  "key25": "1X1t68q5xb6HD2Vzj3VaXnum9pcPkLK2And7dmixuXdsPRBThzcBZxMrb9KZo6Hg8SDEzvmW3UjvqbJtY4CGGEa",
  "key26": "5zaH4Z2aEjxEGdrPJ1eVV7mhokAmq7T3xvdQxzTSWAufgdbekPX1VuXXq95qY6J3GUhQ2oJVN29h7dZ73SLYQk5U",
  "key27": "5K9uEF8kVjCMiDy3N2EUt2x9TQ3sbe1hP2au1c77V3FW2SZK5qcDSTTPdiwUQuDjqcCzaY2tdN3WoNQcqRwNPxfN"
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

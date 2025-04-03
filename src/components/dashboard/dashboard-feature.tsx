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
    "128QxtsHtfErHKavPmvbbWi1z2EuVVzKgtfdwjrbKMMAVeNfhXhBbeMrrogGgRsoRc5oN2noWKhKGeCmNvwvnqPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqxmJSjfzr9H8SBTVReAk8tLxmJGDDuZwdZckBuurc3T5kswLVGbGEpXGjRwqCNyAZoSK51bqNxcadLESRZ6GJN",
  "key1": "3bqLHR1NyaPZxwXcTm832E4DJ4Pu5CYjME3wgcx3YRxy9paRqhNeEivxzP7HjbHyKn1dv76c2fN3GHV3PbYPwj9b",
  "key2": "4Vn86GFzteP4eGfshN3rNFZExaL35oyhtis5iXqD9XqpcBKiaz5uQFWgtK4gWYUqWsP6PXsjXYk9puuBmp3UowWC",
  "key3": "3xPz3czQVbCWs8RKHbgHRFcYkQxEu8JbVRwXN6jw8kJKFxBu8GyYAURcSoE1Dwj5Q9f1yysw2LrGRegGpN3MhjFa",
  "key4": "5EVsNfiHdGRCe2WmM2cvkEY9B6siEFvuqLp8cBPUtYK9Pevas4vRjwK7ShC8ZvSnbUJWgiq6EwZTMrdL5dZnynpx",
  "key5": "26fURKGL5ewPbNsU5e96VYtppzBanmfngbF9DrUsT4p9UW9monqFK9dJs85t8J9DS9iWmdxqoZnyNT2oKXJu8rv4",
  "key6": "5MfQFrJWmWehT3XgeVHFJAwiDASmzj5j1HETYMSEDG2eyJU3cJZ7V1vbXEqTiu3KNjMwoN4r7WLm7BbHCWVY9nTN",
  "key7": "WaRfQ2frC79uTBngvdeKo9U7DKtcxaw528X2bztP23av42BKvES7eUeRamZcniGsrS3f6YUnkacRmjgp1XSihW3",
  "key8": "5bcBobVCF4SHyjCPq6Z11vYr2VzQp78QVnrEniUZrNeeqiiCsc6NMagtJd3hEnfSGTUq7TBkCQiGwsSn71zJJte1",
  "key9": "4y6QUrc3ug91H5CyDQSg1QCf9BXFNz9nD91m1WydjhX8zuPgDmpvK1VRa9zwHCEFM8HGsaReyXKSEmGFcPURmpon",
  "key10": "3QRoioaabadfDGw8HXBxLWmjSXj5w3CwuvJrvMkZXpbVtCReJgTdbJK1PJUGvMWabS27EyPJwmN6bnfy3nnpy5xk",
  "key11": "3mfEtJdqS5fAUN3oB8tYzFUoAfRnh6FbbE2XTR1bqNnq8usJY77GXfonY9VibyNEYrBgiaJnV2BpUiWNsEZkrBwp",
  "key12": "3DAoAUMxeCgq2uTebLLeV4xyBMg832Tjeu5UEFjzfBPwjUWNvPZBrdt9t77LvPg9Up6bJkoBJiPTZLyW3fgKhupi",
  "key13": "WQXg4C5vYCwLBoPdXSoNEaqG4decFn5LtvY8sfhgvT1WtrPMLWQpQ4REbhAxMuzUZF1dRQMoVtZuEd8BmJ9NQxL",
  "key14": "5imjsAo1b2syGJSuVtVaj6LX3DH3wYtC1d9w3rQ8LMRn1s4eVy5PM1pJonA3BWCM89J9AX8X4aRsEWeWXVMYfbWk",
  "key15": "3HSHRDJAR6S9EqZUaWAdTEHLtx4w31hfqv1YNhgof1E9pczQgG4YxkmJkCqpG6ChRzwRVtiBP2Ez8mg9AfsQrh1N",
  "key16": "4HzVhJXcorVGuudH4wiKRz7ktTacHGMjKbCCVWozpWHc4EjvQbAVc6fzmBTYCRtfupkBDPVoM4MLedP1v638dLnh",
  "key17": "2vc4H7D5haJ52GJxNqyB9uHmFic88ig8CJKLNVHoX9jPk91P9zu2iSQs4RgBWtUBx8v8rFqpnJtHbeMfVQsbc9Wz",
  "key18": "3N4pQ7FnCVTvDbFwnTdrRktgVHgU9CWXxJ2UFP7c4HqGREw8qBVCLqF8SzgDmjNesw4KeLXBYqZFphLStJfkQfCw",
  "key19": "5wjQv1m8hJa3soUdW5k8SPtv615RuAj9ZLR55YJdRe4GAnVijRQsdt3tbg24QF87DPUXVENvW3ejwoUAjrGQhPQs",
  "key20": "3v9xy9M2QTccmSAG1HhVKbZRgPPhMnW6NPQmPFsLSmdqDBYzpyZU88R8EeTvUanhFTQcjk3K16CfkLLXCutcqt9",
  "key21": "cet9K4Vpr1WyKfSGR2x1YtewLrEsR2RaY4QZZEinYqo1TtWy1QDADYhEmGrbZNsg9PU8KdnuBjXtDUDVAfRpEQS",
  "key22": "2ZJScPd78YFXY9Nc2yiipxirum5dvxJuXhzyx7Q5Cfk2TmkwtVWzi5oRY7d1PSr9GdEExUrWKN3Wv28vzgbZ13QJ",
  "key23": "3ZuEK9AWc3ck8UdQ8XQZVjfj5YJmadPKqi2YsuFbZokzoXBQCE1ZH7NoGs6y1PaAa69q5ZTA3i941f6m2whr2otz",
  "key24": "26QpwSVD8NKYZoNcuX9fMdWtos76EYFu1LY2hPHZ74mpUCS9HZHuqNcman1zYfPW6SbmLKhvvczUZTYYA5p9NVJ2",
  "key25": "5sGkv3EUvqiVQVXrhDYNoNdpThYdnnCAzKLjovMpQ13SSXEQ1SnpbhRyyLZEYy2AamdAJ4GDWxWVJZUQHuUuZE62",
  "key26": "4uM3CjzGjqRBzXHxMnbFFQZMTgdTL2ECFGuBDkv6S6kqoQ4iapzxg6WNgkF3CcMZYRXJG9bPj6WpBP6TST1YsfQo",
  "key27": "4aLTLdf7ApnrgQUHgPEsPg1tw15DuDRWCycpZFjx61ayq7RmevTNxtQ7hGT39Mf4V6UY4cZzZEcG8kS7QzjZ27ny",
  "key28": "2qDVHxVSiunvzoZtoWijfm7qwrg2oesRnFqxEPUjc7Nj2UvNN9zetVudsQ5ZDMMwfcT4bj4YP2dz8GJ9ruNmM5Vz",
  "key29": "4geN2S32mnpuSo7crSXTcXTtwGUFowJgV6QKXZbT7aoYQrjnCrJgUV1N1cQgYD2niqAiMmXbm6yvLAE3QBThR4Kj",
  "key30": "qYFHqbVK1Usytqd9BEa8FRNBFiKw5pxwSfGAoF9HV2J5wY67XupoNGNXNHuAvvSevLwKWdU5CK9Ks58XUcyZUaW",
  "key31": "23CiZ2marsC5Xqg1TTbnAXicTtUMxUCAT3ZNTASYZji4UXMfesY5UrM2atsN4fzYkDqRQJDpiwcRZp3u5Sy5SKxv",
  "key32": "3wgJnJHM7aAHgGND4UoRoLurrLeQibv7eZcvC3Wwy4THoDX3eTdNLYHg4XG3yYWVVVZhaYvcMDHkhzp693Lgvtax",
  "key33": "2dhpcGZtJCzPNGymHHxWdR47fQrrGFnCz5bz8LAU1AYh8JGcP6yDHTyK24ssVMdX7cizGHRxiE1qZ5iGZu5n1vJM",
  "key34": "2NQJzwWdfQTZ6mCbbXDF2EnwxBrq5Pnx8JUAytQNLbH6zGmsvst7tJPvtCoWpMM1KpvX96bg7xvUFySRhmy7ULUi",
  "key35": "5yj6uNFwdRLNhAPwQUaQnHQ1BXqMexRAHxYCzhixoN3CDsAHvzMn65qsSw6AYN3zV6BmzhKmQco6RMpTXGfeuH8b",
  "key36": "4RnKaxtD4ijWuLVKCAvms5CBrZDbddZmG6Qtg3ZMWhqY5cfBjt7GmA8QrXvUtbKx7EoxRSaa94nRLZwKshjfg1YR"
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

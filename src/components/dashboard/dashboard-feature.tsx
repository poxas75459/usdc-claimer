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
    "2udJNL35QRT1sPgTTvRX52qxUBx9mnTQcYAQUqquzr9EqhfC2cwAf6peEVW3toEFB9EivWLDsLKg13xsWrtDfiXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LKdAbVi3dAKtBtYxCxHL4BrYxPhspKXvs2rEGug4HY9Db59kFoYSLpDcGpq8PYkdQc6M3HphuUvNPFKD9ki27Dm",
  "key1": "5sgftSW8jiuNqER7i4aPxRY9tmJZt5oKx4MGNpRfGZDpMTybN4jkEwWCSt33csVLbGFcRPCP2wkJuhX78aMHkJT6",
  "key2": "2uQ8HCBDrzN6nwYAAQC3L3cJKTEobcTTaPkXhX8jSpiD4axKTxrX3KoFuFGskQjZBZHumeGUCDrk484xzFZE5hWG",
  "key3": "2Nw5oyARgJY2vvPtb71rKWgAeo3tWCrXgDwW1MRkXUtK9S3DEj9JhKtSesJ5wKXbg8NSHNP3hi34vwnymFjPeQkr",
  "key4": "4NynE2Yntfb7Sbwqc6VP2dQBvb9Q9r8ouSokuHzW3Uvvvet6sSLFZ6zfY3upNTm7A2RaQCdMeDCozraRekaTo6DQ",
  "key5": "3CyDRQdXrLrbVHRWsVwCiMvYG1rWRvkRUVmNvtbea5umPYv7pDx5pS5hc4X7s4S9LEpZfDSE8sf6NEgkh6Ab1hBy",
  "key6": "3uJqPFuW6F4i783VmqumkW7dKGoUgPqCHV8gNZAJEktcFib2PrbFW7HwoyiZuK5u172wjvZBu82gZKxEeFZ7yCa3",
  "key7": "5YNmRYFBoRAwXDhZfH2vL1Pc6eAvWdbvCH4PDvagdqotDyGNmzKpbZeEgJr6nK6AudaEV7fJa2EN3r1hfinsBsNe",
  "key8": "Rh9MradiddgeAxUxnhRysDMJW7bwUz46wNzyVkcKZsFbDnwdTeHYQCsMWAcvWYCweF6Bg4sUjm8Y4EGzkfJTuJi",
  "key9": "4HLD96zTTbLtEtZWsCoyzQLyj372TSQceWcfz8PY8FuLsrhLRrVVtRwbEYD4xfCE82pJZNdARqov74ZF2PR7Nsen",
  "key10": "3UQHXdnKbk81Njer2hoSZ9KqWXzdejoKYuhPYZMyKji7SigQ4eybBYT86LZ5kN5KCeUd8fPdhz6zugubDZoNySNf",
  "key11": "3pPvB2G6gaCPezUz7qNQp7Xi4Kxd97fRYXEjwmbCA9W7Ewv8wk7rjek9WWVfbiXrCfQd4k9V3nRzVxSDdLUwF7o1",
  "key12": "2M5LJZnBhFBcEfoEPZDUdEmDPCFADdA8pE3qk816NKYbpWYQf3QWgWm6Jooq9rrTjKjQg4Ac6Axs4khdZeBE7n1s",
  "key13": "4fzwv2kTrZuyFsYDRkRuZdDAURh3Vi1kNuLS4GVFQpMyg4GLRMRLGPsEsgSNtGtY6zfqdkBiPWBZ2rP8CRKivg8y",
  "key14": "5TZJLFHeQgczv6St5bh8tnvVnX16wQPBDDCW4RxkbqvB9oes1qPrw5vAmoYTpoB6apuVSN8BRc2sNfqyxd3HwtR7",
  "key15": "2ikkeQ6D3H7y1e7ZpgtzUSQfFB9dLpzCCLVpnaBd6i9XW6nsAZDnehywBNfyFfcB8UH4CBzedBtuy1joG7xBK9E8",
  "key16": "3h5WUKQft9kQQqt6R73z8YWbAW1menqHVEXbp5SxmJ9dzH5ZWACeFcffFbxxMAF4hAFSBm1YtXj3bXhAak5EeDY",
  "key17": "2jNc4J2Ee9UW9naNXwUSESAvzMREQYHbT2nFQ95micNvFS5LRxHrNpb7nYbGdZtmkrNqPppPUni1TmULhA9rhHkn",
  "key18": "jjBeDEgfjiosPwnYcKAdixd59g4D5qwxtyrAaHtqfZuQ2T5UHGFNsYF7UY3gqTL9SgMWXV25LFqjLfmMk8qFETz",
  "key19": "2Vvj7tWT5LwW3zvo11kXNdQgaM3LJB1vc4wsaYEvSkoUJxabDM1wa4G5ALtpUiE3Naq5vALqfxKk2BZFY4YuqPMj",
  "key20": "XWWzcL59kNiDo5Ep3xdG15G476bLfLM9ytDmXcFNX3z7suQQ9tB1rdKFnNBY38FVCbBYWdE2EeJvfbcdTFadxcH",
  "key21": "66KsqnZRbV3Qwtc3BG4nYhsXEgRTtKmBFQvUsjFj68YCbAyWWQEBRHQmv7GLz9GLB9VQ3ZUYr7SFrMABJGUZcJvm",
  "key22": "4MfnyumGbFSCkMcvEeWTKgbtPzEgnRMA7hSRtSByXrjnweNVTyNqpsvU91qgU9KeWDSW3s9htiFrGKr4Y9hRv2LL",
  "key23": "iKxTi6JUg4FwJWoDuiYJ6WT8nq1iqNJfUyEFS7X4cjhhSr3a7UJ7kjBPG6LsyuhmvvFdXWradseNbnSdFHdDeMd",
  "key24": "3cbTxmMec97UFjKGPc4cRnxRjghVJduKekHucJfS65uPu7nqc8ZzAqFKX8cQ4h4FbZMYxYCVSFMGZvE4X7dT2MG7",
  "key25": "4X587itYdnmgJVir1JPuwNsxoDdTUuUfE1tw8nVc3vg4ZaTnhwbF8TjZ4zbtbs1kaKyfvSd2L6tGcika4cE7kcdS",
  "key26": "2VPBJ4MwvR8RSJeTrq1Y7dUZgyQFmZDnfDngPMaKiJN4pra68MfSQTibHt9KiUG898igftjpoHNYZ3S2xred88P6",
  "key27": "29jLScdYAkUQRwQvNepxuPTvCux1fDRvpLx4b4xL55PEQubuLmQRuAnTWb1MPupjgv7B3BLdkgEVBvpmVJVBkHpf",
  "key28": "4XDe39Sxk8dCRnpdus8y23PVwKj9QseupiDnWf7p5C9jtvrDo1QruznGUKincKRo3S2WdgBwez1nfan3Dvfm2uAm"
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

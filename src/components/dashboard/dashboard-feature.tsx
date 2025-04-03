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
    "5fRVjcyrcuGhKNfMzBoab27bD8yMVmjgXPE2UdVkSqNTyR5SAqyDUvuZm36Q86m4vGfqQ6wHH69Ut8mB7QmsTD3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xhSXV3n5JNeyJ26MifNWmCshq5mCP35sTJF9DA138mk5eTbVtWLneq6YpP8WMbNsMnTCTVRhdkY3TRRruWcT6Fk",
  "key1": "37A7KXuQAcJHC66VRaH7m7cJUfHGgMxHT33ZXhkGsXnkqt9bHcGxQkvSoGVK31cg4CVxhmS7qQhfAM3LDA7iQGpg",
  "key2": "27c1KDrzGvSgXX9joYFD8pL7cBCctHrRFtBktFkWV7MmvmviUP4x5yaSd321FB2s4qdqeSSe2EAwHUhMwy55KCzq",
  "key3": "4CN1KPQky9Sy3keT8rBKzo8sR4gaGGvy24yXvkgALYrpFVhJnJUAA4c9baLAhr72VGUNoYujGquzo9T3D8X3SZjf",
  "key4": "5c4g49qZ93sGxvAfpgKDHd2JzfpQQi9CML8hPfazPYhoPLqTGJdXuYzmvWTagXTBPCWksdu3qtwfiYqGFzbh28m",
  "key5": "3LWcXXMXsjQeBPFnrrtc1xuwRoLypohjnRXaUyAqyyHMCQ2Ej1zkqXNVrCKAfuKG3AwaVMu8Y4YrX2vH4nDJBLDq",
  "key6": "2kfgADUrWVUFoZfjk4YMm5hrT7w5LSrLmRsuLRAdyh8vNxDcSmTUDtvSBPrKKnmhuGnsqJjZ2ngbP1RWZrDRrY9k",
  "key7": "2efZQi7zdG3bvEwhx7Pd44zUeyCwShJ8QFDnkHh5gD3UMju6s3hUBEfgtKQXV1Xf3Dox4LTkzaqgs3G5abNDAeyz",
  "key8": "5utTtcvqDHjvwiN22tQZLYyoma9rPPGmg3xsFJc5Z3yLaQudsxVY274fax9nqgu2fDgJxekq5nWSE4YB45mWN5PK",
  "key9": "3vD7RRanxcaYo9PXkg8m2tLyTE4YW61y9h1rcSN1aiD5zujDcLLq9z5aUqqW32QZnZvBnQsKgTHTtN3s34PRRCM6",
  "key10": "3tx5sVdBo3w5gn7NsK7D8GTmhQVoQMsukv9miAJsfKi5aFmu4nUxTLCQo82nuofmaK1HurKPg3YgEwR1sTHzjfac",
  "key11": "3GJHe4DAu1U9vUHfHQaFHKTzTyQV2NA1DK1mPFCVry5Vp775QcJCwXrpCPxScv6Ybr6JQMDKyPakP45GKupqp4Fh",
  "key12": "3uu7dQiGe91Z7AFexMPu9L5196yJ4L3LmmEaZXuUX5qEG68N5s6NDSPpTTDhJvHigzMcgxaVykPycPamA1n1gvKt",
  "key13": "3dXADy33LFL2XVRD9Rwhck8QRmabEcYaS5ZbpEVbQBVxX4suxkYkTXEeWRB3mxZsc9auFt1eUdTbc5zEh7tQ6mTM",
  "key14": "3AgvEFCeiWUAkjQX8egrBSQxJF7wukepLnm3oH8NzFSEspD6DBT13bHhuD1iMxAnYK8iGwEVKMexaDmmAkAKGV61",
  "key15": "376bw9PKpxtqqxFzyuu6VtFcoEBmeETbH9gBtCuvEBaM25EE6MXPzSZ8fNurDmq5Pf4zPFh6sQrUig7fMb3rsMVV",
  "key16": "4WUwUYALgDA1yHzLsy92ka74jRgybVzey1g3m5iArQKq8vo3VTaCVTMyovfcPHDgF87gj3M4oG1KqRHkk4S5gUz1",
  "key17": "3Fqp4zU8ZsN1ZRKHwej1GAw2jZznptnjNvfA99vX9pYjo6G7k7ttcU9iVfkEGrs7t1HJS1AzmNCkNHHTG8heQL7a",
  "key18": "27AC5YhwENEu7oHY12iBrAb82ptzfpJBj5kKui8pVnSygGZ2nRAefWn8QjuhKQBK5Vsog1JKh296q9A5ChFHXNZu",
  "key19": "4HP9SFdt89TVsjkwvYEWd2nDTLXHX3iGLWwnqjWT1Kvd1MNLG4Aw7rN2sbyHVTFTktfqoeiKm7W93p65xWgbgKoA",
  "key20": "3xMf8WPRZGWW89Y2d65jHbiSG9tJk6PuMXyapy11HbzV4sTqbkSwwbBcVJEVKcC8uFyVnPMZnbxJsmv4B9ARChfs",
  "key21": "1bS3Cioihg6wSNKLRjzKq92Vqs8eAaryVT95z6zVhgStEnD1UGoqSeU5WNqJ7dRVZ479xPQKM8EWZhCfSzkYRud",
  "key22": "LC3w1cWDiNyu1mGPionH3jEB7hKXJLW2MLd91MNNpb5ncw4iCvgRX19FMjNShr6SZK4krBVPZ2quTJQrhJJKfRv",
  "key23": "5B1LfjKk2tCYJQCYyAThbxLZWS1kndbuhtwhR6Y3z1JcMmXoEvxcpbyXd9oa3kfCnyQPJRMrs2EAME59RistJ7g9",
  "key24": "2LQ4ZBrbtewDX7q7VPXHtCgCKt43sD9ArdNhQh78vf8vCx86wK78gujwfwyiKwkDT7xcdbVz3rdBFwTdFHBcCU5g",
  "key25": "4kX4JmaHfhMjGm96mYamgd88izsEs726Fyzf4dpvkuLPq7WF8j1LvN8ZiKfuFDjokBJLzRXgyY9VAXj5Vc516VG6",
  "key26": "E2aHTfyoqrx5C1WBBpGiJmohDxC5cDJFnwSEnEaLpEK9zu4rJVDj6p2XnFFN28cYijphKEApKMCAViDtksqJ51A",
  "key27": "3Q3k5uk1inBuT8yqL2h8ePzYwMyY5DTcchrdyQwoG5vpTavX25VbA9EywvXAFAWFCp2D34aBog7jNAj6Ek7iPXbJ"
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

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
    "21oNZqfVBBPYRM6NbVHJXvG99AVK94JUjdqpPrBZ4zxkPtokQbLGuiU7DKjLcjBGH29RYhw1VrdaHCfWJSSm525S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Vobd3rDzHmb3FJYzit4uK918b5fG6HEypYuUNL1HRzGMndaQD49VCNLwZC3fxSMwiK5VEvD5bV9RgXW8zjn9kf",
  "key1": "HXn7cJVjG7CxYtLeRRY7VCbCe7GCHcHbxyuaCJKQKmbo3WPqMRC2s8c6iCy6QF9WkFnH8zn3QqQ3TvZUifyedkH",
  "key2": "4ZcWVD1fywni9uKu8ftakTJLooz5cXjHUcihUoeLPEDasGvudRDgsXUT4VuLXZaaKVQEB9NejHTH2zD5PX8rGKuX",
  "key3": "3kPWVPUrCbwC8pxc8dvH4LGzDUPwUuTh2aacitWgnZugiqw6uUZhCbYH187NPf9UaJdLxD3ztWi7JnKwaH4ofWUc",
  "key4": "3ChszMAgR27BTrymBSh726aDqfPx1o55h9UKDZufiyqrHcK8wT9wLwnxPkrPE6ayRTpoMgeT1Fd5vH47qPDc4wVR",
  "key5": "4qoG38PimeKfdN2hCG5bGwGW93RAexYaMfhdNCAPmPpAms8WcRFFJuJijbCByMwXRJKjkXQyzjqttHcUopBZcmwF",
  "key6": "7iJ2ftP5nWVywAxuDgn9J9P8LjQFkgRmgcsP8PybmzeebbCfqAkQTgix821myVzkCubPMaxsHk5YdCLi6X5yqpp",
  "key7": "2umiQ9oV24r2EAf9EAwYT8Eaao3wFfJxS4qgSjgCfwaquEvWXgxPDSXtBqPxwPoFmJaKfMzmB7bwgdWKer5yEuFN",
  "key8": "34bXRNAeXhUARye17xB2iihbB3NS8ivjC8383Bz8uXEALFC4d76asnhWxbeN2REiF12vKmpb9XQf7KQsxrzuxgZx",
  "key9": "3EtJ1FBwFqjcV2eKhfo7Yww45LZ8419xVxoTapgFVQnm47MbyxQjmFdgMAX8cFtCq8x8cYYX3GL2vvRoadPuaRse",
  "key10": "5CuSr2ityPwheto8XA14LSgNgjVx9UJWci3uAdJcZyCvVZ9BRxdCuerC5TxwC4HZqw7czQzJ1j3MYmU99kKHRUur",
  "key11": "5HTn2zXMBf9UGDnpEHAS1wgrthWTjHZjLWcSiF19jXtdoMmyJRzQY1ygAkEMkpRdbFyBQQHhG8qz33kfrg6M57Qu",
  "key12": "CBNLCvBUdqRv8iMe3k4saUzqJQMfEndejDmSjbHyL98yFeBae4Asg5PcJbhbYjWDQWobfhzR5Yj8BXzMSENfwm7",
  "key13": "RGbCszpaHcA4WrceHGH8n1AaKoLLPvhSMZYcxCNtDb76XNmsqpHpSJUSJGfm7GzLAapuDCs5xX5caKuKuoUjRdu",
  "key14": "57tsNU3yj6rGHEMLaxDiZewRf5riF8i35h3NkBatKPLv5xjcopP4DDL2uQz96wiCCHXhmToV48oBwEdf3KTx3TDJ",
  "key15": "5SkfotpHJ4zuL4wzkXpF7rtcNBGXXCqPRqdU2B7QjTGMwYvDG5hQ4B4NeRiggVavu2v3RcPP5zqtuiNYyKJDPJ9D",
  "key16": "25s9Bm95Ex1ds1652cxyghWvnK6QPvtqAYGGrkArRvRTtyc1J4RcH2uSNVAgxoaq2wmm78s1QKAvQoradxNUhrSt",
  "key17": "5CF9U8Zdj7mdppH6QKWjzXtYG8mYXAc1B5hvMmMfTbJiyDGeyVzbVFrGGKXDkDMNToxGgGzXEFtVoy9m5QW19Vt",
  "key18": "4PXoyCo7aX2FA7KLMJrEdygoF2V7TaVVoJG6emRexTCPKrHx5RWbo1XESPFeWnz4NCTume7bfAvkc3NugUFcq6KY",
  "key19": "4TpMzRAPkRAQoeJKWadkPhBkSftgWENdjC1DVfTyKN5AhB9NEPRpVw9C7FWnZ1rniRz2yo2vLWgWCL8MJ3i8NLTJ",
  "key20": "3z6HEgkkchVFCUhY2ifkXY6XTb5WJRgXKB3XRue8QmmMdMKibZrfpMau893bThQadt2f4stHCuKWnyYSPZtWuhD7",
  "key21": "257Qayi1irF8yvGTFdhpxYjYDrpJzVfyay7AZJVv9fz3EkLM9TxcWnUHsaSb1yyR4tK3QTLCFDJgS8SKRigD4o4c",
  "key22": "9a8tFCvvUnSKuGQKM4yNUqDA7dX45aiEXbJcNp1TPrkXvtdjBdH4ejvn7NkfiV6upMPJ5WteNRmQH1grzn8ezXo",
  "key23": "3V4Sf81Xo7vfSDsA3btSY7ix3U4ZrpoGncDkr7LYtzwzb6V86G5zg59Mtqdzasm24jHjay5FZ91oLrZtVPLbv3Kt",
  "key24": "9jBH5DWSTFCSg7MhuZEkULNZPFdYJXdHrnGnCk5cUU8cF6oVboKNgA5Jtq3VXEpbHDwkJv7rYRGAnNEjfW5aTFn"
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

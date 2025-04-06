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
    "wAysofpaZh5tjr3yZNAFZDUfFpT7wP8RBGo5uHuMFYwaj4b4oVfCs9aEELXaXDGfRbhiqcHC8afsifv76s4qRRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvsQvprG6uNXuivpbSZqxqGBufhhPEAMQ9TdaHCM7HBDUSKc6JvjjwY17iQRRsjZZNXCGdJ1dxHNSJytDZncpQY",
  "key1": "3gzPFH95aXYd48CrLgk4UPvFTWrJdNQAYXKEx1R3FQFNdTygvhg8ubu6nmktPBfJu85FzkuKVcyqeqr8KWWPqvBM",
  "key2": "5EuRnGxKjJVFh9rvm91XeQmaeBkTaCV2W835fbp3HGXQtqj27YfQxi6QmUYQ6qV3KHNt9iyPkGyUCzBS6VY5JzAm",
  "key3": "DyZ2h7QEGTfJQm4u53L8DWf8BWn5TrJn4XHJzVaEifGQiJfqBCwgaYWLKRdhyvUbLcV7wnJQKjAaWv2GaNTdYpY",
  "key4": "5eWjLsHdUEy6X7qkLLrpzKrxstfiuEmspBH5CxHmwXKgFJSBAtxWkZdjJwNANDzGESMf7WwgzyBod2fcQWitgs42",
  "key5": "4MGZgpRcxqsVSc9voXjquDUj4VXDm72H3TnrFKAGGpZdSs8EG4agofqHX12BioTJtsC4Ag2H3RBJnon14DJ3AV6S",
  "key6": "4GEmeAuc4Rba7hNVi2KWvWPP8N1s5GPDrJ231TYRM5e186CY3UicB1t2J2gcFFiy3D6WimQ6VtTJCg8YPkeemvzf",
  "key7": "64FC7aYmeMk6tQQ7zdUHcXMYLkNJKPiBiYDysPbVTjVQKecNmiUcwgBHSmZGQRCko5sW8R4rB67EDATxSUvHY93p",
  "key8": "3Mv6x3jKUUofSu5MFjgwrgrcVurT78mdjfGAQiP3s1pBimjrUU2D7EZywoSvLycociiNQTHzMs7S3uTpCcix2Dpv",
  "key9": "3WjvEyrGTuqHCizcssguRbAi9ufT9Us6Pmu54wfJPLJDKEzNcxsMQU5AQaTJPf61mjYMKQQydvu1SbR1H7g1bMES",
  "key10": "2XGGJEVZoFDvPnwmmoT2JZEXfEN7wRseQGif3bGs2ukhoqxpsAa2qwVNUbDgGAprJPpEAj6xxxi7kyQzv3gB8sVR",
  "key11": "TTtWtScayzoDCTCKQPdCQPJCYXXZ2xnKuzyr4LjmzSUfTqZ2GZHP6LK1DVHpuS3jy2PmE12P5DV28QVWEv7jNp8",
  "key12": "3A4fdEebvo2zssZBnYr3Ag1WvkBAMqUmg58SnoKtt89uazGA7B8FNuTRinofUfafJBH34oid3XxcMEWhGTvyvJZu",
  "key13": "27QXRgxDvWBKkfKPomZT7d2UuTEWUEynSuVADyNXcWcUG4UnDzmiHTed9sPiAnC6kbzoavPvoPn9R6rUSfEbJNZR",
  "key14": "5h5Zk7qAc6aSHsSChG6S7U2GiwoS6crUoVEFTEoBCd2YduzShFLAiTQHb9qR2Y7rA18KU6nzAY38GMn6YmTxny9X",
  "key15": "2yosVFhnYUDtjifVTD7Yo2EMJfsrkaaKFrQCAycdkGtnLzzvwpGXDtyzCNBW85esbYB1RcLuZpAJoag1amUcCDgR",
  "key16": "3A3hC4qew2GQTj3X5zmF9JfmWujD7B5WUKcqQkPBgSYV78ejZjLh4AVk7iHaEgQmr1uhbC29s44rpEHe5s5QnBZ3",
  "key17": "2LdpuC66KBvkbLqq9o3qeP8yKDsUXdM5abq8iVfUj5tzLjS4oSmXcj1bsVTHeguNmJhPUTHSiLU3j48CqRPKX72S",
  "key18": "3w8YypPgeZGFKJoPETqPR3utcpjKUsgt6FRv6zQBa6d1i9dfFQibHNAKTvARKF9JFRCKbip5FzTmaCNmtBHqmYiN",
  "key19": "3NQHsBkC7sNJWAxE1yFyzzwEQpbBihuUnZAUyaiKwDNSggP5Y7hDmccw685PkTMjA9xkLTCLhAoqYicWsn998xYY",
  "key20": "61sE5DJXpHLn7jqjCxYmRpuFNsqd7GGNh11peVsVJHrbVk1fGDeof6YBruvX5nhZwy6FURLiiMUsRsMxqHhUkiN2",
  "key21": "5DNBgJY4DQ2MHGnmw6WigBk7woga38QscoexV5HdyPNCxCGi6Rvyu7yHUiiqpfkdtyHZkKqWpD6FcZ6XhS3RAMGZ",
  "key22": "35z7gWMLc5SyVEejBeWry44T61D3ea9C3kuu6k5nWTdPTNdpo6kDXpXwBkQ6MFoLhqnNSCzrJEZX14tUasYTxrsc",
  "key23": "45wJtWh99vgdNYZPXLK2BPxF9XNHCjd7qsMoNucDGbARVVix45rXx9caAZr6GUiszV5TA1X4DAF7XHNG8pNvXHV2",
  "key24": "3RSsFvEfHcq8LKAfwqPJ4AoLFcBbMZ9oh2m64vrf8f7AEAS4dVmNPSwUFbJTW6uESsovnkbtWMLUx64anrqXmyot",
  "key25": "41qbjhoY4S9GyaYRku1aer6Y9x9bo8CzKXGt8s7VbVX8z6fvx7DxHE3fJdn4dZ1gFGknTy9fehMp34vc4xE2YtuR",
  "key26": "55JpRHobMoU9iYwKjoDAohVXjLKQNdsY9SEsVkC8DkUe5pwhBjtufbZCmHvmnVG4vwzRzXo2VgvSGtM4ZVo5jfYZ",
  "key27": "5E5Sg9DXzCxwHZDQ7UJkghMYNoCgygAEmFx1SoT6pj4s3dF6Fn515MbPh1CCFNghYZNHXfmb3E85z3fjFUNjtdsf",
  "key28": "3NFf6T2RZBb43pV4c8uuPtqMmgkfEh6cytgSCrvoNVjH64XY5AnsUgPvdG9Lay2jTPaRjLEm9JBPjZ3nCDoxZo2Z",
  "key29": "2qJyAawkwbNBrYQNsn7TULVpqaCuLbHAoWXqQpwXNSaxEC7Somq1snuNrePXkckiN7tfoeJkFnvjsNxuMKPLd3kC",
  "key30": "wm6LHnoti47joWvX8E1knB4utJWAu9rrQdzDpPfYB1N3M9iFAdh9wpvvfQzcUCL8zdFDJiXbatkKrN7BmFbNeBK",
  "key31": "3jdqskEZwgWJBocEqNaEE669TT2Gj8B4r3rADTjUqnqs2YgBvVBb4i7H8HPVZYJ1Kq1c4UJV3g27MpRNHHv92YrD",
  "key32": "2W3fTDrvdmm2LQSN6YpkN1B6q1TFXGKTmXFGabsQUKGwCQUS2o8esS4hw8y5PBFsyEbmBPtuAzgTMHzCeou57j2d",
  "key33": "5RSXYf5dSj6LrHwHDevRTCcg6gSTy2PWSLEnyHsRN2dashEERX57iBn7LwXP6aEwxWENzf2tUKRMQ9AFfezr9wNB",
  "key34": "8R6yaSBZkXYthyEd61aQ1ygnqKmANrQqSJS4mdQc122sPiArhM8vhpEvTM62nZD3KBaLjANVaivFTsQisi3zNkH"
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

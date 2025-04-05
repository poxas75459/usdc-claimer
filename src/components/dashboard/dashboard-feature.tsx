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
    "4qb8dvBGe1MZQ78byunFS5T6SdW4ho2YoEY32pf49pcyjKrcvHRFsKoHzJ2zU23DqM7zrBv1SvreTqnjY6NsopKw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NX7k1Lg2ERwSodBCQhTtby4qMZmm4r2aWiX9rgKm9ZigN9AkEy2jJDLHDLWASSYxW57wqWhtpavBguS2g8mhBiR",
  "key1": "2ku4RDNPP6vxe2vtXKHPu9eJbuSGxvnrzgYzoS8D2ZvcT1o7MJTxQBxsk5Q4D3n3zZJArYw2Tix4HAhVA4ZNKJRK",
  "key2": "S3VfQ3wLJtrvnAaivg6VzEnkR3dVNsbUfYJaCwSfAVart9SwQRdtWKT376bGs9wq1P4ictNWDtu76ZGVTb2vA2G",
  "key3": "5r8Ed8AVoiJm2v8UgeSwxzQm8LzyFPvCCnNGvbnVJQWEJiDf33onRXL3dD5p9VMpxnrXpGZmc1nyo1bDEjzxoJqi",
  "key4": "4sD4ncrbNQ3JAs3akuEkiGujTKoib77KA3ZcqYSrJV4VRGs2M4pSUWe3877J3SPCvzWyqZ9xvbi9cQJA3H3yj6Zv",
  "key5": "weAjiZZdBHjzzm3hihucgjcHTshdKae8JQi7gS5UA2qsJQwCadN4WRGWxMayadKGW8RjRH3KmLQGcg9p3jz2jQc",
  "key6": "4jWfjZN83BpGCuoqxcsR6YJvLsurKf4oV136iMpsq37YN4uTniYdRqBfU1o62h7ro76VNmLW62f5a2zmkrShr6rw",
  "key7": "5UzxaZ6yk4v8Ykj6ZZ1gUf5g5Yic2Dvn1B3Z3b2wYJAYkkoZm8GrLjwY57FeZkdPDSt3o3GsdGPfspHqFNXwEGbG",
  "key8": "39UVGZ7vhawxvt9SQ69ZAnfMjUJvzALa2BV4Kx73enH9GSkURKewpa95iKobC1x5GBazNtXNVx5CYo17eBDdq5h3",
  "key9": "3MZZZLCd8Eo6D6PdH1hDQcTdF6jiYvJFPsFX3gYAboCNBucGwFq9hLi6y7ocptmpsADDkaBHXSM9FegXYQxdTb2j",
  "key10": "5nT8CUjfKAX4d77RwQR6tTYuRyN5niKUYXYEKoV3zFoNYQdtLiEZkmSbnEHVv4NfArqWihXAWNrGiNKvcub6HjoJ",
  "key11": "5sfbAkNqcM68bvHZ9wEWcwEegbWxAMxdpeFFBbw3mrfNxVxkvGWKL3EuaXQFaJyUtLoJoJ1EPpPZsH9sFyn5RLcq",
  "key12": "2XuTUDgGssXecpGrz7bEnM8cTLzyNzgMcykDaL41V23uWtFFjcxU5L36oDxJu3vF3w2QamFx1VW1UiYMpEe18jbU",
  "key13": "3MCZWGRnLUyJjVEcGyijKwPGxvqga22WckeFBCeLWbeewHt6AzvFDYYqK6howGqTcci2KCG3QtDFeBGfCL9y6AXF",
  "key14": "HJmzvpWLsvRc2mmpvNG8Pk73waUqbaJ8KCK9bP1LhTnNRdXUbv5QpzW4s3hkpFagz7ApUgqyDj872iuPknM3Tk7",
  "key15": "34sAuEz4piLKL97xZctNVzGvuBDyC6XvYRfytCMTN2cGauz9C4CGQq6nnUsFzZu1rv2JPRQQdfedpW8WVbDY14n5",
  "key16": "4cdxdvUZwAPwUCKahfTkhNHFA4RBfgxpSHEkmV2BWL9ruNPasZ7mTJ521TKatrtFRcL162eQiMPbLttgcVX89xkA",
  "key17": "3WbP55okThagkwynjFQpsBPvgATa4rRnd8eofn1BmeGSzLP8qnaWcN55Pd6dR1eRwxm8TuU3uygKp5CWgk5e9NZR",
  "key18": "27UDEkuK6cyFqAsGdfcyFJsXKzxMFks3ZfDJXPsLB48Qyft8eTWp3KFeREUWvAeFWEGWZ2iTpUV5gxGdwu9RvrFU",
  "key19": "9sSgqKBT2j1cAMf9fgXUvNaCAZ5dDUv2GuyaQMoUXkQNE4bexRXwYSb6xtW38FWzWvvxMdbxYmFAQ2tcuVFSf2t",
  "key20": "3gPpntKVrTMmXqRpNjj9thkBSKYiMzJvWqRrVT7UeVYR29kKmmrnn1u9ZTqvs48mPVkBMkdpFwPjjjohKD6DDaUC",
  "key21": "2ojQhG7yqVvfVsn9NG8jdfRBdyCKL3fD6hjzBUaZTm25PtMo72btfS1AtmSp4gZiAPHpibbaaP8WUA3CMrmotdde",
  "key22": "Yc6NisJVkWKeZ5VDGqGaqaPQUyXgmiWNusJ23jqKYibUkhvSuBTw4EoJGFHMy7HKyU9GuifrNQcuB2aKkkHeNKH",
  "key23": "2jXL5Air2k1zRcys5LdKfWZf2ygJAqtVh67F2oTQ5R5dDWqAEbMeCHtEMVUzsJVyMQxGZ98Wj4RcvBurBwvS5wqU",
  "key24": "TmF3v4r6D69YiGcV5YBd9oLfwTLBAAAWnB1AmRL5GCKtPqdcp9gAWf3sbPXLvKMMoGXZcPCMqAwPejXehVPzA4z",
  "key25": "2xfXrcbSoutNaT8yUTq6qcAu1LyExfjcmFCbViDRthtbi6cPsXX4hZKwiPyb8xkWCYS8SWZWwDN5fh1Aswzyj1te",
  "key26": "ntPTC8eUwSA2b5cSjTSLxe4bSTuwmTnMWckHEC2xwnhnMGQnesh7sFnYnWBa4Rf3tw8Lez8UCBVxT9W3FMMEAF1",
  "key27": "5VKmmqn5xrV1oDaFq8BS5jjY8TCiNG8gdhKgg5kV6Chpz1YXBn4k8Lt1r8tqsTZJRPz1hgqaxE6WZAaqzpL5L5pk",
  "key28": "RRG9gEwh5sZpqSGcTSJTN197seKRivQSUyCDTxRPqV876WSXJAMggzJ6TiXXgUPfhtsfjTvY4Pa5HrYy645ZxU7",
  "key29": "5JZ3TPvWqJK4QX9Cnbe33HhHesp9h41yqTMpLZH6h5ccaLmv8SJwrqX8zueqbQUfamDpXkHkLUmoQXGHvM4eUzoa",
  "key30": "4P7vgLahL8Sr46jD7cxdkkJUYgK5nB1hpYjvyGJYo82EM7K6Wqa3bNduYCw39gExgvzhdnEPEJ8BokLr1LYckxjz",
  "key31": "ws3a6pF7aFCTuYkjNmodHUCxjsSKVxUDbXFtPr6XfxTxnSWTavnCUASftfBdPr91eHkKkWSDFcg3AKVC2ozMmRF",
  "key32": "ysJ4kRif3geefQ3Pr6MnSk5jn7wH9ton3sKUZ8qZ1yxFUrLgtcbETTz5uKsqd9s3Wg8idNcVM57KxHZi97ynLce",
  "key33": "3DtFtKAC9XLjGJKzPbSmTyh99dkLBG5uQE1xEUN24wtC3VWVsFhWdLPpQxbys8ikx2FThK1Nb6LHBCxZfGPvpTx2",
  "key34": "2ZjuibF2VFd95pbdJ4hZRYYBKY8FMY3uZFsB2MYKgpaTZdLvyy8rXoV53J4B7o8DkS8hog32retW59DNLPd4rLGX",
  "key35": "3rVLjF1TCyNKNuuz9gf8X4uyn8y8FQzfhhXT5A5pYiWSADKDvXuoqqZxVfmcBUfjWG18N7NAJ8t2XV88PEuCqyuA",
  "key36": "2PCwT3mMsbZCuknK8QxY5AsAu8bjd9kUcofL4xGSzkarSfL9jWj71QMDHQmyCW7rjS25iCo9Dj6N6irQnNXF7DEx",
  "key37": "3c4Uv1sfGza1mHyAxZ3rf31Hx1jqmcECGJWmW3aBfJNHwYY16kRV8GqvkbuKCHhm5jhTgThsofrEHyjx4WoB9nE2"
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

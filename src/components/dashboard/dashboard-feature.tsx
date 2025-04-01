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
    "3kWaktUYkHDaShmqgNvqA9jydW8PUdxGKS5o7oen6mF12gpdvVvv1vBQ7Upkk827TgYmbF1XT7X71o3tguaDayqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aYuivhAtV9hTmzjzpN2DhM9kLaLsrPrcZn5xogg6mMFtDX1ZC6ZDH8cTUTj22y6HDG7g1SWVBmuryhsEH39HmFS",
  "key1": "5JzZz9qRZXMZoSqGhJEG6bYj1VahnQ4trxPy1WiBqkDxXo6KXZBwhofrp8A8bL52nYx2fjbzXP2CN2hcXt41MhxR",
  "key2": "2ANuP21o9Togs6Jb67xsweFbLzukNBYZNuXmV8P2R6aDakgWn7sLiKMSV1RFWxNUgufTjv5PuQvMsRNuDYpaqBvj",
  "key3": "UKvBfaqgz9s3dbw7m69S86EetFc3Ws28X122CCWEPetd64jfDRwXopX94wYbuxDNosEDKmM1zwwVtGeiLo2KQ6j",
  "key4": "43srYFhDKisdi53uwMpNoLsDoPQYPrhWCqLaCX9oEXmrDFsq4Ki1NLCwUSucr2mx8N4twhhNTGDLoUV5PCnQbBU8",
  "key5": "5QxESFbV2Um8cAwUbkazXZ7aUMUCDufjuKsBrAR8Lg7TGLvmEPgV25ssvDRAv5vzUYLwTV587vy6YZt1pHrURBGj",
  "key6": "2WHNzRTQcsm56GTZtYFWdyWZU9P3eqjRMVZhDLYLTqkjiWXNQ8R71KDJXosbeqCYnSjgV4WKYM12AgDrvRWUJr9e",
  "key7": "4R9oHWVFevaCstoah5XfzbiFTZPFGnVY6rduPFfRvW6c66L5oED9ycqd8CEiV6v9LjfWWwZudocAzo2mPEJjRvvP",
  "key8": "4VwAARgend9DkAsU6FmsLGq1xXudaDWhtPtnqDDsLUsQ5EKyJCXDe9WQnTe2sB1HvcfVw1HtfMn6yLh3LNkYFe12",
  "key9": "5Kk89jXktQYyJ4gcLLw7Y8RZwxFBVi2FeYXgbpmQXsQMPktUj1ZCeys544i6WmtqTN3npbg6r4DcLHQE3n7BthyP",
  "key10": "5yjXZGsLveJVKSzqgchrc6CSbC9q8ziBymkWNyUB75BfYqZt48MRZjLu5eyhvjG3xuzS7qFEzmK87ZDPnjmDeB36",
  "key11": "31j8w4FYjTv7PXgDYX3oKfChmGuw2ZeRopWzwpfyhPaRMtsVDuoYnuRnSQqjHy9JH7c55XRd83QzS2HYwmJLBpKT",
  "key12": "4RMkF8Eu48ZaDYm7P3vp8GWqDrWvAa1bwW1Dt1dnBKGFdZ1q1PtWDo25JL3QVE5eZr4pdX7XxjLwgqEAYftDP2Kf",
  "key13": "24j57pAgDuHSKRq3BKV7CEwbwMGNk5ck5UFSyzj9HHh3kaJsSbgF88feo41VYzPrjKjLPJAwzTtpq3QzHxkdgNCP",
  "key14": "Eo1KJCc4mRE4r1JnyNFUtnk4B8UjV2KzZDBLUdtJxkCvZmpchB1zHfnq14in9ufzyGn5NKw6VkTFtntP9AzPtx3",
  "key15": "59QqfsQ2Y926X8vsUwuHeosz8sQpSTtNjVQkrHsVoaunN8wX1NVY6w6k2GCnL8VPiyVthfu4AZwVnayf2BZhKWug",
  "key16": "21jm5R3MwgvooZenRTDxPaZLBJRYXfuhRYybUxdPgT8NTHteouunnXruSsQhxDRfWL5gV445yLdunkKX6i7BGLcJ",
  "key17": "2HbzJ8e8rqxKfuexwsDRGQBLJqWYJ7KdgS81yGjqKZGQKvUPnenXn4CSJsTCjBdpiUEPUheYViRPzBEBRhjMDxKS",
  "key18": "3acXRbVSEYhGkfaBq4tLrj42UU6vFNs4PXMmpFKE7vN8r2Tvi1M6dH9WgpxgXEzDbWTWsQKbBHbcjxRxiJ5dTf4o",
  "key19": "2vJ7Y2RnhWuxeQnqqWMLag2oaD1BXhc5fv4szZkKxnmRMDe9WzU2o6eHsrvRE6fY3XT15e78JBH8tFBVyGLs7ibN",
  "key20": "2s4APxdPztuRfHTfq9wVNKkrygiRFAFnNtcACdoaa3NXvnsPpndWpNt6NSfjTee31a6G95WVPUpLHf2cSeDPXbAe",
  "key21": "3jUiP3dbtWL4rFZrW4QTLGYnee2S2kw8UyH6BjHJRzvTSftStC9a3vmU1gXwALvXgY4CSpBLDNTcfWBuHXkjiwPd",
  "key22": "4ZpycnrW9iEkwWoXJoVvg9Po6oWL4FVJ3ut3wGuLKFL8XGxEaBwDtUGyqG39P966m79kW2bnq9LMFdh7YkNCPZy3",
  "key23": "3VyjRPqcuYRU2XSxhkXeLCqr4TT4xHURwSDar3hyk1pm6WEawcz8MhdCA2C2Y54mRZ3qRCjuDh4yFURF8neW47JP",
  "key24": "2Lffdo8KxnKdMyaqX6NGrz1t28XwJVQjNHmHLGmN5YH3M8NR8bQskg87QxMsR2fKhfi65gDA4CYm8vM4RvceUWRb",
  "key25": "2c4LH2NzHzw6PTmNgjpEke82CP8kHNj8EF9KS7VprpN1gCW7Ki4RuPCC1sjhQHqxSKFLpBYafxhGLQWqntDxXkJZ",
  "key26": "3Hb7EJudLF4rrgXBU8hNaSwQAt9jswMbkcggZ5BCL8JdpQrzuVAgGTejBgnMcaxk638xdWggGvWwNsgkVuuxXMnd",
  "key27": "2Z1MPaibsEVgydNLmYmiFFnAx5QV17iggBu4am5tpQLpZqzzLJW5xsZ1ksNRJwUHqNm4Qmmo14e7vy2Mnpt8SjRx",
  "key28": "2EysE1mAVtpgnaneGLH8ajGkPtSepxRKBao322ua2vrizuvB6Qeou8PGNP5udHdQG27obfnkksQMZVcwPMFrUdsC",
  "key29": "5tjVgAWiZExRkuCWuvyBGw2itCJgXeFzKM33F8kCMKVNP97LbXXzcfX7jFexo4m4TQLsbYg8Ym4khZEKf3zZLwfC",
  "key30": "5ML43KETyNDuBahMHhvjMtfCmFSBzMCLKxVnd77z77PQYv1j3Q4xvmGdWqVzxJ2JqiaxSeRkCnC5z6wkNhGXoYWN",
  "key31": "5hdAptKMssFc3NWLMZ55jUgJe8KZ66pxumpFtME8RcBtg5GtK6yo5SHsNvxk99nmheZTrCGywWGT38PJzwxaD7BG",
  "key32": "64rke9rMGe2p3VvcUTp9RThLa8JoBYfsqQjk6QT8GFvjjnd7YGSuPveqXFEdeFtCQhmCpiC9R9wmDDU1uogMjE2s",
  "key33": "35zKmVjPymmtqKBZECM1VTFfnk6Z3HwUZq7yHX9XhAEeQWmW6d8kWB6YA3TVQsUUa1VgQoVH9R1Wd6J9jErygo2t",
  "key34": "3dwjcdGTj7xuHKSTi6LHeSumTxRKAPE63HidDGGv8c2HP3Rf2yznKdVpUwkkZExFsgryhMYsZj8SsYcXgbA6pSnG",
  "key35": "4bPqS4g6kZUWdCYJmnrkxFtxhunVAh6ZyGk6KK29XkykJ4KFmk1aHbAB7Hk4xthUz4rP6HpW5QCsvNeHRJmu9uz3",
  "key36": "4bMHcejDDQVh5rctCmPdZtuk6jbsXMCpsMg7PriVfBED6G8r8tSgTRnNYyRwxBgMcLyFs6jLyBAAzYufccKCKuS2",
  "key37": "4UcDqEqsCzuMdtp95YiX7FwuCwYXPXpZLFBfYyWmN4wxSA1jdo8JVQqqWw3gkyMpgNwU7enDtomokL3xyvEngRGt"
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

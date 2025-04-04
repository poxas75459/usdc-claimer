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
    "XajgEX1HmAL5jvEB3BX6Nrkwvtm5AWihmBBLcAAD9XFKrDwUEh64CpowfcpGHeDTfJSQz1j82DgcWwZ1v4dJnEY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMrSStG4ZWzv4RLiwNu19JEBcztnbRx2sR7hZETukXox2wMHe54t2gHKR4aEBZDWL2ipuicCkT3tq7sBZzk6g6u",
  "key1": "2GfooaLv5sbSiMUvPwxoBK7ovoc9pxdVGivKKRfyrhrdEptQw7tCBKdPEa5u3oQ2w21pgRA5irg1XbkQjAK96bCA",
  "key2": "4nV5suL7FCP9RU1w31xpLKqFBQaACGYo68tXrsLb5DPVZzsTswwiQkzG2f3kexrizARaZdKUunYgJsF8PRFReiD9",
  "key3": "65eKDcaLRZJZmxbg21f3447X2jP7ncwbjY5egDB3kpztH1WSQwv4vvapmrcxRWYzHVQkXg3ifSVGG4QzU5Cutt9a",
  "key4": "nSPXZVjeM1vktBm7JauP5afTKpBA1fAGzjyeS73v2TtiiRvfJyk51iyBkr3nJy8YU39R1wQqj7yquq4nDijBMa7",
  "key5": "4rwYhyYALfkrg7VDjd1sbhkkwnaAJAwpyJqPzQCgCHeLhN5s8tadCfUp88mjadMZzYY7rAF3uegnbpHRcX5LZ9VJ",
  "key6": "4KML8CPZCMHQdbwcuXG7CmH2oYwXDP2ZpDM2fXrvRizsnvyZZmSpd91Z8cd6wAh1iK2HhQTciBcbCZD6yE6RQDxH",
  "key7": "3Rguzxci9zfbad2VPKoZRQffB3ZV2eagmGw8Q2DJRSy38NkRmwveoBy5FFQ1hzLzgyjjfpWmdz4aMvD9KigCmKKV",
  "key8": "g7RmZhxhbK1xeoVsz9uk37rxDNGwQQ8G4hwn89MAMTboxNJAzMq6gXtc7k192tpCmeXFfXEahftfcuDbkKXc6kx",
  "key9": "EXbn6ycEp7fjkFNWAwHr9K67enrwNTjEzthjYGvkFY97wjqtGywY2L8b6A6eFWzhwKsguJfG8nEknL1MVATkNmc",
  "key10": "4wUN71T8Z1vm5oJVxi55kYat14phicCPg7Pf5NnRaga6yniDmNefCdhFt3P9BhLVbx9Hb3gF9QPKxZTE1Ca2T4BD",
  "key11": "ofmuJ5VBGMP4QK9K5EgLdWP9oKnUzZBj783PkJPSsY1P6FfEHgN6JoojFNGW1GucsG53C5s1kXTCnBifQ3jKQPb",
  "key12": "2pmXVkjY1MpKccDYgxPm2ow5zSbCGF9LBHLp7ka2LueKitHjyacJzAHj3QVPt429X6vywPotkRKKDNcjnL9QPRjW",
  "key13": "4JZqEhRnGNyKuk6rvLE2C7XB93UskQJrDMnZgxV8manR9YuioXwj8wT67nADH5oqpF8EbJ5iPYozTjupyg5RKMyr",
  "key14": "2WmLENSdyhMRFEwZWv11xqqtVw7gFSvPssdMW5EHWWzsAhwRkWyQHYMXnanGX56XHMfTfxZEscPC4ZMXSBFiz7bC",
  "key15": "4i7C5yi15e9qwHXq9HELUHQJDqkCUzxr39T3MAxsLWixVF5P1W9fZAK9q5XpSGgecc2oZ25vjgxENczBcvxmTJkr",
  "key16": "2Bu7SLGxYWpnNkmkcWzKshcxxey2434YsRj1herWY99h6zMkvz36ahSGSEtqvHk3pueY8UbhSBnvLGQ9nouxeKRv",
  "key17": "5BexBY276KnAMMTXy46xVToXtE7ohHeCinP5JVj6B1cgyHF7gWtQbX88WHsJQp4ngPe18dKKgzkKYsUejyyC5aJ7",
  "key18": "9V8CHRNwG6WXtoHEdYMkC4uKGi41r8cTnBKcgcCGeYKzbxUiEi5YBrxntqj8r9jTUgZ4VF377jSfQAeky3FxwK1",
  "key19": "4MBpiThLaEJ4eCAfaeuvhjLBB8rLqyNfNWx2D3bXvwF9vVe7BPWvoSL9jAWsDkkp7eHUR8FWHW3i7eFria915gN7",
  "key20": "39g8Zorb2GQv1TFfoa3UECbxAm6dkaPnx1fuyWYw6cA4FHgB4PyKRs7xAR8Y1CqdEKp37TkU4jFBXMNPScm8UVux",
  "key21": "aBfS6XMxCJnwNEefsSppabptWySgA8SDD83b5ss11ChBWaRYz79U8cpMfiY46jjSJZujBgjLc5HU2CQFkQZnd2d",
  "key22": "278HGmmnQJkcpuZVKLwqx5AZJvgDg4bc4giJZboKmzwusFN7MzWUBVFpPWTUvSM4vMbEALexeg2gnvmcQceRsx5p",
  "key23": "5Janmrd8MzKKhDBFGpkJUKLvdsM2g8ePcc9acyf1NqGih8tfxnoKLrpaGVD1pbibfgT3cLwgFRpuno8L8e5iAcSN",
  "key24": "3J2UfRorKevxGbfqwXrTMTi9vX6pTZ3Jk3ykPSbwmV7TmhpEbdGitPTXCMz9jcv1jfNxSYMgFpWxSYhCPxotx3wZ",
  "key25": "4g5CzAX1yiD3nBfZUmK4186qAfjzqGjDGxirmcQ2AZMnQ5Fgqkus6JGrQPteTqNMiokpWSSyVngxDBv24AwZWfJX",
  "key26": "3hPbVjs4iS3Rg58ZSY6Jy8nLLcVKVKttfAbq1YReU6twLi78Uv4PSJ3mZ17rJpKrNS6LE41RnKeBoW9fXQkqWyXN",
  "key27": "4xA2vaC2qqgz8LvKynSqhze1frPUsZ5ENRBovjQiznh2eYsZXRVVse9VgAEmqYoynzYKW1yGCCjYrpAvwsVutwFL",
  "key28": "4VCf9uqU73mba26Ar91qJbADv3R83FVKadoUv1qwgiizJmBMx9KYQdJn3oontQgWauHMr5DW7RugsfQohgv7qjH6",
  "key29": "aMvJUu98tQmQSnF1HwZ8ce42DePNA9GfmfVVLcQ99X6kzzCGa2b7aRj8BmfCWHaWJD7YL218TACPq3EoA7DQ7ZE",
  "key30": "4idYTB8zW62sPBGCavn4TjuHLaAM3B56q4C4zwfa7pqdTTudJ8tuxEmVqUZSdfwag251x5QxjBih9itUCs77kDL5",
  "key31": "2czZsR4wBjMTsu4oZimJx8J5wigxyHfogmZKQzgKwxdssc3sEXrhmYgmK9diBc22XrL3wZiceyY9NgKhDE25pLuy",
  "key32": "5E4EtMim5cDT7SGRX8GkfbZR5HjjE7kCyGe3P4vFUHzn1NS7FvDWbDTwssRWt1fSgvAkSL4QAUMoajjDoZJ9bhqR",
  "key33": "3782XRCXS7zM4jrDwiChmR4xdyH4eYhF4d241jkdyEn4RynyA3jh7UE9W5SZNMFX4Lk8JKxeHvFbbCSKbM8Gvynz"
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

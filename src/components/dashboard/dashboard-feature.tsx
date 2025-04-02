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
    "zpDNPVARqLJTiNJLVuLd7WLATa5QHq81rmiZLJpNhY6yWFPxfinsJu8pob12F9JPeThmFxqLaDDLC7xvUpp3jsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t3A5mtLHT2nMFWKdgEVmSoPh83NmmhFXkgJ5J5jumVcvDm5cqq5vzQUxXZNMXeqQ6nNrEvvnJH2evNjq6K6Ri5c",
  "key1": "4GtBi1VCHmq59vJVT7Wzr3V9NPCHvnQ4q7VL5TqyjXzLVC3vc7g4pwViytWsypaebG8pTA1vKn3rUquqG1QaUyF5",
  "key2": "uZsuCEFDmXj2PaB6QzZkfiYZnijMugenTvcWpDoBEM8bbvq4WqZMEM2XsX7ePyC3ye1wAQs8BrB7D8YcWdkouEA",
  "key3": "5sbfKkDjmfbN7hmHAC8WL9ftGiQqApXpUmJoLCTeFcD2DML6PytJViivDhCAMLtzpze8nQxbHVM5usZnG8X6iLrV",
  "key4": "5CQyfHA4ESqeXb47nVgXGCGF6naWNDyC2bUz1NJB18g4HY53DP6ZptyyFPwWVcuvg9V6nD81PuNXJ2N3RTv5oQ7b",
  "key5": "3U4erNT8s2mk1dHqDXG1CRgujHHQvEX46TZtAZbDNgPPcV4GEW3Gt32wsS1gFD8eWimSNSMjtby5q8ShQ35QyTyd",
  "key6": "5Ujdp7qWKfZECtDxydy5jsBjq49Fz8fRWh9jUtKtC23aBzi58HpJAoZEyA3r8EjisndtRMVcV54B4QAV4Hdfgdhi",
  "key7": "5KhvfsU3BKJLvp3buhHiGgMRpWR5vdswkWQbeh4LiQku47rem67xHzm8CYBzq6mM3QTC7wt1F3MpM9ujZJ8pjmp7",
  "key8": "5C8c4DcENGHaWUSgmW24eoKNDAuvhLxePKcz2H4HJJVYNbDGiapT5D3rExS8g9kXKV422NFQKmmZ7daZC6FSTF9Q",
  "key9": "vR2udBENA4mxkeDiXwPupkKJErqcL7wWD6CFrcUXPYYBPkMQUEf5oVS2Y6STHXy4jkbSbXTb4MZwYWS2tNPoPP2",
  "key10": "2gVGq5StCX4xca3ho8Y7bwBCciH4Ykn9Ad1zXkaAGd4jJWADgcizgx9ifSCyzpuSx1avMnPv3vX5JU6F6YhWedt3",
  "key11": "j9N17W75R9kSsqMcqyat1SQ5HqwMCUY8R5uk1orpB9QTY7ZTrMguN2v1j3uSjo8sMdPbhLjoAj38zm1ZbfqAdee",
  "key12": "5XxMtZB1TbcZLr1NuhwQioiRbiZCuqQug1Hy7a3bYHKm6FKZbnW2t2Fg3uyEApV3WPTVAmgT9mDgKqJuibq5ux4a",
  "key13": "iZybRzh8czQupcCoB8vTQkouoNZNBsm2Mo4JwaY1ZFyXKhLbdAiUNeHxrRTVv6dthMqy2X2qjNY4RS56S4vktie",
  "key14": "d9VZRJsuffSgXMmrDjdFXVoo8hLs8bLxZ27iLJ6rvKU5S4NoHMVeuoqRqiuCRbNqB4sThtLSj81Kd6WmQpsLsZk",
  "key15": "8DV1daRTnmkHQVhPXAFwZczKSwtcLdqJ5rWCBJqYpTyWCwFR9rgQM2RTtoHDrGUkSBWtaBjxtGVcLtu24BeKpq5",
  "key16": "5WqxHmbZ4LJmn97ZaSjwAQ9oiDbdX5qSfZxy4LNt8iTVesSPRvs1YQSgFL5n3jqdaRyeey9AjraAc2m44ukiU2Th",
  "key17": "5o2G7zhU1mUhUgpFEinrzAeZX5y6kad15SeEkbBSKnKz1i3SVqCEmXetnHBGHcJSJLHFEuocqeiuwkXFHzaTNkHN",
  "key18": "5r5sWrCS74tSKQyc84815jyZphjX7rER17S8bJk8LWD9NzHB7Q8opdmwvTEJabLhMyYCHdqquSUQig1EGCeLUJ7X",
  "key19": "5b9bynuCEfu94bET2ffZDt5QzEpMbNpNEZHm4tkZM8SUZVKHwjvFLuj8uSsU9sVdNycnGHLGsg9ccaRj4WvwhqFK",
  "key20": "23jGetwZVkRzrXDDUHMvFYx6MQNhcJb8Le2hvrFQhBt6e6p1YEH9LXcYoE2L6T7xN1uR6zfkFiGDX1wDh6Nc7abz",
  "key21": "4NoeK554wVf7YTdBMazpKzx3uLPYwswv3PMsySg2EBqw2uj5tKESjwtjgdvr3ENs1faLLtc3Ujjts2PnibsfWB9A",
  "key22": "2D8JUXqH8sGrHbvEoPRPHefzXur7ixmS5dUuJUoCH6wpb8wwkRonKRJPisVVBt3Cj5CTLgmCPJTis4ynmXnFSryg",
  "key23": "2hs4S2xmBzmaoKQo1ub16Boc7H1cYRqwpAHJzXQjowwusBoD3SQTbCj8ZvCsC2kqghL6jTPvdJNuTHcYtSy94YH2",
  "key24": "45Y1gSMEioP1NcEffJgqUw55sjBi5kjqddQ7WP5YS2a7xBf1Md4nk6Jn4dRE3F4497UkZfDQAo4fPTBSf2SCvS8R",
  "key25": "2bY3D8evQvPpF8otrwe31CYu4WJereXei4qqFeFMYu65bUG1UpmTBY75o3o1g5Rj7gXY3uwFJS6M62T5ea84RASD",
  "key26": "52kGEFfdCtCmUyVGcTg37JKzfJumTc9eSZF7j6m3p88dBTqA9gVSUo9fzQv8wojnGmR23ZD6YT1gzSGsJVkQq9pp",
  "key27": "EWpfCfR9jeQZMWG8vrpHZhU9mzpEvHaMRgqHC7Z2RnAXrgqfq3jdZm51CaevmwmizFEKN3S5zKUz1P6XxzicyjL",
  "key28": "2wAj4PwVZxLCA9152LcErAJQa4ekGJUXhRpREC51nLEkR6E99apHstAz4nVrjBWRuPshMtF2wSfGVMWfqG7MJUxn",
  "key29": "4deE78aFYAkhnqFVw8vWiHK5a3vmyQMGbtsJbVWLHRBhqBsHbDrsBTPT1BHudEv7vVG9zrHwkhU9ouKY1LixH5cj",
  "key30": "2JY2VKCtze3sAyAimC4rvTazhMSBtV795fX38sYUJHMx4cYt1jKMxp8t125x61RVEi3pGAv8qW3x4cJKb8VQiTog",
  "key31": "hX9A8Ya3bJg3pAbnNmBCSBKthWU7dp8c5MWwMNLdF2iuJms96YFjiqnP7isFE5EM91FkSKFhcq9kpFY1yDuoz83",
  "key32": "3ZBUPhZ7eJJ9KUH16hQNQqCthLu2cmhyy9nnUuYUxZwXarTum7PUucebKiBkLMWnCPsqZMcCkNPUwVuUZTeBnGqJ",
  "key33": "4GozNvrUwKjKQNEcWmLbWrJGZ9XVkTEgWSNYWnbYU7A26zexKv2zD4tfTeqqiFcem3MfF7PVkJgianuTDQuQbVvh",
  "key34": "2q4UVBE9cKH4q5BgXgvD6mbdvxC9RMd96PiRT8H8t6bey5VfprYBjDUCv8YNuUCgLs2pJshYbunzgZJNBZvpp6kT"
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

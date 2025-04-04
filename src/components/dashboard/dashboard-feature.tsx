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
    "3ZNxwNefnmiGsbGXSkE6hoDxsVmFxPfVbtFkJrJ5Vkq31qCCyzsT9wjNxncp6ssTqjayPg1dXHKj8tSGD43m7sqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229qXviynBpvyYtrCMEyHJ9F1hmSBkPQDhbpnGW1j5AC6L41UU3cgyKpD5s2SWGpANys7fp3Srz92sJuXQbFmKiM",
  "key1": "4Y8YngQ48A3tf6sCwPoqBiK998PdiyyyBFaEMPJJ3zBZ7cYg6DL2puWDVCKERcMWcwqtprRb9YQS85ENRHbCpeB4",
  "key2": "3W1wCQYvnAAyXQT11m7tNfWPe4NkZN2Jt68nbQiWRHrxp7jsYhLdMbQNeWX3uTGmps2jr55ntVCcpqX87r1qVBrf",
  "key3": "48mZvmh3j5e1GJC55rksKicDJtutwu8DqD3k7aEhv8y7wKSUi14Sci8GQ8WS5UbW8uSvT1LWyDUhYTT1hMvoJHR3",
  "key4": "4xfQoi4AXhRyU5zaBB4Ub4hyZDpVu8xba5LNMmi331dbzzAnKqFQKExVNQzRCzAUymgE6hW9iKuG7bPGstSc7G44",
  "key5": "4vryijMAV2mmL1ZdHeyvjRTm83ARj1uxKZsKDWrG8dx8c8XCp9inPhHvAj5RG7yWuRzG7eUkxqys9Wnx9fwhoDHM",
  "key6": "9apv4MvX2jMVhiB62WsymX9Hqu5FNnj5KF23XcXs3yNP97K9gxzGTmr5fkSew3FkJgJ7NbUpAe3VBPwMsjTHBpT",
  "key7": "43HDsyWcSxotqKkEjh5RvrUTnhFvRNyoPmBqf2hit7NMVRn2j5abGaERqkc7hRHw8gLGKTfVSa4UJxtyZA1nEUtH",
  "key8": "hf1xxDY1bGM2qVxCz7EMuAU7TSVaDpxxKzn1hPwna7MDkQ1pNDwswe4UwDArcnsu9dDA5cCEwfmuLc6vsaKn74e",
  "key9": "5YQdGkbgTpEXPrmhQfbRkV3AYFd4AFr4G8SW6sjT5xpUVuSGEchpxNgHZaw1GUf68adTFpMY2ZNa3hkT6pjMJM4T",
  "key10": "4wa88QyS9XFa3LYooir8pPdCQsuv1yB16xWnoEXmewbNu7d5xHWMyPMBz5aiwiM2ZkbACwcNvr3exkBkJQFpivLQ",
  "key11": "2fi8KM1Ah6AQzRB1TtqErrLPqjN2FPYBKCbcpFFKMeTZGrCodcAZa5ej2cqbD1SphrizB6EtonCsjhyg8ntNwaon",
  "key12": "2WDAKM3sqU3hsQaGpTkfJEF9CtphkQM5fM9AkddU342CrCorBrrWgF8JwhSGE7kgVunnYQw9mGQZkd9AZxjQJmuL",
  "key13": "2BSPXiZiMKk6BsRVu2mc1SDUN3V9jtovwQM18sPwcrnfXuo9PTFYMqm5Be6wdzGyWQKFPMuf8LeaDYUKfmMDrfVY",
  "key14": "2CC6V3uYgmVDy2DTQs4DLRx1kPSjtwyHZyZpSKrTFRZMTbB4By9jNdqnCAy1htJynPpoyPvtSCZuiMQ8uNmFYWDN",
  "key15": "4gs9ZabDDiDwrFzBFSPWdNXkbfC6RGvyLPD1P6ZXDvXSTktbB64ZhHXE25MJLk6J8C3ej5rq76m9pQCEU1Zczi1U",
  "key16": "4KMV73Lyz6XnZCjNQFDGznYTJz5u7x636Y8jq1XuMyqk27z9kQTG9iSq9a1p93E77vj6AKpVMVc1PAF5pxLR7Jwn",
  "key17": "3gyhE2MyprFJMBKYUqaKMLA8NWF8Gy8rGhx4n7f7z9mNNfqDrykD4MJLbhRSMJFRn6UTCd1JHsEReYWXK4RByyPJ",
  "key18": "2vg8jK6JjH5kKVwSNzqabWV48N1HMrf5jAViB1YNMU9enu2L2hdhzGn59fTUC2Kxn62SQPjVEDKNWG4PHW4pEhCw",
  "key19": "23M6FsKuWDuPLzxBXGEayAoZku26nQyQuaMXDAsmsZsbsaJY7WdmUeCn2aZM2qFbqSE6qS5M61mAujXuhSXRmfbx",
  "key20": "3iornNodbUoYuYo59Zcz5928BSfYw7dJXx6T6BD4WBB367kRS13rQ7ivBss7tJHW17SNh9YzrLbCSQSaggheDdw7",
  "key21": "cbc3nVfJgHgWPU18CzfszzChneMhgaH3MxhDjStw4navhvqRcNAE6A7XF5KPxAedq7Bid4i9y7XueLmuQriA7rZ",
  "key22": "49dzJw62zSCCSnEKx2VyCVqCBLa3wfMpoTmRVjryK2iJgC5MyaLQQ9BJBgdnULYWHdJ92Uqm4g95ftGofkNkXGe7",
  "key23": "46SSYTXT8LSqyspU2LpNCzWSXQm5ZVVPGRBwA1eNKenuYzF1H4psB7d51ssqKufq6t7BCJTY2FNYjygUvsoCGvAG",
  "key24": "3kfGNJi7j142U6JqzMwXBiD7dGf16xNb42ssFZz82G2G56kxKzv6qWBw9Uus2Pcu25v1uUzinMuk3hatmaT1j6KA",
  "key25": "367zbCfaqx5pkme7ijoFPEhZDpzXu3v5aJxnkK5uFykSowTPHG1x316xKmN6dotj23DXcPdNgTGexr7kNMTwWaHS",
  "key26": "ndgU2XVP7C4UFWNTjVLo4XYiofWYT7JBni7n1YnKvqu65yYX684VqU1DXRzVNkEDTGu8nvL7DgrDuV7hn2uBmAH"
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

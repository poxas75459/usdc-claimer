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
    "5trG1ayUY2gFGHMoLGq3QFXSj1RBKBGf2CgNjaszABZhBZhWwfRrMhhWKbajGDzgDeQgkQpunW5Pj4upTbqqgPas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ao7nUehKUYWH4iwEu5hdCEgRBuaDpkjiXvdfzRzLKPWhET4tMXhn7bLzoqiEmXzJBeFrb9FpYiGApD4CrZbmin",
  "key1": "4TtTGNdc6RriK4K5RDADZFHCCTEXuttMFojf7pQTQE4jv76kBEsBq1WQhsKzu13WPknHQ2FzibnitygMjo5FUbZZ",
  "key2": "2S5ynWph7UyeurpCdqpntbsgLkkRkWN36ZM4mCRTUbgHTaEYw7wTcPc1JRY7DjBzP7FQk29a9rQHNihuLbpLfsyF",
  "key3": "2U24tTSt37J4qcF5FeguFNaXrjoNkWeVxQXqrfPhqYNTXpnrCsrMnMQEaY2QYDAvy1JWua451sTopzbT2knawnKA",
  "key4": "28ycuJxhrx5LbjtFDV17NAT5gsmquzs5gu4yKy6vDE32UrdD1dsy5M36ZKvLuvnKmGuYtfvfK6Nh2i3dkYfck9P2",
  "key5": "4usbYdWoTbSBzfE8Nw3ogPkgVfZVbN2nWkxMfYeFnMzwKmNZgBjovRgJSoSB1PyAzRdYbMYBtWy8SDLXKdFM8RxJ",
  "key6": "qWuVaajq9DagPycQjeetzNDv4iHrR3T4djGa93saPyLw6Kb7g2FvFrjkKyVJiMR5vEu7pLk7MtSJvjs9ZnpCgVg",
  "key7": "42EHkyA1BLpUBc6T48bcpZxUGDuxiRDko5yQELSRxCVDXwYH4SbRR32DExqRvPSvBQ4K8rzrqrsLnuzJp7RWyF5Y",
  "key8": "x6RkQARb1VWrPHTLsjvxX4YNCzs934ef5cd4Yk8NFzXPATXZxnnmYTCvUWACAPxb4ZNBUPkGBrymuMn7bcDs7Zo",
  "key9": "3EMvoQ4zRZJsdAXWYAG1wqo7qb2bZViUm4GmJHZ8Naz7XZmdinsEVee7M4UeXNm2HgitQytMLJu8ruVCo7fp67pz",
  "key10": "4Ha9H5hmi2ux1bQ6sn8LD3TA9V2CjGqD5XFVh7vHJczZqEJG9rH2VsTxwQc5ho9fx49Fk8Tso8bE9HHBtYie9JQq",
  "key11": "4QoiireDbCJxvd9YmiDANjBQkd7KFES3V2dQePQyZe55xtaUgiHupxF9E9iT3RycQkYAAfpgp9bwsZ1n2S5sr6ae",
  "key12": "vLsrAoDc16NMmFucB6EGNkZhUdQXai314LkZjC2btmY1XeQesAsCVRYiRMKbqUATETVxfvrfrZtRXYAzh8Rgfbs",
  "key13": "4La26P6BhK5HDeeAkREKzseLMQf26pj6H9ZPNqyL8u1Mf3rtpBGbBSPARNPkrWUf4KjxkCpyhoXoJiXWa1JrtgyU",
  "key14": "4gWCBdDSDYYbyVJ8bjkMsGGaWu9KgphwaKWqE19vsPfaK7ZaHxrzKoU2B1R22hs5RLSFPNGRuhUVxStkMN4CPb6g",
  "key15": "4cjfQrLWHCE4uAWpJiZtVYMyDq4jTgi9Dk2kButfXC6sD6K4wF2h6dHneaXAvDZKN4zqNRBKx4WzFyJNuoBYA1tQ",
  "key16": "3EaYWbXc3tbi8pNjoMopYmgtEwwH68axBit6mwMJBettSAb7SJcF3vCCtUDsDk21ENhpKZQerVUVPgaNYQbJYrm8",
  "key17": "2gXcduUxeWUNmx1XdwQz3ovJKQHMhCtrnPEiAViy7t2dnN9rkAejwnQugGvzB2t6ZdAULWYk32UnTqw3WWbcyNVQ",
  "key18": "3uwzuTLKjacxVvcDCkugXqf3FeL1zMHChELFLaWG7NAVUTx58c5tiLHQAueWXexabaBLCMDov7gmufAs9AjAeX5b",
  "key19": "2tcDHXZrDUgNB2xrXSUNyZUbPWqJ5cCN3257JiNhims4EhCZeR5WWiCxsqPFYN9hQmV4Nmd8oPuHZua2BdF6JNMz",
  "key20": "4dYH8h1sFHvddxoybcJYVokrRH8c1b7AnuA1o3NMZgcBtkvu95ZTdiAFc2HWAw7zmCtbJvYpgvfrAfZmwFgNqAFZ",
  "key21": "3ixrLKnMiSgwSYC2eLzTUruokGzkNNsTG9jNjBgDBdiN31g1XpFGs8nb9WP7ruzcTS6i1LESTTKyxQ6QrKiPTYhx",
  "key22": "263Ti4gbdGRbMN2fDpTK86iKhYwiD4mfTPEaDnpsWzJhsV4JibpKjSq3w4oFew54evsBkTvw3xYmf5XdfKncH9j5",
  "key23": "4BNdvgMCZPrR6xd2gTWbMdnetUbph1zvdUSFvZFGoChcTyDH7AgsCcB7YCFp2f5FPC2hzMuSWbjpE4KVVuiZAdvk",
  "key24": "3MB9PJGYRQN1xuSc6btCM5s5ze1Zrex5MxJo7SYvmwFgdKtHHZZnUNfga2vXeymXCoGrcMdBUNonyqY2rP7RVNGq"
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

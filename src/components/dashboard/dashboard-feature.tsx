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
    "k3Jp7dQhHQunrYACF3YMXa3wTT6KmtVJc7LQ8kDd2gL3DotpcGbZ818KffysZTeQi3be32MyZoypkfPRpyThjTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3naq76a4YLgFpaETz5FhWBjhyUQbGLiWi9Hm3BXDptV4zkSxSiDZeyq28gwVwFkbGqvhAzW6PnyT7wjvxTRLysr",
  "key1": "4NHZ5mgqvnWBs56bFQyd3zWibsFaPpq6CnaehU9Vr5T1jMZuKLYcqMrzzuL4F2vTRdy7fdeF551gnQvQyJRBi4ab",
  "key2": "e9g5ScHpWquxZCZH1MLVdx6v8LWXkdpmkJmKBXc8iKGXBMhvyJnasFjsnr3vfcco4dAgPCHMh2tnj7kyGKL97Kj",
  "key3": "4C8gEx96bEdxAVkoGGBXTeA3eS7UtXX4HyC97w7GsZR7c89fP89CLX2bq37qgWyVy8fEyw51TCfD4FCnzH72f6ub",
  "key4": "cYTWZZyyxf21rMdE15ZCoHdtbVpTR1MyJtmDYb1o2NJiEcy6ipx2MXHE2S2EhMrxULdTBt39iZBxRKkQSvTCnec",
  "key5": "2mXWdmzKqvagXufsSwFkfL5VHPQRLWDpHKQBWAu4rZVcMxzeVipMEEC17TQ8kjBEhUAx9moC65ZvFwB2UYJF5kvS",
  "key6": "2943yFXfujWmfFM5PuXUT7tapUdpKbxo34s2ThBj8FRhyp5GKo74yTP1p9QiYxttSW4VqK9wwETMoqv4NZPS6rSW",
  "key7": "3nYERogPLcrZYVp1bdtkKfsSe1bwcScEam2R2LQ6TPxA6F1bzRuRYgSm37oyoiEKTZdiFHUwCo5yiheioHPGcKLp",
  "key8": "3LnxuK2396ZQmBjBcqhKjYDmE4hohZGYchFGo4bAegJfJMciztHqg48RisV941GAS6hTHGctgZ6J9GvDqtsfoYLu",
  "key9": "35fnNdTDiLRzJDSuCepFb4ozc1m5JwAeUh4u9pdrs1f2pxmPTffEHWgbucK1NS6kCZB2hMZMjjYh9e2ff4BbTU9S",
  "key10": "4p23Zc1e2cH4pARZDDCuSrmyPV76iFNy2vh7n6fWQrmYenyLPXaf37eSXBxbf6czwEA5bGMRKeYewYVaC3YfStuU",
  "key11": "23JWtAd9gmXkE7T66G6R37u9CmpiJctwAiayX9z6Z4D2xZWcSDtSPk8jMb471nF9fdzDnYME642R2woCmJwC7Ac9",
  "key12": "47xaMRkuJmuJJSsmPtetFq2ZKKiQksejBdfyRouMUQweBK8dLaPadwzyLLA7VaeCf9pHRAHB53whBKCyPoPTrizq",
  "key13": "2suFNZk6cAt4UfzvBpEi2kTsWnZJDxpGaHFDpZzac1Ltd71TCWf42gkx5gTtspy6uSuYJTHEovfZWxtfphMy548t",
  "key14": "efycr7P1Z1vuF8tTY7n7kUJc5CeZ6q6zHp462UboCmb7fAnCm9CwbiTncoFvx5uzhTiyRsShJnQVk9jbqjYYDrB",
  "key15": "37q47QjxMn5YhFnEnP1rvSNvLwY83G7j5hwygvmACREsZmCFr7ACS3mzActfqEsgGvgFwecBHHt2vj6o5LXMaUN9",
  "key16": "3XTbDjByf5VUY6ZpgRXAfbZmXbLpNynoGESRTBRJNvfCKUZcCN6wTbtQdmhNoy3Bt1Y2ZJuERt4CZbG9xEmbLeKP",
  "key17": "catfCaxTpTrHxCTNubxqJs1RtNi2eFYPixdZTWGPxhCPe1KZicLsDJ6YLpGjBxXqKWkvMNgnxLQdAXFosYQHeoo",
  "key18": "23uTJmb64A5aThRKoyh8LQJaHvnC649R7ztA8XZKJxU7VqXY2ABGGg87Uff4UzR9MHQ8H3D6zE1ccCFWwssSdUH3",
  "key19": "5pLgnVvL7HRbRBeDJBXJCPtg91yj2FBiihVNfDiEESKEekrqTB5mxLPWzyd8rCWTxSgggySA8GDbdYxxA7WWraxu",
  "key20": "3MysxUouya2h6MDgdZhiT47pQ7BTMRfoZTeZZ3QXLBevtdFCGD8xSF79UMH5cdf168m61rqPUS57gozMUDHzKgku",
  "key21": "4ViwUZCVF9sg6ZGwKRuhZyCmzuoqSqqJV3hoTwbcaKVnPXPUNo3gGvYk8ZFeCJ5aER7GAbc9CVQBuUtjFxVFUhqh",
  "key22": "48gxbkKdd86PTmJHB6RHnFJEmcE96vwC6Xoaho2mGEWghWhPaBEo3KbX1du61KeMUc5cUXiuGFHMK3JQ1V1UTtMh",
  "key23": "3XP6yCd95wALKCMfVnALWCKXCCXsMEroXmKQDazTtnuXNv3R6MAhkTQgnz5pETm8aauadKzFJjCWp8PoR7f4CiSp",
  "key24": "4b1bFx4B5zmE3ChTrSng2qa5z6PTrvoeRYJC7Ji5vkm3QSDR3A4nDKSTkG95kZGuZDrZesvj8ys1cqY2KpwLNZor",
  "key25": "3Zhj1Z3pexh3NqYCYC2dQc93xAbDsu9RmJdNy2RyPjKN1zyFSkq2SooJ39fwT8PTv7osvtyTNpx8DD5g7UqY3ohd",
  "key26": "2rpB9Pvvwr2TXd7zXAy3fayoEuhWPdz6kLA1ZSDCsJnEBd5JWFFkYMkK2H7Cttyr8hucj6yhumyiJUubcMegwY9i",
  "key27": "4SYRsGpa1p6Sj4PV1jyRMbcxotG6AFUU9bhrFHwH7cSk5rYucjoDH68Fpc3RAVAn1gqYu7T18kQfex8JDa9rAeFt",
  "key28": "4oBTvh8ujUG8fXQkb5Jd4UZaRSNS32ZzpMFRmzwrfGBzVXeNvq7tw6wL9qLDgZKCouUnfPy5Ai7iUjJupRRaUnz4",
  "key29": "2xtwDgK2CtyAkPNdwNSW42EYyyjDq8xLNigTBmtUjfUX5jfjVRA7rdmyaCXxdorNq1mJbnCCnqxKmqSsAUU4uQB",
  "key30": "4VPuB5Bn5wkRyFjTXNWm2QQPZZmSpZWVgz3cDp967uSCwcAujCfEUTk4VRxJzJqXksbnkwT1BMR79s7djixeAfZ1",
  "key31": "3uKFw68GZ1r9WB3yybss8Ru48RHgoycT5xzoe2X6z6atxfkmb3XVFbyW2Pef8QjH7ihcHLEScoHYikjHVkd7geAd"
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

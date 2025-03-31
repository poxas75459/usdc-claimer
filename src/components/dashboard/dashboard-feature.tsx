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
    "9zkdLZZjbVXan1QacL2YJdjavdbNmVb3uce2YKA6FxqV1E6dZnka98DHtL2pFTabN8dT25FfTxtaVBH8DfA8165"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AAK5zCHq1s69qVhd9dKD6DxpnFvj2XUWAzgQdtXyMzq4aNUGZNxVemXqPTDXQz2hrzuF5mXY1dbTtkNvu9WPErC",
  "key1": "5QfEHxFcfVfPwj9asd27TSLfggP2VEWfzSaDH7pshMgrMSpk88SQhfMSMzrD3ZWUiEh3JvM8L8fDHi8jNc6HhnA2",
  "key2": "5YZcpyQM7orTgM8uDcPfeHjRaetwQyQzJvdjm3HNbmwwsQ6yH8r14ATNCE2YyB1KxZebgcc5DAtu2dwwWzQPVHTV",
  "key3": "3ne6JqZuwwtqpMVCBV2KVCjrSsoWWjJ8mo23ei7gDrjqjcVszDvYeTjh7y2XtwgruvAVUSZYJHKx5oZGNAnRRVRh",
  "key4": "5uZHHGH7RbATsfFBbgoufJ6mGm5dFrtHabSncFm91SxkxpruDypLvv4BG3Ex9UWpbQetPZectC58UraaSvZ5RF4S",
  "key5": "3qYR6Dovws8fvmm4949J992EPDk2izr2AeNzBusoE9jPbUiRd98By57Dh8NEzTChzg5LKmmktjphEm4v4whEKzeF",
  "key6": "2pcTgN3VgqdJEjcUTSp63h8ZxkpeW2vE7Zab7Ue1HDW4x39uJKynoFXTNyXajz3KjunhdUvnizzgPKxQBacdkzkY",
  "key7": "3ZDpJ4qcfgfri3z4USEGmrdMCakfBXT4oF5pAoqJCKDYrFnKfYttmbkLezLnm8gQ86W1VXNhKRKhP3nLsrLHJwoV",
  "key8": "3EH81tJocqtGbqkPx1mKQ4JSUQJczTpqs67TknxhcD7YiUnt9zHobp8fmUFpudNj9q5LkKYtX9NRPq9SDizLQF7s",
  "key9": "4By4y1qqHzSK6WBSJ8PJomE3zeBn7kzHKFrJBizSa9zE5wKreazebfPSWJwnJLjVr56ZZZr23rtcfDi8qePVUj8v",
  "key10": "2zAUtz7rxEqqdo2VUzEApeNnPjRYSLvGw4unihq1Z4mZY9uCkEptYr4oKMsg4TuzspT8aZsrq3Nn4K66p94p947k",
  "key11": "3ACoebodgMZwYQ1JncshYTwndXPoHE7uFqiqmjy1EbQfvsUznToGKQBUsBHXnzi4QG5Z1k91HFTNNCDQjcJRpLNT",
  "key12": "rmUUHtP9GEqi4zR9ZMtrVLrcx3E4cbpamzmFs2jKsG26RhNENBKqf7uacdwPQESuxmRbBKeeVo9dt7qVAtJqE45",
  "key13": "3xoPuMwS7FBAtMg2HErmHkaXW8uYfzLDRMMJ4xRhtTqVCPskyvUsuKAhUjBaW3dkohfm8phpDFoiJwhehXU4LPQS",
  "key14": "4isJbJNQKVH84G2sW29AitBrRMjECL3Y3sxJ5ovbf4kiFuHVDYKg5th8gHdkgRECSDg8v6mY54AMLanyme9h3ipm",
  "key15": "5PQjqYEwDbrZLKyUee1T8XUdoTUwhFrj7t26Pgz6RWr1KLqcgPTRWnM3thnyqmrMpT2Vf81Y9tuE3zXQQ5tUCJBj",
  "key16": "3kSMjNUCQhzArWxXhoiaNu1Q8azHyMDr4jCMahtQmrUUwKVPMeh8B53xcvBpxLvxvefNfDZh7r9C1iaZjirZWCxP",
  "key17": "wRuoVGXi6753AvpBonrhZJw5bYtTHoXVwsdaC77aqXoj8xb2f7EjeMJhFejr8a7hhdBVKYjq2xiwF6U3XEVGw1k",
  "key18": "4SvFJsoqM4eppM4WxrzGeQBqCpptegVUdvfHP4WB2wEysNrk5zTE6KD79mLs7TfhW9MRn7Y1Ebm4xtiCP7791Kky",
  "key19": "cs5cNPfDF9sqsdpAVZM2P7SjPsniyEoMH3ehQcuQgFcJRUAdoCbHrAYPJviGMga2sUetgVKpzRFAXpFpXtu45F7",
  "key20": "Pbwr4Q4opJKHgYthZ3gPERBvcFz95zQJpPn94YhTnRjHm46ngXeEqt5zHvw2z5nPyAN112dLYKE9mnF7NXhXmPA",
  "key21": "29TU4QzvrN9ePxbLoKD34EyjafWnPrRX3pz8Eri4m5aCnvA9Zd1uKZSAzgixFCjAFsxbHG8pUaRAHTJy9HDSbLe9",
  "key22": "2nmzgjaRqQ6tiezkqqiEyEv1Q52kPTEhMTFUBz5M4kNRfKASRhEigRKChBFSHT33d3hkXVRGgoVpERvF1s42E4DV",
  "key23": "3TPtvxpWMUPkyd3SgM5JB5ViN4LnJNgNLdDgdExbiFyMy1kWvAVYCgBc3BYRr9C3oLgv5zNYDWFTsFK8sZJCJ3x4",
  "key24": "2YUtbmvTSC7sjtp8a2a86zfDSgDkHDT3dB1cLJSaMsK3BiaDWdFKuZAyRiB6DChKYSWvGvgLgKSQ9fKPkMz7BFYt"
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

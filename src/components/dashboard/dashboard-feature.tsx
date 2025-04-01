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
    "2rUep9HWh21KbEYvHzpFsMYJhJJkwA56ShpjGTo6LJhajfwuyycCpZNZRze31pG1NSXiE5FhAmQZeLBxTWBeNXvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hr1ig6wVo5cH3knjngh8Em9UWEM4TfLrv3kBQJGsjZnTND42evL1W5eNTipqu8vSLXyTVu3QmCiMt1t38wEE5t7",
  "key1": "5KPpfyVZFMs5K4itHWEbbK9KC6LetRXMRsspTM52xSjozqT9RM8mRCN9goKw5yXt45fmmbhSmJiTY2bMrTdL5r6p",
  "key2": "3KxH1fZNk8htnXR1r94sc2qz7Ez7Hi3m7mGLPKRbj1SgvdJqcT3dZvCucCqWm5tkE6pfoJ1N3CBZAirtsScQVsVk",
  "key3": "Sh51gJDNmjoqdwRLQMRJxYZEVTXcTUKGjJrMchtd68q13nJvkdweNvYRcrbrPqhTXrG9uWj7PdA1VCTnfLU5bdE",
  "key4": "4XFtefbzdrksqhktamGwMwMfzbAExUaPfRbRcf64Cjx6KsWMDrCYu7Q5tEadq9Kd5NYWKdBN6hYEKmmzX8vjWVnu",
  "key5": "25KBrQAUxmX5upngXHx9Qf4F91r5WbKAZ76hnWjXdLr7Seati2fv1qRDBXEBGiYCxjrkSvoKnbpEorpuAhbDHVcf",
  "key6": "49GVLK7yPNTjwyH93F2Wi6Ao987yZkiY1Hitr8pjcEuy7CatbTdts2CrRgT9Lp9ME9y7CkFUcXYg6YH2UQfDBdvk",
  "key7": "2rqnUmgTrFebL47txmSNh6Z1EQkae8Riv25H3q1uUbJ7HN7dpWNE6tTPhpt3hkhpDp5GadJtHWatWSDR782qdM2j",
  "key8": "5c7csWdSgQiBhCELP1oeDBoS6VbbhzgrPASJSJeJt6HCfbEC4jM3iiYCMTuzv9HrHTHfY7oH4KniGYaziNeH8LKC",
  "key9": "45nTKY2G4pckyYk4FW5cFbWvgoNRb1hFLy7aMEyAXQvtV8fGXbCxVvZpVe1J19xaN3EuU1TcJ6g6vfF18uBE6RyZ",
  "key10": "36RLjCiRUjy1Ro149LjDvhmxU8PVdnkwxbU9afrEqdFeGkmz574FaEr5Ck3Z2DvWZ15UKhDcjXGLR2ATNRnKkybZ",
  "key11": "2tFmmNqHMR8nv71ZqrYDmodh3bAnMmcQWsGLSYppGNqtDB5rG8wkyBfs4yyLyHWjVVbq7ommwneBWWJ3raf74azF",
  "key12": "5xsykYQGUdQdUDR2ciWBbctvUuyJvoTd9zDAUo5p1m4VdWBhkR6EaT6MBLGN9oYxUKAogvFbzVw3bo7BxkSDTZyb",
  "key13": "5gj2YkQNngKJo3MQHXCX2Uo3kBxRyEzwAcB5M8UesBUsS4tuf7HBkuVRWjFUu4f4QKsCWkzVwNE2YsEPGs7RNpG2",
  "key14": "4psdzpbGgew7ir6NUrheRqJwpixHYJS5oaws6tMj4UhgX5mWyg8vEAJY8mK3RgcQN136ue61Fcw2pvKBF7BNNvUv",
  "key15": "5ymXyEX8NAsMSSwheTHyx56E2fK75ry2EgExoA9dA3X82r9mGj2JNP4bqHs75YJAzkEetF5XAt1J39yFBUvRFkop",
  "key16": "2egK5XA9fTbXFAbQLNWh5uKXhmeduJBTwDJSn9oJL3v2Y59ETaybSbNFaNCYJZMSN9N4m6f6XYtTgWcL1tYeW4V7",
  "key17": "3EmEesW9VPs5RkrBdhEzqeWkoU3SpbJ6bWby8qJCY6nZnUF73HHXPEqZuf2uxTCvkmSmkmhMnTf8Ej9GYvPyZNoT",
  "key18": "3R7mMS8nb7NvEwibcJkhwktdChwM7B31dLnwNr1sGw33Gaqn5NDKaNi5nyz6tAarpp38AGdLRSNtE31eHWgvNJ5M",
  "key19": "4FA4Hkf9P82tduZr6SJfzK2zXtLVUDjpBpxoMgtNZFZLi4Q94yhREK2JcctY4sHP7tq5t5DC9zT29SVxJpBfR2G3",
  "key20": "5NMAhpRw48zkqUqEFF9b3scG9t2rkbq8R8MowyXM6FsxREUCiswBJvDyP4oSbqzqcYrwav4PCJgmU9NyPfpD1nc",
  "key21": "kvcWQU6byT2xzvzSXwjrdxE6vFw3Njwr3LTXnvw5FUk9wVm5PqPeLsDmub7WdDDJJwYa2RUCM4wLMasZbaLs5US",
  "key22": "5Uowc83Fbe1Jybqpa2U9137fNG8j2FM141ywkzyCEkPcf2RrvJ5LQHFB7kCnCUSd7qDR3xpdxcwk27c4JTj1mDku",
  "key23": "4ZDUayrsTKmZVrpVRzaf1AWJryXa6CVitJVyVTg7EtV3HDTn6X29ynybcCRbB757bT19DyojtuR3oaN8ujGnRUSh",
  "key24": "5Trhnnvh1PoVz1fovCnkQkSaXmGmBykbYwgRkujFNo4f7ymJEAaiuKsVnSZW5wCTxW1STz4WkoDAGuGABrTdzMar",
  "key25": "9Kn1KJP9CftXs4Mi97Q6KS6hZ4jtm5kDMAbsAcQmRXZ3CPCsNTyvGZLqKo5GR25LKaaEacKKMimSMgbzq3aZfbU",
  "key26": "3LkbEV6ttDSrNDLxVE3deKmWciydE2QWsnQcA3eoQdK1A42X7H743R3smQpx1pVGtK5P4NjkU5biNLUF8UrT9SKQ",
  "key27": "tApu5ygQwMeEYyxavpMFvp6iyt3iGTKpJ2HeTgrLfreLhNb29vzMeQCTMGra8yhnUqbx7rspsS5bG7PD8oCCcUK",
  "key28": "52yG9hEnk9mRAuTYv41uzGzemMA9SyKaUKuW1FfySHv7jeGp8WjtTmcNiJ4BhQqpuAcbBgxK4KFU7WTZwPYyHBp9"
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

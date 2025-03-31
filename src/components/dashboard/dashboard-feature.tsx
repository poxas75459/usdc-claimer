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
    "26qkSENjj3Cdj42JvitPsQRrrAZERSfFTzuVjKMrkNCp3MAu9mA54WBqSF4K1vchJFBTzkFenciZWXWfnceVhocL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8H1gVMKUJo5BqKVQB8orpPfi4hMFbMtv9xH5v4sbnayzjjf54hDxq6bG8oYFe7177TouJ3VrTatYe7XNzWKLKV",
  "key1": "5d9cNQkeLb84qrdi6PmQuF8NvXu4SSyfmSYhmjeC16kuRR7Yt9TwSrcBYc2WmKH3ZDKHWPNAbABFu15cNmpWhGeT",
  "key2": "gXec9eLgSpdb1KTZedK24HNwW8V2xbfHU5hoBxYzwms6F6zkC5qGcS5xcMfqransDhXPrGdb2F25tLzksSCMyg6",
  "key3": "5tLDHvwUf4WzJdaSoAopnbpEWdjL8n67H6UtZLpACVabfkpUEpKSCBRRAMZby7ZiPb2Egovv7PFvfhRgTaqSyjQT",
  "key4": "2EsMLvbJvGXoeJ4KTgHyzwr7HmGdCYTwDz3MbYat5iNLE5irmzYTL7sLyojdd2gDUhMfittBzGJHCfSnHRjaCPXk",
  "key5": "5TUv5UB9jKxhjEtKaRmBYc6uVo1dmrTZxVHXYKC9Cd71cbaxPx9MaYQsYHZUhFsJyVsCz7YJxLqUEe8BRTBG7Pj6",
  "key6": "3orrMpwrebJsVpPAfDfhkv2EcisQ74qps9Xt6sGz8mkcPNfxm3JiJPA57hh6hdXztSLPW1k4u6WH1sucbySye5Gv",
  "key7": "AgVjV4zSzeJaugPzCby2sC2Z6fHF7Ui1kKdY9nz2jp9y4DDuFcoFJ3Gdacrzk5qaYFbAzirE9ZMW7t6EbiN5GBw",
  "key8": "2QJiGxMznNsjUPRiyrJmNt6yuA4ZeiMeSH35wPkGN6JsbAJxdXDwff1xV38gSH9HSija9hj1QYExTN8HWrMhMmw4",
  "key9": "2GCEboxPRxs6TpZ3sQZxak1XuZUjHx7BFe18SX1DbrxBybTPbhNiwxVNKCBu54KVAenbNtiZNkTRxKP3gb33hdx7",
  "key10": "tCBTQLPrgeiztPhi8zKUZ2X2fi3UufkRt1k3nRoy1T1sHKezZoak4rk2Gu8joRWCoW6Hxhr9ELiUjMUJeaXdDWa",
  "key11": "3PtSvFiQPx9JddWBpaY1U53cmTaTCMkDGDh8PFnG6ADNVKhqaQosXTxZjZz3rTRHEzrEzmxbCjSRVFVLCB32cg6b",
  "key12": "Kb2rbvCdSRb9R7F3NTR2VK9miEiV5C719j3JxqwosgNquk4qN9tacpLvjqLhQL6uuJwRPYSp8EsgiyZJ4Redt2Y",
  "key13": "4nLJr94jqkNjpSMSdQ5dGY2de5Z41kBksQa6Rw7MWnv5QZTSe1v86UsFsPwYQdETWimMkpDvuEunyE6i9oQJpTH3",
  "key14": "5B2iT5W5fnBbZBQVbo4fxn7ZsYz92mQRpVRmvWoZGZDmmmZJg3PJZTke3Q5Vm56SLVzbJyktWwjiTEdNTgSEPKMW",
  "key15": "2NKnMUFd3gMaotD43dcpVp4ZjpjGGkhVTqxT1X1m4o2sGag6YZeFJfZNX9ENWwZW7zMSpR7Mii7x79MXXkvtqenb",
  "key16": "2JpkUUsB12R7rfJZ8hm27Tc9qu83RAmM7c6tzqzJZDzGcscFXF7YmdhAiCYT3H1QWuTQism3uJroq4VKZBDmWETM",
  "key17": "5GKNJhkLcUsb8B5S6ZheeHpQmb2FLgv8iKFJiu8m8vnnQYLvpag9ehCWLErQtZA5rZfcu3YjmCBUB4mfZ2Vg5ppa",
  "key18": "nsvyPzW1PA93136SKTYrqFEeFCgs3g1iuMqh6pKY7uBR7wS5NhRxQa8e7T3vkcTyKAdbJDtZ2LyQKfywQTGEk9n",
  "key19": "2HorsgnueVpGceykvqJ7amp51RCe4bNhwLiPDYukcq64nQJ4T5yjbNzkqi1wKokPqoiSrqTyAyZpCxEDm9QLKmTD",
  "key20": "KvMxn3Lkee9MrWv5PxD2qDcYoNMn3kv7dG5G33QQMKe4Z37qi3CUUY8WsumoazDDXN82chJroeQmVxmMEDB4F4y",
  "key21": "3wEa2WtVPwQS6mXNmwjpZtg6CZabixhxJjDwwq8YtuBrGCiSFLsh7w4HvnsxP5PDrjZuS4U8n1LVnNTVo5bqQ7jy",
  "key22": "4p3BnirgEtD8bBTUpToRfTi59xzeG8nyKfcddF8nsvS8qmeKzoQkv6XFgEimVE7iyWCBCjpiqz5v16WJGKC6fBvU",
  "key23": "62ZhmyDyM7noK16fm5ZcfcvvqbuUpG4Y3bJ1zbG2TaAmC3cMLofDR483Lg9tP3bsytytEeaAzadeSqt4nMybbyPS",
  "key24": "4UL871YjyuMpy1YEgZ4WxBXjnoz1EBZ8qMMHwMm1i9bhEYtjSG3Hd3B9QP5S7kDp3iBjd8CvmsMcw4dWjM4Qdnxf"
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

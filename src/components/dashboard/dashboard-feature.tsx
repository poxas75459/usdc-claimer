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
    "RvyzteSPyoWBqRJH21j6g9HqFJSfDbAWoE6EUnrGYFJpBhS2cgUWugvZpYN1Gz3HonbMhZ2rxCVzvCZcS2SG5wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crDtoJx8Zjw3ZKq5SUuUucXKTGk7YfnuPZ4z1t1tKB6QhrvaanZkyV9qVagFUYBzATesEUhp4NKw2rwGSKoFW7W",
  "key1": "8DMsXVcFzdUq8Bd4Q2fiPWr2bMTw9Rwd3PNCGq6o3g69QFePWedZsrXbLoF57Rvx7WVnjcTG9LsFto1LkngBBSq",
  "key2": "34f5PRkVxtPbZLoHzPBqFP2Vc3KkFdeRoXeKkkME9sg9QirbGfY2m9YBTpwbN7mFPms79TXKwT5b98FZYsUyHZbi",
  "key3": "5vMCXGB3dBAQ3f9huNNbCFzYpHRKtojdeGCCXnai7zGHmhPfB8B8SuFNQGVmazjTnZmDrgZS1azv8uokkx3q8XAN",
  "key4": "4tso2peBLiMQx8Z8rXisNsuBJRV3gm8WhsxwKkVNoHQnuQnXiMXJFoULZ8QkSay3iVd8zizvR8PM3tyQ5rnSyUPE",
  "key5": "fLdcfnfF7vbc85pu9n5GpRoDnkzcEAj1HRuK2mQNsgnHiBJWagwpSitP2K3LtpWy4UGNg4Q6Bizedxx9fmqiTZ4",
  "key6": "2S8VhYnaXfTipjNmRTSfifHKwG7wXdbBf7TF5f467eKa2qrx9XCRgyWZekSsoNGhizt5r9yag9cT5XW4tJPZXX3a",
  "key7": "3QLGrecVbxPkkDiqreFX33ttqhYTVDK1UaZaw9nLRKM8pokUmM7AyFLuC4bQYCnSFCYfxefk4w7nQLPTR7tN6CMZ",
  "key8": "3EivhMkKsXGtX86vP8ptuVLQj8ny3Z89oy9TunV7Xb8nSkqLzkQP35W38drtERomumnGEMsANNzdHNGdtx11fZrt",
  "key9": "4xjPdkpCLqevvDsA2yhgBrDXg5YVwBSEiJxjZqsxkqHkg4i8nGV8ngz4RAsymYu5R4LKJhqGAMJqn2E3tpvGUnMe",
  "key10": "3KHGQtK9NpttdfUcwJSiz4iqgESxRqqecrE7soU4kJxVQqcBSJf4MJFym2avyVPBZZEPAHETWXPiewsafqbGUVpp",
  "key11": "wUjj1zps1mCTiZcPnNFnuWahsikXVWzD6S47eFxWYErg2jxmtdJzfyGieVBXqv4i6bHrH8s7M3KWpKA4Hn2HZ3Z",
  "key12": "34GWqAdFrwLuurqGbdyAUvcfxvXdQ6r4hHkaccwYqA2qJA8qCycuy9miMERv4NX8hAhyxqhPRWRJuN5MxVKe4vEk",
  "key13": "5VUir2KJNE548pt9PX8UJYbx9HjwFtJTvHzVEDr3VRiBuvvrySdvyJ31erWgu2HCsnVg2fnt6biVbLUWNxSPS94z",
  "key14": "629VVKJoj2AFKTnDjj3DVNnx4bC7zJRBw5SLFxg7B8u93FAecxF89dBA7QW9LZkKeAxybm7mdSHpjKWzvTzhVSWi",
  "key15": "4pMKrkLZP2PADxpVFhyM1V1PRyZxYfcjx5GrUuWYZ2zHqcat9wJ54VtsRr84XEEu654M4KuqSK6LqZyQMDiFZ61n",
  "key16": "5gwdgxJCmP9y2MkKgTU85oH5rqgMHxGFmfPvom4PxShGxkvLjfNbj3ecmaz9AzRe4u4PMYSCTTe2n2Na1gYTUkf5",
  "key17": "4rH38cTbghNETdgvSDRnM7xoNWhLBX73mBbEHN8s2TuRg1kjnWVrxqbjvaEb3zK7U39AXQRP8ATLgJNuKFpTE1V",
  "key18": "gwpvFzBvFRwCgYbTH17NP2imYM7vRAuLi4GdEibZMxJUFVoFrqFoBXv75xKEisLakNFmEqjvKydRudBL72aekEY",
  "key19": "4pymxHKAqYRBGjRef6ugVUEFqqsW5AL8mxonNucXA43wsN828Wt1dur2JoMR1FxwJs7cs89k21MpNdCDVo7XR82V",
  "key20": "5wPaz7F66v4AUiL1cWHzW9s6NhM27rfz3eXjjTuWfwERjHUjRh87bgKDvt8Yizt4oaLr22shm5nFhPYtKtri8aeP",
  "key21": "5sF2huB3F2VgihtCrTAn5SvdsfpH84t5kg5H5tJ4r6aY3UVLKZ6i3YzVSnaE4pSuNEqzYmJ26vdbrnvpMtHCFhXQ",
  "key22": "4w7fDkcCpYakxxRjwyQaRPVe2eMnfyKzu29AmixMBbYwFmTUYrNUfErJ7ZNF1ErBWJSseQkfapGb2dkxnnu7tmHy",
  "key23": "6r6qK7VMiSe4n3EKkYeweuitt5UMFuChD7q3MT4X23rkFRbxZfSLVGVuMpvxL3h3yMzizar8YUW5PjrErJBcew4",
  "key24": "5AaX446S9vrznBH618QbBDJ7fVuVNYPZfTYAE2o9RW5ipusRHsy1gMTwT37yNxGuahGeZCVtEdYqZe6hUKmQjXzC",
  "key25": "55y5dcTv3kwVHrcArpL9bog2eoK1G2akqBSV3eAwRgWQrig1VysZYMRizJf6presVLAZNVRRUdx9Sen41r1qaXeC",
  "key26": "2ZfrCAtcJi2sp3i9VYmaxbyjttAZYNacqSpaUEa2uWSbig6kfrc32oD3sPg9V24Dtu9kiSxYb3Ttbo17YyXrQadC"
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

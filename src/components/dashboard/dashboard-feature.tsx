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
    "4HGEDUmEMvXqMvP9XyKrNMZZvpmFjHkVwPvkvVVGcbrxyrnTyXkrrQtXiaz4aW4NSv8ubPFR8TjNgTkLZJZWhduo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEFDCTw7LiFF1kVzW6QWsFWDqAfwJfuUazB2HTGqQR5yuoy2uUHT2exGgKYCGTfLdex3pEvRP5ZXCEboQtoPV7d",
  "key1": "487Kxsvmh44ywrLduDQuRVeFKGjdLk64kTEFTi1BQ364as1Rsr2XyqzuqZcFXWb85uRuUPiPmRXUgL1pqnawH8u6",
  "key2": "4xiBptzn6zLnUPy6mzYvg2pP4Ci3Lo96BjzD1xEBfqQVeycV4asGhPXfyh2jzfUfyppXpPbVNf2M9vsFpo95vraq",
  "key3": "Ag6tAjpNX95wDzgR65Zy6gSyD16nh1XGNnfMnDxN3y9nBJocC44yMSWoBfs48Gv5wacs3hRoRpef14rwijTVhwj",
  "key4": "4NTZcWw7RQvcqVuoLcECuA5VjCtAtn5GQ4mp6k4T5XmXmHgSZVk3sSUCswK6LsL6MDdGgvqi2FT2GyjwF4yvRqc5",
  "key5": "2mf2YCWeYmf9N99XXSk3LEBpQbrUs9tGbCSq3HoLjqf5ESQkgbSb1iCz94xjJdtqjRwR4z5PF4otq8DXAbdJTtrS",
  "key6": "54gMUs1LQFLbgSKUUo5ozfCVp7dNAedRBdcUcMbyPAaiLWCpovrb84ZRWc3F3sg19MXXXxnPw7kgtvtFRj9iMqRt",
  "key7": "4mEw9h7MGW51CE6Bf5bfndLsm6cuY1WejHnHszxMRaB56S7GyHwqBgT5Y1AGjtbZNrfxVRPaeGKoK2Pcgpggx3d6",
  "key8": "TtMc7SjK1HCthbpFrBYSwg21vKPVAURUJZEhh3PbVSzbgkLmEDNinkBisX1fLVZH5HYMfbFkbMZyC9CnnLmVCux",
  "key9": "64m66c6mCcxPuMw6C7NfC39UtSSnjmRe9SjQB1U3UX5wVgKeSRiLMngHEcSVfLa9QSQPhMp7uRHYrWioLTvppNE2",
  "key10": "4TZ4ysfMdRrTJJvmVACBKQfLttYGsaT6k8aGqpCV9V9hzCiJdKECiXXwSByxouj4Mn672QoSkJvvxrvkv6o1h4sU",
  "key11": "3EPUAUWiohAz78fMysVBu7fHffyeS8DUfvP7y57sm6NHYUMtpLezKkwoCcbjbYmmtzyU9nw2ZyYFJFx8FoXDs1Fj",
  "key12": "4LMtc4GnWkTrfxMphikwrmXFyigZ3JgRNaXWwDQxApaZfM6t3rcDSgk9uzKXMBpdppRLUMenbJYVBrpbFaC2W2fX",
  "key13": "3gVryTusDuAN6nidR3bbEDjHXYjt99b3WFvt1X8xw3xC735tCPE8wTUfh7nkkJ5fHfe3UWyjMmhzXoQMnVmkcTYQ",
  "key14": "2z578zCkHco12VnkLJDCr9GDKzwQNFWPNX36BiDtLy7gxSk4bso4Zvwn6Z7gA1opMfmxzpaH3hzkwR9TFxT7Ai5y",
  "key15": "5U29pZS5vrNPj9KQCmb1QnhYPXCYp9H7ozpSXtfk8vJ4qbYerMtu15aszy1nF2HbrZ7Uj7t7cDxXwRQYV6CBbQcx",
  "key16": "2qE4o3kV2X8FVasbhXF2iKYrbxMTrGGLbjS5xVmU5nhWfzbUYrhQrm7xVPXEqpLVN8JAL4dD3FcMmRxXrH2rh5kC",
  "key17": "242De9mBLKjU4cutpE4PHUm2n2emjBFNswd3U48p7yDsx5SRTxNkmGDFEmXjzJxBkJPEL8Lbn82BHLXKrS4DEz6v",
  "key18": "3NWZZ4SBPoC91GUigQQUTQiWcvRccegVsZn5YaXBxej2MGT9gG5K9NejcDg9TheVAGZ9vHUoVoa9pU8W3WH6can6",
  "key19": "4mC4NqizgKVyGRDGj3ZSfvmnXvk9VR21oNRnsZoM9NsosruEV9or5LJqJsfELMud6biq7EUs6odHJP98NEmzv3Cy",
  "key20": "5MkDYN1MPZbT9PxUaGRsKGNqvFZ9bsryw9EX8AP4AJdMiiiBdLGYtfkUmZTuzRTdoREmdMos3Sm17hXwquACrmH7",
  "key21": "3aTu21hyifpf4R4ZasYygb36WX3gBJ72ygvYbMV2i6YY1s4yq6hb1BLN1BW98C5UJzsQsMCYRVcbXYUKCpLWj4T1",
  "key22": "3cuHWo5G4GtU1yhq1xC7C3FqX7ANJa9UabDirFTiQzDfZgtpXKuaGzgk6bjHEB2C1DyMgq1Cq1kafbuMWfuCGbkR",
  "key23": "5c6FbTCqook5ZaW6iNDPTHwrQEM9D8ecdGumtFtjUdg99qwm4xXgxbKrHYBwFtc6N6itonMWDuJro9p7N4MeyfhA",
  "key24": "rYSuqy3bk4XpeCjCE8PjFgWNh7DChYcn3hbt3HufBeCG62KLp1DSb2bWz5KtgQa498utg9AfHU3tVmotXsdHSBA",
  "key25": "3q5ETWtxbvjv3dLMKU5cVaDighiFphYYYwNw3YhLE3fgNPnpURHwnri2mevZqpqEakrkZdt5a7tNZW51f5SsvBrD",
  "key26": "2JNJnQrP3ugfZEepEVi1sPg5TKr92oHLEcBsY9ua4AguYdfMgmpvqo7gTAjUtETEwp8MduNt4KV6k9Ft9mSh8YFg",
  "key27": "4LFnDKVU4Nfq9hXBMQswKjWUFsi2Myq6burmwHd5qJb3CT3RTS5ohj7kvJ6YrxjwXbmYBBdbrmjy8ktYCAh4yrAE"
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

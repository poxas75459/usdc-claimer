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
    "2khfd6nK1ShGLp5ehV8suowetBPPrF9euv6jJPeX1jtcfBcKzaUQGgSekdHHSPWqZpXaWzRHPwLvLhhGWRumfLAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Huze7kYCQkMv7BgjbaQVsGfYLS1SyqVBmwRaEjQpDyKCUmQmKscL5PyrZiknEi4ALvN8QRwAjNf5xptbMS4CwS4",
  "key1": "3YuAq9B7jrwbmYJWif6GaiTYJCjFCA8PSa6C4HFr9MzEftGSsLbhcJSDP28TwCQixyCKLSanU59MVnHv28Rarp9F",
  "key2": "3QxCaZLUkGqTjxqpcekBorC5YBn5ozcKQgHifzkTCHtFs4qxxxsxGoNYhDjmLg12efggD5Rvi9kvsTwr5Ksx9FKx",
  "key3": "4FcW4yzZZToE18vX3FaSuvkH9jkQiCSFevtv2Z2aX14VjVaNp2yn9vZjzg68xnZy4GbMfaD6Us8mgDcD7xEy9kPt",
  "key4": "3txRadBiuq4ygSmKJjonK7VphtA9thZK9qHe8bgC9ARNnJ2GCofjbVmqz1ZRXfRv5gpu4GTuTsbEfe4UVbMMbZUs",
  "key5": "qRpSimAcq1SNDCYof2XZxNNK8twdQxmbDog9MciHwUigu5JJjPDDqezNj9X1BHsFJ6FNsVChRVDWJA3GJvxvZms",
  "key6": "5dynog2dn8uZwyBUCsDQDNjDubYXLx18nf9epYc3i8W7jeaCBD2F5LodaQA5GC6hnaT67sbSuV3V3ipbn2iXExBG",
  "key7": "4YNDVB8W4P1eWusJUJFePnFmW9h11V3eUDFetZ9suxVpJ3H7FfjxEMugq83pVQZJhoFjjQr6QjBJHJcacadam61H",
  "key8": "3W4tNXepLgu1L3GDzVcQTKVzSugGZLQhBMR47EDVNbDmr7NVg8GNrzT7jXYXr2G9QTZPuy81GQZiCe58D5GMZMor",
  "key9": "36uCKLZZDh6zqWFygttHYGQTN8vtxWVucTLDAG9CHxNVeiDrHug7veeEE8EnKbJwkE9iaCqSA6jzHbbQnWTuzrAs",
  "key10": "5YUk4811HCTQcHX3j5wrDEQqAQRsBUHeJkUtJTUx4httwEweWq63iPbTwzHBbA4pRFnneyFpw33VEdEezhj56E8j",
  "key11": "37m6Mr6WozN88p6TDdGop3wSFkdWPZ5ir925ji3FET4Ynk3gNyZABmM96mWN9RdLrs1vKu4TByzRPkHba9GTDKdd",
  "key12": "4wuWncX2zFyg7XbcYpTFD9m3fGRHe96y7yjwMVkdjgLjEKwYp1VavTyjQnCkzPPCTCDq123bow7wksnh5TjTVNSu",
  "key13": "2ZyYzYbcKpEDoNYYXsd8JrF7K74Ramhi1Uo31keYUyvG9XgASkEU8VBp7omUPo5pe9NoonyH5NsLbsPbxMsLepfs",
  "key14": "2sMPypvHA9yGJ6LPD59zZpakP9tVB6sfScPxtzuss4pPc5ntUP1kaiksU9LtzckqS4wzDMPRKk2ePFJgqnRBMWe4",
  "key15": "2ZvG2zD9PquWr4UkFRLEiuKYoMFXFv4qVC76jg7p4d9pr6DWtwH5LHoPpCEmZvg6vUgrxbRuwuLhBmv9opyJWPCy",
  "key16": "3AaQC5CVthmiaUSMM6QL1C2CK6khtPodpTKc81a67KEZnsWbTmw3bVz2esqhvLBK96zJ7oHny76kx9uCCHDsJPu5",
  "key17": "5FVA72bM4Sn1NTryrAY2cVUeZ4dD5ErL28WaDFihwzSd4EuHDkiQ6EDzNEXRurC2NXQdwHxRFGV5wnSsPovKiqD4",
  "key18": "5GrQnyimXs1YmLKDQu7fPfucBCDHLKcaK4kPr1nDj3Bxed7Qtm8n3e5bhBuEyAWZ37oNfikW9yv4T5UJPH59Ki21",
  "key19": "4gs7pJXCCKDUXYpdJGW2feUDb5YKaDLTqA4VPDczYfMjACQawwYpxiaZrxe6t5TqZMzvDimjAvx8PrShww4d9pUz",
  "key20": "3zHtRE38iCYJ65JwVREEPWwivXJRH9bB2Z25VGi9iyef6URbByPgnoQzjCowiBFMVjatseD3bemXsFNHxayvzQMa",
  "key21": "f9P9SxVXuGVvj4SZNPGLArHhC41f4NQHuQ9FsS17vBZuEDHw6FGY8sdtACZRLCv86iKYAV9wSQFufoLL2B5AW2M",
  "key22": "2r23srHUPn9mGEFPWtx62WYEBVqcZBwNyzCsM5n2WdNM8VfPbPtofzLbeXny1StnCvppPq4Xq6EzQmaQE5VAqQjs",
  "key23": "5GzjuCsZqYSZ54gmP8rLZDy1UH679u7CawZRZgNvTHsXZa3hDY5FSywZhXtpRNcjnrVgU4UPMGszH6vA6zXq77oH",
  "key24": "4WhmmMFurTnp7BUHg3QoEVZd4129Rb9v3jBELZj1AoeBeQ9EXgHz6aua2pRrdHekRvYgePQhqyTnPqp3BHUumJKj",
  "key25": "Pzs233Yg8qhnAqzJPRM5aM7nkyLZqYpkrwVtzKGLFDSKsv7foPDt8r8dBETGjBNAB4MPvLFgsNVqCjmW27HfFXE",
  "key26": "WGu9xY7Uv5GDyR9KZfxscDBq9bVnEgcD3QVxjEsGkWCZSnXheq7HMk7v6uiGnr51x184E1hERyKP1HzuQVwprFZ",
  "key27": "67VtBcE5Ktqdji5VwX5qg3ASXq79DuNcWg8ZP6uCVrjhnno1xu9u4VvyBn3LjPuQJp7bn9Z7Am1rN8RibhaoPBXW",
  "key28": "2WbNHHurjeC3ViN3jYswUL5LuXftj8qkbaPdF1jWeQio8enqgJZN4oBH5p7M7DsDy27XmEzgBpVE4MFkth1AwMWP",
  "key29": "38vZ6CoRNY2Pb9BnYiUCCkWXjYqXNvxCqttwYyp4rj4953MCJnWcC3cz61ogFTR4aKi4Dhw1ntJ4YfyHBu44KiEp"
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

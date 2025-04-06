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
    "2GJZSVXXr4GdkCM1eZ7pFQr1iFNGBMDgpoCpCNrvUxdbYUc4ESCRqjDbAc3CYHV4c2FpuVspoQDfe7pYi1EY3rPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5mVhTaCghorwjbihgq4Wn8RFJdL58mtsPXmbqQCCPCdqCHxT2s4uhL3n1tFspqEGJx5YwHYweotVDBEiZkvoMP",
  "key1": "2FN6VdapyBmWdiKhqfRjMATQ4WPU66pAYTKpZFEZYBBo56DSwSxxMQk6xNu9MEWj5ZgzhLkMiigYEsgpC7gaWy56",
  "key2": "3UMagw17Pkw1eyvKLjgXNv6ZYsjhE7M1BwRwFzRZ7FAzdeiimK4gUmJTrYstgdVizZo9FqfNuMJs7rzvyRPwLpSP",
  "key3": "pdEqMhtQrQobLNn9pY9iVN6Vd6j3ZBg3NwR9thtz1ZcscrpHboQHFdxNaidKbAUQLqRwxpZDUxvAWgM9EnD5AM3",
  "key4": "5s4QGCWh7jZyqCmJK5nXjr4KV9ZowfuwoxjkFknfrYqLbHoKwuuGc4yeDJZhVbwpn2kAz6ZnxtGoN8n5NwdwGNaX",
  "key5": "5UHBxW7MA3VGw4UtCXnSoseAHiRzUkXGULrsNEihQHrKXKX7CuBhkUgifgDg7YY48ckubuNywriVSoDp42KQR6az",
  "key6": "65Xk92oUySuboEdjpr9uNRMSJ3R5Y6pBdFdxm4JKM4LNSF4MNp8LYkLgmvWVHytt68HeqZEpu9DevAaa74cnYBia",
  "key7": "3vtBqbAKGMn4Sa9cyKgEV6mMqHSzFpWxEhAdP5dXKqa92aaucfXVMt4qizGZuGwCkvTPykDbFreWuAGr68Goa3Tr",
  "key8": "5e2zCUtEd7hAafnyqFsdsA33fgkdA2H49BoLs3VAuWCFMYMhYomniPqaEcoyXC3RE3xgvgMrzTwYLJLPeguRRNjm",
  "key9": "dGqtNP9N9i2up3dDodaFyR4hYkRmAB9kHsJziR2p4TM5MR8g8ZLnKJQV8vpsPmdjRvqG8zXjktAyogztpwpaYrb",
  "key10": "5c4WA8PQdejPUfrFK7mhTeK9tBqv1oEDgBvRdFRjn39tqEc4SvsGE97if3UzNx6FFvDg8EkTP79fKdu8SRSxhicA",
  "key11": "2hQUtCyqRs8eMDt8iYVvHiRLVxurLfrpRfzCHQsBuG99P2FCGyAb9XTiBRhQmRZ68wEjrA1u7SVoYeAkUW3iF6kR",
  "key12": "4LkkQSwj837VjWpW64XucYDWs7meFwqvr9xwyDPKu6KxHnT1aMAymENMMuUD4AVTkbcfmvUrrHfHGkHGCdWAPVyT",
  "key13": "4fTnw3jiYKz7qaRcgC1B7jsLqg6r8iuYY14BCpVRTEwHgcfH13ysH39e541EGW5KT9bRBjZzsYnMKgyfnVBnN3uF",
  "key14": "gehUnvgzsvabBV8GTVtUv4FFR1Xep1re4iSqtrnMRnf9UU4zf32dmhaffeBqJhc7x54NA75EXx5RNcfANLyBvUm",
  "key15": "4XEMvtN2i7HKSdTH9hijnkdKJw4sfB1pNSRRjCAo7nN1oZ3SczLKRFDJqKHTeRUPuCvdkSjW93thPCBSLVjwVp5T",
  "key16": "2nN2r4v7t2BJfsDGaCFRaJXdjyg9zpkrJHcbBj1Wprxb5p2zNaiuereADLRhp1bmWXHoAHp8C1d8LuDYKyc1ZKq",
  "key17": "5nPJ7Bqqpibkeq26TKtUpWRPCQiJRJHcPkDj8B1p2u8v7k3mfrB4t856rpU6T1W7LD66DMKQEPcrph9HWdiJjCV4",
  "key18": "2xDWwxsCQi8a7oHXNGJemEfMiK8AjCEFABCAasFD9mZdk3GKWohea1qVUux7D9hgTJoMumsg4GUZ6nBEQLpmaDzz",
  "key19": "CSrazr5L7AxeDHB4tTkfVYSTi83hgGLwVpjiGayPJ2NdqYY6ifxwybxsXXR8UQwyByCW1dJFLu4t3hHQnqi89Zt",
  "key20": "6Z592S44tBGKEiKG8zGBiyQsk9Vk6rqcmMSQ9ofH794Bdz8BfwVCZdSjfjDafFtEeNvTdcVsDyJb6ymduv3EAVA",
  "key21": "5eCULTTA9YAzMutVx4bqwNDVXFJPnvpnRQSccMMA3LWNSVFHAKeV1FudWZuWEepgDHecs42E8jMBKPKFdaM4nmG3",
  "key22": "3jKTM4Y8Nzbrs7eK9ju1PKfrhNSBP9kQMrUvvCkV68rbzmA71AjUWRMqYc37pVeQgUniweqgaDeYt2fb7vJakZX2",
  "key23": "632Aaf2gLmvccfQYCQuL1WcjTQ5PsW9Y3v4UcaLiV8Exaz9rXduFGr2gyj4iqHZjPYrAkgHD6wDV2tm5A1YoBJX4",
  "key24": "4hECivySEU5PYKXkpkaaJMNKBLVdP73eAiLdV5qeZo5friryvGSsVob1qBupENa71UsHZNsbQFjgFh28WPsha4Hf",
  "key25": "3L2mU8W8aFumyK3pVFkGmjfczXaKJaghPgsW7aN1GNQ8bXWjaM8gxuJjSPfGhC1P5RJcMkB18moCVJjNXZnnV2Sp",
  "key26": "61NvQ3Q6uw9NYRrprpgeBF6soGfT4SrvgYQRGEv6NCd7rnZ4xFMLiLct9oksPtZ39fTteHYLqUPsqEQPSDpdd8ap",
  "key27": "5XZ4By8pBVocvnQJhekypPFkhaXL46hYaBzqpcuah7A6pGq3ys83nkAqFEfVMsyz9kfDr62bJsgmCpuMZqDeRKex"
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

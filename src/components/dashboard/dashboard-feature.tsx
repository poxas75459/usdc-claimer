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
    "2sffiL9811K5mtXHBiYQGbkQNYS9rLk27VpqyTpMxoypucNf7ZuWJWfW52kov394jsuDheN1nsEbeL1yGvSUa4zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aPXcstAeVWcAdiKvxqwY6VKvq4cm6eaL6KBmpjt6YfHuCiJxmmixFLjW3duDkyCfMuHAVcGxAsovdq9NgiJqq37",
  "key1": "5PXxMRpBaJa4UJako3aS7QFyBFheLaPgntp1CMt8qCzn9EGBevWqLFG1KtRwAnDwDEMZSyfTV8bL8TfrTH55P1GA",
  "key2": "5og6k7amU3qyHnVdG9p57DEWVoxo15QbKQuMTJhcweiMhSykze72NYmXQx48NFXi7oeyStjB321GUYAbTZ1pKzhX",
  "key3": "3QuKZ1ivK32tQuLxBPaxFnTkaffSyiu6ssT3gVWeSP4xt7oQXA535mtgs89LAQ2kbTYvfzpJz3hME7TRz2hCyvqG",
  "key4": "53dSxcCrgX3245Gv7nBcW2BJGv1N8pDX47smQVnqEQvytY1kgaLnbufwHjQGz28y5uivPTya3sd8ckU8aGtzMCm3",
  "key5": "5ye2o96Z7qUoRAW1mN2jF64iavDHvbMs4PZMXaKvnf6v9ATyLc96H58Rnm5e2KuX7i8zhQJWqYwB8wqfW2R7gexB",
  "key6": "32ukYKW6vX7ePPHUtw3gVHfFukzpr58DGQ2HHP4kwqJH9KTNNABtWHWJvMBeFaJ2UYLJ4pzka4yqRfKUTktN3NVU",
  "key7": "36ZQPUu2zMjzAVUdHNyYc6nKwBYQt6ptFP5kA2aHHKR2svgV43XdzZXHkrF939CC6bFiKNFZu2kwbtm8wfELQZWZ",
  "key8": "DdKGQwzBTbEk2n6vEBsubXFiFHRzLA3zgjhaEsKanaKhsb5n2e8rJ6V9SurMyHAnMJQgzJBzoWgqgyCFb5KB4D5",
  "key9": "37UgRQ8hYnwZnnVKJ3vF33GVckDyZo3kWvH8ztMG2kEN8FPFjTmfgQesaWziNiroBz59MkqaZDx12G9nH7DovtXB",
  "key10": "3ZENHY2gjtQXQktPSbCuApSKDP6UtnKm3hkqryRY4Yn5WQhBCfcz35KNZhEt6e3XjrVvNqm4w8pw8qczsShKBo5H",
  "key11": "3imNBUEP1FjSwPwGNmuk8eyjEdi5MeBVKPw62KxNw4TwrWByS5b6RMpip355iJeosQ9dzKb9Ue1s7gs6mmeZJ1Qr",
  "key12": "3devj3HH6cAeHKQB83KiTSNz33kqzz5hTJEUs31SGj3Nm3fEqbwv2xkaVaXW5wLDpkRdRd5RoU5Becco1RxDjcDd",
  "key13": "39SHy51c2yDz68uWzon5czkq33Nz4P5euwAKEWfvkh3Pg8aw2pftaDX5WWu6egDYdTgsmsp8Bfh7rCTKbAwmZt99",
  "key14": "2nJgP2WHAbCQU2GGeaekNh2MwrzyQm4PDzkZHuWWetYCwUbJaDvALPVmRPRSdPhtqt7tbQND53xcRho4MAtDndVn",
  "key15": "4MQD46MtnGcc2HBRBvhJS2vMDSnAazmnfdUXeCnGjkgkWCekpPn2PBNTbHxtJ52rzBhmjGasY9fkQ7r8FC1nqix2",
  "key16": "3pXS3URdnVgetpkBi57BBYL4xby7qGReUCsGWFQzJzP9dU8ov4SdEz2ivtAxr52FdkjMhyA7voiWm5Kwozqsi3ES",
  "key17": "66T871XZctQV8jxHHfzgxP4tSHzGQU47i3ohEcTt6GTjv6DPHXhHgwoLmKATx58M9AnNddYzfRKPuD9Z5bACtUsV",
  "key18": "5iRj5L2iaumzMzsyMbk8735DavZFkXbWfYC36KJmcWqG44G4CnSZDuYLCoG9chX3j6EHFR2qmnj98vH5AKyU2pb3",
  "key19": "Lq6jJxRu2EsYnnap6Dq9ygXtRRQbYemiQ23Cm6kcL1DMd2KiCjm21qLvSurtAxAxMdYfM5NQ1vk7MGKFWM1Cwtf",
  "key20": "3ZDxnbr2MS424DqLvs6VZkze2UbmCC797CafwysLyJ3eDL8o1BjNmwPsYpyrD88PtUmq2ZUmQPtwFQtw1otkyn5J",
  "key21": "63VfWBCDC7UFcHuYYnBFM4j1K4vdM2hD7qU3qGxybRuaaRjtLsdTBse2K1WNQLzT9fPok6QEeEuiFphRNonXVK4o",
  "key22": "2TvWx8Ezj8XddGPjm1pEDVvVBiYwnNVa6yrkoHZFYwNaFSco92BQa3Xsn1up2Rw37Ur1Bh2rDA9iy6kzcrRb1hb6",
  "key23": "3PLn4iMxecTKcz8kjR18cmQmjYGEuY3f7hQuSpDLwgihMWj9PFLdJgU68NDrzrKZUSYCaBuRoQ328q8WZdTJgtY1",
  "key24": "5c3tia5i7HBSH1iw4ooRMt8XsMUW6RF8PGYrSbLByoSbqLgDaTnc6Y8sos9tnBFLTq5wJfyTkRrekWQSerGuv7RZ",
  "key25": "7MGAhvBG7UtJNCVPGPw56CVRw7WLXnyYDo7AGhCjSEMzkWN3US3wVz7FzVii6EqhTnEKgVGkKjM6PJshaC1Ab1P",
  "key26": "4MZWqcFfrvJTHt265QyKX4rEckQkzUvvWYzpKF9EcwmNUg93arSFp3fPaNm51YNa9fhyzLLr5EbUCmyozeYMYpyY",
  "key27": "4cQn9u2bxbQLrMTnZtXqQNMG19x9YmB2F6MPrtTnSkTPGiCqqi8Jjo99qFvbGaZ2bJReE7qvJeKHnfP8ivcg4hdo"
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

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
    "2GDHydTqtS4gtRm24qg6CpjQdVRHKRat97mQMN84DJyg3hD7tjfqKCRvwuZqguoMNCamnsHgodSihCBEDy4wSdnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QiGqWZjjMW3583kHDr8M1N5VcrEoT6tR63dgoGKUck5qxBw6GoyZRBGXapdcf85xDDSd6CEBRswVh2vPNcGJGQB",
  "key1": "2W14pk1dQcJNuAsJt5R9CyDL1crMmrXdDF3fhNSgNo1xw4Hi41Z4F3RzrVJh31vvownzpLTbKwd8kRdtrAk4WRcP",
  "key2": "3aaJBoAbTQq2xpuHm6E3aMftBM34V8p6E6x81JgmPchkrQVkyk2kfSFikJuVWUvQdNs98MZST3bJsGv4sXRyjNKC",
  "key3": "4HCtNGVFxNYcFaWMPVCBodt9oXpyq9nhZEPmNuStvpvYmnAZk2BYVFK27fmxMfi3Gu31kdhrt1euTTy643kR3R6P",
  "key4": "sjyAU2W2mSdKyYPsyWAm5tXk6pxmbFf5JmvvyPVeCyPRCFTpeQXxuYFtkBdMRsVLJaCSWbZWMnpwg19YLhEUEyP",
  "key5": "9qHqXcsYDdwiiH95rhvRNjGj2wiLmewrqUygg4fKK82Sjb2EmVfwErAke2M38jSLQQbdP2U6v8DwXgw1pqYUwX6",
  "key6": "2XSAA2SKSRjQ3yp4hBzokHK2y2C5iuCeXN6sg3kJLJQ2dATfgAPuMUidk9RjQJx6pHDjCoM6eissr1ZcxGo9Dwb6",
  "key7": "5wqyuwwYUMc36njKDDD7rFLZvQw7ZvjToNgdLPsaTz8iNjsXrp3keirCvUBvrPBSfd8WXp3LWqPrRayWLmtYqmNp",
  "key8": "4g9QQUSCBGvdr5yUTh6WsLnesQ97pgTc7Ud6d5BMGcZrsytBaPys1hhsaxKxdmNUaUynJyjZEinweRThPBsr4NKF",
  "key9": "3NEo1Ahfuxmaqvd6vG1hsPAHsEqeHZphJZhKeer575VrfvkrzKbJAqPxM8Fp2eKmCzKVSGb5tUk4NGyQ7vZDL8Jk",
  "key10": "5Sum2kiboWcFamaDh7HG38n4FsUJr3hzvyyhpoESgndZg42TxoyU5vKn8QgTGW6HvE6PAxcjwfwvXDUBaw3DNyQz",
  "key11": "5kcwPTtDDGKPzX9wpFwRrXQr75mhMt8B3FVQDRGqVa6VY2BQPw5MVb4taKWVoaH3amQHee9WfbwDYspVbMS8xVsZ",
  "key12": "3VLGR1nDY4XwmfbNWhFx2PDnxBrZeKJg6WQ4pPMhHs3BVLZQYfNih5bcW72S3bqmoT4HUwQXnUDHsbXSPmVqxC4x",
  "key13": "3KD6bqiQZ91nXQWhqnr2j1o4S4uGKS9iVgSqQvCqzSnirYDY3Hba9Ve5fv9fjs3kt3yvnD8EsZ3aUCuHLvbxLGee",
  "key14": "xJJuFCMsFno9D9MMpYbeAsTvVTAb8Yo1uyu48nfgftT1ZscBiFGKcWYWhxrmedKomp52PZXSmesVD2jPVacsMp1",
  "key15": "28iFfEa6wNzpBwM272M5CvqTc2V595xYxqTWCBUnYD6AyNCqHWM3wt1WuvEs4BUo8JtKwZjdXCZUndjBBiGmTtyJ",
  "key16": "5Qb7V5eHtsCL58AKVaqmshqqmue6XQcdd2PeALK1ZN7Wj6aCfpZ7secijqBcZaems5gWH3F2ELDTqEVZ1mVcyqh8",
  "key17": "3fe1A41UiJyyuVNcZJnzKpfsSXQC2KXwJ9u8Sq2soS3ZKYXDhxSkeUHV9HvvwjYhZReANLn7t6RqFMCbxkjScRuB",
  "key18": "A57V3VK47PtKJrdLD2UnDfaVuQd2q11Tqz9xBiZA5YWTqsjo9akkamaAQ1MXWRMT92s2XF7Pno6WN66BrhntWKj",
  "key19": "t1ZtqiPtmcotAfLN26qWc9591L93D4jtcTxsGF82KyteVuWaHeRxotcwoW3N9skKTs92BbtjuiKK38Yd9frmixv",
  "key20": "5Ayzad5ooyRPmy17dJ2jAV5aELEXEEmCcka66Cz8R8aQfqrp1xVGukktqNSjNHbGZDjTARAo5gNXV9cKZrFGBCoy",
  "key21": "gqDKPfXpJzJRfv7Xav5JMB6RHPUPoNg1S4VrviBKnDgs3xGERvvoVqSzFXDDtesowchGCP9Q7zcc4Y3JujmW3wz",
  "key22": "26PzMSzGG5Da3xsgNnVbCChqFx5tP968RdNwnuMT9BjGd4kkEBZzUKoXmm2gt1Ad5EawWaJ6zzTu5rmXngSK9ACR",
  "key23": "2doGjk1fkdLuQU8dEXoTYFm8ttcEdh7LiUUxageXRAhWgRakq4vNWLMZsFU64ZWuEygY5C9BDSF7fNEYWf3Z684v",
  "key24": "5sXXQhCmmgdKaPCbUfKfqWwWNJhVprALYVT12gBYhRtZdF7wKP2hKFdkbyojt9VUQLFLYHuHy4mJHdVV8qvPUiuR",
  "key25": "5TJPXuky78BZKpqEgyMx8Nf5BzPsmozAmEQYe5jQWkTqSUPJUyRcy2gsXpFHBv4Fa681JPacXqJxupnjomcWgzhE",
  "key26": "2LamHA3KWWZgPHeLkkYRTN3PZ4JKsZqEFBHb8pyWfF5AgsCRnW8u4iTGUwvDPczNAGe7yMXY5M3anzcprcLQj6si",
  "key27": "28UbjKL6QLExACvLWmjRGxWB6fwbcQR9bmJwXQFLeZtZZVxBL3rxdfzybMhR3fE25JJsu2WUkWfT5gT9GRoFGoGR",
  "key28": "3djYBUUdnSzMoiJv5fmHv2fE2eHsc5cY1ncLY6dtniMrmVs8LNCBupAjWrqraX9LP4ZWEjodakSR9BQVmywBoRWq",
  "key29": "3Q5hGmhq4hgX4dsbWXznpx1zJ62JZNW3ZL5387UiGJyQ7aA7TduqphE2f5uEhQpY9JSKHZ1XnpzBB1SwvfapDV9P",
  "key30": "RgPsGGLRiqAc1qVzwjQs5hg8KNeGb9JVsu1FhVCHfDGMRGFiFLntdVjcERwEnKiq7f5hixhpmaSs3EB3U6bxMz4",
  "key31": "5PsiaadKbASqz2aThoHybWK1roy419cGQrFKyvQdvtRh6dioWMUaRY7eqtFtmajHFuw8gDDVBeJmNTybEtS1imHV"
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

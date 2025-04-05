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
    "Ua4NWChZsuYNRnXoTcM6xjMtPbBLVQHas5mcX3M3EmqBA3S6rMYcCVZdmnNWVtN99NJVggoTxcDMP4shmWhMRw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FvxVtVJNaxeQangDZw7h74m19t6bbgwhropNTq3PXVR1kNTi3Za2qmaqcUc5VseK4GhpMcAcDgZk6iMvwhRv5Qm",
  "key1": "gmFygrcHrMqVGRMGVbcLPj1eJGg9a4X4v1kxxXSGe7hZASuZa7y8C63CZd8uXdxrQcM1Am8DxJCpEZAPg2eUPPJ",
  "key2": "32UNsuC46ik1tyFfsMkm3hSfo5LughEN1WVQFVkYZxfrpjRdEqBfun6RyZ15hnNASqu4jV9U7PoUU1fGAwihAXLF",
  "key3": "4uuaDLPL4TzpsDAnPXV48wX2o5pq9tHHycWfxPdo48mU64AGE5GPi6HfMZMUinNFDGg3q4CGUFeeMez2m4yGgpPs",
  "key4": "2cPDBsr9KKUfsqwKGA3jiuJjBiNSX2xasBWCGQSuT3mMQ7bEMaxKA8NpYtYSy53neVCgGAtx5Wkpu5bPdnhyk64s",
  "key5": "5V6cRc7K28mCVsZ67SfHisez8Ev29W3xpLxKxmKWwjeG4MB49eRVqFJh8Y9N7Ps5t12cDohTGTanKdfjbTZLNVxd",
  "key6": "NaHNrTFBGNP1Yd1vU5RSz9J3gX2WJ96Vi5HMTp6nujksE5ur1tYa89SSHJaUG3x8nRE6ejN7C3piN8fb3pwbpDV",
  "key7": "2mQEqiHYUMJaAs73y4FSUoQjT7o9C7kXJZz7pFmpUTmksLocoXU7GomxBMYTKM9DUEfwhi2v7qx3TTUCzp4r4VGb",
  "key8": "2wFEnVi4WRnTwvz6qzkHrZb78J3qjezb4XB9pXmGvxeJWPqt7qB4YJCYNa2uLoM2V6U2MczYbwpqER35RzdX9ygr",
  "key9": "5n7SXEYZkUAKknPRFWCRhuzVLhXarLbRircu2zEPccqy4UK3g5RZbQU74JFQzAK8gwvrnX3znM2E61eKsz4nDeyo",
  "key10": "3TysGQPLMXr1agDrbxVY45ZUfpDfarV69ohADXdoSEkR3BfJqsbNvTiaw4MndRtWaPJxF6uHnu7nKJjeSEiQyjxE",
  "key11": "2RZH5ws5JXSUrsjKcsNFwDNznTzhC3UaPXMmnUgPvCkQhZCFWyn8qCdE8UX2vM78CLerhtuUyk3Wj6Es28CbPYUW",
  "key12": "2UYNrB64mvT5bLjR73hR1tedZnZr8V7rLuYuYdduC2yWXt8ha2XszG7PvsfocHpcZtguxBUUSeBvSmSwSBv83San",
  "key13": "4uAuQPNreDLPcCYVfJHL6uRV27jQzcndLzHBQojwke9w9Znzw9u78Hkb5F5T559b7YVBNs84zYpWw7xTyCXB9ATc",
  "key14": "3X4GghptZ9hvgMiDL6yTGZ3XsAMjaLPtGc7myfP1yJ4Knt9ULrGiumPbrUTro8skjuWe3etFtzBH8MRTjWMRc5TZ",
  "key15": "2bm8sm8tUc2kSrNFn5NXsmLaf6WveCtLYiZ1SY7ktK8rqMbja13DrPnrqKXdzgAsrUnedQM8oygTwMJ1z9G49dT5",
  "key16": "5UTYELYnpSvZfd6B8SVCAeaU6zH5PZHdqu7Wi9V4Y5RpejC9XKxaWawb2LU3fC3JNVvJ6qC9FNgyNitb1Wy1494P",
  "key17": "4fpZ4B3VsDYoVVt2Q8YxCBaK1FRFkSrgLEdzmmrXAL64779G9rZrARGLdnW5p7mzefC3tnNHwGJeKRnhGyxBUbrn",
  "key18": "3UqnkJgfPhFzQBqqNWKMaUKC6UnxnPWwwtgc9q5LN1PsaBPYuG2y1LUUBrNcnnQfzEhFN4M8fHqiJjnbCWgQnhsX",
  "key19": "xThyySEBKS4y5tHktKHTtD5qfCuyEYhmC8sxyyv5GBWBemCip43NVgtdDpDxe3FPosJtjBaWnARsWtCz5SXfWSN",
  "key20": "4cjCxkqx6YidgxW3j4tpWzbXbjdWALx5i1p1eHhqFQ5xSkdCeogB2mRZJTe15xnXomRUjUyw1zeBSchWgBDFB1Aj",
  "key21": "5PxtiTgprBDBX2grsGbT4SvMp2KTzRxRfTh6sHmwXSwVoThPX2D4ZdDzATvGZ3Zopvi1CyHrW6PS4LXT3Y8YdiHX",
  "key22": "4H8Yvm1qwzxF1TMbn883Waur2GGF57SQYrg5FtGHFJc6SavUG58G9aR8He33ZzMXUahXgNCjBe3AYyiSHV6KStwX",
  "key23": "2GDtVQLQzKBkhPxoU391gS4D7x4Wnbooh8iRVEXSHBGHSm8RJJhNsn6NB49omiyBbvGd7osdNA4WBQm7d8okeKxu",
  "key24": "5NW7wML4jUv1AbYW29NyfaVRGHpyeMmtVQziiWxmArwPEguPdkDeERHuPDKZDrYKPXH3fwSayzpaGZnULFDYWioV"
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

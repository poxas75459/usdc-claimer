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
    "LTbqwV3hNXbsuAPgK5RhiAmz4Emwsv8qNWmjxYF9GomDhtnkXB7VZViCu1fUsonaPqHKA5FPqLedr6RSLVeE6gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Nfv4wvg2A9fEADKe2BJTknQmsoHMzYhjrTiCowxg6bhMaV4vWNMsfK46cjrfHGHmGi68suS2fvQz4LtojmYvXE",
  "key1": "4Krgf7SbAJQV2jbKyq8rW1wsCBUk1SjCsnXz1hQieXYmfCTy7NGufeJkS3edhDQRdtXPD1nLRsPFAoVq98v6hV6h",
  "key2": "2pdYWAd7SZ9kFERF7pi7oQEinWBUrFD5g3M2YCpPiMwV7Ca1cHDZ6X6CwYBKTSHfr7wzJMMWhFrNuhJ17bkuTR5N",
  "key3": "4mPWoEgf8SYcWusJMotvym7LC4T81HtDfXFh2pk42iEN8PS2VtLu846Af9cYvD3Q6B3578QCaWThn7AGipRDosE",
  "key4": "4bQap4cbF6yuHvmcakGvWSxVAfT2vw4REDLggUNcdQdsWTuZ5iaHsUH3rUPGNuYKtAowd5F9WJ26ymMqEsynCTB7",
  "key5": "3Sde21zsmyh9p5PE3yvakKhgmnb3Bw7uV35TQoLNe5YcKoLwGRXXucwRW7r3AAzHfjsNWjGiHuqvLFgJEeNAazKu",
  "key6": "3Kg7ccCznjr8ek2ARANBW1C7AXZknTvaS3uePNrauwBqfQ4kxNzr5EaFLm4gayQLKcPiM3uKZrAFJey18qvjw81x",
  "key7": "2K1vENEXWKBmaaNA295RE9uwUuccnSaEs7pAezqy6bkgixTar9wbiR5x9H3ryFnZEf61DX4Rh7KivfXbFGxFn5oS",
  "key8": "325YLsZVT6bmb6mSfJ4sSDH5wWVmXbd53hq447ftGtY4zX3xGG9c9cshsR4Z4LL4gViFx1c8UVGnKMKcKfvTFBYp",
  "key9": "5xpq9J9fpyL2eiLcVT5Xeovb9wCVoyDRDrL6ZKg3wxi3rj1xtc3wRxqXQeq3QJxMbwBxCVWnhkn7mMB6JNzbctKi",
  "key10": "4ABgdnfsW6cajYzwjs6nYxghs4LnoY6MS77HwnxXVbp7unhNQKMvpfhzMXAHdwgCUnxq8vx89Jp2KHpufku5Gwcj",
  "key11": "4SWPeXjSwzfb7ESe9cGjYvHE32xJkFdb3DKNWYWksBcCRS6EUvfFd7N3vi7jE6XnFk49UiYR4gfE3tbY5p5Kih3E",
  "key12": "SYSQSibSR87PYmpPcnnH2xyrmJae7L2GQ3mq6DF4mbm6kPSBBYVA37CfwwcLV2UjgJBXgJg8Xw8o1FH7FiK1y7q",
  "key13": "4EQ3GUWtaEUMLkMxVWYrFzJdaKWj6xnrGBXjsh7Yqzjk1Pbp8QZ8fxTCzRHarR7abhdTTjcCZ7mmm8LegArqRq9o",
  "key14": "SWifxhGEhydWLCmRN13xdHumpRVmXT3HNiuoUhVoeZUFdkhMbUM91dK2kZh1T1rN2miPQQ3o2nwKnszLspL161B",
  "key15": "4nyxHoURDR3cCs6cKkxCXE53ZzdiC2aoMvBCQ2UyxPogzyjajFB2NJX5YjDGrU9L4u6jHeTV3t4DzyHtKEGtt1i2",
  "key16": "5wo3AU7n27NUdS9uCpbGb3zJk2n1YrUycrdpV4PpsNxjNtk1mXEN4dqmU3RG2cZAhSULZhNYc1Xrmb8uyXST1Qrs",
  "key17": "3gYciGb9JSBCJXbXiGwiznBgThibvpYh6nyvwGavhRywa9iD58Mpm3QBCVuioZ5JC6igqY9aWLRWn4Ew5p9oQQcA",
  "key18": "4n243CrXNWJ7JPHEHPxWeAhB3pjC9d63c4sx8RB66Wfset9N5RqecQRcoR6F68pkxGNbvYBnut9x3LojKM49K6bF",
  "key19": "2n86VreHXtfKRa9oDBVqgidndpX5uxnQx62DwnTvC6VR4cYYKAj6UV8RvgYwaWrEoaZ3pkuVbM24XyT99XusoEgp",
  "key20": "3AWyjsn6FcyurFTi377G5PQkLAhXscKv1xqZo8fL9wrBAhJ8hKk457mXR7tvxtQ6fvaYS2suzfGAquN4XpMsSEKQ",
  "key21": "qLimw4QtvN71RwxuyK97o9u4rxmkecjUGvV1QnJaCzgDYKeGGWqn5EaXNZymd2CMePA4i39uRNmSDjT9ynvbDh8",
  "key22": "4JgGEFMeXbLmZK8CAdYrfYRsdTMt3Pwhy6sW554W7rviTTKFCyQwpr1CBwJT83tGzahyGCKaLMDxfAFanjuJcLCt",
  "key23": "48YwzRfdqMjdETrYMeVVfF5QWt8cnGSHRa4zFbMGTvcCNvJ5xEAkNqWrB89eQSfMeDrkfdWj6qw8jHqhe1CCM9xK",
  "key24": "3ZkJiUy9C1aH9iDZbiipgDepXfDx4s31WqTYKPadSzaBu3dVKampXBHDdx6UV6y3jgv7m4zjUa5so1D2CdqBwEsw"
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

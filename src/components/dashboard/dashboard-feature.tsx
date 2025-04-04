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
    "Byn3zFTGisW6D48XZiA4THPGkqMq7jbE1UJFackkFCxTng1EGgp4W4mqrUGLTwZd2ndDTTgxtF67NBb6jd2g2Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QSnW4EkPJQdSMXsTksA2142VGTRBJNvpVPkBeFfUGXLoFxTx5wkDHSsvwh84TpnoWRGZ3vzCX3aArDbHhSxo4JV",
  "key1": "2o9WRg6S3eNTvdiB1vTtSF6p3DN1aSYwRcWbqAUWEyrguW51Nduoz7oDbtFUCymKbijnhvZsWGKDXTYhZaT4pE5n",
  "key2": "5ggM7vBe4feDdtstkkTABYgpaiyYngCMNgs5jBrk9PhMSwfWy773PRN5tcEBuYtpBvDn9g8SdXXpbvcC7QxaQgq",
  "key3": "55pfWAFpJWQM2u9U5DhySirLhEt7qhJfgSK5KzhLAVppEeRYQwe2UBMnte67a6nCVbaBFinN4Bm77Tf7Jd6vgKHe",
  "key4": "BsPv3XhwMQQDcwrPVi7W6F5orXvLjD4vfkeubKWiqqTScdS2WRTB54YBHmhnPbuX7DAUjBHoyNNfWd7sJRaNsyM",
  "key5": "5yWSmTBAwftCaHz9T6AT46uh6cz6vDW7pkdTGJdTRN3h27e1e6T2NNotobH9yJ9mJ3NX2uxtqpRkUzn7FjNKj2wo",
  "key6": "4tsgiRLvYphHLnyxwBMBNHsz1JVTvE2QmpBHXkqkTP2gA88tKhPFmSUfvTQfoEAFuczDVHfoGUk32Su5H9paZcGw",
  "key7": "5YzSaSkZBv8nEJVUHXoZjx9p6FM3pgAoCZyijAAv2hBEBV3HbS6pAwYAGJxwHSwvdrmWfqJJk5Y7VFBaEzXqDXnE",
  "key8": "2vKLtNzPqzxNgJAW8bt8rL8qZNRgGHd9DV4gt3tRCUv9NoibmdWztEzdcQHC1ruHNWt2uANq7WmFzvVkz7dEy29p",
  "key9": "JhQgSoF73q2uuBxEQZmn1uacw1Xoc2vDUABX1eJFvQjgyHF4AAYSuD39GQfQiW4RJk6597qwasT4YyPZDZBhBnG",
  "key10": "5FZu4NZk9h2oaqh4cGnM9fEYtSTSaZ32f3bzA5vhA8nMSnWQdwyV4oKPxG2LqFVeZRpaJ34cP4NDatVKE9LV4A8R",
  "key11": "44QZwkB6jKs2ciY9M8LZUnGucHfhMBYwV8L9du79hMWuzSGYjTMAvHmUDRu13UcF2hCheC4jcLzq6uJfoC1jFC2s",
  "key12": "4J9u74VYZuTXYGJA5v1oKoDeeuXFj7oCQvgswKZA7XYcq4PRCyKexRtFNWnAjqaeoojj4ofzhP7CZd3C2yMua6F4",
  "key13": "294BQq7N2YJoEwoMZdQgBAJ85mvvkpWjhv1MfZ4bJieWpM4PYKaH3gVzso8akr8R7ktYRo7mf5qDUgQ9XzfcM4Pc",
  "key14": "4CkWc4DQ1rawm3nFXqQZU2eYUuZ6TjZ5y175xjH5up5iUzDtDBTgJMc94hooZDA85otWsmUWViU6dM5eHTH2Pfgd",
  "key15": "4ye61aMvFtjxHNPvpExSFxc3ikCVZiJSMe6dNexqfMCUjTjRF3vGk5JgTSrSyDun9QLK3rkEbPiiH9R47TNCt51F",
  "key16": "37mQXFarARNWU12ywC8BTBLAN2EEkvCR3vUi8HLRTF61HiC6qE5V4SCn196XSDaPzt24hwYV6SmNayQiGNwFB8g6",
  "key17": "28tUz6bkPkWpWLmHXWisXmtmEhTTGhY3RKeH9HzUDb7B2RjXoqdgQUpZC3Tw9XYMiTEvn6YTMvkCfisUN4EBGKPF",
  "key18": "43cPC6Tso6PXiAAPMvaTfYqG2vngWEQguWov5xpN8VFCUUHzFMdk36barrBh4uTYzxmXeDfVbbF6Y37ar6CRwf3e",
  "key19": "4UGafyhZELpzHdJmCicBaQVwurHprEHWL4ZDTfL8j57RvFa7fd47DuFM5H6twsMZkE1SehkJEh4rSs8D4STAa3AY",
  "key20": "27Qz5eEnKxaEhcoAbCuUo1Ep6uQMLetfNpXf3pfFbi1FMYZpnoM8JM14B9T6yqhjpZpHdnhvrz5c2Xj14E3sWxF5",
  "key21": "4zhBH9MK992wemL2dyC8318cmGH2qoN8nwZiYcXCTJ2zUYZmiNbSofQpdjnPETLigETT2VatE1d3SoNGZYSx66BY",
  "key22": "2ML5V98UmYvHosi9SKoXQULW43g1EK9aAk3rMTJ6REgW2aSiyjbGkPhJgfdK5KBMs9sMHKumxxLsdtu5wycuPmj8",
  "key23": "2VEfVYtAvdqNCTY3F9xMXXrgdVHjZm2HsvbKwfLRGEkFmyh6Qew3CdTQWqNhvgsa5UggQMuENq5RLfZo57WxDam4",
  "key24": "hXyf5HFvQ9Sj5WSFE4BFpzRvneaLTJ3Cu5jT8cTHVPiDBUtcbGHKJcv2FBtBaUyPQh76JNuLhJTGeJ3A9MYtcdW",
  "key25": "oP2o7XkkC1aNn1dr6BBVjSmqBqdJ8uEVi5dJpZRrY5nRXVpwmRB1x8YvK8hJnaBG19dFm1ciFASNpncb95qN4r6",
  "key26": "2WYDrwKUkp2hkLFMZqPRS24epugsfuZC12D8G54i3aj46sBnMVMmrkHzpv7mvtpkQ92eTaD4rwkQdGngbqWVznkJ",
  "key27": "4qQsgCRLmsRk3kEKioPk7QKcfdYiVz4ecpqjfrq7Ee5ux4TpyfbQ6EuVYBg8Psa8afQJnnpoHPE7vKV4Zm3WaLhC",
  "key28": "61JH8euwhZ91rAYHErCH4cCyyCcgi6dnPaamUEJVa4NNpPBM4DGNrcLkJvpLEXVcyrT37UH9PHysygQEJnK4pCAd",
  "key29": "45FfWgZmFqPZEKorCbSPJRoWcqLtmAyytCPnkkXksF2p79uJcQoZVMCTxpjBE7ZV92Q23p7h6nDpWGvSZkZj4pLc",
  "key30": "5TChguMUcE8NoLJS6jLuhz1erBb2tYxPFkHFfx2EiXqgjuVkhCCnmYHgyBpfiiRj3eq7An2QEJK2wUB4FVZQQmGo",
  "key31": "2oHi9go22nA4jXUuuiCyJL41wGZ3mTkT912GWo1W9x54FRDKHzWf6dpxLVSEGSniV7qfPZkDa9DMWHGfRCmetUbQ",
  "key32": "rJLN2VWKvzWG5XwQdu2RBVMWr7FfLqx74V8dSHj2T6peiPxqxKQDmDriTC7iCKvrbvAAPzZAcnAGxUBx5id3a9G",
  "key33": "X4BjA8qmD29oCH6smv9nEKr8ygcnzvzPoDQMqjvKD969HdRwrunfau86L76dMDfsCuHgi3ZXwnFsVMqMA9UKFHw",
  "key34": "5jTWGDFqFEbobhVh4tE4dsan8ACy7gmuDJfKng98ox9TjMqbok8vwqirZeVEvGeBYamKZMheQoW5e1Aohp6Pc8yw",
  "key35": "3VLKtRybenyGmf3ndrgEQG7g9YoSnWpMMD7PK7kRFwHeXF5fechjBKQwZGMQrtHNWoLgt9odQd6uBZnrp9JVykeb",
  "key36": "5cMMMvX6s84TdaxNpzj1n1Z5Nyd9yHnFZpfCcdkLuatEgCxjPRgcPgeZjh9t5MMozThZ91qJLu5ZfxSAfRmmji2P",
  "key37": "2AS98qKNjZ4csQT7oynXU54KNDjskEyz5YCcFCkV89Ai1c1h7FN3ZGTmMLr3AtKM5p1MyHvEG1QdqBjnzXr7caRq",
  "key38": "3uM4PAgwhG3T45wH5YYYcJ1WCNWnvbCneVxF78HHYi9tzVTsUFH2gecMzCxchNaWCetLvbohbZWnTdchCoownhzh",
  "key39": "28DFE8YBdA6bWtdytu4WF3Hj4cUsbRkKypZv844ruqa75aAVkwGxFvFr1cKchZh5itFaHjBAK4w935EqsagNKbpf",
  "key40": "2o27gz7yzEbbEysUxciXFGqmwD76m9EFTVzw6ZJBwHT8MSsBEa4WeuLEcP6FR99GjkLwK74REnfKpQg1pdTvwLfK",
  "key41": "5WTiEN8jDhDmyXvRYFkGL9XC6dMVPYSqbA6gKBUZtG8Z9uh7e6RN4ABABVdmv7dfBf6Cw1UWhuHp4Z4TgnXQDHFZ",
  "key42": "3xB7hM4aS3QF7YQKr4Y3iT3KPChSFPGAK6BjAvW9WRC13UPk8QsKKKYW85iaiTJKspYgPX3SFRjMPVhMfP8tNyNw",
  "key43": "2mZQhYHQy59oyCZtTi1EivqeXGTgM4yMfVmXaccQgfTGzDCfmyCxnxGNKyXnME66gorBiAWoxexwXRavjqtjmrwC",
  "key44": "56t6J9MjPXcMSTzyqHYKb5KvgkVMYPv1uXpY2tZT421r3Hphkb3yfyK1BEGikFo5ghDkmdyv2wVEMTXE8EYaUTuy"
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

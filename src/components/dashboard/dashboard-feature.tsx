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
    "4FqtbR8XJckz1sa1bX4GPoG5Vt9xb8kmXdvEHeBS5RwJhfV3M65gxuTewTW7YwQXom6muffEYsmDdd8z4VqDd8pa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hkhA14wdNX7GgDb5RessHnLaCF8d45iDbxKhb4TyF3cZPtZ16VbKHm7UYyhDgtL5rRBFw5B5ouTwT7qqENPBrvD",
  "key1": "yojHJ5c31rFx7ZbZAqAGYvPf1mzC2eyMfA9m783pkf1gncxC7NdqprZubsH64RY2U3zHbBhF3hmZ2uWivbxCivX",
  "key2": "4m9NVrzQiFNbTGDjAeYypFBLGdTgcdZWzyrk3NNmp4iS2KzjJmZtN8vuPzd4ubxV6pbRrWmN5VWX2s4CPyz5cgnX",
  "key3": "2779KiaAdS4pcy1DygC6bugnng7vwtRTESxxwie92teYKEjsUAEW1qyU2uy2qXGq85wgvkVniRj3aGJBFpoqS3wT",
  "key4": "5EQtFNEbcvr77F6YPAsYuLxAXSHz8rtza2Aq3mC3dWWLV5qhky62X7iRz1mFLGo1sRSA1fNt9qg88KbC16k257rs",
  "key5": "pZLtQQGRZBe6aqXQuGEp4vbKFTJpuVzFHGaJvXdNuJzNh4dvJyDp4cMzMKdGZJ7k6oYaj4t8LinM2tv8aVxUjv3",
  "key6": "2qHBK6aNjjwbZidhPAnue1xzbhe1mvor6Fcg3t88RdGcr6xduWpjc1AGdT1HFaqHsj2a9DDkwsm77wExiVdQ8fre",
  "key7": "cgKmVQghX2vQvV2KGM2MFWWpvE39LhvQNoH3FP3f9WfkbBAQ1ySYR1Wp45oni8xwcgtR87nnsLJ9M9JC4x2U2oK",
  "key8": "4XXFYYekPkDNBqc8CqHUdEc2RmrZ3FcU1gtbogYsVMR7Kx3zVEPpi9mpzK5L6FwGqt3cdzLvpdYpS8Yovk4ucT6d",
  "key9": "4phpyKH7wT534ncG4kwB9uAPMLoqHqv8oJSFebtC2f5D2XeaXG25nHvaHt3JNfz6dQTfuUMApzp4XBiKAQkAZSye",
  "key10": "5brrWCVAYZ8nHsgVaquRV4Dyn15JrfucWEs1bUnpt5kGETvV2QzhpS1gxPBaTcm9m9j3SkZJ6pZhLGeo2kx1hTc",
  "key11": "3DaRJwyirGrcfZnjhATJfVpYvGx3Jj9sjmSwwwjBJmu2C5nLSZpM48bNDC4QgbKTTeBGvAF4jtBhGw3pRRA6oRLu",
  "key12": "5nLk3XkYWsHC48rYTCEyQFjeXkJ5QLDh2gJEo7BjFwcQNM3jZazzfcF3v1CgHBye49a9eETwCXkjiDv7tQrB8pba",
  "key13": "3jExgicMyUEmhfNgxKjJNCk67rMbvxMFDPKxcJ7Zpc9prqZ5KVQuunabY37S4gSJa2VqJp2EUGSE9yg3K5BTiiU8",
  "key14": "43XD4xXZ6XZySqRLqCEEaEgUCZrunuCD5WSB4HZAgJvUsas1WwdA3zAoE7yi8ewN1q8fhtfoe4EY4rrE3UYDR4fR",
  "key15": "262H1U9BMSzhuP2WoTbtisqUdtkYePkAK4WjbMRoZn9hit2kfA33RuJTnfzrdFMM3AXJ6WYbSSaVDJCWDx8RgFkq",
  "key16": "311eGPBqdShmptgzTT1RNzZny4uQVWMeRGXRxNmUpABfWEssdSFPiVg3c9AQ8a5dKZ8hpH1zUwTfQGNBGdAFfGaY",
  "key17": "ZAbN9ByE3pjo6i4QwMpQedUg16igkRgafu7PsMe3Sg2BqKsZNfwG3gS59WnDDGK1roe3pGZt7CFNTeEH2dai2Jq",
  "key18": "5Dp4rXmz4gpwkFmT4jhR7ZvsQxm2neoNtuUSw9XJe5JRkkdhfxfquee7GZDvuMDZUC4GJeduXqS2EZ6C45rbQB6g",
  "key19": "2ww7ziXmhQV87eK575XeA88bxJj92tGUEtwNnbEmpMYHmQHpwMKGDF9npqE7XFhzPFLJKdy2n2RxXckYjbtaxXny",
  "key20": "4oHBQUz7UXMPP94FHqu3KFGxiai9yVDQa6NZRgYycCFTHD1kZdoVNbhsEr1jmphQ1czvq66kVxhWnyVvH6npXXRS",
  "key21": "5GDQsDPeXqw6N7Zp6CY2obRNnFVnrVdssMpCGpKbYLkNssxh7f3TEg1WjAKBqhLvXEGayeag3rU6DzDCbmn5sLzk",
  "key22": "XWqVCr2Qr9WJHMDW4TZfUzRQaQDpsV9vqpuVDCTQ1BeeASRBzs3Jm6W5Sc9ZV1RjPEL4j2qfduA69us9Z5Jz5Li",
  "key23": "2bVrebpycvzcR59eEQVKhTEhP4SQw53Be14cGpidrca4y2UF65hCuYBu6KTHpoCabtP7BSBdpRQJnuXBQVbffSi3",
  "key24": "4yCbzSQhfPkQxzqiEGcbjLgDat8FktgSngKhr5dfamPEEo2SKa7w77vg1CTrX1sWQcHEPiq1HG348KYzG3koRG5s",
  "key25": "3gQHEzLQB2cPtAXYZnQho9sKs8LUTZohwkdw2bkMz5GVsvwoo9BdAp1L4REdXtwZeH9A1FqprTQhPfRtJyQj2FPr",
  "key26": "5jQ4RsJbws49NJ6ticNHdwSnXm94zmf9Mdcamdf1tQLMhosEM4cMLRVxD2G2twVZ4czsGAUETmXM9Pu5c2bbt7Gv"
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

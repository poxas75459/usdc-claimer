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
    "28pD3SoebxfeGeEpFFFMm9PaqGjeJXUKqhpCuaW1dsztxAh5BM4JRs2E37fQFq6xkheUcaAwFTBUPnKFDicaqzGk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e9PFwQzfpp3Q4vCyg7b4BsuByK23czZde78DQQx6hXFydHv29LZjaXEzGbBaRPYKgRpMQ8e6nviXcPfjFWeDsWM",
  "key1": "25zCxJeeHe8VM6vpXZtf3yEvroV1avnUW15MdBKqXTci2rRvvVMGJQSzxyJRF3cqMn6tKodBHMYfWu3ogw7rLkAP",
  "key2": "5AFH22L8fUuMW6AFfAfknxq6dPTufhbwzeJSLM17x7yM4zbfh66CY2ubzKWKR2q4GjWgMXCKMrEEKVhTxjMPFBGP",
  "key3": "67UvEUb5KzvCvM5idp6p6uGhP9o7mnn21N7NSWE77wM1iyYdRq3T5RKJ32XvLY6EqbtAaGx9N3hCajDHtomGPWdv",
  "key4": "3TkmvD5yD7dfmzTeMP3pvhnBtruYvkEprtapWYj8M6vTdq52zug7yuAqcZRw7wGELzHLEjmdphqtfwb9FoR3myCn",
  "key5": "59V5w3yhkNB1FS7pCK6wZc6tL7xW9MdiLoqUPhGuizPnrahiPDoEuLkPgj6Aw6d81igMqu2iNG9m3N8crexBohUX",
  "key6": "5Qrz9h8ZpL7Qr2GCuSdRHe84V4AxaWcyKurA6N3FviDFv14QY5QmvwfoNMqCRPFZeZZdUWVbBansjyUxtCUQU1Qa",
  "key7": "5qG1mKcwPDTDXekmVXL85wBmR2edEP63NfgwaH5nh3eLY3nsrBo6AP1ojk3X7eur6N4MH5wA9rfEuwMccN2Ey4LE",
  "key8": "NtTG8hSthwnD1rug8mnhNiFrzmhc8gM147haHkdgGrQ7UwZDMu3aU3FE5jfG8c6vV2TX6DZpBBc6oideHMCnqNN",
  "key9": "4NVPGYufgguB8j4dcYdvN5DsTH55dt8qqg3CML1xDfr1UmLjxgd55qaQHd82MTJke8tRemjb7drH7mYuCWcXG9cc",
  "key10": "5KTvcsSqNiS1XkphxhjgsuUtUKQdHgn4uqBy34s3GktAiWVtj5MyRb8LCRqtqARDi5H5wiTWTsCaykjWqzwwh8yd",
  "key11": "2ekMVuWWcLfzYcrVpWyiEhW1MY656Wrhj43kLJh34ZwArRMFNn4LyCEhHrqXy3Ji9p4VGuGfiY6ggQP31Z5wzsUk",
  "key12": "4h7rraLXG4ekG2UmxK2TXjoCFtcdyd4p34Fz88nnEapVRVpEy1FwjcEwJDkbWZSq7jgw3kHX8KSFTS6uqow7x7Gj",
  "key13": "3D3Vs3iJz5gRvtXMEyGs1qD9NCNcHYj5gbaygsKi8LokMjtidAEARx28bCjhuCFZ3WorhrYcpvyJgPRP35ZL26vA",
  "key14": "3WN3VipfLmFd2w7SWvs7tAaKhVzR9qEkvY5wtLGrx78h3YkrNu1dPgRD5Ze2rdhJLFRekJcGn1zRi9q9cGzdE86A",
  "key15": "2WPGp4XzogQeTWUTAJ4KJru2RwkaUJR3yT9f3v98nFuE6Y8f5FBDmywyHiyuLm29Yq2qQEH4mniaWWCwTDFB7EZZ",
  "key16": "je6hJBHWDeaEYig3ZumSFafqCVYB8m9QbuuAuZRzFnQFUbZkixUWuoz8LAhWoTXRbF1HijQ1dBPsKfZgtgBrFVj",
  "key17": "ouN4omMYZawQZPCajQ7StwhGT1skxmVeh7QgzBMBoYfHdGj6qzAfdPSECmqSvQd1Df6Ye949fXs9TJy7cSyipJn",
  "key18": "2zdW3nBpduGNmmm79KRs9ey1tLvC8gmLAaa8MYip2L4UjKivrbZcgdDEikbafJ2r39Z17xEN9LQQ9Gr4kNxn7oSC",
  "key19": "5LEjNBjSrUr1fJ28BdXUZenBRM7KT6ErJt2BWzJUPQFR395pCif6zntgtjYvUyi4GpAZ3HoYhMfVTciwe9mFD5sS",
  "key20": "28JAkPGHyYbWQuGkGFHuP6KuXTcsxiHRrL1da1WfRHip5vEdPknD5DStDDhj4ZDwyCCpJbp2t2uqBgjLjWRrV6HX",
  "key21": "3WKvQp3vDcbYvDqFutN4gqDPR5SHai8wW5RaAdoPrU983NjtCBzJS6pc2Vi9jqPD19CcQ9Vz9Gj6rtAHndYoK8dw",
  "key22": "48MUbvHEDYPm9xG7AcG7oaM33tXZbDWtMFJTRfvPa8oHUVAMxhjQunr9kAMX4z1NZREibVYwe2RMPjdRG47atT5p",
  "key23": "5RN48sXYoYdRNUTyVmAd75VzHdGWJcvv8AXexBrhnzpn9JV9fWsSLa8b26A8w3QYej8uRqTNmHA1aLAA6TN1Ry6v",
  "key24": "2ws4N9un25iTr7hn8LCh6o3NuopkCCvsJvsbWAucVSDRY7zHBQBbyL9wjLRMMxAmdcbNguER3gUauUz3wJ81ZZtp",
  "key25": "2EEjwUwcSfZ3yWnp9ik2pZFyagcvkUvv3DrUTdjWfpgpS8m3zXtFATD6TTKdT25sHrEfR5GDgraBBzV8sYKfVtUa",
  "key26": "2c3NX6iuims1gPnQpz4oovnN81QxfAounFFr3k5TPP6EvrJgKfoS1bzNGJ7Gx8uzZ9mbqJ6gPD8jFWEKuoCNd5s3"
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

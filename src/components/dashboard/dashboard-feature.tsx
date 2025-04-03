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
    "2XYYDhkDRjRbGja7LQVCLmVBrLQqA3zFapkNce9VnbhYNtMmagPFbf9oh3Qww24fxJ1pYBBfZGhE84HUBYaUsjqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oKnRHHmRUSVoU4GmR45WbNJGHQ7sQQcnFu27F3VQDYdVeffABWRxbE5hs3FA4tHUUPjMQrcm1ZofBRsbqHLdf9k",
  "key1": "5rzuTLgJ2gtGox5JmtaLxBzc6ndG5S8ptgmSvP4U6St8MFpTGYRKTmAZRGG7EUh5ikTUkBBsXWKCcxLVrib9Et4k",
  "key2": "2TeLm9CAmVF2yyjuL8sWCmQeLpf9c88z6FXYtegv9BvRCLQLxLY7GovzVwcpHetYj1j2h8ddwn2HZz3cZ513xR7e",
  "key3": "sqKSrqgvcFotCtEZQ1gtbYncqvvgx9dhTsdW11MZkt9qAYfjDe7GoDv8omCm5yvLf1u7ebzb8UYKR3uh4PgLAYh",
  "key4": "2ib7ncDqR7ty5EKMge34iYTp5zu1G9QdG2JASbLCEikEfiSerwCXdgdbAy2GiLXdJYv6PqBDLMEzcp47AznTjFR2",
  "key5": "54xqwTYSxYP9DasEFqKpw2HKtEAYk4NpZR8FvKoECwLzvTuzVYYBJh2NQoKReh7usdsegcJsySoxYwhE54k9MK3q",
  "key6": "5mPKsHCnM5zNAwHNXvZoQ5Hh5j6Cw4xivc3KsCtScCNbq4AMLutUNo3gFkuberw8MXM1Kn8yCVm7GjWKrtjZ8yLs",
  "key7": "35W7Xh9c6swG21Npmdoa1YUacfpXJyBvbozSBw4VrSmUzZGwXEukPkuYhrAf4RnCrDEhY7JytdMtnmEi6LoNS3Ds",
  "key8": "2fLmStt6kHicpt1RGt2BxwkMdtDXgyicN58wAjKVwJaHqKMnzRh6X8PftsiWYo3v2bud8YWeVDMFpdNwjKGAUTQg",
  "key9": "5CUjPDdAgfKbCTi9ne7HvCGB98aqzWJuRTttprfTFzaGJMvfwMoPNRRxqSsW6ZUWwv32burDJwExWEbdX98c6WJr",
  "key10": "4jgHXRCGF4yQgDZCAUb3o2fYJ8Uakdcv5KMzAdkmmvmNH1Wk66r2GcnfBXgbWcDwA5XkpuajZFh2CboZRicnFkeA",
  "key11": "5wa1dokN95C6Szi7mdQ4mQA9z6eh3dAw9fiPGDnQn8QCgxR3m3x886eXXx5BCUgtsx5CSqY6aRABtaSEaSmhbwM2",
  "key12": "2rEMdHpuk9soj3QFAbK22nyFZNtgNYX9K3c7r33UsiMMEFsDTViFMx4rQh9s1xPhDqSU2iozzNHRgPiVz2Nnucf6",
  "key13": "5C6tcNXX9PipHKN4ZnX5joo2K1GsRjWLR8vFUwzMHLVmyFNvUkEY5aqfZ363EKtxjbyrkuFiaX7Mt3J9YLANZk9x",
  "key14": "3x1gftPke9WwabbqBudTkchj42fyWTtndCHu9unzdBaQtEE24heMWFcY3duo8QyoT1wPTJWAUyKVsAmTbsd8gvaT",
  "key15": "3jhWdq9RbTQvAEYePCfLRZDJfRvzA6z4o2YK3AKsnqRP4145UVmfE2Ay1hvfmk7qXG4JG4tDj4W5jWFLTzcEqBGk",
  "key16": "32RbeC4TVStiAeKvqQ4nb8jYCxEDKa4BBfjvq5mY2Kz4RvfuA9ZNssbJpfvLNezQghoEhhp3dueya2Xgeyqzi12J",
  "key17": "5hQiCXitzACHicQXHS6vaGmui2b3WFVixd5snEyYeY6cLVehpZbrn1DC9aBiuQo4KK3YiY7dP9nUFF2LaDQi2Squ",
  "key18": "2cvgnJ7ctDWyyF4AqurW2f89nz9Gh3LxiMicUXwnP1Kc5ZyoV2Qwj2uqw27AHZByrLM4JhccAc7E7sa14ontYvsL",
  "key19": "3cPLUNYDsvCo99FKfFyeuVo68wnhJ3tWgznUbpJr9ufrVb7g13hENxcZ2tvve1v3KSBD3H77AmC8TraH2b4zpCVu",
  "key20": "3bKz4mRidKJCN2CqZpPTtoMhMU3dWPNGYZRA8UGLcfpiRC9Fa8rs5XTqQv1sCpjSGHmtvydJjPoDn6tVNSfYmPGm",
  "key21": "4yW55zzvCZECSFZRS4JKokySFvCKQdWD36vF3bLX5MMpSwNag2eaQQYKPkrMDLyy2tSkzpbKVZTKLbCzqBQbqbXm",
  "key22": "2LBABQXT761qpPYispoqEYSqgPh4GftahQQd1j2L6Ng3JzEdo65SDD9AQtyJ8nJW1pLEGHQgSA8kEvDiR1m229kM",
  "key23": "4Ko1cThQd2PNhnSjMgctaSte1WEh7E4AiTXKbZLxCWezQNRh5LwNJH3YPPW7GUaNdYTG6osJVw8YDkYU5Fh9Adr7",
  "key24": "5UxUEoto9t7UFNyQwRE3ppAkX3UCYDuNTujnNWvxvEr6xkWAscryffksbZf3Qt1nN397HWf7yJXY1WnW4FYCnAR1",
  "key25": "HaiLu4pjCCsDDusvH54oALhoXppTL5GNkUQQ3qm4MrnFNfi9HSGeGq3PAUayoBqGn2vNnFLQ7wyFh8sts3KCTDE",
  "key26": "5NszdRBNCh3nnaFm3KhRGX8sqXZCJiMQHgUig12GebgLigr54CGjFeDCVaz74ocvpYU77zqdZgJiX9ngVJBeXgQ3",
  "key27": "67UuWmpbjNsQSb4SQycki7ukgnHEwKcegMLSWZSUgFWfgPvdhD6VRWMiUkLWmkXYHHmF7vnRjze1LMyG3pJD4oRA",
  "key28": "qdNtQTb5JsUVyYWHrS5feYheNPeTdgo2YRdLZEZ8uQnjMaFSsPBL3iRADFg81SV8cKSYQoZHSWfkSQwmSdALUV6",
  "key29": "5K3hkgkB1mcChzuZM4CeT7soW7RwXqMUQVZWZ4kVpXfRJ2UAirjBUpCWKsEJNRvSfP3xzH8wbXwvw53gcf52d6sT",
  "key30": "3Lt1shgcNpwL1UXuxaLuDV7nWP47Gb3GxmLve58y2RVkJBAWqjyhHu9epx2uyj6jwK9E7gJCgfYptnJkhibveML1"
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

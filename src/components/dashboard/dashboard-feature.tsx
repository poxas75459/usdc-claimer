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
    "5FuxjAgjnvr1QcXWLatbXGqGciqNo8mdWANRdMnVna5otKHJSNtA9NB9Ct6duv4bsVeafMPhHz8tXrc3zeHFjW9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HUDZbvuekpaK6yxJ1jsjzRGjU7KynUcp9zBKX3zdGxhh8SfBWxQeoU9sSuA6PvAz7rGGU3VwN4QMyuMWcPzaXEr",
  "key1": "3UVXGKe5XNJHMrcADZAZhyJtPdUPYgBaZVJb42336PGSVFybL7wKMNGuSCtRVKkSvRNNWNmrEQKbhdZB7Hg52EkD",
  "key2": "3UwPBwPbfiMQmYSYGCmNTYahdz5awe1Xi1ZXjhHK4BgN5srn6UtpfbRZrWh9no2mvQMwBDd1ATXHMR6bNAjMZQYx",
  "key3": "5GKCFr2Yr5WTfLBTuBfTiGt7jR3RLQhQHaXCrmscjZHBhqzS4cEW2LMxfaUHxo8aU9ij5xUqn1h8EgehBt6iz6FD",
  "key4": "64P263Vz7gmPEHGLh5xEhp4Tn81FY5inWe3gnZFvsM3mBG8Vp2JW9aMpFjYoW68LsPZaaqukadmLjY7jv9LN5sby",
  "key5": "5VjDRr3UYr1YvC7yJtiGzaQxUuRfumyAaBghnuBECFGvYbFSHz7PNoH1vM6bhAqRXb37j67KTjxd4tKfBuEhNc2Z",
  "key6": "4ULLCKvUpU5eQXydt3TpCMyZdBMdtFb6aoXDWJGWjVZG2M2ujucdtCGNU5aZRre2WkJ2BgLjQqcW67Niaudzitfo",
  "key7": "3zUBHaBVyAvtbE1DVGWBwisckzEzSvr685cdgEEorWv2AefccEuKFtcfwX2gRvLNv2aXjKsXEPSciXiyfSZzUMjw",
  "key8": "5sgBRtyRi4XmXH3TMMYiP6LWDNK1biGVrDhePjbxsCR5kURtmKCUwuyDGCdpEymHucsfRr4ATyHThXVx2pvSevCQ",
  "key9": "3tY1DFQHuqrSAzYcMpwVWniQyKz14YE2pjuWZevFXq6PyoNNFohVWUvGhJj5AyzhLrLiGBnkE81fMD92k82TVaUj",
  "key10": "2VZZ93cxodCHCFdFwDHGScWH9RXzz6eJZJmrr4zfypWpcWy5Xe4fpfBJmXjJqDzDngQEwCTgdmN2pXLtKobpeisp",
  "key11": "fxDZhJmd6ykEkCYFqt5NXqBLXvZfdYy774eMYhfiUUpYFHKEsRe9X3gr2mUAz11HpJpvEFgBmCYc6sp22Sc5ppn",
  "key12": "3w36nYFSxNGuVkVCuWtCcuUVzqK9DMzB95EUGiiwLqciSovtqWCJxf4uyfdzpPYCDxtShdmXrYabWs51dvmk6945",
  "key13": "4J9Bhpv2usGyHZc72wS3m6yH3HBMDMi8xTenWkktaqKh8MrRidTDVBvEQZjJ581pohU4oZJnnwcMrc6xn4TYhNzG",
  "key14": "2UtMgZeYmK5DTQr9VJFchrbaHeqrcD3EDJnbPZhLvaVjGuAP8S4Bnb5q3qDCLcWLH4gPqKWQViHPp5zkQt3EQDYS",
  "key15": "2iwg53H3m4Fka6ZTLXzP9sVWbGDEo62BbMxson42Pv5SzHQH4HXnefyeCKkJHZRZv6v9GeZg8jBX2TB9u932UyHk",
  "key16": "2weaVf26zhUNSi4W69McVYJvMXRPV5phfzDC67CSyCxXxPrV4kc4zwZnySXYSRb5i6bhd6u4tdVCpYJK6dD74jjQ",
  "key17": "5fWUjX6tNi3YquFsYJURzHmJcjAnLgWCSNZUbSbnGaavKipyCviCEUY1eKNzQUd7ijNEmbFMCjrqrzP1JohgCxy9",
  "key18": "3LLm75sZPcM6EEDVTLTDbeKDSVgEFPEPwRbpXuGWY1YG3R78baEs12acPNfMjc9x8TfEwLAYxwoQjty8kWBpPAqV",
  "key19": "QmALWQDWkfEQogsZkkokSFjYiAkEJZvrSkodp7rfbf7HbJZfXM4oVxVuY7te9r3EFw1oDGGUYhPRUDajLN6niLP",
  "key20": "Kd75jKJLLXdDm1yCPcZTYmwzkbGRnd4kRhv3WdDv4CgLhv2QL1Ngr1M2Nfzt2JWonYwWfUq7uUt4eFi2PNTbw6Y",
  "key21": "3Cewh3W6kZp5C2dVGgNT5sACoRkTRUHi4j9FpkB2DbuampZcGXyURW5fRQe6siTPV55Ld2tHcs615vaA2mXdCKgA",
  "key22": "5T4UE5UeJiaqapnX9CysJFY4ASAkRnKhxuKsGLv8y5FihfmfAwA9FDJbDwhTkoX8PdzWxA1MAaHhZJPVRGXsfx7b",
  "key23": "5ciDmLDHKJXnP8qdaUiQRwJZT4cx9SeMpZvWN4vcfV4UpRLQDysfcx3ATG4keq8ztzEzf51ZPAfdsXwCzoJwcbxA",
  "key24": "uefqRjWq7u25W34Uk6nPF2CoECBiCWiFyxqTvce7K8M2G1u51XcWCyyKc6aMkqX7t1eaZug39wsQESTrZhyu99X",
  "key25": "44VaH3WJkt3jBvpB3AdnFyv2XPTVuND6Qai5SUjSoh2Ymg6vt2K4W2tsCLzkGYJpFJw3Nm7f5ZKnBrvFAX79r1Vv",
  "key26": "3JRxZRccYH3YGxxAhKLQudQeMQHQxQDsozHqu8uR1FBUt9c7sgyyjvKjWDzqkjs3Fj3ss4ucGEQ3S1VZY5SEiuwE",
  "key27": "5T82VtZazqme6u9yvBmPa9kFLZ66AkXiaBWJspYsvUkSTjrHQQJwVRV8zNLqc2ffkFspkJDSbFcgNjcL7BBfj2kC",
  "key28": "3uunvsXnqBgQCFSzbWbMdq9LjjaisfpiHrx2J233ryWfvZ5WHhgwTsUqJ8joUu6URNrQ9Fo2MjDNaB6RbUgWoeYu",
  "key29": "FJfSpP6Y9GJUe79FL4gM59JHC6a4zZ6u2tSBjASoYv7jXKZHRhuPv3sTzk5zpQBEN5KE5vDvp2ybT41D7vvhwJA",
  "key30": "5Mmf2386BS1kC4iM6rUivUt78fe8qbr8WGefNYKUrJRzDTkHV8YZrSW9656eAEeQAahhpWCwHikhJBTzG9qkhRtK",
  "key31": "2tQWDDvvZQJ865tCQ65eQfJrBpTsnZtNAmR9UkBF32MDSndt4Hv2pZmWbe5U75UztnubEQKTJPT61SX6uea2Wg3L",
  "key32": "66uyJGj9hxQ9Mq9zoyGW1YMo6fN12FcmP6ELDDy7gxocDF8QzrkUt6gt1e89MHVfqanM6et2BbMboZwRdBJVX2mm",
  "key33": "3gpA9jeJcTw6uyBJtXuwznNK3Jk41g1Md9qy5RcPKVKBLCFszMDsYPeWxKocA5y7M63vGgHP6yXngUfaGMDAHTsp",
  "key34": "41e5sRCwDAeqjHEfjdrLXfNs3NNukoXwrC6cGgYBsogMKNXkFoWq4QAqqGLLgnttz3doJKe84SWhoHu6eYMENgup",
  "key35": "uDD6ty9JkbJSjpPnbJpwn2C2VTYgE1oNjNkG1QjqbfEDPXhvJM1LBjtDwmUqgMQk2sfThRUpUcsBgAMfNtFCGbm",
  "key36": "3FTnF9XRxc2wev7uQ6KnY9MQhTprKCxAkL5jPnXVDBNJcKsXTZkoR2bT8dq4TKf7CfGW6tHyLBW6MXMHFBmoQmVz",
  "key37": "2aJag99CtXvmLQebDvU5a5C2JVdMJdfKZDbQiBiXYyJGTXdBGpqY5qzMfj9SkmgooZhR7cTRzHwFRxLunaQqifUM"
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

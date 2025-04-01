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
    "59VDNopFVRJvL9y9WGnEiAt28gTZReGgXuyDVH6Vx2mS6dcXJ4biKKiLUKu6kPoAg1FFJqtFQZLvG8srfdur7WKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oXg53zMpiSwWiA7gniyzzWTE8GjMBScVrEpUb8d48mkm8wGemRC62FojpwsTCYw7cJJjYiZaAonogkAZuttxj1w",
  "key1": "5jkyUhoeo1XH98zu37uCfWF1GM9dQeUuTGM5DRkg7LnhdeSxc1fdP3zWdqkRgYJBoLq92f3EseuJbNe5XCeKS9Q6",
  "key2": "TfyDd3jmCH1cmdLDc4aMCZc5gybHS9fChqkoyhQ6B1442kM3EonYj9aGjH65LGAmatfbyxz274m6qyXvJ8R8CLU",
  "key3": "NvouXsiy54Bt2GHe93ZSAA3UYMxE2vGWRKry6jvuVNj9GbZ6brtNpbL1BzuTbya7qAaUeLeyKsHoykzRJE5278C",
  "key4": "24m4VoBSEU8qZdUJWZr2KsFZUu9X36eDcWcDXdfpj7LkMYVcRwqWc6cCTMN5C15MfbnCseS9GduYYLC11YHBC2Xr",
  "key5": "ppLhfFHS54hviwAnPiGFzmD8KSPuuGZ2BGovmNR5iGZxsA7tycNA3DkFkruLbPFdyPyyvZwAVMvuK5azeexQwCZ",
  "key6": "668T4mX9coiMrCqDFhfwyBKyYzrcCo5yL9yK9hasyjyPRiyd1pHQdegw1TBLn78E6obxaiS8oKQV4W9NBZpSUUD8",
  "key7": "2fbpqJn8zcfsn5twxJhzaUeefkQcfC5e5JdXke27N4g8568jv91684QRdGnG3Tu97WXH8P1Uk58B6Y8noyqUm28f",
  "key8": "5gkkGvt5KZMZJfqqQoVezRiXUvgm6ZmspwJSF11kS54DevSXxgMt2HMbSfuGn9SctYtJvtzi88n7rDMC9LsHPhfD",
  "key9": "y4iJMVjur974Eb2LynBHAYLBbRtpx1E3kRdSAiAMWC8iFien3Kms7pVa8w47XGskiRxCdBhHbCN5ry1e7aXYkok",
  "key10": "4sMyWoGiMWAZPvHirdLKSDYu76tzkjjfwR3QnNGmNFsNr43dqCeE9SG4D4v4XJcyJ8eSmvcn7d3Srmu2CES2TqFo",
  "key11": "4djHKRNyNcaHBR5c8u3Cmk9hYk1aYXUXJubS6phbvS9gVwmaLHqP67vtqsADXYHZbD3ukp1UDmYgR1tjCqEB9jYJ",
  "key12": "2uaJ3QZ7CC964uPRH53wVBHiRtrzzWLJRbZd8GRW13xqm2nqQP8V1sQ1Z6RM9zTVbEjB9aii8yErUzMVsphh1YiN",
  "key13": "5A9bNEDHf2HvE5VSY3yV8ErbVbu8MTCzJRL9HnHJuQewPYe5zfv66bu9gb7Dhm471bjumQYM6k7XYEc7MGsTHNbX",
  "key14": "5QFyaTVsEPLRo8RD5WnP6NuPjsVhYTmH8YKYGAtKfQXiTU1dZVPErunTGsSYMELhiZxCswWvMWtfLRoBntMkCGgr",
  "key15": "XC3dLvZLJBXfVviHhrVjWVCWXz5QJTjZCMxc7E1CBatLtfrNGJqtAx7g6PMWgN2upMTnhgjQGiwoMCNtNcPj4Y2",
  "key16": "4uoQMvzEDvsMn1sCrBdvm9yEtQgcgNo9nmDvXXDZBZa8LVfkXNR2QrvQdjB181VGTYcpFSDL8SQMYfJKvAdDJbzD",
  "key17": "3GFb3UgeiKXjxYjKBs41brY2r58pS5E133DdNt2XKioMaccCSfjebaRP6gmncZnF2HTVz9qmqveny7gXQpYq7RB9",
  "key18": "2ysATT2xT4uJ51pNtc4QNY5NmLVbhnyqwqX8QJRQaaXdjYEmP1Y665enhED36qZ65Ctv7jJWiSDc6dRQCWB6ZkMY",
  "key19": "2vPM8drV7uYkFf9Z5eSYGDsbiNyH51qXG5dTvbNjTrHBgWY6ZtM5vEG76LVU9bqbmFt6beXwNsr6GHAZwmYmJSuS",
  "key20": "4cPwSdoUEGEVBywFR7N357fFMc1oabRKj32vG3cQRysZ3cBdhq59AuHCaAFn4Eq1dh51jpC6DQA3Zs9nfiQWh7uA",
  "key21": "68jdwN66pz9CcrrkTPTBUTegQLyqkAYosQh21UdKPouXNrNHk3bmuupQyJC3VGMPtfN1t6A6cM5m4Rtmtkriehy",
  "key22": "3SG4PPM2JA51dsTpZp3JKrW49VNNcPur4R5QsDAdwoooAVn4H7QE5bnUzo73EUTJzEQiASiu3JJMXbupupB8SbU9",
  "key23": "3mpKG5YJk3qZS15xSpKGyfJJYCtvKaxpxBMp1KkRR2vdVwABLVfbXpZzM5NUfhAzKJZGFsAD4UVXVefE7qroMqen",
  "key24": "3nZxAKcotypfdgxiMUHJwuUS8Zav9hzvcSoow6tgYkLrSV6hFeXo13rBA5ggst3ytDzEMV1wXknjcE5SdawU2eWo",
  "key25": "64g3Jy5ZHg2FqaFWjy12obARVrHh7HFEAKKyc5d1QuUZuC3beyf7PUEsj9y6sCGQs74fAX9NMqmY2pif57U8BTAg",
  "key26": "teVajXdGtFdzGNRC2rm916U5aj8w8DYXEeV7DLVPkQ2eM3fY8bMkVUcvLomkRnWXESYzK3iyt878BQizxH9LYWb"
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

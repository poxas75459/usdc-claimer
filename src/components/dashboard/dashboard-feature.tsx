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
    "4QQ5XAes37ASdyWLMeDvd4xWpSvupQok1gCTkG99YaK5YKytBGU3MNWaKpT6TsQEm8MsdgmYho75sFE8ZztAZM4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjmJehhEZDsnfXrqyDph3jxr5vZX7KQr7ALP3dM5aSP9avzns59xLTp8BbKmdBFRkU6hi1odbt9mmrQd4Kv9wup",
  "key1": "3uAGxb1Rwm1yEs7TUeYKZy4fqhEcvUMDg1wXmfVAhw8Qab3Wywee72i5Fzvpdog4v7iQqpQk8qWiH4khcxcZaSyy",
  "key2": "VVXH9Nz99pfYVurJ3dnSGCgFWKTD5SPHBATLMbvieX7pR712cRW4xQ6JtoX4NQT18URxQwbZfDEnEGFQQ65tCwA",
  "key3": "2WXHvBKKb75xEdyKQpXUGPXYmp7yv1gjn8fTgWNxECoptak4DQMMjf691rz1uuAadY4qzwFD4ZVqj1G1vkSor5nM",
  "key4": "oAfbx9RLzdoibyU9HmHCoY7uRhhp5Zk1vaQrFuCa5j4Yc7s2r5NLe4z1inEL3bTtoeutBrurrxZTZ5fCYuX4tH3",
  "key5": "3kA2bcRXCnryherJT5x6itJChyuK5LYmnwCWFqU7xLUq4tYyQV1gqj4ED2e2uXUCd8fd7MjGg6CmKPtqpaWphDJs",
  "key6": "4YsGNxN6Apz68speqE3GtitFWXNDiG3tBWbtyJPKPUXa4sEqSVYYpnUVUue53SYppnhzDo1ujrmPDgaR7nfjNr6b",
  "key7": "59WLTHXpAwhwzy7CCqCTQKJKBFKQiNEPkpRm7oCwZNyfzPncfQCYQm1iV2MsFxoYMfc2eMFMjzNwUvNNS44GmG3",
  "key8": "64cgq6hrtNEoND7FoPpkAhdaocwU8anvkqQKWtYFZVH363dghRFhAFJQLej9dwy1AaL1LoFnSQmYsRs2aU2QTk4E",
  "key9": "4kv3kDLZzAvdXTwB7dyMhKWo4iomRE7h6YavjKxk6fNyXXcYJDPcNvMhscfMEe46tHzcyPfikNFmJEd96LRCacZ8",
  "key10": "51TkwaBcRT6CkjLcrYdn8Cf2CpusgCkXbMEYrAi7zW3ow8SKn4Fjs3gADrSFGvShXFJeJ4TYTefwJ5Bzz7bV4ahz",
  "key11": "4QYeLR7DhXp2mSetDmbL7yUGjZ1QNCk7jgmek4Y8o39nLvZgQV4Ukep9KnWxoHHJ4LgPPCJchDipmrkxNZXpHfJs",
  "key12": "53YywePv6APZu9KS61Xmf4vBwdsV89yro51LAsMkdSQfUygZEapLZShX3WYYtVFosnBkP2eNWzzBoSnazDmWiK8Y",
  "key13": "5x8KSG7NAB5xAYmJ1sArRMFKT51fMqm1bjoJ87hDRutaTjKEpEN6p3F6BA5cbKkxaAp6XdjCF1K3FymXXYWSLLz1",
  "key14": "2nN9o5piTqrDeMJrsS45eur7BJ83UEDXhkwbhCnggihCAkcnoaoqDzsqHMKekqzJv1pQ2tfmu9G6DfKAU3Hh1UNp",
  "key15": "LEASWPLG7QpBQMz4bvvGrrNJoqxygbGEZDXoxAHZbJtQYvuxJF2DgjPzuuCZ53wAktKN7z319F9hC1r78fED5Bp",
  "key16": "4cdmTHLihTVLy1VMMNFCxrB2P5xJsQdYrceB4uQvbacpBeaB8ZfWGCbyN4rHJSpCFmH1B1bbiEHFSXHgS3KaYRpC",
  "key17": "3V2eRSSH8LdR9MRqHKDY9aADYAv1b5KxaFvR7pYJmYxs2Rchbd4LQChSmocWGa56wkJNQxbLj8jVJMBvpkcCJP5Q",
  "key18": "36mjaEXxKEqTk4skT5sRntSVs8SFVFsHGHNRmioFzPEmDHER3pBkyUdc9mbK8pgfVQTUd9EETh5ooy7iJiev2vMt",
  "key19": "5VVx8cUGJt958re9fB9Zd7Eted9V9JGespt5xuFhvyiGReyZbGQqBgdRR4zzfEd8uMCQXAUsJwwcx3i7d5BzYyDB",
  "key20": "2YrdifvPvZKs8rpCd88rJVBJWPZTozbQuC2viPLzVHTcHmfzb4eTeeAUrhAVX7jxsvmnSqmyv9NewAfRbtSN46Qy",
  "key21": "5r1Q4pZP53DqBcS7k3KdVZwrQwKkVCMt6uqM1D59pmsG6v3pHBPyzh3B5UkLyYKVjE9uytJooManLnnBVzVdF4T5",
  "key22": "3x9cSkGvggH6NyYP56RgPooWtgtCHR2To4eerrp12FhZFVAL6n8ZvWVaSyFuRAwfqma5amZzPJUF83R1jFrNqas8",
  "key23": "Qa3UAXR1ehfE7bNTaM1CnsHufgcXrw9mr6tMfuqXthsRHnCQ3z3my8BJm8xBfxudtZLx61cAaiorYUy61i11c1t",
  "key24": "3EyBWnRrx6M41uvG4sN2ndN9fCrDf6Lqvqv1YCE2VxjbfZYmPFh9uvy1BBxB6wMyq7u9z4BQK4cNr88SjUixkzM7",
  "key25": "o7btjQzaLSUFjdsPcBEwoawqQ8ti6gEMNEMfNuHwD9EE9NktXZj1P9QG4HVuQuKVcVn4vampEBNAVztAWtBJcL5",
  "key26": "3uH1gtxaPUvxrYzKxHSLWA1zkGZtDwZk8MvrXc6gHD7DdYkvux933PnktZdCHcwGzszk5rBypVKaerdDsNSiSnGw",
  "key27": "67Wp5kBfwYxuMQYtyzbVzoVSbPSATEu7cbJwNy4NkdRvBsyAZvfNmQiLspUmi4n4Uc2SJgRbCE4Zw2TVxMGS1nVX",
  "key28": "WyXo6Wo8hojn8oyHhYtt3eG1aViHYXmc5jzaKASGDFDUnnBCtKuG46j933euhVxTVkQyuhjPrqKHztPiwtb1JMA",
  "key29": "2aaEiSFAUkCsDLsR7FDYw8G4UVcEZk66jTdE9rTMnWQSEfxHFvTiXwDixo6WdTMctUqVmkubmyAZUywumqGqLL8j",
  "key30": "3JcDwTZdBV1sBEuhkHhLbA25AYUonMZjU2kMZDf6PzkZ6TAHHKM662zt633yxBZMVheiQbbtJtHtYzhtRxkJfrzQ",
  "key31": "3czup9Ds6rECmNzEMSbL6qHhTUgTju6qjtUTKyTqExSMHp5MxGou7Vj5vWCmiNQK61wLNFcywo1Wnu4XQ3ZrX3mA"
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

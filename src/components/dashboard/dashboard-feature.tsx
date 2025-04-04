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
    "3dJTgBEth3PPARqRvy29Hotte16DULF9ULSnfgcyv6YgKmfJro4A4RT8uuCfG1zNiopY6w3vmSMfG8Xmnwy3rYpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUeHsSewRFEc7axAKqNngEnmW9eyhkGDCZwFodtL2dXGLgtYv44CN4x98ExkJcFzpkFfnwpFQxuYUbejQf1PnYb",
  "key1": "2PTU1YDX7nY1nWNs61BjMsX52SJW6oDeZxoQjkayj551LJJNUtMS6ta3B5qUFYSvpRLJsS9Log6i8ZA6Xqk3C5SP",
  "key2": "67X6q9CELB7HrUpuiimaAb1xGfkS1pnGoeS7MyVXjnQTJieDK3g6JzWvsV9S12JyFkDW3Xhs4MnYpirKTjJRLmVc",
  "key3": "22ErLams3xwLVs1X55BN9cn8m48bgCYnHtnTsb1K1oMyeFMuWEYa6SyowpXwHY69hrkL8L94GFfhCVvCfuvdqSQ8",
  "key4": "b3HdybCtTBGLCaqbP95BbCFZBFufBXsvcVUHC6AtcbMcy5h7YBvntPeqpUw8X3kmsogeq1NqRf52vMc553Sofdf",
  "key5": "tfFuo8XMLrAeEQjk4xRjrD5VydnmBtJHekHfymhC1m6bjZYcZ9Jqa79nZ7gh3G1MS7EGh2vFAT4FR9YsJVFgaAV",
  "key6": "4idfncS2iVo8DoswnGe7qNtApmTLPrfHxvaiY9uZuDky5mWPFHCFcXkeR9bJiaBXmSQbeCkvteNJ9W3MMDwM2xB",
  "key7": "AUUJnyA1YwfzkMpvTeVTaX9pvmh1FZC9jjtdpNTTgxWpQT11bBWZUag95Hjj9YNBDufUR5eWvUL7kfdJC4MxbHB",
  "key8": "MUntL7PBCo3HiMXw9Ny2493zzLRX5ckUgiWgyJ49MkJKcEtwBNa18uSJ9NP4wMrrnV3CG7tq93AASdBxK543qBT",
  "key9": "4FLCckf87Jw4JsyLXiz2Uuj3iEKM1A5c4V36Bt3f1p59Q7igChj1G2EqeWyDaTHgtsReYzX9nKBsJ8xBUByAtZoB",
  "key10": "3XjCoF6V6aMMmCBc36HeRzVyN4fN2NTL2fbWoDPJtM9Y1w4N39keMugB49XmtWyj8vwsw3EgDQddjb8PkNhCsmg6",
  "key11": "5wjv36rqRv2wHFckQfazz5YUCH3tWN6Y2MqdCuViZ89ZBa523osHDGCpGKzzcjJFyLdwzhLJGsXGcWBEgDhmzDAS",
  "key12": "22Re7Aeh6HYqTyBUj9SMBCpbn8BWQ8s3GbxL18qJ1exLt7v3gjQEfRUyoFn4k4ebiYXffMG6tU9CNQ8bvY9Axqxn",
  "key13": "TnMjvToFkaFNbFJKfurPDU4hLwRXoP73XbKrwkkGWAWk1GpDbMMztJAzekeR5n5z7NLFUP8K78vUpueagArZQqr",
  "key14": "629tWqZ48wYG9wyMSYQD7N7Q7f611myZov2PqiHQehMqnVECRoKCUdpcTwkJ7smZcz3Lh67GhZHrPFVatXc7LJ7j",
  "key15": "4tiL2BrXUzXGe38daV4ERUmzWvTYFJ39Hiy3U8AD1crbquggyWY6PKkuDwDaayKVrvPDxGd1KWoxnawwChDLomqe",
  "key16": "5jokm5nRV67ezLsewnB9REkpnwFkGu1rAHyck5x3zPrfkiSAN5fnyi8nm4opZPZM7BGKD21vsK2vpcJu36ecw5AF",
  "key17": "2Am7dAVy1p3nvPz2m5KHnCX1xomeMYEkgnQ5uVDk3h6RVmvvmXHARJwxDQYdnrCFBLrJXz2v1a3SMg7nESqTQAFY",
  "key18": "3WprGoxbPkXFzdx2fgxrB3vC4FoR27HosCQuaAkPU5oiFNrh8cSzs42YMvHQkuQvbM8horGbj6V8NrzguU1JyVFP",
  "key19": "3A6hqN9jvLTAASC9edMAxhy2u4raDmpJhWpKbBnP7r3RJhEb4kpZ5SoBnWiHmeTRTb3pZ3W28ZKuBLY9WpWuoiqo",
  "key20": "oSVxFoK9NDi235YCGyvFESm53uoLtS5xhnxQS7jaqaDGTiHWAAH3SED6VxobSP2VrPW5KYQ32RQFn719zmwMbuN",
  "key21": "4tz29mV8TnY5vb2W61dejtHtPwSg7PUR1aHCiM3EGc3irimEo9o6e7A3T6snd8jU4q2AGEim9949M8zVr13sRYwF",
  "key22": "2D2q8PJAopqrm3mZQn7a57dn2b98DeWreDswXrkERJbKwZ8Sixganr7CeioKSZw8ekqMS3M41bJ8Wxf7GPuC1qRT",
  "key23": "2s36AQEY9sVUYGo9KxZskRmQwSm6LZyUhGgL9MqXU4TCAkdSPh6mftrAbrhobsLoDRPDwUo9QsTGzM2wVm6TditT",
  "key24": "5ug9C5KynAVGnU6MMVMmtQbXPvCXJs2aBkAe3Mit5M5R5RovzizoRfs7uQ1LLxkdX7AmGJ5TEGRbrZWDU1zDJPkE",
  "key25": "2UjHJXGsp9P4j391nriEWCiAfJ4KZf6SnrrVnLAF15uQXqb5yQB2HTUtVkyJabYZ7KBufrGFJ2XJsHAMSDmXHEaj",
  "key26": "3rdKZwvESLTZDGwMymeg3UcdYyCAYtXcqKLnmrNdCUjS3GkpYuZrQNf3FntV9Bxtnbrhbgf8E99Ae3gM4TDynBEj",
  "key27": "2vJoa5MgxtMdQibdT1rmM663X5y6jGjdDuBa5rbwarktcC7EDRhUduytauS5k7DWHs3wPnqt8HNvMdESD1Phx8BN",
  "key28": "2Xi8FWmNZAEaUGPySBLR7HTDdUGjU56K5WhMA1QzLnFHYoepQqQCAnZ5PQdruXaLzBwNVW75jXznE42VYqwMjq7L",
  "key29": "2sXpNUVJBLKie8RMyiKr9je5qh8F2k9sNofGErRFMbqXL3ahorAXfAA1BbtwG7rjXgjLayKAXvpUCr2ACVDcCnjf",
  "key30": "5Y3BD8iaKSRw5rvTqNGx6XcLzmxB8CSoAokeGHpAAZccfbWrkQQpPmkEXBbRr4pi9752UFFfEhDBWEHk3ndFe5k4",
  "key31": "2F2dzjRYTP1HWLGZtc7EcSgmnFbU83jBAQDjaj3CqptnQkz9tNSPEH1rn4sAMC5gcA1W8Lw34aLCfHpDbXZ8m7HW",
  "key32": "5MhjiinkRh76M9BwjkknJJhoE7HaCJrbWywzXJw1Nm3AQA2kKUSYD3qEToACCe8fjPt54xgGF9eBLkcMExzCkBzV",
  "key33": "whhLqEUSV9Wxo3fxS4KMmUTxjKeEDQUNoF1zXGRzNuZVf3Dy6ffm4XFbPQQG2wAbt4hGzSSjp3vehzfah8GojNk",
  "key34": "38qH6gwY64hmiLU7xBc89rAdCraA5nMPXVjQacHMtMZGaoVyemk9zkep1XG8XuYdvmRs4q1yN61FVt9fF69Aonti",
  "key35": "52wMcfDguW7SUATjiVkWpb8b2NApHXQNZLCBtEjiwbJTnVud1f5zGHigubmF51fZyDkCaqDPwCMcZk9otUTsg4H",
  "key36": "434CLanTZkV8ekYxAo9NvqDhmTYXS2AvUrcSS8vLby89T4i2rDa8bHQJAJkPFdMgeb6KB8p8JE7L3trruyRB1CCp",
  "key37": "4NiXQV4vVBqgQ8fYc9RWKmisbV1A82RjoXRuKHZP1PX3J5v1bXbvuAQpJwSiukr9mDrN6gX52N2gSW7pubtxs4fb",
  "key38": "5WmSVejfj6RFBdNrXSo8AZqNSYpZgnLjex5FEirrp92vVu161QerSyJuwc1daLAQtCV37vrX1u8re1uz3weLdaUP",
  "key39": "5mewbNLwMVnDtHMpqKAsUpnua14yY6DYfueCy2UoEKMpwUGmZ8pZW9aJtWrEsTtmBJxkErfss7FjkLgLGLfGi9wm",
  "key40": "5mXENThGreH8PJrJVEHy3Xuuozcz2FhGBtUMRTor6EGdYPemJa7SFnNLi7Bj4akH7w8SZhpHJJswYDns9rJZrrgt",
  "key41": "56CReEZPdBNPeHvf3xytfwkRrD3Dmuzyqe8H2vbfzqR4QLBPoHNhjpxANPL6bqBwgZxpy83Bqsj1GhwCLnXgoQe3",
  "key42": "33J4WZTZ21MuMf8Q1NbNBa6h2fe4wabpyX95k2GnepZ8WcrSCMQGgjEsx4SWsBhtPjztrDEpZKvovy7W7GiDH5ek",
  "key43": "66xjU6BqTi4hvQczA69HGsaPdp6KWDvQUhMaoQmHCY7QbegCnRQojdWtwZ5ns1JtY8wmhoCEkuryESrSxcfW95tV",
  "key44": "49fADiNmbaXSjqxVGB4yU6Yn2Eu7kEfRDs3mQq23VSkdL7g5GHAaxfvYHvYjcDsHL2YXzrNPVphVv3zVX9K3RQGp",
  "key45": "UFegwrQ8Y5hUUF5zD4CcY5yH3FWmhmGh2wrCRh4bi5aK78DzL322PuuLqQqVNJg1bKLqDEnEMi2xuQpkitCQUZM",
  "key46": "5exMCKkfDrRy5AmacEWgZyU2S9aYjsto1hbdGi1h1uzqnCNLiqT8yjv8pzvnx47v7tr6TMB9MHWybwbNLaBe9XME",
  "key47": "3qDsUJSazYJ11dBevozcDUndMiNmme3GGPuKobe4Mg2xz5PH7y1f6S2p3Uz546cDcF7DqyZdXz2qofH2B7wuYnsM",
  "key48": "3rHiBshLeRPVhdRcEkx2HFWWVTaWvUGHArwujRGx1snSQ3fWmrBSJqMB2qeZNK21wZMUkMRa9pAyNy5ZtBwFEQ8X"
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

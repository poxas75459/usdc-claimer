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
    "3YZtUsPynwaENEhQqGGR6UC2R6BvHEMjo4r9sMaJZJ61k81J9gpvDFMkvgGj9x3WwuxyhZ936Cdh3P2sAMvq52na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55oEpRa6r3UM7iXRPbAvFbAAwJkTufXZWiBanL5HS397kiAPKrqhf23ofijSsGE8AEYMhtiwKrm7HUorGNtGihPV",
  "key1": "2DtbK2mwgJjKQwjf8itkyJ3RvYsQeNwERvXV3qMefgn4ck7UYz6v73DWe46M4MGmgUh7JqwjHRgQMEzQzHLSMv2Q",
  "key2": "4cwSLxAtov6ECQ2nDrDomJAeVepBBBKMgfiR1ngHTXTWkqY7BnZGXMGS1XfbTM6F3PzRDjhuKKvctbUa7PPAUfAL",
  "key3": "5LxhPAMjRPt1HAgVUcNGhRaYZqDSrjckVNoGsNFxp8wDmYzb72d4TgriiXU6sNDh7dbeSkYLn5hWdHqbRMv2bm1M",
  "key4": "4uUkjV1A6Xb4zp2DueccQvP4oyX9s9F5kSmr8tbzTNUrVztc5tKXo93D9aJg8Zde3tE2MLbUsESs3J733CrkZBuG",
  "key5": "tV7KWcUvxhtP5EmVSWfCeAGdqTwE1wVdHajDef24L6AzFYkhg8fdVwVo8Ti7ryMGpK7U79iLUP81N8DpgGu3GpG",
  "key6": "SYg7ReNQW8XkQsjGXx1XwD6FgjW8Yq6tGjeMLu7sDf94iAmunRQ3bfLVb2ASNR8Pc8bTtWS1kSZeQ8ZAM7LzfQs",
  "key7": "E6R3JmKXdjVRJEzAy2RJYcXdjyWFr4pqWghDcFwxWM6t4rrjTBpaKLuX8XrCEbBqaiycxkDstfBrqvxvmzfg95w",
  "key8": "2nAscFPuMJNcrJUP8ZsSGMdFCvS4dAMCBw1pje2qTfvBuXKp2UiZqfKovPYttXur5DxaicbV1yWfUpMsbvXgQJKc",
  "key9": "MStE6aQvx3oRbKtgR5tfp48qhRAkknYiiTBSnaxhyQoaBJHVTkSr3KccvbGoHgGPjqgrx1v97vk6Het5zHoKd3V",
  "key10": "2YYouENJWyUF3MkGkoA4pMXdCxNNXmD4ic4c3oFJ7Lpp2V1ngA9iC565jARspM7Mg3S12VtkLyCcPAFZHTYs65ja",
  "key11": "56753eZ7FxCE9gwk8JzwwwCXdcYgZ7ket5urxP3cXYSn96cogxidNDHL9gV4E2cN1fXvR7jz89D4fKbApEAYyLYG",
  "key12": "9S5RApQaTbodfQA5oYDRheZi6wbLNZi6ijEv6trGA9Dsf9gqsPLP9UFABqrVhdTGgPk7HkHQr6NnKiP2tATKqBz",
  "key13": "3Ycxc4kJzftikUikD9NjMPQ9WQ4qw1KSUc43FyBAhSBGTun6mzE7okYnazmNpzKk8aQjENVDDYhuezwkeD1S4rsZ",
  "key14": "2hkp9p2kLdA5bzNzLo6KEUJq1KRCgg1e3hS3pxFRKd2H8PDxpdjduLYxCZ6T1wHfsuqVtNcBkRE7vm1o4JYMYSbt",
  "key15": "5W8GuGVcfUjkt5gusJ6dFVFki5vStbUA7Qv3kmLziQbWcgvNSFM6CCKEZBxq6DvDqvqSarAM1vigLVuaY4YjdczQ",
  "key16": "4BD1GaQvsjRrGfPkNdqnheb7Y6fheVPFJSFJEfWnQbqrRPrrqps19JuNyafL9KDZt4NWW1XhprTYayDyQiuZEaRL",
  "key17": "5XPWuZYUVcXeRktgMqM94iTnK9y4DviWhso348HeTVKWWDUEeLTYFyrnis94487S5jtiqK6n8cVhpYSEHeE79hSy",
  "key18": "4zcXSM5cBzS7VqPiMRJo4wLt4jg62NPKZdQ3PK6WdvCH8tGNvxNR7izBkRXdXca8v2h1rs6BJ7BUQZz3mAPyBqxu",
  "key19": "2ZuQaAcCGgwzhzPZJ5CQ6A9s3rnaKk89HtZUgdzdU8h4LUG5yydZGh3NnbaNhxhiWZC6QCL9n5H1wGn4AxEMbapG",
  "key20": "3c4GSNzdGzJMeifxrAKWMEbhqHPUWfHuoV6ZjSfwTUE1hgfkjURxSgFq4hoBNFYECiJ1mLnrgivVEgakhYzaqMHj",
  "key21": "zgUovXwzytDvDzrs5LL2DFFzmLQr3kpKAHK8Lbg29XiD9M1MpH7FTbZbxQxs224PYkLEeoadanpFGw2uDq5FpPV",
  "key22": "3Xde2RFbMGr5X5ESVYPovJPif9376XcELeGrmUgQYXVBBmNjZAmNewUH3pau9WWMq1TzmdeouGXQHAbCXEqW8dE8",
  "key23": "2EMDmLgyCjVqQpCggPnYWpeqV6DiPwwJE6EusMws71fWPnWtRc2XamXQygwm6cYUBvdxKoUg1sZ8dFteQWiAnSqj",
  "key24": "3kDs8DQripgYKNpqQWLijCfjAX7a9aR2vC2VbwSeeEJuPXux6F9DkJoDgotLoxb6LS3DFCTLhaNX1NmTKEb8qiGb",
  "key25": "P3FwXRKCQPmKzvyDtmMTLwqHtvmGYBCZ8ki762s7kmy8YNLyqeF1a43XonP1csQWRY7LGSaMu64ueYSmPgTWeam",
  "key26": "37361RDNnNEf2ATgMvhzTkSGnR6AtFZM11kQtYbyzV6ze98GRHMq7nciKJiRHfRB7XhTrstKfpjN3EjknwgnSt1E",
  "key27": "BugB2dgQd3DWdTfFr785zg9QYCAQcnvUB1hCZiTy79YGoNnqDE9KEkEn72w6NLwM5g5HJXMFZPWWy6q3XLWAnYv",
  "key28": "35Xd2G1NHmtfwPCtrAwekSrj87uKrdePZitzjKQA1mDvJfVRyepf9UNze2sdHUFx9pp3FcsYLQQc9TSdMxF9VYqd",
  "key29": "3offkD6iAdJ2MPSDyyc6an45GmSZsK8JLtqjXz2Hgt9xVNYKq5u7c2diEbZLYhuex2SK3GcCXnqAHJnz1HQ917pa",
  "key30": "4L1BdwN698B1ZX2Lq9NRTcs42g85G6yg1jz9npPvQgykBGh3N3absbN38mb5ZjBPUWWhvC3h8UK4BxjXbBf1dQTH",
  "key31": "5x4E9j3CH8pz2HdvicpmjSUzRUEpDzkRf9yQQjKb4X9LTEcgYHHgcTrt25V1kTMKV5i45Gbkyq3jw8WamCxsKpCH",
  "key32": "5t84Kzb5hcHfLu8o3cukEWvN9LMRk5QnNjB6wsanRZ45gGECRu2XRiFnh2jiG6k3yJ2QgQfFN4vz58cBquMX2Y2X",
  "key33": "4L9D5kCNYLrMzgH5pqpHtK8gEkQZwcef4ixYeefd1yK1wEMw4h76Xq9cpsdARQqeyt1Kg8HCovNckzCSMjVib7XP",
  "key34": "4CESURJQTTe64xkC6fdMuAesZ2aFus5PfPLRhVWsuXnCskAsBwehz2fUioRHz8vEbWAJcDB1SynvZUAkPdEQ7y5w",
  "key35": "5JvTtRD4Mqjpm4xPQbQyUvzC1wskTcFWW3SAkksAt8pCBvFcEEvzxiGBbTTGBZsbPnc7DhyNCjoYP2bpJLUtJ2P7"
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

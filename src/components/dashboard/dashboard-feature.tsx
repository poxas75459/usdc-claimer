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
    "boEtro7rhNSYXU9Na1rDCtHTe3cVQPPXV8gGBWvoPeebao8Wq3A2Ajpda3DvsZkWHZp1MqLZmjEZ8AaJrtFEei6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AR8XfkYfJEYWw9skBy7KN6kAFUt3oacUaub644ouWFPBYXyywjyFcSgyxGBnZkj1vrKrBbcocibckZ2i5YY4Uew",
  "key1": "oZmbTxaJimfjLpejabFeCfRngfXVdEdZxsEtsWTM2jscfN8MN8WZnWrzpZbZvidJrBAFg6gVNhDHUFonxFMwWtR",
  "key2": "ZcufyRyUuBdyWBSLNS68K23BhW7gfzgM5aiajJYsbswenuTBf9GUN6RF9T4z317Qp7je64dYozeTmQ4miSxFSvH",
  "key3": "5vWbDZqL6LYGS8ruYPP7SzjxaFqsWgHdZZ7GkqA3Uk2kDx5E9wcSd4FKXCjpMsmHPhGCs1HkEW4ZWFFYdHXNXwtb",
  "key4": "4KXo3TZsLR1UYp3phNbQ1pGRQwNmD3DM4RSVGkR6ZTBXtCu9LKD5dHJZkBsPWpRNd3iEpL4WqiCWCfzRrHxQfp7",
  "key5": "5oJGXNUMBAEG8vFpQufpgbTAiTgzj5oY8KowXnN48tJ8irpe3AABZgdKMJn7qvvceUcaGDesKQ4vGzV2qJQ3qnfJ",
  "key6": "47dL41cgGSaC9Dc21DFw4VZ63CrQENP4PjVEUXhoDr7tsev4EHLVaoo7RJ1ZNBShp4kz1Kj5jvhsTFBQfVNh7jy6",
  "key7": "2JvPS8W89xYm1Dq6YHnsJhnwPjTZPHioyTq2LuDrGcZDgNCDh2DAMivKGT2iQ1s2WExL6VfjBVGAvA1XbDzzk73Z",
  "key8": "3mBgWgMQDwqrxHGSgfYkhrm375AEiBe3r5QYpagsqVQXACcdUHEjkZDDaNPabVUJEkvD2jvr26Fp7QewE5wxjfx9",
  "key9": "5C1AryLuN1ti4UDfgvJLzzUng9rNKJVyFi9pwxxXrwyBLy1d3XgT78YLDejvFw8ANyRD6mkxAZfMKimZULNfcavL",
  "key10": "4Ta3hbf9S9sRSJchbqso4Fn2PHaoQLNjg9nHwDJTgww98y5fr5p6xGnUtMJkCwuPfZvQUCkJTaSAwXCcuo7dKMCx",
  "key11": "aY7dWQ9CLKeoHXCHhdKrVWWVcPZc7kB3D3S3bkbrfgHfEYq2HdmQRqhWGsPvLxZxjdxFkJq5UeifyN1rAzrLarD",
  "key12": "5YcJFjhfxG2nGLhWE3D9yhUEcxq6zxECBYA8wgKLTMRKZwayZFSSq54RnvijasEZ13m9TN2Z6j9BwZuCt4Hj4VYr",
  "key13": "39zJp2cDvVkqFnm3pbwNidWbwZoAmXBRJTEq6yY8z9reNGTnvBjzgYaDPgTLPKhmqP5K6jhXyBza8n79e6kw7Hfv",
  "key14": "4s7TRNmLcxVg9UMJtsMVi8EdtT6Hwy4M3kii2FESyDH6EMmwNkeRvQ4kycVhoVFDSqUG5uSYL1ujCQgUSQTJpirm",
  "key15": "3CDHy9v9oXNHnEm71UtqVWWRTkfJaoRHh9YrhTXeS6RyJ3siS4TzSeo7QFmLa5brUa1mnQ44te2BmiMoQLMUyHQD",
  "key16": "5uRcEhTFQ4ELv5U3muKzfNFZQ58pb8ztutvhjBpxeiTqnDsj4kZ6qG6jPs5qCPJcDM3uF9dUdFPQQHxceNSEf3Z9",
  "key17": "rzs3eGjYZ9bg9B5FVvd4GhxYKsk2kzARuYnh5cCAozFA4JuWKktXjQcuVNoaSoQwn9zKJ94HPYt7f2xMygfcT75",
  "key18": "4Fi7gaQqnTs6mxkAMJbjwL3BTuZR33KikGQVYbdXVosNMe2Vz6HzV7Rh8x1ABJESiFrG2yZr4aW6tvVhe5utfiqF",
  "key19": "qt5e3TZgqE4SdBWJechjPc1g9WfNGvgUV3Kw65yCUVJ35a9VFFrgruNPpzEx76wjQbv6L54sAjbXVvXQcm1uv22",
  "key20": "2EAoSnt69YSaJWW1yUQrd5Z61gkCDxUoLTRWcX7g5Gu7F4vizgwx3fSuVuEwoH3Kf9eR82TkadVyKgSGJ2i9wbxV",
  "key21": "vzPEPVXew8B4CriCPsZodYJQrpGjLCt1XqNWUY26e2AVim5MhHgyieGuwhEXnGa3EEGmsVBET1jVQLQQTadwCXT",
  "key22": "52dSgWrcyJeyHdduxwSgCF7V1XVrC39H4TNNP7am3yMg3dKvddZDWG7WyHPYSDoEiWH3Y8s7Vqq86yVGrVGKdtt6",
  "key23": "3vQXEkXdV32L84viFuZ662H7wEZB8hRs6foe3YCtiN5dU6nwnsgFX5JhFVnLEKkq6WojbK3FqcY1c9aBxj6c96h4",
  "key24": "4JT4Bf28d1ewfX2YU2b9AUHbRCJxJ2Vd1FxSrqC8U4PhnbpaWnHcg5CwzmeMpmubnk2ZLoE8oeSFJXTj3R748ALc",
  "key25": "2hCrVr9vkZ4tctTvde4KTz5uZQE19obezMkKYrT8abAW5APq5PrBkZCUS9yRUhPrTMDuh31UJ1vZBjGeypo6qm4D",
  "key26": "58onCZCeFsSv6wSAPc3wRPgr8Ei6nPGCXr7ZBLvmEaXecbfCsCijCp6JMimM1DoBFjpqt1ofByDQ3PZKGBUhLHr1",
  "key27": "41TEmRSJwWt3NiEZwfu1xSiJjhL1VdRYocRQKB6QXcrtWSeYxSSkFLAJwWwbNQe7ALGiPexN6uxk7trEPbZoynUi",
  "key28": "3tUurmbn74iBVPLkRpMcaQ3qXL8RU62c36PCPQxfjDEeFMG6Ksebcn8tfBcpnckhTtt6DV3N2KuFFsBttgQRU6Aa",
  "key29": "4GMc2tLgKj3xEJSC49epv9nmoz3Zt6E6suj6YUw1Wi7k1EDyy9kwkiZPocAwaE9S1qhPZ4xfYaETfYTvVx5VRNou",
  "key30": "P6aipxCbEof3W4nqtmW8y56m4gnse13cRHAC9jVBE62Wa2CieVusfZwku8Baeku64tiiCmP5mqrtVopGedaxqvS",
  "key31": "4sSmvCzcXB1b6SZwD5CR6RoWWDooayK7QVSBewsnAewAR3KymASw3UUiqXWzLQURq8iFgc1Kyjwvhm5RuhjUKh4q",
  "key32": "5WEv9cxspahZrNDmYmrsMaoviG5UJZ45aPs3wu3tzKLhij4Rmsc6ckKv6PB6noHqimL4kZvXyqGP5Qs91SgksVus",
  "key33": "Z3xNLMNWqY1vmB7AJhF9vJPzaVWq5M4QBXTcqXbeF795B5bVDLYdYE8XuMeoHUZUdFXEeXjDcLTgm3mebVhFZaK",
  "key34": "5iCbacUpM1hsZZQBLk8BMQCfug1grh8GqNG4g7hADrRe6Fft9FhtURx9GgwRvgiZH9beDo5rth8ERPLk4Jub83p6",
  "key35": "2hJr9HCHdMfqVxZkpC2dw7cxjPf7hEWUtTVjGaJuJMicG9gPGCLRGmvtxZ62tiWPQx6pL8BCUdwYRC43NtN4NfSu",
  "key36": "5xetdes7Rq7uT15VKZckG8ujE92n5aDrZZfW9H4WRyq5VP2n8UabXfL6QAfcVLyGkYsVpV47mcpqytWWEJbPR6i7",
  "key37": "31rktpmuaUGvfGhQj6ZvBtyLJnoz5Y2Yn5WPFLBZkQFh3kgG5cfvwdYMDGcgQEEEA5t92kSZLs6uRLtR6qxwqMYK",
  "key38": "guHi9qYhFpw2BrBwbA39kny2msHLyGijeMudRccQDiHJSbsSTbXh7bh7QNKLSMMzUh2Gk2b2Ve2eP4dB3MmxqHE",
  "key39": "3VT14jXe3pwrZNWjMM1ex1psDfcVt89CoHkasxgZ1nw7sbq42CM4x3m8BF7gdA3du6ZmT9GybzJLXhim8VWG4G68",
  "key40": "5cvPyM3CAVMpGKfMw9t1MzLPJA5KZ5kSEsCezpp9x36ZJV3diyjneygBy8kTHUMJokrWFKDyHYrHRMCnbsp8pAbX",
  "key41": "4ih4HHM7D34QcdkoR53z2dFKv78KTyjg35QxFiX3atX6EZsytfpEsycxPLkuahLht58DNiCYVzRH5Evws77387Jz",
  "key42": "49B3UruD11o3bdFWBPFyqUoqhPFKhwjCTrncFLNfYnL7pZG7WiZ2NPZXqXBvwbeEHmVWEcjPdzHhWFBiVfMtB4Nj",
  "key43": "2ZxMondMGKnx7CPDSRuvNxc3WbwNiqkHWnds6c1TVki2b8ceiwh6NgeVsmaCRmptyyr3B49SLfGCe6yHcVzugsTE",
  "key44": "2uaniK6gVNjJcttXuB7U6rb5nJANJLAAS5y4UFPDGVfD6hLzKYmsr2JiwTcYHghyiMK38VyaVpPmPpUkbEk9bpxW",
  "key45": "2StRJDUsKXCNMAcPDhnvsUvPHfa1LGHMjmp1bdHgn2rhF64pD1wTeHQZW7y5iTVKqVenMqWH9sWkyqvbBUx48GRS",
  "key46": "5bfHcofNZn1PsqJfsrd4GBAdw5w2fssSRs4ioom6x4j28tKv7vSg4bMiQW4aJTkwSe8CZ6AThirM4VatEmwNiNiS"
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

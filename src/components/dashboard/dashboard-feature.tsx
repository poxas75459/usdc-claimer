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
    "53zZxWqyA3YZyfAwWgKXYAdhe38CBz1ZfXpioZiHyXPiDAa7dp2i3b8bmie8Z3WBLaueZ78eRahJGJLEnd7LHMUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52f7xumVzjwkJxTGMEVybGF4wTnDooSd9ACX5kxxwHiTzC5MmJu7qhQ4K3vhWw5ddtMAY9EfztJFZGWR9pQ5qMMU",
  "key1": "KAonNXYk5fXt46ZrsbeqFWRCyUaaTfK9mg25Gf345jwLahELNiqpQj19SoxLHcaK4R5K2ZGezAbck4JEnKfcHpQ",
  "key2": "4EXYDCg1rkJVLre1GY3qyjwA8fWKaeH1jXxSfzpimbauWkVxu8XKwLDCuavJqLRSi9YCA4TCmUD9q7iMLNaythZB",
  "key3": "4Gns7bJmExey43mH6X1UYjcYUkCAdEoSLCsjRy9DAhfLAGxcmtEEvBy9FyLRrYPUwCH7DzmozgRG8mRo52qL4iUe",
  "key4": "47pNdL8t2KXKjxDrCAKvJGdgy131wCj9QZqPoPwQjkdGLTzcUnyMCHgmyUKrvHg8QdbgqU8s1m6WQmAjpLr2rhwf",
  "key5": "1xzHJmDcQ2SUFKVtSXpHqxndbyeKwsaSRFmA9Tyfuegkt3v4HNM5MUMeWxxUZdWKowyZW7YfayrQvoaUiwJ2d1J",
  "key6": "31dWJqbCr96daaGByd2889ocXFX7rRRC3UCVHsN1V796d3fir42Da61KXo1GRe6AwyVk6orUtNAruDHXTxJWojZQ",
  "key7": "5MMp45Mm1Nsx94Kq9Keg1dXJLYSP5R2QTWTMRsPHS7sJmhDHzCZP6mfKB47QamJ2y39vVsB19hCcLA6EcNr49Xb2",
  "key8": "3qEHJsj9C57unYByrtK1mU4B7Fg7oSUz58uqk9qCwd9VUZBjGGj57L3bQQYwHsA2vowqEoUEaZSJ4Y7FnbqnGyvW",
  "key9": "fJLXqFrBhfJCzeFwG1HzWP2H1Hvsq6x61pAy64k3h3pajM3QDdLu4piMLHWyHYsqz7YGL8xYNtrYwcYLuSdWE7f",
  "key10": "dbYK5R3bc75Vnev4AwCqyUP7JxgJ1RSyDJfymUHFF5qrgyW6tDtPfpDSWXQTdBXownP8H95Ptc12cD3umZ7UKHC",
  "key11": "MDP33drrcMMN9EnbxnhyK4dJN7f9rViVn7J7jqVCGPKCujYQvGeuyoQ5Q7kv8hKjddSnJyuBRXxGaaSCd3HEpzu",
  "key12": "4k4fx7nvTnHN6zdAH2gHNw6eysRcRiduNmQsGgXR28iR3K9PwkrvAWpiCbhE96Y2xdo18skVQGGLDRCx2Ne169K7",
  "key13": "4paUwNThZnWPCpS7GfrveoSFYYiYafmEq5ZCDCP3aFqt7h46vUsbyk7jymQbYBmoAEzWbAAhQ7owvP2SU3y2n23d",
  "key14": "2jmZGfpaTR2tuJZv4p65P15ZVXvxHvyvC8HhAoyff7g4fRx1t5Td3v6GkCFJPJLAyTNLBkUvVUtwXtUqdYyarxRu",
  "key15": "61XSLtHCUAgsWGnr47dcz7GwpNte1Di5d9NzVxfYLRz5VUR44Vbd9xKrXnyZT36SQZWWxPbo7g3MQNpj5BMj5jNB",
  "key16": "55ktwksFmjUsBc7UmZu2Lx5jpPT29UAuXznupMoe4QUmygQ4c83Z9oepBWnSWWEJ8oqejYjzt4XSRp5aWWuRigT5",
  "key17": "6y5mAHAvunC8bhx1WMsLqtT4KN25iZmx5hSGC9w6BpsUpnXkGr2uCQ8VdijtYXat6E9PaazKSGSk16jpSHpoZQN",
  "key18": "67DmgH4xNHKz9ytR9K9PkacmStAww61C4z9v8QdFfv5Co4S8ywLDb8NtG1xipbBqutmCUxY9byA4d7yXJGLNMx8q",
  "key19": "4cjyL5bdnPQs8Ktjixx9trkCPcNjVw5JwcdbhHoqnMmbf4V76PraXK7dpr8UxEMMvVWAfNezfuboVYFXTjVx6Z32",
  "key20": "2Jp1Z1t7XHPPjRYSYXY351VuyZQSVf7RLj3ZnNdWLaicrExMEWYYP7oryPupd4SThE12E2YAtNxwsuPoPqXvgJQ3",
  "key21": "H7MxGdLVP3QbvTgJZoi7DN59iAdpEkhonbxyX2gEczmMVRhTo2ZmNAhoe2VrLUzyXp1VVf5hdybv6HgZH7Z3DzE",
  "key22": "446e41ZPHvvYRWtWEJEgQXMNNPmZTWU4kUMnCDaZrFbbb7q4ZY9owueMiADw2DHkKADtdZwEgzjhhyqH7zsg4vr6",
  "key23": "2VKTJh7Q4pHnWwkqb3DUeGjpZuHY8GEYmYXZDwzRVHEthoeEyEwU5CGk1WmnKTEXHazzwVRerL3vNZpdzk5wPcmR",
  "key24": "2UHZbJn5K4HrZov5839ZSAiP9yD7jbeJSHBW4QX5qkYDe9ph6JLYTAMu6z5MAxuPCwQfkM2YLvRToui4EZkaKxiF",
  "key25": "wHkdzFvsPKNvdNh5yy8rhP2fhamK6BkV9apoSJrAMVsi2DrnTH473NaHxVpFNz5XPfWeW8nvnc64HmPK6X6K4aK",
  "key26": "2Ao1U5Dcmu2ssHueU2iAnUHnW58Dp1T81J92icnZPTNAiMytKaHLEzEeSxAtpuYXmETMYUs6Fu4HR3vCuswW58xv",
  "key27": "jGEAKtueG5BP2oqsoJHKrMCYSz6qzx1VZnFcr9zaKsBiVc7bphh4wEhqEnCscpUvvyhQfWpJNXoD1R5ktsWUvpd",
  "key28": "25FuM5Tss14JYzHnDH8Dh15EJhRmeRMcoDybwrHFFNs7pCtKHMLhGhovLTj8AR2LGmzQtjkUCM9utSMJysnPigtN",
  "key29": "558U2yDbAFoSsVqWSuCMKZ2so3RxMkMrueHwXDVD56BdqMnfH8fcCMBoX4u3q3qQW1LFHS7L1wA2ZktTTBA7CGFD",
  "key30": "3HDrdM8zschXGsKw7H3hGWUCm2jAfD3STRre56gkeKSudpX6J1bmYRA7m5rRjV6L56mhbKZsG4tbAFiuKPtY7GMf",
  "key31": "3J2wuBrYa2cYueB2z7d6hSMaLKRBDhdjg9ouF4ZyHguGivYqQxLMvRWatJbVMPH8zzvgGksp6k6CCAEJ9te6RLb7",
  "key32": "4JfvHJEkNqtM41b6qYyxpCrpbb4PU6edpSdzRnzcEu38RSqUYL9nXR71fgQo46V1XB6MhJB78wKa894MtmYAAaQf"
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

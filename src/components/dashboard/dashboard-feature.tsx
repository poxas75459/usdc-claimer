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
    "41x1S7nwGvm4YxmKFGA2X59CqPfEzAJosrXQxE6RD6TihTW2HNLfBAbKmwd7WtjycuxvykQFu2RevPp2RStf8HEv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rsnQ9ZaEKbi9DhEx4vYM3cHr8HcZ7tUfdDodCSCYS22CJJPHHsz5WPm2qv6XW7gpbNk66PU4ojNdZtzbdBgM61N",
  "key1": "4NBUh1R14CSAGevkTpnDq48XXruMfsr2Xx94YoPnwKxZ6y3hwVuYedEsA2jKQnCMsf6hEvhqTCbNfj3Pnha8qgNi",
  "key2": "ZC4WQ9izNyPe86fEpeo83fJgrzJ4i9Fpvj12Z5mrbWtTE2cvq9HLz1EPkVmytZj3hobCgTM4cWk8Nguwpn31XtN",
  "key3": "2V7VikU3pVajZa7smYdtnTHJJEn3pUeR9fFYEJyXYwP1bbahj6M5jyVfVn2m9uzVqihL3bQkHQycVzFaaA68vm3o",
  "key4": "kTTET4bxCgJ9SGyBBbB4ZjmecYQviVNpDLTcW2RtyNrvuDGmpDETmQhbikGpbuRrbciZa5dzDb5Fx1nyFhqpunz",
  "key5": "3puC7ciUDpP1qozr7HvQ85MSd3pZSGzaW1y4JKmweKZQrekj37fpxwb4Zjhbf6LzB3b73R6WJBNctNMBUB6N7F6T",
  "key6": "Pe455u871WUp36PJGR9SZ6tSyFYKhbf3iAA3r9PoTYneNhRWyXAPa1rnNtXhSwoJszp4FcNFmhUmX5qZG8qqovV",
  "key7": "3yW8npbcTxQFE8i5KD5RR5aJ3BEVHifiAXNccuFJiptH3CUa96NUCKvtitg5q45przvfDCKsGCdbJSPL9UMY1a4q",
  "key8": "4DDVwvgdW4YLpNQSSmxWrnwVowrVyX6YEriCP5EgPy4oGvfGoWaBj9Md6VZvKzryZWv57wywcfE1JorM3F4JzxN1",
  "key9": "3dYGvpw8fLT5dzhiB3YZ9Cgs1C2XSNEqGzouF74iaxZU7FdUD2C1AuEDtE8qBc5Mg9yABWyRbQ3rPWhgNananywu",
  "key10": "2gSvrXBcfqr8gBU4dWPr16Qoaxt7xLboPhMjzvdmMFVAfD9UAtXuW7t47N55dYb6oFjCdmndGnUKWk5KGYDv9per",
  "key11": "5J3mmswgHxPJ9krCojJ197qGj26SHTc9w6mU7jbH9FTs7GCaYL38kVemCeEzdaK3VHVqCixJnJnVL6UpS9UssRkC",
  "key12": "4rRjXibfaJsfH1ukiphdSWZZaDiWPARN2H9bAiDX3QLTwcxzLJzvFf2aDHBE97carjb2DQw631afJy26uULr3iKv",
  "key13": "5YGFjx9gtn3hdFDric6ZwRHD42J2ye9cEW7gTg8UTVXFkycr1yPqXB8hkQkXgNiwWT2JHDpWrShJLaXRZZcaArZe",
  "key14": "3QbpqabxPiqQ4qkQ2vuGNuFdfTNKfkFEkJb7qzdVDrLc6DW6EGGCMgkXbuAHDa71spsNF1bPcTTuVc9eEnmsJsMp",
  "key15": "4RgxseSGLCWoapHJ9iZgXjAozp4nDvLLjTmRb9r7Eg5YzMbjsnhcm7rgquZZ3bP9kWqqreaHyJ5Z6ufEf9TSfLiA",
  "key16": "4ozGG3oQD9xBR1jD8uzkUzY346P6Fbr7ZAb8bZa345gAneEQKPvWB5g3dHHFMnvQX5i6PzvdbLdAXP1T2kVokGYD",
  "key17": "33TzR3Z2q3d3po9tKXCy1sjtkXVqGy9ggwGngCtc9wzx9Kc9f2x7qguVfmjFx8NQwKzQJY7DFwJ6bCWw9tmNannM",
  "key18": "5qVyHSdgjDk33irJUd2sFuxq2Vzevr66n6P47cLYPRhPNri5zWdiKkTGnZQqRbBvCEGUSGG6GhZsh3it21nfdGbF",
  "key19": "4TwLfpQRN7xcoBFUte8347hDzg2BLqEbVgC8AqjSY6TAQP4ixwpBNSQb5rNZtw78nem4Vd3htQwA4mwTuTuhURda",
  "key20": "39r8xmLTz6vUFPjf1f6eVeUzmtDfYCWdNrmV9rcDskN3RE6QD1CKVVm7BY6G4xn9dUXMettKhx1xTLz2WL77v8Pj",
  "key21": "2m1HJAZPigWhowWopEdLmHGQgc4GWRYmjswwV8akfjgGaqXgoydRJRJQ6SJvHmKsL3siwFEKLorkgmLNppjESaBq",
  "key22": "3xLBH6gs1NQUBDYT3Fd7nUcAjLjxhCXtxFbLFU8xvH2c7EM3SeAfriNiMpoTH1N9LroYqtfbdyfjomQ7aNU7Cjtq",
  "key23": "3cunAqiBKuigXfFrDiDKsyYj8RVRMrNB5ngR58UTMFwhBUbHf5QtDjfmZudujy4BWjaovt1YnrsYbHe7fZ486fg8",
  "key24": "49fJEhp6jTdYk3SppuoeFK4zi3LSiQpDNTGrYTejFDsVxvXw1QLNtLE1PVrHfFA3wHxvVDiqQJSaSJmbQYKzQ1Qj",
  "key25": "5zKgCJJLJWbBiopabcJJ1J4YvR3G8dQvXU24ug7xWGHrGkm98334jXk8ox3TdZN9kZdjYpw1MdN31bCouN3m3gUj",
  "key26": "BtEQ66dAXN5QBpkMPnjCyxVevU8G4esE8m2J65oYLg2ay7GJZwJvj3hBTRAVXSiuDkjtBFZVNssPNgaHYrwPA8n",
  "key27": "5PhJ6p1utWZg5KnsZgS7EwVcuZUBAoe7NwmvFg6NogZuKMVBQmPT51KQpN6CYcjNpY9y6GK1upS1mhqgMjaXucGy",
  "key28": "66NJFUB59FCRGJBmzjKpEc7X5rGLH2X61fnNAnwd6xfba2RmsRmy6DMubhpn7fDa97aJU6eDbqyLmmDMzu6QUX4f",
  "key29": "4MqTvQbFRBD1t6s9vivPUKfy3VXq12MDxQMVvHR8NH1s4SYaJCDchj2xv1Y1buBXG3oLxq7fTX6urYLid8v11yNy",
  "key30": "CQTzvtKTbPPg8JPTeUkH22ZU9QTGywb7wixaHZaibdfd8k2NKWL2LUwQHTpq89iLJGYYErTRB3WTUhYAbd1zTjJ",
  "key31": "vjvrL9hBjGLZGxHc4fUijxXJvvF5oTg9gZfpfsqKFCYTypwMH49E7GY11WRY1Ph7xHZzRnVdzM98goFKPy2GYbm",
  "key32": "4iyvStRsnBzzrt6zvT8CKq27T7ZazYanrq21YPpWv9jAjZVTTARPhKmmjHavhDoq5srv9GRZj7PErW4e76m4KLTS",
  "key33": "xzGFWtVWmiYMaAPAqs3HPGmZEMrzsHByr9wDSPGKxTKiXmAYdQv6oXLRZEQEj3ib9jxWMQAzJP1j1Vu49QXjXAY",
  "key34": "eRmav1GUgk3DXB4c4B8XSiRNXEL3bhKxvYJjiDvEwK4zrGigY8BMPDnzJSbaRJtPEG9Bb5HqDLZ426gupQrWL53",
  "key35": "5zKTsczavCd5ETV1rLQTwK9R6XVFhHr148k7xBZUV9bdNbrb4YFvsESYeJHU8q8aDW1DxF6AKtDxSyUA4x4RZFQ"
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

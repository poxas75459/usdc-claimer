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
    "26jk7YZXdEeMqfF9tj8k21K6dekgaE8fHZjccuM4544Kva28SpBiCHYABgnB6amNLWmURHFVXZhHeBDRmzgkb7Qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UG38gMVrtyggt1SeM4L9j3RPCN73Y588v5uKCSmssUTFWL2bAWkRKcPfNMY33PRjio4UWuswWJyfCVF8EafToWk",
  "key1": "2jcNvr7tKopEQugXjCxC5YD263FBu6s73YtFr8J4SdQoQ57wu6bTC9MMXAgziJdf8CSxiu2pE3zv5ycQ2FF7rFD3",
  "key2": "5rDiWoeuBEmWjL9qzS5HdL9kZ24a7nTiJENnTznxossHKn1BSuLgW6EzAwLMbxpHXyzRGUXAEekFUbAMs8maDEX6",
  "key3": "SKdkjFuJBwe2LvJaRnxSA5hgxUJsP495TzHQdmJKgZBW1iof1ymCZ6Vy56SCz4vxWWTuVL7tknY1wmZzusHf2iY",
  "key4": "5NZXvJVpRRFrTNqJKQ3TwSH1AyovsEDBJPgXad23LX6ndPNmnhPUphPg1UUBsyX6Zd4ZtPJ7km8SCwoXBnVBGat7",
  "key5": "4kiP1oVmkAwBcj8rF3R8DCoE2MReRtck2PifZvMKkR6kj5fkCP1G2anFq79FdQgqbZLqwkvUrWa4DEnbmWdvutNK",
  "key6": "5fkyfCuJhF1s2h5VbSsC9ofNi4C8WY1Me6JecyToDqorKT8QPQnVUfoGF5bHUJqeW9XSxeSFRTkGznEt2RTVchjk",
  "key7": "cFMJmEu6kwoCi3QK5igVq3dnep5BU8ptBSP7iQy7fGq36KiUWdUq9MAFBNUGiKydCgtckP5M5toKQxjiKmY8oyr",
  "key8": "3WhMMXB6oXD7PPMr2QcigZCK39jHub2DUG1yy1XME8477jRjdpGdaH6EXuM83W2emSRxiejGQroHjhiypuoZV8ZY",
  "key9": "gDLYrqduHXSLi1bVbBQFjTBGZbragDvivQT5eicUwLAAoVZtb5G3qEh1JnJcE71zisDVw4dokXZxAqyZeSkZjRj",
  "key10": "5VRpHiQZUqBCNa4MedBd5dY4SwxnX8SC2pdfPnqnTL1nBwJW9uEuLPwVbs3An2V8tab5SfF3tm3r8znGnpPCXF92",
  "key11": "4sxiuiLNRMvydWyX9B6EWE4HaELdWmGu9cVkoD43XrsLp9f32Ck18mx1xajP7HSvyBcRjh52MS1YisqNmEDCvA9k",
  "key12": "5EzcZrKm1XGBbFauK1q2SXBis9kVfCwrMesKHabPj6d2aeDEizeMGPd9Eabfkm3SJyJwP8Tgbx1TSL3vwAf3VRS",
  "key13": "5KXdrgKg79rWbg9Ga8bpbanJqzZTeExWzrNBHdr2QPYvmoRhTFKVJV2dQCCNrHKJMwfhnrZLe7fnTM69P4PoPTHH",
  "key14": "FuTEPf23unAkPekP9wAT4UYL6FLGqcwZC62qRTDX5eKjc1ukE3gvmXhCLYC3Kpp8Q3HrybgY1Bsb4p6u3bT2uME",
  "key15": "fhka9LhuU9i32Tq3ytC7FjvEmdKquPEpMrdehHhfHp6ksu6cif9qvaaus1R8PCY6YuFwMpV2oKNGECwHPukzEj4",
  "key16": "5kGwni24bbRGmYS7qvn2jnZpLUn1Vk7yd5SBKHDScz9jFZrTLLhBbqwfiAr5GeuRKdpgV6jDGGRsfZM48ZK81GJc",
  "key17": "24FAj4ZniC5AEtFv1B1NF9H1tFKbvNa9sC1nT2yNSGkB42KxVt6Pr8QUnxz1RH2SrFBUvW1nnnwkgfy43hzGcTSH",
  "key18": "kzGYbGGiuEa5LnNunWyTAnxnAGeD6HPkBMyCgZ5fGs9ZCfiZdi6wncXfRRwab4xiARHTwBtxMQessZAgeJhKFf9",
  "key19": "4ZdHNvy4RA4gn3mLNanJY63hW7kGcKE9KXHCvr8jNKZMdg6gGjKozEjLWXv2opXBEXHV8L1zZmY17AmZQ2D9gp11",
  "key20": "53Fvmyhhm2Tu2aRb9BXwNxCAFhHQMLgWudgNfYnAHJkCseybVhqACkXWCGmqV2N6whQyBbwEJutAvwmHc3kQwkte",
  "key21": "3WNAhgHqQgfr1PVYBWCm8qViUG5Xy7wD3pqcz17oDCTEQL2eNuMBpMUdkmsjn7tGHfjhuSjBn6pdg5s8KoEpwdyY",
  "key22": "rk4c5UtL6kr1AFDGyQB6ozjVyB7ioCwGoxx1ikLGnXBq6Bj3yH8ivjVGJ8dxbHHv5XyM89um4esQ73n85usXk7J",
  "key23": "5kQAv9kFCPARCKoivDbEuDM55WyuhKjVEU4Whj1MHQGqgm7o5Hd6D79t6b2Djp6Z31haHN8fh4bVJdkMuE1oMzB5",
  "key24": "VFA4L8Ey4pjoL2LbXQBvAB6fmqjUzkTpHD6qnykcdWqwVL5ERfHqS4NQQWTfi7C82mnz74Pr2Ut7jz529JL7ppU",
  "key25": "5neWVR86mUio8nXcVZHKZJmHR93WuRkDyYcvXJ7TeG8nWcZPDd6yw5ow9wAdgPUkMYnqKNu8LQ2mf6ZAyQjteDsf",
  "key26": "YKDuvWcb6f5PGoRjusKwXvPEjsTcReD7j7STRKcrQv7ya8rQwy4pdMd763ymiaZGzTwhRZWNrPoSzRreVZwJoxQ",
  "key27": "iy4KsC6t4amTFipE2bopSnKzqc33RjbLbCCY7QqdnGjSM8yhycbESJqGYoqW7TNbJne1WMES9H3wTtwfM7Ru16u",
  "key28": "215ezj3oDrF7boZURF7372y4kszMRMyhbzyvHzWSpAmd3Vg7obpJcKSGp1hTzwjVgbTkQYixenmUzEAtpdW9vKvF",
  "key29": "DsWzVxc5jQi3uQ1Zkw64LXVd3TJr1yzJwvoUK49fbgc2zYbYPn9D6jwWXBriYJWozdmaifWfuXjvFW7bcDTTEss",
  "key30": "4LqWJcMR5wnuJGt9htAcZfiudzchAjwcYwCLDRFvaDPCJMHZyXdCnmGCkC5HgjS7ks4xP5i8V5kWfDYGEH65ntLy",
  "key31": "3MAB1zdvCfN2zb7yhCpkWxWF1fiixf1UqxXFMmQgZw9krVPE7SBVQRcSVBbnwVWoLaW2ss6GbHZf5xmf1B2dEgkU",
  "key32": "KvRMSPo8f7y9bcaJLkPpB51LLQyM6M2WZCdhnoyYDAE3oPeUjQN1YpwkSkCaApddfhBg2G2i44qoSQcpZ7DEysi",
  "key33": "4xZ1sLRDuJDw8M4UnRRE8UjmPTc2WxKNN6bPhQhK3xcbosukcpgRBxboRB83f2EVRMnX83CDzHBnrLNXhKcL4mbJ",
  "key34": "5CRpQfS9C1k2RZuYf3UVycJJoovbtEuEUohD2r7rwENXjcQKLpnRv1fF8CmU4wsWt3wfBVZ7a7RyA5pZVgA9Q96e",
  "key35": "62jMHRMFhg84jjn7TkBFinkzpEY51L3LumDt3tZL8cmwfFkD1HoaAiaEXU21WHRuBfgCX3j5zbXawzrqMhEMnxgJ",
  "key36": "jRYsTvYfS2rKNZrACrhQ7z27bXgaqWcn2jTJrXKbhpLpJEQzgaD5TXrSxfbJCYXcarvRZqrUJuf6Y5eFy3zjCTQ",
  "key37": "5jYFQ26QgvUeGfdka15UMFmZ5xfrLRq1X9PpgtNKjtimwWFWcLPwvaLrrn8XBQoPb7DqYxyNidKRx3moPJGdANX6",
  "key38": "2vJDYYpvqX4jNnhU4JWt4o1jfNLVYtHgQjxiBgXEkTDPCBabrhAFmWXd4oLJExGwVyKJGDjq3UCFbd4SqJMYZvw8",
  "key39": "3UV8dy84Jtg34dAkfarXVdzHTHdqod4SfMCAviK2dotHwaxYXjDNsGyD148eJAPeqCvf4wrj8A8UVa3pmLB5bCbi",
  "key40": "4nZFHXufLC7x5uz3G4GpSLLeiqFvsbiu4sWHPLVkL8BdnbuX9THvfqL1JXrKjaWf9AYXzwmTRQVzWqvzsaK2qCPo",
  "key41": "3eycYbeturYHTpTBV72Yc7mRmHdccg3oFqhv7H1Koj8RjZq2DYFbKda94FarvTrwurNAbd8UZnb4PEC8k8T1JseY",
  "key42": "3q8dKAP1Nn5oa7FqEaCcxr9w6sB2MVHonvKv6cgSGE9oG7VNNsQvxwB6YwVxgtpv3Fotg6vS98aTsyJ5yWbLqdmR",
  "key43": "2CrgFPq5AeeGXX1d2axdc2Ksahm1sCtieqJSUnUwLqi5cakdoQXzABuYXQJfYQqDYotAGxUxhRt5vGMQ1BckRYfU"
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

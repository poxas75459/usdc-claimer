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
    "3F9NCFZphWihNQm3NijpWv39NQ5FwNF4sG5FKwQjfkDsGsvJxE7Mc2EaQAnnvayUZB2brB8A8rCetFf26CUSQqay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbdZ1E8Rr2W6q61m4tGA2FxJd7Cnd1myVa3sqmzdmJh18HC93tYsGo1xWx5QW1GZATyoaRG6rg4WBveGDPA6iXM",
  "key1": "3HFKWNdTXcXpEvC1SQZwT1zjQYKUATLRdmxUSk5akEeLBTLVvswHiUPPJD2992qdwf5hUuSqtmFb93G9PPXGVBs5",
  "key2": "5SSAiJvUyBh5qxgx3CL1fNxKgcNba6Vzp1xT3tScvRWPSFfexjL73Tg2gxNkrA21goPvj12zjuUpiZPu3YFb8rZ8",
  "key3": "4fY9yNT5VtYEx6gNFKWWPCKCS5mDYbAifUMfcQcSYEtVgCagAnpC4fDkw63hQeV32QrDWn7iM7Sh1fiojptSbxnX",
  "key4": "1GQpJ6xbcae2C3xQCdQBThCZRMckbaT4xTVgjimKXbSvhFD2u3nfof9dR9bzxHz3uCogb6dXKVN9aqLKSK7wE5R",
  "key5": "4vSxKsGXqgT7pbQEa9wVYy11VvJu3MbHy29DftynhnosNBp9rwG8CYXwP4SNVw5dgMoUgPyKn69gPwq9byWAtkLc",
  "key6": "4zshXYipKWHjuCWr87GMmsn2byWpSTaksYc2Z5zEBXruKnRZWdtQnbVADZGj4DpqpJvKKkeHw316GpxMgbYbmrqc",
  "key7": "C88oDeZPnmG5eQHDmU5SxNstoeoiLFAoWNKU2VXB3RxThgQ41L3hjqX2pPeRRmyeqjsDN38Vr5N94M6mrYWvAHn",
  "key8": "4AGpyHSwU8B5RNCP1RhZHRJjdgGwceXK8xZ3CHunhZrPuAYpo3s7CuK1jsctSVzHNXQhbKg5Wuu8aoMZRHQd4WRc",
  "key9": "CSsYN3b4J9Rp626sS9BDXMC2JxZPSBfWhjycSiF9gzuKk4Q4VWEZrX5J81G8RKRRb2wdkLYTk5k6iCw8efBQLsD",
  "key10": "ccxtBzTRHJDbiKCcTY4Nxu9yXQy9hDzCdGyY3DdVSeqMZ2u57JE5yMN2J6vXYbjf8LgFNfgfoNgy8bjRrgSvKuD",
  "key11": "4gwaN6ZuCty7B9Sr6F8zSoZSP2EhSrTbjUyin6RzcG6wKMsGSPE9DiGwojZNy1SotEnrvdgp7GgiW8BUf68iF9nv",
  "key12": "3vWdqkT3pgjiknn3GobZ9FA527EXywCZvKHiC5hYMZhWWmVWqAjTZcXz5Kki3HLbtaqW1fCMtmYdD5exDjGrqY56",
  "key13": "49iDGLaJsS5Cy5PAncTiSfNAq3HSC7HzovzqhK2wERJUvQh5TsLbTrdFrucw1ssACiKj6dW6YeJA862YFpmPHJTc",
  "key14": "57DPC39MYDhTkANSHe96zaL2zYFMGSTSbAaiDSRmZGcVVS1TC9n1pjTF7h3XGNrJdXsodjBkPTC2wu5oqpbnaNLX",
  "key15": "4mApxhp7DDDjCnDaqxVB6ja3ahAz5qc4sjzghhoQF9UJ6CE8SEZ3KT6bM57QXZL5NHW4kvSVTY8K1FG3492vUMXk",
  "key16": "MHMdgHndJrn4ZhztjBAp5CP7jJzHUmSJrhot7fimyEahNenXBGZiZXw8bfBoCSs49xHoxzvhRi3kLHdnXcbFLs4",
  "key17": "58TXoeKACSee1rYaqmr9cWMXHdZUQmzY8h4fQBKaFE3ooYkoZpTx8kmHepLw7dyuruF6JuzqpZU17S2UYNoFYMqX",
  "key18": "2EUwusmfsDfQEpd1CqJtV6o7q16BhLxgTy4y5MUGWMqHQNYg3TmXXXg4f6Maaz9SQLesCAhiZLZNwLXkqH4sXJiC",
  "key19": "nDpxJ2kaQtUVL7aUYRokggiddBRRhoKfjVmyQqdTSde4amAmXaXMBeTAg9gRvj3x2se4VxZKCyeETVokQpHY9v7",
  "key20": "64JjC9XVgZSDskyUJv9pMwydDvMLhNLwPYwjchoWbiYSnHNKXNN2ZUsULVRpCdSvJgUHDTnptXczTbmx8akYhbmH",
  "key21": "2aN2xBmCrJ9mwDVo9bJSupa3xtxTAKzwoWa9cV2rjE8HRevqiY3LjRFHEdhUncsRjSQyjUb41LKbYzFnp7CBs9Lf",
  "key22": "4ga9njUzppF3KCof2Y2ATfbYpEBFXynApxAvVVwMPqEhfXGpEDdDX7ohYbC9GsjiN9Zv3Gi2axKCE2Byf6GXPZML",
  "key23": "4VMVRPoyLyhx44zZHQqVb8UqLcVcQPYsHzD923QKhBgHbdTGsmB2yJcfPvXL7D7u8pCT1BsL4wPA5iJ8mxr6fqxU",
  "key24": "5h6h8Mim1kbkFE73n1iphZsjceiAroRjsvqWrQHh94xfS655ihxRMWBfPRFQ8PWDUKjrWm9xQkT75tM5svScbgmv",
  "key25": "3PEyToSf6mNsMjWTC878mqcrxWrH2JCNSeWNv4ZHf6esDgUXXWf3n5HkuDPi5CPvERwMYZajicqkLBUj8tfVupSk",
  "key26": "3aYg9jmxrjKs284RUQKJ846TfenyWMRUbJmbjUti7iQ2vbB2Ne2W9AVp9ApzSPkxkMU9MR8gSWMR4GKfeXy8e36T",
  "key27": "442KSBYwtQmuo4Np9X9AEvYHCBRoaYDe7C7bKYQL3JTyUqLnAhQDY7ugXLS6RZ1kkQgUVsmpiS8Jz24zTt6PD6Ak",
  "key28": "2tiirqBzmadPn7BKkrN1c1WbZjjSjcq4Y4a4ckRRMX8WEHh3U56YwVAmQRu8RqMbT5ZE8RvejjzkkWxDBgbZY7qx",
  "key29": "Me8FEpSa7wz6Tfas3qETicE93kmB8RTxQjvfAsCiJNw2rHecfnUff3Ye1rSujebQHCyCrdGfJYmzhzZ5M1aB8Pb",
  "key30": "3YTzv8bYhs6K5Q98wgkN6gWt9ZmVdifxZ4kJLZojcfw5tBK2a9y3yZXezFpMuHs9v5kawtHKomduJ9BdKXbkWDz",
  "key31": "2L6BFZCYjRPVu8zDP2rqNdBUauziagFqgid9kJLwX2Za6KknHJ9NzcSxN33Y1X6QdfUc6AtUdP69t24YkvjLkfp8",
  "key32": "wqRqB2ws91qicnLywEfVTojnvN3GPoJHDxRHh1A37o6Rra6x6V6oqDDQ5jsX72f2UQvGxHWYsLi3TpoWmbXSjGo",
  "key33": "2Dr6qHqB53LHPptSfZcZjwKhcdhzGz6LP3oXPvA2oYiTAZbzjJYLUY7jPFg7RkYuxy7vdm1JJcN9zD14JL3ezc9H",
  "key34": "3ZHogFZAFo9fSDtWVjtbh2WSX1AXWxXn6wHwZuRwsaAwZY4onkovzKXKc4DAv4UVJjqja9faxovQoWuk1EGmTcsm"
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

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
    "3JWXwGMJvGx8nMzKwy7GUUrjmKQdfqqxZDsxDsvNMBwKzHWjiyXhXe1u8YQSshzB39hLTW3LRvNsbydeu4Uacr9c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yy2z5kxEU4YSWh4adDRoYJtuhnZpRK68EdoVJfjpRSpuV2ya6fASwR2gAL3FJjW2Qa2ZPy57pps6gTvQ8SQ6229",
  "key1": "5BvCkjgJcFPNV56hCtDpQaf1vuy4oKi6Ac1oEQPYjiVKq1VcH7mQSV5FCQH4NLZVPbAVey3XcxUtYHGMvTYo3tLw",
  "key2": "4ERPsBWkBpEqcHQTPYPxkE8QwrCgrH25ZYo3xVS3Y7DkmdYh6ADnGWJvjsJP2K79ZwmdA2StLdJQKKR14Be7x9xR",
  "key3": "5P42Lxeaxf66v3ydLy5JZhghYDeCX5KovoZzVR4c2hWRSY8hz2TN9f5VpfAng4vwxj7UYs9Ndzx5DSF8M8zreHh6",
  "key4": "5huhsiFeKdiP6eJDUxVvMoqgyXEMhuKTUSMdz7uztWZm2UY6zooJYvnYh4R18DM8ZjnCJygkizxr2oJd5qw2yfky",
  "key5": "2yr3YDcMh7WZhNotRBDd82hh4XhM4fE4SnDfXzuGkdvrNHiMQLGRo2fBiFgUwBGQ1HoDu2F8DPPPvgbT3MRbVhoB",
  "key6": "WLr8BeoRyVgG2nMJhw3Y5ya4q2sNopaZBu682HGDjQgxcBZEPFv2y4vrVjCQe4aqrxsfhbfVuRWSrQ7U8GUyoG6",
  "key7": "5pUvRYjJgnhawXZqq5muqBKfVYAF4Xm5fb9CKTf6gH5xCYKsYBuUJUfkz2bgjq8gwiE6goB2kVaMt42vfLY76it6",
  "key8": "5ZdVjPuFPFzzXjjATzhgxhQD6AtSX1HQ9Wk4jZf2amR9pLLK4T2NW32nfkDrEby94FXVAiZYtKXqwM4DmVJnype3",
  "key9": "o5r4va55qjjkXyenq5Bp3fVo9BjkjhWFCTX1odYZDjFP4qWdB67NAVqnJbNKXTTNricHxE4JJ66xBLE4PobTN9G",
  "key10": "5y3KpmmHqiQqCxp1T5KnKc1GJp7HwegvS5AG4fumaae83sFAa9c38zDsgxZQop5g9t7uxT6kCnoeJWb8rz8NWkxL",
  "key11": "4J9EdQgxWiHi46ZpsZPGjpU4e1jNNKhM1FwJApK6JGCdpxcrSXDh7PQdfmYdeZ4xU7ANUzx66CQGWvXMwtH38G9W",
  "key12": "533DHGrcS2jsvzVCPpHJRVoYPW2hUWijRdNiirPHDTNs38FF5dQ4D9p7YCGCR1mNLNtwGjcPeSCKGjEiJKBuiuKw",
  "key13": "47bFdDSqLYCZcLK5eYkxXSKCx1ngJCJsve9DiozCedWX964DGVRN6BDsRhiFsLe6Wn8Ae4RDKa7L2WMvUsaPSurW",
  "key14": "4Y7X1HtZYLxXDuVbzL3xVkYaV8TBnT5FTmqCD5RWuFD2x6roj71UpKeQkqPuxLtoPZvFp2okrWZcjQLQeF23Gqn4",
  "key15": "2VDwXnV4EVLrZ3KbcsEGC526DAt7M68E7cYBX5mzpboA2HbGdKd6c6Af3FgWAUqj2eGww87WfVTRjfoSgdtuf6z9",
  "key16": "5Uh5bGKAr48Y7i7hkuyfVFjsfb93Skur2yi6NczxFsqQ9FExZaNYdcWfRUG1t58JgiqAtcRSjErRoF28j71Cs3Rx",
  "key17": "2tBBLjUkAgAvvdttpFFwKKChEHdLvEShdu9zYMk9DvGLN6pqSAvtehWp7wi9WYeBPai1BMMGXD84aEuRsPiHcdKa",
  "key18": "5fx5jkvutifW1vtjvnFEEjnmXdcN2DJBhoXvwSGm1Y7coU3A7uagFtXEwkFnhHF9vrV7gDvEwTCLbj1ezaQBTyJg",
  "key19": "29zC6iPrJL8utjxu6Grzpm47RAyEB7HK94oxpN7PK53rV6RNNEKArbscsaizD3MHPFitFnoFcJinuKD1tKJHMrvh",
  "key20": "65PgjsvFKxEMmJGNeHvsCGWxaB55XoX1hy76mgmDwfdwyiaDHXcnoxJvEr6CApFoRimeH7xiCkZhaqFUHivnXrKm",
  "key21": "2jQiedq39xqe9sckruhoFFhBryE4JtiJtkmG9hK2XCmnqKvgFYwyLaLoEmQjzm61SHKHUDAGF2VmcTsvuqN6Ai5M",
  "key22": "3aqdB5kQk2GVNKZzEh61XQjsfy6DYNwPzx2jAECAvNuoC9pqLAXA52vZq33Ry1GXo2aVJseV72Ava27XKk16UHhp",
  "key23": "4xKbP3VGJf2VWx8S2ni3xQk9ntXu2nsiaQ9faoZMFu9Q7DyrXvoJDYiHcxHvedoLM3Tx3L3PdAu3k3bZyc7tyYRp",
  "key24": "6kFcDdJUsx7eaAVEycujMRjKEvaZRHH8PpwPuHP61BTiUYaQGXEeMAWJdihmR4kNUT5DFEV5Wd8QjKzXEAXkqS4",
  "key25": "5ByhPvHcLb6sxLcYMvhhXKjnWDspLXpLfh3P5EdLGMvQ9ZfM5pY6YrYq3eypY1m9gEVgheCYiR2Q9g8wNGK46x5p",
  "key26": "2e5oWkftMHPhtxva1V6JCYz5tNrpzJz3HEWPDfdcqW8YavSifHFNmm4ZGKCDjshdzVAu4JpeiMYGZYFgyqTyWNkE",
  "key27": "3iucxuVGhmc47iQBtrjChA1W1VCBzbYetUxX3eN7Rcv7TRDuD8chHgyqdQHATJiE8Zcm1pnXwnYUYpsyigPZVZXS"
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

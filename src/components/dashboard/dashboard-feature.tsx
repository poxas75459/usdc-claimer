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
    "3bDQ93Jc9f1eiA5L9mWgHcVLdWxBugdqQdXfXmB8TY4Ygk9BQS76m8hbTECGa5CycZrdfEdm3ug2zDDukr4Eong4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X41fF6xiiXKfemEjub3Bouy35hWozZSAsWjubtZtqWFcn8tSYbV67iqrqDKgC4KEELSGsJsPoVm7YdPDbtoiYAh",
  "key1": "4btvr99GEVi9ZYBBisRMPHHJU3Q9sGQFuPBxHr3KXoaGF1HqSKTmqgb9TEaGTqaPijvJdNDQMMgJcr6Ek7oHVTTF",
  "key2": "d95vJ5nrac2Wox98Akhj9Zy64bD2vYYyqLgAosCugyiXng37zfzdkyfHwW8BvbnANUFSZE99D6Q2cwjkfuSqQ9V",
  "key3": "5RPBFU97ALugeR5dY1T5AhDdycrwSuYEwixpbFqtwvNNtSpwoXkkCbrHKFYdfV1QM4bGj9vqR8qUdmjLN8W98kfM",
  "key4": "5ef8Kg6fLdmzQJoFMvRCAjek2w4dhmYDPJS8nWNzhQ4fDnqENPijrGMvQG1krwSbFezkrEfyXmAAPAe9Q3LTArnH",
  "key5": "irH38MnPQ5ocqRVqcjM5S2h5EpuN8miHHuuvPtfq9WqMD1QfKQ7PdMnA8PAQ5MGakBkTvYCe4q6ofXVKxrC6HwB",
  "key6": "5xr8KauTmuhdKuKKbNiEdqXSJtx1jqbSMydEWTSrNjj3TvGnBEt7dyyWAcuCQ9EnGhG9sHcT6sUS7V3QgqQg5qQa",
  "key7": "2oMcEpzxQfcnGQrVMCUfdnSmV4rfwPevUbu2BGdnSSt8cmng8oD68QMJ6WtEmg8HfaCoakD7GNKxz8a6Vii8tHSZ",
  "key8": "2QZpGU4oJSVBH7iUHoRRxdvvdaa9gce22gaNZqaPcDGbNPPs4bjQzbJBu3YnG58yMJYB6set715HMyuzRTXWEdbA",
  "key9": "3nk8zFZTZAtr9b2th4ERvm6AYWr2vLzRfQiBzSMpiH5NKxKKSe1u3Jj4WwwhzLk5tqoaLgyEs9V5cPWmaAvL7u9D",
  "key10": "5sWbxMqDDXLHK51LowsCG1P38bbXR2EjzvURZoF6RgJ5khrLL1xxFkqCBoh5A4jTHRCQKF7b2mVvT53UDmZ7QiwW",
  "key11": "47H6KQ9iigB6mY3XD3f5grGAnFiwzpUfurSr6YTKfZGAatVraefZZRa7RtXHJLcQ8n6ojsP9uJxG7RbwFYKoxgSM",
  "key12": "5KwLC4BFeEL35XEDoewWNpjVSQ9ovX5z4uAtkauw9KukghUYWzU7rh6fSd7MRTbvzXZreBwwiBPHfwNaE7Xt9Y14",
  "key13": "3WUoADtZKjdQbZ17ug2gwkS3fYERdyn6fgi4RjHQLNrxViW2yuwqZ7PFZttYYjq6Z2FRQMQDNeufdsvFi7L6VPWc",
  "key14": "5LEsVhzmjfS4eBAfRRZPqYgccfxHBuqSsnuRs39YbQ5GZ9efzRxpmJQigWCpD7vAGF3gJ4ZMvHbB4WP48de7rek4",
  "key15": "3RRCyuU7nNm3eeLqrCd1uvSnYDPUYnz9uxxnRjqc3g9v5XKt59kbujpKX1g3DxnDnCzPRtRdBZquG6XncLzTxn4C",
  "key16": "5rNiomo9ct1YNPQAKXEU6VNFXZedVXTXTpaVKgLaCTvS5n2WfZcE67a6qEJqjgbRRTYkSuV1sGHofjwf1SExr5UB",
  "key17": "5cLC1f4NfKkii179Y48rDxaqqdxpffrfT8hRCqKoiSp94MHkbo1UtoXLgciopGby9SePHN8jNT1a8aYvr532sdKh",
  "key18": "4YmyF8HMdAao2amn1PJGnYzsb1JiGKSNndRBafTbvBibRWo6cLkKKn7Yar6SFoXr3GZaKujmvt8RYGQRAFDfMgjm",
  "key19": "2qi9axfULFxJTZXAxWD4hs1sermxQchJPgKFH7cfnquG6YKU3VtR8rM9eybRjr8tPuvHsgyvRNJ8ZRFDLYtQhxsg",
  "key20": "24qpnckQt2dHtt5Bncuer1juEKy8xD6bs24ymPjGGkL7mAJppiiauWfT7Dhf5yLTZdHtF6y4HKfKJZP9UHTKBFaF",
  "key21": "2g5Sgs6h7AxeyawkWKNgNzzfmYzyUTZukTAd3mtCNUZJVbuYrxNQ5rJL598fKztXxgy9hAEPRXDNYVH5VEzVQqjL",
  "key22": "5NDP5qcuh4pz1jnFanEGtqZ9adDVVUJFTgRxyqoe8mo5rTuwcntCt4T2hTQiDgN6GpenigcfifxTDhnxMBR1x4J7",
  "key23": "3UKULcSY5onW2LX52Gv5YE82wP1QWhG1SWQyiddYP84Hf9bj5TG2W7FPCPhK6Bh5uhRCJp7A4gVqb818RwnQEEsD",
  "key24": "623kms6qdXzngV9bwSAxEFY3k2sz3Jj79DkuFZc8x8GAKi4YoeGufrbcChd2ByMYA9px95sbRtop4kp5J1nQGDhE",
  "key25": "5k5M87NU6DxLQNZ6Rm1LhsZ1MGGeLUsK4892mzx7q8FFHULZnEA6LxmBW6n3BsJKVhUVTVYVBPouyEXcbGFnBcoG",
  "key26": "4ACoXWBcR7wA8w9AZ79ai113r7UKaVYRx8sPskLqzviB6SWVmcexa49MvcS8BxitQAvu41p2gpAFXiAGQDwDYSBj",
  "key27": "2GiK1mNXUdSUQN3qNEFn2DqmhABvEEAdPELTUTUdzjnDpHNc5exhpDmfjzPfAVQwyJRiYYEQSnhcAmVyXTMcTSWm"
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

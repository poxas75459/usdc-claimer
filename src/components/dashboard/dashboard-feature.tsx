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
    "52EvVLWyCLpScg5UxC2CFVYsxRmXE6vQUkhviDbFaxA9fDNfFUwYwDpSNn6Lh4G2petmroeU6it2w72qKxijbqfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "335pUKm12mSUZ3XKSd6wqAHyWgvLY8v9kNUN5MvQBY6ca2hDUJtJ4nBZTR5P7d5GpqjLfbh5vMDEA5W9nm7xakEZ",
  "key1": "5d3UgYtxMHYonyZ6wcxTS9QBQpDAUomFMcmfyRaR1uXB8FreAu43RGbaeVN2iTsc2N8DV8JgwjEMzEpcU3V78Ebs",
  "key2": "hG8R5JBBkhKBrM6xKKu8yiW6euNLj4mLeSnMiafNFXqDcuExh4gGs3SV1cdaLyuDTuHusp4rF6aqcpVnhDNx1Cw",
  "key3": "2QgmdpMkHF3mnE1MJc9sMkdfwfSKMQYwVtFLPvsnytVgw6B1cEc3n7gEs243neGhZRqxsLBjW3UqhxfVe5ztjJJ1",
  "key4": "5xVUHeamwU44CKpHiEnZtfcbCYbXdhwWNvFhQMj7Ygj5P88d9RsDu1gTso8pgGNwdzqgtDygDmpuP5h71JzQ4Hns",
  "key5": "5wGCFSTzUxnNjQQhcMpxK1YJJ8yDrpxerR9AHAidMynS2bAdeGZKWqwPYdnxh6zwxPKD23b4H17cZrcitCDq75Ms",
  "key6": "4hQGtsxkZiZgsjktteknfQf2P2c7kbDpLAKa2bh6ixwM3KyRj7Wpdy8QTW9WbLD8K3shG4xR9A9wMyi67ztcupL2",
  "key7": "2tir3vzMqLciPQAkECZ5k1JtWKsHC89dFS4YiSFVVaSsbhWc63vr8X8m9T9wqdSknBG8rWNNi8cfs1HncWQ1Tdw5",
  "key8": "Qg9axRwM1WAmLzgV5ynYVrTfYGS1YptTDtgpsmMaYjhFFFQQkoiTPzw2tAx96LRaSiWEHsipvwtrFntPuFzdg1k",
  "key9": "3rmvM8SbTYNNj9puPath2RJpcAeMYT9q7YQXmiXqHg3AkRPGx1BZVGVTnCh9MfSHbsJb2AbHV5oJukHq5oBi7JPh",
  "key10": "3x2a8Hw43zBLj9mLM7Hasc2Q8QropiuLPC9uAd2v8E1Ww2wo3H23xXZVUusby6qb642HWFNmd3mhrZk1MyEQo6qs",
  "key11": "4yGKzTHu4byFSpiUqxN9N4xtCyiZk6i3DrgkNAj2wYgZ5Nt3Q2H6Z3KFe7tMoiuUuyKVUHptCzadaWoo4FcAfisD",
  "key12": "4X5NFCzcYWvrgq3GxJdFjRmx2sEKpAUEm5bStswq3CrQSb4eQHjN5AUEMs53HGud9ZVYDCTkzXWVVSxBMaoVJBwB",
  "key13": "3t9uD9uq66Bje2adBXKvcrimNKu1kRs8uWPKr9G8vRgtNSLUojKCx6TkRdMeBMFKHK7XxsLgKo4UQmrFmFCteCRv",
  "key14": "34vEHosCA8aw6oDpBEGHa2cWoTy86A4Scx9GnKkNhTjQihNmFJ3Wdsui5by4GqNDXWymxehkyMS2cTmXf2KYMqAh",
  "key15": "3AQ7f5wswbxsooYbbWQ3xdaLjT3DYMASLoHV1xMLMGBMGVWeBcDMwk7ms9NYFsPRBzgt6dNrigTYy9hjuCumfyik",
  "key16": "REsGMh89oSV1YY3991ZrLUe9QQnp3X97XfgrdCLzKhSWtYvkLVy1TCuxC5dh8JLdjZC1pmLgM8RC6XWYHzUgbET",
  "key17": "4Fmxe9HKHvZ227tLSAFcMByeNfbAu1h34j7Hi2VeSZRUhrWYWmWcUG23UoEESEvEsFaqq979RBe5oHvN4HKh3mkP",
  "key18": "hXuE6CpYvyY8aWpPQVUzfSLacczg62tKdhnoCz5Ra3YHKcKit6RRFLooTEJssRAGryGqTiNoBY7raaZRMRkXA8R",
  "key19": "5AKr8qXJBywkrMaiqF4E1wxDMCDigxXPRDq4NgevRSwkf5cm87qjvfcWqm5mzebmpgvVbjGFMFDHkCeqgdniPcFW",
  "key20": "2LVvQaLQuLrKMXFhRG4djfLtCWdiEMbksk1saGu2d1GLe7ejVhehJV98t3cgfzCRyG3sxKuQunG5p41k69teKPK5",
  "key21": "4p3VJT3nFTnhNKNi9hZfrGHbBfiGYdfWF7L82YZ1oA95aSVD6PojmUDYAFHMqVWUSJcFKv4kbrt1KsNXW6M87wAY",
  "key22": "eWd1Ytmx5USKHgnpmjbUCC9BuhWieAPBGD4uc8751526PFvSq5dqVv4EbSuiPYw2mEURdKVneAPxUe3rj1pkcfz",
  "key23": "2kQMn4Bxi8uJiSc1ATSpauNQbo7VFUcRmUhBd4toVRjmeyTiFqjQXzbsAAByDNt9bhFSYfM5r7fGSiVrpmDZu6hW",
  "key24": "DBCEEarZ4Fi3o3oMmLwnR48zTHwZfBUEZaVmFAARXqv2ZRKAFGbQxCqRurCCSmKX9inhxJZZwzjGcbXd1gMS9tN",
  "key25": "CvSJrNvno6vXwLu5KWG9EeupesCU6BwCGTyjySrbaCJyKzXBwuxCTu4DMPnZuTppAsuXKM2SmTZCPEx2g2AwbsD",
  "key26": "4eCWEWu3SbeUGLfMcPeDJozxQhAheaasaWQXnQbM3e8SappAavaADEphUKzFdnzWhdJtxdm3sT5AKQx6BWoZTDmn",
  "key27": "15QECQKhs197j93u99j9JBpprLzdxE7FKB1w2D3zziscUXyJ6dwkV1Dt2RL5syAh1xLwE1gdeGZJbF5mcNebahd"
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

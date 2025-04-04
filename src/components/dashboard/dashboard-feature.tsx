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
    "4GKiRrf2YC2QHtsC3ns6dg4BB6hHrzzFJwQBDbTAJm6mjkQaHo7Sm8fdjjACmVkezvV9KCsMTXUrwmDkSvoS5pdz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfmRLhqrPCCs9P3j3v9m2YPMcFwjQ3BcLMr2Hy11R6oBBXNsAX2qbQ5TVQzZNZXCvQQ1sHCxnW6RUMAhnb4MVM",
  "key1": "ER5Zs65Ab243WNs1j7QogALVh1epEjxwTSZ3S98T8CAZhAuupEESphMp6ybJaazs6Vusb2AudgA3Hc1vjERSdHD",
  "key2": "39wbp5LH5DZspAyybqjBeSsNkNp4FSScCxeXXQQhCzJ9zdNTSZ8G7VKkdvJreTREW3ysrEHmNwTNuC2gMxvShnm7",
  "key3": "2iZJrLbEa64WJWYAr4msmmWxXjbowuPpkRhRfo6ZEmuSbDMvSaFcnduch2mUhwSpFAsZQ9rAL48JKP2QEXrbob4f",
  "key4": "2FK5CTsg1N39RdMAmFAzedhXmA1US9h8DXDCia6sXQqvYg7F6TnRWFXUgSKQPAXoddtoVdsrx56YJWCNqxiowtHv",
  "key5": "3MNS4vYQHxbU3qXfaMk8Rvjw8cftKnvjWA38phUnNefNw6yyAFUyXajhg7bDFVho8GmdoiujcM9WzjgJzPeMmAjQ",
  "key6": "3seQMHSQKcYH7E4Xo3s27o82ZFCMbCfNVg7YLkkqRkz9VrLLWQhTYQdLBbibDVqgUMvfKV75wtvPpPvDJmjvNGDv",
  "key7": "2AdstuJxVRrgonwWUHsFff22YW92KnQmx6ob2bzzgHMfqPhyAYibTw8i9Fd9imMwfbMwnjCh8cyr6PcxTouyUntR",
  "key8": "4NEYdhUT8sUSV5NvKK2fGxa4UnsPg58Rju8V39EGKjuHx3meKr7hpPKVvME5gaLgYNXMc9Q2HfQzYRcNE7QmyGea",
  "key9": "3kM4pkEQ7EutBoVJqKXfrEZWSuQre1BnCm77Bse7LZ6p79jHY7e8ToqC9XpTdWRADjKzVb51iaFLCTCY1D6QEx9e",
  "key10": "3Qg6APsgDjF5iHa366nMpyE3vgsPWVwpFQnuKsV2uQqG4tEruXXLuyg7eG3vFaMjcQngfzmyueDgEVk4v1oEPvb4",
  "key11": "3k8rkYeJsLDM9gjPrwGXait5wTy6fCeaYYPtornegyiFhW1id18rp48Wp2tt1VAsfAXeQ4P8hm8Wmsucjbfxnomz",
  "key12": "5obyW1Puj3XLGvRrQLZj88pFuieHLn3U12nbv1Y6jJSpN6cr6ELpFMEd6rVi4Cb3YFm3PGYFmHnJdjZL1wUahZ3N",
  "key13": "fRhunChZwXhGgKwjmgQvpdQ7ZrhWwxhbKUNUJ8fNoEiiRDwuJnyaERTavANbkvT8EJ8dvhm4iFckFYSA8JmPvvL",
  "key14": "5PCSy5gDR45z6ApdhtiZqiJr9tD7uWiPEqMAcKhtQKAcTWj3irtgYsNvuhMgjrrPpamq7Zofq3vAiQv5fQA96c49",
  "key15": "2fVTndjC2JM5aqp2A8PvZh6yxN89UwnAZsxVDwVyG1HeqonduvbNeivUYz4DTnbvxJN5x3YcDzMpk4jj7TpLJZRe",
  "key16": "5JPXBCuBVhX5jhFSmzwtzGz3rv2Qx1aSMpUDiSsVHaqPgPiTRYCfk3qE4zoKYv7Tt4C4G1CHvLJruvU4h3axYsPu",
  "key17": "2znDJkZnhB6ryQfs696eizQTHFgZeBPB6hGXiJCwtzzmAUCCpTwuJCbJpkr6tifQkbz3afkysGLMxAjZBmAofmhf",
  "key18": "3r3yDKut1pJGaDfZAWj36aYb8rBp8pnruEQTg3LVptosdY2DXx9KdNA7P3TutEbu5DKk9GDf5tcyKx5NW9EgTtpd",
  "key19": "i6TCBbh6AgPMmv5Rn3goaPSsQ3ew276a3HGT6eG9BDvtbMiv9YQZeD8hCHnqZuXWLYgFBbgDosAPVYFrbrKqwMD",
  "key20": "5TiHnQWBgh1MhaGLf51SwamtPBRddKzoBf1EjKXH4pWkimbqic3SD8z1Def8qZxHij71VLPXdVPLmRxu3FqZyPb7",
  "key21": "4Jr9oRYwD1iT1X9b9DHVyyecQ7SRiK7oeY3dNV44tCUhBbPcxkW53Ln1r43H6GBwGNbjpMcMfcgWQMvx5MXCZPje",
  "key22": "2iK87V2uj9YsnsCUf2z2qBdFbJm47n6BJrZXdApqa5ZUBeGTeHE9zgeJsMENosiGAmXbpEUQdvs6EMdYPSmKgM11",
  "key23": "jpq3UcZ6KEaz9LK1ZQqwRZUsUxZq7yEFiVQNPNkMtb75twj8P3ZSivW1yQgjmoja2mcja7P32NcRu8tQcYDi7jK",
  "key24": "53GMQZRqunsfK6oqfiq4uihdFLV28QizxkUc5J6C2SwD6vQA4Qhf1Lxwcj6vFeS3hXC5Dk89bk3VkxsDsqDoyPAC"
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

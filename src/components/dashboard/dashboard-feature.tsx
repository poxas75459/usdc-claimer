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
    "3iAYNsyoPzJwBJaVYYULXS8ZRZqgDWGq7aoP8QMokpprtV31nbit1hqQgrThMoC7b6rEwNaux2B3cbCQGJ4nHvAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5We9b7HEwgYm8ZzVoEyAJ9d1r8iTjWW8i5Uzs9pHrWniapsfX2Ajoh9sEXqiwWSfgoA1GXQnsL492d8kXuGtdoUp",
  "key1": "355FwNWYxFJptRSFC3e1Gu3ZCgbzbEDvXZX6Spghiy9P1Y5DxAMJ7Dvqw5YXiXwDqQ5JXHacmJMcvKVeQwi1YgQd",
  "key2": "aHQo2cDmEi6N3jFJVUQU4iAtWpQBHZi4kYthSpSTLGWrKciA8uo7RFeir5oWr7CUb4jVdreSBh1FfzwtwDRuwMn",
  "key3": "4UKvcYhhgbZ9ZNnEJfAcU5tF9qan6VvbrmuWVBbtczYu3aNn12D9WgZocRS81ShhSfL9D9pzJza7jHGYqMk52BVL",
  "key4": "dCUgr5bHsbKdyhe6NJi3EfbB4vxpL5QrBmfPTmKgqSjwYHWjh5nudi6iybddYP4eEikK2jdJLRDYgobtsKKmKDi",
  "key5": "4WqXFg8YPNmKohACu49Nsi3Nd2WwWCau1T875Ao7ZVq6sHbMkL2LaSv5A5KE1536GFnqdNQT8qMEJ1wh5fu5hLLN",
  "key6": "3zrBCHm7KyAEcuAN85z7YNTcgnHDSF3wrxCnppCfHEWDBrndjWbuxEFMuCgAwE1VmY7wvohKTzM8AEmUaxgemLq6",
  "key7": "5sXYvDaEDcC6ViKfTrC159SLsrHCdY37ZCk8Kkb4Qppo7oHdm8NZsLdEzGV78DKgYEJ6VWeQDouNnwMtNMizJZLp",
  "key8": "4pNVa3H6pbAKRJU15ANQWjHme8rKxS5muxT3k343tTUKguXZBVuwZKmaEYkit2V9nceEvGxPhBM4Fgm2xUb5w5YA",
  "key9": "2vfKZyhW1YA6wBeUEPbuGJRJ7imntkDTJhMABp4X9bTBWM9EkkvPJ1qycWX8YrxXWRJDPusNL2gEgNxHQZn8kHD9",
  "key10": "q8aAGX4je6ezymrfu4fDN4LXZ5n87kvuTiDEJFTVukGwsmjZi36mUD81VdxYRoTzydh8qhQXQFndq97Mowom9TN",
  "key11": "4BS792Jfgiyvs7CcPjXqyPC3bgrV4JziHk7gLTyKtXh7SE7ELmEgHviuKYHgmtqF9pevpXvigpNGQNtGVCMwHtCc",
  "key12": "45KFQh6uVspAeQvDzxP7F5F4Vq4avgfUT58SbadGyQ6ALkt7WtXrnYVmvhJuuDHCszc5mLhBPmk9JWFYqcZoBdYG",
  "key13": "5baf8mQSbNbaEkEpvJnkZ1wjkGv5c1YXQAZPgFnRxfx1nogBF7k8uNi6gapf7kwcatCJsyozmjb5Vc1D86wCdbsC",
  "key14": "UpJts5T34Be1HA5V4zb6Uzxm5PASaTx63EoBEJ9nDnfXvh1FTmBtyjqttWyvVFghUYzv2CSqcBC2iXYp59uDN17",
  "key15": "YCgekaf5kiU1kxYeG8YiZCTu3LuCX3Zpp7bgbC9MKR1Qs1USQj74rqNW8k4CkWFx8Mf9QFdi97v5ENYFGcTo5gX",
  "key16": "5vcYENzKXGumcrEfRLW5t9weAyHcWLXYJWkVupfPkFec2LjnwTBxcrsJ3Y1GN4AgD1f5TBzJWuLUpEyCVbdnyyUD",
  "key17": "4ZHJiea4PNJzfxNErbDA7jXzac8S9qZ29SfQnJR2to8ib535jMCUpyiTe62JwDgpBJLzdgQGYPBQKUyiZA3peLdy",
  "key18": "56DQbVdPBfrHrYji5N3oTS2x6wgZT1CB3Z4fNaq85P4TojqXxsiodQLiMX1tGky1jJsegF257kWpwfamR7H8jyFf",
  "key19": "3mV7M4zC4nGt8tjLx83Fr5TvQEARWVWoMYRJgxFxTJmLfSHeuheE7Sgic2MUFw2pZrAahs3qpY1DUqYqXRhaJoRL",
  "key20": "4E2F42jDLUL5ZPEkhrACptyiiFZW6Zo23uuDy3qJ3H9Uq8o5TauVkkCc7hzVFksGrryznpavQZxjGTayKb3BD21w",
  "key21": "42fM5xT9Dtkz6QLte5PMWdrixFDJuviGpBwdRwHxCuGUf87YhiNnQgg4RtRrX6ycbR3XRMQ5W5ySeUQv2zZdEZV3",
  "key22": "4PqCiBn4xywKUHa4y9Yai9sSSoEWPp2HK71ZCm8sWsB4odPZzqYTTUGRBh7vRxhF7oS9JxuFooBQJihEWUQNYdoX",
  "key23": "3jgQ1naMFgTneBZ218kdvCAmqq9Av9ExXoVqGyWjigkhJFpFkMxDYnMZEtPQX2aMUwSzV6KewCS4eb7Nr2HEXP4b",
  "key24": "5MpCGTzDk5kmZ4A1epsPdAu3y5dFRzDugL5YJakiyeGPDcuwwxQf9YQLqG8x9xxbPaLXudrK6tCmdXAFDq5HHv8Y"
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

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
    "3pJGDsssqFBY13pXrWrgeJzmDzmRJkxVG5U3soAFu4d9bziYozsTwfEsmyJCoZ7hqebz4Rs5CLCN81iDkASPLsV3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isfBBM7XKRazucHCzEQqwjgjuMem2amGDKe7jpKVSv9vRadcsiLNWLsj5qSQiMNKiuLt1VhdChoUJiEhNB9HmMk",
  "key1": "5RarrSm8RcxBmjxj6N6isFcjYZUwnV4MgGLknwAagiqgRVg5nNQQ1ffLcptQxPxGw1pggpsaBxCe8rhSsuo2DBmc",
  "key2": "3GSHBmfLhdygt5RSsUc9ZukkpKAb37cJ65eQ4hd1gw2hYzY6gfeK23rVjY23xP8hPCemeZvKWwUUtuQ4FtzCznfT",
  "key3": "5WVvMHqqrBeEjBeVaJs1zhJyofVsDg9YcE4udkjXZNYdQvw8e4ih7DyuDqfBBS7GiQfVohL3hG4a3fVtyPpeiUSU",
  "key4": "3FRM58XpofLBuBtqD5CjMXo3nzXL7jwANdCjRwk1P8EPReYVBo7Vj1a6i1sUcJdXrsZaQKGrPUB9n7oZ1jxBVCho",
  "key5": "3JeqeD1BJqMGPJzCarfXWMtucHDgD8jDankD6KB5cK2xnqkDZ8bFskx3xnBwEJudJv6h5Ttpj2A6bTLpWdqUgmVh",
  "key6": "eLcXL11u3nXZ5BLLQruFXCgDyTu1nFGeMJ2pZAfNxPZvqp7gGsU56dCYHsBet1pU6GUFzjDaLsqgR6qKeXY9vY8",
  "key7": "5fYkMhz94h5KyBkyLyxkRxjEUJosSTMGUYMEwqqw7DxZ5ZW15khAokj8AGd9DDRnf7NhkSfxiNRSFP3K7BDB9d7i",
  "key8": "G1VgiDnejoJA9b8vDYpnDUXVBEkPr5DdWrJBAkFWvkDKC38ci9VbBvbb2FufjmyuASWNdhq5L2x1AuX7XPzqmET",
  "key9": "4nQne4SeauC9gzzukqVPeJdxh68WJTpCUGE8FgDEdNrqTsjCiEKjFu6FbzvWDcVsTMJk6yJeV76BHkJa7D2NkB6F",
  "key10": "3pagoL1YdyWnzymauAtfxGTYBwBT59Rnm7gwzfAR5aQ4QByotu3sHH5ZFPp6z25qcUG55A6CC4Srd9zjeBrSjxJA",
  "key11": "3arB3D2TchhSdSztsW6VrHpSA56TKEd6NQFS8xnh7ssvot5TV92x58CpXWzAqK87jrsWPpDJewLGLWMLr2NZbA8w",
  "key12": "2PDfC9j76cwSC4q3D7aMypJmHiAYWe6eC6DiCCKjMNRdS6z3YViaMB4qc2voE7TRPDV3U3LD9JMeU7fyrtzq2hoy",
  "key13": "4G9U4YD3ysgEjTFWu1sqgKwi6dYM4nojrLzkuzqerN5mkZq1dV61qzuSSkNsvbfjHMmsjmtW1ZsdhndgTGxQW72V",
  "key14": "5HVY5hntxcdnKFe4s8vvLE55N7bLyaB47kYFd6pcCamNLT3vVLk3s3gFFi734JP3eQ1RejN7aaiBHFoZY7JELg3r",
  "key15": "5rFQmMRH1nDQHPRwLLC9NDdNyyoQkmy8MwhgiKjKuXko7aUmngCEoJbTjnW6x2sNLuoQ1MV5V3jzQnaxF81gYbF7",
  "key16": "5fMwN4y3FcER6KzCM2En8DiCUTDktEf14asQbzxgrq8hh54bAxsynCJuDknxJxD6cPdGAPUD3Bqu6E1ey8Dnu5ub",
  "key17": "61Fa4486vtLyY3FpYaofeJ6qnF57SYmEiwbyp7hTkT6FyZbDiBtdEQUZyL1ekNm83P4XxqWjqSYXnSWXD9QaE1hA",
  "key18": "5Edw6qiqW8U2kHC8hiJBk9rJqbYVjE5emn8EwChhPwhKBDwvgfphK2guFvBvJxDzjBx54ZJU35sdegnj5jWxyKq7",
  "key19": "ZknT1rk1oAVauBh3XHJaY6V5H3sx6ddQgrwaZoWCm5oFiK8wGUXPDbYN7hsDz6Zg2hvcwcV5kwmSfoaXrbeRvVa",
  "key20": "2HBoC9Yjr2byWMpbcc7ccD69134kP42ShuMuiog1AjEBM1kfBkgwg2yJrpGx551jP6LLVEP19Ervj2zVnDwFmwbi",
  "key21": "5tUBPrWxYT4PYKWFvTcqWuzdU7x5spYd6B7oGeHiSm8Z8SzQVNsDEMHU43c9URFQpw37ePhDBeHb1CdYNZ55DwRW",
  "key22": "EhPUjdYK9gFJamFLLQ5F3QCref64TqbTijUxrFMpBnsycK1yLnxJLCJvNtpWK8UqRQi7paYxDQ1oTbJVqGE4Cgh",
  "key23": "5TNTLLRb2p9Ls6PUXS4P2YFi2WA2zJ3kVBPw9w1wrCxC9ASYczgktedVegyf6DT5rpd11uSmKS5bcC6xfoyXsJ8N",
  "key24": "25RNjiPKLWjzhKHxFTHUpDq4gkWgHpSygES6vuJbzDa5RbiyeKVFuBfL1RP4qGFF65qBrJfgSZAXt9bg94yeUvvF",
  "key25": "2R2xu4vixkN5NzbkeLZmFNhbLSkJeyUpF5JPMckDKTdiGRhcdP3wdkZSPXHxkKTCnnMZErymsmboBCBSvRYojLWx",
  "key26": "fGuTYR7dcWHVYYKUhfMfxiGb4bnwmwa9r5o4wVBtwSNEGSSgxicJGJD2dkDdHQDtg9i1VqsRJCSc7ovtEHszeTC",
  "key27": "5R7dy47irp7qLU6feqftVo1mJdjxyCNodcgdPyFZy4t6Nfxi3Nen4e28VcipouSC3mLPNhqWE6uGwiUp12p7te8H",
  "key28": "57c234VU4wh4Tp8nfprSbFV8snZAtxehi1nEP49ou6oY3EQT6cGKuoSQXCV32fgpaAJofNegpg8eNM2xNBJzzEqA",
  "key29": "2E5VbxJga2Yp1KCDLMt1sfyX5qSyaJEeasE3PYjVSDAtKdtvRxQDE2UW1AGamKGAyvd2qp9XguLxGf1o3eHD338i",
  "key30": "62h4PorYFyV6Utf8fCkdV7t4gE4wiv9BasMMAr34JH26UBvvV4sJhs6RtatYypWEKAWoxu1g6aFGraD5esMPs5oC",
  "key31": "2swMnx7p8gMmEBvbqqUTixxC3U2KWQDwDNjg8ryaGBDAgWzjPEq2gLnckNKg6nWt2GybzdGwHKRu7jC5GVkcPCUX",
  "key32": "5UaU3DmGWiLMc8sqAUrZv1HfNudaN7Y3ZGvDyvgQaj7B8QxGwHVUDXDfbYBrcwUhB4v9quu8Qg5br66xQDvdR4tp"
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
